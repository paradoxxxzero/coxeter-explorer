(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function PS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ke={},AS={get exports(){return Ke},set exports(n){Ke=n}},Tc={},ft={},DS={get exports(){return ft},set exports(n){ft=n}},ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ml=Symbol.for("react.element"),RS=Symbol.for("react.portal"),LS=Symbol.for("react.fragment"),IS=Symbol.for("react.strict_mode"),OS=Symbol.for("react.profiler"),US=Symbol.for("react.provider"),kS=Symbol.for("react.context"),NS=Symbol.for("react.forward_ref"),zS=Symbol.for("react.suspense"),FS=Symbol.for("react.memo"),BS=Symbol.for("react.lazy"),Lm=Symbol.iterator;function VS(n){return n===null||typeof n!="object"?null:(n=Lm&&n[Lm]||n["@@iterator"],typeof n=="function"?n:null)}var v0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y0=Object.assign,x0={};function js(n,e,t){this.props=n,this.context=e,this.refs=x0,this.updater=t||v0}js.prototype.isReactComponent={};js.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};js.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function _0(){}_0.prototype=js.prototype;function Fh(n,e,t){this.props=n,this.context=e,this.refs=x0,this.updater=t||v0}var Bh=Fh.prototype=new _0;Bh.constructor=Fh;y0(Bh,js.prototype);Bh.isPureReactComponent=!0;var Im=Array.isArray,S0=Object.prototype.hasOwnProperty,Vh={current:null},M0={key:!0,ref:!0,__self:!0,__source:!0};function w0(n,e,t){var i,r={},o=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)S0.call(e,i)&&!M0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var d=Array(a),h=0;h<a;h++)d[h]=arguments[h+2];r.children=d}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ml,type:n,key:o,ref:l,props:r,_owner:Vh.current}}function GS(n,e){return{$$typeof:ml,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Gh(n){return typeof n=="object"&&n!==null&&n.$$typeof===ml}function HS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Om=/\/+/g;function Ef(n,e){return typeof n=="object"&&n!==null&&n.key!=null?HS(""+n.key):e.toString(36)}function Nu(n,e,t,i,r){var o=typeof n;(o==="undefined"||o==="boolean")&&(n=null);var l=!1;if(n===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(n.$$typeof){case ml:case RS:l=!0}}if(l)return l=n,r=r(l),n=i===""?"."+Ef(l,0):i,Im(r)?(t="",n!=null&&(t=n.replace(Om,"$&/")+"/"),Nu(r,e,t,"",function(h){return h})):r!=null&&(Gh(r)&&(r=GS(r,t+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(Om,"$&/")+"/")+n)),e.push(r)),1;if(l=0,i=i===""?".":i+":",Im(n))for(var a=0;a<n.length;a++){o=n[a];var d=i+Ef(o,a);l+=Nu(o,e,t,d,r)}else if(d=VS(n),typeof d=="function")for(n=d.call(n),a=0;!(o=n.next()).done;)o=o.value,d=i+Ef(o,a++),l+=Nu(o,e,t,d,r);else if(o==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Zl(n,e,t){if(n==null)return n;var i=[],r=0;return Nu(n,i,"","",function(o){return e.call(t,o,r++)}),i}function WS(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var In={current:null},zu={transition:null},jS={ReactCurrentDispatcher:In,ReactCurrentBatchConfig:zu,ReactCurrentOwner:Vh};ut.Children={map:Zl,forEach:function(n,e,t){Zl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Zl(n,function(){e++}),e},toArray:function(n){return Zl(n,function(e){return e})||[]},only:function(n){if(!Gh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ut.Component=js;ut.Fragment=LS;ut.Profiler=OS;ut.PureComponent=Fh;ut.StrictMode=IS;ut.Suspense=zS;ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jS;ut.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=y0({},n.props),r=n.key,o=n.ref,l=n._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=Vh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(d in e)S0.call(e,d)&&!M0.hasOwnProperty(d)&&(i[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)i.children=t;else if(1<d){a=Array(d);for(var h=0;h<d;h++)a[h]=arguments[h+2];i.children=a}return{$$typeof:ml,type:n.type,key:r,ref:o,props:i,_owner:l}};ut.createContext=function(n){return n={$$typeof:kS,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:US,_context:n},n.Consumer=n};ut.createElement=w0;ut.createFactory=function(n){var e=w0.bind(null,n);return e.type=n,e};ut.createRef=function(){return{current:null}};ut.forwardRef=function(n){return{$$typeof:NS,render:n}};ut.isValidElement=Gh;ut.lazy=function(n){return{$$typeof:BS,_payload:{_status:-1,_result:n},_init:WS}};ut.memo=function(n,e){return{$$typeof:FS,type:n,compare:e===void 0?null:e}};ut.startTransition=function(n){var e=zu.transition;zu.transition={};try{n()}finally{zu.transition=e}};ut.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ut.useCallback=function(n,e){return In.current.useCallback(n,e)};ut.useContext=function(n){return In.current.useContext(n)};ut.useDebugValue=function(){};ut.useDeferredValue=function(n){return In.current.useDeferredValue(n)};ut.useEffect=function(n,e){return In.current.useEffect(n,e)};ut.useId=function(){return In.current.useId()};ut.useImperativeHandle=function(n,e,t){return In.current.useImperativeHandle(n,e,t)};ut.useInsertionEffect=function(n,e){return In.current.useInsertionEffect(n,e)};ut.useLayoutEffect=function(n,e){return In.current.useLayoutEffect(n,e)};ut.useMemo=function(n,e){return In.current.useMemo(n,e)};ut.useReducer=function(n,e,t){return In.current.useReducer(n,e,t)};ut.useRef=function(n){return In.current.useRef(n)};ut.useState=function(n){return In.current.useState(n)};ut.useSyncExternalStore=function(n,e,t){return In.current.useSyncExternalStore(n,e,t)};ut.useTransition=function(){return In.current.useTransition()};ut.version="18.2.0";(function(n){n.exports=ut})(DS);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XS=ft,qS=Symbol.for("react.element"),YS=Symbol.for("react.fragment"),$S=Object.prototype.hasOwnProperty,KS=XS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZS={key:!0,ref:!0,__self:!0,__source:!0};function b0(n,e,t){var i,r={},o=null,l=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)$S.call(e,i)&&!ZS.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:qS,type:n,key:o,ref:l,props:r,_owner:KS.current}}Tc.Fragment=YS;Tc.jsx=b0;Tc.jsxs=b0;(function(n){n.exports=Tc})(AS);var Od={},Ud={},QS={get exports(){return Ud},set exports(n){Ud=n}},ei={},kd={},JS={get exports(){return kd},set exports(n){kd=n}},E0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(j,J){var re=j.length;j.push(J);e:for(;0<re;){var Te=re-1>>>1,ge=j[Te];if(0<r(ge,J))j[Te]=J,j[re]=ge,re=Te;else break e}}function t(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var J=j[0],re=j.pop();if(re!==J){j[0]=re;e:for(var Te=0,ge=j.length,oe=ge>>>1;Te<oe;){var q=2*(Te+1)-1,we=j[q],Me=q+1,te=j[Me];if(0>r(we,re))Me<ge&&0>r(te,we)?(j[Te]=te,j[Me]=re,Te=Me):(j[Te]=we,j[q]=re,Te=q);else if(Me<ge&&0>r(te,re))j[Te]=te,j[Me]=re,Te=Me;else break e}}return J}function r(j,J){var re=j.sortIndex-J.sortIndex;return re!==0?re:j.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();n.unstable_now=function(){return l.now()-a}}var d=[],h=[],m=1,y=null,v=3,x=!1,_=!1,T=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(j){for(var J=t(h);J!==null;){if(J.callback===null)i(h);else if(J.startTime<=j)i(h),J.sortIndex=J.expirationTime,e(d,J);else break;J=t(h)}}function A(j){if(T=!1,E(j),!_)if(t(d)!==null)_=!0,fe(D);else{var J=t(h);J!==null&&me(A,J.startTime-j)}}function D(j,J){_=!1,T&&(T=!1,p(k),k=-1),x=!0;var re=v;try{for(E(J),y=t(d);y!==null&&(!(y.expirationTime>J)||j&&!se());){var Te=y.callback;if(typeof Te=="function"){y.callback=null,v=y.priorityLevel;var ge=Te(y.expirationTime<=J);J=n.unstable_now(),typeof ge=="function"?y.callback=ge:y===t(d)&&i(d),E(J)}else i(d);y=t(d)}if(y!==null)var oe=!0;else{var q=t(h);q!==null&&me(A,q.startTime-J),oe=!1}return oe}finally{y=null,v=re,x=!1}}var N=!1,B=null,k=-1,R=5,O=-1;function se(){return!(n.unstable_now()-O<R)}function ue(){if(B!==null){var j=n.unstable_now();O=j;var J=!0;try{J=B(!0,j)}finally{J?Y():(N=!1,B=null)}}else N=!1}var Y;if(typeof w=="function")Y=function(){w(ue)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,W=Z.port2;Z.port1.onmessage=ue,Y=function(){W.postMessage(null)}}else Y=function(){b(ue,0)};function fe(j){B=j,N||(N=!0,Y())}function me(j,J){k=b(function(){j(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_continueExecution=function(){_||x||(_=!0,fe(D))},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(j){switch(v){case 1:case 2:case 3:var J=3;break;default:J=v}var re=v;v=J;try{return j()}finally{v=re}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(j,J){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var re=v;v=j;try{return J()}finally{v=re}},n.unstable_scheduleCallback=function(j,J,re){var Te=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?Te+re:Te):re=Te,j){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=re+ge,j={id:m++,callback:J,priorityLevel:j,startTime:re,expirationTime:ge,sortIndex:-1},re>Te?(j.sortIndex=re,e(h,j),t(d)===null&&j===t(h)&&(T?(p(k),k=-1):T=!0,me(A,re-Te))):(j.sortIndex=ge,e(d,j),_||x||(_=!0,fe(D))),j},n.unstable_shouldYield=se,n.unstable_wrapCallback=function(j){var J=v;return function(){var re=v;v=J;try{return j.apply(this,arguments)}finally{v=re}}}})(E0);(function(n){n.exports=E0})(JS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0=ft,Jn=kd;function Se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C0=new Set,ja={};function Do(n,e){Is(n,e),Is(n+"Capture",e)}function Is(n,e){for(ja[n]=e,n=0;n<e.length;n++)C0.add(e[n])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nd=Object.prototype.hasOwnProperty,eM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Um={},km={};function tM(n){return Nd.call(km,n)?!0:Nd.call(Um,n)?!1:eM.test(n)?km[n]=!0:(Um[n]=!0,!1)}function nM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function iM(n,e,t,i){if(e===null||typeof e>"u"||nM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function On(n,e,t,i,r,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var vn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){vn[n]=new On(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];vn[e]=new On(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){vn[n]=new On(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){vn[n]=new On(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){vn[n]=new On(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){vn[n]=new On(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){vn[n]=new On(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){vn[n]=new On(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){vn[n]=new On(n,5,!1,n.toLowerCase(),null,!1,!1)});var Hh=/[\-:]([a-z])/g;function Wh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Hh,Wh);vn[e]=new On(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Hh,Wh);vn[e]=new On(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Hh,Wh);vn[e]=new On(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){vn[n]=new On(n,1,!1,n.toLowerCase(),null,!1,!1)});vn.xlinkHref=new On("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){vn[n]=new On(n,1,!1,n.toLowerCase(),null,!0,!0)});function jh(n,e,t,i){var r=vn.hasOwnProperty(e)?vn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iM(e,t,r,i)&&(t=null),i||r===null?tM(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var fr=T0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ql=Symbol.for("react.element"),ls=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),Xh=Symbol.for("react.strict_mode"),zd=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),A0=Symbol.for("react.context"),qh=Symbol.for("react.forward_ref"),Fd=Symbol.for("react.suspense"),Bd=Symbol.for("react.suspense_list"),Yh=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),D0=Symbol.for("react.offscreen"),Nm=Symbol.iterator;function pa(n){return n===null||typeof n!="object"?null:(n=Nm&&n[Nm]||n["@@iterator"],typeof n=="function"?n:null)}var Ft=Object.assign,Tf;function Pa(n){if(Tf===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Tf=e&&e[1]||""}return`
`+Tf+n}var Cf=!1;function Pf(n,e){if(!n||Cf)return"";Cf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var i=h}Reflect.construct(n,[],e)}else{try{e.call()}catch(h){i=h}n.call(e.prototype)}else{try{throw Error()}catch(h){i=h}n()}}catch(h){if(h&&i&&typeof h.stack=="string"){for(var r=h.stack.split(`
`),o=i.stack.split(`
`),l=r.length-1,a=o.length-1;1<=l&&0<=a&&r[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(r[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||r[l]!==o[a]){var d=`
`+r[l].replace(" at new "," at ");return n.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",n.displayName)),d}while(1<=l&&0<=a);break}}}finally{Cf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Pa(n):""}function rM(n){switch(n.tag){case 5:return Pa(n.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 2:case 15:return n=Pf(n.type,!1),n;case 11:return n=Pf(n.type.render,!1),n;case 1:return n=Pf(n.type,!0),n;default:return""}}function Vd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case us:return"Fragment";case ls:return"Portal";case zd:return"Profiler";case Xh:return"StrictMode";case Fd:return"Suspense";case Bd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case A0:return(n.displayName||"Context")+".Consumer";case P0:return(n._context.displayName||"Context")+".Provider";case qh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Yh:return e=n.displayName||null,e!==null?e:Vd(n.type)||"Memo";case wr:e=n._payload,n=n._init;try{return Vd(n(e))}catch{}}return null}function oM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vd(e);case 8:return e===Xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function R0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sM(n){var e=R0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,o=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Jl(n){n._valueTracker||(n._valueTracker=sM(n))}function L0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=R0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Zu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Gd(n,e){var t=e.checked;return Ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function zm(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Fr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function I0(n,e){e=e.checked,e!=null&&jh(n,"checked",e,!1)}function Hd(n,e){I0(n,e);var t=Fr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Wd(n,e.type,t):e.hasOwnProperty("defaultValue")&&Wd(n,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Fm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Wd(n,e,t){(e!=="number"||Zu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Aa=Array.isArray;function ws(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Fr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function jd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Se(91));return Ft({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Bm(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Se(92));if(Aa(t)){if(1<t.length)throw Error(Se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Fr(t)}}function O0(n,e){var t=Fr(e.value),i=Fr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Vm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function U0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?U0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var eu,k0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(eu=eu||document.createElement("div"),eu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Xa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aM=["Webkit","ms","Moz","O"];Object.keys(Oa).forEach(function(n){aM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Oa[e]=Oa[n]})});function N0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Oa.hasOwnProperty(n)&&Oa[n]?(""+e).trim():e+"px"}function z0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=N0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var lM=Ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qd(n,e){if(e){if(lM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Se(62))}}function Yd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $d=null;function $h(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Kd=null,bs=null,Es=null;function Gm(n){if(n=yl(n)){if(typeof Kd!="function")throw Error(Se(280));var e=n.stateNode;e&&(e=Rc(e),Kd(n.stateNode,n.type,e))}}function F0(n){bs?Es?Es.push(n):Es=[n]:bs=n}function B0(){if(bs){var n=bs,e=Es;if(Es=bs=null,Gm(n),e)for(n=0;n<e.length;n++)Gm(e[n])}}function V0(n,e){return n(e)}function G0(){}var Af=!1;function H0(n,e,t){if(Af)return n(e,t);Af=!0;try{return V0(n,e,t)}finally{Af=!1,(bs!==null||Es!==null)&&(G0(),B0())}}function qa(n,e){var t=n.stateNode;if(t===null)return null;var i=Rc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Se(231,e,typeof t));return t}var Zd=!1;if(ar)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){Zd=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{Zd=!1}function uM(n,e,t,i,r,o,l,a,d){var h=Array.prototype.slice.call(arguments,3);try{e.apply(t,h)}catch(m){this.onError(m)}}var Ua=!1,Qu=null,Ju=!1,Qd=null,cM={onError:function(n){Ua=!0,Qu=n}};function fM(n,e,t,i,r,o,l,a,d){Ua=!1,Qu=null,uM.apply(cM,arguments)}function dM(n,e,t,i,r,o,l,a,d){if(fM.apply(this,arguments),Ua){if(Ua){var h=Qu;Ua=!1,Qu=null}else throw Error(Se(198));Ju||(Ju=!0,Qd=h)}}function Ro(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function W0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Hm(n){if(Ro(n)!==n)throw Error(Se(188))}function hM(n){var e=n.alternate;if(!e){if(e=Ro(n),e===null)throw Error(Se(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===t)return Hm(r),n;if(o===i)return Hm(r),e;o=o.sibling}throw Error(Se(188))}if(t.return!==i.return)t=r,i=o;else{for(var l=!1,a=r.child;a;){if(a===t){l=!0,t=r,i=o;break}if(a===i){l=!0,i=r,t=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===t){l=!0,t=o,i=r;break}if(a===i){l=!0,i=o,t=r;break}a=a.sibling}if(!l)throw Error(Se(189))}}if(t.alternate!==i)throw Error(Se(190))}if(t.tag!==3)throw Error(Se(188));return t.stateNode.current===t?n:e}function j0(n){return n=hM(n),n!==null?X0(n):null}function X0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=X0(n);if(e!==null)return e;n=n.sibling}return null}var q0=Jn.unstable_scheduleCallback,Wm=Jn.unstable_cancelCallback,pM=Jn.unstable_shouldYield,mM=Jn.unstable_requestPaint,Wt=Jn.unstable_now,gM=Jn.unstable_getCurrentPriorityLevel,Kh=Jn.unstable_ImmediatePriority,Y0=Jn.unstable_UserBlockingPriority,ec=Jn.unstable_NormalPriority,vM=Jn.unstable_LowPriority,$0=Jn.unstable_IdlePriority,Cc=null,Bi=null;function yM(n){if(Bi&&typeof Bi.onCommitFiberRoot=="function")try{Bi.onCommitFiberRoot(Cc,n,void 0,(n.current.flags&128)===128)}catch{}}var Ti=Math.clz32?Math.clz32:SM,xM=Math.log,_M=Math.LN2;function SM(n){return n>>>=0,n===0?32:31-(xM(n)/_M|0)|0}var tu=64,nu=4194304;function Da(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function tc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,o=n.pingedLanes,l=t&268435455;if(l!==0){var a=l&~r;a!==0?i=Da(a):(o&=l,o!==0&&(i=Da(o)))}else l=t&~r,l!==0?i=Da(l):o!==0&&(i=Da(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Ti(e),r=1<<t,i|=n[t],e&=~r;return i}function MM(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wM(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,o=n.pendingLanes;0<o;){var l=31-Ti(o),a=1<<l,d=r[l];d===-1?(!(a&t)||a&i)&&(r[l]=MM(a,e)):d<=e&&(n.expiredLanes|=a),o&=~a}}function Jd(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function K0(){var n=tu;return tu<<=1,!(tu&4194240)&&(tu=64),n}function Df(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function gl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Ti(e),n[e]=t}function bM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Ti(t),o=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~o}}function Zh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Ti(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var xt=0;function Z0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Q0,Qh,J0,ey,ty,eh=!1,iu=[],Rr=null,Lr=null,Ir=null,Ya=new Map,$a=new Map,Tr=[],EM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jm(n,e){switch(n){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(e.pointerId)}}function ga(n,e,t,i,r,o){return n===null||n.nativeEvent!==o?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=yl(e),e!==null&&Qh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function TM(n,e,t,i,r){switch(e){case"focusin":return Rr=ga(Rr,n,e,t,i,r),!0;case"dragenter":return Lr=ga(Lr,n,e,t,i,r),!0;case"mouseover":return Ir=ga(Ir,n,e,t,i,r),!0;case"pointerover":var o=r.pointerId;return Ya.set(o,ga(Ya.get(o)||null,n,e,t,i,r)),!0;case"gotpointercapture":return o=r.pointerId,$a.set(o,ga($a.get(o)||null,n,e,t,i,r)),!0}return!1}function ny(n){var e=fo(n.target);if(e!==null){var t=Ro(e);if(t!==null){if(e=t.tag,e===13){if(e=W0(t),e!==null){n.blockedOn=e,ty(n.priority,function(){J0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Fu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=th(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);$d=i,t.target.dispatchEvent(i),$d=null}else return e=yl(t),e!==null&&Qh(e),n.blockedOn=t,!1;e.shift()}return!0}function Xm(n,e,t){Fu(n)&&t.delete(e)}function CM(){eh=!1,Rr!==null&&Fu(Rr)&&(Rr=null),Lr!==null&&Fu(Lr)&&(Lr=null),Ir!==null&&Fu(Ir)&&(Ir=null),Ya.forEach(Xm),$a.forEach(Xm)}function va(n,e){n.blockedOn===e&&(n.blockedOn=null,eh||(eh=!0,Jn.unstable_scheduleCallback(Jn.unstable_NormalPriority,CM)))}function Ka(n){function e(r){return va(r,n)}if(0<iu.length){va(iu[0],n);for(var t=1;t<iu.length;t++){var i=iu[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Rr!==null&&va(Rr,n),Lr!==null&&va(Lr,n),Ir!==null&&va(Ir,n),Ya.forEach(e),$a.forEach(e),t=0;t<Tr.length;t++)i=Tr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Tr.length&&(t=Tr[0],t.blockedOn===null);)ny(t),t.blockedOn===null&&Tr.shift()}var Ts=fr.ReactCurrentBatchConfig,nc=!0;function PM(n,e,t,i){var r=xt,o=Ts.transition;Ts.transition=null;try{xt=1,Jh(n,e,t,i)}finally{xt=r,Ts.transition=o}}function AM(n,e,t,i){var r=xt,o=Ts.transition;Ts.transition=null;try{xt=4,Jh(n,e,t,i)}finally{xt=r,Ts.transition=o}}function Jh(n,e,t,i){if(nc){var r=th(n,e,t,i);if(r===null)Bf(n,e,i,ic,t),jm(n,i);else if(TM(r,n,e,t,i))i.stopPropagation();else if(jm(n,i),e&4&&-1<EM.indexOf(n)){for(;r!==null;){var o=yl(r);if(o!==null&&Q0(o),o=th(n,e,t,i),o===null&&Bf(n,e,i,ic,t),o===r)break;r=o}r!==null&&i.stopPropagation()}else Bf(n,e,i,null,t)}}var ic=null;function th(n,e,t,i){if(ic=null,n=$h(i),n=fo(n),n!==null)if(e=Ro(n),e===null)n=null;else if(t=e.tag,t===13){if(n=W0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ic=n,null}function iy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gM()){case Kh:return 1;case Y0:return 4;case ec:case vM:return 16;case $0:return 536870912;default:return 16}default:return 16}}var Ar=null,ep=null,Bu=null;function ry(){if(Bu)return Bu;var n,e=ep,t=e.length,i,r="value"in Ar?Ar.value:Ar.textContent,o=r.length;for(n=0;n<t&&e[n]===r[n];n++);var l=t-n;for(i=1;i<=l&&e[t-i]===r[o-i];i++);return Bu=r.slice(n,1<i?1-i:void 0)}function Vu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ru(){return!0}function qm(){return!1}function ti(n){function e(t,i,r,o,l){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ru:qm,this.isPropagationStopped=qm,this}return Ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ru)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ru)},persist:function(){},isPersistent:ru}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tp=ti(Xs),vl=Ft({},Xs,{view:0,detail:0}),DM=ti(vl),Rf,Lf,ya,Pc=Ft({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:np,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ya&&(ya&&n.type==="mousemove"?(Rf=n.screenX-ya.screenX,Lf=n.screenY-ya.screenY):Lf=Rf=0,ya=n),Rf)},movementY:function(n){return"movementY"in n?n.movementY:Lf}}),Ym=ti(Pc),RM=Ft({},Pc,{dataTransfer:0}),LM=ti(RM),IM=Ft({},vl,{relatedTarget:0}),If=ti(IM),OM=Ft({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),UM=ti(OM),kM=Ft({},Xs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),NM=ti(kM),zM=Ft({},Xs,{data:0}),$m=ti(zM),FM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GM(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=VM[n])?!!e[n]:!1}function np(){return GM}var HM=Ft({},vl,{key:function(n){if(n.key){var e=FM[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Vu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?BM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:np,charCode:function(n){return n.type==="keypress"?Vu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Vu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),WM=ti(HM),jM=Ft({},Pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=ti(jM),XM=Ft({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:np}),qM=ti(XM),YM=Ft({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),$M=ti(YM),KM=Ft({},Pc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ZM=ti(KM),QM=[9,13,27,32],ip=ar&&"CompositionEvent"in window,ka=null;ar&&"documentMode"in document&&(ka=document.documentMode);var JM=ar&&"TextEvent"in window&&!ka,oy=ar&&(!ip||ka&&8<ka&&11>=ka),Zm=String.fromCharCode(32),Qm=!1;function sy(n,e){switch(n){case"keyup":return QM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ay(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var cs=!1;function e1(n,e){switch(n){case"compositionend":return ay(e);case"keypress":return e.which!==32?null:(Qm=!0,Zm);case"textInput":return n=e.data,n===Zm&&Qm?null:n;default:return null}}function t1(n,e){if(cs)return n==="compositionend"||!ip&&sy(n,e)?(n=ry(),Bu=ep=Ar=null,cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return oy&&e.locale!=="ko"?null:e.data;default:return null}}var n1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!n1[n.type]:e==="textarea"}function ly(n,e,t,i){F0(i),e=rc(e,"onChange"),0<e.length&&(t=new tp("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Na=null,Za=null;function i1(n){xy(n,0)}function Ac(n){var e=hs(n);if(L0(e))return n}function r1(n,e){if(n==="change")return e}var uy=!1;if(ar){var Of;if(ar){var Uf="oninput"in document;if(!Uf){var eg=document.createElement("div");eg.setAttribute("oninput","return;"),Uf=typeof eg.oninput=="function"}Of=Uf}else Of=!1;uy=Of&&(!document.documentMode||9<document.documentMode)}function tg(){Na&&(Na.detachEvent("onpropertychange",cy),Za=Na=null)}function cy(n){if(n.propertyName==="value"&&Ac(Za)){var e=[];ly(e,Za,n,$h(n)),H0(i1,e)}}function o1(n,e,t){n==="focusin"?(tg(),Na=e,Za=t,Na.attachEvent("onpropertychange",cy)):n==="focusout"&&tg()}function s1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ac(Za)}function a1(n,e){if(n==="click")return Ac(e)}function l1(n,e){if(n==="input"||n==="change")return Ac(e)}function u1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ai=typeof Object.is=="function"?Object.is:u1;function Qa(n,e){if(Ai(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Nd.call(e,r)||!Ai(n[r],e[r]))return!1}return!0}function ng(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ig(n,e){var t=ng(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ng(t)}}function fy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?fy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function dy(){for(var n=window,e=Zu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Zu(n.document)}return e}function rp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function c1(n){var e=dy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&fy(t.ownerDocument.documentElement,t)){if(i!==null&&rp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!n.extend&&o>i&&(r=i,i=o,o=r),r=ig(t,o);var l=ig(t,i);r&&l&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==l.node||n.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),o>i?(n.addRange(e),n.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var f1=ar&&"documentMode"in document&&11>=document.documentMode,fs=null,nh=null,za=null,ih=!1;function rg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ih||fs==null||fs!==Zu(i)||(i=fs,"selectionStart"in i&&rp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),za&&Qa(za,i)||(za=i,i=rc(nh,"onSelect"),0<i.length&&(e=new tp("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=fs)))}function ou(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ds={animationend:ou("Animation","AnimationEnd"),animationiteration:ou("Animation","AnimationIteration"),animationstart:ou("Animation","AnimationStart"),transitionend:ou("Transition","TransitionEnd")},kf={},hy={};ar&&(hy=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Dc(n){if(kf[n])return kf[n];if(!ds[n])return n;var e=ds[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in hy)return kf[n]=e[t];return n}var py=Dc("animationend"),my=Dc("animationiteration"),gy=Dc("animationstart"),vy=Dc("transitionend"),yy=new Map,og="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(n,e){yy.set(n,e),Do(e,[n])}for(var Nf=0;Nf<og.length;Nf++){var zf=og[Nf],d1=zf.toLowerCase(),h1=zf[0].toUpperCase()+zf.slice(1);Hr(d1,"on"+h1)}Hr(py,"onAnimationEnd");Hr(my,"onAnimationIteration");Hr(gy,"onAnimationStart");Hr("dblclick","onDoubleClick");Hr("focusin","onFocus");Hr("focusout","onBlur");Hr(vy,"onTransitionEnd");Is("onMouseEnter",["mouseout","mouseover"]);Is("onMouseLeave",["mouseout","mouseover"]);Is("onPointerEnter",["pointerout","pointerover"]);Is("onPointerLeave",["pointerout","pointerover"]);Do("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Do("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Do("onBeforeInput",["compositionend","keypress","textInput","paste"]);Do("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Do("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Do("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function sg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,dM(i,e,void 0,n),n.currentTarget=null}function xy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var l=i.length-1;0<=l;l--){var a=i[l],d=a.instance,h=a.currentTarget;if(a=a.listener,d!==o&&r.isPropagationStopped())break e;sg(r,a,h),o=d}else for(l=0;l<i.length;l++){if(a=i[l],d=a.instance,h=a.currentTarget,a=a.listener,d!==o&&r.isPropagationStopped())break e;sg(r,a,h),o=d}}}if(Ju)throw n=Qd,Ju=!1,Qd=null,n}function Dt(n,e){var t=e[lh];t===void 0&&(t=e[lh]=new Set);var i=n+"__bubble";t.has(i)||(_y(e,n,2,!1),t.add(i))}function Ff(n,e,t){var i=0;e&&(i|=4),_y(t,n,i,e)}var su="_reactListening"+Math.random().toString(36).slice(2);function Ja(n){if(!n[su]){n[su]=!0,C0.forEach(function(t){t!=="selectionchange"&&(p1.has(t)||Ff(t,!1,n),Ff(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[su]||(e[su]=!0,Ff("selectionchange",!1,e))}}function _y(n,e,t,i){switch(iy(e)){case 1:var r=PM;break;case 4:r=AM;break;default:r=Jh}t=r.bind(null,e,t,n),r=void 0,!Zd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Bf(n,e,t,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;l=l.return}for(;a!==null;){if(l=fo(a),l===null)return;if(d=l.tag,d===5||d===6){i=o=l;continue e}a=a.parentNode}}i=i.return}H0(function(){var h=o,m=$h(t),y=[];e:{var v=yy.get(n);if(v!==void 0){var x=tp,_=n;switch(n){case"keypress":if(Vu(t)===0)break e;case"keydown":case"keyup":x=WM;break;case"focusin":_="focus",x=If;break;case"focusout":_="blur",x=If;break;case"beforeblur":case"afterblur":x=If;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=LM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=qM;break;case py:case my:case gy:x=UM;break;case vy:x=$M;break;case"scroll":x=DM;break;case"wheel":x=ZM;break;case"copy":case"cut":case"paste":x=NM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Km}var T=(e&4)!==0,b=!T&&n==="scroll",p=T?v!==null?v+"Capture":null:v;T=[];for(var w=h,E;w!==null;){E=w;var A=E.stateNode;if(E.tag===5&&A!==null&&(E=A,p!==null&&(A=qa(w,p),A!=null&&T.push(el(w,A,E)))),b)break;w=w.return}0<T.length&&(v=new x(v,_,null,t,m),y.push({event:v,listeners:T}))}}if(!(e&7)){e:{if(v=n==="mouseover"||n==="pointerover",x=n==="mouseout"||n==="pointerout",v&&t!==$d&&(_=t.relatedTarget||t.fromElement)&&(fo(_)||_[lr]))break e;if((x||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,x?(_=t.relatedTarget||t.toElement,x=h,_=_?fo(_):null,_!==null&&(b=Ro(_),_!==b||_.tag!==5&&_.tag!==6)&&(_=null)):(x=null,_=h),x!==_)){if(T=Ym,A="onMouseLeave",p="onMouseEnter",w="mouse",(n==="pointerout"||n==="pointerover")&&(T=Km,A="onPointerLeave",p="onPointerEnter",w="pointer"),b=x==null?v:hs(x),E=_==null?v:hs(_),v=new T(A,w+"leave",x,t,m),v.target=b,v.relatedTarget=E,A=null,fo(m)===h&&(T=new T(p,w+"enter",_,t,m),T.target=E,T.relatedTarget=b,A=T),b=A,x&&_)t:{for(T=x,p=_,w=0,E=T;E;E=Go(E))w++;for(E=0,A=p;A;A=Go(A))E++;for(;0<w-E;)T=Go(T),w--;for(;0<E-w;)p=Go(p),E--;for(;w--;){if(T===p||p!==null&&T===p.alternate)break t;T=Go(T),p=Go(p)}T=null}else T=null;x!==null&&ag(y,v,x,T,!1),_!==null&&b!==null&&ag(y,b,_,T,!0)}}e:{if(v=h?hs(h):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var D=r1;else if(Jm(v))if(uy)D=l1;else{D=s1;var N=o1}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(D=a1);if(D&&(D=D(n,h))){ly(y,D,t,m);break e}N&&N(n,v,h),n==="focusout"&&(N=v._wrapperState)&&N.controlled&&v.type==="number"&&Wd(v,"number",v.value)}switch(N=h?hs(h):window,n){case"focusin":(Jm(N)||N.contentEditable==="true")&&(fs=N,nh=h,za=null);break;case"focusout":za=nh=fs=null;break;case"mousedown":ih=!0;break;case"contextmenu":case"mouseup":case"dragend":ih=!1,rg(y,t,m);break;case"selectionchange":if(f1)break;case"keydown":case"keyup":rg(y,t,m)}var B;if(ip)e:{switch(n){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else cs?sy(n,t)&&(k="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(k="onCompositionStart");k&&(oy&&t.locale!=="ko"&&(cs||k!=="onCompositionStart"?k==="onCompositionEnd"&&cs&&(B=ry()):(Ar=m,ep="value"in Ar?Ar.value:Ar.textContent,cs=!0)),N=rc(h,k),0<N.length&&(k=new $m(k,n,null,t,m),y.push({event:k,listeners:N}),B?k.data=B:(B=ay(t),B!==null&&(k.data=B)))),(B=JM?e1(n,t):t1(n,t))&&(h=rc(h,"onBeforeInput"),0<h.length&&(m=new $m("onBeforeInput","beforeinput",null,t,m),y.push({event:m,listeners:h}),m.data=B))}xy(y,e)})}function el(n,e,t){return{instance:n,listener:e,currentTarget:t}}function rc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=qa(n,t),o!=null&&i.unshift(el(n,o,r)),o=qa(n,e),o!=null&&i.push(el(n,o,r))),n=n.return}return i}function Go(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ag(n,e,t,i,r){for(var o=e._reactName,l=[];t!==null&&t!==i;){var a=t,d=a.alternate,h=a.stateNode;if(d!==null&&d===i)break;a.tag===5&&h!==null&&(a=h,r?(d=qa(t,o),d!=null&&l.unshift(el(t,d,a))):r||(d=qa(t,o),d!=null&&l.push(el(t,d,a)))),t=t.return}l.length!==0&&n.push({event:e,listeners:l})}var m1=/\r\n?/g,g1=/\u0000|\uFFFD/g;function lg(n){return(typeof n=="string"?n:""+n).replace(m1,`
`).replace(g1,"")}function au(n,e,t){if(e=lg(e),lg(n)!==e&&t)throw Error(Se(425))}function oc(){}var rh=null,oh=null;function sh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,v1=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,y1=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(n){return ug.resolve(null).then(n).catch(x1)}:ah;function x1(n){setTimeout(function(){throw n})}function Vf(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ka(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ka(e)}function Or(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function cg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var qs=Math.random().toString(36).slice(2),Fi="__reactFiber$"+qs,tl="__reactProps$"+qs,lr="__reactContainer$"+qs,lh="__reactEvents$"+qs,_1="__reactListeners$"+qs,S1="__reactHandles$"+qs;function fo(n){var e=n[Fi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[lr]||t[Fi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=cg(n);n!==null;){if(t=n[Fi])return t;n=cg(n)}return e}n=t,t=n.parentNode}return null}function yl(n){return n=n[Fi]||n[lr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Se(33))}function Rc(n){return n[tl]||null}var uh=[],ps=-1;function Wr(n){return{current:n}}function It(n){0>ps||(n.current=uh[ps],uh[ps]=null,ps--)}function Ct(n,e){ps++,uh[ps]=n.current,n.current=e}var Br={},bn=Wr(Br),Vn=Wr(!1),So=Br;function Os(n,e){var t=n.type.contextTypes;if(!t)return Br;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in t)r[o]=e[o];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Gn(n){return n=n.childContextTypes,n!=null}function sc(){It(Vn),It(bn)}function fg(n,e,t){if(bn.current!==Br)throw Error(Se(168));Ct(bn,e),Ct(Vn,t)}function Sy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Se(108,oM(n)||"Unknown",r));return Ft({},t,i)}function ac(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Br,So=bn.current,Ct(bn,n),Ct(Vn,Vn.current),!0}function dg(n,e,t){var i=n.stateNode;if(!i)throw Error(Se(169));t?(n=Sy(n,e,So),i.__reactInternalMemoizedMergedChildContext=n,It(Vn),It(bn),Ct(bn,n)):It(Vn),Ct(Vn,t)}var tr=null,Lc=!1,Gf=!1;function My(n){tr===null?tr=[n]:tr.push(n)}function M1(n){Lc=!0,My(n)}function jr(){if(!Gf&&tr!==null){Gf=!0;var n=0,e=xt;try{var t=tr;for(xt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}tr=null,Lc=!1}catch(r){throw tr!==null&&(tr=tr.slice(n+1)),q0(Kh,jr),r}finally{xt=e,Gf=!1}}return null}var ms=[],gs=0,lc=null,uc=0,ai=[],li=0,Mo=null,rr=1,or="";function so(n,e){ms[gs++]=uc,ms[gs++]=lc,lc=n,uc=e}function wy(n,e,t){ai[li++]=rr,ai[li++]=or,ai[li++]=Mo,Mo=n;var i=rr;n=or;var r=32-Ti(i)-1;i&=~(1<<r),t+=1;var o=32-Ti(e)+r;if(30<o){var l=r-r%5;o=(i&(1<<l)-1).toString(32),i>>=l,r-=l,rr=1<<32-Ti(e)+r|t<<r|i,or=o+n}else rr=1<<o|t<<r|i,or=n}function op(n){n.return!==null&&(so(n,1),wy(n,1,0))}function sp(n){for(;n===lc;)lc=ms[--gs],ms[gs]=null,uc=ms[--gs],ms[gs]=null;for(;n===Mo;)Mo=ai[--li],ai[li]=null,or=ai[--li],ai[li]=null,rr=ai[--li],ai[li]=null}var Qn=null,Zn=null,Ot=!1,Mi=null;function by(n,e){var t=fi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function hg(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Qn=n,Zn=Or(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Qn=n,Zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Mo!==null?{id:rr,overflow:or}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=fi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Qn=n,Zn=null,!0):!1;default:return!1}}function ch(n){return(n.mode&1)!==0&&(n.flags&128)===0}function fh(n){if(Ot){var e=Zn;if(e){var t=e;if(!hg(n,e)){if(ch(n))throw Error(Se(418));e=Or(t.nextSibling);var i=Qn;e&&hg(n,e)?by(i,t):(n.flags=n.flags&-4097|2,Ot=!1,Qn=n)}}else{if(ch(n))throw Error(Se(418));n.flags=n.flags&-4097|2,Ot=!1,Qn=n}}}function pg(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Qn=n}function lu(n){if(n!==Qn)return!1;if(!Ot)return pg(n),Ot=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!sh(n.type,n.memoizedProps)),e&&(e=Zn)){if(ch(n))throw Ey(),Error(Se(418));for(;e;)by(n,e),e=Or(e.nextSibling)}if(pg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Zn=Or(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Zn=null}}else Zn=Qn?Or(n.stateNode.nextSibling):null;return!0}function Ey(){for(var n=Zn;n;)n=Or(n.nextSibling)}function Us(){Zn=Qn=null,Ot=!1}function ap(n){Mi===null?Mi=[n]:Mi.push(n)}var w1=fr.ReactCurrentBatchConfig;function _i(n,e){if(n&&n.defaultProps){e=Ft({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var cc=Wr(null),fc=null,vs=null,lp=null;function up(){lp=vs=fc=null}function cp(n){var e=cc.current;It(cc),n._currentValue=e}function dh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Cs(n,e){fc=n,lp=vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Fn=!0),n.firstContext=null)}function hi(n){var e=n._currentValue;if(lp!==n)if(n={context:n,memoizedValue:e,next:null},vs===null){if(fc===null)throw Error(Se(308));vs=n,fc.dependencies={lanes:0,firstContext:n}}else vs=vs.next=n;return e}var ho=null;function fp(n){ho===null?ho=[n]:ho.push(n)}function Ty(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,fp(e)):(t.next=r.next,r.next=t),e.interleaved=t,ur(n,i)}function ur(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var br=!1;function dp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cy(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function sr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,pt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ur(n,t)}return r=i.interleaved,r===null?(e.next=e,fp(i)):(e.next=r.next,r.next=e),i.interleaved=e,ur(n,t)}function Gu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Zh(n,t)}}function mg(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?r=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?r=o=e:o=o.next=e}else r=o=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function dc(n,e,t,i){var r=n.updateQueue;br=!1;var o=r.firstBaseUpdate,l=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var d=a,h=d.next;d.next=null,l===null?o=h:l.next=h,l=d;var m=n.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=h:a.next=h,m.lastBaseUpdate=d))}if(o!==null){var y=r.baseState;l=0,m=h=d=null,a=o;do{var v=a.lane,x=a.eventTime;if((i&v)===v){m!==null&&(m=m.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,T=a;switch(v=e,x=t,T.tag){case 1:if(_=T.payload,typeof _=="function"){y=_.call(x,y,v);break e}y=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=T.payload,v=typeof _=="function"?_.call(x,y,v):_,v==null)break e;y=Ft({},y,v);break e;case 2:br=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,v=r.effects,v===null?r.effects=[a]:v.push(a))}else x={eventTime:x,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(h=m=x,d=y):m=m.next=x,l|=v;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;v=a,a=v.next,v.next=null,r.lastBaseUpdate=v,r.shared.pending=null}}while(1);if(m===null&&(d=y),r.baseState=d,r.firstBaseUpdate=h,r.lastBaseUpdate=m,e=r.shared.interleaved,e!==null){r=e;do l|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);bo|=l,n.lanes=l,n.memoizedState=y}}function gg(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Se(191,r));r.call(i)}}}var Py=new T0.Component().refs;function hh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ft({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ic={isMounted:function(n){return(n=n._reactInternals)?Ro(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Dn(),r=Nr(n),o=sr(i,r);o.payload=e,t!=null&&(o.callback=t),e=Ur(n,o,r),e!==null&&(Ci(e,n,r,i),Gu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Dn(),r=Nr(n),o=sr(i,r);o.tag=1,o.payload=e,t!=null&&(o.callback=t),e=Ur(n,o,r),e!==null&&(Ci(e,n,r,i),Gu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Dn(),i=Nr(n),r=sr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ur(n,r,i),e!==null&&(Ci(e,n,i,t),Gu(e,n,i))}};function vg(n,e,t,i,r,o,l){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,o,l):e.prototype&&e.prototype.isPureReactComponent?!Qa(t,i)||!Qa(r,o):!0}function Ay(n,e,t){var i=!1,r=Br,o=e.contextType;return typeof o=="object"&&o!==null?o=hi(o):(r=Gn(e)?So:bn.current,i=e.contextTypes,o=(i=i!=null)?Os(n,r):Br),e=new e(t,o),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ic,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=o),e}function yg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Ic.enqueueReplaceState(e,e.state,null)}function ph(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Py,dp(n);var o=e.contextType;typeof o=="object"&&o!==null?r.context=hi(o):(o=Gn(e)?So:bn.current,r.context=Os(n,o)),r.state=n.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(hh(n,e,o,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ic.enqueueReplaceState(r,r.state,null),dc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function xa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Se(309));var i=t.stateNode}if(!i)throw Error(Se(147,n));var r=i,o=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var a=r.refs;a===Py&&(a=r.refs={}),l===null?delete a[o]:a[o]=l},e._stringRef=o,e)}if(typeof n!="string")throw Error(Se(284));if(!t._owner)throw Error(Se(290,n))}return n}function uu(n,e){throw n=Object.prototype.toString.call(e),Error(Se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function xg(n){var e=n._init;return e(n._payload)}function Dy(n){function e(p,w){if(n){var E=p.deletions;E===null?(p.deletions=[w],p.flags|=16):E.push(w)}}function t(p,w){if(!n)return null;for(;w!==null;)e(p,w),w=w.sibling;return null}function i(p,w){for(p=new Map;w!==null;)w.key!==null?p.set(w.key,w):p.set(w.index,w),w=w.sibling;return p}function r(p,w){return p=zr(p,w),p.index=0,p.sibling=null,p}function o(p,w,E){return p.index=E,n?(E=p.alternate,E!==null?(E=E.index,E<w?(p.flags|=2,w):E):(p.flags|=2,w)):(p.flags|=1048576,w)}function l(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,w,E,A){return w===null||w.tag!==6?(w=$f(E,p.mode,A),w.return=p,w):(w=r(w,E),w.return=p,w)}function d(p,w,E,A){var D=E.type;return D===us?m(p,w,E.props.children,A,E.key):w!==null&&(w.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===wr&&xg(D)===w.type)?(A=r(w,E.props),A.ref=xa(p,w,E),A.return=p,A):(A=Yu(E.type,E.key,E.props,null,p.mode,A),A.ref=xa(p,w,E),A.return=p,A)}function h(p,w,E,A){return w===null||w.tag!==4||w.stateNode.containerInfo!==E.containerInfo||w.stateNode.implementation!==E.implementation?(w=Kf(E,p.mode,A),w.return=p,w):(w=r(w,E.children||[]),w.return=p,w)}function m(p,w,E,A,D){return w===null||w.tag!==7?(w=yo(E,p.mode,A,D),w.return=p,w):(w=r(w,E),w.return=p,w)}function y(p,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return w=$f(""+w,p.mode,E),w.return=p,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ql:return E=Yu(w.type,w.key,w.props,null,p.mode,E),E.ref=xa(p,null,w),E.return=p,E;case ls:return w=Kf(w,p.mode,E),w.return=p,w;case wr:var A=w._init;return y(p,A(w._payload),E)}if(Aa(w)||pa(w))return w=yo(w,p.mode,E,null),w.return=p,w;uu(p,w)}return null}function v(p,w,E,A){var D=w!==null?w.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return D!==null?null:a(p,w,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ql:return E.key===D?d(p,w,E,A):null;case ls:return E.key===D?h(p,w,E,A):null;case wr:return D=E._init,v(p,w,D(E._payload),A)}if(Aa(E)||pa(E))return D!==null?null:m(p,w,E,A,null);uu(p,E)}return null}function x(p,w,E,A,D){if(typeof A=="string"&&A!==""||typeof A=="number")return p=p.get(E)||null,a(w,p,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ql:return p=p.get(A.key===null?E:A.key)||null,d(w,p,A,D);case ls:return p=p.get(A.key===null?E:A.key)||null,h(w,p,A,D);case wr:var N=A._init;return x(p,w,E,N(A._payload),D)}if(Aa(A)||pa(A))return p=p.get(E)||null,m(w,p,A,D,null);uu(w,A)}return null}function _(p,w,E,A){for(var D=null,N=null,B=w,k=w=0,R=null;B!==null&&k<E.length;k++){B.index>k?(R=B,B=null):R=B.sibling;var O=v(p,B,E[k],A);if(O===null){B===null&&(B=R);break}n&&B&&O.alternate===null&&e(p,B),w=o(O,w,k),N===null?D=O:N.sibling=O,N=O,B=R}if(k===E.length)return t(p,B),Ot&&so(p,k),D;if(B===null){for(;k<E.length;k++)B=y(p,E[k],A),B!==null&&(w=o(B,w,k),N===null?D=B:N.sibling=B,N=B);return Ot&&so(p,k),D}for(B=i(p,B);k<E.length;k++)R=x(B,p,k,E[k],A),R!==null&&(n&&R.alternate!==null&&B.delete(R.key===null?k:R.key),w=o(R,w,k),N===null?D=R:N.sibling=R,N=R);return n&&B.forEach(function(se){return e(p,se)}),Ot&&so(p,k),D}function T(p,w,E,A){var D=pa(E);if(typeof D!="function")throw Error(Se(150));if(E=D.call(E),E==null)throw Error(Se(151));for(var N=D=null,B=w,k=w=0,R=null,O=E.next();B!==null&&!O.done;k++,O=E.next()){B.index>k?(R=B,B=null):R=B.sibling;var se=v(p,B,O.value,A);if(se===null){B===null&&(B=R);break}n&&B&&se.alternate===null&&e(p,B),w=o(se,w,k),N===null?D=se:N.sibling=se,N=se,B=R}if(O.done)return t(p,B),Ot&&so(p,k),D;if(B===null){for(;!O.done;k++,O=E.next())O=y(p,O.value,A),O!==null&&(w=o(O,w,k),N===null?D=O:N.sibling=O,N=O);return Ot&&so(p,k),D}for(B=i(p,B);!O.done;k++,O=E.next())O=x(B,p,k,O.value,A),O!==null&&(n&&O.alternate!==null&&B.delete(O.key===null?k:O.key),w=o(O,w,k),N===null?D=O:N.sibling=O,N=O);return n&&B.forEach(function(ue){return e(p,ue)}),Ot&&so(p,k),D}function b(p,w,E,A){if(typeof E=="object"&&E!==null&&E.type===us&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Ql:e:{for(var D=E.key,N=w;N!==null;){if(N.key===D){if(D=E.type,D===us){if(N.tag===7){t(p,N.sibling),w=r(N,E.props.children),w.return=p,p=w;break e}}else if(N.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===wr&&xg(D)===N.type){t(p,N.sibling),w=r(N,E.props),w.ref=xa(p,N,E),w.return=p,p=w;break e}t(p,N);break}else e(p,N);N=N.sibling}E.type===us?(w=yo(E.props.children,p.mode,A,E.key),w.return=p,p=w):(A=Yu(E.type,E.key,E.props,null,p.mode,A),A.ref=xa(p,w,E),A.return=p,p=A)}return l(p);case ls:e:{for(N=E.key;w!==null;){if(w.key===N)if(w.tag===4&&w.stateNode.containerInfo===E.containerInfo&&w.stateNode.implementation===E.implementation){t(p,w.sibling),w=r(w,E.children||[]),w.return=p,p=w;break e}else{t(p,w);break}else e(p,w);w=w.sibling}w=Kf(E,p.mode,A),w.return=p,p=w}return l(p);case wr:return N=E._init,b(p,w,N(E._payload),A)}if(Aa(E))return _(p,w,E,A);if(pa(E))return T(p,w,E,A);uu(p,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,w!==null&&w.tag===6?(t(p,w.sibling),w=r(w,E),w.return=p,p=w):(t(p,w),w=$f(E,p.mode,A),w.return=p,p=w),l(p)):t(p,w)}return b}var ks=Dy(!0),Ry=Dy(!1),xl={},Vi=Wr(xl),nl=Wr(xl),il=Wr(xl);function po(n){if(n===xl)throw Error(Se(174));return n}function hp(n,e){switch(Ct(il,e),Ct(nl,n),Ct(Vi,xl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Xd(e,n)}It(Vi),Ct(Vi,e)}function Ns(){It(Vi),It(nl),It(il)}function Ly(n){po(il.current);var e=po(Vi.current),t=Xd(e,n.type);e!==t&&(Ct(nl,n),Ct(Vi,t))}function pp(n){nl.current===n&&(It(Vi),It(nl))}var Nt=Wr(0);function hc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hf=[];function mp(){for(var n=0;n<Hf.length;n++)Hf[n]._workInProgressVersionPrimary=null;Hf.length=0}var Hu=fr.ReactCurrentDispatcher,Wf=fr.ReactCurrentBatchConfig,wo=0,zt=null,Zt=null,cn=null,pc=!1,Fa=!1,rl=0,b1=0;function yn(){throw Error(Se(321))}function gp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ai(n[t],e[t]))return!1;return!0}function vp(n,e,t,i,r,o){if(wo=o,zt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hu.current=n===null||n.memoizedState===null?P1:A1,n=t(i,r),Fa){o=0;do{if(Fa=!1,rl=0,25<=o)throw Error(Se(301));o+=1,cn=Zt=null,e.updateQueue=null,Hu.current=D1,n=t(i,r)}while(Fa)}if(Hu.current=mc,e=Zt!==null&&Zt.next!==null,wo=0,cn=Zt=zt=null,pc=!1,e)throw Error(Se(300));return n}function yp(){var n=rl!==0;return rl=0,n}function ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?zt.memoizedState=cn=n:cn=cn.next=n,cn}function pi(){if(Zt===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var e=cn===null?zt.memoizedState:cn.next;if(e!==null)cn=e,Zt=n;else{if(n===null)throw Error(Se(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},cn===null?zt.memoizedState=cn=n:cn=cn.next=n}return cn}function ol(n,e){return typeof e=="function"?e(n):e}function jf(n){var e=pi(),t=e.queue;if(t===null)throw Error(Se(311));t.lastRenderedReducer=n;var i=Zt,r=i.baseQueue,o=t.pending;if(o!==null){if(r!==null){var l=r.next;r.next=o.next,o.next=l}i.baseQueue=r=o,t.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=l=null,d=null,h=o;do{var m=h.lane;if((wo&m)===m)d!==null&&(d=d.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),i=h.hasEagerState?h.eagerState:n(i,h.action);else{var y={lane:m,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};d===null?(a=d=y,l=i):d=d.next=y,zt.lanes|=m,bo|=m}h=h.next}while(h!==null&&h!==o);d===null?l=i:d.next=a,Ai(i,e.memoizedState)||(Fn=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=d,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do o=r.lane,zt.lanes|=o,bo|=o,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Xf(n){var e=pi(),t=e.queue;if(t===null)throw Error(Se(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,o=e.memoizedState;if(r!==null){t.pending=null;var l=r=r.next;do o=n(o,l.action),l=l.next;while(l!==r);Ai(o,e.memoizedState)||(Fn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),t.lastRenderedState=o}return[o,i]}function Iy(){}function Oy(n,e){var t=zt,i=pi(),r=e(),o=!Ai(i.memoizedState,r);if(o&&(i.memoizedState=r,Fn=!0),i=i.queue,xp(Ny.bind(null,t,i,n),[n]),i.getSnapshot!==e||o||cn!==null&&cn.memoizedState.tag&1){if(t.flags|=2048,sl(9,ky.bind(null,t,i,r,e),void 0,null),fn===null)throw Error(Se(349));wo&30||Uy(t,e,r)}return r}function Uy(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ky(n,e,t,i){e.value=t,e.getSnapshot=i,zy(e)&&Fy(n)}function Ny(n,e,t){return t(function(){zy(e)&&Fy(n)})}function zy(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ai(n,t)}catch{return!0}}function Fy(n){var e=ur(n,1);e!==null&&Ci(e,n,1,-1)}function _g(n){var e=ki();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ol,lastRenderedState:n},e.queue=n,n=n.dispatch=C1.bind(null,zt,n),[e.memoizedState,n]}function sl(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function By(){return pi().memoizedState}function Wu(n,e,t,i){var r=ki();zt.flags|=n,r.memoizedState=sl(1|e,t,void 0,i===void 0?null:i)}function Oc(n,e,t,i){var r=pi();i=i===void 0?null:i;var o=void 0;if(Zt!==null){var l=Zt.memoizedState;if(o=l.destroy,i!==null&&gp(i,l.deps)){r.memoizedState=sl(e,t,o,i);return}}zt.flags|=n,r.memoizedState=sl(1|e,t,o,i)}function Sg(n,e){return Wu(8390656,8,n,e)}function xp(n,e){return Oc(2048,8,n,e)}function Vy(n,e){return Oc(4,2,n,e)}function Gy(n,e){return Oc(4,4,n,e)}function Hy(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Wy(n,e,t){return t=t!=null?t.concat([n]):null,Oc(4,4,Hy.bind(null,e,n),t)}function _p(){}function jy(n,e){var t=pi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&gp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Xy(n,e){var t=pi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&gp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function qy(n,e,t){return wo&21?(Ai(t,e)||(t=K0(),zt.lanes|=t,bo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Fn=!0),n.memoizedState=t)}function E1(n,e){var t=xt;xt=t!==0&&4>t?t:4,n(!0);var i=Wf.transition;Wf.transition={};try{n(!1),e()}finally{xt=t,Wf.transition=i}}function Yy(){return pi().memoizedState}function T1(n,e,t){var i=Nr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},$y(n))Ky(e,t);else if(t=Ty(n,e,t,i),t!==null){var r=Dn();Ci(t,n,i,r),Zy(t,e,i)}}function C1(n,e,t){var i=Nr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if($y(n))Ky(e,r);else{var o=n.alternate;if(n.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,a=o(l,t);if(r.hasEagerState=!0,r.eagerState=a,Ai(a,l)){var d=e.interleaved;d===null?(r.next=r,fp(e)):(r.next=d.next,d.next=r),e.interleaved=r;return}}catch{}finally{}t=Ty(n,e,r,i),t!==null&&(r=Dn(),Ci(t,n,i,r),Zy(t,e,i))}}function $y(n){var e=n.alternate;return n===zt||e!==null&&e===zt}function Ky(n,e){Fa=pc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Zy(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Zh(n,t)}}var mc={readContext:hi,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},P1={readContext:hi,useCallback:function(n,e){return ki().memoizedState=[n,e===void 0?null:e],n},useContext:hi,useEffect:Sg,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Wu(4194308,4,Hy.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Wu(4194308,4,n,e)},useInsertionEffect:function(n,e){return Wu(4,2,n,e)},useMemo:function(n,e){var t=ki();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ki();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=T1.bind(null,zt,n),[i.memoizedState,n]},useRef:function(n){var e=ki();return n={current:n},e.memoizedState=n},useState:_g,useDebugValue:_p,useDeferredValue:function(n){return ki().memoizedState=n},useTransition:function(){var n=_g(!1),e=n[0];return n=E1.bind(null,n[1]),ki().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=zt,r=ki();if(Ot){if(t===void 0)throw Error(Se(407));t=t()}else{if(t=e(),fn===null)throw Error(Se(349));wo&30||Uy(i,e,t)}r.memoizedState=t;var o={value:t,getSnapshot:e};return r.queue=o,Sg(Ny.bind(null,i,o,n),[n]),i.flags|=2048,sl(9,ky.bind(null,i,o,t,e),void 0,null),t},useId:function(){var n=ki(),e=fn.identifierPrefix;if(Ot){var t=or,i=rr;t=(i&~(1<<32-Ti(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=rl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=b1++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},A1={readContext:hi,useCallback:jy,useContext:hi,useEffect:xp,useImperativeHandle:Wy,useInsertionEffect:Vy,useLayoutEffect:Gy,useMemo:Xy,useReducer:jf,useRef:By,useState:function(){return jf(ol)},useDebugValue:_p,useDeferredValue:function(n){var e=pi();return qy(e,Zt.memoizedState,n)},useTransition:function(){var n=jf(ol)[0],e=pi().memoizedState;return[n,e]},useMutableSource:Iy,useSyncExternalStore:Oy,useId:Yy,unstable_isNewReconciler:!1},D1={readContext:hi,useCallback:jy,useContext:hi,useEffect:xp,useImperativeHandle:Wy,useInsertionEffect:Vy,useLayoutEffect:Gy,useMemo:Xy,useReducer:Xf,useRef:By,useState:function(){return Xf(ol)},useDebugValue:_p,useDeferredValue:function(n){var e=pi();return Zt===null?e.memoizedState=n:qy(e,Zt.memoizedState,n)},useTransition:function(){var n=Xf(ol)[0],e=pi().memoizedState;return[n,e]},useMutableSource:Iy,useSyncExternalStore:Oy,useId:Yy,unstable_isNewReconciler:!1};function zs(n,e){try{var t="",i=e;do t+=rM(i),i=i.return;while(i);var r=t}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:n,source:e,stack:r,digest:null}}function qf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function mh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var R1=typeof WeakMap=="function"?WeakMap:Map;function Qy(n,e,t){t=sr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){vc||(vc=!0,Eh=i),mh(n,e)},t}function Jy(n,e,t){t=sr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){mh(n,e)}}var o=n.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){mh(n,e),typeof i!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),t}function Mg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new R1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=j1.bind(null,n,e,t),e.then(n,n))}function wg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function bg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=sr(-1,1),e.tag=2,Ur(t,e,1))),t.lanes|=1),n)}var L1=fr.ReactCurrentOwner,Fn=!1;function An(n,e,t,i){e.child=n===null?Ry(e,null,t,i):ks(e,n.child,t,i)}function Eg(n,e,t,i,r){t=t.render;var o=e.ref;return Cs(e,r),i=vp(n,e,t,i,o,r),t=yp(),n!==null&&!Fn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,cr(n,e,r)):(Ot&&t&&op(e),e.flags|=1,An(n,e,i,r),e.child)}function Tg(n,e,t,i,r){if(n===null){var o=t.type;return typeof o=="function"&&!Pp(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=o,ex(n,e,o,i,r)):(n=Yu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(o=n.child,!(n.lanes&r)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Qa,t(l,i)&&n.ref===e.ref)return cr(n,e,r)}return e.flags|=1,n=zr(o,i),n.ref=e.ref,n.return=e,e.child=n}function ex(n,e,t,i,r){if(n!==null){var o=n.memoizedProps;if(Qa(o,i)&&n.ref===e.ref)if(Fn=!1,e.pendingProps=i=o,(n.lanes&r)!==0)n.flags&131072&&(Fn=!0);else return e.lanes=n.lanes,cr(n,e,r)}return gh(n,e,t,i,r)}function tx(n,e,t){var i=e.pendingProps,r=i.children,o=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ct(xs,Kn),Kn|=t;else{if(!(t&1073741824))return n=o!==null?o.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ct(xs,Kn),Kn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:t,Ct(xs,Kn),Kn|=i}else o!==null?(i=o.baseLanes|t,e.memoizedState=null):i=t,Ct(xs,Kn),Kn|=i;return An(n,e,r,t),e.child}function nx(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function gh(n,e,t,i,r){var o=Gn(t)?So:bn.current;return o=Os(e,o),Cs(e,r),t=vp(n,e,t,i,o,r),i=yp(),n!==null&&!Fn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,cr(n,e,r)):(Ot&&i&&op(e),e.flags|=1,An(n,e,t,r),e.child)}function Cg(n,e,t,i,r){if(Gn(t)){var o=!0;ac(e)}else o=!1;if(Cs(e,r),e.stateNode===null)ju(n,e),Ay(e,t,i),ph(e,t,i,r),i=!0;else if(n===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,h=t.contextType;typeof h=="object"&&h!==null?h=hi(h):(h=Gn(t)?So:bn.current,h=Os(e,h));var m=t.getDerivedStateFromProps,y=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==i||d!==h)&&yg(e,l,i,h),br=!1;var v=e.memoizedState;l.state=v,dc(e,i,l,r),d=e.memoizedState,a!==i||v!==d||Vn.current||br?(typeof m=="function"&&(hh(e,t,m,i),d=e.memoizedState),(a=br||vg(e,t,a,i,v,d,h))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=d),l.props=i,l.state=d,l.context=h,i=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,Cy(n,e),a=e.memoizedProps,h=e.type===e.elementType?a:_i(e.type,a),l.props=h,y=e.pendingProps,v=l.context,d=t.contextType,typeof d=="object"&&d!==null?d=hi(d):(d=Gn(t)?So:bn.current,d=Os(e,d));var x=t.getDerivedStateFromProps;(m=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==y||v!==d)&&yg(e,l,i,d),br=!1,v=e.memoizedState,l.state=v,dc(e,i,l,r);var _=e.memoizedState;a!==y||v!==_||Vn.current||br?(typeof x=="function"&&(hh(e,t,x,i),_=e.memoizedState),(h=br||vg(e,t,h,i,v,_,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,_,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,_,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===n.memoizedProps&&v===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&v===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),l.props=i,l.state=_,l.context=d,i=h):(typeof l.componentDidUpdate!="function"||a===n.memoizedProps&&v===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&v===n.memoizedState||(e.flags|=1024),i=!1)}return vh(n,e,t,i,o,r)}function vh(n,e,t,i,r,o){nx(n,e);var l=(e.flags&128)!==0;if(!i&&!l)return r&&dg(e,t,!1),cr(n,e,o);i=e.stateNode,L1.current=e;var a=l&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&l?(e.child=ks(e,n.child,null,o),e.child=ks(e,null,a,o)):An(n,e,a,o),e.memoizedState=i.state,r&&dg(e,t,!0),e.child}function ix(n){var e=n.stateNode;e.pendingContext?fg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&fg(n,e.context,!1),hp(n,e.containerInfo)}function Pg(n,e,t,i,r){return Us(),ap(r),e.flags|=256,An(n,e,t,i),e.child}var yh={dehydrated:null,treeContext:null,retryLane:0};function xh(n){return{baseLanes:n,cachePool:null,transitions:null}}function rx(n,e,t){var i=e.pendingProps,r=Nt.current,o=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ct(Nt,r&1),n===null)return fh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=i.children,n=i.fallback,o?(i=e.mode,o=e.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Nc(l,i,0,null),n=yo(n,i,t,null),o.return=e,n.return=e,o.sibling=n,e.child=o,e.child.memoizedState=xh(t),e.memoizedState=yh,n):Sp(e,l));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return I1(n,e,l,i,a,r,t);if(o){o=i.fallback,l=e.mode,r=n.child,a=r.sibling;var d={mode:"hidden",children:i.children};return!(l&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=d,e.deletions=null):(i=zr(r,d),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=zr(a,o):(o=yo(o,l,t,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,l=n.child.memoizedState,l=l===null?xh(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=n.childLanes&~t,e.memoizedState=yh,i}return o=n.child,n=o.sibling,i=zr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Sp(n,e){return e=Nc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function cu(n,e,t,i){return i!==null&&ap(i),ks(e,n.child,null,t),n=Sp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function I1(n,e,t,i,r,o,l){if(t)return e.flags&256?(e.flags&=-257,i=qf(Error(Se(422))),cu(n,e,l,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Nc({mode:"visible",children:i.children},r,0,null),o=yo(o,r,l,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&ks(e,n.child,null,l),e.child.memoizedState=xh(l),e.memoizedState=yh,o);if(!(e.mode&1))return cu(n,e,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(Se(419)),i=qf(o,i,void 0),cu(n,e,l,i)}if(a=(l&n.childLanes)!==0,Fn||a){if(i=fn,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|l)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,ur(n,r),Ci(i,n,r,-1))}return Cp(),i=qf(Error(Se(421))),cu(n,e,l,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=X1.bind(null,n),r._reactRetry=e,null):(n=o.treeContext,Zn=Or(r.nextSibling),Qn=e,Ot=!0,Mi=null,n!==null&&(ai[li++]=rr,ai[li++]=or,ai[li++]=Mo,rr=n.id,or=n.overflow,Mo=e),e=Sp(e,i.children),e.flags|=4096,e)}function Ag(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),dh(n.return,e,t)}function Yf(n,e,t,i,r){var o=n.memoizedState;o===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=r)}function ox(n,e,t){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(An(n,e,i.children,t),i=Nt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ag(n,t,e);else if(n.tag===19)Ag(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ct(Nt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&hc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Yf(e,!1,r,t,o);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&hc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Yf(e,!0,t,null,o);break;case"together":Yf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ju(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function cr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),bo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(Se(153));if(e.child!==null){for(n=e.child,t=zr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=zr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function O1(n,e,t){switch(e.tag){case 3:ix(e),Us();break;case 5:Ly(e);break;case 1:Gn(e.type)&&ac(e);break;case 4:hp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ct(cc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ct(Nt,Nt.current&1),e.flags|=128,null):t&e.child.childLanes?rx(n,e,t):(Ct(Nt,Nt.current&1),n=cr(n,e,t),n!==null?n.sibling:null);Ct(Nt,Nt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return ox(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ct(Nt,Nt.current),i)break;return null;case 22:case 23:return e.lanes=0,tx(n,e,t)}return cr(n,e,t)}var sx,_h,ax,lx;sx=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};_h=function(){};ax=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,po(Vi.current);var o=null;switch(t){case"input":r=Gd(n,r),i=Gd(n,i),o=[];break;case"select":r=Ft({},r,{value:void 0}),i=Ft({},i,{value:void 0}),o=[];break;case"textarea":r=jd(n,r),i=jd(n,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=oc)}qd(t,i);var l;t=null;for(h in r)if(!i.hasOwnProperty(h)&&r.hasOwnProperty(h)&&r[h]!=null)if(h==="style"){var a=r[h];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ja.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in i){var d=i[h];if(a=r!=null?r[h]:void 0,i.hasOwnProperty(h)&&d!==a&&(d!=null||a!=null))if(h==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(t||(t={}),t[l]=d[l])}else t||(o||(o=[]),o.push(h,t)),t=d;else h==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(o=o||[]).push(h,d)):h==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(h,""+d):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ja.hasOwnProperty(h)?(d!=null&&h==="onScroll"&&Dt("scroll",n),o||a===d||(o=[])):(o=o||[]).push(h,d))}t&&(o=o||[]).push("style",t);var h=o;(e.updateQueue=h)&&(e.flags|=4)}};lx=function(n,e,t,i){t!==i&&(e.flags|=4)};function _a(n,e){if(!Ot)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function xn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function U1(n,e,t){var i=e.pendingProps;switch(sp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(e),null;case 1:return Gn(e.type)&&sc(),xn(e),null;case 3:return i=e.stateNode,Ns(),It(Vn),It(bn),mp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(lu(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mi!==null&&(Ph(Mi),Mi=null))),_h(n,e),xn(e),null;case 5:pp(e);var r=po(il.current);if(t=e.type,n!==null&&e.stateNode!=null)ax(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Se(166));return xn(e),null}if(n=po(Vi.current),lu(e)){i=e.stateNode,t=e.type;var o=e.memoizedProps;switch(i[Fi]=e,i[tl]=o,n=(e.mode&1)!==0,t){case"dialog":Dt("cancel",i),Dt("close",i);break;case"iframe":case"object":case"embed":Dt("load",i);break;case"video":case"audio":for(r=0;r<Ra.length;r++)Dt(Ra[r],i);break;case"source":Dt("error",i);break;case"img":case"image":case"link":Dt("error",i),Dt("load",i);break;case"details":Dt("toggle",i);break;case"input":zm(i,o),Dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Dt("invalid",i);break;case"textarea":Bm(i,o),Dt("invalid",i)}qd(t,o),r=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&au(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&au(i.textContent,a,n),r=["children",""+a]):ja.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Dt("scroll",i)}switch(t){case"input":Jl(i),Fm(i,o,!0);break;case"textarea":Jl(i),Vm(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=oc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=l.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=l.createElement(t,{is:i.is}):(n=l.createElement(t),t==="select"&&(l=n,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):n=l.createElementNS(n,t),n[Fi]=e,n[tl]=i,sx(n,e,!1,!1),e.stateNode=n;e:{switch(l=Yd(t,i),t){case"dialog":Dt("cancel",n),Dt("close",n),r=i;break;case"iframe":case"object":case"embed":Dt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ra.length;r++)Dt(Ra[r],n);r=i;break;case"source":Dt("error",n),r=i;break;case"img":case"image":case"link":Dt("error",n),Dt("load",n),r=i;break;case"details":Dt("toggle",n),r=i;break;case"input":zm(n,i),r=Gd(n,i),Dt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ft({},i,{value:void 0}),Dt("invalid",n);break;case"textarea":Bm(n,i),r=jd(n,i),Dt("invalid",n);break;default:r=i}qd(t,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];o==="style"?z0(n,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&k0(n,d)):o==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&Xa(n,d):typeof d=="number"&&Xa(n,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ja.hasOwnProperty(o)?d!=null&&o==="onScroll"&&Dt("scroll",n):d!=null&&jh(n,o,d,l))}switch(t){case"input":Jl(n),Fm(n,i,!1);break;case"textarea":Jl(n),Vm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Fr(i.value));break;case"select":n.multiple=!!i.multiple,o=i.value,o!=null?ws(n,!!i.multiple,o,!1):i.defaultValue!=null&&ws(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=oc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xn(e),null;case 6:if(n&&e.stateNode!=null)lx(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Se(166));if(t=po(il.current),po(Vi.current),lu(e)){if(i=e.stateNode,t=e.memoizedProps,i[Fi]=e,(o=i.nodeValue!==t)&&(n=Qn,n!==null))switch(n.tag){case 3:au(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&au(i.nodeValue,t,(n.mode&1)!==0)}o&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Fi]=e,e.stateNode=i}return xn(e),null;case 13:if(It(Nt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ot&&Zn!==null&&e.mode&1&&!(e.flags&128))Ey(),Us(),e.flags|=98560,o=!1;else if(o=lu(e),i!==null&&i.dehydrated!==null){if(n===null){if(!o)throw Error(Se(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Se(317));o[Fi]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xn(e),o=!1}else Mi!==null&&(Ph(Mi),Mi=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Nt.current&1?Jt===0&&(Jt=3):Cp())),e.updateQueue!==null&&(e.flags|=4),xn(e),null);case 4:return Ns(),_h(n,e),n===null&&Ja(e.stateNode.containerInfo),xn(e),null;case 10:return cp(e.type._context),xn(e),null;case 17:return Gn(e.type)&&sc(),xn(e),null;case 19:if(It(Nt),o=e.memoizedState,o===null)return xn(e),null;if(i=(e.flags&128)!==0,l=o.rendering,l===null)if(i)_a(o,!1);else{if(Jt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(l=hc(n),l!==null){for(e.flags|=128,_a(o,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)o=t,n=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=n,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,n=l.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ct(Nt,Nt.current&1|2),e.child}n=n.sibling}o.tail!==null&&Wt()>Fs&&(e.flags|=128,i=!0,_a(o,!1),e.lanes=4194304)}else{if(!i)if(n=hc(l),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),_a(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Ot)return xn(e),null}else 2*Wt()-o.renderingStartTime>Fs&&t!==1073741824&&(e.flags|=128,i=!0,_a(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(t=o.last,t!==null?t.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Wt(),e.sibling=null,t=Nt.current,Ct(Nt,i?t&1|2:t&1),e):(xn(e),null);case 22:case 23:return Tp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Kn&1073741824&&(xn(e),e.subtreeFlags&6&&(e.flags|=8192)):xn(e),null;case 24:return null;case 25:return null}throw Error(Se(156,e.tag))}function k1(n,e){switch(sp(e),e.tag){case 1:return Gn(e.type)&&sc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ns(),It(Vn),It(bn),mp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return pp(e),null;case 13:if(It(Nt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Se(340));Us()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return It(Nt),null;case 4:return Ns(),null;case 10:return cp(e.type._context),null;case 22:case 23:return Tp(),null;case 24:return null;default:return null}}var fu=!1,Mn=!1,N1=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function ys(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Vt(n,e,i)}else t.current=null}function Sh(n,e,t){try{t()}catch(i){Vt(n,e,i)}}var Dg=!1;function z1(n,e){if(rh=nc,n=dy(),rp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,a=-1,d=-1,h=0,m=0,y=n,v=null;t:for(;;){for(var x;y!==t||r!==0&&y.nodeType!==3||(a=l+r),y!==o||i!==0&&y.nodeType!==3||(d=l+i),y.nodeType===3&&(l+=y.nodeValue.length),(x=y.firstChild)!==null;)v=y,y=x;for(;;){if(y===n)break t;if(v===t&&++h===r&&(a=l),v===o&&++m===i&&(d=l),(x=y.nextSibling)!==null)break;y=v,v=y.parentNode}y=x}t=a===-1||d===-1?null:{start:a,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(oh={focusedElem:n,selectionRange:t},nc=!1,Ie=e;Ie!==null;)if(e=Ie,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ie=n;else for(;Ie!==null;){e=Ie;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var T=_.memoizedProps,b=_.memoizedState,p=e.stateNode,w=p.getSnapshotBeforeUpdate(e.elementType===e.type?T:_i(e.type,T),b);p.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(A){Vt(e,e.return,A)}if(n=e.sibling,n!==null){n.return=e.return,Ie=n;break}Ie=e.return}return _=Dg,Dg=!1,_}function Ba(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var o=r.destroy;r.destroy=void 0,o!==void 0&&Sh(e,t,o)}r=r.next}while(r!==i)}}function Uc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Mh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function ux(n){var e=n.alternate;e!==null&&(n.alternate=null,ux(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Fi],delete e[tl],delete e[lh],delete e[_1],delete e[S1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function cx(n){return n.tag===5||n.tag===3||n.tag===4}function Rg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||cx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=oc));else if(i!==4&&(n=n.child,n!==null))for(wh(n,e,t),n=n.sibling;n!==null;)wh(n,e,t),n=n.sibling}function bh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(bh(n,e,t),n=n.sibling;n!==null;)bh(n,e,t),n=n.sibling}var mn=null,Si=!1;function vr(n,e,t){for(t=t.child;t!==null;)fx(n,e,t),t=t.sibling}function fx(n,e,t){if(Bi&&typeof Bi.onCommitFiberUnmount=="function")try{Bi.onCommitFiberUnmount(Cc,t)}catch{}switch(t.tag){case 5:Mn||ys(t,e);case 6:var i=mn,r=Si;mn=null,vr(n,e,t),mn=i,Si=r,mn!==null&&(Si?(n=mn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):mn.removeChild(t.stateNode));break;case 18:mn!==null&&(Si?(n=mn,t=t.stateNode,n.nodeType===8?Vf(n.parentNode,t):n.nodeType===1&&Vf(n,t),Ka(n)):Vf(mn,t.stateNode));break;case 4:i=mn,r=Si,mn=t.stateNode.containerInfo,Si=!0,vr(n,e,t),mn=i,Si=r;break;case 0:case 11:case 14:case 15:if(!Mn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Sh(t,e,l),r=r.next}while(r!==i)}vr(n,e,t);break;case 1:if(!Mn&&(ys(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Vt(t,e,a)}vr(n,e,t);break;case 21:vr(n,e,t);break;case 22:t.mode&1?(Mn=(i=Mn)||t.memoizedState!==null,vr(n,e,t),Mn=i):vr(n,e,t);break;default:vr(n,e,t)}}function Lg(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new N1),e.forEach(function(i){var r=q1.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function gi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var o=n,l=e,a=l;e:for(;a!==null;){switch(a.tag){case 5:mn=a.stateNode,Si=!1;break e;case 3:mn=a.stateNode.containerInfo,Si=!0;break e;case 4:mn=a.stateNode.containerInfo,Si=!0;break e}a=a.return}if(mn===null)throw Error(Se(160));fx(o,l,r),mn=null,Si=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(h){Vt(r,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dx(e,n),e=e.sibling}function dx(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(gi(e,n),Ii(n),i&4){try{Ba(3,n,n.return),Uc(3,n)}catch(T){Vt(n,n.return,T)}try{Ba(5,n,n.return)}catch(T){Vt(n,n.return,T)}}break;case 1:gi(e,n),Ii(n),i&512&&t!==null&&ys(t,t.return);break;case 5:if(gi(e,n),Ii(n),i&512&&t!==null&&ys(t,t.return),n.flags&32){var r=n.stateNode;try{Xa(r,"")}catch(T){Vt(n,n.return,T)}}if(i&4&&(r=n.stateNode,r!=null)){var o=n.memoizedProps,l=t!==null?t.memoizedProps:o,a=n.type,d=n.updateQueue;if(n.updateQueue=null,d!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&I0(r,o),Yd(a,l);var h=Yd(a,o);for(l=0;l<d.length;l+=2){var m=d[l],y=d[l+1];m==="style"?z0(r,y):m==="dangerouslySetInnerHTML"?k0(r,y):m==="children"?Xa(r,y):jh(r,m,y,h)}switch(a){case"input":Hd(r,o);break;case"textarea":O0(r,o);break;case"select":var v=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?ws(r,!!o.multiple,x,!1):v!==!!o.multiple&&(o.defaultValue!=null?ws(r,!!o.multiple,o.defaultValue,!0):ws(r,!!o.multiple,o.multiple?[]:"",!1))}r[tl]=o}catch(T){Vt(n,n.return,T)}}break;case 6:if(gi(e,n),Ii(n),i&4){if(n.stateNode===null)throw Error(Se(162));r=n.stateNode,o=n.memoizedProps;try{r.nodeValue=o}catch(T){Vt(n,n.return,T)}}break;case 3:if(gi(e,n),Ii(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ka(e.containerInfo)}catch(T){Vt(n,n.return,T)}break;case 4:gi(e,n),Ii(n);break;case 13:gi(e,n),Ii(n),r=n.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(bp=Wt())),i&4&&Lg(n);break;case 22:if(m=t!==null&&t.memoizedState!==null,n.mode&1?(Mn=(h=Mn)||m,gi(e,n),Mn=h):gi(e,n),Ii(n),i&8192){if(h=n.memoizedState!==null,(n.stateNode.isHidden=h)&&!m&&n.mode&1)for(Ie=n,m=n.child;m!==null;){for(y=Ie=m;Ie!==null;){switch(v=Ie,x=v.child,v.tag){case 0:case 11:case 14:case 15:Ba(4,v,v.return);break;case 1:ys(v,v.return);var _=v.stateNode;if(typeof _.componentWillUnmount=="function"){i=v,t=v.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(T){Vt(i,t,T)}}break;case 5:ys(v,v.return);break;case 22:if(v.memoizedState!==null){Og(y);continue}}x!==null?(x.return=v,Ie=x):Og(y)}m=m.sibling}e:for(m=null,y=n;;){if(y.tag===5){if(m===null){m=y;try{r=y.stateNode,h?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=y.stateNode,d=y.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=N0("display",l))}catch(T){Vt(n,n.return,T)}}}else if(y.tag===6){if(m===null)try{y.stateNode.nodeValue=h?"":y.memoizedProps}catch(T){Vt(n,n.return,T)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===n)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;m===y&&(m=null),y=y.return}m===y&&(m=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:gi(e,n),Ii(n),i&4&&Lg(n);break;case 21:break;default:gi(e,n),Ii(n)}}function Ii(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(cx(t)){var i=t;break e}t=t.return}throw Error(Se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xa(r,""),i.flags&=-33);var o=Rg(n);bh(n,o,r);break;case 3:case 4:var l=i.stateNode.containerInfo,a=Rg(n);wh(n,a,l);break;default:throw Error(Se(161))}}catch(d){Vt(n,n.return,d)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function F1(n,e,t){Ie=n,hx(n)}function hx(n,e,t){for(var i=(n.mode&1)!==0;Ie!==null;){var r=Ie,o=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||fu;if(!l){var a=r.alternate,d=a!==null&&a.memoizedState!==null||Mn;a=fu;var h=Mn;if(fu=l,(Mn=d)&&!h)for(Ie=r;Ie!==null;)l=Ie,d=l.child,l.tag===22&&l.memoizedState!==null?Ug(r):d!==null?(d.return=l,Ie=d):Ug(r);for(;o!==null;)Ie=o,hx(o),o=o.sibling;Ie=r,fu=a,Mn=h}Ig(n)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Ie=o):Ig(n)}}function Ig(n){for(;Ie!==null;){var e=Ie;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Mn||Uc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Mn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:_i(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&gg(e,o,i);break;case 3:var l=e.updateQueue;if(l!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}gg(e,l,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var m=h.memoizedState;if(m!==null){var y=m.dehydrated;y!==null&&Ka(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}Mn||e.flags&512&&Mh(e)}catch(v){Vt(e,e.return,v)}}if(e===n){Ie=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ie=t;break}Ie=e.return}}function Og(n){for(;Ie!==null;){var e=Ie;if(e===n){Ie=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ie=t;break}Ie=e.return}}function Ug(n){for(;Ie!==null;){var e=Ie;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Uc(4,e)}catch(d){Vt(e,t,d)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(d){Vt(e,r,d)}}var o=e.return;try{Mh(e)}catch(d){Vt(e,o,d)}break;case 5:var l=e.return;try{Mh(e)}catch(d){Vt(e,l,d)}}}catch(d){Vt(e,e.return,d)}if(e===n){Ie=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ie=a;break}Ie=e.return}}var B1=Math.ceil,gc=fr.ReactCurrentDispatcher,Mp=fr.ReactCurrentOwner,di=fr.ReactCurrentBatchConfig,pt=0,fn=null,Kt=null,gn=0,Kn=0,xs=Wr(0),Jt=0,al=null,bo=0,kc=0,wp=0,Va=null,kn=null,bp=0,Fs=1/0,Ji=null,vc=!1,Eh=null,kr=null,du=!1,Dr=null,yc=0,Ga=0,Th=null,Xu=-1,qu=0;function Dn(){return pt&6?Wt():Xu!==-1?Xu:Xu=Wt()}function Nr(n){return n.mode&1?pt&2&&gn!==0?gn&-gn:w1.transition!==null?(qu===0&&(qu=K0()),qu):(n=xt,n!==0||(n=window.event,n=n===void 0?16:iy(n.type)),n):1}function Ci(n,e,t,i){if(50<Ga)throw Ga=0,Th=null,Error(Se(185));gl(n,t,i),(!(pt&2)||n!==fn)&&(n===fn&&(!(pt&2)&&(kc|=t),Jt===4&&Cr(n,gn)),Hn(n,i),t===1&&pt===0&&!(e.mode&1)&&(Fs=Wt()+500,Lc&&jr()))}function Hn(n,e){var t=n.callbackNode;wM(n,e);var i=tc(n,n===fn?gn:0);if(i===0)t!==null&&Wm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Wm(t),e===1)n.tag===0?M1(kg.bind(null,n)):My(kg.bind(null,n)),y1(function(){!(pt&6)&&jr()}),t=null;else{switch(Z0(i)){case 1:t=Kh;break;case 4:t=Y0;break;case 16:t=ec;break;case 536870912:t=$0;break;default:t=ec}t=Sx(t,px.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function px(n,e){if(Xu=-1,qu=0,pt&6)throw Error(Se(327));var t=n.callbackNode;if(Ps()&&n.callbackNode!==t)return null;var i=tc(n,n===fn?gn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=xc(n,i);else{e=i;var r=pt;pt|=2;var o=gx();(fn!==n||gn!==e)&&(Ji=null,Fs=Wt()+500,vo(n,e));do try{H1();break}catch(a){mx(n,a)}while(1);up(),gc.current=o,pt=r,Kt!==null?e=0:(fn=null,gn=0,e=Jt)}if(e!==0){if(e===2&&(r=Jd(n),r!==0&&(i=r,e=Ch(n,r))),e===1)throw t=al,vo(n,0),Cr(n,i),Hn(n,Wt()),t;if(e===6)Cr(n,i);else{if(r=n.current.alternate,!(i&30)&&!V1(r)&&(e=xc(n,i),e===2&&(o=Jd(n),o!==0&&(i=o,e=Ch(n,o))),e===1))throw t=al,vo(n,0),Cr(n,i),Hn(n,Wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Se(345));case 2:ao(n,kn,Ji);break;case 3:if(Cr(n,i),(i&130023424)===i&&(e=bp+500-Wt(),10<e)){if(tc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Dn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=ah(ao.bind(null,n,kn,Ji),e);break}ao(n,kn,Ji);break;case 4:if(Cr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var l=31-Ti(i);o=1<<l,l=e[l],l>r&&(r=l),i&=~o}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*B1(i/1960))-i,10<i){n.timeoutHandle=ah(ao.bind(null,n,kn,Ji),i);break}ao(n,kn,Ji);break;case 5:ao(n,kn,Ji);break;default:throw Error(Se(329))}}}return Hn(n,Wt()),n.callbackNode===t?px.bind(null,n):null}function Ch(n,e){var t=Va;return n.current.memoizedState.isDehydrated&&(vo(n,e).flags|=256),n=xc(n,e),n!==2&&(e=kn,kn=t,e!==null&&Ph(e)),n}function Ph(n){kn===null?kn=n:kn.push.apply(kn,n)}function V1(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],o=r.getSnapshot;r=r.value;try{if(!Ai(o(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cr(n,e){for(e&=~wp,e&=~kc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Ti(e),i=1<<t;n[t]=-1,e&=~i}}function kg(n){if(pt&6)throw Error(Se(327));Ps();var e=tc(n,0);if(!(e&1))return Hn(n,Wt()),null;var t=xc(n,e);if(n.tag!==0&&t===2){var i=Jd(n);i!==0&&(e=i,t=Ch(n,i))}if(t===1)throw t=al,vo(n,0),Cr(n,e),Hn(n,Wt()),t;if(t===6)throw Error(Se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ao(n,kn,Ji),Hn(n,Wt()),null}function Ep(n,e){var t=pt;pt|=1;try{return n(e)}finally{pt=t,pt===0&&(Fs=Wt()+500,Lc&&jr())}}function Eo(n){Dr!==null&&Dr.tag===0&&!(pt&6)&&Ps();var e=pt;pt|=1;var t=di.transition,i=xt;try{if(di.transition=null,xt=1,n)return n()}finally{xt=i,di.transition=t,pt=e,!(pt&6)&&jr()}}function Tp(){Kn=xs.current,It(xs)}function vo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,v1(t)),Kt!==null)for(t=Kt.return;t!==null;){var i=t;switch(sp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&sc();break;case 3:Ns(),It(Vn),It(bn),mp();break;case 5:pp(i);break;case 4:Ns();break;case 13:It(Nt);break;case 19:It(Nt);break;case 10:cp(i.type._context);break;case 22:case 23:Tp()}t=t.return}if(fn=n,Kt=n=zr(n.current,null),gn=Kn=e,Jt=0,al=null,wp=kc=bo=0,kn=Va=null,ho!==null){for(e=0;e<ho.length;e++)if(t=ho[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,o=t.pending;if(o!==null){var l=o.next;o.next=r,i.next=l}t.pending=i}ho=null}return n}function mx(n,e){do{var t=Kt;try{if(up(),Hu.current=mc,pc){for(var i=zt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}pc=!1}if(wo=0,cn=Zt=zt=null,Fa=!1,rl=0,Mp.current=null,t===null||t.return===null){Jt=1,al=e,Kt=null;break}e:{var o=n,l=t.return,a=t,d=e;if(e=gn,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var h=d,m=a,y=m.tag;if(!(m.mode&1)&&(y===0||y===11||y===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=wg(l);if(x!==null){x.flags&=-257,bg(x,l,a,o,e),x.mode&1&&Mg(o,h,e),e=x,d=h;var _=e.updateQueue;if(_===null){var T=new Set;T.add(d),e.updateQueue=T}else _.add(d);break e}else{if(!(e&1)){Mg(o,h,e),Cp();break e}d=Error(Se(426))}}else if(Ot&&a.mode&1){var b=wg(l);if(b!==null){!(b.flags&65536)&&(b.flags|=256),bg(b,l,a,o,e),ap(zs(d,a));break e}}o=d=zs(d,a),Jt!==4&&(Jt=2),Va===null?Va=[o]:Va.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var p=Qy(o,d,e);mg(o,p);break e;case 1:a=d;var w=o.type,E=o.stateNode;if(!(o.flags&128)&&(typeof w.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(kr===null||!kr.has(E)))){o.flags|=65536,e&=-e,o.lanes|=e;var A=Jy(o,a,e);mg(o,A);break e}}o=o.return}while(o!==null)}yx(t)}catch(D){e=D,Kt===t&&t!==null&&(Kt=t=t.return);continue}break}while(1)}function gx(){var n=gc.current;return gc.current=mc,n===null?mc:n}function Cp(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),fn===null||!(bo&268435455)&&!(kc&268435455)||Cr(fn,gn)}function xc(n,e){var t=pt;pt|=2;var i=gx();(fn!==n||gn!==e)&&(Ji=null,vo(n,e));do try{G1();break}catch(r){mx(n,r)}while(1);if(up(),pt=t,gc.current=i,Kt!==null)throw Error(Se(261));return fn=null,gn=0,Jt}function G1(){for(;Kt!==null;)vx(Kt)}function H1(){for(;Kt!==null&&!pM();)vx(Kt)}function vx(n){var e=_x(n.alternate,n,Kn);n.memoizedProps=n.pendingProps,e===null?yx(n):Kt=e,Mp.current=null}function yx(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=k1(t,e),t!==null){t.flags&=32767,Kt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,Kt=null;return}}else if(t=U1(t,e,Kn),t!==null){Kt=t;return}if(e=e.sibling,e!==null){Kt=e;return}Kt=e=n}while(e!==null);Jt===0&&(Jt=5)}function ao(n,e,t){var i=xt,r=di.transition;try{di.transition=null,xt=1,W1(n,e,t,i)}finally{di.transition=r,xt=i}return null}function W1(n,e,t,i){do Ps();while(Dr!==null);if(pt&6)throw Error(Se(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Se(177));n.callbackNode=null,n.callbackPriority=0;var o=t.lanes|t.childLanes;if(bM(n,o),n===fn&&(Kt=fn=null,gn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||du||(du=!0,Sx(ec,function(){return Ps(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=di.transition,di.transition=null;var l=xt;xt=1;var a=pt;pt|=4,Mp.current=null,z1(n,t),dx(t,n),c1(oh),nc=!!rh,oh=rh=null,n.current=t,F1(t),mM(),pt=a,xt=l,di.transition=o}else n.current=t;if(du&&(du=!1,Dr=n,yc=r),o=n.pendingLanes,o===0&&(kr=null),yM(t.stateNode),Hn(n,Wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(vc)throw vc=!1,n=Eh,Eh=null,n;return yc&1&&n.tag!==0&&Ps(),o=n.pendingLanes,o&1?n===Th?Ga++:(Ga=0,Th=n):Ga=0,jr(),null}function Ps(){if(Dr!==null){var n=Z0(yc),e=di.transition,t=xt;try{if(di.transition=null,xt=16>n?16:n,Dr===null)var i=!1;else{if(n=Dr,Dr=null,yc=0,pt&6)throw Error(Se(331));var r=pt;for(pt|=4,Ie=n.current;Ie!==null;){var o=Ie,l=o.child;if(Ie.flags&16){var a=o.deletions;if(a!==null){for(var d=0;d<a.length;d++){var h=a[d];for(Ie=h;Ie!==null;){var m=Ie;switch(m.tag){case 0:case 11:case 15:Ba(8,m,o)}var y=m.child;if(y!==null)y.return=m,Ie=y;else for(;Ie!==null;){m=Ie;var v=m.sibling,x=m.return;if(ux(m),m===h){Ie=null;break}if(v!==null){v.return=x,Ie=v;break}Ie=x}}}var _=o.alternate;if(_!==null){var T=_.child;if(T!==null){_.child=null;do{var b=T.sibling;T.sibling=null,T=b}while(T!==null)}}Ie=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,Ie=l;else e:for(;Ie!==null;){if(o=Ie,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ba(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,Ie=p;break e}Ie=o.return}}var w=n.current;for(Ie=w;Ie!==null;){l=Ie;var E=l.child;if(l.subtreeFlags&2064&&E!==null)E.return=l,Ie=E;else e:for(l=w;Ie!==null;){if(a=Ie,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Uc(9,a)}}catch(D){Vt(a,a.return,D)}if(a===l){Ie=null;break e}var A=a.sibling;if(A!==null){A.return=a.return,Ie=A;break e}Ie=a.return}}if(pt=r,jr(),Bi&&typeof Bi.onPostCommitFiberRoot=="function")try{Bi.onPostCommitFiberRoot(Cc,n)}catch{}i=!0}return i}finally{xt=t,di.transition=e}}return!1}function Ng(n,e,t){e=zs(t,e),e=Qy(n,e,1),n=Ur(n,e,1),e=Dn(),n!==null&&(gl(n,1,e),Hn(n,e))}function Vt(n,e,t){if(n.tag===3)Ng(n,n,t);else for(;e!==null;){if(e.tag===3){Ng(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(kr===null||!kr.has(i))){n=zs(t,n),n=Jy(e,n,1),e=Ur(e,n,1),n=Dn(),e!==null&&(gl(e,1,n),Hn(e,n));break}}e=e.return}}function j1(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Dn(),n.pingedLanes|=n.suspendedLanes&t,fn===n&&(gn&t)===t&&(Jt===4||Jt===3&&(gn&130023424)===gn&&500>Wt()-bp?vo(n,0):wp|=t),Hn(n,e)}function xx(n,e){e===0&&(n.mode&1?(e=nu,nu<<=1,!(nu&130023424)&&(nu=4194304)):e=1);var t=Dn();n=ur(n,e),n!==null&&(gl(n,e,t),Hn(n,t))}function X1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),xx(n,t)}function q1(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Se(314))}i!==null&&i.delete(e),xx(n,t)}var _x;_x=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Vn.current)Fn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Fn=!1,O1(n,e,t);Fn=!!(n.flags&131072)}else Fn=!1,Ot&&e.flags&1048576&&wy(e,uc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ju(n,e),n=e.pendingProps;var r=Os(e,bn.current);Cs(e,t),r=vp(null,e,i,n,r,t);var o=yp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Gn(i)?(o=!0,ac(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,dp(e),r.updater=Ic,e.stateNode=r,r._reactInternals=e,ph(e,i,n,t),e=vh(null,e,i,!0,o,t)):(e.tag=0,Ot&&o&&op(e),An(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ju(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=$1(i),n=_i(i,n),r){case 0:e=gh(null,e,i,n,t);break e;case 1:e=Cg(null,e,i,n,t);break e;case 11:e=Eg(null,e,i,n,t);break e;case 14:e=Tg(null,e,i,_i(i.type,n),t);break e}throw Error(Se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),gh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),Cg(n,e,i,r,t);case 3:e:{if(ix(e),n===null)throw Error(Se(387));i=e.pendingProps,o=e.memoizedState,r=o.element,Cy(n,e),dc(e,i,null,t);var l=e.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=zs(Error(Se(423)),e),e=Pg(n,e,i,t,r);break e}else if(i!==r){r=zs(Error(Se(424)),e),e=Pg(n,e,i,t,r);break e}else for(Zn=Or(e.stateNode.containerInfo.firstChild),Qn=e,Ot=!0,Mi=null,t=Ry(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Us(),i===r){e=cr(n,e,t);break e}An(n,e,i,t)}e=e.child}return e;case 5:return Ly(e),n===null&&fh(e),i=e.type,r=e.pendingProps,o=n!==null?n.memoizedProps:null,l=r.children,sh(i,r)?l=null:o!==null&&sh(i,o)&&(e.flags|=32),nx(n,e),An(n,e,l,t),e.child;case 6:return n===null&&fh(e),null;case 13:return rx(n,e,t);case 4:return hp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ks(e,null,i,t):An(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),Eg(n,e,i,r,t);case 7:return An(n,e,e.pendingProps,t),e.child;case 8:return An(n,e,e.pendingProps.children,t),e.child;case 12:return An(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,l=r.value,Ct(cc,i._currentValue),i._currentValue=l,o!==null)if(Ai(o.value,l)){if(o.children===r.children&&!Vn.current){e=cr(n,e,t);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var d=a.firstContext;d!==null;){if(d.context===i){if(o.tag===1){d=sr(-1,t&-t),d.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var m=h.pending;m===null?d.next=d:(d.next=m.next,m.next=d),h.pending=d}}o.lanes|=t,d=o.alternate,d!==null&&(d.lanes|=t),dh(o.return,t,e),a.lanes|=t;break}d=d.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(Se(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),dh(l,t,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}An(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Cs(e,t),r=hi(r),i=i(r),e.flags|=1,An(n,e,i,t),e.child;case 14:return i=e.type,r=_i(i,e.pendingProps),r=_i(i.type,r),Tg(n,e,i,r,t);case 15:return ex(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),ju(n,e),e.tag=1,Gn(i)?(n=!0,ac(e)):n=!1,Cs(e,t),Ay(e,i,r),ph(e,i,r,t),vh(null,e,i,!0,n,t);case 19:return ox(n,e,t);case 22:return tx(n,e,t)}throw Error(Se(156,e.tag))};function Sx(n,e){return q0(n,e)}function Y1(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(n,e,t,i){return new Y1(n,e,t,i)}function Pp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $1(n){if(typeof n=="function")return Pp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===qh)return 11;if(n===Yh)return 14}return 2}function zr(n,e){var t=n.alternate;return t===null?(t=fi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Yu(n,e,t,i,r,o){var l=2;if(i=n,typeof n=="function")Pp(n)&&(l=1);else if(typeof n=="string")l=5;else e:switch(n){case us:return yo(t.children,r,o,e);case Xh:l=8,r|=8;break;case zd:return n=fi(12,t,e,r|2),n.elementType=zd,n.lanes=o,n;case Fd:return n=fi(13,t,e,r),n.elementType=Fd,n.lanes=o,n;case Bd:return n=fi(19,t,e,r),n.elementType=Bd,n.lanes=o,n;case D0:return Nc(t,r,o,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P0:l=10;break e;case A0:l=9;break e;case qh:l=11;break e;case Yh:l=14;break e;case wr:l=16,i=null;break e}throw Error(Se(130,n==null?n:typeof n,""))}return e=fi(l,t,e,r),e.elementType=n,e.type=i,e.lanes=o,e}function yo(n,e,t,i){return n=fi(7,n,i,e),n.lanes=t,n}function Nc(n,e,t,i){return n=fi(22,n,i,e),n.elementType=D0,n.lanes=t,n.stateNode={isHidden:!1},n}function $f(n,e,t){return n=fi(6,n,null,e),n.lanes=t,n}function Kf(n,e,t){return e=fi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function K1(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Df(0),this.expirationTimes=Df(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Df(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ap(n,e,t,i,r,o,l,a,d){return n=new K1(n,e,t,a,d),e===1?(e=1,o===!0&&(e|=8)):e=0,o=fi(3,null,null,e),n.current=o,o.stateNode=n,o.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},dp(o),n}function Z1(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Mx(n){if(!n)return Br;n=n._reactInternals;e:{if(Ro(n)!==n||n.tag!==1)throw Error(Se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Se(171))}if(n.tag===1){var t=n.type;if(Gn(t))return Sy(n,t,e)}return e}function wx(n,e,t,i,r,o,l,a,d){return n=Ap(t,i,!0,n,r,o,l,a,d),n.context=Mx(null),t=n.current,i=Dn(),r=Nr(t),o=sr(i,r),o.callback=e??null,Ur(t,o,r),n.current.lanes=r,gl(n,r,i),Hn(n,i),n}function zc(n,e,t,i){var r=e.current,o=Dn(),l=Nr(r);return t=Mx(t),e.context===null?e.context=t:e.pendingContext=t,e=sr(o,l),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ur(r,e,l),n!==null&&(Ci(n,r,l,o),Gu(n,r,l)),l}function _c(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function zg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Dp(n,e){zg(n,e),(n=n.alternate)&&zg(n,e)}function Q1(){return null}var bx=typeof reportError=="function"?reportError:function(n){console.error(n)};function Rp(n){this._internalRoot=n}Fc.prototype.render=Rp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Se(409));zc(n,e,null,null)};Fc.prototype.unmount=Rp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Eo(function(){zc(null,n,null,null)}),e[lr]=null}};function Fc(n){this._internalRoot=n}Fc.prototype.unstable_scheduleHydration=function(n){if(n){var e=ey();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Tr.length&&e!==0&&e<Tr[t].priority;t++);Tr.splice(t,0,n),t===0&&ny(n)}};function Lp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Bc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Fg(){}function J1(n,e,t,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var h=_c(l);o.call(h)}}var l=wx(e,i,n,0,null,!1,!1,"",Fg);return n._reactRootContainer=l,n[lr]=l.current,Ja(n.nodeType===8?n.parentNode:n),Eo(),l}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var h=_c(d);a.call(h)}}var d=Ap(n,0,!1,null,null,!1,!1,"",Fg);return n._reactRootContainer=d,n[lr]=d.current,Ja(n.nodeType===8?n.parentNode:n),Eo(function(){zc(e,d,t,i)}),d}function Vc(n,e,t,i,r){var o=t._reactRootContainer;if(o){var l=o;if(typeof r=="function"){var a=r;r=function(){var d=_c(l);a.call(d)}}zc(e,l,n,r)}else l=J1(t,e,n,r,i);return _c(l)}Q0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Da(e.pendingLanes);t!==0&&(Zh(e,t|1),Hn(e,Wt()),!(pt&6)&&(Fs=Wt()+500,jr()))}break;case 13:Eo(function(){var i=ur(n,1);if(i!==null){var r=Dn();Ci(i,n,1,r)}}),Dp(n,1)}};Qh=function(n){if(n.tag===13){var e=ur(n,134217728);if(e!==null){var t=Dn();Ci(e,n,134217728,t)}Dp(n,134217728)}};J0=function(n){if(n.tag===13){var e=Nr(n),t=ur(n,e);if(t!==null){var i=Dn();Ci(t,n,e,i)}Dp(n,e)}};ey=function(){return xt};ty=function(n,e){var t=xt;try{return xt=n,e()}finally{xt=t}};Kd=function(n,e,t){switch(e){case"input":if(Hd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Rc(i);if(!r)throw Error(Se(90));L0(i),Hd(i,r)}}}break;case"textarea":O0(n,t);break;case"select":e=t.value,e!=null&&ws(n,!!t.multiple,e,!1)}};V0=Ep;G0=Eo;var ew={usingClientEntryPoint:!1,Events:[yl,hs,Rc,F0,B0,Ep]},Sa={findFiberByHostInstance:fo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},tw={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=j0(n),n===null?null:n.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||Q1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{Cc=hu.inject(tw),Bi=hu}catch{}}ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ew;ei.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lp(e))throw Error(Se(200));return Z1(n,e,null,t)};ei.createRoot=function(n,e){if(!Lp(n))throw Error(Se(299));var t=!1,i="",r=bx;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ap(n,1,!1,null,null,t,!1,i,r),n[lr]=e.current,Ja(n.nodeType===8?n.parentNode:n),new Rp(e)};ei.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Se(188)):(n=Object.keys(n).join(","),Error(Se(268,n)));return n=j0(e),n=n===null?null:n.stateNode,n};ei.flushSync=function(n){return Eo(n)};ei.hydrate=function(n,e,t){if(!Bc(e))throw Error(Se(200));return Vc(null,n,e,!0,t)};ei.hydrateRoot=function(n,e,t){if(!Lp(n))throw Error(Se(405));var i=t!=null&&t.hydratedSources||null,r=!1,o="",l=bx;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),e=wx(e,null,n,1,t??null,r,!1,o,l),n[lr]=e.current,Ja(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Fc(e)};ei.render=function(n,e,t){if(!Bc(e))throw Error(Se(200));return Vc(null,n,e,!1,t)};ei.unmountComponentAtNode=function(n){if(!Bc(n))throw Error(Se(40));return n._reactRootContainer?(Eo(function(){Vc(null,null,n,!1,function(){n._reactRootContainer=null,n[lr]=null})}),!0):!1};ei.unstable_batchedUpdates=Ep;ei.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Bc(t))throw Error(Se(200));if(n==null||n._reactInternals===void 0)throw Error(Se(38));return Vc(n,e,t,!1,i)};ei.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=ei})(QS);var Bg=Ud;Od.createRoot=Bg.createRoot,Od.hydrateRoot=Bg.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ip="151",Ho={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nw=0,Vg=1,iw=2,Op=1,Ex=2,La=3,Vr=0,Rn=1,ir=2,un=0,As=1,Ah=2,Gg=3,Hg=4,Sc=5,Pr=100,rw=101,ow=102,Wg=103,jg=104,Dh=200,sw=201,aw=202,lw=203,Tx=204,Cx=205,Px=206,uw=207,Ax=208,cw=209,fw=210,dw=0,hw=1,pw=2,Rh=3,mw=4,gw=5,vw=6,yw=7,Gc=0,xw=1,_w=2,Gi=0,Sw=1,Dx=2,Mw=3,ww=4,bw=5,Rx=300,Bs=301,Vs=302,Mc=303,Lh=304,Hc=306,To=1e3,bi=1001,Ih=1002,Qt=1003,Xg=1004,Zf=1005,ui=1006,Ew=1007,ll=1008,Co=1009,Tw=1010,Cw=1011,Up=1012,Pw=1013,mo=1014,go=1015,ul=1016,Aw=1017,Dw=1018,Ds=1020,Rw=1021,Ei=1023,Lw=1024,Iw=1025,xo=1026,Gs=1027,Ow=1028,Uw=1029,kw=1030,Nw=1031,zw=1033,Qf=33776,Jf=33777,ed=33778,td=33779,qg=35840,Yg=35841,$g=35842,Kg=35843,Fw=36196,Zg=37492,Qg=37496,Jg=37808,ev=37809,tv=37810,nv=37811,iv=37812,rv=37813,ov=37814,sv=37815,av=37816,lv=37817,uv=37818,cv=37819,fv=37820,dv=37821,nd=36492,Bw=36283,hv=36284,pv=36285,mv=36286,Po=3e3,bt=3001,Vw=3200,_l=3201,Sl=0,Gw=1,Ni="srgb",cl="srgb-linear",Lx="display-p3",id=7680,Hw=519,gv=35044,vv="300 es",Oh=1035;class Lo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,wc=180/Math.PI;function Ml(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function wn(n,e,t){return Math.max(e,Math.min(t,n))}function Ww(n,e){return(n%e+e)%e}function od(n,e,t){return(1-t)*n+t*e}function yv(n){return(n&n-1)===0&&n!==0}function jw(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pu(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*r+e.x,this.y=o*r+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,o,l,a,d,h){const m=this.elements;return m[0]=e,m[1]=r,m[2]=a,m[3]=t,m[4]=o,m[5]=d,m[6]=i,m[7]=l,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,l=i[0],a=i[3],d=i[6],h=i[1],m=i[4],y=i[7],v=i[2],x=i[5],_=i[8],T=r[0],b=r[3],p=r[6],w=r[1],E=r[4],A=r[7],D=r[2],N=r[5],B=r[8];return o[0]=l*T+a*w+d*D,o[3]=l*b+a*E+d*N,o[6]=l*p+a*A+d*B,o[1]=h*T+m*w+y*D,o[4]=h*b+m*E+y*N,o[7]=h*p+m*A+y*B,o[2]=v*T+x*w+_*D,o[5]=v*b+x*E+_*N,o[8]=v*p+x*A+_*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],h=e[7],m=e[8];return t*l*m-t*a*h-i*o*m+i*a*d+r*o*h-r*l*d}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],h=e[7],m=e[8],y=m*l-a*h,v=a*d-m*o,x=h*o-l*d,_=t*y+i*v+r*x;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/_;return e[0]=y*T,e[1]=(r*h-m*i)*T,e[2]=(a*i-r*l)*T,e[3]=v*T,e[4]=(m*t-r*d)*T,e[5]=(r*o-a*t)*T,e[6]=x*T,e[7]=(i*d-h*t)*T,e[8]=(l*t-i*o)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,l,a){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*l+h*a)+l+e,-r*h,r*d,-r*(-h*l+d*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sd.makeScale(e,t)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,t){return this.premultiply(sd.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new ct;function Ix(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ad(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Xw=new ct().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),qw=new ct().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Yw(n){return n.convertSRGBToLinear().applyMatrix3(qw)}function $w(n){return n.applyMatrix3(Xw).convertLinearToSRGB()}const Kw={[cl]:n=>n,[Ni]:n=>n.convertSRGBToLinear(),[Lx]:Yw},Zw={[cl]:n=>n,[Ni]:n=>n.convertLinearToSRGB(),[Lx]:$w},qn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return cl},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Kw[e],r=Zw[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let jo;class Ox{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jo===void 0&&(jo=fl("canvas")),jo.width=e.width,jo.height=e.height;const i=jo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=jo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=Rs(o[l]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rs(t[i]/255)*255):t[i]=Rs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ux{constructor(e=null){this.isSource=!0,this.uuid=Ml(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,a=r.length;l<a;l++)r[l].isDataTexture?o.push(ld(r[l].image)):o.push(ld(r[l]))}else o=ld(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function ld(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ox.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qw=0;class Wn extends Lo{constructor(e=Wn.DEFAULT_IMAGE,t=Wn.DEFAULT_MAPPING,i=bi,r=bi,o=ui,l=ll,a=Ei,d=Co,h=Wn.DEFAULT_ANISOTROPY,m=Po){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qw++}),this.uuid=Ml(),this.name="",this.source=new Ux(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=d,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case To:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case To:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Rx;Wn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*t+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*t+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*t+l[7]*i+l[11]*r+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const d=e.elements,h=d[0],m=d[4],y=d[8],v=d[1],x=d[5],_=d[9],T=d[2],b=d[6],p=d[10];if(Math.abs(m-v)<.01&&Math.abs(y-T)<.01&&Math.abs(_-b)<.01){if(Math.abs(m+v)<.1&&Math.abs(y+T)<.1&&Math.abs(_+b)<.1&&Math.abs(h+x+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(h+1)/2,A=(x+1)/2,D=(p+1)/2,N=(m+v)/4,B=(y+T)/4,k=(_+b)/4;return E>A&&E>D?E<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(E),r=N/i,o=B/i):A>D?A<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(A),i=N/r,o=k/r):D<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(D),i=B/o,r=k/o),this.set(i,r,o,t),this}let w=Math.sqrt((b-_)*(b-_)+(y-T)*(y-T)+(v-m)*(v-m));return Math.abs(w)<.001&&(w=1),this.x=(b-_)/w,this.y=(y-T)/w,this.z=(v-m)/w,this.w=Math.acos((h+x+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class en extends Lo{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Wn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ui,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ux(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kx extends Wn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jw extends Wn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ao{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,l,a){let d=i[r+0],h=i[r+1],m=i[r+2],y=i[r+3];const v=o[l+0],x=o[l+1],_=o[l+2],T=o[l+3];if(a===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=y;return}if(a===1){e[t+0]=v,e[t+1]=x,e[t+2]=_,e[t+3]=T;return}if(y!==T||d!==v||h!==x||m!==_){let b=1-a;const p=d*v+h*x+m*_+y*T,w=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const D=Math.sqrt(E),N=Math.atan2(D,p*w);b=Math.sin(b*N)/D,a=Math.sin(a*N)/D}const A=a*w;if(d=d*b+v*A,h=h*b+x*A,m=m*b+_*A,y=y*b+T*A,b===1-a){const D=1/Math.sqrt(d*d+h*h+m*m+y*y);d*=D,h*=D,m*=D,y*=D}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=y}static multiplyQuaternionsFlat(e,t,i,r,o,l){const a=i[r],d=i[r+1],h=i[r+2],m=i[r+3],y=o[l],v=o[l+1],x=o[l+2],_=o[l+3];return e[t]=a*_+m*y+d*x-h*v,e[t+1]=d*_+m*v+h*y-a*x,e[t+2]=h*_+m*x+a*v-d*y,e[t+3]=m*_-a*y-d*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,o=e._z,l=e._order,a=Math.cos,d=Math.sin,h=a(i/2),m=a(r/2),y=a(o/2),v=d(i/2),x=d(r/2),_=d(o/2);switch(l){case"XYZ":this._x=v*m*y+h*x*_,this._y=h*x*y-v*m*_,this._z=h*m*_+v*x*y,this._w=h*m*y-v*x*_;break;case"YXZ":this._x=v*m*y+h*x*_,this._y=h*x*y-v*m*_,this._z=h*m*_-v*x*y,this._w=h*m*y+v*x*_;break;case"ZXY":this._x=v*m*y-h*x*_,this._y=h*x*y+v*m*_,this._z=h*m*_+v*x*y,this._w=h*m*y-v*x*_;break;case"ZYX":this._x=v*m*y-h*x*_,this._y=h*x*y+v*m*_,this._z=h*m*_-v*x*y,this._w=h*m*y+v*x*_;break;case"YZX":this._x=v*m*y+h*x*_,this._y=h*x*y+v*m*_,this._z=h*m*_-v*x*y,this._w=h*m*y-v*x*_;break;case"XZY":this._x=v*m*y-h*x*_,this._y=h*x*y-v*m*_,this._z=h*m*_+v*x*y,this._w=h*m*y+v*x*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],l=t[1],a=t[5],d=t[9],h=t[2],m=t[6],y=t[10],v=i+a+y;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-d)*x,this._y=(o-h)*x,this._z=(l-r)*x}else if(i>a&&i>y){const x=2*Math.sqrt(1+i-a-y);this._w=(m-d)/x,this._x=.25*x,this._y=(r+l)/x,this._z=(o+h)/x}else if(a>y){const x=2*Math.sqrt(1+a-i-y);this._w=(o-h)/x,this._x=(r+l)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+y-i-a);this._w=(l-r)/x,this._x=(o+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,l=e._w,a=t._x,d=t._y,h=t._z,m=t._w;return this._x=i*m+l*a+r*h-o*d,this._y=r*m+l*d+o*a-i*h,this._z=o*m+l*h+i*d-r*a,this._w=l*m-i*a-r*d-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,l=this._w;let a=l*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=l,this._x=i,this._y=r,this._z=o,this;const d=1-a*a;if(d<=Number.EPSILON){const x=1-t;return this._w=x*l+t*this._w,this._x=x*i+t*this._x,this._y=x*r+t*this._y,this._z=x*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),m=Math.atan2(h,a),y=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=l*y+this._w*v,this._x=i*y+this._x*v,this._y=r*y+this._y*v,this._z=o*y+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,l=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,l=e.y,a=e.z,d=e.w,h=d*t+l*r-a*i,m=d*i+a*t-o*r,y=d*r+o*i-l*t,v=-o*t-l*i-a*r;return this.x=h*d+v*-o+m*-a-y*-l,this.y=m*d+v*-l+y*-o-h*-a,this.z=y*d+v*-a+h*-l-m*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,l=t.x,a=t.y,d=t.z;return this.x=r*d-o*a,this.y=o*l-i*d,this.z=i*a-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ud=new X,xv=new Ao;class wl{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox),Xo.applyMatrix4(e.matrixWorld),this.union(Xo);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let l=0,a=o.count;l<a;l++)Yi.fromBufferAttribute(o,l).applyMatrix4(e.matrixWorld),this.expandByPoint(Yi)}else r.boundingBox===null&&r.computeBoundingBox(),Xo.copy(r.boundingBox),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),mu.subVectors(this.max,Ma),qo.subVectors(e.a,Ma),Yo.subVectors(e.b,Ma),$o.subVectors(e.c,Ma),yr.subVectors(Yo,qo),xr.subVectors($o,Yo),io.subVectors(qo,$o);let t=[0,-yr.z,yr.y,0,-xr.z,xr.y,0,-io.z,io.y,yr.z,0,-yr.x,xr.z,0,-xr.x,io.z,0,-io.x,-yr.y,yr.x,0,-xr.y,xr.x,0,-io.y,io.x,0];return!cd(t,qo,Yo,$o,mu)||(t=[1,0,0,0,1,0,0,0,1],!cd(t,qo,Yo,$o,mu))?!1:(gu.crossVectors(yr,xr),t=[gu.x,gu.y,gu.z],cd(t,qo,Yo,$o,mu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qi=[new X,new X,new X,new X,new X,new X,new X,new X],Yi=new X,Xo=new wl,qo=new X,Yo=new X,$o=new X,yr=new X,xr=new X,io=new X,Ma=new X,mu=new X,gu=new X,ro=new X;function cd(n,e,t,i,r){for(let o=0,l=n.length-3;o<=l;o+=3){ro.fromArray(n,o);const a=r.x*Math.abs(ro.x)+r.y*Math.abs(ro.y)+r.z*Math.abs(ro.z),d=e.dot(ro),h=t.dot(ro),m=i.dot(ro);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>a)return!1}return!0}const eb=new wl,wa=new X,fd=new X;class kp{constructor(e=new X,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):eb.setFromPoints(e).getCenter(i);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);const t=wa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(wa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(fd)),this.expandByPoint(wa.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new X,dd=new X,vu=new X,_r=new X,hd=new X,yu=new X,pd=new X;class tb{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){dd.copy(e).add(t).multiplyScalar(.5),vu.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(dd);const o=e.distanceTo(t)*.5,l=-this.direction.dot(vu),a=_r.dot(this.direction),d=-_r.dot(vu),h=_r.lengthSq(),m=Math.abs(1-l*l);let y,v,x,_;if(m>0)if(y=l*d-a,v=l*a-d,_=o*m,y>=0)if(v>=-_)if(v<=_){const T=1/m;y*=T,v*=T,x=y*(y+l*v+2*a)+v*(l*y+v+2*d)+h}else v=o,y=Math.max(0,-(l*v+a)),x=-y*y+v*(v+2*d)+h;else v=-o,y=Math.max(0,-(l*v+a)),x=-y*y+v*(v+2*d)+h;else v<=-_?(y=Math.max(0,-(-l*o+a)),v=y>0?-o:Math.min(Math.max(-o,-d),o),x=-y*y+v*(v+2*d)+h):v<=_?(y=0,v=Math.min(Math.max(-o,-d),o),x=v*(v+2*d)+h):(y=Math.max(0,-(l*o+a)),v=y>0?o:Math.min(Math.max(-o,-d),o),x=-y*y+v*(v+2*d)+h);else v=l>0?-o:o,y=Math.max(0,-(l*v+a)),x=-y*y+v*(v+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,y),r&&r.copy(dd).addScaledVector(vu,v),x}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const i=$i.dot(this.direction),r=$i.dot($i)-i*i,o=e.radius*e.radius;if(r>o)return null;const l=Math.sqrt(o-r),a=i-l,d=i+l;return d<0?null:a<0?this.at(d,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,l,a,d;const h=1/this.direction.x,m=1/this.direction.y,y=1/this.direction.z,v=this.origin;return h>=0?(i=(e.min.x-v.x)*h,r=(e.max.x-v.x)*h):(i=(e.max.x-v.x)*h,r=(e.min.x-v.x)*h),m>=0?(o=(e.min.y-v.y)*m,l=(e.max.y-v.y)*m):(o=(e.max.y-v.y)*m,l=(e.min.y-v.y)*m),i>l||o>r||((o>i||isNaN(i))&&(i=o),(l<r||isNaN(r))&&(r=l),y>=0?(a=(e.min.z-v.z)*y,d=(e.max.z-v.z)*y):(a=(e.max.z-v.z)*y,d=(e.min.z-v.z)*y),i>d||a>r)||((a>i||i!==i)&&(i=a),(d<r||r!==r)&&(r=d),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,i,r,o){hd.subVectors(t,e),yu.subVectors(i,e),pd.crossVectors(hd,yu);let l=this.direction.dot(pd),a;if(l>0){if(r)return null;a=1}else if(l<0)a=-1,l=-l;else return null;_r.subVectors(this.origin,e);const d=a*this.direction.dot(yu.crossVectors(_r,yu));if(d<0)return null;const h=a*this.direction.dot(hd.cross(_r));if(h<0||d+h>l)return null;const m=-a*_r.dot(pd);return m<0?null:this.at(m/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,o,l,a,d,h,m,y,v,x,_,T,b){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=o,p[5]=l,p[9]=a,p[13]=d,p[2]=h,p[6]=m,p[10]=y,p[14]=v,p[3]=x,p[7]=_,p[11]=T,p[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ko.setFromMatrixColumn(e,0).length(),o=1/Ko.setFromMatrixColumn(e,1).length(),l=1/Ko.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*l,t[9]=i[9]*l,t[10]=i[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,l=Math.cos(i),a=Math.sin(i),d=Math.cos(r),h=Math.sin(r),m=Math.cos(o),y=Math.sin(o);if(e.order==="XYZ"){const v=l*m,x=l*y,_=a*m,T=a*y;t[0]=d*m,t[4]=-d*y,t[8]=h,t[1]=x+_*h,t[5]=v-T*h,t[9]=-a*d,t[2]=T-v*h,t[6]=_+x*h,t[10]=l*d}else if(e.order==="YXZ"){const v=d*m,x=d*y,_=h*m,T=h*y;t[0]=v+T*a,t[4]=_*a-x,t[8]=l*h,t[1]=l*y,t[5]=l*m,t[9]=-a,t[2]=x*a-_,t[6]=T+v*a,t[10]=l*d}else if(e.order==="ZXY"){const v=d*m,x=d*y,_=h*m,T=h*y;t[0]=v-T*a,t[4]=-l*y,t[8]=_+x*a,t[1]=x+_*a,t[5]=l*m,t[9]=T-v*a,t[2]=-l*h,t[6]=a,t[10]=l*d}else if(e.order==="ZYX"){const v=l*m,x=l*y,_=a*m,T=a*y;t[0]=d*m,t[4]=_*h-x,t[8]=v*h+T,t[1]=d*y,t[5]=T*h+v,t[9]=x*h-_,t[2]=-h,t[6]=a*d,t[10]=l*d}else if(e.order==="YZX"){const v=l*d,x=l*h,_=a*d,T=a*h;t[0]=d*m,t[4]=T-v*y,t[8]=_*y+x,t[1]=y,t[5]=l*m,t[9]=-a*m,t[2]=-h*m,t[6]=x*y+_,t[10]=v-T*y}else if(e.order==="XZY"){const v=l*d,x=l*h,_=a*d,T=a*h;t[0]=d*m,t[4]=-y,t[8]=h*m,t[1]=v*y+T,t[5]=l*m,t[9]=x*y-_,t[2]=_*y-x,t[6]=a*m,t[10]=T*y+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nb,e,ib)}lookAt(e,t,i){const r=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Sr.crossVectors(i,Yn),Sr.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Sr.crossVectors(i,Yn)),Sr.normalize(),xu.crossVectors(Yn,Sr),r[0]=Sr.x,r[4]=xu.x,r[8]=Yn.x,r[1]=Sr.y,r[5]=xu.y,r[9]=Yn.y,r[2]=Sr.z,r[6]=xu.z,r[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,l=i[0],a=i[4],d=i[8],h=i[12],m=i[1],y=i[5],v=i[9],x=i[13],_=i[2],T=i[6],b=i[10],p=i[14],w=i[3],E=i[7],A=i[11],D=i[15],N=r[0],B=r[4],k=r[8],R=r[12],O=r[1],se=r[5],ue=r[9],Y=r[13],Z=r[2],W=r[6],fe=r[10],me=r[14],j=r[3],J=r[7],re=r[11],Te=r[15];return o[0]=l*N+a*O+d*Z+h*j,o[4]=l*B+a*se+d*W+h*J,o[8]=l*k+a*ue+d*fe+h*re,o[12]=l*R+a*Y+d*me+h*Te,o[1]=m*N+y*O+v*Z+x*j,o[5]=m*B+y*se+v*W+x*J,o[9]=m*k+y*ue+v*fe+x*re,o[13]=m*R+y*Y+v*me+x*Te,o[2]=_*N+T*O+b*Z+p*j,o[6]=_*B+T*se+b*W+p*J,o[10]=_*k+T*ue+b*fe+p*re,o[14]=_*R+T*Y+b*me+p*Te,o[3]=w*N+E*O+A*Z+D*j,o[7]=w*B+E*se+A*W+D*J,o[11]=w*k+E*ue+A*fe+D*re,o[15]=w*R+E*Y+A*me+D*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],l=e[1],a=e[5],d=e[9],h=e[13],m=e[2],y=e[6],v=e[10],x=e[14],_=e[3],T=e[7],b=e[11],p=e[15];return _*(+o*d*y-r*h*y-o*a*v+i*h*v+r*a*x-i*d*x)+T*(+t*d*x-t*h*v+o*l*v-r*l*x+r*h*m-o*d*m)+b*(+t*h*y-t*a*x-o*l*y+i*l*x+o*a*m-i*h*m)+p*(-r*a*m-t*d*y+t*a*v+r*l*y-i*l*v+i*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],h=e[7],m=e[8],y=e[9],v=e[10],x=e[11],_=e[12],T=e[13],b=e[14],p=e[15],w=y*b*h-T*v*h+T*d*x-a*b*x-y*d*p+a*v*p,E=_*v*h-m*b*h-_*d*x+l*b*x+m*d*p-l*v*p,A=m*T*h-_*y*h+_*a*x-l*T*x-m*a*p+l*y*p,D=_*y*d-m*T*d-_*a*v+l*T*v+m*a*b-l*y*b,N=t*w+i*E+r*A+o*D;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return e[0]=w*B,e[1]=(T*v*o-y*b*o-T*r*x+i*b*x+y*r*p-i*v*p)*B,e[2]=(a*b*o-T*d*o+T*r*h-i*b*h-a*r*p+i*d*p)*B,e[3]=(y*d*o-a*v*o-y*r*h+i*v*h+a*r*x-i*d*x)*B,e[4]=E*B,e[5]=(m*b*o-_*v*o+_*r*x-t*b*x-m*r*p+t*v*p)*B,e[6]=(_*d*o-l*b*o-_*r*h+t*b*h+l*r*p-t*d*p)*B,e[7]=(l*v*o-m*d*o+m*r*h-t*v*h-l*r*x+t*d*x)*B,e[8]=A*B,e[9]=(_*y*o-m*T*o-_*i*x+t*T*x+m*i*p-t*y*p)*B,e[10]=(l*T*o-_*a*o+_*i*h-t*T*h-l*i*p+t*a*p)*B,e[11]=(m*a*o-l*y*o-m*i*h+t*y*h+l*i*x-t*a*x)*B,e[12]=D*B,e[13]=(m*T*r-_*y*r+_*i*v-t*T*v-m*i*b+t*y*b)*B,e[14]=(_*a*r-l*T*r-_*i*d+t*T*d+l*i*b-t*a*b)*B,e[15]=(l*y*r-m*a*r+m*i*d-t*y*d-l*i*v+t*a*v)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,l=e.x,a=e.y,d=e.z,h=o*l,m=o*a;return this.set(h*l+i,h*a-r*d,h*d+r*a,0,h*a+r*d,m*a+i,m*d-r*l,0,h*d-r*a,m*d+r*l,o*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,l){return this.set(1,i,o,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,l=t._y,a=t._z,d=t._w,h=o+o,m=l+l,y=a+a,v=o*h,x=o*m,_=o*y,T=l*m,b=l*y,p=a*y,w=d*h,E=d*m,A=d*y,D=i.x,N=i.y,B=i.z;return r[0]=(1-(T+p))*D,r[1]=(x+A)*D,r[2]=(_-E)*D,r[3]=0,r[4]=(x-A)*N,r[5]=(1-(v+p))*N,r[6]=(b+w)*N,r[7]=0,r[8]=(_+E)*B,r[9]=(b-w)*B,r[10]=(1-(v+T))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=Ko.set(r[0],r[1],r[2]).length();const l=Ko.set(r[4],r[5],r[6]).length(),a=Ko.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],vi.copy(this);const h=1/o,m=1/l,y=1/a;return vi.elements[0]*=h,vi.elements[1]*=h,vi.elements[2]*=h,vi.elements[4]*=m,vi.elements[5]*=m,vi.elements[6]*=m,vi.elements[8]*=y,vi.elements[9]*=y,vi.elements[10]*=y,t.setFromRotationMatrix(vi),i.x=o,i.y=l,i.z=a,this}makePerspective(e,t,i,r,o,l){const a=this.elements,d=2*o/(t-e),h=2*o/(i-r),m=(t+e)/(t-e),y=(i+r)/(i-r),v=-(l+o)/(l-o),x=-2*l*o/(l-o);return a[0]=d,a[4]=0,a[8]=m,a[12]=0,a[1]=0,a[5]=h,a[9]=y,a[13]=0,a[2]=0,a[6]=0,a[10]=v,a[14]=x,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,o,l){const a=this.elements,d=1/(t-e),h=1/(i-r),m=1/(l-o),y=(t+e)*d,v=(i+r)*h,x=(l+o)*m;return a[0]=2*d,a[4]=0,a[8]=0,a[12]=-y,a[1]=0,a[5]=2*h,a[9]=0,a[13]=-v,a[2]=0,a[6]=0,a[10]=-2*m,a[14]=-x,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ko=new X,vi=new Gt,nb=new X(0,0,0),ib=new X(1,1,1),Sr=new X,xu=new X,Yn=new X,_v=new Gt,Sv=new Ao;class Wc{constructor(e=0,t=0,i=0,r=Wc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],l=r[4],a=r[8],d=r[1],h=r[5],m=r[9],y=r[2],v=r[6],x=r[10];switch(t){case"XYZ":this._y=Math.asin(wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-y,o),this._z=0);break;case"ZXY":this._x=Math.asin(wn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-y,x),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-wn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-y,o)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _v.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_v,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sv.setFromEuler(this),this.setFromQuaternion(Sv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wc.DEFAULT_ORDER="XYZ";class Nx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rb=0;const Mv=new X,Zo=new Ao,Ki=new Gt,_u=new X,ba=new X,ob=new X,sb=new Ao,wv=new X(1,0,0),bv=new X(0,1,0),Ev=new X(0,0,1),ab={type:"added"},Tv={type:"removed"};class tn extends Lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new X,t=new Wc,i=new Ao,r=new X(1,1,1);function o(){i.setFromEuler(t,!1)}function l(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ct}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Nx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.multiply(Zo),this}rotateOnWorldAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.premultiply(Zo),this}rotateX(e){return this.rotateOnAxis(wv,e)}rotateY(e){return this.rotateOnAxis(bv,e)}rotateZ(e){return this.rotateOnAxis(Ev,e)}translateOnAxis(e,t){return Mv.copy(e).applyQuaternion(this.quaternion),this.position.add(Mv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wv,e)}translateY(e){return this.translateOnAxis(bv,e)}translateZ(e){return this.translateOnAxis(Ev,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_u.copy(e):_u.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(ba,_u,this.up):Ki.lookAt(_u,ba,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),Zo.setFromRotationMatrix(Ki),this.quaternion.premultiply(Zo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ab)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Tv)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const l=this.children[r].getObjectsByProperty(e,t);l.length>0&&(i=i.concat(l))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,ob),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,sb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,d){return a[d.uuid]===void 0&&(a[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const d=a.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const y=d[h];o(e.shapes,y)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let d=0,h=this.material.length;d<h;d++)a.push(o(e.materials,this.material[d]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const d=this.animations[a];r.animations.push(o(e.animations,d))}}if(t){const a=l(e.geometries),d=l(e.materials),h=l(e.textures),m=l(e.images),y=l(e.shapes),v=l(e.skeletons),x=l(e.animations),_=l(e.nodes);a.length>0&&(i.geometries=a),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),y.length>0&&(i.shapes=y),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),_.length>0&&(i.nodes=_)}return i.object=r,i;function l(a){const d=[];for(const h in a){const m=a[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new X(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new X,Zi=new X,md=new X,Qi=new X,Qo=new X,Jo=new X,Cv=new X,gd=new X,vd=new X,yd=new X;let Su=!1;class wi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yi.subVectors(e,t),r.cross(yi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){yi.subVectors(r,t),Zi.subVectors(i,t),md.subVectors(e,t);const l=yi.dot(yi),a=yi.dot(Zi),d=yi.dot(md),h=Zi.dot(Zi),m=Zi.dot(md),y=l*h-a*a;if(y===0)return o.set(-2,-1,-1);const v=1/y,x=(h*d-a*m)*v,_=(l*m-a*d)*v;return o.set(1-x-_,_,x)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qi),Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getUV(e,t,i,r,o,l,a,d){return Su===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Su=!0),this.getInterpolation(e,t,i,r,o,l,a,d)}static getInterpolation(e,t,i,r,o,l,a,d){return this.getBarycoord(e,t,i,r,Qi),d.setScalar(0),d.addScaledVector(o,Qi.x),d.addScaledVector(l,Qi.y),d.addScaledVector(a,Qi.z),d}static isFrontFacing(e,t,i,r){return yi.subVectors(i,t),Zi.subVectors(e,t),yi.cross(Zi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),yi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return Su===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Su=!0),wi.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}getInterpolation(e,t,i,r,o){return wi.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let l,a;Qo.subVectors(r,i),Jo.subVectors(o,i),gd.subVectors(e,i);const d=Qo.dot(gd),h=Jo.dot(gd);if(d<=0&&h<=0)return t.copy(i);vd.subVectors(e,r);const m=Qo.dot(vd),y=Jo.dot(vd);if(m>=0&&y<=m)return t.copy(r);const v=d*y-m*h;if(v<=0&&d>=0&&m<=0)return l=d/(d-m),t.copy(i).addScaledVector(Qo,l);yd.subVectors(e,o);const x=Qo.dot(yd),_=Jo.dot(yd);if(_>=0&&x<=_)return t.copy(o);const T=x*h-d*_;if(T<=0&&h>=0&&_<=0)return a=h/(h-_),t.copy(i).addScaledVector(Jo,a);const b=m*_-x*y;if(b<=0&&y-m>=0&&x-_>=0)return Cv.subVectors(o,r),a=(y-m)/(y-m+(x-_)),t.copy(r).addScaledVector(Cv,a);const p=1/(b+T+v);return l=T*p,a=v*p,t.copy(i).addScaledVector(Qo,l).addScaledVector(Jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let lb=0;class Xr extends Lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=As,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Tx,this.blendDst=Cx,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Rh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=id,this.stencilZFail=id,this.stencilZPass=id,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==Vr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const l=[];for(const a in o){const d=o[a];delete d.metadata,l.push(d)}return l}if(t){const o=r(e.textures),l=r(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Mu={h:0,s:0,l:0};function xd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=qn.workingColorSpace){return this.r=e,this.g=t,this.b=i,qn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=qn.workingColorSpace){if(e=Ww(e,1),t=wn(t,0,1),i=wn(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,l=2*i-o;this.r=xd(l,o,e+1/3),this.g=xd(l,o,e),this.b=xd(l,o,e-1/3)}return qn.toWorkingColorSpace(this,r),this}setStyle(e,t=Ni){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=r[1],a=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,qn.toWorkingColorSpace(this,t),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,qn.toWorkingColorSpace(this,t),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const d=parseFloat(o[1])/360,h=parseFloat(o[2])/100,m=parseFloat(o[3])/100;return i(o[4]),this.setHSL(d,h,m,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ni){const i=zx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}copyLinearToSRGB(e){return this.r=ad(e.r),this.g=ad(e.g),this.b=ad(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ni){return qn.fromWorkingColorSpace(Sn.copy(this),e),wn(Sn.r*255,0,255)<<16^wn(Sn.g*255,0,255)<<8^wn(Sn.b*255,0,255)<<0}getHexString(e=Ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qn.workingColorSpace){qn.fromWorkingColorSpace(Sn.copy(this),t);const i=Sn.r,r=Sn.g,o=Sn.b,l=Math.max(i,r,o),a=Math.min(i,r,o);let d,h;const m=(a+l)/2;if(a===l)d=0,h=0;else{const y=l-a;switch(h=m<=.5?y/(l+a):y/(2-l-a),l){case i:d=(r-o)/y+(r<o?6:0);break;case r:d=(o-i)/y+2;break;case o:d=(i-r)/y+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=qn.workingColorSpace){return qn.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Ni){qn.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,i=Sn.g,r=Sn.b;return e!==Ni?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(xi),xi.h+=e,xi.s+=t,xi.l+=i,this.setHSL(xi.h,xi.s,xi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Mu);const i=od(xi.h,Mu.h,t),r=od(xi.s,Mu.s,t),o=od(xi.l,Mu.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Ze;Ze.NAMES=zx;class _o extends Xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new X,wu=new Ue;class Pi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gv,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wu.fromBufferAttribute(this,t),wu.applyMatrix3(e),this.setXY(t,wu.x,wu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pu(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pu(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pu(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pu(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array),o=Xn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gv&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Fx extends Pi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bx extends Pi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ln extends Pi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ub=0;const si=new Gt,_d=new tn,es=new X,$n=new wl,Ea=new wl,ln=new X;class Di extends Lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ix(e)?Bx:Fx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ct().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,i){return si.makeTranslation(e,t,i),this.applyMatrix4(si),this}scale(e,t,i){return si.makeScale(e,t,i),this.applyMatrix4(si),this}lookAt(e){return _d.lookAt(e),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];$n.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const a=t[o];Ea.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors($n.min,Ea.min),$n.expandByPoint(ln),ln.addVectors($n.max,Ea.max),$n.expandByPoint(ln)):($n.expandByPoint(Ea.min),$n.expandByPoint(Ea.max))}$n.getCenter(i);let r=0;for(let o=0,l=e.count;o<l;o++)ln.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(ln));if(t)for(let o=0,l=t.length;o<l;o++){const a=t[o],d=this.morphTargetsRelative;for(let h=0,m=a.count;h<m;h++)ln.fromBufferAttribute(a,h),d&&(es.fromBufferAttribute(e,h),ln.add(es)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,l=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*a),4));const d=this.getAttribute("tangent").array,h=[],m=[];for(let O=0;O<a;O++)h[O]=new X,m[O]=new X;const y=new X,v=new X,x=new X,_=new Ue,T=new Ue,b=new Ue,p=new X,w=new X;function E(O,se,ue){y.fromArray(r,O*3),v.fromArray(r,se*3),x.fromArray(r,ue*3),_.fromArray(l,O*2),T.fromArray(l,se*2),b.fromArray(l,ue*2),v.sub(y),x.sub(y),T.sub(_),b.sub(_);const Y=1/(T.x*b.y-b.x*T.y);isFinite(Y)&&(p.copy(v).multiplyScalar(b.y).addScaledVector(x,-T.y).multiplyScalar(Y),w.copy(x).multiplyScalar(T.x).addScaledVector(v,-b.x).multiplyScalar(Y),h[O].add(p),h[se].add(p),h[ue].add(p),m[O].add(w),m[se].add(w),m[ue].add(w))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let O=0,se=A.length;O<se;++O){const ue=A[O],Y=ue.start,Z=ue.count;for(let W=Y,fe=Y+Z;W<fe;W+=3)E(i[W+0],i[W+1],i[W+2])}const D=new X,N=new X,B=new X,k=new X;function R(O){B.fromArray(o,O*3),k.copy(B);const se=h[O];D.copy(se),D.sub(B.multiplyScalar(B.dot(se))).normalize(),N.crossVectors(k,se);const Y=N.dot(m[O])<0?-1:1;d[O*4]=D.x,d[O*4+1]=D.y,d[O*4+2]=D.z,d[O*4+3]=Y}for(let O=0,se=A.length;O<se;++O){const ue=A[O],Y=ue.start,Z=ue.count;for(let W=Y,fe=Y+Z;W<fe;W+=3)R(i[W+0]),R(i[W+1]),R(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const r=new X,o=new X,l=new X,a=new X,d=new X,h=new X,m=new X,y=new X;if(e)for(let v=0,x=e.count;v<x;v+=3){const _=e.getX(v+0),T=e.getX(v+1),b=e.getX(v+2);r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,b),m.subVectors(l,o),y.subVectors(r,o),m.cross(y),a.fromBufferAttribute(i,_),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,b),a.add(m),d.add(m),h.add(m),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(T,d.x,d.y,d.z),i.setXYZ(b,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)r.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),l.fromBufferAttribute(t,v+2),m.subVectors(l,o),y.subVectors(r,o),m.cross(y),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,d){const h=a.array,m=a.itemSize,y=a.normalized,v=new h.constructor(d.length*m);let x=0,_=0;for(let T=0,b=d.length;T<b;T++){a.isInterleavedBufferAttribute?x=d[T]*a.data.stride+a.offset:x=d[T]*m;for(let p=0;p<m;p++)v[_++]=h[x++]}return new Pi(v,m,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Di,i=this.index.array,r=this.attributes;for(const a in r){const d=r[a],h=e(d,i);t.setAttribute(a,h)}const o=this.morphAttributes;for(const a in o){const d=[],h=o[a];for(let m=0,y=h.length;m<y;m++){const v=h[m],x=e(v,i);d.push(x)}t.morphAttributes[a]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let a=0,d=l.length;a<d;a++){const h=l[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let y=0,v=h.length;y<v;y++){const x=h[y];m.push(x.toJSON(e.data))}m.length>0&&(r[d]=m,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const h in r){const m=r[h];this.setAttribute(h,m.clone(t))}const o=e.morphAttributes;for(const h in o){const m=[],y=o[h];for(let v=0,x=y.length;v<x;v++)m.push(y[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,m=l.length;h<m;h++){const y=l[h];this.addGroup(y.start,y.count,y.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pv=new Gt,Oi=new tb,bu=new kp,Av=new X,ts=new X,ns=new X,is=new X,Sd=new X,Eu=new X,Tu=new Ue,Cu=new Ue,Pu=new Ue,Dv=new X,Rv=new X,Lv=new X,Au=new X,Du=new X;class Bn extends tn{constructor(e=new Di,t=new _o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Eu.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const m=a[d],y=o[d];m!==0&&(Sd.fromBufferAttribute(y,e),l?Eu.addScaledVector(Sd,m):Eu.addScaledVector(Sd.sub(t),m))}t.add(Eu)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),bu.copy(i.boundingSphere),bu.applyMatrix4(o),Oi.copy(e.ray).recast(e.near),bu.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(bu,Av)===null||Oi.origin.distanceToSquared(Av)>(e.far-e.near)**2))||(Pv.copy(o).invert(),Oi.copy(e.ray).applyMatrix4(Pv),i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1))return;let l;const a=i.index,d=i.attributes.position,h=i.attributes.uv,m=i.attributes.uv2,y=i.attributes.normal,v=i.groups,x=i.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,T=v.length;_<T;_++){const b=v[_],p=r[b.materialIndex],w=Math.max(b.start,x.start),E=Math.min(a.count,Math.min(b.start+b.count,x.start+x.count));for(let A=w,D=E;A<D;A+=3){const N=a.getX(A),B=a.getX(A+1),k=a.getX(A+2);l=Ru(this,p,e,Oi,h,m,y,N,B,k),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=b.materialIndex,t.push(l))}}else{const _=Math.max(0,x.start),T=Math.min(a.count,x.start+x.count);for(let b=_,p=T;b<p;b+=3){const w=a.getX(b),E=a.getX(b+1),A=a.getX(b+2);l=Ru(this,r,e,Oi,h,m,y,w,E,A),l&&(l.faceIndex=Math.floor(b/3),t.push(l))}}else if(d!==void 0)if(Array.isArray(r))for(let _=0,T=v.length;_<T;_++){const b=v[_],p=r[b.materialIndex],w=Math.max(b.start,x.start),E=Math.min(d.count,Math.min(b.start+b.count,x.start+x.count));for(let A=w,D=E;A<D;A+=3){const N=A,B=A+1,k=A+2;l=Ru(this,p,e,Oi,h,m,y,N,B,k),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=b.materialIndex,t.push(l))}}else{const _=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let b=_,p=T;b<p;b+=3){const w=b,E=b+1,A=b+2;l=Ru(this,r,e,Oi,h,m,y,w,E,A),l&&(l.faceIndex=Math.floor(b/3),t.push(l))}}}}function cb(n,e,t,i,r,o,l,a){let d;if(e.side===Rn?d=i.intersectTriangle(l,o,r,!0,a):d=i.intersectTriangle(r,o,l,e.side===Vr,a),d===null)return null;Du.copy(a),Du.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Du);return h<t.near||h>t.far?null:{distance:h,point:Du.clone(),object:n}}function Ru(n,e,t,i,r,o,l,a,d,h){n.getVertexPosition(a,ts),n.getVertexPosition(d,ns),n.getVertexPosition(h,is);const m=cb(n,e,t,i,ts,ns,is,Au);if(m){r&&(Tu.fromBufferAttribute(r,a),Cu.fromBufferAttribute(r,d),Pu.fromBufferAttribute(r,h),m.uv=wi.getInterpolation(Au,ts,ns,is,Tu,Cu,Pu,new Ue)),o&&(Tu.fromBufferAttribute(o,a),Cu.fromBufferAttribute(o,d),Pu.fromBufferAttribute(o,h),m.uv2=wi.getInterpolation(Au,ts,ns,is,Tu,Cu,Pu,new Ue)),l&&(Dv.fromBufferAttribute(l,a),Rv.fromBufferAttribute(l,d),Lv.fromBufferAttribute(l,h),m.normal=wi.getInterpolation(Au,ts,ns,is,Dv,Rv,Lv,new X),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const y={a,b:d,c:h,normal:new X,materialIndex:0};wi.getNormal(ts,ns,is,y.normal),m.face=y}return m}class bl extends Di{constructor(e=1,t=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};const a=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const d=[],h=[],m=[],y=[];let v=0,x=0;_("z","y","x",-1,-1,i,t,e,l,o,0),_("z","y","x",1,-1,i,t,-e,l,o,1),_("x","z","y",1,1,e,i,t,r,l,2),_("x","z","y",1,-1,e,i,-t,r,l,3),_("x","y","z",1,-1,e,t,i,r,o,4),_("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(d),this.setAttribute("position",new Ln(h,3)),this.setAttribute("normal",new Ln(m,3)),this.setAttribute("uv",new Ln(y,2));function _(T,b,p,w,E,A,D,N,B,k,R){const O=A/B,se=D/k,ue=A/2,Y=D/2,Z=N/2,W=B+1,fe=k+1;let me=0,j=0;const J=new X;for(let re=0;re<fe;re++){const Te=re*se-Y;for(let ge=0;ge<W;ge++){const oe=ge*O-ue;J[T]=oe*w,J[b]=Te*E,J[p]=Z,h.push(J.x,J.y,J.z),J[T]=0,J[b]=0,J[p]=N>0?1:-1,m.push(J.x,J.y,J.z),y.push(ge/B),y.push(1-re/k),me+=1}}for(let re=0;re<k;re++)for(let Te=0;Te<B;Te++){const ge=v+Te+W*re,oe=v+Te+W*(re+1),q=v+(Te+1)+W*(re+1),we=v+(Te+1)+W*re;d.push(ge,oe,we),d.push(oe,q,we),j+=6}a.addGroup(x,j,R),x+=j,v+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pn(n){const e={};for(let t=0;t<n.length;t++){const i=Hs(n[t]);for(const r in i)e[r]=i[r]}return e}function fb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vx(n){return n.getRenderTarget()===null&&n.outputEncoding===bt?Ni:cl}const zn={clone:Hs,merge:Pn};var db=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lt extends Xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=db,this.fragmentShader=hb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=fb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gx extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nn extends Gx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wc*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rd*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,h=l.fullHeight;o+=l.offsetX*r/d,t-=l.offsetY*i/h,r*=l.width/d,i*=l.height/h}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,os=1;class pb extends tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Nn(rs,os,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const o=new Nn(rs,os,e,t);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const l=new Nn(rs,os,e,t);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(0,1,0),this.add(l);const a=new Nn(rs,os,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const d=new Nn(rs,os,e,t);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,1),this.add(d);const h=new Nn(rs,os,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,l,a,d,h]=this.children,m=e.getRenderTarget(),y=e.toneMapping,v=e.xr.enabled;e.toneMapping=Gi,e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,o),e.setRenderTarget(i,2),e.render(t,l),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,d),i.texture.generateMipmaps=x,e.setRenderTarget(i,5),e.render(t,h),e.setRenderTarget(m),e.toneMapping=y,e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Hx extends Wn{constructor(e,t,i,r,o,l,a,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,i,r,o,l,a,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mb extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hx(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ui}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bl(5,5,5),o=new Lt({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:un});o.uniforms.tEquirect.value=t;const l=new Bn(r,o),a=t.minFilter;return t.minFilter===ll&&(t.minFilter=ui),new pb(1,10,this).update(e,l),t.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,i,r);e.setRenderTarget(o)}}const Md=new X,gb=new X,vb=new ct;class lo{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Md.subVectors(i,t).cross(gb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Md),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vb.getNormalMatrix(e),r=this.coplanarPoint(Md).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oo=new kp,Lu=new X;class Np{constructor(e=new lo,t=new lo,i=new lo,r=new lo,o=new lo,l=new lo){this.planes=[e,t,i,r,o,l]}set(e,t,i,r,o,l){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(l),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],o=i[1],l=i[2],a=i[3],d=i[4],h=i[5],m=i[6],y=i[7],v=i[8],x=i[9],_=i[10],T=i[11],b=i[12],p=i[13],w=i[14],E=i[15];return t[0].setComponents(a-r,y-d,T-v,E-b).normalize(),t[1].setComponents(a+r,y+d,T+v,E+b).normalize(),t[2].setComponents(a+o,y+h,T+x,E+p).normalize(),t[3].setComponents(a-o,y-h,T-x,E-p).normalize(),t[4].setComponents(a-l,y-m,T-_,E-w).normalize(),t[5].setComponents(a+l,y+m,T+_,E+w).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oo)}intersectsSprite(e){return oo.center.set(0,0,0),oo.radius=.7071067811865476,oo.applyMatrix4(e.matrixWorld),this.intersectsSphere(oo)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Lu.x=r.normal.x>0?e.max.x:e.min.x,Lu.y=r.normal.y>0?e.max.y:e.min.y,Lu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wx(){let n=null,e=!1,t=null,i=null;function r(o,l){t(o,l),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function yb(n,e){const t=e.isWebGL2,i=new WeakMap;function r(h,m){const y=h.array,v=h.usage,x=n.createBuffer();n.bindBuffer(m,x),n.bufferData(m,y,v),h.onUploadCallback();let _;if(y instanceof Float32Array)_=5126;else if(y instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(y instanceof Int16Array)_=5122;else if(y instanceof Uint32Array)_=5125;else if(y instanceof Int32Array)_=5124;else if(y instanceof Int8Array)_=5120;else if(y instanceof Uint8Array)_=5121;else if(y instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:x,type:_,bytesPerElement:y.BYTES_PER_ELEMENT,version:h.version}}function o(h,m,y){const v=m.array,x=m.updateRange;n.bindBuffer(y,h),x.count===-1?n.bufferSubData(y,0,v):(t?n.bufferSubData(y,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):n.bufferSubData(y,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=i.get(h);m&&(n.deleteBuffer(m.buffer),i.delete(h))}function d(h,m){if(h.isGLBufferAttribute){const v=i.get(h);(!v||v.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const y=i.get(h);y===void 0?i.set(h,r(h,m)):y.version<h.version&&(o(y.buffer,h,m),y.version=h.version)}return{get:l,remove:a,update:d}}class El extends Di{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,l=t/2,a=Math.floor(i),d=Math.floor(r),h=a+1,m=d+1,y=e/a,v=t/d,x=[],_=[],T=[],b=[];for(let p=0;p<m;p++){const w=p*v-l;for(let E=0;E<h;E++){const A=E*y-o;_.push(A,-w,0),T.push(0,0,1),b.push(E/a),b.push(1-p/d)}}for(let p=0;p<d;p++)for(let w=0;w<a;w++){const E=w+h*p,A=w+h*(p+1),D=w+1+h*(p+1),N=w+1+h*p;x.push(E,A,N),x.push(A,D,N)}this.setIndex(x),this.setAttribute("position",new Ln(_,3)),this.setAttribute("normal",new Ln(T,3)),this.setAttribute("uv",new Ln(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.width,e.height,e.widthSegments,e.heightSegments)}}var xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eb="vec3 transformed = vec3( position );",Tb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pb=`#ifdef USE_IRIDESCENCE
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
#endif`,Ab=`#ifdef USE_BUMPMAP
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
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ub=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zb=`#define PI 3.141592653589793
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
} // validated`,Fb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bb=`vec3 transformedNormal = objectNormal;
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
#endif`,Vb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qb=`#ifdef USE_ENVMAP
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
#endif`,Yb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$b=`#ifdef USE_ENVMAP
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
#endif`,Kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nE=`#ifdef USE_GRADIENTMAP
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
}`,iE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aE=`uniform bool receiveShadow;
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
#endif`,lE=`#if defined( USE_ENVMAP )
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
#endif`,uE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hE=`PhysicalMaterial material;
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
#endif`,pE=`struct PhysicalMaterial {
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
}`,mE=`
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
#endif`,gE=`#if defined( RE_IndirectDiffuse )
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
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,yE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,SE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ME=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,EE=`#if defined( USE_POINTS_UV )
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
#endif`,TE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AE=`#ifdef USE_MORPHNORMALS
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
#endif`,DE=`#ifdef USE_MORPHTARGETS
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
#endif`,RE=`#ifdef USE_MORPHTARGETS
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
#endif`,LE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,IE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NE=`#ifdef USE_NORMALMAP
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
#endif`,zE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,FE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$E=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JE=`float getShadowMask() {
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
}`,eT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tT=`#ifdef USE_SKINNING
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
#endif`,nT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iT=`#ifdef USE_SKINNING
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
#endif`,rT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lT=`#ifdef USE_TRANSMISSION
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
#endif`,uT=`#ifdef USE_TRANSMISSION
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
#endif`,cT=`#ifdef USE_UV
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
#endif`,fT=`#ifdef USE_UV
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
#endif`,dT=`#ifdef USE_UV
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
#endif`,hT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mT=`uniform sampler2D t2D;
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_T=`#include <common>
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
}`,ST=`#if DEPTH_PACKING == 3200
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
}`,MT=`#define DISTANCE
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
}`,wT=`#define DISTANCE
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
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ET=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,TT=`uniform float scale;
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
}`,CT=`uniform vec3 diffuse;
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
}`,PT=`#include <common>
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
}`,AT=`uniform vec3 diffuse;
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
}`,DT=`#define LAMBERT
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
}`,RT=`#define LAMBERT
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
}`,LT=`#define MATCAP
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
}`,IT=`#define MATCAP
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
}`,OT=`#define NORMAL
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
}`,UT=`#define NORMAL
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
}`,kT=`#define PHONG
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
}`,NT=`#define PHONG
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
}`,zT=`#define STANDARD
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
}`,FT=`#define STANDARD
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
}`,BT=`#define TOON
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
}`,VT=`#define TOON
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
}`,GT=`uniform float size;
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
}`,HT=`uniform vec3 diffuse;
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
}`,WT=`#include <common>
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
}`,jT=`uniform vec3 color;
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
}`,XT=`uniform float rotation;
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
}`,qT=`uniform vec3 diffuse;
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
}`,ot={alphamap_fragment:xb,alphamap_pars_fragment:_b,alphatest_fragment:Sb,alphatest_pars_fragment:Mb,aomap_fragment:wb,aomap_pars_fragment:bb,begin_vertex:Eb,beginnormal_vertex:Tb,bsdfs:Cb,iridescence_fragment:Pb,bumpmap_pars_fragment:Ab,clipping_planes_fragment:Db,clipping_planes_pars_fragment:Rb,clipping_planes_pars_vertex:Lb,clipping_planes_vertex:Ib,color_fragment:Ob,color_pars_fragment:Ub,color_pars_vertex:kb,color_vertex:Nb,common:zb,cube_uv_reflection_fragment:Fb,defaultnormal_vertex:Bb,displacementmap_pars_vertex:Vb,displacementmap_vertex:Gb,emissivemap_fragment:Hb,emissivemap_pars_fragment:Wb,encodings_fragment:jb,encodings_pars_fragment:Xb,envmap_fragment:qb,envmap_common_pars_fragment:Yb,envmap_pars_fragment:$b,envmap_pars_vertex:Kb,envmap_physical_pars_fragment:lE,envmap_vertex:Zb,fog_vertex:Qb,fog_pars_vertex:Jb,fog_fragment:eE,fog_pars_fragment:tE,gradientmap_pars_fragment:nE,lightmap_fragment:iE,lightmap_pars_fragment:rE,lights_lambert_fragment:oE,lights_lambert_pars_fragment:sE,lights_pars_begin:aE,lights_toon_fragment:uE,lights_toon_pars_fragment:cE,lights_phong_fragment:fE,lights_phong_pars_fragment:dE,lights_physical_fragment:hE,lights_physical_pars_fragment:pE,lights_fragment_begin:mE,lights_fragment_maps:gE,lights_fragment_end:vE,logdepthbuf_fragment:yE,logdepthbuf_pars_fragment:xE,logdepthbuf_pars_vertex:_E,logdepthbuf_vertex:SE,map_fragment:ME,map_pars_fragment:wE,map_particle_fragment:bE,map_particle_pars_fragment:EE,metalnessmap_fragment:TE,metalnessmap_pars_fragment:CE,morphcolor_vertex:PE,morphnormal_vertex:AE,morphtarget_pars_vertex:DE,morphtarget_vertex:RE,normal_fragment_begin:LE,normal_fragment_maps:IE,normal_pars_fragment:OE,normal_pars_vertex:UE,normal_vertex:kE,normalmap_pars_fragment:NE,clearcoat_normal_fragment_begin:zE,clearcoat_normal_fragment_maps:FE,clearcoat_pars_fragment:BE,iridescence_pars_fragment:VE,output_fragment:GE,packing:HE,premultiplied_alpha_fragment:WE,project_vertex:jE,dithering_fragment:XE,dithering_pars_fragment:qE,roughnessmap_fragment:YE,roughnessmap_pars_fragment:$E,shadowmap_pars_fragment:KE,shadowmap_pars_vertex:ZE,shadowmap_vertex:QE,shadowmask_pars_fragment:JE,skinbase_vertex:eT,skinning_pars_vertex:tT,skinning_vertex:nT,skinnormal_vertex:iT,specularmap_fragment:rT,specularmap_pars_fragment:oT,tonemapping_fragment:sT,tonemapping_pars_fragment:aT,transmission_fragment:lT,transmission_pars_fragment:uT,uv_pars_fragment:cT,uv_pars_vertex:fT,uv_vertex:dT,worldpos_vertex:hT,background_vert:pT,background_frag:mT,backgroundCube_vert:gT,backgroundCube_frag:vT,cube_vert:yT,cube_frag:xT,depth_vert:_T,depth_frag:ST,distanceRGBA_vert:MT,distanceRGBA_frag:wT,equirect_vert:bT,equirect_frag:ET,linedashed_vert:TT,linedashed_frag:CT,meshbasic_vert:PT,meshbasic_frag:AT,meshlambert_vert:DT,meshlambert_frag:RT,meshmatcap_vert:LT,meshmatcap_frag:IT,meshnormal_vert:OT,meshnormal_frag:UT,meshphong_vert:kT,meshphong_frag:NT,meshphysical_vert:zT,meshphysical_frag:FT,meshtoon_vert:BT,meshtoon_frag:VT,points_vert:GT,points_frag:HT,shadow_vert:WT,shadow_frag:jT,sprite_vert:XT,sprite_frag:qT},Ae={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaTest:{value:0}}},zi={basic:{uniforms:Pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Pn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Pn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Pn([Ae.points,Ae.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Pn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Pn([Ae.common,Ae.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Pn([Ae.sprite,Ae.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Pn([Ae.common,Ae.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Pn([Ae.lights,Ae.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};zi.physical={uniforms:Pn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Iu={r:0,b:0,g:0};function YT(n,e,t,i,r,o,l){const a=new Ze(0);let d=o===!0?0:1,h,m,y=null,v=0,x=null;function _(b,p){let w=!1,E=p.isScene===!0?p.background:null;E&&E.isTexture&&(E=(p.backgroundBlurriness>0?t:e).get(E));const A=n.xr,D=A.getSession&&A.getSession();D&&D.environmentBlendMode==="additive"&&(E=null),E===null?T(a,d):E&&E.isColor&&(T(E,1),w=!0),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Hc)?(m===void 0&&(m=new Bn(new bl(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Hs(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,B,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=E,m.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,m.material.toneMapped=E.encoding!==bt,(y!==E||v!==E.version||x!==n.toneMapping)&&(m.material.needsUpdate=!0,y=E,v=E.version,x=n.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new Bn(new El(2,2),new Lt({name:"BackgroundMaterial",uniforms:Hs(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=E.encoding!==bt,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(y!==E||v!==E.version||x!==n.toneMapping)&&(h.material.needsUpdate=!0,y=E,v=E.version,x=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function T(b,p){b.getRGB(Iu,Vx(n)),i.buffers.color.setClear(Iu.r,Iu.g,Iu.b,p,l)}return{getClearColor:function(){return a},setClearColor:function(b,p=1){a.set(b),d=p,T(a,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,T(a,d)},render:_}}function $T(n,e,t,i){const r=n.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||o!==null,a={},d=b(null);let h=d,m=!1;function y(Z,W,fe,me,j){let J=!1;if(l){const re=T(me,fe,W);h!==re&&(h=re,x(h.object)),J=p(Z,me,fe,j),J&&w(Z,me,fe,j)}else{const re=W.wireframe===!0;(h.geometry!==me.id||h.program!==fe.id||h.wireframe!==re)&&(h.geometry=me.id,h.program=fe.id,h.wireframe=re,J=!0)}j!==null&&t.update(j,34963),(J||m)&&(m=!1,k(Z,W,fe,me),j!==null&&n.bindBuffer(34963,t.get(j).buffer))}function v(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function x(Z){return i.isWebGL2?n.bindVertexArray(Z):o.bindVertexArrayOES(Z)}function _(Z){return i.isWebGL2?n.deleteVertexArray(Z):o.deleteVertexArrayOES(Z)}function T(Z,W,fe){const me=fe.wireframe===!0;let j=a[Z.id];j===void 0&&(j={},a[Z.id]=j);let J=j[W.id];J===void 0&&(J={},j[W.id]=J);let re=J[me];return re===void 0&&(re=b(v()),J[me]=re),re}function b(Z){const W=[],fe=[],me=[];for(let j=0;j<r;j++)W[j]=0,fe[j]=0,me[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:fe,attributeDivisors:me,object:Z,attributes:{},index:null}}function p(Z,W,fe,me){const j=h.attributes,J=W.attributes;let re=0;const Te=fe.getAttributes();for(const ge in Te)if(Te[ge].location>=0){const q=j[ge];let we=J[ge];if(we===void 0&&(ge==="instanceMatrix"&&Z.instanceMatrix&&(we=Z.instanceMatrix),ge==="instanceColor"&&Z.instanceColor&&(we=Z.instanceColor)),q===void 0||q.attribute!==we||we&&q.data!==we.data)return!0;re++}return h.attributesNum!==re||h.index!==me}function w(Z,W,fe,me){const j={},J=W.attributes;let re=0;const Te=fe.getAttributes();for(const ge in Te)if(Te[ge].location>=0){let q=J[ge];q===void 0&&(ge==="instanceMatrix"&&Z.instanceMatrix&&(q=Z.instanceMatrix),ge==="instanceColor"&&Z.instanceColor&&(q=Z.instanceColor));const we={};we.attribute=q,q&&q.data&&(we.data=q.data),j[ge]=we,re++}h.attributes=j,h.attributesNum=re,h.index=me}function E(){const Z=h.newAttributes;for(let W=0,fe=Z.length;W<fe;W++)Z[W]=0}function A(Z){D(Z,0)}function D(Z,W){const fe=h.newAttributes,me=h.enabledAttributes,j=h.attributeDivisors;fe[Z]=1,me[Z]===0&&(n.enableVertexAttribArray(Z),me[Z]=1),j[Z]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Z,W),j[Z]=W)}function N(){const Z=h.newAttributes,W=h.enabledAttributes;for(let fe=0,me=W.length;fe<me;fe++)W[fe]!==Z[fe]&&(n.disableVertexAttribArray(fe),W[fe]=0)}function B(Z,W,fe,me,j,J){i.isWebGL2===!0&&(fe===5124||fe===5125)?n.vertexAttribIPointer(Z,W,fe,j,J):n.vertexAttribPointer(Z,W,fe,me,j,J)}function k(Z,W,fe,me){if(i.isWebGL2===!1&&(Z.isInstancedMesh||me.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const j=me.attributes,J=fe.getAttributes(),re=W.defaultAttributeValues;for(const Te in J){const ge=J[Te];if(ge.location>=0){let oe=j[Te];if(oe===void 0&&(Te==="instanceMatrix"&&Z.instanceMatrix&&(oe=Z.instanceMatrix),Te==="instanceColor"&&Z.instanceColor&&(oe=Z.instanceColor)),oe!==void 0){const q=oe.normalized,we=oe.itemSize,Me=t.get(oe);if(Me===void 0)continue;const te=Me.buffer,$e=Me.type,Ge=Me.bytesPerElement;if(oe.isInterleavedBufferAttribute){const be=oe.data,Be=be.stride,dt=oe.offset;if(be.isInstancedInterleavedBuffer){for(let Fe=0;Fe<ge.locationSize;Fe++)D(ge.location+Fe,be.meshPerAttribute);Z.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Fe=0;Fe<ge.locationSize;Fe++)A(ge.location+Fe);n.bindBuffer(34962,te);for(let Fe=0;Fe<ge.locationSize;Fe++)B(ge.location+Fe,we/ge.locationSize,$e,q,Be*Ge,(dt+we/ge.locationSize*Fe)*Ge)}else{if(oe.isInstancedBufferAttribute){for(let be=0;be<ge.locationSize;be++)D(ge.location+be,oe.meshPerAttribute);Z.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let be=0;be<ge.locationSize;be++)A(ge.location+be);n.bindBuffer(34962,te);for(let be=0;be<ge.locationSize;be++)B(ge.location+be,we/ge.locationSize,$e,q,we*Ge,we/ge.locationSize*be*Ge)}}else if(re!==void 0){const q=re[Te];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(ge.location,q);break;case 3:n.vertexAttrib3fv(ge.location,q);break;case 4:n.vertexAttrib4fv(ge.location,q);break;default:n.vertexAttrib1fv(ge.location,q)}}}}N()}function R(){ue();for(const Z in a){const W=a[Z];for(const fe in W){const me=W[fe];for(const j in me)_(me[j].object),delete me[j];delete W[fe]}delete a[Z]}}function O(Z){if(a[Z.id]===void 0)return;const W=a[Z.id];for(const fe in W){const me=W[fe];for(const j in me)_(me[j].object),delete me[j];delete W[fe]}delete a[Z.id]}function se(Z){for(const W in a){const fe=a[W];if(fe[Z.id]===void 0)continue;const me=fe[Z.id];for(const j in me)_(me[j].object),delete me[j];delete fe[Z.id]}}function ue(){Y(),m=!0,h!==d&&(h=d,x(h.object))}function Y(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:y,reset:ue,resetDefaultState:Y,dispose:R,releaseStatesOfGeometry:O,releaseStatesOfProgram:se,initAttributes:E,enableAttribute:A,disableUnusedAttributes:N}}function KT(n,e,t,i){const r=i.isWebGL2;let o;function l(h){o=h}function a(h,m){n.drawArrays(o,h,m),t.update(m,o,1)}function d(h,m,y){if(y===0)return;let v,x;if(r)v=n,x="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](o,h,m,y),t.update(m,o,y)}this.setMode=l,this.render=a,this.renderInstances=d}function ZT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(B){if(B==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const d=o(a);d!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",d,"instead."),a=d);const h=l||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,y=n.getParameter(34930),v=n.getParameter(35660),x=n.getParameter(3379),_=n.getParameter(34076),T=n.getParameter(34921),b=n.getParameter(36347),p=n.getParameter(36348),w=n.getParameter(36349),E=v>0,A=l||e.has("OES_texture_float"),D=E&&A,N=l?n.getParameter(36183):0;return{isWebGL2:l,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:m,maxTextures:y,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:_,maxAttributes:T,maxVertexUniforms:b,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:E,floatFragmentTextures:A,floatVertexTextures:D,maxSamples:N}}function QT(n){const e=this;let t=null,i=0,r=!1,o=!1;const l=new lo,a=new ct,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(y,v){const x=y.length!==0||v||i!==0||r;return r=v,i=y.length,x},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(y,v){t=m(y,v,0)},this.setState=function(y,v,x){const _=y.clippingPlanes,T=y.clipIntersection,b=y.clipShadows,p=n.get(y);if(!r||_===null||_.length===0||o&&!b)o?m(null):h();else{const w=o?0:i,E=w*4;let A=p.clippingState||null;d.value=A,A=m(_,v,E,x);for(let D=0;D!==E;++D)A[D]=t[D];p.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(y,v,x,_){const T=y!==null?y.length:0;let b=null;if(T!==0){if(b=d.value,_!==!0||b===null){const p=x+T*4,w=v.matrixWorldInverse;a.getNormalMatrix(w),(b===null||b.length<p)&&(b=new Float32Array(p));for(let E=0,A=x;E!==T;++E,A+=4)l.copy(y[E]).applyMatrix4(w,a),l.normal.toArray(b,A),b[A+3]=l.constant}d.value=b,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,b}}function JT(n){let e=new WeakMap;function t(l,a){return a===Mc?l.mapping=Bs:a===Lh&&(l.mapping=Vs),l}function i(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const a=l.mapping;if(a===Mc||a===Lh)if(e.has(l)){const d=e.get(l).texture;return t(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const h=new mb(d.height/2);return h.fromEquirectangularTexture(n,l),e.set(l,h),l.addEventListener("dispose",r),t(h.texture,l.mapping)}else return null}}return l}function r(l){const a=l.target;a.removeEventListener("dispose",r);const d=e.get(a);d!==void 0&&(e.delete(a),d.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class jc extends Gx{constructor(e=-1,t=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,l=i+e,a=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,l=o+h*this.view.width,a-=m*this.view.offsetY,d=a-m*this.view.height}this.projectionMatrix.makeOrthographic(o,l,a,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _s=4,Iv=[.125,.215,.35,.446,.526,.582],co=20,wd=new jc,Ov=new Ze;let bd=null;const uo=(1+Math.sqrt(5))/2,ss=1/uo,Uv=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,uo,ss),new X(0,uo,-ss),new X(ss,0,uo),new X(-ss,0,uo),new X(uo,ss,0),new X(-uo,ss,0)];class kv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){bd=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bd),e.scissorTest=!1,Ou(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:ul,format:Ei,encoding:Po,depthBuffer:!1},r=Nv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nv(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eC(o)),this._blurMaterial=tC(o,e,t)}return r}_compileMaterial(e){const t=new Bn(this._lodPlanes[0],e);this._renderer.compile(t,wd)}_sceneToCubeUV(e,t,i,r){const a=new Nn(90,1,t,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,y=m.autoClear,v=m.toneMapping;m.getClearColor(Ov),m.toneMapping=Gi,m.autoClear=!1;const x=new _o({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),_=new Bn(new bl,x);let T=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,T=!0):(x.color.copy(Ov),T=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,d[p],0),a.lookAt(h[p],0,0)):w===1?(a.up.set(0,0,d[p]),a.lookAt(0,h[p],0)):(a.up.set(0,d[p],0),a.lookAt(0,0,h[p]));const E=this._cubeSize;Ou(r,w*E,p>2?E:0,E,E),m.setRenderTarget(r),T&&m.render(_,a),m.render(e,a)}_.geometry.dispose(),_.material.dispose(),m.toneMapping=v,m.autoClear=y,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Bs||e.mapping===Vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zv());const o=r?this._cubemapMaterial:this._equirectMaterial,l=new Bn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const d=this._cubeSize;Ou(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(l,wd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Uv[(r-1)%Uv.length];this._blur(e,r-1,r,o,l)}t.autoClear=i}_blur(e,t,i,r,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,i,r,"latitudinal",o),this._halfBlur(l,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,l,a){const d=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,y=new Bn(this._lodPlanes[r],h),v=h.uniforms,x=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*co-1),T=o/_,b=isFinite(o)?1+Math.floor(m*T):co;b>co&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${co}`);const p=[];let w=0;for(let B=0;B<co;++B){const k=B/T,R=Math.exp(-k*k/2);p.push(R),B===0?w+=R:B<b&&(w+=2*R)}for(let B=0;B<p.length;B++)p[B]=p[B]/w;v.envMap.value=e.texture,v.samples.value=b,v.weights.value=p,v.latitudinal.value=l==="latitudinal",a&&(v.poleAxis.value=a);const{_lodMax:E}=this;v.dTheta.value=_,v.mipInt.value=E-i;const A=this._sizeLods[r],D=3*A*(r>E-_s?r-E+_s:0),N=4*(this._cubeSize-A);Ou(t,D,N,3*A,2*A),d.setRenderTarget(t),d.render(y,wd)}}function eC(n){const e=[],t=[],i=[];let r=n;const o=n-_s+1+Iv.length;for(let l=0;l<o;l++){const a=Math.pow(2,r);t.push(a);let d=1/a;l>n-_s?d=Iv[l-n+_s-1]:l===0&&(d=0),i.push(d);const h=1/(a-2),m=-h,y=1+h,v=[m,m,y,m,y,y,m,m,y,y,m,y],x=6,_=6,T=3,b=2,p=1,w=new Float32Array(T*_*x),E=new Float32Array(b*_*x),A=new Float32Array(p*_*x);for(let N=0;N<x;N++){const B=N%3*2/3-1,k=N>2?0:-1,R=[B,k,0,B+2/3,k,0,B+2/3,k+1,0,B,k,0,B+2/3,k+1,0,B,k+1,0];w.set(R,T*_*N),E.set(v,b*_*N);const O=[N,N,N,N,N,N];A.set(O,p*_*N)}const D=new Di;D.setAttribute("position",new Pi(w,T)),D.setAttribute("uv",new Pi(E,b)),D.setAttribute("faceIndex",new Pi(A,p)),e.push(D),r>_s&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nv(n,e,t){const i=new en(n,e,t);return i.texture.mapping=Hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ou(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function tC(n,e,t){const i=new Float32Array(co),r=new X(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:co,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zp(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function zv(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zp(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Fv(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zp(),fragmentShader:`

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
	`}function nC(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const d=a.mapping,h=d===Mc||d===Lh,m=d===Bs||d===Vs;if(h||m)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let y=e.get(a);return t===null&&(t=new kv(n)),y=h?t.fromEquirectangular(a,y):t.fromCubemap(a,y),e.set(a,y),y.texture}else{if(e.has(a))return e.get(a).texture;{const y=a.image;if(h&&y&&y.height>0||m&&y&&r(y)){t===null&&(t=new kv(n));const v=h?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,v),a.addEventListener("dispose",o),v.texture}else return null}}}return a}function r(a){let d=0;const h=6;for(let m=0;m<h;m++)a[m]!==void 0&&d++;return d===h}function o(a){const d=a.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:l}}function iC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rC(n,e,t,i){const r={},o=new WeakMap;function l(y){const v=y.target;v.index!==null&&e.remove(v.index);for(const _ in v.attributes)e.remove(v.attributes[_]);v.removeEventListener("dispose",l),delete r[v.id];const x=o.get(v);x&&(e.remove(x),o.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function a(y,v){return r[v.id]===!0||(v.addEventListener("dispose",l),r[v.id]=!0,t.memory.geometries++),v}function d(y){const v=y.attributes;for(const _ in v)e.update(v[_],34962);const x=y.morphAttributes;for(const _ in x){const T=x[_];for(let b=0,p=T.length;b<p;b++)e.update(T[b],34962)}}function h(y){const v=[],x=y.index,_=y.attributes.position;let T=0;if(x!==null){const w=x.array;T=x.version;for(let E=0,A=w.length;E<A;E+=3){const D=w[E+0],N=w[E+1],B=w[E+2];v.push(D,N,N,B,B,D)}}else{const w=_.array;T=_.version;for(let E=0,A=w.length/3-1;E<A;E+=3){const D=E+0,N=E+1,B=E+2;v.push(D,N,N,B,B,D)}}const b=new(Ix(v)?Bx:Fx)(v,1);b.version=T;const p=o.get(y);p&&e.remove(p),o.set(y,b)}function m(y){const v=o.get(y);if(v){const x=y.index;x!==null&&v.version<x.version&&h(y)}else h(y);return o.get(y)}return{get:a,update:d,getWireframeAttribute:m}}function oC(n,e,t,i){const r=i.isWebGL2;let o;function l(v){o=v}let a,d;function h(v){a=v.type,d=v.bytesPerElement}function m(v,x){n.drawElements(o,x,a,v*d),t.update(x,o,1)}function y(v,x,_){if(_===0)return;let T,b;if(r)T=n,b="drawElementsInstanced";else if(T=e.get("ANGLE_instanced_arrays"),b="drawElementsInstancedANGLE",T===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}T[b](o,x,a,v*d,_),t.update(x,o,_)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=y}function sC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,a){switch(t.calls++,l){case 4:t.triangles+=a*(o/3);break;case 1:t.lines+=a*(o/2);break;case 3:t.lines+=a*(o-1);break;case 2:t.lines+=a*o;break;case 0:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function aC(n,e){return n[0]-e[0]}function lC(n,e){return Math.abs(e[1])-Math.abs(n[1])}function uC(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,l=new Rt,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function d(h,m,y){const v=h.morphTargetInfluences;if(e.isWebGL2===!0){const x=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,_=x!==void 0?x.length:0;let T=o.get(m);if(T===void 0||T.count!==_){let Z=function(){ue.dispose(),o.delete(m),m.removeEventListener("dispose",Z)};T!==void 0&&T.texture.dispose();const w=m.morphAttributes.position!==void 0,E=m.morphAttributes.normal!==void 0,A=m.morphAttributes.color!==void 0,D=m.morphAttributes.position||[],N=m.morphAttributes.normal||[],B=m.morphAttributes.color||[];let k=0;w===!0&&(k=1),E===!0&&(k=2),A===!0&&(k=3);let R=m.attributes.position.count*k,O=1;R>e.maxTextureSize&&(O=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const se=new Float32Array(R*O*4*_),ue=new kx(se,R,O,_);ue.type=go,ue.needsUpdate=!0;const Y=k*4;for(let W=0;W<_;W++){const fe=D[W],me=N[W],j=B[W],J=R*O*4*W;for(let re=0;re<fe.count;re++){const Te=re*Y;w===!0&&(l.fromBufferAttribute(fe,re),se[J+Te+0]=l.x,se[J+Te+1]=l.y,se[J+Te+2]=l.z,se[J+Te+3]=0),E===!0&&(l.fromBufferAttribute(me,re),se[J+Te+4]=l.x,se[J+Te+5]=l.y,se[J+Te+6]=l.z,se[J+Te+7]=0),A===!0&&(l.fromBufferAttribute(j,re),se[J+Te+8]=l.x,se[J+Te+9]=l.y,se[J+Te+10]=l.z,se[J+Te+11]=j.itemSize===4?l.w:1)}}T={count:_,texture:ue,size:new Ue(R,O)},o.set(m,T),m.addEventListener("dispose",Z)}let b=0;for(let w=0;w<v.length;w++)b+=v[w];const p=m.morphTargetsRelative?1:1-b;y.getUniforms().setValue(n,"morphTargetBaseInfluence",p),y.getUniforms().setValue(n,"morphTargetInfluences",v),y.getUniforms().setValue(n,"morphTargetsTexture",T.texture,t),y.getUniforms().setValue(n,"morphTargetsTextureSize",T.size)}else{const x=v===void 0?0:v.length;let _=i[m.id];if(_===void 0||_.length!==x){_=[];for(let E=0;E<x;E++)_[E]=[E,0];i[m.id]=_}for(let E=0;E<x;E++){const A=_[E];A[0]=E,A[1]=v[E]}_.sort(lC);for(let E=0;E<8;E++)E<x&&_[E][1]?(a[E][0]=_[E][0],a[E][1]=_[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(aC);const T=m.morphAttributes.position,b=m.morphAttributes.normal;let p=0;for(let E=0;E<8;E++){const A=a[E],D=A[0],N=A[1];D!==Number.MAX_SAFE_INTEGER&&N?(T&&m.getAttribute("morphTarget"+E)!==T[D]&&m.setAttribute("morphTarget"+E,T[D]),b&&m.getAttribute("morphNormal"+E)!==b[D]&&m.setAttribute("morphNormal"+E,b[D]),r[E]=N,p+=N):(T&&m.hasAttribute("morphTarget"+E)===!0&&m.deleteAttribute("morphTarget"+E),b&&m.hasAttribute("morphNormal"+E)===!0&&m.deleteAttribute("morphNormal"+E),r[E]=0)}const w=m.morphTargetsRelative?1:1-p;y.getUniforms().setValue(n,"morphTargetBaseInfluence",w),y.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:d}}function cC(n,e,t,i){let r=new WeakMap;function o(d){const h=i.render.frame,m=d.geometry,y=e.get(d,m);return r.get(y)!==h&&(e.update(y),r.set(y,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",a)===!1&&d.addEventListener("dispose",a),t.update(d.instanceMatrix,34962),d.instanceColor!==null&&t.update(d.instanceColor,34962)),y}function l(){r=new WeakMap}function a(d){const h=d.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}const jx=new Wn,Xx=new kx,qx=new Jw,Yx=new Hx,Bv=[],Vv=[],Gv=new Float32Array(16),Hv=new Float32Array(9),Wv=new Float32Array(4);function Ys(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Bv[r];if(o===void 0&&(o=new Float32Array(r),Bv[r]=o),e!==0){i.toArray(o,0);for(let l=1,a=0;l!==e;++l)a+=t,n[l].toArray(o,a)}return o}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xc(n,e){let t=Vv[e];t===void 0&&(t=new Int32Array(e),Vv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function hC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function pC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function mC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Wv.set(i),n.uniformMatrix2fv(this.addr,!1,Wv),rn(t,i)}}function gC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Hv.set(i),n.uniformMatrix3fv(this.addr,!1,Hv),rn(t,i)}}function vC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Gv.set(i),n.uniformMatrix4fv(this.addr,!1,Gv),rn(t,i)}}function yC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function _C(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function SC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function MC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function bC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function EC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function TC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||jx,r)}function CC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||qx,r)}function PC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Yx,r)}function AC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Xx,r)}function DC(n){switch(n){case 5126:return fC;case 35664:return dC;case 35665:return hC;case 35666:return pC;case 35674:return mC;case 35675:return gC;case 35676:return vC;case 5124:case 35670:return yC;case 35667:case 35671:return xC;case 35668:case 35672:return _C;case 35669:case 35673:return SC;case 5125:return MC;case 36294:return wC;case 36295:return bC;case 36296:return EC;case 35678:case 36198:case 36298:case 36306:case 35682:return TC;case 35679:case 36299:case 36307:return CC;case 35680:case 36300:case 36308:case 36293:return PC;case 36289:case 36303:case 36311:case 36292:return AC}}function RC(n,e){n.uniform1fv(this.addr,e)}function LC(n,e){const t=Ys(e,this.size,2);n.uniform2fv(this.addr,t)}function IC(n,e){const t=Ys(e,this.size,3);n.uniform3fv(this.addr,t)}function OC(n,e){const t=Ys(e,this.size,4);n.uniform4fv(this.addr,t)}function UC(n,e){const t=Ys(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kC(n,e){const t=Ys(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function NC(n,e){const t=Ys(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zC(n,e){n.uniform1iv(this.addr,e)}function FC(n,e){n.uniform2iv(this.addr,e)}function BC(n,e){n.uniform3iv(this.addr,e)}function VC(n,e){n.uniform4iv(this.addr,e)}function GC(n,e){n.uniform1uiv(this.addr,e)}function HC(n,e){n.uniform2uiv(this.addr,e)}function WC(n,e){n.uniform3uiv(this.addr,e)}function jC(n,e){n.uniform4uiv(this.addr,e)}function XC(n,e,t){const i=this.cache,r=e.length,o=Xc(t,r);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||jx,o[l])}function qC(n,e,t){const i=this.cache,r=e.length,o=Xc(t,r);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||qx,o[l])}function YC(n,e,t){const i=this.cache,r=e.length,o=Xc(t,r);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Yx,o[l])}function $C(n,e,t){const i=this.cache,r=e.length,o=Xc(t,r);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Xx,o[l])}function KC(n){switch(n){case 5126:return RC;case 35664:return LC;case 35665:return IC;case 35666:return OC;case 35674:return UC;case 35675:return kC;case 35676:return NC;case 5124:case 35670:return zC;case 35667:case 35671:return FC;case 35668:case 35672:return BC;case 35669:case 35673:return VC;case 5125:return GC;case 36294:return HC;case 36295:return WC;case 36296:return jC;case 35678:case 36198:case 36298:case 36306:case 35682:return XC;case 35679:case 36299:case 36307:return qC;case 35680:case 36300:case 36308:case 36293:return YC;case 36289:case 36303:case 36311:case 36292:return $C}}class ZC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=DC(t.type)}}class QC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=KC(t.type)}}class JC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const a=r[o];a.setValue(e,t[a.id],i)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function jv(n,e){n.seq.push(e),n.map[e.id]=e}function eP(n,e,t){const i=n.name,r=i.length;for(Ed.lastIndex=0;;){const o=Ed.exec(i),l=Ed.lastIndex;let a=o[1];const d=o[2]==="]",h=o[3];if(d&&(a=a|0),h===void 0||h==="["&&l+2===r){jv(t,h===void 0?new ZC(a,n,e):new QC(a,n,e));break}else{let y=t.map[a];y===void 0&&(y=new JC(a),jv(t,y)),t=y}}}class $u{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);eP(o,l,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,l=t.length;o!==l;++o){const a=t[o],d=i[a.id];d.needsUpdate!==!1&&a.setValue(e,d.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const l=e[r];l.id in t&&i.push(l)}return i}}function Xv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let tP=0;function nP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=r;l<o;l++){const a=l+1;i.push(`${a===e?">":" "} ${a}: ${t[l]}`)}return i.join(`
`)}function iP(n){switch(n){case Po:return["Linear","( value )"];case bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function qv(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+nP(n.getShaderSource(e),l)}else return r}function rP(n,e){const t=iP(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function oP(n,e){let t;switch(e){case Sw:t="Linear";break;case Dx:t="Reinhard";break;case Mw:t="OptimizedCineon";break;case ww:t="ACESFilmic";break;case bw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sP(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ia).join(`
`)}function aP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lP(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),l=o.name;let a=1;o.type===35674&&(a=2),o.type===35675&&(a=3),o.type===35676&&(a=4),t[l]={type:o.type,location:n.getAttribLocation(e,l),locationSize:a}}return t}function Ia(n){return n!==""}function Yv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $v(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(n){return n.replace(uP,cP)}function cP(n,e){const t=ot[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Uh(t)}const fP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kv(n){return n.replace(fP,dP)}function dP(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Zv(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Op?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ex?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===La&&(e="SHADOWMAP_TYPE_VSM"),e}function pP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function gP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gc:e="ENVMAP_BLENDING_MULTIPLY";break;case xw:e="ENVMAP_BLENDING_MIX";break;case _w:e="ENVMAP_BLENDING_ADD";break}return e}function vP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function yP(n,e,t,i){const r=n.getContext(),o=t.defines;let l=t.vertexShader,a=t.fragmentShader;const d=hP(t),h=pP(t),m=mP(t),y=gP(t),v=vP(t),x=t.isWebGL2?"":sP(t),_=aP(o),T=r.createProgram();let b,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=[_].filter(Ia).join(`
`),b.length>0&&(b+=`
`),p=[x,_].filter(Ia).join(`
`),p.length>0&&(p+=`
`)):(b=[Zv(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),p=[x,Zv(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+y:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?ot.tonemapping_pars_fragment:"",t.toneMapping!==Gi?oP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.encodings_pars_fragment,rP("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),l=Uh(l),l=Yv(l,t),l=$v(l,t),a=Uh(a),a=Yv(a,t),a=$v(a,t),l=Kv(l),a=Kv(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,b=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,p=["#define varying in",t.glslVersion===vv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=w+b+l,A=w+p+a,D=Xv(r,35633,E),N=Xv(r,35632,A);if(r.attachShader(T,D),r.attachShader(T,N),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T),n.debug.checkShaderErrors){const R=r.getProgramInfoLog(T).trim(),O=r.getShaderInfoLog(D).trim(),se=r.getShaderInfoLog(N).trim();let ue=!0,Y=!0;if(r.getProgramParameter(T,35714)===!1)if(ue=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,T,D,N);else{const Z=qv(r,D,"vertex"),W=qv(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,35715)+`

Program Info Log: `+R+`
`+Z+`
`+W)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(O===""||se==="")&&(Y=!1);Y&&(this.diagnostics={runnable:ue,programLog:R,vertexShader:{log:O,prefix:b},fragmentShader:{log:se,prefix:p}})}r.deleteShader(D),r.deleteShader(N);let B;this.getUniforms=function(){return B===void 0&&(B=new $u(r,T)),B};let k;return this.getAttributes=function(){return k===void 0&&(k=lP(r,T)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.name=t.shaderName,this.id=tP++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=D,this.fragmentShader=N,this}let xP=0;class _P{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new SP(e),t.set(e,i)),i}}class SP{constructor(e){this.id=xP++,this.code=e,this.usedTimes=0}}function MP(n,e,t,i,r,o,l){const a=new Nx,d=new _P,h=[],m=r.isWebGL2,y=r.logarithmicDepthBuffer,v=r.vertexTextures;let x=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return R===1?"uv2":"uv"}function b(R,O,se,ue,Y){const Z=ue.fog,W=Y.geometry,fe=R.isMeshStandardMaterial?ue.environment:null,me=(R.isMeshStandardMaterial?t:e).get(R.envMap||fe),j=me&&me.mapping===Hc?me.image.height:null,J=_[R.type];R.precision!==null&&(x=r.getMaxPrecision(R.precision),x!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const re=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Te=re!==void 0?re.length:0;let ge=0;W.morphAttributes.position!==void 0&&(ge=1),W.morphAttributes.normal!==void 0&&(ge=2),W.morphAttributes.color!==void 0&&(ge=3);let oe,q,we,Me;if(J){const Re=zi[J];oe=Re.vertexShader,q=Re.fragmentShader}else oe=R.vertexShader,q=R.fragmentShader,d.update(R),we=d.getVertexShaderID(R),Me=d.getFragmentShaderID(R);const te=n.getRenderTarget(),$e=Y.isInstancedMesh===!0,Ge=!!R.map,be=!!R.matcap,Be=!!me,dt=!!R.aoMap,Fe=!!R.lightMap,Qe=!!R.bumpMap,je=!!R.normalMap,Et=!!R.displacementMap,Ut=!!R.emissiveMap,mt=!!R.metalnessMap,st=!!R.roughnessMap,_t=R.clearcoat>0,jt=R.iridescence>0,z=R.sheen>0,L=R.transmission>0,ae=_t&&!!R.clearcoatMap,pe=_t&&!!R.clearcoatNormalMap,_e=_t&&!!R.clearcoatRoughnessMap,Ee=jt&&!!R.iridescenceMap,V=jt&&!!R.iridescenceThicknessMap,he=z&&!!R.sheenColorMap,ne=z&&!!R.sheenRoughnessMap,Ce=!!R.specularMap,Le=!!R.specularColorMap,ze=!!R.specularIntensityMap,De=L&&!!R.transmissionMap,ke=L&&!!R.thicknessMap,Xe=!!R.gradientMap,Je=!!R.alphaMap,Pt=R.alphaTest>0,H=!!R.extensions,le=!!W.attributes.uv2;return{isWebGL2:m,shaderID:J,shaderName:R.type,vertexShader:oe,fragmentShader:q,defines:R.defines,customVertexShaderID:we,customFragmentShaderID:Me,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,instancing:$e,instancingColor:$e&&Y.instanceColor!==null,supportsVertexTextures:v,outputEncoding:te===null?n.outputEncoding:te.isXRRenderTarget===!0?te.texture.encoding:Po,map:Ge,matcap:be,envMap:Be,envMapMode:Be&&me.mapping,envMapCubeUVHeight:j,aoMap:dt,lightMap:Fe,bumpMap:Qe,normalMap:je,displacementMap:v&&Et,emissiveMap:Ut,normalMapObjectSpace:je&&R.normalMapType===Gw,normalMapTangentSpace:je&&R.normalMapType===Sl,decodeVideoTexture:Ge&&R.map.isVideoTexture===!0&&R.map.encoding===bt,metalnessMap:mt,roughnessMap:st,clearcoat:_t,clearcoatMap:ae,clearcoatNormalMap:pe,clearcoatRoughnessMap:_e,iridescence:jt,iridescenceMap:Ee,iridescenceThicknessMap:V,sheen:z,sheenColorMap:he,sheenRoughnessMap:ne,specularMap:Ce,specularColorMap:Le,specularIntensityMap:ze,transmission:L,transmissionMap:De,thicknessMap:ke,gradientMap:Xe,opaque:R.transparent===!1&&R.blending===As,alphaMap:Je,alphaTest:Pt,combine:R.combine,mapUv:Ge&&T(R.map.channel),aoMapUv:dt&&T(R.aoMap.channel),lightMapUv:Fe&&T(R.lightMap.channel),bumpMapUv:Qe&&T(R.bumpMap.channel),normalMapUv:je&&T(R.normalMap.channel),displacementMapUv:Et&&T(R.displacementMap.channel),emissiveMapUv:Ut&&T(R.emissiveMap.channel),metalnessMapUv:mt&&T(R.metalnessMap.channel),roughnessMapUv:st&&T(R.roughnessMap.channel),clearcoatMapUv:ae&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:pe&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:V&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:he&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:ne&&T(R.sheenRoughnessMap.channel),specularMapUv:Ce&&T(R.specularMap.channel),specularColorMapUv:Le&&T(R.specularColorMap.channel),specularIntensityMapUv:ze&&T(R.specularIntensityMap.channel),transmissionMapUv:De&&T(R.transmissionMap.channel),thicknessMapUv:ke&&T(R.thicknessMap.channel),alphaMapUv:Je&&T(R.alphaMap.channel),vertexTangents:je&&!!W.attributes.tangent,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUvs2:le,pointsUvs:Y.isPoints===!0&&!!W.attributes.uv&&(Ge||Je),fog:!!Z,useFog:R.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:Y.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ge,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&se.length>0,shadowMapType:n.shadowMap.type,toneMapping:R.toneMapped?n.toneMapping:Gi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ir,flipSided:R.side===Rn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:H&&R.extensions.derivatives===!0,extensionFragDepth:H&&R.extensions.fragDepth===!0,extensionDrawBuffers:H&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:H&&R.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:m||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||i.has("EXT_shader_texture_lod"),customProgramCacheKey:R.customProgramCacheKey()}}function p(R){const O=[];if(R.shaderID?O.push(R.shaderID):(O.push(R.customVertexShaderID),O.push(R.customFragmentShaderID)),R.defines!==void 0)for(const se in R.defines)O.push(se),O.push(R.defines[se]);return R.isRawShaderMaterial===!1&&(w(O,R),E(O,R),O.push(n.outputEncoding)),O.push(R.customProgramCacheKey),O.join()}function w(R,O){R.push(O.precision),R.push(O.outputEncoding),R.push(O.envMapMode),R.push(O.envMapCubeUVHeight),R.push(O.mapUv),R.push(O.alphaMapUv),R.push(O.lightMapUv),R.push(O.aoMapUv),R.push(O.bumpMapUv),R.push(O.normalMapUv),R.push(O.displacementMapUv),R.push(O.emissiveMapUv),R.push(O.metalnessMapUv),R.push(O.roughnessMapUv),R.push(O.clearcoatMapUv),R.push(O.clearcoatNormalMapUv),R.push(O.clearcoatRoughnessMapUv),R.push(O.iridescenceMapUv),R.push(O.iridescenceThicknessMapUv),R.push(O.sheenColorMapUv),R.push(O.sheenRoughnessMapUv),R.push(O.specularMapUv),R.push(O.specularColorMapUv),R.push(O.specularIntensityMapUv),R.push(O.transmissionMapUv),R.push(O.thicknessMapUv),R.push(O.combine),R.push(O.fogExp2),R.push(O.sizeAttenuation),R.push(O.morphTargetsCount),R.push(O.morphAttributeCount),R.push(O.numDirLights),R.push(O.numPointLights),R.push(O.numSpotLights),R.push(O.numSpotLightMaps),R.push(O.numHemiLights),R.push(O.numRectAreaLights),R.push(O.numDirLightShadows),R.push(O.numPointLightShadows),R.push(O.numSpotLightShadows),R.push(O.numSpotLightShadowsWithMaps),R.push(O.shadowMapType),R.push(O.toneMapping),R.push(O.numClippingPlanes),R.push(O.numClipIntersection),R.push(O.depthPacking)}function E(R,O){a.disableAll(),O.isWebGL2&&a.enable(0),O.supportsVertexTextures&&a.enable(1),O.instancing&&a.enable(2),O.instancingColor&&a.enable(3),O.matcap&&a.enable(4),O.envMap&&a.enable(5),O.normalMapObjectSpace&&a.enable(6),O.normalMapTangentSpace&&a.enable(7),O.clearcoat&&a.enable(8),O.iridescence&&a.enable(9),O.alphaTest&&a.enable(10),O.vertexColors&&a.enable(11),O.vertexAlphas&&a.enable(12),O.vertexUvs2&&a.enable(13),O.vertexTangents&&a.enable(14),R.push(a.mask),a.disableAll(),O.fog&&a.enable(0),O.useFog&&a.enable(1),O.flatShading&&a.enable(2),O.logarithmicDepthBuffer&&a.enable(3),O.skinning&&a.enable(4),O.morphTargets&&a.enable(5),O.morphNormals&&a.enable(6),O.morphColors&&a.enable(7),O.premultipliedAlpha&&a.enable(8),O.shadowMapEnabled&&a.enable(9),O.useLegacyLights&&a.enable(10),O.doubleSided&&a.enable(11),O.flipSided&&a.enable(12),O.useDepthPacking&&a.enable(13),O.dithering&&a.enable(14),O.transmission&&a.enable(15),O.sheen&&a.enable(16),O.decodeVideoTexture&&a.enable(17),O.opaque&&a.enable(18),O.pointsUvs&&a.enable(19),R.push(a.mask)}function A(R){const O=_[R.type];let se;if(O){const ue=zi[O];se=zn.clone(ue.uniforms)}else se=R.uniforms;return se}function D(R,O){let se;for(let ue=0,Y=h.length;ue<Y;ue++){const Z=h[ue];if(Z.cacheKey===O){se=Z,++se.usedTimes;break}}return se===void 0&&(se=new yP(n,O,R,o),h.push(se)),se}function N(R){if(--R.usedTimes===0){const O=h.indexOf(R);h[O]=h[h.length-1],h.pop(),R.destroy()}}function B(R){d.remove(R)}function k(){d.dispose()}return{getParameters:b,getProgramCacheKey:p,getUniforms:A,acquireProgram:D,releaseProgram:N,releaseShaderCache:B,programs:h,dispose:k}}function wP(){let n=new WeakMap;function e(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function t(o){n.delete(o)}function i(o,l,a){n.get(o)[l]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function bP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jv(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function l(y,v,x,_,T,b){let p=n[e];return p===void 0?(p={id:y.id,object:y,geometry:v,material:x,groupOrder:_,renderOrder:y.renderOrder,z:T,group:b},n[e]=p):(p.id=y.id,p.object=y,p.geometry=v,p.material=x,p.groupOrder=_,p.renderOrder=y.renderOrder,p.z=T,p.group=b),e++,p}function a(y,v,x,_,T,b){const p=l(y,v,x,_,T,b);x.transmission>0?i.push(p):x.transparent===!0?r.push(p):t.push(p)}function d(y,v,x,_,T,b){const p=l(y,v,x,_,T,b);x.transmission>0?i.unshift(p):x.transparent===!0?r.unshift(p):t.unshift(p)}function h(y,v){t.length>1&&t.sort(y||bP),i.length>1&&i.sort(v||Qv),r.length>1&&r.sort(v||Qv)}function m(){for(let y=e,v=n.length;y<v;y++){const x=n[y];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:d,finish:m,sort:h}}function EP(){let n=new WeakMap;function e(i,r){const o=n.get(i);let l;return o===void 0?(l=new Jv,n.set(i,[l])):r>=o.length?(l=new Jv,o.push(l)):l=o[r],l}function t(){n=new WeakMap}return{get:e,dispose:t}}function TP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Ze};break;case"SpotLight":t={position:new X,direction:new X,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function CP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let PP=0;function AP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function DP(n,e){const t=new TP,i=CP(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let m=0;m<9;m++)r.probe.push(new X);const o=new X,l=new Gt,a=new Gt;function d(m,y){let v=0,x=0,_=0;for(let se=0;se<9;se++)r.probe[se].set(0,0,0);let T=0,b=0,p=0,w=0,E=0,A=0,D=0,N=0,B=0,k=0;m.sort(AP);const R=y===!0?Math.PI:1;for(let se=0,ue=m.length;se<ue;se++){const Y=m[se],Z=Y.color,W=Y.intensity,fe=Y.distance,me=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)v+=Z.r*W*R,x+=Z.g*W*R,_+=Z.b*W*R;else if(Y.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector(Y.sh.coefficients[j],W);else if(Y.isDirectionalLight){const j=t.get(Y);if(j.color.copy(Y.color).multiplyScalar(Y.intensity*R),Y.castShadow){const J=Y.shadow,re=i.get(Y);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,r.directionalShadow[T]=re,r.directionalShadowMap[T]=me,r.directionalShadowMatrix[T]=Y.shadow.matrix,A++}r.directional[T]=j,T++}else if(Y.isSpotLight){const j=t.get(Y);j.position.setFromMatrixPosition(Y.matrixWorld),j.color.copy(Z).multiplyScalar(W*R),j.distance=fe,j.coneCos=Math.cos(Y.angle),j.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),j.decay=Y.decay,r.spot[p]=j;const J=Y.shadow;if(Y.map&&(r.spotLightMap[B]=Y.map,B++,J.updateMatrices(Y),Y.castShadow&&k++),r.spotLightMatrix[p]=J.matrix,Y.castShadow){const re=i.get(Y);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,r.spotShadow[p]=re,r.spotShadowMap[p]=me,N++}p++}else if(Y.isRectAreaLight){const j=t.get(Y);j.color.copy(Z).multiplyScalar(W),j.halfWidth.set(Y.width*.5,0,0),j.halfHeight.set(0,Y.height*.5,0),r.rectArea[w]=j,w++}else if(Y.isPointLight){const j=t.get(Y);if(j.color.copy(Y.color).multiplyScalar(Y.intensity*R),j.distance=Y.distance,j.decay=Y.decay,Y.castShadow){const J=Y.shadow,re=i.get(Y);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,re.shadowCameraNear=J.camera.near,re.shadowCameraFar=J.camera.far,r.pointShadow[b]=re,r.pointShadowMap[b]=me,r.pointShadowMatrix[b]=Y.shadow.matrix,D++}r.point[b]=j,b++}else if(Y.isHemisphereLight){const j=t.get(Y);j.skyColor.copy(Y.color).multiplyScalar(W*R),j.groundColor.copy(Y.groundColor).multiplyScalar(W*R),r.hemi[E]=j,E++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=_;const O=r.hash;(O.directionalLength!==T||O.pointLength!==b||O.spotLength!==p||O.rectAreaLength!==w||O.hemiLength!==E||O.numDirectionalShadows!==A||O.numPointShadows!==D||O.numSpotShadows!==N||O.numSpotMaps!==B)&&(r.directional.length=T,r.spot.length=p,r.rectArea.length=w,r.point.length=b,r.hemi.length=E,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=N+B-k,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=k,O.directionalLength=T,O.pointLength=b,O.spotLength=p,O.rectAreaLength=w,O.hemiLength=E,O.numDirectionalShadows=A,O.numPointShadows=D,O.numSpotShadows=N,O.numSpotMaps=B,r.version=PP++)}function h(m,y){let v=0,x=0,_=0,T=0,b=0;const p=y.matrixWorldInverse;for(let w=0,E=m.length;w<E;w++){const A=m[w];if(A.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(p),v++}else if(A.isSpotLight){const D=r.spot[_];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(p),D.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(p),_++}else if(A.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(p),a.identity(),l.copy(A.matrixWorld),l.premultiply(p),a.extractRotation(l),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),T++}else if(A.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(p),x++}else if(A.isHemisphereLight){const D=r.hemi[b];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(p),b++}}}return{setup:d,setupView:h,state:r}}function e0(n,e){const t=new DP(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function l(y){i.push(y)}function a(y){r.push(y)}function d(y){t.setup(i,y)}function h(y){t.setupView(i,y)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:d,setupLightsView:h,pushLight:l,pushShadow:a}}function RP(n,e){let t=new WeakMap;function i(o,l=0){const a=t.get(o);let d;return a===void 0?(d=new e0(n,e),t.set(o,[d])):l>=a.length?(d=new e0(n,e),a.push(d)):d=a[l],d}function r(){t=new WeakMap}return{get:i,dispose:r}}class Gr extends Xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dl extends Xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const LP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IP=`uniform sampler2D shadow_pass;
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
}`;function OP(n,e,t){let i=new Np;const r=new Ue,o=new Ue,l=new Rt,a=new Gr({depthPacking:_l}),d=new dl,h={},m=t.maxTextureSize,y={[Vr]:Rn,[Rn]:Vr,[ir]:ir},v=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:LP,fragmentShader:IP}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const _=new Di;_.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Bn(_,v),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Op,this.render=function(A,D,N){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||A.length===0)return;const B=n.getRenderTarget(),k=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),O=n.state;O.setBlending(un),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let se=0,ue=A.length;se<ue;se++){const Y=A[se],Z=Y.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const W=Z.getFrameExtents();if(r.multiply(W),o.copy(Z.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(o.x=Math.floor(m/W.x),r.x=o.x*W.x,Z.mapSize.x=o.x),r.y>m&&(o.y=Math.floor(m/W.y),r.y=o.y*W.y,Z.mapSize.y=o.y)),Z.map===null){const me=this.type!==La?{minFilter:Qt,magFilter:Qt}:{};Z.map=new en(r.x,r.y,me),Z.map.texture.name=Y.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();const fe=Z.getViewportCount();for(let me=0;me<fe;me++){const j=Z.getViewport(me);l.set(o.x*j.x,o.y*j.y,o.x*j.z,o.y*j.w),O.viewport(l),Z.updateMatrices(Y,me),i=Z.getFrustum(),E(D,N,Z.camera,Y,this.type)}Z.isPointLightShadow!==!0&&this.type===La&&p(Z,N),Z.needsUpdate=!1}b.needsUpdate=!1,n.setRenderTarget(B,k,R)};function p(A,D){const N=e.update(T);v.defines.VSM_SAMPLES!==A.blurSamples&&(v.defines.VSM_SAMPLES=A.blurSamples,x.defines.VSM_SAMPLES=A.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new en(r.x,r.y)),v.uniforms.shadow_pass.value=A.map.texture,v.uniforms.resolution.value=A.mapSize,v.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(D,null,N,v,T,null),x.uniforms.shadow_pass.value=A.mapPass.texture,x.uniforms.resolution.value=A.mapSize,x.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(D,null,N,x,T,null)}function w(A,D,N,B){let k=null;const R=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)k=R;else if(k=N.isPointLight===!0?d:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const O=k.uuid,se=D.uuid;let ue=h[O];ue===void 0&&(ue={},h[O]=ue);let Y=ue[se];Y===void 0&&(Y=k.clone(),ue[se]=Y),k=Y}if(k.visible=D.visible,k.wireframe=D.wireframe,B===La?k.side=D.shadowSide!==null?D.shadowSide:D.side:k.side=D.shadowSide!==null?D.shadowSide:y[D.side],k.alphaMap=D.alphaMap,k.alphaTest=D.alphaTest,k.map=D.map,k.clipShadows=D.clipShadows,k.clippingPlanes=D.clippingPlanes,k.clipIntersection=D.clipIntersection,k.displacementMap=D.displacementMap,k.displacementScale=D.displacementScale,k.displacementBias=D.displacementBias,k.wireframeLinewidth=D.wireframeLinewidth,k.linewidth=D.linewidth,N.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const O=n.properties.get(k);O.light=N}return k}function E(A,D,N,B,k){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&k===La)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const se=e.update(A),ue=A.material;if(Array.isArray(ue)){const Y=se.groups;for(let Z=0,W=Y.length;Z<W;Z++){const fe=Y[Z],me=ue[fe.materialIndex];if(me&&me.visible){const j=w(A,me,B,k);n.renderBufferDirect(N,null,se,j,A,fe)}}}else if(ue.visible){const Y=w(A,ue,B,k);n.renderBufferDirect(N,null,se,Y,A,null)}}const O=A.children;for(let se=0,ue=O.length;se<ue;se++)E(O[se],D,N,B,k)}}function UP(n,e,t){const i=t.isWebGL2;function r(){let H=!1;const le=new Rt;let ve=null;const Re=new Rt(0,0,0,0);return{setMask:function(Oe){ve!==Oe&&!H&&(n.colorMask(Oe,Oe,Oe,Oe),ve=Oe)},setLocked:function(Oe){H=Oe},setClear:function(Oe,St,yt,on,Xt){Xt===!0&&(Oe*=on,St*=on,yt*=on),le.set(Oe,St,yt,on),Re.equals(le)===!1&&(n.clearColor(Oe,St,yt,on),Re.copy(le))},reset:function(){H=!1,ve=null,Re.set(-1,0,0,0)}}}function o(){let H=!1,le=null,ve=null,Re=null;return{setTest:function(Oe){Oe?te(2929):$e(2929)},setMask:function(Oe){le!==Oe&&!H&&(n.depthMask(Oe),le=Oe)},setFunc:function(Oe){if(ve!==Oe){switch(Oe){case dw:n.depthFunc(512);break;case hw:n.depthFunc(519);break;case pw:n.depthFunc(513);break;case Rh:n.depthFunc(515);break;case mw:n.depthFunc(514);break;case gw:n.depthFunc(518);break;case vw:n.depthFunc(516);break;case yw:n.depthFunc(517);break;default:n.depthFunc(515)}ve=Oe}},setLocked:function(Oe){H=Oe},setClear:function(Oe){Re!==Oe&&(n.clearDepth(Oe),Re=Oe)},reset:function(){H=!1,le=null,ve=null,Re=null}}}function l(){let H=!1,le=null,ve=null,Re=null,Oe=null,St=null,yt=null,on=null,Xt=null;return{setTest:function(gt){H||(gt?te(2960):$e(2960))},setMask:function(gt){le!==gt&&!H&&(n.stencilMask(gt),le=gt)},setFunc:function(gt,qt,jn){(ve!==gt||Re!==qt||Oe!==jn)&&(n.stencilFunc(gt,qt,jn),ve=gt,Re=qt,Oe=jn)},setOp:function(gt,qt,jn){(St!==gt||yt!==qt||on!==jn)&&(n.stencilOp(gt,qt,jn),St=gt,yt=qt,on=jn)},setLocked:function(gt){H=gt},setClear:function(gt){Xt!==gt&&(n.clearStencil(gt),Xt=gt)},reset:function(){H=!1,le=null,ve=null,Re=null,Oe=null,St=null,yt=null,on=null,Xt=null}}}const a=new r,d=new o,h=new l,m=new WeakMap,y=new WeakMap;let v={},x={},_=new WeakMap,T=[],b=null,p=!1,w=null,E=null,A=null,D=null,N=null,B=null,k=null,R=!1,O=null,se=null,ue=null,Y=null,Z=null;const W=n.getParameter(35661);let fe=!1,me=0;const j=n.getParameter(7938);j.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(j)[1]),fe=me>=1):j.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),fe=me>=2);let J=null,re={};const Te=n.getParameter(3088),ge=n.getParameter(2978),oe=new Rt().fromArray(Te),q=new Rt().fromArray(ge);function we(H,le,ve){const Re=new Uint8Array(4),Oe=n.createTexture();n.bindTexture(H,Oe),n.texParameteri(H,10241,9728),n.texParameteri(H,10240,9728);for(let St=0;St<ve;St++)n.texImage2D(le+St,0,6408,1,1,0,6408,5121,Re);return Oe}const Me={};Me[3553]=we(3553,3553,1),Me[34067]=we(34067,34069,6),a.setClear(0,0,0,1),d.setClear(1),h.setClear(0),te(2929),d.setFunc(Rh),Et(!1),Ut(Vg),te(2884),Qe(un);function te(H){v[H]!==!0&&(n.enable(H),v[H]=!0)}function $e(H){v[H]!==!1&&(n.disable(H),v[H]=!1)}function Ge(H,le){return x[H]!==le?(n.bindFramebuffer(H,le),x[H]=le,i&&(H===36009&&(x[36160]=le),H===36160&&(x[36009]=le)),!0):!1}function be(H,le){let ve=T,Re=!1;if(H)if(ve=_.get(le),ve===void 0&&(ve=[],_.set(le,ve)),H.isWebGLMultipleRenderTargets){const Oe=H.texture;if(ve.length!==Oe.length||ve[0]!==36064){for(let St=0,yt=Oe.length;St<yt;St++)ve[St]=36064+St;ve.length=Oe.length,Re=!0}}else ve[0]!==36064&&(ve[0]=36064,Re=!0);else ve[0]!==1029&&(ve[0]=1029,Re=!0);Re&&(t.isWebGL2?n.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function Be(H){return b!==H?(n.useProgram(H),b=H,!0):!1}const dt={[Pr]:32774,[rw]:32778,[ow]:32779};if(i)dt[Wg]=32775,dt[jg]=32776;else{const H=e.get("EXT_blend_minmax");H!==null&&(dt[Wg]=H.MIN_EXT,dt[jg]=H.MAX_EXT)}const Fe={[Dh]:0,[sw]:1,[aw]:768,[Tx]:770,[fw]:776,[Ax]:774,[Px]:772,[lw]:769,[Cx]:771,[cw]:775,[uw]:773};function Qe(H,le,ve,Re,Oe,St,yt,on){if(H===un){p===!0&&($e(3042),p=!1);return}if(p===!1&&(te(3042),p=!0),H!==Sc){if(H!==w||on!==R){if((E!==Pr||N!==Pr)&&(n.blendEquation(32774),E=Pr,N=Pr),on)switch(H){case As:n.blendFuncSeparate(1,771,1,771);break;case Ah:n.blendFunc(1,1);break;case Gg:n.blendFuncSeparate(0,769,0,1);break;case Hg:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case As:n.blendFuncSeparate(770,771,1,771);break;case Ah:n.blendFunc(770,1);break;case Gg:n.blendFuncSeparate(0,769,0,1);break;case Hg:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}A=null,D=null,B=null,k=null,w=H,R=on}return}Oe=Oe||le,St=St||ve,yt=yt||Re,(le!==E||Oe!==N)&&(n.blendEquationSeparate(dt[le],dt[Oe]),E=le,N=Oe),(ve!==A||Re!==D||St!==B||yt!==k)&&(n.blendFuncSeparate(Fe[ve],Fe[Re],Fe[St],Fe[yt]),A=ve,D=Re,B=St,k=yt),w=H,R=!1}function je(H,le){H.side===ir?$e(2884):te(2884);let ve=H.side===Rn;le&&(ve=!ve),Et(ve),H.blending===As&&H.transparent===!1?Qe(un):Qe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),a.setMask(H.colorWrite);const Re=H.stencilWrite;h.setTest(Re),Re&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),st(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?te(32926):$e(32926)}function Et(H){O!==H&&(H?n.frontFace(2304):n.frontFace(2305),O=H)}function Ut(H){H!==nw?(te(2884),H!==se&&(H===Vg?n.cullFace(1029):H===iw?n.cullFace(1028):n.cullFace(1032))):$e(2884),se=H}function mt(H){H!==ue&&(fe&&n.lineWidth(H),ue=H)}function st(H,le,ve){H?(te(32823),(Y!==le||Z!==ve)&&(n.polygonOffset(le,ve),Y=le,Z=ve)):$e(32823)}function _t(H){H?te(3089):$e(3089)}function jt(H){H===void 0&&(H=33984+W-1),J!==H&&(n.activeTexture(H),J=H)}function z(H,le,ve){ve===void 0&&(J===null?ve=33984+W-1:ve=J);let Re=re[ve];Re===void 0&&(Re={type:void 0,texture:void 0},re[ve]=Re),(Re.type!==H||Re.texture!==le)&&(J!==ve&&(n.activeTexture(ve),J=ve),n.bindTexture(H,le||Me[H]),Re.type=H,Re.texture=le)}function L(){const H=re[J];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function V(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ne(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(H){oe.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),oe.copy(H))}function ke(H){q.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),q.copy(H))}function Xe(H,le){let ve=y.get(le);ve===void 0&&(ve=new WeakMap,y.set(le,ve));let Re=ve.get(H);Re===void 0&&(Re=n.getUniformBlockIndex(le,H.name),ve.set(H,Re))}function Je(H,le){const Re=y.get(le).get(H);m.get(le)!==Re&&(n.uniformBlockBinding(le,Re,H.__bindingPointIndex),m.set(le,Re))}function Pt(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),v={},J=null,re={},x={},_=new WeakMap,T=[],b=null,p=!1,w=null,E=null,A=null,D=null,N=null,B=null,k=null,R=!1,O=null,se=null,ue=null,Y=null,Z=null,oe.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),a.reset(),d.reset(),h.reset()}return{buffers:{color:a,depth:d,stencil:h},enable:te,disable:$e,bindFramebuffer:Ge,drawBuffers:be,useProgram:Be,setBlending:Qe,setMaterial:je,setFlipSided:Et,setCullFace:Ut,setLineWidth:mt,setPolygonOffset:st,setScissorTest:_t,activeTexture:jt,bindTexture:z,unbindTexture:L,compressedTexImage2D:ae,compressedTexImage3D:pe,texImage2D:Le,texImage3D:ze,updateUBOMapping:Xe,uniformBlockBinding:Je,texStorage2D:ne,texStorage3D:Ce,texSubImage2D:_e,texSubImage3D:Ee,compressedTexSubImage2D:V,compressedTexSubImage3D:he,scissor:De,viewport:ke,reset:Pt}}function kP(n,e,t,i,r,o,l){const a=r.isWebGL2,d=r.maxTextures,h=r.maxCubemapSize,m=r.maxTextureSize,y=r.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let T;const b=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(z,L){return p?new OffscreenCanvas(z,L):fl("canvas")}function E(z,L,ae,pe){let _e=1;if((z.width>pe||z.height>pe)&&(_e=pe/Math.max(z.width,z.height)),_e<1||L===!0)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap){const Ee=L?jw:Math.floor,V=Ee(_e*z.width),he=Ee(_e*z.height);T===void 0&&(T=w(V,he));const ne=ae?w(V,he):T;return ne.width=V,ne.height=he,ne.getContext("2d").drawImage(z,0,0,V,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+V+"x"+he+")."),ne}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),z;return z}function A(z){return yv(z.width)&&yv(z.height)}function D(z){return a?!1:z.wrapS!==bi||z.wrapT!==bi||z.minFilter!==Qt&&z.minFilter!==ui}function N(z,L){return z.generateMipmaps&&L&&z.minFilter!==Qt&&z.minFilter!==ui}function B(z){n.generateMipmap(z)}function k(z,L,ae,pe,_e=!1){if(a===!1)return L;if(z!==null){if(n[z]!==void 0)return n[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Ee=L;return L===6403&&(ae===5126&&(Ee=33326),ae===5131&&(Ee=33325),ae===5121&&(Ee=33321)),L===33319&&(ae===5126&&(Ee=33328),ae===5131&&(Ee=33327),ae===5121&&(Ee=33323)),L===6408&&(ae===5126&&(Ee=34836),ae===5131&&(Ee=34842),ae===5121&&(Ee=pe===bt&&_e===!1?35907:32856),ae===32819&&(Ee=32854),ae===32820&&(Ee=32855)),(Ee===33325||Ee===33326||Ee===33327||Ee===33328||Ee===34842||Ee===34836)&&e.get("EXT_color_buffer_float"),Ee}function R(z,L,ae){return N(z,ae)===!0||z.isFramebufferTexture&&z.minFilter!==Qt&&z.minFilter!==ui?Math.log2(Math.max(L.width,L.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?L.mipmaps.length:1}function O(z){return z===Qt||z===Xg||z===Zf?9728:9729}function se(z){const L=z.target;L.removeEventListener("dispose",se),Y(L),L.isVideoTexture&&_.delete(L)}function ue(z){const L=z.target;L.removeEventListener("dispose",ue),W(L)}function Y(z){const L=i.get(z);if(L.__webglInit===void 0)return;const ae=z.source,pe=b.get(ae);if(pe){const _e=pe[L.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&Z(z),Object.keys(pe).length===0&&b.delete(ae)}i.remove(z)}function Z(z){const L=i.get(z);n.deleteTexture(L.__webglTexture);const ae=z.source,pe=b.get(ae);delete pe[L.__cacheKey],l.memory.textures--}function W(z){const L=z.texture,ae=i.get(z),pe=i.get(L);if(pe.__webglTexture!==void 0&&(n.deleteTexture(pe.__webglTexture),l.memory.textures--),z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++)n.deleteFramebuffer(ae.__webglFramebuffer[_e]),ae.__webglDepthbuffer&&n.deleteRenderbuffer(ae.__webglDepthbuffer[_e]);else{if(n.deleteFramebuffer(ae.__webglFramebuffer),ae.__webglDepthbuffer&&n.deleteRenderbuffer(ae.__webglDepthbuffer),ae.__webglMultisampledFramebuffer&&n.deleteFramebuffer(ae.__webglMultisampledFramebuffer),ae.__webglColorRenderbuffer)for(let _e=0;_e<ae.__webglColorRenderbuffer.length;_e++)ae.__webglColorRenderbuffer[_e]&&n.deleteRenderbuffer(ae.__webglColorRenderbuffer[_e]);ae.__webglDepthRenderbuffer&&n.deleteRenderbuffer(ae.__webglDepthRenderbuffer)}if(z.isWebGLMultipleRenderTargets)for(let _e=0,Ee=L.length;_e<Ee;_e++){const V=i.get(L[_e]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),l.memory.textures--),i.remove(L[_e])}i.remove(L),i.remove(z)}let fe=0;function me(){fe=0}function j(){const z=fe;return z>=d&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+d),fe+=1,z}function J(z){const L=[];return L.push(z.wrapS),L.push(z.wrapT),L.push(z.wrapR||0),L.push(z.magFilter),L.push(z.minFilter),L.push(z.anisotropy),L.push(z.internalFormat),L.push(z.format),L.push(z.type),L.push(z.generateMipmaps),L.push(z.premultiplyAlpha),L.push(z.flipY),L.push(z.unpackAlignment),L.push(z.encoding),L.join()}function re(z,L){const ae=i.get(z);if(z.isVideoTexture&&_t(z),z.isRenderTargetTexture===!1&&z.version>0&&ae.__version!==z.version){const pe=z.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$e(ae,z,L);return}}t.bindTexture(3553,ae.__webglTexture,33984+L)}function Te(z,L){const ae=i.get(z);if(z.version>0&&ae.__version!==z.version){$e(ae,z,L);return}t.bindTexture(35866,ae.__webglTexture,33984+L)}function ge(z,L){const ae=i.get(z);if(z.version>0&&ae.__version!==z.version){$e(ae,z,L);return}t.bindTexture(32879,ae.__webglTexture,33984+L)}function oe(z,L){const ae=i.get(z);if(z.version>0&&ae.__version!==z.version){Ge(ae,z,L);return}t.bindTexture(34067,ae.__webglTexture,33984+L)}const q={[To]:10497,[bi]:33071,[Ih]:33648},we={[Qt]:9728,[Xg]:9984,[Zf]:9986,[ui]:9729,[Ew]:9985,[ll]:9987};function Me(z,L,ae){if(ae?(n.texParameteri(z,10242,q[L.wrapS]),n.texParameteri(z,10243,q[L.wrapT]),(z===32879||z===35866)&&n.texParameteri(z,32882,q[L.wrapR]),n.texParameteri(z,10240,we[L.magFilter]),n.texParameteri(z,10241,we[L.minFilter])):(n.texParameteri(z,10242,33071),n.texParameteri(z,10243,33071),(z===32879||z===35866)&&n.texParameteri(z,32882,33071),(L.wrapS!==bi||L.wrapT!==bi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(z,10240,O(L.magFilter)),n.texParameteri(z,10241,O(L.minFilter)),L.minFilter!==Qt&&L.minFilter!==ui&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const pe=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===Qt||L.minFilter!==Zf&&L.minFilter!==ll||L.type===go&&e.has("OES_texture_float_linear")===!1||a===!1&&L.type===ul&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||i.get(L).__currentAnisotropy)&&(n.texParameterf(z,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,r.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy)}}function te(z,L){let ae=!1;z.__webglInit===void 0&&(z.__webglInit=!0,L.addEventListener("dispose",se));const pe=L.source;let _e=b.get(pe);_e===void 0&&(_e={},b.set(pe,_e));const Ee=J(L);if(Ee!==z.__cacheKey){_e[Ee]===void 0&&(_e[Ee]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,ae=!0),_e[Ee].usedTimes++;const V=_e[z.__cacheKey];V!==void 0&&(_e[z.__cacheKey].usedTimes--,V.usedTimes===0&&Z(L)),z.__cacheKey=Ee,z.__webglTexture=_e[Ee].texture}return ae}function $e(z,L,ae){let pe=3553;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(pe=35866),L.isData3DTexture&&(pe=32879);const _e=te(z,L),Ee=L.source;t.bindTexture(pe,z.__webglTexture,33984+ae);const V=i.get(Ee);if(Ee.version!==V.__version||_e===!0){t.activeTexture(33984+ae),n.pixelStorei(37440,L.flipY),n.pixelStorei(37441,L.premultiplyAlpha),n.pixelStorei(3317,L.unpackAlignment),n.pixelStorei(37443,0);const he=D(L)&&A(L.image)===!1;let ne=E(L.image,he,!1,m);ne=jt(L,ne);const Ce=A(ne)||a,Le=o.convert(L.format,L.encoding);let ze=o.convert(L.type),De=k(L.internalFormat,Le,ze,L.encoding,L.isVideoTexture);Me(pe,L,Ce);let ke;const Xe=L.mipmaps,Je=a&&L.isVideoTexture!==!0,Pt=V.__version===void 0||_e===!0,H=R(L,ne,Ce);if(L.isDepthTexture)De=6402,a?L.type===go?De=36012:L.type===mo?De=33190:L.type===Ds?De=35056:De=33189:L.type===go&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===xo&&De===6402&&L.type!==Up&&L.type!==mo&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=mo,ze=o.convert(L.type)),L.format===Gs&&De===6402&&(De=34041,L.type!==Ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=Ds,ze=o.convert(L.type))),Pt&&(Je?t.texStorage2D(3553,1,De,ne.width,ne.height):t.texImage2D(3553,0,De,ne.width,ne.height,0,Le,ze,null));else if(L.isDataTexture)if(Xe.length>0&&Ce){Je&&Pt&&t.texStorage2D(3553,H,De,Xe[0].width,Xe[0].height);for(let le=0,ve=Xe.length;le<ve;le++)ke=Xe[le],Je?t.texSubImage2D(3553,le,0,0,ke.width,ke.height,Le,ze,ke.data):t.texImage2D(3553,le,De,ke.width,ke.height,0,Le,ze,ke.data);L.generateMipmaps=!1}else Je?(Pt&&t.texStorage2D(3553,H,De,ne.width,ne.height),t.texSubImage2D(3553,0,0,0,ne.width,ne.height,Le,ze,ne.data)):t.texImage2D(3553,0,De,ne.width,ne.height,0,Le,ze,ne.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Je&&Pt&&t.texStorage3D(35866,H,De,Xe[0].width,Xe[0].height,ne.depth);for(let le=0,ve=Xe.length;le<ve;le++)ke=Xe[le],L.format!==Ei?Le!==null?Je?t.compressedTexSubImage3D(35866,le,0,0,0,ke.width,ke.height,ne.depth,Le,ke.data,0,0):t.compressedTexImage3D(35866,le,De,ke.width,ke.height,ne.depth,0,ke.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(35866,le,0,0,0,ke.width,ke.height,ne.depth,Le,ze,ke.data):t.texImage3D(35866,le,De,ke.width,ke.height,ne.depth,0,Le,ze,ke.data)}else{Je&&Pt&&t.texStorage2D(3553,H,De,Xe[0].width,Xe[0].height);for(let le=0,ve=Xe.length;le<ve;le++)ke=Xe[le],L.format!==Ei?Le!==null?Je?t.compressedTexSubImage2D(3553,le,0,0,ke.width,ke.height,Le,ke.data):t.compressedTexImage2D(3553,le,De,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(3553,le,0,0,ke.width,ke.height,Le,ze,ke.data):t.texImage2D(3553,le,De,ke.width,ke.height,0,Le,ze,ke.data)}else if(L.isDataArrayTexture)Je?(Pt&&t.texStorage3D(35866,H,De,ne.width,ne.height,ne.depth),t.texSubImage3D(35866,0,0,0,0,ne.width,ne.height,ne.depth,Le,ze,ne.data)):t.texImage3D(35866,0,De,ne.width,ne.height,ne.depth,0,Le,ze,ne.data);else if(L.isData3DTexture)Je?(Pt&&t.texStorage3D(32879,H,De,ne.width,ne.height,ne.depth),t.texSubImage3D(32879,0,0,0,0,ne.width,ne.height,ne.depth,Le,ze,ne.data)):t.texImage3D(32879,0,De,ne.width,ne.height,ne.depth,0,Le,ze,ne.data);else if(L.isFramebufferTexture){if(Pt)if(Je)t.texStorage2D(3553,H,De,ne.width,ne.height);else{let le=ne.width,ve=ne.height;for(let Re=0;Re<H;Re++)t.texImage2D(3553,Re,De,le,ve,0,Le,ze,null),le>>=1,ve>>=1}}else if(Xe.length>0&&Ce){Je&&Pt&&t.texStorage2D(3553,H,De,Xe[0].width,Xe[0].height);for(let le=0,ve=Xe.length;le<ve;le++)ke=Xe[le],Je?t.texSubImage2D(3553,le,0,0,Le,ze,ke):t.texImage2D(3553,le,De,Le,ze,ke);L.generateMipmaps=!1}else Je?(Pt&&t.texStorage2D(3553,H,De,ne.width,ne.height),t.texSubImage2D(3553,0,0,0,Le,ze,ne)):t.texImage2D(3553,0,De,Le,ze,ne);N(L,Ce)&&B(pe),V.__version=Ee.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version}function Ge(z,L,ae){if(L.image.length!==6)return;const pe=te(z,L),_e=L.source;t.bindTexture(34067,z.__webglTexture,33984+ae);const Ee=i.get(_e);if(_e.version!==Ee.__version||pe===!0){t.activeTexture(33984+ae),n.pixelStorei(37440,L.flipY),n.pixelStorei(37441,L.premultiplyAlpha),n.pixelStorei(3317,L.unpackAlignment),n.pixelStorei(37443,0);const V=L.isCompressedTexture||L.image[0].isCompressedTexture,he=L.image[0]&&L.image[0].isDataTexture,ne=[];for(let le=0;le<6;le++)!V&&!he?ne[le]=E(L.image[le],!1,!0,h):ne[le]=he?L.image[le].image:L.image[le],ne[le]=jt(L,ne[le]);const Ce=ne[0],Le=A(Ce)||a,ze=o.convert(L.format,L.encoding),De=o.convert(L.type),ke=k(L.internalFormat,ze,De,L.encoding),Xe=a&&L.isVideoTexture!==!0,Je=Ee.__version===void 0||pe===!0;let Pt=R(L,Ce,Le);Me(34067,L,Le);let H;if(V){Xe&&Je&&t.texStorage2D(34067,Pt,ke,Ce.width,Ce.height);for(let le=0;le<6;le++){H=ne[le].mipmaps;for(let ve=0;ve<H.length;ve++){const Re=H[ve];L.format!==Ei?ze!==null?Xe?t.compressedTexSubImage2D(34069+le,ve,0,0,Re.width,Re.height,ze,Re.data):t.compressedTexImage2D(34069+le,ve,ke,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(34069+le,ve,0,0,Re.width,Re.height,ze,De,Re.data):t.texImage2D(34069+le,ve,ke,Re.width,Re.height,0,ze,De,Re.data)}}}else{H=L.mipmaps,Xe&&Je&&(H.length>0&&Pt++,t.texStorage2D(34067,Pt,ke,ne[0].width,ne[0].height));for(let le=0;le<6;le++)if(he){Xe?t.texSubImage2D(34069+le,0,0,0,ne[le].width,ne[le].height,ze,De,ne[le].data):t.texImage2D(34069+le,0,ke,ne[le].width,ne[le].height,0,ze,De,ne[le].data);for(let ve=0;ve<H.length;ve++){const Oe=H[ve].image[le].image;Xe?t.texSubImage2D(34069+le,ve+1,0,0,Oe.width,Oe.height,ze,De,Oe.data):t.texImage2D(34069+le,ve+1,ke,Oe.width,Oe.height,0,ze,De,Oe.data)}}else{Xe?t.texSubImage2D(34069+le,0,0,0,ze,De,ne[le]):t.texImage2D(34069+le,0,ke,ze,De,ne[le]);for(let ve=0;ve<H.length;ve++){const Re=H[ve];Xe?t.texSubImage2D(34069+le,ve+1,0,0,ze,De,Re.image[le]):t.texImage2D(34069+le,ve+1,ke,ze,De,Re.image[le])}}}N(L,Le)&&B(34067),Ee.__version=_e.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version}function be(z,L,ae,pe,_e){const Ee=o.convert(ae.format,ae.encoding),V=o.convert(ae.type),he=k(ae.internalFormat,Ee,V,ae.encoding);i.get(L).__hasExternalTextures||(_e===32879||_e===35866?t.texImage3D(_e,0,he,L.width,L.height,L.depth,0,Ee,V,null):t.texImage2D(_e,0,he,L.width,L.height,0,Ee,V,null)),t.bindFramebuffer(36160,z),st(L)?v.framebufferTexture2DMultisampleEXT(36160,pe,_e,i.get(ae).__webglTexture,0,mt(L)):(_e===3553||_e>=34069&&_e<=34074)&&n.framebufferTexture2D(36160,pe,_e,i.get(ae).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(z,L,ae){if(n.bindRenderbuffer(36161,z),L.depthBuffer&&!L.stencilBuffer){let pe=33189;if(ae||st(L)){const _e=L.depthTexture;_e&&_e.isDepthTexture&&(_e.type===go?pe=36012:_e.type===mo&&(pe=33190));const Ee=mt(L);st(L)?v.renderbufferStorageMultisampleEXT(36161,Ee,pe,L.width,L.height):n.renderbufferStorageMultisample(36161,Ee,pe,L.width,L.height)}else n.renderbufferStorage(36161,pe,L.width,L.height);n.framebufferRenderbuffer(36160,36096,36161,z)}else if(L.depthBuffer&&L.stencilBuffer){const pe=mt(L);ae&&st(L)===!1?n.renderbufferStorageMultisample(36161,pe,35056,L.width,L.height):st(L)?v.renderbufferStorageMultisampleEXT(36161,pe,35056,L.width,L.height):n.renderbufferStorage(36161,34041,L.width,L.height),n.framebufferRenderbuffer(36160,33306,36161,z)}else{const pe=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let _e=0;_e<pe.length;_e++){const Ee=pe[_e],V=o.convert(Ee.format,Ee.encoding),he=o.convert(Ee.type),ne=k(Ee.internalFormat,V,he,Ee.encoding),Ce=mt(L);ae&&st(L)===!1?n.renderbufferStorageMultisample(36161,Ce,ne,L.width,L.height):st(L)?v.renderbufferStorageMultisampleEXT(36161,Ce,ne,L.width,L.height):n.renderbufferStorage(36161,ne,L.width,L.height)}}n.bindRenderbuffer(36161,null)}function dt(z,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,z),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),re(L.depthTexture,0);const pe=i.get(L.depthTexture).__webglTexture,_e=mt(L);if(L.depthTexture.format===xo)st(L)?v.framebufferTexture2DMultisampleEXT(36160,36096,3553,pe,0,_e):n.framebufferTexture2D(36160,36096,3553,pe,0);else if(L.depthTexture.format===Gs)st(L)?v.framebufferTexture2DMultisampleEXT(36160,33306,3553,pe,0,_e):n.framebufferTexture2D(36160,33306,3553,pe,0);else throw new Error("Unknown depthTexture format")}function Fe(z){const L=i.get(z),ae=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!L.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");dt(L.__webglFramebuffer,z)}else if(ae){L.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(36160,L.__webglFramebuffer[pe]),L.__webglDepthbuffer[pe]=n.createRenderbuffer(),Be(L.__webglDepthbuffer[pe],z,!1)}else t.bindFramebuffer(36160,L.__webglFramebuffer),L.__webglDepthbuffer=n.createRenderbuffer(),Be(L.__webglDepthbuffer,z,!1);t.bindFramebuffer(36160,null)}function Qe(z,L,ae){const pe=i.get(z);L!==void 0&&be(pe.__webglFramebuffer,z,z.texture,36064,3553),ae!==void 0&&Fe(z)}function je(z){const L=z.texture,ae=i.get(z),pe=i.get(L);z.addEventListener("dispose",ue),z.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=L.version,l.memory.textures++);const _e=z.isWebGLCubeRenderTarget===!0,Ee=z.isWebGLMultipleRenderTargets===!0,V=A(z)||a;if(_e){ae.__webglFramebuffer=[];for(let he=0;he<6;he++)ae.__webglFramebuffer[he]=n.createFramebuffer()}else{if(ae.__webglFramebuffer=n.createFramebuffer(),Ee)if(r.drawBuffers){const he=z.texture;for(let ne=0,Ce=he.length;ne<Ce;ne++){const Le=i.get(he[ne]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&z.samples>0&&st(z)===!1){const he=Ee?L:[L];ae.__webglMultisampledFramebuffer=n.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer);for(let ne=0;ne<he.length;ne++){const Ce=he[ne];ae.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(36161,ae.__webglColorRenderbuffer[ne]);const Le=o.convert(Ce.format,Ce.encoding),ze=o.convert(Ce.type),De=k(Ce.internalFormat,Le,ze,Ce.encoding,z.isXRRenderTarget===!0),ke=mt(z);n.renderbufferStorageMultisample(36161,ke,De,z.width,z.height),n.framebufferRenderbuffer(36160,36064+ne,36161,ae.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(36161,null),z.depthBuffer&&(ae.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(ae.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(36160,null)}}if(_e){t.bindTexture(34067,pe.__webglTexture),Me(34067,L,V);for(let he=0;he<6;he++)be(ae.__webglFramebuffer[he],z,L,36064,34069+he);N(L,V)&&B(34067),t.unbindTexture()}else if(Ee){const he=z.texture;for(let ne=0,Ce=he.length;ne<Ce;ne++){const Le=he[ne],ze=i.get(Le);t.bindTexture(3553,ze.__webglTexture),Me(3553,Le,V),be(ae.__webglFramebuffer,z,Le,36064+ne,3553),N(Le,V)&&B(3553)}t.unbindTexture()}else{let he=3553;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(a?he=z.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,pe.__webglTexture),Me(he,L,V),be(ae.__webglFramebuffer,z,L,36064,he),N(L,V)&&B(he),t.unbindTexture()}z.depthBuffer&&Fe(z)}function Et(z){const L=A(z)||a,ae=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let pe=0,_e=ae.length;pe<_e;pe++){const Ee=ae[pe];if(N(Ee,L)){const V=z.isWebGLCubeRenderTarget?34067:3553,he=i.get(Ee).__webglTexture;t.bindTexture(V,he),B(V),t.unbindTexture()}}}function Ut(z){if(a&&z.samples>0&&st(z)===!1){const L=z.isWebGLMultipleRenderTargets?z.texture:[z.texture],ae=z.width,pe=z.height;let _e=16384;const Ee=[],V=z.stencilBuffer?33306:36096,he=i.get(z),ne=z.isWebGLMultipleRenderTargets===!0;if(ne)for(let Ce=0;Ce<L.length;Ce++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ce,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ce,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let Ce=0;Ce<L.length;Ce++){Ee.push(36064+Ce),z.depthBuffer&&Ee.push(V);const Le=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Le===!1&&(z.depthBuffer&&(_e|=256),z.stencilBuffer&&(_e|=1024)),ne&&n.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[Ce]),Le===!0&&(n.invalidateFramebuffer(36008,[V]),n.invalidateFramebuffer(36009,[V])),ne){const ze=i.get(L[Ce]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ze,0)}n.blitFramebuffer(0,0,ae,pe,0,0,ae,pe,_e,9728),x&&n.invalidateFramebuffer(36008,Ee)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ne)for(let Ce=0;Ce<L.length;Ce++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ce,36161,he.__webglColorRenderbuffer[Ce]);const Le=i.get(L[Ce]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ce,3553,Le,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function mt(z){return Math.min(y,z.samples)}function st(z){const L=i.get(z);return a&&z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function _t(z){const L=l.render.frame;_.get(z)!==L&&(_.set(z,L),z.update())}function jt(z,L){const ae=z.encoding,pe=z.format,_e=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||z.format===Oh||ae!==Po&&(ae===bt?a===!1?e.has("EXT_sRGB")===!0&&pe===Ei?(z.format=Oh,z.minFilter=ui,z.generateMipmaps=!1):L=Ox.sRGBToLinear(L):(pe!==Ei||_e!==Co)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ae)),L}this.allocateTextureUnit=j,this.resetTextureUnits=me,this.setTexture2D=re,this.setTexture2DArray=Te,this.setTexture3D=ge,this.setTextureCube=oe,this.rebindTextures=Qe,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=st}function NP(n,e,t){const i=t.isWebGL2;function r(o,l=null){let a;if(o===Co)return 5121;if(o===Aw)return 32819;if(o===Dw)return 32820;if(o===Tw)return 5120;if(o===Cw)return 5122;if(o===Up)return 5123;if(o===Pw)return 5124;if(o===mo)return 5125;if(o===go)return 5126;if(o===ul)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Rw)return 6406;if(o===Ei)return 6408;if(o===Lw)return 6409;if(o===Iw)return 6410;if(o===xo)return 6402;if(o===Gs)return 34041;if(o===Oh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Ow)return 6403;if(o===Uw)return 36244;if(o===kw)return 33319;if(o===Nw)return 33320;if(o===zw)return 36249;if(o===Qf||o===Jf||o===ed||o===td)if(l===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Qf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Jf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===ed)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===td)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Qf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Jf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===ed)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===td)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===qg||o===Yg||o===$g||o===Kg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===qg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Yg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===$g)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Kg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Fw)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Zg||o===Qg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Zg)return l===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Qg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Jg||o===ev||o===tv||o===nv||o===iv||o===rv||o===ov||o===sv||o===av||o===lv||o===uv||o===cv||o===fv||o===dv)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Jg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===ev)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===tv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===nv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===iv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===rv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===ov)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===sv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===av)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===lv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===uv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===cv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===fv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===dv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===nd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===nd)return l===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===Bw||o===hv||o===pv||o===mv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===nd)return a.COMPRESSED_RED_RGTC1_EXT;if(o===hv)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===pv)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===mv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Ds?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}class zP extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Uu extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FP={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,l=null;const a=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const T of e.hand.values()){const b=t.getJointPose(T,i),p=this._getHandJoint(h,T);b!==null&&(p.matrix.fromArray(b.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=b.radius),p.visible=b!==null}const m=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],v=m.position.distanceTo(y.position),x=.02,_=.005;h.inputState.pinching&&v>x+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FP)))}return a!==null&&(a.visible=r!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Uu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $x extends Wn{constructor(e,t,i,r,o,l,a,d,h,m){if(m=m!==void 0?m:xo,m!==xo&&m!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===xo&&(i=mo),i===void 0&&m===Gs&&(i=Ds),super(null,r,o,l,a,d,m,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=d!==void 0?d:Qt,this.flipY=!1,this.generateMipmaps=!1}}class BP extends Lo{constructor(e,t){super();const i=this;let r=null,o=1,l=null,a="local-floor",d=1,h=null,m=null,y=null,v=null,x=null,_=null;const T=t.getContextAttributes();let b=null,p=null;const w=[],E=[],A=new Set,D=new Map,N=new Nn;N.layers.enable(1),N.viewport=new Rt;const B=new Nn;B.layers.enable(2),B.viewport=new Rt;const k=[N,B],R=new zP;R.layers.enable(1),R.layers.enable(2);let O=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let q=w[oe];return q===void 0&&(q=new Td,w[oe]=q),q.getTargetRaySpace()},this.getControllerGrip=function(oe){let q=w[oe];return q===void 0&&(q=new Td,w[oe]=q),q.getGripSpace()},this.getHand=function(oe){let q=w[oe];return q===void 0&&(q=new Td,w[oe]=q),q.getHandSpace()};function ue(oe){const q=E.indexOf(oe.inputSource);if(q===-1)return;const we=w[q];we!==void 0&&we.dispatchEvent({type:oe.type,data:oe.inputSource})}function Y(){r.removeEventListener("select",ue),r.removeEventListener("selectstart",ue),r.removeEventListener("selectend",ue),r.removeEventListener("squeeze",ue),r.removeEventListener("squeezestart",ue),r.removeEventListener("squeezeend",ue),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",Z);for(let oe=0;oe<w.length;oe++){const q=E[oe];q!==null&&(E[oe]=null,w[oe].disconnect(q))}O=null,se=null,e.setRenderTarget(b),x=null,v=null,y=null,r=null,p=null,ge.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return y},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",ue),r.addEventListener("selectstart",ue),r.addEventListener("selectend",ue),r.addEventListener("squeeze",ue),r.addEventListener("squeezestart",ue),r.addEventListener("squeezeend",ue),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",Z),T.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?T.antialias:!0,alpha:T.alpha,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:x}),p=new en(x.framebufferWidth,x.framebufferHeight,{format:Ei,type:Co,encoding:e.outputEncoding,stencilBuffer:T.stencil})}else{let q=null,we=null,Me=null;T.depth&&(Me=T.stencil?35056:33190,q=T.stencil?Gs:xo,we=T.stencil?Ds:mo);const te={colorFormat:32856,depthFormat:Me,scaleFactor:o};y=new XRWebGLBinding(r,t),v=y.createProjectionLayer(te),r.updateRenderState({layers:[v]}),p=new en(v.textureWidth,v.textureHeight,{format:Ei,type:Co,depthTexture:new $x(v.textureWidth,v.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:T.stencil,encoding:e.outputEncoding,samples:T.antialias?4:0});const $e=e.properties.get(p);$e.__ignoreDepthValues=v.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(d),h=null,l=await r.requestReferenceSpace(a),ge.setContext(r),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function Z(oe){for(let q=0;q<oe.removed.length;q++){const we=oe.removed[q],Me=E.indexOf(we);Me>=0&&(E[Me]=null,w[Me].disconnect(we))}for(let q=0;q<oe.added.length;q++){const we=oe.added[q];let Me=E.indexOf(we);if(Me===-1){for(let $e=0;$e<w.length;$e++)if($e>=E.length){E.push(we),Me=$e;break}else if(E[$e]===null){E[$e]=we,Me=$e;break}if(Me===-1)break}const te=w[Me];te&&te.connect(we)}}const W=new X,fe=new X;function me(oe,q,we){W.setFromMatrixPosition(q.matrixWorld),fe.setFromMatrixPosition(we.matrixWorld);const Me=W.distanceTo(fe),te=q.projectionMatrix.elements,$e=we.projectionMatrix.elements,Ge=te[14]/(te[10]-1),be=te[14]/(te[10]+1),Be=(te[9]+1)/te[5],dt=(te[9]-1)/te[5],Fe=(te[8]-1)/te[0],Qe=($e[8]+1)/$e[0],je=Ge*Fe,Et=Ge*Qe,Ut=Me/(-Fe+Qe),mt=Ut*-Fe;q.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(mt),oe.translateZ(Ut),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert();const st=Ge+Ut,_t=be+Ut,jt=je-mt,z=Et+(Me-mt),L=Be*be/_t*st,ae=dt*be/_t*st;oe.projectionMatrix.makePerspective(jt,z,L,ae,st,_t),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}function j(oe,q){q===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(q.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;R.near=B.near=N.near=oe.near,R.far=B.far=N.far=oe.far,(O!==R.near||se!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),O=R.near,se=R.far);const q=oe.parent,we=R.cameras;j(R,q);for(let Me=0;Me<we.length;Me++)j(we[Me],q);we.length===2?me(R,N,B):R.projectionMatrix.copy(N.projectionMatrix),J(oe,R,q)};function J(oe,q,we){we===null?oe.matrix.copy(q.matrixWorld):(oe.matrix.copy(we.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(q.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0);const Me=oe.children;for(let te=0,$e=Me.length;te<$e;te++)Me[te].updateMatrixWorld(!0);oe.projectionMatrix.copy(q.projectionMatrix),oe.projectionMatrixInverse.copy(q.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=wc*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(oe){d=oe,v!==null&&(v.fixedFoveation=oe),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=oe)},this.getPlanes=function(){return A};let re=null;function Te(oe,q){if(m=q.getViewerPose(h||l),_=q,m!==null){const we=m.views;x!==null&&(e.setRenderTargetFramebuffer(p,x.framebuffer),e.setRenderTarget(p));let Me=!1;we.length!==R.cameras.length&&(R.cameras.length=0,Me=!0);for(let te=0;te<we.length;te++){const $e=we[te];let Ge=null;if(x!==null)Ge=x.getViewport($e);else{const Be=y.getViewSubImage(v,$e);Ge=Be.viewport,te===0&&(e.setRenderTargetTextures(p,Be.colorTexture,v.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(p))}let be=k[te];be===void 0&&(be=new Nn,be.layers.enable(te),be.viewport=new Rt,k[te]=be),be.matrix.fromArray($e.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray($e.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),te===0&&(R.matrix.copy(be.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Me===!0&&R.cameras.push(be)}}for(let we=0;we<w.length;we++){const Me=E[we],te=w[we];Me!==null&&te!==void 0&&te.update(Me,q,h||l)}if(re&&re(oe,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let we=null;for(const Me of A)q.detectedPlanes.has(Me)||(we===null&&(we=[]),we.push(Me));if(we!==null)for(const Me of we)A.delete(Me),D.delete(Me),i.dispatchEvent({type:"planeremoved",data:Me});for(const Me of q.detectedPlanes)if(!A.has(Me))A.add(Me),D.set(Me,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:Me});else{const te=D.get(Me);Me.lastChangedTime>te&&(D.set(Me,Me.lastChangedTime),i.dispatchEvent({type:"planechanged",data:Me}))}}_=null}const ge=new Wx;ge.setAnimationLoop(Te),this.setAnimationLoop=function(oe){re=oe},this.dispose=function(){}}}function VP(n,e){function t(b,p){b.matrixAutoUpdate===!0&&b.updateMatrix(),p.value.copy(b.matrix)}function i(b,p){p.color.getRGB(b.fogColor.value,Vx(n)),p.isFog?(b.fogNear.value=p.near,b.fogFar.value=p.far):p.isFogExp2&&(b.fogDensity.value=p.density)}function r(b,p,w,E,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(b,p):p.isMeshToonMaterial?(o(b,p),y(b,p)):p.isMeshPhongMaterial?(o(b,p),m(b,p)):p.isMeshStandardMaterial?(o(b,p),v(b,p),p.isMeshPhysicalMaterial&&x(b,p,A)):p.isMeshMatcapMaterial?(o(b,p),_(b,p)):p.isMeshDepthMaterial?o(b,p):p.isMeshDistanceMaterial?(o(b,p),T(b,p)):p.isMeshNormalMaterial?o(b,p):p.isLineBasicMaterial?(l(b,p),p.isLineDashedMaterial&&a(b,p)):p.isPointsMaterial?d(b,p,w,E):p.isSpriteMaterial?h(b,p):p.isShadowMaterial?(b.color.value.copy(p.color),b.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(b,p){b.opacity.value=p.opacity,p.color&&b.diffuse.value.copy(p.color),p.emissive&&b.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(b.map.value=p.map,t(p.map,b.mapTransform)),p.alphaMap&&(b.alphaMap.value=p.alphaMap,t(p.alphaMap,b.alphaMapTransform)),p.bumpMap&&(b.bumpMap.value=p.bumpMap,t(p.bumpMap,b.bumpMapTransform),b.bumpScale.value=p.bumpScale,p.side===Rn&&(b.bumpScale.value*=-1)),p.normalMap&&(b.normalMap.value=p.normalMap,t(p.normalMap,b.normalMapTransform),b.normalScale.value.copy(p.normalScale),p.side===Rn&&b.normalScale.value.negate()),p.displacementMap&&(b.displacementMap.value=p.displacementMap,t(p.displacementMap,b.displacementMapTransform),b.displacementScale.value=p.displacementScale,b.displacementBias.value=p.displacementBias),p.emissiveMap&&(b.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,b.emissiveMapTransform)),p.specularMap&&(b.specularMap.value=p.specularMap,t(p.specularMap,b.specularMapTransform)),p.alphaTest>0&&(b.alphaTest.value=p.alphaTest);const w=e.get(p).envMap;if(w&&(b.envMap.value=w,b.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=p.reflectivity,b.ior.value=p.ior,b.refractionRatio.value=p.refractionRatio),p.lightMap){b.lightMap.value=p.lightMap;const E=n.useLegacyLights===!0?Math.PI:1;b.lightMapIntensity.value=p.lightMapIntensity*E,t(p.lightMap,b.lightMapTransform)}p.aoMap&&(b.aoMap.value=p.aoMap,b.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,b.aoMapTransform))}function l(b,p){b.diffuse.value.copy(p.color),b.opacity.value=p.opacity,p.map&&(b.map.value=p.map,t(p.map,b.mapTransform))}function a(b,p){b.dashSize.value=p.dashSize,b.totalSize.value=p.dashSize+p.gapSize,b.scale.value=p.scale}function d(b,p,w,E){b.diffuse.value.copy(p.color),b.opacity.value=p.opacity,b.size.value=p.size*w,b.scale.value=E*.5,p.map&&(b.map.value=p.map,t(p.map,b.uvTransform)),p.alphaMap&&(b.alphaMap.value=p.alphaMap),p.alphaTest>0&&(b.alphaTest.value=p.alphaTest)}function h(b,p){b.diffuse.value.copy(p.color),b.opacity.value=p.opacity,b.rotation.value=p.rotation,p.map&&(b.map.value=p.map,t(p.map,b.mapTransform)),p.alphaMap&&(b.alphaMap.value=p.alphaMap),p.alphaTest>0&&(b.alphaTest.value=p.alphaTest)}function m(b,p){b.specular.value.copy(p.specular),b.shininess.value=Math.max(p.shininess,1e-4)}function y(b,p){p.gradientMap&&(b.gradientMap.value=p.gradientMap)}function v(b,p){b.metalness.value=p.metalness,p.metalnessMap&&(b.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,b.metalnessMapTransform)),b.roughness.value=p.roughness,p.roughnessMap&&(b.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,b.roughnessMapTransform)),e.get(p).envMap&&(b.envMapIntensity.value=p.envMapIntensity)}function x(b,p,w){b.ior.value=p.ior,p.sheen>0&&(b.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),b.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(b.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,b.sheenColorMapTransform)),p.sheenRoughnessMap&&(b.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,b.sheenRoughnessMapTransform))),p.clearcoat>0&&(b.clearcoat.value=p.clearcoat,b.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(b.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,b.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(b.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&b.clearcoatNormalScale.value.negate())),p.iridescence>0&&(b.iridescence.value=p.iridescence,b.iridescenceIOR.value=p.iridescenceIOR,b.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(b.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,b.iridescenceMapTransform)),p.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),p.transmission>0&&(b.transmission.value=p.transmission,b.transmissionSamplerMap.value=w.texture,b.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(b.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,b.transmissionMapTransform)),b.thickness.value=p.thickness,p.thicknessMap&&(b.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=p.attenuationDistance,b.attenuationColor.value.copy(p.attenuationColor)),b.specularIntensity.value=p.specularIntensity,b.specularColor.value.copy(p.specularColor),p.specularColorMap&&(b.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,b.specularColorMapTransform)),p.specularIntensityMap&&(b.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,b.specularIntensityMapTransform))}function _(b,p){p.matcap&&(b.matcap.value=p.matcap)}function T(b,p){const w=e.get(p).light;b.referencePosition.value.setFromMatrixPosition(w.matrixWorld),b.nearDistance.value=w.shadow.camera.near,b.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function GP(n,e,t,i){let r={},o={},l=[];const a=t.isWebGL2?n.getParameter(35375):0;function d(w,E){const A=E.program;i.uniformBlockBinding(w,A)}function h(w,E){let A=r[w.id];A===void 0&&(_(w),A=m(w),r[w.id]=A,w.addEventListener("dispose",b));const D=E.program;i.updateUBOMapping(w,D);const N=e.render.frame;o[w.id]!==N&&(v(w),o[w.id]=N)}function m(w){const E=y();w.__bindingPointIndex=E;const A=n.createBuffer(),D=w.__size,N=w.usage;return n.bindBuffer(35345,A),n.bufferData(35345,D,N),n.bindBuffer(35345,null),n.bindBufferBase(35345,E,A),A}function y(){for(let w=0;w<a;w++)if(l.indexOf(w)===-1)return l.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const E=r[w.id],A=w.uniforms,D=w.__cache;n.bindBuffer(35345,E);for(let N=0,B=A.length;N<B;N++){const k=A[N];if(x(k,N,D)===!0){const R=k.__offset,O=Array.isArray(k.value)?k.value:[k.value];let se=0;for(let ue=0;ue<O.length;ue++){const Y=O[ue],Z=T(Y);typeof Y=="number"?(k.__data[0]=Y,n.bufferSubData(35345,R+se,k.__data)):Y.isMatrix3?(k.__data[0]=Y.elements[0],k.__data[1]=Y.elements[1],k.__data[2]=Y.elements[2],k.__data[3]=Y.elements[0],k.__data[4]=Y.elements[3],k.__data[5]=Y.elements[4],k.__data[6]=Y.elements[5],k.__data[7]=Y.elements[0],k.__data[8]=Y.elements[6],k.__data[9]=Y.elements[7],k.__data[10]=Y.elements[8],k.__data[11]=Y.elements[0]):(Y.toArray(k.__data,se),se+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,R,k.__data)}}n.bindBuffer(35345,null)}function x(w,E,A){const D=w.value;if(A[E]===void 0){if(typeof D=="number")A[E]=D;else{const N=Array.isArray(D)?D:[D],B=[];for(let k=0;k<N.length;k++)B.push(N[k].clone());A[E]=B}return!0}else if(typeof D=="number"){if(A[E]!==D)return A[E]=D,!0}else{const N=Array.isArray(A[E])?A[E]:[A[E]],B=Array.isArray(D)?D:[D];for(let k=0;k<N.length;k++){const R=N[k];if(R.equals(B[k])===!1)return R.copy(B[k]),!0}}return!1}function _(w){const E=w.uniforms;let A=0;const D=16;let N=0;for(let B=0,k=E.length;B<k;B++){const R=E[B],O={boundary:0,storage:0},se=Array.isArray(R.value)?R.value:[R.value];for(let ue=0,Y=se.length;ue<Y;ue++){const Z=se[ue],W=T(Z);O.boundary+=W.boundary,O.storage+=W.storage}if(R.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=A,B>0){N=A%D;const ue=D-N;N!==0&&ue-O.boundary<0&&(A+=D-N,R.__offset=A)}A+=O.storage}return N=A%D,N>0&&(A+=D-N),w.__size=A,w.__cache={},this}function T(w){const E={boundary:0,storage:0};return typeof w=="number"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function b(w){const E=w.target;E.removeEventListener("dispose",b);const A=l.indexOf(E.__bindingPointIndex);l.splice(A,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete o[E.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);l=[],r={},o={}}return{bind:d,update:h,dispose:p}}function HP(){const n=fl("canvas");return n.style.display="block",n}class Kx{constructor(e={}){const{canvas:t=HP(),context:i=null,depth:r=!0,stencil:o=!0,alpha:l=!1,antialias:a=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=l;let x=null,_=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Po,this.useLegacyLights=!0,this.toneMapping=Gi,this.toneMappingExposure=1;const p=this;let w=!1,E=0,A=0,D=null,N=-1,B=null;const k=new Rt,R=new Rt;let O=null,se=t.width,ue=t.height,Y=1,Z=null,W=null;const fe=new Rt(0,0,se,ue),me=new Rt(0,0,se,ue);let j=!1;const J=new Np;let re=!1,Te=!1,ge=null;const oe=new Gt,q=new X,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return D===null?Y:1}let te=i;function $e(U,Q){for(let ie=0;ie<U.length;ie++){const $=U[ie],de=t.getContext($,Q);if(de!==null)return de}return null}try{const U={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ip}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",Je,!1),te===null){const Q=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&Q.shift(),te=$e(Q,U),te===null)throw $e(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let Ge,be,Be,dt,Fe,Qe,je,Et,Ut,mt,st,_t,jt,z,L,ae,pe,_e,Ee,V,he,ne,Ce,Le;function ze(){Ge=new iC(te),be=new ZT(te,Ge,e),Ge.init(be),ne=new NP(te,Ge,be),Be=new UP(te,Ge,be),dt=new sC,Fe=new wP,Qe=new kP(te,Ge,Be,Fe,be,ne,dt),je=new JT(p),Et=new nC(p),Ut=new yb(te,be),Ce=new $T(te,Ge,Ut,be),mt=new rC(te,Ut,dt,Ce),st=new cC(te,mt,Ut,dt),Ee=new uC(te,be,Qe),ae=new QT(Fe),_t=new MP(p,je,Et,Ge,be,Ce,ae),jt=new VP(p,Fe),z=new EP,L=new RP(Ge,be),_e=new YT(p,je,Et,Be,st,v,d),pe=new OP(p,st,be),Le=new GP(te,dt,be,Be),V=new KT(te,Ge,dt,be),he=new oC(te,Ge,dt,be),dt.programs=_t.programs,p.capabilities=be,p.extensions=Ge,p.properties=Fe,p.renderLists=z,p.shadowMap=pe,p.state=Be,p.info=dt}ze();const De=new BP(p,te);this.xr=De,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const U=Ge.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Ge.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(U){U!==void 0&&(Y=U,this.setSize(se,ue,!1))},this.getSize=function(U){return U.set(se,ue)},this.setSize=function(U,Q,ie=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=U,ue=Q,t.width=Math.floor(U*Y),t.height=Math.floor(Q*Y),ie===!0&&(t.style.width=U+"px",t.style.height=Q+"px"),this.setViewport(0,0,U,Q)},this.getDrawingBufferSize=function(U){return U.set(se*Y,ue*Y).floor()},this.setDrawingBufferSize=function(U,Q,ie){se=U,ue=Q,Y=ie,t.width=Math.floor(U*ie),t.height=Math.floor(Q*ie),this.setViewport(0,0,U,Q)},this.getCurrentViewport=function(U){return U.copy(k)},this.getViewport=function(U){return U.copy(fe)},this.setViewport=function(U,Q,ie,$){U.isVector4?fe.set(U.x,U.y,U.z,U.w):fe.set(U,Q,ie,$),Be.viewport(k.copy(fe).multiplyScalar(Y).floor())},this.getScissor=function(U){return U.copy(me)},this.setScissor=function(U,Q,ie,$){U.isVector4?me.set(U.x,U.y,U.z,U.w):me.set(U,Q,ie,$),Be.scissor(R.copy(me).multiplyScalar(Y).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(U){Be.setScissorTest(j=U)},this.setOpaqueSort=function(U){Z=U},this.setTransparentSort=function(U){W=U},this.getClearColor=function(U){return U.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(U=!0,Q=!0,ie=!0){let $=0;U&&($|=16384),Q&&($|=256),ie&&($|=1024),te.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),z.dispose(),L.dispose(),Fe.dispose(),je.dispose(),Et.dispose(),st.dispose(),Ce.dispose(),Le.dispose(),_t.dispose(),De.dispose(),De.removeEventListener("sessionstart",Oe),De.removeEventListener("sessionend",St),ge&&(ge.dispose(),ge=null),yt.stop()};function ke(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Xe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const U=dt.autoReset,Q=pe.enabled,ie=pe.autoUpdate,$=pe.needsUpdate,de=pe.type;ze(),dt.autoReset=U,pe.enabled=Q,pe.autoUpdate=ie,pe.needsUpdate=$,pe.type=de}function Je(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Pt(U){const Q=U.target;Q.removeEventListener("dispose",Pt),H(Q)}function H(U){le(U),Fe.remove(U)}function le(U){const Q=Fe.get(U).programs;Q!==void 0&&(Q.forEach(function(ie){_t.releaseProgram(ie)}),U.isShaderMaterial&&_t.releaseShaderCache(U))}this.renderBufferDirect=function(U,Q,ie,$,de,Ve){Q===null&&(Q=we);const Ye=de.isMesh&&de.matrixWorld.determinant()<0,He=qe(U,Q,ie,$,de);Be.setMaterial($,Ye);let et=ie.index,it=1;$.wireframe===!0&&(et=mt.getWireframeAttribute(ie),it=2);const nt=ie.drawRange,rt=ie.attributes.position;let ht=nt.start*it,sn=(nt.start+nt.count)*it;Ve!==null&&(ht=Math.max(ht,Ve.start*it),sn=Math.min(sn,(Ve.start+Ve.count)*it)),et!==null?(ht=Math.max(ht,0),sn=Math.min(sn,et.count)):rt!=null&&(ht=Math.max(ht,0),sn=Math.min(sn,rt.count));const En=sn-ht;if(En<0||En===1/0)return;Ce.setup(de,$,He,ie,et);let Ri,Bt=V;if(et!==null&&(Ri=Ut.get(et),Bt=he,Bt.setIndex(Ri)),de.isMesh)$.wireframe===!0?(Be.setLineWidth($.wireframeLinewidth*Me()),Bt.setMode(1)):Bt.setMode(4);else if(de.isLine){let at=$.linewidth;at===void 0&&(at=1),Be.setLineWidth(at*Me()),de.isLineSegments?Bt.setMode(1):de.isLineLoop?Bt.setMode(2):Bt.setMode(3)}else de.isPoints?Bt.setMode(0):de.isSprite&&Bt.setMode(4);if(de.isInstancedMesh)Bt.renderInstances(ht,En,de.count);else if(ie.isInstancedBufferGeometry){const at=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,dr=Math.min(ie.instanceCount,at);Bt.renderInstances(ht,En,dr)}else Bt.render(ht,En)},this.compile=function(U,Q){function ie($,de,Ve){$.transparent===!0&&$.side===ir&&$.forceSinglePass===!1?($.side=Rn,$.needsUpdate=!0,Io($,de,Ve),$.side=Vr,$.needsUpdate=!0,Io($,de,Ve),$.side=ir):Io($,de,Ve)}_=L.get(U),_.init(),b.push(_),U.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),_.setupLights(p.useLegacyLights),U.traverse(function($){const de=$.material;if(de)if(Array.isArray(de))for(let Ve=0;Ve<de.length;Ve++){const Ye=de[Ve];ie(Ye,U,$)}else ie(de,U,$)}),b.pop(),_=null};let ve=null;function Re(U){ve&&ve(U)}function Oe(){yt.stop()}function St(){yt.start()}const yt=new Wx;yt.setAnimationLoop(Re),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(U){ve=U,De.setAnimationLoop(U),U===null?yt.stop():yt.start()},De.addEventListener("sessionstart",Oe),De.addEventListener("sessionend",St),this.render=function(U,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(Q),Q=De.getCamera()),U.isScene===!0&&U.onBeforeRender(p,U,Q,D),_=L.get(U,b.length),_.init(),b.push(_),oe.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),J.setFromProjectionMatrix(oe),Te=this.localClippingEnabled,re=ae.init(this.clippingPlanes,Te),x=z.get(U,T.length),x.init(),T.push(x),on(U,Q,0,p.sortObjects),x.finish(),p.sortObjects===!0&&x.sort(Z,W),re===!0&&ae.beginShadows();const ie=_.state.shadowsArray;if(pe.render(ie,U,Q),re===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),_e.render(x,U),_.setupLights(p.useLegacyLights),Q.isArrayCamera){const $=Q.cameras;for(let de=0,Ve=$.length;de<Ve;de++){const Ye=$[de];Xt(x,U,Ye,Ye.viewport)}}else Xt(x,U,Q);D!==null&&(Qe.updateMultisampleRenderTarget(D),Qe.updateRenderTargetMipmap(D)),U.isScene===!0&&U.onAfterRender(p,U,Q),Ce.resetDefaultState(),N=-1,B=null,b.pop(),b.length>0?_=b[b.length-1]:_=null,T.pop(),T.length>0?x=T[T.length-1]:x=null};function on(U,Q,ie,$){if(U.visible===!1)return;if(U.layers.test(Q.layers)){if(U.isGroup)ie=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Q);else if(U.isLight)_.pushLight(U),U.castShadow&&_.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||J.intersectsSprite(U)){$&&q.setFromMatrixPosition(U.matrixWorld).applyMatrix4(oe);const Ye=st.update(U),He=U.material;He.visible&&x.push(U,Ye,He,ie,q.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(U.isSkinnedMesh&&U.skeleton.frame!==dt.render.frame&&(U.skeleton.update(),U.skeleton.frame=dt.render.frame),!U.frustumCulled||J.intersectsObject(U))){$&&q.setFromMatrixPosition(U.matrixWorld).applyMatrix4(oe);const Ye=st.update(U),He=U.material;if(Array.isArray(He)){const et=Ye.groups;for(let it=0,nt=et.length;it<nt;it++){const rt=et[it],ht=He[rt.materialIndex];ht&&ht.visible&&x.push(U,Ye,ht,ie,q.z,rt)}}else He.visible&&x.push(U,Ye,He,ie,q.z,null)}}const Ve=U.children;for(let Ye=0,He=Ve.length;Ye<He;Ye++)on(Ve[Ye],Q,ie,$)}function Xt(U,Q,ie,$){const de=U.opaque,Ve=U.transmissive,Ye=U.transparent;_.setupLightsView(ie),re===!0&&ae.setGlobalState(p.clippingPlanes,ie),Ve.length>0&&gt(de,Ve,Q,ie),$&&Be.viewport(k.copy($)),de.length>0&&qt(de,Q,ie),Ve.length>0&&qt(Ve,Q,ie),Ye.length>0&&qt(Ye,Q,ie),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function gt(U,Q,ie,$){if(ge===null){const He=be.isWebGL2;ge=new en(1024,1024,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")?ul:Co,minFilter:ll,samples:He&&a===!0?4:0})}const de=p.getRenderTarget();p.setRenderTarget(ge),p.clear();const Ve=p.toneMapping;p.toneMapping=Gi,qt(U,ie,$),Qe.updateMultisampleRenderTarget(ge),Qe.updateRenderTargetMipmap(ge);let Ye=!1;for(let He=0,et=Q.length;He<et;He++){const it=Q[He],nt=it.object,rt=it.geometry,ht=it.material,sn=it.group;if(ht.side===ir&&nt.layers.test($.layers)){const En=ht.side;ht.side=Rn,ht.needsUpdate=!0,jn(nt,ie,$,rt,ht,sn),ht.side=En,ht.needsUpdate=!0,Ye=!0}}Ye===!0&&(Qe.updateMultisampleRenderTarget(ge),Qe.updateRenderTargetMipmap(ge)),p.setRenderTarget(de),p.toneMapping=Ve}function qt(U,Q,ie){const $=Q.isScene===!0?Q.overrideMaterial:null;for(let de=0,Ve=U.length;de<Ve;de++){const Ye=U[de],He=Ye.object,et=Ye.geometry,it=$===null?Ye.material:$,nt=Ye.group;He.layers.test(ie.layers)&&jn(He,Q,ie,et,it,nt)}}function jn(U,Q,ie,$,de,Ve){U.onBeforeRender(p,Q,ie,$,de,Ve),U.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),de.onBeforeRender(p,Q,ie,$,U,Ve),de.transparent===!0&&de.side===ir&&de.forceSinglePass===!1?(de.side=Rn,de.needsUpdate=!0,p.renderBufferDirect(ie,Q,$,de,U,Ve),de.side=Vr,de.needsUpdate=!0,p.renderBufferDirect(ie,Q,$,de,U,Ve),de.side=ir):p.renderBufferDirect(ie,Q,$,de,U,Ve),U.onAfterRender(p,Q,ie,$,de,Ve)}function Io(U,Q,ie){Q.isScene!==!0&&(Q=we);const $=Fe.get(U),de=_.state.lights,Ve=_.state.shadowsArray,Ye=de.state.version,He=_t.getParameters(U,de.state,Ve,Q,ie),et=_t.getProgramCacheKey(He);let it=$.programs;$.environment=U.isMeshStandardMaterial?Q.environment:null,$.fog=Q.fog,$.envMap=(U.isMeshStandardMaterial?Et:je).get(U.envMap||$.environment),it===void 0&&(U.addEventListener("dispose",Pt),it=new Map,$.programs=it);let nt=it.get(et);if(nt!==void 0){if($.currentProgram===nt&&$.lightsStateVersion===Ye)return ni(U,He),nt}else He.uniforms=_t.getUniforms(U),U.onBuild(ie,He,p),U.onBeforeCompile(He,p),nt=_t.acquireProgram(He,et),it.set(et,nt),$.uniforms=He.uniforms;const rt=$.uniforms;(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(rt.clippingPlanes=ae.uniform),ni(U,He),$.needsLights=Yr(U),$.lightsStateVersion=Ye,$.needsLights&&(rt.ambientLightColor.value=de.state.ambient,rt.lightProbe.value=de.state.probe,rt.directionalLights.value=de.state.directional,rt.directionalLightShadows.value=de.state.directionalShadow,rt.spotLights.value=de.state.spot,rt.spotLightShadows.value=de.state.spotShadow,rt.rectAreaLights.value=de.state.rectArea,rt.ltc_1.value=de.state.rectAreaLTC1,rt.ltc_2.value=de.state.rectAreaLTC2,rt.pointLights.value=de.state.point,rt.pointLightShadows.value=de.state.pointShadow,rt.hemisphereLights.value=de.state.hemi,rt.directionalShadowMap.value=de.state.directionalShadowMap,rt.directionalShadowMatrix.value=de.state.directionalShadowMatrix,rt.spotShadowMap.value=de.state.spotShadowMap,rt.spotLightMatrix.value=de.state.spotLightMatrix,rt.spotLightMap.value=de.state.spotLightMap,rt.pointShadowMap.value=de.state.pointShadowMap,rt.pointShadowMatrix.value=de.state.pointShadowMatrix);const ht=nt.getUniforms(),sn=$u.seqWithValue(ht.seq,rt);return $.currentProgram=nt,$.uniformsList=sn,nt}function ni(U,Q){const ie=Fe.get(U);ie.outputEncoding=Q.outputEncoding,ie.instancing=Q.instancing,ie.skinning=Q.skinning,ie.morphTargets=Q.morphTargets,ie.morphNormals=Q.morphNormals,ie.morphColors=Q.morphColors,ie.morphTargetsCount=Q.morphTargetsCount,ie.numClippingPlanes=Q.numClippingPlanes,ie.numIntersection=Q.numClipIntersection,ie.vertexAlphas=Q.vertexAlphas,ie.vertexTangents=Q.vertexTangents,ie.toneMapping=Q.toneMapping}function qe(U,Q,ie,$,de){Q.isScene!==!0&&(Q=we),Qe.resetTextureUnits();const Ve=Q.fog,Ye=$.isMeshStandardMaterial?Q.environment:null,He=D===null?p.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:Po,et=($.isMeshStandardMaterial?Et:je).get($.envMap||Ye),it=$.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,nt=!!$.normalMap&&!!ie.attributes.tangent,rt=!!ie.morphAttributes.position,ht=!!ie.morphAttributes.normal,sn=!!ie.morphAttributes.color,En=$.toneMapped?p.toneMapping:Gi,Ri=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Bt=Ri!==void 0?Ri.length:0,at=Fe.get($),dr=_.state.lights;if(re===!0&&(Te===!0||U!==B)){const Tn=U===B&&$.id===N;ae.setState($,U,Tn)}let Yt=!1;$.version===at.__version?(at.needsLights&&at.lightsStateVersion!==dr.state.version||at.outputEncoding!==He||de.isInstancedMesh&&at.instancing===!1||!de.isInstancedMesh&&at.instancing===!0||de.isSkinnedMesh&&at.skinning===!1||!de.isSkinnedMesh&&at.skinning===!0||at.envMap!==et||$.fog===!0&&at.fog!==Ve||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==ae.numPlanes||at.numIntersection!==ae.numIntersection)||at.vertexAlphas!==it||at.vertexTangents!==nt||at.morphTargets!==rt||at.morphNormals!==ht||at.morphColors!==sn||at.toneMapping!==En||be.isWebGL2===!0&&at.morphTargetsCount!==Bt)&&(Yt=!0):(Yt=!0,at.__version=$.version);let ii=at.currentProgram;Yt===!0&&(ii=Io($,Q,de));let Uo=!1,$r=!1,Zs=!1;const Ht=ii.getUniforms(),Hi=at.uniforms;if(Be.useProgram(ii.program)&&(Uo=!0,$r=!0,Zs=!0),$.id!==N&&(N=$.id,$r=!0),Uo||B!==U){if(Ht.setValue(te,"projectionMatrix",U.projectionMatrix),be.logarithmicDepthBuffer&&Ht.setValue(te,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),B!==U&&(B=U,$r=!0,Zs=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const Tn=Ht.map.cameraPosition;Tn!==void 0&&Tn.setValue(te,q.setFromMatrixPosition(U.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ht.setValue(te,"isOrthographic",U.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||de.isSkinnedMesh)&&Ht.setValue(te,"viewMatrix",U.matrixWorldInverse)}if(de.isSkinnedMesh){Ht.setOptional(te,de,"bindMatrix"),Ht.setOptional(te,de,"bindMatrixInverse");const Tn=de.skeleton;Tn&&(be.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ht.setValue(te,"boneTexture",Tn.boneTexture,Qe),Ht.setValue(te,"boneTextureSize",Tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const mi=ie.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0&&be.isWebGL2===!0)&&Ee.update(de,ie,ii),($r||at.receiveShadow!==de.receiveShadow)&&(at.receiveShadow=de.receiveShadow,Ht.setValue(te,"receiveShadow",de.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Hi.envMap.value=et,Hi.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),$r&&(Ht.setValue(te,"toneMappingExposure",p.toneMappingExposure),at.needsLights&&Oo(Hi,Zs),Ve&&$.fog===!0&&jt.refreshFogUniforms(Hi,Ve),jt.refreshMaterialUniforms(Hi,$,Y,ue,ge),$u.upload(te,at.uniformsList,Hi,Qe)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&($u.upload(te,at.uniformsList,Hi,Qe),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ht.setValue(te,"center",de.center),Ht.setValue(te,"modelViewMatrix",de.modelViewMatrix),Ht.setValue(te,"normalMatrix",de.normalMatrix),Ht.setValue(te,"modelMatrix",de.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Tn=$.uniformsGroups;for(let Qs=0,Cl=Tn.length;Qs<Cl;Qs++)if(be.isWebGL2){const Pl=Tn[Qs];Le.update(Pl,ii),Le.bind(Pl,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function Oo(U,Q){U.ambientLightColor.needsUpdate=Q,U.lightProbe.needsUpdate=Q,U.directionalLights.needsUpdate=Q,U.directionalLightShadows.needsUpdate=Q,U.pointLights.needsUpdate=Q,U.pointLightShadows.needsUpdate=Q,U.spotLights.needsUpdate=Q,U.spotLightShadows.needsUpdate=Q,U.rectAreaLights.needsUpdate=Q,U.hemisphereLights.needsUpdate=Q}function Yr(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(U,Q,ie){Fe.get(U.texture).__webglTexture=Q,Fe.get(U.depthTexture).__webglTexture=ie;const $=Fe.get(U);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=ie===void 0,$.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,Q){const ie=Fe.get(U);ie.__webglFramebuffer=Q,ie.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(U,Q=0,ie=0){D=U,E=Q,A=ie;let $=!0,de=null,Ve=!1,Ye=!1;if(U){const et=Fe.get(U);et.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(36160,null),$=!1):et.__webglFramebuffer===void 0?Qe.setupRenderTarget(U):et.__hasExternalTextures&&Qe.rebindTextures(U,Fe.get(U.texture).__webglTexture,Fe.get(U.depthTexture).__webglTexture);const it=U.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ye=!0);const nt=Fe.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(de=nt[Q],Ve=!0):be.isWebGL2&&U.samples>0&&Qe.useMultisampledRTT(U)===!1?de=Fe.get(U).__webglMultisampledFramebuffer:de=nt,k.copy(U.viewport),R.copy(U.scissor),O=U.scissorTest}else k.copy(fe).multiplyScalar(Y).floor(),R.copy(me).multiplyScalar(Y).floor(),O=j;if(Be.bindFramebuffer(36160,de)&&be.drawBuffers&&$&&Be.drawBuffers(U,de),Be.viewport(k),Be.scissor(R),Be.setScissorTest(O),Ve){const et=Fe.get(U.texture);te.framebufferTexture2D(36160,36064,34069+Q,et.__webglTexture,ie)}else if(Ye){const et=Fe.get(U.texture),it=Q||0;te.framebufferTextureLayer(36160,36064,et.__webglTexture,ie||0,it)}N=-1},this.readRenderTargetPixels=function(U,Q,ie,$,de,Ve,Ye){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Fe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ye!==void 0&&(He=He[Ye]),He){Be.bindFramebuffer(36160,He);try{const et=U.texture,it=et.format,nt=et.type;if(it!==Ei&&ne.convert(it)!==te.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=nt===ul&&(Ge.has("EXT_color_buffer_half_float")||be.isWebGL2&&Ge.has("EXT_color_buffer_float"));if(nt!==Co&&ne.convert(nt)!==te.getParameter(35738)&&!(nt===go&&(be.isWebGL2||Ge.has("OES_texture_float")||Ge.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=U.width-$&&ie>=0&&ie<=U.height-de&&te.readPixels(Q,ie,$,de,ne.convert(it),ne.convert(nt),Ve)}finally{const et=D!==null?Fe.get(D).__webglFramebuffer:null;Be.bindFramebuffer(36160,et)}}},this.copyFramebufferToTexture=function(U,Q,ie=0){const $=Math.pow(2,-ie),de=Math.floor(Q.image.width*$),Ve=Math.floor(Q.image.height*$);Qe.setTexture2D(Q,0),te.copyTexSubImage2D(3553,ie,0,0,U.x,U.y,de,Ve),Be.unbindTexture()},this.copyTextureToTexture=function(U,Q,ie,$=0){const de=Q.image.width,Ve=Q.image.height,Ye=ne.convert(ie.format),He=ne.convert(ie.type);Qe.setTexture2D(ie,0),te.pixelStorei(37440,ie.flipY),te.pixelStorei(37441,ie.premultiplyAlpha),te.pixelStorei(3317,ie.unpackAlignment),Q.isDataTexture?te.texSubImage2D(3553,$,U.x,U.y,de,Ve,Ye,He,Q.image.data):Q.isCompressedTexture?te.compressedTexSubImage2D(3553,$,U.x,U.y,Q.mipmaps[0].width,Q.mipmaps[0].height,Ye,Q.mipmaps[0].data):te.texSubImage2D(3553,$,U.x,U.y,Ye,He,Q.image),$===0&&ie.generateMipmaps&&te.generateMipmap(3553),Be.unbindTexture()},this.copyTextureToTexture3D=function(U,Q,ie,$,de=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=U.max.x-U.min.x+1,Ye=U.max.y-U.min.y+1,He=U.max.z-U.min.z+1,et=ne.convert($.format),it=ne.convert($.type);let nt;if($.isData3DTexture)Qe.setTexture3D($,0),nt=32879;else if($.isDataArrayTexture)Qe.setTexture2DArray($,0),nt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(37440,$.flipY),te.pixelStorei(37441,$.premultiplyAlpha),te.pixelStorei(3317,$.unpackAlignment);const rt=te.getParameter(3314),ht=te.getParameter(32878),sn=te.getParameter(3316),En=te.getParameter(3315),Ri=te.getParameter(32877),Bt=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;te.pixelStorei(3314,Bt.width),te.pixelStorei(32878,Bt.height),te.pixelStorei(3316,U.min.x),te.pixelStorei(3315,U.min.y),te.pixelStorei(32877,U.min.z),ie.isDataTexture||ie.isData3DTexture?te.texSubImage3D(nt,de,Q.x,Q.y,Q.z,Ve,Ye,He,et,it,Bt.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),te.compressedTexSubImage3D(nt,de,Q.x,Q.y,Q.z,Ve,Ye,He,et,Bt.data)):te.texSubImage3D(nt,de,Q.x,Q.y,Q.z,Ve,Ye,He,et,it,Bt),te.pixelStorei(3314,rt),te.pixelStorei(32878,ht),te.pixelStorei(3316,sn),te.pixelStorei(3315,En),te.pixelStorei(32877,Ri),de===0&&$.generateMipmaps&&te.generateMipmap(nt),Be.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?Qe.setTextureCube(U,0):U.isData3DTexture?Qe.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Qe.setTexture2DArray(U,0):Qe.setTexture2D(U,0),Be.unbindTexture()},this.resetState=function(){E=0,A=0,D=null,Be.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class WP extends Kx{}WP.prototype.isWebGL1Renderer=!0;class Zx extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ls extends Pi{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Fp extends Di{constructor(e=1,t=1,i=1,r=32,o=1,l=!1,a=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:a,thetaLength:d};const h=this;r=Math.floor(r),o=Math.floor(o);const m=[],y=[],v=[],x=[];let _=0;const T=[],b=i/2;let p=0;w(),l===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(m),this.setAttribute("position",new Ln(y,3)),this.setAttribute("normal",new Ln(v,3)),this.setAttribute("uv",new Ln(x,2));function w(){const A=new X,D=new X;let N=0;const B=(t-e)/i;for(let k=0;k<=o;k++){const R=[],O=k/o,se=O*(t-e)+e;for(let ue=0;ue<=r;ue++){const Y=ue/r,Z=Y*d+a,W=Math.sin(Z),fe=Math.cos(Z);D.x=se*W,D.y=-O*i+b,D.z=se*fe,y.push(D.x,D.y,D.z),A.set(W,B,fe).normalize(),v.push(A.x,A.y,A.z),x.push(Y,1-O),R.push(_++)}T.push(R)}for(let k=0;k<r;k++)for(let R=0;R<o;R++){const O=T[R][k],se=T[R+1][k],ue=T[R+1][k+1],Y=T[R][k+1];m.push(O,se,Y),m.push(se,ue,Y),N+=6}h.addGroup(p,N,0),p+=N}function E(A){const D=_,N=new Ue,B=new X;let k=0;const R=A===!0?e:t,O=A===!0?1:-1;for(let ue=1;ue<=r;ue++)y.push(0,b*O,0),v.push(0,O,0),x.push(.5,.5),_++;const se=_;for(let ue=0;ue<=r;ue++){const Z=ue/r*d+a,W=Math.cos(Z),fe=Math.sin(Z);B.x=R*fe,B.y=b*O,B.z=R*W,y.push(B.x,B.y,B.z),v.push(0,O,0),N.x=W*.5+.5,N.y=fe*.5*O+.5,x.push(N.x,N.y),_++}for(let ue=0;ue<r;ue++){const Y=D+ue,Z=se+ue;A===!0?m.push(Z,Z+1,Y):m.push(Z+1,Z,Y),k+=3}h.addGroup(p,k,A===!0?1:2),p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qc extends Di{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,l=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:l,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(l+a,Math.PI);let h=0;const m=[],y=new X,v=new X,x=[],_=[],T=[],b=[];for(let p=0;p<=i;p++){const w=[],E=p/i;let A=0;p===0&&l===0?A=.5/t:p===i&&d===Math.PI&&(A=-.5/t);for(let D=0;D<=t;D++){const N=D/t;y.x=-e*Math.cos(r+N*o)*Math.sin(l+E*a),y.y=e*Math.cos(l+E*a),y.z=e*Math.sin(r+N*o)*Math.sin(l+E*a),_.push(y.x,y.y,y.z),v.copy(y).normalize(),T.push(v.x,v.y,v.z),b.push(N+A,1-E),w.push(h++)}m.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const E=m[p][w+1],A=m[p][w],D=m[p+1][w],N=m[p+1][w+1];(p!==0||l>0)&&x.push(E,A,N),(p!==i-1||d<Math.PI)&&x.push(A,D,N)}this.setIndex(x),this.setAttribute("position",new Ln(_,3)),this.setAttribute("normal",new Ln(T,3)),this.setAttribute("uv",new Ln(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jP extends Xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class t0 extends jP{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ss extends Xr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qx extends Xr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class XP extends Xr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const n0={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class qP{constructor(e,t,i){const r=this;let o=!1,l=0,a=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){a++,o===!1&&r.onStart!==void 0&&r.onStart(m,l,a),o=!0},this.itemEnd=function(m){l++,r.onProgress!==void 0&&r.onProgress(m,l,a),l===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,y){return h.push(m,y),this},this.removeHandler=function(m){const y=h.indexOf(m);return y!==-1&&h.splice(y,2),this},this.getHandler=function(m){for(let y=0,v=h.length;y<v;y+=2){const x=h[y],_=h[y+1];if(x.global&&(x.lastIndex=0),x.test(m))return _}return null}}}const YP=new qP;class Jx{constructor(e){this.manager=e!==void 0?e:YP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class $P extends Jx{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=n0.get(e);if(l!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0),l;const a=fl("img");function d(){m(),n0.add(e,this),t&&t(this),o.manager.itemEnd(e)}function h(y){m(),r&&r(y),o.manager.itemError(e),o.manager.itemEnd(e)}function m(){a.removeEventListener("load",d,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",d,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class KP extends Jx{constructor(e){super(e)}load(e,t,i,r){const o=new Wn,l=new $P(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class Tl extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class ZP extends Tl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Cd=new Gt,i0=new X,r0=new X;class Bp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Np,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;i0.setFromMatrixPosition(e.matrixWorld),t.position.copy(i0),r0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(r0),t.updateMatrixWorld(),Cd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class QP extends Bp{constructor(){super(new Nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=wc*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(i!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Pd extends Tl{constructor(e,t,i=0,r=Math.PI/3,o=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=i,this.angle=r,this.penumbra=o,this.decay=l,this.map=null,this.shadow=new QP}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const o0=new Gt,Ta=new X,Ad=new X;class JP extends Bp{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Ta.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ta),Ad.copy(i.position),Ad.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ad),i.updateMatrixWorld(),r.makeTranslation(-Ta.x,-Ta.y,-Ta.z),o0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o0)}}class as extends Tl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new JP}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class e2 extends Bp{constructor(){super(new jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class t2 extends Tl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new e2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ca extends Tl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class e_ extends Di{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class n2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=s0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=s0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function s0(){return(typeof performance>"u"?Date:performance).now()}class a0{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(wn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ip}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ip);const i2=n=>{const{camera:e,composer:t}=n,i=1,r=window.innerWidth*i,o=window.innerHeight*i,l=t.renderer.domElement;if(l.width!==r||l.height!==o){e.aspect=r/o,e.zoom=Math.min(1,r/o),e.updateProjectionMatrix(),t.renderer.setSize(r,o),t.setSize(r,o);const a=t.renderer.getPixelRatio();t.setPixelRatio(a);const d=r*a,h=o*a;t.passes.forEach(m=>{var y,v;if((v=(y=m.material)==null?void 0:y.uniforms)!=null&&v.resolution){let x=d,_=h;m.material.uniforms.resolution.value.x<=1&&(x=1/x,_=1/_),m.material.uniforms.resolution.value.x=x,m.material.uniforms.resolution.value.y=_}m.resolution&&(m.resolution=new Ue(r,o))}),l.style.width=r+"px",l.style.height=o+"px"}t.render()};var kh={},r2={get exports(){return kh},set exports(n){kh=n}};(function(n,e){(function(t){n.exports=t()})(function(){var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(s){return!(!s||!s.Window)&&s instanceof s.Window};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.getWindow=function(s){return(0,t.default)(s)?s:(s.ownerDocument||s).defaultView||o.window},i.init=l,i.window=i.realWindow=void 0;var r=void 0;i.realWindow=r;var o=void 0;function l(s){i.realWindow=r=s;var u=s.document.createTextNode("");u.ownerDocument!==s.document&&typeof s.wrap=="function"&&s.wrap(u)===u&&(s=s.wrap(s)),i.window=o=s}i.window=o,typeof window<"u"&&window&&l(window);var a={};function d(s){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},d(s)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var h=function(s){return!!s&&d(s)==="object"},m=function(s){return typeof s=="function"},y={window:function(s){return s===i.window||(0,t.default)(s)},docFrag:function(s){return h(s)&&s.nodeType===11},object:h,func:m,number:function(s){return typeof s=="number"},bool:function(s){return typeof s=="boolean"},string:function(s){return typeof s=="string"},element:function(s){if(!s||d(s)!=="object")return!1;var u=i.getWindow(s)||i.window;return/object|function/.test(typeof Element>"u"?"undefined":d(Element))?s instanceof Element||s instanceof u.Element:s.nodeType===1&&typeof s.nodeName=="string"},plainObject:function(s){return h(s)&&!!s.constructor&&/function Object\b/.test(s.constructor.toString())},array:function(s){return h(s)&&s.length!==void 0&&m(s.splice)}};a.default=y;var v={};function x(s){var u=s.interaction;if(u.prepared.name==="drag"){var c=u.prepared.axis;c==="x"?(u.coords.cur.page.y=u.coords.start.page.y,u.coords.cur.client.y=u.coords.start.client.y,u.coords.velocity.client.y=0,u.coords.velocity.page.y=0):c==="y"&&(u.coords.cur.page.x=u.coords.start.page.x,u.coords.cur.client.x=u.coords.start.client.x,u.coords.velocity.client.x=0,u.coords.velocity.page.x=0)}}function _(s){var u=s.iEvent,c=s.interaction;if(c.prepared.name==="drag"){var f=c.prepared.axis;if(f==="x"||f==="y"){var g=f==="x"?"y":"x";u.page[g]=c.coords.start.page[g],u.client[g]=c.coords.start.client[g],u.delta[g]=0}}}Object.defineProperty(v,"__esModule",{value:!0}),v.default=void 0;var T={id:"actions/drag",install:function(s){var u=s.actions,c=s.Interactable,f=s.defaults;c.prototype.draggable=T.draggable,u.map.drag=T,u.methodDict.drag="draggable",f.actions.drag=T.defaults},listeners:{"interactions:before-action-move":x,"interactions:action-resume":x,"interactions:action-move":_,"auto-start:check":function(s){var u=s.interaction,c=s.interactable,f=s.buttons,g=c.options.drag;if(g&&g.enabled&&(!u.pointerIsDown||!/mouse|pointer/.test(u.pointerType)||f&c.options.drag.mouseButtons))return s.action={name:"drag",axis:g.lockAxis==="start"?g.startAxis:g.lockAxis},!1}},draggable:function(s){return a.default.object(s)?(this.options.drag.enabled=s.enabled!==!1,this.setPerAction("drag",s),this.setOnEvents("drag",s),/^(xy|x|y|start)$/.test(s.lockAxis)&&(this.options.drag.lockAxis=s.lockAxis),/^(xy|x|y)$/.test(s.startAxis)&&(this.options.drag.startAxis=s.startAxis),this):a.default.bool(s)?(this.options.drag.enabled=s,this):this.options.drag},beforeMove:x,move:_,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},b=T;v.default=b;var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var w={init:function(s){var u=s;w.document=u.document,w.DocumentFragment=u.DocumentFragment||E,w.SVGElement=u.SVGElement||E,w.SVGSVGElement=u.SVGSVGElement||E,w.SVGElementInstance=u.SVGElementInstance||E,w.Element=u.Element||E,w.HTMLElement=u.HTMLElement||w.Element,w.Event=u.Event,w.Touch=u.Touch||E,w.PointerEvent=u.PointerEvent||u.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function E(){}var A=w;p.default=A;var D={};Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var N={init:function(s){var u=p.default.Element,c=s.navigator||{};N.supportsTouch="ontouchstart"in s||a.default.func(s.DocumentTouch)&&p.default.document instanceof s.DocumentTouch,N.supportsPointerEvent=c.pointerEnabled!==!1&&!!p.default.PointerEvent,N.isIOS=/iP(hone|od|ad)/.test(c.platform),N.isIOS7=/iP(hone|od|ad)/.test(c.platform)&&/OS 7[^\d]/.test(c.appVersion),N.isIe9=/MSIE 9/.test(c.userAgent),N.isOperaMobile=c.appName==="Opera"&&N.supportsTouch&&/Presto/.test(c.userAgent),N.prefixedMatchesSelector="matches"in u.prototype?"matches":"webkitMatchesSelector"in u.prototype?"webkitMatchesSelector":"mozMatchesSelector"in u.prototype?"mozMatchesSelector":"oMatchesSelector"in u.prototype?"oMatchesSelector":"msMatchesSelector",N.pEventTypes=N.supportsPointerEvent?p.default.PointerEvent===s.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,N.wheelEvent=p.default.document&&"onmousewheel"in p.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},B=N;D.default=B;var k={};function R(s){var u=s.parentNode;if(a.default.docFrag(u)){for(;(u=u.host)&&a.default.docFrag(u););return u}return u}function O(s,u){return i.window!==i.realWindow&&(u=u.replace(/\/deep\//g," ")),s[D.default.prefixedMatchesSelector](u)}Object.defineProperty(k,"__esModule",{value:!0}),k.closest=function(s,u){for(;a.default.element(s);){if(O(s,u))return s;s=R(s)}return null},k.getActualElement=function(s){return s.correspondingUseElement||s},k.getElementClientRect=Z,k.getElementRect=function(s){var u=Z(s);if(!D.default.isIOS7&&u){var c=Y(i.getWindow(s));u.left+=c.x,u.right+=c.x,u.top+=c.y,u.bottom+=c.y}return u},k.getPath=function(s){for(var u=[];s;)u.push(s),s=R(s);return u},k.getScrollXY=Y,k.indexOfDeepestElement=function(s){for(var u,c=[],f=0;f<s.length;f++){var g=s[f],S=s[u];if(g&&f!==u)if(S){var P=se(g),M=se(S);if(P!==g.ownerDocument)if(M!==g.ownerDocument)if(P!==M){c=c.length?c:ue(S);var C=void 0;if(S instanceof p.default.HTMLElement&&g instanceof p.default.SVGElement&&!(g instanceof p.default.SVGSVGElement)){if(g===M)continue;C=g.ownerSVGElement}else C=g;for(var I=ue(C,S.ownerDocument),F=0;I[F]&&I[F]===c[F];)F++;var G=[I[F-1],I[F],c[F]];if(G[0])for(var ee=G[0].lastChild;ee;){if(ee===G[1]){u=f,c=I;break}if(ee===G[2])break;ee=ee.previousSibling}}else ce=g,K=S,(parseInt(i.getWindow(ce).getComputedStyle(ce).zIndex,10)||0)>=(parseInt(i.getWindow(K).getComputedStyle(K).zIndex,10)||0)&&(u=f);else u=f}else u=f}var ce,K;return u},k.matchesSelector=O,k.matchesUpTo=function(s,u,c){for(;a.default.element(s);){if(O(s,u))return!0;if((s=R(s))===c)return O(s,u)}return!1},k.nodeContains=function(s,u){if(s.contains)return s.contains(u);for(;u;){if(u===s)return!0;u=u.parentNode}return!1},k.parentNode=R,k.trySelector=function(s){return!!a.default.string(s)&&(p.default.document.querySelector(s),!0)};var se=function(s){return s.parentNode||s.host};function ue(s,u){for(var c,f=[],g=s;(c=se(g))&&g!==u&&c!==g.ownerDocument;)f.unshift(g),g=c;return f}function Y(s){return{x:(s=s||i.window).scrollX||s.document.documentElement.scrollLeft,y:s.scrollY||s.document.documentElement.scrollTop}}function Z(s){var u=s instanceof p.default.SVGElement?s.getBoundingClientRect():s.getClientRects()[0];return u&&{left:u.left,right:u.right,top:u.top,bottom:u.bottom,width:u.width||u.right-u.left,height:u.height||u.bottom-u.top}}var W={};Object.defineProperty(W,"__esModule",{value:!0}),W.default=function(s,u){for(var c in u)s[c]=u[c];return s};var fe={};function me(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}function j(s,u,c){return s==="parent"?(0,k.parentNode)(c):s==="self"?u.getRect(c):(0,k.closest)(c,s)}Object.defineProperty(fe,"__esModule",{value:!0}),fe.addEdges=function(s,u,c){s.left&&(u.left+=c.x),s.right&&(u.right+=c.x),s.top&&(u.top+=c.y),s.bottom&&(u.bottom+=c.y),u.width=u.right-u.left,u.height=u.bottom-u.top},fe.getStringOptionResult=j,fe.rectToXY=function(s){return s&&{x:"x"in s?s.x:s.left,y:"y"in s?s.y:s.top}},fe.resolveRectLike=function(s,u,c,f){var g,S=s;return a.default.string(S)?S=j(S,u,c):a.default.func(S)&&(S=S.apply(void 0,function(P){if(Array.isArray(P))return me(P)}(g=f)||function(P){if(typeof Symbol<"u"&&P[Symbol.iterator]!=null||P["@@iterator"]!=null)return Array.from(P)}(g)||function(P,M){if(P){if(typeof P=="string")return me(P,M);var C=Object.prototype.toString.call(P).slice(8,-1);return C==="Object"&&P.constructor&&(C=P.constructor.name),C==="Map"||C==="Set"?Array.from(P):C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)?me(P,M):void 0}}(g)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())),a.default.element(S)&&(S=(0,k.getElementRect)(S)),S},fe.tlbrToXywh=function(s){return!s||"x"in s&&"y"in s||((s=(0,W.default)({},s)).x=s.left||0,s.y=s.top||0,s.width=s.width||(s.right||0)-s.x,s.height=s.height||(s.bottom||0)-s.y),s},fe.xywhToTlbr=function(s){return!s||"left"in s&&"top"in s||((s=(0,W.default)({},s)).left=s.x||0,s.top=s.y||0,s.right=s.right||s.left+s.width,s.bottom=s.bottom||s.top+s.height),s};var J={};Object.defineProperty(J,"__esModule",{value:!0}),J.default=function(s,u,c){var f=s.options[c],g=f&&f.origin||s.options.origin,S=(0,fe.resolveRectLike)(g,s,u,[s&&u]);return(0,fe.rectToXY)(S)||{x:0,y:0}};var re={};function Te(s){return s.trim().split(/ +/)}Object.defineProperty(re,"__esModule",{value:!0}),re.default=function s(u,c,f){if(f=f||{},a.default.string(u)&&u.search(" ")!==-1&&(u=Te(u)),a.default.array(u))return u.reduce(function(C,I){return(0,W.default)(C,s(I,c,f))},f);if(a.default.object(u)&&(c=u,u=""),a.default.func(c))f[u]=f[u]||[],f[u].push(c);else if(a.default.array(c))for(var g=0;g<c.length;g++){var S;S=c[g],s(u,S,f)}else if(a.default.object(c))for(var P in c){var M=Te(P).map(function(C){return"".concat(u).concat(C)});s(M,c[P],f)}return f};var ge={};Object.defineProperty(ge,"__esModule",{value:!0}),ge.default=void 0,ge.default=function(s,u){return Math.sqrt(s*s+u*u)};var oe={};Object.defineProperty(oe,"__esModule",{value:!0}),oe.default=function(s,u){s.__set||(s.__set={});var c=function(g){typeof s[g]!="function"&&g!=="__set"&&Object.defineProperty(s,g,{get:function(){return g in s.__set?s.__set[g]:s.__set[g]=u[g]},set:function(S){s.__set[g]=S},configurable:!0})};for(var f in u)c(f);return s};var q={};function we(s){return s instanceof p.default.Event||s instanceof p.default.Touch}function Me(s,u,c){return s=s||"page",(c=c||{}).x=u[s+"X"],c.y=u[s+"Y"],c}function te(s,u){return u=u||{x:0,y:0},D.default.isOperaMobile&&we(s)?(Me("screen",s,u),u.x+=window.scrollX,u.y+=window.scrollY):Me("page",s,u),u}function $e(s,u){return u=u||{},D.default.isOperaMobile&&we(s)?Me("screen",s,u):Me("client",s,u),u}function Ge(s){var u=[];return a.default.array(s)?(u[0]=s[0],u[1]=s[1]):s.type==="touchend"?s.touches.length===1?(u[0]=s.touches[0],u[1]=s.changedTouches[0]):s.touches.length===0&&(u[0]=s.changedTouches[0],u[1]=s.changedTouches[1]):(u[0]=s.touches[0],u[1]=s.touches[1]),u}function be(s){for(var u={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},c=0;c<s.length;c++){var f=s[c];for(var g in u)u[g]+=f[g]}for(var S in u)u[S]/=s.length;return u}Object.defineProperty(q,"__esModule",{value:!0}),q.coordsToEvent=function(s){return{coords:s,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},q.copyCoords=function(s,u){s.page=s.page||{},s.page.x=u.page.x,s.page.y=u.page.y,s.client=s.client||{},s.client.x=u.client.x,s.client.y=u.client.y,s.timeStamp=u.timeStamp},q.getClientXY=$e,q.getEventTargets=function(s){var u=a.default.func(s.composedPath)?s.composedPath():s.path;return[k.getActualElement(u?u[0]:s.target),k.getActualElement(s.currentTarget)]},q.getPageXY=te,q.getPointerId=function(s){return a.default.number(s.pointerId)?s.pointerId:s.identifier},q.getPointerType=function(s){return a.default.string(s.pointerType)?s.pointerType:a.default.number(s.pointerType)?[void 0,void 0,"touch","pen","mouse"][s.pointerType]:/touch/.test(s.type||"")||s instanceof p.default.Touch?"touch":"mouse"},q.getTouchPair=Ge,q.getXY=Me,q.isNativePointer=we,q.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},q.pointerAverage=be,Object.defineProperty(q,"pointerExtend",{enumerable:!0,get:function(){return oe.default}}),q.setCoordDeltas=function(s,u,c){s.page.x=c.page.x-u.page.x,s.page.y=c.page.y-u.page.y,s.client.x=c.client.x-u.client.x,s.client.y=c.client.y-u.client.y,s.timeStamp=c.timeStamp-u.timeStamp},q.setCoordVelocity=function(s,u){var c=Math.max(u.timeStamp/1e3,.001);s.page.x=u.page.x/c,s.page.y=u.page.y/c,s.client.x=u.client.x/c,s.client.y=u.client.y/c,s.timeStamp=c},q.setCoords=function(s,u,c){var f=u.length>1?be(u):u[0];te(f,s.page),$e(f,s.client),s.timeStamp=c},q.setZeroCoords=function(s){s.page.x=0,s.page.y=0,s.client.x=0,s.client.y=0},q.touchAngle=function(s,u){var c=u+"X",f=u+"Y",g=Ge(s),S=g[1][c]-g[0][c],P=g[1][f]-g[0][f];return 180*Math.atan2(P,S)/Math.PI},q.touchBBox=function(s){if(!s.length)return null;var u=Ge(s),c=Math.min(u[0].pageX,u[1].pageX),f=Math.min(u[0].pageY,u[1].pageY),g=Math.max(u[0].pageX,u[1].pageX),S=Math.max(u[0].pageY,u[1].pageY);return{x:c,y:f,left:c,top:f,right:g,bottom:S,width:g-c,height:S-f}},q.touchDistance=function(s,u){var c=u+"X",f=u+"Y",g=Ge(s),S=g[0][c]-g[1][c],P=g[0][f]-g[1][f];return(0,ge.default)(S,P)};var Be={};function dt(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Fe(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Be,"__esModule",{value:!0}),Be.BaseEvent=void 0;var Qe=function(){function s(f){(function(g,S){if(!(g instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),Fe(this,"immediatePropagationStopped",!1),Fe(this,"propagationStopped",!1),this._interaction=f}var u,c;return u=s,(c=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&dt(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();Be.BaseEvent=Qe,Object.defineProperty(Qe.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var je={};Object.defineProperty(je,"__esModule",{value:!0}),je.remove=je.merge=je.from=je.findIndex=je.find=je.contains=void 0,je.contains=function(s,u){return s.indexOf(u)!==-1},je.remove=function(s,u){return s.splice(s.indexOf(u),1)};var Et=function(s,u){for(var c=0;c<u.length;c++){var f=u[c];s.push(f)}return s};je.merge=Et,je.from=function(s){return Et([],s)};var Ut=function(s,u){for(var c=0;c<s.length;c++)if(u(s[c],c,s))return c;return-1};je.findIndex=Ut,je.find=function(s,u){return s[Ut(s,u)]};var mt={};function st(s){return st=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},st(s)}function _t(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function jt(s,u){return jt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},jt(s,u)}function z(s,u){if(u&&(st(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return L(s)}function L(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ae(s){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},ae(s)}function pe(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(mt,"__esModule",{value:!0}),mt.DropEvent=void 0;var _e=function(s){(function(M,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(C&&C.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),C&&jt(M,C)})(P,s);var u,c,f,g,S=(f=P,g=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,C=ae(f);if(g){var I=ae(this).constructor;M=Reflect.construct(C,arguments,I)}else M=C.apply(this,arguments);return z(this,M)});function P(M,C,I){var F;(function(K,ye){if(!(K instanceof ye))throw new TypeError("Cannot call a class as a function")})(this,P),pe(L(F=S.call(this,C._interaction)),"dropzone",void 0),pe(L(F),"dragEvent",void 0),pe(L(F),"relatedTarget",void 0),pe(L(F),"draggable",void 0),pe(L(F),"propagationStopped",!1),pe(L(F),"immediatePropagationStopped",!1);var G=I==="dragleave"?M.prev:M.cur,ee=G.element,ce=G.dropzone;return F.type=I,F.target=ee,F.currentTarget=ee,F.dropzone=ce,F.dragEvent=C,F.relatedTarget=C.target,F.draggable=C.interactable,F.timeStamp=C.timeStamp,F}return u=P,(c=[{key:"reject",value:function(){var M=this,C=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&C.cur.dropzone===this.dropzone&&C.cur.element===this.target)if(C.prev.dropzone=this.dropzone,C.prev.element=this.target,C.rejected=!0,C.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var I=C.activeDrops,F=je.findIndex(I,function(ee){var ce=ee.dropzone,K=ee.element;return ce===M.dropzone&&K===M.target});C.activeDrops.splice(F,1);var G=new P(C,this.dragEvent,"dropdeactivate");G.dropzone=this.dropzone,G.target=this.target,this.dropzone.fire(G)}else this.dropzone.fire(new P(C,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&_t(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),P}(Be.BaseEvent);mt.DropEvent=_e;var Ee={};function V(s,u){for(var c=0;c<s.slice().length;c++){var f=s.slice()[c],g=f.dropzone,S=f.element;u.dropzone=g,u.target=S,g.fire(u),u.propagationStopped=u.immediatePropagationStopped=!1}}function he(s,u){for(var c=function(S,P){for(var M=S.interactables,C=[],I=0;I<M.list.length;I++){var F=M.list[I];if(F.options.drop.enabled){var G=F.options.drop.accept;if(!(a.default.element(G)&&G!==P||a.default.string(G)&&!k.matchesSelector(P,G)||a.default.func(G)&&!G({dropzone:F,draggableElement:P})))for(var ee=a.default.string(F.target)?F._context.querySelectorAll(F.target):a.default.array(F.target)?F.target:[F.target],ce=0;ce<ee.length;ce++){var K=ee[ce];K!==P&&C.push({dropzone:F,element:K,rect:F.getRect(K)})}}}return C}(s,u),f=0;f<c.length;f++){var g=c[f];g.rect=g.dropzone.getRect(g.element)}return c}function ne(s,u,c){for(var f=s.dropState,g=s.interactable,S=s.element,P=[],M=0;M<f.activeDrops.length;M++){var C=f.activeDrops[M],I=C.dropzone,F=C.element,G=C.rect;P.push(I.dropCheck(u,c,g,S,F,G)?F:null)}var ee=k.indexOfDeepestElement(P);return f.activeDrops[ee]||null}function Ce(s,u,c){var f=s.dropState,g={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return c.type==="dragstart"&&(g.activate=new mt.DropEvent(f,c,"dropactivate"),g.activate.target=null,g.activate.dropzone=null),c.type==="dragend"&&(g.deactivate=new mt.DropEvent(f,c,"dropdeactivate"),g.deactivate.target=null,g.deactivate.dropzone=null),f.rejected||(f.cur.element!==f.prev.element&&(f.prev.dropzone&&(g.leave=new mt.DropEvent(f,c,"dragleave"),c.dragLeave=g.leave.target=f.prev.element,c.prevDropzone=g.leave.dropzone=f.prev.dropzone),f.cur.dropzone&&(g.enter=new mt.DropEvent(f,c,"dragenter"),c.dragEnter=f.cur.element,c.dropzone=f.cur.dropzone)),c.type==="dragend"&&f.cur.dropzone&&(g.drop=new mt.DropEvent(f,c,"drop"),c.dropzone=f.cur.dropzone,c.relatedTarget=f.cur.element),c.type==="dragmove"&&f.cur.dropzone&&(g.move=new mt.DropEvent(f,c,"dropmove"),g.move.dragmove=c,c.dropzone=f.cur.dropzone)),g}function Le(s,u){var c=s.dropState,f=c.activeDrops,g=c.cur,S=c.prev;u.leave&&S.dropzone.fire(u.leave),u.enter&&g.dropzone.fire(u.enter),u.move&&g.dropzone.fire(u.move),u.drop&&g.dropzone.fire(u.drop),u.deactivate&&V(f,u.deactivate),c.prev.dropzone=g.dropzone,c.prev.element=g.element}function ze(s,u){var c=s.interaction,f=s.iEvent,g=s.event;if(f.type==="dragmove"||f.type==="dragend"){var S=c.dropState;u.dynamicDrop&&(S.activeDrops=he(u,c.element));var P=f,M=ne(c,P,g);S.rejected=S.rejected&&!!M&&M.dropzone===S.cur.dropzone&&M.element===S.cur.element,S.cur.dropzone=M&&M.dropzone,S.cur.element=M&&M.element,S.events=Ce(c,0,P)}}Object.defineProperty(Ee,"__esModule",{value:!0}),Ee.default=void 0;var De={id:"actions/drop",install:function(s){var u=s.actions,c=s.interactStatic,f=s.Interactable,g=s.defaults;s.usePlugin(v.default),f.prototype.dropzone=function(S){return function(P,M){if(a.default.object(M)){if(P.options.drop.enabled=M.enabled!==!1,M.listeners){var C=(0,re.default)(M.listeners),I=Object.keys(C).reduce(function(F,G){return F[/^(enter|leave)/.test(G)?"drag".concat(G):/^(activate|deactivate|move)/.test(G)?"drop".concat(G):G]=C[G],F},{});P.off(P.options.drop.listeners),P.on(I),P.options.drop.listeners=I}return a.default.func(M.ondrop)&&P.on("drop",M.ondrop),a.default.func(M.ondropactivate)&&P.on("dropactivate",M.ondropactivate),a.default.func(M.ondropdeactivate)&&P.on("dropdeactivate",M.ondropdeactivate),a.default.func(M.ondragenter)&&P.on("dragenter",M.ondragenter),a.default.func(M.ondragleave)&&P.on("dragleave",M.ondragleave),a.default.func(M.ondropmove)&&P.on("dropmove",M.ondropmove),/^(pointer|center)$/.test(M.overlap)?P.options.drop.overlap=M.overlap:a.default.number(M.overlap)&&(P.options.drop.overlap=Math.max(Math.min(1,M.overlap),0)),"accept"in M&&(P.options.drop.accept=M.accept),"checker"in M&&(P.options.drop.checker=M.checker),P}return a.default.bool(M)?(P.options.drop.enabled=M,P):P.options.drop}(this,S)},f.prototype.dropCheck=function(S,P,M,C,I,F){return function(G,ee,ce,K,ye,Pe,xe){var Ne=!1;if(!(xe=xe||G.getRect(Pe)))return!!G.options.drop.checker&&G.options.drop.checker(ee,ce,Ne,G,Pe,K,ye);var We=G.options.drop.overlap;if(We==="pointer"){var tt=(0,J.default)(K,ye,"drag"),vt=q.getPageXY(ee);vt.x+=tt.x,vt.y+=tt.y;var Tt=vt.x>xe.left&&vt.x<xe.right,lt=vt.y>xe.top&&vt.y<xe.bottom;Ne=Tt&&lt}var wt=K.getRect(ye);if(wt&&We==="center"){var oi=wt.left+wt.width/2,Xi=wt.top+wt.height/2;Ne=oi>=xe.left&&oi<=xe.right&&Xi>=xe.top&&Xi<=xe.bottom}return wt&&a.default.number(We)&&(Ne=Math.max(0,Math.min(xe.right,wt.right)-Math.max(xe.left,wt.left))*Math.max(0,Math.min(xe.bottom,wt.bottom)-Math.max(xe.top,wt.top))/(wt.width*wt.height)>=We),G.options.drop.checker&&(Ne=G.options.drop.checker(ee,ce,Ne,G,Pe,K,ye)),Ne}(this,S,P,M,C,I,F)},c.dynamicDrop=function(S){return a.default.bool(S)?(s.dynamicDrop=S,c):s.dynamicDrop},(0,W.default)(u.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),u.methodDict.drop="dropzone",s.dynamicDrop=!1,g.actions.drop=De.defaults},listeners:{"interactions:before-action-start":function(s){var u=s.interaction;u.prepared.name==="drag"&&(u.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(s,u){var c=s.interaction,f=(s.event,s.iEvent);if(c.prepared.name==="drag"){var g=c.dropState;g.activeDrops=null,g.events=null,g.activeDrops=he(u,c.element),g.events=Ce(c,0,f),g.events.activate&&(V(g.activeDrops,g.events.activate),u.fire("actions/drop:start",{interaction:c,dragEvent:f}))}},"interactions:action-move":ze,"interactions:after-action-move":function(s,u){var c=s.interaction,f=s.iEvent;c.prepared.name==="drag"&&(Le(c,c.dropState.events),u.fire("actions/drop:move",{interaction:c,dragEvent:f}),c.dropState.events={})},"interactions:action-end":function(s,u){if(s.interaction.prepared.name==="drag"){var c=s.interaction,f=s.iEvent;ze(s,u),Le(c,c.dropState.events),u.fire("actions/drop:end",{interaction:c,dragEvent:f})}},"interactions:stop":function(s){var u=s.interaction;if(u.prepared.name==="drag"){var c=u.dropState;c&&(c.activeDrops=null,c.events=null,c.cur.dropzone=null,c.cur.element=null,c.prev.dropzone=null,c.prev.element=null,c.rejected=!1)}}},getActiveDrops:he,getDrop:ne,getDropEvents:Ce,fireDropEvents:Le,defaults:{enabled:!1,accept:null,overlap:"pointer"}},ke=De;Ee.default=ke;var Xe={};function Je(s){var u=s.interaction,c=s.iEvent,f=s.phase;if(u.prepared.name==="gesture"){var g=u.pointers.map(function(I){return I.pointer}),S=f==="start",P=f==="end",M=u.interactable.options.deltaSource;if(c.touches=[g[0],g[1]],S)c.distance=q.touchDistance(g,M),c.box=q.touchBBox(g),c.scale=1,c.ds=0,c.angle=q.touchAngle(g,M),c.da=0,u.gesture.startDistance=c.distance,u.gesture.startAngle=c.angle;else if(P){var C=u.prevEvent;c.distance=C.distance,c.box=C.box,c.scale=C.scale,c.ds=0,c.angle=C.angle,c.da=0}else c.distance=q.touchDistance(g,M),c.box=q.touchBBox(g),c.scale=c.distance/u.gesture.startDistance,c.angle=q.touchAngle(g,M),c.ds=c.scale-u.gesture.scale,c.da=c.angle-u.gesture.angle;u.gesture.distance=c.distance,u.gesture.angle=c.angle,a.default.number(c.scale)&&c.scale!==1/0&&!isNaN(c.scale)&&(u.gesture.scale=c.scale)}}Object.defineProperty(Xe,"__esModule",{value:!0}),Xe.default=void 0;var Pt={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(s){var u=s.actions,c=s.Interactable,f=s.defaults;c.prototype.gesturable=function(g){return a.default.object(g)?(this.options.gesture.enabled=g.enabled!==!1,this.setPerAction("gesture",g),this.setOnEvents("gesture",g),this):a.default.bool(g)?(this.options.gesture.enabled=g,this):this.options.gesture},u.map.gesture=Pt,u.methodDict.gesture="gesturable",f.actions.gesture=Pt.defaults},listeners:{"interactions:action-start":Je,"interactions:action-move":Je,"interactions:action-end":Je,"interactions:new":function(s){s.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(s){if(!(s.interaction.pointers.length<2)){var u=s.interactable.options.gesture;if(u&&u.enabled)return s.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},H=Pt;Xe.default=H;var le={};function ve(s,u,c,f,g,S,P){if(!u)return!1;if(u===!0){var M=a.default.number(S.width)?S.width:S.right-S.left,C=a.default.number(S.height)?S.height:S.bottom-S.top;if(P=Math.min(P,Math.abs((s==="left"||s==="right"?M:C)/2)),M<0&&(s==="left"?s="right":s==="right"&&(s="left")),C<0&&(s==="top"?s="bottom":s==="bottom"&&(s="top")),s==="left"){var I=M>=0?S.left:S.right;return c.x<I+P}if(s==="top"){var F=C>=0?S.top:S.bottom;return c.y<F+P}if(s==="right")return c.x>(M>=0?S.right:S.left)-P;if(s==="bottom")return c.y>(C>=0?S.bottom:S.top)-P}return!!a.default.element(f)&&(a.default.element(u)?u===f:k.matchesUpTo(f,u,g))}function Re(s){var u=s.iEvent,c=s.interaction;if(c.prepared.name==="resize"&&c.resizeAxes){var f=u;c.interactable.options.resize.square?(c.resizeAxes==="y"?f.delta.x=f.delta.y:f.delta.y=f.delta.x,f.axes="xy"):(f.axes=c.resizeAxes,c.resizeAxes==="x"?f.delta.y=0:c.resizeAxes==="y"&&(f.delta.x=0))}}Object.defineProperty(le,"__esModule",{value:!0}),le.default=void 0;var Oe={id:"actions/resize",before:["actions/drag"],install:function(s){var u=s.actions,c=s.browser,f=s.Interactable,g=s.defaults;Oe.cursors=function(S){return S.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(c),Oe.defaultMargin=c.supportsTouch||c.supportsPointerEvent?20:10,f.prototype.resizable=function(S){return function(P,M,C){return a.default.object(M)?(P.options.resize.enabled=M.enabled!==!1,P.setPerAction("resize",M),P.setOnEvents("resize",M),a.default.string(M.axis)&&/^x$|^y$|^xy$/.test(M.axis)?P.options.resize.axis=M.axis:M.axis===null&&(P.options.resize.axis=C.defaults.actions.resize.axis),a.default.bool(M.preserveAspectRatio)?P.options.resize.preserveAspectRatio=M.preserveAspectRatio:a.default.bool(M.square)&&(P.options.resize.square=M.square),P):a.default.bool(M)?(P.options.resize.enabled=M,P):P.options.resize}(this,S,s)},u.map.resize=Oe,u.methodDict.resize="resizable",g.actions.resize=Oe.defaults},listeners:{"interactions:new":function(s){s.interaction.resizeAxes="xy"},"interactions:action-start":function(s){(function(u){var c=u.iEvent,f=u.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var g=c,S=f.rect;f._rects={start:(0,W.default)({},S),corrected:(0,W.default)({},S),previous:(0,W.default)({},S),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},g.edges=f.prepared.edges,g.rect=f._rects.corrected,g.deltaRect=f._rects.delta}})(s),Re(s)},"interactions:action-move":function(s){(function(u){var c=u.iEvent,f=u.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var g=c,S=f.interactable.options.resize.invert,P=S==="reposition"||S==="negate",M=f.rect,C=f._rects,I=C.start,F=C.corrected,G=C.delta,ee=C.previous;if((0,W.default)(ee,F),P){if((0,W.default)(F,M),S==="reposition"){if(F.top>F.bottom){var ce=F.top;F.top=F.bottom,F.bottom=ce}if(F.left>F.right){var K=F.left;F.left=F.right,F.right=K}}}else F.top=Math.min(M.top,I.bottom),F.bottom=Math.max(M.bottom,I.top),F.left=Math.min(M.left,I.right),F.right=Math.max(M.right,I.left);for(var ye in F.width=F.right-F.left,F.height=F.bottom-F.top,F)G[ye]=F[ye]-ee[ye];g.edges=f.prepared.edges,g.rect=F,g.deltaRect=G}})(s),Re(s)},"interactions:action-end":function(s){var u=s.iEvent,c=s.interaction;if(c.prepared.name==="resize"&&c.prepared.edges){var f=u;f.edges=c.prepared.edges,f.rect=c._rects.corrected,f.deltaRect=c._rects.delta}},"auto-start:check":function(s){var u=s.interaction,c=s.interactable,f=s.element,g=s.rect,S=s.buttons;if(g){var P=(0,W.default)({},u.coords.cur.page),M=c.options.resize;if(M&&M.enabled&&(!u.pointerIsDown||!/mouse|pointer/.test(u.pointerType)||S&M.mouseButtons)){if(a.default.object(M.edges)){var C={left:!1,right:!1,top:!1,bottom:!1};for(var I in C)C[I]=ve(I,M.edges[I],P,u._latestPointer.eventTarget,f,g,M.margin||Oe.defaultMargin);C.left=C.left&&!C.right,C.top=C.top&&!C.bottom,(C.left||C.right||C.top||C.bottom)&&(s.action={name:"resize",edges:C})}else{var F=M.axis!=="y"&&P.x>g.right-Oe.defaultMargin,G=M.axis!=="x"&&P.y>g.bottom-Oe.defaultMargin;(F||G)&&(s.action={name:"resize",axes:(F?"x":"")+(G?"y":"")})}return!s.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(s){var u=s.edges,c=s.axis,f=s.name,g=Oe.cursors,S=null;if(c)S=g[f+c];else if(u){for(var P="",M=["top","bottom","left","right"],C=0;C<M.length;C++){var I=M[C];u[I]&&(P+=I)}S=g[P]}return S},defaultMargin:null},St=Oe;le.default=St;var yt={};Object.defineProperty(yt,"__esModule",{value:!0}),yt.default=void 0;var on={id:"actions",install:function(s){s.usePlugin(Xe.default),s.usePlugin(le.default),s.usePlugin(v.default),s.usePlugin(Ee.default)}};yt.default=on;var Xt={};Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.default=void 0;var gt,qt,jn=0,Io={request:function(s){return gt(s)},cancel:function(s){return qt(s)},init:function(s){if(gt=s.requestAnimationFrame,qt=s.cancelAnimationFrame,!gt)for(var u=["ms","moz","webkit","o"],c=0;c<u.length;c++){var f=u[c];gt=s["".concat(f,"RequestAnimationFrame")],qt=s["".concat(f,"CancelAnimationFrame")]||s["".concat(f,"CancelRequestAnimationFrame")]}gt=gt&&gt.bind(s),qt=qt&&qt.bind(s),gt||(gt=function(g){var S=Date.now(),P=Math.max(0,16-(S-jn)),M=s.setTimeout(function(){g(S+P)},P);return jn=S+P,M},qt=function(g){return clearTimeout(g)})}};Xt.default=Io;var ni={};Object.defineProperty(ni,"__esModule",{value:!0}),ni.default=void 0,ni.getContainer=Oo,ni.getScroll=Yr,ni.getScrollSize=function(s){return a.default.window(s)&&(s=window.document.body),{x:s.scrollWidth,y:s.scrollHeight}},ni.getScrollSizeDelta=function(s,u){var c=s.interaction,f=s.element,g=c&&c.interactable.options[c.prepared.name].autoScroll;if(!g||!g.enabled)return u(),{x:0,y:0};var S=Oo(g.container,c.interactable,f),P=Yr(S);u();var M=Yr(S);return{x:M.x-P.x,y:M.y-P.y}};var qe={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(s){qe.isScrolling=!0,Xt.default.cancel(qe.i),s.autoScroll=qe,qe.interaction=s,qe.prevTime=qe.now(),qe.i=Xt.default.request(qe.scroll)},stop:function(){qe.isScrolling=!1,qe.interaction&&(qe.interaction.autoScroll=null),Xt.default.cancel(qe.i)},scroll:function(){var s=qe.interaction,u=s.interactable,c=s.element,f=s.prepared.name,g=u.options[f].autoScroll,S=Oo(g.container,u,c),P=qe.now(),M=(P-qe.prevTime)/1e3,C=g.speed*M;if(C>=1){var I={x:qe.x*C,y:qe.y*C};if(I.x||I.y){var F=Yr(S);a.default.window(S)?S.scrollBy(I.x,I.y):S&&(S.scrollLeft+=I.x,S.scrollTop+=I.y);var G=Yr(S),ee={x:G.x-F.x,y:G.y-F.y};(ee.x||ee.y)&&u.fire({type:"autoscroll",target:c,interactable:u,delta:ee,interaction:s,container:S})}qe.prevTime=P}qe.isScrolling&&(Xt.default.cancel(qe.i),qe.i=Xt.default.request(qe.scroll))},check:function(s,u){var c;return(c=s.options[u].autoScroll)==null?void 0:c.enabled},onInteractionMove:function(s){var u=s.interaction,c=s.pointer;if(u.interacting()&&qe.check(u.interactable,u.prepared.name))if(u.simulation)qe.x=qe.y=0;else{var f,g,S,P,M=u.interactable,C=u.element,I=u.prepared.name,F=M.options[I].autoScroll,G=Oo(F.container,M,C);if(a.default.window(G))P=c.clientX<qe.margin,f=c.clientY<qe.margin,g=c.clientX>G.innerWidth-qe.margin,S=c.clientY>G.innerHeight-qe.margin;else{var ee=k.getElementClientRect(G);P=c.clientX<ee.left+qe.margin,f=c.clientY<ee.top+qe.margin,g=c.clientX>ee.right-qe.margin,S=c.clientY>ee.bottom-qe.margin}qe.x=g?1:P?-1:0,qe.y=S?1:f?-1:0,qe.isScrolling||(qe.margin=F.margin,qe.speed=F.speed,qe.start(u))}}};function Oo(s,u,c){return(a.default.string(s)?(0,fe.getStringOptionResult)(s,u,c):s)||(0,i.getWindow)(c)}function Yr(s){return a.default.window(s)&&(s=window.document.body),{x:s.scrollLeft,y:s.scrollTop}}var U={id:"auto-scroll",install:function(s){var u=s.defaults,c=s.actions;s.autoScroll=qe,qe.now=function(){return s.now()},c.phaselessTypes.autoscroll=!0,u.perAction.autoScroll=qe.defaults},listeners:{"interactions:new":function(s){s.interaction.autoScroll=null},"interactions:destroy":function(s){s.interaction.autoScroll=null,qe.stop(),qe.interaction&&(qe.interaction=null)},"interactions:stop":qe.stop,"interactions:action-move":function(s){return qe.onInteractionMove(s)}}},Q=U;ni.default=Q;var ie={};Object.defineProperty(ie,"__esModule",{value:!0}),ie.copyAction=function(s,u){return s.name=u.name,s.axis=u.axis,s.edges=u.edges,s},ie.sign=void 0,ie.warnOnce=function(s,u){var c=!1;return function(){return c||(i.window.console.warn(u),c=!0),s.apply(this,arguments)}},ie.sign=function(s){return s>=0?1:-1};var $={};function de(s){return a.default.bool(s)?(this.options.styleCursor=s,this):s===null?(delete this.options.styleCursor,this):this.options.styleCursor}function Ve(s){return a.default.func(s)?(this.options.actionChecker=s,this):s===null?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty($,"__esModule",{value:!0}),$.default=void 0;var Ye={id:"auto-start/interactableMethods",install:function(s){var u=s.Interactable;u.prototype.getAction=function(c,f,g,S){var P=function(M,C,I,F,G){var ee=M.getRect(F),ce={action:null,interactable:M,interaction:I,element:F,rect:ee,buttons:C.buttons||{0:1,1:4,3:8,4:16}[C.button]};return G.fire("auto-start:check",ce),ce.action}(this,f,g,S,s);return this.options.actionChecker?this.options.actionChecker(c,f,P,this,S,g):P},u.prototype.ignoreFrom=(0,ie.warnOnce)(function(c){return this._backCompatOption("ignoreFrom",c)},"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),u.prototype.allowFrom=(0,ie.warnOnce)(function(c){return this._backCompatOption("allowFrom",c)},"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),u.prototype.actionChecker=Ve,u.prototype.styleCursor=de}};$.default=Ye;var He={};function et(s,u,c,f,g){return u.testIgnoreAllow(u.options[s.name],c,f)&&u.options[s.name].enabled&&ht(u,c,s,g)?s:null}function it(s,u,c,f,g,S,P){for(var M=0,C=f.length;M<C;M++){var I=f[M],F=g[M],G=I.getAction(u,c,s,F);if(G){var ee=et(G,I,F,S,P);if(ee)return{action:ee,interactable:I,element:F}}}return{action:null,interactable:null,element:null}}function nt(s,u,c,f,g){var S=[],P=[],M=f;function C(F){S.push(F),P.push(M)}for(;a.default.element(M);){S=[],P=[],g.interactables.forEachMatch(M,C);var I=it(s,u,c,S,P,f,g);if(I.action&&!I.interactable.options[I.action.name].manualStart)return I;M=k.parentNode(M)}return{action:null,interactable:null,element:null}}function rt(s,u,c){var f=u.action,g=u.interactable,S=u.element;f=f||{name:null},s.interactable=g,s.element=S,(0,ie.copyAction)(s.prepared,f),s.rect=g&&f.name?g.getRect(S):null,Ri(s,c),c.fire("autoStart:prepared",{interaction:s})}function ht(s,u,c,f){var g=s.options,S=g[c.name].max,P=g[c.name].maxPerElement,M=f.autoStart.maxInteractions,C=0,I=0,F=0;if(!(S&&P&&M))return!1;for(var G=0;G<f.interactions.list.length;G++){var ee=f.interactions.list[G],ce=ee.prepared.name;if(ee.interacting()&&(++C>=M||ee.interactable===s&&((I+=ce===c.name?1:0)>=S||ee.element===u&&(F++,ce===c.name&&F>=P))))return!1}return M>0}function sn(s,u){return a.default.number(s)?(u.autoStart.maxInteractions=s,this):u.autoStart.maxInteractions}function En(s,u,c){var f=c.autoStart.cursorElement;f&&f!==s&&(f.style.cursor=""),s.ownerDocument.documentElement.style.cursor=u,s.style.cursor=u,c.autoStart.cursorElement=u?s:null}function Ri(s,u){var c=s.interactable,f=s.element,g=s.prepared;if(s.pointerType==="mouse"&&c&&c.options.styleCursor){var S="";if(g.name){var P=c.options[g.name].cursorChecker;S=a.default.func(P)?P(g,c,f,s._interacting):u.actions.map[g.name].getCursor(g)}En(s.element,S||"",u)}else u.autoStart.cursorElement&&En(u.autoStart.cursorElement,"",u)}Object.defineProperty(He,"__esModule",{value:!0}),He.default=void 0;var Bt={id:"auto-start/base",before:["actions"],install:function(s){var u=s.interactStatic,c=s.defaults;s.usePlugin($.default),c.base.actionChecker=null,c.base.styleCursor=!0,(0,W.default)(c.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),u.maxInteractions=function(f){return sn(f,s)},s.autoStart={maxInteractions:1/0,withinInteractionLimit:ht,cursorElement:null}},listeners:{"interactions:down":function(s,u){var c=s.interaction,f=s.pointer,g=s.event,S=s.eventTarget;c.interacting()||rt(c,nt(c,f,g,S,u),u)},"interactions:move":function(s,u){(function(c,f){var g=c.interaction,S=c.pointer,P=c.event,M=c.eventTarget;g.pointerType!=="mouse"||g.pointerIsDown||g.interacting()||rt(g,nt(g,S,P,M,f),f)})(s,u),function(c,f){var g=c.interaction;if(g.pointerIsDown&&!g.interacting()&&g.pointerWasMoved&&g.prepared.name){f.fire("autoStart:before-start",c);var S=g.interactable,P=g.prepared.name;P&&S&&(S.options[P].manualStart||!ht(S,g.element,g.prepared,f)?g.stop():(g.start(g.prepared,S,g.element),Ri(g,f)))}}(s,u)},"interactions:stop":function(s,u){var c=s.interaction,f=c.interactable;f&&f.options.styleCursor&&En(c.element,"",u)}},maxInteractions:sn,withinInteractionLimit:ht,validateAction:et},at=Bt;He.default=at;var dr={};Object.defineProperty(dr,"__esModule",{value:!0}),dr.default=void 0;var Yt={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(s,u){var c=s.interaction,f=s.eventTarget,g=s.dx,S=s.dy;if(c.prepared.name==="drag"){var P=Math.abs(g),M=Math.abs(S),C=c.interactable.options.drag,I=C.startAxis,F=P>M?"x":P<M?"y":"xy";if(c.prepared.axis=C.lockAxis==="start"?F[0]:C.lockAxis,F!=="xy"&&I!=="xy"&&I!==F){c.prepared.name=null;for(var G=f,ee=function(K){if(K!==c.interactable){var ye=c.interactable.options.drag;if(!ye.manualStart&&K.testIgnoreAllow(ye,G,f)){var Pe=K.getAction(c.downPointer,c.downEvent,c,G);if(Pe&&Pe.name==="drag"&&function(xe,Ne){if(!Ne)return!1;var We=Ne.options.drag.startAxis;return xe==="xy"||We==="xy"||We===xe}(F,K)&&He.default.validateAction(Pe,K,G,f,u))return K}}};a.default.element(G);){var ce=u.interactables.forEachMatch(G,ee);if(ce){c.prepared.name="drag",c.interactable=ce,c.element=G;break}G=(0,k.parentNode)(G)}}}}}};dr.default=Yt;var ii={};function Uo(s){var u=s.prepared&&s.prepared.name;if(!u)return null;var c=s.interactable.options;return c[u].hold||c[u].delay}Object.defineProperty(ii,"__esModule",{value:!0}),ii.default=void 0;var $r={id:"auto-start/hold",install:function(s){var u=s.defaults;s.usePlugin(He.default),u.perAction.hold=0,u.perAction.delay=0},listeners:{"interactions:new":function(s){s.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(s){var u=s.interaction,c=Uo(u);c>0&&(u.autoStartHoldTimer=setTimeout(function(){u.start(u.prepared,u.interactable,u.element)},c))},"interactions:move":function(s){var u=s.interaction,c=s.duplicate;u.autoStartHoldTimer&&u.pointerWasMoved&&!c&&(clearTimeout(u.autoStartHoldTimer),u.autoStartHoldTimer=null)},"autoStart:before-start":function(s){var u=s.interaction;Uo(u)>0&&(u.prepared.name=null)}},getHoldDuration:Uo},Zs=$r;ii.default=Zs;var Ht={};Object.defineProperty(Ht,"__esModule",{value:!0}),Ht.default=void 0;var Hi={id:"auto-start",install:function(s){s.usePlugin(He.default),s.usePlugin(ii.default),s.usePlugin(dr.default)}};Ht.default=Hi;var mi={};function Tn(s){return/^(always|never|auto)$/.test(s)?(this.options.preventDefault=s,this):a.default.bool(s)?(this.options.preventDefault=s?"always":"never",this):this.options.preventDefault}function Qs(s){var u=s.interaction,c=s.event;u.interactable&&u.interactable.checkAndPreventDefault(c)}function Cl(s){var u=s.Interactable;u.prototype.preventDefault=Tn,u.prototype.checkAndPreventDefault=function(c){return function(f,g,S){var P=f.options.preventDefault;if(P!=="never")if(P!=="always"){if(g.events.supportsPassive&&/^touch(start|move)$/.test(S.type)){var M=(0,i.getWindow)(S.target).document,C=g.getDocOptions(M);if(!C||!C.events||C.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(S.type)||a.default.element(S.target)&&(0,k.matchesSelector)(S.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||S.preventDefault()}else S.preventDefault()}(this,s,c)},s.interactions.docEvents.push({type:"dragstart",listener:function(c){for(var f=0;f<s.interactions.list.length;f++){var g=s.interactions.list[f];if(g.element&&(g.element===c.target||(0,k.nodeContains)(g.element,c.target)))return void g.interactable.checkAndPreventDefault(c)}}})}Object.defineProperty(mi,"__esModule",{value:!0}),mi.default=void 0,mi.install=Cl;var Pl={id:"core/interactablePreventDefault",install:Cl,listeners:["down","move","up","cancel"].reduce(function(s,u){return s["interactions:".concat(u)]=Qs,s},{})};mi.default=Pl;var Kc={};Object.defineProperty(Kc,"__esModule",{value:!0}),Kc.default=void 0,Kc.default={};var Js,Al={};Object.defineProperty(Al,"__esModule",{value:!0}),Al.default=void 0,function(s){s.touchAction="touchAction",s.boxSizing="boxSizing",s.noListeners="noListeners"}(Js||(Js={})),Js.touchAction,Js.boxSizing,Js.noListeners;var l_={id:"dev-tools",install:function(){}};Al.default=l_;var Kr={};Object.defineProperty(Kr,"__esModule",{value:!0}),Kr.default=function s(u){var c={};for(var f in u){var g=u[f];a.default.plainObject(g)?c[f]=s(g):a.default.array(g)?c[f]=je.from(g):c[f]=g}return c};var Zr={};function Wp(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var g=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(g!=null){var S,P,M=[],C=!0,I=!1;try{for(g=g.call(c);!(C=(S=g.next()).done)&&(M.push(S.value),!f||M.length!==f);C=!0);}catch(F){I=!0,P=F}finally{try{C||g.return==null||g.return()}finally{if(I)throw P}}return M}}(s,u)||function(c,f){if(c){if(typeof c=="string")return jp(c,f);var g=Object.prototype.toString.call(c).slice(8,-1);return g==="Object"&&c.constructor&&(g=c.constructor.name),g==="Map"||g==="Set"?Array.from(c):g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)?jp(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function jp(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}function u_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Qr(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Zr,"__esModule",{value:!0}),Zr.default=void 0,Zr.getRectOffset=Xp;var c_=function(){function s(f){(function(g,S){if(!(g instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),Qr(this,"states",[]),Qr(this,"startOffset",{left:0,right:0,top:0,bottom:0}),Qr(this,"startDelta",void 0),Qr(this,"result",void 0),Qr(this,"endResult",void 0),Qr(this,"edges",void 0),Qr(this,"interaction",void 0),this.interaction=f,this.result=Dl()}var u,c;return u=s,(c=[{key:"start",value:function(f,g){var S=f.phase,P=this.interaction,M=function(I){var F=I.interactable.options[I.prepared.name],G=F.modifiers;return G&&G.length?G:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map(function(ee){var ce=F[ee];return ce&&ce.enabled&&{options:ce,methods:ce._methods}}).filter(function(ee){return!!ee})}(P);this.prepareStates(M),this.edges=(0,W.default)({},P.edges),this.startOffset=Xp(P.rect,g),this.startDelta={x:0,y:0};var C=this.fillArg({phase:S,pageCoords:g,preEnd:!1});return this.result=Dl(),this.startAll(C),this.result=this.setAll(C)}},{key:"fillArg",value:function(f){var g=this.interaction;return f.interaction=g,f.interactable=g.interactable,f.element=g.element,f.rect=f.rect||g.rect,f.edges=this.edges,f.startOffset=this.startOffset,f}},{key:"startAll",value:function(f){for(var g=0;g<this.states.length;g++){var S=this.states[g];S.methods.start&&(f.state=S,S.methods.start(f))}}},{key:"setAll",value:function(f){var g=f.phase,S=f.preEnd,P=f.skipModifiers,M=f.rect;f.coords=(0,W.default)({},f.pageCoords),f.rect=(0,W.default)({},M);for(var C=P?this.states.slice(P):this.states,I=Dl(f.coords,f.rect),F=0;F<C.length;F++){var G,ee=C[F],ce=ee.options,K=(0,W.default)({},f.coords),ye=null;(G=ee.methods)!=null&&G.set&&this.shouldDo(ce,S,g)&&(f.state=ee,ye=ee.methods.set(f),fe.addEdges(this.interaction.edges,f.rect,{x:f.coords.x-K.x,y:f.coords.y-K.y})),I.eventProps.push(ye)}I.delta.x=f.coords.x-f.pageCoords.x,I.delta.y=f.coords.y-f.pageCoords.y,I.rectDelta.left=f.rect.left-M.left,I.rectDelta.right=f.rect.right-M.right,I.rectDelta.top=f.rect.top-M.top,I.rectDelta.bottom=f.rect.bottom-M.bottom;var Pe=this.result.coords,xe=this.result.rect;if(Pe&&xe){var Ne=I.rect.left!==xe.left||I.rect.right!==xe.right||I.rect.top!==xe.top||I.rect.bottom!==xe.bottom;I.changed=Ne||Pe.x!==I.coords.x||Pe.y!==I.coords.y}return I}},{key:"applyToInteraction",value:function(f){var g=this.interaction,S=f.phase,P=g.coords.cur,M=g.coords.start,C=this.result,I=this.startDelta,F=C.delta;S==="start"&&(0,W.default)(this.startDelta,C.delta);for(var G=0;G<[[M,I],[P,F]].length;G++){var ee=Wp([[M,I],[P,F]][G],2),ce=ee[0],K=ee[1];ce.page.x+=K.x,ce.page.y+=K.y,ce.client.x+=K.x,ce.client.y+=K.y}var ye=this.result.rectDelta,Pe=f.rect||g.rect;Pe.left+=ye.left,Pe.right+=ye.right,Pe.top+=ye.top,Pe.bottom+=ye.bottom,Pe.width=Pe.right-Pe.left,Pe.height=Pe.bottom-Pe.top}},{key:"setAndApply",value:function(f){var g=this.interaction,S=f.phase,P=f.preEnd,M=f.skipModifiers,C=this.setAll(this.fillArg({preEnd:P,phase:S,pageCoords:f.modifiedCoords||g.coords.cur.page}));if(this.result=C,!C.changed&&(!M||M<this.states.length)&&g.interacting())return!1;if(f.modifiedCoords){var I=g.coords.cur.page,F={x:f.modifiedCoords.x-I.x,y:f.modifiedCoords.y-I.y};C.coords.x+=F.x,C.coords.y+=F.y,C.delta.x+=F.x,C.delta.y+=F.y}this.applyToInteraction(f)}},{key:"beforeEnd",value:function(f){var g=f.interaction,S=f.event,P=this.states;if(P&&P.length){for(var M=!1,C=0;C<P.length;C++){var I=P[C];f.state=I;var F=I.options,G=I.methods,ee=G.beforeEnd&&G.beforeEnd(f);if(ee)return this.endResult=ee,!1;M=M||!M&&this.shouldDo(F,!0,f.phase,!0)}M&&g.move({event:S,preEnd:!0})}}},{key:"stop",value:function(f){var g=f.interaction;if(this.states&&this.states.length){var S=(0,W.default)({states:this.states,interactable:g.interactable,element:g.element,rect:null},f);this.fillArg(S);for(var P=0;P<this.states.length;P++){var M=this.states[P];S.state=M,M.methods.stop&&M.methods.stop(S)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(f){this.states=[];for(var g=0;g<f.length;g++){var S=f[g],P=S.options,M=S.methods,C=S.name;this.states.push({options:P,methods:M,index:g,name:C})}return this.states}},{key:"restoreInteractionCoords",value:function(f){var g=f.interaction,S=g.coords,P=g.rect,M=g.modification;if(M.result){for(var C=M.startDelta,I=M.result,F=I.delta,G=I.rectDelta,ee=[[S.start,C],[S.cur,F]],ce=0;ce<ee.length;ce++){var K=Wp(ee[ce],2),ye=K[0],Pe=K[1];ye.page.x-=Pe.x,ye.page.y-=Pe.y,ye.client.x-=Pe.x,ye.client.y-=Pe.y}P.left-=G.left,P.right-=G.right,P.top-=G.top,P.bottom-=G.bottom}}},{key:"shouldDo",value:function(f,g,S,P){return!(!f||f.enabled===!1||P&&!f.endOnly||f.endOnly&&!g||S==="start"&&!f.setStart)}},{key:"copyFrom",value:function(f){this.startOffset=f.startOffset,this.startDelta=f.startDelta,this.edges=f.edges,this.states=f.states.map(function(g){return(0,Kr.default)(g)}),this.result=Dl((0,W.default)({},f.result.coords),(0,W.default)({},f.result.rect))}},{key:"destroy",value:function(){for(var f in this)this[f]=null}}])&&u_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();function Dl(s,u){return{rect:u,coords:s,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Xp(s,u){return s?{left:u.x-s.left,top:u.y-s.top,right:s.right-u.x,bottom:s.bottom-u.y}:{left:0,top:0,right:0,bottom:0}}Zr.default=c_;var dn={};function Rl(s){var u=s.iEvent,c=s.interaction.modification.result;c&&(u.modifiers=c.eventProps)}Object.defineProperty(dn,"__esModule",{value:!0}),dn.addEventModifiers=Rl,dn.default=void 0,dn.makeModifier=function(s,u){var c=s.defaults,f={start:s.start,set:s.set,beforeEnd:s.beforeEnd,stop:s.stop},g=function(S){var P=S||{};for(var M in P.enabled=P.enabled!==!1,c)M in P||(P[M]=c[M]);var C={options:P,methods:f,name:u,enable:function(){return P.enabled=!0,C},disable:function(){return P.enabled=!1,C}};return C};return u&&typeof u=="string"&&(g._defaults=c,g._methods=f),g};var f_={id:"modifiers/base",before:["actions"],install:function(s){s.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(s){var u=s.interaction;u.modification=new Zr.default(u)},"interactions:before-action-start":function(s){var u=s.interaction.modification;u.start(s,s.interaction.coords.start.page),s.interaction.edges=u.edges,u.applyToInteraction(s)},"interactions:before-action-move":function(s){return s.interaction.modification.setAndApply(s)},"interactions:before-action-end":function(s){return s.interaction.modification.beforeEnd(s)},"interactions:action-start":Rl,"interactions:action-move":Rl,"interactions:action-end":Rl,"interactions:after-action-start":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:after-action-move":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:stop":function(s){return s.interaction.modification.stop(s)}}},d_=f_;dn.default=d_;var ea={};Object.defineProperty(ea,"__esModule",{value:!0}),ea.defaults=void 0,ea.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var ta={};function Zc(s){return Zc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Zc(s)}function h_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Qc(s,u){return Qc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},Qc(s,u)}function p_(s,u){if(u&&(Zc(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Mt(s)}function Mt(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ll(s){return Ll=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},Ll(s)}function At(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(ta,"__esModule",{value:!0}),ta.InteractEvent=void 0;var qp=function(s){(function(M,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(C&&C.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),C&&Qc(M,C)})(P,s);var u,c,f,g,S=(f=P,g=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,C=Ll(f);if(g){var I=Ll(this).constructor;M=Reflect.construct(C,arguments,I)}else M=C.apply(this,arguments);return p_(this,M)});function P(M,C,I,F,G,ee,ce){var K;(function(Tt,lt){if(!(Tt instanceof lt))throw new TypeError("Cannot call a class as a function")})(this,P),At(Mt(K=S.call(this,M)),"relatedTarget",null),At(Mt(K),"screenX",void 0),At(Mt(K),"screenY",void 0),At(Mt(K),"button",void 0),At(Mt(K),"buttons",void 0),At(Mt(K),"ctrlKey",void 0),At(Mt(K),"shiftKey",void 0),At(Mt(K),"altKey",void 0),At(Mt(K),"metaKey",void 0),At(Mt(K),"page",void 0),At(Mt(K),"client",void 0),At(Mt(K),"delta",void 0),At(Mt(K),"rect",void 0),At(Mt(K),"x0",void 0),At(Mt(K),"y0",void 0),At(Mt(K),"t0",void 0),At(Mt(K),"dt",void 0),At(Mt(K),"duration",void 0),At(Mt(K),"clientX0",void 0),At(Mt(K),"clientY0",void 0),At(Mt(K),"velocity",void 0),At(Mt(K),"speed",void 0),At(Mt(K),"swipe",void 0),At(Mt(K),"axes",void 0),At(Mt(K),"preEnd",void 0),G=G||M.element;var ye=M.interactable,Pe=(ye&&ye.options||ea.defaults).deltaSource,xe=(0,J.default)(ye,G,I),Ne=F==="start",We=F==="end",tt=Ne?Mt(K):M.prevEvent,vt=Ne?M.coords.start:We?{page:tt.page,client:tt.client,timeStamp:M.coords.cur.timeStamp}:M.coords.cur;return K.page=(0,W.default)({},vt.page),K.client=(0,W.default)({},vt.client),K.rect=(0,W.default)({},M.rect),K.timeStamp=vt.timeStamp,We||(K.page.x-=xe.x,K.page.y-=xe.y,K.client.x-=xe.x,K.client.y-=xe.y),K.ctrlKey=C.ctrlKey,K.altKey=C.altKey,K.shiftKey=C.shiftKey,K.metaKey=C.metaKey,K.button=C.button,K.buttons=C.buttons,K.target=G,K.currentTarget=G,K.preEnd=ee,K.type=ce||I+(F||""),K.interactable=ye,K.t0=Ne?M.pointers[M.pointers.length-1].downTime:tt.t0,K.x0=M.coords.start.page.x-xe.x,K.y0=M.coords.start.page.y-xe.y,K.clientX0=M.coords.start.client.x-xe.x,K.clientY0=M.coords.start.client.y-xe.y,K.delta=Ne||We?{x:0,y:0}:{x:K[Pe].x-tt[Pe].x,y:K[Pe].y-tt[Pe].y},K.dt=M.coords.delta.timeStamp,K.duration=K.timeStamp-K.t0,K.velocity=(0,W.default)({},M.coords.velocity[Pe]),K.speed=(0,ge.default)(K.velocity.x,K.velocity.y),K.swipe=We||F==="inertiastart"?K.getSwipe():null,K}return u=P,(c=[{key:"getSwipe",value:function(){var M=this._interaction;if(M.prevEvent.speed<600||this.timeStamp-M.prevEvent.timeStamp>150)return null;var C=180*Math.atan2(M.prevEvent.velocityY,M.prevEvent.velocityX)/Math.PI;C<0&&(C+=360);var I=112.5<=C&&C<247.5,F=202.5<=C&&C<337.5;return{up:F,down:!F&&22.5<=C&&C<157.5,left:I,right:!I&&(292.5<=C||C<67.5),angle:C,speed:M.prevEvent.speed,velocity:{x:M.prevEvent.velocityX,y:M.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&h_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),P}(Be.BaseEvent);ta.InteractEvent=qp,Object.defineProperties(qp.prototype,{pageX:{get:function(){return this.page.x},set:function(s){this.page.x=s}},pageY:{get:function(){return this.page.y},set:function(s){this.page.y=s}},clientX:{get:function(){return this.client.x},set:function(s){this.client.x=s}},clientY:{get:function(){return this.client.y},set:function(s){this.client.y=s}},dx:{get:function(){return this.delta.x},set:function(s){this.delta.x=s}},dy:{get:function(){return this.delta.y},set:function(s){this.delta.y=s}},velocityX:{get:function(){return this.velocity.x},set:function(s){this.velocity.x=s}},velocityY:{get:function(){return this.velocity.y},set:function(s){this.velocity.y=s}}});var na={};function Yp(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function m_(s,u,c){return u&&Yp(s.prototype,u),c&&Yp(s,c),Object.defineProperty(s,"prototype",{writable:!1}),s}function ia(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(na,"__esModule",{value:!0}),na.PointerInfo=void 0;var g_=m_(function s(u,c,f,g,S){(function(P,M){if(!(P instanceof M))throw new TypeError("Cannot call a class as a function")})(this,s),ia(this,"id",void 0),ia(this,"pointer",void 0),ia(this,"event",void 0),ia(this,"downTime",void 0),ia(this,"downTarget",void 0),this.id=u,this.pointer=c,this.event=f,this.downTime=g,this.downTarget=S});na.PointerInfo=g_;var Il,Ol,Un={};function v_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function kt(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Un,"__esModule",{value:!0}),Un.Interaction=void 0,Object.defineProperty(Un,"PointerInfo",{enumerable:!0,get:function(){return na.PointerInfo}}),Un.default=Un._ProxyValues=Un._ProxyMethods=void 0,Un._ProxyValues=Il,function(s){s.interactable="",s.element="",s.prepared="",s.pointerIsDown="",s.pointerWasMoved="",s._proxy=""}(Il||(Un._ProxyValues=Il={})),Un._ProxyMethods=Ol,function(s){s.start="",s.move="",s.end="",s.stop="",s.interacting=""}(Ol||(Un._ProxyMethods=Ol={}));var y_=0,$p=function(){function s(f){var g=this,S=f.pointerType,P=f.scopeFire;(function(ee,ce){if(!(ee instanceof ce))throw new TypeError("Cannot call a class as a function")})(this,s),kt(this,"interactable",null),kt(this,"element",null),kt(this,"rect",null),kt(this,"_rects",void 0),kt(this,"edges",null),kt(this,"_scopeFire",void 0),kt(this,"prepared",{name:null,axis:null,edges:null}),kt(this,"pointerType",void 0),kt(this,"pointers",[]),kt(this,"downEvent",null),kt(this,"downPointer",{}),kt(this,"_latestPointer",{pointer:null,event:null,eventTarget:null}),kt(this,"prevEvent",null),kt(this,"pointerIsDown",!1),kt(this,"pointerWasMoved",!1),kt(this,"_interacting",!1),kt(this,"_ending",!1),kt(this,"_stopped",!0),kt(this,"_proxy",null),kt(this,"simulation",null),kt(this,"doMove",(0,ie.warnOnce)(function(ee){this.move(ee)},"The interaction.doMove() method has been renamed to interaction.move()")),kt(this,"coords",{start:q.newCoords(),prev:q.newCoords(),cur:q.newCoords(),delta:q.newCoords(),velocity:q.newCoords()}),kt(this,"_id",y_++),this._scopeFire=P,this.pointerType=S;var M=this;this._proxy={};var C=function(ee){Object.defineProperty(g._proxy,ee,{get:function(){return M[ee]}})};for(var I in Il)C(I);var F=function(ee){Object.defineProperty(g._proxy,ee,{value:function(){return M[ee].apply(M,arguments)}})};for(var G in Ol)F(G);this._scopeFire("interactions:new",{interaction:this})}var u,c;return u=s,c=[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(f,g,S){var P=this.updatePointer(f,g,S,!0),M=this.pointers[P];this._scopeFire("interactions:down",{pointer:f,event:g,eventTarget:S,pointerIndex:P,pointerInfo:M,type:"down",interaction:this})}},{key:"start",value:function(f,g,S){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(f.name==="gesture"?2:1)||!g.options[f.name].enabled)&&((0,ie.copyAction)(this.prepared,f),this.interactable=g,this.element=S,this.rect=g.getRect(S),this.edges=this.prepared.edges?(0,W.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(f,g,S){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(f,g,S,!1);var P,M,C=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(P=this.coords.cur.client.x-this.coords.start.client.x,M=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,ge.default)(P,M)>this.pointerMoveTolerance);var I=this.getPointerIndex(f),F={pointer:f,pointerIndex:I,pointerInfo:this.pointers[I],event:g,type:"move",eventTarget:S,dx:P,dy:M,duplicate:C,interaction:this};C||q.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",F),C||this.simulation||(this.interacting()&&(F.type=null,this.move(F)),this.pointerWasMoved&&q.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(f){f&&f.event||q.setZeroCoords(this.coords.delta),(f=(0,W.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},f||{})).phase="move",this._doPhase(f)}},{key:"pointerUp",value:function(f,g,S,P){var M=this.getPointerIndex(f);M===-1&&(M=this.updatePointer(f,g,S,!1));var C=/cancel$/i.test(g.type)?"cancel":"up";this._scopeFire("interactions:".concat(C),{pointer:f,pointerIndex:M,pointerInfo:this.pointers[M],event:g,eventTarget:S,type:C,curEventTarget:P,interaction:this}),this.simulation||this.end(g),this.removePointer(f,g)}},{key:"documentBlur",value:function(f){this.end(f),this._scopeFire("interactions:blur",{event:f,type:"blur",interaction:this})}},{key:"end",value:function(f){var g;this._ending=!0,f=f||this._latestPointer.event,this.interacting()&&(g=this._doPhase({event:f,interaction:this,phase:"end"})),this._ending=!1,g===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(f){var g=q.getPointerId(f);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:je.findIndex(this.pointers,function(S){return S.id===g})}},{key:"getPointerInfo",value:function(f){return this.pointers[this.getPointerIndex(f)]}},{key:"updatePointer",value:function(f,g,S,P){var M=q.getPointerId(f),C=this.getPointerIndex(f),I=this.pointers[C];return P=P!==!1&&(P||/(down|start)$/i.test(g.type)),I?I.pointer=f:(I=new na.PointerInfo(M,f,g,null,null),C=this.pointers.length,this.pointers.push(I)),q.setCoords(this.coords.cur,this.pointers.map(function(F){return F.pointer}),this._now()),q.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),P&&(this.pointerIsDown=!0,I.downTime=this.coords.cur.timeStamp,I.downTarget=S,q.pointerExtend(this.downPointer,f),this.interacting()||(q.copyCoords(this.coords.start,this.coords.cur),q.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=g,this.pointerWasMoved=!1)),this._updateLatestPointer(f,g,S),this._scopeFire("interactions:update-pointer",{pointer:f,event:g,eventTarget:S,down:P,pointerInfo:I,pointerIndex:C,interaction:this}),C}},{key:"removePointer",value:function(f,g){var S=this.getPointerIndex(f);if(S!==-1){var P=this.pointers[S];this._scopeFire("interactions:remove-pointer",{pointer:f,event:g,eventTarget:null,pointerIndex:S,pointerInfo:P,interaction:this}),this.pointers.splice(S,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(f,g,S){this._latestPointer.pointer=f,this._latestPointer.event=g,this._latestPointer.eventTarget=S}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(f,g,S,P){return new ta.InteractEvent(this,f,this.prepared.name,g,this.element,S,P)}},{key:"_fireEvent",value:function(f){var g;(g=this.interactable)==null||g.fire(f),(!this.prevEvent||f.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=f)}},{key:"_doPhase",value:function(f){var g=f.event,S=f.phase,P=f.preEnd,M=f.type,C=this.rect;if(C&&S==="move"&&(fe.addEdges(this.edges,C,this.coords.delta[this.interactable.options.deltaSource]),C.width=C.right-C.left,C.height=C.bottom-C.top),this._scopeFire("interactions:before-action-".concat(S),f)===!1)return!1;var I=f.iEvent=this._createPreparedEvent(g,S,P,M);return this._scopeFire("interactions:action-".concat(S),f),S==="start"&&(this.prevEvent=I),this._fireEvent(I),this._scopeFire("interactions:after-action-".concat(S),f),!0}},{key:"_now",value:function(){return Date.now()}}],c&&v_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();Un.Interaction=$p;var x_=$p;Un.default=x_;var hr={};function Kp(s){s.pointerIsDown&&(ef(s.coords.cur,s.offset.total),s.offset.pending.x=0,s.offset.pending.y=0)}function Zp(s){Jc(s.interaction)}function Jc(s){if(!function(c){return!(!c.offset.pending.x&&!c.offset.pending.y)}(s))return!1;var u=s.offset.pending;return ef(s.coords.cur,u),ef(s.coords.delta,u),fe.addEdges(s.edges,s.rect,u),u.x=0,u.y=0,!0}function __(s){var u=s.x,c=s.y;this.offset.pending.x+=u,this.offset.pending.y+=c,this.offset.total.x+=u,this.offset.total.y+=c}function ef(s,u){var c=s.page,f=s.client,g=u.x,S=u.y;c.x+=g,c.y+=S,f.x+=g,f.y+=S}Object.defineProperty(hr,"__esModule",{value:!0}),hr.addTotal=Kp,hr.applyPending=Jc,hr.default=void 0,Un._ProxyMethods.offsetBy="";var S_={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(s){s.Interaction.prototype.offsetBy=__},listeners:{"interactions:new":function(s){s.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(s){return Kp(s.interaction)},"interactions:before-action-start":Zp,"interactions:before-action-move":Zp,"interactions:before-action-end":function(s){var u=s.interaction;if(Jc(u))return u.move({offset:!0}),u.end(),!1},"interactions:stop":function(s){var u=s.interaction;u.offset.total.x=0,u.offset.total.y=0,u.offset.pending.x=0,u.offset.pending.y=0}}},M_=S_;hr.default=M_;var Jr={};function w_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function an(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Jr,"__esModule",{value:!0}),Jr.default=Jr.InertiaState=void 0;var Qp=function(){function s(f){(function(g,S){if(!(g instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),an(this,"active",!1),an(this,"isModified",!1),an(this,"smoothEnd",!1),an(this,"allowResume",!1),an(this,"modification",void 0),an(this,"modifierCount",0),an(this,"modifierArg",void 0),an(this,"startCoords",void 0),an(this,"t0",0),an(this,"v0",0),an(this,"te",0),an(this,"targetOffset",void 0),an(this,"modifiedOffset",void 0),an(this,"currentOffset",void 0),an(this,"lambda_v0",0),an(this,"one_ve_v0",0),an(this,"timeout",void 0),an(this,"interaction",void 0),this.interaction=f}var u,c;return u=s,(c=[{key:"start",value:function(f){var g=this.interaction,S=Ul(g);if(!S||!S.enabled)return!1;var P=g.coords.velocity.client,M=(0,ge.default)(P.x,P.y),C=this.modification||(this.modification=new Zr.default(g));if(C.copyFrom(g.modification),this.t0=g._now(),this.allowResume=S.allowResume,this.v0=M,this.currentOffset={x:0,y:0},this.startCoords=g.coords.cur.page,this.modifierArg=C.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-g.coords.cur.timeStamp<50&&M>S.minSpeed&&M>S.endSpeed)this.startInertia();else{if(C.result=C.setAll(this.modifierArg),!C.result.changed)return!1;this.startSmoothEnd()}return g.modification.result.rect=null,g.offsetBy(this.targetOffset),g._doPhase({interaction:g,event:f,phase:"inertiastart"}),g.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),g.modification.result.rect=null,this.active=!0,g.simulation=this,!0}},{key:"startInertia",value:function(){var f=this,g=this.interaction.coords.velocity.client,S=Ul(this.interaction),P=S.resistance,M=-Math.log(S.endSpeed/this.v0)/P;this.targetOffset={x:(g.x-M)/P,y:(g.y-M)/P},this.te=M,this.lambda_v0=P/this.v0,this.one_ve_v0=1-S.endSpeed/this.v0;var C=this.modification,I=this.modifierArg;I.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},C.result=C.setAll(I),C.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+C.result.delta.x,y:this.targetOffset.y+C.result.delta.y}),this.onNextFrame(function(){return f.inertiaTick()})}},{key:"startSmoothEnd",value:function(){var f=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame(function(){return f.smoothEndTick()})}},{key:"onNextFrame",value:function(f){var g=this;this.timeout=Xt.default.request(function(){g.active&&f()})}},{key:"inertiaTick",value:function(){var f,g,S,P,M,C=this,I=this.interaction,F=Ul(I).resistance,G=(I._now()-this.t0)/1e3;if(G<this.te){var ee,ce=1-(Math.exp(-F*G)-this.lambda_v0)/this.one_ve_v0;this.isModified?(f=this.targetOffset.x,g=this.targetOffset.y,S=this.modifiedOffset.x,P=this.modifiedOffset.y,ee={x:Jp(M=ce,0,f,S),y:Jp(M,0,g,P)}):ee={x:this.targetOffset.x*ce,y:this.targetOffset.y*ce};var K={x:ee.x-this.currentOffset.x,y:ee.y-this.currentOffset.y};this.currentOffset.x+=K.x,this.currentOffset.y+=K.y,I.offsetBy(K),I.move(),this.onNextFrame(function(){return C.inertiaTick()})}else I.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var f=this,g=this.interaction,S=g._now()-this.t0,P=Ul(g).smoothEndDuration;if(S<P){var M={x:em(S,0,this.targetOffset.x,P),y:em(S,0,this.targetOffset.y,P)},C={x:M.x-this.currentOffset.x,y:M.y-this.currentOffset.y};this.currentOffset.x+=C.x,this.currentOffset.y+=C.y,g.offsetBy(C),g.move({skipModifiers:this.modifierCount}),this.onNextFrame(function(){return f.smoothEndTick()})}else g.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(f){var g=f.pointer,S=f.event,P=f.eventTarget,M=this.interaction;M.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),M.updatePointer(g,S,P,!0),M._doPhase({interaction:M,event:S,phase:"resume"}),(0,q.copyCoords)(M.coords.prev,M.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,Xt.default.cancel(this.timeout)}}])&&w_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();function Ul(s){var u=s.interactable,c=s.prepared;return u&&u.options&&c.name&&u.options[c.name].inertia}Jr.InertiaState=Qp;var b_={id:"inertia",before:["modifiers","actions"],install:function(s){var u=s.defaults;s.usePlugin(hr.default),s.usePlugin(dn.default),s.actions.phases.inertiastart=!0,s.actions.phases.resume=!0,u.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(s){var u=s.interaction;u.inertia=new Qp(u)},"interactions:before-action-end":function(s){var u=s.interaction,c=s.event;return(!u._interacting||u.simulation||!u.inertia.start(c))&&null},"interactions:down":function(s){var u=s.interaction,c=s.eventTarget,f=u.inertia;if(f.active)for(var g=c;a.default.element(g);){if(g===u.element){f.resume(s);break}g=k.parentNode(g)}},"interactions:stop":function(s){var u=s.interaction.inertia;u.active&&u.stop()},"interactions:before-action-resume":function(s){var u=s.interaction.modification;u.stop(s),u.start(s,s.interaction.coords.cur.page),u.applyToInteraction(s)},"interactions:before-action-inertiastart":function(s){return s.interaction.modification.setAndApply(s)},"interactions:action-resume":dn.addEventModifiers,"interactions:action-inertiastart":dn.addEventModifiers,"interactions:after-action-inertiastart":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:after-action-resume":function(s){return s.interaction.modification.restoreInteractionCoords(s)}}};function Jp(s,u,c,f){var g=1-s;return g*g*u+2*g*s*c+s*s*f}function em(s,u,c,f){return-c*(s/=f)*(s-2)+u}var E_=b_;Jr.default=E_;var ra={};function T_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function oa(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}function tm(s,u){for(var c=0;c<u.length;c++){var f=u[c];if(s.immediatePropagationStopped)break;f(s)}}Object.defineProperty(ra,"__esModule",{value:!0}),ra.Eventable=void 0;var C_=function(){function s(f){(function(g,S){if(!(g instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),oa(this,"options",void 0),oa(this,"types",{}),oa(this,"propagationStopped",!1),oa(this,"immediatePropagationStopped",!1),oa(this,"global",void 0),this.options=(0,W.default)({},f||{})}var u,c;return u=s,(c=[{key:"fire",value:function(f){var g,S=this.global;(g=this.types[f.type])&&tm(f,g),!f.propagationStopped&&S&&(g=S[f.type])&&tm(f,g)}},{key:"on",value:function(f,g){var S=(0,re.default)(f,g);for(f in S)this.types[f]=je.merge(this.types[f]||[],S[f])}},{key:"off",value:function(f,g){var S=(0,re.default)(f,g);for(f in S){var P=this.types[f];if(P&&P.length)for(var M=0;M<S[f].length;M++){var C=S[f][M],I=P.indexOf(C);I!==-1&&P.splice(I,1)}}}},{key:"getRect",value:function(f){return null}}])&&T_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();ra.Eventable=C_;var sa={};Object.defineProperty(sa,"__esModule",{value:!0}),sa.default=function(s,u){if(u.phaselessTypes[s])return!0;for(var c in u.map)if(s.indexOf(c)===0&&s.substr(c.length)in u.phases)return!0;return!1};var tf={};Object.defineProperty(tf,"__esModule",{value:!0}),tf.createInteractStatic=function(s){var u=function c(f,g){var S=s.interactables.get(f,g);return S||((S=s.interactables.new(f,g)).events.global=c.globalEvents),S};return u.getPointerAverage=q.pointerAverage,u.getTouchBBox=q.touchBBox,u.getTouchDistance=q.touchDistance,u.getTouchAngle=q.touchAngle,u.getElementRect=k.getElementRect,u.getElementClientRect=k.getElementClientRect,u.matchesSelector=k.matchesSelector,u.closest=k.closest,u.globalEvents={},u.version="1.10.17",u.scope=s,u.use=function(c,f){return this.scope.usePlugin(c,f),this},u.isSet=function(c,f){return!!this.scope.interactables.get(c,f&&f.context)},u.on=(0,ie.warnOnce)(function(c,f,g){if(a.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),a.default.array(c)){for(var S=0;S<c.length;S++){var P=c[S];this.on(P,f,g)}return this}if(a.default.object(c)){for(var M in c)this.on(M,c[M],f);return this}return(0,sa.default)(c,this.scope.actions)?this.globalEvents[c]?this.globalEvents[c].push(f):this.globalEvents[c]=[f]:this.scope.events.add(this.scope.document,c,f,{options:g}),this},"The interact.on() method is being deprecated"),u.off=(0,ie.warnOnce)(function(c,f,g){if(a.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),a.default.array(c)){for(var S=0;S<c.length;S++){var P=c[S];this.off(P,f,g)}return this}if(a.default.object(c)){for(var M in c)this.off(M,c[M],f);return this}var C;return(0,sa.default)(c,this.scope.actions)?c in this.globalEvents&&(C=this.globalEvents[c].indexOf(f))!==-1&&this.globalEvents[c].splice(C,1):this.scope.events.remove(this.scope.document,c,f,g),this},"The interact.off() method is being deprecated"),u.debug=function(){return this.scope},u.supportsTouch=function(){return D.default.supportsTouch},u.supportsPointerEvent=function(){return D.default.supportsPointerEvent},u.stop=function(){for(var c=0;c<this.scope.interactions.list.length;c++)this.scope.interactions.list[c].stop();return this},u.pointerMoveTolerance=function(c){return a.default.number(c)?(this.scope.interactions.pointerMoveTolerance=c,this):this.scope.interactions.pointerMoveTolerance},u.addDocument=function(c,f){this.scope.addDocument(c,f)},u.removeDocument=function(c){this.scope.removeDocument(c)},u};var kl={};function P_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Wi(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(kl,"__esModule",{value:!0}),kl.Interactable=void 0;var A_=function(){function s(f,g,S,P){(function(M,C){if(!(M instanceof C))throw new TypeError("Cannot call a class as a function")})(this,s),Wi(this,"options",void 0),Wi(this,"_actions",void 0),Wi(this,"target",void 0),Wi(this,"events",new ra.Eventable),Wi(this,"_context",void 0),Wi(this,"_win",void 0),Wi(this,"_doc",void 0),Wi(this,"_scopeEvents",void 0),Wi(this,"_rectChecker",void 0),this._actions=g.actions,this.target=f,this._context=g.context||S,this._win=(0,i.getWindow)((0,k.trySelector)(f)?this._context:f),this._doc=this._win.document,this._scopeEvents=P,this.set(g)}var u,c;return u=s,(c=[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(f,g){return a.default.func(g.onstart)&&this.on("".concat(f,"start"),g.onstart),a.default.func(g.onmove)&&this.on("".concat(f,"move"),g.onmove),a.default.func(g.onend)&&this.on("".concat(f,"end"),g.onend),a.default.func(g.oninertiastart)&&this.on("".concat(f,"inertiastart"),g.oninertiastart),this}},{key:"updatePerActionListeners",value:function(f,g,S){(a.default.array(g)||a.default.object(g))&&this.off(f,g),(a.default.array(S)||a.default.object(S))&&this.on(f,S)}},{key:"setPerAction",value:function(f,g){var S=this._defaults;for(var P in g){var M=P,C=this.options[f],I=g[M];M==="listeners"&&this.updatePerActionListeners(f,C.listeners,I),a.default.array(I)?C[M]=je.from(I):a.default.plainObject(I)?(C[M]=(0,W.default)(C[M]||{},(0,Kr.default)(I)),a.default.object(S.perAction[M])&&"enabled"in S.perAction[M]&&(C[M].enabled=I.enabled!==!1)):a.default.bool(I)&&a.default.object(S.perAction[M])?C[M].enabled=I:C[M]=I}}},{key:"getRect",value:function(f){return f=f||(a.default.element(this.target)?this.target:null),a.default.string(this.target)&&(f=f||this._context.querySelector(this.target)),(0,k.getElementRect)(f)}},{key:"rectChecker",value:function(f){var g=this;return a.default.func(f)?(this._rectChecker=f,this.getRect=function(S){var P=(0,W.default)({},g._rectChecker(S));return"width"in P||(P.width=P.right-P.left,P.height=P.bottom-P.top),P},this):f===null?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(f,g){if((0,k.trySelector)(g)||a.default.object(g)){for(var S in this.options[f]=g,this._actions.map)this.options[S][f]=g;return this}return this.options[f]}},{key:"origin",value:function(f){return this._backCompatOption("origin",f)}},{key:"deltaSource",value:function(f){return f==="page"||f==="client"?(this.options.deltaSource=f,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(f){return this._context===f.ownerDocument||(0,k.nodeContains)(this._context,f)}},{key:"testIgnoreAllow",value:function(f,g,S){return!this.testIgnore(f.ignoreFrom,g,S)&&this.testAllow(f.allowFrom,g,S)}},{key:"testAllow",value:function(f,g,S){return!f||!!a.default.element(S)&&(a.default.string(f)?(0,k.matchesUpTo)(S,f,g):!!a.default.element(f)&&(0,k.nodeContains)(f,S))}},{key:"testIgnore",value:function(f,g,S){return!(!f||!a.default.element(S))&&(a.default.string(f)?(0,k.matchesUpTo)(S,f,g):!!a.default.element(f)&&(0,k.nodeContains)(f,S))}},{key:"fire",value:function(f){return this.events.fire(f),this}},{key:"_onOff",value:function(f,g,S,P){a.default.object(g)&&!a.default.array(g)&&(P=S,S=null);var M=f==="on"?"add":"remove",C=(0,re.default)(g,S);for(var I in C){I==="wheel"&&(I=D.default.wheelEvent);for(var F=0;F<C[I].length;F++){var G=C[I][F];(0,sa.default)(I,this._actions)?this.events[f](I,G):a.default.string(this.target)?this._scopeEvents["".concat(M,"Delegate")](this.target,this._context,I,G,P):this._scopeEvents[M](this.target,I,G,P)}}return this}},{key:"on",value:function(f,g,S){return this._onOff("on",f,g,S)}},{key:"off",value:function(f,g,S){return this._onOff("off",f,g,S)}},{key:"set",value:function(f){var g=this._defaults;for(var S in a.default.object(f)||(f={}),this.options=(0,Kr.default)(g.base),this._actions.methodDict){var P=S,M=this._actions.methodDict[P];this.options[P]={},this.setPerAction(P,(0,W.default)((0,W.default)({},g.perAction),g.actions[P])),this[M](f[P])}for(var C in f)a.default.func(this[C])&&this[C](f[C]);return this}},{key:"unset",value:function(){if(a.default.string(this.target))for(var f in this._scopeEvents.delegatedEvents)for(var g=this._scopeEvents.delegatedEvents[f],S=g.length-1;S>=0;S--){var P=g[S],M=P.selector,C=P.context,I=P.listeners;M===this.target&&C===this._context&&g.splice(S,1);for(var F=I.length-1;F>=0;F--)this._scopeEvents.removeDelegate(this.target,this._context,f,I[F][0],I[F][1])}else this._scopeEvents.remove(this.target,"all")}}])&&P_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();kl.Interactable=A_;var Nl={};function D_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function nf(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Nl,"__esModule",{value:!0}),Nl.InteractableSet=void 0;var R_=function(){function s(f){var g=this;(function(S,P){if(!(S instanceof P))throw new TypeError("Cannot call a class as a function")})(this,s),nf(this,"list",[]),nf(this,"selectorMap",{}),nf(this,"scope",void 0),this.scope=f,f.addListeners({"interactable:unset":function(S){var P=S.interactable,M=P.target,C=P._context,I=a.default.string(M)?g.selectorMap[M]:M[g.scope.id],F=je.findIndex(I,function(G){return G.context===C});I[F]&&(I[F].context=null,I[F].interactable=null),I.splice(F,1)}})}var u,c;return u=s,(c=[{key:"new",value:function(f,g){g=(0,W.default)(g||{},{actions:this.scope.actions});var S=new this.scope.Interactable(f,g,this.scope.document,this.scope.events),P={context:S._context,interactable:S};return this.scope.addDocument(S._doc),this.list.push(S),a.default.string(f)?(this.selectorMap[f]||(this.selectorMap[f]=[]),this.selectorMap[f].push(P)):(S.target[this.scope.id]||Object.defineProperty(f,this.scope.id,{value:[],configurable:!0}),f[this.scope.id].push(P)),this.scope.fire("interactable:new",{target:f,options:g,interactable:S,win:this.scope._win}),S}},{key:"get",value:function(f,g){var S=g&&g.context||this.scope.document,P=a.default.string(f),M=P?this.selectorMap[f]:f[this.scope.id];if(!M)return null;var C=je.find(M,function(I){return I.context===S&&(P||I.interactable.inContext(f))});return C&&C.interactable}},{key:"forEachMatch",value:function(f,g){for(var S=0;S<this.list.length;S++){var P=this.list[S],M=void 0;if((a.default.string(P.target)?a.default.element(f)&&k.matchesSelector(f,P.target):f===P.target)&&P.inContext(f)&&(M=g(P)),M!==void 0)return M}}}])&&D_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();Nl.InteractableSet=R_;var zl={};function L_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function rf(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}function of(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var g=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(g!=null){var S,P,M=[],C=!0,I=!1;try{for(g=g.call(c);!(C=(S=g.next()).done)&&(M.push(S.value),!f||M.length!==f);C=!0);}catch(F){I=!0,P=F}finally{try{C||g.return==null||g.return()}finally{if(I)throw P}}return M}}(s,u)||function(c,f){if(c){if(typeof c=="string")return nm(c,f);var g=Object.prototype.toString.call(c).slice(8,-1);return g==="Object"&&c.constructor&&(g=c.constructor.name),g==="Map"||g==="Set"?Array.from(c):g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)?nm(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function nm(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}Object.defineProperty(zl,"__esModule",{value:!0}),zl.default=void 0;var I_=function(){function s(f){(function(g,S){if(!(g instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),rf(this,"currentTarget",void 0),rf(this,"originalEvent",void 0),rf(this,"type",void 0),this.originalEvent=f,(0,oe.default)(this,f)}var u,c;return u=s,(c=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&L_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();function aa(s){if(!a.default.object(s))return{capture:!!s,passive:!1};var u=(0,W.default)({},s);return u.capture=!!s.capture,u.passive=!!s.passive,u}var O_={id:"events",install:function(s){var u,c=[],f={},g=[],S={add:P,remove:M,addDelegate:function(F,G,ee,ce,K){var ye=aa(K);if(!f[ee]){f[ee]=[];for(var Pe=0;Pe<g.length;Pe++){var xe=g[Pe];P(xe,ee,C),P(xe,ee,I,!0)}}var Ne=f[ee],We=je.find(Ne,function(tt){return tt.selector===F&&tt.context===G});We||(We={selector:F,context:G,listeners:[]},Ne.push(We)),We.listeners.push([ce,ye])},removeDelegate:function(F,G,ee,ce,K){var ye,Pe=aa(K),xe=f[ee],Ne=!1;if(xe)for(ye=xe.length-1;ye>=0;ye--){var We=xe[ye];if(We.selector===F&&We.context===G){for(var tt=We.listeners,vt=tt.length-1;vt>=0;vt--){var Tt=of(tt[vt],2),lt=Tt[0],wt=Tt[1],oi=wt.capture,Xi=wt.passive;if(lt===ce&&oi===Pe.capture&&Xi===Pe.passive){tt.splice(vt,1),tt.length||(xe.splice(ye,1),M(G,ee,C),M(G,ee,I,!0)),Ne=!0;break}}if(Ne)break}}},delegateListener:C,delegateUseCapture:I,delegatedEvents:f,documents:g,targets:c,supportsOptions:!1,supportsPassive:!1};function P(F,G,ee,ce){var K=aa(ce),ye=je.find(c,function(Pe){return Pe.eventTarget===F});ye||(ye={eventTarget:F,events:{}},c.push(ye)),ye.events[G]||(ye.events[G]=[]),F.addEventListener&&!je.contains(ye.events[G],ee)&&(F.addEventListener(G,ee,S.supportsOptions?K:K.capture),ye.events[G].push(ee))}function M(F,G,ee,ce){var K=aa(ce),ye=je.findIndex(c,function(vt){return vt.eventTarget===F}),Pe=c[ye];if(Pe&&Pe.events)if(G!=="all"){var xe=!1,Ne=Pe.events[G];if(Ne){if(ee==="all"){for(var We=Ne.length-1;We>=0;We--)M(F,G,Ne[We],K);return}for(var tt=0;tt<Ne.length;tt++)if(Ne[tt]===ee){F.removeEventListener(G,ee,S.supportsOptions?K:K.capture),Ne.splice(tt,1),Ne.length===0&&(delete Pe.events[G],xe=!0);break}}xe&&!Object.keys(Pe.events).length&&c.splice(ye,1)}else for(G in Pe.events)Pe.events.hasOwnProperty(G)&&M(F,G,"all")}function C(F,G){for(var ee=aa(G),ce=new I_(F),K=f[F.type],ye=of(q.getEventTargets(F),1)[0],Pe=ye;a.default.element(Pe);){for(var xe=0;xe<K.length;xe++){var Ne=K[xe],We=Ne.selector,tt=Ne.context;if(k.matchesSelector(Pe,We)&&k.nodeContains(tt,ye)&&k.nodeContains(tt,Pe)){var vt=Ne.listeners;ce.currentTarget=Pe;for(var Tt=0;Tt<vt.length;Tt++){var lt=of(vt[Tt],2),wt=lt[0],oi=lt[1],Xi=oi.capture,bf=oi.passive;Xi===ee.capture&&bf===ee.passive&&wt(ce)}}}Pe=k.parentNode(Pe)}}function I(F){return C(F,!0)}return(u=s.document)==null||u.createElement("div").addEventListener("test",null,{get capture(){return S.supportsOptions=!0},get passive(){return S.supportsPassive=!0}}),s.events=S,S}};zl.default=O_;var Fl={};Object.defineProperty(Fl,"__esModule",{value:!0}),Fl.default=void 0;var Bl={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(s){for(var u=0;u<Bl.methodOrder.length;u++){var c;c=Bl.methodOrder[u];var f=Bl[c](s);if(f)return f}return null},simulationResume:function(s){var u=s.pointerType,c=s.eventType,f=s.eventTarget,g=s.scope;if(!/down|start/i.test(c))return null;for(var S=0;S<g.interactions.list.length;S++){var P=g.interactions.list[S],M=f;if(P.simulation&&P.simulation.allowResume&&P.pointerType===u)for(;M;){if(M===P.element)return P;M=k.parentNode(M)}}return null},mouseOrPen:function(s){var u,c=s.pointerId,f=s.pointerType,g=s.eventType,S=s.scope;if(f!=="mouse"&&f!=="pen")return null;for(var P=0;P<S.interactions.list.length;P++){var M=S.interactions.list[P];if(M.pointerType===f){if(M.simulation&&!im(M,c))continue;if(M.interacting())return M;u||(u=M)}}if(u)return u;for(var C=0;C<S.interactions.list.length;C++){var I=S.interactions.list[C];if(!(I.pointerType!==f||/down/i.test(g)&&I.simulation))return I}return null},hasPointer:function(s){for(var u=s.pointerId,c=s.scope,f=0;f<c.interactions.list.length;f++){var g=c.interactions.list[f];if(im(g,u))return g}return null},idle:function(s){for(var u=s.pointerType,c=s.scope,f=0;f<c.interactions.list.length;f++){var g=c.interactions.list[f];if(g.pointers.length===1){var S=g.interactable;if(S&&(!S.options.gesture||!S.options.gesture.enabled))continue}else if(g.pointers.length>=2)continue;if(!g.interacting()&&u===g.pointerType)return g}return null}};function im(s,u){return s.pointers.some(function(c){return c.id===u})}var U_=Bl;Fl.default=U_;var Vl={};function sf(s){return sf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},sf(s)}function rm(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var g=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(g!=null){var S,P,M=[],C=!0,I=!1;try{for(g=g.call(c);!(C=(S=g.next()).done)&&(M.push(S.value),!f||M.length!==f);C=!0);}catch(F){I=!0,P=F}finally{try{C||g.return==null||g.return()}finally{if(I)throw P}}return M}}(s,u)||function(c,f){if(c){if(typeof c=="string")return om(c,f);var g=Object.prototype.toString.call(c).slice(8,-1);return g==="Object"&&c.constructor&&(g=c.constructor.name),g==="Map"||g==="Set"?Array.from(c):g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)?om(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function om(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}function k_(s,u){if(!(s instanceof u))throw new TypeError("Cannot call a class as a function")}function N_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function af(s,u){return af=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},af(s,u)}function z_(s,u){if(u&&(sf(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(s)}function Gl(s){return Gl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},Gl(s)}Object.defineProperty(Vl,"__esModule",{value:!0}),Vl.default=void 0;var lf=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function sm(s,u){return function(c){var f=u.interactions.list,g=q.getPointerType(c),S=rm(q.getEventTargets(c),2),P=S[0],M=S[1],C=[];if(/^touch/.test(c.type)){u.prevTouchTime=u.now();for(var I=0;I<c.changedTouches.length;I++){var F=c.changedTouches[I],G={pointer:F,pointerId:q.getPointerId(F),pointerType:g,eventType:c.type,eventTarget:P,curEventTarget:M,scope:u},ee=am(G);C.push([G.pointer,G.eventTarget,G.curEventTarget,ee])}}else{var ce=!1;if(!D.default.supportsPointerEvent&&/mouse/.test(c.type)){for(var K=0;K<f.length&&!ce;K++)ce=f[K].pointerType!=="mouse"&&f[K].pointerIsDown;ce=ce||u.now()-u.prevTouchTime<500||c.timeStamp===0}if(!ce){var ye={pointer:c,pointerId:q.getPointerId(c),pointerType:g,eventType:c.type,curEventTarget:M,eventTarget:P,scope:u},Pe=am(ye);C.push([ye.pointer,ye.eventTarget,ye.curEventTarget,Pe])}}for(var xe=0;xe<C.length;xe++){var Ne=rm(C[xe],4),We=Ne[0],tt=Ne[1],vt=Ne[2];Ne[3][s](We,c,tt,vt)}}}function am(s){var u=s.pointerType,c=s.scope,f={interaction:Fl.default.search(s),searchDetails:s};return c.fire("interactions:find",f),f.interaction||c.interactions.new({pointerType:u})}function uf(s,u){var c=s.doc,f=s.scope,g=s.options,S=f.interactions.docEvents,P=f.events,M=P[u];for(var C in f.browser.isIOS&&!g.events&&(g.events={passive:!1}),P.delegatedEvents)M(c,C,P.delegateListener),M(c,C,P.delegateUseCapture,!0);for(var I=g&&g.events,F=0;F<S.length;F++){var G=S[F];M(c,G.type,G.listener,I)}}var F_={id:"core/interactions",install:function(s){for(var u={},c=0;c<lf.length;c++){var f=lf[c];u[f]=sm(f,s)}var g,S=D.default.pEventTypes;function P(){for(var M=0;M<s.interactions.list.length;M++){var C=s.interactions.list[M];if(C.pointerIsDown&&C.pointerType==="touch"&&!C._interacting)for(var I=function(){var G=C.pointers[F];s.documents.some(function(ee){var ce=ee.doc;return(0,k.nodeContains)(ce,G.downTarget)})||C.removePointer(G.pointer,G.event)},F=0;F<C.pointers.length;F++)I()}}(g=p.default.PointerEvent?[{type:S.down,listener:P},{type:S.down,listener:u.pointerDown},{type:S.move,listener:u.pointerMove},{type:S.up,listener:u.pointerUp},{type:S.cancel,listener:u.pointerUp}]:[{type:"mousedown",listener:u.pointerDown},{type:"mousemove",listener:u.pointerMove},{type:"mouseup",listener:u.pointerUp},{type:"touchstart",listener:P},{type:"touchstart",listener:u.pointerDown},{type:"touchmove",listener:u.pointerMove},{type:"touchend",listener:u.pointerUp},{type:"touchcancel",listener:u.pointerUp}]).push({type:"blur",listener:function(M){for(var C=0;C<s.interactions.list.length;C++)s.interactions.list[C].documentBlur(M)}}),s.prevTouchTime=0,s.Interaction=function(M){(function(K,ye){if(typeof ye!="function"&&ye!==null)throw new TypeError("Super expression must either be null or a function");K.prototype=Object.create(ye&&ye.prototype,{constructor:{value:K,writable:!0,configurable:!0}}),Object.defineProperty(K,"prototype",{writable:!1}),ye&&af(K,ye)})(ce,M);var C,I,F,G,ee=(F=ce,G=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var K,ye=Gl(F);if(G){var Pe=Gl(this).constructor;K=Reflect.construct(ye,arguments,Pe)}else K=ye.apply(this,arguments);return z_(this,K)});function ce(){return k_(this,ce),ee.apply(this,arguments)}return C=ce,(I=[{key:"pointerMoveTolerance",get:function(){return s.interactions.pointerMoveTolerance},set:function(K){s.interactions.pointerMoveTolerance=K}},{key:"_now",value:function(){return s.now()}}])&&N_(C.prototype,I),Object.defineProperty(C,"prototype",{writable:!1}),ce}(Un.default),s.interactions={list:[],new:function(M){M.scopeFire=function(I,F){return s.fire(I,F)};var C=new s.Interaction(M);return s.interactions.list.push(C),C},listeners:u,docEvents:g,pointerMoveTolerance:1},s.usePlugin(mi.default)},listeners:{"scope:add-document":function(s){return uf(s,"add")},"scope:remove-document":function(s){return uf(s,"remove")},"interactable:unset":function(s,u){for(var c=s.interactable,f=u.interactions.list.length-1;f>=0;f--){var g=u.interactions.list[f];g.interactable===c&&(g.stop(),u.fire("interactions:destroy",{interaction:g}),g.destroy(),u.interactions.list.length>2&&u.interactions.list.splice(f,1))}}},onDocSignal:uf,doOnInteractions:sm,methodNames:lf},B_=F_;Vl.default=B_;var la={};function cf(s){return cf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},cf(s)}function ua(){return ua=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(s,u,c){var f=V_(s,u);if(f){var g=Object.getOwnPropertyDescriptor(f,u);return g.get?g.get.call(arguments.length<3?s:c):g.value}},ua.apply(this,arguments)}function V_(s,u){for(;!Object.prototype.hasOwnProperty.call(s,u)&&(s=pr(s))!==null;);return s}function ff(s,u){return ff=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},ff(s,u)}function G_(s,u){if(u&&(cf(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(s)}function pr(s){return pr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},pr(s)}function lm(s,u){if(!(s instanceof u))throw new TypeError("Cannot call a class as a function")}function um(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function cm(s,u,c){return u&&um(s.prototype,u),c&&um(s,c),Object.defineProperty(s,"prototype",{writable:!1}),s}function hn(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(la,"__esModule",{value:!0}),la.Scope=void 0,la.initScope=fm;var H_=function(){function s(){var u=this;lm(this,s),hn(this,"id","__interact_scope_".concat(Math.floor(100*Math.random()))),hn(this,"isInitialized",!1),hn(this,"listenerMaps",[]),hn(this,"browser",D.default),hn(this,"defaults",(0,Kr.default)(ea.defaults)),hn(this,"Eventable",ra.Eventable),hn(this,"actions",{map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}}),hn(this,"interactStatic",(0,tf.createInteractStatic)(this)),hn(this,"InteractEvent",ta.InteractEvent),hn(this,"Interactable",void 0),hn(this,"interactables",new Nl.InteractableSet(this)),hn(this,"_win",void 0),hn(this,"document",void 0),hn(this,"window",void 0),hn(this,"documents",[]),hn(this,"_plugins",{list:[],map:{}}),hn(this,"onWindowUnload",function(f){return u.removeDocument(f.target)});var c=this;this.Interactable=function(f){(function(C,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function");C.prototype=Object.create(I&&I.prototype,{constructor:{value:C,writable:!0,configurable:!0}}),Object.defineProperty(C,"prototype",{writable:!1}),I&&ff(C,I)})(M,f);var g,S,P=(g=M,S=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var C,I=pr(g);if(S){var F=pr(this).constructor;C=Reflect.construct(I,arguments,F)}else C=I.apply(this,arguments);return G_(this,C)});function M(){return lm(this,M),P.apply(this,arguments)}return cm(M,[{key:"_defaults",get:function(){return c.defaults}},{key:"set",value:function(C){return ua(pr(M.prototype),"set",this).call(this,C),c.fire("interactable:set",{options:C,interactable:this}),this}},{key:"unset",value:function(){ua(pr(M.prototype),"unset",this).call(this);var C=c.interactables.list.indexOf(this);C<0||(ua(pr(M.prototype),"unset",this).call(this),c.interactables.list.splice(C,1),c.fire("interactable:unset",{interactable:this}))}}]),M}(kl.Interactable)}return cm(s,[{key:"addListeners",value:function(u,c){this.listenerMaps.push({id:c,map:u})}},{key:"fire",value:function(u,c){for(var f=0;f<this.listenerMaps.length;f++){var g=this.listenerMaps[f].map[u];if(g&&g(c,this,u)===!1)return!1}}},{key:"init",value:function(u){return this.isInitialized?this:fm(this,u)}},{key:"pluginIsInstalled",value:function(u){return this._plugins.map[u.id]||this._plugins.list.indexOf(u)!==-1}},{key:"usePlugin",value:function(u,c){if(!this.isInitialized)return this;if(this.pluginIsInstalled(u))return this;if(u.id&&(this._plugins.map[u.id]=u),this._plugins.list.push(u),u.install&&u.install(this,c),u.listeners&&u.before){for(var f=0,g=this.listenerMaps.length,S=u.before.reduce(function(M,C){return M[C]=!0,M[dm(C)]=!0,M},{});f<g;f++){var P=this.listenerMaps[f].id;if(S[P]||S[dm(P)])break}this.listenerMaps.splice(f,0,{id:u.id,map:u.listeners})}else u.listeners&&this.listenerMaps.push({id:u.id,map:u.listeners});return this}},{key:"addDocument",value:function(u,c){if(this.getDocIndex(u)!==-1)return!1;var f=i.getWindow(u);c=c?(0,W.default)({},c):{},this.documents.push({doc:u,options:c}),this.events.documents.push(u),u!==this.document&&this.events.add(f,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:u,window:f,scope:this,options:c})}},{key:"removeDocument",value:function(u){var c=this.getDocIndex(u),f=i.getWindow(u),g=this.documents[c].options;this.events.remove(f,"unload",this.onWindowUnload),this.documents.splice(c,1),this.events.documents.splice(c,1),this.fire("scope:remove-document",{doc:u,window:f,scope:this,options:g})}},{key:"getDocIndex",value:function(u){for(var c=0;c<this.documents.length;c++)if(this.documents[c].doc===u)return c;return-1}},{key:"getDocOptions",value:function(u){var c=this.getDocIndex(u);return c===-1?null:this.documents[c].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),s}();function fm(s,u){return s.isInitialized=!0,a.default.window(u)&&i.init(u),p.default.init(u),D.default.init(u),Xt.default.init(u),s.window=u,s.document=u.document,s.usePlugin(Vl.default),s.usePlugin(zl.default),s}function dm(s){return s&&s.replace(/\/.*$/,"")}la.Scope=H_;var pn={};Object.defineProperty(pn,"__esModule",{value:!0}),pn.default=void 0;var hm=new la.Scope,W_=hm.interactStatic;pn.default=W_;var j_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:void 0;hm.init(j_);var Hl={};Object.defineProperty(Hl,"__esModule",{value:!0}),Hl.default=void 0,Hl.default=function(){};var Wl={};Object.defineProperty(Wl,"__esModule",{value:!0}),Wl.default=void 0,Wl.default=function(){};var jl={};function pm(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var g=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(g!=null){var S,P,M=[],C=!0,I=!1;try{for(g=g.call(c);!(C=(S=g.next()).done)&&(M.push(S.value),!f||M.length!==f);C=!0);}catch(F){I=!0,P=F}finally{try{C||g.return==null||g.return()}finally{if(I)throw P}}return M}}(s,u)||function(c,f){if(c){if(typeof c=="string")return mm(c,f);var g=Object.prototype.toString.call(c).slice(8,-1);return g==="Object"&&c.constructor&&(g=c.constructor.name),g==="Map"||g==="Set"?Array.from(c):g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)?mm(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function mm(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}Object.defineProperty(jl,"__esModule",{value:!0}),jl.default=void 0,jl.default=function(s){var u=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter(function(f){var g=pm(f,2),S=g[0],P=g[1];return S in s||P in s}),c=function(f,g){for(var S=s.range,P=s.limits,M=P===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:P,C=s.offset,I=C===void 0?{x:0,y:0}:C,F={range:S,grid:s,x:null,y:null},G=0;G<u.length;G++){var ee=pm(u[G],2),ce=ee[0],K=ee[1],ye=Math.round((f-I.x)/s[ce]),Pe=Math.round((g-I.y)/s[K]);F[ce]=Math.max(M.left,Math.min(M.right,ye*s[ce]+I.x)),F[K]=Math.max(M.top,Math.min(M.bottom,Pe*s[K]+I.y))}return F};return c.grid=s,c.coordFields=u,c};var ca={};Object.defineProperty(ca,"__esModule",{value:!0}),Object.defineProperty(ca,"edgeTarget",{enumerable:!0,get:function(){return Hl.default}}),Object.defineProperty(ca,"elements",{enumerable:!0,get:function(){return Wl.default}}),Object.defineProperty(ca,"grid",{enumerable:!0,get:function(){return jl.default}});var Xl={};Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.default=void 0;var X_={id:"snappers",install:function(s){var u=s.interactStatic;u.snappers=(0,W.default)(u.snappers||{},ca),u.createSnapGrid=u.snappers.grid}},q_=X_;Xl.default=q_;var ko={};function gm(s,u){var c=Object.keys(s);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);u&&(f=f.filter(function(g){return Object.getOwnPropertyDescriptor(s,g).enumerable})),c.push.apply(c,f)}return c}function df(s){for(var u=1;u<arguments.length;u++){var c=arguments[u]!=null?arguments[u]:{};u%2?gm(Object(c),!0).forEach(function(f){Y_(s,f,c[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(c)):gm(Object(c)).forEach(function(f){Object.defineProperty(s,f,Object.getOwnPropertyDescriptor(c,f))})}return s}function Y_(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(ko,"__esModule",{value:!0}),ko.default=ko.aspectRatio=void 0;var vm={start:function(s){var u=s.state,c=s.rect,f=s.edges,g=s.pageCoords,S=u.options.ratio,P=u.options,M=P.equalDelta,C=P.modifiers;S==="preserve"&&(S=c.width/c.height),u.startCoords=(0,W.default)({},g),u.startRect=(0,W.default)({},c),u.ratio=S,u.equalDelta=M;var I=u.linkedEdges={top:f.top||f.left&&!f.bottom,left:f.left||f.top&&!f.right,bottom:f.bottom||f.right&&!f.top,right:f.right||f.bottom&&!f.left};if(u.xIsPrimaryAxis=!(!f.left&&!f.right),u.equalDelta){var F=(I.left?1:-1)*(I.top?1:-1);u.edgeSign={x:F,y:F}}else u.edgeSign={x:I.left?-1:1,y:I.top?-1:1};if((0,W.default)(s.edges,I),C&&C.length){var G=new Zr.default(s.interaction);G.copyFrom(s.interaction.modification),G.prepareStates(C),u.subModification=G,G.startAll(df({},s))}},set:function(s){var u=s.state,c=s.rect,f=s.coords,g=(0,W.default)({},f),S=u.equalDelta?$_:K_;if(S(u,u.xIsPrimaryAxis,f,c),!u.subModification)return null;var P=(0,W.default)({},c);(0,fe.addEdges)(u.linkedEdges,P,{x:f.x-g.x,y:f.y-g.y});var M=u.subModification.setAll(df(df({},s),{},{rect:P,edges:u.linkedEdges,pageCoords:f,prevCoords:f,prevRect:P})),C=M.delta;return M.changed&&(S(u,Math.abs(C.x)>Math.abs(C.y),M.coords,M.rect),(0,W.default)(f,M.coords)),M.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function $_(s,u,c){var f=s.startCoords,g=s.edgeSign;u?c.y=f.y+(c.x-f.x)*g.y:c.x=f.x+(c.y-f.y)*g.x}function K_(s,u,c,f){var g=s.startRect,S=s.startCoords,P=s.ratio,M=s.edgeSign;if(u){var C=f.width/P;c.y=S.y+(C-g.height)*M.y}else{var I=f.height*P;c.x=S.x+(I-g.width)*M.x}}ko.aspectRatio=vm;var Z_=(0,dn.makeModifier)(vm,"aspectRatio");ko.default=Z_;var eo={};Object.defineProperty(eo,"__esModule",{value:!0}),eo.default=void 0;var ym=function(){};ym._defaults={};var Q_=ym;eo.default=Q_;var hf={};Object.defineProperty(hf,"__esModule",{value:!0}),Object.defineProperty(hf,"default",{enumerable:!0,get:function(){return eo.default}});var Cn={};function pf(s,u,c){return a.default.func(s)?fe.resolveRectLike(s,u.interactable,u.element,[c.x,c.y,u]):fe.resolveRectLike(s,u.interactable,u.element)}Object.defineProperty(Cn,"__esModule",{value:!0}),Cn.default=void 0,Cn.getRestrictionRect=pf,Cn.restrict=void 0;var xm={start:function(s){var u=s.rect,c=s.startOffset,f=s.state,g=s.interaction,S=s.pageCoords,P=f.options,M=P.elementRect,C=(0,W.default)({left:0,top:0,right:0,bottom:0},P.offset||{});if(u&&M){var I=pf(P.restriction,g,S);if(I){var F=I.right-I.left-u.width,G=I.bottom-I.top-u.height;F<0&&(C.left+=F,C.right+=F),G<0&&(C.top+=G,C.bottom+=G)}C.left+=c.left-u.width*M.left,C.top+=c.top-u.height*M.top,C.right+=c.right-u.width*(1-M.right),C.bottom+=c.bottom-u.height*(1-M.bottom)}f.offset=C},set:function(s){var u=s.coords,c=s.interaction,f=s.state,g=f.options,S=f.offset,P=pf(g.restriction,c,u);if(P){var M=fe.xywhToTlbr(P);u.x=Math.max(Math.min(M.right-S.right,u.x),M.left+S.left),u.y=Math.max(Math.min(M.bottom-S.bottom,u.y),M.top+S.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Cn.restrict=xm;var J_=(0,dn.makeModifier)(xm,"restrict");Cn.default=J_;var Li={};Object.defineProperty(Li,"__esModule",{value:!0}),Li.restrictEdges=Li.default=void 0;var _m={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Sm={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Mm(s,u){for(var c=["top","left","bottom","right"],f=0;f<c.length;f++){var g=c[f];g in s||(s[g]=u[g])}return s}var wm={noInner:_m,noOuter:Sm,start:function(s){var u,c=s.interaction,f=s.startOffset,g=s.state,S=g.options;if(S){var P=(0,Cn.getRestrictionRect)(S.offset,c,c.coords.start.page);u=fe.rectToXY(P)}u=u||{x:0,y:0},g.offset={top:u.y+f.top,left:u.x+f.left,bottom:u.y-f.bottom,right:u.x-f.right}},set:function(s){var u=s.coords,c=s.edges,f=s.interaction,g=s.state,S=g.offset,P=g.options;if(c){var M=(0,W.default)({},u),C=(0,Cn.getRestrictionRect)(P.inner,f,M)||{},I=(0,Cn.getRestrictionRect)(P.outer,f,M)||{};Mm(C,_m),Mm(I,Sm),c.top?u.y=Math.min(Math.max(I.top+S.top,M.y),C.top+S.top):c.bottom&&(u.y=Math.max(Math.min(I.bottom+S.bottom,M.y),C.bottom+S.bottom)),c.left?u.x=Math.min(Math.max(I.left+S.left,M.x),C.left+S.left):c.right&&(u.x=Math.max(Math.min(I.right+S.right,M.x),C.right+S.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Li.restrictEdges=wm;var eS=(0,dn.makeModifier)(wm,"restrictEdges");Li.default=eS;var No={};Object.defineProperty(No,"__esModule",{value:!0}),No.restrictRect=No.default=void 0;var tS=(0,W.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(s){}},Cn.restrict.defaults),bm={start:Cn.restrict.start,set:Cn.restrict.set,defaults:tS};No.restrictRect=bm;var nS=(0,dn.makeModifier)(bm,"restrictRect");No.default=nS;var zo={};Object.defineProperty(zo,"__esModule",{value:!0}),zo.restrictSize=zo.default=void 0;var iS={width:-1/0,height:-1/0},rS={width:1/0,height:1/0},Em={start:function(s){return Li.restrictEdges.start(s)},set:function(s){var u=s.interaction,c=s.state,f=s.rect,g=s.edges,S=c.options;if(g){var P=fe.tlbrToXywh((0,Cn.getRestrictionRect)(S.min,u,s.coords))||iS,M=fe.tlbrToXywh((0,Cn.getRestrictionRect)(S.max,u,s.coords))||rS;c.options={endOnly:S.endOnly,inner:(0,W.default)({},Li.restrictEdges.noInner),outer:(0,W.default)({},Li.restrictEdges.noOuter)},g.top?(c.options.inner.top=f.bottom-P.height,c.options.outer.top=f.bottom-M.height):g.bottom&&(c.options.inner.bottom=f.top+P.height,c.options.outer.bottom=f.top+M.height),g.left?(c.options.inner.left=f.right-P.width,c.options.outer.left=f.right-M.width):g.right&&(c.options.inner.right=f.left+P.width,c.options.outer.right=f.left+M.width),Li.restrictEdges.set(s),c.options=S}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};zo.restrictSize=Em;var oS=(0,dn.makeModifier)(Em,"restrictSize");zo.default=oS;var mf={};Object.defineProperty(mf,"__esModule",{value:!0}),Object.defineProperty(mf,"default",{enumerable:!0,get:function(){return eo.default}});var mr={};Object.defineProperty(mr,"__esModule",{value:!0}),mr.snap=mr.default=void 0;var Tm={start:function(s){var u,c=s.interaction,f=s.interactable,g=s.element,S=s.rect,P=s.state,M=s.startOffset,C=P.options,I=C.offsetWithOrigin?function(ee){var ce=ee.interaction.element;return(0,fe.rectToXY)((0,fe.resolveRectLike)(ee.state.options.origin,null,null,[ce]))||(0,J.default)(ee.interactable,ce,ee.interaction.prepared.name)}(s):{x:0,y:0};if(C.offset==="startCoords")u={x:c.coords.start.page.x,y:c.coords.start.page.y};else{var F=(0,fe.resolveRectLike)(C.offset,f,g,[c]);(u=(0,fe.rectToXY)(F)||{x:0,y:0}).x+=I.x,u.y+=I.y}var G=C.relativePoints;P.offsets=S&&G&&G.length?G.map(function(ee,ce){return{index:ce,relativePoint:ee,x:M.left-S.width*ee.x+u.x,y:M.top-S.height*ee.y+u.y}}):[{index:0,relativePoint:null,x:u.x,y:u.y}]},set:function(s){var u=s.interaction,c=s.coords,f=s.state,g=f.options,S=f.offsets,P=(0,J.default)(u.interactable,u.element,u.prepared.name),M=(0,W.default)({},c),C=[];g.offsetWithOrigin||(M.x-=P.x,M.y-=P.y);for(var I=0;I<S.length;I++)for(var F=S[I],G=M.x-F.x,ee=M.y-F.y,ce=0,K=g.targets.length;ce<K;ce++){var ye,Pe=g.targets[ce];(ye=a.default.func(Pe)?Pe(G,ee,u._proxy,F,ce):Pe)&&C.push({x:(a.default.number(ye.x)?ye.x:G)+F.x,y:(a.default.number(ye.y)?ye.y:ee)+F.y,range:a.default.number(ye.range)?ye.range:g.range,source:Pe,index:ce,offset:F})}for(var xe={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},Ne=0;Ne<C.length;Ne++){var We=C[Ne],tt=We.range,vt=We.x-M.x,Tt=We.y-M.y,lt=(0,ge.default)(vt,Tt),wt=lt<=tt;tt===1/0&&xe.inRange&&xe.range!==1/0&&(wt=!1),xe.target&&!(wt?xe.inRange&&tt!==1/0?lt/tt<xe.distance/xe.range:tt===1/0&&xe.range!==1/0||lt<xe.distance:!xe.inRange&&lt<xe.distance)||(xe.target=We,xe.distance=lt,xe.range=tt,xe.inRange=wt,xe.delta.x=vt,xe.delta.y=Tt)}return xe.inRange&&(c.x=xe.target.x,c.y=xe.target.y),f.closest=xe,xe},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};mr.snap=Tm;var sS=(0,dn.makeModifier)(Tm,"snap");mr.default=sS;var ji={};function Cm(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}Object.defineProperty(ji,"__esModule",{value:!0}),ji.snapSize=ji.default=void 0;var Pm={start:function(s){var u=s.state,c=s.edges,f=u.options;if(!c)return null;s.state={options:{targets:null,relativePoints:[{x:c.left?0:1,y:c.top?0:1}],offset:f.offset||"self",origin:{x:0,y:0},range:f.range}},u.targetFields=u.targetFields||[["width","height"],["x","y"]],mr.snap.start(s),u.offsets=s.state.offsets,s.state=u},set:function(s){var u,c,f=s.interaction,g=s.state,S=s.coords,P=g.options,M=g.offsets,C={x:S.x-M[0].x,y:S.y-M[0].y};g.options=(0,W.default)({},P),g.options.targets=[];for(var I=0;I<(P.targets||[]).length;I++){var F=(P.targets||[])[I],G=void 0;if(G=a.default.func(F)?F(C.x,C.y,f):F){for(var ee=0;ee<g.targetFields.length;ee++){var ce=(u=g.targetFields[ee],c=2,function(xe){if(Array.isArray(xe))return xe}(u)||function(xe,Ne){var We=xe==null?null:typeof Symbol<"u"&&xe[Symbol.iterator]||xe["@@iterator"];if(We!=null){var tt,vt,Tt=[],lt=!0,wt=!1;try{for(We=We.call(xe);!(lt=(tt=We.next()).done)&&(Tt.push(tt.value),!Ne||Tt.length!==Ne);lt=!0);}catch(oi){wt=!0,vt=oi}finally{try{lt||We.return==null||We.return()}finally{if(wt)throw vt}}return Tt}}(u,c)||function(xe,Ne){if(xe){if(typeof xe=="string")return Cm(xe,Ne);var We=Object.prototype.toString.call(xe).slice(8,-1);return We==="Object"&&xe.constructor&&(We=xe.constructor.name),We==="Map"||We==="Set"?Array.from(xe):We==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(We)?Cm(xe,Ne):void 0}}(u,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),K=ce[0],ye=ce[1];if(K in G||ye in G){G.x=G[K],G.y=G[ye];break}}g.options.targets.push(G)}}var Pe=mr.snap.set(s);return g.options=P,Pe},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};ji.snapSize=Pm;var aS=(0,dn.makeModifier)(Pm,"snapSize");ji.default=aS;var Fo={};Object.defineProperty(Fo,"__esModule",{value:!0}),Fo.snapEdges=Fo.default=void 0;var Am={start:function(s){var u=s.edges;return u?(s.state.targetFields=s.state.targetFields||[[u.left?"left":"right",u.top?"top":"bottom"]],ji.snapSize.start(s)):null},set:ji.snapSize.set,defaults:(0,W.default)((0,Kr.default)(ji.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};Fo.snapEdges=Am;var lS=(0,dn.makeModifier)(Am,"snapEdges");Fo.default=lS;var gf={};Object.defineProperty(gf,"__esModule",{value:!0}),Object.defineProperty(gf,"default",{enumerable:!0,get:function(){return eo.default}});var vf={};Object.defineProperty(vf,"__esModule",{value:!0}),Object.defineProperty(vf,"default",{enumerable:!0,get:function(){return eo.default}});var Bo={};Object.defineProperty(Bo,"__esModule",{value:!0}),Bo.default=void 0;var uS={aspectRatio:ko.default,restrictEdges:Li.default,restrict:Cn.default,restrictRect:No.default,restrictSize:zo.default,snapEdges:Fo.default,snap:mr.default,snapSize:ji.default,spring:gf.default,avoid:hf.default,transform:vf.default,rubberband:mf.default};Bo.default=uS;var fa={};Object.defineProperty(fa,"__esModule",{value:!0}),fa.default=void 0;var cS={id:"modifiers",install:function(s){var u=s.interactStatic;for(var c in s.usePlugin(dn.default),s.usePlugin(Xl.default),u.modifiers=Bo.default,Bo.default){var f=Bo.default[c],g=f._defaults,S=f._methods;g._methods=S,s.defaults.perAction[c]=g}}},fS=cS;fa.default=fS;var to={};function yf(s){return yf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},yf(s)}function dS(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function xf(s,u){return xf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},xf(s,u)}function hS(s,u){if(u&&(yf(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _f(s)}function _f(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ql(s){return ql=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},ql(s)}Object.defineProperty(to,"__esModule",{value:!0}),to.default=to.PointerEvent=void 0;var pS=function(s){(function(M,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(C&&C.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),C&&xf(M,C)})(P,s);var u,c,f,g,S=(f=P,g=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,C=ql(f);if(g){var I=ql(this).constructor;M=Reflect.construct(C,arguments,I)}else M=C.apply(this,arguments);return hS(this,M)});function P(M,C,I,F,G,ee){var ce;if(function(Pe,xe){if(!(Pe instanceof xe))throw new TypeError("Cannot call a class as a function")}(this,P),ce=S.call(this,G),q.pointerExtend(_f(ce),I),I!==C&&q.pointerExtend(_f(ce),C),ce.timeStamp=ee,ce.originalEvent=I,ce.type=M,ce.pointerId=q.getPointerId(C),ce.pointerType=q.getPointerType(C),ce.target=F,ce.currentTarget=null,M==="tap"){var K=G.getPointerIndex(C);ce.dt=ce.timeStamp-G.pointers[K].downTime;var ye=ce.timeStamp-G.tapTime;ce.double=!!G.prevTap&&G.prevTap.type!=="doubletap"&&G.prevTap.target===ce.target&&ye<500}else M==="doubletap"&&(ce.dt=C.timeStamp-G.tapTime,ce.double=!0);return ce}return u=P,(c=[{key:"_subtractOrigin",value:function(M){var C=M.x,I=M.y;return this.pageX-=C,this.pageY-=I,this.clientX-=C,this.clientY-=I,this}},{key:"_addOrigin",value:function(M){var C=M.x,I=M.y;return this.pageX+=C,this.pageY+=I,this.clientX+=C,this.clientY+=I,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&dS(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),P}(Be.BaseEvent);to.PointerEvent=to.default=pS;var da={};Object.defineProperty(da,"__esModule",{value:!0}),da.default=void 0;var Yl={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(s){s.pointerEvents=Yl,s.defaults.actions.pointerEvents=Yl.defaults,(0,W.default)(s.actions.phaselessTypes,Yl.types)},listeners:{"interactions:new":function(s){var u=s.interaction;u.prevTap=null,u.tapTime=0},"interactions:update-pointer":function(s){var u=s.down,c=s.pointerInfo;!u&&c.hold||(c.hold={duration:1/0,timeout:null})},"interactions:move":function(s,u){var c=s.interaction,f=s.pointer,g=s.event,S=s.eventTarget;s.duplicate||c.pointerIsDown&&!c.pointerWasMoved||(c.pointerIsDown&&Sf(s),gr({interaction:c,pointer:f,event:g,eventTarget:S,type:"move"},u))},"interactions:down":function(s,u){(function(c,f){for(var g=c.interaction,S=c.pointer,P=c.event,M=c.eventTarget,C=c.pointerIndex,I=g.pointers[C].hold,F=k.getPath(M),G={interaction:g,pointer:S,event:P,eventTarget:M,type:"hold",targets:[],path:F,node:null},ee=0;ee<F.length;ee++){var ce=F[ee];G.node=ce,f.fire("pointerEvents:collect-targets",G)}if(G.targets.length){for(var K=1/0,ye=0;ye<G.targets.length;ye++){var Pe=G.targets[ye].eventable.options.holdDuration;Pe<K&&(K=Pe)}I.duration=K,I.timeout=setTimeout(function(){gr({interaction:g,eventTarget:M,pointer:S,event:P,type:"hold"},f)},K)}})(s,u),gr(s,u)},"interactions:up":function(s,u){Sf(s),gr(s,u),function(c,f){var g=c.interaction,S=c.pointer,P=c.event,M=c.eventTarget;g.pointerWasMoved||gr({interaction:g,eventTarget:M,pointer:S,event:P,type:"tap"},f)}(s,u)},"interactions:cancel":function(s,u){Sf(s),gr(s,u)}},PointerEvent:to.PointerEvent,fire:gr,collectEventTargets:Dm,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function gr(s,u){var c=s.interaction,f=s.pointer,g=s.event,S=s.eventTarget,P=s.type,M=s.targets,C=M===void 0?Dm(s,u):M,I=new to.PointerEvent(P,f,g,S,c,u.now());u.fire("pointerEvents:new",{pointerEvent:I});for(var F={interaction:c,pointer:f,event:g,eventTarget:S,targets:C,type:P,pointerEvent:I},G=0;G<C.length;G++){var ee=C[G];for(var ce in ee.props||{})I[ce]=ee.props[ce];var K=(0,J.default)(ee.eventable,ee.node);if(I._subtractOrigin(K),I.eventable=ee.eventable,I.currentTarget=ee.node,ee.eventable.fire(I),I._addOrigin(K),I.immediatePropagationStopped||I.propagationStopped&&G+1<C.length&&C[G+1].node!==I.currentTarget)break}if(u.fire("pointerEvents:fired",F),P==="tap"){var ye=I.double?gr({interaction:c,pointer:f,event:g,eventTarget:S,type:"doubletap"},u):I;c.prevTap=ye,c.tapTime=ye.timeStamp}return I}function Dm(s,u){var c=s.interaction,f=s.pointer,g=s.event,S=s.eventTarget,P=s.type,M=c.getPointerIndex(f),C=c.pointers[M];if(P==="tap"&&(c.pointerWasMoved||!C||C.downTarget!==S))return[];for(var I=k.getPath(S),F={interaction:c,pointer:f,event:g,eventTarget:S,type:P,path:I,targets:[],node:null},G=0;G<I.length;G++){var ee=I[G];F.node=ee,u.fire("pointerEvents:collect-targets",F)}return P==="hold"&&(F.targets=F.targets.filter(function(ce){var K;return ce.eventable.options.holdDuration===((K=c.pointers[M])==null?void 0:K.hold.duration)})),F.targets}function Sf(s){var u=s.interaction,c=s.pointerIndex,f=u.pointers[c].hold;f&&f.timeout&&(clearTimeout(f.timeout),f.timeout=null)}var mS=Yl;da.default=mS;var $l={};function gS(s){var u=s.interaction;u.holdIntervalHandle&&(clearInterval(u.holdIntervalHandle),u.holdIntervalHandle=null)}Object.defineProperty($l,"__esModule",{value:!0}),$l.default=void 0;var vS={id:"pointer-events/holdRepeat",install:function(s){s.usePlugin(da.default);var u=s.pointerEvents;u.defaults.holdRepeatInterval=0,u.types.holdrepeat=s.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce(function(s,u){return s["pointerEvents:".concat(u)]=gS,s},{"pointerEvents:new":function(s){var u=s.pointerEvent;u.type==="hold"&&(u.count=(u.count||0)+1)},"pointerEvents:fired":function(s,u){var c=s.interaction,f=s.pointerEvent,g=s.eventTarget,S=s.targets;if(f.type==="hold"&&S.length){var P=S[0].eventable.options.holdRepeatInterval;P<=0||(c.holdIntervalHandle=setTimeout(function(){u.pointerEvents.fire({interaction:c,eventTarget:g,type:"hold",pointer:f,event:f},u)},P))}}})},yS=vS;$l.default=yS;var Kl={};function xS(s){return(0,W.default)(this.events.options,s),this}Object.defineProperty(Kl,"__esModule",{value:!0}),Kl.default=void 0;var _S={id:"pointer-events/interactableTargets",install:function(s){var u=s.Interactable;u.prototype.pointerEvents=xS;var c=u.prototype._backCompatOption;u.prototype._backCompatOption=function(f,g){var S=c.call(this,f,g);return S===this&&(this.events.options[f]=g),S}},listeners:{"pointerEvents:collect-targets":function(s,u){var c=s.targets,f=s.node,g=s.type,S=s.eventTarget;u.interactables.forEachMatch(f,function(P){var M=P.events,C=M.options;M.types[g]&&M.types[g].length&&P.testIgnoreAllow(C,f,S)&&c.push({node:f,eventable:M,props:{interactable:P}})})},"interactable:new":function(s){var u=s.interactable;u.events.getRect=function(c){return u.getRect(c)}},"interactable:set":function(s,u){var c=s.interactable,f=s.options;(0,W.default)(c.events.options,u.pointerEvents.defaults),(0,W.default)(c.events.options,f.pointerEvents||{})}}},SS=_S;Kl.default=SS;var ha={};Object.defineProperty(ha,"__esModule",{value:!0}),ha.default=void 0;var MS={id:"pointer-events",install:function(s){s.usePlugin(da),s.usePlugin($l.default),s.usePlugin(Kl.default)}},wS=MS;ha.default=wS;var Vo={};function Rm(s){var u=s.Interactable;s.actions.phases.reflow=!0,u.prototype.reflow=function(c){return function(f,g,S){for(var P=a.default.string(f.target)?je.from(f._context.querySelectorAll(f.target)):[f.target],M=S.window.Promise,C=M?[]:null,I=function(){var G=P[F],ee=f.getRect(G);if(!ee)return"break";var ce=je.find(S.interactions.list,function(Ne){return Ne.interacting()&&Ne.interactable===f&&Ne.element===G&&Ne.prepared.name===g.name}),K=void 0;if(ce)ce.move(),C&&(K=ce._reflowPromise||new M(function(Ne){ce._reflowResolve=Ne}));else{var ye=(0,fe.tlbrToXywh)(ee),Pe={page:{x:ye.x,y:ye.y},client:{x:ye.x,y:ye.y},timeStamp:S.now()},xe=q.coordsToEvent(Pe);K=function(Ne,We,tt,vt,Tt){var lt=Ne.interactions.new({pointerType:"reflow"}),wt={interaction:lt,event:Tt,pointer:Tt,eventTarget:tt,phase:"reflow"};lt.interactable=We,lt.element=tt,lt.prevEvent=Tt,lt.updatePointer(Tt,Tt,tt,!0),q.setZeroCoords(lt.coords.delta),(0,ie.copyAction)(lt.prepared,vt),lt._doPhase(wt);var oi=Ne.window.Promise,Xi=oi?new oi(function(bf){lt._reflowResolve=bf}):void 0;return lt._reflowPromise=Xi,lt.start(vt,We,tt),lt._interacting?(lt.move(wt),lt.end(Tt)):(lt.stop(),lt._reflowResolve()),lt.removePointer(Tt,Tt),Xi}(S,f,G,g,xe)}C&&C.push(K)},F=0;F<P.length&&I()!=="break";F++);return C&&M.all(C).then(function(){return f})}(this,c,s)}}Object.defineProperty(Vo,"__esModule",{value:!0}),Vo.default=void 0,Vo.install=Rm;var bS={id:"reflow",install:Rm,listeners:{"interactions:stop":function(s,u){var c=s.interaction;c.pointerType==="reflow"&&(c._reflowResolve&&c._reflowResolve(),je.remove(u.interactions.list,c))}}},ES=bS;Vo.default=ES;var ri={exports:{}};function Mf(s){return Mf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Mf(s)}Object.defineProperty(ri.exports,"__esModule",{value:!0}),ri.exports.default=void 0,pn.default.use(mi.default),pn.default.use(hr.default),pn.default.use(ha.default),pn.default.use(Jr.default),pn.default.use(fa.default),pn.default.use(Ht.default),pn.default.use(yt.default),pn.default.use(ni.default),pn.default.use(Vo.default);var TS=pn.default;if(ri.exports.default=TS,Mf(ri)==="object"&&ri)try{ri.exports=pn.default}catch{}pn.default.default=pn.default,yt.default,ni.default,Ht.default,mi.default,Al.default,Jr.default,pn.default,fa.default,hr.default,ha.default,Vo.default,ri=ri.exports;var no={exports:{}};function wf(s){return wf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},wf(s)}Object.defineProperty(no.exports,"__esModule",{value:!0}),no.exports.default=void 0;var CS=ri.default;if(no.exports.default=CS,wf(no)==="object"&&no)try{no.exports=ri.default}catch{}return ri.default.default=ri.default,no.exports})})(r2);const o2=PS(kh),{abs:$2,cos:s2,sin:a2,cosh:K2,sinh:Z2,acos:Q2,acosh:J2,min:l2,max:u2,round:eA,sqrt:t_,sign:tA,floor:c2,log:nA,PI:bc}=Math,f2=(n,e,t)=>{let i=0;for(let r=0;r<n.length;r++)i+=n[r]*e[r]*(r===n.length-1&&t||1);return i},Dd=(n,e)=>{const[t,i]=n,r=s2(e),o=a2(e);n[0]=t*r-i*o,n[1]=t*o+i*r},Rd=(n,e,t)=>{if(t!==0){const i=e/t_(f2(n,n,1)),r=new Array(n.length-1);for(let o=0;o<n.length-1;o++)r[o]=n[o]*i;Ku(n,r,t)}else for(let i=0;i<n.length;i++)n[i]*=1-e},d2=(n,e,t)=>{const i=n.length,r=t;for(let o=0;o<i-1;o++){const l=e[o];if(l!==0){const a=t_(1-r*l*l),d=l;let h=n[o],m=n[i-1];n[o]=a*h+-r*d*m,n[i-1]=d*h+a*m}}},Ku=(n,e,t)=>{if(t===0)for(let i=0;i<e.length;i++)n[i]+=e[i];else d2(n,e,t)},l0={type:"change"},Ld={type:"start"},u0={type:"end"};class h2 extends Lo{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ho.ROTATE,MIDDLE:Ho.DOLLY,RIGHT:Ho.PAN},this.touches={ONE:Wo.ROTATE,TWO:Wo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(V){V.addEventListener("keydown",_t),this._domElementKeyEvents=V},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_t),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(l0),i.update(),o=r.NONE},this.update=function(){const V=new X,he=new Ao().setFromUnitVectors(e.up,new X(0,1,0)),ne=he.clone().invert(),Ce=new X,Le=new Ao,ze=2*Math.PI;return function(){const ke=i.object.position;V.copy(ke).sub(i.target),V.applyQuaternion(he),a.setFromVector3(V),i.autoRotate&&o===r.NONE&&R(B()),i.enableDamping?(a.theta+=d.theta*i.dampingFactor,a.phi+=d.phi*i.dampingFactor):(a.theta+=d.theta,a.phi+=d.phi);let Xe=i.minAzimuthAngle,Je=i.maxAzimuthAngle;return isFinite(Xe)&&isFinite(Je)&&(Xe<-Math.PI?Xe+=ze:Xe>Math.PI&&(Xe-=ze),Je<-Math.PI?Je+=ze:Je>Math.PI&&(Je-=ze),Xe<=Je?a.theta=Math.max(Xe,Math.min(Je,a.theta)):a.theta=a.theta>(Xe+Je)/2?Math.max(Xe,a.theta):Math.min(Je,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=h,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(m,i.dampingFactor):i.target.add(m),V.setFromSpherical(a),V.applyQuaternion(ne),ke.copy(i.target).add(V),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,m.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),m.set(0,0,0)),h=1,y||Ce.distanceToSquared(i.object.position)>l||8*(1-Le.dot(i.object.quaternion))>l?(i.dispatchEvent(l0),Ce.copy(i.object.position),Le.copy(i.object.quaternion),y=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",L),i.domElement.removeEventListener("pointerdown",Qe),i.domElement.removeEventListener("pointercancel",Et),i.domElement.removeEventListener("wheel",st),i.domElement.removeEventListener("pointermove",je),i.domElement.removeEventListener("pointerup",Et),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",_t),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const l=1e-6,a=new a0,d=new a0;let h=1;const m=new X;let y=!1;const v=new Ue,x=new Ue,_=new Ue,T=new Ue,b=new Ue,p=new Ue,w=new Ue,E=new Ue,A=new Ue,D=[],N={};function B(){return 2*Math.PI/60/60*i.autoRotateSpeed}function k(){return Math.pow(.95,i.zoomSpeed)}function R(V){d.theta-=V}function O(V){d.phi-=V}const se=function(){const V=new X;return function(ne,Ce){V.setFromMatrixColumn(Ce,0),V.multiplyScalar(-ne),m.add(V)}}(),ue=function(){const V=new X;return function(ne,Ce){i.screenSpacePanning===!0?V.setFromMatrixColumn(Ce,1):(V.setFromMatrixColumn(Ce,0),V.crossVectors(i.object.up,V)),V.multiplyScalar(ne),m.add(V)}}(),Y=function(){const V=new X;return function(ne,Ce){const Le=i.domElement;if(i.object.isPerspectiveCamera){const ze=i.object.position;V.copy(ze).sub(i.target);let De=V.length();De*=Math.tan(i.object.fov/2*Math.PI/180),se(2*ne*De/Le.clientHeight,i.object.matrix),ue(2*Ce*De/Le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(se(ne*(i.object.right-i.object.left)/i.object.zoom/Le.clientWidth,i.object.matrix),ue(Ce*(i.object.top-i.object.bottom)/i.object.zoom/Le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Z(V){i.object.isPerspectiveCamera?h/=V:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*V)),i.object.updateProjectionMatrix(),y=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(V){i.object.isPerspectiveCamera?h*=V:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/V)),i.object.updateProjectionMatrix(),y=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function fe(V){v.set(V.clientX,V.clientY)}function me(V){w.set(V.clientX,V.clientY)}function j(V){T.set(V.clientX,V.clientY)}function J(V){x.set(V.clientX,V.clientY),_.subVectors(x,v).multiplyScalar(i.rotateSpeed);const he=i.domElement;R(2*Math.PI*_.x/he.clientHeight),O(2*Math.PI*_.y/he.clientHeight),v.copy(x),i.update()}function re(V){E.set(V.clientX,V.clientY),A.subVectors(E,w),A.y>0?Z(k()):A.y<0&&W(k()),w.copy(E),i.update()}function Te(V){b.set(V.clientX,V.clientY),p.subVectors(b,T).multiplyScalar(i.panSpeed),Y(p.x,p.y),T.copy(b),i.update()}function ge(V){V.deltaY<0?W(k()):V.deltaY>0&&Z(k()),i.update()}function oe(V){let he=!1;switch(V.code){case i.keys.UP:V.ctrlKey||V.metaKey||V.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),he=!0;break;case i.keys.BOTTOM:V.ctrlKey||V.metaKey||V.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),he=!0;break;case i.keys.LEFT:V.ctrlKey||V.metaKey||V.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),he=!0;break;case i.keys.RIGHT:V.ctrlKey||V.metaKey||V.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),he=!0;break}he&&(V.preventDefault(),i.update())}function q(){if(D.length===1)v.set(D[0].pageX,D[0].pageY);else{const V=.5*(D[0].pageX+D[1].pageX),he=.5*(D[0].pageY+D[1].pageY);v.set(V,he)}}function we(){if(D.length===1)T.set(D[0].pageX,D[0].pageY);else{const V=.5*(D[0].pageX+D[1].pageX),he=.5*(D[0].pageY+D[1].pageY);T.set(V,he)}}function Me(){const V=D[0].pageX-D[1].pageX,he=D[0].pageY-D[1].pageY,ne=Math.sqrt(V*V+he*he);w.set(0,ne)}function te(){i.enableZoom&&Me(),i.enablePan&&we()}function $e(){i.enableZoom&&Me(),i.enableRotate&&q()}function Ge(V){if(D.length==1)x.set(V.pageX,V.pageY);else{const ne=Ee(V),Ce=.5*(V.pageX+ne.x),Le=.5*(V.pageY+ne.y);x.set(Ce,Le)}_.subVectors(x,v).multiplyScalar(i.rotateSpeed);const he=i.domElement;R(2*Math.PI*_.x/he.clientHeight),O(2*Math.PI*_.y/he.clientHeight),v.copy(x)}function be(V){if(D.length===1)b.set(V.pageX,V.pageY);else{const he=Ee(V),ne=.5*(V.pageX+he.x),Ce=.5*(V.pageY+he.y);b.set(ne,Ce)}p.subVectors(b,T).multiplyScalar(i.panSpeed),Y(p.x,p.y),T.copy(b)}function Be(V){const he=Ee(V),ne=V.pageX-he.x,Ce=V.pageY-he.y,Le=Math.sqrt(ne*ne+Ce*Ce);E.set(0,Le),A.set(0,Math.pow(E.y/w.y,i.zoomSpeed)),Z(A.y),w.copy(E)}function dt(V){i.enableZoom&&Be(V),i.enablePan&&be(V)}function Fe(V){i.enableZoom&&Be(V),i.enableRotate&&Ge(V)}function Qe(V){i.enabled!==!1&&(D.length===0&&(i.domElement.setPointerCapture(V.pointerId),i.domElement.addEventListener("pointermove",je),i.domElement.addEventListener("pointerup",Et)),ae(V),V.pointerType==="touch"?jt(V):Ut(V))}function je(V){i.enabled!==!1&&(V.pointerType==="touch"?z(V):mt(V))}function Et(V){pe(V),D.length===0&&(i.domElement.releasePointerCapture(V.pointerId),i.domElement.removeEventListener("pointermove",je),i.domElement.removeEventListener("pointerup",Et)),i.dispatchEvent(u0),o=r.NONE}function Ut(V){let he;switch(V.button){case 0:he=i.mouseButtons.LEFT;break;case 1:he=i.mouseButtons.MIDDLE;break;case 2:he=i.mouseButtons.RIGHT;break;default:he=-1}switch(he){case Ho.DOLLY:if(i.enableZoom===!1)return;me(V),o=r.DOLLY;break;case Ho.ROTATE:if(V.ctrlKey||V.metaKey||V.shiftKey){if(i.enablePan===!1)return;j(V),o=r.PAN}else{if(i.enableRotate===!1)return;fe(V),o=r.ROTATE}break;case Ho.PAN:if(V.ctrlKey||V.metaKey||V.shiftKey){if(i.enableRotate===!1)return;fe(V),o=r.ROTATE}else{if(i.enablePan===!1)return;j(V),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Ld)}function mt(V){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;J(V);break;case r.DOLLY:if(i.enableZoom===!1)return;re(V);break;case r.PAN:if(i.enablePan===!1)return;Te(V);break}}function st(V){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(V.preventDefault(),i.dispatchEvent(Ld),ge(V),i.dispatchEvent(u0))}function _t(V){i.enabled===!1||i.enablePan===!1||oe(V)}function jt(V){switch(_e(V),D.length){case 1:switch(i.touches.ONE){case Wo.ROTATE:if(i.enableRotate===!1)return;q(),o=r.TOUCH_ROTATE;break;case Wo.PAN:if(i.enablePan===!1)return;we(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Wo.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;te(),o=r.TOUCH_DOLLY_PAN;break;case Wo.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;$e(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Ld)}function z(V){switch(_e(V),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ge(V),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;be(V),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;dt(V),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Fe(V),i.update();break;default:o=r.NONE}}function L(V){i.enabled!==!1&&V.preventDefault()}function ae(V){D.push(V)}function pe(V){delete N[V.pointerId];for(let he=0;he<D.length;he++)if(D[he].pointerId==V.pointerId){D.splice(he,1);return}}function _e(V){let he=N[V.pointerId];he===void 0&&(he=new Ue,N[V.pointerId]=he),he.set(V.pageX,V.pageY)}function Ee(V){const he=V.pointerId===D[0].pointerId?D[1]:D[0];return N[he.pointerId]}i.domElement.addEventListener("contextmenu",L),i.domElement.addEventListener("pointerdown",Qe),i.domElement.addEventListener("pointercancel",Et),i.domElement.addEventListener("wheel",st,{passive:!1}),this.update()}}class qr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const p2=new jc(-1,1,1,-1,0,1),Vp=new Di;Vp.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3));Vp.setAttribute("uv",new Ln([0,2,0,0,2,0],2));class Yc{constructor(e){this._mesh=new Bn(Vp,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,p2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const m2={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class g2 extends qr{constructor(e,t,i){super(),this.scene=e,this.camera=t;const r=i.focus!==void 0?i.focus:1,o=i.aspect!==void 0?i.aspect:t.aspect,l=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new en(1,1,{minFilter:Qt,magFilter:Qt}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Gr,this.materialDepth.depthPacking=_l,this.materialDepth.blending=un;const d=m2,h=zn.clone(d.uniforms);h.tDepth.value=this.renderTargetDepth.texture,h.focus.value=r,h.aspect.value=o,h.aperture.value=l,h.maxblur.value=a,h.nearClip.value=t.near,h.farClip.value=t.far,this.materialBokeh=new Lt({defines:Object.assign({},d.defines),uniforms:h,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.uniforms=h,this.needsSwap=!1,this.fsQuad=new Yc(this.materialBokeh),this._oldClearColor=new Ze}render(e,t,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=o}setSize(e,t){this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const Ha={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Nh extends qr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zn.clone(e.uniforms),this.material=new Lt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Yc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class c0 extends qr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let l,a;this.inverse?(l=0,a=1):(l=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class v2 extends qr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class y2{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new Ue);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nh(Ha),this.clock=new n2}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),l.needsSwap){if(i){const a=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}c0!==void 0&&(l instanceof c0?i=!0:l instanceof v2&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class x2 extends qr{constructor(e,t,i,r,o){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let o,l;this.overrideMaterial!==void 0&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=l),e.autoClear=r}}const ku={defines:{NUM_SAMPLES:7,NUM_RINGS:4,NORMAL_TEXTURE:0,DIFFUSE_TEXTURE:0,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new Ue(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new Gt},cameraInverseProjectionMatrix:{value:new Gt},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

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
		}`},Mr={defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new Ue(512,512)},sampleUvOffsets:{value:[new Ue(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

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
		}`},Ec={createSampleWeights:function(n,e){const t=[];for(let i=0;i<=n;i++)t.push(_2(i,e));return t},createSampleOffsets:function(n,e){const t=[];for(let i=0;i<=n;i++)t.push(e.clone().multiplyScalar(i));return t},configure:function(n,e,t,i){n.defines.KERNEL_RADIUS=e,n.uniforms.sampleUvOffsets.value=Ec.createSampleOffsets(e,i),n.uniforms.sampleWeights.value=Ec.createSampleWeights(e,t),n.needsUpdate=!0}};function _2(n,e){return Math.exp(-(n*n)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}const Id={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`};class zh extends qr{constructor(e,t,i=!1,r=!1,o=new Ue(256,256)){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.supportsDepthTextureExtension=i,this.supportsNormalTexture=r,this.originalClearColor=new Ze,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new Ue(o.x,o.y),this.saoRenderTarget=new en(this.resolution.x,this.resolution.y),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone(),this.beautyRenderTarget=this.saoRenderTarget.clone(),this.normalRenderTarget=new en(this.resolution.x,this.resolution.y,{minFilter:Qt,magFilter:Qt}),this.depthRenderTarget=this.normalRenderTarget.clone();let l;this.supportsDepthTextureExtension&&(l=new $x,l.type=Up,this.beautyRenderTarget.depthTexture=l,this.beautyRenderTarget.depthBuffer=!0),this.depthMaterial=new Gr,this.depthMaterial.depthPacking=_l,this.depthMaterial.blending=un,this.normalMaterial=new Qx,this.normalMaterial.blending=un,this.saoMaterial=new Lt({defines:Object.assign({},ku.defines),fragmentShader:ku.fragmentShader,vertexShader:ku.vertexShader,uniforms:zn.clone(ku.uniforms)}),this.saoMaterial.extensions.derivatives=!0,this.saoMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.saoMaterial.defines.NORMAL_TEXTURE=this.supportsNormalTexture?1:0,this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=un,this.vBlurMaterial=new Lt({uniforms:zn.clone(Mr.uniforms),defines:Object.assign({},Mr.defines),vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=un,this.hBlurMaterial=new Lt({uniforms:zn.clone(Mr.uniforms),defines:Object.assign({},Mr.defines),vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=un,this.materialCopy=new Lt({uniforms:zn.clone(Ha.uniforms),vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader,blending:un}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=Sc,this.materialCopy.blendSrc=Ax,this.materialCopy.blendDst=Dh,this.materialCopy.blendEquation=Pr,this.materialCopy.blendSrcAlpha=Px,this.materialCopy.blendDstAlpha=Dh,this.materialCopy.blendEquationAlpha=Pr,this.depthCopy=new Lt({uniforms:zn.clone(Id.uniforms),vertexShader:Id.vertexShader,fragmentShader:Id.fragmentShader,blending:un}),this.fsQuad=new Yc(null)}render(e,t,i){if(this.renderToScreen&&(this.materialCopy.blending=un,this.materialCopy.uniforms.tDiffuse.value=i.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),this.params.output===1)return;e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setRenderTarget(this.depthRenderTarget),e.clear(),this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const o=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=o,this.hBlurMaterial.uniforms.depthCutoff.value=o,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(Ec.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Ue(0,1)),Ec.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Ue(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),e.setClearColor(0),e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.supportsDepthTextureExtension||this.renderOverride(e,this.depthMaterial,this.depthRenderTarget,0,1),this.supportsNormalTexture&&this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));let l=this.materialCopy;this.params.output===3?this.supportsDepthTextureExtension?(this.materialCopy.uniforms.tDiffuse.value=this.beautyRenderTarget.depthTexture,this.materialCopy.needsUpdate=!0):(this.depthCopy.uniforms.tDiffuse.value=this.depthRenderTarget.texture,this.depthCopy.needsUpdate=!0,l=this.depthCopy):this.params.output===4?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===0?l.blending=Sc:l.blending=un,this.renderPass(e,l,this.renderToScreen?null:i),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}renderPass(e,t,i,r,o){e.getClearColor(this.originalClearColor);const l=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(o||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(l)}renderOverride(e,t,i,r,o){e.getClearColor(this.originalClearColor);const l=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=t.clearColor||r,o=t.clearAlpha||o,r!=null&&(e.setClearColor(r),e.setClearAlpha(o||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(l)}setSize(e,t){this.beautyRenderTarget.setSize(e,t),this.saoRenderTarget.setSize(e,t),this.blurIntermediateRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.depthRenderTarget.setSize(e,t),this.saoMaterial.uniforms.size.value.set(e,t),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,t),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,t),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.depthRenderTarget.dispose(),this.depthMaterial.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.depthCopy.dispose(),this.fsQuad.dispose()}}zh.OUTPUT={Beauty:1,Default:0,SAO:2,Depth:3,Normal:4};const S2={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ws extends qr{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new Ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);this.renderTargetBright=new en(o,l),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let y=0;y<this.nMips;y++){const v=new en(o,l);v.texture.name="UnrealBloomPass.h"+y,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const x=new en(o,l);x.texture.name="UnrealBloomPass.v"+y,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),o=Math.round(o/2),l=Math.round(l/2)}const a=S2;this.highPassUniforms=zn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const d=[3,5,7,9,11];o=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);for(let y=0;y<this.nMips;y++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(d[y])),this.separableBlurMaterials[y].uniforms.texSize.value=new Ue(o,l),o=Math.round(o/2),l=Math.round(l/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const m=Ha;this.copyUniforms=zn.clone(m.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Lt({uniforms:this.copyUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,blending:Ah,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.basic=new _o,this.fsQuad=new Yc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,r),this.renderTargetsVertical[o].setSize(i,r),this.separableBlurMaterials[o].uniforms.texSize.value=new Ue(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const l=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this.fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[d].uniforms.direction.value=Ws.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[d]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=Ws.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[d]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[d];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=l}getSeperableBlurMaterial(e){return new Lt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ws.BlurDirectionX=new Ue(1,0);Ws.BlurDirectionY=new Ue(0,1);const M2={uniforms:{tDiffuse:{value:null}},vertexShader:`

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

		}`},w2={uniforms:{tDiffuse:{value:null},resolution:{value:new Ue}},vertexShader:`

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

		}`},n_=["stereographic","orthographic","klein","inverted","jemisphere","upperhalf"],Ui=new Ze,Gp=new KP,$s=Gp.load("Carbon.png");$s.encoding=bt;$s.wrapS=To;$s.wrapT=To;$s.repeat.x=10;$s.repeat.y=10;const Hp=Gp.load("Carbon_Normal.png");Hp.wrapS=To;Hp.wrapT=To;const Wa=Gp.load("ocean.jpg");Wa.encoding=bt;Wa.mapping=Mc;const Ks={neon:{background:0,fx:["bloom"],shadow:!1,material:new _o,lights:[],color:({word:n})=>Ui.setHSL(n.length*.17%1,.5,.5)},museum:{background:12303291,env:Wa,shadow:!0,ground:"plane",material:new t0({roughness:.5,reflectivity:.25,clearcoat:1,clearcoatRoughness:.1,map:$s,normalMap:Hp}),lights:[(()=>{const n=new Pd(16777215,.2);return n.position.set(0,4,-6),n})(),(()=>{const n=new Pd(16777215,.2);return n.position.set(8,7,0),n})(),(()=>{const n=new Pd(16777215,.2);return n.position.set(-4,6,2),n})(),new Ca(16777215,.4)],cameraLights:[(()=>{const n=new as(16777215,2.5,5,5);return n.shadow=null,n})()],color:()=>Ui.set(16777215)},projection:{background:16777215,ground:"sphere",shadow:!0,material:new Ss({transparent:!0,opacity:.75,blending:Sc}),lights:[new as],color:({word:n})=>Ui.setHSL(n.length*.17%1,.5,.5)},bw:{background:0,fx:["sobel"],shadow:!1,material:new Ss,lights:[new Ca(13421772,.4)],cameraLights:[new as(16777215,1)],color:()=>Ui.set(16776960)},colorful:{background:16777215,shadow:!1,material:new Ss,lights:[new Ca(16777215,1)],cameraLights:[new as(16777215,.5)],color:({word:n})=>Ui.setHSL(n.length*.03%1,.5,.5)},bokeh:{background:16777215,fx:["bokeh"],shadow:!1,material:new Ss,lights:[new Ca(16777215,.5)],cameraLights:[new as(16777215,1)],color:({word:n})=>Ui.setHSL(n.length*.17%1,.7,.5)},pure:{background:16777215,fx:["sao"],shadow:!1,material:new XP,lights:[new Ca(0,.5)],cameraLights:[new as(16777215,1)],color:({word:n})=>Ui.setHSL(n.length*.03%1,.75,.7)},transcendent:{background:16777215,fx:["godray"],shadow:!1,material:new _o,color:()=>Ui.set(0)},glass:{background:Wa,env:Wa,shadow:!1,material:new t0({premultipliedAlpha:!1,reflectivity:0,metalness:0,roughness:0,transmission:1,clearcoat:1,clearcoatRoughness:.1,thickness:1,ior:1.5}),lights:[new t2,new ZP],color:()=>Ui.set(11184810)},wireframe:{background:0,shadow:!1,material:new _o({wireframe:!0}),lights:[],color:({word:n})=>Ui.setHSL(n.length*.17%1,.5,.5)}},b2={uniforms:{tInput:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

		 vUv = uv;
		 gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	 }`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tInput;

		void main() {

			gl_FragColor = vec4( 1.0 ) - texture2D( tInput, vUv );

		}`},E2={uniforms:{tInput:{value:null},fStepSize:{value:1},vSunPositionScreenSpace:{value:new X}},vertexShader:`

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

		}`},T2={uniforms:{tColors:{value:null},tGodRays:{value:null},fGodRayIntensity:{value:.69}},vertexShader:`

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

		}`},C2={uniforms:{vSunPositionScreenSpace:{value:new X},fAspect:{value:1},sunColor:{value:new Ze(16772608)},bgColor:{value:new Ze(0)}},vertexShader:`

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

		}`};class P2 extends qr{constructor(e,t,i={}){super(),this.scene=e,this.camera=t,this.orthoScene=new Zx,this.orthoCamera=new jc(-.5,.5,.5,-.5,-1e4,1e4),this.orthoCamera.position.z=100,this.orthoScene.add(this.orthoCamera),this.background=i.background||1297,this.sunColor=i.sunColor||16776960,this.multiplier=i.multiplier||.25,this.clipPosition=new Rt,this.sunPosition=i.sunPosition||new X(0,1e3,1e3),this.screenSpacePosition=new X,this.rtTextureDepth=new en(1,1),this.rtTextureDepthMask=new en(1,1),this.rtTextureGodRays1=new en(1,1),this.rtTextureGodRays2=new en(1,1),this.materialDepth=new Gr;const r=b2;this.godrayMaskUniforms=zn.clone(r.uniforms),this.materialGodraysDepthMask=new Lt({uniforms:this.godrayMaskUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader});const o=E2;this.godrayGenUniforms=zn.clone(o.uniforms),this.materialGodraysGenerate=new Lt({uniforms:this.godrayGenUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader});const l=T2;this.godrayCombineUniforms=zn.clone(l.uniforms),this.materialGodraysCombine=new Lt({uniforms:this.godrayCombineUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader});const a=C2;this.godraysFakeSunUniforms=zn.clone(a.uniforms),this.materialGodraysFakeSun=new Lt({uniforms:this.godraysFakeSunUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.godraysFakeSunUniforms.bgColor.value.setHex(this.background),this.godraysFakeSunUniforms.sunColor.value.setHex(this.sunColor),this.godrayCombineUniforms.fGodRayIntensity.value=.75,this.fsQuad=new Bn(new El(1,1),this.materialGodraysGenerate),this.fsQuad.position.z=-9900,this.orthoScene.add(this.fsQuad),this.needsSwap=!1}filterGodRays(e,t,i,r){this.orthoScene.overrideMaterial=this.materialGodraysGenerate,this.godrayGenUniforms.fStepSize.value=r,this.godrayGenUniforms.tInput.value=t,e.setRenderTarget(i),e.render(this.orthoScene,this.orthoCamera),this.orthoScene.overrideMaterial=null}render(e,t,i){this.clipPosition.x=this.sunPosition.x,this.clipPosition.y=this.sunPosition.y,this.clipPosition.z=this.sunPosition.z,this.clipPosition.w=1,this.clipPosition.applyMatrix4(this.camera.matrixWorldInverse).applyMatrix4(this.camera.projectionMatrix),this.clipPosition.x/=this.clipPosition.w,this.clipPosition.y/=this.clipPosition.w,this.screenSpacePosition.x=(this.clipPosition.x+1)/2,this.screenSpacePosition.y=(this.clipPosition.y+1)/2,this.screenSpacePosition.z=this.clipPosition.z,this.godrayGenUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition),this.godraysFakeSunUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition);const r=.74*window.innerHeight,o=.74*window.innerHeight;this.screenSpacePosition.x*=window.innerWidth,this.screenSpacePosition.y*=window.innerHeight,e.setScissor(this.screenSpacePosition.x-o/2,this.screenSpacePosition.y-r/2,o,r),e.setScissorTest(!0),this.godraysFakeSunUniforms.fAspect.value=this.camera.aspect,this.orthoScene.overrideMaterial=this.materialGodraysFakeSun,e.setRenderTarget(i),e.render(this.orthoScene,this.orthoCamera),e.setScissorTest(!1),this.scene.overrideMaterial=this.materialDepth,e.setRenderTarget(this.rtTextureDepth),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.godrayMaskUniforms.tInput.value=this.rtTextureDepth.texture,this.orthoScene.overrideMaterial=this.materialGodraysDepthMask,e.setRenderTarget(this.rtTextureDepthMask),e.render(this.orthoScene,this.orthoCamera),this.filterGodRays(e,this.rtTextureDepthMask.texture,this.rtTextureGodRays2,1/6),this.filterGodRays(e,this.rtTextureGodRays2.texture,this.rtTextureGodRays1,1/(6*6)),this.filterGodRays(e,this.rtTextureGodRays1.texture,this.rtTextureGodRays2,1/(6*6*6)),this.godrayCombineUniforms.tColors.value=i.texture,this.godrayCombineUniforms.tGodRays.value=this.rtTextureGodRays2.texture,this.orthoScene.overrideMaterial=this.materialGodraysCombine,this.renderToScreen?(e.setRenderTarget(null),e.render(this.orthoScene,this.orthoCamera)):(e.setRenderTarget(t),e.clear(),e.render(this.orthoScene,this.orthoCamera)),this.orthoScene.overrideMaterial=null}setSize(e,t){this.rtTextureDepth.setSize(e,t),this.rtTextureDepthMask.setSize(e,t);const i=e*this.multiplier,r=t*this.multiplier;this.rtTextureGodRays1.setSize(i,r),this.rtTextureGodRays2.setSize(i,r)}dispose(){this.orthoScene.remove(this.orthoCamera),this.orthoScene.remove(this.fsQuad),this.rtTextureDepth.dispose(),this.rtTextureDepthMask.dispose(),this.rtTextureGodRays1.dispose(),this.rtTextureGodRays2.dispose(),this.materialDepth.dispose(),this.materialGodraysDepthMask.dispose(),this.materialGodraysFakeSun.dispose(),this.materialGodraysCombine.dispose(),this.materialGodraysGenerate.dispose()}}var i_=`/* BEGIN HEADER */
uniform float curvature;
uniform float vertexThickness;
uniform float edgeThickness;
uniform float segments;

struct vec5 {
  vec4 v;
  float u;
};

#if DIMENSIONS == 3
attribute vec3 instancePosition;
attribute vec3 instanceTarget;
#elif DIMENSIONS == 4
attribute vec4 instancePosition;
attribute vec4 instanceTarget;
#elif DIMENSIONS == 5
attribute mat3 instancePosition;
attribute mat3 instanceTarget;
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

  #if DIMENSIONS == 3
  vec3 pos;
  #elif DIMENSIONS == 4
  vec4 pos;
  #elif DIMENSIONS == 5
  vec5 pos;
  vec5 instancePosition = fromMat(instancePosition);
  vec5 instanceTarget = fromMat(instanceTarget);
  #endif

  vec3 norm;
  float sizeFactor;

  if(!nan(instanceTarget)) {
    float vid = float(gl_VertexID);
    float h = floor(vid / (radial + 1.)) / (segments);
    float r = mod(vid, radial + 1.) / (radial);

    pos = mix(instancePosition, instanceTarget, h);

    #if DIMENSIONS == 3
    vec3 next;
    #elif DIMENSIONS == 4
    vec4 next;
    #elif DIMENSIONS == 5
    vec5 next;
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
}`,A2=`/* BEGIN INCLUDE */

bool nan(in vec3 v) {
  return isnan(v.x) || isnan(v.y) || isnan(v.z);
}

bool nan(in vec4 v) {
  return isnan(v.x) || isnan(v.y) || isnan(v.z) || isnan(v.w);
}

bool nan(in vec5 v) {
  return isnan(v.v.x) || isnan(v.v.y) || isnan(v.v.z) || isnan(v.v.w) || isnan(v.u);
}

vec5 mix(in vec5 a, in vec5 b, in float t) {
  return vec5(mix(a.v, b.v, t), mix(a.u, b.u, t));
}

float len(in vec3 v) {
  return length(v);
}

float len(in vec4 v) {
  return length(v);
}

float len(in vec5 v) {
  return sqrt(dot(v.v, v.v) + v.u * v.u);
}

float xdot(in vec3 v) {
  return dot(v.xy, v.xy) + curvature * v.z * v.z;
}

float xdot(in vec4 v) {
  return dot(v.xyz, v.xyz) + curvature * v.w * v.w;
}

float xdot(in vec5 v) {
  return dot(v.v, v.v) + curvature * v.u * v.u;
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

vec5 xnormalize(in vec5 v) {
  if(curvature == 0.0) {
    return v;
  }
  float n = sqrt(abs(xdot(v)));
  return vec5(v.v / n, v.u / n);
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

vec3 xproject(in vec4 v) {
  #if PROJECTION == 0 
  return v.xyz / (v.w - curvature);
  #elif PROJECTION == 1 
  return v.xyz;
  #elif PROJECTION == 2 
  return v.xyz / v.w;
  #elif PROJECTION == 3 
  return v.xyz / (v.w + curvature);
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

vec3 xproject(in vec5 v) {
  #if PROJECTION == 0 
  return xproject(v.v / (v.u * .25 - curvature));
  #elif PROJECTION == 1 
  return xproject(v.v);
  #elif PROJECTION == 2 
  return xproject(v.v / v.u);
  #elif PROJECTION == 3 
  return xproject(v.v / (v.u + curvature));
  #elif PROJECTION == 4 
  return xproject(v.v);
  #elif PROJECTION == 5 
  return xproject(v.v);
  #endif
}

vec5 fromMat(in mat3 m) {
  return vec5(vec4(m[0], m[1][0]), m[1][1]);
}
/* END INCLUDE */`;const D2=i_.match(/\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m)[1],f0=i_.match(/\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m)[1],R2=A2.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1],ci=(n,e,t)=>(n=n.clone(),n.vertexColors=![Gr,Lt,Qx,dl].find(i=>n instanceof i),n._dimensions=e,n._projection=t,n.uniforms={...n.uniforms||{},curvature:{value:0},edgeThickness:{value:0},vertexThickness:{value:0},segments:{value:1}},n.onBeforeCompile=i=>{const r=[`#define DIMENSIONS ${n._dimensions}`,`#define PROJECTION ${n_.indexOf(n._projection)}`];Object.assign(i.uniforms,n.uniforms),n instanceof _o?i.vertexShader=i.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","").replace("#endif",""):n instanceof Gr||n instanceof dl?i.vertexShader=i.vertexShader.replace("#ifdef USE_DISPLACEMENTMAP","").replace("#endif",""):n instanceof Lt&&(i.vertexShader=i.vertexShader.replace("gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",f0+"gl_Position = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );")),i.vertexShader=[...r,D2,R2,i.vertexShader.replace("#include <begin_vertex>","").replace("#include <beginnormal_vertex>",f0)].join(`
`)},n.customProgramCacheKey=()=>`hypermath_${n.constructor.name}_${n._dimensions}_${n._projection}`,n),L2=()=>{const n=new Kx;n.autoClear=!1,n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(n.domElement);const e=new Nn(90,window.innerWidth/window.innerHeight,.01,100);e.position.set(0,0,-1),e.up.set(0,1,0),e.lookAt(0,0,0),e.zoom=Math.min(1,window.innerWidth/window.innerHeight),e.updateProjectionMatrix();const t=new Zx;e.updateProjectionMatrix(),t.add(e);const i=new h2(e,n.domElement);i.target.set(0,0,0),i.minDistance=0,i.maxDistance=100,i.addEventListener("change",()=>r.render()),i.update(),i.enabled=!1,n.domElement.addEventListener("dblclick",()=>{i.position0.set(0,0,i.position0.z===-1?-.25:-1,0,0),i.reset()});const r=new y2(n);r.setPixelRatio(window.devicePixelRatio);const o=new x2(t,e);return r.addPass(o),{composer:r,camera:e,scene:t,orbitControls:i}},r_=n=>{let e=n.scene.getObjectByName("instanced-vertex");if(e)return console.warn("Vertex already exists, skipping init"),e;const t=Ks[n.ambiance],{dimensions:i,projection:r}=n,o=new qc(1e-7,32,32);o.attributes.position.array.fill(0);const l=new e_().copy(o),a=i>4?9:i;l.setAttribute("instancePosition",new Ls(new Float32Array(n.maxVertices*a),a)),l.setAttribute("instanceTarget",new Ls(new Float32Array(n.maxVertices*a),a)),l.setAttribute("instanceColor",new Ls(new Float32Array(n.maxVertices*3),3));const d=new Bn(l,ci(t.material,i,r));return l.attributes.instanceTarget.array.fill(NaN),d.geometry.instanceCount=0,d.frustumCulled=!1,d.customDepthMaterial=ci(new Gr({depthPacking:_l}),i,r),d.customDistanceMaterial=ci(new dl,i,r),d.castShadow=t.shadow,d.name="instanced-vertex",d.visible=n.showVertices,n.scene.add(d),d},o_=n=>{let e=n.scene.getObjectByName("instanced-edge");if(e)return console.warn("Edge already exists, skipping init"),e;const t=Ks[n.ambiance],{dimensions:i,curve:r,segments:o,projection:l}=n,a=new Fp(0,0,1,8,r?o:1,!0),d=new e_().copy(a),h=i>4?9:i;d.setAttribute("instancePosition",new Ls(new Float32Array(n.maxEdges*h),h)),d.setAttribute("instanceTarget",new Ls(new Float32Array(n.maxEdges*h),h)),d.setAttribute("instanceColor",new Ls(new Float32Array(n.maxEdges*3),3));const m=new Bn(d,ci(t.material,i,l));return m.geometry.instanceCount=0,m.frustumCulled=!1,m.customDepthMaterial=ci(new Gr({depthPacking:_l}),i,l),m.customDistanceMaterial=ci(new dl,i,l),m.castShadow=t.shadow,m.name="instanced-edge",m.visible=n.showEdges,n.scene.add(m),m},d0=n=>{const e=n.scene.getObjectByName("instanced-vertex");n.scene.remove(e),e.geometry.dispose(),e.material.dispose();const t=r_(n);return $c({...n,instancedVertex:t}),t},h0=n=>{const e=n.scene.getObjectByName("instanced-edge");n.scene.remove(e),e.geometry.dispose(),e.material.dispose();const t=o_(n);return $c({...n,instancedEdge:t}),t},I2=(n,e=null)=>{const t=Ks[n.ambiance],i=n.scene.getObjectByName("instanced-vertex"),{dimensions:r}=n;let o=e?e[0]:0,l=e?e[1]:n.vertices.length;const a=r>4?9:r;i.geometry.instanceCount=l;for(let d=o;d<l;d++){const h=n.vertices[d],m=i.geometry.attributes.instancePosition.array;for(let x=0;x<r;x++)m[d*a+x]=h.vertex[x];const y=i.geometry.attributes.instanceColor.array,v=t.color(h,"vertex");y[d*3+0]=v.r,y[d*3+1]=v.g,y[d*3+2]=v.b}i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},O2=(n,e=null)=>{const t=Ks[n.ambiance],i=n.scene.getObjectByName("instanced-edge"),{dimensions:r}=n;let o=e?e[0]:0,l=e?e[1]:n.edges.length;const a=r>4?9:r;i.geometry.instanceCount=l;for(let d=o;d<l;d++){const h=n.edges[d],m=i.geometry.attributes.instancePosition.array;for(let _=0;_<r;_++)m[d*a+_]=h.start[_];const y=i.geometry.attributes.instanceTarget.array;for(let _=0;_<r;_++)y[d*a+_]=h.end[_];const v=i.geometry.attributes.instanceColor.array,x=t.color(h,"edge");v[d*3+0]=x.r,v[d*3+1]=x.g,v[d*3+2]=x.b}i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceTarget.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},p0=(n,e)=>{const t=n.scene.getObjectByName(`instanced-${e}`);t.visible=n[e==="vertex"?"showVertices":"showEdges"]},Ms=(n,e=null)=>{if(e===null&&n.ranges.length===0||e!==null&&e>=n.ranges.length)return;const t=e!==null?n.ranges[e]:{vertices:[n.ranges[0].vertices[0],n.ranges[n.currentOrder-1].vertices[1]],edges:[n.ranges[0].edges[0],n.ranges[n.currentOrder-1].edges[1]]};n.scene.getObjectByName("instanced-vertex").visible&&I2(n,t.vertices),n.scene.getObjectByName("instanced-edge").visible&&O2(n,t.edges),n.composer.render()},U2=n=>{const e=n.composer.renderer.getDrawingBufferSize(new Ue),t=new en(e.width,e.height,{samples:n.msaa?n.msaaSamples:0});n.composer.reset(t),n.composer.render()},k2=n=>{const e=Ks[n.ambiance],{scene:t,composer:i,camera:r,dimensions:o,projection:l}=n,a=n.scene.getObjectByName("instanced-vertex"),d=n.scene.getObjectByName("instanced-edge");a.material=ci(e.material,o,l),d.material=ci(e.material,o,l),e.env?t.environment=e.env:t.environment=null,typeof e.background!="number"?t.background=e.background:(t.background=null,i.renderer.setClearColor(new Ze(e.background),1));const h=[];t.traverse(x=>{x.isLight&&h.push(x)}),h.forEach(x=>{x.parent.remove(x)});let m=t.getObjectByName("ground");m&&(m.geometry.dispose(),m.material.dispose(),t.remove(m)),e.shadow&&(i.renderer.shadowMap.type=Op,e.ground==="sphere"?m=new Bn(new qc(20,32,32),new Ss({color:16777215,side:Rn,depthWrite:!1})):e.ground==="plane"&&(m=new Bn(new El(1e3,1e3),new Ss({color:16777215,transparent:!0,opacity:.5,depthWrite:!1})),m.rotation.x=-Math.PI/2,m.position.y=-3),m.name="ground",m.receiveShadow=!0,t.add(m)),i.renderer.shadowMap.enabled=e.shadow,i.renderer.shadowMap.type=Ex,a.castShadow=e.shadow,d.castShadow=e.shadow;const y=e.shadow?x=>{x.shadow&&(x.castShadow=!0,x.shadow.mapSize.width=2048,x.shadow.mapSize.height=2048,x.shadow.camera.near=r.near,x.shadow.camera.far=r.far,x.shadow.camera.fov=r.fov)}:()=>{};(e.lights||[]).forEach(x=>{y(x),t.add(x)}),(e.cameraLights||[]).forEach(x=>{y(x),r.add(x)});const v=e.fx||["copy"];i.renderer.toneMapping=v.includes("bloom")?Dx:Gi,i.renderer.toneMappingExposure=v.includes("bloom")?1.5:1,i.passes.slice(1).forEach(x=>{i.removePass(x),x.dispose()}),v.forEach(x=>{if(x==="copy")i.addPass(i.copyPass);else if(x==="sao"){const _=new zh(t,r,!1,!0);_.depthMaterial=ci(_.depthMaterial,o,l),_.normalMaterial=ci(_.normalMaterial,o,l),_.params.output=zh.OUTPUT.Default,_.params.saoIntensity=.1,_.params.saoScale=10,_.params.saoKernelRadius=10,_.params.saoMinResolution=0,_.params.saoBlur=!0,_.params.saoBlurRadius=8,_.params.saoBlurStdDev=4,_.params.saoBlurDepthCutoff=.01,i.addPass(_)}else if(x==="bokeh"){const _=new g2(t,r,{focus:.5,aperture:.005,maxblur:.005});_.materialDepth=ci(_.materialDepth,o,l),i.addPass(_)}else if(x==="sobel"){const _=new Nh(M2);i.addPass(_);const T=new Nh(w2);T.uniforms.resolution.value.x=window.innerWidth*window.devicePixelRatio,T.uniforms.resolution.value.y=window.innerHeight*window.devicePixelRatio,i.addPass(T)}else if(x==="bloom"){const _=new Ws(new Ue(window.innerWidth,window.innerHeight),1.5,0,0);i.addPass(_)}else if(x==="godray"){const _=new P2(t,r);_.materialDepth=ci(_.materialDepth,o,l),i.addPass(_)}}),$c(n),i.render()},$c=({composer:n,scene:e,dimensions:t,curvature:i,projection:r,curve:o,segments:l,vertexThickness:a,edgeThickness:d})=>{l=o?l:1;const h=e.getObjectByName("instanced-vertex"),m=e.getObjectByName("instanced-edge"),y=v=>{v!=null&&v._dimensions&&(v.uniforms.curvature.value=i,v.uniforms.vertexThickness.value=a,v.uniforms.edgeThickness.value=d,(t!==v._dimensions||r!==v._projection)&&(v._dimensions=t,v._projection=r,v.needsUpdate=!0),v.uniforms.segments.value=l)};y(h.material),y(m.material),n.passes.forEach(v=>Object.values(v).filter(x=>x==null?void 0:x.isMaterial).forEach(x=>y(x))),y(h.customDepthMaterial),y(h.customDistanceMaterial),y(m.customDepthMaterial),y(m.customDistanceMaterial)},Er=(n,e,t,i)=>{for(let r=0;r<e.length;r++){const{vertex:o}=e[r];Ku(o,n,i)}for(let r=0;r<t.length;r++){const{start:o,end:l}=t[r];Ku(o,n,i),Ku(l,n,i)}},hl=(n,e,t,i)=>{for(let r=0;r<e.length;r++){const{vertex:o}=e[r];Dd(o,n)}for(let r=0;r<t.length;r++){const{start:o,end:l}=t[r];Dd(o,n),Dd(l,n)}},pl=(n,e,t,i)=>{for(let r=0;r<e.length;r++){const{vertex:o}=e[r];Rd(o,n,i)}for(let r=0;r<t.length;r++){const{start:o,end:l}=t[r];Rd(o,n,i),Rd(l,n,i)}},N2=(n,e,t,i,r)=>{const o=window.innerWidth/2,l=window.innerHeight/2,a=Math.min(o,l)*.9;if(n.ctrlKey)hl(-n.dx/(2*a),e,t),pl(-n.dy/(2*a),e,t,i);else{const d=-n.dx/o,h=-n.dy/l;n.shiftKey!==!!r?Er([0,0,h,d],e,t,i):Er([d,h,0,0],e,t,i)}},z2=(n,e,t,i,r)=>{hl(bc*n.da/180,e,t),pl(n.ds,e,t,i)},F2=(n,e,t,i)=>{const{code:r}=n,o=.01;if(r==="ArrowLeft"||r==="KeyA")Er([-o,0,0,0],e,t,i);else if(r==="ArrowRight"||r==="KeyD")Er([o,0,0,0],e,t,i);else if(r==="ArrowUp"||r==="KeyW")Er([0,0,-o,0],e,t,i);else if(r==="ArrowDown"||r==="KeyS")Er([0,0,o,0],e,t,i);else if(r==="PageUp"||r==="KeyQ")Er([0,-o,0,0],e,t,i);else if(r==="PageDown"||r==="KeyE")Er([0,o,0,0],e,t,i);else if(r==="KeyR")hl(-(bc*5)/180,e,t);else if(r==="KeyF")hl(bc*5/180,e,t);else if(r==="KeyZ")pl(-o,e,t,i);else if(r==="KeyC")pl(o,e,t,i);else return;return!0},B2=(n,e,t,i,r)=>{const o=window.innerWidth/2,l=window.innerHeight/2,a=Math.min(o,l)*.9,d=10*(n.deltaMode===1?n.deltaY*10:n.deltaY)/a;n.shiftKey===!!r?hl(bc*d/180,e,t):pl(-d/100,e,t,i)},V2=n=>{ft.useLayoutEffect(()=>{const e=o2(n.composer.renderer.domElement).draggable({listeners:{move:t=>{n.controls==="free"&&(N2(t,n.vertices,n.edges,n.curvature,n.controlsShift),Ms(n))}}}).gesturable({onmove:t=>{n.controls==="free"&&(z2(t,n.vertices,n.edges,n.curvature,n.controlsShift),Ms(n))}});return()=>{e.unset()}},[n]),ft.useEffect(()=>{const e=t=>{n.controls!=="orbit"&&(B2(t,n.vertices,n.edges,n.curvature,n.controlsShift),Ms(n))};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e)},[n]),ft.useEffect(()=>{const e=t=>{F2(t,n.vertices,n.edges,n.curvature,n.controlsShift)&&Ms(n)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[n])};function s_(){return new Worker(""+new URL("tiling.worker-90099307.js",import.meta.url).href)}let nr=0,er=new s_;const G2=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{const e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)}),H2=()=>{nr>0&&(console.warn(`Killing worker (${nr})`),er.terminate(),nr=0,er=new s_)},W2=n=>(n.uuid=G2(),nr++,er.postMessage(n),new Promise((e,t)=>{const i=o=>{if(o.data.uuid===n.uuid){if(nr--,er.removeEventListener("message",i),er.removeEventListener("error",r),o.data.error){t(o.data.error);return}e(o.data)}},r=o=>{er.removeEventListener("message",i),er.removeEventListener("error",r),!(nr<=0)&&(nr--,nr=u2(0,nr),console.error("Can't call web worker",o))};er.addEventListener("message",i),er.addEventListener("error",r)})),m0=(n,e)=>(n=n||0,e||(e=n,n=0),new Array(e-n).fill().map((t,i)=>i+n));function j2({gl:n,params:e,updateParams:t}){const[i,r]=ft.useState(()=>{const _={curvature:0,edges:[],vertices:[],ranges:[],currentOrder:0,maxVertices:5e3,maxEdges:5e4,...e,...n};return r_(_),o_(_),_}),[o,l]=ft.useState(!1),[a,d]=ft.useState(),[h,m]=ft.useState(!0),y=ft.useCallback(()=>{let _,T;const b=c2(e.dimensions/2)-1;e.controls==="orbit"?(_="free",T=0):e.controlsShift>=b?(_="orbit",T=0):(_="free",T=e.controlsShift+1),t({controls:_,controlsShift:T})},[e.controls,e.controlsShift,e.dimensions,t]);ft.useEffect(()=>{r(_=>({..._,controls:e.controls,controlsShift:e.controlsShift})),i.orbitControls.enabled=e.controls==="orbit"},[i.orbitControls,e.controls,e.controlsShift]),ft.useEffect(()=>{r(_=>{const T={..._,ambiance:e.ambiance};return k2(T),T})},[e.ambiance]),ft.useEffect(()=>{r(_=>{if(e.showVertices&&!e.vertexThickness||e.showEdges&&!e.edgeThickness)return _;const T={..._,vertexThickness:e.vertexThickness,edgeThickness:e.edgeThickness,projection:e.projection};return $c(T),T.composer.render(),T})},[e.showVertices,e.showEdges,e.vertexThickness,e.edgeThickness,e.projection,i.curvature]),ft.useEffect(()=>{r(_=>{if(e.msaa&&!e.msaaSamples)return _;const T={..._,msaa:e.msaa,msaaSamples:e.msaaSamples};return U2(T),T})},[e.msaa,e.msaaSamples]),ft.useEffect(()=>{r(_=>{const T={..._,showVertices:e.showVertices,showEdges:e.showEdges};return p0(T,"vertex"),p0(T,"edge"),T})},[e.showVertices,e.showEdges]),ft.useEffect(()=>{r(_=>!e.dimensions||e.coxeter.find(T=>T.find(b=>!b))||e.coxeterDiv.find(T=>T.find(b=>!b))||e.curve&&!e.segments?_:{..._,dimensions:e.dimensions,curve:e.curve,segments:e.segments,coxeter:e.coxeter,coxeterDiv:e.coxeterDiv,stellation:e.stellation,mirrors:e.mirrors,currentOrder:0,edges:[],vertices:[],ranges:[]})},[e.dimensions,e.curve,e.segments,e.coxeter,e.coxeterDiv,e.mirrors,e.stellation]),ft.useEffect(()=>{d0(i),h0(i)},[i.dimensions,i.curve,i.segments]),ft.useEffect(()=>{r(_=>e.order?{..._,order:e.order}:_)},[e.order]),ft.useEffect(()=>{r(_=>_.order<_.currentOrder?{..._,currentOrder:_.order}:_)},[i.order,i.currentOrder]),ft.useEffect(()=>{if(!(i.order<=i.currentOrder)){if(i.ranges[i.order]){r(_=>({..._,currentOrder:_.order}));return}H2(),l(!1),(async()=>{d(null),l(!0);let _;try{_=await W2({dimensions:i.dimensions,coxeter:i.coxeter,coxeterDiv:i.coxeterDiv,stellation:i.stellation,mirrors:i.mirrors,currentOrder:i.currentOrder})}catch(T){d(T),console.warn(T),r(b=>({...b,currentOrder:b.order}))}finally{l(!1)}_&&r(T=>{const b={...T,currentOrder:_.currentOrder,curvature:_.curvature,ranges:T.ranges.slice(),vertices:T.vertices.concat(_.vertices),edges:T.edges.concat(_.edges)};return b.ranges[_.currentOrder-1]={vertices:[T.vertices.length,b.vertices.length],edges:[T.edges.length,b.edges.length]},b})})()}},[i.order,i.currentOrder,i.dimensions,i.curve,i.segments,i.coxeter,i.coxeterDiv,i.mirrors,i.stellation]),ft.useEffect(()=>{r(_=>{if(_.vertices.length>_.maxVertices){console.warn(`Extending vertex buffer to ${_.vertices.length}`);const T={..._,maxVertices:_.vertices.length};return d0(T),T}return _})},[i.vertices]),ft.useEffect(()=>{r(_=>{if(_.edges.length>_.maxEdges){console.warn(`Extending edge buffer to ${_.edges.length}`);const T={..._,maxEdges:_.edges.length};return h0(T),T}return _})},[i.edges]),ft.useEffect(()=>{i.currentOrder>0&&Ms(i,i.currentOrder-1)},[i.currentOrder,i.vertices,i.edges,i.ranges,i.showVertices,i.showEdges]),ft.useEffect(()=>{Ms(i)},[i.ambiance,i.maxVertices,i.maxEdges]),ft.useEffect(()=>{const _=()=>{i2(i)};return window.addEventListener("resize",_),window.addEventListener("orientationchange",_),()=>{window.removeEventListener("resize",_),window.removeEventListener("orientationchange",_)}},[i]),V2(i);const v=ft.useCallback(()=>{const _={extended:!e.extended};if(e.extended)for(let T=0;T<e.dimensions;T++)for(let b=0;b<T-1;b++)e.coxeter[T][b]=2,e.coxeter[b][T]=2;t(_)},[e.extended,e.dimensions,e.coxeter,t]),x=ft.useCallback(_=>{let{name:T,checked:b,type:p,value:w}=_.target;p==="checkbox"?w=b:p==="number"&&w&&(w=+w);const E={};if(T==="dimensions"&&w){E.coxeter=new Array(w).fill().map(()=>new Array(w).fill(2)),E.coxeterDiv=new Array(w).fill().map(()=>new Array(w).fill(1)),E.mirrors=new Array(w).fill(0);for(let A=0;A<l2(e.coxeter.length,w);A++){for(let D=0;D<A;D++)E.coxeter[A][D]=e.coxeter[A][D],E.coxeter[D][A]=e.coxeter[D][A];E.mirrors[A]=e.mirrors[A]}for(let A=0;A<w;A++)E.coxeter[A][A]=-1}if(T.startsWith("coxeter")){const[A,D]=T.split("-").slice(1).map(B=>+B),N=e.coxeter.map(B=>B.slice());N[A][D]=w,N[D][A]=w,T="coxeter",w=N}if(T.startsWith("div")){const[A,D]=T.split("-").slice(1).map(B=>+B),N=e.coxeterDiv.map(B=>B.slice());N[A][D]=w,N[D][A]=w,T="coxeterDiv",w=N}if(T.startsWith("mirror")){const[A]=T.split("-").slice(1).map(D=>+D);T="mirrors",w=e.mirrors.map((D,N)=>(N===A?w:D)?1:0),w.reduce((D,N)=>D+N,0)===0&&(w[0]=1)}E[T]=w,t(E)},[e,t]);return Ke.jsxs("div",{className:a?"error":"",title:a,children:[Ke.jsxs("button",{id:"controls",onClick:y,children:[i.controls==="orbit"?"⇹":"↭",i.controls==="free"?Ke.jsx("sup",{children:i.controlsShift+1}):null]}),Ke.jsxs("button",{id:"space",className:o?"processing":"",onClick:()=>m(!h),children:[i.curvature===0?"𝔼":i.curvature>0?"𝕊":"ℍ",Ke.jsx("sup",{children:i.dimensions-1})]}),h&&Ke.jsxs("aside",{className:"controls",children:[Ke.jsxs("label",{children:["Order",Ke.jsx("input",{type:"number",name:"order",min:"1",step:"1",value:e.order,onChange:x})]}),Ke.jsxs("label",{children:["Segments",Ke.jsx("input",{type:"checkbox",name:"curve",checked:e.curve,onChange:x}),e.curve?Ke.jsx("input",{type:"number",name:"segments",min:"1",step:"1",value:e.segments,onChange:x}):null]}),Ke.jsxs("label",{children:["Dimensions",Ke.jsx("input",{type:"number",name:"dimensions",min:"3",max:"5",step:"1",value:e.dimensions,onChange:x})]}),Ke.jsxs("label",{children:["Projection",Ke.jsx("select",{name:"projection",value:e.projection,onChange:x,children:n_.map(_=>Ke.jsx("option",{value:_,children:_.replace(/_/g," ").replace(/./,T=>T.toUpperCase())},_))})]}),Ke.jsxs("label",{children:["Vertices",Ke.jsx("input",{type:"checkbox",name:"showVertices",checked:e.showVertices,onChange:x}),e.showVertices?Ke.jsx("input",{type:"number",name:"vertexThickness",min:"0",step:"1",value:e.vertexThickness,onChange:x}):null]}),Ke.jsxs("label",{children:["Edges",Ke.jsx("input",{type:"checkbox",name:"showEdges",checked:e.showEdges,onChange:x}),e.showEdges?Ke.jsx("input",{type:"number",name:"edgeThickness",min:"0",step:"1",value:e.edgeThickness,onChange:x}):null]}),Ke.jsxs("label",{children:[Ke.jsx("input",{type:"checkbox",name:"stellation",checked:e.stellation,onChange:x}),"Stellation"]}),Ke.jsxs("label",{children:["Ambiance",Ke.jsx("select",{name:"ambiance",value:e.ambiance,onChange:x,children:Object.keys(Ks).map(_=>Ke.jsx("option",{value:_,children:_.replace(/_/g," ").replace(/./,T=>T.toUpperCase())},_))})]}),Ke.jsxs("label",{children:["MSAA",Ke.jsx("input",{type:"checkbox",name:"msaa",checked:e.msaa,onChange:x}),e.msaa?Ke.jsx("input",{type:"number",name:"msaaSamples",min:"0",step:"1",value:e.msaaSamples,onChange:x}):null]})]}),h&&Ke.jsxs("aside",{className:"coxeters",children:[m0(e.dimensions).map(_=>Ke.jsxs(ft.Fragment,{children:[_>0&&Ke.jsx("div",{className:"number",children:m0(_).map(T=>(!e.extended||_===T+1)&&Ke.jsxs("label",{children:[Ke.jsx("input",{type:"number",name:`coxeter-${_}-${T}`,min:"2",step:"1",value:e.coxeter[_][T],onChange:x}),e.stellation&&Ke.jsxs("div",{className:"stellation",children:[Ke.jsx("span",{className:"divisor",children:" / "}),Ke.jsx("input",{type:"number",name:`div-${_}-${T}`,min:"1",step:"1",value:e.coxeterDiv[_][T],onChange:x})]})]},T))}),Ke.jsxs("label",{className:"mirror",children:[_>0&&Ke.jsx("span",{className:"coxeter",children:"——"}),Ke.jsx("input",{type:"checkbox",name:`mirror-${_}`,checked:!!e.mirrors[_],onChange:x}),_<e.dimensions-1&&Ke.jsx("span",{className:"coxeter",children:"——"})]})]},_)),Ke.jsx("button",{id:"extend",onClick:v,children:e.extended?"▼":"▲"})]})]})}const a_=L2();Object.assign(window,a_);const X2={dimensions:4,coxeter:[[-1,5,2,2],[5,-1,3,2],[2,3,-1,4],[2,2,4,-1]],coxeterDiv:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],mirrors:[1,0,0,0],extended:!0,stellation:!1,order:10,segments:32,curve:!0,showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,projection:"stereographic",controls:"orbit",controlsShift:0,ambiance:"neon",msaa:!1,msaaSamples:8},g0=(n=null)=>{const{location:e}=window;if(e.hash)try{return JSON.parse(atob(e.hash.slice(1)))}catch(t){console.warn(t),e.hash=""}return n},q2=n=>{window.history.pushState(null,null,"#"+btoa(JSON.stringify(n)))},Y2=()=>{const[n,e]=ft.useState(g0(X2)),t=ft.useCallback(()=>{const r=g0();r&&e(r)},[]),i=ft.useCallback(r=>{const o={...n,...r};e(o),!(!o.dimensions||o.coxeter.find(l=>l.find(a=>!a))||o.coxeterDiv.find(l=>l.find(a=>!a))||o.curve&&!o.segments||o.showVertices&&!o.vertexThickness||o.showEdges&&!o.edgeThickness||o.msaa&&!o.msaaSamples||!o.order)&&q2(o)},[n]);return ft.useEffect(()=>(window.addEventListener("popstate",t),()=>{window.removeEventListener("popstate",t)}),[t]),Ke.jsx(j2,{gl:a_,params:n,updateParams:i})};Od.createRoot(document.getElementById("root")).render(Ke.jsx(Y2,{}));
