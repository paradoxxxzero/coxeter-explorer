(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();var Wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ns={exports:{}},wl={},ks={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),Qc=Symbol.for("react.portal"),Kc=Symbol.for("react.fragment"),Jc=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),Yc=Symbol.for("react.provider"),qc=Symbol.for("react.context"),Zc=Symbol.for("react.forward_ref"),bc=Symbol.for("react.suspense"),ef=Symbol.for("react.memo"),nf=Symbol.for("react.lazy"),ou=Symbol.iterator;function tf(e){return e===null||typeof e!="object"?null:(e=ou&&e[ou]||e["@@iterator"],typeof e=="function"?e:null)}var Ts={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Is=Object.assign,Rs={};function mt(e,n,t){this.props=e,this.context=n,this.refs=Rs,this.updater=t||Ts}mt.prototype.isReactComponent={};mt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};mt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cs(){}Cs.prototype=mt.prototype;function co(e,n,t){this.props=e,this.context=n,this.refs=Rs,this.updater=t||Ts}var fo=co.prototype=new Cs;fo.constructor=co;Is(fo,mt.prototype);fo.isPureReactComponent=!0;var uu=Array.isArray,Ps=Object.prototype.hasOwnProperty,vo={current:null},zs={key:!0,ref:!0,__self:!0,__source:!0};function Os(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)Ps.call(n,r)&&!zs.hasOwnProperty(r)&&(l[r]=n[r]);var u=arguments.length-2;if(u===1)l.children=t;else if(1<u){for(var s=Array(u),a=0;a<u;a++)s[a]=arguments[a+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:sr,type:e,key:i,ref:o,props:l,_owner:vo.current}}function rf(e,n){return{$$typeof:sr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function po(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function lf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var su=/\/+/g;function $l(e,n){return typeof e=="object"&&e!==null&&e.key!=null?lf(""+e.key):n.toString(36)}function Mr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case sr:case Qc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+$l(o,0):r,uu(l)?(t="",e!=null&&(t=e.replace(su,"$&/")+"/"),Mr(l,n,t,"",function(a){return a})):l!=null&&(po(l)&&(l=rf(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(su,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",uu(e))for(var u=0;u<e.length;u++){i=e[u];var s=r+$l(i,u);o+=Mr(i,n,t,s,l)}else if(s=tf(e),typeof s=="function")for(e=s.call(e),u=0;!(i=e.next()).done;)i=i.value,s=r+$l(i,u++),o+=Mr(i,n,t,s,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function hr(e,n,t){if(e==null)return e;var r=[],l=0;return Mr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function of(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},Fr={transition:null},uf={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Fr,ReactCurrentOwner:vo};_.Children={map:hr,forEach:function(e,n,t){hr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return hr(e,function(){n++}),n},toArray:function(e){return hr(e,function(n){return n})||[]},only:function(e){if(!po(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=mt;_.Fragment=Kc;_.Profiler=Xc;_.PureComponent=co;_.StrictMode=Jc;_.Suspense=bc;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uf;_.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Is({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=vo.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)Ps.call(n,s)&&!zs.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var a=0;a<s;a++)u[a]=arguments[a+2];r.children=u}return{$$typeof:sr,type:e.type,key:l,ref:i,props:r,_owner:o}};_.createContext=function(e){return e={$$typeof:qc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yc,_context:e},e.Consumer=e};_.createElement=Os;_.createFactory=function(e){var n=Os.bind(null,e);return n.type=e,n};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:Zc,render:e}};_.isValidElement=po;_.lazy=function(e){return{$$typeof:nf,_payload:{_status:-1,_result:e},_init:of}};_.memo=function(e,n){return{$$typeof:ef,type:e,compare:n===void 0?null:n}};_.startTransition=function(e){var n=Fr.transition;Fr.transition={};try{e()}finally{Fr.transition=n}};_.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};_.useCallback=function(e,n){return se.current.useCallback(e,n)};_.useContext=function(e){return se.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return se.current.useDeferredValue(e)};_.useEffect=function(e,n){return se.current.useEffect(e,n)};_.useId=function(){return se.current.useId()};_.useImperativeHandle=function(e,n,t){return se.current.useImperativeHandle(e,n,t)};_.useInsertionEffect=function(e,n){return se.current.useInsertionEffect(e,n)};_.useLayoutEffect=function(e,n){return se.current.useLayoutEffect(e,n)};_.useMemo=function(e,n){return se.current.useMemo(e,n)};_.useReducer=function(e,n,t){return se.current.useReducer(e,n,t)};_.useRef=function(e){return se.current.useRef(e)};_.useState=function(e){return se.current.useState(e)};_.useSyncExternalStore=function(e,n,t){return se.current.useSyncExternalStore(e,n,t)};_.useTransition=function(){return se.current.useTransition()};_.version="18.2.0";ks.exports=_;var re=ks.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=re,af=Symbol.for("react.element"),cf=Symbol.for("react.fragment"),ff=Object.prototype.hasOwnProperty,df=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vf={key:!0,ref:!0,__self:!0,__source:!0};function _s(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)ff.call(n,r)&&!vf.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:af,type:e,key:i,ref:o,props:l,_owner:df.current}}wl.Fragment=cf;wl.jsx=_s;wl.jsxs=_s;Ns.exports=wl;var C=Ns.exports,au={},Ms={exports:{}},xe={},Fs={exports:{}},As={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(R,P){var z=R.length;R.push(P);e:for(;0<z;){var W=z-1>>>1,X=R[W];if(0<l(X,P))R[W]=P,R[z]=X,z=W;else break e}}function t(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var P=R[0],z=R.pop();if(z!==P){R[0]=z;e:for(var W=0,X=R.length,vr=X>>>1;W<vr;){var In=2*(W+1)-1,Bl=R[In],Rn=In+1,pr=R[Rn];if(0>l(Bl,z))Rn<X&&0>l(pr,Bl)?(R[W]=pr,R[Rn]=z,W=Rn):(R[W]=Bl,R[In]=z,W=In);else if(Rn<X&&0>l(pr,z))R[W]=pr,R[Rn]=z,W=Rn;else break e}}return P}function l(R,P){var z=R.sortIndex-P.sortIndex;return z!==0?z:R.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var s=[],a=[],h=1,m=null,v=3,p=!1,g=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(R){for(var P=t(a);P!==null;){if(P.callback===null)r(a);else if(P.startTime<=R)r(a),P.sortIndex=P.expirationTime,n(s,P);else break;P=t(a)}}function x(R){if(y=!1,f(R),!g)if(t(s)!==null)g=!0,Ll(S);else{var P=t(a);P!==null&&Ul(x,P.startTime-R)}}function S(R,P){g=!1,y&&(y=!1,d(N),N=-1),p=!0;var z=v;try{for(f(P),m=t(s);m!==null&&(!(m.expirationTime>P)||R&&!Re());){var W=m.callback;if(typeof W=="function"){m.callback=null,v=m.priorityLevel;var X=W(m.expirationTime<=P);P=e.unstable_now(),typeof X=="function"?m.callback=X:m===t(s)&&r(s),f(P)}else r(s);m=t(s)}if(m!==null)var vr=!0;else{var In=t(a);In!==null&&Ul(x,In.startTime-P),vr=!1}return vr}finally{m=null,v=z,p=!1}}var T=!1,k=null,N=-1,A=5,O=-1;function Re(){return!(e.unstable_now()-O<A)}function xt(){if(k!==null){var R=e.unstable_now();O=R;var P=!0;try{P=k(!0,R)}finally{P?Et():(T=!1,k=null)}}else T=!1}var Et;if(typeof c=="function")Et=function(){c(xt)};else if(typeof MessageChannel<"u"){var iu=new MessageChannel,Vc=iu.port2;iu.port1.onmessage=xt,Et=function(){Vc.postMessage(null)}}else Et=function(){E(xt,0)};function Ll(R){k=R,T||(T=!0,Et())}function Ul(R,P){N=E(function(){R(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){g||p||(g=!0,Ll(S))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(R){switch(v){case 1:case 2:case 3:var P=3;break;default:P=v}var z=v;v=P;try{return R()}finally{v=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,P){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var z=v;v=R;try{return P()}finally{v=z}},e.unstable_scheduleCallback=function(R,P,z){var W=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?W+z:W):z=W,R){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=z+X,R={id:h++,callback:P,priorityLevel:R,startTime:z,expirationTime:X,sortIndex:-1},z>W?(R.sortIndex=z,n(a,R),t(s)===null&&R===t(a)&&(y?(d(N),N=-1):y=!0,Ul(x,z-W))):(R.sortIndex=X,n(s,R),g||p||(g=!0,Ll(S))),R},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(R){var P=v;return function(){var z=v;v=P;try{return R.apply(this,arguments)}finally{v=z}}}})(As);Fs.exports=As;var pf=Fs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ds=re,ye=pf;function w(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var js=new Set,Gt={};function Bn(e,n){at(e,n),at(e+"Capture",n)}function at(e,n){for(Gt[e]=n,e=0;e<n.length;e++)js.add(n[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gi=Object.prototype.hasOwnProperty,hf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cu={},fu={};function mf(e){return gi.call(fu,e)?!0:gi.call(cu,e)?!1:hf.test(e)?fu[e]=!0:(cu[e]=!0,!1)}function gf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yf(e,n,t,r){if(n===null||typeof n>"u"||gf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ae(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var ho=/[\-:]([a-z])/g;function mo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ho,mo);ee[n]=new ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ho,mo);ee[n]=new ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ho,mo);ee[n]=new ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function go(e,n,t,r){var l=ee.hasOwnProperty(n)?ee[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(yf(n,t,l,r)&&(t=null),r||l===null?mf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ze=Ds.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),yo=Symbol.for("react.strict_mode"),yi=Symbol.for("react.profiler"),Ls=Symbol.for("react.provider"),Us=Symbol.for("react.context"),xo=Symbol.for("react.forward_ref"),xi=Symbol.for("react.suspense"),Ei=Symbol.for("react.suspense_list"),Eo=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),Bs=Symbol.for("react.offscreen"),du=Symbol.iterator;function St(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Hl;function _t(e){if(Hl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Hl=n&&n[1]||""}return`
`+Hl+e}var Vl=!1;function Wl(e,n){if(!e||Vl)return"";Vl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var l=a.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=u);break}}}finally{Vl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?_t(e):""}function xf(e){switch(e.tag){case 5:return _t(e.type);case 16:return _t("Lazy");case 13:return _t("Suspense");case 19:return _t("SuspenseList");case 0:case 2:case 15:return e=Wl(e.type,!1),e;case 11:return e=Wl(e.type.render,!1),e;case 1:return e=Wl(e.type,!0),e;default:return""}}function Si(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Wn:return"Portal";case yi:return"Profiler";case yo:return"StrictMode";case xi:return"Suspense";case Ei:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Us:return(e.displayName||"Context")+".Consumer";case Ls:return(e._context.displayName||"Context")+".Provider";case xo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Eo:return n=e.displayName||null,n!==null?n:Si(e.type)||"Memo";case rn:n=e._payload,e=e._init;try{return Si(e(n))}catch{}}return null}function Ef(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Si(n);case 8:return n===yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $s(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Sf(e){var n=$s(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function gr(e){e._valueTracker||(e._valueTracker=Sf(e))}function Hs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=$s(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wi(e,n){var t=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function vu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=En(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Vs(e,n){n=n.checked,n!=null&&go(e,"checked",n,!1)}function Ni(e,n){Vs(e,n);var t=En(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ki(e,n.type,t):n.hasOwnProperty("defaultValue")&&ki(e,n.type,En(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function pu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ki(e,n,t){(n!=="number"||qr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Mt=Array.isArray;function tt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+En(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Ti(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(w(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(w(92));if(Mt(t)){if(1<t.length)throw Error(w(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:En(t)}}function Ws(e,n){var t=En(n.value),r=En(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function mu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Gs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ii(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Gs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,Qs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Qt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Dt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wf=["Webkit","ms","Moz","O"];Object.keys(Dt).forEach(function(e){wf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Dt[n]=Dt[e]})});function Ks(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Dt.hasOwnProperty(e)&&Dt[e]?(""+n).trim():n+"px"}function Js(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Ks(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Nf=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ri(e,n){if(n){if(Nf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(w(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(w(61))}if(n.style!=null&&typeof n.style!="object")throw Error(w(62))}}function Ci(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=null;function So(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zi=null,rt=null,lt=null;function gu(e){if(e=fr(e)){if(typeof zi!="function")throw Error(w(280));var n=e.stateNode;n&&(n=Rl(n),zi(e.stateNode,e.type,n))}}function Xs(e){rt?lt?lt.push(e):lt=[e]:rt=e}function Ys(){if(rt){var e=rt,n=lt;if(lt=rt=null,gu(e),n)for(e=0;e<n.length;e++)gu(n[e])}}function qs(e,n){return e(n)}function Zs(){}var Gl=!1;function bs(e,n,t){if(Gl)return e(n,t);Gl=!0;try{return qs(e,n,t)}finally{Gl=!1,(rt!==null||lt!==null)&&(Zs(),Ys())}}function Kt(e,n){var t=e.stateNode;if(t===null)return null;var r=Rl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(w(231,n,typeof t));return t}var Oi=!1;if(Je)try{var wt={};Object.defineProperty(wt,"passive",{get:function(){Oi=!0}}),window.addEventListener("test",wt,wt),window.removeEventListener("test",wt,wt)}catch{Oi=!1}function kf(e,n,t,r,l,i,o,u,s){var a=Array.prototype.slice.call(arguments,3);try{n.apply(t,a)}catch(h){this.onError(h)}}var jt=!1,Zr=null,br=!1,_i=null,Tf={onError:function(e){jt=!0,Zr=e}};function If(e,n,t,r,l,i,o,u,s){jt=!1,Zr=null,kf.apply(Tf,arguments)}function Rf(e,n,t,r,l,i,o,u,s){if(If.apply(this,arguments),jt){if(jt){var a=Zr;jt=!1,Zr=null}else throw Error(w(198));br||(br=!0,_i=a)}}function $n(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ea(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function yu(e){if($n(e)!==e)throw Error(w(188))}function Cf(e){var n=e.alternate;if(!n){if(n=$n(e),n===null)throw Error(w(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return yu(l),e;if(i===r)return yu(l),n;i=i.sibling}throw Error(w(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o)throw Error(w(189))}}if(t.alternate!==r)throw Error(w(190))}if(t.tag!==3)throw Error(w(188));return t.stateNode.current===t?e:n}function na(e){return e=Cf(e),e!==null?ta(e):null}function ta(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ta(e);if(n!==null)return n;e=e.sibling}return null}var ra=ye.unstable_scheduleCallback,xu=ye.unstable_cancelCallback,Pf=ye.unstable_shouldYield,zf=ye.unstable_requestPaint,G=ye.unstable_now,Of=ye.unstable_getCurrentPriorityLevel,wo=ye.unstable_ImmediatePriority,la=ye.unstable_UserBlockingPriority,el=ye.unstable_NormalPriority,_f=ye.unstable_LowPriority,ia=ye.unstable_IdlePriority,Nl=null,Ue=null;function Mf(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(Nl,e,void 0,(e.current.flags&128)===128)}catch{}}var _e=Math.clz32?Math.clz32:Df,Ff=Math.log,Af=Math.LN2;function Df(e){return e>>>=0,e===0?32:31-(Ff(e)/Af|0)|0}var xr=64,Er=4194304;function Ft(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function nl(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~l;u!==0?r=Ft(u):(i&=o,i!==0&&(r=Ft(i)))}else o=t&~l,o!==0?r=Ft(o):i!==0&&(r=Ft(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-_e(n),l=1<<t,r|=e[t],n&=~l;return r}function jf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-_e(i),u=1<<o,s=l[o];s===-1?(!(u&t)||u&r)&&(l[o]=jf(u,n)):s<=n&&(e.expiredLanes|=u),i&=~u}}function Mi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function oa(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Ql(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ar(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-_e(n),e[n]=t}function Uf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-_e(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function No(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-_e(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var F=0;function ua(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sa,ko,aa,ca,fa,Fi=!1,Sr=[],fn=null,dn=null,vn=null,Jt=new Map,Xt=new Map,on=[],Bf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eu(e,n){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Jt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xt.delete(n.pointerId)}}function Nt(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=fr(n),n!==null&&ko(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function $f(e,n,t,r,l){switch(n){case"focusin":return fn=Nt(fn,e,n,t,r,l),!0;case"dragenter":return dn=Nt(dn,e,n,t,r,l),!0;case"mouseover":return vn=Nt(vn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return Jt.set(i,Nt(Jt.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Xt.set(i,Nt(Xt.get(i)||null,e,n,t,r,l)),!0}return!1}function da(e){var n=zn(e.target);if(n!==null){var t=$n(n);if(t!==null){if(n=t.tag,n===13){if(n=ea(t),n!==null){e.blockedOn=n,fa(e.priority,function(){aa(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ai(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Pi=r,t.target.dispatchEvent(r),Pi=null}else return n=fr(t),n!==null&&ko(n),e.blockedOn=t,!1;n.shift()}return!0}function Su(e,n,t){Ar(e)&&t.delete(n)}function Hf(){Fi=!1,fn!==null&&Ar(fn)&&(fn=null),dn!==null&&Ar(dn)&&(dn=null),vn!==null&&Ar(vn)&&(vn=null),Jt.forEach(Su),Xt.forEach(Su)}function kt(e,n){e.blockedOn===n&&(e.blockedOn=null,Fi||(Fi=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Hf)))}function Yt(e){function n(l){return kt(l,e)}if(0<Sr.length){kt(Sr[0],e);for(var t=1;t<Sr.length;t++){var r=Sr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&kt(fn,e),dn!==null&&kt(dn,e),vn!==null&&kt(vn,e),Jt.forEach(n),Xt.forEach(n),t=0;t<on.length;t++)r=on[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(t=on[0],t.blockedOn===null);)da(t),t.blockedOn===null&&on.shift()}var it=Ze.ReactCurrentBatchConfig,tl=!0;function Vf(e,n,t,r){var l=F,i=it.transition;it.transition=null;try{F=1,To(e,n,t,r)}finally{F=l,it.transition=i}}function Wf(e,n,t,r){var l=F,i=it.transition;it.transition=null;try{F=4,To(e,n,t,r)}finally{F=l,it.transition=i}}function To(e,n,t,r){if(tl){var l=Ai(e,n,t,r);if(l===null)ti(e,n,r,rl,t),Eu(e,r);else if($f(l,e,n,t,r))r.stopPropagation();else if(Eu(e,r),n&4&&-1<Bf.indexOf(e)){for(;l!==null;){var i=fr(l);if(i!==null&&sa(i),i=Ai(e,n,t,r),i===null&&ti(e,n,r,rl,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else ti(e,n,r,null,t)}}var rl=null;function Ai(e,n,t,r){if(rl=null,e=So(r),e=zn(e),e!==null)if(n=$n(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ea(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return rl=e,null}function va(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Of()){case wo:return 1;case la:return 4;case el:case _f:return 16;case ia:return 536870912;default:return 16}default:return 16}}var sn=null,Io=null,Dr=null;function pa(){if(Dr)return Dr;var e,n=Io,t=n.length,r,l="value"in sn?sn.value:sn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return Dr=l.slice(e,1<r?1-r:void 0)}function jr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function wu(){return!1}function Ee(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wr:wu,this.isPropagationStopped=wu,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),n}var gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ro=Ee(gt),cr=H({},gt,{view:0,detail:0}),Gf=Ee(cr),Kl,Jl,Tt,kl=H({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tt&&(Tt&&e.type==="mousemove"?(Kl=e.screenX-Tt.screenX,Jl=e.screenY-Tt.screenY):Jl=Kl=0,Tt=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:Jl}}),Nu=Ee(kl),Qf=H({},kl,{dataTransfer:0}),Kf=Ee(Qf),Jf=H({},cr,{relatedTarget:0}),Xl=Ee(Jf),Xf=H({},gt,{animationName:0,elapsedTime:0,pseudoElement:0}),Yf=Ee(Xf),qf=H({},gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zf=Ee(qf),bf=H({},gt,{data:0}),ku=Ee(bf),ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},td={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=td[e])?!!n[e]:!1}function Co(){return rd}var ld=H({},cr,{key:function(e){if(e.key){var n=ed[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Co,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),id=Ee(ld),od=H({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tu=Ee(od),ud=H({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Co}),sd=Ee(ud),ad=H({},gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),cd=Ee(ad),fd=H({},kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dd=Ee(fd),vd=[9,13,27,32],Po=Je&&"CompositionEvent"in window,Lt=null;Je&&"documentMode"in document&&(Lt=document.documentMode);var pd=Je&&"TextEvent"in window&&!Lt,ha=Je&&(!Po||Lt&&8<Lt&&11>=Lt),Iu=String.fromCharCode(32),Ru=!1;function ma(e,n){switch(e){case"keyup":return vd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ga(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function hd(e,n){switch(e){case"compositionend":return ga(n);case"keypress":return n.which!==32?null:(Ru=!0,Iu);case"textInput":return e=n.data,e===Iu&&Ru?null:e;default:return null}}function md(e,n){if(Qn)return e==="compositionend"||!Po&&ma(e,n)?(e=pa(),Dr=Io=sn=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ha&&n.locale!=="ko"?null:n.data;default:return null}}var gd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gd[e.type]:n==="textarea"}function ya(e,n,t,r){Xs(r),n=ll(n,"onChange"),0<n.length&&(t=new Ro("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ut=null,qt=null;function yd(e){Pa(e,0)}function Tl(e){var n=Xn(e);if(Hs(n))return e}function xd(e,n){if(e==="change")return n}var xa=!1;if(Je){var Yl;if(Je){var ql="oninput"in document;if(!ql){var Pu=document.createElement("div");Pu.setAttribute("oninput","return;"),ql=typeof Pu.oninput=="function"}Yl=ql}else Yl=!1;xa=Yl&&(!document.documentMode||9<document.documentMode)}function zu(){Ut&&(Ut.detachEvent("onpropertychange",Ea),qt=Ut=null)}function Ea(e){if(e.propertyName==="value"&&Tl(qt)){var n=[];ya(n,qt,e,So(e)),bs(yd,n)}}function Ed(e,n,t){e==="focusin"?(zu(),Ut=n,qt=t,Ut.attachEvent("onpropertychange",Ea)):e==="focusout"&&zu()}function Sd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tl(qt)}function wd(e,n){if(e==="click")return Tl(n)}function Nd(e,n){if(e==="input"||e==="change")return Tl(n)}function kd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:kd;function Zt(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!gi.call(n,l)||!Fe(e[l],n[l]))return!1}return!0}function Ou(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _u(e,n){var t=Ou(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ou(t)}}function Sa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function wa(){for(var e=window,n=qr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=qr(e.document)}return n}function zo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Td(e){var n=wa(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Sa(t.ownerDocument.documentElement,t)){if(r!==null&&zo(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=_u(t,i);var o=_u(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Id=Je&&"documentMode"in document&&11>=document.documentMode,Kn=null,Di=null,Bt=null,ji=!1;function Mu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ji||Kn==null||Kn!==qr(r)||(r=Kn,"selectionStart"in r&&zo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bt&&Zt(Bt,r)||(Bt=r,r=ll(Di,"onSelect"),0<r.length&&(n=new Ro("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Kn)))}function Nr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Jn={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},Zl={},Na={};Je&&(Na=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function Il(e){if(Zl[e])return Zl[e];if(!Jn[e])return e;var n=Jn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Na)return Zl[e]=n[t];return e}var ka=Il("animationend"),Ta=Il("animationiteration"),Ia=Il("animationstart"),Ra=Il("transitionend"),Ca=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,n){Ca.set(e,n),Bn(n,[e])}for(var bl=0;bl<Fu.length;bl++){var ei=Fu[bl],Rd=ei.toLowerCase(),Cd=ei[0].toUpperCase()+ei.slice(1);Nn(Rd,"on"+Cd)}Nn(ka,"onAnimationEnd");Nn(Ta,"onAnimationIteration");Nn(Ia,"onAnimationStart");Nn("dblclick","onDoubleClick");Nn("focusin","onFocus");Nn("focusout","onBlur");Nn(Ra,"onTransitionEnd");at("onMouseEnter",["mouseout","mouseover"]);at("onMouseLeave",["mouseout","mouseover"]);at("onPointerEnter",["pointerout","pointerover"]);at("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var At="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pd=new Set("cancel close invalid load scroll toggle".split(" ").concat(At));function Au(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Rf(r,n,void 0,e),e.currentTarget=null}function Pa(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],s=u.instance,a=u.currentTarget;if(u=u.listener,s!==i&&l.isPropagationStopped())break e;Au(l,u,a),i=s}else for(o=0;o<r.length;o++){if(u=r[o],s=u.instance,a=u.currentTarget,u=u.listener,s!==i&&l.isPropagationStopped())break e;Au(l,u,a),i=s}}}if(br)throw e=_i,br=!1,_i=null,e}function j(e,n){var t=n[Hi];t===void 0&&(t=n[Hi]=new Set);var r=e+"__bubble";t.has(r)||(za(n,e,2,!1),t.add(r))}function ni(e,n,t){var r=0;n&&(r|=4),za(t,e,r,n)}var kr="_reactListening"+Math.random().toString(36).slice(2);function bt(e){if(!e[kr]){e[kr]=!0,js.forEach(function(t){t!=="selectionchange"&&(Pd.has(t)||ni(t,!1,e),ni(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kr]||(n[kr]=!0,ni("selectionchange",!1,n))}}function za(e,n,t,r){switch(va(n)){case 1:var l=Vf;break;case 4:l=Wf;break;default:l=To}t=l.bind(null,n,t,e),l=void 0,!Oi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function ti(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;u!==null;){if(o=zn(u),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}u=u.parentNode}}r=r.return}bs(function(){var a=i,h=So(t),m=[];e:{var v=Ca.get(e);if(v!==void 0){var p=Ro,g=e;switch(e){case"keypress":if(jr(t)===0)break e;case"keydown":case"keyup":p=id;break;case"focusin":g="focus",p=Xl;break;case"focusout":g="blur",p=Xl;break;case"beforeblur":case"afterblur":p=Xl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Kf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sd;break;case ka:case Ta:case Ia:p=Yf;break;case Ra:p=cd;break;case"scroll":p=Gf;break;case"wheel":p=dd;break;case"copy":case"cut":case"paste":p=Zf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Tu}var y=(n&4)!==0,E=!y&&e==="scroll",d=y?v!==null?v+"Capture":null:v;y=[];for(var c=a,f;c!==null;){f=c;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,d!==null&&(x=Kt(c,d),x!=null&&y.push(er(c,x,f)))),E)break;c=c.return}0<y.length&&(v=new p(v,g,null,t,h),m.push({event:v,listeners:y}))}}if(!(n&7)){e:{if(v=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",v&&t!==Pi&&(g=t.relatedTarget||t.fromElement)&&(zn(g)||g[Xe]))break e;if((p||v)&&(v=h.window===h?h:(v=h.ownerDocument)?v.defaultView||v.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=a,g=g?zn(g):null,g!==null&&(E=$n(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=a),p!==g)){if(y=Nu,x="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Tu,x="onPointerLeave",d="onPointerEnter",c="pointer"),E=p==null?v:Xn(p),f=g==null?v:Xn(g),v=new y(x,c+"leave",p,t,h),v.target=E,v.relatedTarget=f,x=null,zn(h)===a&&(y=new y(d,c+"enter",g,t,h),y.target=f,y.relatedTarget=E,x=y),E=x,p&&g)n:{for(y=p,d=g,c=0,f=y;f;f=Hn(f))c++;for(f=0,x=d;x;x=Hn(x))f++;for(;0<c-f;)y=Hn(y),c--;for(;0<f-c;)d=Hn(d),f--;for(;c--;){if(y===d||d!==null&&y===d.alternate)break n;y=Hn(y),d=Hn(d)}y=null}else y=null;p!==null&&Du(m,v,p,y,!1),g!==null&&E!==null&&Du(m,E,g,y,!0)}}e:{if(v=a?Xn(a):window,p=v.nodeName&&v.nodeName.toLowerCase(),p==="select"||p==="input"&&v.type==="file")var S=xd;else if(Cu(v))if(xa)S=Nd;else{S=Sd;var T=Ed}else(p=v.nodeName)&&p.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(S=wd);if(S&&(S=S(e,a))){ya(m,S,t,h);break e}T&&T(e,v,a),e==="focusout"&&(T=v._wrapperState)&&T.controlled&&v.type==="number"&&ki(v,"number",v.value)}switch(T=a?Xn(a):window,e){case"focusin":(Cu(T)||T.contentEditable==="true")&&(Kn=T,Di=a,Bt=null);break;case"focusout":Bt=Di=Kn=null;break;case"mousedown":ji=!0;break;case"contextmenu":case"mouseup":case"dragend":ji=!1,Mu(m,t,h);break;case"selectionchange":if(Id)break;case"keydown":case"keyup":Mu(m,t,h)}var k;if(Po)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Qn?ma(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(ha&&t.locale!=="ko"&&(Qn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Qn&&(k=pa()):(sn=h,Io="value"in sn?sn.value:sn.textContent,Qn=!0)),T=ll(a,N),0<T.length&&(N=new ku(N,e,null,t,h),m.push({event:N,listeners:T}),k?N.data=k:(k=ga(t),k!==null&&(N.data=k)))),(k=pd?hd(e,t):md(e,t))&&(a=ll(a,"onBeforeInput"),0<a.length&&(h=new ku("onBeforeInput","beforeinput",null,t,h),m.push({event:h,listeners:a}),h.data=k))}Pa(m,n)})}function er(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ll(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Kt(e,t),i!=null&&r.unshift(er(e,i,l)),i=Kt(e,n),i!=null&&r.push(er(e,i,l))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Du(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var u=t,s=u.alternate,a=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&a!==null&&(u=a,l?(s=Kt(t,i),s!=null&&o.unshift(er(t,s,u))):l||(s=Kt(t,i),s!=null&&o.push(er(t,s,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var zd=/\r\n?/g,Od=/\u0000|\uFFFD/g;function ju(e){return(typeof e=="string"?e:""+e).replace(zd,`
`).replace(Od,"")}function Tr(e,n,t){if(n=ju(n),ju(e)!==n&&t)throw Error(w(425))}function il(){}var Li=null,Ui=null;function Bi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $i=typeof setTimeout=="function"?setTimeout:void 0,_d=typeof clearTimeout=="function"?clearTimeout:void 0,Lu=typeof Promise=="function"?Promise:void 0,Md=typeof queueMicrotask=="function"?queueMicrotask:typeof Lu<"u"?function(e){return Lu.resolve(null).then(e).catch(Fd)}:$i;function Fd(e){setTimeout(function(){throw e})}function ri(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Yt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Yt(n)}function pn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Uu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var yt=Math.random().toString(36).slice(2),je="__reactFiber$"+yt,nr="__reactProps$"+yt,Xe="__reactContainer$"+yt,Hi="__reactEvents$"+yt,Ad="__reactListeners$"+yt,Dd="__reactHandles$"+yt;function zn(e){var n=e[je];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Xe]||t[je]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Uu(e);e!==null;){if(t=e[je])return t;e=Uu(e)}return n}e=t,t=e.parentNode}return null}function fr(e){return e=e[je]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Rl(e){return e[nr]||null}var Vi=[],Yn=-1;function kn(e){return{current:e}}function L(e){0>Yn||(e.current=Vi[Yn],Vi[Yn]=null,Yn--)}function D(e,n){Yn++,Vi[Yn]=e.current,e.current=n}var Sn={},ie=kn(Sn),de=kn(!1),An=Sn;function ct(e,n){var t=e.type.contextTypes;if(!t)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function ve(e){return e=e.childContextTypes,e!=null}function ol(){L(de),L(ie)}function Bu(e,n,t){if(ie.current!==Sn)throw Error(w(168));D(ie,n),D(de,t)}function Oa(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(w(108,Ef(e)||"Unknown",l));return H({},t,r)}function ul(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,An=ie.current,D(ie,e),D(de,de.current),!0}function $u(e,n,t){var r=e.stateNode;if(!r)throw Error(w(169));t?(e=Oa(e,n,An),r.__reactInternalMemoizedMergedChildContext=e,L(de),L(ie),D(ie,e)):L(de),D(de,t)}var We=null,Cl=!1,li=!1;function _a(e){We===null?We=[e]:We.push(e)}function jd(e){Cl=!0,_a(e)}function Tn(){if(!li&&We!==null){li=!0;var e=0,n=F;try{var t=We;for(F=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}We=null,Cl=!1}catch(l){throw We!==null&&(We=We.slice(e+1)),ra(wo,Tn),l}finally{F=n,li=!1}}return null}var qn=[],Zn=0,sl=null,al=0,Se=[],we=0,Dn=null,Ge=1,Qe="";function Cn(e,n){qn[Zn++]=al,qn[Zn++]=sl,sl=e,al=n}function Ma(e,n,t){Se[we++]=Ge,Se[we++]=Qe,Se[we++]=Dn,Dn=e;var r=Ge;e=Qe;var l=32-_e(r)-1;r&=~(1<<l),t+=1;var i=32-_e(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ge=1<<32-_e(n)+l|t<<l|r,Qe=i+e}else Ge=1<<i|t<<l|r,Qe=e}function Oo(e){e.return!==null&&(Cn(e,1),Ma(e,1,0))}function _o(e){for(;e===sl;)sl=qn[--Zn],qn[Zn]=null,al=qn[--Zn],qn[Zn]=null;for(;e===Dn;)Dn=Se[--we],Se[we]=null,Qe=Se[--we],Se[we]=null,Ge=Se[--we],Se[we]=null}var ge=null,me=null,U=!1,Oe=null;function Fa(e,n){var t=Ne(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Hu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ge=e,me=pn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ge=e,me=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Dn!==null?{id:Ge,overflow:Qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ne(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ge=e,me=null,!0):!1;default:return!1}}function Wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gi(e){if(U){var n=me;if(n){var t=n;if(!Hu(e,n)){if(Wi(e))throw Error(w(418));n=pn(t.nextSibling);var r=ge;n&&Hu(e,n)?Fa(r,t):(e.flags=e.flags&-4097|2,U=!1,ge=e)}}else{if(Wi(e))throw Error(w(418));e.flags=e.flags&-4097|2,U=!1,ge=e}}}function Vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function Ir(e){if(e!==ge)return!1;if(!U)return Vu(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Bi(e.type,e.memoizedProps)),n&&(n=me)){if(Wi(e))throw Aa(),Error(w(418));for(;n;)Fa(e,n),n=pn(n.nextSibling)}if(Vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){me=pn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}me=null}}else me=ge?pn(e.stateNode.nextSibling):null;return!0}function Aa(){for(var e=me;e;)e=pn(e.nextSibling)}function ft(){me=ge=null,U=!1}function Mo(e){Oe===null?Oe=[e]:Oe.push(e)}var Ld=Ze.ReactCurrentBatchConfig;function Pe(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var cl=kn(null),fl=null,bn=null,Fo=null;function Ao(){Fo=bn=fl=null}function Do(e){var n=cl.current;L(cl),e._currentValue=n}function Qi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ot(e,n){fl=e,Fo=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(fe=!0),e.firstContext=null)}function Te(e){var n=e._currentValue;if(Fo!==e)if(e={context:e,memoizedValue:n,next:null},bn===null){if(fl===null)throw Error(w(308));bn=e,fl.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return n}var On=null;function jo(e){On===null?On=[e]:On.push(e)}function Da(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,jo(n)):(t.next=l.next,l.next=t),n.interleaved=t,Ye(e,r)}function Ye(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ln=!1;function Lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ja(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function hn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Ye(e,t)}return l=r.interleaved,l===null?(n.next=n,jo(r)):(n.next=l.next,l.next=n),r.interleaved=n,Ye(e,t)}function Lr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,No(e,t)}}function Wu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function dl(e,n,t,r){var l=e.updateQueue;ln=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,a=s.next;s.next=null,o===null?i=a:o.next=a,o=s;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==o&&(u===null?h.firstBaseUpdate=a:u.next=a,h.lastBaseUpdate=s))}if(i!==null){var m=l.baseState;o=0,h=a=s=null,u=i;do{var v=u.lane,p=u.eventTime;if((r&v)===v){h!==null&&(h=h.next={eventTime:p,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var g=e,y=u;switch(v=n,p=t,y.tag){case 1:if(g=y.payload,typeof g=="function"){m=g.call(p,m,v);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,v=typeof g=="function"?g.call(p,m,v):g,v==null)break e;m=H({},m,v);break e;case 2:ln=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,v=l.effects,v===null?l.effects=[u]:v.push(u))}else p={eventTime:p,lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(a=h=p,s=m):h=h.next=p,o|=v;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;v=u,u=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(1);if(h===null&&(s=m),l.baseState=s,l.firstBaseUpdate=a,l.lastBaseUpdate=h,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);Ln|=o,e.lanes=o,e.memoizedState=m}}function Gu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var La=new Ds.Component().refs;function Ki(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:H({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Pl={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ue(),l=gn(e),i=Ke(r,l);i.payload=n,t!=null&&(i.callback=t),n=hn(e,i,l),n!==null&&(Me(n,e,l,r),Lr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ue(),l=gn(e),i=Ke(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=hn(e,i,l),n!==null&&(Me(n,e,l,r),Lr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ue(),r=gn(e),l=Ke(t,r);l.tag=2,n!=null&&(l.callback=n),n=hn(e,l,r),n!==null&&(Me(n,e,r,t),Lr(n,e,r))}};function Qu(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Zt(t,r)||!Zt(l,i):!0}function Ua(e,n,t){var r=!1,l=Sn,i=n.contextType;return typeof i=="object"&&i!==null?i=Te(i):(l=ve(n)?An:ie.current,r=n.contextTypes,i=(r=r!=null)?ct(e,l):Sn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Pl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function Ku(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Pl.enqueueReplaceState(n,n.state,null)}function Ji(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs=La,Lo(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=Te(i):(i=ve(n)?An:ie.current,l.context=ct(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ki(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&Pl.enqueueReplaceState(l,l.state,null),dl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function It(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(w(309));var r=t.stateNode}if(!r)throw Error(w(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var u=l.refs;u===La&&(u=l.refs={}),o===null?delete u[i]:u[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(w(284));if(!t._owner)throw Error(w(290,e))}return e}function Rr(e,n){throw e=Object.prototype.toString.call(n),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ju(e){var n=e._init;return n(e._payload)}function Ba(e){function n(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function l(d,c){return d=yn(d,c),d.index=0,d.sibling=null,d}function i(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,c,f,x){return c===null||c.tag!==6?(c=fi(f,d.mode,x),c.return=d,c):(c=l(c,f),c.return=d,c)}function s(d,c,f,x){var S=f.type;return S===Gn?h(d,c,f.props.children,x,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rn&&Ju(S)===c.type)?(x=l(c,f.props),x.ref=It(d,c,f),x.return=d,x):(x=Wr(f.type,f.key,f.props,null,d.mode,x),x.ref=It(d,c,f),x.return=d,x)}function a(d,c,f,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=di(f,d.mode,x),c.return=d,c):(c=l(c,f.children||[]),c.return=d,c)}function h(d,c,f,x,S){return c===null||c.tag!==7?(c=Fn(f,d.mode,x,S),c.return=d,c):(c=l(c,f),c.return=d,c)}function m(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=fi(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case mr:return f=Wr(c.type,c.key,c.props,null,d.mode,f),f.ref=It(d,null,c),f.return=d,f;case Wn:return c=di(c,d.mode,f),c.return=d,c;case rn:var x=c._init;return m(d,x(c._payload),f)}if(Mt(c)||St(c))return c=Fn(c,d.mode,f,null),c.return=d,c;Rr(d,c)}return null}function v(d,c,f,x){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:u(d,c,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:return f.key===S?s(d,c,f,x):null;case Wn:return f.key===S?a(d,c,f,x):null;case rn:return S=f._init,v(d,c,S(f._payload),x)}if(Mt(f)||St(f))return S!==null?null:h(d,c,f,x,null);Rr(d,f)}return null}function p(d,c,f,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(f)||null,u(c,d,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case mr:return d=d.get(x.key===null?f:x.key)||null,s(c,d,x,S);case Wn:return d=d.get(x.key===null?f:x.key)||null,a(c,d,x,S);case rn:var T=x._init;return p(d,c,f,T(x._payload),S)}if(Mt(x)||St(x))return d=d.get(f)||null,h(c,d,x,S,null);Rr(c,x)}return null}function g(d,c,f,x){for(var S=null,T=null,k=c,N=c=0,A=null;k!==null&&N<f.length;N++){k.index>N?(A=k,k=null):A=k.sibling;var O=v(d,k,f[N],x);if(O===null){k===null&&(k=A);break}e&&k&&O.alternate===null&&n(d,k),c=i(O,c,N),T===null?S=O:T.sibling=O,T=O,k=A}if(N===f.length)return t(d,k),U&&Cn(d,N),S;if(k===null){for(;N<f.length;N++)k=m(d,f[N],x),k!==null&&(c=i(k,c,N),T===null?S=k:T.sibling=k,T=k);return U&&Cn(d,N),S}for(k=r(d,k);N<f.length;N++)A=p(k,d,N,f[N],x),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?N:A.key),c=i(A,c,N),T===null?S=A:T.sibling=A,T=A);return e&&k.forEach(function(Re){return n(d,Re)}),U&&Cn(d,N),S}function y(d,c,f,x){var S=St(f);if(typeof S!="function")throw Error(w(150));if(f=S.call(f),f==null)throw Error(w(151));for(var T=S=null,k=c,N=c=0,A=null,O=f.next();k!==null&&!O.done;N++,O=f.next()){k.index>N?(A=k,k=null):A=k.sibling;var Re=v(d,k,O.value,x);if(Re===null){k===null&&(k=A);break}e&&k&&Re.alternate===null&&n(d,k),c=i(Re,c,N),T===null?S=Re:T.sibling=Re,T=Re,k=A}if(O.done)return t(d,k),U&&Cn(d,N),S;if(k===null){for(;!O.done;N++,O=f.next())O=m(d,O.value,x),O!==null&&(c=i(O,c,N),T===null?S=O:T.sibling=O,T=O);return U&&Cn(d,N),S}for(k=r(d,k);!O.done;N++,O=f.next())O=p(k,d,N,O.value,x),O!==null&&(e&&O.alternate!==null&&k.delete(O.key===null?N:O.key),c=i(O,c,N),T===null?S=O:T.sibling=O,T=O);return e&&k.forEach(function(xt){return n(d,xt)}),U&&Cn(d,N),S}function E(d,c,f,x){if(typeof f=="object"&&f!==null&&f.type===Gn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:e:{for(var S=f.key,T=c;T!==null;){if(T.key===S){if(S=f.type,S===Gn){if(T.tag===7){t(d,T.sibling),c=l(T,f.props.children),c.return=d,d=c;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rn&&Ju(S)===T.type){t(d,T.sibling),c=l(T,f.props),c.ref=It(d,T,f),c.return=d,d=c;break e}t(d,T);break}else n(d,T);T=T.sibling}f.type===Gn?(c=Fn(f.props.children,d.mode,x,f.key),c.return=d,d=c):(x=Wr(f.type,f.key,f.props,null,d.mode,x),x.ref=It(d,c,f),x.return=d,d=x)}return o(d);case Wn:e:{for(T=f.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){t(d,c.sibling),c=l(c,f.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=di(f,d.mode,x),c.return=d,d=c}return o(d);case rn:return T=f._init,E(d,c,T(f._payload),x)}if(Mt(f))return g(d,c,f,x);if(St(f))return y(d,c,f,x);Rr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(t(d,c.sibling),c=l(c,f),c.return=d,d=c):(t(d,c),c=fi(f,d.mode,x),c.return=d,d=c),o(d)):t(d,c)}return E}var dt=Ba(!0),$a=Ba(!1),dr={},Be=kn(dr),tr=kn(dr),rr=kn(dr);function _n(e){if(e===dr)throw Error(w(174));return e}function Uo(e,n){switch(D(rr,n),D(tr,e),D(Be,dr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ii(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ii(n,e)}L(Be),D(Be,n)}function vt(){L(Be),L(tr),L(rr)}function Ha(e){_n(rr.current);var n=_n(Be.current),t=Ii(n,e.type);n!==t&&(D(tr,e),D(Be,t))}function Bo(e){tr.current===e&&(L(Be),L(tr))}var B=kn(0);function vl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ii=[];function $o(){for(var e=0;e<ii.length;e++)ii[e]._workInProgressVersionPrimary=null;ii.length=0}var Ur=Ze.ReactCurrentDispatcher,oi=Ze.ReactCurrentBatchConfig,jn=0,$=null,K=null,Y=null,pl=!1,$t=!1,lr=0,Ud=0;function ne(){throw Error(w(321))}function Ho(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function Vo(e,n,t,r,l,i){if(jn=i,$=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ur.current=e===null||e.memoizedState===null?Vd:Wd,e=t(r,l),$t){i=0;do{if($t=!1,lr=0,25<=i)throw Error(w(301));i+=1,Y=K=null,n.updateQueue=null,Ur.current=Gd,e=t(r,l)}while($t)}if(Ur.current=hl,n=K!==null&&K.next!==null,jn=0,Y=K=$=null,pl=!1,n)throw Error(w(300));return e}function Wo(){var e=lr!==0;return lr=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?$.memoizedState=Y=e:Y=Y.next=e,Y}function Ie(){if(K===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=Y===null?$.memoizedState:Y.next;if(n!==null)Y=n,K=e;else{if(e===null)throw Error(w(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Y===null?$.memoizedState=Y=e:Y=Y.next=e}return Y}function ir(e,n){return typeof n=="function"?n(e):n}function ui(e){var n=Ie(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var r=K,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,s=null,a=i;do{var h=a.lane;if((jn&h)===h)s!==null&&(s=s.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var m={lane:h,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};s===null?(u=s=m,o=r):s=s.next=m,$.lanes|=h,Ln|=h}a=a.next}while(a!==null&&a!==i);s===null?o=r:s.next=u,Fe(r,n.memoizedState)||(fe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,$.lanes|=i,Ln|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function si(e){var n=Ie(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Fe(i,n.memoizedState)||(fe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Va(){}function Wa(e,n){var t=$,r=Ie(),l=n(),i=!Fe(r.memoizedState,l);if(i&&(r.memoizedState=l,fe=!0),r=r.queue,Go(Ka.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||Y!==null&&Y.memoizedState.tag&1){if(t.flags|=2048,or(9,Qa.bind(null,t,r,l,n),void 0,null),q===null)throw Error(w(349));jn&30||Ga(t,n,l)}return l}function Ga(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=$.updateQueue,n===null?(n={lastEffect:null,stores:null},$.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Qa(e,n,t,r){n.value=t,n.getSnapshot=r,Ja(n)&&Xa(e)}function Ka(e,n,t){return t(function(){Ja(n)&&Xa(e)})}function Ja(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function Xa(e){var n=Ye(e,1);n!==null&&Me(n,e,1,-1)}function Xu(e){var n=De();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},n.queue=e,e=e.dispatch=Hd.bind(null,$,e),[n.memoizedState,e]}function or(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=$.updateQueue,n===null?(n={lastEffect:null,stores:null},$.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ya(){return Ie().memoizedState}function Br(e,n,t,r){var l=De();$.flags|=e,l.memoizedState=or(1|n,t,void 0,r===void 0?null:r)}function zl(e,n,t,r){var l=Ie();r=r===void 0?null:r;var i=void 0;if(K!==null){var o=K.memoizedState;if(i=o.destroy,r!==null&&Ho(r,o.deps)){l.memoizedState=or(n,t,i,r);return}}$.flags|=e,l.memoizedState=or(1|n,t,i,r)}function Yu(e,n){return Br(8390656,8,e,n)}function Go(e,n){return zl(2048,8,e,n)}function qa(e,n){return zl(4,2,e,n)}function Za(e,n){return zl(4,4,e,n)}function ba(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ec(e,n,t){return t=t!=null?t.concat([e]):null,zl(4,4,ba.bind(null,n,e),t)}function Qo(){}function nc(e,n){var t=Ie();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ho(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function tc(e,n){var t=Ie();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ho(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function rc(e,n,t){return jn&21?(Fe(t,n)||(t=oa(),$.lanes|=t,Ln|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=t)}function Bd(e,n){var t=F;F=t!==0&&4>t?t:4,e(!0);var r=oi.transition;oi.transition={};try{e(!1),n()}finally{F=t,oi.transition=r}}function lc(){return Ie().memoizedState}function $d(e,n,t){var r=gn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ic(e))oc(n,t);else if(t=Da(e,n,t,r),t!==null){var l=ue();Me(t,e,r,l),uc(t,n,r)}}function Hd(e,n,t){var r=gn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ic(e))oc(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,u=i(o,t);if(l.hasEagerState=!0,l.eagerState=u,Fe(u,o)){var s=n.interleaved;s===null?(l.next=l,jo(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}t=Da(e,n,l,r),t!==null&&(l=ue(),Me(t,e,r,l),uc(t,n,r))}}function ic(e){var n=e.alternate;return e===$||n!==null&&n===$}function oc(e,n){$t=pl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function uc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,No(e,t)}}var hl={readContext:Te,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},Vd={readContext:Te,useCallback:function(e,n){return De().memoizedState=[e,n===void 0?null:n],e},useContext:Te,useEffect:Yu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Br(4194308,4,ba.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Br(4194308,4,e,n)},useInsertionEffect:function(e,n){return Br(4,2,e,n)},useMemo:function(e,n){var t=De();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=De();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=$d.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var n=De();return e={current:e},n.memoizedState=e},useState:Xu,useDebugValue:Qo,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Xu(!1),n=e[0];return e=Bd.bind(null,e[1]),De().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=$,l=De();if(U){if(t===void 0)throw Error(w(407));t=t()}else{if(t=n(),q===null)throw Error(w(349));jn&30||Ga(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,Yu(Ka.bind(null,r,i,e),[e]),r.flags|=2048,or(9,Qa.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=De(),n=q.identifierPrefix;if(U){var t=Qe,r=Ge;t=(r&~(1<<32-_e(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=lr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Ud++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Wd={readContext:Te,useCallback:nc,useContext:Te,useEffect:Go,useImperativeHandle:ec,useInsertionEffect:qa,useLayoutEffect:Za,useMemo:tc,useReducer:ui,useRef:Ya,useState:function(){return ui(ir)},useDebugValue:Qo,useDeferredValue:function(e){var n=Ie();return rc(n,K.memoizedState,e)},useTransition:function(){var e=ui(ir)[0],n=Ie().memoizedState;return[e,n]},useMutableSource:Va,useSyncExternalStore:Wa,useId:lc,unstable_isNewReconciler:!1},Gd={readContext:Te,useCallback:nc,useContext:Te,useEffect:Go,useImperativeHandle:ec,useInsertionEffect:qa,useLayoutEffect:Za,useMemo:tc,useReducer:si,useRef:Ya,useState:function(){return si(ir)},useDebugValue:Qo,useDeferredValue:function(e){var n=Ie();return K===null?n.memoizedState=e:rc(n,K.memoizedState,e)},useTransition:function(){var e=si(ir)[0],n=Ie().memoizedState;return[e,n]},useMutableSource:Va,useSyncExternalStore:Wa,useId:lc,unstable_isNewReconciler:!1};function pt(e,n){try{var t="",r=n;do t+=xf(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function ai(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Xi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Qd=typeof WeakMap=="function"?WeakMap:Map;function sc(e,n,t){t=Ke(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){gl||(gl=!0,io=r),Xi(e,n)},t}function ac(e,n,t){t=Ke(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Xi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Xi(e,n),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function qu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Qd;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=ov.bind(null,e,n,t),n.then(e,e))}function Zu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function bu(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ke(-1,1),n.tag=2,hn(t,n,1))),t.lanes|=1),e)}var Kd=Ze.ReactCurrentOwner,fe=!1;function oe(e,n,t,r){n.child=e===null?$a(n,null,t,r):dt(n,e.child,t,r)}function es(e,n,t,r,l){t=t.render;var i=n.ref;return ot(n,l),r=Vo(e,n,t,r,i,l),t=Wo(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,qe(e,n,l)):(U&&t&&Oo(n),n.flags|=1,oe(e,n,r,l),n.child)}function ns(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!eu(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,cc(e,n,i,r,l)):(e=Wr(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Zt,t(o,r)&&e.ref===n.ref)return qe(e,n,l)}return n.flags|=1,e=yn(i,r),e.ref=n.ref,e.return=n,n.child=e}function cc(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Zt(i,r)&&e.ref===n.ref)if(fe=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return n.lanes=e.lanes,qe(e,n,l)}return Yi(e,n,t,r,l)}function fc(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(nt,he),he|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,D(nt,he),he|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,D(nt,he),he|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,D(nt,he),he|=r;return oe(e,n,l,t),n.child}function dc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Yi(e,n,t,r,l){var i=ve(t)?An:ie.current;return i=ct(n,i),ot(n,l),t=Vo(e,n,t,r,i,l),r=Wo(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,qe(e,n,l)):(U&&r&&Oo(n),n.flags|=1,oe(e,n,t,l),n.child)}function ts(e,n,t,r,l){if(ve(t)){var i=!0;ul(n)}else i=!1;if(ot(n,l),n.stateNode===null)$r(e,n),Ua(n,t,r),Ji(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var s=o.context,a=t.contextType;typeof a=="object"&&a!==null?a=Te(a):(a=ve(t)?An:ie.current,a=ct(n,a));var h=t.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||s!==a)&&Ku(n,o,r,a),ln=!1;var v=n.memoizedState;o.state=v,dl(n,r,o,l),s=n.memoizedState,u!==r||v!==s||de.current||ln?(typeof h=="function"&&(Ki(n,t,h,r),s=n.memoizedState),(u=ln||Qu(n,t,u,r,v,s,a))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=a,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,ja(e,n),u=n.memoizedProps,a=n.type===n.elementType?u:Pe(n.type,u),o.props=a,m=n.pendingProps,v=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Te(s):(s=ve(t)?An:ie.current,s=ct(n,s));var p=t.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==m||v!==s)&&Ku(n,o,r,s),ln=!1,v=n.memoizedState,o.state=v,dl(n,r,o,l);var g=n.memoizedState;u!==m||v!==g||de.current||ln?(typeof p=="function"&&(Ki(n,t,p,r),g=n.memoizedState),(a=ln||Qu(n,t,a,r,v,g,s)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=g),o.props=r,o.state=g,o.context=s,r=a):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),r=!1)}return qi(e,n,t,r,i,l)}function qi(e,n,t,r,l,i){dc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&$u(n,t,!1),qe(e,n,i);r=n.stateNode,Kd.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=dt(n,e.child,null,i),n.child=dt(n,null,u,i)):oe(e,n,u,i),n.memoizedState=r.state,l&&$u(n,t,!0),n.child}function vc(e){var n=e.stateNode;n.pendingContext?Bu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Bu(e,n.context,!1),Uo(e,n.containerInfo)}function rs(e,n,t,r,l){return ft(),Mo(l),n.flags|=256,oe(e,n,t,r),n.child}var Zi={dehydrated:null,treeContext:null,retryLane:0};function bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function pc(e,n,t){var r=n.pendingProps,l=B.current,i=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(B,l&1),e===null)return Gi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ml(o,r,0,null),e=Fn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=bi(t),n.memoizedState=Zi,e):Ko(n,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return Jd(e,n,o,r,u,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=yn(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=yn(u,i):(i=Fn(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?bi(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Zi,r}return i=e.child,e=i.sibling,r=yn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ko(e,n){return n=Ml({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Cr(e,n,t,r){return r!==null&&Mo(r),dt(n,e.child,null,t),e=Ko(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Jd(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=ai(Error(w(422))),Cr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=Ml({mode:"visible",children:r.children},l,0,null),i=Fn(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&dt(n,e.child,null,o),n.child.memoizedState=bi(o),n.memoizedState=Zi,i);if(!(n.mode&1))return Cr(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(w(419)),r=ai(i,r,void 0),Cr(e,n,o,r)}if(u=(o&e.childLanes)!==0,fe||u){if(r=q,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ye(e,l),Me(r,e,l,-1))}return bo(),r=ai(Error(w(421))),Cr(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=uv.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,me=pn(l.nextSibling),ge=n,U=!0,Oe=null,e!==null&&(Se[we++]=Ge,Se[we++]=Qe,Se[we++]=Dn,Ge=e.id,Qe=e.overflow,Dn=n),n=Ko(n,r.children),n.flags|=4096,n)}function ls(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Qi(e.return,n,t)}function ci(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function hc(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(oe(e,n,r.children,t),r=B.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ls(e,t,n);else if(e.tag===19)ls(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(B,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&vl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),ci(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&vl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}ci(n,!0,t,null,i);break;case"together":ci(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function $r(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function qe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ln|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(w(153));if(n.child!==null){for(e=n.child,t=yn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=yn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Xd(e,n,t){switch(n.tag){case 3:vc(n),ft();break;case 5:Ha(n);break;case 1:ve(n.type)&&ul(n);break;case 4:Uo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;D(cl,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(D(B,B.current&1),n.flags|=128,null):t&n.child.childLanes?pc(e,n,t):(D(B,B.current&1),e=qe(e,n,t),e!==null?e.sibling:null);D(B,B.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return hc(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(B,B.current),r)break;return null;case 22:case 23:return n.lanes=0,fc(e,n,t)}return qe(e,n,t)}var mc,eo,gc,yc;mc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};eo=function(){};gc=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,_n(Be.current);var i=null;switch(t){case"input":l=wi(e,l),r=wi(e,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=Ti(e,l),r=Ti(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=il)}Ri(t,r);var o;t=null;for(a in l)if(!r.hasOwnProperty(a)&&l.hasOwnProperty(a)&&l[a]!=null)if(a==="style"){var u=l[a];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Gt.hasOwnProperty(a)?i||(i=[]):(i=i||[]).push(a,null));for(a in r){var s=r[a];if(u=l!=null?l[a]:void 0,r.hasOwnProperty(a)&&s!==u&&(s!=null||u!=null))if(a==="style")if(u){for(o in u)!u.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&u[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(i||(i=[]),i.push(a,t)),t=s;else a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(i=i||[]).push(a,s)):a==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(a,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(Gt.hasOwnProperty(a)?(s!=null&&a==="onScroll"&&j("scroll",e),i||u===s||(i=[])):(i=i||[]).push(a,s))}t&&(i=i||[]).push("style",t);var a=i;(n.updateQueue=a)&&(n.flags|=4)}};yc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Rt(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Yd(e,n,t){var r=n.pendingProps;switch(_o(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return ve(n.type)&&ol(),te(n),null;case 3:return r=n.stateNode,vt(),L(de),L(ie),$o(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ir(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Oe!==null&&(so(Oe),Oe=null))),eo(e,n),te(n),null;case 5:Bo(n);var l=_n(rr.current);if(t=n.type,e!==null&&n.stateNode!=null)gc(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(w(166));return te(n),null}if(e=_n(Be.current),Ir(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[je]=n,r[nr]=i,e=(n.mode&1)!==0,t){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(l=0;l<At.length;l++)j(At[l],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":vu(r,i),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},j("invalid",r);break;case"textarea":hu(r,i),j("invalid",r)}Ri(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Tr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Tr(r.textContent,u,e),l=["children",""+u]):Gt.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&j("scroll",r)}switch(t){case"input":gr(r),pu(r,i,!0);break;case"textarea":gr(r),mu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=il)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[je]=n,e[nr]=r,mc(e,n,!1,!1),n.stateNode=e;e:{switch(o=Ci(t,r),t){case"dialog":j("cancel",e),j("close",e),l=r;break;case"iframe":case"object":case"embed":j("load",e),l=r;break;case"video":case"audio":for(l=0;l<At.length;l++)j(At[l],e);l=r;break;case"source":j("error",e),l=r;break;case"img":case"image":case"link":j("error",e),j("load",e),l=r;break;case"details":j("toggle",e),l=r;break;case"input":vu(e,r),l=wi(e,r),j("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),j("invalid",e);break;case"textarea":hu(e,r),l=Ti(e,r),j("invalid",e);break;default:l=r}Ri(t,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var s=u[i];i==="style"?Js(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Qs(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Qt(e,s):typeof s=="number"&&Qt(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Gt.hasOwnProperty(i)?s!=null&&i==="onScroll"&&j("scroll",e):s!=null&&go(e,i,s,o))}switch(t){case"input":gr(e),pu(e,r,!1);break;case"textarea":gr(e),mu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tt(e,!!r.multiple,i,!1):r.defaultValue!=null&&tt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=il)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return te(n),null;case 6:if(e&&n.stateNode!=null)yc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(w(166));if(t=_n(rr.current),_n(Be.current),Ir(n)){if(r=n.stateNode,t=n.memoizedProps,r[je]=n,(i=r.nodeValue!==t)&&(e=ge,e!==null))switch(e.tag){case 3:Tr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[je]=n,n.stateNode=r}return te(n),null;case 13:if(L(B),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&me!==null&&n.mode&1&&!(n.flags&128))Aa(),ft(),n.flags|=98560,i=!1;else if(i=Ir(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[je]=n}else ft(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;te(n),i=!1}else Oe!==null&&(so(Oe),Oe=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?J===0&&(J=3):bo())),n.updateQueue!==null&&(n.flags|=4),te(n),null);case 4:return vt(),eo(e,n),e===null&&bt(n.stateNode.containerInfo),te(n),null;case 10:return Do(n.type._context),te(n),null;case 17:return ve(n.type)&&ol(),te(n),null;case 19:if(L(B),i=n.memoizedState,i===null)return te(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)Rt(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=vl(e),o!==null){for(n.flags|=128,Rt(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return D(B,B.current&1|2),n.child}e=e.sibling}i.tail!==null&&G()>ht&&(n.flags|=128,r=!0,Rt(i,!1),n.lanes=4194304)}else{if(!r)if(e=vl(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Rt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return te(n),null}else 2*G()-i.renderingStartTime>ht&&t!==1073741824&&(n.flags|=128,r=!0,Rt(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=G(),n.sibling=null,t=B.current,D(B,r?t&1|2:t&1),n):(te(n),null);case 22:case 23:return Zo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?he&1073741824&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),null;case 24:return null;case 25:return null}throw Error(w(156,n.tag))}function qd(e,n){switch(_o(n),n.tag){case 1:return ve(n.type)&&ol(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return vt(),L(de),L(ie),$o(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Bo(n),null;case 13:if(L(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(w(340));ft()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return L(B),null;case 4:return vt(),null;case 10:return Do(n.type._context),null;case 22:case 23:return Zo(),null;case 24:return null;default:return null}}var Pr=!1,le=!1,Zd=typeof WeakSet=="function"?WeakSet:Set,I=null;function et(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function no(e,n,t){try{t()}catch(r){V(e,n,r)}}var is=!1;function bd(e,n){if(Li=tl,e=wa(),zo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,u=-1,s=-1,a=0,h=0,m=e,v=null;n:for(;;){for(var p;m!==t||l!==0&&m.nodeType!==3||(u=o+l),m!==i||r!==0&&m.nodeType!==3||(s=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(p=m.firstChild)!==null;)v=m,m=p;for(;;){if(m===e)break n;if(v===t&&++a===l&&(u=o),v===i&&++h===r&&(s=o),(p=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=p}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ui={focusedElem:e,selectionRange:t},tl=!1,I=n;I!==null;)if(n=I,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,I=e;else for(;I!==null;){n=I;try{var g=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,E=g.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?y:Pe(n.type,y),E);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){V(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,I=e;break}I=n.return}return g=is,is=!1,g}function Ht(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&no(n,t,i)}l=l.next}while(l!==r)}}function Ol(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function to(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function xc(e){var n=e.alternate;n!==null&&(e.alternate=null,xc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[je],delete n[nr],delete n[Hi],delete n[Ad],delete n[Dd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function os(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ro(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=il));else if(r!==4&&(e=e.child,e!==null))for(ro(e,n,t),e=e.sibling;e!==null;)ro(e,n,t),e=e.sibling}function lo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lo(e,n,t),e=e.sibling;e!==null;)lo(e,n,t),e=e.sibling}var Z=null,ze=!1;function be(e,n,t){for(t=t.child;t!==null;)Sc(e,n,t),t=t.sibling}function Sc(e,n,t){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(Nl,t)}catch{}switch(t.tag){case 5:le||et(t,n);case 6:var r=Z,l=ze;Z=null,be(e,n,t),Z=r,ze=l,Z!==null&&(ze?(e=Z,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Z.removeChild(t.stateNode));break;case 18:Z!==null&&(ze?(e=Z,t=t.stateNode,e.nodeType===8?ri(e.parentNode,t):e.nodeType===1&&ri(e,t),Yt(e)):ri(Z,t.stateNode));break;case 4:r=Z,l=ze,Z=t.stateNode.containerInfo,ze=!0,be(e,n,t),Z=r,ze=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&no(t,n,o),l=l.next}while(l!==r)}be(e,n,t);break;case 1:if(!le&&(et(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){V(t,n,u)}be(e,n,t);break;case 21:be(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,be(e,n,t),le=r):be(e,n,t);break;default:be(e,n,t)}}function us(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Zd),n.forEach(function(r){var l=sv.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Ce(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:Z=u.stateNode,ze=!1;break e;case 3:Z=u.stateNode.containerInfo,ze=!0;break e;case 4:Z=u.stateNode.containerInfo,ze=!0;break e}u=u.return}if(Z===null)throw Error(w(160));Sc(i,o,l),Z=null,ze=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(a){V(l,n,a)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)wc(n,e),n=n.sibling}function wc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ce(n,e),Ae(e),r&4){try{Ht(3,e,e.return),Ol(3,e)}catch(y){V(e,e.return,y)}try{Ht(5,e,e.return)}catch(y){V(e,e.return,y)}}break;case 1:Ce(n,e),Ae(e),r&512&&t!==null&&et(t,t.return);break;case 5:if(Ce(n,e),Ae(e),r&512&&t!==null&&et(t,t.return),e.flags&32){var l=e.stateNode;try{Qt(l,"")}catch(y){V(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Vs(l,i),Ci(u,o);var a=Ci(u,i);for(o=0;o<s.length;o+=2){var h=s[o],m=s[o+1];h==="style"?Js(l,m):h==="dangerouslySetInnerHTML"?Qs(l,m):h==="children"?Qt(l,m):go(l,h,m,a)}switch(u){case"input":Ni(l,i);break;case"textarea":Ws(l,i);break;case"select":var v=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var p=i.value;p!=null?tt(l,!!i.multiple,p,!1):v!==!!i.multiple&&(i.defaultValue!=null?tt(l,!!i.multiple,i.defaultValue,!0):tt(l,!!i.multiple,i.multiple?[]:"",!1))}l[nr]=i}catch(y){V(e,e.return,y)}}break;case 6:if(Ce(n,e),Ae(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(y){V(e,e.return,y)}}break;case 3:if(Ce(n,e),Ae(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Yt(n.containerInfo)}catch(y){V(e,e.return,y)}break;case 4:Ce(n,e),Ae(e);break;case 13:Ce(n,e),Ae(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Yo=G())),r&4&&us(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(le=(a=le)||h,Ce(n,e),le=a):Ce(n,e),Ae(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!h&&e.mode&1)for(I=e,h=e.child;h!==null;){for(m=I=h;I!==null;){switch(v=I,p=v.child,v.tag){case 0:case 11:case 14:case 15:Ht(4,v,v.return);break;case 1:et(v,v.return);var g=v.stateNode;if(typeof g.componentWillUnmount=="function"){r=v,t=v.return;try{n=r,g.props=n.memoizedProps,g.state=n.memoizedState,g.componentWillUnmount()}catch(y){V(r,t,y)}}break;case 5:et(v,v.return);break;case 22:if(v.memoizedState!==null){as(m);continue}}p!==null?(p.return=v,I=p):as(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,a?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=Ks("display",o))}catch(y){V(e,e.return,y)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=a?"":m.memoizedProps}catch(y){V(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ce(n,e),Ae(e),r&4&&us(e);break;case 21:break;default:Ce(n,e),Ae(e)}}function Ae(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ec(t)){var r=t;break e}t=t.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Qt(l,""),r.flags&=-33);var i=os(e);lo(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=os(e);ro(e,u,o);break;default:throw Error(w(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ev(e,n,t){I=e,Nc(e)}function Nc(e,n,t){for(var r=(e.mode&1)!==0;I!==null;){var l=I,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Pr;if(!o){var u=l.alternate,s=u!==null&&u.memoizedState!==null||le;u=Pr;var a=le;if(Pr=o,(le=s)&&!a)for(I=l;I!==null;)o=I,s=o.child,o.tag===22&&o.memoizedState!==null?cs(l):s!==null?(s.return=o,I=s):cs(l);for(;i!==null;)I=i,Nc(i),i=i.sibling;I=l,Pr=u,le=a}ss(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,I=i):ss(e)}}function ss(e){for(;I!==null;){var n=I;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Ol(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Pe(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Gu(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Gu(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var a=n.alternate;if(a!==null){var h=a.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Yt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||n.flags&512&&to(n)}catch(v){V(n,n.return,v)}}if(n===e){I=null;break}if(t=n.sibling,t!==null){t.return=n.return,I=t;break}I=n.return}}function as(e){for(;I!==null;){var n=I;if(n===e){I=null;break}var t=n.sibling;if(t!==null){t.return=n.return,I=t;break}I=n.return}}function cs(e){for(;I!==null;){var n=I;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ol(4,n)}catch(s){V(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){V(n,l,s)}}var i=n.return;try{to(n)}catch(s){V(n,i,s)}break;case 5:var o=n.return;try{to(n)}catch(s){V(n,o,s)}}}catch(s){V(n,n.return,s)}if(n===e){I=null;break}var u=n.sibling;if(u!==null){u.return=n.return,I=u;break}I=n.return}}var nv=Math.ceil,ml=Ze.ReactCurrentDispatcher,Jo=Ze.ReactCurrentOwner,ke=Ze.ReactCurrentBatchConfig,M=0,q=null,Q=null,b=0,he=0,nt=kn(0),J=0,ur=null,Ln=0,_l=0,Xo=0,Vt=null,ce=null,Yo=0,ht=1/0,Ve=null,gl=!1,io=null,mn=null,zr=!1,an=null,yl=0,Wt=0,oo=null,Hr=-1,Vr=0;function ue(){return M&6?G():Hr!==-1?Hr:Hr=G()}function gn(e){return e.mode&1?M&2&&b!==0?b&-b:Ld.transition!==null?(Vr===0&&(Vr=oa()),Vr):(e=F,e!==0||(e=window.event,e=e===void 0?16:va(e.type)),e):1}function Me(e,n,t,r){if(50<Wt)throw Wt=0,oo=null,Error(w(185));ar(e,t,r),(!(M&2)||e!==q)&&(e===q&&(!(M&2)&&(_l|=t),J===4&&un(e,b)),pe(e,r),t===1&&M===0&&!(n.mode&1)&&(ht=G()+500,Cl&&Tn()))}function pe(e,n){var t=e.callbackNode;Lf(e,n);var r=nl(e,e===q?b:0);if(r===0)t!==null&&xu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&xu(t),n===1)e.tag===0?jd(fs.bind(null,e)):_a(fs.bind(null,e)),Md(function(){!(M&6)&&Tn()}),t=null;else{switch(ua(r)){case 1:t=wo;break;case 4:t=la;break;case 16:t=el;break;case 536870912:t=ia;break;default:t=el}t=Oc(t,kc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function kc(e,n){if(Hr=-1,Vr=0,M&6)throw Error(w(327));var t=e.callbackNode;if(ut()&&e.callbackNode!==t)return null;var r=nl(e,e===q?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=xl(e,r);else{n=r;var l=M;M|=2;var i=Ic();(q!==e||b!==n)&&(Ve=null,ht=G()+500,Mn(e,n));do try{lv();break}catch(u){Tc(e,u)}while(1);Ao(),ml.current=i,M=l,Q!==null?n=0:(q=null,b=0,n=J)}if(n!==0){if(n===2&&(l=Mi(e),l!==0&&(r=l,n=uo(e,l))),n===1)throw t=ur,Mn(e,0),un(e,r),pe(e,G()),t;if(n===6)un(e,r);else{if(l=e.current.alternate,!(r&30)&&!tv(l)&&(n=xl(e,r),n===2&&(i=Mi(e),i!==0&&(r=i,n=uo(e,i))),n===1))throw t=ur,Mn(e,0),un(e,r),pe(e,G()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(w(345));case 2:Pn(e,ce,Ve);break;case 3:if(un(e,r),(r&130023424)===r&&(n=Yo+500-G(),10<n)){if(nl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=$i(Pn.bind(null,e,ce,Ve),n);break}Pn(e,ce,Ve);break;case 4:if(un(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-_e(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nv(r/1960))-r,10<r){e.timeoutHandle=$i(Pn.bind(null,e,ce,Ve),r);break}Pn(e,ce,Ve);break;case 5:Pn(e,ce,Ve);break;default:throw Error(w(329))}}}return pe(e,G()),e.callbackNode===t?kc.bind(null,e):null}function uo(e,n){var t=Vt;return e.current.memoizedState.isDehydrated&&(Mn(e,n).flags|=256),e=xl(e,n),e!==2&&(n=ce,ce=t,n!==null&&so(n)),e}function so(e){ce===null?ce=e:ce.push.apply(ce,e)}function tv(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Fe(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function un(e,n){for(n&=~Xo,n&=~_l,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-_e(n),r=1<<t;e[t]=-1,n&=~r}}function fs(e){if(M&6)throw Error(w(327));ut();var n=nl(e,0);if(!(n&1))return pe(e,G()),null;var t=xl(e,n);if(e.tag!==0&&t===2){var r=Mi(e);r!==0&&(n=r,t=uo(e,r))}if(t===1)throw t=ur,Mn(e,0),un(e,n),pe(e,G()),t;if(t===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Pn(e,ce,Ve),pe(e,G()),null}function qo(e,n){var t=M;M|=1;try{return e(n)}finally{M=t,M===0&&(ht=G()+500,Cl&&Tn())}}function Un(e){an!==null&&an.tag===0&&!(M&6)&&ut();var n=M;M|=1;var t=ke.transition,r=F;try{if(ke.transition=null,F=1,e)return e()}finally{F=r,ke.transition=t,M=n,!(M&6)&&Tn()}}function Zo(){he=nt.current,L(nt)}function Mn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,_d(t)),Q!==null)for(t=Q.return;t!==null;){var r=t;switch(_o(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ol();break;case 3:vt(),L(de),L(ie),$o();break;case 5:Bo(r);break;case 4:vt();break;case 13:L(B);break;case 19:L(B);break;case 10:Do(r.type._context);break;case 22:case 23:Zo()}t=t.return}if(q=e,Q=e=yn(e.current,null),b=he=n,J=0,ur=null,Xo=_l=Ln=0,ce=Vt=null,On!==null){for(n=0;n<On.length;n++)if(t=On[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}On=null}return e}function Tc(e,n){do{var t=Q;try{if(Ao(),Ur.current=hl,pl){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}pl=!1}if(jn=0,Y=K=$=null,$t=!1,lr=0,Jo.current=null,t===null||t.return===null){J=1,ur=n,Q=null;break}e:{var i=e,o=t.return,u=t,s=n;if(n=b,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var a=s,h=u,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var v=h.alternate;v?(h.updateQueue=v.updateQueue,h.memoizedState=v.memoizedState,h.lanes=v.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Zu(o);if(p!==null){p.flags&=-257,bu(p,o,u,i,n),p.mode&1&&qu(i,a,n),n=p,s=a;var g=n.updateQueue;if(g===null){var y=new Set;y.add(s),n.updateQueue=y}else g.add(s);break e}else{if(!(n&1)){qu(i,a,n),bo();break e}s=Error(w(426))}}else if(U&&u.mode&1){var E=Zu(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),bu(E,o,u,i,n),Mo(pt(s,u));break e}}i=s=pt(s,u),J!==4&&(J=2),Vt===null?Vt=[i]:Vt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=sc(i,s,n);Wu(i,d);break e;case 1:u=s;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(mn===null||!mn.has(f)))){i.flags|=65536,n&=-n,i.lanes|=n;var x=ac(i,u,n);Wu(i,x);break e}}i=i.return}while(i!==null)}Cc(t)}catch(S){n=S,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(1)}function Ic(){var e=ml.current;return ml.current=hl,e===null?hl:e}function bo(){(J===0||J===3||J===2)&&(J=4),q===null||!(Ln&268435455)&&!(_l&268435455)||un(q,b)}function xl(e,n){var t=M;M|=2;var r=Ic();(q!==e||b!==n)&&(Ve=null,Mn(e,n));do try{rv();break}catch(l){Tc(e,l)}while(1);if(Ao(),M=t,ml.current=r,Q!==null)throw Error(w(261));return q=null,b=0,J}function rv(){for(;Q!==null;)Rc(Q)}function lv(){for(;Q!==null&&!Pf();)Rc(Q)}function Rc(e){var n=zc(e.alternate,e,he);e.memoizedProps=e.pendingProps,n===null?Cc(e):Q=n,Jo.current=null}function Cc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=qd(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Q=null;return}}else if(t=Yd(t,n,he),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);J===0&&(J=5)}function Pn(e,n,t){var r=F,l=ke.transition;try{ke.transition=null,F=1,iv(e,n,t,r)}finally{ke.transition=l,F=r}return null}function iv(e,n,t,r){do ut();while(an!==null);if(M&6)throw Error(w(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Uf(e,i),e===q&&(Q=q=null,b=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||zr||(zr=!0,Oc(el,function(){return ut(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=ke.transition,ke.transition=null;var o=F;F=1;var u=M;M|=4,Jo.current=null,bd(e,t),wc(t,e),Td(Ui),tl=!!Li,Ui=Li=null,e.current=t,ev(t),zf(),M=u,F=o,ke.transition=i}else e.current=t;if(zr&&(zr=!1,an=e,yl=l),i=e.pendingLanes,i===0&&(mn=null),Mf(t.stateNode),pe(e,G()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(gl)throw gl=!1,e=io,io=null,e;return yl&1&&e.tag!==0&&ut(),i=e.pendingLanes,i&1?e===oo?Wt++:(Wt=0,oo=e):Wt=0,Tn(),null}function ut(){if(an!==null){var e=ua(yl),n=ke.transition,t=F;try{if(ke.transition=null,F=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,yl=0,M&6)throw Error(w(331));var l=M;for(M|=4,I=e.current;I!==null;){var i=I,o=i.child;if(I.flags&16){var u=i.deletions;if(u!==null){for(var s=0;s<u.length;s++){var a=u[s];for(I=a;I!==null;){var h=I;switch(h.tag){case 0:case 11:case 15:Ht(8,h,i)}var m=h.child;if(m!==null)m.return=h,I=m;else for(;I!==null;){h=I;var v=h.sibling,p=h.return;if(xc(h),h===a){I=null;break}if(v!==null){v.return=p,I=v;break}I=p}}}var g=i.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}I=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,I=o;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ht(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,I=d;break e}I=i.return}}var c=e.current;for(I=c;I!==null;){o=I;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,I=f;else e:for(o=c;I!==null;){if(u=I,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Ol(9,u)}}catch(S){V(u,u.return,S)}if(u===o){I=null;break e}var x=u.sibling;if(x!==null){x.return=u.return,I=x;break e}I=u.return}}if(M=l,Tn(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(Nl,e)}catch{}r=!0}return r}finally{F=t,ke.transition=n}}return!1}function ds(e,n,t){n=pt(t,n),n=sc(e,n,1),e=hn(e,n,1),n=ue(),e!==null&&(ar(e,1,n),pe(e,n))}function V(e,n,t){if(e.tag===3)ds(e,e,t);else for(;n!==null;){if(n.tag===3){ds(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=pt(t,e),e=ac(n,e,1),n=hn(n,e,1),e=ue(),n!==null&&(ar(n,1,e),pe(n,e));break}}n=n.return}}function ov(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ue(),e.pingedLanes|=e.suspendedLanes&t,q===e&&(b&t)===t&&(J===4||J===3&&(b&130023424)===b&&500>G()-Yo?Mn(e,0):Xo|=t),pe(e,n)}function Pc(e,n){n===0&&(e.mode&1?(n=Er,Er<<=1,!(Er&130023424)&&(Er=4194304)):n=1);var t=ue();e=Ye(e,n),e!==null&&(ar(e,n,t),pe(e,t))}function uv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Pc(e,t)}function sv(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(n),Pc(e,t)}var zc;zc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||de.current)fe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return fe=!1,Xd(e,n,t);fe=!!(e.flags&131072)}else fe=!1,U&&n.flags&1048576&&Ma(n,al,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;$r(e,n),e=n.pendingProps;var l=ct(n,ie.current);ot(n,t),l=Vo(null,n,r,e,l,t);var i=Wo();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ve(r)?(i=!0,ul(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Lo(n),l.updater=Pl,n.stateNode=l,l._reactInternals=n,Ji(n,r,e,t),n=qi(null,n,r,!0,i,t)):(n.tag=0,U&&i&&Oo(n),oe(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch($r(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=cv(r),e=Pe(r,e),l){case 0:n=Yi(null,n,r,e,t);break e;case 1:n=ts(null,n,r,e,t);break e;case 11:n=es(null,n,r,e,t);break e;case 14:n=ns(null,n,r,Pe(r.type,e),t);break e}throw Error(w(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),Yi(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),ts(e,n,r,l,t);case 3:e:{if(vc(n),e===null)throw Error(w(387));r=n.pendingProps,i=n.memoizedState,l=i.element,ja(e,n),dl(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=pt(Error(w(423)),n),n=rs(e,n,r,t,l);break e}else if(r!==l){l=pt(Error(w(424)),n),n=rs(e,n,r,t,l);break e}else for(me=pn(n.stateNode.containerInfo.firstChild),ge=n,U=!0,Oe=null,t=$a(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ft(),r===l){n=qe(e,n,t);break e}oe(e,n,r,t)}n=n.child}return n;case 5:return Ha(n),e===null&&Gi(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Bi(r,l)?o=null:i!==null&&Bi(r,i)&&(n.flags|=32),dc(e,n),oe(e,n,o,t),n.child;case 6:return e===null&&Gi(n),null;case 13:return pc(e,n,t);case 4:return Uo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=dt(n,null,r,t):oe(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),es(e,n,r,l,t);case 7:return oe(e,n,n.pendingProps,t),n.child;case 8:return oe(e,n,n.pendingProps.children,t),n.child;case 12:return oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,D(cl,r._currentValue),r._currentValue=o,i!==null)if(Fe(i.value,o)){if(i.children===l.children&&!de.current){n=qe(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Ke(-1,t&-t),s.tag=2;var a=i.updateQueue;if(a!==null){a=a.shared;var h=a.pending;h===null?s.next=s:(s.next=h.next,h.next=s),a.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Qi(i.return,t,n),u.lanes|=t;break}s=s.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(w(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Qi(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}oe(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,ot(n,t),l=Te(l),r=r(l),n.flags|=1,oe(e,n,r,t),n.child;case 14:return r=n.type,l=Pe(r,n.pendingProps),l=Pe(r.type,l),ns(e,n,r,l,t);case 15:return cc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),$r(e,n),n.tag=1,ve(r)?(e=!0,ul(n)):e=!1,ot(n,t),Ua(n,r,l),Ji(n,r,l,t),qi(null,n,r,!0,e,t);case 19:return hc(e,n,t);case 22:return fc(e,n,t)}throw Error(w(156,n.tag))};function Oc(e,n){return ra(e,n)}function av(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,n,t,r){return new av(e,n,t,r)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cv(e){if(typeof e=="function")return eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xo)return 11;if(e===Eo)return 14}return 2}function yn(e,n){var t=e.alternate;return t===null?(t=Ne(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Wr(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")eu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Gn:return Fn(t.children,l,i,n);case yo:o=8,l|=8;break;case yi:return e=Ne(12,t,n,l|2),e.elementType=yi,e.lanes=i,e;case xi:return e=Ne(13,t,n,l),e.elementType=xi,e.lanes=i,e;case Ei:return e=Ne(19,t,n,l),e.elementType=Ei,e.lanes=i,e;case Bs:return Ml(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ls:o=10;break e;case Us:o=9;break e;case xo:o=11;break e;case Eo:o=14;break e;case rn:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return n=Ne(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Fn(e,n,t,r){return e=Ne(7,e,r,n),e.lanes=t,e}function Ml(e,n,t,r){return e=Ne(22,e,r,n),e.elementType=Bs,e.lanes=t,e.stateNode={isHidden:!1},e}function fi(e,n,t){return e=Ne(6,e,null,n),e.lanes=t,e}function di(e,n,t){return n=Ne(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function fv(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function nu(e,n,t,r,l,i,o,u,s){return e=new fv(e,n,t,u,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ne(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lo(i),e}function dv(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function _c(e){if(!e)return Sn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(w(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(w(171))}if(e.tag===1){var t=e.type;if(ve(t))return Oa(e,t,n)}return n}function Mc(e,n,t,r,l,i,o,u,s){return e=nu(t,r,!0,e,l,i,o,u,s),e.context=_c(null),t=e.current,r=ue(),l=gn(t),i=Ke(r,l),i.callback=n??null,hn(t,i,l),e.current.lanes=l,ar(e,l,r),pe(e,r),e}function Fl(e,n,t,r){var l=n.current,i=ue(),o=gn(l);return t=_c(t),n.context===null?n.context=t:n.pendingContext=t,n=Ke(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=hn(l,n,o),e!==null&&(Me(e,l,o,i),Lr(e,l,o)),o}function El(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function tu(e,n){vs(e,n),(e=e.alternate)&&vs(e,n)}function vv(){return null}var Fc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ru(e){this._internalRoot=e}Al.prototype.render=ru.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(w(409));Fl(e,n,null,null)};Al.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Un(function(){Fl(null,e,null,null)}),n[Xe]=null}};function Al(e){this._internalRoot=e}Al.prototype.unstable_scheduleHydration=function(e){if(e){var n=ca();e={blockedOn:null,target:e,priority:n};for(var t=0;t<on.length&&n!==0&&n<on[t].priority;t++);on.splice(t,0,e),t===0&&da(e)}};function lu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ps(){}function pv(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var a=El(o);i.call(a)}}var o=Mc(n,r,e,0,null,!1,!1,"",ps);return e._reactRootContainer=o,e[Xe]=o.current,bt(e.nodeType===8?e.parentNode:e),Un(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var a=El(s);u.call(a)}}var s=nu(e,0,!1,null,null,!1,!1,"",ps);return e._reactRootContainer=s,e[Xe]=s.current,bt(e.nodeType===8?e.parentNode:e),Un(function(){Fl(n,s,t,r)}),s}function jl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var s=El(o);u.call(s)}}Fl(n,o,e,l)}else o=pv(t,n,e,l,r);return El(o)}sa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ft(n.pendingLanes);t!==0&&(No(n,t|1),pe(n,G()),!(M&6)&&(ht=G()+500,Tn()))}break;case 13:Un(function(){var r=Ye(e,1);if(r!==null){var l=ue();Me(r,e,1,l)}}),tu(e,1)}};ko=function(e){if(e.tag===13){var n=Ye(e,134217728);if(n!==null){var t=ue();Me(n,e,134217728,t)}tu(e,134217728)}};aa=function(e){if(e.tag===13){var n=gn(e),t=Ye(e,n);if(t!==null){var r=ue();Me(t,e,n,r)}tu(e,n)}};ca=function(){return F};fa=function(e,n){var t=F;try{return F=e,n()}finally{F=t}};zi=function(e,n,t){switch(n){case"input":if(Ni(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Rl(r);if(!l)throw Error(w(90));Hs(r),Ni(r,l)}}}break;case"textarea":Ws(e,t);break;case"select":n=t.value,n!=null&&tt(e,!!t.multiple,n,!1)}};qs=qo;Zs=Un;var hv={usingClientEntryPoint:!1,Events:[fr,Xn,Rl,Xs,Ys,qo]},Ct={findFiberByHostInstance:zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},mv={bundleType:Ct.bundleType,version:Ct.version,rendererPackageName:Ct.rendererPackageName,rendererConfig:Ct.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=na(e),e===null?null:e.stateNode},findFiberByHostInstance:Ct.findFiberByHostInstance||vv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{Nl=Or.inject(mv),Ue=Or}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hv;xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lu(n))throw Error(w(200));return dv(e,n,null,t)};xe.createRoot=function(e,n){if(!lu(e))throw Error(w(299));var t=!1,r="",l=Fc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=nu(e,1,!1,null,null,t,!1,r,l),e[Xe]=n.current,bt(e.nodeType===8?e.parentNode:e),new ru(n)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=na(n),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Un(e)};xe.hydrate=function(e,n,t){if(!Dl(n))throw Error(w(200));return jl(null,e,n,!0,t)};xe.hydrateRoot=function(e,n,t){if(!lu(e))throw Error(w(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=Fc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Mc(n,null,e,1,t??null,l,!1,i,o),e[Xe]=n.current,bt(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Al(n)};xe.render=function(e,n,t){if(!Dl(n))throw Error(w(200));return jl(null,e,n,!1,t)};xe.unmountComponentAtNode=function(e){if(!Dl(e))throw Error(w(40));return e._reactRootContainer?(Un(function(){jl(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};xe.unstable_batchedUpdates=qo;xe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Dl(t))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return jl(e,n,t,!1,r)};xe.version="18.2.0-next-9e3b772b8-20220608";function Ac(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ac)}catch(e){console.error(e)}}Ac(),Ms.exports=xe;var gv=Ms.exports,hs=gv;au.createRoot=hs.createRoot,au.hydrateRoot=hs.hydrateRoot;const yv=`float ease(float t) {
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
`,xv=`#include config

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
`,Ev=`bool nan(in vec2 v) {
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

float p(in float v) {
  return mix(0., v, curvature < 0. || v > 0.);
}

#if DIMENSIONS >= 3
vec3 project(in vec3 v, in float k) {
  float nr = p(v.z + k);
  return vec3(v.xy / nr, 0);
}
#endif
#if DIMENSIONS >= 4
vec3 project(in vec4 v, in float k) {
  float nr = p(v.w * fov4 + k);
  return v.xyz / nr;
}
#endif
#if DIMENSIONS >= 5
vec4 project(in vec5 v, in float k) {
  float nr = p(v.u * fov5 + k);
  return v.v / nr;
}
#endif
#if DIMENSIONS >= 6
vec5 project(in vec6 v, in float k) {
  float nr = p(v.u.y * fov6 + k);
  return vec5(v.v / nr, v.u.x / nr);
}
#endif
#if DIMENSIONS >= 7
vec6 project(in vec7 v, in float k) {
  float nr = p(v.u.z * fov7 + k);
  return vec6(v.v / nr, v.u.xy / nr);
}
#endif
#if DIMENSIONS >= 8
vec7 project(in vec8 v, in float k) {
  float nr = p(v.u.w * fov8 + k);
  return vec7(v.v / nr, v.u.xyz / nr);
}
#endif
#if DIMENSIONS >= 9
vec8 project(in vec9 v, in float k) {
  float nr = p(v.t * fov9 + k);
  return vec8(v.v / nr, v.u / nr);
}
#endif

#if PROJECTION3 == 9

// vec3 square(vec2 proj) {
//   float Ke = 1.854;
//   float iKe = -1. / Ke;

//   vec2 a = vec2(proj.x - proj.y, proj.x + proj.y) / sqrt(2.);
//   vec2 sqf = vec2(a.x * a.x - a.y * a.y - 1., 2. * a.x * a.y);

//   float k = sqrt(sqf.x * sqf.x + sqf.y * sqf.y);
//   vec2 sq = vec2(sqrt((k + sqf.x) / 2.), sign(sqf.y) * sqrt((k - sqf.x) / 2.));

//   vec2 la = a + sq;

//   vec2 ac = -vec2(atan(la.y, la.x), log(sqrt(la.x * la.x + la.y * la.y)));

//   vec2 e = ellipticFi(ac, .5);

//   vec2 R = vec2(iKe * (e.x + e.y), iKe * (e.y - e.x));

//   vec2 r = R;
//   if(R.x < R.y) {
//     r *= -1.;
//   }
//   vec2 cr = vec2(r.x - 1., r.y + 1.);
//   if(R.x <= -R.y) {
//     return vec3(cr.yx, 0.);
//   }
//   return vec3(cr, 0.);
// }
#endif
`,Sv=`#include helpers
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

vec3 xproject(in vec2 v) {
  return vec3(v, 0.);
}

#if PROJECTION3 > 5
#include complex
#endif

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
  float nr = 1. / dot(z, z);
  return vec3(z * vec2(1. + nr, 1. - nr), 0.);
  #elif PROJECTION3 == 5 // UPPERHALF
  v.xy /= v.z;
  v.z = 1. / v.z;
  v.yz *= 2. / p(1. + v.x);
  v.z -= 1.;
  return vec3(v.yz, 0.);
  #elif PROJECTION3 == 6 // BAND
  vec2 z = project(v, 1.).xy;
  return vec3((2. / PI) * ((clog(cone + z)) - clog(cone - z)), 0.);
  #elif PROJECTION3 == 7 // CROSS
  vec2 z = project(v, 1.).xy;
  // Sum of angles
  // float o = -.5 * PI;
  // vec2 a = vec2(cos(o), sin(o));
  return vec3((2. / PI) * .5 * (clog(cone + z) - clog(cone - z) + cmul(ci, clog(cone - cmul(ci, z))) + cmul(-ci, clog(cone - cmul(-ci, z)))), 0.);
  #elif PROJECTION3 == 8 // HEART
  vec2 z = project(v, 1.).xy;
  return vec3(z.x * z.y + z.y, -.5 * (z.x * z.x - z.y * z.y + 2. * z.x - 0.75), 0.);
  #elif PROJECTION3 == 9 // TEARDROP
  vec2 z = project(v, 1.).xy;
  return vec3(sign(z.y) *
    sqrt((sqrt((1. + z.x) * (1. + z.x) + z.y * z.y) - (1. + z.x)) / 2.), -(sqrt((sqrt((1. + z.x) * (1. + z.x) + z.y * z.y) + (1. + z.x)) / 2.) - 0.75), 0.);
  #elif PROJECTION3 == 10 // SQUARE
  float Ke = 1.854;
  vec2 z = project(v, 1.).xy;
  z = cmul(conei / sqrt(2.), z);
  z = cacos(z);
  // return vec3(z, 0.);
  vec2 w = ellipticFi(z, .5);
  if(z.x > PI / 2.) {
    w.x = 2. * Ke - w.x;
  }
  w = cmul(vec2(1., -1.) / -Ke, w) + vec2(1., -1.);
  return vec3(w, 0.);
  #elif PROJECTION3 == 11 // RING
  vec2 z = project(v, 1.).xy;
  z = (2. / PI) * ((clog(cone + z)) - clog(cone - z));
  float k = 4.;
  float P = 1.1393;
  return vec3(cexp(TAU * cmul(ci, (z.xy + ci)) / (k * P)), 0.);
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
  return xproject(v.xyz);
  #elif PROJECTION4 == 2 // KLEIN
  return xproject(project(v, 0.));
  #elif PROJECTION4 == 3 // INVERTED
  return xproject(project(v, -1.));
  #elif PROJECTION4 == 4 // JOUKOWSKY
  vec3 z = project(v, 1.);
  float nr = 1. / dot(z, z);
  return xproject(vec3(z * vec3(1. + nr, 1. - nr, 1. + nr)));
  #elif PROJECTION4 == 5 // UPPERHALF
  v.xyz /= v.w;
  v.w = 1. / v.w;
  v.yzw *= 2. / p(1. + v.x);
  v.w -= 1.;
  return xproject(v.ywz);
  #else
  return xproject(v.xyz);
  #endif
}
#endif

#if DIMENSIONS >= 5
vec3 xproject(in vec5 v) {
  #if PROJECTION5 == 0 // STEREOGRAPHIC
  return xproject(project(v, 1.));
  #elif PROJECTION5 == 1 // ORTHOGRAPHIC
  return xproject(v.v);
  #elif PROJECTION5 == 2 // KLEIN
  return xproject(project(v, 0.));
  #elif PROJECTION5 == 3 // INVERTED
  return xproject(project(v, -1.));
  #elif PROJECTION5 == 4 // JOUKOWSKY
  vec4 z = project(v, 1.);
  float nr = 1. / dot(z, z);
  return xproject(vec4(z * vec4(1. + nr, 1. - nr, 1. + nr, 1. - nr)));
  #elif PROJECTION5 == 5 // UPPERHALF
  v.v /= v.u;
  v.u = 1. / v.u;
  v.v.yzw *= 2. / p(1. + v.v.x);
  v.u *= 2. / p(1. + v.v.x);
  v.u -= 1.;
  return xproject(vec4(v.v.y, v.u, v.v.w, v.v.z));
  #else
  return xproject(v.v);
  #endif
}
#endif

#if DIMENSIONS >= 6
vec3 xproject(in vec6 v) {
  #if PROJECTION6 == 0 // STEREOGRAPHIC
  return xproject(project(v, 1.));
  #elif PROJECTION6 == 1 // ORTHOGRAPHIC
  return xproject(vec5(v.v, v.u.x));
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
  return xproject(vec5(v.v, v.u.x));
  #endif
}
#endif

#if DIMENSIONS >= 7
vec3 xproject(in vec7 v) {
  #if PROJECTION7 == 0 // STEREOGRAPHIC
  return xproject(project(v, 1.));
  #elif PROJECTION7 == 1 // ORTHOGRAPHIC
  return xproject(vec6(v.v, v.u.xy));
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
  return xproject(vec6(v.v, v.u.xy));
  #endif
}
#endif

#if DIMENSIONS >= 8
vec3 xproject(in vec8 v) {
  #if PROJECTION8 == 0 // STEREOGRAPHIC
  return xproject(project(v, 1.));
  #elif PROJECTION8 == 1 // ORTHOGRAPHIC
  return xproject(vec7(v.v, v.u.xyz));
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
  return xproject(vec7(v.v, v.u.xyz));
  #endif
}
#endif

#if DIMENSIONS >= 9
vec3 xproject(in vec9 v) {
  #if PROJECTION9 == 0 // STEREOGRAPHIC
  return xproject(project(v, 1.));
  #elif PROJECTION9 == 1 // ORTHOGRAPHIC
  return xproject(vec8(v.v, v.u));
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
// mat4 findRotationMatrix(in vec4 u, in vec4 v) {
//   vec4 w = u + v;
//   if(length(w) < 0.0001) {
//     return mat4(-1.);
//   }

//   return 2. * outerProduct(w, w) / dot(w, w) - mat4(1.);
// }
// mat3 findRotationMatrix(in vec3 u, in vec3 v) {
//   vec3 w = u + v;
//   if(length(w) < 0.0001) {
//     return mat3(-1.);
//   }

//   return 2. * outerProduct(w, w) / dot(w, w) - mat3(1.);
// }

// vec3 xprojectnormal(in vec4 n, in vec4 p, in vec3 pp) {
//   #if DIMENSIONS == 4

//   vec4 np = p + n;
//   vec3 npp = xproject(np);

//   return npp - pp;
//   #else
//   return n.xyz;
//   #endif
// }

// vec4 xprojectnormal(in vec4 p, in vec4 n) {
//   #if DIMENSIONS == 4
//   vec4 v = xproject(n);
//   #if PROJECTION == 'STEREOGRAPHIC'
//   return vec4(v.xyz * (p.w - curvature) + p.xyz, 1.);
//   #endif
//   #if PROJECTION == 'ORTHOGRAPHIC'
//   return vec4(v.xyz + p.xyz, 1.);
//   #endif
//   #if PROJECTION == 'KLEIN'
//   return vec4(v.xyz * (p.w) + p.xyz, 1.);
//   #endif
//   #if PROJECTION == 'INVERTED'
//   return vec4(n.xyz * (p.w + curvature) + p.xyz, 1.);
//   #endif
//   #if PROJECTION == 'JEMISPHERE'
//   return vec4(v.xyz, 1.);
//   #endif
//   #if PROJECTION == 'UPPERHALF'
//   v.xyz /= v.w;
//   v.w = 1. / v.w;

//   v.xzw *= 2. / (1. + v.y);
//   v.y = 1.;
//   v.wxyz = v.yxzw;
//   v.z *= -1.;
//   return v;
//   #endif
//   #else
//   return n;
//   #endif
// }

// vec4 cross4(in vec4 v1, in vec4 v2, in vec4 v3) {
//   return vec4(v2.y * v3.z * v1.w -
//     v3.y * v2.z * v1.w -
//     v1.y * v3.z * v2.w +
//     v3.y * v1.z * v2.w +
//     v3.w * v1.y * v2.z -
//     v3.w * v2.y * v1.z, -v2.x * v3.z * v1.w +
//     v3.x * v2.z * v1.w +
//     v1.x * v3.z * v2.w -
//     v3.x * v1.z * v2.w -
//     v3.w * v1.x * v2.z +
//     v3.w * v2.x * v1.z, v2.x * v3.y * v1.w -
//     v3.x * v2.y * v1.w -
//     v1.x * v3.y * v2.w +
//     v3.x * v1.y * v2.w +
//     v3.w * v1.x * v2.y -
//     v3.w * v2.x * v1.y, -v1.x * v2.y * v3.z +
//     v1.x * v3.y * v2.z +
//     v2.x * v1.y * v3.z -
//     v2.x * v3.y * v1.z -
//     v3.x * v1.y * v2.z +
//     v3.x * v2.y * v1.z);
// }
`,wv=`const vec2 cone = vec2(1., 0);
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
`,Nv=`vec4 light(vec4 color, float ambient, float shininess) {
  #ifdef LIGHTING
  vec3 eyeDirection = normalize(eye - vPosition);
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

  return vec4((ambient + diffuse + specular) * color.rgb, color.a);
  #else
  return color;
  #endif
}
`,kv="sßx",ms={active:1,inactive:0,snub:"s",holosnub:"ß",custom:.5,activeVoid:"x",void:""},Dc=e=>e===0?"inactive":e===1?"active":e==="s"?"snub":e==="ß"?"holosnub":e==="x"?"activeVoid":e===""?"void":"custom",Tv=e=>{const n=[];for(let t=0;t<e[0].length;t++){n.push([]);for(let r=0;r<e.length;r++)n[t].push(e[r][t])}return n},Gr=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){t[r]=new Array(n[0].length);for(let l=0;l<n[0].length;l++){let i=0;for(let o=0;o<n.length;o++)i+=e[r][o]*n[o][l];t[r][l]=i}}return t},Ep=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){let l=0;for(let i=0;i<e[0].length;i++)l+=e[r][i]*n[i];t[r]=l}return t},Sp=(e,n)=>{for(let t=0;t<e.length;t++)for(let r=0;r<e[0].length;r++)e[t][r]=n[t][r];return e},wn=e=>{const n=new Array(e);for(let t=0;t<e;t++)n[t]=new Array(e).fill(0),n[t][t]=1;return n},Iv=e=>e.every((n,t)=>n.every((r,l)=>t===l||e[t][l]===0)),wp=e=>{const n=e[0].length;let t=e.map(i=>i.slice()),r=wn(n),l=1e3;for(;!Iv(t)&&l-- >0;){let i=0,o=1;for(let a=0;a<n;a++)for(let h=0;h<n;h++)a!==h&&st(t[a][h])>st(t[i][o])&&(i=a,o=h);const u=t[i][i]===t[o][o]?Lc(t[i][o])*He/4:.5*Pv(2*t[i][o]/(t[i][i]-t[o][o])),s=wn(n);s[o][o]=s[i][i]=cn(u),s[o][i]=s[i][o]=-Le(u),s[o][i]*=-1,r=Gr(r,s),t=Gr(Gr(Tv(s),t),s)}return{vectors:r,values:t.map((i,o)=>st(i[o])<1e-8?0:i[o])}},Np=e=>{const n=e.length,t=[];for(let r=0;r<n;r++)t.push([...e[r],...wn(n)[r]]);for(let r=0;r<n;r++){const l=t[r][r];for(let i=r+1;i<n;i++){const o=t[i][r]/l;for(let u=r;u<2*n;u++)t[i][u]-=o*t[r][u]}}for(let r=n-1;r>=0;r--){const l=t[r][r];for(let i=r-1;i>=0;i--){const o=t[i][r]/l;for(let u=0;u<2*n;u++)t[i][u]-=o*t[r][u]}for(let i=n;i<2*n;i++)t[r][i]/=l}return t.map(r=>r.slice(n))},Sl=e=>{if(e.length===2)return[e[0][0],e[1][0],e[0][1],e[1][1]];if(e.length===3)return[e[0][0],e[1][0],e[2][0],e[0][1],e[1][1],e[2][1],e[0][2],e[1][2],e[2][2]];if(e.length===4)return[e[0][0],e[1][0],e[2][0],e[3][0],e[0][1],e[1][1],e[2][1],e[3][1],e[0][2],e[1][2],e[2][2],e[3][2],e[0][3],e[1][3],e[2][3],e[3][3]];if(e.length===5)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],e[0][4]],[[e[1][0],e[1][1],e[1][2],e[1][3]],e[1][4]],[[e[2][0],e[2][1],e[2][2],e[2][3]],e[2][4]],[[e[3][0],e[3][1],e[3][2],e[3][3]],e[3][4]],[[e[4][0],e[4][1],e[4][2],e[4][3]],e[4][4]]];if(e.length===6)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5]]]];if(e.length===7)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6]]]];if(e.length===8)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]]]];if(e.length===9)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]],e[0][8]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]],e[1][8]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]],e[2][8]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]],e[3][8]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]],e[4][8]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]],e[5][8]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]],e[6][8]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]],e[7][8]],[[e[8][0],e[8][1],e[8][2],e[8][3]],[e[8][4],e[8][5],e[8][6],e[8][7]],e[8][8]]];throw new Error("Unsupported matrix size")},Rv=(e,n,t,r)=>{const l=1/jc(e/2),i=1/(t-r),o=wn(4);return o[0][0]=l/n,o[1][1]=l,o[2][2]=(r+t)*i,o[3][2]=-1,o[2][3]=2*r*t*i,o[3][3]=0,o},Cv=(e,n,t)=>{if(st(e[0]-n[0])<1e-4&&st(e[1]-n[1])<1e-4&&st(e[2]-n[2])<1e-4)return wn(4);let r=e[0]-n[0],l=e[1]-n[1],i=e[2]-n[2],o=1/Qr(r*r+l*l+i*i);r*=o,l*=o,i*=o;let u=t[1]*i-t[2]*l,s=t[2]*r-t[0]*i,a=t[0]*l-t[1]*r;o=Qr(u*u+s*s+a*a),o?(o=1/o,u*=o,s*=o,a*=o):(u=0,s=0,a=0);let h=l*a-i*s,m=i*u-r*a,v=r*s-l*u;o=Qr(h*h+m*m+v*v),o?(o=1/o,h*=o,m*=o,v*=o):(h=0,m=0,v=0);const p=wn(4);return p[0][0]=u,p[1][0]=h,p[2][0]=r,p[0][1]=s,p[1][1]=m,p[2][1]=l,p[0][2]=a,p[1][2]=v,p[2][2]=i,p[0][3]=-(u*e[0]+s*e[1]+a*e[2]),p[1][3]=-(h*e[0]+m*e[1]+v*e[2]),p[2][3]=-(r*e[0]+l*e[1]+i*e[2]),p},{abs:st,cos:cn,sin:Le,tan:jc,cosh:kp,sinh:Tp,acos:Ip,acosh:Rp,atan:Pv,atan2:zv,min:$e,max:Pt,round:Cp,sqrt:Qr,sign:Lc,ceil:Pp,floor:zp,log:Op,exp:_p,hypot:Mp,pow:Ov,PI:He}=Math,ao=He*2;function*_v(e,n){if(n<0||e.length<n)return;const t=Array.from(Array(n).keys());for(;;){yield t.map(l=>e[l]);let r=n-1;for(;r>=0&&t[r]>=e.length-n+r;)r--;if(r<0)return;for(let l=t[r]+1;r<n;r++,l++)t[r]=l}}const Fp=(e,n=2)=>Array.from(_v(e,n)),Mv=e=>e.charCodeAt(0)-97,Kr=e=>e?e*Kr(e-1):1,Ap=(e,n)=>Kr(e)/(Kr(n)*Kr(e-n)),Dp=(e,n)=>{let t;return(...r)=>(clearTimeout(t),t=setTimeout(()=>e(...r),n),()=>clearTimeout(t))},Fv=(e,n=null,t=1,r=!1)=>{if(n===null&&(n=e,e=0),t===0)throw new Error("Step cannot be zero.");if(n<e&&t>0||n>e&&t<0){if(r)return[];t=-t}return new Array(Math.ceil((n-e)/t)).fill().map((l,i)=>e+i*t)};var Uc={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(Wc,function(){var t=function(){function r(p){return o.appendChild(p.dom),p}function l(p){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===p?"block":"none";i=p}var i=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(p){p.preventDefault(),l(++i%o.children.length)},!1);var u=(performance||Date).now(),s=u,a=0,h=r(new t.Panel("FPS","#0ff","#002")),m=r(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var v=r(new t.Panel("MB","#f08","#201"));return l(0),{REVISION:16,dom:o,addPanel:r,showPanel:l,begin:function(){u=(performance||Date).now()},end:function(){a++;var p=(performance||Date).now();if(m.update(p-u,200),p>s+1e3&&(h.update(1e3*a/(p-s),100),s=p,a=0,v)){var g=performance.memory;v.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return p},update:function(){u=this.end()},domElement:o,setMode:l}};return t.Panel=function(r,l,i){var o=1/0,u=0,s=Math.round,a=s(window.devicePixelRatio||1),h=80*a,m=48*a,v=3*a,p=2*a,g=3*a,y=15*a,E=74*a,d=30*a,c=document.createElement("canvas");c.width=h,c.height=m,c.style.cssText="width:80px;height:48px";var f=c.getContext("2d");return f.font="bold "+9*a+"px Helvetica,Arial,sans-serif",f.textBaseline="top",f.fillStyle=i,f.fillRect(0,0,h,m),f.fillStyle=l,f.fillText(r,v,p),f.fillRect(g,y,E,d),f.fillStyle=i,f.globalAlpha=.9,f.fillRect(g,y,E,d),{dom:c,update:function(x,S){o=Math.min(o,x),u=Math.max(u,x),f.fillStyle=i,f.globalAlpha=1,f.fillRect(0,0,h,y),f.fillStyle=l,f.fillText(s(x)+" "+r+" ("+s(o)+"-"+s(u)+")",v,p),f.drawImage(c,g+a,y,E-a,d,g,y,E-a,d),f.fillRect(g+E-a,y,a,d),f.fillStyle=i,f.globalAlpha=.9,f.fillRect(g+E-a,y,a,s((1-x/S)*d))}}},t})})(Uc);var Av=Uc.exports;const Dv=Gc(Av),jv=({radius:e=1,widthSegments:n=16,segments:t=16}={})=>{const r=[],l=[],i=[],o=[];let u=0;const s=[];for(let a=0;a<=t;a++){const h=[],m=a/t;let v=0;a===0?v=.5/n:a===t&&(v=-.5/n);for(let p=0;p<=n;p++){const g=p/n,y=[-e*cn(g*ao)*Le(m*He),e*cn(m*He),e*Le(g*ao)*Le(m*He)];l.push(...y);const E=(y[0]**2+y[1]**2+y[2]**2)**-.5;i.push(...y.map(d=>d*E)),o.push(g+v,1-m),h.push(u++)}s.push(h)}for(let a=0;a<t;a++)for(let h=0;h<n;h++){const m=s[a][h+1],v=s[a][h],p=s[a+1][h],g=s[a+1][h+1];a!==0&&r.push(m,v,g),a!==t-1&&r.push(v,p,g)}return{vertices:l,normals:i,uvs:o,indices:r}},Lv=({radius:e=null,radiusTop:n=1,radiusBottom:t=1,height:r=1,radialSegments:l=8,segments:i=1}={})=>{const o=[],u=[],s=[],a=[];e!==null&&(n=e,t=e);let h=0;const m=[],v=r/2,p=(t-n)/r;for(let g=0;g<=i;g++){const y=[],E=g/i,d=E*(t-n)+n;for(let c=0;c<=l;c++){const f=c/l,x=f*ao,S=Le(x),T=cn(x),k=[d*S,-E*r+v,d*T];u.push(...k);const N=[S,p,T],A=(N[0]**2+N[1]**2+N[2]**2)**-.5;s.push(...N.map(O=>O*A)),a.push(f,1-E),y.push(h++)}m.push(y)}for(let g=0;g<l;g++)for(let y=0;y<i;y++){const E=m[y][g],d=m[y+1][g],c=m[y+1][g+1],f=m[y][g+1];o.push(E,d,f),o.push(d,c,f)}return{vertices:u,normals:s,uvs:a,indices:o}},Uv=({segments:e=3}={})=>{const n=[],t=[],r=[],l=[],i=1/e;for(let o=0;o<e+1;o++)for(let u=0;u<o+1;u++)t.push((2*u-o)*i/2,o*i,0),r.push(0,0,1),l.push(i*u,1-i*o);for(let o=1;o<e+1;o++)for(let u=0;u<o;u++){const s=o*(o+1)/2+u,a=o*(o-1)/2+u;if(n.push(a,s,s+1),o<e){const h=(o+1)*(o+2)/2+u;n.push(h+1,s,s+1)}}return{vertices:t,normals:r,uvs:l,indices:n}},Bv=`#version 300 es
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
`,$v=`#version 300 es
precision highp float;

#include globals

uniform mat4 viewProjection;
uniform float curvature;
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
  pos = xnormalize(pos);
  next = xnormalize(next);

  vec3 position = xproject(pos);

  vec3 n = xproject(next) + NOISE; // Avoid collinearity
  vec3 k = normalize(position - n); // current segment direction

  // Rodrigues' rotation formula
  // To rotate v around axis k by angle r:
  float r = (1.f - uv.x) * TAU;
  vec3 v = normalize(cross(n, position));
  vec3 normal = normalize(v * cos(r) + cross(k, v) * sin(r)); // + k * dot(k, v) * (1. - cos(r));

  position = inflate(position, pos, normal, thickness, 0.f);

  gl_Position = viewProjection * vec4(position, 1.f);

  vColor = color;
  vPosition = position;
  vNormal = normal;
}
`,Hv=`#version 300 es
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
`,Vv=`#version 300 es
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

  vec3 position = xproject(pos);

  vec3 nn = xproject(next) - position;
  vec3 oo = xproject(other) - position;

  // Refine if near collinearity
  //   if(length(nn) < .0001 || length(oo) < .0001) {
  //     next = trix(iCenter, iPosition, iTarget, t + vec2(.1, 0.));
  //     other = trix(iCenter, iPosition, iTarget, t + vec2(0., .1));

  //     if(length(t) != 0. || segments > 1.) {
  //       next = xnormalize(next);
  //       other = xnormalize(other);
  //     }

  //     nn = xproject(next) - position;
  //     oo = xproject(other) - position;
  //   }

  gl_Position = viewProjection * vec4(position, 1.f);

  vColor = color;
  vPosition = position;
  vNormal = normalize(cross(nn, oo));
}
`,Wv=`#version 300 es
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
`,Gv=`#version 300 es
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
  pos = xnormalize(pos);

  vec3 position = xproject(pos);
  position = inflate(position, pos, normal, thickness, .01f);

  gl_Position = viewProjection * vec4(position, 1.f);

  vColor = color;
  vPosition = position;
  vNormal = normal;
}
`,vi={vertex:()=>jv(),edge:e=>Lv({segments:e}),face:e=>Uv({segments:e})};function Qv(e){return{meshes:["vertex","edge","face"],...hi(e,"vertex",Gv,Wv,vi.vertex,1e4,e.dimensions,e.showVertices),...hi(e,"edge",$v,Bv,vi.edge,1e4,e.dimensions,e.showEdges,["position","target"]),...hi(e,"face",Vv,Hv,vi.face,1e4,e.dimensions,e.showFaces,["position","target","center"]),changeArity(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].changeArity(n)},updateGeometries(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].updateGeometry(n)},recompilePrograms(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].recompileProgram(n)},updateUniforms(n,t=!1){for(let r=0;r<this.meshes.length;r++){const l=this.meshes[r],i=this[l];if(!t){i.uniforms.curvature.update(n.curvature),i.uniforms.matrix.update(Sl(n.matrix));for(let o=4;o<=n.dimensions;o++)i.uniforms[`fov${o}`].update(jc(He*n[`fov${o}`]*.5/180));l==="vertex"?i.uniforms.thickness.update(n.vertexThickness):l==="edge"?i.uniforms.thickness.update(n.edgeThickness):(i.uniforms.segments.update(n.curve?n.segments:1),i.uniforms.opacity.update(xn[n.ambiance].opacity))}i.uniforms.viewProjection.update(n.camera.viewProjection),xn[n.ambiance].lighting&&i.uniforms.eye.update(n.camera.eye)}},plotType(n,t,r){const l=this[t],i=n[t],{dimensions:o}=n,u=xn[n.ambiance];let s=r?r[0]:0,a=r?r[1]:i.length;if(s===a)return;let h=s,m=a;if(t==="face"){let g=0;for(let y=0;y<s;y++){const E=i[y].vertices.length;g+=E<3?0:E===3?1:E}h=g;for(let y=s;y<a;y++){const E=i[y].vertices.length;g+=E<3?0:E===3?1:E}m=g}l.instances<m&&l.extendAttributes(m),l.count=m;const v=o>4?9:o;let p=h;for(let g=s;g<a;g++){let y=[];const E=i[g];if(t==="vertex")y.push({...E,position:E.vertex,type:t});else if(t==="edge")y.push({...E,position:n.vertex[E.start].vertex,target:n.vertex[E.end].vertex,type:t});else{if(E.vertices.length<3)continue;if(E.vertices.length===3)y.push({...E,position:n.vertex[E.vertices[0]].vertex,target:n.vertex[E.vertices[1]].vertex,center:n.vertex[E.vertices[2]].vertex});else{const d=new Array(E.vertices.length);for(let f=0;f<E.vertices.length;f++)d[f]=n.vertex[E.vertices[f]].vertex;const c=new Array(o).fill(0);for(let f=0;f<d.length;f++){const x=d[f];for(let S=0;S<o;S++)c[S]+=x[S]}for(let f=0;f<o;f++)c[f]/=d.length;for(let f=0;f<d.length;f++){const x={...E,position:d[f],target:d[(f+1)%d.length],center:c};E.word.length%2===(n.curvature>0?0:1)&&([x.position,x.target]=[x.target,x.position]),y.push(x)}}}for(let d=0;d<y.length;d++){const c=y[d];for(let x=0;x<o;x++)for(let S=0;S<l.varying.length;S++){const T=l.varying[S];l.attributes[T].data[p*v+x]=c[T][x]}const f=u.color(c,t,n);l.attributes.color.data[p*3+0]=f[0],l.attributes.color.data[p*3+1]=f[1],l.attributes.color.data[p*3+2]=f[2],p++}for(let d=0;d<l.varying.length;d++){const c=l.varying[d];l.attributes[c].update(h,m)}l.attributes.color.update(h,m)}},plot(n,t){for(let r=0;r<this.meshes.length;r++){const l=this.meshes[r];this[l].visible&&this.plotType(n,l,t[l])}}}}const Kv=`#version 300 es
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
`,Xv=`#version 300 es
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
`,Yv=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,qv=`#version 300 es
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
`,Zv=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,bv=`#version 300 es
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
`,ep=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,np=`#version 300 es
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
`,tp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`;function rp(e){return{...Ot(e,"oit",ep,bv,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),...Ot(e,"down",Zv,qv,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...Ot(e,"up",tp,np,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...Ot(e,"afterImage",Jv,Kv,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),...Ot(e,"bloom",Yv,Xv,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function lp(e){const{gl:n}=e,t=xn[e.ambiance],r=e.msaa?$e(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),mi(e,e.rb.base,n.RGBA8,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,e.rb.base),mi(e,e.rb.depth,n.DEPTH_COMPONENT24,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),e.fb.oit&&(n.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(n.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(n.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&n.deleteRenderbuffer(e.rb.depth_copy),e.meshes.face.visible&&t.opacity<1&&t.transparency==="oit"&&(e.fb.oit=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),r?(e.rb.depth_copy=n.createRenderbuffer(),mi(e,e.rb.depth_copy,n.DEPTH_COMPONENT24),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth_copy)):n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),e.textures.oitAccum=nn(e,n.RGBA16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=nn(e,n.R16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT1,n.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(n.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(n.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(n.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(n.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),t.afterImage&&(e.fb.afterImage=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=nn(e,n.RGBA8),e.textures.afterImageScreen=nn(e,n.RGBA8),e.textures.afterImageOutScreen=nn(e,n.RGBA8)),e.fb.kawase&&(n.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(n.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let l=0;l<e.textures.kawase.length;l++)n.deleteTexture(e.textures.kawase[l].texture);e.textures.kawase=null}if(e.textures.blur&&(n.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(n.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),t.glow){e.fb.kawase=n.createFramebuffer(),e.fb.bloom=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let l=0;l<t.glow.steps;l++)e.textures.kawase[l]=nn(e,n.RGBA8,t.glow.pow**-l);e.textures.blur=nn(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.blur.texture,0),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=nn(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.bloom.texture,0)}}const Bc=window.location.search.includes("stats");let Jr;Bc&&(Jr=new Dv,Jr.dom.id="stats",document.body.appendChild(Jr.dom));const jp=e=>{const n=document.createElement("canvas");n.id="webgl2",document.body.appendChild(n);const t=n.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:t},!t){console.error("Unable to initialize WebGL. Your browser may not support it.");return}t.getExtension("EXT_color_buffer_float"),t.enable(t.DEPTH_TEST);const r={zoom:1,fov:He/3,position:[0,0,-e.zoom],update(){const a=t.canvas.clientWidth/t.canvas.clientHeight;this.zoom=$e(t.canvas.clientWidth/t.canvas.clientHeight,1),this.eye=[0,0,this.position[2]/this.zoom];const h=Cv(this.eye,[0,0,0],[0,1,0]),m=Rv(this.fov,a,.001,1e3);this.viewProjection=Sl(Gr(m,h))}};r.update();const l=rp(e),i=Qv(e),o={base:t.createRenderbuffer(),depth:t.createRenderbuffer()},u={base:t.createFramebuffer()};return{...e,gl:t,camera:r,meshes:i,passes:l,rb:o,fb:u,textures:{}}},Lp=(e,n)=>{e.meshes[n].visible=e[n==="vertex"?"showVertices":n==="edge"?"showEdges":"showFaces"]},Up=(e,n=null)=>{if(e.currentOrder===0||n===null&&e.ranges.length===0||n!==null&&n>=e.ranges.length)return;const t=n!==null?e.ranges[n]:{vertex:[e.ranges[0].vertex[0],e.ranges[e.currentOrder-1].vertex[1]],edge:[e.ranges[0].edge[0],e.ranges[e.currentOrder-1].edge[1]],face:[e.ranges[0].face[0],e.ranges[e.currentOrder-1].face[1]]};e.meshes.plot(e,t),document.title=`Coxeter Explorer - ${e.spaceType==="finite"?"S":e.spaceType==="affine"?"E":"H"}^${e.dimensions} ${e.currentOrder<e.order?`(${e.currentOrder}/${e.order})…`:""}- ${e.vertex.length} vertices, ${e.edge.length} edges, ${e.face.length} faces`},Bp=e=>{e.camera.fov=He*e.fov3/180,e.camera.update(),e.meshes.updateUniforms(e,!0)},$p=e=>{const n=xn[e.ambiance];e.gl.clearColor(...n.background),n.glow&&(e.passes.bloom.uniforms.exposure.update(n.glow.exposure),e.passes.bloom.uniforms.strength.update(n.glow.strength),e.passes.down.uniforms.offset.update(n.glow.offset.down),e.passes.up.uniforms.offset.update(n.glow.offset.up)),n.afterImage&&e.passes.afterImage.uniforms.strength.update(n.afterImage)},ip=e=>{Bc&&Jr.update();const{gl:n}=e,t=e.msaa?$e(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,r=xn[e.ambiance];up(n.canvas,e.subsampling)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),lp(e),e.camera.update(),e.meshes.updateUniforms(e,!0)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),e.meshes.vertex.render(e),e.meshes.edge.render(e),e.meshes.face.visible&&r.opacity<1&&r.transparency==="oit"?(t&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):(r.opacity<1&&r.transparency==="blend"&&(n.enable(n.BLEND),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA)),e.meshes.face.render(e));const l=r.afterImage?e.fb.afterImage:r.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,l),r.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let i=e.textures.bloom;if(r.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),r.glow?i=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),r.glow){n.disable(n.BLEND),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let o=0;o<r.glow.steps;o++){const u=o===0?i:e.textures.kawase[o-1],s=e.textures.kawase[o];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let o=r.glow.steps-1;o>=0;o--){const u=e.textures.kawase[o],s=o===0?e.textures.blur:e.textures.kawase[o-1];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,i.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=ip;const op={globals:xv,project:Sv,helpers:Ev,complex:wv,ease:yv,lighting:Nv},pi=(e,n,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e),en=(e,n,t)=>{let r,l,i;if(n===0)r=l=i=t;else{const o=t<.5?t*(1+n):t+n-t*n,u=2*t-o;r=pi(u,o,e+1/3),l=pi(u,o,e),i=pi(u,o,e-1/3)}return[r,l,i]},up=(e,n)=>{n=n||1,n=Math.max(0,n);const t=e.clientWidth*n|0,r=e.clientHeight*n|0;return e.width!==t||e.height!==r?(e.width=t,e.height=r,!0):!1},sp=(e,n)=>e.replace(/\bvecN\b/g,`vec${n}`).replace(/\bmatN\b/g,`mat${n}`),gs=(e,n,t)=>{var o;const r=xn[e.ambiance];let l="";r.lighting&&(l+=`#define LIGHTING ${pp.indexOf(r.lighting)}
`);const i=e.easing==="auto"?(o=e.spaceType)!=null&&o.startsWith("hyperbolic")&&e.projection4!=="inverted"?"quintic":"linear":e.easing;l+=`#define DIMENSIONS ${e.dimensions}
`;for(let u=3;u<=e.dimensions;u++)l+=`#define PROJECTION${u} ${dp.indexOf(e[`projection${u}`])}
`;return l+=`#define EASING ${vp.indexOf(i)}
`,r.opacity<1&&r.transparency==="oit"&&(l+=`#define OIT
`),Object.entries({...op,config:l}).forEach(([u,s])=>{n=n.replace(`#include ${u}`,s),t=t.replace(`#include ${u}`,s)}),[n,t].map(u=>sp(u,e.dimensions))},_r=(e,n,t,r,l)=>{if(e.gl.shaderSource(l,r),e.gl.compileShader(l),!e.gl.getShaderParameter(l,e.gl.COMPILE_STATUS)){const o=e.gl.getShaderInfoLog(l);return console.error(`An error occurred compiling the ${n}->${t} shader: ${o}`,{shaderSource:r}),o}},ys=(e,n,t)=>{const{gl:r}=e;if(r.linkProgram(t),!r.getProgramParameter(t,r.LINK_STATUS)){const i=r.getProgramInfoLog(t);return console.error(`Unable to initialize the ${n} shader program: ${i}`),i}},$c=(e,n,t,r,l=[])=>{const{gl:i}=e,o=i.createProgram(),u=i.createShader(i.VERTEX_SHADER),s=i.createShader(i.FRAGMENT_SHADER);if(_r(e,n,"vertex",t,u)||_r(e,n,"fragment",r,s)||(i.attachShader(o,u),i.attachShader(o,s),ys(e,n,o)))return;const a={program:o,vertexShader:u,fragmentShader:s,uniformsDef:l,recompile(h,m,v,p=null){_r(h,n,"vertex",m,this.vertexShader)||_r(h,n,"fragment",v,this.fragmentShader)||ys(h,n,this.program)||(p&&(this.uniformsDef=p),this.bindUniforms(h))},bindUniforms(h){this.uniforms={},this.uniformsDef.forEach(({name:m,type:v,value:p})=>{this.uniforms[m]=ap(h,this.program,m,v),this.uniforms[m].update(p)})}};return a.bindUniforms(e),a},zt=(e,n,t,r,l,i=null,o=null)=>{const{gl:u}=e;o=o||u.FLOAT;const s=o===u.FLOAT?4:2,a={name:t,mesh:n,indices:Hc,instances:i,data:l,size:r,type:o,update(h=null,m=null){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer),h===null&&m===null?u.bufferData(u.ARRAY_BUFFER,this.data,u.STATIC_DRAW):u.bufferSubData(u.ARRAY_BUFFER,h*this.size*s,this.data,h*this.size,(m-h)*this.size)},extend(h,m,v=!1){if(u.bindVertexArray(this.mesh.vao),this.size=h,this.location=u.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const p=h>4?3:1;this.name==="target"&&(this.location=h>4?6:4),this.name==="center"&&(this.location=h>4?9:5);for(let g=0;g<p;g++)u.enableVertexAttribArray(this.location+g);for(let g=0;g<p;g++)u.vertexAttribPointer(this.location+g,h/p,this.type,!1,h*s,h/p*g*s);if(this.instances)for(let g=0;g<p;g++)u.vertexAttribDivisor(this.location+g,this.instances);m&&(v&&m.length>=this.data.length&&m.set(this.data),this.data=m),this.update()},get(){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const h=new Float32Array(this.data.length);return u.getBufferSubData(u.ARRAY_BUFFER,0,h),h}};return a.buffer=u.createBuffer(),a.extend(r),a},Hc=(e,n,t)=>{const{gl:r}=e;r.bindVertexArray(n);const l=r.createBuffer();return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,l),r.bufferData(r.ELEMENT_ARRAY_BUFFER,t,r.STATIC_DRAW),{buffer:l,vao:n,indices:t,count:t.length,update(i){r.bindVertexArray(this.vao),this.indices=i,this.count=i.length,r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,this.buffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,i,r.STATIC_DRAW)}}},ap=(e,n,t,r)=>{const{gl:l}=e;return{program:n,update(o){if(l.useProgram(this.program),r.startsWith("m")){const u=parseInt(r.slice(1,2));if(u>4)for(let s=0;s<u;s++){const a=l.getUniformLocation(n,`${t}.c${s+1}.v`);if(a!==null&&l.uniform4fv(a,o[s][0]),u-4===1){const h=l.getUniformLocation(n,`${t}.c${s+1}.u`);h!==null&&l.uniform1f(h,o[s][1])}else if(u-4>1){const h=l.getUniformLocation(n,`${t}.c${s+1}.u`);if(h!==null&&l[`uniform${$e(u-4,4)}fv`](h,o[s][1]),u-8===1){const m=l.getUniformLocation(n,`${t}.c${s+1}.t`);m!==null&&l.uniform1f(m,o[s][2])}}}else{const s=l.getUniformLocation(n,t);s!==null&&l[`uniformMatrix${r.slice(1)}`](s,!1,o)}}else{const u=l.getUniformLocation(n,t);u!==null&&l[`uniform${r}`](u,o)}},get(){l.useProgram(this.program);const o=l.getUniformLocation(n,t);if(o!==null)return l.getUniform(this.program,o)}}},nn=(e,n,t=null)=>{const{gl:r}=e,l=t?~~(t*r.drawingBufferWidth):r.drawingBufferWidth,i=t?~~(t*r.drawingBufferHeight):r.drawingBufferHeight,o=r.createTexture();return r.bindTexture(r.TEXTURE_2D,o),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texStorage2D(r.TEXTURE_2D,1,n,l,i),{texture:o,width:l,height:i}},Ot=(e,n,t,r,l=[])=>{const i={name:n,vertex:t,fragment:r,...$c(e,n,t,r,l),recompileProgram(o){this.recompile(o,this.vertex,this.fragment,l)}};return{[n]:i}},hi=(e,n,t,r,l,i,o,u=!0,s=["position"])=>{const{gl:a}=e,h=l(e.curve?e.segments:1),m=p=>[{name:"viewProjection",type:"m4fv",value:Sl(wn(4))},{name:"matrix",type:`m${p.dimensions}fv`,value:Sl(p.matrix)},...xn[p.ambiance].lighting?[{name:"eye",type:"3fv",value:[0,0,0]}]:[],{name:"curvature",type:"1f",value:0},...["vertex","edge"].includes(n)?[{name:"thickness",type:"1f",value:0}]:[{name:"segments",type:"1f",value:p.curve?p.segments:1},{name:"opacity",type:"1f",value:0}],...Fv(4,p.dimensions+1,1,!0).map(g=>({name:`fov${g}`,type:"1f",value:p[`fov${g}`]}))];o=o>4?9:o;const v={attributes:{},varying:s,vertex:t,fragment:r,...$c(e,n,...gs(e,t,r),m(e)),recompileProgram(p){const[g,y]=gs(p,this.vertex,this.fragment);this.recompile(p,g,y,m(p))},changeArity(p){p=p>4?9:p,this.arity!==p&&(this.arity=p,s.forEach(g=>{this.attributes[g].extend(p,new Float32Array(this.instances*p),!1)}))},extendAttributes(p){this.instances=p,s.forEach(g=>{this.attributes[g].extend(this.arity,new Float32Array(p*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(p*3),!0)},updateGeometry(p){const g=l(p.curve?p.segments:1);this.indices.update(new Uint16Array(g.indices)),this.attributes.vertex.extend(3,new Float32Array(g.vertices)),this.attributes.uv.extend(2,new Float32Array(g.uvs)),this.attributes.normal.extend(3,new Float32Array(g.normals))},render(p){!this.count||!this.visible||(a.useProgram(this.program),a.bindVertexArray(this.vao),a.drawElementsInstanced(a.TRIANGLES,this.indices.count,a.UNSIGNED_SHORT,0,this.count))}};return v.visible=u,v.vao=a.createVertexArray(),v.indices=Hc(e,v.vao,new Uint16Array(h.indices)),v.attributes.vertex=zt(e,v,"vertex",3,new Float32Array(h.vertices)),v.attributes.uv=zt(e,v,"uv",2,new Float32Array(h.uvs)),v.attributes.normal=zt(e,v,"normal",3,new Float32Array(h.normals)),v.attributes.color=zt(e,v,"color",3,new Float32Array(i*3),1),s.forEach(p=>{v.attributes[p]=zt(e,v,p,o,new Float32Array(i*o),1)}),v.arity=o,v.instances=i,v.count=0,{[n]:v}},mi=(e,n,t,r)=>{const{gl:l}=e;l.bindRenderbuffer(l.RENDERBUFFER,n),r?l.renderbufferStorageMultisample(l.RENDERBUFFER,r,t,l.drawingBufferWidth,l.drawingBufferHeight):l.renderbufferStorage(l.RENDERBUFFER,t,l.drawingBufferWidth,l.drawingBufferHeight),l.bindRenderbuffer(l.RENDERBUFFER,null)},cp=document.createElement("canvas"),xs=cp.getContext("webgl2"),fp=xs.getParameter(xs.MAX_SAMPLES),dp=["stereographic","orthographic","klein","inverted","joukowsky","upperhalf","band","cross","heart","teardrop","square","ring"],vp=["auto","linear","sine","quadratic","cubic","quartic","quintic","exponential","circular","back","elastic","bounce","inverse_sine","inverse_quadratic","inverse_cubic","inverse_quartic","inverse_quintic"],Hp=["","knuthbendix","toddcoxeter","fundamental"],pp=["lambert","phong","blinn-phong","toon"],xn={neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},exposure:.75,lighting:!1,opacity:.05,transparency:"blend",color:({word:e})=>en(e.length*.17%1,.5,.6)},synthwave:{background:[...en(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},exposure:.75,lighting:!1,opacity:.12,afterImage:.7,transparency:"blend",color:({word:e})=>en((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],glow:!1,lighting:"phong",opacity:.4,transparency:"blend",color:({word:e})=>en(e.length*.03%1,1,.8)},oit:{background:[1,1,1,1],glow:!1,lighting:"blinn-phong",opacity:.3,transparency:"oit",color:({word:e})=>en(e.length*.03%1,1,.8)},reflection:{background:[1,1,1,1],glow:!1,lighting:"toon",opacity:.6,transparency:"blend",color:({word:e},n,{dimensions:t,showFaces:r})=>{const l=e.length?Mv(e[e.length-1])/t:0;return en(l%1,1,n==="face"?.6:r?.05:.8)}},pure:{background:[0,0,0,1],glow:!1,lighting:"lambert",opacity:1,color:({word:e})=>en(e.length*.03%1,.75,.7)},plain:{extended:!0,background:[1,1,1,1],glow:!1,lighting:!1,opacity:1,color:({word:e})=>en(e.length*.06%1,.7,.5)},plainblack:{extended:!0,background:[1,1,1,1],glow:!1,lighting:!1,opacity:1,color:({word:e},n)=>n==="face"?new Array(3).fill(1-Ov(.9,e.length+1)):[0,0,0]}},Es={dimensions:4,coxeter:[[1,5,2,2],[5,1,3,2],[2,3,1,4],[2,2,4,1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],matrix:[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],mirrors:[1,0,0,0],extended:!1,order:10,curve:!0,segments:32,easing:"auto",showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,showFaces:!1,grouper:"",controls:"space",ambiance:"neon",centered:null,zoom:1.5,fov3:90,projection3:"native",fov4:90,projection4:"stereographic",msaa:window.devicePixelRatio<=1,msaaSamples:fp,subsampling:window.devicePixelRatio},hp=e=>{if(e.coxeter.length!==e.dimensions||e.coxeter.some(n=>n.length!==e.dimensions)){const n=e.coxeter;e.coxeter=new Array(e.dimensions).fill().map((t,r)=>new Array(e.dimensions).fill().map((l,i)=>r===i?1:r===i+1||r+1===i?3:2));for(let t=0;t<$e(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.coxeter[t][r]=n[t][r],e.coxeter[r][t]=n[t][r]}if(e.mirrors.length!==e.dimensions){const n=e.mirrors;e.mirrors=new Array(e.dimensions).fill(0);for(let t=0;t<$e(n.length,e.dimensions);t++)e.mirrors[t]=n[t]}if(e.stellation.length!==e.dimensions||e.stellation.some(n=>n.length!==e.dimensions)){const n=e.stellation;e.stellation=new Array(e.dimensions).fill().map(()=>new Array(e.dimensions).fill(1));for(let t=0;t<$e(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.stellation[t][r]=n[t][r],e.stellation[r][t]=n[r][t]}return e},Vp=(e,n=[])=>{const t={...e},r=[];Object.entries(t).forEach(([l,i])=>{typeof Es[l]=="number"||l.startsWith("fov")?(i===""||isNaN(i))&&(delete t[l],r.push(l)):Array.isArray(Es[l])&&(Array.isArray(i[0])?i.find(o=>o.find(u=>i===""||isNaN(u)))&&(delete t[l],r.push(l)):i.find(o=>i===""||isNaN(o)&&!(l==="mirrors"&&kv.includes(o)))&&(delete t[l],r.push(l)))}),hp(t),(t.matrix.length!==t.dimensions||t.matrix.some(l=>l.length!==t.dimensions))&&(t.matrix=wn(t.dimensions)),n.includes("dimensions")&&t.dimensions>=4&&(t.projection3="native");for(let l=4;l<=9;l++)l<=t.dimensions&&!t[`fov${l}`]&&!r.includes(`fov${l}`)&&(t[`fov${l}`]=90),l<=t.dimensions&&(!t[`projection${l}`]||n.includes("dimensions"))&&!r.includes(`projection${l}`)&&(t[`projection${l}`]=l===t.dimensions?t[`projection${l+1}`]||"stereographic":"orthographic"),l>t.dimensions&&t[`fov${l}`]&&delete t[`fov${l}`],l>t.dimensions&&t[`projection${l}`]&&delete t[`projection${l}`];return{params:t,badParams:r}},mp=(e,n,t,r,l)=>{let i=!0,o=0,u=1;if(["inf","Infinity"].includes(e)&&(e="∞"),e==="∞"&&l)o=1/0;else if(e.includes("/")){const[s,a]=e.split("/");o=s===""?"":+s,u=a===""?"":+a,u===1&&(e=`${o}`),i=!(o===""||isNaN(o)||o<n||o>t||o%r!==0||isNaN(u)||u<n||u>t||u%r!==0)}else o=e===""?"":+e,i=!(o===""||isNaN(o)||o<n||o>t||r%1===0&&o%r!==0);return{valid:i,raw:e,value:o,fraction:u}};function gp({name:e,label:n,min:t=0,max:r=1/0,step:l=1,value:i,allowInfinity:o,fraction:u,fractionName:s,toggler:a,togglerName:h,onChange:m,...v}){const p=re.useCallback(()=>i===1/0&&o?"∞":s&&u>1?`${i}/${u}`:`${i}`,[o,u,s,i]),[g,y]=re.useState(p);re.useEffect(()=>{y(p())},[o,p,u,s,i]);const[E,d]=re.useState(!0),c=re.useCallback(k=>{const N=mp(k,t,r,l,o);y(N.raw),d(N.valid),N.valid&&(m(e,N.value),s&&m(s,N.fraction))},[o,s,r,t,e,m,l]),f=re.useCallback(()=>{if(!E){c(`${t}`);return}if(g!=="∞")if(g===`${t}`)o&&c("∞");else if(g.includes("/"))c((+g.split("/")[0]-l).toString());else{const k=+g-l;l>0&&l<1?c(k.toFixed(l.toString().split(".")[1].length)):c(k.toString())}},[o,t,g,l,c,E]),x=re.useCallback(()=>{if(!E){c(`${t}`);return}if(g!==`${r}`)if(g==="∞")o&&c(`${t}`);else if(g.includes("/"))c((+g.split("/")[0]+l).toString());else{const k=+g+l;l>0&&l<1?c(k.toFixed(l.toString().split(".")[1].length)):c(k.toString())}},[o,r,t,g,l,c,E]),S=k=>{const N=k.target.value;c(N)},T=k=>{m(k.target.name,k.target.checked)};return C.jsxs("label",{className:`number ${E?"valid":"invalid"}`,children:[n&&C.jsx("span",{className:"number-label",children:n}),h&&C.jsx("input",{type:"checkbox",name:h,checked:a,onChange:T}),(!h||a)&&C.jsxs("div",{className:"number-control",children:[C.jsx("input",{type:"text",name:e,value:g,style:{width:`${g.length+.25}ch`},onChange:S,...v}),C.jsx("button",{className:"plusminus minus",onClick:f,tabIndex:-1,children:"−"}),C.jsx("button",{className:"plusminus plus",onClick:x,tabIndex:-1,children:"+"})]})]})}function yp({i:e,j:n,value:t,stellation:r,onChange:l}){return C.jsx("div",{className:"coxeter-value",children:C.jsx(gp,{name:`coxeter-${e}-${n}`,min:2,step:1,value:t,onChange:l,allowInfinity:!0,fraction:r,fractionName:`stellation-${e}-${n}`})})}function Ss(){return C.jsx("svg",{className:"coxeter-link",viewBox:"0 0 24 16",children:C.jsx("path",{d:"M 0 8 L 24 8",strokeWidth:"1",stroke:"currentColor"})})}const Xr=6,Vn=14,Yr={active:C.jsxs(C.Fragment,{children:[C.jsx("circle",{cx:"16",cy:"16",r:Vn}),C.jsx("circle",{cx:"16",cy:"16",r:Xr,fill:"currentColor"})]}),inactive:C.jsx(C.Fragment,{children:C.jsx("circle",{cx:"16",cy:"16",r:Xr,fill:"currentColor"})}),snub:C.jsx(C.Fragment,{children:C.jsx("circle",{cx:"16",cy:"16",r:Vn})}),holosnub:C.jsxs(C.Fragment,{children:[C.jsx("circle",{cx:"16",cy:"16",r:Vn}),C.jsx("circle",{cx:"16",cy:"16",r:Xr})]}),custom:C.jsxs(C.Fragment,{children:[C.jsx("circle",{cx:"16",cy:"16",r:Vn}),C.jsx("path",{d:"M 10 14 L 10 18 L 22 18 L 22 14"})]}),activeVoid:C.jsxs(C.Fragment,{children:[C.jsx("circle",{cx:"16",cy:"16",r:Vn}),C.jsx("path",{d:"M 6 6 L 26 26"}),C.jsx("path",{d:"M 6 26 L 26 6"})]}),void:C.jsxs(C.Fragment,{children:[C.jsx("path",{d:"M 10 10 L 22 22"}),C.jsx("path",{d:"M 10 22 L 22 10"})]})};function xp({index:e,value:n,extended:t,onChange:r}){const l=Dc(n),i=()=>{const u=Object.keys(Yr),s=u.indexOf(l),a=t?u[(s+1)%u.length]:l==="active"?"inactive":"active",h=ms[a];r(e,h)},o=u=>{const s=Object.keys(Yr),a=s.indexOf(l),h=s[(s.length+a+Lc(u.deltaY))%s.length],m=ms[h];r(e,m)};return C.jsxs("div",{className:"coxeter-node",title:l,children:[C.jsx("svg",{className:`coxeter-graphic ${l}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:i,onWheel:o,children:Yr[l]}),l==="custom"&&C.jsx("input",{type:"number",value:n,step:".01",style:{width:`${n.toString().length+1.5}ch`},onChange:u=>r(e,u.target.value)})]})}function Wp({dimensions:e,coxeter:n,mirrors:t,stellation:r,extended:l,onChange:i}){const[o,u]=re.useState(1),s=re.useRef(),a=re.useCallback(()=>{if(i("extended",!l),l){const v=n.map(p=>p.slice());for(let p=0;p<e;p++)for(let g=0;g<p-1;g++)v[p][g]=2,v[g][p]=2;i("coxeter",v)}},[l,i,n,e]),h=re.useCallback((v,p)=>{if(v.startsWith("coxeter")){const[g,y]=v.split("-").slice(1).map(d=>+d),E=n.map(d=>d.slice());E[g][y]=p,E[y][g]=p,i("coxeter",E)}if(v.startsWith("stellation")){const[g,y]=v.split("-").slice(1).map(d=>+d),E=r.map(d=>d.slice());E[g][y]=p,E[y][g]=p,i("stellation",E)}},[n,i,r]),m=re.useCallback((v,p)=>{const g=t.slice();g[v]=p,i("mirrors",g)},[t,i]);return re.useEffect(()=>{const v=()=>{if(!s.current)return;const p=$e(1,(window.innerWidth-125)/s.current.offsetWidth);u(p)};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[e]),C.jsxs("aside",{className:"coxeters",style:o===1?void 0:{transform:`scale(${o})`},ref:s,children:[C.jsx("div",{className:"coxeter-matrix",children:[...Array(e).keys()].map(v=>C.jsxs(re.Fragment,{children:[v>0&&C.jsx("div",{className:"coxeter-column",children:[...Array(v).keys()].map(p=>(l||v===p+1)&&C.jsx(yp,{i:v,j:p,value:n[v][p],stellation:r[v][p],onChange:h},`${v}x${p}`))}),v>0&&C.jsx(Ss,{}),C.jsx(xp,{index:v,value:t[v],extended:l,onChange:m}),v<e-1&&C.jsx(Ss,{})]},v))}),C.jsxs("div",{className:"coxeter-toggles",children:[e>2&&C.jsx("button",{className:"button",onClick:()=>i("dimensions",e-1),title:"Decrease dimensions",children:"−"}),e<9&&C.jsx("button",{className:"button",onClick:()=>i("dimensions",e+1),title:"Increase dimensions",children:"+"}),C.jsx("button",{className:"button",onClick:a,title:"extended mode",children:l?"▲":"▼"})]})]})}const tn=32,ws=18;function Gp({coxeter:e,mirrors:n,stellation:t}){const r=e.length,l=n.map((y,E)=>{const d=Dc(y);return{n:E,type:d,i:E,j:0,r:d==="inactive"?Xr:Vn}});for(let y=0;y<r;y++)for(let E=r-1;E>y+1;E--)if(e[y][E]>2){const d=y===0,c=E===r-1,f=!d&&!c,x=E-y+1,S=Qr(x-1)/2,T=2*Math.PI/x,k={i:l[y].i+S,j:l[y].j+(f?-S*Le((2+x)/4*T):0)};for(let N=y;N<=E;N++){let A=N-y+(d?1:c?x/2:(2+x)/4);l[N].i=k.i+S*cn(T*A),l[N].j=k.j+S*Le(T*A)}for(let N=E+1;N<r;N++)l[N].i-=E-y,l[N].i+=2*S;y=E-1;break}const i=[];for(let y=0;y<r;y++)for(let E=0;E<y;E++)if(e[y][E]>2){const d=e[y][E],c=t[y][E];if(d===2)return null;let f=`${d===1/0?"∞":d}`;c>1&&(f+=`/${c}`),f==="3"&&(f=""),i.push({source:l[y],target:l[E],value:f})}const o=l.map(({i:y})=>y),u=l.map(({j:y})=>y),s=$e(...o),a=Pt(...o),h=$e(...u),m=Pt(...u);let v=0,p=0;for(let y=0;y<l.length;y++){const E=l[y];E.x=(E.i-s)*2*tn,E.y=(E.j-h)*2*tn,v=Pt(v,E.x),p=Pt(p,E.y)}const g=y=>y+Pt(y-1,0);return C.jsxs("svg",{className:"coxeter-diagram",viewBox:`${-tn/2} ${-tn/2} ${v+tn} ${p+tn}`,width:`${g(a-s+1)}em`,height:`${g(m-h+1)+.5}em`,strokeWidth:"2",fill:"transparent",stroke:"currentColor",children:[l.map(({n:y,type:E,x:d,y:c,r:f})=>C.jsx("g",{className:"coxeter-diagram-node",transform:`translate(${d-tn/2} ${c-tn/2})`,title:E,children:Yr[E]},y)),i.map(({source:y,target:E,value:d})=>{const c={x:y.x,y:y.y},f={x:E.x,y:E.y},x={},S=zv(f.y-c.y,f.x-c.x);return x.x=(c.x+f.x)/2+(ws+(d.length-2)*5)*cn(S-He/2),x.y=(c.y+f.y)/2+ws*Le(S-He/2),c.x+=(y.r+1)*cn(S),c.y+=(y.r+1)*Le(S),f.x-=(E.r+1)*cn(S),f.y-=(E.r+1)*Le(S),C.jsxs("g",{className:"coxeter-diagram-link",children:[C.jsx("path",{d:`M ${c.x} ${c.y} L ${f.x} ${f.y}`,strokeWidth:"1",stroke:"currentColor"}),C.jsx("text",{style:{fontSize:"1.25rem"},stroke:"none",fill:"currentColor",textAnchor:"middle",dominantBaseline:"middle",x:x.x,y:x.y,children:d})]},`${y.n}-${E.n}`)})]})}export{vp as A,xn as B,Gp as C,Fv as D,dp as E,Wp as F,jp as G,Vp as H,Pp as I,Ap as J,Fp as K,au as L,hp as M,gp as N,He as P,st as a,Lc as b,cn as c,wn as d,wp as e,Dp as f,Sl as g,ip as h,Np as i,Iv as j,Sp as k,Gr as l,Ep as m,Mp as n,$p as o,lp as p,Lp as q,re as r,Qr as s,Up as t,Bp as u,Pt as v,C as w,Es as x,$e as y,Hp as z};
