(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var qc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rs={exports:{}},Ni={},Cs={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),bc=Symbol.for("react.portal"),ef=Symbol.for("react.fragment"),nf=Symbol.for("react.strict_mode"),tf=Symbol.for("react.profiler"),rf=Symbol.for("react.provider"),of=Symbol.for("react.context"),lf=Symbol.for("react.forward_ref"),uf=Symbol.for("react.suspense"),sf=Symbol.for("react.memo"),af=Symbol.for("react.lazy"),cu=Symbol.iterator;function cf(e){return e===null||typeof e!="object"?null:(e=cu&&e[cu]||e["@@iterator"],typeof e=="function"?e:null)}var Ps={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zs=Object.assign,Os={};function yt(e,n,t){this.props=e,this.context=n,this.refs=Os,this.updater=t||Ps}yt.prototype.isReactComponent={};yt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};yt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _s(){}_s.prototype=yt.prototype;function dl(e,n,t){this.props=e,this.context=n,this.refs=Os,this.updater=t||Ps}var vl=dl.prototype=new _s;vl.constructor=dl;zs(vl,yt.prototype);vl.isPureReactComponent=!0;var fu=Array.isArray,js=Object.prototype.hasOwnProperty,pl={current:null},Ms={key:!0,ref:!0,__self:!0,__source:!0};function As(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)js.call(n,r)&&!Ms.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var s=Array(u),a=0;a<u;a++)s[a]=arguments[a+2];i.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:fr,type:e,key:o,ref:l,props:i,_owner:pl.current}}function ff(e,n){return{$$typeof:fr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function hl(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function df(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var du=/\/+/g;function Hi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?df(""+e.key):n.toString(36)}function Dr(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case fr:case bc:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Hi(l,0):r,fu(i)?(t="",e!=null&&(t=e.replace(du,"$&/")+"/"),Dr(i,n,t,"",function(a){return a})):i!=null&&(hl(i)&&(i=ff(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(du,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",fu(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+Hi(o,u);l+=Dr(o,n,t,s,i)}else if(s=cf(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+Hi(o,u++),l+=Dr(o,n,t,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function yr(e,n,t){if(e==null)return e;var r=[],i=0;return Dr(e,r,"","",function(o){return n.call(t,o,i++)}),r}function vf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},Lr={transition:null},pf={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:Lr,ReactCurrentOwner:pl};_.Children={map:yr,forEach:function(e,n,t){yr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return yr(e,function(){n++}),n},toArray:function(e){return yr(e,function(n){return n})||[]},only:function(e){if(!hl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=yt;_.Fragment=ef;_.Profiler=tf;_.PureComponent=dl;_.StrictMode=nf;_.Suspense=uf;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pf;_.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zs({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=pl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)js.call(n,s)&&!Ms.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var a=0;a<s;a++)u[a]=arguments[a+2];r.children=u}return{$$typeof:fr,type:e.type,key:i,ref:o,props:r,_owner:l}};_.createContext=function(e){return e={$$typeof:of,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rf,_context:e},e.Consumer=e};_.createElement=As;_.createFactory=function(e){var n=As.bind(null,e);return n.type=e,n};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:lf,render:e}};_.isValidElement=hl;_.lazy=function(e){return{$$typeof:af,_payload:{_status:-1,_result:e},_init:vf}};_.memo=function(e,n){return{$$typeof:sf,type:e,compare:n===void 0?null:n}};_.startTransition=function(e){var n=Lr.transition;Lr.transition={};try{e()}finally{Lr.transition=n}};_.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};_.useCallback=function(e,n){return ae.current.useCallback(e,n)};_.useContext=function(e){return ae.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};_.useEffect=function(e,n){return ae.current.useEffect(e,n)};_.useId=function(){return ae.current.useId()};_.useImperativeHandle=function(e,n,t){return ae.current.useImperativeHandle(e,n,t)};_.useInsertionEffect=function(e,n){return ae.current.useInsertionEffect(e,n)};_.useLayoutEffect=function(e,n){return ae.current.useLayoutEffect(e,n)};_.useMemo=function(e,n){return ae.current.useMemo(e,n)};_.useReducer=function(e,n,t){return ae.current.useReducer(e,n,t)};_.useRef=function(e){return ae.current.useRef(e)};_.useState=function(e){return ae.current.useState(e)};_.useSyncExternalStore=function(e,n,t){return ae.current.useSyncExternalStore(e,n,t)};_.useTransition=function(){return ae.current.useTransition()};_.version="18.2.0";Cs.exports=_;var X=Cs.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf=X,mf=Symbol.for("react.element"),gf=Symbol.for("react.fragment"),yf=Object.prototype.hasOwnProperty,xf=hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ef={key:!0,ref:!0,__self:!0,__source:!0};function Fs(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)yf.call(n,r)&&!Ef.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:mf,type:e,key:o,ref:l,props:i,_owner:xf.current}}Ni.Fragment=gf;Ni.jsx=Fs;Ni.jsxs=Fs;Rs.exports=Ni;var T=Rs.exports,vu={},Ds={exports:{}},Ee={},Ls={exports:{}},Us={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,P){var z=C.length;C.push(P);e:for(;0<z;){var G=z-1>>>1,q=C[G];if(0<i(q,P))C[G]=P,C[z]=q,z=G;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],z=C.pop();if(z!==P){C[0]=z;e:for(var G=0,q=C.length,mr=q>>>1;G<mr;){var Rn=2*(G+1)-1,Bi=C[Rn],Cn=Rn+1,gr=C[Cn];if(0>i(Bi,z))Cn<q&&0>i(gr,Bi)?(C[G]=gr,C[Cn]=z,G=Cn):(C[G]=Bi,C[Rn]=z,G=Rn);else if(Cn<q&&0>i(gr,z))C[G]=gr,C[Cn]=z,G=Cn;else break e}}return P}function i(C,P){var z=C.sortIndex-P.sortIndex;return z!==0?z:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var s=[],a=[],d=1,c=null,f=3,p=!1,m=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var P=t(a);P!==null;){if(P.callback===null)r(a);else if(P.startTime<=C)r(a),P.sortIndex=P.expirationTime,n(s,P);else break;P=t(a)}}function x(C){if(y=!1,g(C),!m)if(t(s)!==null)m=!0,Ui(w);else{var P=t(a);P!==null&&$i(x,P.startTime-C)}}function w(C,P){m=!1,y&&(y=!1,h(k),k=-1),p=!0;var z=f;try{for(g(P),c=t(s);c!==null&&(!(c.expirationTime>P)||C&&!Ce());){var G=c.callback;if(typeof G=="function"){c.callback=null,f=c.priorityLevel;var q=G(c.expirationTime<=P);P=e.unstable_now(),typeof q=="function"?c.callback=q:c===t(s)&&r(s),g(P)}else r(s);c=t(s)}if(c!==null)var mr=!0;else{var Rn=t(a);Rn!==null&&$i(x,Rn.startTime-P),mr=!1}return mr}finally{c=null,f=z,p=!1}}var I=!1,N=null,k=-1,A=5,O=-1;function Ce(){return!(e.unstable_now()-O<A)}function wt(){if(N!==null){var C=e.unstable_now();O=C;var P=!0;try{P=N(!0,C)}finally{P?St():(I=!1,N=null)}}else I=!1}var St;if(typeof v=="function")St=function(){v(wt)};else if(typeof MessageChannel<"u"){var au=new MessageChannel,Yc=au.port2;au.port1.onmessage=wt,St=function(){Yc.postMessage(null)}}else St=function(){E(wt,0)};function Ui(C){N=C,I||(I=!0,St())}function $i(C,P){k=E(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,Ui(w))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(C){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var z=f;f=P;try{return C()}finally{f=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var z=f;f=C;try{return P()}finally{f=z}},e.unstable_scheduleCallback=function(C,P,z){var G=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?G+z:G):z=G,C){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=z+q,C={id:d++,callback:P,priorityLevel:C,startTime:z,expirationTime:q,sortIndex:-1},z>G?(C.sortIndex=z,n(a,C),t(s)===null&&C===t(a)&&(y?(h(k),k=-1):y=!0,$i(x,z-G))):(C.sortIndex=q,n(s,C),m||p||(m=!0,Ui(w))),C},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(C){var P=f;return function(){var z=f;f=P;try{return C.apply(this,arguments)}finally{f=z}}}})(Us);Ls.exports=Us;var wf=Ls.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $s=X,xe=wf;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bs=new Set,Jt={};function Vn(e,n){ft(e,n),ft(e+"Capture",n)}function ft(e,n){for(Jt[e]=n,e=0;e<n.length;e++)Bs.add(n[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xo=Object.prototype.hasOwnProperty,Sf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pu={},hu={};function Nf(e){return xo.call(hu,e)?!0:xo.call(pu,e)?!1:Sf.test(e)?hu[e]=!0:(pu[e]=!0,!1)}function kf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function If(e,n,t,r){if(n===null||typeof n>"u"||kf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var ml=/[\-:]([a-z])/g;function gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ml,gl);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ml,gl);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ml,gl);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function yl(e,n,t,r){var i=te.hasOwnProperty(n)?te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(If(n,t,i,r)&&(t=null),r||i===null?Nf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var tn=$s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xr=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),xl=Symbol.for("react.strict_mode"),Eo=Symbol.for("react.profiler"),Hs=Symbol.for("react.provider"),Vs=Symbol.for("react.context"),El=Symbol.for("react.forward_ref"),wo=Symbol.for("react.suspense"),So=Symbol.for("react.suspense_list"),wl=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),Ws=Symbol.for("react.offscreen"),mu=Symbol.iterator;function Nt(e){return e===null||typeof e!="object"?null:(e=mu&&e[mu]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Vi;function jt(e){if(Vi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Vi=n&&n[1]||""}return`
`+Vi+e}var Wi=!1;function Gi(e,n){if(!e||Wi)return"";Wi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var i=a.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=u);break}}}finally{Wi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?jt(e):""}function Tf(e){switch(e.tag){case 5:return jt(e.type);case 16:return jt("Lazy");case 13:return jt("Suspense");case 19:return jt("SuspenseList");case 0:case 2:case 15:return e=Gi(e.type,!1),e;case 11:return e=Gi(e.type.render,!1),e;case 1:return e=Gi(e.type,!0),e;default:return""}}function No(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Qn:return"Portal";case Eo:return"Profiler";case xl:return"StrictMode";case wo:return"Suspense";case So:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vs:return(e.displayName||"Context")+".Consumer";case Hs:return(e._context.displayName||"Context")+".Provider";case El:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wl:return n=e.displayName||null,n!==null?n:No(e.type)||"Memo";case sn:n=e._payload,e=e._init;try{return No(e(n))}catch{}}return null}function Rf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return No(n);case 8:return n===xl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Cf(e){var n=Gs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Er(e){e._valueTracker||(e._valueTracker=Cf(e))}function Ks(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Gs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ko(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function gu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Sn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Qs(e,n){n=n.checked,n!=null&&yl(e,"checked",n,!1)}function Io(e,n){Qs(e,n);var t=Sn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?To(e,n.type,t):n.hasOwnProperty("defaultValue")&&To(e,n.type,Sn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function yu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function To(e,n,t){(n!=="number"||Zr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Mt=Array.isArray;function ot(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Sn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ro(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(Mt(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Sn(t)}}function Js(e,n){var t=Sn(n.value),r=Sn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Eu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Xs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Co(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Xs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,Ys=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Xt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pf=["Webkit","ms","Moz","O"];Object.keys(Ut).forEach(function(e){Pf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ut[n]=Ut[e]})});function qs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ut.hasOwnProperty(e)&&Ut[e]?(""+n).trim():n+"px"}function Zs(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=qs(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var zf=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Po(e,n){if(n){if(zf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function zo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oo=null;function Sl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _o=null,lt=null,ut=null;function wu(e){if(e=pr(e)){if(typeof _o!="function")throw Error(S(280));var n=e.stateNode;n&&(n=Ci(n),_o(e.stateNode,e.type,n))}}function bs(e){lt?ut?ut.push(e):ut=[e]:lt=e}function ea(){if(lt){var e=lt,n=ut;if(ut=lt=null,wu(e),n)for(e=0;e<n.length;e++)wu(n[e])}}function na(e,n){return e(n)}function ta(){}var Ki=!1;function ra(e,n,t){if(Ki)return e(n,t);Ki=!0;try{return na(e,n,t)}finally{Ki=!1,(lt!==null||ut!==null)&&(ta(),ea())}}function Yt(e,n){var t=e.stateNode;if(t===null)return null;var r=Ci(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var jo=!1;if(qe)try{var kt={};Object.defineProperty(kt,"passive",{get:function(){jo=!0}}),window.addEventListener("test",kt,kt),window.removeEventListener("test",kt,kt)}catch{jo=!1}function Of(e,n,t,r,i,o,l,u,s){var a=Array.prototype.slice.call(arguments,3);try{n.apply(t,a)}catch(d){this.onError(d)}}var $t=!1,br=null,ei=!1,Mo=null,_f={onError:function(e){$t=!0,br=e}};function jf(e,n,t,r,i,o,l,u,s){$t=!1,br=null,Of.apply(_f,arguments)}function Mf(e,n,t,r,i,o,l,u,s){if(jf.apply(this,arguments),$t){if($t){var a=br;$t=!1,br=null}else throw Error(S(198));ei||(ei=!0,Mo=a)}}function Wn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ia(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Su(e){if(Wn(e)!==e)throw Error(S(188))}function Af(e){var n=e.alternate;if(!n){if(n=Wn(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Su(i),e;if(o===r)return Su(i),n;o=o.sibling}throw Error(S(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===t){l=!0,t=i,r=o;break}if(u===r){l=!0,r=i,t=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===t){l=!0,t=o,r=i;break}if(u===r){l=!0,r=o,t=i;break}u=u.sibling}if(!l)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function oa(e){return e=Af(e),e!==null?la(e):null}function la(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=la(e);if(n!==null)return n;e=e.sibling}return null}var ua=xe.unstable_scheduleCallback,Nu=xe.unstable_cancelCallback,Ff=xe.unstable_shouldYield,Df=xe.unstable_requestPaint,K=xe.unstable_now,Lf=xe.unstable_getCurrentPriorityLevel,Nl=xe.unstable_ImmediatePriority,sa=xe.unstable_UserBlockingPriority,ni=xe.unstable_NormalPriority,Uf=xe.unstable_LowPriority,aa=xe.unstable_IdlePriority,ki=null,Be=null;function $f(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:Vf,Bf=Math.log,Hf=Math.LN2;function Vf(e){return e>>>=0,e===0?32:31-(Bf(e)/Hf|0)|0}var Sr=64,Nr=4194304;function At(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ti(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var u=l&~i;u!==0?r=At(u):(o&=l,o!==0&&(r=At(o)))}else l=t&~i,l!==0?r=At(l):o!==0&&(r=At(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-je(n),i=1<<t,r|=e[t],n&=~i;return r}function Wf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-je(o),u=1<<l,s=i[l];s===-1?(!(u&t)||u&r)&&(i[l]=Wf(u,n)):s<=n&&(e.expiredLanes|=u),o&=~u}}function Ao(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ca(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function Qi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function dr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-je(n),e[n]=t}function Kf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-je(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function kl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-je(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var M=0;function fa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var da,Il,va,pa,ha,Fo=!1,kr=[],pn=null,hn=null,mn=null,qt=new Map,Zt=new Map,cn=[],Qf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ku(e,n){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":qt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zt.delete(n.pointerId)}}function It(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=pr(n),n!==null&&Il(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Jf(e,n,t,r,i){switch(n){case"focusin":return pn=It(pn,e,n,t,r,i),!0;case"dragenter":return hn=It(hn,e,n,t,r,i),!0;case"mouseover":return mn=It(mn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return qt.set(o,It(qt.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Zt.set(o,It(Zt.get(o)||null,e,n,t,r,i)),!0}return!1}function ma(e){var n=_n(e.target);if(n!==null){var t=Wn(n);if(t!==null){if(n=t.tag,n===13){if(n=ia(t),n!==null){e.blockedOn=n,ha(e.priority,function(){va(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Do(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Oo=r,t.target.dispatchEvent(r),Oo=null}else return n=pr(t),n!==null&&Il(n),e.blockedOn=t,!1;n.shift()}return!0}function Iu(e,n,t){Ur(e)&&t.delete(n)}function Xf(){Fo=!1,pn!==null&&Ur(pn)&&(pn=null),hn!==null&&Ur(hn)&&(hn=null),mn!==null&&Ur(mn)&&(mn=null),qt.forEach(Iu),Zt.forEach(Iu)}function Tt(e,n){e.blockedOn===n&&(e.blockedOn=null,Fo||(Fo=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,Xf)))}function bt(e){function n(i){return Tt(i,e)}if(0<kr.length){Tt(kr[0],e);for(var t=1;t<kr.length;t++){var r=kr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(pn!==null&&Tt(pn,e),hn!==null&&Tt(hn,e),mn!==null&&Tt(mn,e),qt.forEach(n),Zt.forEach(n),t=0;t<cn.length;t++)r=cn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<cn.length&&(t=cn[0],t.blockedOn===null);)ma(t),t.blockedOn===null&&cn.shift()}var st=tn.ReactCurrentBatchConfig,ri=!0;function Yf(e,n,t,r){var i=M,o=st.transition;st.transition=null;try{M=1,Tl(e,n,t,r)}finally{M=i,st.transition=o}}function qf(e,n,t,r){var i=M,o=st.transition;st.transition=null;try{M=4,Tl(e,n,t,r)}finally{M=i,st.transition=o}}function Tl(e,n,t,r){if(ri){var i=Do(e,n,t,r);if(i===null)ro(e,n,r,ii,t),ku(e,r);else if(Jf(i,e,n,t,r))r.stopPropagation();else if(ku(e,r),n&4&&-1<Qf.indexOf(e)){for(;i!==null;){var o=pr(i);if(o!==null&&da(o),o=Do(e,n,t,r),o===null&&ro(e,n,r,ii,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else ro(e,n,r,null,t)}}var ii=null;function Do(e,n,t,r){if(ii=null,e=Sl(r),e=_n(e),e!==null)if(n=Wn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ia(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ii=e,null}function ga(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lf()){case Nl:return 1;case sa:return 4;case ni:case Uf:return 16;case aa:return 536870912;default:return 16}default:return 16}}var dn=null,Rl=null,$r=null;function ya(){if($r)return $r;var e,n=Rl,t=n.length,r,i="value"in dn?dn.value:dn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return $r=i.slice(e,1<r?1-r:void 0)}function Br(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function Tu(){return!1}function we(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ir:Tu,this.isPropagationStopped=Tu,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),n}var xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cl=we(xt),vr=V({},xt,{view:0,detail:0}),Zf=we(vr),Ji,Xi,Rt,Ii=V({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rt&&(Rt&&e.type==="mousemove"?(Ji=e.screenX-Rt.screenX,Xi=e.screenY-Rt.screenY):Xi=Ji=0,Rt=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:Xi}}),Ru=we(Ii),bf=V({},Ii,{dataTransfer:0}),ed=we(bf),nd=V({},vr,{relatedTarget:0}),Yi=we(nd),td=V({},xt,{animationName:0,elapsedTime:0,pseudoElement:0}),rd=we(td),id=V({},xt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),od=we(id),ld=V({},xt,{data:0}),Cu=we(ld),ud={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ad[e])?!!n[e]:!1}function Pl(){return cd}var fd=V({},vr,{key:function(e){if(e.key){var n=ud[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pl,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dd=we(fd),vd=V({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=we(vd),pd=V({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pl}),hd=we(pd),md=V({},xt,{propertyName:0,elapsedTime:0,pseudoElement:0}),gd=we(md),yd=V({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xd=we(yd),Ed=[9,13,27,32],zl=qe&&"CompositionEvent"in window,Bt=null;qe&&"documentMode"in document&&(Bt=document.documentMode);var wd=qe&&"TextEvent"in window&&!Bt,xa=qe&&(!zl||Bt&&8<Bt&&11>=Bt),zu=String.fromCharCode(32),Ou=!1;function Ea(e,n){switch(e){case"keyup":return Ed.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function Sd(e,n){switch(e){case"compositionend":return wa(n);case"keypress":return n.which!==32?null:(Ou=!0,zu);case"textInput":return e=n.data,e===zu&&Ou?null:e;default:return null}}function Nd(e,n){if(Xn)return e==="compositionend"||!zl&&Ea(e,n)?(e=ya(),$r=Rl=dn=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xa&&n.locale!=="ko"?null:n.data;default:return null}}var kd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!kd[e.type]:n==="textarea"}function Sa(e,n,t,r){bs(r),n=oi(n,"onChange"),0<n.length&&(t=new Cl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ht=null,er=null;function Id(e){ja(e,0)}function Ti(e){var n=Zn(e);if(Ks(n))return e}function Td(e,n){if(e==="change")return n}var Na=!1;if(qe){var qi;if(qe){var Zi="oninput"in document;if(!Zi){var ju=document.createElement("div");ju.setAttribute("oninput","return;"),Zi=typeof ju.oninput=="function"}qi=Zi}else qi=!1;Na=qi&&(!document.documentMode||9<document.documentMode)}function Mu(){Ht&&(Ht.detachEvent("onpropertychange",ka),er=Ht=null)}function ka(e){if(e.propertyName==="value"&&Ti(er)){var n=[];Sa(n,er,e,Sl(e)),ra(Id,n)}}function Rd(e,n,t){e==="focusin"?(Mu(),Ht=n,er=t,Ht.attachEvent("onpropertychange",ka)):e==="focusout"&&Mu()}function Cd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ti(er)}function Pd(e,n){if(e==="click")return Ti(n)}function zd(e,n){if(e==="input"||e==="change")return Ti(n)}function Od(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:Od;function nr(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!xo.call(n,i)||!Fe(e[i],n[i]))return!1}return!0}function Au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fu(e,n){var t=Au(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Au(t)}}function Ia(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ia(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ta(){for(var e=window,n=Zr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Zr(e.document)}return n}function Ol(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function _d(e){var n=Ta(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ia(t.ownerDocument.documentElement,t)){if(r!==null&&Ol(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Fu(t,o);var l=Fu(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jd=qe&&"documentMode"in document&&11>=document.documentMode,Yn=null,Lo=null,Vt=null,Uo=!1;function Du(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Uo||Yn==null||Yn!==Zr(r)||(r=Yn,"selectionStart"in r&&Ol(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vt&&nr(Vt,r)||(Vt=r,r=oi(Lo,"onSelect"),0<r.length&&(n=new Cl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Yn)))}function Tr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var qn={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionend:Tr("Transition","TransitionEnd")},bi={},Ra={};qe&&(Ra=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function Ri(e){if(bi[e])return bi[e];if(!qn[e])return e;var n=qn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ra)return bi[e]=n[t];return e}var Ca=Ri("animationend"),Pa=Ri("animationiteration"),za=Ri("animationstart"),Oa=Ri("transitionend"),_a=new Map,Lu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,n){_a.set(e,n),Vn(n,[e])}for(var eo=0;eo<Lu.length;eo++){var no=Lu[eo],Md=no.toLowerCase(),Ad=no[0].toUpperCase()+no.slice(1);kn(Md,"on"+Ad)}kn(Ca,"onAnimationEnd");kn(Pa,"onAnimationIteration");kn(za,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(Oa,"onTransitionEnd");ft("onMouseEnter",["mouseout","mouseover"]);ft("onMouseLeave",["mouseout","mouseover"]);ft("onPointerEnter",["pointerout","pointerover"]);ft("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ft="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ft));function Uu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Mf(r,n,void 0,e),e.currentTarget=null}function ja(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var u=r[l],s=u.instance,a=u.currentTarget;if(u=u.listener,s!==o&&i.isPropagationStopped())break e;Uu(i,u,a),o=s}else for(l=0;l<r.length;l++){if(u=r[l],s=u.instance,a=u.currentTarget,u=u.listener,s!==o&&i.isPropagationStopped())break e;Uu(i,u,a),o=s}}}if(ei)throw e=Mo,ei=!1,Mo=null,e}function D(e,n){var t=n[Wo];t===void 0&&(t=n[Wo]=new Set);var r=e+"__bubble";t.has(r)||(Ma(n,e,2,!1),t.add(r))}function to(e,n,t){var r=0;n&&(r|=4),Ma(t,e,r,n)}var Rr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Rr]){e[Rr]=!0,Bs.forEach(function(t){t!=="selectionchange"&&(Fd.has(t)||to(t,!1,e),to(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Rr]||(n[Rr]=!0,to("selectionchange",!1,n))}}function Ma(e,n,t,r){switch(ga(n)){case 1:var i=Yf;break;case 4:i=qf;break;default:i=Tl}t=i.bind(null,n,t,e),i=void 0,!jo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function ro(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;u!==null;){if(l=_n(u),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}u=u.parentNode}}r=r.return}ra(function(){var a=o,d=Sl(t),c=[];e:{var f=_a.get(e);if(f!==void 0){var p=Cl,m=e;switch(e){case"keypress":if(Br(t)===0)break e;case"keydown":case"keyup":p=dd;break;case"focusin":m="focus",p=Yi;break;case"focusout":m="blur",p=Yi;break;case"beforeblur":case"afterblur":p=Yi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ed;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=hd;break;case Ca:case Pa:case za:p=rd;break;case Oa:p=gd;break;case"scroll":p=Zf;break;case"wheel":p=xd;break;case"copy":case"cut":case"paste":p=od;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Pu}var y=(n&4)!==0,E=!y&&e==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var v=a,g;v!==null;){g=v;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=Yt(v,h),x!=null&&y.push(rr(v,x,g)))),E)break;v=v.return}0<y.length&&(f=new p(f,m,null,t,d),c.push({event:f,listeners:y}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&t!==Oo&&(m=t.relatedTarget||t.fromElement)&&(_n(m)||m[Ze]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=t.relatedTarget||t.toElement,p=a,m=m?_n(m):null,m!==null&&(E=Wn(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=a),p!==m)){if(y=Ru,x="onMouseLeave",h="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(y=Pu,x="onPointerLeave",h="onPointerEnter",v="pointer"),E=p==null?f:Zn(p),g=m==null?f:Zn(m),f=new y(x,v+"leave",p,t,d),f.target=E,f.relatedTarget=g,x=null,_n(d)===a&&(y=new y(h,v+"enter",m,t,d),y.target=g,y.relatedTarget=E,x=y),E=x,p&&m)n:{for(y=p,h=m,v=0,g=y;g;g=Gn(g))v++;for(g=0,x=h;x;x=Gn(x))g++;for(;0<v-g;)y=Gn(y),v--;for(;0<g-v;)h=Gn(h),g--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break n;y=Gn(y),h=Gn(h)}y=null}else y=null;p!==null&&$u(c,f,p,y,!1),m!==null&&E!==null&&$u(c,E,m,y,!0)}}e:{if(f=a?Zn(a):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=Td;else if(_u(f))if(Na)w=zd;else{w=Cd;var I=Rd}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=Pd);if(w&&(w=w(e,a))){Sa(c,w,t,d);break e}I&&I(e,f,a),e==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&To(f,"number",f.value)}switch(I=a?Zn(a):window,e){case"focusin":(_u(I)||I.contentEditable==="true")&&(Yn=I,Lo=a,Vt=null);break;case"focusout":Vt=Lo=Yn=null;break;case"mousedown":Uo=!0;break;case"contextmenu":case"mouseup":case"dragend":Uo=!1,Du(c,t,d);break;case"selectionchange":if(jd)break;case"keydown":case"keyup":Du(c,t,d)}var N;if(zl)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Xn?Ea(e,t)&&(k="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(k="onCompositionStart");k&&(xa&&t.locale!=="ko"&&(Xn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Xn&&(N=ya()):(dn=d,Rl="value"in dn?dn.value:dn.textContent,Xn=!0)),I=oi(a,k),0<I.length&&(k=new Cu(k,e,null,t,d),c.push({event:k,listeners:I}),N?k.data=N:(N=wa(t),N!==null&&(k.data=N)))),(N=wd?Sd(e,t):Nd(e,t))&&(a=oi(a,"onBeforeInput"),0<a.length&&(d=new Cu("onBeforeInput","beforeinput",null,t,d),c.push({event:d,listeners:a}),d.data=N))}ja(c,n)})}function rr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function oi(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Yt(e,t),o!=null&&r.unshift(rr(e,o,i)),o=Yt(e,n),o!=null&&r.push(rr(e,o,i))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $u(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var u=t,s=u.alternate,a=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&a!==null&&(u=a,i?(s=Yt(t,o),s!=null&&l.unshift(rr(t,s,u))):i||(s=Yt(t,o),s!=null&&l.push(rr(t,s,u)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Dd=/\r\n?/g,Ld=/\u0000|\uFFFD/g;function Bu(e){return(typeof e=="string"?e:""+e).replace(Dd,`
`).replace(Ld,"")}function Cr(e,n,t){if(n=Bu(n),Bu(e)!==n&&t)throw Error(S(425))}function li(){}var $o=null,Bo=null;function Ho(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vo=typeof setTimeout=="function"?setTimeout:void 0,Ud=typeof clearTimeout=="function"?clearTimeout:void 0,Hu=typeof Promise=="function"?Promise:void 0,$d=typeof queueMicrotask=="function"?queueMicrotask:typeof Hu<"u"?function(e){return Hu.resolve(null).then(e).catch(Bd)}:Vo;function Bd(e){setTimeout(function(){throw e})}function io(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),bt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);bt(n)}function gn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Vu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Et=Math.random().toString(36).slice(2),Ue="__reactFiber$"+Et,ir="__reactProps$"+Et,Ze="__reactContainer$"+Et,Wo="__reactEvents$"+Et,Hd="__reactListeners$"+Et,Vd="__reactHandles$"+Et;function _n(e){var n=e[Ue];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ze]||t[Ue]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Vu(e);e!==null;){if(t=e[Ue])return t;e=Vu(e)}return n}e=t,t=e.parentNode}return null}function pr(e){return e=e[Ue]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ci(e){return e[ir]||null}var Go=[],bn=-1;function In(e){return{current:e}}function L(e){0>bn||(e.current=Go[bn],Go[bn]=null,bn--)}function F(e,n){bn++,Go[bn]=e.current,e.current=n}var Nn={},le=In(Nn),ve=In(!1),Ln=Nn;function dt(e,n){var t=e.type.contextTypes;if(!t)return Nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function pe(e){return e=e.childContextTypes,e!=null}function ui(){L(ve),L(le)}function Wu(e,n,t){if(le.current!==Nn)throw Error(S(168));F(le,n),F(ve,t)}function Aa(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(S(108,Rf(e)||"Unknown",i));return V({},t,r)}function si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,Ln=le.current,F(le,e),F(ve,ve.current),!0}function Gu(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=Aa(e,n,Ln),r.__reactInternalMemoizedMergedChildContext=e,L(ve),L(le),F(le,e)):L(ve),F(ve,t)}var Ke=null,Pi=!1,oo=!1;function Fa(e){Ke===null?Ke=[e]:Ke.push(e)}function Wd(e){Pi=!0,Fa(e)}function Tn(){if(!oo&&Ke!==null){oo=!0;var e=0,n=M;try{var t=Ke;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ke=null,Pi=!1}catch(i){throw Ke!==null&&(Ke=Ke.slice(e+1)),ua(Nl,Tn),i}finally{M=n,oo=!1}}return null}var et=[],nt=0,ai=null,ci=0,Se=[],Ne=0,Un=null,Qe=1,Je="";function Pn(e,n){et[nt++]=ci,et[nt++]=ai,ai=e,ci=n}function Da(e,n,t){Se[Ne++]=Qe,Se[Ne++]=Je,Se[Ne++]=Un,Un=e;var r=Qe;e=Je;var i=32-je(r)-1;r&=~(1<<i),t+=1;var o=32-je(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Qe=1<<32-je(n)+i|t<<i|r,Je=o+e}else Qe=1<<o|t<<i|r,Je=e}function _l(e){e.return!==null&&(Pn(e,1),Da(e,1,0))}function jl(e){for(;e===ai;)ai=et[--nt],et[nt]=null,ci=et[--nt],et[nt]=null;for(;e===Un;)Un=Se[--Ne],Se[Ne]=null,Je=Se[--Ne],Se[Ne]=null,Qe=Se[--Ne],Se[Ne]=null}var ye=null,ge=null,$=!1,_e=null;function La(e,n){var t=ke(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ku(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,ge=gn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Un!==null?{id:Qe,overflow:Je}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ke(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,ge=null,!0):!1;default:return!1}}function Ko(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qo(e){if($){var n=ge;if(n){var t=n;if(!Ku(e,n)){if(Ko(e))throw Error(S(418));n=gn(t.nextSibling);var r=ye;n&&Ku(e,n)?La(r,t):(e.flags=e.flags&-4097|2,$=!1,ye=e)}}else{if(Ko(e))throw Error(S(418));e.flags=e.flags&-4097|2,$=!1,ye=e}}}function Qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function Pr(e){if(e!==ye)return!1;if(!$)return Qu(e),$=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ho(e.type,e.memoizedProps)),n&&(n=ge)){if(Ko(e))throw Ua(),Error(S(418));for(;n;)La(e,n),n=gn(n.nextSibling)}if(Qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ge=gn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ge=null}}else ge=ye?gn(e.stateNode.nextSibling):null;return!0}function Ua(){for(var e=ge;e;)e=gn(e.nextSibling)}function vt(){ge=ye=null,$=!1}function Ml(e){_e===null?_e=[e]:_e.push(e)}var Gd=tn.ReactCurrentBatchConfig;function ze(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var fi=In(null),di=null,tt=null,Al=null;function Fl(){Al=tt=di=null}function Dl(e){var n=fi.current;L(fi),e._currentValue=n}function Jo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function at(e,n){di=e,Al=tt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function Te(e){var n=e._currentValue;if(Al!==e)if(e={context:e,memoizedValue:n,next:null},tt===null){if(di===null)throw Error(S(308));tt=e,di.dependencies={lanes:0,firstContext:e}}else tt=tt.next=e;return n}var jn=null;function Ll(e){jn===null?jn=[e]:jn.push(e)}function $a(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Ll(n)):(t.next=i.next,i.next=t),n.interleaved=t,be(e,r)}function be(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var an=!1;function Ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ba(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function yn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,be(e,t)}return i=r.interleaved,i===null?(n.next=n,Ll(r)):(n.next=i.next,i.next=n),r.interleaved=n,be(e,t)}function Hr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,kl(e,t)}}function Ju(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function vi(e,n,t,r){var i=e.updateQueue;an=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var s=u,a=s.next;s.next=null,l===null?o=a:l.next=a,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,u=d.lastBaseUpdate,u!==l&&(u===null?d.firstBaseUpdate=a:u.next=a,d.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;l=0,d=a=s=null,u=o;do{var f=u.lane,p=u.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var m=e,y=u;switch(f=n,p=t,y.tag){case 1:if(m=y.payload,typeof m=="function"){c=m.call(p,c,f);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(p,c,f):m,f==null)break e;c=V({},c,f);break e;case 2:an=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[u]:f.push(u))}else p={eventTime:p,lane:f,tag:u.tag,payload:u.payload,callback:u.callback,next:null},d===null?(a=d=p,s=c):d=d.next=p,l|=f;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;f=u,u=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(s=c),i.baseState=s,i.firstBaseUpdate=a,i.lastBaseUpdate=d,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Bn|=l,e.lanes=l,e.memoizedState=c}}function Xu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Ha=new $s.Component().refs;function Xo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var zi={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),i=En(e),o=Ye(r,i);o.payload=n,t!=null&&(o.callback=t),n=yn(e,o,i),n!==null&&(Me(n,e,i,r),Hr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),i=En(e),o=Ye(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=yn(e,o,i),n!==null&&(Me(n,e,i,r),Hr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=En(e),i=Ye(t,r);i.tag=2,n!=null&&(i.callback=n),n=yn(e,i,r),n!==null&&(Me(n,e,r,t),Hr(n,e,r))}};function Yu(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!nr(t,r)||!nr(i,o):!0}function Va(e,n,t){var r=!1,i=Nn,o=n.contextType;return typeof o=="object"&&o!==null?o=Te(o):(i=pe(n)?Ln:le.current,r=n.contextTypes,o=(r=r!=null)?dt(e,i):Nn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=zi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function qu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&zi.enqueueReplaceState(n,n.state,null)}function Yo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Ha,Ul(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Te(o):(o=pe(n)?Ln:le.current,i.context=dt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Xo(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&zi.enqueueReplaceState(i,i.state,null),vi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ct(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var u=i.refs;u===Ha&&(u=i.refs={}),l===null?delete u[o]:u[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function zr(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Zu(e){var n=e._init;return n(e._payload)}function Wa(e){function n(h,v){if(e){var g=h.deletions;g===null?(h.deletions=[v],h.flags|=16):g.push(v)}}function t(h,v){if(!e)return null;for(;v!==null;)n(h,v),v=v.sibling;return null}function r(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function i(h,v){return h=wn(h,v),h.index=0,h.sibling=null,h}function o(h,v,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<v?(h.flags|=2,v):g):(h.flags|=2,v)):(h.flags|=1048576,v)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function u(h,v,g,x){return v===null||v.tag!==6?(v=vo(g,h.mode,x),v.return=h,v):(v=i(v,g),v.return=h,v)}function s(h,v,g,x){var w=g.type;return w===Jn?d(h,v,g.props.children,x,g.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===sn&&Zu(w)===v.type)?(x=i(v,g.props),x.ref=Ct(h,v,g),x.return=h,x):(x=Jr(g.type,g.key,g.props,null,h.mode,x),x.ref=Ct(h,v,g),x.return=h,x)}function a(h,v,g,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=po(g,h.mode,x),v.return=h,v):(v=i(v,g.children||[]),v.return=h,v)}function d(h,v,g,x,w){return v===null||v.tag!==7?(v=Fn(g,h.mode,x,w),v.return=h,v):(v=i(v,g),v.return=h,v)}function c(h,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=vo(""+v,h.mode,g),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xr:return g=Jr(v.type,v.key,v.props,null,h.mode,g),g.ref=Ct(h,null,v),g.return=h,g;case Qn:return v=po(v,h.mode,g),v.return=h,v;case sn:var x=v._init;return c(h,x(v._payload),g)}if(Mt(v)||Nt(v))return v=Fn(v,h.mode,g,null),v.return=h,v;zr(h,v)}return null}function f(h,v,g,x){var w=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:u(h,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case xr:return g.key===w?s(h,v,g,x):null;case Qn:return g.key===w?a(h,v,g,x):null;case sn:return w=g._init,f(h,v,w(g._payload),x)}if(Mt(g)||Nt(g))return w!==null?null:d(h,v,g,x,null);zr(h,g)}return null}function p(h,v,g,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,u(v,h,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case xr:return h=h.get(x.key===null?g:x.key)||null,s(v,h,x,w);case Qn:return h=h.get(x.key===null?g:x.key)||null,a(v,h,x,w);case sn:var I=x._init;return p(h,v,g,I(x._payload),w)}if(Mt(x)||Nt(x))return h=h.get(g)||null,d(v,h,x,w,null);zr(v,x)}return null}function m(h,v,g,x){for(var w=null,I=null,N=v,k=v=0,A=null;N!==null&&k<g.length;k++){N.index>k?(A=N,N=null):A=N.sibling;var O=f(h,N,g[k],x);if(O===null){N===null&&(N=A);break}e&&N&&O.alternate===null&&n(h,N),v=o(O,v,k),I===null?w=O:I.sibling=O,I=O,N=A}if(k===g.length)return t(h,N),$&&Pn(h,k),w;if(N===null){for(;k<g.length;k++)N=c(h,g[k],x),N!==null&&(v=o(N,v,k),I===null?w=N:I.sibling=N,I=N);return $&&Pn(h,k),w}for(N=r(h,N);k<g.length;k++)A=p(N,h,k,g[k],x),A!==null&&(e&&A.alternate!==null&&N.delete(A.key===null?k:A.key),v=o(A,v,k),I===null?w=A:I.sibling=A,I=A);return e&&N.forEach(function(Ce){return n(h,Ce)}),$&&Pn(h,k),w}function y(h,v,g,x){var w=Nt(g);if(typeof w!="function")throw Error(S(150));if(g=w.call(g),g==null)throw Error(S(151));for(var I=w=null,N=v,k=v=0,A=null,O=g.next();N!==null&&!O.done;k++,O=g.next()){N.index>k?(A=N,N=null):A=N.sibling;var Ce=f(h,N,O.value,x);if(Ce===null){N===null&&(N=A);break}e&&N&&Ce.alternate===null&&n(h,N),v=o(Ce,v,k),I===null?w=Ce:I.sibling=Ce,I=Ce,N=A}if(O.done)return t(h,N),$&&Pn(h,k),w;if(N===null){for(;!O.done;k++,O=g.next())O=c(h,O.value,x),O!==null&&(v=o(O,v,k),I===null?w=O:I.sibling=O,I=O);return $&&Pn(h,k),w}for(N=r(h,N);!O.done;k++,O=g.next())O=p(N,h,k,O.value,x),O!==null&&(e&&O.alternate!==null&&N.delete(O.key===null?k:O.key),v=o(O,v,k),I===null?w=O:I.sibling=O,I=O);return e&&N.forEach(function(wt){return n(h,wt)}),$&&Pn(h,k),w}function E(h,v,g,x){if(typeof g=="object"&&g!==null&&g.type===Jn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case xr:e:{for(var w=g.key,I=v;I!==null;){if(I.key===w){if(w=g.type,w===Jn){if(I.tag===7){t(h,I.sibling),v=i(I,g.props.children),v.return=h,h=v;break e}}else if(I.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===sn&&Zu(w)===I.type){t(h,I.sibling),v=i(I,g.props),v.ref=Ct(h,I,g),v.return=h,h=v;break e}t(h,I);break}else n(h,I);I=I.sibling}g.type===Jn?(v=Fn(g.props.children,h.mode,x,g.key),v.return=h,h=v):(x=Jr(g.type,g.key,g.props,null,h.mode,x),x.ref=Ct(h,v,g),x.return=h,h=x)}return l(h);case Qn:e:{for(I=g.key;v!==null;){if(v.key===I)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){t(h,v.sibling),v=i(v,g.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else n(h,v);v=v.sibling}v=po(g,h.mode,x),v.return=h,h=v}return l(h);case sn:return I=g._init,E(h,v,I(g._payload),x)}if(Mt(g))return m(h,v,g,x);if(Nt(g))return y(h,v,g,x);zr(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(t(h,v.sibling),v=i(v,g),v.return=h,h=v):(t(h,v),v=vo(g,h.mode,x),v.return=h,h=v),l(h)):t(h,v)}return E}var pt=Wa(!0),Ga=Wa(!1),hr={},He=In(hr),or=In(hr),lr=In(hr);function Mn(e){if(e===hr)throw Error(S(174));return e}function $l(e,n){switch(F(lr,n),F(or,e),F(He,hr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Co(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Co(n,e)}L(He),F(He,n)}function ht(){L(He),L(or),L(lr)}function Ka(e){Mn(lr.current);var n=Mn(He.current),t=Co(n,e.type);n!==t&&(F(or,e),F(He,t))}function Bl(e){or.current===e&&(L(He),L(or))}var B=In(0);function pi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var lo=[];function Hl(){for(var e=0;e<lo.length;e++)lo[e]._workInProgressVersionPrimary=null;lo.length=0}var Vr=tn.ReactCurrentDispatcher,uo=tn.ReactCurrentBatchConfig,$n=0,H=null,J=null,Z=null,hi=!1,Wt=!1,ur=0,Kd=0;function re(){throw Error(S(321))}function Vl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function Wl(e,n,t,r,i,o){if($n=o,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Vr.current=e===null||e.memoizedState===null?Yd:qd,e=t(r,i),Wt){o=0;do{if(Wt=!1,ur=0,25<=o)throw Error(S(301));o+=1,Z=J=null,n.updateQueue=null,Vr.current=Zd,e=t(r,i)}while(Wt)}if(Vr.current=mi,n=J!==null&&J.next!==null,$n=0,Z=J=H=null,hi=!1,n)throw Error(S(300));return e}function Gl(){var e=ur!==0;return ur=0,e}function Le(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?H.memoizedState=Z=e:Z=Z.next=e,Z}function Re(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=Z===null?H.memoizedState:Z.next;if(n!==null)Z=n,J=e;else{if(e===null)throw Error(S(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},Z===null?H.memoizedState=Z=e:Z=Z.next=e}return Z}function sr(e,n){return typeof n=="function"?n(e):n}function so(e){var n=Re(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,s=null,a=o;do{var d=a.lane;if(($n&d)===d)s!==null&&(s=s.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var c={lane:d,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};s===null?(u=s=c,l=r):s=s.next=c,H.lanes|=d,Bn|=d}a=a.next}while(a!==null&&a!==o);s===null?l=r:s.next=u,Fe(r,n.memoizedState)||(de=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,Bn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ao(e){var n=Re(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Fe(o,n.memoizedState)||(de=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Qa(){}function Ja(e,n){var t=H,r=Re(),i=n(),o=!Fe(r.memoizedState,i);if(o&&(r.memoizedState=i,de=!0),r=r.queue,Kl(qa.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,ar(9,Ya.bind(null,t,r,i,n),void 0,null),b===null)throw Error(S(349));$n&30||Xa(t,n,i)}return i}function Xa(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ya(e,n,t,r){n.value=t,n.getSnapshot=r,Za(n)&&ba(e)}function qa(e,n,t){return t(function(){Za(n)&&ba(e)})}function Za(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function ba(e){var n=be(e,1);n!==null&&Me(n,e,1,-1)}function bu(e){var n=Le();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},n.queue=e,e=e.dispatch=Xd.bind(null,H,e),[n.memoizedState,e]}function ar(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ec(){return Re().memoizedState}function Wr(e,n,t,r){var i=Le();H.flags|=e,i.memoizedState=ar(1|n,t,void 0,r===void 0?null:r)}function Oi(e,n,t,r){var i=Re();r=r===void 0?null:r;var o=void 0;if(J!==null){var l=J.memoizedState;if(o=l.destroy,r!==null&&Vl(r,l.deps)){i.memoizedState=ar(n,t,o,r);return}}H.flags|=e,i.memoizedState=ar(1|n,t,o,r)}function es(e,n){return Wr(8390656,8,e,n)}function Kl(e,n){return Oi(2048,8,e,n)}function nc(e,n){return Oi(4,2,e,n)}function tc(e,n){return Oi(4,4,e,n)}function rc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ic(e,n,t){return t=t!=null?t.concat([e]):null,Oi(4,4,rc.bind(null,n,e),t)}function Ql(){}function oc(e,n){var t=Re();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Vl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function lc(e,n){var t=Re();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Vl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function uc(e,n,t){return $n&21?(Fe(t,n)||(t=ca(),H.lanes|=t,Bn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=t)}function Qd(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=uo.transition;uo.transition={};try{e(!1),n()}finally{M=t,uo.transition=r}}function sc(){return Re().memoizedState}function Jd(e,n,t){var r=En(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ac(e))cc(n,t);else if(t=$a(e,n,t,r),t!==null){var i=se();Me(t,e,r,i),fc(t,n,r)}}function Xd(e,n,t){var r=En(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ac(e))cc(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,u=o(l,t);if(i.hasEagerState=!0,i.eagerState=u,Fe(u,l)){var s=n.interleaved;s===null?(i.next=i,Ll(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=$a(e,n,i,r),t!==null&&(i=se(),Me(t,e,r,i),fc(t,n,r))}}function ac(e){var n=e.alternate;return e===H||n!==null&&n===H}function cc(e,n){Wt=hi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function fc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,kl(e,t)}}var mi={readContext:Te,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Yd={readContext:Te,useCallback:function(e,n){return Le().memoizedState=[e,n===void 0?null:n],e},useContext:Te,useEffect:es,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Wr(4194308,4,rc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Wr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Wr(4,2,e,n)},useMemo:function(e,n){var t=Le();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Le();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Jd.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=Le();return e={current:e},n.memoizedState=e},useState:bu,useDebugValue:Ql,useDeferredValue:function(e){return Le().memoizedState=e},useTransition:function(){var e=bu(!1),n=e[0];return e=Qd.bind(null,e[1]),Le().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,i=Le();if($){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),b===null)throw Error(S(349));$n&30||Xa(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,es(qa.bind(null,r,o,e),[e]),r.flags|=2048,ar(9,Ya.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Le(),n=b.identifierPrefix;if($){var t=Je,r=Qe;t=(r&~(1<<32-je(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=ur++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Kd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},qd={readContext:Te,useCallback:oc,useContext:Te,useEffect:Kl,useImperativeHandle:ic,useInsertionEffect:nc,useLayoutEffect:tc,useMemo:lc,useReducer:so,useRef:ec,useState:function(){return so(sr)},useDebugValue:Ql,useDeferredValue:function(e){var n=Re();return uc(n,J.memoizedState,e)},useTransition:function(){var e=so(sr)[0],n=Re().memoizedState;return[e,n]},useMutableSource:Qa,useSyncExternalStore:Ja,useId:sc,unstable_isNewReconciler:!1},Zd={readContext:Te,useCallback:oc,useContext:Te,useEffect:Kl,useImperativeHandle:ic,useInsertionEffect:nc,useLayoutEffect:tc,useMemo:lc,useReducer:ao,useRef:ec,useState:function(){return ao(sr)},useDebugValue:Ql,useDeferredValue:function(e){var n=Re();return J===null?n.memoizedState=e:uc(n,J.memoizedState,e)},useTransition:function(){var e=ao(sr)[0],n=Re().memoizedState;return[e,n]},useMutableSource:Qa,useSyncExternalStore:Ja,useId:sc,unstable_isNewReconciler:!1};function mt(e,n){try{var t="",r=n;do t+=Tf(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function co(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function qo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var bd=typeof WeakMap=="function"?WeakMap:Map;function dc(e,n,t){t=Ye(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){yi||(yi=!0,ul=r),qo(e,n)},t}function vc(e,n,t){t=Ye(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){qo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){qo(e,n),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function ns(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new bd;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=vv.bind(null,e,n,t),n.then(e,e))}function ts(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function rs(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ye(-1,1),n.tag=2,yn(t,n,1))),t.lanes|=1),e)}var ev=tn.ReactCurrentOwner,de=!1;function ue(e,n,t,r){n.child=e===null?Ga(n,null,t,r):pt(n,e.child,t,r)}function is(e,n,t,r,i){t=t.render;var o=n.ref;return at(n,i),r=Wl(e,n,t,r,o,i),t=Gl(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,en(e,n,i)):($&&t&&_l(n),n.flags|=1,ue(e,n,r,i),n.child)}function os(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!nu(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,pc(e,n,o,r,i)):(e=Jr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:nr,t(l,r)&&e.ref===n.ref)return en(e,n,i)}return n.flags|=1,e=wn(o,r),e.ref=n.ref,e.return=n,n.child=e}function pc(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(nr(o,r)&&e.ref===n.ref)if(de=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,en(e,n,i)}return Zo(e,n,t,r,i)}function hc(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(it,me),me|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(it,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,F(it,me),me|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,F(it,me),me|=r;return ue(e,n,i,t),n.child}function mc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Zo(e,n,t,r,i){var o=pe(t)?Ln:le.current;return o=dt(n,o),at(n,i),t=Wl(e,n,t,r,o,i),r=Gl(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,en(e,n,i)):($&&r&&_l(n),n.flags|=1,ue(e,n,t,i),n.child)}function ls(e,n,t,r,i){if(pe(t)){var o=!0;si(n)}else o=!1;if(at(n,i),n.stateNode===null)Gr(e,n),Va(n,t,r),Yo(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,u=n.memoizedProps;l.props=u;var s=l.context,a=t.contextType;typeof a=="object"&&a!==null?a=Te(a):(a=pe(t)?Ln:le.current,a=dt(n,a));var d=t.getDerivedStateFromProps,c=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||s!==a)&&qu(n,l,r,a),an=!1;var f=n.memoizedState;l.state=f,vi(n,r,l,i),s=n.memoizedState,u!==r||f!==s||ve.current||an?(typeof d=="function"&&(Xo(n,t,d,r),s=n.memoizedState),(u=an||Yu(n,t,u,r,f,s,a))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),l.props=r,l.state=s,l.context=a,r=u):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Ba(e,n),u=n.memoizedProps,a=n.type===n.elementType?u:ze(n.type,u),l.props=a,c=n.pendingProps,f=l.context,s=t.contextType,typeof s=="object"&&s!==null?s=Te(s):(s=pe(t)?Ln:le.current,s=dt(n,s));var p=t.getDerivedStateFromProps;(d=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==c||f!==s)&&qu(n,l,r,s),an=!1,f=n.memoizedState,l.state=f,vi(n,r,l,i);var m=n.memoizedState;u!==c||f!==m||ve.current||an?(typeof p=="function"&&(Xo(n,t,p,r),m=n.memoizedState),(a=an||Yu(n,t,a,r,f,m,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,m,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,m,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=m),l.props=r,l.state=m,l.context=s,r=a):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return bo(e,n,t,r,o,i)}function bo(e,n,t,r,i,o){mc(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&Gu(n,t,!1),en(e,n,o);r=n.stateNode,ev.current=n;var u=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=pt(n,e.child,null,o),n.child=pt(n,null,u,o)):ue(e,n,u,o),n.memoizedState=r.state,i&&Gu(n,t,!0),n.child}function gc(e){var n=e.stateNode;n.pendingContext?Wu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Wu(e,n.context,!1),$l(e,n.containerInfo)}function us(e,n,t,r,i){return vt(),Ml(i),n.flags|=256,ue(e,n,t,r),n.child}var el={dehydrated:null,treeContext:null,retryLane:0};function nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function yc(e,n,t){var r=n.pendingProps,i=B.current,o=!1,l=(n.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(B,i&1),e===null)return Qo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Mi(l,r,0,null),e=Fn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=nl(t),n.memoizedState=el,e):Jl(n,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return nv(e,n,l,r,u,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,u=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=wn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=wn(u,o):(o=Fn(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?nl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=el,r}return o=e.child,e=o.sibling,r=wn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Jl(e,n){return n=Mi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Or(e,n,t,r){return r!==null&&Ml(r),pt(n,e.child,null,t),e=Jl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function nv(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=co(Error(S(422))),Or(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Mi({mode:"visible",children:r.children},i,0,null),o=Fn(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&pt(n,e.child,null,l),n.child.memoizedState=nl(l),n.memoizedState=el,o);if(!(n.mode&1))return Or(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(S(419)),r=co(o,r,void 0),Or(e,n,l,r)}if(u=(l&e.childLanes)!==0,de||u){if(r=b,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,be(e,i),Me(r,e,i,-1))}return eu(),r=co(Error(S(421))),Or(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=pv.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,ge=gn(i.nextSibling),ye=n,$=!0,_e=null,e!==null&&(Se[Ne++]=Qe,Se[Ne++]=Je,Se[Ne++]=Un,Qe=e.id,Je=e.overflow,Un=n),n=Jl(n,r.children),n.flags|=4096,n)}function ss(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Jo(e.return,n,t)}function fo(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function xc(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(ue(e,n,r.children,t),r=B.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ss(e,t,n);else if(e.tag===19)ss(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(B,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&pi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),fo(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&pi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}fo(n,!0,t,null,o);break;case"together":fo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function en(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Bn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function tv(e,n,t){switch(n.tag){case 3:gc(n),vt();break;case 5:Ka(n);break;case 1:pe(n.type)&&si(n);break;case 4:$l(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;F(fi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(F(B,B.current&1),n.flags|=128,null):t&n.child.childLanes?yc(e,n,t):(F(B,B.current&1),e=en(e,n,t),e!==null?e.sibling:null);F(B,B.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return xc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(B,B.current),r)break;return null;case 22:case 23:return n.lanes=0,hc(e,n,t)}return en(e,n,t)}var Ec,tl,wc,Sc;Ec=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};tl=function(){};wc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Mn(He.current);var o=null;switch(t){case"input":i=ko(e,i),r=ko(e,r),o=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":i=Ro(e,i),r=Ro(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=li)}Po(t,r);var l;t=null;for(a in i)if(!r.hasOwnProperty(a)&&i.hasOwnProperty(a)&&i[a]!=null)if(a==="style"){var u=i[a];for(l in u)u.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Jt.hasOwnProperty(a)?o||(o=[]):(o=o||[]).push(a,null));for(a in r){var s=r[a];if(u=i!=null?i[a]:void 0,r.hasOwnProperty(a)&&s!==u&&(s!=null||u!=null))if(a==="style")if(u){for(l in u)!u.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in s)s.hasOwnProperty(l)&&u[l]!==s[l]&&(t||(t={}),t[l]=s[l])}else t||(o||(o=[]),o.push(a,t)),t=s;else a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(a,s)):a==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(a,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(Jt.hasOwnProperty(a)?(s!=null&&a==="onScroll"&&D("scroll",e),o||u===s||(o=[])):(o=o||[]).push(a,s))}t&&(o=o||[]).push("style",t);var a=o;(n.updateQueue=a)&&(n.flags|=4)}};Sc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Pt(e,n){if(!$)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function rv(e,n,t){var r=n.pendingProps;switch(jl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return pe(n.type)&&ui(),ie(n),null;case 3:return r=n.stateNode,ht(),L(ve),L(le),Hl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,_e!==null&&(cl(_e),_e=null))),tl(e,n),ie(n),null;case 5:Bl(n);var i=Mn(lr.current);if(t=n.type,e!==null&&n.stateNode!=null)wc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return ie(n),null}if(e=Mn(He.current),Pr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Ue]=n,r[ir]=o,e=(n.mode&1)!==0,t){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(i=0;i<Ft.length;i++)D(Ft[i],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":gu(r,o),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},D("invalid",r);break;case"textarea":xu(r,o),D("invalid",r)}Po(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Cr(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Cr(r.textContent,u,e),i=["children",""+u]):Jt.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&D("scroll",r)}switch(t){case"input":Er(r),yu(r,o,!0);break;case"textarea":Er(r),Eu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=li)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Ue]=n,e[ir]=r,Ec(e,n,!1,!1),n.stateNode=e;e:{switch(l=zo(t,r),t){case"dialog":D("cancel",e),D("close",e),i=r;break;case"iframe":case"object":case"embed":D("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ft.length;i++)D(Ft[i],e);i=r;break;case"source":D("error",e),i=r;break;case"img":case"image":case"link":D("error",e),D("load",e),i=r;break;case"details":D("toggle",e),i=r;break;case"input":gu(e,r),i=ko(e,r),D("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),D("invalid",e);break;case"textarea":xu(e,r),i=Ro(e,r),D("invalid",e);break;default:i=r}Po(t,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?Zs(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ys(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Xt(e,s):typeof s=="number"&&Xt(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Jt.hasOwnProperty(o)?s!=null&&o==="onScroll"&&D("scroll",e):s!=null&&yl(e,o,s,l))}switch(t){case"input":Er(e),yu(e,r,!1);break;case"textarea":Er(e),Eu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ot(e,!!r.multiple,o,!1):r.defaultValue!=null&&ot(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=li)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)Sc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=Mn(lr.current),Mn(He.current),Pr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ue]=n,(o=r.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ue]=n,n.stateNode=r}return ie(n),null;case 13:if(L(B),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&ge!==null&&n.mode&1&&!(n.flags&128))Ua(),vt(),n.flags|=98560,o=!1;else if(o=Pr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Ue]=n}else vt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),o=!1}else _e!==null&&(cl(_e),_e=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?Y===0&&(Y=3):eu())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return ht(),tl(e,n),e===null&&tr(n.stateNode.containerInfo),ie(n),null;case 10:return Dl(n.type._context),ie(n),null;case 17:return pe(n.type)&&ui(),ie(n),null;case 19:if(L(B),o=n.memoizedState,o===null)return ie(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)Pt(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=pi(e),l!==null){for(n.flags|=128,Pt(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(B,B.current&1|2),n.child}e=e.sibling}o.tail!==null&&K()>gt&&(n.flags|=128,r=!0,Pt(o,!1),n.lanes=4194304)}else{if(!r)if(e=pi(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Pt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!$)return ie(n),null}else 2*K()-o.renderingStartTime>gt&&t!==1073741824&&(n.flags|=128,r=!0,Pt(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=K(),n.sibling=null,t=B.current,F(B,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return bl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?me&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function iv(e,n){switch(jl(n),n.tag){case 1:return pe(n.type)&&ui(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ht(),L(ve),L(le),Hl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Bl(n),null;case 13:if(L(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));vt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return L(B),null;case 4:return ht(),null;case 10:return Dl(n.type._context),null;case 22:case 23:return bl(),null;case 24:return null;default:return null}}var _r=!1,oe=!1,ov=typeof WeakSet=="function"?WeakSet:Set,R=null;function rt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){W(e,n,r)}else t.current=null}function rl(e,n,t){try{t()}catch(r){W(e,n,r)}}var as=!1;function lv(e,n){if($o=ri,e=Ta(),Ol(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,u=-1,s=-1,a=0,d=0,c=e,f=null;n:for(;;){for(var p;c!==t||i!==0&&c.nodeType!==3||(u=l+i),c!==o||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(p=c.firstChild)!==null;)f=c,c=p;for(;;){if(c===e)break n;if(f===t&&++a===i&&(u=l),f===o&&++d===r&&(s=l),(p=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=p}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Bo={focusedElem:e,selectionRange:t},ri=!1,R=n;R!==null;)if(n=R,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,R=e;else for(;R!==null;){n=R;try{var m=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,E=m.memoizedState,h=n.stateNode,v=h.getSnapshotBeforeUpdate(n.elementType===n.type?y:ze(n.type,y),E);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){W(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,R=e;break}R=n.return}return m=as,as=!1,m}function Gt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&rl(n,t,o)}i=i.next}while(i!==r)}}function _i(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function il(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Nc(e){var n=e.alternate;n!==null&&(e.alternate=null,Nc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ue],delete n[ir],delete n[Wo],delete n[Hd],delete n[Vd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kc(e){return e.tag===5||e.tag===3||e.tag===4}function cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ol(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=li));else if(r!==4&&(e=e.child,e!==null))for(ol(e,n,t),e=e.sibling;e!==null;)ol(e,n,t),e=e.sibling}function ll(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ll(e,n,t),e=e.sibling;e!==null;)ll(e,n,t),e=e.sibling}var ee=null,Oe=!1;function rn(e,n,t){for(t=t.child;t!==null;)Ic(e,n,t),t=t.sibling}function Ic(e,n,t){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(ki,t)}catch{}switch(t.tag){case 5:oe||rt(t,n);case 6:var r=ee,i=Oe;ee=null,rn(e,n,t),ee=r,Oe=i,ee!==null&&(Oe?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Oe?(e=ee,t=t.stateNode,e.nodeType===8?io(e.parentNode,t):e.nodeType===1&&io(e,t),bt(e)):io(ee,t.stateNode));break;case 4:r=ee,i=Oe,ee=t.stateNode.containerInfo,Oe=!0,rn(e,n,t),ee=r,Oe=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&rl(t,n,l),i=i.next}while(i!==r)}rn(e,n,t);break;case 1:if(!oe&&(rt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){W(t,n,u)}rn(e,n,t);break;case 21:rn(e,n,t);break;case 22:t.mode&1?(oe=(r=oe)||t.memoizedState!==null,rn(e,n,t),oe=r):rn(e,n,t);break;default:rn(e,n,t)}}function fs(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ov),n.forEach(function(r){var i=hv.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Pe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,u=l;e:for(;u!==null;){switch(u.tag){case 5:ee=u.stateNode,Oe=!1;break e;case 3:ee=u.stateNode.containerInfo,Oe=!0;break e;case 4:ee=u.stateNode.containerInfo,Oe=!0;break e}u=u.return}if(ee===null)throw Error(S(160));Ic(o,l,i),ee=null,Oe=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(a){W(i,n,a)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Tc(n,e),n=n.sibling}function Tc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(n,e),De(e),r&4){try{Gt(3,e,e.return),_i(3,e)}catch(y){W(e,e.return,y)}try{Gt(5,e,e.return)}catch(y){W(e,e.return,y)}}break;case 1:Pe(n,e),De(e),r&512&&t!==null&&rt(t,t.return);break;case 5:if(Pe(n,e),De(e),r&512&&t!==null&&rt(t,t.return),e.flags&32){var i=e.stateNode;try{Xt(i,"")}catch(y){W(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Qs(i,o),zo(u,l);var a=zo(u,o);for(l=0;l<s.length;l+=2){var d=s[l],c=s[l+1];d==="style"?Zs(i,c):d==="dangerouslySetInnerHTML"?Ys(i,c):d==="children"?Xt(i,c):yl(i,d,c,a)}switch(u){case"input":Io(i,o);break;case"textarea":Js(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?ot(i,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?ot(i,!!o.multiple,o.defaultValue,!0):ot(i,!!o.multiple,o.multiple?[]:"",!1))}i[ir]=o}catch(y){W(e,e.return,y)}}break;case 6:if(Pe(n,e),De(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){W(e,e.return,y)}}break;case 3:if(Pe(n,e),De(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{bt(n.containerInfo)}catch(y){W(e,e.return,y)}break;case 4:Pe(n,e),De(e);break;case 13:Pe(n,e),De(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ql=K())),r&4&&fs(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(oe=(a=oe)||d,Pe(n,e),oe=a):Pe(n,e),De(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(c=R=d;R!==null;){switch(f=R,p=f.child,f.tag){case 0:case 11:case 14:case 15:Gt(4,f,f.return);break;case 1:rt(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(y){W(r,t,y)}}break;case 5:rt(f,f.return);break;case 22:if(f.memoizedState!==null){vs(c);continue}}p!==null?(p.return=f,R=p):vs(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,a?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=qs("display",l))}catch(y){W(e,e.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(y){W(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Pe(n,e),De(e),r&4&&fs(e);break;case 21:break;default:Pe(n,e),De(e)}}function De(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(kc(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xt(i,""),r.flags&=-33);var o=cs(e);ll(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=cs(e);ol(e,u,l);break;default:throw Error(S(161))}}catch(s){W(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function uv(e,n,t){R=e,Rc(e)}function Rc(e,n,t){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||_r;if(!l){var u=i.alternate,s=u!==null&&u.memoizedState!==null||oe;u=_r;var a=oe;if(_r=l,(oe=s)&&!a)for(R=i;R!==null;)l=R,s=l.child,l.tag===22&&l.memoizedState!==null?ps(i):s!==null?(s.return=l,R=s):ps(i);for(;o!==null;)R=o,Rc(o),o=o.sibling;R=i,_r=u,oe=a}ds(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):ds(e)}}function ds(e){for(;R!==null;){var n=R;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:oe||_i(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!oe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Xu(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Xu(n,l,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var a=n.alternate;if(a!==null){var d=a.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&bt(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}oe||n.flags&512&&il(n)}catch(f){W(n,n.return,f)}}if(n===e){R=null;break}if(t=n.sibling,t!==null){t.return=n.return,R=t;break}R=n.return}}function vs(e){for(;R!==null;){var n=R;if(n===e){R=null;break}var t=n.sibling;if(t!==null){t.return=n.return,R=t;break}R=n.return}}function ps(e){for(;R!==null;){var n=R;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{_i(4,n)}catch(s){W(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){W(n,i,s)}}var o=n.return;try{il(n)}catch(s){W(n,o,s)}break;case 5:var l=n.return;try{il(n)}catch(s){W(n,l,s)}}}catch(s){W(n,n.return,s)}if(n===e){R=null;break}var u=n.sibling;if(u!==null){u.return=n.return,R=u;break}R=n.return}}var sv=Math.ceil,gi=tn.ReactCurrentDispatcher,Xl=tn.ReactCurrentOwner,Ie=tn.ReactCurrentBatchConfig,j=0,b=null,Q=null,ne=0,me=0,it=In(0),Y=0,cr=null,Bn=0,ji=0,Yl=0,Kt=null,fe=null,ql=0,gt=1/0,Ge=null,yi=!1,ul=null,xn=null,jr=!1,vn=null,xi=0,Qt=0,sl=null,Kr=-1,Qr=0;function se(){return j&6?K():Kr!==-1?Kr:Kr=K()}function En(e){return e.mode&1?j&2&&ne!==0?ne&-ne:Gd.transition!==null?(Qr===0&&(Qr=ca()),Qr):(e=M,e!==0||(e=window.event,e=e===void 0?16:ga(e.type)),e):1}function Me(e,n,t,r){if(50<Qt)throw Qt=0,sl=null,Error(S(185));dr(e,t,r),(!(j&2)||e!==b)&&(e===b&&(!(j&2)&&(ji|=t),Y===4&&fn(e,ne)),he(e,r),t===1&&j===0&&!(n.mode&1)&&(gt=K()+500,Pi&&Tn()))}function he(e,n){var t=e.callbackNode;Gf(e,n);var r=ti(e,e===b?ne:0);if(r===0)t!==null&&Nu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Nu(t),n===1)e.tag===0?Wd(hs.bind(null,e)):Fa(hs.bind(null,e)),$d(function(){!(j&6)&&Tn()}),t=null;else{switch(fa(r)){case 1:t=Nl;break;case 4:t=sa;break;case 16:t=ni;break;case 536870912:t=aa;break;default:t=ni}t=Ac(t,Cc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Cc(e,n){if(Kr=-1,Qr=0,j&6)throw Error(S(327));var t=e.callbackNode;if(ct()&&e.callbackNode!==t)return null;var r=ti(e,e===b?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ei(e,r);else{n=r;var i=j;j|=2;var o=zc();(b!==e||ne!==n)&&(Ge=null,gt=K()+500,An(e,n));do try{fv();break}catch(u){Pc(e,u)}while(1);Fl(),gi.current=o,j=i,Q!==null?n=0:(b=null,ne=0,n=Y)}if(n!==0){if(n===2&&(i=Ao(e),i!==0&&(r=i,n=al(e,i))),n===1)throw t=cr,An(e,0),fn(e,r),he(e,K()),t;if(n===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!av(i)&&(n=Ei(e,r),n===2&&(o=Ao(e),o!==0&&(r=o,n=al(e,o))),n===1))throw t=cr,An(e,0),fn(e,r),he(e,K()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:zn(e,fe,Ge);break;case 3:if(fn(e,r),(r&130023424)===r&&(n=ql+500-K(),10<n)){if(ti(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Vo(zn.bind(null,e,fe,Ge),n);break}zn(e,fe,Ge);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-je(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sv(r/1960))-r,10<r){e.timeoutHandle=Vo(zn.bind(null,e,fe,Ge),r);break}zn(e,fe,Ge);break;case 5:zn(e,fe,Ge);break;default:throw Error(S(329))}}}return he(e,K()),e.callbackNode===t?Cc.bind(null,e):null}function al(e,n){var t=Kt;return e.current.memoizedState.isDehydrated&&(An(e,n).flags|=256),e=Ei(e,n),e!==2&&(n=fe,fe=t,n!==null&&cl(n)),e}function cl(e){fe===null?fe=e:fe.push.apply(fe,e)}function av(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Fe(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fn(e,n){for(n&=~Yl,n&=~ji,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-je(n),r=1<<t;e[t]=-1,n&=~r}}function hs(e){if(j&6)throw Error(S(327));ct();var n=ti(e,0);if(!(n&1))return he(e,K()),null;var t=Ei(e,n);if(e.tag!==0&&t===2){var r=Ao(e);r!==0&&(n=r,t=al(e,r))}if(t===1)throw t=cr,An(e,0),fn(e,n),he(e,K()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,zn(e,fe,Ge),he(e,K()),null}function Zl(e,n){var t=j;j|=1;try{return e(n)}finally{j=t,j===0&&(gt=K()+500,Pi&&Tn())}}function Hn(e){vn!==null&&vn.tag===0&&!(j&6)&&ct();var n=j;j|=1;var t=Ie.transition,r=M;try{if(Ie.transition=null,M=1,e)return e()}finally{M=r,Ie.transition=t,j=n,!(j&6)&&Tn()}}function bl(){me=it.current,L(it)}function An(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Ud(t)),Q!==null)for(t=Q.return;t!==null;){var r=t;switch(jl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ui();break;case 3:ht(),L(ve),L(le),Hl();break;case 5:Bl(r);break;case 4:ht();break;case 13:L(B);break;case 19:L(B);break;case 10:Dl(r.type._context);break;case 22:case 23:bl()}t=t.return}if(b=e,Q=e=wn(e.current,null),ne=me=n,Y=0,cr=null,Yl=ji=Bn=0,fe=Kt=null,jn!==null){for(n=0;n<jn.length;n++)if(t=jn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}jn=null}return e}function Pc(e,n){do{var t=Q;try{if(Fl(),Vr.current=mi,hi){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hi=!1}if($n=0,Z=J=H=null,Wt=!1,ur=0,Xl.current=null,t===null||t.return===null){Y=1,cr=n,Q=null;break}e:{var o=e,l=t.return,u=t,s=n;if(n=ne,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var a=s,d=u,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=ts(l);if(p!==null){p.flags&=-257,rs(p,l,u,o,n),p.mode&1&&ns(o,a,n),n=p,s=a;var m=n.updateQueue;if(m===null){var y=new Set;y.add(s),n.updateQueue=y}else m.add(s);break e}else{if(!(n&1)){ns(o,a,n),eu();break e}s=Error(S(426))}}else if($&&u.mode&1){var E=ts(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),rs(E,l,u,o,n),Ml(mt(s,u));break e}}o=s=mt(s,u),Y!==4&&(Y=2),Kt===null?Kt=[o]:Kt.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var h=dc(o,s,n);Ju(o,h);break e;case 1:u=s;var v=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(xn===null||!xn.has(g)))){o.flags|=65536,n&=-n,o.lanes|=n;var x=vc(o,u,n);Ju(o,x);break e}}o=o.return}while(o!==null)}_c(t)}catch(w){n=w,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(1)}function zc(){var e=gi.current;return gi.current=mi,e===null?mi:e}function eu(){(Y===0||Y===3||Y===2)&&(Y=4),b===null||!(Bn&268435455)&&!(ji&268435455)||fn(b,ne)}function Ei(e,n){var t=j;j|=2;var r=zc();(b!==e||ne!==n)&&(Ge=null,An(e,n));do try{cv();break}catch(i){Pc(e,i)}while(1);if(Fl(),j=t,gi.current=r,Q!==null)throw Error(S(261));return b=null,ne=0,Y}function cv(){for(;Q!==null;)Oc(Q)}function fv(){for(;Q!==null&&!Ff();)Oc(Q)}function Oc(e){var n=Mc(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?_c(e):Q=n,Xl.current=null}function _c(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=iv(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}else if(t=rv(t,n,me),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);Y===0&&(Y=5)}function zn(e,n,t){var r=M,i=Ie.transition;try{Ie.transition=null,M=1,dv(e,n,t,r)}finally{Ie.transition=i,M=r}return null}function dv(e,n,t,r){do ct();while(vn!==null);if(j&6)throw Error(S(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Kf(e,o),e===b&&(Q=b=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||jr||(jr=!0,Ac(ni,function(){return ct(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ie.transition,Ie.transition=null;var l=M;M=1;var u=j;j|=4,Xl.current=null,lv(e,t),Tc(t,e),_d(Bo),ri=!!$o,Bo=$o=null,e.current=t,uv(t),Df(),j=u,M=l,Ie.transition=o}else e.current=t;if(jr&&(jr=!1,vn=e,xi=i),o=e.pendingLanes,o===0&&(xn=null),$f(t.stateNode),he(e,K()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(yi)throw yi=!1,e=ul,ul=null,e;return xi&1&&e.tag!==0&&ct(),o=e.pendingLanes,o&1?e===sl?Qt++:(Qt=0,sl=e):Qt=0,Tn(),null}function ct(){if(vn!==null){var e=fa(xi),n=Ie.transition,t=M;try{if(Ie.transition=null,M=16>e?16:e,vn===null)var r=!1;else{if(e=vn,vn=null,xi=0,j&6)throw Error(S(331));var i=j;for(j|=4,R=e.current;R!==null;){var o=R,l=o.child;if(R.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var a=u[s];for(R=a;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Gt(8,d,o)}var c=d.child;if(c!==null)c.return=d,R=c;else for(;R!==null;){d=R;var f=d.sibling,p=d.return;if(Nc(d),d===a){R=null;break}if(f!==null){f.return=p,R=f;break}R=p}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}R=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,R=l;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Gt(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,R=h;break e}R=o.return}}var v=e.current;for(R=v;R!==null;){l=R;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,R=g;else e:for(l=v;R!==null;){if(u=R,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:_i(9,u)}}catch(w){W(u,u.return,w)}if(u===l){R=null;break e}var x=u.sibling;if(x!==null){x.return=u.return,R=x;break e}R=u.return}}if(j=i,Tn(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(ki,e)}catch{}r=!0}return r}finally{M=t,Ie.transition=n}}return!1}function ms(e,n,t){n=mt(t,n),n=dc(e,n,1),e=yn(e,n,1),n=se(),e!==null&&(dr(e,1,n),he(e,n))}function W(e,n,t){if(e.tag===3)ms(e,e,t);else for(;n!==null;){if(n.tag===3){ms(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){e=mt(t,e),e=vc(n,e,1),n=yn(n,e,1),e=se(),n!==null&&(dr(n,1,e),he(n,e));break}}n=n.return}}function vv(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,b===e&&(ne&t)===t&&(Y===4||Y===3&&(ne&130023424)===ne&&500>K()-ql?An(e,0):Yl|=t),he(e,n)}function jc(e,n){n===0&&(e.mode&1?(n=Nr,Nr<<=1,!(Nr&130023424)&&(Nr=4194304)):n=1);var t=se();e=be(e,n),e!==null&&(dr(e,n,t),he(e,t))}function pv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),jc(e,t)}function hv(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),jc(e,t)}var Mc;Mc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)de=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return de=!1,tv(e,n,t);de=!!(e.flags&131072)}else de=!1,$&&n.flags&1048576&&Da(n,ci,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Gr(e,n),e=n.pendingProps;var i=dt(n,le.current);at(n,t),i=Wl(null,n,r,e,i,t);var o=Gl();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,pe(r)?(o=!0,si(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ul(n),i.updater=zi,n.stateNode=i,i._reactInternals=n,Yo(n,r,e,t),n=bo(null,n,r,!0,o,t)):(n.tag=0,$&&o&&_l(n),ue(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Gr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=gv(r),e=ze(r,e),i){case 0:n=Zo(null,n,r,e,t);break e;case 1:n=ls(null,n,r,e,t);break e;case 11:n=is(null,n,r,e,t);break e;case 14:n=os(null,n,r,ze(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),Zo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),ls(e,n,r,i,t);case 3:e:{if(gc(n),e===null)throw Error(S(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Ba(e,n),vi(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=mt(Error(S(423)),n),n=us(e,n,r,t,i);break e}else if(r!==i){i=mt(Error(S(424)),n),n=us(e,n,r,t,i);break e}else for(ge=gn(n.stateNode.containerInfo.firstChild),ye=n,$=!0,_e=null,t=Ga(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(vt(),r===i){n=en(e,n,t);break e}ue(e,n,r,t)}n=n.child}return n;case 5:return Ka(n),e===null&&Qo(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ho(r,i)?l=null:o!==null&&Ho(r,o)&&(n.flags|=32),mc(e,n),ue(e,n,l,t),n.child;case 6:return e===null&&Qo(n),null;case 13:return yc(e,n,t);case 4:return $l(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=pt(n,null,r,t):ue(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),is(e,n,r,i,t);case 7:return ue(e,n,n.pendingProps,t),n.child;case 8:return ue(e,n,n.pendingProps.children,t),n.child;case 12:return ue(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,F(fi,r._currentValue),r._currentValue=l,o!==null)if(Fe(o.value,l)){if(o.children===i.children&&!ve.current){n=en(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ye(-1,t&-t),s.tag=2;var a=o.updateQueue;if(a!==null){a=a.shared;var d=a.pending;d===null?s.next=s:(s.next=d.next,d.next=s),a.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Jo(o.return,t,n),u.lanes|=t;break}s=s.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),Jo(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ue(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,at(n,t),i=Te(i),r=r(i),n.flags|=1,ue(e,n,r,t),n.child;case 14:return r=n.type,i=ze(r,n.pendingProps),i=ze(r.type,i),os(e,n,r,i,t);case 15:return pc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),Gr(e,n),n.tag=1,pe(r)?(e=!0,si(n)):e=!1,at(n,t),Va(n,r,i),Yo(n,r,i,t),bo(null,n,r,!0,e,t);case 19:return xc(e,n,t);case 22:return hc(e,n,t)}throw Error(S(156,n.tag))};function Ac(e,n){return ua(e,n)}function mv(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,n,t,r){return new mv(e,n,t,r)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gv(e){if(typeof e=="function")return nu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===El)return 11;if(e===wl)return 14}return 2}function wn(e,n){var t=e.alternate;return t===null?(t=ke(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Jr(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")nu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Jn:return Fn(t.children,i,o,n);case xl:l=8,i|=8;break;case Eo:return e=ke(12,t,n,i|2),e.elementType=Eo,e.lanes=o,e;case wo:return e=ke(13,t,n,i),e.elementType=wo,e.lanes=o,e;case So:return e=ke(19,t,n,i),e.elementType=So,e.lanes=o,e;case Ws:return Mi(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hs:l=10;break e;case Vs:l=9;break e;case El:l=11;break e;case wl:l=14;break e;case sn:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=ke(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Fn(e,n,t,r){return e=ke(7,e,r,n),e.lanes=t,e}function Mi(e,n,t,r){return e=ke(22,e,r,n),e.elementType=Ws,e.lanes=t,e.stateNode={isHidden:!1},e}function vo(e,n,t){return e=ke(6,e,null,n),e.lanes=t,e}function po(e,n,t){return n=ke(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function yv(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tu(e,n,t,r,i,o,l,u,s){return e=new yv(e,n,t,u,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=ke(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ul(o),e}function xv(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Fc(e){if(!e)return Nn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(pe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(pe(t))return Aa(e,t,n)}return n}function Dc(e,n,t,r,i,o,l,u,s){return e=tu(t,r,!0,e,i,o,l,u,s),e.context=Fc(null),t=e.current,r=se(),i=En(t),o=Ye(r,i),o.callback=n??null,yn(t,o,i),e.current.lanes=i,dr(e,i,r),he(e,r),e}function Ai(e,n,t,r){var i=n.current,o=se(),l=En(i);return t=Fc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ye(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=yn(i,n,l),e!==null&&(Me(e,i,l,o),Hr(e,i,l)),l}function wi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ru(e,n){gs(e,n),(e=e.alternate)&&gs(e,n)}function Ev(){return null}var Lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function iu(e){this._internalRoot=e}Fi.prototype.render=iu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));Ai(e,n,null,null)};Fi.prototype.unmount=iu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Hn(function(){Ai(null,e,null,null)}),n[Ze]=null}};function Fi(e){this._internalRoot=e}Fi.prototype.unstable_scheduleHydration=function(e){if(e){var n=pa();e={blockedOn:null,target:e,priority:n};for(var t=0;t<cn.length&&n!==0&&n<cn[t].priority;t++);cn.splice(t,0,e),t===0&&ma(e)}};function ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ys(){}function wv(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var a=wi(l);o.call(a)}}var l=Dc(n,r,e,0,null,!1,!1,"",ys);return e._reactRootContainer=l,e[Ze]=l.current,tr(e.nodeType===8?e.parentNode:e),Hn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var a=wi(s);u.call(a)}}var s=tu(e,0,!1,null,null,!1,!1,"",ys);return e._reactRootContainer=s,e[Ze]=s.current,tr(e.nodeType===8?e.parentNode:e),Hn(function(){Ai(n,s,t,r)}),s}function Li(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var s=wi(l);u.call(s)}}Ai(n,l,e,i)}else l=wv(t,n,e,i,r);return wi(l)}da=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=At(n.pendingLanes);t!==0&&(kl(n,t|1),he(n,K()),!(j&6)&&(gt=K()+500,Tn()))}break;case 13:Hn(function(){var r=be(e,1);if(r!==null){var i=se();Me(r,e,1,i)}}),ru(e,1)}};Il=function(e){if(e.tag===13){var n=be(e,134217728);if(n!==null){var t=se();Me(n,e,134217728,t)}ru(e,134217728)}};va=function(e){if(e.tag===13){var n=En(e),t=be(e,n);if(t!==null){var r=se();Me(t,e,n,r)}ru(e,n)}};pa=function(){return M};ha=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};_o=function(e,n,t){switch(n){case"input":if(Io(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Ci(r);if(!i)throw Error(S(90));Ks(r),Io(r,i)}}}break;case"textarea":Js(e,t);break;case"select":n=t.value,n!=null&&ot(e,!!t.multiple,n,!1)}};na=Zl;ta=Hn;var Sv={usingClientEntryPoint:!1,Events:[pr,Zn,Ci,bs,ea,Zl]},zt={findFiberByHostInstance:_n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Nv={bundleType:zt.bundleType,version:zt.version,rendererPackageName:zt.rendererPackageName,rendererConfig:zt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=oa(e),e===null?null:e.stateNode},findFiberByHostInstance:zt.findFiberByHostInstance||Ev,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{ki=Mr.inject(Nv),Be=Mr}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sv;Ee.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(n))throw Error(S(200));return xv(e,n,null,t)};Ee.createRoot=function(e,n){if(!ou(e))throw Error(S(299));var t=!1,r="",i=Lc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=tu(e,1,!1,null,null,t,!1,r,i),e[Ze]=n.current,tr(e.nodeType===8?e.parentNode:e),new iu(n)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=oa(n),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Hn(e)};Ee.hydrate=function(e,n,t){if(!Di(n))throw Error(S(200));return Li(null,e,n,!0,t)};Ee.hydrateRoot=function(e,n,t){if(!ou(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=Lc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Dc(n,null,e,1,t??null,i,!1,o,l),e[Ze]=n.current,tr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Fi(n)};Ee.render=function(e,n,t){if(!Di(n))throw Error(S(200));return Li(null,e,n,!1,t)};Ee.unmountComponentAtNode=function(e){if(!Di(e))throw Error(S(40));return e._reactRootContainer?(Hn(function(){Li(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};Ee.unstable_batchedUpdates=Zl;Ee.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Di(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Li(e,n,t,!1,r)};Ee.version="18.2.0-next-9e3b772b8-20220608";function Uc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uc)}catch(e){console.error(e)}}Uc(),Ds.exports=Ee;var kv=Ds.exports,xs=kv;vu.createRoot=xs.createRoot,vu.hydrateRoot=xs.hydrateRoot;const Iv=`float ease(float t) {
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
`,Tv=`#include config

const float PI = 3.14159265358979323846264338327950288;
const float TAU = 2. * PI;
const float ETA = PI / 2.;
const float DT = .001;
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
`,Rv=`bool nan(in vec2 v) {
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
`,Cv=`#include helpers
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
  #elif PROJECTION3 == 12 // SINUSOIDAL
  vec2 z = project(v, 1.).xy;
  return vec3(csin(1.5 * z), v.z);
  #elif PROJECTION3 >= 13 // TRIANGLE  

  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  vec2 w = sc(z, PROJECTION3 - 10);
  // Rotate by PI / 4
  #if PROJECTION3 == 14
  w = cmul(w, cexp(ci * PI / 4.));
  #elif PROJECTION3 == 15
  w = cmul(w, cexp(ci * PI / 10.));
  #endif
  return vec3(w, v.z);

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
`,Pv=`const vec2 cone = vec2(1., 0);
const vec2 ci = vec2(0., 1.);
const vec2 conei = vec2(1., 1.);

vec2 cmul(vec2 z, vec2 w) {
  return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

vec2 cinv(vec2 z) {
  return z * vec2(1, -1) / dot(z, z);
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
  return cdiv(cexp(vec2(-z.y, z.x)) - cexp(vec2(z.y, -z.x)), vec2(0, 2.0));
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
float gamma(float z) {
  const float[8] p = float[](676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7);
  z -= 1.0;
  float x = 0.99999999999980993; // Unnecessary precision
  for(int i = 0; i < 8; i++) {
    float pval = p[i];
    x += pval / (z + float(i + 1));
  }
  float t = z + 8.0 - 0.5;
  return sqrt(2.0 * PI) * pow(t, z + 0.5) * exp(-t) * x;
}
float B(float a, float b) {
  return (gamma(a) * gamma(b)) / gamma(a + b);
}

float binomial(float a, int n) {
  float s = 1.0;
  for(int i = n; i >= 1; i--, a--) {
    s *= float(a) / float(i);
  }
  return s;
}

vec2 sc(vec2 w, int K) {
  // https://fr.scribd.com/document/480603019/circletopolygon 2.14
  vec2 sum = vec2(0.);
  for(int n = 0; n <= 6; n++) {
    sum += binomial(float(n) - 1.0 + 2.0 / float(K), n) / float(1 + n * K) * cpow(w, float(n * K));
  }
  return cmul(w, sum);
}

vec2 sc2(vec2 w, int K) {
  // https://fr.scribd.com/document/480603019/circletopolygon A
  float Kinv = 1. / float(K);
  float k = 0.;
  vec2 zk = (1. - Kinv) * B(1. + Kinv, 1. - 2. * Kinv) * cexp(TAU * k * Kinv * ci);

  vec2 sum = vec2(0.);
  for(int n = 0; n <= 6; n++) {
    sum += binomial(float(n) - 1.0 * Kinv, n) / float(1 + n - 2 / K) * cpow(cone - cpow(w, float(K)), 1. + float(n) - 2. * Kinv);
  }
  return cmul(zk, 1. - (1. / B(1. - 2. * Kinv, Kinv)) * sum);
}
`,zv=`vec4 light(vec4 color, float ambient, float shininess) {
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
`,Ov="dsbßx",Ar={active:1,inactive:0,dual:"d",snub:"s",holosnub:"ß",dualsnub:"b",custom:.5,activeVoid:"x",void:""},$c=e=>e===0?"inactive":e===1?"active":e==="d"?"dual":e==="s"?"snub":e==="ß"?"holosnub":e==="b"?"dualsnub":e==="x"?"activeVoid":e===""?"void":"custom",_v=e=>{const n=[];for(let t=0;t<e[0].length;t++){n.push([]);for(let r=0;r<e.length;r++)n[t].push(e[r][t])}return n},Xr=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){t[r]=new Array(n[0].length);for(let i=0;i<n[0].length;i++){let o=0;for(let l=0;l<n.length;l++)o+=e[r][l]*n[l][i];t[r][i]=o}}return t},jv=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){let i=0;for(let o=0;o<e[0].length;o++)i+=e[r][o]*n[o];t[r]=i}return t},Lp=(e,n)=>{for(let t=0;t<e.length;t++)for(let r=0;r<e[0].length;r++)e[t][r]=n[t][r];return e},nn=e=>{const n=new Array(e);for(let t=0;t<e;t++)n[t]=new Array(e).fill(0),n[t][t]=1;return n},Mv=e=>e.every((n,t)=>n.every((r,i)=>t===i||e[t][i]===0)),Av=e=>{const n=e[0].length;let t=e.map(o=>o.slice()),r=nn(n),i=1e3;for(;!Mv(t)&&i-- >0;){let o=0,l=1;for(let a=0;a<n;a++)for(let d=0;d<n;d++)a!==d&&Ve(t[a][d])>Ve(t[o][l])&&(o=a,l=d);const u=t[o][o]===t[l][l]?su(t[o][l])*Ae/4:.5*Wv(2*t[o][l]/(t[o][o]-t[l][l])),s=nn(n);s[l][l]=s[o][o]=Xe(u),s[l][o]=s[o][l]=-$e(u),s[l][o]*=-1,r=Xr(r,s),t=Xr(Xr(_v(s),t),s)}return{vectors:r,values:t.map((o,l)=>Ve(o[l])<1e-8?0:o[l])}},Fv=e=>{const n=e.length,t=[];for(let r=0;r<n;r++)t.push([...e[r],...nn(n)[r]]);for(let r=0;r<n;r++){const i=t[r][r];for(let o=r+1;o<n;o++){const l=t[o][r]/i;for(let u=r;u<2*n;u++)t[o][u]-=l*t[r][u]}}for(let r=n-1;r>=0;r--){const i=t[r][r];for(let o=r-1;o>=0;o--){const l=t[o][r]/i;for(let u=0;u<2*n;u++)t[o][u]-=l*t[r][u]}for(let o=n;o<2*n;o++)t[r][o]/=i}return t.map(r=>r.slice(n))},Si=e=>{if(e.length===2)return[e[0][0],e[1][0],e[0][1],e[1][1]];if(e.length===3)return[e[0][0],e[1][0],e[2][0],e[0][1],e[1][1],e[2][1],e[0][2],e[1][2],e[2][2]];if(e.length===4)return[e[0][0],e[1][0],e[2][0],e[3][0],e[0][1],e[1][1],e[2][1],e[3][1],e[0][2],e[1][2],e[2][2],e[3][2],e[0][3],e[1][3],e[2][3],e[3][3]];if(e.length===5)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],e[0][4]],[[e[1][0],e[1][1],e[1][2],e[1][3]],e[1][4]],[[e[2][0],e[2][1],e[2][2],e[2][3]],e[2][4]],[[e[3][0],e[3][1],e[3][2],e[3][3]],e[3][4]],[[e[4][0],e[4][1],e[4][2],e[4][3]],e[4][4]]];if(e.length===6)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5]]]];if(e.length===7)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6]]]];if(e.length===8)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]]]];if(e.length===9)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]],e[0][8]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]],e[1][8]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]],e[2][8]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]],e[3][8]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]],e[4][8]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]],e[5][8]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]],e[6][8]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]],e[7][8]],[[e[8][0],e[8][1],e[8][2],e[8][3]],[e[8][4],e[8][5],e[8][6],e[8][7]],e[8][8]]];throw new Error("Unsupported matrix size")},Dv=(e,n,t,r,i=1)=>{const o=i/Wc(e/2),l=1/(t-r),u=nn(4);return u[0][0]=o/n,u[1][1]=o,u[2][2]=(r+t)*l,u[3][2]=-1,u[2][3]=2*r*t*l,u[3][3]=0,u},Lv=(e,n,t)=>{if(Ve(e[0]-n[0])<1e-4&&Ve(e[1]-n[1])<1e-4&&Ve(e[2]-n[2])<1e-4)return nn(4);let r=e[0]-n[0],i=e[1]-n[1],o=e[2]-n[2],l=1/U(r*r+i*i+o*o);r*=l,i*=l,o*=l;let u=t[1]*o-t[2]*i,s=t[2]*r-t[0]*o,a=t[0]*i-t[1]*r;l=U(u*u+s*s+a*a),l?(l=1/l,u*=l,s*=l,a*=l):(u=0,s=0,a=0);let d=i*a-o*s,c=o*u-r*a,f=r*s-i*u;l=U(d*d+c*c+f*f),l?(l=1/l,d*=l,c*=l,f*=l):(d=0,c=0,f=0);const p=nn(4);return p[0][0]=u,p[1][0]=d,p[2][0]=r,p[0][1]=s,p[1][1]=c,p[2][1]=i,p[0][2]=a,p[1][2]=f,p[2][2]=o,p[0][3]=-(u*e[0]+s*e[1]+a*e[2]),p[1][3]=-(d*e[0]+c*e[1]+f*e[2]),p[2][3]=-(r*e[0]+i*e[1]+o*e[2]),p},Up=(e,n)=>e.map((t,r)=>t.map((i,o)=>i<0?-Vv(-i/10):i===0?-1:-Xe(n[r][o]*Ae/i))),Bc=e=>{const n=Av(e).values;return{"+":n.filter(t=>t>0).length,"-":n.filter(t=>t<0).length,0:n.filter(t=>t===0).length}},Hc=(e,n=[],t=0,r=2)=>{n[t]=n[t]||[];for(let i=0;i<e.length;i++){const o=e.filter((l,u)=>u!==i).map(l=>l.filter((u,s)=>s!==i));n[t].push(Bc(o)),o.length>1&&t+1<r&&Hc(o,n,t+1)}return n},$p=e=>{const n=Bc(e);if(n["-"]===0&&n[0]===0)return{type:"finite",curvature:1};if(n["-"]===0&&n[0]>0)return{type:"affine",curvature:0};if(n["-"]>1)return{type:"hyperbolic",subtype:"superhyperbolic",level:n["-"],curvature:-1};const t=Hc(e),r=t[0];if(r.every(i=>i["-"]===0&&i[0]===0))return{type:"hyperbolic",subtype:"compact",curvature:-1};if(r.every(i=>i["-"]===0))return{type:"hyperbolic",subtype:"paracompact",curvature:-1};for(let i=1;i<t.length;i++)if(t[i].every(l=>l["-"]===0))return{type:"hyperbolic",subtype:"lorentzian",curvature:-1,level:i+1};return{type:"indefinite",curvature:-1}},lu=(e,n,t)=>{let r=0;for(let i=0;i<e.length;i++)r+=e[i]*n[i]*(i===e.length-1&&t||1);return r},Vc=(e,n)=>lu(e,e,n),Uv=(e,n,t)=>{e=e.slice();const r=2*lu(e,n,t);for(let i=0;i<e.length;i++)e[i]-=r*(t||i!==e.length-1?n[i]:0);return e},uu=(e,n)=>{if(e=e.slice(),n===0){for(let r=0;r<e.length;r++)e[r]/=e[e.length-1];return e}const t=(n===-1&&su(e[e.length-1])||1)/U(Kn(1e-32,Ve(Vc(e,n))));for(let r=0;r<e.length;r++)e[r]*=t;return e},Bp=e=>e.sort((n,t)=>{const[r,i]=n,[o,l]=t;return r===0&&i===1?1:o===0&&l===1||r<2&&o>=2?-1:o<2&&r>=2?1:r<2&&o<2?i===l?o-r:i-l:r===o?l-i:o-r}),Hp=(e,n,t,r,i)=>{const o=nn(r);if(n>t.length-1||Ve(e)>1)return o;const[l,u]=t[n],s=u===r-1&&i||1,a=U(1-s*e*e),d=e;return o[l][l]=a,o[u][u]=a,o[l][u]=-s*d,o[u][l]=d,o},$v=(e,n,t,r)=>{const i=n[0].length,o=new Array(i).fill().map(()=>new Array(i).fill(0));o[e][0]=1;for(let u=1;u<i;u++){const s=(u+e)%i;for(let a=0;a<u;a++){const d=(a+e)%i;o[s][a]=(n[s][d]-lu(o[s].slice(0,a),o[d].slice(0,a)))/o[d][a]}if(o[s][u]=U(Ve(1-Vc(o[s].slice(0,u)))),o[s][u]<1e-6&&u<i-1&&!r)return null}const l=(i-1+e)%i;return t===0?o[l][i-1]=.5:o[l][i-1]*=t,o},Bv=(e,n,t=!1)=>{const r=e[0].length;let i=null;const o=e.every((l,u)=>l.every((s,a)=>u===a||s<=-1));if(t||o){if(i=new Array(r).fill(0).map(()=>new Array(r).fill(0)),r===2){const l=(e[0][1]+1)/2;return i[0][0]=U(l-e[0][1]),i[1][0]=-U(l-e[0][1]),i[0][1]=i[1][1]=U((n||1)*l),n===0&&(i[1][1]=.5),i}else if(r===3){const l=e[0][1],u=e[1][2],s=e[0][2],a=(l*l+u*u+s*s-2*l*u*s-1)/(l*l+u*u+s*s-2*l*u-2*l*s-2*u*s+2*l+2*u+2*s-3);return i[0][2]=i[1][2]=i[2][2]=n*U(n*a),i[2][1]=-U(1-a),i[1][1]=(u-a)/i[2][1],i[0][1]=(s-a)/i[2][1],i[1][0]=-U(1-i[1][1]**2-a),i[0][0]=U(1-i[0][1]**2-a),n===0&&(i[2][2]=.5),i}else if(r===4){const l=e[0][1],u=e[1][2],s=e[2][3],a=e[0][2],d=e[1][3],c=e[0][3],f=(l*l*s*s+u*u*c*c+a*a*d*d-l*l-u*u-s*s-a*a-d*d-c*c+2*l*d*c+2*l*u*a+2*u*s*d+2*s*a*c-2*u*a*d*c-2*l*u*s*c-2*l*s*a*d+1)/(2*(l*l*s+u*u*c+s*s*l+a*a*d+d*d*a+c*c*u-l*l-u*u-s*s-a*a-d*d-c*c-l*u*s-l*u*c-l*s*a-l*s*d-l*s*c-l*a*d-u*s*c-u*a*d-u*a*c-u*d*c-s*a*d-a*d*c+l*u*a+l*d*c+u*s*d+s*a*c+l*u+l*a+l*d+l*c+u*s+u*a+u*d+s*a+s*d+s*c+a*c+d*c-l-u-s-a-d-c+2));return i[0][3]=i[1][3]=i[2][3]=i[3][3]=n*U(n*f),i[3][2]=-U(1-f),i[2][2]=(s-f)/i[3][2],i[1][2]=(d-f)/i[3][2],i[0][2]=(c-f)/i[3][2],i[2][1]=-U(1-f-i[2][2]**2),i[1][1]=(u-f-i[1][2]*i[2][2])/i[2][1],i[0][1]=(a-f-i[0][2]*i[2][2])/i[2][1],i[1][0]=-U(1-f-i[1][1]**2-i[1][2]**2),i[0][0]=U(1-f-i[0][1]**2-i[0][2]**2),n===0&&(i[3][3]=.5),i}if(e.every((l,u)=>l.every((s,a)=>u===a||s===-1))){const l=[0];for(let u=1;u<r;u++)l[u]=(l[u-1]+1)/(3-l[u-1]);i[0][0]=1,i[1][0]=-1,i[0][1]=U(l[1]),i[1][1]=U(l[1]);for(let u=0;u<r;u++)for(let s=0;s<r;s++)u<2&&s<2||(i[u][s]=s<u-1?0:s===u-1?-(u*U(l[s]-l[s-1])):s<r-1?U(l[s]-l[s-1]):U(l[s-1]));return i}}for(let l=0;l<r&&(i=$v(l,e,n,l===r-1),!i);l++);if(!i&&!t)return Bv(e,n,!0);if(i&&t){const l=Hv(new Array(r).fill(1),i,n);if(n!==0){const u=uu(l.slice().map((s,a)=>a===r-1?s-1:s),n);for(let s=0;s<r;s++)i[s]=Uv(i[s],u,n)}}return i},Hv=(e,n,t)=>{let r=e.map(u=>isNaN(u)?1:+u),i=n.slice(),o;for(let u=0;u<r.length&&(o=Fv(i),o.some(s=>s.some(a=>isNaN(a)||Ve(a)>1e8)));u++){console.warn("Non invertible matrix, retrying by shifting mirrors"),i.push(i.shift()),r.push(r.shift());if(u===r.length-1)return console.warn("Non invertible matrix, returning default value"),[0,0,1]}const l=jv(o,r);return l[l.length-1]*=t||1,uu(l,t)},{abs:Ve,cos:Xe,sin:$e,tan:Wc,cosh:Vv,sinh:Vp,acos:Wp,acosh:Gp,atan:Wv,atan2:Gv,min:We,max:Kn,round:Kp,sqrt:U,sign:su,ceil:Qp,floor:Jp,log:Xp,exp:Yp,hypot:qp,pow:Kv,PI:Ae}=Math,fl=Ae*2;function*Qv(e,n){if(n<0||e.length<n)return;const t=Array.from(Array(n).keys());for(;;){yield t.map(i=>e[i]);let r=n-1;for(;r>=0&&t[r]>=e.length-n+r;)r--;if(r<0)return;for(let i=t[r]+1;r<n;r++,i++)t[r]=i}}const Zp=(e,n=2)=>Array.from(Qv(e,n)),Gc=e=>String.fromCharCode(97+e),Jv=e=>e.charCodeAt(0)-97,Yr=e=>e?e*Yr(e-1):1,bp=(e,n)=>Yr(e)/(Yr(n)*Yr(e-n)),e0=(e,n)=>{let t;return(...r)=>(clearTimeout(t),t=setTimeout(()=>e(...r),n),()=>clearTimeout(t))},Xv=(e,n=null,t=1,r=!1)=>{if(n===null&&(n=e,e=0),t===0)throw new Error("Step cannot be zero.");if(n<e&&t>0||n>e&&t<0){if(r)return[];t=-t}return new Array(Math.ceil((n-e)/t)).fill().map((i,o)=>e+o*t)};var Kc={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(qc,function(){var t=function(){function r(p){return l.appendChild(p.dom),p}function i(p){for(var m=0;m<l.children.length;m++)l.children[m].style.display=m===p?"block":"none";o=p}var o=0,l=document.createElement("div");l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(p){p.preventDefault(),i(++o%l.children.length)},!1);var u=(performance||Date).now(),s=u,a=0,d=r(new t.Panel("FPS","#0ff","#002")),c=r(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=r(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:l,addPanel:r,showPanel:i,begin:function(){u=(performance||Date).now()},end:function(){a++;var p=(performance||Date).now();if(c.update(p-u,200),p>s+1e3&&(d.update(1e3*a/(p-s),100),s=p,a=0,f)){var m=performance.memory;f.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return p},update:function(){u=this.end()},domElement:l,setMode:i}};return t.Panel=function(r,i,o){var l=1/0,u=0,s=Math.round,a=s(window.devicePixelRatio||1),d=80*a,c=48*a,f=3*a,p=2*a,m=3*a,y=15*a,E=74*a,h=30*a,v=document.createElement("canvas");v.width=d,v.height=c,v.style.cssText="width:80px;height:48px";var g=v.getContext("2d");return g.font="bold "+9*a+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=o,g.fillRect(0,0,d,c),g.fillStyle=i,g.fillText(r,f,p),g.fillRect(m,y,E,h),g.fillStyle=o,g.globalAlpha=.9,g.fillRect(m,y,E,h),{dom:v,update:function(x,w){l=Math.min(l,x),u=Math.max(u,x),g.fillStyle=o,g.globalAlpha=1,g.fillRect(0,0,d,y),g.fillStyle=i,g.fillText(s(x)+" "+r+" ("+s(l)+"-"+s(u)+")",f,p),g.drawImage(v,m+a,y,E-a,h,m,y,E-a,h),g.fillRect(m+E-a,y,a,h),g.fillStyle=o,g.globalAlpha=.9,g.fillRect(m+E-a,y,a,s((1-x/w)*h))}}},t})})(Kc);var Yv=Kc.exports;const qv=Zc(Yv),Zv=({radius:e=1,widthSegments:n=16,segments:t=16}={})=>{const r=[],i=[],o=[],l=[];let u=0;const s=[];for(let a=0;a<=t;a++){const d=[],c=a/t;let f=0;a===0?f=.5/n:a===t&&(f=-.5/n);for(let p=0;p<=n;p++){const m=p/n,y=[-e*Xe(m*fl)*$e(c*Ae),e*Xe(c*Ae),e*$e(m*fl)*$e(c*Ae)];i.push(...y);const E=(y[0]**2+y[1]**2+y[2]**2)**-.5;o.push(...y.map(h=>h*E)),l.push(m+f,1-c),d.push(u++)}s.push(d)}for(let a=0;a<t;a++)for(let d=0;d<n;d++){const c=s[a][d+1],f=s[a][d],p=s[a+1][d],m=s[a+1][d+1];a!==0&&r.push(c,f,m),a!==t-1&&r.push(f,p,m)}return{vertices:i,normals:o,uvs:l,indices:r}},bv=({radius:e=null,radiusTop:n=1,radiusBottom:t=1,height:r=1,radialSegments:i=8,segments:o=1}={})=>{const l=[],u=[],s=[],a=[];e!==null&&(n=e,t=e);let d=0;const c=[],f=r/2,p=(t-n)/r;for(let m=0;m<=o;m++){const y=[],E=m/o,h=E*(t-n)+n;for(let v=0;v<=i;v++){const g=v/i,x=g*fl,w=$e(x),I=Xe(x),N=[h*w,-E*r+f,h*I];u.push(...N);const k=[w,p,I],A=(k[0]**2+k[1]**2+k[2]**2)**-.5;s.push(...k.map(O=>O*A)),a.push(g,1-E),y.push(d++)}c.push(y)}for(let m=0;m<i;m++)for(let y=0;y<o;y++){const E=c[y][m],h=c[y+1][m],v=c[y+1][m+1],g=c[y][m+1];l.push(E,h,g),l.push(h,v,g)}return{vertices:u,normals:s,uvs:a,indices:l}},ep=({segments:e=3}={})=>{const n=[],t=[],r=[],i=[],o=1/e;for(let l=0;l<e+1;l++)for(let u=0;u<l+1;u++)t.push((2*u-l)*o/2,l*o,0),r.push(0,0,1),i.push(o*u,1-o*l);for(let l=1;l<e+1;l++)for(let u=0;u<l;u++){const s=l*(l+1)/2+u,a=l*(l-1)/2+u;if(n.push(s,a,s+1),l<e){const d=(l+1)*(l+2)/2+u;n.push(d+1,s,s+1)}}return{vertices:t,normals:r,uvs:i,indices:n}},np=(e,n,t,r)=>{const i=[],o=[],l=[];for(let s=0;s<e.ranges.face[1];s++){const a=e.face[s],d=new Array(t).fill(0);for(let c=0;c<a.vertices.length;c++){const f=e.vertex[a.vertices[c]];for(let p=0;p<t;p++)d[p]+=f.vertex[p]}for(let c=0;c<t;c++)d[c]/=a.vertices.length;i.push({vertex:uu(d,r),word:a.word})}const u=new Map;for(let s=0;s<e.ranges.face[1];s++)for(let a=s+1;a<e.ranges.face[1];a++){const d=e.face[s],c=e.face[a];d.vertices.filter(p=>c.vertices.includes(p)).length>1&&(o.push({start:s,end:a,word:d.word}),u.has(s)||u.set(s,[]),u.has(a)||u.set(a,[]),u.get(s).push(a),u.get(a).push(s))}for(let s=0;s<e.ranges.vertex[1];s++){const a=[];for(let f=0;f<e.ranges.face[1];f++)e.face[f].vertices.includes(s)&&a.push(f);const d=[a.shift()];let c=!1;for(;a.length>1;){const f=d[d.length-1],p=u.get(f);if(!p){c=!0;break}const m=a.find(y=>p.includes(y));if(!m){c=!0;break}a.splice(a.indexOf(m),1),d.push(m)}c||(d.push(a[0]),l.push({vertices:d,word:e.vertex[s].word}))}return{vertex:i,edge:o,face:l,ranges:{vertex:[0,i.length],edge:[0,o.length],face:[0,l.length]}}},tp=(e,n,t,r)=>{const i=new Map,o=[],l=[],u=[],s=n.map((c,f)=>"sb".includes(c)?Gc(f):"").join(""),a=s.length>0?new RegExp(`[^${s}]`,"g"):null;for(let c=0;c<e.ranges.vertex[1];c++){const f=e.vertex[c];f.word.replace(a,"").length%2===1?(f.vertex=NaN,i.set(f.i,[])):o.push(f)}for(let c=0;c<e.ranges.edge[1];c++)if(i.has(e.edge[c].start)){const f=i.get(e.edge[c].start);f.push(e.edge[c].end),f.word||(f.word=e.edge[c].word),i.get(e.edge[c].start).push(e.edge[c].end)}else if(i.has(e.edge[c].end)){const f=i.get(e.edge[c].end);f.push(e.edge[c].start),f.word||(f.word=e.edge[c].word),i.get(e.edge[c].end).push(e.edge[c].start)}else l.push(e.edge[c]);const d=Array.from(i.keys());for(let c=0;c<i.size;c++){const f=d[c],p=i.get(f),m=i.get(f);for(let y=0;y<p.length;y++)for(let E=0;E<m.length;E++)p[y]<=m[E]||l.push({start:p[y],end:m[E],word:m.word})}for(let c=0;c<l.length;c++){const f=l[c];for(let p=0;p<2;p++){const m=p?"start":"end",y=f[m];for(let E=0;E<i.size&&!(d[E]>y);E++)f[m]--}}for(let c=0;c<e.ranges.face[1];c++){const f=e.face[c],p=[];for(let m=0;m<f.vertices.length;m++)i.has(f.vertices[m])||p.push(f.vertices[m]);u.push({...f,vertices:p})}for(let c=0;c<i.size;c++){const f=d[c],p=i.get(f);u.push({vertices:p,word:p.word})}for(let c=0;c<u.length;c++){const f=u[c];for(let p=0;p<f.vertices.length;p++){const m=f.vertices[p];for(let y=0;y<i.size&&!(d[y]>m);y++)f.vertices[p]--}}return{vertex:o,edge:l,face:u,ranges:{vertex:[0,o.length],edge:[0,l.length],face:[0,u.length]}}},rp=(e,n,t,r)=>{const i=[new Map,new Map],o=[],l=[],u=[],s=n.map((c,f)=>c==="ß"?Gc(f):"").join(""),a=s.length>0?new RegExp(`[^${s}]`,"g"):null;for(let c=0;c<e.ranges.vertex[1];c++){const f=e.vertex[c];i[f.word.replace(a,"").length%2].set(f.i,[])}o.push(...e.vertex);const d=[new Map,new Map];for(let c=0;c<2;c++){for(let p=0;p<e.ranges.edge[1];p++)if(i[c].has(e.edge[p].start)){d[c].has(e.edge[p].start)||d[c].set(e.edge[p].start,[]);const m=i[c].get(e.edge[p].start);m.push(e.edge[p].end),m.word||(m.word=e.edge[p].word),d[c].get(e.edge[p].start).push(e.edge[p].end)}else if(i[c].has(e.edge[p].end)){d[c].has(e.edge[p].end)||d[c].set(e.edge[p].end,[]);const m=i[c].get(e.edge[p].end);m.push(e.edge[p].start),m.word||(m.word=e.edge[p].word),d[c].get(e.edge[p].end).push(e.edge[p].start)}else l.push(e.edge[p]);const f=Array.from(d[c].keys());for(let p=0;p<d[c].size;p++){const m=f[p],y=d[c].get(m),E=i[c].get(m);for(let h=0;h<y.length;h++)for(let v=0;v<E.length;v++)y[h]<=E[v]||l.push({start:y[h],end:E[v],word:E.word})}}for(let c=0;c<2;c++){const f=Array.from(d[c].keys());for(let p=0;p<e.ranges.face[1];p++){const m=e.face[p],y=[];for(let E=0;E<m.vertices.length;E++)i[c].has(m.vertices[E])||y.push(m.vertices[E]);u.push({...m,vertices:y})}for(let p=0;p<d[c].size;p++){const m=f[p],y=i[c].get(m);u.push({vertices:y,word:y.word})}}return{vertex:o,edge:l,face:u,ranges:{vertex:[0,o.length],edge:[0,l.length],face:[0,u.length]}}},ip=`#version 300 es
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
`,op=`#version 300 es
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
  vecN next = mix(iPosition, iTarget, t + DT);
  // Position segments on hypersurface
  if(segments > 1.f) {
    pos = xnormalize(pos);
    next = xnormalize(next);
  }

  vec3 proj = xproject(pos);
  vec3 nextProj = xproject(next) + NOISE;
  vec3 tangent = normalize(proj - nextProj);

  vec3 norm = cross(nextProj, proj);

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
`,lp=`#version 300 es
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
`,up=`#version 300 es
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
  vecN next = trix(iPosition, iCenter, iTarget, t + vec2(DT, 0.f));
  vecN other = trix(iPosition, iCenter, iTarget, t + vec2(0.f, DT));

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
  //   next = trix(iPosition, iCenter, iTarget, t + vec2(DT / (1000.f * length(drdx)), 0.f));
  //   other = trix(iPosition, iCenter, iTarget, t + vec2(0.f, DT / (1000.f * length(drdy))));
  //   if(segments > 1.f) {
  //     next = xnormalize(next);
  //     other = xnormalize(other);
  //   }

  //   drdx = (xproject(next) - proj);
  //   drdy = (xproject(other) - proj);
  // }

  vec3 norm = normalize(cross(drdx, drdy));

  gl_Position = viewProject(proj);

  vColor = color;
  vPosition = proj;
  vNormal = norm;
}
`,sp=`#version 300 es
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
`,ap=`#version 300 es
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
`,ho={vertex:()=>Zv(),edge:e=>bv({segments:e}),face:e=>ep({segments:e})};function cp(e){return{meshes:["vertex","edge","face"],...go(e,"vertex",ap,sp,ho.vertex,1024,e.dimensions,e.showVertices),...go(e,"edge",op,ip,ho.edge,1024,e.dimensions,e.showEdges,["position","target"]),...go(e,"face",up,lp,ho.face,1024,e.dimensions,e.showFaces,["position","target","center"]),changeArity(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].changeArity(n)},updateGeometries(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].updateGeometry(n)},recompilePrograms(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].recompileProgram(n)},updateUniforms(n,t=!1){for(let r=0;r<this.meshes.length;r++){const i=this.meshes[r],o=this[i];if(!t){o.uniforms.curvature.update(n.curvature),o.uniforms.matrix.update(Si(n.matrix));for(let l=4;l<=n.dimensions;l++)o.uniforms[`fov${l}`].update(1/Wc(Ae*n[`fov${l}`]*.5/180));i==="vertex"?o.uniforms.thickness.update(n.vertexThickness):i==="edge"?(o.uniforms.thickness.update(n.edgeThickness),o.uniforms.segments.update(n.curvature&&n.curve?n.segments:1)):(o.uniforms.segments.update(n.curvature&&n.curve?n.segments:1),o.uniforms.opacity.update(Dn[n.ambiance].opacity))}o.uniforms.viewProjection.update(n.camera.viewProjection),o.uniforms.zoom.update(-n.camera.position[2]),Dn[n.ambiance].lighting&&o.uniforms.eye.update(n.camera.eye)}},plotType(n,t,r,i,o=null){const l=this[t];o=o||i;const{dimensions:u}=n,s=Dn[n.ambiance],[a,d]=r;let c=a,f=d;if(t==="face"){let y=0;for(let E=0;E<a;E++){const h=o[E].vertices.length;y+=h<3?0:h===3?1:h}c=y;for(let E=a;E<d;E++){const h=o[E].vertices.length;y+=h<3?0:h===3?1:h}f=y}l.instances<f&&l.extendAttributes(f),l.count=f;const p=u>4?9:u;let m=c;for(let y=a;y<d;y++){let E=[];const h=o[y];if(t==="vertex")E.push({...h,position:h.vertex,type:t});else if(t==="edge")E.push({...h,position:i[h.start].vertex,target:i[h.end].vertex,type:t});else{if(h.vertices.length<3)continue;if(h.vertices.length===3)E.push({...h,position:i[h.vertices[0]].vertex,target:i[h.vertices[1]].vertex,center:i[h.vertices[2]].vertex});else{const v=new Array(h.vertices.length);for(let x=0;x<h.vertices.length;x++)v[x]=i[h.vertices[x]].vertex;const g=new Array(u).fill(0);for(let x=0;x<v.length;x++){const w=v[x];for(let I=0;I<u;I++)g[I]+=w[I]}for(let x=0;x<u;x++)g[x]/=v.length;for(let x=0;x<v.length;x++){const w={...h,position:v[x],target:v[(x+1)%v.length],center:g};h.word.length%2===(n.curvature>0?0:1)&&([w.position,w.target]=[w.target,w.position]),E.push(w)}}}for(let v=0;v<E.length;v++){const g=E[v];for(let w=0;w<u;w++)for(let I=0;I<l.varying.length;I++){const N=l.varying[I];l.attributes[N].data[m*p+w]=g[N][w]}const x=s.color(g,t,n);l.attributes.color.data[m*3+0]=x[0],l.attributes.color.data[m*3+1]=x[1],l.attributes.color.data[m*3+2]=x[2],m++}for(let v=0;v<l.varying.length;v++){const g=l.varying[v];l.attributes[g].update(c,f)}l.attributes.color.update(c,f)}},preprocess(n,t){let r={vertex:n.vertex,edge:n.edge,face:n.face,ranges:t};return n.mirrors.some(i=>"sb".includes(i))&&(r=tp(r,n.mirrors,n.dimensions,n.curvature)),n.mirrors.some(i=>i==="ß")&&(r=rp(r,n.mirrors,n.dimensions,n.curvature)),n.mirrors.some(i=>"db".includes(i))&&(r=np(r,n.mirrors,n.dimensions,n.curvature)),r},plot(n,t){const{vertex:r,edge:i,face:o,ranges:l}=this.preprocess(n,t);for(let u=0;u<this.meshes.length;u++){const s=this.meshes[u];this[s].visible&&this.plotType(n,s,l[s],r,s!=="vertex"?s==="face"?o:i:null)}}}}const fp=`#version 300 es
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
`,dp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,vp=`#version 300 es
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
`,pp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,hp=`#version 300 es
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
`,mp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,gp=`#version 300 es
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
`,yp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,xp=`#version 300 es
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
`,Ep=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`;function wp(e){return{..._t(e,"oit",yp,gp,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),..._t(e,"down",mp,hp,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),..._t(e,"up",Ep,xp,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),..._t(e,"afterImage",dp,fp,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),..._t(e,"bloom",pp,vp,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function Sp(e){const{gl:n}=e,t=Dn[e.ambiance],r=e.msaa?We(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),yo(e,e.rb.base,n.RGBA8,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,e.rb.base),yo(e,e.rb.depth,n.DEPTH_COMPONENT24,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),e.fb.oit&&(n.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(n.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(n.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&n.deleteRenderbuffer(e.rb.depth_copy),t.opacity<1&&t.transparency==="oit"&&(e.fb.oit=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),r?(e.rb.depth_copy=n.createRenderbuffer(),yo(e,e.rb.depth_copy,n.DEPTH_COMPONENT24),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth_copy)):n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),e.textures.oitAccum=ln(e,n.RGBA16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=ln(e,n.R16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT1,n.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(n.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(n.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(n.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(n.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),t.afterImage&&(e.fb.afterImage=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=ln(e,n.RGBA8),e.textures.afterImageScreen=ln(e,n.RGBA8),e.textures.afterImageOutScreen=ln(e,n.RGBA8)),e.fb.kawase&&(n.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(n.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let i=0;i<e.textures.kawase.length;i++)n.deleteTexture(e.textures.kawase[i].texture);e.textures.kawase=null}if(e.textures.blur&&(n.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(n.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),t.glow){e.fb.kawase=n.createFramebuffer(),e.fb.bloom=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let i=0;i<t.glow.steps;i++)e.textures.kawase[i]=ln(e,n.RGBA8,t.glow.pow**-i);e.textures.blur=ln(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.blur.texture,0),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=ln(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.bloom.texture,0)}}const Qc=window.location.search.includes("stats");let qr;Qc&&(qr=new qv,qr.dom.id="stats",document.body.appendChild(qr.dom));const n0=e=>{const n=document.createElement("canvas");n.id="webgl2",document.body.appendChild(n);const t=n.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:t},!t){console.error("Unable to initialize WebGL. Your browser may not support it.");return}t.getExtension("EXT_color_buffer_float"),t.enable(t.DEPTH_TEST);const r={zoom:1,fov:Ae/3,position:[0,0,-e.zoom],update(){const a=t.canvas.clientWidth/t.canvas.clientHeight;this.zoom=We(t.canvas.clientWidth/t.canvas.clientHeight,1),this.eye=[0,0,this.position[2]];const d=Lv(this.eye,[0,0,0],[0,1,0]),c=Dv(this.fov,a,.01,1e3,this.zoom);this.viewProjection=Si(Xr(c,d))}};r.update();const i=wp(e),o=cp(e),l={base:t.createRenderbuffer(),depth:t.createRenderbuffer()},u={base:t.createFramebuffer()};return{...e,gl:t,camera:r,meshes:o,passes:i,rb:l,fb:u,textures:{}}},t0=(e,n)=>{e.meshes[n].visible=e[n==="vertex"?"showVertices":n==="edge"?"showEdges":"showFaces"]},r0=(e,n=null)=>{if(e.currentOrder===0||n===null&&e.ranges.length===0||n!==null&&n>=e.ranges.length)return;const t=n!==null?e.ranges[n]:{vertex:[e.ranges[0].vertex[0],e.ranges[e.currentOrder-1].vertex[1]],edge:[e.ranges[0].edge[0],e.ranges[e.currentOrder-1].edge[1]],face:[e.ranges[0].face[0],e.ranges[e.currentOrder-1].face[1]]};e.meshes.plot(e,t),document.title=`Coxeter Explorer - ${e.spaceType.type==="finite"?"S":e.spaceType.type==="affine"?"E":"H"}^${e.dimensions} ${e.currentOrder<e.order?`(${e.currentOrder}/${e.order})…`:""}- ${e.vertex.length} vertices, ${e.edge.length} edges, ${e.face.length} faces`},i0=e=>{e.camera.fov=Ae*e.fov3/180,e.camera.update(),e.meshes.updateUniforms(e,!0)},o0=e=>{const n=Dn[e.ambiance];e.gl.clearColor(...n.background),n.glow&&(e.passes.bloom.uniforms.exposure.update(n.glow.exposure),e.passes.bloom.uniforms.strength.update(n.glow.strength),e.passes.down.uniforms.offset.update(n.glow.offset.down),e.passes.up.uniforms.offset.update(n.glow.offset.up)),n.afterImage&&e.passes.afterImage.uniforms.strength.update(n.afterImage)},Np=e=>{Qc&&qr.update();const{gl:n}=e,t=e.msaa?We(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,r=Dn[e.ambiance];Ip(n.canvas,e.subsampling)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),Sp(e),e.camera.update(),e.meshes.updateUniforms(e,!0)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),r.culling&&n.enable(n.CULL_FACE),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),e.meshes.vertex.render(e),e.meshes.edge.render(e),e.meshes.face.visible&&r.opacity<1&&r.transparency==="oit"?(t&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),r.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):(r.opacity<1&&r.transparency==="blend"&&(n.enable(n.BLEND),r.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA)),e.meshes.face.render(e));const i=r.afterImage?e.fb.afterImage:r.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,i),r.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let o=e.textures.bloom;if(r.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),r.glow?o=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),r.glow){n.disable(n.BLEND),r.culling&&n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let l=0;l<r.glow.steps;l++){const u=l===0?o:e.textures.kawase[l-1],s=e.textures.kawase[l];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let l=r.glow.steps-1;l>=0;l--){const u=e.textures.kawase[l],s=l===0?e.textures.blur:e.textures.kawase[l-1];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,o.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=Np;const kp={globals:Tv,project:Cv,helpers:Rv,complex:Pv,ease:Iv,lighting:zv},mo=(e,n,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e),on=(e,n,t)=>{let r,i,o;if(n===0)r=i=o=t;else{const l=t<.5?t*(1+n):t+n-t*n,u=2*t-l;r=mo(u,l,e+1/3),i=mo(u,l,e),o=mo(u,l,e-1/3)}return[r,i,o]},Ip=(e,n)=>{n=n||1,n=Math.max(0,n);const t=e.clientWidth*n|0,r=e.clientHeight*n|0;return e.width!==t||e.height!==r?(e.width=t,e.height=r,!0):!1},Tp=(e,n)=>e.replace(/\bvecN\b/g,`vec${n}`).replace(/\bmatN\b/g,`mat${n}`),Es=(e,n,t)=>{var l;const r=Dn[e.ambiance];let i="";r.lighting&&(i+=`#define LIGHTING ${_p.indexOf(r.lighting)}
`);const o=e.easing==="auto"?((l=e.spaceType)==null?void 0:l.type)==="hyperbolic"&&e.projection4!=="inverted"?"quintic":"linear":e.easing;i+=`#define DIMENSIONS ${e.dimensions}
`;for(let u=3;u<=e.dimensions;u++)i+=`#define PROJECTION${u} ${zp.indexOf(e[`projection${u}`])-1}
`;return i+=`#define EASING ${Op.indexOf(o)}
`,r.opacity<1&&r.transparency==="oit"&&(i+=`#define OIT
`),Object.entries({...kp,config:i}).forEach(([u,s])=>{n=n.replace(`#include ${u}`,s),t=t.replace(`#include ${u}`,s)}),[n,t].map(u=>Tp(u,e.dimensions))},Fr=(e,n,t,r,i)=>{if(e.gl.shaderSource(i,r),e.gl.compileShader(i),!e.gl.getShaderParameter(i,e.gl.COMPILE_STATUS)){const l=e.gl.getShaderInfoLog(i);return console.error(`An error occurred compiling the ${n}->${t} shader: ${l}`,{shaderSource:r}),l}},ws=(e,n,t)=>{const{gl:r}=e;if(r.linkProgram(t),!r.getProgramParameter(t,r.LINK_STATUS)){const o=r.getProgramInfoLog(t);return console.error(`Unable to initialize the ${n} shader program: ${o}`),o}},Jc=(e,n,t,r,i=[])=>{const{gl:o}=e,l=o.createProgram(),u=o.createShader(o.VERTEX_SHADER),s=o.createShader(o.FRAGMENT_SHADER);if(Fr(e,n,"vertex",t,u)||Fr(e,n,"fragment",r,s)||(o.attachShader(l,u),o.attachShader(l,s),ws(e,n,l)))return;const a={program:l,vertexShader:u,fragmentShader:s,uniformsDef:i,recompile(d,c,f,p=null){Fr(d,n,"vertex",c,this.vertexShader)||Fr(d,n,"fragment",f,this.fragmentShader)||ws(d,n,this.program)||(p&&(this.uniformsDef=p),this.bindUniforms(d))},bindUniforms(d){this.uniforms={},this.uniformsDef.forEach(({name:c,type:f,value:p})=>{this.uniforms[c]=Rp(d,this.program,c,f),this.uniforms[c].update(p)})}};return a.bindUniforms(e),a},Ot=(e,n,t,r,i,o=null,l=null)=>{const{gl:u}=e;l=l||u.FLOAT;const s=l===u.FLOAT?4:2,a={name:t,mesh:n,indices:Xc,instances:o,data:i,size:r,type:l,update(d=null,c=null){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer),d===null&&c===null?u.bufferData(u.ARRAY_BUFFER,this.data,u.STATIC_DRAW):u.bufferSubData(u.ARRAY_BUFFER,d*this.size*s,this.data,d*this.size,(c-d)*this.size)},extend(d,c,f=!1){if(u.bindVertexArray(this.mesh.vao),this.size=d,this.location=u.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const p=d>4?3:1;this.name==="target"&&(this.location=d>4?6:4),this.name==="center"&&(this.location=d>4?9:5);for(let m=0;m<p;m++)u.enableVertexAttribArray(this.location+m);for(let m=0;m<p;m++)u.vertexAttribPointer(this.location+m,d/p,this.type,!1,d*s,d/p*m*s);if(this.instances)for(let m=0;m<p;m++)u.vertexAttribDivisor(this.location+m,this.instances);c&&(f&&c.length>=this.data.length&&c.set(this.data),this.data=c),this.update()},get(){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const d=new Float32Array(this.data.length);return u.getBufferSubData(u.ARRAY_BUFFER,0,d),d}};return a.buffer=u.createBuffer(),a.extend(r),a},Xc=(e,n,t)=>{const{gl:r}=e;r.bindVertexArray(n);const i=r.createBuffer();return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i),r.bufferData(r.ELEMENT_ARRAY_BUFFER,t,r.STATIC_DRAW),{buffer:i,vao:n,indices:t,count:t.length,update(o){r.bindVertexArray(this.vao),this.indices=o,this.count=o.length,r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,this.buffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,o,r.STATIC_DRAW)}}},Rp=(e,n,t,r)=>{const{gl:i}=e;return{program:n,update(l){if(i.useProgram(this.program),r.startsWith("m")){const u=parseInt(r.slice(1,2));if(u>4)for(let s=0;s<u;s++){const a=i.getUniformLocation(n,`${t}.c${s+1}.v`);if(a!==null&&i.uniform4fv(a,l[s][0]),u-4===1){const d=i.getUniformLocation(n,`${t}.c${s+1}.u`);d!==null&&i.uniform1f(d,l[s][1])}else if(u-4>1){const d=i.getUniformLocation(n,`${t}.c${s+1}.u`);if(d!==null&&i[`uniform${We(u-4,4)}fv`](d,l[s][1]),u-8===1){const c=i.getUniformLocation(n,`${t}.c${s+1}.t`);c!==null&&i.uniform1f(c,l[s][2])}}}else{const s=i.getUniformLocation(n,t);s!==null&&i[`uniformMatrix${r.slice(1)}`](s,!1,l)}}else{const u=i.getUniformLocation(n,t);u!==null&&i[`uniform${r}`](u,l)}},get(){i.useProgram(this.program);const l=i.getUniformLocation(n,t);if(l!==null)return i.getUniform(this.program,l)}}},ln=(e,n,t=null)=>{const{gl:r}=e,i=t?~~(t*r.drawingBufferWidth):r.drawingBufferWidth,o=t?~~(t*r.drawingBufferHeight):r.drawingBufferHeight,l=r.createTexture();return r.bindTexture(r.TEXTURE_2D,l),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texStorage2D(r.TEXTURE_2D,1,n,i,o),{texture:l,width:i,height:o}},_t=(e,n,t,r,i=[])=>{const o={name:n,vertex:t,fragment:r,...Jc(e,n,t,r,i),recompileProgram(l){this.recompile(l,this.vertex,this.fragment,i)}};return{[n]:o}},go=(e,n,t,r,i,o,l,u=!0,s=["position"])=>{const{gl:a}=e,d=i(e.curve?e.segments:1),c=p=>[{name:"viewProjection",type:"m4fv",value:Si(nn(4))},{name:"matrix",type:`m${p.dimensions}fv`,value:Si(p.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"curvature",type:"1f",value:0},{name:"zoom",type:"1f",value:1},...["edge","face"].includes(n)?[{name:"segments",type:"1f",value:p.curve?p.segments:1}]:[],...["vertex","edge"].includes(n)?[{name:"thickness",type:"1f",value:0}]:[{name:"opacity",type:"1f",value:0}],...Xv(4,p.dimensions+1,1,!0).map(m=>({name:`fov${m}`,type:"1f",value:p[`fov${m}`]}))];l=l>4?9:l;const f={attributes:{},varying:s,vertex:t,type:n,fragment:r,...Jc(e,n,...Es(e,t,r),c(e)),recompileProgram(p){const[m,y]=Es(p,this.vertex,this.fragment);this.recompile(p,m,y,c(p))},changeArity(p){p=p>4?9:p,this.arity!==p&&(this.arity=p,s.forEach(m=>{this.attributes[m].extend(p,new Float32Array(this.instances*p),!1)}))},extendAttributes(p){this.instances=p,s.forEach(m=>{this.attributes[m].extend(this.arity,new Float32Array(p*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(p*3),!0)},updateGeometry(p){const m=i(p.curvature&&p.curve?p.segments:1);this.indices.update(new Uint16Array(m.indices)),this.attributes.vertex.extend(3,new Float32Array(m.vertices)),this.attributes.uv.extend(2,new Float32Array(m.uvs)),this.attributes.normal.extend(3,new Float32Array(m.normals))},render(p){!this.count||!this.visible||(a.useProgram(this.program),a.bindVertexArray(this.vao),a.drawElementsInstanced(a.TRIANGLES,this.indices.count,a.UNSIGNED_SHORT,0,this.count))}};return f.visible=u,f.vao=a.createVertexArray(),f.indices=Xc(e,f.vao,new Uint16Array(d.indices)),f.attributes.vertex=Ot(e,f,"vertex",3,new Float32Array(d.vertices)),f.attributes.uv=Ot(e,f,"uv",2,new Float32Array(d.uvs)),f.attributes.normal=Ot(e,f,"normal",3,new Float32Array(d.normals)),f.attributes.color=Ot(e,f,"color",3,new Float32Array(o*3),1),s.forEach(p=>{f.attributes[p]=Ot(e,f,p,l,new Float32Array(o*l),1)}),f.arity=l,f.instances=o,f.count=0,{[n]:f}},yo=(e,n,t,r)=>{const{gl:i}=e;i.bindRenderbuffer(i.RENDERBUFFER,n),r?i.renderbufferStorageMultisample(i.RENDERBUFFER,r,t,i.drawingBufferWidth,i.drawingBufferHeight):i.renderbufferStorage(i.RENDERBUFFER,t,i.drawingBufferWidth,i.drawingBufferHeight),i.bindRenderbuffer(i.RENDERBUFFER,null)},Cp=document.createElement("canvas"),Ss=Cp.getContext("webgl2"),Pp=Ss.getParameter(Ss.MAX_SAMPLES),zp=["perspective","stereographic","orthographic","klein","inverted","joukowsky","upperhalf","band","cross","heart","teardrop","square","ring","sinusoidal","SC_Triangle","SC_Square","SC_Pentagon","SC_Hexagon"],Op=["auto","linear","sine","quadratic","cubic","quartic","quintic","exponential","circular","back","elastic","bounce","inverse_sine","inverse_quadratic","inverse_cubic","inverse_quartic","inverse_quintic"],l0=["","knuthbendix","toddcoxeter","fundamental"],_p=["lambert","phong","blinn-phong","toon"],Dn={neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},exposure:.75,lighting:!1,opacity:.05,transparency:"blend",color:({word:e})=>on(e.length*.17%1,.5,.6)},synthwave:{background:[...on(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},exposure:.75,lighting:!1,opacity:.12,afterImage:.7,transparency:"blend",color:({word:e})=>on((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],glow:!1,lighting:"blinn-phong",opacity:.4,transparency:"oit",color:({word:e})=>on(e.length*.03%1,1,.8)},shape:{background:[1,1,1,1],glow:!1,lighting:"lambert",opacity:.75,transparency:"oit",color:({word:e,vertices:n},t)=>t==="face"?on((n.length-2)*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],glow:!1,lighting:"toon",opacity:.6,transparency:"blend",color:({word:e},n,{dimensions:t,showFaces:r})=>{const i=e.length?Jv(e[e.length-1])/t:0;return on(i%1,1,n==="face"?.6:r?.05:.8)}},pure:{background:[0,0,0,1],glow:!1,lighting:"lambert",opacity:1,color:({word:e})=>on(e.length*.03%1,.75,.7)},plain:{extended:!0,background:[1,1,1,1],glow:!1,lighting:!1,opacity:1,color:({word:e})=>on(e.length*.06%1,.7,.5)},plainblack:{extended:!0,background:[1,1,1,1],glow:!1,lighting:!1,opacity:1,color:({word:e},n)=>n==="face"?new Array(3).fill(1-Kv(.9,e.length+1)):[0,0,0]}},Ns={dimensions:4,coxeter:[[1,5,2,2],[5,1,3,2],[2,3,1,4],[2,2,4,1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],matrix:[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],mirrors:[1,0,0,0],extended:!1,order:10,curve:!0,segments:32,easing:"auto",showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,showFaces:!1,grouper:"",controls:"space",ambiance:"neon",centered:null,zoom:1.5,fov3:90,projection3:"perspective",fov4:90,projection4:"stereographic",msaa:window.devicePixelRatio<=1,msaaSamples:Pp,subsampling:window.devicePixelRatio},jp=e=>{if(e.coxeter.length!==e.dimensions||e.coxeter.some(n=>n.length!==e.dimensions)){const n=e.coxeter;e.coxeter=new Array(e.dimensions).fill().map((t,r)=>new Array(e.dimensions).fill().map((i,o)=>r===o?1:r===o+1||r+1===o?3:2));for(let t=0;t<We(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.coxeter[t][r]=n[t][r],e.coxeter[r][t]=n[t][r]}if(e.mirrors.length!==e.dimensions){const n=e.mirrors;e.mirrors=new Array(e.dimensions).fill(0);for(let t=0;t<We(n.length,e.dimensions);t++)e.mirrors[t]=n[t]}if(e.stellation.length!==e.dimensions||e.stellation.some(n=>n.length!==e.dimensions)){const n=e.stellation;e.stellation=new Array(e.dimensions).fill().map(()=>new Array(e.dimensions).fill(1));for(let t=0;t<We(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.stellation[t][r]=n[t][r],e.stellation[r][t]=n[r][t]}return e},u0=(e,n=[])=>{const t={...e},r=[];Object.entries(t).forEach(([i,o])=>{typeof Ns[i]=="number"||i.startsWith("fov")?(o===""||isNaN(o))&&(delete t[i],r.push(i)):Array.isArray(Ns[i])&&(Array.isArray(o[0])?o.find(l=>l.find(u=>o===""||i!=="coxeter"&&isNaN(u)))&&(delete t[i],r.push(i)):o.find(l=>o===""||isNaN(l)&&!(i==="mirrors"&&Ov.includes(l)))&&(delete t[i],r.push(i)))}),r.includes("coxeter")||jp(t),(t.matrix.length!==t.dimensions||t.matrix.some(i=>i.length!==t.dimensions))&&(t.matrix=nn(t.dimensions)),n.includes("dimensions")&&t.dimensions>=4&&(t.projection3="perspective");for(let i=4;i<=9;i++)i<=t.dimensions&&!t[`fov${i}`]&&!r.includes(`fov${i}`)&&(t[`fov${i}`]=90),i<=t.dimensions&&(!t[`projection${i}`]||n.includes("dimensions"))&&!r.includes(`projection${i}`)&&(t[`projection${i}`]=i===t.dimensions?t[`projection${i+1}`]||"stereographic":"perspective"),i>t.dimensions&&t[`fov${i}`]&&delete t[`fov${i}`],i>t.dimensions&&t[`projection${i}`]&&delete t[`projection${i}`];return{params:t,badParams:r}},Mp=(e,n,t,r,i)=>{let o=!0,l=0,u=1;if(i&&["∞","inf","Infinity"].includes(e))e="∞",l=0;else if(i&&e.endsWith("i")){const s=e.slice(0,-1);l=-(s===""?1:parseInt(s)),e=`${l===-1?"":-l}i`}else if(e.includes("/")){const[s,a]=e.split("/");l=s===""?"":parseInt(s),u=a===""?"":parseInt(a),u===1?e=`${l}`:e=`${l}/${u}`}else l=e===""?"":parseInt(e);return o=!(i&&l===1||l===""||isNaN(l)||l<n||l>t||r%1===0&&l%r!==0||isNaN(u)||u<n||u>t||r%1===0&&u%r!==0),{valid:o,raw:e,value:l,fraction:u}};function Ap({name:e,label:n,min:t=0,max:r=1/0,step:i=1,value:o,coxeter:l,fraction:u,fractionName:s,toggler:a,togglerName:d,onChange:c,...f}){l&&(t=-1/0);const p=X.useCallback(()=>o<0&&l?`${o===-1?"":-o}i`:o===0&&l?"∞":s&&u>1?`${o}/${u}`:`${o}`,[l,u,s,o]),[m,y]=X.useState(p);X.useEffect(()=>{y(p())},[l,p,u,s,o]);const[E,h]=X.useState(!0),v=X.useCallback(N=>{const k=Mp(N,t,r,i,l);y(k.raw),h(k.valid),k.valid&&(c(e,k.value),s&&c(s,k.fraction))},[l,s,r,t,e,c,i]),g=X.useCallback(()=>{if(!E){v(l?"3":`${t}`);return}if(l){if(m==="2"){v("∞");return}if(m==="∞"){v("i");return}if(m.endsWith("i")){const N=m.slice(0,-1);let k=(N===""?1:parseInt(N))+1;v(`${k}i`);return}}if(m!==`${t}`)if(m.includes("/"))v((parseInt(m.split("/")[0])-i).toString());else{const N=parseInt(m)-i;i>0&&i<1?v(N.toFixed(i.toString().split(".")[1].length)):v(N.toString())}},[l,t,m,i,v,E]),x=X.useCallback(()=>{if(!E){v(l?"3":`${t}`);return}if(l){if(m==="∞"){v("2");return}if(m==="i"){v("∞");return}if(m.endsWith("i")){const N=m.slice(0,-1);let k=parseInt(N)-1;k===1&&(k=""),v(`${k}i`);return}}if(m!==`${r}`)if(m.includes("/"))v((parseInt(m.split("/")[0])+i).toString());else{const N=parseInt(m)+i;i>0&&i<1?v(N.toFixed(i.toString().split(".")[1].length)):v(N.toString())}},[l,r,t,m,i,v,E]),w=N=>{const k=N.target.value;v(k)},I=N=>{c(N.target.name,N.target.checked)};return T.jsxs("label",{className:`number ${E?"valid":"invalid"}`,children:[n&&T.jsx("span",{className:"number-label",children:n}),d&&T.jsx("input",{type:"checkbox",name:d,checked:a,onChange:I}),(!d||a)&&T.jsxs("div",{className:"number-control",children:[T.jsx("input",{type:"text",name:e,value:m,style:{width:`${m.length+.25}ch`},onChange:w,...f}),T.jsx("button",{className:"plusminus minus",onClick:g,tabIndex:-1,children:"−"}),T.jsx("button",{className:"plusminus plus",onClick:x,tabIndex:-1,children:"+"})]})]})}function Fp({i:e,j:n,value:t,stellation:r,onChange:i}){return T.jsx("div",{className:"coxeter-value",children:T.jsx(Ap,{name:`coxeter-${e}-${n}`,value:t,onChange:i,coxeter:!0,fraction:r,fractionName:`stellation-${e}-${n}`})})}function ks({type:e}){return T.jsx("svg",{className:"coxeter-link",viewBox:"0 0 24 16",children:T.jsx("path",{d:"M 0 8 L 24 8",strokeWidth:e==="bold"?3:1,stroke:"currentColor",strokeDasharray:e==="dashed"?"1 1":""})})}const Dt=6,On=14,Lt={active:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:On}),T.jsx("circle",{cx:"16",cy:"16",r:Dt,fill:"currentColor"})]}),inactive:T.jsx(T.Fragment,{children:T.jsx("circle",{cx:"16",cy:"16",r:Dt,fill:"currentColor"})}),dual:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:Dt,fill:"currentColor"}),T.jsx("path",{d:"M 16 2 L 16 10"}),T.jsx("path",{d:"M 16 10 L 16 22",stroke:"black"}),T.jsx("path",{d:"M 16 22 L 16 30"})]}),snub:T.jsx(T.Fragment,{children:T.jsx("circle",{cx:"16",cy:"16",r:On})}),dualsnub:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:On-4}),T.jsx("path",{d:"M 16 0 L 16 32"})]}),holosnub:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:On}),T.jsx("circle",{cx:"16",cy:"16",r:Dt})]}),custom:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:On}),T.jsx("path",{d:"M 10 14 L 10 18 L 22 18 L 22 14"})]}),activeVoid:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:On}),T.jsx("path",{d:"M 6 6 L 26 26"}),T.jsx("path",{d:"M 6 26 L 26 6"})]}),void:T.jsxs(T.Fragment,{children:[T.jsx("path",{d:"M 10 10 L 22 22"}),T.jsx("path",{d:"M 10 22 L 22 10"})]})};function Dp({index:e,value:n,onChange:t}){const r=X.useRef(null),[i,o]=X.useState(!1),l=$c(n),u=()=>{const c=Ar[l==="inactive"?"active":"inactive"];t(e,c)},s=d=>{const c=Object.keys(Lt),f=c.indexOf(l),p=c[(c.length+f+su(d.deltaY))%c.length],m=Ar[p];t(e,m)},a=d=>{d.preventDefault(),o(!i)};return X.useEffect(()=>{const d=c=>{r.current.contains(c.target)||o(!1)};if(i)return window.addEventListener("mouseup",d),()=>{window.removeEventListener("mouseup",d)}},[i]),T.jsxs("div",{className:"coxeter-node",title:l,ref:r,children:[T.jsx("svg",{className:`coxeter-graphic ${l}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:u,onContextMenu:a,onWheel:s,children:Lt[l]}),l==="custom"&&T.jsx("input",{type:"number",value:n,step:".01",style:{width:`${n.toString().length+1.5}ch`},onChange:d=>t(e,d.target.value)}),i&&T.jsx("div",{className:"coxeter-node-menu",children:Object.keys(Lt).filter(d=>d!==l).map(d=>T.jsx("div",{title:d,onClick:()=>{t(e,Ar[d]),o(!1)},children:T.jsx("svg",{className:`coxeter-graphic ${d}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:()=>{t(e,Ar[d]),o(!1)},children:Lt[d]})},d))})]})}const Is=(e,n)=>e[n].some((t,r)=>r<n&&t<0)?"dashed":e[n].some((t,r)=>r<n&&t===0)?"bold":"solid";function s0({dimensions:e,coxeter:n,mirrors:t,stellation:r,extended:i,onChange:o}){const[l,u]=X.useState(1),s=X.useRef(),a=X.useCallback(()=>{if(o("extended",!i),i){const f=n.map(p=>p.slice());for(let p=0;p<e;p++)for(let m=0;m<p-1;m++)f[p][m]=2,f[m][p]=2;o("coxeter",f)}},[i,o,n,e]),d=X.useCallback((f,p)=>{if(f.startsWith("coxeter")){const[m,y]=f.split("-").slice(1).map(h=>+h),E=n.map(h=>h.slice());E[m][y]=p,E[y][m]=p,o("coxeter",E)}if(f.startsWith("stellation")){const[m,y]=f.split("-").slice(1).map(h=>+h),E=r.map(h=>h.slice());E[m][y]=p,E[y][m]=p,o("stellation",E)}},[n,o,r]),c=X.useCallback((f,p)=>{let m=t.slice();m[f]=p,(m.includes("d")||m.includes("b"))&&(m=m.map((y,E)=>y==="s"?"b":y&&y!=="b"?"d":y)),o("mirrors",m)},[t,o]);return X.useEffect(()=>{const f=()=>{if(!s.current)return;const p=We(1,(window.innerWidth-125)/s.current.offsetWidth);u(p)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[e]),T.jsxs("aside",{className:"coxeters",style:l===1?void 0:{transform:`scale(${l})`},ref:s,children:[T.jsx("div",{className:"coxeter-matrix",children:[...Array(e).keys()].map(f=>T.jsxs(X.Fragment,{children:[f>0&&T.jsx("div",{className:"coxeter-column",children:[...Array(f).keys()].map(p=>(i||f===p+1)&&T.jsx(Fp,{i:f,j:p,value:n[f][p],stellation:r[f][p],onChange:d},`${f}x${p}`))}),f>0&&T.jsx(ks,{type:Is(n,f)}),T.jsx(Dp,{index:f,value:t[f],onChange:c}),f<e-1&&T.jsx(ks,{type:Is(n,f+1)})]},f))}),T.jsxs("div",{className:"coxeter-toggles",children:[e>2&&T.jsx("button",{className:"button",onClick:()=>o("dimensions",e-1),title:"Decrease dimensions",children:"−"}),e<9&&T.jsx("button",{className:"button",onClick:()=>o("dimensions",e+1),title:"Increase dimensions",children:"+"}),T.jsx("button",{className:"button",onClick:a,title:"extended mode",children:i?"▲":"▼"})]})]})}const un=32,Ts=18;function a0({coxeter:e,mirrors:n,stellation:t}){const r=e.length,i=n.map((y,E)=>{const h=$c(y);return{n:E,type:h,i:E,j:0,r:h==="inactive"?Dt:On}});for(let y=0;y<r;y++)for(let E=r-1;E>y+1;E--)if(e[y][E]!==2){const h=y===0,v=E===r-1,g=!h&&!v,x=E-y+1,w=U(x-1)/2,I=2*Math.PI/x,N={i:i[y].i+w,j:i[y].j+(g?-w*$e((2+x)/4*I):0)};for(let k=y;k<=E;k++){let A=k-y+(h?1:v?x/2:(2+x)/4);i[k].i=N.i+w*Xe(I*A),i[k].j=N.j+w*$e(I*A)}for(let k=E+1;k<r;k++)i[k].i-=E-y,i[k].i+=2*w;y=E-1;break}const o=[];for(let y=0;y<r;y++)for(let E=0;E<y;E++)if(e[y][E]!==2){const h=e[y][E],v=t[y][E];let g=`${h===0?"∞":h<0?`${h===-1?"":-h}i`:h}`;v>1&&(g+=`/${v}`),g==="3"&&(g=""),o.push({source:i[y],target:i[E],value:g,type:h<0?"dashed":h===0?"bold":"solid"})}const l=i.map(({i:y})=>y),u=i.map(({j:y})=>y),s=We(...l),a=Kn(...l),d=We(...u),c=Kn(...u);let f=0,p=0;for(let y=0;y<i.length;y++){const E=i[y];E.x=(E.i-s)*2*un,E.y=(E.j-d)*2*un,f=Kn(f,E.x),p=Kn(p,E.y)}const m=y=>y+Kn(y-1,0);return T.jsxs("svg",{className:"coxeter-diagram",viewBox:`${-un/2} ${-un/2} ${f+un} ${p+un}`,width:`${m(a-s+1)}em`,height:`${m(c-d+1)+.5}em`,strokeWidth:"2",fill:"transparent",stroke:"currentColor",children:[i.map(({n:y,type:E,x:h,y:v,r:g})=>T.jsx("g",{className:"coxeter-diagram-node",transform:`translate(${h-un/2} ${v-un/2})`,title:E,children:Lt[E]},y)),o.map(({source:y,target:E,value:h,type:v})=>{const g={x:y.x,y:y.y},x={x:E.x,y:E.y},w={},I=Gv(x.y-g.y,x.x-g.x);return w.x=(g.x+x.x)/2+(Ts+(h.length-2)*5)*Xe(I-Ae/2),w.y=(g.y+x.y)/2+Ts*$e(I-Ae/2),g.x+=(y.r+1)*Xe(I),g.y+=(y.r+1)*$e(I),x.x-=(E.r+1)*Xe(I),x.y-=(E.r+1)*$e(I),T.jsxs("g",{className:"coxeter-diagram-link",children:[T.jsx("path",{d:`M ${g.x} ${g.y} L ${x.x} ${x.y}`,strokeWidth:v==="bold"?"4":"2",stroke:"currentColor",strokeDasharray:v==="dashed"?"1 1":""}),T.jsx("text",{style:{fontSize:"1.25rem"},stroke:"none",fill:"currentColor",textAnchor:"middle",dominantBaseline:"middle",x:w.x,y:w.y,children:h})]},`${y.n}-${E.n}`)})]})}export{Dn as A,Xv as B,a0 as C,zp as D,s0 as E,n0 as F,u0 as G,Qp as H,bp as I,Bp as J,Zp as K,vu as L,jp as M,Ap as N,Ae as P,Mv as a,Ve as b,Si as c,e0 as d,Np as e,o0 as f,Sp as g,qp as h,t0 as i,Kn as j,Up as k,$p as l,Xr as m,Bv as n,Hv as o,r0 as p,nn as q,X as r,Lp as s,T as t,i0 as u,Ns as v,We as w,Hp as x,l0 as y,Op as z};
