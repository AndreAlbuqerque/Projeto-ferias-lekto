(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Mw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Og={exports:{}},Sl={},bg={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=Symbol.for("react.element"),jw=Symbol.for("react.portal"),Fw=Symbol.for("react.fragment"),Uw=Symbol.for("react.strict_mode"),zw=Symbol.for("react.profiler"),Bw=Symbol.for("react.provider"),$w=Symbol.for("react.context"),Hw=Symbol.for("react.forward_ref"),qw=Symbol.for("react.suspense"),Ww=Symbol.for("react.memo"),Kw=Symbol.for("react.lazy"),up=Symbol.iterator;function Gw(t){return t===null||typeof t!="object"?null:(t=up&&t[up]||t["@@iterator"],typeof t=="function"?t:null)}var Lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mg=Object.assign,jg={};function Mi(t,e,n){this.props=t,this.context=e,this.refs=jg,this.updater=n||Lg}Mi.prototype.isReactComponent={};Mi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fg(){}Fg.prototype=Mi.prototype;function Ch(t,e,n){this.props=t,this.context=e,this.refs=jg,this.updater=n||Lg}var Ph=Ch.prototype=new Fg;Ph.constructor=Ch;Mg(Ph,Mi.prototype);Ph.isPureReactComponent=!0;var cp=Array.isArray,Ug=Object.prototype.hasOwnProperty,Nh={current:null},zg={key:!0,ref:!0,__self:!0,__source:!0};function Bg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ug.call(e,r)&&!zg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:lo,type:t,key:s,ref:o,props:i,_owner:Nh.current}}function Qw(t,e){return{$$typeof:lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===lo}function Yw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hp=/\/+/g;function ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Yw(""+t.key):e.toString(36)}function ma(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case lo:case jw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ku(o,0):r,cp(i)?(n="",t!=null&&(n=t.replace(hp,"$&/")+"/"),ma(i,e,n,"",function(h){return h})):i!=null&&(Dh(i)&&(i=Qw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(hp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",cp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ku(s,l);o+=ma(s,e,n,u,i)}else if(u=Gw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ku(s,l++),o+=ma(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $o(t,e,n){if(t==null)return t;var r=[],i=0;return ma(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Xw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var st={current:null},ga={transition:null},Jw={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:ga,ReactCurrentOwner:Nh};function $g(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:$o,forEach:function(t,e,n){$o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $o(t,function(){e++}),e},toArray:function(t){return $o(t,function(e){return e})||[]},only:function(t){if(!Dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Mi;te.Fragment=Fw;te.Profiler=zw;te.PureComponent=Ch;te.StrictMode=Uw;te.Suspense=qw;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jw;te.act=$g;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ug.call(e,u)&&!zg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:lo,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:$w,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Bw,_context:t},t.Consumer=t};te.createElement=Bg;te.createFactory=function(t){var e=Bg.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:Hw,render:t}};te.isValidElement=Dh;te.lazy=function(t){return{$$typeof:Kw,_payload:{_status:-1,_result:t},_init:Xw}};te.memo=function(t,e){return{$$typeof:Ww,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=ga.transition;ga.transition={};try{t()}finally{ga.transition=e}};te.unstable_act=$g;te.useCallback=function(t,e){return st.current.useCallback(t,e)};te.useContext=function(t){return st.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return st.current.useDeferredValue(t)};te.useEffect=function(t,e){return st.current.useEffect(t,e)};te.useId=function(){return st.current.useId()};te.useImperativeHandle=function(t,e,n){return st.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return st.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return st.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return st.current.useMemo(t,e)};te.useReducer=function(t,e,n){return st.current.useReducer(t,e,n)};te.useRef=function(t){return st.current.useRef(t)};te.useState=function(t){return st.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return st.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return st.current.useTransition()};te.version="18.3.1";bg.exports=te;var ne=bg.exports;const Zw=Mw(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eE=ne,tE=Symbol.for("react.element"),nE=Symbol.for("react.fragment"),rE=Object.prototype.hasOwnProperty,iE=eE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sE={key:!0,ref:!0,__self:!0,__source:!0};function Hg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rE.call(e,r)&&!sE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tE,type:t,key:s,ref:o,props:i,_owner:iE.current}}Sl.Fragment=nE;Sl.jsx=Hg;Sl.jsxs=Hg;Og.exports=Sl;var y=Og.exports,dc={},qg={exports:{}},_t={},Wg={exports:{}},Kg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,$){var q=b.length;b.push($);e:for(;0<q;){var Q=q-1>>>1,ee=b[Q];if(0<i(ee,$))b[Q]=$,b[q]=ee,q=Q;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var $=b[0],q=b.pop();if(q!==$){b[0]=q;e:for(var Q=0,ee=b.length,fe=ee>>>1;Q<fe;){var Ct=2*(Q+1)-1,en=b[Ct],tn=Ct+1,nn=b[tn];if(0>i(en,q))tn<ee&&0>i(nn,en)?(b[Q]=nn,b[tn]=q,Q=tn):(b[Q]=en,b[Ct]=q,Q=Ct);else if(tn<ee&&0>i(nn,q))b[Q]=nn,b[tn]=q,Q=tn;else break e}}return $}function i(b,$){var q=b.sortIndex-$.sortIndex;return q!==0?q:b.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,g=null,v=3,x=!1,P=!1,N=!1,L=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(b){for(var $=n(h);$!==null;){if($.callback===null)r(h);else if($.startTime<=b)r(h),$.sortIndex=$.expirationTime,e(u,$);else break;$=n(h)}}function O(b){if(N=!1,k(b),!P)if(n(u)!==null)P=!0,fr(B);else{var $=n(h);$!==null&&V(O,$.startTime-b)}}function B(b,$){P=!1,N&&(N=!1,S(m),m=-1),x=!0;var q=v;try{for(k($),g=n(u);g!==null&&(!(g.expirationTime>$)||b&&!A());){var Q=g.callback;if(typeof Q=="function"){g.callback=null,v=g.priorityLevel;var ee=Q(g.expirationTime<=$);$=t.unstable_now(),typeof ee=="function"?g.callback=ee:g===n(u)&&r(u),k($)}else r(u);g=n(u)}if(g!==null)var fe=!0;else{var Ct=n(h);Ct!==null&&V(O,Ct.startTime-$),fe=!1}return fe}finally{g=null,v=q,x=!1}}var U=!1,E=null,m=-1,_=5,T=-1;function A(){return!(t.unstable_now()-T<_)}function R(){if(E!==null){var b=t.unstable_now();T=b;var $=!0;try{$=E(!0,b)}finally{$?I():(U=!1,E=null)}}else U=!1}var I;if(typeof w=="function")I=function(){w(R)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,Zt=lt.port2;lt.port1.onmessage=R,I=function(){Zt.postMessage(null)}}else I=function(){L(R,0)};function fr(b){E=b,U||(U=!0,I())}function V(b,$){m=L(function(){b(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){P||x||(P=!0,fr(B))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(b){switch(v){case 1:case 2:case 3:var $=3;break;default:$=v}var q=v;v=$;try{return b()}finally{v=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,$){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var q=v;v=b;try{return $()}finally{v=q}},t.unstable_scheduleCallback=function(b,$,q){var Q=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Q+q:Q):q=Q,b){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=q+ee,b={id:f++,callback:$,priorityLevel:b,startTime:q,expirationTime:ee,sortIndex:-1},q>Q?(b.sortIndex=q,e(h,b),n(u)===null&&b===n(h)&&(N?(S(m),m=-1):N=!0,V(O,q-Q))):(b.sortIndex=ee,e(u,b),P||x||(P=!0,fr(B))),b},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(b){var $=v;return function(){var q=v;v=$;try{return b.apply(this,arguments)}finally{v=q}}}})(Kg);Wg.exports=Kg;var oE=Wg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aE=ne,vt=oE;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gg=new Set,Ms={};function Fr(t,e){Ei(t,e),Ei(t+"Capture",e)}function Ei(t,e){for(Ms[t]=e,t=0;t<e.length;t++)Gg.add(e[t])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fc=Object.prototype.hasOwnProperty,lE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dp={},fp={};function uE(t){return fc.call(fp,t)?!0:fc.call(dp,t)?!1:lE.test(t)?fp[t]=!0:(dp[t]=!0,!1)}function cE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hE(t,e,n,r){if(e===null||typeof e>"u"||cE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vh=/[\-:]([a-z])/g;function Oh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vh,Oh);Be[e]=new ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vh,Oh);Be[e]=new ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vh,Oh);Be[e]=new ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new ot(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function bh(t,e,n,r){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hE(e,n,i,r)&&(n=null),r||i===null?uE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Sn=aE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ho=Symbol.for("react.element"),Xr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),Lh=Symbol.for("react.strict_mode"),pc=Symbol.for("react.profiler"),Qg=Symbol.for("react.provider"),Yg=Symbol.for("react.context"),Mh=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),gc=Symbol.for("react.suspense_list"),jh=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),Xg=Symbol.for("react.offscreen"),pp=Symbol.iterator;function ss(t){return t===null||typeof t!="object"?null:(t=pp&&t[pp]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Ru;function ms(t){if(Ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ru=e&&e[1]||""}return`
`+Ru+t}var Cu=!1;function Pu(t,e){if(!t||Cu)return"";Cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ms(t):""}function dE(t){switch(t.tag){case 5:return ms(t.type);case 16:return ms("Lazy");case 13:return ms("Suspense");case 19:return ms("SuspenseList");case 0:case 2:case 15:return t=Pu(t.type,!1),t;case 11:return t=Pu(t.type.render,!1),t;case 1:return t=Pu(t.type,!0),t;default:return""}}function yc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jr:return"Fragment";case Xr:return"Portal";case pc:return"Profiler";case Lh:return"StrictMode";case mc:return"Suspense";case gc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yg:return(t.displayName||"Context")+".Consumer";case Qg:return(t._context.displayName||"Context")+".Provider";case Mh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jh:return e=t.displayName||null,e!==null?e:yc(t.type)||"Memo";case Vn:e=t._payload,t=t._init;try{return yc(t(e))}catch{}}return null}function fE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yc(e);case 8:return e===Lh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pE(t){var e=Jg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qo(t){t._valueTracker||(t._valueTracker=pE(t))}function Zg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function La(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vc(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ey(t,e){e=e.checked,e!=null&&bh(t,"checked",e,!1)}function _c(t,e){ey(t,e);var n=ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wc(t,e.type,n):e.hasOwnProperty("defaultValue")&&wc(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wc(t,e,n){(e!=="number"||La(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var gs=Array.isArray;function hi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ec(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(gs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function ty(t,e){var n=ir(e.value),r=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function vp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ny(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ny(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wo,ry=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wo=Wo||document.createElement("div"),Wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mE=["Webkit","ms","Moz","O"];Object.keys(Ts).forEach(function(t){mE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ts[e]=Ts[t]})});function iy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ts.hasOwnProperty(t)&&Ts[t]?(""+e).trim():e+"px"}function sy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=iy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gE=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ic(t,e){if(e){if(gE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Sc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ac=null;function Fh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xc=null,di=null,fi=null;function _p(t){if(t=ho(t)){if(typeof xc!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Cl(e),xc(t.stateNode,t.type,e))}}function oy(t){di?fi?fi.push(t):fi=[t]:di=t}function ay(){if(di){var t=di,e=fi;if(fi=di=null,_p(t),e)for(t=0;t<e.length;t++)_p(e[t])}}function ly(t,e){return t(e)}function uy(){}var Nu=!1;function cy(t,e,n){if(Nu)return t(e,n);Nu=!0;try{return ly(t,e,n)}finally{Nu=!1,(di!==null||fi!==null)&&(uy(),ay())}}function Fs(t,e){var n=t.stateNode;if(n===null)return null;var r=Cl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var kc=!1;if(mn)try{var os={};Object.defineProperty(os,"passive",{get:function(){kc=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{kc=!1}function yE(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Is=!1,Ma=null,ja=!1,Rc=null,vE={onError:function(t){Is=!0,Ma=t}};function _E(t,e,n,r,i,s,o,l,u){Is=!1,Ma=null,yE.apply(vE,arguments)}function wE(t,e,n,r,i,s,o,l,u){if(_E.apply(this,arguments),Is){if(Is){var h=Ma;Is=!1,Ma=null}else throw Error(F(198));ja||(ja=!0,Rc=h)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wp(t){if(Ur(t)!==t)throw Error(F(188))}function EE(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return wp(i),t;if(s===r)return wp(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function dy(t){return t=EE(t),t!==null?fy(t):null}function fy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fy(t);if(e!==null)return e;t=t.sibling}return null}var py=vt.unstable_scheduleCallback,Ep=vt.unstable_cancelCallback,TE=vt.unstable_shouldYield,IE=vt.unstable_requestPaint,xe=vt.unstable_now,SE=vt.unstable_getCurrentPriorityLevel,Uh=vt.unstable_ImmediatePriority,my=vt.unstable_UserBlockingPriority,Fa=vt.unstable_NormalPriority,AE=vt.unstable_LowPriority,gy=vt.unstable_IdlePriority,Al=null,Ht=null;function xE(t){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Al,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:CE,kE=Math.log,RE=Math.LN2;function CE(t){return t>>>=0,t===0?32:31-(kE(t)/RE|0)|0}var Ko=64,Go=4194304;function ys(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ua(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ys(l):(s&=o,s!==0&&(r=ys(s)))}else o=n&~i,o!==0?r=ys(o):s!==0&&(r=ys(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mt(e),i=1<<n,r|=t[n],e&=~i;return r}function PE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function NE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Mt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=PE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Cc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yy(){var t=Ko;return Ko<<=1,!(Ko&4194240)&&(Ko=64),t}function Du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mt(e),t[e]=n}function DE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function vy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _y,Bh,wy,Ey,Ty,Pc=!1,Qo=[],Hn=null,qn=null,Wn=null,Us=new Map,zs=new Map,bn=[],VE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tp(t,e){switch(t){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Us.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zs.delete(e.pointerId)}}function as(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ho(e),e!==null&&Bh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function OE(t,e,n,r,i){switch(e){case"focusin":return Hn=as(Hn,t,e,n,r,i),!0;case"dragenter":return qn=as(qn,t,e,n,r,i),!0;case"mouseover":return Wn=as(Wn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Us.set(s,as(Us.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,zs.set(s,as(zs.get(s)||null,t,e,n,r,i)),!0}return!1}function Iy(t){var e=Tr(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=hy(n),e!==null){t.blockedOn=e,Ty(t.priority,function(){wy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ac=r,n.target.dispatchEvent(r),Ac=null}else return e=ho(n),e!==null&&Bh(e),t.blockedOn=n,!1;e.shift()}return!0}function Ip(t,e,n){ya(t)&&n.delete(e)}function bE(){Pc=!1,Hn!==null&&ya(Hn)&&(Hn=null),qn!==null&&ya(qn)&&(qn=null),Wn!==null&&ya(Wn)&&(Wn=null),Us.forEach(Ip),zs.forEach(Ip)}function ls(t,e){t.blockedOn===e&&(t.blockedOn=null,Pc||(Pc=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,bE)))}function Bs(t){function e(i){return ls(i,t)}if(0<Qo.length){ls(Qo[0],t);for(var n=1;n<Qo.length;n++){var r=Qo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Hn!==null&&ls(Hn,t),qn!==null&&ls(qn,t),Wn!==null&&ls(Wn,t),Us.forEach(e),zs.forEach(e),n=0;n<bn.length;n++)r=bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<bn.length&&(n=bn[0],n.blockedOn===null);)Iy(n),n.blockedOn===null&&bn.shift()}var pi=Sn.ReactCurrentBatchConfig,za=!0;function LE(t,e,n,r){var i=ue,s=pi.transition;pi.transition=null;try{ue=1,$h(t,e,n,r)}finally{ue=i,pi.transition=s}}function ME(t,e,n,r){var i=ue,s=pi.transition;pi.transition=null;try{ue=4,$h(t,e,n,r)}finally{ue=i,pi.transition=s}}function $h(t,e,n,r){if(za){var i=Nc(t,e,n,r);if(i===null)Bu(t,e,r,Ba,n),Tp(t,r);else if(OE(i,t,e,n,r))r.stopPropagation();else if(Tp(t,r),e&4&&-1<VE.indexOf(t)){for(;i!==null;){var s=ho(i);if(s!==null&&_y(s),s=Nc(t,e,n,r),s===null&&Bu(t,e,r,Ba,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Bu(t,e,r,null,n)}}var Ba=null;function Nc(t,e,n,r){if(Ba=null,t=Fh(r),t=Tr(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ba=t,null}function Sy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(SE()){case Uh:return 1;case my:return 4;case Fa:case AE:return 16;case gy:return 536870912;default:return 16}default:return 16}}var zn=null,Hh=null,va=null;function Ay(){if(va)return va;var t,e=Hh,n=e.length,r,i="value"in zn?zn.value:zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return va=i.slice(t,1<r?1-r:void 0)}function _a(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yo(){return!0}function Sp(){return!1}function wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yo:Sp,this.isPropagationStopped=Sp,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),e}var ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qh=wt(ji),co=Ee({},ji,{view:0,detail:0}),jE=wt(co),Vu,Ou,us,xl=Ee({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==us&&(us&&t.type==="mousemove"?(Vu=t.screenX-us.screenX,Ou=t.screenY-us.screenY):Ou=Vu=0,us=t),Vu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),Ap=wt(xl),FE=Ee({},xl,{dataTransfer:0}),UE=wt(FE),zE=Ee({},co,{relatedTarget:0}),bu=wt(zE),BE=Ee({},ji,{animationName:0,elapsedTime:0,pseudoElement:0}),$E=wt(BE),HE=Ee({},ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qE=wt(HE),WE=Ee({},ji,{data:0}),xp=wt(WE),KE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QE[t])?!!e[t]:!1}function Wh(){return YE}var XE=Ee({},co,{key:function(t){if(t.key){var e=KE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_a(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wh,charCode:function(t){return t.type==="keypress"?_a(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_a(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JE=wt(XE),ZE=Ee({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kp=wt(ZE),eT=Ee({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wh}),tT=wt(eT),nT=Ee({},ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),rT=wt(nT),iT=Ee({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sT=wt(iT),oT=[9,13,27,32],Kh=mn&&"CompositionEvent"in window,Ss=null;mn&&"documentMode"in document&&(Ss=document.documentMode);var aT=mn&&"TextEvent"in window&&!Ss,xy=mn&&(!Kh||Ss&&8<Ss&&11>=Ss),Rp=" ",Cp=!1;function ky(t,e){switch(t){case"keyup":return oT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ry(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function lT(t,e){switch(t){case"compositionend":return Ry(e);case"keypress":return e.which!==32?null:(Cp=!0,Rp);case"textInput":return t=e.data,t===Rp&&Cp?null:t;default:return null}}function uT(t,e){if(Zr)return t==="compositionend"||!Kh&&ky(t,e)?(t=Ay(),va=Hh=zn=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xy&&e.locale!=="ko"?null:e.data;default:return null}}var cT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cT[t.type]:e==="textarea"}function Cy(t,e,n,r){oy(r),e=$a(e,"onChange"),0<e.length&&(n=new qh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var As=null,$s=null;function hT(t){Uy(t,0)}function kl(t){var e=ni(t);if(Zg(e))return t}function dT(t,e){if(t==="change")return e}var Py=!1;if(mn){var Lu;if(mn){var Mu="oninput"in document;if(!Mu){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),Mu=typeof Np.oninput=="function"}Lu=Mu}else Lu=!1;Py=Lu&&(!document.documentMode||9<document.documentMode)}function Dp(){As&&(As.detachEvent("onpropertychange",Ny),$s=As=null)}function Ny(t){if(t.propertyName==="value"&&kl($s)){var e=[];Cy(e,$s,t,Fh(t)),cy(hT,e)}}function fT(t,e,n){t==="focusin"?(Dp(),As=e,$s=n,As.attachEvent("onpropertychange",Ny)):t==="focusout"&&Dp()}function pT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl($s)}function mT(t,e){if(t==="click")return kl(e)}function gT(t,e){if(t==="input"||t==="change")return kl(e)}function yT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:yT;function Hs(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fc.call(e,i)||!Ft(t[i],e[i]))return!1}return!0}function Vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Op(t,e){var n=Vp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vp(n)}}function Dy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vy(){for(var t=window,e=La();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=La(t.document)}return e}function Gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vT(t){var e=Vy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Dy(n.ownerDocument.documentElement,n)){if(r!==null&&Gh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Op(n,s);var o=Op(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _T=mn&&"documentMode"in document&&11>=document.documentMode,ei=null,Dc=null,xs=null,Vc=!1;function bp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vc||ei==null||ei!==La(r)||(r=ei,"selectionStart"in r&&Gh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xs&&Hs(xs,r)||(xs=r,r=$a(Dc,"onSelect"),0<r.length&&(e=new qh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ei)))}function Xo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ti={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},ju={},Oy={};mn&&(Oy=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function Rl(t){if(ju[t])return ju[t];if(!ti[t])return t;var e=ti[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Oy)return ju[t]=e[n];return t}var by=Rl("animationend"),Ly=Rl("animationiteration"),My=Rl("animationstart"),jy=Rl("transitionend"),Fy=new Map,Lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){Fy.set(t,e),Fr(e,[t])}for(var Fu=0;Fu<Lp.length;Fu++){var Uu=Lp[Fu],wT=Uu.toLowerCase(),ET=Uu[0].toUpperCase()+Uu.slice(1);cr(wT,"on"+ET)}cr(by,"onAnimationEnd");cr(Ly,"onAnimationIteration");cr(My,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(jy,"onTransitionEnd");Ei("onMouseEnter",["mouseout","mouseover"]);Ei("onMouseLeave",["mouseout","mouseover"]);Ei("onPointerEnter",["pointerout","pointerover"]);Ei("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TT=new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));function Mp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wE(r,e,void 0,t),t.currentTarget=null}function Uy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Mp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Mp(i,l,h),s=u}}}if(ja)throw t=Rc,ja=!1,Rc=null,t}function me(t,e){var n=e[jc];n===void 0&&(n=e[jc]=new Set);var r=t+"__bubble";n.has(r)||(zy(e,t,2,!1),n.add(r))}function zu(t,e,n){var r=0;e&&(r|=4),zy(n,t,r,e)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function qs(t){if(!t[Jo]){t[Jo]=!0,Gg.forEach(function(n){n!=="selectionchange"&&(TT.has(n)||zu(n,!1,t),zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Jo]||(e[Jo]=!0,zu("selectionchange",!1,e))}}function zy(t,e,n,r){switch(Sy(e)){case 1:var i=LE;break;case 4:i=ME;break;default:i=$h}n=i.bind(null,e,n,t),i=void 0,!kc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Bu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Tr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}cy(function(){var h=s,f=Fh(n),g=[];e:{var v=Fy.get(t);if(v!==void 0){var x=qh,P=t;switch(t){case"keypress":if(_a(n)===0)break e;case"keydown":case"keyup":x=JE;break;case"focusin":P="focus",x=bu;break;case"focusout":P="blur",x=bu;break;case"beforeblur":case"afterblur":x=bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=UE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=tT;break;case by:case Ly:case My:x=$E;break;case jy:x=rT;break;case"scroll":x=jE;break;case"wheel":x=sT;break;case"copy":case"cut":case"paste":x=qE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=kp}var N=(e&4)!==0,L=!N&&t==="scroll",S=N?v!==null?v+"Capture":null:v;N=[];for(var w=h,k;w!==null;){k=w;var O=k.stateNode;if(k.tag===5&&O!==null&&(k=O,S!==null&&(O=Fs(w,S),O!=null&&N.push(Ws(w,O,k)))),L)break;w=w.return}0<N.length&&(v=new x(v,P,null,n,f),g.push({event:v,listeners:N}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",v&&n!==Ac&&(P=n.relatedTarget||n.fromElement)&&(Tr(P)||P[gn]))break e;if((x||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,x?(P=n.relatedTarget||n.toElement,x=h,P=P?Tr(P):null,P!==null&&(L=Ur(P),P!==L||P.tag!==5&&P.tag!==6)&&(P=null)):(x=null,P=h),x!==P)){if(N=Ap,O="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(N=kp,O="onPointerLeave",S="onPointerEnter",w="pointer"),L=x==null?v:ni(x),k=P==null?v:ni(P),v=new N(O,w+"leave",x,n,f),v.target=L,v.relatedTarget=k,O=null,Tr(f)===h&&(N=new N(S,w+"enter",P,n,f),N.target=k,N.relatedTarget=L,O=N),L=O,x&&P)t:{for(N=x,S=P,w=0,k=N;k;k=Kr(k))w++;for(k=0,O=S;O;O=Kr(O))k++;for(;0<w-k;)N=Kr(N),w--;for(;0<k-w;)S=Kr(S),k--;for(;w--;){if(N===S||S!==null&&N===S.alternate)break t;N=Kr(N),S=Kr(S)}N=null}else N=null;x!==null&&jp(g,v,x,N,!1),P!==null&&L!==null&&jp(g,L,P,N,!0)}}e:{if(v=h?ni(h):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var B=dT;else if(Pp(v))if(Py)B=gT;else{B=pT;var U=fT}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(B=mT);if(B&&(B=B(t,h))){Cy(g,B,n,f);break e}U&&U(t,v,h),t==="focusout"&&(U=v._wrapperState)&&U.controlled&&v.type==="number"&&wc(v,"number",v.value)}switch(U=h?ni(h):window,t){case"focusin":(Pp(U)||U.contentEditable==="true")&&(ei=U,Dc=h,xs=null);break;case"focusout":xs=Dc=ei=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,bp(g,n,f);break;case"selectionchange":if(_T)break;case"keydown":case"keyup":bp(g,n,f)}var E;if(Kh)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Zr?ky(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(xy&&n.locale!=="ko"&&(Zr||m!=="onCompositionStart"?m==="onCompositionEnd"&&Zr&&(E=Ay()):(zn=f,Hh="value"in zn?zn.value:zn.textContent,Zr=!0)),U=$a(h,m),0<U.length&&(m=new xp(m,t,null,n,f),g.push({event:m,listeners:U}),E?m.data=E:(E=Ry(n),E!==null&&(m.data=E)))),(E=aT?lT(t,n):uT(t,n))&&(h=$a(h,"onBeforeInput"),0<h.length&&(f=new xp("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:h}),f.data=E))}Uy(g,e)})}function Ws(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $a(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fs(t,n),s!=null&&r.unshift(Ws(t,s,i)),s=Fs(t,e),s!=null&&r.push(Ws(t,s,i))),t=t.return}return r}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Fs(n,s),u!=null&&o.unshift(Ws(n,u,l))):i||(u=Fs(n,s),u!=null&&o.push(Ws(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var IT=/\r\n?/g,ST=/\u0000|\uFFFD/g;function Fp(t){return(typeof t=="string"?t:""+t).replace(IT,`
`).replace(ST,"")}function Zo(t,e,n){if(e=Fp(e),Fp(t)!==e&&n)throw Error(F(425))}function Ha(){}var Oc=null,bc=null;function Lc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,AT=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,xT=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(t){return Up.resolve(null).then(t).catch(kT)}:Mc;function kT(t){setTimeout(function(){throw t})}function $u(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Bs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bs(e)}function Kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fi=Math.random().toString(36).slice(2),$t="__reactFiber$"+Fi,Ks="__reactProps$"+Fi,gn="__reactContainer$"+Fi,jc="__reactEvents$"+Fi,RT="__reactListeners$"+Fi,CT="__reactHandles$"+Fi;function Tr(t){var e=t[$t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gn]||n[$t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zp(t);t!==null;){if(n=t[$t])return n;t=zp(t)}return e}t=n,n=t.parentNode}return null}function ho(t){return t=t[$t]||t[gn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Cl(t){return t[Ks]||null}var Fc=[],ri=-1;function hr(t){return{current:t}}function ge(t){0>ri||(t.current=Fc[ri],Fc[ri]=null,ri--)}function de(t,e){ri++,Fc[ri]=t.current,t.current=e}var sr={},Ze=hr(sr),ht=hr(!1),Cr=sr;function Ti(t,e){var n=t.type.contextTypes;if(!n)return sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dt(t){return t=t.childContextTypes,t!=null}function qa(){ge(ht),ge(Ze)}function Bp(t,e,n){if(Ze.current!==sr)throw Error(F(168));de(Ze,e),de(ht,n)}function By(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,fE(t)||"Unknown",i));return Ee({},n,r)}function Wa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Cr=Ze.current,de(Ze,t),de(ht,ht.current),!0}function $p(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=By(t,e,Cr),r.__reactInternalMemoizedMergedChildContext=t,ge(ht),ge(Ze),de(Ze,t)):ge(ht),de(ht,n)}var an=null,Pl=!1,Hu=!1;function $y(t){an===null?an=[t]:an.push(t)}function PT(t){Pl=!0,$y(t)}function dr(){if(!Hu&&an!==null){Hu=!0;var t=0,e=ue;try{var n=an;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}an=null,Pl=!1}catch(i){throw an!==null&&(an=an.slice(t+1)),py(Uh,dr),i}finally{ue=e,Hu=!1}}return null}var ii=[],si=0,Ka=null,Ga=0,Et=[],Tt=0,Pr=null,ln=1,un="";function _r(t,e){ii[si++]=Ga,ii[si++]=Ka,Ka=t,Ga=e}function Hy(t,e,n){Et[Tt++]=ln,Et[Tt++]=un,Et[Tt++]=Pr,Pr=t;var r=ln;t=un;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var s=32-Mt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ln=1<<32-Mt(e)+i|n<<i|r,un=s+t}else ln=1<<s|n<<i|r,un=t}function Qh(t){t.return!==null&&(_r(t,1),Hy(t,1,0))}function Yh(t){for(;t===Ka;)Ka=ii[--si],ii[si]=null,Ga=ii[--si],ii[si]=null;for(;t===Pr;)Pr=Et[--Tt],Et[Tt]=null,un=Et[--Tt],Et[Tt]=null,ln=Et[--Tt],Et[Tt]=null}var yt=null,gt=null,ye=!1,Ot=null;function qy(t,e){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yt=t,gt=Kn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yt=t,gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:ln,overflow:un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yt=t,gt=null,!0):!1;default:return!1}}function Uc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zc(t){if(ye){var e=gt;if(e){var n=e;if(!Hp(t,e)){if(Uc(t))throw Error(F(418));e=Kn(n.nextSibling);var r=yt;e&&Hp(t,e)?qy(r,n):(t.flags=t.flags&-4097|2,ye=!1,yt=t)}}else{if(Uc(t))throw Error(F(418));t.flags=t.flags&-4097|2,ye=!1,yt=t}}}function qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function ea(t){if(t!==yt)return!1;if(!ye)return qp(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lc(t.type,t.memoizedProps)),e&&(e=gt)){if(Uc(t))throw Wy(),Error(F(418));for(;e;)qy(t,e),e=Kn(e.nextSibling)}if(qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gt=Kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gt=null}}else gt=yt?Kn(t.stateNode.nextSibling):null;return!0}function Wy(){for(var t=gt;t;)t=Kn(t.nextSibling)}function Ii(){gt=yt=null,ye=!1}function Xh(t){Ot===null?Ot=[t]:Ot.push(t)}var NT=Sn.ReactCurrentBatchConfig;function cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ta(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wp(t){var e=t._init;return e(t._payload)}function Ky(t){function e(S,w){if(t){var k=S.deletions;k===null?(S.deletions=[w],S.flags|=16):k.push(w)}}function n(S,w){if(!t)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(S,w){return S=Xn(S,w),S.index=0,S.sibling=null,S}function s(S,w,k){return S.index=k,t?(k=S.alternate,k!==null?(k=k.index,k<w?(S.flags|=2,w):k):(S.flags|=2,w)):(S.flags|=1048576,w)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,w,k,O){return w===null||w.tag!==6?(w=Xu(k,S.mode,O),w.return=S,w):(w=i(w,k),w.return=S,w)}function u(S,w,k,O){var B=k.type;return B===Jr?f(S,w,k.props.children,O,k.key):w!==null&&(w.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Vn&&Wp(B)===w.type)?(O=i(w,k.props),O.ref=cs(S,w,k),O.return=S,O):(O=xa(k.type,k.key,k.props,null,S.mode,O),O.ref=cs(S,w,k),O.return=S,O)}function h(S,w,k,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=Ju(k,S.mode,O),w.return=S,w):(w=i(w,k.children||[]),w.return=S,w)}function f(S,w,k,O,B){return w===null||w.tag!==7?(w=kr(k,S.mode,O,B),w.return=S,w):(w=i(w,k),w.return=S,w)}function g(S,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Xu(""+w,S.mode,k),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ho:return k=xa(w.type,w.key,w.props,null,S.mode,k),k.ref=cs(S,null,w),k.return=S,k;case Xr:return w=Ju(w,S.mode,k),w.return=S,w;case Vn:var O=w._init;return g(S,O(w._payload),k)}if(gs(w)||ss(w))return w=kr(w,S.mode,k,null),w.return=S,w;ta(S,w)}return null}function v(S,w,k,O){var B=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return B!==null?null:l(S,w,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ho:return k.key===B?u(S,w,k,O):null;case Xr:return k.key===B?h(S,w,k,O):null;case Vn:return B=k._init,v(S,w,B(k._payload),O)}if(gs(k)||ss(k))return B!==null?null:f(S,w,k,O,null);ta(S,k)}return null}function x(S,w,k,O,B){if(typeof O=="string"&&O!==""||typeof O=="number")return S=S.get(k)||null,l(w,S,""+O,B);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ho:return S=S.get(O.key===null?k:O.key)||null,u(w,S,O,B);case Xr:return S=S.get(O.key===null?k:O.key)||null,h(w,S,O,B);case Vn:var U=O._init;return x(S,w,k,U(O._payload),B)}if(gs(O)||ss(O))return S=S.get(k)||null,f(w,S,O,B,null);ta(w,O)}return null}function P(S,w,k,O){for(var B=null,U=null,E=w,m=w=0,_=null;E!==null&&m<k.length;m++){E.index>m?(_=E,E=null):_=E.sibling;var T=v(S,E,k[m],O);if(T===null){E===null&&(E=_);break}t&&E&&T.alternate===null&&e(S,E),w=s(T,w,m),U===null?B=T:U.sibling=T,U=T,E=_}if(m===k.length)return n(S,E),ye&&_r(S,m),B;if(E===null){for(;m<k.length;m++)E=g(S,k[m],O),E!==null&&(w=s(E,w,m),U===null?B=E:U.sibling=E,U=E);return ye&&_r(S,m),B}for(E=r(S,E);m<k.length;m++)_=x(E,S,m,k[m],O),_!==null&&(t&&_.alternate!==null&&E.delete(_.key===null?m:_.key),w=s(_,w,m),U===null?B=_:U.sibling=_,U=_);return t&&E.forEach(function(A){return e(S,A)}),ye&&_r(S,m),B}function N(S,w,k,O){var B=ss(k);if(typeof B!="function")throw Error(F(150));if(k=B.call(k),k==null)throw Error(F(151));for(var U=B=null,E=w,m=w=0,_=null,T=k.next();E!==null&&!T.done;m++,T=k.next()){E.index>m?(_=E,E=null):_=E.sibling;var A=v(S,E,T.value,O);if(A===null){E===null&&(E=_);break}t&&E&&A.alternate===null&&e(S,E),w=s(A,w,m),U===null?B=A:U.sibling=A,U=A,E=_}if(T.done)return n(S,E),ye&&_r(S,m),B;if(E===null){for(;!T.done;m++,T=k.next())T=g(S,T.value,O),T!==null&&(w=s(T,w,m),U===null?B=T:U.sibling=T,U=T);return ye&&_r(S,m),B}for(E=r(S,E);!T.done;m++,T=k.next())T=x(E,S,m,T.value,O),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?m:T.key),w=s(T,w,m),U===null?B=T:U.sibling=T,U=T);return t&&E.forEach(function(R){return e(S,R)}),ye&&_r(S,m),B}function L(S,w,k,O){if(typeof k=="object"&&k!==null&&k.type===Jr&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Ho:e:{for(var B=k.key,U=w;U!==null;){if(U.key===B){if(B=k.type,B===Jr){if(U.tag===7){n(S,U.sibling),w=i(U,k.props.children),w.return=S,S=w;break e}}else if(U.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Vn&&Wp(B)===U.type){n(S,U.sibling),w=i(U,k.props),w.ref=cs(S,U,k),w.return=S,S=w;break e}n(S,U);break}else e(S,U);U=U.sibling}k.type===Jr?(w=kr(k.props.children,S.mode,O,k.key),w.return=S,S=w):(O=xa(k.type,k.key,k.props,null,S.mode,O),O.ref=cs(S,w,k),O.return=S,S=O)}return o(S);case Xr:e:{for(U=k.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){n(S,w.sibling),w=i(w,k.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else e(S,w);w=w.sibling}w=Ju(k,S.mode,O),w.return=S,S=w}return o(S);case Vn:return U=k._init,L(S,w,U(k._payload),O)}if(gs(k))return P(S,w,k,O);if(ss(k))return N(S,w,k,O);ta(S,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,w!==null&&w.tag===6?(n(S,w.sibling),w=i(w,k),w.return=S,S=w):(n(S,w),w=Xu(k,S.mode,O),w.return=S,S=w),o(S)):n(S,w)}return L}var Si=Ky(!0),Gy=Ky(!1),Qa=hr(null),Ya=null,oi=null,Jh=null;function Zh(){Jh=oi=Ya=null}function ed(t){var e=Qa.current;ge(Qa),t._currentValue=e}function Bc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function mi(t,e){Ya=t,Jh=oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ct=!0),t.firstContext=null)}function kt(t){var e=t._currentValue;if(Jh!==t)if(t={context:t,memoizedValue:e,next:null},oi===null){if(Ya===null)throw Error(F(308));oi=t,Ya.dependencies={lanes:0,firstContext:t}}else oi=oi.next=t;return e}var Ir=null;function td(t){Ir===null?Ir=[t]:Ir.push(t)}function Qy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,td(e)):(n.next=i.next,i.next=n),e.interleaved=n,yn(t,r)}function yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var On=!1;function nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,yn(t,n)}return i=r.interleaved,i===null?(e.next=e,td(r)):(e.next=i.next,i.next=e),r.interleaved=e,yn(t,n)}function wa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zh(t,n)}}function Kp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xa(t,e,n,r){var i=t.updateQueue;On=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,f=h=u=null,l=s;do{var v=l.lane,x=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(v=e,x=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){g=P.call(x,g,v);break e}g=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,v=typeof P=="function"?P.call(x,g,v):P,v==null)break e;g=Ee({},g,v);break e;case 2:On=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else x={eventTime:x,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=x,u=g):f=f.next=x,o|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Dr|=o,t.lanes=o,t.memoizedState=g}}function Gp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var fo={},qt=hr(fo),Gs=hr(fo),Qs=hr(fo);function Sr(t){if(t===fo)throw Error(F(174));return t}function rd(t,e){switch(de(Qs,e),de(Gs,t),de(qt,fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Tc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Tc(e,t)}ge(qt),de(qt,e)}function Ai(){ge(qt),ge(Gs),ge(Qs)}function Xy(t){Sr(Qs.current);var e=Sr(qt.current),n=Tc(e,t.type);e!==n&&(de(Gs,t),de(qt,n))}function id(t){Gs.current===t&&(ge(qt),ge(Gs))}var _e=hr(0);function Ja(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qu=[];function sd(){for(var t=0;t<qu.length;t++)qu[t]._workInProgressVersionPrimary=null;qu.length=0}var Ea=Sn.ReactCurrentDispatcher,Wu=Sn.ReactCurrentBatchConfig,Nr=0,we=null,Ce=null,Oe=null,Za=!1,ks=!1,Ys=0,DT=0;function Ke(){throw Error(F(321))}function od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ft(t[n],e[n]))return!1;return!0}function ad(t,e,n,r,i,s){if(Nr=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ea.current=t===null||t.memoizedState===null?LT:MT,t=n(r,i),ks){s=0;do{if(ks=!1,Ys=0,25<=s)throw Error(F(301));s+=1,Oe=Ce=null,e.updateQueue=null,Ea.current=jT,t=n(r,i)}while(ks)}if(Ea.current=el,e=Ce!==null&&Ce.next!==null,Nr=0,Oe=Ce=we=null,Za=!1,e)throw Error(F(300));return t}function ld(){var t=Ys!==0;return Ys=0,t}function Bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?we.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function Rt(){if(Ce===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var e=Oe===null?we.memoizedState:Oe.next;if(e!==null)Oe=e,Ce=t;else{if(t===null)throw Error(F(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Oe===null?we.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function Xs(t,e){return typeof e=="function"?e(t):e}function Ku(t){var e=Rt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Nr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,we.lanes|=f,Dr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Ft(r,e.memoizedState)||(ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,Dr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gu(t){var e=Rt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ft(s,e.memoizedState)||(ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Jy(){}function Zy(t,e){var n=we,r=Rt(),i=e(),s=!Ft(r.memoizedState,i);if(s&&(r.memoizedState=i,ct=!0),r=r.queue,ud(nv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Js(9,tv.bind(null,n,r,i,e),void 0,null),be===null)throw Error(F(349));Nr&30||ev(n,e,i)}return i}function ev(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tv(t,e,n,r){e.value=n,e.getSnapshot=r,rv(e)&&iv(t)}function nv(t,e,n){return n(function(){rv(e)&&iv(t)})}function rv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ft(t,n)}catch{return!0}}function iv(t){var e=yn(t,1);e!==null&&jt(e,t,1,-1)}function Qp(t){var e=Bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:t},e.queue=t,t=t.dispatch=bT.bind(null,we,t),[e.memoizedState,t]}function Js(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sv(){return Rt().memoizedState}function Ta(t,e,n,r){var i=Bt();we.flags|=t,i.memoizedState=Js(1|e,n,void 0,r===void 0?null:r)}function Nl(t,e,n,r){var i=Rt();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var o=Ce.memoizedState;if(s=o.destroy,r!==null&&od(r,o.deps)){i.memoizedState=Js(e,n,s,r);return}}we.flags|=t,i.memoizedState=Js(1|e,n,s,r)}function Yp(t,e){return Ta(8390656,8,t,e)}function ud(t,e){return Nl(2048,8,t,e)}function ov(t,e){return Nl(4,2,t,e)}function av(t,e){return Nl(4,4,t,e)}function lv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uv(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4,4,lv.bind(null,e,t),n)}function cd(){}function cv(t,e){var n=Rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&od(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function hv(t,e){var n=Rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&od(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dv(t,e,n){return Nr&21?(Ft(n,e)||(n=yy(),we.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=n)}function VT(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Wu.transition;Wu.transition={};try{t(!1),e()}finally{ue=n,Wu.transition=r}}function fv(){return Rt().memoizedState}function OT(t,e,n){var r=Yn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pv(t))mv(e,n);else if(n=Qy(t,e,n,r),n!==null){var i=it();jt(n,t,r,i),gv(n,e,r)}}function bT(t,e,n){var r=Yn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pv(t))mv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ft(l,o)){var u=e.interleaved;u===null?(i.next=i,td(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Qy(t,e,i,r),n!==null&&(i=it(),jt(n,t,r,i),gv(n,e,r))}}function pv(t){var e=t.alternate;return t===we||e!==null&&e===we}function mv(t,e){ks=Za=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zh(t,n)}}var el={readContext:kt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},LT={readContext:kt,useCallback:function(t,e){return Bt().memoizedState=[t,e===void 0?null:e],t},useContext:kt,useEffect:Yp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ta(4194308,4,lv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ta(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ta(4,2,t,e)},useMemo:function(t,e){var n=Bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=OT.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=Bt();return t={current:t},e.memoizedState=t},useState:Qp,useDebugValue:cd,useDeferredValue:function(t){return Bt().memoizedState=t},useTransition:function(){var t=Qp(!1),e=t[0];return t=VT.bind(null,t[1]),Bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=Bt();if(ye){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),be===null)throw Error(F(349));Nr&30||ev(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Yp(nv.bind(null,r,s,t),[t]),r.flags|=2048,Js(9,tv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Bt(),e=be.identifierPrefix;if(ye){var n=un,r=ln;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ys++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},MT={readContext:kt,useCallback:cv,useContext:kt,useEffect:ud,useImperativeHandle:uv,useInsertionEffect:ov,useLayoutEffect:av,useMemo:hv,useReducer:Ku,useRef:sv,useState:function(){return Ku(Xs)},useDebugValue:cd,useDeferredValue:function(t){var e=Rt();return dv(e,Ce.memoizedState,t)},useTransition:function(){var t=Ku(Xs)[0],e=Rt().memoizedState;return[t,e]},useMutableSource:Jy,useSyncExternalStore:Zy,useId:fv,unstable_isNewReconciler:!1},jT={readContext:kt,useCallback:cv,useContext:kt,useEffect:ud,useImperativeHandle:uv,useInsertionEffect:ov,useLayoutEffect:av,useMemo:hv,useReducer:Gu,useRef:sv,useState:function(){return Gu(Xs)},useDebugValue:cd,useDeferredValue:function(t){var e=Rt();return Ce===null?e.memoizedState=t:dv(e,Ce.memoizedState,t)},useTransition:function(){var t=Gu(Xs)[0],e=Rt().memoizedState;return[t,e]},useMutableSource:Jy,useSyncExternalStore:Zy,useId:fv,unstable_isNewReconciler:!1};function Dt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $c(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dl={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=it(),i=Yn(t),s=pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Gn(t,s,i),e!==null&&(jt(e,t,i,r),wa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=it(),i=Yn(t),s=pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gn(t,s,i),e!==null&&(jt(e,t,i,r),wa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=it(),r=Yn(t),i=pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Gn(t,i,r),e!==null&&(jt(e,t,r,n),wa(e,t,r))}};function Xp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Hs(n,r)||!Hs(i,s):!0}function yv(t,e,n){var r=!1,i=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=kt(s):(i=dt(e)?Cr:Ze.current,r=e.contextTypes,s=(r=r!=null)?Ti(t,i):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dl.enqueueReplaceState(e,e.state,null)}function Hc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},nd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=kt(s):(s=dt(e)?Cr:Ze.current,i.context=Ti(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($c(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dl.enqueueReplaceState(i,i.state,null),Xa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xi(t,e){try{var n="",r=e;do n+=dE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var FT=typeof WeakMap=="function"?WeakMap:Map;function vv(t,e,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){nl||(nl=!0,th=r),qc(t,e)},n}function _v(t,e,n){n=pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qc(t,e),typeof r!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new FT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ZT.bind(null,t,e,n),e.then(t,t))}function em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pn(-1,1),e.tag=2,Gn(n,e,1))),n.lanes|=1),t)}var UT=Sn.ReactCurrentOwner,ct=!1;function rt(t,e,n,r){e.child=t===null?Gy(e,null,n,r):Si(e,t.child,n,r)}function nm(t,e,n,r,i){n=n.render;var s=e.ref;return mi(e,i),r=ad(t,e,n,r,s,i),n=ld(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(ye&&n&&Qh(e),e.flags|=1,rt(t,e,r,i),e.child)}function rm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!vd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wv(t,e,s,r,i)):(t=xa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Hs,n(o,r)&&t.ref===e.ref)return vn(t,e,i)}return e.flags|=1,t=Xn(s,r),t.ref=e.ref,t.return=e,e.child=t}function wv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Hs(s,r)&&t.ref===e.ref)if(ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ct=!0);else return e.lanes=t.lanes,vn(t,e,i)}return Wc(t,e,n,r,i)}function Ev(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(li,mt),mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(li,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(li,mt),mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(li,mt),mt|=r;return rt(t,e,i,n),e.child}function Tv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wc(t,e,n,r,i){var s=dt(n)?Cr:Ze.current;return s=Ti(e,s),mi(e,i),n=ad(t,e,n,r,s,i),r=ld(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(ye&&r&&Qh(e),e.flags|=1,rt(t,e,n,i),e.child)}function im(t,e,n,r,i){if(dt(n)){var s=!0;Wa(e)}else s=!1;if(mi(e,i),e.stateNode===null)Ia(t,e),yv(e,n,r),Hc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=kt(h):(h=dt(n)?Cr:Ze.current,h=Ti(e,h));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Jp(e,o,r,h),On=!1;var v=e.memoizedState;o.state=v,Xa(e,r,o,i),u=e.memoizedState,l!==r||v!==u||ht.current||On?(typeof f=="function"&&($c(e,n,f,r),u=e.memoizedState),(l=On||Xp(e,n,l,r,v,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Yy(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Dt(e.type,l),o.props=h,g=e.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=kt(u):(u=dt(n)?Cr:Ze.current,u=Ti(e,u));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||v!==u)&&Jp(e,o,r,u),On=!1,v=e.memoizedState,o.state=v,Xa(e,r,o,i);var P=e.memoizedState;l!==g||v!==P||ht.current||On?(typeof x=="function"&&($c(e,n,x,r),P=e.memoizedState),(h=On||Xp(e,n,h,r,v,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return Kc(t,e,n,r,s,i)}function Kc(t,e,n,r,i,s){Tv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$p(e,n,!1),vn(t,e,s);r=e.stateNode,UT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Si(e,t.child,null,s),e.child=Si(e,null,l,s)):rt(t,e,l,s),e.memoizedState=r.state,i&&$p(e,n,!0),e.child}function Iv(t){var e=t.stateNode;e.pendingContext?Bp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bp(t,e.context,!1),rd(t,e.containerInfo)}function sm(t,e,n,r,i){return Ii(),Xh(i),e.flags|=256,rt(t,e,n,r),e.child}var Gc={dehydrated:null,treeContext:null,retryLane:0};function Qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sv(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(_e,i&1),t===null)return zc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bl(o,r,0,null),t=kr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qc(n),e.memoizedState=Gc,t):hd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return zT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Xn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Xn(l,s):(s=kr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gc,r}return s=t.child,t=s.sibling,r=Xn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hd(t,e){return e=bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function na(t,e,n,r){return r!==null&&Xh(r),Si(e,t.child,null,n),t=hd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Qu(Error(F(422))),na(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bl({mode:"visible",children:r.children},i,0,null),s=kr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Si(e,t.child,null,o),e.child.memoizedState=Qc(o),e.memoizedState=Gc,s);if(!(e.mode&1))return na(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Qu(s,r,void 0),na(t,e,o,r)}if(l=(o&t.childLanes)!==0,ct||l){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yn(t,i),jt(r,t,i,-1))}return yd(),r=Qu(Error(F(421))),na(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=eI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gt=Kn(i.nextSibling),yt=e,ye=!0,Ot=null,t!==null&&(Et[Tt++]=ln,Et[Tt++]=un,Et[Tt++]=Pr,ln=t.id,un=t.overflow,Pr=e),e=hd(e,r.children),e.flags|=4096,e)}function om(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bc(t.return,e,n)}function Yu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Av(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(rt(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&om(t,n,e);else if(t.tag===19)om(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ja(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ja(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yu(e,!0,n,null,s);break;case"together":Yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ia(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Xn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BT(t,e,n){switch(e.tag){case 3:Iv(e),Ii();break;case 5:Xy(e);break;case 1:dt(e.type)&&Wa(e);break;case 4:rd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Qa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?Sv(t,e,n):(de(_e,_e.current&1),t=vn(t,e,n),t!==null?t.sibling:null);de(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Av(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,Ev(t,e,n)}return vn(t,e,n)}var xv,Yc,kv,Rv;xv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yc=function(){};kv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Sr(qt.current);var s=null;switch(n){case"input":i=vc(t,i),r=vc(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Ec(t,i),r=Ec(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ha)}Ic(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ms.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ms.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Rv=function(t,e,n,r){n!==r&&(e.flags|=4)};function hs(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $T(t,e,n){var r=e.pendingProps;switch(Yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return dt(e.type)&&qa(),Ge(e),null;case 3:return r=e.stateNode,Ai(),ge(ht),ge(Ze),sd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ea(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ot!==null&&(ih(Ot),Ot=null))),Yc(t,e),Ge(e),null;case 5:id(e);var i=Sr(Qs.current);if(n=e.type,t!==null&&e.stateNode!=null)kv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Ge(e),null}if(t=Sr(qt.current),ea(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[$t]=e,r[Ks]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<vs.length;i++)me(vs[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":mp(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":yp(r,s),me("invalid",r)}Ic(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Zo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Zo(r.textContent,l,t),i=["children",""+l]):Ms.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":qo(r),gp(r,s,!0);break;case"textarea":qo(r),vp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ha)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ny(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$t]=e,t[Ks]=r,xv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sc(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<vs.length;i++)me(vs[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":mp(t,r),i=vc(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),me("invalid",t);break;case"textarea":yp(t,r),i=Ec(t,r),me("invalid",t);break;default:i=r}Ic(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?sy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ry(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&js(t,u):typeof u=="number"&&js(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ms.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&bh(t,s,u,o))}switch(n){case"input":qo(t),gp(t,r,!1);break;case"textarea":qo(t),vp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hi(t,!!r.multiple,s,!1):r.defaultValue!=null&&hi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ha)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)Rv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Sr(Qs.current),Sr(qt.current),ea(e)){if(r=e.stateNode,n=e.memoizedProps,r[$t]=e,(s=r.nodeValue!==n)&&(t=yt,t!==null))switch(t.tag){case 3:Zo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=e,e.stateNode=r}return Ge(e),null;case 13:if(ge(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&gt!==null&&e.mode&1&&!(e.flags&128))Wy(),Ii(),e.flags|=98560,s=!1;else if(s=ea(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[$t]=e}else Ii(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else Ot!==null&&(ih(Ot),Ot=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Ne===0&&(Ne=3):yd())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return Ai(),Yc(t,e),t===null&&qs(e.stateNode.containerInfo),Ge(e),null;case 10:return ed(e.type._context),Ge(e),null;case 17:return dt(e.type)&&qa(),Ge(e),null;case 19:if(ge(_e),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)hs(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ja(t),o!==null){for(e.flags|=128,hs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>ki&&(e.flags|=128,r=!0,hs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ja(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Ge(e),null}else 2*xe()-s.renderingStartTime>ki&&n!==1073741824&&(e.flags|=128,r=!0,hs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,n=_e.current,de(_e,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return gd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mt&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function HT(t,e){switch(Yh(e),e.tag){case 1:return dt(e.type)&&qa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ai(),ge(ht),ge(Ze),sd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return id(e),null;case 13:if(ge(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ii()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(_e),null;case 4:return Ai(),null;case 10:return ed(e.type._context),null;case 22:case 23:return gd(),null;case 24:return null;default:return null}}var ra=!1,Xe=!1,qT=typeof WeakSet=="function"?WeakSet:Set,H=null;function ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function Xc(t,e,n){try{n()}catch(r){Se(t,e,r)}}var am=!1;function WT(t,e){if(Oc=za,t=Vy(),Gh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,g=t,v=null;t:for(;;){for(var x;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(x=g.firstChild)!==null;)v=g,g=x;for(;;){if(g===t)break t;if(v===n&&++h===i&&(l=o),v===s&&++f===r&&(u=o),(x=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(bc={focusedElem:t,selectionRange:n},za=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,L=P.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:Dt(e.type,N),L);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(O){Se(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return P=am,am=!1,P}function Rs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xc(e,n,s)}i=i.next}while(i!==r)}}function Vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Jc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cv(t){var e=t.alternate;e!==null&&(t.alternate=null,Cv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$t],delete e[Ks],delete e[jc],delete e[RT],delete e[CT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Pv(t){return t.tag===5||t.tag===3||t.tag===4}function lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Pv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ha));else if(r!==4&&(t=t.child,t!==null))for(Zc(t,e,n),t=t.sibling;t!==null;)Zc(t,e,n),t=t.sibling}function eh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(eh(t,e,n),t=t.sibling;t!==null;)eh(t,e,n),t=t.sibling}var Me=null,Vt=!1;function Cn(t,e,n){for(n=n.child;n!==null;)Nv(t,e,n),n=n.sibling}function Nv(t,e,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:Xe||ai(n,e);case 6:var r=Me,i=Vt;Me=null,Cn(t,e,n),Me=r,Vt=i,Me!==null&&(Vt?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Vt?(t=Me,n=n.stateNode,t.nodeType===8?$u(t.parentNode,n):t.nodeType===1&&$u(t,n),Bs(t)):$u(Me,n.stateNode));break;case 4:r=Me,i=Vt,Me=n.stateNode.containerInfo,Vt=!0,Cn(t,e,n),Me=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xc(n,e,o),i=i.next}while(i!==r)}Cn(t,e,n);break;case 1:if(!Xe&&(ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}Cn(t,e,n);break;case 21:Cn(t,e,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,Cn(t,e,n),Xe=r):Cn(t,e,n);break;default:Cn(t,e,n)}}function um(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qT),e.forEach(function(r){var i=tI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,Vt=!1;break e;case 3:Me=l.stateNode.containerInfo,Vt=!0;break e;case 4:Me=l.stateNode.containerInfo,Vt=!0;break e}l=l.return}if(Me===null)throw Error(F(160));Nv(s,o,i),Me=null,Vt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Se(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dv(e,t),e=e.sibling}function Dv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nt(e,t),zt(t),r&4){try{Rs(3,t,t.return),Vl(3,t)}catch(N){Se(t,t.return,N)}try{Rs(5,t,t.return)}catch(N){Se(t,t.return,N)}}break;case 1:Nt(e,t),zt(t),r&512&&n!==null&&ai(n,n.return);break;case 5:if(Nt(e,t),zt(t),r&512&&n!==null&&ai(n,n.return),t.flags&32){var i=t.stateNode;try{js(i,"")}catch(N){Se(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ey(i,s),Sc(l,o);var h=Sc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?sy(i,g):f==="dangerouslySetInnerHTML"?ry(i,g):f==="children"?js(i,g):bh(i,f,g,h)}switch(l){case"input":_c(i,s);break;case"textarea":ty(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?hi(i,!!s.multiple,x,!1):v!==!!s.multiple&&(s.defaultValue!=null?hi(i,!!s.multiple,s.defaultValue,!0):hi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ks]=s}catch(N){Se(t,t.return,N)}}break;case 6:if(Nt(e,t),zt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Se(t,t.return,N)}}break;case 3:if(Nt(e,t),zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bs(e.containerInfo)}catch(N){Se(t,t.return,N)}break;case 4:Nt(e,t),zt(t);break;case 13:Nt(e,t),zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pd=xe())),r&4&&um(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(h=Xe)||f,Nt(e,t),Xe=h):Nt(e,t),zt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(g=H=f;H!==null;){switch(v=H,x=v.child,v.tag){case 0:case 11:case 14:case 15:Rs(4,v,v.return);break;case 1:ai(v,v.return);var P=v.stateNode;if(typeof P.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){Se(r,n,N)}}break;case 5:ai(v,v.return);break;case 22:if(v.memoizedState!==null){hm(g);continue}}x!==null?(x.return=v,H=x):hm(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=iy("display",o))}catch(N){Se(t,t.return,N)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(N){Se(t,t.return,N)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Nt(e,t),zt(t),r&4&&um(t);break;case 21:break;default:Nt(e,t),zt(t)}}function zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Pv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(js(i,""),r.flags&=-33);var s=lm(t);eh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=lm(t);Zc(t,l,o);break;default:throw Error(F(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function KT(t,e,n){H=t,Vv(t)}function Vv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ra;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Xe;l=ra;var h=Xe;if(ra=o,(Xe=u)&&!h)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?dm(i):u!==null?(u.return=o,H=u):dm(i);for(;s!==null;)H=s,Vv(s),s=s.sibling;H=i,ra=l,Xe=h}cm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):cm(t)}}function cm(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||Vl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Dt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gp(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Bs(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Xe||e.flags&512&&Jc(e)}catch(v){Se(e,e.return,v)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function hm(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function dm(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vl(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Se(e,i,u)}}var s=e.return;try{Jc(e)}catch(u){Se(e,s,u)}break;case 5:var o=e.return;try{Jc(e)}catch(u){Se(e,o,u)}}}catch(u){Se(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var GT=Math.ceil,tl=Sn.ReactCurrentDispatcher,dd=Sn.ReactCurrentOwner,At=Sn.ReactCurrentBatchConfig,oe=0,be=null,Re=null,Ue=0,mt=0,li=hr(0),Ne=0,Zs=null,Dr=0,Ol=0,fd=0,Cs=null,ut=null,pd=0,ki=1/0,on=null,nl=!1,th=null,Qn=null,ia=!1,Bn=null,rl=0,Ps=0,nh=null,Sa=-1,Aa=0;function it(){return oe&6?xe():Sa!==-1?Sa:Sa=xe()}function Yn(t){return t.mode&1?oe&2&&Ue!==0?Ue&-Ue:NT.transition!==null?(Aa===0&&(Aa=yy()),Aa):(t=ue,t!==0||(t=window.event,t=t===void 0?16:Sy(t.type)),t):1}function jt(t,e,n,r){if(50<Ps)throw Ps=0,nh=null,Error(F(185));uo(t,n,r),(!(oe&2)||t!==be)&&(t===be&&(!(oe&2)&&(Ol|=n),Ne===4&&Ln(t,Ue)),ft(t,r),n===1&&oe===0&&!(e.mode&1)&&(ki=xe()+500,Pl&&dr()))}function ft(t,e){var n=t.callbackNode;NE(t,e);var r=Ua(t,t===be?Ue:0);if(r===0)n!==null&&Ep(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ep(n),e===1)t.tag===0?PT(fm.bind(null,t)):$y(fm.bind(null,t)),xT(function(){!(oe&6)&&dr()}),n=null;else{switch(vy(r)){case 1:n=Uh;break;case 4:n=my;break;case 16:n=Fa;break;case 536870912:n=gy;break;default:n=Fa}n=zv(n,Ov.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ov(t,e){if(Sa=-1,Aa=0,oe&6)throw Error(F(327));var n=t.callbackNode;if(gi()&&t.callbackNode!==n)return null;var r=Ua(t,t===be?Ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=il(t,r);else{e=r;var i=oe;oe|=2;var s=Lv();(be!==t||Ue!==e)&&(on=null,ki=xe()+500,xr(t,e));do try{XT();break}catch(l){bv(t,l)}while(!0);Zh(),tl.current=s,oe=i,Re!==null?e=0:(be=null,Ue=0,e=Ne)}if(e!==0){if(e===2&&(i=Cc(t),i!==0&&(r=i,e=rh(t,i))),e===1)throw n=Zs,xr(t,0),Ln(t,r),ft(t,xe()),n;if(e===6)Ln(t,r);else{if(i=t.current.alternate,!(r&30)&&!QT(i)&&(e=il(t,r),e===2&&(s=Cc(t),s!==0&&(r=s,e=rh(t,s))),e===1))throw n=Zs,xr(t,0),Ln(t,r),ft(t,xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:wr(t,ut,on);break;case 3:if(Ln(t,r),(r&130023424)===r&&(e=pd+500-xe(),10<e)){if(Ua(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){it(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Mc(wr.bind(null,t,ut,on),e);break}wr(t,ut,on);break;case 4:if(Ln(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Mt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*GT(r/1960))-r,10<r){t.timeoutHandle=Mc(wr.bind(null,t,ut,on),r);break}wr(t,ut,on);break;case 5:wr(t,ut,on);break;default:throw Error(F(329))}}}return ft(t,xe()),t.callbackNode===n?Ov.bind(null,t):null}function rh(t,e){var n=Cs;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=il(t,e),t!==2&&(e=ut,ut=n,e!==null&&ih(e)),t}function ih(t){ut===null?ut=t:ut.push.apply(ut,t)}function QT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ln(t,e){for(e&=~fd,e&=~Ol,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mt(e),r=1<<n;t[n]=-1,e&=~r}}function fm(t){if(oe&6)throw Error(F(327));gi();var e=Ua(t,0);if(!(e&1))return ft(t,xe()),null;var n=il(t,e);if(t.tag!==0&&n===2){var r=Cc(t);r!==0&&(e=r,n=rh(t,r))}if(n===1)throw n=Zs,xr(t,0),Ln(t,e),ft(t,xe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,ut,on),ft(t,xe()),null}function md(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(ki=xe()+500,Pl&&dr())}}function Vr(t){Bn!==null&&Bn.tag===0&&!(oe&6)&&gi();var e=oe;oe|=1;var n=At.transition,r=ue;try{if(At.transition=null,ue=1,t)return t()}finally{ue=r,At.transition=n,oe=e,!(oe&6)&&dr()}}function gd(){mt=li.current,ge(li)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,AT(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Yh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qa();break;case 3:Ai(),ge(ht),ge(Ze),sd();break;case 5:id(r);break;case 4:Ai();break;case 13:ge(_e);break;case 19:ge(_e);break;case 10:ed(r.type._context);break;case 22:case 23:gd()}n=n.return}if(be=t,Re=t=Xn(t.current,null),Ue=mt=e,Ne=0,Zs=null,fd=Ol=Dr=0,ut=Cs=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ir=null}return t}function bv(t,e){do{var n=Re;try{if(Zh(),Ea.current=el,Za){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Za=!1}if(Nr=0,Oe=Ce=we=null,ks=!1,Ys=0,dd.current=null,n===null||n.return===null){Ne=1,Zs=e,Re=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ue,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=em(o);if(x!==null){x.flags&=-257,tm(x,o,l,s,e),x.mode&1&&Zp(s,h,e),e=x,u=h;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){Zp(s,h,e),yd();break e}u=Error(F(426))}}else if(ye&&l.mode&1){var L=em(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),tm(L,o,l,s,e),Xh(xi(u,l));break e}}s=u=xi(u,l),Ne!==4&&(Ne=2),Cs===null?Cs=[s]:Cs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=vv(s,u,e);Kp(s,S);break e;case 1:l=u;var w=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Qn===null||!Qn.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=_v(s,l,e);Kp(s,O);break e}}s=s.return}while(s!==null)}jv(n)}catch(B){e=B,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Lv(){var t=tl.current;return tl.current=el,t===null?el:t}function yd(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),be===null||!(Dr&268435455)&&!(Ol&268435455)||Ln(be,Ue)}function il(t,e){var n=oe;oe|=2;var r=Lv();(be!==t||Ue!==e)&&(on=null,xr(t,e));do try{YT();break}catch(i){bv(t,i)}while(!0);if(Zh(),oe=n,tl.current=r,Re!==null)throw Error(F(261));return be=null,Ue=0,Ne}function YT(){for(;Re!==null;)Mv(Re)}function XT(){for(;Re!==null&&!TE();)Mv(Re)}function Mv(t){var e=Uv(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?jv(t):Re=e,dd.current=null}function jv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HT(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,Re=null;return}}else if(n=$T(n,e,mt),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);Ne===0&&(Ne=5)}function wr(t,e,n){var r=ue,i=At.transition;try{At.transition=null,ue=1,JT(t,e,n,r)}finally{At.transition=i,ue=r}return null}function JT(t,e,n,r){do gi();while(Bn!==null);if(oe&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(DE(t,s),t===be&&(Re=be=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ia||(ia=!0,zv(Fa,function(){return gi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=At.transition,At.transition=null;var o=ue;ue=1;var l=oe;oe|=4,dd.current=null,WT(t,n),Dv(n,t),vT(bc),za=!!Oc,bc=Oc=null,t.current=n,KT(n),IE(),oe=l,ue=o,At.transition=s}else t.current=n;if(ia&&(ia=!1,Bn=t,rl=i),s=t.pendingLanes,s===0&&(Qn=null),xE(n.stateNode),ft(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nl)throw nl=!1,t=th,th=null,t;return rl&1&&t.tag!==0&&gi(),s=t.pendingLanes,s&1?t===nh?Ps++:(Ps=0,nh=t):Ps=0,dr(),null}function gi(){if(Bn!==null){var t=vy(rl),e=At.transition,n=ue;try{if(At.transition=null,ue=16>t?16:t,Bn===null)var r=!1;else{if(t=Bn,Bn=null,rl=0,oe&6)throw Error(F(331));var i=oe;for(oe|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Rs(8,f,s)}var g=f.child;if(g!==null)g.return=f,H=g;else for(;H!==null;){f=H;var v=f.sibling,x=f.return;if(Cv(f),f===h){H=null;break}if(v!==null){v.return=x,H=v;break}H=x}}}var P=s.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var L=N.sibling;N.sibling=null,N=L}while(N!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Rs(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,H=S;break e}H=s.return}}var w=t.current;for(H=w;H!==null;){o=H;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,H=k;else e:for(o=w;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Vl(9,l)}}catch(B){Se(l,l.return,B)}if(l===o){H=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,H=O;break e}H=l.return}}if(oe=i,dr(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Al,t)}catch{}r=!0}return r}finally{ue=n,At.transition=e}}return!1}function pm(t,e,n){e=xi(n,e),e=vv(t,e,1),t=Gn(t,e,1),e=it(),t!==null&&(uo(t,1,e),ft(t,e))}function Se(t,e,n){if(t.tag===3)pm(t,t,n);else for(;e!==null;){if(e.tag===3){pm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){t=xi(n,t),t=_v(e,t,1),e=Gn(e,t,1),t=it(),e!==null&&(uo(e,1,t),ft(e,t));break}}e=e.return}}function ZT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=it(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(Ue&n)===n&&(Ne===4||Ne===3&&(Ue&130023424)===Ue&&500>xe()-pd?xr(t,0):fd|=n),ft(t,e)}function Fv(t,e){e===0&&(t.mode&1?(e=Go,Go<<=1,!(Go&130023424)&&(Go=4194304)):e=1);var n=it();t=yn(t,e),t!==null&&(uo(t,e,n),ft(t,n))}function eI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fv(t,n)}function tI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Fv(t,n)}var Uv;Uv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ht.current)ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ct=!1,BT(t,e,n);ct=!!(t.flags&131072)}else ct=!1,ye&&e.flags&1048576&&Hy(e,Ga,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ia(t,e),t=e.pendingProps;var i=Ti(e,Ze.current);mi(e,n),i=ad(null,e,r,t,i,n);var s=ld();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dt(r)?(s=!0,Wa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nd(e),i.updater=Dl,e.stateNode=i,i._reactInternals=e,Hc(e,r,t,n),e=Kc(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&Qh(e),rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ia(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rI(r),t=Dt(r,t),i){case 0:e=Wc(null,e,r,t,n);break e;case 1:e=im(null,e,r,t,n);break e;case 11:e=nm(null,e,r,t,n);break e;case 14:e=rm(null,e,r,Dt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),Wc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),im(t,e,r,i,n);case 3:e:{if(Iv(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Yy(t,e),Xa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=xi(Error(F(423)),e),e=sm(t,e,r,n,i);break e}else if(r!==i){i=xi(Error(F(424)),e),e=sm(t,e,r,n,i);break e}else for(gt=Kn(e.stateNode.containerInfo.firstChild),yt=e,ye=!0,Ot=null,n=Gy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ii(),r===i){e=vn(t,e,n);break e}rt(t,e,r,n)}e=e.child}return e;case 5:return Xy(e),t===null&&zc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Lc(r,i)?o=null:s!==null&&Lc(r,s)&&(e.flags|=32),Tv(t,e),rt(t,e,o,n),e.child;case 6:return t===null&&zc(e),null;case 13:return Sv(t,e,n);case 4:return rd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Si(e,null,r,n):rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),nm(t,e,r,i,n);case 7:return rt(t,e,e.pendingProps,n),e.child;case 8:return rt(t,e,e.pendingProps.children,n),e.child;case 12:return rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(Qa,r._currentValue),r._currentValue=o,s!==null)if(Ft(s.value,o)){if(s.children===i.children&&!ht.current){e=vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=pn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Bc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Bc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,mi(e,n),i=kt(i),r=r(i),e.flags|=1,rt(t,e,r,n),e.child;case 14:return r=e.type,i=Dt(r,e.pendingProps),i=Dt(r.type,i),rm(t,e,r,i,n);case 15:return wv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),Ia(t,e),e.tag=1,dt(r)?(t=!0,Wa(e)):t=!1,mi(e,n),yv(e,r,i),Hc(e,r,i,n),Kc(null,e,r,!0,t,n);case 19:return Av(t,e,n);case 22:return Ev(t,e,n)}throw Error(F(156,e.tag))};function zv(t,e){return py(t,e)}function nI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(t,e,n,r){return new nI(t,e,n,r)}function vd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rI(t){if(typeof t=="function")return vd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mh)return 11;if(t===jh)return 14}return 2}function Xn(t,e){var n=t.alternate;return n===null?(n=St(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")vd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Jr:return kr(n.children,i,s,e);case Lh:o=8,i|=8;break;case pc:return t=St(12,n,e,i|2),t.elementType=pc,t.lanes=s,t;case mc:return t=St(13,n,e,i),t.elementType=mc,t.lanes=s,t;case gc:return t=St(19,n,e,i),t.elementType=gc,t.lanes=s,t;case Xg:return bl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qg:o=10;break e;case Yg:o=9;break e;case Mh:o=11;break e;case jh:o=14;break e;case Vn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=St(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function kr(t,e,n,r){return t=St(7,t,r,e),t.lanes=n,t}function bl(t,e,n,r){return t=St(22,t,r,e),t.elementType=Xg,t.lanes=n,t.stateNode={isHidden:!1},t}function Xu(t,e,n){return t=St(6,t,null,e),t.lanes=n,t}function Ju(t,e,n){return e=St(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Du(0),this.expirationTimes=Du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _d(t,e,n,r,i,s,o,l,u){return t=new iI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=St(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nd(s),t}function sI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Bv(t){if(!t)return sr;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(dt(n))return By(t,n,e)}return e}function $v(t,e,n,r,i,s,o,l,u){return t=_d(n,r,!0,t,i,s,o,l,u),t.context=Bv(null),n=t.current,r=it(),i=Yn(n),s=pn(r,i),s.callback=e??null,Gn(n,s,i),t.current.lanes=i,uo(t,i,r),ft(t,r),t}function Ll(t,e,n,r){var i=e.current,s=it(),o=Yn(i);return n=Bv(n),e.context===null?e.context=n:e.pendingContext=n,e=pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Gn(i,e,o),t!==null&&(jt(t,i,o,s),wa(t,i,o)),o}function sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wd(t,e){mm(t,e),(t=t.alternate)&&mm(t,e)}function oI(){return null}var Hv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ed(t){this._internalRoot=t}Ml.prototype.render=Ed.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Ll(t,e,null,null)};Ml.prototype.unmount=Ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){Ll(null,t,null,null)}),e[gn]=null}};function Ml(t){this._internalRoot=t}Ml.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ey();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bn.length&&e!==0&&e<bn[n].priority;n++);bn.splice(n,0,t),n===0&&Iy(t)}};function Td(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gm(){}function aI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=sl(o);s.call(h)}}var o=$v(e,r,t,0,null,!1,!1,"",gm);return t._reactRootContainer=o,t[gn]=o.current,qs(t.nodeType===8?t.parentNode:t),Vr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=sl(u);l.call(h)}}var u=_d(t,0,!1,null,null,!1,!1,"",gm);return t._reactRootContainer=u,t[gn]=u.current,qs(t.nodeType===8?t.parentNode:t),Vr(function(){Ll(e,u,n,r)}),u}function Fl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=sl(o);l.call(u)}}Ll(e,o,t,i)}else o=aI(n,e,t,i,r);return sl(o)}_y=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ys(e.pendingLanes);n!==0&&(zh(e,n|1),ft(e,xe()),!(oe&6)&&(ki=xe()+500,dr()))}break;case 13:Vr(function(){var r=yn(t,1);if(r!==null){var i=it();jt(r,t,1,i)}}),wd(t,1)}};Bh=function(t){if(t.tag===13){var e=yn(t,134217728);if(e!==null){var n=it();jt(e,t,134217728,n)}wd(t,134217728)}};wy=function(t){if(t.tag===13){var e=Yn(t),n=yn(t,e);if(n!==null){var r=it();jt(n,t,e,r)}wd(t,e)}};Ey=function(){return ue};Ty=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};xc=function(t,e,n){switch(e){case"input":if(_c(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cl(r);if(!i)throw Error(F(90));Zg(r),_c(r,i)}}}break;case"textarea":ty(t,n);break;case"select":e=n.value,e!=null&&hi(t,!!n.multiple,e,!1)}};ly=md;uy=Vr;var lI={usingClientEntryPoint:!1,Events:[ho,ni,Cl,oy,ay,md]},ds={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uI={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dy(t),t===null?null:t.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance||oI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sa.isDisabled&&sa.supportsFiber)try{Al=sa.inject(uI),Ht=sa}catch{}}_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lI;_t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Td(e))throw Error(F(200));return sI(t,e,null,n)};_t.createRoot=function(t,e){if(!Td(t))throw Error(F(299));var n=!1,r="",i=Hv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_d(t,1,!1,null,null,n,!1,r,i),t[gn]=e.current,qs(t.nodeType===8?t.parentNode:t),new Ed(e)};_t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=dy(e),t=t===null?null:t.stateNode,t};_t.flushSync=function(t){return Vr(t)};_t.hydrate=function(t,e,n){if(!jl(e))throw Error(F(200));return Fl(null,t,e,!0,n)};_t.hydrateRoot=function(t,e,n){if(!Td(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Hv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$v(e,null,t,1,n??null,i,!1,s,o),t[gn]=e.current,qs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ml(e)};_t.render=function(t,e,n){if(!jl(e))throw Error(F(200));return Fl(null,t,e,!1,n)};_t.unmountComponentAtNode=function(t){if(!jl(t))throw Error(F(40));return t._reactRootContainer?(Vr(function(){Fl(null,null,t,!1,function(){t._reactRootContainer=null,t[gn]=null})}),!0):!1};_t.unstable_batchedUpdates=md;_t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!jl(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Fl(t,e,n,!1,r)};_t.version="18.3.1-next-f1338f8080-20240426";function qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qv)}catch(t){console.error(t)}}qv(),qg.exports=_t;var cI=qg.exports,ym=cI;dc.createRoot=ym.createRoot,dc.hydrateRoot=ym.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wv=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fI=ne.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>ne.createElement("svg",{ref:u,...dI,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Wv("lucide",i),...l},[...o.map(([h,f])=>ne.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=(t,e)=>{const n=ne.forwardRef(({className:r,...i},s)=>ne.createElement(fI,{ref:s,iconNode:e,className:Wv(`lucide-${hI(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=at("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=at("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pI=at("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=at("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mI=at("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gI=at("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yI=at("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vI=at("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=at("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _I=at("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wI=at("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EI=at("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=at("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TI=at("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=at("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var wm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},II=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Yv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let v=(l&15)<<2|h>>6,x=h&63;u||(x=64,o||(v=64)),r.push(n[f],n[g],n[v],n[x])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):II(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new SI;const v=s<<2|l>>4;if(r.push(v),h!==64){const x=l<<4&240|h>>2;if(r.push(x),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AI=function(t){const e=Qv(t);return Yv.encodeByteArray(e,!0)},ol=function(t){return AI(t).replace(/\./g,"")},Xv=function(t){try{return Yv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=()=>xI().__FIREBASE_DEFAULTS__,RI=()=>{if(typeof process>"u"||typeof wm>"u")return;const t=wm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xv(t[1]);return e&&JSON.parse(e)},Ul=()=>{try{return kI()||RI()||CI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jv=t=>{var e,n;return(n=(e=Ul())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},PI=t=>{const e=Jv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Zv=()=>{var t;return(t=Ul())===null||t===void 0?void 0:t.config},e_=t=>{var e;return(e=Ul())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ol(JSON.stringify(n)),ol(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function OI(){var t;const e=(t=Ul())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function LI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function MI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jI(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FI(){return!OI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function UI(){try{return typeof indexedDB=="object"}catch{return!1}}function zI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BI,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,po.prototype.create)}}class po{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$I(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new An(i,l,r)}}function $I(t,e){return t.replace(HI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const HI=/\{\$([^}]+)}/g;function qI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function al(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Em(s)&&Em(o)){if(!al(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Em(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function WI(t,e){const n=new KI(t,e);return n.subscribe.bind(n)}class KI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zu),i.error===void 0&&(i.error=Zu),i.complete===void 0&&(i.complete=Zu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){return t&&t._delegate?t._delegate:t}class Or{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XI(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YI(t){return t===Er?void 0:t}function XI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const ZI={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},eS=ie.INFO,tS={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},nS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sd{constructor(e){this.name=e,this._logLevel=eS,this._logHandler=nS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const rS=(t,e)=>e.some(n=>t instanceof n);let Tm,Im;function iS(){return Tm||(Tm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sS(){return Im||(Im=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t_=new WeakMap,sh=new WeakMap,n_=new WeakMap,ec=new WeakMap,Ad=new WeakMap;function oS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&t_.set(n,t)}).catch(()=>{}),Ad.set(e,t),e}function aS(t){if(sh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sh.set(t,e)}let oh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||n_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lS(t){oh=t(oh)}function uS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tc(this),e,...n);return n_.set(r,e.sort?e.sort():[e]),Jn(r)}:sS().includes(t)?function(...e){return t.apply(tc(this),e),Jn(t_.get(this))}:function(...e){return Jn(t.apply(tc(this),e))}}function cS(t){return typeof t=="function"?uS(t):(t instanceof IDBTransaction&&aS(t),rS(t,iS())?new Proxy(t,oh):t)}function Jn(t){if(t instanceof IDBRequest)return oS(t);if(ec.has(t))return ec.get(t);const e=cS(t);return e!==t&&(ec.set(t,e),Ad.set(e,t)),e}const tc=t=>Ad.get(t);function hS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Jn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Jn(o.result),u.oldVersion,u.newVersion,Jn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const dS=["get","getKey","getAll","getAllKeys","count"],fS=["put","add","delete","clear"],nc=new Map;function Sm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nc.get(e))return nc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return nc.set(e,s),s}lS(t=>({...t,get:(e,n,r)=>Sm(e,n)||t.get(e,n,r),has:(e,n)=>!!Sm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ah="@firebase/app",Am="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Sd("@firebase/app"),gS="@firebase/app-compat",yS="@firebase/analytics-compat",vS="@firebase/analytics",_S="@firebase/app-check-compat",wS="@firebase/app-check",ES="@firebase/auth",TS="@firebase/auth-compat",IS="@firebase/database",SS="@firebase/data-connect",AS="@firebase/database-compat",xS="@firebase/functions",kS="@firebase/functions-compat",RS="@firebase/installations",CS="@firebase/installations-compat",PS="@firebase/messaging",NS="@firebase/messaging-compat",DS="@firebase/performance",VS="@firebase/performance-compat",OS="@firebase/remote-config",bS="@firebase/remote-config-compat",LS="@firebase/storage",MS="@firebase/storage-compat",jS="@firebase/firestore",FS="@firebase/vertexai-preview",US="@firebase/firestore-compat",zS="firebase",BS="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="[DEFAULT]",$S={[ah]:"fire-core",[gS]:"fire-core-compat",[vS]:"fire-analytics",[yS]:"fire-analytics-compat",[wS]:"fire-app-check",[_S]:"fire-app-check-compat",[ES]:"fire-auth",[TS]:"fire-auth-compat",[IS]:"fire-rtdb",[SS]:"fire-data-connect",[AS]:"fire-rtdb-compat",[xS]:"fire-fn",[kS]:"fire-fn-compat",[RS]:"fire-iid",[CS]:"fire-iid-compat",[PS]:"fire-fcm",[NS]:"fire-fcm-compat",[DS]:"fire-perf",[VS]:"fire-perf-compat",[OS]:"fire-rc",[bS]:"fire-rc-compat",[LS]:"fire-gcs",[MS]:"fire-gcs-compat",[jS]:"fire-fst",[US]:"fire-fst-compat",[FS]:"fire-vertex","fire-js":"fire-js",[zS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=new Map,HS=new Map,uh=new Map;function xm(t,e){try{t.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ri(t){const e=t.name;if(uh.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;uh.set(e,t);for(const n of ll.values())xm(n,t);for(const n of HS.values())xm(n,t);return!0}function xd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new po("app","Firebase",qS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=BS;function r_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Zn.create("bad-app-name",{appName:String(i)});if(n||(n=Zv()),!n)throw Zn.create("no-options");const s=ll.get(i);if(s){if(al(n,s.options)&&al(r,s.config))return s;throw Zn.create("duplicate-app",{appName:i})}const o=new JI(i);for(const u of uh.values())o.addComponent(u);const l=new WS(n,r,o);return ll.set(i,l),l}function i_(t=lh){const e=ll.get(t);if(!e&&t===lh&&Zv())return r_();if(!e)throw Zn.create("no-app",{appName:t});return e}function er(t,e,n){var r;let i=(r=$S[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(l.join(" "));return}Ri(new Or(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS="firebase-heartbeat-database",GS=1,eo="firebase-heartbeat-store";let rc=null;function s_(){return rc||(rc=hS(KS,GS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),rc}async function QS(t){try{const n=(await s_()).transaction(eo),r=await n.objectStore(eo).get(o_(t));return await n.done,r}catch(e){if(e instanceof An)_n.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function km(t,e){try{const r=(await s_()).transaction(eo,"readwrite");await r.objectStore(eo).put(e,o_(t)),await r.done}catch(n){if(n instanceof An)_n.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(r.message)}}}function o_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=1024,XS=30*24*60*60*1e3;class JS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new e1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Rm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=XS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rm(),{heartbeatsToSend:r,unsentEntries:i}=ZS(this._heartbeatsCache.heartbeats),s=ol(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return _n.warn(n),""}}}function Rm(){return new Date().toISOString().substring(0,10)}function ZS(t,e=YS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class e1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UI()?zI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await QS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cm(t){return ol(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t){Ri(new Or("platform-logger",e=>new pS(e),"PRIVATE")),Ri(new Or("heartbeat",e=>new JS(e),"PRIVATE")),er(ah,Am,t),er(ah,Am,"esm2017"),er("fire-js","")}t1("");var n1="firebase",r1="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er(n1,r1,"app");var Pm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rr,a_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function _(){}_.prototype=m.prototype,E.D=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(T,A,R){for(var I=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)I[lt-2]=arguments[lt];return m.prototype[A].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,_){_||(_=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(A=0;16>A;++A)T[A]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],A=E.g[2];var R=E.g[3],I=m+(R^_&(A^R))+T[0]+3614090360&4294967295;m=_+(I<<7&4294967295|I>>>25),I=R+(A^m&(_^A))+T[1]+3905402710&4294967295,R=m+(I<<12&4294967295|I>>>20),I=A+(_^R&(m^_))+T[2]+606105819&4294967295,A=R+(I<<17&4294967295|I>>>15),I=_+(m^A&(R^m))+T[3]+3250441966&4294967295,_=A+(I<<22&4294967295|I>>>10),I=m+(R^_&(A^R))+T[4]+4118548399&4294967295,m=_+(I<<7&4294967295|I>>>25),I=R+(A^m&(_^A))+T[5]+1200080426&4294967295,R=m+(I<<12&4294967295|I>>>20),I=A+(_^R&(m^_))+T[6]+2821735955&4294967295,A=R+(I<<17&4294967295|I>>>15),I=_+(m^A&(R^m))+T[7]+4249261313&4294967295,_=A+(I<<22&4294967295|I>>>10),I=m+(R^_&(A^R))+T[8]+1770035416&4294967295,m=_+(I<<7&4294967295|I>>>25),I=R+(A^m&(_^A))+T[9]+2336552879&4294967295,R=m+(I<<12&4294967295|I>>>20),I=A+(_^R&(m^_))+T[10]+4294925233&4294967295,A=R+(I<<17&4294967295|I>>>15),I=_+(m^A&(R^m))+T[11]+2304563134&4294967295,_=A+(I<<22&4294967295|I>>>10),I=m+(R^_&(A^R))+T[12]+1804603682&4294967295,m=_+(I<<7&4294967295|I>>>25),I=R+(A^m&(_^A))+T[13]+4254626195&4294967295,R=m+(I<<12&4294967295|I>>>20),I=A+(_^R&(m^_))+T[14]+2792965006&4294967295,A=R+(I<<17&4294967295|I>>>15),I=_+(m^A&(R^m))+T[15]+1236535329&4294967295,_=A+(I<<22&4294967295|I>>>10),I=m+(A^R&(_^A))+T[1]+4129170786&4294967295,m=_+(I<<5&4294967295|I>>>27),I=R+(_^A&(m^_))+T[6]+3225465664&4294967295,R=m+(I<<9&4294967295|I>>>23),I=A+(m^_&(R^m))+T[11]+643717713&4294967295,A=R+(I<<14&4294967295|I>>>18),I=_+(R^m&(A^R))+T[0]+3921069994&4294967295,_=A+(I<<20&4294967295|I>>>12),I=m+(A^R&(_^A))+T[5]+3593408605&4294967295,m=_+(I<<5&4294967295|I>>>27),I=R+(_^A&(m^_))+T[10]+38016083&4294967295,R=m+(I<<9&4294967295|I>>>23),I=A+(m^_&(R^m))+T[15]+3634488961&4294967295,A=R+(I<<14&4294967295|I>>>18),I=_+(R^m&(A^R))+T[4]+3889429448&4294967295,_=A+(I<<20&4294967295|I>>>12),I=m+(A^R&(_^A))+T[9]+568446438&4294967295,m=_+(I<<5&4294967295|I>>>27),I=R+(_^A&(m^_))+T[14]+3275163606&4294967295,R=m+(I<<9&4294967295|I>>>23),I=A+(m^_&(R^m))+T[3]+4107603335&4294967295,A=R+(I<<14&4294967295|I>>>18),I=_+(R^m&(A^R))+T[8]+1163531501&4294967295,_=A+(I<<20&4294967295|I>>>12),I=m+(A^R&(_^A))+T[13]+2850285829&4294967295,m=_+(I<<5&4294967295|I>>>27),I=R+(_^A&(m^_))+T[2]+4243563512&4294967295,R=m+(I<<9&4294967295|I>>>23),I=A+(m^_&(R^m))+T[7]+1735328473&4294967295,A=R+(I<<14&4294967295|I>>>18),I=_+(R^m&(A^R))+T[12]+2368359562&4294967295,_=A+(I<<20&4294967295|I>>>12),I=m+(_^A^R)+T[5]+4294588738&4294967295,m=_+(I<<4&4294967295|I>>>28),I=R+(m^_^A)+T[8]+2272392833&4294967295,R=m+(I<<11&4294967295|I>>>21),I=A+(R^m^_)+T[11]+1839030562&4294967295,A=R+(I<<16&4294967295|I>>>16),I=_+(A^R^m)+T[14]+4259657740&4294967295,_=A+(I<<23&4294967295|I>>>9),I=m+(_^A^R)+T[1]+2763975236&4294967295,m=_+(I<<4&4294967295|I>>>28),I=R+(m^_^A)+T[4]+1272893353&4294967295,R=m+(I<<11&4294967295|I>>>21),I=A+(R^m^_)+T[7]+4139469664&4294967295,A=R+(I<<16&4294967295|I>>>16),I=_+(A^R^m)+T[10]+3200236656&4294967295,_=A+(I<<23&4294967295|I>>>9),I=m+(_^A^R)+T[13]+681279174&4294967295,m=_+(I<<4&4294967295|I>>>28),I=R+(m^_^A)+T[0]+3936430074&4294967295,R=m+(I<<11&4294967295|I>>>21),I=A+(R^m^_)+T[3]+3572445317&4294967295,A=R+(I<<16&4294967295|I>>>16),I=_+(A^R^m)+T[6]+76029189&4294967295,_=A+(I<<23&4294967295|I>>>9),I=m+(_^A^R)+T[9]+3654602809&4294967295,m=_+(I<<4&4294967295|I>>>28),I=R+(m^_^A)+T[12]+3873151461&4294967295,R=m+(I<<11&4294967295|I>>>21),I=A+(R^m^_)+T[15]+530742520&4294967295,A=R+(I<<16&4294967295|I>>>16),I=_+(A^R^m)+T[2]+3299628645&4294967295,_=A+(I<<23&4294967295|I>>>9),I=m+(A^(_|~R))+T[0]+4096336452&4294967295,m=_+(I<<6&4294967295|I>>>26),I=R+(_^(m|~A))+T[7]+1126891415&4294967295,R=m+(I<<10&4294967295|I>>>22),I=A+(m^(R|~_))+T[14]+2878612391&4294967295,A=R+(I<<15&4294967295|I>>>17),I=_+(R^(A|~m))+T[5]+4237533241&4294967295,_=A+(I<<21&4294967295|I>>>11),I=m+(A^(_|~R))+T[12]+1700485571&4294967295,m=_+(I<<6&4294967295|I>>>26),I=R+(_^(m|~A))+T[3]+2399980690&4294967295,R=m+(I<<10&4294967295|I>>>22),I=A+(m^(R|~_))+T[10]+4293915773&4294967295,A=R+(I<<15&4294967295|I>>>17),I=_+(R^(A|~m))+T[1]+2240044497&4294967295,_=A+(I<<21&4294967295|I>>>11),I=m+(A^(_|~R))+T[8]+1873313359&4294967295,m=_+(I<<6&4294967295|I>>>26),I=R+(_^(m|~A))+T[15]+4264355552&4294967295,R=m+(I<<10&4294967295|I>>>22),I=A+(m^(R|~_))+T[6]+2734768916&4294967295,A=R+(I<<15&4294967295|I>>>17),I=_+(R^(A|~m))+T[13]+1309151649&4294967295,_=A+(I<<21&4294967295|I>>>11),I=m+(A^(_|~R))+T[4]+4149444226&4294967295,m=_+(I<<6&4294967295|I>>>26),I=R+(_^(m|~A))+T[11]+3174756917&4294967295,R=m+(I<<10&4294967295|I>>>22),I=A+(m^(R|~_))+T[2]+718787259&4294967295,A=R+(I<<15&4294967295|I>>>17),I=_+(R^(A|~m))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var _=m-this.blockSize,T=this.B,A=this.h,R=0;R<m;){if(A==0)for(;R<=_;)i(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<m;)if(T[A++]=E.charCodeAt(R++),A==this.blockSize){i(this,T),A=0;break}}else for(;R<m;)if(T[A++]=E[R++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var _=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=_&255,_/=256;for(this.u(E),E=Array(16),m=_=0;4>m;++m)for(var T=0;32>T;T+=8)E[_++]=this.g[m]>>>T&255;return E};function s(E,m){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function o(E,m){this.h=m;for(var _=[],T=!0,A=E.length-1;0<=A;A--){var R=E[A]|0;T&&R==m||(_[A]=R,T=!1)}this.g=_}var l={};function u(E){return-128<=E&&128>E?s(E,function(m){return new o([m|0],0>m?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return L(h(-E));for(var m=[],_=1,T=0;E>=_;T++)m[T]=E/_|0,_*=4294967296;return new o(m,0)}function f(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return L(f(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(m,8)),T=g,A=0;A<E.length;A+=8){var R=Math.min(8,E.length-A),I=parseInt(E.substring(A,A+R),m);8>R?(R=h(Math.pow(m,R)),T=T.j(R).add(h(I))):(T=T.j(_),T=T.add(h(I)))}return T}var g=u(0),v=u(1),x=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-L(this).m();for(var E=0,m=1,_=0;_<this.g.length;_++){var T=this.i(_);E+=(0<=T?T:4294967296+T)*m,m*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(N(this))return"-"+L(this).toString(E);for(var m=h(Math.pow(E,6)),_=this,T="";;){var A=O(_,m).g;_=S(_,A.j(m));var R=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=A,P(_))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=S(this,E),N(E)?-1:P(E)?0:1};function L(E){for(var m=E.g.length,_=[],T=0;T<m;T++)_[T]=~E.g[T];return new o(_,~E.h).add(v)}t.abs=function(){return N(this)?L(this):this},t.add=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],T=0,A=0;A<=m;A++){var R=T+(this.i(A)&65535)+(E.i(A)&65535),I=(R>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);T=I>>>16,R&=65535,I&=65535,_[A]=I<<16|R}return new o(_,_[_.length-1]&-2147483648?-1:0)};function S(E,m){return E.add(L(m))}t.j=function(E){if(P(this)||P(E))return g;if(N(this))return N(E)?L(this).j(L(E)):L(L(this).j(E));if(N(E))return L(this.j(L(E)));if(0>this.l(x)&&0>E.l(x))return h(this.m()*E.m());for(var m=this.g.length+E.g.length,_=[],T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<E.g.length;A++){var R=this.i(T)>>>16,I=this.i(T)&65535,lt=E.i(A)>>>16,Zt=E.i(A)&65535;_[2*T+2*A]+=I*Zt,w(_,2*T+2*A),_[2*T+2*A+1]+=R*Zt,w(_,2*T+2*A+1),_[2*T+2*A+1]+=I*lt,w(_,2*T+2*A+1),_[2*T+2*A+2]+=R*lt,w(_,2*T+2*A+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new o(_,0)};function w(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function k(E,m){this.g=E,this.h=m}function O(E,m){if(P(m))throw Error("division by zero");if(P(E))return new k(g,g);if(N(E))return m=O(L(E),m),new k(L(m.g),L(m.h));if(N(m))return m=O(E,L(m)),new k(L(m.g),m.h);if(30<E.g.length){if(N(E)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var _=v,T=m;0>=T.l(E);)_=B(_),T=B(T);var A=U(_,1),R=U(T,1);for(T=U(T,2),_=U(_,2);!P(T);){var I=R.add(T);0>=I.l(E)&&(A=A.add(_),R=I),T=U(T,1),_=U(_,1)}return m=S(E,A.j(m)),new k(A,m)}for(A=g;0<=E.l(m);){for(_=Math.max(1,Math.floor(E.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(_),I=R.j(m);N(I)||0<I.l(E);)_-=T,R=h(_),I=R.j(m);P(R)&&(R=v),A=A.add(R),E=S(E,I)}return new k(A,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)&E.i(T);return new o(_,this.h&E.h)},t.or=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)|E.i(T);return new o(_,this.h|E.h)},t.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)^E.i(T);return new o(_,this.h^E.h)};function B(E){for(var m=E.g.length+1,_=[],T=0;T<m;T++)_[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(_,E.h)}function U(E,m){var _=m>>5;m%=32;for(var T=E.g.length-_,A=[],R=0;R<T;R++)A[R]=0<m?E.i(R+_)>>>m|E.i(R+_+1)<<32-m:E.i(R+_);return new o(A,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Rr=o}).apply(typeof Pm<"u"?Pm:typeof self<"u"?self:typeof window<"u"?window:{});var oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var l_,_s,u_,ka,ch,c_,h_,d_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof oa=="object"&&oa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var C=a[p];if(!(C in d))break e;d=d[C]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,C={next:function(){if(!p&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return p=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function g(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,p),a.apply(c,C)}}return function(){return a.apply(c,arguments)}}function v(a,c,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,v.apply(null,arguments)}function x(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,C,D){for(var z=Array(arguments.length-2),he=2;he<arguments.length;he++)z[he-2]=arguments[he];return c.prototype[C].apply(p,z)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function L(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const C=a.length||0,D=p.length||0;a.length=C+D;for(let z=0;z<D;z++)a[C+z]=p[z]}else a.push(p)}}class S{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var B=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function U(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function m(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,p;for(let C=1;C<arguments.length;C++){p=arguments[C];for(d in p)a[d]=p[d];for(let D=0;D<_.length;D++)d=_[D],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function A(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function I(){var a=$;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class lt{constructor(){this.h=this.g=null}add(c,d){const p=Zt.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Zt=new S(()=>new fr,a=>a.reset());class fr{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let V,b=!1,$=new lt,q=()=>{const a=l.Promise.resolve(void 0);V=()=>{a.then(Q)}};var Q=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){R(d)}var c=Zt;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}b=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ct=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function en(a,c){if(fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(B){e:{try{O(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:tn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&en.aa.h.call(this)}}P(en,fe);var tn={2:"touch",3:"pen",4:"mouse"};en.prototype.h=function(){en.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),ow=0;function aw(a,c,d,p,C){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=C,this.key=++ow,this.da=this.fa=!1}function Ao(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function xo(a){this.src=a,this.g={},this.h=0}xo.prototype.add=function(a,c,d,p,C){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=su(a,c,p,C);return-1<z?(c=a[z],d||(c.fa=!1)):(c=new aw(c,this.src,D,!!p,C),c.fa=d,a.push(c)),c};function iu(a,c){var d=c.type;if(d in a.g){var p=a.g[d],C=Array.prototype.indexOf.call(p,c,void 0),D;(D=0<=C)&&Array.prototype.splice.call(p,C,1),D&&(Ao(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function su(a,c,d,p){for(var C=0;C<a.length;++C){var D=a[C];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==p)return C}return-1}var ou="closure_lm_"+(1e6*Math.random()|0),au={};function cf(a,c,d,p,C){if(Array.isArray(c)){for(var D=0;D<c.length;D++)cf(a,c[D],d,p,C);return null}return d=ff(d),a&&a[nn]?a.K(c,d,h(p)?!!p.capture:!1,C):lw(a,c,d,!1,p,C)}function lw(a,c,d,p,C,D){if(!c)throw Error("Invalid event type");var z=h(C)?!!C.capture:!!C,he=uu(a);if(he||(a[ou]=he=new xo(a)),d=he.add(c,d,p,z,D),d.proxy)return d;if(p=uw(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Ct||(C=z),C===void 0&&(C=!1),a.addEventListener(c.toString(),p,C);else if(a.attachEvent)a.attachEvent(df(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function uw(){function a(d){return c.call(a.src,a.listener,d)}const c=cw;return a}function hf(a,c,d,p,C){if(Array.isArray(c))for(var D=0;D<c.length;D++)hf(a,c[D],d,p,C);else p=h(p)?!!p.capture:!!p,d=ff(d),a&&a[nn]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=su(D,d,p,C),-1<d&&(Ao(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=uu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=su(c,d,p,C)),(d=-1<a?c[a]:null)&&lu(d))}function lu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[nn])iu(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(df(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=uu(c))?(iu(d,a),d.h==0&&(d.src=null,c[ou]=null)):Ao(a)}}}function df(a){return a in au?au[a]:au[a]="on"+a}function cw(a,c){if(a.da)a=!0;else{c=new en(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&lu(a),a=d.call(p,c)}return a}function uu(a){return a=a[ou],a instanceof xo?a:null}var cu="__closure_events_fn_"+(1e9*Math.random()>>>0);function ff(a){return typeof a=="function"?a:(a[cu]||(a[cu]=function(c){return a.handleEvent(c)}),a[cu])}function He(){ee.call(this),this.i=new xo(this),this.M=this,this.F=null}P(He,ee),He.prototype[nn]=!0,He.prototype.removeEventListener=function(a,c,d,p){hf(this,a,c,d,p)};function tt(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new fe(c,a);else if(c instanceof fe)c.target=c.target||a;else{var C=c;c=new fe(p,a),T(c,C)}if(C=!0,d)for(var D=d.length-1;0<=D;D--){var z=c.g=d[D];C=ko(z,p,!0,c)&&C}if(z=c.g=a,C=ko(z,p,!0,c)&&C,C=ko(z,p,!1,c)&&C,d)for(D=0;D<d.length;D++)z=c.g=d[D],C=ko(z,p,!1,c)&&C}He.prototype.N=function(){if(He.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)Ao(d[p]);delete a.g[c],a.h--}}this.F=null},He.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},He.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function ko(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,D=0;D<c.length;++D){var z=c[D];if(z&&!z.da&&z.capture==d){var he=z.listener,Le=z.ha||z.src;z.fa&&iu(a.i,z),C=he.call(Le,p)!==!1&&C}}return C&&!p.defaultPrevented}function pf(a,c,d){if(typeof a=="function")d&&(a=v(a,d));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function mf(a){a.g=pf(()=>{a.g=null,a.i&&(a.i=!1,mf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class hw extends ee{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:mf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wi(a){ee.call(this),this.h=a,this.g={}}P(Wi,ee);var gf=[];function yf(a){U(a.g,function(c,d){this.g.hasOwnProperty(d)&&lu(c)},a),a.g={}}Wi.prototype.N=function(){Wi.aa.N.call(this),yf(this)},Wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hu=l.JSON.stringify,dw=l.JSON.parse,fw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function du(){}du.prototype.h=null;function vf(a){return a.h||(a.h=a.i())}function _f(){}var Ki={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fu(){fe.call(this,"d")}P(fu,fe);function pu(){fe.call(this,"c")}P(pu,fe);var pr={},wf=null;function Ro(){return wf=wf||new He}pr.La="serverreachability";function Ef(a){fe.call(this,pr.La,a)}P(Ef,fe);function Gi(a){const c=Ro();tt(c,new Ef(c))}pr.STAT_EVENT="statevent";function Tf(a,c){fe.call(this,pr.STAT_EVENT,a),this.stat=c}P(Tf,fe);function nt(a){const c=Ro();tt(c,new Tf(c,a))}pr.Ma="timingevent";function If(a,c){fe.call(this,pr.Ma,a),this.size=c}P(If,fe);function Qi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Yi(){this.g=!0}Yi.prototype.xa=function(){this.g=!1};function pw(a,c,d,p,C,D){a.info(function(){if(a.g)if(D)for(var z="",he=D.split("&"),Le=0;Le<he.length;Le++){var ae=he[Le].split("=");if(1<ae.length){var qe=ae[0];ae=ae[1];var We=qe.split("_");z=2<=We.length&&We[1]=="type"?z+(qe+"="+ae+"&"):z+(qe+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+p+") [attempt "+C+"]: "+c+`
`+d+`
`+z})}function mw(a,c,d,p,C,D,z){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+C+"]: "+c+`
`+d+`
`+D+" "+z})}function $r(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+yw(a,d)+(p?" "+p:"")})}function gw(a,c){a.info(function(){return"TIMEOUT: "+c})}Yi.prototype.info=function(){};function yw(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var C=p[1];if(Array.isArray(C)&&!(1>C.length)){var D=C[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<C.length;z++)C[z]=""}}}}return hu(d)}catch{return c}}var Co={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mu;function Po(){}P(Po,du),Po.prototype.g=function(){return new XMLHttpRequest},Po.prototype.i=function(){return{}},mu=new Po;function xn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new Wi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Af}function Af(){this.i=null,this.g="",this.h=!1}var xf={},gu={};function yu(a,c,d){a.L=1,a.v=Oo(rn(c)),a.m=d,a.P=!0,kf(a,null)}function kf(a,c){a.F=Date.now(),No(a),a.A=rn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),zf(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Af,a.g=sp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new hw(v(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(gf[0]=C.toString()),C=gf);for(var D=0;D<C.length;D++){var z=cf(d,C[D],p||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Gi(),pw(a.i,a.u,a.A,a.l,a.R,a.m)}xn.prototype.ca=function(a){a=a.target;const c=this.M;c&&sn(a)==3?c.j():this.Y(a)},xn.prototype.Y=function(a){try{if(a==this.g)e:{const We=sn(this.g);var c=this.g.Ba();const Wr=this.g.Z();if(!(3>We)&&(We!=3||this.g&&(this.h.h||this.g.oa()||Gf(this.g)))){this.J||We!=4||c==7||(c==8||0>=Wr?Gi(3):Gi(2)),vu(this);var d=this.g.Z();this.X=d;t:if(Rf(this)){var p=Gf(this.g);a="";var C=p.length,D=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mr(this),Xi(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(D&&c==C-1)});p.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,mw(this.i,this.u,this.A,this.l,this.R,We,d),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Le=this.g;if((he=Le.g?Le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(he)){var ae=he;break t}}ae=null}if(d=ae)$r(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_u(this,d);else{this.o=!1,this.s=3,nt(12),mr(this),Xi(this);break e}}if(this.P){d=!0;let Pt;for(;!this.J&&this.C<z.length;)if(Pt=vw(this,z),Pt==gu){We==4&&(this.s=4,nt(14),d=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==xf){this.s=4,nt(15),$r(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else $r(this.i,this.l,Pt,null),_u(this,Pt);if(Rf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),We!=4||z.length!=0||this.h.h||(this.s=1,nt(16),d=!1),this.o=this.o&&d,!d)$r(this.i,this.l,z,"[Invalid Chunked Response]"),mr(this),Xi(this);else if(0<z.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Au(qe),qe.M=!0,nt(11))}}else $r(this.i,this.l,z,null),_u(this,z);We==4&&mr(this),this.o&&!this.J&&(We==4?tp(this.j,this):(this.o=!1,No(this)))}else bw(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),mr(this),Xi(this)}}}catch{}finally{}};function Rf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function vw(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?gu:(d=Number(c.substring(d,p)),isNaN(d)?xf:(p+=1,p+d>c.length?gu:(c=c.slice(p,p+d),a.C=p+d,c)))}xn.prototype.cancel=function(){this.J=!0,mr(this)};function No(a){a.S=Date.now()+a.I,Cf(a,a.I)}function Cf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Qi(v(a.ba,a),c)}function vu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(gw(this.i,this.A),this.L!=2&&(Gi(),nt(17)),mr(this),this.s=2,Xi(this)):Cf(this,this.S-a)};function Xi(a){a.j.G==0||a.J||tp(a.j,a)}function mr(a){vu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,yf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function _u(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||wu(d.h,a))){if(!a.K&&wu(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var C=p;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Uo(d),jo(d);else break e;Su(d),nt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Qi(v(d.Za,d),6e3));if(1>=Df(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else yr(d,11)}else if((a.K||d.g==a)&&Uo(d),!w(c))for(C=d.Da.g.parse(c),c=0;c<C.length;c++){let ae=C[c];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const qe=ae[3];qe!=null&&(d.la=qe,d.j.info("VER="+d.la));const We=ae[4];We!=null&&(d.Aa=We,d.j.info("SVER="+d.Aa));const Wr=ae[5];Wr!=null&&typeof Wr=="number"&&0<Wr&&(p=1.5*Wr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Pt=a.g;if(Pt){const Bo=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bo){var D=p.h;D.g||Bo.indexOf("spdy")==-1&&Bo.indexOf("quic")==-1&&Bo.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Eu(D,D.h),D.h=null))}if(p.D){const xu=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;xu&&(p.ya=xu,pe(p.I,p.D,xu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var z=a;if(p.qa=ip(p,p.J?p.ia:null,p.W),z.K){Vf(p.h,z);var he=z,Le=p.L;Le&&(he.I=Le),he.B&&(vu(he),No(he)),p.g=z}else Zf(p);0<d.i.length&&Fo(d)}else ae[0]!="stop"&&ae[0]!="close"||yr(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?yr(d,7):Iu(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}Gi(4)}catch{}}var _w=class{constructor(a,c){this.g=a,this.map=c}};function Pf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Df(a){return a.h?1:a.g?a.g.size:0}function wu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Eu(a,c){a.g?a.g.add(c):a.h=c}function Vf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Pf.prototype.cancel=function(){if(this.i=Of(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Of(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function ww(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function Ew(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function bf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=Ew(a),p=ww(a),C=p.length,D=0;D<C;D++)c.call(void 0,p[D],d&&d[D],a)}var Lf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),C=null;if(0<=p){var D=a[d].substring(0,p);C=a[d].substring(p+1)}else D=a[d];c(D,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function gr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gr){this.h=a.h,Do(this,a.j),this.o=a.o,this.g=a.g,Vo(this,a.s),this.l=a.l;var c=a.i,d=new es;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Mf(this,d),this.m=a.m}else a&&(c=String(a).match(Lf))?(this.h=!1,Do(this,c[1]||"",!0),this.o=Ji(c[2]||""),this.g=Ji(c[3]||"",!0),Vo(this,c[4]),this.l=Ji(c[5]||"",!0),Mf(this,c[6]||"",!0),this.m=Ji(c[7]||"")):(this.h=!1,this.i=new es(null,this.h))}gr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Zi(c,jf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Zi(c,jf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Zi(d,d.charAt(0)=="/"?Aw:Sw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Zi(d,kw)),a.join("")};function rn(a){return new gr(a)}function Do(a,c,d){a.j=d?Ji(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Vo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Mf(a,c,d){c instanceof es?(a.i=c,Rw(a.i,a.h)):(d||(c=Zi(c,xw)),a.i=new es(c,a.h))}function pe(a,c,d){a.i.set(c,d)}function Oo(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ji(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zi(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,Iw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Iw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var jf=/[#\/\?@]/g,Sw=/[#\?:]/g,Aw=/[#\?]/g,xw=/[#\?@]/g,kw=/#/g;function es(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function kn(a){a.g||(a.g=new Map,a.h=0,a.i&&Tw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=es.prototype,t.add=function(a,c){kn(this),this.i=null,a=Hr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Ff(a,c){kn(a),c=Hr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Uf(a,c){return kn(a),c=Hr(a,c),a.g.has(c)}t.forEach=function(a,c){kn(this),this.g.forEach(function(d,p){d.forEach(function(C){a.call(c,C,p,this)},this)},this)},t.na=function(){kn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const C=a[p];for(let D=0;D<C.length;D++)d.push(c[p])}return d},t.V=function(a){kn(this);let c=[];if(typeof a=="string")Uf(this,a)&&(c=c.concat(this.g.get(Hr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return kn(this),this.i=null,a=Hr(this,a),Uf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function zf(a,c,d){Ff(a,c),0<d.length&&(a.i=null,a.g.set(Hr(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const D=encodeURIComponent(String(p)),z=this.V(p);for(p=0;p<z.length;p++){var C=D;z[p]!==""&&(C+="="+encodeURIComponent(String(z[p]))),a.push(C)}}return this.i=a.join("&")};function Hr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Rw(a,c){c&&!a.j&&(kn(a),a.i=null,a.g.forEach(function(d,p){var C=p.toLowerCase();p!=C&&(Ff(this,p),zf(this,C,d))},a)),a.j=c}function Cw(a,c){const d=new Yi;if(l.Image){const p=new Image;p.onload=x(Rn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=x(Rn,d,"TestLoadImage: error",!1,c,p),p.onabort=x(Rn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=x(Rn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function Pw(a,c){const d=new Yi,p=new AbortController,C=setTimeout(()=>{p.abort(),Rn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(D=>{clearTimeout(C),D.ok?Rn(d,"TestPingServer: ok",!0,c):Rn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),Rn(d,"TestPingServer: error",!1,c)})}function Rn(a,c,d,p,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),p(d)}catch{}}function Nw(){this.g=new fw}function Dw(a,c,d){const p=d||"";try{bf(a,function(C,D){let z=C;h(C)&&(z=hu(C)),c.push(p+D+"="+encodeURIComponent(z))})}catch(C){throw c.push(p+"type="+encodeURIComponent("_badmap")),C}}function bo(a){this.l=a.Ub||null,this.j=a.eb||!1}P(bo,du),bo.prototype.g=function(){return new Lo(this.l,this.j)},bo.prototype.i=function(a){return function(){return a}}({});function Lo(a,c){He.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Lo,He),t=Lo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ns(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ns(this)),this.g&&(this.readyState=3,ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ts(this):ns(this),this.readyState==3&&Bf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ts(this))},t.Qa=function(a){this.g&&(this.response=a,ts(this))},t.ga=function(){this.g&&ts(this)};function ts(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ns(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Lo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $f(a){let c="";return U(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Tu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=$f(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):pe(a,c,d))}function Ie(a){He.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ie,He);var Vw=/^https?$/i,Ow=["POST","PUT"];t=Ie.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mu.g(),this.v=this.o?vf(this.o):vf(mu),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){Hf(this,D);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var C in p)d.set(C,p[C]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const D of p.keys())d.set(D,p.get(D));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ow,c,void 0))||p||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of d)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kf(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Hf(this,D)}};function Hf(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,qf(a),Mo(a)}function qf(a){a.A||(a.A=!0,tt(a,"complete"),tt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,tt(this,"complete"),tt(this,"abort"),Mo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mo(this,!0)),Ie.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Wf(this):this.bb())},t.bb=function(){Wf(this)};function Wf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||sn(a)!=4||a.Z()!=2)){if(a.u&&sn(a)==4)pf(a.Ea,0,a);else if(tt(a,"readystatechange"),sn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=z===0){var C=String(a.D).match(Lf)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),p=!Vw.test(C?C.toLowerCase():"")}d=p}if(d)tt(a,"complete"),tt(a,"success");else{a.m=6;try{var D=2<sn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",qf(a)}}finally{Mo(a)}}}}function Mo(a,c){if(a.g){Kf(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||tt(a,"ready");try{d.onreadystatechange=p}catch{}}}function Kf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),dw(c)}};function Gf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function bw(a){const c={};a=(a.g&&2<=sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(w(a[p]))continue;var d=A(a[p]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[C]||[];c[C]=D,D.push(d)}E(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Qf(a){this.Aa=0,this.i=[],this.j=new Yi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rs("baseRetryDelayMs",5e3,a),this.cb=rs("retryDelaySeedMs",1e4,a),this.Wa=rs("forwardChannelMaxRetries",2,a),this.wa=rs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Pf(a&&a.concurrentRequestLimit),this.Da=new Nw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qf.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){nt(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=ip(this,null,this.W),Fo(this)};function Iu(a){if(Yf(a),a.G==3){var c=a.U++,d=rn(a.I);if(pe(d,"SID",a.K),pe(d,"RID",c),pe(d,"TYPE","terminate"),is(a,d),c=new xn(a,a.j,c),c.L=2,c.v=Oo(rn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=sp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),No(c)}rp(a)}function jo(a){a.g&&(Au(a),a.g.cancel(),a.g=null)}function Yf(a){jo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Uo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Fo(a){if(!Nf(a.h)&&!a.s){a.s=!0;var c=a.Ga;V||q(),b||(V(),b=!0),$.add(c,a),a.B=0}}function Lw(a,c){return Df(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Qi(v(a.Ga,a,c),np(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new xn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=m(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(C.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Jf(this,C,c),d=rn(this.I),pe(d,"RID",a),pe(d,"CVER",22),this.D&&pe(d,"X-HTTP-Session-Id",this.D),is(this,d),D&&(this.O?c="headers="+encodeURIComponent(String($f(D)))+"&"+c:this.m&&Tu(d,this.m,D)),Eu(this.h,C),this.Ua&&pe(d,"TYPE","init"),this.P?(pe(d,"$req",c),pe(d,"SID","null"),C.T=!0,yu(C,d,null)):yu(C,d,c),this.G=2}}else this.G==3&&(a?Xf(this,a):this.i.length==0||Nf(this.h)||Xf(this))};function Xf(a,c){var d;c?d=c.l:d=a.U++;const p=rn(a.I);pe(p,"SID",a.K),pe(p,"RID",d),pe(p,"AID",a.T),is(a,p),a.m&&a.o&&Tu(p,a.m,a.o),d=new xn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Jf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Eu(a.h,d),yu(d,p,c)}function is(a,c){a.H&&U(a.H,function(d,p){pe(c,p,d)}),a.l&&bf({},function(d,p){pe(c,p,d)})}function Jf(a,c,d){d=Math.min(a.i.length,d);var p=a.l?v(a.l.Na,a.l,a):null;e:{var C=a.i;let D=-1;for(;;){const z=["count="+d];D==-1?0<d?(D=C[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let he=!0;for(let Le=0;Le<d;Le++){let ae=C[Le].g;const qe=C[Le].map;if(ae-=D,0>ae)D=Math.max(0,C[Le].g-100),he=!1;else try{Dw(qe,z,"req"+ae+"_")}catch{p&&p(qe)}}if(he){p=z.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function Zf(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;V||q(),b||(V(),b=!0),$.add(c,a),a.v=0}}function Su(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Qi(v(a.Fa,a),np(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ep(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Qi(v(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),jo(this),ep(this))};function Au(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ep(a){a.g=new xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=rn(a.qa);pe(c,"RID","rpc"),pe(c,"SID",a.K),pe(c,"AID",a.T),pe(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(c,"TO",a.ja),pe(c,"TYPE","xmlhttp"),is(a,c),a.m&&a.o&&Tu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Oo(rn(c)),d.m=null,d.P=!0,kf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,jo(this),Su(this),nt(19))};function Uo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function tp(a,c){var d=null;if(a.g==c){Uo(a),Au(a),a.g=null;var p=2}else if(wu(a.h,c))d=c.D,Vf(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var C=a.B;p=Ro(),tt(p,new If(p,d)),Fo(a)}else Zf(a);else if(C=c.s,C==3||C==0&&0<c.X||!(p==1&&Lw(a,c)||p==2&&Su(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),C){case 1:yr(a,5);break;case 4:yr(a,10);break;case 3:yr(a,6);break;default:yr(a,2)}}}function np(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function yr(a,c){if(a.j.info("Error code "+c),c==2){var d=v(a.fb,a),p=a.Xa;const C=!p;p=new gr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Do(p,"https"),Oo(p),C?Cw(p.toString(),d):Pw(p.toString(),d)}else nt(2);a.G=0,a.l&&a.l.sa(c),rp(a),Yf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function rp(a){if(a.G=0,a.ka=[],a.l){const c=Of(a.h);(c.length!=0||a.i.length!=0)&&(L(a.ka,c),L(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function ip(a,c,d){var p=d instanceof gr?rn(d):new gr(d);if(p.g!="")c&&(p.g=c+"."+p.g),Vo(p,p.s);else{var C=l.location;p=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var D=new gr(null);p&&Do(D,p),c&&(D.g=c),C&&Vo(D,C),d&&(D.l=d),p=D}return d=a.D,c=a.ya,d&&c&&pe(p,d,c),pe(p,"VER",a.la),is(a,p),p}function sp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ie(new bo({eb:d})):new Ie(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function op(){}t=op.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function zo(){}zo.prototype.g=function(a,c){return new pt(a,c)};function pt(a,c){He.call(this),this.g=new Qf(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!w(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new qr(this)}P(pt,He),pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){Iu(this.g)},pt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=hu(a),a=d);c.i.push(new _w(c.Ya++,a)),c.G==3&&Fo(c)},pt.prototype.N=function(){this.g.l=null,delete this.j,Iu(this.g),delete this.g,pt.aa.N.call(this)};function ap(a){fu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(ap,fu);function lp(){pu.call(this),this.status=1}P(lp,pu);function qr(a){this.g=a}P(qr,op),qr.prototype.ua=function(){tt(this.g,"a")},qr.prototype.ta=function(a){tt(this.g,new ap(a))},qr.prototype.sa=function(a){tt(this.g,new lp)},qr.prototype.ra=function(){tt(this.g,"b")},zo.prototype.createWebChannel=zo.prototype.g,pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,d_=function(){return new zo},h_=function(){return Ro()},c_=pr,ch={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Co.NO_ERROR=0,Co.TIMEOUT=8,Co.HTTP_ERROR=6,ka=Co,Sf.COMPLETE="complete",u_=Sf,_f.EventType=Ki,Ki.OPEN="a",Ki.CLOSE="b",Ki.ERROR="c",Ki.MESSAGE="d",He.prototype.listen=He.prototype.K,_s=_f,Ie.prototype.listenOnce=Ie.prototype.L,Ie.prototype.getLastError=Ie.prototype.Ka,Ie.prototype.getLastErrorCode=Ie.prototype.Ba,Ie.prototype.getStatus=Ie.prototype.Z,Ie.prototype.getResponseJson=Ie.prototype.Oa,Ie.prototype.getResponseText=Ie.prototype.oa,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Ha,l_=Ie}).apply(typeof oa<"u"?oa:typeof self<"u"?self:typeof window<"u"?window:{});const Nm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new Sd("@firebase/firestore");function fs(){return br.logLevel}function W(t,...e){if(br.logLevel<=ie.DEBUG){const n=e.map(kd);br.debug(`Firestore (${zi}): ${t}`,...n)}}function wn(t,...e){if(br.logLevel<=ie.ERROR){const n=e.map(kd);br.error(`Firestore (${zi}): ${t}`,...n)}}function Ci(t,...e){if(br.logLevel<=ie.WARN){const n=e.map(kd);br.warn(`Firestore (${zi}): ${t}`,...n)}}function kd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${zi}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function ce(t,e){t||X()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class i1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class s1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class o1{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new tr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new f_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Ye(e)}}class a1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class l1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new a1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class u1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ce(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.R=n.token,new u1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=h1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Pi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new De(0,0))}static max(){return new J(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return to.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof to?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends to{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const d1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends to{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return d1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ve.fromString(e))}static fromName(e){return new G(ve.fromString(e).popFirst(5))}static empty(){return new G(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ve(e.slice()))}}function f1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new or(i,G.empty(),e)}function p1(t){return new or(t.readTime,t.key,-1)}class or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new or(J.min(),G.empty(),-1)}static max(){return new or(J.max(),G.empty(),-1)}}function m1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class y1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==g1)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function v1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function yo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Rd.oe=-1;function zl(t){return t==null}function ul(t){return t===0&&1/t==-1/0}function _1(t){return typeof t=="number"&&Number.isInteger(t)&&!ul(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function m_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new aa(this.root,e,this.comparator,!0)}}class aa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??je.EMPTY,this.right=s??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vm(this.data.getIterator())}getIteratorFrom(e){return new Vm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Vm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new bt([])}unionWith(e){let n=new ze(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new g_("Invalid base64 string: "+s):s}}(e);return new $e(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const w1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ar(t){if(ce(!!t),typeof t=="string"){let e=0;const n=w1.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pd(t){const e=t.mapValue.fields.__previous_value__;return Cd(e)?Pd(e):e}function no(t){const e=ar(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class ro{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la={mapValue:{}};function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cd(t)?4:I1(t)?9007199254740991:T1(t)?10:11:X()}function Xt(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return no(t).isEqual(no(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ar(i.timestampValue),l=ar(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Lr(i.bytesValue).isEqual(Lr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?ul(o)===ul(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Pi(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Dm(o)!==Dm(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Xt(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function io(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Ni(t,e){if(t===e)return 0;const n=Mr(t),r=Mr(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Om(t.timestampValue,e.timestampValue);case 4:return Om(no(t),no(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Lr(s),u=Lr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=le(l[h],u[h]);if(f!==0)return f}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=le(Ae(s.latitude),Ae(o.latitude));return l!==0?l:le(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return bm(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const g=s.fields||{},v=o.fields||{},x=(l=g.value)===null||l===void 0?void 0:l.arrayValue,P=(u=v.value)===null||u===void 0?void 0:u.arrayValue,N=le(((h=x==null?void 0:x.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:bm(x,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===la.mapValue&&o===la.mapValue)return 0;if(s===la.mapValue)return 1;if(o===la.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const v=le(u[g],f[g]);if(v!==0)return v;const x=Ni(l[u[g]],h[f[g]]);if(x!==0)return x}return le(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X()}}function Om(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=ar(t),r=ar(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function bm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ni(n[i],r[i]);if(s)return s}return le(n.length,r.length)}function Di(t){return hh(t)}function hh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Lr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=hh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${hh(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function dh(t){return!!t&&"integerValue"in t}function Nd(t){return!!t&&"arrayValue"in t}function Lm(t){return!!t&&"nullValue"in t}function Mm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ra(t){return!!t&&"mapValue"in t}function T1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ns(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Bi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ns(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ns(t.arrayValue.values[n]);return e}return Object.assign({},t)}function I1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ra(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ns(n)}setAll(e){let n=Fe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ns(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ra(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ra(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Bi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(Ns(this.value))}}function y_(t){const e=[];return Bi(t.fields,(n,r)=>{const i=new Fe([n]);if(Ra(r)){const s=y_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Je(e,0,J.min(),J.min(),J.min(),It.empty(),0)}static newFoundDocument(e,n,r,i){return new Je(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new Je(e,2,n,J.min(),J.min(),It.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,J.min(),J.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.position=e,this.inclusive=n}}function jm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Ni(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n="asc"){this.field=e,this.dir=n}}function S1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{}class Pe extends v_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new x1(e,n,r):n==="array-contains"?new C1(e,r):n==="in"?new P1(e,r):n==="not-in"?new N1(e,r):n==="array-contains-any"?new D1(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new k1(e,r):new R1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ni(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(Ni(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends v_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Jt(e,n)}matches(e){return __(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function __(t){return t.op==="and"}function w_(t){return A1(t)&&__(t)}function A1(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function fh(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+Di(t.value);if(w_(t))return t.filters.map(e=>fh(e)).join(",");{const e=t.filters.map(n=>fh(n)).join(",");return`${t.op}(${e})`}}function E_(t,e){return t instanceof Pe?function(r,i){return i instanceof Pe&&r.op===i.op&&r.field.isEqual(i.field)&&Xt(r.value,i.value)}(t,e):t instanceof Jt?function(r,i){return i instanceof Jt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&E_(o,i.filters[l]),!0):!1}(t,e):void X()}function T_(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${Di(n.value)}`}(t):t instanceof Jt?function(n){return n.op.toString()+" {"+n.getFilters().map(T_).join(" ,")+"}"}(t):"Filter"}class x1 extends Pe{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class k1 extends Pe{constructor(e,n){super(e,"in",n),this.keys=I_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class R1 extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=I_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function I_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class C1 extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nd(n)&&io(n.arrayValue,this.value)}}class P1 extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&io(this.value.arrayValue,n)}}class N1 extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!io(this.value.arrayValue,n)}}class D1 extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>io(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Um(t,e=null,n=[],r=[],i=null,s=null,o=null){return new V1(t,e,n,r,i,s,o)}function Dd(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Di(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Di(r)).join(",")),e.ue=n}return e.ue}function Vd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!S1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!E_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fm(t.startAt,e.startAt)&&Fm(t.endAt,e.endAt)}function ph(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function O1(t,e,n,r,i,s,o,l){return new Bl(t,e,n,r,i,s,o,l)}function S_(t){return new Bl(t)}function zm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function b1(t){return t.collectionGroup!==null}function Ds(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ze(Fe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new hl(s,r))}),n.has(Fe.keyField().canonicalString())||e.ce.push(new hl(Fe.keyField(),r))}return e.ce}function Wt(t){const e=Z(t);return e.le||(e.le=L1(e,Ds(t))),e.le}function L1(t,e){if(t.limitType==="F")return Um(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new hl(i.field,s)});const n=t.endAt?new cl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cl(t.startAt.position,t.startAt.inclusive):null;return Um(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function mh(t,e,n){return new Bl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $l(t,e){return Vd(Wt(t),Wt(e))&&t.limitType===e.limitType}function A_(t){return`${Dd(Wt(t))}|lt:${t.limitType}`}function Gr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>T_(i)).join(", ")}]`),zl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Di(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Di(i)).join(",")),`Target(${r})`}(Wt(t))}; limitType=${t.limitType})`}function Hl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ds(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=jm(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Ds(r),i)||r.endAt&&!function(o,l,u){const h=jm(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Ds(r),i))}(t,e)}function M1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function x_(t){return(e,n)=>{let r=!1;for(const i of Ds(t)){const s=j1(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function j1(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ni(u,h):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return m_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=new Te(G.comparator);function En(){return F1}const k_=new Te(G.comparator);function ws(...t){let e=k_;for(const n of t)e=e.insert(n.key,n);return e}function R_(t){let e=k_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ar(){return Vs()}function C_(){return Vs()}function Vs(){return new $i(t=>t.toString(),(t,e)=>t.isEqual(e))}const U1=new Te(G.comparator),z1=new ze(G.comparator);function re(...t){let e=z1;for(const n of t)e=e.add(n);return e}const B1=new ze(le);function $1(){return B1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ul(e)?"-0":e}}function P_(t){return{integerValue:""+t}}function H1(t,e){return _1(e)?P_(e):Od(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this._=void 0}}function q1(t,e,n){return t instanceof dl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Cd(s)&&(s=Pd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof so?D_(t,e):t instanceof oo?V_(t,e):function(i,s){const o=N_(i,s),l=Bm(o)+Bm(i.Pe);return dh(o)&&dh(i.Pe)?P_(l):Od(i.serializer,l)}(t,e)}function W1(t,e,n){return t instanceof so?D_(t,e):t instanceof oo?V_(t,e):n}function N_(t,e){return t instanceof fl?function(r){return dh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class dl extends ql{}class so extends ql{constructor(e){super(),this.elements=e}}function D_(t,e){const n=O_(e);for(const r of t.elements)n.some(i=>Xt(i,r))||n.push(r);return{arrayValue:{values:n}}}class oo extends ql{constructor(e){super(),this.elements=e}}function V_(t,e){let n=O_(e);for(const r of t.elements)n=n.filter(i=>!Xt(i,r));return{arrayValue:{values:n}}}class fl extends ql{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Bm(t){return Ae(t.integerValue||t.doubleValue)}function O_(t){return Nd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function K1(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof so&&i instanceof so||r instanceof oo&&i instanceof oo?Pi(r.elements,i.elements,Xt):r instanceof fl&&i instanceof fl?Xt(r.Pe,i.Pe):r instanceof dl&&i instanceof dl}(t.transform,e.transform)}class G1{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ca(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wl{}function b_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bd(t.key,Kt.none()):new vo(t.key,t.data,Kt.none());{const n=t.data,r=It.empty();let i=new ze(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zr(t.key,r,new bt(i.toArray()),Kt.none())}}function Q1(t,e,n){t instanceof vo?function(i,s,o){const l=i.value.clone(),u=Hm(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(i,s,o){if(!Ca(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Hm(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(L_(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Os(t,e,n,r){return t instanceof vo?function(s,o,l,u){if(!Ca(s.precondition,o))return l;const h=s.value.clone(),f=qm(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(s,o,l,u){if(!Ca(s.precondition,o))return l;const h=qm(s.fieldTransforms,u,o),f=o.data;return f.setAll(L_(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return Ca(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Y1(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=N_(r.transform,i||null);s!=null&&(n===null&&(n=It.empty()),n.set(r.field,s))}return n||null}function $m(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Pi(r,i,(s,o)=>K1(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vo extends Wl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zr extends Wl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function L_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hm(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,W1(o,l,n[i]))}return r}function qm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,q1(s,o,e))}return r}class bd extends Wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class X1 extends Wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Q1(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Os(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Os(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=C_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=b_(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Pi(this.mutations,e.mutations,(n,r)=>$m(n,r))&&Pi(this.baseMutations,e.baseMutations,(n,r)=>$m(n,r))}}class Ld{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=function(){return U1}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ld(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,se;function tA(t){switch(t){default:return X();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function M_(t){if(t===void 0)return wn("GRPC error has no .code"),j.UNKNOWN;switch(t){case ke.OK:return j.OK;case ke.CANCELLED:return j.CANCELLED;case ke.UNKNOWN:return j.UNKNOWN;case ke.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case ke.INTERNAL:return j.INTERNAL;case ke.UNAVAILABLE:return j.UNAVAILABLE;case ke.UNAUTHENTICATED:return j.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case ke.NOT_FOUND:return j.NOT_FOUND;case ke.ALREADY_EXISTS:return j.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return j.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case ke.ABORTED:return j.ABORTED;case ke.OUT_OF_RANGE:return j.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return j.UNIMPLEMENTED;case ke.DATA_LOSS:return j.DATA_LOSS;default:return X()}}(se=ke||(ke={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=new Rr([4294967295,4294967295],0);function Wm(t){const e=nA().encode(t),n=new a_;return n.update(e),new Uint8Array(n.digest())}function Km(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Rr([n,r],0),new Rr([i,s],0)]}class Md{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Es(`Invalid padding: ${n}`);if(r<0)throw new Es(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Es(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Es(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Rr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Rr.fromNumber(r)));return i.compare(rA)===1&&(i=new Rr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Wm(e),[r,i]=Km(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Md(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Wm(e),[r,i]=Km(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Es extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,_o.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Kl(J.min(),i,new Te(le),En(),re())}}class _o{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _o(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class j_{constructor(e,n){this.targetId=e,this.me=n}}class F_{constructor(e,n,r=$e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Gm{constructor(){this.fe=0,this.ge=Ym(),this.pe=$e.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new _o(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ym()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class iA{constructor(e){this.Le=e,this.Be=new Map,this.ke=En(),this.qe=Qm(),this.Qe=new Te(le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(ph(s))if(r===0){const o=new G(s.path);this.Ue(n,o,Je.newNoDocument(o,J.min()))}else ce(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Lr(r).toUint8Array()}catch(u){if(u instanceof g_)return Ci("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Md(o,i,s)}catch(u){return Ci(u instanceof Es?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&ph(l.target)){const u=new G(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Je.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=re();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Kl(e,n,this.Qe,this.ke,r);return this.ke=En(),this.qe=Qm(),this.Qe=new Te(le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Gm,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ze(le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Gm),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Qm(){return new Te(G.comparator)}function Ym(){return new Te(G.comparator)}const sA={asc:"ASCENDING",desc:"DESCENDING"},oA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aA={and:"AND",or:"OR"};class lA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gh(t,e){return t.useProto3Json||zl(e)?e:{value:e}}function pl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function U_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uA(t,e){return pl(t,e.toTimestamp())}function Gt(t){return ce(!!t),J.fromTimestamp(function(n){const r=ar(n);return new De(r.seconds,r.nanos)}(t))}function jd(t,e){return yh(t,e).canonicalString()}function yh(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function z_(t){const e=ve.fromString(t);return ce(W_(e)),e}function vh(t,e){return jd(t.databaseId,e.path)}function ic(t,e){const n=z_(e);if(n.get(1)!==t.databaseId.projectId)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G($_(n))}function B_(t,e){return jd(t.databaseId,e)}function cA(t){const e=z_(t);return e.length===4?ve.emptyPath():$_(e)}function _h(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $_(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Xm(t,e,n){return{name:vh(t,e),fields:n.value.mapValue.fields}}function hA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ce(f===void 0||typeof f=="string"),$e.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),$e.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?j.UNKNOWN:M_(h.code);return new K(f,h.message||"")}(o);n=new F_(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ic(t,r.document.name),s=Gt(r.document.updateTime),o=r.document.createTime?Gt(r.document.createTime):J.min(),l=new It({mapValue:{fields:r.document.fields}}),u=Je.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Pa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ic(t,r.document),s=r.readTime?Gt(r.readTime):J.min(),o=Je.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Pa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ic(t,r.document),s=r.removedTargetIds||[];n=new Pa([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new eA(i,s),l=r.targetId;n=new j_(l,o)}}return n}function dA(t,e){let n;if(e instanceof vo)n={update:Xm(t,e.key,e.value)};else if(e instanceof bd)n={delete:vh(t,e.key)};else if(e instanceof zr)n={update:Xm(t,e.key,e.data),updateMask:EA(e.fieldMask)};else{if(!(e instanceof X1))return X();n={verify:vh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof dl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof so)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:uA(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function fA(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Gt(i.updateTime):Gt(s);return o.isEqual(J.min())&&(o=Gt(s)),new G1(o,i.transformResults||[])}(n,e))):[]}function pA(t,e){return{documents:[B_(t,e.path)]}}function mA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=B_(t,i);const s=function(h){if(h.length!==0)return q_(Jt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(v){return{field:Qr(v.field),direction:vA(v.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=gh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function gA(t){let e=cA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const v=H_(g);return v instanceof Jt&&w_(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(v=>function(P){return new hl(Yr(P.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(g){let v;return v=typeof g=="object"?g.value:g,zl(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(g){const v=!!g.before,x=g.values||[];return new cl(x,v)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const v=!g.before,x=g.values||[];return new cl(x,v)}(n.endAt)),O1(e,i,o,s,l,"F",u,h)}function yA(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function H_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yr(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Yr(n.unaryFilter.field);return Pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yr(n.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yr(n.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(Yr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Jt.create(n.compositeFilter.filters.map(r=>H_(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function vA(t){return sA[t]}function _A(t){return oA[t]}function wA(t){return aA[t]}function Qr(t){return{fieldPath:t.canonicalString()}}function Yr(t){return Fe.fromServerFormat(t.fieldPath)}function q_(t){return t instanceof Pe?function(n){if(n.op==="=="){if(Mm(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NAN"}};if(Lm(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Mm(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NAN"}};if(Lm(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qr(n.field),op:_A(n.op),value:n.value}}}(t):t instanceof Jt?function(n){const r=n.getFilters().map(i=>q_(i));return r.length===1?r[0]:{compositeFilter:{op:wA(n.op),filters:r}}}(t):X()}function EA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function W_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,r,i,s=J.min(),o=J.min(),l=$e.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.ct=e}}function IA(t){const e=gA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(){this.un=new AA}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(or.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(or.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class AA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Vi(0)}static kn(){return new Vi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(){this.changes=new $i(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Os(r.mutation,i,bt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Ar();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ws();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=En();const o=Vs(),l=function(){return Vs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof zr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Os(f.mutation,h,f.mutation.getFieldMask(),De.now())):o.set(h.key,bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var g;return l.set(h,new kA(f,(g=o.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Vs();let i=new Te((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||bt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=C_();f.forEach(v=>{if(!s.has(v)){const x=b_(n.get(v),r.get(v));x!==null&&g.set(v,x),s=s.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):b1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Ar());let l=-1,u=s;return o.next(h=>M.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,re())).next(f=>({batchId:l,changes:R_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=ws();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ws();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(g,v){return new Bl(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((g,v)=>{o=o.insert(g,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Je.newInvalidDocument(f)))});let l=ws();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Os(f.mutation,h,bt.empty(),De.now()),Hl(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Gt(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:IA(i.bundledQuery),readTime:Gt(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(){this.overlays=new Te(G.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ar();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Ar(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Ar(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Ar(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Z1(n,r));let s=this.Ir.get(n);s===void 0&&(s=re(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.Tr=new ze(Ve.Er),this.dr=new ze(Ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ve(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new ve([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new ve([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=re();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||le(e.wr,n.wr)}static Ar(e,n){return le(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ze(Ve.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new J1(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(le);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new G(s),0);let l=new ze(le);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ve(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.Mr=e,this.docs=function(){return new Te(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=En();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Je.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=En();const o=n.path,l=new G(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||m1(p1(f),r)<=0||(i.has(f.key)||Hl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new OA(this)}getSize(e){return M.resolve(this.size)}}class OA extends xA{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.persistence=e,this.Nr=new $i(n=>Dd(n),Vd),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Fd,this.targetCount=0,this.kr=Vi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Vi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Rd(0),this.Kr=!1,this.Kr=!0,this.$r=new NA,this.referenceDelegate=e(this),this.Ur=new bA(this),this.indexManager=new SA,this.remoteDocumentCache=function(i){return new VA(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new TA(n),this.Gr=new CA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new DA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new MA(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class MA extends y1{constructor(e){super(),this.currentSequenceNumber=e}}class Ud{constructor(e){this.persistence=e,this.Jr=new Fd,this.Yr=null}static Zr(e){return new Ud(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new zd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return FI()?8:v1(et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new jA;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(fs()<=ie.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Gr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(fs()<=ie.DEBUG&&W("QueryEngine","Query:",Gr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(fs()<=ie.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Gr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wt(n))):M.resolve())}Yi(e,n){if(zm(n))return M.resolve(null);let r=Wt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=mh(n,null,"F"),r=Wt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,mh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return zm(n)||i.isEqual(J.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(fs()<=ie.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gr(n)),this.rs(e,o,n,f1(i,-1)).next(l=>l))})}ts(e,n){let r=new ze(x_(e));return n.forEach((i,s)=>{Hl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return fs()<=ie.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Gr(n)),this.Ji.getDocumentsMatchingQuery(e,n,or.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Te(le),this._s=new $i(s=>Dd(s),Vd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function zA(t,e,n,r){return new UA(t,e,n,r)}async function K_(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function BA(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,v=g.keys();let x=M.resolve();return v.forEach(P=>{x=x.next(()=>f.getEntry(u,P)).next(N=>{const L=h.docVersions.get(P);ce(L!==null),N.version.compareTo(L)<0&&(g.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function G_(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function $A(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const v=i.get(g);if(!v)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,g)));let x=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?x=x.withResumeToken($e.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(f.resumeToken,r)),i=i.insert(g,x),function(N,L,S){return N.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(v,x,f)&&l.push(n.Ur.updateTargetData(s,x))});let u=En(),h=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(HA(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(J.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function HA(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=En();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function qA(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function WA(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new $n(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function wh(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!yo(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Jm(t,e,n){const r=Z(t);let i=J.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const g=Z(u),v=g._s.get(f);return v!==void 0?M.resolve(g.os.get(v)):g.Ur.getTargetData(h,f)}(r,o,Wt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:re())).next(l=>(KA(r,M1(e),l),{documents:l,Ts:s})))}function KA(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Zm{constructor(){this.activeTargetIds=$1()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GA{constructor(){this.so=new Zm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Zm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua=null;function sc(){return ua===null?ua=function(){return 268435456+Math.round(2147483648*Math.random())}():ua++,"0x"+ua.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class JA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=sc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ci("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=YA[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=sc();return new Promise((o,l)=>{const u=new l_;u.setWithCredentials(!0),u.listenOnce(u_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ka.NO_ERROR:const f=u.getResponseJson();W(Qe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case ka.TIMEOUT:W(Qe,`RPC '${e}' ${s} timed out`),l(new K(j.DEADLINE_EXCEEDED,"Request time out"));break;case ka.HTTP_ERROR:const g=u.getStatus();if(W(Qe,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const x=v==null?void 0:v.error;if(x&&x.status&&x.message){const P=function(L){const S=L.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(S)>=0?S:j.UNKNOWN}(x.status);l(new K(P,x.message))}else l(new K(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(j.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{W(Qe,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);W(Qe,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=sc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=d_(),l=h_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(Qe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=o.createWebChannel(f,u);let v=!1,x=!1;const P=new XA({Io:L=>{x?W(Qe,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(v||(W(Qe,`Opening RPC '${e}' stream ${i} transport.`),g.open(),v=!0),W(Qe,`RPC '${e}' stream ${i} sending:`,L),g.send(L))},To:()=>g.close()}),N=(L,S,w)=>{L.listen(S,k=>{try{w(k)}catch(O){setTimeout(()=>{throw O},0)}})};return N(g,_s.EventType.OPEN,()=>{x||(W(Qe,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),N(g,_s.EventType.CLOSE,()=>{x||(x=!0,W(Qe,`RPC '${e}' stream ${i} transport closed`),P.So())}),N(g,_s.EventType.ERROR,L=>{x||(x=!0,Ci(Qe,`RPC '${e}' stream ${i} transport errored:`,L),P.So(new K(j.UNAVAILABLE,"The operation could not be completed")))}),N(g,_s.EventType.MESSAGE,L=>{var S;if(!x){const w=L.data[0];ce(!!w);const k=w,O=k.error||((S=k[0])===null||S===void 0?void 0:S.error);if(O){W(Qe,`RPC '${e}' stream ${i} received error:`,O);const B=O.status;let U=function(_){const T=ke[_];if(T!==void 0)return M_(T)}(B),E=O.message;U===void 0&&(U=j.INTERNAL,E="Unknown error status: "+B+" with message "+O.message),x=!0,P.So(new K(U,E)),g.close()}else W(Qe,`RPC '${e}' stream ${i} received:`,w),P.bo(w)}}),N(l,c_.STAT_EVENT,L=>{L.stat===ch.PROXY?W(Qe,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===ch.NOPROXY&&W(Qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function oc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t){return new lA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Q_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZA extends Y_{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=hA(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Gt(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=_h(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=ph(u)?{documents:pA(s,u)}:{query:mA(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=U_(s,o.resumeToken);const h=gh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=pl(s,o.snapshotVersion.toTimestamp());const h=gh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=yA(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=_h(this.serializer),n.removeTarget=e,this.a_(n)}}class ex extends Y_{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=fA(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=_h(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dA(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,yh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,yh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class nx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(wn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Br(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.L_.add(4),await wo(h),h.q_.set("Unknown"),h.L_.delete(4),await Ql(h)}(this))})}),this.q_=new nx(r,i)}}async function Ql(t){if(Br(t))for(const e of t.B_)await e(!0)}async function wo(t){for(const e of t.B_)await e(!1)}function X_(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),qd(n)?Hd(n):Hi(n).r_()&&$d(n,e))}function Bd(t,e){const n=Z(t),r=Hi(n);n.N_.delete(e),r.r_()&&J_(n,e),n.N_.size===0&&(r.r_()?r.o_():Br(n)&&n.q_.set("Unknown"))}function $d(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Hi(t).A_(e)}function J_(t,e){t.Q_.xe(e),Hi(t).R_(e)}function Hd(t){t.Q_=new iA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Hi(t).start(),t.q_.v_()}function qd(t){return Br(t)&&!Hi(t).n_()&&t.N_.size>0}function Br(t){return Z(t).L_.size===0}function Z_(t){t.Q_=void 0}async function ix(t){t.q_.set("Online")}async function sx(t){t.N_.forEach((e,n)=>{$d(t,e)})}async function ox(t,e){Z_(t),qd(t)?(t.q_.M_(e),Hd(t)):t.q_.set("Unknown")}async function ax(t,e,n){if(t.q_.set("Online"),e instanceof F_&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ml(t,r)}else if(e instanceof Pa?t.Q_.Ke(e):e instanceof j_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await G_(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken($e.EMPTY_BYTE_STRING,f.snapshotVersion)),J_(s,u);const g=new $n(f.target,u,h,f.sequenceNumber);$d(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await ml(t,r)}}async function ml(t,e,n){if(!yo(e))throw e;t.L_.add(1),await wo(t),t.q_.set("Offline"),n||(n=()=>G_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ql(t)})}function e0(t,e){return e().catch(n=>ml(t,n,e))}async function Yl(t){const e=Z(t),n=lr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;lx(e);)try{const i=await qA(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,ux(e,i)}catch(i){await ml(e,i)}t0(e)&&n0(e)}function lx(t){return Br(t)&&t.O_.length<10}function ux(t,e){t.O_.push(e);const n=lr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function t0(t){return Br(t)&&!lr(t).n_()&&t.O_.length>0}function n0(t){lr(t).start()}async function cx(t){lr(t).p_()}async function hx(t){const e=lr(t);for(const n of t.O_)e.m_(n.mutations)}async function dx(t,e,n){const r=t.O_.shift(),i=Ld.from(r,e,n);await e0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Yl(t)}async function fx(t,e){e&&lr(t).V_&&await async function(r,i){if(function(o){return tA(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();lr(r).s_(),await e0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Yl(r)}}(t,e),t0(t)&&n0(t)}async function tg(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Br(n);n.L_.add(3),await wo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ql(n)}async function px(t,e){const n=Z(t);e?(n.L_.delete(2),await Ql(n)):e||(n.L_.add(2),await wo(n),n.q_.set("Unknown"))}function Hi(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new ZA(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:ix.bind(null,t),Ro:sx.bind(null,t),mo:ox.bind(null,t),d_:ax.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),qd(t)?Hd(t):t.q_.set("Unknown")):(await t.K_.stop(),Z_(t))})),t.K_}function lr(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new ex(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:cx.bind(null,t),mo:fx.bind(null,t),f_:hx.bind(null,t),g_:dx.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Yl(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Wd(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kd(t,e){if(wn("AsyncQueue",`${e}: ${t}`),yo(t))return new K(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=ws(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new yi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new yi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.W_=new Te(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Oi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Oi(e,n,yi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$l(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class gx{constructor(){this.queries=rg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=rg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new K(j.ABORTED,"Firestore shutting down"))}}function rg(){return new $i(t=>A_(t),$l)}async function yx(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new mx,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Kd(o,`Initialization of query '${Gr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Gd(n)}async function vx(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _x(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Gd(n)}function wx(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Gd(t){t.Y_.forEach(e=>{e.next()})}var Eh,ig;(ig=Eh||(Eh={})).ea="default",ig.Cache="cache";class Ex{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Oi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Eh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.key=e}}class i0{constructor(e){this.key=e}}class Tx{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=re(),this.mutatedKeys=re(),this.Aa=x_(e),this.Ra=new yi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new ng,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const v=i.get(f),x=Hl(this.query,g)?g:null,P=!!v&&this.mutatedKeys.has(v.key),N=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let L=!1;v&&x?v.data.isEqual(x.data)?P!==N&&(r.track({type:3,doc:x}),L=!0):this.ga(v,x)||(r.track({type:2,doc:x}),L=!0,(u&&this.Aa(x,u)>0||h&&this.Aa(x,h)<0)&&(l=!0)):!v&&x?(r.track({type:0,doc:x}),L=!0):v&&!x&&(r.track({type:1,doc:v}),L=!0,(u||h)&&(l=!0)),L&&(x?(o=o.add(x),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,g)=>function(x,P){const N=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return N(x)-N(P)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Oi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ng,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=re(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new i0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new r0(r))}),n}ba(e){this.Ta=e.Ts,this.da=re();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Oi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Ix{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Sx{constructor(e){this.key=e,this.va=!1}}class Ax{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new $i(l=>A_(l),$l),this.Ma=new Map,this.xa=new Set,this.Oa=new Te(G.comparator),this.Na=new Map,this.La=new Fd,this.Ba={},this.ka=new Map,this.qa=Vi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function xx(t,e,n=!0){const r=c0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await s0(r,e,n,!0),i}async function kx(t,e){const n=c0(t);await s0(n,e,!0,!1)}async function s0(t,e,n,r){const i=await WA(t.localStore,Wt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Rx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&X_(t.remoteStore,i),l}async function Rx(t,e,n,r,i){t.Ka=(g,v,x)=>async function(N,L,S,w){let k=L.view.ma(S);k.ns&&(k=await Jm(N.localStore,L.query,!1).then(({documents:E})=>L.view.ma(E,k)));const O=w&&w.targetChanges.get(L.targetId),B=w&&w.targetMismatches.get(L.targetId)!=null,U=L.view.applyChanges(k,N.isPrimaryClient,O,B);return og(N,L.targetId,U.wa),U.snapshot}(t,g,v,x);const s=await Jm(t.localStore,e,!0),o=new Tx(e,s.Ts),l=o.ma(s.documents),u=_o.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);og(t,n,h.wa);const f=new Ix(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function Cx(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!$l(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await wh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Bd(r.remoteStore,i.targetId),Th(r,i.targetId)}).catch(go)):(Th(r,i.targetId),await wh(r.localStore,i.targetId,!0))}async function Px(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bd(n.remoteStore,r.targetId))}async function Nx(t,e,n){const r=jx(t);try{const i=await function(o,l){const u=Z(o),h=De.now(),f=l.reduce((x,P)=>x.add(P.key),re());let g,v;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let P=En(),N=re();return u.cs.getEntries(x,f).next(L=>{P=L,P.forEach((S,w)=>{w.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,P)).next(L=>{g=L;const S=[];for(const w of l){const k=Y1(w,g.get(w.key).overlayedDocument);k!=null&&S.push(new zr(w.key,k,y_(k.value.mapValue),Kt.exists(!0)))}return u.mutationQueue.addMutationBatch(x,h,S,l)}).next(L=>{v=L;const S=L.applyToLocalDocumentSet(g,N);return u.documentOverlayCache.saveOverlays(x,L.batchId,S)})}).then(()=>({batchId:v.batchId,changes:R_(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Te(le)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Eo(r,i.changes),await Yl(r.remoteStore)}catch(i){const s=Kd(i,"Failed to persist write");n.reject(s)}}async function o0(t,e){const n=Z(t);try{const r=await $A(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ce(o.va):i.removedDocuments.size>0&&(ce(o.va),o.va=!1))}),await Eo(n,r,e)}catch(r){await go(r)}}function sg(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const v of g.j_)v.Z_(l)&&(h=!0)}),h&&Gd(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Dx(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Te(G.comparator);o=o.insert(s,Je.newNoDocument(s,J.min()));const l=re().add(s),u=new Kl(J.min(),new Map,new Te(le),o,l);await o0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Qd(r)}else await wh(r.localStore,e,!1).then(()=>Th(r,e,n)).catch(go)}async function Vx(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await BA(n.localStore,e);l0(n,r,null),a0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Eo(n,i)}catch(i){await go(i)}}async function Ox(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(ce(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);l0(r,e,n),a0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Eo(r,i)}catch(i){await go(i)}}function a0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function l0(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Th(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||u0(t,r)})}function u0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Bd(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Qd(t))}function og(t,e,n){for(const r of n)r instanceof r0?(t.La.addReference(r.key,e),bx(t,r)):r instanceof i0?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||u0(t,r.key)):X()}function bx(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),Qd(t))}function Qd(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(ve.fromString(e)),r=t.qa.next();t.Na.set(r,new Sx(n)),t.Oa=t.Oa.insert(n,r),X_(t.remoteStore,new $n(Wt(S_(n.path)),r,"TargetPurposeLimboResolution",Rd.oe))}}async function Eo(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=zd.Wi(u.targetId,h);s.push(g)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>M.forEach(h,v=>M.forEach(v.$i,x=>f.persistence.referenceDelegate.addReference(g,v.targetId,x)).next(()=>M.forEach(v.Ui,x=>f.persistence.referenceDelegate.removeReference(g,v.targetId,x)))))}catch(g){if(!yo(g))throw g;W("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const v=g.targetId;if(!g.fromCache){const x=f.os.get(v),P=x.snapshotVersion,N=x.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(v,N)}}}(r.localStore,s))}async function Lx(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await K_(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new K(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Eo(n,r.hs)}}function Mx(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return re().add(r.key);{let i=re();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function c0(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=o0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Dx.bind(null,e),e.Ca.d_=_x.bind(null,e.eventManager),e.Ca.$a=wx.bind(null,e.eventManager),e}function jx(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ox.bind(null,e),e}class gl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return zA(this.persistence,new FA,e.initialUser,this.serializer)}Ga(e){return new LA(Ud.Zr,this.serializer)}Wa(e){return new GA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gl.provider={build:()=>new gl};class Ih{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lx.bind(null,this.syncEngine),await px(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gx}()}createDatastore(e){const n=Gl(e.databaseInfo.databaseId),r=function(s){return new JA(s)}(e.databaseInfo);return function(s,o,l,u){return new tx(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new rx(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>sg(this.syncEngine,n,0),function(){return eg.D()?new eg:new QA}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const g=new Ax(i,s,o,l,u,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await wo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ih.provider={build:()=>new Ih};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=p_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Kd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ac(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await K_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ag(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zx(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>tg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>tg(e.remoteStore,i)),t._onlineComponents=e}async function zx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await ac(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ci("Error using user provided cache. Falling back to memory cache: "+n),await ac(t,new gl)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await ac(t,new gl);return t._offlineComponents}async function h0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await ag(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await ag(t,new Ih))),t._onlineComponents}function Bx(t){return h0(t).then(e=>e.syncEngine)}async function $x(t){const e=await h0(t),n=e.eventManager;return n.onListen=xx.bind(null,e.syncEngine),n.onUnlisten=Cx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=kx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Px.bind(null,e.syncEngine),n}function Hx(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new Fx({next:v=>{f.Za(),o.enqueueAndForget(()=>vx(s,g)),v.fromCache&&u.source==="server"?h.reject(new K(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(v)},error:v=>h.reject(v)}),g=new Ex(l,f,{includeMetadataChanges:!0,_a:!0});return yx(s,g)}(await $x(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t,e,n){if(!n)throw new K(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qx(t,e,n,r){if(e===!0&&r===!0)throw new K(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ug(t){if(!G.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cg(t){if(G.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function bi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yd(t);throw new K(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=d0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new i1;switch(r.type){case"firstParty":return new l1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=lg.get(n);r&&(W("ComponentProvider","Removing Datastore"),lg.delete(n),r.terminate())}(this),Promise.resolve()}}function Wx(t,e,n,r={}){var i;const s=(t=bi(t,Xl))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ci("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ye.MOCK_USER;else{l=DI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new K(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ye(h)}t._authCredentials=new s1(new f_(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jl(this.firestore,e,this._query)}}class xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class nr extends Jl{constructor(e,n,r){super(e,n,S_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new G(e))}withConverter(e){return new nr(this.firestore,e,this._path)}}function dg(t,e,...n){if(t=Ut(t),f0("collection","path",e),t instanceof Xl){const r=ve.fromString(e,...n);return cg(r),new nr(t,null,r)}{if(!(t instanceof xt||t instanceof nr))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return cg(r),new nr(t.firestore,null,r)}}function ps(t,e,...n){if(t=Ut(t),arguments.length===1&&(e=p_.newId()),f0("doc","path",e),t instanceof Xl){const r=ve.fromString(e,...n);return ug(r),new xt(t,null,new G(r))}{if(!(t instanceof xt||t instanceof nr))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return ug(r),new xt(t.firestore,t instanceof nr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Q_(this,"async_queue_retry"),this.Vu=()=>{const r=oc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=oc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new tr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!yo(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Wd.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Zl extends Xl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new fg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fg(e),this._firestoreClient=void 0,await e}}}function Kx(t,e){const n=typeof t=="object"?t:i_(),r=typeof t=="string"?t:"(default)",i=xd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=PI("firestore");s&&Wx(i,...s)}return i}function p0(t){if(t._terminated)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Gx(t),t._firestoreClient}function Gx(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new E1(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,d0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Ux(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Li($e.fromBase64String(e))}catch(n){throw new K(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Li($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=/^__.*__$/;class Yx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new vo(e,this.data,n,this.fieldTransforms)}}function g0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class ef{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ef(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return yl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(g0(this.Cu)&&Qx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Xx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Gl(e)}Qu(e,n,r,i=!1){return new ef({Cu:e,methodName:n,qu:r,path:Fe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jx(t){const e=t._freezeSettings(),n=Gl(t._databaseId);return new Xx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Zx(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);w0("Data must be an object, but it was:",o,r);const l=v0(r,o);let u,h;if(s.merge)u=new bt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const v=ek(e,g,n);if(!o.contains(v))throw new K(j.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);nk(f,v)||f.push(v)}u=new bt(f),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new Yx(new It(l),u,h)}function y0(t,e){if(_0(t=Ut(t)))return w0("Unsupported field value:",e,t),v0(t,e);if(t instanceof m0)return function(r,i){if(!g0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=y0(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return H1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=De.fromDate(r);return{timestampValue:pl(i.serializer,s)}}if(r instanceof De){const s=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pl(i.serializer,s)}}if(r instanceof Jd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Li)return{bytesValue:U_(i.serializer,r._byteString)};if(r instanceof xt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:jd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Zd)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Od(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Yd(r)}`)}(t,e)}function v0(t,e){const n={};return m_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bi(t,(r,i)=>{const s=y0(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function _0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Jd||t instanceof Li||t instanceof xt||t instanceof m0||t instanceof Zd)}function w0(t,e,n){if(!_0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Yd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function ek(t,e,n){if((e=Ut(e))instanceof Xd)return e._internalPath;if(typeof e=="string")return E0(t,e);throw yl("Field path arguments must be of type string or ",t,!1,void 0,n)}const tk=new RegExp("[~\\*/\\[\\]]");function E0(t,e,n){if(e.search(tk)>=0)throw yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xd(...e.split("."))._internalPath}catch{throw yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(j.INVALID_ARGUMENT,l+t+u)}function nk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(I0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rk extends T0{data(){return super.data()}}function I0(t,e){return typeof e=="string"?E0(t,e):e instanceof Xd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sk{convertValue(e,n="none"){switch(Mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Bi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ae(o.doubleValue));return new Zd(s)}convertGeoPoint(e){return new Jd(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(no(e));default:return null}}convertTimestamp(e){const n=ar(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);ce(W_(r));const i=new ro(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ak extends T0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Na(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(I0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Na extends ak{data(e={}){return super.data(e)}}class lk{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ca(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Na(this._firestore,this._userDataWriter,r.key,r,new ca(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Na(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ca(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Na(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ca(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:uk(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class ck extends sk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Li(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function pg(t){t=bi(t,Jl);const e=bi(t.firestore,Zl),n=p0(e),r=new ck(e);return ik(t._query),Hx(n,t._query).then(i=>new lk(e,r,t,i))}function mg(t,e,n){t=bi(t,xt);const r=bi(t.firestore,Zl),i=ok(t.converter,e);return S0(r,[Zx(Jx(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Kt.none())])}function lc(t){return S0(bi(t.firestore,Zl),[new bd(t._key,Kt.none())])}function S0(t,e){return function(r,i){const s=new tr;return r.asyncQueue.enqueueAndForget(async()=>Nx(await Bx(r),i,s)),s.promise}(p0(t),e)}(function(e,n=!0){(function(i){zi=i})(Ui),Ri(new Or("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Zl(new o1(r.getProvider("auth-internal")),new c1(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ro(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),er(Nm,"4.7.3",e),er(Nm,"4.7.3","esm2017")})();function tf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function A0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hk=A0,x0=new po("auth","Firebase",A0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=new Sd("@firebase/auth");function dk(t,...e){vl.logLevel<=ie.WARN&&vl.warn(`Auth (${Ui}): ${t}`,...e)}function Da(t,...e){vl.logLevel<=ie.ERROR&&vl.error(`Auth (${Ui}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,...e){throw nf(t,...e)}function Qt(t,...e){return nf(t,...e)}function k0(t,e,n){const r=Object.assign(Object.assign({},hk()),{[e]:n});return new po("auth","Firebase",r).create(e,{appName:t.name})}function rr(t){return k0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return x0.create(t,...e)}function Y(t,e,...n){if(!t)throw nf(e,...n)}function hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Da(e),new Error(e)}function In(t,e){t||hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fk(){return gg()==="http:"||gg()==="https:"}function gg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fk()||LI()||"connection"in navigator)?navigator.onLine:!0}function mk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=VI()||MI()}get(){return pk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=new To(3e4,6e4);function eu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qi(t,e,n,r,i={}){return C0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=mo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return bI()||(h.referrerPolicy="no-referrer"),R0.fetch()(N0(t,t.config.apiHost,n,l),h)})}async function C0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gk),e);try{const i=new vk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ha(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ha(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ha(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ha(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw k0(t,f,h);Tn(t,f)}}catch(i){if(i instanceof An)throw i;Tn(t,"network-request-failed",{message:String(i)})}}async function P0(t,e,n,r,i={}){const s=await qi(t,e,n,r,i);return"mfaPendingCredential"in s&&Tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function N0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?rf(t.config,i):`${t.config.apiScheme}://${i}`}class vk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),yk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ha(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _k(t,e){return qi(t,"POST","/v1/accounts:delete",e)}async function D0(t,e){return qi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wk(t,e=!1){const n=Ut(t),r=await n.getIdToken(e),i=sf(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bs(uc(i.auth_time)),issuedAtTime:bs(uc(i.iat)),expirationTime:bs(uc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function uc(t){return Number(t)*1e3}function sf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Da("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xv(n);return i?JSON.parse(i):(Da("Failed to decode base64 JWT payload"),null)}catch(i){return Da("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yg(t){const e=sf(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&Ek(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ek({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bs(this.lastLoginAt),this.creationTime=bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ao(t,D0(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?V0(s.providerUserInfo):[],l=Sk(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ah(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function Ik(t){const e=Ut(t);await _l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function V0(t){return t.map(e=>{var{providerId:n}=e,r=tf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(t,e){const n=await C0(t,{},async()=>{const r=mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=N0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",R0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xk(t,e){return qi(t,"POST","/v2/accounts:revokeToken",eu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=yg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ak(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new vi;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=tf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ah(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ao(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wk(this,e)}reload(){return Ik(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _l(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await ao(this,_k(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,x=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(h=n.createdAt)!==null&&h!==void 0?h:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:O,isAnonymous:B,providerData:U,stsTokenManager:E}=n;Y(k&&E,e,"internal-error");const m=vi.fromJSON(this.name,E);Y(typeof k=="string",e,"internal-error"),Pn(g,e.name),Pn(v,e.name),Y(typeof O=="boolean",e,"internal-error"),Y(typeof B=="boolean",e,"internal-error"),Pn(x,e.name),Pn(P,e.name),Pn(N,e.name),Pn(L,e.name),Pn(S,e.name),Pn(w,e.name);const _=new dn({uid:k,auth:e,email:v,emailVerified:O,displayName:g,isAnonymous:B,photoURL:P,phoneNumber:x,tenantId:N,stsTokenManager:m,createdAt:S,lastLoginAt:w});return U&&Array.isArray(U)&&(_.providerData=U.map(T=>Object.assign({},T))),L&&(_._redirectEventId=L),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new vi;i.updateFromServerResponse(n);const s=new dn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _l(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?V0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new vi;l.updateFromIdToken(r);const u=new dn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ah(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=new Map;function fn(t){In(t instanceof Function,"Expected a class definition");let e=vg.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}O0.type="NONE";const _g=O0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t,e,n){return`firebase:${t}:${e}:${n}`}class _i{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Va(this.userKey,i.apiKey,s),this.fullPersistenceKey=Va("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _i(fn(_g),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||fn(_g);const o=Va(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const g=dn._fromJSON(e,f);h!==s&&(l=g),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new _i(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new _i(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(j0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(b0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(U0(e))return"Blackberry";if(z0(e))return"Webos";if(L0(e))return"Safari";if((e.includes("chrome/")||M0(e))&&!e.includes("edge/"))return"Chrome";if(F0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function b0(t=et()){return/firefox\//i.test(t)}function L0(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function M0(t=et()){return/crios\//i.test(t)}function j0(t=et()){return/iemobile/i.test(t)}function F0(t=et()){return/android/i.test(t)}function U0(t=et()){return/blackberry/i.test(t)}function z0(t=et()){return/webos/i.test(t)}function of(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kk(t=et()){var e;return of(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rk(){return jI()&&document.documentMode===10}function B0(t=et()){return of(t)||F0(t)||z0(t)||U0(t)||/windows phone/i.test(t)||j0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t,e=[]){let n;switch(t){case"Browser":n=wg(et());break;case"Worker":n=`${wg(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ui}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pk(t,e={}){return qi(t,"GET","/v2/passwordPolicy",eu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=6;class Dk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Nk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Eg(this),this.idTokenSubscription=new Eg(this),this.beforeStateQueue=new Ck(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=x0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _i.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await D0(this,{idToken:e}),r=await dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(rr(this));const n=e?Ut(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Pk(this),n=new Dk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new po("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function tu(t){return Ut(t)}class Eg{constructor(e){this.auth=e,this.observer=null,this.addObserver=WI(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let af={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ok(t){af=t}function bk(t){return af.loadJS(t)}function Lk(){return af.gapiScript}function Mk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(t,e){const n=xd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(al(s,e??{}))return i;Tn(i,"already-initialized")}return n.initialize({options:e})}function Fk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Uk(t,e,n){const r=tu(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=H0(e),{host:o,port:l}=zk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Bk()}function H0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zk(t){const e=H0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Tg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Tg(o)}}}function Tg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t,e){return P0(t,"POST","/v1/accounts:signInWithIdp",eu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="http://localhost";class jr extends q0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=tf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new jr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wi(e,n)}buildRequest(){const e={requestUri:$k,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends W0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Io{constructor(){super("facebook.com")}static credential(e){return jr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Io{constructor(){super("github.com")}static credential(e){return jr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Io{constructor(){super("twitter.com")}static credential(e,n){return jr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(t,e){return P0(t,"POST","/v1/accounts:signUp",eu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dn._fromIdTokenResponse(e,r,i),o=Ig(r);return new ur({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ig(r);return new ur({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ig(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K0(t){var e;if(cn(t.app))return Promise.reject(rr(t));const n=tu(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new ur({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Hk(n,{returnSecureToken:!0}),i=await ur._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends An{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wl(e,n,r,i)}}function G0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wl._fromErrorAndOperation(t,s,e,r):s})}async function qk(t,e,n=!1){const r=await ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ur._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(rr(r));const i="reauthenticate";try{const s=await ao(t,G0(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=sf(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),ur._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(t,e,n=!1){if(cn(t.app))return Promise.reject(rr(t));const r="signIn",i=await G0(t,r,e),s=await ur._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Gk(t,e,n,r){return Ut(t).onIdTokenChanged(e,n,r)}function Qk(t,e,n){return Ut(t).beforeAuthStateChanged(e,n)}const El="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(El,"1"),this.storage.removeItem(El),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=1e3,Xk=10;class Y0 extends Q0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=B0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Rk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Xk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Yk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Y0.type="LOCAL";const Jk=Y0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0 extends Q0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X0.type="SESSION";const J0=X0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new nu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await Zk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=lf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const v=g;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function tR(t){Yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function nR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iR(){return Z0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="firebaseLocalStorageDb",sR=1,Tl="firebaseLocalStorage",tw="fbase_key";class So{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ru(t,e){return t.transaction([Tl],e?"readwrite":"readonly").objectStore(Tl)}function oR(){const t=indexedDB.deleteDatabase(ew);return new So(t).toPromise()}function xh(){const t=indexedDB.open(ew,sR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tl,{keyPath:tw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tl)?e(r):(r.close(),await oR(),e(await xh()))})})}async function Sg(t,e,n){const r=ru(t,!0).put({[tw]:e,value:n});return new So(r).toPromise()}async function aR(t,e){const n=ru(t,!1).get(e),r=await new So(n).toPromise();return r===void 0?null:r.value}function Ag(t,e){const n=ru(t,!0).delete(e);return new So(n).toPromise()}const lR=800,uR=3;class nw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Z0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nu._getInstance(iR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nR(),!this.activeServiceWorker)return;this.sender=new eR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xh();return await Sg(e,El,"1"),await Ag(e,El),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ag(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ru(i,!1).getAll();return new So(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nw.type="LOCAL";const cR=nw;new To(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t,e){return e?fn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf extends q0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dR(t){return Kk(t.auth,new uf(t),t.bypassAuthState)}function fR(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),Wk(n,new uf(t),t.bypassAuthState)}async function pR(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),qk(n,new uf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dR;case"linkViaPopup":case"linkViaRedirect":return pR;case"reauthViaPopup":case"reauthViaRedirect":return fR;default:Tn(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=new To(2e3,1e4);class ci extends rw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mR.get())};e()}}ci.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR="pendingRedirect",Oa=new Map;class yR extends rw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oa.get(this.auth._key());if(!e){try{const r=await vR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oa.set(this.auth._key(),e)}return this.bypassAuthState||Oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vR(t,e){const n=ER(e),r=wR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _R(t,e){Oa.set(t._key(),e)}function wR(t){return fn(t._redirectPersistence)}function ER(t){return Va(gR,t.config.apiKey,t.name)}async function TR(t,e,n=!1){if(cn(t.app))return Promise.reject(rr(t));const r=tu(t),i=hR(r,e),o=await new yR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=10*60*1e3;class SR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IR&&this.cachedEventUids.clear(),this.cachedEventUids.has(xg(e))}saveEventToCache(e){this.cachedEventUids.add(xg(e)),this.lastProcessedEventTime=Date.now()}}function xg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(t,e={}){return qi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RR=/^https?/;async function CR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xR(t);for(const n of e)try{if(PR(n))return}catch{}Tn(t,"unauthorized-domain")}function PR(t){const e=Sh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RR.test(n))return!1;if(kR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=new To(3e4,6e4);function kg(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DR(t){return new Promise((e,n)=>{var r,i,s;function o(){kg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kg(),n(Qt(t,"network-request-failed"))},timeout:NR.get()})}if(!((i=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yt().gapi)===null||s===void 0)&&s.load)o();else{const l=Mk("iframefcb");return Yt()[l]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},bk(`${Lk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ba=null,e})}let ba=null;function VR(t){return ba=ba||DR(t),ba}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=new To(5e3,15e3),bR="__/auth/iframe",LR="emulator/auth/iframe",MR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FR(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rf(e,LR):`https://${t.config.authDomain}/${bR}`,r={apiKey:e.apiKey,appName:t.name,v:Ui},i=jR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${mo(r).slice(1)}`}async function UR(t){const e=await VR(t),n=Yt().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:FR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),l=Yt().setTimeout(()=>{s(o)},OR.get());function u(){Yt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BR=500,$R=600,HR="_blank",qR="http://localhost";class Rg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WR(t,e,n,r=BR,i=$R){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},zR),{width:r.toString(),height:i.toString(),top:s,left:o}),h=et().toLowerCase();n&&(l=M0(h)?HR:n),b0(h)&&(e=e||qR,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[x,P])=>`${v}${x}=${P},`,"");if(kk(h)&&l!=="_self")return KR(e||"",l),new Rg(null);const g=window.open(e||"",l,f);Y(g,t,"popup-blocked");try{g.focus()}catch{}return new Rg(g)}function KR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR="__/auth/handler",QR="emulator/auth/handler",YR=encodeURIComponent("fac");async function Cg(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ui,eventId:i};if(e instanceof W0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof Io){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${YR}=${encodeURIComponent(u)}`:"";return`${XR(t)}?${mo(l).slice(1)}${h}`}function XR({config:t}){return t.emulator?rf(t,QR):`https://${t.authDomain}/${GR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="webStorageSupport";class JR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=J0,this._completeRedirectFn=TR,this._overrideRedirectResult=_R}async _openPopup(e,n,r,i){var s;In((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Cg(e,n,r,Sh(),i);return WR(e,o,lf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Cg(e,n,r,Sh(),i);return tR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(In(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UR(e),r=new SR(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cc,{type:cc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[cc];o!==void 0&&n(!!o),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return B0()||L0()||of()}}const ZR=JR;var Pg="@firebase/auth",Ng="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nC(t){Ri(new Or("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$0(t)},h=new Vk(r,i,s,u);return Fk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ri(new Or("auth-internal",e=>{const n=tu(e.getProvider("auth").getImmediate());return(r=>new eC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(Pg,Ng,tC(t)),er(Pg,Ng,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=5*60,iC=e_("authIdTokenMaxAge")||rC;let Dg=null;const sC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iC)return;const i=n==null?void 0:n.token;Dg!==i&&(Dg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oC(t=i_()){const e=xd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jk(t,{popupRedirectResolver:ZR,persistence:[cR,Jk,J0]}),r=e_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=sC(s.toString());Qk(n,o,()=>o(n.currentUser)),Gk(n,l=>o(l))}}const i=Jv("auth");return i&&Uk(n,`http://${i}`),n}function aC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ok({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",aC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nC("Browser");const lC={apiKey:"AIzaSyDzQe4eMAjKEeJoI45Bc6V4-FxnMQgMoaw",authDomain:"lekto-ferias.firebaseapp.com",projectId:"lekto-ferias",storageBucket:"lekto-ferias.firebasestorage.app",messagingSenderId:"1035929804656",appId:"1:1035929804656:web:a0b9c769702b70ca4d79b5"},sw=r_(lC),vr=Kx(sw),kh=oC(sw),Dn=new Date,Ls=45,Rh=15,hc=6;function Lt(t){if(t instanceof Date)return t;const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)}function uC(t,e){const n=Lt(t),r=Lt(e);let i=(r.getFullYear()-n.getFullYear())*12+(r.getMonth()-n.getMonth());return r.getDate()<n.getDate()&&i--,Math.max(0,i)}function Il(t,e){const n=Lt(t),r=Lt(e);return Math.round((r-n)/(1e3*60*60*24))+1}function cC(t,e){const n=uC(t.dataAdmissao,Dn),r=Math.floor(n/hc),i=r*Rh,s=e.reduce((P,N)=>P+Il(N.dataInicio,N.dataFim),0),o=i-s,l=Lt(t.dataAdmissao),u=[];for(let P=1;P<=r;P++){const N=new Date(l);N.setMonth(l.getMonth()+P*hc),u.push({data:N,dias:Rh,tipo:"aquisicao"})}e.forEach(P=>{u.push({data:Lt(P.dataInicio),dias:-Il(P.dataInicio,P.dataFim),tipo:"uso"})}),u.sort((P,N)=>P.data-N.data);let h=0,f=0;u.forEach(P=>{if(P.tipo==="aquisicao"){const N=h;h=Math.min(Ls,h+P.dias),f+=P.dias-(h-N)}else h=Math.max(0,h+P.dias)});const g=h,v=new Date(l);v.setMonth(l.getMonth()+(r+1)*hc);let x="saudavel";return g>=Ls?x="critico":g>=35&&(x="atencao"),{totalAdquirido:i,totalUsufruido:s,saldoBruto:o,saldoEfetivo:g,diasPerdidos:f,periodosCompletos:r,proxAquisitivo:v,status:x,tempoEmpresa:n}}function Nn(t){return t?Lt(t).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—"}function hC({onLogin:t}){const[e,n]=ne.useState(""),[r,i]=ne.useState(!1),[s,o]=ne.useState("Senha incorreta"),[l,u]=ne.useState(!1),h=async()=>{if(e!=="lekto2024"){o("Senha incorreta"),i(!0),n("");return}u(!0);try{await K0(kh),sessionStorage.setItem("lekto:auth","1"),t()}catch(f){console.error("Falha ao autenticar no Firebase:",f),o("Não foi possível conectar. Tente novamente."),i(!0),n("")}finally{u(!1)}};return y.jsx("div",{className:"min-h-screen bg-slate-50 flex items-center justify-center p-4",children:y.jsxs("div",{className:"bg-white rounded-2xl border border-slate-200 shadow-xl w-full max-w-sm p-8",children:[y.jsxs("div",{className:"flex flex-col items-center mb-8",children:[y.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center mb-4",children:y.jsx(Kv,{className:"w-6 h-6 text-white",strokeWidth:2.5})}),y.jsx("h1",{className:"text-xl font-bold text-slate-900",children:"Gestão de Férias"}),y.jsx("p",{className:"text-sm text-slate-500 mt-1",children:"Lekto Educação · RH"})]}),y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"text-xs font-medium text-slate-700 mb-1 block",children:"Senha de acesso"}),y.jsxs("div",{className:"relative",children:[y.jsx(yI,{className:"w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),y.jsx("input",{type:"password",value:e,onChange:f=>{n(f.target.value),i(!1)},onKeyDown:f=>f.key==="Enter"&&h(),className:`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${r?"border-rose-400":"border-slate-200"}`,placeholder:"••••••••",autoFocus:!0})]}),r&&y.jsx("p",{className:"text-xs text-rose-600 mt-1",children:s})]}),y.jsx("button",{onClick:h,disabled:l,className:"w-full py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition disabled:opacity-60",children:l?"Entrando...":"Entrar"})]})]})})}function dC(){const[t,e]=ne.useState(()=>sessionStorage.getItem("lekto:auth")==="1"),[n,r]=ne.useState([]),[i,s]=ne.useState([]),[o,l]=ne.useState(!0),[u,h]=ne.useState("dashboard"),[f,g]=ne.useState(null),[v,x]=ne.useState(!1),[P,N]=ne.useState(!1),[L,S]=ne.useState(""),[w,k]=ne.useState("todos"),[O,B]=ne.useState(null),[U,E]=ne.useState(0);ne.useEffect(()=>{if(!t)return;async function V(){l(!0),B(null);try{kh.currentUser||await K0(kh);const[b,$]=await Promise.all([pg(dg(vr,"colaboradores")),pg(dg(vr,"ferias"))]);r(b.docs.map(q=>{const Q=q.data();return{id:q.id,nome:Q.nome,cargo:Q.cargo,time:Q.time,email:Q.email,dataAdmissao:Q.dataAdmissao,status:Q.status}})),s($.docs.map(q=>{const Q=q.data();return{id:q.id,colaboradorId:Q.colaboradorId,dataInicio:Q.dataInicio,dataFim:Q.dataFim,observacao:Q.observacao||""}}))}catch(b){console.error("Falha ao carregar dados do Firestore:",b),B("Não foi possível carregar os dados. Verifique sua conexão e tente novamente.")}finally{l(!1)}}V()},[t,U]);const m=()=>{sessionStorage.removeItem("lekto:auth"),e(!1)},_=ne.useMemo(()=>n.map(V=>{const b=cC(V,i.filter($=>$.colaboradorId===V.id));return{...V,...b,statusSaldo:b.status,status:V.status}}),[n,i]),T=ne.useMemo(()=>_.filter(V=>{const b=V.nome.toLowerCase().includes(L.toLowerCase())||V.cargo.toLowerCase().includes(L.toLowerCase()),$=w==="todos"||V.time===w;return b&&$&&V.status==="ativo"}),[_,L,w]),A=ne.useMemo(()=>{const V=_.filter(ee=>ee.status==="ativo"),b=V.reduce((ee,fe)=>ee+fe.saldoEfetivo,0),$=V.filter(ee=>ee.statusSaldo==="critico").length,q=V.filter(ee=>ee.statusSaldo==="atencao").length,Q=i.filter(ee=>{const fe=Lt(ee.dataInicio),Ct=Lt(ee.dataFim);return fe<=Dn&&Dn<=Ct}).length;return{totalAtivos:V.length,totalDias:b,criticos:$,atencao:q,emFerias:Q}},[_,i]),R=async V=>{const b="f"+Date.now();await mg(ps(vr,"ferias",b),{colaboradorId:V.colaboradorId,dataInicio:V.dataInicio,dataFim:V.dataFim,observacao:V.observacao||""}),s($=>[...$,{id:b,...V}]),x(!1)},I=async V=>{const b=String(Date.now());await mg(ps(vr,"colaboradores",b),{nome:V.nome,email:V.email,cargo:V.cargo,time:V.time,dataAdmissao:V.dataAdmissao,status:"ativo"}),r($=>[...$,{id:b,status:"ativo",...V}]),N(!1)},lt=async V=>{await lc(ps(vr,"ferias",V)),s(b=>b.filter($=>$.id!==V))},Zt=async V=>{const b=n.find(q=>q.id===V);if(!b||!window.confirm(`Excluir ${b.nome}? Todos os registros de férias também serão removidos.`))return;const $=i.filter(q=>q.colaboradorId===V);await Promise.all($.map(q=>lc(ps(vr,"ferias",q.id)))),await lc(ps(vr,"colaboradores",V)),r(q=>q.filter(Q=>Q.id!==V)),s(q=>q.filter(Q=>Q.colaboradorId!==V)),g(null)},fr=()=>{const V=["Nome,Cargo,Time,Admissão,Adquirido,Usufruído,Saldo,Status"];_.forEach(Q=>{V.push([Q.nome,Q.cargo,Q.time,Nn(Q.dataAdmissao),Q.totalAdquirido,Q.totalUsufruido,Q.saldoEfetivo,Q.statusSaldo].join(","))});const b=new Blob([V.join(`
`)],{type:"text/csv"}),$=URL.createObjectURL(b),q=document.createElement("a");q.href=$,q.download="ferias_lekto_"+new Date().toISOString().slice(0,10)+".csv",q.click()};return t?O?y.jsx("div",{className:"min-h-screen bg-slate-50 flex items-center justify-center p-4",children:y.jsxs("div",{className:"text-center max-w-sm",children:[y.jsx(ui,{className:"w-8 h-8 text-rose-500 mx-auto mb-3"}),y.jsx("p",{className:"text-sm text-slate-700 mb-4",children:O}),y.jsx("button",{onClick:()=>E(V=>V+1),className:"px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition",children:"Tentar novamente"})]})}):o?y.jsx("div",{className:"min-h-screen bg-slate-50 flex items-center justify-center",children:y.jsxs("div",{className:"text-center",children:[y.jsx("div",{className:"w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"}),y.jsx("p",{className:"text-sm text-slate-500",children:"Carregando dados..."})]})}):y.jsxs("div",{className:"min-h-screen bg-slate-50 font-sans",children:[y.jsxs("header",{className:"bg-white border-b border-slate-200 sticky top-0 z-10",children:[y.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center",children:y.jsx(Kv,{className:"w-5 h-5 text-white",strokeWidth:2.5})}),y.jsxs("div",{children:[y.jsx("h1",{className:"text-lg font-bold text-slate-900 tracking-tight",children:"Gestão de Férias"}),y.jsx("p",{className:"text-xs text-slate-500 -mt-0.5",children:"Lekto Educação · RH"})]})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("button",{onClick:fr,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition",children:[y.jsx(mI,{className:"w-4 h-4"})," Exportar"]}),y.jsx("div",{className:"w-px h-6 bg-slate-200"}),y.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100",children:[y.jsx("div",{className:"w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-700",children:"RH"}),y.jsx("span",{className:"text-sm text-slate-700 font-medium",children:"Recursos Humanos"})]}),y.jsx("button",{onClick:m,className:"p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition",title:"Sair",children:y.jsx(vI,{className:"w-4 h-4"})})]})]}),y.jsx("nav",{className:"max-w-7xl mx-auto px-6 flex gap-1",children:[{id:"dashboard",label:"Dashboard"},{id:"colaboradores",label:"Colaboradores"}].map(V=>y.jsx("button",{onClick:()=>{h(V.id),g(null)},className:`px-4 py-3 text-sm font-medium border-b-2 transition ${u===V.id&&!f?"border-indigo-600 text-indigo-600":"border-transparent text-slate-600 hover:text-slate-900"}`,children:V.label},V.id))})]}),y.jsxs("main",{className:"max-w-7xl mx-auto px-6 py-8",children:[u==="dashboard"&&!f&&y.jsxs("div",{children:[y.jsx("h2",{className:"text-2xl font-bold text-slate-900 mb-1",children:"Visão geral"}),y.jsxs("p",{className:"text-sm text-slate-500 mb-6",children:["Dados atualizados em ",Nn(Dn)]}),y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",children:[y.jsx(da,{icon:TI,cor:"indigo",label:"Colaboradores ativos",valor:A.totalAtivos}),y.jsx(da,{icon:EI,cor:"emerald",label:"Dias em haver",valor:A.totalDias,sufixo:"dias"}),y.jsx(da,{icon:Gv,cor:"sky",label:"Em férias agora",valor:A.emFerias}),y.jsx(da,{icon:ui,cor:"amber",label:"Atenção ao teto",valor:A.criticos+A.atencao,hint:`${A.criticos} crítico(s) · ${A.atencao} atenção`})]}),(A.criticos>0||A.atencao>0)&&y.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 mb-6 overflow-hidden",children:[y.jsxs("div",{className:"px-5 py-4 border-b border-slate-200 flex items-center justify-between",children:[y.jsxs("div",{children:[y.jsxs("h3",{className:"font-semibold text-slate-900",children:["Colaboradores próximos ao teto de ",Ls," dias"]}),y.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:"Ação recomendada: agendar férias para evitar perda de dias"})]}),y.jsx(ui,{className:"w-5 h-5 text-amber-500"})]}),y.jsx("div",{className:"divide-y divide-slate-100",children:_.filter(V=>V.status==="ativo"&&(V.statusSaldo==="critico"||V.statusSaldo==="atencao")).sort((V,b)=>b.saldoEfetivo-V.saldoEfetivo).slice(0,5).map(V=>y.jsxs("button",{onClick:()=>g(V.id),className:"w-full px-5 py-3 flex items-center justify-between hover:bg-slate-50 transition text-left",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx(fa,{nome:V.nome}),y.jsxs("div",{children:[y.jsx("p",{className:"font-medium text-slate-900 text-sm",children:V.nome}),y.jsxs("p",{className:"text-xs text-slate-500",children:[V.cargo," · ",V.time]})]})]}),y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx(Vg,{saldo:V.saldoEfetivo,status:V.statusSaldo}),y.jsx(vm,{className:"w-4 h-4 text-slate-400"})]})]},V.id))})]}),y.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 overflow-hidden",children:[y.jsxs("div",{className:"px-5 py-4 border-b border-slate-200",children:[y.jsx("h3",{className:"font-semibold text-slate-900",children:"Próximos períodos aquisitivos (60 dias)"}),y.jsxs("p",{className:"text-xs text-slate-500 mt-0.5",children:["Colaboradores que vão receber +",Rh," dias em breve"]})]}),y.jsxs("div",{className:"divide-y divide-slate-100",children:[_.filter(V=>V.status==="ativo"&&(V.proxAquisitivo-Dn)/(1e3*60*60*24)<=60&&V.proxAquisitivo>=Dn).sort((V,b)=>V.proxAquisitivo-b.proxAquisitivo).slice(0,5).map(V=>y.jsxs("button",{onClick:()=>g(V.id),className:"w-full px-5 py-3 flex items-center justify-between hover:bg-slate-50 transition text-left",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx(fa,{nome:V.nome}),y.jsxs("div",{children:[y.jsx("p",{className:"font-medium text-slate-900 text-sm",children:V.nome}),y.jsxs("p",{className:"text-xs text-slate-500",children:[V.cargo," · ",V.time]})]})]}),y.jsxs("div",{className:"text-right",children:[y.jsx("p",{className:"text-sm font-medium text-slate-900",children:Nn(V.proxAquisitivo)}),y.jsx("p",{className:"text-xs text-emerald-600",children:"+15 dias"})]})]},V.id)),_.filter(V=>(V.proxAquisitivo-Dn)/(1e3*60*60*24)<=60&&V.proxAquisitivo>=Dn).length===0&&y.jsx("div",{className:"px-5 py-8 text-center text-sm text-slate-500",children:"Nenhum aquisitivo nos próximos 60 dias"})]})]})]}),u==="colaboradores"&&!f&&y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center justify-between mb-6",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Colaboradores"}),y.jsxs("p",{className:"text-sm text-slate-500 mt-1",children:[T.length," de ",_.length," colaboradores"]})]}),y.jsxs("button",{onClick:()=>N(!0),className:"flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition shadow-sm",children:[y.jsx(_m,{className:"w-4 h-4"})," Novo colaborador"]})]}),y.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 overflow-hidden",children:[y.jsxs("div",{className:"px-5 py-3 border-b border-slate-200 flex items-center gap-3",children:[y.jsxs("div",{className:"relative flex-1 max-w-xs",children:[y.jsx(_I,{className:"w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),y.jsx("input",{value:L,onChange:V=>S(V.target.value),placeholder:"Buscar por nome ou cargo...",className:"w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(gI,{className:"w-4 h-4 text-slate-400"}),y.jsxs("select",{value:w,onChange:V=>k(V.target.value),className:"text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[y.jsx("option",{value:"todos",children:"Todos os times"}),y.jsx("option",{value:"Tecnologia",children:"Tecnologia"}),y.jsx("option",{value:"Operações",children:"Operações"}),y.jsx("option",{value:"Administrativo",children:"Administrativo"}),y.jsx("option",{value:"Educação",children:"Educação"})]})]})]}),y.jsxs("table",{className:"w-full",children:[y.jsx("thead",{children:y.jsxs("tr",{className:"bg-slate-50 text-xs uppercase tracking-wider text-slate-500",children:[y.jsx("th",{className:"text-left px-5 py-3 font-medium",children:"Nome"}),y.jsx("th",{className:"text-left px-5 py-3 font-medium",children:"Time"}),y.jsx("th",{className:"text-left px-5 py-3 font-medium",children:"Admissão"}),y.jsx("th",{className:"text-left px-5 py-3 font-medium",children:"Adquirido"}),y.jsx("th",{className:"text-left px-5 py-3 font-medium",children:"Usufruído"}),y.jsx("th",{className:"text-left px-5 py-3 font-medium",children:"Saldo"}),y.jsx("th",{className:"w-10"})]})}),y.jsx("tbody",{className:"divide-y divide-slate-100",children:T.map(V=>y.jsxs("tr",{onClick:()=>g(V.id),className:"hover:bg-slate-50 cursor-pointer transition",children:[y.jsx("td",{className:"px-5 py-3",children:y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx(fa,{nome:V.nome}),y.jsxs("div",{children:[y.jsx("p",{className:"font-medium text-slate-900 text-sm",children:V.nome}),y.jsx("p",{className:"text-xs text-slate-500",children:V.cargo})]})]})}),y.jsx("td",{className:"px-5 py-3 text-sm text-slate-700",children:V.time}),y.jsx("td",{className:"px-5 py-3 text-sm text-slate-700",children:Nn(V.dataAdmissao)}),y.jsxs("td",{className:"px-5 py-3 text-sm text-slate-700",children:[V.totalAdquirido," dias"]}),y.jsxs("td",{className:"px-5 py-3 text-sm text-slate-700",children:[V.totalUsufruido," dias"]}),y.jsx("td",{className:"px-5 py-3",children:y.jsx(Vg,{saldo:V.saldoEfetivo,status:V.statusSaldo})}),y.jsx("td",{className:"px-2",children:y.jsx(vm,{className:"w-4 h-4 text-slate-400"})})]},V.id))})]})]})]}),f&&(()=>{const V=_.find($=>$.id===f);if(!V)return null;const b=i.filter($=>$.colaboradorId===V.id).sort(($,q)=>Lt(q.dataInicio)-Lt($.dataInicio));return y.jsxs("div",{children:[y.jsx("button",{onClick:()=>g(null),className:"text-sm text-slate-500 hover:text-slate-900 mb-4 flex items-center gap-1",children:"← Voltar"}),y.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-6 mb-6",children:[y.jsxs("div",{className:"flex items-start justify-between",children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx(fa,{nome:V.nome,grande:!0}),y.jsxs("div",{children:[y.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:V.nome}),y.jsxs("p",{className:"text-sm text-slate-500",children:[V.cargo," · ",V.time]}),y.jsx("p",{className:"text-xs text-slate-400 mt-1",children:V.email})]})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("button",{onClick:()=>Zt(V.id),className:"flex items-center gap-2 px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-lg transition border border-rose-200",children:[y.jsx(wI,{className:"w-4 h-4"})," Excluir"]}),y.jsxs("button",{onClick:()=>x(!0),className:"flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition shadow-sm",children:[y.jsx(_m,{className:"w-4 h-4"})," Registrar férias"]})]})]}),y.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100",children:[y.jsx(pa,{label:"Admissão",valor:Nn(V.dataAdmissao)}),y.jsx(pa,{label:"Tempo de casa",valor:`${Math.floor(V.tempoEmpresa/12)}a ${V.tempoEmpresa%12}m`}),y.jsx(pa,{label:"Períodos aquisitivos",valor:`${V.periodosCompletos} concluídos`}),y.jsx(pa,{label:"Próximo aquisitivo",valor:Nn(V.proxAquisitivo),destaque:"emerald"})]})]}),y.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-6 mb-6",children:[y.jsx("h3",{className:"font-semibold text-slate-900 mb-4",children:"Saldo de férias"}),y.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-4",children:[y.jsxs("div",{children:[y.jsx("p",{className:"text-xs text-slate-500",children:"Adquirido"}),y.jsx("p",{className:"text-2xl font-bold text-slate-900",children:V.totalAdquirido})]}),y.jsxs("div",{children:[y.jsx("p",{className:"text-xs text-slate-500",children:"Usufruído"}),y.jsx("p",{className:"text-2xl font-bold text-slate-900",children:V.totalUsufruido})]}),y.jsxs("div",{children:[y.jsx("p",{className:"text-xs text-slate-500",children:"Saldo atual"}),y.jsx("p",{className:`text-2xl font-bold ${V.statusSaldo==="critico"?"text-rose-600":V.statusSaldo==="atencao"?"text-amber-600":"text-emerald-600"}`,children:V.saldoEfetivo})]})]}),y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-500 mb-1",children:[y.jsx("span",{children:"0"}),y.jsxs("span",{children:["Teto: ",Ls," dias"]})]}),y.jsx("div",{className:"h-2 bg-slate-100 rounded-full overflow-hidden",children:y.jsx("div",{className:`h-full transition-all ${V.statusSaldo==="critico"?"bg-rose-500":V.statusSaldo==="atencao"?"bg-amber-500":"bg-emerald-500"}`,style:{width:`${Math.min(100,V.saldoEfetivo/Ls*100)}%`}})}),V.diasPerdidos>0&&y.jsxs("p",{className:"mt-2 text-xs text-rose-600 flex items-center gap-1",children:[y.jsx(ui,{className:"w-3 h-3"}),V.diasPerdidos," dia(s) já foram desconsiderados por exceder o teto"]})]})]}),y.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 overflow-hidden",children:[y.jsxs("div",{className:"px-5 py-4 border-b border-slate-200",children:[y.jsx("h3",{className:"font-semibold text-slate-900",children:"Histórico de férias"}),y.jsxs("p",{className:"text-xs text-slate-500 mt-0.5",children:[b.length," registro(s)"]})]}),b.length===0?y.jsx("div",{className:"px-5 py-12 text-center text-sm text-slate-500",children:"Nenhum período registrado ainda"}):y.jsxs("table",{className:"w-full",children:[y.jsx("thead",{children:y.jsxs("tr",{className:"bg-slate-50 text-xs uppercase tracking-wider text-slate-500",children:[y.jsx("th",{className:"text-left px-5 py-3 font-medium",children:"Período"}),y.jsx("th",{className:"text-left px-5 py-3 font-medium",children:"Dias"}),y.jsx("th",{className:"text-left px-5 py-3 font-medium",children:"Observação"}),y.jsx("th",{className:"w-10"})]})}),y.jsx("tbody",{className:"divide-y divide-slate-100",children:b.map($=>y.jsxs("tr",{children:[y.jsxs("td",{className:"px-5 py-3 text-sm text-slate-900",children:[Nn($.dataInicio)," → ",Nn($.dataFim)]}),y.jsx("td",{className:"px-5 py-3 text-sm font-medium text-slate-900",children:Il($.dataInicio,$.dataFim)}),y.jsx("td",{className:"px-5 py-3 text-sm text-slate-500",children:$.observacao||"—"}),y.jsx("td",{className:"px-2",children:y.jsx("button",{onClick:()=>lt($.id),className:"text-slate-400 hover:text-rose-600 p-1",children:y.jsx(Id,{className:"w-4 h-4"})})})]},$.id))})]})]})]})})()]}),v&&y.jsx(fC,{colaborador:_.find(V=>V.id===f),onClose:()=>x(!1),onSalvar:R}),P&&y.jsx(pC,{onClose:()=>N(!1),onSalvar:I})]}):y.jsx(hC,{onLogin:()=>e(!0)})}function da({icon:t,cor:e,label:n,valor:r,sufixo:i,hint:s}){const o={indigo:"bg-indigo-50 text-indigo-600",emerald:"bg-emerald-50 text-emerald-600",sky:"bg-sky-50 text-sky-600",amber:"bg-amber-50 text-amber-600"};return y.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-5",children:[y.jsx("div",{className:"flex items-center justify-between mb-3",children:y.jsx("div",{className:`w-9 h-9 rounded-lg flex items-center justify-center ${o[e]}`,children:y.jsx(t,{className:"w-5 h-5",strokeWidth:2})})}),y.jsx("p",{className:"text-xs text-slate-500 font-medium uppercase tracking-wider",children:n}),y.jsxs("p",{className:"text-3xl font-bold text-slate-900 mt-1",children:[r," ",y.jsx("span",{className:"text-base font-normal text-slate-400",children:i})]}),s&&y.jsx("p",{className:"text-xs text-slate-500 mt-1",children:s})]})}function fa({nome:t,grande:e}){t.split(" ").map(i=>i[0]).slice(0,2).join("").toUpperCase();const n=t.charCodeAt(0)+t.charCodeAt(1),r=["bg-indigo-100 text-indigo-700","bg-emerald-100 text-emerald-700","bg-amber-100 text-amber-700","bg-rose-100 text-rose-700","bg-sky-100 text-sky-700","bg-purple-100 text-purple-700"];return y.jsx("div",{className:`${e?"w-14 h-14 text-base":"w-9 h-9 text-xs"} rounded-full ${r[n%r.length]} flex items-center justify-center font-semibold`,children:t.split(" ").map(i=>i[0]).slice(0,2).join("").toUpperCase()})}function Vg({saldo:t,status:e}){const n={saudavel:"bg-emerald-50 text-emerald-700 border-emerald-200",atencao:"bg-amber-50 text-amber-700 border-amber-200",critico:"bg-rose-50 text-rose-700 border-rose-200"},r={saudavel:y.jsx(pI,{className:"w-3.5 h-3.5"}),atencao:y.jsx(Gv,{className:"w-3.5 h-3.5"}),critico:y.jsx(ui,{className:"w-3.5 h-3.5"})};return y.jsxs("span",{className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-semibold ${n[e]}`,children:[r[e],t," dias"]})}function pa({label:t,valor:e,destaque:n}){return y.jsxs("div",{children:[y.jsx("p",{className:"text-xs text-slate-500 uppercase tracking-wider font-medium",children:t}),y.jsx("p",{className:`text-sm font-semibold mt-1 ${n==="emerald"?"text-emerald-600":"text-slate-900"}`,children:e})]})}function fC({colaborador:t,onClose:e,onSalvar:n}){const[r,i]=ne.useState(""),[s,o]=ne.useState(""),[l,u]=ne.useState(""),h=r&&s?Il(r,s):0,f=t?t.saldoEfetivo-h:0,g=t&&h>t.saldoEfetivo,v=r&&s&&h>0&&!g;return y.jsx("div",{className:"fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:y.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-md",children:[y.jsxs("div",{className:"px-6 py-4 border-b border-slate-200 flex items-center justify-between",children:[y.jsxs("div",{children:[y.jsx("h3",{className:"font-bold text-slate-900",children:"Registrar férias"}),y.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:t==null?void 0:t.nome})]}),y.jsx("button",{onClick:e,className:"p-1 hover:bg-slate-100 rounded-lg",children:y.jsx(Id,{className:"w-4 h-4"})})]}),y.jsxs("div",{className:"p-6 space-y-4",children:[y.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[y.jsxs("div",{children:[y.jsx("label",{className:"text-xs font-medium text-slate-700 mb-1 block",children:"Data início"}),y.jsx("input",{type:"date",value:r,onChange:x=>i(x.target.value),className:"w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"text-xs font-medium text-slate-700 mb-1 block",children:"Data fim"}),y.jsx("input",{type:"date",value:s,onChange:x=>o(x.target.value),className:"w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"})]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"text-xs font-medium text-slate-700 mb-1 block",children:"Observação (opcional)"}),y.jsx("textarea",{value:l,onChange:x=>u(x.target.value),rows:2,className:"w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",placeholder:"Ex: férias de inverno"})]}),h>0&&y.jsxs("div",{className:`p-3 rounded-lg text-sm ${g?"bg-rose-50 text-rose-700 border border-rose-200":"bg-slate-50 text-slate-700"}`,children:[y.jsxs("div",{className:"flex justify-between",children:[y.jsx("span",{children:"Dias do período:"}),y.jsx("strong",{children:h})]}),y.jsxs("div",{className:"flex justify-between",children:[y.jsx("span",{children:"Saldo atual:"}),y.jsx("strong",{children:t==null?void 0:t.saldoEfetivo})]}),y.jsxs("div",{className:"flex justify-between border-t border-slate-200 mt-2 pt-2",children:[y.jsx("span",{children:"Saldo após registro:"}),y.jsx("strong",{children:Math.max(0,f)})]}),g&&y.jsxs("p",{className:"text-xs mt-2 flex items-center gap-1",children:[y.jsx(ui,{className:"w-3 h-3"}),"Período excede saldo disponível"]})]})]}),y.jsxs("div",{className:"px-6 py-4 border-t border-slate-200 flex justify-end gap-2",children:[y.jsx("button",{onClick:e,className:"px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg",children:"Cancelar"}),y.jsx("button",{disabled:!v,onClick:()=>n({colaboradorId:t.id,dataInicio:r,dataFim:s,observacao:l}),className:"px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed",children:"Salvar"})]})]})})}function pC({onClose:t,onSalvar:e}){const[n,r]=ne.useState(""),[i,s]=ne.useState(""),[o,l]=ne.useState(""),[u,h]=ne.useState("Tecnologia"),[f,g]=ne.useState(""),v=n&&i&&o&&f;return y.jsx("div",{className:"fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:y.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-md",children:[y.jsxs("div",{className:"px-6 py-4 border-b border-slate-200 flex items-center justify-between",children:[y.jsx("h3",{className:"font-bold text-slate-900",children:"Novo colaborador"}),y.jsx("button",{onClick:t,className:"p-1 hover:bg-slate-100 rounded-lg",children:y.jsx(Id,{className:"w-4 h-4"})})]}),y.jsxs("div",{className:"p-6 space-y-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"text-xs font-medium text-slate-700 mb-1 block",children:"Nome completo"}),y.jsx("input",{value:n,onChange:x=>r(x.target.value),className:"w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"text-xs font-medium text-slate-700 mb-1 block",children:"E-mail"}),y.jsx("input",{value:i,onChange:x=>s(x.target.value),placeholder:"nome@lekto.com.br",className:"w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"text-xs font-medium text-slate-700 mb-1 block",children:"Cargo"}),y.jsx("input",{value:o,onChange:x=>l(x.target.value),className:"w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"text-xs font-medium text-slate-700 mb-1 block",children:"Time"}),y.jsxs("select",{value:u,onChange:x=>h(x.target.value),className:"w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[y.jsx("option",{children:"Tecnologia"}),y.jsx("option",{children:"Operações"}),y.jsx("option",{children:"Administrativo"}),y.jsx("option",{children:"Educação"})]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"text-xs font-medium text-slate-700 mb-1 block",children:"Data de admissão"}),y.jsx("input",{type:"date",value:f,onChange:x=>g(x.target.value),className:"w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"})]})]}),y.jsxs("div",{className:"px-6 py-4 border-t border-slate-200 flex justify-end gap-2",children:[y.jsx("button",{onClick:t,className:"px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg",children:"Cancelar"}),y.jsx("button",{disabled:!v,onClick:()=>e({nome:n,email:i,cargo:o,time:u,dataAdmissao:f}),className:"px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed",children:"Cadastrar"})]})]})})}dc.createRoot(document.getElementById("root")).render(y.jsx(Zw.StrictMode,{children:y.jsx(dC,{})}));
