(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();var cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ff(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Us={exports:{}},Ci={},$s={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),df=Symbol.for("react.portal"),vf=Symbol.for("react.fragment"),pf=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),mf=Symbol.for("react.provider"),gf=Symbol.for("react.context"),yf=Symbol.for("react.forward_ref"),xf=Symbol.for("react.suspense"),Ef=Symbol.for("react.memo"),Sf=Symbol.for("react.lazy"),yu=Symbol.iterator;function wf(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var Bs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hs=Object.assign,Vs={};function yt(e,n,t){this.props=e,this.context=n,this.refs=Vs,this.updater=t||Bs}yt.prototype.isReactComponent={};yt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};yt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ws(){}Ws.prototype=yt.prototype;function wo(e,n,t){this.props=e,this.context=n,this.refs=Vs,this.updater=t||Bs}var No=wo.prototype=new Ws;No.constructor=wo;Hs(No,yt.prototype);No.isPureReactComponent=!0;var xu=Array.isArray,Gs=Object.prototype.hasOwnProperty,ko={current:null},Qs={key:!0,ref:!0,__self:!0,__source:!0};function Ks(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Gs.call(n,r)&&!Qs.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var s=Array(u),a=0;a<u;a++)s[a]=arguments[a+2];i.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:pr,type:e,key:l,ref:o,props:i,_owner:ko.current}}function Nf(e,n){return{$$typeof:pr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Io(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function kf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Eu=/\/+/g;function Xi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?kf(""+e.key):n.toString(36)}function Vr(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case pr:case df:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Xi(o,0):r,xu(i)?(t="",e!=null&&(t=e.replace(Eu,"$&/")+"/"),Vr(i,n,t,"",function(a){return a})):i!=null&&(Io(i)&&(i=Nf(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Eu,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",xu(e))for(var u=0;u<e.length;u++){l=e[u];var s=r+Xi(l,u);o+=Vr(l,n,t,s,i)}else if(s=wf(e),typeof s=="function")for(e=s.call(e),u=0;!(l=e.next()).done;)l=l.value,s=r+Xi(l,u++),o+=Vr(l,n,t,s,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function wr(e,n,t){if(e==null)return e;var r=[],i=0;return Vr(e,r,"","",function(l){return n.call(t,l,i++)}),r}function If(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Wr={transition:null},Tf={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Wr,ReactCurrentOwner:ko};D.Children={map:wr,forEach:function(e,n,t){wr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return wr(e,function(){n++}),n},toArray:function(e){return wr(e,function(n){return n})||[]},only:function(e){if(!Io(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=yt;D.Fragment=vf;D.Profiler=hf;D.PureComponent=wo;D.StrictMode=pf;D.Suspense=xf;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tf;D.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hs({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=ko.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)Gs.call(n,s)&&!Qs.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var a=0;a<s;a++)u[a]=arguments[a+2];r.children=u}return{$$typeof:pr,type:e.type,key:i,ref:l,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:gf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mf,_context:e},e.Consumer=e};D.createElement=Ks;D.createFactory=function(e){var n=Ks.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:yf,render:e}};D.isValidElement=Io;D.lazy=function(e){return{$$typeof:Sf,_payload:{_status:-1,_result:e},_init:If}};D.memo=function(e,n){return{$$typeof:Ef,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=Wr.transition;Wr.transition={};try{e()}finally{Wr.transition=n}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,n){return de.current.useCallback(e,n)};D.useContext=function(e){return de.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return de.current.useDeferredValue(e)};D.useEffect=function(e,n){return de.current.useEffect(e,n)};D.useId=function(){return de.current.useId()};D.useImperativeHandle=function(e,n,t){return de.current.useImperativeHandle(e,n,t)};D.useInsertionEffect=function(e,n){return de.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return de.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return de.current.useMemo(e,n)};D.useReducer=function(e,n,t){return de.current.useReducer(e,n,t)};D.useRef=function(e){return de.current.useRef(e)};D.useState=function(e){return de.current.useState(e)};D.useSyncExternalStore=function(e,n,t){return de.current.useSyncExternalStore(e,n,t)};D.useTransition=function(){return de.current.useTransition()};D.version="18.2.0";$s.exports=D;var K=$s.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf=K,Cf=Symbol.for("react.element"),_f=Symbol.for("react.fragment"),Of=Object.prototype.hasOwnProperty,Pf=Rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Df={key:!0,ref:!0,__self:!0,__source:!0};function Xs(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Of.call(n,r)&&!Df.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Cf,type:e,key:l,ref:o,props:i,_owner:Pf.current}}Ci.Fragment=_f;Ci.jsx=Xs;Ci.jsxs=Xs;Us.exports=Ci;var T=Us.exports,Su={},Js={exports:{}},Ie={},Ys={exports:{}},qs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,_){var O=C.length;C.push(_);e:for(;0<O;){var G=O-1>>>1,q=C[G];if(0<i(q,_))C[G]=_,C[O]=q,O=G;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var _=C[0],O=C.pop();if(O!==_){C[0]=O;e:for(var G=0,q=C.length,Er=q>>>1;G<Er;){var Cn=2*(G+1)-1,Ki=C[Cn],_n=Cn+1,Sr=C[_n];if(0>i(Ki,O))_n<q&&0>i(Sr,Ki)?(C[G]=Sr,C[_n]=O,G=_n):(C[G]=Ki,C[Cn]=O,G=Cn);else if(_n<q&&0>i(Sr,O))C[G]=Sr,C[_n]=O,G=_n;else break e}}return _}function i(C,_){var O=C.sortIndex-_.sortIndex;return O!==0?O:C.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var s=[],a=[],c=1,f=null,d=3,p=!1,m=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var _=t(a);_!==null;){if(_.callback===null)r(a);else if(_.startTime<=C)r(a),_.sortIndex=_.expirationTime,n(s,_);else break;_=t(a)}}function x(C){if(y=!1,g(C),!m)if(t(s)!==null)m=!0,Gi(S);else{var _=t(a);_!==null&&Qi(x,_.startTime-C)}}function S(C,_){m=!1,y&&(y=!1,h(k),k=-1),p=!0;var O=d;try{for(g(_),f=t(s);f!==null&&(!(f.expirationTime>_)||C&&!ze());){var G=f.callback;if(typeof G=="function"){f.callback=null,d=f.priorityLevel;var q=G(f.expirationTime<=_);_=e.unstable_now(),typeof q=="function"?f.callback=q:f===t(s)&&r(s),g(_)}else r(s);f=t(s)}if(f!==null)var Er=!0;else{var Cn=t(a);Cn!==null&&Qi(x,Cn.startTime-_),Er=!1}return Er}finally{f=null,d=O,p=!1}}var I=!1,N=null,k=-1,M=5,P=-1;function ze(){return!(e.unstable_now()-P<M)}function St(){if(N!==null){var C=e.unstable_now();P=C;var _=!0;try{_=N(!0,C)}finally{_?wt():(I=!1,N=null)}}else I=!1}var wt;if(typeof v=="function")wt=function(){v(St)};else if(typeof MessageChannel<"u"){var gu=new MessageChannel,af=gu.port2;gu.port1.onmessage=St,wt=function(){af.postMessage(null)}}else wt=function(){E(St,0)};function Gi(C){N=C,I||(I=!0,wt())}function Qi(C,_){k=E(function(){C(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,Gi(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(C){switch(d){case 1:case 2:case 3:var _=3;break;default:_=d}var O=d;d=_;try{return C()}finally{d=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,_){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=d;d=C;try{return _()}finally{d=O}},e.unstable_scheduleCallback=function(C,_,O){var G=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?G+O:G):O=G,C){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=O+q,C={id:c++,callback:_,priorityLevel:C,startTime:O,expirationTime:q,sortIndex:-1},O>G?(C.sortIndex=O,n(a,C),t(s)===null&&C===t(a)&&(y?(h(k),k=-1):y=!0,Qi(x,O-G))):(C.sortIndex=q,n(s,C),m||p||(m=!0,Gi(S))),C},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(C){var _=d;return function(){var O=d;d=_;try{return C.apply(this,arguments)}finally{d=O}}}})(qs);Ys.exports=qs;var zf=Ys.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bs=K,ke=zf;function w(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zs=new Set,qt={};function Vn(e,n){ft(e,n),ft(e+"Capture",n)}function ft(e,n){for(qt[e]=n,e=0;e<n.length;e++)Zs.add(n[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tl=Object.prototype.hasOwnProperty,Af=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wu={},Nu={};function Mf(e){return Tl.call(Nu,e)?!0:Tl.call(wu,e)?!1:Af.test(e)?Nu[e]=!0:(wu[e]=!0,!1)}function Ff(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lf(e,n,t,r){if(n===null||typeof n>"u"||Ff(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var To=/[\-:]([a-z])/g;function Ro(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(To,Ro);te[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(To,Ro);te[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(To,Ro);te[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Co(e,n,t,r){var i=te.hasOwnProperty(n)?te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Lf(n,t,i,r)&&(t=null),r||i===null?Mf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var ln=bs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nr=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),_o=Symbol.for("react.strict_mode"),Rl=Symbol.for("react.profiler"),ea=Symbol.for("react.provider"),na=Symbol.for("react.context"),Oo=Symbol.for("react.forward_ref"),Cl=Symbol.for("react.suspense"),_l=Symbol.for("react.suspense_list"),Po=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),ta=Symbol.for("react.offscreen"),ku=Symbol.iterator;function Nt(e){return e===null||typeof e!="object"?null:(e=ku&&e[ku]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Ji;function At(e){if(Ji===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ji=n&&n[1]||""}return`
`+Ji+e}var Yi=!1;function qi(e,n){if(!e||Yi)return"";Yi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var i=a.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=u);break}}}finally{Yi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?At(e):""}function jf(e){switch(e.tag){case 5:return At(e.type);case 16:return At("Lazy");case 13:return At("Suspense");case 19:return At("SuspenseList");case 0:case 2:case 15:return e=qi(e.type,!1),e;case 11:return e=qi(e.type.render,!1),e;case 1:return e=qi(e.type,!0),e;default:return""}}function Ol(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Qn:return"Portal";case Rl:return"Profiler";case _o:return"StrictMode";case Cl:return"Suspense";case _l:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case na:return(e.displayName||"Context")+".Consumer";case ea:return(e._context.displayName||"Context")+".Provider";case Oo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Po:return n=e.displayName||null,n!==null?n:Ol(e.type)||"Memo";case an:n=e._payload,e=e._init;try{return Ol(e(n))}catch{}}return null}function Uf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ol(n);case 8:return n===_o?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ra(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $f(e){var n=ra(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function kr(e){e._valueTracker||(e._valueTracker=$f(e))}function ia(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ra(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pl(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Iu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Nn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function la(e,n){n=n.checked,n!=null&&Co(e,"checked",n,!1)}function Dl(e,n){la(e,n);var t=Nn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?zl(e,n.type,t):n.hasOwnProperty("defaultValue")&&zl(e,n.type,Nn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Tu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function zl(e,n,t){(n!=="number"||ri(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Mt=Array.isArray;function it(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Nn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Al(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(w(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ru(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(w(92));if(Mt(t)){if(1<t.length)throw Error(w(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Nn(t)}}function oa(e,n){var t=Nn(n.value),r=Nn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Cu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ua(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ua(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ir,sa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function bt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var $t={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bf=["Webkit","ms","Moz","O"];Object.keys($t).forEach(function(e){Bf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),$t[n]=$t[e]})});function aa(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||$t.hasOwnProperty(e)&&$t[e]?(""+n).trim():n+"px"}function ca(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=aa(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Hf=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(e,n){if(n){if(Hf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(w(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(w(61))}if(n.style!=null&&typeof n.style!="object")throw Error(w(62))}}function Ll(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jl=null;function Do(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,lt=null,ot=null;function _u(e){if(e=gr(e)){if(typeof Ul!="function")throw Error(w(280));var n=e.stateNode;n&&(n=zi(n),Ul(e.stateNode,e.type,n))}}function fa(e){lt?ot?ot.push(e):ot=[e]:lt=e}function da(){if(lt){var e=lt,n=ot;if(ot=lt=null,_u(e),n)for(e=0;e<n.length;e++)_u(n[e])}}function va(e,n){return e(n)}function pa(){}var bi=!1;function ha(e,n,t){if(bi)return e(n,t);bi=!0;try{return va(e,n,t)}finally{bi=!1,(lt!==null||ot!==null)&&(pa(),da())}}function Zt(e,n){var t=e.stateNode;if(t===null)return null;var r=zi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(w(231,n,typeof t));return t}var $l=!1;if(en)try{var kt={};Object.defineProperty(kt,"passive",{get:function(){$l=!0}}),window.addEventListener("test",kt,kt),window.removeEventListener("test",kt,kt)}catch{$l=!1}function Vf(e,n,t,r,i,l,o,u,s){var a=Array.prototype.slice.call(arguments,3);try{n.apply(t,a)}catch(c){this.onError(c)}}var Bt=!1,ii=null,li=!1,Bl=null,Wf={onError:function(e){Bt=!0,ii=e}};function Gf(e,n,t,r,i,l,o,u,s){Bt=!1,ii=null,Vf.apply(Wf,arguments)}function Qf(e,n,t,r,i,l,o,u,s){if(Gf.apply(this,arguments),Bt){if(Bt){var a=ii;Bt=!1,ii=null}else throw Error(w(198));li||(li=!0,Bl=a)}}function Wn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ma(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ou(e){if(Wn(e)!==e)throw Error(w(188))}function Kf(e){var n=e.alternate;if(!n){if(n=Wn(e),n===null)throw Error(w(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Ou(i),e;if(l===r)return Ou(i),n;l=l.sibling}throw Error(w(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(w(189))}}if(t.alternate!==r)throw Error(w(190))}if(t.tag!==3)throw Error(w(188));return t.stateNode.current===t?e:n}function ga(e){return e=Kf(e),e!==null?ya(e):null}function ya(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ya(e);if(n!==null)return n;e=e.sibling}return null}var xa=ke.unstable_scheduleCallback,Pu=ke.unstable_cancelCallback,Xf=ke.unstable_shouldYield,Jf=ke.unstable_requestPaint,Q=ke.unstable_now,Yf=ke.unstable_getCurrentPriorityLevel,zo=ke.unstable_ImmediatePriority,Ea=ke.unstable_UserBlockingPriority,oi=ke.unstable_NormalPriority,qf=ke.unstable_LowPriority,Sa=ke.unstable_IdlePriority,_i=null,Ke=null;function bf(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(_i,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:nd,Zf=Math.log,ed=Math.LN2;function nd(e){return e>>>=0,e===0?32:31-(Zf(e)/ed|0)|0}var Tr=64,Rr=4194304;function Ft(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ui(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=Ft(u):(l&=o,l!==0&&(r=Ft(l)))}else o=t&~i,o!==0?r=Ft(o):l!==0&&(r=Ft(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ue(n),i=1<<t,r|=e[t],n&=~i;return r}function td(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ue(l),u=1<<o,s=i[o];s===-1?(!(u&t)||u&r)&&(i[o]=td(u,n)):s<=n&&(e.expiredLanes|=u),l&=~u}}function Hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wa(){var e=Tr;return Tr<<=1,!(Tr&4194240)&&(Tr=64),e}function Zi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function hr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ue(n),e[n]=t}function id(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ue(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Ao(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ue(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var A=0;function Na(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ka,Mo,Ia,Ta,Ra,Vl=!1,Cr=[],hn=null,mn=null,gn=null,er=new Map,nr=new Map,fn=[],ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Du(e,n){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":er.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nr.delete(n.pointerId)}}function It(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=gr(n),n!==null&&Mo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function od(e,n,t,r,i){switch(n){case"focusin":return hn=It(hn,e,n,t,r,i),!0;case"dragenter":return mn=It(mn,e,n,t,r,i),!0;case"mouseover":return gn=It(gn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return er.set(l,It(er.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,nr.set(l,It(nr.get(l)||null,e,n,t,r,i)),!0}return!1}function Ca(e){var n=zn(e.target);if(n!==null){var t=Wn(n);if(t!==null){if(n=t.tag,n===13){if(n=ma(t),n!==null){e.blockedOn=n,Ra(e.priority,function(){Ia(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Wl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);jl=r,t.target.dispatchEvent(r),jl=null}else return n=gr(t),n!==null&&Mo(n),e.blockedOn=t,!1;n.shift()}return!0}function zu(e,n,t){Gr(e)&&t.delete(n)}function ud(){Vl=!1,hn!==null&&Gr(hn)&&(hn=null),mn!==null&&Gr(mn)&&(mn=null),gn!==null&&Gr(gn)&&(gn=null),er.forEach(zu),nr.forEach(zu)}function Tt(e,n){e.blockedOn===n&&(e.blockedOn=null,Vl||(Vl=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,ud)))}function tr(e){function n(i){return Tt(i,e)}if(0<Cr.length){Tt(Cr[0],e);for(var t=1;t<Cr.length;t++){var r=Cr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(hn!==null&&Tt(hn,e),mn!==null&&Tt(mn,e),gn!==null&&Tt(gn,e),er.forEach(n),nr.forEach(n),t=0;t<fn.length;t++)r=fn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<fn.length&&(t=fn[0],t.blockedOn===null);)Ca(t),t.blockedOn===null&&fn.shift()}var ut=ln.ReactCurrentBatchConfig,si=!0;function sd(e,n,t,r){var i=A,l=ut.transition;ut.transition=null;try{A=1,Fo(e,n,t,r)}finally{A=i,ut.transition=l}}function ad(e,n,t,r){var i=A,l=ut.transition;ut.transition=null;try{A=4,Fo(e,n,t,r)}finally{A=i,ut.transition=l}}function Fo(e,n,t,r){if(si){var i=Wl(e,n,t,r);if(i===null)al(e,n,r,ai,t),Du(e,r);else if(od(i,e,n,t,r))r.stopPropagation();else if(Du(e,r),n&4&&-1<ld.indexOf(e)){for(;i!==null;){var l=gr(i);if(l!==null&&ka(l),l=Wl(e,n,t,r),l===null&&al(e,n,r,ai,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else al(e,n,r,null,t)}}var ai=null;function Wl(e,n,t,r){if(ai=null,e=Do(r),e=zn(e),e!==null)if(n=Wn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ma(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ai=e,null}function _a(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yf()){case zo:return 1;case Ea:return 4;case oi:case qf:return 16;case Sa:return 536870912;default:return 16}default:return 16}}var vn=null,Lo=null,Qr=null;function Oa(){if(Qr)return Qr;var e,n=Lo,t=n.length,r,i="value"in vn?vn.value:vn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Qr=i.slice(e,1<r?1-r:void 0)}function Kr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _r(){return!0}function Au(){return!1}function Te(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?_r:Au,this.isPropagationStopped=Au,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),n}var xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jo=Te(xt),mr=V({},xt,{view:0,detail:0}),cd=Te(mr),el,nl,Rt,Oi=V({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rt&&(Rt&&e.type==="mousemove"?(el=e.screenX-Rt.screenX,nl=e.screenY-Rt.screenY):nl=el=0,Rt=e),el)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),Mu=Te(Oi),fd=V({},Oi,{dataTransfer:0}),dd=Te(fd),vd=V({},mr,{relatedTarget:0}),tl=Te(vd),pd=V({},xt,{animationName:0,elapsedTime:0,pseudoElement:0}),hd=Te(pd),md=V({},xt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gd=Te(md),yd=V({},xt,{data:0}),Fu=Te(yd),xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ed={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Sd[e])?!!n[e]:!1}function Uo(){return wd}var Nd=V({},mr,{key:function(e){if(e.key){var n=xd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ed[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uo,charCode:function(e){return e.type==="keypress"?Kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kd=Te(Nd),Id=V({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lu=Te(Id),Td=V({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uo}),Rd=Te(Td),Cd=V({},xt,{propertyName:0,elapsedTime:0,pseudoElement:0}),_d=Te(Cd),Od=V({},Oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pd=Te(Od),Dd=[9,13,27,32],$o=en&&"CompositionEvent"in window,Ht=null;en&&"documentMode"in document&&(Ht=document.documentMode);var zd=en&&"TextEvent"in window&&!Ht,Pa=en&&(!$o||Ht&&8<Ht&&11>=Ht),ju=String.fromCharCode(32),Uu=!1;function Da(e,n){switch(e){case"keyup":return Dd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function za(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function Ad(e,n){switch(e){case"compositionend":return za(n);case"keypress":return n.which!==32?null:(Uu=!0,ju);case"textInput":return e=n.data,e===ju&&Uu?null:e;default:return null}}function Md(e,n){if(Xn)return e==="compositionend"||!$o&&Da(e,n)?(e=Oa(),Qr=Lo=vn=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pa&&n.locale!=="ko"?null:n.data;default:return null}}var Fd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $u(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Fd[e.type]:n==="textarea"}function Aa(e,n,t,r){fa(r),n=ci(n,"onChange"),0<n.length&&(t=new jo("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Vt=null,rr=null;function Ld(e){Ga(e,0)}function Pi(e){var n=qn(e);if(ia(n))return e}function jd(e,n){if(e==="change")return n}var Ma=!1;if(en){var rl;if(en){var il="oninput"in document;if(!il){var Bu=document.createElement("div");Bu.setAttribute("oninput","return;"),il=typeof Bu.oninput=="function"}rl=il}else rl=!1;Ma=rl&&(!document.documentMode||9<document.documentMode)}function Hu(){Vt&&(Vt.detachEvent("onpropertychange",Fa),rr=Vt=null)}function Fa(e){if(e.propertyName==="value"&&Pi(rr)){var n=[];Aa(n,rr,e,Do(e)),ha(Ld,n)}}function Ud(e,n,t){e==="focusin"?(Hu(),Vt=n,rr=t,Vt.attachEvent("onpropertychange",Fa)):e==="focusout"&&Hu()}function $d(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pi(rr)}function Bd(e,n){if(e==="click")return Pi(n)}function Hd(e,n){if(e==="input"||e==="change")return Pi(n)}function Vd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var He=typeof Object.is=="function"?Object.is:Vd;function ir(e,n){if(He(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Tl.call(n,i)||!He(e[i],n[i]))return!1}return!0}function Vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wu(e,n){var t=Vu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Vu(t)}}function La(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?La(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ja(){for(var e=window,n=ri();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ri(e.document)}return n}function Bo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Wd(e){var n=ja(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&La(t.ownerDocument.documentElement,t)){if(r!==null&&Bo(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Wu(t,l);var o=Wu(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gd=en&&"documentMode"in document&&11>=document.documentMode,Jn=null,Gl=null,Wt=null,Ql=!1;function Gu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ql||Jn==null||Jn!==ri(r)||(r=Jn,"selectionStart"in r&&Bo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wt&&ir(Wt,r)||(Wt=r,r=ci(Gl,"onSelect"),0<r.length&&(n=new jo("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Jn)))}function Or(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Yn={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionend:Or("Transition","TransitionEnd")},ll={},Ua={};en&&(Ua=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Di(e){if(ll[e])return ll[e];if(!Yn[e])return e;var n=Yn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ua)return ll[e]=n[t];return e}var $a=Di("animationend"),Ba=Di("animationiteration"),Ha=Di("animationstart"),Va=Di("transitionend"),Wa=new Map,Qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(e,n){Wa.set(e,n),Vn(n,[e])}for(var ol=0;ol<Qu.length;ol++){var ul=Qu[ol],Qd=ul.toLowerCase(),Kd=ul[0].toUpperCase()+ul.slice(1);In(Qd,"on"+Kd)}In($a,"onAnimationEnd");In(Ba,"onAnimationIteration");In(Ha,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(Va,"onTransitionEnd");ft("onMouseEnter",["mouseout","mouseover"]);ft("onMouseLeave",["mouseout","mouseover"]);ft("onPointerEnter",["pointerout","pointerover"]);ft("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lt));function Ku(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Qf(r,n,void 0,e),e.currentTarget=null}function Ga(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],s=u.instance,a=u.currentTarget;if(u=u.listener,s!==l&&i.isPropagationStopped())break e;Ku(i,u,a),l=s}else for(o=0;o<r.length;o++){if(u=r[o],s=u.instance,a=u.currentTarget,u=u.listener,s!==l&&i.isPropagationStopped())break e;Ku(i,u,a),l=s}}}if(li)throw e=Bl,li=!1,Bl=null,e}function L(e,n){var t=n[ql];t===void 0&&(t=n[ql]=new Set);var r=e+"__bubble";t.has(r)||(Qa(n,e,2,!1),t.add(r))}function sl(e,n,t){var r=0;n&&(r|=4),Qa(t,e,r,n)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[Pr]){e[Pr]=!0,Zs.forEach(function(t){t!=="selectionchange"&&(Xd.has(t)||sl(t,!1,e),sl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pr]||(n[Pr]=!0,sl("selectionchange",!1,n))}}function Qa(e,n,t,r){switch(_a(n)){case 1:var i=sd;break;case 4:i=ad;break;default:i=Fo}t=i.bind(null,n,t,e),i=void 0,!$l||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function al(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;u!==null;){if(o=zn(u),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}u=u.parentNode}}r=r.return}ha(function(){var a=l,c=Do(t),f=[];e:{var d=Wa.get(e);if(d!==void 0){var p=jo,m=e;switch(e){case"keypress":if(Kr(t)===0)break e;case"keydown":case"keyup":p=kd;break;case"focusin":m="focus",p=tl;break;case"focusout":m="blur",p=tl;break;case"beforeblur":case"afterblur":p=tl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Rd;break;case $a:case Ba:case Ha:p=hd;break;case Va:p=_d;break;case"scroll":p=cd;break;case"wheel":p=Pd;break;case"copy":case"cut":case"paste":p=gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Lu}var y=(n&4)!==0,E=!y&&e==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var v=a,g;v!==null;){g=v;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=Zt(v,h),x!=null&&y.push(or(v,x,g)))),E)break;v=v.return}0<y.length&&(d=new p(d,m,null,t,c),f.push({event:d,listeners:y}))}}if(!(n&7)){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&t!==jl&&(m=t.relatedTarget||t.fromElement)&&(zn(m)||m[nn]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(m=t.relatedTarget||t.toElement,p=a,m=m?zn(m):null,m!==null&&(E=Wn(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=a),p!==m)){if(y=Mu,x="onMouseLeave",h="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(y=Lu,x="onPointerLeave",h="onPointerEnter",v="pointer"),E=p==null?d:qn(p),g=m==null?d:qn(m),d=new y(x,v+"leave",p,t,c),d.target=E,d.relatedTarget=g,x=null,zn(c)===a&&(y=new y(h,v+"enter",m,t,c),y.target=g,y.relatedTarget=E,x=y),E=x,p&&m)n:{for(y=p,h=m,v=0,g=y;g;g=Gn(g))v++;for(g=0,x=h;x;x=Gn(x))g++;for(;0<v-g;)y=Gn(y),v--;for(;0<g-v;)h=Gn(h),g--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break n;y=Gn(y),h=Gn(h)}y=null}else y=null;p!==null&&Xu(f,d,p,y,!1),m!==null&&E!==null&&Xu(f,E,m,y,!0)}}e:{if(d=a?qn(a):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=jd;else if($u(d))if(Ma)S=Hd;else{S=$d;var I=Ud}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=Bd);if(S&&(S=S(e,a))){Aa(f,S,t,c);break e}I&&I(e,d,a),e==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&zl(d,"number",d.value)}switch(I=a?qn(a):window,e){case"focusin":($u(I)||I.contentEditable==="true")&&(Jn=I,Gl=a,Wt=null);break;case"focusout":Wt=Gl=Jn=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,Gu(f,t,c);break;case"selectionchange":if(Gd)break;case"keydown":case"keyup":Gu(f,t,c)}var N;if($o)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Xn?Da(e,t)&&(k="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(k="onCompositionStart");k&&(Pa&&t.locale!=="ko"&&(Xn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Xn&&(N=Oa()):(vn=c,Lo="value"in vn?vn.value:vn.textContent,Xn=!0)),I=ci(a,k),0<I.length&&(k=new Fu(k,e,null,t,c),f.push({event:k,listeners:I}),N?k.data=N:(N=za(t),N!==null&&(k.data=N)))),(N=zd?Ad(e,t):Md(e,t))&&(a=ci(a,"onBeforeInput"),0<a.length&&(c=new Fu("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:a}),c.data=N))}Ga(f,n)})}function or(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ci(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Zt(e,t),l!=null&&r.unshift(or(e,l,i)),l=Zt(e,n),l!=null&&r.push(or(e,l,i))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xu(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var u=t,s=u.alternate,a=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&a!==null&&(u=a,i?(s=Zt(t,l),s!=null&&o.unshift(or(t,s,u))):i||(s=Zt(t,l),s!=null&&o.push(or(t,s,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Jd=/\r\n?/g,Yd=/\u0000|\uFFFD/g;function Ju(e){return(typeof e=="string"?e:""+e).replace(Jd,`
`).replace(Yd,"")}function Dr(e,n,t){if(n=Ju(n),Ju(e)!==n&&t)throw Error(w(425))}function fi(){}var Kl=null,Xl=null;function Jl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yl=typeof setTimeout=="function"?setTimeout:void 0,qd=typeof clearTimeout=="function"?clearTimeout:void 0,Yu=typeof Promise=="function"?Promise:void 0,bd=typeof queueMicrotask=="function"?queueMicrotask:typeof Yu<"u"?function(e){return Yu.resolve(null).then(e).catch(Zd)}:Yl;function Zd(e){setTimeout(function(){throw e})}function cl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),tr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);tr(n)}function yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function qu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Et=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Et,ur="__reactProps$"+Et,nn="__reactContainer$"+Et,ql="__reactEvents$"+Et,ev="__reactListeners$"+Et,nv="__reactHandles$"+Et;function zn(e){var n=e[Qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[nn]||t[Qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=qu(e);e!==null;){if(t=e[Qe])return t;e=qu(e)}return n}e=t,t=e.parentNode}return null}function gr(e){return e=e[Qe]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function zi(e){return e[ur]||null}var bl=[],bn=-1;function Tn(e){return{current:e}}function j(e){0>bn||(e.current=bl[bn],bl[bn]=null,bn--)}function F(e,n){bn++,bl[bn]=e.current,e.current=n}var kn={},oe=Tn(kn),ge=Tn(!1),jn=kn;function dt(e,n){var t=e.type.contextTypes;if(!t)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function di(){j(ge),j(oe)}function bu(e,n,t){if(oe.current!==kn)throw Error(w(168));F(oe,n),F(ge,t)}function Ka(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(w(108,Uf(e)||"Unknown",i));return V({},t,r)}function vi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,jn=oe.current,F(oe,e),F(ge,ge.current),!0}function Zu(e,n,t){var r=e.stateNode;if(!r)throw Error(w(169));t?(e=Ka(e,n,jn),r.__reactInternalMemoizedMergedChildContext=e,j(ge),j(oe),F(oe,e)):j(ge),F(ge,t)}var Ye=null,Ai=!1,fl=!1;function Xa(e){Ye===null?Ye=[e]:Ye.push(e)}function tv(e){Ai=!0,Xa(e)}function Rn(){if(!fl&&Ye!==null){fl=!0;var e=0,n=A;try{var t=Ye;for(A=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ye=null,Ai=!1}catch(i){throw Ye!==null&&(Ye=Ye.slice(e+1)),xa(zo,Rn),i}finally{A=n,fl=!1}}return null}var Zn=[],et=0,pi=null,hi=0,Re=[],Ce=0,Un=null,qe=1,be="";function On(e,n){Zn[et++]=hi,Zn[et++]=pi,pi=e,hi=n}function Ja(e,n,t){Re[Ce++]=qe,Re[Ce++]=be,Re[Ce++]=Un,Un=e;var r=qe;e=be;var i=32-Ue(r)-1;r&=~(1<<i),t+=1;var l=32-Ue(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qe=1<<32-Ue(n)+i|t<<i|r,be=l+e}else qe=1<<l|t<<i|r,be=e}function Ho(e){e.return!==null&&(On(e,1),Ja(e,1,0))}function Vo(e){for(;e===pi;)pi=Zn[--et],Zn[et]=null,hi=Zn[--et],Zn[et]=null;for(;e===Un;)Un=Re[--Ce],Re[Ce]=null,be=Re[--Ce],Re[Ce]=null,qe=Re[--Ce],Re[Ce]=null}var Ne=null,we=null,U=!1,je=null;function Ya(e,n){var t=_e(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function es(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ne=e,we=yn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ne=e,we=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Un!==null?{id:qe,overflow:be}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=_e(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ne=e,we=null,!0):!1;default:return!1}}function Zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function eo(e){if(U){var n=we;if(n){var t=n;if(!es(e,n)){if(Zl(e))throw Error(w(418));n=yn(t.nextSibling);var r=Ne;n&&es(e,n)?Ya(r,t):(e.flags=e.flags&-4097|2,U=!1,Ne=e)}}else{if(Zl(e))throw Error(w(418));e.flags=e.flags&-4097|2,U=!1,Ne=e}}}function ns(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function zr(e){if(e!==Ne)return!1;if(!U)return ns(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Jl(e.type,e.memoizedProps)),n&&(n=we)){if(Zl(e))throw qa(),Error(w(418));for(;n;)Ya(e,n),n=yn(n.nextSibling)}if(ns(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){we=yn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}we=null}}else we=Ne?yn(e.stateNode.nextSibling):null;return!0}function qa(){for(var e=we;e;)e=yn(e.nextSibling)}function vt(){we=Ne=null,U=!1}function Wo(e){je===null?je=[e]:je.push(e)}var rv=ln.ReactCurrentBatchConfig;function Me(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var mi=Tn(null),gi=null,nt=null,Go=null;function Qo(){Go=nt=gi=null}function Ko(e){var n=mi.current;j(mi),e._currentValue=n}function no(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function st(e,n){gi=e,Go=nt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(me=!0),e.firstContext=null)}function Pe(e){var n=e._currentValue;if(Go!==e)if(e={context:e,memoizedValue:n,next:null},nt===null){if(gi===null)throw Error(w(308));nt=e,gi.dependencies={lanes:0,firstContext:e}}else nt=nt.next=e;return n}var An=null;function Xo(e){An===null?An=[e]:An.push(e)}function ba(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Xo(n)):(t.next=i.next,i.next=t),n.interleaved=t,tn(e,r)}function tn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var cn=!1;function Jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Za(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function xn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,tn(e,t)}return i=r.interleaved,i===null?(n.next=n,Xo(r)):(n.next=i.next,i.next=n),r.interleaved=n,tn(e,t)}function Xr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ao(e,t)}}function ts(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function yi(e,n,t,r){var i=e.updateQueue;cn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var s=u,a=s.next;s.next=null,o===null?l=a:o.next=a,o=s;var c=e.alternate;c!==null&&(c=c.updateQueue,u=c.lastBaseUpdate,u!==o&&(u===null?c.firstBaseUpdate=a:u.next=a,c.lastBaseUpdate=s))}if(l!==null){var f=i.baseState;o=0,c=a=s=null,u=l;do{var d=u.lane,p=u.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var m=e,y=u;switch(d=n,p=t,y.tag){case 1:if(m=y.payload,typeof m=="function"){f=m.call(p,f,d);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,d=typeof m=="function"?m.call(p,f,d):m,d==null)break e;f=V({},f,d);break e;case 2:cn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[u]:d.push(u))}else p={eventTime:p,lane:d,tag:u.tag,payload:u.payload,callback:u.callback,next:null},c===null?(a=c=p,s=f):c=c.next=p,o|=d;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;d=u,u=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(s=f),i.baseState=s,i.firstBaseUpdate=a,i.lastBaseUpdate=c,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Bn|=o,e.lanes=o,e.memoizedState=f}}function rs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var ec=new bs.Component().refs;function to(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Mi={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=fe(),i=Sn(e),l=Ze(r,i);l.payload=n,t!=null&&(l.callback=t),n=xn(e,l,i),n!==null&&($e(n,e,i,r),Xr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=fe(),i=Sn(e),l=Ze(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=xn(e,l,i),n!==null&&($e(n,e,i,r),Xr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=fe(),r=Sn(e),i=Ze(t,r);i.tag=2,n!=null&&(i.callback=n),n=xn(e,i,r),n!==null&&($e(n,e,r,t),Xr(n,e,r))}};function is(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!ir(t,r)||!ir(i,l):!0}function nc(e,n,t){var r=!1,i=kn,l=n.contextType;return typeof l=="object"&&l!==null?l=Pe(l):(i=ye(n)?jn:oe.current,r=n.contextTypes,l=(r=r!=null)?dt(e,i):kn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Mi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function ls(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Mi.enqueueReplaceState(n,n.state,null)}function ro(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=ec,Jo(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Pe(l):(l=ye(n)?jn:oe.current,i.context=dt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(to(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Mi.enqueueReplaceState(i,i.state,null),yi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ct(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(w(309));var r=t.stateNode}if(!r)throw Error(w(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var u=i.refs;u===ec&&(u=i.refs={}),o===null?delete u[l]:u[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(w(284));if(!t._owner)throw Error(w(290,e))}return e}function Ar(e,n){throw e=Object.prototype.toString.call(n),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function os(e){var n=e._init;return n(e._payload)}function tc(e){function n(h,v){if(e){var g=h.deletions;g===null?(h.deletions=[v],h.flags|=16):g.push(v)}}function t(h,v){if(!e)return null;for(;v!==null;)n(h,v),v=v.sibling;return null}function r(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function i(h,v){return h=wn(h,v),h.index=0,h.sibling=null,h}function l(h,v,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<v?(h.flags|=2,v):g):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function u(h,v,g,x){return v===null||v.tag!==6?(v=yl(g,h.mode,x),v.return=h,v):(v=i(v,g),v.return=h,v)}function s(h,v,g,x){var S=g.type;return S===Kn?c(h,v,g.props.children,x,g.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&os(S)===v.type)?(x=i(v,g.props),x.ref=Ct(h,v,g),x.return=h,x):(x=ei(g.type,g.key,g.props,null,h.mode,x),x.ref=Ct(h,v,g),x.return=h,x)}function a(h,v,g,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=xl(g,h.mode,x),v.return=h,v):(v=i(v,g.children||[]),v.return=h,v)}function c(h,v,g,x,S){return v===null||v.tag!==7?(v=Ln(g,h.mode,x,S),v.return=h,v):(v=i(v,g),v.return=h,v)}function f(h,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=yl(""+v,h.mode,g),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Nr:return g=ei(v.type,v.key,v.props,null,h.mode,g),g.ref=Ct(h,null,v),g.return=h,g;case Qn:return v=xl(v,h.mode,g),v.return=h,v;case an:var x=v._init;return f(h,x(v._payload),g)}if(Mt(v)||Nt(v))return v=Ln(v,h.mode,g,null),v.return=h,v;Ar(h,v)}return null}function d(h,v,g,x){var S=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:u(h,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Nr:return g.key===S?s(h,v,g,x):null;case Qn:return g.key===S?a(h,v,g,x):null;case an:return S=g._init,d(h,v,S(g._payload),x)}if(Mt(g)||Nt(g))return S!==null?null:c(h,v,g,x,null);Ar(h,g)}return null}function p(h,v,g,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,u(v,h,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Nr:return h=h.get(x.key===null?g:x.key)||null,s(v,h,x,S);case Qn:return h=h.get(x.key===null?g:x.key)||null,a(v,h,x,S);case an:var I=x._init;return p(h,v,g,I(x._payload),S)}if(Mt(x)||Nt(x))return h=h.get(g)||null,c(v,h,x,S,null);Ar(v,x)}return null}function m(h,v,g,x){for(var S=null,I=null,N=v,k=v=0,M=null;N!==null&&k<g.length;k++){N.index>k?(M=N,N=null):M=N.sibling;var P=d(h,N,g[k],x);if(P===null){N===null&&(N=M);break}e&&N&&P.alternate===null&&n(h,N),v=l(P,v,k),I===null?S=P:I.sibling=P,I=P,N=M}if(k===g.length)return t(h,N),U&&On(h,k),S;if(N===null){for(;k<g.length;k++)N=f(h,g[k],x),N!==null&&(v=l(N,v,k),I===null?S=N:I.sibling=N,I=N);return U&&On(h,k),S}for(N=r(h,N);k<g.length;k++)M=p(N,h,k,g[k],x),M!==null&&(e&&M.alternate!==null&&N.delete(M.key===null?k:M.key),v=l(M,v,k),I===null?S=M:I.sibling=M,I=M);return e&&N.forEach(function(ze){return n(h,ze)}),U&&On(h,k),S}function y(h,v,g,x){var S=Nt(g);if(typeof S!="function")throw Error(w(150));if(g=S.call(g),g==null)throw Error(w(151));for(var I=S=null,N=v,k=v=0,M=null,P=g.next();N!==null&&!P.done;k++,P=g.next()){N.index>k?(M=N,N=null):M=N.sibling;var ze=d(h,N,P.value,x);if(ze===null){N===null&&(N=M);break}e&&N&&ze.alternate===null&&n(h,N),v=l(ze,v,k),I===null?S=ze:I.sibling=ze,I=ze,N=M}if(P.done)return t(h,N),U&&On(h,k),S;if(N===null){for(;!P.done;k++,P=g.next())P=f(h,P.value,x),P!==null&&(v=l(P,v,k),I===null?S=P:I.sibling=P,I=P);return U&&On(h,k),S}for(N=r(h,N);!P.done;k++,P=g.next())P=p(N,h,k,P.value,x),P!==null&&(e&&P.alternate!==null&&N.delete(P.key===null?k:P.key),v=l(P,v,k),I===null?S=P:I.sibling=P,I=P);return e&&N.forEach(function(St){return n(h,St)}),U&&On(h,k),S}function E(h,v,g,x){if(typeof g=="object"&&g!==null&&g.type===Kn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Nr:e:{for(var S=g.key,I=v;I!==null;){if(I.key===S){if(S=g.type,S===Kn){if(I.tag===7){t(h,I.sibling),v=i(I,g.props.children),v.return=h,h=v;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&os(S)===I.type){t(h,I.sibling),v=i(I,g.props),v.ref=Ct(h,I,g),v.return=h,h=v;break e}t(h,I);break}else n(h,I);I=I.sibling}g.type===Kn?(v=Ln(g.props.children,h.mode,x,g.key),v.return=h,h=v):(x=ei(g.type,g.key,g.props,null,h.mode,x),x.ref=Ct(h,v,g),x.return=h,h=x)}return o(h);case Qn:e:{for(I=g.key;v!==null;){if(v.key===I)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){t(h,v.sibling),v=i(v,g.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else n(h,v);v=v.sibling}v=xl(g,h.mode,x),v.return=h,h=v}return o(h);case an:return I=g._init,E(h,v,I(g._payload),x)}if(Mt(g))return m(h,v,g,x);if(Nt(g))return y(h,v,g,x);Ar(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(t(h,v.sibling),v=i(v,g),v.return=h,h=v):(t(h,v),v=yl(g,h.mode,x),v.return=h,h=v),o(h)):t(h,v)}return E}var pt=tc(!0),rc=tc(!1),yr={},Xe=Tn(yr),sr=Tn(yr),ar=Tn(yr);function Mn(e){if(e===yr)throw Error(w(174));return e}function Yo(e,n){switch(F(ar,n),F(sr,e),F(Xe,yr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ml(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ml(n,e)}j(Xe),F(Xe,n)}function ht(){j(Xe),j(sr),j(ar)}function ic(e){Mn(ar.current);var n=Mn(Xe.current),t=Ml(n,e.type);n!==t&&(F(sr,e),F(Xe,t))}function qo(e){sr.current===e&&(j(Xe),j(sr))}var B=Tn(0);function xi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var dl=[];function bo(){for(var e=0;e<dl.length;e++)dl[e]._workInProgressVersionPrimary=null;dl.length=0}var Jr=ln.ReactCurrentDispatcher,vl=ln.ReactCurrentBatchConfig,$n=0,H=null,J=null,b=null,Ei=!1,Gt=!1,cr=0,iv=0;function re(){throw Error(w(321))}function Zo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!He(e[t],n[t]))return!1;return!0}function eu(e,n,t,r,i,l){if($n=l,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Jr.current=e===null||e.memoizedState===null?sv:av,e=t(r,i),Gt){l=0;do{if(Gt=!1,cr=0,25<=l)throw Error(w(301));l+=1,b=J=null,n.updateQueue=null,Jr.current=cv,e=t(r,i)}while(Gt)}if(Jr.current=Si,n=J!==null&&J.next!==null,$n=0,b=J=H=null,Ei=!1,n)throw Error(w(300));return e}function nu(){var e=cr!==0;return cr=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?H.memoizedState=b=e:b=b.next=e,b}function De(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=b===null?H.memoizedState:b.next;if(n!==null)b=n,J=e;else{if(e===null)throw Error(w(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},b===null?H.memoizedState=b=e:b=b.next=e}return b}function fr(e,n){return typeof n=="function"?n(e):n}function pl(e){var n=De(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var r=J,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,s=null,a=l;do{var c=a.lane;if(($n&c)===c)s!==null&&(s=s.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var f={lane:c,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};s===null?(u=s=f,o=r):s=s.next=f,H.lanes|=c,Bn|=c}a=a.next}while(a!==null&&a!==l);s===null?o=r:s.next=u,He(r,n.memoizedState)||(me=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,H.lanes|=l,Bn|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function hl(e){var n=De(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);He(l,n.memoizedState)||(me=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function lc(){}function oc(e,n){var t=H,r=De(),i=n(),l=!He(r.memoizedState,i);if(l&&(r.memoizedState=i,me=!0),r=r.queue,tu(ac.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||b!==null&&b.memoizedState.tag&1){if(t.flags|=2048,dr(9,sc.bind(null,t,r,i,n),void 0,null),Z===null)throw Error(w(349));$n&30||uc(t,n,i)}return i}function uc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function sc(e,n,t,r){n.value=t,n.getSnapshot=r,cc(n)&&fc(e)}function ac(e,n,t){return t(function(){cc(n)&&fc(e)})}function cc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!He(e,t)}catch{return!0}}function fc(e){var n=tn(e,1);n!==null&&$e(n,e,1,-1)}function us(e){var n=Ge();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},n.queue=e,e=e.dispatch=uv.bind(null,H,e),[n.memoizedState,e]}function dr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function dc(){return De().memoizedState}function Yr(e,n,t,r){var i=Ge();H.flags|=e,i.memoizedState=dr(1|n,t,void 0,r===void 0?null:r)}function Fi(e,n,t,r){var i=De();r=r===void 0?null:r;var l=void 0;if(J!==null){var o=J.memoizedState;if(l=o.destroy,r!==null&&Zo(r,o.deps)){i.memoizedState=dr(n,t,l,r);return}}H.flags|=e,i.memoizedState=dr(1|n,t,l,r)}function ss(e,n){return Yr(8390656,8,e,n)}function tu(e,n){return Fi(2048,8,e,n)}function vc(e,n){return Fi(4,2,e,n)}function pc(e,n){return Fi(4,4,e,n)}function hc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function mc(e,n,t){return t=t!=null?t.concat([e]):null,Fi(4,4,hc.bind(null,n,e),t)}function ru(){}function gc(e,n){var t=De();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Zo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function yc(e,n){var t=De();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Zo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function xc(e,n,t){return $n&21?(He(t,n)||(t=wa(),H.lanes|=t,Bn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=t)}function lv(e,n){var t=A;A=t!==0&&4>t?t:4,e(!0);var r=vl.transition;vl.transition={};try{e(!1),n()}finally{A=t,vl.transition=r}}function Ec(){return De().memoizedState}function ov(e,n,t){var r=Sn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Sc(e))wc(n,t);else if(t=ba(e,n,t,r),t!==null){var i=fe();$e(t,e,r,i),Nc(t,n,r)}}function uv(e,n,t){var r=Sn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))wc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,He(u,o)){var s=n.interleaved;s===null?(i.next=i,Xo(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=ba(e,n,i,r),t!==null&&(i=fe(),$e(t,e,r,i),Nc(t,n,r))}}function Sc(e){var n=e.alternate;return e===H||n!==null&&n===H}function wc(e,n){Gt=Ei=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Nc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ao(e,t)}}var Si={readContext:Pe,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},sv={readContext:Pe,useCallback:function(e,n){return Ge().memoizedState=[e,n===void 0?null:n],e},useContext:Pe,useEffect:ss,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Yr(4194308,4,hc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Yr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Yr(4,2,e,n)},useMemo:function(e,n){var t=Ge();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ge();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ov.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=Ge();return e={current:e},n.memoizedState=e},useState:us,useDebugValue:ru,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=us(!1),n=e[0];return e=lv.bind(null,e[1]),Ge().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,i=Ge();if(U){if(t===void 0)throw Error(w(407));t=t()}else{if(t=n(),Z===null)throw Error(w(349));$n&30||uc(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,ss(ac.bind(null,r,l,e),[e]),r.flags|=2048,dr(9,sc.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Ge(),n=Z.identifierPrefix;if(U){var t=be,r=qe;t=(r&~(1<<32-Ue(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=cr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=iv++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},av={readContext:Pe,useCallback:gc,useContext:Pe,useEffect:tu,useImperativeHandle:mc,useInsertionEffect:vc,useLayoutEffect:pc,useMemo:yc,useReducer:pl,useRef:dc,useState:function(){return pl(fr)},useDebugValue:ru,useDeferredValue:function(e){var n=De();return xc(n,J.memoizedState,e)},useTransition:function(){var e=pl(fr)[0],n=De().memoizedState;return[e,n]},useMutableSource:lc,useSyncExternalStore:oc,useId:Ec,unstable_isNewReconciler:!1},cv={readContext:Pe,useCallback:gc,useContext:Pe,useEffect:tu,useImperativeHandle:mc,useInsertionEffect:vc,useLayoutEffect:pc,useMemo:yc,useReducer:hl,useRef:dc,useState:function(){return hl(fr)},useDebugValue:ru,useDeferredValue:function(e){var n=De();return J===null?n.memoizedState=e:xc(n,J.memoizedState,e)},useTransition:function(){var e=hl(fr)[0],n=De().memoizedState;return[e,n]},useMutableSource:lc,useSyncExternalStore:oc,useId:Ec,unstable_isNewReconciler:!1};function mt(e,n){try{var t="",r=n;do t+=jf(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function ml(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function io(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var fv=typeof WeakMap=="function"?WeakMap:Map;function kc(e,n,t){t=Ze(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ni||(Ni=!0,ho=r),io(e,n)},t}function Ic(e,n,t){t=Ze(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){io(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){io(e,n),typeof r!="function"&&(En===null?En=new Set([this]):En.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function as(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new fv;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Iv.bind(null,e,n,t),n.then(e,e))}function cs(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function fs(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ze(-1,1),n.tag=2,xn(t,n,1))),t.lanes|=1),e)}var dv=ln.ReactCurrentOwner,me=!1;function se(e,n,t,r){n.child=e===null?rc(n,null,t,r):pt(n,e.child,t,r)}function ds(e,n,t,r,i){t=t.render;var l=n.ref;return st(n,i),r=eu(e,n,t,r,l,i),t=nu(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,rn(e,n,i)):(U&&t&&Ho(n),n.flags|=1,se(e,n,r,i),n.child)}function vs(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!fu(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Tc(e,n,l,r,i)):(e=ei(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:ir,t(o,r)&&e.ref===n.ref)return rn(e,n,i)}return n.flags|=1,e=wn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Tc(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(ir(l,r)&&e.ref===n.ref)if(me=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return n.lanes=e.lanes,rn(e,n,i)}return lo(e,n,t,r,i)}function Rc(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(rt,Se),Se|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(rt,Se),Se|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,F(rt,Se),Se|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,F(rt,Se),Se|=r;return se(e,n,i,t),n.child}function Cc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function lo(e,n,t,r,i){var l=ye(t)?jn:oe.current;return l=dt(n,l),st(n,i),t=eu(e,n,t,r,l,i),r=nu(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,rn(e,n,i)):(U&&r&&Ho(n),n.flags|=1,se(e,n,t,i),n.child)}function ps(e,n,t,r,i){if(ye(t)){var l=!0;vi(n)}else l=!1;if(st(n,i),n.stateNode===null)qr(e,n),nc(n,t,r),ro(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var s=o.context,a=t.contextType;typeof a=="object"&&a!==null?a=Pe(a):(a=ye(t)?jn:oe.current,a=dt(n,a));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||s!==a)&&ls(n,o,r,a),cn=!1;var d=n.memoizedState;o.state=d,yi(n,r,o,i),s=n.memoizedState,u!==r||d!==s||ge.current||cn?(typeof c=="function"&&(to(n,t,c,r),s=n.memoizedState),(u=cn||is(n,t,u,r,d,s,a))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=a,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Za(e,n),u=n.memoizedProps,a=n.type===n.elementType?u:Me(n.type,u),o.props=a,f=n.pendingProps,d=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Pe(s):(s=ye(t)?jn:oe.current,s=dt(n,s));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==f||d!==s)&&ls(n,o,r,s),cn=!1,d=n.memoizedState,o.state=d,yi(n,r,o,i);var m=n.memoizedState;u!==f||d!==m||ge.current||cn?(typeof p=="function"&&(to(n,t,p,r),m=n.memoizedState),(a=cn||is(n,t,a,r,d,m,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=m),o.props=r,o.state=m,o.context=s,r=a):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),r=!1)}return oo(e,n,t,r,l,i)}function oo(e,n,t,r,i,l){Cc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Zu(n,t,!1),rn(e,n,l);r=n.stateNode,dv.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=pt(n,e.child,null,l),n.child=pt(n,null,u,l)):se(e,n,u,l),n.memoizedState=r.state,i&&Zu(n,t,!0),n.child}function _c(e){var n=e.stateNode;n.pendingContext?bu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&bu(e,n.context,!1),Yo(e,n.containerInfo)}function hs(e,n,t,r,i){return vt(),Wo(i),n.flags|=256,se(e,n,t,r),n.child}var uo={dehydrated:null,treeContext:null,retryLane:0};function so(e){return{baseLanes:e,cachePool:null,transitions:null}}function Oc(e,n,t){var r=n.pendingProps,i=B.current,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(B,i&1),e===null)return eo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ui(o,r,0,null),e=Ln(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=so(t),n.memoizedState=uo,e):iu(n,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return vv(e,n,o,r,u,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,u=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=wn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=wn(u,l):(l=Ln(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?so(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=uo,r}return l=e.child,e=l.sibling,r=wn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function iu(e,n){return n=Ui({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Mr(e,n,t,r){return r!==null&&Wo(r),pt(n,e.child,null,t),e=iu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function vv(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=ml(Error(w(422))),Mr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Ui({mode:"visible",children:r.children},i,0,null),l=Ln(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&pt(n,e.child,null,o),n.child.memoizedState=so(o),n.memoizedState=uo,l);if(!(n.mode&1))return Mr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(w(419)),r=ml(l,r,void 0),Mr(e,n,o,r)}if(u=(o&e.childLanes)!==0,me||u){if(r=Z,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,tn(e,i),$e(r,e,i,-1))}return cu(),r=ml(Error(w(421))),Mr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Tv.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,we=yn(i.nextSibling),Ne=n,U=!0,je=null,e!==null&&(Re[Ce++]=qe,Re[Ce++]=be,Re[Ce++]=Un,qe=e.id,be=e.overflow,Un=n),n=iu(n,r.children),n.flags|=4096,n)}function ms(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),no(e.return,n,t)}function gl(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Pc(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(se(e,n,r.children,t),r=B.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ms(e,t,n);else if(e.tag===19)ms(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(B,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&xi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),gl(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&xi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}gl(n,!0,t,null,l);break;case"together":gl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function rn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Bn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(w(153));if(n.child!==null){for(e=n.child,t=wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function pv(e,n,t){switch(n.tag){case 3:_c(n),vt();break;case 5:ic(n);break;case 1:ye(n.type)&&vi(n);break;case 4:Yo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;F(mi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(F(B,B.current&1),n.flags|=128,null):t&n.child.childLanes?Oc(e,n,t):(F(B,B.current&1),e=rn(e,n,t),e!==null?e.sibling:null);F(B,B.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Pc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(B,B.current),r)break;return null;case 22:case 23:return n.lanes=0,Rc(e,n,t)}return rn(e,n,t)}var Dc,ao,zc,Ac;Dc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ao=function(){};zc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Mn(Xe.current);var l=null;switch(t){case"input":i=Pl(e,i),r=Pl(e,r),l=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),l=[];break;case"textarea":i=Al(e,i),r=Al(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fi)}Fl(t,r);var o;t=null;for(a in i)if(!r.hasOwnProperty(a)&&i.hasOwnProperty(a)&&i[a]!=null)if(a==="style"){var u=i[a];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(qt.hasOwnProperty(a)?l||(l=[]):(l=l||[]).push(a,null));for(a in r){var s=r[a];if(u=i!=null?i[a]:void 0,r.hasOwnProperty(a)&&s!==u&&(s!=null||u!=null))if(a==="style")if(u){for(o in u)!u.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&u[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(l||(l=[]),l.push(a,t)),t=s;else a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(l=l||[]).push(a,s)):a==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(a,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(qt.hasOwnProperty(a)?(s!=null&&a==="onScroll"&&L("scroll",e),l||u===s||(l=[])):(l=l||[]).push(a,s))}t&&(l=l||[]).push("style",t);var a=l;(n.updateQueue=a)&&(n.flags|=4)}};Ac=function(e,n,t,r){t!==r&&(n.flags|=4)};function _t(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function hv(e,n,t){var r=n.pendingProps;switch(Vo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return ye(n.type)&&di(),ie(n),null;case 3:return r=n.stateNode,ht(),j(ge),j(oe),bo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,je!==null&&(yo(je),je=null))),ao(e,n),ie(n),null;case 5:qo(n);var i=Mn(ar.current);if(t=n.type,e!==null&&n.stateNode!=null)zc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(w(166));return ie(n),null}if(e=Mn(Xe.current),zr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Qe]=n,r[ur]=l,e=(n.mode&1)!==0,t){case"dialog":L("cancel",r),L("close",r);break;case"iframe":case"object":case"embed":L("load",r);break;case"video":case"audio":for(i=0;i<Lt.length;i++)L(Lt[i],r);break;case"source":L("error",r);break;case"img":case"image":case"link":L("error",r),L("load",r);break;case"details":L("toggle",r);break;case"input":Iu(r,l),L("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},L("invalid",r);break;case"textarea":Ru(r,l),L("invalid",r)}Fl(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&Dr(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Dr(r.textContent,u,e),i=["children",""+u]):qt.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&L("scroll",r)}switch(t){case"input":kr(r),Tu(r,l,!0);break;case"textarea":kr(r),Cu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=fi)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ua(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Qe]=n,e[ur]=r,Dc(e,n,!1,!1),n.stateNode=e;e:{switch(o=Ll(t,r),t){case"dialog":L("cancel",e),L("close",e),i=r;break;case"iframe":case"object":case"embed":L("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lt.length;i++)L(Lt[i],e);i=r;break;case"source":L("error",e),i=r;break;case"img":case"image":case"link":L("error",e),L("load",e),i=r;break;case"details":L("toggle",e),i=r;break;case"input":Iu(e,r),i=Pl(e,r),L("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),L("invalid",e);break;case"textarea":Ru(e,r),i=Al(e,r),L("invalid",e);break;default:i=r}Fl(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var s=u[l];l==="style"?ca(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&sa(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&bt(e,s):typeof s=="number"&&bt(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(qt.hasOwnProperty(l)?s!=null&&l==="onScroll"&&L("scroll",e):s!=null&&Co(e,l,s,o))}switch(t){case"input":kr(e),Tu(e,r,!1);break;case"textarea":kr(e),Cu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?it(e,!!r.multiple,l,!1):r.defaultValue!=null&&it(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=fi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)Ac(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(w(166));if(t=Mn(ar.current),Mn(Xe.current),zr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Qe]=n,(l=r.nodeValue!==t)&&(e=Ne,e!==null))switch(e.tag){case 3:Dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Dr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Qe]=n,n.stateNode=r}return ie(n),null;case 13:if(j(B),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&we!==null&&n.mode&1&&!(n.flags&128))qa(),vt(),n.flags|=98560,l=!1;else if(l=zr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[Qe]=n}else vt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),l=!1}else je!==null&&(yo(je),je=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?Y===0&&(Y=3):cu())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return ht(),ao(e,n),e===null&&lr(n.stateNode.containerInfo),ie(n),null;case 10:return Ko(n.type._context),ie(n),null;case 17:return ye(n.type)&&di(),ie(n),null;case 19:if(j(B),l=n.memoizedState,l===null)return ie(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)_t(l,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=xi(e),o!==null){for(n.flags|=128,_t(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(B,B.current&1|2),n.child}e=e.sibling}l.tail!==null&&Q()>gt&&(n.flags|=128,r=!0,_t(l,!1),n.lanes=4194304)}else{if(!r)if(e=xi(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),_t(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!U)return ie(n),null}else 2*Q()-l.renderingStartTime>gt&&t!==1073741824&&(n.flags|=128,r=!0,_t(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Q(),n.sibling=null,t=B.current,F(B,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return au(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Se&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(w(156,n.tag))}function mv(e,n){switch(Vo(n),n.tag){case 1:return ye(n.type)&&di(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ht(),j(ge),j(oe),bo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return qo(n),null;case 13:if(j(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(w(340));vt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(B),null;case 4:return ht(),null;case 10:return Ko(n.type._context),null;case 22:case 23:return au(),null;case 24:return null;default:return null}}var Fr=!1,le=!1,gv=typeof WeakSet=="function"?WeakSet:Set,R=null;function tt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){W(e,n,r)}else t.current=null}function co(e,n,t){try{t()}catch(r){W(e,n,r)}}var gs=!1;function yv(e,n){if(Kl=si,e=ja(),Bo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,u=-1,s=-1,a=0,c=0,f=e,d=null;n:for(;;){for(var p;f!==t||i!==0&&f.nodeType!==3||(u=o+i),f!==l||r!==0&&f.nodeType!==3||(s=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===e)break n;if(d===t&&++a===i&&(u=o),d===l&&++c===r&&(s=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Xl={focusedElem:e,selectionRange:t},si=!1,R=n;R!==null;)if(n=R,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,R=e;else for(;R!==null;){n=R;try{var m=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,E=m.memoizedState,h=n.stateNode,v=h.getSnapshotBeforeUpdate(n.elementType===n.type?y:Me(n.type,y),E);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){W(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,R=e;break}R=n.return}return m=gs,gs=!1,m}function Qt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&co(n,t,l)}i=i.next}while(i!==r)}}function Li(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function fo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Mc(e){var n=e.alternate;n!==null&&(e.alternate=null,Mc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Qe],delete n[ur],delete n[ql],delete n[ev],delete n[nv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fc(e){return e.tag===5||e.tag===3||e.tag===4}function ys(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=fi));else if(r!==4&&(e=e.child,e!==null))for(vo(e,n,t),e=e.sibling;e!==null;)vo(e,n,t),e=e.sibling}function po(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(po(e,n,t),e=e.sibling;e!==null;)po(e,n,t),e=e.sibling}var ee=null,Fe=!1;function on(e,n,t){for(t=t.child;t!==null;)Lc(e,n,t),t=t.sibling}function Lc(e,n,t){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(_i,t)}catch{}switch(t.tag){case 5:le||tt(t,n);case 6:var r=ee,i=Fe;ee=null,on(e,n,t),ee=r,Fe=i,ee!==null&&(Fe?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Fe?(e=ee,t=t.stateNode,e.nodeType===8?cl(e.parentNode,t):e.nodeType===1&&cl(e,t),tr(e)):cl(ee,t.stateNode));break;case 4:r=ee,i=Fe,ee=t.stateNode.containerInfo,Fe=!0,on(e,n,t),ee=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&co(t,n,o),i=i.next}while(i!==r)}on(e,n,t);break;case 1:if(!le&&(tt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){W(t,n,u)}on(e,n,t);break;case 21:on(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,on(e,n,t),le=r):on(e,n,t);break;default:on(e,n,t)}}function xs(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new gv),n.forEach(function(r){var i=Rv.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ae(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:ee=u.stateNode,Fe=!1;break e;case 3:ee=u.stateNode.containerInfo,Fe=!0;break e;case 4:ee=u.stateNode.containerInfo,Fe=!0;break e}u=u.return}if(ee===null)throw Error(w(160));Lc(l,o,i),ee=null,Fe=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(a){W(i,n,a)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)jc(n,e),n=n.sibling}function jc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(n,e),We(e),r&4){try{Qt(3,e,e.return),Li(3,e)}catch(y){W(e,e.return,y)}try{Qt(5,e,e.return)}catch(y){W(e,e.return,y)}}break;case 1:Ae(n,e),We(e),r&512&&t!==null&&tt(t,t.return);break;case 5:if(Ae(n,e),We(e),r&512&&t!==null&&tt(t,t.return),e.flags&32){var i=e.stateNode;try{bt(i,"")}catch(y){W(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&la(i,l),Ll(u,o);var a=Ll(u,l);for(o=0;o<s.length;o+=2){var c=s[o],f=s[o+1];c==="style"?ca(i,f):c==="dangerouslySetInnerHTML"?sa(i,f):c==="children"?bt(i,f):Co(i,c,f,a)}switch(u){case"input":Dl(i,l);break;case"textarea":oa(i,l);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var p=l.value;p!=null?it(i,!!l.multiple,p,!1):d!==!!l.multiple&&(l.defaultValue!=null?it(i,!!l.multiple,l.defaultValue,!0):it(i,!!l.multiple,l.multiple?[]:"",!1))}i[ur]=l}catch(y){W(e,e.return,y)}}break;case 6:if(Ae(n,e),We(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(y){W(e,e.return,y)}}break;case 3:if(Ae(n,e),We(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{tr(n.containerInfo)}catch(y){W(e,e.return,y)}break;case 4:Ae(n,e),We(e);break;case 13:Ae(n,e),We(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(uu=Q())),r&4&&xs(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(le=(a=le)||c,Ae(n,e),le=a):Ae(n,e),We(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!c&&e.mode&1)for(R=e,c=e.child;c!==null;){for(f=R=c;R!==null;){switch(d=R,p=d.child,d.tag){case 0:case 11:case 14:case 15:Qt(4,d,d.return);break;case 1:tt(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,t=d.return;try{n=r,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(y){W(r,t,y)}}break;case 5:tt(d,d.return);break;case 22:if(d.memoizedState!==null){Ss(f);continue}}p!==null?(p.return=d,R=p):Ss(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,a?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=f.stateNode,s=f.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=aa("display",o))}catch(y){W(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=a?"":f.memoizedProps}catch(y){W(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ae(n,e),We(e),r&4&&xs(e);break;case 21:break;default:Ae(n,e),We(e)}}function We(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Fc(t)){var r=t;break e}t=t.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bt(i,""),r.flags&=-33);var l=ys(e);po(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=ys(e);vo(e,u,o);break;default:throw Error(w(161))}}catch(s){W(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function xv(e,n,t){R=e,Uc(e)}function Uc(e,n,t){for(var r=(e.mode&1)!==0;R!==null;){var i=R,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fr;if(!o){var u=i.alternate,s=u!==null&&u.memoizedState!==null||le;u=Fr;var a=le;if(Fr=o,(le=s)&&!a)for(R=i;R!==null;)o=R,s=o.child,o.tag===22&&o.memoizedState!==null?ws(i):s!==null?(s.return=o,R=s):ws(i);for(;l!==null;)R=l,Uc(l),l=l.sibling;R=i,Fr=u,le=a}Es(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,R=l):Es(e)}}function Es(e){for(;R!==null;){var n=R;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Li(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Me(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&rs(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}rs(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var a=n.alternate;if(a!==null){var c=a.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&tr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||n.flags&512&&fo(n)}catch(d){W(n,n.return,d)}}if(n===e){R=null;break}if(t=n.sibling,t!==null){t.return=n.return,R=t;break}R=n.return}}function Ss(e){for(;R!==null;){var n=R;if(n===e){R=null;break}var t=n.sibling;if(t!==null){t.return=n.return,R=t;break}R=n.return}}function ws(e){for(;R!==null;){var n=R;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Li(4,n)}catch(s){W(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){W(n,i,s)}}var l=n.return;try{fo(n)}catch(s){W(n,l,s)}break;case 5:var o=n.return;try{fo(n)}catch(s){W(n,o,s)}}}catch(s){W(n,n.return,s)}if(n===e){R=null;break}var u=n.sibling;if(u!==null){u.return=n.return,R=u;break}R=n.return}}var Ev=Math.ceil,wi=ln.ReactCurrentDispatcher,lu=ln.ReactCurrentOwner,Oe=ln.ReactCurrentBatchConfig,z=0,Z=null,X=null,ne=0,Se=0,rt=Tn(0),Y=0,vr=null,Bn=0,ji=0,ou=0,Kt=null,pe=null,uu=0,gt=1/0,Je=null,Ni=!1,ho=null,En=null,Lr=!1,pn=null,ki=0,Xt=0,mo=null,br=-1,Zr=0;function fe(){return z&6?Q():br!==-1?br:br=Q()}function Sn(e){return e.mode&1?z&2&&ne!==0?ne&-ne:rv.transition!==null?(Zr===0&&(Zr=wa()),Zr):(e=A,e!==0||(e=window.event,e=e===void 0?16:_a(e.type)),e):1}function $e(e,n,t,r){if(50<Xt)throw Xt=0,mo=null,Error(w(185));hr(e,t,r),(!(z&2)||e!==Z)&&(e===Z&&(!(z&2)&&(ji|=t),Y===4&&dn(e,ne)),xe(e,r),t===1&&z===0&&!(n.mode&1)&&(gt=Q()+500,Ai&&Rn()))}function xe(e,n){var t=e.callbackNode;rd(e,n);var r=ui(e,e===Z?ne:0);if(r===0)t!==null&&Pu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Pu(t),n===1)e.tag===0?tv(Ns.bind(null,e)):Xa(Ns.bind(null,e)),bd(function(){!(z&6)&&Rn()}),t=null;else{switch(Na(r)){case 1:t=zo;break;case 4:t=Ea;break;case 16:t=oi;break;case 536870912:t=Sa;break;default:t=oi}t=Kc(t,$c.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function $c(e,n){if(br=-1,Zr=0,z&6)throw Error(w(327));var t=e.callbackNode;if(at()&&e.callbackNode!==t)return null;var r=ui(e,e===Z?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ii(e,r);else{n=r;var i=z;z|=2;var l=Hc();(Z!==e||ne!==n)&&(Je=null,gt=Q()+500,Fn(e,n));do try{Nv();break}catch(u){Bc(e,u)}while(1);Qo(),wi.current=l,z=i,X!==null?n=0:(Z=null,ne=0,n=Y)}if(n!==0){if(n===2&&(i=Hl(e),i!==0&&(r=i,n=go(e,i))),n===1)throw t=vr,Fn(e,0),dn(e,r),xe(e,Q()),t;if(n===6)dn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Sv(i)&&(n=Ii(e,r),n===2&&(l=Hl(e),l!==0&&(r=l,n=go(e,l))),n===1))throw t=vr,Fn(e,0),dn(e,r),xe(e,Q()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(w(345));case 2:Pn(e,pe,Je);break;case 3:if(dn(e,r),(r&130023424)===r&&(n=uu+500-Q(),10<n)){if(ui(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Yl(Pn.bind(null,e,pe,Je),n);break}Pn(e,pe,Je);break;case 4:if(dn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Ue(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ev(r/1960))-r,10<r){e.timeoutHandle=Yl(Pn.bind(null,e,pe,Je),r);break}Pn(e,pe,Je);break;case 5:Pn(e,pe,Je);break;default:throw Error(w(329))}}}return xe(e,Q()),e.callbackNode===t?$c.bind(null,e):null}function go(e,n){var t=Kt;return e.current.memoizedState.isDehydrated&&(Fn(e,n).flags|=256),e=Ii(e,n),e!==2&&(n=pe,pe=t,n!==null&&yo(n)),e}function yo(e){pe===null?pe=e:pe.push.apply(pe,e)}function Sv(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!He(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function dn(e,n){for(n&=~ou,n&=~ji,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ue(n),r=1<<t;e[t]=-1,n&=~r}}function Ns(e){if(z&6)throw Error(w(327));at();var n=ui(e,0);if(!(n&1))return xe(e,Q()),null;var t=Ii(e,n);if(e.tag!==0&&t===2){var r=Hl(e);r!==0&&(n=r,t=go(e,r))}if(t===1)throw t=vr,Fn(e,0),dn(e,n),xe(e,Q()),t;if(t===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Pn(e,pe,Je),xe(e,Q()),null}function su(e,n){var t=z;z|=1;try{return e(n)}finally{z=t,z===0&&(gt=Q()+500,Ai&&Rn())}}function Hn(e){pn!==null&&pn.tag===0&&!(z&6)&&at();var n=z;z|=1;var t=Oe.transition,r=A;try{if(Oe.transition=null,A=1,e)return e()}finally{A=r,Oe.transition=t,z=n,!(z&6)&&Rn()}}function au(){Se=rt.current,j(rt)}function Fn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,qd(t)),X!==null)for(t=X.return;t!==null;){var r=t;switch(Vo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&di();break;case 3:ht(),j(ge),j(oe),bo();break;case 5:qo(r);break;case 4:ht();break;case 13:j(B);break;case 19:j(B);break;case 10:Ko(r.type._context);break;case 22:case 23:au()}t=t.return}if(Z=e,X=e=wn(e.current,null),ne=Se=n,Y=0,vr=null,ou=ji=Bn=0,pe=Kt=null,An!==null){for(n=0;n<An.length;n++)if(t=An[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}An=null}return e}function Bc(e,n){do{var t=X;try{if(Qo(),Jr.current=Si,Ei){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ei=!1}if($n=0,b=J=H=null,Gt=!1,cr=0,lu.current=null,t===null||t.return===null){Y=1,vr=n,X=null;break}e:{var l=e,o=t.return,u=t,s=n;if(n=ne,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var a=s,c=u,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=cs(o);if(p!==null){p.flags&=-257,fs(p,o,u,l,n),p.mode&1&&as(l,a,n),n=p,s=a;var m=n.updateQueue;if(m===null){var y=new Set;y.add(s),n.updateQueue=y}else m.add(s);break e}else{if(!(n&1)){as(l,a,n),cu();break e}s=Error(w(426))}}else if(U&&u.mode&1){var E=cs(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),fs(E,o,u,l,n),Wo(mt(s,u));break e}}l=s=mt(s,u),Y!==4&&(Y=2),Kt===null?Kt=[l]:Kt.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var h=kc(l,s,n);ts(l,h);break e;case 1:u=s;var v=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(En===null||!En.has(g)))){l.flags|=65536,n&=-n,l.lanes|=n;var x=Ic(l,u,n);ts(l,x);break e}}l=l.return}while(l!==null)}Wc(t)}catch(S){n=S,X===t&&t!==null&&(X=t=t.return);continue}break}while(1)}function Hc(){var e=wi.current;return wi.current=Si,e===null?Si:e}function cu(){(Y===0||Y===3||Y===2)&&(Y=4),Z===null||!(Bn&268435455)&&!(ji&268435455)||dn(Z,ne)}function Ii(e,n){var t=z;z|=2;var r=Hc();(Z!==e||ne!==n)&&(Je=null,Fn(e,n));do try{wv();break}catch(i){Bc(e,i)}while(1);if(Qo(),z=t,wi.current=r,X!==null)throw Error(w(261));return Z=null,ne=0,Y}function wv(){for(;X!==null;)Vc(X)}function Nv(){for(;X!==null&&!Xf();)Vc(X)}function Vc(e){var n=Qc(e.alternate,e,Se);e.memoizedProps=e.pendingProps,n===null?Wc(e):X=n,lu.current=null}function Wc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=mv(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,X=null;return}}else if(t=hv(t,n,Se),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);Y===0&&(Y=5)}function Pn(e,n,t){var r=A,i=Oe.transition;try{Oe.transition=null,A=1,kv(e,n,t,r)}finally{Oe.transition=i,A=r}return null}function kv(e,n,t,r){do at();while(pn!==null);if(z&6)throw Error(w(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(id(e,l),e===Z&&(X=Z=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Lr||(Lr=!0,Kc(oi,function(){return at(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Oe.transition,Oe.transition=null;var o=A;A=1;var u=z;z|=4,lu.current=null,yv(e,t),jc(t,e),Wd(Xl),si=!!Kl,Xl=Kl=null,e.current=t,xv(t),Jf(),z=u,A=o,Oe.transition=l}else e.current=t;if(Lr&&(Lr=!1,pn=e,ki=i),l=e.pendingLanes,l===0&&(En=null),bf(t.stateNode),xe(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ni)throw Ni=!1,e=ho,ho=null,e;return ki&1&&e.tag!==0&&at(),l=e.pendingLanes,l&1?e===mo?Xt++:(Xt=0,mo=e):Xt=0,Rn(),null}function at(){if(pn!==null){var e=Na(ki),n=Oe.transition,t=A;try{if(Oe.transition=null,A=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,ki=0,z&6)throw Error(w(331));var i=z;for(z|=4,R=e.current;R!==null;){var l=R,o=l.child;if(R.flags&16){var u=l.deletions;if(u!==null){for(var s=0;s<u.length;s++){var a=u[s];for(R=a;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Qt(8,c,l)}var f=c.child;if(f!==null)f.return=c,R=f;else for(;R!==null;){c=R;var d=c.sibling,p=c.return;if(Mc(c),c===a){R=null;break}if(d!==null){d.return=p,R=d;break}R=p}}}var m=l.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}R=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,R=o;else e:for(;R!==null;){if(l=R,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Qt(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,R=h;break e}R=l.return}}var v=e.current;for(R=v;R!==null;){o=R;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,R=g;else e:for(o=v;R!==null;){if(u=R,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Li(9,u)}}catch(S){W(u,u.return,S)}if(u===o){R=null;break e}var x=u.sibling;if(x!==null){x.return=u.return,R=x;break e}R=u.return}}if(z=i,Rn(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(_i,e)}catch{}r=!0}return r}finally{A=t,Oe.transition=n}}return!1}function ks(e,n,t){n=mt(t,n),n=kc(e,n,1),e=xn(e,n,1),n=fe(),e!==null&&(hr(e,1,n),xe(e,n))}function W(e,n,t){if(e.tag===3)ks(e,e,t);else for(;n!==null;){if(n.tag===3){ks(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(En===null||!En.has(r))){e=mt(t,e),e=Ic(n,e,1),n=xn(n,e,1),e=fe(),n!==null&&(hr(n,1,e),xe(n,e));break}}n=n.return}}function Iv(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=fe(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ne&t)===t&&(Y===4||Y===3&&(ne&130023424)===ne&&500>Q()-uu?Fn(e,0):ou|=t),xe(e,n)}function Gc(e,n){n===0&&(e.mode&1?(n=Rr,Rr<<=1,!(Rr&130023424)&&(Rr=4194304)):n=1);var t=fe();e=tn(e,n),e!==null&&(hr(e,n,t),xe(e,t))}function Tv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Gc(e,t)}function Rv(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(n),Gc(e,t)}var Qc;Qc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ge.current)me=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return me=!1,pv(e,n,t);me=!!(e.flags&131072)}else me=!1,U&&n.flags&1048576&&Ja(n,hi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;qr(e,n),e=n.pendingProps;var i=dt(n,oe.current);st(n,t),i=eu(null,n,r,e,i,t);var l=nu();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ye(r)?(l=!0,vi(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jo(n),i.updater=Mi,n.stateNode=i,i._reactInternals=n,ro(n,r,e,t),n=oo(null,n,r,!0,l,t)):(n.tag=0,U&&l&&Ho(n),se(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(qr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=_v(r),e=Me(r,e),i){case 0:n=lo(null,n,r,e,t);break e;case 1:n=ps(null,n,r,e,t);break e;case 11:n=ds(null,n,r,e,t);break e;case 14:n=vs(null,n,r,Me(r.type,e),t);break e}throw Error(w(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Me(r,i),lo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Me(r,i),ps(e,n,r,i,t);case 3:e:{if(_c(n),e===null)throw Error(w(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Za(e,n),yi(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=mt(Error(w(423)),n),n=hs(e,n,r,t,i);break e}else if(r!==i){i=mt(Error(w(424)),n),n=hs(e,n,r,t,i);break e}else for(we=yn(n.stateNode.containerInfo.firstChild),Ne=n,U=!0,je=null,t=rc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(vt(),r===i){n=rn(e,n,t);break e}se(e,n,r,t)}n=n.child}return n;case 5:return ic(n),e===null&&eo(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Jl(r,i)?o=null:l!==null&&Jl(r,l)&&(n.flags|=32),Cc(e,n),se(e,n,o,t),n.child;case 6:return e===null&&eo(n),null;case 13:return Oc(e,n,t);case 4:return Yo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=pt(n,null,r,t):se(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Me(r,i),ds(e,n,r,i,t);case 7:return se(e,n,n.pendingProps,t),n.child;case 8:return se(e,n,n.pendingProps.children,t),n.child;case 12:return se(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,F(mi,r._currentValue),r._currentValue=o,l!==null)if(He(l.value,o)){if(l.children===i.children&&!ge.current){n=rn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Ze(-1,t&-t),s.tag=2;var a=l.updateQueue;if(a!==null){a=a.shared;var c=a.pending;c===null?s.next=s:(s.next=c.next,c.next=s),a.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),no(l.return,t,n),u.lanes|=t;break}s=s.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(w(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),no(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}se(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,st(n,t),i=Pe(i),r=r(i),n.flags|=1,se(e,n,r,t),n.child;case 14:return r=n.type,i=Me(r,n.pendingProps),i=Me(r.type,i),vs(e,n,r,i,t);case 15:return Tc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Me(r,i),qr(e,n),n.tag=1,ye(r)?(e=!0,vi(n)):e=!1,st(n,t),nc(n,r,i),ro(n,r,i,t),oo(null,n,r,!0,e,t);case 19:return Pc(e,n,t);case 22:return Rc(e,n,t)}throw Error(w(156,n.tag))};function Kc(e,n){return xa(e,n)}function Cv(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,n,t,r){return new Cv(e,n,t,r)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _v(e){if(typeof e=="function")return fu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Oo)return 11;if(e===Po)return 14}return 2}function wn(e,n){var t=e.alternate;return t===null?(t=_e(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ei(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")fu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Kn:return Ln(t.children,i,l,n);case _o:o=8,i|=8;break;case Rl:return e=_e(12,t,n,i|2),e.elementType=Rl,e.lanes=l,e;case Cl:return e=_e(13,t,n,i),e.elementType=Cl,e.lanes=l,e;case _l:return e=_e(19,t,n,i),e.elementType=_l,e.lanes=l,e;case ta:return Ui(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ea:o=10;break e;case na:o=9;break e;case Oo:o=11;break e;case Po:o=14;break e;case an:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return n=_e(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function Ln(e,n,t,r){return e=_e(7,e,r,n),e.lanes=t,e}function Ui(e,n,t,r){return e=_e(22,e,r,n),e.elementType=ta,e.lanes=t,e.stateNode={isHidden:!1},e}function yl(e,n,t){return e=_e(6,e,null,n),e.lanes=t,e}function xl(e,n,t){return n=_e(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ov(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zi(0),this.expirationTimes=Zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function du(e,n,t,r,i,l,o,u,s){return e=new Ov(e,n,t,u,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=_e(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jo(l),e}function Pv(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Xc(e){if(!e)return kn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(w(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ye(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(w(171))}if(e.tag===1){var t=e.type;if(ye(t))return Ka(e,t,n)}return n}function Jc(e,n,t,r,i,l,o,u,s){return e=du(t,r,!0,e,i,l,o,u,s),e.context=Xc(null),t=e.current,r=fe(),i=Sn(t),l=Ze(r,i),l.callback=n??null,xn(t,l,i),e.current.lanes=i,hr(e,i,r),xe(e,r),e}function $i(e,n,t,r){var i=n.current,l=fe(),o=Sn(i);return t=Xc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ze(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=xn(i,n,o),e!==null&&($e(e,i,o,l),Xr(e,i,o)),o}function Ti(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Is(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function vu(e,n){Is(e,n),(e=e.alternate)&&Is(e,n)}function Dv(){return null}var Yc=typeof reportError=="function"?reportError:function(e){console.error(e)};function pu(e){this._internalRoot=e}Bi.prototype.render=pu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(w(409));$i(e,n,null,null)};Bi.prototype.unmount=pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Hn(function(){$i(null,e,null,null)}),n[nn]=null}};function Bi(e){this._internalRoot=e}Bi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ta();e={blockedOn:null,target:e,priority:n};for(var t=0;t<fn.length&&n!==0&&n<fn[t].priority;t++);fn.splice(t,0,e),t===0&&Ca(e)}};function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ts(){}function zv(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var a=Ti(o);l.call(a)}}var o=Jc(n,r,e,0,null,!1,!1,"",Ts);return e._reactRootContainer=o,e[nn]=o.current,lr(e.nodeType===8?e.parentNode:e),Hn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var a=Ti(s);u.call(a)}}var s=du(e,0,!1,null,null,!1,!1,"",Ts);return e._reactRootContainer=s,e[nn]=s.current,lr(e.nodeType===8?e.parentNode:e),Hn(function(){$i(n,s,t,r)}),s}function Vi(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var s=Ti(o);u.call(s)}}$i(n,o,e,i)}else o=zv(t,n,e,i,r);return Ti(o)}ka=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ft(n.pendingLanes);t!==0&&(Ao(n,t|1),xe(n,Q()),!(z&6)&&(gt=Q()+500,Rn()))}break;case 13:Hn(function(){var r=tn(e,1);if(r!==null){var i=fe();$e(r,e,1,i)}}),vu(e,1)}};Mo=function(e){if(e.tag===13){var n=tn(e,134217728);if(n!==null){var t=fe();$e(n,e,134217728,t)}vu(e,134217728)}};Ia=function(e){if(e.tag===13){var n=Sn(e),t=tn(e,n);if(t!==null){var r=fe();$e(t,e,n,r)}vu(e,n)}};Ta=function(){return A};Ra=function(e,n){var t=A;try{return A=e,n()}finally{A=t}};Ul=function(e,n,t){switch(n){case"input":if(Dl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=zi(r);if(!i)throw Error(w(90));ia(r),Dl(r,i)}}}break;case"textarea":oa(e,t);break;case"select":n=t.value,n!=null&&it(e,!!t.multiple,n,!1)}};va=su;pa=Hn;var Av={usingClientEntryPoint:!1,Events:[gr,qn,zi,fa,da,su]},Ot={findFiberByHostInstance:zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Mv={bundleType:Ot.bundleType,version:Ot.version,rendererPackageName:Ot.rendererPackageName,rendererConfig:Ot.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ga(e),e===null?null:e.stateNode},findFiberByHostInstance:Ot.findFiberByHostInstance||Dv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jr.isDisabled&&jr.supportsFiber)try{_i=jr.inject(Mv),Ke=jr}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av;Ie.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hu(n))throw Error(w(200));return Pv(e,n,null,t)};Ie.createRoot=function(e,n){if(!hu(e))throw Error(w(299));var t=!1,r="",i=Yc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=du(e,1,!1,null,null,t,!1,r,i),e[nn]=n.current,lr(e.nodeType===8?e.parentNode:e),new pu(n)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=ga(n),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return Hn(e)};Ie.hydrate=function(e,n,t){if(!Hi(n))throw Error(w(200));return Vi(null,e,n,!0,t)};Ie.hydrateRoot=function(e,n,t){if(!hu(e))throw Error(w(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Yc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Jc(n,null,e,1,t??null,i,!1,l,o),e[nn]=n.current,lr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Bi(n)};Ie.render=function(e,n,t){if(!Hi(n))throw Error(w(200));return Vi(null,e,n,!1,t)};Ie.unmountComponentAtNode=function(e){if(!Hi(e))throw Error(w(40));return e._reactRootContainer?(Hn(function(){Vi(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};Ie.unstable_batchedUpdates=su;Ie.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Hi(t))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Vi(e,n,t,!1,r)};Ie.version="18.2.0-next-9e3b772b8-20220608";function qc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qc)}catch(e){console.error(e)}}qc(),Js.exports=Ie;var Fv=Js.exports,Rs=Fv;Su.createRoot=Rs.createRoot,Su.hydrateRoot=Rs.hydrateRoot;const s0=(e,n)=>{let t;return(...r)=>(clearTimeout(t),t=setTimeout(()=>e(...r),n),()=>clearTimeout(t))},Jt=(e,n=null,t=1,r=!1)=>{if(n===null&&(n=e,e=0),t===0)throw new Error("Step cannot be zero.");if(n<e&&t>0||n>e&&t<0){if(r)return[];t=-t}return new Array(Math.ceil((n-e)/t)).fill().map((i,l)=>e+l*t)},Lv=(e,n)=>e.length!==n.length?!1:e.every((t,r)=>Array.isArray(t)?Lv(t,n[r]):t===n[r]),jv=(e,n)=>{let t=0;for(let r=0;r<e.length;r++)t+=e[r]*n[r];return t},Cs=(e,n)=>{const t=[];for(let r=0;r<e.length;r++)t[r]=e[r]*n;return t},Ri=e=>{const n=[];for(let t=0;t<e[0].length;t++){n.push([]);for(let r=0;r<e.length;r++)n[t].push(e[r][t])}return n},xo=e=>{for(let n=0;n<e.length;n++)for(let t=0;t<e[n].length;t++)e[n][t]=Hv(e[n][t]);return e},Le=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){t[r]=new Array(n[0].length);for(let i=0;i<n[0].length;i++){let l=0;for(let o=0;o<n.length;o++)l+=e[r][o]*n[o][i];t[r][i]=l}}return t},Uv=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){let i=0;for(let l=0;l<e[0].length;l++)i+=e[r][l]*n[l];t[r]=i}return t},a0=(e,n)=>{for(let t=0;t<e.length;t++)for(let r=0;r<e[0].length;r++)e[t][r]=n[t][r];return e},mu=e=>{const n=new Array(e.length);for(let t=0;t<e.length;t++)n[t]=new Array(e.length).fill(0),n[t][t]=e[t];return n},Ve=e=>{const n=new Array(e).fill(1);return mu(n)},$v=e=>e.every((n,t)=>n.every((r,i)=>t===i||e[t][i]===0)),Bv=e=>{const n=e[0].length;let t=e.map(s=>s.slice()),r=Ve(n),i=1e3;for(;!$v(t)&&i-- >0;){let s=0,a=1;for(let d=0;d<n;d++)for(let p=0;p<n;p++)d!==p&&Yt(t[d][p])>Yt(t[s][a])&&(s=d,a=p);const c=t[s][s]===t[a][a]?Wi(t[s][a])*ce/4:.5*qv(2*t[s][a]/(t[s][s]-t[a][a])),f=Ve(n);f[a][a]=f[s][s]=he(c),f[a][s]=f[s][a]=-ae(c),f[a][s]*=-1,r=Le(r,f),t=Le(Le(Ri(f),t),f)}const l=t.map((s,a)=>Yt(s[a])<1e-8?0:s[a]),o=l.map((s,a)=>[s,a]).sort((s,a)=>a[0]-s[0]).map(s=>s[1]),u=Ri(r);return{values:o.map(s=>l[s]),vectors:o.map(s=>u[s])}},bc=e=>{const n=e.length,t=[];for(let r=0;r<n;r++)t.push([...e[r],...Ve(n)[r]]);for(let r=0;r<n;r++){const i=t[r][r];for(let l=r+1;l<n;l++){const o=t[l][r]/i;for(let u=r;u<2*n;u++)t[l][u]-=o*t[r][u]}}for(let r=n-1;r>=0;r--){const i=t[r][r];for(let l=r-1;l>=0;l--){const o=t[l][r]/i;for(let u=0;u<2*n;u++)t[l][u]-=o*t[r][u]}for(let l=n;l<2*n;l++)t[r][l]/=i}return t.map(r=>r.slice(n))},Hv=e=>Yt(e)<1e-9?0:e,Vv=e=>{const n=e.length,t=Ve(n),r=Ve(n);for(let i=0;i<n;i++){t[i][i]=e[i][i];for(let l=0;l<i;l++)t[i][i]-=r[i][l]**2*t[l][l];for(let l=i+1;l<n;l++){let o=0;for(let u=0;u<i;u++)o+=r[i][u]*r[l][u]*t[u][u];r[l][i]=(e[l][i]-o)/t[i][i]}}return xo(t),xo(r),{L:r,D:t}},ct=e=>{if(e.length===2)return[e[0][0],e[1][0],e[0][1],e[1][1]];if(e.length===3)return[e[0][0],e[1][0],e[2][0],e[0][1],e[1][1],e[2][1],e[0][2],e[1][2],e[2][2]];if(e.length===4)return[e[0][0],e[1][0],e[2][0],e[3][0],e[0][1],e[1][1],e[2][1],e[3][1],e[0][2],e[1][2],e[2][2],e[3][2],e[0][3],e[1][3],e[2][3],e[3][3]];if(e.length===5)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],e[0][4]],[[e[1][0],e[1][1],e[1][2],e[1][3]],e[1][4]],[[e[2][0],e[2][1],e[2][2],e[2][3]],e[2][4]],[[e[3][0],e[3][1],e[3][2],e[3][3]],e[3][4]],[[e[4][0],e[4][1],e[4][2],e[4][3]],e[4][4]]];if(e.length===6)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5]]]];if(e.length===7)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6]]]];if(e.length===8)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]]]];if(e.length===9)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]],e[0][8]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]],e[1][8]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]],e[2][8]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]],e[3][8]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]],e[4][8]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]],e[5][8]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]],e[6][8]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]],e[7][8]],[[e[8][0],e[8][1],e[8][2],e[8][3]],[e[8][4],e[8][5],e[8][6],e[8][7]],e[8][8]]];throw new Error("Unsupported matrix size")},Wv=({left:e,right:n,top:t,bottom:r,near:i,far:l})=>{const o=Ve(4);return o[0][0]=2*i/(n-e),o[0][2]=(n+e)/(n-e),o[1][1]=2*i/(t-r),o[1][2]=(t+r)/(t-r),o[2][2]=-(l+i)/(l-i),o[2][3]=-2*i*l/(l-i),o[3][2]=-1,o[3][3]=0,o},_s=(e,n)=>e.filter((t,r)=>!n.includes(r)),c0=(e,n)=>_s(e,n).map(t=>_s(t,n)),Gv=(e,n)=>n.some((t,r)=>t.some((i,l)=>r===l&&i===0))?Cs(e,1/e[e.length-1]):Cs(e,-1/$(Yt(jv(Uv(n,e),e)))),f0=(e,n)=>xo(e.map((t,r)=>t.map((i,l)=>i<0?-Xv(-i/10):i===0?-1:-he(n[r][l]*ce/i)))),Zc=e=>{const n=Bv(e);return{"+":n.values.filter(t=>t>0).length,"-":n.values.filter(t=>t<0).length,0:n.values.filter(t=>t===0).length,eigens:n}},ef=(e,n=[],t=0,r=10)=>{n[t]=n[t]||[];for(let i=0;i<e.length;i++){const l=e.filter((o,u)=>u!==i).map(o=>o.filter((u,s)=>s!==i));n[t].push(Zc(l)),l.length>1&&t+1<r&&ef(l,n,t+1,r)}return n},d0=e=>{const n=Zc(e),t=n.eigens,r=mu(t.values.map(u=>Wi(u))),i={eigens:t,gram:e,metric:r};if(n["-"]===0&&n[0]===0)return{...i,type:"finite",curvature:1};if(n["-"]===0&&n[0]>0)return{...i,type:"affine",curvature:0};if(n["-"]>1)return{...i,type:"hyperbolic",subtype:"superhyperbolic",level:n["-"],curvature:-1};const l=ef(e,[],0,3),o=l[0];if(o.every(u=>u["-"]===0&&u[0]===0))return{...i,type:"hyperbolic",subtype:"compact",curvature:-1};if(o.every(u=>u["-"]===0))return{...i,type:"hyperbolic",subtype:"paracompact",curvature:-1};for(let u=1;u<l.length;u++)if(l[u].every(a=>a["-"]===0))return{...i,type:"hyperbolic",subtype:"lorentzian",curvature:-1,level:u+1};return console.info("indefinite",l),{...i,type:"indefinite",curvature:-1}},Eo=1,Os=e=>e.map((n,t)=>n.map((r,i)=>t===i&&r===0?Eo:r)),v0=(e,n)=>{const t=e.eigens,r=e.metric;if(n){const{L:m,D:y}=Vv(e.gram);let E;if(y.some((h,v)=>isNaN(y[v][v])))console.warn("Can’t cholesky"),E=Kv(e,n);else{const h=Le(r,y).map((v,g)=>v.map((x,S)=>g===S?$(x):0));r.forEach((v,g)=>{v[g]===0&&(h[g][g]=Eo)}),E=Le(m,h)}if(E){const h=Le(E,Os(r)),v=bc(h);if(!v.some(g=>g.some(x=>isNaN(x))))return{normals:E,vertices:v}}console.warn("Can’t center")}const i=t.values.slice(),l=t.vectors.slice(),o=Be(...i.filter(m=>m>0)),u=i.indexOf(o);[r[u][u],r[1][1]]=[r[1][1],r[u][u]],l.splice(1,0,l.splice(u,1)[0]),i.splice(u,1),i.splice(1,0,o),i.forEach((m,y)=>{m===0&&(i[y]=.05)});const s=Ri(l),a=mu(i),c=Le(r,a).map((m,y)=>m.map((E,h)=>y===h?$(E):0));r.forEach((m,y)=>{m[y]===0&&(c[y][y]=Eo)});const f=c.map((m,y)=>m.map((E,h)=>y===h?E!==0?1/E:1:0)),d=Le(s,c),p=Le(Le(Os(r),f),Ri(s));return{normals:d,vertices:p}},Qv=e=>e.sort((n,t)=>{const[r,i]=n,[l,o]=t;return r===0&&i===1?1:l===0&&o===1||r<2&&l>=2?-1:l<2&&r>=2?1:r<2&&l<2?i===o?l-r:i-o:r===l?o-i:l-r}),p0=(e,n)=>{const t=Qv(El(Jt(e),2));if(n.metric.filter((r,i)=>n.metric[i][i]<0).length===1){const r=[...El(Jt(e-1),2),...El(Jt(e-1),2).map(([i,l])=>[l,i])].sort((i,l)=>i[0]-l[0]||(i[0]<i[1]?i[1]-l[1]:l[1]-i[1])).map(([i,l])=>[-i,-l]);if(t.length%2){const i=t.pop();t.push(...r,i)}else t.push(...r)}return{combinations:t,maxShift:~~np(t.length/2)}},h0=(e,[n,t],r,i)=>{const l=Ve(r);if(n<0||t<0){const c=-n;n=-t,t=Jt(r).find(d=>i[d][d]<0);const f=.5*e*e;return l[c][c]=1-f,l[t][t]=1+f,l[c][n]=e,l[n][c]=-e,l[n][t]=e,l[t][n]=e,l[c][t]=f,l[t][c]=-f,l}if(i[n][n]*i[t][t]===0)return i[n][n]===0&&(l[t][n]=e),i[t][t]===0&&(l[n][t]=e),l;const o=i[n][n]*i[t][t],s=(o>0?ae:Jv)(e),a=$(1-o*s*s);return l[n][n]=a,l[t][t]=a,l[n][t]=-o*s,l[t][n]=s,l},Ur=(e,n,t,r)=>{const i=ce/e,l=ce/n,o=ce/t;return Zv(ce/Yv(-he(i)*he(o)+ae(i)*ae(o)*((he(l)-he(r*i)*he(o))/(ae(r*i)*ae(o)))))},Kv=(e,n)=>{const t=e.gram,r=t.length,i=e.curvature;let l=null;const o=t.every((u,s)=>u.every((a,c)=>s===c||a<=-1));if(n||o){if(l=new Array(r).fill(0).map(()=>new Array(r).fill(0)),r===2){const u=(t[0][1]+1)/2;return l[0][0]=$(u-t[0][1]),l[1][0]=-$(u-t[0][1]),l[0][1]=l[1][1]=$((i||1)*u),i===0&&(l[1][1]=.5),l}else if(r===3){const u=t[0][1],s=t[1][2],a=t[0][2],c=(u*u+s*s+a*a-2*u*s*a-1)/(u*u+s*s+a*a-2*u*s-2*u*a-2*s*a+2*u+2*s+2*a-3);return l[0][2]=l[1][2]=l[2][2]=$(i*c),l[2][1]=-$(1-c),l[1][1]=(s-c)/l[2][1],l[0][1]=(a-c)/l[2][1],l[1][0]=-$(1-l[1][1]**2-c),l[0][0]=$(1-l[0][1]**2-c),i===0&&(l[2][2]=.5),l}else if(r===4){const u=t[0][1],s=t[1][2],a=t[2][3],c=t[0][2],f=t[1][3],d=t[0][3],p=(u*u*a*a+s*s*d*d+c*c*f*f-u*u-s*s-a*a-c*c-f*f-d*d+2*u*f*d+2*u*s*c+2*s*a*f+2*a*c*d-2*s*c*f*d-2*u*s*a*d-2*u*a*c*f+1)/(2*(u*u*a+s*s*d+a*a*u+c*c*f+f*f*c+d*d*s-u*u-s*s-a*a-c*c-f*f-d*d-u*s*a-u*s*d-u*a*c-u*a*f-u*a*d-u*c*f-s*a*d-s*c*f-s*c*d-s*f*d-a*c*f-c*f*d+u*s*c+u*f*d+s*a*f+a*c*d+u*s+u*c+u*f+u*d+s*a+s*c+s*f+a*c+a*f+a*d+c*d+f*d-u-s-a-c-f-d+2));return l[0][3]=l[1][3]=l[2][3]=l[3][3]=$(i*p),l[3][2]=-$(1-p),l[2][2]=(a-p)/l[3][2],l[1][2]=(f-p)/l[3][2],l[0][2]=(d-p)/l[3][2],l[2][1]=-$(1-p-l[2][2]**2),l[1][1]=(s-p-l[1][2]*l[2][2])/l[2][1],l[0][1]=(c-p-l[0][2]*l[2][2])/l[2][1],l[1][0]=-$(1-p-l[1][1]**2-l[1][2]**2),l[0][0]=$(1-p-l[0][1]**2-l[0][2]**2),i===0&&(l[3][3]=.5),l}if(t.every((u,s)=>u.every((a,c)=>s===c||a===-1))){const u=[0];for(let s=1;s<r;s++)u[s]=(u[s-1]+1)/(3-u[s-1]);l[0][0]=1,l[1][0]=-1,l[0][1]=$(u[1]),l[1][1]=$(u[1]);for(let s=0;s<r;s++)for(let a=0;a<r;a++)s<2&&a<2||(l[s][a]=a<s-1?0:a===s-1?s*$(u[a]-u[a-1]):a<r-1?$(u[a]-u[a-1]):$(u[a-1]));return l}}},{abs:Yt,cos:he,sin:ae,tan:nf,cosh:Xv,sinh:Jv,acos:Yv,acosh:m0,atan:qv,atan2:bv,min:Be,max:Pt,round:Zv,sqrt:$,cbrt:ep,sign:Wi,ceil:np,floor:g0,log:y0,exp:x0,hypot:E0,pow:tp,PI:ce}=Math,So=ce*2;function*rp(e,n){if(n<0||e.length<n)return;const t=Array.from(Array(n).keys());for(;;){yield t.map(i=>e[i]);let r=n-1;for(;r>=0&&t[r]>=e.length-n+r;)r--;if(r<0)return;for(let i=t[r]+1;r<n;r++,i++)t[r]=i}}const El=(e,n=2)=>Array.from(rp(e,n)),Ee=e=>String.fromCharCode(97+e),Ps=e=>e.charCodeAt(0)-97,S0=(e,n,t,r=[])=>{const i=[];for(let l=0;l<e;l++)r.includes(l)||i.push(Ee(l).repeat(2));for(let l=1;l<e;l++)for(let o=0;o<l;o++)!r.includes(l)&&!r.includes(o)&&n[l][o]>1&&i.push((Ee(o)+Ee(l)).repeat(n[l][o]));if(!r.length&&t&&!t.every(l=>l.every(o=>o===1))){if(e===4&&t[0][1]>1!=t[2][3]>1&&n[0][1]>3&&n[2][3]>3)t[0][1]>1&&i.push("abcdcb".repeat(Ur(n[0][1],n[1][2],n[0][2],t[0][1]))),t[2][3]>1&&i.push("abcdcb".repeat(Ur(n[2][3],n[1][2],n[1][3],t[2][3])));else for(let l=1;l<e;l++)for(let o=0;o<l;o++)if(t[o][l]>1){if(o+2<e){const u=Ur(n[o+1][l+1],n[o][l],n[o][l+1],t[o][l]);i.push((Ee(o)+Ee(l)+Ee(o+2)+Ee(l)).repeat(u))}if(o-1>=0){const u=Ur(n[o-1][l-1],n[o][l],n[o-1][l],t[o][l]);i.push((Ee(o)+Ee(l)+Ee(o)+Ee(o-1)).repeat(u))}}}return i};var tf={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(cf,function(){var t=function(){function r(p){return o.appendChild(p.dom),p}function i(p){for(var m=0;m<o.children.length;m++)o.children[m].style.display=m===p?"block":"none";l=p}var l=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(p){p.preventDefault(),i(++l%o.children.length)},!1);var u=(performance||Date).now(),s=u,a=0,c=r(new t.Panel("FPS","#0ff","#002")),f=r(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=r(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:r,showPanel:i,begin:function(){u=(performance||Date).now()},end:function(){a++;var p=(performance||Date).now();if(f.update(p-u,200),p>s+1e3&&(c.update(1e3*a/(p-s),100),s=p,a=0,d)){var m=performance.memory;d.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return p},update:function(){u=this.end()},domElement:o,setMode:i}};return t.Panel=function(r,i,l){var o=1/0,u=0,s=Math.round,a=s(window.devicePixelRatio||1),c=80*a,f=48*a,d=3*a,p=2*a,m=3*a,y=15*a,E=74*a,h=30*a,v=document.createElement("canvas");v.width=c,v.height=f,v.style.cssText="width:80px;height:48px";var g=v.getContext("2d");return g.font="bold "+9*a+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=l,g.fillRect(0,0,c,f),g.fillStyle=i,g.fillText(r,d,p),g.fillRect(m,y,E,h),g.fillStyle=l,g.globalAlpha=.9,g.fillRect(m,y,E,h),{dom:v,update:function(x,S){o=Math.min(o,x),u=Math.max(u,x),g.fillStyle=l,g.globalAlpha=1,g.fillRect(0,0,c,y),g.fillStyle=i,g.fillText(s(x)+" "+r+" ("+s(o)+"-"+s(u)+")",d,p),g.drawImage(v,m+a,y,E-a,h,m,y,E-a,h),g.fillRect(m+E-a,y,a,h),g.fillStyle=l,g.globalAlpha=.9,g.fillRect(m+E-a,y,a,s((1-x/S)*h))}}},t})})(tf);var ip=tf.exports;const lp=ff(ip),op=({radius:e=1,widthSegments:n=16,segments:t=16}={})=>{const r=[],i=[],l=[],o=[];let u=0;const s=[];for(let a=0;a<=t;a++){const c=[],f=a/t;let d=0;a===0?d=.5/n:a===t&&(d=-.5/n);for(let p=0;p<=n;p++){const m=p/n,y=[-e*he(m*So)*ae(f*ce),e*he(f*ce),e*ae(m*So)*ae(f*ce)];i.push(...y);const E=(y[0]**2+y[1]**2+y[2]**2)**-.5;l.push(...y.map(h=>h*E)),o.push(m+d,1-f),c.push(u++)}s.push(c)}for(let a=0;a<t;a++)for(let c=0;c<n;c++){const f=s[a][c+1],d=s[a][c],p=s[a+1][c],m=s[a+1][c+1];a!==0&&r.push(f,d,m),a!==t-1&&r.push(d,p,m)}return{vertices:i,normals:l,uvs:o,indices:r}},up=({radius:e=null,radiusTop:n=1,radiusBottom:t=1,height:r=1,radialSegments:i=8,segments:l=1}={})=>{const o=[],u=[],s=[],a=[];e!==null&&(n=e,t=e);let c=0;const f=[],d=r/2,p=(t-n)/r;for(let m=0;m<=l;m++){const y=[],E=m/l,h=E*(t-n)+n;for(let v=0;v<=i;v++){const g=v/i,x=g*So,S=ae(x),I=he(x),N=[h*S,-E*r+d,h*I];u.push(...N);const k=[S,p,I],M=(k[0]**2+k[1]**2+k[2]**2)**-.5;s.push(...k.map(P=>P*M)),a.push(g,1-E),y.push(c++)}f.push(y)}for(let m=0;m<i;m++)for(let y=0;y<l;y++){const E=f[y][m],h=f[y+1][m],v=f[y+1][m+1],g=f[y][m+1];o.push(E,h,g),o.push(h,v,g)}return{vertices:u,normals:s,uvs:a,indices:o}},sp=({segments:e=3}={})=>{const n=[],t=[],r=[],i=[],l=1/e;for(let o=0;o<e+1;o++)for(let u=0;u<o+1;u++)t.push((2*u-o)*l/2,o*l,0),r.push(0,0,1),i.push(l*u,1-l*o);for(let o=1;o<e+1;o++)for(let u=0;u<o;u++){const s=o*(o+1)/2+u,a=o*(o-1)/2+u;if(n.push(s,a,s+1),o<e){const c=(o+1)*(o+2)/2+u;n.push(c+1,s,s+1)}}return{vertices:t,normals:r,uvs:i,indices:n}},ap="dsbßx",cp=e=>e!==""&&e!=="x",ni=e=>e==="d"||e==="b",rf=e=>e==="s"||e==="b",fp=e=>e==="ß",$r={active:1,inactive:0,dual:"d",snub:"s",holosnub:"ß",dualsnub:"b",custom:.5,activeVoid:"x",void:""},lf=e=>e===0?"inactive":e===1?"active":e==="d"?"dual":e==="s"?"snub":e==="ß"?"holosnub":e==="b"?"dualsnub":e==="x"?"activeVoid":e===""?"void":"custom",dp=(e,n,t,r)=>{const i=[],l=[],o=[];for(let s=0;s<e.ranges.face[1];s++){const a=e.face[s],c=new Array(t).fill(0);for(let f=0;f<a.vertices.length;f++){const d=e.vertex[a.vertices[f]];for(let p=0;p<t;p++)c[p]+=d.vertex[p]}for(let f=0;f<t;f++)c[f]/=a.vertices.length;i.push({vertex:Gv(c,r),word:a.word})}const u=new Map;for(let s=0;s<e.ranges.face[1];s++)for(let a=s+1;a<e.ranges.face[1];a++){const c=e.face[s],f=e.face[a];c.vertices.filter(p=>f.vertices.includes(p)).length>1&&(l.push({start:s,end:a,word:c.word}),u.has(s)||u.set(s,[]),u.has(a)||u.set(a,[]),u.get(s).push(a),u.get(a).push(s))}for(let s=0;s<e.ranges.vertex[1];s++){const a=[];for(let d=0;d<e.ranges.face[1];d++)e.face[d].vertices.includes(s)&&a.push(d);const c=[a.shift()];let f=!1;for(;a.length>1;){const d=c[c.length-1],p=u.get(d);if(!p){f=!0;break}const m=a.find(y=>p.includes(y));if(!m){f=!0;break}a.splice(a.indexOf(m),1),c.push(m)}f||(c.push(a[0]),o.push({vertices:c,word:e.vertex[s].word}))}return{vertex:i,edge:l,face:o,ranges:{vertex:[0,i.length],edge:[0,l.length],face:[0,o.length]}}},vp=(e,n,t,r)=>{const i=new Map,l=[],o=[],u=[],s=n.map((f,d)=>rf(f)?Ee(d):"").join(""),a=s.length>0?new RegExp(`[^${s}]`,"g"):null;for(let f=0;f<e.ranges.vertex[1];f++){const d=e.vertex[f];d.word.replace(a,"").length%2===1?(d.vertex=NaN,i.set(f,[])):l.push(d)}for(let f=0;f<e.ranges.edge[1];f++)if(i.has(e.edge[f].start)){const d=i.get(e.edge[f].start);d.push(e.edge[f].end),d.word||(d.word=e.edge[f].word),i.get(e.edge[f].start).push(e.edge[f].end)}else if(i.has(e.edge[f].end)){const d=i.get(e.edge[f].end);d.push(e.edge[f].start),d.word||(d.word=e.edge[f].word),i.get(e.edge[f].end).push(e.edge[f].start)}else o.push(e.edge[f]);const c=Array.from(i.keys());for(let f=0;f<i.size;f++){const d=c[f],p=i.get(d),m=i.get(d);for(let y=0;y<p.length;y++)for(let E=0;E<m.length;E++)p[y]<=m[E]||o.push({start:p[y],end:m[E],word:m.word})}for(let f=0;f<o.length;f++){const d=o[f];for(let p=0;p<2;p++){const m=p?"start":"end",y=d[m];for(let E=0;E<i.size&&!(c[E]>y);E++)d[m]--}}for(let f=0;f<e.ranges.face[1];f++){const d=e.face[f],p=[];for(let m=0;m<d.vertices.length;m++)i.has(d.vertices[m])||p.push(d.vertices[m]);u.push({...d,vertices:p})}for(let f=0;f<i.size;f++){const d=c[f],p=i.get(d);u.push({vertices:p,word:p.word})}for(let f=0;f<u.length;f++){const d=u[f];for(let p=0;p<d.vertices.length;p++){const m=d.vertices[p];for(let y=0;y<i.size&&!(c[y]>m);y++)d.vertices[p]--}}return{vertex:l,edge:o,face:u,ranges:{vertex:[0,l.length],edge:[0,o.length],face:[0,u.length]}}},pp=(e,n,t,r)=>{const i=[new Map,new Map],l=[],o=[],u=[],s=n.map((f,d)=>f==="ß"?Ee(d):"").join(""),a=s.length>0?new RegExp(`[^${s}]`,"g"):null;for(let f=0;f<e.ranges.vertex[1];f++){const d=e.vertex[f];i[d.word.replace(a,"").length%2].set(d.i,[])}l.push(...e.vertex);const c=[new Map,new Map];for(let f=0;f<2;f++){for(let p=0;p<e.ranges.edge[1];p++)if(i[f].has(e.edge[p].start)){c[f].has(e.edge[p].start)||c[f].set(e.edge[p].start,[]);const m=i[f].get(e.edge[p].start);m.push(e.edge[p].end),m.word||(m.word=e.edge[p].word),c[f].get(e.edge[p].start).push(e.edge[p].end)}else if(i[f].has(e.edge[p].end)){c[f].has(e.edge[p].end)||c[f].set(e.edge[p].end,[]);const m=i[f].get(e.edge[p].end);m.push(e.edge[p].start),m.word||(m.word=e.edge[p].word),c[f].get(e.edge[p].end).push(e.edge[p].start)}else o.push(e.edge[p]);const d=Array.from(c[f].keys());for(let p=0;p<c[f].size;p++){const m=d[p],y=c[f].get(m),E=i[f].get(m);for(let h=0;h<y.length;h++)for(let v=0;v<E.length;v++)y[h]<=E[v]||o.push({start:y[h],end:E[v],word:E.word})}}for(let f=0;f<2;f++){const d=Array.from(c[f].keys());for(let p=0;p<e.ranges.face[1];p++){const m=e.face[p],y=[];for(let E=0;E<m.vertices.length;E++)i[f].has(m.vertices[E])||y.push(m.vertices[E]);u.push({...m,vertices:y})}for(let p=0;p<c[f].size;p++){const m=d[p],y=i[f].get(m);u.push({vertices:y,word:y.word})}}return{vertex:l,edge:o,face:u,ranges:{vertex:[0,l.length],edge:[0,o.length],face:[0,u.length]}}},hp=`#include globals
#include fragment
`,mp=`#include globals
#include dimensions

uniform float thickness;
uniform matN metric;
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

#include vertexouthead
#include project

void main() {
  vecN positionN = multiplyMatrix(matrix, adapt(position));
  vecN targetN = multiplyMatrix(matrix, adapt(target));

  float t = ease(uv.y);
  float s = ease(uv.y - DT);
  vecN pos = mix(positionN, targetN, t);
  vecN next = mix(positionN, targetN, s);
  // Position segments on hypersurface

  #if defined(SEGMENTS) && CURVATURE != 0
  pos = xnormalize(pos);
  next = xnormalize(next);
  #endif

  vec3 proj = xproject(pos);
  vec3 nextProj = xproject(next) + NOISE;
  vec3 tangent = normalize(proj - nextProj);

  vec3 norm = cross(nextProj, proj);

  // // Find a stable norm for the whole tube
  // vecN mid = mix(positionN, targetN, .5f);

  // vec3 start = xproject(positionN);
  // vec3 end = xproject(targetN);
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

  proj = inflate(proj, pos, norm, thickness);
  #include vertexout
}
`,gp=`#include globals
#include fragment
`,yp=`#include globals
#include dimensions

uniform matN metric;
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

#include vertexouthead
#include project

void main() {
  vecN positionN = multiplyMatrix(matrix, adapt(position));
  vecN targetN = multiplyMatrix(matrix, adapt(target));
  vecN centerN = multiplyMatrix(matrix, adapt(center));

  vec2 t = ease(uv);
  vec2 s = ease(uv - vec2(NOISE.x, DT));
  vec2 r = ease(uv - vec2(DT, NOISE.z));

  vecN pos = trix(centerN, positionN, targetN, t);
  vecN next = trix(centerN, positionN, targetN, s);
  vecN other = trix(centerN, positionN, targetN, r);

  #if defined(SEGMENTS) && CURVATURE != 0
  if(ndot(pos, pos) > 1e-6) {
    pos = xnormalize(pos);
  }
  next = xnormalize(next);
  other = xnormalize(other);
  #endif

  vec3 proj = xproject(pos);
  vec3 drdx = xproject(next) - proj;
  vec3 drdy = xproject(other) - proj;

  vec3 norm = normalize(cross(drdx, drdy));
  #include vertexout
}
`,xp=`#include globals
#include fragment
`,Ep=`#include globals
#include dimensions

uniform float thickness;
uniform matN metric;
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

#include vertexouthead
#include project

void main() {
  vecN pos = multiplyMatrix(matrix, adapt(position));

  #if defined(SEGMENTS) && CURVATURE != 0
    // Normalization is done mainly to remove OOD points
  pos = xnormalize(pos);
  #endif

  vec3 proj = xproject(pos);
  vec3 norm = normal;
  proj = inflate(proj, pos, normal, thickness);
  #include vertexout
}
`,Sl={vertex:(e,n)=>op({low:{widthSegments:16,segments:8},medium:{widthSegments:32,segments:16},high:{widthSegments:64,segments:32},ultra:{widthSegments:128,segments:64}}[n||"medium"]),edge:(e,n)=>up({low:{segments:e,radialSegments:4},medium:{segments:e,radialSegments:8},high:{segments:e,radialSegments:16},ultra:{segments:e,radialSegments:32}}[n||"medium"]),face:(e,n)=>sp({low:{segments:~~ep(e)},medium:{segments:~~$(e)},high:{segments:e},ultra:{segments:3*e}}[n||"medium"])};function Sp(e){return{meshes:["vertex","edge","face"],...kl(e,"vertex",Ep,xp,Sl.vertex,1024,e.dimensions,e.showVertices),...kl(e,"edge",mp,hp,Sl.edge,1024,e.dimensions,e.showEdges,["position","target"]),...kl(e,"face",yp,gp,Sl.face,1024,e.dimensions,e.showFaces,["position","target","center"]),changeArity(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].changeArity(n)},updateGeometries(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].updateGeometry(n)},recompilePrograms(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].recompileProgram(n)},updateUniforms(n,t=!1,r=null){for(let i=0;i<this.meshes.length;i++){const l=this.meshes[i],o=this[l];if(!t){o.uniforms.metric.update(ct(n.space.metric)),o.uniforms.matrix.update(ct(n.matrix));for(let u=4;u<=n.dimensions;u++)o.uniforms[`fov${u}`].update(1/nf(ce*n[`fov${u}`]*.5/180));l==="vertex"?o.uniforms.thickness.update(n.vertexThickness):l==="edge"&&o.uniforms.thickness.update(n.edgeThickness)}o.uniforms.viewProjection.update(n.camera.viewProjection),o.uniforms.zoom.update(t?r:n.zoom),o.uniforms.eye.update(n.camera.eye)}},plotType(n,t,r,i,l=null){const o=this[t];l=l||i;const{dimensions:u}=n,s=xr[n.ambiance],[a,c]=r;let f=a,d=c;if(t==="face"){let y=0;for(let E=0;E<a;E++){const h=l[E].vertices.length;y+=h<3?0:h===3?1:h}f=y;for(let E=a;E<c;E++){const h=l[E].vertices.length;y+=h<3?0:h===3?1:h}d=y}o.instances<d&&o.extendAttributes(d),o.count=d;const p=u>4?9:u;let m=f;for(let y=a;y<c;y++){let E=[];const h=l[y];if(t==="vertex")E.push({...h,position:h.vertex,type:t});else if(t==="edge")E.push({...h,position:i[h.start].vertex,target:i[h.end].vertex,type:t});else{if(h.vertices.length<3)continue;if(h.vertices.length===3)E.push({...h,position:i[h.vertices[0]].vertex,target:i[h.vertices[1]].vertex,center:i[h.vertices[2]].vertex,index:0});else{const v=new Array(h.vertices.length);for(let x=0;x<h.vertices.length;x++)v[x]=i[h.vertices[x]].vertex;const g=new Array(u).fill(0);for(let x=0;x<v.length;x++){const S=v[x];for(let I=0;I<u;I++)g[I]+=S[I]}for(let x=0;x<u;x++)g[x]/=v.length;for(let x=0;x<v.length;x++){const S={...h,position:v[x],target:v[(x+1)%v.length],center:g,index:x};h.word.length%2===(n.space.curvature>0?0:1)&&([S.position,S.target]=[S.target,S.position]),E.push(S)}}}for(let v=0;v<E.length;v++){const g=E[v];for(let S=0;S<u;S++)for(let I=0;I<o.varying.length;I++){const N=o.varying[I];o.attributes[N].data[m*p+S]=g[N][S]}const x=s.color(g,t,n);o.attributes.color.data[m*3+0]=x[0],o.attributes.color.data[m*3+1]=x[1],o.attributes.color.data[m*3+2]=x[2],m++}}for(let y=0;y<o.varying.length;y++){const E=o.varying[y];o.attributes[E].update(f,d)}o.attributes.color.update(f,d)},preprocess(n,t){return n.mirrors.some(r=>rf(r))&&(t=vp(t,n.mirrors,n.dimensions,n.space.metric)),n.mirrors.some(r=>fp(r))&&(t=pp(t,n.mirrors,n.dimensions,n.space.metric)),n.mirrors.some(r=>ni(r))&&(t=dp(t,n.mirrors,n.dimensions,n.space.metric)),t},plot(n,t){let r=n.face,i=t;t.face[1]===n.face.length&&n.partial&&(r=r.concat(n.partial),i={...t,face:[t.face[0],t.face[1]+n.partial.length]});const l={vertex:n.vertex,edge:n.edge,face:r,ranges:i},{vertex:o,edge:u,face:s,ranges:a}=this.preprocess(n,l);for(let c=0;c<this.meshes.length;c++){const f=this.meshes[c];this[f].visible&&this.plotType(n,f,a[f],o,f!=="vertex"?f==="face"?s:u:null)}}}}const wp=`#version 300 es
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
`,Np=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,kp=`#version 300 es
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
`,Ip=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Tp=`#version 300 es
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
`,Rp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Cp=`#version 300 es
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
`,_p=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Op=`#version 300 es
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
`,Pp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`;function Dp(e){return{...zt(e,"oit",_p,Cp,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),...zt(e,"down",Rp,Tp,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...zt(e,"up",Pp,Op,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...zt(e,"afterImage",Np,wp,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),...zt(e,"bloom",Ip,kp,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function zp(e){const{gl:n}=e,t=xr[e.ambiance],r=e.msaa?Be(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),Il(e,e.rb.base,n.RGBA8,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,e.rb.base),Il(e,e.rb.depth,n.DEPTH_COMPONENT24,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),e.fb.oit&&(n.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(n.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(n.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&n.deleteRenderbuffer(e.rb.depth_copy),t.transparency==="oit"&&(e.fb.oit=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),r?(e.rb.depth_copy=n.createRenderbuffer(),Il(e,e.rb.depth_copy,n.DEPTH_COMPONENT24),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth_copy)):n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),e.textures.oitAccum=un(e,n.RGBA16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=un(e,n.R16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT1,n.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(n.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(n.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(n.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(n.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),t.afterImage&&(e.fb.afterImage=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=un(e,n.RGBA8),e.textures.afterImageScreen=un(e,n.RGBA8),e.textures.afterImageOutScreen=un(e,n.RGBA8)),e.fb.kawase&&(n.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(n.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let i=0;i<e.textures.kawase.length;i++)n.deleteTexture(e.textures.kawase[i].texture);e.textures.kawase=null}if(e.textures.blur&&(n.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(n.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),t.glow){e.fb.kawase=n.createFramebuffer(),e.fb.bloom=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let i=0;i<t.glow.steps;i++)e.textures.kawase[i]=un(e,n.RGBA8,t.glow.pow**-i);e.textures.blur=un(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.blur.texture,0),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=un(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.bloom.texture,0)}}const of=window.location.search.includes("stats");let ti;of&&(ti=new lp,ti.dom.id="stats",document.body.appendChild(ti.dom));const w0=e=>{const n=document.createElement("canvas");n.id="webgl2",document.body.insertBefore(n,document.body.firstChild);const t=n.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:t},!t){console.error("Unable to initialize WebGL. Your browser may not support it.");return}t.getExtension("EXT_color_buffer_float"),t.enable(t.DEPTH_TEST);const r={zoom:1,fov:ce/3,eye:[0,0,-e.zoom],near:.01,far:1e3,update(a){const c=Ve(4);c[0][3]=this.eye[0],c[1][3]=this.eye[1],c[2][3]=this.eye[2],c[0][0]=-1,c[2][2]=-1;const f=bc(c);this.aspect=a?a.fullWidth/a.fullHeight:t.canvas.clientWidth/t.canvas.clientHeight,this.zoom=Be(this.aspect,1);const d={left:0,right:0,top:0,bottom:0,near:this.near,far:this.far};d.top=this.near*nf(this.fov/2)/this.zoom;let p=2*d.top,m=this.aspect*p;d.left=-.5*m,a&&(d.left+=a.x*m/a.fullWidth,d.top-=a.y*p/a.fullHeight,m*=a.width/a.fullWidth,p*=a.height/a.fullHeight),d.bottom=d.top-p,d.right=d.left+m;const y=Wv(d);this.viewProjection=ct(Le(y,f))}};r.update();const i=Dp(e),l=Sp(e),o={base:t.createRenderbuffer(),depth:t.createRenderbuffer()},u={base:t.createFramebuffer()};return{...e,gl:t,camera:r,meshes:l,passes:i,rb:o,fb:u,textures:{}}},N0=(e,n)=>{e.meshes[n].visible=e[n==="vertex"?"showVertices":n==="edge"?"showEdges":"showFaces"]},k0=(e,n=null)=>{if(e.currentOrder===0||n===null&&e.ranges.length===0||n!==null&&n>=e.ranges.length)return;const t=n!==null?e.ranges[n]:{vertex:[e.ranges[0].vertex[0],e.ranges[e.currentOrder-1].vertex[1]],edge:[e.ranges[0].edge[0],e.ranges[e.currentOrder-1].edge[1]],face:[e.ranges[0].face[0],e.ranges[e.currentOrder-1].face[1]]};e.meshes.plot(e,t),document.title=`Coxeter Explorer - ${e.space.type==="finite"?"S":e.space.type==="affine"?"E":"H"}^${e.dimensions} ${e.currentOrder<e.order?`(${e.currentOrder}/${e.order})…`:""}- ${e.vertex.length} vertices, ${e.edge.length} edges, ${e.face.length} faces`},I0=(e,n=null)=>{e.camera.fov=e.fov3?ce*e.fov3/180:1,n!==null&&(e.camera.eye[2]=n===null?-e.zoom:-n),e.camera.update(),e.meshes.updateUniforms(e,!0,n)},T0=e=>{const n=xr[e.ambiance];e.gl.clearColor(...n.background),n.glow&&(e.passes.bloom.uniforms.exposure.update(n.glow.exposure),e.passes.bloom.uniforms.strength.update(n.glow.strength),e.passes.down.uniforms.offset.update(n.glow.offset.down),e.passes.up.uniforms.offset.update(n.glow.offset.up)),n.afterImage&&e.passes.afterImage.uniforms.strength.update(n.afterImage)},Ap=(e,n)=>{of&&ti.update();const{gl:t}=e,r=e.msaa?Be(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,i=xr[e.ambiance];Qp(t.canvas,e.subsampling,n)&&(t.viewport(0,0,t.canvas.width,t.canvas.height),zp(e),e.camera.update(n),e.meshes.updateUniforms(e,!0,e.zoom)),t.disable(t.BLEND),t.enable(t.DEPTH_TEST),i.culling&&t.enable(t.CULL_FACE),t.depthMask(!0),t.depthFunc(t.LESS),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.base),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),i.transparent.vertex||e.meshes.vertex.render(e),i.transparent.edge||e.meshes.edge.render(e),i.transparent.face||e.meshes.face.render(e),(e.showVertices&&i.transparent.vertex||e.showEdges&&i.transparent.edge||e.showFaces&&i.transparent.face)&&(i.transparency==="oit"?(r&&(t.bindFramebuffer(t.READ_FRAMEBUFFER,e.fb.base),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,e.fb.oit),t.blitFramebuffer(0,0,t.drawingBufferWidth,t.drawingBufferHeight,0,0,t.drawingBufferWidth,t.drawingBufferHeight,t.DEPTH_BUFFER_BIT,t.NEAREST)),t.enable(t.BLEND),i.culling&&t.disable(t.CULL_FACE),t.depthMask(!1),t.blendFuncSeparate(t.ONE,t.ONE,t.ZERO,t.ONE_MINUS_SRC_ALPHA),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.oit),t.clear(t.COLOR_BUFFER_BIT),i.transparent.vertex&&e.meshes.vertex.render(e),i.transparent.edge&&e.meshes.edge.render(e),i.transparent.face&&e.meshes.face.render(e),t.depthMask(!0),t.depthFunc(t.ALWAYS),t.blendFunc(t.ONE_MINUS_SRC_ALPHA,t.SRC_ALPHA),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.base),t.useProgram(e.passes.oit.program),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,e.textures.oitAccum.texture),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,e.textures.oitReveal.texture),t.drawArrays(t.TRIANGLES,0,3)):i.transparency==="blend"&&(t.enable(t.BLEND),i.culling&&t.disable(t.CULL_FACE),t.depthMask(!1),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),i.transparent.vertex&&e.meshes.vertex.render(e),i.transparent.edge&&e.meshes.edge.render(e),i.transparent.face&&e.meshes.face.render(e)));const l=i.afterImage?e.fb.afterImage:i.glow?e.fb.bloom:null;t.bindFramebuffer(t.READ_FRAMEBUFFER,e.fb.base),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,l),i.afterImage&&t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.afterImageScreen.texture,0),t.blitFramebuffer(0,0,t.drawingBufferWidth,t.drawingBufferHeight,0,0,t.drawingBufferWidth,t.drawingBufferHeight,t.COLOR_BUFFER_BIT,t.NEAREST);let o=e.textures.bloom;if(i.afterImage&&(t.bindFramebuffer(t.FRAMEBUFFER,e.fb.afterImage),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),t.useProgram(e.passes.afterImage.program),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,e.textures.afterImageScreen.texture),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,e.textures.afterImageLastScreen.texture),t.drawArrays(t.TRIANGLES,0,3),i.glow?o=e.textures.afterImageOutScreen:(t.bindFramebuffer(t.READ_FRAMEBUFFER,e.fb.afterImage),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.blitFramebuffer(0,0,t.drawingBufferWidth,t.drawingBufferHeight,0,0,t.drawingBufferWidth,t.drawingBufferHeight,t.COLOR_BUFFER_BIT,t.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),i.glow){t.disable(t.BLEND),i.culling&&t.enable(t.CULL_FACE),t.enable(t.DEPTH_TEST),t.depthMask(!0),t.depthFunc(t.LESS),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.kawase),t.useProgram(e.passes.down.program);for(let u=0;u<i.glow.steps;u++){const s=u===0?o:e.textures.kawase[u-1],a=e.textures.kawase[u];t.viewport(0,0,a.width,a.height),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,s.texture),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,a.texture,0),t.drawArrays(t.TRIANGLES,0,3)}t.useProgram(e.passes.up.program);for(let u=i.glow.steps-1;u>=0;u--){const s=e.textures.kawase[u],a=u===0?e.textures.blur:e.textures.kawase[u-1];t.viewport(0,0,a.width,a.height),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,s.texture),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,a.texture,0),t.drawArrays(t.TRIANGLES,0,3)}t.bindFramebuffer(t.FRAMEBUFFER,null),t.useProgram(e.passes.bloom.program),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,o.texture),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,e.textures.blur.texture),t.drawArrays(t.TRIANGLES,0,3)}};window.render=Ap;const Mp=`const vec2 cone = vec2(1., 0);
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
`,Fp=`// Global vertex uniforms

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

// Structures for >4 vec and mat
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

#if DIMENSIONS >= 2
float ndot(in vec2 v, in vec2 w) {
  return dot(v, w);
}
vec2 nadd(in vec2 v, in vec2 w) {
  return v + w;
}
vec2 nsub(in vec2 v, in vec2 w) {
  return v - w;
}
vec2 nmul(in vec2 v, in float s) {
  return v * s;
}
float nonlast(in vec2 v) {
  return v.x;
}
#endif
#if DIMENSIONS >= 3
float ndot(in vec3 v, in vec3 w) {
  return dot(v, w);
}
vec3 nadd(in vec3 v, in vec3 w) {
  return v + w;
}
vec3 nsub(in vec3 v, in vec3 w) {
  return v - w;
}
vec3 nmul(in vec3 v, in float s) {
  return v * s;
}
vec2 nonlast(in vec3 v) {
  return v.xy;
}
#endif
#if DIMENSIONS >= 4
float ndot(in vec4 v, in vec4 w) {
  return dot(v, w);
}
vec4 nadd(in vec4 v, in vec4 w) {
  return v + w;
}
vec4 nsub(in vec4 v, in vec4 w) {
  return v - w;
}
vec4 nmul(in vec4 v, in float s) {
  return v * s;
}
vec3 nonlast(in vec4 v) {
  return v.xyz;
}
#endif
#if DIMENSIONS >= 5
float ndot(in vec5 v, in vec5 w) {
  return dot(v.v, w.v) + v.u * w.u;
}
vec5 nadd(in vec5 v, in vec5 w) {
  return vec5(v.v + w.v, v.u + w.u);
}
vec5 nsub(in vec5 v, in vec5 w) {
  return vec5(v.v - w.v, v.u - w.u);
}
vec5 nmul(in vec5 v, in float s) {
  return vec5(v.v * s, v.u * s);
}
vec4 nonlast(in vec5 v) {
  return v.v;
}
#endif
#if DIMENSIONS >= 6
float ndot(in vec6 v, in vec6 w) {
  return dot(v.v, w.v) + dot(v.u, w.u);
}
vec6 nadd(in vec6 v, in vec6 w) {
  return vec6(v.v + w.v, v.u + w.u);
}
vec6 nsub(in vec6 v, in vec6 w) {
  return vec6(v.v - w.v, v.u - w.u);
}
vec6 nmul(in vec6 v, in float s) {
  return vec6(v.v * s, v.u * s);
}
vec5 nonlast(in vec6 v) {
  return vec5(v.v, v.u.x);
}
#endif
#if DIMENSIONS >= 7
float ndot(in vec7 v, in vec7 w) {
  return dot(v.v, w.v) + dot(v.u, w.u);
}
vec7 nadd(in vec7 v, in vec7 w) {
  return vec7(v.v + w.v, v.u + w.u);
}
vec7 nsub(in vec7 v, in vec7 w) {
  return vec7(v.v - w.v, v.u - w.u);
}
vec7 nmul(in vec7 v, in float s) {
  return vec7(v.v * s, v.u * s);
}
vec6 nonlast(in vec7 v) {
  return vec6(v.v, v.u.xy);
}
#endif
#if DIMENSIONS >= 8
float ndot(in vec8 v, in vec8 w) {
  return dot(v.v, w.v) + dot(v.u, w.u);
}
vec8 nadd(in vec8 v, in vec8 w) {
  return vec8(v.v + w.v, v.u + w.u);
}
vec8 nsub(in vec8 v, in vec8 w) {
  return vec8(v.v - w.v, v.u - w.u);
}
vec8 nmul(in vec8 v, in float s) {
  return vec8(v.v * s, v.u * s);
}
vec7 nonlast(in vec8 v) {
  return vec7(v.v, v.u.xyz);
}
#endif
#if DIMENSIONS >= 9
float ndot(in vec9 v, in vec9 w) {
  return dot(v.v, w.v) + dot(v.u, w.u) + v.t * w.t;
}
vec9 nadd(in vec9 v, in vec9 w) {
  return vec9(v.v + w.v, v.u + w.u, v.t + w.t);
}
vec9 nsub(in vec9 v, in vec9 w) {
  return vec9(v.v - w.v, v.u - w.u, v.t - w.t);
}
vec9 nmul(in vec9 v, in float s) {
  return vec9(v.v * s, v.u * s, v.t * s);
}
vec8 nonlast(in vec9 v) {
  return vec8(v.v, v.u);
}
#endif

vec2 adapt(in vec2 m) {
  return m;
}
#if DIMENSIONS == 3
vec3 adapt(in vec3 m) {
  return m;
}
#elif DIMENSIONS == 4
vec4 adapt(in vec4 m) {
  return m;
}
#elif DIMENSIONS == 5
vec5 adapt(in mat3 m) {
  return vec5(vec4(m[0], m[1][0]), m[1][1]);
}
#elif DIMENSIONS == 6
vec6 adapt(in mat3 m) {
  return vec6(vec4(m[0], m[1][0]), vec2(m[1][1], m[1][2]));
}
#elif DIMENSIONS == 7
vec7 adapt(in mat3 m) {
  return vec7(vec4(m[0], m[1][0]), vec3(m[1][1], m[1][2], m[2][0]));
}
#elif DIMENSIONS == 8
vec8 adapt(in mat3 m) {
  return vec8(vec4(m[0], m[1][0]), vec4(m[1][1], m[1][2], m[2][0], m[2][1]));
}
#elif DIMENSIONS == 9
vec9 adapt(in mat3 m) {
  return vec9(vec4(m[0], m[1][0]), vec4(m[1][1], m[1][2], m[2][0], m[2][1]), m[2][2]);
}
#endif

#if DIMENSIONS == 2
vec2 multiplyMatrix(mat2 m, vec2 v) {
  return m * v;
}
#elif DIMENSIONS == 3
vec3 multiplyMatrix(mat3 m, vec3 v) {
  return m * v;
}
#elif DIMENSIONS == 4
vec4 multiplyMatrix(mat4 m, vec4 v) {
  return m * v;
}
#elif DIMENSIONS == 5
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

float nget(in vec2 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  return v[i];
}
#if DIMENSIONS >= 3
float nget(in vec3 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  return v[i];
}
#endif
#if DIMENSIONS >= 4
float nget(in vec4 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  return v[i];
}
#endif
#if DIMENSIONS >= 5
float nget(in vec5 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    return v.v[i];
  } else {
    return v.u;
  }
}
#endif
#if DIMENSIONS >= 6
float nget(in vec6 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    return v.v[i];
  } else {
    return v.u[i - 4];
  }
}
#endif
#if DIMENSIONS >= 7
float nget(in vec7 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    return v.v[i];
  } else {
    return v.u[i - 4];
  }
}
#endif
#if DIMENSIONS >= 8
float nget(in vec8 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    return v.v[i];
  } else {
    return v.u[i - 4];
  }
}
#endif
#if DIMENSIONS >= 9
float nget(in vec9 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    return v.v[i];
  } else if(i < 8) {
    return v.u[i - 4];
  } else {
    return v.t;
  }
}
#endif

void nset(inout vec2 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  v[i] = x;
}
#if DIMENSIONS >= 3
void nset(inout vec3 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  v[i] = x;
}
#endif
#if DIMENSIONS >= 4
void nset(inout vec4 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  v[i] = x;
}
#endif
#if DIMENSIONS >= 5
void nset(inout vec5 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    v.v[i] = x;
  } else {
    v.u = x;
  }
}
#endif
#if DIMENSIONS >= 6
void nset(inout vec6 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    v.v[i] = x;
  } else {
    v.u[i - 4] = x;
  }
}
#endif
#if DIMENSIONS >= 7
void nset(inout vec7 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    v.v[i] = x;
  } else {
    v.u[i - 4] = x;
  }
}
#endif
#if DIMENSIONS >= 8
void nset(inout vec8 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    v.v[i] = x;
  } else {
    v.u[i - 4] = x;
  }
}
#endif
#if DIMENSIONS >= 9
void nset(inout vec9 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    v.v[i] = x;
  } else if(i < 8) {
    v.u[i - 4] = x;
  } else {
    v.t = x;
  }
}
#endif
`,Lp=`float ease(float t) {
  if(t < 0. || t > 1.) {
    return t;
  }
  #if EASING == 0  // linear
  return t;
  #elif EASING == 1 // sine
  return -0.5 * (cos(PI * t) - 1.);
  #elif EASING == 2 // quadratic
  float p = 2. * t * t;
  return t < 0.5 ? p : -p + (4. * t) - 1.;
  #elif EASING == 3 // cubic
  return t < 0.5 ? 4. * pow(t, 3.) : 1. - pow(-2. * t + 2., 3.) / 2.;
  #elif EASING == 4 // quartic
  return t < 0.5 ? 8. * pow(t, 4.) : -8. * pow(t - 1., 4.) + 1.;
  #elif EASING == 5 // quint6ic
  return t < 0.5 ? 16. * pow(t, 5.) : 1. - pow(-2. * t + 2., 5.) / 2.;
  #elif EASING == 6 // exponential
  return t == 0. || t == 1. ? t : t < 0.5 ? +0.5 * pow(2., (20. * t) - 10.) : -0.5 * pow(2., 10. - (t * 20.)) + 1.;
  #elif EASING == 7 // circular
  return t < 0.5 ? 0.5 * (1. - sqrt(1. - 4. * t * t)) : 0.5 * (sqrt((3. - 2. * t) * (2. * t - 1.)) + 1.);
  #elif EASING == 8 // back
  const float c1 = 1.70158;
  const float c2 = c1 * 1.525;
  return .5 * (t < 0.5 ? (pow(2. * t, 2.) * ((c2 + 1.) * 2. * t - c2)) : (pow(2. * t - 2., 2.) * ((c2 + 1.) * (t * 2. - 2.) + c2) + 2.));
  #elif EASING == 9 // elastic
  const float c5 = (TAU) / 4.5;
  return t == 0. ? 0. : t == 1. ? 1. : t < 0.5 ? -(pow(2., 20. * t - 10.) * sin((20. * t - 11.125) * c5)) / 2. : (pow(2., -20. * t + 10.) * sin((20. * t - 11.125) * c5)) / 2. + 1.;
  #elif EASING == 10 // bounce
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
  #elif EASING == 11 // inverse_sine
  return (t < 1e-3 || t > 1. - 1e-3) ? t : acos(1. - (2. * t)) / PI;
  #elif EASING == 12 // inverse_quadratic
  return (t < 1e-3 || t > 1. - 1e-3) ? t : t < .5 ? sqrt(t / 2.) : .5 * (2. - sqrt(2.) * sqrt(1. - t));
  #elif EASING == 13 // inverse_cubic
  return (t < 1e-3 || t > 1. - 1e-3) ? t : t < 0.5 ? pow(t / 4., 1. / 3.) : 1. - pow((1. - t) / 4., 1. / 3.);
  #elif EASING == 14 // inverse_quartic
  return (t < 1e-3 || t > 1. - 1e-3) ? t : t < .5 ? pow(t / 8., 1. / 4.) : 1. - pow((1. - t) / 8., 1. / 4.);
  #elif EASING == 15 // inverse_quintic
  return (t < 1e-3 || t > 1. - 1e-3) ? t : t < .5 ? pow(t / 16., 1. / 5.) : 1. - pow((1. - t) / 16., 1. / 5.);
  #else
  return t;
  #endif
}

vec2 ease(vec2 t) {
  return vec2(ease(t.x), ease(t.y));
}
`,jp=`#version 300 es
precision highp float;

uniform mat4 viewProjection;
uniform vec3 eye;

#include config

// Constants
const float PI = 3.14159265358979323846264338327950288f;
const float TAU = 2.f * PI;
const float ETA = PI / 2.f;
const vec3 NOISE = vec3(.000003f, -.000002f, .000017f);
const float NaN = intBitsToFloat(-1);
const float SCALE = TAU;
const float curvature = float(CURVATURE);
#ifdef SEGMENTS
const float segments = float(SEGMENTS);
#else
const float segments = 1.f;
#endif
const float DT = .1f / segments;
`,Up=`#loopN2
float len(in vecN v) {
  return sqrt(ndot(v, v));
}
#endloopN

float xdot(in vecN v) {
  return ndot(multiplyMatrix(metric, v), v);
}

vecN xnormalize(in vecN v) {
  float n = 1. / sqrt(curvature * xdot(v));
  return nmul(v, n);
}

#loopN3
vecN halff(in vecN v, in float k) {
  nset(v, -1, 1. / nget(v, -1)); // Invert last

  float nr = nget(v, -1);
  for(int i = 0; i < _N_ - 1; i++) { // Normalize by last
    nset(v, i, nget(v, i) * nr);
  }

  nr = 2. / (1. + k * nget(v, 1));
  for(int i = 0; i < _N_; i++) {
    nset(v, i, nget(v, i) * nr);

  }

  float temp = nget(v, 1);
  for(int i = 1; i < _N_ - 1; i++) {
    nset(v, i, nget(v, i + 1));
  }
  nset(v, -1, temp);
  return v;
}
vecN_1 halfv(in vecN v) {
  return nonlast(halff(v, 1.));
}
#endloopN
`,$p=`const float ambient = AMBIENT;
const float shininess = SHININESS;
const float roughness = ROUGHNESS;
const float opacity = OPACITY;

float getDiffuse(in vec3 normal, in vec3 lightDirection, in vec3 eyeDirection, inout vec4 color) {
  #ifdef DIFFUSE
  // Diffuse
  #if DIFFUSE == 0
  // Lambert
  return abs(dot(normal, lightDirection));
  #elif DIFFUSE == 1
  // Oren-Nayar

  const float albedo = 1.;

  float LdotV = dot(lightDirection, eyeDirection);
  float NdotL = dot(lightDirection, normal);
  float NdotV = dot(normal, eyeDirection);

  float s = LdotV - NdotL * NdotV;
  float t = mix(1.0, max(NdotL, NdotV), step(0.0, s));
  float sigma2 = roughness * roughness;
  float A = 1.0 + sigma2 * (albedo / (sigma2 + 0.13) + 0.5 / (sigma2 + 0.33));
  float B = 0.45 * sigma2 / (sigma2 + 0.09);

  return albedo * max(0.0, NdotL) * (A + B * s / t) / 3.1415926535897932384626433832795;
  #elif DIFFUSE == 2
  // Minnaert
  float diffuse = abs(dot(normal, lightDirection));
  return diffuse * diffuse;
  #elif DIFFUSE == 3
  // Cel
  float diffuse = abs(dot(normal, lightDirection));
  return floor(diffuse * 4.) / 4.;
  #elif DIFFUSE == 4
  // Fresnel
  float diffuse = abs(dot(normal, lightDirection));
  float p = 1. - diffuse;
  color.a = clamp(p * p * p, color.a, 1.);
  return 1. - ambient;
  #elif DIFFUSE == 5
  // Reverse
  float diffuse = abs(dot(normal, lightDirection));
  float p = 1. - diffuse;
  return p * p;
  #endif
  #endif
  return 0.;
}

float getSpecular(in vec3 normal, in vec3 lightDirection, in vec3 eyeDirection, in vec4 color) {
  #ifdef SPECULAR
  #if SPECULAR == 0
  // Phong
  vec3 reflectDirection = reflect(-lightDirection, normal);
  return pow(max(dot(eyeDirection, reflectDirection), 0.), shininess * .25);

  #elif SPECULAR == 1
  // Blinn-phong
  vec3 halfVector = normalize(lightDirection + eyeDirection);
  return pow(abs(dot(normal, halfVector)), shininess);

  #elif SPECULAR == 2
  // Cook-Torrance
  vec3 halfVector = normalize(lightDirection + eyeDirection);
  const float fresnel = 1.;

  float NdotL = dot(normal, lightDirection);
  float NdotV = dot(normal, eyeDirection);
  float NdotH = dot(normal, halfVector);
  float VdotH = dot(eyeDirection, halfVector);

  float sigma2 = roughness * roughness;
  float cos2alpha = NdotH * NdotH;
  float D = exp((cos2alpha - 1.) / (cos2alpha * sigma2)) / (PI * sigma2 * cos2alpha * cos2alpha);

  float F = fresnel + (1. - fresnel) * pow(1. - NdotV, 5.);
  float G = min(1., min(2. * NdotH * NdotV / VdotH, 2. * NdotH * NdotL / VdotH));
  return D * F * G / (4. * NdotV * NdotL);

  #elif SPECULAR == 3
  // Ward anisotropic
  // TODO

  #endif
  #endif
  return 0.;
}

vec4 light(vec3 position, vec3 normal, vec3 rgb, vec2 uv) {
  #if SHADING == 0
  vec4 color = vec4(rgb, opacity);
  #if !defined(DIFFUSE) && !defined(SPECULAR)
  return color;
  #else 
  float diffuse = 0.;
  float specular = 0.;

  #if !defined(PROJECTION3) || PROJECTION3 == 1
  vec3 eyeDirection = vec3(0., 0., -1.);
  #else
  vec3 eyeDirection = eye - position;
  #endif

  eyeDirection = normalize(eyeDirection);
  vec3 lightDirection = eyeDirection;

  // ADS Ambient, Diffuse, Specular
  diffuse = getDiffuse(normal, lightDirection, eyeDirection, color);
  specular = getSpecular(normal, lightDirection, eyeDirection, color);

  return vec4((ambient + diffuse + specular) * color.rgb, color.a);
  #endif
  #elif SHADING == 1
  // Normal
  return vec4(normal * .5 + .5, opacity);
  #elif SHADING == 2
  // Position
  return vec4(position * .5 + .5, opacity);
  #elif SHADING == 3
  // Uvs
  return vec4(uv, .5, opacity);
  #endif
}
`,Bp=`#include helpers
#include ease
#include complex

#if DIMENSIONS >= 3
vec3 project(in vec3 v, in float k) {
  float nr = 1. / (v.z + k);
  if(nr < 1e-9 || nr > 4e2) {
    nr = NaN;
  }
  return vec3(v.xy * nr, v.z);
}
#endif
#if DIMENSIONS >= 4
// Duplicate to avoid useless function call
vec3 project(in vec4 v, in float k) {
  float nr = fov4 / (v.w + k);
  if(nr < 1e-9 || nr > 4e2) {
    nr = NaN;
  }
  return vec3(v.xyz * nr);
}
#endif

#loopN5
vecN_1 project(in vecN v, in float k) {
  float nr = fovN / (nget(v, -1) + k);
  if(nr < 1e-9 || nr > 4e2) {
    nr = NaN;
  }
  return nmul(nonlast(v), nr);
}
#endloopN

vec4 viewProject(vec3 position) {
  #if DIMENSIONS == 3 && PROJECTION3 != -1 && PROJECTION3 != 8
  vec4 normalProjection = viewProjection * vec4(position, 1.);
  vec4 flatProjection = viewProjection * vec4(position.xy, 0., 1.);
  return vec4(flatProjection.xy / flatProjection.w, normalProjection.z / normalProjection.w, 1.);
  #else
  return viewProjection * vec4(position, 1.);
  #endif
}

vec3 xproject(in vec2 v) {
  return vec3(v, 0.);
}

vec3 pureproject(in vec2 v) {
  return vec3(v, 0.);
}

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
  #elif PROJECTION3 == 4 // SCALE
  return SCALE * project(v, SCALE);
  #elif PROJECTION3 == 5 // JOUKOWSKY
  vec2 z = project(v, 1.).xy;
  return vec3(.5 * (z + cinv(z)), 0.);
  #elif PROJECTION3 == 6 // HALF
  vec2 z = halfv(v);
  if(len(z) > 24.) {
    return vec3(NaN);
  }
  return xproject(z);
  #elif PROJECTION3 == 7 // UPPERHALF
  vec2 z = halfv(v);
  if(len(z) > 24.) {
    return vec3(NaN);
  }
  nset(z, -1, nget(z, -1) - 1.); // Lower the plane for better perspectize
  return xproject(z);
  #elif PROJECTION3 == 8 // HALFSPHERE
  v = halff(v, -1.);
  if(len(v.xy) > 24.) {
    return vec3(NaN);
  }
  v.y -= 1.;
  return v * .5;
  #elif PROJECTION3 == 9 // BAND
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  return vec3((2. / PI) * ((clog(cone + z)) - clog(cone - z)), v.z);
  #elif PROJECTION3 == 10 // CROSS
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  // Sum of angles
  // float o = -.5 * PI;
  // vec2 a = vec2(cos(o), sin(o));
  return vec3((2. / PI) * .5 * (clog(cone + z) - clog(cone - z) + cmul(ci, clog(cone - cmul(ci, z))) + cmul(-ci, clog(cone - cmul(-ci, z)))), v.z);
  #elif PROJECTION3 == 11 // HEART
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  return vec3(-z.y * z.x + z.x, -.5 * (z.y * z.y - z.x * z.x - 2. * z.y - 0.75), v.z);
  #elif PROJECTION3 == 12 // TEARDROP
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  return vec3(sign(z.x) *
    sqrt((sqrt((1. - z.y) * (1. - z.y) + z.x * z.x) - (1. - z.y)) / 2.), -(sqrt((sqrt((1. - z.y) * (1. - z.y) + z.x * z.x) + (1. - z.y)) / 2.) - 0.75), v.z);
  #elif PROJECTION3 == 13 // SQUARE
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
  #elif PROJECTION3 == 14 // RING
  vec2 z = project(v, 1.).xy;
  z = (2. / PI) * ((clog(cone + z)) - clog(cone - z));
  float k = 4.;
  float P = 1.1393;
  return vec3(cexp(TAU * cmul(ci, (z.xy + ci)) / (k * P)), v.z);
  #elif PROJECTION3 == 15 // SINUSOIDAL
  vec2 z = project(v, 1.).xy;
  return vec3(csin(1.5 * z), v.z);
  #elif PROJECTION3 == 16 // SPIRAL
  vec2 z = project(v, 1.).xy;
  z = ((clog(cone + z)) - clog(cone - z));
  z = cmul(z, conei);
  return vec3(cexp(z), 0.);
  #elif PROJECTION3 >= 17 // TRIANGLE
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  vec2 w = sc(z, PROJECTION3 - 14);
  // Rotate by PI / 4
  #if PROJECTION3 == 17
  w = cmul(w, cexp(ci * PI / 4.));
  #elif PROJECTION3 == 18
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

vec3 pureproject(in vec3 v) {
  #if PROJECTION3 == 0 // STEREOGRAPHIC
  return project(v, 1.);
  #elif PROJECTION3 == 1 // ORTHOGRAPHIC
  return vec3(v.xy, 0.);
  #elif PROJECTION3 == 2 // KLEIN
  return project(v, 0.);
  #elif PROJECTION3 == 3 // INVERTED
  return project(v, -1.);
  #elif PROJECTION3 == 4 // SCALE
  return SCALE * project(v, SCALE);
  #elif PROJECTION3 == 8 // HALFSPHERE
  return halff(v, 0.);
  #elif PROJECTION3 != -1
  return project(v, 1.);
  #else
  return v;
  #endif
}
#endif

#loopN4
vec3 xproject(in vecN v) {
  #if PROJECTION_N == 0 // STEREOGRAPHIC
  return xproject(project(v, 1.));
  #elif PROJECTION_N == 1 // ORTHOGRAPHIC
  return xproject(nmul(nonlast(v), fovN));
  #elif PROJECTION_N == 2 // KLEIN
  return xproject(project(v, 0.));
  #elif PROJECTION_N == 3 // INVERTED
  return xproject(project(v, -1.));
  #elif PROJECTION_N == 4 // SCALE
  return xproject(nmul(project(v, SCALE), SCALE));
  #elif PROJECTION_N == 5 // JOUKOWSKY
  vecN_1 z = project(v, 1.);
  float r = len(z);
  float nr = 1. / (r * r);
  float k = (_Nf_ - 2.) / (_Nf_ - 1.);
  nset(z, 1, nget(z, 1) * (nr - r) / (r / (_Nf_ - 2.) + nr));
  z = nmul(z, k * (r / (_Nf_ - 2.) + nr));
  return xproject(z);
  #elif PROJECTION_N == 6 // HALF
  return xproject(halfv(v));
  #elif PROJECTION_N == 7 // UPPERHALF
  vecN_1 z = halfv(v);
  nset(z, -1, nget(z, -1) - 1.); // Lower the plane for better perspectize
  for(int i = 1; i < _N_ / 2; i++) {
    float temp = nget(z, -i);
    nset(z, -i, nget(z, i));
    nset(z, i, temp);
  }
  return xproject(z);
  #else
  return xproject(project(v, zoom));
  #endif
}
vec3 pureproject(in vecN v) {
  #if PROJECTION_N == 0 // STEREOGRAPHIC
  return pureproject(project(v, 1.));
  #elif PROJECTION_N == 1 // ORTHOGRAPHIC
  return pureproject(nmul(nonlast(v), fovN));
  #elif PROJECTION_N == 2 // KLEIN
  return pureproject(project(v, 0.));
  #elif PROJECTION_N == 3 // INVERTED
  return pureproject(project(v, -1.));
  #elif PROJECTION_N == 4 // SCALE
  return pureproject(nmul(project(v, SCALE), SCALE));
  #elif PROJECTION_N != -1
  return pureproject(project(v, 1.));
  #else
  return pureproject(project(v, zoom));
  #endif
}
#endloopN

vec3 inflate(in vec3 point, in vecN pos, in vec3 norm, in float size) {
  // Removing 3d length in perspective computation
  #if DIMENSIONS < 5
  pos.xy = vec2(1.);
  #if DIMENSIONS >= 3 && PROJECTION3 == -1
  pos.z = 1.;
  #endif
  #else
  pos.v.xyz = vec3(1.);
  #endif
  vec3 inv = clamp(abs(pureproject(pos)), 0.01, 16.);
  size = size * .01;
  size = size * size * size;
  return size * norm * inv + point;
}
`,Hp=`#ifdef OIT
layout(location = 0) out vec4 accumColor;
layout(location = 1) out float accumAlpha;

float weight(float z, float a) {
  float b = min(1.0, a * 10.0) + 0.01;
  float c = 1.0 - z * 0.9;
  return clamp(b * b * b * 1e8 * c * c * c, 1e-2, 3e3);
}

#else
out vec4 outColor;
#endif

#if defined(SHADING) && !defined(GOURAUD)
#include lighting
in vec3 vNormal;
in vec3 vPosition;
in vec2 vUv;
#endif

#if defined(GOURAUD)
in vec4 vColor;
#else
flat in vec3 vColor;
#endif

void main() {
  #ifdef GOURAUD
  vec4 color = vColor;
  #elif !defined(SHADING)
  vec4 color = vec4(vColor, OPACITY);
  #else
  vec4 color = light(vPosition, vNormal, vColor, vUv);
  #endif

  #ifdef OIT
  float w = weight(gl_FragCoord.z, color.a);
  accumColor = vec4(color.rgb * color.a * w, color.a);
  accumAlpha = color.a * w;
  #else
  outColor = color;
  #endif
}
`,Vp=`gl_Position = viewProject(proj);

#if defined(SHADING) && defined(GOURAUD)
vColor = light(proj, norm, color, uv);
#else
vColor = color;

#ifdef SHADING
vPosition = proj;
vNormal = norm;
vUv = uv;
#endif
#endif
`,Wp=`#ifdef SHADING
#ifdef GOURAUD
#include lighting
#endif

out vec3 vPosition;
out vec3 vNormal;
out vec2 vUv;
#endif

#if defined(GOURAUD)
out vec4 vColor;
#else
flat out vec3 vColor;
#endif
`,Gp={globals:jp,dimensions:Fp,project:Bp,helpers:Up,complex:Mp,ease:Lp,fragment:Hp,vertexouthead:Wp,lighting:$p,vertexout:Vp},wl=(e,n,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e),ue=(e,n,t)=>{let r,i,l;if(n===0)r=i=l=t;else{const o=t<.5?t*(1+n):t+n-t*n,u=2*t-o;r=wl(u,o,e+1/3),i=wl(u,o,e),l=wl(u,o,e-1/3)}return[r,i,l]},Qp=(e,n,t)=>{n=t?1:n||1,n=Math.max(0,n);const r=t?t.width:e.clientWidth*n|0,i=t?t.height:e.clientHeight*n|0;return e.width!==r||e.height!==i?(e.width=r,e.height=i,!0):!!t},Nl=(e,n)=>e.replace(/\bvecN\b/g,`vec${n}`).replace(/\bmatN\b/g,`mat${n}`).replace(/\bfovN\b/g,`fov${n}`).replace(/\bvecN_1\b/g,`vec${n-1}`).replace(/\bvec1\b/g,"float").replace(/\b_N_\b/g,`${n}`).replace(/\b_Nf_\b/g,`${n}.`).replace(/\PROJECTION_N\b/g,`PROJECTION${n}`),Kp=(e,n)=>Nl(e.replace(/#loopN(\d)(.+?)#endloopN/gs,(t,r,i)=>{const l=[];for(let o=r;o<=n;o++)l.push(Nl(i.replace(/#ifN(\d)(.+?)(#elseN(.+?)):?#endifN/gs,(u,s,a,c,f)=>s===`${o}`?Nl(a,o):f||""),o));return l.join(`
`)}),n),Ds=(e,n,t,r)=>{var a;const i=xr[e.ambiance];let l="";const o=c=>c.toString().includes(".")?c:`${c}.`;Object.entries({shading:c=>Zp.indexOf(c),diffuse:c=>e0.indexOf(c),specular:c=>n0.indexOf(c),ambient:c=>o(c),shininess:c=>o(c),roughness:c=>o(c),opacity:c=>o(c),gouraud:c=>""}).forEach(([c,f])=>{const d=Object.keys(i).includes(r)&&Object.keys(i[r]).includes(c)?i[r][c]:i[c];d!==!1&&(l+=`#define ${c.toUpperCase()} ${f(d)}
`),c==="opacity"&&d<1&&(i.transparent[r]=!0,l+=`#define TRANSPARENT
`,i.transparency==="oit"&&(l+=`#define OIT
`))});const s=e.easing;l+=`#define DIMENSIONS ${e.dimensions}
`;for(let c=3;c<=e.dimensions;c++)l+=`#define PROJECTION${c} ${qp.indexOf(e[`projection${c}`])-1}
`;return l+=`#define CURVATURE ${((a=e.space)==null?void 0:a.curvature)||0}
`,e.curve&&e.segments>1&&(l+=`#define SEGMENTS ${e.segments}
`),l+=`#define EASING ${bp.indexOf(s)}
`,Object.entries({...Gp,config:l}).forEach(([c,f])=>{n=n.replace(`#include ${c}`,f),t=t.replace(`#include ${c}`,f)}),[n,t].map(c=>Kp(c,e.dimensions))},Br=(e,n,t,r,i)=>{if(e.gl.shaderSource(i,r),e.gl.compileShader(i),!e.gl.getShaderParameter(i,e.gl.COMPILE_STATUS)){const o=e.gl.getShaderInfoLog(i);return console.error(`An error occurred compiling the ${n}->${t} shader: ${o}`,{shaderSource:r}),o}},zs=(e,n,t)=>{const{gl:r}=e;if(r.linkProgram(t),!r.getProgramParameter(t,r.LINK_STATUS)){const l=r.getProgramInfoLog(t);return console.error(`Unable to initialize the ${n} shader program: ${l}`),l}},uf=(e,n,t,r,i=[])=>{const{gl:l}=e,o=l.createProgram(),u=l.createShader(l.VERTEX_SHADER),s=l.createShader(l.FRAGMENT_SHADER);if(Br(e,n,"vertex",t,u)||Br(e,n,"fragment",r,s)||(l.attachShader(o,u),l.attachShader(o,s),zs(e,n,o)))return;const a={program:o,vertexShader:u,fragmentShader:s,uniformsDef:i,recompile(c,f,d,p=null){Br(c,n,"vertex",f,this.vertexShader)||Br(c,n,"fragment",d,this.fragmentShader)||zs(c,n,this.program)||(p&&(this.uniformsDef=p),this.bindUniforms(c))},bindUniforms(c){this.uniforms={},this.uniformsDef.forEach(({name:f,type:d,value:p})=>{this.uniforms[f]=Xp(c,this.program,f,d),this.uniforms[f].update(p)})}};return a.bindUniforms(e),a},Dt=(e,n,t,r,i,l=null,o=null)=>{const{gl:u}=e;o=o||u.FLOAT;const s=o===u.FLOAT?4:2,a={name:t,mesh:n,indices:sf,instances:l,data:i,size:r,type:o,update(c=null,f=null){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer),c===null&&f===null?u.bufferData(u.ARRAY_BUFFER,this.data,u.STATIC_DRAW):u.bufferSubData(u.ARRAY_BUFFER,c*this.size*s,this.data,c*this.size,(f-c)*this.size)},extend(c,f,d=!1){if(u.bindVertexArray(this.mesh.vao),this.size=c,f&&(d&&f.length>=this.data.length&&f.set(this.data),this.data=f),this.location=u.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const p=c>4?3:1;this.name==="target"&&(this.location=c>4?6:4),this.name==="center"&&(this.location=c>4?9:5);for(let m=0;m<p;m++)u.enableVertexAttribArray(this.location+m);for(let m=0;m<p;m++)u.vertexAttribPointer(this.location+m,c/p,this.type,!1,c*s,c/p*m*s);if(this.instances)for(let m=0;m<p;m++)u.vertexAttribDivisor(this.location+m,this.instances);this.update()},get(){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const c=new Float32Array(this.data.length);return u.getBufferSubData(u.ARRAY_BUFFER,0,c),c}};return a.buffer=u.createBuffer(),a.extend(r),a},sf=(e,n,t)=>{const{gl:r}=e;r.bindVertexArray(n);const i=r.createBuffer();return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i),r.bufferData(r.ELEMENT_ARRAY_BUFFER,t,r.STATIC_DRAW),{buffer:i,vao:n,indices:t,count:t.length,update(l){r.bindVertexArray(this.vao),this.indices=l,this.count=l.length,r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,this.buffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,l,r.STATIC_DRAW)}}},Xp=(e,n,t,r)=>{const{gl:i}=e;return{program:n,update(o){if(i.useProgram(this.program),r.startsWith("m")){const u=parseInt(r.slice(1,2));if(u>4)for(let s=0;s<u;s++){const a=i.getUniformLocation(n,`${t}.c${s+1}.v`);if(a!==null&&i.uniform4fv(a,o[s][0]),u-4===1){const c=i.getUniformLocation(n,`${t}.c${s+1}.u`);c!==null&&i.uniform1f(c,o[s][1])}else if(u-4>1){const c=i.getUniformLocation(n,`${t}.c${s+1}.u`);if(c!==null&&i[`uniform${Be(u-4,4)}fv`](c,o[s][1]),u-8===1){const f=i.getUniformLocation(n,`${t}.c${s+1}.t`);f!==null&&i.uniform1f(f,o[s][2])}}}else{const s=i.getUniformLocation(n,t);s!==null&&i[`uniformMatrix${r.slice(1)}`](s,!1,o)}}else{const u=i.getUniformLocation(n,t);u!==null&&i[`uniform${r}`](u,o)}},get(){i.useProgram(this.program);const o=i.getUniformLocation(n,t);if(o!==null)return i.getUniform(this.program,o)}}},un=(e,n,t=null)=>{const{gl:r}=e,i=t?~~(t*r.drawingBufferWidth):r.drawingBufferWidth,l=t?~~(t*r.drawingBufferHeight):r.drawingBufferHeight,o=r.createTexture();return r.bindTexture(r.TEXTURE_2D,o),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texStorage2D(r.TEXTURE_2D,1,n,i,l),{texture:o,width:i,height:l}},zt=(e,n,t,r,i=[])=>{const l={name:n,vertex:t,fragment:r,...uf(e,n,t,r,i),recompileProgram(o){this.recompile(o,this.vertex,this.fragment,i)}};return{[n]:l}},kl=(e,n,t,r,i,l,o,u=!0,s=["position"])=>{const{gl:a}=e,c=i(e.curve?e.segments:1,e.detail),f=p=>[{name:"viewProjection",type:"m4fv",value:ct(Ve(4))},{name:"matrix",type:`m${p.dimensions}fv`,value:ct(p.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"metric",type:`m${p.dimensions}fv`,value:ct(Ve(p.dimensions))},{name:"zoom",type:"1f",value:1},...["vertex","edge"].includes(n)?[{name:"thickness",type:"1f",value:0}]:[],...Jt(3,p.dimensions+1,1,!0).map(m=>({name:`fov${m}`,type:"1f",value:p[`fov${m}`]}))];o=o>4?9:o;const d={attributes:{},varying:s,vertex:t,type:n,fragment:r,...uf(e,n,...Ds(e,t,r,n),f(e)),recompileProgram(p){const[m,y]=Ds(p,this.vertex,this.fragment,this.type);this.recompile(p,m,y,f(p))},changeArity(p){p=p>4?9:p,this.arity!==p&&(this.arity=p,s.forEach(m=>{this.attributes[m].extend(p,new Float32Array(this.instances*p),!1)}))},extendAttributes(p){this.instances=p,s.forEach(m=>{this.attributes[m].extend(this.arity,new Float32Array(p*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(p*3),!0)},updateGeometry(p){const m=i(p.space.curvature&&p.curve?p.segments:1,p.detail);this.indices.update(new Uint16Array(m.indices)),this.attributes.vertex.extend(3,new Float32Array(m.vertices)),this.attributes.uv.extend(2,new Float32Array(m.uvs)),this.attributes.normal.extend(3,new Float32Array(m.normals))},render(p){!this.count||!this.visible||(a.useProgram(this.program),a.bindVertexArray(this.vao),a.drawElementsInstanced(a.TRIANGLES,this.indices.count,a.UNSIGNED_SHORT,0,this.count))}};return d.visible=u,d.vao=a.createVertexArray(),d.indices=sf(e,d.vao,new Uint16Array(c.indices)),d.attributes.vertex=Dt(e,d,"vertex",3,new Float32Array(c.vertices)),d.attributes.uv=Dt(e,d,"uv",2,new Float32Array(c.uvs)),d.attributes.normal=Dt(e,d,"normal",3,new Float32Array(c.normals)),d.attributes.color=Dt(e,d,"color",3,new Float32Array(l*3),1),s.forEach(p=>{d.attributes[p]=Dt(e,d,p,o,new Float32Array(l*o),1)}),d.type=n,d.arity=o,d.instances=l,d.count=0,{[n]:d}},Il=(e,n,t,r)=>{const{gl:i}=e;i.bindRenderbuffer(i.RENDERBUFFER,n),r?i.renderbufferStorageMultisample(i.RENDERBUFFER,r,t,i.drawingBufferWidth,i.drawingBufferHeight):i.renderbufferStorage(i.RENDERBUFFER,t,i.drawingBufferWidth,i.drawingBufferHeight),i.bindRenderbuffer(i.RENDERBUFFER,null)},Jp=document.createElement("canvas"),As=Jp.getContext("webgl2"),Yp=As.getParameter(As.MAX_SAMPLES),R0="xyzwvutsrqponmlkjihgfedcba",qp=["perspective","stereographic","orthographic","klein","inverted","scale","joukowsky","half","upperhalf","halfsphere","band","cross","heart","teardrop","square","ring","sinusoidal","spiral","SC_Triangle","SC_Square","SC_Pentagon","SC_Hexagon"],bp=["linear","sine","quadratic","cubic","quartic","quintic","exponential","circular","back","elastic","bounce","inverse_sine","inverse_quadratic","inverse_cubic","inverse_quartic","inverse_quintic"],C0=["toddcoxeter","knuthbendix","fundamental"],Zp=["ads","normal","position","uv"],e0=["lambert","oren-nayar","minnaert","cel","fresnel","reverse"],n0=["phong","blinn-phong","cook-torrance","ward-anisotropic"],_0=["low","medium","high","ultra"],Hr=[[10/360,.56,.91],[0/360,.59,.88],[316/360,.72,.86],[267/360,.84,.81],[343/360,.81,.75],[350/360,.65,.77],[23/360,.92,.75],[41/360,.86,.83],[115/360,.54,.76],[170/360,.57,.73],[189/360,.71,.73],[199/360,.76,.69],[217/360,.92,.76],[232/360,.97,.85]],O0=(e,n)=>e===3?"perspective":e===n?"stereographic":"scale",t0={background:[0,0,0,1],glow:!1,shading:"ads",diffuse:"lambert",specular:!1,shininess:32,opacity:1,ambient:.2,roughness:.85,gouraud:!1,transparency:"oit",color:({word:e})=>ue(e.length*.03%1,.75,.7)},xr=Object.fromEntries(Object.entries({neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},shading:!1,face:{opacity:.025},transparency:"blend",color:({word:e})=>ue(e.length*.17%1,.5,.6)},disco:{background:[0,0,0,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},face:{gouraud:!0,diffuse:"fresnel",opacity:.025},transparency:"blend",color:({word:e})=>ue(...Hr[e.length%Hr.length])},synthwave:{background:[...ue(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},shading:!1,face:{opacity:.015},afterImage:.7,transparency:"blend",color:({word:e})=>ue((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],diffuse:"oren-nayar",specular:"cook-torrance",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e})=>ue(e.length*.03%1,1,.8)},shiny:{background:[0,0,0,1],diffuse:"lambert",specular:"blinn-phong",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e})=>ue(-(e.length*.07)%1,1,.8)},shape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.1,diffuse:"fresnel"},color:({len:e,vertices:n},t)=>t==="face"?ue(((e||n.length)-2)*.21%1,1,.8):[1,1,1]},subShape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({subShape:e},n)=>n!=="vertex"?ue(e*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],diffuse:"cel",face:{opacity:.6,gouraud:!1},transparency:"blend",color:({word:e},n,{dimensions:t,showFaces:r})=>{const i=e.length?Ps(e[e.length-1])/t:0;return ue(i%1,1,n==="face"?.6:r?0:.8)}},harlequin:{background:[...ue(240/360,.23,.09),1],face:{opacity:.6},transparency:"oit",color:({word:e,index:n},t,{dimensions:r,showFaces:i})=>{const l=e.split("").map(u=>Ps(u)).reduce((u,s)=>u+s,0),o=[...Hr[l%Hr.length]];return t==="face"&&n%2&&(o[2]*=.5),ue(...o)}},pure:{background:[0,0,0,1],color:({word:e})=>ue(e.length*.03%1,.75,.7)},facets:{background:[0,0,0,1],color:({word:e,index:n})=>ue((n||0)*.13%1,.75,.7)},monochrome:{background:[.12,.12,.12,1],diffuse:"reverse",ambient:0,face:{opacity:.1},transparency:"oit",color:()=>[1,1,1]},plain:{extended:!0,background:[1,1,1,1],glow:!1,shading:!1,color:({word:e},n,{dimensions:t,showFaces:r})=>ue(e.length*.06%1,1,n==="face"?.6:r?.05:.5)},plainblack:{extended:!0,background:[1,1,1,1],shading:!1,color:({word:e},n)=>n==="face"?new Array(3).fill(1-tp(.9,e.length+1)):[0,0,0]},normals:{extended:!0,background:[1,1,1,1],shading:"normal",color:e=>[0,0,0]},uvs:{extended:!0,background:[1,1,1,1],shading:"uv",color:e=>[0,0,0]}}).map(([e,n])=>[e,{...t0,...n,transparent:{}}])),Ms={dimensions:4,coxeter:[[1,5,2,2],[5,1,3,2],[2,3,1,4],[2,2,4,1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],matrix:[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],mirrors:[1,0,0,0],extended:!1,order:10,curve:!0,detail:"medium",segments:16,easing:"linear",showVertices:!1,vertexThickness:50,showEdges:!0,edgeThickness:25,showFaces:!1,grouper:"toddcoxeter",controls:"space",ambiance:"neon",centered:!1,fov3:90,projection3:"perspective",fov4:90,projection4:"stereographic",zoom:1.5,msaa:window.devicePixelRatio<=1,msaaSamples:Yp,subsampling:window.devicePixelRatio},r0=e=>{if(e.coxeter.length!==e.dimensions||e.coxeter.some(n=>n.length!==e.dimensions)){const n=e.coxeter;e.coxeter=new Array(e.dimensions).fill().map((t,r)=>new Array(e.dimensions).fill().map((i,l)=>r===l?1:r===l+1||r+1===l?3:2));for(let t=0;t<Be(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.coxeter[t][r]=n[t][r],e.coxeter[r][t]=n[t][r]}if(e.mirrors.length!==e.dimensions){const n=e.mirrors;e.mirrors=new Array(e.dimensions).fill(0);for(let t=0;t<Be(n.length,e.dimensions);t++)e.mirrors[t]=n[t]}if(e.stellation.length!==e.dimensions||e.stellation.some(n=>n.length!==e.dimensions)){const n=e.stellation;e.stellation=new Array(e.dimensions).fill().map(()=>new Array(e.dimensions).fill(1));for(let t=0;t<Be(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.stellation[t][r]=n[t][r],e.stellation[r][t]=n[r][t]}return e},P0=(e,n=[],t)=>{const r={...e},i=[];Object.entries(r).forEach(([l,o])=>{typeof Ms[l]=="number"||l.startsWith("fov")?(o===""||isNaN(o))&&(delete r[l],i.push(l)):Array.isArray(Ms[l])&&(Array.isArray(o[0])?o.find(u=>u.find(s=>o===""||l!=="coxeter"&&isNaN(s)))&&(delete r[l],i.push(l)):o.find(u=>o===""||isNaN(u)&&!(l==="mirrors"&&ap.includes(u)))&&(delete r[l],i.push(l)))}),i.includes("coxeter")||r0(r),(r.matrix.length!==r.dimensions||r.matrix.some(l=>l.length!==r.dimensions))&&(r.matrix=Ve(r.dimensions));for(let l=3;l<=9;l++)l<=r.dimensions?(!r[`fov${l}`]&&!i.includes(`fov${l}`)&&(r[`fov${l}`]=90),!r[`projection${l}`]&&!i.includes(`projection${l}`)&&(r[`projection${l}`]="perspective")):(`fov${l}`in r&&delete r[`fov${l}`],`projection${l}`in r&&delete r[`projection${l}`]);if(t&&n.includes("dimensions")){const l=Wi(t.dimensions-r.dimensions);for(let o=4;o<=r.dimensions;o++)r[`projection${o}`]=o+l===3?"scale":t[`projection${o+l}`];r.dimensions!==3&&(r.projection3="perspective"),r.dimensions===4&&t.dimensions===3&&t.projection3==="perspective"&&(r.projection4="stereographic")}return{params:r,badParams:i}},i0=(e,n,t,r,i)=>{let l=!0,o=0,u=1;if(i&&["∞","inf","Infinity"].includes(e))e="∞",o=0;else if(i&&e.endsWith("i")){const s=e.slice(0,-1);o=-(s===""?1:parseInt(s)),e=`${o===-1?"":-o}i`}else if(e.includes("/")){const[s,a]=e.split("/");o=s===""?"":parseInt(s),u=a===""?"":parseInt(a),u===1?e=`${o}`:e=`${o}/${u}`}else o=e===""?"":parseInt(r)===parseFloat(r)?parseInt(e):parseFloat(e);return l=!(i&&o===1||o===""||isNaN(o)||o<n||o>t||r%1===0&&o%r!==0||isNaN(u)||u===""||u<n||u>t||r%1===0&&u%r!==0),{valid:l,raw:e,value:o,fraction:u}};function l0({name:e,label:n,min:t=0,max:r=1/0,step:i=1,value:l,coxeter:o,fraction:u,fractionName:s,toggler:a,togglerName:c,onChange:f,...d}){o&&(t=-1/0);const p=K.useCallback(()=>l<0&&o?`${l===-1?"":-l}i`:l===0&&o?"∞":s&&u>1?`${l}/${u}`:`${l}`,[o,u,s,l]),[m,y]=K.useState(p);K.useEffect(()=>{y(p())},[o,p,u,s,l]);const[E,h]=K.useState(!0),v=K.useCallback(N=>{const k=i0(N,t,r,i,o);y(k.raw),h(k.valid),k.valid&&(f(e,k.value),s&&f(s,k.fraction))},[o,s,r,t,e,f,i]),g=K.useCallback(()=>{if(!E){v(o?"3":`${t}`);return}if(o){if(m==="2"){v("∞");return}if(m==="∞"){v("i");return}if(m.endsWith("i")){const N=m.slice(0,-1);let k=(N===""?1:parseInt(N))+1;v(`${k}i`);return}}if(m!==`${t}`)if(m.includes("/"))v((parseInt(m.split("/")[0])-i).toString());else{const N=(parseInt(i)===parseFloat(i)?parseInt(m):parseFloat(m))-i;i>0&&i<1?v(N.toFixed(i.toString().split(".")[1].length)):v(N.toString())}},[o,t,m,i,v,E]),x=K.useCallback(()=>{if(!E){v(o?"3":`${t}`);return}if(o){if(m==="∞"){v("2");return}if(m==="i"){v("∞");return}if(m.endsWith("i")){const N=m.slice(0,-1);let k=parseInt(N)-1;k===1&&(k=""),v(`${k}i`);return}}if(m!==`${r}`)if(m.includes("/"))v((parseInt(m.split("/")[0])+i).toString());else{const N=(parseInt(i)===parseFloat(i)?parseInt(m):parseFloat(m))+i;i>0&&i<1?v(N.toFixed(i.toString().split(".")[1].length)):v(N.toString())}},[o,r,t,m,i,v,E]),S=N=>{const k=N.target.value;v(k)},I=N=>{f(N.target.name,N.target.checked)};return T.jsxs("label",{className:`number ${E?"valid":"invalid"}`,children:[n&&T.jsx("span",{className:"number-label",children:n}),c&&T.jsx("input",{type:"checkbox",name:c,checked:a,onChange:I}),(!c||a)&&T.jsxs("div",{className:"number-control",children:[T.jsx("input",{type:"text",name:e,value:m,style:{width:`${m.length+.25}ch`},onChange:S,...d}),T.jsx("button",{className:"plusminus minus",onClick:g,tabIndex:-1,children:"−"}),T.jsx("button",{className:"plusminus plus",onClick:x,tabIndex:-1,children:"+"})]})]})}function o0({i:e,j:n,value:t,stellation:r,onChange:i}){return T.jsx("div",{className:"coxeter-value",children:T.jsx(l0,{name:`coxeter-${e}-${n}`,value:t,onChange:i,coxeter:!0,fraction:r,fractionName:`stellation-${e}-${n}`})})}function Fs({type:e}){return T.jsx("svg",{className:"coxeter-link",viewBox:"0 0 24 16",children:T.jsx("path",{d:"M 0 8 L 24 8",strokeWidth:e==="bold"?3:1,stroke:"currentColor",strokeDasharray:e==="dashed"?"1 1":""})})}const jt=6,Dn=14,Ut={active:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:Dn}),T.jsx("circle",{cx:"16",cy:"16",r:jt,fill:"currentColor"})]}),inactive:T.jsx(T.Fragment,{children:T.jsx("circle",{cx:"16",cy:"16",r:jt,fill:"currentColor"})}),dual:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:jt,fill:"currentColor"}),T.jsx("path",{d:"M 16 2 L 16 10"}),T.jsx("path",{d:"M 16 10 L 16 22",stroke:"black"}),T.jsx("path",{d:"M 16 22 L 16 30"})]}),snub:T.jsx(T.Fragment,{children:T.jsx("circle",{cx:"16",cy:"16",r:Dn})}),dualsnub:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:Dn-4}),T.jsx("path",{d:"M 16 0 L 16 32"})]}),holosnub:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:Dn}),T.jsx("circle",{cx:"16",cy:"16",r:jt})]}),custom:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:Dn}),T.jsx("path",{d:"M 10 14 L 10 18 L 22 18 L 22 14"})]}),activeVoid:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:Dn}),T.jsx("path",{d:"M 6 6 L 26 26"}),T.jsx("path",{d:"M 6 26 L 26 6"})]}),void:T.jsxs(T.Fragment,{children:[T.jsx("path",{d:"M 10 10 L 22 22"}),T.jsx("path",{d:"M 10 22 L 22 10"})]})};function u0({index:e,value:n,onChange:t}){const r=K.useRef(null),[i,l]=K.useState(!1),o=lf(n),u=()=>{const f=$r[o==="inactive"?"active":"inactive"];t(e,f)},s=c=>{const f=Object.keys(Ut),d=f.indexOf(o),p=f[(f.length+d+Wi(c.deltaY))%f.length],m=$r[p];t(e,m)},a=c=>{c.preventDefault(),l(!i)};return K.useEffect(()=>{const c=f=>{r.current.contains(f.target)||l(!1)};if(i)return window.addEventListener("mouseup",c),()=>{window.removeEventListener("mouseup",c)}},[i]),T.jsxs("div",{className:"coxeter-node",title:o,ref:r,children:[T.jsx("svg",{className:`coxeter-graphic ${o}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:u,onContextMenu:a,onWheel:s,children:Ut[o]}),o==="custom"&&T.jsx("input",{type:"number",value:n,step:".01",style:{width:`${n.toString().length+1.5}ch`},onChange:c=>t(e,c.target.value)}),i&&T.jsx("div",{className:"coxeter-node-menu",children:Object.keys(Ut).filter(c=>c!==o).map(c=>T.jsx("div",{title:c,onClick:()=>{t(e,$r[c]),l(!1)},children:T.jsx("svg",{className:`coxeter-graphic ${c}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:()=>{t(e,$r[c]),l(!1)},children:Ut[c]})},c))})]})}const Ls=(e,n)=>e[n].some((t,r)=>r<n&&t<0)?"dashed":e[n].some((t,r)=>r<n&&t===0)?"bold":"solid",D0=K.memo(function({dimensions:n,coxeter:t,mirrors:r,stellation:i,extended:l,onChange:o}){const[u,s]=K.useState(1),a=K.useRef(),c=K.useCallback(()=>{if(o("extended",!l),l){const p=t.map(m=>m.slice());for(let m=0;m<n;m++)for(let y=0;y<m-1;y++)p[m][y]=2,p[y][m]=2;o("coxeter",p)}},[l,o,t,n]),f=K.useCallback((p,m)=>{if(p.startsWith("coxeter")){const[y,E]=p.split("-").slice(1).map(v=>+v),h=t.map(v=>v.slice());h[y][E]=m,h[E][y]=m,o("coxeter",h)}if(p.startsWith("stellation")){const[y,E]=p.split("-").slice(1).map(v=>+v),h=i.map(v=>v.slice());h[y][E]=m,h[E][y]=m,o("stellation",h)}},[t,o,i]),d=K.useCallback((p,m)=>{const y=r[p];let E=r.slice();E[p]=m,ni(m)||y===0?E.some(h=>ni(h))&&(E=E.map((h,v)=>h==="s"?"b":h&&h!=="b"?"d":h)):m!==0&&cp(m)&&E.some(h=>ni(h))&&(E=E.map((h,v)=>h==="b"?"s":h==="d"?1:h)),o("mirrors",E)},[r,o]);return K.useEffect(()=>{const p=()=>{if(!a.current)return;const m=Be(1,(window.innerWidth-a.current.offsetLeft)/a.current.offsetWidth);s(m)};return p(),window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[n]),T.jsxs("aside",{className:"coxeters",style:u===1?void 0:{transform:`scale(${u})`},ref:a,children:[T.jsx("div",{className:"coxeter-matrix",children:[...Array(n).keys()].map(p=>T.jsxs(K.Fragment,{children:[p>0&&T.jsx("div",{className:"coxeter-column",children:[...Array(p).keys()].map(m=>(l||p===m+1)&&T.jsx(o0,{i:p,j:m,value:t[p][m],stellation:i[p][m],onChange:f},`${p}x${m}`))}),p>0&&T.jsx(Fs,{type:Ls(t,p)}),T.jsx(u0,{index:p,value:r[p],onChange:d}),p<n-1&&T.jsx(Fs,{type:Ls(t,p+1)})]},p))}),T.jsxs("div",{className:"coxeter-toggles",children:[n<9&&T.jsx("button",{className:"button",onClick:()=>o("dimensions",n+1),title:"Increase dimensions",children:"+"}),n>2&&T.jsx("button",{className:"button",onClick:()=>o("dimensions",n-1),title:"Decrease dimensions",children:"−"}),T.jsx("button",{className:"button",onClick:c,title:"extended mode",children:l?"▲":"▼"})]})]})}),sn=32,js=18;function z0({coxeter:e,stellation:n,mirrors:t}){const r=e.length,i=t.map((y,E)=>{const h=lf(y);return{n:E,type:h,i:E,j:0,r:h==="inactive"?jt:Dn}});for(let y=0;y<r;y++)for(let E=r-1;E>y+1;E--)if(e[y][E]!==2){const h=y===0,v=E===r-1,g=!h&&!v,x=E-y+1,S=$(x-1)/2,I=2*Math.PI/x,N={i:i[y].i+S,j:i[y].j+(g?-S*ae((2+x)/4*I):0)};for(let k=y;k<=E;k++){let M=k-y+(h?1:v?x/2:(2+x)/4);i[k].i=N.i+S*he(I*M),i[k].j=N.j+S*ae(I*M)}for(let k=E+1;k<r;k++)i[k].i-=E-y,i[k].i+=2*S;y=E-1;break}const l=[];for(let y=0;y<r;y++)for(let E=0;E<y;E++)if(e[y][E]!==2){const h=e[y][E],v=n[y][E];let g=`${h===0?"∞":h<0?`${h===-1?"":-h}i`:h}`;v>1&&(g+=`/${v}`),g==="3"&&(g=""),l.push({source:i[y],target:i[E],value:g,type:h<0?"dashed":h===0?"bold":"solid"})}const o=i.map(({i:y})=>y),u=i.map(({j:y})=>y),s=Be(...o),a=Pt(...o),c=Be(...u),f=Pt(...u);let d=0,p=0;for(let y=0;y<i.length;y++){const E=i[y];E.x=(E.i-s)*2*sn,E.y=(E.j-c)*2*sn,d=Pt(d,E.x),p=Pt(p,E.y)}const m=y=>y+Pt(y-1,0);return T.jsxs("svg",{className:"coxeter-diagram",viewBox:`${-sn/2} ${-sn/2} ${d+sn} ${p+sn}`,width:`${m(a-s+1)}em`,height:`${m(f-c+1)+.5}em`,strokeWidth:"2",fill:"transparent",stroke:"currentColor",children:[i.map(({n:y,type:E,x:h,y:v,r:g})=>T.jsx("g",{className:"coxeter-diagram-node",transform:`translate(${h-sn/2} ${v-sn/2})`,title:E,children:Ut[E]},y)),l.map(({source:y,target:E,value:h,type:v})=>{const g={x:y.x,y:y.y},x={x:E.x,y:E.y},S={},I=bv(x.y-g.y,x.x-g.x);return S.x=(g.x+x.x)/2+(js+(h.length-2)*5)*he(I-ce/2),S.y=(g.y+x.y)/2+js*ae(I-ce/2),g.x+=(y.r+1)*he(I),g.y+=(y.r+1)*ae(I),x.x-=(E.r+1)*he(I),x.y-=(E.r+1)*ae(I),T.jsxs("g",{className:"coxeter-diagram-link",children:[T.jsx("path",{d:`M ${g.x} ${g.y} L ${x.x} ${x.y}`,strokeWidth:v==="bold"?"4":"2",stroke:"currentColor",strokeDasharray:v==="dashed"?"1 1":""}),T.jsx("text",{style:{fontSize:"1.25rem"},stroke:"none",fill:"currentColor",textAnchor:"middle",dominantBaseline:"middle",x:S.x,y:S.y,children:h})]},`${y.n}-${E.n}`)})]})}export{v0 as A,Ve as B,T as C,Ms as D,O0 as E,z0 as F,s0 as G,R0 as H,D0 as I,_0 as J,qp as K,C0 as L,bp as M,l0 as N,xr as O,ce as P,w0 as Q,P0 as R,p0 as S,Su as T,Lv as U,r0 as V,cf as W,Yt as a,Le as b,ct as c,h0 as d,Ap as e,Pt as f,T0 as g,E0 as h,zp as i,N0 as j,k0 as k,y0 as l,Be as m,cp as n,S0 as o,tp as p,rf as q,K as r,a0 as s,Jt as t,I0 as u,c0 as v,_s as w,Ee as x,f0 as y,d0 as z};
