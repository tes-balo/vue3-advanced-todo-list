(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function J6(c,a){const e=Object.create(null),s=c.split(",");for(let r=0;r<s.length;r++)e[s[r]]=!0;return a?r=>!!e[r.toLowerCase()]:r=>!!e[r]}const yt="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kt=J6(yt);function o7(c){return!!c||c===""}function Q6(c){if(F(c)){const a={};for(let e=0;e<c.length;e++){const s=c[e],r=r2(s)?Pt(s):Q6(s);if(r)for(const i in r)a[i]=r[i]}return a}else{if(r2(c))return c;if(Y(c))return c}}const At=/;(?![^(]*\))/g,Tt=/:(.+)/;function Pt(c){const a={};return c.split(At).forEach(e=>{if(e){const s=e.split(Tt);s.length>1&&(a[s[0].trim()]=s[1].trim())}}),a}function j2(c){let a="";if(r2(c))a=c;else if(F(c))for(let e=0;e<c.length;e++){const s=j2(c[e]);s&&(a+=s+" ")}else if(Y(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const G4=c=>r2(c)?c:c==null?"":F(c)||Y(c)&&(c.toString===H7||!D(c.toString))?JSON.stringify(c,m7,2):String(c),m7=(c,a)=>a&&a.__v_isRef?m7(c,a.value):O1(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[s,r])=>(e[`${s} =>`]=r,e),{})}:u7(a)?{[`Set(${a.size})`]:[...a.values()]}:Y(a)&&!F(a)&&!z7(a)?String(a):a,G={},_1=[],E2=()=>{},Bt=()=>!1,Rt=/^on[^a-z]/,v3=c=>Rt.test(c),Z6=c=>c.startsWith("onUpdate:"),h2=Object.assign,c8=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Et=Object.prototype.hasOwnProperty,O=(c,a)=>Et.call(c,a),F=Array.isArray,O1=c=>H3(c)==="[object Map]",u7=c=>H3(c)==="[object Set]",D=c=>typeof c=="function",r2=c=>typeof c=="string",a8=c=>typeof c=="symbol",Y=c=>c!==null&&typeof c=="object",v7=c=>Y(c)&&D(c.then)&&D(c.catch),H7=Object.prototype.toString,H3=c=>H7.call(c),Ft=c=>H3(c).slice(8,-1),z7=c=>H3(c)==="[object Object]",e8=c=>r2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,j4=J6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),z3=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},Dt=/-(\w)/g,K2=z3(c=>c.replace(Dt,(a,e)=>e?e.toUpperCase():"")),_t=/\B([A-Z])/g,w1=z3(c=>c.replace(_t,"-$1").toLowerCase()),h3=z3(c=>c.charAt(0).toUpperCase()+c.slice(1)),l1=z3(c=>c?`on${h3(c)}`:""),a3=(c,a)=>!Object.is(c,a),$4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},e3=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},C6=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let D0;const Ot=()=>D0||(D0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let q2;class Ut{constructor(a=!1){this.active=!0,this.effects=[],this.cleanups=[],!a&&q2&&(this.parent=q2,this.index=(q2.scopes||(q2.scopes=[])).push(this)-1)}run(a){if(this.active){const e=q2;try{return q2=this,a()}finally{q2=e}}}on(){q2=this}off(){q2=this.parent}stop(a){if(this.active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function It(c,a=q2){a&&a.active&&a.effects.push(c)}const s8=c=>{const a=new Set(c);return a.w=0,a.n=0,a},h7=c=>(c.w&u1)>0,p7=c=>(c.n&u1)>0,qt=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=u1},Wt=c=>{const{deps:a}=c;if(a.length){let e=0;for(let s=0;s<a.length;s++){const r=a[s];h7(r)&&!p7(r)?r.delete(c):a[e++]=r,r.w&=~u1,r.n&=~u1}a.length=e}},L6=new WeakMap;let r4=0,u1=1;const g6=30;let A2;const x1=Symbol(""),x6=Symbol("");class r8{constructor(a,e=null,s){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,It(this,s)}run(){if(!this.active)return this.fn();let a=A2,e=o1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=A2,A2=this,o1=!0,u1=1<<++r4,r4<=g6?qt(this):_0(this),this.fn()}finally{r4<=g6&&Wt(this),u1=1<<--r4,A2=this.parent,o1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){A2===this?this.deferStop=!0:this.active&&(_0(this),this.onStop&&this.onStop(),this.active=!1)}}function _0(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let o1=!0;const V7=[];function X1(){V7.push(o1),o1=!1}function Y1(){const c=V7.pop();o1=c===void 0?!0:c}function L2(c,a,e){if(o1&&A2){let s=L6.get(c);s||L6.set(c,s=new Map);let r=s.get(e);r||s.set(e,r=s8()),d7(r)}}function d7(c,a){let e=!1;r4<=g6?p7(c)||(c.n|=u1,e=!h7(c)):e=!c.has(A2),e&&(c.add(A2),A2.deps.push(c))}function Q2(c,a,e,s,r,i){const n=L6.get(c);if(!n)return;let t=[];if(a==="clear")t=[...n.values()];else if(e==="length"&&F(c))n.forEach((f,o)=>{(o==="length"||o>=s)&&t.push(f)});else switch(e!==void 0&&t.push(n.get(e)),a){case"add":F(c)?e8(e)&&t.push(n.get("length")):(t.push(n.get(x1)),O1(c)&&t.push(n.get(x6)));break;case"delete":F(c)||(t.push(n.get(x1)),O1(c)&&t.push(n.get(x6)));break;case"set":O1(c)&&t.push(n.get(x1));break}if(t.length===1)t[0]&&b6(t[0]);else{const f=[];for(const o of t)o&&f.push(...o);b6(s8(f))}}function b6(c,a){const e=F(c)?c:[...c];for(const s of e)s.computed&&O0(s);for(const s of e)s.computed||O0(s)}function O0(c,a){(c!==A2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Gt=J6("__proto__,__v_isRef,__isVue"),M7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(a8)),jt=i8(),$t=i8(!1,!0),Kt=i8(!0),U0=Xt();function Xt(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const s=I(this);for(let i=0,n=this.length;i<n;i++)L2(s,"get",i+"");const r=s[a](...e);return r===-1||r===!1?s[a](...e.map(I)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){X1();const s=I(this)[a].apply(this,e);return Y1(),s}}),c}function i8(c=!1,a=!1){return function(s,r,i){if(r==="__v_isReactive")return!c;if(r==="__v_isReadonly")return c;if(r==="__v_isShallow")return a;if(r==="__v_raw"&&i===(c?a?uf:b7:a?x7:g7).get(s))return s;const n=F(s);if(!c&&n&&O(U0,r))return Reflect.get(U0,r,i);const t=Reflect.get(s,r,i);return(a8(r)?M7.has(r):Gt(r))||(c||L2(s,"get",r),a)?t:z2(t)?n&&e8(r)?t:t.value:Y(t)?c?S7(t):f8(t):t}}const Yt=C7(),Jt=C7(!0);function C7(c=!1){return function(e,s,r,i){let n=e[s];if(o4(n)&&z2(n)&&!z2(r))return!1;if(!c&&(!S6(r)&&!o4(r)&&(n=I(n),r=I(r)),!F(e)&&z2(n)&&!z2(r)))return n.value=r,!0;const t=F(e)&&e8(s)?Number(s)<e.length:O(e,s),f=Reflect.set(e,s,r,i);return e===I(i)&&(t?a3(r,n)&&Q2(e,"set",s,r):Q2(e,"add",s,r)),f}}function Qt(c,a){const e=O(c,a);c[a];const s=Reflect.deleteProperty(c,a);return s&&e&&Q2(c,"delete",a,void 0),s}function Zt(c,a){const e=Reflect.has(c,a);return(!a8(a)||!M7.has(a))&&L2(c,"has",a),e}function cf(c){return L2(c,"iterate",F(c)?"length":x1),Reflect.ownKeys(c)}const L7={get:jt,set:Yt,deleteProperty:Qt,has:Zt,ownKeys:cf},af={get:Kt,set(c,a){return!0},deleteProperty(c,a){return!0}},ef=h2({},L7,{get:$t,set:Jt}),n8=c=>c,p3=c=>Reflect.getPrototypeOf(c);function k4(c,a,e=!1,s=!1){c=c.__v_raw;const r=I(c),i=I(a);e||(a!==i&&L2(r,"get",a),L2(r,"get",i));const{has:n}=p3(r),t=s?n8:e?m8:o8;if(n.call(r,a))return t(c.get(a));if(n.call(r,i))return t(c.get(i));c!==r&&c.get(a)}function A4(c,a=!1){const e=this.__v_raw,s=I(e),r=I(c);return a||(c!==r&&L2(s,"has",c),L2(s,"has",r)),c===r?e.has(c):e.has(c)||e.has(r)}function T4(c,a=!1){return c=c.__v_raw,!a&&L2(I(c),"iterate",x1),Reflect.get(c,"size",c)}function I0(c){c=I(c);const a=I(this);return p3(a).has.call(a,c)||(a.add(c),Q2(a,"add",c,c)),this}function q0(c,a){a=I(a);const e=I(this),{has:s,get:r}=p3(e);let i=s.call(e,c);i||(c=I(c),i=s.call(e,c));const n=r.call(e,c);return e.set(c,a),i?a3(a,n)&&Q2(e,"set",c,a):Q2(e,"add",c,a),this}function W0(c){const a=I(this),{has:e,get:s}=p3(a);let r=e.call(a,c);r||(c=I(c),r=e.call(a,c)),s&&s.call(a,c);const i=a.delete(c);return r&&Q2(a,"delete",c,void 0),i}function G0(){const c=I(this),a=c.size!==0,e=c.clear();return a&&Q2(c,"clear",void 0,void 0),e}function P4(c,a){return function(s,r){const i=this,n=i.__v_raw,t=I(n),f=a?n8:c?m8:o8;return!c&&L2(t,"iterate",x1),n.forEach((o,m)=>s.call(r,f(o),f(m),i))}}function B4(c,a,e){return function(...s){const r=this.__v_raw,i=I(r),n=O1(i),t=c==="entries"||c===Symbol.iterator&&n,f=c==="keys"&&n,o=r[c](...s),m=e?n8:a?m8:o8;return!a&&L2(i,"iterate",f?x6:x1),{next(){const{value:v,done:H}=o.next();return H?{value:v,done:H}:{value:t?[m(v[0]),m(v[1])]:m(v),done:H}},[Symbol.iterator](){return this}}}}function i1(c){return function(...a){return c==="delete"?!1:this}}function sf(){const c={get(i){return k4(this,i)},get size(){return T4(this)},has:A4,add:I0,set:q0,delete:W0,clear:G0,forEach:P4(!1,!1)},a={get(i){return k4(this,i,!1,!0)},get size(){return T4(this)},has:A4,add:I0,set:q0,delete:W0,clear:G0,forEach:P4(!1,!0)},e={get(i){return k4(this,i,!0)},get size(){return T4(this,!0)},has(i){return A4.call(this,i,!0)},add:i1("add"),set:i1("set"),delete:i1("delete"),clear:i1("clear"),forEach:P4(!0,!1)},s={get(i){return k4(this,i,!0,!0)},get size(){return T4(this,!0)},has(i){return A4.call(this,i,!0)},add:i1("add"),set:i1("set"),delete:i1("delete"),clear:i1("clear"),forEach:P4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=B4(i,!1,!1),e[i]=B4(i,!0,!1),a[i]=B4(i,!1,!0),s[i]=B4(i,!0,!0)}),[c,e,a,s]}const[rf,nf,tf,ff]=sf();function t8(c,a){const e=a?c?ff:tf:c?nf:rf;return(s,r,i)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?s:Reflect.get(O(e,r)&&r in s?e:s,r,i)}const lf={get:t8(!1,!1)},of={get:t8(!1,!0)},mf={get:t8(!0,!1)},g7=new WeakMap,x7=new WeakMap,b7=new WeakMap,uf=new WeakMap;function vf(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hf(c){return c.__v_skip||!Object.isExtensible(c)?0:vf(Ft(c))}function f8(c){return o4(c)?c:l8(c,!1,L7,lf,g7)}function zf(c){return l8(c,!1,ef,of,x7)}function S7(c){return l8(c,!0,af,mf,b7)}function l8(c,a,e,s,r){if(!Y(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const i=r.get(c);if(i)return i;const n=Hf(c);if(n===0)return c;const t=new Proxy(c,n===2?s:e);return r.set(c,t),t}function U1(c){return o4(c)?U1(c.__v_raw):!!(c&&c.__v_isReactive)}function o4(c){return!!(c&&c.__v_isReadonly)}function S6(c){return!!(c&&c.__v_isShallow)}function N7(c){return U1(c)||o4(c)}function I(c){const a=c&&c.__v_raw;return a?I(a):c}function w7(c){return e3(c,"__v_skip",!0),c}const o8=c=>Y(c)?f8(c):c,m8=c=>Y(c)?S7(c):c;function hf(c){o1&&A2&&(c=I(c),d7(c.dep||(c.dep=s8())))}function pf(c,a){c=I(c),c.dep&&b6(c.dep)}function z2(c){return!!(c&&c.__v_isRef===!0)}function Vf(c){return z2(c)?c.value:c}const df={get:(c,a,e)=>Vf(Reflect.get(c,a,e)),set:(c,a,e,s)=>{const r=c[a];return z2(r)&&!z2(e)?(r.value=e,!0):Reflect.set(c,a,e,s)}};function y7(c){return U1(c)?c:new Proxy(c,df)}var k7;class Mf{constructor(a,e,s,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[k7]=!1,this._dirty=!0,this.effect=new r8(a,()=>{this._dirty||(this._dirty=!0,pf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const a=I(this);return hf(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}k7="__v_isReadonly";function Cf(c,a,e=!1){let s,r;const i=D(c);return i?(s=c,r=E2):(s=c.get,r=c.set),new Mf(s,r,i||!r,e)}function m1(c,a,e,s){let r;try{r=s?c(...s):c()}catch(i){V3(i,a,e)}return r}function F2(c,a,e,s){if(D(c)){const i=m1(c,a,e,s);return i&&v7(i)&&i.catch(n=>{V3(n,a,e)}),i}const r=[];for(let i=0;i<c.length;i++)r.push(F2(c[i],a,e,s));return r}function V3(c,a,e,s=!0){const r=a?a.vnode:null;if(a){let i=a.parent;const n=a.proxy,t=e;for(;i;){const o=i.ec;if(o){for(let m=0;m<o.length;m++)if(o[m](c,n,t)===!1)return}i=i.parent}const f=a.appContext.config.errorHandler;if(f){m1(f,null,10,[c,n,t]);return}}Lf(c,e,r,s)}function Lf(c,a,e,s=!0){console.error(c)}let s3=!1,N6=!1;const u2=[];let G2=0;const I1=[];let J2=null,d1=0;const A7=Promise.resolve();let u8=null;function gf(c){const a=u8||A7;return c?a.then(this?c.bind(this):c):a}function xf(c){let a=G2+1,e=u2.length;for(;a<e;){const s=a+e>>>1;m4(u2[s])<c?a=s+1:e=s}return a}function v8(c){(!u2.length||!u2.includes(c,s3&&c.allowRecurse?G2+1:G2))&&(c.id==null?u2.push(c):u2.splice(xf(c.id),0,c),T7())}function T7(){!s3&&!N6&&(N6=!0,u8=A7.then(B7))}function bf(c){const a=u2.indexOf(c);a>G2&&u2.splice(a,1)}function Sf(c){F(c)?I1.push(...c):(!J2||!J2.includes(c,c.allowRecurse?d1+1:d1))&&I1.push(c),T7()}function j0(c,a=G2){for(;a<u2.length;a++){const e=u2[a];e&&e.pre&&(u2.splice(a,1),a--,e())}}function P7(c){if(I1.length){const a=[...new Set(I1)];if(I1.length=0,J2){J2.push(...a);return}for(J2=a,J2.sort((e,s)=>m4(e)-m4(s)),d1=0;d1<J2.length;d1++)J2[d1]();J2=null,d1=0}}const m4=c=>c.id==null?1/0:c.id,Nf=(c,a)=>{const e=m4(c)-m4(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function B7(c){N6=!1,s3=!0,u2.sort(Nf);const a=E2;try{for(G2=0;G2<u2.length;G2++){const e=u2[G2];e&&e.active!==!1&&m1(e,null,14)}}finally{G2=0,u2.length=0,P7(),s3=!1,u8=null,(u2.length||I1.length)&&B7()}}function wf(c,a,...e){if(c.isUnmounted)return;const s=c.vnode.props||G;let r=e;const i=a.startsWith("update:"),n=i&&a.slice(7);if(n&&n in s){const m=`${n==="modelValue"?"model":n}Modifiers`,{number:v,trim:H}=s[m]||G;H&&(r=e.map(M=>M.trim())),v&&(r=e.map(C6))}let t,f=s[t=l1(a)]||s[t=l1(K2(a))];!f&&i&&(f=s[t=l1(w1(a))]),f&&F2(f,c,6,r);const o=s[t+"Once"];if(o){if(!c.emitted)c.emitted={};else if(c.emitted[t])return;c.emitted[t]=!0,F2(o,c,6,r)}}function R7(c,a,e=!1){const s=a.emitsCache,r=s.get(c);if(r!==void 0)return r;const i=c.emits;let n={},t=!1;if(!D(c)){const f=o=>{const m=R7(o,a,!0);m&&(t=!0,h2(n,m))};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}return!i&&!t?(Y(c)&&s.set(c,null),null):(F(i)?i.forEach(f=>n[f]=null):h2(n,i),Y(c)&&s.set(c,n),n)}function d3(c,a){return!c||!v3(a)?!1:(a=a.slice(2).replace(/Once$/,""),O(c,a[0].toLowerCase()+a.slice(1))||O(c,w1(a))||O(c,a))}let P2=null,M3=null;function r3(c){const a=P2;return P2=c,M3=c&&c.type.__scopeId||null,a}function E7(c){M3=c}function F7(){M3=null}function yf(c,a=P2,e){if(!a||c._n)return c;const s=(...r)=>{s._d&&e5(-1);const i=r3(a),n=c(...r);return r3(i),s._d&&e5(1),n};return s._n=!0,s._c=!0,s._d=!0,s}function J3(c){const{type:a,vnode:e,proxy:s,withProxy:r,props:i,propsOptions:[n],slots:t,attrs:f,emit:o,render:m,renderCache:v,data:H,setupState:M,ctx:B,inheritAttrs:E}=c;let k,d;const S=r3(c);try{if(e.shapeFlag&4){const _=r||s;k=W2(m.call(_,_,v,i,M,H,B)),d=f}else{const _=a;k=W2(_.length>1?_(i,{attrs:f,slots:t,emit:o}):_(i,null)),d=a.props?f:kf(f)}}catch(_){n4.length=0,V3(_,c,1),k=c2(u4)}let P=k;if(d&&E!==!1){const _=Object.keys(d),{shapeFlag:b}=P;_.length&&b&7&&(n&&_.some(Z6)&&(d=Af(d,n)),P=W1(P,d))}return e.dirs&&(P=W1(P),P.dirs=P.dirs?P.dirs.concat(e.dirs):e.dirs),e.transition&&(P.transition=e.transition),k=P,r3(S),k}const kf=c=>{let a;for(const e in c)(e==="class"||e==="style"||v3(e))&&((a||(a={}))[e]=c[e]);return a},Af=(c,a)=>{const e={};for(const s in c)(!Z6(s)||!(s.slice(9)in a))&&(e[s]=c[s]);return e};function Tf(c,a,e){const{props:s,children:r,component:i}=c,{props:n,children:t,patchFlag:f}=a,o=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return s?$0(s,n,o):!!n;if(f&8){const m=a.dynamicProps;for(let v=0;v<m.length;v++){const H=m[v];if(n[H]!==s[H]&&!d3(o,H))return!0}}}else return(r||t)&&(!t||!t.$stable)?!0:s===n?!1:s?n?$0(s,n,o):!0:!!n;return!1}function $0(c,a,e){const s=Object.keys(a);if(s.length!==Object.keys(c).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(a[i]!==c[i]&&!d3(e,i))return!0}return!1}function Pf({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const Bf=c=>c.__isSuspense;function Rf(c,a){a&&a.pendingBranch?F(c)?a.effects.push(...c):a.effects.push(c):Sf(c)}function Ef(c,a){if(l2){let e=l2.provides;const s=l2.parent&&l2.parent.provides;s===e&&(e=l2.provides=Object.create(s)),e[c]=a}}function Q3(c,a,e=!1){const s=l2||P2;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&c in r)return r[c];if(arguments.length>1)return e&&D(a)?a.call(s.proxy):a}}const K0={};function K4(c,a,e){return D7(c,a,e)}function D7(c,a,{immediate:e,deep:s,flush:r,onTrack:i,onTrigger:n}=G){const t=l2;let f,o=!1,m=!1;if(z2(c)?(f=()=>c.value,o=S6(c)):U1(c)?(f=()=>c,s=!0):F(c)?(m=!0,o=c.some(d=>U1(d)||S6(d)),f=()=>c.map(d=>{if(z2(d))return d.value;if(U1(d))return C1(d);if(D(d))return m1(d,t,2)})):D(c)?a?f=()=>m1(c,t,2):f=()=>{if(!(t&&t.isUnmounted))return v&&v(),F2(c,t,3,[H])}:f=E2,a&&s){const d=f;f=()=>C1(d())}let v,H=d=>{v=k.onStop=()=>{m1(d,t,4)}};if(H4)return H=E2,a?e&&F2(a,t,3,[f(),m?[]:void 0,H]):f(),E2;let M=m?[]:K0;const B=()=>{if(!!k.active)if(a){const d=k.run();(s||o||(m?d.some((S,P)=>a3(S,M[P])):a3(d,M)))&&(v&&v(),F2(a,t,3,[d,M===K0?void 0:M,H]),M=d)}else k.run()};B.allowRecurse=!!a;let E;r==="sync"?E=B:r==="post"?E=()=>V2(B,t&&t.suspense):(B.pre=!0,t&&(B.id=t.uid),E=()=>v8(B));const k=new r8(f,E);return a?e?B():M=k.run():r==="post"?V2(k.run.bind(k),t&&t.suspense):k.run(),()=>{k.stop(),t&&t.scope&&c8(t.scope.effects,k)}}function Ff(c,a,e){const s=this.proxy,r=r2(c)?c.includes(".")?_7(s,c):()=>s[c]:c.bind(s,s);let i;D(a)?i=a:(i=a.handler,e=a);const n=l2;G1(this);const t=D7(r,i.bind(s),e);return n?G1(n):b1(),t}function _7(c,a){const e=a.split(".");return()=>{let s=c;for(let r=0;r<e.length&&s;r++)s=s[e[r]];return s}}function C1(c,a){if(!Y(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),z2(c))C1(c.value,a);else if(F(c))for(let e=0;e<c.length;e++)C1(c[e],a);else if(u7(c)||O1(c))c.forEach(e=>{C1(e,a)});else if(z7(c))for(const e in c)C1(c[e],a);return c}function H8(c){return D(c)?{setup:c,name:c.name}:c}const X4=c=>!!c.type.__asyncLoader,O7=c=>c.type.__isKeepAlive;function Df(c,a){U7(c,"a",a)}function _f(c,a){U7(c,"da",a)}function U7(c,a,e=l2){const s=c.__wdc||(c.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(C3(a,s,e),e){let r=e.parent;for(;r&&r.parent;)O7(r.parent.vnode)&&Of(s,a,e,r),r=r.parent}}function Of(c,a,e,s){const r=C3(a,c,s,!0);I7(()=>{c8(s[a],r)},e)}function C3(c,a,e=l2,s=!1){if(e){const r=e[c]||(e[c]=[]),i=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;X1(),G1(e);const t=F2(a,e,c,n);return b1(),Y1(),t});return s?r.unshift(i):r.push(i),i}}const e1=c=>(a,e=l2)=>(!H4||c==="sp")&&C3(c,a,e),Uf=e1("bm"),If=e1("m"),qf=e1("bu"),Wf=e1("u"),Gf=e1("bum"),I7=e1("um"),jf=e1("sp"),$f=e1("rtg"),Kf=e1("rtc");function Xf(c,a=l2){C3("ec",c,a)}function z8(c,a){const e=P2;if(e===null)return c;const s=g3(e)||e.proxy,r=c.dirs||(c.dirs=[]);for(let i=0;i<a.length;i++){let[n,t,f,o=G]=a[i];D(n)&&(n={mounted:n,updated:n}),n.deep&&C1(t),r.push({dir:n,instance:s,value:t,oldValue:void 0,arg:f,modifiers:o})}return c}function h1(c,a,e,s){const r=c.dirs,i=a&&a.dirs;for(let n=0;n<r.length;n++){const t=r[n];i&&(t.oldValue=i[n].value);let f=t.dir[s];f&&(X1(),F2(f,e,8,[c.el,t,c,a]),Y1())}}const q7="components";function E1(c,a){return Jf(q7,c,!0,a)||c}const Yf=Symbol();function Jf(c,a,e=!0,s=!1){const r=P2||l2;if(r){const i=r.type;if(c===q7){const t=wl(i,!1);if(t&&(t===a||t===K2(a)||t===h3(K2(a))))return i}const n=X0(r[c]||i[c],a)||X0(r.appContext[c],a);return!n&&s?i:n}}function X0(c,a){return c&&(c[a]||c[K2(a)]||c[h3(K2(a))])}function Qf(c,a,e,s){let r;const i=e&&e[s];if(F(c)||r2(c)){r=new Array(c.length);for(let n=0,t=c.length;n<t;n++)r[n]=a(c[n],n,void 0,i&&i[n])}else if(typeof c=="number"){r=new Array(c);for(let n=0;n<c;n++)r[n]=a(n+1,n,void 0,i&&i[n])}else if(Y(c))if(c[Symbol.iterator])r=Array.from(c,(n,t)=>a(n,t,void 0,i&&i[t]));else{const n=Object.keys(c);r=new Array(n.length);for(let t=0,f=n.length;t<f;t++){const o=n[t];r[t]=a(c[o],o,t,i&&i[t])}}else r=[];return e&&(e[s]=r),r}const w6=c=>c?ac(c)?g3(c)||c.proxy:w6(c.parent):null,i3=h2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>w6(c.parent),$root:c=>w6(c.root),$emit:c=>c.emit,$options:c=>G7(c),$forceUpdate:c=>c.f||(c.f=()=>v8(c.update)),$nextTick:c=>c.n||(c.n=gf.bind(c.proxy)),$watch:c=>Ff.bind(c)}),Zf={get({_:c},a){const{ctx:e,setupState:s,data:r,props:i,accessCache:n,type:t,appContext:f}=c;let o;if(a[0]!=="$"){const M=n[a];if(M!==void 0)switch(M){case 1:return s[a];case 2:return r[a];case 4:return e[a];case 3:return i[a]}else{if(s!==G&&O(s,a))return n[a]=1,s[a];if(r!==G&&O(r,a))return n[a]=2,r[a];if((o=c.propsOptions[0])&&O(o,a))return n[a]=3,i[a];if(e!==G&&O(e,a))return n[a]=4,e[a];y6&&(n[a]=0)}}const m=i3[a];let v,H;if(m)return a==="$attrs"&&L2(c,"get",a),m(c);if((v=t.__cssModules)&&(v=v[a]))return v;if(e!==G&&O(e,a))return n[a]=4,e[a];if(H=f.config.globalProperties,O(H,a))return H[a]},set({_:c},a,e){const{data:s,setupState:r,ctx:i}=c;return r!==G&&O(r,a)?(r[a]=e,!0):s!==G&&O(s,a)?(s[a]=e,!0):O(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(i[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:s,appContext:r,propsOptions:i}},n){let t;return!!e[n]||c!==G&&O(c,n)||a!==G&&O(a,n)||(t=i[0])&&O(t,n)||O(s,n)||O(i3,n)||O(r.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:O(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};let y6=!0;function cl(c){const a=G7(c),e=c.proxy,s=c.ctx;y6=!1,a.beforeCreate&&Y0(a.beforeCreate,c,"bc");const{data:r,computed:i,methods:n,watch:t,provide:f,inject:o,created:m,beforeMount:v,mounted:H,beforeUpdate:M,updated:B,activated:E,deactivated:k,beforeDestroy:d,beforeUnmount:S,destroyed:P,unmounted:_,render:b,renderTracked:m2,renderTriggered:i2,errorCaptured:x2,serverPrefetch:Z,expose:D2,inheritAttrs:_2,components:n2,directives:w2,filters:O2}=a;if(o&&al(o,s,null,c.appContext.config.unwrapInjectedRef),n)for(const J in n){const j=n[J];D(j)&&(s[J]=j.bind(e))}if(r){const J=r.call(e,e);Y(J)&&(c.data=f8(J))}if(y6=!0,i)for(const J in i){const j=i[J],X2=D(j)?j.bind(e,e):D(j.get)?j.get.bind(e,e):E2,K3=!D(j)&&D(j.set)?j.set.bind(e):E2,c4=S2({get:X2,set:K3});Object.defineProperty(s,J,{enumerable:!0,configurable:!0,get:()=>c4.value,set:k1=>c4.value=k1})}if(t)for(const J in t)W7(t[J],s,e,J);if(f){const J=D(f)?f.call(e):f;Reflect.ownKeys(J).forEach(j=>{Ef(j,J[j])})}m&&Y0(m,c,"c");function e2(J,j){F(j)?j.forEach(X2=>J(X2.bind(e))):j&&J(j.bind(e))}if(e2(Uf,v),e2(If,H),e2(qf,M),e2(Wf,B),e2(Df,E),e2(_f,k),e2(Xf,x2),e2(Kf,m2),e2($f,i2),e2(Gf,S),e2(I7,_),e2(jf,Z),F(D2))if(D2.length){const J=c.exposed||(c.exposed={});D2.forEach(j=>{Object.defineProperty(J,j,{get:()=>e[j],set:X2=>e[j]=X2})})}else c.exposed||(c.exposed={});b&&c.render===E2&&(c.render=b),_2!=null&&(c.inheritAttrs=_2),n2&&(c.components=n2),w2&&(c.directives=w2)}function al(c,a,e=E2,s=!1){F(c)&&(c=k6(c));for(const r in c){const i=c[r];let n;Y(i)?"default"in i?n=Q3(i.from||r,i.default,!0):n=Q3(i.from||r):n=Q3(i),z2(n)&&s?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:t=>n.value=t}):a[r]=n}}function Y0(c,a,e){F2(F(c)?c.map(s=>s.bind(a.proxy)):c.bind(a.proxy),a,e)}function W7(c,a,e,s){const r=s.includes(".")?_7(e,s):()=>e[s];if(r2(c)){const i=a[c];D(i)&&K4(r,i)}else if(D(c))K4(r,c.bind(e));else if(Y(c))if(F(c))c.forEach(i=>W7(i,a,e,s));else{const i=D(c.handler)?c.handler.bind(e):a[c.handler];D(i)&&K4(r,i,c)}}function G7(c){const a=c.type,{mixins:e,extends:s}=a,{mixins:r,optionsCache:i,config:{optionMergeStrategies:n}}=c.appContext,t=i.get(a);let f;return t?f=t:!r.length&&!e&&!s?f=a:(f={},r.length&&r.forEach(o=>n3(f,o,n,!0)),n3(f,a,n)),Y(a)&&i.set(a,f),f}function n3(c,a,e,s=!1){const{mixins:r,extends:i}=a;i&&n3(c,i,e,!0),r&&r.forEach(n=>n3(c,n,e,!0));for(const n in a)if(!(s&&n==="expose")){const t=el[n]||e&&e[n];c[n]=t?t(c[n],a[n]):a[n]}return c}const el={data:J0,props:V1,emits:V1,methods:V1,computed:V1,beforeCreate:v2,created:v2,beforeMount:v2,mounted:v2,beforeUpdate:v2,updated:v2,beforeDestroy:v2,beforeUnmount:v2,destroyed:v2,unmounted:v2,activated:v2,deactivated:v2,errorCaptured:v2,serverPrefetch:v2,components:V1,directives:V1,watch:rl,provide:J0,inject:sl};function J0(c,a){return a?c?function(){return h2(D(c)?c.call(this,this):c,D(a)?a.call(this,this):a)}:a:c}function sl(c,a){return V1(k6(c),k6(a))}function k6(c){if(F(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function v2(c,a){return c?[...new Set([].concat(c,a))]:a}function V1(c,a){return c?h2(h2(Object.create(null),c),a):a}function rl(c,a){if(!c)return a;if(!a)return c;const e=h2(Object.create(null),c);for(const s in a)e[s]=v2(c[s],a[s]);return e}function il(c,a,e,s=!1){const r={},i={};e3(i,L3,1),c.propsDefaults=Object.create(null),j7(c,a,r,i);for(const n in c.propsOptions[0])n in r||(r[n]=void 0);e?c.props=s?r:zf(r):c.type.props?c.props=r:c.props=i,c.attrs=i}function nl(c,a,e,s){const{props:r,attrs:i,vnode:{patchFlag:n}}=c,t=I(r),[f]=c.propsOptions;let o=!1;if((s||n>0)&&!(n&16)){if(n&8){const m=c.vnode.dynamicProps;for(let v=0;v<m.length;v++){let H=m[v];if(d3(c.emitsOptions,H))continue;const M=a[H];if(f)if(O(i,H))M!==i[H]&&(i[H]=M,o=!0);else{const B=K2(H);r[B]=A6(f,t,B,M,c,!1)}else M!==i[H]&&(i[H]=M,o=!0)}}}else{j7(c,a,r,i)&&(o=!0);let m;for(const v in t)(!a||!O(a,v)&&((m=w1(v))===v||!O(a,m)))&&(f?e&&(e[v]!==void 0||e[m]!==void 0)&&(r[v]=A6(f,t,v,void 0,c,!0)):delete r[v]);if(i!==t)for(const v in i)(!a||!O(a,v)&&!0)&&(delete i[v],o=!0)}o&&Q2(c,"set","$attrs")}function j7(c,a,e,s){const[r,i]=c.propsOptions;let n=!1,t;if(a)for(let f in a){if(j4(f))continue;const o=a[f];let m;r&&O(r,m=K2(f))?!i||!i.includes(m)?e[m]=o:(t||(t={}))[m]=o:d3(c.emitsOptions,f)||(!(f in s)||o!==s[f])&&(s[f]=o,n=!0)}if(i){const f=I(e),o=t||G;for(let m=0;m<i.length;m++){const v=i[m];e[v]=A6(r,f,v,o[v],c,!O(o,v))}}return n}function A6(c,a,e,s,r,i){const n=c[e];if(n!=null){const t=O(n,"default");if(t&&s===void 0){const f=n.default;if(n.type!==Function&&D(f)){const{propsDefaults:o}=r;e in o?s=o[e]:(G1(r),s=o[e]=f.call(null,a),b1())}else s=f}n[0]&&(i&&!t?s=!1:n[1]&&(s===""||s===w1(e))&&(s=!0))}return s}function $7(c,a,e=!1){const s=a.propsCache,r=s.get(c);if(r)return r;const i=c.props,n={},t=[];let f=!1;if(!D(c)){const m=v=>{f=!0;const[H,M]=$7(v,a,!0);h2(n,H),M&&t.push(...M)};!e&&a.mixins.length&&a.mixins.forEach(m),c.extends&&m(c.extends),c.mixins&&c.mixins.forEach(m)}if(!i&&!f)return Y(c)&&s.set(c,_1),_1;if(F(i))for(let m=0;m<i.length;m++){const v=K2(i[m]);Q0(v)&&(n[v]=G)}else if(i)for(const m in i){const v=K2(m);if(Q0(v)){const H=i[m],M=n[v]=F(H)||D(H)?{type:H}:H;if(M){const B=a5(Boolean,M.type),E=a5(String,M.type);M[0]=B>-1,M[1]=E<0||B<E,(B>-1||O(M,"default"))&&t.push(v)}}}const o=[n,t];return Y(c)&&s.set(c,o),o}function Q0(c){return c[0]!=="$"}function Z0(c){const a=c&&c.toString().match(/^\s*function (\w+)/);return a?a[1]:c===null?"null":""}function c5(c,a){return Z0(c)===Z0(a)}function a5(c,a){return F(a)?a.findIndex(e=>c5(e,c)):D(a)&&c5(a,c)?0:-1}const K7=c=>c[0]==="_"||c==="$stable",h8=c=>F(c)?c.map(W2):[W2(c)],tl=(c,a,e)=>{if(a._n)return a;const s=yf((...r)=>h8(a(...r)),e);return s._c=!1,s},X7=(c,a,e)=>{const s=c._ctx;for(const r in c){if(K7(r))continue;const i=c[r];if(D(i))a[r]=tl(r,i,s);else if(i!=null){const n=h8(i);a[r]=()=>n}}},Y7=(c,a)=>{const e=h8(a);c.slots.default=()=>e},fl=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=I(a),e3(a,"_",e)):X7(a,c.slots={})}else c.slots={},a&&Y7(c,a);e3(c.slots,L3,1)},ll=(c,a,e)=>{const{vnode:s,slots:r}=c;let i=!0,n=G;if(s.shapeFlag&32){const t=a._;t?e&&t===1?i=!1:(h2(r,a),!e&&t===1&&delete r._):(i=!a.$stable,X7(a,r)),n=a}else a&&(Y7(c,a),n={default:1});if(i)for(const t in r)!K7(t)&&!(t in n)&&delete r[t]};function J7(){return{app:null,config:{isNativeTag:Bt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ol=0;function ml(c,a){return function(s,r=null){D(s)||(s=Object.assign({},s)),r!=null&&!Y(r)&&(r=null);const i=J7(),n=new Set;let t=!1;const f=i.app={_uid:ol++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:kl,get config(){return i.config},set config(o){},use(o,...m){return n.has(o)||(o&&D(o.install)?(n.add(o),o.install(f,...m)):D(o)&&(n.add(o),o(f,...m))),f},mixin(o){return i.mixins.includes(o)||i.mixins.push(o),f},component(o,m){return m?(i.components[o]=m,f):i.components[o]},directive(o,m){return m?(i.directives[o]=m,f):i.directives[o]},mount(o,m,v){if(!t){const H=c2(s,r);return H.appContext=i,m&&a?a(H,o):c(H,o,v),t=!0,f._container=o,o.__vue_app__=f,g3(H.component)||H.component.proxy}},unmount(){t&&(c(null,f._container),delete f._container.__vue_app__)},provide(o,m){return i.provides[o]=m,f}};return f}}function T6(c,a,e,s,r=!1){if(F(c)){c.forEach((H,M)=>T6(H,a&&(F(a)?a[M]:a),e,s,r));return}if(X4(s)&&!r)return;const i=s.shapeFlag&4?g3(s.component)||s.component.proxy:s.el,n=r?null:i,{i:t,r:f}=c,o=a&&a.r,m=t.refs===G?t.refs={}:t.refs,v=t.setupState;if(o!=null&&o!==f&&(r2(o)?(m[o]=null,O(v,o)&&(v[o]=null)):z2(o)&&(o.value=null)),D(f))m1(f,t,12,[n,m]);else{const H=r2(f),M=z2(f);if(H||M){const B=()=>{if(c.f){const E=H?m[f]:f.value;r?F(E)&&c8(E,i):F(E)?E.includes(i)||E.push(i):H?(m[f]=[i],O(v,f)&&(v[f]=m[f])):(f.value=[i],c.k&&(m[c.k]=f.value))}else H?(m[f]=n,O(v,f)&&(v[f]=n)):M&&(f.value=n,c.k&&(m[c.k]=n))};n?(B.id=-1,V2(B,e)):B()}}}const V2=Rf;function ul(c){return vl(c)}function vl(c,a){const e=Ot();e.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:n,createText:t,createComment:f,setText:o,setElementText:m,parentNode:v,nextSibling:H,setScopeId:M=E2,cloneNode:B,insertStaticContent:E}=c,k=(l,u,z,p=null,h=null,L=null,x=!1,C=null,g=!!u.dynamicChildren)=>{if(l===u)return;l&&!e4(l,u)&&(p=y4(l),r1(l,h,L,!0),l=null),u.patchFlag===-2&&(g=!1,u.dynamicChildren=null);const{type:V,ref:A,shapeFlag:w}=u;switch(V){case p8:d(l,u,z,p);break;case u4:S(l,u,z,p);break;case Z3:l==null&&P(u,z,p,x);break;case b2:w2(l,u,z,p,h,L,x,C,g);break;default:w&1?m2(l,u,z,p,h,L,x,C,g):w&6?O2(l,u,z,p,h,L,x,C,g):(w&64||w&128)&&V.process(l,u,z,p,h,L,x,C,g,A1)}A!=null&&h&&T6(A,l&&l.ref,L,u||l,!u)},d=(l,u,z,p)=>{if(l==null)s(u.el=t(u.children),z,p);else{const h=u.el=l.el;u.children!==l.children&&o(h,u.children)}},S=(l,u,z,p)=>{l==null?s(u.el=f(u.children||""),z,p):u.el=l.el},P=(l,u,z,p)=>{[l.el,l.anchor]=E(l.children,u,z,p,l.el,l.anchor)},_=({el:l,anchor:u},z,p)=>{let h;for(;l&&l!==u;)h=H(l),s(l,z,p),l=h;s(u,z,p)},b=({el:l,anchor:u})=>{let z;for(;l&&l!==u;)z=H(l),r(l),l=z;r(u)},m2=(l,u,z,p,h,L,x,C,g)=>{x=x||u.type==="svg",l==null?i2(u,z,p,h,L,x,C,g):D2(l,u,h,L,x,C,g)},i2=(l,u,z,p,h,L,x,C)=>{let g,V;const{type:A,props:w,shapeFlag:T,transition:R,patchFlag:U,dirs:q}=l;if(l.el&&B!==void 0&&U===-1)g=l.el=B(l.el);else{if(g=l.el=n(l.type,L,w&&w.is,w),T&8?m(g,l.children):T&16&&Z(l.children,g,null,p,h,L&&A!=="foreignObject",x,C),q&&h1(l,null,p,"created"),w){for(const $ in w)$!=="value"&&!j4($)&&i(g,$,null,w[$],L,l.children,p,h,Y2);"value"in w&&i(g,"value",null,w.value),(V=w.onVnodeBeforeMount)&&I2(V,p,l)}x2(g,l,l.scopeId,x,p)}q&&h1(l,null,p,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&R&&!R.persisted;W&&R.beforeEnter(g),s(g,u,z),((V=w&&w.onVnodeMounted)||W||q)&&V2(()=>{V&&I2(V,p,l),W&&R.enter(g),q&&h1(l,null,p,"mounted")},h)},x2=(l,u,z,p,h)=>{if(z&&M(l,z),p)for(let L=0;L<p.length;L++)M(l,p[L]);if(h){let L=h.subTree;if(u===L){const x=h.vnode;x2(l,x,x.scopeId,x.slotScopeIds,h.parent)}}},Z=(l,u,z,p,h,L,x,C,g=0)=>{for(let V=g;V<l.length;V++){const A=l[V]=C?t1(l[V]):W2(l[V]);k(null,A,u,z,p,h,L,x,C)}},D2=(l,u,z,p,h,L,x)=>{const C=u.el=l.el;let{patchFlag:g,dynamicChildren:V,dirs:A}=u;g|=l.patchFlag&16;const w=l.props||G,T=u.props||G;let R;z&&p1(z,!1),(R=T.onVnodeBeforeUpdate)&&I2(R,z,u,l),A&&h1(u,l,z,"beforeUpdate"),z&&p1(z,!0);const U=h&&u.type!=="foreignObject";if(V?_2(l.dynamicChildren,V,C,z,p,U,L):x||X2(l,u,C,null,z,p,U,L,!1),g>0){if(g&16)n2(C,u,w,T,z,p,h);else if(g&2&&w.class!==T.class&&i(C,"class",null,T.class,h),g&4&&i(C,"style",w.style,T.style,h),g&8){const q=u.dynamicProps;for(let W=0;W<q.length;W++){const $=q[W],y2=w[$],T1=T[$];(T1!==y2||$==="value")&&i(C,$,y2,T1,h,l.children,z,p,Y2)}}g&1&&l.children!==u.children&&m(C,u.children)}else!x&&V==null&&n2(C,u,w,T,z,p,h);((R=T.onVnodeUpdated)||A)&&V2(()=>{R&&I2(R,z,u,l),A&&h1(u,l,z,"updated")},p)},_2=(l,u,z,p,h,L,x)=>{for(let C=0;C<u.length;C++){const g=l[C],V=u[C],A=g.el&&(g.type===b2||!e4(g,V)||g.shapeFlag&70)?v(g.el):z;k(g,V,A,null,p,h,L,x,!0)}},n2=(l,u,z,p,h,L,x)=>{if(z!==p){for(const C in p){if(j4(C))continue;const g=p[C],V=z[C];g!==V&&C!=="value"&&i(l,C,V,g,x,u.children,h,L,Y2)}if(z!==G)for(const C in z)!j4(C)&&!(C in p)&&i(l,C,z[C],null,x,u.children,h,L,Y2);"value"in p&&i(l,"value",z.value,p.value)}},w2=(l,u,z,p,h,L,x,C,g)=>{const V=u.el=l?l.el:t(""),A=u.anchor=l?l.anchor:t("");let{patchFlag:w,dynamicChildren:T,slotScopeIds:R}=u;R&&(C=C?C.concat(R):R),l==null?(s(V,z,p),s(A,z,p),Z(u.children,z,A,h,L,x,C,g)):w>0&&w&64&&T&&l.dynamicChildren?(_2(l.dynamicChildren,T,z,h,L,x,C),(u.key!=null||h&&u===h.subTree)&&Q7(l,u,!0)):X2(l,u,z,A,h,L,x,C,g)},O2=(l,u,z,p,h,L,x,C,g)=>{u.slotScopeIds=C,l==null?u.shapeFlag&512?h.ctx.activate(u,z,p,x,g):Z1(u,z,p,h,L,x,g):e2(l,u,g)},Z1=(l,u,z,p,h,L,x)=>{const C=l.component=gl(l,p,h);if(O7(l)&&(C.ctx.renderer=A1),xl(C),C.asyncDep){if(h&&h.registerDep(C,J),!l.el){const g=C.subTree=c2(u4);S(null,g,u,z)}return}J(C,l,u,z,h,L,x)},e2=(l,u,z)=>{const p=u.component=l.component;if(Tf(l,u,z))if(p.asyncDep&&!p.asyncResolved){j(p,u,z);return}else p.next=u,bf(p.update),p.update();else u.el=l.el,p.vnode=u},J=(l,u,z,p,h,L,x)=>{const C=()=>{if(l.isMounted){let{next:A,bu:w,u:T,parent:R,vnode:U}=l,q=A,W;p1(l,!1),A?(A.el=U.el,j(l,A,x)):A=U,w&&$4(w),(W=A.props&&A.props.onVnodeBeforeUpdate)&&I2(W,R,A,U),p1(l,!0);const $=J3(l),y2=l.subTree;l.subTree=$,k(y2,$,v(y2.el),y4(y2),l,h,L),A.el=$.el,q===null&&Pf(l,$.el),T&&V2(T,h),(W=A.props&&A.props.onVnodeUpdated)&&V2(()=>I2(W,R,A,U),h)}else{let A;const{el:w,props:T}=u,{bm:R,m:U,parent:q}=l,W=X4(u);if(p1(l,!1),R&&$4(R),!W&&(A=T&&T.onVnodeBeforeMount)&&I2(A,q,u),p1(l,!0),w&&Y3){const $=()=>{l.subTree=J3(l),Y3(w,l.subTree,l,h,null)};W?u.type.__asyncLoader().then(()=>!l.isUnmounted&&$()):$()}else{const $=l.subTree=J3(l);k(null,$,z,p,l,h,L),u.el=$.el}if(U&&V2(U,h),!W&&(A=T&&T.onVnodeMounted)){const $=u;V2(()=>I2(A,q,$),h)}(u.shapeFlag&256||q&&X4(q.vnode)&&q.vnode.shapeFlag&256)&&l.a&&V2(l.a,h),l.isMounted=!0,u=z=p=null}},g=l.effect=new r8(C,()=>v8(V),l.scope),V=l.update=()=>g.run();V.id=l.uid,p1(l,!0),V()},j=(l,u,z)=>{u.component=l;const p=l.vnode.props;l.vnode=u,l.next=null,nl(l,u.props,p,z),ll(l,u.children,z),X1(),j0(),Y1()},X2=(l,u,z,p,h,L,x,C,g=!1)=>{const V=l&&l.children,A=l?l.shapeFlag:0,w=u.children,{patchFlag:T,shapeFlag:R}=u;if(T>0){if(T&128){c4(V,w,z,p,h,L,x,C,g);return}else if(T&256){K3(V,w,z,p,h,L,x,C,g);return}}R&8?(A&16&&Y2(V,h,L),w!==V&&m(z,w)):A&16?R&16?c4(V,w,z,p,h,L,x,C,g):Y2(V,h,L,!0):(A&8&&m(z,""),R&16&&Z(w,z,p,h,L,x,C,g))},K3=(l,u,z,p,h,L,x,C,g)=>{l=l||_1,u=u||_1;const V=l.length,A=u.length,w=Math.min(V,A);let T;for(T=0;T<w;T++){const R=u[T]=g?t1(u[T]):W2(u[T]);k(l[T],R,z,null,h,L,x,C,g)}V>A?Y2(l,h,L,!0,!1,w):Z(u,z,p,h,L,x,C,g,w)},c4=(l,u,z,p,h,L,x,C,g)=>{let V=0;const A=u.length;let w=l.length-1,T=A-1;for(;V<=w&&V<=T;){const R=l[V],U=u[V]=g?t1(u[V]):W2(u[V]);if(e4(R,U))k(R,U,z,null,h,L,x,C,g);else break;V++}for(;V<=w&&V<=T;){const R=l[w],U=u[T]=g?t1(u[T]):W2(u[T]);if(e4(R,U))k(R,U,z,null,h,L,x,C,g);else break;w--,T--}if(V>w){if(V<=T){const R=T+1,U=R<A?u[R].el:p;for(;V<=T;)k(null,u[V]=g?t1(u[V]):W2(u[V]),z,U,h,L,x,C,g),V++}}else if(V>T)for(;V<=w;)r1(l[V],h,L,!0),V++;else{const R=V,U=V,q=new Map;for(V=U;V<=T;V++){const M2=u[V]=g?t1(u[V]):W2(u[V]);M2.key!=null&&q.set(M2.key,V)}let W,$=0;const y2=T-U+1;let T1=!1,R0=0;const a4=new Array(y2);for(V=0;V<y2;V++)a4[V]=0;for(V=R;V<=w;V++){const M2=l[V];if($>=y2){r1(M2,h,L,!0);continue}let U2;if(M2.key!=null)U2=q.get(M2.key);else for(W=U;W<=T;W++)if(a4[W-U]===0&&e4(M2,u[W])){U2=W;break}U2===void 0?r1(M2,h,L,!0):(a4[U2-U]=V+1,U2>=R0?R0=U2:T1=!0,k(M2,u[U2],z,null,h,L,x,C,g),$++)}const E0=T1?Hl(a4):_1;for(W=E0.length-1,V=y2-1;V>=0;V--){const M2=U+V,U2=u[M2],F0=M2+1<A?u[M2+1].el:p;a4[V]===0?k(null,U2,z,F0,h,L,x,C,g):T1&&(W<0||V!==E0[W]?k1(U2,z,F0,2):W--)}}},k1=(l,u,z,p,h=null)=>{const{el:L,type:x,transition:C,children:g,shapeFlag:V}=l;if(V&6){k1(l.component.subTree,u,z,p);return}if(V&128){l.suspense.move(u,z,p);return}if(V&64){x.move(l,u,z,A1);return}if(x===b2){s(L,u,z);for(let w=0;w<g.length;w++)k1(g[w],u,z,p);s(l.anchor,u,z);return}if(x===Z3){_(l,u,z);return}if(p!==2&&V&1&&C)if(p===0)C.beforeEnter(L),s(L,u,z),V2(()=>C.enter(L),h);else{const{leave:w,delayLeave:T,afterLeave:R}=C,U=()=>s(L,u,z),q=()=>{w(L,()=>{U(),R&&R()})};T?T(L,U,q):q()}else s(L,u,z)},r1=(l,u,z,p=!1,h=!1)=>{const{type:L,props:x,ref:C,children:g,dynamicChildren:V,shapeFlag:A,patchFlag:w,dirs:T}=l;if(C!=null&&T6(C,null,z,l,!0),A&256){u.ctx.deactivate(l);return}const R=A&1&&T,U=!X4(l);let q;if(U&&(q=x&&x.onVnodeBeforeUnmount)&&I2(q,u,l),A&6)wt(l.component,z,p);else{if(A&128){l.suspense.unmount(z,p);return}R&&h1(l,null,u,"beforeUnmount"),A&64?l.type.remove(l,u,z,h,A1,p):V&&(L!==b2||w>0&&w&64)?Y2(V,u,z,!1,!0):(L===b2&&w&384||!h&&A&16)&&Y2(g,u,z),p&&P0(l)}(U&&(q=x&&x.onVnodeUnmounted)||R)&&V2(()=>{q&&I2(q,u,l),R&&h1(l,null,u,"unmounted")},z)},P0=l=>{const{type:u,el:z,anchor:p,transition:h}=l;if(u===b2){Nt(z,p);return}if(u===Z3){b(l);return}const L=()=>{r(z),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(l.shapeFlag&1&&h&&!h.persisted){const{leave:x,delayLeave:C}=h,g=()=>x(z,L);C?C(l.el,L,g):g()}else L()},Nt=(l,u)=>{let z;for(;l!==u;)z=H(l),r(l),l=z;r(u)},wt=(l,u,z)=>{const{bum:p,scope:h,update:L,subTree:x,um:C}=l;p&&$4(p),h.stop(),L&&(L.active=!1,r1(x,l,u,z)),C&&V2(C,u),V2(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Y2=(l,u,z,p=!1,h=!1,L=0)=>{for(let x=L;x<l.length;x++)r1(l[x],u,z,p,h)},y4=l=>l.shapeFlag&6?y4(l.component.subTree):l.shapeFlag&128?l.suspense.next():H(l.anchor||l.el),B0=(l,u,z)=>{l==null?u._vnode&&r1(u._vnode,null,null,!0):k(u._vnode||null,l,u,null,null,null,z),j0(),P7(),u._vnode=l},A1={p:k,um:r1,m:k1,r:P0,mt:Z1,mc:Z,pc:X2,pbc:_2,n:y4,o:c};let X3,Y3;return a&&([X3,Y3]=a(A1)),{render:B0,hydrate:X3,createApp:ml(B0,X3)}}function p1({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function Q7(c,a,e=!1){const s=c.children,r=a.children;if(F(s)&&F(r))for(let i=0;i<s.length;i++){const n=s[i];let t=r[i];t.shapeFlag&1&&!t.dynamicChildren&&((t.patchFlag<=0||t.patchFlag===32)&&(t=r[i]=t1(r[i]),t.el=n.el),e||Q7(n,t))}}function Hl(c){const a=c.slice(),e=[0];let s,r,i,n,t;const f=c.length;for(s=0;s<f;s++){const o=c[s];if(o!==0){if(r=e[e.length-1],c[r]<o){a[s]=r,e.push(s);continue}for(i=0,n=e.length-1;i<n;)t=i+n>>1,c[e[t]]<o?i=t+1:n=t;o<c[e[i]]&&(i>0&&(a[s]=e[i-1]),e[i]=s)}}for(i=e.length,n=e[i-1];i-- >0;)e[i]=n,n=a[n];return e}const zl=c=>c.__isTeleport,b2=Symbol(void 0),p8=Symbol(void 0),u4=Symbol(void 0),Z3=Symbol(void 0),n4=[];let B2=null;function H2(c=!1){n4.push(B2=c?null:[])}function hl(){n4.pop(),B2=n4[n4.length-1]||null}let v4=1;function e5(c){v4+=c}function Z7(c){return c.dynamicChildren=v4>0?B2||_1:null,hl(),v4>0&&B2&&B2.push(c),c}function N2(c,a,e,s,r,i){return Z7(f2(c,a,e,s,r,i,!0))}function P6(c,a,e,s,r){return Z7(c2(c,a,e,s,r,!0))}function B6(c){return c?c.__v_isVNode===!0:!1}function e4(c,a){return c.type===a.type&&c.key===a.key}const L3="__vInternal",cc=({key:c})=>c!=null?c:null,Y4=({ref:c,ref_key:a,ref_for:e})=>c!=null?r2(c)||z2(c)||D(c)?{i:P2,r:c,k:a,f:!!e}:c:null;function f2(c,a=null,e=null,s=0,r=null,i=c===b2?0:1,n=!1,t=!1){const f={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&cc(a),ref:a&&Y4(a),scopeId:M3,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return t?(V8(f,e),i&128&&c.normalize(f)):e&&(f.shapeFlag|=r2(e)?8:16),v4>0&&!n&&B2&&(f.patchFlag>0||i&6)&&f.patchFlag!==32&&B2.push(f),f}const c2=pl;function pl(c,a=null,e=null,s=0,r=null,i=!1){if((!c||c===Yf)&&(c=u4),B6(c)){const t=W1(c,a,!0);return e&&V8(t,e),v4>0&&!i&&B2&&(t.shapeFlag&6?B2[B2.indexOf(c)]=t:B2.push(t)),t.patchFlag|=-2,t}if(yl(c)&&(c=c.__vccOpts),a){a=Vl(a);let{class:t,style:f}=a;t&&!r2(t)&&(a.class=j2(t)),Y(f)&&(N7(f)&&!F(f)&&(f=h2({},f)),a.style=Q6(f))}const n=r2(c)?1:Bf(c)?128:zl(c)?64:Y(c)?4:D(c)?2:0;return f2(c,a,e,s,r,n,i,!0)}function Vl(c){return c?N7(c)||L3 in c?h2({},c):c:null}function W1(c,a,e=!1){const{props:s,ref:r,patchFlag:i,children:n}=c,t=a?Ml(s||{},a):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:t,key:t&&cc(t),ref:a&&a.ref?e&&r?F(r)?r.concat(Y4(a)):[r,Y4(a)]:Y4(a):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==b2?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&W1(c.ssContent),ssFallback:c.ssFallback&&W1(c.ssFallback),el:c.el,anchor:c.anchor}}function dl(c=" ",a=0){return c2(p8,null,c,a)}function W2(c){return c==null||typeof c=="boolean"?c2(u4):F(c)?c2(b2,null,c.slice()):typeof c=="object"?t1(c):c2(p8,null,String(c))}function t1(c){return c.el===null||c.memo?c:W1(c)}function V8(c,a){let e=0;const{shapeFlag:s}=c;if(a==null)a=null;else if(F(a))e=16;else if(typeof a=="object")if(s&65){const r=a.default;r&&(r._c&&(r._d=!1),V8(c,r()),r._c&&(r._d=!0));return}else{e=32;const r=a._;!r&&!(L3 in a)?a._ctx=P2:r===3&&P2&&(P2.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else D(a)?(a={default:a,_ctx:P2},e=32):(a=String(a),s&64?(e=16,a=[dl(a)]):e=8);c.children=a,c.shapeFlag|=e}function Ml(...c){const a={};for(let e=0;e<c.length;e++){const s=c[e];for(const r in s)if(r==="class")a.class!==s.class&&(a.class=j2([a.class,s.class]));else if(r==="style")a.style=Q6([a.style,s.style]);else if(v3(r)){const i=a[r],n=s[r];n&&i!==n&&!(F(i)&&i.includes(n))&&(a[r]=i?[].concat(i,n):n)}else r!==""&&(a[r]=s[r])}return a}function I2(c,a,e,s=null){F2(c,a,7,[e,s])}const Cl=J7();let Ll=0;function gl(c,a,e){const s=c.type,r=(a?a.appContext:c.appContext)||Cl,i={uid:Ll++,vnode:c,type:s,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ut(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$7(s,r),emitsOptions:R7(s,r),emit:null,emitted:null,propsDefaults:G,inheritAttrs:s.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=wf.bind(null,i),c.ce&&c.ce(i),i}let l2=null;const G1=c=>{l2=c,c.scope.on()},b1=()=>{l2&&l2.scope.off(),l2=null};function ac(c){return c.vnode.shapeFlag&4}let H4=!1;function xl(c,a=!1){H4=a;const{props:e,children:s}=c.vnode,r=ac(c);il(c,e,r,a),fl(c,s);const i=r?bl(c,a):void 0;return H4=!1,i}function bl(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=w7(new Proxy(c.ctx,Zf));const{setup:s}=e;if(s){const r=c.setupContext=s.length>1?Nl(c):null;G1(c),X1();const i=m1(s,c,0,[c.props,r]);if(Y1(),b1(),v7(i)){if(i.then(b1,b1),a)return i.then(n=>{s5(c,n,a)}).catch(n=>{V3(n,c,0)});c.asyncDep=i}else s5(c,i,a)}else ec(c,a)}function s5(c,a,e){D(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:Y(a)&&(c.setupState=y7(a)),ec(c,e)}let r5;function ec(c,a,e){const s=c.type;if(!c.render){if(!a&&r5&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:n}=c.appContext.config,{delimiters:t,compilerOptions:f}=s,o=h2(h2({isCustomElement:i,delimiters:t},n),f);s.render=r5(r,o)}}c.render=s.render||E2}G1(c),X1(),cl(c),Y1(),b1()}function Sl(c){return new Proxy(c.attrs,{get(a,e){return L2(c,"get","$attrs"),a[e]}})}function Nl(c){const a=s=>{c.exposed=s||{}};let e;return{get attrs(){return e||(e=Sl(c))},slots:c.slots,emit:c.emit,expose:a}}function g3(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(y7(w7(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in i3)return i3[e](c)}}))}function wl(c,a=!0){return D(c)?c.displayName||c.name:c.name||a&&c.__name}function yl(c){return D(c)&&"__vccOpts"in c}const S2=(c,a)=>Cf(c,a,H4);function sc(c,a,e){const s=arguments.length;return s===2?Y(a)&&!F(a)?B6(a)?c2(c,null,[a]):c2(c,a):c2(c,null,a):(s>3?e=Array.prototype.slice.call(arguments,2):s===3&&B6(e)&&(e=[e]),c2(c,a,e))}const kl="3.2.38",Al="http://www.w3.org/2000/svg",M1=typeof document<"u"?document:null,i5=M1&&M1.createElement("template"),Tl={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,s)=>{const r=a?M1.createElementNS(Al,c):M1.createElement(c,e?{is:e}:void 0);return c==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:c=>M1.createTextNode(c),createComment:c=>M1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>M1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},cloneNode(c){const a=c.cloneNode(!0);return"_value"in c&&(a._value=c._value),a},insertStaticContent(c,a,e,s,r,i){const n=e?e.previousSibling:a.lastChild;if(r&&(r===i||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),e),!(r===i||!(r=r.nextSibling)););else{i5.innerHTML=s?`<svg>${c}</svg>`:c;const t=i5.content;if(s){const f=t.firstChild;for(;f.firstChild;)t.appendChild(f.firstChild);t.removeChild(f)}a.insertBefore(t,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function Pl(c,a,e){const s=c._vtc;s&&(a=(a?[a,...s]:[...s]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function Bl(c,a,e){const s=c.style,r=r2(e);if(e&&!r){for(const i in e)R6(s,i,e[i]);if(a&&!r2(a))for(const i in a)e[i]==null&&R6(s,i,"")}else{const i=s.display;r?a!==e&&(s.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(s.display=i)}}const n5=/\s*!important$/;function R6(c,a,e){if(F(e))e.forEach(s=>R6(c,a,s));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const s=Rl(c,a);n5.test(e)?c.setProperty(w1(s),e.replace(n5,""),"important"):c[s]=e}}const t5=["Webkit","Moz","ms"],c6={};function Rl(c,a){const e=c6[a];if(e)return e;let s=K2(a);if(s!=="filter"&&s in c)return c6[a]=s;s=h3(s);for(let r=0;r<t5.length;r++){const i=t5[r]+s;if(i in c)return c6[a]=i}return a}const f5="http://www.w3.org/1999/xlink";function El(c,a,e,s,r){if(s&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(f5,a.slice(6,a.length)):c.setAttributeNS(f5,a,e);else{const i=kt(a);e==null||i&&!o7(e)?c.removeAttribute(a):c.setAttribute(a,i?"":e)}}function Fl(c,a,e,s,r,i,n){if(a==="innerHTML"||a==="textContent"){s&&n(s,r,i),c[a]=e==null?"":e;return}if(a==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=e;const f=e==null?"":e;(c.value!==f||c.tagName==="OPTION")&&(c.value=f),e==null&&c.removeAttribute(a);return}let t=!1;if(e===""||e==null){const f=typeof c[a];f==="boolean"?e=o7(e):e==null&&f==="string"?(e="",t=!0):f==="number"&&(e=0,t=!0)}try{c[a]=e}catch{}t&&c.removeAttribute(a)}const[rc,Dl]=(()=>{let c=Date.now,a=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(c=performance.now.bind(performance));const e=navigator.userAgent.match(/firefox\/(\d+)/i);a=!!(e&&Number(e[1])<=53)}return[c,a]})();let E6=0;const _l=Promise.resolve(),Ol=()=>{E6=0},Ul=()=>E6||(_l.then(Ol),E6=rc());function R1(c,a,e,s){c.addEventListener(a,e,s)}function Il(c,a,e,s){c.removeEventListener(a,e,s)}function ql(c,a,e,s,r=null){const i=c._vei||(c._vei={}),n=i[a];if(s&&n)n.value=s;else{const[t,f]=Wl(a);if(s){const o=i[a]=Gl(s,r);R1(c,t,o,f)}else n&&(Il(c,t,n,f),i[a]=void 0)}}const l5=/(?:Once|Passive|Capture)$/;function Wl(c){let a;if(l5.test(c)){a={};let s;for(;s=c.match(l5);)c=c.slice(0,c.length-s[0].length),a[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):w1(c.slice(2)),a]}function Gl(c,a){const e=s=>{const r=s.timeStamp||rc();(Dl||r>=e.attached-1)&&F2(jl(s,e.value),a,5,[s])};return e.value=c,e.attached=Ul(),e}function jl(c,a){if(F(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(s=>r=>!r._stopped&&s&&s(r))}else return a}const o5=/^on[a-z]/,$l=(c,a,e,s,r=!1,i,n,t,f)=>{a==="class"?Pl(c,s,r):a==="style"?Bl(c,e,s):v3(a)?Z6(a)||ql(c,a,e,s,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Kl(c,a,s,r))?Fl(c,a,s,i,n,t,f):(a==="true-value"?c._trueValue=s:a==="false-value"&&(c._falseValue=s),El(c,a,s,r))};function Kl(c,a,e,s){return s?!!(a==="innerHTML"||a==="textContent"||a in c&&o5.test(a)&&D(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||o5.test(a)&&r2(e)?!1:a in c}const m5=c=>{const a=c.props["onUpdate:modelValue"]||!1;return F(a)?e=>$4(a,e):a};function Xl(c){c.target.composing=!0}function u5(c){const a=c.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const ic={created(c,{modifiers:{lazy:a,trim:e,number:s}},r){c._assign=m5(r);const i=s||r.props&&r.props.type==="number";R1(c,a?"change":"input",n=>{if(n.target.composing)return;let t=c.value;e&&(t=t.trim()),i&&(t=C6(t)),c._assign(t)}),e&&R1(c,"change",()=>{c.value=c.value.trim()}),a||(R1(c,"compositionstart",Xl),R1(c,"compositionend",u5),R1(c,"change",u5))},mounted(c,{value:a}){c.value=a==null?"":a},beforeUpdate(c,{value:a,modifiers:{lazy:e,trim:s,number:r}},i){if(c._assign=m5(i),c.composing||document.activeElement===c&&c.type!=="range"&&(e||s&&c.value.trim()===a||(r||c.type==="number")&&C6(c.value)===a))return;const n=a==null?"":a;c.value!==n&&(c.value=n)}},Yl=["ctrl","shift","alt","meta"],Jl={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,a)=>Yl.some(e=>c[`${e}Key`]&&!a.includes(e))},nc=(c,a)=>(e,...s)=>{for(let r=0;r<a.length;r++){const i=Jl[a[r]];if(i&&i(e,a))return}return c(e,...s)},Ql={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Zl=(c,a)=>e=>{if(!("key"in e))return;const s=w1(e.key);if(a.some(r=>r===s||Ql[r]===s))return c(e)},co={beforeMount(c,{value:a},{transition:e}){c._vod=c.style.display==="none"?"":c.style.display,e&&a?e.beforeEnter(c):s4(c,a)},mounted(c,{value:a},{transition:e}){e&&a&&e.enter(c)},updated(c,{value:a,oldValue:e},{transition:s}){!a!=!e&&(s?a?(s.beforeEnter(c),s4(c,!0),s.enter(c)):s.leave(c,()=>{s4(c,!1)}):s4(c,a))},beforeUnmount(c,{value:a}){s4(c,a)}};function s4(c,a){c.style.display=a?c._vod:"none"}const ao=h2({patchProp:$l},Tl);let v5;function eo(){return v5||(v5=ul(ao))}const so=(...c)=>{const a=eo().createApp(...c),{mount:e}=a;return a.mount=s=>{const r=ro(s);if(!r)return;const i=a._component;!D(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const n=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),n},a};function ro(c){return r2(c)?document.querySelector(c):c}const M4=(c,a)=>{const e=c.__vccOpts||c;for(const[s,r]of a)e[s]=r;return e},io={props:{theme:{default:!0,type:Boolean}},emits:["theme-toggled"],data(){return{darkTheme:this.theme}},methods:{toggleTheme(){this.$emit("theme-toggled"),this.darkTheme=!this.darkTheme}}},no=c=>(E7("data-v-3cdb36e3"),c=c(),F7(),c),to={class:"header"},fo=no(()=>f2("h1",{class:"header__heading"},"To-Do App",-1));function lo(c,a,e,s,r,i){const n=E1("font-awesome-icon");return H2(),N2("header",to,[fo,r.darkTheme?(H2(),P6(n,{key:0,icon:"fa-solid fa-moon",class:"icon header__theme-toggle",onClick:i.toggleTheme},null,8,["onClick"])):(H2(),P6(n,{key:1,icon:"fa-solid fa-sun",class:"icon header__theme-toggle",onClick:i.toggleTheme},null,8,["onClick"]))])}const oo=M4(io,[["render",lo],["__scopeId","data-v-3cdb36e3"]]);const mo={emits:["added-item"],data(){return{todoTitle:""}},methods:{addItem(){this.todoTitle!==""&&(this.$emit("added-item",this.todoTitle),this.todoTitle="",this.$refs.todoTitleInput.focus())}},mounted(){this.$refs.todoTitleInput.focus()}},tc=c=>(E7("data-v-13b68ca1"),c=c(),F7(),c),uo=tc(()=>f2("h2",{class:"todo-form__heading"},[f2("label",{for:"new-todo-input"},"New Task")],-1)),vo=tc(()=>f2("button",{type:"submit",class:"todo-form__submit-button"},"Add",-1));function Ho(c,a,e,s,r,i){return H2(),N2("form",{onSubmit:a[1]||(a[1]=nc((...n)=>i.addItem&&i.addItem(...n),["prevent"])),class:"todo-form"},[uo,z8(f2("input",{name:"new-todo-input",id:"new-todo-input",ref:"todoTitleInput",class:"todo-form__input",autocomplete:"off","onUpdate:modelValue":a[0]||(a[0]=n=>r.todoTitle=n)},null,512),[[ic,r.todoTitle,void 0,{trim:!0}]]),vo],32)}const zo=M4(mo,[["render",Ho],["__scopeId","data-v-13b68ca1"]]);function ho(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var fc={exports:{}},d8={exports:{}},lc=function(a,e){return function(){for(var r=new Array(arguments.length),i=0;i<r.length;i++)r[i]=arguments[i];return a.apply(e,r)}},po=lc,M8=Object.prototype.toString,C8=function(c){return function(a){var e=M8.call(a);return c[e]||(c[e]=e.slice(8,-1).toLowerCase())}}(Object.create(null));function y1(c){return c=c.toLowerCase(),function(e){return C8(e)===c}}function L8(c){return Array.isArray(c)}function t3(c){return typeof c>"u"}function Vo(c){return c!==null&&!t3(c)&&c.constructor!==null&&!t3(c.constructor)&&typeof c.constructor.isBuffer=="function"&&c.constructor.isBuffer(c)}var oc=y1("ArrayBuffer");function Mo(c){var a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(c):a=c&&c.buffer&&oc(c.buffer),a}function Co(c){return typeof c=="string"}function Lo(c){return typeof c=="number"}function mc(c){return c!==null&&typeof c=="object"}function J4(c){if(C8(c)!=="object")return!1;var a=Object.getPrototypeOf(c);return a===null||a===Object.prototype}var go=y1("Date"),xo=y1("File"),bo=y1("Blob"),So=y1("FileList");function g8(c){return M8.call(c)==="[object Function]"}function No(c){return mc(c)&&g8(c.pipe)}function wo(c){var a="[object FormData]";return c&&(typeof FormData=="function"&&c instanceof FormData||M8.call(c)===a||g8(c.toString)&&c.toString()===a)}var yo=y1("URLSearchParams");function ko(c){return c.trim?c.trim():c.replace(/^\s+|\s+$/g,"")}function Ao(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function x8(c,a){if(!(c===null||typeof c>"u"))if(typeof c!="object"&&(c=[c]),L8(c))for(var e=0,s=c.length;e<s;e++)a.call(null,c[e],e,c);else for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&a.call(null,c[r],r,c)}function F6(){var c={};function a(r,i){J4(c[i])&&J4(r)?c[i]=F6(c[i],r):J4(r)?c[i]=F6({},r):L8(r)?c[i]=r.slice():c[i]=r}for(var e=0,s=arguments.length;e<s;e++)x8(arguments[e],a);return c}function To(c,a,e){return x8(a,function(r,i){e&&typeof r=="function"?c[i]=po(r,e):c[i]=r}),c}function Po(c){return c.charCodeAt(0)===65279&&(c=c.slice(1)),c}function Bo(c,a,e,s){c.prototype=Object.create(a.prototype,s),c.prototype.constructor=c,e&&Object.assign(c.prototype,e)}function Ro(c,a,e){var s,r,i,n={};a=a||{};do{for(s=Object.getOwnPropertyNames(c),r=s.length;r-- >0;)i=s[r],n[i]||(a[i]=c[i],n[i]=!0);c=Object.getPrototypeOf(c)}while(c&&(!e||e(c,a))&&c!==Object.prototype);return a}function Eo(c,a,e){c=String(c),(e===void 0||e>c.length)&&(e=c.length),e-=a.length;var s=c.indexOf(a,e);return s!==-1&&s===e}function Fo(c){if(!c)return null;var a=c.length;if(t3(a))return null;for(var e=new Array(a);a-- >0;)e[a]=c[a];return e}var Do=function(c){return function(a){return c&&a instanceof c}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),o2={isArray:L8,isArrayBuffer:oc,isBuffer:Vo,isFormData:wo,isArrayBufferView:Mo,isString:Co,isNumber:Lo,isObject:mc,isPlainObject:J4,isUndefined:t3,isDate:go,isFile:xo,isBlob:bo,isFunction:g8,isStream:No,isURLSearchParams:yo,isStandardBrowserEnv:Ao,forEach:x8,merge:F6,extend:To,trim:ko,stripBOM:Po,inherits:Bo,toFlatObject:Ro,kindOf:C8,kindOfTest:y1,endsWith:Eo,toArray:Fo,isTypedArray:Do,isFileList:So},P1=o2;function H5(c){return encodeURIComponent(c).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var uc=function(a,e,s){if(!e)return a;var r;if(s)r=s(e);else if(P1.isURLSearchParams(e))r=e.toString();else{var i=[];P1.forEach(e,function(f,o){f===null||typeof f>"u"||(P1.isArray(f)?o=o+"[]":f=[f],P1.forEach(f,function(v){P1.isDate(v)?v=v.toISOString():P1.isObject(v)&&(v=JSON.stringify(v)),i.push(H5(o)+"="+H5(v))}))}),r=i.join("&")}if(r){var n=a.indexOf("#");n!==-1&&(a=a.slice(0,n)),a+=(a.indexOf("?")===-1?"?":"&")+r}return a},_o=o2;function x3(){this.handlers=[]}x3.prototype.use=function(a,e,s){return this.handlers.push({fulfilled:a,rejected:e,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};x3.prototype.eject=function(a){this.handlers[a]&&(this.handlers[a]=null)};x3.prototype.forEach=function(a){_o.forEach(this.handlers,function(s){s!==null&&a(s)})};var Oo=x3,Uo=o2,Io=function(a,e){Uo.forEach(a,function(r,i){i!==e&&i.toUpperCase()===e.toUpperCase()&&(a[e]=r,delete a[i])})},vc=o2;function j1(c,a,e,s,r){Error.call(this),this.message=c,this.name="AxiosError",a&&(this.code=a),e&&(this.config=e),s&&(this.request=s),r&&(this.response=r)}vc.inherits(j1,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Hc=j1.prototype,zc={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(c){zc[c]={value:c}});Object.defineProperties(j1,zc);Object.defineProperty(Hc,"isAxiosError",{value:!0});j1.from=function(c,a,e,s,r,i){var n=Object.create(Hc);return vc.toFlatObject(c,n,function(f){return f!==Error.prototype}),j1.call(n,c.message,a,e,s,r),n.name=c.name,i&&Object.assign(n,i),n};var J1=j1,hc={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},k2=o2;function qo(c,a){a=a||new FormData;var e=[];function s(i){return i===null?"":k2.isDate(i)?i.toISOString():k2.isArrayBuffer(i)||k2.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function r(i,n){if(k2.isPlainObject(i)||k2.isArray(i)){if(e.indexOf(i)!==-1)throw Error("Circular reference detected in "+n);e.push(i),k2.forEach(i,function(f,o){if(!k2.isUndefined(f)){var m=n?n+"."+o:o,v;if(f&&!n&&typeof f=="object"){if(k2.endsWith(o,"{}"))f=JSON.stringify(f);else if(k2.endsWith(o,"[]")&&(v=k2.toArray(f))){v.forEach(function(H){!k2.isUndefined(H)&&a.append(m,s(H))});return}}r(f,m)}}),e.pop()}else a.append(n,s(i))}return r(c),a}var pc=qo,a6,z5;function Wo(){if(z5)return a6;z5=1;var c=J1;return a6=function(e,s,r){var i=r.config.validateStatus;!r.status||!i||i(r.status)?e(r):s(new c("Request failed with status code "+r.status,[c.ERR_BAD_REQUEST,c.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))},a6}var e6,h5;function Go(){if(h5)return e6;h5=1;var c=o2;return e6=c.isStandardBrowserEnv()?function(){return{write:function(s,r,i,n,t,f){var o=[];o.push(s+"="+encodeURIComponent(r)),c.isNumber(i)&&o.push("expires="+new Date(i).toGMTString()),c.isString(n)&&o.push("path="+n),c.isString(t)&&o.push("domain="+t),f===!0&&o.push("secure"),document.cookie=o.join("; ")},read:function(s){var r=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(s){this.write(s,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),e6}var jo=function(a){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)},$o=function(a,e){return e?a.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):a},Ko=jo,Xo=$o,Vc=function(a,e){return a&&!Ko(e)?Xo(a,e):e},s6,p5;function Yo(){if(p5)return s6;p5=1;var c=o2,a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return s6=function(s){var r={},i,n,t;return s&&c.forEach(s.split(`
`),function(o){if(t=o.indexOf(":"),i=c.trim(o.substr(0,t)).toLowerCase(),n=c.trim(o.substr(t+1)),i){if(r[i]&&a.indexOf(i)>=0)return;i==="set-cookie"?r[i]=(r[i]?r[i]:[]).concat([n]):r[i]=r[i]?r[i]+", "+n:n}}),r},s6}var r6,V5;function Jo(){if(V5)return r6;V5=1;var c=o2;return r6=c.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a"),r;function i(n){var t=n;return e&&(s.setAttribute("href",t),t=s.href),s.setAttribute("href",t),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:s.pathname.charAt(0)==="/"?s.pathname:"/"+s.pathname}}return r=i(window.location.href),function(t){var f=c.isString(t)?i(t):t;return f.protocol===r.protocol&&f.host===r.host}}():function(){return function(){return!0}}(),r6}var i6,d5;function b3(){if(d5)return i6;d5=1;var c=J1,a=o2;function e(s){c.call(this,s==null?"canceled":s,c.ERR_CANCELED),this.name="CanceledError"}return a.inherits(e,c,{__CANCEL__:!0}),i6=e,i6}var n6,M5;function Qo(){return M5||(M5=1,n6=function(a){var e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return e&&e[1]||""}),n6}var t6,C5;function L5(){if(C5)return t6;C5=1;var c=o2,a=Wo(),e=Go(),s=uc,r=Vc,i=Yo(),n=Jo(),t=hc,f=J1,o=b3(),m=Qo();return t6=function(H){return new Promise(function(B,E){var k=H.data,d=H.headers,S=H.responseType,P;function _(){H.cancelToken&&H.cancelToken.unsubscribe(P),H.signal&&H.signal.removeEventListener("abort",P)}c.isFormData(k)&&c.isStandardBrowserEnv()&&delete d["Content-Type"];var b=new XMLHttpRequest;if(H.auth){var m2=H.auth.username||"",i2=H.auth.password?unescape(encodeURIComponent(H.auth.password)):"";d.Authorization="Basic "+btoa(m2+":"+i2)}var x2=r(H.baseURL,H.url);b.open(H.method.toUpperCase(),s(x2,H.params,H.paramsSerializer),!0),b.timeout=H.timeout;function Z(){if(!!b){var n2="getAllResponseHeaders"in b?i(b.getAllResponseHeaders()):null,w2=!S||S==="text"||S==="json"?b.responseText:b.response,O2={data:w2,status:b.status,statusText:b.statusText,headers:n2,config:H,request:b};a(function(e2){B(e2),_()},function(e2){E(e2),_()},O2),b=null}}if("onloadend"in b?b.onloadend=Z:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(Z)},b.onabort=function(){!b||(E(new f("Request aborted",f.ECONNABORTED,H,b)),b=null)},b.onerror=function(){E(new f("Network Error",f.ERR_NETWORK,H,b,b)),b=null},b.ontimeout=function(){var w2=H.timeout?"timeout of "+H.timeout+"ms exceeded":"timeout exceeded",O2=H.transitional||t;H.timeoutErrorMessage&&(w2=H.timeoutErrorMessage),E(new f(w2,O2.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,H,b)),b=null},c.isStandardBrowserEnv()){var D2=(H.withCredentials||n(x2))&&H.xsrfCookieName?e.read(H.xsrfCookieName):void 0;D2&&(d[H.xsrfHeaderName]=D2)}"setRequestHeader"in b&&c.forEach(d,function(w2,O2){typeof k>"u"&&O2.toLowerCase()==="content-type"?delete d[O2]:b.setRequestHeader(O2,w2)}),c.isUndefined(H.withCredentials)||(b.withCredentials=!!H.withCredentials),S&&S!=="json"&&(b.responseType=H.responseType),typeof H.onDownloadProgress=="function"&&b.addEventListener("progress",H.onDownloadProgress),typeof H.onUploadProgress=="function"&&b.upload&&b.upload.addEventListener("progress",H.onUploadProgress),(H.cancelToken||H.signal)&&(P=function(n2){!b||(E(!n2||n2&&n2.type?new o:n2),b.abort(),b=null)},H.cancelToken&&H.cancelToken.subscribe(P),H.signal&&(H.signal.aborted?P():H.signal.addEventListener("abort",P))),k||(k=null);var _2=m(x2);if(_2&&["http","https","file"].indexOf(_2)===-1){E(new f("Unsupported protocol "+_2+":",f.ERR_BAD_REQUEST,H));return}b.send(k)})},t6}var f6,g5;function Zo(){return g5||(g5=1,f6=null),f6}var s2=o2,x5=Io,b5=J1,cm=hc,am=pc,em={"Content-Type":"application/x-www-form-urlencoded"};function S5(c,a){!s2.isUndefined(c)&&s2.isUndefined(c["Content-Type"])&&(c["Content-Type"]=a)}function sm(){var c;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(c=L5()),c}function rm(c,a,e){if(s2.isString(c))try{return(a||JSON.parse)(c),s2.trim(c)}catch(s){if(s.name!=="SyntaxError")throw s}return(e||JSON.stringify)(c)}var S3={transitional:cm,adapter:sm(),transformRequest:[function(a,e){if(x5(e,"Accept"),x5(e,"Content-Type"),s2.isFormData(a)||s2.isArrayBuffer(a)||s2.isBuffer(a)||s2.isStream(a)||s2.isFile(a)||s2.isBlob(a))return a;if(s2.isArrayBufferView(a))return a.buffer;if(s2.isURLSearchParams(a))return S5(e,"application/x-www-form-urlencoded;charset=utf-8"),a.toString();var s=s2.isObject(a),r=e&&e["Content-Type"],i;if((i=s2.isFileList(a))||s&&r==="multipart/form-data"){var n=this.env&&this.env.FormData;return am(i?{"files[]":a}:a,n&&new n)}else if(s||r==="application/json")return S5(e,"application/json"),rm(a);return a}],transformResponse:[function(a){var e=this.transitional||S3.transitional,s=e&&e.silentJSONParsing,r=e&&e.forcedJSONParsing,i=!s&&this.responseType==="json";if(i||r&&s2.isString(a)&&a.length)try{return JSON.parse(a)}catch(n){if(i)throw n.name==="SyntaxError"?b5.from(n,b5.ERR_BAD_RESPONSE,this,null,this.response):n}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Zo()},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};s2.forEach(["delete","get","head"],function(a){S3.headers[a]={}});s2.forEach(["post","put","patch"],function(a){S3.headers[a]=s2.merge(em)});var b8=S3,im=o2,nm=b8,tm=function(a,e,s){var r=this||nm;return im.forEach(s,function(n){a=n.call(r,a,e)}),a},l6,N5;function dc(){return N5||(N5=1,l6=function(a){return!!(a&&a.__CANCEL__)}),l6}var w5=o2,o6=tm,fm=dc(),lm=b8,om=b3();function m6(c){if(c.cancelToken&&c.cancelToken.throwIfRequested(),c.signal&&c.signal.aborted)throw new om}var mm=function(a){m6(a),a.headers=a.headers||{},a.data=o6.call(a,a.data,a.headers,a.transformRequest),a.headers=w5.merge(a.headers.common||{},a.headers[a.method]||{},a.headers),w5.forEach(["delete","get","head","post","put","patch","common"],function(r){delete a.headers[r]});var e=a.adapter||lm.adapter;return e(a).then(function(r){return m6(a),r.data=o6.call(a,r.data,r.headers,a.transformResponse),r},function(r){return fm(r)||(m6(a),r&&r.response&&(r.response.data=o6.call(a,r.response.data,r.response.headers,a.transformResponse))),Promise.reject(r)})},C2=o2,Mc=function(a,e){e=e||{};var s={};function r(m,v){return C2.isPlainObject(m)&&C2.isPlainObject(v)?C2.merge(m,v):C2.isPlainObject(v)?C2.merge({},v):C2.isArray(v)?v.slice():v}function i(m){if(C2.isUndefined(e[m])){if(!C2.isUndefined(a[m]))return r(void 0,a[m])}else return r(a[m],e[m])}function n(m){if(!C2.isUndefined(e[m]))return r(void 0,e[m])}function t(m){if(C2.isUndefined(e[m])){if(!C2.isUndefined(a[m]))return r(void 0,a[m])}else return r(void 0,e[m])}function f(m){if(m in e)return r(a[m],e[m]);if(m in a)return r(void 0,a[m])}var o={url:n,method:n,data:n,baseURL:t,transformRequest:t,transformResponse:t,paramsSerializer:t,timeout:t,timeoutMessage:t,withCredentials:t,adapter:t,responseType:t,xsrfCookieName:t,xsrfHeaderName:t,onUploadProgress:t,onDownloadProgress:t,decompress:t,maxContentLength:t,maxBodyLength:t,beforeRedirect:t,transport:t,httpAgent:t,httpsAgent:t,cancelToken:t,socketPath:t,responseEncoding:t,validateStatus:f};return C2.forEach(Object.keys(a).concat(Object.keys(e)),function(v){var H=o[v]||i,M=H(v);C2.isUndefined(M)&&H!==f||(s[v]=M)}),s},u6,y5;function Cc(){return y5||(y5=1,u6={version:"0.27.2"}),u6}var um=Cc().version,f1=J1,S8={};["object","boolean","number","function","string","symbol"].forEach(function(c,a){S8[c]=function(s){return typeof s===c||"a"+(a<1?"n ":" ")+c}});var k5={};S8.transitional=function(a,e,s){function r(i,n){return"[Axios v"+um+"] Transitional option '"+i+"'"+n+(s?". "+s:"")}return function(i,n,t){if(a===!1)throw new f1(r(n," has been removed"+(e?" in "+e:"")),f1.ERR_DEPRECATED);return e&&!k5[n]&&(k5[n]=!0,console.warn(r(n," has been deprecated since v"+e+" and will be removed in the near future"))),a?a(i,n,t):!0}};function vm(c,a,e){if(typeof c!="object")throw new f1("options must be an object",f1.ERR_BAD_OPTION_VALUE);for(var s=Object.keys(c),r=s.length;r-- >0;){var i=s[r],n=a[i];if(n){var t=c[i],f=t===void 0||n(t,i,c);if(f!==!0)throw new f1("option "+i+" must be "+f,f1.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new f1("Unknown option "+i,f1.ERR_BAD_OPTION)}}var Hm={assertOptions:vm,validators:S8},Lc=o2,zm=uc,A5=Oo,T5=mm,N3=Mc,hm=Vc,gc=Hm,B1=gc.validators;function $1(c){this.defaults=c,this.interceptors={request:new A5,response:new A5}}$1.prototype.request=function(a,e){typeof a=="string"?(e=e||{},e.url=a):e=a||{},e=N3(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var s=e.transitional;s!==void 0&&gc.assertOptions(s,{silentJSONParsing:B1.transitional(B1.boolean),forcedJSONParsing:B1.transitional(B1.boolean),clarifyTimeoutError:B1.transitional(B1.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach(function(M){typeof M.runWhen=="function"&&M.runWhen(e)===!1||(i=i&&M.synchronous,r.unshift(M.fulfilled,M.rejected))});var n=[];this.interceptors.response.forEach(function(M){n.push(M.fulfilled,M.rejected)});var t;if(!i){var f=[T5,void 0];for(Array.prototype.unshift.apply(f,r),f=f.concat(n),t=Promise.resolve(e);f.length;)t=t.then(f.shift(),f.shift());return t}for(var o=e;r.length;){var m=r.shift(),v=r.shift();try{o=m(o)}catch(H){v(H);break}}try{t=T5(o)}catch(H){return Promise.reject(H)}for(;n.length;)t=t.then(n.shift(),n.shift());return t};$1.prototype.getUri=function(a){a=N3(this.defaults,a);var e=hm(a.baseURL,a.url);return zm(e,a.params,a.paramsSerializer)};Lc.forEach(["delete","get","head","options"],function(a){$1.prototype[a]=function(e,s){return this.request(N3(s||{},{method:a,url:e,data:(s||{}).data}))}});Lc.forEach(["post","put","patch"],function(a){function e(s){return function(i,n,t){return this.request(N3(t||{},{method:a,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:n}))}}$1.prototype[a]=e(),$1.prototype[a+"Form"]=e(!0)});var pm=$1,v6,P5;function Vm(){if(P5)return v6;P5=1;var c=b3();function a(e){if(typeof e!="function")throw new TypeError("executor must be a function.");var s;this.promise=new Promise(function(n){s=n});var r=this;this.promise.then(function(i){if(!!r._listeners){var n,t=r._listeners.length;for(n=0;n<t;n++)r._listeners[n](i);r._listeners=null}}),this.promise.then=function(i){var n,t=new Promise(function(f){r.subscribe(f),n=f}).then(i);return t.cancel=function(){r.unsubscribe(n)},t},e(function(n){r.reason||(r.reason=new c(n),s(r.reason))})}return a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.prototype.subscribe=function(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]},a.prototype.unsubscribe=function(s){if(!!this._listeners){var r=this._listeners.indexOf(s);r!==-1&&this._listeners.splice(r,1)}},a.source=function(){var s,r=new a(function(n){s=n});return{token:r,cancel:s}},v6=a,v6}var H6,B5;function dm(){return B5||(B5=1,H6=function(a){return function(s){return a.apply(null,s)}}),H6}var z6,R5;function Mm(){if(R5)return z6;R5=1;var c=o2;return z6=function(e){return c.isObject(e)&&e.isAxiosError===!0},z6}var E5=o2,Cm=lc,Q4=pm,Lm=Mc,gm=b8;function xc(c){var a=new Q4(c),e=Cm(Q4.prototype.request,a);return E5.extend(e,Q4.prototype,a),E5.extend(e,a),e.create=function(r){return xc(Lm(c,r))},e}var d2=xc(gm);d2.Axios=Q4;d2.CanceledError=b3();d2.CancelToken=Vm();d2.isCancel=dc();d2.VERSION=Cc().version;d2.toFormData=pc;d2.AxiosError=J1;d2.Cancel=d2.CanceledError;d2.all=function(a){return Promise.all(a)};d2.spread=dm();d2.isAxiosError=Mm();d8.exports=d2;d8.exports.default=d2;(function(c){c.exports=d8.exports})(fc);const xm=ho(fc.exports);const bm={props:{isEmpty:{required:!0,type:Boolean},displayedTab:{required:!0,type:String},numberOfActiveTodos:{required:!0,type:Number},numberOfCompletedTodos:{required:!0,type:Number}},emits:["data-fetched","list-cleared","checked-all","unchecked-all","show-all","show-active","show-completed"],methods:{fetchData(){xm.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(c=>this.$emit("data-fetched",c.data)).catch(c=>console.log(`Error: ${c}`))}},computed:{isAllTab(){return this.displayedTab==="all"},isActiveTab(){return this.displayedTab==="active"},isCompletedTab(){return this.displayedTab==="completed"}}},Sm={key:0,class:"controls"},Nm={key:1,class:"controls"},wm={class:"tabs"};function ym(c,a,e,s,r,i){return H2(),N2(b2,null,[e.isEmpty?(H2(),N2("div",Sm,[f2("button",{type:"button",class:"btn btn--generate",onClick:a[0]||(a[0]=(...n)=>i.fetchData&&i.fetchData(...n))}," Generate Data ")])):(H2(),N2("div",Nm,[f2("button",{type:"button",class:"btn btn--delete",onClick:a[1]||(a[1]=n=>c.$emit("list-cleared"))}," Clear All "),f2("button",{type:"button",class:"btn btn--check",[l1(e.numberOfActiveTodos&&"click")]:a[2]||(a[2]=n=>c.$emit("checked-all"))}," Check All ",16),f2("button",{type:"button",class:"btn btn--uncheck",[l1(e.numberOfCompletedTodos&&"click")]:a[3]||(a[3]=n=>c.$emit("unchecked-all"))}," Uncheck All ",16)])),z8(f2("div",wm,[f2("span",{class:j2(["tabs__tab",{"tabs__tab--selected":i.isAllTab}]),[l1(!i.isAllTab&&"click")]:a[4]||(a[4]=n=>c.$emit("show-all"))}," All ("+G4(e.numberOfActiveTodos+e.numberOfCompletedTodos)+") ",17),f2("span",{class:j2(["tabs__tab",{"tabs__tab--selected":i.isActiveTab}]),[l1(!i.isActiveTab&&"click")]:a[5]||(a[5]=n=>c.$emit("show-active"))},"Active ("+G4(e.numberOfActiveTodos)+") ",17),f2("span",{class:j2(["tabs__tab",{"tabs__tab--selected":i.isCompletedTab}]),[l1(!i.isCompletedTab&&"click")]:a[6]||(a[6]=n=>c.$emit("show-completed"))},"Completed ("+G4(e.numberOfCompletedTodos)+") ",17)],512),[[co,!e.isEmpty]])],64)}const km=M4(bm,[["render",ym],["__scopeId","data-v-be7b5ea3"]]);const Am={props:{title:{required:!0,type:String},completed:{default:!1,type:Boolean},id:{required:!0,type:String}},emits:["checkbox-toggled","item-edited","item-removed"],data(){return{modifiedTitle:this.title,isEditing:!1}},computed:{isCompleted(){return this.completed}},methods:{toggleCheckbox(c){this.$emit("checkbox-toggled",c)},editItem(){this.isEditing=!0,this.$nextTick(()=>this.$refs.labelEditingInput.focus())},saveEdit(){this.modifiedTitle&&(this.$emit("item-edited",this.modifiedTitle),this.isEditing=!1)},cancelEdit(){this.isEditing=!1},removeItem(){this.$emit("item-removed")}}},Tm=["id","checked"],Pm=["for"],Bm={key:2,class:"todo-item__control-buttons"},Rm={key:3,class:"todo-item__control-buttons"};function Em(c,a,e,s,r,i){const n=E1("font-awesome-icon");return H2(),N2("li",{class:j2(["todo-item",{"todo-item--completed":i.isCompleted}]),draggable:"true"},[f2("input",{name:"todo-status",type:"checkbox",class:j2(["todo-item__checkbox",{fade:i.isCompleted}]),id:e.id,checked:i.isCompleted,onClick:a[0]||(a[0]=(...t)=>i.toggleCheckbox&&i.toggleCheckbox(...t)),onKeyup:a[1]||(a[1]=nc((...t)=>i.toggleCheckbox&&i.toggleCheckbox(...t),["shift"]))},null,42,Tm),r.isEditing?z8((H2(),N2("input",{key:1,name:"todo-title",class:j2(["todo-item__editing-input",{fade:i.isCompleted}]),ref:"labelEditingInput",autocomplete:"off","onUpdate:modelValue":a[2]||(a[2]=t=>r.modifiedTitle=t),onKeydown:a[3]||(a[3]=Zl((...t)=>i.saveEdit&&i.saveEdit(...t),["enter"]))},null,34)),[[ic,r.modifiedTitle,void 0,{trim:!0}]]):(H2(),N2("label",{key:0,for:e.id,class:j2(["todo-item__title",{fade:i.isCompleted}])},G4(e.title),11,Pm)),r.isEditing?(H2(),N2("div",Rm,[c2(n,{icon:"fa-solid fa-check",class:"icon",onClick:i.saveEdit},null,8,["onClick"]),c2(n,{icon:"fa-solid fa-xmark",class:"icon",onClick:i.cancelEdit},null,8,["onClick"])])):(H2(),N2("div",Bm,[c2(n,{icon:"fa-solid fa-pen",class:"icon",onClick:i.editItem},null,8,["onClick"]),c2(n,{icon:"fa-solid fa-trash",class:"icon",onClick:i.removeItem},null,8,["onClick"])]))],2)}const Fm=M4(Am,[["render",Em],["__scopeId","data-v-366d5025"]]);var R4,Dm=new Uint8Array(16);function _m(){if(!R4&&(R4=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!R4))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return R4(Dm)}const Om=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Um(c){return typeof c=="string"&&Om.test(c)}var t2=[];for(var h6=0;h6<256;++h6)t2.push((h6+256).toString(16).substr(1));function Im(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=(t2[c[a+0]]+t2[c[a+1]]+t2[c[a+2]]+t2[c[a+3]]+"-"+t2[c[a+4]]+t2[c[a+5]]+"-"+t2[c[a+6]]+t2[c[a+7]]+"-"+t2[c[a+8]]+t2[c[a+9]]+"-"+t2[c[a+10]]+t2[c[a+11]]+t2[c[a+12]]+t2[c[a+13]]+t2[c[a+14]]+t2[c[a+15]]).toLowerCase();if(!Um(e))throw TypeError("Stringified UUID is invalid");return e}function qm(c,a,e){c=c||{};var s=c.random||(c.rng||_m)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,a){e=e||0;for(var r=0;r<16;++r)a[e+r]=s[r];return a}return Im(s)}const Wm={components:{TodoHeader:oo,TodoPanel:zo,ControlButtons:km,TodoItem:Fm},data(){var c,a;return{todoItems:(c=JSON.parse(localStorage.getItem("todo-items")))!=null?c:[],previouslyToggled:"",tab:localStorage.getItem("tab")||"all",darkTheme:(a=JSON.parse(localStorage.getItem("theme")))!=null?a:!0}},computed:{activeTodos(){return this.todoItems.filter(c=>!c.completed)},completedTodos(){return this.todoItems.filter(c=>c.completed)},filteredTodos(){return this.tab==="active"?this.activeTodos:this.tab==="completed"?this.completedTodos:this.todoItems}},watch:{todoItems:{handler(){localStorage.setItem("todo-items",JSON.stringify(this.todoItems))},deep:!0},activeTodos:{handler(){localStorage.setItem("active-todos",JSON.stringify(this.activeTodos))},deep:!0},completedTodos:{handler(){localStorage.setItem("completed-todos",JSON.stringify(this.completedTodos))},deep:!0},tab(){localStorage.setItem("tab",this.tab)},darkTheme(){localStorage.setItem("theme",JSON.stringify(this.darkTheme))}},methods:{addItem(c){const a={title:c,completed:!1,id:qm()};this.todoItems.unshift(a)},updateCompletedStatus(c,a){if(a.type==="keyup"&&a.key!==" ")return;a.type==="keyup"&&a.key===" "&&a.preventDefault();const e=this.todoItems.find(s=>s.id===c);if(e.completed=!e.completed,a.shiftKey&&this.previouslyToggled){const s=this.todoItems.indexOf(e),r=this.todoItems.findIndex(t=>t.id===this.previouslyToggled),[i,n]=[Math.min(s,r),Math.max(s,r)];for(let t=i;t<=n;t++)this.todoItems[t].completed=e.completed}this.previouslyToggled=c},removeItem(c){const a=this.todoItems.findIndex(e=>e.id===c);this.todoItems.splice(a,1)},editItem(c,a){const e=this.todoItems.find(s=>s.id===c);e.title=a},clearAll(){this.todoItems=[],this.tab="all"},checkAll(){this.activeTodos.forEach(c=>c.completed=!0)},uncheckAll(){this.completedTodos.forEach(c=>c.completed=!1)},changeTheme(){this.darkTheme=!this.darkTheme,document.body.classList.toggle("dark-theme")},onDragStart(c){c.dataTransfer.dropEffect="move",c.dataTransfer.effectAllowed="move",c.dataTransfer.setData("item-id",c.target.children[0].id)},onDrag(c){c.preventDefault();const a=document.querySelector("ul"),e=Array.from(a.children),s=document.querySelector(`input[id="${c.dataTransfer.getData("item-id")}"]`).closest("li"),r=e.reduce((i,n)=>{const t=n.getBoundingClientRect(),f=c.y-(t.top+t.height/2);return f<0&&f>i.offset?{offset:f,element:n}:i},{offset:Number.NEGATIVE_INFINITY}).element;r?r.before(s):a.append(s)},onDrop(c){c.preventDefault(),Array.from(document.querySelector("ul").children).forEach((e,s)=>{const r=e.children[0],i=e.children[1];this.filteredTodos[s].completed=r.checked,this.filteredTodos[s].id=r.id,this.filteredTodos[s].title=i.textContent})}},mounted(){this.darkTheme&&document.body.classList.add("dark-theme"),window.addEventListener("dragover",this.onDrag),window.addEventListener("drop",this.onDrop)}};function Gm(c,a,e,s,r,i){var m;const n=E1("TodoHeader"),t=E1("TodoPanel"),f=E1("ControlButtons"),o=E1("TodoItem");return H2(),N2(b2,null,[c2(n,{onThemeToggled:i.changeTheme,theme:r.darkTheme},null,8,["onThemeToggled","theme"]),c2(t,{onAddedItem:i.addItem},null,8,["onAddedItem"]),c2(f,{isEmpty:((m=r.todoItems)==null?void 0:m.length)===0,displayedTab:r.tab,numberOfActiveTodos:i.activeTodos.length,numberOfCompletedTodos:i.completedTodos.length,onListCleared:i.clearAll,onCheckedAll:i.checkAll,onUncheckedAll:i.uncheckAll,onDataFetched:a[0]||(a[0]=v=>r.todoItems=v),onShowAll:a[1]||(a[1]=v=>r.tab="all"),onShowActive:a[2]||(a[2]=v=>r.tab="active"),onShowCompleted:a[3]||(a[3]=v=>r.tab="completed")},null,8,["isEmpty","displayedTab","numberOfActiveTodos","numberOfCompletedTodos","onListCleared","onCheckedAll","onUncheckedAll"]),f2("ul",null,[(H2(!0),N2(b2,null,Qf(i.filteredTodos,v=>(H2(),P6(o,{key:v.id,title:v.title,completed:v.completed,id:String(v.id),onCheckboxToggled:H=>i.updateCompletedStatus(v.id,H),onItemEdited:H=>i.editItem(v.id,H),onItemRemoved:H=>i.removeItem(v.id),onDragstart:i.onDragStart},null,8,["title","completed","id","onCheckboxToggled","onItemEdited","onItemRemoved","onDragstart"]))),128))])],64)}const jm=M4(Wm,[["render",Gm]]);function F5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function N(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?F5(Object(e),!0).forEach(function(s){a2(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):F5(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function f3(c){return f3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},f3(c)}function $m(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function D5(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function Km(c,a,e){return a&&D5(c.prototype,a),e&&D5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function a2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function N8(c,a){return Ym(c)||Qm(c,a)||bc(c,a)||cu()}function C4(c){return Xm(c)||Jm(c)||bc(c)||Zm()}function Xm(c){if(Array.isArray(c))return D6(c)}function Ym(c){if(Array.isArray(c))return c}function Jm(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Qm(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,i=!1,n,t;try{for(e=e.call(c);!(r=(n=e.next()).done)&&(s.push(n.value),!(a&&s.length===a));r=!0);}catch(f){i=!0,t=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw t}}return s}}function bc(c,a){if(!!c){if(typeof c=="string")return D6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return D6(c,a)}}function D6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function Zm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _5=function(){},w8={},Sc={},Nc=null,wc={mark:_5,measure:_5};try{typeof window<"u"&&(w8=window),typeof document<"u"&&(Sc=document),typeof MutationObserver<"u"&&(Nc=MutationObserver),typeof performance<"u"&&(wc=performance)}catch{}var au=w8.navigator||{},O5=au.userAgent,U5=O5===void 0?"":O5,v1=w8,X=Sc,I5=Nc,E4=wc;v1.document;var s1=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",yc=~U5.indexOf("MSIE")||~U5.indexOf("Trident/"),F4,D4,_4,O4,U4,Z2="___FONT_AWESOME___",_6=16,kc="fa",Ac="svg-inline--fa",S1="data-fa-i2svg",O6="data-fa-pseudo-element",eu="data-fa-pseudo-element-pending",y8="data-prefix",k8="data-icon",q5="fontawesome-i2svg",su="async",ru=["HTML","HEAD","STYLE","SCRIPT"],Tc=function(){try{return!0}catch{return!1}}(),K="classic",Q="sharp",A8=[K,Q];function L4(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[K]}})}var z4=L4((F4={},a2(F4,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),a2(F4,Q,{fa:"solid",fass:"solid","fa-solid":"solid"}),F4)),h4=L4((D4={},a2(D4,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),a2(D4,Q,{solid:"fass"}),D4)),p4=L4((_4={},a2(_4,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),a2(_4,Q,{fass:"fa-solid"}),_4)),iu=L4((O4={},a2(O4,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),a2(O4,Q,{"fa-solid":"fass"}),O4)),nu=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Pc="fa-layers-text",tu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,fu=L4((U4={},a2(U4,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),a2(U4,Q,{900:"fass"}),U4)),Bc=[1,2,3,4,5,6,7,8,9,10],lu=Bc.concat([11,12,13,14,15,16,17,18,19,20]),ou=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],L1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},V4=new Set;Object.keys(h4[K]).map(V4.add.bind(V4));Object.keys(h4[Q]).map(V4.add.bind(V4));var mu=[].concat(A8,C4(V4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",L1.GROUP,L1.SWAP_OPACITY,L1.PRIMARY,L1.SECONDARY]).concat(Bc.map(function(c){return"".concat(c,"x")})).concat(lu.map(function(c){return"w-".concat(c)})),t4=v1.FontAwesomeConfig||{};function uu(c){var a=X.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function vu(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(X&&typeof X.querySelector=="function"){var Hu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Hu.forEach(function(c){var a=N8(c,2),e=a[0],s=a[1],r=vu(uu(e));r!=null&&(t4[s]=r)})}var Rc={styleDefault:"solid",familyDefault:"classic",cssPrefix:kc,replacementClass:Ac,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};t4.familyPrefix&&(t4.cssPrefix=t4.familyPrefix);var K1=N(N({},Rc),t4);K1.autoReplaceSvg||(K1.observeMutations=!1);var y={};Object.keys(Rc).forEach(function(c){Object.defineProperty(y,c,{enumerable:!0,set:function(e){K1[c]=e,f4.forEach(function(s){return s(y)})},get:function(){return K1[c]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(a){K1.cssPrefix=a,f4.forEach(function(e){return e(y)})},get:function(){return K1.cssPrefix}});v1.FontAwesomeConfig=y;var f4=[];function zu(c){return f4.push(c),function(){f4.splice(f4.indexOf(c),1)}}var n1=_6,$2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hu(c){if(!(!c||!s1)){var a=X.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=X.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=i)}return X.head.insertBefore(a,s),c}}var pu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function d4(){for(var c=12,a="";c-- >0;)a+=pu[Math.random()*62|0];return a}function Q1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function T8(c){return c.classList?Q1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Ec(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vu(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(Ec(c[e]),'" ')},"").trim()}function w3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function P8(c){return c.size!==$2.size||c.x!==$2.x||c.y!==$2.y||c.rotate!==$2.rotate||c.flipX||c.flipY}function du(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(n," ").concat(t)},o={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:f,path:o}}function Mu(c){var a=c.transform,e=c.width,s=e===void 0?_6:e,r=c.height,i=r===void 0?_6:r,n=c.startCentered,t=n===void 0?!1:n,f="";return t&&yc?f+="translate(".concat(a.x/n1-s/2,"em, ").concat(a.y/n1-i/2,"em) "):t?f+="translate(calc(-50% + ".concat(a.x/n1,"em), calc(-50% + ").concat(a.y/n1,"em)) "):f+="translate(".concat(a.x/n1,"em, ").concat(a.y/n1,"em) "),f+="scale(".concat(a.size/n1*(a.flipX?-1:1),", ").concat(a.size/n1*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var Cu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Fc(){var c=kc,a=Ac,e=y.cssPrefix,s=y.replacementClass,r=Cu;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(t,".".concat(s))}return r}var W5=!1;function p6(){y.autoAddCss&&!W5&&(hu(Fc()),W5=!0)}var Lu={mixout:function(){return{dom:{css:Fc,insertCss:p6}}},hooks:function(){return{beforeDOMElementCreation:function(){p6()},beforeI2svg:function(){p6()}}}},c1=v1||{};c1[Z2]||(c1[Z2]={});c1[Z2].styles||(c1[Z2].styles={});c1[Z2].hooks||(c1[Z2].hooks={});c1[Z2].shims||(c1[Z2].shims=[]);var R2=c1[Z2],Dc=[],gu=function c(){X.removeEventListener("DOMContentLoaded",c),l3=1,Dc.map(function(a){return a()})},l3=!1;s1&&(l3=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),l3||X.addEventListener("DOMContentLoaded",gu));function xu(c){!s1||(l3?setTimeout(c,0):Dc.push(c))}function g4(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?Ec(c):"<".concat(a," ").concat(Vu(s),">").concat(i.map(g4).join(""),"</").concat(a,">")}function G5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var bu=function(a,e){return function(s,r,i,n){return a.call(e,s,r,i,n)}},V6=function(a,e,s,r){var i=Object.keys(a),n=i.length,t=r!==void 0?bu(e,r):e,f,o,m;for(s===void 0?(f=1,m=a[i[0]]):(f=0,m=s);f<n;f++)o=i[f],m=t(m,a[o],o,a);return m};function Su(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function U6(c){var a=Su(c);return a.length===1?a[0].toString(16):null}function Nu(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function j5(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function I6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=j5(a);typeof R2.hooks.addPack=="function"&&!r?R2.hooks.addPack(c,j5(a)):R2.styles[c]=N(N({},R2.styles[c]||{}),i),c==="fas"&&I6("fa",a)}var I4,q4,W4,F1=R2.styles,wu=R2.shims,yu=(I4={},a2(I4,K,Object.values(p4[K])),a2(I4,Q,Object.values(p4[Q])),I4),B8=null,_c={},Oc={},Uc={},Ic={},qc={},ku=(q4={},a2(q4,K,Object.keys(z4[K])),a2(q4,Q,Object.keys(z4[Q])),q4);function Au(c){return~mu.indexOf(c)}function Tu(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!Au(r)?r:null}var Wc=function(){var a=function(i){return V6(F1,function(n,t,f){return n[f]=V6(t,i,{}),n},{})};_c=a(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var t=i[2].filter(function(f){return typeof f=="number"});t.forEach(function(f){r[f.toString(16)]=n})}return r}),Oc=a(function(r,i,n){if(r[n]=n,i[2]){var t=i[2].filter(function(f){return typeof f=="string"});t.forEach(function(f){r[f]=n})}return r}),qc=a(function(r,i,n){var t=i[2];return r[n]=n,t.forEach(function(f){r[f]=n}),r});var e="far"in F1||y.autoFetchSvg,s=V6(wu,function(r,i){var n=i[0],t=i[1],f=i[2];return t==="far"&&!e&&(t="fas"),typeof n=="string"&&(r.names[n]={prefix:t,iconName:f}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:t,iconName:f}),r},{names:{},unicodes:{}});Uc=s.names,Ic=s.unicodes,B8=y3(y.styleDefault,{family:y.familyDefault})};zu(function(c){B8=y3(c.styleDefault,{family:y.familyDefault})});Wc();function R8(c,a){return(_c[c]||{})[a]}function Pu(c,a){return(Oc[c]||{})[a]}function g1(c,a){return(qc[c]||{})[a]}function Gc(c){return Uc[c]||{prefix:null,iconName:null}}function Bu(c){var a=Ic[c],e=R8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function H1(){return B8}var E8=function(){return{prefix:null,iconName:null,rest:[]}};function y3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?K:e,r=z4[s][c],i=h4[s][c]||h4[s][r],n=c in R2.styles?c:null;return i||n||null}var $5=(W4={},a2(W4,K,Object.keys(p4[K])),a2(W4,Q,Object.keys(p4[Q])),W4);function k3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},a2(a,K,"".concat(y.cssPrefix,"-").concat(K)),a2(a,Q,"".concat(y.cssPrefix,"-").concat(Q)),a),n=null,t=K;(c.includes(i[K])||c.some(function(o){return $5[K].includes(o)}))&&(t=K),(c.includes(i[Q])||c.some(function(o){return $5[Q].includes(o)}))&&(t=Q);var f=c.reduce(function(o,m){var v=Tu(y.cssPrefix,m);if(F1[m]?(m=yu[t].includes(m)?iu[t][m]:m,n=m,o.prefix=m):ku[t].indexOf(m)>-1?(n=m,o.prefix=y3(m,{family:t})):v?o.iconName=v:m!==y.replacementClass&&m!==i[K]&&m!==i[Q]&&o.rest.push(m),!r&&o.prefix&&o.iconName){var H=n==="fa"?Gc(o.iconName):{},M=g1(o.prefix,o.iconName);H.prefix&&(n=null),o.iconName=H.iconName||M||o.iconName,o.prefix=H.prefix||o.prefix,o.prefix==="far"&&!F1.far&&F1.fas&&!y.autoFetchSvg&&(o.prefix="fas")}return o},E8());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&t===Q&&(F1.fass||y.autoFetchSvg)&&(f.prefix="fass",f.iconName=g1(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=H1()||"fas"),f}var Ru=function(){function c(){$m(this,c),this.definitions={}}return Km(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(t){e.definitions[t]=N(N({},e.definitions[t]||{}),n[t]),I6(t,n[t]);var f=p4[K][t];f&&I6(f,n[t]),Wc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var n=r[i],t=n.prefix,f=n.iconName,o=n.icon,m=o[2];e[t]||(e[t]={}),m.length>0&&m.forEach(function(v){typeof v=="string"&&(e[t][v]=o)}),e[t][f]=o}),e}}]),c}(),K5=[],D1={},q1={},Eu=Object.keys(q1);function Fu(c,a){var e=a.mixoutsTo;return K5=c,D1={},Object.keys(q1).forEach(function(s){Eu.indexOf(s)===-1&&delete q1[s]}),K5.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(e[n]=r[n]),f3(r[n])==="object"&&Object.keys(r[n]).forEach(function(t){e[n]||(e[n]={}),e[n][t]=r[n][t]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(n){D1[n]||(D1[n]=[]),D1[n].push(i[n])})}s.provides&&s.provides(q1)}),e}function q6(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=D1[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(s))}),a}function N1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=D1[c]||[];r.forEach(function(i){i.apply(null,e)})}function a1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return q1[c]?q1[c].apply(null,a):void 0}function W6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||H1();if(!!a)return a=g1(e,a)||a,G5(jc.definitions,e,a)||G5(R2.styles,e,a)}var jc=new Ru,Du=function(){y.autoReplaceSvg=!1,y.observeMutations=!1,N1("noAuto")},_u={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return s1?(N1("beforeI2svg",a),a1("pseudoElements2svg",a),a1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,xu(function(){Uu({autoReplaceSvgRoot:e}),N1("watch",a)})}},Ou={icon:function(a){if(a===null)return null;if(f3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:g1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=y3(a[0]);return{prefix:s,iconName:g1(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(y.cssPrefix,"-"))>-1||a.match(nu))){var r=k3(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||H1(),iconName:g1(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=H1();return{prefix:i,iconName:g1(i,a)||a}}}},g2={noAuto:Du,config:y,dom:_u,parse:Ou,library:jc,findIconDefinition:W6,toHtml:g4},Uu=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?X:e;(Object.keys(R2.styles).length>0||y.autoFetchSvg)&&s1&&y.autoReplaceSvg&&g2.dom.i2svg({node:s})};function A3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return g4(s)})}}),Object.defineProperty(c,"node",{get:function(){if(!!s1){var s=X.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function Iu(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(P8(n)&&e.found&&!s.found){var t=e.width,f=e.height,o={x:t/f/2,y:.5};r.style=w3(N(N({},i),{},{"transform-origin":"".concat(o.x+n.x/16,"em ").concat(o.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function qu(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(y.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},r),{},{id:n}),children:s}]}]}function F8(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,n=c.transform,t=c.symbol,f=c.title,o=c.maskId,m=c.titleId,v=c.extra,H=c.watchable,M=H===void 0?!1:H,B=s.found?s:e,E=B.width,k=B.height,d=r==="fak",S=[y.replacementClass,i?"".concat(y.cssPrefix,"-").concat(i):""].filter(function(Z){return v.classes.indexOf(Z)===-1}).filter(function(Z){return Z!==""||!!Z}).concat(v.classes).join(" "),P={children:[],attributes:N(N({},v.attributes),{},{"data-prefix":r,"data-icon":i,class:S,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(k)})},_=d&&!~v.classes.indexOf("fa-fw")?{width:"".concat(E/k*16*.0625,"em")}:{};M&&(P.attributes[S1]=""),f&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(m||d4())},children:[f]}),delete P.attributes.title);var b=N(N({},P),{},{prefix:r,iconName:i,main:e,mask:s,maskId:o,transform:n,symbol:t,styles:N(N({},_),v.styles)}),m2=s.found&&e.found?a1("generateAbstractMask",b)||{children:[],attributes:{}}:a1("generateAbstractIcon",b)||{children:[],attributes:{}},i2=m2.children,x2=m2.attributes;return b.children=i2,b.attributes=x2,t?qu(b):Iu(b)}function X5(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,n=c.extra,t=c.watchable,f=t===void 0?!1:t,o=N(N(N({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});f&&(o[S1]="");var m=N({},n.styles);P8(r)&&(m.transform=Mu({transform:r,startCentered:!0,width:e,height:s}),m["-webkit-transform"]=m.transform);var v=w3(m);v.length>0&&(o.style=v);var H=[];return H.push({tag:"span",attributes:o,children:[a]}),i&&H.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),H}function Wu(c){var a=c.content,e=c.title,s=c.extra,r=N(N(N({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=w3(s.styles);i.length>0&&(r.style=i);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var d6=R2.styles;function G6(c){var a=c[0],e=c[1],s=c.slice(4),r=N8(s,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(L1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(L1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(L1.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var Gu={found:!1,width:512,height:512};function ju(c,a){!Tc&&!y.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function j6(c,a){var e=a;return a==="fa"&&y.styleDefault!==null&&(a=H1()),new Promise(function(s,r){if(a1("missingIconAbstract"),e==="fa"){var i=Gc(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&d6[a]&&d6[a][c]){var n=d6[a][c];return s(G6(n))}ju(c,a),s(N(N({},Gu),{},{icon:y.showMissingIcons&&c?a1("missingIconAbstract")||{}:{}}))})}var Y5=function(){},$6=y.measurePerformance&&E4&&E4.mark&&E4.measure?E4:{mark:Y5,measure:Y5},i4='FA "6.2.0"',$u=function(a){return $6.mark("".concat(i4," ").concat(a," begins")),function(){return $c(a)}},$c=function(a){$6.mark("".concat(i4," ").concat(a," ends")),$6.measure("".concat(i4," ").concat(a),"".concat(i4," ").concat(a," begins"),"".concat(i4," ").concat(a," ends"))},D8={begin:$u,end:$c},Z4=function(){};function J5(c){var a=c.getAttribute?c.getAttribute(S1):null;return typeof a=="string"}function Ku(c){var a=c.getAttribute?c.getAttribute(y8):null,e=c.getAttribute?c.getAttribute(k8):null;return a&&e}function Xu(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(y.replacementClass)}function Yu(){if(y.autoReplaceSvg===!0)return c3.replace;var c=c3[y.autoReplaceSvg];return c||c3.replace}function Ju(c){return X.createElementNS("http://www.w3.org/2000/svg",c)}function Qu(c){return X.createElement(c)}function Kc(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?Ju:Qu:e;if(typeof c=="string")return X.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(Kc(n,{ceFn:s}))}),r}function Zu(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var c3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(Kc(r),e)}),e.getAttribute(S1)===null&&y.keepOriginalSource){var s=X.createComment(Zu(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~T8(e).indexOf(y.replacementClass))return c3.replace(a);var r=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(t,f){return f===y.replacementClass||f.match(r)?t.toSvg.push(f):t.toNode.push(f),t},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=s.map(function(t){return g4(t)}).join(`
`);e.setAttribute(S1,""),e.innerHTML=n}};function Q5(c){c()}function Xc(c,a){var e=typeof a=="function"?a:Z4;if(c.length===0)e();else{var s=Q5;y.mutateApproach===su&&(s=v1.requestAnimationFrame||Q5),s(function(){var r=Yu(),i=D8.begin("mutate");c.map(r),i(),e()})}}var _8=!1;function Yc(){_8=!0}function K6(){_8=!1}var o3=null;function Z5(c){if(!!I5&&!!y.observeMutations){var a=c.treeCallback,e=a===void 0?Z4:a,s=c.nodeCallback,r=s===void 0?Z4:s,i=c.pseudoElementsCallback,n=i===void 0?Z4:i,t=c.observeMutationsRoot,f=t===void 0?X:t;o3=new I5(function(o){if(!_8){var m=H1();Q1(o).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!J5(v.addedNodes[0])&&(y.searchPseudoElements&&n(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&y.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&J5(v.target)&&~ou.indexOf(v.attributeName))if(v.attributeName==="class"&&Ku(v.target)){var H=k3(T8(v.target)),M=H.prefix,B=H.iconName;v.target.setAttribute(y8,M||m),B&&v.target.setAttribute(k8,B)}else Xu(v.target)&&r(v.target)})}}),s1&&o3.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function cv(){!o3||o3.disconnect()}function av(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),n=i[0],t=i.slice(1);return n&&t.length>0&&(s[n]=t.join(":").trim()),s},{})),e}function ev(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=k3(T8(c));return r.prefix||(r.prefix=H1()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=Pu(r.prefix,c.innerText)||R8(r.prefix,U6(c.innerText))),!r.iconName&&y.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function sv(c){var a=Q1(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return y.autoA11y&&(e?a["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(s||d4()):(a["aria-hidden"]="true",a.focusable="false")),a}function rv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:$2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function c7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=ev(c),s=e.iconName,r=e.prefix,i=e.rest,n=sv(c),t=q6("parseNodeAttributes",{},c),f=a.styleParser?av(c):[];return N({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:$2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:n}},t)}var iv=R2.styles;function Jc(c){var a=y.autoReplaceSvg==="nest"?c7(c,{styleParser:!1}):c7(c);return~a.extra.classes.indexOf(Pc)?a1("generateLayersText",c,a):a1("generateSvgReplacementMutation",c,a)}var z1=new Set;A8.map(function(c){z1.add("fa-".concat(c))});Object.keys(z4[K]).map(z1.add.bind(z1));Object.keys(z4[Q]).map(z1.add.bind(z1));z1=C4(z1);function a7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!s1)return Promise.resolve();var e=X.documentElement.classList,s=function(v){return e.add("".concat(q5,"-").concat(v))},r=function(v){return e.remove("".concat(q5,"-").concat(v))},i=y.autoFetchSvg?z1:A8.map(function(m){return"fa-".concat(m)}).concat(Object.keys(iv));i.includes("fa")||i.push("fa");var n=[".".concat(Pc,":not([").concat(S1,"])")].concat(i.map(function(m){return".".concat(m,":not([").concat(S1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var t=[];try{t=Q1(c.querySelectorAll(n))}catch{}if(t.length>0)s("pending"),r("complete");else return Promise.resolve();var f=D8.begin("onTree"),o=t.reduce(function(m,v){try{var H=Jc(v);H&&m.push(H)}catch(M){Tc||M.name==="MissingIcon"&&console.error(M)}return m},[]);return new Promise(function(m,v){Promise.all(o).then(function(H){Xc(H,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),f(),m()})}).catch(function(H){f(),v(H)})})}function nv(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Jc(c).then(function(e){e&&Xc([e],a)})}function tv(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:W6(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:W6(r||{})),c(s,N(N({},e),{},{mask:r}))}}var fv=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?$2:s,i=e.symbol,n=i===void 0?!1:i,t=e.mask,f=t===void 0?null:t,o=e.maskId,m=o===void 0?null:o,v=e.title,H=v===void 0?null:v,M=e.titleId,B=M===void 0?null:M,E=e.classes,k=E===void 0?[]:E,d=e.attributes,S=d===void 0?{}:d,P=e.styles,_=P===void 0?{}:P;if(!!a){var b=a.prefix,m2=a.iconName,i2=a.icon;return A3(N({type:"icon"},a),function(){return N1("beforeDOMElementCreation",{iconDefinition:a,params:e}),y.autoA11y&&(H?S["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(B||d4()):(S["aria-hidden"]="true",S.focusable="false")),F8({icons:{main:G6(i2),mask:f?G6(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:m2,transform:N(N({},$2),r),symbol:n,title:H,maskId:m,titleId:B,extra:{attributes:S,styles:_,classes:k}})})}},lv={mixout:function(){return{icon:tv(fv)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=a7,e.nodeCallback=nv,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?X:s,i=e.callback,n=i===void 0?function(){}:i;return a7(r,n)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,n=s.titleId,t=s.prefix,f=s.transform,o=s.symbol,m=s.mask,v=s.maskId,H=s.extra;return new Promise(function(M,B){Promise.all([j6(r,t),m.iconName?j6(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var k=N8(E,2),d=k[0],S=k[1];M([e,F8({icons:{main:d,mask:S},prefix:t,iconName:r,transform:f,symbol:o,maskId:v,title:i,titleId:n,extra:H,watchable:!0})])}).catch(B)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.transform,t=e.styles,f=w3(t);f.length>0&&(r.style=f);var o;return P8(n)&&(o=a1("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),s.push(o||i.icon),{children:s,attributes:r}}}},ov={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return A3({type:"layer"},function(){N1("beforeDOMElementCreation",{assembler:e,params:s});var n=[];return e(function(t){Array.isArray(t)?t.map(function(f){n=n.concat(f.abstract)}):n=n.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers")].concat(C4(i)).join(" ")},children:n}]})}}}},mv={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,n=s.classes,t=n===void 0?[]:n,f=s.attributes,o=f===void 0?{}:f,m=s.styles,v=m===void 0?{}:m;return A3({type:"counter",content:e},function(){return N1("beforeDOMElementCreation",{content:e,params:s}),Wu({content:e.toString(),title:i,extra:{attributes:o,styles:v,classes:["".concat(y.cssPrefix,"-layers-counter")].concat(C4(t))}})})}}}},uv={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?$2:r,n=s.title,t=n===void 0?null:n,f=s.classes,o=f===void 0?[]:f,m=s.attributes,v=m===void 0?{}:m,H=s.styles,M=H===void 0?{}:H;return A3({type:"text",content:e},function(){return N1("beforeDOMElementCreation",{content:e,params:s}),X5({content:e,transform:N(N({},$2),i),title:t,extra:{attributes:v,styles:M,classes:["".concat(y.cssPrefix,"-layers-text")].concat(C4(o))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,n=s.extra,t=null,f=null;if(yc){var o=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();t=m.width/o,f=m.height/o}return y.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,X5({content:e.innerHTML,width:t,height:f,transform:i,title:r,extra:n,watchable:!0})])}}},vv=new RegExp('"',"ug"),e7=[1105920,1112319];function Hv(c){var a=c.replace(vv,""),e=Nu(a,0),s=e>=e7[0]&&e<=e7[1],r=a.length===2?a[0]===a[1]:!1;return{value:U6(r?a[0]:a),isSecondary:s||r}}function s7(c,a){var e="".concat(eu).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=Q1(c.children),n=i.filter(function(i2){return i2.getAttribute(O6)===a})[0],t=v1.getComputedStyle(c,a),f=t.getPropertyValue("font-family").match(tu),o=t.getPropertyValue("font-weight"),m=t.getPropertyValue("content");if(n&&!f)return c.removeChild(n),s();if(f&&m!=="none"&&m!==""){var v=t.getPropertyValue("content"),H=~["Sharp"].indexOf(f[2])?Q:K,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?h4[H][f[2].toLowerCase()]:fu[H][o],B=Hv(v),E=B.value,k=B.isSecondary,d=f[0].startsWith("FontAwesome"),S=R8(M,E),P=S;if(d){var _=Bu(E);_.iconName&&_.prefix&&(S=_.iconName,M=_.prefix)}if(S&&!k&&(!n||n.getAttribute(y8)!==M||n.getAttribute(k8)!==P)){c.setAttribute(e,P),n&&c.removeChild(n);var b=rv(),m2=b.extra;m2.attributes[O6]=a,j6(S,M).then(function(i2){var x2=F8(N(N({},b),{},{icons:{main:i2,mask:E8()},prefix:M,iconName:P,extra:m2,watchable:!0})),Z=X.createElement("svg");a==="::before"?c.insertBefore(Z,c.firstChild):c.appendChild(Z),Z.outerHTML=x2.map(function(D2){return g4(D2)}).join(`
`),c.removeAttribute(e),s()}).catch(r)}else s()}else s()})}function zv(c){return Promise.all([s7(c,"::before"),s7(c,"::after")])}function hv(c){return c.parentNode!==document.head&&!~ru.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(O6)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function r7(c){if(!!s1)return new Promise(function(a,e){var s=Q1(c.querySelectorAll("*")).filter(hv).map(zv),r=D8.begin("searchPseudoElements");Yc(),Promise.all(s).then(function(){r(),K6(),a()}).catch(function(){r(),K6(),e()})})}var pv={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=r7,e}}},provides:function(a){a.pseudoElements2svg=function(e){var s=e.node,r=s===void 0?X:s;y.searchPseudoElements&&r7(r)}}},i7=!1,Vv={mixout:function(){return{dom:{unwatch:function(){Yc(),i7=!0}}}},hooks:function(){return{bootstrap:function(){Z5(q6("mutationObserverCallbacks",{}))},noAuto:function(){cv()},watch:function(e){var s=e.observeMutationsRoot;i7?K6():Z5(q6("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},n7=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(s,r){var i=r.toLowerCase().split("-"),n=i[0],t=i.slice(1).join("-");if(n&&t==="h")return s.flipX=!0,s;if(n&&t==="v")return s.flipY=!0,s;if(t=parseFloat(t),isNaN(t))return s;switch(n){case"grow":s.size=s.size+t;break;case"shrink":s.size=s.size-t;break;case"left":s.x=s.x-t;break;case"right":s.x=s.x+t;break;case"up":s.y=s.y-t;break;case"down":s.y=s.y+t;break;case"rotate":s.rotate=s.rotate+t;break}return s},e)},dv={mixout:function(){return{parse:{transform:function(e){return n7(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-transform");return r&&(e.transform=n7(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var s=e.main,r=e.transform,i=e.containerWidth,n=e.iconWidth,t={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),o="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(f," ").concat(o," ").concat(m)},H={transform:"translate(".concat(n/2*-1," -256)")},M={outer:t,inner:v,path:H};return{tag:"g",attributes:N({},M.outer),children:[{tag:"g",attributes:N({},M.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:N(N({},s.icon.attributes),M.path)}]}]}}}},M6={x:0,y:0,width:"100%",height:"100%"};function t7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function Mv(c){return c.tag==="g"?c.children:[c]}var Cv={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-mask"),i=r?k3(r.split(" ").map(function(n){return n.trim()})):E8();return i.prefix||(i.prefix=H1()),e.mask=i,e.maskId=s.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.mask,t=e.maskId,f=e.transform,o=i.width,m=i.icon,v=n.width,H=n.icon,M=du({transform:f,containerWidth:v,iconWidth:o}),B={tag:"rect",attributes:N(N({},M6),{},{fill:"white"})},E=m.children?{children:m.children.map(t7)}:{},k={tag:"g",attributes:N({},M.inner),children:[t7(N({tag:m.tag,attributes:N(N({},m.attributes),M.path)},E))]},d={tag:"g",attributes:N({},M.outer),children:[k]},S="mask-".concat(t||d4()),P="clip-".concat(t||d4()),_={tag:"mask",attributes:N(N({},M6),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[B,d]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Mv(H)},_]};return s.push(b,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(S,")")},M6)}),{children:s,attributes:r}}}},Lv={provides:function(a){var e=!1;v1.matchMedia&&(e=v1.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var s=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:N(N({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=N(N({},i),{},{attributeName:"opacity"}),t={tag:"circle",attributes:N(N({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||t.children.push({tag:"animate",attributes:N(N({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(t),s.push({tag:"path",attributes:N(N({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:N(N({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||s.push({tag:"path",attributes:N(N({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},gv={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},xv=[Lu,lv,ov,mv,uv,pv,Vv,dv,Cv,Lv,gv];Fu(xv,{mixoutsTo:g2});g2.noAuto;var Qc=g2.config,bv=g2.library;g2.dom;var m3=g2.parse;g2.findIconDefinition;g2.toHtml;var Sv=g2.icon;g2.layer;var Nv=g2.text;g2.counter;function f7(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function T2(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?f7(Object(e),!0).forEach(function(s){p2(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):f7(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function u3(c){return u3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},u3(c)}function p2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function wv(c,a){if(c==null)return{};var e={},s=Object.keys(c),r,i;for(i=0;i<s.length;i++)r=s[i],!(a.indexOf(r)>=0)&&(e[r]=c[r]);return e}function yv(c,a){if(c==null)return{};var e=wv(c,a),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(r=0;r<i.length;r++)s=i[r],!(a.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,s)||(e[s]=c[s]))}return e}function X6(c){return kv(c)||Av(c)||Tv(c)||Pv()}function kv(c){if(Array.isArray(c))return Y6(c)}function Av(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Tv(c,a){if(!!c){if(typeof c=="string")return Y6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Y6(c,a)}}function Y6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function Pv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.