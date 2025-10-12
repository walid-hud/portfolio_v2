(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const f of r)if(f.type==="childList")for(const c of f.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function u(r){const f={};return r.integrity&&(f.integrity=r.integrity),r.referrerPolicy&&(f.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?f.credentials="include":r.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function a(r){if(r.ep)return;r.ep=!0;const f=u(r);fetch(r.href,f)}})();function x0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var lf={exports:{}},Ka={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function kT(){if(Yd)return Ka;Yd=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function u(a,r,f){var c=null;if(f!==void 0&&(c=""+f),r.key!==void 0&&(c=""+r.key),"key"in r){f={};for(var d in r)d!=="key"&&(f[d]=r[d])}else f=r;return r=f.ref,{$$typeof:o,type:a,key:c,ref:r!==void 0?r:null,props:f}}return Ka.Fragment=n,Ka.jsx=u,Ka.jsxs=u,Ka}var Vd;function $T(){return Vd||(Vd=1,lf.exports=kT()),lf.exports}var E=$T(),_f={exports:{}},Wa={},nf={exports:{}},af={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function KT(){return Xd||(Xd=1,(function(o){function n(I,J){var it=I.length;I.push(J);t:for(;0<it;){var St=it-1>>>1,b=I[St];if(0<r(b,J))I[St]=J,I[it]=b,it=St;else break t}}function u(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var J=I[0],it=I.pop();if(it!==J){I[0]=it;t:for(var St=0,b=I.length,Q=b>>>1;St<Q;){var F=2*(St+1)-1,L=I[F],N=F+1,p=I[N];if(0>r(L,it))N<b&&0>r(p,L)?(I[St]=p,I[N]=it,St=N):(I[St]=L,I[F]=it,St=F);else if(N<b&&0>r(p,it))I[St]=p,I[N]=it,St=N;else break t}}return J}function r(I,J){var it=I.sortIndex-J.sortIndex;return it!==0?it:I.id-J.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var c=Date,d=c.now();o.unstable_now=function(){return c.now()-d}}var T=[],m=[],g=1,y=null,x=3,M=!1,H=!1,S=!1,G=!1,k=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function K(I){for(var J=u(m);J!==null;){if(J.callback===null)a(m);else if(J.startTime<=I)a(m),J.sortIndex=J.expirationTime,n(T,J);else break;J=u(m)}}function q(I){if(S=!1,K(I),!H)if(u(T)!==null)H=!0,et||(et=!0,ot());else{var J=u(m);J!==null&&ht(q,J.startTime-I)}}var et=!1,lt=-1,_t=5,W=-1;function mt(){return G?!0:!(o.unstable_now()-W<_t)}function At(){if(G=!1,et){var I=o.unstable_now();W=I;var J=!0;try{t:{H=!1,S&&(S=!1,Z(lt),lt=-1),M=!0;var it=x;try{e:{for(K(I),y=u(T);y!==null&&!(y.expirationTime>I&&mt());){var St=y.callback;if(typeof St=="function"){y.callback=null,x=y.priorityLevel;var b=St(y.expirationTime<=I);if(I=o.unstable_now(),typeof b=="function"){y.callback=b,K(I),J=!0;break e}y===u(T)&&a(T),K(I)}else a(T);y=u(T)}if(y!==null)J=!0;else{var Q=u(m);Q!==null&&ht(q,Q.startTime-I),J=!1}}break t}finally{y=null,x=it,M=!1}J=void 0}}finally{J?ot():et=!1}}}var ot;if(typeof $=="function")ot=function(){$(At)};else if(typeof MessageChannel<"u"){var Tt=new MessageChannel,Rt=Tt.port2;Tt.port1.onmessage=At,ot=function(){Rt.postMessage(null)}}else ot=function(){k(At,0)};function ht(I,J){lt=k(function(){I(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_t=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(I){switch(x){case 1:case 2:case 3:var J=3;break;default:J=x}var it=x;x=J;try{return I()}finally{x=it}},o.unstable_requestPaint=function(){G=!0},o.unstable_runWithPriority=function(I,J){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var it=x;x=I;try{return J()}finally{x=it}},o.unstable_scheduleCallback=function(I,J,it){var St=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?St+it:St):it=St,I){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=it+b,I={id:g++,callback:J,priorityLevel:I,startTime:it,expirationTime:b,sortIndex:-1},it>St?(I.sortIndex=it,n(m,I),u(T)===null&&I===u(m)&&(S?(Z(lt),lt=-1):S=!0,ht(q,it-St))):(I.sortIndex=b,n(T,I),H||M||(H=!0,et||(et=!0,ot()))),I},o.unstable_shouldYield=mt,o.unstable_wrapCallback=function(I){var J=x;return function(){var it=x;x=J;try{return I.apply(this,arguments)}finally{x=it}}}})(af)),af}var Qd;function WT(){return Qd||(Qd=1,nf.exports=KT()),nf.exports}var uf={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function JT(){if(Zd)return dt;Zd=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(b){return b===null||typeof b!="object"?null:(b=y&&b[y]||b["@@iterator"],typeof b=="function"?b:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,S={};function G(b,Q,F){this.props=b,this.context=Q,this.refs=S,this.updater=F||M}G.prototype.isReactComponent={},G.prototype.setState=function(b,Q){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,Q,"setState")},G.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function k(){}k.prototype=G.prototype;function Z(b,Q,F){this.props=b,this.context=Q,this.refs=S,this.updater=F||M}var $=Z.prototype=new k;$.constructor=Z,H($,G.prototype),$.isPureReactComponent=!0;var K=Array.isArray,q={H:null,A:null,T:null,S:null,V:null},et=Object.prototype.hasOwnProperty;function lt(b,Q,F,L,N,p){return F=p.ref,{$$typeof:o,type:b,key:Q,ref:F!==void 0?F:null,props:p}}function _t(b,Q){return lt(b.type,Q,void 0,void 0,void 0,b.props)}function W(b){return typeof b=="object"&&b!==null&&b.$$typeof===o}function mt(b){var Q={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(F){return Q[F]})}var At=/\/+/g;function ot(b,Q){return typeof b=="object"&&b!==null&&b.key!=null?mt(""+b.key):Q.toString(36)}function Tt(){}function Rt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Tt,Tt):(b.status="pending",b.then(function(Q){b.status==="pending"&&(b.status="fulfilled",b.value=Q)},function(Q){b.status==="pending"&&(b.status="rejected",b.reason=Q)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function ht(b,Q,F,L,N){var p=typeof b;(p==="undefined"||p==="boolean")&&(b=null);var O=!1;if(b===null)O=!0;else switch(p){case"bigint":case"string":case"number":O=!0;break;case"object":switch(b.$$typeof){case o:case n:O=!0;break;case g:return O=b._init,ht(O(b._payload),Q,F,L,N)}}if(O)return N=N(b),O=L===""?"."+ot(b,0):L,K(N)?(F="",O!=null&&(F=O.replace(At,"$&/")+"/"),ht(N,Q,F,"",function(nt){return nt})):N!=null&&(W(N)&&(N=_t(N,F+(N.key==null||b&&b.key===N.key?"":(""+N.key).replace(At,"$&/")+"/")+O)),Q.push(N)),1;O=0;var w=L===""?".":L+":";if(K(b))for(var B=0;B<b.length;B++)L=b[B],p=w+ot(L,B),O+=ht(L,Q,F,p,N);else if(B=x(b),typeof B=="function")for(b=B.call(b),B=0;!(L=b.next()).done;)L=L.value,p=w+ot(L,B++),O+=ht(L,Q,F,p,N);else if(p==="object"){if(typeof b.then=="function")return ht(Rt(b),Q,F,L,N);throw Q=String(b),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return O}function I(b,Q,F){if(b==null)return b;var L=[],N=0;return ht(b,L,"","",function(p){return Q.call(F,p,N++)}),L}function J(b){if(b._status===-1){var Q=b._result;Q=Q(),Q.then(function(F){(b._status===0||b._status===-1)&&(b._status=1,b._result=F)},function(F){(b._status===0||b._status===-1)&&(b._status=2,b._result=F)}),b._status===-1&&(b._status=0,b._result=Q)}if(b._status===1)return b._result.default;throw b._result}var it=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function St(){}return dt.Children={map:I,forEach:function(b,Q,F){I(b,function(){Q.apply(this,arguments)},F)},count:function(b){var Q=0;return I(b,function(){Q++}),Q},toArray:function(b){return I(b,function(Q){return Q})||[]},only:function(b){if(!W(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},dt.Component=G,dt.Fragment=u,dt.Profiler=r,dt.PureComponent=Z,dt.StrictMode=a,dt.Suspense=T,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,dt.__COMPILER_RUNTIME={__proto__:null,c:function(b){return q.H.useMemoCache(b)}},dt.cache=function(b){return function(){return b.apply(null,arguments)}},dt.cloneElement=function(b,Q,F){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var L=H({},b.props),N=b.key,p=void 0;if(Q!=null)for(O in Q.ref!==void 0&&(p=void 0),Q.key!==void 0&&(N=""+Q.key),Q)!et.call(Q,O)||O==="key"||O==="__self"||O==="__source"||O==="ref"&&Q.ref===void 0||(L[O]=Q[O]);var O=arguments.length-2;if(O===1)L.children=F;else if(1<O){for(var w=Array(O),B=0;B<O;B++)w[B]=arguments[B+2];L.children=w}return lt(b.type,N,void 0,void 0,p,L)},dt.createContext=function(b){return b={$$typeof:c,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:f,_context:b},b},dt.createElement=function(b,Q,F){var L,N={},p=null;if(Q!=null)for(L in Q.key!==void 0&&(p=""+Q.key),Q)et.call(Q,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(N[L]=Q[L]);var O=arguments.length-2;if(O===1)N.children=F;else if(1<O){for(var w=Array(O),B=0;B<O;B++)w[B]=arguments[B+2];N.children=w}if(b&&b.defaultProps)for(L in O=b.defaultProps,O)N[L]===void 0&&(N[L]=O[L]);return lt(b,p,void 0,void 0,null,N)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(b){return{$$typeof:d,render:b}},dt.isValidElement=W,dt.lazy=function(b){return{$$typeof:g,_payload:{_status:-1,_result:b},_init:J}},dt.memo=function(b,Q){return{$$typeof:m,type:b,compare:Q===void 0?null:Q}},dt.startTransition=function(b){var Q=q.T,F={};q.T=F;try{var L=b(),N=q.S;N!==null&&N(F,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(St,it)}catch(p){it(p)}finally{q.T=Q}},dt.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},dt.use=function(b){return q.H.use(b)},dt.useActionState=function(b,Q,F){return q.H.useActionState(b,Q,F)},dt.useCallback=function(b,Q){return q.H.useCallback(b,Q)},dt.useContext=function(b){return q.H.useContext(b)},dt.useDebugValue=function(){},dt.useDeferredValue=function(b,Q){return q.H.useDeferredValue(b,Q)},dt.useEffect=function(b,Q,F){var L=q.H;if(typeof F=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return L.useEffect(b,Q)},dt.useId=function(){return q.H.useId()},dt.useImperativeHandle=function(b,Q,F){return q.H.useImperativeHandle(b,Q,F)},dt.useInsertionEffect=function(b,Q){return q.H.useInsertionEffect(b,Q)},dt.useLayoutEffect=function(b,Q){return q.H.useLayoutEffect(b,Q)},dt.useMemo=function(b,Q){return q.H.useMemo(b,Q)},dt.useOptimistic=function(b,Q){return q.H.useOptimistic(b,Q)},dt.useReducer=function(b,Q,F){return q.H.useReducer(b,Q,F)},dt.useRef=function(b){return q.H.useRef(b)},dt.useState=function(b){return q.H.useState(b)},dt.useSyncExternalStore=function(b,Q,F){return q.H.useSyncExternalStore(b,Q,F)},dt.useTransition=function(){return q.H.useTransition()},dt.version="19.1.1",dt}var kd;function zf(){return kd||(kd=1,uf.exports=JT()),uf.exports}var rf={exports:{}},ye={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d;function FT(){if($d)return ye;$d=1;var o=zf();function n(T){var m="https://react.dev/errors/"+T;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+T+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var a={d:{f:u,r:function(){throw Error(n(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},r=Symbol.for("react.portal");function f(T,m,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:y==null?null:""+y,children:T,containerInfo:m,implementation:g}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(T,m){if(T==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,ye.createPortal=function(T,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(n(299));return f(T,m,null,g)},ye.flushSync=function(T){var m=c.T,g=a.p;try{if(c.T=null,a.p=2,T)return T()}finally{c.T=m,a.p=g,a.d.f()}},ye.preconnect=function(T,m){typeof T=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(T,m))},ye.prefetchDNS=function(T){typeof T=="string"&&a.d.D(T)},ye.preinit=function(T,m){if(typeof T=="string"&&m&&typeof m.as=="string"){var g=m.as,y=d(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(T,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:M}):g==="script"&&a.d.X(T,{crossOrigin:y,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ye.preinitModule=function(T,m){if(typeof T=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);a.d.M(T,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(T)},ye.preload=function(T,m){if(typeof T=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,y=d(g,m.crossOrigin);a.d.L(T,g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ye.preloadModule=function(T,m){if(typeof T=="string")if(m){var g=d(m.as,m.crossOrigin);a.d.m(T,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(T)},ye.requestFormReset=function(T){a.d.r(T)},ye.unstable_batchedUpdates=function(T,m){return T(m)},ye.useFormState=function(T,m,g){return c.H.useFormState(T,m,g)},ye.useFormStatus=function(){return c.H.useHostTransitionStatus()},ye.version="19.1.1",ye}var Kd;function PT(){if(Kd)return rf.exports;Kd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),rf.exports=FT(),rf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd;function tg(){if(Wd)return Wa;Wd=1;var o=WT(),n=zf(),u=PT();function a(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function c(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function d(t){if(f(t)!==t)throw Error(a(188))}function T(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(a(188));return e!==t?null:t}for(var l=t,_=e;;){var i=l.return;if(i===null)break;var s=i.alternate;if(s===null){if(_=i.return,_!==null){l=_;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===l)return d(i),t;if(s===_)return d(i),e;s=s.sibling}throw Error(a(188))}if(l.return!==_.return)l=i,_=s;else{for(var h=!1,v=i.child;v;){if(v===l){h=!0,l=i,_=s;break}if(v===_){h=!0,_=i,l=s;break}v=v.sibling}if(!h){for(v=s.child;v;){if(v===l){h=!0,l=s,_=i;break}if(v===_){h=!0,_=s,l=i;break}v=v.sibling}if(!h)throw Error(a(189))}}if(l.alternate!==_)throw Error(a(190))}if(l.tag!==3)throw Error(a(188));return l.stateNode.current===l?t:e}function m(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=m(t),e!==null)return e;t=t.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),Z=Symbol.for("react.consumer"),$=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),mt=Symbol.for("react.memo_cache_sentinel"),At=Symbol.iterator;function ot(t){return t===null||typeof t!="object"?null:(t=At&&t[At]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Symbol.for("react.client.reference");function Rt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Tt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case G:return"Profiler";case S:return"StrictMode";case q:return"Suspense";case et:return"SuspenseList";case W:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case $:return(t.displayName||"Context")+".Provider";case Z:return(t._context.displayName||"Context")+".Consumer";case K:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lt:return e=t.displayName||null,e!==null?e:Rt(t.type)||"Memo";case _t:e=t._payload,t=t._init;try{return Rt(t(e))}catch{}}return null}var ht=Array.isArray,I=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},St=[],b=-1;function Q(t){return{current:t}}function F(t){0>b||(t.current=St[b],St[b]=null,b--)}function L(t,e){b++,St[b]=t.current,t.current=e}var N=Q(null),p=Q(null),O=Q(null),w=Q(null);function B(t,e){switch(L(O,e),L(p,t),L(N,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Td(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Td(e),t=gd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}F(N),L(N,t)}function nt(){F(N),F(p),F(O)}function tt(t){t.memoizedState!==null&&L(w,t);var e=N.current,l=gd(e,t.type);e!==l&&(L(p,t),L(N,l))}function P(t){p.current===t&&(F(N),F(p)),w.current===t&&(F(w),Xa._currentValue=it)}var ut=Object.prototype.hasOwnProperty,bt=o.unstable_scheduleCallback,Nt=o.unstable_cancelCallback,Mt=o.unstable_shouldYield,Ht=o.unstable_requestPaint,Vt=o.unstable_now,Yl=o.unstable_getCurrentPriorityLevel,A_=o.unstable_ImmediatePriority,Xt=o.unstable_UserBlockingPriority,Wt=o.unstable_NormalPriority,It=o.unstable_LowPriority,Jn=o.unstable_IdlePriority,O1=o.log,M1=o.unstable_setDisableYieldValue,Fn=null,Ue=null;function Vl(t){if(typeof O1=="function"&&M1(t),Ue&&typeof Ue.setStrictMode=="function")try{Ue.setStrictMode(Fn,t)}catch{}}var je=Math.clz32?Math.clz32:z1,C1=Math.log,D1=Math.LN2;function z1(t){return t>>>=0,t===0?32:31-(C1(t)/D1|0)|0}var oi=256,hi=4194304;function E_(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function di(t,e,l){var _=t.pendingLanes;if(_===0)return 0;var i=0,s=t.suspendedLanes,h=t.pingedLanes;t=t.warmLanes;var v=_&134217727;return v!==0?(_=v&~s,_!==0?i=E_(_):(h&=v,h!==0?i=E_(h):l||(l=v&~t,l!==0&&(i=E_(l))))):(v=_&~s,v!==0?i=E_(v):h!==0?i=E_(h):l||(l=_&~t,l!==0&&(i=E_(l)))),i===0?0:e!==0&&e!==i&&(e&s)===0&&(s=i&-i,l=e&-e,s>=l||s===32&&(l&4194048)!==0)?e:i}function Pn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function H1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ff(){var t=oi;return oi<<=1,(oi&4194048)===0&&(oi=256),t}function Pf(){var t=hi;return hi<<=1,(hi&62914560)===0&&(hi=4194304),t}function Qu(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function ta(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function U1(t,e,l,_,i,s){var h=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var v=t.entanglements,A=t.expirationTimes,z=t.hiddenUpdates;for(l=h&~l;0<l;){var Y=31-je(l),X=1<<Y;v[Y]=0,A[Y]=-1;var U=z[Y];if(U!==null)for(z[Y]=null,Y=0;Y<U.length;Y++){var j=U[Y];j!==null&&(j.lane&=-536870913)}l&=~X}_!==0&&tc(t,_,0),s!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=s&~(h&~e))}function tc(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var _=31-je(e);t.entangledLanes|=e,t.entanglements[_]=t.entanglements[_]|1073741824|l&4194090}function ec(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var _=31-je(l),i=1<<_;i&e|t[_]&e&&(t[_]|=e),l&=~i}}function Zu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ku(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function lc(){var t=J.p;return t!==0?t:(t=window.event,t===void 0?32:jd(t.type))}function j1(t,e){var l=J.p;try{return J.p=t,e()}finally{J.p=l}}var Xl=Math.random().toString(36).slice(2),ve="__reactFiber$"+Xl,be="__reactProps$"+Xl,J_="__reactContainer$"+Xl,$u="__reactEvents$"+Xl,w1="__reactListeners$"+Xl,I1="__reactHandles$"+Xl,_c="__reactResources$"+Xl,ea="__reactMarker$"+Xl;function Ku(t){delete t[ve],delete t[be],delete t[$u],delete t[w1],delete t[I1]}function F_(t){var e=t[ve];if(e)return e;for(var l=t.parentNode;l;){if(e=l[J_]||l[ve]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Ad(t);t!==null;){if(l=t[ve])return l;t=Ad(t)}return e}t=l,l=t.parentNode}return null}function P_(t){if(t=t[ve]||t[J_]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function la(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(a(33))}function tn(t){var e=t[_c];return e||(e=t[_c]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function se(t){t[ea]=!0}var nc=new Set,ac={};function S_(t,e){en(t,e),en(t+"Capture",e)}function en(t,e){for(ac[t]=e,t=0;t<e.length;t++)nc.add(e[t])}var B1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ic={},uc={};function G1(t){return ut.call(uc,t)?!0:ut.call(ic,t)?!1:B1.test(t)?uc[t]=!0:(ic[t]=!0,!1)}function mi(t,e,l){if(G1(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var _=e.toLowerCase().slice(0,5);if(_!=="data-"&&_!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Ti(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Sl(t,e,l,_){if(_===null)t.removeAttribute(l);else{switch(typeof _){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+_)}}var Wu,rc;function ln(t){if(Wu===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Wu=e&&e[1]||"",rc=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wu+t+rc}var Ju=!1;function Fu(t,e){if(!t||Ju)return"";Ju=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var _={DetermineComponentFrameRoot:function(){try{if(e){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(j){var U=j}Reflect.construct(t,[],X)}else{try{X.call()}catch(j){U=j}t.call(X.prototype)}}else{try{throw Error()}catch(j){U=j}(X=t())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(j){if(j&&U&&typeof j.stack=="string")return[j.stack,U.stack]}return[null,null]}};_.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(_.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(_.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=_.DetermineComponentFrameRoot(),h=s[0],v=s[1];if(h&&v){var A=h.split(`
`),z=v.split(`
`);for(i=_=0;_<A.length&&!A[_].includes("DetermineComponentFrameRoot");)_++;for(;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;if(_===A.length||i===z.length)for(_=A.length-1,i=z.length-1;1<=_&&0<=i&&A[_]!==z[i];)i--;for(;1<=_&&0<=i;_--,i--)if(A[_]!==z[i]){if(_!==1||i!==1)do if(_--,i--,0>i||A[_]!==z[i]){var Y=`
`+A[_].replace(" at new "," at ");return t.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",t.displayName)),Y}while(1<=_&&0<=i);break}}}finally{Ju=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?ln(l):""}function q1(t){switch(t.tag){case 26:case 27:case 5:return ln(t.type);case 16:return ln("Lazy");case 13:return ln("Suspense");case 19:return ln("SuspenseList");case 0:case 15:return Fu(t.type,!1);case 11:return Fu(t.type.render,!1);case 1:return Fu(t.type,!0);case 31:return ln("Activity");default:return""}}function sc(t){try{var e="";do e+=q1(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function We(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Y1(t){var e=fc(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),_=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,s=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(h){_=""+h,s.call(this,h)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return _},setValue:function(h){_=""+h},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gi(t){t._valueTracker||(t._valueTracker=Y1(t))}function cc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),_="";return t&&(_=fc(t)?t.checked?"true":"false":t.value),t=_,t!==l?(e.setValue(t),!0):!1}function vi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var V1=/[\n"\\]/g;function Je(t){return t.replace(V1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Pu(t,e,l,_,i,s,h,v){t.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.type=h:t.removeAttribute("type"),e!=null?h==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+We(e)):t.value!==""+We(e)&&(t.value=""+We(e)):h!=="submit"&&h!=="reset"||t.removeAttribute("value"),e!=null?tr(t,h,We(e)):l!=null?tr(t,h,We(l)):_!=null&&t.removeAttribute("value"),i==null&&s!=null&&(t.defaultChecked=!!s),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.name=""+We(v):t.removeAttribute("name")}function oc(t,e,l,_,i,s,h,v){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||l!=null){if(!(s!=="submit"&&s!=="reset"||e!=null))return;l=l!=null?""+We(l):"",e=e!=null?""+We(e):l,v||e===t.value||(t.value=e),t.defaultValue=e}_=_??i,_=typeof _!="function"&&typeof _!="symbol"&&!!_,t.checked=v?t.checked:!!_,t.defaultChecked=!!_,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.name=h)}function tr(t,e,l){e==="number"&&vi(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function _n(t,e,l,_){if(t=t.options,e){e={};for(var i=0;i<l.length;i++)e["$"+l[i]]=!0;for(l=0;l<t.length;l++)i=e.hasOwnProperty("$"+t[l].value),t[l].selected!==i&&(t[l].selected=i),i&&_&&(t[l].defaultSelected=!0)}else{for(l=""+We(l),e=null,i=0;i<t.length;i++){if(t[i].value===l){t[i].selected=!0,_&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hc(t,e,l){if(e!=null&&(e=""+We(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+We(l):""}function dc(t,e,l,_){if(e==null){if(_!=null){if(l!=null)throw Error(a(92));if(ht(_)){if(1<_.length)throw Error(a(93));_=_[0]}l=_}l==null&&(l=""),e=l}l=We(e),t.defaultValue=l,_=t.textContent,_===l&&_!==""&&_!==null&&(t.value=_)}function nn(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var X1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mc(t,e,l){var _=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?_?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":_?t.setProperty(e,l):typeof l!="number"||l===0||X1.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Tc(t,e,l){if(e!=null&&typeof e!="object")throw Error(a(62));if(t=t.style,l!=null){for(var _ in l)!l.hasOwnProperty(_)||e!=null&&e.hasOwnProperty(_)||(_.indexOf("--")===0?t.setProperty(_,""):_==="float"?t.cssFloat="":t[_]="");for(var i in e)_=e[i],e.hasOwnProperty(i)&&l[i]!==_&&mc(t,i,_)}else for(var s in e)e.hasOwnProperty(s)&&mc(t,s,e[s])}function er(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Q1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Z1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pi(t){return Z1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var lr=null;function _r(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var an=null,un=null;function gc(t){var e=P_(t);if(e&&(t=e.stateNode)){var l=t[be]||null;t:switch(t=e.stateNode,e.type){case"input":if(Pu(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Je(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var _=l[e];if(_!==t&&_.form===t.form){var i=_[be]||null;if(!i)throw Error(a(90));Pu(_,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<l.length;e++)_=l[e],_.form===t.form&&cc(_)}break t;case"textarea":hc(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&_n(t,!!l.multiple,e,!1)}}}var nr=!1;function vc(t,e,l){if(nr)return t(e,l);nr=!0;try{var _=t(e);return _}finally{if(nr=!1,(an!==null||un!==null)&&(nu(),an&&(e=an,t=un,un=an=null,gc(e),t)))for(e=0;e<t.length;e++)gc(t[e])}}function _a(t,e){var l=t.stateNode;if(l===null)return null;var _=l[be]||null;if(_===null)return null;l=_[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(_=!_.disabled)||(t=t.type,_=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!_;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(a(231,e,typeof l));return l}var Ll=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ar=!1;if(Ll)try{var na={};Object.defineProperty(na,"passive",{get:function(){ar=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{ar=!1}var Ql=null,ir=null,yi=null;function pc(){if(yi)return yi;var t,e=ir,l=e.length,_,i="value"in Ql?Ql.value:Ql.textContent,s=i.length;for(t=0;t<l&&e[t]===i[t];t++);var h=l-t;for(_=1;_<=h&&e[l-_]===i[s-_];_++);return yi=i.slice(t,1<_?1-_:void 0)}function Ai(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ei(){return!0}function yc(){return!1}function xe(t){function e(l,_,i,s,h){this._reactName=l,this._targetInst=i,this.type=_,this.nativeEvent=s,this.target=h,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(l=t[v],this[v]=l?l(s):s[v]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ei:yc,this.isPropagationStopped=yc,this}return g(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ei)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ei)},persist:function(){},isPersistent:Ei}),e}var L_={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Si=xe(L_),aa=g({},L_,{view:0,detail:0}),k1=xe(aa),ur,rr,ia,Li=g({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ia&&(ia&&t.type==="mousemove"?(ur=t.screenX-ia.screenX,rr=t.screenY-ia.screenY):rr=ur=0,ia=t),ur)},movementY:function(t){return"movementY"in t?t.movementY:rr}}),Ac=xe(Li),$1=g({},Li,{dataTransfer:0}),K1=xe($1),W1=g({},aa,{relatedTarget:0}),sr=xe(W1),J1=g({},L_,{animationName:0,elapsedTime:0,pseudoElement:0}),F1=xe(J1),P1=g({},L_,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tm=xe(P1),em=g({},L_,{data:0}),Ec=xe(em),lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_m={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nm[t])?!!e[t]:!1}function fr(){return am}var im=g({},aa,{key:function(t){if(t.key){var e=lm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ai(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_m[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fr,charCode:function(t){return t.type==="keypress"?Ai(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ai(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),um=xe(im),rm=g({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sc=xe(rm),sm=g({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fr}),fm=xe(sm),cm=g({},L_,{propertyName:0,elapsedTime:0,pseudoElement:0}),om=xe(cm),hm=g({},Li,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dm=xe(hm),mm=g({},L_,{newState:0,oldState:0}),Tm=xe(mm),gm=[9,13,27,32],cr=Ll&&"CompositionEvent"in window,ua=null;Ll&&"documentMode"in document&&(ua=document.documentMode);var vm=Ll&&"TextEvent"in window&&!ua,Lc=Ll&&(!cr||ua&&8<ua&&11>=ua),bc=" ",xc=!1;function Rc(t,e){switch(t){case"keyup":return gm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rn=!1;function pm(t,e){switch(t){case"compositionend":return Nc(e);case"keypress":return e.which!==32?null:(xc=!0,bc);case"textInput":return t=e.data,t===bc&&xc?null:t;default:return null}}function ym(t,e){if(rn)return t==="compositionend"||!cr&&Rc(t,e)?(t=pc(),yi=ir=Ql=null,rn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lc&&e.locale!=="ko"?null:e.data;default:return null}}var Am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Am[t.type]:e==="textarea"}function Mc(t,e,l,_){an?un?un.push(_):un=[_]:an=_,e=fu(e,"onChange"),0<e.length&&(l=new Si("onChange","change",null,l,_),t.push({event:l,listeners:e}))}var ra=null,sa=null;function Em(t){cd(t,0)}function bi(t){var e=la(t);if(cc(e))return t}function Cc(t,e){if(t==="change")return e}var Dc=!1;if(Ll){var or;if(Ll){var hr="oninput"in document;if(!hr){var zc=document.createElement("div");zc.setAttribute("oninput","return;"),hr=typeof zc.oninput=="function"}or=hr}else or=!1;Dc=or&&(!document.documentMode||9<document.documentMode)}function Hc(){ra&&(ra.detachEvent("onpropertychange",Uc),sa=ra=null)}function Uc(t){if(t.propertyName==="value"&&bi(sa)){var e=[];Mc(e,sa,t,_r(t)),vc(Em,e)}}function Sm(t,e,l){t==="focusin"?(Hc(),ra=e,sa=l,ra.attachEvent("onpropertychange",Uc)):t==="focusout"&&Hc()}function Lm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bi(sa)}function bm(t,e){if(t==="click")return bi(e)}function xm(t,e){if(t==="input"||t==="change")return bi(e)}function Rm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var we=typeof Object.is=="function"?Object.is:Rm;function fa(t,e){if(we(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),_=Object.keys(e);if(l.length!==_.length)return!1;for(_=0;_<l.length;_++){var i=l[_];if(!ut.call(e,i)||!we(t[i],e[i]))return!1}return!0}function jc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wc(t,e){var l=jc(t);t=0;for(var _;l;){if(l.nodeType===3){if(_=t+l.textContent.length,t<=e&&_>=e)return{node:l,offset:e-t};t=_}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=jc(l)}}function Ic(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ic(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=vi(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=vi(t.document)}return e}function dr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Nm=Ll&&"documentMode"in document&&11>=document.documentMode,sn=null,mr=null,ca=null,Tr=!1;function Gc(t,e,l){var _=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Tr||sn==null||sn!==vi(_)||(_=sn,"selectionStart"in _&&dr(_)?_={start:_.selectionStart,end:_.selectionEnd}:(_=(_.ownerDocument&&_.ownerDocument.defaultView||window).getSelection(),_={anchorNode:_.anchorNode,anchorOffset:_.anchorOffset,focusNode:_.focusNode,focusOffset:_.focusOffset}),ca&&fa(ca,_)||(ca=_,_=fu(mr,"onSelect"),0<_.length&&(e=new Si("onSelect","select",null,e,l),t.push({event:e,listeners:_}),e.target=sn)))}function b_(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var fn={animationend:b_("Animation","AnimationEnd"),animationiteration:b_("Animation","AnimationIteration"),animationstart:b_("Animation","AnimationStart"),transitionrun:b_("Transition","TransitionRun"),transitionstart:b_("Transition","TransitionStart"),transitioncancel:b_("Transition","TransitionCancel"),transitionend:b_("Transition","TransitionEnd")},gr={},qc={};Ll&&(qc=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function x_(t){if(gr[t])return gr[t];if(!fn[t])return t;var e=fn[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in qc)return gr[t]=e[l];return t}var Yc=x_("animationend"),Vc=x_("animationiteration"),Xc=x_("animationstart"),Om=x_("transitionrun"),Mm=x_("transitionstart"),Cm=x_("transitioncancel"),Qc=x_("transitionend"),Zc=new Map,vr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vr.push("scrollEnd");function sl(t,e){Zc.set(t,e),S_(e,[t])}var kc=new WeakMap;function Fe(t,e){if(typeof t=="object"&&t!==null){var l=kc.get(t);return l!==void 0?l:(e={value:t,source:e,stack:sc(e)},kc.set(t,e),e)}return{value:t,source:e,stack:sc(e)}}var Pe=[],cn=0,pr=0;function xi(){for(var t=cn,e=pr=cn=0;e<t;){var l=Pe[e];Pe[e++]=null;var _=Pe[e];Pe[e++]=null;var i=Pe[e];Pe[e++]=null;var s=Pe[e];if(Pe[e++]=null,_!==null&&i!==null){var h=_.pending;h===null?i.next=i:(i.next=h.next,h.next=i),_.pending=i}s!==0&&$c(l,i,s)}}function Ri(t,e,l,_){Pe[cn++]=t,Pe[cn++]=e,Pe[cn++]=l,Pe[cn++]=_,pr|=_,t.lanes|=_,t=t.alternate,t!==null&&(t.lanes|=_)}function yr(t,e,l,_){return Ri(t,e,l,_),Ni(t)}function on(t,e){return Ri(t,null,null,e),Ni(t)}function $c(t,e,l){t.lanes|=l;var _=t.alternate;_!==null&&(_.lanes|=l);for(var i=!1,s=t.return;s!==null;)s.childLanes|=l,_=s.alternate,_!==null&&(_.childLanes|=l),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(i=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,i&&e!==null&&(i=31-je(l),t=s.hiddenUpdates,_=t[i],_===null?t[i]=[e]:_.push(e),e.lane=l|536870912),s):null}function Ni(t){if(50<ja)throw ja=0,xs=null,Error(a(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var hn={};function Dm(t,e,l,_){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=_,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(t,e,l,_){return new Dm(t,e,l,_)}function Ar(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bl(t,e){var l=t.alternate;return l===null?(l=Ie(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Kc(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Oi(t,e,l,_,i,s){var h=0;if(_=t,typeof t=="function")Ar(t)&&(h=1);else if(typeof t=="string")h=HT(t,l,N.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case W:return t=Ie(31,l,e,i),t.elementType=W,t.lanes=s,t;case H:return R_(l.children,i,s,e);case S:h=8,i|=24;break;case G:return t=Ie(12,l,e,i|2),t.elementType=G,t.lanes=s,t;case q:return t=Ie(13,l,e,i),t.elementType=q,t.lanes=s,t;case et:return t=Ie(19,l,e,i),t.elementType=et,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k:case $:h=10;break t;case Z:h=9;break t;case K:h=11;break t;case lt:h=14;break t;case _t:h=16,_=null;break t}h=29,l=Error(a(130,t===null?"null":typeof t,"")),_=null}return e=Ie(h,l,e,i),e.elementType=t,e.type=_,e.lanes=s,e}function R_(t,e,l,_){return t=Ie(7,t,_,e),t.lanes=l,t}function Er(t,e,l){return t=Ie(6,t,null,e),t.lanes=l,t}function Sr(t,e,l){return e=Ie(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var dn=[],mn=0,Mi=null,Ci=0,tl=[],el=0,N_=null,xl=1,Rl="";function O_(t,e){dn[mn++]=Ci,dn[mn++]=Mi,Mi=t,Ci=e}function Wc(t,e,l){tl[el++]=xl,tl[el++]=Rl,tl[el++]=N_,N_=t;var _=xl;t=Rl;var i=32-je(_)-1;_&=~(1<<i),l+=1;var s=32-je(e)+i;if(30<s){var h=i-i%5;s=(_&(1<<h)-1).toString(32),_>>=h,i-=h,xl=1<<32-je(e)+i|l<<i|_,Rl=s+t}else xl=1<<s|l<<i|_,Rl=t}function Lr(t){t.return!==null&&(O_(t,1),Wc(t,1,0))}function br(t){for(;t===Mi;)Mi=dn[--mn],dn[mn]=null,Ci=dn[--mn],dn[mn]=null;for(;t===N_;)N_=tl[--el],tl[el]=null,Rl=tl[--el],tl[el]=null,xl=tl[--el],tl[el]=null}var Se=null,Jt=null,Ot=!1,M_=null,hl=!1,xr=Error(a(519));function C_(t){var e=Error(a(418,""));throw da(Fe(e,t)),xr}function Jc(t){var e=t.stateNode,l=t.type,_=t.memoizedProps;switch(e[ve]=t,e[be]=_,l){case"dialog":yt("cancel",e),yt("close",e);break;case"iframe":case"object":case"embed":yt("load",e);break;case"video":case"audio":for(l=0;l<Ia.length;l++)yt(Ia[l],e);break;case"source":yt("error",e);break;case"img":case"image":case"link":yt("error",e),yt("load",e);break;case"details":yt("toggle",e);break;case"input":yt("invalid",e),oc(e,_.value,_.defaultValue,_.checked,_.defaultChecked,_.type,_.name,!0),gi(e);break;case"select":yt("invalid",e);break;case"textarea":yt("invalid",e),dc(e,_.value,_.defaultValue,_.children),gi(e)}l=_.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||_.suppressHydrationWarning===!0||md(e.textContent,l)?(_.popover!=null&&(yt("beforetoggle",e),yt("toggle",e)),_.onScroll!=null&&yt("scroll",e),_.onScrollEnd!=null&&yt("scrollend",e),_.onClick!=null&&(e.onclick=cu),e=!0):e=!1,e||C_(t)}function Fc(t){for(Se=t.return;Se;)switch(Se.tag){case 5:case 13:hl=!1;return;case 27:case 3:hl=!0;return;default:Se=Se.return}}function oa(t){if(t!==Se)return!1;if(!Ot)return Fc(t),Ot=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Ys(t.type,t.memoizedProps)),l=!l),l&&Jt&&C_(t),Fc(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){Jt=cl(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}Jt=null}}else e===27?(e=Jt,u_(t.type)?(t=Zs,Zs=null,Jt=t):Jt=e):Jt=Se?cl(t.stateNode.nextSibling):null;return!0}function ha(){Jt=Se=null,Ot=!1}function Pc(){var t=M_;return t!==null&&(Oe===null?Oe=t:Oe.push.apply(Oe,t),M_=null),t}function da(t){M_===null?M_=[t]:M_.push(t)}var Rr=Q(null),D_=null,Nl=null;function Zl(t,e,l){L(Rr,e._currentValue),e._currentValue=l}function Ol(t){t._currentValue=Rr.current,F(Rr)}function Nr(t,e,l){for(;t!==null;){var _=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,_!==null&&(_.childLanes|=e)):_!==null&&(_.childLanes&e)!==e&&(_.childLanes|=e),t===l)break;t=t.return}}function Or(t,e,l,_){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){var h=i.child;s=s.firstContext;t:for(;s!==null;){var v=s;s=i;for(var A=0;A<e.length;A++)if(v.context===e[A]){s.lanes|=l,v=s.alternate,v!==null&&(v.lanes|=l),Nr(s.return,l,t),_||(h=null);break t}s=v.next}}else if(i.tag===18){if(h=i.return,h===null)throw Error(a(341));h.lanes|=l,s=h.alternate,s!==null&&(s.lanes|=l),Nr(h,l,t),h=null}else h=i.child;if(h!==null)h.return=i;else for(h=i;h!==null;){if(h===t){h=null;break}if(i=h.sibling,i!==null){i.return=h.return,h=i;break}h=h.return}i=h}}function ma(t,e,l,_){t=null;for(var i=e,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var h=i.alternate;if(h===null)throw Error(a(387));if(h=h.memoizedProps,h!==null){var v=i.type;we(i.pendingProps.value,h.value)||(t!==null?t.push(v):t=[v])}}else if(i===w.current){if(h=i.alternate,h===null)throw Error(a(387));h.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Xa):t=[Xa])}i=i.return}t!==null&&Or(e,t,l,_),e.flags|=262144}function Di(t){for(t=t.firstContext;t!==null;){if(!we(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function z_(t){D_=t,Nl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function pe(t){return to(D_,t)}function zi(t,e){return D_===null&&z_(t),to(t,e)}function to(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},Nl===null){if(t===null)throw Error(a(308));Nl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Nl=Nl.next=e;return l}var zm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,_){t.push(_)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Hm=o.unstable_scheduleCallback,Um=o.unstable_NormalPriority,ue={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mr(){return{controller:new zm,data:new Map,refCount:0}}function Ta(t){t.refCount--,t.refCount===0&&Hm(Um,function(){t.controller.abort()})}var ga=null,Cr=0,Tn=0,gn=null;function jm(t,e){if(ga===null){var l=ga=[];Cr=0,Tn=zs(),gn={status:"pending",value:void 0,then:function(_){l.push(_)}}}return Cr++,e.then(eo,eo),e}function eo(){if(--Cr===0&&ga!==null){gn!==null&&(gn.status="fulfilled");var t=ga;ga=null,Tn=0,gn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function wm(t,e){var l=[],_={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return t.then(function(){_.status="fulfilled",_.value=e;for(var i=0;i<l.length;i++)(0,l[i])(e)},function(i){for(_.status="rejected",_.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),_}var lo=I.S;I.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&jm(t,e),lo!==null&&lo(t,e)};var H_=Q(null);function Dr(){var t=H_.current;return t!==null?t:Yt.pooledCache}function Hi(t,e){e===null?L(H_,H_.current):L(H_,e.pool)}function _o(){var t=Dr();return t===null?null:{parent:ue._currentValue,pool:t}}var va=Error(a(460)),no=Error(a(474)),Ui=Error(a(542)),zr={then:function(){}};function ao(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ji(){}function io(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(ji,ji),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ro(t),t;default:if(typeof e.status=="string")e.then(ji,ji);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=e,t.status="pending",t.then(function(_){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=_}},function(_){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=_}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ro(t),t}throw pa=e,va}}var pa=null;function uo(){if(pa===null)throw Error(a(459));var t=pa;return pa=null,t}function ro(t){if(t===va||t===Ui)throw Error(a(483))}var kl=!1;function Hr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ur(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function $l(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Kl(t,e,l){var _=t.updateQueue;if(_===null)return null;if(_=_.shared,(Ct&2)!==0){var i=_.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),_.pending=e,e=Ni(t),$c(t,null,l),e}return Ri(t,_,e,l),Ni(t)}function ya(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var _=e.lanes;_&=t.pendingLanes,l|=_,e.lanes=l,ec(t,l)}}function jr(t,e){var l=t.updateQueue,_=t.alternate;if(_!==null&&(_=_.updateQueue,l===_)){var i=null,s=null;if(l=l.firstBaseUpdate,l!==null){do{var h={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};s===null?i=s=h:s=s.next=h,l=l.next}while(l!==null);s===null?i=s=e:s=s.next=e}else i=s=e;l={baseState:_.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:_.shared,callbacks:_.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var wr=!1;function Aa(){if(wr){var t=gn;if(t!==null)throw t}}function Ea(t,e,l,_){wr=!1;var i=t.updateQueue;kl=!1;var s=i.firstBaseUpdate,h=i.lastBaseUpdate,v=i.shared.pending;if(v!==null){i.shared.pending=null;var A=v,z=A.next;A.next=null,h===null?s=z:h.next=z,h=A;var Y=t.alternate;Y!==null&&(Y=Y.updateQueue,v=Y.lastBaseUpdate,v!==h&&(v===null?Y.firstBaseUpdate=z:v.next=z,Y.lastBaseUpdate=A))}if(s!==null){var X=i.baseState;h=0,Y=z=A=null,v=s;do{var U=v.lane&-536870913,j=U!==v.lane;if(j?(Lt&U)===U:(_&U)===U){U!==0&&U===Tn&&(wr=!0),Y!==null&&(Y=Y.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var ct=t,st=v;U=e;var wt=l;switch(st.tag){case 1:if(ct=st.payload,typeof ct=="function"){X=ct.call(wt,X,U);break t}X=ct;break t;case 3:ct.flags=ct.flags&-65537|128;case 0:if(ct=st.payload,U=typeof ct=="function"?ct.call(wt,X,U):ct,U==null)break t;X=g({},X,U);break t;case 2:kl=!0}}U=v.callback,U!==null&&(t.flags|=64,j&&(t.flags|=8192),j=i.callbacks,j===null?i.callbacks=[U]:j.push(U))}else j={lane:U,tag:v.tag,payload:v.payload,callback:v.callback,next:null},Y===null?(z=Y=j,A=X):Y=Y.next=j,h|=U;if(v=v.next,v===null){if(v=i.shared.pending,v===null)break;j=v,v=j.next,j.next=null,i.lastBaseUpdate=j,i.shared.pending=null}}while(!0);Y===null&&(A=X),i.baseState=A,i.firstBaseUpdate=z,i.lastBaseUpdate=Y,s===null&&(i.shared.lanes=0),__|=h,t.lanes=h,t.memoizedState=X}}function so(t,e){if(typeof t!="function")throw Error(a(191,t));t.call(e)}function fo(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)so(l[t],e)}var vn=Q(null),wi=Q(0);function co(t,e){t=jl,L(wi,t),L(vn,e),jl=t|e.baseLanes}function Ir(){L(wi,jl),L(vn,vn.current)}function Br(){jl=wi.current,F(vn),F(wi)}var Wl=0,gt=null,Ut=null,_e=null,Ii=!1,pn=!1,U_=!1,Bi=0,Sa=0,yn=null,Im=0;function te(){throw Error(a(321))}function Gr(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!we(t[l],e[l]))return!1;return!0}function qr(t,e,l,_,i,s){return Wl=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,I.H=t===null||t.memoizedState===null?Ko:Wo,U_=!1,s=l(_,i),U_=!1,pn&&(s=ho(e,l,_,i)),oo(t),s}function oo(t){I.H=Qi;var e=Ut!==null&&Ut.next!==null;if(Wl=0,_e=Ut=gt=null,Ii=!1,Sa=0,yn=null,e)throw Error(a(300));t===null||fe||(t=t.dependencies,t!==null&&Di(t)&&(fe=!0))}function ho(t,e,l,_){gt=t;var i=0;do{if(pn&&(yn=null),Sa=0,pn=!1,25<=i)throw Error(a(301));if(i+=1,_e=Ut=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}I.H=Qm,s=e(l,_)}while(pn);return s}function Bm(){var t=I.H,e=t.useState()[0];return e=typeof e.then=="function"?La(e):e,t=t.useState()[0],(Ut!==null?Ut.memoizedState:null)!==t&&(gt.flags|=1024),e}function Yr(){var t=Bi!==0;return Bi=0,t}function Vr(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Xr(t){if(Ii){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Ii=!1}Wl=0,_e=Ut=gt=null,pn=!1,Sa=Bi=0,yn=null}function Re(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?gt.memoizedState=_e=t:_e=_e.next=t,_e}function ne(){if(Ut===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=_e===null?gt.memoizedState:_e.next;if(e!==null)_e=e,Ut=t;else{if(t===null)throw gt.alternate===null?Error(a(467)):Error(a(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},_e===null?gt.memoizedState=_e=t:_e=_e.next=t}return _e}function Qr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function La(t){var e=Sa;return Sa+=1,yn===null&&(yn=[]),t=io(yn,t,e),e=gt,(_e===null?e.memoizedState:_e.next)===null&&(e=e.alternate,I.H=e===null||e.memoizedState===null?Ko:Wo),t}function Gi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return La(t);if(t.$$typeof===$)return pe(t)}throw Error(a(438,String(t)))}function Zr(t){var e=null,l=gt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var _=gt.alternate;_!==null&&(_=_.updateQueue,_!==null&&(_=_.memoCache,_!=null&&(e={data:_.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Qr(),gt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),_=0;_<t;_++)l[_]=mt;return e.index++,l}function Ml(t,e){return typeof e=="function"?e(t):e}function qi(t){var e=ne();return kr(e,Ut,t)}function kr(t,e,l){var _=t.queue;if(_===null)throw Error(a(311));_.lastRenderedReducer=l;var i=t.baseQueue,s=_.pending;if(s!==null){if(i!==null){var h=i.next;i.next=s.next,s.next=h}e.baseQueue=i=s,_.pending=null}if(s=t.baseState,i===null)t.memoizedState=s;else{e=i.next;var v=h=null,A=null,z=e,Y=!1;do{var X=z.lane&-536870913;if(X!==z.lane?(Lt&X)===X:(Wl&X)===X){var U=z.revertLane;if(U===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),X===Tn&&(Y=!0);else if((Wl&U)===U){z=z.next,U===Tn&&(Y=!0);continue}else X={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},A===null?(v=A=X,h=s):A=A.next=X,gt.lanes|=U,__|=U;X=z.action,U_&&l(s,X),s=z.hasEagerState?z.eagerState:l(s,X)}else U={lane:X,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},A===null?(v=A=U,h=s):A=A.next=U,gt.lanes|=X,__|=X;z=z.next}while(z!==null&&z!==e);if(A===null?h=s:A.next=v,!we(s,t.memoizedState)&&(fe=!0,Y&&(l=gn,l!==null)))throw l;t.memoizedState=s,t.baseState=h,t.baseQueue=A,_.lastRenderedState=s}return i===null&&(_.lanes=0),[t.memoizedState,_.dispatch]}function $r(t){var e=ne(),l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=t;var _=l.dispatch,i=l.pending,s=e.memoizedState;if(i!==null){l.pending=null;var h=i=i.next;do s=t(s,h.action),h=h.next;while(h!==i);we(s,e.memoizedState)||(fe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),l.lastRenderedState=s}return[s,_]}function mo(t,e,l){var _=gt,i=ne(),s=Ot;if(s){if(l===void 0)throw Error(a(407));l=l()}else l=e();var h=!we((Ut||i).memoizedState,l);h&&(i.memoizedState=l,fe=!0),i=i.queue;var v=vo.bind(null,_,i,t);if(ba(2048,8,v,[t]),i.getSnapshot!==e||h||_e!==null&&_e.memoizedState.tag&1){if(_.flags|=2048,An(9,Yi(),go.bind(null,_,i,l,e),null),Yt===null)throw Error(a(349));s||(Wl&124)!==0||To(_,e,l)}return l}function To(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=gt.updateQueue,e===null?(e=Qr(),gt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function go(t,e,l,_){e.value=l,e.getSnapshot=_,po(e)&&yo(t)}function vo(t,e,l){return l(function(){po(e)&&yo(t)})}function po(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!we(t,l)}catch{return!0}}function yo(t){var e=on(t,2);e!==null&&Ve(e,t,2)}function Kr(t){var e=Re();if(typeof t=="function"){var l=t;if(t=l(),U_){Vl(!0);try{l()}finally{Vl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ml,lastRenderedState:t},e}function Ao(t,e,l,_){return t.baseState=l,kr(t,Ut,typeof _=="function"?_:Ml)}function Gm(t,e,l,_,i){if(Xi(t))throw Error(a(485));if(t=e.action,t!==null){var s={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){s.listeners.push(h)}};I.T!==null?l(!0):s.isTransition=!1,_(s),l=e.pending,l===null?(s.next=e.pending=s,Eo(e,s)):(s.next=l.next,e.pending=l.next=s)}}function Eo(t,e){var l=e.action,_=e.payload,i=t.state;if(e.isTransition){var s=I.T,h={};I.T=h;try{var v=l(i,_),A=I.S;A!==null&&A(h,v),So(t,e,v)}catch(z){Wr(t,e,z)}finally{I.T=s}}else try{s=l(i,_),So(t,e,s)}catch(z){Wr(t,e,z)}}function So(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(_){Lo(t,e,_)},function(_){return Wr(t,e,_)}):Lo(t,e,l)}function Lo(t,e,l){e.status="fulfilled",e.value=l,bo(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Eo(t,l)))}function Wr(t,e,l){var _=t.pending;if(t.pending=null,_!==null){_=_.next;do e.status="rejected",e.reason=l,bo(e),e=e.next;while(e!==_)}t.action=null}function bo(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function xo(t,e){return e}function Ro(t,e){if(Ot){var l=Yt.formState;if(l!==null){t:{var _=gt;if(Ot){if(Jt){e:{for(var i=Jt,s=hl;i.nodeType!==8;){if(!s){i=null;break e}if(i=cl(i.nextSibling),i===null){i=null;break e}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Jt=cl(i.nextSibling),_=i.data==="F!";break t}}C_(_)}_=!1}_&&(e=l[0])}}return l=Re(),l.memoizedState=l.baseState=e,_={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},l.queue=_,l=Zo.bind(null,gt,_),_.dispatch=l,_=Kr(!1),s=es.bind(null,gt,!1,_.queue),_=Re(),i={state:e,dispatch:null,action:t,pending:null},_.queue=i,l=Gm.bind(null,gt,i,s,l),i.dispatch=l,_.memoizedState=t,[e,l,!1]}function No(t){var e=ne();return Oo(e,Ut,t)}function Oo(t,e,l){if(e=kr(t,e,xo)[0],t=qi(Ml)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var _=La(e)}catch(h){throw h===va?Ui:h}else _=e;e=ne();var i=e.queue,s=i.dispatch;return l!==e.memoizedState&&(gt.flags|=2048,An(9,Yi(),qm.bind(null,i,l),null)),[_,s,t]}function qm(t,e){t.action=e}function Mo(t){var e=ne(),l=Ut;if(l!==null)return Oo(e,l,t);ne(),e=e.memoizedState,l=ne();var _=l.queue.dispatch;return l.memoizedState=t,[e,_,!1]}function An(t,e,l,_){return t={tag:t,create:l,deps:_,inst:e,next:null},e=gt.updateQueue,e===null&&(e=Qr(),gt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(_=l.next,l.next=t,t.next=_,e.lastEffect=t),t}function Yi(){return{destroy:void 0,resource:void 0}}function Co(){return ne().memoizedState}function Vi(t,e,l,_){var i=Re();_=_===void 0?null:_,gt.flags|=t,i.memoizedState=An(1|e,Yi(),l,_)}function ba(t,e,l,_){var i=ne();_=_===void 0?null:_;var s=i.memoizedState.inst;Ut!==null&&_!==null&&Gr(_,Ut.memoizedState.deps)?i.memoizedState=An(e,s,l,_):(gt.flags|=t,i.memoizedState=An(1|e,s,l,_))}function Do(t,e){Vi(8390656,8,t,e)}function zo(t,e){ba(2048,8,t,e)}function Ho(t,e){return ba(4,2,t,e)}function Uo(t,e){return ba(4,4,t,e)}function jo(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wo(t,e,l){l=l!=null?l.concat([t]):null,ba(4,4,jo.bind(null,e,t),l)}function Jr(){}function Io(t,e){var l=ne();e=e===void 0?null:e;var _=l.memoizedState;return e!==null&&Gr(e,_[1])?_[0]:(l.memoizedState=[t,e],t)}function Bo(t,e){var l=ne();e=e===void 0?null:e;var _=l.memoizedState;if(e!==null&&Gr(e,_[1]))return _[0];if(_=t(),U_){Vl(!0);try{t()}finally{Vl(!1)}}return l.memoizedState=[_,e],_}function Fr(t,e,l){return l===void 0||(Wl&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=Yh(),gt.lanes|=t,__|=t,l)}function Go(t,e,l,_){return we(l,e)?l:vn.current!==null?(t=Fr(t,l,_),we(t,e)||(fe=!0),t):(Wl&42)===0?(fe=!0,t.memoizedState=l):(t=Yh(),gt.lanes|=t,__|=t,e)}function qo(t,e,l,_,i){var s=J.p;J.p=s!==0&&8>s?s:8;var h=I.T,v={};I.T=v,es(t,!1,e,l);try{var A=i(),z=I.S;if(z!==null&&z(v,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var Y=wm(A,_);xa(t,e,Y,Ye(t))}else xa(t,e,_,Ye(t))}catch(X){xa(t,e,{then:function(){},status:"rejected",reason:X},Ye())}finally{J.p=s,I.T=h}}function Ym(){}function Pr(t,e,l,_){if(t.tag!==5)throw Error(a(476));var i=Yo(t).queue;qo(t,i,e,it,l===null?Ym:function(){return Vo(t),l(_)})}function Yo(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ml,lastRenderedState:it},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ml,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Vo(t){var e=Yo(t).next.queue;xa(t,e,{},Ye())}function ts(){return pe(Xa)}function Xo(){return ne().memoizedState}function Qo(){return ne().memoizedState}function Vm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Ye();t=$l(l);var _=Kl(e,t,l);_!==null&&(Ve(_,e,l),ya(_,e,l)),e={cache:Mr()},t.payload=e;return}e=e.return}}function Xm(t,e,l){var _=Ye();l={lane:_,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Xi(t)?ko(e,l):(l=yr(t,e,l,_),l!==null&&(Ve(l,t,_),$o(l,e,_)))}function Zo(t,e,l){var _=Ye();xa(t,e,l,_)}function xa(t,e,l,_){var i={lane:_,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Xi(t))ko(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var h=e.lastRenderedState,v=s(h,l);if(i.hasEagerState=!0,i.eagerState=v,we(v,h))return Ri(t,e,i,0),Yt===null&&xi(),!1}catch{}finally{}if(l=yr(t,e,i,_),l!==null)return Ve(l,t,_),$o(l,e,_),!0}return!1}function es(t,e,l,_){if(_={lane:2,revertLane:zs(),action:_,hasEagerState:!1,eagerState:null,next:null},Xi(t)){if(e)throw Error(a(479))}else e=yr(t,l,_,2),e!==null&&Ve(e,t,2)}function Xi(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function ko(t,e){pn=Ii=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function $o(t,e,l){if((l&4194048)!==0){var _=e.lanes;_&=t.pendingLanes,l|=_,e.lanes=l,ec(t,l)}}var Qi={readContext:pe,use:Gi,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useLayoutEffect:te,useInsertionEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useSyncExternalStore:te,useId:te,useHostTransitionStatus:te,useFormState:te,useActionState:te,useOptimistic:te,useMemoCache:te,useCacheRefresh:te},Ko={readContext:pe,use:Gi,useCallback:function(t,e){return Re().memoizedState=[t,e===void 0?null:e],t},useContext:pe,useEffect:Do,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,Vi(4194308,4,jo.bind(null,e,t),l)},useLayoutEffect:function(t,e){return Vi(4194308,4,t,e)},useInsertionEffect:function(t,e){Vi(4,2,t,e)},useMemo:function(t,e){var l=Re();e=e===void 0?null:e;var _=t();if(U_){Vl(!0);try{t()}finally{Vl(!1)}}return l.memoizedState=[_,e],_},useReducer:function(t,e,l){var _=Re();if(l!==void 0){var i=l(e);if(U_){Vl(!0);try{l(e)}finally{Vl(!1)}}}else i=e;return _.memoizedState=_.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},_.queue=t,t=t.dispatch=Xm.bind(null,gt,t),[_.memoizedState,t]},useRef:function(t){var e=Re();return t={current:t},e.memoizedState=t},useState:function(t){t=Kr(t);var e=t.queue,l=Zo.bind(null,gt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Jr,useDeferredValue:function(t,e){var l=Re();return Fr(l,t,e)},useTransition:function(){var t=Kr(!1);return t=qo.bind(null,gt,t.queue,!0,!1),Re().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var _=gt,i=Re();if(Ot){if(l===void 0)throw Error(a(407));l=l()}else{if(l=e(),Yt===null)throw Error(a(349));(Lt&124)!==0||To(_,e,l)}i.memoizedState=l;var s={value:l,getSnapshot:e};return i.queue=s,Do(vo.bind(null,_,s,t),[t]),_.flags|=2048,An(9,Yi(),go.bind(null,_,s,l,e),null),l},useId:function(){var t=Re(),e=Yt.identifierPrefix;if(Ot){var l=Rl,_=xl;l=(_&~(1<<32-je(_)-1)).toString(32)+l,e="«"+e+"R"+l,l=Bi++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=Im++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:ts,useFormState:Ro,useActionState:Ro,useOptimistic:function(t){var e=Re();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=es.bind(null,gt,!0,l),l.dispatch=e,[t,e]},useMemoCache:Zr,useCacheRefresh:function(){return Re().memoizedState=Vm.bind(null,gt)}},Wo={readContext:pe,use:Gi,useCallback:Io,useContext:pe,useEffect:zo,useImperativeHandle:wo,useInsertionEffect:Ho,useLayoutEffect:Uo,useMemo:Bo,useReducer:qi,useRef:Co,useState:function(){return qi(Ml)},useDebugValue:Jr,useDeferredValue:function(t,e){var l=ne();return Go(l,Ut.memoizedState,t,e)},useTransition:function(){var t=qi(Ml)[0],e=ne().memoizedState;return[typeof t=="boolean"?t:La(t),e]},useSyncExternalStore:mo,useId:Xo,useHostTransitionStatus:ts,useFormState:No,useActionState:No,useOptimistic:function(t,e){var l=ne();return Ao(l,Ut,t,e)},useMemoCache:Zr,useCacheRefresh:Qo},Qm={readContext:pe,use:Gi,useCallback:Io,useContext:pe,useEffect:zo,useImperativeHandle:wo,useInsertionEffect:Ho,useLayoutEffect:Uo,useMemo:Bo,useReducer:$r,useRef:Co,useState:function(){return $r(Ml)},useDebugValue:Jr,useDeferredValue:function(t,e){var l=ne();return Ut===null?Fr(l,t,e):Go(l,Ut.memoizedState,t,e)},useTransition:function(){var t=$r(Ml)[0],e=ne().memoizedState;return[typeof t=="boolean"?t:La(t),e]},useSyncExternalStore:mo,useId:Xo,useHostTransitionStatus:ts,useFormState:Mo,useActionState:Mo,useOptimistic:function(t,e){var l=ne();return Ut!==null?Ao(l,Ut,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Zr,useCacheRefresh:Qo},En=null,Ra=0;function Zi(t){var e=Ra;return Ra+=1,En===null&&(En=[]),io(En,t,e)}function Na(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ki(t,e){throw e.$$typeof===y?Error(a(525)):(t=Object.prototype.toString.call(e),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Jo(t){var e=t._init;return e(t._payload)}function Fo(t){function e(C,R){if(t){var D=C.deletions;D===null?(C.deletions=[R],C.flags|=16):D.push(R)}}function l(C,R){if(!t)return null;for(;R!==null;)e(C,R),R=R.sibling;return null}function _(C){for(var R=new Map;C!==null;)C.key!==null?R.set(C.key,C):R.set(C.index,C),C=C.sibling;return R}function i(C,R){return C=bl(C,R),C.index=0,C.sibling=null,C}function s(C,R,D){return C.index=D,t?(D=C.alternate,D!==null?(D=D.index,D<R?(C.flags|=67108866,R):D):(C.flags|=67108866,R)):(C.flags|=1048576,R)}function h(C){return t&&C.alternate===null&&(C.flags|=67108866),C}function v(C,R,D,V){return R===null||R.tag!==6?(R=Er(D,C.mode,V),R.return=C,R):(R=i(R,D),R.return=C,R)}function A(C,R,D,V){var at=D.type;return at===H?Y(C,R,D.props.children,V,D.key):R!==null&&(R.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===_t&&Jo(at)===R.type)?(R=i(R,D.props),Na(R,D),R.return=C,R):(R=Oi(D.type,D.key,D.props,null,C.mode,V),Na(R,D),R.return=C,R)}function z(C,R,D,V){return R===null||R.tag!==4||R.stateNode.containerInfo!==D.containerInfo||R.stateNode.implementation!==D.implementation?(R=Sr(D,C.mode,V),R.return=C,R):(R=i(R,D.children||[]),R.return=C,R)}function Y(C,R,D,V,at){return R===null||R.tag!==7?(R=R_(D,C.mode,V,at),R.return=C,R):(R=i(R,D),R.return=C,R)}function X(C,R,D){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=Er(""+R,C.mode,D),R.return=C,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case x:return D=Oi(R.type,R.key,R.props,null,C.mode,D),Na(D,R),D.return=C,D;case M:return R=Sr(R,C.mode,D),R.return=C,R;case _t:var V=R._init;return R=V(R._payload),X(C,R,D)}if(ht(R)||ot(R))return R=R_(R,C.mode,D,null),R.return=C,R;if(typeof R.then=="function")return X(C,Zi(R),D);if(R.$$typeof===$)return X(C,zi(C,R),D);ki(C,R)}return null}function U(C,R,D,V){var at=R!==null?R.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return at!==null?null:v(C,R,""+D,V);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case x:return D.key===at?A(C,R,D,V):null;case M:return D.key===at?z(C,R,D,V):null;case _t:return at=D._init,D=at(D._payload),U(C,R,D,V)}if(ht(D)||ot(D))return at!==null?null:Y(C,R,D,V,null);if(typeof D.then=="function")return U(C,R,Zi(D),V);if(D.$$typeof===$)return U(C,R,zi(C,D),V);ki(C,D)}return null}function j(C,R,D,V,at){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return C=C.get(D)||null,v(R,C,""+V,at);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return C=C.get(V.key===null?D:V.key)||null,A(R,C,V,at);case M:return C=C.get(V.key===null?D:V.key)||null,z(R,C,V,at);case _t:var vt=V._init;return V=vt(V._payload),j(C,R,D,V,at)}if(ht(V)||ot(V))return C=C.get(D)||null,Y(R,C,V,at,null);if(typeof V.then=="function")return j(C,R,D,Zi(V),at);if(V.$$typeof===$)return j(C,R,D,zi(R,V),at);ki(R,V)}return null}function ct(C,R,D,V){for(var at=null,vt=null,rt=R,ft=R=0,oe=null;rt!==null&&ft<D.length;ft++){rt.index>ft?(oe=rt,rt=null):oe=rt.sibling;var xt=U(C,rt,D[ft],V);if(xt===null){rt===null&&(rt=oe);break}t&&rt&&xt.alternate===null&&e(C,rt),R=s(xt,R,ft),vt===null?at=xt:vt.sibling=xt,vt=xt,rt=oe}if(ft===D.length)return l(C,rt),Ot&&O_(C,ft),at;if(rt===null){for(;ft<D.length;ft++)rt=X(C,D[ft],V),rt!==null&&(R=s(rt,R,ft),vt===null?at=rt:vt.sibling=rt,vt=rt);return Ot&&O_(C,ft),at}for(rt=_(rt);ft<D.length;ft++)oe=j(rt,C,ft,D[ft],V),oe!==null&&(t&&oe.alternate!==null&&rt.delete(oe.key===null?ft:oe.key),R=s(oe,R,ft),vt===null?at=oe:vt.sibling=oe,vt=oe);return t&&rt.forEach(function(o_){return e(C,o_)}),Ot&&O_(C,ft),at}function st(C,R,D,V){if(D==null)throw Error(a(151));for(var at=null,vt=null,rt=R,ft=R=0,oe=null,xt=D.next();rt!==null&&!xt.done;ft++,xt=D.next()){rt.index>ft?(oe=rt,rt=null):oe=rt.sibling;var o_=U(C,rt,xt.value,V);if(o_===null){rt===null&&(rt=oe);break}t&&rt&&o_.alternate===null&&e(C,rt),R=s(o_,R,ft),vt===null?at=o_:vt.sibling=o_,vt=o_,rt=oe}if(xt.done)return l(C,rt),Ot&&O_(C,ft),at;if(rt===null){for(;!xt.done;ft++,xt=D.next())xt=X(C,xt.value,V),xt!==null&&(R=s(xt,R,ft),vt===null?at=xt:vt.sibling=xt,vt=xt);return Ot&&O_(C,ft),at}for(rt=_(rt);!xt.done;ft++,xt=D.next())xt=j(rt,C,ft,xt.value,V),xt!==null&&(t&&xt.alternate!==null&&rt.delete(xt.key===null?ft:xt.key),R=s(xt,R,ft),vt===null?at=xt:vt.sibling=xt,vt=xt);return t&&rt.forEach(function(ZT){return e(C,ZT)}),Ot&&O_(C,ft),at}function wt(C,R,D,V){if(typeof D=="object"&&D!==null&&D.type===H&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case x:t:{for(var at=D.key;R!==null;){if(R.key===at){if(at=D.type,at===H){if(R.tag===7){l(C,R.sibling),V=i(R,D.props.children),V.return=C,C=V;break t}}else if(R.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===_t&&Jo(at)===R.type){l(C,R.sibling),V=i(R,D.props),Na(V,D),V.return=C,C=V;break t}l(C,R);break}else e(C,R);R=R.sibling}D.type===H?(V=R_(D.props.children,C.mode,V,D.key),V.return=C,C=V):(V=Oi(D.type,D.key,D.props,null,C.mode,V),Na(V,D),V.return=C,C=V)}return h(C);case M:t:{for(at=D.key;R!==null;){if(R.key===at)if(R.tag===4&&R.stateNode.containerInfo===D.containerInfo&&R.stateNode.implementation===D.implementation){l(C,R.sibling),V=i(R,D.children||[]),V.return=C,C=V;break t}else{l(C,R);break}else e(C,R);R=R.sibling}V=Sr(D,C.mode,V),V.return=C,C=V}return h(C);case _t:return at=D._init,D=at(D._payload),wt(C,R,D,V)}if(ht(D))return ct(C,R,D,V);if(ot(D)){if(at=ot(D),typeof at!="function")throw Error(a(150));return D=at.call(D),st(C,R,D,V)}if(typeof D.then=="function")return wt(C,R,Zi(D),V);if(D.$$typeof===$)return wt(C,R,zi(C,D),V);ki(C,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,R!==null&&R.tag===6?(l(C,R.sibling),V=i(R,D),V.return=C,C=V):(l(C,R),V=Er(D,C.mode,V),V.return=C,C=V),h(C)):l(C,R)}return function(C,R,D,V){try{Ra=0;var at=wt(C,R,D,V);return En=null,at}catch(rt){if(rt===va||rt===Ui)throw rt;var vt=Ie(29,rt,null,C.mode);return vt.lanes=V,vt.return=C,vt}finally{}}}var Sn=Fo(!0),Po=Fo(!1),ll=Q(null),dl=null;function Jl(t){var e=t.alternate;L(re,re.current&1),L(ll,t),dl===null&&(e===null||vn.current!==null||e.memoizedState!==null)&&(dl=t)}function th(t){if(t.tag===22){if(L(re,re.current),L(ll,t),dl===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(dl=t)}}else Fl()}function Fl(){L(re,re.current),L(ll,ll.current)}function Cl(t){F(ll),dl===t&&(dl=null),F(re)}var re=Q(0);function $i(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||Qs(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function ls(t,e,l,_){e=t.memoizedState,l=l(_,e),l=l==null?e:g({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var _s={enqueueSetState:function(t,e,l){t=t._reactInternals;var _=Ye(),i=$l(_);i.payload=e,l!=null&&(i.callback=l),e=Kl(t,i,_),e!==null&&(Ve(e,t,_),ya(e,t,_))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var _=Ye(),i=$l(_);i.tag=1,i.payload=e,l!=null&&(i.callback=l),e=Kl(t,i,_),e!==null&&(Ve(e,t,_),ya(e,t,_))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Ye(),_=$l(l);_.tag=2,e!=null&&(_.callback=e),e=Kl(t,_,l),e!==null&&(Ve(e,t,l),ya(e,t,l))}};function eh(t,e,l,_,i,s,h){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(_,s,h):e.prototype&&e.prototype.isPureReactComponent?!fa(l,_)||!fa(i,s):!0}function lh(t,e,l,_){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,_),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,_),e.state!==t&&_s.enqueueReplaceState(e,e.state,null)}function j_(t,e){var l=e;if("ref"in e){l={};for(var _ in e)_!=="ref"&&(l[_]=e[_])}if(t=t.defaultProps){l===e&&(l=g({},l));for(var i in t)l[i]===void 0&&(l[i]=t[i])}return l}var Ki=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function _h(t){Ki(t)}function nh(t){console.error(t)}function ah(t){Ki(t)}function Wi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(_){setTimeout(function(){throw _})}}function ih(t,e,l){try{var _=t.onCaughtError;_(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ns(t,e,l){return l=$l(l),l.tag=3,l.payload={element:null},l.callback=function(){Wi(t,e)},l}function uh(t){return t=$l(t),t.tag=3,t}function rh(t,e,l,_){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var s=_.value;t.payload=function(){return i(s)},t.callback=function(){ih(e,l,_)}}var h=l.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(t.callback=function(){ih(e,l,_),typeof i!="function"&&(n_===null?n_=new Set([this]):n_.add(this));var v=_.stack;this.componentDidCatch(_.value,{componentStack:v!==null?v:""})})}function Zm(t,e,l,_,i){if(l.flags|=32768,_!==null&&typeof _=="object"&&typeof _.then=="function"){if(e=l.alternate,e!==null&&ma(e,l,i,!0),l=ll.current,l!==null){switch(l.tag){case 13:return dl===null?Ns():l.alternate===null&&Ft===0&&(Ft=3),l.flags&=-257,l.flags|=65536,l.lanes=i,_===zr?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([_]):e.add(_),Ms(t,_,i)),!1;case 22:return l.flags|=65536,_===zr?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([_])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([_]):l.add(_)),Ms(t,_,i)),!1}throw Error(a(435,l.tag))}return Ms(t,_,i),Ns(),!1}if(Ot)return e=ll.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,_!==xr&&(t=Error(a(422),{cause:_}),da(Fe(t,l)))):(_!==xr&&(e=Error(a(423),{cause:_}),da(Fe(e,l))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,_=Fe(_,l),i=ns(t.stateNode,_,i),jr(t,i),Ft!==4&&(Ft=2)),!1;var s=Error(a(520),{cause:_});if(s=Fe(s,l),Ua===null?Ua=[s]:Ua.push(s),Ft!==4&&(Ft=2),e===null)return!0;_=Fe(_,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=i&-i,l.lanes|=t,t=ns(l.stateNode,_,t),jr(l,t),!1;case 1:if(e=l.type,s=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(n_===null||!n_.has(s))))return l.flags|=65536,i&=-i,l.lanes|=i,i=uh(i),rh(i,t,l,_),jr(l,i),!1}l=l.return}while(l!==null);return!1}var sh=Error(a(461)),fe=!1;function de(t,e,l,_){e.child=t===null?Po(e,null,l,_):Sn(e,t.child,l,_)}function fh(t,e,l,_,i){l=l.render;var s=e.ref;if("ref"in _){var h={};for(var v in _)v!=="ref"&&(h[v]=_[v])}else h=_;return z_(e),_=qr(t,e,l,h,s,i),v=Yr(),t!==null&&!fe?(Vr(t,e,i),Dl(t,e,i)):(Ot&&v&&Lr(e),e.flags|=1,de(t,e,_,i),e.child)}function ch(t,e,l,_,i){if(t===null){var s=l.type;return typeof s=="function"&&!Ar(s)&&s.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=s,oh(t,e,s,_,i)):(t=Oi(l.type,null,_,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!os(t,i)){var h=s.memoizedProps;if(l=l.compare,l=l!==null?l:fa,l(h,_)&&t.ref===e.ref)return Dl(t,e,i)}return e.flags|=1,t=bl(s,_),t.ref=e.ref,t.return=e,e.child=t}function oh(t,e,l,_,i){if(t!==null){var s=t.memoizedProps;if(fa(s,_)&&t.ref===e.ref)if(fe=!1,e.pendingProps=_=s,os(t,i))(t.flags&131072)!==0&&(fe=!0);else return e.lanes=t.lanes,Dl(t,e,i)}return as(t,e,l,_,i)}function hh(t,e,l){var _=e.pendingProps,i=_.children,s=t!==null?t.memoizedState:null;if(_.mode==="hidden"){if((e.flags&128)!==0){if(_=s!==null?s.baseLanes|l:l,t!==null){for(i=e.child=t.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;e.childLanes=s&~_}else e.childLanes=0,e.child=null;return dh(t,e,_,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Hi(e,s!==null?s.cachePool:null),s!==null?co(e,s):Ir(),th(e);else return e.lanes=e.childLanes=536870912,dh(t,e,s!==null?s.baseLanes|l:l,l)}else s!==null?(Hi(e,s.cachePool),co(e,s),Fl(),e.memoizedState=null):(t!==null&&Hi(e,null),Ir(),Fl());return de(t,e,i,l),e.child}function dh(t,e,l,_){var i=Dr();return i=i===null?null:{parent:ue._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&Hi(e,null),Ir(),th(e),t!==null&&ma(t,e,_,!0),null}function Ji(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(a(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function as(t,e,l,_,i){return z_(e),l=qr(t,e,l,_,void 0,i),_=Yr(),t!==null&&!fe?(Vr(t,e,i),Dl(t,e,i)):(Ot&&_&&Lr(e),e.flags|=1,de(t,e,l,i),e.child)}function mh(t,e,l,_,i,s){return z_(e),e.updateQueue=null,l=ho(e,_,l,i),oo(t),_=Yr(),t!==null&&!fe?(Vr(t,e,s),Dl(t,e,s)):(Ot&&_&&Lr(e),e.flags|=1,de(t,e,l,s),e.child)}function Th(t,e,l,_,i){if(z_(e),e.stateNode===null){var s=hn,h=l.contextType;typeof h=="object"&&h!==null&&(s=pe(h)),s=new l(_,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=_s,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=_,s.state=e.memoizedState,s.refs={},Hr(e),h=l.contextType,s.context=typeof h=="object"&&h!==null?pe(h):hn,s.state=e.memoizedState,h=l.getDerivedStateFromProps,typeof h=="function"&&(ls(e,l,h,_),s.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(h=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),h!==s.state&&_s.enqueueReplaceState(s,s.state,null),Ea(e,_,s,i),Aa(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),_=!0}else if(t===null){s=e.stateNode;var v=e.memoizedProps,A=j_(l,v);s.props=A;var z=s.context,Y=l.contextType;h=hn,typeof Y=="object"&&Y!==null&&(h=pe(Y));var X=l.getDerivedStateFromProps;Y=typeof X=="function"||typeof s.getSnapshotBeforeUpdate=="function",v=e.pendingProps!==v,Y||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(v||z!==h)&&lh(e,s,_,h),kl=!1;var U=e.memoizedState;s.state=U,Ea(e,_,s,i),Aa(),z=e.memoizedState,v||U!==z||kl?(typeof X=="function"&&(ls(e,l,X,_),z=e.memoizedState),(A=kl||eh(e,l,A,_,U,z,h))?(Y||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=_,e.memoizedState=z),s.props=_,s.state=z,s.context=h,_=A):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),_=!1)}else{s=e.stateNode,Ur(t,e),h=e.memoizedProps,Y=j_(l,h),s.props=Y,X=e.pendingProps,U=s.context,z=l.contextType,A=hn,typeof z=="object"&&z!==null&&(A=pe(z)),v=l.getDerivedStateFromProps,(z=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(h!==X||U!==A)&&lh(e,s,_,A),kl=!1,U=e.memoizedState,s.state=U,Ea(e,_,s,i),Aa();var j=e.memoizedState;h!==X||U!==j||kl||t!==null&&t.dependencies!==null&&Di(t.dependencies)?(typeof v=="function"&&(ls(e,l,v,_),j=e.memoizedState),(Y=kl||eh(e,l,Y,_,U,j,A)||t!==null&&t.dependencies!==null&&Di(t.dependencies))?(z||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(_,j,A),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(_,j,A)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||h===t.memoizedProps&&U===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&U===t.memoizedState||(e.flags|=1024),e.memoizedProps=_,e.memoizedState=j),s.props=_,s.state=j,s.context=A,_=Y):(typeof s.componentDidUpdate!="function"||h===t.memoizedProps&&U===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&U===t.memoizedState||(e.flags|=1024),_=!1)}return s=_,Ji(t,e),_=(e.flags&128)!==0,s||_?(s=e.stateNode,l=_&&typeof l.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&_?(e.child=Sn(e,t.child,null,i),e.child=Sn(e,null,l,i)):de(t,e,l,i),e.memoizedState=s.state,t=e.child):t=Dl(t,e,i),t}function gh(t,e,l,_){return ha(),e.flags|=256,de(t,e,l,_),e.child}var is={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function us(t){return{baseLanes:t,cachePool:_o()}}function rs(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=_l),t}function vh(t,e,l){var _=e.pendingProps,i=!1,s=(e.flags&128)!==0,h;if((h=s)||(h=t!==null&&t.memoizedState===null?!1:(re.current&2)!==0),h&&(i=!0,e.flags&=-129),h=(e.flags&32)!==0,e.flags&=-33,t===null){if(Ot){if(i?Jl(e):Fl(),Ot){var v=Jt,A;if(A=v){t:{for(A=v,v=hl;A.nodeType!==8;){if(!v){v=null;break t}if(A=cl(A.nextSibling),A===null){v=null;break t}}v=A}v!==null?(e.memoizedState={dehydrated:v,treeContext:N_!==null?{id:xl,overflow:Rl}:null,retryLane:536870912,hydrationErrors:null},A=Ie(18,null,null,0),A.stateNode=v,A.return=e,e.child=A,Se=e,Jt=null,A=!0):A=!1}A||C_(e)}if(v=e.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return Qs(v)?e.lanes=32:e.lanes=536870912,null;Cl(e)}return v=_.children,_=_.fallback,i?(Fl(),i=e.mode,v=Fi({mode:"hidden",children:v},i),_=R_(_,i,l,null),v.return=e,_.return=e,v.sibling=_,e.child=v,i=e.child,i.memoizedState=us(l),i.childLanes=rs(t,h,l),e.memoizedState=is,_):(Jl(e),ss(e,v))}if(A=t.memoizedState,A!==null&&(v=A.dehydrated,v!==null)){if(s)e.flags&256?(Jl(e),e.flags&=-257,e=fs(t,e,l)):e.memoizedState!==null?(Fl(),e.child=t.child,e.flags|=128,e=null):(Fl(),i=_.fallback,v=e.mode,_=Fi({mode:"visible",children:_.children},v),i=R_(i,v,l,null),i.flags|=2,_.return=e,i.return=e,_.sibling=i,e.child=_,Sn(e,t.child,null,l),_=e.child,_.memoizedState=us(l),_.childLanes=rs(t,h,l),e.memoizedState=is,e=i);else if(Jl(e),Qs(v)){if(h=v.nextSibling&&v.nextSibling.dataset,h)var z=h.dgst;h=z,_=Error(a(419)),_.stack="",_.digest=h,da({value:_,source:null,stack:null}),e=fs(t,e,l)}else if(fe||ma(t,e,l,!1),h=(l&t.childLanes)!==0,fe||h){if(h=Yt,h!==null&&(_=l&-l,_=(_&42)!==0?1:Zu(_),_=(_&(h.suspendedLanes|l))!==0?0:_,_!==0&&_!==A.retryLane))throw A.retryLane=_,on(t,_),Ve(h,t,_),sh;v.data==="$?"||Ns(),e=fs(t,e,l)}else v.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=A.treeContext,Jt=cl(v.nextSibling),Se=e,Ot=!0,M_=null,hl=!1,t!==null&&(tl[el++]=xl,tl[el++]=Rl,tl[el++]=N_,xl=t.id,Rl=t.overflow,N_=e),e=ss(e,_.children),e.flags|=4096);return e}return i?(Fl(),i=_.fallback,v=e.mode,A=t.child,z=A.sibling,_=bl(A,{mode:"hidden",children:_.children}),_.subtreeFlags=A.subtreeFlags&65011712,z!==null?i=bl(z,i):(i=R_(i,v,l,null),i.flags|=2),i.return=e,_.return=e,_.sibling=i,e.child=_,_=i,i=e.child,v=t.child.memoizedState,v===null?v=us(l):(A=v.cachePool,A!==null?(z=ue._currentValue,A=A.parent!==z?{parent:z,pool:z}:A):A=_o(),v={baseLanes:v.baseLanes|l,cachePool:A}),i.memoizedState=v,i.childLanes=rs(t,h,l),e.memoizedState=is,_):(Jl(e),l=t.child,t=l.sibling,l=bl(l,{mode:"visible",children:_.children}),l.return=e,l.sibling=null,t!==null&&(h=e.deletions,h===null?(e.deletions=[t],e.flags|=16):h.push(t)),e.child=l,e.memoizedState=null,l)}function ss(t,e){return e=Fi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Fi(t,e){return t=Ie(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function fs(t,e,l){return Sn(e,t.child,null,l),t=ss(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ph(t,e,l){t.lanes|=e;var _=t.alternate;_!==null&&(_.lanes|=e),Nr(t.return,e,l)}function cs(t,e,l,_,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:_,tail:l,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=_,s.tail=l,s.tailMode=i)}function yh(t,e,l){var _=e.pendingProps,i=_.revealOrder,s=_.tail;if(de(t,e,_.children,l),_=re.current,(_&2)!==0)_=_&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ph(t,l,e);else if(t.tag===19)ph(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}_&=1}switch(L(re,_),i){case"forwards":for(l=e.child,i=null;l!==null;)t=l.alternate,t!==null&&$i(t)===null&&(i=l),l=l.sibling;l=i,l===null?(i=e.child,e.child=null):(i=l.sibling,l.sibling=null),cs(e,!1,i,l,s);break;case"backwards":for(l=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$i(t)===null){e.child=i;break}t=i.sibling,i.sibling=l,l=i,i=t}cs(e,!0,l,null,s);break;case"together":cs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),__|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(ma(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(a(153));if(e.child!==null){for(t=e.child,l=bl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=bl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function os(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Di(t)))}function km(t,e,l){switch(e.tag){case 3:B(e,e.stateNode.containerInfo),Zl(e,ue,t.memoizedState.cache),ha();break;case 27:case 5:tt(e);break;case 4:B(e,e.stateNode.containerInfo);break;case 10:Zl(e,e.type,e.memoizedProps.value);break;case 13:var _=e.memoizedState;if(_!==null)return _.dehydrated!==null?(Jl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?vh(t,e,l):(Jl(e),t=Dl(t,e,l),t!==null?t.sibling:null);Jl(e);break;case 19:var i=(t.flags&128)!==0;if(_=(l&e.childLanes)!==0,_||(ma(t,e,l,!1),_=(l&e.childLanes)!==0),i){if(_)return yh(t,e,l);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),L(re,re.current),_)break;return null;case 22:case 23:return e.lanes=0,hh(t,e,l);case 24:Zl(e,ue,t.memoizedState.cache)}return Dl(t,e,l)}function Ah(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)fe=!0;else{if(!os(t,l)&&(e.flags&128)===0)return fe=!1,km(t,e,l);fe=(t.flags&131072)!==0}else fe=!1,Ot&&(e.flags&1048576)!==0&&Wc(e,Ci,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var _=e.elementType,i=_._init;if(_=i(_._payload),e.type=_,typeof _=="function")Ar(_)?(t=j_(_,t),e.tag=1,e=Th(null,e,_,t,l)):(e.tag=0,e=as(null,e,_,t,l));else{if(_!=null){if(i=_.$$typeof,i===K){e.tag=11,e=fh(null,e,_,t,l);break t}else if(i===lt){e.tag=14,e=ch(null,e,_,t,l);break t}}throw e=Rt(_)||_,Error(a(306,e,""))}}return e;case 0:return as(t,e,e.type,e.pendingProps,l);case 1:return _=e.type,i=j_(_,e.pendingProps),Th(t,e,_,i,l);case 3:t:{if(B(e,e.stateNode.containerInfo),t===null)throw Error(a(387));_=e.pendingProps;var s=e.memoizedState;i=s.element,Ur(t,e),Ea(e,_,null,l);var h=e.memoizedState;if(_=h.cache,Zl(e,ue,_),_!==s.cache&&Or(e,[ue],l,!0),Aa(),_=h.element,s.isDehydrated)if(s={element:_,isDehydrated:!1,cache:h.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=gh(t,e,_,l);break t}else if(_!==i){i=Fe(Error(a(424)),e),da(i),e=gh(t,e,_,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=cl(t.firstChild),Se=e,Ot=!0,M_=null,hl=!0,l=Po(e,null,_,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(ha(),_===i){e=Dl(t,e,l);break t}de(t,e,_,l)}e=e.child}return e;case 26:return Ji(t,e),t===null?(l=bd(e.type,null,e.pendingProps,null))?e.memoizedState=l:Ot||(l=e.type,t=e.pendingProps,_=ou(O.current).createElement(l),_[ve]=e,_[be]=t,Te(_,l,t),se(_),e.stateNode=_):e.memoizedState=bd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return tt(e),t===null&&Ot&&(_=e.stateNode=Ed(e.type,e.pendingProps,O.current),Se=e,hl=!0,i=Jt,u_(e.type)?(Zs=i,Jt=cl(_.firstChild)):Jt=i),de(t,e,e.pendingProps.children,l),Ji(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Ot&&((i=_=Jt)&&(_=AT(_,e.type,e.pendingProps,hl),_!==null?(e.stateNode=_,Se=e,Jt=cl(_.firstChild),hl=!1,i=!0):i=!1),i||C_(e)),tt(e),i=e.type,s=e.pendingProps,h=t!==null?t.memoizedProps:null,_=s.children,Ys(i,s)?_=null:h!==null&&Ys(i,h)&&(e.flags|=32),e.memoizedState!==null&&(i=qr(t,e,Bm,null,null,l),Xa._currentValue=i),Ji(t,e),de(t,e,_,l),e.child;case 6:return t===null&&Ot&&((t=l=Jt)&&(l=ET(l,e.pendingProps,hl),l!==null?(e.stateNode=l,Se=e,Jt=null,t=!0):t=!1),t||C_(e)),null;case 13:return vh(t,e,l);case 4:return B(e,e.stateNode.containerInfo),_=e.pendingProps,t===null?e.child=Sn(e,null,_,l):de(t,e,_,l),e.child;case 11:return fh(t,e,e.type,e.pendingProps,l);case 7:return de(t,e,e.pendingProps,l),e.child;case 8:return de(t,e,e.pendingProps.children,l),e.child;case 12:return de(t,e,e.pendingProps.children,l),e.child;case 10:return _=e.pendingProps,Zl(e,e.type,_.value),de(t,e,_.children,l),e.child;case 9:return i=e.type._context,_=e.pendingProps.children,z_(e),i=pe(i),_=_(i),e.flags|=1,de(t,e,_,l),e.child;case 14:return ch(t,e,e.type,e.pendingProps,l);case 15:return oh(t,e,e.type,e.pendingProps,l);case 19:return yh(t,e,l);case 31:return _=e.pendingProps,l=e.mode,_={mode:_.mode,children:_.children},t===null?(l=Fi(_,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=bl(t.child,_),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return hh(t,e,l);case 24:return z_(e),_=pe(ue),t===null?(i=Dr(),i===null&&(i=Yt,s=Mr(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=l),i=s),e.memoizedState={parent:_,cache:i},Hr(e),Zl(e,ue,i)):((t.lanes&l)!==0&&(Ur(t,e),Ea(e,null,null,l),Aa()),i=t.memoizedState,s=e.memoizedState,i.parent!==_?(i={parent:_,cache:_},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Zl(e,ue,_)):(_=s.cache,Zl(e,ue,_),_!==i.cache&&Or(e,[ue],l,!0))),de(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(a(156,e.tag))}function zl(t){t.flags|=4}function Eh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Md(e)){if(e=ll.current,e!==null&&((Lt&4194048)===Lt?dl!==null:(Lt&62914560)!==Lt&&(Lt&536870912)===0||e!==dl))throw pa=zr,no;t.flags|=8192}}function Pi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Pf():536870912,t.lanes|=e,Rn|=e)}function Oa(t,e){if(!Ot)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var _=null;l!==null;)l.alternate!==null&&(_=l),l=l.sibling;_===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:_.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,_=0;if(e)for(var i=t.child;i!==null;)l|=i.lanes|i.childLanes,_|=i.subtreeFlags&65011712,_|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)l|=i.lanes|i.childLanes,_|=i.subtreeFlags,_|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=_,t.childLanes=l,e}function $m(t,e,l){var _=e.pendingProps;switch(br(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return kt(e),null;case 3:return l=e.stateNode,_=null,t!==null&&(_=t.memoizedState.cache),e.memoizedState.cache!==_&&(e.flags|=2048),Ol(ue),nt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(oa(e)?zl(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Pc())),kt(e),null;case 26:return l=e.memoizedState,t===null?(zl(e),l!==null?(kt(e),Eh(e,l)):(kt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(zl(e),kt(e),Eh(e,l)):(kt(e),e.flags&=-16777217):(t.memoizedProps!==_&&zl(e),kt(e),e.flags&=-16777217),null;case 27:P(e),l=O.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==_&&zl(e);else{if(!_){if(e.stateNode===null)throw Error(a(166));return kt(e),null}t=N.current,oa(e)?Jc(e):(t=Ed(i,_,l),e.stateNode=t,zl(e))}return kt(e),null;case 5:if(P(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==_&&zl(e);else{if(!_){if(e.stateNode===null)throw Error(a(166));return kt(e),null}if(t=N.current,oa(e))Jc(e);else{switch(i=ou(O.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof _.is=="string"?i.createElement("select",{is:_.is}):i.createElement("select"),_.multiple?t.multiple=!0:_.size&&(t.size=_.size);break;default:t=typeof _.is=="string"?i.createElement(l,{is:_.is}):i.createElement(l)}}t[ve]=e,t[be]=_;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(Te(t,l,_),l){case"button":case"input":case"select":case"textarea":t=!!_.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&zl(e)}}return kt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==_&&zl(e);else{if(typeof _!="string"&&e.stateNode===null)throw Error(a(166));if(t=O.current,oa(e)){if(t=e.stateNode,l=e.memoizedProps,_=null,i=Se,i!==null)switch(i.tag){case 27:case 5:_=i.memoizedProps}t[ve]=e,t=!!(t.nodeValue===l||_!==null&&_.suppressHydrationWarning===!0||md(t.nodeValue,l)),t||C_(e)}else t=ou(t).createTextNode(_),t[ve]=e,e.stateNode=t}return kt(e),null;case 13:if(_=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=oa(e),_!==null&&_.dehydrated!==null){if(t===null){if(!i)throw Error(a(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));i[ve]=e}else ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;kt(e),i=!1}else i=Pc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Cl(e),e):(Cl(e),null)}if(Cl(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=_!==null,t=t!==null&&t.memoizedState!==null,l){_=e.child,i=null,_.alternate!==null&&_.alternate.memoizedState!==null&&_.alternate.memoizedState.cachePool!==null&&(i=_.alternate.memoizedState.cachePool.pool);var s=null;_.memoizedState!==null&&_.memoizedState.cachePool!==null&&(s=_.memoizedState.cachePool.pool),s!==i&&(_.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),Pi(e,e.updateQueue),kt(e),null;case 4:return nt(),t===null&&ws(e.stateNode.containerInfo),kt(e),null;case 10:return Ol(e.type),kt(e),null;case 19:if(F(re),i=e.memoizedState,i===null)return kt(e),null;if(_=(e.flags&128)!==0,s=i.rendering,s===null)if(_)Oa(i,!1);else{if(Ft!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=$i(t),s!==null){for(e.flags|=128,Oa(i,!1),t=s.updateQueue,e.updateQueue=t,Pi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Kc(l,t),l=l.sibling;return L(re,re.current&1|2),e.child}t=t.sibling}i.tail!==null&&Vt()>lu&&(e.flags|=128,_=!0,Oa(i,!1),e.lanes=4194304)}else{if(!_)if(t=$i(s),t!==null){if(e.flags|=128,_=!0,t=t.updateQueue,e.updateQueue=t,Pi(e,t),Oa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Ot)return kt(e),null}else 2*Vt()-i.renderingStartTime>lu&&l!==536870912&&(e.flags|=128,_=!0,Oa(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Vt(),e.sibling=null,t=re.current,L(re,_?t&1|2:t&1),e):(kt(e),null);case 22:case 23:return Cl(e),Br(),_=e.memoizedState!==null,t!==null?t.memoizedState!==null!==_&&(e.flags|=8192):_&&(e.flags|=8192),_?(l&536870912)!==0&&(e.flags&128)===0&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),l=e.updateQueue,l!==null&&Pi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),_=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(_=e.memoizedState.cachePool.pool),_!==l&&(e.flags|=2048),t!==null&&F(H_),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ol(ue),kt(e),null;case 25:return null;case 30:return null}throw Error(a(156,e.tag))}function Km(t,e){switch(br(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ol(ue),nt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return P(e),null;case 13:if(Cl(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(a(340));ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return F(re),null;case 4:return nt(),null;case 10:return Ol(e.type),null;case 22:case 23:return Cl(e),Br(),t!==null&&F(H_),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ol(ue),null;case 25:return null;default:return null}}function Sh(t,e){switch(br(e),e.tag){case 3:Ol(ue),nt();break;case 26:case 27:case 5:P(e);break;case 4:nt();break;case 13:Cl(e);break;case 19:F(re);break;case 10:Ol(e.type);break;case 22:case 23:Cl(e),Br(),t!==null&&F(H_);break;case 24:Ol(ue)}}function Ma(t,e){try{var l=e.updateQueue,_=l!==null?l.lastEffect:null;if(_!==null){var i=_.next;l=i;do{if((l.tag&t)===t){_=void 0;var s=l.create,h=l.inst;_=s(),h.destroy=_}l=l.next}while(l!==i)}}catch(v){Bt(e,e.return,v)}}function Pl(t,e,l){try{var _=e.updateQueue,i=_!==null?_.lastEffect:null;if(i!==null){var s=i.next;_=s;do{if((_.tag&t)===t){var h=_.inst,v=h.destroy;if(v!==void 0){h.destroy=void 0,i=e;var A=l,z=v;try{z()}catch(Y){Bt(i,A,Y)}}}_=_.next}while(_!==s)}}catch(Y){Bt(e,e.return,Y)}}function Lh(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{fo(e,l)}catch(_){Bt(t,t.return,_)}}}function bh(t,e,l){l.props=j_(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(_){Bt(t,e,_)}}function Ca(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var _=t.stateNode;break;case 30:_=t.stateNode;break;default:_=t.stateNode}typeof l=="function"?t.refCleanup=l(_):l.current=_}}catch(i){Bt(t,e,i)}}function ml(t,e){var l=t.ref,_=t.refCleanup;if(l!==null)if(typeof _=="function")try{_()}catch(i){Bt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){Bt(t,e,i)}else l.current=null}function xh(t){var e=t.type,l=t.memoizedProps,_=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&_.focus();break t;case"img":l.src?_.src=l.src:l.srcSet&&(_.srcset=l.srcSet)}}catch(i){Bt(t,t.return,i)}}function hs(t,e,l){try{var _=t.stateNode;TT(_,t.type,l,e),_[be]=e}catch(i){Bt(t,t.return,i)}}function Rh(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&u_(t.type)||t.tag===4}function ds(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Rh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&u_(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ms(t,e,l){var _=t.tag;if(_===5||_===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=cu));else if(_!==4&&(_===27&&u_(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(ms(t,e,l),t=t.sibling;t!==null;)ms(t,e,l),t=t.sibling}function tu(t,e,l){var _=t.tag;if(_===5||_===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(_!==4&&(_===27&&u_(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(tu(t,e,l),t=t.sibling;t!==null;)tu(t,e,l),t=t.sibling}function Nh(t){var e=t.stateNode,l=t.memoizedProps;try{for(var _=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Te(e,_,l),e[ve]=t,e[be]=l}catch(s){Bt(t,t.return,s)}}var Hl=!1,ee=!1,Ts=!1,Oh=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Wm(t,e){if(t=t.containerInfo,Gs=vu,t=Bc(t),dr(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var _=l.getSelection&&l.getSelection();if(_&&_.rangeCount!==0){l=_.anchorNode;var i=_.anchorOffset,s=_.focusNode;_=_.focusOffset;try{l.nodeType,s.nodeType}catch{l=null;break t}var h=0,v=-1,A=-1,z=0,Y=0,X=t,U=null;e:for(;;){for(var j;X!==l||i!==0&&X.nodeType!==3||(v=h+i),X!==s||_!==0&&X.nodeType!==3||(A=h+_),X.nodeType===3&&(h+=X.nodeValue.length),(j=X.firstChild)!==null;)U=X,X=j;for(;;){if(X===t)break e;if(U===l&&++z===i&&(v=h),U===s&&++Y===_&&(A=h),(j=X.nextSibling)!==null)break;X=U,U=X.parentNode}X=j}l=v===-1||A===-1?null:{start:v,end:A}}else l=null}l=l||{start:0,end:0}}else l=null;for(qs={focusedElem:t,selectionRange:l},vu=!1,ce=e;ce!==null;)if(e=ce,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,ce=t;else for(;ce!==null;){switch(e=ce,s=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&s!==null){t=void 0,l=e,i=s.memoizedProps,s=s.memoizedState,_=l.stateNode;try{var ct=j_(l.type,i,l.elementType===l.type);t=_.getSnapshotBeforeUpdate(ct,s),_.__reactInternalSnapshotBeforeUpdate=t}catch(st){Bt(l,l.return,st)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Xs(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Xs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}}function Mh(t,e,l){var _=l.flags;switch(l.tag){case 0:case 11:case 15:t_(t,l),_&4&&Ma(5,l);break;case 1:if(t_(t,l),_&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(h){Bt(l,l.return,h)}else{var i=j_(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(h){Bt(l,l.return,h)}}_&64&&Lh(l),_&512&&Ca(l,l.return);break;case 3:if(t_(t,l),_&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{fo(t,e)}catch(h){Bt(l,l.return,h)}}break;case 27:e===null&&_&4&&Nh(l);case 26:case 5:t_(t,l),e===null&&_&4&&xh(l),_&512&&Ca(l,l.return);break;case 12:t_(t,l);break;case 13:t_(t,l),_&4&&zh(t,l),_&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=aT.bind(null,l),ST(t,l))));break;case 22:if(_=l.memoizedState!==null||Hl,!_){e=e!==null&&e.memoizedState!==null||ee,i=Hl;var s=ee;Hl=_,(ee=e)&&!s?e_(t,l,(l.subtreeFlags&8772)!==0):t_(t,l),Hl=i,ee=s}break;case 30:break;default:t_(t,l)}}function Ch(t){var e=t.alternate;e!==null&&(t.alternate=null,Ch(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ku(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,Ne=!1;function Ul(t,e,l){for(l=l.child;l!==null;)Dh(t,e,l),l=l.sibling}function Dh(t,e,l){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(Fn,l)}catch{}switch(l.tag){case 26:ee||ml(l,e),Ul(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:ee||ml(l,e);var _=Qt,i=Ne;u_(l.type)&&(Qt=l.stateNode,Ne=!1),Ul(t,e,l),Ga(l.stateNode),Qt=_,Ne=i;break;case 5:ee||ml(l,e);case 6:if(_=Qt,i=Ne,Qt=null,Ul(t,e,l),Qt=_,Ne=i,Qt!==null)if(Ne)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(l.stateNode)}catch(s){Bt(l,e,s)}else try{Qt.removeChild(l.stateNode)}catch(s){Bt(l,e,s)}break;case 18:Qt!==null&&(Ne?(t=Qt,yd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),$a(t)):yd(Qt,l.stateNode));break;case 4:_=Qt,i=Ne,Qt=l.stateNode.containerInfo,Ne=!0,Ul(t,e,l),Qt=_,Ne=i;break;case 0:case 11:case 14:case 15:ee||Pl(2,l,e),ee||Pl(4,l,e),Ul(t,e,l);break;case 1:ee||(ml(l,e),_=l.stateNode,typeof _.componentWillUnmount=="function"&&bh(l,e,_)),Ul(t,e,l);break;case 21:Ul(t,e,l);break;case 22:ee=(_=ee)||l.memoizedState!==null,Ul(t,e,l),ee=_;break;default:Ul(t,e,l)}}function zh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{$a(t)}catch(l){Bt(e,e.return,l)}}function Jm(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Oh),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Oh),e;default:throw Error(a(435,t.tag))}}function gs(t,e){var l=Jm(t);e.forEach(function(_){var i=iT.bind(null,t,_);l.has(_)||(l.add(_),_.then(i,i))})}function Be(t,e){var l=e.deletions;if(l!==null)for(var _=0;_<l.length;_++){var i=l[_],s=t,h=e,v=h;t:for(;v!==null;){switch(v.tag){case 27:if(u_(v.type)){Qt=v.stateNode,Ne=!1;break t}break;case 5:Qt=v.stateNode,Ne=!1;break t;case 3:case 4:Qt=v.stateNode.containerInfo,Ne=!0;break t}v=v.return}if(Qt===null)throw Error(a(160));Dh(s,h,i),Qt=null,Ne=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Hh(e,t),e=e.sibling}var fl=null;function Hh(t,e){var l=t.alternate,_=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Be(e,t),Ge(t),_&4&&(Pl(3,t,t.return),Ma(3,t),Pl(5,t,t.return));break;case 1:Be(e,t),Ge(t),_&512&&(ee||l===null||ml(l,l.return)),_&64&&Hl&&(t=t.updateQueue,t!==null&&(_=t.callbacks,_!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?_:l.concat(_))));break;case 26:var i=fl;if(Be(e,t),Ge(t),_&512&&(ee||l===null||ml(l,l.return)),_&4){var s=l!==null?l.memoizedState:null;if(_=t.memoizedState,l===null)if(_===null)if(t.stateNode===null){t:{_=t.type,l=t.memoizedProps,i=i.ownerDocument||i;e:switch(_){case"title":s=i.getElementsByTagName("title")[0],(!s||s[ea]||s[ve]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(_),i.head.insertBefore(s,i.querySelector("head > title"))),Te(s,_,l),s[ve]=t,se(s),_=s;break t;case"link":var h=Nd("link","href",i).get(_+(l.href||""));if(h){for(var v=0;v<h.length;v++)if(s=h[v],s.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&s.getAttribute("rel")===(l.rel==null?null:l.rel)&&s.getAttribute("title")===(l.title==null?null:l.title)&&s.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){h.splice(v,1);break e}}s=i.createElement(_),Te(s,_,l),i.head.appendChild(s);break;case"meta":if(h=Nd("meta","content",i).get(_+(l.content||""))){for(v=0;v<h.length;v++)if(s=h[v],s.getAttribute("content")===(l.content==null?null:""+l.content)&&s.getAttribute("name")===(l.name==null?null:l.name)&&s.getAttribute("property")===(l.property==null?null:l.property)&&s.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&s.getAttribute("charset")===(l.charSet==null?null:l.charSet)){h.splice(v,1);break e}}s=i.createElement(_),Te(s,_,l),i.head.appendChild(s);break;default:throw Error(a(468,_))}s[ve]=t,se(s),_=s}t.stateNode=_}else Od(i,t.type,t.stateNode);else t.stateNode=Rd(i,_,t.memoizedProps);else s!==_?(s===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):s.count--,_===null?Od(i,t.type,t.stateNode):Rd(i,_,t.memoizedProps)):_===null&&t.stateNode!==null&&hs(t,t.memoizedProps,l.memoizedProps)}break;case 27:Be(e,t),Ge(t),_&512&&(ee||l===null||ml(l,l.return)),l!==null&&_&4&&hs(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Be(e,t),Ge(t),_&512&&(ee||l===null||ml(l,l.return)),t.flags&32){i=t.stateNode;try{nn(i,"")}catch(j){Bt(t,t.return,j)}}_&4&&t.stateNode!=null&&(i=t.memoizedProps,hs(t,i,l!==null?l.memoizedProps:i)),_&1024&&(Ts=!0);break;case 6:if(Be(e,t),Ge(t),_&4){if(t.stateNode===null)throw Error(a(162));_=t.memoizedProps,l=t.stateNode;try{l.nodeValue=_}catch(j){Bt(t,t.return,j)}}break;case 3:if(mu=null,i=fl,fl=hu(e.containerInfo),Be(e,t),fl=i,Ge(t),_&4&&l!==null&&l.memoizedState.isDehydrated)try{$a(e.containerInfo)}catch(j){Bt(t,t.return,j)}Ts&&(Ts=!1,Uh(t));break;case 4:_=fl,fl=hu(t.stateNode.containerInfo),Be(e,t),Ge(t),fl=_;break;case 12:Be(e,t),Ge(t);break;case 13:Be(e,t),Ge(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ss=Vt()),_&4&&(_=t.updateQueue,_!==null&&(t.updateQueue=null,gs(t,_)));break;case 22:i=t.memoizedState!==null;var A=l!==null&&l.memoizedState!==null,z=Hl,Y=ee;if(Hl=z||i,ee=Y||A,Be(e,t),ee=Y,Hl=z,Ge(t),_&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(l===null||A||Hl||ee||w_(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){A=l=e;try{if(s=A.stateNode,i)h=s.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{v=A.stateNode;var X=A.memoizedProps.style,U=X!=null&&X.hasOwnProperty("display")?X.display:null;v.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(j){Bt(A,A.return,j)}}}else if(e.tag===6){if(l===null){A=e;try{A.stateNode.nodeValue=i?"":A.memoizedProps}catch(j){Bt(A,A.return,j)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}_&4&&(_=t.updateQueue,_!==null&&(l=_.retryQueue,l!==null&&(_.retryQueue=null,gs(t,l))));break;case 19:Be(e,t),Ge(t),_&4&&(_=t.updateQueue,_!==null&&(t.updateQueue=null,gs(t,_)));break;case 30:break;case 21:break;default:Be(e,t),Ge(t)}}function Ge(t){var e=t.flags;if(e&2){try{for(var l,_=t.return;_!==null;){if(Rh(_)){l=_;break}_=_.return}if(l==null)throw Error(a(160));switch(l.tag){case 27:var i=l.stateNode,s=ds(t);tu(t,s,i);break;case 5:var h=l.stateNode;l.flags&32&&(nn(h,""),l.flags&=-33);var v=ds(t);tu(t,v,h);break;case 3:case 4:var A=l.stateNode.containerInfo,z=ds(t);ms(t,z,A);break;default:throw Error(a(161))}}catch(Y){Bt(t,t.return,Y)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Uh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Uh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function t_(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Mh(t,e.alternate,e),e=e.sibling}function w_(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Pl(4,e,e.return),w_(e);break;case 1:ml(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&bh(e,e.return,l),w_(e);break;case 27:Ga(e.stateNode);case 26:case 5:ml(e,e.return),w_(e);break;case 22:e.memoizedState===null&&w_(e);break;case 30:w_(e);break;default:w_(e)}t=t.sibling}}function e_(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var _=e.alternate,i=t,s=e,h=s.flags;switch(s.tag){case 0:case 11:case 15:e_(i,s,l),Ma(4,s);break;case 1:if(e_(i,s,l),_=s,i=_.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(z){Bt(_,_.return,z)}if(_=s,i=_.updateQueue,i!==null){var v=_.stateNode;try{var A=i.shared.hiddenCallbacks;if(A!==null)for(i.shared.hiddenCallbacks=null,i=0;i<A.length;i++)so(A[i],v)}catch(z){Bt(_,_.return,z)}}l&&h&64&&Lh(s),Ca(s,s.return);break;case 27:Nh(s);case 26:case 5:e_(i,s,l),l&&_===null&&h&4&&xh(s),Ca(s,s.return);break;case 12:e_(i,s,l);break;case 13:e_(i,s,l),l&&h&4&&zh(i,s);break;case 22:s.memoizedState===null&&e_(i,s,l),Ca(s,s.return);break;case 30:break;default:e_(i,s,l)}e=e.sibling}}function vs(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Ta(l))}function ps(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ta(t))}function Tl(t,e,l,_){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jh(t,e,l,_),e=e.sibling}function jh(t,e,l,_){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Tl(t,e,l,_),i&2048&&Ma(9,e);break;case 1:Tl(t,e,l,_);break;case 3:Tl(t,e,l,_),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ta(t)));break;case 12:if(i&2048){Tl(t,e,l,_),t=e.stateNode;try{var s=e.memoizedProps,h=s.id,v=s.onPostCommit;typeof v=="function"&&v(h,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(A){Bt(e,e.return,A)}}else Tl(t,e,l,_);break;case 13:Tl(t,e,l,_);break;case 23:break;case 22:s=e.stateNode,h=e.alternate,e.memoizedState!==null?s._visibility&2?Tl(t,e,l,_):Da(t,e):s._visibility&2?Tl(t,e,l,_):(s._visibility|=2,Ln(t,e,l,_,(e.subtreeFlags&10256)!==0)),i&2048&&vs(h,e);break;case 24:Tl(t,e,l,_),i&2048&&ps(e.alternate,e);break;default:Tl(t,e,l,_)}}function Ln(t,e,l,_,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var s=t,h=e,v=l,A=_,z=h.flags;switch(h.tag){case 0:case 11:case 15:Ln(s,h,v,A,i),Ma(8,h);break;case 23:break;case 22:var Y=h.stateNode;h.memoizedState!==null?Y._visibility&2?Ln(s,h,v,A,i):Da(s,h):(Y._visibility|=2,Ln(s,h,v,A,i)),i&&z&2048&&vs(h.alternate,h);break;case 24:Ln(s,h,v,A,i),i&&z&2048&&ps(h.alternate,h);break;default:Ln(s,h,v,A,i)}e=e.sibling}}function Da(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,_=e,i=_.flags;switch(_.tag){case 22:Da(l,_),i&2048&&vs(_.alternate,_);break;case 24:Da(l,_),i&2048&&ps(_.alternate,_);break;default:Da(l,_)}e=e.sibling}}var za=8192;function bn(t){if(t.subtreeFlags&za)for(t=t.child;t!==null;)wh(t),t=t.sibling}function wh(t){switch(t.tag){case 26:bn(t),t.flags&za&&t.memoizedState!==null&&jT(fl,t.memoizedState,t.memoizedProps);break;case 5:bn(t);break;case 3:case 4:var e=fl;fl=hu(t.stateNode.containerInfo),bn(t),fl=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=za,za=16777216,bn(t),za=e):bn(t));break;default:bn(t)}}function Ih(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ha(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var _=e[l];ce=_,Gh(_,t)}Ih(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bh(t),t=t.sibling}function Bh(t){switch(t.tag){case 0:case 11:case 15:Ha(t),t.flags&2048&&Pl(9,t,t.return);break;case 3:Ha(t);break;case 12:Ha(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,eu(t)):Ha(t);break;default:Ha(t)}}function eu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var _=e[l];ce=_,Gh(_,t)}Ih(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Pl(8,e,e.return),eu(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,eu(e));break;default:eu(e)}t=t.sibling}}function Gh(t,e){for(;ce!==null;){var l=ce;switch(l.tag){case 0:case 11:case 15:Pl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var _=l.memoizedState.cachePool.pool;_!=null&&_.refCount++}break;case 24:Ta(l.memoizedState.cache)}if(_=l.child,_!==null)_.return=l,ce=_;else t:for(l=t;ce!==null;){_=ce;var i=_.sibling,s=_.return;if(Ch(_),_===l){ce=null;break t}if(i!==null){i.return=s,ce=i;break t}ce=s}}}var Fm={getCacheForType:function(t){var e=pe(ue),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},Pm=typeof WeakMap=="function"?WeakMap:Map,Ct=0,Yt=null,pt=null,Lt=0,Dt=0,qe=null,l_=!1,xn=!1,ys=!1,jl=0,Ft=0,__=0,I_=0,As=0,_l=0,Rn=0,Ua=null,Oe=null,Es=!1,Ss=0,lu=1/0,_u=null,n_=null,me=0,a_=null,Nn=null,On=0,Ls=0,bs=null,qh=null,ja=0,xs=null;function Ye(){if((Ct&2)!==0&&Lt!==0)return Lt&-Lt;if(I.T!==null){var t=Tn;return t!==0?t:zs()}return lc()}function Yh(){_l===0&&(_l=(Lt&536870912)===0||Ot?Ff():536870912);var t=ll.current;return t!==null&&(t.flags|=32),_l}function Ve(t,e,l){(t===Yt&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)&&(Mn(t,0),i_(t,Lt,_l,!1)),ta(t,l),((Ct&2)===0||t!==Yt)&&(t===Yt&&((Ct&2)===0&&(I_|=l),Ft===4&&i_(t,Lt,_l,!1)),gl(t))}function Vh(t,e,l){if((Ct&6)!==0)throw Error(a(327));var _=!l&&(e&124)===0&&(e&t.expiredLanes)===0||Pn(t,e),i=_?lT(t,e):Os(t,e,!0),s=_;do{if(i===0){xn&&!_&&i_(t,e,0,!1);break}else{if(l=t.current.alternate,s&&!tT(l)){i=Os(t,e,!1),s=!1;continue}if(i===2){if(s=e,t.errorRecoveryDisabledLanes&s)var h=0;else h=t.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){e=h;t:{var v=t;i=Ua;var A=v.current.memoizedState.isDehydrated;if(A&&(Mn(v,h).flags|=256),h=Os(v,h,!1),h!==2){if(ys&&!A){v.errorRecoveryDisabledLanes|=s,I_|=s,i=4;break t}s=Oe,Oe=i,s!==null&&(Oe===null?Oe=s:Oe.push.apply(Oe,s))}i=h}if(s=!1,i!==2)continue}}if(i===1){Mn(t,0),i_(t,e,0,!0);break}t:{switch(_=t,s=i,s){case 0:case 1:throw Error(a(345));case 4:if((e&4194048)!==e)break;case 6:i_(_,e,_l,!l_);break t;case 2:Oe=null;break;case 3:case 5:break;default:throw Error(a(329))}if((e&62914560)===e&&(i=Ss+300-Vt(),10<i)){if(i_(_,e,_l,!l_),di(_,0,!0)!==0)break t;_.timeoutHandle=vd(Xh.bind(null,_,l,Oe,_u,Es,e,_l,I_,Rn,l_,s,2,-0,0),i);break t}Xh(_,l,Oe,_u,Es,e,_l,I_,Rn,l_,s,0,-0,0)}}break}while(!0);gl(t)}function Xh(t,e,l,_,i,s,h,v,A,z,Y,X,U,j){if(t.timeoutHandle=-1,X=e.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(Va={stylesheets:null,count:0,unsuspend:UT},wh(e),X=wT(),X!==null)){t.cancelPendingCommit=X(Jh.bind(null,t,e,s,l,_,i,h,v,A,Y,1,U,j)),i_(t,s,h,!z);return}Jh(t,e,s,l,_,i,h,v,A)}function tT(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var _=0;_<l.length;_++){var i=l[_],s=i.getSnapshot;i=i.value;try{if(!we(s(),i))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function i_(t,e,l,_){e&=~As,e&=~I_,t.suspendedLanes|=e,t.pingedLanes&=~e,_&&(t.warmLanes|=e),_=t.expirationTimes;for(var i=e;0<i;){var s=31-je(i),h=1<<s;_[s]=-1,i&=~h}l!==0&&tc(t,l,e)}function nu(){return(Ct&6)===0?(wa(0),!1):!0}function Rs(){if(pt!==null){if(Dt===0)var t=pt.return;else t=pt,Nl=D_=null,Xr(t),En=null,Ra=0,t=pt;for(;t!==null;)Sh(t.alternate,t),t=t.return;pt=null}}function Mn(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,vT(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Rs(),Yt=t,pt=l=bl(t.current,null),Lt=e,Dt=0,qe=null,l_=!1,xn=Pn(t,e),ys=!1,Rn=_l=As=I_=__=Ft=0,Oe=Ua=null,Es=!1,(e&8)!==0&&(e|=e&32);var _=t.entangledLanes;if(_!==0)for(t=t.entanglements,_&=e;0<_;){var i=31-je(_),s=1<<i;e|=t[i],_&=~s}return jl=e,xi(),l}function Qh(t,e){gt=null,I.H=Qi,e===va||e===Ui?(e=uo(),Dt=3):e===no?(e=uo(),Dt=4):Dt=e===sh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,qe=e,pt===null&&(Ft=1,Wi(t,Fe(e,t.current)))}function Zh(){var t=I.H;return I.H=Qi,t===null?Qi:t}function kh(){var t=I.A;return I.A=Fm,t}function Ns(){Ft=4,l_||(Lt&4194048)!==Lt&&ll.current!==null||(xn=!0),(__&134217727)===0&&(I_&134217727)===0||Yt===null||i_(Yt,Lt,_l,!1)}function Os(t,e,l){var _=Ct;Ct|=2;var i=Zh(),s=kh();(Yt!==t||Lt!==e)&&(_u=null,Mn(t,e)),e=!1;var h=Ft;t:do try{if(Dt!==0&&pt!==null){var v=pt,A=qe;switch(Dt){case 8:Rs(),h=6;break t;case 3:case 2:case 9:case 6:ll.current===null&&(e=!0);var z=Dt;if(Dt=0,qe=null,Cn(t,v,A,z),l&&xn){h=0;break t}break;default:z=Dt,Dt=0,qe=null,Cn(t,v,A,z)}}eT(),h=Ft;break}catch(Y){Qh(t,Y)}while(!0);return e&&t.shellSuspendCounter++,Nl=D_=null,Ct=_,I.H=i,I.A=s,pt===null&&(Yt=null,Lt=0,xi()),h}function eT(){for(;pt!==null;)$h(pt)}function lT(t,e){var l=Ct;Ct|=2;var _=Zh(),i=kh();Yt!==t||Lt!==e?(_u=null,lu=Vt()+500,Mn(t,e)):xn=Pn(t,e);t:do try{if(Dt!==0&&pt!==null){e=pt;var s=qe;e:switch(Dt){case 1:Dt=0,qe=null,Cn(t,e,s,1);break;case 2:case 9:if(ao(s)){Dt=0,qe=null,Kh(e);break}e=function(){Dt!==2&&Dt!==9||Yt!==t||(Dt=7),gl(t)},s.then(e,e);break t;case 3:Dt=7;break t;case 4:Dt=5;break t;case 7:ao(s)?(Dt=0,qe=null,Kh(e)):(Dt=0,qe=null,Cn(t,e,s,7));break;case 5:var h=null;switch(pt.tag){case 26:h=pt.memoizedState;case 5:case 27:var v=pt;if(!h||Md(h)){Dt=0,qe=null;var A=v.sibling;if(A!==null)pt=A;else{var z=v.return;z!==null?(pt=z,au(z)):pt=null}break e}}Dt=0,qe=null,Cn(t,e,s,5);break;case 6:Dt=0,qe=null,Cn(t,e,s,6);break;case 8:Rs(),Ft=6;break t;default:throw Error(a(462))}}_T();break}catch(Y){Qh(t,Y)}while(!0);return Nl=D_=null,I.H=_,I.A=i,Ct=l,pt!==null?0:(Yt=null,Lt=0,xi(),Ft)}function _T(){for(;pt!==null&&!Mt();)$h(pt)}function $h(t){var e=Ah(t.alternate,t,jl);t.memoizedProps=t.pendingProps,e===null?au(t):pt=e}function Kh(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=mh(l,e,e.pendingProps,e.type,void 0,Lt);break;case 11:e=mh(l,e,e.pendingProps,e.type.render,e.ref,Lt);break;case 5:Xr(e);default:Sh(l,e),e=pt=Kc(e,jl),e=Ah(l,e,jl)}t.memoizedProps=t.pendingProps,e===null?au(t):pt=e}function Cn(t,e,l,_){Nl=D_=null,Xr(e),En=null,Ra=0;var i=e.return;try{if(Zm(t,i,e,l,Lt)){Ft=1,Wi(t,Fe(l,t.current)),pt=null;return}}catch(s){if(i!==null)throw pt=i,s;Ft=1,Wi(t,Fe(l,t.current)),pt=null;return}e.flags&32768?(Ot||_===1?t=!0:xn||(Lt&536870912)!==0?t=!1:(l_=t=!0,(_===2||_===9||_===3||_===6)&&(_=ll.current,_!==null&&_.tag===13&&(_.flags|=16384))),Wh(e,t)):au(e)}function au(t){var e=t;do{if((e.flags&32768)!==0){Wh(e,l_);return}t=e.return;var l=$m(e.alternate,e,jl);if(l!==null){pt=l;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);Ft===0&&(Ft=5)}function Wh(t,e){do{var l=Km(t.alternate,t);if(l!==null){l.flags&=32767,pt=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){pt=t;return}pt=t=l}while(t!==null);Ft=6,pt=null}function Jh(t,e,l,_,i,s,h,v,A){t.cancelPendingCommit=null;do iu();while(me!==0);if((Ct&6)!==0)throw Error(a(327));if(e!==null){if(e===t.current)throw Error(a(177));if(s=e.lanes|e.childLanes,s|=pr,U1(t,l,s,h,v,A),t===Yt&&(pt=Yt=null,Lt=0),Nn=e,a_=t,On=l,Ls=s,bs=i,qh=_,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,uT(Wt,function(){return ld(),null})):(t.callbackNode=null,t.callbackPriority=0),_=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||_){_=I.T,I.T=null,i=J.p,J.p=2,h=Ct,Ct|=4;try{Wm(t,e,l)}finally{Ct=h,J.p=i,I.T=_}}me=1,Fh(),Ph(),td()}}function Fh(){if(me===1){me=0;var t=a_,e=Nn,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=I.T,I.T=null;var _=J.p;J.p=2;var i=Ct;Ct|=4;try{Hh(e,t);var s=qs,h=Bc(t.containerInfo),v=s.focusedElem,A=s.selectionRange;if(h!==v&&v&&v.ownerDocument&&Ic(v.ownerDocument.documentElement,v)){if(A!==null&&dr(v)){var z=A.start,Y=A.end;if(Y===void 0&&(Y=z),"selectionStart"in v)v.selectionStart=z,v.selectionEnd=Math.min(Y,v.value.length);else{var X=v.ownerDocument||document,U=X&&X.defaultView||window;if(U.getSelection){var j=U.getSelection(),ct=v.textContent.length,st=Math.min(A.start,ct),wt=A.end===void 0?st:Math.min(A.end,ct);!j.extend&&st>wt&&(h=wt,wt=st,st=h);var C=wc(v,st),R=wc(v,wt);if(C&&R&&(j.rangeCount!==1||j.anchorNode!==C.node||j.anchorOffset!==C.offset||j.focusNode!==R.node||j.focusOffset!==R.offset)){var D=X.createRange();D.setStart(C.node,C.offset),j.removeAllRanges(),st>wt?(j.addRange(D),j.extend(R.node,R.offset)):(D.setEnd(R.node,R.offset),j.addRange(D))}}}}for(X=[],j=v;j=j.parentNode;)j.nodeType===1&&X.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<X.length;v++){var V=X[v];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}vu=!!Gs,qs=Gs=null}finally{Ct=i,J.p=_,I.T=l}}t.current=e,me=2}}function Ph(){if(me===2){me=0;var t=a_,e=Nn,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=I.T,I.T=null;var _=J.p;J.p=2;var i=Ct;Ct|=4;try{Mh(t,e.alternate,e)}finally{Ct=i,J.p=_,I.T=l}}me=3}}function td(){if(me===4||me===3){me=0,Ht();var t=a_,e=Nn,l=On,_=qh;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?me=5:(me=0,Nn=a_=null,ed(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(n_=null),ku(l),e=e.stateNode,Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(Fn,e,void 0,(e.current.flags&128)===128)}catch{}if(_!==null){e=I.T,i=J.p,J.p=2,I.T=null;try{for(var s=t.onRecoverableError,h=0;h<_.length;h++){var v=_[h];s(v.value,{componentStack:v.stack})}}finally{I.T=e,J.p=i}}(On&3)!==0&&iu(),gl(t),i=t.pendingLanes,(l&4194090)!==0&&(i&42)!==0?t===xs?ja++:(ja=0,xs=t):ja=0,wa(0)}}function ed(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ta(e)))}function iu(t){return Fh(),Ph(),td(),ld()}function ld(){if(me!==5)return!1;var t=a_,e=Ls;Ls=0;var l=ku(On),_=I.T,i=J.p;try{J.p=32>l?32:l,I.T=null,l=bs,bs=null;var s=a_,h=On;if(me=0,Nn=a_=null,On=0,(Ct&6)!==0)throw Error(a(331));var v=Ct;if(Ct|=4,Bh(s.current),jh(s,s.current,h,l),Ct=v,wa(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(Fn,s)}catch{}return!0}finally{J.p=i,I.T=_,ed(t,e)}}function _d(t,e,l){e=Fe(l,e),e=ns(t.stateNode,e,2),t=Kl(t,e,2),t!==null&&(ta(t,2),gl(t))}function Bt(t,e,l){if(t.tag===3)_d(t,t,l);else for(;e!==null;){if(e.tag===3){_d(e,t,l);break}else if(e.tag===1){var _=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof _.componentDidCatch=="function"&&(n_===null||!n_.has(_))){t=Fe(l,t),l=uh(2),_=Kl(e,l,2),_!==null&&(rh(l,_,e,t),ta(_,2),gl(_));break}}e=e.return}}function Ms(t,e,l){var _=t.pingCache;if(_===null){_=t.pingCache=new Pm;var i=new Set;_.set(e,i)}else i=_.get(e),i===void 0&&(i=new Set,_.set(e,i));i.has(l)||(ys=!0,i.add(l),t=nT.bind(null,t,e,l),e.then(t,t))}function nT(t,e,l){var _=t.pingCache;_!==null&&_.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Yt===t&&(Lt&l)===l&&(Ft===4||Ft===3&&(Lt&62914560)===Lt&&300>Vt()-Ss?(Ct&2)===0&&Mn(t,0):As|=l,Rn===Lt&&(Rn=0)),gl(t)}function nd(t,e){e===0&&(e=Pf()),t=on(t,e),t!==null&&(ta(t,e),gl(t))}function aT(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),nd(t,l)}function iT(t,e){var l=0;switch(t.tag){case 13:var _=t.stateNode,i=t.memoizedState;i!==null&&(l=i.retryLane);break;case 19:_=t.stateNode;break;case 22:_=t.stateNode._retryCache;break;default:throw Error(a(314))}_!==null&&_.delete(e),nd(t,l)}function uT(t,e){return bt(t,e)}var uu=null,Dn=null,Cs=!1,ru=!1,Ds=!1,B_=0;function gl(t){t!==Dn&&t.next===null&&(Dn===null?uu=Dn=t:Dn=Dn.next=t),ru=!0,Cs||(Cs=!0,sT())}function wa(t,e){if(!Ds&&ru){Ds=!0;do for(var l=!1,_=uu;_!==null;){if(t!==0){var i=_.pendingLanes;if(i===0)var s=0;else{var h=_.suspendedLanes,v=_.pingedLanes;s=(1<<31-je(42|t)+1)-1,s&=i&~(h&~v),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(l=!0,rd(_,s))}else s=Lt,s=di(_,_===Yt?s:0,_.cancelPendingCommit!==null||_.timeoutHandle!==-1),(s&3)===0||Pn(_,s)||(l=!0,rd(_,s));_=_.next}while(l);Ds=!1}}function rT(){ad()}function ad(){ru=Cs=!1;var t=0;B_!==0&&(gT()&&(t=B_),B_=0);for(var e=Vt(),l=null,_=uu;_!==null;){var i=_.next,s=id(_,e);s===0?(_.next=null,l===null?uu=i:l.next=i,i===null&&(Dn=l)):(l=_,(t!==0||(s&3)!==0)&&(ru=!0)),_=i}wa(t)}function id(t,e){for(var l=t.suspendedLanes,_=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var h=31-je(s),v=1<<h,A=i[h];A===-1?((v&l)===0||(v&_)!==0)&&(i[h]=H1(v,e)):A<=e&&(t.expiredLanes|=v),s&=~v}if(e=Yt,l=Lt,l=di(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),_=t.callbackNode,l===0||t===e&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)return _!==null&&_!==null&&Nt(_),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Pn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(_!==null&&Nt(_),ku(l)){case 2:case 8:l=Xt;break;case 32:l=Wt;break;case 268435456:l=Jn;break;default:l=Wt}return _=ud.bind(null,t),l=bt(l,_),t.callbackPriority=e,t.callbackNode=l,e}return _!==null&&_!==null&&Nt(_),t.callbackPriority=2,t.callbackNode=null,2}function ud(t,e){if(me!==0&&me!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(iu()&&t.callbackNode!==l)return null;var _=Lt;return _=di(t,t===Yt?_:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),_===0?null:(Vh(t,_,e),id(t,Vt()),t.callbackNode!=null&&t.callbackNode===l?ud.bind(null,t):null)}function rd(t,e){if(iu())return null;Vh(t,e,!0)}function sT(){pT(function(){(Ct&6)!==0?bt(A_,rT):ad()})}function zs(){return B_===0&&(B_=Ff()),B_}function sd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pi(""+t)}function fd(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function fT(t,e,l,_,i){if(e==="submit"&&l&&l.stateNode===i){var s=sd((i[be]||null).action),h=_.submitter;h&&(e=(e=h[be]||null)?sd(e.formAction):h.getAttribute("formAction"),e!==null&&(s=e,h=null));var v=new Si("action","action",null,_,i);t.push({event:v,listeners:[{instance:null,listener:function(){if(_.defaultPrevented){if(B_!==0){var A=h?fd(i,h):new FormData(i);Pr(l,{pending:!0,data:A,method:i.method,action:s},null,A)}}else typeof s=="function"&&(v.preventDefault(),A=h?fd(i,h):new FormData(i),Pr(l,{pending:!0,data:A,method:i.method,action:s},s,A))},currentTarget:i}]})}}for(var Hs=0;Hs<vr.length;Hs++){var Us=vr[Hs],cT=Us.toLowerCase(),oT=Us[0].toUpperCase()+Us.slice(1);sl(cT,"on"+oT)}sl(Yc,"onAnimationEnd"),sl(Vc,"onAnimationIteration"),sl(Xc,"onAnimationStart"),sl("dblclick","onDoubleClick"),sl("focusin","onFocus"),sl("focusout","onBlur"),sl(Om,"onTransitionRun"),sl(Mm,"onTransitionStart"),sl(Cm,"onTransitionCancel"),sl(Qc,"onTransitionEnd"),en("onMouseEnter",["mouseout","mouseover"]),en("onMouseLeave",["mouseout","mouseover"]),en("onPointerEnter",["pointerout","pointerover"]),en("onPointerLeave",["pointerout","pointerover"]),S_("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),S_("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),S_("onBeforeInput",["compositionend","keypress","textInput","paste"]),S_("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),S_("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),S_("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ia));function cd(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var _=t[l],i=_.event;_=_.listeners;t:{var s=void 0;if(e)for(var h=_.length-1;0<=h;h--){var v=_[h],A=v.instance,z=v.currentTarget;if(v=v.listener,A!==s&&i.isPropagationStopped())break t;s=v,i.currentTarget=z;try{s(i)}catch(Y){Ki(Y)}i.currentTarget=null,s=A}else for(h=0;h<_.length;h++){if(v=_[h],A=v.instance,z=v.currentTarget,v=v.listener,A!==s&&i.isPropagationStopped())break t;s=v,i.currentTarget=z;try{s(i)}catch(Y){Ki(Y)}i.currentTarget=null,s=A}}}}function yt(t,e){var l=e[$u];l===void 0&&(l=e[$u]=new Set);var _=t+"__bubble";l.has(_)||(od(e,t,2,!1),l.add(_))}function js(t,e,l){var _=0;e&&(_|=4),od(l,t,_,e)}var su="_reactListening"+Math.random().toString(36).slice(2);function ws(t){if(!t[su]){t[su]=!0,nc.forEach(function(l){l!=="selectionchange"&&(hT.has(l)||js(l,!1,t),js(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[su]||(e[su]=!0,js("selectionchange",!1,e))}}function od(t,e,l,_){switch(jd(e)){case 2:var i=GT;break;case 8:i=qT;break;default:i=Js}l=i.bind(null,e,l,t),i=void 0,!ar||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),_?i!==void 0?t.addEventListener(e,l,{capture:!0,passive:i}):t.addEventListener(e,l,!0):i!==void 0?t.addEventListener(e,l,{passive:i}):t.addEventListener(e,l,!1)}function Is(t,e,l,_,i){var s=_;if((e&1)===0&&(e&2)===0&&_!==null)t:for(;;){if(_===null)return;var h=_.tag;if(h===3||h===4){var v=_.stateNode.containerInfo;if(v===i)break;if(h===4)for(h=_.return;h!==null;){var A=h.tag;if((A===3||A===4)&&h.stateNode.containerInfo===i)return;h=h.return}for(;v!==null;){if(h=F_(v),h===null)return;if(A=h.tag,A===5||A===6||A===26||A===27){_=s=h;continue t}v=v.parentNode}}_=_.return}vc(function(){var z=s,Y=_r(l),X=[];t:{var U=Zc.get(t);if(U!==void 0){var j=Si,ct=t;switch(t){case"keypress":if(Ai(l)===0)break t;case"keydown":case"keyup":j=um;break;case"focusin":ct="focus",j=sr;break;case"focusout":ct="blur",j=sr;break;case"beforeblur":case"afterblur":j=sr;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=K1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=fm;break;case Yc:case Vc:case Xc:j=F1;break;case Qc:j=om;break;case"scroll":case"scrollend":j=k1;break;case"wheel":j=dm;break;case"copy":case"cut":case"paste":j=tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Sc;break;case"toggle":case"beforetoggle":j=Tm}var st=(e&4)!==0,wt=!st&&(t==="scroll"||t==="scrollend"),C=st?U!==null?U+"Capture":null:U;st=[];for(var R=z,D;R!==null;){var V=R;if(D=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||D===null||C===null||(V=_a(R,C),V!=null&&st.push(Ba(R,V,D))),wt)break;R=R.return}0<st.length&&(U=new j(U,ct,null,l,Y),X.push({event:U,listeners:st}))}}if((e&7)===0){t:{if(U=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",U&&l!==lr&&(ct=l.relatedTarget||l.fromElement)&&(F_(ct)||ct[J_]))break t;if((j||U)&&(U=Y.window===Y?Y:(U=Y.ownerDocument)?U.defaultView||U.parentWindow:window,j?(ct=l.relatedTarget||l.toElement,j=z,ct=ct?F_(ct):null,ct!==null&&(wt=f(ct),st=ct.tag,ct!==wt||st!==5&&st!==27&&st!==6)&&(ct=null)):(j=null,ct=z),j!==ct)){if(st=Ac,V="onMouseLeave",C="onMouseEnter",R="mouse",(t==="pointerout"||t==="pointerover")&&(st=Sc,V="onPointerLeave",C="onPointerEnter",R="pointer"),wt=j==null?U:la(j),D=ct==null?U:la(ct),U=new st(V,R+"leave",j,l,Y),U.target=wt,U.relatedTarget=D,V=null,F_(Y)===z&&(st=new st(C,R+"enter",ct,l,Y),st.target=D,st.relatedTarget=wt,V=st),wt=V,j&&ct)e:{for(st=j,C=ct,R=0,D=st;D;D=zn(D))R++;for(D=0,V=C;V;V=zn(V))D++;for(;0<R-D;)st=zn(st),R--;for(;0<D-R;)C=zn(C),D--;for(;R--;){if(st===C||C!==null&&st===C.alternate)break e;st=zn(st),C=zn(C)}st=null}else st=null;j!==null&&hd(X,U,j,st,!1),ct!==null&&wt!==null&&hd(X,wt,ct,st,!0)}}t:{if(U=z?la(z):window,j=U.nodeName&&U.nodeName.toLowerCase(),j==="select"||j==="input"&&U.type==="file")var at=Cc;else if(Oc(U))if(Dc)at=xm;else{at=Lm;var vt=Sm}else j=U.nodeName,!j||j.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?z&&er(z.elementType)&&(at=Cc):at=bm;if(at&&(at=at(t,z))){Mc(X,at,l,Y);break t}vt&&vt(t,U,z),t==="focusout"&&z&&U.type==="number"&&z.memoizedProps.value!=null&&tr(U,"number",U.value)}switch(vt=z?la(z):window,t){case"focusin":(Oc(vt)||vt.contentEditable==="true")&&(sn=vt,mr=z,ca=null);break;case"focusout":ca=mr=sn=null;break;case"mousedown":Tr=!0;break;case"contextmenu":case"mouseup":case"dragend":Tr=!1,Gc(X,l,Y);break;case"selectionchange":if(Nm)break;case"keydown":case"keyup":Gc(X,l,Y)}var rt;if(cr)t:{switch(t){case"compositionstart":var ft="onCompositionStart";break t;case"compositionend":ft="onCompositionEnd";break t;case"compositionupdate":ft="onCompositionUpdate";break t}ft=void 0}else rn?Rc(t,l)&&(ft="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(ft="onCompositionStart");ft&&(Lc&&l.locale!=="ko"&&(rn||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&rn&&(rt=pc()):(Ql=Y,ir="value"in Ql?Ql.value:Ql.textContent,rn=!0)),vt=fu(z,ft),0<vt.length&&(ft=new Ec(ft,t,null,l,Y),X.push({event:ft,listeners:vt}),rt?ft.data=rt:(rt=Nc(l),rt!==null&&(ft.data=rt)))),(rt=vm?pm(t,l):ym(t,l))&&(ft=fu(z,"onBeforeInput"),0<ft.length&&(vt=new Ec("onBeforeInput","beforeinput",null,l,Y),X.push({event:vt,listeners:ft}),vt.data=rt)),fT(X,t,z,l,Y)}cd(X,e)})}function Ba(t,e,l){return{instance:t,listener:e,currentTarget:l}}function fu(t,e){for(var l=e+"Capture",_=[];t!==null;){var i=t,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=_a(t,l),i!=null&&_.unshift(Ba(t,i,s)),i=_a(t,e),i!=null&&_.push(Ba(t,i,s))),t.tag===3)return _;t=t.return}return[]}function zn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function hd(t,e,l,_,i){for(var s=e._reactName,h=[];l!==null&&l!==_;){var v=l,A=v.alternate,z=v.stateNode;if(v=v.tag,A!==null&&A===_)break;v!==5&&v!==26&&v!==27||z===null||(A=z,i?(z=_a(l,s),z!=null&&h.unshift(Ba(l,z,A))):i||(z=_a(l,s),z!=null&&h.push(Ba(l,z,A)))),l=l.return}h.length!==0&&t.push({event:e,listeners:h})}var dT=/\r\n?/g,mT=/\u0000|\uFFFD/g;function dd(t){return(typeof t=="string"?t:""+t).replace(dT,`
`).replace(mT,"")}function md(t,e){return e=dd(e),dd(t)===e}function cu(){}function jt(t,e,l,_,i,s){switch(l){case"children":typeof _=="string"?e==="body"||e==="textarea"&&_===""||nn(t,_):(typeof _=="number"||typeof _=="bigint")&&e!=="body"&&nn(t,""+_);break;case"className":Ti(t,"class",_);break;case"tabIndex":Ti(t,"tabindex",_);break;case"dir":case"role":case"viewBox":case"width":case"height":Ti(t,l,_);break;case"style":Tc(t,_,s);break;case"data":if(e!=="object"){Ti(t,"data",_);break}case"src":case"href":if(_===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(_==null||typeof _=="function"||typeof _=="symbol"||typeof _=="boolean"){t.removeAttribute(l);break}_=pi(""+_),t.setAttribute(l,_);break;case"action":case"formAction":if(typeof _=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(l==="formAction"?(e!=="input"&&jt(t,e,"name",i.name,i,null),jt(t,e,"formEncType",i.formEncType,i,null),jt(t,e,"formMethod",i.formMethod,i,null),jt(t,e,"formTarget",i.formTarget,i,null)):(jt(t,e,"encType",i.encType,i,null),jt(t,e,"method",i.method,i,null),jt(t,e,"target",i.target,i,null)));if(_==null||typeof _=="symbol"||typeof _=="boolean"){t.removeAttribute(l);break}_=pi(""+_),t.setAttribute(l,_);break;case"onClick":_!=null&&(t.onclick=cu);break;case"onScroll":_!=null&&yt("scroll",t);break;case"onScrollEnd":_!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(_!=null){if(typeof _!="object"||!("__html"in _))throw Error(a(61));if(l=_.__html,l!=null){if(i.children!=null)throw Error(a(60));t.innerHTML=l}}break;case"multiple":t.multiple=_&&typeof _!="function"&&typeof _!="symbol";break;case"muted":t.muted=_&&typeof _!="function"&&typeof _!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(_==null||typeof _=="function"||typeof _=="boolean"||typeof _=="symbol"){t.removeAttribute("xlink:href");break}l=pi(""+_),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":_!=null&&typeof _!="function"&&typeof _!="symbol"?t.setAttribute(l,""+_):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":_&&typeof _!="function"&&typeof _!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":_===!0?t.setAttribute(l,""):_!==!1&&_!=null&&typeof _!="function"&&typeof _!="symbol"?t.setAttribute(l,_):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":_!=null&&typeof _!="function"&&typeof _!="symbol"&&!isNaN(_)&&1<=_?t.setAttribute(l,_):t.removeAttribute(l);break;case"rowSpan":case"start":_==null||typeof _=="function"||typeof _=="symbol"||isNaN(_)?t.removeAttribute(l):t.setAttribute(l,_);break;case"popover":yt("beforetoggle",t),yt("toggle",t),mi(t,"popover",_);break;case"xlinkActuate":Sl(t,"http://www.w3.org/1999/xlink","xlink:actuate",_);break;case"xlinkArcrole":Sl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",_);break;case"xlinkRole":Sl(t,"http://www.w3.org/1999/xlink","xlink:role",_);break;case"xlinkShow":Sl(t,"http://www.w3.org/1999/xlink","xlink:show",_);break;case"xlinkTitle":Sl(t,"http://www.w3.org/1999/xlink","xlink:title",_);break;case"xlinkType":Sl(t,"http://www.w3.org/1999/xlink","xlink:type",_);break;case"xmlBase":Sl(t,"http://www.w3.org/XML/1998/namespace","xml:base",_);break;case"xmlLang":Sl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",_);break;case"xmlSpace":Sl(t,"http://www.w3.org/XML/1998/namespace","xml:space",_);break;case"is":mi(t,"is",_);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Q1.get(l)||l,mi(t,l,_))}}function Bs(t,e,l,_,i,s){switch(l){case"style":Tc(t,_,s);break;case"dangerouslySetInnerHTML":if(_!=null){if(typeof _!="object"||!("__html"in _))throw Error(a(61));if(l=_.__html,l!=null){if(i.children!=null)throw Error(a(60));t.innerHTML=l}}break;case"children":typeof _=="string"?nn(t,_):(typeof _=="number"||typeof _=="bigint")&&nn(t,""+_);break;case"onScroll":_!=null&&yt("scroll",t);break;case"onScrollEnd":_!=null&&yt("scrollend",t);break;case"onClick":_!=null&&(t.onclick=cu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ac.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),e=l.slice(2,i?l.length-7:void 0),s=t[be]||null,s=s!=null?s[l]:null,typeof s=="function"&&t.removeEventListener(e,s,i),typeof _=="function")){typeof s!="function"&&s!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,_,i);break t}l in t?t[l]=_:_===!0?t.setAttribute(l,""):mi(t,l,_)}}}function Te(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var _=!1,i=!1,s;for(s in l)if(l.hasOwnProperty(s)){var h=l[s];if(h!=null)switch(s){case"src":_=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,e));default:jt(t,e,s,h,l,null)}}i&&jt(t,e,"srcSet",l.srcSet,l,null),_&&jt(t,e,"src",l.src,l,null);return;case"input":yt("invalid",t);var v=s=h=i=null,A=null,z=null;for(_ in l)if(l.hasOwnProperty(_)){var Y=l[_];if(Y!=null)switch(_){case"name":i=Y;break;case"type":h=Y;break;case"checked":A=Y;break;case"defaultChecked":z=Y;break;case"value":s=Y;break;case"defaultValue":v=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,e));break;default:jt(t,e,_,Y,l,null)}}oc(t,s,v,A,z,h,i,!1),gi(t);return;case"select":yt("invalid",t),_=h=s=null;for(i in l)if(l.hasOwnProperty(i)&&(v=l[i],v!=null))switch(i){case"value":s=v;break;case"defaultValue":h=v;break;case"multiple":_=v;default:jt(t,e,i,v,l,null)}e=s,l=h,t.multiple=!!_,e!=null?_n(t,!!_,e,!1):l!=null&&_n(t,!!_,l,!0);return;case"textarea":yt("invalid",t),s=i=_=null;for(h in l)if(l.hasOwnProperty(h)&&(v=l[h],v!=null))switch(h){case"value":_=v;break;case"defaultValue":i=v;break;case"children":s=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(a(91));break;default:jt(t,e,h,v,l,null)}dc(t,_,i,s),gi(t);return;case"option":for(A in l)if(l.hasOwnProperty(A)&&(_=l[A],_!=null))switch(A){case"selected":t.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:jt(t,e,A,_,l,null)}return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(_=0;_<Ia.length;_++)yt(Ia[_],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in l)if(l.hasOwnProperty(z)&&(_=l[z],_!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,e));default:jt(t,e,z,_,l,null)}return;default:if(er(e)){for(Y in l)l.hasOwnProperty(Y)&&(_=l[Y],_!==void 0&&Bs(t,e,Y,_,l,void 0));return}}for(v in l)l.hasOwnProperty(v)&&(_=l[v],_!=null&&jt(t,e,v,_,l,null))}function TT(t,e,l,_){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,h=null,v=null,A=null,z=null,Y=null;for(j in l){var X=l[j];if(l.hasOwnProperty(j)&&X!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":A=X;default:_.hasOwnProperty(j)||jt(t,e,j,null,_,X)}}for(var U in _){var j=_[U];if(X=l[U],_.hasOwnProperty(U)&&(j!=null||X!=null))switch(U){case"type":s=j;break;case"name":i=j;break;case"checked":z=j;break;case"defaultChecked":Y=j;break;case"value":h=j;break;case"defaultValue":v=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(a(137,e));break;default:j!==X&&jt(t,e,U,j,_,X)}}Pu(t,h,v,A,z,Y,s,i);return;case"select":j=h=v=U=null;for(s in l)if(A=l[s],l.hasOwnProperty(s)&&A!=null)switch(s){case"value":break;case"multiple":j=A;default:_.hasOwnProperty(s)||jt(t,e,s,null,_,A)}for(i in _)if(s=_[i],A=l[i],_.hasOwnProperty(i)&&(s!=null||A!=null))switch(i){case"value":U=s;break;case"defaultValue":v=s;break;case"multiple":h=s;default:s!==A&&jt(t,e,i,s,_,A)}e=v,l=h,_=j,U!=null?_n(t,!!l,U,!1):!!_!=!!l&&(e!=null?_n(t,!!l,e,!0):_n(t,!!l,l?[]:"",!1));return;case"textarea":j=U=null;for(v in l)if(i=l[v],l.hasOwnProperty(v)&&i!=null&&!_.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:jt(t,e,v,null,_,i)}for(h in _)if(i=_[h],s=l[h],_.hasOwnProperty(h)&&(i!=null||s!=null))switch(h){case"value":U=i;break;case"defaultValue":j=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(a(91));break;default:i!==s&&jt(t,e,h,i,_,s)}hc(t,U,j);return;case"option":for(var ct in l)if(U=l[ct],l.hasOwnProperty(ct)&&U!=null&&!_.hasOwnProperty(ct))switch(ct){case"selected":t.selected=!1;break;default:jt(t,e,ct,null,_,U)}for(A in _)if(U=_[A],j=l[A],_.hasOwnProperty(A)&&U!==j&&(U!=null||j!=null))switch(A){case"selected":t.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:jt(t,e,A,U,_,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in l)U=l[st],l.hasOwnProperty(st)&&U!=null&&!_.hasOwnProperty(st)&&jt(t,e,st,null,_,U);for(z in _)if(U=_[z],j=l[z],_.hasOwnProperty(z)&&U!==j&&(U!=null||j!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(a(137,e));break;default:jt(t,e,z,U,_,j)}return;default:if(er(e)){for(var wt in l)U=l[wt],l.hasOwnProperty(wt)&&U!==void 0&&!_.hasOwnProperty(wt)&&Bs(t,e,wt,void 0,_,U);for(Y in _)U=_[Y],j=l[Y],!_.hasOwnProperty(Y)||U===j||U===void 0&&j===void 0||Bs(t,e,Y,U,_,j);return}}for(var C in l)U=l[C],l.hasOwnProperty(C)&&U!=null&&!_.hasOwnProperty(C)&&jt(t,e,C,null,_,U);for(X in _)U=_[X],j=l[X],!_.hasOwnProperty(X)||U===j||U==null&&j==null||jt(t,e,X,U,_,j)}var Gs=null,qs=null;function ou(t){return t.nodeType===9?t:t.ownerDocument}function Td(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ys(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vs=null;function gT(){var t=window.event;return t&&t.type==="popstate"?t===Vs?!1:(Vs=t,!0):(Vs=null,!1)}var vd=typeof setTimeout=="function"?setTimeout:void 0,vT=typeof clearTimeout=="function"?clearTimeout:void 0,pd=typeof Promise=="function"?Promise:void 0,pT=typeof queueMicrotask=="function"?queueMicrotask:typeof pd<"u"?function(t){return pd.resolve(null).then(t).catch(yT)}:vd;function yT(t){setTimeout(function(){throw t})}function u_(t){return t==="head"}function yd(t,e){var l=e,_=0,i=0;do{var s=l.nextSibling;if(t.removeChild(l),s&&s.nodeType===8)if(l=s.data,l==="/$"){if(0<_&&8>_){l=_;var h=t.ownerDocument;if(l&1&&Ga(h.documentElement),l&2&&Ga(h.body),l&4)for(l=h.head,Ga(l),h=l.firstChild;h;){var v=h.nextSibling,A=h.nodeName;h[ea]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||l.removeChild(h),h=v}}if(i===0){t.removeChild(s),$a(e);return}i--}else l==="$"||l==="$?"||l==="$!"?i++:_=l.charCodeAt(0)-48;else _=0;l=s}while(l);$a(e)}function Xs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Xs(l),Ku(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function AT(t,e,l,_){for(;t.nodeType===1;){var i=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!_&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(_){if(!t[ea])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=cl(t.nextSibling),t===null)break}return null}function ET(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=cl(t.nextSibling),t===null))return null;return t}function Qs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function ST(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var _=function(){e(),l.removeEventListener("DOMContentLoaded",_)};l.addEventListener("DOMContentLoaded",_),t._reactRetry=_}}function cl(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Zs=null;function Ad(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function Ed(t,e,l){switch(e=ou(l),t){case"html":if(t=e.documentElement,!t)throw Error(a(452));return t;case"head":if(t=e.head,!t)throw Error(a(453));return t;case"body":if(t=e.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Ga(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ku(t)}var nl=new Map,Sd=new Set;function hu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var wl=J.d;J.d={f:LT,r:bT,D:xT,C:RT,L:NT,m:OT,X:CT,S:MT,M:DT};function LT(){var t=wl.f(),e=nu();return t||e}function bT(t){var e=P_(t);e!==null&&e.tag===5&&e.type==="form"?Vo(e):wl.r(t)}var Hn=typeof document>"u"?null:document;function Ld(t,e,l){var _=Hn;if(_&&typeof e=="string"&&e){var i=Je(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),Sd.has(i)||(Sd.add(i),t={rel:t,crossOrigin:l,href:e},_.querySelector(i)===null&&(e=_.createElement("link"),Te(e,"link",t),se(e),_.head.appendChild(e)))}}function xT(t){wl.D(t),Ld("dns-prefetch",t,null)}function RT(t,e){wl.C(t,e),Ld("preconnect",t,e)}function NT(t,e,l){wl.L(t,e,l);var _=Hn;if(_&&t&&e){var i='link[rel="preload"][as="'+Je(e)+'"]';e==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+Je(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+Je(l.imageSizes)+'"]')):i+='[href="'+Je(t)+'"]';var s=i;switch(e){case"style":s=Un(t);break;case"script":s=jn(t)}nl.has(s)||(t=g({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),nl.set(s,t),_.querySelector(i)!==null||e==="style"&&_.querySelector(qa(s))||e==="script"&&_.querySelector(Ya(s))||(e=_.createElement("link"),Te(e,"link",t),se(e),_.head.appendChild(e)))}}function OT(t,e){wl.m(t,e);var l=Hn;if(l&&t){var _=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Je(_)+'"][href="'+Je(t)+'"]',s=i;switch(_){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=jn(t)}if(!nl.has(s)&&(t=g({rel:"modulepreload",href:t},e),nl.set(s,t),l.querySelector(i)===null)){switch(_){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Ya(s)))return}_=l.createElement("link"),Te(_,"link",t),se(_),l.head.appendChild(_)}}}function MT(t,e,l){wl.S(t,e,l);var _=Hn;if(_&&t){var i=tn(_).hoistableStyles,s=Un(t);e=e||"default";var h=i.get(s);if(!h){var v={loading:0,preload:null};if(h=_.querySelector(qa(s)))v.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":e},l),(l=nl.get(s))&&ks(t,l);var A=h=_.createElement("link");se(A),Te(A,"link",t),A._p=new Promise(function(z,Y){A.onload=z,A.onerror=Y}),A.addEventListener("load",function(){v.loading|=1}),A.addEventListener("error",function(){v.loading|=2}),v.loading|=4,du(h,e,_)}h={type:"stylesheet",instance:h,count:1,state:v},i.set(s,h)}}}function CT(t,e){wl.X(t,e);var l=Hn;if(l&&t){var _=tn(l).hoistableScripts,i=jn(t),s=_.get(i);s||(s=l.querySelector(Ya(i)),s||(t=g({src:t,async:!0},e),(e=nl.get(i))&&$s(t,e),s=l.createElement("script"),se(s),Te(s,"link",t),l.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},_.set(i,s))}}function DT(t,e){wl.M(t,e);var l=Hn;if(l&&t){var _=tn(l).hoistableScripts,i=jn(t),s=_.get(i);s||(s=l.querySelector(Ya(i)),s||(t=g({src:t,async:!0,type:"module"},e),(e=nl.get(i))&&$s(t,e),s=l.createElement("script"),se(s),Te(s,"link",t),l.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},_.set(i,s))}}function bd(t,e,l,_){var i=(i=O.current)?hu(i):null;if(!i)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Un(l.href),l=tn(i).hoistableStyles,_=l.get(e),_||(_={type:"style",instance:null,count:0,state:null},l.set(e,_)),_):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Un(l.href);var s=tn(i).hoistableStyles,h=s.get(t);if(h||(i=i.ownerDocument||i,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,h),(s=i.querySelector(qa(t)))&&!s._p&&(h.instance=s,h.state.loading=5),nl.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},nl.set(t,l),s||zT(i,t,l,h.state))),e&&_===null)throw Error(a(528,""));return h}if(e&&_!==null)throw Error(a(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=jn(l),l=tn(i).hoistableScripts,_=l.get(e),_||(_={type:"script",instance:null,count:0,state:null},l.set(e,_)),_):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Un(t){return'href="'+Je(t)+'"'}function qa(t){return'link[rel="stylesheet"]['+t+"]"}function xd(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function zT(t,e,l,_){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?_.loading=1:(e=t.createElement("link"),_.preload=e,e.addEventListener("load",function(){return _.loading|=1}),e.addEventListener("error",function(){return _.loading|=2}),Te(e,"link",l),se(e),t.head.appendChild(e))}function jn(t){return'[src="'+Je(t)+'"]'}function Ya(t){return"script[async]"+t}function Rd(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var _=t.querySelector('style[data-href~="'+Je(l.href)+'"]');if(_)return e.instance=_,se(_),_;var i=g({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return _=(t.ownerDocument||t).createElement("style"),se(_),Te(_,"style",i),du(_,l.precedence,t),e.instance=_;case"stylesheet":i=Un(l.href);var s=t.querySelector(qa(i));if(s)return e.state.loading|=4,e.instance=s,se(s),s;_=xd(l),(i=nl.get(i))&&ks(_,i),s=(t.ownerDocument||t).createElement("link"),se(s);var h=s;return h._p=new Promise(function(v,A){h.onload=v,h.onerror=A}),Te(s,"link",_),e.state.loading|=4,du(s,l.precedence,t),e.instance=s;case"script":return s=jn(l.src),(i=t.querySelector(Ya(s)))?(e.instance=i,se(i),i):(_=l,(i=nl.get(s))&&(_=g({},l),$s(_,i)),t=t.ownerDocument||t,i=t.createElement("script"),se(i),Te(i,"link",_),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(a(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(_=e.instance,e.state.loading|=4,du(_,l.precedence,t));return e.instance}function du(t,e,l){for(var _=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=_.length?_[_.length-1]:null,s=i,h=0;h<_.length;h++){var v=_[h];if(v.dataset.precedence===e)s=v;else if(s!==i)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function ks(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function $s(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var mu=null;function Nd(t,e,l){if(mu===null){var _=new Map,i=mu=new Map;i.set(l,_)}else i=mu,_=i.get(l),_||(_=new Map,i.set(l,_));if(_.has(t))return _;for(_.set(t,null),l=l.getElementsByTagName(t),i=0;i<l.length;i++){var s=l[i];if(!(s[ea]||s[ve]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var h=s.getAttribute(e)||"";h=t+h;var v=_.get(h);v?v.push(s):_.set(h,[s])}}return _}function Od(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function HT(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Md(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Va=null;function UT(){}function jT(t,e,l){if(Va===null)throw Error(a(475));var _=Va;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Un(l.href),s=t.querySelector(qa(i));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(_.count++,_=Tu.bind(_),t.then(_,_)),e.state.loading|=4,e.instance=s,se(s);return}s=t.ownerDocument||t,l=xd(l),(i=nl.get(i))&&ks(l,i),s=s.createElement("link"),se(s);var h=s;h._p=new Promise(function(v,A){h.onload=v,h.onerror=A}),Te(s,"link",l),e.instance=s}_.stylesheets===null&&(_.stylesheets=new Map),_.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(_.count++,e=Tu.bind(_),t.addEventListener("load",e),t.addEventListener("error",e))}}function wT(){if(Va===null)throw Error(a(475));var t=Va;return t.stylesheets&&t.count===0&&Ks(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&Ks(t,t.stylesheets),t.unsuspend){var _=t.unsuspend;t.unsuspend=null,_()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Tu(){if(this.count--,this.count===0){if(this.stylesheets)Ks(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var gu=null;function Ks(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,gu=new Map,e.forEach(IT,t),gu=null,Tu.call(t))}function IT(t,e){if(!(e.state.loading&4)){var l=gu.get(t);if(l)var _=l.get(null);else{l=new Map,gu.set(t,l);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var h=i[s];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(l.set(h.dataset.precedence,h),_=h)}_&&l.set(null,_)}i=e.instance,h=i.getAttribute("data-precedence"),s=l.get(h)||_,s===_&&l.set(null,i),l.set(h,i),this.count++,_=Tu.bind(this),i.addEventListener("load",_),i.addEventListener("error",_),s?s.parentNode.insertBefore(i,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Xa={$$typeof:$,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function BT(t,e,l,_,i,s,h,v){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qu(0),this.hiddenUpdates=Qu(null),this.identifierPrefix=_,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Cd(t,e,l,_,i,s,h,v,A,z,Y,X){return t=new BT(t,e,l,h,v,A,z,X),e=1,s===!0&&(e|=24),s=Ie(3,null,null,e),t.current=s,s.stateNode=t,e=Mr(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:_,isDehydrated:l,cache:e},Hr(s),t}function Dd(t){return t?(t=hn,t):hn}function zd(t,e,l,_,i,s){i=Dd(i),_.context===null?_.context=i:_.pendingContext=i,_=$l(e),_.payload={element:l},s=s===void 0?null:s,s!==null&&(_.callback=s),l=Kl(t,_,e),l!==null&&(Ve(l,t,e),ya(l,t,e))}function Hd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function Ws(t,e){Hd(t,e),(t=t.alternate)&&Hd(t,e)}function Ud(t){if(t.tag===13){var e=on(t,67108864);e!==null&&Ve(e,t,67108864),Ws(t,67108864)}}var vu=!0;function GT(t,e,l,_){var i=I.T;I.T=null;var s=J.p;try{J.p=2,Js(t,e,l,_)}finally{J.p=s,I.T=i}}function qT(t,e,l,_){var i=I.T;I.T=null;var s=J.p;try{J.p=8,Js(t,e,l,_)}finally{J.p=s,I.T=i}}function Js(t,e,l,_){if(vu){var i=Fs(_);if(i===null)Is(t,e,_,pu,l),wd(t,_);else if(VT(i,t,e,l,_))_.stopPropagation();else if(wd(t,_),e&4&&-1<YT.indexOf(t)){for(;i!==null;){var s=P_(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var h=E_(s.pendingLanes);if(h!==0){var v=s;for(v.pendingLanes|=2,v.entangledLanes|=2;h;){var A=1<<31-je(h);v.entanglements[1]|=A,h&=~A}gl(s),(Ct&6)===0&&(lu=Vt()+500,wa(0))}}break;case 13:v=on(s,2),v!==null&&Ve(v,s,2),nu(),Ws(s,2)}if(s=Fs(_),s===null&&Is(t,e,_,pu,l),s===i)break;i=s}i!==null&&_.stopPropagation()}else Is(t,e,_,null,l)}}function Fs(t){return t=_r(t),Ps(t)}var pu=null;function Ps(t){if(pu=null,t=F_(t),t!==null){var e=f(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=c(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return pu=t,null}function jd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Yl()){case A_:return 2;case Xt:return 8;case Wt:case It:return 32;case Jn:return 268435456;default:return 32}default:return 32}}var tf=!1,r_=null,s_=null,f_=null,Qa=new Map,Za=new Map,c_=[],YT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wd(t,e){switch(t){case"focusin":case"focusout":r_=null;break;case"dragenter":case"dragleave":s_=null;break;case"mouseover":case"mouseout":f_=null;break;case"pointerover":case"pointerout":Qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(e.pointerId)}}function ka(t,e,l,_,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:l,eventSystemFlags:_,nativeEvent:s,targetContainers:[i]},e!==null&&(e=P_(e),e!==null&&Ud(e)),t):(t.eventSystemFlags|=_,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function VT(t,e,l,_,i){switch(e){case"focusin":return r_=ka(r_,t,e,l,_,i),!0;case"dragenter":return s_=ka(s_,t,e,l,_,i),!0;case"mouseover":return f_=ka(f_,t,e,l,_,i),!0;case"pointerover":var s=i.pointerId;return Qa.set(s,ka(Qa.get(s)||null,t,e,l,_,i)),!0;case"gotpointercapture":return s=i.pointerId,Za.set(s,ka(Za.get(s)||null,t,e,l,_,i)),!0}return!1}function Id(t){var e=F_(t.target);if(e!==null){var l=f(e);if(l!==null){if(e=l.tag,e===13){if(e=c(l),e!==null){t.blockedOn=e,j1(t.priority,function(){if(l.tag===13){var _=Ye();_=Zu(_);var i=on(l,_);i!==null&&Ve(i,l,_),Ws(l,_)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Fs(t.nativeEvent);if(l===null){l=t.nativeEvent;var _=new l.constructor(l.type,l);lr=_,l.target.dispatchEvent(_),lr=null}else return e=P_(l),e!==null&&Ud(e),t.blockedOn=l,!1;e.shift()}return!0}function Bd(t,e,l){yu(t)&&l.delete(e)}function XT(){tf=!1,r_!==null&&yu(r_)&&(r_=null),s_!==null&&yu(s_)&&(s_=null),f_!==null&&yu(f_)&&(f_=null),Qa.forEach(Bd),Za.forEach(Bd)}function Au(t,e){t.blockedOn===e&&(t.blockedOn=null,tf||(tf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,XT)))}var Eu=null;function Gd(t){Eu!==t&&(Eu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Eu===t&&(Eu=null);for(var e=0;e<t.length;e+=3){var l=t[e],_=t[e+1],i=t[e+2];if(typeof _!="function"){if(Ps(_||l)===null)continue;break}var s=P_(l);s!==null&&(t.splice(e,3),e-=3,Pr(s,{pending:!0,data:i,method:l.method,action:_},_,i))}}))}function $a(t){function e(A){return Au(A,t)}r_!==null&&Au(r_,t),s_!==null&&Au(s_,t),f_!==null&&Au(f_,t),Qa.forEach(e),Za.forEach(e);for(var l=0;l<c_.length;l++){var _=c_[l];_.blockedOn===t&&(_.blockedOn=null)}for(;0<c_.length&&(l=c_[0],l.blockedOn===null);)Id(l),l.blockedOn===null&&c_.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(_=0;_<l.length;_+=3){var i=l[_],s=l[_+1],h=i[be]||null;if(typeof s=="function")h||Gd(l);else if(h){var v=null;if(s&&s.hasAttribute("formAction")){if(i=s,h=s[be]||null)v=h.formAction;else if(Ps(i)!==null)continue}else v=h.action;typeof v=="function"?l[_+1]=v:(l.splice(_,3),_-=3),Gd(l)}}}function ef(t){this._internalRoot=t}Su.prototype.render=ef.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(a(409));var l=e.current,_=Ye();zd(l,_,t,e,null,null)},Su.prototype.unmount=ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zd(t.current,2,null,t,null,null),nu(),e[J_]=null}};function Su(t){this._internalRoot=t}Su.prototype.unstable_scheduleHydration=function(t){if(t){var e=lc();t={blockedOn:null,target:t,priority:e};for(var l=0;l<c_.length&&e!==0&&e<c_[l].priority;l++);c_.splice(l,0,t),l===0&&Id(t)}};var qd=n.version;if(qd!=="19.1.1")throw Error(a(527,qd,"19.1.1"));J.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=T(e),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var QT={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lu.isDisabled&&Lu.supportsFiber)try{Fn=Lu.inject(QT),Ue=Lu}catch{}}return Wa.createRoot=function(t,e){if(!r(t))throw Error(a(299));var l=!1,_="",i=_h,s=nh,h=ah,v=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(_=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(h=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(v=e.unstable_transitionCallbacks)),e=Cd(t,1,!1,null,null,l,_,i,s,h,v,null),t[J_]=e.current,ws(t),new ef(e)},Wa.hydrateRoot=function(t,e,l){if(!r(t))throw Error(a(299));var _=!1,i="",s=_h,h=nh,v=ah,A=null,z=null;return l!=null&&(l.unstable_strictMode===!0&&(_=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(s=l.onUncaughtError),l.onCaughtError!==void 0&&(h=l.onCaughtError),l.onRecoverableError!==void 0&&(v=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(A=l.unstable_transitionCallbacks),l.formState!==void 0&&(z=l.formState)),e=Cd(t,1,!0,e,l??null,_,i,s,h,v,A,z),e.context=Dd(null),l=e.current,_=Ye(),_=Zu(_),i=$l(_),i.callback=null,Kl(l,i,_),l=_,e.current.lanes=l,ta(e,l),gl(e),t[J_]=e.current,ws(t),new Su(e)},Wa.version="19.1.1",Wa}var Jd;function eg(){if(Jd)return _f.exports;Jd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),_f.exports=tg(),_f.exports}var lg=eg(),zt=zf();const X_=x0(zt);var R0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fd=X_.createContext&&X_.createContext(R0),_g=["attr","size","title"];function ng(o,n){if(o==null)return{};var u=ag(o,n),a,r;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(o);for(r=0;r<f.length;r++)a=f[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(o,a)&&(u[a]=o[a])}return u}function ag(o,n){if(o==null)return{};var u={};for(var a in o)if(Object.prototype.hasOwnProperty.call(o,a)){if(n.indexOf(a)>=0)continue;u[a]=o[a]}return u}function Du(){return Du=Object.assign?Object.assign.bind():function(o){for(var n=1;n<arguments.length;n++){var u=arguments[n];for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&(o[a]=u[a])}return o},Du.apply(this,arguments)}function Pd(o,n){var u=Object.keys(o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable})),u.push.apply(u,a)}return u}function zu(o){for(var n=1;n<arguments.length;n++){var u=arguments[n]!=null?arguments[n]:{};n%2?Pd(Object(u),!0).forEach(function(a){ig(o,a,u[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(u)):Pd(Object(u)).forEach(function(a){Object.defineProperty(o,a,Object.getOwnPropertyDescriptor(u,a))})}return o}function ig(o,n,u){return n=ug(n),n in o?Object.defineProperty(o,n,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[n]=u,o}function ug(o){var n=rg(o,"string");return typeof n=="symbol"?n:n+""}function rg(o,n){if(typeof o!="object"||!o)return o;var u=o[Symbol.toPrimitive];if(u!==void 0){var a=u.call(o,n);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(o)}function N0(o){return o&&o.map((n,u)=>X_.createElement(n.tag,zu({key:u},n.attr),N0(n.child)))}function ol(o){return n=>X_.createElement(sg,Du({attr:zu({},o.attr)},n),N0(o.child))}function sg(o){var n=u=>{var{attr:a,size:r,title:f}=o,c=ng(o,_g),d=r||u.size||"1em",T;return u.className&&(T=u.className),o.className&&(T=(T?T+" ":"")+o.className),X_.createElement("svg",Du({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,a,c,{className:T,style:zu(zu({color:o.color||u.color},u.style),o.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),f&&X_.createElement("title",null,f),o.children)};return Fd!==void 0?X_.createElement(Fd.Consumer,null,u=>n(u)):n(R0)}function fg(o){return ol({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"},child:[]}]})(o)}function Il(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function O0(o,n){o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.__proto__=n}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ke={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xn={duration:.5,overwrite:!1,delay:0},Hf,ge,Zt,il=1e8,qt=1/il,vf=Math.PI*2,cg=vf/4,og=0,M0=Math.sqrt,hg=Math.cos,dg=Math.sin,he=function(n){return typeof n=="string"},Pt=function(n){return typeof n=="function"},Gl=function(n){return typeof n=="number"},Uf=function(n){return typeof n>"u"},Al=function(n){return typeof n=="object"},Me=function(n){return n!==!1},jf=function(){return typeof window<"u"},bu=function(n){return Pt(n)||he(n)},C0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ee=Array.isArray,pf=/(?:-?\.?\d|\.)+/gi,D0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,sf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,z0=/[+-]=-?[.\d]+/,H0=/[^,'"\[\]\s]+/gi,mg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,$t,vl,yf,wf,$e={},Hu={},U0,j0=function(n){return(Hu=Qn(n,$e))&&He},If=function(n,u){return console.warn("Invalid property",n,"set to",u,"Missing plugin? gsap.registerPlugin()")},_i=function(n,u){return!u&&console.warn(n)},w0=function(n,u){return n&&($e[n]=u)&&Hu&&(Hu[n]=u)||$e},ni=function(){return 0},Tg={suppressEvents:!0,isStart:!0,kill:!1},Nu={suppressEvents:!0,kill:!1},gg={suppressEvents:!0},Bf={},T_=[],Af={},I0,Xe={},ff={},t0=30,Ou=[],Gf="",qf=function(n){var u=n[0],a,r;if(Al(u)||Pt(u)||(n=[n]),!(a=(u._gsap||{}).harness)){for(r=Ou.length;r--&&!Ou[r].targetTest(u););a=Ou[r]}for(r=n.length;r--;)n[r]&&(n[r]._gsap||(n[r]._gsap=new r1(n[r],a)))||n.splice(r,1);return n},Q_=function(n){return n._gsap||qf(ul(n))[0]._gsap},B0=function(n,u,a){return(a=n[u])&&Pt(a)?n[u]():Uf(a)&&n.getAttribute&&n.getAttribute(u)||a},Ce=function(n,u){return(n=n.split(",")).forEach(u)||n},le=function(n){return Math.round(n*1e5)/1e5||0},ie=function(n){return Math.round(n*1e7)/1e7||0},qn=function(n,u){var a=u.charAt(0),r=parseFloat(u.substr(2));return n=parseFloat(n),a==="+"?n+r:a==="-"?n-r:a==="*"?n*r:n/r},vg=function(n,u){for(var a=u.length,r=0;n.indexOf(u[r])<0&&++r<a;);return r<a},Uu=function(){var n=T_.length,u=T_.slice(0),a,r;for(Af={},T_.length=0,a=0;a<n;a++)r=u[a],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Yf=function(n){return!!(n._initted||n._startAt||n.add)},G0=function(n,u,a,r){T_.length&&!ge&&Uu(),n.render(u,a,!!(ge&&u<0&&Yf(n))),T_.length&&!ge&&Uu()},q0=function(n){var u=parseFloat(n);return(u||u===0)&&(n+"").match(H0).length<2?u:he(n)?n.trim():n},Y0=function(n){return n},Ke=function(n,u){for(var a in u)a in n||(n[a]=u[a]);return n},pg=function(n){return function(u,a){for(var r in a)r in u||r==="duration"&&n||r==="ease"||(u[r]=a[r])}},Qn=function(n,u){for(var a in u)n[a]=u[a];return n},e0=function o(n,u){for(var a in u)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(n[a]=Al(u[a])?o(n[a]||(n[a]={}),u[a]):u[a]);return n},ju=function(n,u){var a={},r;for(r in n)r in u||(a[r]=n[r]);return a},ti=function(n){var u=n.parent||$t,a=n.keyframes?pg(Ee(n.keyframes)):Ke;if(Me(n.inherit))for(;u;)a(n,u.vars.defaults),u=u.parent||u._dp;return n},yg=function(n,u){for(var a=n.length,r=a===u.length;r&&a--&&n[a]===u[a];);return a<0},V0=function(n,u,a,r,f){var c=n[r],d;if(f)for(d=u[f];c&&c[f]>d;)c=c._prev;return c?(u._next=c._next,c._next=u):(u._next=n[a],n[a]=u),u._next?u._next._prev=u:n[r]=u,u._prev=c,u.parent=u._dp=n,u},qu=function(n,u,a,r){a===void 0&&(a="_first"),r===void 0&&(r="_last");var f=u._prev,c=u._next;f?f._next=c:n[a]===u&&(n[a]=c),c?c._prev=f:n[r]===u&&(n[r]=f),u._next=u._prev=u.parent=null},v_=function(n,u){n.parent&&(!u||n.parent.autoRemoveChildren)&&n.parent.remove&&n.parent.remove(n),n._act=0},Z_=function(n,u){if(n&&(!u||u._end>n._dur||u._start<0))for(var a=n;a;)a._dirty=1,a=a.parent;return n},Ag=function(n){for(var u=n.parent;u&&u.parent;)u._dirty=1,u.totalDuration(),u=u.parent;return n},Ef=function(n,u,a,r){return n._startAt&&(ge?n._startAt.revert(Nu):n.vars.immediateRender&&!n.vars.autoRevert||n._startAt.render(u,!0,r))},Eg=function o(n){return!n||n._ts&&o(n.parent)},l0=function(n){return n._repeat?Zn(n._tTime,n=n.duration()+n._rDelay)*n:0},Zn=function(n,u){var a=Math.floor(n=ie(n/u));return n&&a===n?a-1:a},wu=function(n,u){return(n-u._start)*u._ts+(u._ts>=0?0:u._dirty?u.totalDuration():u._tDur)},Yu=function(n){return n._end=ie(n._start+(n._tDur/Math.abs(n._ts||n._rts||qt)||0))},Vu=function(n,u){var a=n._dp;return a&&a.smoothChildTiming&&n._ts&&(n._start=ie(a._time-(n._ts>0?u/n._ts:((n._dirty?n.totalDuration():n._tDur)-u)/-n._ts)),Yu(n),a._dirty||Z_(a,n)),n},X0=function(n,u){var a;if((u._time||!u._dur&&u._initted||u._start<n._time&&(u._dur||!u.add))&&(a=wu(n.rawTime(),u),(!u._dur||fi(0,u.totalDuration(),a)-u._tTime>qt)&&u.render(a,!0)),Z_(n,u)._dp&&n._initted&&n._time>=n._dur&&n._ts){if(n._dur<n.duration())for(a=n;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;n._zTime=-qt}},pl=function(n,u,a,r){return u.parent&&v_(u),u._start=ie((Gl(a)?a:a||n!==$t?al(n,a,u):n._time)+u._delay),u._end=ie(u._start+(u.totalDuration()/Math.abs(u.timeScale())||0)),V0(n,u,"_first","_last",n._sort?"_start":0),Sf(u)||(n._recent=u),r||X0(n,u),n._ts<0&&Vu(n,n._tTime),n},Q0=function(n,u){return($e.ScrollTrigger||If("scrollTrigger",u))&&$e.ScrollTrigger.create(u,n)},Z0=function(n,u,a,r,f){if(Xf(n,u,f),!n._initted)return 1;if(!a&&n._pt&&!ge&&(n._dur&&n.vars.lazy!==!1||!n._dur&&n.vars.lazy)&&I0!==Qe.frame)return T_.push(n),n._lazy=[f,r],1},Sg=function o(n){var u=n.parent;return u&&u._ts&&u._initted&&!u._lock&&(u.rawTime()<0||o(u))},Sf=function(n){var u=n.data;return u==="isFromStart"||u==="isStart"},Lg=function(n,u,a,r){var f=n.ratio,c=u<0||!u&&(!n._start&&Sg(n)&&!(!n._initted&&Sf(n))||(n._ts<0||n._dp._ts<0)&&!Sf(n))?0:1,d=n._rDelay,T=0,m,g,y;if(d&&n._repeat&&(T=fi(0,n._tDur,u),g=Zn(T,d),n._yoyo&&g&1&&(c=1-c),g!==Zn(n._tTime,d)&&(f=1-c,n.vars.repeatRefresh&&n._initted&&n.invalidate())),c!==f||ge||r||n._zTime===qt||!u&&n._zTime){if(!n._initted&&Z0(n,u,r,a,T))return;for(y=n._zTime,n._zTime=u||(a?qt:0),a||(a=u&&!y),n.ratio=c,n._from&&(c=1-c),n._time=0,n._tTime=T,m=n._pt;m;)m.r(c,m.d),m=m._next;u<0&&Ef(n,u,a,!0),n._onUpdate&&!a&&Ze(n,"onUpdate"),T&&n._repeat&&!a&&n.parent&&Ze(n,"onRepeat"),(u>=n._tDur||u<0)&&n.ratio===c&&(c&&v_(n,1),!a&&!ge&&(Ze(n,c?"onComplete":"onReverseComplete",!0),n._prom&&n._prom()))}else n._zTime||(n._zTime=u)},bg=function(n,u,a){var r;if(a>u)for(r=n._first;r&&r._start<=a;){if(r.data==="isPause"&&r._start>u)return r;r=r._next}else for(r=n._last;r&&r._start>=a;){if(r.data==="isPause"&&r._start<u)return r;r=r._prev}},kn=function(n,u,a,r){var f=n._repeat,c=ie(u)||0,d=n._tTime/n._tDur;return d&&!r&&(n._time*=c/n._dur),n._dur=c,n._tDur=f?f<0?1e10:ie(c*(f+1)+n._rDelay*f):c,d>0&&!r&&Vu(n,n._tTime=n._tDur*d),n.parent&&Yu(n),a||Z_(n.parent,n),n},_0=function(n){return n instanceof Le?Z_(n):kn(n,n._dur)},xg={_start:0,endTime:ni,totalDuration:ni},al=function o(n,u,a){var r=n.labels,f=n._recent||xg,c=n.duration()>=il?f.endTime(!1):n._dur,d,T,m;return he(u)&&(isNaN(u)||u in r)?(T=u.charAt(0),m=u.substr(-1)==="%",d=u.indexOf("="),T==="<"||T===">"?(d>=0&&(u=u.replace(/=/,"")),(T==="<"?f._start:f.endTime(f._repeat>=0))+(parseFloat(u.substr(1))||0)*(m?(d<0?f:a).totalDuration()/100:1)):d<0?(u in r||(r[u]=c),r[u]):(T=parseFloat(u.charAt(d-1)+u.substr(d+1)),m&&a&&(T=T/100*(Ee(a)?a[0]:a).totalDuration()),d>1?o(n,u.substr(0,d-1),a)+T:c+T)):u==null?c:+u},ei=function(n,u,a){var r=Gl(u[1]),f=(r?2:1)+(n<2?0:1),c=u[f],d,T;if(r&&(c.duration=u[1]),c.parent=a,n){for(d=c,T=a;T&&!("immediateRender"in d);)d=T.vars.defaults||{},T=Me(T.vars.inherit)&&T.parent;c.immediateRender=Me(d.immediateRender),n<2?c.runBackwards=1:c.startAt=u[f-1]}return new ae(u[0],c,u[f+1])},y_=function(n,u){return n||n===0?u(n):u},fi=function(n,u,a){return a<n?n:a>u?u:a},Ae=function(n,u){return!he(n)||!(u=mg.exec(n))?"":u[1]},Rg=function(n,u,a){return y_(a,function(r){return fi(n,u,r)})},Lf=[].slice,k0=function(n,u){return n&&Al(n)&&"length"in n&&(!u&&!n.length||n.length-1 in n&&Al(n[0]))&&!n.nodeType&&n!==vl},Ng=function(n,u,a){return a===void 0&&(a=[]),n.forEach(function(r){var f;return he(r)&&!u||k0(r,1)?(f=a).push.apply(f,ul(r)):a.push(r)})||a},ul=function(n,u,a){return Zt&&!u&&Zt.selector?Zt.selector(n):he(n)&&!a&&(yf||!$n())?Lf.call((u||wf).querySelectorAll(n),0):Ee(n)?Ng(n,a):k0(n)?Lf.call(n,0):n?[n]:[]},bf=function(n){return n=ul(n)[0]||_i("Invalid scope")||{},function(u){var a=n.current||n.nativeElement||n;return ul(u,a.querySelectorAll?a:a===n?_i("Invalid scope")||wf.createElement("div"):n)}},$0=function(n){return n.sort(function(){return .5-Math.random()})},K0=function(n){if(Pt(n))return n;var u=Al(n)?n:{each:n},a=k_(u.ease),r=u.from||0,f=parseFloat(u.base)||0,c={},d=r>0&&r<1,T=isNaN(r)||d,m=u.axis,g=r,y=r;return he(r)?g=y={center:.5,edges:.5,end:1}[r]||0:!d&&T&&(g=r[0],y=r[1]),function(x,M,H){var S=(H||u).length,G=c[S],k,Z,$,K,q,et,lt,_t,W;if(!G){if(W=u.grid==="auto"?0:(u.grid||[1,il])[1],!W){for(lt=-il;lt<(lt=H[W++].getBoundingClientRect().left)&&W<S;);W<S&&W--}for(G=c[S]=[],k=T?Math.min(W,S)*g-.5:r%W,Z=W===il?0:T?S*y/W-.5:r/W|0,lt=0,_t=il,et=0;et<S;et++)$=et%W-k,K=Z-(et/W|0),G[et]=q=m?Math.abs(m==="y"?K:$):M0($*$+K*K),q>lt&&(lt=q),q<_t&&(_t=q);r==="random"&&$0(G),G.max=lt-_t,G.min=_t,G.v=S=(parseFloat(u.amount)||parseFloat(u.each)*(W>S?S-1:m?m==="y"?S/W:W:Math.max(W,S/W))||0)*(r==="edges"?-1:1),G.b=S<0?f-S:f,G.u=Ae(u.amount||u.each)||0,a=a&&S<0?a1(a):a}return S=(G[x]-G.min)/G.max||0,ie(G.b+(a?a(S):S)*G.v)+G.u}},xf=function(n){var u=Math.pow(10,((n+"").split(".")[1]||"").length);return function(a){var r=ie(Math.round(parseFloat(a)/n)*n*u);return(r-r%1)/u+(Gl(a)?0:Ae(a))}},W0=function(n,u){var a=Ee(n),r,f;return!a&&Al(n)&&(r=a=n.radius||il,n.values?(n=ul(n.values),(f=!Gl(n[0]))&&(r*=r)):n=xf(n.increment)),y_(u,a?Pt(n)?function(c){return f=n(c),Math.abs(f-c)<=r?f:c}:function(c){for(var d=parseFloat(f?c.x:c),T=parseFloat(f?c.y:0),m=il,g=0,y=n.length,x,M;y--;)f?(x=n[y].x-d,M=n[y].y-T,x=x*x+M*M):x=Math.abs(n[y]-d),x<m&&(m=x,g=y);return g=!r||m<=r?n[g]:c,f||g===c||Gl(c)?g:g+Ae(c)}:xf(n))},J0=function(n,u,a,r){return y_(Ee(n)?!u:a===!0?!!(a=0):!r,function(){return Ee(n)?n[~~(Math.random()*n.length)]:(a=a||1e-5)&&(r=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((n-a/2+Math.random()*(u-n+a*.99))/a)*a*r)/r})},Og=function(){for(var n=arguments.length,u=new Array(n),a=0;a<n;a++)u[a]=arguments[a];return function(r){return u.reduce(function(f,c){return c(f)},r)}},Mg=function(n,u){return function(a){return n(parseFloat(a))+(u||Ae(a))}},Cg=function(n,u,a){return P0(n,u,0,1,a)},F0=function(n,u,a){return y_(a,function(r){return n[~~u(r)]})},Dg=function o(n,u,a){var r=u-n;return Ee(n)?F0(n,o(0,n.length),u):y_(a,function(f){return(r+(f-n)%r)%r+n})},zg=function o(n,u,a){var r=u-n,f=r*2;return Ee(n)?F0(n,o(0,n.length-1),u):y_(a,function(c){return c=(f+(c-n)%f)%f||0,n+(c>r?f-c:c)})},ai=function(n){for(var u=0,a="",r,f,c,d;~(r=n.indexOf("random(",u));)c=n.indexOf(")",r),d=n.charAt(r+7)==="[",f=n.substr(r+7,c-r-7).match(d?H0:pf),a+=n.substr(u,r-u)+J0(d?f:+f[0],d?0:+f[1],+f[2]||1e-5),u=c+1;return a+n.substr(u,n.length-u)},P0=function(n,u,a,r,f){var c=u-n,d=r-a;return y_(f,function(T){return a+((T-n)/c*d||0)})},Hg=function o(n,u,a,r){var f=isNaN(n+u)?0:function(M){return(1-M)*n+M*u};if(!f){var c=he(n),d={},T,m,g,y,x;if(a===!0&&(r=1)&&(a=null),c)n={p:n},u={p:u};else if(Ee(n)&&!Ee(u)){for(g=[],y=n.length,x=y-2,m=1;m<y;m++)g.push(o(n[m-1],n[m]));y--,f=function(H){H*=y;var S=Math.min(x,~~H);return g[S](H-S)},a=u}else r||(n=Qn(Ee(n)?[]:{},n));if(!g){for(T in u)Vf.call(d,n,T,"get",u[T]);f=function(H){return kf(H,d)||(c?n.p:n)}}}return y_(a,f)},n0=function(n,u,a){var r=n.labels,f=il,c,d,T;for(c in r)d=r[c]-u,d<0==!!a&&d&&f>(d=Math.abs(d))&&(T=c,f=d);return T},Ze=function(n,u,a){var r=n.vars,f=r[u],c=Zt,d=n._ctx,T,m,g;if(f)return T=r[u+"Params"],m=r.callbackScope||n,a&&T_.length&&Uu(),d&&(Zt=d),g=T?f.apply(m,T):f.call(m),Zt=c,g},Fa=function(n){return v_(n),n.scrollTrigger&&n.scrollTrigger.kill(!!ge),n.progress()<1&&Ze(n,"onInterrupt"),n},Gn,t1=[],e1=function(n){if(n)if(n=!n.name&&n.default||n,jf()||n.headless){var u=n.name,a=Pt(n),r=u&&!a&&n.init?function(){this._props=[]}:n,f={init:ni,render:kf,add:Vf,kill:Wg,modifier:Kg,rawVars:0},c={targetTest:0,get:0,getSetter:Zf,aliases:{},register:0};if($n(),n!==r){if(Xe[u])return;Ke(r,Ke(ju(n,f),c)),Qn(r.prototype,Qn(f,ju(n,c))),Xe[r.prop=u]=r,n.targetTest&&(Ou.push(r),Bf[u]=1),u=(u==="css"?"CSS":u.charAt(0).toUpperCase()+u.substr(1))+"Plugin"}w0(u,r),n.register&&n.register(He,r,De)}else t1.push(n)},Gt=255,Pa={aqua:[0,Gt,Gt],lime:[0,Gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Gt],navy:[0,0,128],white:[Gt,Gt,Gt],olive:[128,128,0],yellow:[Gt,Gt,0],orange:[Gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Gt,0,0],pink:[Gt,192,203],cyan:[0,Gt,Gt],transparent:[Gt,Gt,Gt,0]},cf=function(n,u,a){return n+=n<0?1:n>1?-1:0,(n*6<1?u+(a-u)*n*6:n<.5?a:n*3<2?u+(a-u)*(2/3-n)*6:u)*Gt+.5|0},l1=function(n,u,a){var r=n?Gl(n)?[n>>16,n>>8&Gt,n&Gt]:0:Pa.black,f,c,d,T,m,g,y,x,M,H;if(!r){if(n.substr(-1)===","&&(n=n.substr(0,n.length-1)),Pa[n])r=Pa[n];else if(n.charAt(0)==="#"){if(n.length<6&&(f=n.charAt(1),c=n.charAt(2),d=n.charAt(3),n="#"+f+f+c+c+d+d+(n.length===5?n.charAt(4)+n.charAt(4):"")),n.length===9)return r=parseInt(n.substr(1,6),16),[r>>16,r>>8&Gt,r&Gt,parseInt(n.substr(7),16)/255];n=parseInt(n.substr(1),16),r=[n>>16,n>>8&Gt,n&Gt]}else if(n.substr(0,3)==="hsl"){if(r=H=n.match(pf),!u)T=+r[0]%360/360,m=+r[1]/100,g=+r[2]/100,c=g<=.5?g*(m+1):g+m-g*m,f=g*2-c,r.length>3&&(r[3]*=1),r[0]=cf(T+1/3,f,c),r[1]=cf(T,f,c),r[2]=cf(T-1/3,f,c);else if(~n.indexOf("="))return r=n.match(D0),a&&r.length<4&&(r[3]=1),r}else r=n.match(pf)||Pa.transparent;r=r.map(Number)}return u&&!H&&(f=r[0]/Gt,c=r[1]/Gt,d=r[2]/Gt,y=Math.max(f,c,d),x=Math.min(f,c,d),g=(y+x)/2,y===x?T=m=0:(M=y-x,m=g>.5?M/(2-y-x):M/(y+x),T=y===f?(c-d)/M+(c<d?6:0):y===c?(d-f)/M+2:(f-c)/M+4,T*=60),r[0]=~~(T+.5),r[1]=~~(m*100+.5),r[2]=~~(g*100+.5)),a&&r.length<4&&(r[3]=1),r},_1=function(n){var u=[],a=[],r=-1;return n.split(g_).forEach(function(f){var c=f.match(Bn)||[];u.push.apply(u,c),a.push(r+=c.length+1)}),u.c=a,u},a0=function(n,u,a){var r="",f=(n+r).match(g_),c=u?"hsla(":"rgba(",d=0,T,m,g,y;if(!f)return n;if(f=f.map(function(x){return(x=l1(x,u,1))&&c+(u?x[0]+","+x[1]+"%,"+x[2]+"%,"+x[3]:x.join(","))+")"}),a&&(g=_1(n),T=a.c,T.join(r)!==g.c.join(r)))for(m=n.replace(g_,"1").split(Bn),y=m.length-1;d<y;d++)r+=m[d]+(~T.indexOf(d)?f.shift()||c+"0,0,0,0)":(g.length?g:f.length?f:a).shift());if(!m)for(m=n.split(g_),y=m.length-1;d<y;d++)r+=m[d]+f[d];return r+m[y]},g_=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",n;for(n in Pa)o+="|"+n+"\\b";return new RegExp(o+")","gi")})(),Ug=/hsl[a]?\(/,n1=function(n){var u=n.join(" "),a;if(g_.lastIndex=0,g_.test(u))return a=Ug.test(u),n[1]=a0(n[1],a),n[0]=a0(n[0],a,_1(n[1])),!0},ii,Qe=(function(){var o=Date.now,n=500,u=33,a=o(),r=a,f=1e3/240,c=f,d=[],T,m,g,y,x,M,H=function S(G){var k=o()-r,Z=G===!0,$,K,q,et;if((k>n||k<0)&&(a+=k-u),r+=k,q=r-a,$=q-c,($>0||Z)&&(et=++y.frame,x=q-y.time*1e3,y.time=q=q/1e3,c+=$+($>=f?4:f-$),K=1),Z||(T=m(S)),K)for(M=0;M<d.length;M++)d[M](q,x,et,G)};return y={time:0,frame:0,tick:function(){H(!0)},deltaRatio:function(G){return x/(1e3/(G||60))},wake:function(){U0&&(!yf&&jf()&&(vl=yf=window,wf=vl.document||{},$e.gsap=He,(vl.gsapVersions||(vl.gsapVersions=[])).push(He.version),j0(Hu||vl.GreenSockGlobals||!vl.gsap&&vl||{}),t1.forEach(e1)),g=typeof requestAnimationFrame<"u"&&requestAnimationFrame,T&&y.sleep(),m=g||function(G){return setTimeout(G,c-y.time*1e3+1|0)},ii=1,H(2))},sleep:function(){(g?cancelAnimationFrame:clearTimeout)(T),ii=0,m=ni},lagSmoothing:function(G,k){n=G||1/0,u=Math.min(k||33,n)},fps:function(G){f=1e3/(G||240),c=y.time*1e3+f},add:function(G,k,Z){var $=k?function(K,q,et,lt){G(K,q,et,lt),y.remove($)}:G;return y.remove(G),d[Z?"unshift":"push"]($),$n(),$},remove:function(G,k){~(k=d.indexOf(G))&&d.splice(k,1)&&M>=k&&M--},_listeners:d},y})(),$n=function(){return!ii&&Qe.wake()},Et={},jg=/^[\d.\-M][\d.\-,\s]/,wg=/["']/g,Ig=function(n){for(var u={},a=n.substr(1,n.length-3).split(":"),r=a[0],f=1,c=a.length,d,T,m;f<c;f++)T=a[f],d=f!==c-1?T.lastIndexOf(","):T.length,m=T.substr(0,d),u[r]=isNaN(m)?m.replace(wg,"").trim():+m,r=T.substr(d+1).trim();return u},Bg=function(n){var u=n.indexOf("(")+1,a=n.indexOf(")"),r=n.indexOf("(",u);return n.substring(u,~r&&r<a?n.indexOf(")",a+1):a)},Gg=function(n){var u=(n+"").split("("),a=Et[u[0]];return a&&u.length>1&&a.config?a.config.apply(null,~n.indexOf("{")?[Ig(u[1])]:Bg(n).split(",").map(q0)):Et._CE&&jg.test(n)?Et._CE("",n):a},a1=function(n){return function(u){return 1-n(1-u)}},i1=function o(n,u){for(var a=n._first,r;a;)a instanceof Le?o(a,u):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==u&&(a.timeline?o(a.timeline,u):(r=a._ease,a._ease=a._yEase,a._yEase=r,a._yoyo=u)),a=a._next},k_=function(n,u){return n&&(Pt(n)?n:Et[n]||Gg(n))||u},W_=function(n,u,a,r){a===void 0&&(a=function(T){return 1-u(1-T)}),r===void 0&&(r=function(T){return T<.5?u(T*2)/2:1-u((1-T)*2)/2});var f={easeIn:u,easeOut:a,easeInOut:r},c;return Ce(n,function(d){Et[d]=$e[d]=f,Et[c=d.toLowerCase()]=a;for(var T in f)Et[c+(T==="easeIn"?".in":T==="easeOut"?".out":".inOut")]=Et[d+"."+T]=f[T]}),f},u1=function(n){return function(u){return u<.5?(1-n(1-u*2))/2:.5+n((u-.5)*2)/2}},of=function o(n,u,a){var r=u>=1?u:1,f=(a||(n?.3:.45))/(u<1?u:1),c=f/vf*(Math.asin(1/r)||0),d=function(g){return g===1?1:r*Math.pow(2,-10*g)*dg((g-c)*f)+1},T=n==="out"?d:n==="in"?function(m){return 1-d(1-m)}:u1(d);return f=vf/f,T.config=function(m,g){return o(n,m,g)},T},hf=function o(n,u){u===void 0&&(u=1.70158);var a=function(c){return c?--c*c*((u+1)*c+u)+1:0},r=n==="out"?a:n==="in"?function(f){return 1-a(1-f)}:u1(a);return r.config=function(f){return o(n,f)},r};Ce("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,n){var u=n<5?n+1:n;W_(o+",Power"+(u-1),n?function(a){return Math.pow(a,u)}:function(a){return a},function(a){return 1-Math.pow(1-a,u)},function(a){return a<.5?Math.pow(a*2,u)/2:1-Math.pow((1-a)*2,u)/2})});Et.Linear.easeNone=Et.none=Et.Linear.easeIn;W_("Elastic",of("in"),of("out"),of());(function(o,n){var u=1/n,a=2*u,r=2.5*u,f=function(d){return d<u?o*d*d:d<a?o*Math.pow(d-1.5/n,2)+.75:d<r?o*(d-=2.25/n)*d+.9375:o*Math.pow(d-2.625/n,2)+.984375};W_("Bounce",function(c){return 1-f(1-c)},f)})(7.5625,2.75);W_("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});W_("Circ",function(o){return-(M0(1-o*o)-1)});W_("Sine",function(o){return o===1?1:-hg(o*cg)+1});W_("Back",hf("in"),hf("out"),hf());Et.SteppedEase=Et.steps=$e.SteppedEase={config:function(n,u){n===void 0&&(n=1);var a=1/n,r=n+(u?0:1),f=u?1:0,c=1-qt;return function(d){return((r*fi(0,c,d)|0)+f)*a}}};Xn.ease=Et["quad.out"];Ce("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Gf+=o+","+o+"Params,"});var r1=function(n,u){this.id=og++,n._gsap=this,this.target=n,this.harness=u,this.get=u?u.get:B0,this.set=u?u.getSetter:Zf},ui=(function(){function o(u){this.vars=u,this._delay=+u.delay||0,(this._repeat=u.repeat===1/0?-2:u.repeat||0)&&(this._rDelay=u.repeatDelay||0,this._yoyo=!!u.yoyo||!!u.yoyoEase),this._ts=1,kn(this,+u.duration,1,1),this.data=u.data,Zt&&(this._ctx=Zt,Zt.data.push(this)),ii||Qe.wake()}var n=o.prototype;return n.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},n.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},n.totalDuration=function(a){return arguments.length?(this._dirty=0,kn(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},n.totalTime=function(a,r){if($n(),!arguments.length)return this._tTime;var f=this._dp;if(f&&f.smoothChildTiming&&this._ts){for(Vu(this,a),!f._dp||f.parent||X0(f,this);f&&f.parent;)f.parent._time!==f._start+(f._ts>=0?f._tTime/f._ts:(f.totalDuration()-f._tTime)/-f._ts)&&f.totalTime(f._tTime,!0),f=f.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&pl(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===qt||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),G0(this,a,r)),this},n.time=function(a,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+l0(this))%(this._dur+this._rDelay)||(a?this._dur:0),r):this._time},n.totalProgress=function(a,r){return arguments.length?this.totalTime(this.totalDuration()*a,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},n.progress=function(a,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+l0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},n.iteration=function(a,r){var f=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*f,r):this._repeat?Zn(this._tTime,f)+1:1},n.timeScale=function(a,r){if(!arguments.length)return this._rts===-qt?0:this._rts;if(this._rts===a)return this;var f=this.parent&&this._ts?wu(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-qt?0:this._rts,this.totalTime(fi(-Math.abs(this._delay),this.totalDuration(),f),r!==!1),Yu(this),Ag(this)},n.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($n(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qt&&(this._tTime-=qt)))),this):this._ps},n.startTime=function(a){if(arguments.length){this._start=a;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&pl(r,this,a-this._delay),this}return this._start},n.endTime=function(a){return this._start+(Me(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},n.rawTime=function(a){var r=this.parent||this._dp;return r?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wu(r.rawTime(a),this):this._tTime:this._tTime},n.revert=function(a){a===void 0&&(a=gg);var r=ge;return ge=a,Yf(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),ge=r,this},n.globalTime=function(a){for(var r=this,f=arguments.length?a:r.rawTime();r;)f=r._start+f/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(a):f},n.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,_0(this)):this._repeat===-2?1/0:this._repeat},n.repeatDelay=function(a){if(arguments.length){var r=this._time;return this._rDelay=a,_0(this),r?this.time(r):this}return this._rDelay},n.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},n.seek=function(a,r){return this.totalTime(al(this,a),Me(r))},n.restart=function(a,r){return this.play().totalTime(a?-this._delay:0,Me(r)),this._dur||(this._zTime=-qt),this},n.play=function(a,r){return a!=null&&this.seek(a,r),this.reversed(!1).paused(!1)},n.reverse=function(a,r){return a!=null&&this.seek(a||this.totalDuration(),r),this.reversed(!0).paused(!1)},n.pause=function(a,r){return a!=null&&this.seek(a,r),this.paused(!0)},n.resume=function(){return this.paused(!1)},n.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-qt:0)),this):this._rts<0},n.invalidate=function(){return this._initted=this._act=0,this._zTime=-qt,this},n.isActive=function(){var a=this.parent||this._dp,r=this._start,f;return!!(!a||this._ts&&this._initted&&a.isActive()&&(f=a.rawTime(!0))>=r&&f<this.endTime(!0)-qt)},n.eventCallback=function(a,r,f){var c=this.vars;return arguments.length>1?(r?(c[a]=r,f&&(c[a+"Params"]=f),a==="onUpdate"&&(this._onUpdate=r)):delete c[a],this):c[a]},n.then=function(a){var r=this;return new Promise(function(f){var c=Pt(a)?a:Y0,d=function(){var m=r.then;r.then=null,Pt(c)&&(c=c(r))&&(c.then||c===r)&&(r.then=m),f(c),r.then=m};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?d():r._prom=d})},n.kill=function(){Fa(this)},o})();Ke(ui.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-qt,_prom:0,_ps:!1,_rts:1});var Le=(function(o){O0(n,o);function n(a,r){var f;return a===void 0&&(a={}),f=o.call(this,a)||this,f.labels={},f.smoothChildTiming=!!a.smoothChildTiming,f.autoRemoveChildren=!!a.autoRemoveChildren,f._sort=Me(a.sortChildren),$t&&pl(a.parent||$t,Il(f),r),a.reversed&&f.reverse(),a.paused&&f.paused(!0),a.scrollTrigger&&Q0(Il(f),a.scrollTrigger),f}var u=n.prototype;return u.to=function(r,f,c){return ei(0,arguments,this),this},u.from=function(r,f,c){return ei(1,arguments,this),this},u.fromTo=function(r,f,c,d){return ei(2,arguments,this),this},u.set=function(r,f,c){return f.duration=0,f.parent=this,ti(f).repeatDelay||(f.repeat=0),f.immediateRender=!!f.immediateRender,new ae(r,f,al(this,c),1),this},u.call=function(r,f,c){return pl(this,ae.delayedCall(0,r,f),c)},u.staggerTo=function(r,f,c,d,T,m,g){return c.duration=f,c.stagger=c.stagger||d,c.onComplete=m,c.onCompleteParams=g,c.parent=this,new ae(r,c,al(this,T)),this},u.staggerFrom=function(r,f,c,d,T,m,g){return c.runBackwards=1,ti(c).immediateRender=Me(c.immediateRender),this.staggerTo(r,f,c,d,T,m,g)},u.staggerFromTo=function(r,f,c,d,T,m,g,y){return d.startAt=c,ti(d).immediateRender=Me(d.immediateRender),this.staggerTo(r,f,d,T,m,g,y)},u.render=function(r,f,c){var d=this._time,T=this._dirty?this.totalDuration():this._tDur,m=this._dur,g=r<=0?0:ie(r),y=this._zTime<0!=r<0&&(this._initted||!m),x,M,H,S,G,k,Z,$,K,q,et,lt;if(this!==$t&&g>T&&r>=0&&(g=T),g!==this._tTime||c||y){if(d!==this._time&&m&&(g+=this._time-d,r+=this._time-d),x=g,K=this._start,$=this._ts,k=!$,y&&(m||(d=this._zTime),(r||!f)&&(this._zTime=r)),this._repeat){if(et=this._yoyo,G=m+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(G*100+r,f,c);if(x=ie(g%G),g===T?(S=this._repeat,x=m):(q=ie(g/G),S=~~q,S&&S===q&&(x=m,S--),x>m&&(x=m)),q=Zn(this._tTime,G),!d&&this._tTime&&q!==S&&this._tTime-q*G-this._dur<=0&&(q=S),et&&S&1&&(x=m-x,lt=1),S!==q&&!this._lock){var _t=et&&q&1,W=_t===(et&&S&1);if(S<q&&(_t=!_t),d=_t?0:g%m?m:g,this._lock=1,this.render(d||(lt?0:ie(S*G)),f,!m)._lock=0,this._tTime=g,!f&&this.parent&&Ze(this,"onRepeat"),this.vars.repeatRefresh&&!lt&&(this.invalidate()._lock=1),d&&d!==this._time||k!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(m=this._dur,T=this._tDur,W&&(this._lock=2,d=_t?m:-1e-4,this.render(d,!0),this.vars.repeatRefresh&&!lt&&this.invalidate()),this._lock=0,!this._ts&&!k)return this;i1(this,lt)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(Z=bg(this,ie(d),ie(x)),Z&&(g-=x-(x=Z._start))),this._tTime=g,this._time=x,this._act=!$,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,d=0),!d&&g&&!f&&!q&&(Ze(this,"onStart"),this._tTime!==g))return this;if(x>=d&&r>=0)for(M=this._first;M;){if(H=M._next,(M._act||x>=M._start)&&M._ts&&Z!==M){if(M.parent!==this)return this.render(r,f,c);if(M.render(M._ts>0?(x-M._start)*M._ts:(M._dirty?M.totalDuration():M._tDur)+(x-M._start)*M._ts,f,c),x!==this._time||!this._ts&&!k){Z=0,H&&(g+=this._zTime=-qt);break}}M=H}else{M=this._last;for(var mt=r<0?r:x;M;){if(H=M._prev,(M._act||mt<=M._end)&&M._ts&&Z!==M){if(M.parent!==this)return this.render(r,f,c);if(M.render(M._ts>0?(mt-M._start)*M._ts:(M._dirty?M.totalDuration():M._tDur)+(mt-M._start)*M._ts,f,c||ge&&Yf(M)),x!==this._time||!this._ts&&!k){Z=0,H&&(g+=this._zTime=mt?-qt:qt);break}}M=H}}if(Z&&!f&&(this.pause(),Z.render(x>=d?0:-qt)._zTime=x>=d?1:-1,this._ts))return this._start=K,Yu(this),this.render(r,f,c);this._onUpdate&&!f&&Ze(this,"onUpdate",!0),(g===T&&this._tTime>=this.totalDuration()||!g&&d)&&(K===this._start||Math.abs($)!==Math.abs(this._ts))&&(this._lock||((r||!m)&&(g===T&&this._ts>0||!g&&this._ts<0)&&v_(this,1),!f&&!(r<0&&!d)&&(g||d||!T)&&(Ze(this,g===T&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(g<T&&this.timeScale()>0)&&this._prom())))}return this},u.add=function(r,f){var c=this;if(Gl(f)||(f=al(this,f,r)),!(r instanceof ui)){if(Ee(r))return r.forEach(function(d){return c.add(d,f)}),this;if(he(r))return this.addLabel(r,f);if(Pt(r))r=ae.delayedCall(0,r);else return this}return this!==r?pl(this,r,f):this},u.getChildren=function(r,f,c,d){r===void 0&&(r=!0),f===void 0&&(f=!0),c===void 0&&(c=!0),d===void 0&&(d=-il);for(var T=[],m=this._first;m;)m._start>=d&&(m instanceof ae?f&&T.push(m):(c&&T.push(m),r&&T.push.apply(T,m.getChildren(!0,f,c)))),m=m._next;return T},u.getById=function(r){for(var f=this.getChildren(1,1,1),c=f.length;c--;)if(f[c].vars.id===r)return f[c]},u.remove=function(r){return he(r)?this.removeLabel(r):Pt(r)?this.killTweensOf(r):(r.parent===this&&qu(this,r),r===this._recent&&(this._recent=this._last),Z_(this))},u.totalTime=function(r,f){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ie(Qe.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,f),this._forcing=0,this):this._tTime},u.addLabel=function(r,f){return this.labels[r]=al(this,f),this},u.removeLabel=function(r){return delete this.labels[r],this},u.addPause=function(r,f,c){var d=ae.delayedCall(0,f||ni,c);return d.data="isPause",this._hasPause=1,pl(this,d,al(this,r))},u.removePause=function(r){var f=this._first;for(r=al(this,r);f;)f._start===r&&f.data==="isPause"&&v_(f),f=f._next},u.killTweensOf=function(r,f,c){for(var d=this.getTweensOf(r,c),T=d.length;T--;)h_!==d[T]&&d[T].kill(r,f);return this},u.getTweensOf=function(r,f){for(var c=[],d=ul(r),T=this._first,m=Gl(f),g;T;)T instanceof ae?vg(T._targets,d)&&(m?(!h_||T._initted&&T._ts)&&T.globalTime(0)<=f&&T.globalTime(T.totalDuration())>f:!f||T.isActive())&&c.push(T):(g=T.getTweensOf(d,f)).length&&c.push.apply(c,g),T=T._next;return c},u.tweenTo=function(r,f){f=f||{};var c=this,d=al(c,r),T=f,m=T.startAt,g=T.onStart,y=T.onStartParams,x=T.immediateRender,M,H=ae.to(c,Ke({ease:f.ease||"none",lazy:!1,immediateRender:!1,time:d,overwrite:"auto",duration:f.duration||Math.abs((d-(m&&"time"in m?m.time:c._time))/c.timeScale())||qt,onStart:function(){if(c.pause(),!M){var G=f.duration||Math.abs((d-(m&&"time"in m?m.time:c._time))/c.timeScale());H._dur!==G&&kn(H,G,0,1).render(H._time,!0,!0),M=1}g&&g.apply(H,y||[])}},f));return x?H.render(0):H},u.tweenFromTo=function(r,f,c){return this.tweenTo(f,Ke({startAt:{time:al(this,r)}},c))},u.recent=function(){return this._recent},u.nextLabel=function(r){return r===void 0&&(r=this._time),n0(this,al(this,r))},u.previousLabel=function(r){return r===void 0&&(r=this._time),n0(this,al(this,r),1)},u.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+qt)},u.shiftChildren=function(r,f,c){c===void 0&&(c=0);for(var d=this._first,T=this.labels,m;d;)d._start>=c&&(d._start+=r,d._end+=r),d=d._next;if(f)for(m in T)T[m]>=c&&(T[m]+=r);return Z_(this)},u.invalidate=function(r){var f=this._first;for(this._lock=0;f;)f.invalidate(r),f=f._next;return o.prototype.invalidate.call(this,r)},u.clear=function(r){r===void 0&&(r=!0);for(var f=this._first,c;f;)c=f._next,this.remove(f),f=c;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Z_(this)},u.totalDuration=function(r){var f=0,c=this,d=c._last,T=il,m,g,y;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-r:r));if(c._dirty){for(y=c.parent;d;)m=d._prev,d._dirty&&d.totalDuration(),g=d._start,g>T&&c._sort&&d._ts&&!c._lock?(c._lock=1,pl(c,d,g-d._delay,1)._lock=0):T=g,g<0&&d._ts&&(f-=g,(!y&&!c._dp||y&&y.smoothChildTiming)&&(c._start+=g/c._ts,c._time-=g,c._tTime-=g),c.shiftChildren(-g,!1,-1/0),T=0),d._end>f&&d._ts&&(f=d._end),d=m;kn(c,c===$t&&c._time>f?c._time:f,1,1),c._dirty=0}return c._tDur},n.updateRoot=function(r){if($t._ts&&(G0($t,wu(r,$t)),I0=Qe.frame),Qe.frame>=t0){t0+=ke.autoSleep||120;var f=$t._first;if((!f||!f._ts)&&ke.autoSleep&&Qe._listeners.length<2){for(;f&&!f._ts;)f=f._next;f||Qe.sleep()}}},n})(ui);Ke(Le.prototype,{_lock:0,_hasPause:0,_forcing:0});var qg=function(n,u,a,r,f,c,d){var T=new De(this._pt,n,u,0,1,d1,null,f),m=0,g=0,y,x,M,H,S,G,k,Z;for(T.b=a,T.e=r,a+="",r+="",(k=~r.indexOf("random("))&&(r=ai(r)),c&&(Z=[a,r],c(Z,n,u),a=Z[0],r=Z[1]),x=a.match(sf)||[];y=sf.exec(r);)H=y[0],S=r.substring(m,y.index),M?M=(M+1)%5:S.substr(-5)==="rgba("&&(M=1),H!==x[g++]&&(G=parseFloat(x[g-1])||0,T._pt={_next:T._pt,p:S||g===1?S:",",s:G,c:H.charAt(1)==="="?qn(G,H)-G:parseFloat(H)-G,m:M&&M<4?Math.round:0},m=sf.lastIndex);return T.c=m<r.length?r.substring(m,r.length):"",T.fp=d,(z0.test(r)||k)&&(T.e=0),this._pt=T,T},Vf=function(n,u,a,r,f,c,d,T,m,g){Pt(r)&&(r=r(f||0,n,c));var y=n[u],x=a!=="get"?a:Pt(y)?m?n[u.indexOf("set")||!Pt(n["get"+u.substr(3)])?u:"get"+u.substr(3)](m):n[u]():y,M=Pt(y)?m?Zg:o1:Qf,H;if(he(r)&&(~r.indexOf("random(")&&(r=ai(r)),r.charAt(1)==="="&&(H=qn(x,r)+(Ae(x)||0),(H||H===0)&&(r=H))),!g||x!==r||Rf)return!isNaN(x*r)&&r!==""?(H=new De(this._pt,n,u,+x||0,r-(x||0),typeof y=="boolean"?$g:h1,0,M),m&&(H.fp=m),d&&H.modifier(d,this,n),this._pt=H):(!y&&!(u in n)&&If(u,r),qg.call(this,n,u,x,r,M,T||ke.stringFilter,m))},Yg=function(n,u,a,r,f){if(Pt(n)&&(n=li(n,f,u,a,r)),!Al(n)||n.style&&n.nodeType||Ee(n)||C0(n))return he(n)?li(n,f,u,a,r):n;var c={},d;for(d in n)c[d]=li(n[d],f,u,a,r);return c},s1=function(n,u,a,r,f,c){var d,T,m,g;if(Xe[n]&&(d=new Xe[n]).init(f,d.rawVars?u[n]:Yg(u[n],r,f,c,a),a,r,c)!==!1&&(a._pt=T=new De(a._pt,f,n,0,1,d.render,d,0,d.priority),a!==Gn))for(m=a._ptLookup[a._targets.indexOf(f)],g=d._props.length;g--;)m[d._props[g]]=T;return d},h_,Rf,Xf=function o(n,u,a){var r=n.vars,f=r.ease,c=r.startAt,d=r.immediateRender,T=r.lazy,m=r.onUpdate,g=r.runBackwards,y=r.yoyoEase,x=r.keyframes,M=r.autoRevert,H=n._dur,S=n._startAt,G=n._targets,k=n.parent,Z=k&&k.data==="nested"?k.vars.targets:G,$=n._overwrite==="auto"&&!Hf,K=n.timeline,q,et,lt,_t,W,mt,At,ot,Tt,Rt,ht,I,J;if(K&&(!x||!f)&&(f="none"),n._ease=k_(f,Xn.ease),n._yEase=y?a1(k_(y===!0?f:y,Xn.ease)):0,y&&n._yoyo&&!n._repeat&&(y=n._yEase,n._yEase=n._ease,n._ease=y),n._from=!K&&!!r.runBackwards,!K||x&&!r.stagger){if(ot=G[0]?Q_(G[0]).harness:0,I=ot&&r[ot.prop],q=ju(r,Bf),S&&(S._zTime<0&&S.progress(1),u<0&&g&&d&&!M?S.render(-1,!0):S.revert(g&&H?Nu:Tg),S._lazy=0),c){if(v_(n._startAt=ae.set(G,Ke({data:"isStart",overwrite:!1,parent:k,immediateRender:!0,lazy:!S&&Me(T),startAt:null,delay:0,onUpdate:m&&function(){return Ze(n,"onUpdate")},stagger:0},c))),n._startAt._dp=0,n._startAt._sat=n,u<0&&(ge||!d&&!M)&&n._startAt.revert(Nu),d&&H&&u<=0&&a<=0){u&&(n._zTime=u);return}}else if(g&&H&&!S){if(u&&(d=!1),lt=Ke({overwrite:!1,data:"isFromStart",lazy:d&&!S&&Me(T),immediateRender:d,stagger:0,parent:k},q),I&&(lt[ot.prop]=I),v_(n._startAt=ae.set(G,lt)),n._startAt._dp=0,n._startAt._sat=n,u<0&&(ge?n._startAt.revert(Nu):n._startAt.render(-1,!0)),n._zTime=u,!d)o(n._startAt,qt,qt);else if(!u)return}for(n._pt=n._ptCache=0,T=H&&Me(T)||T&&!H,et=0;et<G.length;et++){if(W=G[et],At=W._gsap||qf(G)[et]._gsap,n._ptLookup[et]=Rt={},Af[At.id]&&T_.length&&Uu(),ht=Z===G?et:Z.indexOf(W),ot&&(Tt=new ot).init(W,I||q,n,ht,Z)!==!1&&(n._pt=_t=new De(n._pt,W,Tt.name,0,1,Tt.render,Tt,0,Tt.priority),Tt._props.forEach(function(it){Rt[it]=_t}),Tt.priority&&(mt=1)),!ot||I)for(lt in q)Xe[lt]&&(Tt=s1(lt,q,n,ht,W,Z))?Tt.priority&&(mt=1):Rt[lt]=_t=Vf.call(n,W,lt,"get",q[lt],ht,Z,0,r.stringFilter);n._op&&n._op[et]&&n.kill(W,n._op[et]),$&&n._pt&&(h_=n,$t.killTweensOf(W,Rt,n.globalTime(u)),J=!n.parent,h_=0),n._pt&&T&&(Af[At.id]=1)}mt&&m1(n),n._onInit&&n._onInit(n)}n._onUpdate=m,n._initted=(!n._op||n._pt)&&!J,x&&u<=0&&K.render(il,!0,!0)},Vg=function(n,u,a,r,f,c,d,T){var m=(n._pt&&n._ptCache||(n._ptCache={}))[u],g,y,x,M;if(!m)for(m=n._ptCache[u]=[],x=n._ptLookup,M=n._targets.length;M--;){if(g=x[M][u],g&&g.d&&g.d._pt)for(g=g.d._pt;g&&g.p!==u&&g.fp!==u;)g=g._next;if(!g)return Rf=1,n.vars[u]="+=0",Xf(n,d),Rf=0,T?_i(u+" not eligible for reset"):1;m.push(g)}for(M=m.length;M--;)y=m[M],g=y._pt||y,g.s=(r||r===0)&&!f?r:g.s+(r||0)+c*g.c,g.c=a-g.s,y.e&&(y.e=le(a)+Ae(y.e)),y.b&&(y.b=g.s+Ae(y.b))},Xg=function(n,u){var a=n[0]?Q_(n[0]).harness:0,r=a&&a.aliases,f,c,d,T;if(!r)return u;f=Qn({},u);for(c in r)if(c in f)for(T=r[c].split(","),d=T.length;d--;)f[T[d]]=f[c];return f},Qg=function(n,u,a,r){var f=u.ease||r||"power1.inOut",c,d;if(Ee(u))d=a[n]||(a[n]=[]),u.forEach(function(T,m){return d.push({t:m/(u.length-1)*100,v:T,e:f})});else for(c in u)d=a[c]||(a[c]=[]),c==="ease"||d.push({t:parseFloat(n),v:u[c],e:f})},li=function(n,u,a,r,f){return Pt(n)?n.call(u,a,r,f):he(n)&&~n.indexOf("random(")?ai(n):n},f1=Gf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",c1={};Ce(f1+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return c1[o]=1});var ae=(function(o){O0(n,o);function n(a,r,f,c){var d;typeof r=="number"&&(f.duration=r,r=f,f=null),d=o.call(this,c?r:ti(r))||this;var T=d.vars,m=T.duration,g=T.delay,y=T.immediateRender,x=T.stagger,M=T.overwrite,H=T.keyframes,S=T.defaults,G=T.scrollTrigger,k=T.yoyoEase,Z=r.parent||$t,$=(Ee(a)||C0(a)?Gl(a[0]):"length"in r)?[a]:ul(a),K,q,et,lt,_t,W,mt,At;if(d._targets=$.length?qf($):_i("GSAP target "+a+" not found. https://gsap.com",!ke.nullTargetWarn)||[],d._ptLookup=[],d._overwrite=M,H||x||bu(m)||bu(g)){if(r=d.vars,K=d.timeline=new Le({data:"nested",defaults:S||{},targets:Z&&Z.data==="nested"?Z.vars.targets:$}),K.kill(),K.parent=K._dp=Il(d),K._start=0,x||bu(m)||bu(g)){if(lt=$.length,mt=x&&K0(x),Al(x))for(_t in x)~f1.indexOf(_t)&&(At||(At={}),At[_t]=x[_t]);for(q=0;q<lt;q++)et=ju(r,c1),et.stagger=0,k&&(et.yoyoEase=k),At&&Qn(et,At),W=$[q],et.duration=+li(m,Il(d),q,W,$),et.delay=(+li(g,Il(d),q,W,$)||0)-d._delay,!x&&lt===1&&et.delay&&(d._delay=g=et.delay,d._start+=g,et.delay=0),K.to(W,et,mt?mt(q,W,$):0),K._ease=Et.none;K.duration()?m=g=0:d.timeline=0}else if(H){ti(Ke(K.vars.defaults,{ease:"none"})),K._ease=k_(H.ease||r.ease||"none");var ot=0,Tt,Rt,ht;if(Ee(H))H.forEach(function(I){return K.to($,I,">")}),K.duration();else{et={};for(_t in H)_t==="ease"||_t==="easeEach"||Qg(_t,H[_t],et,H.easeEach);for(_t in et)for(Tt=et[_t].sort(function(I,J){return I.t-J.t}),ot=0,q=0;q<Tt.length;q++)Rt=Tt[q],ht={ease:Rt.e,duration:(Rt.t-(q?Tt[q-1].t:0))/100*m},ht[_t]=Rt.v,K.to($,ht,ot),ot+=ht.duration;K.duration()<m&&K.to({},{duration:m-K.duration()})}}m||d.duration(m=K.duration())}else d.timeline=0;return M===!0&&!Hf&&(h_=Il(d),$t.killTweensOf($),h_=0),pl(Z,Il(d),f),r.reversed&&d.reverse(),r.paused&&d.paused(!0),(y||!m&&!H&&d._start===ie(Z._time)&&Me(y)&&Eg(Il(d))&&Z.data!=="nested")&&(d._tTime=-qt,d.render(Math.max(0,-g)||0)),G&&Q0(Il(d),G),d}var u=n.prototype;return u.render=function(r,f,c){var d=this._time,T=this._tDur,m=this._dur,g=r<0,y=r>T-qt&&!g?T:r<qt?0:r,x,M,H,S,G,k,Z,$,K;if(!m)Lg(this,r,f,c);else if(y!==this._tTime||!r||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==g||this._lazy){if(x=y,$=this.timeline,this._repeat){if(S=m+this._rDelay,this._repeat<-1&&g)return this.totalTime(S*100+r,f,c);if(x=ie(y%S),y===T?(H=this._repeat,x=m):(G=ie(y/S),H=~~G,H&&H===G?(x=m,H--):x>m&&(x=m)),k=this._yoyo&&H&1,k&&(K=this._yEase,x=m-x),G=Zn(this._tTime,S),x===d&&!c&&this._initted&&H===G)return this._tTime=y,this;H!==G&&($&&this._yEase&&i1($,k),this.vars.repeatRefresh&&!k&&!this._lock&&x!==S&&this._initted&&(this._lock=c=1,this.render(ie(S*H),!0).invalidate()._lock=0))}if(!this._initted){if(Z0(this,g?r:x,c,f,y))return this._tTime=0,this;if(d!==this._time&&!(c&&this.vars.repeatRefresh&&H!==G))return this;if(m!==this._dur)return this.render(r,f,c)}if(this._tTime=y,this._time=x,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=Z=(K||this._ease)(x/m),this._from&&(this.ratio=Z=1-Z),!d&&y&&!f&&!G&&(Ze(this,"onStart"),this._tTime!==y))return this;for(M=this._pt;M;)M.r(Z,M.d),M=M._next;$&&$.render(r<0?r:$._dur*$._ease(x/this._dur),f,c)||this._startAt&&(this._zTime=r),this._onUpdate&&!f&&(g&&Ef(this,r,f,c),Ze(this,"onUpdate")),this._repeat&&H!==G&&this.vars.onRepeat&&!f&&this.parent&&Ze(this,"onRepeat"),(y===this._tDur||!y)&&this._tTime===y&&(g&&!this._onUpdate&&Ef(this,r,!0,!0),(r||!m)&&(y===this._tDur&&this._ts>0||!y&&this._ts<0)&&v_(this,1),!f&&!(g&&!d)&&(y||d||k)&&(Ze(this,y===T?"onComplete":"onReverseComplete",!0),this._prom&&!(y<T&&this.timeScale()>0)&&this._prom()))}return this},u.targets=function(){return this._targets},u.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},u.resetTo=function(r,f,c,d,T){ii||Qe.wake(),this._ts||this.play();var m=Math.min(this._dur,(this._dp._time-this._start)*this._ts),g;return this._initted||Xf(this,m),g=this._ease(m/this._dur),Vg(this,r,f,c,d,g,m,T)?this.resetTo(r,f,c,d,1):(Vu(this,0),this.parent||V0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},u.kill=function(r,f){if(f===void 0&&(f="all"),!r&&(!f||f==="all"))return this._lazy=this._pt=0,this.parent?Fa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ge),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(r,f,h_&&h_.vars.overwrite!==!0)._first||Fa(this),this.parent&&c!==this.timeline.totalDuration()&&kn(this,this._dur*this.timeline._tDur/c,0,1),this}var d=this._targets,T=r?ul(r):d,m=this._ptLookup,g=this._pt,y,x,M,H,S,G,k;if((!f||f==="all")&&yg(d,T))return f==="all"&&(this._pt=0),Fa(this);for(y=this._op=this._op||[],f!=="all"&&(he(f)&&(S={},Ce(f,function(Z){return S[Z]=1}),f=S),f=Xg(d,f)),k=d.length;k--;)if(~T.indexOf(d[k])){x=m[k],f==="all"?(y[k]=f,H=x,M={}):(M=y[k]=y[k]||{},H=f);for(S in H)G=x&&x[S],G&&((!("kill"in G.d)||G.d.kill(S)===!0)&&qu(this,G,"_pt"),delete x[S]),M!=="all"&&(M[S]=1)}return this._initted&&!this._pt&&g&&Fa(this),this},n.to=function(r,f){return new n(r,f,arguments[2])},n.from=function(r,f){return ei(1,arguments)},n.delayedCall=function(r,f,c,d){return new n(f,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:f,onReverseComplete:f,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:d})},n.fromTo=function(r,f,c){return ei(2,arguments)},n.set=function(r,f){return f.duration=0,f.repeatDelay||(f.repeat=0),new n(r,f)},n.killTweensOf=function(r,f,c){return $t.killTweensOf(r,f,c)},n})(ui);Ke(ae.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ce("staggerTo,staggerFrom,staggerFromTo",function(o){ae[o]=function(){var n=new Le,u=Lf.call(arguments,0);return u.splice(o==="staggerFromTo"?5:4,0,0),n[o].apply(n,u)}});var Qf=function(n,u,a){return n[u]=a},o1=function(n,u,a){return n[u](a)},Zg=function(n,u,a,r){return n[u](r.fp,a)},kg=function(n,u,a){return n.setAttribute(u,a)},Zf=function(n,u){return Pt(n[u])?o1:Uf(n[u])&&n.setAttribute?kg:Qf},h1=function(n,u){return u.set(u.t,u.p,Math.round((u.s+u.c*n)*1e6)/1e6,u)},$g=function(n,u){return u.set(u.t,u.p,!!(u.s+u.c*n),u)},d1=function(n,u){var a=u._pt,r="";if(!n&&u.b)r=u.b;else if(n===1&&u.e)r=u.e;else{for(;a;)r=a.p+(a.m?a.m(a.s+a.c*n):Math.round((a.s+a.c*n)*1e4)/1e4)+r,a=a._next;r+=u.c}u.set(u.t,u.p,r,u)},kf=function(n,u){for(var a=u._pt;a;)a.r(n,a.d),a=a._next},Kg=function(n,u,a,r){for(var f=this._pt,c;f;)c=f._next,f.p===r&&f.modifier(n,u,a),f=c},Wg=function(n){for(var u=this._pt,a,r;u;)r=u._next,u.p===n&&!u.op||u.op===n?qu(this,u,"_pt"):u.dep||(a=1),u=r;return!a},Jg=function(n,u,a,r){r.mSet(n,u,r.m.call(r.tween,a,r.mt),r)},m1=function(n){for(var u=n._pt,a,r,f,c;u;){for(a=u._next,r=f;r&&r.pr>u.pr;)r=r._next;(u._prev=r?r._prev:c)?u._prev._next=u:f=u,(u._next=r)?r._prev=u:c=u,u=a}n._pt=f},De=(function(){function o(u,a,r,f,c,d,T,m,g){this.t=a,this.s=f,this.c=c,this.p=r,this.r=d||h1,this.d=T||this,this.set=m||Qf,this.pr=g||0,this._next=u,u&&(u._prev=this)}var n=o.prototype;return n.modifier=function(a,r,f){this.mSet=this.mSet||this.set,this.set=Jg,this.m=a,this.mt=f,this.tween=r},o})();Ce(Gf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Bf[o]=1});$e.TweenMax=$e.TweenLite=ae;$e.TimelineLite=$e.TimelineMax=Le;$t=new Le({sortChildren:!1,defaults:Xn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ke.stringFilter=n1;var $_=[],Mu={},Fg=[],i0=0,Pg=0,df=function(n){return(Mu[n]||Fg).map(function(u){return u()})},Nf=function(){var n=Date.now(),u=[];n-i0>2&&(df("matchMediaInit"),$_.forEach(function(a){var r=a.queries,f=a.conditions,c,d,T,m;for(d in r)c=vl.matchMedia(r[d]).matches,c&&(T=1),c!==f[d]&&(f[d]=c,m=1);m&&(a.revert(),T&&u.push(a))}),df("matchMediaRevert"),u.forEach(function(a){return a.onMatch(a,function(r){return a.add(null,r)})}),i0=n,df("matchMedia"))},T1=(function(){function o(u,a){this.selector=a&&bf(a),this.data=[],this._r=[],this.isReverted=!1,this.id=Pg++,u&&this.add(u)}var n=o.prototype;return n.add=function(a,r,f){Pt(a)&&(f=r,r=a,a=Pt);var c=this,d=function(){var m=Zt,g=c.selector,y;return m&&m!==c&&m.data.push(c),f&&(c.selector=bf(f)),Zt=c,y=r.apply(c,arguments),Pt(y)&&c._r.push(y),Zt=m,c.selector=g,c.isReverted=!1,y};return c.last=d,a===Pt?d(c,function(T){return c.add(null,T)}):a?c[a]=d:d},n.ignore=function(a){var r=Zt;Zt=null,a(this),Zt=r},n.getTweens=function(){var a=[];return this.data.forEach(function(r){return r instanceof o?a.push.apply(a,r.getTweens()):r instanceof ae&&!(r.parent&&r.parent.data==="nested")&&a.push(r)}),a},n.clear=function(){this._r.length=this.data.length=0},n.kill=function(a,r){var f=this;if(a?(function(){for(var d=f.getTweens(),T=f.data.length,m;T--;)m=f.data[T],m.data==="isFlip"&&(m.revert(),m.getChildren(!0,!0,!1).forEach(function(g){return d.splice(d.indexOf(g),1)}));for(d.map(function(g){return{g:g._dur||g._delay||g._sat&&!g._sat.vars.immediateRender?g.globalTime(0):-1/0,t:g}}).sort(function(g,y){return y.g-g.g||-1/0}).forEach(function(g){return g.t.revert(a)}),T=f.data.length;T--;)m=f.data[T],m instanceof Le?m.data!=="nested"&&(m.scrollTrigger&&m.scrollTrigger.revert(),m.kill()):!(m instanceof ae)&&m.revert&&m.revert(a);f._r.forEach(function(g){return g(a,f)}),f.isReverted=!0})():this.data.forEach(function(d){return d.kill&&d.kill()}),this.clear(),r)for(var c=$_.length;c--;)$_[c].id===this.id&&$_.splice(c,1)},n.revert=function(a){this.kill(a||{})},o})(),tv=(function(){function o(u){this.contexts=[],this.scope=u,Zt&&Zt.data.push(this)}var n=o.prototype;return n.add=function(a,r,f){Al(a)||(a={matches:a});var c=new T1(0,f||this.scope),d=c.conditions={},T,m,g;Zt&&!c.selector&&(c.selector=Zt.selector),this.contexts.push(c),r=c.add("onMatch",r),c.queries=a;for(m in a)m==="all"?g=1:(T=vl.matchMedia(a[m]),T&&($_.indexOf(c)<0&&$_.push(c),(d[m]=T.matches)&&(g=1),T.addListener?T.addListener(Nf):T.addEventListener("change",Nf)));return g&&r(c,function(y){return c.add(null,y)}),this},n.revert=function(a){this.kill(a||{})},n.kill=function(a){this.contexts.forEach(function(r){return r.kill(a,!0)})},o})(),Iu={registerPlugin:function(){for(var n=arguments.length,u=new Array(n),a=0;a<n;a++)u[a]=arguments[a];u.forEach(function(r){return e1(r)})},timeline:function(n){return new Le(n)},getTweensOf:function(n,u){return $t.getTweensOf(n,u)},getProperty:function(n,u,a,r){he(n)&&(n=ul(n)[0]);var f=Q_(n||{}).get,c=a?Y0:q0;return a==="native"&&(a=""),n&&(u?c((Xe[u]&&Xe[u].get||f)(n,u,a,r)):function(d,T,m){return c((Xe[d]&&Xe[d].get||f)(n,d,T,m))})},quickSetter:function(n,u,a){if(n=ul(n),n.length>1){var r=n.map(function(g){return He.quickSetter(g,u,a)}),f=r.length;return function(g){for(var y=f;y--;)r[y](g)}}n=n[0]||{};var c=Xe[u],d=Q_(n),T=d.harness&&(d.harness.aliases||{})[u]||u,m=c?function(g){var y=new c;Gn._pt=0,y.init(n,a?g+a:g,Gn,0,[n]),y.render(1,y),Gn._pt&&kf(1,Gn)}:d.set(n,T);return c?m:function(g){return m(n,T,a?g+a:g,d,1)}},quickTo:function(n,u,a){var r,f=He.to(n,Ke((r={},r[u]="+=0.1",r.paused=!0,r.stagger=0,r),a||{})),c=function(T,m,g){return f.resetTo(u,T,m,g)};return c.tween=f,c},isTweening:function(n){return $t.getTweensOf(n,!0).length>0},defaults:function(n){return n&&n.ease&&(n.ease=k_(n.ease,Xn.ease)),e0(Xn,n||{})},config:function(n){return e0(ke,n||{})},registerEffect:function(n){var u=n.name,a=n.effect,r=n.plugins,f=n.defaults,c=n.extendTimeline;(r||"").split(",").forEach(function(d){return d&&!Xe[d]&&!$e[d]&&_i(u+" effect requires "+d+" plugin.")}),ff[u]=function(d,T,m){return a(ul(d),Ke(T||{},f),m)},c&&(Le.prototype[u]=function(d,T,m){return this.add(ff[u](d,Al(T)?T:(m=T)&&{},this),m)})},registerEase:function(n,u){Et[n]=k_(u)},parseEase:function(n,u){return arguments.length?k_(n,u):Et},getById:function(n){return $t.getById(n)},exportRoot:function(n,u){n===void 0&&(n={});var a=new Le(n),r,f;for(a.smoothChildTiming=Me(n.smoothChildTiming),$t.remove(a),a._dp=0,a._time=a._tTime=$t._time,r=$t._first;r;)f=r._next,(u||!(!r._dur&&r instanceof ae&&r.vars.onComplete===r._targets[0]))&&pl(a,r,r._start-r._delay),r=f;return pl($t,a,0),a},context:function(n,u){return n?new T1(n,u):Zt},matchMedia:function(n){return new tv(n)},matchMediaRefresh:function(){return $_.forEach(function(n){var u=n.conditions,a,r;for(r in u)u[r]&&(u[r]=!1,a=1);a&&n.revert()})||Nf()},addEventListener:function(n,u){var a=Mu[n]||(Mu[n]=[]);~a.indexOf(u)||a.push(u)},removeEventListener:function(n,u){var a=Mu[n],r=a&&a.indexOf(u);r>=0&&a.splice(r,1)},utils:{wrap:Dg,wrapYoyo:zg,distribute:K0,random:J0,snap:W0,normalize:Cg,getUnit:Ae,clamp:Rg,splitColor:l1,toArray:ul,selector:bf,mapRange:P0,pipe:Og,unitize:Mg,interpolate:Hg,shuffle:$0},install:j0,effects:ff,ticker:Qe,updateRoot:Le.updateRoot,plugins:Xe,globalTimeline:$t,core:{PropTween:De,globals:w0,Tween:ae,Timeline:Le,Animation:ui,getCache:Q_,_removeLinkedListItem:qu,reverting:function(){return ge},context:function(n){return n&&Zt&&(Zt.data.push(n),n._ctx=Zt),Zt},suppressOverwrites:function(n){return Hf=n}}};Ce("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Iu[o]=ae[o]});Qe.add(Le.updateRoot);Gn=Iu.to({},{duration:0});var ev=function(n,u){for(var a=n._pt;a&&a.p!==u&&a.op!==u&&a.fp!==u;)a=a._next;return a},lv=function(n,u){var a=n._targets,r,f,c;for(r in u)for(f=a.length;f--;)c=n._ptLookup[f][r],c&&(c=c.d)&&(c._pt&&(c=ev(c,r)),c&&c.modifier&&c.modifier(u[r],n,a[f],r))},mf=function(n,u){return{name:n,headless:1,rawVars:1,init:function(r,f,c){c._onInit=function(d){var T,m;if(he(f)&&(T={},Ce(f,function(g){return T[g]=1}),f=T),u){T={};for(m in f)T[m]=u(f[m]);f=T}lv(d,f)}}}},He=Iu.registerPlugin({name:"attr",init:function(n,u,a,r,f){var c,d,T;this.tween=a;for(c in u)T=n.getAttribute(c)||"",d=this.add(n,"setAttribute",(T||0)+"",u[c],r,f,0,0,c),d.op=c,d.b=T,this._props.push(c)},render:function(n,u){for(var a=u._pt;a;)ge?a.set(a.t,a.p,a.b,a):a.r(n,a.d),a=a._next}},{name:"endArray",headless:1,init:function(n,u){for(var a=u.length;a--;)this.add(n,a,n[a]||0,u[a],0,0,0,0,0,1)}},mf("roundProps",xf),mf("modifiers"),mf("snap",W0))||Iu;ae.version=Le.version=He.version="3.13.0";U0=1;jf()&&$n();Et.Power0;Et.Power1;Et.Power2;Et.Power3;Et.Power4;Et.Linear;Et.Quad;Et.Cubic;Et.Quart;Et.Quint;Et.Strong;Et.Elastic;Et.Back;Et.SteppedEase;Et.Bounce;Et.Sine;Et.Expo;Et.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var u0,d_,Yn,$f,V_,r0,Kf,_v=function(){return typeof window<"u"},ql={},Y_=180/Math.PI,Vn=Math.PI/180,wn=Math.atan2,s0=1e8,Wf=/([A-Z])/g,nv=/(left|right|width|margin|padding|x)/i,av=/[\s,\(]\S/,yl={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Of=function(n,u){return u.set(u.t,u.p,Math.round((u.s+u.c*n)*1e4)/1e4+u.u,u)},iv=function(n,u){return u.set(u.t,u.p,n===1?u.e:Math.round((u.s+u.c*n)*1e4)/1e4+u.u,u)},uv=function(n,u){return u.set(u.t,u.p,n?Math.round((u.s+u.c*n)*1e4)/1e4+u.u:u.b,u)},rv=function(n,u){var a=u.s+u.c*n;u.set(u.t,u.p,~~(a+(a<0?-.5:.5))+u.u,u)},g1=function(n,u){return u.set(u.t,u.p,n?u.e:u.b,u)},v1=function(n,u){return u.set(u.t,u.p,n!==1?u.b:u.e,u)},sv=function(n,u,a){return n.style[u]=a},fv=function(n,u,a){return n.style.setProperty(u,a)},cv=function(n,u,a){return n._gsap[u]=a},ov=function(n,u,a){return n._gsap.scaleX=n._gsap.scaleY=a},hv=function(n,u,a,r,f){var c=n._gsap;c.scaleX=c.scaleY=a,c.renderTransform(f,c)},dv=function(n,u,a,r,f){var c=n._gsap;c[u]=a,c.renderTransform(f,c)},Kt="transform",ze=Kt+"Origin",mv=function o(n,u){var a=this,r=this.target,f=r.style,c=r._gsap;if(n in ql&&f){if(this.tfm=this.tfm||{},n!=="transform")n=yl[n]||n,~n.indexOf(",")?n.split(",").forEach(function(d){return a.tfm[d]=Bl(r,d)}):this.tfm[n]=c.x?c[n]:Bl(r,n),n===ze&&(this.tfm.zOrigin=c.zOrigin);else return yl.transform.split(",").forEach(function(d){return o.call(a,d,u)});if(this.props.indexOf(Kt)>=0)return;c.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ze,u,"")),n=Kt}(f||u)&&this.props.push(n,u,f[n])},p1=function(n){n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},Tv=function(){var n=this.props,u=this.target,a=u.style,r=u._gsap,f,c;for(f=0;f<n.length;f+=3)n[f+1]?n[f+1]===2?u[n[f]](n[f+2]):u[n[f]]=n[f+2]:n[f+2]?a[n[f]]=n[f+2]:a.removeProperty(n[f].substr(0,2)==="--"?n[f]:n[f].replace(Wf,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)r[c]=this.tfm[c];r.svg&&(r.renderTransform(),u.setAttribute("data-svg-origin",this.svgo||"")),f=Kf(),(!f||!f.isStart)&&!a[Kt]&&(p1(a),r.zOrigin&&a[ze]&&(a[ze]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},y1=function(n,u){var a={target:n,props:[],revert:Tv,save:mv};return n._gsap||He.core.getCache(n),u&&n.style&&n.nodeType&&u.split(",").forEach(function(r){return a.save(r)}),a},A1,Mf=function(n,u){var a=d_.createElementNS?d_.createElementNS((u||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),n):d_.createElement(n);return a&&a.style?a:d_.createElement(n)},rl=function o(n,u,a){var r=getComputedStyle(n);return r[u]||r.getPropertyValue(u.replace(Wf,"-$1").toLowerCase())||r.getPropertyValue(u)||!a&&o(n,Kn(u)||u,1)||""},f0="O,Moz,ms,Ms,Webkit".split(","),Kn=function(n,u,a){var r=u||V_,f=r.style,c=5;if(n in f&&!a)return n;for(n=n.charAt(0).toUpperCase()+n.substr(1);c--&&!(f0[c]+n in f););return c<0?null:(c===3?"ms":c>=0?f0[c]:"")+n},Cf=function(){_v()&&window.document&&(u0=window,d_=u0.document,Yn=d_.documentElement,V_=Mf("div")||{style:{}},Mf("div"),Kt=Kn(Kt),ze=Kt+"Origin",V_.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",A1=!!Kn("perspective"),Kf=He.core.reverting,$f=1)},c0=function(n){var u=n.ownerSVGElement,a=Mf("svg",u&&u.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=n.cloneNode(!0),f;r.style.display="block",a.appendChild(r),Yn.appendChild(a);try{f=r.getBBox()}catch{}return a.removeChild(r),Yn.removeChild(a),f},o0=function(n,u){for(var a=u.length;a--;)if(n.hasAttribute(u[a]))return n.getAttribute(u[a])},E1=function(n){var u,a;try{u=n.getBBox()}catch{u=c0(n),a=1}return u&&(u.width||u.height)||a||(u=c0(n)),u&&!u.width&&!u.x&&!u.y?{x:+o0(n,["x","cx","x1"])||0,y:+o0(n,["y","cy","y1"])||0,width:0,height:0}:u},S1=function(n){return!!(n.getCTM&&(!n.parentNode||n.ownerSVGElement)&&E1(n))},K_=function(n,u){if(u){var a=n.style,r;u in ql&&u!==ze&&(u=Kt),a.removeProperty?(r=u.substr(0,2),(r==="ms"||u.substr(0,6)==="webkit")&&(u="-"+u),a.removeProperty(r==="--"?u:u.replace(Wf,"-$1").toLowerCase())):a.removeAttribute(u)}},m_=function(n,u,a,r,f,c){var d=new De(n._pt,u,a,0,1,c?v1:g1);return n._pt=d,d.b=r,d.e=f,n._props.push(a),d},h0={deg:1,rad:1,turn:1},gv={grid:1,flex:1},p_=function o(n,u,a,r){var f=parseFloat(a)||0,c=(a+"").trim().substr((f+"").length)||"px",d=V_.style,T=nv.test(u),m=n.tagName.toLowerCase()==="svg",g=(m?"client":"offset")+(T?"Width":"Height"),y=100,x=r==="px",M=r==="%",H,S,G,k;if(r===c||!f||h0[r]||h0[c])return f;if(c!=="px"&&!x&&(f=o(n,u,a,"px")),k=n.getCTM&&S1(n),(M||c==="%")&&(ql[u]||~u.indexOf("adius")))return H=k?n.getBBox()[T?"width":"height"]:n[g],le(M?f/H*y:f/100*H);if(d[T?"width":"height"]=y+(x?c:r),S=r!=="rem"&&~u.indexOf("adius")||r==="em"&&n.appendChild&&!m?n:n.parentNode,k&&(S=(n.ownerSVGElement||{}).parentNode),(!S||S===d_||!S.appendChild)&&(S=d_.body),G=S._gsap,G&&M&&G.width&&T&&G.time===Qe.time&&!G.uncache)return le(f/G.width*y);if(M&&(u==="height"||u==="width")){var Z=n.style[u];n.style[u]=y+r,H=n[g],Z?n.style[u]=Z:K_(n,u)}else(M||c==="%")&&!gv[rl(S,"display")]&&(d.position=rl(n,"position")),S===n&&(d.position="static"),S.appendChild(V_),H=V_[g],S.removeChild(V_),d.position="absolute";return T&&M&&(G=Q_(S),G.time=Qe.time,G.width=S[g]),le(x?H*f/y:H&&f?y/H*f:0)},Bl=function(n,u,a,r){var f;return $f||Cf(),u in yl&&u!=="transform"&&(u=yl[u],~u.indexOf(",")&&(u=u.split(",")[0])),ql[u]&&u!=="transform"?(f=si(n,r),f=u!=="transformOrigin"?f[u]:f.svg?f.origin:Gu(rl(n,ze))+" "+f.zOrigin+"px"):(f=n.style[u],(!f||f==="auto"||r||~(f+"").indexOf("calc("))&&(f=Bu[u]&&Bu[u](n,u,a)||rl(n,u)||B0(n,u)||(u==="opacity"?1:0))),a&&!~(f+"").trim().indexOf(" ")?p_(n,u,f,a)+a:f},vv=function(n,u,a,r){if(!a||a==="none"){var f=Kn(u,n,1),c=f&&rl(n,f,1);c&&c!==a?(u=f,a=c):u==="borderColor"&&(a=rl(n,"borderTopColor"))}var d=new De(this._pt,n.style,u,0,1,d1),T=0,m=0,g,y,x,M,H,S,G,k,Z,$,K,q;if(d.b=a,d.e=r,a+="",r+="",r.substring(0,6)==="var(--"&&(r=rl(n,r.substring(4,r.indexOf(")")))),r==="auto"&&(S=n.style[u],n.style[u]=r,r=rl(n,u)||r,S?n.style[u]=S:K_(n,u)),g=[a,r],n1(g),a=g[0],r=g[1],x=a.match(Bn)||[],q=r.match(Bn)||[],q.length){for(;y=Bn.exec(r);)G=y[0],Z=r.substring(T,y.index),H?H=(H+1)%5:(Z.substr(-5)==="rgba("||Z.substr(-5)==="hsla(")&&(H=1),G!==(S=x[m++]||"")&&(M=parseFloat(S)||0,K=S.substr((M+"").length),G.charAt(1)==="="&&(G=qn(M,G)+K),k=parseFloat(G),$=G.substr((k+"").length),T=Bn.lastIndex-$.length,$||($=$||ke.units[u]||K,T===r.length&&(r+=$,d.e+=$)),K!==$&&(M=p_(n,u,S,$)||0),d._pt={_next:d._pt,p:Z||m===1?Z:",",s:M,c:k-M,m:H&&H<4||u==="zIndex"?Math.round:0});d.c=T<r.length?r.substring(T,r.length):""}else d.r=u==="display"&&r==="none"?v1:g1;return z0.test(r)&&(d.e=0),this._pt=d,d},d0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},pv=function(n){var u=n.split(" "),a=u[0],r=u[1]||"50%";return(a==="top"||a==="bottom"||r==="left"||r==="right")&&(n=a,a=r,r=n),u[0]=d0[a]||a,u[1]=d0[r]||r,u.join(" ")},yv=function(n,u){if(u.tween&&u.tween._time===u.tween._dur){var a=u.t,r=a.style,f=u.u,c=a._gsap,d,T,m;if(f==="all"||f===!0)r.cssText="",T=1;else for(f=f.split(","),m=f.length;--m>-1;)d=f[m],ql[d]&&(T=1,d=d==="transformOrigin"?ze:Kt),K_(a,d);T&&(K_(a,Kt),c&&(c.svg&&a.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",si(a,1),c.uncache=1,p1(r)))}},Bu={clearProps:function(n,u,a,r,f){if(f.data!=="isFromStart"){var c=n._pt=new De(n._pt,u,a,0,0,yv);return c.u=r,c.pr=-10,c.tween=f,n._props.push(a),1}}},ri=[1,0,0,1,0,0],L1={},b1=function(n){return n==="matrix(1, 0, 0, 1, 0, 0)"||n==="none"||!n},m0=function(n){var u=rl(n,Kt);return b1(u)?ri:u.substr(7).match(D0).map(le)},Jf=function(n,u){var a=n._gsap||Q_(n),r=n.style,f=m0(n),c,d,T,m;return a.svg&&n.getAttribute("transform")?(T=n.transform.baseVal.consolidate().matrix,f=[T.a,T.b,T.c,T.d,T.e,T.f],f.join(",")==="1,0,0,1,0,0"?ri:f):(f===ri&&!n.offsetParent&&n!==Yn&&!a.svg&&(T=r.display,r.display="block",c=n.parentNode,(!c||!n.offsetParent&&!n.getBoundingClientRect().width)&&(m=1,d=n.nextElementSibling,Yn.appendChild(n)),f=m0(n),T?r.display=T:K_(n,"display"),m&&(d?c.insertBefore(n,d):c?c.appendChild(n):Yn.removeChild(n))),u&&f.length>6?[f[0],f[1],f[4],f[5],f[12],f[13]]:f)},Df=function(n,u,a,r,f,c){var d=n._gsap,T=f||Jf(n,!0),m=d.xOrigin||0,g=d.yOrigin||0,y=d.xOffset||0,x=d.yOffset||0,M=T[0],H=T[1],S=T[2],G=T[3],k=T[4],Z=T[5],$=u.split(" "),K=parseFloat($[0])||0,q=parseFloat($[1])||0,et,lt,_t,W;a?T!==ri&&(lt=M*G-H*S)&&(_t=K*(G/lt)+q*(-S/lt)+(S*Z-G*k)/lt,W=K*(-H/lt)+q*(M/lt)-(M*Z-H*k)/lt,K=_t,q=W):(et=E1(n),K=et.x+(~$[0].indexOf("%")?K/100*et.width:K),q=et.y+(~($[1]||$[0]).indexOf("%")?q/100*et.height:q)),r||r!==!1&&d.smooth?(k=K-m,Z=q-g,d.xOffset=y+(k*M+Z*S)-k,d.yOffset=x+(k*H+Z*G)-Z):d.xOffset=d.yOffset=0,d.xOrigin=K,d.yOrigin=q,d.smooth=!!r,d.origin=u,d.originIsAbsolute=!!a,n.style[ze]="0px 0px",c&&(m_(c,d,"xOrigin",m,K),m_(c,d,"yOrigin",g,q),m_(c,d,"xOffset",y,d.xOffset),m_(c,d,"yOffset",x,d.yOffset)),n.setAttribute("data-svg-origin",K+" "+q)},si=function(n,u){var a=n._gsap||new r1(n);if("x"in a&&!u&&!a.uncache)return a;var r=n.style,f=a.scaleX<0,c="px",d="deg",T=getComputedStyle(n),m=rl(n,ze)||"0",g,y,x,M,H,S,G,k,Z,$,K,q,et,lt,_t,W,mt,At,ot,Tt,Rt,ht,I,J,it,St,b,Q,F,L,N,p;return g=y=x=S=G=k=Z=$=K=0,M=H=1,a.svg=!!(n.getCTM&&S1(n)),T.translate&&((T.translate!=="none"||T.scale!=="none"||T.rotate!=="none")&&(r[Kt]=(T.translate!=="none"?"translate3d("+(T.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(T.rotate!=="none"?"rotate("+T.rotate+") ":"")+(T.scale!=="none"?"scale("+T.scale.split(" ").join(",")+") ":"")+(T[Kt]!=="none"?T[Kt]:"")),r.scale=r.rotate=r.translate="none"),lt=Jf(n,a.svg),a.svg&&(a.uncache?(it=n.getBBox(),m=a.xOrigin-it.x+"px "+(a.yOrigin-it.y)+"px",J=""):J=!u&&n.getAttribute("data-svg-origin"),Df(n,J||m,!!J||a.originIsAbsolute,a.smooth!==!1,lt)),q=a.xOrigin||0,et=a.yOrigin||0,lt!==ri&&(At=lt[0],ot=lt[1],Tt=lt[2],Rt=lt[3],g=ht=lt[4],y=I=lt[5],lt.length===6?(M=Math.sqrt(At*At+ot*ot),H=Math.sqrt(Rt*Rt+Tt*Tt),S=At||ot?wn(ot,At)*Y_:0,Z=Tt||Rt?wn(Tt,Rt)*Y_+S:0,Z&&(H*=Math.abs(Math.cos(Z*Vn))),a.svg&&(g-=q-(q*At+et*Tt),y-=et-(q*ot+et*Rt))):(p=lt[6],L=lt[7],b=lt[8],Q=lt[9],F=lt[10],N=lt[11],g=lt[12],y=lt[13],x=lt[14],_t=wn(p,F),G=_t*Y_,_t&&(W=Math.cos(-_t),mt=Math.sin(-_t),J=ht*W+b*mt,it=I*W+Q*mt,St=p*W+F*mt,b=ht*-mt+b*W,Q=I*-mt+Q*W,F=p*-mt+F*W,N=L*-mt+N*W,ht=J,I=it,p=St),_t=wn(-Tt,F),k=_t*Y_,_t&&(W=Math.cos(-_t),mt=Math.sin(-_t),J=At*W-b*mt,it=ot*W-Q*mt,St=Tt*W-F*mt,N=Rt*mt+N*W,At=J,ot=it,Tt=St),_t=wn(ot,At),S=_t*Y_,_t&&(W=Math.cos(_t),mt=Math.sin(_t),J=At*W+ot*mt,it=ht*W+I*mt,ot=ot*W-At*mt,I=I*W-ht*mt,At=J,ht=it),G&&Math.abs(G)+Math.abs(S)>359.9&&(G=S=0,k=180-k),M=le(Math.sqrt(At*At+ot*ot+Tt*Tt)),H=le(Math.sqrt(I*I+p*p)),_t=wn(ht,I),Z=Math.abs(_t)>2e-4?_t*Y_:0,K=N?1/(N<0?-N:N):0),a.svg&&(J=n.getAttribute("transform"),a.forceCSS=n.setAttribute("transform","")||!b1(rl(n,Kt)),J&&n.setAttribute("transform",J))),Math.abs(Z)>90&&Math.abs(Z)<270&&(f?(M*=-1,Z+=S<=0?180:-180,S+=S<=0?180:-180):(H*=-1,Z+=Z<=0?180:-180)),u=u||a.uncache,a.x=g-((a.xPercent=g&&(!u&&a.xPercent||(Math.round(n.offsetWidth/2)===Math.round(-g)?-50:0)))?n.offsetWidth*a.xPercent/100:0)+c,a.y=y-((a.yPercent=y&&(!u&&a.yPercent||(Math.round(n.offsetHeight/2)===Math.round(-y)?-50:0)))?n.offsetHeight*a.yPercent/100:0)+c,a.z=x+c,a.scaleX=le(M),a.scaleY=le(H),a.rotation=le(S)+d,a.rotationX=le(G)+d,a.rotationY=le(k)+d,a.skewX=Z+d,a.skewY=$+d,a.transformPerspective=K+c,(a.zOrigin=parseFloat(m.split(" ")[2])||!u&&a.zOrigin||0)&&(r[ze]=Gu(m)),a.xOffset=a.yOffset=0,a.force3D=ke.force3D,a.renderTransform=a.svg?Ev:A1?x1:Av,a.uncache=0,a},Gu=function(n){return(n=n.split(" "))[0]+" "+n[1]},Tf=function(n,u,a){var r=Ae(u);return le(parseFloat(u)+parseFloat(p_(n,"x",a+"px",r)))+r},Av=function(n,u){u.z="0px",u.rotationY=u.rotationX="0deg",u.force3D=0,x1(n,u)},G_="0deg",Ja="0px",q_=") ",x1=function(n,u){var a=u||this,r=a.xPercent,f=a.yPercent,c=a.x,d=a.y,T=a.z,m=a.rotation,g=a.rotationY,y=a.rotationX,x=a.skewX,M=a.skewY,H=a.scaleX,S=a.scaleY,G=a.transformPerspective,k=a.force3D,Z=a.target,$=a.zOrigin,K="",q=k==="auto"&&n&&n!==1||k===!0;if($&&(y!==G_||g!==G_)){var et=parseFloat(g)*Vn,lt=Math.sin(et),_t=Math.cos(et),W;et=parseFloat(y)*Vn,W=Math.cos(et),c=Tf(Z,c,lt*W*-$),d=Tf(Z,d,-Math.sin(et)*-$),T=Tf(Z,T,_t*W*-$+$)}G!==Ja&&(K+="perspective("+G+q_),(r||f)&&(K+="translate("+r+"%, "+f+"%) "),(q||c!==Ja||d!==Ja||T!==Ja)&&(K+=T!==Ja||q?"translate3d("+c+", "+d+", "+T+") ":"translate("+c+", "+d+q_),m!==G_&&(K+="rotate("+m+q_),g!==G_&&(K+="rotateY("+g+q_),y!==G_&&(K+="rotateX("+y+q_),(x!==G_||M!==G_)&&(K+="skew("+x+", "+M+q_),(H!==1||S!==1)&&(K+="scale("+H+", "+S+q_),Z.style[Kt]=K||"translate(0, 0)"},Ev=function(n,u){var a=u||this,r=a.xPercent,f=a.yPercent,c=a.x,d=a.y,T=a.rotation,m=a.skewX,g=a.skewY,y=a.scaleX,x=a.scaleY,M=a.target,H=a.xOrigin,S=a.yOrigin,G=a.xOffset,k=a.yOffset,Z=a.forceCSS,$=parseFloat(c),K=parseFloat(d),q,et,lt,_t,W;T=parseFloat(T),m=parseFloat(m),g=parseFloat(g),g&&(g=parseFloat(g),m+=g,T+=g),T||m?(T*=Vn,m*=Vn,q=Math.cos(T)*y,et=Math.sin(T)*y,lt=Math.sin(T-m)*-x,_t=Math.cos(T-m)*x,m&&(g*=Vn,W=Math.tan(m-g),W=Math.sqrt(1+W*W),lt*=W,_t*=W,g&&(W=Math.tan(g),W=Math.sqrt(1+W*W),q*=W,et*=W)),q=le(q),et=le(et),lt=le(lt),_t=le(_t)):(q=y,_t=x,et=lt=0),($&&!~(c+"").indexOf("px")||K&&!~(d+"").indexOf("px"))&&($=p_(M,"x",c,"px"),K=p_(M,"y",d,"px")),(H||S||G||k)&&($=le($+H-(H*q+S*lt)+G),K=le(K+S-(H*et+S*_t)+k)),(r||f)&&(W=M.getBBox(),$=le($+r/100*W.width),K=le(K+f/100*W.height)),W="matrix("+q+","+et+","+lt+","+_t+","+$+","+K+")",M.setAttribute("transform",W),Z&&(M.style[Kt]=W)},Sv=function(n,u,a,r,f){var c=360,d=he(f),T=parseFloat(f)*(d&&~f.indexOf("rad")?Y_:1),m=T-r,g=r+m+"deg",y,x;return d&&(y=f.split("_")[1],y==="short"&&(m%=c,m!==m%(c/2)&&(m+=m<0?c:-c)),y==="cw"&&m<0?m=(m+c*s0)%c-~~(m/c)*c:y==="ccw"&&m>0&&(m=(m-c*s0)%c-~~(m/c)*c)),n._pt=x=new De(n._pt,u,a,r,m,iv),x.e=g,x.u="deg",n._props.push(a),x},T0=function(n,u){for(var a in u)n[a]=u[a];return n},Lv=function(n,u,a){var r=T0({},a._gsap),f="perspective,force3D,transformOrigin,svgOrigin",c=a.style,d,T,m,g,y,x,M,H;r.svg?(m=a.getAttribute("transform"),a.setAttribute("transform",""),c[Kt]=u,d=si(a,1),K_(a,Kt),a.setAttribute("transform",m)):(m=getComputedStyle(a)[Kt],c[Kt]=u,d=si(a,1),c[Kt]=m);for(T in ql)m=r[T],g=d[T],m!==g&&f.indexOf(T)<0&&(M=Ae(m),H=Ae(g),y=M!==H?p_(a,T,m,H):parseFloat(m),x=parseFloat(g),n._pt=new De(n._pt,d,T,y,x-y,Of),n._pt.u=H||0,n._props.push(T));T0(d,r)};Ce("padding,margin,Width,Radius",function(o,n){var u="Top",a="Right",r="Bottom",f="Left",c=(n<3?[u,a,r,f]:[u+f,u+a,r+a,r+f]).map(function(d){return n<2?o+d:"border"+d+o});Bu[n>1?"border"+o:o]=function(d,T,m,g,y){var x,M;if(arguments.length<4)return x=c.map(function(H){return Bl(d,H,m)}),M=x.join(" "),M.split(x[0]).length===5?x[0]:M;x=(g+"").split(" "),M={},c.forEach(function(H,S){return M[H]=x[S]=x[S]||x[(S-1)/2|0]}),d.init(T,M,y)}});var R1={name:"css",register:Cf,targetTest:function(n){return n.style&&n.nodeType},init:function(n,u,a,r,f){var c=this._props,d=n.style,T=a.vars.startAt,m,g,y,x,M,H,S,G,k,Z,$,K,q,et,lt,_t;$f||Cf(),this.styles=this.styles||y1(n),_t=this.styles.props,this.tween=a;for(S in u)if(S!=="autoRound"&&(g=u[S],!(Xe[S]&&s1(S,u,a,r,n,f)))){if(M=typeof g,H=Bu[S],M==="function"&&(g=g.call(a,r,n,f),M=typeof g),M==="string"&&~g.indexOf("random(")&&(g=ai(g)),H)H(this,n,S,g,a)&&(lt=1);else if(S.substr(0,2)==="--")m=(getComputedStyle(n).getPropertyValue(S)+"").trim(),g+="",g_.lastIndex=0,g_.test(m)||(G=Ae(m),k=Ae(g)),k?G!==k&&(m=p_(n,S,m,k)+k):G&&(g+=G),this.add(d,"setProperty",m,g,r,f,0,0,S),c.push(S),_t.push(S,0,d[S]);else if(M!=="undefined"){if(T&&S in T?(m=typeof T[S]=="function"?T[S].call(a,r,n,f):T[S],he(m)&&~m.indexOf("random(")&&(m=ai(m)),Ae(m+"")||m==="auto"||(m+=ke.units[S]||Ae(Bl(n,S))||""),(m+"").charAt(1)==="="&&(m=Bl(n,S))):m=Bl(n,S),x=parseFloat(m),Z=M==="string"&&g.charAt(1)==="="&&g.substr(0,2),Z&&(g=g.substr(2)),y=parseFloat(g),S in yl&&(S==="autoAlpha"&&(x===1&&Bl(n,"visibility")==="hidden"&&y&&(x=0),_t.push("visibility",0,d.visibility),m_(this,d,"visibility",x?"inherit":"hidden",y?"inherit":"hidden",!y)),S!=="scale"&&S!=="transform"&&(S=yl[S],~S.indexOf(",")&&(S=S.split(",")[0]))),$=S in ql,$){if(this.styles.save(S),M==="string"&&g.substring(0,6)==="var(--"&&(g=rl(n,g.substring(4,g.indexOf(")"))),y=parseFloat(g)),K||(q=n._gsap,q.renderTransform&&!u.parseTransform||si(n,u.parseTransform),et=u.smoothOrigin!==!1&&q.smooth,K=this._pt=new De(this._pt,d,Kt,0,1,q.renderTransform,q,0,-1),K.dep=1),S==="scale")this._pt=new De(this._pt,q,"scaleY",q.scaleY,(Z?qn(q.scaleY,Z+y):y)-q.scaleY||0,Of),this._pt.u=0,c.push("scaleY",S),S+="X";else if(S==="transformOrigin"){_t.push(ze,0,d[ze]),g=pv(g),q.svg?Df(n,g,0,et,0,this):(k=parseFloat(g.split(" ")[2])||0,k!==q.zOrigin&&m_(this,q,"zOrigin",q.zOrigin,k),m_(this,d,S,Gu(m),Gu(g)));continue}else if(S==="svgOrigin"){Df(n,g,1,et,0,this);continue}else if(S in L1){Sv(this,q,S,x,Z?qn(x,Z+g):g);continue}else if(S==="smoothOrigin"){m_(this,q,"smooth",q.smooth,g);continue}else if(S==="force3D"){q[S]=g;continue}else if(S==="transform"){Lv(this,g,n);continue}}else S in d||(S=Kn(S)||S);if($||(y||y===0)&&(x||x===0)&&!av.test(g)&&S in d)G=(m+"").substr((x+"").length),y||(y=0),k=Ae(g)||(S in ke.units?ke.units[S]:G),G!==k&&(x=p_(n,S,m,k)),this._pt=new De(this._pt,$?q:d,S,x,(Z?qn(x,Z+y):y)-x,!$&&(k==="px"||S==="zIndex")&&u.autoRound!==!1?rv:Of),this._pt.u=k||0,G!==k&&k!=="%"&&(this._pt.b=m,this._pt.r=uv);else if(S in d)vv.call(this,n,S,m,Z?Z+g:g);else if(S in n)this.add(n,S,m||n[S],Z?Z+g:g,r,f);else if(S!=="parseTransform"){If(S,g);continue}$||(S in d?_t.push(S,0,d[S]):typeof n[S]=="function"?_t.push(S,2,n[S]()):_t.push(S,1,m||n[S])),c.push(S)}}lt&&m1(this)},render:function(n,u){if(u.tween._time||!Kf())for(var a=u._pt;a;)a.r(n,a.d),a=a._next;else u.styles.revert()},get:Bl,aliases:yl,getSetter:function(n,u,a){var r=yl[u];return r&&r.indexOf(",")<0&&(u=r),u in ql&&u!==ze&&(n._gsap.x||Bl(n,"x"))?a&&r0===a?u==="scale"?ov:cv:(r0=a||{})&&(u==="scale"?hv:dv):n.style&&!Uf(n.style[u])?sv:~u.indexOf("-")?fv:Zf(n,u)},core:{_removeProperty:K_,_getMatrix:Jf}};He.utils.checkPrefix=Kn;He.core.getStyleSaver=y1;(function(o,n,u,a){var r=Ce(o+","+n+","+u,function(f){ql[f]=1});Ce(n,function(f){ke.units[f]="deg",L1[f]=1}),yl[r[13]]=o+","+n,Ce(a,function(f){var c=f.split(":");yl[c[1]]=r[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ce("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){ke.units[o]="px"});He.registerPlugin(R1);var Wn=He.registerPlugin(R1)||He;Wn.core.Tween;/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let g0=typeof document<"u"?zt.useLayoutEffect:zt.useEffect,v0=o=>o&&!Array.isArray(o)&&typeof o=="object",xu=[],bv={},N1=Wn;const Xu=(o,n=xu)=>{let u=bv;v0(o)?(u=o,o=null,n="dependencies"in u?u.dependencies:xu):v0(n)&&(u=n,n="dependencies"in u?u.dependencies:xu),o&&typeof o!="function"&&console.warn("First parameter must be a function or config object");const{scope:a,revertOnUpdate:r}=u,f=zt.useRef(!1),c=zt.useRef(N1.context(()=>{},a)),d=zt.useRef(m=>c.current.add(null,m)),T=n&&n.length&&!r;return T&&g0(()=>(f.current=!0,()=>c.current.revert()),xu),g0(()=>{if(o&&c.current.add(o,a),!T||!f.current)return()=>c.current.revert()},n),{context:c.current,contextSafe:d.current}};Xu.register=o=>{N1=o};Xu.headless=!0;function xv(o){return ol({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"},child:[]}]})(o)}function Rv(o){return ol({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"},child:[]}]})(o)}function Nv(o){return ol({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"},child:[]}]})(o)}function Ov(o){return ol({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"},child:[]}]})(o)}const ci=zt.createContext({lang:"en",setLang:()=>{}}),Mv=({children:o})=>{const[n,u]=zt.useState("en"),a=r=>{r==="en"||r==="fr"?u(r):console.warn(`Unsupported language: ${r}`)};return E.jsx(ci.Provider,{value:{lang:n,setLang:a},children:o})},Cv=({setModalVisible:o})=>{const n=zt.useRef(null),{lang:u,setLang:a}=zt.useContext(ci),[r,f]=zt.useState(!0),[c,d]=zt.useState(u);Xu(()=>{n.current&&Wn.from(n.current,{scale:0,opacity:0,duration:.6,ease:"expo.inOut",delay:.1})});const T=()=>{n.current&&Wn.to(n.current,{scale:0,opacity:0,duration:.6,ease:"expo.inOut",onComplete:()=>{f(!1),o(!1)}})},m=()=>{u!==c&&a(c),T()};return zt.useEffect(()=>{const g=y=>{y.code==="Enter"&&(u!==c&&a(c),T())};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[u,c,a,T]),r&&E.jsx("div",{className:"fixed inset-0 z-10 flex items-center justify-center backdrop-brightness-0 font-sans text-foreground",children:E.jsxs("div",{ref:n,className:"w-full md:w-1/4 bg-background rounded-xl overflow-hidden flex flex-col outline-1 outline-accent",children:[E.jsxs("div",{className:"flex justify-between items-center border-b border-accent py-4 px-4",children:[E.jsxs("div",{children:[E.jsx("h1",{className:"text-md font-medium",children:"Choose language"}),E.jsx("p",{className:"text-sm text-muted-foreground",children:"Choisissez la langue"})]}),E.jsx(xv,{className:"text-2xl"})]}),E.jsxs("div",{className:"flex gap-4 px-4 py-4",children:[E.jsx("div",{className:"w-22 h-16 bg-cover rounded-md relative cursor-pointer bg-[url('/flag_fr.png')]",onClick:()=>d("fr"),children:E.jsx("input",{type:"radio",checked:c==="fr",onChange:()=>d("fr"),className:"absolute top-1 right-1 size-4 rounded-full"})}),E.jsx("div",{className:"w-22 h-16 bg-cover rounded-md relative cursor-pointer bg-[url('/flag_en.png')]",onClick:()=>d("en"),children:E.jsx("input",{type:"radio",checked:c==="en",onChange:()=>d("en"),className:"absolute top-1 right-1 size-4 rounded-full"})})]}),E.jsx("div",{className:"flex justify-end px-4 pb-4",children:E.jsxs("button",{onClick:m,className:"bg-background text-foreground px-4 py-2 rounded-md  cursor-pointer hover:opacity-60 transition-all duration-200 ease-in-out outline-1 outline-accent",children:["Enter",E.jsx(fg,{className:"inline-block ml-2"})]})})]})})},p0=({command:o,dir:n})=>{const{lang:u}=zt.useContext(ci);return E.jsxs(E.Fragment,{children:[E.jsxs("span",{children:[u==="fr"?"visiteur":"guest",E.jsx("span",{className:"text-lime-400",children:"@walid"})]}),E.jsxs("span",{children:[":",E.jsx("span",{children:n}),E.jsx("span",{className:"text-accent-foreground",children:"~"}),"$"," ",E.jsx("span",{children:o})]})]})};var gf={exports:{}},y0;function Dv(){return y0||(y0=1,(function(o){const n=(()=>{const c={},d={font:"Standard",fontPath:"./fonts"};function T(L,N){let p={},O,w,B,nt,tt=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(O=N!==null?N:L,w=0,B=tt.length;w<B;)nt=tt[w],O>=nt[0]?(O=O-nt[0],p[nt[1]]=typeof p[nt[1]]>"u"?nt[2]:p[nt[1]]):nt[1]!=="vLayout"&&nt[1]!=="hLayout"&&(p[nt[1]]=!1),w++;return typeof p.hLayout>"u"?L===0?p.hLayout=1:L===-1?p.hLayout=0:p.hRule1||p.hRule2||p.hRule3||p.hRule4||p.hRule5||p.hRule6?p.hLayout=3:p.hLayout=2:p.hLayout===2&&(p.hRule1||p.hRule2||p.hRule3||p.hRule4||p.hRule5||p.hRule6)&&(p.hLayout=3),typeof p.vLayout>"u"?p.vRule1||p.vRule2||p.vRule3||p.vRule4||p.vRule5?p.vLayout=3:p.vLayout=0:p.vLayout===2&&(p.vRule1||p.vRule2||p.vRule3||p.vRule4||p.vRule5)&&(p.vLayout=3),p}function m(L,N,p){return L===N&&L!==p?L:!1}function g(L,N){let p="|/\\[]{}()<>";if(L==="_"){if(p.indexOf(N)!==-1)return N}else if(N==="_"&&p.indexOf(L)!==-1)return L;return!1}function y(L,N){let p="| /\\ [] {} () <>",O=p.indexOf(L),w=p.indexOf(N);if(O!==-1&&w!==-1&&O!==w&&Math.abs(O-w)!==1){const B=Math.max(O,w),nt=B+1;return p.substring(B,nt)}return!1}function x(L,N){let p="[] {} ()",O=p.indexOf(L),w=p.indexOf(N);return O!==-1&&w!==-1&&Math.abs(O-w)<=1?"|":!1}function M(L,N){let p="/\\ \\/ ><",O={0:"|",3:"Y",6:"X"},w=p.indexOf(L),B=p.indexOf(N);return w!==-1&&B!==-1&&B-w===1?O[w]:!1}function H(L,N,p){return L===p&&N===p?p:!1}function S(L,N){return L===N?L:!1}function G(L,N){let p="|/\\[]{}()<>";if(L==="_"){if(p.indexOf(N)!==-1)return N}else if(N==="_"&&p.indexOf(L)!==-1)return L;return!1}function k(L,N){let p="| /\\ [] {} () <>",O=p.indexOf(L),w=p.indexOf(N);if(O!==-1&&w!==-1&&O!==w&&Math.abs(O-w)!==1){const B=Math.max(O,w),nt=B+1;return p.substring(B,nt)}return!1}function Z(L,N){return L==="-"&&N==="_"||L==="_"&&N==="-"?"=":!1}function $(L,N){return L==="|"&&N==="|"?"|":!1}function K(L,N,p){return N===" "||N===""||N===p&&L!==" "?L:N}function q(L,N,p){if(p.fittingRules.vLayout===0)return"invalid";let O,w=Math.min(L.length,N.length),B,nt,tt=!1,P;if(w===0)return"invalid";for(O=0;O<w;O++)if(B=L.substring(O,O+1),nt=N.substring(O,O+1),B!==" "&&nt!==" "){if(p.fittingRules.vLayout===1)return"invalid";if(p.fittingRules.vLayout===2)return"end";if($(B,nt)){tt=tt||!1;continue}if(P=!1,P=p.fittingRules.vRule1?S(B,nt):P,P=!P&&p.fittingRules.vRule2?G(B,nt):P,P=!P&&p.fittingRules.vRule3?k(B,nt):P,P=!P&&p.fittingRules.vRule4?Z(B,nt):P,tt=!0,!P)return"invalid"}return tt?"end":"valid"}function et(L,N,p){let O=L.length,w=L.length;N.length;let B,nt,tt,P=1,ut,bt,Nt;for(;P<=O;){for(B=L.slice(Math.max(0,w-P),w),nt=N.slice(0,Math.min(O,P)),tt=nt.length,Nt="",ut=0;ut<tt;ut++)if(bt=q(B[ut],nt[ut],p),bt==="end")Nt=bt;else if(bt==="invalid"){Nt=bt;break}else Nt===""&&(Nt="valid");if(Nt==="invalid"){P--;break}if(Nt==="end")break;Nt==="valid"&&P++}return Math.min(O,P)}function lt(L,N,p){let O,w=Math.min(L.length,N.length),B,nt,tt="",P;for(O=0;O<w;O++)B=L.substring(O,O+1),nt=N.substring(O,O+1),B!==" "&&nt!==" "?p.fittingRules.vLayout===1||p.fittingRules.vLayout===2?tt+=K(B,nt):(P=!1,P=p.fittingRules.vRule5?$(B,nt):P,P=!P&&p.fittingRules.vRule1?S(B,nt):P,P=!P&&p.fittingRules.vRule2?G(B,nt):P,P=!P&&p.fittingRules.vRule3?k(B,nt):P,P=!P&&p.fittingRules.vRule4?Z(B,nt):P,tt+=P):tt+=K(B,nt);return tt}function _t(L,N,p,O){let w=L.length,B=N.length,nt=L.slice(0,Math.max(0,w-p)),tt=L.slice(Math.max(0,w-p),w),P=N.slice(0,Math.min(p,B)),ut,bt,Nt,Mt=[],Ht,Vt=[];for(bt=tt.length,ut=0;ut<bt;ut++)ut>=B?Nt=tt[ut]:Nt=lt(tt[ut],P[ut],O),Mt.push(Nt);return Ht=N.slice(Math.min(p,B),B),Vt.concat(nt,Mt,Ht)}function W(L,N){let p,O=L.length,w="";for(p=0;p<N;p++)w+=" ";for(p=0;p<O;p++)L[p]+=w}function mt(L,N,p){let O=L[0].length,w=N[0].length,B;return O>w?W(N,O-w):w>O&&W(L,w-O),B=et(L,N,p),_t(L,N,B,p)}function At(L,N,p){if(p.fittingRules.hLayout===0)return 0;let O,w=L.length,B=N.length,nt=w,tt=1,P=!1,ut=!1,bt,Nt,Mt,Ht;if(w===0)return 0;t:for(;tt<=nt;){const Vt=w-tt;for(bt=L.substring(Vt,Vt+tt),Nt=N.substring(0,Math.min(tt,B)),O=0;O<Math.min(tt,B);O++)if(Mt=bt.substring(O,O+1),Ht=Nt.substring(O,O+1),Mt!==" "&&Ht!==" "){if(p.fittingRules.hLayout===1){tt=tt-1;break t}else if(p.fittingRules.hLayout===2){(Mt===p.hardBlank||Ht===p.hardBlank)&&(tt=tt-1);break t}else if(P=!0,ut=!1,ut=p.fittingRules.hRule1?m(Mt,Ht,p.hardBlank):ut,ut=!ut&&p.fittingRules.hRule2?g(Mt,Ht,p.hardBlank):ut,ut=!ut&&p.fittingRules.hRule3?y(Mt,Ht,p.hardBlank):ut,ut=!ut&&p.fittingRules.hRule4?x(Mt,Ht,p.hardBlank):ut,ut=!ut&&p.fittingRules.hRule5?M(Mt,Ht,p.hardBlank):ut,ut=!ut&&p.fittingRules.hRule6?H(Mt,Ht,p.hardBlank):ut,!ut){tt=tt-1;break t}}if(P)break;tt++}return Math.min(nt,tt)}function ot(L,N,p,O){let w,B,nt=[],tt,P,ut,bt,Nt,Mt,Ht,Vt;for(w=0;w<O.height;w++){Ht=L[w],Vt=N[w],Nt=Ht.length,Mt=Vt.length,tt=Nt-p,P=Ht.substr(0,Math.max(0,tt)),ut="";const Jn=Math.max(0,Nt-p);var Yl=Ht.substring(Jn,Jn+p),A_=Vt.substring(0,Math.min(p,Mt));for(B=0;B<p;B++){var Xt=B<Nt?Yl.substring(B,B+1):" ",Wt=B<Mt?A_.substring(B,B+1):" ";if(Xt!==" "&&Wt!==" ")if(O.fittingRules.hLayout===1)ut+=K(Xt,Wt,O.hardBlank);else if(O.fittingRules.hLayout===2)ut+=K(Xt,Wt,O.hardBlank);else{var It="";It=!It&&O.fittingRules.hRule1?m(Xt,Wt,O.hardBlank):It,It=!It&&O.fittingRules.hRule2?g(Xt,Wt,O.hardBlank):It,It=!It&&O.fittingRules.hRule3?y(Xt,Wt,O.hardBlank):It,It=!It&&O.fittingRules.hRule4?x(Xt,Wt,O.hardBlank):It,It=!It&&O.fittingRules.hRule5?M(Xt,Wt,O.hardBlank):It,It=!It&&O.fittingRules.hRule6?H(Xt,Wt,O.hardBlank):It,It=It||K(Xt,Wt,O.hardBlank),ut+=It}else ut+=K(Xt,Wt,O.hardBlank)}p>=Mt?bt="":bt=Vt.substring(p,p+Math.max(0,Mt-p)),nt[w]=P+ut+bt}return nt}function Tt(L){let N=[],p;for(p=0;p<L;p++)N[p]="";return N}const Rt=function(L){return Math.max.apply(Math,L.map(function(N,p){return N.length}))};function ht(L,N,p){return L.reduce(function(O,w){return ot(O,w.fig,w.overlap,p)},Tt(N))}function I(L,N,p){const O={};for(let w=L.length;--w;){let B=ht(L.slice(0,w),N,p);if(Rt(B)<=p.width){O.outputFigText=B,w<L.length?O.chars=L.slice(w):O.chars=[];break}}return O}function J(L,N,p){let O,w,B=0,nt,tt,P,ut=p.height,bt=[],Nt,Mt,Ht=[],Vt,Yl,A_,Xt,Wt;for(tt=Tt(ut),p.width>0&&p.whitespaceBreak&&(Mt={chars:[],overlap:B}),p.printDirection===1&&(L=L.split("").reverse().join("")),P=L.length,O=0;O<P;O++)if(Vt=L.substring(O,O+1),Yl=Vt.match(/\s/),w=N[Vt.charCodeAt(0)],Xt=null,w){if(p.fittingRules.hLayout!==0){for(B=1e4,nt=0;nt<p.height;nt++)B=Math.min(B,At(tt[nt],w[nt],p));B=B===1e4?0:B}if(p.width>0&&(p.whitespaceBreak?(A_=ht(Mt.chars.concat([{fig:w,overlap:B}]),ut,p),Xt=ht(Ht.concat([{fig:A_,overlap:Mt.overlap}]),ut,p),Nt=Rt(Xt)):(Xt=ot(tt,w,B,p),Nt=Rt(Xt)),Nt>=p.width&&O>0&&(p.whitespaceBreak?(tt=ht(Ht.slice(0,-1),ut,p),Ht.length>1&&(bt.push(tt),tt=Tt(ut)),Ht=[]):(bt.push(tt),tt=Tt(ut)))),p.width>0&&p.whitespaceBreak&&((!Yl||O===P-1)&&Mt.chars.push({fig:w,overlap:B}),Yl||O===P-1)){for(Wt=null;Xt=ht(Mt.chars,ut,p),Nt=Rt(Xt),Nt>=p.width;)Wt=I(Mt.chars,ut,p),Mt={chars:Wt.chars},bt.push(Wt.outputFigText);Nt>0&&(Wt?Ht.push({fig:Xt,overlap:1}):Ht.push({fig:Xt,overlap:Mt.overlap})),Yl&&(Ht.push({fig:w,overlap:B}),tt=Tt(ut)),O===P-1&&(tt=ht(Ht,ut,p)),Mt={chars:[],overlap:B};continue}tt=ot(tt,w,B,p)}return Rt(tt)>0&&bt.push(tt),p.showHardBlanks!==!0&&bt.forEach(function(It){for(P=It.length,nt=0;nt<P;nt++)It[nt]=It[nt].replace(new RegExp("\\"+p.hardBlank,"g")," ")}),bt}const it=function(L,N){let p=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],O={},w;if(L==="default")for(w=0;w<p.length;w++)O[p[w]]=N.fittingRules[p[w]];else if(L==="full")O={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(L==="fitted")O={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(L==="controlled smushing")O={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(L==="universal smushing")O={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return O},St=function(L,N){let p=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],O={},w;if(L==="default")for(w=0;w<p.length;w++)O[p[w]]=N.fittingRules[p[w]];else if(L==="full")O={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(L==="fitted")O={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(L==="controlled smushing")O={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(L==="universal smushing")O={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return O},b=function(L,N,p){p=p.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let O=p.split(`
`),w=[],B,nt,tt;for(nt=O.length,B=0;B<nt;B++)w=w.concat(J(O[B],c[L],N));for(nt=w.length,tt=w[0],B=1;B<nt;B++)tt=mt(tt,w[B],N);return tt?tt.join(`
`):""};function Q(L,N){let p=JSON.parse(JSON.stringify(L)),O,w;if(typeof N.horizontalLayout<"u"){O=it(N.horizontalLayout,L);for(w in O)O.hasOwnProperty(w)&&(p.fittingRules[w]=O[w])}if(typeof N.verticalLayout<"u"){O=St(N.verticalLayout,L);for(w in O)O.hasOwnProperty(w)&&(p.fittingRules[w]=O[w])}return p.printDirection=typeof N.printDirection<"u"?N.printDirection:L.printDirection,p.showHardBlanks=N.showHardBlanks||!1,p.width=N.width||-1,p.whitespaceBreak=N.whitespaceBreak||!1,p}const F=function(L,N,p){return F.text(L,N,p)};return F.text=async function(L,N,p){let O="";return L=L+"",typeof arguments[1]=="function"&&(p=N,N={},N.font=d.font),typeof N=="string"?(O=N,N={}):(N=N||{},O=N.font||d.font),await new Promise((w,B)=>{F.loadFont(O,function(nt,tt){if(nt){B(nt),p&&p(nt);return}const P=b(O,Q(tt,N),L);w(P),p&&p(null,P)})})},F.textSync=function(L,N){let p="";L=L+"",typeof N=="string"?(p=N,N={}):(N=N||{},p=N.font||d.font);var O=Q(F.loadFontSync(p),N);return b(p,O,L)},F.metadata=function(L,N){return L=L+"",new Promise(function(p,O){F.loadFont(L,function(w,B){if(w){N&&N(w),O(w);return}N&&N(null,B,c[L].comment),p([B,c[L].comment])})})},F.defaults=function(L){if(typeof L=="object"&&L!==null)for(var N in L)L.hasOwnProperty(N)&&(d[N]=L[N]);return JSON.parse(JSON.stringify(d))},F.parseFont=function(L,N){N=N.replace(/\r\n/g,`
`).replace(/\r/g,`
`),c[L]={};var p=N.split(`
`),O=p.splice(0,1)[0].split(" "),w=c[L],B={};if(B.hardBlank=O[0].substr(5,1),B.height=parseInt(O[1],10),B.baseline=parseInt(O[2],10),B.maxLength=parseInt(O[3],10),B.oldLayout=parseInt(O[4],10),B.numCommentLines=parseInt(O[5],10),B.printDirection=O.length>=6?parseInt(O[6],10):0,B.fullLayout=O.length>=7?parseInt(O[7],10):null,B.codeTagCount=O.length>=8?parseInt(O[8],10):null,B.fittingRules=T(B.oldLayout,B.fullLayout),w.options=B,B.hardBlank.length!==1||isNaN(B.height)||isNaN(B.baseline)||isNaN(B.maxLength)||isNaN(B.oldLayout)||isNaN(B.numCommentLines))throw new Error("FIGlet header contains invalid values.");let nt=[],tt;for(tt=32;tt<=126;tt++)nt.push(tt);if(nt=nt.concat(196,214,220,228,246,252,223),p.length<B.numCommentLines+B.height*nt.length)throw new Error("FIGlet file is missing data.");let P,ut,bt=!1;for(w.comment=p.splice(0,B.numCommentLines).join(`
`),w.numChars=0;p.length>0&&w.numChars<nt.length;){for(P=nt[w.numChars],w[P]=p.splice(0,B.height),tt=0;tt<B.height;tt++)typeof w[P][tt]>"u"?w[P][tt]="":(ut=new RegExp("\\"+w[P][tt].substr(w[P][tt].length-1,1)+"+$"),w[P][tt]=w[P][tt].replace(ut,""));w.numChars++}for(;p.length>0;){if(P=p.splice(0,1)[0].split(" ")[0],/^-?0[xX][0-9a-fA-F]+$/.test(P))P=parseInt(P,16);else if(/^-?0[0-7]+$/.test(P))P=parseInt(P,8);else if(/^-?[0-9]+$/.test(P))P=parseInt(P,10);else{if(P==="")break;console.log("Invalid data:"+P),bt=!0;break}if(P==-1){console.log("The char code -1 is not permitted."),bt=!0;break}else if(P<-2147483648){console.log("The char code cannot be less than -2147483648."),bt=!0;break}else if(P>2147483647){console.log("The char code cannot be greater than 2147483647."),bt=!0;break}for(w[P]=p.splice(0,B.height),tt=0;tt<B.height;tt++)typeof w[P][tt]>"u"?w[P][tt]="":(ut=new RegExp("\\"+w[P][tt].substr(w[P][tt].length-1,1)+"+$"),w[P][tt]=w[P][tt].replace(ut,""));w.numChars++}if(bt===!0)throw new Error("Error parsing data.");return B},F.loadFont=function(L,N){if(c[L])return N&&N(null,c[L].options),Promise.resolve();if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");return fetch(d.fontPath+"/"+L+".flf").then(function(p){if(p.ok)return p.text();throw console.log("Unexpected response",p),new Error("Network response was not ok.")}).then(function(p){N&&N(null,F.parseFont(L,p))}).catch(N)},F.loadFontSync=function(L){if(c[L])return c[L].options;throw new Error("synchronous font loading is not implemented for the browser")},F.preloadFonts=function(L,N){let p=[];return L.reduce(function(O,w){return O.then(function(){return fetch(d.fontPath+"/"+w+".flf").then(B=>B.text()).then(function(B){p.push(B)})})},Promise.resolve()).then(function(O){for(var w in L)L.hasOwnProperty(w)&&F.parseFont(L[w],p[w]);N&&N()})},F.figFonts=c,F})();o.exports=n})(gf)),gf.exports}var zv=Dv();const El=x0(zv),Hv=`flf2a$ 7 7 13 0 7 0 64 0
Font Author: ?

More Info:

https://web.archive.org/web/20120819044459/http://www.roysac.com/thedrawfonts-tdf.asp

FIGFont created with: http://patorjk.com/figfont-editor
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@@
██╗@
██║@
██║@
╚═╝@
██╗@
╚═╝@
   @@
@
@
@
@
@
@
@@
 ██╗ ██╗ @
████████╗@
╚██╔═██╔╝@
████████╗@
╚██╔═██╔╝@
 ╚═╝ ╚═╝ @
         @@
▄▄███▄▄·@
██╔════╝@
███████╗@
╚════██║@
███████║@
╚═▀▀▀══╝@
        @@
██╗ ██╗@
╚═╝██╔╝@
  ██╔╝ @
 ██╔╝  @
██╔╝██╗@
╚═╝ ╚═╝@
       @@
   ██╗   @
   ██║   @
████████╗@
██╔═██╔═╝@
██████║  @
╚═════╝  @
         @@
@
@
@
@
@
@
@@
 ██╗@
██╔╝@
██║ @
██║ @
╚██╗@
 ╚═╝@
    @@
██╗ @
╚██╗@
 ██║@
 ██║@
██╔╝@
╚═╝ @
    @@
      @
▄ ██╗▄@
 ████╗@
▀╚██╔▀@
  ╚═╝ @
      @
      @@
@
@
@
@
@
@
@@
   @
   @
   @
   @
▄█╗@
╚═╝@
   @@
      @
      @
█████╗@
╚════╝@
      @
      @
      @@
   @
   @
   @
   @
██╗@
╚═╝@
   @@
    ██╗@
   ██╔╝@
  ██╔╝ @
 ██╔╝  @
██╔╝   @
╚═╝    @
       @@
 ██████╗ @
██╔═████╗@
██║██╔██║@
████╔╝██║@
╚██████╔╝@
 ╚═════╝ @
         @@
 ██╗@
███║@
╚██║@
 ██║@
 ██║@
 ╚═╝@
    @@
██████╗ @
╚════██╗@
 █████╔╝@
██╔═══╝ @
███████╗@
╚══════╝@
        @@
██████╗ @
╚════██╗@
 █████╔╝@
 ╚═══██╗@
██████╔╝@
╚═════╝ @
        @@
██╗  ██╗@
██║  ██║@
███████║@
╚════██║@
     ██║@
     ╚═╝@
        @@
███████╗@
██╔════╝@
███████╗@
╚════██║@
███████║@
╚══════╝@
        @@
 ██████╗ @
██╔════╝ @
███████╗ @
██╔═══██╗@
╚██████╔╝@
 ╚═════╝ @
         @@
███████╗@
╚════██║@
    ██╔╝@
   ██╔╝ @
   ██║  @
   ╚═╝  @
        @@
 █████╗ @
██╔══██╗@
╚█████╔╝@
██╔══██╗@
╚█████╔╝@
 ╚════╝ @
        @@
 █████╗ @
██╔══██╗@
╚██████║@
 ╚═══██║@
 █████╔╝@
 ╚════╝ @
        @@
   @
██╗@
╚═╝@
██╗@
╚═╝@
   @
   @@
   @
██╗@
╚═╝@
▄█╗@
▀═╝@
   @
   @@
  ██╗@
 ██╔╝@
██╔╝ @
╚██╗ @
 ╚██╗@
  ╚═╝@
     @@
@
@
@
@
@
@
@@
██╗  @
╚██╗ @
 ╚██╗@
 ██╔╝@
██╔╝ @
╚═╝  @
     @@
██████╗ @
╚════██╗@
  ▄███╔╝@
  ▀▀══╝ @
  ██╗   @
  ╚═╝   @
        @@
 ██████╗ @
██╔═══██╗@
██║██╗██║@
██║██║██║@
╚█║████╔╝@
 ╚╝╚═══╝ @
         @@
 █████╗ @
██╔══██╗@
███████║@
██╔══██║@
██║  ██║@
╚═╝  ╚═╝@
        @@
██████╗ @
██╔══██╗@
██████╔╝@
██╔══██╗@
██████╔╝@
╚═════╝ @
        @@
 ██████╗@
██╔════╝@
██║     @
██║     @
╚██████╗@
 ╚═════╝@
        @@
██████╗ @
██╔══██╗@
██║  ██║@
██║  ██║@
██████╔╝@
╚═════╝ @
        @@
███████╗@
██╔════╝@
█████╗  @
██╔══╝  @
███████╗@
╚══════╝@
        @@
███████╗@
██╔════╝@
█████╗  @
██╔══╝  @
██║     @
╚═╝     @
        @@
 ██████╗ @
██╔════╝ @
██║  ███╗@
██║   ██║@
╚██████╔╝@
 ╚═════╝ @
         @@
██╗  ██╗@
██║  ██║@
███████║@
██╔══██║@
██║  ██║@
╚═╝  ╚═╝@
        @@
██╗@
██║@
██║@
██║@
██║@
╚═╝@
   @@
     ██╗@
     ██║@
     ██║@
██   ██║@
╚█████╔╝@
 ╚════╝ @
        @@
██╗  ██╗@
██║ ██╔╝@
█████╔╝ @
██╔═██╗ @
██║  ██╗@
╚═╝  ╚═╝@
        @@
██╗     @
██║     @
██║     @
██║     @
███████╗@
╚══════╝@
        @@
███╗   ███╗@
████╗ ████║@
██╔████╔██║@
██║╚██╔╝██║@
██║ ╚═╝ ██║@
╚═╝     ╚═╝@
           @@
███╗   ██╗@
████╗  ██║@
██╔██╗ ██║@
██║╚██╗██║@
██║ ╚████║@
╚═╝  ╚═══╝@
          @@
 ██████╗ @
██╔═══██╗@
██║   ██║@
██║   ██║@
╚██████╔╝@
 ╚═════╝ @
         @@
██████╗ @
██╔══██╗@
██████╔╝@
██╔═══╝ @
██║     @
╚═╝     @
        @@
 ██████╗ @
██╔═══██╗@
██║   ██║@
██║▄▄ ██║@
╚██████╔╝@
 ╚══▀▀═╝ @
         @@
██████╗ @
██╔══██╗@
██████╔╝@
██╔══██╗@
██║  ██║@
╚═╝  ╚═╝@
        @@
███████╗@
██╔════╝@
███████╗@
╚════██║@
███████║@
╚══════╝@
        @@
████████╗@
╚══██╔══╝@
   ██║   @
   ██║   @
   ██║   @
   ╚═╝   @
         @@
██╗   ██╗@
██║   ██║@
██║   ██║@
██║   ██║@
╚██████╔╝@
 ╚═════╝ @
         @@
██╗   ██╗@
██║   ██║@
██║   ██║@
╚██╗ ██╔╝@
 ╚████╔╝ @
  ╚═══╝  @
         @@
██╗    ██╗@
██║    ██║@
██║ █╗ ██║@
██║███╗██║@
╚███╔███╔╝@
 ╚══╝╚══╝ @
          @@
██╗  ██╗@
╚██╗██╔╝@
 ╚███╔╝ @
 ██╔██╗ @
██╔╝ ██╗@
╚═╝  ╚═╝@
        @@
██╗   ██╗@
╚██╗ ██╔╝@
 ╚████╔╝ @
  ╚██╔╝  @
   ██║   @
   ╚═╝   @
         @@
███████╗@
╚══███╔╝@
  ███╔╝ @
 ███╔╝  @
███████╗@
╚══════╝@
        @@
███╗@
██╔╝@
██║ @
██║ @
███╗@
╚══╝@
    @@
@
@
@
@
@
@
@@
███╗@
╚██║@
 ██║@
 ██║@
███║@
╚══╝@
    @@
 ███╗ @
██╔██╗@
╚═╝╚═╝@
      @
      @
      @
      @@
        @
        @
        @
        @
███████╗@
╚══════╝@
        @@
@
@
@
@
@
@
@@
 █████╗ @
██╔══██╗@
███████║@
██╔══██║@
██║  ██║@
╚═╝  ╚═╝@
        @@
██████╗ @
██╔══██╗@
██████╔╝@
██╔══██╗@
██████╔╝@
╚═════╝ @
        @@
 ██████╗@
██╔════╝@
██║     @
██║     @
╚██████╗@
 ╚═════╝@
        @@
██████╗ @
██╔══██╗@
██║  ██║@
██║  ██║@
██████╔╝@
╚═════╝ @
        @@
███████╗@
██╔════╝@
█████╗  @
██╔══╝  @
███████╗@
╚══════╝@
        @@
███████╗@
██╔════╝@
█████╗  @
██╔══╝  @
██║     @
╚═╝     @
        @@
 ██████╗ @
██╔════╝ @
██║  ███╗@
██║   ██║@
╚██████╔╝@
 ╚═════╝ @
         @@
██╗  ██╗@
██║  ██║@
███████║@
██╔══██║@
██║  ██║@
╚═╝  ╚═╝@
        @@
██╗@
██║@
██║@
██║@
██║@
╚═╝@
   @@
     ██╗@
     ██║@
     ██║@
██   ██║@
╚█████╔╝@
 ╚════╝ @
        @@
██╗  ██╗@
██║ ██╔╝@
█████╔╝ @
██╔═██╗ @
██║  ██╗@
╚═╝  ╚═╝@
        @@
██╗     @
██║     @
██║     @
██║     @
███████╗@
╚══════╝@
        @@
███╗   ███╗@
████╗ ████║@
██╔████╔██║@
██║╚██╔╝██║@
██║ ╚═╝ ██║@
╚═╝     ╚═╝@
           @@
███╗   ██╗@
████╗  ██║@
██╔██╗ ██║@
██║╚██╗██║@
██║ ╚████║@
╚═╝  ╚═══╝@
          @@
 ██████╗ @
██╔═══██╗@
██║   ██║@
██║   ██║@
╚██████╔╝@
 ╚═════╝ @
         @@
██████╗ @
██╔══██╗@
██████╔╝@
██╔═══╝ @
██║     @
╚═╝     @
        @@
 ██████╗ @
██╔═══██╗@
██║   ██║@
██║▄▄ ██║@
╚██████╔╝@
 ╚══▀▀═╝ @
         @@
██████╗ @
██╔══██╗@
██████╔╝@
██╔══██╗@
██║  ██║@
╚═╝  ╚═╝@
        @@
███████╗@
██╔════╝@
███████╗@
╚════██║@
███████║@
╚══════╝@
        @@
████████╗@
╚══██╔══╝@
   ██║   @
   ██║   @
   ██║   @
   ╚═╝   @
         @@
██╗   ██╗@
██║   ██║@
██║   ██║@
██║   ██║@
╚██████╔╝@
 ╚═════╝ @
         @@
██╗   ██╗@
██║   ██║@
██║   ██║@
╚██╗ ██╔╝@
 ╚████╔╝ @
  ╚═══╝  @
         @@
██╗    ██╗@
██║    ██║@
██║ █╗ ██║@
██║███╗██║@
╚███╔███╔╝@
 ╚══╝╚══╝ @
          @@
██╗  ██╗@
╚██╗██╔╝@
 ╚███╔╝ @
 ██╔██╗ @
██╔╝ ██╗@
╚═╝  ╚═╝@
        @@
██╗   ██╗@
╚██╗ ██╔╝@
 ╚████╔╝ @
  ╚██╔╝  @
   ██║   @
   ╚═╝   @
         @@
███████╗@
╚══███╔╝@
  ███╔╝ @
 ███╔╝  @
███████╗@
╚══════╝@
        @@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@`,Uv=`flf2a$ 22 21 28 -1 27

                  Alpha font by Lennert Stock
                 =============================


-> Conversion to FigLet font by MEPH. (Part of ASCII Editor Service Pack I)
   (http://studenten.freepage.de/meph/ascii/ascii/editor/_index.htm)
-> Defined: ASCII code alphabet
-> Uppercase characters only.

                                          __________________
                    __ :|                |                  |
                   |__|:|   .---.        | Lennert Stock    |
                   :::::|  /  oo|        | UvA/FWI          |
                 ::'____|=' ( _\\|        | stock@fwi.uva.nl |
                :::|_ __| \`-----' -======:__________________|
                     |__|
                        |

For extra effects try to close the gap between the letters, or use different
fill patterns.

---

Font modified June 17, 2007 by patorjk 
This was to widen the space character.

$      $@
$      $@
$      $@
$      $@
$      $@
$      $@
$      $@
$      $@
$      $@
$      $@
$      $@
$      $@
$      $@
$      $@
$      $@
$      $@
$      $@
$      $@
$      $@
$      $@
$      $@
$      $@@
         /\\         @
        /  \\        @
       /    \\       @
      /      \\      @
     /        \\     @
    /          \\    @
   /            \\   @
  /              \\  @
 /     Lennert    \\ @
/       Stock      \\@
\\       1994       /@
 \\                / @
  \\              /  @
   \\            /   @
    \\          /    @
     \\        /     @
      \\      /      @
       \\    /       @
        \\  /        @
         \\/         @
                    @
                    @@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/__\\:::\\    \\    @
   /::::\\   \\:::\\    \\   @
  /::::::\\   \\:::\\    \\  @
 /:::/\\:::\\   \\:::\\    \\ @
/:::/  \\:::\\   \\:::\\____\\@
\\::/    \\:::\\  /:::/    /@
 \\/____/ \\:::\\/:::/    / @
          \\::::::/    /  @
           \\::::/    /   @
           /:::/    /    @
          /:::/    /     @
         /:::/    /      @
        /:::/    /       @
        \\::/    /        @
         \\/____/         @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/__\\:::\\    \\    @
   /::::\\   \\:::\\    \\   @
  /::::::\\   \\:::\\    \\  @
 /:::/\\:::\\   \\:::\\ ___\\ @
/:::/__\\:::\\   \\:::|    |@
\\:::\\   \\:::\\  /:::|____|@
 \\:::\\   \\:::\\/:::/    / @
  \\:::\\   \\::::::/    /  @
   \\:::\\   \\::::/    /   @
    \\:::\\  /:::/    /    @
     \\:::\\/:::/    /     @
      \\::::::/    /      @
       \\::::/    /       @
        \\::/____/        @
         ~~              @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/  \\:::\\    \\    @
   /:::/    \\:::\\    \\   @
  /:::/    / \\:::\\    \\  @
 /:::/    /   \\:::\\    \\ @
/:::/____/     \\:::\\____\\@
\\:::\\    \\      \\::/    /@
 \\:::\\    \\      \\/____/ @
  \\:::\\    \\             @
   \\:::\\    \\            @
    \\:::\\    \\           @
     \\:::\\    \\          @
      \\:::\\    \\         @
       \\:::\\____\\        @
        \\::/    /        @
         \\/____/         @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/  \\:::\\    \\    @
   /:::/    \\:::\\    \\   @
  /:::/    / \\:::\\    \\  @
 /:::/    /   \\:::\\ ___\\ @
/:::/____/     \\:::|    |@
\\:::\\    \\     /:::|____|@
 \\:::\\    \\   /:::/    / @
  \\:::\\    \\ /:::/    /  @
   \\:::\\    /:::/    /   @
    \\:::\\  /:::/    /    @
     \\:::\\/:::/    /     @
      \\::::::/    /      @
       \\::::/    /       @
        \\::/____/        @
         ~~              @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/__\\:::\\    \\    @
   /::::\\   \\:::\\    \\   @
  /::::::\\   \\:::\\    \\  @
 /:::/\\:::\\   \\:::\\    \\ @
/:::/__\\:::\\   \\:::\\____\\@
\\:::\\   \\:::\\   \\::/    /@
 \\:::\\   \\:::\\   \\/____/ @
  \\:::\\   \\:::\\    \\     @
   \\:::\\   \\:::\\____\\    @
    \\:::\\   \\::/    /    @
     \\:::\\   \\/____/     @
      \\:::\\    \\         @
       \\:::\\____\\        @
        \\::/    /        @
         \\/____/         @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/__\\:::\\    \\    @
   /::::\\   \\:::\\    \\   @
  /::::::\\   \\:::\\    \\  @
 /:::/\\:::\\   \\:::\\    \\ @
/:::/  \\:::\\   \\:::\\____\\@
\\::/    \\:::\\   \\::/    /@
 \\/____/ \\:::\\   \\/____/ @
          \\:::\\    \\     @
           \\:::\\____\\    @
            \\::/    /    @
             \\/____/     @
                         @
                         @
                         @
                         @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/  \\:::\\    \\    @
   /:::/    \\:::\\    \\   @
  /:::/    / \\:::\\    \\  @
 /:::/    /   \\:::\\ ___\\ @
/:::/____/  ___\\:::|    |@
\\:::\\    \\ /\\  /:::|____|@
 \\:::\\    /::\\ \\::/    / @
  \\:::\\   \\:::\\ \\/____/  @
   \\:::\\   \\:::\\____\\    @
    \\:::\\  /:::/    /    @
     \\:::\\/:::/    /     @
      \\::::::/    /      @
       \\::::/    /       @
        \\::/____/        @
                         @
                         @@
          _____          @
         /\\    \\         @
        /::\\____\\        @
       /:::/    /        @
      /:::/    /         @
     /:::/    /          @
    /:::/____/           @
   /::::\\    \\           @
  /::::::\\    \\   _____  @
 /:::/\\:::\\    \\ /\\    \\ @
/:::/  \\:::\\    /::\\____\\@
\\::/    \\:::\\  /:::/    /@
 \\/____/ \\:::\\/:::/    / @
          \\::::::/    /  @
           \\::::/    /   @
           /:::/    /    @
          /:::/    /     @
         /:::/    /      @
        /:::/    /       @
        \\::/    /        @
         \\/____/         @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
        \\:::\\    \\       @
         \\:::\\    \\      @
          \\:::\\    \\     @
           \\:::\\    \\    @
           /::::\\    \\   @
  ____    /::::::\\    \\  @
 /\\   \\  /:::/\\:::\\    \\ @
/::\\   \\/:::/  \\:::\\____\\@
\\:::\\  /:::/    \\::/    /@
 \\:::\\/:::/    / \\/____/ @
  \\::::::/    /          @
   \\::::/____/           @
    \\:::\\    \\           @
     \\:::\\    \\          @
      \\:::\\    \\         @
       \\:::\\____\\        @
        \\::/    /        @
         \\/____/         @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
        \\:::\\    \\       @
         \\:::\\    \\      @
          \\:::\\    \\     @
           \\:::\\    \\    @
           /::::\\    \\   @
  _____   /::::::\\    \\  @
 /\\    \\ /:::/\\:::\\    \\ @
/::\\    /:::/  \\:::\\____\\@
\\:::\\  /:::/    \\::/    /@
 \\:::\\/:::/    / \\/____/ @
  \\::::::/    /          @
   \\::::/    /           @
    \\::/    /            @
     \\/____/             @
                         @
                         @
                         @
                         @
                         @@
          _____          @
         /\\    \\         @
        /::\\____\\        @
       /:::/    /        @
      /:::/    /         @
     /:::/    /          @
    /:::/____/           @
   /::::\\    \\           @
  /::::::\\____\\________  @
 /:::/\\:::::::::::\\    \\ @
/:::/  |:::::::::::\\____\\@
\\::/   |::|~~~|~~~~~     @
 \\/____|::|   |          @
       |::|   |          @
       |::|   |          @
       |::|   |          @
       |::|   |          @
       |::|   |          @
       \\::|   |          @
        \\:|   |          @
         \\|___|          @
                         @@
          _____  @
         /\\    \\ @
        /::\\____\\@
       /:::/    /@
      /:::/    / @
     /:::/    /  @
    /:::/    /   @
   /:::/    /    @
  /:::/    /     @
 /:::/    /      @
/:::/____/       @
\\:::\\    \\       @
 \\:::\\    \\      @
  \\:::\\    \\     @
   \\:::\\    \\    @
    \\:::\\    \\   @
     \\:::\\    \\  @
      \\:::\\    \\ @
       \\:::\\____\\@
        \\::/    /@
         \\/____/ @
                 @@
          _____          @
         /\\    \\         @
        /::\\____\\        @
       /::::|   |        @
      /:::::|   |        @
     /::::::|   |        @
    /:::/|::|   |        @
   /:::/ |::|   |        @
  /:::/  |::|___|______  @
 /:::/   |::::::::\\    \\ @
/:::/    |:::::::::\\____\\@
\\::/    / ~~~~~/:::/    /@
 \\/____/      /:::/    / @
             /:::/    /  @
            /:::/    /   @
           /:::/    /    @
          /:::/    /     @
         /:::/    /      @
        /:::/    /       @
        \\::/    /        @
         \\/____/         @
                         @@
          _____          @
         /\\    \\         @
        /::\\____\\        @
       /::::|   |        @
      /:::::|   |        @
     /::::::|   |        @
    /:::/|::|   |        @
   /:::/ |::|   |        @
  /:::/  |::|   | _____  @
 /:::/   |::|   |/\\    \\ @
/:: /    |::|   /::\\____\\@
\\::/    /|::|  /:::/    /@
 \\/____/ |::| /:::/    / @
         |::|/:::/    /  @
         |::::::/    /   @
         |:::::/    /    @
         |::::/    /     @
         /:::/    /      @
        /:::/    /       @
        \\::/    /        @
         \\/____/         @
                         @@
         _______         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /::::::::\\    \\     @
    /:::/~~\\:::\\    \\    @
   /:::/    \\:::\\    \\   @
  /:::/    / \\:::\\    \\  @
 /:::/____/   \\:::\\____\\ @
|:::|    |     |:::|    |@
|:::|____|     |:::|    |@
 \\:::\\    \\   /:::/    / @
  \\:::\\    \\ /:::/    /  @
   \\:::\\    /:::/    /   @
    \\:::\\__/:::/    /    @
     \\::::::::/    /     @
      \\::::::/    /      @
       \\::::/    /       @
        \\::/____/        @
         ~~              @
                         @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/__\\:::\\    \\    @
   /::::\\   \\:::\\    \\   @
  /::::::\\   \\:::\\    \\  @
 /:::/\\:::\\   \\:::\\____\\ @
/:::/  \\:::\\   \\:::|    |@
\\::/    \\:::\\  /:::|____|@
 \\/_____/\\:::\\/:::/    / @
          \\::::::/    /  @
           \\::::/    /   @
            \\::/____/    @
             ~~          @
                         @
                         @
                         @
                         @
                         @@
         _______         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /::::::::\\    \\     @
    /:::/~~\\:::\\    \\    @
   /:::/    \\:::\\    \\   @
  /:::/    / \\:::\\    \\  @
 /:::/____/   \\:::\\____\\ @
|:::|    |     |:::|    |@
|:::|____|     |:::|____|@
 \\:::\\   _\\___/:::/    / @
  \\:::\\ |::| /:::/    /  @
   \\:::\\|::|/:::/    /   @
    \\::::::::::/    /    @
     \\::::::::/    /     @
      \\::::::/    /      @
       \\::::/____/       @
        |::|    |        @
        |::|____|        @
         ~~              @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/__\\:::\\    \\    @
   /::::\\   \\:::\\    \\   @
  /::::::\\   \\:::\\    \\  @
 /:::/\\:::\\   \\:::\\____\\ @
/:::/  \\:::\\   \\:::|    |@
\\::/   |::::\\  /:::|____|@
 \\/____|:::::\\/:::/    / @
       |:::::::::/    /  @
       |::|\\::::/    /   @
       |::| \\::/____/    @
       |::|  ~|          @
       |::|   |          @
       \\::|   |          @
        \\:|   |          @
         \\|___|          @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/__\\:::\\    \\    @
    \\:::\\   \\:::\\    \\   @
  ___\\:::\\   \\:::\\    \\  @
 /\\   \\:::\\   \\:::\\    \\ @
/::\\   \\:::\\   \\:::\\____\\@
\\:::\\   \\:::\\   \\::/    /@
 \\:::\\   \\:::\\   \\/____/ @
  \\:::\\   \\:::\\    \\     @
   \\:::\\   \\:::\\____\\    @
    \\:::\\  /:::/    /    @
     \\:::\\/:::/    /     @
      \\::::::/    /      @
       \\::::/    /       @
        \\::/    /        @
         \\/____/         @
                         @@
      _____          @
     /\\    \\         @
    /::\\    \\        @
    \\:::\\    \\       @
     \\:::\\    \\      @
      \\:::\\    \\     @
       \\:::\\    \\    @
       /::::\\    \\   @
      /::::::\\    \\  @
     /:::/\\:::\\    \\ @
    /:::/  \\:::\\____\\@
   /:::/    \\::/    /@
  /:::/    / \\/____/ @
 /:::/    /          @
/:::/    /           @
\\::/    /            @
 \\/____/             @
                     @
                     @
                     @
                     @
                     @@
          _____          @
         /\\    \\         @
        /::\\____\\        @
       /:::/    /        @
      /:::/    /         @
     /:::/    /          @
    /:::/    /           @
   /:::/    /            @
  /:::/    /      _____  @
 /:::/____/      /\\    \\ @
|:::|    /      /::\\____\\@
|:::|____\\     /:::/    /@
 \\:::\\    \\   /:::/    / @
  \\:::\\    \\ /:::/    /  @
   \\:::\\    /:::/    /   @
    \\:::\\__/:::/    /    @
     \\::::::::/    /     @
      \\::::::/    /      @
       \\::::/    /       @
        \\::/____/        @
         ~~              @
                         @@
          _____          @
         /\\    \\         @
        /::\\____\\        @
       /:::/    /        @
      /:::/    /         @
     /:::/    /          @
    /:::/____/           @
    |::|    |            @
    |::|    |     _____  @
    |::|    |    /\\    \\ @
    |::|    |   /::\\____\\@
    |::|    |  /:::/    /@
    |::|    | /:::/    / @
    |::|____|/:::/    /  @
    |:::::::::::/    /   @
    \\::::::::::/____/    @
     ~~~~~~~~~~          @
                         @
                         @
                         @
                         @
                         @@
          _____          @
         /\\    \\         @
        /::\\____\\        @
       /:::/    /        @
      /:::/   _/___      @
     /:::/   /\\    \\     @
    /:::/   /::\\____\\    @
   /:::/   /:::/    /    @
  /:::/   /:::/   _/___  @
 /:::/___/:::/   /\\    \\ @
|:::|   /:::/   /::\\____\\@
|:::|__/:::/   /:::/    /@
 \\:::\\/:::/   /:::/    / @
  \\::::::/   /:::/    /  @
   \\::::/___/:::/    /   @
    \\:::\\__/:::/    /    @
     \\::::::::/    /     @
      \\::::::/    /      @
       \\::::/    /       @
        \\::/____/        @
         ~~              @
                         @@
                        @
        ______          @
       |::|   |         @
       |::|   |         @
       |::|   |         @
       |::|   |         @
       |::|   |         @
       |::|   |         @
       |::|   |         @
 ______|::|___|___ ____ @
|:::::::::::::::::|    |@
|:::::::::::::::::|____|@
 ~~~~~~|::|~~~|~~~      @
       |::|   |         @
       |::|   |         @
       |::|   |         @
       |::|   |         @
       |::|   |         @
       |::|   |         @
       |::|___|         @
        ~~              @
                        @@
      _____          @
     |\\    \\         @
     |:\\____\\        @
     |::|   |        @
     |::|   |        @
     |::|   |        @
     |::|   |        @
     |::|   |        @
     |::|___|______  @
     /::::::::\\    \\ @
    /::::::::::\\____\\@
   /:::/~~~~/~~      @
  /:::/    /         @
 /:::/    /          @
/:::/    /           @
\\::/    /            @
 \\/____/             @
                     @
                     @
                     @
                     @
                     @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
        \\:::\\    \\       @
         \\:::\\    \\      @
          \\:::\\    \\     @
           \\:::\\    \\    @
            \\:::\\    \\   @
             \\:::\\    \\  @
              \\:::\\    \\ @
_______________\\:::\\____\\@
\\::::::::::::::::::/    /@
 \\::::::::::::::::/____/ @
  \\:::\\~~~~\\~~~~~~       @
   \\:::\\    \\            @
    \\:::\\    \\           @
     \\:::\\    \\          @
      \\:::\\    \\         @
       \\:::\\____\\        @
        \\::/    /        @
         \\/____/         @
                         @@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/__\\:::\\    \\    @
   /::::\\   \\:::\\    \\   @
  /::::::\\   \\:::\\    \\  @
 /:::/\\:::\\   \\:::\\    \\ @
/:::/  \\:::\\   \\:::\\____\\@
\\::/    \\:::\\  /:::/    /@
 \\/____/ \\:::\\/:::/    / @
          \\::::::/    /  @
           \\::::/    /   @
           /:::/    /    @
          /:::/    /     @
         /:::/    /      @
        /:::/    /       @
        \\::/    /        @
         \\/____/         @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/__\\:::\\    \\    @
   /::::\\   \\:::\\    \\   @
  /::::::\\   \\:::\\    \\  @
 /:::/\\:::\\   \\:::\\ ___\\ @
/:::/__\\:::\\   \\:::|    |@
\\:::\\   \\:::\\  /:::|____|@
 \\:::\\   \\:::\\/:::/    / @
  \\:::\\   \\::::::/    /  @
   \\:::\\   \\::::/    /   @
    \\:::\\  /:::/    /    @
     \\:::\\/:::/    /     @
      \\::::::/    /      @
       \\::::/    /       @
        \\::/____/        @
         ~~              @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/  \\:::\\    \\    @
   /:::/    \\:::\\    \\   @
  /:::/    / \\:::\\    \\  @
 /:::/    /   \\:::\\    \\ @
/:::/____/     \\:::\\____\\@
\\:::\\    \\      \\::/    /@
 \\:::\\    \\      \\/____/ @
  \\:::\\    \\             @
   \\:::\\    \\            @
    \\:::\\    \\           @
     \\:::\\    \\          @
      \\:::\\    \\         @
       \\:::\\____\\        @
        \\::/    /        @
         \\/____/         @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/  \\:::\\    \\    @
   /:::/    \\:::\\    \\   @
  /:::/    / \\:::\\    \\  @
 /:::/    /   \\:::\\ ___\\ @
/:::/____/     \\:::|    |@
\\:::\\    \\     /:::|____|@
 \\:::\\    \\   /:::/    / @
  \\:::\\    \\ /:::/    /  @
   \\:::\\    /:::/    /   @
    \\:::\\  /:::/    /    @
     \\:::\\/:::/    /     @
      \\::::::/    /      @
       \\::::/    /       @
        \\::/____/        @
         ~~              @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/__\\:::\\    \\    @
   /::::\\   \\:::\\    \\   @
  /::::::\\   \\:::\\    \\  @
 /:::/\\:::\\   \\:::\\    \\ @
/:::/__\\:::\\   \\:::\\____\\@
\\:::\\   \\:::\\   \\::/    /@
 \\:::\\   \\:::\\   \\/____/ @
  \\:::\\   \\:::\\    \\     @
   \\:::\\   \\:::\\____\\    @
    \\:::\\   \\::/    /    @
     \\:::\\   \\/____/     @
      \\:::\\    \\         @
       \\:::\\____\\        @
        \\::/    /        @
         \\/____/         @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/__\\:::\\    \\    @
   /::::\\   \\:::\\    \\   @
  /::::::\\   \\:::\\    \\  @
 /:::/\\:::\\   \\:::\\    \\ @
/:::/  \\:::\\   \\:::\\____\\@
\\::/    \\:::\\   \\::/    /@
 \\/____/ \\:::\\   \\/____/ @
          \\:::\\    \\     @
           \\:::\\____\\    @
            \\::/    /    @
             \\/____/     @
                         @
                         @
                         @
                         @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/  \\:::\\    \\    @
   /:::/    \\:::\\    \\   @
  /:::/    / \\:::\\    \\  @
 /:::/    /   \\:::\\ ___\\ @
/:::/____/  ___\\:::|    |@
\\:::\\    \\ /\\  /:::|____|@
 \\:::\\    /::\\ \\::/    / @
  \\:::\\   \\:::\\ \\/____/  @
   \\:::\\   \\:::\\____\\    @
    \\:::\\  /:::/    /    @
     \\:::\\/:::/    /     @
      \\::::::/    /      @
       \\::::/    /       @
        \\::/____/        @
                         @
                         @@
          _____          @
         /\\    \\         @
        /::\\____\\        @
       /:::/    /        @
      /:::/    /         @
     /:::/    /          @
    /:::/____/           @
   /::::\\    \\           @
  /::::::\\    \\   _____  @
 /:::/\\:::\\    \\ /\\    \\ @
/:::/  \\:::\\    /::\\____\\@
\\::/    \\:::\\  /:::/    /@
 \\/____/ \\:::\\/:::/    / @
          \\::::::/    /  @
           \\::::/    /   @
           /:::/    /    @
          /:::/    /     @
         /:::/    /      @
        /:::/    /       @
        \\::/    /        @
         \\/____/         @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
        \\:::\\    \\       @
         \\:::\\    \\      @
          \\:::\\    \\     @
           \\:::\\    \\    @
           /::::\\    \\   @
  ____    /::::::\\    \\  @
 /\\   \\  /:::/\\:::\\    \\ @
/::\\   \\/:::/  \\:::\\____\\@
\\:::\\  /:::/    \\::/    /@
 \\:::\\/:::/    / \\/____/ @
  \\::::::/    /          @
   \\::::/____/           @
    \\:::\\    \\           @
     \\:::\\    \\          @
      \\:::\\    \\         @
       \\:::\\____\\        @
        \\::/    /        @
         \\/____/         @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
        \\:::\\    \\       @
         \\:::\\    \\      @
          \\:::\\    \\     @
           \\:::\\    \\    @
           /::::\\    \\   @
  _____   /::::::\\    \\  @
 /\\    \\ /:::/\\:::\\    \\ @
/::\\    /:::/  \\:::\\____\\@
\\:::\\  /:::/    \\::/    /@
 \\:::\\/:::/    / \\/____/ @
  \\::::::/    /          @
   \\::::/    /           @
    \\::/    /            @
     \\/____/             @
                         @
                         @
                         @
                         @
                         @@
          _____          @
         /\\    \\         @
        /::\\____\\        @
       /:::/    /        @
      /:::/    /         @
     /:::/    /          @
    /:::/____/           @
   /::::\\    \\           @
  /::::::\\____\\________  @
 /:::/\\:::::::::::\\    \\ @
/:::/  |:::::::::::\\____\\@
\\::/   |::|~~~|~~~~~     @
 \\/____|::|   |          @
       |::|   |          @
       |::|   |          @
       |::|   |          @
       |::|   |          @
       |::|   |          @
       \\::|   |          @
        \\:|   |          @
         \\|___|          @
                         @@
          _____  @
         /\\    \\ @
        /::\\____\\@
       /:::/    /@
      /:::/    / @
     /:::/    /  @
    /:::/    /   @
   /:::/    /    @
  /:::/    /     @
 /:::/    /      @
/:::/____/       @
\\:::\\    \\       @
 \\:::\\    \\      @
  \\:::\\    \\     @
   \\:::\\    \\    @
    \\:::\\    \\   @
     \\:::\\    \\  @
      \\:::\\    \\ @
       \\:::\\____\\@
        \\::/    /@
         \\/____/ @
                 @@
          _____          @
         /\\    \\         @
        /::\\____\\        @
       /::::|   |        @
      /:::::|   |        @
     /::::::|   |        @
    /:::/|::|   |        @
   /:::/ |::|   |        @
  /:::/  |::|___|______  @
 /:::/   |::::::::\\    \\ @
/:::/    |:::::::::\\____\\@
\\::/    / ~~~~~/:::/    /@
 \\/____/      /:::/    / @
             /:::/    /  @
            /:::/    /   @
           /:::/    /    @
          /:::/    /     @
         /:::/    /      @
        /:::/    /       @
        \\::/    /        @
         \\/____/         @
                         @@
          _____          @
         /\\    \\         @
        /::\\____\\        @
       /::::|   |        @
      /:::::|   |        @
     /::::::|   |        @
    /:::/|::|   |        @
   /:::/ |::|   |        @
  /:::/  |::|   | _____  @
 /:::/   |::|   |/\\    \\ @
/:: /    |::|   /::\\____\\@
\\::/    /|::|  /:::/    /@
 \\/____/ |::| /:::/    / @
         |::|/:::/    /  @
         |::::::/    /   @
         |:::::/    /    @
         |::::/    /     @
         /:::/    /      @
        /:::/    /       @
        \\::/    /        @
         \\/____/         @
                         @@
         _______         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /::::::::\\    \\     @
    /:::/~~\\:::\\    \\    @
   /:::/    \\:::\\    \\   @
  /:::/    / \\:::\\    \\  @
 /:::/____/   \\:::\\____\\ @
|:::|    |     |:::|    |@
|:::|____|     |:::|    |@
 \\:::\\    \\   /:::/    / @
  \\:::\\    \\ /:::/    /  @
   \\:::\\    /:::/    /   @
    \\:::\\__/:::/    /    @
     \\::::::::/    /     @
      \\::::::/    /      @
       \\::::/    /       @
        \\::/____/        @
         ~~              @
                         @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/__\\:::\\    \\    @
   /::::\\   \\:::\\    \\   @
  /::::::\\   \\:::\\    \\  @
 /:::/\\:::\\   \\:::\\____\\ @
/:::/  \\:::\\   \\:::|    |@
\\::/    \\:::\\  /:::|____|@
 \\/_____/\\:::\\/:::/    / @
          \\::::::/    /  @
           \\::::/    /   @
            \\::/____/    @
             ~~          @
                         @
                         @
                         @
                         @
                         @@
         _______         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /::::::::\\    \\     @
    /:::/~~\\:::\\    \\    @
   /:::/    \\:::\\    \\   @
  /:::/    / \\:::\\    \\  @
 /:::/____/   \\:::\\____\\ @
|:::|    |     |:::|    |@
|:::|____|     |:::|____|@
 \\:::\\   _\\___/:::/    / @
  \\:::\\ |::| /:::/    /  @
   \\:::\\|::|/:::/    /   @
    \\::::::::::/    /    @
     \\::::::::/    /     @
      \\::::::/    /      @
       \\::::/____/       @
        |::|    |        @
        |::|____|        @
         ~~              @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/__\\:::\\    \\    @
   /::::\\   \\:::\\    \\   @
  /::::::\\   \\:::\\    \\  @
 /:::/\\:::\\   \\:::\\____\\ @
/:::/  \\:::\\   \\:::|    |@
\\::/   |::::\\  /:::|____|@
 \\/____|:::::\\/:::/    / @
       |:::::::::/    /  @
       |::|\\::::/    /   @
       |::| \\::/____/    @
       |::|  ~|          @
       |::|   |          @
       \\::|   |          @
        \\:|   |          @
         \\|___|          @
                         @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
       /::::\\    \\       @
      /::::::\\    \\      @
     /:::/\\:::\\    \\     @
    /:::/__\\:::\\    \\    @
    \\:::\\   \\:::\\    \\   @
  ___\\:::\\   \\:::\\    \\  @
 /\\   \\:::\\   \\:::\\    \\ @
/::\\   \\:::\\   \\:::\\____\\@
\\:::\\   \\:::\\   \\::/    /@
 \\:::\\   \\:::\\   \\/____/ @
  \\:::\\   \\:::\\    \\     @
   \\:::\\   \\:::\\____\\    @
    \\:::\\  /:::/    /    @
     \\:::\\/:::/    /     @
      \\::::::/    /      @
       \\::::/    /       @
        \\::/    /        @
         \\/____/         @
                         @@
      _____          @
     /\\    \\         @
    /::\\    \\        @
    \\:::\\    \\       @
     \\:::\\    \\      @
      \\:::\\    \\     @
       \\:::\\    \\    @
       /::::\\    \\   @
      /::::::\\    \\  @
     /:::/\\:::\\    \\ @
    /:::/  \\:::\\____\\@
   /:::/    \\::/    /@
  /:::/    / \\/____/ @
 /:::/    /          @
/:::/    /           @
\\::/    /            @
 \\/____/             @
                     @
                     @
                     @
                     @
                     @@
          _____          @
         /\\    \\         @
        /::\\____\\        @
       /:::/    /        @
      /:::/    /         @
     /:::/    /          @
    /:::/    /           @
   /:::/    /            @
  /:::/    /      _____  @
 /:::/____/      /\\    \\ @
|:::|    /      /::\\____\\@
|:::|____\\     /:::/    /@
 \\:::\\    \\   /:::/    / @
  \\:::\\    \\ /:::/    /  @
   \\:::\\    /:::/    /   @
    \\:::\\__/:::/    /    @
     \\::::::::/    /     @
      \\::::::/    /      @
       \\::::/    /       @
        \\::/____/        @
         ~~              @
                         @@
          _____          @
         /\\    \\         @
        /::\\____\\        @
       /:::/    /        @
      /:::/    /         @
     /:::/    /          @
    /:::/____/           @
    |::|    |            @
    |::|    |     _____  @
    |::|    |    /\\    \\ @
    |::|    |   /::\\____\\@
    |::|    |  /:::/    /@
    |::|    | /:::/    / @
    |::|____|/:::/    /  @
    |:::::::::::/    /   @
    \\::::::::::/____/    @
     ~~~~~~~~~~          @
                         @
                         @
                         @
                         @
                         @@
          _____          @
         /\\    \\         @
        /::\\____\\        @
       /:::/    /        @
      /:::/   _/___      @
     /:::/   /\\    \\     @
    /:::/   /::\\____\\    @
   /:::/   /:::/    /    @
  /:::/   /:::/   _/___  @
 /:::/___/:::/   /\\    \\ @
|:::|   /:::/   /::\\____\\@
|:::|__/:::/   /:::/    /@
 \\:::\\/:::/   /:::/    / @
  \\::::::/   /:::/    /  @
   \\::::/___/:::/    /   @
    \\:::\\__/:::/    /    @
     \\::::::::/    /     @
      \\::::::/    /      @
       \\::::/    /       @
        \\::/____/        @
         ~~              @
                         @@
                        @
        ______          @
       |::|   |         @
       |::|   |         @
       |::|   |         @
       |::|   |         @
       |::|   |         @
       |::|   |         @
       |::|   |         @
 ______|::|___|___ ____ @
|:::::::::::::::::|    |@
|:::::::::::::::::|____|@
 ~~~~~~|::|~~~|~~~      @
       |::|   |         @
       |::|   |         @
       |::|   |         @
       |::|   |         @
       |::|   |         @
       |::|   |         @
       |::|___|         @
        ~~              @
                        @@
      _____          @
     |\\    \\         @
     |:\\____\\        @
     |::|   |        @
     |::|   |        @
     |::|   |        @
     |::|   |        @
     |::|   |        @
     |::|___|______  @
     /::::::::\\    \\ @
    /::::::::::\\____\\@
   /:::/~~~~/~~      @
  /:::/    /         @
 /:::/    /          @
/:::/    /           @
\\::/    /            @
 \\/____/             @
                     @
                     @
                     @
                     @
                     @@
          _____          @
         /\\    \\         @
        /::\\    \\        @
        \\:::\\    \\       @
         \\:::\\    \\      @
          \\:::\\    \\     @
           \\:::\\    \\    @
            \\:::\\    \\   @
             \\:::\\    \\  @
              \\:::\\    \\ @
_______________\\:::\\____\\@
\\::::::::::::::::::/    /@
 \\::::::::::::::::/____/ @
  \\:::\\~~~~\\~~~~~~       @
   \\:::\\    \\            @
    \\:::\\    \\           @
     \\:::\\    \\          @
      \\:::\\    \\         @
       \\:::\\____\\        @
        \\::/    /        @
         \\/____/         @
                         @@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@
@@
`,jv=`flf2a$ 10 5 10 0 3 0


Figlet conversion by patorjk, April 17, 2008
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@@
$▐██▌$@
$▐██▌$@
$▐██▌$@
$▓██▒$@
$▒▄▄ $@
$░▀▀▒$@
$░  ░$@
$   ░$@
$░   $@
$    $@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
$   $@
$   $@
$   $@
$   $@
$██▓$@
$▒▓▒$@
$░▒ $@
$░  $@
$ ░ $@
$ ░ $@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
 ▄▄▄      @
▒████▄    @
▒██  ▀█▄  @
░██▄▄▄▄██ @
 ▓█   ▓██▒@
 ▒▒   ▓▒█░@
  ▒   ▒▒ ░@
  ░   ▒   @
      ░  ░@
          @@
 ▄▄▄▄   @
▓█████▄ @
▒██▒ ▄██@
▒██░█▀  @
░▓█  ▀█▓@
░▒▓███▀▒@
▒░▒   ░ @
 ░    ░ @
 ░      @
      ░ @@
 ▄████▄  @
▒██▀ ▀█  @
▒▓█    ▄ @
▒▓▓▄ ▄██▒@
▒ ▓███▀ ░@
░ ░▒ ▒  ░@
  ░  ▒   @
░        @
░ ░      @
░        @@
▓█████▄ @
▒██▀ ██▌@
░██   █▌@
░▓█▄   ▌@
░▒████▓ @
 ▒▒▓  ▒ @
 ░ ▒  ▒ @
 ░ ░  ░ @
   ░    @
 ░      @@
▓█████ @
▓█   ▀ @
▒███   @
▒▓█  ▄ @
░▒████▒@
░░ ▒░ ░@
 ░ ░  ░@
   ░   @
   ░  ░@
       @@
  █████▒@
▓██   ▒ @
▒████ ░ @
░▓█▒  ░ @
░▒█░    @
 ▒ ░    @
 ░      @
 ░ ░    @
        @
        @@
  ▄████ @
 ██▒ ▀█▒@
▒██░▄▄▄░@
░▓█  ██▓@
░▒▓███▀▒@
 ░▒   ▒ @
  ░   ░ @
░ ░   ░ @
      ░ @
        @@
 ██░ ██ @
▓██░ ██▒@
▒██▀▀██░@
░▓█ ░██ @
░▓█▒░██▓@
 ▒ ░░▒░▒@
 ▒ ░▒░ ░@
 ░  ░░ ░@
 ░  ░  ░@
        @@
 ██▓@
▓██▒@
▒██▒@
░██░@
░██░@
░▓  @
 ▒ ░@
 ▒ ░@
 ░  @
    @@
 ▄▄▄██▀▀▀@
   ▒██   @
   ░██   @
▓██▄██▓  @
 ▓███▒   @
 ▒▓▒▒░   @
 ▒ ░▒░   @
 ░ ░ ░   @
 ░   ░   @
         @@
 ██ ▄█▀@
 ██▄█▒ @
▓███▄░ @
▓██ █▄ @
▒██▒ █▄@
▒ ▒▒ ▓▒@
░ ░▒ ▒░@
░ ░░ ░ @
░  ░   @
       @@
 ██▓    @
▓██▒    @
▒██░    @
▒██░    @
░██████▒@
░ ▒░▓  ░@
░ ░ ▒  ░@
  ░ ░   @
    ░  ░@
        @@
 ███▄ ▄███▓@
▓██▒▀█▀ ██▒@
▓██    ▓██░@
▒██    ▒██ @
▒██▒   ░██▒@
░ ▒░   ░  ░@
░  ░      ░@
░      ░   @
       ░   @
           @@
 ███▄    █ @
 ██ ▀█   █ @
▓██  ▀█ ██▒@
▓██▒  ▐▌██▒@
▒██░   ▓██░@
░ ▒░   ▒ ▒ @
░ ░░   ░ ▒░@
   ░   ░ ░ @
         ░ @
           @@
 ▒█████  @
▒██▒  ██▒@
▒██░  ██▒@
▒██   ██░@
░ ████▓▒░@
░ ▒░▒░▒░ @
  ░ ▒ ▒░ @
░ ░ ░ ▒  @
    ░ ░  @
         @@
 ██▓███  @
▓██░  ██▒@
▓██░ ██▓▒@
▒██▄█▓▒ ▒@
▒██▒ ░  ░@
▒▓▒░ ░  ░@
░▒ ░     @
░░       @
         @
         @@
  █████  @
▒██▓  ██▒@
▒██▒  ██░@
░██  █▀ ░@
░▒███▒█▄ @
░░ ▒▒░ ▒ @
 ░ ▒░  ░ @
   ░   ░ @
    ░    @
         @@
 ██▀███  @
▓██ ▒ ██▒@
▓██ ░▄█ ▒@
▒██▀▀█▄  @
░██▓ ▒██▒@
░ ▒▓ ░▒▓░@
  ░▒ ░ ▒░@
  ░░   ░ @
   ░     @
         @@
  ██████ @
▒██    ▒ @
░ ▓██▄   @
  ▒   ██▒@
▒██████▒▒@
▒ ▒▓▒ ▒ ░@
░ ░▒  ░ ░@
░  ░  ░  @
      ░  @
         @@
▄▄▄█████▓@
▓  ██▒ ▓▒@
▒ ▓██░ ▒░@
░ ▓██▓ ░ @
  ▒██▒ ░ @
  ▒ ░░   @
    ░    @
  ░      @
         @
         @@
 █    ██ @
 ██  ▓██▒@
▓██  ▒██░@
▓▓█  ░██░@
▒▒█████▓ @
░▒▓▒ ▒ ▒ @
░░▒░ ░ ░ @
 ░░░ ░ ░ @
   ░     @
         @@
 ██▒   █▓@
▓██░   █▒@
 ▓██  █▒░@
  ▒██ █░░@
   ▒▀█░  @
   ░ ▐░  @
   ░ ░░  @
     ░░  @
      ░  @
     ░   @@
 █     █░@
▓█░ █ ░█░@
▒█░ █ ░█ @
░█░ █ ░█ @
░░██▒██▓ @
░ ▓░▒ ▒  @
  ▒ ░ ░  @
  ░   ░  @
    ░    @
         @@
▒██   ██▒@
▒▒ █ █ ▒░@
░░  █   ░@
 ░ █ █ ▒ @
▒██▒ ▒██▒@
▒▒ ░ ░▓ ░@
░░   ░▒ ░@
 ░    ░  @
 ░    ░  @
         @@
▓██   ██▓@
 ▒██  ██▒@
  ▒██ ██░@
  ░ ▐██▓░@
  ░ ██▒▓░@
   ██▒▒▒ @
 ▓██ ░▒░ @
 ▒ ▒ ░░  @
 ░ ░     @
 ░ ░     @@
▒███████▒@
▒ ▒ ▒ ▄▀░@
░ ▒ ▄▀▒░ @
  ▄▀▒   ░@
▒███████▒@
░▒▒ ▓░▒░▒@
░░▒ ▒ ░ ▒@
░ ░ ░ ░ ░@
  ░ ░    @
░        @@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
 ▄▄▄      @
▒████▄    @
▒██  ▀█▄  @
░██▄▄▄▄██ @
 ▓█   ▓██▒@
 ▒▒   ▓▒█░@
  ▒   ▒▒ ░@
  ░   ▒   @
      ░  ░@
          @@
 ▄▄▄▄   @
▓█████▄ @
▒██▒ ▄██@
▒██░█▀  @
░▓█  ▀█▓@
░▒▓███▀▒@
▒░▒   ░ @
 ░    ░ @
 ░      @
      ░ @@
 ▄████▄  @
▒██▀ ▀█  @
▒▓█    ▄ @
▒▓▓▄ ▄██▒@
▒ ▓███▀ ░@
░ ░▒ ▒  ░@
  ░  ▒   @
░        @
░ ░      @
░        @@
▓█████▄ @
▒██▀ ██▌@
░██   █▌@
░▓█▄   ▌@
░▒████▓ @
 ▒▒▓  ▒ @
 ░ ▒  ▒ @
 ░ ░  ░ @
   ░    @
 ░      @@
▓█████ @
▓█   ▀ @
▒███   @
▒▓█  ▄ @
░▒████▒@
░░ ▒░ ░@
 ░ ░  ░@
   ░   @
   ░  ░@
       @@
  █████▒@
▓██   ▒ @
▒████ ░ @
░▓█▒  ░ @
░▒█░    @
 ▒ ░    @
 ░      @
 ░ ░    @
        @
        @@
  ▄████ @
 ██▒ ▀█▒@
▒██░▄▄▄░@
░▓█  ██▓@
░▒▓███▀▒@
 ░▒   ▒ @
  ░   ░ @
░ ░   ░ @
      ░ @
        @@
 ██░ ██ @
▓██░ ██▒@
▒██▀▀██░@
░▓█ ░██ @
░▓█▒░██▓@
 ▒ ░░▒░▒@
 ▒ ░▒░ ░@
 ░  ░░ ░@
 ░  ░  ░@
        @@
 ██▓@
▓██▒@
▒██▒@
░██░@
░██░@
░▓  @
 ▒ ░@
 ▒ ░@
 ░  @
    @@
 ▄▄▄██▀▀▀@
   ▒██   @
   ░██   @
▓██▄██▓  @
 ▓███▒   @
 ▒▓▒▒░   @
 ▒ ░▒░   @
 ░ ░ ░   @
 ░   ░   @
         @@
 ██ ▄█▀@
 ██▄█▒ @
▓███▄░ @
▓██ █▄ @
▒██▒ █▄@
▒ ▒▒ ▓▒@
░ ░▒ ▒░@
░ ░░ ░ @
░  ░   @
       @@
 ██▓    @
▓██▒    @
▒██░    @
▒██░    @
░██████▒@
░ ▒░▓  ░@
░ ░ ▒  ░@
  ░ ░   @
    ░  ░@
        @@
 ███▄ ▄███▓@
▓██▒▀█▀ ██▒@
▓██    ▓██░@
▒██    ▒██ @
▒██▒   ░██▒@
░ ▒░   ░  ░@
░  ░      ░@
░      ░   @
       ░   @
           @@
 ███▄    █ @
 ██ ▀█   █ @
▓██  ▀█ ██▒@
▓██▒  ▐▌██▒@
▒██░   ▓██░@
░ ▒░   ▒ ▒ @
░ ░░   ░ ▒░@
   ░   ░ ░ @
         ░ @
           @@
 ▒█████  @
▒██▒  ██▒@
▒██░  ██▒@
▒██   ██░@
░ ████▓▒░@
░ ▒░▒░▒░ @
  ░ ▒ ▒░ @
░ ░ ░ ▒  @
    ░ ░  @
         @@
 ██▓███  @
▓██░  ██▒@
▓██░ ██▓▒@
▒██▄█▓▒ ▒@
▒██▒ ░  ░@
▒▓▒░ ░  ░@
░▒ ░     @
░░       @
         @
         @@
  █████  @
▒██▓  ██▒@
▒██▒  ██░@
░██  █▀ ░@
░▒███▒█▄ @
░░ ▒▒░ ▒ @
 ░ ▒░  ░ @
   ░   ░ @
    ░    @
         @@
 ██▀███  @
▓██ ▒ ██▒@
▓██ ░▄█ ▒@
▒██▀▀█▄  @
░██▓ ▒██▒@
░ ▒▓ ░▒▓░@
  ░▒ ░ ▒░@
  ░░   ░ @
   ░     @
         @@
  ██████ @
▒██    ▒ @
░ ▓██▄   @
  ▒   ██▒@
▒██████▒▒@
▒ ▒▓▒ ▒ ░@
░ ░▒  ░ ░@
░  ░  ░  @
      ░  @
         @@
▄▄▄█████▓@
▓  ██▒ ▓▒@
▒ ▓██░ ▒░@
░ ▓██▓ ░ @
  ▒██▒ ░ @
  ▒ ░░   @
    ░    @
  ░      @
         @
         @@
 █    ██ @
 ██  ▓██▒@
▓██  ▒██░@
▓▓█  ░██░@
▒▒█████▓ @
░▒▓▒ ▒ ▒ @
░░▒░ ░ ░ @
 ░░░ ░ ░ @
   ░     @
         @@
 ██▒   █▓@
▓██░   █▒@
 ▓██  █▒░@
  ▒██ █░░@
   ▒▀█░  @
   ░ ▐░  @
   ░ ░░  @
     ░░  @
      ░  @
     ░   @@
 █     █░@
▓█░ █ ░█░@
▒█░ █ ░█ @
░█░ █ ░█ @
░░██▒██▓ @
░ ▓░▒ ▒  @
  ▒ ░ ░  @
  ░   ░  @
    ░    @
         @@
▒██   ██▒@
▒▒ █ █ ▒░@
░░  █   ░@
 ░ █ █ ▒ @
▒██▒ ▒██▒@
▒▒ ░ ░▓ ░@
░░   ░▒ ░@
 ░    ░  @
 ░    ░  @
         @@
▓██   ██▓@
 ▒██  ██▒@
  ▒██ ██░@
  ░ ▐██▓░@
  ░ ██▒▓░@
   ██▒▒▒ @
 ▓██ ░▒░ @
 ▒ ▒ ░░  @
 ░ ░     @
 ░ ░     @@
▒███████▒@
▒ ▒ ▒ ▄▀░@
░ ▒ ▄▀▒░ @
  ▄▀▒   ░@
▒███████▒@
░▒▒ ▓░▒░▒@
░░▒ ▒ ░ ▒@
░ ░ ░ ░ ░@
  ░ ░    @
░        @@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@`,wv=`flf2a$ 9 9 23 0 3 0 128 0
Font Author: Aiden Neuding

FIGFont created with: http://patorjk.com/figfont-editor
$    $@
$    $@
$    $@
$    $@
$    $@
$    $@
$    $@
$    $@
$    $@@
░▒▓█▓▒░ @
░▒▓█▓▒░ @
░▒▓█▓▒░ @
░▒▓█▓▒░ @
░▒▓█▓▒░ @
        @
░▒▓█▓▒░ @
        @
        @@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
         @
         @
         @
         @
░▒▓██▓▒░ @
░▒▓██▓▒░ @
 ░▒▓█▓▒░ @
░▒▓█▓▒░  @
         @@
@
@
@
@
@
@
@
@
@@
         @
         @
         @
         @
         @
░▒▓██▓▒░ @
░▒▓██▓▒░ @
         @
         @@
@
@
@
@
@
@
@
@
@@
░▒▓████████▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓████████▓▒░ @
               @
               @@
   ░▒▓█▓▒░ @
░▒▓████▓▒░ @
   ░▒▓█▓▒░ @
   ░▒▓█▓▒░ @
   ░▒▓█▓▒░ @
   ░▒▓█▓▒░ @
   ░▒▓█▓▒░ @
           @
           @@
░▒▓███████▓▒░  @
       ░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓████████▓▒░ @
               @
               @@
░▒▓███████▓▒░  @
       ░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
░▒▓███████▓▒░  @
       ░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
░▒▓███████▓▒░  @
               @
               @@
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓████████▓▒░ @
       ░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
               @
               @@
░▒▓████████▓▒░ @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓███████▓▒░  @
       ░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
░▒▓███████▓▒░  @
               @
               @@
 ░▒▓███████▓▒░ @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
               @
               @@
░▒▓████████▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
      ░▒▓█▓▒░  @
      ░▒▓█▓▒░  @
     ░▒▓█▓▒░   @
     ░▒▓█▓▒░   @
               @
               @@
 ░▒▓██████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
               @
               @@
 ░▒▓██████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓███████▓▒░ @
       ░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
               @
               @@
         @
░▒▓██▓▒░ @
░▒▓██▓▒░ @
         @
░▒▓██▓▒░ @
░▒▓██▓▒░ @
         @
         @
         @@
         @
░▒▓██▓▒░ @
░▒▓██▓▒░ @
         @
░▒▓██▓▒░ @
░▒▓██▓▒░ @
 ░▒▓█▓▒░ @
░▒▓█▓▒░  @
         @@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
░▒▓███████▓▒░  @
       ░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
   ░▒▓████▓▒░  @
               @
               @
   ░▒▓█▓▒░     @
               @
               @@
@
@
@
@
@
@
@
@
@@
 ░▒▓██████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓████████▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
               @
               @@
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓███████▓▒░  @
               @
               @@
 ░▒▓██████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
               @
               @@
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓███████▓▒░  @
               @
               @@
░▒▓████████▓▒░ @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓██████▓▒░   @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓████████▓▒░ @
               @
               @@
░▒▓████████▓▒░ @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓██████▓▒░   @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
               @
               @@
 ░▒▓██████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░        @
░▒▓█▓▒▒▓███▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
               @
               @@
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓████████▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
               @
               @@
░▒▓█▓▒░ @
░▒▓█▓▒░ @
░▒▓█▓▒░ @
░▒▓█▓▒░ @
░▒▓█▓▒░ @
░▒▓█▓▒░ @
░▒▓█▓▒░ @
        @
        @@
       ░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
               @
               @@
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
               @
               @@
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓████████▓▒░ @
               @
               @@
░▒▓██████████████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
                      @
                      @@
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
               @
               @@
 ░▒▓██████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
               @
               @@
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓███████▓▒░  @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
               @
               @@
 ░▒▓██████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
   ░▒▓█▓▒░     @
    ░▒▓██▓▒░   @@
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
               @
               @@
 ░▒▓███████▓▒░ @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
 ░▒▓██████▓▒░  @
       ░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
░▒▓███████▓▒░  @
               @
               @@
░▒▓████████▓▒░ @
   ░▒▓█▓▒░     @
   ░▒▓█▓▒░     @
   ░▒▓█▓▒░     @
   ░▒▓█▓▒░     @
   ░▒▓█▓▒░     @
   ░▒▓█▓▒░     @
               @
               @@
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
               @
               @@
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓█▓▒▒▓█▓▒░  @
 ░▒▓█▓▒▒▓█▓▒░  @
  ░▒▓█▓▓█▓▒░   @
  ░▒▓█▓▓█▓▒░   @
   ░▒▓██▓▒░    @
               @
               @@
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓█████████████▓▒░  @
                      @
                      @@
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
               @
               @@
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
   ░▒▓█▓▒░     @
   ░▒▓█▓▒░     @
   ░▒▓█▓▒░     @
               @
               @@
░▒▓████████▓▒░ @
       ░▒▓█▓▒░ @
     ░▒▓██▓▒░  @
   ░▒▓██▓▒░    @
 ░▒▓██▓▒░      @
░▒▓█▓▒░        @
░▒▓████████▓▒░ @
               @
               @@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
 ░▒▓██████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓████████▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
               @
               @@
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓███████▓▒░  @
               @
               @@
 ░▒▓██████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
               @
               @@
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓███████▓▒░  @
               @
               @@
░▒▓████████▓▒░ @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓██████▓▒░   @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓████████▓▒░ @
               @
               @@
░▒▓████████▓▒░ @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓██████▓▒░   @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
               @
               @@
 ░▒▓██████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░        @
░▒▓█▓▒▒▓███▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
               @
               @@
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓████████▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
               @
               @@
░▒▓█▓▒░ @
░▒▓█▓▒░ @
░▒▓█▓▒░ @
░▒▓█▓▒░ @
░▒▓█▓▒░ @
░▒▓█▓▒░ @
░▒▓█▓▒░ @
        @
        @@
       ░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
               @
               @@
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
               @
               @@
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓████████▓▒░ @
               @
               @@
░▒▓██████████████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
                      @
                      @@
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
               @
               @@
 ░▒▓██████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
               @
               @@
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓███████▓▒░  @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
               @
               @@
 ░▒▓██████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
   ░▒▓█▓▒░     @
    ░▒▓██▓▒░   @@
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓███████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
               @
               @@
 ░▒▓███████▓▒░ @
░▒▓█▓▒░        @
░▒▓█▓▒░        @
 ░▒▓██████▓▒░  @
       ░▒▓█▓▒░ @
       ░▒▓█▓▒░ @
░▒▓███████▓▒░  @
               @
               @@
░▒▓████████▓▒░ @
   ░▒▓█▓▒░     @
   ░▒▓█▓▒░     @
   ░▒▓█▓▒░     @
   ░▒▓█▓▒░     @
   ░▒▓█▓▒░     @
   ░▒▓█▓▒░     @
               @
               @@
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
               @
               @@
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓█▓▒▒▓█▓▒░  @
 ░▒▓█▓▒▒▓█▓▒░  @
  ░▒▓█▓▓█▓▒░   @
  ░▒▓█▓▓█▓▒░   @
   ░▒▓██▓▒░    @
               @
               @@
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓█████████████▓▒░  @
                      @
                      @@
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
               @
               @@
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
░▒▓█▓▒░░▒▓█▓▒░ @
 ░▒▓██████▓▒░  @
   ░▒▓█▓▒░     @
   ░▒▓█▓▒░     @
   ░▒▓█▓▒░     @
               @
               @@
░▒▓████████▓▒░ @
       ░▒▓█▓▒░ @
     ░▒▓██▓▒░  @
   ░▒▓██▓▒░    @
 ░▒▓██▓▒░      @
░▒▓█▓▒░        @
░▒▓████████▓▒░ @
               @
               @@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@@
`,Iv=`flf2a$ 6 6 12 0 5 0 0 0
Font Author: Jäger

FIGFont created with: http://patorjk.com/figfont-editor

***Alphabetical only, no numbers or symbols***
░░░░░░@
▒▒▒▒▒▒@
▓▓▓▓▓▓@
██████@
██████@
      @@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
░░      ░░@
▒  ▒▒▒▒  ▒@
▓  ▓▓▓▓  ▓@
█        █@
█  ████  █@
          @@
░       ░░@
▒  ▒▒▒▒  ▒@
▓       ▓▓@
█  ████  █@
█       ██@
          @@
░░      ░░@
▒  ▒▒▒▒  ▒@
▓  ▓▓▓▓▓▓▓@
█  ████  █@
██      ██@
          @@
░       ░░@
▒  ▒▒▒▒  ▒@
▓  ▓▓▓▓  ▓@
█  ████  █@
█       ██@
          @@
░        ░@
▒  ▒▒▒▒▒▒▒@
▓      ▓▓▓@
█  ███████@
█        █@
          @@
░        ░@
▒  ▒▒▒▒▒▒▒@
▓      ▓▓▓@
█  ███████@
█  ███████@
          @@
░░      ░░@
▒  ▒▒▒▒▒▒▒@
▓  ▓▓▓   ▓@
█  ████  █@
██      ██@
          @@
░  ░░░░  ░@
▒  ▒▒▒▒  ▒@
▓        ▓@
█  ████  █@
█  ████  █@
          @@
░        ░@
▒▒▒▒  ▒▒▒▒@
▓▓▓▓  ▓▓▓▓@
████  ████@
█        █@
          @@
░        ░@
▒▒▒▒▒▒▒  ▒@
▓▓▓▓▓▓▓  ▓@
█  ████  █@
██      ██@
          @@
░  ░░░░  ░@
▒  ▒▒▒  ▒▒@
▓     ▓▓▓▓@
█  ███  ██@
█  ████  █@
          @@
░  ░░░░░░░@
▒  ▒▒▒▒▒▒▒@
▓  ▓▓▓▓▓▓▓@
█  ███████@
█        █@
          @@
░  ░░░░  ░@
▒   ▒▒   ▒@
▓        ▓@
█  █  █  █@
█  ████  █@
          @@
░   ░░░  ░@
▒    ▒▒  ▒@
▓  ▓  ▓  ▓@
█  ██    █@
█  ███   █@
          @@
░░      ░░@
▒  ▒▒▒▒  ▒@
▓  ▓▓▓▓  ▓@
█  ████  █@
██      ██@
          @@
░       ░░@
▒  ▒▒▒▒  ▒@
▓       ▓▓@
█  ███████@
█  ███████@
          @@
░░      ░░@
▒  ▒▒▒▒  ▒@
▓  ▓▓ ▓  ▓@
█  ███   █@
██      █ @
          @@
░       ░░@
▒  ▒▒▒▒  ▒@
▓       ▓▓@
█  ███  ██@
█  ████  █@
          @@
░░      ░░@
▒  ▒▒▒▒▒▒▒@
▓▓      ▓▓@
███████  █@
██      ██@
          @@
░        ░@
▒▒▒▒  ▒▒▒▒@
▓▓▓▓  ▓▓▓▓@
████  ████@
████  ████@
          @@
░  ░░░░  ░@
▒  ▒▒▒▒  ▒@
▓  ▓▓▓▓  ▓@
█  ████  █@
██      ██@
          @@
░  ░░░░  ░@
▒  ▒▒▒▒  ▒@
▓▓  ▓▓  ▓▓@
███    ███@
████  ████@
          @@
░  ░░░░  ░@
▒  ▒  ▒  ▒@
▓        ▓@
█   ██   █@
█  ████  █@
          @@
░  ░░░░  ░@
▒▒  ▒▒  ▒▒@
▓▓▓    ▓▓▓@
██  ██  ██@
█  ████  █@
          @@
░  ░░░░  ░@
▒▒  ▒▒  ▒▒@
▓▓▓    ▓▓▓@
████  ████@
████  ████@
          @@
░        ░@
▒▒▒▒▒▒  ▒▒@
▓▓▓▓  ▓▓▓▓@
██  ██████@
█        █@
          @@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
░░      ░░@
▒  ▒▒▒▒  ▒@
▓  ▓▓▓▓  ▓@
█        █@
█  ████  █@
          @@
░       ░░@
▒  ▒▒▒▒  ▒@
▓       ▓▓@
█  ████  █@
█       ██@
          @@
░░      ░░@
▒  ▒▒▒▒  ▒@
▓  ▓▓▓▓▓▓▓@
█  ████  █@
██      ██@
          @@
░       ░░@
▒  ▒▒▒▒  ▒@
▓  ▓▓▓▓  ▓@
█  ████  █@
█       ██@
          @@
░        ░@
▒  ▒▒▒▒▒▒▒@
▓      ▓▓▓@
█  ███████@
█        █@
          @@
░        ░@
▒  ▒▒▒▒▒▒▒@
▓      ▓▓▓@
█  ███████@
█  ███████@
          @@
░░      ░░@
▒  ▒▒▒▒▒▒▒@
▓  ▓▓▓   ▓@
█  ████  █@
██      ██@
          @@
░  ░░░░  ░@
▒  ▒▒▒▒  ▒@
▓        ▓@
█  ████  █@
█  ████  █@
          @@
░        ░@
▒▒▒▒  ▒▒▒▒@
▓▓▓▓  ▓▓▓▓@
████  ████@
█        █@
          @@
░        ░@
▒▒▒▒▒▒▒  ▒@
▓▓▓▓▓▓▓  ▓@
█  ████  █@
██      ██@
          @@
░  ░░░░  ░@
▒  ▒▒▒  ▒▒@
▓     ▓▓▓▓@
█  ███  ██@
█  ████  █@
          @@
░  ░░░░░░░@
▒  ▒▒▒▒▒▒▒@
▓  ▓▓▓▓▓▓▓@
█  ███████@
█        █@
          @@
░  ░░░░  ░@
▒   ▒▒   ▒@
▓        ▓@
█  █  █  █@
█  ████  █@
          @@
░   ░░░  ░@
▒    ▒▒  ▒@
▓  ▓  ▓  ▓@
█  ██    █@
█  ███   █@
          @@
░░      ░░@
▒  ▒▒▒▒  ▒@
▓  ▓▓▓▓  ▓@
█  ████  █@
██      ██@
          @@
░       ░░@
▒  ▒▒▒▒  ▒@
▓       ▓▓@
█  ███████@
█  ███████@
          @@
░░      ░░@
▒  ▒▒▒▒  ▒@
▓  ▓▓ ▓  ▓@
█  ███   █@
██      █ @
          @@
░       ░░@
▒  ▒▒▒▒  ▒@
▓       ▓▓@
█  ███  ██@
█  ████  █@
          @@
░░      ░░@
▒  ▒▒▒▒▒▒▒@
▓▓      ▓▓@
███████  █@
██      ██@
          @@
░        ░@
▒▒▒▒  ▒▒▒▒@
▓▓▓▓  ▓▓▓▓@
████  ████@
████  ████@
          @@
░  ░░░░  ░@
▒  ▒▒▒▒  ▒@
▓  ▓▓▓▓  ▓@
█  ████  █@
██      ██@
          @@
░  ░░░░  ░@
▒  ▒▒▒▒  ▒@
▓▓  ▓▓  ▓▓@
███    ███@
████  ████@
          @@
░  ░░░░  ░@
▒  ▒  ▒  ▒@
▓        ▓@
█   ██   █@
█  ████  █@
          @@
░  ░░░░  ░@
▒▒  ▒▒  ▒▒@
▓▓▓    ▓▓▓@
██  ██  ██@
█  ████  █@
          @@
░  ░░░░  ░@
▒▒  ▒▒  ▒▒@
▓▓▓    ▓▓▓@
████  ████@
████  ████@
          @@
░        ░@
▒▒▒▒▒▒  ▒▒@
▓▓▓▓  ▓▓▓▓@
██  ██████@
█        █@
          @@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
`,Bv=`flf2a$ 11 11 22 0 11 0 24447 0
Author : myflix
Date   : 2004/6/25 18:33:21
Version: 1.0
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.
$ #
$ #
$ #
$ #
$ #
$ #
$ #
$ #
$ #
$ #
$ ##
 .----------------. #
| .--------------. |#
| |              | |#
| |      _       | |#
| |     | |      | |#
| |     | |      | |#
| |     | |      | |#
| |     |_|      | |#
| |     (_)      | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     _  _     | |#
| |    | || |    | |#
| |    \\_|\\_|    | |#
| |              | |#
| |              | |#
| |              | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |    _  _      | |#
| |  _| || |_    | |#
| | |_| || |_|   | |#
| | |_| || |_|   | |#
| |   |_||_|     | |#
| |              | |#
| |              | |#
| '--------------' |#
 '----------------' ##
$#
 #
 #
 #
 #
 #
 #
 #
 #
 #
 ##
 .----------------. #
| .--------------. |#
| |        __    | |#
| |    _  / /    | |#
| |   (_)/ /     | |#
| |     / / _    | |#
| |    / / (_)   | |#
| |   /_/        | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |    ___       | |#
| |  .' _ '.     | |#
| |  | (_) '___  | |#
| |  .\`___'/ _/  | |#
| | | (___)  \\_  | |#
| | \`._____.\\__| | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |      _       | |#
| |     | |      | |#
| |     \\_|      | |#
| |              | |#
| |              | |#
| |              | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |      __      | |#
| |    .' _|     | |#
| |    | |       | |#
| |    | |       | |#
| |    | |_      | |#
| |    \`.__|     | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     __       | |#
| |    |_ \`.     | |#
| |      | |     | |#
| |      | |     | |#
| |     _| |     | |#
| |    |__,'     | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |      _       | |#
| |   /\\| |/\\    | |#
| |   \\     /    | |#
| |  |_     _|   | |#
| |   /     \\    | |#
| |   \\/|_|\\/    | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |      _       | |#
| |     | |      | |#
| |  ___| |___   | |#
| | |___   ___|  | |#
| |     | |      | |#
| |     |_|      | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |              | |#
| |              | |#
| |              | |#
| |              | |#
| |      _       | |#
| |     )_/      | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |              | |#
| |              | |#
| |    ______    | |#
| |   |______|   | |#
| |              | |#
| |              | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |              | |#
| |              | |#
| |              | |#
| |              | |#
| |      _       | |#
| |     (_)      | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |        __    | |#
| |       / /    | |#
| |      / /     | |#
| |     / /      | |#
| |    / /       | |#
| |   /_/        | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     ____     | |#
| |   .'    '.   | |#
| |  |  .--.  |  | |#
| |  | |    | |  | |#
| |  |  \`--'  |  | |#
| |   '.____.'   | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     __       | |#
| |    /  |      | |#
| |    \`| |      | |#
| |     | |      | |#
| |    _| |_     | |#
| |   |_____|    | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |    _____     | |#
| |   / ___ \`.   | |#
| |  |_/___) |   | |#
| |   .'____.'   | |#
| |  / /____     | |#
| |  |_______|   | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |    ______    | |#
| |   / ____ \`.  | |#
| |   \`'  __) |  | |#
| |   _  |__ '.  | |#
| |  | \\____) |  | |#
| |   \\______.'  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |   _    _     | |#
| |  | |  | |    | |#
| |  | |__| |_   | |#
| |  |____   _|  | |#
| |      _| |_   | |#
| |     |_____|  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |   _______    | |#
| |  |  _____|   | |#
| |  | |____     | |#
| |  '_.____''.  | |#
| |  | \\____) |  | |#
| |   \\______.'  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |    ______    | |#
| |  .' ____ \\   | |#
| |  | |____\\_|  | |#
| |  | '____\`'.  | |#
| |  | (____) |  | |#
| |  '.______.'  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |   _______    | |#
| |  |  ___  |   | |#
| |  |_/  / /    | |#
| |      / /     | |#
| |     / /      | |#
| |    /_/       | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     ____     | |#
| |   .' __ '.   | |#
| |   | (__) |   | |#
| |   .\`____'.   | |#
| |  | (____) |  | |#
| |  \`.______.'  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |    ______    | |#
| |  .' ____ '.  | |#
| |  | (____) |  | |#
| |  '_.____. |  | |#
| |  | \\____| |  | |#
| |   \\______,'  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |              | |#
| |      _       | |#
| |     (_)      | |#
| |      _       | |#
| |     (_)      | |#
| |              | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |              | |#
| |       _      | |#
| |      (_)     | |#
| |       _      | |#
| |      | )     | |#
| |      )/      | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |       _      | |#
| |      / /     | |#
| |     / /      | |#
| |    < <       | |#
| |     \\ \\      | |#
| |      \\_\\     | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |              | |#
| |    ______    | |#
| |   |______|   | |#
| |    ______    | |#
| |   |______|   | |#
| |              | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |      _       | |#
| |     \\ \\      | |#
| |      \\ \\     | |#
| |       > >    | |#
| |      / /     | |#
| |     /_/      | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |    ______    | |#
| |   / _ __ \`.  | |#
| |  |_/____) |  | |#
| |    /  ___.'  | |#
| |    |_|       | |#
| |    (_)       | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     ____     | |#
| |   .' __ \\    | |#
| |  / .'  \\ |   | |#
| |  | | (_/ |   | |#
| |  \\ \`.__.'\\   | |#
| |   \`.___ .'   | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |      __      | |#
| |     /  \\     | |#
| |    / /\\ \\    | |#
| |   / ____ \\   | |#
| | _/ /    \\ \\_ | |#
| ||____|  |____|| |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |   ______     | |#
| |  |_   _ \\    | |#
| |    | |_) |   | |#
| |    |  __'.   | |#
| |   _| |__) |  | |#
| |  |_______/   | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     ______   | |#
| |   .' ___  |  | |#
| |  / .'   \\_|  | |#
| |  | |         | |#
| |  \\ \`.___.'\\  | |#
| |   \`._____.'  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  ________    | |#
| | |_   ___ \`.  | |#
| |   | |   \`. \\ | |#
| |   | |    | | | |#
| |  _| |___.' / | |#
| | |________.'  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  _________   | |#
| | |_   ___  |  | |#
| |   | |_  \\_|  | |#
| |   |  _|  _   | |#
| |  _| |___/ |  | |#
| | |_________|  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  _________   | |#
| | |_   ___  |  | |#
| |   | |_  \\_|  | |#
| |   |  _|      | |#
| |  _| |_       | |#
| | |_____|      | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |    ______    | |#
| |  .' ___  |   | |#
| | / .'   \\_|   | |#
| | | |    ____  | |#
| | \\ \`.___]  _| | |#
| |  \`._____.'   | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  ____  ____  | |#
| | |_   ||   _| | |#
| |   | |__| |   | |#
| |   |  __  |   | |#
| |  _| |  | |_  | |#
| | |____||____| | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     _____    | |#
| |    |_   _|   | |#
| |      | |     | |#
| |      | |     | |#
| |     _| |_    | |#
| |    |_____|   | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     _____    | |#
| |    |_   _|   | |#
| |      | |     | |#
| |   _  | |     | |#
| |  | |_' |     | |#
| |  \`.___.'     | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  ___  ____   | |#
| | |_  ||_  _|  | |#
| |   | |_/ /    | |#
| |   |  __'.    | |#
| |  _| |  \\ \\_  | |#
| | |____||____| | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |   _____      | |#
| |  |_   _|     | |#
| |    | |       | |#
| |    | |   _   | |#
| |   _| |__/ |  | |#
| |  |________|  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| | ____    ____ | |#
| ||_   \\  /   _|| |#
| |  |   \\/   |  | |#
| |  | |\\  /| |  | |#
| | _| |_\\/_| |_ | |#
| ||_____||_____|| |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .-----------------.#
| .--------------. |#
| | ____  _____  | |#
| ||_   \\|_   _| | |#
| |  |   \\ | |   | |#
| |  | |\\ \\| |   | |#
| | _| |_\\   |_  | |#
| ||_____|\\____| | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     ____     | |#
| |   .'    \`.   | |#
| |  /  .--.  \\  | |#
| |  | |    | |  | |#
| |  \\  \`--'  /  | |#
| |   \`.____.'   | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |   ______     | |#
| |  |_   __ \\   | |#
| |    | |__) |  | |#
| |    |  ___/   | |#
| |   _| |_      | |#
| |  |_____|     | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |    ___       | |#
| |  .'   '.     | |#
| | /  .-.  \\    | |#
| | | |   | |    | |#
| | \\  \`-'  \\_   | |#
| |  \`.___.\\__|  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  _______     | |#
| | |_   __ \\    | |#
| |   | |__) |   | |#
| |   |  __ /    | |#
| |  _| |  \\ \\_  | |#
| | |____| |___| | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |    _______   | |#
| |   /  ___  |  | |#
| |  |  (__ \\_|  | |#
| |   '.___\`-.   | |#
| |  |\`\\____) |  | |#
| |  |_______.'  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  _________   | |#
| | |  _   _  |  | |#
| | |_/ | | \\_|  | |#
| |     | |      | |#
| |    _| |_     | |#
| |   |_____|    | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| | _____  _____ | |#
| ||_   _||_   _|| |#
| |  | |    | |  | |#
| |  | '    ' |  | |#
| |   \\ \`--' /   | |#
| |    \`.__.'    | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| | ____   ____  | |#
| ||_  _| |_  _| | |#
| |  \\ \\   / /   | |#
| |   \\ \\ / /    | |#
| |    \\ ' /     | |#
| |     \\_/      | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| | _____  _____ | |#
| ||_   _||_   _|| |#
| |  | | /\\ | |  | |#
| |  | |/  \\| |  | |#
| |  |   /\\   |  | |#
| |  |__/  \\__|  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  ____  ____  | |#
| | |_  _||_  _| | |#
| |   \\ \\  / /   | |#
| |    > \`' <    | |#
| |  _/ /'\`\\ \\_  | |#
| | |____||____| | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  ____  ____  | |#
| | |_  _||_  _| | |#
| |   \\ \\  / /   | |#
| |    \\ \\/ /    | |#
| |    _|  |_    | |#
| |   |______|   | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |   ________   | |#
| |  |  __   _|  | |#
| |  |_/  / /    | |#
| |     .'.' _   | |#
| |   _/ /__/ |  | |#
| |  |________|  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |      ___     | |#
| |     |  _|    | |#
| |     | |      | |#
| |     | |      | |#
| |     | |_     | |#
| |     |___|    | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |    __        | |#
| |    \\ \\       | |#
| |     \\ \\      | |#
| |      \\ \\     | |#
| |       \\ \\    | |#
| |        \\_\\   | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     ___      | |#
| |    |_  |     | |#
| |      | |     | |#
| |      | |     | |#
| |     _| |     | |#
| |    |___|     | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     ___      | |#
| |    / _ \\     | |#
| |   |_/ \\_|    | |#
| |              | |#
| |              | |#
| |              | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |              | |#
| |              | |#
| |              | |#
| |              | |#
| |              | |#
| |   _______    | |#
| |  |_______|   | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |              | |#
| |      __      | |#
| |     |  |     | |#
| |      \\_|     | |#
| |              | |#
| |              | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |      __      | |#
| |     /  \\     | |#
| |    / /\\ \\    | |#
| |   / ____ \\   | |#
| | _/ /    \\ \\_ | |#
| ||____|  |____|| |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |   ______     | |#
| |  |_   _ \\    | |#
| |    | |_) |   | |#
| |    |  __'.   | |#
| |   _| |__) |  | |#
| |  |_______/   | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     ______   | |#
| |   .' ___  |  | |#
| |  / .'   \\_|  | |#
| |  | |         | |#
| |  \\ \`.___.'\\  | |#
| |   \`._____.'  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  ________    | |#
| | |_   ___ \`.  | |#
| |   | |   \`. \\ | |#
| |   | |    | | | |#
| |  _| |___.' / | |#
| | |________.'  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  _________   | |#
| | |_   ___  |  | |#
| |   | |_  \\_|  | |#
| |   |  _|  _   | |#
| |  _| |___/ |  | |#
| | |_________|  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  _________   | |#
| | |_   ___  |  | |#
| |   | |_  \\_|  | |#
| |   |  _|      | |#
| |  _| |_       | |#
| | |_____|      | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |    ______    | |#
| |  .' ___  |   | |#
| | / .'   \\_|   | |#
| | | |    ____  | |#
| | \\ \`.___]  _| | |#
| |  \`._____.'   | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  ____  ____  | |#
| | |_   ||   _| | |#
| |   | |__| |   | |#
| |   |  __  |   | |#
| |  _| |  | |_  | |#
| | |____||____| | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     _____    | |#
| |    |_   _|   | |#
| |      | |     | |#
| |      | |     | |#
| |     _| |_    | |#
| |    |_____|   | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     _____    | |#
| |    |_   _|   | |#
| |      | |     | |#
| |   _  | |     | |#
| |  | |_' |     | |#
| |  \`.___.'     | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  ___  ____   | |#
| | |_  ||_  _|  | |#
| |   | |_/ /    | |#
| |   |  __'.    | |#
| |  _| |  \\ \\_  | |#
| | |____||____| | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |   _____      | |#
| |  |_   _|     | |#
| |    | |       | |#
| |    | |   _   | |#
| |   _| |__/ |  | |#
| |  |________|  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| | ____    ____ | |#
| ||_   \\  /   _|| |#
| |  |   \\/   |  | |#
| |  | |\\  /| |  | |#
| | _| |_\\/_| |_ | |#
| ||_____||_____|| |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .-----------------.#
| .--------------. |#
| | ____  _____  | |#
| ||_   \\|_   _| | |#
| |  |   \\ | |   | |#
| |  | |\\ \\| |   | |#
| | _| |_\\   |_  | |#
| ||_____|\\____| | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     ____     | |#
| |   .'    \`.   | |#
| |  /  .--.  \\  | |#
| |  | |    | |  | |#
| |  \\  \`--'  /  | |#
| |   \`.____.'   | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |   ______     | |#
| |  |_   __ \\   | |#
| |    | |__) |  | |#
| |    |  ___/   | |#
| |   _| |_      | |#
| |  |_____|     | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |    ___       | |#
| |  .'   '.     | |#
| | /  .-.  \\    | |#
| | | |   | |    | |#
| | \\  \`-'  \\_   | |#
| |  \`.___.\\__|  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  _______     | |#
| | |_   __ \\    | |#
| |   | |__) |   | |#
| |   |  __ /    | |#
| |  _| |  \\ \\_  | |#
| | |____| |___| | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |    _______   | |#
| |   /  ___  |  | |#
| |  |  (__ \\_|  | |#
| |   '.___\`-.   | |#
| |  |\`\\____) |  | |#
| |  |_______.'  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  _________   | |#
| | |  _   _  |  | |#
| | |_/ | | \\_|  | |#
| |     | |      | |#
| |    _| |_     | |#
| |   |_____|    | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| | _____  _____ | |#
| ||_   _||_   _|| |#
| |  | |    | |  | |#
| |  | '    ' |  | |#
| |   \\ \`--' /   | |#
| |    \`.__.'    | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| | ____   ____  | |#
| ||_  _| |_  _| | |#
| |  \\ \\   / /   | |#
| |   \\ \\ / /    | |#
| |    \\ ' /     | |#
| |     \\_/      | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| | _____  _____ | |#
| ||_   _||_   _|| |#
| |  | | /\\ | |  | |#
| |  | |/  \\| |  | |#
| |  |   /\\   |  | |#
| |  |__/  \\__|  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  ____  ____  | |#
| | |_  _||_  _| | |#
| |   \\ \\  / /   | |#
| |    > \`' <    | |#
| |  _/ /'\`\\ \\_  | |#
| | |____||____| | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |  ____  ____  | |#
| | |_  _||_  _| | |#
| |   \\ \\  / /   | |#
| |    \\ \\/ /    | |#
| |    _|  |_    | |#
| |   |______|   | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |   ________   | |#
| |  |  __   _|  | |#
| |  |_/  / /    | |#
| |     .'.' _   | |#
| |   _/ /__/ |  | |#
| |  |________|  | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |       __     | |#
| |     .' _/    | |#
| |     | |      | |#
| |    < <       | |#
| |     | |_     | |#
| |     \`.__\\    | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |      _       | |#
| |     | |      | |#
| |     | |      | |#
| |     | |      | |#
| |     | |      | |#
| |     |_|      | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     __       | |#
| |    \\_ \`.     | |#
| |      | |     | |#
| |       > >    | |#
| |     _| |     | |#
| |    /__.'     | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |              | |#
| |    ___.-.    | |#
| |   |  ___|    | |#
| |   '-'        | |#
| |              | |#
| |              | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |      __      | |#
| |     /  \\     | |#
| |    / /\\ \\    | |#
| |   / ____ \\   | |#
| | _/ /    \\ \\_ | |#
| ||____|  |____|| |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     ____     | |#
| |   .'    \`.   | |#
| |  /  .--.  \\  | |#
| |  | |    | |  | |#
| |  \\  \`--'  /  | |#
| |   \`.____.'   | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| | _____  _____ | |#
| ||_   _||_   _|| |#
| |  | |    | |  | |#
| |  | '    ' |  | |#
| |   \\ \`--' /   | |#
| |    \`.__.'    | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |      __      | |#
| |     /  \\     | |#
| |    / /\\ \\    | |#
| |   / ____ \\   | |#
| | _/ /    \\ \\_ | |#
| ||____|  |____|| |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| |     ____     | |#
| |   .'    \`.   | |#
| |  /  .--.  \\  | |#
| |  | |    | |  | |#
| |  \\  \`--'  /  | |#
| |   \`.____.'   | |#
| |              | |#
| '--------------' |#
 '----------------' ##
 .----------------. #
| .--------------. |#
| | _____  _____ | |#
| ||_   _||_   _|| |#
| |  | |    | |  | |#
| |  | '    ' |  | |#
| |   \\ \`--' /   | |#
| |    \`.__.'    | |#
| |              | |#
| '--------------' |#
 '----------------' ##
�#
 #
 #
 #
 #
 #
 #
 #
 #
 #
 ##
`,Gv=`flf2a$ 11 11 18 -1 23
isometric3.flf

Figlet conversion by Kent Nassen (kentn@cyberspace.org), 8-10-94, based
on the post by Lennert Stock: 

From: stock@fwi.uva.nl (Lennert Stock)
Date: 15 Jul 1994 00:04:25 GMT

Here are some fonts. Non-figlet I'm afraid, if you wanna convert them, be
my guest. I posted the isometric fonts before.

------------------------------------------------------------------------------

     .x%%%%%%x.                                             .x%%%%%%x.
    ,%%%%%%%%%%.                                           .%%%%%%%%%%.
   ,%%%'  )'  \\)                                           :(  \`(  \`%%%.
  ,%x%)________) --------- L e n n e r t   S t o c k       ( _   __ (%x%.
  (%%%~^88P~88P|                                           |~=> .=-~ %%%)
  (%%::. .:,\\ .'                                           \`. /,:. .::%%)
  \`;%:\`\\. \`-' |                                             | \`-' ./':%:'
   \`\`x\`. -===.'                   stock@fwi.uva.nl -------- \`.===- .'x''
    / \`:\`.__.;                                               :.__.':' \\
 .d8b.     ..\`.                                             .'..     .d8b.
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
      ___     @
     /  /\\    @
    /  /::\\   @
   /  /:/\\:\\  @
  /  /:/~/::\\ @
 /__/:/ /:/\\:\\@
 \\  \\:\\/:/__\\/@
  \\  \\::/     @
   \\  \\:\\     @
    \\  \\:\\    @
     \\__\\/    @@
              @
     _____    @
    /  /::\\   @
   /  /:/\\:\\  @
  /  /:/~/::\\ @
 /__/:/ /:/\\:|@
 \\  \\:\\/:/~/:/@
  \\  \\::/ /:/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @@
      ___     @
     /  /\\    @
    /  /:/    @
   /  /:/     @
  /  /:/  ___ @
 /__/:/  /  /\\@
 \\  \\:\\ /  /:/@
  \\  \\:\\  /:/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @@
     _____    @
    /  /::\\   @
   /  /:/\\:\\  @
  /  /:/  \\:\\ @
 /__/:/ \\__\\:|@
 \\  \\:\\ /  /:/@
  \\  \\:\\  /:/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @
              @@
      ___     @
     /  /\\    @
    /  /:/_   @
   /  /:/ /\\  @
  /  /:/ /:/_ @
 /__/:/ /:/ /\\@
 \\  \\:\\/:/ /:/@
  \\  \\::/ /:/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @@
      ___   @
     /  /\\  @
    /  /:/_ @
   /  /:/ /\\@
  /  /:/ /:/@
 /__/:/ /:/ @
 \\  \\:\\/:/  @
  \\  \\::/   @
   \\  \\:\\   @
    \\  \\:\\  @
     \\__\\/  @@
      ___     @
     /  /\\    @
    /  /:/_   @
   /  /:/ /\\  @
  /  /:/_/::\\ @
 /__/:/__\\/\\:\\@
 \\  \\:\\ /~~/:/@
  \\  \\:\\  /:/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @@
      ___     @
     /__/\\    @
     \\  \\:\\   @
      \\__\\:\\  @
  ___ /  /::\\ @
 /__/\\  /:/\\:\\@
 \\  \\:\\/:/__\\/@
  \\  \\::/     @
   \\  \\:\\     @
    \\  \\:\\    @
     \\__\\/    @@
            @
    ___     @
   /  /\\    @
  /  /:/    @
 /__/::\\    @
 \\__\\/\\:\\__ @
    \\  \\:\\/\\@
     \\__\\::/@
     /__/:/ @
     \\__\\/  @
            @@
    ___    @
   /  /\\   @
  /  /:/   @
 /__/::\\   @
 \\__\\/\\:\\  @
    \\  \\:\\ @
     \\__\\:\\@
     /  /:/@
    /__/:/ @
    \\__\\/  @
           @@
      ___     @
     /__/|    @
    |  |:|    @
    |  |:|    @
  __|  |:|    @
 /__/\\_|:|____@
 \\  \\:\\/:::::/@
  \\  \\::/~~~~ @
   \\  \\:\\     @
    \\  \\:\\    @
     \\__\\/    @@
              @
              @
              @
  ___     ___ @
 /__/\\   /  /\\@
 \\  \\:\\ /  /:/@
  \\  \\:\\  /:/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @
              @@
      ___     @
     /__/\\    @
    |  |::\\   @
    |  |:|:\\  @
  __|__|:|\\:\\ @
 /__/::::| \\:\\@
 \\  \\:\\~~\\__\\/@
  \\  \\:\\      @
   \\  \\:\\     @
    \\  \\:\\    @
     \\__\\/    @@
      ___     @
     /__/\\    @
     \\  \\:\\   @
      \\  \\:\\  @
  _____\\__\\:\\ @
 /__/::::::::\\@
 \\  \\:\\~~\\~~\\/@
  \\  \\:\\  ~~~ @
   \\  \\:\\     @
    \\  \\:\\    @
     \\__\\/    @@
      ___     @
     /  /\\    @
    /  /::\\   @
   /  /:/\\:\\  @
  /  /:/  \\:\\ @
 /__/:/ \\__\\:\\@
 \\  \\:\\ /  /:/@
  \\  \\:\\  /:/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @@
      ___   @
     /  /\\  @
    /  /::\\ @
   /  /:/\\:\\@
  /  /:/~/:/@
 /__/:/ /:/ @
 \\  \\:\\/:/  @
  \\  \\::/   @
   \\  \\:\\   @
    \\  \\:\\  @
     \\__\\/  @@
              @
      ___     @
     /  /\\    @
    /  /::\\   @
   /  /:/\\:\\  @
  /  /:/~/::\\ @
 /__/:/ /:/\\:\\@
 \\  \\:\\/:/__\\/@
  \\  \\::/     @
   \\__\\/      @
              @@
      ___     @
     /  /\\    @
    /  /::\\   @
   /  /:/\\:\\  @
  /  /:/~/:/  @
 /__/:/ /:/___@
 \\  \\:\\/:::::/@
  \\  \\::/~~~~ @
   \\  \\:\\     @
    \\  \\:\\    @
     \\__\\/    @@
      ___     @
     /  /\\    @
    /  /:/_   @
   /  /:/ /\\  @
  /  /:/ /::\\ @
 /__/:/ /:/\\:\\@
 \\  \\:\\/:/~/:/@
  \\  \\::/ /:/ @
   \\__\\/ /:/  @
     /__/:/   @
     \\__\\/    @@
            @
      ___   @
     /  /\\  @
    /  /:/  @
   /  /:/   @
  /  /::\\   @
 /__/:/\\:\\  @
 \\__\\/  \\:\\ @
      \\  \\:\\@
       \\__\\/@
            @@
      ___     @
     /__/\\    @
     \\  \\:\\   @
      \\  \\:\\  @
  ___  \\  \\:\\ @
 /__/\\  \\__\\:\\@
 \\  \\:\\ /  /:/@
  \\  \\:\\  /:/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @@
             @
      ___    @
     /__/\\   @
     \\  \\:\\  @
      \\  \\:\\ @
  ___  \\__\\:\\@
 /__/\\ |  |:|@
 \\  \\:\\|  |:|@
  \\  \\:\\__|:|@
   \\__\\::::/ @
       ~~~~  @@
      ___     @
     /__/\\    @
    _\\_ \\:\\   @
   /__/\\ \\:\\  @
  _\\_ \\:\\ \\:\\ @
 /__/\\ \\:\\ \\:\\@
 \\  \\:\\ \\:\\/:/@
  \\  \\:\\ \\::/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @@
      ___     @
     /__/|    @
    |  |:|    @
    |  |:|    @
  __|__|:|    @
 /__/::::\\____@
    ~\\~~\\::::/@
     |~~|:|~~ @
     |  |:|   @
     |  |:|   @
     |__|/    @@
            @
      ___   @
     /__/|  @
    |  |:|  @
    |  |:|  @
  __|__|:|  @
 /__/::::\\  @
    ~\\~~\\:\\ @
      \\  \\:\\@
       \\__\\/@
            @@
      ___     @
     /  /\\    @
    /  /::|   @
   /  /:/:|   @
  /  /:/|:|__ @
 /__/:/ |:| /\\@
 \\__\\/  |:|/:/@
     |  |:/:/ @
     |  |::/  @
     |  |:/   @
     |__|/    @@
      ___     @
     /  /\\    @
    /  /::\\   @
   /  /::::\\  @
  /  /::::::\\ @
 /__/:::LS:::\\@
 \\  \\::1994::/@
  \\  \\::::::/ @
   \\  \\::::/  @
    \\  \\::/   @
     \\__\\/    @@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
      ___     @
     /  /\\    @
    /  /::\\   @
   /  /:/\\:\\  @
  /  /:/~/::\\ @
 /__/:/ /:/\\:\\@
 \\  \\:\\/:/__\\/@
  \\  \\::/     @
   \\  \\:\\     @
    \\  \\:\\    @
     \\__\\/    @@
              @
     _____    @
    /  /::\\   @
   /  /:/\\:\\  @
  /  /:/~/::\\ @
 /__/:/ /:/\\:|@
 \\  \\:\\/:/~/:/@
  \\  \\::/ /:/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @@
      ___     @
     /  /\\    @
    /  /:/    @
   /  /:/     @
  /  /:/  ___ @
 /__/:/  /  /\\@
 \\  \\:\\ /  /:/@
  \\  \\:\\  /:/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @@
     _____    @
    /  /::\\   @
   /  /:/\\:\\  @
  /  /:/  \\:\\ @
 /__/:/ \\__\\:|@
 \\  \\:\\ /  /:/@
  \\  \\:\\  /:/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @
              @@
      ___     @
     /  /\\    @
    /  /:/_   @
   /  /:/ /\\  @
  /  /:/ /:/_ @
 /__/:/ /:/ /\\@
 \\  \\:\\/:/ /:/@
  \\  \\::/ /:/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @@
      ___   @
     /  /\\  @
    /  /:/_ @
   /  /:/ /\\@
  /  /:/ /:/@
 /__/:/ /:/ @
 \\  \\:\\/:/  @
  \\  \\::/   @
   \\  \\:\\   @
    \\  \\:\\  @
     \\__\\/  @@
      ___     @
     /  /\\    @
    /  /:/_   @
   /  /:/ /\\  @
  /  /:/_/::\\ @
 /__/:/__\\/\\:\\@
 \\  \\:\\ /~~/:/@
  \\  \\:\\  /:/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @@
      ___     @
     /__/\\    @
     \\  \\:\\   @
      \\__\\:\\  @
  ___ /  /::\\ @
 /__/\\  /:/\\:\\@
 \\  \\:\\/:/__\\/@
  \\  \\::/     @
   \\  \\:\\     @
    \\  \\:\\    @
     \\__\\/    @@
            @
    ___     @
   /  /\\    @
  /  /:/    @
 /__/::\\    @
 \\__\\/\\:\\__ @
    \\  \\:\\/\\@
     \\__\\::/@
     /__/:/ @
     \\__\\/  @
            @@
    ___    @
   /  /\\   @
  /  /:/   @
 /__/::\\   @
 \\__\\/\\:\\  @
    \\  \\:\\ @
     \\__\\:\\@
     /  /:/@
    /__/:/ @
    \\__\\/  @
           @@
      ___     @
     /__/|    @
    |  |:|    @
    |  |:|    @
  __|  |:|    @
 /__/\\_|:|____@
 \\  \\:\\/:::::/@
  \\  \\::/~~~~ @
   \\  \\:\\     @
    \\  \\:\\    @
     \\__\\/    @@
              @
              @
              @
  ___     ___ @
 /__/\\   /  /\\@
 \\  \\:\\ /  /:/@
  \\  \\:\\  /:/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @
              @@
      ___     @
     /__/\\    @
    |  |::\\   @
    |  |:|:\\  @
  __|__|:|\\:\\ @
 /__/::::| \\:\\@
 \\  \\:\\~~\\__\\/@
  \\  \\:\\      @
   \\  \\:\\     @
    \\  \\:\\    @
     \\__\\/    @@
      ___     @
     /__/\\    @
     \\  \\:\\   @
      \\  \\:\\  @
  _____\\__\\:\\ @
 /__/::::::::\\@
 \\  \\:\\~~\\~~\\/@
  \\  \\:\\  ~~~ @
   \\  \\:\\     @
    \\  \\:\\    @
     \\__\\/    @@
      ___     @
     /  /\\    @
    /  /::\\   @
   /  /:/\\:\\  @
  /  /:/  \\:\\ @
 /__/:/ \\__\\:\\@
 \\  \\:\\ /  /:/@
  \\  \\:\\  /:/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @@
      ___   @
     /  /\\  @
    /  /::\\ @
   /  /:/\\:\\@
  /  /:/~/:/@
 /__/:/ /:/ @
 \\  \\:\\/:/  @
  \\  \\::/   @
   \\  \\:\\   @
    \\  \\:\\  @
     \\__\\/  @@
              @
      ___     @
     /  /\\    @
    /  /::\\   @
   /  /:/\\:\\  @
  /  /:/~/::\\ @
 /__/:/ /:/\\:\\@
 \\  \\:\\/:/__\\/@
  \\  \\::/     @
   \\__\\/      @
              @@
      ___     @
     /  /\\    @
    /  /::\\   @
   /  /:/\\:\\  @
  /  /:/~/:/  @
 /__/:/ /:/___@
 \\  \\:\\/:::::/@
  \\  \\::/~~~~ @
   \\  \\:\\     @
    \\  \\:\\    @
     \\__\\/    @@
      ___     @
     /  /\\    @
    /  /:/_   @
   /  /:/ /\\  @
  /  /:/ /::\\ @
 /__/:/ /:/\\:\\@
 \\  \\:\\/:/~/:/@
  \\  \\::/ /:/ @
   \\__\\/ /:/  @
     /__/:/   @
     \\__\\/    @@
            @
      ___   @
     /  /\\  @
    /  /:/  @
   /  /:/   @
  /  /::\\   @
 /__/:/\\:\\  @
 \\__\\/  \\:\\ @
      \\  \\:\\@
       \\__\\/@
            @@
      ___     @
     /__/\\    @
     \\  \\:\\   @
      \\  \\:\\  @
  ___  \\  \\:\\ @
 /__/\\  \\__\\:\\@
 \\  \\:\\ /  /:/@
  \\  \\:\\  /:/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @@
             @
      ___    @
     /__/\\   @
     \\  \\:\\  @
      \\  \\:\\ @
  ___  \\__\\:\\@
 /__/\\ |  |:|@
 \\  \\:\\|  |:|@
  \\  \\:\\__|:|@
   \\__\\::::/ @
       ~~~~  @@
      ___     @
     /__/\\    @
    _\\_ \\:\\   @
   /__/\\ \\:\\  @
  _\\_ \\:\\ \\:\\ @
 /__/\\ \\:\\ \\:\\@
 \\  \\:\\ \\:\\/:/@
  \\  \\:\\ \\::/ @
   \\  \\:\\/:/  @
    \\  \\::/   @
     \\__\\/    @@
      ___     @
     /__/|    @
    |  |:|    @
    |  |:|    @
  __|__|:|    @
 /__/::::\\____@
    ~\\~~\\::::/@
     |~~|:|~~ @
     |  |:|   @
     |  |:|   @
     |__|/    @@
            @
      ___   @
     /__/|  @
    |  |:|  @
    |  |:|  @
  __|__|:|  @
 /__/::::\\  @
    ~\\~~\\:\\ @
      \\  \\:\\@
       \\__\\/@
            @@
      ___     @
     /  /\\    @
    /  /::|   @
   /  /:/:|   @
  /  /:/|:|__ @
 /__/:/ |:| /\\@
 \\__\\/  |:|/:/@
     |  |:/:/ @
     |  |::/  @
     |  |:/   @
     |__|/    @@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
`,qv=`flf2a$ 7 7 13 -1 7 0 0 0
Font Author: ?

More Info:

https://web.archive.org/web/20120819044459/http://www.roysac.com/thedrawfonts-tdf.asp

FIGFont created with: http://patorjk.com/figlet-editor
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@@
██ @
██ @
██ @
   @
██ @
   @
   @@
@
@
@
@
@
@
@@
 ██  ██  @
████████ @
 ██  ██  @
████████ @
 ██  ██  @
         @
         @@
▄▄███▄▄·@
██      @
███████ @
     ██ @
███████ @
  ▀▀▀   @
        @@
██  ██ @
   ██  @
  ██   @
 ██    @
██  ██ @
       @
       @@
   ██    @
   ██    @
████████ @
██  ██   @
██████   @
         @
         @@
@
@
@
@
@
@
@@
 ██ @
██  @
██  @
██  @
 ██ @
    @
    @@
██  @
 ██ @
 ██ @
 ██ @
██  @
    @
    @@
      @
▄ ██ ▄@
 ████ @
▀ ██ ▀@
      @
      @
      @@
@
@
@
@
@
@
@@
   @
   @
   @
   @
▄█ @
   @
   @@
      @
      @
█████ @
      @
      @
      @
      @@
   @
   @
   @
   @
██ @
   @
   @@
    ██ @
   ██  @
  ██   @
 ██    @
██     @
       @
       @@
 ██████  @
██  ████ @
██ ██ ██ @
████  ██ @
 ██████  @
         @
         @@
 ██ @
███ @
 ██ @
 ██ @
 ██ @
    @
    @@
██████  @
     ██ @
 █████  @
██      @
███████ @
        @
        @@
██████  @
     ██ @
 █████  @
     ██ @
██████  @
        @
        @@
██   ██ @
██   ██ @
███████ @
     ██ @
     ██ @
        @
        @@
███████ @
██      @
███████ @
     ██ @
███████ @
        @
        @@
 ██████  @
██       @
███████  @
██    ██ @
 ██████  @
         @
         @@
███████ @
     ██ @
    ██  @
   ██   @
   ██   @
        @
        @@
 █████  @
██   ██ @
 █████  @
██   ██ @
 █████  @
        @
        @@
 █████  @
██   ██ @
 ██████ @
     ██ @
 █████  @
        @
        @@
   @
██ @
   @
██ @
   @
   @
   @@
   @
██ @
   @
▄█ @
▀  @
   @
   @@
  ██ @
 ██  @
██   @
 ██  @
  ██ @
     @
     @@
@
@
@
@
@
@
@@
██   @
 ██  @
  ██ @
 ██  @
██   @
     @
     @@
██████  @
     ██ @
  ▄███  @
  ▀▀    @
  ██    @
        @
        @@
 ██████  @
██    ██ @
██ ██ ██ @
██ ██ ██ @
 █ ████  @
         @
         @@
 █████  @
██   ██ @
███████ @
██   ██ @
██   ██ @
        @
        @@
██████  @
██   ██ @
██████  @
██   ██ @
██████  @
        @
        @@
 ██████ @
██      @
██      @
██      @
 ██████ @
        @
        @@
██████  @
██   ██ @
██   ██ @
██   ██ @
██████  @
        @
        @@
███████ @
██      @
█████   @
██      @
███████ @
        @
        @@
███████ @
██      @
█████   @
██      @
██      @
        @
        @@
 ██████  @
██       @
██   ███ @
██    ██ @
 ██████  @
         @
         @@
██   ██ @
██   ██ @
███████ @
██   ██ @
██   ██ @
        @
        @@
██ @
██ @
██ @
██ @
██ @
   @
   @@
     ██ @
     ██ @
     ██ @
██   ██ @
 █████  @
        @
        @@
██   ██ @
██  ██  @
█████   @
██  ██  @
██   ██ @
        @
        @@
██      @
██      @
██      @
██      @
███████ @
        @
        @@
███    ███ @
████  ████ @
██ ████ ██ @
██  ██  ██ @
██      ██ @
           @
           @@
███    ██ @
████   ██ @
██ ██  ██ @
██  ██ ██ @
██   ████ @
          @
          @@
 ██████  @
██    ██ @
██    ██ @
██    ██ @
 ██████  @
         @
         @@
██████  @
██   ██ @
██████  @
██      @
██      @
        @
        @@
 ██████  @
██    ██ @
██    ██ @
██ ▄▄ ██ @
 ██████  @
    ▀▀   @
         @@
██████  @
██   ██ @
██████  @
██   ██ @
██   ██ @
        @
        @@
███████ @
██      @
███████ @
     ██ @
███████ @
        @
        @@
████████ @
   ██    @
   ██    @
   ██    @
   ██    @
         @
         @@
██    ██ @
██    ██ @
██    ██ @
██    ██ @
 ██████  @
         @
         @@
██    ██ @
██    ██ @
██    ██ @
 ██  ██  @
  ████   @
         @
         @@
██     ██ @
██     ██ @
██  █  ██ @
██ ███ ██ @
 ███ ███  @
          @
          @@
██   ██ @
 ██ ██  @
  ███   @
 ██ ██  @
██   ██ @
        @
        @@
██    ██ @
 ██  ██  @
  ████   @
   ██    @
   ██    @
         @
         @@
███████ @
   ███  @
  ███   @
 ███    @
███████ @
        @
        @@
███ @
██  @
██  @
██  @
███ @
    @
    @@
@
@
@
@
@
@
@@
███ @
 ██ @
 ██ @
 ██ @
███ @
    @
    @@
 ███  @
██ ██ @
      @
      @
      @
      @
      @@
        @
        @
        @
        @
███████ @
        @
        @@
@
@
@
@
@
@
@@
 █████  @
██   ██ @
███████ @
██   ██ @
██   ██ @
        @
        @@
██████  @
██   ██ @
██████  @
██   ██ @
██████  @
        @
        @@
 ██████ @
██      @
██      @
██      @
 ██████ @
        @
        @@
██████  @
██   ██ @
██   ██ @
██   ██ @
██████  @
        @
        @@
███████ @
██      @
█████   @
██      @
███████ @
        @
        @@
███████ @
██      @
█████   @
██      @
██      @
        @
        @@
 ██████  @
██       @
██   ███ @
██    ██ @
 ██████  @
         @
         @@
██   ██ @
██   ██ @
███████ @
██   ██ @
██   ██ @
        @
        @@
██ @
██ @
██ @
██ @
██ @
   @
   @@
     ██ @
     ██ @
     ██ @
██   ██ @
 █████  @
        @
        @@
██   ██ @
██  ██  @
█████   @
██  ██  @
██   ██ @
        @
        @@
██      @
██      @
██      @
██      @
███████ @
        @
        @@
███    ███ @
████  ████ @
██ ████ ██ @
██  ██  ██ @
██      ██ @
           @
           @@
███    ██ @
████   ██ @
██ ██  ██ @
██  ██ ██ @
██   ████ @
          @
          @@
 ██████  @
██    ██ @
██    ██ @
██    ██ @
 ██████  @
         @
         @@
██████  @
██   ██ @
██████  @
██      @
██      @
        @
        @@
 ██████  @
██    ██ @
██    ██ @
██ ▄▄ ██ @
 ██████  @
    ▀▀   @
         @@
██████  @
██   ██ @
██████  @
██   ██ @
██   ██ @
        @
        @@
███████ @
██      @
███████ @
     ██ @
███████ @
        @
        @@
████████ @
   ██    @
   ██    @
   ██    @
   ██    @
         @
         @@
██    ██ @
██    ██ @
██    ██ @
██    ██ @
 ██████  @
         @
         @@
██    ██ @
██    ██ @
██    ██ @
 ██  ██  @
  ████   @
         @
         @@
██     ██ @
██     ██ @
██  █  ██ @
██ ███ ██ @
 ███ ███  @
          @
          @@
██   ██ @
 ██ ██  @
  ███   @
 ██ ██  @
██   ██ @
        @
        @@
██    ██ @
 ██  ██  @
  ████   @
   ██    @
   ██    @
         @
         @@
███████ @
   ███  @
  ███   @
 ███    @
███████ @
        @
        @@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@`,Yv=`flf2a$ 6 5 16 15 13 0 24463 229
Standard by Glenn Chappell & Ian Chai 3/93 -- based on Frank's .sig
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Modified for figlet 2.2 by John Cowan <cowan@ccil.org>
  to add Latin-{2,3,4,5} support (Unicode U+0100-017F).
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

Font modified May 20, 2012 by patorjk to add the 0xCA0 character
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 |_|@
 (_)@
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
      @@
    _  _   @
  _| || |_ @
 |_  ..  _|@
 |_      _|@
   |_||_|  @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @@
  _  __@
 (_)/ /@
   / / @
  / /_ @
 /_/(_)@
       @@
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
  \\_\\@@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
 /_/ @@
       @
 __/\\__@
 \\    /@
 /_  _\\@
   \\/  @
       @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
        @@
    @
    @
    @
  _ @
 ( )@
 |/ @@
        @
        @
  _____ @
 |_____|@
    $   @
        @@
    @
    @
    @
  _ @
 (_)@
    @@
     __@
    / /@
   / / @
  / /  @
 /_/   @
       @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _ @
 / |@
 | |@
 | |@
 |_|@
    @@
  ____  @
 |___ \\ @
   __) |@
  / __/ @
 |_____|@
        @@
  _____ @
 |___ / @
   |_ \\ @
  ___) |@
 |____/ @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    |_|  @
         @@
  ____  @
 | ___| @
 |___ \\ @
  ___) |@
 |____/ @
        @@
   __   @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @@
  _____ @
 |___  |@
    / / @
   / /  @
  /_/   @
        @@
   ___  @
  ( _ ) @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    /_/ @
        @@
    @
  _ @
 (_)@
  _ @
 (_)@
    @@
    @
  _ @
 (_)@
  _ @
 ( )@
 |/ @@
   __@
  / /@
 / / @
 \\ \\ @
  \\_\\@
     @@
        @
  _____ @
 |_____|@
 |_____|@
    $   @
        @@
 __  @
 \\ \\ @
  \\ \\@
  / /@
 /_/ @
     @@
  ___ @
 |__ \\@
   / /@
  |_| @
  (_) @
      @@
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @@
     _    @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @@
  ____  @
 | __ ) @
 |  _ \\ @
 | |_) |@
 |____/ @
        @@
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
        @@
  ____  @
 |  _ \\ @
 | | | |@
 | |_| |@
 |____/ @
        @@
  _____ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @@
  _____ @
 |  ___|@
 | |_   @
 |  _|  @
 |_|    @
        @@
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
      _ @
     | |@
  _  | |@
 | |_| |@
  \\___/ @
        @@
  _  __@
 | |/ /@
 | ' / @
 | . \\ @
 |_|\\_\\@
       @@
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
        @@
  __  __ @
 |  \\/  |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  __/ @
 |_|    @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\__\\_\\@
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @@
 __     __@
 \\ \\   / /@
  \\ \\ / / @
   \\ V /  @
    \\_/   @
          @@
 __        __@
 \\ \\      / /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
 __  __@
 \\ \\/ /@
  \\  / @
  /  \\ @
 /_/\\_\\@
       @@
 __   __@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @@
  _____@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
  __ @
 | _|@
 | | @
 | | @
 | | @
 |__|@@
 __    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @@
  __ @
 |_ |@
  | |@
  | |@
  | |@
 |__|@@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
     @@
        @
        @
        @
        @
  _____ @
 |_____|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @@
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
      _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 |_|  @
      @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
  _     @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
    _ @
   (_)@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @@
  _ @
 | |@
 | |@
 | |@
 |_|@
    @@
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @@
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     |_|@@
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @@
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @@
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @@
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
      @
  ____@
 |_  /@
  / / @
 /___|@
      @@
    __@
   / /@
  | | @
 < <  @
  | | @
   \\_\\@@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   > >@
  | | @
 /_/  @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
      @@
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
162  CENT SIGN
    _  @
   | | @
  / __)@
 | (__ @
  \\   )@
   |_| @@
163  POUND SIGN
    ___  @
   / ,_\\ @
 _| |_   @
  | |___ @
 (_,____|@
         @@
164  CURRENCY SIGN
 /\\___/\\@
 \\  _  /@
 | (_) |@
 / ___ \\@
 \\/   \\/@
        @@
165  YEN SIGN
  __ __ @
  \\ V / @
 |__ __|@
 |__ __|@
   |_|  @
        @@
166  BROKEN BAR
  _ @
 | |@
 |_|@
  _ @
 | |@
 |_|@@
167  SECTION SIGN
    __ @
  _/ _)@
 / \\ \\ @
 \\ \\\\ \\@
  \\ \\_/@
 (__/  @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
  $   $ @
  $   $ @
        @@
169  COPYRIGHT SIGN
    _____   @
   / ___ \\  @
  / / __| \\ @
 | | (__   |@
  \\ \\___| / @
   \\_____/  @@
170  FEMININE ORDINAL INDICATOR
  __ _ @
 / _\` |@
 \\__,_|@
 |____|@
    $  @
       @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   ____@
  / / /@
 / / / @
 \\ \\ \\ @
  \\_\\_\\@
       @@
172  NOT SIGN
        @
  _____ @
 |___  |@
     |_|@
    $   @
        @@
173  SOFT HYPHEN
       @
       @
  ____ @
 |____|@
    $  @
       @@
174  REGISTERED SIGN
    _____   @
   / ___ \\  @
  / | _ \\ \\ @
 |  |   /  |@
  \\ |_|_\\ / @
   \\_____/  @@
175  MACRON
  _____ @
 |_____|@
    $   @
    $   @
    $   @
        @@
176  DEGREE SIGN
   __  @
  /  \\ @
 | () |@
  \\__/ @
    $  @
       @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
  _|_|_ @
 |_____|@
        @@
178  SUPERSCRIPT TWO
  ___ @
 |_  )@
  / / @
 /___|@
   $  @
      @@
179  SUPERSCRIPT THREE
  ____@
 |__ /@
  |_ \\@
 |___/@
   $  @
      @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
  $ @
    @@
181  MICRO SIGN
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 |_|    @@
182  PILCROW SIGN
   _____ @
  /     |@
 | (| | |@
  \\__ | |@
    |_|_|@
         @@
183  MIDDLE DOT
    @
  _ @
 (_)@
  $ @
  $ @
    @@
184  CEDILLA
    @
    @
    @
    @
  _ @
 )_)@@
185  SUPERSCRIPT ONE
  _ @
 / |@
 | |@
 |_|@
  $ @
    @@
186  MASCULINE ORDINAL INDICATOR
  ___ @
 / _ \\@
 \\___/@
 |___|@
   $  @
      @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____  @
 \\ \\ \\ @
  \\ \\ \\@
  / / /@
 /_/_/ @
       @@
188  VULGAR FRACTION ONE QUARTER
  _   __    @
 / | / / _  @
 | |/ / | | @
 |_/ /|_  _|@
  /_/   |_| @
            @@
189  VULGAR FRACTION ONE HALF
  _   __   @
 / | / /__ @
 | |/ /_  )@
 |_/ / / / @
  /_/ /___|@
           @@
190  VULGAR FRACTION THREE QUARTERS
  ____  __    @
 |__ / / / _  @
  |_ \\/ / | | @
 |___/ /|_  _|@
    /_/   |_| @
              @@
191  INVERTED QUESTION MARK
   _  @
  (_) @
  | | @
 / /_ @
 \\___|@
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   __   @
   \\_\\  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
193  LATIN CAPITAL LETTER A WITH ACUTE
    __  @
   /_/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
   /\\/| @
  |/\\/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    _   @
   (o)  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
198  LATIN CAPITAL LETTER AE
     ______ @
    /  ____|@
   / _  _|  @
  / __ |___ @
 /_/ |_____|@
            @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
    )_) @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   __   @
  _\\_\\_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
    __  @
  _/_/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
 | ____|@
 |  _|_ @
 |_____|@
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
 | ____|@
 |  _|_ @
 |_____|@
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
  | | @
 |___|@
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
  | | @
 |___|@
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
  | | @
 |___|@
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
   | |  @
  |___| @
        @@
208  LATIN CAPITAL LETTER ETH
    ____  @
   |  _ \\ @
  _| |_| |@
 |__ __| |@
   |____/ @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/|@
  |/\\/ @
 | \\| |@
 | .\` |@
 |_|\\_|@
       @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
215  MULTIPLICATION SIGN
     @
     @
 /\\/\\@
 >  <@
 \\/\\/@
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   ____ @
  / _// @
 | |// |@
 | //| |@
  //__/ @
        @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\___/ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    __  @
 __/_/__@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
222  LATIN CAPITAL LETTER THORN
  _     @
 | |___ @
 |  __ \\@
 |  ___/@
 |_|    @
        @@
223  LATIN SMALL LETTER SHARP S
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
224  LATIN SMALL LETTER A WITH GRAVE
   __   @
   \\_\\_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
225  LATIN SMALL LETTER A WITH ACUTE
    __  @
   /_/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/| @
  |/\\/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
    __  @
   (()) @
  / _ '|@
 | (_| |@
  \\__,_|@
        @@
230  LATIN SMALL LETTER AE
           @
   __ ____ @
  / _\`  _ \\@
 | (_|  __/@
  \\__,____|@
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @@
232  LATIN SMALL LETTER E WITH GRAVE
   __  @
   \\_\\ @
  / _ \\@
 |  __/@
  \\___|@
       @@
233  LATIN SMALL LETTER E WITH ACUTE
    __ @
   /_/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   //\\ @
  |/_\\|@
  / _ \\@
 |  __/@
  \\___|@
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
 | |@
 | |@
 |_|@
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
 | |@
 | |@
 |_|@
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
  | | @
  | | @
  |_| @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
   | |  @
   | |  @
   |_|  @
        @@
240  LATIN SMALL LETTER ETH
   /\\/\\ @
   >  < @
  _\\/\\ |@
 / __\` |@
 \\____/ @
        @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/| @
  |/\\/  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
242  LATIN SMALL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
245  LATIN SMALL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
247  DIVISION SIGN
        @
    _   @
  _(_)_ @
 |_____|@
   (_)  @
        @@
248  LATIN SMALL LETTER O WITH STROKE
         @
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
250  LATIN SMALL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
254  LATIN SMALL LETTER THORN
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
   ____ @
  /___/ @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0101  LATIN SMALL LETTER A WITH MACRON
    ___ @
   /_ _/@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
  _   _ @
  \\\\_// @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0103  LATIN SMALL LETTER A WITH BREVE
   \\_/  @
   ___  @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
        @
    _   @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
     (_(@@
0x0105  LATIN SMALL LETTER A WITH OGONEK
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
     (_(@@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
     __ @
   _/_/ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x0107  LATIN SMALL LETTER C WITH ACUTE
    __ @
   /__/@
  / __|@
 | (__ @
  \\___|@
       @@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
     /\\ @
   _//\\\\@
  / ___|@
 | |___ @
  \\____|@
        @@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
    /\\ @
   /_\\ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
    []  @
   ____ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
   []  @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010C  LATIN CAPITAL LETTER C WITH CARON
   \\\\// @
   _\\/_ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010D  LATIN SMALL LETTER C WITH CARON
   \\\\//@
   _\\/ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010E  LATIN CAPITAL LETTER D WITH CARON
   \\\\// @
  __\\/  @
 |  _ \\ @
 | |_| |@
 |____/ @
        @@
0x010F  LATIN SMALL LETTER D WITH CARON
  \\/  _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
   ____   @
  |_ __ \\ @
 /| |/ | |@
 /|_|/_| |@
  |_____/ @
          @@
0x0111  LATIN SMALL LETTER D WITH STROKE
    ---|@
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
   ____ @
  /___/ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0113  LATIN SMALL LETTER E WITH MACRON
    ____@
   /_ _/@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0114  LATIN CAPITAL LETTER E WITH BREVE
  _   _ @
  \\\\_// @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0115  LATIN SMALL LETTER E WITH BREVE
  \\\\  //@
    --  @
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
    []  @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
    [] @
    __ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
        @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
    (__(@@
0x0119  LATIN SMALL LETTER E WITH OGONEK
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
    (_(@@
0x011A  LATIN CAPITAL LETTER E WITH CARON
   \\\\// @
  __\\/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x011B  LATIN SMALL LETTER E WITH CARON
   \\\\//@
    \\/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
   _/\\_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
     /\\ @
   _/_ \\@
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
   _\\/_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011F  LATIN SMALL LETTER G WITH BREVE
  \\___/ @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
   _[]_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
   []   @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
   )__) @@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |_))))@@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
  _/ \\_ @
 | / \\ |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
  _  /\\ @
 | |//\\ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
  _   _ @
 | |=| |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0127  LATIN SMALL LETTER H WITH STROKE
  _     @
 |=|__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
  /\\//@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0129  LATIN SMALL LETTER I WITH TILDE
    @
 /\\/@
 | |@
 | |@
 |_|@
    @@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
 /___/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012B  LATIN SMALL LETTER I WITH MACRON
  ____@
 /___/@
  | | @
  | | @
  |_| @
      @@
0x012C  LATIN CAPITAL LETTER I WITH BREVE
  \\__/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012D  LATIN SMALL LETTER I WITH BREVE
    @
 \\_/@
 | |@
 | |@
 |_|@
    @@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
  (__(@@
0x012F  LATIN SMALL LETTER I WITH OGONEK
  _  @
 (_) @
 | | @
 | | @
 |_|_@
  (_(@@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
  _[] @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0131  LATIN SMALL LETTER DOTLESS I
    @
  _ @
 | |@
 | |@
 |_|@
    @@
0x0132  LATIN CAPITAL LIGATURE IJ
  ___  _ @
 |_ _|| |@
  | | | |@
  | |_| |@
 |__|__/ @
         @@
0x0133  LATIN SMALL LIGATURE IJ
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 |_|_/ |@
   |__/ @@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
      /\\ @
     /_\\|@
  _  | | @
 | |_| | @
  \\___/  @
         @@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
    /\\@
   /_\\@
   | |@
   | |@
  _/ |@
 |__/ @@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
  _  _  @
 | |/ / @
 | ' /  @
 | . \\  @
 |_|\\_\\ @
    )__)@@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
    )_)@@
0x0138  LATIN SMALL LETTER KRA
       @
  _ __ @
 | |/ \\@
 |   < @
 |_|\\_\\@
       @@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
  _   //@
 | | // @
 | |    @
 | |___ @
 |_____|@
        @@
0x013A  LATIN SMALL LETTER L WITH ACUTE
  //@
 | |@
 | |@
 | |@
 |_|@
    @@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
    )__)@@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
  _   @
 | |  @
 | |  @
 | |  @
 |_|  @
   )_)@@
0x013D  LATIN CAPITAL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |___ @
 |_____|@
        @@
0x013E  LATIN SMALL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |    @
 |_|    @
        @@
0x013F  LATIN CAPITAL LETTER L WITH MIDDLE DOT
  _     @
 | |    @
 | | [] @
 | |___ @
 |_____|@
        @@
0x0140  LATIN SMALL LETTER L WITH MIDDLE DOT
  _    @
 | |   @
 | | []@
 | |   @
 |_|   @
       @@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
  __    @
 | //   @
 |//|   @
 // |__ @
 |_____|@
        @@
0x0142  LATIN SMALL LETTER L WITH STROKE
  _ @
 | |@
 |//@
 //|@
 |_|@
    @@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
  _/ /_ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0144  LATIN SMALL LETTER N WITH ACUTE
     _  @
  _ /_/ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
 )_)    @@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
 )_)    @@
0x0147  LATIN CAPITAL LETTER N WITH CARON
  _\\/ _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0148  LATIN SMALL LETTER N WITH CARON
  \\\\//  @
  _\\/_  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0149  LATIN SMALL LETTER N PRECEDED BY APOSTROPHE
          @
  _  __   @
 ( )| '_\\ @
 |/| | | |@
   |_| |_|@
          @@
0x014A  LATIN CAPITAL LETTER ENG
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\ |@
     )_)@@
0x014B  LATIN SMALL LETTER ENG
  _ __  @
 | '_ \\ @
 | | | |@
 |_| | |@
     | |@
    |__ @@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014D  LATIN SMALL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014E  LATIN CAPITAL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x014F  LATIN SMALL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0152  LATIN CAPITAL LIGATURE OE
   ___  ___ @
  / _ \\| __|@
 | | | |  | @
 | |_| | |__@
  \\___/|____@
            @@
0x0153  LATIN SMALL LIGATURE OE
             @
   ___   ___ @
  / _ \\ / _ \\@
 | (_) |  __/@
  \\___/ \\___|@
             @@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
  _/_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0155  LATIN SMALL LETTER R WITH ACUTE
     __@
  _ /_/@
 | '__|@
 | |   @
 |_|   @
       @@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
 )_)    @@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
   )_) @@
0x0158  LATIN CAPITAL LETTER R WITH CARON
  _\\_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0159  LATIN SMALL LETTER R WITH CARON
  \\\\// @
  _\\/_ @
 | '__|@
 | |   @
 |_|   @
       @@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
  _/_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015B  LATIN SMALL LETTER S WITH ACUTE
    __@
  _/_/@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
  _/\\_  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
      @
  /_\\_@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
    )__)@@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
   )_)@@
0x0160  LATIN CAPITAL LETTER S WITH CARON
  _\\_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x0161  LATIN SMALL LETTER S WITH CARON
  \\\\//@
  _\\/ @
 / __|@
 \\__ \\@
 |___/@
      @@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
    )__)@@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
   )_)@@
0x0164  LATIN CAPITAL LETTER T WITH CARON
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
0x0165  LATIN SMALL LETTER T WITH CARON
  \\/  @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
  _____ @
 |_   _|@
   | |  @
  -|-|- @
   |_|  @
        @@
0x0167  LATIN SMALL LETTER T WITH STROKE
  _   @
 | |_ @
 | __|@
 |-|_ @
  \\__|@
      @@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0169  LATIN SMALL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
   ____ @
  /__ _/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016B  LATIN SMALL LETTER U WITH MACRON
   ____ @
  / _  /@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\____|@
        @@
0x016D  LATIN SMALL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
    O   @
  __  _ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
    O   @
  __ __ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
   -- --@
  /_//_/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
    ____@
  _/_/_/@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
    (__(@@
0x0173  LATIN SMALL LETTER U WITH OGONEK
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
     (_(@@
0x0174  LATIN CAPITAL LETTER W WITH CIRCUMFLEX
 __    /\\  __@
 \\ \\  //\\\\/ /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
0x0175  LATIN SMALL LETTER W WITH CIRCUMFLEX
      /\\   @
 __  //\\\\__@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
0x0176  LATIN CAPITAL LETTER Y WITH CIRCUMFLEX
    /\\  @
 __//\\\\ @
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0177  LATIN SMALL LETTER Y WITH CIRCUMFLEX
    /\\  @
   //\\\\ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0178  LATIN CAPITAL LETTER Y WITH DIAERESIS
  []  []@
 __    _@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
  __/_/@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
    _ @
  _/_/@
 |_  /@
  / / @
 /___|@
      @@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
  __[]_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
   [] @
  ____@
 |_  /@
  / / @
 /___|@
      @@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
  _\\_/_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017E  LATIN SMALL LETTER Z WITH CARON
  \\\\//@
  _\\/_@
 |_  /@
  / / @
 /___|@
      @@
0x017F  LATIN SMALL LETTER LONG S
     __ @
    / _|@
 |-| |  @
 |-| |  @
   |_|  @
        @@
0x02C7  CARON
 \\\\//@
  \\/ @
    $@
    $@
    $@
    $@@
0x02D8  BREVE
 \\\\_//@
  \\_/ @
     $@
     $@
     $@
     $@@
0x02D9  DOT ABOVE
 []@
  $@
  $@
  $@
  $@
  $@@
0x02DB  OGONEK
    $@
    $@
    $@
    $@
    $@
 )_) @@
0x02DD  DOUBLE ACUTE ACCENT
  _ _ @
 /_/_/@
     $@
     $@
     $@
     $@@
0xCA0  KANNADA LETTER TTHA
   _____)@
  /_ ___/@
  / _ \\  @
 | (_) | @
 $\\___/$ @
         @@
         `;El.parseFont("Standard",Yv);El.parseFont("Blocks",Bv);El.parseFont("Iso",Gv);El.parseFont("ANSI_Shadow",Hv);El.parseFont("Regular",qv);El.parseFont("Alpha",Uv);El.parseFont("Bloody",jv);El.parseFont("Blur",wv);El.parseFont("Shaded",Iv);function Cu(o,n="ANSI_Shadow",u="full",a="full"){let r;return El.text(o,{font:n,horizontalLayout:u,verticalLayout:a},(f,c)=>{r=c}),r}const Vv=({lang:o="en"})=>{const n={en:{title:`
ABOUT ME 
`,intro:"Hi, I'm Walid, I'm a web developer and creative coder, I believe in crafting websites that not only work, but websites with personality, charm and a clear sense of vision.",webDeveloperHeader:"<----Web Developer---->",webDeveloperText:"Most of my work is on the front-end (although I've shipped some back-end features here and there)",webDeveloperTools:"I work with React and all the typical tools that go along with it including:",webDeveloperConclusion:"That being said, I'm very open to learning and utilizing new tools and technologies as I'm confidant in my fundamentals and problem solving skills.",creativeCoderHeader:"<----Creative Coder---->",creativeCoderText:`Coding is a creative process, yet, a lot of people, mainly educators and course sellers (and even some developers) have confined this creative process and gave it the sole purpose of "solving real user problems", but what if I'm not interested in solving anyone's problem?, what if I just want to express myself or explore a concept using code? To challenge this narrative, I make sure to actively engage in creative coding and abstract and visuals centered projects`,conceptsCommand:"concepts",conceptsInstruction:"to see what i'm talking about)",toolsText:"tools I use in the process :",typeIn:"type in"},fr:{title:`
ABOUT ME 
`,intro:"Salut, je suis Walid, je suis développeur web et codeur créatif, je crois en la création de sites web qui ne fonctionnent pas seulement, mais des sites web avec de la personnalité, du charme et une vision claire.",webDeveloperHeader:"<----Développeur Web---->",webDeveloperText:"La plupart de mon travail se concentre sur le front-end (bien que j'aie livré quelques fonctionnalités back-end ici et là)",webDeveloperTools:"Je travaille avec React et tous les outils typiques qui l'accompagnent, notamment :",webDeveloperConclusion:"Cela étant dit, je suis très ouvert à l'apprentissage et à l'utilisation de nouveaux outils et technologies car j'ai confiance en mes fondamentaux et mes compétences en résolution de problèmes.",creativeCoderHeader:"<----Codeur Créatif---->",creativeCoderText:`Le codage est un processus créatif, pourtant, beaucoup de gens, principalement des éducateurs et des vendeurs de cours (et même certains développeurs) ont confiné ce processus créatif et lui ont donné le seul but de "résoudre de vrais problèmes d'utilisateurs", mais que se passe-t-il si je ne suis pas intéressé à résoudre le problème de quelqu'un ?, que se passe-t-il si je veux juste m'exprimer ou explorer un concept en utilisant le code ? Pour défier ce récit, je m'assure de m'engager activement dans le codage créatif et les projets centrés sur l'abstrait et les visuels`,conceptsCommand:"concepts",conceptsInstruction:"pour voir de quoi je parle)",toolsText:"outils que j'utilise dans le processus :",typeIn:"tapez"}},u=n[o]||n.en,a=Cu(u.title,"Shaded");return E.jsxs(E.Fragment,{children:[E.jsx("pre",{className:"text-xl pt-2 -mb-4 glitch-text text-[clamp(0.3vw,2vw,1rem)] py-4",children:a}),E.jsxs("div",{className:"w-full md:w-5/6 lg:w-4/6",children:[E.jsx("p",{children:u.intro}),E.jsx("br",{}),E.jsx("p",{className:"text-chart-2 text-xl",children:u.webDeveloperHeader}),E.jsxs("div",{children:[u.webDeveloperText,E.jsx("br",{}),u.webDeveloperTools,E.jsxs("ul",{className:" *:inline  *:not-first:px-4",children:[E.jsx("li",{children:E.jsx("a",{href:"https://redux.js.org/introduction/getting-started/",target:"_blank",className:"text-purple-600 hover:underline",children:"☆ Redux"})}),E.jsx("li",{children:E.jsx("a",{href:"https://create-react-app.dev/docs/adding-a-router/",target:"_blank",className:"text-red-500 hover:underline",children:"☆ React Router"})}),E.jsx("li",{children:E.jsx("a",{href:"https://nextjs.org/",target:"_blank",className:"text-foreground hover:underline",children:"☆ Next JS"})}),E.jsx("li",{children:E.jsx("a",{href:"https://nodejs.org/en/",target:"_blank",className:"text-green-600 hover:underline",children:"☆ Node JS"})}),E.jsx("li",{children:E.jsx("a",{href:"https://tailwindcss.com/docs",target:"_blank",className:"text-sky-500 hover:underline",children:"☆ TailwindCSS"})}),E.jsx("li",{children:E.jsx("a",{href:"https://vitejs.dev/",target:"_blank",className:"text-yellow-500 hover:underline",children:"☆ Vite"})}),E.jsx("li",{children:E.jsx("a",{href:"https://motion.dev/docs",target:"_blank",className:"text-pink-500 hover:underline",children:"☆ Framer Motion"})})]}),E.jsx("p",{children:u.webDeveloperConclusion})]}),E.jsx("br",{}),E.jsx("p",{className:"text-chart-5 text-xl",children:u.creativeCoderHeader}),E.jsxs("p",{children:[u.creativeCoderText,"(",u.typeIn," ",E.jsx("kbd",{className:"bg-background rounded-md px-2 text-muted-foreground/50",children:u.conceptsCommand})," ",u.conceptsInstruction," ",E.jsx("br",{}),u.toolsText,E.jsx("div",{children:E.jsxs("ul",{className:" inline px-4 *:inline *:not-first:px-4",children:[E.jsx("li",{children:E.jsx("a",{href:"https://gsap.com/",target:"_blank",className:"text-green-500 hover:underline",children:"☆ GSAP"})}),E.jsx("li",{children:E.jsx("a",{href:"https://threejs.org/",target:"_blank",className:"text-indigo-600 hover:underline",children:"☆ Three JS"})})]})})]}),E.jsx("br",{})]})]})},Xv=`
███████▓▒                      ░▓█████████████████████
████▓▓                        ████████████████████████
██▒                         ░█████████████████████████
              ░▒▒▒▓        ▓██████████████████████████
            ▓██▓▓░▒░░          ░██████████████████████
           ░▓████░░ ░            █████████████████████
             ▓▓▓█▓░               ▓███████████████████
               ░░                  ▓██████████████████
▓▓███▓████                          ░███████████████▓ 
█████████▒                           ░▓███████████▓   
█████████▓                            ░██████████     
██████████▓                             ██████▓▒      
███████████                       ▓    ░████▓░      ▒█
███████████▓                       ▓   ░███▓     ░▓███
█████████████                      ░▓  ██▒     ▓██████
██████████████░                      ▓█▓    ▓████████░
██████████████▓░    ▓▒     ░▓▓▓      █░  ▒▓███████▓   
█████████████████▓▒▓▓██     ████▒      ░████████▒     
████████████████████████▒   ░█████    ▒██████▓      ▒█
█████████████████████████▓   ███▓ ░   ▒████▓    ▓█████
██████████████████████████▓  ██▓░▓█▓░ ▒██▒  ▓▓████████
████████████████████████████▓ ▒██████░░▒▓█████████████
`,Qv=()=>E.jsxs("div",{className:"block lg:flex gap-x-2",children:[E.jsx("pre",{className:"text-md ",children:Xv}),E.jsxs("div",{className:"lg:leading-[2]",children:[E.jsx("br",{}),E.jsx("p",{children:"I have seen it"}),E.jsx("p",{children:"I have heard of it"}),E.jsx("p",{children:"To draw near without reprisal"}),E.jsx("p",{children:"Bridge the chasm"}),E.jsx("p",{children:"I have sought you out"}),E.jsx("p",{children:"But it is to no avail"}),E.jsx("p",{children:"I am immobilized"}),E.jsx("p",{children:"And when you come near"}),E.jsx("p",{children:"Detaching yourself from those with everything"}),E.jsx("p",{children:"You will see in my eyes"}),E.jsx("p",{title:"love",className:`text-[8rem] font-bold tracking-[-4.5rem] whitespace-nowrap  mt-[-1.3rem] ml-[-8px] 
        transition-all cursor-help duration-300 ease-in-out hover:tracking-widest font-mono
        `,children:"FEAR"})]})]});function A0(o){return ol({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"},child:[]},{tag:"path",attr:{d:"M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"},child:[]}]})(o)}function E0(o){return ol({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"},child:[]}]})(o)}function S0(o){return ol({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"},child:[]}]})(o)}const Zv=({src:o,type:n="video/mp4",width:u="100%"})=>E.jsx("div",{style:{width:u},children:E.jsxs("video",{preload:"none",className:"rounded-xl",autoPlay:!0,loop:!0,muted:!0,width:"100%",children:[E.jsx("source",{src:o,type:n}),"Your browser does not support the video tag."]})}),kv=({videos:o,isOpen:n,onClose:u,lang:a})=>{const[r,f]=zt.useState(0),c=zt.useRef(0),d=zt.useRef(null),T=zt.useRef(null);if(!n)return null;const m=M=>{f(M),c.current=M;const H=d.current,S=H?.children[M];S&&H.scrollTo({left:S.offsetLeft,behavior:"smooth"})},g=()=>{const M=c.current===0?o.length-1:c.current-1;m(M)},y=()=>{const M=c.current===o.length-1?0:c.current+1;m(M)},x=()=>{Wn.to(T.current,{opacity:0,scale:0,duration:.3,ease:"power1.inOut",onComplete:u})};return Xu(()=>{T.current&&Wn.from(T.current,{opacity:0,scale:0,duration:.3,ease:"power1.inOut"})},[]),zt.useEffect(()=>{m(r);const M=H=>{H.key==="Escape"?x():H.key==="ArrowLeft"?g():H.key==="ArrowRight"&&y()};return window.addEventListener("keydown",M),()=>{window.removeEventListener("keydown",M)}},[n]),E.jsxs("div",{ref:T,className:"[&_button]:cursor-pointer h-[100dvh] scale-100 opacity-100 fixed inset-0 z-50 flex items-center justify-center bg-background bg-opacity-80",children:[E.jsx("button",{className:"absolute bottom-6 outline-2 outline-muted rounded-full p-2 right-6 text-destructive-foreground text-3xl z-10 hover:bg-destructive active:bg-destructive hover:outline-0 transition",onClick:x,"aria-label":"Close",children:E.jsx(Ov,{})}),E.jsxs("div",{className:"relative w-full h-[100dvh] flex items-center justify-center",children:[E.jsx("button",{className:"absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-400 transition",onClick:g,"aria-label":"Previous",children:E.jsx(Rv,{})}),E.jsx("div",{ref:d,className:"flex overflow-x-auto scroll-smooth w-[100vw] h-[100vh] items-center",style:{scrollSnapType:"x mandatory"},children:o.map((M,H)=>E.jsx("div",{className:"flex-shrink-0 w-[100vw] h-[100vh] flex items-center justify-center",style:{scrollSnapAlign:"center"},children:E.jsx("div",{className:"h-[100dvh] lg:w-[60vw] w-screen flex items-center justify-center rounded-2xl overflow-hidden bg-background",children:E.jsx(Zv,{src:M,type:"video/mp4",style:{width:"100%",height:"100%",objectFit:"contain",borderRadius:"1rem"}})})},H))}),E.jsx("button",{className:"absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-400 transition",onClick:y,"aria-label":"Next",children:E.jsx(Nv,{})}),E.jsx("div",{className:"absolute bottom-10 left-0 right-0 flex justify-center items-center space-x-2",children:o.map((M,H)=>E.jsx("button",{className:`w-3 h-3 rounded-full transition ${H===r?"bg-foreground":"bg-muted-foreground"}`,style:{outline:"none",border:"none"},onClick:()=>m(H)},H))})]}),E.jsxs("div",{children:[a==="en"&&E.jsxs("p",{className:"hidden lg:flex items-center gap-x-2 *:gap-x-2 *:px-2 fixed z-20 top-0 w-[60vw] justify-center left-1/2 translate-x-[-50%] px-2 py-4  text-foreground/50 *:flex *:last:outline-1 *:last:rounded-sm",children:[" ",E.jsx("span",{children:E.jsx(A0,{})}),"use keyboard ",E.jsxs("span",{children:[E.jsx(E0,{}),E.jsx(S0,{})]})," to navigate or press ",E.jsx("span",{children:"Esc"})," to close this windows "]}),a==="fr"&&E.jsxs("p",{className:"hidden lg:flex items-center gap-x-2 *:gap-x-2 *:px-2 fixed z-20 top-0 w-[60vw] justify-center left-1/2 translate-x-[-50%] px-2 py-4  text-foreground/50 *:flex *:last:outline-1 *:last:rounded-sm",children:[" ",E.jsx("span",{children:E.jsx(A0,{})}),"utilisez le clavier ",E.jsxs("span",{children:[E.jsx(E0,{}),E.jsx(S0,{})]})," pour naviguer ou appuyez sur ",E.jsx("span",{children:"Esc"})," pour fermer cette fenêtre "]})]})]})},$v=({lang:o})=>{const n=["/3d_product_concept.mp4","/fluid_sim.mp4","/img_gallery_1.mp4","/img_gallery_2.mp4"],[u,a]=zt.useState(!0);return E.jsxs(E.Fragment,{children:[u&&E.jsx(kv,{isOpen:u,onClose:()=>a(!1),videos:n,lang:o}),!u&&o==="en"&&E.jsxs("p",{children:["need a project similar to this ?",E.jsx("br",{})," lets talk  (type ",E.jsx("span",{className:"text-muted-foreground bg-indigo-950 rounded-md px-2",children:"links"}),") "]}),!u&&o==="fr"&&E.jsxs("p",{children:["besoin d'un projet similaire ?",E.jsx("br",{})," parlons-en (tapez ",E.jsx("span",{className:"text-muted-foreground bg-indigo-950 rounded-md px-2",children:"links"}),") "]})]})};function Kv(o){return ol({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"},child:[]}]})(o)}function Wv(o){return ol({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"},child:[]}]})(o)}function Jv(o){return ol({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"},child:[]},{tag:"path",attr:{d:"M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"},child:[]}]})(o)}const Ru=({text:o,lang:n,link:u})=>{const[a,r]=zt.useState(!1),f=async()=>{try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(o);else{const c=document.createElement("textarea");c.value=o,c.style.position="fixed",c.style.left="-999999px",document.body.appendChild(c),c.focus(),c.select(),document.execCommand("copy"),c.remove()}r(!0),setTimeout(()=>{r(!1)},2e3)}catch(c){console.error("Failed to copy text:",c)}};return E.jsxs("div",{className:"flex items-center text-[1.1rem]  min-w-[200px] max-w-/5 *:transition-all *:duration-200 *:ease-in-out",children:[E.jsx("p",{className:"mr-auto lg:mr-0 cursor-pointer",title:n==="en"?"Click to copy":"Cliquez pour copier",onClick:f,children:o}),E.jsxs("div",{className:"flex gap-x-4 ml-4",children:[E.jsxs("button",{onClick:f,onTouchStart:f,className:"relative inline-block text-foreground/60 cursor-pointer hover:text-accent-foreground border-none bg-transparent p-0",title:n==="en"?"Click to copy":"Cliquez pour copier",children:[E.jsx(Wv,{className:`transition-all duration-300 ${a?"opacity-0 scale-0":"opacity-100 scale-100"}`}),E.jsx(Kv,{className:`text-green-500 absolute inset-0  transition-all duration-300 ${a?"opacity-100 scale-100":"opacity-0 scale-0"}`})]}),E.jsx("span",{className:"relative inline-block text-foreground/60 cursor-pointer hover:text-accent-foreground",onClick:()=>window.open(u,"_blank"),title:n==="en"?"Click to open link":"Cliquez pour ouvrir le lien",children:E.jsx(Jv,{})})]})]})},Fv=({lang:o="en"})=>{const n={en:{project1:{title:"Proofolio AI",description1:"A hackathon project built in collaboration with",description2:"during the",description3:"Proofolio AI helps professionals without technical skills create portfolio websites from their resumes using AI.",techLabel:"Technologies used:",tech:"React/Next.js, OpenAI GPT-5 model, Tailwind CSS",statusLabel:"Project status:",status:"Beta"},project2:{title:"Electronics E-commerce Store Template",description1:"A ready-to-use e-commerce template designed for electronics and tech vendors. It supports product management, inventory tracking, and integrates with",description2:"for secure payments.",description3:"The template includes an admin dashboard for managing products and transactions with minimal setup required.",techLabel:"Technologies used:",tech:"React/Next.js, Stripe, MySQL, Tailwind CSS",statusLabel:"Project status:",status:"Finished"}},fr:{project1:{title:"Proofolio AI",description1:"Un projet de hackathon réalisé en collaboration avec",description2:"pendant le",description3:"Proofolio AI aide les professionnels sans compétences techniques à créer des sites web de portfolio à partir de leurs CV en utilisant l'IA.",techLabel:"Technologies utilisées:",tech:"React/Next.js, modèle OpenAI GPT-5, Tailwind CSS",statusLabel:"État du projet:",status:"Bêta"},project2:{title:"Modèle de Boutique E-commerce d'Électronique",description1:"Un modèle de commerce électronique prêt à l'emploi conçu pour les vendeurs d'électronique et de technologie. Il prend en charge la gestion des produits, le suivi des stocks et s'intègre avec",description2:"pour des paiements sécurisés.",description3:"Le modèle inclut un tableau de bord administrateur pour gérer les produits et les transactions avec une configuration minimale requise.",techLabel:"Technologies utilisées:",tech:"React/Next.js, Stripe, MySQL, Tailwind CSS",statusLabel:"État du projet:",status:"Terminé"}}},u=n[o]||n.en;return E.jsxs("div",{className:"flex flex-col my-4",children:[E.jsxs("div",{id:"project_card_1",className:"flex flex-col md:flex-row    rounded-md  ",children:[E.jsxs("div",{className:"md:w-1/2 space-y-2",children:[E.jsx("h2",{className:"text-xl font-semibold",children:u.project1.title}),E.jsxs("p",{children:[u.project1.description1,E.jsx("a",{href:"https://www.linkedin.com/in/yahya-elouarrak/",className:"text-primary underline px-2 hover:no-underline",children:"Yahaya Elouarrak"}),u.project1.description2,E.jsx("a",{href:"https://lablab.ai/event/co-creating-with-gpt-5",target:"_blank",className:"text-primary underline hover:no-underline px-2",children:"lablab Co-Creating with GPT-5 Hackathon"}),"."]}),E.jsx("p",{children:u.project1.description3}),E.jsxs("p",{children:[E.jsx("span",{className:"font-medium",children:u.project1.techLabel})," ",u.project1.tech]}),E.jsxs("p",{children:[E.jsx("span",{className:"font-medium",children:u.project1.statusLabel})," ",E.jsx("span",{className:"text-yellow-500",children:u.project1.status})]})]}),E.jsx("div",{className:"md:w-1/2 flex justify-center mt-4 md:mt-0",children:E.jsx("img",{src:"/pr1.png",alt:"Proofolio AI preview",className:"w-full h-auto rounded-md object-cover"})})]}),E.jsxs("div",{id:"project_card_2",className:"flex flex-col md:flex-row    rounded-md   mt-4",children:[E.jsxs("div",{className:"md:w-1/2 space-y-2",children:[E.jsx("h2",{className:"text-xl font-semibold",children:u.project2.title}),E.jsxs("p",{children:[u.project2.description1,E.jsx("a",{href:"https://stripe.com",target:"_blank",className:"text-primary underline hover:no-underline px-2",children:"Stripe"}),u.project2.description2]}),E.jsx("p",{children:u.project2.description3}),E.jsxs("p",{children:[E.jsx("span",{className:"font-medium",children:u.project2.techLabel})," ",u.project2.tech]}),E.jsxs("p",{children:[E.jsx("span",{className:"font-medium",children:u.project2.statusLabel})," ",E.jsx("span",{className:"text-green-500",children:u.project2.status})]})]}),E.jsx("div",{className:"md:w-1/2 flex justify-center mt-4 md:mt-0",children:E.jsx("img",{src:"/pr2.webp",alt:"Electronics e-commerce template preview",className:"w-full h-auto rounded-md object-cover"})})]})]})},In={about:{output({arg:o,lang:n="en"}){return E.jsx(Vv,{lang:n})},description:{en:"short introduction about me",fr:"courte présentation à mon sujet"}},help:{output({arg:o,lang:n="en"}){const u={en:{title:"--- list of commands ---",about:"(short description about me)",concepts:"(showcases some of my creative projects)",projects:"(showcases my functional projects)",links:"(prints my contact info)",education:"(self explanatory I guess)",clear:"(clears the screen | you can also use ctrl + L)",help:"(prints this list)",whoami:"(display current user)",cat:"(print file content | usage : cat <file name>)",ls:"(lists current directory files and directories)"},fr:{title:"--- liste des commandes ---",about:"(courte description à mon sujet)",concepts:"(présente certains de mes projets créatifs)",projects:"(présente mes projets fonctionnels)",links:"(affiche mes informations de contact)",education:"(je suppose que c'est explicite)",clear:"(efface l'écran | vous pouvez aussi utiliser ctrl + L)",help:"(affiche cette liste)",whoami:"(affiche l'utilisateur actuel)",cat:"(affiche le contenu du fichier | usage : cat <nom du fichier>)",ls:"(liste les fichiers et dossiers du répertoire actuel)"}},a=u[n]||u.en;return E.jsxs("div",{className:"w-full md:w-5/6 lg:w-4/6",children:[E.jsxs("p",{children:[E.jsx("br",{}),a.title,E.jsx("br",{})]}),E.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-2 *:not-even:text-foreground *:not-even:font-semibold  *:even:text-foreground/80",children:[E.jsx("span",{children:"about"}),E.jsx("span",{children:a.about}),E.jsx("span",{children:"concepts"}),E.jsx("span",{children:a.concepts}),E.jsx("span",{children:"projects"}),E.jsx("span",{children:a.projects}),E.jsx("span",{children:"links"}),E.jsx("span",{children:a.links}),E.jsx("span",{children:"education"}),E.jsx("span",{children:a.education}),E.jsx("span",{children:"clear"}),E.jsx("span",{children:a.clear}),E.jsx("span",{children:"help"}),E.jsx("span",{children:a.help}),E.jsx("span",{children:"whoami"}),E.jsx("span",{children:a.whoami}),E.jsx("span",{children:"cat"}),E.jsx("span",{children:a.cat}),E.jsx("span",{children:"ls"}),E.jsx("span",{children:a.ls})]})]})},description:{en:"prints this list",fr:"affiche cette liste"}},ls:{output({arg:o,lang:n="en"}){return E.jsx("div",{className:" *:not-first:px-4",children:L0.map(u=>E.jsx("p",{className:"text-foreground/80 inline ",children:u.name},crypto.randomUUID()))})},description:{en:"lists files in current directory",fr:"liste les fichiers du répertoire actuel"}},whoami:{output({arg:o,lang:n="en"}){return E.jsx("p",{children:n==="fr"?"visiteur":"guest"})},description:{en:"display current user",fr:"affiche l'utilisateur actuel"}},clear:{output({arg:o,lang:n="en"}){return window.dispatchEvent(new KeyboardEvent("keydown",{key:"l",code:"KeyL",ctrlKey:!0,bubbles:!0,cancelable:!0})),E.jsx(E.Fragment,{})},description:{en:"clears the screen",fr:"efface l'écran"}},concepts:{output:({arg:o,lang:n="en"})=>E.jsx($v,{lang:n}),description:{en:"showcases some of my creative projects",fr:"présente certains de mes projets créatifs"}},education:{output({arg:o,lang:n="en"}){const u={fr:`
        Je n'ai pas de diplôme officiel en développement web, et je considère cela comme un avantage. Après avoir examiné de nombreux programmes de cours et discuté avec des étudiants et des diplômés de différents programmes, j'ai remarqué deux problèmes récurrents :
        <br />- Un champ d'étude trop large : les étudiants sont souvent amenés à étudier plusieurs domaines informatiques à la fois, ce qui ne leur permet d'acquérir qu'une compréhension basique de chacun d'entre eux.
        <br />- Manque de profondeur : de nombreux programmes traitent tous les langages et frameworks de programmation comme relevant du « développement web », ce qui rend difficile la maîtrise réelle de l'un d'entre eux.
        <br />Apprendre par moi-même m'a permis de me concentrer profondément sur les domaines les plus importants pour mon travail, tout en restant adaptable et au fait des nouvelles technologies et tendances.`,en:`
        I don’t have a formal degree in web development, and I see that as an advantage. After reviewing many course outlines and talking to students and graduates from different programs, I noticed two recurring issues:
        <br />- Too broad of a focus: students are often required to study several IT fields at once, which leaves them with only a basic understanding of each.
        <br />- Lack of depth — many programs treat all programming languages and frameworks as “web development,” making it difficult to truly master any of them.
        <br />Learning on my own has allowed me to focus deeply on the areas that matter most to my work, while still staying adaptable and aware of new technologies and trends.`};return E.jsx("p",{className:"w-full md:w-3/5 lg:w-3/4 ",dangerouslySetInnerHTML:{__html:u[n]}})},description:{en:"showcases my educational background",fr:"présente mon parcours éducatif"}},projects:{output({arg:o,lang:n="en"}){return E.jsx(Fv,{lang:n})},description:{en:"showcases my functional projects",fr:"présente mes projets fonctionnels"}},links:{output({arg:o,lang:n="en"}){return E.jsxs("div",{className:"py-2 text-foreground",children:[E.jsx(Ru,{link:"mailto:walid.oumoulilte@proton.me",text:"walid.oumoulilte@proton.me",lang:n}),E.jsx(Ru,{link:"mailto:walid.oumoulilte@gmail.com",text:"walid.oumoulilte@gmail.com",lang:n}),E.jsx(Ru,{link:"https://github.com/walid-hud",text:"github.com/walid-hud",lang:n}),E.jsx(Ru,{link:"https://www.linkedin.com/in/walid101",text:"linkedin.com/in/walid101",lang:n})]})},description:{en:"prints my contact info",fr:"affiche mes informations de contact"}},cat:{output({arg:o,lang:n="en"}){const u=o,a={en:{noFile:"cat : no file specified",unknownFile:"unknown file :"},fr:{noFile:"cat : aucun fichier spécifié",unknownFile:"fichier inconnu :"}},r=a[n]||a.en,f=L0.find(c=>c.name===u);return E.jsxs("div",{children:[!o&&r.noFile,o&&!f&&`${r.unknownFile} ${o}`,f&&f.output({arg:o,lang:n})]})},description:{en:"prints file content",fr:"affiche le contenu du fichier"}}},L0=[{name:"wished_for.txt",output:({arg:o,lang:n="en"})=>E.jsx(Qv,{})}],b0={en:{name:"WALID OUMOULILTE",title1:"WEB DEVELOPER",title2:"CREATIVE CODER"},fr:{name:"WALID OUMOULILTE",title1:"DEVELOPPEUR WEB ",title2:" CODEUR CREATIF"}},Pv=({lang:o="en"})=>{const{name:n,title1:u,title2:a}=b0[o]||b0.en,r=Cu(n,"ANSI_Shadow"),f=Cu(u,"Regular"),c=Cu(a,"Regular");return E.jsxs("div",{className:"mb-12 select-none",children:[E.jsx("pre",{className:"ascii_banner pt-2",children:r}),E.jsxs("pre",{className:"flex justify-between gap-x-2 md:gap-x-0 pr-0 lg:pr-8",children:[E.jsx("pre",{className:"title1 title_clamp",children:f}),E.jsx("pre",{className:"title2 title_clamp",children:c})]})]})},tp=()=>{const{lang:o}=zt.useContext(ci),n=zt.useRef(null);function u(y,x){switch(x.type){case"UPDATE_INPUT":return{...y,commandInput:x.payload};case"HIGHLIGHT_COMMAND":return{...y,commandHighlight:x.payload};case"EXECUTE_COMMAND":return{...y,terminalHistory:[...y.terminalHistory,x.payload],commandInput:""};case"CLEAR_TERMINAL":return{...y,terminalHistory:x.payload};default:return y}}const[a,r]=zt.useReducer(u,{terminalHistory:[],commandInput:"",commandHighlight:!1}),f=y=>{r({type:"UPDATE_INPUT",payload:y.target.value});let x=Object.keys(In).includes(y.target.value.split(" ")[0].toLowerCase());r({type:"HIGHLIGHT_COMMAND",payload:x})},c=()=>{r({type:"EXECUTE_COMMAND",payload:{command:g.current.value,commandOutput:T(g.current.value.split(" ")[0].toLowerCase()).output({arg:g.current.value.split(" ")[1],lang:o})}}),g.current.focus()},d=()=>{Object.entries(In).map(y=>{if(y[0].includes(g.current.value)){r({type:"UPDATE_INPUT",payload:y[0]});let x=Object.keys(In).includes(y[0].split(" ")[0].toLowerCase());r({type:"HIGHLIGHT_COMMAND",payload:x})}})},T=y=>{let x={};return In.hasOwnProperty(y)?x=In[y]:x={output(){return E.jsxs("p",{children:[o==="fr"?"commande inconnue ":"unknown command ",":"," ",y]})}},x},m=()=>{const y=a.terminalHistory.at(-1)||{command:""};r({type:"UPDATE_INPUT",payload:y.command});let x=Object.keys(In).includes(y.command);r({type:"HIGHLIGHT_COMMAND",payload:x})},g=zt.useRef(null);return zt.useEffect(()=>{g.current?.focus(),window.onkeydown=y=>{if(g.current&&g.current.focus(),g.current===document.activeElement)switch(y.key){case"Enter":g.current.value.length>0&&c();break;case"l":y.ctrlKey&&(y.preventDefault(),r({type:"CLEAR_TERMINAL",payload:[]}));break;case"ArrowUp":y.preventDefault(),m();break;case"ArrowDown":y.preventDefault(),r({type:"UPDATE_INPUT",payload:""});break;case"Tab":y.preventDefault(),d();break}}},[]),zt.useEffect(()=>{n.current?.scrollIntoView({behavior:"smooth"})},[a.terminalHistory]),E.jsxs("div",{id:"terminal",className:" h-[100dvh] text-foreground font-mono text-sm px-2",children:[E.jsxs("div",{id:"textarea",children:[E.jsx(Pv,{lang:o}),E.jsx(ep,{}),a.terminalHistory.map(({command:y,commandOutput:x},M)=>E.jsxs("div",{children:[E.jsx(p0,{command:y}),x]},M))]}),E.jsxs("div",{id:"input",className:"flex gap-x-2 ",onClick:()=>g.current.focus(),children:[E.jsx("label",{htmlFor:"command input",children:E.jsx(p0,{})}),E.jsx("input",{spellCheck:"false",value:a.commandInput,onChange:f,ref:g,type:"text",name:"command input",className:`outline-0 w-full inline  ${a.commandHighlight?"text-foreground":"text-red-400"}`}),E.jsx("div",{ref:n})]})]})};function ep(){const{lang:o}=zt.useContext(ci);return E.jsxs(E.Fragment,{children:[o==="en"&&E.jsxs("div",{children:[E.jsxs("p",{children:["Type ",E.jsx("span",{className:"text-lime-500 ",children:"help"})," to see available commands"]}),E.jsxs("p",{className:"hidden lg:block text-foreground/50 *:text-foreground/60 *:bg-muted *:outline-1 *:rounded-sm *:px-2 ",children:[E.jsx("span",{children:"tab"})," to auto-complete commands"]})]}),o==="fr"&&E.jsxs("div",{children:[E.jsxs("p",{children:["Tapez ",E.jsx("span",{className:"text-lime-500",children:"help"})," pour voir les commandes disponibles"]}),E.jsxs("p",{className:"hidden lg:block text-foreground/50 *:text-foreground/60 *:bg-muted *:outline-1 *:rounded-sm *:px-2",children:[E.jsx("span",{children:"Tab"})," pour compléter automatiquement les commandes"]})]})]})}const lp=()=>{const[o,n]=zt.useState(!0);return E.jsx("main",{className:"w-screen  h-[100dvh] text-foreground text-xl font-mono overflow-x-hidden overscroll-none",children:E.jsxs(Mv,{children:[E.jsx(Cv,{setModalVisible:n}),!o&&E.jsx(tp,{})]})})};lg.createRoot(document.getElementById("root")).render(E.jsx(lp,{}));
