(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function o7(e,c){const a=new Set(e.split(","));return c?r=>a.has(r.toLowerCase()):r=>a.has(r)}const u1={},e4=[],r2=()=>{},$d=()=>!1,K0=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l7=e=>e.startsWith("onUpdate:"),T1=Object.assign,f7=(e,c)=>{const a=e.indexOf(c);a>-1&&e.splice(a,1)},Wd=Object.prototype.hasOwnProperty,c1=(e,c)=>Wd.call(e,c),q=Array.isArray,a4=e=>g6(e)==="[object Map]",g4=e=>g6(e)==="[object Set]",Mc=e=>g6(e)==="[object Date]",j=e=>typeof e=="function",b1=e=>typeof e=="string",f3=e=>typeof e=="symbol",f1=e=>e!==null&&typeof e=="object",qa=e=>(f1(e)||j(e))&&j(e.then)&&j(e.catch),$a=Object.prototype.toString,g6=e=>$a.call(e),Gd=e=>g6(e).slice(8,-1),Wa=e=>g6(e)==="[object Object]",h7=e=>b1(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,O4=o7(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Z0=e=>{const c=Object.create(null);return a=>c[a]||(c[a]=e(a))},jd=/-(\w)/g,L2=Z0(e=>e.replace(jd,(c,a)=>a?a.toUpperCase():"")),Kd=/\B([A-Z])/g,L4=Z0(e=>e.replace(Kd,"-$1").toLowerCase()),Y0=Z0(e=>e.charAt(0).toUpperCase()+e.slice(1)),G8=Z0(e=>e?`on${Y0(e)}`:""),h3=(e,c)=>!Object.is(e,c),u0=(e,c)=>{for(let a=0;a<e.length;a++)e[a](c)},g0=(e,c,a)=>{Object.defineProperty(e,c,{configurable:!0,enumerable:!1,value:a})},c6=e=>{const c=parseFloat(e);return isNaN(c)?e:c};let Cc;const Ga=()=>Cc||(Cc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function u7(e){if(q(e)){const c={};for(let a=0;a<e.length;a++){const r=e[a],t=b1(r)?Jd(r):u7(r);if(t)for(const n in t)c[n]=t[n]}return c}else if(b1(e)||f1(e))return e}const Zd=/;(?![^(]*\))/g,Yd=/:([^]+)/,Xd=/\/\*[^]*?\*\//g;function Jd(e){const c={};return e.replace(Xd,"").split(Zd).forEach(a=>{if(a){const r=a.split(Yd);r.length>1&&(c[r[0].trim()]=r[1].trim())}}),c}function m7(e){let c="";if(b1(e))c=e;else if(q(e))for(let a=0;a<e.length;a++){const r=m7(e[a]);r&&(c+=r+" ")}else if(f1(e))for(const a in e)e[a]&&(c+=a+" ");return c.trim()}const Qd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cp=o7(Qd);function ja(e){return!!e||e===""}function ep(e,c){if(e.length!==c.length)return!1;let a=!0;for(let r=0;a&&r<e.length;r++)a=L6(e[r],c[r]);return a}function L6(e,c){if(e===c)return!0;let a=Mc(e),r=Mc(c);if(a||r)return a&&r?e.getTime()===c.getTime():!1;if(a=f3(e),r=f3(c),a||r)return e===c;if(a=q(e),r=q(c),a||r)return a&&r?ep(e,c):!1;if(a=f1(e),r=f1(c),a||r){if(!a||!r)return!1;const t=Object.keys(e).length,n=Object.keys(c).length;if(t!==n)return!1;for(const i in e){const s=e.hasOwnProperty(i),o=c.hasOwnProperty(i);if(s&&!o||!s&&o||!L6(e[i],c[i]))return!1}}return String(e)===String(c)}function v7(e,c){return e.findIndex(a=>L6(a,c))}const Ka=e=>b1(e)?e:e==null?"":q(e)||f1(e)&&(e.toString===$a||!j(e.toString))?JSON.stringify(e,Za,2):String(e),Za=(e,c)=>c&&c.__v_isRef?Za(e,c.value):a4(c)?{[`Map(${c.size})`]:[...c.entries()].reduce((a,[r,t],n)=>(a[j8(r,n)+" =>"]=t,a),{})}:g4(c)?{[`Set(${c.size})`]:[...c.values()].map(a=>j8(a))}:f3(c)?j8(c):f1(c)&&!q(c)&&!Wa(c)?String(c):c,j8=(e,c="")=>{var a;return f3(e)?`Symbol(${(a=e.description)!=null?a:c})`:e};/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Z1;class Ya{constructor(c=!1){this.detached=c,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Z1,!c&&Z1&&(this.index=(Z1.scopes||(Z1.scopes=[])).push(this)-1)}get active(){return this._active}run(c){if(this._active){const a=Z1;try{return Z1=this,c()}finally{Z1=a}}}on(){Z1=this}off(){Z1=this.parent}stop(c){if(this._active){let a,r;for(a=0,r=this.effects.length;a<r;a++)this.effects[a].stop();for(a=0,r=this.cleanups.length;a<r;a++)this.cleanups[a]();if(this.scopes)for(a=0,r=this.scopes.length;a<r;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!c){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function Xa(e){return new Ya(e)}function ap(e,c=Z1){c&&c.active&&c.effects.push(e)}function Ja(){return Z1}function rp(e){Z1&&Z1.cleanups.push(e)}let A3;class d7{constructor(c,a,r,t){this.fn=c,this.trigger=a,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ap(this,t)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,U3();for(let c=0;c<this._depsLength;c++){const a=this.deps[c];if(a.computed&&(tp(a.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),q3()}return this._dirtyLevel>=4}set dirty(c){this._dirtyLevel=c?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let c=t3,a=A3;try{return t3=!0,A3=this,this._runnings++,gc(this),this.fn()}finally{Lc(this),this._runnings--,A3=a,t3=c}}stop(){var c;this.active&&(gc(this),Lc(this),(c=this.onStop)==null||c.call(this),this.active=!1)}}function tp(e){return e.value}function gc(e){e._trackId++,e._depsLength=0}function Lc(e){if(e.deps.length>e._depsLength){for(let c=e._depsLength;c<e.deps.length;c++)Qa(e.deps[c],e);e.deps.length=e._depsLength}}function Qa(e,c){const a=e.get(c);a!==void 0&&c._trackId!==a&&(e.delete(c),e.size===0&&e.cleanup())}let t3=!0,H5=0;const cr=[];function U3(){cr.push(t3),t3=!1}function q3(){const e=cr.pop();t3=e===void 0?!0:e}function p7(){H5++}function z7(){for(H5--;!H5&&V5.length;)V5.shift()()}function er(e,c,a){if(c.get(e)!==e._trackId){c.set(e,e._trackId);const r=e.deps[e._depsLength];r!==c?(r&&Qa(r,e),e.deps[e._depsLength++]=c):e._depsLength++}}const V5=[];function ar(e,c,a){p7();for(const r of e.keys()){let t;r._dirtyLevel<c&&(t??(t=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=c),r._shouldSchedule&&(t??(t=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&V5.push(r.scheduler)))}z7()}const rr=(e,c)=>{const a=new Map;return a.cleanup=e,a.computed=c,a},L0=new WeakMap,_3=Symbol(""),M5=Symbol("");function G1(e,c,a){if(t3&&A3){let r=L0.get(e);r||L0.set(e,r=new Map);let t=r.get(a);t||r.set(a,t=rr(()=>r.delete(a))),er(A3,t)}}function _2(e,c,a,r,t,n){const i=L0.get(e);if(!i)return;let s=[];if(c==="clear")s=[...i.values()];else if(a==="length"&&q(e)){const o=Number(r);i.forEach((l,f)=>{(f==="length"||!f3(f)&&f>=o)&&s.push(l)})}else switch(a!==void 0&&s.push(i.get(a)),c){case"add":q(e)?h7(a)&&s.push(i.get("length")):(s.push(i.get(_3)),a4(e)&&s.push(i.get(M5)));break;case"delete":q(e)||(s.push(i.get(_3)),a4(e)&&s.push(i.get(M5)));break;case"set":a4(e)&&s.push(i.get(_3));break}p7();for(const o of s)o&&ar(o,4);z7()}function np(e,c){var a;return(a=L0.get(e))==null?void 0:a.get(c)}const ip=o7("__proto__,__v_isRef,__isVue"),tr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(f3)),bc=sp();function sp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(c=>{e[c]=function(...a){const r=Q(this);for(let n=0,i=this.length;n<i;n++)G1(r,"get",n+"");const t=r[c](...a);return t===-1||t===!1?r[c](...a.map(Q)):t}}),["push","pop","shift","unshift","splice"].forEach(c=>{e[c]=function(...a){U3(),p7();const r=Q(this)[c].apply(this,a);return z7(),q3(),r}}),e}function op(e){const c=Q(this);return G1(c,"has",e),c.hasOwnProperty(e)}class nr{constructor(c=!1,a=!1){this._isReadonly=c,this._shallow=a}get(c,a,r){const t=this._isReadonly,n=this._shallow;if(a==="__v_isReactive")return!t;if(a==="__v_isReadonly")return t;if(a==="__v_isShallow")return n;if(a==="__v_raw")return r===(t?n?Cp:lr:n?or:sr).get(c)||Object.getPrototypeOf(c)===Object.getPrototypeOf(r)?c:void 0;const i=q(c);if(!t){if(i&&c1(bc,a))return Reflect.get(bc,a,r);if(a==="hasOwnProperty")return op}const s=Reflect.get(c,a,r);return(f3(a)?tr.has(a):ip(a))||(t||G1(c,"get",a),n)?s:V1(s)?i&&h7(a)?s:s.value:f1(s)?t?hr(s):b6(s):s}}class ir extends nr{constructor(c=!1){super(!1,c)}set(c,a,r,t){let n=c[a];if(!this._shallow){const o=f4(n);if(!b0(r)&&!f4(r)&&(n=Q(n),r=Q(r)),!q(c)&&V1(n)&&!V1(r))return o?!1:(n.value=r,!0)}const i=q(c)&&h7(a)?Number(a)<c.length:c1(c,a),s=Reflect.set(c,a,r,t);return c===Q(t)&&(i?h3(r,n)&&_2(c,"set",a,r):_2(c,"add",a,r)),s}deleteProperty(c,a){const r=c1(c,a);c[a];const t=Reflect.deleteProperty(c,a);return t&&r&&_2(c,"delete",a,void 0),t}has(c,a){const r=Reflect.has(c,a);return(!f3(a)||!tr.has(a))&&G1(c,"has",a),r}ownKeys(c){return G1(c,"iterate",q(c)?"length":_3),Reflect.ownKeys(c)}}class lp extends nr{constructor(c=!1){super(!0,c)}set(c,a){return!0}deleteProperty(c,a){return!0}}const fp=new ir,hp=new lp,up=new ir(!0),H7=e=>e,X0=e=>Reflect.getPrototypeOf(e);function G6(e,c,a=!1,r=!1){e=e.__v_raw;const t=Q(e),n=Q(c);a||(h3(c,n)&&G1(t,"get",c),G1(t,"get",n));const{has:i}=X0(t),s=r?H7:a?C7:e6;if(i.call(t,c))return s(e.get(c));if(i.call(t,n))return s(e.get(n));e!==t&&e.get(c)}function j6(e,c=!1){const a=this.__v_raw,r=Q(a),t=Q(e);return c||(h3(e,t)&&G1(r,"has",e),G1(r,"has",t)),e===t?a.has(e):a.has(e)||a.has(t)}function K6(e,c=!1){return e=e.__v_raw,!c&&G1(Q(e),"iterate",_3),Reflect.get(e,"size",e)}function xc(e){e=Q(e);const c=Q(this);return X0(c).has.call(c,e)||(c.add(e),_2(c,"add",e,e)),this}function yc(e,c){c=Q(c);const a=Q(this),{has:r,get:t}=X0(a);let n=r.call(a,e);n||(e=Q(e),n=r.call(a,e));const i=t.call(a,e);return a.set(e,c),n?h3(c,i)&&_2(a,"set",e,c):_2(a,"add",e,c),this}function Nc(e){const c=Q(this),{has:a,get:r}=X0(c);let t=a.call(c,e);t||(e=Q(e),t=a.call(c,e)),r&&r.call(c,e);const n=c.delete(e);return t&&_2(c,"delete",e,void 0),n}function Sc(){const e=Q(this),c=e.size!==0,a=e.clear();return c&&_2(e,"clear",void 0,void 0),a}function Z6(e,c){return function(r,t){const n=this,i=n.__v_raw,s=Q(i),o=c?H7:e?C7:e6;return!e&&G1(s,"iterate",_3),i.forEach((l,f)=>r.call(t,o(l),o(f),n))}}function Y6(e,c,a){return function(...r){const t=this.__v_raw,n=Q(t),i=a4(n),s=e==="entries"||e===Symbol.iterator&&i,o=e==="keys"&&i,l=t[e](...r),f=a?H7:c?C7:e6;return!c&&G1(n,"iterate",o?M5:_3),{next(){const{value:h,done:u}=l.next();return u?{value:h,done:u}:{value:s?[f(h[0]),f(h[1])]:f(h),done:u}},[Symbol.iterator](){return this}}}}function W2(e){return function(...c){return e==="delete"?!1:e==="clear"?void 0:this}}function mp(){const e={get(n){return G6(this,n)},get size(){return K6(this)},has:j6,add:xc,set:yc,delete:Nc,clear:Sc,forEach:Z6(!1,!1)},c={get(n){return G6(this,n,!1,!0)},get size(){return K6(this)},has:j6,add:xc,set:yc,delete:Nc,clear:Sc,forEach:Z6(!1,!0)},a={get(n){return G6(this,n,!0)},get size(){return K6(this,!0)},has(n){return j6.call(this,n,!0)},add:W2("add"),set:W2("set"),delete:W2("delete"),clear:W2("clear"),forEach:Z6(!0,!1)},r={get(n){return G6(this,n,!0,!0)},get size(){return K6(this,!0)},has(n){return j6.call(this,n,!0)},add:W2("add"),set:W2("set"),delete:W2("delete"),clear:W2("clear"),forEach:Z6(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{e[n]=Y6(n,!1,!1),a[n]=Y6(n,!0,!1),c[n]=Y6(n,!1,!0),r[n]=Y6(n,!0,!0)}),[e,a,c,r]}const[vp,dp,pp,zp]=mp();function V7(e,c){const a=c?e?zp:pp:e?dp:vp;return(r,t,n)=>t==="__v_isReactive"?!e:t==="__v_isReadonly"?e:t==="__v_raw"?r:Reflect.get(c1(a,t)&&t in r?a:r,t,n)}const Hp={get:V7(!1,!1)},Vp={get:V7(!1,!0)},Mp={get:V7(!0,!1)},sr=new WeakMap,or=new WeakMap,lr=new WeakMap,Cp=new WeakMap;function gp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lp(e){return e.__v_skip||!Object.isExtensible(e)?0:gp(Gd(e))}function b6(e){return f4(e)?e:M7(e,!1,fp,Hp,sr)}function fr(e){return M7(e,!1,up,Vp,or)}function hr(e){return M7(e,!0,hp,Mp,lr)}function M7(e,c,a,r,t){if(!f1(e)||e.__v_raw&&!(c&&e.__v_isReactive))return e;const n=t.get(e);if(n)return n;const i=Lp(e);if(i===0)return e;const s=new Proxy(e,i===2?r:a);return t.set(e,s),s}function k2(e){return f4(e)?k2(e.__v_raw):!!(e&&e.__v_isReactive)}function f4(e){return!!(e&&e.__v_isReadonly)}function b0(e){return!!(e&&e.__v_isShallow)}function ur(e){return k2(e)||f4(e)}function Q(e){const c=e&&e.__v_raw;return c?Q(c):e}function J0(e){return Object.isExtensible(e)&&g0(e,"__v_skip",!0),e}const e6=e=>f1(e)?b6(e):e,C7=e=>f1(e)?hr(e):e;class mr{constructor(c,a,r,t){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new d7(()=>c(this._value),()=>m0(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!t,this.__v_isReadonly=r}get value(){const c=Q(this);return(!c._cacheable||c.effect.dirty)&&h3(c._value,c._value=c.effect.run())&&m0(c,4),vr(c),c.effect._dirtyLevel>=2&&m0(c,2),c._value}set value(c){this._setter(c)}get _dirty(){return this.effect.dirty}set _dirty(c){this.effect.dirty=c}}function bp(e,c,a=!1){let r,t;const n=j(e);return n?(r=e,t=r2):(r=e.get,t=e.set),new mr(r,t,n||!t,a)}function vr(e){var c;t3&&A3&&(e=Q(e),er(A3,(c=e.dep)!=null?c:e.dep=rr(()=>e.dep=void 0,e instanceof mr?e:void 0)))}function m0(e,c=4,a){e=Q(e);const r=e.dep;r&&ar(r,c)}function V1(e){return!!(e&&e.__v_isRef===!0)}function t2(e){return dr(e,!1)}function xp(e){return dr(e,!0)}function dr(e,c){return V1(e)?e:new yp(e,c)}class yp{constructor(c,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?c:Q(c),this._value=a?c:e6(c)}get value(){return vr(this),this._value}set value(c){const a=this.__v_isShallow||b0(c)||f4(c);c=a?c:Q(c),h3(c,this._rawValue)&&(this._rawValue=c,this._value=a?c:e6(c),m0(this,4))}}function M2(e){return V1(e)?e.value:e}const Np={get:(e,c,a)=>M2(Reflect.get(e,c,a)),set:(e,c,a,r)=>{const t=e[c];return V1(t)&&!V1(a)?(t.value=a,!0):Reflect.set(e,c,a,r)}};function pr(e){return k2(e)?e:new Proxy(e,Np)}function Sp(e){const c=q(e)?new Array(e.length):{};for(const a in e)c[a]=zr(e,a);return c}class wp{constructor(c,a,r){this._object=c,this._key=a,this._defaultValue=r,this.__v_isRef=!0}get value(){const c=this._object[this._key];return c===void 0?this._defaultValue:c}set value(c){this._object[this._key]=c}get dep(){return np(Q(this._object),this._key)}}class Ap{constructor(c){this._getter=c,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function _p(e,c,a){return V1(e)?e:j(e)?new Ap(e):f1(e)&&arguments.length>1?zr(e,c,a):t2(e)}function zr(e,c,a){const r=e[c];return V1(r)?r:new wp(e,c,a)}/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function n3(e,c,a,r){try{return r?e(...r):e()}catch(t){Q0(t,c,a)}}function f2(e,c,a,r){if(j(e)){const n=n3(e,c,a,r);return n&&qa(n)&&n.catch(i=>{Q0(i,c,a)}),n}const t=[];for(let n=0;n<e.length;n++)t.push(f2(e[n],c,a,r));return t}function Q0(e,c,a,r=!0){const t=c?c.vnode:null;if(c){let n=c.parent;const i=c.proxy,s=`https://vuejs.org/error-reference/#runtime-${a}`;for(;n;){const l=n.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](e,i,s)===!1)return}n=n.parent}const o=c.appContext.config.errorHandler;if(o){n3(o,null,10,[e,i,s]);return}}kp(e,a,t,r)}function kp(e,c,a,r=!0){console.error(e)}let a6=!1,C5=!1;const R1=[];let H2=0;const r4=[];let Y2=null,b3=0;const Hr=Promise.resolve();let g7=null;function c8(e){const c=g7||Hr;return e?c.then(this?e.bind(this):e):c}function Tp(e){let c=H2+1,a=R1.length;for(;c<a;){const r=c+a>>>1,t=R1[r],n=r6(t);n<e||n===e&&t.pre?c=r+1:a=r}return c}function L7(e){(!R1.length||!R1.includes(e,a6&&e.allowRecurse?H2+1:H2))&&(e.id==null?R1.push(e):R1.splice(Tp(e.id),0,e),Vr())}function Vr(){!a6&&!C5&&(C5=!0,g7=Hr.then(Cr))}function Pp(e){const c=R1.indexOf(e);c>H2&&R1.splice(c,1)}function Ep(e){q(e)?r4.push(...e):(!Y2||!Y2.includes(e,e.allowRecurse?b3+1:b3))&&r4.push(e),Vr()}function wc(e,c,a=a6?H2+1:0){for(;a<R1.length;a++){const r=R1[a];if(r&&r.pre){if(e&&r.id!==e.uid)continue;R1.splice(a,1),a--,r()}}}function Mr(e){if(r4.length){const c=[...new Set(r4)].sort((a,r)=>r6(a)-r6(r));if(r4.length=0,Y2){Y2.push(...c);return}for(Y2=c,b3=0;b3<Y2.length;b3++)Y2[b3]();Y2=null,b3=0}}const r6=e=>e.id==null?1/0:e.id,Ip=(e,c)=>{const a=r6(e)-r6(c);if(a===0){if(e.pre&&!c.pre)return-1;if(c.pre&&!e.pre)return 1}return a};function Cr(e){C5=!1,a6=!0,R1.sort(Ip);try{for(H2=0;H2<R1.length;H2++){const c=R1[H2];c&&c.active!==!1&&n3(c,null,14)}}finally{H2=0,R1.length=0,Mr(),a6=!1,g7=null,(R1.length||r4.length)&&Cr()}}function Rp(e,c,...a){if(e.isUnmounted)return;const r=e.vnode.props||u1;let t=a;const n=c.startsWith("update:"),i=n&&c.slice(7);if(i&&i in r){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:h,trim:u}=r[f]||u1;u&&(t=a.map(d=>b1(d)?d.trim():d)),h&&(t=a.map(c6))}let s,o=r[s=G8(c)]||r[s=G8(L2(c))];!o&&n&&(o=r[s=G8(L4(c))]),o&&f2(o,e,6,t);const l=r[s+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,f2(l,e,6,t)}}function gr(e,c,a=!1){const r=c.emitsCache,t=r.get(e);if(t!==void 0)return t;const n=e.emits;let i={},s=!1;if(!j(e)){const o=l=>{const f=gr(l,c,!0);f&&(s=!0,T1(i,f))};!a&&c.mixins.length&&c.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!n&&!s?(f1(e)&&r.set(e,null),null):(q(n)?n.forEach(o=>i[o]=null):T1(i,n),f1(e)&&r.set(e,i),i)}function e8(e,c){return!e||!K0(c)?!1:(c=c.slice(2).replace(/Once$/,""),c1(e,c[0].toLowerCase()+c.slice(1))||c1(e,L4(c))||c1(e,c))}let g1=null,a8=null;function x0(e){const c=g1;return g1=e,a8=e&&e.type.__scopeId||null,c}function Lr(e){a8=e}function br(){a8=null}function h4(e,c=g1,a){if(!c||e._n)return e;const r=(...t)=>{r._d&&Bc(-1);const n=x0(c);let i;try{i=e(...t)}finally{x0(n),r._d&&Bc(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function K8(e){const{type:c,vnode:a,proxy:r,withProxy:t,props:n,propsOptions:[i],slots:s,attrs:o,emit:l,render:f,renderCache:h,data:u,setupState:d,ctx:z,inheritAttrs:y}=e;let w,V;const g=x0(e);try{if(a.shapeFlag&4){const F=t||r,D=F;w=p2(f.call(D,F,h,n,d,u,z)),V=o}else{const F=c;w=p2(F.length>1?F(n,{attrs:o,slots:s,emit:l}):F(n,null)),V=c.props?o:Fp(o)}}catch(F){q4.length=0,Q0(F,e,1),w=L1(u3)}let S=w;if(V&&y!==!1){const F=Object.keys(V),{shapeFlag:D}=S;F.length&&D&7&&(i&&F.some(l7)&&(V=Dp(V,i)),S=u4(S,V))}return a.dirs&&(S=u4(S),S.dirs=S.dirs?S.dirs.concat(a.dirs):a.dirs),a.transition&&(S.transition=a.transition),w=S,x0(g),w}const Fp=e=>{let c;for(const a in e)(a==="class"||a==="style"||K0(a))&&((c||(c={}))[a]=e[a]);return c},Dp=(e,c)=>{const a={};for(const r in e)(!l7(r)||!(r.slice(9)in c))&&(a[r]=e[r]);return a};function Op(e,c,a){const{props:r,children:t,component:n}=e,{props:i,children:s,patchFlag:o}=c,l=n.emitsOptions;if(c.dirs||c.transition)return!0;if(a&&o>=0){if(o&1024)return!0;if(o&16)return r?Ac(r,i,l):!!i;if(o&8){const f=c.dynamicProps;for(let h=0;h<f.length;h++){const u=f[h];if(i[u]!==r[u]&&!e8(l,u))return!0}}}else return(t||s)&&(!s||!s.$stable)?!0:r===i?!1:r?i?Ac(r,i,l):!0:!!i;return!1}function Ac(e,c,a){const r=Object.keys(c);if(r.length!==Object.keys(e).length)return!0;for(let t=0;t<r.length;t++){const n=r[t];if(c[n]!==e[n]&&!e8(a,n))return!0}return!1}function Bp({vnode:e,parent:c},a){for(;c;){const r=c.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=c.vnode).el=a,c=c.parent;else break}}const xr="components";function b4(e,c){return qp(xr,e,!0,c)||e}const Up=Symbol.for("v-ndc");function qp(e,c,a=!0,r=!1){const t=g1||_1;if(t){const n=t.type;if(e===xr){const s=Fz(n,!1);if(s&&(s===c||s===L2(c)||s===Y0(L2(c))))return n}const i=_c(t[e]||n[e],c)||_c(t.appContext[e],c);return!i&&r?n:i}}function _c(e,c){return e&&(e[c]||e[L2(c)]||e[Y0(L2(c))])}const $p=e=>e.__isSuspense;function Wp(e,c){c&&c.pendingBranch?q(e)?c.effects.push(...e):c.effects.push(e):Ep(e)}const Gp=Symbol.for("v-scx"),jp=()=>n2(Gp),X6={};function t4(e,c,a){return yr(e,c,a)}function yr(e,c,{immediate:a,deep:r,flush:t,once:n,onTrack:i,onTrigger:s}=u1){if(c&&n){const R=c;c=(...Y)=>{R(...Y),D()}}const o=_1,l=R=>r===!0?R:x3(R,r===!1?1:void 0);let f,h=!1,u=!1;if(V1(e)?(f=()=>e.value,h=b0(e)):k2(e)?(f=()=>l(e),h=!0):q(e)?(u=!0,h=e.some(R=>k2(R)||b0(R)),f=()=>e.map(R=>{if(V1(R))return R.value;if(k2(R))return l(R);if(j(R))return n3(R,o,2)})):j(e)?c?f=()=>n3(e,o,2):f=()=>(d&&d(),f2(e,o,3,[z])):f=r2,c&&r){const R=f;f=()=>x3(R())}let d,z=R=>{d=S.onStop=()=>{n3(R,o,4),d=S.onStop=void 0}},y;if(i8)if(z=r2,c?a&&f2(c,o,3,[f(),u?[]:void 0,z]):f(),t==="sync"){const R=jp();y=R.__watcherHandles||(R.__watcherHandles=[])}else return r2;let w=u?new Array(e.length).fill(X6):X6;const V=()=>{if(!(!S.active||!S.dirty))if(c){const R=S.run();(r||h||(u?R.some((Y,Z)=>h3(Y,w[Z])):h3(R,w)))&&(d&&d(),f2(c,o,3,[R,w===X6?void 0:u&&w[0]===X6?[]:w,z]),w=R)}else S.run()};V.allowRecurse=!!c;let g;t==="sync"?g=V:t==="post"?g=()=>q1(V,o&&o.suspense):(V.pre=!0,o&&(V.id=o.uid),g=()=>L7(V));const S=new d7(f,r2,g),F=Ja(),D=()=>{S.stop(),F&&f7(F.effects,S)};return c?a?V():w=S.run():t==="post"?q1(S.run.bind(S),o&&o.suspense):S.run(),y&&y.push(D),D}function Kp(e,c,a){const r=this.proxy,t=b1(e)?e.includes(".")?Nr(r,e):()=>r[e]:e.bind(r,r);let n;j(c)?n=c:(n=c.handler,a=c);const i=x6(this),s=yr(t,n.bind(r),a);return i(),s}function Nr(e,c){const a=c.split(".");return()=>{let r=e;for(let t=0;t<a.length&&r;t++)r=r[a[t]];return r}}function x3(e,c,a=0,r){if(!f1(e)||e.__v_skip)return e;if(c&&c>0){if(a>=c)return e;a++}if(r=r||new Set,r.has(e))return e;if(r.add(e),V1(e))x3(e.value,c,a,r);else if(q(e))for(let t=0;t<e.length;t++)x3(e[t],c,a,r);else if(g4(e)||a4(e))e.forEach(t=>{x3(t,c,a,r)});else if(Wa(e))for(const t in e)x3(e[t],c,a,r);return e}function kc(e,c){if(g1===null)return e;const a=s8(g1)||g1.proxy,r=e.dirs||(e.dirs=[]);for(let t=0;t<c.length;t++){let[n,i,s,o=u1]=c[t];n&&(j(n)&&(n={mounted:n,updated:n}),n.deep&&x3(i),r.push({dir:n,instance:a,value:i,oldValue:void 0,arg:s,modifiers:o}))}return e}function M3(e,c,a,r){const t=e.dirs,n=c&&c.dirs;for(let i=0;i<t.length;i++){const s=t[i];n&&(s.oldValue=n[i].value);let o=s.dir[r];o&&(U3(),f2(o,a,8,[e.el,s,e,c]),q3())}}/*! #__NO_SIDE_EFFECTS__ */function b7(e,c){return j(e)?T1({name:e.name},c,{setup:e}):e}const B4=e=>!!e.type.__asyncLoader,Sr=e=>e.type.__isKeepAlive;function Zp(e,c){wr(e,"a",c)}function Yp(e,c){wr(e,"da",c)}function wr(e,c,a=_1){const r=e.__wdc||(e.__wdc=()=>{let t=a;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(r8(c,r,a),a){let t=a.parent;for(;t&&t.parent;)Sr(t.parent.vnode)&&Xp(r,c,a,t),t=t.parent}}function Xp(e,c,a,r){const t=r8(c,e,r,!0);Ar(()=>{f7(r[c],t)},a)}function r8(e,c,a=_1,r=!1){if(a){const t=a[e]||(a[e]=[]),n=c.__weh||(c.__weh=(...i)=>{if(a.isUnmounted)return;U3();const s=x6(a),o=f2(c,a,e,i);return s(),q3(),o});return r?t.unshift(n):t.push(n),n}}const B2=e=>(c,a=_1)=>(!i8||e==="sp")&&r8(e,(...r)=>c(...r),a),Jp=B2("bm"),Qp=B2("m"),cz=B2("bu"),ez=B2("u"),az=B2("bum"),Ar=B2("um"),rz=B2("sp"),tz=B2("rtg"),nz=B2("rtc");function iz(e,c=_1){r8("ec",e,c)}function sz(e,c,a,r){let t;const n=a&&a[r];if(q(e)||b1(e)){t=new Array(e.length);for(let i=0,s=e.length;i<s;i++)t[i]=c(e[i],i,void 0,n&&n[i])}else if(typeof e=="number"){t=new Array(e);for(let i=0;i<e;i++)t[i]=c(i+1,i,void 0,n&&n[i])}else if(f1(e))if(e[Symbol.iterator])t=Array.from(e,(i,s)=>c(i,s,void 0,n&&n[s]));else{const i=Object.keys(e);t=new Array(i.length);for(let s=0,o=i.length;s<o;s++){const l=i[s];t[s]=c(e[l],l,s,n&&n[s])}}else t=[];return a&&(a[r]=t),t}function y3(e,c,a={},r,t){if(g1.isCE||g1.parent&&B4(g1.parent)&&g1.parent.isCE)return c!=="default"&&(a.name=c),L1("slot",a,r&&r());let n=e[c];n&&n._c&&(n._d=!1),S1();const i=n&&_r(n(a)),s=T2(a2,{key:a.key||i&&i.key||`_${c}`},i||(r?r():[]),i&&e._===1?64:-2);return!t&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),n&&n._c&&(n._d=!0),s}function _r(e){return e.some(c=>N0(c)?!(c.type===u3||c.type===a2&&!_r(c.children)):!0)?e:null}const g5=e=>e?qr(e)?s8(e)||e.proxy:g5(e.parent):null,U4=T1(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>g5(e.parent),$root:e=>g5(e.root),$emit:e=>e.emit,$options:e=>x7(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,L7(e.update)}),$nextTick:e=>e.n||(e.n=c8.bind(e.proxy)),$watch:e=>Kp.bind(e)}),Z8=(e,c)=>e!==u1&&!e.__isScriptSetup&&c1(e,c),oz={get({_:e},c){const{ctx:a,setupState:r,data:t,props:n,accessCache:i,type:s,appContext:o}=e;let l;if(c[0]!=="$"){const d=i[c];if(d!==void 0)switch(d){case 1:return r[c];case 2:return t[c];case 4:return a[c];case 3:return n[c]}else{if(Z8(r,c))return i[c]=1,r[c];if(t!==u1&&c1(t,c))return i[c]=2,t[c];if((l=e.propsOptions[0])&&c1(l,c))return i[c]=3,n[c];if(a!==u1&&c1(a,c))return i[c]=4,a[c];L5&&(i[c]=0)}}const f=U4[c];let h,u;if(f)return c==="$attrs"&&G1(e,"get",c),f(e);if((h=s.__cssModules)&&(h=h[c]))return h;if(a!==u1&&c1(a,c))return i[c]=4,a[c];if(u=o.config.globalProperties,c1(u,c))return u[c]},set({_:e},c,a){const{data:r,setupState:t,ctx:n}=e;return Z8(t,c)?(t[c]=a,!0):r!==u1&&c1(r,c)?(r[c]=a,!0):c1(e.props,c)||c[0]==="$"&&c.slice(1)in e?!1:(n[c]=a,!0)},has({_:{data:e,setupState:c,accessCache:a,ctx:r,appContext:t,propsOptions:n}},i){let s;return!!a[i]||e!==u1&&c1(e,i)||Z8(c,i)||(s=n[0])&&c1(s,i)||c1(r,i)||c1(U4,i)||c1(t.config.globalProperties,i)},defineProperty(e,c,a){return a.get!=null?e._.accessCache[c]=0:c1(a,"value")&&this.set(e,c,a.value,null),Reflect.defineProperty(e,c,a)}};function Tc(e){return q(e)?e.reduce((c,a)=>(c[a]=null,c),{}):e}let L5=!0;function lz(e){const c=x7(e),a=e.proxy,r=e.ctx;L5=!1,c.beforeCreate&&Pc(c.beforeCreate,e,"bc");const{data:t,computed:n,methods:i,watch:s,provide:o,inject:l,created:f,beforeMount:h,mounted:u,beforeUpdate:d,updated:z,activated:y,deactivated:w,beforeDestroy:V,beforeUnmount:g,destroyed:S,unmounted:F,render:D,renderTracked:R,renderTriggered:Y,errorCaptured:Z,serverPrefetch:$,expose:h1,inheritAttrs:E1,components:j1,directives:c2,filters:V3}=c;if(l&&fz(l,r,null),i)for(const s1 in i){const a1=i[s1];j(a1)&&(r[s1]=a1.bind(a))}if(t){const s1=t.call(a,a);f1(s1)&&(e.data=b6(s1))}if(L5=!0,n)for(const s1 in n){const a1=n[s1],b2=j(a1)?a1.bind(a,a):j(a1.get)?a1.get.bind(a,a):r2,$2=!j(a1)&&j(a1.set)?a1.set.bind(a):r2,m2=l1({get:b2,set:$2});Object.defineProperty(r,s1,{enumerable:!0,configurable:!0,get:()=>m2.value,set:B1=>m2.value=B1})}if(s)for(const s1 in s)kr(s[s1],r,a,s1);if(o){const s1=j(o)?o.call(a):o;Reflect.ownKeys(s1).forEach(a1=>{v0(a1,s1[a1])})}f&&Pc(f,e,"c");function e1(s1,a1){q(a1)?a1.forEach(b2=>s1(b2.bind(a))):a1&&s1(a1.bind(a))}if(e1(Jp,h),e1(Qp,u),e1(cz,d),e1(ez,z),e1(Zp,y),e1(Yp,w),e1(iz,Z),e1(nz,R),e1(tz,Y),e1(az,g),e1(Ar,F),e1(rz,$),q(h1))if(h1.length){const s1=e.exposed||(e.exposed={});h1.forEach(a1=>{Object.defineProperty(s1,a1,{get:()=>a[a1],set:b2=>a[a1]=b2})})}else e.exposed||(e.exposed={});D&&e.render===r2&&(e.render=D),E1!=null&&(e.inheritAttrs=E1),j1&&(e.components=j1),c2&&(e.directives=c2)}function fz(e,c,a=r2){q(e)&&(e=b5(e));for(const r in e){const t=e[r];let n;f1(t)?"default"in t?n=n2(t.from||r,t.default,!0):n=n2(t.from||r):n=n2(t),V1(n)?Object.defineProperty(c,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):c[r]=n}}function Pc(e,c,a){f2(q(e)?e.map(r=>r.bind(c.proxy)):e.bind(c.proxy),c,a)}function kr(e,c,a,r){const t=r.includes(".")?Nr(a,r):()=>a[r];if(b1(e)){const n=c[e];j(n)&&t4(t,n)}else if(j(e))t4(t,e.bind(a));else if(f1(e))if(q(e))e.forEach(n=>kr(n,c,a,r));else{const n=j(e.handler)?e.handler.bind(a):c[e.handler];j(n)&&t4(t,n,e)}}function x7(e){const c=e.type,{mixins:a,extends:r}=c,{mixins:t,optionsCache:n,config:{optionMergeStrategies:i}}=e.appContext,s=n.get(c);let o;return s?o=s:!t.length&&!a&&!r?o=c:(o={},t.length&&t.forEach(l=>y0(o,l,i,!0)),y0(o,c,i)),f1(c)&&n.set(c,o),o}function y0(e,c,a,r=!1){const{mixins:t,extends:n}=c;n&&y0(e,n,a,!0),t&&t.forEach(i=>y0(e,i,a,!0));for(const i in c)if(!(r&&i==="expose")){const s=hz[i]||a&&a[i];e[i]=s?s(e[i],c[i]):c[i]}return e}const hz={data:Ec,props:Ic,emits:Ic,methods:I4,computed:I4,beforeCreate:O1,created:O1,beforeMount:O1,mounted:O1,beforeUpdate:O1,updated:O1,beforeDestroy:O1,beforeUnmount:O1,destroyed:O1,unmounted:O1,activated:O1,deactivated:O1,errorCaptured:O1,serverPrefetch:O1,components:I4,directives:I4,watch:mz,provide:Ec,inject:uz};function Ec(e,c){return c?e?function(){return T1(j(e)?e.call(this,this):e,j(c)?c.call(this,this):c)}:c:e}function uz(e,c){return I4(b5(e),b5(c))}function b5(e){if(q(e)){const c={};for(let a=0;a<e.length;a++)c[e[a]]=e[a];return c}return e}function O1(e,c){return e?[...new Set([].concat(e,c))]:c}function I4(e,c){return e?T1(Object.create(null),e,c):c}function Ic(e,c){return e?q(e)&&q(c)?[...new Set([...e,...c])]:T1(Object.create(null),Tc(e),Tc(c??{})):c}function mz(e,c){if(!e)return c;if(!c)return e;const a=T1(Object.create(null),e);for(const r in c)a[r]=O1(e[r],c[r]);return a}function Tr(){return{app:null,config:{isNativeTag:$d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vz=0;function dz(e,c){return function(r,t=null){j(r)||(r=T1({},r)),t!=null&&!f1(t)&&(t=null);const n=Tr(),i=new WeakSet;let s=!1;const o=n.app={_uid:vz++,_component:r,_props:t,_container:null,_context:n,_instance:null,version:Oz,get config(){return n.config},set config(l){},use(l,...f){return i.has(l)||(l&&j(l.install)?(i.add(l),l.install(o,...f)):j(l)&&(i.add(l),l(o,...f))),o},mixin(l){return n.mixins.includes(l)||n.mixins.push(l),o},component(l,f){return f?(n.components[l]=f,o):n.components[l]},directive(l,f){return f?(n.directives[l]=f,o):n.directives[l]},mount(l,f,h){if(!s){const u=L1(r,t);return u.appContext=n,h===!0?h="svg":h===!1&&(h=void 0),f&&c?c(u,l):e(u,l,h),s=!0,o._container=l,l.__vue_app__=o,s8(u.component)||u.component.proxy}},unmount(){s&&(e(null,o._container),delete o._container.__vue_app__)},provide(l,f){return n.provides[l]=f,o},runWithContext(l){const f=n4;n4=o;try{return l()}finally{n4=f}}};return o}}let n4=null;function v0(e,c){if(_1){let a=_1.provides;const r=_1.parent&&_1.parent.provides;r===a&&(a=_1.provides=Object.create(r)),a[e]=c}}function n2(e,c,a=!1){const r=_1||g1;if(r||n4){const t=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:n4._context.provides;if(t&&e in t)return t[e];if(arguments.length>1)return a&&j(c)?c.call(r&&r.proxy):c}}function pz(){return!!(_1||g1||n4)}function zz(e,c,a,r=!1){const t={},n={};g0(n,n8,1),e.propsDefaults=Object.create(null),Pr(e,c,t,n);for(const i in e.propsOptions[0])i in t||(t[i]=void 0);a?e.props=r?t:fr(t):e.type.props?e.props=t:e.props=n,e.attrs=n}function Hz(e,c,a,r){const{props:t,attrs:n,vnode:{patchFlag:i}}=e,s=Q(t),[o]=e.propsOptions;let l=!1;if((r||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let u=f[h];if(e8(e.emitsOptions,u))continue;const d=c[u];if(o)if(c1(n,u))d!==n[u]&&(n[u]=d,l=!0);else{const z=L2(u);t[z]=x5(o,s,z,d,e,!1)}else d!==n[u]&&(n[u]=d,l=!0)}}}else{Pr(e,c,t,n)&&(l=!0);let f;for(const h in s)(!c||!c1(c,h)&&((f=L4(h))===h||!c1(c,f)))&&(o?a&&(a[h]!==void 0||a[f]!==void 0)&&(t[h]=x5(o,s,h,void 0,e,!0)):delete t[h]);if(n!==s)for(const h in n)(!c||!c1(c,h))&&(delete n[h],l=!0)}l&&_2(e,"set","$attrs")}function Pr(e,c,a,r){const[t,n]=e.propsOptions;let i=!1,s;if(c)for(let o in c){if(O4(o))continue;const l=c[o];let f;t&&c1(t,f=L2(o))?!n||!n.includes(f)?a[f]=l:(s||(s={}))[f]=l:e8(e.emitsOptions,o)||(!(o in r)||l!==r[o])&&(r[o]=l,i=!0)}if(n){const o=Q(a),l=s||u1;for(let f=0;f<n.length;f++){const h=n[f];a[h]=x5(t,o,h,l[h],e,!c1(l,h))}}return i}function x5(e,c,a,r,t,n){const i=e[a];if(i!=null){const s=c1(i,"default");if(s&&r===void 0){const o=i.default;if(i.type!==Function&&!i.skipFactory&&j(o)){const{propsDefaults:l}=t;if(a in l)r=l[a];else{const f=x6(t);r=l[a]=o.call(null,c),f()}}else r=o}i[0]&&(n&&!s?r=!1:i[1]&&(r===""||r===L4(a))&&(r=!0))}return r}function Er(e,c,a=!1){const r=c.propsCache,t=r.get(e);if(t)return t;const n=e.props,i={},s=[];let o=!1;if(!j(e)){const f=h=>{o=!0;const[u,d]=Er(h,c,!0);T1(i,u),d&&s.push(...d)};!a&&c.mixins.length&&c.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!n&&!o)return f1(e)&&r.set(e,e4),e4;if(q(n))for(let f=0;f<n.length;f++){const h=L2(n[f]);Rc(h)&&(i[h]=u1)}else if(n)for(const f in n){const h=L2(f);if(Rc(h)){const u=n[f],d=i[h]=q(u)||j(u)?{type:u}:T1({},u);if(d){const z=Oc(Boolean,d.type),y=Oc(String,d.type);d[0]=z>-1,d[1]=y<0||z<y,(z>-1||c1(d,"default"))&&s.push(h)}}}const l=[i,s];return f1(e)&&r.set(e,l),l}function Rc(e){return e[0]!=="$"&&!O4(e)}function Fc(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Dc(e,c){return Fc(e)===Fc(c)}function Oc(e,c){return q(c)?c.findIndex(a=>Dc(a,e)):j(c)&&Dc(c,e)?0:-1}const Ir=e=>e[0]==="_"||e==="$stable",y7=e=>q(e)?e.map(p2):[p2(e)],Vz=(e,c,a)=>{if(c._n)return c;const r=h4((...t)=>y7(c(...t)),a);return r._c=!1,r},Rr=(e,c,a)=>{const r=e._ctx;for(const t in e){if(Ir(t))continue;const n=e[t];if(j(n))c[t]=Vz(t,n,r);else if(n!=null){const i=y7(n);c[t]=()=>i}}},Fr=(e,c)=>{const a=y7(c);e.slots.default=()=>a},Mz=(e,c)=>{if(e.vnode.shapeFlag&32){const a=c._;a?(e.slots=Q(c),g0(c,"_",a)):Rr(c,e.slots={})}else e.slots={},c&&Fr(e,c);g0(e.slots,n8,1)},Cz=(e,c,a)=>{const{vnode:r,slots:t}=e;let n=!0,i=u1;if(r.shapeFlag&32){const s=c._;s?a&&s===1?n=!1:(T1(t,c),!a&&s===1&&delete t._):(n=!c.$stable,Rr(c,t)),i=c}else c&&(Fr(e,c),i={default:1});if(n)for(const s in t)!Ir(s)&&i[s]==null&&delete t[s]};function y5(e,c,a,r,t=!1){if(q(e)){e.forEach((u,d)=>y5(u,c&&(q(c)?c[d]:c),a,r,t));return}if(B4(r)&&!t)return;const n=r.shapeFlag&4?s8(r.component)||r.component.proxy:r.el,i=t?null:n,{i:s,r:o}=e,l=c&&c.r,f=s.refs===u1?s.refs={}:s.refs,h=s.setupState;if(l!=null&&l!==o&&(b1(l)?(f[l]=null,c1(h,l)&&(h[l]=null)):V1(l)&&(l.value=null)),j(o))n3(o,s,12,[i,f]);else{const u=b1(o),d=V1(o);if(u||d){const z=()=>{if(e.f){const y=u?c1(h,o)?h[o]:f[o]:o.value;t?q(y)&&f7(y,n):q(y)?y.includes(n)||y.push(n):u?(f[o]=[n],c1(h,o)&&(h[o]=f[o])):(o.value=[n],e.k&&(f[e.k]=o.value))}else u?(f[o]=i,c1(h,o)&&(h[o]=i)):d&&(o.value=i,e.k&&(f[e.k]=i))};i?(z.id=-1,q1(z,a)):z()}}}const q1=Wp;function gz(e){return Lz(e)}function Lz(e,c){const a=Ga();a.__VUE__=!0;const{insert:r,remove:t,patchProp:n,createElement:i,createText:s,createComment:o,setText:l,setElementText:f,parentNode:h,nextSibling:u,setScopeId:d=r2,insertStaticContent:z}=e,y=(m,v,p,C=null,H=null,x=null,_=void 0,b=null,N=!!v.dynamicChildren)=>{if(m===v)return;m&&!T4(m,v)&&(C=M(m),B1(m,H,x,!0),m=null),v.patchFlag===-2&&(N=!1,v.dynamicChildren=null);const{type:L,ref:P,shapeFlag:U}=v;switch(L){case t8:w(m,v,p,C);break;case u3:V(m,v,p,C);break;case X8:m==null&&g(v,p,C,_);break;case a2:j1(m,v,p,C,H,x,_,b,N);break;default:U&1?D(m,v,p,C,H,x,_,b,N):U&6?c2(m,v,p,C,H,x,_,b,N):(U&64||U&128)&&L.process(m,v,p,C,H,x,_,b,N,I)}P!=null&&H&&y5(P,m&&m.ref,x,v||m,!v)},w=(m,v,p,C)=>{if(m==null)r(v.el=s(v.children),p,C);else{const H=v.el=m.el;v.children!==m.children&&l(H,v.children)}},V=(m,v,p,C)=>{m==null?r(v.el=o(v.children||""),p,C):v.el=m.el},g=(m,v,p,C)=>{[m.el,m.anchor]=z(m.children,v,p,C,m.el,m.anchor)},S=({el:m,anchor:v},p,C)=>{let H;for(;m&&m!==v;)H=u(m),r(m,p,C),m=H;r(v,p,C)},F=({el:m,anchor:v})=>{let p;for(;m&&m!==v;)p=u(m),t(m),m=p;t(v)},D=(m,v,p,C,H,x,_,b,N)=>{v.type==="svg"?_="svg":v.type==="math"&&(_="mathml"),m==null?R(v,p,C,H,x,_,b,N):$(m,v,H,x,_,b,N)},R=(m,v,p,C,H,x,_,b)=>{let N,L;const{props:P,shapeFlag:U,transition:O,dirs:G}=m;if(N=m.el=i(m.type,x,P&&P.is,P),U&8?f(N,m.children):U&16&&Z(m.children,N,null,C,H,Y8(m,x),_,b),G&&M3(m,null,C,"created"),Y(N,m,m.scopeId,_,C),P){for(const o1 in P)o1!=="value"&&!O4(o1)&&n(N,o1,null,P[o1],x,m.children,C,H,I1);"value"in P&&n(N,"value",null,P.value,x),(L=P.onVnodeBeforeMount)&&d2(L,C,m)}G&&M3(m,null,C,"beforeMount");const X=bz(H,O);X&&O.beforeEnter(N),r(N,v,p),((L=P&&P.onVnodeMounted)||X||G)&&q1(()=>{L&&d2(L,C,m),X&&O.enter(N),G&&M3(m,null,C,"mounted")},H)},Y=(m,v,p,C,H)=>{if(p&&d(m,p),C)for(let x=0;x<C.length;x++)d(m,C[x]);if(H){let x=H.subTree;if(v===x){const _=H.vnode;Y(m,_,_.scopeId,_.slotScopeIds,H.parent)}}},Z=(m,v,p,C,H,x,_,b,N=0)=>{for(let L=N;L<m.length;L++){const P=m[L]=b?X2(m[L]):p2(m[L]);y(null,P,v,p,C,H,x,_,b)}},$=(m,v,p,C,H,x,_)=>{const b=v.el=m.el;let{patchFlag:N,dynamicChildren:L,dirs:P}=v;N|=m.patchFlag&16;const U=m.props||u1,O=v.props||u1;let G;if(p&&C3(p,!1),(G=O.onVnodeBeforeUpdate)&&d2(G,p,v,m),P&&M3(v,m,p,"beforeUpdate"),p&&C3(p,!0),L?h1(m.dynamicChildren,L,b,p,C,Y8(v,H),x):_||a1(m,v,b,null,p,C,Y8(v,H),x,!1),N>0){if(N&16)E1(b,v,U,O,p,C,H);else if(N&2&&U.class!==O.class&&n(b,"class",null,O.class,H),N&4&&n(b,"style",U.style,O.style,H),N&8){const X=v.dynamicProps;for(let o1=0;o1<X.length;o1++){const p1=X[o1],y1=U[p1],s2=O[p1];(s2!==y1||p1==="value")&&n(b,p1,y1,s2,H,m.children,p,C,I1)}}N&1&&m.children!==v.children&&f(b,v.children)}else!_&&L==null&&E1(b,v,U,O,p,C,H);((G=O.onVnodeUpdated)||P)&&q1(()=>{G&&d2(G,p,v,m),P&&M3(v,m,p,"updated")},C)},h1=(m,v,p,C,H,x,_)=>{for(let b=0;b<v.length;b++){const N=m[b],L=v[b],P=N.el&&(N.type===a2||!T4(N,L)||N.shapeFlag&70)?h(N.el):p;y(N,L,P,null,C,H,x,_,!0)}},E1=(m,v,p,C,H,x,_)=>{if(p!==C){if(p!==u1)for(const b in p)!O4(b)&&!(b in C)&&n(m,b,p[b],null,_,v.children,H,x,I1);for(const b in C){if(O4(b))continue;const N=C[b],L=p[b];N!==L&&b!=="value"&&n(m,b,L,N,_,v.children,H,x,I1)}"value"in C&&n(m,"value",p.value,C.value,_)}},j1=(m,v,p,C,H,x,_,b,N)=>{const L=v.el=m?m.el:s(""),P=v.anchor=m?m.anchor:s("");let{patchFlag:U,dynamicChildren:O,slotScopeIds:G}=v;G&&(b=b?b.concat(G):G),m==null?(r(L,p,C),r(P,p,C),Z(v.children||[],p,P,H,x,_,b,N)):U>0&&U&64&&O&&m.dynamicChildren?(h1(m.dynamicChildren,O,p,H,x,_,b),(v.key!=null||H&&v===H.subTree)&&Dr(m,v,!0)):a1(m,v,p,P,H,x,_,b,N)},c2=(m,v,p,C,H,x,_,b,N)=>{v.slotScopeIds=b,m==null?v.shapeFlag&512?H.ctx.activate(v,p,C,_,N):V3(v,p,C,H,x,_,N):e2(m,v,N)},V3=(m,v,p,C,H,x,_)=>{const b=m.component=Tz(m,C,H);if(Sr(m)&&(b.ctx.renderer=I),Pz(b),b.asyncDep){if(H&&H.registerDep(b,e1),!m.el){const N=b.subTree=L1(u3);V(null,N,v,p)}}else e1(b,m,v,p,H,x,_)},e2=(m,v,p)=>{const C=v.component=m.component;if(Op(m,v,p))if(C.asyncDep&&!C.asyncResolved){s1(C,v,p);return}else C.next=v,Pp(C.update),C.effect.dirty=!0,C.update();else v.el=m.el,C.vnode=v},e1=(m,v,p,C,H,x,_)=>{const b=()=>{if(m.isMounted){let{next:P,bu:U,u:O,parent:G,vnode:X}=m;{const K3=Or(m);if(K3){P&&(P.el=X.el,s1(m,P,_)),K3.asyncDep.then(()=>{m.isUnmounted||b()});return}}let o1=P,p1;C3(m,!1),P?(P.el=X.el,s1(m,P,_)):P=X,U&&u0(U),(p1=P.props&&P.props.onVnodeBeforeUpdate)&&d2(p1,G,P,X),C3(m,!0);const y1=K8(m),s2=m.subTree;m.subTree=y1,y(s2,y1,h(s2.el),M(s2),m,H,x),P.el=y1.el,o1===null&&Bp(m,y1.el),O&&q1(O,H),(p1=P.props&&P.props.onVnodeUpdated)&&q1(()=>d2(p1,G,P,X),H)}else{let P;const{el:U,props:O}=v,{bm:G,m:X,parent:o1}=m,p1=B4(v);if(C3(m,!1),G&&u0(G),!p1&&(P=O&&O.onVnodeBeforeMount)&&d2(P,o1,v),C3(m,!0),U&&d1){const y1=()=>{m.subTree=K8(m),d1(U,m.subTree,m,H,null)};p1?v.type.__asyncLoader().then(()=>!m.isUnmounted&&y1()):y1()}else{const y1=m.subTree=K8(m);y(null,y1,p,C,m,H,x),v.el=y1.el}if(X&&q1(X,H),!p1&&(P=O&&O.onVnodeMounted)){const y1=v;q1(()=>d2(P,o1,y1),H)}(v.shapeFlag&256||o1&&B4(o1.vnode)&&o1.vnode.shapeFlag&256)&&m.a&&q1(m.a,H),m.isMounted=!0,v=p=C=null}},N=m.effect=new d7(b,r2,()=>L7(L),m.scope),L=m.update=()=>{N.dirty&&N.run()};L.id=m.uid,C3(m,!0),L()},s1=(m,v,p)=>{v.component=m;const C=m.vnode.props;m.vnode=v,m.next=null,Hz(m,v.props,C,p),Cz(m,v.children,p),U3(),wc(m),q3()},a1=(m,v,p,C,H,x,_,b,N=!1)=>{const L=m&&m.children,P=m?m.shapeFlag:0,U=v.children,{patchFlag:O,shapeFlag:G}=v;if(O>0){if(O&128){$2(L,U,p,C,H,x,_,b,N);return}else if(O&256){b2(L,U,p,C,H,x,_,b,N);return}}G&8?(P&16&&I1(L,H,x),U!==L&&f(p,U)):P&16?G&16?$2(L,U,p,C,H,x,_,b,N):I1(L,H,x,!0):(P&8&&f(p,""),G&16&&Z(U,p,C,H,x,_,b,N))},b2=(m,v,p,C,H,x,_,b,N)=>{m=m||e4,v=v||e4;const L=m.length,P=v.length,U=Math.min(L,P);let O;for(O=0;O<U;O++){const G=v[O]=N?X2(v[O]):p2(v[O]);y(m[O],G,p,null,H,x,_,b,N)}L>P?I1(m,H,x,!0,!1,U):Z(v,p,C,H,x,_,b,N,U)},$2=(m,v,p,C,H,x,_,b,N)=>{let L=0;const P=v.length;let U=m.length-1,O=P-1;for(;L<=U&&L<=O;){const G=m[L],X=v[L]=N?X2(v[L]):p2(v[L]);if(T4(G,X))y(G,X,p,null,H,x,_,b,N);else break;L++}for(;L<=U&&L<=O;){const G=m[U],X=v[O]=N?X2(v[O]):p2(v[O]);if(T4(G,X))y(G,X,p,null,H,x,_,b,N);else break;U--,O--}if(L>U){if(L<=O){const G=O+1,X=G<P?v[G].el:C;for(;L<=O;)y(null,v[L]=N?X2(v[L]):p2(v[L]),p,X,H,x,_,b,N),L++}}else if(L>O)for(;L<=U;)B1(m[L],H,x,!0),L++;else{const G=L,X=L,o1=new Map;for(L=X;L<=O;L++){const K1=v[L]=N?X2(v[L]):p2(v[L]);K1.key!=null&&o1.set(K1.key,L)}let p1,y1=0;const s2=O-X+1;let K3=!1,zc=0;const k4=new Array(s2);for(L=0;L<s2;L++)k4[L]=0;for(L=G;L<=U;L++){const K1=m[L];if(y1>=s2){B1(K1,H,x,!0);continue}let v2;if(K1.key!=null)v2=o1.get(K1.key);else for(p1=X;p1<=O;p1++)if(k4[p1-X]===0&&T4(K1,v[p1])){v2=p1;break}v2===void 0?B1(K1,H,x,!0):(k4[v2-X]=L+1,v2>=zc?zc=v2:K3=!0,y(K1,v[v2],p,null,H,x,_,b,N),y1++)}const Hc=K3?xz(k4):e4;for(p1=Hc.length-1,L=s2-1;L>=0;L--){const K1=X+L,v2=v[K1],Vc=K1+1<P?v[K1+1].el:C;k4[L]===0?y(null,v2,p,Vc,H,x,_,b,N):K3&&(p1<0||L!==Hc[p1]?m2(v2,p,Vc,2):p1--)}}},m2=(m,v,p,C,H=null)=>{const{el:x,type:_,transition:b,children:N,shapeFlag:L}=m;if(L&6){m2(m.component.subTree,v,p,C);return}if(L&128){m.suspense.move(v,p,C);return}if(L&64){_.move(m,v,p,I);return}if(_===a2){r(x,v,p);for(let U=0;U<N.length;U++)m2(N[U],v,p,C);r(m.anchor,v,p);return}if(_===X8){S(m,v,p);return}if(C!==2&&L&1&&b)if(C===0)b.beforeEnter(x),r(x,v,p),q1(()=>b.enter(x),H);else{const{leave:U,delayLeave:O,afterLeave:G}=b,X=()=>r(x,v,p),o1=()=>{U(x,()=>{X(),G&&G()})};O?O(x,X,o1):o1()}else r(x,v,p)},B1=(m,v,p,C=!1,H=!1)=>{const{type:x,props:_,ref:b,children:N,dynamicChildren:L,shapeFlag:P,patchFlag:U,dirs:O}=m;if(b!=null&&y5(b,null,p,m,!0),P&256){v.ctx.deactivate(m);return}const G=P&1&&O,X=!B4(m);let o1;if(X&&(o1=_&&_.onVnodeBeforeUnmount)&&d2(o1,v,m),P&6)W6(m.component,p,C);else{if(P&128){m.suspense.unmount(p,C);return}G&&M3(m,null,v,"beforeUnmount"),P&64?m.type.remove(m,v,p,H,I,C):L&&(x!==a2||U>0&&U&64)?I1(L,v,p,!1,!0):(x===a2&&U&384||!H&&P&16)&&I1(N,v,p),C&&G3(m)}(X&&(o1=_&&_.onVnodeUnmounted)||G)&&q1(()=>{o1&&d2(o1,v,m),G&&M3(m,null,v,"unmounted")},p)},G3=m=>{const{type:v,el:p,anchor:C,transition:H}=m;if(v===a2){j3(p,C);return}if(v===X8){F(m);return}const x=()=>{t(p),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(m.shapeFlag&1&&H&&!H.persisted){const{leave:_,delayLeave:b}=H,N=()=>_(p,x);b?b(m.el,x,N):N()}else x()},j3=(m,v)=>{let p;for(;m!==v;)p=u(m),t(m),m=p;t(v)},W6=(m,v,p)=>{const{bum:C,scope:H,update:x,subTree:_,um:b}=m;C&&u0(C),H.stop(),x&&(x.active=!1,B1(_,m,v,p)),b&&q1(b,v),q1(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},I1=(m,v,p,C=!1,H=!1,x=0)=>{for(let _=x;_<m.length;_++)B1(m[_],v,p,C,H)},M=m=>m.shapeFlag&6?M(m.component.subTree):m.shapeFlag&128?m.suspense.next():u(m.anchor||m.el);let T=!1;const A=(m,v,p)=>{m==null?v._vnode&&B1(v._vnode,null,null,!0):y(v._vnode||null,m,v,null,null,null,p),T||(T=!0,wc(),Mr(),T=!1),v._vnode=m},I={p:y,um:B1,m:m2,r:G3,mt:V3,mc:Z,pc:a1,pbc:h1,n:M,o:e};let r1,d1;return c&&([r1,d1]=c(I)),{render:A,hydrate:r1,createApp:dz(A,r1)}}function Y8({type:e,props:c},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&c&&c.encoding&&c.encoding.includes("html")?void 0:a}function C3({effect:e,update:c},a){e.allowRecurse=c.allowRecurse=a}function bz(e,c){return(!e||e&&!e.pendingBranch)&&c&&!c.persisted}function Dr(e,c,a=!1){const r=e.children,t=c.children;if(q(r)&&q(t))for(let n=0;n<r.length;n++){const i=r[n];let s=t[n];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=t[n]=X2(t[n]),s.el=i.el),a||Dr(i,s)),s.type===t8&&(s.el=i.el)}}function xz(e){const c=e.slice(),a=[0];let r,t,n,i,s;const o=e.length;for(r=0;r<o;r++){const l=e[r];if(l!==0){if(t=a[a.length-1],e[t]<l){c[r]=t,a.push(r);continue}for(n=0,i=a.length-1;n<i;)s=n+i>>1,e[a[s]]<l?n=s+1:i=s;l<e[a[n]]&&(n>0&&(c[r]=a[n-1]),a[n]=r)}}for(n=a.length,i=a[n-1];n-- >0;)a[n]=i,i=c[i];return a}function Or(e){const c=e.subTree.component;if(c)return c.asyncDep&&!c.asyncResolved?c:Or(c)}const yz=e=>e.__isTeleport,a2=Symbol.for("v-fgt"),t8=Symbol.for("v-txt"),u3=Symbol.for("v-cmt"),X8=Symbol.for("v-stc"),q4=[];let o2=null;function S1(e=!1){q4.push(o2=e?null:[])}function Nz(){q4.pop(),o2=q4[q4.length-1]||null}let t6=1;function Bc(e){t6+=e}function Br(e){return e.dynamicChildren=t6>0?o2||e4:null,Nz(),t6>0&&o2&&o2.push(e),e}function S2(e,c,a,r,t,n){return Br(i1(e,c,a,r,t,n,!0))}function T2(e,c,a,r,t){return Br(L1(e,c,a,r,t,!0))}function N0(e){return e?e.__v_isVNode===!0:!1}function T4(e,c){return e.type===c.type&&e.key===c.key}const n8="__vInternal",Ur=({key:e})=>e??null,d0=({ref:e,ref_key:c,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?b1(e)||V1(e)||j(e)?{i:g1,r:e,k:c,f:!!a}:e:null);function i1(e,c=null,a=null,r=0,t=null,n=e===a2?0:1,i=!1,s=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:c,key:c&&Ur(c),ref:c&&d0(c),scopeId:a8,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:r,dynamicProps:t,dynamicChildren:null,appContext:null,ctx:g1};return s?(N7(o,a),n&128&&e.normalize(o)):a&&(o.shapeFlag|=b1(a)?8:16),t6>0&&!i&&o2&&(o.patchFlag>0||n&6)&&o.patchFlag!==32&&o2.push(o),o}const L1=Sz;function Sz(e,c=null,a=null,r=0,t=null,n=!1){if((!e||e===Up)&&(e=u3),N0(e)){const s=u4(e,c,!0);return a&&N7(s,a),t6>0&&!n&&o2&&(s.shapeFlag&6?o2[o2.indexOf(e)]=s:o2.push(s)),s.patchFlag|=-2,s}if(Dz(e)&&(e=e.__vccOpts),c){c=wz(c);let{class:s,style:o}=c;s&&!b1(s)&&(c.class=m7(s)),f1(o)&&(ur(o)&&!q(o)&&(o=T1({},o)),c.style=u7(o))}const i=b1(e)?1:$p(e)?128:yz(e)?64:f1(e)?4:j(e)?2:0;return i1(e,c,a,r,t,i,n,!0)}function wz(e){return e?ur(e)||n8 in e?T1({},e):e:null}function u4(e,c,a=!1){const{props:r,ref:t,patchFlag:n,children:i}=e,s=c?Az(r||{},c):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ur(s),ref:c&&c.ref?a&&t?q(t)?t.concat(d0(c)):[t,d0(c)]:d0(c):t,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:c&&e.type!==a2?n===-1?16:n|16:n,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&u4(e.ssContent),ssFallback:e.ssFallback&&u4(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function i4(e=" ",c=0){return L1(t8,null,e,c)}function Uc(e="",c=!1){return c?(S1(),T2(u3,null,e)):L1(u3,null,e)}function p2(e){return e==null||typeof e=="boolean"?L1(u3):q(e)?L1(a2,null,e.slice()):typeof e=="object"?X2(e):L1(t8,null,String(e))}function X2(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:u4(e)}function N7(e,c){let a=0;const{shapeFlag:r}=e;if(c==null)c=null;else if(q(c))a=16;else if(typeof c=="object")if(r&65){const t=c.default;t&&(t._c&&(t._d=!1),N7(e,t()),t._c&&(t._d=!0));return}else{a=32;const t=c._;!t&&!(n8 in c)?c._ctx=g1:t===3&&g1&&(g1.slots._===1?c._=1:(c._=2,e.patchFlag|=1024))}else j(c)?(c={default:c,_ctx:g1},a=32):(c=String(c),r&64?(a=16,c=[i4(c)]):a=8);e.children=c,e.shapeFlag|=a}function Az(...e){const c={};for(let a=0;a<e.length;a++){const r=e[a];for(const t in r)if(t==="class")c.class!==r.class&&(c.class=m7([c.class,r.class]));else if(t==="style")c.style=u7([c.style,r.style]);else if(K0(t)){const n=c[t],i=r[t];i&&n!==i&&!(q(n)&&n.includes(i))&&(c[t]=n?[].concat(n,i):i)}else t!==""&&(c[t]=r[t])}return c}function d2(e,c,a,r=null){f2(e,c,7,[a,r])}const _z=Tr();let kz=0;function Tz(e,c,a){const r=e.type,t=(c?c.appContext:e.appContext)||_z,n={uid:kz++,vnode:e,type:r,parent:c,appContext:t,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ya(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(t.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Er(r,t),emitsOptions:gr(r,t),emit:null,emitted:null,propsDefaults:u1,inheritAttrs:r.inheritAttrs,ctx:u1,data:u1,props:u1,attrs:u1,slots:u1,refs:u1,setupState:u1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=c?c.root:n,n.emit=Rp.bind(null,n),e.ce&&e.ce(n),n}let _1=null,S0,N5;{const e=Ga(),c=(a,r)=>{let t;return(t=e[a])||(t=e[a]=[]),t.push(r),n=>{t.length>1?t.forEach(i=>i(n)):t[0](n)}};S0=c("__VUE_INSTANCE_SETTERS__",a=>_1=a),N5=c("__VUE_SSR_SETTERS__",a=>i8=a)}const x6=e=>{const c=_1;return S0(e),e.scope.on(),()=>{e.scope.off(),S0(c)}},qc=()=>{_1&&_1.scope.off(),S0(null)};function qr(e){return e.vnode.shapeFlag&4}let i8=!1;function Pz(e,c=!1){c&&N5(c);const{props:a,children:r}=e.vnode,t=qr(e);zz(e,a,t,c),Mz(e,r);const n=t?Ez(e,c):void 0;return c&&N5(!1),n}function Ez(e,c){const a=e.type;e.accessCache=Object.create(null),e.proxy=J0(new Proxy(e.ctx,oz));const{setup:r}=a;if(r){const t=e.setupContext=r.length>1?Rz(e):null,n=x6(e);U3();const i=n3(r,e,0,[e.props,t]);if(q3(),n(),qa(i)){if(i.then(qc,qc),c)return i.then(s=>{$c(e,s,c)}).catch(s=>{Q0(s,e,0)});e.asyncDep=i}else $c(e,i,c)}else $r(e,c)}function $c(e,c,a){j(c)?e.type.__ssrInlineRender?e.ssrRender=c:e.render=c:f1(c)&&(e.setupState=pr(c)),$r(e,a)}let Wc;function $r(e,c,a){const r=e.type;if(!e.render){if(!c&&Wc&&!r.render){const t=r.template||x7(e).template;if(t){const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:s,compilerOptions:o}=r,l=T1(T1({isCustomElement:n,delimiters:s},i),o);r.render=Wc(t,l)}}e.render=r.render||r2}{const t=x6(e);U3();try{lz(e)}finally{q3(),t()}}}function Iz(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(c,a){return G1(e,"get","$attrs"),c[a]}}))}function Rz(e){const c=a=>{e.exposed=a||{}};return{get attrs(){return Iz(e)},slots:e.slots,emit:e.emit,expose:c}}function s8(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(pr(J0(e.exposed)),{get(c,a){if(a in c)return c[a];if(a in U4)return U4[a](e)},has(c,a){return a in c||a in U4}}))}function Fz(e,c=!0){return j(e)?e.displayName||e.name:e.name||c&&e.__name}function Dz(e){return j(e)&&"__vccOpts"in e}const l1=(e,c)=>bp(e,c,i8);function S7(e,c,a){const r=arguments.length;return r===2?f1(c)&&!q(c)?N0(c)?L1(e,null,[c]):L1(e,c):L1(e,null,c):(r>3?a=Array.prototype.slice.call(arguments,2):r===3&&N0(a)&&(a=[a]),L1(e,c,a))}const Oz="3.4.19";/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Bz="http://www.w3.org/2000/svg",Uz="http://www.w3.org/1998/Math/MathML",J2=typeof document<"u"?document:null,Gc=J2&&J2.createElement("template"),qz={insert:(e,c,a)=>{c.insertBefore(e,a||null)},remove:e=>{const c=e.parentNode;c&&c.removeChild(e)},createElement:(e,c,a,r)=>{const t=c==="svg"?J2.createElementNS(Bz,e):c==="mathml"?J2.createElementNS(Uz,e):J2.createElement(e,a?{is:a}:void 0);return e==="select"&&r&&r.multiple!=null&&t.setAttribute("multiple",r.multiple),t},createText:e=>J2.createTextNode(e),createComment:e=>J2.createComment(e),setText:(e,c)=>{e.nodeValue=c},setElementText:(e,c)=>{e.textContent=c},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>J2.querySelector(e),setScopeId(e,c){e.setAttribute(c,"")},insertStaticContent(e,c,a,r,t,n){const i=a?a.previousSibling:c.lastChild;if(t&&(t===n||t.nextSibling))for(;c.insertBefore(t.cloneNode(!0),a),!(t===n||!(t=t.nextSibling)););else{Gc.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const s=Gc.content;if(r==="svg"||r==="mathml"){const o=s.firstChild;for(;o.firstChild;)s.appendChild(o.firstChild);s.removeChild(o)}c.insertBefore(s,a)}return[i?i.nextSibling:c.firstChild,a?a.previousSibling:c.lastChild]}},$z=Symbol("_vtc");function Wz(e,c,a){const r=e[$z];r&&(c=(c?[c,...r]:[...r]).join(" ")),c==null?e.removeAttribute("class"):a?e.setAttribute("class",c):e.className=c}const jc=Symbol("_vod"),Gz=Symbol(""),jz=/(^|;)\s*display\s*:/;function Kz(e,c,a){const r=e.style,t=b1(a),n=r.display;let i=!1;if(a&&!t){if(c&&!b1(c))for(const s in c)a[s]==null&&S5(r,s,"");for(const s in a)s==="display"&&(i=!0),S5(r,s,a[s])}else if(t){if(c!==a){const s=r[Gz];s&&(a+=";"+s),r.cssText=a,i=jz.test(a)}}else c&&e.removeAttribute("style");jc in e&&(e[jc]=i?r.display:"",r.display=n)}const Kc=/\s*!important$/;function S5(e,c,a){if(q(a))a.forEach(r=>S5(e,c,r));else if(a==null&&(a=""),c.startsWith("--"))e.setProperty(c,a);else{const r=Zz(e,c);Kc.test(a)?e.setProperty(L4(r),a.replace(Kc,""),"important"):e[r]=a}}const Zc=["Webkit","Moz","ms"],J8={};function Zz(e,c){const a=J8[c];if(a)return a;let r=L2(c);if(r!=="filter"&&r in e)return J8[c]=r;r=Y0(r);for(let t=0;t<Zc.length;t++){const n=Zc[t]+r;if(n in e)return J8[c]=n}return c}const Yc="http://www.w3.org/1999/xlink";function Yz(e,c,a,r,t){if(r&&c.startsWith("xlink:"))a==null?e.removeAttributeNS(Yc,c.slice(6,c.length)):e.setAttributeNS(Yc,c,a);else{const n=cp(c);a==null||n&&!ja(a)?e.removeAttribute(c):e.setAttribute(c,n?"":a)}}function Xz(e,c,a,r,t,n,i){if(c==="innerHTML"||c==="textContent"){r&&i(r,t,n),e[c]=a??"";return}const s=e.tagName;if(c==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=a;const l=s==="OPTION"?e.getAttribute("value"):e.value,f=a??"";l!==f&&(e.value=f),a==null&&e.removeAttribute(c);return}let o=!1;if(a===""||a==null){const l=typeof e[c];l==="boolean"?a=ja(a):a==null&&l==="string"?(a="",o=!0):l==="number"&&(a=0,o=!0)}try{e[c]=a}catch{}o&&e.removeAttribute(c)}function c3(e,c,a,r){e.addEventListener(c,a,r)}function Jz(e,c,a,r){e.removeEventListener(c,a,r)}const Xc=Symbol("_vei");function Qz(e,c,a,r,t=null){const n=e[Xc]||(e[Xc]={}),i=n[c];if(r&&i)i.value=r;else{const[s,o]=cH(c);if(r){const l=n[c]=rH(r,t);c3(e,s,l,o)}else i&&(Jz(e,s,i,o),n[c]=void 0)}}const Jc=/(?:Once|Passive|Capture)$/;function cH(e){let c;if(Jc.test(e)){c={};let r;for(;r=e.match(Jc);)e=e.slice(0,e.length-r[0].length),c[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):L4(e.slice(2)),c]}let Q8=0;const eH=Promise.resolve(),aH=()=>Q8||(eH.then(()=>Q8=0),Q8=Date.now());function rH(e,c){const a=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=a.attached)return;f2(tH(r,a.value),c,5,[r])};return a.value=e,a.attached=aH(),a}function tH(e,c){if(q(c)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},c.map(r=>t=>!t._stopped&&r&&r(t))}else return c}const Qc=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,nH=(e,c,a,r,t,n,i,s,o)=>{const l=t==="svg";c==="class"?Wz(e,r,l):c==="style"?Kz(e,a,r):K0(c)?l7(c)||Qz(e,c,a,r,i):(c[0]==="."?(c=c.slice(1),!0):c[0]==="^"?(c=c.slice(1),!1):iH(e,c,r,l))?Xz(e,c,r,n,i,s,o):(c==="true-value"?e._trueValue=r:c==="false-value"&&(e._falseValue=r),Yz(e,c,r,l))};function iH(e,c,a,r){if(r)return!!(c==="innerHTML"||c==="textContent"||c in e&&Qc(c)&&j(a));if(c==="spellcheck"||c==="draggable"||c==="translate"||c==="form"||c==="list"&&e.tagName==="INPUT"||c==="type"&&e.tagName==="TEXTAREA")return!1;if(c==="width"||c==="height"){const t=e.tagName;if(t==="IMG"||t==="VIDEO"||t==="CANVAS"||t==="SOURCE")return!1}return Qc(c)&&b1(a)?!1:c in e}const m4=e=>{const c=e.props["onUpdate:modelValue"]||!1;return q(c)?a=>u0(c,a):c};function sH(e){e.target.composing=!0}function ce(e){const c=e.target;c.composing&&(c.composing=!1,c.dispatchEvent(new Event("input")))}const P2=Symbol("_assign"),ee={created(e,{modifiers:{lazy:c,trim:a,number:r}},t){e[P2]=m4(t);const n=r||t.props&&t.props.type==="number";c3(e,c?"change":"input",i=>{if(i.target.composing)return;let s=e.value;a&&(s=s.trim()),n&&(s=c6(s)),e[P2](s)}),a&&c3(e,"change",()=>{e.value=e.value.trim()}),c||(c3(e,"compositionstart",sH),c3(e,"compositionend",ce),c3(e,"change",ce))},mounted(e,{value:c}){e.value=c??""},beforeUpdate(e,{value:c,modifiers:{lazy:a,trim:r,number:t}},n){if(e[P2]=m4(n),e.composing)return;const i=t||e.type==="number"?c6(e.value):e.value,s=c??"";i!==s&&(document.activeElement===e&&e.type!=="range"&&(a||r&&e.value.trim()===s)||(e.value=s))}},or1={deep:!0,created(e,c,a){e[P2]=m4(a),c3(e,"change",()=>{const r=e._modelValue,t=n6(e),n=e.checked,i=e[P2];if(q(r)){const s=v7(r,t),o=s!==-1;if(n&&!o)i(r.concat(t));else if(!n&&o){const l=[...r];l.splice(s,1),i(l)}}else if(g4(r)){const s=new Set(r);n?s.add(t):s.delete(t),i(s)}else i(Wr(e,n))})},mounted:ae,beforeUpdate(e,c,a){e[P2]=m4(a),ae(e,c,a)}};function ae(e,{value:c,oldValue:a},r){e._modelValue=c,q(c)?e.checked=v7(c,r.props.value)>-1:g4(c)?e.checked=c.has(r.props.value):c!==a&&(e.checked=L6(c,Wr(e,!0)))}const lr1={deep:!0,created(e,{value:c,modifiers:{number:a}},r){const t=g4(c);c3(e,"change",()=>{const n=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>a?c6(n6(i)):n6(i));e[P2](e.multiple?t?new Set(n):n:n[0]),e._assigning=!0,c8(()=>{e._assigning=!1})}),e[P2]=m4(r)},mounted(e,{value:c,oldValue:a,modifiers:{number:r}}){re(e,c,a,r)},beforeUpdate(e,c,a){e[P2]=m4(a)},updated(e,{value:c,oldValue:a,modifiers:{number:r}}){e._assigning||re(e,c,a,r)}};function re(e,c,a,r){const t=e.multiple,n=q(c);if(!(t&&!n&&!g4(c))){for(let i=0,s=e.options.length;i<s;i++){const o=e.options[i],l=n6(o);if(t)if(n){const f=typeof l;f==="string"||f==="number"?o.selected=c.includes(r?c6(l):l):o.selected=v7(c,l)>-1}else o.selected=c.has(l);else if(L6(n6(o),c)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function n6(e){return"_value"in e?e._value:e.value}function Wr(e,c){const a=c?"_trueValue":"_falseValue";return a in e?e[a]:c}const oH=T1({patchProp:nH},qz);let te;function lH(){return te||(te=gz(oH))}const fH=(...e)=>{const c=lH().createApp(...e),{mount:a}=c;return c.mount=r=>{const t=uH(r);if(!t)return;const n=c._component;!j(n)&&!n.render&&!n.template&&(n.template=t.innerHTML),t.innerHTML="";const i=a(t,!1,hH(t));return t instanceof Element&&(t.removeAttribute("v-cloak"),t.setAttribute("data-v-app","")),i},c};function hH(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function uH(e){return b1(e)?document.querySelector(e):e}var mH=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Gr;const o8=e=>Gr=e,jr=Symbol();function w5(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var $4;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})($4||($4={}));function vH(){const e=Xa(!0),c=e.run(()=>t2({}));let a=[],r=[];const t=J0({install(n){o8(t),t._a=n,n.provide(jr,t),n.config.globalProperties.$pinia=t,r.forEach(i=>a.push(i)),r=[]},use(n){return!this._a&&!mH?r.push(n):a.push(n),this},_p:a,_a:null,_e:e,_s:new Map,state:c});return t}const Kr=()=>{};function ne(e,c,a,r=Kr){e.push(c);const t=()=>{const n=e.indexOf(c);n>-1&&(e.splice(n,1),r())};return!a&&Ja()&&rp(t),t}function Z3(e,...c){e.slice().forEach(a=>{a(...c)})}const dH=e=>e();function A5(e,c){e instanceof Map&&c instanceof Map&&c.forEach((a,r)=>e.set(r,a)),e instanceof Set&&c instanceof Set&&c.forEach(e.add,e);for(const a in c){if(!c.hasOwnProperty(a))continue;const r=c[a],t=e[a];w5(t)&&w5(r)&&e.hasOwnProperty(a)&&!V1(r)&&!k2(r)?e[a]=A5(t,r):e[a]=r}return e}const pH=Symbol();function zH(e){return!w5(e)||!e.hasOwnProperty(pH)}const{assign:Z2}=Object;function HH(e){return!!(V1(e)&&e.effect)}function VH(e,c,a,r){const{state:t,actions:n,getters:i}=c,s=a.state.value[e];let o;function l(){s||(a.state.value[e]=t?t():{});const f=Sp(a.state.value[e]);return Z2(f,n,Object.keys(i||{}).reduce((h,u)=>(h[u]=J0(l1(()=>{o8(a);const d=a._s.get(e);return i[u].call(d,d)})),h),{}))}return o=Zr(e,l,c,a,r,!0),o}function Zr(e,c,a={},r,t,n){let i;const s=Z2({actions:{}},a),o={deep:!0};let l,f,h=[],u=[],d;const z=r.state.value[e];!n&&!z&&(r.state.value[e]={}),t2({});let y;function w(Z){let $;l=f=!1,typeof Z=="function"?(Z(r.state.value[e]),$={type:$4.patchFunction,storeId:e,events:d}):(A5(r.state.value[e],Z),$={type:$4.patchObject,payload:Z,storeId:e,events:d});const h1=y=Symbol();c8().then(()=>{y===h1&&(l=!0)}),f=!0,Z3(h,$,r.state.value[e])}const V=n?function(){const{state:$}=a,h1=$?$():{};this.$patch(E1=>{Z2(E1,h1)})}:Kr;function g(){i.stop(),h=[],u=[],r._s.delete(e)}function S(Z,$){return function(){o8(r);const h1=Array.from(arguments),E1=[],j1=[];function c2(e1){E1.push(e1)}function V3(e1){j1.push(e1)}Z3(u,{args:h1,name:Z,store:D,after:c2,onError:V3});let e2;try{e2=$.apply(this&&this.$id===e?this:D,h1)}catch(e1){throw Z3(j1,e1),e1}return e2 instanceof Promise?e2.then(e1=>(Z3(E1,e1),e1)).catch(e1=>(Z3(j1,e1),Promise.reject(e1))):(Z3(E1,e2),e2)}}const F={_p:r,$id:e,$onAction:ne.bind(null,u),$patch:w,$reset:V,$subscribe(Z,$={}){const h1=ne(h,Z,$.detached,()=>E1()),E1=i.run(()=>t4(()=>r.state.value[e],j1=>{($.flush==="sync"?f:l)&&Z({storeId:e,type:$4.direct,events:d},j1)},Z2({},o,$)));return h1},$dispose:g},D=b6(F);r._s.set(e,D);const Y=(r._a&&r._a.runWithContext||dH)(()=>r._e.run(()=>(i=Xa()).run(c)));for(const Z in Y){const $=Y[Z];if(V1($)&&!HH($)||k2($))n||(z&&zH($)&&(V1($)?$.value=z[Z]:A5($,z[Z])),r.state.value[e][Z]=$);else if(typeof $=="function"){const h1=S(Z,$);Y[Z]=h1,s.actions[Z]=$}}return Z2(D,Y),Z2(Q(D),Y),Object.defineProperty(D,"$state",{get:()=>r.state.value[e],set:Z=>{w($=>{Z2($,Z)})}}),r._p.forEach(Z=>{Z2(D,i.run(()=>Z({store:D,app:r._a,pinia:r,options:s})))}),z&&n&&a.hydrate&&a.hydrate(D.$state,z),l=!0,f=!0,D}function w7(e,c,a){let r,t;const n=typeof c=="function";typeof e=="string"?(r=e,t=n?a:c):(t=e,r=e.id);function i(s,o){const l=pz();return s=s||(l?n2(jr,null):null),s&&o8(s),s=Gr,s._s.has(r)||(n?Zr(r,c,t,s):VH(r,t,s)),s._s.get(r)}return i.$id=r,i}function MH(e){{e=Q(e);const c={};for(const a in e){const r=e[a];(V1(r)||k2(r))&&(c[a]=_p(e,a))}return c}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const X3=typeof window<"u";function CH(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const n1=Object.assign;function c5(e,c){const a={};for(const r in c){const t=c[r];a[r]=h2(t)?t.map(e):e(t)}return a}const W4=()=>{},h2=Array.isArray,gH=/\/$/,LH=e=>e.replace(gH,"");function e5(e,c,a="/"){let r,t={},n="",i="";const s=c.indexOf("#");let o=c.indexOf("?");return s<o&&s>=0&&(o=-1),o>-1&&(r=c.slice(0,o),n=c.slice(o+1,s>-1?s:c.length),t=e(n)),s>-1&&(r=r||c.slice(0,s),i=c.slice(s,c.length)),r=NH(r??c,a),{fullPath:r+(n&&"?")+n+i,path:r,query:t,hash:i}}function bH(e,c){const a=c.query?e(c.query):"";return c.path+(a&&"?")+a+(c.hash||"")}function ie(e,c){return!c||!e.toLowerCase().startsWith(c.toLowerCase())?e:e.slice(c.length)||"/"}function xH(e,c,a){const r=c.matched.length-1,t=a.matched.length-1;return r>-1&&r===t&&v4(c.matched[r],a.matched[t])&&Yr(c.params,a.params)&&e(c.query)===e(a.query)&&c.hash===a.hash}function v4(e,c){return(e.aliasOf||e)===(c.aliasOf||c)}function Yr(e,c){if(Object.keys(e).length!==Object.keys(c).length)return!1;for(const a in e)if(!yH(e[a],c[a]))return!1;return!0}function yH(e,c){return h2(e)?se(e,c):h2(c)?se(c,e):e===c}function se(e,c){return h2(c)?e.length===c.length&&e.every((a,r)=>a===c[r]):e.length===1&&e[0]===c}function NH(e,c){if(e.startsWith("/"))return e;if(!e)return c;const a=c.split("/"),r=e.split("/"),t=r[r.length-1];(t===".."||t===".")&&r.push("");let n=a.length-1,i,s;for(i=0;i<r.length;i++)if(s=r[i],s!==".")if(s==="..")n>1&&n--;else break;return a.slice(0,n).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var i6;(function(e){e.pop="pop",e.push="push"})(i6||(i6={}));var G4;(function(e){e.back="back",e.forward="forward",e.unknown=""})(G4||(G4={}));function SH(e){if(!e)if(X3){const c=document.querySelector("base");e=c&&c.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),LH(e)}const wH=/^[^#]+#/;function AH(e,c){return e.replace(wH,"#")+c}function _H(e,c){const a=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:c.behavior,left:r.left-a.left-(c.left||0),top:r.top-a.top-(c.top||0)}}const l8=()=>({left:window.pageXOffset,top:window.pageYOffset});function kH(e){let c;if("el"in e){const a=e.el,r=typeof a=="string"&&a.startsWith("#"),t=typeof a=="string"?r?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!t)return;c=_H(t,e)}else c=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(c):window.scrollTo(c.left!=null?c.left:window.pageXOffset,c.top!=null?c.top:window.pageYOffset)}function oe(e,c){return(history.state?history.state.position-c:-1)+e}const _5=new Map;function TH(e,c){_5.set(e,c)}function PH(e){const c=_5.get(e);return _5.delete(e),c}let EH=()=>location.protocol+"//"+location.host;function Xr(e,c){const{pathname:a,search:r,hash:t}=c,n=e.indexOf("#");if(n>-1){let s=t.includes(e.slice(n))?e.slice(n).length:1,o=t.slice(s);return o[0]!=="/"&&(o="/"+o),ie(o,"")}return ie(a,e)+r+t}function IH(e,c,a,r){let t=[],n=[],i=null;const s=({state:u})=>{const d=Xr(e,location),z=a.value,y=c.value;let w=0;if(u){if(a.value=d,c.value=u,i&&i===z){i=null;return}w=y?u.position-y.position:0}else r(d);t.forEach(V=>{V(a.value,z,{delta:w,type:i6.pop,direction:w?w>0?G4.forward:G4.back:G4.unknown})})};function o(){i=a.value}function l(u){t.push(u);const d=()=>{const z=t.indexOf(u);z>-1&&t.splice(z,1)};return n.push(d),d}function f(){const{history:u}=window;u.state&&u.replaceState(n1({},u.state,{scroll:l8()}),"")}function h(){for(const u of n)u();n=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:o,listen:l,destroy:h}}function le(e,c,a,r=!1,t=!1){return{back:e,current:c,forward:a,replaced:r,position:window.history.length,scroll:t?l8():null}}function RH(e){const{history:c,location:a}=window,r={value:Xr(e,a)},t={value:c.state};t.value||n(r.value,{back:null,current:r.value,forward:null,position:c.length-1,replaced:!0,scroll:null},!0);function n(o,l,f){const h=e.indexOf("#"),u=h>-1?(a.host&&document.querySelector("base")?e:e.slice(h))+o:EH()+e+o;try{c[f?"replaceState":"pushState"](l,"",u),t.value=l}catch(d){console.error(d),a[f?"replace":"assign"](u)}}function i(o,l){const f=n1({},c.state,le(t.value.back,o,t.value.forward,!0),l,{position:t.value.position});n(o,f,!0),r.value=o}function s(o,l){const f=n1({},t.value,c.state,{forward:o,scroll:l8()});n(f.current,f,!0);const h=n1({},le(r.value,o,null),{position:f.position+1},l);n(o,h,!1),r.value=o}return{location:r,state:t,push:s,replace:i}}function FH(e){e=SH(e);const c=RH(e),a=IH(e,c.state,c.location,c.replace);function r(n,i=!0){i||a.pauseListeners(),history.go(n)}const t=n1({location:"",base:e,go:r,createHref:AH.bind(null,e)},c,a);return Object.defineProperty(t,"location",{enumerable:!0,get:()=>c.location.value}),Object.defineProperty(t,"state",{enumerable:!0,get:()=>c.state.value}),t}function DH(e){return typeof e=="string"||e&&typeof e=="object"}function Jr(e){return typeof e=="string"||typeof e=="symbol"}const G2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qr=Symbol("");var fe;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(fe||(fe={}));function d4(e,c){return n1(new Error,{type:e,[Qr]:!0},c)}function x2(e,c){return e instanceof Error&&Qr in e&&(c==null||!!(e.type&c))}const he="[^/]+?",OH={sensitive:!1,strict:!1,start:!0,end:!0},BH=/[.+*?^${}()[\]/\\]/g;function UH(e,c){const a=n1({},OH,c),r=[];let t=a.start?"^":"";const n=[];for(const l of e){const f=l.length?[]:[90];a.strict&&!l.length&&(t+="/");for(let h=0;h<l.length;h++){const u=l[h];let d=40+(a.sensitive?.25:0);if(u.type===0)h||(t+="/"),t+=u.value.replace(BH,"\\$&"),d+=40;else if(u.type===1){const{value:z,repeatable:y,optional:w,regexp:V}=u;n.push({name:z,repeatable:y,optional:w});const g=V||he;if(g!==he){d+=10;try{new RegExp(`(${g})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${z}" (${g}): `+F.message)}}let S=y?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;h||(S=w&&l.length<2?`(?:/${S})`:"/"+S),w&&(S+="?"),t+=S,d+=20,w&&(d+=-8),y&&(d+=-20),g===".*"&&(d+=-50)}f.push(d)}r.push(f)}if(a.strict&&a.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}a.strict||(t+="/?"),a.end?t+="$":a.strict&&(t+="(?:/|$)");const i=new RegExp(t,a.sensitive?"":"i");function s(l){const f=l.match(i),h={};if(!f)return null;for(let u=1;u<f.length;u++){const d=f[u]||"",z=n[u-1];h[z.name]=d&&z.repeatable?d.split("/"):d}return h}function o(l){let f="",h=!1;for(const u of e){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const d of u)if(d.type===0)f+=d.value;else if(d.type===1){const{value:z,repeatable:y,optional:w}=d,V=z in l?l[z]:"";if(h2(V)&&!y)throw new Error(`Provided param "${z}" is an array but it is not repeatable (* or + modifiers)`);const g=h2(V)?V.join("/"):V;if(!g)if(w)u.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${z}"`);f+=g}}return f||"/"}return{re:i,score:r,keys:n,parse:s,stringify:o}}function qH(e,c){let a=0;for(;a<e.length&&a<c.length;){const r=c[a]-e[a];if(r)return r;a++}return e.length<c.length?e.length===1&&e[0]===80?-1:1:e.length>c.length?c.length===1&&c[0]===80?1:-1:0}function $H(e,c){let a=0;const r=e.score,t=c.score;for(;a<r.length&&a<t.length;){const n=qH(r[a],t[a]);if(n)return n;a++}if(Math.abs(t.length-r.length)===1){if(ue(r))return 1;if(ue(t))return-1}return t.length-r.length}function ue(e){const c=e[e.length-1];return e.length>0&&c[c.length-1]<0}const WH={type:0,value:""},GH=/[a-zA-Z0-9_]/;function jH(e){if(!e)return[[]];if(e==="/")return[[WH]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function c(d){throw new Error(`ERR (${a})/"${l}": ${d}`)}let a=0,r=a;const t=[];let n;function i(){n&&t.push(n),n=[]}let s=0,o,l="",f="";function h(){l&&(a===0?n.push({type:0,value:l}):a===1||a===2||a===3?(n.length>1&&(o==="*"||o==="+")&&c(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),n.push({type:1,value:l,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):c("Invalid state to consume buffer"),l="")}function u(){l+=o}for(;s<e.length;){if(o=e[s++],o==="\\"&&a!==2){r=a,a=4;continue}switch(a){case 0:o==="/"?(l&&h(),i()):o===":"?(h(),a=1):u();break;case 4:u(),a=r;break;case 1:o==="("?a=2:GH.test(o)?u():(h(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&s--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:a=3:f+=o;break;case 3:h(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&s--,f="";break;default:c("Unknown state");break}}return a===2&&c(`Unfinished custom RegExp for param "${l}"`),h(),i(),t}function KH(e,c,a){const r=UH(jH(e.path),a),t=n1(r,{record:e,parent:c,children:[],alias:[]});return c&&!t.record.aliasOf==!c.record.aliasOf&&c.children.push(t),t}function ZH(e,c){const a=[],r=new Map;c=de({strict:!1,end:!0,sensitive:!1},c);function t(f){return r.get(f)}function n(f,h,u){const d=!u,z=YH(f);z.aliasOf=u&&u.record;const y=de(c,f),w=[z];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of S)w.push(n1({},z,{components:u?u.record.components:z.components,path:F,aliasOf:u?u.record:z}))}let V,g;for(const S of w){const{path:F}=S;if(h&&F[0]!=="/"){const D=h.record.path,R=D[D.length-1]==="/"?"":"/";S.path=h.record.path+(F&&R+F)}if(V=KH(S,h,y),u?u.alias.push(V):(g=g||V,g!==V&&g.alias.push(V),d&&f.name&&!ve(V)&&i(f.name)),z.children){const D=z.children;for(let R=0;R<D.length;R++)n(D[R],V,u&&u.children[R])}u=u||V,(V.record.components&&Object.keys(V.record.components).length||V.record.name||V.record.redirect)&&o(V)}return g?()=>{i(g)}:W4}function i(f){if(Jr(f)){const h=r.get(f);h&&(r.delete(f),a.splice(a.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=a.indexOf(f);h>-1&&(a.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function s(){return a}function o(f){let h=0;for(;h<a.length&&$H(f,a[h])>=0&&(f.record.path!==a[h].record.path||!ct(f,a[h]));)h++;a.splice(h,0,f),f.record.name&&!ve(f)&&r.set(f.record.name,f)}function l(f,h){let u,d={},z,y;if("name"in f&&f.name){if(u=r.get(f.name),!u)throw d4(1,{location:f});y=u.record.name,d=n1(me(h.params,u.keys.filter(g=>!g.optional).map(g=>g.name)),f.params&&me(f.params,u.keys.map(g=>g.name))),z=u.stringify(d)}else if("path"in f)z=f.path,u=a.find(g=>g.re.test(z)),u&&(d=u.parse(z),y=u.record.name);else{if(u=h.name?r.get(h.name):a.find(g=>g.re.test(h.path)),!u)throw d4(1,{location:f,currentLocation:h});y=u.record.name,d=n1({},h.params,f.params),z=u.stringify(d)}const w=[];let V=u;for(;V;)w.unshift(V.record),V=V.parent;return{name:y,path:z,params:d,matched:w,meta:JH(w)}}return e.forEach(f=>n(f)),{addRoute:n,resolve:l,removeRoute:i,getRoutes:s,getRecordMatcher:t}}function me(e,c){const a={};for(const r of c)r in e&&(a[r]=e[r]);return a}function YH(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:XH(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function XH(e){const c={},a=e.props||!1;if("component"in e)c.default=a;else for(const r in e.components)c[r]=typeof a=="object"?a[r]:a;return c}function ve(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function JH(e){return e.reduce((c,a)=>n1(c,a.meta),{})}function de(e,c){const a={};for(const r in e)a[r]=r in c?c[r]:e[r];return a}function ct(e,c){return c.children.some(a=>a===e||ct(e,a))}const et=/#/g,QH=/&/g,cV=/\//g,eV=/=/g,aV=/\?/g,at=/\+/g,rV=/%5B/g,tV=/%5D/g,rt=/%5E/g,nV=/%60/g,tt=/%7B/g,iV=/%7C/g,nt=/%7D/g,sV=/%20/g;function A7(e){return encodeURI(""+e).replace(iV,"|").replace(rV,"[").replace(tV,"]")}function oV(e){return A7(e).replace(tt,"{").replace(nt,"}").replace(rt,"^")}function k5(e){return A7(e).replace(at,"%2B").replace(sV,"+").replace(et,"%23").replace(QH,"%26").replace(nV,"`").replace(tt,"{").replace(nt,"}").replace(rt,"^")}function lV(e){return k5(e).replace(eV,"%3D")}function fV(e){return A7(e).replace(et,"%23").replace(aV,"%3F")}function hV(e){return e==null?"":fV(e).replace(cV,"%2F")}function w0(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function uV(e){const c={};if(e===""||e==="?")return c;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let t=0;t<r.length;++t){const n=r[t].replace(at," "),i=n.indexOf("="),s=w0(i<0?n:n.slice(0,i)),o=i<0?null:w0(n.slice(i+1));if(s in c){let l=c[s];h2(l)||(l=c[s]=[l]),l.push(o)}else c[s]=o}return c}function pe(e){let c="";for(let a in e){const r=e[a];if(a=lV(a),r==null){r!==void 0&&(c+=(c.length?"&":"")+a);continue}(h2(r)?r.map(n=>n&&k5(n)):[r&&k5(r)]).forEach(n=>{n!==void 0&&(c+=(c.length?"&":"")+a,n!=null&&(c+="="+n))})}return c}function mV(e){const c={};for(const a in e){const r=e[a];r!==void 0&&(c[a]=h2(r)?r.map(t=>t==null?null:""+t):r==null?r:""+r)}return c}const vV=Symbol(""),ze=Symbol(""),f8=Symbol(""),_7=Symbol(""),T5=Symbol("");function P4(){let e=[];function c(r){return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}function a(){e=[]}return{add:c,list:()=>e.slice(),reset:a}}function Q2(e,c,a,r,t){const n=r&&(r.enterCallbacks[t]=r.enterCallbacks[t]||[]);return()=>new Promise((i,s)=>{const o=h=>{h===!1?s(d4(4,{from:a,to:c})):h instanceof Error?s(h):DH(h)?s(d4(2,{from:c,to:h})):(n&&r.enterCallbacks[t]===n&&typeof h=="function"&&n.push(h),i())},l=e.call(r&&r.instances[t],c,a,o);let f=Promise.resolve(l);e.length<3&&(f=f.then(o)),f.catch(h=>s(h))})}function a5(e,c,a,r){const t=[];for(const n of e)for(const i in n.components){let s=n.components[i];if(!(c!=="beforeRouteEnter"&&!n.instances[i]))if(dV(s)){const l=(s.__vccOpts||s)[c];l&&t.push(Q2(l,a,r,n,i))}else{let o=s();t.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${n.path}"`));const f=CH(l)?l.default:l;n.components[i]=f;const u=(f.__vccOpts||f)[c];return u&&Q2(u,a,r,n,i)()}))}}return t}function dV(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const c=n2(f8),a=n2(_7),r=l1(()=>c.resolve(M2(e.to))),t=l1(()=>{const{matched:o}=r.value,{length:l}=o,f=o[l-1],h=a.matched;if(!f||!h.length)return-1;const u=h.findIndex(v4.bind(null,f));if(u>-1)return u;const d=Ve(o[l-2]);return l>1&&Ve(f)===d&&h[h.length-1].path!==d?h.findIndex(v4.bind(null,o[l-2])):u}),n=l1(()=>t.value>-1&&VV(a.params,r.value.params)),i=l1(()=>t.value>-1&&t.value===a.matched.length-1&&Yr(a.params,r.value.params));function s(o={}){return HV(o)?c[M2(e.replace)?"replace":"push"](M2(e.to)).catch(W4):Promise.resolve()}return{route:r,href:l1(()=>r.value.href),isActive:n,isExactActive:i,navigate:s}}const pV=b7({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:c}){const a=b6(He(e)),{options:r}=n2(f8),t=l1(()=>({[Me(e.activeClass,r.linkActiveClass,"router-link-active")]:a.isActive,[Me(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const n=c.default&&c.default(a);return e.custom?n:S7("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:t.value},n)}}}),zV=pV;function HV(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const c=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(c))return}return e.preventDefault&&e.preventDefault(),!0}}function VV(e,c){for(const a in c){const r=c[a],t=e[a];if(typeof r=="string"){if(r!==t)return!1}else if(!h2(t)||t.length!==r.length||r.some((n,i)=>n!==t[i]))return!1}return!0}function Ve(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Me=(e,c,a)=>e??c??a,MV=b7({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:c,slots:a}){const r=n2(T5),t=l1(()=>e.route||r.value),n=n2(ze,0),i=l1(()=>{let l=M2(n);const{matched:f}=t.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),s=l1(()=>t.value.matched[i.value]);v0(ze,l1(()=>i.value+1)),v0(vV,s),v0(T5,t);const o=t2();return t4(()=>[o.value,s.value,e.name],([l,f,h],[u,d,z])=>{f&&(f.instances[h]=l,d&&d!==f&&l&&l===u&&(f.leaveGuards.size||(f.leaveGuards=d.leaveGuards),f.updateGuards.size||(f.updateGuards=d.updateGuards))),l&&f&&(!d||!v4(f,d)||!u)&&(f.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=t.value,f=e.name,h=s.value,u=h&&h.components[f];if(!u)return Ce(a.default,{Component:u,route:l});const d=h.props[f],z=d?d===!0?l.params:typeof d=="function"?d(l):d:null,w=S7(u,n1({},z,c,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(h.instances[f]=null)},ref:o}));return Ce(a.default,{Component:w,route:l})||w}}});function Ce(e,c){if(!e)return null;const a=e(c);return a.length===1?a[0]:a}const it=MV;function CV(e){const c=ZH(e.routes,e),a=e.parseQuery||uV,r=e.stringifyQuery||pe,t=e.history,n=P4(),i=P4(),s=P4(),o=xp(G2);let l=G2;X3&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=c5.bind(null,M=>""+M),h=c5.bind(null,hV),u=c5.bind(null,w0);function d(M,T){let A,I;return Jr(M)?(A=c.getRecordMatcher(M),I=T):I=M,c.addRoute(I,A)}function z(M){const T=c.getRecordMatcher(M);T&&c.removeRoute(T)}function y(){return c.getRoutes().map(M=>M.record)}function w(M){return!!c.getRecordMatcher(M)}function V(M,T){if(T=n1({},T||o.value),typeof M=="string"){const v=e5(a,M,T.path),p=c.resolve({path:v.path},T),C=t.createHref(v.fullPath);return n1(v,p,{params:u(p.params),hash:w0(v.hash),redirectedFrom:void 0,href:C})}let A;if("path"in M)A=n1({},M,{path:e5(a,M.path,T.path).path});else{const v=n1({},M.params);for(const p in v)v[p]==null&&delete v[p];A=n1({},M,{params:h(v)}),T.params=h(T.params)}const I=c.resolve(A,T),r1=M.hash||"";I.params=f(u(I.params));const d1=bH(r,n1({},M,{hash:oV(r1),path:I.path})),m=t.createHref(d1);return n1({fullPath:d1,hash:r1,query:r===pe?mV(M.query):M.query||{}},I,{redirectedFrom:void 0,href:m})}function g(M){return typeof M=="string"?e5(a,M,o.value.path):n1({},M)}function S(M,T){if(l!==M)return d4(8,{from:T,to:M})}function F(M){return Y(M)}function D(M){return F(n1(g(M),{replace:!0}))}function R(M){const T=M.matched[M.matched.length-1];if(T&&T.redirect){const{redirect:A}=T;let I=typeof A=="function"?A(M):A;return typeof I=="string"&&(I=I.includes("?")||I.includes("#")?I=g(I):{path:I},I.params={}),n1({query:M.query,hash:M.hash,params:"path"in I?{}:M.params},I)}}function Y(M,T){const A=l=V(M),I=o.value,r1=M.state,d1=M.force,m=M.replace===!0,v=R(A);if(v)return Y(n1(g(v),{state:typeof v=="object"?n1({},r1,v.state):r1,force:d1,replace:m}),T||A);const p=A;p.redirectedFrom=T;let C;return!d1&&xH(r,I,A)&&(C=d4(16,{to:p,from:I}),m2(I,I,!0,!1)),(C?Promise.resolve(C):h1(p,I)).catch(H=>x2(H)?x2(H,2)?H:$2(H):a1(H,p,I)).then(H=>{if(H){if(x2(H,2))return Y(n1({replace:m},g(H.to),{state:typeof H.to=="object"?n1({},r1,H.to.state):r1,force:d1}),T||p)}else H=j1(p,I,!0,m,r1);return E1(p,I,H),H})}function Z(M,T){const A=S(M,T);return A?Promise.reject(A):Promise.resolve()}function $(M){const T=j3.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(M):M()}function h1(M,T){let A;const[I,r1,d1]=gV(M,T);A=a5(I.reverse(),"beforeRouteLeave",M,T);for(const v of I)v.leaveGuards.forEach(p=>{A.push(Q2(p,M,T))});const m=Z.bind(null,M,T);return A.push(m),I1(A).then(()=>{A=[];for(const v of n.list())A.push(Q2(v,M,T));return A.push(m),I1(A)}).then(()=>{A=a5(r1,"beforeRouteUpdate",M,T);for(const v of r1)v.updateGuards.forEach(p=>{A.push(Q2(p,M,T))});return A.push(m),I1(A)}).then(()=>{A=[];for(const v of d1)if(v.beforeEnter)if(h2(v.beforeEnter))for(const p of v.beforeEnter)A.push(Q2(p,M,T));else A.push(Q2(v.beforeEnter,M,T));return A.push(m),I1(A)}).then(()=>(M.matched.forEach(v=>v.enterCallbacks={}),A=a5(d1,"beforeRouteEnter",M,T),A.push(m),I1(A))).then(()=>{A=[];for(const v of i.list())A.push(Q2(v,M,T));return A.push(m),I1(A)}).catch(v=>x2(v,8)?v:Promise.reject(v))}function E1(M,T,A){s.list().forEach(I=>$(()=>I(M,T,A)))}function j1(M,T,A,I,r1){const d1=S(M,T);if(d1)return d1;const m=T===G2,v=X3?history.state:{};A&&(I||m?t.replace(M.fullPath,n1({scroll:m&&v&&v.scroll},r1)):t.push(M.fullPath,r1)),o.value=M,m2(M,T,A,m),$2()}let c2;function V3(){c2||(c2=t.listen((M,T,A)=>{if(!W6.listening)return;const I=V(M),r1=R(I);if(r1){Y(n1(r1,{replace:!0}),I).catch(W4);return}l=I;const d1=o.value;X3&&TH(oe(d1.fullPath,A.delta),l8()),h1(I,d1).catch(m=>x2(m,12)?m:x2(m,2)?(Y(m.to,I).then(v=>{x2(v,20)&&!A.delta&&A.type===i6.pop&&t.go(-1,!1)}).catch(W4),Promise.reject()):(A.delta&&t.go(-A.delta,!1),a1(m,I,d1))).then(m=>{m=m||j1(I,d1,!1),m&&(A.delta&&!x2(m,8)?t.go(-A.delta,!1):A.type===i6.pop&&x2(m,20)&&t.go(-1,!1)),E1(I,d1,m)}).catch(W4)}))}let e2=P4(),e1=P4(),s1;function a1(M,T,A){$2(M);const I=e1.list();return I.length?I.forEach(r1=>r1(M,T,A)):console.error(M),Promise.reject(M)}function b2(){return s1&&o.value!==G2?Promise.resolve():new Promise((M,T)=>{e2.add([M,T])})}function $2(M){return s1||(s1=!M,V3(),e2.list().forEach(([T,A])=>M?A(M):T()),e2.reset()),M}function m2(M,T,A,I){const{scrollBehavior:r1}=e;if(!X3||!r1)return Promise.resolve();const d1=!A&&PH(oe(M.fullPath,0))||(I||!A)&&history.state&&history.state.scroll||null;return c8().then(()=>r1(M,T,d1)).then(m=>m&&kH(m)).catch(m=>a1(m,M,T))}const B1=M=>t.go(M);let G3;const j3=new Set,W6={currentRoute:o,listening:!0,addRoute:d,removeRoute:z,hasRoute:w,getRoutes:y,resolve:V,options:e,push:F,replace:D,go:B1,back:()=>B1(-1),forward:()=>B1(1),beforeEach:n.add,beforeResolve:i.add,afterEach:s.add,onError:e1.add,isReady:b2,install(M){const T=this;M.component("RouterLink",zV),M.component("RouterView",it),M.config.globalProperties.$router=T,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>M2(o)}),X3&&!G3&&o.value===G2&&(G3=!0,F(t.location).catch(r1=>{}));const A={};for(const r1 in G2)Object.defineProperty(A,r1,{get:()=>o.value[r1],enumerable:!0});M.provide(f8,T),M.provide(_7,fr(A)),M.provide(T5,o);const I=M.unmount;j3.add(M),M.unmount=function(){j3.delete(M),j3.size<1&&(l=G2,c2&&c2(),c2=null,o.value=G2,G3=!1,s1=!1),I()}}};function I1(M){return M.reduce((T,A)=>T.then(()=>$(A)),Promise.resolve())}return W6}function gV(e,c){const a=[],r=[],t=[],n=Math.max(c.matched.length,e.matched.length);for(let i=0;i<n;i++){const s=c.matched[i];s&&(e.matched.find(l=>v4(l,s))?r.push(s):a.push(s));const o=e.matched[i];o&&(c.matched.find(l=>v4(l,o))||t.push(o))}return[a,r,t]}function st(){return n2(f8)}function LV(){return n2(_7)}const bV={__name:"App",setup(e){return(c,a)=>(S1(),T2(M2(it)))}},xV="modulepreload",yV=function(e){return"/"+e},ge={},E4=function(c,a,r){let t=Promise.resolve();if(a&&a.length>0){const n=document.getElementsByTagName("link");t=Promise.all(a.map(i=>{if(i=yV(i),i in ge)return;ge[i]=!0;const s=i.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(!!r)for(let h=n.length-1;h>=0;h--){const u=n[h];if(u.href===i&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${o}`))return;const f=document.createElement("link");if(f.rel=s?"stylesheet":xV,s||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),s)return new Promise((h,u)=>{f.addEventListener("load",h),f.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})}))}return t.then(()=>c()).catch(n=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n})},k7=w7("general",()=>{const e=t2(null),c=t2(null),a=l1(()=>e.value),r=l1(()=>c.value);function t(o){e.value=o}function n(o){c.value=o}function i(){t(!0),n(null)}async function s({operation:o,successCallback:l,errorCallBack:f}){i();try{const h=await o();return l&&l(h),h}catch(h){n(h),f&&f(h)}finally{t(!1)}}return{isLoading:a,hasError:r,setLoading:t,setError:n,startLoading:i,generalApiOperation:s}});var Le={};/**
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
 */const ot=function(e){const c=[];let a=0;for(let r=0;r<e.length;r++){let t=e.charCodeAt(r);t<128?c[a++]=t:t<2048?(c[a++]=t>>6|192,c[a++]=t&63|128):(t&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(t=65536+((t&1023)<<10)+(e.charCodeAt(++r)&1023),c[a++]=t>>18|240,c[a++]=t>>12&63|128,c[a++]=t>>6&63|128,c[a++]=t&63|128):(c[a++]=t>>12|224,c[a++]=t>>6&63|128,c[a++]=t&63|128)}return c},NV=function(e){const c=[];let a=0,r=0;for(;a<e.length;){const t=e[a++];if(t<128)c[r++]=String.fromCharCode(t);else if(t>191&&t<224){const n=e[a++];c[r++]=String.fromCharCode((t&31)<<6|n&63)}else if(t>239&&t<365){const n=e[a++],i=e[a++],s=e[a++],o=((t&7)<<18|(n&63)<<12|(i&63)<<6|s&63)-65536;c[r++]=String.fromCharCode(55296+(o>>10)),c[r++]=String.fromCharCode(56320+(o&1023))}else{const n=e[a++],i=e[a++];c[r++]=String.fromCharCode((t&15)<<12|(n&63)<<6|i&63)}}return c.join("")},lt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,c){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=c?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const n=e[t],i=t+1<e.length,s=i?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,f=n>>2,h=(n&3)<<4|s>>4;let u=(s&15)<<2|l>>6,d=l&63;o||(d=64,i||(u=64)),r.push(a[f],a[h],a[u],a[d])}return r.join("")},encodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?btoa(e):this.encodeByteArray(ot(e),c)},decodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?atob(e):NV(this.decodeStringToByteArray(e,c))},decodeStringToByteArray(e,c){this.init_();const a=c?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const n=a[e.charAt(t++)],s=t<e.length?a[e.charAt(t)]:0;++t;const l=t<e.length?a[e.charAt(t)]:64;++t;const h=t<e.length?a[e.charAt(t)]:64;if(++t,n==null||s==null||l==null||h==null)throw new SV;const u=n<<2|s>>4;if(r.push(u),l!==64){const d=s<<4&240|l>>2;if(r.push(d),h!==64){const z=l<<6&192|h;r.push(z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class SV extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wV=function(e){const c=ot(e);return lt.encodeByteArray(c,!0)},A0=function(e){return wV(e).replace(/\./g,"")},ft=function(e){try{return lt.decodeString(e,!0)}catch(c){console.error("base64Decode failed: ",c)}return null};/**
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
 */function AV(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _V=()=>AV().__FIREBASE_DEFAULTS__,kV=()=>{if(typeof process>"u"||typeof Le>"u")return;const e=Le.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},TV=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const c=e&&ft(e[1]);return c&&JSON.parse(c)},T7=()=>{try{return _V()||kV()||TV()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ht=e=>{var c,a;return(a=(c=T7())===null||c===void 0?void 0:c.emulatorHosts)===null||a===void 0?void 0:a[e]},PV=e=>{const c=ht(e);if(!c)return;const a=c.lastIndexOf(":");if(a<=0||a+1===c.length)throw new Error(`Invalid host ${c} with no separate hostname and port!`);const r=parseInt(c.substring(a+1),10);return c[0]==="["?[c.substring(1,a-1),r]:[c.substring(0,a),r]},ut=()=>{var e;return(e=T7())===null||e===void 0?void 0:e.config},mt=e=>{var c;return(c=T7())===null||c===void 0?void 0:c[`_${e}`]};/**
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
 */class EV{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((c,a)=>{this.resolve=c,this.reject=a})}wrapCallback(c){return(a,r)=>{a?this.reject(a):this.resolve(r),typeof c=="function"&&(this.promise.catch(()=>{}),c.length===1?c(a):c(a,r))}}}/**
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
 */function IV(e,c){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a={alg:"none",type:"JWT"},r=c||"demo-project",t=e.iat||0,n=e.sub||e.user_id;if(!n)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:t,exp:t+3600,auth_time:t,sub:n,user_id:n,firebase:{sign_in_provider:"custom",identities:{}}},e);return[A0(JSON.stringify(a)),A0(JSON.stringify(i)),""].join(".")}/**
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
 */function D1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RV(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(D1())}function FV(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function DV(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OV(){const e=D1();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function BV(){try{return typeof indexedDB=="object"}catch{return!1}}function UV(){return new Promise((e,c)=>{try{let a=!0;const r="validate-browser-context-for-indexeddb-analytics-module",t=self.indexedDB.open(r);t.onsuccess=()=>{t.result.close(),a||self.indexedDB.deleteDatabase(r),e(!0)},t.onupgradeneeded=()=>{a=!1},t.onerror=()=>{var n;c(((n=t.error)===null||n===void 0?void 0:n.message)||"")}}catch(a){c(a)}})}/**
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
 */const qV="FirebaseError";class U2 extends Error{constructor(c,a,r){super(a),this.code=c,this.customData=r,this.name=qV,Object.setPrototypeOf(this,U2.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,y6.prototype.create)}}class y6{constructor(c,a,r){this.service=c,this.serviceName=a,this.errors=r}create(c,...a){const r=a[0]||{},t=`${this.service}/${c}`,n=this.errors[c],i=n?$V(n,r):"Error",s=`${this.serviceName}: ${i} (${t}).`;return new U2(t,s,r)}}function $V(e,c){return e.replace(WV,(a,r)=>{const t=c[r];return t!=null?String(t):`<${r}?>`})}const WV=/\{\$([^}]+)}/g;function GV(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}function p4(e,c){if(e===c)return!0;const a=Object.keys(e),r=Object.keys(c);for(const t of a){if(!r.includes(t))return!1;const n=e[t],i=c[t];if(be(n)&&be(i)){if(!p4(n,i))return!1}else if(n!==i)return!1}for(const t of r)if(!a.includes(t))return!1;return!0}function be(e){return e!==null&&typeof e=="object"}/**
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
 */function N6(e){const c=[];for(const[a,r]of Object.entries(e))Array.isArray(r)?r.forEach(t=>{c.push(encodeURIComponent(a)+"="+encodeURIComponent(t))}):c.push(encodeURIComponent(a)+"="+encodeURIComponent(r));return c.length?"&"+c.join("&"):""}function R4(e){const c={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[t,n]=r.split("=");c[decodeURIComponent(t)]=decodeURIComponent(n)}}),c}function F4(e){const c=e.indexOf("?");if(!c)return"";const a=e.indexOf("#",c);return e.substring(c,a>0?a:void 0)}function jV(e,c){const a=new KV(e,c);return a.subscribe.bind(a)}class KV{constructor(c,a){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=a,this.task.then(()=>{c(this)}).catch(r=>{this.error(r)})}next(c){this.forEachObserver(a=>{a.next(c)})}error(c){this.forEachObserver(a=>{a.error(c)}),this.close(c)}complete(){this.forEachObserver(c=>{c.complete()}),this.close()}subscribe(c,a,r){let t;if(c===void 0&&a===void 0&&r===void 0)throw new Error("Missing Observer.");ZV(c,["next","error","complete"])?t=c:t={next:c,error:a,complete:r},t.next===void 0&&(t.next=r5),t.error===void 0&&(t.error=r5),t.complete===void 0&&(t.complete=r5);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?t.error(this.finalError):t.complete()}catch{}}),this.observers.push(t),n}unsubscribeOne(c){this.observers===void 0||this.observers[c]===void 0||(delete this.observers[c],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(c){if(!this.finalized)for(let a=0;a<this.observers.length;a++)this.sendOne(a,c)}sendOne(c,a){this.task.then(()=>{if(this.observers!==void 0&&this.observers[c]!==void 0)try{a(this.observers[c])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(c){this.finalized||(this.finalized=!0,c!==void 0&&(this.finalError=c),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZV(e,c){if(typeof e!="object"||e===null)return!1;for(const a of c)if(a in e&&typeof e[a]=="function")return!0;return!1}function r5(){}/**
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
 */function P1(e){return e&&e._delegate?e._delegate:e}class T3{constructor(c,a,r){this.name=c,this.instanceFactory=a,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(c){return this.instantiationMode=c,this}setMultipleInstances(c){return this.multipleInstances=c,this}setServiceProps(c){return this.serviceProps=c,this}setInstanceCreatedCallback(c){return this.onInstanceCreated=c,this}}/**
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
 */const g3="[DEFAULT]";/**
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
 */class YV{constructor(c,a){this.name=c,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(c){const a=this.normalizeInstanceIdentifier(c);if(!this.instancesDeferred.has(a)){const r=new EV;if(this.instancesDeferred.set(a,r),this.isInitialized(a)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:a});t&&r.resolve(t)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(c){var a;const r=this.normalizeInstanceIdentifier(c==null?void 0:c.identifier),t=(a=c==null?void 0:c.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(n){if(t)return null;throw n}else{if(t)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(c){if(c.name!==this.name)throw Error(`Mismatching Component ${c.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=c,!!this.shouldAutoInitialize()){if(JV(c))try{this.getOrInitializeService({instanceIdentifier:g3})}catch{}for(const[a,r]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(a);try{const n=this.getOrInitializeService({instanceIdentifier:t});r.resolve(n)}catch{}}}}clearInstance(c=g3){this.instancesDeferred.delete(c),this.instancesOptions.delete(c),this.instances.delete(c)}async delete(){const c=Array.from(this.instances.values());await Promise.all([...c.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...c.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(c=g3){return this.instances.has(c)}getOptions(c=g3){return this.instancesOptions.get(c)||{}}initialize(c={}){const{options:a={}}=c,r=this.normalizeInstanceIdentifier(c.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const t=this.getOrInitializeService({instanceIdentifier:r,options:a});for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);r===s&&i.resolve(t)}return t}onInit(c,a){var r;const t=this.normalizeInstanceIdentifier(a),n=(r=this.onInitCallbacks.get(t))!==null&&r!==void 0?r:new Set;n.add(c),this.onInitCallbacks.set(t,n);const i=this.instances.get(t);return i&&c(i,t),()=>{n.delete(c)}}invokeOnInitCallbacks(c,a){const r=this.onInitCallbacks.get(a);if(r)for(const t of r)try{t(c,a)}catch{}}getOrInitializeService({instanceIdentifier:c,options:a={}}){let r=this.instances.get(c);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XV(c),options:a}),this.instances.set(c,r),this.instancesOptions.set(c,a),this.invokeOnInitCallbacks(r,c),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,c,r)}catch{}return r||null}normalizeInstanceIdentifier(c=g3){return this.component?this.component.multipleInstances?c:g3:c}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XV(e){return e===g3?void 0:e}function JV(e){return e.instantiationMode==="EAGER"}/**
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
 */class QV{constructor(c){this.name=c,this.providers=new Map}addComponent(c){const a=this.getProvider(c.name);if(a.isComponentSet())throw new Error(`Component ${c.name} has already been registered with ${this.name}`);a.setComponent(c)}addOrOverwriteComponent(c){this.getProvider(c.name).isComponentSet()&&this.providers.delete(c.name),this.addComponent(c)}getProvider(c){if(this.providers.has(c))return this.providers.get(c);const a=new YV(c,this);return this.providers.set(c,a),a}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var t1;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(t1||(t1={}));const cM={debug:t1.DEBUG,verbose:t1.VERBOSE,info:t1.INFO,warn:t1.WARN,error:t1.ERROR,silent:t1.SILENT},eM=t1.INFO,aM={[t1.DEBUG]:"log",[t1.VERBOSE]:"log",[t1.INFO]:"info",[t1.WARN]:"warn",[t1.ERROR]:"error"},rM=(e,c,...a)=>{if(c<e.logLevel)return;const r=new Date().toISOString(),t=aM[c];if(t)console[t](`[${r}]  ${e.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${c})`)};class P7{constructor(c){this.name=c,this._logLevel=eM,this._logHandler=rM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(c){if(!(c in t1))throw new TypeError(`Invalid value "${c}" assigned to \`logLevel\``);this._logLevel=c}setLogLevel(c){this._logLevel=typeof c=="string"?cM[c]:c}get logHandler(){return this._logHandler}set logHandler(c){if(typeof c!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=c}get userLogHandler(){return this._userLogHandler}set userLogHandler(c){this._userLogHandler=c}debug(...c){this._userLogHandler&&this._userLogHandler(this,t1.DEBUG,...c),this._logHandler(this,t1.DEBUG,...c)}log(...c){this._userLogHandler&&this._userLogHandler(this,t1.VERBOSE,...c),this._logHandler(this,t1.VERBOSE,...c)}info(...c){this._userLogHandler&&this._userLogHandler(this,t1.INFO,...c),this._logHandler(this,t1.INFO,...c)}warn(...c){this._userLogHandler&&this._userLogHandler(this,t1.WARN,...c),this._logHandler(this,t1.WARN,...c)}error(...c){this._userLogHandler&&this._userLogHandler(this,t1.ERROR,...c),this._logHandler(this,t1.ERROR,...c)}}const tM=(e,c)=>c.some(a=>e instanceof a);let xe,ye;function nM(){return xe||(xe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iM(){return ye||(ye=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vt=new WeakMap,P5=new WeakMap,dt=new WeakMap,t5=new WeakMap,E7=new WeakMap;function sM(e){const c=new Promise((a,r)=>{const t=()=>{e.removeEventListener("success",n),e.removeEventListener("error",i)},n=()=>{a(i3(e.result)),t()},i=()=>{r(e.error),t()};e.addEventListener("success",n),e.addEventListener("error",i)});return c.then(a=>{a instanceof IDBCursor&&vt.set(a,e)}).catch(()=>{}),E7.set(c,e),c}function oM(e){if(P5.has(e))return;const c=new Promise((a,r)=>{const t=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",i),e.removeEventListener("abort",i)},n=()=>{a(),t()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),t()};e.addEventListener("complete",n),e.addEventListener("error",i),e.addEventListener("abort",i)});P5.set(e,c)}let E5={get(e,c,a){if(e instanceof IDBTransaction){if(c==="done")return P5.get(e);if(c==="objectStoreNames")return e.objectStoreNames||dt.get(e);if(c==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return i3(e[c])},set(e,c,a){return e[c]=a,!0},has(e,c){return e instanceof IDBTransaction&&(c==="done"||c==="store")?!0:c in e}};function lM(e){E5=e(E5)}function fM(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(c,...a){const r=e.call(n5(this),c,...a);return dt.set(r,c.sort?c.sort():[c]),i3(r)}:iM().includes(e)?function(...c){return e.apply(n5(this),c),i3(vt.get(this))}:function(...c){return i3(e.apply(n5(this),c))}}function hM(e){return typeof e=="function"?fM(e):(e instanceof IDBTransaction&&oM(e),tM(e,nM())?new Proxy(e,E5):e)}function i3(e){if(e instanceof IDBRequest)return sM(e);if(t5.has(e))return t5.get(e);const c=hM(e);return c!==e&&(t5.set(e,c),E7.set(c,e)),c}const n5=e=>E7.get(e);function uM(e,c,{blocked:a,upgrade:r,blocking:t,terminated:n}={}){const i=indexedDB.open(e,c),s=i3(i);return r&&i.addEventListener("upgradeneeded",o=>{r(i3(i.result),o.oldVersion,o.newVersion,i3(i.transaction),o)}),a&&i.addEventListener("blocked",o=>a(o.oldVersion,o.newVersion,o)),s.then(o=>{n&&o.addEventListener("close",()=>n()),t&&o.addEventListener("versionchange",l=>t(l.oldVersion,l.newVersion,l))}).catch(()=>{}),s}const mM=["get","getKey","getAll","getAllKeys","count"],vM=["put","add","delete","clear"],i5=new Map;function Ne(e,c){if(!(e instanceof IDBDatabase&&!(c in e)&&typeof c=="string"))return;if(i5.get(c))return i5.get(c);const a=c.replace(/FromIndex$/,""),r=c!==a,t=vM.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!(t||mM.includes(a)))return;const n=async function(i,...s){const o=this.transaction(i,t?"readwrite":"readonly");let l=o.store;return r&&(l=l.index(s.shift())),(await Promise.all([l[a](...s),t&&o.done]))[0]};return i5.set(c,n),n}lM(e=>({...e,get:(c,a,r)=>Ne(c,a)||e.get(c,a,r),has:(c,a)=>!!Ne(c,a)||e.has(c,a)}));/**
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
 */class dM{constructor(c){this.container=c}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(pM(a)){const r=a.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(a=>a).join(" ")}}function pM(e){const c=e.getComponent();return(c==null?void 0:c.type)==="VERSION"}const I5="@firebase/app",Se="0.9.28";/**
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
 */const P3=new P7("@firebase/app"),zM="@firebase/app-compat",HM="@firebase/analytics-compat",VM="@firebase/analytics",MM="@firebase/app-check-compat",CM="@firebase/app-check",gM="@firebase/auth",LM="@firebase/auth-compat",bM="@firebase/database",xM="@firebase/database-compat",yM="@firebase/functions",NM="@firebase/functions-compat",SM="@firebase/installations",wM="@firebase/installations-compat",AM="@firebase/messaging",_M="@firebase/messaging-compat",kM="@firebase/performance",TM="@firebase/performance-compat",PM="@firebase/remote-config",EM="@firebase/remote-config-compat",IM="@firebase/storage",RM="@firebase/storage-compat",FM="@firebase/firestore",DM="@firebase/firestore-compat",OM="firebase",BM="10.8.1";/**
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
 */const R5="[DEFAULT]",UM={[I5]:"fire-core",[zM]:"fire-core-compat",[VM]:"fire-analytics",[HM]:"fire-analytics-compat",[CM]:"fire-app-check",[MM]:"fire-app-check-compat",[gM]:"fire-auth",[LM]:"fire-auth-compat",[bM]:"fire-rtdb",[xM]:"fire-rtdb-compat",[yM]:"fire-fn",[NM]:"fire-fn-compat",[SM]:"fire-iid",[wM]:"fire-iid-compat",[AM]:"fire-fcm",[_M]:"fire-fcm-compat",[kM]:"fire-perf",[TM]:"fire-perf-compat",[PM]:"fire-rc",[EM]:"fire-rc-compat",[IM]:"fire-gcs",[RM]:"fire-gcs-compat",[FM]:"fire-fst",[DM]:"fire-fst-compat","fire-js":"fire-js",[OM]:"fire-js-all"};/**
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
 */const _0=new Map,F5=new Map;function qM(e,c){try{e.container.addComponent(c)}catch(a){P3.debug(`Component ${c.name} failed to register with FirebaseApp ${e.name}`,a)}}function z4(e){const c=e.name;if(F5.has(c))return P3.debug(`There were multiple attempts to register component ${c}.`),!1;F5.set(c,e);for(const a of _0.values())qM(a,e);return!0}function I7(e,c){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(c)}/**
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
 */const $M={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},s3=new y6("app","Firebase",$M);/**
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
 */class WM{constructor(c,a,r){this._isDeleted=!1,this._options=Object.assign({},c),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new T3("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(c){this.checkDestroyed(),this._automaticDataCollectionEnabled=c}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(c){this._isDeleted=c}checkDestroyed(){if(this.isDeleted)throw s3.create("app-deleted",{appName:this._name})}}/**
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
 */const x4=BM;function pt(e,c={}){let a=e;typeof c!="object"&&(c={name:c});const r=Object.assign({name:R5,automaticDataCollectionEnabled:!1},c),t=r.name;if(typeof t!="string"||!t)throw s3.create("bad-app-name",{appName:String(t)});if(a||(a=ut()),!a)throw s3.create("no-options");const n=_0.get(t);if(n){if(p4(a,n.options)&&p4(r,n.config))return n;throw s3.create("duplicate-app",{appName:t})}const i=new QV(t);for(const o of F5.values())i.addComponent(o);const s=new WM(a,r,i);return _0.set(t,s),s}function zt(e=R5){const c=_0.get(e);if(!c&&e===R5&&ut())return pt();if(!c)throw s3.create("no-app",{appName:e});return c}function o3(e,c,a){var r;let t=(r=UM[e])!==null&&r!==void 0?r:e;a&&(t+=`-${a}`);const n=t.match(/\s|\//),i=c.match(/\s|\//);if(n||i){const s=[`Unable to register library "${t}" with version "${c}":`];n&&s.push(`library name "${t}" contains illegal characters (whitespace or "/")`),n&&i&&s.push("and"),i&&s.push(`version name "${c}" contains illegal characters (whitespace or "/")`),P3.warn(s.join(" "));return}z4(new T3(`${t}-version`,()=>({library:t,version:c}),"VERSION"))}/**
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
 */const GM="firebase-heartbeat-database",jM=1,s6="firebase-heartbeat-store";let s5=null;function Ht(){return s5||(s5=uM(GM,jM,{upgrade:(e,c)=>{switch(c){case 0:try{e.createObjectStore(s6)}catch(a){console.warn(a)}}}}).catch(e=>{throw s3.create("idb-open",{originalErrorMessage:e.message})})),s5}async function KM(e){try{const a=(await Ht()).transaction(s6),r=await a.objectStore(s6).get(Vt(e));return await a.done,r}catch(c){if(c instanceof U2)P3.warn(c.message);else{const a=s3.create("idb-get",{originalErrorMessage:c==null?void 0:c.message});P3.warn(a.message)}}}async function we(e,c){try{const r=(await Ht()).transaction(s6,"readwrite");await r.objectStore(s6).put(c,Vt(e)),await r.done}catch(a){if(a instanceof U2)P3.warn(a.message);else{const r=s3.create("idb-set",{originalErrorMessage:a==null?void 0:a.message});P3.warn(r.message)}}}function Vt(e){return`${e.name}!${e.options.appId}`}/**
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
 */const ZM=1024,YM=30*24*60*60*1e3;class XM{constructor(c){this.container=c,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new QM(a),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var c,a;const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Ae();if(!(((c=this._heartbeatsCache)===null||c===void 0?void 0:c.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((a=this._heartbeatsCache)===null||a===void 0?void 0:a.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=YM}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var c;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((c=this._heartbeatsCache)===null||c===void 0?void 0:c.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const a=Ae(),{heartbeatsToSend:r,unsentEntries:t}=JM(this._heartbeatsCache.heartbeats),n=A0(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=a,t.length>0?(this._heartbeatsCache.heartbeats=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Ae(){return new Date().toISOString().substring(0,10)}function JM(e,c=ZM){const a=[];let r=e.slice();for(const t of e){const n=a.find(i=>i.agent===t.agent);if(n){if(n.dates.push(t.date),_e(a)>c){n.dates.pop();break}}else if(a.push({agent:t.agent,dates:[t.date]}),_e(a)>c){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}class QM{constructor(c){this.app=c,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BV()?UV().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const a=await KM(this.app);return a!=null&&a.heartbeats?a:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(c){var a;if(await this._canUseIndexedDBPromise){const t=await this.read();return we(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:t.lastSentHeartbeatDate,heartbeats:c.heartbeats})}else return}async add(c){var a;if(await this._canUseIndexedDBPromise){const t=await this.read();return we(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...c.heartbeats]})}else return}}function _e(e){return A0(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function cC(e){z4(new T3("platform-logger",c=>new dM(c),"PRIVATE")),z4(new T3("heartbeat",c=>new XM(c),"PRIVATE")),o3(I5,Se,e),o3(I5,Se,"esm2017"),o3("fire-js","")}cC("");var eC="firebase",aC="10.8.1";/**
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
 */o3(eC,aC,"app");/**
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
 */class $1{constructor(c){this.uid=c}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(c){return c.uid===this.uid}}$1.UNAUTHENTICATED=new $1(null),$1.GOOGLE_CREDENTIALS=new $1("google-credentials-uid"),$1.FIRST_PARTY=new $1("first-party-uid"),$1.MOCK_USER=new $1("mock-user");/**
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
 */let y4="10.8.1";/**
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
 */const H4=new P7("@firebase/firestore");function k0(e,...c){if(H4.logLevel<=t1.DEBUG){const a=c.map(F7);H4.debug(`Firestore (${y4}): ${e}`,...a)}}function R7(e,...c){if(H4.logLevel<=t1.ERROR){const a=c.map(F7);H4.error(`Firestore (${y4}): ${e}`,...a)}}function Mt(e,...c){if(H4.logLevel<=t1.WARN){const a=c.map(F7);H4.warn(`Firestore (${y4}): ${e}`,...a)}}function F7(e){if(typeof e=="string")return e;try{/**
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
*/return function(a){return JSON.stringify(a)}(e)}catch{return e}}/**
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
 */function z1(e="Unexpected state"){const c=`FIRESTORE (${y4}) INTERNAL ASSERTION FAILED: `+e;throw R7(c),new Error(c)}function X1(e,c){e||z1()}function S6(e,c){return e}/**
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
 */const ke="ok",rC="cancelled",j4="unknown",K="invalid-argument",tC="deadline-exceeded",nC="not-found",iC="permission-denied",D5="unauthenticated",sC="resource-exhausted",V4="failed-precondition",oC="aborted",lC="out-of-range",Ct="unimplemented",fC="internal",hC="unavailable";class B extends U2{constructor(c,a){super(c,a),this.code=c,this.message=a,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gt{constructor(c,a){this.user=a,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${c}`)}}class uC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(c,a){c.enqueueRetryable(()=>a($1.UNAUTHENTICATED))}shutdown(){}}class mC{constructor(c){this.token=c,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(c,a){this.changeListener=a,c.enqueueRetryable(()=>a(this.token.user))}shutdown(){this.changeListener=null}}class vC{constructor(c){this.auth=null,c.onInit(a=>{this.auth=a})}getToken(){return this.auth?this.auth.getToken().then(c=>c?(X1(typeof c.accessToken=="string"),new gt(c.accessToken,new $1(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(c,a){}shutdown(){}}class dC{constructor(c,a,r){this.t=c,this.i=a,this.o=r,this.type="FirstParty",this.user=$1.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const c=this.l();return c&&this.u.set("Authorization",c),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class pC{constructor(c,a,r){this.t=c,this.i=a,this.o=r}getToken(){return Promise.resolve(new dC(this.t,this.i,this.o))}start(c,a){c.enqueueRetryable(()=>a($1.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zC{constructor(c){this.value=c,this.type="AppCheck",this.headers=new Map,c&&c.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HC{constructor(c){this.h=c,this.appCheck=null,c.onInit(a=>{this.appCheck=a})}getToken(){return this.appCheck?this.appCheck.getToken().then(c=>c?(X1(typeof c.token=="string"),new zC(c.token)):null):Promise.resolve(null)}invalidateToken(){}start(c,a){}shutdown(){}}/**
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
 */class VC{constructor(c,a,r,t,n,i,s,o,l){this.databaseId=c,this.appId=a,this.persistenceKey=r,this.host=t,this.ssl=n,this.forceLongPolling=i,this.autoDetectLongPolling=s,this.longPollingOptions=o,this.useFetchStreams=l}}class o6{constructor(c,a){this.projectId=c,this.database=a||"(default)"}static empty(){return new o6("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(c){return c instanceof o6&&c.projectId===this.projectId&&c.database===this.database}}class l6{constructor(c,a,r){a===void 0?a=0:a>c.length&&z1(),r===void 0?r=c.length-a:r>c.length-a&&z1(),this.segments=c,this.offset=a,this.len=r}get length(){return this.len}isEqual(c){return l6.comparator(this,c)===0}child(c){const a=this.segments.slice(this.offset,this.limit());return c instanceof l6?c.forEach(r=>{a.push(r)}):a.push(c),this.construct(a)}limit(){return this.offset+this.length}popFirst(c){return c=c===void 0?1:c,this.construct(this.segments,this.offset+c,this.length-c)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(c){return this.segments[this.offset+c]}isEmpty(){return this.length===0}isPrefixOf(c){if(c.length<this.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==c.get(a))return!1;return!0}isImmediateParentOf(c){if(this.length+1!==c.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==c.get(a))return!1;return!0}forEach(c){for(let a=this.offset,r=this.limit();a<r;a++)c(this.segments[a])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(c,a){const r=Math.min(c.length,a.length);for(let t=0;t<r;t++){const n=c.get(t),i=a.get(t);if(n<i)return-1;if(n>i)return 1}return c.length<a.length?-1:c.length>a.length?1:0}}class M1 extends l6{construct(c,a,r){return new M1(c,a,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...c){const a=[];for(const r of c){if(r.indexOf("//")>=0)throw new B(K,`Invalid segment (${r}). Paths must not contain // in them.`);a.push(...r.split("/").filter(t=>t.length>0))}return new M1(a)}static emptyPath(){return new M1([])}}const MC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W1 extends l6{construct(c,a,r){return new W1(c,a,r)}static isValidIdentifier(c){return MC.test(c)}canonicalString(){return this.toArray().map(c=>(c=c.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W1.isValidIdentifier(c)||(c="`"+c+"`"),c)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W1(["__name__"])}static fromServerFormat(c){const a=[];let r="",t=0;const n=()=>{if(r.length===0)throw new B(K,`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);a.push(r),r=""};let i=!1;for(;t<c.length;){const s=c[t];if(s==="\\"){if(t+1===c.length)throw new B(K,"Path has trailing escape character: "+c);const o=c[t+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new B(K,"Path has invalid escape sequence: "+c);r+=o,t+=2}else s==="`"?(i=!i,t++):s!=="."||i?(r+=s,t++):(n(),t++)}if(n(),i)throw new B(K,"Unterminated ` in path: "+c);return new W1(a)}static emptyPath(){return new W1([])}}/**
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
 */class k1{constructor(c){this.path=c}static fromPath(c){return new k1(M1.fromString(c))}static fromName(c){return new k1(M1.fromString(c).popFirst(5))}static empty(){return new k1(M1.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(c){return this.path.length>=2&&this.path.get(this.path.length-2)===c}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(c){return c!==null&&M1.comparator(this.path,c.path)===0}toString(){return this.path.toString()}static comparator(c,a){return M1.comparator(c.path,a.path)}static isDocumentKey(c){return c.length%2==0}static fromSegments(c){return new k1(new M1(c.slice()))}}/**
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
 */function Lt(e,c,a){if(!a)throw new B(K,`Function ${e}() cannot be called with an empty ${c}.`)}function Te(e){if(!k1.isDocumentKey(e))throw new B(K,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Pe(e){if(k1.isDocumentKey(e))throw new B(K,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function h8(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const c=function(r){return r.constructor?r.constructor.name:null}(e);return c?`a custom ${c} object`:"an object"}}return typeof e=="function"?"a function":z1()}function $3(e,c){if("_delegate"in e&&(e=e._delegate),!(e instanceof c)){if(c.name===e.constructor.name)throw new B(K,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const a=h8(e);throw new B(K,`Expected type '${c.name}', but it was: ${a}`)}}return e}/**
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
 */function bt(e){const c={};return e.timeoutSeconds!==void 0&&(c.timeoutSeconds=e.timeoutSeconds),c}/**
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
 */let J6=null;function CC(){return J6===null?J6=function(){return 268435456+Math.round(2147483648*Math.random())}():J6++,"0x"+J6.toString(16)}/**
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
 */function gC(e){return e==null}function T0(e){return e===0&&1/e==-1/0}/**
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
 */const LC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Ee,J;function Ie(e){if(e===void 0)return R7("RPC_ERROR","HTTP error has no status"),j4;switch(e){case 200:return ke;case 400:return V4;case 401:return D5;case 403:return iC;case 404:return nC;case 409:return oC;case 416:return lC;case 429:return sC;case 499:return rC;case 500:return j4;case 501:return Ct;case 503:return hC;case 504:return tC;default:return e>=200&&e<300?ke:e>=400&&e<500?V4:e>=500&&e<600?fC:j4}}/**
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
 */(J=Ee||(Ee={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";class bC extends class{constructor(a){this.databaseInfo=a,this.databaseId=a.databaseId;const r=a.ssl?"https":"http",t=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.m=r+"://"+a.host,this.A=`projects/${t}/databases/${n}`,this.T=this.databaseId.database==="(default)"?`project_id=${t}`:`project_id=${t}&database_id=${n}`}get R(){return!1}P(a,r,t,n,i){const s=CC(),o=this.I(a,r.toUriEncodedString());k0("RestConnection",`Sending RPC '${a}' ${s}:`,o,t);const l={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(l,n,i),this.p(a,o,l,t).then(f=>(k0("RestConnection",`Received RPC '${a}' ${s}: `,f),f),f=>{throw Mt("RestConnection",`RPC '${a}' ${s} failed with error: `,f,"url: ",o,"request:",t),f})}g(a,r,t,n,i,s){return this.P(a,r,t,n,i)}V(a,r,t){a["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+y4}(),a["Content-Type"]="text/plain",this.databaseInfo.appId&&(a["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((n,i)=>a[i]=n),t&&t.headers.forEach((n,i)=>a[i]=n)}I(a,r){const t=LC[a];return`${this.m}/v1/${r}:${t}`}terminate(){}}{constructor(c,a){super(c),this.F=a}v(c,a){throw new Error("Not supported by FetchConnection")}async p(c,a,r,t){var n;const i=JSON.stringify(t);let s;try{s=await this.F(a,{method:"POST",headers:r,body:i})}catch(o){const l=o;throw new B(Ie(l.status),"Request failed with error: "+l.statusText)}if(!s.ok){let o=await s.json();Array.isArray(o)&&(o=o[0]);const l=(n=o==null?void 0:o.error)===null||n===void 0?void 0:n.message;throw new B(Ie(s.status),`Request failed with error: ${l??s.statusText}`)}return s.json()}}/**
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
 */function xC(e){const c=typeof self<"u"&&(self.crypto||self.msCrypto),a=new Uint8Array(e);if(c&&typeof c.getRandomValues=="function")c.getRandomValues(a);else for(let r=0;r<e;r++)a[r]=Math.floor(256*Math.random());return a}/**
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
 */class yC{static newId(){const c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=Math.floor(256/c.length)*c.length;let r="";for(;r.length<20;){const t=xC(40);for(let n=0;n<t.length;++n)r.length<20&&t[n]<a&&(r+=c.charAt(t[n]%c.length))}return r}}function N1(e,c){return e<c?-1:e>c?1:0}function xt(e,c,a){return e.length===c.length&&e.every((r,t)=>a(r,c[t]))}/**
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
 */function Re(e){let c=0;for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&c++;return c}function w6(e,c){for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&c(a,e[a])}/**
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
 */class NC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class I2{constructor(c){this.binaryString=c}static fromBase64String(c){const a=function(t){try{return atob(t)}catch(n){throw typeof DOMException<"u"&&n instanceof DOMException?new NC("Invalid base64 string: "+n):n}}(c);return new I2(a)}static fromUint8Array(c){const a=function(t){let n="";for(let i=0;i<t.length;++i)n+=String.fromCharCode(t[i]);return n}(c);return new I2(a)}[Symbol.iterator](){let c=0;return{next:()=>c<this.binaryString.length?{value:this.binaryString.charCodeAt(c++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(a){return btoa(a)}(this.binaryString)}toUint8Array(){return function(a){const r=new Uint8Array(a.length);for(let t=0;t<a.length;t++)r[t]=a.charCodeAt(t);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(c){return N1(this.binaryString,c.binaryString)}isEqual(c){return this.binaryString===c.binaryString}}I2.EMPTY_BYTE_STRING=new I2("");const SC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function E3(e){if(X1(!!e),typeof e=="string"){let c=0;const a=SC.exec(e);if(X1(!!a),a[1]){let t=a[1];t=(t+"000000000").substr(0,9),c=Number(t)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:c}}return{seconds:C1(e.seconds),nanos:C1(e.nanos)}}function C1(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function f6(e){return typeof e=="string"?I2.fromBase64String(e):I2.fromUint8Array(e)}/**
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
 */class J1{constructor(c,a){if(this.seconds=c,this.nanoseconds=a,a<0)throw new B(K,"Timestamp nanoseconds out of range: "+a);if(a>=1e9)throw new B(K,"Timestamp nanoseconds out of range: "+a);if(c<-62135596800)throw new B(K,"Timestamp seconds out of range: "+c);if(c>=253402300800)throw new B(K,"Timestamp seconds out of range: "+c)}static now(){return J1.fromMillis(Date.now())}static fromDate(c){return J1.fromMillis(c.getTime())}static fromMillis(c){const a=Math.floor(c/1e3),r=Math.floor(1e6*(c-1e3*a));return new J1(a,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(c){return this.seconds===c.seconds?N1(this.nanoseconds,c.nanoseconds):N1(this.seconds,c.seconds)}isEqual(c){return c.seconds===this.seconds&&c.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const c=this.seconds- -62135596800;return String(c).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function yt(e){var c,a;return((a=(((c=e==null?void 0:e.mapValue)===null||c===void 0?void 0:c.fields)||{}).__type__)===null||a===void 0?void 0:a.stringValue)==="server_timestamp"}function Nt(e){const c=e.mapValue.fields.__previous_value__;return yt(c)?Nt(c):c}function h6(e){const c=E3(e.mapValue.fields.__local_write_time__.timestampValue);return new J1(c.seconds,c.nanos)}/**
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
 */const Q6={fields:{__type__:{stringValue:"__max__"}}};function I3(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?yt(e)?4:function(a){return(((a.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(e)?9007199254740991:10:z1()}function P0(e,c){if(e===c)return!0;const a=I3(e);if(a!==I3(c))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===c.booleanValue;case 4:return h6(e).isEqual(h6(c));case 3:return function(t,n){if(typeof t.timestampValue=="string"&&typeof n.timestampValue=="string"&&t.timestampValue.length===n.timestampValue.length)return t.timestampValue===n.timestampValue;const i=E3(t.timestampValue),s=E3(n.timestampValue);return i.seconds===s.seconds&&i.nanos===s.nanos}(e,c);case 5:return e.stringValue===c.stringValue;case 6:return function(t,n){return f6(t.bytesValue).isEqual(f6(n.bytesValue))}(e,c);case 7:return e.referenceValue===c.referenceValue;case 8:return function(t,n){return C1(t.geoPointValue.latitude)===C1(n.geoPointValue.latitude)&&C1(t.geoPointValue.longitude)===C1(n.geoPointValue.longitude)}(e,c);case 2:return function(t,n){if("integerValue"in t&&"integerValue"in n)return C1(t.integerValue)===C1(n.integerValue);if("doubleValue"in t&&"doubleValue"in n){const i=C1(t.doubleValue),s=C1(n.doubleValue);return i===s?T0(i)===T0(s):isNaN(i)&&isNaN(s)}return!1}(e,c);case 9:return xt(e.arrayValue.values||[],c.arrayValue.values||[],P0);case 10:return function(t,n){const i=t.mapValue.fields||{},s=n.mapValue.fields||{};if(Re(i)!==Re(s))return!1;for(const o in i)if(i.hasOwnProperty(o)&&(s[o]===void 0||!P0(i[o],s[o])))return!1;return!0}(e,c);default:return z1()}}function u6(e,c){return(e.values||[]).find(a=>P0(a,c))!==void 0}function E0(e,c){if(e===c)return 0;const a=I3(e),r=I3(c);if(a!==r)return N1(a,r);switch(a){case 0:case 9007199254740991:return 0;case 1:return N1(e.booleanValue,c.booleanValue);case 2:return function(n,i){const s=C1(n.integerValue||n.doubleValue),o=C1(i.integerValue||i.doubleValue);return s<o?-1:s>o?1:s===o?0:isNaN(s)?isNaN(o)?0:-1:1}(e,c);case 3:return Fe(e.timestampValue,c.timestampValue);case 4:return Fe(h6(e),h6(c));case 5:return N1(e.stringValue,c.stringValue);case 6:return function(n,i){const s=f6(n),o=f6(i);return s.compareTo(o)}(e.bytesValue,c.bytesValue);case 7:return function(n,i){const s=n.split("/"),o=i.split("/");for(let l=0;l<s.length&&l<o.length;l++){const f=N1(s[l],o[l]);if(f!==0)return f}return N1(s.length,o.length)}(e.referenceValue,c.referenceValue);case 8:return function(n,i){const s=N1(C1(n.latitude),C1(i.latitude));return s!==0?s:N1(C1(n.longitude),C1(i.longitude))}(e.geoPointValue,c.geoPointValue);case 9:return function(n,i){const s=n.values||[],o=i.values||[];for(let l=0;l<s.length&&l<o.length;++l){const f=E0(s[l],o[l]);if(f)return f}return N1(s.length,o.length)}(e.arrayValue,c.arrayValue);case 10:return function(n,i){if(n===Q6&&i===Q6)return 0;if(n===Q6)return 1;if(i===Q6)return-1;const s=n.fields||{},o=Object.keys(s),l=i.fields||{},f=Object.keys(l);o.sort(),f.sort();for(let h=0;h<o.length&&h<f.length;++h){const u=N1(o[h],f[h]);if(u!==0)return u;const d=E0(s[o[h]],l[f[h]]);if(d!==0)return d}return N1(o.length,f.length)}(e.mapValue,c.mapValue);default:throw z1()}}function Fe(e,c){if(typeof e=="string"&&typeof c=="string"&&e.length===c.length)return N1(e,c);const a=E3(e),r=E3(c),t=N1(a.seconds,r.seconds);return t!==0?t:N1(a.nanos,r.nanos)}function De(e,c){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${c.path.canonicalString()}`}}function St(e){return!!e&&"arrayValue"in e}function Oe(e){return!!e&&"nullValue"in e}function Be(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function o5(e){return!!e&&"mapValue"in e}function K4(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const c={mapValue:{fields:{}}};return w6(e.mapValue.fields,(a,r)=>c.mapValue.fields[a]=K4(r)),c}if(e.arrayValue){const c={arrayValue:{values:[]}};for(let a=0;a<(e.arrayValue.values||[]).length;++a)c.arrayValue.values[a]=K4(e.arrayValue.values[a]);return c}return Object.assign({},e)}class Ue{constructor(c,a){this.position=c,this.inclusive=a}}/**
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
 */class wt{}class u2 extends wt{constructor(c,a,r){super(),this.field=c,this.op=a,this.value=r}static create(c,a,r){return c.isKeyField()?a==="in"||a==="not-in"?this.createKeyFieldInFilter(c,a,r):new wC(c,a,r):a==="array-contains"?new kC(c,r):a==="in"?new TC(c,r):a==="not-in"?new PC(c,r):a==="array-contains-any"?new EC(c,r):new u2(c,a,r)}static createKeyFieldInFilter(c,a,r){return a==="in"?new AC(c,r):new _C(c,r)}matches(c){const a=c.data.field(this.field);return this.op==="!="?a!==null&&this.matchesComparison(E0(a,this.value)):a!==null&&I3(this.value)===I3(a)&&this.matchesComparison(E0(a,this.value))}matchesComparison(c){switch(this.op){case"<":return c<0;case"<=":return c<=0;case"==":return c===0;case"!=":return c!==0;case">":return c>0;case">=":return c>=0;default:return z1()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class A6 extends wt{constructor(c,a){super(),this.filters=c,this.op=a,this.D=null}static create(c,a){return new A6(c,a)}matches(c){return function(r){return r.op==="and"}(this)?this.filters.find(a=>!a.matches(c))===void 0:this.filters.find(a=>a.matches(c))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((c,a)=>c.concat(a.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class wC extends u2{constructor(c,a,r){super(c,a,r),this.key=k1.fromName(r.referenceValue)}matches(c){const a=k1.comparator(c.key,this.key);return this.matchesComparison(a)}}class AC extends u2{constructor(c,a){super(c,"in",a),this.keys=At("in",a)}matches(c){return this.keys.some(a=>a.isEqual(c.key))}}class _C extends u2{constructor(c,a){super(c,"not-in",a),this.keys=At("not-in",a)}matches(c){return!this.keys.some(a=>a.isEqual(c.key))}}function At(e,c){var a;return(((a=c.arrayValue)===null||a===void 0?void 0:a.values)||[]).map(r=>k1.fromName(r.referenceValue))}class kC extends u2{constructor(c,a){super(c,"array-contains",a)}matches(c){const a=c.data.field(this.field);return St(a)&&u6(a.arrayValue,this.value)}}class TC extends u2{constructor(c,a){super(c,"in",a)}matches(c){const a=c.data.field(this.field);return a!==null&&u6(this.value.arrayValue,a)}}class PC extends u2{constructor(c,a){super(c,"not-in",a)}matches(c){if(u6(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const a=c.data.field(this.field);return a!==null&&!u6(this.value.arrayValue,a)}}class EC extends u2{constructor(c,a){super(c,"array-contains-any",a)}matches(c){const a=c.data.field(this.field);return!(!St(a)||!a.arrayValue.values)&&a.arrayValue.values.some(r=>u6(this.value.arrayValue,r))}}/**
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
 */class O5{constructor(c,a="asc"){this.field=c,this.dir=a}}/**
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
 */class w1{constructor(c){this.timestamp=c}static fromTimestamp(c){return new w1(c)}static min(){return new w1(new J1(0,0))}static max(){return new w1(new J1(253402300799,999999999))}compareTo(c){return this.timestamp._compareTo(c.timestamp)}isEqual(c){return this.timestamp.isEqual(c.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class I0{constructor(c,a){this.comparator=c,this.root=a||A1.EMPTY}insert(c,a){return new I0(this.comparator,this.root.insert(c,a,this.comparator).copy(null,null,A1.BLACK,null,null))}remove(c){return new I0(this.comparator,this.root.remove(c,this.comparator).copy(null,null,A1.BLACK,null,null))}get(c){let a=this.root;for(;!a.isEmpty();){const r=this.comparator(c,a.key);if(r===0)return a.value;r<0?a=a.left:r>0&&(a=a.right)}return null}indexOf(c){let a=0,r=this.root;for(;!r.isEmpty();){const t=this.comparator(c,r.key);if(t===0)return a+r.left.size;t<0?r=r.left:(a+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(c){return this.root.inorderTraversal(c)}forEach(c){this.inorderTraversal((a,r)=>(c(a,r),!1))}toString(){const c=[];return this.inorderTraversal((a,r)=>(c.push(`${a}:${r}`),!1)),`{${c.join(", ")}}`}reverseTraversal(c){return this.root.reverseTraversal(c)}getIterator(){return new c0(this.root,null,this.comparator,!1)}getIteratorFrom(c){return new c0(this.root,c,this.comparator,!1)}getReverseIterator(){return new c0(this.root,null,this.comparator,!0)}getReverseIteratorFrom(c){return new c0(this.root,c,this.comparator,!0)}}class c0{constructor(c,a,r,t){this.isReverse=t,this.nodeStack=[];let n=1;for(;!c.isEmpty();)if(n=a?r(c.key,a):1,a&&t&&(n*=-1),n<0)c=this.isReverse?c.left:c.right;else{if(n===0){this.nodeStack.push(c);break}this.nodeStack.push(c),c=this.isReverse?c.right:c.left}}getNext(){let c=this.nodeStack.pop();const a={key:c.key,value:c.value};if(this.isReverse)for(c=c.left;!c.isEmpty();)this.nodeStack.push(c),c=c.right;else for(c=c.right;!c.isEmpty();)this.nodeStack.push(c),c=c.left;return a}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const c=this.nodeStack[this.nodeStack.length-1];return{key:c.key,value:c.value}}}class A1{constructor(c,a,r,t,n){this.key=c,this.value=a,this.color=r??A1.RED,this.left=t??A1.EMPTY,this.right=n??A1.EMPTY,this.size=this.left.size+1+this.right.size}copy(c,a,r,t,n){return new A1(c??this.key,a??this.value,r??this.color,t??this.left,n??this.right)}isEmpty(){return!1}inorderTraversal(c){return this.left.inorderTraversal(c)||c(this.key,this.value)||this.right.inorderTraversal(c)}reverseTraversal(c){return this.right.reverseTraversal(c)||c(this.key,this.value)||this.left.reverseTraversal(c)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(c,a,r){let t=this;const n=r(c,t.key);return t=n<0?t.copy(null,null,null,t.left.insert(c,a,r),null):n===0?t.copy(null,a,null,null,null):t.copy(null,null,null,null,t.right.insert(c,a,r)),t.fixUp()}removeMin(){if(this.left.isEmpty())return A1.EMPTY;let c=this;return c.left.isRed()||c.left.left.isRed()||(c=c.moveRedLeft()),c=c.copy(null,null,null,c.left.removeMin(),null),c.fixUp()}remove(c,a){let r,t=this;if(a(c,t.key)<0)t.left.isEmpty()||t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.remove(c,a),null);else{if(t.left.isRed()&&(t=t.rotateRight()),t.right.isEmpty()||t.right.isRed()||t.right.left.isRed()||(t=t.moveRedRight()),a(c,t.key)===0){if(t.right.isEmpty())return A1.EMPTY;r=t.right.min(),t=t.copy(r.key,r.value,null,null,t.right.removeMin())}t=t.copy(null,null,null,null,t.right.remove(c,a))}return t.fixUp()}isRed(){return this.color}fixUp(){let c=this;return c.right.isRed()&&!c.left.isRed()&&(c=c.rotateLeft()),c.left.isRed()&&c.left.left.isRed()&&(c=c.rotateRight()),c.left.isRed()&&c.right.isRed()&&(c=c.colorFlip()),c}moveRedLeft(){let c=this.colorFlip();return c.right.left.isRed()&&(c=c.copy(null,null,null,null,c.right.rotateRight()),c=c.rotateLeft(),c=c.colorFlip()),c}moveRedRight(){let c=this.colorFlip();return c.left.left.isRed()&&(c=c.rotateRight(),c=c.colorFlip()),c}rotateLeft(){const c=this.copy(null,null,A1.RED,null,this.right.left);return this.right.copy(null,null,this.color,c,null)}rotateRight(){const c=this.copy(null,null,A1.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,c)}colorFlip(){const c=this.left.copy(null,null,!this.left.color,null,null),a=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,c,a)}checkMaxDepth(){const c=this.check();return Math.pow(2,c)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z1();const c=this.left.check();if(c!==this.right.check())throw z1();return c+(this.isRed()?0:1)}}A1.EMPTY=null,A1.RED=!0,A1.BLACK=!1;A1.EMPTY=new class{constructor(){this.size=0}get key(){throw z1()}get value(){throw z1()}get color(){throw z1()}get left(){throw z1()}get right(){throw z1()}copy(c,a,r,t,n){return this}insert(c,a,r){return new A1(c,a)}remove(c,a){return this}isEmpty(){return!0}inorderTraversal(c){return!1}reverseTraversal(c){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class m6{constructor(c){this.comparator=c,this.data=new I0(this.comparator)}has(c){return this.data.get(c)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(c){return this.data.indexOf(c)}forEach(c){this.data.inorderTraversal((a,r)=>(c(a),!1))}forEachInRange(c,a){const r=this.data.getIteratorFrom(c[0]);for(;r.hasNext();){const t=r.getNext();if(this.comparator(t.key,c[1])>=0)return;a(t.key)}}forEachWhile(c,a){let r;for(r=a!==void 0?this.data.getIteratorFrom(a):this.data.getIterator();r.hasNext();)if(!c(r.getNext().key))return}firstAfterOrEqual(c){const a=this.data.getIteratorFrom(c);return a.hasNext()?a.getNext().key:null}getIterator(){return new qe(this.data.getIterator())}getIteratorFrom(c){return new qe(this.data.getIteratorFrom(c))}add(c){return this.copy(this.data.remove(c).insert(c,!0))}delete(c){return this.has(c)?this.copy(this.data.remove(c)):this}isEmpty(){return this.data.isEmpty()}unionWith(c){let a=this;return a.size<c.size&&(a=c,c=this),c.forEach(r=>{a=a.add(r)}),a}isEqual(c){if(!(c instanceof m6)||this.size!==c.size)return!1;const a=this.data.getIterator(),r=c.data.getIterator();for(;a.hasNext();){const t=a.getNext().key,n=r.getNext().key;if(this.comparator(t,n)!==0)return!1}return!0}toArray(){const c=[];return this.forEach(a=>{c.push(a)}),c}toString(){const c=[];return this.forEach(a=>c.push(a)),"SortedSet("+c.toString()+")"}copy(c){const a=new m6(this.comparator);return a.data=c,a}}class qe{constructor(c){this.iter=c}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class R3{constructor(c){this.fields=c,c.sort(W1.comparator)}static empty(){return new R3([])}unionWith(c){let a=new m6(W1.comparator);for(const r of this.fields)a=a.add(r);for(const r of c)a=a.add(r);return new R3(a.toArray())}covers(c){for(const a of this.fields)if(a.isPrefixOf(c))return!0;return!1}isEqual(c){return xt(this.fields,c.fields,(a,r)=>a.isEqual(r))}}/**
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
 */class Y1{constructor(c){this.value=c}static empty(){return new Y1({mapValue:{}})}field(c){if(c.isEmpty())return this.value;{let a=this.value;for(let r=0;r<c.length-1;++r)if(a=(a.mapValue.fields||{})[c.get(r)],!o5(a))return null;return a=(a.mapValue.fields||{})[c.lastSegment()],a||null}}set(c,a){this.getFieldsMap(c.popLast())[c.lastSegment()]=K4(a)}setAll(c){let a=W1.emptyPath(),r={},t=[];c.forEach((i,s)=>{if(!a.isImmediateParentOf(s)){const o=this.getFieldsMap(a);this.applyChanges(o,r,t),r={},t=[],a=s.popLast()}i?r[s.lastSegment()]=K4(i):t.push(s.lastSegment())});const n=this.getFieldsMap(a);this.applyChanges(n,r,t)}delete(c){const a=this.field(c.popLast());o5(a)&&a.mapValue.fields&&delete a.mapValue.fields[c.lastSegment()]}isEqual(c){return P0(this.value,c.value)}getFieldsMap(c){let a=this.value;a.mapValue.fields||(a.mapValue={fields:{}});for(let r=0;r<c.length;++r){let t=a.mapValue.fields[c.get(r)];o5(t)&&t.mapValue.fields||(t={mapValue:{fields:{}}},a.mapValue.fields[c.get(r)]=t),a=t}return a.mapValue.fields}applyChanges(c,a,r){w6(a,(t,n)=>c[t]=n);for(const t of r)delete c[t]}clone(){return new Y1(K4(this.value))}}/**
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
 */class z2{constructor(c,a,r,t,n,i,s){this.key=c,this.documentType=a,this.version=r,this.readTime=t,this.createTime=n,this.data=i,this.documentState=s}static newInvalidDocument(c){return new z2(c,0,w1.min(),w1.min(),w1.min(),Y1.empty(),0)}static newFoundDocument(c,a,r,t){return new z2(c,1,a,w1.min(),r,t,0)}static newNoDocument(c,a){return new z2(c,2,a,w1.min(),w1.min(),Y1.empty(),0)}static newUnknownDocument(c,a){return new z2(c,3,a,w1.min(),w1.min(),Y1.empty(),2)}convertToFoundDocument(c,a){return!this.createTime.isEqual(w1.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=c),this.version=c,this.documentType=1,this.data=a,this.documentState=0,this}convertToNoDocument(c){return this.version=c,this.documentType=2,this.data=Y1.empty(),this.documentState=0,this}convertToUnknownDocument(c){return this.version=c,this.documentType=3,this.data=Y1.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=w1.min(),this}setReadTime(c){return this.readTime=c,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(c){return c instanceof z2&&this.key.isEqual(c.key)&&this.version.isEqual(c.version)&&this.documentType===c.documentType&&this.documentState===c.documentState&&this.data.isEqual(c.data)}mutableCopy(){return new z2(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class IC{constructor(c,a=null,r=[],t=[],n=null,i=null,s=null){this.path=c,this.collectionGroup=a,this.orderBy=r,this.filters=t,this.limit=n,this.startAt=i,this.endAt=s,this.C=null}}function $e(e,c=null,a=[],r=[],t=null,n=null,i=null){return new IC(e,c,a,r,t,n,i)}/**
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
 */class _t{constructor(c,a=null,r=[],t=[],n=null,i="F",s=null,o=null){this.path=c,this.collectionGroup=a,this.explicitOrderBy=r,this.filters=t,this.limit=n,this.limitType=i,this.startAt=s,this.endAt=o,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function RC(e){return e.collectionGroup!==null}function FC(e){const c=S6(e);if(c.S===null){c.S=[];const a=new Set;for(const n of c.explicitOrderBy)c.S.push(n),a.add(n.field.canonicalString());const r=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc";(function(i){let s=new m6(W1.comparator);return i.filters.forEach(o=>{o.getFlattenedFilters().forEach(l=>{l.isInequality()&&(s=s.add(l.field))})}),s})(c).forEach(n=>{a.has(n.canonicalString())||n.isKeyField()||c.S.push(new O5(n,r))}),a.has(W1.keyField().canonicalString())||c.S.push(new O5(W1.keyField(),r))}return c.S}function DC(e){const c=S6(e);return c.N||(c.N=OC(c,FC(e))),c.N}function OC(e,c){if(e.limitType==="F")return $e(e.path,e.collectionGroup,c,e.filters,e.limit,e.startAt,e.endAt);{c=c.map(t=>{const n=t.dir==="desc"?"asc":"desc";return new O5(t.field,n)});const a=e.endAt?new Ue(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ue(e.startAt.position,e.startAt.inclusive):null;return $e(e.path,e.collectionGroup,c,e.filters,e.limit,a,r)}}function B5(e,c){const a=e.filters.concat([c]);return new _t(e.path,e.collectionGroup,e.explicitOrderBy.slice(),a,e.limit,e.limitType,e.startAt,e.endAt)}/**
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
 */function BC(e,c){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!T0(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(c)?function(r){return{integerValue:""+r}}(c):function(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:T0(t)?"-0":t}}(e,c)}/**
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
 */class u8{constructor(){this._=void 0}}class UC extends u8{}class kt extends u8{constructor(c){super(),this.elements=c}}class Tt extends u8{constructor(c){super(),this.elements=c}}class qC extends u8{constructor(c,a){super(),this.serializer=c,this.q=a}}/**
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
 */class Pt{constructor(c,a){this.field=c,this.transform=a}}class l3{constructor(c,a){this.updateTime=c,this.exists=a}static none(){return new l3}static exists(c){return new l3(void 0,c)}static updateTime(c){return new l3(c)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(c){return this.exists===c.exists&&(this.updateTime?!!c.updateTime&&this.updateTime.isEqual(c.updateTime):!c.updateTime)}}class m8{}class Et extends m8{constructor(c,a,r,t=[]){super(),this.key=c,this.value=a,this.precondition=r,this.fieldTransforms=t,this.type=0}getFieldMask(){return null}}class D7 extends m8{constructor(c,a,r,t,n=[]){super(),this.key=c,this.data=a,this.fieldMask=r,this.precondition=t,this.fieldTransforms=n,this.type=1}getFieldMask(){return this.fieldMask}}class It extends m8{constructor(c,a){super(),this.key=c,this.precondition=a,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $C extends m8{constructor(c,a){super(),this.key=c,this.precondition=a,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const WC={asc:"ASCENDING",desc:"DESCENDING"},GC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jC={and:"AND",or:"OR"};class KC{constructor(c,a){this.databaseId=c,this.useProto3Json=a}}function U5(e,c){return e.useProto3Json?`${new Date(1e3*c.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+c.nanoseconds).slice(-9)}Z`:{seconds:""+c.seconds,nanos:c.nanoseconds}}function ZC(e,c){return e.useProto3Json?c.toBase64():c.toUint8Array()}function YC(e,c){return U5(e,c.toTimestamp())}function Z4(e){return X1(!!e),w1.fromTimestamp(function(a){const r=E3(a);return new J1(r.seconds,r.nanos)}(e))}function O7(e,c){return q5(e,c).canonicalString()}function q5(e,c){const a=function(t){return new M1(["projects",t.projectId,"databases",t.database])}(e).child("documents");return c===void 0?a:a.child(c)}function R0(e,c){return O7(e.databaseId,c.path)}function $5(e,c){const a=function(t){const n=M1.fromString(t);return X1(Ft(n)),n}(c);if(a.get(1)!==e.databaseId.projectId)throw new B(K,"Tried to deserialize key from different project: "+a.get(1)+" vs "+e.databaseId.projectId);if(a.get(3)!==e.databaseId.database)throw new B(K,"Tried to deserialize key from different database: "+a.get(3)+" vs "+e.databaseId.database);return new k1(function(t){return X1(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}(a))}function We(e,c,a){return{name:R0(e,c),fields:a.value.mapValue.fields}}function XC(e,c){return"found"in c?function(r,t){X1(!!t.found),t.found.name,t.found.updateTime;const n=$5(r,t.found.name),i=Z4(t.found.updateTime),s=t.found.createTime?Z4(t.found.createTime):w1.min(),o=new Y1({mapValue:{fields:t.found.fields}});return z2.newFoundDocument(n,i,s,o)}(e,c):"missing"in c?function(r,t){X1(!!t.missing),X1(!!t.readTime);const n=$5(r,t.missing),i=Z4(t.readTime);return z2.newNoDocument(n,i)}(e,c):z1()}function JC(e,c){let a;if(c instanceof Et)a={update:We(e,c.key,c.value)};else if(c instanceof It)a={delete:R0(e,c.key)};else if(c instanceof D7)a={update:We(e,c.key,c.data),updateMask:rg(c.fieldMask)};else{if(!(c instanceof $C))return z1();a={verify:R0(e,c.key)}}return c.fieldTransforms.length>0&&(a.updateTransforms=c.fieldTransforms.map(r=>function(n,i){const s=i.transform;if(s instanceof UC)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(s instanceof kt)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:s.elements}};if(s instanceof Tt)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:s.elements}};if(s instanceof qC)return{fieldPath:i.field.canonicalString(),increment:s.q};throw z1()}(0,r))),c.precondition.isNone||(a.currentDocument=function(t,n){return n.updateTime!==void 0?{updateTime:YC(t,n.updateTime)}:n.exists!==void 0?{exists:n.exists}:z1()}(e,c.precondition)),a}function QC(e,c){const a={structuredQuery:{}},r=c.path;let t;c.collectionGroup!==null?(t=r,a.structuredQuery.from=[{collectionId:c.collectionGroup,allDescendants:!0}]):(t=r.popLast(),a.structuredQuery.from=[{collectionId:r.lastSegment()}]),a.parent=function(l,f){return O7(l.databaseId,f)}(e,t);const n=function(l){if(l.length!==0)return Rt(A6.create(l,"and"))}(c.filters);n&&(a.structuredQuery.where=n);const i=function(l){if(l.length!==0)return l.map(f=>function(u){return{field:J3(u.field),direction:cg(u.dir)}}(f))}(c.orderBy);i&&(a.structuredQuery.orderBy=i);const s=function(l,f){return l.useProto3Json||gC(f)?f:{value:f}}(e,c.limit);return s!==null&&(a.structuredQuery.limit=s),c.startAt&&(a.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(c.startAt)),c.endAt&&(a.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(c.endAt)),{B:a,parent:t}}function cg(e){return WC[e]}function eg(e){return GC[e]}function ag(e){return jC[e]}function J3(e){return{fieldPath:e.canonicalString()}}function Rt(e){return e instanceof u2?function(a){if(a.op==="=="){if(Be(a.value))return{unaryFilter:{field:J3(a.field),op:"IS_NAN"}};if(Oe(a.value))return{unaryFilter:{field:J3(a.field),op:"IS_NULL"}}}else if(a.op==="!="){if(Be(a.value))return{unaryFilter:{field:J3(a.field),op:"IS_NOT_NAN"}};if(Oe(a.value))return{unaryFilter:{field:J3(a.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:J3(a.field),op:eg(a.op),value:a.value}}}(e):e instanceof A6?function(a){const r=a.getFilters().map(t=>Rt(t));return r.length===1?r[0]:{compositeFilter:{op:ag(a.op),filters:r}}}(e):z1()}function rg(e){const c=[];return e.fields.forEach(a=>c.push(a.canonicalString())),{fieldPaths:c}}function Ft(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */function B7(e){return new KC(e,!0)}/**
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
 */class tg extends class{}{constructor(c,a,r,t){super(),this.authCredentials=c,this.appCheckCredentials=a,this.connection=r,this.serializer=t,this.Y=!1}Z(){if(this.Y)throw new B(V4,"The client has already been terminated.")}P(c,a,r,t){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,i])=>this.connection.P(c,q5(a,r),t,n,i)).catch(n=>{throw n.name==="FirebaseError"?(n.code===D5&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),n):new B(j4,n.toString())})}g(c,a,r,t,n){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.g(c,q5(a,r),t,i,s,n)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D5&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(j4,i.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function v8(e,c){const a=S6(e),r={writes:c.map(t=>JC(a.serializer,t))};await a.P("Commit",a.serializer.databaseId,M1.emptyPath(),r)}async function ng(e,c){const a=S6(e),r={documents:c.map(s=>R0(a.serializer,s))},t=await a.g("BatchGetDocuments",a.serializer.databaseId,M1.emptyPath(),r,c.length),n=new Map;t.forEach(s=>{const o=XC(a.serializer,s);n.set(o.key.toString(),o)});const i=[];return c.forEach(s=>{const o=n.get(s.toString());X1(!!o),i.push(o)}),i}async function ig(e,c){const a=S6(e),{B:r,parent:t}=QC(a.serializer,DC(c));return(await a.g("RunQuery",a.serializer.databaseId,t,{structuredQuery:r.structuredQuery})).filter(n=>!!n.document).map(n=>function(s,o,l){const f=$5(s,o.name),h=Z4(o.updateTime),u=o.createTime?Z4(o.createTime):w1.min(),d=new Y1({mapValue:{fields:o.fields}}),z=z2.newFoundDocument(f,h,u,d);return l&&z.setHasCommittedMutations(),l?z.setHasCommittedMutations():z}(a.serializer,n.document,void 0))}/**
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
 */const Y4=new Map;function N4(e){if(e._terminated)throw new B(V4,"The client has already been terminated.");if(!Y4.has(e)){k0("ComponentProvider","Initializing Datastore");const c=function(n){return new bC(n,fetch.bind(null))}(function(n,i,s,o){return new VC(n,i,s,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,bt(o.experimentalLongPollingOptions),o.useFetchStreams)}(e._databaseId,e.app.options.appId||"",e._persistenceKey,e._freezeSettings())),a=B7(e._databaseId),r=function(n,i,s,o){return new tg(n,i,s,o)}(e._authCredentials,e._appCheckCredentials,c,a);Y4.set(e,r)}return Y4.get(e)}class Ge{constructor(c){var a,r;if(c.host===void 0){if(c.ssl!==void 0)throw new B(K,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=c.host,this.ssl=(a=c.ssl)===null||a===void 0||a;if(this.credentials=c.credentials,this.ignoreUndefinedProperties=!!c.ignoreUndefinedProperties,this.localCache=c.localCache,c.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(c.cacheSizeBytes!==-1&&c.cacheSizeBytes<1048576)throw new B(K,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=c.cacheSizeBytes}(function(n,i,s,o){if(i===!0&&o===!0)throw new B(K,`${n} and ${s} cannot be used together.`)})("experimentalForceLongPolling",c.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",c.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!c.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:c.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!c.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bt((r=c.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new B(K,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new B(K,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new B(K,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!c.useFetchStreams}isEqual(c){return this.host===c.host&&this.ssl===c.ssl&&this.credentials===c.credentials&&this.cacheSizeBytes===c.cacheSizeBytes&&this.experimentalForceLongPolling===c.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===c.experimentalAutoDetectLongPolling&&function(r,t){return r.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,c.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===c.ignoreUndefinedProperties&&this.useFetchStreams===c.useFetchStreams}}class d8{constructor(c,a,r,t){this._authCredentials=c,this._appCheckCredentials=a,this._databaseId=r,this._app=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ge({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(V4,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(c){if(this._settingsFrozen)throw new B(V4,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ge(c),c.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uC;switch(r.type){case"firstParty":return new pC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(K,"makeAuthCredentialsProvider failed due to invalid credential type")}}(c.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(a){const r=Y4.get(a);r&&(k0("ComponentProvider","Removing Datastore"),Y4.delete(a),r.terminate())}(this),Promise.resolve()}}function sg(e,c){const a=typeof e=="object"?e:zt(),r=typeof e=="string"?e:c||"(default)",t=I7(a,"firestore/lite").getImmediate({identifier:r});if(!t._initialized){const n=PV("firestore");n&&og(t,...n)}return t}function og(e,c,a,r={}){var t;const n=(e=$3(e,d8))._getSettings(),i=`${c}:${a}`;if(n.host!=="firestore.googleapis.com"&&n.host!==i&&Mt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},n),{host:i,ssl:!1})),r.mockUserToken){let s,o;if(typeof r.mockUserToken=="string")s=r.mockUserToken,o=$1.MOCK_USER;else{s=IV(r.mockUserToken,(t=e._app)===null||t===void 0?void 0:t.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new B(K,"mockUserToken must contain 'sub' or 'user_id' field!");o=new $1(l)}e._authCredentials=new mC(new gt(s,o))}}/**
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
 */class S4{constructor(c,a,r){this.converter=a,this._query=r,this.type="query",this.firestore=c}withConverter(c){return new S4(this.firestore,c,this._query)}}class F1{constructor(c,a,r){this.converter=a,this._key=r,this.type="document",this.firestore=c}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new E2(this.firestore,this.converter,this._key.path.popLast())}withConverter(c){return new F1(this.firestore,c,this._key)}}class E2 extends S4{constructor(c,a,r){super(c,a,function(n){return new _t(n)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const c=this._path.popLast();return c.isEmpty()?null:new F1(this.firestore,null,new k1(c))}withConverter(c){return new E2(this.firestore,c,this._path)}}function lg(e,c,...a){if(e=P1(e),Lt("collection","path",c),e instanceof d8){const r=M1.fromString(c,...a);return Pe(r),new E2(e,null,r)}{if(!(e instanceof F1||e instanceof E2))throw new B(K,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(M1.fromString(c,...a));return Pe(r),new E2(e.firestore,null,r)}}function L3(e,c,...a){if(e=P1(e),arguments.length===1&&(c=yC.newId()),Lt("doc","path",c),e instanceof d8){const r=M1.fromString(c,...a);return Te(r),new F1(e,null,new k1(r))}{if(!(e instanceof F1||e instanceof E2))throw new B(K,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(M1.fromString(c,...a));return Te(r),new F1(e.firestore,e instanceof E2?e.converter:null,new k1(r))}}/**
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
 */class M4{constructor(c){this._byteString=c}static fromBase64String(c){try{return new M4(I2.fromBase64String(c))}catch(a){throw new B(K,"Failed to construct data from Base64 string: "+a)}}static fromUint8Array(c){return new M4(I2.fromUint8Array(c))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(c){return this._byteString.isEqual(c._byteString)}}/**
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
 */class _6{constructor(...c){for(let a=0;a<c.length;++a)if(c[a].length===0)throw new B(K,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W1(c)}isEqual(c){return this._internalPath.isEqual(c._internalPath)}}function fg(){return new _6("__name__")}/**
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
 */class k6{constructor(c){this._methodName=c}}/**
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
 */class U7{constructor(c,a){if(!isFinite(c)||c<-90||c>90)throw new B(K,"Latitude must be a number between -90 and 90, but was: "+c);if(!isFinite(a)||a<-180||a>180)throw new B(K,"Longitude must be a number between -180 and 180, but was: "+a);this._lat=c,this._long=a}get latitude(){return this._lat}get longitude(){return this._long}isEqual(c){return this._lat===c._lat&&this._long===c._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(c){return N1(this._lat,c._lat)||N1(this._long,c._long)}}/**
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
 */const hg=/^__.*__$/;class ug{constructor(c,a,r){this.data=c,this.fieldMask=a,this.fieldTransforms=r}toMutation(c,a){return this.fieldMask!==null?new D7(c,this.data,this.fieldMask,a,this.fieldTransforms):new Et(c,this.data,a,this.fieldTransforms)}}class Dt{constructor(c,a,r){this.data=c,this.fieldMask=a,this.fieldTransforms=r}toMutation(c,a){return new D7(c,this.data,this.fieldMask,a,this.fieldTransforms)}}function Ot(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z1()}}class p8{constructor(c,a,r,t,n,i){this.settings=c,this.databaseId=a,this.serializer=r,this.ignoreUndefinedProperties=t,n===void 0&&this.tt(),this.fieldTransforms=n||[],this.fieldMask=i||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(c){return new p8(Object.assign(Object.assign({},this.settings),c),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(c){var a;const r=(a=this.path)===null||a===void 0?void 0:a.child(c),t=this.rt({path:r,it:!1});return t.st(c),t}ot(c){var a;const r=(a=this.path)===null||a===void 0?void 0:a.child(c),t=this.rt({path:r,it:!1});return t.tt(),t}ut(c){return this.rt({path:void 0,it:!0})}_t(c){return F0(c,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(c){return this.fieldMask.find(a=>c.isPrefixOf(a))!==void 0||this.fieldTransforms.find(a=>c.isPrefixOf(a.field))!==void 0}tt(){if(this.path)for(let c=0;c<this.path.length;c++)this.st(this.path.get(c))}st(c){if(c.length===0)throw this._t("Document fields must not be empty");if(Ot(this.et)&&hg.test(c))throw this._t('Document fields cannot begin and end with "__"')}}class mg{constructor(c,a,r){this.databaseId=c,this.ignoreUndefinedProperties=a,this.serializer=r||B7(c)}ht(c,a,r,t=!1){return new p8({et:c,methodName:a,lt:r,path:W1.emptyPath(),it:!1,ct:t},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function z8(e){const c=e._freezeSettings(),a=B7(e._databaseId);return new mg(e._databaseId,!!c.ignoreUndefinedProperties,a)}function Bt(e,c,a,r,t,n={}){const i=e.ht(n.merge||n.mergeFields?2:0,c,a,t);W7("Data must be an object, but it was:",i,r);const s=qt(r,i);let o,l;if(n.merge)o=new R3(i.fieldMask),l=i.fieldTransforms;else if(n.mergeFields){const f=[];for(const h of n.mergeFields){const u=W5(c,h,a);if(!i.contains(u))throw new B(K,`Field '${u}' is specified in your field mask but missing from your input data.`);Wt(f,u)||f.push(u)}o=new R3(f),l=i.fieldTransforms.filter(h=>o.covers(h.field))}else o=null,l=i.fieldTransforms;return new ug(new Y1(s),o,l)}class H8 extends k6{_toFieldTransform(c){if(c.et!==2)throw c.et===1?c._t(`${this._methodName}() can only appear at the top level of your update data`):c._t(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return c.fieldMask.push(c.path),null}isEqual(c){return c instanceof H8}}function Ut(e,c,a){return new p8({et:3,lt:c.settings.lt,methodName:e._methodName,it:a},c.databaseId,c.serializer,c.ignoreUndefinedProperties)}class q7 extends k6{constructor(c,a){super(c),this.dt=a}_toFieldTransform(c){const a=Ut(this,c,!0),r=this.dt.map(n=>W3(n,a)),t=new kt(r);return new Pt(c.path,t)}isEqual(c){return c instanceof q7&&p4(this.dt,c.dt)}}class $7 extends k6{constructor(c,a){super(c),this.dt=a}_toFieldTransform(c){const a=Ut(this,c,!0),r=this.dt.map(n=>W3(n,a)),t=new Tt(r);return new Pt(c.path,t)}isEqual(c){return c instanceof $7&&p4(this.dt,c.dt)}}function vg(e,c,a,r){const t=e.ht(1,c,a);W7("Data must be an object, but it was:",t,r);const n=[],i=Y1.empty();w6(r,(o,l)=>{const f=G7(c,o,a);l=P1(l);const h=t.ot(f);if(l instanceof H8)n.push(f);else{const u=W3(l,h);u!=null&&(n.push(f),i.set(f,u))}});const s=new R3(n);return new Dt(i,s,t.fieldTransforms)}function dg(e,c,a,r,t,n){const i=e.ht(1,c,a),s=[W5(c,r,a)],o=[t];if(n.length%2!=0)throw new B(K,`Function ${c}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let u=0;u<n.length;u+=2)s.push(W5(c,n[u])),o.push(n[u+1]);const l=[],f=Y1.empty();for(let u=s.length-1;u>=0;--u)if(!Wt(l,s[u])){const d=s[u];let z=o[u];z=P1(z);const y=i.ot(d);if(z instanceof H8)l.push(d);else{const w=W3(z,y);w!=null&&(l.push(d),f.set(d,w))}}const h=new R3(l);return new Dt(f,h,i.fieldTransforms)}function pg(e,c,a,r=!1){return W3(a,e.ht(r?4:3,c))}function W3(e,c){if($t(e=P1(e)))return W7("Unsupported field value:",c,e),qt(e,c);if(e instanceof k6)return function(r,t){if(!Ot(t.et))throw t._t(`${r._methodName}() can only be used with update() and set()`);if(!t.path)throw t._t(`${r._methodName}() is not currently supported inside arrays`);const n=r._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,c),null;if(e===void 0&&c.ignoreUndefinedProperties)return null;if(c.path&&c.fieldMask.push(c.path),e instanceof Array){if(c.settings.it&&c.et!==4)throw c._t("Nested arrays are not supported");return function(r,t){const n=[];let i=0;for(const s of r){let o=W3(s,t.ut(i));o==null&&(o={nullValue:"NULL_VALUE"}),n.push(o),i++}return{arrayValue:{values:n}}}(e,c)}return function(r,t){if((r=P1(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return BC(t.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const n=J1.fromDate(r);return{timestampValue:U5(t.serializer,n)}}if(r instanceof J1){const n=new J1(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:U5(t.serializer,n)}}if(r instanceof U7)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof M4)return{bytesValue:ZC(t.serializer,r._byteString)};if(r instanceof F1){const n=t.databaseId,i=r.firestore._databaseId;if(!i.isEqual(n))throw t._t(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:O7(r.firestore._databaseId||t.databaseId,r._key.path)}}throw t._t(`Unsupported field value: ${h8(r)}`)}(e,c)}function qt(e,c){const a={};return function(t){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n))return!1;return!0}(e)?c.path&&c.path.length>0&&c.fieldMask.push(c.path):w6(e,(r,t)=>{const n=W3(t,c.nt(r));n!=null&&(a[r]=n)}),{mapValue:{fields:a}}}function $t(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof J1||e instanceof U7||e instanceof M4||e instanceof F1||e instanceof k6)}function W7(e,c,a){if(!$t(a)||!function(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}(a)){const r=h8(a);throw r==="an object"?c._t(e+" a custom object"):c._t(e+" "+r)}}function W5(e,c,a){if((c=P1(c))instanceof _6)return c._internalPath;if(typeof c=="string")return G7(e,c);throw F0("Field path arguments must be of type string or ",e,!1,void 0,a)}const zg=new RegExp("[~\\*/\\[\\]]");function G7(e,c,a){if(c.search(zg)>=0)throw F0(`Invalid field path (${c}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,a);try{return new _6(...c.split("."))._internalPath}catch{throw F0(`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,a)}}function F0(e,c,a,r,t){const n=r&&!r.isEmpty(),i=t!==void 0;let s=`Function ${c}() called with invalid data`;a&&(s+=" (via `toFirestore()`)"),s+=". ";let o="";return(n||i)&&(o+=" (found",n&&(o+=` in field ${r}`),i&&(o+=` in document ${t}`),o+=")"),new B(K,s+e+o)}function Wt(e,c){return e.some(a=>a.isEqual(c))}/**
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
 */class Gt{constructor(c,a,r,t,n){this._firestore=c,this._userDataWriter=a,this._key=r,this._document=t,this._converter=n}get id(){return this._key.path.lastSegment()}get ref(){return new F1(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const c=new jt(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(c)}return this._userDataWriter.convertValue(this._document.data.value)}}get(c){if(this._document){const a=this._document.data.field(Kt("DocumentSnapshot.get",c));if(a!==null)return this._userDataWriter.convertValue(a)}}}class jt extends Gt{data(){return super.data()}}class Hg{constructor(c,a){this._docs=a,this.query=c}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(c,a){this._docs.forEach(c,a)}}function Kt(e,c){return typeof c=="string"?G7(e,c):c instanceof _6?c._internalPath:c._delegate._internalPath}/**
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
 */class j7{}class Vg extends j7{}function je(e,c,...a){let r=[];c instanceof j7&&r.push(c),r=r.concat(a),function(n){const i=n.filter(o=>o instanceof K7).length,s=n.filter(o=>o instanceof V8).length;if(i>1||i>0&&s>0)throw new B(K,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const t of r)e=t._apply(e);return e}class V8 extends Vg{constructor(c,a,r){super(),this._field=c,this._op=a,this._value=r,this.type="where"}static _create(c,a,r){return new V8(c,a,r)}_apply(c){const a=this._parse(c);return Zt(c._query,a),new S4(c.firestore,c.converter,B5(c._query,a))}_parse(c){const a=z8(c.firestore);return function(n,i,s,o,l,f,h){let u;if(l.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(K,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ye(h,f);const d=[];for(const z of h)d.push(Ze(o,n,z));u={arrayValue:{values:d}}}else u=Ze(o,n,h)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ye(h,f),u=pg(s,i,h,f==="in"||f==="not-in");return u2.create(l,f,u)}(c._query,"where",a,c.firestore._databaseId,this._field,this._op,this._value)}}function Ke(e,c,a){const r=c,t=Kt("where",e);return V8._create(t,r,a)}class K7 extends j7{constructor(c,a){super(),this.type=c,this._queryConstraints=a}static _create(c,a){return new K7(c,a)}_parse(c){const a=this._queryConstraints.map(r=>r._parse(c)).filter(r=>r.getFilters().length>0);return a.length===1?a[0]:A6.create(a,this._getOperator())}_apply(c){const a=this._parse(c);return a.getFilters().length===0?c:(function(t,n){let i=t;const s=n.getFlattenedFilters();for(const o of s)Zt(i,o),i=B5(i,o)}(c._query,a),new S4(c.firestore,c.converter,B5(c._query,a)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ze(e,c,a){if(typeof(a=P1(a))=="string"){if(a==="")throw new B(K,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!RC(c)&&a.indexOf("/")!==-1)throw new B(K,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${a}' contains a '/' character.`);const r=c.path.child(M1.fromString(a));if(!k1.isDocumentKey(r))throw new B(K,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return De(e,new k1(r))}if(a instanceof F1)return De(e,a._key);throw new B(K,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${h8(a)}.`)}function Ye(e,c){if(!Array.isArray(e)||e.length===0)throw new B(K,`Invalid Query. A non-empty array is required for '${c.toString()}' filters.`)}function Zt(e,c){const a=function(t,n){for(const i of t)for(const s of i.getFlattenedFilters())if(n.indexOf(s.op)>=0)return s.op;return null}(e.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(c.op));if(a!==null)throw a===c.op?new B(K,`Invalid query. You cannot use more than one '${c.op.toString()}' filter.`):new B(K,`Invalid query. You cannot use '${c.op.toString()}' filters with '${a.toString()}' filters.`)}/**
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
 */function Yt(e,c,a){let r;return r=e?a&&(a.merge||a.mergeFields)?e.toFirestore(c,a):e.toFirestore(c):c,r}class Xt extends class{convertValue(a,r="none"){switch(I3(a)){case 0:return null;case 1:return a.booleanValue;case 2:return C1(a.integerValue||a.doubleValue);case 3:return this.convertTimestamp(a.timestampValue);case 4:return this.convertServerTimestamp(a,r);case 5:return a.stringValue;case 6:return this.convertBytes(f6(a.bytesValue));case 7:return this.convertReference(a.referenceValue);case 8:return this.convertGeoPoint(a.geoPointValue);case 9:return this.convertArray(a.arrayValue,r);case 10:return this.convertObject(a.mapValue,r);default:throw z1()}}convertObject(a,r){return this.convertObjectMap(a.fields,r)}convertObjectMap(a,r="none"){const t={};return w6(a,(n,i)=>{t[n]=this.convertValue(i,r)}),t}convertGeoPoint(a){return new U7(C1(a.latitude),C1(a.longitude))}convertArray(a,r){return(a.values||[]).map(t=>this.convertValue(t,r))}convertServerTimestamp(a,r){switch(r){case"previous":const t=Nt(a);return t==null?null:this.convertValue(t,r);case"estimate":return this.convertTimestamp(h6(a));default:return null}}convertTimestamp(a){const r=E3(a);return new J1(r.seconds,r.nanos)}convertDocumentKey(a,r){const t=M1.fromString(a);X1(Ft(t));const n=new o6(t.get(1),t.get(3)),i=new k1(t.popFirst(5));return n.isEqual(r)||R7(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),i}}{constructor(c){super(),this.firestore=c}convertBytes(c){return new M4(c)}convertReference(c){const a=this.convertDocumentKey(c,this.firestore._databaseId);return new F1(this.firestore,null,a)}}function Mg(e){const c=N4((e=$3(e,F1)).firestore),a=new Xt(e.firestore);return ng(c,[e._key]).then(r=>{X1(r.length===1);const t=r[0];return new Gt(e.firestore,a,e._key,t.isFoundDocument()?t:null,e.converter)})}function l5(e){(function(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(Ct,"limitToLast() queries require specifying at least one orderBy() clause")})((e=$3(e,S4))._query);const c=N4(e.firestore),a=new Xt(e.firestore);return ig(c,e._query).then(r=>{const t=r.map(n=>new jt(e.firestore,a,n.key,n,e.converter));return e._query.limitType==="L"&&t.reverse(),new Hg(e,t)})}function Cg(e,c,a){const r=Yt((e=$3(e,F1)).converter,c,a),t=Bt(z8(e.firestore),"setDoc",e._key,r,e.converter!==null,a);return v8(N4(e.firestore),[t.toMutation(e._key,l3.none())])}function f5(e,c,a,...r){const t=z8((e=$3(e,F1)).firestore);let n;return n=typeof(c=P1(c))=="string"||c instanceof _6?dg(t,"updateDoc",e._key,c,a,r):vg(t,"updateDoc",e._key,c),v8(N4(e.firestore),[n.toMutation(e._key,l3.exists(!0))])}function gg(e){return v8(N4((e=$3(e,F1)).firestore),[new It(e._key,l3.none())])}function Lg(e,c){const a=L3(e=$3(e,E2)),r=Yt(e.converter,c),t=Bt(z8(e.firestore),"addDoc",a._key,r,a.converter!==null,{});return v8(N4(e.firestore),[t.toMutation(a._key,l3.exists(!1))]).then(()=>a)}function bg(...e){return new q7("arrayUnion",e)}function xg(...e){return new $7("arrayRemove",e)}(function(){(function(a){y4=a})(`${x4}_lite`),z4(new T3("firestore/lite",(c,{instanceIdentifier:a,options:r})=>{const t=c.getProvider("app").getImmediate(),n=new d8(new vC(c.getProvider("auth-internal")),new HC(c.getProvider("app-check-internal")),function(s,o){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new B(K,'"projectId" not provided in firebase.initializeApp.');return new o6(s.options.projectId,o)}(t,a),t);return r&&n._setSettings(r),n},"PUBLIC").setMultipleInstances(!0)),o3("firestore-lite","4.4.3",""),o3("firestore-lite","4.4.3","esm2017")})();function Z7(e,c){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&c.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)c.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a}function Jt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yg=Jt,Qt=new y6("auth","Firebase",Jt());/**
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
 */const D0=new P7("@firebase/auth");function Ng(e,...c){D0.logLevel<=t1.WARN&&D0.warn(`Auth (${x4}): ${e}`,...c)}function p0(e,...c){D0.logLevel<=t1.ERROR&&D0.error(`Auth (${x4}): ${e}`,...c)}/**
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
 */function i2(e,...c){throw Y7(e,...c)}function C2(e,...c){return Y7(e,...c)}function cn(e,c,a){const r=Object.assign(Object.assign({},yg()),{[c]:a});return new y6("auth","Firebase",r).create(c,{appName:e.name})}function Sg(e,c,a){const r=a;if(!(c instanceof r))throw r.name!==c.constructor.name&&i2(e,"argument-error"),cn(e,"argument-error",`Type of ${c.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Y7(e,...c){if(typeof e!="string"){const a=c[0],r=[...c.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(a,...r)}return Qt.create(e,...c)}function W(e,c,...a){if(!e)throw Y7(c,...a)}function w2(e){const c="INTERNAL ASSERTION FAILED: "+e;throw p0(c),new Error(c)}function R2(e,c){e||w2(c)}/**
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
 */function G5(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function wg(){return Xe()==="http:"||Xe()==="https:"}function Xe(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Ag(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wg()||FV()||"connection"in navigator)?navigator.onLine:!0}function _g(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class T6{constructor(c,a){this.shortDelay=c,this.longDelay=a,R2(a>c,"Short delay should be less than long delay!"),this.isMobile=RV()||DV()}get(){return Ag()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function X7(e,c){R2(e.emulator,"Emulator should always be set here");const{url:a}=e.emulator;return c?`${a}${c.startsWith("/")?c.slice(1):c}`:a}/**
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
 */class en{static initialize(c,a,r){this.fetchImpl=c,a&&(this.headersImpl=a),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;w2("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;w2("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;w2("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Tg=new T6(3e4,6e4);function p3(e,c){return e.tenantId&&!c.tenantId?Object.assign(Object.assign({},c),{tenantId:e.tenantId}):c}async function z3(e,c,a,r,t={}){return an(e,t,async()=>{let n={},i={};r&&(c==="GET"?i=r:n={body:JSON.stringify(r)});const s=N6(Object.assign({key:e.config.apiKey},i)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),en.fetch()(rn(e,e.config.apiHost,a,s),Object.assign({method:c,headers:o,referrerPolicy:"no-referrer"},n))})}async function an(e,c,a){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},kg),c);try{const t=new Eg(e),n=await Promise.race([a(),t.promise]);t.clearNetworkTimeout();const i=await n.json();if("needConfirmation"in i)throw e0(e,"account-exists-with-different-credential",i);if(n.ok&&!("errorMessage"in i))return i;{const s=n.ok?i.errorMessage:i.error.message,[o,l]=s.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw e0(e,"credential-already-in-use",i);if(o==="EMAIL_EXISTS")throw e0(e,"email-already-in-use",i);if(o==="USER_DISABLED")throw e0(e,"user-disabled",i);const f=r[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw cn(e,f,l);i2(e,f)}}catch(t){if(t instanceof U2)throw t;i2(e,"network-request-failed",{message:String(t)})}}async function P6(e,c,a,r,t={}){const n=await z3(e,c,a,r,t);return"mfaPendingCredential"in n&&i2(e,"multi-factor-auth-required",{_serverResponse:n}),n}function rn(e,c,a,r){const t=`${c}${a}?${r}`;return e.config.emulator?X7(e.config,t):`${e.config.apiScheme}://${t}`}function Pg(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Eg{constructor(c){this.auth=c,this.timer=null,this.promise=new Promise((a,r)=>{this.timer=setTimeout(()=>r(C2(this.auth,"network-request-failed")),Tg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function e0(e,c,a){const r={appName:e.name};a.email&&(r.email=a.email),a.phoneNumber&&(r.phoneNumber=a.phoneNumber);const t=C2(e,c,r);return t.customData._tokenResponse=a,t}function Je(e){return e!==void 0&&e.enterprise!==void 0}class Ig{constructor(c){if(this.siteKey="",this.recaptchaEnforcementState=[],c.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=c.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=c.recaptchaEnforcementState}getProviderEnforcementState(c){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const a of this.recaptchaEnforcementState)if(a.provider&&a.provider===c)return Pg(a.enforcementState);return null}isProviderEnabled(c){return this.getProviderEnforcementState(c)==="ENFORCE"||this.getProviderEnforcementState(c)==="AUDIT"}}async function Rg(e,c){return z3(e,"GET","/v2/recaptchaConfig",p3(e,c))}/**
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
 */async function Fg(e,c){return z3(e,"POST","/v1/accounts:delete",c)}async function Dg(e,c){return z3(e,"POST","/v1/accounts:lookup",c)}/**
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
 */function X4(e){if(e)try{const c=new Date(Number(e));if(!isNaN(c.getTime()))return c.toUTCString()}catch{}}async function Og(e,c=!1){const a=P1(e),r=await a.getIdToken(c),t=J7(r);W(t&&t.exp&&t.auth_time&&t.iat,a.auth,"internal-error");const n=typeof t.firebase=="object"?t.firebase:void 0,i=n==null?void 0:n.sign_in_provider;return{claims:t,token:r,authTime:X4(h5(t.auth_time)),issuedAtTime:X4(h5(t.iat)),expirationTime:X4(h5(t.exp)),signInProvider:i||null,signInSecondFactor:(n==null?void 0:n.sign_in_second_factor)||null}}function h5(e){return Number(e)*1e3}function J7(e){const[c,a,r]=e.split(".");if(c===void 0||a===void 0||r===void 0)return p0("JWT malformed, contained fewer than 3 sections"),null;try{const t=ft(a);return t?JSON.parse(t):(p0("Failed to decode base64 JWT payload"),null)}catch(t){return p0("Caught error parsing JWT payload as JSON",t==null?void 0:t.toString()),null}}function Bg(e){const c=J7(e);return W(c,"internal-error"),W(typeof c.exp<"u","internal-error"),W(typeof c.iat<"u","internal-error"),Number(c.exp)-Number(c.iat)}/**
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
 */async function v6(e,c,a=!1){if(a)return c;try{return await c}catch(r){throw r instanceof U2&&Ug(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Ug({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class qg{constructor(c){this.user=c,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(c){var a;if(c){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const t=((a=this.user.stsTokenManager.expirationTime)!==null&&a!==void 0?a:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(c=!1){if(!this.isRunning)return;const a=this.getInterval(c);this.timerId=setTimeout(async()=>{await this.iteration()},a)}async iteration(){try{await this.user.getIdToken(!0)}catch(c){(c==null?void 0:c.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tn{constructor(c,a){this.createdAt=c,this.lastLoginAt=a,this._initializeTime()}_initializeTime(){this.lastSignInTime=X4(this.lastLoginAt),this.creationTime=X4(this.createdAt)}_copy(c){this.createdAt=c.createdAt,this.lastLoginAt=c.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function O0(e){var c;const a=e.auth,r=await e.getIdToken(),t=await v6(e,Dg(a,{idToken:r}));W(t==null?void 0:t.users.length,a,"internal-error");const n=t.users[0];e._notifyReloadListener(n);const i=!((c=n.providerUserInfo)===null||c===void 0)&&c.length?Gg(n.providerUserInfo):[],s=Wg(e.providerData,i),o=e.isAnonymous,l=!(e.email&&n.passwordHash)&&!(s!=null&&s.length),f=o?l:!1,h={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:s,metadata:new tn(n.createdAt,n.lastLoginAt),isAnonymous:f};Object.assign(e,h)}async function $g(e){const c=P1(e);await O0(c),await c.auth._persistUserIfCurrent(c),c.auth._notifyListenersIfCurrent(c)}function Wg(e,c){return[...e.filter(r=>!c.some(t=>t.providerId===r.providerId)),...c]}function Gg(e){return e.map(c=>{var{providerId:a}=c,r=Z7(c,["providerId"]);return{providerId:a,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jg(e,c){const a=await an(e,{},async()=>{const r=N6({grant_type:"refresh_token",refresh_token:c}).slice(1),{tokenApiHost:t,apiKey:n}=e.config,i=rn(e,t,"/v1/token",`key=${n}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",en.fetch()(i,{method:"POST",headers:s,body:r})});return{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token}}async function Kg(e,c){return z3(e,"POST","/v2/accounts:revokeToken",p3(e,c))}/**
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
 */class d6{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(c){W(c.idToken,"internal-error"),W(typeof c.idToken<"u","internal-error"),W(typeof c.refreshToken<"u","internal-error");const a="expiresIn"in c&&typeof c.expiresIn<"u"?Number(c.expiresIn):Bg(c.idToken);this.updateTokensAndExpiration(c.idToken,c.refreshToken,a)}async getToken(c,a=!1){return W(!this.accessToken||this.refreshToken,c,"user-token-expired"),!a&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(c,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(c,a){const{accessToken:r,refreshToken:t,expiresIn:n}=await jg(c,a);this.updateTokensAndExpiration(r,t,Number(n))}updateTokensAndExpiration(c,a,r){this.refreshToken=a||null,this.accessToken=c||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(c,a){const{refreshToken:r,accessToken:t,expirationTime:n}=a,i=new d6;return r&&(W(typeof r=="string","internal-error",{appName:c}),i.refreshToken=r),t&&(W(typeof t=="string","internal-error",{appName:c}),i.accessToken=t),n&&(W(typeof n=="number","internal-error",{appName:c}),i.expirationTime=n),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(c){this.accessToken=c.accessToken,this.refreshToken=c.refreshToken,this.expirationTime=c.expirationTime}_clone(){return Object.assign(new d6,this.toJSON())}_performRefresh(){return w2("not implemented")}}/**
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
 */function j2(e,c){W(typeof e=="string"||typeof e>"u","internal-error",{appName:c})}class k3{constructor(c){var{uid:a,auth:r,stsTokenManager:t}=c,n=Z7(c,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=a,this.auth=r,this.stsTokenManager=t,this.accessToken=t.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new tn(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(c){const a=await v6(this,this.stsTokenManager.getToken(this.auth,c));return W(a,this.auth,"internal-error"),this.accessToken!==a&&(this.accessToken=a,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),a}getIdTokenResult(c){return Og(this,c)}reload(){return $g(this)}_assign(c){this!==c&&(W(this.uid===c.uid,this.auth,"internal-error"),this.displayName=c.displayName,this.photoURL=c.photoURL,this.email=c.email,this.emailVerified=c.emailVerified,this.phoneNumber=c.phoneNumber,this.isAnonymous=c.isAnonymous,this.tenantId=c.tenantId,this.providerData=c.providerData.map(a=>Object.assign({},a)),this.metadata._copy(c.metadata),this.stsTokenManager._assign(c.stsTokenManager))}_clone(c){const a=new k3(Object.assign(Object.assign({},this),{auth:c,stsTokenManager:this.stsTokenManager._clone()}));return a.metadata._copy(this.metadata),a}_onReload(c){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=c,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(c){this.reloadListener?this.reloadListener(c):this.reloadUserInfo=c}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(c,a=!1){let r=!1;c.idToken&&c.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(c),r=!0),a&&await O0(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const c=await this.getIdToken();return await v6(this,Fg(this.auth,{idToken:c})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(c=>Object.assign({},c)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(c,a){var r,t,n,i,s,o,l,f;const h=(r=a.displayName)!==null&&r!==void 0?r:void 0,u=(t=a.email)!==null&&t!==void 0?t:void 0,d=(n=a.phoneNumber)!==null&&n!==void 0?n:void 0,z=(i=a.photoURL)!==null&&i!==void 0?i:void 0,y=(s=a.tenantId)!==null&&s!==void 0?s:void 0,w=(o=a._redirectEventId)!==null&&o!==void 0?o:void 0,V=(l=a.createdAt)!==null&&l!==void 0?l:void 0,g=(f=a.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:F,isAnonymous:D,providerData:R,stsTokenManager:Y}=a;W(S&&Y,c,"internal-error");const Z=d6.fromJSON(this.name,Y);W(typeof S=="string",c,"internal-error"),j2(h,c.name),j2(u,c.name),W(typeof F=="boolean",c,"internal-error"),W(typeof D=="boolean",c,"internal-error"),j2(d,c.name),j2(z,c.name),j2(y,c.name),j2(w,c.name),j2(V,c.name),j2(g,c.name);const $=new k3({uid:S,auth:c,email:u,emailVerified:F,displayName:h,isAnonymous:D,photoURL:z,phoneNumber:d,tenantId:y,stsTokenManager:Z,createdAt:V,lastLoginAt:g});return R&&Array.isArray(R)&&($.providerData=R.map(h1=>Object.assign({},h1))),w&&($._redirectEventId=w),$}static async _fromIdTokenResponse(c,a,r=!1){const t=new d6;t.updateFromServerResponse(a);const n=new k3({uid:a.localId,auth:c,stsTokenManager:t,isAnonymous:r});return await O0(n),n}}/**
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
 */const Qe=new Map;function A2(e){R2(e instanceof Function,"Expected a class definition");let c=Qe.get(e);return c?(R2(c instanceof e,"Instance stored in cache mismatched with class"),c):(c=new e,Qe.set(e,c),c)}/**
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
 */class nn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(c,a){this.storage[c]=a}async _get(c){const a=this.storage[c];return a===void 0?null:a}async _remove(c){delete this.storage[c]}_addListener(c,a){}_removeListener(c,a){}}nn.type="NONE";const ca=nn;/**
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
 */function z0(e,c,a){return`firebase:${e}:${c}:${a}`}class s4{constructor(c,a,r){this.persistence=c,this.auth=a,this.userKey=r;const{config:t,name:n}=this.auth;this.fullUserKey=z0(this.userKey,t.apiKey,n),this.fullPersistenceKey=z0("persistence",t.apiKey,n),this.boundEventHandler=a._onStorageEvent.bind(a),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(c){return this.persistence._set(this.fullUserKey,c.toJSON())}async getCurrentUser(){const c=await this.persistence._get(this.fullUserKey);return c?k3._fromJSON(this.auth,c):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(c){if(this.persistence===c)return;const a=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=c,a)return this.setCurrentUser(a)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(c,a,r="authUser"){if(!a.length)return new s4(A2(ca),c,r);const t=(await Promise.all(a.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let n=t[0]||A2(ca);const i=z0(r,c.config.apiKey,c.name);let s=null;for(const l of a)try{const f=await l._get(i);if(f){const h=k3._fromJSON(c,f);l!==n&&(s=h),n=l;break}}catch{}const o=t.filter(l=>l._shouldAllowMigration);return!n._shouldAllowMigration||!o.length?new s4(n,c,r):(n=o[0],s&&await n._set(i,s.toJSON()),await Promise.all(a.map(async l=>{if(l!==n)try{await l._remove(i)}catch{}})),new s4(n,c,r))}}/**
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
 */function ea(e){const c=e.toLowerCase();if(c.includes("opera/")||c.includes("opr/")||c.includes("opios/"))return"Opera";if(ln(c))return"IEMobile";if(c.includes("msie")||c.includes("trident/"))return"IE";if(c.includes("edge/"))return"Edge";if(sn(c))return"Firefox";if(c.includes("silk/"))return"Silk";if(hn(c))return"Blackberry";if(un(c))return"Webos";if(Q7(c))return"Safari";if((c.includes("chrome/")||on(c))&&!c.includes("edge/"))return"Chrome";if(fn(c))return"Android";{const a=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(a);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sn(e=D1()){return/firefox\//i.test(e)}function Q7(e=D1()){const c=e.toLowerCase();return c.includes("safari/")&&!c.includes("chrome/")&&!c.includes("crios/")&&!c.includes("android")}function on(e=D1()){return/crios\//i.test(e)}function ln(e=D1()){return/iemobile/i.test(e)}function fn(e=D1()){return/android/i.test(e)}function hn(e=D1()){return/blackberry/i.test(e)}function un(e=D1()){return/webos/i.test(e)}function M8(e=D1()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Zg(e=D1()){var c;return M8(e)&&!!(!((c=window.navigator)===null||c===void 0)&&c.standalone)}function Yg(){return OV()&&document.documentMode===10}function mn(e=D1()){return M8(e)||fn(e)||un(e)||hn(e)||/windows phone/i.test(e)||ln(e)}function Xg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function vn(e,c=[]){let a;switch(e){case"Browser":a=ea(D1());break;case"Worker":a=`${ea(D1())}-${e}`;break;default:a=e}const r=c.length?c.join(","):"FirebaseCore-web";return`${a}/JsCore/${x4}/${r}`}/**
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
 */class Jg{constructor(c){this.auth=c,this.queue=[]}pushCallback(c,a){const r=n=>new Promise((i,s)=>{try{const o=c(n);i(o)}catch(o){s(o)}});r.onAbort=a,this.queue.push(r);const t=this.queue.length-1;return()=>{this.queue[t]=()=>Promise.resolve()}}async runMiddleware(c){if(this.auth.currentUser===c)return;const a=[];try{for(const r of this.queue)await r(c),r.onAbort&&a.push(r.onAbort)}catch(r){a.reverse();for(const t of a)try{t()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Qg(e,c={}){return z3(e,"GET","/v2/passwordPolicy",p3(e,c))}/**
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
 */const cL=6;class eL{constructor(c){var a,r,t,n;const i=c.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(a=i.minPasswordLength)!==null&&a!==void 0?a:cL,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=c.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(t=(r=c.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&t!==void 0?t:"",this.forceUpgradeOnSignin=(n=c.forceUpgradeOnSignin)!==null&&n!==void 0?n:!1,this.schemaVersion=c.schemaVersion}validatePassword(c){var a,r,t,n,i,s;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(c,o),this.validatePasswordCharacterOptions(c,o),o.isValid&&(o.isValid=(a=o.meetsMinPasswordLength)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(r=o.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(t=o.containsLowercaseLetter)!==null&&t!==void 0?t:!0),o.isValid&&(o.isValid=(n=o.containsUppercaseLetter)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(i=o.containsNumericCharacter)!==null&&i!==void 0?i:!0),o.isValid&&(o.isValid=(s=o.containsNonAlphanumericCharacter)!==null&&s!==void 0?s:!0),o}validatePasswordLengthOptions(c,a){const r=this.customStrengthOptions.minPasswordLength,t=this.customStrengthOptions.maxPasswordLength;r&&(a.meetsMinPasswordLength=c.length>=r),t&&(a.meetsMaxPasswordLength=c.length<=t)}validatePasswordCharacterOptions(c,a){this.updatePasswordCharacterOptionsStatuses(a,!1,!1,!1,!1);let r;for(let t=0;t<c.length;t++)r=c.charAt(t),this.updatePasswordCharacterOptionsStatuses(a,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(c,a,r,t,n){this.customStrengthOptions.containsLowercaseLetter&&(c.containsLowercaseLetter||(c.containsLowercaseLetter=a)),this.customStrengthOptions.containsUppercaseLetter&&(c.containsUppercaseLetter||(c.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(c.containsNumericCharacter||(c.containsNumericCharacter=t)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(c.containsNonAlphanumericCharacter||(c.containsNonAlphanumericCharacter=n))}}/**
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
 */class aL{constructor(c,a,r,t){this.app=c,this.heartbeatServiceProvider=a,this.appCheckServiceProvider=r,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new aa(this),this.idTokenSubscription=new aa(this),this.beforeStateQueue=new Jg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=c.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(c,a){return a&&(this._popupRedirectResolver=A2(a)),this._initializationPromise=this.queue(async()=>{var r,t;if(!this._deleted&&(this.persistenceManager=await s4.create(this,c),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(a),this.lastNotifiedUid=((t=this.currentUser)===null||t===void 0?void 0:t.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const c=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!c)){if(this.currentUser&&c&&this.currentUser.uid===c.uid){this._currentUser._assign(c),await this.currentUser.getIdToken();return}await this._updateCurrentUser(c,!0)}}async initializeCurrentUser(c){var a;const r=await this.assertedPersistence.getCurrentUser();let t=r,n=!1;if(c&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId,s=t==null?void 0:t._redirectEventId,o=await this.tryRedirectSignIn(c);(!i||i===s)&&(o!=null&&o.user)&&(t=o.user,n=!0)}if(!t)return this.directlySetCurrentUser(null);if(!t._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(t)}catch(i){t=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return t?this.reloadAndSetCurrentUserOrClear(t):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===t._redirectEventId?this.directlySetCurrentUser(t):this.reloadAndSetCurrentUserOrClear(t)}async tryRedirectSignIn(c){let a=null;try{a=await this._popupRedirectResolver._completeRedirectFn(this,c,!0)}catch{await this._setRedirectUser(null)}return a}async reloadAndSetCurrentUserOrClear(c){try{await O0(c)}catch(a){if((a==null?void 0:a.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(c)}useDeviceLanguage(){this.languageCode=_g()}async _delete(){this._deleted=!0}async updateCurrentUser(c){const a=c?P1(c):null;return a&&W(a.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(a&&a._clone(this))}async _updateCurrentUser(c,a=!1){if(!this._deleted)return c&&W(this.tenantId===c.tenantId,this,"tenant-id-mismatch"),a||await this.beforeStateQueue.runMiddleware(c),this.queue(async()=>{await this.directlySetCurrentUser(c),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(c){return this.queue(async()=>{await this.assertedPersistence.setPersistence(A2(c))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(c){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const a=this._getPasswordPolicyInternal();return a.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):a.validatePassword(c)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const c=await Qg(this),a=new eL(c);this.tenantId===null?this._projectPasswordPolicy=a:this._tenantPasswordPolicies[this.tenantId]=a}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(c){this._errorFactory=new y6("auth","Firebase",c())}onAuthStateChanged(c,a,r){return this.registerStateListener(this.authStateSubscription,c,a,r)}beforeAuthStateChanged(c,a){return this.beforeStateQueue.pushCallback(c,a)}onIdTokenChanged(c,a,r){return this.registerStateListener(this.idTokenSubscription,c,a,r)}authStateReady(){return new Promise((c,a)=>{if(this.currentUser)c();else{const r=this.onAuthStateChanged(()=>{r(),c()},a)}})}async revokeAccessToken(c){if(this.currentUser){const a=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:c,idToken:a};this.tenantId!=null&&(r.tenantId=this.tenantId),await Kg(this,r)}}toJSON(){var c;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(c=this._currentUser)===null||c===void 0?void 0:c.toJSON()}}async _setRedirectUser(c,a){const r=await this.getOrInitRedirectPersistenceManager(a);return c===null?r.removeCurrentUser():r.setCurrentUser(c)}async getOrInitRedirectPersistenceManager(c){if(!this.redirectPersistenceManager){const a=c&&A2(c)||this._popupRedirectResolver;W(a,this,"argument-error"),this.redirectPersistenceManager=await s4.create(this,[A2(a._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(c){var a,r;return this._isInitialized&&await this.queue(async()=>{}),((a=this._currentUser)===null||a===void 0?void 0:a._redirectEventId)===c?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===c?this.redirectUser:null}async _persistUserIfCurrent(c){if(c===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(c))}_notifyListenersIfCurrent(c){c===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var c,a;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(a=(c=this.currentUser)===null||c===void 0?void 0:c.uid)!==null&&a!==void 0?a:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(c,a,r,t){if(this._deleted)return()=>{};const n=typeof a=="function"?a:a.next.bind(a);let i=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(s,this,"internal-error"),s.then(()=>{i||n(this.currentUser)}),typeof a=="function"){const o=c.addObserver(a,r,t);return()=>{i=!0,o()}}else{const o=c.addObserver(a);return()=>{i=!0,o()}}}async directlySetCurrentUser(c){this.currentUser&&this.currentUser!==c&&this._currentUser._stopProactiveRefresh(),c&&this.isProactiveRefreshEnabled&&c._startProactiveRefresh(),this.currentUser=c,c?await this.assertedPersistence.setCurrentUser(c):await this.assertedPersistence.removeCurrentUser()}queue(c){return this.operations=this.operations.then(c,c),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(c){!c||this.frameworks.includes(c)||(this.frameworks.push(c),this.frameworks.sort(),this.clientVersion=vn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var c;const a={"X-Client-Version":this.clientVersion};this.app.options.appId&&(a["X-Firebase-gmpid"]=this.app.options.appId);const r=await((c=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||c===void 0?void 0:c.getHeartbeatsHeader());r&&(a["X-Firebase-Client"]=r);const t=await this._getAppCheckToken();return t&&(a["X-Firebase-AppCheck"]=t),a}async _getAppCheckToken(){var c;const a=await((c=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||c===void 0?void 0:c.getToken());return a!=null&&a.error&&Ng(`Error while retrieving App Check token: ${a.error}`),a==null?void 0:a.token}}function H3(e){return P1(e)}class aa{constructor(c){this.auth=c,this.observer=null,this.addObserver=jV(a=>this.observer=a)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let C8={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rL(e){C8=e}function dn(e){return C8.loadJS(e)}function tL(){return C8.recaptchaEnterpriseScript}function nL(){return C8.gapiScript}function iL(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const sL="recaptcha-enterprise",oL="NO_RECAPTCHA";class lL{constructor(c){this.type=sL,this.auth=H3(c)}async verify(c="verify",a=!1){async function r(n){if(!a){if(n.tenantId==null&&n._agentRecaptchaConfig!=null)return n._agentRecaptchaConfig.siteKey;if(n.tenantId!=null&&n._tenantRecaptchaConfigs[n.tenantId]!==void 0)return n._tenantRecaptchaConfigs[n.tenantId].siteKey}return new Promise(async(i,s)=>{Rg(n,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ig(o);return n.tenantId==null?n._agentRecaptchaConfig=l:n._tenantRecaptchaConfigs[n.tenantId]=l,i(l.siteKey)}}).catch(o=>{s(o)})})}function t(n,i,s){const o=window.grecaptcha;Je(o)?o.enterprise.ready(()=>{o.enterprise.execute(n,{action:c}).then(l=>{i(l)}).catch(()=>{i(oL)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((n,i)=>{r(this.auth).then(s=>{if(!a&&Je(window.grecaptcha))t(s,n,i);else{if(typeof window>"u"){i(new Error("RecaptchaVerifier is only supported in browser"));return}let o=tL();o.length!==0&&(o+=s),dn(o).then(()=>{t(s,n,i)}).catch(l=>{i(l)})}}).catch(s=>{i(s)})})}}async function ra(e,c,a,r=!1){const t=new lL(e);let n;try{n=await t.verify(a)}catch{n=await t.verify(a,!0)}const i=Object.assign({},c);return r?Object.assign(i,{captchaResp:n}):Object.assign(i,{captchaResponse:n}),Object.assign(i,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(i,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),i}async function j5(e,c,a,r){var t;if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const n=await ra(e,c,a,a==="getOobCode");return r(e,n)}else return r(e,c).catch(async n=>{if(n.code==="auth/missing-recaptcha-token"){console.log(`${a} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await ra(e,c,a,a==="getOobCode");return r(e,i)}else return Promise.reject(n)})}/**
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
 */function fL(e,c){const a=I7(e,"auth");if(a.isInitialized()){const t=a.getImmediate(),n=a.getOptions();if(p4(n,c??{}))return t;i2(t,"already-initialized")}return a.initialize({options:c})}function hL(e,c){const a=(c==null?void 0:c.persistence)||[],r=(Array.isArray(a)?a:[a]).map(A2);c!=null&&c.errorMap&&e._updateErrorMap(c.errorMap),e._initializeWithPersistence(r,c==null?void 0:c.popupRedirectResolver)}function uL(e,c,a){const r=H3(e);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(c),r,"invalid-emulator-scheme");const t=!!(a!=null&&a.disableWarnings),n=pn(c),{host:i,port:s}=mL(c),o=s===null?"":`:${s}`;r.config.emulator={url:`${n}//${i}${o}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:i,port:s,protocol:n.replace(":",""),options:Object.freeze({disableWarnings:t})}),t||vL()}function pn(e){const c=e.indexOf(":");return c<0?"":e.substr(0,c+1)}function mL(e){const c=pn(e),a=/(\/\/)?([^?#/]+)/.exec(e.substr(c.length));if(!a)return{host:"",port:null};const r=a[2].split("@").pop()||"",t=/^(\[[^\]]+\])(:|$)/.exec(r);if(t){const n=t[1];return{host:n,port:ta(r.substr(n.length+1))}}else{const[n,i]=r.split(":");return{host:n,port:ta(i)}}}function ta(e){if(!e)return null;const c=Number(e);return isNaN(c)?null:c}function vL(){function e(){const c=document.createElement("p"),a=c.style;c.innerText="Running in emulator mode. Do not use with production credentials.",a.position="fixed",a.width="100%",a.backgroundColor="#ffffff",a.border=".1em solid #000000",a.color="#b50000",a.bottom="0px",a.left="0px",a.margin="0px",a.zIndex="10000",a.textAlign="center",c.classList.add("firebase-emulator-warning"),document.body.appendChild(c)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class c9{constructor(c,a){this.providerId=c,this.signInMethod=a}toJSON(){return w2("not implemented")}_getIdTokenResponse(c){return w2("not implemented")}_linkToIdToken(c,a){return w2("not implemented")}_getReauthenticationResolver(c){return w2("not implemented")}}async function dL(e,c){return z3(e,"POST","/v1/accounts:signUp",c)}/**
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
 */async function pL(e,c){return P6(e,"POST","/v1/accounts:signInWithPassword",p3(e,c))}/**
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
 */async function zL(e,c){return P6(e,"POST","/v1/accounts:signInWithEmailLink",p3(e,c))}async function HL(e,c){return P6(e,"POST","/v1/accounts:signInWithEmailLink",p3(e,c))}/**
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
 */class p6 extends c9{constructor(c,a,r,t=null){super("password",r),this._email=c,this._password=a,this._tenantId=t}static _fromEmailAndPassword(c,a){return new p6(c,a,"password")}static _fromEmailAndCode(c,a,r=null){return new p6(c,a,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(c){const a=typeof c=="string"?JSON.parse(c):c;if(a!=null&&a.email&&(a!=null&&a.password)){if(a.signInMethod==="password")return this._fromEmailAndPassword(a.email,a.password);if(a.signInMethod==="emailLink")return this._fromEmailAndCode(a.email,a.password,a.tenantId)}return null}async _getIdTokenResponse(c){switch(this.signInMethod){case"password":const a={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return j5(c,a,"signInWithPassword",pL);case"emailLink":return zL(c,{email:this._email,oobCode:this._password});default:i2(c,"internal-error")}}async _linkToIdToken(c,a){switch(this.signInMethod){case"password":const r={idToken:a,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return j5(c,r,"signUpPassword",dL);case"emailLink":return HL(c,{idToken:a,email:this._email,oobCode:this._password});default:i2(c,"internal-error")}}_getReauthenticationResolver(c){return this._getIdTokenResponse(c)}}/**
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
 */async function o4(e,c){return P6(e,"POST","/v1/accounts:signInWithIdp",p3(e,c))}/**
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
 */const VL="http://localhost";class F3 extends c9{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(c){const a=new F3(c.providerId,c.signInMethod);return c.idToken||c.accessToken?(c.idToken&&(a.idToken=c.idToken),c.accessToken&&(a.accessToken=c.accessToken),c.nonce&&!c.pendingToken&&(a.nonce=c.nonce),c.pendingToken&&(a.pendingToken=c.pendingToken)):c.oauthToken&&c.oauthTokenSecret?(a.accessToken=c.oauthToken,a.secret=c.oauthTokenSecret):i2("argument-error"),a}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(c){const a=typeof c=="string"?JSON.parse(c):c,{providerId:r,signInMethod:t}=a,n=Z7(a,["providerId","signInMethod"]);if(!r||!t)return null;const i=new F3(r,t);return i.idToken=n.idToken||void 0,i.accessToken=n.accessToken||void 0,i.secret=n.secret,i.nonce=n.nonce,i.pendingToken=n.pendingToken||null,i}_getIdTokenResponse(c){const a=this.buildRequest();return o4(c,a)}_linkToIdToken(c,a){const r=this.buildRequest();return r.idToken=a,o4(c,r)}_getReauthenticationResolver(c){const a=this.buildRequest();return a.autoCreate=!1,o4(c,a)}buildRequest(){const c={requestUri:VL,returnSecureToken:!0};if(this.pendingToken)c.pendingToken=this.pendingToken;else{const a={};this.idToken&&(a.id_token=this.idToken),this.accessToken&&(a.access_token=this.accessToken),this.secret&&(a.oauth_token_secret=this.secret),a.providerId=this.providerId,this.nonce&&!this.pendingToken&&(a.nonce=this.nonce),c.postBody=N6(a)}return c}}/**
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
 */function ML(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CL(e){const c=R4(F4(e)).link,a=c?R4(F4(c)).deep_link_id:null,r=R4(F4(e)).deep_link_id;return(r?R4(F4(r)).link:null)||r||a||c||e}class e9{constructor(c){var a,r,t,n,i,s;const o=R4(F4(c)),l=(a=o.apiKey)!==null&&a!==void 0?a:null,f=(r=o.oobCode)!==null&&r!==void 0?r:null,h=ML((t=o.mode)!==null&&t!==void 0?t:null);W(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(n=o.continueUrl)!==null&&n!==void 0?n:null,this.languageCode=(i=o.languageCode)!==null&&i!==void 0?i:null,this.tenantId=(s=o.tenantId)!==null&&s!==void 0?s:null}static parseLink(c){const a=CL(c);try{return new e9(a)}catch{return null}}}/**
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
 */class w4{constructor(){this.providerId=w4.PROVIDER_ID}static credential(c,a){return p6._fromEmailAndPassword(c,a)}static credentialWithLink(c,a){const r=e9.parseLink(a);return W(r,"argument-error"),p6._fromEmailAndCode(c,r.code,r.tenantId)}}w4.PROVIDER_ID="password";w4.EMAIL_PASSWORD_SIGN_IN_METHOD="password";w4.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class a9{constructor(c){this.providerId=c,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(c){this.defaultLanguageCode=c}setCustomParameters(c){return this.customParameters=c,this}getCustomParameters(){return this.customParameters}}/**
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
 */class E6 extends a9{constructor(){super(...arguments),this.scopes=[]}addScope(c){return this.scopes.includes(c)||this.scopes.push(c),this}getScopes(){return[...this.scopes]}}/**
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
 */class e3 extends E6{constructor(){super("facebook.com")}static credential(c){return F3._fromParams({providerId:e3.PROVIDER_ID,signInMethod:e3.FACEBOOK_SIGN_IN_METHOD,accessToken:c})}static credentialFromResult(c){return e3.credentialFromTaggedObject(c)}static credentialFromError(c){return e3.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c||!("oauthAccessToken"in c)||!c.oauthAccessToken)return null;try{return e3.credential(c.oauthAccessToken)}catch{return null}}}e3.FACEBOOK_SIGN_IN_METHOD="facebook.com";e3.PROVIDER_ID="facebook.com";/**
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
 */class y2 extends E6{constructor(){super("google.com"),this.addScope("profile")}static credential(c,a){return F3._fromParams({providerId:y2.PROVIDER_ID,signInMethod:y2.GOOGLE_SIGN_IN_METHOD,idToken:c,accessToken:a})}static credentialFromResult(c){return y2.credentialFromTaggedObject(c)}static credentialFromError(c){return y2.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c)return null;const{oauthIdToken:a,oauthAccessToken:r}=c;if(!a&&!r)return null;try{return y2.credential(a,r)}catch{return null}}}y2.GOOGLE_SIGN_IN_METHOD="google.com";y2.PROVIDER_ID="google.com";/**
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
 */class a3 extends E6{constructor(){super("github.com")}static credential(c){return F3._fromParams({providerId:a3.PROVIDER_ID,signInMethod:a3.GITHUB_SIGN_IN_METHOD,accessToken:c})}static credentialFromResult(c){return a3.credentialFromTaggedObject(c)}static credentialFromError(c){return a3.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c||!("oauthAccessToken"in c)||!c.oauthAccessToken)return null;try{return a3.credential(c.oauthAccessToken)}catch{return null}}}a3.GITHUB_SIGN_IN_METHOD="github.com";a3.PROVIDER_ID="github.com";/**
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
 */class r3 extends E6{constructor(){super("twitter.com")}static credential(c,a){return F3._fromParams({providerId:r3.PROVIDER_ID,signInMethod:r3.TWITTER_SIGN_IN_METHOD,oauthToken:c,oauthTokenSecret:a})}static credentialFromResult(c){return r3.credentialFromTaggedObject(c)}static credentialFromError(c){return r3.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c)return null;const{oauthAccessToken:a,oauthTokenSecret:r}=c;if(!a||!r)return null;try{return r3.credential(a,r)}catch{return null}}}r3.TWITTER_SIGN_IN_METHOD="twitter.com";r3.PROVIDER_ID="twitter.com";/**
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
 */async function gL(e,c){return P6(e,"POST","/v1/accounts:signUp",p3(e,c))}/**
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
 */class D3{constructor(c){this.user=c.user,this.providerId=c.providerId,this._tokenResponse=c._tokenResponse,this.operationType=c.operationType}static async _fromIdTokenResponse(c,a,r,t=!1){const n=await k3._fromIdTokenResponse(c,r,t),i=na(r);return new D3({user:n,providerId:i,_tokenResponse:r,operationType:a})}static async _forOperation(c,a,r){await c._updateTokensIfNecessary(r,!0);const t=na(r);return new D3({user:c,providerId:t,_tokenResponse:r,operationType:a})}}function na(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class B0 extends U2{constructor(c,a,r,t){var n;super(a.code,a.message),this.operationType=r,this.user=t,Object.setPrototypeOf(this,B0.prototype),this.customData={appName:c.name,tenantId:(n=c.tenantId)!==null&&n!==void 0?n:void 0,_serverResponse:a.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(c,a,r,t){return new B0(c,a,r,t)}}function zn(e,c,a,r){return(c==="reauthenticate"?a._getReauthenticationResolver(e):a._getIdTokenResponse(e)).catch(n=>{throw n.code==="auth/multi-factor-auth-required"?B0._fromErrorAndOperation(e,n,c,r):n})}async function LL(e,c,a=!1){const r=await v6(e,c._linkToIdToken(e.auth,await e.getIdToken()),a);return D3._forOperation(e,"link",r)}/**
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
 */async function bL(e,c,a=!1){const{auth:r}=e,t="reauthenticate";try{const n=await v6(e,zn(r,t,c,e),a);W(n.idToken,r,"internal-error");const i=J7(n.idToken);W(i,r,"internal-error");const{sub:s}=i;return W(e.uid===s,r,"user-mismatch"),D3._forOperation(e,t,n)}catch(n){throw(n==null?void 0:n.code)==="auth/user-not-found"&&i2(r,"user-mismatch"),n}}/**
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
 */async function Hn(e,c,a=!1){const r="signIn",t=await zn(e,r,c),n=await D3._fromIdTokenResponse(e,r,t);return a||await e._updateCurrentUser(n.user),n}async function xL(e,c){return Hn(H3(e),c)}/**
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
 */async function Vn(e){const c=H3(e);c._getPasswordPolicyInternal()&&await c._updatePasswordPolicy()}async function yL(e,c,a){const r=H3(e),i=await j5(r,{returnSecureToken:!0,email:c,password:a,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gL).catch(o=>{throw o.code==="auth/password-does-not-meet-requirements"&&Vn(e),o}),s=await D3._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function NL(e,c,a){return xL(P1(e),w4.credential(c,a)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Vn(e),r})}function SL(e,c,a,r){return P1(e).onIdTokenChanged(c,a,r)}function wL(e,c,a){return P1(e).beforeAuthStateChanged(c,a)}function AL(e){return P1(e).signOut()}const U0="__sak";/**
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
 */class Mn{constructor(c,a){this.storageRetriever=c,this.type=a}_isAvailable(){try{return this.storage?(this.storage.setItem(U0,"1"),this.storage.removeItem(U0),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(c,a){return this.storage.setItem(c,JSON.stringify(a)),Promise.resolve()}_get(c){const a=this.storage.getItem(c);return Promise.resolve(a?JSON.parse(a):null)}_remove(c){return this.storage.removeItem(c),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _L(){const e=D1();return Q7(e)||M8(e)}const kL=1e3,TL=10;class Cn extends Mn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(c,a)=>this.onStorageEvent(c,a),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_L()&&Xg(),this.fallbackToPolling=mn(),this._shouldAllowMigration=!0}forAllChangedKeys(c){for(const a of Object.keys(this.listeners)){const r=this.storage.getItem(a),t=this.localCache[a];r!==t&&c(a,t,r)}}onStorageEvent(c,a=!1){if(!c.key){this.forAllChangedKeys((i,s,o)=>{this.notifyListeners(i,o)});return}const r=c.key;if(a?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(r);if(c.newValue!==i)c.newValue!==null?this.storage.setItem(r,c.newValue):this.storage.removeItem(r);else if(this.localCache[r]===c.newValue&&!a)return}const t=()=>{const i=this.storage.getItem(r);!a&&this.localCache[r]===i||this.notifyListeners(r,i)},n=this.storage.getItem(r);Yg()&&n!==c.newValue&&c.newValue!==c.oldValue?setTimeout(t,TL):t()}notifyListeners(c,a){this.localCache[c]=a;const r=this.listeners[c];if(r)for(const t of Array.from(r))t(a&&JSON.parse(a))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((c,a,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:c,oldValue:a,newValue:r}),!0)})},kL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(c,a){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[c]||(this.listeners[c]=new Set,this.localCache[c]=this.storage.getItem(c)),this.listeners[c].add(a)}_removeListener(c,a){this.listeners[c]&&(this.listeners[c].delete(a),this.listeners[c].size===0&&delete this.listeners[c]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(c,a){await super._set(c,a),this.localCache[c]=JSON.stringify(a)}async _get(c){const a=await super._get(c);return this.localCache[c]=JSON.stringify(a),a}async _remove(c){await super._remove(c),delete this.localCache[c]}}Cn.type="LOCAL";const PL=Cn;/**
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
 */class gn extends Mn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(c,a){}_removeListener(c,a){}}gn.type="SESSION";const Ln=gn;/**
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
 */function EL(e){return Promise.all(e.map(async c=>{try{return{fulfilled:!0,value:await c}}catch(a){return{fulfilled:!1,reason:a}}}))}/**
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
 */class g8{constructor(c){this.eventTarget=c,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(c){const a=this.receivers.find(t=>t.isListeningto(c));if(a)return a;const r=new g8(c);return this.receivers.push(r),r}isListeningto(c){return this.eventTarget===c}async handleEvent(c){const a=c,{eventId:r,eventType:t,data:n}=a.data,i=this.handlersMap[t];if(!(i!=null&&i.size))return;a.ports[0].postMessage({status:"ack",eventId:r,eventType:t});const s=Array.from(i).map(async l=>l(a.origin,n)),o=await EL(s);a.ports[0].postMessage({status:"done",eventId:r,eventType:t,response:o})}_subscribe(c,a){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[c]||(this.handlersMap[c]=new Set),this.handlersMap[c].add(a)}_unsubscribe(c,a){this.handlersMap[c]&&a&&this.handlersMap[c].delete(a),(!a||this.handlersMap[c].size===0)&&delete this.handlersMap[c],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}g8.receivers=[];/**
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
 */function r9(e="",c=10){let a="";for(let r=0;r<c;r++)a+=Math.floor(Math.random()*10);return e+a}/**
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
 */class IL{constructor(c){this.target=c,this.handlers=new Set}removeMessageHandler(c){c.messageChannel&&(c.messageChannel.port1.removeEventListener("message",c.onMessage),c.messageChannel.port1.close()),this.handlers.delete(c)}async _send(c,a,r=50){const t=typeof MessageChannel<"u"?new MessageChannel:null;if(!t)throw new Error("connection_unavailable");let n,i;return new Promise((s,o)=>{const l=r9("",20);t.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},r);i={messageChannel:t,onMessage(h){const u=h;if(u.data.eventId===l)switch(u.data.status){case"ack":clearTimeout(f),n=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(n),s(u.data.response);break;default:clearTimeout(f),clearTimeout(n),o(new Error("invalid_response"));break}}},this.handlers.add(i),t.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:c,eventId:l,data:a},[t.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
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
 */function g2(){return window}function RL(e){g2().location.href=e}/**
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
 */function bn(){return typeof g2().WorkerGlobalScope<"u"&&typeof g2().importScripts=="function"}async function FL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DL(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function OL(){return bn()?self:null}/**
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
 */const xn="firebaseLocalStorageDb",BL=1,q0="firebaseLocalStorage",yn="fbase_key";class I6{constructor(c){this.request=c}toPromise(){return new Promise((c,a)=>{this.request.addEventListener("success",()=>{c(this.request.result)}),this.request.addEventListener("error",()=>{a(this.request.error)})})}}function L8(e,c){return e.transaction([q0],c?"readwrite":"readonly").objectStore(q0)}function UL(){const e=indexedDB.deleteDatabase(xn);return new I6(e).toPromise()}function K5(){const e=indexedDB.open(xn,BL);return new Promise((c,a)=>{e.addEventListener("error",()=>{a(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(q0,{keyPath:yn})}catch(t){a(t)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(q0)?c(r):(r.close(),await UL(),c(await K5()))})})}async function ia(e,c,a){const r=L8(e,!0).put({[yn]:c,value:a});return new I6(r).toPromise()}async function qL(e,c){const a=L8(e,!1).get(c),r=await new I6(a).toPromise();return r===void 0?null:r.value}function sa(e,c){const a=L8(e,!0).delete(c);return new I6(a).toPromise()}const $L=800,WL=3;class Nn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await K5(),this.db)}async _withRetries(c){let a=0;for(;;)try{const r=await this._openDb();return await c(r)}catch(r){if(a++>WL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=g8._getInstance(OL()),this.receiver._subscribe("keyChanged",async(c,a)=>({keyProcessed:(await this._poll()).includes(a.key)})),this.receiver._subscribe("ping",async(c,a)=>["keyChanged"])}async initializeSender(){var c,a;if(this.activeServiceWorker=await FL(),!this.activeServiceWorker)return;this.sender=new IL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((c=r[0])===null||c===void 0)&&c.fulfilled&&!((a=r[0])===null||a===void 0)&&a.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(c){if(!(!this.sender||!this.activeServiceWorker||DL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:c},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const c=await K5();return await ia(c,U0,"1"),await sa(c,U0),!0}catch{}return!1}async _withPendingWrite(c){this.pendingWrites++;try{await c()}finally{this.pendingWrites--}}async _set(c,a){return this._withPendingWrite(async()=>(await this._withRetries(r=>ia(r,c,a)),this.localCache[c]=a,this.notifyServiceWorker(c)))}async _get(c){const a=await this._withRetries(r=>qL(r,c));return this.localCache[c]=a,a}async _remove(c){return this._withPendingWrite(async()=>(await this._withRetries(a=>sa(a,c)),delete this.localCache[c],this.notifyServiceWorker(c)))}async _poll(){const c=await this._withRetries(t=>{const n=L8(t,!1).getAll();return new I6(n).toPromise()});if(!c)return[];if(this.pendingWrites!==0)return[];const a=[],r=new Set;if(c.length!==0)for(const{fbase_key:t,value:n}of c)r.add(t),JSON.stringify(this.localCache[t])!==JSON.stringify(n)&&(this.notifyListeners(t,n),a.push(t));for(const t of Object.keys(this.localCache))this.localCache[t]&&!r.has(t)&&(this.notifyListeners(t,null),a.push(t));return a}notifyListeners(c,a){this.localCache[c]=a;const r=this.listeners[c];if(r)for(const t of Array.from(r))t(a)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$L)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(c,a){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[c]||(this.listeners[c]=new Set,this._get(c)),this.listeners[c].add(a)}_removeListener(c,a){this.listeners[c]&&(this.listeners[c].delete(a),this.listeners[c].size===0&&delete this.listeners[c]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nn.type="LOCAL";const GL=Nn;new T6(3e4,6e4);/**
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
 */function Sn(e,c){return c?A2(c):(W(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class t9 extends c9{constructor(c){super("custom","custom"),this.params=c}_getIdTokenResponse(c){return o4(c,this._buildIdpRequest())}_linkToIdToken(c,a){return o4(c,this._buildIdpRequest(a))}_getReauthenticationResolver(c){return o4(c,this._buildIdpRequest())}_buildIdpRequest(c){const a={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return c&&(a.idToken=c),a}}function jL(e){return Hn(e.auth,new t9(e),e.bypassAuthState)}function KL(e){const{auth:c,user:a}=e;return W(a,c,"internal-error"),bL(a,new t9(e),e.bypassAuthState)}async function ZL(e){const{auth:c,user:a}=e;return W(a,c,"internal-error"),LL(a,new t9(e),e.bypassAuthState)}/**
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
 */class wn{constructor(c,a,r,t,n=!1){this.auth=c,this.resolver=r,this.user=t,this.bypassAuthState=n,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(a)?a:[a]}execute(){return new Promise(async(c,a)=>{this.pendingPromise={resolve:c,reject:a};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(c){const{urlResponse:a,sessionId:r,postBody:t,tenantId:n,error:i,type:s}=c;if(i){this.reject(i);return}const o={auth:this.auth,requestUri:a,sessionId:r,tenantId:n||void 0,postBody:t||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(o))}catch(l){this.reject(l)}}onError(c){this.reject(c)}getIdpTask(c){switch(c){case"signInViaPopup":case"signInViaRedirect":return jL;case"linkViaPopup":case"linkViaRedirect":return ZL;case"reauthViaPopup":case"reauthViaRedirect":return KL;default:i2(this.auth,"internal-error")}}resolve(c){R2(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(c),this.unregisterAndCleanUp()}reject(c){R2(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(c),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const YL=new T6(2e3,1e4);async function XL(e,c,a){const r=H3(e);Sg(e,c,a9);const t=Sn(r,a);return new N3(r,"signInViaPopup",c,t).executeNotNull()}class N3 extends wn{constructor(c,a,r,t,n){super(c,a,t,n),this.provider=r,this.authWindow=null,this.pollId=null,N3.currentPopupAction&&N3.currentPopupAction.cancel(),N3.currentPopupAction=this}async executeNotNull(){const c=await this.execute();return W(c,this.auth,"internal-error"),c}async onExecution(){R2(this.filter.length===1,"Popup operations only handle one event");const c=r9();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],c),this.authWindow.associatedEvent=c,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(C2(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var c;return((c=this.authWindow)===null||c===void 0?void 0:c.associatedEvent)||null}cancel(){this.reject(C2(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,N3.currentPopupAction=null}pollUserCancellation(){const c=()=>{var a,r;if(!((r=(a=this.authWindow)===null||a===void 0?void 0:a.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(C2(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(c,YL.get())};c()}}N3.currentPopupAction=null;/**
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
 */const JL="pendingRedirect",H0=new Map;class QL extends wn{constructor(c,a,r=!1){super(c,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,r),this.eventId=null}async execute(){let c=H0.get(this.auth._key());if(!c){try{const r=await cb(this.resolver,this.auth)?await super.execute():null;c=()=>Promise.resolve(r)}catch(a){c=()=>Promise.reject(a)}H0.set(this.auth._key(),c)}return this.bypassAuthState||H0.set(this.auth._key(),()=>Promise.resolve(null)),c()}async onAuthEvent(c){if(c.type==="signInViaRedirect")return super.onAuthEvent(c);if(c.type==="unknown"){this.resolve(null);return}if(c.eventId){const a=await this.auth._redirectUserForId(c.eventId);if(a)return this.user=a,super.onAuthEvent(c);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cb(e,c){const a=rb(c),r=ab(e);if(!await r._isAvailable())return!1;const t=await r._get(a)==="true";return await r._remove(a),t}function eb(e,c){H0.set(e._key(),c)}function ab(e){return A2(e._redirectPersistence)}function rb(e){return z0(JL,e.config.apiKey,e.name)}async function tb(e,c,a=!1){const r=H3(e),t=Sn(r,c),i=await new QL(r,t,a).execute();return i&&!a&&(delete i.user._redirectEventId,await r._persistUserIfCurrent(i.user),await r._setRedirectUser(null,c)),i}/**
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
 */const nb=10*60*1e3;class ib{constructor(c){this.auth=c,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(c){this.consumers.add(c),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,c)&&(this.sendToConsumer(this.queuedRedirectEvent,c),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(c){this.consumers.delete(c)}onEvent(c){if(this.hasEventBeenHandled(c))return!1;let a=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(c,r)&&(a=!0,this.sendToConsumer(c,r),this.saveEventToCache(c))}),this.hasHandledPotentialRedirect||!sb(c)||(this.hasHandledPotentialRedirect=!0,a||(this.queuedRedirectEvent=c,a=!0)),a}sendToConsumer(c,a){var r;if(c.error&&!An(c)){const t=((r=c.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";a.onError(C2(this.auth,t))}else a.onAuthEvent(c)}isEventForConsumer(c,a){const r=a.eventId===null||!!c.eventId&&c.eventId===a.eventId;return a.filter.includes(c.type)&&r}hasEventBeenHandled(c){return Date.now()-this.lastProcessedEventTime>=nb&&this.cachedEventUids.clear(),this.cachedEventUids.has(oa(c))}saveEventToCache(c){this.cachedEventUids.add(oa(c)),this.lastProcessedEventTime=Date.now()}}function oa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(c=>c).join("-")}function An({type:e,error:c}){return e==="unknown"&&(c==null?void 0:c.code)==="auth/no-auth-event"}function sb(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return An(e);default:return!1}}/**
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
 */async function ob(e,c={}){return z3(e,"GET","/v1/projects",c)}/**
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
 */const lb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fb=/^https?/;async function hb(e){if(e.config.emulator)return;const{authorizedDomains:c}=await ob(e);for(const a of c)try{if(ub(a))return}catch{}i2(e,"unauthorized-domain")}function ub(e){const c=G5(),{protocol:a,hostname:r}=new URL(c);if(e.startsWith("chrome-extension://")){const i=new URL(e);return i.hostname===""&&r===""?a==="chrome-extension:"&&e.replace("chrome-extension://","")===c.replace("chrome-extension://",""):a==="chrome-extension:"&&i.hostname===r}if(!fb.test(a))return!1;if(lb.test(e))return r===e;const t=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+t+"|"+t+")$","i").test(r)}/**
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
 */const mb=new T6(3e4,6e4);function la(){const e=g2().___jsl;if(e!=null&&e.H){for(const c of Object.keys(e.H))if(e.H[c].r=e.H[c].r||[],e.H[c].L=e.H[c].L||[],e.H[c].r=[...e.H[c].L],e.CP)for(let a=0;a<e.CP.length;a++)e.CP[a]=null}}function vb(e){return new Promise((c,a)=>{var r,t,n;function i(){la(),gapi.load("gapi.iframes",{callback:()=>{c(gapi.iframes.getContext())},ontimeout:()=>{la(),a(C2(e,"network-request-failed"))},timeout:mb.get()})}if(!((t=(r=g2().gapi)===null||r===void 0?void 0:r.iframes)===null||t===void 0)&&t.Iframe)c(gapi.iframes.getContext());else if(!((n=g2().gapi)===null||n===void 0)&&n.load)i();else{const s=iL("iframefcb");return g2()[s]=()=>{gapi.load?i():a(C2(e,"network-request-failed"))},dn(`${nL()}?onload=${s}`).catch(o=>a(o))}}).catch(c=>{throw V0=null,c})}let V0=null;function db(e){return V0=V0||vb(e),V0}/**
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
 */const pb=new T6(5e3,15e3),zb="__/auth/iframe",Hb="emulator/auth/iframe",Vb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cb(e){const c=e.config;W(c.authDomain,e,"auth-domain-config-required");const a=c.emulator?X7(c,Hb):`https://${e.config.authDomain}/${zb}`,r={apiKey:c.apiKey,appName:e.name,v:x4},t=Mb.get(e.config.apiHost);t&&(r.eid=t);const n=e._getFrameworks();return n.length&&(r.fw=n.join(",")),`${a}?${N6(r).slice(1)}`}async function gb(e){const c=await db(e),a=g2().gapi;return W(a,e,"internal-error"),c.open({where:document.body,url:Cb(e),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vb,dontclear:!0},r=>new Promise(async(t,n)=>{await r.restyle({setHideOnLeave:!1});const i=C2(e,"network-request-failed"),s=g2().setTimeout(()=>{n(i)},pb.get());function o(){g2().clearTimeout(s),t(r)}r.ping(o).then(o,()=>{n(i)})}))}/**
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
 */const Lb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bb=500,xb=600,yb="_blank",Nb="http://localhost";class fa{constructor(c){this.window=c,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sb(e,c,a,r=bb,t=xb){const n=Math.max((window.screen.availHeight-t)/2,0).toString(),i=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const o=Object.assign(Object.assign({},Lb),{width:r.toString(),height:t.toString(),top:n,left:i}),l=D1().toLowerCase();a&&(s=on(l)?yb:a),sn(l)&&(c=c||Nb,o.scrollbars="yes");const f=Object.entries(o).reduce((u,[d,z])=>`${u}${d}=${z},`,"");if(Zg(l)&&s!=="_self")return wb(c||"",s),new fa(null);const h=window.open(c||"",s,f);W(h,e,"popup-blocked");try{h.focus()}catch{}return new fa(h)}function wb(e,c){const a=document.createElement("a");a.href=e,a.target=c;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),a.dispatchEvent(r)}/**
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
 */const Ab="__/auth/handler",_b="emulator/auth/handler",kb=encodeURIComponent("fac");async function ha(e,c,a,r,t,n){W(e.config.authDomain,e,"auth-domain-config-required"),W(e.config.apiKey,e,"invalid-api-key");const i={apiKey:e.config.apiKey,appName:e.name,authType:a,redirectUrl:r,v:x4,eventId:t};if(c instanceof a9){c.setDefaultLanguage(e.languageCode),i.providerId=c.providerId||"",GV(c.getCustomParameters())||(i.customParameters=JSON.stringify(c.getCustomParameters()));for(const[f,h]of Object.entries(n||{}))i[f]=h}if(c instanceof E6){const f=c.getScopes().filter(h=>h!=="");f.length>0&&(i.scopes=f.join(","))}e.tenantId&&(i.tid=e.tenantId);const s=i;for(const f of Object.keys(s))s[f]===void 0&&delete s[f];const o=await e._getAppCheckToken(),l=o?`#${kb}=${encodeURIComponent(o)}`:"";return`${Tb(e)}?${N6(s).slice(1)}${l}`}function Tb({config:e}){return e.emulator?X7(e,_b):`https://${e.authDomain}/${Ab}`}/**
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
 */const u5="webStorageSupport";class Pb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ln,this._completeRedirectFn=tb,this._overrideRedirectResult=eb}async _openPopup(c,a,r,t){var n;R2((n=this.eventManagers[c._key()])===null||n===void 0?void 0:n.manager,"_initialize() not called before _openPopup()");const i=await ha(c,a,r,G5(),t);return Sb(c,i,r9())}async _openRedirect(c,a,r,t){await this._originValidation(c);const n=await ha(c,a,r,G5(),t);return RL(n),new Promise(()=>{})}_initialize(c){const a=c._key();if(this.eventManagers[a]){const{manager:t,promise:n}=this.eventManagers[a];return t?Promise.resolve(t):(R2(n,"If manager is not set, promise should be"),n)}const r=this.initAndGetManager(c);return this.eventManagers[a]={promise:r},r.catch(()=>{delete this.eventManagers[a]}),r}async initAndGetManager(c){const a=await gb(c),r=new ib(c);return a.register("authEvent",t=>(W(t==null?void 0:t.authEvent,c,"invalid-auth-event"),{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[c._key()]={manager:r},this.iframes[c._key()]=a,r}_isIframeWebStorageSupported(c,a){this.iframes[c._key()].send(u5,{type:u5},t=>{var n;const i=(n=t==null?void 0:t[0])===null||n===void 0?void 0:n[u5];i!==void 0&&a(!!i),i2(c,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(c){const a=c._key();return this.originValidationPromises[a]||(this.originValidationPromises[a]=hb(c)),this.originValidationPromises[a]}get _shouldInitProactively(){return mn()||Q7()||M8()}}const Eb=Pb;var ua="@firebase/auth",ma="1.6.1";/**
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
 */class Ib{constructor(c){this.auth=c,this.internalListeners=new Map}getUid(){var c;return this.assertAuthConfigured(),((c=this.auth.currentUser)===null||c===void 0?void 0:c.uid)||null}async getToken(c){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(c)}:null}addAuthTokenListener(c){if(this.assertAuthConfigured(),this.internalListeners.has(c))return;const a=this.auth.onIdTokenChanged(r=>{c((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(c,a),this.updateProactiveRefresh()}removeAuthTokenListener(c){this.assertAuthConfigured();const a=this.internalListeners.get(c);a&&(this.internalListeners.delete(c),a(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Rb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fb(e){z4(new T3("auth",(c,{options:a})=>{const r=c.getProvider("app").getImmediate(),t=c.getProvider("heartbeat"),n=c.getProvider("app-check-internal"),{apiKey:i,authDomain:s}=r.options;W(i&&!i.includes(":"),"invalid-api-key",{appName:r.name});const o={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vn(e)},l=new aL(r,t,n,o);return hL(l,a),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((c,a,r)=>{c.getProvider("auth-internal").initialize()})),z4(new T3("auth-internal",c=>{const a=H3(c.getProvider("auth").getImmediate());return(r=>new Ib(r))(a)},"PRIVATE").setInstantiationMode("EXPLICIT")),o3(ua,ma,Rb(e)),o3(ua,ma,"esm2017")}/**
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
 */const Db=5*60,Ob=mt("authIdTokenMaxAge")||Db;let va=null;const Bb=e=>async c=>{const a=c&&await c.getIdTokenResult(),r=a&&(new Date().getTime()-Date.parse(a.issuedAtTime))/1e3;if(r&&r>Ob)return;const t=a==null?void 0:a.token;va!==t&&(va=t,await fetch(e,{method:t?"POST":"DELETE",headers:t?{Authorization:`Bearer ${t}`}:{}}))};function Z5(e=zt()){const c=I7(e,"auth");if(c.isInitialized())return c.getImmediate();const a=fL(e,{popupRedirectResolver:Eb,persistence:[GL,PL,Ln]}),r=mt("authTokenSyncURL");if(r){const n=Bb(r);wL(a,n,()=>n(a.currentUser)),SL(a,i=>n(i))}const t=ht("auth");return t&&uL(a,`http://${t}`),a}function Ub(){var e,c;return(c=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&c!==void 0?c:document}rL({loadJS(e){return new Promise((c,a)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=c,r.onerror=t=>{const n=C2("internal-error");n.customData=t,a(n)},r.type="text/javascript",r.charset="UTF-8",Ub().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fb("Browser");const qb={apiKey:"AIzaSyAGNmG9eAco3XQbVglcTKAbtjgbx5rtxx4",authDomain:"lesson-6-task1-4.firebaseapp.com",projectId:"lesson-6-task1-4",storageBucket:"lesson-6-task1-4.appspot.com",messagingSenderId:"970419629294",appId:"1:970419629294:web:cbf2281f3e70b911b217ff"},_n=pt(qb),da=Z5(_n),$b=sg(_n);class Wb{constructor(c){this.dbCollection=lg($b,`/${c}`)}getListFromSnapshot(c){const a=[];return c.docs.forEach(r=>{a.push({id:r.id,...r.data()})}),a}loadItemsList(){return new Promise((c,a)=>{l5(this.dbCollection).then(r=>{c(this.getListFromSnapshot(r))}).catch(r=>{a(r)})})}addItem(c){return new Promise((a,r)=>{Lg(this.dbCollection,c).then(()=>{a(!0)}).catch(t=>{r(t)})})}addItemWithCustomId(c,a){return new Promise((r,t)=>{Cg(L3(this.dbCollection,c),a).then(()=>{r(!0)}).catch(n=>{t(n)})})}addItemToArray(c,a,r){return new Promise((t,n)=>{this.getItemById(c).then(i=>{i.appointments?f5(L3(this.dbCollection,c),{[a]:bg(r)}).then(()=>{t(!0)}).catch(s=>{n(s)}):this.addItemWithCustomId(c,{[a]:[r]}).then(()=>{t(!0)}).catch(s=>{n(s)})})})}removeItemFromArray(c,a,r){return new Promise((t,n)=>{f5(L3(this.dbCollection,c),{[a]:xg(r)}).then(()=>{t(!0)}).catch(i=>{n(i)})})}deleteItem(c){return new Promise((a,r)=>{gg(L3(this.dbCollection,c)).then(()=>{a(!0)}).catch(t=>{r(t)})})}updateItem(c,a){return new Promise((r,t)=>{const n=L3(this.dbCollection,c);f5(n,a).then(()=>{r(!0)}).catch(i=>{t(i)})})}getItemById(c){return new Promise((a,r)=>{const t=L3(this.dbCollection,c);Mg(t).then(n=>{n.exists()?a(n.data()):a({})}).catch(n=>{r(n)})})}loadFilteredData(c,a,r){const t=je(this.dbCollection,Ke(c,a,r));return new Promise((n,i)=>{l5(t).then(s=>{n(this.getListFromSnapshot(s))}).catch(s=>{i(s)})})}loadDocumentsFromIdsList(c){const a=je(this.dbCollection,Ke(fg(),"in",c));return new Promise((r,t)=>{l5(a).then(n=>{r(this.getListFromSnapshot(n))}).catch(n=>{t(n)})})}}const Y3=new Wb("users"),kn=w7("users",()=>{const{generalApiOperation:e}=k7(),c=t2(null),a=t2(null);async function r(){c.value=await e({operation:()=>Y3.loadItemsList()})}async function t(u){if(u)return a.value=await e({operation:()=>Y3.getItemById(u)}),a.value}async function n(u){a.value=await e({operation:()=>Y3.addItem(u)})}async function i({id:u,data:d}){const z=await t(u);z!=null&&z.email||(a.value=await e({operation:()=>Y3.addItemWithCustomId(u,d)}))}async function s({id:u,data:d}){await e({operation:()=>Y3.updateItem(u,d)}),a.value.email===d.email&&(a.value=d)}async function o(u){a.value=await e({operation:()=>Y3.deleteItem(u)})}const l=l1(()=>c.value),f=l1(()=>a.value),h=l1(()=>{var u;return((u=a==null?void 0:a.value)==null?void 0:u.permissions)??{}});return{usersList:c,loadUsersList:r,loadUserById:t,addUser:n,addUserWithCustomId:i,deleteUser:o,updateUser:s,getUsersList:l,getCurrentUser:f,getCurrentUserPermissions:h}});class Gb{constructor({saveCredentialsInLocalStorage:c=!0,authCredentialLocalStorageKey:a="authCredential"}={}){this.saveCredentialsInLocalStorage=c,this.authCredentialLocalStorageKey=a}loginWithGoogleAccountPopup(){return new Promise((c,a)=>{const r=new y2;XL(da,r).then(t=>{c(t==null?void 0:t.user)}).catch(t=>{a(t)})})}signUpWithWithEmailAndPassword({email:c,password:a}){return new Promise((r,t)=>{if(!c||!a)t(!1);else{const n=Z5();yL(n,c,a).then(i=>{r(i==null?void 0:i.user)}).catch(i=>{t(i)})}})}signInWithWithEmailAndPassword({email:c,password:a}){return new Promise((r,t)=>{if(!c||!a)t(!1);else{const n=Z5();NL(n,c,a).then(i=>{r(i==null?void 0:i.user)}).catch(i=>{t(i)})}})}logout(){return new Promise((c,a)=>{AL(da).then(()=>{localStorage.removeItem(this.authCredentialLocalStorageKey),c(!0)}).catch(r=>{a(r)})})}}const a0=new Gb(import.meta.VITE_SAVE_CREDENTIALS_IN_LOCAL_STORE),n9=w7("auth",()=>{const e=k7(),c=kn(),{generalApiOperation:a}=e,r=t2(null),t=l1(()=>r.value);async function n(f,h){a({operation:()=>a0.signUpWithWithEmailAndPassword({email:f,password:h})}).then(async u=>{var d;r.value=u,await c.addUserWithCustomId({id:(d=r==null?void 0:r.value)==null?void 0:d.uid,data:{email:f,permissions:{create:!1,read:!0,update:!1,delete:!1}}})})}async function i(f,h){return new Promise((u,d)=>{a({operation:()=>a0.signInWithWithEmailAndPassword({email:f,password:h})}).then(z=>{r.value=z,c.loadUserById(r.value.uid).then(()=>{u(z)}).catch(y=>d(y))}).catch(z=>d(z))})}function s(){return new Promise((f,h)=>{a({operation:()=>a0.loginWithGoogleAccountPopup()}).then(u=>{var d,z;r.value=u,c.addUserWithCustomId({id:(d=r==null?void 0:r.value)==null?void 0:d.uid,data:{email:(z=r==null?void 0:r.value)==null?void 0:z.email,permissions:{create:!1,read:!0,update:!1,delete:!0}}}).then(()=>{c.loadUserById(r.value.uid).then(()=>{f(u)})})}).catch(u=>h(u))})}function o(){a({operation:()=>a0.logout()}),c.currentUser=null}async function l(){return r.value}return{signUpWithWithEmailAndPassword:n,signInWithWithEmailAndPassword:i,loginWithGoogleAccount:s,logOut:o,getUser:t,getAuthData:l}});function jb(){return n9().getUser}function Tn(e){var r,t,n;const{getCurrentUserPermissions:c,getCurrentUser:a}=kn();return!((r=e.meta)!=null&&r.requireAuth)||((t=e.meta)==null?void 0:t.hasAccess)&&e.meta.hasAccess(c)||!((n=e.meta)!=null&&n.hasAccess)&&(a==null?void 0:a.value)}const A4=(e,c)=>{const a=e.__vccOpts||e;for(const[r,t]of c)a[r]=t;return a},Kb={__name:"MainMenuComponent",setup(e){function c(r,t){var n;for(const i of r)i.children?c(i.children,t):(n=i.meta)!=null&&n.useInMenu&&Tn(i)&&t.push({name:i.name})}const a=l1(()=>{const r=[];return c(Pn,r),r});return(r,t)=>{const n=b4("router-link");return S1(),S2("nav",null,[(S1(!0),S2(a2,null,sz(a.value,i=>(S1(),T2(n,{key:i.name,to:{name:i.name},class:"menu-link"},{default:h4(()=>[i4(Ka(i.name),1)]),_:2},1032,["to"]))),128))])}}},Zb=A4(Kb,[["__scopeId","data-v-2c2007e1"]]),Yb={},Xb={class:"loading-container"};function Jb(e,c){const a=b4("font-awesome-icon");return S1(),S2("div",Xb,[L1(a,{icon:["fas","spinner"],size:"6x",spin:"",class:"icon"})])}const Qb=A4(Yb,[["render",Jb],["__scopeId","data-v-955c0caa"]]),cx={},ex=e=>(Lr("data-v-59e5c60e"),e=e(),br(),e),ax={class:"container"},rx=ex(()=>i1("h2",null," Щось пішло не так! ",-1));function tx(e,c){const a=b4("font-awesome-icon");return S1(),S2("div",ax,[rx,L1(a,{icon:["fas","triangle-exclamation"],size:"6x",class:"icon"})])}const nx=A4(cx,[["render",tx],["__scopeId","data-v-59e5c60e"]]),ix={class:"container"},sx={class:"header"},ox={class:"right-section"},lx={key:0,class:"user-section"},fx=["src"],hx={class:"ml-16"},ux={class:"main"},mx={class:"footer"},vx={__name:"MainMasterPage",setup(e){const c=k7(),{isLoading:a,hasError:r}=MH(c),t=n9(),n=l1(()=>t.getUser),i=st();l1(()=>LV());function s(){i.push({name:"login"})}function o(){t.logOut(),i.push({name:"login"})}return(l,f)=>{const h=b4("font-awesome-icon");return S1(),S2("div",ix,[i1("div",sx,[y3(l.$slots,"header",{},()=>[i1("div",null,[L1(Zb)]),i1("div",ox,[n.value?(S1(),S2("div",lx,[n.value.photoURL?(S1(),S2("img",{key:0,src:n.value.photoURL,class:"ml-16"},null,8,fx)):(S1(),T2(h,{key:1,icon:["fas","user"],size:"2x",class:"ml-16"})),i1("span",hx,Ka(n.value.displayName??n.value.email),1),i1("button",{class:"ml-16",onClick:o}," Вийти ")])):(S1(),S2("button",{key:1,onClick:s},"Увійти"))])],!0)]),i1("div",null,[y3(l.$slots,"title",{},void 0,!0)]),i1("div",ux,[M2(a)?(S1(),T2(Qb,{key:0})):M2(r)?(S1(),T2(nx,{key:1})):Uc("",!0),M2(r)?Uc("",!0):y3(l.$slots,"default",{key:2},void 0,!0)]),i1("div",mx,[y3(l.$slots,"footer",{},void 0,!0)])])}}},dx=A4(vx,[["__scopeId","data-v-f7d10204"]]),px=i1("div",{class:"home"},[i1("h3",null,"Вітаємо у резиденції Миколая!"),i1("h3",null,"Тут ви зможете зібрати подарунки для своїх друзів")],-1),zx={__name:"HomeView",setup(e){return(c,a)=>(S1(),T2(dx,null,{default:h4(()=>[px]),_:1}))}},Hx={},Vx={class:"container"},Mx={class:"header"},Cx={class:"main"},gx={class:"content"},Lx={class:"footer"};function bx(e,c){const a=b4("router-link");return S1(),S2("div",Vx,[i1("div",Mx,[y3(e.$slots,"header",{},void 0,!0)]),i1("div",Cx,[i1("div",gx,[y3(e.$slots,"default",{},void 0,!0)])]),i1("div",Lx,[y3(e.$slots,"footer",{},()=>[L1(a,{to:{name:"home"}},{default:h4(()=>[i4(" На головну ")]),_:1})],!0)])])}const xx=A4(Hx,[["render",bx],["__scopeId","data-v-61ac50de"]]),yx=e=>(Lr("data-v-bbc1a06b"),e=e(),br(),e),Nx=yx(()=>i1("h1",null," Сторінка входу",-1)),Sx={class:"mt-16"},wx={class:"mt-16"},Ax=["disabled"],_x=["disabled"],kx={class:"mt-16"},Tx={__name:"LoginPage",setup(e){const c=n9(),a=st(),r=t2(null),t=t2(null),n=t2(null),i=l1(()=>r.value&&t.value),{signUpWithWithEmailAndPassword:s,signInWithWithEmailAndPassword:o,loginWithGoogleAccount:l}=c;function f(d,z){s(d,z).then(()=>{a.push({name:"home"})})}function h(d,z){o(d,z).then(()=>{a.push({name:"home"})})}function u(){l().then(()=>{a.push({name:"home"})})}return(d,z)=>{const y=b4("font-awesome-icon");return S1(),T2(xx,null,{header:h4(()=>[Nx]),default:h4(()=>[i1("div",Sx,[i1("label",null,[i4(" Електронна пошта "),kc(i1("input",{"onUpdate:modelValue":z[0]||(z[0]=w=>r.value=w),type:"email",placeholder:"Введіть свою електронну пошту"},null,512),[[ee,r.value]])])]),i1("div",wx,[i1("label",null,[i4(" Пароль "),kc(i1("input",{"onUpdate:modelValue":z[1]||(z[1]=w=>t.value=w),type:"password",placeholder:"Введіть свій пароль входу"},null,512),[[ee,t.value]])])]),i1("button",{onClick:z[2]||(z[2]=w=>f(r.value,t.value,n.value)),disabled:!i.value,class:"mt-16"}," Register ",8,Ax),i1("button",{onClick:z[3]||(z[3]=w=>h(r.value,t.value,n.value)),disabled:!i.value,class:"mt-16 ml-16"}," Login ",8,_x),i1("div",kx,[i1("button",{onClick:u},[i4(" Login with Google "),L1(y,{icon:["fab","google"],color:"red"})])])]),_:1})}}},Px=A4(Tx,[["__scopeId","data-v-bbc1a06b"]]),Pn=[{path:"/",name:"home",meta:{requireAuth:!1,useInMenu:!0},component:zx},{path:"/login",name:"login",meta:{requireAuth:!1,useInMenu:!1},component:Px},{path:"/users",name:"users",meta:{requireAuth:!0,hasAccess:e=>e==null?void 0:e.isAdmin,useInMenu:!0},component:()=>E4(()=>import("./UsersPage-DvDf9ZwD.js"),__vite__mapDeps([]))},{path:"/friends",name:"friends",meta:{requireAuth:!1,useInMenu:!0},component:()=>E4(()=>import("./FriendsView-0A-qklCB.js"),__vite__mapDeps([0,1,2,3]))},{path:"/assignments",name:"assignments",meta:{requireAuth:!1,hasAccess:e=>e==null?void 0:e.read,useInMenu:!0},component:()=>E4(()=>import("./AssignmentsView-PphQWMQS.js"),__vite__mapDeps([4,2,1,5,6]))},{path:"/presents",name:"presents",meta:{requireAuth:!1,useInMenu:!0},component:()=>E4(()=>import("./PresentsView-D_N2c6z9.js"),__vite__mapDeps([7,5,2,8]))},{path:"/:path(.*)*",name:"page-not-found",meta:{requireAuth:!0},component:()=>E4(()=>import("./PageNotFound-DrEeYobX.js"),__vite__mapDeps([]))}],En=CV({history:FH("/"),routes:Pn});En.beforeEach(async e=>{var c;if((c=e.meta)!=null&&c.requireAuth){if(!jb())return{name:"login"};if(!Tn(e))return{name:"page-not-found"}}});function pa(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);c&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function k(e){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?pa(Object(a),!0).forEach(function(r){x1(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pa(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function $0(e){"@babel/helpers - typeof";return $0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},$0(e)}function Ex(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function za(e,c){for(var a=0;a<c.length;a++){var r=c[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ix(e,c,a){return c&&za(e.prototype,c),a&&za(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function x1(e,c,a){return c in e?Object.defineProperty(e,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[c]=a,e}function i9(e,c){return Fx(e)||Ox(e,c)||In(e,c)||Ux()}function R6(e){return Rx(e)||Dx(e)||In(e)||Bx()}function Rx(e){if(Array.isArray(e))return Y5(e)}function Fx(e){if(Array.isArray(e))return e}function Dx(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ox(e,c){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r=[],t=!0,n=!1,i,s;try{for(a=a.call(e);!(t=(i=a.next()).done)&&(r.push(i.value),!(c&&r.length===c));t=!0);}catch(o){n=!0,s=o}finally{try{!t&&a.return!=null&&a.return()}finally{if(n)throw s}}return r}}function In(e,c){if(e){if(typeof e=="string")return Y5(e,c);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Y5(e,c)}}function Y5(e,c){(c==null||c>e.length)&&(c=e.length);for(var a=0,r=new Array(c);a<c;a++)r[a]=e[a];return r}function Bx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ux(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ha=function(){},s9={},Rn={},Fn=null,Dn={mark:Ha,measure:Ha};try{typeof window<"u"&&(s9=window),typeof document<"u"&&(Rn=document),typeof MutationObserver<"u"&&(Fn=MutationObserver),typeof performance<"u"&&(Dn=performance)}catch{}var qx=s9.navigator||{},Va=qx.userAgent,Ma=Va===void 0?"":Va,m3=s9,v1=Rn,Ca=Fn,r0=Dn;m3.document;var q2=!!v1.documentElement&&!!v1.head&&typeof v1.addEventListener=="function"&&typeof v1.createElement=="function",On=~Ma.indexOf("MSIE")||~Ma.indexOf("Trident/"),t0,n0,i0,s0,o0,F2="___FONT_AWESOME___",X5=16,Bn="fa",Un="svg-inline--fa",O3="data-fa-i2svg",J5="data-fa-pseudo-element",$x="data-fa-pseudo-element-pending",o9="data-prefix",l9="data-icon",ga="fontawesome-i2svg",Wx="async",Gx=["HTML","HEAD","STYLE","SCRIPT"],qn=function(){try{return!0}catch{return!1}}(),m1="classic",H1="sharp",f9=[m1,H1];function F6(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[m1]}})}var z6=F6((t0={},x1(t0,m1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),x1(t0,H1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),t0)),H6=F6((n0={},x1(n0,m1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),x1(n0,H1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),n0)),V6=F6((i0={},x1(i0,m1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),x1(i0,H1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),i0)),jx=F6((s0={},x1(s0,m1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),x1(s0,H1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),s0)),Kx=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,$n="fa-layers-text",Zx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Yx=F6((o0={},x1(o0,m1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),x1(o0,H1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),o0)),Wn=[1,2,3,4,5,6,7,8,9,10],Xx=Wn.concat([11,12,13,14,15,16,17,18,19,20]),Jx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],S3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},M6=new Set;Object.keys(H6[m1]).map(M6.add.bind(M6));Object.keys(H6[H1]).map(M6.add.bind(M6));var Qx=[].concat(f9,R6(M6),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",S3.GROUP,S3.SWAP_OPACITY,S3.PRIMARY,S3.SECONDARY]).concat(Wn.map(function(e){return"".concat(e,"x")})).concat(Xx.map(function(e){return"w-".concat(e)})),J4=m3.FontAwesomeConfig||{};function cy(e){var c=v1.querySelector("script["+e+"]");if(c)return c.getAttribute(e)}function ey(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(v1&&typeof v1.querySelector=="function"){var ay=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ay.forEach(function(e){var c=i9(e,2),a=c[0],r=c[1],t=ey(cy(a));t!=null&&(J4[r]=t)})}var Gn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Bn,replacementClass:Un,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};J4.familyPrefix&&(J4.cssPrefix=J4.familyPrefix);var C4=k(k({},Gn),J4);C4.autoReplaceSvg||(C4.observeMutations=!1);var E={};Object.keys(Gn).forEach(function(e){Object.defineProperty(E,e,{enumerable:!0,set:function(a){C4[e]=a,Q4.forEach(function(r){return r(E)})},get:function(){return C4[e]}})});Object.defineProperty(E,"familyPrefix",{enumerable:!0,set:function(c){C4.cssPrefix=c,Q4.forEach(function(a){return a(E)})},get:function(){return C4.cssPrefix}});m3.FontAwesomeConfig=E;var Q4=[];function ry(e){return Q4.push(e),function(){Q4.splice(Q4.indexOf(e),1)}}var K2=X5,V2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ty(e){if(!(!e||!q2)){var c=v1.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=e;for(var a=v1.head.childNodes,r=null,t=a.length-1;t>-1;t--){var n=a[t],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return v1.head.insertBefore(c,r),e}}var ny="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function C6(){for(var e=12,c="";e-- >0;)c+=ny[Math.random()*62|0];return c}function _4(e){for(var c=[],a=(e||[]).length>>>0;a--;)c[a]=e[a];return c}function h9(e){return e.classList?_4(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(c){return c})}function jn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function iy(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,'="').concat(jn(e[a]),'" ')},"").trim()}function b8(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,": ").concat(e[a].trim(),";")},"")}function u9(e){return e.size!==V2.size||e.x!==V2.x||e.y!==V2.y||e.rotate!==V2.rotate||e.flipX||e.flipY}function sy(e){var c=e.transform,a=e.containerWidth,r=e.iconWidth,t={transform:"translate(".concat(a/2," 256)")},n="translate(".concat(c.x*32,", ").concat(c.y*32,") "),i="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),s="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(n," ").concat(i," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:t,inner:o,path:l}}function oy(e){var c=e.transform,a=e.width,r=a===void 0?X5:a,t=e.height,n=t===void 0?X5:t,i=e.startCentered,s=i===void 0?!1:i,o="";return s&&On?o+="translate(".concat(c.x/K2-r/2,"em, ").concat(c.y/K2-n/2,"em) "):s?o+="translate(calc(-50% + ".concat(c.x/K2,"em), calc(-50% + ").concat(c.y/K2,"em)) "):o+="translate(".concat(c.x/K2,"em, ").concat(c.y/K2,"em) "),o+="scale(".concat(c.size/K2*(c.flipX?-1:1),", ").concat(c.size/K2*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var ly=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
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
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
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
}`;function Kn(){var e=Bn,c=Un,a=E.cssPrefix,r=E.replacementClass,t=ly;if(a!==e||r!==c){var n=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(c),"g");t=t.replace(n,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(s,".".concat(r))}return t}var La=!1;function m5(){E.autoAddCss&&!La&&(ty(Kn()),La=!0)}var fy={mixout:function(){return{dom:{css:Kn,insertCss:m5}}},hooks:function(){return{beforeDOMElementCreation:function(){m5()},beforeI2svg:function(){m5()}}}},D2=m3||{};D2[F2]||(D2[F2]={});D2[F2].styles||(D2[F2].styles={});D2[F2].hooks||(D2[F2].hooks={});D2[F2].shims||(D2[F2].shims=[]);var l2=D2[F2],Zn=[],hy=function e(){v1.removeEventListener("DOMContentLoaded",e),W0=1,Zn.map(function(c){return c()})},W0=!1;q2&&(W0=(v1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v1.readyState),W0||v1.addEventListener("DOMContentLoaded",hy));function uy(e){q2&&(W0?setTimeout(e,0):Zn.push(e))}function D6(e){var c=e.tag,a=e.attributes,r=a===void 0?{}:a,t=e.children,n=t===void 0?[]:t;return typeof e=="string"?jn(e):"<".concat(c," ").concat(iy(r),">").concat(n.map(D6).join(""),"</").concat(c,">")}function ba(e,c,a){if(e&&e[c]&&e[c][a])return{prefix:c,iconName:a,icon:e[c][a]}}var my=function(c,a){return function(r,t,n,i){return c.call(a,r,t,n,i)}},v5=function(c,a,r,t){var n=Object.keys(c),i=n.length,s=t!==void 0?my(a,t):a,o,l,f;for(r===void 0?(o=1,f=c[n[0]]):(o=0,f=r);o<i;o++)l=n[o],f=s(f,c[l],l,c);return f};function vy(e){for(var c=[],a=0,r=e.length;a<r;){var t=e.charCodeAt(a++);if(t>=55296&&t<=56319&&a<r){var n=e.charCodeAt(a++);(n&64512)==56320?c.push(((t&1023)<<10)+(n&1023)+65536):(c.push(t),a--)}else c.push(t)}return c}function Q5(e){var c=vy(e);return c.length===1?c[0].toString(16):null}function dy(e,c){var a=e.length,r=e.charCodeAt(c),t;return r>=55296&&r<=56319&&a>c+1&&(t=e.charCodeAt(c+1),t>=56320&&t<=57343)?(r-55296)*1024+t-56320+65536:r}function xa(e){return Object.keys(e).reduce(function(c,a){var r=e[a],t=!!r.icon;return t?c[r.iconName]=r.icon:c[a]=r,c},{})}function c7(e,c){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,t=r===void 0?!1:r,n=xa(c);typeof l2.hooks.addPack=="function"&&!t?l2.hooks.addPack(e,xa(c)):l2.styles[e]=k(k({},l2.styles[e]||{}),n),e==="fas"&&c7("fa",c)}var l0,f0,h0,Q3=l2.styles,py=l2.shims,zy=(l0={},x1(l0,m1,Object.values(V6[m1])),x1(l0,H1,Object.values(V6[H1])),l0),m9=null,Yn={},Xn={},Jn={},Qn={},ci={},Hy=(f0={},x1(f0,m1,Object.keys(z6[m1])),x1(f0,H1,Object.keys(z6[H1])),f0);function Vy(e){return~Qx.indexOf(e)}function My(e,c){var a=c.split("-"),r=a[0],t=a.slice(1).join("-");return r===e&&t!==""&&!Vy(t)?t:null}var ei=function(){var c=function(n){return v5(Q3,function(i,s,o){return i[o]=v5(s,n,{}),i},{})};Yn=c(function(t,n,i){if(n[3]&&(t[n[3]]=i),n[2]){var s=n[2].filter(function(o){return typeof o=="number"});s.forEach(function(o){t[o.toString(16)]=i})}return t}),Xn=c(function(t,n,i){if(t[i]=i,n[2]){var s=n[2].filter(function(o){return typeof o=="string"});s.forEach(function(o){t[o]=i})}return t}),ci=c(function(t,n,i){var s=n[2];return t[i]=i,s.forEach(function(o){t[o]=i}),t});var a="far"in Q3||E.autoFetchSvg,r=v5(py,function(t,n){var i=n[0],s=n[1],o=n[2];return s==="far"&&!a&&(s="fas"),typeof i=="string"&&(t.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(t.unicodes[i.toString(16)]={prefix:s,iconName:o}),t},{names:{},unicodes:{}});Jn=r.names,Qn=r.unicodes,m9=x8(E.styleDefault,{family:E.familyDefault})};ry(function(e){m9=x8(e.styleDefault,{family:E.familyDefault})});ei();function v9(e,c){return(Yn[e]||{})[c]}function Cy(e,c){return(Xn[e]||{})[c]}function w3(e,c){return(ci[e]||{})[c]}function ai(e){return Jn[e]||{prefix:null,iconName:null}}function gy(e){var c=Qn[e],a=v9("fas",e);return c||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function v3(){return m9}var d9=function(){return{prefix:null,iconName:null,rest:[]}};function x8(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.family,r=a===void 0?m1:a,t=z6[r][e],n=H6[r][e]||H6[r][t],i=e in l2.styles?e:null;return n||i||null}var ya=(h0={},x1(h0,m1,Object.keys(V6[m1])),x1(h0,H1,Object.keys(V6[H1])),h0);function y8(e){var c,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.skipLookups,t=r===void 0?!1:r,n=(c={},x1(c,m1,"".concat(E.cssPrefix,"-").concat(m1)),x1(c,H1,"".concat(E.cssPrefix,"-").concat(H1)),c),i=null,s=m1;(e.includes(n[m1])||e.some(function(l){return ya[m1].includes(l)}))&&(s=m1),(e.includes(n[H1])||e.some(function(l){return ya[H1].includes(l)}))&&(s=H1);var o=e.reduce(function(l,f){var h=My(E.cssPrefix,f);if(Q3[f]?(f=zy[s].includes(f)?jx[s][f]:f,i=f,l.prefix=f):Hy[s].indexOf(f)>-1?(i=f,l.prefix=x8(f,{family:s})):h?l.iconName=h:f!==E.replacementClass&&f!==n[m1]&&f!==n[H1]&&l.rest.push(f),!t&&l.prefix&&l.iconName){var u=i==="fa"?ai(l.iconName):{},d=w3(l.prefix,l.iconName);u.prefix&&(i=null),l.iconName=u.iconName||d||l.iconName,l.prefix=u.prefix||l.prefix,l.prefix==="far"&&!Q3.far&&Q3.fas&&!E.autoFetchSvg&&(l.prefix="fas")}return l},d9());return(e.includes("fa-brands")||e.includes("fab"))&&(o.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===H1&&(Q3.fass||E.autoFetchSvg)&&(o.prefix="fass",o.iconName=w3(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=v3()||"fas"),o}var Ly=function(){function e(){Ex(this,e),this.definitions={}}return Ix(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];var i=t.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){a.definitions[s]=k(k({},a.definitions[s]||{}),i[s]),c7(s,i[s]);var o=V6[m1][s];o&&c7(o,i[s]),ei()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var t=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(t).map(function(n){var i=t[n],s=i.prefix,o=i.iconName,l=i.icon,f=l[2];a[s]||(a[s]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(a[s][h]=l)}),a[s][o]=l}),a}}]),e}(),Na=[],c4={},l4={},by=Object.keys(l4);function xy(e,c){var a=c.mixoutsTo;return Na=e,c4={},Object.keys(l4).forEach(function(r){by.indexOf(r)===-1&&delete l4[r]}),Na.forEach(function(r){var t=r.mixout?r.mixout():{};if(Object.keys(t).forEach(function(i){typeof t[i]=="function"&&(a[i]=t[i]),$0(t[i])==="object"&&Object.keys(t[i]).forEach(function(s){a[i]||(a[i]={}),a[i][s]=t[i][s]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){c4[i]||(c4[i]=[]),c4[i].push(n[i])})}r.provides&&r.provides(l4)}),a}function e7(e,c){for(var a=arguments.length,r=new Array(a>2?a-2:0),t=2;t<a;t++)r[t-2]=arguments[t];var n=c4[e]||[];return n.forEach(function(i){c=i.apply(null,[c].concat(r))}),c}function B3(e){for(var c=arguments.length,a=new Array(c>1?c-1:0),r=1;r<c;r++)a[r-1]=arguments[r];var t=c4[e]||[];t.forEach(function(n){n.apply(null,a)})}function O2(){var e=arguments[0],c=Array.prototype.slice.call(arguments,1);return l4[e]?l4[e].apply(null,c):void 0}function a7(e){e.prefix==="fa"&&(e.prefix="fas");var c=e.iconName,a=e.prefix||v3();if(c)return c=w3(a,c)||c,ba(ri.definitions,a,c)||ba(l2.styles,a,c)}var ri=new Ly,yy=function(){E.autoReplaceSvg=!1,E.observeMutations=!1,B3("noAuto")},Ny={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q2?(B3("beforeI2svg",c),O2("pseudoElements2svg",c),O2("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot;E.autoReplaceSvg===!1&&(E.autoReplaceSvg=!0),E.observeMutations=!0,uy(function(){wy({autoReplaceSvgRoot:a}),B3("watch",c)})}},Sy={icon:function(c){if(c===null)return null;if($0(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:w3(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var a=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],r=x8(c[0]);return{prefix:r,iconName:w3(r,a)||a}}if(typeof c=="string"&&(c.indexOf("".concat(E.cssPrefix,"-"))>-1||c.match(Kx))){var t=y8(c.split(" "),{skipLookups:!0});return{prefix:t.prefix||v3(),iconName:w3(t.prefix,t.iconName)||t.iconName}}if(typeof c=="string"){var n=v3();return{prefix:n,iconName:w3(n,c)||c}}}},Q1={noAuto:yy,config:E,dom:Ny,parse:Sy,library:ri,findIconDefinition:a7,toHtml:D6},wy=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot,r=a===void 0?v1:a;(Object.keys(l2.styles).length>0||E.autoFetchSvg)&&q2&&E.autoReplaceSvg&&Q1.dom.i2svg({node:r})};function N8(e,c){return Object.defineProperty(e,"abstract",{get:c}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return D6(r)})}}),Object.defineProperty(e,"node",{get:function(){if(q2){var r=v1.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ay(e){var c=e.children,a=e.main,r=e.mask,t=e.attributes,n=e.styles,i=e.transform;if(u9(i)&&a.found&&!r.found){var s=a.width,o=a.height,l={x:s/o/2,y:.5};t.style=b8(k(k({},n),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:t,children:c}]}function _y(e){var c=e.prefix,a=e.iconName,r=e.children,t=e.attributes,n=e.symbol,i=n===!0?"".concat(c,"-").concat(E.cssPrefix,"-").concat(a):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},t),{},{id:i}),children:r}]}]}function p9(e){var c=e.icons,a=c.main,r=c.mask,t=e.prefix,n=e.iconName,i=e.transform,s=e.symbol,o=e.title,l=e.maskId,f=e.titleId,h=e.extra,u=e.watchable,d=u===void 0?!1:u,z=r.found?r:a,y=z.width,w=z.height,V=t==="fak",g=[E.replacementClass,n?"".concat(E.cssPrefix,"-").concat(n):""].filter(function($){return h.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(h.classes).join(" "),S={children:[],attributes:k(k({},h.attributes),{},{"data-prefix":t,"data-icon":n,class:g,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(w)})},F=V&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/w*16*.0625,"em")}:{};d&&(S.attributes[O3]=""),o&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(f||C6())},children:[o]}),delete S.attributes.title);var D=k(k({},S),{},{prefix:t,iconName:n,main:a,mask:r,maskId:l,transform:i,symbol:s,styles:k(k({},F),h.styles)}),R=r.found&&a.found?O2("generateAbstractMask",D)||{children:[],attributes:{}}:O2("generateAbstractIcon",D)||{children:[],attributes:{}},Y=R.children,Z=R.attributes;return D.children=Y,D.attributes=Z,s?_y(D):Ay(D)}function Sa(e){var c=e.content,a=e.width,r=e.height,t=e.transform,n=e.title,i=e.extra,s=e.watchable,o=s===void 0?!1:s,l=k(k(k({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});o&&(l[O3]="");var f=k({},i.styles);u9(t)&&(f.transform=oy({transform:t,startCentered:!0,width:a,height:r}),f["-webkit-transform"]=f.transform);var h=b8(f);h.length>0&&(l.style=h);var u=[];return u.push({tag:"span",attributes:l,children:[c]}),n&&u.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),u}function ky(e){var c=e.content,a=e.title,r=e.extra,t=k(k(k({},r.attributes),a?{title:a}:{}),{},{class:r.classes.join(" ")}),n=b8(r.styles);n.length>0&&(t.style=n);var i=[];return i.push({tag:"span",attributes:t,children:[c]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var d5=l2.styles;function r7(e){var c=e[0],a=e[1],r=e.slice(4),t=i9(r,1),n=t[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(E.cssPrefix,"-").concat(S3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(E.cssPrefix,"-").concat(S3.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(E.cssPrefix,"-").concat(S3.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:c,height:a,icon:i}}var Ty={found:!1,width:512,height:512};function Py(e,c){!qn&&!E.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(c,'" is missing.'))}function t7(e,c){var a=c;return c==="fa"&&E.styleDefault!==null&&(c=v3()),new Promise(function(r,t){if(O2("missingIconAbstract"),a==="fa"){var n=ai(e)||{};e=n.iconName||e,c=n.prefix||c}if(e&&c&&d5[c]&&d5[c][e]){var i=d5[c][e];return r(r7(i))}Py(e,c),r(k(k({},Ty),{},{icon:E.showMissingIcons&&e?O2("missingIconAbstract")||{}:{}}))})}var wa=function(){},n7=E.measurePerformance&&r0&&r0.mark&&r0.measure?r0:{mark:wa,measure:wa},D4='FA "6.5.1"',Ey=function(c){return n7.mark("".concat(D4," ").concat(c," begins")),function(){return ti(c)}},ti=function(c){n7.mark("".concat(D4," ").concat(c," ends")),n7.measure("".concat(D4," ").concat(c),"".concat(D4," ").concat(c," begins"),"".concat(D4," ").concat(c," ends"))},z9={begin:Ey,end:ti},M0=function(){};function Aa(e){var c=e.getAttribute?e.getAttribute(O3):null;return typeof c=="string"}function Iy(e){var c=e.getAttribute?e.getAttribute(o9):null,a=e.getAttribute?e.getAttribute(l9):null;return c&&a}function Ry(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(E.replacementClass)}function Fy(){if(E.autoReplaceSvg===!0)return C0.replace;var e=C0[E.autoReplaceSvg];return e||C0.replace}function Dy(e){return v1.createElementNS("http://www.w3.org/2000/svg",e)}function Oy(e){return v1.createElement(e)}function ni(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.ceFn,r=a===void 0?e.tag==="svg"?Dy:Oy:a;if(typeof e=="string")return v1.createTextNode(e);var t=r(e.tag);Object.keys(e.attributes||[]).forEach(function(i){t.setAttribute(i,e.attributes[i])});var n=e.children||[];return n.forEach(function(i){t.appendChild(ni(i,{ceFn:r}))}),t}function By(e){var c=" ".concat(e.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var C0={replace:function(c){var a=c[0];if(a.parentNode)if(c[1].forEach(function(t){a.parentNode.insertBefore(ni(t),a)}),a.getAttribute(O3)===null&&E.keepOriginalSource){var r=v1.createComment(By(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(c){var a=c[0],r=c[1];if(~h9(a).indexOf(E.replacementClass))return C0.replace(c);var t=new RegExp("".concat(E.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(s,o){return o===E.replacementClass||o.match(t)?s.toSvg.push(o):s.toNode.push(o),s},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(s){return D6(s)}).join(`
`);a.setAttribute(O3,""),a.innerHTML=i}};function _a(e){e()}function ii(e,c){var a=typeof c=="function"?c:M0;if(e.length===0)a();else{var r=_a;E.mutateApproach===Wx&&(r=m3.requestAnimationFrame||_a),r(function(){var t=Fy(),n=z9.begin("mutate");e.map(t),n(),a()})}}var H9=!1;function si(){H9=!0}function i7(){H9=!1}var G0=null;function ka(e){if(Ca&&E.observeMutations){var c=e.treeCallback,a=c===void 0?M0:c,r=e.nodeCallback,t=r===void 0?M0:r,n=e.pseudoElementsCallback,i=n===void 0?M0:n,s=e.observeMutationsRoot,o=s===void 0?v1:s;G0=new Ca(function(l){if(!H9){var f=v3();_4(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Aa(h.addedNodes[0])&&(E.searchPseudoElements&&i(h.target),a(h.target)),h.type==="attributes"&&h.target.parentNode&&E.searchPseudoElements&&i(h.target.parentNode),h.type==="attributes"&&Aa(h.target)&&~Jx.indexOf(h.attributeName))if(h.attributeName==="class"&&Iy(h.target)){var u=y8(h9(h.target)),d=u.prefix,z=u.iconName;h.target.setAttribute(o9,d||f),z&&h.target.setAttribute(l9,z)}else Ry(h.target)&&t(h.target)})}}),q2&&G0.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Uy(){G0&&G0.disconnect()}function qy(e){var c=e.getAttribute("style"),a=[];return c&&(a=c.split(";").reduce(function(r,t){var n=t.split(":"),i=n[0],s=n.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),a}function $y(e){var c=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",t=y8(h9(e));return t.prefix||(t.prefix=v3()),c&&a&&(t.prefix=c,t.iconName=a),t.iconName&&t.prefix||(t.prefix&&r.length>0&&(t.iconName=Cy(t.prefix,e.innerText)||v9(t.prefix,Q5(e.innerText))),!t.iconName&&E.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(t.iconName=e.firstChild.data)),t}function Wy(e){var c=_4(e.attributes).reduce(function(t,n){return t.name!=="class"&&t.name!=="style"&&(t[n.name]=n.value),t},{}),a=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return E.autoA11y&&(a?c["aria-labelledby"]="".concat(E.replacementClass,"-title-").concat(r||C6()):(c["aria-hidden"]="true",c.focusable="false")),c}function Gy(){return{iconName:null,title:null,titleId:null,prefix:null,transform:V2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ta(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=$y(e),r=a.iconName,t=a.prefix,n=a.rest,i=Wy(e),s=e7("parseNodeAttributes",{},e),o=c.styleParser?qy(e):[];return k({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:t,transform:V2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:i}},s)}var jy=l2.styles;function oi(e){var c=E.autoReplaceSvg==="nest"?Ta(e,{styleParser:!1}):Ta(e);return~c.extra.classes.indexOf($n)?O2("generateLayersText",e,c):O2("generateSvgReplacementMutation",e,c)}var d3=new Set;f9.map(function(e){d3.add("fa-".concat(e))});Object.keys(z6[m1]).map(d3.add.bind(d3));Object.keys(z6[H1]).map(d3.add.bind(d3));d3=R6(d3);function Pa(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q2)return Promise.resolve();var a=v1.documentElement.classList,r=function(h){return a.add("".concat(ga,"-").concat(h))},t=function(h){return a.remove("".concat(ga,"-").concat(h))},n=E.autoFetchSvg?d3:f9.map(function(f){return"fa-".concat(f)}).concat(Object.keys(jy));n.includes("fa")||n.push("fa");var i=[".".concat($n,":not([").concat(O3,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat(O3,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=_4(e.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),t("complete");else return Promise.resolve();var o=z9.begin("onTree"),l=s.reduce(function(f,h){try{var u=oi(h);u&&f.push(u)}catch(d){qn||d.name==="MissingIcon"&&console.error(d)}return f},[]);return new Promise(function(f,h){Promise.all(l).then(function(u){ii(u,function(){r("active"),r("complete"),t("pending"),typeof c=="function"&&c(),o(),f()})}).catch(function(u){o(),h(u)})})}function Ky(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;oi(e).then(function(a){a&&ii([a],c)})}function Zy(e){return function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(c||{}).icon?c:a7(c||{}),t=a.mask;return t&&(t=(t||{}).icon?t:a7(t||{})),e(r,k(k({},a),{},{mask:t}))}}var Yy=function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,t=r===void 0?V2:r,n=a.symbol,i=n===void 0?!1:n,s=a.mask,o=s===void 0?null:s,l=a.maskId,f=l===void 0?null:l,h=a.title,u=h===void 0?null:h,d=a.titleId,z=d===void 0?null:d,y=a.classes,w=y===void 0?[]:y,V=a.attributes,g=V===void 0?{}:V,S=a.styles,F=S===void 0?{}:S;if(c){var D=c.prefix,R=c.iconName,Y=c.icon;return N8(k({type:"icon"},c),function(){return B3("beforeDOMElementCreation",{iconDefinition:c,params:a}),E.autoA11y&&(u?g["aria-labelledby"]="".concat(E.replacementClass,"-title-").concat(z||C6()):(g["aria-hidden"]="true",g.focusable="false")),p9({icons:{main:r7(Y),mask:o?r7(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:R,transform:k(k({},V2),t),symbol:i,title:u,maskId:f,titleId:z,extra:{attributes:g,styles:F,classes:w}})})}},Xy={mixout:function(){return{icon:Zy(Yy)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Pa,a.nodeCallback=Ky,a}}},provides:function(c){c.i2svg=function(a){var r=a.node,t=r===void 0?v1:r,n=a.callback,i=n===void 0?function(){}:n;return Pa(t,i)},c.generateSvgReplacementMutation=function(a,r){var t=r.iconName,n=r.title,i=r.titleId,s=r.prefix,o=r.transform,l=r.symbol,f=r.mask,h=r.maskId,u=r.extra;return new Promise(function(d,z){Promise.all([t7(t,s),f.iconName?t7(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var w=i9(y,2),V=w[0],g=w[1];d([a,p9({icons:{main:V,mask:g},prefix:s,iconName:t,transform:o,symbol:l,maskId:h,title:n,titleId:i,extra:u,watchable:!0})])}).catch(z)})},c.generateAbstractIcon=function(a){var r=a.children,t=a.attributes,n=a.main,i=a.transform,s=a.styles,o=b8(s);o.length>0&&(t.style=o);var l;return u9(i)&&(l=O2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(l||n.icon),{children:r,attributes:t}}}},Jy={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.classes,n=t===void 0?[]:t;return N8({type:"layer"},function(){B3("beforeDOMElementCreation",{assembler:a,params:r});var i=[];return a(function(s){Array.isArray(s)?s.map(function(o){i=i.concat(o.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(E.cssPrefix,"-layers")].concat(R6(n)).join(" ")},children:i}]})}}}},Qy={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.title,n=t===void 0?null:t,i=r.classes,s=i===void 0?[]:i,o=r.attributes,l=o===void 0?{}:o,f=r.styles,h=f===void 0?{}:f;return N8({type:"counter",content:a},function(){return B3("beforeDOMElementCreation",{content:a,params:r}),ky({content:a.toString(),title:n,extra:{attributes:l,styles:h,classes:["".concat(E.cssPrefix,"-layers-counter")].concat(R6(s))}})})}}}},cN={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.transform,n=t===void 0?V2:t,i=r.title,s=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,f=r.attributes,h=f===void 0?{}:f,u=r.styles,d=u===void 0?{}:u;return N8({type:"text",content:a},function(){return B3("beforeDOMElementCreation",{content:a,params:r}),Sa({content:a,transform:k(k({},V2),n),title:s,extra:{attributes:h,styles:d,classes:["".concat(E.cssPrefix,"-layers-text")].concat(R6(l))}})})}}},provides:function(c){c.generateLayersText=function(a,r){var t=r.title,n=r.transform,i=r.extra,s=null,o=null;if(On){var l=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();s=f.width/l,o=f.height/l}return E.autoA11y&&!t&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,Sa({content:a.innerHTML,width:s,height:o,transform:n,title:t,extra:i,watchable:!0})])}}},eN=new RegExp('"',"ug"),Ea=[1105920,1112319];function aN(e){var c=e.replace(eN,""),a=dy(c,0),r=a>=Ea[0]&&a<=Ea[1],t=c.length===2?c[0]===c[1]:!1;return{value:Q5(t?c[0]:c),isSecondary:r||t}}function Ia(e,c){var a="".concat($x).concat(c.replace(":","-"));return new Promise(function(r,t){if(e.getAttribute(a)!==null)return r();var n=_4(e.children),i=n.filter(function(Y){return Y.getAttribute(J5)===c})[0],s=m3.getComputedStyle(e,c),o=s.getPropertyValue("font-family").match(Zx),l=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(i&&!o)return e.removeChild(i),r();if(o&&f!=="none"&&f!==""){var h=s.getPropertyValue("content"),u=~["Sharp"].indexOf(o[2])?H1:m1,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?H6[u][o[2].toLowerCase()]:Yx[u][l],z=aN(h),y=z.value,w=z.isSecondary,V=o[0].startsWith("FontAwesome"),g=v9(d,y),S=g;if(V){var F=gy(y);F.iconName&&F.prefix&&(g=F.iconName,d=F.prefix)}if(g&&!w&&(!i||i.getAttribute(o9)!==d||i.getAttribute(l9)!==S)){e.setAttribute(a,S),i&&e.removeChild(i);var D=Gy(),R=D.extra;R.attributes[J5]=c,t7(g,d).then(function(Y){var Z=p9(k(k({},D),{},{icons:{main:Y,mask:d9()},prefix:d,iconName:S,extra:R,watchable:!0})),$=v1.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?e.insertBefore($,e.firstChild):e.appendChild($),$.outerHTML=Z.map(function(h1){return D6(h1)}).join(`
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/FriendsView-0A-qklCB.js","assets/friends-CDlrWaCK.js","assets/storeTemplate-CccY9kVQ.js","assets/FriendsView-oVvaLt9h.css","assets/AssignmentsView-PphQWMQS.js","assets/presents-BwJNw3b0.js","assets/AssignmentsView-DurZRv0u.css","assets/PresentsView-D_N2c6z9.js","assets/PresentsView-DOWKSso9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}