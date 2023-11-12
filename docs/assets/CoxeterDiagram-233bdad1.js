(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();var Wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ns={exports:{}},Si={},ks={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),Qc=Symbol.for("react.portal"),Jc=Symbol.for("react.fragment"),Kc=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),Yc=Symbol.for("react.provider"),qc=Symbol.for("react.context"),Zc=Symbol.for("react.forward_ref"),bc=Symbol.for("react.suspense"),ef=Symbol.for("react.memo"),nf=Symbol.for("react.lazy"),ou=Symbol.iterator;function tf(e){return e===null||typeof e!="object"?null:(e=ou&&e[ou]||e["@@iterator"],typeof e=="function"?e:null)}var Is={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ts=Object.assign,Rs={};function mt(e,n,t){this.props=e,this.context=n,this.refs=Rs,this.updater=t||Is}mt.prototype.isReactComponent={};mt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};mt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cs(){}Cs.prototype=mt.prototype;function co(e,n,t){this.props=e,this.context=n,this.refs=Rs,this.updater=t||Is}var fo=co.prototype=new Cs;fo.constructor=co;Ts(fo,mt.prototype);fo.isPureReactComponent=!0;var uu=Array.isArray,zs=Object.prototype.hasOwnProperty,vo={current:null},Ps={key:!0,ref:!0,__self:!0,__source:!0};function Os(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)zs.call(n,r)&&!Ps.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var s=Array(u),a=0;a<u;a++)s[a]=arguments[a+2];i.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:sr,type:e,key:l,ref:o,props:i,_owner:vo.current}}function rf(e,n){return{$$typeof:sr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function po(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function lf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var su=/\/+/g;function Bi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?lf(""+e.key):n.toString(36)}function Mr(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case sr:case Qc:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Bi(o,0):r,uu(i)?(t="",e!=null&&(t=e.replace(su,"$&/")+"/"),Mr(i,n,t,"",function(a){return a})):i!=null&&(po(i)&&(i=rf(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(su,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",uu(e))for(var u=0;u<e.length;u++){l=e[u];var s=r+Bi(l,u);o+=Mr(l,n,t,s,i)}else if(s=tf(e),typeof s=="function")for(e=s.call(e),u=0;!(l=e.next()).done;)l=l.value,s=r+Bi(l,u++),o+=Mr(l,n,t,s,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function hr(e,n,t){if(e==null)return e;var r=[],i=0;return Mr(e,r,"","",function(l){return n.call(t,l,i++)}),r}function of(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},Fr={transition:null},uf={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Fr,ReactCurrentOwner:vo};_.Children={map:hr,forEach:function(e,n,t){hr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return hr(e,function(){n++}),n},toArray:function(e){return hr(e,function(n){return n})||[]},only:function(e){if(!po(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=mt;_.Fragment=Jc;_.Profiler=Xc;_.PureComponent=co;_.StrictMode=Kc;_.Suspense=bc;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uf;_.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ts({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=vo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)zs.call(n,s)&&!Ps.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var a=0;a<s;a++)u[a]=arguments[a+2];r.children=u}return{$$typeof:sr,type:e.type,key:i,ref:l,props:r,_owner:o}};_.createContext=function(e){return e={$$typeof:qc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yc,_context:e},e.Consumer=e};_.createElement=Os;_.createFactory=function(e){var n=Os.bind(null,e);return n.type=e,n};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:Zc,render:e}};_.isValidElement=po;_.lazy=function(e){return{$$typeof:nf,_payload:{_status:-1,_result:e},_init:of}};_.memo=function(e,n){return{$$typeof:ef,type:e,compare:n===void 0?null:n}};_.startTransition=function(e){var n=Fr.transition;Fr.transition={};try{e()}finally{Fr.transition=n}};_.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};_.useCallback=function(e,n){return se.current.useCallback(e,n)};_.useContext=function(e){return se.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return se.current.useDeferredValue(e)};_.useEffect=function(e,n){return se.current.useEffect(e,n)};_.useId=function(){return se.current.useId()};_.useImperativeHandle=function(e,n,t){return se.current.useImperativeHandle(e,n,t)};_.useInsertionEffect=function(e,n){return se.current.useInsertionEffect(e,n)};_.useLayoutEffect=function(e,n){return se.current.useLayoutEffect(e,n)};_.useMemo=function(e,n){return se.current.useMemo(e,n)};_.useReducer=function(e,n,t){return se.current.useReducer(e,n,t)};_.useRef=function(e){return se.current.useRef(e)};_.useState=function(e){return se.current.useState(e)};_.useSyncExternalStore=function(e,n,t){return se.current.useSyncExternalStore(e,n,t)};_.useTransition=function(){return se.current.useTransition()};_.version="18.2.0";ks.exports=_;var re=ks.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=re,af=Symbol.for("react.element"),cf=Symbol.for("react.fragment"),ff=Object.prototype.hasOwnProperty,df=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vf={key:!0,ref:!0,__self:!0,__source:!0};function _s(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)ff.call(n,r)&&!vf.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:af,type:e,key:l,ref:o,props:i,_owner:df.current}}Si.Fragment=cf;Si.jsx=_s;Si.jsxs=_s;Ns.exports=Si;var C=Ns.exports,au={},Ms={exports:{}},xe={},Fs={exports:{}},As={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(R,z){var P=R.length;R.push(z);e:for(;0<P;){var W=P-1>>>1,X=R[W];if(0<i(X,z))R[W]=z,R[P]=X,P=W;else break e}}function t(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var z=R[0],P=R.pop();if(P!==z){R[0]=P;e:for(var W=0,X=R.length,vr=X>>>1;W<vr;){var In=2*(W+1)-1,$i=R[In],Tn=In+1,pr=R[Tn];if(0>i($i,P))Tn<X&&0>i(pr,$i)?(R[W]=pr,R[Tn]=P,W=Tn):(R[W]=$i,R[In]=P,W=In);else if(Tn<X&&0>i(pr,P))R[W]=pr,R[Tn]=P,W=Tn;else break e}}return z}function i(R,z){var P=R.sortIndex-z.sortIndex;return P!==0?P:R.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var s=[],a=[],h=1,g=null,v=3,p=!1,m=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(R){for(var z=t(a);z!==null;){if(z.callback===null)r(a);else if(z.startTime<=R)r(a),z.sortIndex=z.expirationTime,n(s,z);else break;z=t(a)}}function x(R){if(y=!1,f(R),!m)if(t(s)!==null)m=!0,Li(w);else{var z=t(a);z!==null&&Ui(x,z.startTime-R)}}function w(R,z){m=!1,y&&(y=!1,d(N),N=-1),p=!0;var P=v;try{for(f(z),g=t(s);g!==null&&(!(g.expirationTime>z)||R&&!Re());){var W=g.callback;if(typeof W=="function"){g.callback=null,v=g.priorityLevel;var X=W(g.expirationTime<=z);z=e.unstable_now(),typeof X=="function"?g.callback=X:g===t(s)&&r(s),f(z)}else r(s);g=t(s)}if(g!==null)var vr=!0;else{var In=t(a);In!==null&&Ui(x,In.startTime-z),vr=!1}return vr}finally{g=null,v=P,p=!1}}var I=!1,k=null,N=-1,A=5,O=-1;function Re(){return!(e.unstable_now()-O<A)}function xt(){if(k!==null){var R=e.unstable_now();O=R;var z=!0;try{z=k(!0,R)}finally{z?Et():(I=!1,k=null)}}else I=!1}var Et;if(typeof c=="function")Et=function(){c(xt)};else if(typeof MessageChannel<"u"){var lu=new MessageChannel,Vc=lu.port2;lu.port1.onmessage=xt,Et=function(){Vc.postMessage(null)}}else Et=function(){E(xt,0)};function Li(R){k=R,I||(I=!0,Et())}function Ui(R,z){N=E(function(){R(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,Li(w))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(R){switch(v){case 1:case 2:case 3:var z=3;break;default:z=v}var P=v;v=z;try{return R()}finally{v=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var P=v;v=R;try{return z()}finally{v=P}},e.unstable_scheduleCallback=function(R,z,P){var W=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?W+P:W):P=W,R){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=P+X,R={id:h++,callback:z,priorityLevel:R,startTime:P,expirationTime:X,sortIndex:-1},P>W?(R.sortIndex=P,n(a,R),t(s)===null&&R===t(a)&&(y?(d(N),N=-1):y=!0,Ui(x,P-W))):(R.sortIndex=X,n(s,R),m||p||(m=!0,Li(w))),R},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(R){var z=v;return function(){var P=v;v=z;try{return R.apply(this,arguments)}finally{v=P}}}})(As);Fs.exports=As;var pf=Fs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ds=re,ye=pf;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var js=new Set,Gt={};function $n(e,n){at(e,n),at(e+"Capture",n)}function at(e,n){for(Gt[e]=n,e=0;e<n.length;e++)js.add(n[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gl=Object.prototype.hasOwnProperty,hf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cu={},fu={};function mf(e){return gl.call(fu,e)?!0:gl.call(cu,e)?!1:hf.test(e)?fu[e]=!0:(cu[e]=!0,!1)}function gf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yf(e,n,t,r){if(n===null||typeof n>"u"||gf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ae(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var ho=/[\-:]([a-z])/g;function mo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ho,mo);ee[n]=new ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ho,mo);ee[n]=new ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ho,mo);ee[n]=new ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function go(e,n,t,r){var i=ee.hasOwnProperty(n)?ee[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(yf(n,t,i,r)&&(t=null),r||i===null?mf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ze=Ds.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),yo=Symbol.for("react.strict_mode"),yl=Symbol.for("react.profiler"),Ls=Symbol.for("react.provider"),Us=Symbol.for("react.context"),xo=Symbol.for("react.forward_ref"),xl=Symbol.for("react.suspense"),El=Symbol.for("react.suspense_list"),Eo=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),$s=Symbol.for("react.offscreen"),du=Symbol.iterator;function wt(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Hi;function _t(e){if(Hi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Hi=n&&n[1]||""}return`
`+Hi+e}var Vi=!1;function Wi(e,n){if(!e||Vi)return"";Vi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var i=a.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=u);break}}}finally{Vi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?_t(e):""}function xf(e){switch(e.tag){case 5:return _t(e.type);case 16:return _t("Lazy");case 13:return _t("Suspense");case 19:return _t("SuspenseList");case 0:case 2:case 15:return e=Wi(e.type,!1),e;case 11:return e=Wi(e.type.render,!1),e;case 1:return e=Wi(e.type,!0),e;default:return""}}function wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Wn:return"Portal";case yl:return"Profiler";case yo:return"StrictMode";case xl:return"Suspense";case El:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Us:return(e.displayName||"Context")+".Consumer";case Ls:return(e._context.displayName||"Context")+".Provider";case xo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Eo:return n=e.displayName||null,n!==null?n:wl(e.type)||"Memo";case rn:n=e._payload,e=e._init;try{return wl(e(n))}catch{}}return null}function Ef(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wl(n);case 8:return n===yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function wf(e){var n=Bs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function gr(e){e._valueTracker||(e._valueTracker=wf(e))}function Hs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Bs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sl(e,n){var t=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function vu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=xn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Vs(e,n){n=n.checked,n!=null&&go(e,"checked",n,!1)}function Nl(e,n){Vs(e,n);var t=xn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?kl(e,n.type,t):n.hasOwnProperty("defaultValue")&&kl(e,n.type,xn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function pu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function kl(e,n,t){(n!=="number"||qr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Mt=Array.isArray;function tt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+xn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Il(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(Mt(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:xn(t)}}function Ws(e,n){var t=xn(n.value),r=xn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function mu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Gs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Gs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,Qs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Qt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Dt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sf=["Webkit","ms","Moz","O"];Object.keys(Dt).forEach(function(e){Sf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Dt[n]=Dt[e]})});function Js(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Dt.hasOwnProperty(e)&&Dt[e]?(""+n).trim():n+"px"}function Ks(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Js(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Nf=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rl(e,n){if(n){if(Nf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function Cl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zl=null;function wo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pl=null,rt=null,it=null;function gu(e){if(e=fr(e)){if(typeof Pl!="function")throw Error(S(280));var n=e.stateNode;n&&(n=Ri(n),Pl(e.stateNode,e.type,n))}}function Xs(e){rt?it?it.push(e):it=[e]:rt=e}function Ys(){if(rt){var e=rt,n=it;if(it=rt=null,gu(e),n)for(e=0;e<n.length;e++)gu(n[e])}}function qs(e,n){return e(n)}function Zs(){}var Gi=!1;function bs(e,n,t){if(Gi)return e(n,t);Gi=!0;try{return qs(e,n,t)}finally{Gi=!1,(rt!==null||it!==null)&&(Zs(),Ys())}}function Jt(e,n){var t=e.stateNode;if(t===null)return null;var r=Ri(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var Ol=!1;if(Ke)try{var St={};Object.defineProperty(St,"passive",{get:function(){Ol=!0}}),window.addEventListener("test",St,St),window.removeEventListener("test",St,St)}catch{Ol=!1}function kf(e,n,t,r,i,l,o,u,s){var a=Array.prototype.slice.call(arguments,3);try{n.apply(t,a)}catch(h){this.onError(h)}}var jt=!1,Zr=null,br=!1,_l=null,If={onError:function(e){jt=!0,Zr=e}};function Tf(e,n,t,r,i,l,o,u,s){jt=!1,Zr=null,kf.apply(If,arguments)}function Rf(e,n,t,r,i,l,o,u,s){if(Tf.apply(this,arguments),jt){if(jt){var a=Zr;jt=!1,Zr=null}else throw Error(S(198));br||(br=!0,_l=a)}}function Bn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ea(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function yu(e){if(Bn(e)!==e)throw Error(S(188))}function Cf(e){var n=e.alternate;if(!n){if(n=Bn(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return yu(i),e;if(l===r)return yu(i),n;l=l.sibling}throw Error(S(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function na(e){return e=Cf(e),e!==null?ta(e):null}function ta(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ta(e);if(n!==null)return n;e=e.sibling}return null}var ra=ye.unstable_scheduleCallback,xu=ye.unstable_cancelCallback,zf=ye.unstable_shouldYield,Pf=ye.unstable_requestPaint,G=ye.unstable_now,Of=ye.unstable_getCurrentPriorityLevel,So=ye.unstable_ImmediatePriority,ia=ye.unstable_UserBlockingPriority,ei=ye.unstable_NormalPriority,_f=ye.unstable_LowPriority,la=ye.unstable_IdlePriority,Ni=null,Ue=null;function Mf(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(Ni,e,void 0,(e.current.flags&128)===128)}catch{}}var _e=Math.clz32?Math.clz32:Df,Ff=Math.log,Af=Math.LN2;function Df(e){return e>>>=0,e===0?32:31-(Ff(e)/Af|0)|0}var xr=64,Er=4194304;function Ft(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ni(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=Ft(u):(l&=o,l!==0&&(r=Ft(l)))}else o=t&~i,o!==0?r=Ft(o):l!==0&&(r=Ft(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-_e(n),i=1<<t,r|=e[t],n&=~i;return r}function jf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-_e(l),u=1<<o,s=i[o];s===-1?(!(u&t)||u&r)&&(i[o]=jf(u,n)):s<=n&&(e.expiredLanes|=u),l&=~u}}function Ml(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function oa(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Qi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ar(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-_e(n),e[n]=t}function Uf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-_e(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function No(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-_e(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var F=0;function ua(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sa,ko,aa,ca,fa,Fl=!1,wr=[],fn=null,dn=null,vn=null,Kt=new Map,Xt=new Map,on=[],$f="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eu(e,n){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Kt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xt.delete(n.pointerId)}}function Nt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=fr(n),n!==null&&ko(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Bf(e,n,t,r,i){switch(n){case"focusin":return fn=Nt(fn,e,n,t,r,i),!0;case"dragenter":return dn=Nt(dn,e,n,t,r,i),!0;case"mouseover":return vn=Nt(vn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Kt.set(l,Nt(Kt.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Xt.set(l,Nt(Xt.get(l)||null,e,n,t,r,i)),!0}return!1}function da(e){var n=zn(e.target);if(n!==null){var t=Bn(n);if(t!==null){if(n=t.tag,n===13){if(n=ea(t),n!==null){e.blockedOn=n,fa(e.priority,function(){aa(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Al(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);zl=r,t.target.dispatchEvent(r),zl=null}else return n=fr(t),n!==null&&ko(n),e.blockedOn=t,!1;n.shift()}return!0}function wu(e,n,t){Ar(e)&&t.delete(n)}function Hf(){Fl=!1,fn!==null&&Ar(fn)&&(fn=null),dn!==null&&Ar(dn)&&(dn=null),vn!==null&&Ar(vn)&&(vn=null),Kt.forEach(wu),Xt.forEach(wu)}function kt(e,n){e.blockedOn===n&&(e.blockedOn=null,Fl||(Fl=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Hf)))}function Yt(e){function n(i){return kt(i,e)}if(0<wr.length){kt(wr[0],e);for(var t=1;t<wr.length;t++){var r=wr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&kt(fn,e),dn!==null&&kt(dn,e),vn!==null&&kt(vn,e),Kt.forEach(n),Xt.forEach(n),t=0;t<on.length;t++)r=on[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(t=on[0],t.blockedOn===null);)da(t),t.blockedOn===null&&on.shift()}var lt=Ze.ReactCurrentBatchConfig,ti=!0;function Vf(e,n,t,r){var i=F,l=lt.transition;lt.transition=null;try{F=1,Io(e,n,t,r)}finally{F=i,lt.transition=l}}function Wf(e,n,t,r){var i=F,l=lt.transition;lt.transition=null;try{F=4,Io(e,n,t,r)}finally{F=i,lt.transition=l}}function Io(e,n,t,r){if(ti){var i=Al(e,n,t,r);if(i===null)tl(e,n,r,ri,t),Eu(e,r);else if(Bf(i,e,n,t,r))r.stopPropagation();else if(Eu(e,r),n&4&&-1<$f.indexOf(e)){for(;i!==null;){var l=fr(i);if(l!==null&&sa(l),l=Al(e,n,t,r),l===null&&tl(e,n,r,ri,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else tl(e,n,r,null,t)}}var ri=null;function Al(e,n,t,r){if(ri=null,e=wo(r),e=zn(e),e!==null)if(n=Bn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ea(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ri=e,null}function va(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Of()){case So:return 1;case ia:return 4;case ei:case _f:return 16;case la:return 536870912;default:return 16}default:return 16}}var sn=null,To=null,Dr=null;function pa(){if(Dr)return Dr;var e,n=To,t=n.length,r,i="value"in sn?sn.value:sn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Dr=i.slice(e,1<r?1-r:void 0)}function jr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function Su(){return!1}function Ee(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Sr:Su,this.isPropagationStopped=Su,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),n}var gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ro=Ee(gt),cr=H({},gt,{view:0,detail:0}),Gf=Ee(cr),Ji,Ki,It,ki=H({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==It&&(It&&e.type==="mousemove"?(Ji=e.screenX-It.screenX,Ki=e.screenY-It.screenY):Ki=Ji=0,It=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:Ki}}),Nu=Ee(ki),Qf=H({},ki,{dataTransfer:0}),Jf=Ee(Qf),Kf=H({},cr,{relatedTarget:0}),Xi=Ee(Kf),Xf=H({},gt,{animationName:0,elapsedTime:0,pseudoElement:0}),Yf=Ee(Xf),qf=H({},gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zf=Ee(qf),bf=H({},gt,{data:0}),ku=Ee(bf),ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},td={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=td[e])?!!n[e]:!1}function Co(){return rd}var id=H({},cr,{key:function(e){if(e.key){var n=ed[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Co,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ld=Ee(id),od=H({},ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=Ee(od),ud=H({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Co}),sd=Ee(ud),ad=H({},gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),cd=Ee(ad),fd=H({},ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dd=Ee(fd),vd=[9,13,27,32],zo=Ke&&"CompositionEvent"in window,Lt=null;Ke&&"documentMode"in document&&(Lt=document.documentMode);var pd=Ke&&"TextEvent"in window&&!Lt,ha=Ke&&(!zo||Lt&&8<Lt&&11>=Lt),Tu=String.fromCharCode(32),Ru=!1;function ma(e,n){switch(e){case"keyup":return vd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ga(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function hd(e,n){switch(e){case"compositionend":return ga(n);case"keypress":return n.which!==32?null:(Ru=!0,Tu);case"textInput":return e=n.data,e===Tu&&Ru?null:e;default:return null}}function md(e,n){if(Qn)return e==="compositionend"||!zo&&ma(e,n)?(e=pa(),Dr=To=sn=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ha&&n.locale!=="ko"?null:n.data;default:return null}}var gd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gd[e.type]:n==="textarea"}function ya(e,n,t,r){Xs(r),n=ii(n,"onChange"),0<n.length&&(t=new Ro("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ut=null,qt=null;function yd(e){za(e,0)}function Ii(e){var n=Xn(e);if(Hs(n))return e}function xd(e,n){if(e==="change")return n}var xa=!1;if(Ke){var Yi;if(Ke){var qi="oninput"in document;if(!qi){var zu=document.createElement("div");zu.setAttribute("oninput","return;"),qi=typeof zu.oninput=="function"}Yi=qi}else Yi=!1;xa=Yi&&(!document.documentMode||9<document.documentMode)}function Pu(){Ut&&(Ut.detachEvent("onpropertychange",Ea),qt=Ut=null)}function Ea(e){if(e.propertyName==="value"&&Ii(qt)){var n=[];ya(n,qt,e,wo(e)),bs(yd,n)}}function Ed(e,n,t){e==="focusin"?(Pu(),Ut=n,qt=t,Ut.attachEvent("onpropertychange",Ea)):e==="focusout"&&Pu()}function wd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ii(qt)}function Sd(e,n){if(e==="click")return Ii(n)}function Nd(e,n){if(e==="input"||e==="change")return Ii(n)}function kd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:kd;function Zt(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!gl.call(n,i)||!Fe(e[i],n[i]))return!1}return!0}function Ou(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _u(e,n){var t=Ou(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ou(t)}}function wa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?wa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Sa(){for(var e=window,n=qr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=qr(e.document)}return n}function Po(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Id(e){var n=Sa(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&wa(t.ownerDocument.documentElement,t)){if(r!==null&&Po(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=_u(t,l);var o=_u(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Td=Ke&&"documentMode"in document&&11>=document.documentMode,Jn=null,Dl=null,$t=null,jl=!1;function Mu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;jl||Jn==null||Jn!==qr(r)||(r=Jn,"selectionStart"in r&&Po(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$t&&Zt($t,r)||($t=r,r=ii(Dl,"onSelect"),0<r.length&&(n=new Ro("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Jn)))}function Nr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Kn={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},Zi={},Na={};Ke&&(Na=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function Ti(e){if(Zi[e])return Zi[e];if(!Kn[e])return e;var n=Kn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Na)return Zi[e]=n[t];return e}var ka=Ti("animationend"),Ia=Ti("animationiteration"),Ta=Ti("animationstart"),Ra=Ti("transitionend"),Ca=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,n){Ca.set(e,n),$n(n,[e])}for(var bi=0;bi<Fu.length;bi++){var el=Fu[bi],Rd=el.toLowerCase(),Cd=el[0].toUpperCase()+el.slice(1);Sn(Rd,"on"+Cd)}Sn(ka,"onAnimationEnd");Sn(Ia,"onAnimationIteration");Sn(Ta,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Ra,"onTransitionEnd");at("onMouseEnter",["mouseout","mouseover"]);at("onMouseLeave",["mouseout","mouseover"]);at("onPointerEnter",["pointerout","pointerover"]);at("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var At="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zd=new Set("cancel close invalid load scroll toggle".split(" ").concat(At));function Au(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Rf(r,n,void 0,e),e.currentTarget=null}function za(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],s=u.instance,a=u.currentTarget;if(u=u.listener,s!==l&&i.isPropagationStopped())break e;Au(i,u,a),l=s}else for(o=0;o<r.length;o++){if(u=r[o],s=u.instance,a=u.currentTarget,u=u.listener,s!==l&&i.isPropagationStopped())break e;Au(i,u,a),l=s}}}if(br)throw e=_l,br=!1,_l=null,e}function j(e,n){var t=n[Hl];t===void 0&&(t=n[Hl]=new Set);var r=e+"__bubble";t.has(r)||(Pa(n,e,2,!1),t.add(r))}function nl(e,n,t){var r=0;n&&(r|=4),Pa(t,e,r,n)}var kr="_reactListening"+Math.random().toString(36).slice(2);function bt(e){if(!e[kr]){e[kr]=!0,js.forEach(function(t){t!=="selectionchange"&&(zd.has(t)||nl(t,!1,e),nl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kr]||(n[kr]=!0,nl("selectionchange",!1,n))}}function Pa(e,n,t,r){switch(va(n)){case 1:var i=Vf;break;case 4:i=Wf;break;default:i=Io}t=i.bind(null,n,t,e),i=void 0,!Ol||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function tl(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;u!==null;){if(o=zn(u),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}u=u.parentNode}}r=r.return}bs(function(){var a=l,h=wo(t),g=[];e:{var v=Ca.get(e);if(v!==void 0){var p=Ro,m=e;switch(e){case"keypress":if(jr(t)===0)break e;case"keydown":case"keyup":p=ld;break;case"focusin":m="focus",p=Xi;break;case"focusout":m="blur",p=Xi;break;case"beforeblur":case"afterblur":p=Xi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Jf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sd;break;case ka:case Ia:case Ta:p=Yf;break;case Ra:p=cd;break;case"scroll":p=Gf;break;case"wheel":p=dd;break;case"copy":case"cut":case"paste":p=Zf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Iu}var y=(n&4)!==0,E=!y&&e==="scroll",d=y?v!==null?v+"Capture":null:v;y=[];for(var c=a,f;c!==null;){f=c;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,d!==null&&(x=Jt(c,d),x!=null&&y.push(er(c,x,f)))),E)break;c=c.return}0<y.length&&(v=new p(v,m,null,t,h),g.push({event:v,listeners:y}))}}if(!(n&7)){e:{if(v=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",v&&t!==zl&&(m=t.relatedTarget||t.fromElement)&&(zn(m)||m[Xe]))break e;if((p||v)&&(v=h.window===h?h:(v=h.ownerDocument)?v.defaultView||v.parentWindow:window,p?(m=t.relatedTarget||t.toElement,p=a,m=m?zn(m):null,m!==null&&(E=Bn(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=a),p!==m)){if(y=Nu,x="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Iu,x="onPointerLeave",d="onPointerEnter",c="pointer"),E=p==null?v:Xn(p),f=m==null?v:Xn(m),v=new y(x,c+"leave",p,t,h),v.target=E,v.relatedTarget=f,x=null,zn(h)===a&&(y=new y(d,c+"enter",m,t,h),y.target=f,y.relatedTarget=E,x=y),E=x,p&&m)n:{for(y=p,d=m,c=0,f=y;f;f=Hn(f))c++;for(f=0,x=d;x;x=Hn(x))f++;for(;0<c-f;)y=Hn(y),c--;for(;0<f-c;)d=Hn(d),f--;for(;c--;){if(y===d||d!==null&&y===d.alternate)break n;y=Hn(y),d=Hn(d)}y=null}else y=null;p!==null&&Du(g,v,p,y,!1),m!==null&&E!==null&&Du(g,E,m,y,!0)}}e:{if(v=a?Xn(a):window,p=v.nodeName&&v.nodeName.toLowerCase(),p==="select"||p==="input"&&v.type==="file")var w=xd;else if(Cu(v))if(xa)w=Nd;else{w=wd;var I=Ed}else(p=v.nodeName)&&p.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(w=Sd);if(w&&(w=w(e,a))){ya(g,w,t,h);break e}I&&I(e,v,a),e==="focusout"&&(I=v._wrapperState)&&I.controlled&&v.type==="number"&&kl(v,"number",v.value)}switch(I=a?Xn(a):window,e){case"focusin":(Cu(I)||I.contentEditable==="true")&&(Jn=I,Dl=a,$t=null);break;case"focusout":$t=Dl=Jn=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,Mu(g,t,h);break;case"selectionchange":if(Td)break;case"keydown":case"keyup":Mu(g,t,h)}var k;if(zo)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Qn?ma(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(ha&&t.locale!=="ko"&&(Qn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Qn&&(k=pa()):(sn=h,To="value"in sn?sn.value:sn.textContent,Qn=!0)),I=ii(a,N),0<I.length&&(N=new ku(N,e,null,t,h),g.push({event:N,listeners:I}),k?N.data=k:(k=ga(t),k!==null&&(N.data=k)))),(k=pd?hd(e,t):md(e,t))&&(a=ii(a,"onBeforeInput"),0<a.length&&(h=new ku("onBeforeInput","beforeinput",null,t,h),g.push({event:h,listeners:a}),h.data=k))}za(g,n)})}function er(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ii(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Jt(e,t),l!=null&&r.unshift(er(e,l,i)),l=Jt(e,n),l!=null&&r.push(er(e,l,i))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Du(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var u=t,s=u.alternate,a=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&a!==null&&(u=a,i?(s=Jt(t,l),s!=null&&o.unshift(er(t,s,u))):i||(s=Jt(t,l),s!=null&&o.push(er(t,s,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Pd=/\r\n?/g,Od=/\u0000|\uFFFD/g;function ju(e){return(typeof e=="string"?e:""+e).replace(Pd,`
`).replace(Od,"")}function Ir(e,n,t){if(n=ju(n),ju(e)!==n&&t)throw Error(S(425))}function li(){}var Ll=null,Ul=null;function $l(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bl=typeof setTimeout=="function"?setTimeout:void 0,_d=typeof clearTimeout=="function"?clearTimeout:void 0,Lu=typeof Promise=="function"?Promise:void 0,Md=typeof queueMicrotask=="function"?queueMicrotask:typeof Lu<"u"?function(e){return Lu.resolve(null).then(e).catch(Fd)}:Bl;function Fd(e){setTimeout(function(){throw e})}function rl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Yt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Yt(n)}function pn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Uu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var yt=Math.random().toString(36).slice(2),je="__reactFiber$"+yt,nr="__reactProps$"+yt,Xe="__reactContainer$"+yt,Hl="__reactEvents$"+yt,Ad="__reactListeners$"+yt,Dd="__reactHandles$"+yt;function zn(e){var n=e[je];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Xe]||t[je]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Uu(e);e!==null;){if(t=e[je])return t;e=Uu(e)}return n}e=t,t=e.parentNode}return null}function fr(e){return e=e[je]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ri(e){return e[nr]||null}var Vl=[],Yn=-1;function Nn(e){return{current:e}}function L(e){0>Yn||(e.current=Vl[Yn],Vl[Yn]=null,Yn--)}function D(e,n){Yn++,Vl[Yn]=e.current,e.current=n}var En={},le=Nn(En),de=Nn(!1),An=En;function ct(e,n){var t=e.type.contextTypes;if(!t)return En;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function oi(){L(de),L(le)}function $u(e,n,t){if(le.current!==En)throw Error(S(168));D(le,n),D(de,t)}function Oa(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(S(108,Ef(e)||"Unknown",i));return H({},t,r)}function ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,An=le.current,D(le,e),D(de,de.current),!0}function Bu(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=Oa(e,n,An),r.__reactInternalMemoizedMergedChildContext=e,L(de),L(le),D(le,e)):L(de),D(de,t)}var We=null,Ci=!1,il=!1;function _a(e){We===null?We=[e]:We.push(e)}function jd(e){Ci=!0,_a(e)}function kn(){if(!il&&We!==null){il=!0;var e=0,n=F;try{var t=We;for(F=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}We=null,Ci=!1}catch(i){throw We!==null&&(We=We.slice(e+1)),ra(So,kn),i}finally{F=n,il=!1}}return null}var qn=[],Zn=0,si=null,ai=0,we=[],Se=0,Dn=null,Ge=1,Qe="";function Rn(e,n){qn[Zn++]=ai,qn[Zn++]=si,si=e,ai=n}function Ma(e,n,t){we[Se++]=Ge,we[Se++]=Qe,we[Se++]=Dn,Dn=e;var r=Ge;e=Qe;var i=32-_e(r)-1;r&=~(1<<i),t+=1;var l=32-_e(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ge=1<<32-_e(n)+i|t<<i|r,Qe=l+e}else Ge=1<<l|t<<i|r,Qe=e}function Oo(e){e.return!==null&&(Rn(e,1),Ma(e,1,0))}function _o(e){for(;e===si;)si=qn[--Zn],qn[Zn]=null,ai=qn[--Zn],qn[Zn]=null;for(;e===Dn;)Dn=we[--Se],we[Se]=null,Qe=we[--Se],we[Se]=null,Ge=we[--Se],we[Se]=null}var ge=null,me=null,U=!1,Oe=null;function Fa(e,n){var t=Ne(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Hu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ge=e,me=pn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ge=e,me=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Dn!==null?{id:Ge,overflow:Qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ne(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ge=e,me=null,!0):!1;default:return!1}}function Wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gl(e){if(U){var n=me;if(n){var t=n;if(!Hu(e,n)){if(Wl(e))throw Error(S(418));n=pn(t.nextSibling);var r=ge;n&&Hu(e,n)?Fa(r,t):(e.flags=e.flags&-4097|2,U=!1,ge=e)}}else{if(Wl(e))throw Error(S(418));e.flags=e.flags&-4097|2,U=!1,ge=e}}}function Vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function Tr(e){if(e!==ge)return!1;if(!U)return Vu(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!$l(e.type,e.memoizedProps)),n&&(n=me)){if(Wl(e))throw Aa(),Error(S(418));for(;n;)Fa(e,n),n=pn(n.nextSibling)}if(Vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){me=pn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}me=null}}else me=ge?pn(e.stateNode.nextSibling):null;return!0}function Aa(){for(var e=me;e;)e=pn(e.nextSibling)}function ft(){me=ge=null,U=!1}function Mo(e){Oe===null?Oe=[e]:Oe.push(e)}var Ld=Ze.ReactCurrentBatchConfig;function ze(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var ci=Nn(null),fi=null,bn=null,Fo=null;function Ao(){Fo=bn=fi=null}function Do(e){var n=ci.current;L(ci),e._currentValue=n}function Ql(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ot(e,n){fi=e,Fo=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(fe=!0),e.firstContext=null)}function Ie(e){var n=e._currentValue;if(Fo!==e)if(e={context:e,memoizedValue:n,next:null},bn===null){if(fi===null)throw Error(S(308));bn=e,fi.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return n}var Pn=null;function jo(e){Pn===null?Pn=[e]:Pn.push(e)}function Da(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,jo(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ye(e,r)}function Ye(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ln=!1;function Lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ja(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function hn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Ye(e,t)}return i=r.interleaved,i===null?(n.next=n,jo(r)):(n.next=i.next,i.next=n),r.interleaved=n,Ye(e,t)}function Lr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,No(e,t)}}function Wu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function di(e,n,t,r){var i=e.updateQueue;ln=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var s=u,a=s.next;s.next=null,o===null?l=a:o.next=a,o=s;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==o&&(u===null?h.firstBaseUpdate=a:u.next=a,h.lastBaseUpdate=s))}if(l!==null){var g=i.baseState;o=0,h=a=s=null,u=l;do{var v=u.lane,p=u.eventTime;if((r&v)===v){h!==null&&(h=h.next={eventTime:p,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var m=e,y=u;switch(v=n,p=t,y.tag){case 1:if(m=y.payload,typeof m=="function"){g=m.call(p,g,v);break e}g=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,v=typeof m=="function"?m.call(p,g,v):m,v==null)break e;g=H({},g,v);break e;case 2:ln=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[u]:v.push(u))}else p={eventTime:p,lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(a=h=p,s=g):h=h.next=p,o|=v;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;v=u,u=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(h===null&&(s=g),i.baseState=s,i.firstBaseUpdate=a,i.lastBaseUpdate=h,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Ln|=o,e.lanes=o,e.memoizedState=g}}function Gu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var La=new Ds.Component().refs;function Jl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:H({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var zi={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ue(),i=gn(e),l=Je(r,i);l.payload=n,t!=null&&(l.callback=t),n=hn(e,l,i),n!==null&&(Me(n,e,i,r),Lr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ue(),i=gn(e),l=Je(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=hn(e,l,i),n!==null&&(Me(n,e,i,r),Lr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ue(),r=gn(e),i=Je(t,r);i.tag=2,n!=null&&(i.callback=n),n=hn(e,i,r),n!==null&&(Me(n,e,r,t),Lr(n,e,r))}};function Qu(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!Zt(t,r)||!Zt(i,l):!0}function Ua(e,n,t){var r=!1,i=En,l=n.contextType;return typeof l=="object"&&l!==null?l=Ie(l):(i=ve(n)?An:le.current,r=n.contextTypes,l=(r=r!=null)?ct(e,i):En),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=zi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function Ju(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&zi.enqueueReplaceState(n,n.state,null)}function Kl(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=La,Lo(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Ie(l):(l=ve(n)?An:le.current,i.context=ct(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Jl(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&zi.enqueueReplaceState(i,i.state,null),di(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Tt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var u=i.refs;u===La&&(u=i.refs={}),o===null?delete u[l]:u[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function Rr(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ku(e){var n=e._init;return n(e._payload)}function $a(e){function n(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=yn(d,c),d.index=0,d.sibling=null,d}function l(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,c,f,x){return c===null||c.tag!==6?(c=fl(f,d.mode,x),c.return=d,c):(c=i(c,f),c.return=d,c)}function s(d,c,f,x){var w=f.type;return w===Gn?h(d,c,f.props.children,x,f.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rn&&Ku(w)===c.type)?(x=i(c,f.props),x.ref=Tt(d,c,f),x.return=d,x):(x=Wr(f.type,f.key,f.props,null,d.mode,x),x.ref=Tt(d,c,f),x.return=d,x)}function a(d,c,f,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=dl(f,d.mode,x),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function h(d,c,f,x,w){return c===null||c.tag!==7?(c=Mn(f,d.mode,x,w),c.return=d,c):(c=i(c,f),c.return=d,c)}function g(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=fl(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case mr:return f=Wr(c.type,c.key,c.props,null,d.mode,f),f.ref=Tt(d,null,c),f.return=d,f;case Wn:return c=dl(c,d.mode,f),c.return=d,c;case rn:var x=c._init;return g(d,x(c._payload),f)}if(Mt(c)||wt(c))return c=Mn(c,d.mode,f,null),c.return=d,c;Rr(d,c)}return null}function v(d,c,f,x){var w=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return w!==null?null:u(d,c,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:return f.key===w?s(d,c,f,x):null;case Wn:return f.key===w?a(d,c,f,x):null;case rn:return w=f._init,v(d,c,w(f._payload),x)}if(Mt(f)||wt(f))return w!==null?null:h(d,c,f,x,null);Rr(d,f)}return null}function p(d,c,f,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(f)||null,u(c,d,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case mr:return d=d.get(x.key===null?f:x.key)||null,s(c,d,x,w);case Wn:return d=d.get(x.key===null?f:x.key)||null,a(c,d,x,w);case rn:var I=x._init;return p(d,c,f,I(x._payload),w)}if(Mt(x)||wt(x))return d=d.get(f)||null,h(c,d,x,w,null);Rr(c,x)}return null}function m(d,c,f,x){for(var w=null,I=null,k=c,N=c=0,A=null;k!==null&&N<f.length;N++){k.index>N?(A=k,k=null):A=k.sibling;var O=v(d,k,f[N],x);if(O===null){k===null&&(k=A);break}e&&k&&O.alternate===null&&n(d,k),c=l(O,c,N),I===null?w=O:I.sibling=O,I=O,k=A}if(N===f.length)return t(d,k),U&&Rn(d,N),w;if(k===null){for(;N<f.length;N++)k=g(d,f[N],x),k!==null&&(c=l(k,c,N),I===null?w=k:I.sibling=k,I=k);return U&&Rn(d,N),w}for(k=r(d,k);N<f.length;N++)A=p(k,d,N,f[N],x),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?N:A.key),c=l(A,c,N),I===null?w=A:I.sibling=A,I=A);return e&&k.forEach(function(Re){return n(d,Re)}),U&&Rn(d,N),w}function y(d,c,f,x){var w=wt(f);if(typeof w!="function")throw Error(S(150));if(f=w.call(f),f==null)throw Error(S(151));for(var I=w=null,k=c,N=c=0,A=null,O=f.next();k!==null&&!O.done;N++,O=f.next()){k.index>N?(A=k,k=null):A=k.sibling;var Re=v(d,k,O.value,x);if(Re===null){k===null&&(k=A);break}e&&k&&Re.alternate===null&&n(d,k),c=l(Re,c,N),I===null?w=Re:I.sibling=Re,I=Re,k=A}if(O.done)return t(d,k),U&&Rn(d,N),w;if(k===null){for(;!O.done;N++,O=f.next())O=g(d,O.value,x),O!==null&&(c=l(O,c,N),I===null?w=O:I.sibling=O,I=O);return U&&Rn(d,N),w}for(k=r(d,k);!O.done;N++,O=f.next())O=p(k,d,N,O.value,x),O!==null&&(e&&O.alternate!==null&&k.delete(O.key===null?N:O.key),c=l(O,c,N),I===null?w=O:I.sibling=O,I=O);return e&&k.forEach(function(xt){return n(d,xt)}),U&&Rn(d,N),w}function E(d,c,f,x){if(typeof f=="object"&&f!==null&&f.type===Gn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:e:{for(var w=f.key,I=c;I!==null;){if(I.key===w){if(w=f.type,w===Gn){if(I.tag===7){t(d,I.sibling),c=i(I,f.props.children),c.return=d,d=c;break e}}else if(I.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rn&&Ku(w)===I.type){t(d,I.sibling),c=i(I,f.props),c.ref=Tt(d,I,f),c.return=d,d=c;break e}t(d,I);break}else n(d,I);I=I.sibling}f.type===Gn?(c=Mn(f.props.children,d.mode,x,f.key),c.return=d,d=c):(x=Wr(f.type,f.key,f.props,null,d.mode,x),x.ref=Tt(d,c,f),x.return=d,d=x)}return o(d);case Wn:e:{for(I=f.key;c!==null;){if(c.key===I)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){t(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=dl(f,d.mode,x),c.return=d,d=c}return o(d);case rn:return I=f._init,E(d,c,I(f._payload),x)}if(Mt(f))return m(d,c,f,x);if(wt(f))return y(d,c,f,x);Rr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(t(d,c.sibling),c=i(c,f),c.return=d,d=c):(t(d,c),c=fl(f,d.mode,x),c.return=d,d=c),o(d)):t(d,c)}return E}var dt=$a(!0),Ba=$a(!1),dr={},$e=Nn(dr),tr=Nn(dr),rr=Nn(dr);function On(e){if(e===dr)throw Error(S(174));return e}function Uo(e,n){switch(D(rr,n),D(tr,e),D($e,dr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Tl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Tl(n,e)}L($e),D($e,n)}function vt(){L($e),L(tr),L(rr)}function Ha(e){On(rr.current);var n=On($e.current),t=Tl(n,e.type);n!==t&&(D(tr,e),D($e,t))}function $o(e){tr.current===e&&(L($e),L(tr))}var $=Nn(0);function vi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ll=[];function Bo(){for(var e=0;e<ll.length;e++)ll[e]._workInProgressVersionPrimary=null;ll.length=0}var Ur=Ze.ReactCurrentDispatcher,ol=Ze.ReactCurrentBatchConfig,jn=0,B=null,J=null,Y=null,pi=!1,Bt=!1,ir=0,Ud=0;function ne(){throw Error(S(321))}function Ho(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function Vo(e,n,t,r,i,l){if(jn=l,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ur.current=e===null||e.memoizedState===null?Vd:Wd,e=t(r,i),Bt){l=0;do{if(Bt=!1,ir=0,25<=l)throw Error(S(301));l+=1,Y=J=null,n.updateQueue=null,Ur.current=Gd,e=t(r,i)}while(Bt)}if(Ur.current=hi,n=J!==null&&J.next!==null,jn=0,Y=J=B=null,pi=!1,n)throw Error(S(300));return e}function Wo(){var e=ir!==0;return ir=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?B.memoizedState=Y=e:Y=Y.next=e,Y}function Te(){if(J===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=Y===null?B.memoizedState:Y.next;if(n!==null)Y=n,J=e;else{if(e===null)throw Error(S(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},Y===null?B.memoizedState=Y=e:Y=Y.next=e}return Y}function lr(e,n){return typeof n=="function"?n(e):n}function ul(e){var n=Te(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=J,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,s=null,a=l;do{var h=a.lane;if((jn&h)===h)s!==null&&(s=s.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var g={lane:h,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};s===null?(u=s=g,o=r):s=s.next=g,B.lanes|=h,Ln|=h}a=a.next}while(a!==null&&a!==l);s===null?o=r:s.next=u,Fe(r,n.memoizedState)||(fe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,B.lanes|=l,Ln|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function sl(e){var n=Te(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Fe(l,n.memoizedState)||(fe=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Va(){}function Wa(e,n){var t=B,r=Te(),i=n(),l=!Fe(r.memoizedState,i);if(l&&(r.memoizedState=i,fe=!0),r=r.queue,Go(Ja.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||Y!==null&&Y.memoizedState.tag&1){if(t.flags|=2048,or(9,Qa.bind(null,t,r,i,n),void 0,null),q===null)throw Error(S(349));jn&30||Ga(t,n,i)}return i}function Ga(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Qa(e,n,t,r){n.value=t,n.getSnapshot=r,Ka(n)&&Xa(e)}function Ja(e,n,t){return t(function(){Ka(n)&&Xa(e)})}function Ka(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function Xa(e){var n=Ye(e,1);n!==null&&Me(n,e,1,-1)}function Xu(e){var n=De();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:e},n.queue=e,e=e.dispatch=Hd.bind(null,B,e),[n.memoizedState,e]}function or(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ya(){return Te().memoizedState}function $r(e,n,t,r){var i=De();B.flags|=e,i.memoizedState=or(1|n,t,void 0,r===void 0?null:r)}function Pi(e,n,t,r){var i=Te();r=r===void 0?null:r;var l=void 0;if(J!==null){var o=J.memoizedState;if(l=o.destroy,r!==null&&Ho(r,o.deps)){i.memoizedState=or(n,t,l,r);return}}B.flags|=e,i.memoizedState=or(1|n,t,l,r)}function Yu(e,n){return $r(8390656,8,e,n)}function Go(e,n){return Pi(2048,8,e,n)}function qa(e,n){return Pi(4,2,e,n)}function Za(e,n){return Pi(4,4,e,n)}function ba(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ec(e,n,t){return t=t!=null?t.concat([e]):null,Pi(4,4,ba.bind(null,n,e),t)}function Qo(){}function nc(e,n){var t=Te();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ho(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function tc(e,n){var t=Te();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ho(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function rc(e,n,t){return jn&21?(Fe(t,n)||(t=oa(),B.lanes|=t,Ln|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=t)}function $d(e,n){var t=F;F=t!==0&&4>t?t:4,e(!0);var r=ol.transition;ol.transition={};try{e(!1),n()}finally{F=t,ol.transition=r}}function ic(){return Te().memoizedState}function Bd(e,n,t){var r=gn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},lc(e))oc(n,t);else if(t=Da(e,n,t,r),t!==null){var i=ue();Me(t,e,r,i),uc(t,n,r)}}function Hd(e,n,t){var r=gn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(lc(e))oc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,Fe(u,o)){var s=n.interleaved;s===null?(i.next=i,jo(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Da(e,n,i,r),t!==null&&(i=ue(),Me(t,e,r,i),uc(t,n,r))}}function lc(e){var n=e.alternate;return e===B||n!==null&&n===B}function oc(e,n){Bt=pi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function uc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,No(e,t)}}var hi={readContext:Ie,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},Vd={readContext:Ie,useCallback:function(e,n){return De().memoizedState=[e,n===void 0?null:n],e},useContext:Ie,useEffect:Yu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,$r(4194308,4,ba.bind(null,n,e),t)},useLayoutEffect:function(e,n){return $r(4194308,4,e,n)},useInsertionEffect:function(e,n){return $r(4,2,e,n)},useMemo:function(e,n){var t=De();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=De();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Bd.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var n=De();return e={current:e},n.memoizedState=e},useState:Xu,useDebugValue:Qo,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Xu(!1),n=e[0];return e=$d.bind(null,e[1]),De().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=B,i=De();if(U){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),q===null)throw Error(S(349));jn&30||Ga(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Yu(Ja.bind(null,r,l,e),[e]),r.flags|=2048,or(9,Qa.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=De(),n=q.identifierPrefix;if(U){var t=Qe,r=Ge;t=(r&~(1<<32-_e(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=ir++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Ud++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Wd={readContext:Ie,useCallback:nc,useContext:Ie,useEffect:Go,useImperativeHandle:ec,useInsertionEffect:qa,useLayoutEffect:Za,useMemo:tc,useReducer:ul,useRef:Ya,useState:function(){return ul(lr)},useDebugValue:Qo,useDeferredValue:function(e){var n=Te();return rc(n,J.memoizedState,e)},useTransition:function(){var e=ul(lr)[0],n=Te().memoizedState;return[e,n]},useMutableSource:Va,useSyncExternalStore:Wa,useId:ic,unstable_isNewReconciler:!1},Gd={readContext:Ie,useCallback:nc,useContext:Ie,useEffect:Go,useImperativeHandle:ec,useInsertionEffect:qa,useLayoutEffect:Za,useMemo:tc,useReducer:sl,useRef:Ya,useState:function(){return sl(lr)},useDebugValue:Qo,useDeferredValue:function(e){var n=Te();return J===null?n.memoizedState=e:rc(n,J.memoizedState,e)},useTransition:function(){var e=sl(lr)[0],n=Te().memoizedState;return[e,n]},useMutableSource:Va,useSyncExternalStore:Wa,useId:ic,unstable_isNewReconciler:!1};function pt(e,n){try{var t="",r=n;do t+=xf(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function al(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Xl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Qd=typeof WeakMap=="function"?WeakMap:Map;function sc(e,n,t){t=Je(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){gi||(gi=!0,lo=r),Xl(e,n)},t}function ac(e,n,t){t=Je(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Xl(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Xl(e,n),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function qu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Qd;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=ov.bind(null,e,n,t),n.then(e,e))}function Zu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function bu(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Je(-1,1),n.tag=2,hn(t,n,1))),t.lanes|=1),e)}var Jd=Ze.ReactCurrentOwner,fe=!1;function oe(e,n,t,r){n.child=e===null?Ba(n,null,t,r):dt(n,e.child,t,r)}function es(e,n,t,r,i){t=t.render;var l=n.ref;return ot(n,i),r=Vo(e,n,t,r,l,i),t=Wo(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,qe(e,n,i)):(U&&t&&Oo(n),n.flags|=1,oe(e,n,r,i),n.child)}function ns(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!eu(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,cc(e,n,l,r,i)):(e=Wr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Zt,t(o,r)&&e.ref===n.ref)return qe(e,n,i)}return n.flags|=1,e=yn(l,r),e.ref=n.ref,e.return=n,n.child=e}function cc(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Zt(l,r)&&e.ref===n.ref)if(fe=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(fe=!0);else return n.lanes=e.lanes,qe(e,n,i)}return Yl(e,n,t,r,i)}function fc(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(nt,he),he|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,D(nt,he),he|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,D(nt,he),he|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,D(nt,he),he|=r;return oe(e,n,i,t),n.child}function dc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Yl(e,n,t,r,i){var l=ve(t)?An:le.current;return l=ct(n,l),ot(n,i),t=Vo(e,n,t,r,l,i),r=Wo(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,qe(e,n,i)):(U&&r&&Oo(n),n.flags|=1,oe(e,n,t,i),n.child)}function ts(e,n,t,r,i){if(ve(t)){var l=!0;ui(n)}else l=!1;if(ot(n,i),n.stateNode===null)Br(e,n),Ua(n,t,r),Kl(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var s=o.context,a=t.contextType;typeof a=="object"&&a!==null?a=Ie(a):(a=ve(t)?An:le.current,a=ct(n,a));var h=t.getDerivedStateFromProps,g=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||s!==a)&&Ju(n,o,r,a),ln=!1;var v=n.memoizedState;o.state=v,di(n,r,o,i),s=n.memoizedState,u!==r||v!==s||de.current||ln?(typeof h=="function"&&(Jl(n,t,h,r),s=n.memoizedState),(u=ln||Qu(n,t,u,r,v,s,a))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=a,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,ja(e,n),u=n.memoizedProps,a=n.type===n.elementType?u:ze(n.type,u),o.props=a,g=n.pendingProps,v=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ie(s):(s=ve(t)?An:le.current,s=ct(n,s));var p=t.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==g||v!==s)&&Ju(n,o,r,s),ln=!1,v=n.memoizedState,o.state=v,di(n,r,o,i);var m=n.memoizedState;u!==g||v!==m||de.current||ln?(typeof p=="function"&&(Jl(n,t,p,r),m=n.memoizedState),(a=ln||Qu(n,t,a,r,v,m,s)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=m),o.props=r,o.state=m,o.context=s,r=a):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),r=!1)}return ql(e,n,t,r,l,i)}function ql(e,n,t,r,i,l){dc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Bu(n,t,!1),qe(e,n,l);r=n.stateNode,Jd.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=dt(n,e.child,null,l),n.child=dt(n,null,u,l)):oe(e,n,u,l),n.memoizedState=r.state,i&&Bu(n,t,!0),n.child}function vc(e){var n=e.stateNode;n.pendingContext?$u(e,n.pendingContext,n.pendingContext!==n.context):n.context&&$u(e,n.context,!1),Uo(e,n.containerInfo)}function rs(e,n,t,r,i){return ft(),Mo(i),n.flags|=256,oe(e,n,t,r),n.child}var Zl={dehydrated:null,treeContext:null,retryLane:0};function bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function pc(e,n,t){var r=n.pendingProps,i=$.current,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),D($,i&1),e===null)return Gl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Mi(o,r,0,null),e=Mn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=bl(t),n.memoizedState=Zl,e):Jo(n,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Kd(e,n,o,r,u,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,u=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=yn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=yn(u,l):(l=Mn(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?bl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=Zl,r}return l=e.child,e=l.sibling,r=yn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Jo(e,n){return n=Mi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Cr(e,n,t,r){return r!==null&&Mo(r),dt(n,e.child,null,t),e=Jo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Kd(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=al(Error(S(422))),Cr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Mi({mode:"visible",children:r.children},i,0,null),l=Mn(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&dt(n,e.child,null,o),n.child.memoizedState=bl(o),n.memoizedState=Zl,l);if(!(n.mode&1))return Cr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(S(419)),r=al(l,r,void 0),Cr(e,n,o,r)}if(u=(o&e.childLanes)!==0,fe||u){if(r=q,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ye(e,i),Me(r,e,i,-1))}return bo(),r=al(Error(S(421))),Cr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=uv.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,me=pn(i.nextSibling),ge=n,U=!0,Oe=null,e!==null&&(we[Se++]=Ge,we[Se++]=Qe,we[Se++]=Dn,Ge=e.id,Qe=e.overflow,Dn=n),n=Jo(n,r.children),n.flags|=4096,n)}function is(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ql(e.return,n,t)}function cl(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function hc(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(oe(e,n,r.children,t),r=$.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&is(e,t,n);else if(e.tag===19)is(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D($,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&vi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),cl(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&vi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}cl(n,!0,t,null,l);break;case"together":cl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Br(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function qe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ln|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=yn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=yn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Xd(e,n,t){switch(n.tag){case 3:vc(n),ft();break;case 5:Ha(n);break;case 1:ve(n.type)&&ui(n);break;case 4:Uo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;D(ci,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(D($,$.current&1),n.flags|=128,null):t&n.child.childLanes?pc(e,n,t):(D($,$.current&1),e=qe(e,n,t),e!==null?e.sibling:null);D($,$.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return hc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D($,$.current),r)break;return null;case 22:case 23:return n.lanes=0,fc(e,n,t)}return qe(e,n,t)}var mc,eo,gc,yc;mc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};eo=function(){};gc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,On($e.current);var l=null;switch(t){case"input":i=Sl(e,i),r=Sl(e,r),l=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),l=[];break;case"textarea":i=Il(e,i),r=Il(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=li)}Rl(t,r);var o;t=null;for(a in i)if(!r.hasOwnProperty(a)&&i.hasOwnProperty(a)&&i[a]!=null)if(a==="style"){var u=i[a];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Gt.hasOwnProperty(a)?l||(l=[]):(l=l||[]).push(a,null));for(a in r){var s=r[a];if(u=i!=null?i[a]:void 0,r.hasOwnProperty(a)&&s!==u&&(s!=null||u!=null))if(a==="style")if(u){for(o in u)!u.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&u[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(l||(l=[]),l.push(a,t)),t=s;else a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(l=l||[]).push(a,s)):a==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(a,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(Gt.hasOwnProperty(a)?(s!=null&&a==="onScroll"&&j("scroll",e),l||u===s||(l=[])):(l=l||[]).push(a,s))}t&&(l=l||[]).push("style",t);var a=l;(n.updateQueue=a)&&(n.flags|=4)}};yc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Rt(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Yd(e,n,t){var r=n.pendingProps;switch(_o(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return ve(n.type)&&oi(),te(n),null;case 3:return r=n.stateNode,vt(),L(de),L(le),Bo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Tr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Oe!==null&&(so(Oe),Oe=null))),eo(e,n),te(n),null;case 5:$o(n);var i=On(rr.current);if(t=n.type,e!==null&&n.stateNode!=null)gc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return te(n),null}if(e=On($e.current),Tr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[je]=n,r[nr]=l,e=(n.mode&1)!==0,t){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<At.length;i++)j(At[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":vu(r,l),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},j("invalid",r);break;case"textarea":hu(r,l),j("invalid",r)}Rl(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&Ir(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Ir(r.textContent,u,e),i=["children",""+u]):Gt.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&j("scroll",r)}switch(t){case"input":gr(r),pu(r,l,!0);break;case"textarea":gr(r),mu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=li)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[je]=n,e[nr]=r,mc(e,n,!1,!1),n.stateNode=e;e:{switch(o=Cl(t,r),t){case"dialog":j("cancel",e),j("close",e),i=r;break;case"iframe":case"object":case"embed":j("load",e),i=r;break;case"video":case"audio":for(i=0;i<At.length;i++)j(At[i],e);i=r;break;case"source":j("error",e),i=r;break;case"img":case"image":case"link":j("error",e),j("load",e),i=r;break;case"details":j("toggle",e),i=r;break;case"input":vu(e,r),i=Sl(e,r),j("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),j("invalid",e);break;case"textarea":hu(e,r),i=Il(e,r),j("invalid",e);break;default:i=r}Rl(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var s=u[l];l==="style"?Ks(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Qs(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Qt(e,s):typeof s=="number"&&Qt(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Gt.hasOwnProperty(l)?s!=null&&l==="onScroll"&&j("scroll",e):s!=null&&go(e,l,s,o))}switch(t){case"input":gr(e),pu(e,r,!1);break;case"textarea":gr(e),mu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?tt(e,!!r.multiple,l,!1):r.defaultValue!=null&&tt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=li)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return te(n),null;case 6:if(e&&n.stateNode!=null)yc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=On(rr.current),On($e.current),Tr(n)){if(r=n.stateNode,t=n.memoizedProps,r[je]=n,(l=r.nodeValue!==t)&&(e=ge,e!==null))switch(e.tag){case 3:Ir(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ir(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[je]=n,n.stateNode=r}return te(n),null;case 13:if(L($),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&me!==null&&n.mode&1&&!(n.flags&128))Aa(),ft(),n.flags|=98560,l=!1;else if(l=Tr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[je]=n}else ft(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;te(n),l=!1}else Oe!==null&&(so(Oe),Oe=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||$.current&1?K===0&&(K=3):bo())),n.updateQueue!==null&&(n.flags|=4),te(n),null);case 4:return vt(),eo(e,n),e===null&&bt(n.stateNode.containerInfo),te(n),null;case 10:return Do(n.type._context),te(n),null;case 17:return ve(n.type)&&oi(),te(n),null;case 19:if(L($),l=n.memoizedState,l===null)return te(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Rt(l,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=vi(e),o!==null){for(n.flags|=128,Rt(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return D($,$.current&1|2),n.child}e=e.sibling}l.tail!==null&&G()>ht&&(n.flags|=128,r=!0,Rt(l,!1),n.lanes=4194304)}else{if(!r)if(e=vi(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Rt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!U)return te(n),null}else 2*G()-l.renderingStartTime>ht&&t!==1073741824&&(n.flags|=128,r=!0,Rt(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=G(),n.sibling=null,t=$.current,D($,r?t&1|2:t&1),n):(te(n),null);case 22:case 23:return Zo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?he&1073741824&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function qd(e,n){switch(_o(n),n.tag){case 1:return ve(n.type)&&oi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return vt(),L(de),L(le),Bo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return $o(n),null;case 13:if(L($),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));ft()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return L($),null;case 4:return vt(),null;case 10:return Do(n.type._context),null;case 22:case 23:return Zo(),null;case 24:return null;default:return null}}var zr=!1,ie=!1,Zd=typeof WeakSet=="function"?WeakSet:Set,T=null;function et(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function no(e,n,t){try{t()}catch(r){V(e,n,r)}}var ls=!1;function bd(e,n){if(Ll=ti,e=Sa(),Po(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,u=-1,s=-1,a=0,h=0,g=e,v=null;n:for(;;){for(var p;g!==t||i!==0&&g.nodeType!==3||(u=o+i),g!==l||r!==0&&g.nodeType!==3||(s=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(p=g.firstChild)!==null;)v=g,g=p;for(;;){if(g===e)break n;if(v===t&&++a===i&&(u=o),v===l&&++h===r&&(s=o),(p=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=p}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ul={focusedElem:e,selectionRange:t},ti=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var m=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,E=m.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?y:ze(n.type,y),E);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){V(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return m=ls,ls=!1,m}function Ht(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&no(n,t,l)}i=i.next}while(i!==r)}}function Oi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function to(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function xc(e){var n=e.alternate;n!==null&&(e.alternate=null,xc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[je],delete n[nr],delete n[Hl],delete n[Ad],delete n[Dd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function os(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ro(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=li));else if(r!==4&&(e=e.child,e!==null))for(ro(e,n,t),e=e.sibling;e!==null;)ro(e,n,t),e=e.sibling}function io(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(io(e,n,t),e=e.sibling;e!==null;)io(e,n,t),e=e.sibling}var Z=null,Pe=!1;function be(e,n,t){for(t=t.child;t!==null;)wc(e,n,t),t=t.sibling}function wc(e,n,t){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(Ni,t)}catch{}switch(t.tag){case 5:ie||et(t,n);case 6:var r=Z,i=Pe;Z=null,be(e,n,t),Z=r,Pe=i,Z!==null&&(Pe?(e=Z,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Z.removeChild(t.stateNode));break;case 18:Z!==null&&(Pe?(e=Z,t=t.stateNode,e.nodeType===8?rl(e.parentNode,t):e.nodeType===1&&rl(e,t),Yt(e)):rl(Z,t.stateNode));break;case 4:r=Z,i=Pe,Z=t.stateNode.containerInfo,Pe=!0,be(e,n,t),Z=r,Pe=i;break;case 0:case 11:case 14:case 15:if(!ie&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&no(t,n,o),i=i.next}while(i!==r)}be(e,n,t);break;case 1:if(!ie&&(et(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){V(t,n,u)}be(e,n,t);break;case 21:be(e,n,t);break;case 22:t.mode&1?(ie=(r=ie)||t.memoizedState!==null,be(e,n,t),ie=r):be(e,n,t);break;default:be(e,n,t)}}function us(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Zd),n.forEach(function(r){var i=sv.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ce(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:Z=u.stateNode,Pe=!1;break e;case 3:Z=u.stateNode.containerInfo,Pe=!0;break e;case 4:Z=u.stateNode.containerInfo,Pe=!0;break e}u=u.return}if(Z===null)throw Error(S(160));wc(l,o,i),Z=null,Pe=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(a){V(i,n,a)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Sc(n,e),n=n.sibling}function Sc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ce(n,e),Ae(e),r&4){try{Ht(3,e,e.return),Oi(3,e)}catch(y){V(e,e.return,y)}try{Ht(5,e,e.return)}catch(y){V(e,e.return,y)}}break;case 1:Ce(n,e),Ae(e),r&512&&t!==null&&et(t,t.return);break;case 5:if(Ce(n,e),Ae(e),r&512&&t!==null&&et(t,t.return),e.flags&32){var i=e.stateNode;try{Qt(i,"")}catch(y){V(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&Vs(i,l),Cl(u,o);var a=Cl(u,l);for(o=0;o<s.length;o+=2){var h=s[o],g=s[o+1];h==="style"?Ks(i,g):h==="dangerouslySetInnerHTML"?Qs(i,g):h==="children"?Qt(i,g):go(i,h,g,a)}switch(u){case"input":Nl(i,l);break;case"textarea":Ws(i,l);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var p=l.value;p!=null?tt(i,!!l.multiple,p,!1):v!==!!l.multiple&&(l.defaultValue!=null?tt(i,!!l.multiple,l.defaultValue,!0):tt(i,!!l.multiple,l.multiple?[]:"",!1))}i[nr]=l}catch(y){V(e,e.return,y)}}break;case 6:if(Ce(n,e),Ae(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(y){V(e,e.return,y)}}break;case 3:if(Ce(n,e),Ae(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Yt(n.containerInfo)}catch(y){V(e,e.return,y)}break;case 4:Ce(n,e),Ae(e);break;case 13:Ce(n,e),Ae(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Yo=G())),r&4&&us(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(ie=(a=ie)||h,Ce(n,e),ie=a):Ce(n,e),Ae(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!h&&e.mode&1)for(T=e,h=e.child;h!==null;){for(g=T=h;T!==null;){switch(v=T,p=v.child,v.tag){case 0:case 11:case 14:case 15:Ht(4,v,v.return);break;case 1:et(v,v.return);var m=v.stateNode;if(typeof m.componentWillUnmount=="function"){r=v,t=v.return;try{n=r,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(y){V(r,t,y)}}break;case 5:et(v,v.return);break;case 22:if(v.memoizedState!==null){as(g);continue}}p!==null?(p.return=v,T=p):as(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{i=g.stateNode,a?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=g.stateNode,s=g.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=Js("display",o))}catch(y){V(e,e.return,y)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=a?"":g.memoizedProps}catch(y){V(e,e.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ce(n,e),Ae(e),r&4&&us(e);break;case 21:break;default:Ce(n,e),Ae(e)}}function Ae(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ec(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qt(i,""),r.flags&=-33);var l=os(e);io(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=os(e);ro(e,u,o);break;default:throw Error(S(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ev(e,n,t){T=e,Nc(e)}function Nc(e,n,t){for(var r=(e.mode&1)!==0;T!==null;){var i=T,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||zr;if(!o){var u=i.alternate,s=u!==null&&u.memoizedState!==null||ie;u=zr;var a=ie;if(zr=o,(ie=s)&&!a)for(T=i;T!==null;)o=T,s=o.child,o.tag===22&&o.memoizedState!==null?cs(i):s!==null?(s.return=o,T=s):cs(i);for(;l!==null;)T=l,Nc(l),l=l.sibling;T=i,zr=u,ie=a}ss(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,T=l):ss(e)}}function ss(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ie||Oi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ie)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Gu(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Gu(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var a=n.alternate;if(a!==null){var h=a.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Yt(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ie||n.flags&512&&to(n)}catch(v){V(n,n.return,v)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function as(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function cs(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Oi(4,n)}catch(s){V(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){V(n,i,s)}}var l=n.return;try{to(n)}catch(s){V(n,l,s)}break;case 5:var o=n.return;try{to(n)}catch(s){V(n,o,s)}}}catch(s){V(n,n.return,s)}if(n===e){T=null;break}var u=n.sibling;if(u!==null){u.return=n.return,T=u;break}T=n.return}}var nv=Math.ceil,mi=Ze.ReactCurrentDispatcher,Ko=Ze.ReactCurrentOwner,ke=Ze.ReactCurrentBatchConfig,M=0,q=null,Q=null,b=0,he=0,nt=Nn(0),K=0,ur=null,Ln=0,_i=0,Xo=0,Vt=null,ce=null,Yo=0,ht=1/0,Ve=null,gi=!1,lo=null,mn=null,Pr=!1,an=null,yi=0,Wt=0,oo=null,Hr=-1,Vr=0;function ue(){return M&6?G():Hr!==-1?Hr:Hr=G()}function gn(e){return e.mode&1?M&2&&b!==0?b&-b:Ld.transition!==null?(Vr===0&&(Vr=oa()),Vr):(e=F,e!==0||(e=window.event,e=e===void 0?16:va(e.type)),e):1}function Me(e,n,t,r){if(50<Wt)throw Wt=0,oo=null,Error(S(185));ar(e,t,r),(!(M&2)||e!==q)&&(e===q&&(!(M&2)&&(_i|=t),K===4&&un(e,b)),pe(e,r),t===1&&M===0&&!(n.mode&1)&&(ht=G()+500,Ci&&kn()))}function pe(e,n){var t=e.callbackNode;Lf(e,n);var r=ni(e,e===q?b:0);if(r===0)t!==null&&xu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&xu(t),n===1)e.tag===0?jd(fs.bind(null,e)):_a(fs.bind(null,e)),Md(function(){!(M&6)&&kn()}),t=null;else{switch(ua(r)){case 1:t=So;break;case 4:t=ia;break;case 16:t=ei;break;case 536870912:t=la;break;default:t=ei}t=Oc(t,kc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function kc(e,n){if(Hr=-1,Vr=0,M&6)throw Error(S(327));var t=e.callbackNode;if(ut()&&e.callbackNode!==t)return null;var r=ni(e,e===q?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=xi(e,r);else{n=r;var i=M;M|=2;var l=Tc();(q!==e||b!==n)&&(Ve=null,ht=G()+500,_n(e,n));do try{iv();break}catch(u){Ic(e,u)}while(1);Ao(),mi.current=l,M=i,Q!==null?n=0:(q=null,b=0,n=K)}if(n!==0){if(n===2&&(i=Ml(e),i!==0&&(r=i,n=uo(e,i))),n===1)throw t=ur,_n(e,0),un(e,r),pe(e,G()),t;if(n===6)un(e,r);else{if(i=e.current.alternate,!(r&30)&&!tv(i)&&(n=xi(e,r),n===2&&(l=Ml(e),l!==0&&(r=l,n=uo(e,l))),n===1))throw t=ur,_n(e,0),un(e,r),pe(e,G()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:Cn(e,ce,Ve);break;case 3:if(un(e,r),(r&130023424)===r&&(n=Yo+500-G(),10<n)){if(ni(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Bl(Cn.bind(null,e,ce,Ve),n);break}Cn(e,ce,Ve);break;case 4:if(un(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-_e(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nv(r/1960))-r,10<r){e.timeoutHandle=Bl(Cn.bind(null,e,ce,Ve),r);break}Cn(e,ce,Ve);break;case 5:Cn(e,ce,Ve);break;default:throw Error(S(329))}}}return pe(e,G()),e.callbackNode===t?kc.bind(null,e):null}function uo(e,n){var t=Vt;return e.current.memoizedState.isDehydrated&&(_n(e,n).flags|=256),e=xi(e,n),e!==2&&(n=ce,ce=t,n!==null&&so(n)),e}function so(e){ce===null?ce=e:ce.push.apply(ce,e)}function tv(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Fe(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function un(e,n){for(n&=~Xo,n&=~_i,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-_e(n),r=1<<t;e[t]=-1,n&=~r}}function fs(e){if(M&6)throw Error(S(327));ut();var n=ni(e,0);if(!(n&1))return pe(e,G()),null;var t=xi(e,n);if(e.tag!==0&&t===2){var r=Ml(e);r!==0&&(n=r,t=uo(e,r))}if(t===1)throw t=ur,_n(e,0),un(e,n),pe(e,G()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Cn(e,ce,Ve),pe(e,G()),null}function qo(e,n){var t=M;M|=1;try{return e(n)}finally{M=t,M===0&&(ht=G()+500,Ci&&kn())}}function Un(e){an!==null&&an.tag===0&&!(M&6)&&ut();var n=M;M|=1;var t=ke.transition,r=F;try{if(ke.transition=null,F=1,e)return e()}finally{F=r,ke.transition=t,M=n,!(M&6)&&kn()}}function Zo(){he=nt.current,L(nt)}function _n(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,_d(t)),Q!==null)for(t=Q.return;t!==null;){var r=t;switch(_o(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oi();break;case 3:vt(),L(de),L(le),Bo();break;case 5:$o(r);break;case 4:vt();break;case 13:L($);break;case 19:L($);break;case 10:Do(r.type._context);break;case 22:case 23:Zo()}t=t.return}if(q=e,Q=e=yn(e.current,null),b=he=n,K=0,ur=null,Xo=_i=Ln=0,ce=Vt=null,Pn!==null){for(n=0;n<Pn.length;n++)if(t=Pn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}Pn=null}return e}function Ic(e,n){do{var t=Q;try{if(Ao(),Ur.current=hi,pi){for(var r=B.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pi=!1}if(jn=0,Y=J=B=null,Bt=!1,ir=0,Ko.current=null,t===null||t.return===null){K=1,ur=n,Q=null;break}e:{var l=e,o=t.return,u=t,s=n;if(n=b,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var a=s,h=u,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var v=h.alternate;v?(h.updateQueue=v.updateQueue,h.memoizedState=v.memoizedState,h.lanes=v.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Zu(o);if(p!==null){p.flags&=-257,bu(p,o,u,l,n),p.mode&1&&qu(l,a,n),n=p,s=a;var m=n.updateQueue;if(m===null){var y=new Set;y.add(s),n.updateQueue=y}else m.add(s);break e}else{if(!(n&1)){qu(l,a,n),bo();break e}s=Error(S(426))}}else if(U&&u.mode&1){var E=Zu(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),bu(E,o,u,l,n),Mo(pt(s,u));break e}}l=s=pt(s,u),K!==4&&(K=2),Vt===null?Vt=[l]:Vt.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var d=sc(l,s,n);Wu(l,d);break e;case 1:u=s;var c=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(mn===null||!mn.has(f)))){l.flags|=65536,n&=-n,l.lanes|=n;var x=ac(l,u,n);Wu(l,x);break e}}l=l.return}while(l!==null)}Cc(t)}catch(w){n=w,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(1)}function Tc(){var e=mi.current;return mi.current=hi,e===null?hi:e}function bo(){(K===0||K===3||K===2)&&(K=4),q===null||!(Ln&268435455)&&!(_i&268435455)||un(q,b)}function xi(e,n){var t=M;M|=2;var r=Tc();(q!==e||b!==n)&&(Ve=null,_n(e,n));do try{rv();break}catch(i){Ic(e,i)}while(1);if(Ao(),M=t,mi.current=r,Q!==null)throw Error(S(261));return q=null,b=0,K}function rv(){for(;Q!==null;)Rc(Q)}function iv(){for(;Q!==null&&!zf();)Rc(Q)}function Rc(e){var n=Pc(e.alternate,e,he);e.memoizedProps=e.pendingProps,n===null?Cc(e):Q=n,Ko.current=null}function Cc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=qd(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Q=null;return}}else if(t=Yd(t,n,he),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);K===0&&(K=5)}function Cn(e,n,t){var r=F,i=ke.transition;try{ke.transition=null,F=1,lv(e,n,t,r)}finally{ke.transition=i,F=r}return null}function lv(e,n,t,r){do ut();while(an!==null);if(M&6)throw Error(S(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Uf(e,l),e===q&&(Q=q=null,b=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Pr||(Pr=!0,Oc(ei,function(){return ut(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=ke.transition,ke.transition=null;var o=F;F=1;var u=M;M|=4,Ko.current=null,bd(e,t),Sc(t,e),Id(Ul),ti=!!Ll,Ul=Ll=null,e.current=t,ev(t),Pf(),M=u,F=o,ke.transition=l}else e.current=t;if(Pr&&(Pr=!1,an=e,yi=i),l=e.pendingLanes,l===0&&(mn=null),Mf(t.stateNode),pe(e,G()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(gi)throw gi=!1,e=lo,lo=null,e;return yi&1&&e.tag!==0&&ut(),l=e.pendingLanes,l&1?e===oo?Wt++:(Wt=0,oo=e):Wt=0,kn(),null}function ut(){if(an!==null){var e=ua(yi),n=ke.transition,t=F;try{if(ke.transition=null,F=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,yi=0,M&6)throw Error(S(331));var i=M;for(M|=4,T=e.current;T!==null;){var l=T,o=l.child;if(T.flags&16){var u=l.deletions;if(u!==null){for(var s=0;s<u.length;s++){var a=u[s];for(T=a;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:Ht(8,h,l)}var g=h.child;if(g!==null)g.return=h,T=g;else for(;T!==null;){h=T;var v=h.sibling,p=h.return;if(xc(h),h===a){T=null;break}if(v!==null){v.return=p,T=v;break}T=p}}}var m=l.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}T=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,T=o;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Ht(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,T=d;break e}T=l.return}}var c=e.current;for(T=c;T!==null;){o=T;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,T=f;else e:for(o=c;T!==null;){if(u=T,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Oi(9,u)}}catch(w){V(u,u.return,w)}if(u===o){T=null;break e}var x=u.sibling;if(x!==null){x.return=u.return,T=x;break e}T=u.return}}if(M=i,kn(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(Ni,e)}catch{}r=!0}return r}finally{F=t,ke.transition=n}}return!1}function ds(e,n,t){n=pt(t,n),n=sc(e,n,1),e=hn(e,n,1),n=ue(),e!==null&&(ar(e,1,n),pe(e,n))}function V(e,n,t){if(e.tag===3)ds(e,e,t);else for(;n!==null;){if(n.tag===3){ds(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=pt(t,e),e=ac(n,e,1),n=hn(n,e,1),e=ue(),n!==null&&(ar(n,1,e),pe(n,e));break}}n=n.return}}function ov(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ue(),e.pingedLanes|=e.suspendedLanes&t,q===e&&(b&t)===t&&(K===4||K===3&&(b&130023424)===b&&500>G()-Yo?_n(e,0):Xo|=t),pe(e,n)}function zc(e,n){n===0&&(e.mode&1?(n=Er,Er<<=1,!(Er&130023424)&&(Er=4194304)):n=1);var t=ue();e=Ye(e,n),e!==null&&(ar(e,n,t),pe(e,t))}function uv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),zc(e,t)}function sv(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),zc(e,t)}var Pc;Pc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||de.current)fe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return fe=!1,Xd(e,n,t);fe=!!(e.flags&131072)}else fe=!1,U&&n.flags&1048576&&Ma(n,ai,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Br(e,n),e=n.pendingProps;var i=ct(n,le.current);ot(n,t),i=Vo(null,n,r,e,i,t);var l=Wo();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ve(r)?(l=!0,ui(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lo(n),i.updater=zi,n.stateNode=i,i._reactInternals=n,Kl(n,r,e,t),n=ql(null,n,r,!0,l,t)):(n.tag=0,U&&l&&Oo(n),oe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Br(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=cv(r),e=ze(r,e),i){case 0:n=Yl(null,n,r,e,t);break e;case 1:n=ts(null,n,r,e,t);break e;case 11:n=es(null,n,r,e,t);break e;case 14:n=ns(null,n,r,ze(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),Yl(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),ts(e,n,r,i,t);case 3:e:{if(vc(n),e===null)throw Error(S(387));r=n.pendingProps,l=n.memoizedState,i=l.element,ja(e,n),di(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=pt(Error(S(423)),n),n=rs(e,n,r,t,i);break e}else if(r!==i){i=pt(Error(S(424)),n),n=rs(e,n,r,t,i);break e}else for(me=pn(n.stateNode.containerInfo.firstChild),ge=n,U=!0,Oe=null,t=Ba(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ft(),r===i){n=qe(e,n,t);break e}oe(e,n,r,t)}n=n.child}return n;case 5:return Ha(n),e===null&&Gl(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,$l(r,i)?o=null:l!==null&&$l(r,l)&&(n.flags|=32),dc(e,n),oe(e,n,o,t),n.child;case 6:return e===null&&Gl(n),null;case 13:return pc(e,n,t);case 4:return Uo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=dt(n,null,r,t):oe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),es(e,n,r,i,t);case 7:return oe(e,n,n.pendingProps,t),n.child;case 8:return oe(e,n,n.pendingProps.children,t),n.child;case 12:return oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,D(ci,r._currentValue),r._currentValue=o,l!==null)if(Fe(l.value,o)){if(l.children===i.children&&!de.current){n=qe(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Je(-1,t&-t),s.tag=2;var a=l.updateQueue;if(a!==null){a=a.shared;var h=a.pending;h===null?s.next=s:(s.next=h.next,h.next=s),a.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Ql(l.return,t,n),u.lanes|=t;break}s=s.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(S(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Ql(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}oe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,ot(n,t),i=Ie(i),r=r(i),n.flags|=1,oe(e,n,r,t),n.child;case 14:return r=n.type,i=ze(r,n.pendingProps),i=ze(r.type,i),ns(e,n,r,i,t);case 15:return cc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),Br(e,n),n.tag=1,ve(r)?(e=!0,ui(n)):e=!1,ot(n,t),Ua(n,r,i),Kl(n,r,i,t),ql(null,n,r,!0,e,t);case 19:return hc(e,n,t);case 22:return fc(e,n,t)}throw Error(S(156,n.tag))};function Oc(e,n){return ra(e,n)}function av(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,n,t,r){return new av(e,n,t,r)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cv(e){if(typeof e=="function")return eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xo)return 11;if(e===Eo)return 14}return 2}function yn(e,n){var t=e.alternate;return t===null?(t=Ne(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Wr(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")eu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Gn:return Mn(t.children,i,l,n);case yo:o=8,i|=8;break;case yl:return e=Ne(12,t,n,i|2),e.elementType=yl,e.lanes=l,e;case xl:return e=Ne(13,t,n,i),e.elementType=xl,e.lanes=l,e;case El:return e=Ne(19,t,n,i),e.elementType=El,e.lanes=l,e;case $s:return Mi(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ls:o=10;break e;case Us:o=9;break e;case xo:o=11;break e;case Eo:o=14;break e;case rn:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Ne(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function Mn(e,n,t,r){return e=Ne(7,e,r,n),e.lanes=t,e}function Mi(e,n,t,r){return e=Ne(22,e,r,n),e.elementType=$s,e.lanes=t,e.stateNode={isHidden:!1},e}function fl(e,n,t){return e=Ne(6,e,null,n),e.lanes=t,e}function dl(e,n,t){return n=Ne(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function fv(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,n,t,r,i,l,o,u,s){return e=new fv(e,n,t,u,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ne(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lo(l),e}function dv(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function _c(e){if(!e)return En;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(ve(t))return Oa(e,t,n)}return n}function Mc(e,n,t,r,i,l,o,u,s){return e=nu(t,r,!0,e,i,l,o,u,s),e.context=_c(null),t=e.current,r=ue(),i=gn(t),l=Je(r,i),l.callback=n??null,hn(t,l,i),e.current.lanes=i,ar(e,i,r),pe(e,r),e}function Fi(e,n,t,r){var i=n.current,l=ue(),o=gn(i);return t=_c(t),n.context===null?n.context=t:n.pendingContext=t,n=Je(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=hn(i,n,o),e!==null&&(Me(e,i,o,l),Lr(e,i,o)),o}function Ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function tu(e,n){vs(e,n),(e=e.alternate)&&vs(e,n)}function vv(){return null}var Fc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ru(e){this._internalRoot=e}Ai.prototype.render=ru.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));Fi(e,n,null,null)};Ai.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Un(function(){Fi(null,e,null,null)}),n[Xe]=null}};function Ai(e){this._internalRoot=e}Ai.prototype.unstable_scheduleHydration=function(e){if(e){var n=ca();e={blockedOn:null,target:e,priority:n};for(var t=0;t<on.length&&n!==0&&n<on[t].priority;t++);on.splice(t,0,e),t===0&&da(e)}};function iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ps(){}function pv(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var a=Ei(o);l.call(a)}}var o=Mc(n,r,e,0,null,!1,!1,"",ps);return e._reactRootContainer=o,e[Xe]=o.current,bt(e.nodeType===8?e.parentNode:e),Un(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var a=Ei(s);u.call(a)}}var s=nu(e,0,!1,null,null,!1,!1,"",ps);return e._reactRootContainer=s,e[Xe]=s.current,bt(e.nodeType===8?e.parentNode:e),Un(function(){Fi(n,s,t,r)}),s}function ji(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var s=Ei(o);u.call(s)}}Fi(n,o,e,i)}else o=pv(t,n,e,i,r);return Ei(o)}sa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ft(n.pendingLanes);t!==0&&(No(n,t|1),pe(n,G()),!(M&6)&&(ht=G()+500,kn()))}break;case 13:Un(function(){var r=Ye(e,1);if(r!==null){var i=ue();Me(r,e,1,i)}}),tu(e,1)}};ko=function(e){if(e.tag===13){var n=Ye(e,134217728);if(n!==null){var t=ue();Me(n,e,134217728,t)}tu(e,134217728)}};aa=function(e){if(e.tag===13){var n=gn(e),t=Ye(e,n);if(t!==null){var r=ue();Me(t,e,n,r)}tu(e,n)}};ca=function(){return F};fa=function(e,n){var t=F;try{return F=e,n()}finally{F=t}};Pl=function(e,n,t){switch(n){case"input":if(Nl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Ri(r);if(!i)throw Error(S(90));Hs(r),Nl(r,i)}}}break;case"textarea":Ws(e,t);break;case"select":n=t.value,n!=null&&tt(e,!!t.multiple,n,!1)}};qs=qo;Zs=Un;var hv={usingClientEntryPoint:!1,Events:[fr,Xn,Ri,Xs,Ys,qo]},Ct={findFiberByHostInstance:zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},mv={bundleType:Ct.bundleType,version:Ct.version,rendererPackageName:Ct.rendererPackageName,rendererConfig:Ct.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=na(e),e===null?null:e.stateNode},findFiberByHostInstance:Ct.findFiberByHostInstance||vv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{Ni=Or.inject(mv),Ue=Or}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hv;xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(n))throw Error(S(200));return dv(e,n,null,t)};xe.createRoot=function(e,n){if(!iu(e))throw Error(S(299));var t=!1,r="",i=Fc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=nu(e,1,!1,null,null,t,!1,r,i),e[Xe]=n.current,bt(e.nodeType===8?e.parentNode:e),new ru(n)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=na(n),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Un(e)};xe.hydrate=function(e,n,t){if(!Di(n))throw Error(S(200));return ji(null,e,n,!0,t)};xe.hydrateRoot=function(e,n,t){if(!iu(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Fc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Mc(n,null,e,1,t??null,i,!1,l,o),e[Xe]=n.current,bt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Ai(n)};xe.render=function(e,n,t){if(!Di(n))throw Error(S(200));return ji(null,e,n,!1,t)};xe.unmountComponentAtNode=function(e){if(!Di(e))throw Error(S(40));return e._reactRootContainer?(Un(function(){ji(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};xe.unstable_batchedUpdates=qo;xe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Di(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ji(e,n,t,!1,r)};xe.version="18.2.0-next-9e3b772b8-20220608";function Ac(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ac)}catch(e){console.error(e)}}Ac(),Ms.exports=xe;var gv=Ms.exports,hs=gv;au.createRoot=hs.createRoot,au.hydrateRoot=hs.hydrateRoot;const yv=`float ease(float t) {
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
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  return vec3((2. / PI) * ((clog(cone + z)) - clog(cone - z)), 0.);
  #elif PROJECTION3 == 7 // CROSS
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  // Sum of angles
  // float o = -.5 * PI;
  // vec2 a = vec2(cos(o), sin(o));
  return vec3((2. / PI) * .5 * (clog(cone + z) - clog(cone - z) + cmul(ci, clog(cone - cmul(ci, z))) + cmul(-ci, clog(cone - cmul(-ci, z)))), 0.);
  #elif PROJECTION3 == 8 // HEART
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  return vec3(z.x * z.y + z.y, -.5 * (z.x * z.x - z.y * z.y + 2. * z.x - 0.75), 0.);
  #elif PROJECTION3 == 9 // TEARDROP
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  return vec3(sign(z.y) *
    sqrt((sqrt((1. + z.x) * (1. + z.x) + z.y * z.y) - (1. + z.x)) / 2.), -(sqrt((sqrt((1. + z.x) * (1. + z.x) + z.y * z.y) + (1. + z.x)) / 2.) - 0.75), 0.);
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
  return xproject(v.xyz * fov4);
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
`,Sv=`const vec2 cone = vec2(1., 0);
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
`,kv="sßx",ms={active:1,inactive:0,snub:"s",holosnub:"ß",custom:.5,activeVoid:"x",void:""},Dc=e=>e===0?"inactive":e===1?"active":e==="s"?"snub":e==="ß"?"holosnub":e==="x"?"activeVoid":e===""?"void":"custom",Iv=e=>{const n=[];for(let t=0;t<e[0].length;t++){n.push([]);for(let r=0;r<e.length;r++)n[t].push(e[r][t])}return n},Gr=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){t[r]=new Array(n[0].length);for(let i=0;i<n[0].length;i++){let l=0;for(let o=0;o<n.length;o++)l+=e[r][o]*n[o][i];t[r][i]=l}}return t},Ep=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){let i=0;for(let l=0;l<e[0].length;l++)i+=e[r][l]*n[l];t[r]=i}return t},wp=(e,n)=>{for(let t=0;t<e.length;t++)for(let r=0;r<e[0].length;r++)e[t][r]=n[t][r];return e},wn=e=>{const n=new Array(e);for(let t=0;t<e;t++)n[t]=new Array(e).fill(0),n[t][t]=1;return n},Tv=e=>e.every((n,t)=>n.every((r,i)=>t===i||e[t][i]===0)),Sp=e=>{const n=e[0].length;let t=e.map(l=>l.slice()),r=wn(n),i=1e3;for(;!Tv(t)&&i-- >0;){let l=0,o=1;for(let a=0;a<n;a++)for(let h=0;h<n;h++)a!==h&&st(t[a][h])>st(t[l][o])&&(l=a,o=h);const u=t[l][l]===t[o][o]?Lc(t[l][o])*He/4:.5*zv(2*t[l][o]/(t[l][l]-t[o][o])),s=wn(n);s[o][o]=s[l][l]=cn(u),s[o][l]=s[l][o]=-Le(u),s[o][l]*=-1,r=Gr(r,s),t=Gr(Gr(Iv(s),t),s)}return{vectors:r,values:t.map((l,o)=>st(l[o])<1e-8?0:l[o])}},Np=e=>{const n=e.length,t=[];for(let r=0;r<n;r++)t.push([...e[r],...wn(n)[r]]);for(let r=0;r<n;r++){const i=t[r][r];for(let l=r+1;l<n;l++){const o=t[l][r]/i;for(let u=r;u<2*n;u++)t[l][u]-=o*t[r][u]}}for(let r=n-1;r>=0;r--){const i=t[r][r];for(let l=r-1;l>=0;l--){const o=t[l][r]/i;for(let u=0;u<2*n;u++)t[l][u]-=o*t[r][u]}for(let l=n;l<2*n;l++)t[r][l]/=i}return t.map(r=>r.slice(n))},wi=e=>{if(e.length===2)return[e[0][0],e[1][0],e[0][1],e[1][1]];if(e.length===3)return[e[0][0],e[1][0],e[2][0],e[0][1],e[1][1],e[2][1],e[0][2],e[1][2],e[2][2]];if(e.length===4)return[e[0][0],e[1][0],e[2][0],e[3][0],e[0][1],e[1][1],e[2][1],e[3][1],e[0][2],e[1][2],e[2][2],e[3][2],e[0][3],e[1][3],e[2][3],e[3][3]];if(e.length===5)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],e[0][4]],[[e[1][0],e[1][1],e[1][2],e[1][3]],e[1][4]],[[e[2][0],e[2][1],e[2][2],e[2][3]],e[2][4]],[[e[3][0],e[3][1],e[3][2],e[3][3]],e[3][4]],[[e[4][0],e[4][1],e[4][2],e[4][3]],e[4][4]]];if(e.length===6)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5]]]];if(e.length===7)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6]]]];if(e.length===8)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]]]];if(e.length===9)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]],e[0][8]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]],e[1][8]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]],e[2][8]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]],e[3][8]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]],e[4][8]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]],e[5][8]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]],e[6][8]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]],e[7][8]],[[e[8][0],e[8][1],e[8][2],e[8][3]],[e[8][4],e[8][5],e[8][6],e[8][7]],e[8][8]]];throw new Error("Unsupported matrix size")},Rv=(e,n,t,r)=>{const i=1/jc(e/2),l=1/(t-r),o=wn(4);return o[0][0]=i/n,o[1][1]=i,o[2][2]=(r+t)*l,o[3][2]=-1,o[2][3]=2*r*t*l,o[3][3]=0,o},Cv=(e,n,t)=>{if(st(e[0]-n[0])<1e-4&&st(e[1]-n[1])<1e-4&&st(e[2]-n[2])<1e-4)return wn(4);let r=e[0]-n[0],i=e[1]-n[1],l=e[2]-n[2],o=1/Qr(r*r+i*i+l*l);r*=o,i*=o,l*=o;let u=t[1]*l-t[2]*i,s=t[2]*r-t[0]*l,a=t[0]*i-t[1]*r;o=Qr(u*u+s*s+a*a),o?(o=1/o,u*=o,s*=o,a*=o):(u=0,s=0,a=0);let h=i*a-l*s,g=l*u-r*a,v=r*s-i*u;o=Qr(h*h+g*g+v*v),o?(o=1/o,h*=o,g*=o,v*=o):(h=0,g=0,v=0);const p=wn(4);return p[0][0]=u,p[1][0]=h,p[2][0]=r,p[0][1]=s,p[1][1]=g,p[2][1]=i,p[0][2]=a,p[1][2]=v,p[2][2]=l,p[0][3]=-(u*e[0]+s*e[1]+a*e[2]),p[1][3]=-(h*e[0]+g*e[1]+v*e[2]),p[2][3]=-(r*e[0]+i*e[1]+l*e[2]),p},{abs:st,cos:cn,sin:Le,tan:jc,cosh:kp,sinh:Ip,acos:Tp,acosh:Rp,atan:zv,atan2:Pv,min:Be,max:zt,round:Cp,sqrt:Qr,sign:Lc,ceil:zp,floor:Pp,log:Op,exp:_p,hypot:Mp,pow:Ov,PI:He}=Math,ao=He*2;function*_v(e,n){if(n<0||e.length<n)return;const t=Array.from(Array(n).keys());for(;;){yield t.map(i=>e[i]);let r=n-1;for(;r>=0&&t[r]>=e.length-n+r;)r--;if(r<0)return;for(let i=t[r]+1;r<n;r++,i++)t[r]=i}}const Fp=(e,n=2)=>Array.from(_v(e,n)),Mv=e=>e.charCodeAt(0)-97,Jr=e=>e?e*Jr(e-1):1,Ap=(e,n)=>Jr(e)/(Jr(n)*Jr(e-n)),Dp=(e,n)=>{let t;return(...r)=>(clearTimeout(t),t=setTimeout(()=>e(...r),n),()=>clearTimeout(t))},Fv=(e,n=null,t=1,r=!1)=>{if(n===null&&(n=e,e=0),t===0)throw new Error("Step cannot be zero.");if(n<e&&t>0||n>e&&t<0){if(r)return[];t=-t}return new Array(Math.ceil((n-e)/t)).fill().map((i,l)=>e+l*t)};var Uc={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(Wc,function(){var t=function(){function r(p){return o.appendChild(p.dom),p}function i(p){for(var m=0;m<o.children.length;m++)o.children[m].style.display=m===p?"block":"none";l=p}var l=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(p){p.preventDefault(),i(++l%o.children.length)},!1);var u=(performance||Date).now(),s=u,a=0,h=r(new t.Panel("FPS","#0ff","#002")),g=r(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var v=r(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:r,showPanel:i,begin:function(){u=(performance||Date).now()},end:function(){a++;var p=(performance||Date).now();if(g.update(p-u,200),p>s+1e3&&(h.update(1e3*a/(p-s),100),s=p,a=0,v)){var m=performance.memory;v.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return p},update:function(){u=this.end()},domElement:o,setMode:i}};return t.Panel=function(r,i,l){var o=1/0,u=0,s=Math.round,a=s(window.devicePixelRatio||1),h=80*a,g=48*a,v=3*a,p=2*a,m=3*a,y=15*a,E=74*a,d=30*a,c=document.createElement("canvas");c.width=h,c.height=g,c.style.cssText="width:80px;height:48px";var f=c.getContext("2d");return f.font="bold "+9*a+"px Helvetica,Arial,sans-serif",f.textBaseline="top",f.fillStyle=l,f.fillRect(0,0,h,g),f.fillStyle=i,f.fillText(r,v,p),f.fillRect(m,y,E,d),f.fillStyle=l,f.globalAlpha=.9,f.fillRect(m,y,E,d),{dom:c,update:function(x,w){o=Math.min(o,x),u=Math.max(u,x),f.fillStyle=l,f.globalAlpha=1,f.fillRect(0,0,h,y),f.fillStyle=i,f.fillText(s(x)+" "+r+" ("+s(o)+"-"+s(u)+")",v,p),f.drawImage(c,m+a,y,E-a,d,m,y,E-a,d),f.fillRect(m+E-a,y,a,d),f.fillStyle=l,f.globalAlpha=.9,f.fillRect(m+E-a,y,a,s((1-x/w)*d))}}},t})})(Uc);var Av=Uc.exports;const Dv=Gc(Av),jv=({radius:e=1,widthSegments:n=16,segments:t=16}={})=>{const r=[],i=[],l=[],o=[];let u=0;const s=[];for(let a=0;a<=t;a++){const h=[],g=a/t;let v=0;a===0?v=.5/n:a===t&&(v=-.5/n);for(let p=0;p<=n;p++){const m=p/n,y=[-e*cn(m*ao)*Le(g*He),e*cn(g*He),e*Le(m*ao)*Le(g*He)];i.push(...y);const E=(y[0]**2+y[1]**2+y[2]**2)**-.5;l.push(...y.map(d=>d*E)),o.push(m+v,1-g),h.push(u++)}s.push(h)}for(let a=0;a<t;a++)for(let h=0;h<n;h++){const g=s[a][h+1],v=s[a][h],p=s[a+1][h],m=s[a+1][h+1];a!==0&&r.push(g,v,m),a!==t-1&&r.push(v,p,m)}return{vertices:i,normals:l,uvs:o,indices:r}},Lv=({radius:e=null,radiusTop:n=1,radiusBottom:t=1,height:r=1,radialSegments:i=8,segments:l=1}={})=>{const o=[],u=[],s=[],a=[];e!==null&&(n=e,t=e);let h=0;const g=[],v=r/2,p=(t-n)/r;for(let m=0;m<=l;m++){const y=[],E=m/l,d=E*(t-n)+n;for(let c=0;c<=i;c++){const f=c/i,x=f*ao,w=Le(x),I=cn(x),k=[d*w,-E*r+v,d*I];u.push(...k);const N=[w,p,I],A=(N[0]**2+N[1]**2+N[2]**2)**-.5;s.push(...N.map(O=>O*A)),a.push(f,1-E),y.push(h++)}g.push(y)}for(let m=0;m<i;m++)for(let y=0;y<l;y++){const E=g[y][m],d=g[y+1][m],c=g[y+1][m+1],f=g[y][m+1];o.push(E,d,f),o.push(d,c,f)}return{vertices:u,normals:s,uvs:a,indices:o}},Uv=({segments:e=3}={})=>{const n=[],t=[],r=[],i=[],l=1/e;for(let o=0;o<e+1;o++)for(let u=0;u<o+1;u++)t.push((2*u-o)*l/2,o*l,0),r.push(0,0,1),i.push(l*u,1-l*o);for(let o=1;o<e+1;o++)for(let u=0;u<o;u++){const s=o*(o+1)/2+u,a=o*(o-1)/2+u;if(n.push(a,s,s+1),o<e){const h=(o+1)*(o+2)/2+u;n.push(h+1,s,s+1)}}return{vertices:t,normals:r,uvs:i,indices:n}},$v=`#version 300 es
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
`,Bv=`#version 300 es
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
`,vl={vertex:()=>jv(),edge:e=>Lv({segments:e}),face:e=>Uv({segments:e})};function Qv(e){return{meshes:["vertex","edge","face"],...hl(e,"vertex",Gv,Wv,vl.vertex,1e4,e.dimensions,e.showVertices),...hl(e,"edge",Bv,$v,vl.edge,1e4,e.dimensions,e.showEdges,["position","target"]),...hl(e,"face",Vv,Hv,vl.face,1e4,e.dimensions,e.showFaces,["position","target","center"]),changeArity(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].changeArity(n)},updateGeometries(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].updateGeometry(n)},recompilePrograms(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].recompileProgram(n)},updateUniforms(n,t=!1){for(let r=0;r<this.meshes.length;r++){const i=this.meshes[r],l=this[i];if(!t){l.uniforms.curvature.update(n.curvature),l.uniforms.matrix.update(wi(n.matrix));for(let o=4;o<=n.dimensions;o++)l.uniforms[`fov${o}`].update(1/jc(He*n[`fov${o}`]*.5/180));i==="vertex"?l.uniforms.thickness.update(n.vertexThickness):i==="edge"?l.uniforms.thickness.update(n.edgeThickness):(l.uniforms.segments.update(n.curve?n.segments:1),l.uniforms.opacity.update(Fn[n.ambiance].opacity))}l.uniforms.viewProjection.update(n.camera.viewProjection),l.uniforms.zoom.update(-n.camera.position[2]),Fn[n.ambiance].lighting&&l.uniforms.eye.update(n.camera.eye)}},plotType(n,t,r){const i=this[t],l=n[t],{dimensions:o}=n,u=Fn[n.ambiance];let s=r?r[0]:0,a=r?r[1]:l.length,h=s,g=a;if(t==="face"){let m=0;for(let y=0;y<s;y++){const E=l[y].vertices.length;m+=E<3?0:E===3?1:E}h=m;for(let y=s;y<a;y++){const E=l[y].vertices.length;m+=E<3?0:E===3?1:E}g=m}i.instances<g&&i.extendAttributes(g),i.count=g;const v=o>4?9:o;let p=h;for(let m=s;m<a;m++){let y=[];const E=l[m];if(t==="vertex")y.push({...E,position:E.vertex,type:t});else if(t==="edge")y.push({...E,position:n.vertex[E.start].vertex,target:n.vertex[E.end].vertex,type:t});else{if(E.vertices.length<3)continue;if(E.vertices.length===3)y.push({...E,position:n.vertex[E.vertices[0]].vertex,target:n.vertex[E.vertices[1]].vertex,center:n.vertex[E.vertices[2]].vertex});else{const d=new Array(E.vertices.length);for(let f=0;f<E.vertices.length;f++)d[f]=n.vertex[E.vertices[f]].vertex;const c=new Array(o).fill(0);for(let f=0;f<d.length;f++){const x=d[f];for(let w=0;w<o;w++)c[w]+=x[w]}for(let f=0;f<o;f++)c[f]/=d.length;for(let f=0;f<d.length;f++){const x={...E,position:d[f],target:d[(f+1)%d.length],center:c};E.word.length%2===(n.curvature>0?0:1)&&([x.position,x.target]=[x.target,x.position]),y.push(x)}}}for(let d=0;d<y.length;d++){const c=y[d];for(let x=0;x<o;x++)for(let w=0;w<i.varying.length;w++){const I=i.varying[w];i.attributes[I].data[p*v+x]=c[I][x]}const f=u.color(c,t,n);i.attributes.color.data[p*3+0]=f[0],i.attributes.color.data[p*3+1]=f[1],i.attributes.color.data[p*3+2]=f[2],p++}for(let d=0;d<i.varying.length;d++){const c=i.varying[d];i.attributes[c].update(h,g)}i.attributes.color.update(h,g)}},plot(n,t){for(let r=0;r<this.meshes.length;r++){const i=this.meshes[r];this[i].visible&&this.plotType(n,i,t[i])}}}}const Jv=`#version 300 es
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
`,Kv=`#version 300 es

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
`;function rp(e){return{...Ot(e,"oit",ep,bv,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),...Ot(e,"down",Zv,qv,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...Ot(e,"up",tp,np,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...Ot(e,"afterImage",Kv,Jv,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),...Ot(e,"bloom",Yv,Xv,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function ip(e){const{gl:n}=e,t=Fn[e.ambiance],r=e.msaa?Be(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),ml(e,e.rb.base,n.RGBA8,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,e.rb.base),ml(e,e.rb.depth,n.DEPTH_COMPONENT24,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),e.fb.oit&&(n.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(n.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(n.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&n.deleteRenderbuffer(e.rb.depth_copy),t.opacity<1&&t.transparency==="oit"&&(e.fb.oit=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),r?(e.rb.depth_copy=n.createRenderbuffer(),ml(e,e.rb.depth_copy,n.DEPTH_COMPONENT24),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth_copy)):n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),e.textures.oitAccum=nn(e,n.RGBA16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=nn(e,n.R16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT1,n.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(n.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(n.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(n.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(n.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),t.afterImage&&(e.fb.afterImage=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=nn(e,n.RGBA8),e.textures.afterImageScreen=nn(e,n.RGBA8),e.textures.afterImageOutScreen=nn(e,n.RGBA8)),e.fb.kawase&&(n.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(n.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let i=0;i<e.textures.kawase.length;i++)n.deleteTexture(e.textures.kawase[i].texture);e.textures.kawase=null}if(e.textures.blur&&(n.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(n.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),t.glow){e.fb.kawase=n.createFramebuffer(),e.fb.bloom=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let i=0;i<t.glow.steps;i++)e.textures.kawase[i]=nn(e,n.RGBA8,t.glow.pow**-i);e.textures.blur=nn(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.blur.texture,0),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=nn(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.bloom.texture,0)}}const $c=window.location.search.includes("stats");let Kr;$c&&(Kr=new Dv,Kr.dom.id="stats",document.body.appendChild(Kr.dom));const jp=e=>{const n=document.createElement("canvas");n.id="webgl2",document.body.appendChild(n);const t=n.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:t},!t){console.error("Unable to initialize WebGL. Your browser may not support it.");return}t.getExtension("EXT_color_buffer_float"),t.enable(t.DEPTH_TEST);const r={zoom:1,fov:He/3,position:[0,0,-e.zoom],update(){const a=t.canvas.clientWidth/t.canvas.clientHeight;this.zoom=Be(t.canvas.clientWidth/t.canvas.clientHeight,1),this.eye=[0,0,this.position[2]/this.zoom];const h=Cv(this.eye,[0,0,0],[0,1,0]),g=Rv(this.fov,a,.001,1e3);this.viewProjection=wi(Gr(g,h))}};r.update();const i=rp(e),l=Qv(e),o={base:t.createRenderbuffer(),depth:t.createRenderbuffer()},u={base:t.createFramebuffer()};return{...e,gl:t,camera:r,meshes:l,passes:i,rb:o,fb:u,textures:{}}},Lp=(e,n)=>{e.meshes[n].visible=e[n==="vertex"?"showVertices":n==="edge"?"showEdges":"showFaces"]},Up=(e,n=null)=>{if(e.currentOrder===0||n===null&&e.ranges.length===0||n!==null&&n>=e.ranges.length)return;const t=n!==null?e.ranges[n]:{vertex:[e.ranges[0].vertex[0],e.ranges[e.currentOrder-1].vertex[1]],edge:[e.ranges[0].edge[0],e.ranges[e.currentOrder-1].edge[1]],face:[e.ranges[0].face[0],e.ranges[e.currentOrder-1].face[1]]};e.meshes.plot(e,t),document.title=`Coxeter Explorer - ${e.spaceType==="finite"?"S":e.spaceType==="affine"?"E":"H"}^${e.dimensions} ${e.currentOrder<e.order?`(${e.currentOrder}/${e.order})…`:""}- ${e.vertex.length} vertices, ${e.edge.length} edges, ${e.face.length} faces`},$p=e=>{e.camera.fov=He*e.fov3/180,e.camera.update(),e.meshes.updateUniforms(e,!0)},Bp=e=>{const n=Fn[e.ambiance];e.gl.clearColor(...n.background),n.glow&&(e.passes.bloom.uniforms.exposure.update(n.glow.exposure),e.passes.bloom.uniforms.strength.update(n.glow.strength),e.passes.down.uniforms.offset.update(n.glow.offset.down),e.passes.up.uniforms.offset.update(n.glow.offset.up)),n.afterImage&&e.passes.afterImage.uniforms.strength.update(n.afterImage)},lp=e=>{$c&&Kr.update();const{gl:n}=e,t=e.msaa?Be(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,r=Fn[e.ambiance];up(n.canvas,e.subsampling)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),ip(e),e.camera.update(),e.meshes.updateUniforms(e,!0)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),e.meshes.vertex.render(e),e.meshes.edge.render(e),e.meshes.face.visible&&r.opacity<1&&r.transparency==="oit"?(t&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):(r.opacity<1&&r.transparency==="blend"&&(n.enable(n.BLEND),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA)),e.meshes.face.render(e));const i=r.afterImage?e.fb.afterImage:r.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,i),r.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let l=e.textures.bloom;if(r.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),r.glow?l=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),r.glow){n.disable(n.BLEND),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let o=0;o<r.glow.steps;o++){const u=o===0?l:e.textures.kawase[o-1],s=e.textures.kawase[o];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let o=r.glow.steps-1;o>=0;o--){const u=e.textures.kawase[o],s=o===0?e.textures.blur:e.textures.kawase[o-1];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,l.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=lp;const op={globals:xv,project:wv,helpers:Ev,complex:Sv,ease:yv,lighting:Nv},pl=(e,n,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e),en=(e,n,t)=>{let r,i,l;if(n===0)r=i=l=t;else{const o=t<.5?t*(1+n):t+n-t*n,u=2*t-o;r=pl(u,o,e+1/3),i=pl(u,o,e),l=pl(u,o,e-1/3)}return[r,i,l]},up=(e,n)=>{n=n||1,n=Math.max(0,n);const t=e.clientWidth*n|0,r=e.clientHeight*n|0;return e.width!==t||e.height!==r?(e.width=t,e.height=r,!0):!1},sp=(e,n)=>e.replace(/\bvecN\b/g,`vec${n}`).replace(/\bmatN\b/g,`mat${n}`),gs=(e,n,t)=>{var o;const r=Fn[e.ambiance];let i="";r.lighting&&(i+=`#define LIGHTING ${pp.indexOf(r.lighting)}
`);const l=e.easing==="auto"?(o=e.spaceType)!=null&&o.startsWith("hyperbolic")&&e.projection4!=="inverted"?"quintic":"linear":e.easing;i+=`#define DIMENSIONS ${e.dimensions}
`;for(let u=3;u<=e.dimensions;u++)i+=`#define PROJECTION${u} ${dp.indexOf(e[`projection${u}`])-1}
`;return i+=`#define EASING ${vp.indexOf(l)}
`,r.opacity<1&&r.transparency==="oit"&&(i+=`#define OIT
`),Object.entries({...op,config:i}).forEach(([u,s])=>{n=n.replace(`#include ${u}`,s),t=t.replace(`#include ${u}`,s)}),[n,t].map(u=>sp(u,e.dimensions))},_r=(e,n,t,r,i)=>{if(e.gl.shaderSource(i,r),e.gl.compileShader(i),!e.gl.getShaderParameter(i,e.gl.COMPILE_STATUS)){const o=e.gl.getShaderInfoLog(i);return console.error(`An error occurred compiling the ${n}->${t} shader: ${o}`,{shaderSource:r}),o}},ys=(e,n,t)=>{const{gl:r}=e;if(r.linkProgram(t),!r.getProgramParameter(t,r.LINK_STATUS)){const l=r.getProgramInfoLog(t);return console.error(`Unable to initialize the ${n} shader program: ${l}`),l}},Bc=(e,n,t,r,i=[])=>{const{gl:l}=e,o=l.createProgram(),u=l.createShader(l.VERTEX_SHADER),s=l.createShader(l.FRAGMENT_SHADER);if(_r(e,n,"vertex",t,u)||_r(e,n,"fragment",r,s)||(l.attachShader(o,u),l.attachShader(o,s),ys(e,n,o)))return;const a={program:o,vertexShader:u,fragmentShader:s,uniformsDef:i,recompile(h,g,v,p=null){_r(h,n,"vertex",g,this.vertexShader)||_r(h,n,"fragment",v,this.fragmentShader)||ys(h,n,this.program)||(p&&(this.uniformsDef=p),this.bindUniforms(h))},bindUniforms(h){this.uniforms={},this.uniformsDef.forEach(({name:g,type:v,value:p})=>{this.uniforms[g]=ap(h,this.program,g,v),this.uniforms[g].update(p)})}};return a.bindUniforms(e),a},Pt=(e,n,t,r,i,l=null,o=null)=>{const{gl:u}=e;o=o||u.FLOAT;const s=o===u.FLOAT?4:2,a={name:t,mesh:n,indices:Hc,instances:l,data:i,size:r,type:o,update(h=null,g=null){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer),h===null&&g===null?u.bufferData(u.ARRAY_BUFFER,this.data,u.STATIC_DRAW):u.bufferSubData(u.ARRAY_BUFFER,h*this.size*s,this.data,h*this.size,(g-h)*this.size)},extend(h,g,v=!1){if(u.bindVertexArray(this.mesh.vao),this.size=h,this.location=u.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const p=h>4?3:1;this.name==="target"&&(this.location=h>4?6:4),this.name==="center"&&(this.location=h>4?9:5);for(let m=0;m<p;m++)u.enableVertexAttribArray(this.location+m);for(let m=0;m<p;m++)u.vertexAttribPointer(this.location+m,h/p,this.type,!1,h*s,h/p*m*s);if(this.instances)for(let m=0;m<p;m++)u.vertexAttribDivisor(this.location+m,this.instances);g&&(v&&g.length>=this.data.length&&g.set(this.data),this.data=g),this.update()},get(){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const h=new Float32Array(this.data.length);return u.getBufferSubData(u.ARRAY_BUFFER,0,h),h}};return a.buffer=u.createBuffer(),a.extend(r),a},Hc=(e,n,t)=>{const{gl:r}=e;r.bindVertexArray(n);const i=r.createBuffer();return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i),r.bufferData(r.ELEMENT_ARRAY_BUFFER,t,r.STATIC_DRAW),{buffer:i,vao:n,indices:t,count:t.length,update(l){r.bindVertexArray(this.vao),this.indices=l,this.count=l.length,r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,this.buffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,l,r.STATIC_DRAW)}}},ap=(e,n,t,r)=>{const{gl:i}=e;return{program:n,update(o){if(i.useProgram(this.program),r.startsWith("m")){const u=parseInt(r.slice(1,2));if(u>4)for(let s=0;s<u;s++){const a=i.getUniformLocation(n,`${t}.c${s+1}.v`);if(a!==null&&i.uniform4fv(a,o[s][0]),u-4===1){const h=i.getUniformLocation(n,`${t}.c${s+1}.u`);h!==null&&i.uniform1f(h,o[s][1])}else if(u-4>1){const h=i.getUniformLocation(n,`${t}.c${s+1}.u`);if(h!==null&&i[`uniform${Be(u-4,4)}fv`](h,o[s][1]),u-8===1){const g=i.getUniformLocation(n,`${t}.c${s+1}.t`);g!==null&&i.uniform1f(g,o[s][2])}}}else{const s=i.getUniformLocation(n,t);s!==null&&i[`uniformMatrix${r.slice(1)}`](s,!1,o)}}else{const u=i.getUniformLocation(n,t);u!==null&&i[`uniform${r}`](u,o)}},get(){i.useProgram(this.program);const o=i.getUniformLocation(n,t);if(o!==null)return i.getUniform(this.program,o)}}},nn=(e,n,t=null)=>{const{gl:r}=e,i=t?~~(t*r.drawingBufferWidth):r.drawingBufferWidth,l=t?~~(t*r.drawingBufferHeight):r.drawingBufferHeight,o=r.createTexture();return r.bindTexture(r.TEXTURE_2D,o),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texStorage2D(r.TEXTURE_2D,1,n,i,l),{texture:o,width:i,height:l}},Ot=(e,n,t,r,i=[])=>{const l={name:n,vertex:t,fragment:r,...Bc(e,n,t,r,i),recompileProgram(o){this.recompile(o,this.vertex,this.fragment,i)}};return{[n]:l}},hl=(e,n,t,r,i,l,o,u=!0,s=["position"])=>{const{gl:a}=e,h=i(e.curve?e.segments:1),g=p=>[{name:"viewProjection",type:"m4fv",value:wi(wn(4))},{name:"matrix",type:`m${p.dimensions}fv`,value:wi(p.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"curvature",type:"1f",value:0},{name:"zoom",type:"1f",value:1},...["vertex","edge"].includes(n)?[{name:"thickness",type:"1f",value:0}]:[{name:"segments",type:"1f",value:p.curve?p.segments:1},{name:"opacity",type:"1f",value:0}],...Fv(4,p.dimensions+1,1,!0).map(m=>({name:`fov${m}`,type:"1f",value:p[`fov${m}`]}))];o=o>4?9:o;const v={attributes:{},varying:s,vertex:t,type:n,fragment:r,...Bc(e,n,...gs(e,t,r),g(e)),recompileProgram(p){const[m,y]=gs(p,this.vertex,this.fragment);this.recompile(p,m,y,g(p))},changeArity(p){p=p>4?9:p,this.arity!==p&&(this.arity=p,s.forEach(m=>{this.attributes[m].extend(p,new Float32Array(this.instances*p),!1)}))},extendAttributes(p){this.instances=p,s.forEach(m=>{this.attributes[m].extend(this.arity,new Float32Array(p*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(p*3),!0)},updateGeometry(p){const m=i(p.curve?p.segments:1);this.indices.update(new Uint16Array(m.indices)),this.attributes.vertex.extend(3,new Float32Array(m.vertices)),this.attributes.uv.extend(2,new Float32Array(m.uvs)),this.attributes.normal.extend(3,new Float32Array(m.normals))},render(p){!this.count||!this.visible||(a.useProgram(this.program),a.bindVertexArray(this.vao),a.drawElementsInstanced(a.TRIANGLES,this.indices.count,a.UNSIGNED_SHORT,0,this.count))}};return v.visible=u,v.vao=a.createVertexArray(),v.indices=Hc(e,v.vao,new Uint16Array(h.indices)),v.attributes.vertex=Pt(e,v,"vertex",3,new Float32Array(h.vertices)),v.attributes.uv=Pt(e,v,"uv",2,new Float32Array(h.uvs)),v.attributes.normal=Pt(e,v,"normal",3,new Float32Array(h.normals)),v.attributes.color=Pt(e,v,"color",3,new Float32Array(l*3),1),s.forEach(p=>{v.attributes[p]=Pt(e,v,p,o,new Float32Array(l*o),1)}),v.arity=o,v.instances=l,v.count=0,{[n]:v}},ml=(e,n,t,r)=>{const{gl:i}=e;i.bindRenderbuffer(i.RENDERBUFFER,n),r?i.renderbufferStorageMultisample(i.RENDERBUFFER,r,t,i.drawingBufferWidth,i.drawingBufferHeight):i.renderbufferStorage(i.RENDERBUFFER,t,i.drawingBufferWidth,i.drawingBufferHeight),i.bindRenderbuffer(i.RENDERBUFFER,null)},cp=document.createElement("canvas"),xs=cp.getContext("webgl2"),fp=xs.getParameter(xs.MAX_SAMPLES),dp=["perspective","stereographic","orthographic","klein","inverted","joukowsky","upperhalf","band","cross","heart","teardrop","square","ring"],vp=["auto","linear","sine","quadratic","cubic","quartic","quintic","exponential","circular","back","elastic","bounce","inverse_sine","inverse_quadratic","inverse_cubic","inverse_quartic","inverse_quintic"],Hp=["","knuthbendix","toddcoxeter","fundamental"],pp=["lambert","phong","blinn-phong","toon"],Fn={neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},exposure:.75,lighting:!1,opacity:.05,transparency:"blend",color:({word:e})=>en(e.length*.17%1,.5,.6)},synthwave:{background:[...en(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},exposure:.75,lighting:!1,opacity:.12,afterImage:.7,transparency:"blend",color:({word:e})=>en((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],glow:!1,lighting:"phong",opacity:.4,transparency:"blend",color:({word:e})=>en(e.length*.03%1,1,.8)},oit:{background:[1,1,1,1],glow:!1,lighting:"blinn-phong",opacity:.3,transparency:"oit",color:({word:e})=>en(e.length*.03%1,1,.8)},reflection:{background:[1,1,1,1],glow:!1,lighting:"toon",opacity:.6,transparency:"blend",color:({word:e},n,{dimensions:t,showFaces:r})=>{const i=e.length?Mv(e[e.length-1])/t:0;return en(i%1,1,n==="face"?.6:r?.05:.8)}},pure:{background:[0,0,0,1],glow:!1,lighting:"lambert",opacity:1,color:({word:e})=>en(e.length*.03%1,.75,.7)},plain:{extended:!0,background:[1,1,1,1],glow:!1,lighting:!1,opacity:1,color:({word:e})=>en(e.length*.06%1,.7,.5)},plainblack:{extended:!0,background:[1,1,1,1],glow:!1,lighting:!1,opacity:1,color:({word:e},n)=>n==="face"?new Array(3).fill(1-Ov(.9,e.length+1)):[0,0,0]}},Es={dimensions:4,coxeter:[[1,5,2,2],[5,1,3,2],[2,3,1,4],[2,2,4,1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],matrix:[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],mirrors:[1,0,0,0],extended:!1,order:10,curve:!0,segments:32,easing:"auto",showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,showFaces:!1,grouper:"",controls:"space",ambiance:"neon",centered:null,zoom:1.5,fov3:90,projection3:"perspective",fov4:90,projection4:"stereographic",msaa:window.devicePixelRatio<=1,msaaSamples:fp,subsampling:window.devicePixelRatio},hp=e=>{if(e.coxeter.length!==e.dimensions||e.coxeter.some(n=>n.length!==e.dimensions)){const n=e.coxeter;e.coxeter=new Array(e.dimensions).fill().map((t,r)=>new Array(e.dimensions).fill().map((i,l)=>r===l?1:r===l+1||r+1===l?3:2));for(let t=0;t<Be(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.coxeter[t][r]=n[t][r],e.coxeter[r][t]=n[t][r]}if(e.mirrors.length!==e.dimensions){const n=e.mirrors;e.mirrors=new Array(e.dimensions).fill(0);for(let t=0;t<Be(n.length,e.dimensions);t++)e.mirrors[t]=n[t]}if(e.stellation.length!==e.dimensions||e.stellation.some(n=>n.length!==e.dimensions)){const n=e.stellation;e.stellation=new Array(e.dimensions).fill().map(()=>new Array(e.dimensions).fill(1));for(let t=0;t<Be(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.stellation[t][r]=n[t][r],e.stellation[r][t]=n[r][t]}return e},Vp=(e,n=[])=>{const t={...e},r=[];Object.entries(t).forEach(([i,l])=>{typeof Es[i]=="number"||i.startsWith("fov")?(l===""||isNaN(l))&&(delete t[i],r.push(i)):Array.isArray(Es[i])&&(Array.isArray(l[0])?l.find(o=>o.find(u=>l===""||i!=="coxeter"&&isNaN(u)))&&(delete t[i],r.push(i)):l.find(o=>l===""||isNaN(o)&&!(i==="mirrors"&&kv.includes(o)))&&(delete t[i],r.push(i)))}),r.includes("coxeter")||hp(t),(t.matrix.length!==t.dimensions||t.matrix.some(i=>i.length!==t.dimensions))&&(t.matrix=wn(t.dimensions)),n.includes("dimensions")&&t.dimensions>=4&&(t.projection3="native");for(let i=4;i<=9;i++)i<=t.dimensions&&!t[`fov${i}`]&&!r.includes(`fov${i}`)&&(t[`fov${i}`]=90),i<=t.dimensions&&(!t[`projection${i}`]||n.includes("dimensions"))&&!r.includes(`projection${i}`)&&(t[`projection${i}`]=i===t.dimensions?t[`projection${i+1}`]||"stereographic":"perspective"),i>t.dimensions&&t[`fov${i}`]&&delete t[`fov${i}`],i>t.dimensions&&t[`projection${i}`]&&delete t[`projection${i}`];return{params:t,badParams:r}},mp=(e,n,t,r,i)=>{let l=!0,o=0,u=1;if(i&&["∞","inf","Infinity"].includes(e))e="∞",o=0;else if(i&&e.endsWith("i")){const s=e.slice(0,-1);o=-(s===""?1:parseInt(s)),e=`${o===-1?"":-o}i`}else if(e.includes("/")){const[s,a]=e.split("/");o=s===""?"":parseInt(s),u=a===""?"":parseInt(a),u===1?e=`${o}`:e=`${o}/${u}`}else o=e===""?"":parseInt(e);return l=!(i&&o===1||o===""||isNaN(o)||o<n||o>t||r%1===0&&o%r!==0||isNaN(u)||u<n||u>t||r%1===0&&u%r!==0),{valid:l,raw:e,value:o,fraction:u}};function gp({name:e,label:n,min:t=0,max:r=1/0,step:i=1,value:l,coxeter:o,fraction:u,fractionName:s,toggler:a,togglerName:h,onChange:g,...v}){o&&(t=-1/0);const p=re.useCallback(()=>l<0&&o?`${l===-1?"":-l}i`:l===0&&o?"∞":s&&u>1?`${l}/${u}`:`${l}`,[o,u,s,l]),[m,y]=re.useState(p);re.useEffect(()=>{y(p())},[o,p,u,s,l]);const[E,d]=re.useState(!0),c=re.useCallback(k=>{const N=mp(k,t,r,i,o);y(N.raw),d(N.valid),N.valid&&(g(e,N.value),s&&g(s,N.fraction))},[o,s,r,t,e,g,i]),f=re.useCallback(()=>{if(!E){c(o?"3":`${t}`);return}if(o){if(m==="2"){c("∞");return}if(m==="∞"){c("i");return}if(m.endsWith("i")){const k=m.slice(0,-1);let N=(k===""?1:parseInt(k))+1;c(`${N}i`);return}}if(m!==`${t}`)if(m.includes("/"))c((parseInt(m).split("/")[0]-i).toString());else{const k=parseInt(m)-i;i>0&&i<1?c(k.toFixed(i.toString().split(".")[1].length)):c(k.toString())}},[o,t,m,i,c,E]),x=re.useCallback(()=>{if(!E){c(`${t}`);return}if(o){if(m==="∞"){c("2");return}if(m==="i"){c("∞");return}if(m.endsWith("i")){const k=m.slice(0,-1);let N=parseInt(k)-1;N===1&&(N=""),c(`${N}i`);return}}if(m!==`${r}`)if(m.includes("/"))c((parseInt(m).split("/")[0]+i).toString());else{const k=parseInt(m)+i;i>0&&i<1?c(k.toFixed(i.toString().split(".")[1].length)):c(k.toString())}},[o,r,t,m,i,c,E]),w=k=>{const N=k.target.value;c(N)},I=k=>{g(k.target.name,k.target.checked)};return C.jsxs("label",{className:`number ${E?"valid":"invalid"}`,children:[n&&C.jsx("span",{className:"number-label",children:n}),h&&C.jsx("input",{type:"checkbox",name:h,checked:a,onChange:I}),(!h||a)&&C.jsxs("div",{className:"number-control",children:[C.jsx("input",{type:"text",name:e,value:m,style:{width:`${m.length+.25}ch`},onChange:w,...v}),C.jsx("button",{className:"plusminus minus",onClick:f,tabIndex:-1,children:"−"}),C.jsx("button",{className:"plusminus plus",onClick:x,tabIndex:-1,children:"+"})]})]})}function yp({i:e,j:n,value:t,stellation:r,onChange:i}){return C.jsx("div",{className:"coxeter-value",children:C.jsx(gp,{name:`coxeter-${e}-${n}`,value:t,onChange:i,coxeter:!0,fraction:r,fractionName:`stellation-${e}-${n}`})})}function ws(){return C.jsx("svg",{className:"coxeter-link",viewBox:"0 0 24 16",children:C.jsx("path",{d:"M 0 8 L 24 8",strokeWidth:"1",stroke:"currentColor"})})}const Xr=6,Vn=14,Yr={active:C.jsxs(C.Fragment,{children:[C.jsx("circle",{cx:"16",cy:"16",r:Vn}),C.jsx("circle",{cx:"16",cy:"16",r:Xr,fill:"currentColor"})]}),inactive:C.jsx(C.Fragment,{children:C.jsx("circle",{cx:"16",cy:"16",r:Xr,fill:"currentColor"})}),snub:C.jsx(C.Fragment,{children:C.jsx("circle",{cx:"16",cy:"16",r:Vn})}),holosnub:C.jsxs(C.Fragment,{children:[C.jsx("circle",{cx:"16",cy:"16",r:Vn}),C.jsx("circle",{cx:"16",cy:"16",r:Xr})]}),custom:C.jsxs(C.Fragment,{children:[C.jsx("circle",{cx:"16",cy:"16",r:Vn}),C.jsx("path",{d:"M 10 14 L 10 18 L 22 18 L 22 14"})]}),activeVoid:C.jsxs(C.Fragment,{children:[C.jsx("circle",{cx:"16",cy:"16",r:Vn}),C.jsx("path",{d:"M 6 6 L 26 26"}),C.jsx("path",{d:"M 6 26 L 26 6"})]}),void:C.jsxs(C.Fragment,{children:[C.jsx("path",{d:"M 10 10 L 22 22"}),C.jsx("path",{d:"M 10 22 L 22 10"})]})};function xp({index:e,value:n,extended:t,onChange:r}){const i=Dc(n),l=()=>{const u=Object.keys(Yr),s=u.indexOf(i),a=t?u[(s+1)%u.length]:i==="active"?"inactive":"active",h=ms[a];r(e,h)},o=u=>{const s=Object.keys(Yr),a=s.indexOf(i),h=s[(s.length+a+Lc(u.deltaY))%s.length],g=ms[h];r(e,g)};return C.jsxs("div",{className:"coxeter-node",title:i,children:[C.jsx("svg",{className:`coxeter-graphic ${i}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:l,onWheel:o,children:Yr[i]}),i==="custom"&&C.jsx("input",{type:"number",value:n,step:".01",style:{width:`${n.toString().length+1.5}ch`},onChange:u=>r(e,u.target.value)})]})}function Wp({dimensions:e,coxeter:n,mirrors:t,stellation:r,extended:i,onChange:l}){const[o,u]=re.useState(1),s=re.useRef(),a=re.useCallback(()=>{if(l("extended",!i),i){const v=n.map(p=>p.slice());for(let p=0;p<e;p++)for(let m=0;m<p-1;m++)v[p][m]=2,v[m][p]=2;l("coxeter",v)}},[i,l,n,e]),h=re.useCallback((v,p)=>{if(v.startsWith("coxeter")){const[m,y]=v.split("-").slice(1).map(d=>+d),E=n.map(d=>d.slice());E[m][y]=p,E[y][m]=p,l("coxeter",E)}if(v.startsWith("stellation")){const[m,y]=v.split("-").slice(1).map(d=>+d),E=r.map(d=>d.slice());E[m][y]=p,E[y][m]=p,l("stellation",E)}},[n,l,r]),g=re.useCallback((v,p)=>{const m=t.slice();m[v]=p,l("mirrors",m)},[t,l]);return re.useEffect(()=>{const v=()=>{if(!s.current)return;const p=Be(1,(window.innerWidth-125)/s.current.offsetWidth);u(p)};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[e]),C.jsxs("aside",{className:"coxeters",style:o===1?void 0:{transform:`scale(${o})`},ref:s,children:[C.jsx("div",{className:"coxeter-matrix",children:[...Array(e).keys()].map(v=>C.jsxs(re.Fragment,{children:[v>0&&C.jsx("div",{className:"coxeter-column",children:[...Array(v).keys()].map(p=>(i||v===p+1)&&C.jsx(yp,{i:v,j:p,value:n[v][p],stellation:r[v][p],onChange:h},`${v}x${p}`))}),v>0&&C.jsx(ws,{}),C.jsx(xp,{index:v,value:t[v],extended:i,onChange:g}),v<e-1&&C.jsx(ws,{})]},v))}),C.jsxs("div",{className:"coxeter-toggles",children:[e>2&&C.jsx("button",{className:"button",onClick:()=>l("dimensions",e-1),title:"Decrease dimensions",children:"−"}),e<9&&C.jsx("button",{className:"button",onClick:()=>l("dimensions",e+1),title:"Increase dimensions",children:"+"}),C.jsx("button",{className:"button",onClick:a,title:"extended mode",children:i?"▲":"▼"})]})]})}const tn=32,Ss=18;function Gp({coxeter:e,mirrors:n,stellation:t}){const r=e.length,i=n.map((y,E)=>{const d=Dc(y);return{n:E,type:d,i:E,j:0,r:d==="inactive"?Xr:Vn}});for(let y=0;y<r;y++)for(let E=r-1;E>y+1;E--)if(e[y][E]>2){const d=y===0,c=E===r-1,f=!d&&!c,x=E-y+1,w=Qr(x-1)/2,I=2*Math.PI/x,k={i:i[y].i+w,j:i[y].j+(f?-w*Le((2+x)/4*I):0)};for(let N=y;N<=E;N++){let A=N-y+(d?1:c?x/2:(2+x)/4);i[N].i=k.i+w*cn(I*A),i[N].j=k.j+w*Le(I*A)}for(let N=E+1;N<r;N++)i[N].i-=E-y,i[N].i+=2*w;y=E-1;break}const l=[];for(let y=0;y<r;y++)for(let E=0;E<y;E++)if(e[y][E]>2){const d=e[y][E],c=t[y][E];if(d===2)return null;let f=`${d===1/0?"∞":d}`;c>1&&(f+=`/${c}`),f==="3"&&(f=""),l.push({source:i[y],target:i[E],value:f})}const o=i.map(({i:y})=>y),u=i.map(({j:y})=>y),s=Be(...o),a=zt(...o),h=Be(...u),g=zt(...u);let v=0,p=0;for(let y=0;y<i.length;y++){const E=i[y];E.x=(E.i-s)*2*tn,E.y=(E.j-h)*2*tn,v=zt(v,E.x),p=zt(p,E.y)}const m=y=>y+zt(y-1,0);return C.jsxs("svg",{className:"coxeter-diagram",viewBox:`${-tn/2} ${-tn/2} ${v+tn} ${p+tn}`,width:`${m(a-s+1)}em`,height:`${m(g-h+1)+.5}em`,strokeWidth:"2",fill:"transparent",stroke:"currentColor",children:[i.map(({n:y,type:E,x:d,y:c,r:f})=>C.jsx("g",{className:"coxeter-diagram-node",transform:`translate(${d-tn/2} ${c-tn/2})`,title:E,children:Yr[E]},y)),l.map(({source:y,target:E,value:d})=>{const c={x:y.x,y:y.y},f={x:E.x,y:E.y},x={},w=Pv(f.y-c.y,f.x-c.x);return x.x=(c.x+f.x)/2+(Ss+(d.length-2)*5)*cn(w-He/2),x.y=(c.y+f.y)/2+Ss*Le(w-He/2),c.x+=(y.r+1)*cn(w),c.y+=(y.r+1)*Le(w),f.x-=(E.r+1)*cn(w),f.y-=(E.r+1)*Le(w),C.jsxs("g",{className:"coxeter-diagram-link",children:[C.jsx("path",{d:`M ${c.x} ${c.y} L ${f.x} ${f.y}`,strokeWidth:"1",stroke:"currentColor"}),C.jsx("text",{style:{fontSize:"1.25rem"},stroke:"none",fill:"currentColor",textAnchor:"middle",dominantBaseline:"middle",x:x.x,y:x.y,children:d})]},`${y.n}-${E.n}`)})]})}export{Hp as A,vp as B,Gp as C,Fn as D,Fv as E,dp as F,Wp as G,jp as H,Vp as I,zp as J,Ap as K,Fp as L,au as M,gp as N,hp as O,He as P,cn as a,st as b,kp as c,Lc as d,Sp as e,wn as f,Dp as g,wi as h,Np as i,Tv as j,wp as k,Gr as l,Ep as m,lp as n,Mp as o,Bp as p,ip as q,re as r,Qr as s,Lp as t,$p as u,Up as v,zt as w,C as x,Es as y,Be as z};
