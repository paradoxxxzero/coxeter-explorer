(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();var Gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ks={exports:{}},wl={},Is={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar=Symbol.for("react.element"),Kc=Symbol.for("react.portal"),Xc=Symbol.for("react.fragment"),Jc=Symbol.for("react.strict_mode"),Yc=Symbol.for("react.profiler"),qc=Symbol.for("react.provider"),Zc=Symbol.for("react.context"),bc=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),nf=Symbol.for("react.memo"),tf=Symbol.for("react.lazy"),uu=Symbol.iterator;function rf(e){return e===null||typeof e!="object"?null:(e=uu&&e[uu]||e["@@iterator"],typeof e=="function"?e:null)}var Ts={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rs=Object.assign,Cs={};function mt(e,n,t){this.props=e,this.context=n,this.refs=Cs,this.updater=t||Ts}mt.prototype.isReactComponent={};mt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};mt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ps(){}Ps.prototype=mt.prototype;function di(e,n,t){this.props=e,this.context=n,this.refs=Cs,this.updater=t||Ts}var vi=di.prototype=new Ps;vi.constructor=di;Rs(vi,mt.prototype);vi.isPureReactComponent=!0;var su=Array.isArray,Os=Object.prototype.hasOwnProperty,pi={current:null},_s={key:!0,ref:!0,__self:!0,__source:!0};function zs(e,n,t){var r,l={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)Os.call(n,r)&&!_s.hasOwnProperty(r)&&(l[r]=n[r]);var u=arguments.length-2;if(u===1)l.children=t;else if(1<u){for(var s=Array(u),a=0;a<u;a++)s[a]=arguments[a+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:ar,type:e,key:o,ref:i,props:l,_owner:pi.current}}function lf(e,n){return{$$typeof:ar,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function hi(e){return typeof e=="object"&&e!==null&&e.$$typeof===ar}function of(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var au=/\/+/g;function Bl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?of(""+e.key):n.toString(36)}function Fr(e,n,t,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ar:case Kc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Bl(i,0):r,su(l)?(t="",e!=null&&(t=e.replace(au,"$&/")+"/"),Fr(l,n,t,"",function(a){return a})):l!=null&&(hi(l)&&(l=lf(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(au,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",su(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+Bl(o,u);i+=Fr(o,n,t,s,l)}else if(s=rf(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+Bl(o,u++),i+=Fr(o,n,t,s,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function mr(e,n,t){if(e==null)return e;var r=[],l=0;return Fr(e,r,"","",function(o){return n.call(t,o,l++)}),r}function uf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},Mr={transition:null},sf={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:pi};z.Children={map:mr,forEach:function(e,n,t){mr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return mr(e,function(){n++}),n},toArray:function(e){return mr(e,function(n){return n})||[]},only:function(e){if(!hi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=mt;z.Fragment=Xc;z.Profiler=Yc;z.PureComponent=di;z.StrictMode=Jc;z.Suspense=ef;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sf;z.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rs({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=pi.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)Os.call(n,s)&&!_s.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var a=0;a<s;a++)u[a]=arguments[a+2];r.children=u}return{$$typeof:ar,type:e.type,key:l,ref:o,props:r,_owner:i}};z.createContext=function(e){return e={$$typeof:Zc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qc,_context:e},e.Consumer=e};z.createElement=zs;z.createFactory=function(e){var n=zs.bind(null,e);return n.type=e,n};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:bc,render:e}};z.isValidElement=hi;z.lazy=function(e){return{$$typeof:tf,_payload:{_status:-1,_result:e},_init:uf}};z.memo=function(e,n){return{$$typeof:nf,type:e,compare:n===void 0?null:n}};z.startTransition=function(e){var n=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=n}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(e,n){return se.current.useCallback(e,n)};z.useContext=function(e){return se.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return se.current.useDeferredValue(e)};z.useEffect=function(e,n){return se.current.useEffect(e,n)};z.useId=function(){return se.current.useId()};z.useImperativeHandle=function(e,n,t){return se.current.useImperativeHandle(e,n,t)};z.useInsertionEffect=function(e,n){return se.current.useInsertionEffect(e,n)};z.useLayoutEffect=function(e,n){return se.current.useLayoutEffect(e,n)};z.useMemo=function(e,n){return se.current.useMemo(e,n)};z.useReducer=function(e,n,t){return se.current.useReducer(e,n,t)};z.useRef=function(e){return se.current.useRef(e)};z.useState=function(e){return se.current.useState(e)};z.useSyncExternalStore=function(e,n,t){return se.current.useSyncExternalStore(e,n,t)};z.useTransition=function(){return se.current.useTransition()};z.version="18.2.0";Is.exports=z;var X=Is.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af=X,cf=Symbol.for("react.element"),ff=Symbol.for("react.fragment"),df=Object.prototype.hasOwnProperty,vf=af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pf={key:!0,ref:!0,__self:!0,__source:!0};function js(e,n,t){var r,l={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)df.call(n,r)&&!pf.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:cf,type:e,key:o,ref:i,props:l,_owner:vf.current}}wl.Fragment=ff;wl.jsx=js;wl.jsxs=js;ks.exports=wl;var C=ks.exports,cu={},Fs={exports:{}},xe={},Ms={exports:{}},Ds={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(R,P){var O=R.length;R.push(P);e:for(;0<O;){var W=O-1>>>1,Y=R[W];if(0<l(Y,P))R[W]=P,R[O]=Y,O=W;else break e}}function t(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var P=R[0],O=R.pop();if(O!==P){R[0]=O;e:for(var W=0,Y=R.length,pr=Y>>>1;W<pr;){var In=2*(W+1)-1,$l=R[In],Tn=In+1,hr=R[Tn];if(0>l($l,O))Tn<Y&&0>l(hr,$l)?(R[W]=hr,R[Tn]=O,W=Tn):(R[W]=$l,R[In]=O,W=In);else if(Tn<Y&&0>l(hr,O))R[W]=hr,R[Tn]=O,W=Tn;else break e}}return P}function l(R,P){var O=R.sortIndex-P.sortIndex;return O!==0?O:R.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var s=[],a=[],p=1,m=null,v=3,h=!1,g=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(R){for(var P=t(a);P!==null;){if(P.callback===null)r(a);else if(P.startTime<=R)r(a),P.sortIndex=P.expirationTime,n(s,P);else break;P=t(a)}}function x(R){if(y=!1,d(R),!g)if(t(s)!==null)g=!0,Ll(w);else{var P=t(a);P!==null&&Ul(x,P.startTime-R)}}function w(R,P){g=!1,y&&(y=!1,f(N),N=-1),h=!0;var O=v;try{for(d(P),m=t(s);m!==null&&(!(m.expirationTime>P)||R&&!Re());){var W=m.callback;if(typeof W=="function"){m.callback=null,v=m.priorityLevel;var Y=W(m.expirationTime<=P);P=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===t(s)&&r(s),d(P)}else r(s);m=t(s)}if(m!==null)var pr=!0;else{var In=t(a);In!==null&&Ul(x,In.startTime-P),pr=!1}return pr}finally{m=null,v=O,h=!1}}var I=!1,k=null,N=-1,M=5,_=-1;function Re(){return!(e.unstable_now()-_<M)}function xt(){if(k!==null){var R=e.unstable_now();_=R;var P=!0;try{P=k(!0,R)}finally{P?Et():(I=!1,k=null)}}else I=!1}var Et;if(typeof c=="function")Et=function(){c(xt)};else if(typeof MessageChannel<"u"){var iu=new MessageChannel,Wc=iu.port2;iu.port1.onmessage=xt,Et=function(){Wc.postMessage(null)}}else Et=function(){E(xt,0)};function Ll(R){k=R,I||(I=!0,Et())}function Ul(R,P){N=E(function(){R(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,Ll(w))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(R){switch(v){case 1:case 2:case 3:var P=3;break;default:P=v}var O=v;v=P;try{return R()}finally{v=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,P){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var O=v;v=R;try{return P()}finally{v=O}},e.unstable_scheduleCallback=function(R,P,O){var W=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?W+O:W):O=W,R){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=O+Y,R={id:p++,callback:P,priorityLevel:R,startTime:O,expirationTime:Y,sortIndex:-1},O>W?(R.sortIndex=O,n(a,R),t(s)===null&&R===t(a)&&(y?(f(N),N=-1):y=!0,Ul(x,O-W))):(R.sortIndex=Y,n(s,R),g||h||(g=!0,Ll(w))),R},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(R){var P=v;return function(){var O=v;v=P;try{return R.apply(this,arguments)}finally{v=O}}}})(Ds);Ms.exports=Ds;var hf=Ms.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var As=X,ye=hf;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ls=new Set,Qt={};function $n(e,n){at(e,n),at(e+"Capture",n)}function at(e,n){for(Qt[e]=n,e=0;e<n.length;e++)Ls.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xo=Object.prototype.hasOwnProperty,mf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fu={},du={};function gf(e){return xo.call(du,e)?!0:xo.call(fu,e)?!1:mf.test(e)?du[e]=!0:(fu[e]=!0,!1)}function yf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xf(e,n,t,r){if(n===null||typeof n>"u"||yf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ae(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ne[n]=new ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var mi=/[\-:]([a-z])/g;function gi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(mi,gi);ne[n]=new ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(mi,gi);ne[n]=new ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(mi,gi);ne[n]=new ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function yi(e,n,t,r){var l=ne.hasOwnProperty(n)?ne[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(xf(n,t,l,r)&&(t=null),r||l===null?gf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ze=As.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),xi=Symbol.for("react.strict_mode"),Eo=Symbol.for("react.profiler"),Us=Symbol.for("react.provider"),$s=Symbol.for("react.context"),Ei=Symbol.for("react.forward_ref"),So=Symbol.for("react.suspense"),wo=Symbol.for("react.suspense_list"),Si=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),Bs=Symbol.for("react.offscreen"),vu=Symbol.iterator;function St(e){return e===null||typeof e!="object"?null:(e=vu&&e[vu]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Hl;function zt(e){if(Hl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Hl=n&&n[1]||""}return`
`+Hl+e}var Vl=!1;function Wl(e,n){if(!e||Vl)return"";Vl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var l=a.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=u);break}}}finally{Vl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?zt(e):""}function Ef(e){switch(e.tag){case 5:return zt(e.type);case 16:return zt("Lazy");case 13:return zt("Suspense");case 19:return zt("SuspenseList");case 0:case 2:case 15:return e=Wl(e.type,!1),e;case 11:return e=Wl(e.type.render,!1),e;case 1:return e=Wl(e.type,!0),e;default:return""}}function No(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Wn:return"Portal";case Eo:return"Profiler";case xi:return"StrictMode";case So:return"Suspense";case wo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $s:return(e.displayName||"Context")+".Consumer";case Us:return(e._context.displayName||"Context")+".Provider";case Ei:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Si:return n=e.displayName||null,n!==null?n:No(e.type)||"Memo";case rn:n=e._payload,e=e._init;try{return No(e(n))}catch{}}return null}function Sf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return No(n);case 8:return n===xi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function wf(e){var n=Hs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yr(e){e._valueTracker||(e._valueTracker=wf(e))}function Vs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Hs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ko(e,n){var t=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function pu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=xn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ws(e,n){n=n.checked,n!=null&&yi(e,"checked",n,!1)}function Io(e,n){Ws(e,n);var t=xn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?To(e,n.type,t):n.hasOwnProperty("defaultValue")&&To(e,n.type,xn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function hu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function To(e,n,t){(n!=="number"||qr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var jt=Array.isArray;function tt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+xn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Ro(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(jt(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:xn(t)}}function Gs(e,n){var t=xn(n.value),r=xn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function gu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Qs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Co(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Qs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Ks=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Kt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var At={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nf=["Webkit","ms","Moz","O"];Object.keys(At).forEach(function(e){Nf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),At[n]=At[e]})});function Xs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||At.hasOwnProperty(e)&&At[e]?(""+n).trim():n+"px"}function Js(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Xs(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var kf=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Po(e,n){if(n){if(kf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function Oo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _o=null;function wi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zo=null,rt=null,lt=null;function yu(e){if(e=dr(e)){if(typeof zo!="function")throw Error(S(280));var n=e.stateNode;n&&(n=Rl(n),zo(e.stateNode,e.type,n))}}function Ys(e){rt?lt?lt.push(e):lt=[e]:rt=e}function qs(){if(rt){var e=rt,n=lt;if(lt=rt=null,yu(e),n)for(e=0;e<n.length;e++)yu(n[e])}}function Zs(e,n){return e(n)}function bs(){}var Gl=!1;function ea(e,n,t){if(Gl)return e(n,t);Gl=!0;try{return Zs(e,n,t)}finally{Gl=!1,(rt!==null||lt!==null)&&(bs(),qs())}}function Xt(e,n){var t=e.stateNode;if(t===null)return null;var r=Rl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var jo=!1;if(Xe)try{var wt={};Object.defineProperty(wt,"passive",{get:function(){jo=!0}}),window.addEventListener("test",wt,wt),window.removeEventListener("test",wt,wt)}catch{jo=!1}function If(e,n,t,r,l,o,i,u,s){var a=Array.prototype.slice.call(arguments,3);try{n.apply(t,a)}catch(p){this.onError(p)}}var Lt=!1,Zr=null,br=!1,Fo=null,Tf={onError:function(e){Lt=!0,Zr=e}};function Rf(e,n,t,r,l,o,i,u,s){Lt=!1,Zr=null,If.apply(Tf,arguments)}function Cf(e,n,t,r,l,o,i,u,s){if(Rf.apply(this,arguments),Lt){if(Lt){var a=Zr;Lt=!1,Zr=null}else throw Error(S(198));br||(br=!0,Fo=a)}}function Bn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function na(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function xu(e){if(Bn(e)!==e)throw Error(S(188))}function Pf(e){var n=e.alternate;if(!n){if(n=Bn(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return xu(l),e;if(o===r)return xu(l),n;o=o.sibling}throw Error(S(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===t){i=!0,t=l,r=o;break}if(u===r){i=!0,r=l,t=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===t){i=!0,t=o,r=l;break}if(u===r){i=!0,r=o,t=l;break}u=u.sibling}if(!i)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function ta(e){return e=Pf(e),e!==null?ra(e):null}function ra(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ra(e);if(n!==null)return n;e=e.sibling}return null}var la=ye.unstable_scheduleCallback,Eu=ye.unstable_cancelCallback,Of=ye.unstable_shouldYield,_f=ye.unstable_requestPaint,G=ye.unstable_now,zf=ye.unstable_getCurrentPriorityLevel,Ni=ye.unstable_ImmediatePriority,oa=ye.unstable_UserBlockingPriority,el=ye.unstable_NormalPriority,jf=ye.unstable_LowPriority,ia=ye.unstable_IdlePriority,Nl=null,Ue=null;function Ff(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(Nl,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:Af,Mf=Math.log,Df=Math.LN2;function Af(e){return e>>>=0,e===0?32:31-(Mf(e)/Df|0)|0}var Er=64,Sr=4194304;function Ft(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function nl(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var u=i&~l;u!==0?r=Ft(u):(o&=i,o!==0&&(r=Ft(o)))}else i=t&~l,i!==0?r=Ft(i):o!==0&&(r=Ft(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-ze(n),l=1<<t,r|=e[t],n&=~l;return r}function Lf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-ze(o),u=1<<i,s=l[i];s===-1?(!(u&t)||u&r)&&(l[i]=Lf(u,n)):s<=n&&(e.expiredLanes|=u),o&=~u}}function Mo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ua(){var e=Er;return Er<<=1,!(Er&4194240)&&(Er=64),e}function Ql(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function cr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-ze(n),e[n]=t}function $f(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-ze(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function ki(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-ze(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var F=0;function sa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var aa,Ii,ca,fa,da,Do=!1,wr=[],fn=null,dn=null,vn=null,Jt=new Map,Yt=new Map,on=[],Bf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Su(e,n){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Jt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yt.delete(n.pointerId)}}function Nt(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=dr(n),n!==null&&Ii(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Hf(e,n,t,r,l){switch(n){case"focusin":return fn=Nt(fn,e,n,t,r,l),!0;case"dragenter":return dn=Nt(dn,e,n,t,r,l),!0;case"mouseover":return vn=Nt(vn,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return Jt.set(o,Nt(Jt.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Yt.set(o,Nt(Yt.get(o)||null,e,n,t,r,l)),!0}return!1}function va(e){var n=Pn(e.target);if(n!==null){var t=Bn(n);if(t!==null){if(n=t.tag,n===13){if(n=na(t),n!==null){e.blockedOn=n,da(e.priority,function(){ca(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ao(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);_o=r,t.target.dispatchEvent(r),_o=null}else return n=dr(t),n!==null&&Ii(n),e.blockedOn=t,!1;n.shift()}return!0}function wu(e,n,t){Dr(e)&&t.delete(n)}function Vf(){Do=!1,fn!==null&&Dr(fn)&&(fn=null),dn!==null&&Dr(dn)&&(dn=null),vn!==null&&Dr(vn)&&(vn=null),Jt.forEach(wu),Yt.forEach(wu)}function kt(e,n){e.blockedOn===n&&(e.blockedOn=null,Do||(Do=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Vf)))}function qt(e){function n(l){return kt(l,e)}if(0<wr.length){kt(wr[0],e);for(var t=1;t<wr.length;t++){var r=wr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&kt(fn,e),dn!==null&&kt(dn,e),vn!==null&&kt(vn,e),Jt.forEach(n),Yt.forEach(n),t=0;t<on.length;t++)r=on[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(t=on[0],t.blockedOn===null);)va(t),t.blockedOn===null&&on.shift()}var ot=Ze.ReactCurrentBatchConfig,tl=!0;function Wf(e,n,t,r){var l=F,o=ot.transition;ot.transition=null;try{F=1,Ti(e,n,t,r)}finally{F=l,ot.transition=o}}function Gf(e,n,t,r){var l=F,o=ot.transition;ot.transition=null;try{F=4,Ti(e,n,t,r)}finally{F=l,ot.transition=o}}function Ti(e,n,t,r){if(tl){var l=Ao(e,n,t,r);if(l===null)to(e,n,r,rl,t),Su(e,r);else if(Hf(l,e,n,t,r))r.stopPropagation();else if(Su(e,r),n&4&&-1<Bf.indexOf(e)){for(;l!==null;){var o=dr(l);if(o!==null&&aa(o),o=Ao(e,n,t,r),o===null&&to(e,n,r,rl,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else to(e,n,r,null,t)}}var rl=null;function Ao(e,n,t,r){if(rl=null,e=wi(r),e=Pn(e),e!==null)if(n=Bn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=na(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return rl=e,null}function pa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zf()){case Ni:return 1;case oa:return 4;case el:case jf:return 16;case ia:return 536870912;default:return 16}default:return 16}}var sn=null,Ri=null,Ar=null;function ha(){if(Ar)return Ar;var e,n=Ri,t=n.length,r,l="value"in sn?sn.value:sn.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return Ar=l.slice(e,1<r?1-r:void 0)}function Lr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function Nu(){return!1}function Ee(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Nr:Nu,this.isPropagationStopped=Nu,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),n}var gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ci=Ee(gt),fr=H({},gt,{view:0,detail:0}),Qf=Ee(fr),Kl,Xl,It,kl=H({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==It&&(It&&e.type==="mousemove"?(Kl=e.screenX-It.screenX,Xl=e.screenY-It.screenY):Xl=Kl=0,It=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:Xl}}),ku=Ee(kl),Kf=H({},kl,{dataTransfer:0}),Xf=Ee(Kf),Jf=H({},fr,{relatedTarget:0}),Jl=Ee(Jf),Yf=H({},gt,{animationName:0,elapsedTime:0,pseudoElement:0}),qf=Ee(Yf),Zf=H({},gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bf=Ee(Zf),ed=H({},gt,{data:0}),Iu=Ee(ed),nd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ld(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=rd[e])?!!n[e]:!1}function Pi(){return ld}var od=H({},fr,{key:function(e){if(e.key){var n=nd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Lr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?td[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pi,charCode:function(e){return e.type==="keypress"?Lr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),id=Ee(od),ud=H({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tu=Ee(ud),sd=H({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pi}),ad=Ee(sd),cd=H({},gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),fd=Ee(cd),dd=H({},kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vd=Ee(dd),pd=[9,13,27,32],Oi=Xe&&"CompositionEvent"in window,Ut=null;Xe&&"documentMode"in document&&(Ut=document.documentMode);var hd=Xe&&"TextEvent"in window&&!Ut,ma=Xe&&(!Oi||Ut&&8<Ut&&11>=Ut),Ru=String.fromCharCode(32),Cu=!1;function ga(e,n){switch(e){case"keyup":return pd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ya(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function md(e,n){switch(e){case"compositionend":return ya(n);case"keypress":return n.which!==32?null:(Cu=!0,Ru);case"textInput":return e=n.data,e===Ru&&Cu?null:e;default:return null}}function gd(e,n){if(Qn)return e==="compositionend"||!Oi&&ga(e,n)?(e=ha(),Ar=Ri=sn=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ma&&n.locale!=="ko"?null:n.data;default:return null}}var yd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yd[e.type]:n==="textarea"}function xa(e,n,t,r){Ys(r),n=ll(n,"onChange"),0<n.length&&(t=new Ci("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var $t=null,Zt=null;function xd(e){Oa(e,0)}function Il(e){var n=Jn(e);if(Vs(n))return e}function Ed(e,n){if(e==="change")return n}var Ea=!1;if(Xe){var Yl;if(Xe){var ql="oninput"in document;if(!ql){var Ou=document.createElement("div");Ou.setAttribute("oninput","return;"),ql=typeof Ou.oninput=="function"}Yl=ql}else Yl=!1;Ea=Yl&&(!document.documentMode||9<document.documentMode)}function _u(){$t&&($t.detachEvent("onpropertychange",Sa),Zt=$t=null)}function Sa(e){if(e.propertyName==="value"&&Il(Zt)){var n=[];xa(n,Zt,e,wi(e)),ea(xd,n)}}function Sd(e,n,t){e==="focusin"?(_u(),$t=n,Zt=t,$t.attachEvent("onpropertychange",Sa)):e==="focusout"&&_u()}function wd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Il(Zt)}function Nd(e,n){if(e==="click")return Il(n)}function kd(e,n){if(e==="input"||e==="change")return Il(n)}function Id(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:Id;function bt(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!xo.call(n,l)||!Fe(e[l],n[l]))return!1}return!0}function zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ju(e,n){var t=zu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=zu(t)}}function wa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?wa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Na(){for(var e=window,n=qr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=qr(e.document)}return n}function _i(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Td(e){var n=Na(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&wa(t.ownerDocument.documentElement,t)){if(r!==null&&_i(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ju(t,o);var i=ju(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rd=Xe&&"documentMode"in document&&11>=document.documentMode,Kn=null,Lo=null,Bt=null,Uo=!1;function Fu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Uo||Kn==null||Kn!==qr(r)||(r=Kn,"selectionStart"in r&&_i(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bt&&bt(Bt,r)||(Bt=r,r=ll(Lo,"onSelect"),0<r.length&&(n=new Ci("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Kn)))}function kr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xn={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Zl={},ka={};Xe&&(ka=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Tl(e){if(Zl[e])return Zl[e];if(!Xn[e])return e;var n=Xn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ka)return Zl[e]=n[t];return e}var Ia=Tl("animationend"),Ta=Tl("animationiteration"),Ra=Tl("animationstart"),Ca=Tl("transitionend"),Pa=new Map,Mu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,n){Pa.set(e,n),$n(n,[e])}for(var bl=0;bl<Mu.length;bl++){var eo=Mu[bl],Cd=eo.toLowerCase(),Pd=eo[0].toUpperCase()+eo.slice(1);wn(Cd,"on"+Pd)}wn(Ia,"onAnimationEnd");wn(Ta,"onAnimationIteration");wn(Ra,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(Ca,"onTransitionEnd");at("onMouseEnter",["mouseout","mouseover"]);at("onMouseLeave",["mouseout","mouseover"]);at("onPointerEnter",["pointerout","pointerover"]);at("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Od=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mt));function Du(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Cf(r,n,void 0,e),e.currentTarget=null}function Oa(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var u=r[i],s=u.instance,a=u.currentTarget;if(u=u.listener,s!==o&&l.isPropagationStopped())break e;Du(l,u,a),o=s}else for(i=0;i<r.length;i++){if(u=r[i],s=u.instance,a=u.currentTarget,u=u.listener,s!==o&&l.isPropagationStopped())break e;Du(l,u,a),o=s}}}if(br)throw e=Fo,br=!1,Fo=null,e}function A(e,n){var t=n[Wo];t===void 0&&(t=n[Wo]=new Set);var r=e+"__bubble";t.has(r)||(_a(n,e,2,!1),t.add(r))}function no(e,n,t){var r=0;n&&(r|=4),_a(t,e,r,n)}var Ir="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Ir]){e[Ir]=!0,Ls.forEach(function(t){t!=="selectionchange"&&(Od.has(t)||no(t,!1,e),no(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ir]||(n[Ir]=!0,no("selectionchange",!1,n))}}function _a(e,n,t,r){switch(pa(n)){case 1:var l=Wf;break;case 4:l=Gf;break;default:l=Ti}t=l.bind(null,n,t,e),l=void 0,!jo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function to(e,n,t,r,l){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;u!==null;){if(i=Pn(u),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}u=u.parentNode}}r=r.return}ea(function(){var a=o,p=wi(t),m=[];e:{var v=Pa.get(e);if(v!==void 0){var h=Ci,g=e;switch(e){case"keypress":if(Lr(t)===0)break e;case"keydown":case"keyup":h=id;break;case"focusin":g="focus",h=Jl;break;case"focusout":g="blur",h=Jl;break;case"beforeblur":case"afterblur":h=Jl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Xf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=ad;break;case Ia:case Ta:case Ra:h=qf;break;case Ca:h=fd;break;case"scroll":h=Qf;break;case"wheel":h=vd;break;case"copy":case"cut":case"paste":h=bf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Tu}var y=(n&4)!==0,E=!y&&e==="scroll",f=y?v!==null?v+"Capture":null:v;y=[];for(var c=a,d;c!==null;){d=c;var x=d.stateNode;if(d.tag===5&&x!==null&&(d=x,f!==null&&(x=Xt(c,f),x!=null&&y.push(nr(c,x,d)))),E)break;c=c.return}0<y.length&&(v=new h(v,g,null,t,p),m.push({event:v,listeners:y}))}}if(!(n&7)){e:{if(v=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",v&&t!==_o&&(g=t.relatedTarget||t.fromElement)&&(Pn(g)||g[Je]))break e;if((h||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,h?(g=t.relatedTarget||t.toElement,h=a,g=g?Pn(g):null,g!==null&&(E=Bn(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=a),h!==g)){if(y=ku,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Tu,x="onPointerLeave",f="onPointerEnter",c="pointer"),E=h==null?v:Jn(h),d=g==null?v:Jn(g),v=new y(x,c+"leave",h,t,p),v.target=E,v.relatedTarget=d,x=null,Pn(p)===a&&(y=new y(f,c+"enter",g,t,p),y.target=d,y.relatedTarget=E,x=y),E=x,h&&g)n:{for(y=h,f=g,c=0,d=y;d;d=Hn(d))c++;for(d=0,x=f;x;x=Hn(x))d++;for(;0<c-d;)y=Hn(y),c--;for(;0<d-c;)f=Hn(f),d--;for(;c--;){if(y===f||f!==null&&y===f.alternate)break n;y=Hn(y),f=Hn(f)}y=null}else y=null;h!==null&&Au(m,v,h,y,!1),g!==null&&E!==null&&Au(m,E,g,y,!0)}}e:{if(v=a?Jn(a):window,h=v.nodeName&&v.nodeName.toLowerCase(),h==="select"||h==="input"&&v.type==="file")var w=Ed;else if(Pu(v))if(Ea)w=kd;else{w=wd;var I=Sd}else(h=v.nodeName)&&h.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(w=Nd);if(w&&(w=w(e,a))){xa(m,w,t,p);break e}I&&I(e,v,a),e==="focusout"&&(I=v._wrapperState)&&I.controlled&&v.type==="number"&&To(v,"number",v.value)}switch(I=a?Jn(a):window,e){case"focusin":(Pu(I)||I.contentEditable==="true")&&(Kn=I,Lo=a,Bt=null);break;case"focusout":Bt=Lo=Kn=null;break;case"mousedown":Uo=!0;break;case"contextmenu":case"mouseup":case"dragend":Uo=!1,Fu(m,t,p);break;case"selectionchange":if(Rd)break;case"keydown":case"keyup":Fu(m,t,p)}var k;if(Oi)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Qn?ga(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(ma&&t.locale!=="ko"&&(Qn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Qn&&(k=ha()):(sn=p,Ri="value"in sn?sn.value:sn.textContent,Qn=!0)),I=ll(a,N),0<I.length&&(N=new Iu(N,e,null,t,p),m.push({event:N,listeners:I}),k?N.data=k:(k=ya(t),k!==null&&(N.data=k)))),(k=hd?md(e,t):gd(e,t))&&(a=ll(a,"onBeforeInput"),0<a.length&&(p=new Iu("onBeforeInput","beforeinput",null,t,p),m.push({event:p,listeners:a}),p.data=k))}Oa(m,n)})}function nr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ll(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Xt(e,t),o!=null&&r.unshift(nr(e,o,l)),o=Xt(e,n),o!=null&&r.push(nr(e,o,l))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Au(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var u=t,s=u.alternate,a=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&a!==null&&(u=a,l?(s=Xt(t,o),s!=null&&i.unshift(nr(t,s,u))):l||(s=Xt(t,o),s!=null&&i.push(nr(t,s,u)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var _d=/\r\n?/g,zd=/\u0000|\uFFFD/g;function Lu(e){return(typeof e=="string"?e:""+e).replace(_d,`
`).replace(zd,"")}function Tr(e,n,t){if(n=Lu(n),Lu(e)!==n&&t)throw Error(S(425))}function ol(){}var $o=null,Bo=null;function Ho(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vo=typeof setTimeout=="function"?setTimeout:void 0,jd=typeof clearTimeout=="function"?clearTimeout:void 0,Uu=typeof Promise=="function"?Promise:void 0,Fd=typeof queueMicrotask=="function"?queueMicrotask:typeof Uu<"u"?function(e){return Uu.resolve(null).then(e).catch(Md)}:Vo;function Md(e){setTimeout(function(){throw e})}function ro(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),qt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);qt(n)}function pn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function $u(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var yt=Math.random().toString(36).slice(2),Ae="__reactFiber$"+yt,tr="__reactProps$"+yt,Je="__reactContainer$"+yt,Wo="__reactEvents$"+yt,Dd="__reactListeners$"+yt,Ad="__reactHandles$"+yt;function Pn(e){var n=e[Ae];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Je]||t[Ae]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=$u(e);e!==null;){if(t=e[Ae])return t;e=$u(e)}return n}e=t,t=e.parentNode}return null}function dr(e){return e=e[Ae]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Rl(e){return e[tr]||null}var Go=[],Yn=-1;function Nn(e){return{current:e}}function L(e){0>Yn||(e.current=Go[Yn],Go[Yn]=null,Yn--)}function D(e,n){Yn++,Go[Yn]=e.current,e.current=n}var En={},oe=Nn(En),de=Nn(!1),Mn=En;function ct(e,n){var t=e.type.contextTypes;if(!t)return En;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function ve(e){return e=e.childContextTypes,e!=null}function il(){L(de),L(oe)}function Bu(e,n,t){if(oe.current!==En)throw Error(S(168));D(oe,n),D(de,t)}function za(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(S(108,Sf(e)||"Unknown",l));return H({},t,r)}function ul(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,Mn=oe.current,D(oe,e),D(de,de.current),!0}function Hu(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=za(e,n,Mn),r.__reactInternalMemoizedMergedChildContext=e,L(de),L(oe),D(oe,e)):L(de),D(de,t)}var We=null,Cl=!1,lo=!1;function ja(e){We===null?We=[e]:We.push(e)}function Ld(e){Cl=!0,ja(e)}function kn(){if(!lo&&We!==null){lo=!0;var e=0,n=F;try{var t=We;for(F=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}We=null,Cl=!1}catch(l){throw We!==null&&(We=We.slice(e+1)),la(Ni,kn),l}finally{F=n,lo=!1}}return null}var qn=[],Zn=0,sl=null,al=0,Se=[],we=0,Dn=null,Ge=1,Qe="";function Rn(e,n){qn[Zn++]=al,qn[Zn++]=sl,sl=e,al=n}function Fa(e,n,t){Se[we++]=Ge,Se[we++]=Qe,Se[we++]=Dn,Dn=e;var r=Ge;e=Qe;var l=32-ze(r)-1;r&=~(1<<l),t+=1;var o=32-ze(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Ge=1<<32-ze(n)+l|t<<l|r,Qe=o+e}else Ge=1<<o|t<<l|r,Qe=e}function zi(e){e.return!==null&&(Rn(e,1),Fa(e,1,0))}function ji(e){for(;e===sl;)sl=qn[--Zn],qn[Zn]=null,al=qn[--Zn],qn[Zn]=null;for(;e===Dn;)Dn=Se[--we],Se[we]=null,Qe=Se[--we],Se[we]=null,Ge=Se[--we],Se[we]=null}var ge=null,me=null,U=!1,_e=null;function Ma(e,n){var t=Ne(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Vu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ge=e,me=pn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ge=e,me=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Dn!==null?{id:Ge,overflow:Qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ne(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ge=e,me=null,!0):!1;default:return!1}}function Qo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ko(e){if(U){var n=me;if(n){var t=n;if(!Vu(e,n)){if(Qo(e))throw Error(S(418));n=pn(t.nextSibling);var r=ge;n&&Vu(e,n)?Ma(r,t):(e.flags=e.flags&-4097|2,U=!1,ge=e)}}else{if(Qo(e))throw Error(S(418));e.flags=e.flags&-4097|2,U=!1,ge=e}}}function Wu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function Rr(e){if(e!==ge)return!1;if(!U)return Wu(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ho(e.type,e.memoizedProps)),n&&(n=me)){if(Qo(e))throw Da(),Error(S(418));for(;n;)Ma(e,n),n=pn(n.nextSibling)}if(Wu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){me=pn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}me=null}}else me=ge?pn(e.stateNode.nextSibling):null;return!0}function Da(){for(var e=me;e;)e=pn(e.nextSibling)}function ft(){me=ge=null,U=!1}function Fi(e){_e===null?_e=[e]:_e.push(e)}var Ud=Ze.ReactCurrentBatchConfig;function Pe(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var cl=Nn(null),fl=null,bn=null,Mi=null;function Di(){Mi=bn=fl=null}function Ai(e){var n=cl.current;L(cl),e._currentValue=n}function Xo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function it(e,n){fl=e,Mi=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(fe=!0),e.firstContext=null)}function Ie(e){var n=e._currentValue;if(Mi!==e)if(e={context:e,memoizedValue:n,next:null},bn===null){if(fl===null)throw Error(S(308));bn=e,fl.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return n}var On=null;function Li(e){On===null?On=[e]:On.push(e)}function Aa(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Li(n)):(t.next=l.next,l.next=t),n.interleaved=t,Ye(e,r)}function Ye(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ln=!1;function Ui(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function La(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function hn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Ye(e,t)}return l=r.interleaved,l===null?(n.next=n,Li(r)):(n.next=l.next,l.next=n),r.interleaved=n,Ye(e,t)}function Ur(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ki(e,t)}}function Gu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function dl(e,n,t,r){var l=e.updateQueue;ln=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,a=s.next;s.next=null,i===null?o=a:i.next=a,i=s;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==i&&(u===null?p.firstBaseUpdate=a:u.next=a,p.lastBaseUpdate=s))}if(o!==null){var m=l.baseState;i=0,p=a=s=null,u=o;do{var v=u.lane,h=u.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:h,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var g=e,y=u;switch(v=n,h=t,y.tag){case 1:if(g=y.payload,typeof g=="function"){m=g.call(h,m,v);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,v=typeof g=="function"?g.call(h,m,v):g,v==null)break e;m=H({},m,v);break e;case 2:ln=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,v=l.effects,v===null?l.effects=[u]:v.push(u))}else h={eventTime:h,lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(a=p=h,s=m):p=p.next=h,i|=v;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;v=u,u=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(1);if(p===null&&(s=m),l.baseState=s,l.firstBaseUpdate=a,l.lastBaseUpdate=p,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);Ln|=i,e.lanes=i,e.memoizedState=m}}function Qu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var Ua=new As.Component().refs;function Jo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:H({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Pl={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ue(),l=gn(e),o=Ke(r,l);o.payload=n,t!=null&&(o.callback=t),n=hn(e,o,l),n!==null&&(je(n,e,l,r),Ur(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ue(),l=gn(e),o=Ke(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=hn(e,o,l),n!==null&&(je(n,e,l,r),Ur(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ue(),r=gn(e),l=Ke(t,r);l.tag=2,n!=null&&(l.callback=n),n=hn(e,l,r),n!==null&&(je(n,e,r,t),Ur(n,e,r))}};function Ku(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!bt(t,r)||!bt(l,o):!0}function $a(e,n,t){var r=!1,l=En,o=n.contextType;return typeof o=="object"&&o!==null?o=Ie(o):(l=ve(n)?Mn:oe.current,r=n.contextTypes,o=(r=r!=null)?ct(e,l):En),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Pl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function Xu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Pl.enqueueReplaceState(n,n.state,null)}function Yo(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs=Ua,Ui(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=Ie(o):(o=ve(n)?Mn:oe.current,l.context=ct(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Jo(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&Pl.enqueueReplaceState(l,l.state,null),dl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Tt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var u=l.refs;u===Ua&&(u=l.refs={}),i===null?delete u[o]:u[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function Cr(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ju(e){var n=e._init;return n(e._payload)}function Ba(e){function n(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=yn(f,c),f.index=0,f.sibling=null,f}function o(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,c,d,x){return c===null||c.tag!==6?(c=fo(d,f.mode,x),c.return=f,c):(c=l(c,d),c.return=f,c)}function s(f,c,d,x){var w=d.type;return w===Gn?p(f,c,d.props.children,x,d.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rn&&Ju(w)===c.type)?(x=l(c,d.props),x.ref=Tt(f,c,d),x.return=f,x):(x=Gr(d.type,d.key,d.props,null,f.mode,x),x.ref=Tt(f,c,d),x.return=f,x)}function a(f,c,d,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=vo(d,f.mode,x),c.return=f,c):(c=l(c,d.children||[]),c.return=f,c)}function p(f,c,d,x,w){return c===null||c.tag!==7?(c=jn(d,f.mode,x,w),c.return=f,c):(c=l(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=fo(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gr:return d=Gr(c.type,c.key,c.props,null,f.mode,d),d.ref=Tt(f,null,c),d.return=f,d;case Wn:return c=vo(c,f.mode,d),c.return=f,c;case rn:var x=c._init;return m(f,x(c._payload),d)}if(jt(c)||St(c))return c=jn(c,f.mode,d,null),c.return=f,c;Cr(f,c)}return null}function v(f,c,d,x){var w=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return w!==null?null:u(f,c,""+d,x);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case gr:return d.key===w?s(f,c,d,x):null;case Wn:return d.key===w?a(f,c,d,x):null;case rn:return w=d._init,v(f,c,w(d._payload),x)}if(jt(d)||St(d))return w!==null?null:p(f,c,d,x,null);Cr(f,d)}return null}function h(f,c,d,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(d)||null,u(c,f,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case gr:return f=f.get(x.key===null?d:x.key)||null,s(c,f,x,w);case Wn:return f=f.get(x.key===null?d:x.key)||null,a(c,f,x,w);case rn:var I=x._init;return h(f,c,d,I(x._payload),w)}if(jt(x)||St(x))return f=f.get(d)||null,p(c,f,x,w,null);Cr(c,x)}return null}function g(f,c,d,x){for(var w=null,I=null,k=c,N=c=0,M=null;k!==null&&N<d.length;N++){k.index>N?(M=k,k=null):M=k.sibling;var _=v(f,k,d[N],x);if(_===null){k===null&&(k=M);break}e&&k&&_.alternate===null&&n(f,k),c=o(_,c,N),I===null?w=_:I.sibling=_,I=_,k=M}if(N===d.length)return t(f,k),U&&Rn(f,N),w;if(k===null){for(;N<d.length;N++)k=m(f,d[N],x),k!==null&&(c=o(k,c,N),I===null?w=k:I.sibling=k,I=k);return U&&Rn(f,N),w}for(k=r(f,k);N<d.length;N++)M=h(k,f,N,d[N],x),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?N:M.key),c=o(M,c,N),I===null?w=M:I.sibling=M,I=M);return e&&k.forEach(function(Re){return n(f,Re)}),U&&Rn(f,N),w}function y(f,c,d,x){var w=St(d);if(typeof w!="function")throw Error(S(150));if(d=w.call(d),d==null)throw Error(S(151));for(var I=w=null,k=c,N=c=0,M=null,_=d.next();k!==null&&!_.done;N++,_=d.next()){k.index>N?(M=k,k=null):M=k.sibling;var Re=v(f,k,_.value,x);if(Re===null){k===null&&(k=M);break}e&&k&&Re.alternate===null&&n(f,k),c=o(Re,c,N),I===null?w=Re:I.sibling=Re,I=Re,k=M}if(_.done)return t(f,k),U&&Rn(f,N),w;if(k===null){for(;!_.done;N++,_=d.next())_=m(f,_.value,x),_!==null&&(c=o(_,c,N),I===null?w=_:I.sibling=_,I=_);return U&&Rn(f,N),w}for(k=r(f,k);!_.done;N++,_=d.next())_=h(k,f,N,_.value,x),_!==null&&(e&&_.alternate!==null&&k.delete(_.key===null?N:_.key),c=o(_,c,N),I===null?w=_:I.sibling=_,I=_);return e&&k.forEach(function(xt){return n(f,xt)}),U&&Rn(f,N),w}function E(f,c,d,x){if(typeof d=="object"&&d!==null&&d.type===Gn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case gr:e:{for(var w=d.key,I=c;I!==null;){if(I.key===w){if(w=d.type,w===Gn){if(I.tag===7){t(f,I.sibling),c=l(I,d.props.children),c.return=f,f=c;break e}}else if(I.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rn&&Ju(w)===I.type){t(f,I.sibling),c=l(I,d.props),c.ref=Tt(f,I,d),c.return=f,f=c;break e}t(f,I);break}else n(f,I);I=I.sibling}d.type===Gn?(c=jn(d.props.children,f.mode,x,d.key),c.return=f,f=c):(x=Gr(d.type,d.key,d.props,null,f.mode,x),x.ref=Tt(f,c,d),x.return=f,f=x)}return i(f);case Wn:e:{for(I=d.key;c!==null;){if(c.key===I)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){t(f,c.sibling),c=l(c,d.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=vo(d,f.mode,x),c.return=f,f=c}return i(f);case rn:return I=d._init,E(f,c,I(d._payload),x)}if(jt(d))return g(f,c,d,x);if(St(d))return y(f,c,d,x);Cr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(t(f,c.sibling),c=l(c,d),c.return=f,f=c):(t(f,c),c=fo(d,f.mode,x),c.return=f,f=c),i(f)):t(f,c)}return E}var dt=Ba(!0),Ha=Ba(!1),vr={},$e=Nn(vr),rr=Nn(vr),lr=Nn(vr);function _n(e){if(e===vr)throw Error(S(174));return e}function $i(e,n){switch(D(lr,n),D(rr,e),D($e,vr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Co(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Co(n,e)}L($e),D($e,n)}function vt(){L($e),L(rr),L(lr)}function Va(e){_n(lr.current);var n=_n($e.current),t=Co(n,e.type);n!==t&&(D(rr,e),D($e,t))}function Bi(e){rr.current===e&&(L($e),L(rr))}var $=Nn(0);function vl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oo=[];function Hi(){for(var e=0;e<oo.length;e++)oo[e]._workInProgressVersionPrimary=null;oo.length=0}var $r=Ze.ReactCurrentDispatcher,io=Ze.ReactCurrentBatchConfig,An=0,B=null,K=null,q=null,pl=!1,Ht=!1,or=0,$d=0;function te(){throw Error(S(321))}function Vi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function Wi(e,n,t,r,l,o){if(An=o,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,$r.current=e===null||e.memoizedState===null?Wd:Gd,e=t(r,l),Ht){o=0;do{if(Ht=!1,or=0,25<=o)throw Error(S(301));o+=1,q=K=null,n.updateQueue=null,$r.current=Qd,e=t(r,l)}while(Ht)}if($r.current=hl,n=K!==null&&K.next!==null,An=0,q=K=B=null,pl=!1,n)throw Error(S(300));return e}function Gi(){var e=or!==0;return or=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?B.memoizedState=q=e:q=q.next=e,q}function Te(){if(K===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=q===null?B.memoizedState:q.next;if(n!==null)q=n,K=e;else{if(e===null)throw Error(S(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},q===null?B.memoizedState=q=e:q=q.next=e}return q}function ir(e,n){return typeof n=="function"?n(e):n}function uo(e){var n=Te(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=K,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=i=null,s=null,a=o;do{var p=a.lane;if((An&p)===p)s!==null&&(s=s.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var m={lane:p,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};s===null?(u=s=m,i=r):s=s.next=m,B.lanes|=p,Ln|=p}a=a.next}while(a!==null&&a!==o);s===null?i=r:s.next=u,Fe(r,n.memoizedState)||(fe=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,B.lanes|=o,Ln|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function so(e){var n=Te(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Fe(o,n.memoizedState)||(fe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Wa(){}function Ga(e,n){var t=B,r=Te(),l=n(),o=!Fe(r.memoizedState,l);if(o&&(r.memoizedState=l,fe=!0),r=r.queue,Qi(Xa.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||q!==null&&q.memoizedState.tag&1){if(t.flags|=2048,ur(9,Ka.bind(null,t,r,l,n),void 0,null),Z===null)throw Error(S(349));An&30||Qa(t,n,l)}return l}function Qa(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ka(e,n,t,r){n.value=t,n.getSnapshot=r,Ja(n)&&Ya(e)}function Xa(e,n,t){return t(function(){Ja(n)&&Ya(e)})}function Ja(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function Ya(e){var n=Ye(e,1);n!==null&&je(n,e,1,-1)}function Yu(e){var n=De();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},n.queue=e,e=e.dispatch=Vd.bind(null,B,e),[n.memoizedState,e]}function ur(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function qa(){return Te().memoizedState}function Br(e,n,t,r){var l=De();B.flags|=e,l.memoizedState=ur(1|n,t,void 0,r===void 0?null:r)}function Ol(e,n,t,r){var l=Te();r=r===void 0?null:r;var o=void 0;if(K!==null){var i=K.memoizedState;if(o=i.destroy,r!==null&&Vi(r,i.deps)){l.memoizedState=ur(n,t,o,r);return}}B.flags|=e,l.memoizedState=ur(1|n,t,o,r)}function qu(e,n){return Br(8390656,8,e,n)}function Qi(e,n){return Ol(2048,8,e,n)}function Za(e,n){return Ol(4,2,e,n)}function ba(e,n){return Ol(4,4,e,n)}function ec(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function nc(e,n,t){return t=t!=null?t.concat([e]):null,Ol(4,4,ec.bind(null,n,e),t)}function Ki(){}function tc(e,n){var t=Te();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Vi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function rc(e,n){var t=Te();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Vi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function lc(e,n,t){return An&21?(Fe(t,n)||(t=ua(),B.lanes|=t,Ln|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=t)}function Bd(e,n){var t=F;F=t!==0&&4>t?t:4,e(!0);var r=io.transition;io.transition={};try{e(!1),n()}finally{F=t,io.transition=r}}function oc(){return Te().memoizedState}function Hd(e,n,t){var r=gn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ic(e))uc(n,t);else if(t=Aa(e,n,t,r),t!==null){var l=ue();je(t,e,r,l),sc(t,n,r)}}function Vd(e,n,t){var r=gn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ic(e))uc(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,u=o(i,t);if(l.hasEagerState=!0,l.eagerState=u,Fe(u,i)){var s=n.interleaved;s===null?(l.next=l,Li(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}t=Aa(e,n,l,r),t!==null&&(l=ue(),je(t,e,r,l),sc(t,n,r))}}function ic(e){var n=e.alternate;return e===B||n!==null&&n===B}function uc(e,n){Ht=pl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function sc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ki(e,t)}}var hl={readContext:Ie,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},Wd={readContext:Ie,useCallback:function(e,n){return De().memoizedState=[e,n===void 0?null:n],e},useContext:Ie,useEffect:qu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Br(4194308,4,ec.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Br(4194308,4,e,n)},useInsertionEffect:function(e,n){return Br(4,2,e,n)},useMemo:function(e,n){var t=De();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=De();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Hd.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var n=De();return e={current:e},n.memoizedState=e},useState:Yu,useDebugValue:Ki,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Yu(!1),n=e[0];return e=Bd.bind(null,e[1]),De().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=B,l=De();if(U){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),Z===null)throw Error(S(349));An&30||Qa(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,qu(Xa.bind(null,r,o,e),[e]),r.flags|=2048,ur(9,Ka.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=De(),n=Z.identifierPrefix;if(U){var t=Qe,r=Ge;t=(r&~(1<<32-ze(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=or++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=$d++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Gd={readContext:Ie,useCallback:tc,useContext:Ie,useEffect:Qi,useImperativeHandle:nc,useInsertionEffect:Za,useLayoutEffect:ba,useMemo:rc,useReducer:uo,useRef:qa,useState:function(){return uo(ir)},useDebugValue:Ki,useDeferredValue:function(e){var n=Te();return lc(n,K.memoizedState,e)},useTransition:function(){var e=uo(ir)[0],n=Te().memoizedState;return[e,n]},useMutableSource:Wa,useSyncExternalStore:Ga,useId:oc,unstable_isNewReconciler:!1},Qd={readContext:Ie,useCallback:tc,useContext:Ie,useEffect:Qi,useImperativeHandle:nc,useInsertionEffect:Za,useLayoutEffect:ba,useMemo:rc,useReducer:so,useRef:qa,useState:function(){return so(ir)},useDebugValue:Ki,useDeferredValue:function(e){var n=Te();return K===null?n.memoizedState=e:lc(n,K.memoizedState,e)},useTransition:function(){var e=so(ir)[0],n=Te().memoizedState;return[e,n]},useMutableSource:Wa,useSyncExternalStore:Ga,useId:oc,unstable_isNewReconciler:!1};function pt(e,n){try{var t="",r=n;do t+=Ef(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function ao(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function qo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Kd=typeof WeakMap=="function"?WeakMap:Map;function ac(e,n,t){t=Ke(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){gl||(gl=!0,ui=r),qo(e,n)},t}function cc(e,n,t){t=Ke(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){qo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){qo(e,n),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Zu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Kd;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=uv.bind(null,e,n,t),n.then(e,e))}function bu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function es(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ke(-1,1),n.tag=2,hn(t,n,1))),t.lanes|=1),e)}var Xd=Ze.ReactCurrentOwner,fe=!1;function ie(e,n,t,r){n.child=e===null?Ha(n,null,t,r):dt(n,e.child,t,r)}function ns(e,n,t,r,l){t=t.render;var o=n.ref;return it(n,l),r=Wi(e,n,t,r,o,l),t=Gi(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,qe(e,n,l)):(U&&t&&zi(n),n.flags|=1,ie(e,n,r,l),n.child)}function ts(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!nu(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,fc(e,n,o,r,l)):(e=Gr(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:bt,t(i,r)&&e.ref===n.ref)return qe(e,n,l)}return n.flags|=1,e=yn(o,r),e.ref=n.ref,e.return=n,n.child=e}function fc(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(bt(o,r)&&e.ref===n.ref)if(fe=!1,n.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return n.lanes=e.lanes,qe(e,n,l)}return Zo(e,n,t,r,l)}function dc(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(nt,he),he|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,D(nt,he),he|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,D(nt,he),he|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,D(nt,he),he|=r;return ie(e,n,l,t),n.child}function vc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Zo(e,n,t,r,l){var o=ve(t)?Mn:oe.current;return o=ct(n,o),it(n,l),t=Wi(e,n,t,r,o,l),r=Gi(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,qe(e,n,l)):(U&&r&&zi(n),n.flags|=1,ie(e,n,t,l),n.child)}function rs(e,n,t,r,l){if(ve(t)){var o=!0;ul(n)}else o=!1;if(it(n,l),n.stateNode===null)Hr(e,n),$a(n,t,r),Yo(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,u=n.memoizedProps;i.props=u;var s=i.context,a=t.contextType;typeof a=="object"&&a!==null?a=Ie(a):(a=ve(t)?Mn:oe.current,a=ct(n,a));var p=t.getDerivedStateFromProps,m=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||s!==a)&&Xu(n,i,r,a),ln=!1;var v=n.memoizedState;i.state=v,dl(n,r,i,l),s=n.memoizedState,u!==r||v!==s||de.current||ln?(typeof p=="function"&&(Jo(n,t,p,r),s=n.memoizedState),(u=ln||Ku(n,t,u,r,v,s,a))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),i.props=r,i.state=s,i.context=a,r=u):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,La(e,n),u=n.memoizedProps,a=n.type===n.elementType?u:Pe(n.type,u),i.props=a,m=n.pendingProps,v=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ie(s):(s=ve(t)?Mn:oe.current,s=ct(n,s));var h=t.getDerivedStateFromProps;(p=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==m||v!==s)&&Xu(n,i,r,s),ln=!1,v=n.memoizedState,i.state=v,dl(n,r,i,l);var g=n.memoizedState;u!==m||v!==g||de.current||ln?(typeof h=="function"&&(Jo(n,t,h,r),g=n.memoizedState),(a=ln||Ku(n,t,a,r,v,g,s)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,g,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,g,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=g),i.props=r,i.state=g,i.context=s,r=a):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),r=!1)}return bo(e,n,t,r,o,l)}function bo(e,n,t,r,l,o){vc(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&Hu(n,t,!1),qe(e,n,o);r=n.stateNode,Xd.current=n;var u=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=dt(n,e.child,null,o),n.child=dt(n,null,u,o)):ie(e,n,u,o),n.memoizedState=r.state,l&&Hu(n,t,!0),n.child}function pc(e){var n=e.stateNode;n.pendingContext?Bu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Bu(e,n.context,!1),$i(e,n.containerInfo)}function ls(e,n,t,r,l){return ft(),Fi(l),n.flags|=256,ie(e,n,t,r),n.child}var ei={dehydrated:null,treeContext:null,retryLane:0};function ni(e){return{baseLanes:e,cachePool:null,transitions:null}}function hc(e,n,t){var r=n.pendingProps,l=$.current,o=!1,i=(n.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D($,l&1),e===null)return Ko(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=jl(i,r,0,null),e=jn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=ni(t),n.memoizedState=ei,e):Xi(n,i));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return Jd(e,n,i,r,u,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=yn(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=yn(u,o):(o=jn(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?ni(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=ei,r}return o=e.child,e=o.sibling,r=yn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Xi(e,n){return n=jl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Pr(e,n,t,r){return r!==null&&Fi(r),dt(n,e.child,null,t),e=Xi(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Jd(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=ao(Error(S(422))),Pr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=jl({mode:"visible",children:r.children},l,0,null),o=jn(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&dt(n,e.child,null,i),n.child.memoizedState=ni(i),n.memoizedState=ei,o);if(!(n.mode&1))return Pr(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(S(419)),r=ao(o,r,void 0),Pr(e,n,i,r)}if(u=(i&e.childLanes)!==0,fe||u){if(r=Z,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ye(e,l),je(r,e,l,-1))}return eu(),r=ao(Error(S(421))),Pr(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=sv.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,me=pn(l.nextSibling),ge=n,U=!0,_e=null,e!==null&&(Se[we++]=Ge,Se[we++]=Qe,Se[we++]=Dn,Ge=e.id,Qe=e.overflow,Dn=n),n=Xi(n,r.children),n.flags|=4096,n)}function os(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Xo(e.return,n,t)}function co(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function mc(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(ie(e,n,r.children,t),r=$.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&os(e,t,n);else if(e.tag===19)os(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D($,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&vl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),co(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&vl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}co(n,!0,t,null,o);break;case"together":co(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Hr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function qe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ln|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=yn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=yn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Yd(e,n,t){switch(n.tag){case 3:pc(n),ft();break;case 5:Va(n);break;case 1:ve(n.type)&&ul(n);break;case 4:$i(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;D(cl,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(D($,$.current&1),n.flags|=128,null):t&n.child.childLanes?hc(e,n,t):(D($,$.current&1),e=qe(e,n,t),e!==null?e.sibling:null);D($,$.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return mc(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D($,$.current),r)break;return null;case 22:case 23:return n.lanes=0,dc(e,n,t)}return qe(e,n,t)}var gc,ti,yc,xc;gc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ti=function(){};yc=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,_n($e.current);var o=null;switch(t){case"input":l=ko(e,l),r=ko(e,r),o=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":l=Ro(e,l),r=Ro(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ol)}Po(t,r);var i;t=null;for(a in l)if(!r.hasOwnProperty(a)&&l.hasOwnProperty(a)&&l[a]!=null)if(a==="style"){var u=l[a];for(i in u)u.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Qt.hasOwnProperty(a)?o||(o=[]):(o=o||[]).push(a,null));for(a in r){var s=r[a];if(u=l!=null?l[a]:void 0,r.hasOwnProperty(a)&&s!==u&&(s!=null||u!=null))if(a==="style")if(u){for(i in u)!u.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&u[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(o||(o=[]),o.push(a,t)),t=s;else a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(a,s)):a==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(a,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(Qt.hasOwnProperty(a)?(s!=null&&a==="onScroll"&&A("scroll",e),o||u===s||(o=[])):(o=o||[]).push(a,s))}t&&(o=o||[]).push("style",t);var a=o;(n.updateQueue=a)&&(n.flags|=4)}};xc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Rt(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function qd(e,n,t){var r=n.pendingProps;switch(ji(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(n),null;case 1:return ve(n.type)&&il(),re(n),null;case 3:return r=n.stateNode,vt(),L(de),L(oe),Hi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,_e!==null&&(ci(_e),_e=null))),ti(e,n),re(n),null;case 5:Bi(n);var l=_n(lr.current);if(t=n.type,e!==null&&n.stateNode!=null)yc(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return re(n),null}if(e=_n($e.current),Rr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Ae]=n,r[tr]=o,e=(n.mode&1)!==0,t){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(l=0;l<Mt.length;l++)A(Mt[l],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":pu(r,o),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},A("invalid",r);break;case"textarea":mu(r,o),A("invalid",r)}Po(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Tr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Tr(r.textContent,u,e),l=["children",""+u]):Qt.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&A("scroll",r)}switch(t){case"input":yr(r),hu(r,o,!0);break;case"textarea":yr(r),gu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ol)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Ae]=n,e[tr]=r,gc(e,n,!1,!1),n.stateNode=e;e:{switch(i=Oo(t,r),t){case"dialog":A("cancel",e),A("close",e),l=r;break;case"iframe":case"object":case"embed":A("load",e),l=r;break;case"video":case"audio":for(l=0;l<Mt.length;l++)A(Mt[l],e);l=r;break;case"source":A("error",e),l=r;break;case"img":case"image":case"link":A("error",e),A("load",e),l=r;break;case"details":A("toggle",e),l=r;break;case"input":pu(e,r),l=ko(e,r),A("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),A("invalid",e);break;case"textarea":mu(e,r),l=Ro(e,r),A("invalid",e);break;default:l=r}Po(t,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?Js(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ks(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Kt(e,s):typeof s=="number"&&Kt(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Qt.hasOwnProperty(o)?s!=null&&o==="onScroll"&&A("scroll",e):s!=null&&yi(e,o,s,i))}switch(t){case"input":yr(e),hu(e,r,!1);break;case"textarea":yr(e),gu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tt(e,!!r.multiple,o,!1):r.defaultValue!=null&&tt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ol)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return re(n),null;case 6:if(e&&n.stateNode!=null)xc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=_n(lr.current),_n($e.current),Rr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ae]=n,(o=r.nodeValue!==t)&&(e=ge,e!==null))switch(e.tag){case 3:Tr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ae]=n,n.stateNode=r}return re(n),null;case 13:if(L($),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&me!==null&&n.mode&1&&!(n.flags&128))Da(),ft(),n.flags|=98560,o=!1;else if(o=Rr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Ae]=n}else ft(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;re(n),o=!1}else _e!==null&&(ci(_e),_e=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||$.current&1?J===0&&(J=3):eu())),n.updateQueue!==null&&(n.flags|=4),re(n),null);case 4:return vt(),ti(e,n),e===null&&er(n.stateNode.containerInfo),re(n),null;case 10:return Ai(n.type._context),re(n),null;case 17:return ve(n.type)&&il(),re(n),null;case 19:if(L($),o=n.memoizedState,o===null)return re(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)Rt(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=vl(e),i!==null){for(n.flags|=128,Rt(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return D($,$.current&1|2),n.child}e=e.sibling}o.tail!==null&&G()>ht&&(n.flags|=128,r=!0,Rt(o,!1),n.lanes=4194304)}else{if(!r)if(e=vl(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Rt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!U)return re(n),null}else 2*G()-o.renderingStartTime>ht&&t!==1073741824&&(n.flags|=128,r=!0,Rt(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=G(),n.sibling=null,t=$.current,D($,r?t&1|2:t&1),n):(re(n),null);case 22:case 23:return bi(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?he&1073741824&&(re(n),n.subtreeFlags&6&&(n.flags|=8192)):re(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function Zd(e,n){switch(ji(n),n.tag){case 1:return ve(n.type)&&il(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return vt(),L(de),L(oe),Hi(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Bi(n),null;case 13:if(L($),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));ft()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return L($),null;case 4:return vt(),null;case 10:return Ai(n.type._context),null;case 22:case 23:return bi(),null;case 24:return null;default:return null}}var Or=!1,le=!1,bd=typeof WeakSet=="function"?WeakSet:Set,T=null;function et(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function ri(e,n,t){try{t()}catch(r){V(e,n,r)}}var is=!1;function ev(e,n){if($o=tl,e=Na(),_i(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,u=-1,s=-1,a=0,p=0,m=e,v=null;n:for(;;){for(var h;m!==t||l!==0&&m.nodeType!==3||(u=i+l),m!==o||r!==0&&m.nodeType!==3||(s=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(h=m.firstChild)!==null;)v=m,m=h;for(;;){if(m===e)break n;if(v===t&&++a===l&&(u=i),v===o&&++p===r&&(s=i),(h=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=h}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Bo={focusedElem:e,selectionRange:t},tl=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var g=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,E=g.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?y:Pe(n.type,y),E);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){V(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return g=is,is=!1,g}function Vt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&ri(n,t,o)}l=l.next}while(l!==r)}}function _l(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function li(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ec(e){var n=e.alternate;n!==null&&(e.alternate=null,Ec(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ae],delete n[tr],delete n[Wo],delete n[Dd],delete n[Ad])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sc(e){return e.tag===5||e.tag===3||e.tag===4}function us(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ol));else if(r!==4&&(e=e.child,e!==null))for(oi(e,n,t),e=e.sibling;e!==null;)oi(e,n,t),e=e.sibling}function ii(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ii(e,n,t),e=e.sibling;e!==null;)ii(e,n,t),e=e.sibling}var b=null,Oe=!1;function be(e,n,t){for(t=t.child;t!==null;)wc(e,n,t),t=t.sibling}function wc(e,n,t){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(Nl,t)}catch{}switch(t.tag){case 5:le||et(t,n);case 6:var r=b,l=Oe;b=null,be(e,n,t),b=r,Oe=l,b!==null&&(Oe?(e=b,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):b.removeChild(t.stateNode));break;case 18:b!==null&&(Oe?(e=b,t=t.stateNode,e.nodeType===8?ro(e.parentNode,t):e.nodeType===1&&ro(e,t),qt(e)):ro(b,t.stateNode));break;case 4:r=b,l=Oe,b=t.stateNode.containerInfo,Oe=!0,be(e,n,t),b=r,Oe=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&ri(t,n,i),l=l.next}while(l!==r)}be(e,n,t);break;case 1:if(!le&&(et(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){V(t,n,u)}be(e,n,t);break;case 21:be(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,be(e,n,t),le=r):be(e,n,t);break;default:be(e,n,t)}}function ss(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new bd),n.forEach(function(r){var l=av.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Ce(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,u=i;e:for(;u!==null;){switch(u.tag){case 5:b=u.stateNode,Oe=!1;break e;case 3:b=u.stateNode.containerInfo,Oe=!0;break e;case 4:b=u.stateNode.containerInfo,Oe=!0;break e}u=u.return}if(b===null)throw Error(S(160));wc(o,i,l),b=null,Oe=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(a){V(l,n,a)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Nc(n,e),n=n.sibling}function Nc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ce(n,e),Me(e),r&4){try{Vt(3,e,e.return),_l(3,e)}catch(y){V(e,e.return,y)}try{Vt(5,e,e.return)}catch(y){V(e,e.return,y)}}break;case 1:Ce(n,e),Me(e),r&512&&t!==null&&et(t,t.return);break;case 5:if(Ce(n,e),Me(e),r&512&&t!==null&&et(t,t.return),e.flags&32){var l=e.stateNode;try{Kt(l,"")}catch(y){V(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Ws(l,o),Oo(u,i);var a=Oo(u,o);for(i=0;i<s.length;i+=2){var p=s[i],m=s[i+1];p==="style"?Js(l,m):p==="dangerouslySetInnerHTML"?Ks(l,m):p==="children"?Kt(l,m):yi(l,p,m,a)}switch(u){case"input":Io(l,o);break;case"textarea":Gs(l,o);break;case"select":var v=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?tt(l,!!o.multiple,h,!1):v!==!!o.multiple&&(o.defaultValue!=null?tt(l,!!o.multiple,o.defaultValue,!0):tt(l,!!o.multiple,o.multiple?[]:"",!1))}l[tr]=o}catch(y){V(e,e.return,y)}}break;case 6:if(Ce(n,e),Me(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(y){V(e,e.return,y)}}break;case 3:if(Ce(n,e),Me(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{qt(n.containerInfo)}catch(y){V(e,e.return,y)}break;case 4:Ce(n,e),Me(e);break;case 13:Ce(n,e),Me(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(qi=G())),r&4&&ss(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(le=(a=le)||p,Ce(n,e),le=a):Ce(n,e),Me(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!p&&e.mode&1)for(T=e,p=e.child;p!==null;){for(m=T=p;T!==null;){switch(v=T,h=v.child,v.tag){case 0:case 11:case 14:case 15:Vt(4,v,v.return);break;case 1:et(v,v.return);var g=v.stateNode;if(typeof g.componentWillUnmount=="function"){r=v,t=v.return;try{n=r,g.props=n.memoizedProps,g.state=n.memoizedState,g.componentWillUnmount()}catch(y){V(r,t,y)}}break;case 5:et(v,v.return);break;case 22:if(v.memoizedState!==null){cs(m);continue}}h!==null?(h.return=v,T=h):cs(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{l=m.stateNode,a?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=m.stateNode,s=m.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=Xs("display",i))}catch(y){V(e,e.return,y)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=a?"":m.memoizedProps}catch(y){V(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ce(n,e),Me(e),r&4&&ss(e);break;case 21:break;default:Ce(n,e),Me(e)}}function Me(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Sc(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Kt(l,""),r.flags&=-33);var o=us(e);ii(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,u=us(e);oi(e,u,i);break;default:throw Error(S(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function nv(e,n,t){T=e,kc(e)}function kc(e,n,t){for(var r=(e.mode&1)!==0;T!==null;){var l=T,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Or;if(!i){var u=l.alternate,s=u!==null&&u.memoizedState!==null||le;u=Or;var a=le;if(Or=i,(le=s)&&!a)for(T=l;T!==null;)i=T,s=i.child,i.tag===22&&i.memoizedState!==null?fs(l):s!==null?(s.return=i,T=s):fs(l);for(;o!==null;)T=o,kc(o),o=o.sibling;T=l,Or=u,le=a}as(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,T=o):as(e)}}function as(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||_l(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Pe(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Qu(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Qu(n,i,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var a=n.alternate;if(a!==null){var p=a.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&qt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}le||n.flags&512&&li(n)}catch(v){V(n,n.return,v)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function cs(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function fs(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{_l(4,n)}catch(s){V(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){V(n,l,s)}}var o=n.return;try{li(n)}catch(s){V(n,o,s)}break;case 5:var i=n.return;try{li(n)}catch(s){V(n,i,s)}}}catch(s){V(n,n.return,s)}if(n===e){T=null;break}var u=n.sibling;if(u!==null){u.return=n.return,T=u;break}T=n.return}}var tv=Math.ceil,ml=Ze.ReactCurrentDispatcher,Ji=Ze.ReactCurrentOwner,ke=Ze.ReactCurrentBatchConfig,j=0,Z=null,Q=null,ee=0,he=0,nt=Nn(0),J=0,sr=null,Ln=0,zl=0,Yi=0,Wt=null,ce=null,qi=0,ht=1/0,Ve=null,gl=!1,ui=null,mn=null,_r=!1,an=null,yl=0,Gt=0,si=null,Vr=-1,Wr=0;function ue(){return j&6?G():Vr!==-1?Vr:Vr=G()}function gn(e){return e.mode&1?j&2&&ee!==0?ee&-ee:Ud.transition!==null?(Wr===0&&(Wr=ua()),Wr):(e=F,e!==0||(e=window.event,e=e===void 0?16:pa(e.type)),e):1}function je(e,n,t,r){if(50<Gt)throw Gt=0,si=null,Error(S(185));cr(e,t,r),(!(j&2)||e!==Z)&&(e===Z&&(!(j&2)&&(zl|=t),J===4&&un(e,ee)),pe(e,r),t===1&&j===0&&!(n.mode&1)&&(ht=G()+500,Cl&&kn()))}function pe(e,n){var t=e.callbackNode;Uf(e,n);var r=nl(e,e===Z?ee:0);if(r===0)t!==null&&Eu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Eu(t),n===1)e.tag===0?Ld(ds.bind(null,e)):ja(ds.bind(null,e)),Fd(function(){!(j&6)&&kn()}),t=null;else{switch(sa(r)){case 1:t=Ni;break;case 4:t=oa;break;case 16:t=el;break;case 536870912:t=ia;break;default:t=el}t=zc(t,Ic.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ic(e,n){if(Vr=-1,Wr=0,j&6)throw Error(S(327));var t=e.callbackNode;if(ut()&&e.callbackNode!==t)return null;var r=nl(e,e===Z?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=xl(e,r);else{n=r;var l=j;j|=2;var o=Rc();(Z!==e||ee!==n)&&(Ve=null,ht=G()+500,zn(e,n));do try{ov();break}catch(u){Tc(e,u)}while(1);Di(),ml.current=o,j=l,Q!==null?n=0:(Z=null,ee=0,n=J)}if(n!==0){if(n===2&&(l=Mo(e),l!==0&&(r=l,n=ai(e,l))),n===1)throw t=sr,zn(e,0),un(e,r),pe(e,G()),t;if(n===6)un(e,r);else{if(l=e.current.alternate,!(r&30)&&!rv(l)&&(n=xl(e,r),n===2&&(o=Mo(e),o!==0&&(r=o,n=ai(e,o))),n===1))throw t=sr,zn(e,0),un(e,r),pe(e,G()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:Cn(e,ce,Ve);break;case 3:if(un(e,r),(r&130023424)===r&&(n=qi+500-G(),10<n)){if(nl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Vo(Cn.bind(null,e,ce,Ve),n);break}Cn(e,ce,Ve);break;case 4:if(un(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-ze(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tv(r/1960))-r,10<r){e.timeoutHandle=Vo(Cn.bind(null,e,ce,Ve),r);break}Cn(e,ce,Ve);break;case 5:Cn(e,ce,Ve);break;default:throw Error(S(329))}}}return pe(e,G()),e.callbackNode===t?Ic.bind(null,e):null}function ai(e,n){var t=Wt;return e.current.memoizedState.isDehydrated&&(zn(e,n).flags|=256),e=xl(e,n),e!==2&&(n=ce,ce=t,n!==null&&ci(n)),e}function ci(e){ce===null?ce=e:ce.push.apply(ce,e)}function rv(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!Fe(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function un(e,n){for(n&=~Yi,n&=~zl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-ze(n),r=1<<t;e[t]=-1,n&=~r}}function ds(e){if(j&6)throw Error(S(327));ut();var n=nl(e,0);if(!(n&1))return pe(e,G()),null;var t=xl(e,n);if(e.tag!==0&&t===2){var r=Mo(e);r!==0&&(n=r,t=ai(e,r))}if(t===1)throw t=sr,zn(e,0),un(e,n),pe(e,G()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Cn(e,ce,Ve),pe(e,G()),null}function Zi(e,n){var t=j;j|=1;try{return e(n)}finally{j=t,j===0&&(ht=G()+500,Cl&&kn())}}function Un(e){an!==null&&an.tag===0&&!(j&6)&&ut();var n=j;j|=1;var t=ke.transition,r=F;try{if(ke.transition=null,F=1,e)return e()}finally{F=r,ke.transition=t,j=n,!(j&6)&&kn()}}function bi(){he=nt.current,L(nt)}function zn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,jd(t)),Q!==null)for(t=Q.return;t!==null;){var r=t;switch(ji(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:vt(),L(de),L(oe),Hi();break;case 5:Bi(r);break;case 4:vt();break;case 13:L($);break;case 19:L($);break;case 10:Ai(r.type._context);break;case 22:case 23:bi()}t=t.return}if(Z=e,Q=e=yn(e.current,null),ee=he=n,J=0,sr=null,Yi=zl=Ln=0,ce=Wt=null,On!==null){for(n=0;n<On.length;n++)if(t=On[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}On=null}return e}function Tc(e,n){do{var t=Q;try{if(Di(),$r.current=hl,pl){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}pl=!1}if(An=0,q=K=B=null,Ht=!1,or=0,Ji.current=null,t===null||t.return===null){J=1,sr=n,Q=null;break}e:{var o=e,i=t.return,u=t,s=n;if(n=ee,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var a=s,p=u,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var h=bu(i);if(h!==null){h.flags&=-257,es(h,i,u,o,n),h.mode&1&&Zu(o,a,n),n=h,s=a;var g=n.updateQueue;if(g===null){var y=new Set;y.add(s),n.updateQueue=y}else g.add(s);break e}else{if(!(n&1)){Zu(o,a,n),eu();break e}s=Error(S(426))}}else if(U&&u.mode&1){var E=bu(i);if(E!==null){!(E.flags&65536)&&(E.flags|=256),es(E,i,u,o,n),Fi(pt(s,u));break e}}o=s=pt(s,u),J!==4&&(J=2),Wt===null?Wt=[o]:Wt.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=ac(o,s,n);Gu(o,f);break e;case 1:u=s;var c=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(mn===null||!mn.has(d)))){o.flags|=65536,n&=-n,o.lanes|=n;var x=cc(o,u,n);Gu(o,x);break e}}o=o.return}while(o!==null)}Pc(t)}catch(w){n=w,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(1)}function Rc(){var e=ml.current;return ml.current=hl,e===null?hl:e}function eu(){(J===0||J===3||J===2)&&(J=4),Z===null||!(Ln&268435455)&&!(zl&268435455)||un(Z,ee)}function xl(e,n){var t=j;j|=2;var r=Rc();(Z!==e||ee!==n)&&(Ve=null,zn(e,n));do try{lv();break}catch(l){Tc(e,l)}while(1);if(Di(),j=t,ml.current=r,Q!==null)throw Error(S(261));return Z=null,ee=0,J}function lv(){for(;Q!==null;)Cc(Q)}function ov(){for(;Q!==null&&!Of();)Cc(Q)}function Cc(e){var n=_c(e.alternate,e,he);e.memoizedProps=e.pendingProps,n===null?Pc(e):Q=n,Ji.current=null}function Pc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Zd(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Q=null;return}}else if(t=qd(t,n,he),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);J===0&&(J=5)}function Cn(e,n,t){var r=F,l=ke.transition;try{ke.transition=null,F=1,iv(e,n,t,r)}finally{ke.transition=l,F=r}return null}function iv(e,n,t,r){do ut();while(an!==null);if(j&6)throw Error(S(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if($f(e,o),e===Z&&(Q=Z=null,ee=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||_r||(_r=!0,zc(el,function(){return ut(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=ke.transition,ke.transition=null;var i=F;F=1;var u=j;j|=4,Ji.current=null,ev(e,t),Nc(t,e),Td(Bo),tl=!!$o,Bo=$o=null,e.current=t,nv(t),_f(),j=u,F=i,ke.transition=o}else e.current=t;if(_r&&(_r=!1,an=e,yl=l),o=e.pendingLanes,o===0&&(mn=null),Ff(t.stateNode),pe(e,G()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(gl)throw gl=!1,e=ui,ui=null,e;return yl&1&&e.tag!==0&&ut(),o=e.pendingLanes,o&1?e===si?Gt++:(Gt=0,si=e):Gt=0,kn(),null}function ut(){if(an!==null){var e=sa(yl),n=ke.transition,t=F;try{if(ke.transition=null,F=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,yl=0,j&6)throw Error(S(331));var l=j;for(j|=4,T=e.current;T!==null;){var o=T,i=o.child;if(T.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var a=u[s];for(T=a;T!==null;){var p=T;switch(p.tag){case 0:case 11:case 15:Vt(8,p,o)}var m=p.child;if(m!==null)m.return=p,T=m;else for(;T!==null;){p=T;var v=p.sibling,h=p.return;if(Ec(p),p===a){T=null;break}if(v!==null){v.return=h,T=v;break}T=h}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}T=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,T=i;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vt(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){i=T;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,T=d;else e:for(i=c;T!==null;){if(u=T,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:_l(9,u)}}catch(w){V(u,u.return,w)}if(u===i){T=null;break e}var x=u.sibling;if(x!==null){x.return=u.return,T=x;break e}T=u.return}}if(j=l,kn(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(Nl,e)}catch{}r=!0}return r}finally{F=t,ke.transition=n}}return!1}function vs(e,n,t){n=pt(t,n),n=ac(e,n,1),e=hn(e,n,1),n=ue(),e!==null&&(cr(e,1,n),pe(e,n))}function V(e,n,t){if(e.tag===3)vs(e,e,t);else for(;n!==null;){if(n.tag===3){vs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=pt(t,e),e=cc(n,e,1),n=hn(n,e,1),e=ue(),n!==null&&(cr(n,1,e),pe(n,e));break}}n=n.return}}function uv(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ue(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ee&t)===t&&(J===4||J===3&&(ee&130023424)===ee&&500>G()-qi?zn(e,0):Yi|=t),pe(e,n)}function Oc(e,n){n===0&&(e.mode&1?(n=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):n=1);var t=ue();e=Ye(e,n),e!==null&&(cr(e,n,t),pe(e,t))}function sv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Oc(e,t)}function av(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),Oc(e,t)}var _c;_c=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||de.current)fe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return fe=!1,Yd(e,n,t);fe=!!(e.flags&131072)}else fe=!1,U&&n.flags&1048576&&Fa(n,al,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Hr(e,n),e=n.pendingProps;var l=ct(n,oe.current);it(n,t),l=Wi(null,n,r,e,l,t);var o=Gi();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ve(r)?(o=!0,ul(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ui(n),l.updater=Pl,n.stateNode=l,l._reactInternals=n,Yo(n,r,e,t),n=bo(null,n,r,!0,o,t)):(n.tag=0,U&&o&&zi(n),ie(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Hr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=fv(r),e=Pe(r,e),l){case 0:n=Zo(null,n,r,e,t);break e;case 1:n=rs(null,n,r,e,t);break e;case 11:n=ns(null,n,r,e,t);break e;case 14:n=ts(null,n,r,Pe(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),Zo(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),rs(e,n,r,l,t);case 3:e:{if(pc(n),e===null)throw Error(S(387));r=n.pendingProps,o=n.memoizedState,l=o.element,La(e,n),dl(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=pt(Error(S(423)),n),n=ls(e,n,r,t,l);break e}else if(r!==l){l=pt(Error(S(424)),n),n=ls(e,n,r,t,l);break e}else for(me=pn(n.stateNode.containerInfo.firstChild),ge=n,U=!0,_e=null,t=Ha(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ft(),r===l){n=qe(e,n,t);break e}ie(e,n,r,t)}n=n.child}return n;case 5:return Va(n),e===null&&Ko(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Ho(r,l)?i=null:o!==null&&Ho(r,o)&&(n.flags|=32),vc(e,n),ie(e,n,i,t),n.child;case 6:return e===null&&Ko(n),null;case 13:return hc(e,n,t);case 4:return $i(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=dt(n,null,r,t):ie(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),ns(e,n,r,l,t);case 7:return ie(e,n,n.pendingProps,t),n.child;case 8:return ie(e,n,n.pendingProps.children,t),n.child;case 12:return ie(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,D(cl,r._currentValue),r._currentValue=i,o!==null)if(Fe(o.value,i)){if(o.children===l.children&&!de.current){n=qe(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){i=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ke(-1,t&-t),s.tag=2;var a=o.updateQueue;if(a!==null){a=a.shared;var p=a.pending;p===null?s.next=s:(s.next=p.next,p.next=s),a.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Xo(o.return,t,n),u.lanes|=t;break}s=s.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(S(341));i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Xo(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ie(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,it(n,t),l=Ie(l),r=r(l),n.flags|=1,ie(e,n,r,t),n.child;case 14:return r=n.type,l=Pe(r,n.pendingProps),l=Pe(r.type,l),ts(e,n,r,l,t);case 15:return fc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),Hr(e,n),n.tag=1,ve(r)?(e=!0,ul(n)):e=!1,it(n,t),$a(n,r,l),Yo(n,r,l,t),bo(null,n,r,!0,e,t);case 19:return mc(e,n,t);case 22:return dc(e,n,t)}throw Error(S(156,n.tag))};function zc(e,n){return la(e,n)}function cv(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,n,t,r){return new cv(e,n,t,r)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fv(e){if(typeof e=="function")return nu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ei)return 11;if(e===Si)return 14}return 2}function yn(e,n){var t=e.alternate;return t===null?(t=Ne(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Gr(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")nu(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Gn:return jn(t.children,l,o,n);case xi:i=8,l|=8;break;case Eo:return e=Ne(12,t,n,l|2),e.elementType=Eo,e.lanes=o,e;case So:return e=Ne(13,t,n,l),e.elementType=So,e.lanes=o,e;case wo:return e=Ne(19,t,n,l),e.elementType=wo,e.lanes=o,e;case Bs:return jl(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Us:i=10;break e;case $s:i=9;break e;case Ei:i=11;break e;case Si:i=14;break e;case rn:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Ne(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function jn(e,n,t,r){return e=Ne(7,e,r,n),e.lanes=t,e}function jl(e,n,t,r){return e=Ne(22,e,r,n),e.elementType=Bs,e.lanes=t,e.stateNode={isHidden:!1},e}function fo(e,n,t){return e=Ne(6,e,null,n),e.lanes=t,e}function vo(e,n,t){return n=Ne(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function dv(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function tu(e,n,t,r,l,o,i,u,s){return e=new dv(e,n,t,u,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Ne(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ui(o),e}function vv(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function jc(e){if(!e)return En;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(ve(t))return za(e,t,n)}return n}function Fc(e,n,t,r,l,o,i,u,s){return e=tu(t,r,!0,e,l,o,i,u,s),e.context=jc(null),t=e.current,r=ue(),l=gn(t),o=Ke(r,l),o.callback=n??null,hn(t,o,l),e.current.lanes=l,cr(e,l,r),pe(e,r),e}function Fl(e,n,t,r){var l=n.current,o=ue(),i=gn(l);return t=jc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ke(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=hn(l,n,i),e!==null&&(je(e,l,i,o),Ur(e,l,i)),i}function El(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ps(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ru(e,n){ps(e,n),(e=e.alternate)&&ps(e,n)}function pv(){return null}var Mc=typeof reportError=="function"?reportError:function(e){console.error(e)};function lu(e){this._internalRoot=e}Ml.prototype.render=lu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));Fl(e,n,null,null)};Ml.prototype.unmount=lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Un(function(){Fl(null,e,null,null)}),n[Je]=null}};function Ml(e){this._internalRoot=e}Ml.prototype.unstable_scheduleHydration=function(e){if(e){var n=fa();e={blockedOn:null,target:e,priority:n};for(var t=0;t<on.length&&n!==0&&n<on[t].priority;t++);on.splice(t,0,e),t===0&&va(e)}};function ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hs(){}function hv(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var a=El(i);o.call(a)}}var i=Fc(n,r,e,0,null,!1,!1,"",hs);return e._reactRootContainer=i,e[Je]=i.current,er(e.nodeType===8?e.parentNode:e),Un(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var a=El(s);u.call(a)}}var s=tu(e,0,!1,null,null,!1,!1,"",hs);return e._reactRootContainer=s,e[Je]=s.current,er(e.nodeType===8?e.parentNode:e),Un(function(){Fl(n,s,t,r)}),s}function Al(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var u=l;l=function(){var s=El(i);u.call(s)}}Fl(n,i,e,l)}else i=hv(t,n,e,l,r);return El(i)}aa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ft(n.pendingLanes);t!==0&&(ki(n,t|1),pe(n,G()),!(j&6)&&(ht=G()+500,kn()))}break;case 13:Un(function(){var r=Ye(e,1);if(r!==null){var l=ue();je(r,e,1,l)}}),ru(e,1)}};Ii=function(e){if(e.tag===13){var n=Ye(e,134217728);if(n!==null){var t=ue();je(n,e,134217728,t)}ru(e,134217728)}};ca=function(e){if(e.tag===13){var n=gn(e),t=Ye(e,n);if(t!==null){var r=ue();je(t,e,n,r)}ru(e,n)}};fa=function(){return F};da=function(e,n){var t=F;try{return F=e,n()}finally{F=t}};zo=function(e,n,t){switch(n){case"input":if(Io(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Rl(r);if(!l)throw Error(S(90));Vs(r),Io(r,l)}}}break;case"textarea":Gs(e,t);break;case"select":n=t.value,n!=null&&tt(e,!!t.multiple,n,!1)}};Zs=Zi;bs=Un;var mv={usingClientEntryPoint:!1,Events:[dr,Jn,Rl,Ys,qs,Zi]},Ct={findFiberByHostInstance:Pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gv={bundleType:Ct.bundleType,version:Ct.version,rendererPackageName:Ct.rendererPackageName,rendererConfig:Ct.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ta(e),e===null?null:e.stateNode},findFiberByHostInstance:Ct.findFiberByHostInstance||pv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zr.isDisabled&&zr.supportsFiber)try{Nl=zr.inject(gv),Ue=zr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mv;xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(n))throw Error(S(200));return vv(e,n,null,t)};xe.createRoot=function(e,n){if(!ou(e))throw Error(S(299));var t=!1,r="",l=Mc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=tu(e,1,!1,null,null,t,!1,r,l),e[Je]=n.current,er(e.nodeType===8?e.parentNode:e),new lu(n)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ta(n),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Un(e)};xe.hydrate=function(e,n,t){if(!Dl(n))throw Error(S(200));return Al(null,e,n,!0,t)};xe.hydrateRoot=function(e,n,t){if(!ou(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=Mc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Fc(n,null,e,1,t??null,l,!1,o,i),e[Je]=n.current,er(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Ml(n)};xe.render=function(e,n,t){if(!Dl(n))throw Error(S(200));return Al(null,e,n,!1,t)};xe.unmountComponentAtNode=function(e){if(!Dl(e))throw Error(S(40));return e._reactRootContainer?(Un(function(){Al(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};xe.unstable_batchedUpdates=Zi;xe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Dl(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Al(e,n,t,!1,r)};xe.version="18.2.0-next-9e3b772b8-20220608";function Dc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dc)}catch(e){console.error(e)}}Dc(),Fs.exports=xe;var yv=Fs.exports,ms=yv;cu.createRoot=ms.createRoot,cu.hydrateRoot=ms.hydrateRoot;const xv=`float ease(float t) {
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
`,Ev=`#include config

const float PI = 3.14159265358979323846264338327950288;
const float TAU = 2. * PI;
const float ETA = PI / 2.;
const float EPS = .001;
const float SCALING = .001;
const vec3 NOISE = vec3(.000003, -.000002, .000017);

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
`,Sv=`bool nan(in vec2 v) {
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
`,wv=`#include helpers
#include ease

vec2 xnormalize(in vec2 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.y *= .999999;
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

vec3 xnormalize(in vec3 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.z *= .999999;
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

vec4 xnormalize(in vec4 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.w *= .999999;
  // float d = curvature * xdot(v);
  // if(d < 0.) {
  //   v.w = 0.;
  //   v.xyz /= sqrt(dot(v.xyz, v.xyz));
  //   return v;
  // }
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

#if DIMENSIONS == 5
vec5 xnormalize(in vec5 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.u *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec5(v.v / n, v.u / n);
}
#elif DIMENSIONS == 6
vec6 xnormalize(in vec6 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.u.x *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec6(v.v / n, v.u / n);
}
#elif DIMENSIONS == 7
vec7 xnormalize(in vec7 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.u.y *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec7(v.v / n, v.u / n);
}
#elif DIMENSIONS == 8
vec8 xnormalize(in vec8 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.u.z *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec8(v.v / n, v.u / n);
}
#elif DIMENSIONS == 9
vec9 xnormalize(in vec9 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.t *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec9(v.v / n, v.u / n, v.t / n);
}
#endif

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
  return v;
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
#if DIMENSIONS == 5
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
`,Nv=`const vec2 cone = vec2(1., 0);
const vec2 ci = vec2(0., 1.);
const vec2 conei = vec2(1., 1.);

vec2 cmul(in vec2 z0, in vec2 z1) {
  float x0 = z0.x;
  float y0 = z0.y;
  float x1 = z1.x;
  float y1 = z1.y;
  return vec2(x0 * x1 - y0 * y1, x0 * y1 + x1 * y0);
}

vec2 cinv(in vec2 z) {
  float x = z.x;
  float y = z.y;
  float n = 1.0 / (x * x + y * y);
  return vec2(n * x, -n * y);
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
  float x = z.x, y = z.y;
  return cdiv(cexp(vec2(-y, x)) - cexp(vec2(y, -x)), vec2(0, 2.0));
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
`,kv=`vec4 light(vec4 color, float ambient, float shininess) {
  #ifdef LIGHTING
  vec3 eyeDirection = eye - vPosition;
  float distance = length(eyeDirection);
  float attenuation = 1. / (1. + distance * distance * .01);
  eyeDirection = normalize(eyeDirection);
  vec3 lightDirection = eyeDirection;
  float diffuse = abs(dot(vNormal, lightDirection));
  #if LIGHTING == 0
  // Lambert
  float specular = 0.;

  #elif LIGHTING == 1
  // Phong
  vec3 reflectDirection = reflect(-lightDirection, vNormal);
  float specular = pow(max(dot(eyeDirection, reflectDirection), 0.), shininess * .25);

  #elif LIGHTING == 2
  // Blinn-phong
  vec3 halfVector = normalize(lightDirection + eyeDirection);
  float specular = pow(abs(dot(vNormal, halfVector)), shininess);

  #elif LIGHTING == 3
  // Toon
  float specular = 0.;
  diffuse = floor(diffuse * 4.) / 4.;
  #endif

  return vec4((ambient + diffuse + specular) * attenuation * color.rgb, color.a);
  #else
  return color;
  #endif
}
`,Iv="sßx",po={active:1,inactive:0,snub:"s",holosnub:"ß",custom:.5,activeVoid:"x",void:""},Ac=e=>e===0?"inactive":e===1?"active":e==="s"?"snub":e==="ß"?"holosnub":e==="x"?"activeVoid":e===""?"void":"custom",Tv=e=>{const n=[];for(let t=0;t<e[0].length;t++){n.push([]);for(let r=0;r<e.length;r++)n[t].push(e[r][t])}return n},Qr=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){t[r]=new Array(n[0].length);for(let l=0;l<n[0].length;l++){let o=0;for(let i=0;i<n.length;i++)o+=e[r][i]*n[i][l];t[r][l]=o}}return t},Sp=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){let l=0;for(let o=0;o<e[0].length;o++)l+=e[r][o]*n[o];t[r]=l}return t},wp=(e,n)=>{for(let t=0;t<e.length;t++)for(let r=0;r<e[0].length;r++)e[t][r]=n[t][r];return e},Sn=e=>{const n=new Array(e);for(let t=0;t<e;t++)n[t]=new Array(e).fill(0),n[t][t]=1;return n},Rv=e=>e.every((n,t)=>n.every((r,l)=>t===l||e[t][l]===0)),Np=e=>{const n=e[0].length;let t=e.map(o=>o.slice()),r=Sn(n),l=1e3;for(;!Rv(t)&&l-- >0;){let o=0,i=1;for(let a=0;a<n;a++)for(let p=0;p<n;p++)a!==p&&st(t[a][p])>st(t[o][i])&&(o=a,i=p);const u=t[o][o]===t[i][i]?Uc(t[o][i])*He/4:.5*Ov(2*t[o][i]/(t[o][o]-t[i][i])),s=Sn(n);s[i][i]=s[o][o]=cn(u),s[i][o]=s[o][i]=-Le(u),s[i][o]*=-1,r=Qr(r,s),t=Qr(Qr(Tv(s),t),s)}return{vectors:r,values:t.map((o,i)=>st(o[i])<1e-8?0:o[i])}},kp=e=>{const n=e.length,t=[];for(let r=0;r<n;r++)t.push([...e[r],...Sn(n)[r]]);for(let r=0;r<n;r++){const l=t[r][r];for(let o=r+1;o<n;o++){const i=t[o][r]/l;for(let u=r;u<2*n;u++)t[o][u]-=i*t[r][u]}}for(let r=n-1;r>=0;r--){const l=t[r][r];for(let o=r-1;o>=0;o--){const i=t[o][r]/l;for(let u=0;u<2*n;u++)t[o][u]-=i*t[r][u]}for(let o=n;o<2*n;o++)t[r][o]/=l}return t.map(r=>r.slice(n))},Sl=e=>{if(e.length===2)return[e[0][0],e[1][0],e[0][1],e[1][1]];if(e.length===3)return[e[0][0],e[1][0],e[2][0],e[0][1],e[1][1],e[2][1],e[0][2],e[1][2],e[2][2]];if(e.length===4)return[e[0][0],e[1][0],e[2][0],e[3][0],e[0][1],e[1][1],e[2][1],e[3][1],e[0][2],e[1][2],e[2][2],e[3][2],e[0][3],e[1][3],e[2][3],e[3][3]];if(e.length===5)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],e[0][4]],[[e[1][0],e[1][1],e[1][2],e[1][3]],e[1][4]],[[e[2][0],e[2][1],e[2][2],e[2][3]],e[2][4]],[[e[3][0],e[3][1],e[3][2],e[3][3]],e[3][4]],[[e[4][0],e[4][1],e[4][2],e[4][3]],e[4][4]]];if(e.length===6)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5]]]];if(e.length===7)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6]]]];if(e.length===8)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]]]];if(e.length===9)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]],e[0][8]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]],e[1][8]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]],e[2][8]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]],e[3][8]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]],e[4][8]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]],e[5][8]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]],e[6][8]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]],e[7][8]],[[e[8][0],e[8][1],e[8][2],e[8][3]],[e[8][4],e[8][5],e[8][6],e[8][7]],e[8][8]]];throw new Error("Unsupported matrix size")},Cv=(e,n,t,r,l=1)=>{const o=l/Lc(e/2),i=1/(t-r),u=Sn(4);return u[0][0]=o/n,u[1][1]=o,u[2][2]=(r+t)*i,u[3][2]=-1,u[2][3]=2*r*t*i,u[3][3]=0,u},Pv=(e,n,t)=>{if(st(e[0]-n[0])<1e-4&&st(e[1]-n[1])<1e-4&&st(e[2]-n[2])<1e-4)return Sn(4);let r=e[0]-n[0],l=e[1]-n[1],o=e[2]-n[2],i=1/Kr(r*r+l*l+o*o);r*=i,l*=i,o*=i;let u=t[1]*o-t[2]*l,s=t[2]*r-t[0]*o,a=t[0]*l-t[1]*r;i=Kr(u*u+s*s+a*a),i?(i=1/i,u*=i,s*=i,a*=i):(u=0,s=0,a=0);let p=l*a-o*s,m=o*u-r*a,v=r*s-l*u;i=Kr(p*p+m*m+v*v),i?(i=1/i,p*=i,m*=i,v*=i):(p=0,m=0,v=0);const h=Sn(4);return h[0][0]=u,h[1][0]=p,h[2][0]=r,h[0][1]=s,h[1][1]=m,h[2][1]=l,h[0][2]=a,h[1][2]=v,h[2][2]=o,h[0][3]=-(u*e[0]+s*e[1]+a*e[2]),h[1][3]=-(p*e[0]+m*e[1]+v*e[2]),h[2][3]=-(r*e[0]+l*e[1]+o*e[2]),h},{abs:st,cos:cn,sin:Le,tan:Lc,cosh:Ip,sinh:Tp,acos:Rp,acosh:Cp,atan:Ov,atan2:_v,min:Be,max:Pt,round:Pp,sqrt:Kr,sign:Uc,ceil:Op,floor:_p,log:zp,exp:jp,hypot:Fp,pow:zv,PI:He}=Math,fi=He*2;function*jv(e,n){if(n<0||e.length<n)return;const t=Array.from(Array(n).keys());for(;;){yield t.map(l=>e[l]);let r=n-1;for(;r>=0&&t[r]>=e.length-n+r;)r--;if(r<0)return;for(let l=t[r]+1;r<n;r++,l++)t[r]=l}}const Mp=(e,n=2)=>Array.from(jv(e,n)),Fv=e=>e.charCodeAt(0)-97,Xr=e=>e?e*Xr(e-1):1,Dp=(e,n)=>Xr(e)/(Xr(n)*Xr(e-n)),Ap=(e,n)=>{let t;return(...r)=>(clearTimeout(t),t=setTimeout(()=>e(...r),n),()=>clearTimeout(t))},Mv=(e,n=null,t=1,r=!1)=>{if(n===null&&(n=e,e=0),t===0)throw new Error("Step cannot be zero.");if(n<e&&t>0||n>e&&t<0){if(r)return[];t=-t}return new Array(Math.ceil((n-e)/t)).fill().map((l,o)=>e+o*t)};var $c={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(Gc,function(){var t=function(){function r(h){return i.appendChild(h.dom),h}function l(h){for(var g=0;g<i.children.length;g++)i.children[g].style.display=g===h?"block":"none";o=h}var o=0,i=document.createElement("div");i.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",i.addEventListener("click",function(h){h.preventDefault(),l(++o%i.children.length)},!1);var u=(performance||Date).now(),s=u,a=0,p=r(new t.Panel("FPS","#0ff","#002")),m=r(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var v=r(new t.Panel("MB","#f08","#201"));return l(0),{REVISION:16,dom:i,addPanel:r,showPanel:l,begin:function(){u=(performance||Date).now()},end:function(){a++;var h=(performance||Date).now();if(m.update(h-u,200),h>s+1e3&&(p.update(1e3*a/(h-s),100),s=h,a=0,v)){var g=performance.memory;v.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return h},update:function(){u=this.end()},domElement:i,setMode:l}};return t.Panel=function(r,l,o){var i=1/0,u=0,s=Math.round,a=s(window.devicePixelRatio||1),p=80*a,m=48*a,v=3*a,h=2*a,g=3*a,y=15*a,E=74*a,f=30*a,c=document.createElement("canvas");c.width=p,c.height=m,c.style.cssText="width:80px;height:48px";var d=c.getContext("2d");return d.font="bold "+9*a+"px Helvetica,Arial,sans-serif",d.textBaseline="top",d.fillStyle=o,d.fillRect(0,0,p,m),d.fillStyle=l,d.fillText(r,v,h),d.fillRect(g,y,E,f),d.fillStyle=o,d.globalAlpha=.9,d.fillRect(g,y,E,f),{dom:c,update:function(x,w){i=Math.min(i,x),u=Math.max(u,x),d.fillStyle=o,d.globalAlpha=1,d.fillRect(0,0,p,y),d.fillStyle=l,d.fillText(s(x)+" "+r+" ("+s(i)+"-"+s(u)+")",v,h),d.drawImage(c,g+a,y,E-a,f,g,y,E-a,f),d.fillRect(g+E-a,y,a,f),d.fillStyle=o,d.globalAlpha=.9,d.fillRect(g+E-a,y,a,s((1-x/w)*f))}}},t})})($c);var Dv=$c.exports;const Av=Qc(Dv),Lv=({radius:e=1,widthSegments:n=16,segments:t=16}={})=>{const r=[],l=[],o=[],i=[];let u=0;const s=[];for(let a=0;a<=t;a++){const p=[],m=a/t;let v=0;a===0?v=.5/n:a===t&&(v=-.5/n);for(let h=0;h<=n;h++){const g=h/n,y=[-e*cn(g*fi)*Le(m*He),e*cn(m*He),e*Le(g*fi)*Le(m*He)];l.push(...y);const E=(y[0]**2+y[1]**2+y[2]**2)**-.5;o.push(...y.map(f=>f*E)),i.push(g+v,1-m),p.push(u++)}s.push(p)}for(let a=0;a<t;a++)for(let p=0;p<n;p++){const m=s[a][p+1],v=s[a][p],h=s[a+1][p],g=s[a+1][p+1];a!==0&&r.push(m,v,g),a!==t-1&&r.push(v,h,g)}return{vertices:l,normals:o,uvs:i,indices:r}},Uv=({radius:e=null,radiusTop:n=1,radiusBottom:t=1,height:r=1,radialSegments:l=8,segments:o=1}={})=>{const i=[],u=[],s=[],a=[];e!==null&&(n=e,t=e);let p=0;const m=[],v=r/2,h=(t-n)/r;for(let g=0;g<=o;g++){const y=[],E=g/o,f=E*(t-n)+n;for(let c=0;c<=l;c++){const d=c/l,x=d*fi,w=Le(x),I=cn(x),k=[f*w,-E*r+v,f*I];u.push(...k);const N=[w,h,I],M=(N[0]**2+N[1]**2+N[2]**2)**-.5;s.push(...N.map(_=>_*M)),a.push(d,1-E),y.push(p++)}m.push(y)}for(let g=0;g<l;g++)for(let y=0;y<o;y++){const E=m[y][g],f=m[y+1][g],c=m[y+1][g+1],d=m[y][g+1];i.push(E,f,d),i.push(f,c,d)}return{vertices:u,normals:s,uvs:a,indices:i}},$v=({segments:e=3}={})=>{const n=[],t=[],r=[],l=[],o=1/e;for(let i=0;i<e+1;i++)for(let u=0;u<i+1;u++)t.push((2*u-i)*o/2,i*o,0),r.push(0,0,1),l.push(o*u,1-o*i);for(let i=1;i<e+1;i++)for(let u=0;u<i;u++){const s=i*(i+1)/2+u,a=i*(i-1)/2+u;if(n.push(s,a,s+1),i<e){const p=(i+1)*(i+2)/2+u;n.push(p+1,s,s+1)}}return{vertices:t,normals:r,uvs:l,indices:n}},Bv=`#version 300 es
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
`,Hv=`#version 300 es
precision highp float;

#include globals

uniform mat4 viewProjection;
uniform float curvature;
uniform float segments;
uniform float thickness;
uniform matN matrix;

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
  #if DIMENSIONS > 4
  vecN iPosition = multiplyMatrix(matrix, fromMat(position));
  vecN iTarget = multiplyMatrix(matrix, fromMat(target));
  #else
  vecN iPosition = matrix * position;
  vecN iTarget = matrix * target;
  #endif

  float t = ease(uv.y);
  vecN pos = mix(iPosition, iTarget, t);
  vecN next = mix(iPosition, iTarget, t + EPS);
  // Position segments on hypersurface
  if(segments > 1.f) {
    pos = xnormalize(pos);
    next = xnormalize(next);
  }

  vec3 proj = xproject(pos);
  vec3 nextProj = xproject(next);
  vec3 tangent = normalize(proj - nextProj);

  vec3 norm = cross(nextProj, proj);

  if(length(norm) < 1e-6f) {
    norm = cross(nextProj, proj + NOISE);
  }

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
`,Vv=`#version 300 es
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
`,Wv=`#version 300 es
precision highp float;

#include globals

uniform float curvature;
uniform float segments;
uniform mat4 viewProjection;
uniform matN matrix;

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
  #if DIMENSIONS > 4
  vecN iPosition = multiplyMatrix(matrix, fromMat(position));
  vecN iTarget = multiplyMatrix(matrix, fromMat(target));
  vecN iCenter = multiplyMatrix(matrix, fromMat(center));
  #else
  vecN iPosition = matrix * position;
  vecN iTarget = matrix * target;
  vecN iCenter = matrix * center;
  #endif

  vec2 t = ease(uv);
  vecN pos = trix(iPosition, iCenter, iTarget, t);
  vecN next = trix(iPosition, iCenter, iTarget, t + vec2(EPS, 0.f));
  vecN other = trix(iPosition, iCenter, iTarget, t + vec2(0.f, EPS));

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
  //   next = trix(iProj, iCenter, iTarget, t + vec2(EPS * 10.f, 0.f));
  //   other = trix(iProj, iCenter, iTarget, t + vec2(0.f, EPS * 10.f));
  //   next = xnormalize(next);
  //   other = xnormalize(other);

  //   drdx = (xproject(next) - proj);
  //   drdy = (xproject(other) - proj);
  // }

  vec3 norm = normalize(cross(drdx, drdy));

  gl_Position = viewProject(proj);

  vColor = color;
  vPosition = proj;
  vNormal = norm;
}
`,Gv=`#version 300 es
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
`,Qv=`#version 300 es
precision highp float;

#include globals

uniform float curvature;
uniform float thickness;
uniform mat4 viewProjection;
uniform matN matrix;

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
  #if DIMENSIONS > 4
  vecN pos = multiplyMatrix(matrix, fromMat(position));
  #else
  vecN pos = matrix * position;
  #endif
  // pos = xnormalize(pos);

  vec3 proj = xproject(pos);
  proj = inflate(proj, pos, normal, thickness, .01f);

  gl_Position = viewProject(proj);

  vColor = color;
  vPosition = proj;
  vNormal = normal;
}
`,ho={vertex:()=>Lv(),edge:e=>Uv({segments:e}),face:e=>$v({segments:e})};function Kv(e){return{meshes:["vertex","edge","face"],...go(e,"vertex",Qv,Gv,ho.vertex,1024,e.dimensions,e.showVertices),...go(e,"edge",Hv,Bv,ho.edge,1024,e.dimensions,e.showEdges,["position","target"]),...go(e,"face",Wv,Vv,ho.face,1024,e.dimensions,e.showFaces,["position","target","center"]),changeArity(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].changeArity(n)},updateGeometries(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].updateGeometry(n)},recompilePrograms(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].recompileProgram(n)},updateUniforms(n,t=!1){for(let r=0;r<this.meshes.length;r++){const l=this.meshes[r],o=this[l];if(!t){o.uniforms.curvature.update(n.curvature),o.uniforms.matrix.update(Sl(n.matrix));for(let i=4;i<=n.dimensions;i++)o.uniforms[`fov${i}`].update(1/Lc(He*n[`fov${i}`]*.5/180));l==="vertex"?o.uniforms.thickness.update(n.vertexThickness):l==="edge"?(o.uniforms.thickness.update(n.edgeThickness),o.uniforms.segments.update(n.curvature&&n.curve?n.segments:1)):(o.uniforms.segments.update(n.curvature&&n.curve?n.segments:1),o.uniforms.opacity.update(Fn[n.ambiance].opacity))}o.uniforms.viewProjection.update(n.camera.viewProjection),o.uniforms.zoom.update(-n.camera.position[2]),Fn[n.ambiance].lighting&&o.uniforms.eye.update(n.camera.eye)}},plotType(n,t,r){const l=this[t],o=n[t],{dimensions:i}=n,u=Fn[n.ambiance];let s=r?r[0]:0,a=r?r[1]:o.length,p=s,m=a;if(t==="face"){let g=0;for(let y=0;y<s;y++){const E=o[y].vertices.length;g+=E<3?0:E===3?1:E}p=g;for(let y=s;y<a;y++){const E=o[y].vertices.length;g+=E<3?0:E===3?1:E}m=g}l.instances<m&&l.extendAttributes(m),l.count=m;const v=i>4?9:i;let h=p;for(let g=s;g<a;g++){let y=[];const E=o[g];if(t==="vertex")y.push({...E,position:E.vertex,type:t});else if(t==="edge")y.push({...E,position:n.vertex[E.start].vertex,target:n.vertex[E.end].vertex,type:t});else{if(E.vertices.length<3)continue;if(E.vertices.length===3)y.push({...E,position:n.vertex[E.vertices[0]].vertex,target:n.vertex[E.vertices[1]].vertex,center:n.vertex[E.vertices[2]].vertex});else{const f=new Array(E.vertices.length);for(let d=0;d<E.vertices.length;d++)f[d]=n.vertex[E.vertices[d]].vertex;const c=new Array(i).fill(0);for(let d=0;d<f.length;d++){const x=f[d];for(let w=0;w<i;w++)c[w]+=x[w]}for(let d=0;d<i;d++)c[d]/=f.length;for(let d=0;d<f.length;d++){const x={...E,position:f[d],target:f[(d+1)%f.length],center:c};E.word.length%2===(n.curvature>0?0:1)&&([x.position,x.target]=[x.target,x.position]),y.push(x)}}}for(let f=0;f<y.length;f++){const c=y[f];for(let x=0;x<i;x++)for(let w=0;w<l.varying.length;w++){const I=l.varying[w];l.attributes[I].data[h*v+x]=c[I][x]}const d=u.color(c,t,n);l.attributes.color.data[h*3+0]=d[0],l.attributes.color.data[h*3+1]=d[1],l.attributes.color.data[h*3+2]=d[2],h++}for(let f=0;f<l.varying.length;f++){const c=l.varying[f];l.attributes[c].update(p,m)}l.attributes.color.update(p,m)}},plot(n,t){for(let r=0;r<this.meshes.length;r++){const l=this.meshes[r];this[l].visible&&this.plotType(n,l,t[l])}}}}const Xv=`#version 300 es
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
`,Jv=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Yv=`#version 300 es
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
`,qv=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Zv=`#version 300 es
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
`,bv=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,ep=`#version 300 es
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
`,np=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,tp=`#version 300 es
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
`,rp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`;function lp(e){return{..._t(e,"oit",np,ep,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),..._t(e,"down",bv,Zv,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),..._t(e,"up",rp,tp,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),..._t(e,"afterImage",Jv,Xv,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),..._t(e,"bloom",qv,Yv,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function op(e){const{gl:n}=e,t=Fn[e.ambiance],r=e.msaa?Be(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),yo(e,e.rb.base,n.RGBA8,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,e.rb.base),yo(e,e.rb.depth,n.DEPTH_COMPONENT24,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),e.fb.oit&&(n.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(n.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(n.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&n.deleteRenderbuffer(e.rb.depth_copy),t.opacity<1&&t.transparency==="oit"&&(e.fb.oit=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),r?(e.rb.depth_copy=n.createRenderbuffer(),yo(e,e.rb.depth_copy,n.DEPTH_COMPONENT24),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth_copy)):n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),e.textures.oitAccum=nn(e,n.RGBA16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=nn(e,n.R16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT1,n.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(n.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(n.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(n.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(n.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),t.afterImage&&(e.fb.afterImage=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=nn(e,n.RGBA8),e.textures.afterImageScreen=nn(e,n.RGBA8),e.textures.afterImageOutScreen=nn(e,n.RGBA8)),e.fb.kawase&&(n.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(n.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let l=0;l<e.textures.kawase.length;l++)n.deleteTexture(e.textures.kawase[l].texture);e.textures.kawase=null}if(e.textures.blur&&(n.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(n.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),t.glow){e.fb.kawase=n.createFramebuffer(),e.fb.bloom=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let l=0;l<t.glow.steps;l++)e.textures.kawase[l]=nn(e,n.RGBA8,t.glow.pow**-l);e.textures.blur=nn(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.blur.texture,0),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=nn(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.bloom.texture,0)}}const Bc=window.location.search.includes("stats");let Jr;Bc&&(Jr=new Av,Jr.dom.id="stats",document.body.appendChild(Jr.dom));const Lp=e=>{const n=document.createElement("canvas");n.id="webgl2",document.body.appendChild(n);const t=n.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:t},!t){console.error("Unable to initialize WebGL. Your browser may not support it.");return}t.getExtension("EXT_color_buffer_float"),t.enable(t.DEPTH_TEST);const r={zoom:1,fov:He/3,position:[0,0,-e.zoom],update(){const a=t.canvas.clientWidth/t.canvas.clientHeight;this.zoom=Be(t.canvas.clientWidth/t.canvas.clientHeight,1),this.eye=[0,0,this.position[2]];const p=Pv(this.eye,[0,0,0],[0,1,0]),m=Cv(this.fov,a,.01,1e3,this.zoom);this.viewProjection=Sl(Qr(m,p))}};r.update();const l=lp(e),o=Kv(e),i={base:t.createRenderbuffer(),depth:t.createRenderbuffer()},u={base:t.createFramebuffer()};return{...e,gl:t,camera:r,meshes:o,passes:l,rb:i,fb:u,textures:{}}},Up=(e,n)=>{e.meshes[n].visible=e[n==="vertex"?"showVertices":n==="edge"?"showEdges":"showFaces"]},$p=(e,n=null)=>{if(e.currentOrder===0||n===null&&e.ranges.length===0||n!==null&&n>=e.ranges.length)return;const t=n!==null?e.ranges[n]:{vertex:[e.ranges[0].vertex[0],e.ranges[e.currentOrder-1].vertex[1]],edge:[e.ranges[0].edge[0],e.ranges[e.currentOrder-1].edge[1]],face:[e.ranges[0].face[0],e.ranges[e.currentOrder-1].face[1]]};e.meshes.plot(e,t),document.title=`Coxeter Explorer - ${e.spaceType.type==="finite"?"S":e.spaceType.type==="affine"?"E":"H"}^${e.dimensions} ${e.currentOrder<e.order?`(${e.currentOrder}/${e.order})…`:""}- ${e.vertex.length} vertices, ${e.edge.length} edges, ${e.face.length} faces`},Bp=e=>{e.camera.fov=He*e.fov3/180,e.camera.update(),e.meshes.updateUniforms(e,!0)},Hp=e=>{const n=Fn[e.ambiance];e.gl.clearColor(...n.background),n.glow&&(e.passes.bloom.uniforms.exposure.update(n.glow.exposure),e.passes.bloom.uniforms.strength.update(n.glow.strength),e.passes.down.uniforms.offset.update(n.glow.offset.down),e.passes.up.uniforms.offset.update(n.glow.offset.up)),n.afterImage&&e.passes.afterImage.uniforms.strength.update(n.afterImage)},ip=e=>{Bc&&Jr.update();const{gl:n}=e,t=e.msaa?Be(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,r=Fn[e.ambiance];sp(n.canvas,e.subsampling)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),op(e),e.camera.update(),e.meshes.updateUniforms(e,!0)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),r.culling&&n.enable(n.CULL_FACE),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),e.meshes.vertex.render(e),e.meshes.edge.render(e),e.meshes.face.visible&&r.opacity<1&&r.transparency==="oit"?(t&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),r.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):(r.opacity<1&&r.transparency==="blend"&&(n.enable(n.BLEND),r.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA)),e.meshes.face.render(e));const l=r.afterImage?e.fb.afterImage:r.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,l),r.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let o=e.textures.bloom;if(r.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),r.glow?o=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),r.glow){n.disable(n.BLEND),r.culling&&n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let i=0;i<r.glow.steps;i++){const u=i===0?o:e.textures.kawase[i-1],s=e.textures.kawase[i];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let i=r.glow.steps-1;i>=0;i--){const u=e.textures.kawase[i],s=i===0?e.textures.blur:e.textures.kawase[i-1];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,o.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=ip;const up={globals:Ev,project:wv,helpers:Sv,complex:Nv,ease:xv,lighting:kv},mo=(e,n,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e),en=(e,n,t)=>{let r,l,o;if(n===0)r=l=o=t;else{const i=t<.5?t*(1+n):t+n-t*n,u=2*t-i;r=mo(u,i,e+1/3),l=mo(u,i,e),o=mo(u,i,e-1/3)}return[r,l,o]},sp=(e,n)=>{n=n||1,n=Math.max(0,n);const t=e.clientWidth*n|0,r=e.clientHeight*n|0;return e.width!==t||e.height!==r?(e.width=t,e.height=r,!0):!1},ap=(e,n)=>e.replace(/\bvecN\b/g,`vec${n}`).replace(/\bmatN\b/g,`mat${n}`),gs=(e,n,t)=>{var i;const r=Fn[e.ambiance];let l="";r.lighting&&(l+=`#define LIGHTING ${hp.indexOf(r.lighting)}
`);const o=e.easing==="auto"?((i=e.spaceType)==null?void 0:i.type)==="hyperbolic"&&e.projection4!=="inverted"?"quintic":"linear":e.easing;l+=`#define DIMENSIONS ${e.dimensions}
`;for(let u=3;u<=e.dimensions;u++)l+=`#define PROJECTION${u} ${vp.indexOf(e[`projection${u}`])-1}
`;return l+=`#define EASING ${pp.indexOf(o)}
`,r.opacity<1&&r.transparency==="oit"&&(l+=`#define OIT
`),Object.entries({...up,config:l}).forEach(([u,s])=>{n=n.replace(`#include ${u}`,s),t=t.replace(`#include ${u}`,s)}),[n,t].map(u=>ap(u,e.dimensions))},jr=(e,n,t,r,l)=>{if(e.gl.shaderSource(l,r),e.gl.compileShader(l),!e.gl.getShaderParameter(l,e.gl.COMPILE_STATUS)){const i=e.gl.getShaderInfoLog(l);return console.error(`An error occurred compiling the ${n}->${t} shader: ${i}`,{shaderSource:r}),i}},ys=(e,n,t)=>{const{gl:r}=e;if(r.linkProgram(t),!r.getProgramParameter(t,r.LINK_STATUS)){const o=r.getProgramInfoLog(t);return console.error(`Unable to initialize the ${n} shader program: ${o}`),o}},Hc=(e,n,t,r,l=[])=>{const{gl:o}=e,i=o.createProgram(),u=o.createShader(o.VERTEX_SHADER),s=o.createShader(o.FRAGMENT_SHADER);if(jr(e,n,"vertex",t,u)||jr(e,n,"fragment",r,s)||(o.attachShader(i,u),o.attachShader(i,s),ys(e,n,i)))return;const a={program:i,vertexShader:u,fragmentShader:s,uniformsDef:l,recompile(p,m,v,h=null){jr(p,n,"vertex",m,this.vertexShader)||jr(p,n,"fragment",v,this.fragmentShader)||ys(p,n,this.program)||(h&&(this.uniformsDef=h),this.bindUniforms(p))},bindUniforms(p){this.uniforms={},this.uniformsDef.forEach(({name:m,type:v,value:h})=>{this.uniforms[m]=cp(p,this.program,m,v),this.uniforms[m].update(h)})}};return a.bindUniforms(e),a},Ot=(e,n,t,r,l,o=null,i=null)=>{const{gl:u}=e;i=i||u.FLOAT;const s=i===u.FLOAT?4:2,a={name:t,mesh:n,indices:Vc,instances:o,data:l,size:r,type:i,update(p=null,m=null){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer),p===null&&m===null?u.bufferData(u.ARRAY_BUFFER,this.data,u.STATIC_DRAW):u.bufferSubData(u.ARRAY_BUFFER,p*this.size*s,this.data,p*this.size,(m-p)*this.size)},extend(p,m,v=!1){if(u.bindVertexArray(this.mesh.vao),this.size=p,this.location=u.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const h=p>4?3:1;this.name==="target"&&(this.location=p>4?6:4),this.name==="center"&&(this.location=p>4?9:5);for(let g=0;g<h;g++)u.enableVertexAttribArray(this.location+g);for(let g=0;g<h;g++)u.vertexAttribPointer(this.location+g,p/h,this.type,!1,p*s,p/h*g*s);if(this.instances)for(let g=0;g<h;g++)u.vertexAttribDivisor(this.location+g,this.instances);m&&(v&&m.length>=this.data.length&&m.set(this.data),this.data=m),this.update()},get(){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const p=new Float32Array(this.data.length);return u.getBufferSubData(u.ARRAY_BUFFER,0,p),p}};return a.buffer=u.createBuffer(),a.extend(r),a},Vc=(e,n,t)=>{const{gl:r}=e;r.bindVertexArray(n);const l=r.createBuffer();return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,l),r.bufferData(r.ELEMENT_ARRAY_BUFFER,t,r.STATIC_DRAW),{buffer:l,vao:n,indices:t,count:t.length,update(o){r.bindVertexArray(this.vao),this.indices=o,this.count=o.length,r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,this.buffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,o,r.STATIC_DRAW)}}},cp=(e,n,t,r)=>{const{gl:l}=e;return{program:n,update(i){if(l.useProgram(this.program),r.startsWith("m")){const u=parseInt(r.slice(1,2));if(u>4)for(let s=0;s<u;s++){const a=l.getUniformLocation(n,`${t}.c${s+1}.v`);if(a!==null&&l.uniform4fv(a,i[s][0]),u-4===1){const p=l.getUniformLocation(n,`${t}.c${s+1}.u`);p!==null&&l.uniform1f(p,i[s][1])}else if(u-4>1){const p=l.getUniformLocation(n,`${t}.c${s+1}.u`);if(p!==null&&l[`uniform${Be(u-4,4)}fv`](p,i[s][1]),u-8===1){const m=l.getUniformLocation(n,`${t}.c${s+1}.t`);m!==null&&l.uniform1f(m,i[s][2])}}}else{const s=l.getUniformLocation(n,t);s!==null&&l[`uniformMatrix${r.slice(1)}`](s,!1,i)}}else{const u=l.getUniformLocation(n,t);u!==null&&l[`uniform${r}`](u,i)}},get(){l.useProgram(this.program);const i=l.getUniformLocation(n,t);if(i!==null)return l.getUniform(this.program,i)}}},nn=(e,n,t=null)=>{const{gl:r}=e,l=t?~~(t*r.drawingBufferWidth):r.drawingBufferWidth,o=t?~~(t*r.drawingBufferHeight):r.drawingBufferHeight,i=r.createTexture();return r.bindTexture(r.TEXTURE_2D,i),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texStorage2D(r.TEXTURE_2D,1,n,l,o),{texture:i,width:l,height:o}},_t=(e,n,t,r,l=[])=>{const o={name:n,vertex:t,fragment:r,...Hc(e,n,t,r,l),recompileProgram(i){this.recompile(i,this.vertex,this.fragment,l)}};return{[n]:o}},go=(e,n,t,r,l,o,i,u=!0,s=["position"])=>{const{gl:a}=e,p=l(e.curve?e.segments:1),m=h=>[{name:"viewProjection",type:"m4fv",value:Sl(Sn(4))},{name:"matrix",type:`m${h.dimensions}fv`,value:Sl(h.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"curvature",type:"1f",value:0},{name:"zoom",type:"1f",value:1},...["edge","face"].includes(n)?[{name:"segments",type:"1f",value:h.curve?h.segments:1}]:[],...["vertex","edge"].includes(n)?[{name:"thickness",type:"1f",value:0}]:[{name:"opacity",type:"1f",value:0}],...Mv(4,h.dimensions+1,1,!0).map(g=>({name:`fov${g}`,type:"1f",value:h[`fov${g}`]}))];i=i>4?9:i;const v={attributes:{},varying:s,vertex:t,type:n,fragment:r,...Hc(e,n,...gs(e,t,r),m(e)),recompileProgram(h){const[g,y]=gs(h,this.vertex,this.fragment);this.recompile(h,g,y,m(h))},changeArity(h){h=h>4?9:h,this.arity!==h&&(this.arity=h,s.forEach(g=>{this.attributes[g].extend(h,new Float32Array(this.instances*h),!1)}))},extendAttributes(h){this.instances=h,s.forEach(g=>{this.attributes[g].extend(this.arity,new Float32Array(h*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(h*3),!0)},updateGeometry(h){const g=l(h.curvature&&h.curve?h.segments:1);this.indices.update(new Uint16Array(g.indices)),this.attributes.vertex.extend(3,new Float32Array(g.vertices)),this.attributes.uv.extend(2,new Float32Array(g.uvs)),this.attributes.normal.extend(3,new Float32Array(g.normals))},render(h){!this.count||!this.visible||(a.useProgram(this.program),a.bindVertexArray(this.vao),a.drawElementsInstanced(a.TRIANGLES,this.indices.count,a.UNSIGNED_SHORT,0,this.count))}};return v.visible=u,v.vao=a.createVertexArray(),v.indices=Vc(e,v.vao,new Uint16Array(p.indices)),v.attributes.vertex=Ot(e,v,"vertex",3,new Float32Array(p.vertices)),v.attributes.uv=Ot(e,v,"uv",2,new Float32Array(p.uvs)),v.attributes.normal=Ot(e,v,"normal",3,new Float32Array(p.normals)),v.attributes.color=Ot(e,v,"color",3,new Float32Array(o*3),1),s.forEach(h=>{v.attributes[h]=Ot(e,v,h,i,new Float32Array(o*i),1)}),v.arity=i,v.instances=o,v.count=0,{[n]:v}},yo=(e,n,t,r)=>{const{gl:l}=e;l.bindRenderbuffer(l.RENDERBUFFER,n),r?l.renderbufferStorageMultisample(l.RENDERBUFFER,r,t,l.drawingBufferWidth,l.drawingBufferHeight):l.renderbufferStorage(l.RENDERBUFFER,t,l.drawingBufferWidth,l.drawingBufferHeight),l.bindRenderbuffer(l.RENDERBUFFER,null)},fp=document.createElement("canvas"),xs=fp.getContext("webgl2"),dp=xs.getParameter(xs.MAX_SAMPLES),vp=["perspective","stereographic","orthographic","klein","inverted","joukowsky","upperhalf","band","cross","heart","teardrop","square","ring"],pp=["auto","linear","sine","quadratic","cubic","quartic","quintic","exponential","circular","back","elastic","bounce","inverse_sine","inverse_quadratic","inverse_cubic","inverse_quartic","inverse_quintic"],Vp=["","knuthbendix","toddcoxeter","fundamental"],hp=["lambert","phong","blinn-phong","toon"],Fn={neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},exposure:.75,lighting:!1,opacity:.05,transparency:"blend",color:({word:e})=>en(e.length*.17%1,.5,.6)},synthwave:{background:[...en(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},exposure:.75,lighting:!1,opacity:.12,afterImage:.7,transparency:"blend",color:({word:e})=>en((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],glow:!1,lighting:"phong",opacity:.4,transparency:"blend",color:({word:e})=>en(e.length*.03%1,1,.8)},oit:{background:[1,1,1,1],glow:!1,lighting:"blinn-phong",opacity:.3,transparency:"oit",color:({word:e})=>en(e.length*.03%1,1,.8)},reflection:{background:[1,1,1,1],glow:!1,lighting:"toon",opacity:.6,transparency:"blend",color:({word:e},n,{dimensions:t,showFaces:r})=>{const l=e.length?Fv(e[e.length-1])/t:0;return en(l%1,1,n==="face"?.6:r?.05:.8)}},pure:{background:[0,0,0,1],glow:!1,lighting:"lambert",opacity:1,color:({word:e})=>en(e.length*.03%1,.75,.7)},plain:{extended:!0,background:[1,1,1,1],glow:!1,lighting:!1,opacity:1,color:({word:e})=>en(e.length*.06%1,.7,.5)},plainblack:{extended:!0,background:[1,1,1,1],glow:!1,lighting:!1,opacity:1,color:({word:e},n)=>n==="face"?new Array(3).fill(1-zv(.9,e.length+1)):[0,0,0]}},Es={dimensions:4,coxeter:[[1,5,2,2],[5,1,3,2],[2,3,1,4],[2,2,4,1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],matrix:[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],mirrors:[1,0,0,0],extended:!1,order:10,curve:!0,segments:32,easing:"auto",showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,showFaces:!1,grouper:"",controls:"space",ambiance:"neon",centered:null,zoom:1.5,fov3:90,projection3:"perspective",fov4:90,projection4:"stereographic",msaa:window.devicePixelRatio<=1,msaaSamples:dp,subsampling:window.devicePixelRatio},mp=e=>{if(e.coxeter.length!==e.dimensions||e.coxeter.some(n=>n.length!==e.dimensions)){const n=e.coxeter;e.coxeter=new Array(e.dimensions).fill().map((t,r)=>new Array(e.dimensions).fill().map((l,o)=>r===o?1:r===o+1||r+1===o?3:2));for(let t=0;t<Be(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.coxeter[t][r]=n[t][r],e.coxeter[r][t]=n[t][r]}if(e.mirrors.length!==e.dimensions){const n=e.mirrors;e.mirrors=new Array(e.dimensions).fill(0);for(let t=0;t<Be(n.length,e.dimensions);t++)e.mirrors[t]=n[t]}if(e.stellation.length!==e.dimensions||e.stellation.some(n=>n.length!==e.dimensions)){const n=e.stellation;e.stellation=new Array(e.dimensions).fill().map(()=>new Array(e.dimensions).fill(1));for(let t=0;t<Be(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.stellation[t][r]=n[t][r],e.stellation[r][t]=n[r][t]}return e},Wp=(e,n=[])=>{const t={...e},r=[];Object.entries(t).forEach(([l,o])=>{typeof Es[l]=="number"||l.startsWith("fov")?(o===""||isNaN(o))&&(delete t[l],r.push(l)):Array.isArray(Es[l])&&(Array.isArray(o[0])?o.find(i=>i.find(u=>o===""||l!=="coxeter"&&isNaN(u)))&&(delete t[l],r.push(l)):o.find(i=>o===""||isNaN(i)&&!(l==="mirrors"&&Iv.includes(i)))&&(delete t[l],r.push(l)))}),r.includes("coxeter")||mp(t),(t.matrix.length!==t.dimensions||t.matrix.some(l=>l.length!==t.dimensions))&&(t.matrix=Sn(t.dimensions)),n.includes("dimensions")&&t.dimensions>=4&&(t.projection3="perspective");for(let l=4;l<=9;l++)l<=t.dimensions&&!t[`fov${l}`]&&!r.includes(`fov${l}`)&&(t[`fov${l}`]=90),l<=t.dimensions&&(!t[`projection${l}`]||n.includes("dimensions"))&&!r.includes(`projection${l}`)&&(t[`projection${l}`]=l===t.dimensions?t[`projection${l+1}`]||"stereographic":"perspective"),l>t.dimensions&&t[`fov${l}`]&&delete t[`fov${l}`],l>t.dimensions&&t[`projection${l}`]&&delete t[`projection${l}`];return{params:t,badParams:r}},gp=(e,n,t,r,l)=>{let o=!0,i=0,u=1;if(l&&["∞","inf","Infinity"].includes(e))e="∞",i=0;else if(l&&e.endsWith("i")){const s=e.slice(0,-1);i=-(s===""?1:parseInt(s)),e=`${i===-1?"":-i}i`}else if(e.includes("/")){const[s,a]=e.split("/");i=s===""?"":parseInt(s),u=a===""?"":parseInt(a),u===1?e=`${i}`:e=`${i}/${u}`}else i=e===""?"":parseInt(e);return o=!(l&&i===1||i===""||isNaN(i)||i<n||i>t||r%1===0&&i%r!==0||isNaN(u)||u<n||u>t||r%1===0&&u%r!==0),{valid:o,raw:e,value:i,fraction:u}};function yp({name:e,label:n,min:t=0,max:r=1/0,step:l=1,value:o,coxeter:i,fraction:u,fractionName:s,toggler:a,togglerName:p,onChange:m,...v}){i&&(t=-1/0);const h=X.useCallback(()=>o<0&&i?`${o===-1?"":-o}i`:o===0&&i?"∞":s&&u>1?`${o}/${u}`:`${o}`,[i,u,s,o]),[g,y]=X.useState(h);X.useEffect(()=>{y(h())},[i,h,u,s,o]);const[E,f]=X.useState(!0),c=X.useCallback(k=>{const N=gp(k,t,r,l,i);y(N.raw),f(N.valid),N.valid&&(m(e,N.value),s&&m(s,N.fraction))},[i,s,r,t,e,m,l]),d=X.useCallback(()=>{if(!E){c(i?"3":`${t}`);return}if(i){if(g==="2"){c("∞");return}if(g==="∞"){c("i");return}if(g.endsWith("i")){const k=g.slice(0,-1);let N=(k===""?1:parseInt(k))+1;c(`${N}i`);return}}if(g!==`${t}`)if(g.includes("/"))c((parseInt(g.split("/")[0])-l).toString());else{const k=parseInt(g)-l;l>0&&l<1?c(k.toFixed(l.toString().split(".")[1].length)):c(k.toString())}},[i,t,g,l,c,E]),x=X.useCallback(()=>{if(!E){c(i?"3":`${t}`);return}if(i){if(g==="∞"){c("2");return}if(g==="i"){c("∞");return}if(g.endsWith("i")){const k=g.slice(0,-1);let N=parseInt(k)-1;N===1&&(N=""),c(`${N}i`);return}}if(g!==`${r}`)if(g.includes("/"))c((parseInt(g.split("/")[0])+l).toString());else{const k=parseInt(g)+l;l>0&&l<1?c(k.toFixed(l.toString().split(".")[1].length)):c(k.toString())}},[i,r,t,g,l,c,E]),w=k=>{const N=k.target.value;c(N)},I=k=>{m(k.target.name,k.target.checked)};return C.jsxs("label",{className:`number ${E?"valid":"invalid"}`,children:[n&&C.jsx("span",{className:"number-label",children:n}),p&&C.jsx("input",{type:"checkbox",name:p,checked:a,onChange:I}),(!p||a)&&C.jsxs("div",{className:"number-control",children:[C.jsx("input",{type:"text",name:e,value:g,style:{width:`${g.length+.25}ch`},onChange:w,...v}),C.jsx("button",{className:"plusminus minus",onClick:d,tabIndex:-1,children:"−"}),C.jsx("button",{className:"plusminus plus",onClick:x,tabIndex:-1,children:"+"})]})]})}function xp({i:e,j:n,value:t,stellation:r,onChange:l}){return C.jsx("div",{className:"coxeter-value",children:C.jsx(yp,{name:`coxeter-${e}-${n}`,value:t,onChange:l,coxeter:!0,fraction:r,fractionName:`stellation-${e}-${n}`})})}function Ss({type:e}){return C.jsx("svg",{className:"coxeter-link",viewBox:"0 0 24 16",children:C.jsx("path",{d:"M 0 8 L 24 8",strokeWidth:e==="bold"?3:1,stroke:"currentColor",strokeDasharray:e==="dashed"?"1 1":""})})}const Yr=6,Vn=14,Dt={active:C.jsxs(C.Fragment,{children:[C.jsx("circle",{cx:"16",cy:"16",r:Vn}),C.jsx("circle",{cx:"16",cy:"16",r:Yr,fill:"currentColor"})]}),inactive:C.jsx(C.Fragment,{children:C.jsx("circle",{cx:"16",cy:"16",r:Yr,fill:"currentColor"})}),snub:C.jsx(C.Fragment,{children:C.jsx("circle",{cx:"16",cy:"16",r:Vn})}),holosnub:C.jsxs(C.Fragment,{children:[C.jsx("circle",{cx:"16",cy:"16",r:Vn}),C.jsx("circle",{cx:"16",cy:"16",r:Yr})]}),custom:C.jsxs(C.Fragment,{children:[C.jsx("circle",{cx:"16",cy:"16",r:Vn}),C.jsx("path",{d:"M 10 14 L 10 18 L 22 18 L 22 14"})]}),activeVoid:C.jsxs(C.Fragment,{children:[C.jsx("circle",{cx:"16",cy:"16",r:Vn}),C.jsx("path",{d:"M 6 6 L 26 26"}),C.jsx("path",{d:"M 6 26 L 26 6"})]}),void:C.jsxs(C.Fragment,{children:[C.jsx("path",{d:"M 10 10 L 22 22"}),C.jsx("path",{d:"M 10 22 L 22 10"})]})};function Ep({index:e,value:n,onChange:t}){const r=X.useRef(null),[l,o]=X.useState(!1),i=Ac(n),u=()=>{const m=po[i==="active"?"inactive":"active"];t(e,m)},s=p=>{const m=Object.keys(Dt),v=m.indexOf(i),h=m[(m.length+v+Uc(p.deltaY))%m.length],g=po[h];t(e,g)},a=p=>{p.preventDefault(),o(!l)};return X.useEffect(()=>{const p=m=>{r.current.contains(m.target)||o(!1)};if(l)return window.addEventListener("mouseup",p),()=>{window.removeEventListener("mouseup",p)}},[l]),C.jsxs("div",{className:"coxeter-node",title:i,ref:r,children:[C.jsx("svg",{className:`coxeter-graphic ${i}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:u,onContextMenu:a,onWheel:s,children:Dt[i]}),i==="custom"&&C.jsx("input",{type:"number",value:n,step:".01",style:{width:`${n.toString().length+1.5}ch`},onChange:p=>t(e,p.target.value)}),l&&C.jsx("div",{className:"coxeter-node-menu",children:Object.keys(Dt).filter(p=>p!==i).map(p=>C.jsx("svg",{className:`coxeter-graphic ${p}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:()=>{t(e,po[p]),o(!1)},children:Dt[p]},p))})]})}const ws=(e,n)=>e[n].some((t,r)=>r<n&&t<0)?"dashed":e[n].some((t,r)=>r<n&&t===0)?"bold":"solid";function Gp({dimensions:e,coxeter:n,mirrors:t,stellation:r,extended:l,onChange:o}){const[i,u]=X.useState(1),s=X.useRef(),a=X.useCallback(()=>{if(o("extended",!l),l){const v=n.map(h=>h.slice());for(let h=0;h<e;h++)for(let g=0;g<h-1;g++)v[h][g]=2,v[g][h]=2;o("coxeter",v)}},[l,o,n,e]),p=X.useCallback((v,h)=>{if(v.startsWith("coxeter")){const[g,y]=v.split("-").slice(1).map(f=>+f),E=n.map(f=>f.slice());E[g][y]=h,E[y][g]=h,o("coxeter",E)}if(v.startsWith("stellation")){const[g,y]=v.split("-").slice(1).map(f=>+f),E=r.map(f=>f.slice());E[g][y]=h,E[y][g]=h,o("stellation",E)}},[n,o,r]),m=X.useCallback((v,h)=>{const g=t.slice();g[v]=h,o("mirrors",g)},[t,o]);return X.useEffect(()=>{const v=()=>{if(!s.current)return;const h=Be(1,(window.innerWidth-125)/s.current.offsetWidth);u(h)};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[e]),C.jsxs("aside",{className:"coxeters",style:i===1?void 0:{transform:`scale(${i})`},ref:s,children:[C.jsx("div",{className:"coxeter-matrix",children:[...Array(e).keys()].map(v=>C.jsxs(X.Fragment,{children:[v>0&&C.jsx("div",{className:"coxeter-column",children:[...Array(v).keys()].map(h=>(l||v===h+1)&&C.jsx(xp,{i:v,j:h,value:n[v][h],stellation:r[v][h],onChange:p},`${v}x${h}`))}),v>0&&C.jsx(Ss,{type:ws(n,v)}),C.jsx(Ep,{index:v,value:t[v],onChange:m}),v<e-1&&C.jsx(Ss,{type:ws(n,v+1)})]},v))}),C.jsxs("div",{className:"coxeter-toggles",children:[e>2&&C.jsx("button",{className:"button",onClick:()=>o("dimensions",e-1),title:"Decrease dimensions",children:"−"}),e<9&&C.jsx("button",{className:"button",onClick:()=>o("dimensions",e+1),title:"Increase dimensions",children:"+"}),C.jsx("button",{className:"button",onClick:a,title:"extended mode",children:l?"▲":"▼"})]})]})}const tn=32,Ns=18;function Qp({coxeter:e,mirrors:n,stellation:t}){const r=e.length,l=n.map((y,E)=>{const f=Ac(y);return{n:E,type:f,i:E,j:0,r:f==="inactive"?Yr:Vn}});for(let y=0;y<r;y++)for(let E=r-1;E>y+1;E--)if(e[y][E]!==2){const f=y===0,c=E===r-1,d=!f&&!c,x=E-y+1,w=Kr(x-1)/2,I=2*Math.PI/x,k={i:l[y].i+w,j:l[y].j+(d?-w*Le((2+x)/4*I):0)};for(let N=y;N<=E;N++){let M=N-y+(f?1:c?x/2:(2+x)/4);l[N].i=k.i+w*cn(I*M),l[N].j=k.j+w*Le(I*M)}for(let N=E+1;N<r;N++)l[N].i-=E-y,l[N].i+=2*w;y=E-1;break}const o=[];for(let y=0;y<r;y++)for(let E=0;E<y;E++)if(e[y][E]!==2){const f=e[y][E],c=t[y][E];let d=`${f===0?"∞":f<0?`${f===-1?"":-f}i`:f}`;c>1&&(d+=`/${c}`),d==="3"&&(d=""),o.push({source:l[y],target:l[E],value:d,type:f<0?"dashed":f===0?"bold":"solid"})}const i=l.map(({i:y})=>y),u=l.map(({j:y})=>y),s=Be(...i),a=Pt(...i),p=Be(...u),m=Pt(...u);let v=0,h=0;for(let y=0;y<l.length;y++){const E=l[y];E.x=(E.i-s)*2*tn,E.y=(E.j-p)*2*tn,v=Pt(v,E.x),h=Pt(h,E.y)}const g=y=>y+Pt(y-1,0);return C.jsxs("svg",{className:"coxeter-diagram",viewBox:`${-tn/2} ${-tn/2} ${v+tn} ${h+tn}`,width:`${g(a-s+1)}em`,height:`${g(m-p+1)+.5}em`,strokeWidth:"2",fill:"transparent",stroke:"currentColor",children:[l.map(({n:y,type:E,x:f,y:c,r:d})=>C.jsx("g",{className:"coxeter-diagram-node",transform:`translate(${f-tn/2} ${c-tn/2})`,title:E,children:Dt[E]},y)),o.map(({source:y,target:E,value:f,type:c})=>{const d={x:y.x,y:y.y},x={x:E.x,y:E.y},w={},I=_v(x.y-d.y,x.x-d.x);return w.x=(d.x+x.x)/2+(Ns+(f.length-2)*5)*cn(I-He/2),w.y=(d.y+x.y)/2+Ns*Le(I-He/2),d.x+=(y.r+1)*cn(I),d.y+=(y.r+1)*Le(I),x.x-=(E.r+1)*cn(I),x.y-=(E.r+1)*Le(I),C.jsxs("g",{className:"coxeter-diagram-link",children:[C.jsx("path",{d:`M ${d.x} ${d.y} L ${x.x} ${x.y}`,strokeWidth:c==="bold"?"4":"2",stroke:"currentColor",strokeDasharray:c==="dashed"?"1 1":""}),C.jsx("text",{style:{fontSize:"1.25rem"},stroke:"none",fill:"currentColor",textAnchor:"middle",dominantBaseline:"middle",x:w.x,y:w.y,children:f})]},`${y.n}-${E.n}`)})]})}export{Vp as A,pp as B,Qp as C,Fn as D,Mv as E,vp as F,Gp as G,Lp as H,Wp as I,Op as J,Dp as K,Mp as L,cu as M,yp as N,mp as O,He as P,cn as a,st as b,Ip as c,Uc as d,Np as e,Pt as f,Sn as g,Ap as h,kp as i,Sl as j,Rv as k,wp as l,Sp as m,Qr as n,ip as o,Fp as p,Hp as q,X as r,Kr as s,op as t,Bp as u,Up as v,$p as w,C as x,Es as y,Be as z};
