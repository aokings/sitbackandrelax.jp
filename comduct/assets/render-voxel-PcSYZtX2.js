var Kp=Object.defineProperty;var Jp=(i,t,e)=>t in i?Kp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ht=(i,t,e)=>Jp(i,typeof t!="symbol"?t+"":t,e);import{w as Zi,a as Ki,d as Pc,b as So}from"./dungeon-types-JT-53Zyi.js";import{V as jp,b as Qp,v as tm,c as em,p as nm,f as im,g as sm,a as rm}from"./voxmodel-BixVuI7N.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="185",am=0,fl=1,om=2,nr=1,lm=2,fs=3,qn=0,ke=1,An=2,Rn=0,Gi=1,ps=2,ul=3,pl=4,cm=5,si=100,hm=101,dm=102,fm=103,um=104,pm=200,mm=201,gm=202,_m=203,ba=204,Sa=205,xm=206,vm=207,Mm=208,bm=209,Sm=210,ym=211,Em=212,wm=213,Am=214,ya=0,Ea=1,wa=2,Xi=3,Aa=4,Ta=5,Ra=6,Ca=7,Eo=0,Tm=1,Rm=2,gn=0,Ic=1,Lc=2,Dc=3,wo=4,Uc=5,Nc=6,Fc=7,Oc=300,fi=301,$i=302,Or=303,Br=304,Er=306,Pa=1e3,Tn=1001,Ia=1002,Re=1003,Cm=1004,Rs=1005,De=1006,zr=1007,ai=1008,$e=1009,Bc=1010,zc=1011,ms=1012,Ao=1013,xn=1014,sn=1015,Pn=1016,To=1017,Ro=1018,gs=1020,kc=35902,Gc=35899,Hc=1021,Vc=1022,rn=1023,In=1026,oi=1027,Co=1028,Po=1029,ui=1030,Io=1031,Lo=1033,ir=33776,sr=33777,rr=33778,ar=33779,La=35840,Da=35841,Ua=35842,Na=35843,Fa=36196,Oa=37492,Ba=37496,za=37488,ka=37489,cr=37490,Ga=37491,Ha=37808,Va=37809,Wa=37810,Xa=37811,$a=37812,qa=37813,Ya=37814,Za=37815,Ka=37816,Ja=37817,ja=37818,Qa=37819,to=37820,eo=37821,no=36492,io=36494,so=36495,ro=36283,ao=36284,hr=36285,oo=36286,Pm=3200,lo=0,Im=1,Vn="",We="srgb",dr="srgb-linear",fr="linear",ee="srgb",Mi=7680,ml=519,Lm=512,Dm=513,Um=514,Do=515,Nm=516,Fm=517,Uo=518,Om=519,co=35044,gl="300 es",mn=2e3,_s=2001;function Bm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zm(){const i=ur("canvas");return i.style.display="block",i}const _l={};function pr(...i){const t="THREE."+i.shift();console.log(t,...i)}function Wc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ft(...i){i=Wc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Yt(...i){i=Wc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Hi(...i){const t=i.join(" ");t in _l||(_l[t]=!0,Ft(...i))}function km(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Gm={[ya]:Ea,[wa]:Ra,[Aa]:Ca,[Xi]:Ta,[Ea]:ya,[Ra]:wa,[Ca]:Aa,[Ta]:Xi};class mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kr=Math.PI/180,ho=180/Math.PI;function $n(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Hm(i,t){return(i%t+t)%t}function Gr(i,t,e){return(1-e)*i+e*t}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const jo=class jo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jo.prototype.isVector2=!0;let Bt=jo;class Yn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],f=n[s+2],d=n[s+3],h=r[a+0],u=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||l!==h||c!==u||f!==g){let m=l*h+c*u+f*g+d*_;m<0&&(h=-h,u=-u,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const b=Math.acos(m),w=Math.sin(b);p=Math.sin(p*b)/w,o=Math.sin(o*b)/w,l=l*p+h*o,c=c*p+u*o,f=f*p+g*o,d=d*p+_*o}else{l=l*p+h*o,c=c*p+u*o,f=f*p+g*o,d=d*p+_*o;const b=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=b,c*=b,f*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],f=n[s+3],d=r[a],h=r[a+1],u=r[a+2],g=r[a+3];return t[e]=o*g+f*d+l*u-c*h,t[e+1]=l*g+f*h+c*d-o*u,t[e+2]=c*g+f*u+o*h-l*d,t[e+3]=f*g-o*d-l*h-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(s/2),d=o(r/2),h=l(n/2),u=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*f*d+c*u*g,this._y=c*u*d-h*f*g,this._z=c*f*g+h*u*d,this._w=c*f*d-h*u*g;break;case"YXZ":this._x=h*f*d+c*u*g,this._y=c*u*d-h*f*g,this._z=c*f*g-h*u*d,this._w=c*f*d+h*u*g;break;case"ZXY":this._x=h*f*d-c*u*g,this._y=c*u*d+h*f*g,this._z=c*f*g+h*u*d,this._w=c*f*d-h*u*g;break;case"ZYX":this._x=h*f*d-c*u*g,this._y=c*u*d+h*f*g,this._z=c*f*g-h*u*d,this._w=c*f*d+h*u*g;break;case"YZX":this._x=h*f*d+c*u*g,this._y=c*u*d+h*f*g,this._z=c*f*g-h*u*d,this._w=c*f*d-h*u*g;break;case"XZY":this._x=h*f*d-c*u*g,this._y=c*u*d-h*f*g,this._z=c*f*g+h*u*d,this._w=c*f*d+h*u*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],f=e[6],d=e[10],h=n+o+d;if(h>0){const u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(f-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(f-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+f)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-n*c,this._z=r*f+a*c+n*l-s*o,this._w=a*f-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Qo=class Qo{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),f=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*f,this.y=n+l*f+o*c-r*d,this.z=s+l*d+r*f-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hr.copy(this).projectOnVector(t),this.sub(Hr)}reflect(t){return this.sub(Hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qo.prototype.isVector3=!0;let B=Qo;const Hr=new B,xl=new Yn,tl=class tl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],d=n[7],h=n[2],u=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],w=s[4],M=s[7],T=s[2],y=s[5],C=s[8];return r[0]=a*_+o*b+l*T,r[3]=a*m+o*w+l*y,r[6]=a*p+o*M+l*C,r[1]=c*_+f*b+d*T,r[4]=c*m+f*w+d*y,r[7]=c*p+f*M+d*C,r[2]=h*_+u*b+g*T,r[5]=h*m+u*w+g*y,r[8]=h*p+u*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return e*a*f-e*o*c-n*r*f+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=f*a-o*c,h=o*l-f*r,u=c*r-a*l,g=e*d+n*h+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-f*n)*_,t[2]=(o*n-s*a)*_,t[3]=h*_,t[4]=(f*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vr.makeScale(t,e)),this}rotate(t){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vr.makeRotation(-t)),this}translate(t,e){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};tl.prototype.isMatrix3=!0;let kt=tl;const Vr=new kt,vl=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ml=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vm(){const i={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ee&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dr]:{primaries:t,whitePoint:n,transfer:fr,toXYZ:vl,fromXYZ:Ml,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:vl,fromXYZ:Ml,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),i}const Zt=Vm();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bi;class Wm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{bi===void 0&&(bi=ur("canvas")),bi.width=t.width,bi.height=t.height;const s=bi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xm=0;class No{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=$n(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wr(s[a].image)):r.push(Wr(s[a]))}else r=Wr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let $m=0;const Xr=new B;class Ue extends mi{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=Tn,s=Tn,r=De,a=ai,o=rn,l=$e,c=Ue.DEFAULT_ANISOTROPY,f=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=$n(),this.name="",this.source=new No(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xr).x}get height(){return this.source.getSize(Xr).y}get depth(){return this.source.getSize(Xr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pa:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case Ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pa:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case Ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Oc;Ue.DEFAULT_ANISOTROPY=1;const el=class el{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],f=l[4],d=l[8],h=l[1],u=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,M=(u+1)/2,T=(p+1)/2,y=(f+h)/4,C=(d+_)/4,x=(g+m)/4;return w>M&&w>T?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=y/n,r=C/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=y/s,r=x/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=x/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-f)*(h-f));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-_)/b,this.z=(h-f)/b,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};el.prototype.isVector4=!0;let ue=el;class qm extends mi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Ue(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:De,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new No(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends qm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xc extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ym extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yr=class yr{constructor(t,e,n,s,r,a,o,l,c,f,d,h,u,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,f,d,h,u,g,_,m)}set(t,e,n,s,r,a,o,l,c,f,d,h,u,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=d,p[14]=h,p[3]=u,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Si.setFromMatrixColumn(t,0).length(),r=1/Si.setFromMatrixColumn(t,1).length(),a=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*f,u=a*d,g=o*f,_=o*d;e[0]=l*f,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=g+u*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*f,u=l*d,g=c*f,_=c*d;e[0]=h+_*o,e[4]=g*o-u,e[8]=a*c,e[1]=a*d,e[5]=a*f,e[9]=-o,e[2]=u*o-g,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*f,u=l*d,g=c*f,_=c*d;e[0]=h-_*o,e[4]=-a*d,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*f,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*f,u=a*d,g=o*f,_=o*d;e[0]=l*f,e[4]=g*c-u,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=u*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,u=a*c,g=o*l,_=o*c;e[0]=l*f,e[4]=_-h*d,e[8]=g*d+u,e[1]=d,e[5]=a*f,e[9]=-o*f,e[2]=-c*f,e[6]=u*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=a*l,u=a*c,g=o*l,_=o*c;e[0]=l*f,e[4]=-d,e[8]=c*f,e[1]=h*d+_,e[5]=a*f,e[9]=u*d-g,e[2]=g*d-u,e[6]=o*f,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zm,t,Km)}lookAt(t,e,n){const s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Nn.crossVectors(n,He),Nn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Nn.crossVectors(n,He)),Nn.normalize(),Cs.crossVectors(He,Nn),s[0]=Nn.x,s[4]=Cs.x,s[8]=He.x,s[1]=Nn.y,s[5]=Cs.y,s[9]=He.y,s[2]=Nn.z,s[6]=Cs.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],d=n[5],h=n[9],u=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],w=n[7],M=n[11],T=n[15],y=s[0],C=s[4],x=s[8],E=s[12],P=s[1],I=s[5],N=s[9],$=s[13],Z=s[2],k=s[6],q=s[10],H=s[14],A=s[3],L=s[7],U=s[11],O=s[15];return r[0]=a*y+o*P+l*Z+c*A,r[4]=a*C+o*I+l*k+c*L,r[8]=a*x+o*N+l*q+c*U,r[12]=a*E+o*$+l*H+c*O,r[1]=f*y+d*P+h*Z+u*A,r[5]=f*C+d*I+h*k+u*L,r[9]=f*x+d*N+h*q+u*U,r[13]=f*E+d*$+h*H+u*O,r[2]=g*y+_*P+m*Z+p*A,r[6]=g*C+_*I+m*k+p*L,r[10]=g*x+_*N+m*q+p*U,r[14]=g*E+_*$+m*H+p*O,r[3]=b*y+w*P+M*Z+T*A,r[7]=b*C+w*I+M*k+T*L,r[11]=b*x+w*N+M*q+T*U,r[15]=b*E+w*$+M*H+T*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],f=t[2],d=t[6],h=t[10],u=t[14],g=t[3],_=t[7],m=t[11],p=t[15],b=l*u-c*h,w=o*u-c*d,M=o*h-l*d,T=a*u-c*f,y=a*h-l*f,C=a*d-o*f;return e*(_*b-m*w+p*M)-n*(g*b-m*T+p*y)+s*(g*w-_*T+p*C)-r*(g*M-_*y+m*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return e*(a*f-o*c)-n*(r*f-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=t[9],h=t[10],u=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=e*o-n*a,w=e*l-s*a,M=e*c-r*a,T=n*l-s*o,y=n*c-r*o,C=s*c-r*l,x=f*_-d*g,E=f*m-h*g,P=f*p-u*g,I=d*m-h*_,N=d*p-u*_,$=h*p-u*m,Z=b*$-w*N+M*I+T*P-y*E+C*x;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/Z;return t[0]=(o*$-l*N+c*I)*k,t[1]=(s*N-n*$-r*I)*k,t[2]=(_*C-m*y+p*T)*k,t[3]=(h*y-d*C-u*T)*k,t[4]=(l*P-a*$-c*E)*k,t[5]=(e*$-s*P+r*E)*k,t[6]=(m*M-g*C-p*w)*k,t[7]=(f*C-h*M+u*w)*k,t[8]=(a*N-o*P+c*x)*k,t[9]=(n*P-e*N-r*x)*k,t[10]=(g*y-_*M+p*b)*k,t[11]=(d*M-f*y-u*b)*k,t[12]=(o*E-a*I-l*x)*k,t[13]=(e*I-n*E+s*x)*k,t[14]=(_*w-g*T-m*b)*k,t[15]=(f*T-d*w+h*b)*k,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,f=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+n,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,f=a+a,d=o+o,h=r*c,u=r*f,g=r*d,_=a*f,m=a*d,p=o*d,b=l*c,w=l*f,M=l*d,T=n.x,y=n.y,C=n.z;return s[0]=(1-(_+p))*T,s[1]=(u+M)*T,s[2]=(g-w)*T,s[3]=0,s[4]=(u-M)*y,s[5]=(1-(h+p))*y,s[6]=(m+b)*y,s[7]=0,s[8]=(g+w)*C,s[9]=(m-b)*C,s[10]=(1-(h+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Si.set(s[0],s[1],s[2]).length();const o=Si.set(s[4],s[5],s[6]).length(),l=Si.set(s[8],s[9],s[10]).length();r<0&&(a=-a),tn.copy(this);const c=1/a,f=1/o,d=1/l;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=f,tn.elements[5]*=f,tn.elements[6]*=f,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,e.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=mn,l=!1){const c=this.elements,f=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),u=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===mn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===_s)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=mn,l=!1){const c=this.elements,f=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),u=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===mn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===_s)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};yr.prototype.isMatrix4=!0;let ie=yr;const Si=new B,tn=new ie,Zm=new B(0,0,0),Km=new B(1,1,1),Nn=new B,Cs=new B,He=new B,bl=new ie,Sl=new Yn;class Zn{constructor(t=0,e=0,n=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],d=s[2],h=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,u),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sl.setFromEuler(this),this.setFromQuaternion(Sl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Fo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jm=0;const yl=new B,yi=new Yn,Mn=new ie,Ps=new B,ts=new B,jm=new B,Qm=new Yn,El=new B(1,0,0),wl=new B(0,1,0),Al=new B(0,0,1),Tl={type:"added"},tg={type:"removed"},Ei={type:"childadded",child:null},$r={type:"childremoved",child:null};class be extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new B,e=new Zn,n=new Yn,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new kt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(El,t)}rotateY(t){return this.rotateOnAxis(wl,t)}rotateZ(t){return this.rotateOnAxis(Al,t)}translateOnAxis(t,e){return yl.copy(t).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(El,t)}translateY(t){return this.translateOnAxis(wl,t)}translateZ(t){return this.translateOnAxis(Al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ps.copy(t):Ps.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ts,Ps,this.up):Mn.lookAt(Ps,ts,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(Mn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tg),$r.child=t,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,jm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Qm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),f=a(t.images),d=a(t.shapes),h=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new B(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Je extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eg={type:"move"};class qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&h>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function Yr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=Hm(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Yr(a,r,t+1/3),this.g=Yr(a,r,t),this.b=Yr(a,r,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=$c[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return Zt.workingToColorSpace(Ie.copy(this),t),Math.round(Kt(Ie.r*255,0,255))*65536+Math.round(Kt(Ie.g*255,0,255))*256+Math.round(Kt(Ie.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Ie.copy(this),e);const n=Ie.r,s=Ie.g,r=Ie.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=f<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=We){Zt.workingToColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,s=Ie.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(Is);const n=Gr(Fn.h,Is.h,e),s=Gr(Fn.s,Is.s,e),r=Gr(Fn.l,Is.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Gt;Gt.NAMES=$c;class Oo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new Oo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ng extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const en=new B,bn=new B,Zr=new B,Sn=new B,wi=new B,Ai=new B,Rl=new B,Kr=new B,Jr=new B,jr=new B,Qr=new ue,ta=new ue,ea=new ue;class je{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),bn.subVectors(n,e),Zr.subVectors(t,e);const a=en.dot(en),o=en.dot(bn),l=en.dot(Zr),c=bn.dot(bn),f=bn.dot(Zr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,u=(c*l-o*f)*h,g=(a*f-o*l)*h;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(o,Sn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Qr.setScalar(0),ta.setScalar(0),ea.setScalar(0),Qr.fromBufferAttribute(t,e),ta.fromBufferAttribute(t,n),ea.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Qr,r.x),a.addScaledVector(ta,r.y),a.addScaledVector(ea,r.z),a}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),bn.subVectors(t,e),en.cross(bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),en.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;wi.subVectors(s,n),Ai.subVectors(r,n),Kr.subVectors(t,n);const l=wi.dot(Kr),c=Ai.dot(Kr);if(l<=0&&c<=0)return e.copy(n);Jr.subVectors(t,s);const f=wi.dot(Jr),d=Ai.dot(Jr);if(f>=0&&d<=f)return e.copy(s);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(wi,a);jr.subVectors(t,r);const u=wi.dot(jr),g=Ai.dot(jr);if(g>=0&&u<=g)return e.copy(r);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ai,o);const m=f*g-u*d;if(m<=0&&d-f>=0&&u-g>=0)return Rl.subVectors(r,s),o=(d-f)/(d-f+(u-g)),e.copy(s).addScaledVector(Rl,o);const p=1/(m+_+h);return a=_*p,o=h*p,e.copy(n).addScaledVector(wi,a).addScaledVector(Ai,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class gi{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(t.matrixWorld),this.union(Ls)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),Ds.subVectors(this.max,es),Ti.subVectors(t.a,es),Ri.subVectors(t.b,es),Ci.subVectors(t.c,es),On.subVectors(Ri,Ti),Bn.subVectors(Ci,Ri),jn.subVectors(Ti,Ci);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-jn.z,jn.y,On.z,0,-On.x,Bn.z,0,-Bn.x,jn.z,0,-jn.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-jn.y,jn.x,0];return!na(e,Ti,Ri,Ci,Ds)||(e=[1,0,0,0,1,0,0,0,1],!na(e,Ti,Ri,Ci,Ds))?!1:(Us.crossVectors(On,Bn),e=[Us.x,Us.y,Us.z],na(e,Ti,Ri,Ci,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const yn=[new B,new B,new B,new B,new B,new B,new B,new B],nn=new B,Ls=new gi,Ti=new B,Ri=new B,Ci=new B,On=new B,Bn=new B,jn=new B,es=new B,Ds=new B,Us=new B,Qn=new B;function na(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qn.fromArray(i,r);const o=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),f=n.dot(Qn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const ve=new B,Ns=new Bt;let ig=0;class Qe extends mi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ig++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=co,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==co&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class qc extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yc extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const sg=new gi,ns=new B,ia=new B;class Ji{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):sg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);const e=ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(ia)),this.expandByPoint(ns.copy(t.center).sub(ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let rg=0;const Ye=new ie,sa=new be,Pi=new B,Ve=new gi,is=new gi,Ee=new B;class Be extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bm(t)?Yc:qc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return sa.lookAt(t),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];is.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(Ve.min,is.min),Ve.expandByPoint(Ee),Ee.addVectors(Ve.max,is.max),Ve.expandByPoint(Ee)):(Ve.expandByPoint(is.min),Ve.expandByPoint(is.max))}Ve.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Ee.fromBufferAttribute(o,c),l&&(Pi.fromBufferAttribute(t,c),Ee.add(Pi)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new B,l[x]=new B;const c=new B,f=new B,d=new B,h=new Bt,u=new Bt,g=new Bt,_=new B,m=new B;function p(x,E,P){c.fromBufferAttribute(n,x),f.fromBufferAttribute(n,E),d.fromBufferAttribute(n,P),h.fromBufferAttribute(r,x),u.fromBufferAttribute(r,E),g.fromBufferAttribute(r,P),f.sub(c),d.sub(c),u.sub(h),g.sub(h);const I=1/(u.x*g.y-g.x*u.y);isFinite(I)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(I),m.copy(d).multiplyScalar(u.x).addScaledVector(f,-g.x).multiplyScalar(I),o[x].add(_),o[E].add(_),o[P].add(_),l[x].add(m),l[E].add(m),l[P].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,E=b.length;x<E;++x){const P=b[x],I=P.start,N=P.count;for(let $=I,Z=I+N;$<Z;$+=3)p(t.getX($+0),t.getX($+1),t.getX($+2))}const w=new B,M=new B,T=new B,y=new B;function C(x){T.fromBufferAttribute(s,x),y.copy(T);const E=o[x];w.copy(E),w.sub(T.multiplyScalar(T.dot(E))).normalize(),M.crossVectors(y,E);const I=M.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,I)}for(let x=0,E=b.length;x<E;++x){const P=b[x],I=P.start,N=P.count;for(let $=I,Z=I+N;$<Z;$+=3)C(t.getX($+0)),C(t.getX($+1)),C(t.getX($+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,f=new B,d=new B;if(t)for(let h=0,u=t.count;h<u;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),f.subVectors(a,r),d.subVectors(s,r),f.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(f),l.add(f),c.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,u=e.count;h<u;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),f.subVectors(a,r),d.subVectors(s,r),f.cross(d),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f);let u=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?u=l[_]*o.data.stride+o.offset:u=l[_]*f;for(let p=0;p<f;p++)h[g++]=c[u++]}return new Qe(h,f,d)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let f=0,d=c.length;f<d;f++){const h=c[f],u=t(h,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const u=c[d];f.push(u.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(e))}const r=t.morphAttributes;for(const c in r){const f=[],d=r[c];for(let h=0,u=d.length;h<u;h++)f.push(d[h].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,f=a.length;c<f;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ag{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=co,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new B;class mr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new mr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let og=0;class _i extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Gi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=Sa,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ba&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ml&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Zc extends _i{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ii;const ss=new B,Li=new B,Di=new B,Ui=new Bt,rs=new Bt,Kc=new ie,Fs=new B,as=new B,Os=new B,Cl=new Bt,ra=new Bt,Pl=new Bt;class lg extends be{constructor(t=new Zc){if(super(),this.isSprite=!0,this.type="Sprite",Ii===void 0){Ii=new Be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ag(e,5);Ii.setIndex([0,1,2,0,2,3]),Ii.setAttribute("position",new mr(n,3,0,!1)),Ii.setAttribute("uv",new mr(n,2,3,!1))}this.geometry=Ii,this.material=t,this.center=new Bt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),Kc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Di.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Bs(Fs.set(-.5,-.5,0),Di,a,Li,s,r),Bs(as.set(.5,-.5,0),Di,a,Li,s,r),Bs(Os.set(.5,.5,0),Di,a,Li,s,r),Cl.set(0,0),ra.set(1,0),Pl.set(1,1);let o=t.ray.intersectTriangle(Fs,as,Os,!1,ss);if(o===null&&(Bs(as.set(-.5,.5,0),Di,a,Li,s,r),ra.set(0,1),o=t.ray.intersectTriangle(Fs,Os,as,!1,ss),o===null))return;const l=t.ray.origin.distanceTo(ss);l<t.near||l>t.far||e.push({distance:l,point:ss.clone(),uv:je.getInterpolation(ss,Fs,as,Os,Cl,ra,Pl,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bs(i,t,e,n,s,r){Ui.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(rs.x=r*Ui.x-s*Ui.y,rs.y=s*Ui.x+r*Ui.y):rs.copy(Ui),i.copy(t),i.x+=rs.x,i.y+=rs.y,i.applyMatrix4(Kc)}const En=new B,aa=new B,zs=new B,zn=new B,oa=new B,ks=new B,la=new B;class Bo{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){aa.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(aa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(zs),o=zn.dot(this.direction),l=-zn.dot(zs),c=zn.lengthSq(),f=Math.abs(1-a*a);let d,h,u,g;if(f>0)if(d=a*l-o,h=a*o-l,g=r*f,d>=0)if(h>=-g)if(h<=g){const _=1/f;d*=_,h*=_,u=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),u=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),u=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),u=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),u=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(aa).addScaledVector(zs,h),u}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),s=En.dot(En)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),f>=0?(r=(t.min.y-h.y)*f,a=(t.max.y-h.y)*f):(r=(t.max.y-h.y)*f,a=(t.min.y-h.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,r){oa.subVectors(e,t),ks.subVectors(n,t),la.crossVectors(oa,ks);let a=this.direction.dot(la),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,t);const l=o*this.direction.dot(ks.crossVectors(zn,ks));if(l<0)return null;const c=o*this.direction.dot(oa.cross(zn));if(c<0||l+c>a)return null;const f=-o*zn.dot(la);return f<0?null:this.at(f/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gn extends _i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Il=new ie,ti=new Bo,Gs=new Ji,Ll=new B,Hs=new B,Vs=new B,Ws=new B,ca=new B,Xs=new B,Dl=new B,$s=new B;class ne extends be{constructor(t=new Be,e=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=o[l],d=r[l];f!==0&&(ca.fromBufferAttribute(d,t),a?Xs.addScaledVector(ca,f):Xs.addScaledVector(ca.sub(e),f))}e.add(Xs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(Gs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Gs,Ll)===null||ti.origin.distanceToSquared(Ll)>(t.far-t.near)**2))&&(Il.copy(r).invert(),ti.copy(t.ray).applyMatrix4(Il),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,d=r.attributes.normal,h=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],b=Math.max(m.start,u.start),w=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let M=b,T=w;M<T;M+=3){const y=o.getX(M),C=o.getX(M+1),x=o.getX(M+2);s=qs(this,p,t,n,c,f,d,y,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const b=o.getX(m),w=o.getX(m+1),M=o.getX(m+2);s=qs(this,a,t,n,c,f,d,b,w,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],b=Math.max(m.start,u.start),w=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let M=b,T=w;M<T;M+=3){const y=M,C=M+1,x=M+2;s=qs(this,p,t,n,c,f,d,y,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const b=m,w=m+1,M=m+2;s=qs(this,a,t,n,c,f,d,b,w,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function cg(i,t,e,n,s,r,a,o){let l;if(t.side===ke?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===qn,o),l===null)return null;$s.copy(o),$s.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo($s);return c<e.near||c>e.far?null:{distance:c,point:$s.clone(),object:i}}function qs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Hs),i.getVertexPosition(l,Vs),i.getVertexPosition(c,Ws);const f=cg(i,t,e,n,Hs,Vs,Ws,Dl);if(f){const d=new B;je.getBarycoord(Dl,Hs,Vs,Ws,d),s&&(f.uv=je.getInterpolatedAttribute(s,o,l,c,d,new Bt)),r&&(f.uv1=je.getInterpolatedAttribute(r,o,l,c,d,new Bt)),a&&(f.normal=je.getInterpolatedAttribute(a,o,l,c,d,new B),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new B,materialIndex:0};je.getNormal(Hs,Vs,Ws,h.normal),f.face=h,f.barycoord=d}return f}class Jc extends Ue{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Re,f=Re,d,h){super(null,a,o,l,c,f,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ul extends Qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ni=new ie,Nl=new ie,Ys=[],Fl=new gi,hg=new ie,os=new ne,ls=new Ji;class Ol extends ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ul(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),Fl.copy(t.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Fl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),ls.copy(t.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(ls)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ls.copy(this.boundingSphere),ls.applyMatrix4(n),t.ray.intersectsSphere(ls)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ni),Nl.multiplyMatrices(n,Ni),os.matrixWorld=Nl,os.raycast(t,Ys);for(let a=0,o=Ys.length;a<o;a++){const l=Ys[a];l.instanceId=r,l.object=this,e.push(l)}Ys.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ul(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jc(new Float32Array(s*this.count),s,this.count,Co,sn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ha=new B,dg=new B,fg=new kt;class Hn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ha.subVectors(n,e).cross(dg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(ha),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fg.getNormalMatrix(t),s=this.coplanarPoint(ha).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new Ji,ug=new Bt(.5,.5),Zs=new B;class zo{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],d=r[5],h=r[6],u=r[7],g=r[8],_=r[9],m=r[10],p=r[11],b=r[12],w=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-a,u-f,p-g,T-b).normalize(),s[1].setComponents(c+a,u+f,p+g,T+b).normalize(),s[2].setComponents(c+o,u+d,p+_,T+w).normalize(),s[3].setComponents(c-o,u-d,p-_,T-w).normalize(),n)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,u-h,p-m,T-M).normalize();else if(s[4].setComponents(c-l,u-h,p-m,T-M).normalize(),e===mn)s[5].setComponents(c+l,u+h,p+m,T+M).normalize();else if(e===_s)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){ei.center.set(0,0,0);const e=ug.distanceTo(t.center);return ei.radius=.7071067811865476+e,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Zs.x=s.normal.x>0?t.max.x:t.min.x,Zs.y=s.normal.y>0?t.max.y:t.min.y,Zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jc extends _i{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const gr=new B,_r=new B,Bl=new ie,cs=new Bo,Ks=new Ji,da=new B,zl=new B;class pg extends be{constructor(t=new Be,e=new jc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)gr.fromBufferAttribute(e,s-1),_r.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=gr.distanceTo(_r);t.setAttribute("lineDistance",new fe(n,1))}else Ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,t.ray.intersectsSphere(Ks)===!1)return;Bl.copy(s).invert(),cs.copy(t.ray).applyMatrix4(Bl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){const u=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=u,m=g-1;_<m;_+=c){const p=f.getX(_),b=f.getX(_+1),w=Js(this,t,cs,l,p,b,_);w&&e.push(w)}if(this.isLineLoop){const _=f.getX(g-1),m=f.getX(u),p=Js(this,t,cs,l,_,m,g-1);p&&e.push(p)}}else{const u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=u,m=g-1;_<m;_+=c){const p=Js(this,t,cs,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Js(this,t,cs,l,g-1,u,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Js(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(gr.fromBufferAttribute(o,s),_r.fromBufferAttribute(o,r),e.distanceSqToSegment(gr,_r,da,zl)>n)return;da.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(da);if(!(c<t.near||c>t.far))return{distance:c,point:zl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const kl=new B,Gl=new B;class mg extends pg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)kl.fromBufferAttribute(e,s),Gl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+kl.distanceTo(Gl);t.setAttribute("lineDistance",new fe(n,1))}else Ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qc extends Ue{constructor(t=[],e=fi,n,s,r,a,o,l,c,f){super(t,e,n,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fa extends Ue{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qi extends Ue{constructor(t,e,n=xn,s,r,a,o=Re,l=Re,c,f=In,d=1){if(f!==In&&f!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new No(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class gg extends qi{constructor(t,e=xn,n=fi,s,r,a=Re,o=Re,l,c=In){const f={width:t,height:t,depth:1},d=[f,f,f,f,f,f];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class th extends Ue{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ji extends Be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],f=[],d=[];let h=0,u=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(d,2));function g(_,m,p,b,w,M,T,y,C,x,E){const P=M/C,I=T/x,N=M/2,$=T/2,Z=y/2,k=C+1,q=x+1;let H=0,A=0;const L=new B;for(let U=0;U<q;U++){const O=U*I-$;for(let st=0;st<k;st++){const ot=st*P-N;L[_]=ot*b,L[m]=O*w,L[p]=Z,c.push(L.x,L.y,L.z),L[_]=0,L[m]=0,L[p]=y>0?1:-1,f.push(L.x,L.y,L.z),d.push(st/C),d.push(1-U/x),H+=1}}for(let U=0;U<x;U++)for(let O=0;O<C;O++){const st=h+O+k*U,ot=h+O+k*(U+1),Lt=h+(O+1)+k*(U+1),Mt=h+(O+1)+k*U;l.push(st,ot,Mt),l.push(ot,Lt,Mt),A+=6}o.addGroup(u,A,E),u+=A,h+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class eh extends Be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const f=[],d=[],h=[],u=[];let g=0;const _=[],m=n/2;let p=0;b(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function b(){const M=new B,T=new B;let y=0;const C=(e-t)/n;for(let x=0;x<=r;x++){const E=[],P=x/r,I=P*(e-t)+t;for(let N=0;N<=s;N++){const $=N/s,Z=$*l+o,k=Math.sin(Z),q=Math.cos(Z);T.x=I*k,T.y=-P*n+m,T.z=I*q,d.push(T.x,T.y,T.z),M.set(k,C,q).normalize(),h.push(M.x,M.y,M.z),u.push($,1-P),E.push(g++)}_.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){const P=_[E][x],I=_[E+1][x],N=_[E+1][x+1],$=_[E][x+1];(t>0||E!==0)&&(f.push(P,I,$),y+=3),(e>0||E!==r-1)&&(f.push(I,N,$),y+=3)}c.addGroup(p,y,0),p+=y}function w(M){const T=g,y=new Bt,C=new B;let x=0;const E=M===!0?t:e,P=M===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*P,0),h.push(0,P,0),u.push(.5,.5),g++;const I=g;for(let N=0;N<=s;N++){const Z=N/s*l+o,k=Math.cos(Z),q=Math.sin(Z);C.x=E*q,C.y=m*P,C.z=E*k,d.push(C.x,C.y,C.z),h.push(0,P,0),y.x=k*.5+.5,y.y=q*.5*P+.5,u.push(y.x,y.y),g++}for(let N=0;N<s;N++){const $=T+N,Z=I+N;M===!0?f.push(Z,Z+1,$):f.push(Z+1,Z,$),x+=3}c.addGroup(p,x,M===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ko extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),f(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const w=new B,M=new B,T=new B;for(let y=0;y<e.length;y+=3)u(e[y+0],w),u(e[y+1],M),u(e[y+2],T),l(w,M,T,b)}function l(b,w,M,T){const y=T+1,C=[];for(let x=0;x<=y;x++){C[x]=[];const E=b.clone().lerp(M,x/y),P=w.clone().lerp(M,x/y),I=y-x;for(let N=0;N<=I;N++)N===0&&x===y?C[x][N]=E:C[x][N]=E.clone().lerp(P,N/I)}for(let x=0;x<y;x++)for(let E=0;E<2*(y-x)-1;E++){const P=Math.floor(E/2);E%2===0?(h(C[x][P+1]),h(C[x+1][P]),h(C[x][P])):(h(C[x][P+1]),h(C[x+1][P+1]),h(C[x+1][P]))}}function c(b){const w=new B;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(b),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function f(){const b=new B;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];const M=m(b)/2/Math.PI+.5,T=p(b)/Math.PI+.5;a.push(M,1-T)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){const w=a[b+0],M=a[b+2],T=a[b+4],y=Math.max(w,M,T),C=Math.min(w,M,T);y>.9&&C<.1&&(w<.2&&(a[b+0]+=1),M<.2&&(a[b+2]+=1),T<.2&&(a[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function u(b,w){const M=b*3;w.x=t[M+0],w.y=t[M+1],w.z=t[M+2]}function g(){const b=new B,w=new B,M=new B,T=new B,y=new Bt,C=new Bt,x=new Bt;for(let E=0,P=0;E<r.length;E+=9,P+=6){b.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),y.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),T.copy(b).add(w).add(M).divideScalar(3);const I=m(T);_(y,P+0,b,I),_(C,P+2,w,I),_(x,P+4,M,I)}}function _(b,w,M,T){T<0&&b.x===1&&(a[w]=b.x-1),M.x===0&&M.z===0&&(a[w]=T/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.vertices,t.indices,t.radius,t.detail)}}class Go extends ko{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Go(t.radius,t.detail)}}class li extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,f=l+1,d=t/o,h=e/l,u=[],g=[],_=[],m=[];for(let p=0;p<f;p++){const b=p*h-a;for(let w=0;w<c;w++){const M=w*d-r;g.push(M,-b,0),_.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const w=b+c*p,M=b+c*(p+1),T=b+1+c*(p+1),y=b+1+c*p;u.push(w,M,y),u.push(M,T,y)}this.setIndex(u),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.width,t.height,t.widthSegments,t.heightSegments)}}function Yi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Hl(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Hl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=Yi(i[e]);for(const s in n)t[s]=n[s]}return t}function Hl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _g(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const xg={clone:Yi,merge:Oe};var vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends _i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vg,this.fragmentShader=Mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=_g(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class bg extends vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class or extends _i{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Eo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sg extends _i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yg extends _i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class wr extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Eg extends wr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ua=new ie,Vl=new B,Wl=new B;class ih{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=$e,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zo,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vl),Wl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wl),e.updateMatrixWorld(),ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===_s||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const js=new B,Qs=new Yn,cn=new B;class sh extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(js,Qs,cn),cn.x===1&&cn.y===1&&cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(js,Qs,cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(js,Qs,cn),cn.x===1&&cn.y===1&&cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(js,Qs,cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const kn=new B,Xl=new Bt,$l=new Bt;class Xe extends sh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,Xl,$l),e.subVectors($l,Xl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(kr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class wg extends ih{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0}}class Ag extends wr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new wg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ho extends sh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Tg extends ih{constructor(){super(new Ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ql extends wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Tg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Zb extends wr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Fi=-90,Oi=1;class Rg extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xe(Fi,Oi,t,e);s.layers=this.layers,this.add(s);const r=new Xe(Fi,Oi,t,e);r.layers=this.layers,this.add(r);const a=new Xe(Fi,Oi,t,e);a.layers=this.layers,this.add(a);const o=new Xe(Fi,Oi,t,e);o.layers=this.layers,this.add(o);const l=new Xe(Fi,Oi,t,e);l.layers=this.layers,this.add(l);const c=new Xe(Fi,Oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,f]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(d,h,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cg extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Yl=new ie;class Pg{constructor(t,e,n=0,s=1/0){this.ray=new Bo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Yt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yl),this}intersectObject(t,e=!0,n=[]){return fo(t,this,n,e),n.sort(Zl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)fo(t[s],this,n,e);return n.sort(Zl),n}}function Zl(i,t){return i.distance-t.distance}function fo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)fo(r[a],t,e,!0)}}const nl=class nl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};nl.prototype.isMatrix2=!0;let Kl=nl;class Kb extends mg{constructor(t=10,e=10,n=4473924,s=8947848){n=new Gt(n),s=new Gt(s);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let h=0,u=0,g=-o;h<=e;h++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=h===r?n:s;_.toArray(c,u),u+=3,_.toArray(c,u),u+=3,_.toArray(c,u),u+=3,_.toArray(c,u),u+=3}const f=new Be;f.setAttribute("position",new fe(l,3)),f.setAttribute("color",new fe(c,3));const d=new jc({vertexColors:!0,toneMapped:!1});super(f,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Jl(i,t,e,n){const s=Ig(n);switch(e){case Hc:return i*t;case Co:return i*t/s.components*s.byteLength;case Po:return i*t/s.components*s.byteLength;case ui:return i*t*2/s.components*s.byteLength;case Io:return i*t*2/s.components*s.byteLength;case Vc:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case Lo:return i*t*4/s.components*s.byteLength;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:case Na:return Math.max(i,16)*Math.max(t,8)/4;case La:case Ua:return Math.max(i,8)*Math.max(t,8)/2;case Fa:case Oa:case za:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:case cr:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case to:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case eo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case no:case io:case so:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ro:case ao:return Math.ceil(i/4)*Math.ceil(t/4)*8;case hr:case oo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ig(i){switch(i){case $e:case Bc:return{byteLength:1,components:1};case ms:case zc:case Pn:return{byteLength:2,components:1};case To:case Ro:return{byteLength:2,components:4};case xn:case Ao:case sn:return{byteLength:4,components:1};case kc:case Gc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Lg(i){const t=new WeakMap;function e(o,l){const c=o.array,f=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,f),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const f=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,f);else{d.sort((u,g)=>u.start-g.start);let h=0;for(let u=1;u<d.length;u++){const g=d[h],_=d[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let u=0,g=d.length;u<g;u++){const _=d[u];i.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Dg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ug=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ng=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Og=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Hg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$g=`#ifdef USE_IRIDESCENCE
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
#endif`,qg=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,t_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,e_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,n_=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,i_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,s_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,r_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c_="gl_FragColor = linearToOutputTexel( gl_FragColor );",h_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u_=`#ifdef USE_ENVMAP
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
#endif`,p_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,g_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,__=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M_=`#ifdef USE_GRADIENTMAP
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
}`,b_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,w_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,A_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,I_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	vec3 f0 = material.specularColorBlended;
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,L_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,D_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,U_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,F_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V_=`#if defined( USE_POINTS_UV )
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
#endif`,W_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,K_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,j_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,xx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sx=`#ifdef USE_SKINNING
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
#endif`,yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ax=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tx=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rx=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,Lx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ux=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,kx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Hx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qx=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Yx=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Kx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,jx=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,t1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,n1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,s1=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,a1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,l1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,h1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:Dg,alphahash_pars_fragment:Ug,alphamap_fragment:Ng,alphamap_pars_fragment:Fg,alphatest_fragment:Og,alphatest_pars_fragment:Bg,aomap_fragment:zg,aomap_pars_fragment:kg,batching_pars_vertex:Gg,batching_vertex:Hg,begin_vertex:Vg,beginnormal_vertex:Wg,bsdfs:Xg,iridescence_fragment:$g,bumpmap_pars_fragment:qg,clipping_planes_fragment:Yg,clipping_planes_pars_fragment:Zg,clipping_planes_pars_vertex:Kg,clipping_planes_vertex:Jg,color_fragment:jg,color_pars_fragment:Qg,color_pars_vertex:t_,color_vertex:e_,common:n_,cube_uv_reflection_fragment:i_,defaultnormal_vertex:s_,displacementmap_pars_vertex:r_,displacementmap_vertex:a_,emissivemap_fragment:o_,emissivemap_pars_fragment:l_,colorspace_fragment:c_,colorspace_pars_fragment:h_,envmap_fragment:d_,envmap_common_pars_fragment:f_,envmap_pars_fragment:u_,envmap_pars_vertex:p_,envmap_physical_pars_fragment:w_,envmap_vertex:m_,fog_vertex:g_,fog_pars_vertex:__,fog_fragment:x_,fog_pars_fragment:v_,gradientmap_pars_fragment:M_,lightmap_pars_fragment:b_,lights_lambert_fragment:S_,lights_lambert_pars_fragment:y_,lights_pars_begin:E_,lights_toon_fragment:A_,lights_toon_pars_fragment:T_,lights_phong_fragment:R_,lights_phong_pars_fragment:C_,lights_physical_fragment:P_,lights_physical_pars_fragment:I_,lights_fragment_begin:L_,lights_fragment_maps:D_,lights_fragment_end:U_,lightprobes_pars_fragment:N_,logdepthbuf_fragment:F_,logdepthbuf_pars_fragment:O_,logdepthbuf_pars_vertex:B_,logdepthbuf_vertex:z_,map_fragment:k_,map_pars_fragment:G_,map_particle_fragment:H_,map_particle_pars_fragment:V_,metalnessmap_fragment:W_,metalnessmap_pars_fragment:X_,morphinstance_vertex:$_,morphcolor_vertex:q_,morphnormal_vertex:Y_,morphtarget_pars_vertex:Z_,morphtarget_vertex:K_,normal_fragment_begin:J_,normal_fragment_maps:j_,normal_pars_fragment:Q_,normal_pars_vertex:tx,normal_vertex:ex,normalmap_pars_fragment:nx,clearcoat_normal_fragment_begin:ix,clearcoat_normal_fragment_maps:sx,clearcoat_pars_fragment:rx,iridescence_pars_fragment:ax,opaque_fragment:ox,packing:lx,premultiplied_alpha_fragment:cx,project_vertex:hx,dithering_fragment:dx,dithering_pars_fragment:fx,roughnessmap_fragment:ux,roughnessmap_pars_fragment:px,shadowmap_pars_fragment:mx,shadowmap_pars_vertex:gx,shadowmap_vertex:_x,shadowmask_pars_fragment:xx,skinbase_vertex:vx,skinning_pars_vertex:Mx,skinning_vertex:bx,skinnormal_vertex:Sx,specularmap_fragment:yx,specularmap_pars_fragment:Ex,tonemapping_fragment:wx,tonemapping_pars_fragment:Ax,transmission_fragment:Tx,transmission_pars_fragment:Rx,uv_pars_fragment:Cx,uv_pars_vertex:Px,uv_vertex:Ix,worldpos_vertex:Lx,background_vert:Dx,background_frag:Ux,backgroundCube_vert:Nx,backgroundCube_frag:Fx,cube_vert:Ox,cube_frag:Bx,depth_vert:zx,depth_frag:kx,distance_vert:Gx,distance_frag:Hx,equirect_vert:Vx,equirect_frag:Wx,linedashed_vert:Xx,linedashed_frag:$x,meshbasic_vert:qx,meshbasic_frag:Yx,meshlambert_vert:Zx,meshlambert_frag:Kx,meshmatcap_vert:Jx,meshmatcap_frag:jx,meshnormal_vert:Qx,meshnormal_frag:t1,meshphong_vert:e1,meshphong_frag:n1,meshphysical_vert:i1,meshphysical_frag:s1,meshtoon_vert:r1,meshtoon_frag:a1,points_vert:o1,points_frag:l1,shadow_vert:c1,shadow_frag:h1,sprite_vert:d1,sprite_frag:f1},gt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},un={basic:{uniforms:Oe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Oe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Oe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Oe([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Oe([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Oe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Oe([gt.points,gt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Oe([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Oe([gt.common,gt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Oe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Oe([gt.sprite,gt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:Oe([gt.common,gt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:Oe([gt.lights,gt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};un.physical={uniforms:Oe([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const tr={r:0,b:0,g:0},u1=new ie,ah=new kt;ah.set(-1,0,0,0,1,0,0,0,1);function p1(i,t,e,n,s,r){const a=new Gt(0);let o=s===!0?0:1,l,c,f=null,d=0,h=null;function u(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){const M=b.backgroundBlurriness>0;w=t.get(w,M)}return w}function g(b){let w=!1;const M=u(b);M===null?m(a,o):M&&M.isColor&&(m(M,1),w=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,w){const M=u(w);M&&(M.isCubeTexture||M.mapping===Er)?(c===void 0&&(c=new ne(new ji(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Yi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,y,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(u1.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ah),c.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ee,(f!==M||d!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ne(new li(2,2),new vn({name:"BackgroundMaterial",uniforms:Yi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ee,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,d=M.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,w){b.getRGB(tr,nh(i)),e.buffers.color.setClear(tr.r,tr.g,tr.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:_,dispose:p}}function m1(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(I,N,$,Z,k){let q=!1;const H=d(I,Z,$,N);r!==H&&(r=H,c(r.object)),q=u(I,Z,$,k),q&&g(I,Z,$,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(I,N,$,Z),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function f(I){return i.deleteVertexArray(I)}function d(I,N,$,Z){const k=Z.wireframe===!0;let q=n[N.id];q===void 0&&(q={},n[N.id]=q);const H=I.isInstancedMesh===!0?I.id:0;let A=q[H];A===void 0&&(A={},q[H]=A);let L=A[$.id];L===void 0&&(L={},A[$.id]=L);let U=L[k];return U===void 0&&(U=h(l()),L[k]=U),U}function h(I){const N=[],$=[],Z=[];for(let k=0;k<e;k++)N[k]=0,$[k]=0,Z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:$,attributeDivisors:Z,object:I,attributes:{},index:null}}function u(I,N,$,Z){const k=r.attributes,q=N.attributes;let H=0;const A=$.getAttributes();for(const L in A)if(A[L].location>=0){const O=k[L];let st=q[L];if(st===void 0&&(L==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),L==="instanceColor"&&I.instanceColor&&(st=I.instanceColor)),O===void 0||O.attribute!==st||st&&O.data!==st.data)return!0;H++}return r.attributesNum!==H||r.index!==Z}function g(I,N,$,Z){const k={},q=N.attributes;let H=0;const A=$.getAttributes();for(const L in A)if(A[L].location>=0){let O=q[L];O===void 0&&(L==="instanceMatrix"&&I.instanceMatrix&&(O=I.instanceMatrix),L==="instanceColor"&&I.instanceColor&&(O=I.instanceColor));const st={};st.attribute=O,O&&O.data&&(st.data=O.data),k[L]=st,H++}r.attributes=k,r.attributesNum=H,r.index=Z}function _(){const I=r.newAttributes;for(let N=0,$=I.length;N<$;N++)I[N]=0}function m(I){p(I,0)}function p(I,N){const $=r.newAttributes,Z=r.enabledAttributes,k=r.attributeDivisors;$[I]=1,Z[I]===0&&(i.enableVertexAttribArray(I),Z[I]=1),k[I]!==N&&(i.vertexAttribDivisor(I,N),k[I]=N)}function b(){const I=r.newAttributes,N=r.enabledAttributes;for(let $=0,Z=N.length;$<Z;$++)N[$]!==I[$]&&(i.disableVertexAttribArray($),N[$]=0)}function w(I,N,$,Z,k,q,H){H===!0?i.vertexAttribIPointer(I,N,$,k,q):i.vertexAttribPointer(I,N,$,Z,k,q)}function M(I,N,$,Z){_();const k=Z.attributes,q=$.getAttributes(),H=N.defaultAttributeValues;for(const A in q){const L=q[A];if(L.location>=0){let U=k[A];if(U===void 0&&(A==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),A==="instanceColor"&&I.instanceColor&&(U=I.instanceColor)),U!==void 0){const O=U.normalized,st=U.itemSize,ot=t.get(U);if(ot===void 0)continue;const Lt=ot.buffer,Mt=ot.type,K=ot.bytesPerElement,rt=Mt===i.INT||Mt===i.UNSIGNED_INT||U.gpuType===Ao;if(U.isInterleavedBufferAttribute){const nt=U.data,dt=nt.stride,Et=U.offset;if(nt.isInstancedInterleavedBuffer){for(let bt=0;bt<L.locationSize;bt++)p(L.location+bt,nt.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let bt=0;bt<L.locationSize;bt++)m(L.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let bt=0;bt<L.locationSize;bt++)w(L.location+bt,st/L.locationSize,Mt,O,dt*K,(Et+st/L.locationSize*bt)*K,rt)}else{if(U.isInstancedBufferAttribute){for(let nt=0;nt<L.locationSize;nt++)p(L.location+nt,U.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let nt=0;nt<L.locationSize;nt++)m(L.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let nt=0;nt<L.locationSize;nt++)w(L.location+nt,st/L.locationSize,Mt,O,st*K,st/L.locationSize*nt*K,rt)}}else if(H!==void 0){const O=H[A];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(L.location,O);break;case 3:i.vertexAttrib3fv(L.location,O);break;case 4:i.vertexAttrib4fv(L.location,O);break;default:i.vertexAttrib1fv(L.location,O)}}}}b()}function T(){E();for(const I in n){const N=n[I];for(const $ in N){const Z=N[$];for(const k in Z){const q=Z[k];for(const H in q)f(q[H].object),delete q[H];delete Z[k]}}delete n[I]}}function y(I){if(n[I.id]===void 0)return;const N=n[I.id];for(const $ in N){const Z=N[$];for(const k in Z){const q=Z[k];for(const H in q)f(q[H].object),delete q[H];delete Z[k]}}delete n[I.id]}function C(I){for(const N in n){const $=n[N];for(const Z in $){const k=$[Z];if(k[I.id]===void 0)continue;const q=k[I.id];for(const H in q)f(q[H].object),delete q[H];delete k[I.id]}}}function x(I){for(const N in n){const $=n[N],Z=I.isInstancedMesh===!0?I.id:0,k=$[Z];if(k!==void 0){for(const q in k){const H=k[q];for(const A in H)f(H[A].object),delete H[A];delete k[q]}delete $[Z],Object.keys($).length===0&&delete n[N]}}}function E(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:y,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function g1(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),e.update(c,n,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let h=0;for(let u=0;u<f;u++)h+=c[u];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function _1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==rn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==$e&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==sn&&!x)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(Ft("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:M,maxSamples:T,samples:y}}function x1(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Hn,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const u=d.length!==0||h||n!==0||s;return s=h,n=d.length,u},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=f(d,h,0)},this.setState=function(d,h,u){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?f(null):c();else{const b=r?0:n,w=b*4;let M=p.clippingState||null;l.value=M,M=f(g,h,w,u);for(let T=0;T!==w;++T)M[T]=e[T];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(d,h,u,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=u+_*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,M=u;w!==_;++w,M+=4)a.copy(d[w]).applyMatrix4(b,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}const Xn=4,jl=[.125,.215,.35,.446,.526,.582],ri=20,v1=256,hs=new Ho,Ql=new Gt;let pa=null,ma=0,ga=0,_a=!1;const M1=new B;class tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=M1}=r;pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=_a,t.scissorTest=!1,Bi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fi||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:Pn,format:rn,colorSpace:dr,depthBuffer:!1},s=ec(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=b1(r)),this._blurMaterial=y1(r,t,e),this._ggxMaterial=S1(r,t,e)}return s}_compileMaterial(t){const e=new ne(new Be,t);this._renderer.compile(e,hs)}_sceneToCubeUV(t,e,n,s,r){const l=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Ql),d.toneMapping=gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ne(new ji,new Gn({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(Ql),p=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[w],r.y,r.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[w]));const T=this._cubeSize;Bi(s,M*T,w>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(_,l),d.render(t,l)}d.toneMapping=u,d.autoClear=h,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===fi||t.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Bi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,hs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),h=0+c*1.25,u=d*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Xn?n-g+Xn:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=g-e,Bi(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,hs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Bi(t,m,p,3*_,2*_),s.setRenderTarget(t),s.render(o,hs)}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Yt("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*ri-1),_=r/g,m=isFinite(r)?1+Math.floor(f*_):ri;m>ri&&Ft(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const p=[];let b=0;for(let C=0;C<ri;++C){const x=C/_,E=Math.exp(-x*x/2);p.push(E),C===0?b+=E:C<m&&(b+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-n;const M=this._sizeLods[s],T=3*M*(s>w-Xn?s-w+Xn:0),y=4*(this._cubeSize-M);Bi(e,T,y,3*M,2*M),l.setRenderTarget(e),l.render(d,hs)}}function b1(i){const t=[],e=[],n=[];let s=i;const r=i-Xn+1+jl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Xn?l=jl[a-i+Xn-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],u=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*u),w=new Float32Array(m*g*u),M=new Float32Array(p*g*u);for(let y=0;y<u;y++){const C=y%3*2/3-1,x=y>2?0:-1,E=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];b.set(E,_*g*y),w.set(h,m*g*y);const P=[y,y,y,y,y,y];M.set(P,p*g*y)}const T=new Be;T.setAttribute("position",new Qe(b,_)),T.setAttribute("uv",new Qe(w,m)),T.setAttribute("faceIndex",new Qe(M,p)),n.push(new ne(T,null)),s>Xn&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function ec(i,t,e){const n=new _n(i,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function S1(i,t,e){return new vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:v1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ar(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function y1(i,t,e){const n=new Float32Array(ri),s=new B(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ar(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function nc(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ar(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ic(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ar(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ar(){return`

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
	`}class oh extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ji(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Rn});r.uniforms.tEquirect.value=e;const a=new ne(s,r),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=De),new Rg(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function E1(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,u=!1){return h==null?null:u?a(h):r(h)}function r(h){if(h&&h.isTexture){const u=h.mapping;if(u===Or||u===Br)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new oh(g.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const u=h.mapping,g=u===Or||u===Br,_=u===fi||u===$i;if(g||_){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new tc(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const b=h.image;return g&&b&&b.height>0||_&&b&&l(b)?(n===null&&(n=new tc(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function o(h,u){return u===Or?h.mapping=fi:u===Br&&(h.mapping=$i),h}function l(h){let u=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&u++;return u===g}function c(h){const u=h.target;u.removeEventListener("dispose",c);const g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function f(h){const u=h.target;u.removeEventListener("dispose",f);const g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function w1(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Hi("WebGLRenderer: "+n+" extension not supported."),s}}}function A1(i,t,e,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const u=r.get(h);u&&(t.remove(u),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const u in h)t.update(h[u],i.ARRAY_BUFFER)}function c(d){const h=[],u=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(u!==null){const b=u.array;_=u.version;for(let w=0,M=b.length;w<M;w+=3){const T=b[w+0],y=b[w+1],C=b[w+2];h.push(T,y,y,C,C,T)}}else{const b=g.array;_=g.version;for(let w=0,M=b.length/3-1;w<M;w+=3){const T=w+0,y=w+1,C=w+2;h.push(T,y,y,C,C,T)}}const m=new(g.count>=65535?Yc:qc)(h,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function f(d){const h=r.get(d);if(h){const u=d.index;u!==null&&h.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function T1(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,u){u!==0&&(i.drawElementsInstanced(n,h,r,d*a,u),e.update(h,n,u))}function f(d,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,u);let _=0;for(let m=0;m<u;m++)_+=h[m];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function R1(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function C1(i,t,e){const n=new WeakMap,s=new ue;function r(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let w=0;u===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let M=o.attributes.position.count*w,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const y=new Float32Array(M*T*4*d),C=new Xc(y,M,T,d);C.type=sn,C.needsUpdate=!0;const x=w*4;for(let P=0;P<d;P++){const I=m[P],N=p[P],$=b[P],Z=M*T*4*P;for(let k=0;k<I.count;k++){const q=k*x;u===!0&&(s.fromBufferAttribute(I,k),y[Z+q+0]=s.x,y[Z+q+1]=s.y,y[Z+q+2]=s.z,y[Z+q+3]=0),g===!0&&(s.fromBufferAttribute(N,k),y[Z+q+4]=s.x,y[Z+q+5]=s.y,y[Z+q+6]=s.z,y[Z+q+7]=0),_===!0&&(s.fromBufferAttribute($,k),y[Z+q+8]=s.x,y[Z+q+9]=s.y,y[Z+q+10]=s.z,y[Z+q+11]=$.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new Bt(M,T)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];const g=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function P1(i,t,e,n,s){let r=new WeakMap;function a(c){const f=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==f&&(t.update(h),r.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==f&&(u.update(),r.set(u,f))}return h}function o(){r=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:o}}const I1={[Ic]:"LINEAR_TONE_MAPPING",[Lc]:"REINHARD_TONE_MAPPING",[Dc]:"CINEON_TONE_MAPPING",[wo]:"ACES_FILMIC_TONE_MAPPING",[Nc]:"AGX_TONE_MAPPING",[Fc]:"NEUTRAL_TONE_MAPPING",[Uc]:"CUSTOM_TONE_MAPPING"};function L1(i,t,e,n,s,r){const a=new _n(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new qi(t,e):void 0}),o=new _n(t,e,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),l=new Be;l.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new fe([0,2,0,0,2,0],2));const c=new bg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ne(l,c),d=new Ho(-1,1,1,-1,0,1);let h=null,u=null,g=!1,_,m=null,p=[],b=!1;this.setSize=function(w,M){a.setSize(w,M),o.setSize(w,M);for(let T=0;T<p.length;T++){const y=p[T];y.setSize&&y.setSize(w,M)}},this.setEffects=function(w){p=w,b=p.length>0&&p[0].isRenderPass===!0;const M=a.width,T=a.height;for(let y=0;y<p.length;y++){const C=p[y];C.setSize&&C.setSize(M,T)}},this.begin=function(w,M){if(g||w.toneMapping===gn&&p.length===0)return!1;if(m=M,M!==null){const T=M.width,y=M.height;(a.width!==T||a.height!==y)&&this.setSize(T,y)}return b===!1&&w.setRenderTarget(a),_=w.toneMapping,w.toneMapping=gn,!0},this.hasRenderPass=function(){return b},this.end=function(w,M){w.toneMapping=_,g=!0;let T=a,y=o;for(let C=0;C<p.length;C++){const x=p[C];if(x.enabled!==!1&&(x.render(w,y,T,M),x.needsSwap!==!1)){const E=T;T=y,y=E}}if(h!==w.outputColorSpace||u!==w.toneMapping){h=w.outputColorSpace,u=w.toneMapping,c.defines={},Zt.getTransfer(h)===ee&&(c.defines.SRGB_TRANSFER="");const C=I1[u];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,w.setRenderTarget(m),w.render(f,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const lh=new Ue,uo=new qi(1,1),ch=new Xc,hh=new Ym,dh=new Qc,sc=[],rc=[],ac=new Float32Array(16),oc=new Float32Array(9),lc=new Float32Array(4);function Qi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=sc[s];if(r===void 0&&(r=new Float32Array(s),sc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Tr(i,t){let e=rc[t];e===void 0&&(e=new Int32Array(t),rc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function D1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function U1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function N1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function F1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function O1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;lc.set(n),i.uniformMatrix2fv(this.addr,!1,lc),ye(e,n)}}function B1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;oc.set(n),i.uniformMatrix3fv(this.addr,!1,oc),ye(e,n)}}function z1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;ac.set(n),i.uniformMatrix4fv(this.addr,!1,ac),ye(e,n)}}function k1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function G1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function H1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function V1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function W1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function X1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function $1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function q1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function Y1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uo.compareFunction=e.isReversedDepthBuffer()?Uo:Do,r=uo):r=lh,e.setTexture2D(t||r,s)}function Z1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hh,s)}function K1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||dh,s)}function J1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ch,s)}function j1(i){switch(i){case 5126:return D1;case 35664:return U1;case 35665:return N1;case 35666:return F1;case 35674:return O1;case 35675:return B1;case 35676:return z1;case 5124:case 35670:return k1;case 35667:case 35671:return G1;case 35668:case 35672:return H1;case 35669:case 35673:return V1;case 5125:return W1;case 36294:return X1;case 36295:return $1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return Z1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return J1}}function Q1(i,t){i.uniform1fv(this.addr,t)}function tv(i,t){const e=Qi(t,this.size,2);i.uniform2fv(this.addr,e)}function ev(i,t){const e=Qi(t,this.size,3);i.uniform3fv(this.addr,e)}function nv(i,t){const e=Qi(t,this.size,4);i.uniform4fv(this.addr,e)}function iv(i,t){const e=Qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function sv(i,t){const e=Qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function rv(i,t){const e=Qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function av(i,t){i.uniform1iv(this.addr,t)}function ov(i,t){i.uniform2iv(this.addr,t)}function lv(i,t){i.uniform3iv(this.addr,t)}function cv(i,t){i.uniform4iv(this.addr,t)}function hv(i,t){i.uniform1uiv(this.addr,t)}function dv(i,t){i.uniform2uiv(this.addr,t)}function fv(i,t){i.uniform3uiv(this.addr,t)}function uv(i,t){i.uniform4uiv(this.addr,t)}function pv(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=uo:a=lh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function mv(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hh,r[a])}function gv(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||dh,r[a])}function _v(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ch,r[a])}function xv(i){switch(i){case 5126:return Q1;case 35664:return tv;case 35665:return ev;case 35666:return nv;case 35674:return iv;case 35675:return sv;case 35676:return rv;case 5124:case 35670:return av;case 35667:case 35671:return ov;case 35668:case 35672:return lv;case 35669:case 35673:return cv;case 5125:return hv;case 36294:return dv;case 36295:return fv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return _v}}class vv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=j1(e.type)}}class Mv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xv(e.type)}}class bv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function cc(i,t){i.seq.push(t),i.map[t.id]=t}function Sv(i,t,e){const n=i.name,s=n.length;for(xa.lastIndex=0;;){const r=xa.exec(n),a=xa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cc(e,c===void 0?new vv(o,i,t):new Mv(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new bv(o),cc(e,d)),e=d}}}class lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Sv(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function hc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const yv=37297;let Ev=0;function wv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const dc=new kt;function Av(i){Zt._getMatrix(dc,Zt.workingColorSpace,i);const t=`mat3( ${dc.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case fr:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+wv(i.getShaderSource(t),o)}else return r}function Tv(i,t){const e=Av(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Rv={[Ic]:"Linear",[Lc]:"Reinhard",[Dc]:"Cineon",[wo]:"ACESFilmic",[Nc]:"AgX",[Fc]:"Neutral",[Uc]:"Custom"};function Cv(i,t){const e=Rv[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const er=new B;function Pv(){Zt.getLuminanceCoefficients(er);const i=er.x.toFixed(4),t=er.y.toFixed(4),e=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function Lv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function us(i){return i!==""}function uc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(i){return i.replace(Uv,Fv)}const Nv=new Map;function Fv(i,t){let e=Xt[t];if(e===void 0){const n=Nv.get(t);if(n!==void 0)e=Xt[n],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return po(e)}const Ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mc(i){return i.replace(Ov,Bv)}function Bv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const zv={[nr]:"SHADOWMAP_TYPE_PCF",[fs]:"SHADOWMAP_TYPE_VSM"};function kv(i){return zv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Gv={[fi]:"ENVMAP_TYPE_CUBE",[$i]:"ENVMAP_TYPE_CUBE",[Er]:"ENVMAP_TYPE_CUBE_UV"};function Hv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Gv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Vv={[$i]:"ENVMAP_MODE_REFRACTION"};function Wv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Vv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Xv={[Eo]:"ENVMAP_BLENDING_MULTIPLY",[Tm]:"ENVMAP_BLENDING_MIX",[Rm]:"ENVMAP_BLENDING_ADD"};function $v(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Xv[i.combine]||"ENVMAP_BLENDING_NONE"}function qv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Yv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=kv(e),c=Hv(e),f=Wv(e),d=$v(e),h=qv(e),u=Iv(e),g=Lv(r),_=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(us).join(`
`),p.length>0&&(p+=`
`)):(m=[gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),p=[gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gn?"#define TONE_MAPPING":"",e.toneMapping!==gn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==gn?Cv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Tv("linearToOutputTexel",e.outputColorSpace),Pv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(us).join(`
`)),a=po(a),a=uc(a,e),a=pc(a,e),o=po(o),o=uc(o,e),o=pc(o,e),a=mc(a),o=mc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+m+a,M=b+p+o,T=hc(s,s.VERTEX_SHADER,w),y=hc(s,s.FRAGMENT_SHADER,M);s.attachShader(_,T),s.attachShader(_,y),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(I){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",$=s.getShaderInfoLog(T)||"",Z=s.getShaderInfoLog(y)||"",k=N.trim(),q=$.trim(),H=Z.trim();let A=!0,L=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(A=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,y);else{const U=fc(s,T,"vertex"),O=fc(s,y,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+U+`
`+O)}else k!==""?Ft("WebGLProgram: Program Info Log:",k):(q===""||H==="")&&(L=!1);L&&(I.diagnostics={runnable:A,programLog:k,vertexShader:{log:q,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(T),s.deleteShader(y),x=new lr(s,_),E=Dv(s,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,yv)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ev++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=y,this}let Zv=0;class Kv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Jv(t),e.set(t,n)),n}}class Jv{constructor(t){this.id=Zv++,this.code=t,this.usedTimes=0}}function jv(i){return i===ui||i===cr||i===hr}function Qv(i,t,e,n,s,r){const a=new Fo,o=new Kv,l=new Set,c=[],f=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,E,P,I,N,$){const Z=I.fog,k=N.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,A=t.get(x.envMap||q,H),L=A&&A.mapping===Er?A.image.height:null,U=u[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ft("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const O=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,st=O!==void 0?O.length:0;let ot=0;k.morphAttributes.position!==void 0&&(ot=1),k.morphAttributes.normal!==void 0&&(ot=2),k.morphAttributes.color!==void 0&&(ot=3);let Lt,Mt,K,rt;if(U){const wt=un[U];Lt=wt.vertexShader,Mt=wt.fragmentShader}else{Lt=x.vertexShader,Mt=x.fragmentShader;const wt=o.getVertexShaderStage(x),me=o.getFragmentShaderStage(x);o.update(x,wt,me),K=wt.id,rt=me.id}const nt=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),Et=N.isInstancedMesh===!0,bt=N.isBatchedMesh===!0,$t=!!x.map,zt=!!x.matcap,Ot=!!A,Dt=!!x.aoMap,Ut=!!x.lightMap,Wt=!!x.bumpMap&&x.wireframe===!1,jt=!!x.normalMap,ae=!!x.displacementMap,de=!!x.emissiveMap,Qt=!!x.metalnessMap,pe=!!x.roughnessMap,D=x.anisotropy>0,ze=x.clearcoat>0,te=x.dispersion>0,R=x.iridescence>0,v=x.sheen>0,G=x.transmission>0,X=D&&!!x.anisotropyMap,J=ze&&!!x.clearcoatMap,at=ze&&!!x.clearcoatNormalMap,ct=ze&&!!x.clearcoatRoughnessMap,j=R&&!!x.iridescenceMap,et=R&&!!x.iridescenceThicknessMap,ft=v&&!!x.sheenColorMap,Rt=v&&!!x.sheenRoughnessMap,mt=!!x.specularMap,ut=!!x.specularColorMap,It=!!x.specularIntensityMap,Nt=G&&!!x.transmissionMap,Ht=G&&!!x.thicknessMap,F=!!x.gradientMap,lt=!!x.alphaMap,Q=x.alphaTest>0,pt=!!x.alphaHash,vt=!!x.extensions;let it=gn;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(it=i.toneMapping);const Tt={shaderID:U,shaderType:x.type,shaderName:x.name,vertexShader:Lt,fragmentShader:Mt,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:rt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:bt,batchingColor:bt&&N._colorsTexture!==null,instancing:Et,instancingColor:Et&&N.instanceColor!==null,instancingMorph:Et&&N.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:$t,matcap:zt,envMap:Ot,envMapMode:Ot&&A.mapping,envMapCubeUVHeight:L,aoMap:Dt,lightMap:Ut,bumpMap:Wt,normalMap:jt,displacementMap:ae,emissiveMap:de,normalMapObjectSpace:jt&&x.normalMapType===Im,normalMapTangentSpace:jt&&x.normalMapType===lo,packedNormalMap:jt&&x.normalMapType===lo&&jv(x.normalMap.format),metalnessMap:Qt,roughnessMap:pe,anisotropy:D,anisotropyMap:X,clearcoat:ze,clearcoatMap:J,clearcoatNormalMap:at,clearcoatRoughnessMap:ct,dispersion:te,iridescence:R,iridescenceMap:j,iridescenceThicknessMap:et,sheen:v,sheenColorMap:ft,sheenRoughnessMap:Rt,specularMap:mt,specularColorMap:ut,specularIntensityMap:It,transmission:G,transmissionMap:Nt,thicknessMap:Ht,gradientMap:F,opaque:x.transparent===!1&&x.blending===Gi&&x.alphaToCoverage===!1,alphaMap:lt,alphaTest:Q,alphaHash:pt,combine:x.combine,mapUv:$t&&g(x.map.channel),aoMapUv:Dt&&g(x.aoMap.channel),lightMapUv:Ut&&g(x.lightMap.channel),bumpMapUv:Wt&&g(x.bumpMap.channel),normalMapUv:jt&&g(x.normalMap.channel),displacementMapUv:ae&&g(x.displacementMap.channel),emissiveMapUv:de&&g(x.emissiveMap.channel),metalnessMapUv:Qt&&g(x.metalnessMap.channel),roughnessMapUv:pe&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:J&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:et&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&g(x.sheenRoughnessMap.channel),specularMapUv:mt&&g(x.specularMap.channel),specularColorMapUv:ut&&g(x.specularColorMap.channel),specularIntensityMapUv:It&&g(x.specularIntensityMap.channel),transmissionMapUv:Nt&&g(x.transmissionMap.channel),thicknessMapUv:Ht&&g(x.thicknessMap.channel),alphaMapUv:lt&&g(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(jt||D),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&($t||lt),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&jt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:ot,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:$t&&x.map.isVideoTexture===!0&&Zt.getTransfer(x.map.colorSpace)===ee,decodeVideoTextureEmissive:de&&x.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(x.emissiveMap.colorSpace)===ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===An,flipSided:x.side===ke,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:vt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&x.extensions.multiDraw===!0||bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(E,x),b(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){const E=u[x.type];let P;if(E){const I=un[E];P=xg.clone(I.uniforms)}else P=x.uniforms;return P}function M(x,E){let P=f.get(E);return P!==void 0?++P.usedTimes:(P=new Yv(i,E,x,s),c.push(P),f.set(E,P)),P}function T(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function y(x){o.remove(x)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:M,releaseProgram:T,releaseShaderCache:y,programs:c,dispose:C}}function tM(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function eM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function _c(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function o(h,u,g,_,m,p){let b=i[t];return b===void 0?(b={id:h.id,object:h,geometry:u,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},i[t]=b):(b.id=h.id,b.object=h,b.geometry=u,b.material=g,b.materialVariant=a(h),b.groupOrder=_,b.renderOrder=h.renderOrder,b.z=m,b.group=p),t++,b}function l(h,u,g,_,m,p){const b=o(h,u,g,_,m,p);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):e.push(b)}function c(h,u,g,_,m,p){const b=o(h,u,g,_,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function f(h,u,g){e.length>1&&e.sort(h||eM),n.length>1&&n.sort(u||_c),s.length>1&&s.sort(u||_c),g&&(e.reverse(),n.reverse(),s.reverse())}function d(){for(let h=t,u=i.length;h<u;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:f}}function nM(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new xc,i.set(n,[a])):s>=r.length?(a=new xc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function iM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Gt};break;case"SpotLight":e={position:new B,direction:new B,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function sM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let rM=0;function aM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function oM(i){const t=new iM,e=sM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new ie,a=new ie;function o(c){let f=0,d=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let u=0,g=0,_=0,m=0,p=0,b=0,w=0,M=0,T=0,y=0,C=0;c.sort(aM);for(let E=0,P=c.length;E<P;E++){const I=c[E],N=I.color,$=I.intensity,Z=I.distance;let k=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ui?k=I.shadow.map.texture:k=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=N.r*$,d+=N.g*$,h+=N.b*$;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],$);C++}else if(I.isDirectionalLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const H=I.shadow,A=e.get(I);A.shadowIntensity=H.intensity,A.shadowBias=H.bias,A.shadowNormalBias=H.normalBias,A.shadowRadius=H.radius,A.shadowMapSize=H.mapSize,n.directionalShadow[u]=A,n.directionalShadowMap[u]=k,n.directionalShadowMatrix[u]=I.shadow.matrix,b++}n.directional[u]=q,u++}else if(I.isSpotLight){const q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(N).multiplyScalar($),q.distance=Z,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[_]=q;const H=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,H.updateMatrices(I),I.castShadow&&y++),n.spotLightMatrix[_]=H.matrix,I.castShadow){const A=e.get(I);A.shadowIntensity=H.intensity,A.shadowBias=H.bias,A.shadowNormalBias=H.normalBias,A.shadowRadius=H.radius,A.shadowMapSize=H.mapSize,n.spotShadow[_]=A,n.spotShadowMap[_]=k,M++}_++}else if(I.isRectAreaLight){const q=t.get(I);q.color.copy(N).multiplyScalar($),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=q,m++}else if(I.isPointLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const H=I.shadow,A=e.get(I);A.shadowIntensity=H.intensity,A.shadowBias=H.bias,A.shadowNormalBias=H.normalBias,A.shadowRadius=H.radius,A.shadowMapSize=H.mapSize,A.shadowCameraNear=H.camera.near,A.shadowCameraFar=H.camera.far,n.pointShadow[g]=A,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=I.shadow.matrix,w++}n.point[g]=q,g++}else if(I.isHemisphereLight){const q=t.get(I);q.skyColor.copy(I.color).multiplyScalar($),q.groundColor.copy(I.groundColor).multiplyScalar($),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==u||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==b||x.numPointShadows!==w||x.numSpotShadows!==M||x.numSpotMaps!==T||x.numLightProbes!==C)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+T-y,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=C,x.directionalLength=u,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=b,x.numPointShadows=w,x.numSpotShadows=M,x.numSpotMaps=T,x.numLightProbes=C,n.version=rM++)}function l(c,f){let d=0,h=0,u=0,g=0,_=0;const m=f.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const w=c[p];if(w.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(w.isSpotLight){const M=n.spot[u];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(w.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function vc(i){const t=new oM(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function f(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function lM(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new vc(i),t.set(s,[o])):r>=a.length?(o=new vc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const cM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dM=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],fM=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Mc=new ie,ds=new B,va=new B;function uM(i,t,e){let n=new zo;const s=new Bt,r=new Bt,a=new ue,o=new Sg,l=new yg,c={},f=e.maxTextureSize,d={[qn]:ke,[ke]:qn,[An]:An},h=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:cM,fragmentShader:hM}),u=h.clone();u.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ne(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nr;let p=this.type;this.render=function(y,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===lm&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nr);const E=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Rn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const $=p!==this.type;$&&C.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(k=>k.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,k=y.length;Z<k;Z++){const q=y[Z],H=q.shadow;if(H===void 0){Ft("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const A=H.getFrameExtents();s.multiply(A),r.copy(H.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/A.x),s.x=r.x*A.x,H.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/A.y),s.y=r.y*A.y,H.mapSize.y=r.y));const L=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=L,H.map===null||$===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===fs){if(q.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new _n(s.x,s.y,{format:ui,type:Pn,minFilter:De,magFilter:De,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new qi(s.x,s.y,sn),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=In,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Re,H.map.depthTexture.magFilter=Re}else q.isPointLight?(H.map=new oh(s.x),H.map.depthTexture=new gg(s.x,xn)):(H.map=new _n(s.x,s.y),H.map.depthTexture=new qi(s.x,s.y,xn)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=In,this.type===nr?(H.map.depthTexture.compareFunction=L?Uo:Do,H.map.depthTexture.minFilter=De,H.map.depthTexture.magFilter=De):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Re,H.map.depthTexture.magFilter=Re);H.camera.updateProjectionMatrix()}const U=H.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<U;O++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,O),i.clear();else{O===0&&(i.setRenderTarget(H.map),i.clear());const st=H.getViewport(O);a.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),N.viewport(a)}if(q.isPointLight){const st=H.camera,ot=H.matrix,Lt=q.distance||st.far;Lt!==st.far&&(st.far=Lt,st.updateProjectionMatrix()),ds.setFromMatrixPosition(q.matrixWorld),st.position.copy(ds),va.copy(st.position),va.add(dM[O]),st.up.copy(fM[O]),st.lookAt(va),st.updateMatrixWorld(),ot.makeTranslation(-ds.x,-ds.y,-ds.z),Mc.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Mc,st.coordinateSystem,st.reversedDepth)}else H.updateMatrices(q);n=H.getFrustum(),M(C,x,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===fs&&b(H,x),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,P,I)};function b(y,C){const x=t.update(_);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,u.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new _n(s.x,s.y,{format:ui,type:Pn})),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,_,null),u.uniforms.shadow_pass.value=y.mapPass.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(C,null,x,u,_,null)}function w(y,C,x,E){let P=null;const I=x.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)P=I;else if(P=x.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=P.uuid,$=C.uuid;let Z=c[N];Z===void 0&&(Z={},c[N]=Z);let k=Z[$];k===void 0&&(k=P.clone(),Z[$]=k,C.addEventListener("dispose",T)),P=k}if(P.visible=C.visible,P.wireframe=C.wireframe,E===fs?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const N=i.properties.get(P);N.light=x}return P}function M(y,C,x,E,P){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&P===fs)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,y.matrixWorld);const $=t.update(y),Z=y.material;if(Array.isArray(Z)){const k=$.groups;for(let q=0,H=k.length;q<H;q++){const A=k[q],L=Z[A.materialIndex];if(L&&L.visible){const U=w(y,L,E,P);y.onBeforeShadow(i,y,C,x,$,U,A),i.renderBufferDirect(x,null,$,U,y,A),y.onAfterShadow(i,y,C,x,$,U,A)}}}else if(Z.visible){const k=w(y,Z,E,P);y.onBeforeShadow(i,y,C,x,$,k,null),i.renderBufferDirect(x,null,$,k,y,null),y.onAfterShadow(i,y,C,x,$,k,null)}}const N=y.children;for(let $=0,Z=N.length;$<Z;$++)M(N[$],C,x,E,P)}function T(y){y.target.removeEventListener("dispose",T);for(const x in c){const E=c[x],P=y.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function pM(i,t){function e(){let F=!1;const lt=new ue;let Q=null;const pt=new ue(0,0,0,0);return{setMask:function(vt){Q!==vt&&!F&&(i.colorMask(vt,vt,vt,vt),Q=vt)},setLocked:function(vt){F=vt},setClear:function(vt,it,Tt,wt,me){me===!0&&(vt*=wt,it*=wt,Tt*=wt),lt.set(vt,it,Tt,wt),pt.equals(lt)===!1&&(i.clearColor(vt,it,Tt,wt),pt.copy(lt))},reset:function(){F=!1,Q=null,pt.set(-1,0,0,0)}}}function n(){let F=!1,lt=!1,Q=null,pt=null,vt=null;return{setReversed:function(it){if(lt!==it){const Tt=t.get("EXT_clip_control");it?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),lt=it;const wt=vt;vt=null,this.setClear(wt)}},getReversed:function(){return lt},setTest:function(it){it?nt(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(it){Q!==it&&!F&&(i.depthMask(it),Q=it)},setFunc:function(it){if(lt&&(it=Gm[it]),pt!==it){switch(it){case ya:i.depthFunc(i.NEVER);break;case Ea:i.depthFunc(i.ALWAYS);break;case wa:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ta:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=it}},setLocked:function(it){F=it},setClear:function(it){vt!==it&&(vt=it,lt&&(it=1-it),i.clearDepth(it))},reset:function(){F=!1,Q=null,pt=null,vt=null,lt=!1}}}function s(){let F=!1,lt=null,Q=null,pt=null,vt=null,it=null,Tt=null,wt=null,me=null;return{setTest:function(ce){F||(ce?nt(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(ce){lt!==ce&&!F&&(i.stencilMask(ce),lt=ce)},setFunc:function(ce,an,on){(Q!==ce||pt!==an||vt!==on)&&(i.stencilFunc(ce,an,on),Q=ce,pt=an,vt=on)},setOp:function(ce,an,on){(it!==ce||Tt!==an||wt!==on)&&(i.stencilOp(ce,an,on),it=ce,Tt=an,wt=on)},setLocked:function(ce){F=ce},setClear:function(ce){me!==ce&&(i.clearStencil(ce),me=ce)},reset:function(){F=!1,lt=null,Q=null,pt=null,vt=null,it=null,Tt=null,wt=null,me=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let f={},d={},h={},u=new WeakMap,g=[],_=null,m=!1,p=null,b=null,w=null,M=null,T=null,y=null,C=null,x=new Gt(0,0,0),E=0,P=!1,I=null,N=null,$=null,Z=null,k=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,A=0;const L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(A=parseFloat(/^WebGL (\d)/.exec(L)[1]),H=A>=1):L.indexOf("OpenGL ES")!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),H=A>=2);let U=null,O={};const st=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),Lt=new ue().fromArray(st),Mt=new ue().fromArray(ot);function K(F,lt,Q,pt){const vt=new Uint8Array(4),it=i.createTexture();i.bindTexture(F,it),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<Q;Tt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(lt+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return it}const rt={};rt[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(Xi),Wt(!1),jt(fl),nt(i.CULL_FACE),Dt(Rn);function nt(F){f[F]!==!0&&(i.enable(F),f[F]=!0)}function dt(F){f[F]!==!1&&(i.disable(F),f[F]=!1)}function Et(F,lt){return h[F]!==lt?(i.bindFramebuffer(F,lt),h[F]=lt,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=lt),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function bt(F,lt){let Q=g,pt=!1;if(F){Q=u.get(lt),Q===void 0&&(Q=[],u.set(lt,Q));const vt=F.textures;if(Q.length!==vt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Tt=vt.length;it<Tt;it++)Q[it]=i.COLOR_ATTACHMENT0+it;Q.length=vt.length,pt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,pt=!0);pt&&i.drawBuffers(Q)}function $t(F){return _!==F?(i.useProgram(F),_=F,!0):!1}const zt={[si]:i.FUNC_ADD,[hm]:i.FUNC_SUBTRACT,[dm]:i.FUNC_REVERSE_SUBTRACT};zt[fm]=i.MIN,zt[um]=i.MAX;const Ot={[pm]:i.ZERO,[mm]:i.ONE,[gm]:i.SRC_COLOR,[ba]:i.SRC_ALPHA,[Sm]:i.SRC_ALPHA_SATURATE,[Mm]:i.DST_COLOR,[xm]:i.DST_ALPHA,[_m]:i.ONE_MINUS_SRC_COLOR,[Sa]:i.ONE_MINUS_SRC_ALPHA,[bm]:i.ONE_MINUS_DST_COLOR,[vm]:i.ONE_MINUS_DST_ALPHA,[ym]:i.CONSTANT_COLOR,[Em]:i.ONE_MINUS_CONSTANT_COLOR,[wm]:i.CONSTANT_ALPHA,[Am]:i.ONE_MINUS_CONSTANT_ALPHA};function Dt(F,lt,Q,pt,vt,it,Tt,wt,me,ce){if(F===Rn){m===!0&&(dt(i.BLEND),m=!1);return}if(m===!1&&(nt(i.BLEND),m=!0),F!==cm){if(F!==p||ce!==P){if((b!==si||T!==si)&&(i.blendEquation(i.FUNC_ADD),b=si,T=si),ce)switch(F){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ps:i.blendFunc(i.ONE,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Yt("WebGLState: Invalid blending: ",F);break}else switch(F){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ul:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pl:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",F);break}w=null,M=null,y=null,C=null,x.set(0,0,0),E=0,p=F,P=ce}return}vt=vt||lt,it=it||Q,Tt=Tt||pt,(lt!==b||vt!==T)&&(i.blendEquationSeparate(zt[lt],zt[vt]),b=lt,T=vt),(Q!==w||pt!==M||it!==y||Tt!==C)&&(i.blendFuncSeparate(Ot[Q],Ot[pt],Ot[it],Ot[Tt]),w=Q,M=pt,y=it,C=Tt),(wt.equals(x)===!1||me!==E)&&(i.blendColor(wt.r,wt.g,wt.b,me),x.copy(wt),E=me),p=F,P=!1}function Ut(F,lt){F.side===An?dt(i.CULL_FACE):nt(i.CULL_FACE);let Q=F.side===ke;lt&&(Q=!Q),Wt(Q),F.blending===Gi&&F.transparent===!1?Dt(Rn):Dt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const pt=F.stencilWrite;o.setTest(pt),pt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),de(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function jt(F){F!==am?(nt(i.CULL_FACE),F!==N&&(F===fl?i.cullFace(i.BACK):F===om?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),N=F}function ae(F){F!==$&&(H&&i.lineWidth(F),$=F)}function de(F,lt,Q){F?(nt(i.POLYGON_OFFSET_FILL),(Z!==lt||k!==Q)&&(Z=lt,k=Q,a.getReversed()&&(lt=-lt),i.polygonOffset(lt,Q))):dt(i.POLYGON_OFFSET_FILL)}function Qt(F){F?nt(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function pe(F){F===void 0&&(F=i.TEXTURE0+q-1),U!==F&&(i.activeTexture(F),U=F)}function D(F,lt,Q){Q===void 0&&(U===null?Q=i.TEXTURE0+q-1:Q=U);let pt=O[Q];pt===void 0&&(pt={type:void 0,texture:void 0},O[Q]=pt),(pt.type!==F||pt.texture!==lt)&&(U!==Q&&(i.activeTexture(Q),U=Q),i.bindTexture(F,lt||rt[F]),pt.type=F,pt.texture=lt)}function ze(){const F=O[U];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function te(){try{i.compressedTexImage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function v(){try{i.texSubImage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function G(){try{i.texSubImage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function at(){try{i.texStorage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function ct(){try{i.texStorage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function j(){try{i.texImage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function et(){try{i.texImage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function ft(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function Rt(F,lt){d[F]!==lt&&(i.pixelStorei(F,lt),d[F]=lt)}function mt(F){Lt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Lt.copy(F))}function ut(F){Mt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Mt.copy(F))}function It(F,lt){let Q=c.get(lt);Q===void 0&&(Q=new WeakMap,c.set(lt,Q));let pt=Q.get(F);pt===void 0&&(pt=i.getUniformBlockIndex(lt,F.name),Q.set(F,pt))}function Nt(F,lt){const pt=c.get(lt).get(F);l.get(lt)!==pt&&(i.uniformBlockBinding(lt,pt,F.__bindingPointIndex),l.set(lt,pt))}function Ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},d={},U=null,O={},h={},u=new WeakMap,g=[],_=null,m=!1,p=null,b=null,w=null,M=null,T=null,y=null,C=null,x=new Gt(0,0,0),E=0,P=!1,I=null,N=null,$=null,Z=null,k=null,Lt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:dt,bindFramebuffer:Et,drawBuffers:bt,useProgram:$t,setBlending:Dt,setMaterial:Ut,setFlipSided:Wt,setCullFace:jt,setLineWidth:ae,setPolygonOffset:de,setScissorTest:Qt,activeTexture:pe,bindTexture:D,unbindTexture:ze,compressedTexImage2D:te,compressedTexImage3D:R,texImage2D:j,texImage3D:et,pixelStorei:Rt,getParameter:ft,updateUBOMapping:It,uniformBlockBinding:Nt,texStorage2D:at,texStorage3D:ct,texSubImage2D:v,texSubImage3D:G,compressedTexSubImage2D:X,compressedTexSubImage3D:J,scissor:mt,viewport:ut,reset:Ht}}function mM(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,f=new WeakMap,d=new Set;let h;const u=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return g?new OffscreenCanvas(R,v):ur("canvas")}function m(R,v,G){let X=1;const J=te(R);if((J.width>G||J.height>G)&&(X=G/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const at=Math.floor(X*J.width),ct=Math.floor(X*J.height);h===void 0&&(h=_(at,ct));const j=v?_(at,ct):h;return j.width=at,j.height=ct,j.getContext("2d").drawImage(R,0,0,at,ct),Ft("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+at+"x"+ct+")."),j}else return"data"in R&&Ft("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function p(R){return R.generateMipmaps}function b(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,v,G,X,J,at=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ct;X&&(ct=t.get("EXT_texture_norm16"),ct||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===i.RED&&(G===i.FLOAT&&(j=i.R32F),G===i.HALF_FLOAT&&(j=i.R16F),G===i.UNSIGNED_BYTE&&(j=i.R8),G===i.UNSIGNED_SHORT&&ct&&(j=ct.R16_EXT),G===i.SHORT&&ct&&(j=ct.R16_SNORM_EXT)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.R8UI),G===i.UNSIGNED_SHORT&&(j=i.R16UI),G===i.UNSIGNED_INT&&(j=i.R32UI),G===i.BYTE&&(j=i.R8I),G===i.SHORT&&(j=i.R16I),G===i.INT&&(j=i.R32I)),v===i.RG&&(G===i.FLOAT&&(j=i.RG32F),G===i.HALF_FLOAT&&(j=i.RG16F),G===i.UNSIGNED_BYTE&&(j=i.RG8),G===i.UNSIGNED_SHORT&&ct&&(j=ct.RG16_EXT),G===i.SHORT&&ct&&(j=ct.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RG8UI),G===i.UNSIGNED_SHORT&&(j=i.RG16UI),G===i.UNSIGNED_INT&&(j=i.RG32UI),G===i.BYTE&&(j=i.RG8I),G===i.SHORT&&(j=i.RG16I),G===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGB8UI),G===i.UNSIGNED_SHORT&&(j=i.RGB16UI),G===i.UNSIGNED_INT&&(j=i.RGB32UI),G===i.BYTE&&(j=i.RGB8I),G===i.SHORT&&(j=i.RGB16I),G===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),G===i.UNSIGNED_INT&&(j=i.RGBA32UI),G===i.BYTE&&(j=i.RGBA8I),G===i.SHORT&&(j=i.RGBA16I),G===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(G===i.UNSIGNED_SHORT&&ct&&(j=ct.RGB16_EXT),G===i.SHORT&&ct&&(j=ct.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){const et=at?fr:Zt.getTransfer(J);G===i.FLOAT&&(j=i.RGBA32F),G===i.HALF_FLOAT&&(j=i.RGBA16F),G===i.UNSIGNED_BYTE&&(j=et===ee?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&ct&&(j=ct.RGBA16_EXT),G===i.SHORT&&ct&&(j=ct.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function T(R,v){let G;return R?v===null||v===xn||v===gs?G=i.DEPTH24_STENCIL8:v===sn?G=i.DEPTH32F_STENCIL8:v===ms&&(G=i.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===xn||v===gs?G=i.DEPTH_COMPONENT24:v===sn?G=i.DEPTH_COMPONENT32F:v===ms&&(G=i.DEPTH_COMPONENT16),G}function y(R,v){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Re&&R.minFilter!==De?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function C(R){const v=R.target;v.removeEventListener("dispose",C),E(v),v.isVideoTexture&&f.delete(v),v.isHTMLTexture&&d.delete(v)}function x(R){const v=R.target;v.removeEventListener("dispose",x),I(v)}function E(R){const v=n.get(R);if(v.__webglInit===void 0)return;const G=R.source,X=u.get(G);if(X){const J=X[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(R),Object.keys(X).length===0&&u.delete(G)}n.remove(R)}function P(R){const v=n.get(R);i.deleteTexture(v.__webglTexture);const G=R.source,X=u.get(G);delete X[v.__cacheKey],a.memory.textures--}function I(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let J=0;J<v.__webglFramebuffer[X].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[X][J]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const G=R.textures;for(let X=0,J=G.length;X<J;X++){const at=n.get(G[X]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(G[X])}n.remove(R)}let N=0;function $(){N=0}function Z(){return N}function k(R){N=R}function q(){const R=N;return R>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),N+=1,R}function H(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function A(R,v){const G=n.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const X=R.image;if(X===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(G,R,v);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function L(R,v){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){dt(G,R,v);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function U(R,v){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){dt(G,R,v);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function O(R,v){const G=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){Et(G,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}const st={[Pa]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[Ia]:i.MIRRORED_REPEAT},ot={[Re]:i.NEAREST,[Cm]:i.NEAREST_MIPMAP_NEAREST,[Rs]:i.NEAREST_MIPMAP_LINEAR,[De]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},Lt={[Lm]:i.NEVER,[Om]:i.ALWAYS,[Dm]:i.LESS,[Do]:i.LEQUAL,[Um]:i.EQUAL,[Uo]:i.GEQUAL,[Nm]:i.GREATER,[Fm]:i.NOTEQUAL};function Mt(R,v){if(v.type===sn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===De||v.magFilter===zr||v.magFilter===Rs||v.magFilter===ai||v.minFilter===De||v.minFilter===zr||v.minFilter===Rs||v.minFilter===ai)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,st[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,st[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,st[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ot[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ot[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Lt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Re||v.minFilter!==Rs&&v.minFilter!==ai||v.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function K(R,v){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",C));const X=v.source;let J=u.get(X);J===void 0&&(J={},u.set(X,J));const at=H(v);if(at!==R.__cacheKey){J[at]===void 0&&(J[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),J[at].usedTimes++;const ct=J[R.__cacheKey];ct!==void 0&&(J[R.__cacheKey].usedTimes--,ct.usedTimes===0&&P(v)),R.__cacheKey=at,R.__webglTexture=J[at].texture}return G}function rt(R,v,G){return Math.floor(Math.floor(R/G)/v)}function nt(R,v,G,X){const at=R.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,G,X,v.data);else{at.sort((Rt,mt)=>Rt.start-mt.start);let ct=0;for(let Rt=1;Rt<at.length;Rt++){const mt=at[ct],ut=at[Rt],It=mt.start+mt.count,Nt=rt(ut.start,v.width,4),Ht=rt(mt.start,v.width,4);ut.start<=It+1&&Nt===Ht&&rt(ut.start+ut.count-1,v.width,4)===Nt?mt.count=Math.max(mt.count,ut.start+ut.count-mt.start):(++ct,at[ct]=ut)}at.length=ct+1;const j=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Rt=0,mt=at.length;Rt<mt;Rt++){const ut=at[Rt],It=Math.floor(ut.start/4),Nt=Math.ceil(ut.count/4),Ht=It%v.width,F=Math.floor(It/v.width),lt=Nt,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Ht,F,lt,Q,G,X,v.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function dt(R,v,G){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);const J=K(R,v),at=v.source;e.bindTexture(X,R.__webglTexture,i.TEXTURE0+G);const ct=n.get(at);if(at.version!==ct.__version||J===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const Q=Zt.getPrimaries(Zt.workingColorSpace),pt=v.colorSpace===Vn?null:Zt.getPrimaries(v.colorSpace),vt=v.colorSpace===Vn||Q===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let et=m(v.image,!1,s.maxTextureSize);et=ze(v,et);const ft=r.convert(v.format,v.colorSpace),Rt=r.convert(v.type);let mt=M(v.internalFormat,ft,Rt,v.normalized,v.colorSpace,v.isVideoTexture);Mt(X,v);let ut;const It=v.mipmaps,Nt=v.isVideoTexture!==!0,Ht=ct.__version===void 0||J===!0,F=at.dataReady,lt=y(v,et);if(v.isDepthTexture)mt=T(v.format===oi,v.type),Ht&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,mt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,mt,et.width,et.height,0,ft,Rt,null));else if(v.isDataTexture)if(It.length>0){Nt&&Ht&&e.texStorage2D(i.TEXTURE_2D,lt,mt,It[0].width,It[0].height);for(let Q=0,pt=It.length;Q<pt;Q++)ut=It[Q],Nt?F&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ut.width,ut.height,ft,Rt,ut.data):e.texImage2D(i.TEXTURE_2D,Q,mt,ut.width,ut.height,0,ft,Rt,ut.data);v.generateMipmaps=!1}else Nt?(Ht&&e.texStorage2D(i.TEXTURE_2D,lt,mt,et.width,et.height),F&&nt(v,et,ft,Rt)):e.texImage2D(i.TEXTURE_2D,0,mt,et.width,et.height,0,ft,Rt,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Nt&&Ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,mt,It[0].width,It[0].height,et.depth);for(let Q=0,pt=It.length;Q<pt;Q++)if(ut=It[Q],v.format!==rn)if(ft!==null)if(Nt){if(F)if(v.layerUpdates.size>0){const vt=Jl(ut.width,ut.height,v.format,v.type);for(const it of v.layerUpdates){const Tt=ut.data.subarray(it*vt/ut.data.BYTES_PER_ELEMENT,(it+1)*vt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,it,ut.width,ut.height,1,ft,Tt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ut.width,ut.height,et.depth,ft,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,mt,ut.width,ut.height,et.depth,0,ut.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ut.width,ut.height,et.depth,ft,Rt,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,mt,ut.width,ut.height,et.depth,0,ft,Rt,ut.data)}else{Nt&&Ht&&e.texStorage2D(i.TEXTURE_2D,lt,mt,It[0].width,It[0].height);for(let Q=0,pt=It.length;Q<pt;Q++)ut=It[Q],v.format!==rn?ft!==null?Nt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ut.width,ut.height,ft,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,mt,ut.width,ut.height,0,ut.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?F&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ut.width,ut.height,ft,Rt,ut.data):e.texImage2D(i.TEXTURE_2D,Q,mt,ut.width,ut.height,0,ft,Rt,ut.data)}else if(v.isDataArrayTexture)if(Nt){if(Ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,mt,et.width,et.height,et.depth),F)if(v.layerUpdates.size>0){const Q=Jl(et.width,et.height,v.format,v.type);for(const pt of v.layerUpdates){const vt=et.data.subarray(pt*Q/et.data.BYTES_PER_ELEMENT,(pt+1)*Q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,et.width,et.height,1,ft,Rt,vt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ft,Rt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,et.width,et.height,et.depth,0,ft,Rt,et.data);else if(v.isData3DTexture)Nt?(Ht&&e.texStorage3D(i.TEXTURE_3D,lt,mt,et.width,et.height,et.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ft,Rt,et.data)):e.texImage3D(i.TEXTURE_3D,0,mt,et.width,et.height,et.depth,0,ft,Rt,et.data);else if(v.isFramebufferTexture){if(Ht)if(Nt)e.texStorage2D(i.TEXTURE_2D,lt,mt,et.width,et.height);else{let Q=et.width,pt=et.height;for(let vt=0;vt<lt;vt++)e.texImage2D(i.TEXTURE_2D,vt,mt,Q,pt,0,ft,Rt,null),Q>>=1,pt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),et.parentNode!==Q){Q.appendChild(et),d.add(v),Q.onpaint=pt=>{const vt=pt.changedElements;for(const it of d)vt.includes(it.image)&&(it.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{const vt=i.RGBA,it=i.RGBA,Tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,vt,it,Tt,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(It.length>0){if(Nt&&Ht){const Q=te(It[0]);e.texStorage2D(i.TEXTURE_2D,lt,mt,Q.width,Q.height)}for(let Q=0,pt=It.length;Q<pt;Q++)ut=It[Q],Nt?F&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ft,Rt,ut):e.texImage2D(i.TEXTURE_2D,Q,mt,ft,Rt,ut);v.generateMipmaps=!1}else if(Nt){if(Ht){const Q=te(et);e.texStorage2D(i.TEXTURE_2D,lt,mt,Q.width,Q.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Rt,et)}else e.texImage2D(i.TEXTURE_2D,0,mt,ft,Rt,et);p(v)&&b(X),ct.__version=at.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Et(R,v,G){if(v.image.length!==6)return;const X=K(R,v),J=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const at=n.get(J);if(J.version!==at.__version||X===!0){e.activeTexture(i.TEXTURE0+G);const ct=Zt.getPrimaries(Zt.workingColorSpace),j=v.colorSpace===Vn?null:Zt.getPrimaries(v.colorSpace),et=v.colorSpace===Vn||ct===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const ft=v.isCompressedTexture||v.image[0].isCompressedTexture,Rt=v.image[0]&&v.image[0].isDataTexture,mt=[];for(let it=0;it<6;it++)!ft&&!Rt?mt[it]=m(v.image[it],!0,s.maxCubemapSize):mt[it]=Rt?v.image[it].image:v.image[it],mt[it]=ze(v,mt[it]);const ut=mt[0],It=r.convert(v.format,v.colorSpace),Nt=r.convert(v.type),Ht=M(v.internalFormat,It,Nt,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,lt=at.__version===void 0||X===!0,Q=J.dataReady;let pt=y(v,ut);Mt(i.TEXTURE_CUBE_MAP,v);let vt;if(ft){F&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Ht,ut.width,ut.height);for(let it=0;it<6;it++){vt=mt[it].mipmaps;for(let Tt=0;Tt<vt.length;Tt++){const wt=vt[Tt];v.format!==rn?It!==null?F?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt,0,0,wt.width,wt.height,It,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt,Ht,wt.width,wt.height,0,wt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt,0,0,wt.width,wt.height,It,Nt,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt,Ht,wt.width,wt.height,0,It,Nt,wt.data)}}}else{if(vt=v.mipmaps,F&&lt){vt.length>0&&pt++;const it=te(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Ht,it.width,it.height)}for(let it=0;it<6;it++)if(Rt){F?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,mt[it].width,mt[it].height,It,Nt,mt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ht,mt[it].width,mt[it].height,0,It,Nt,mt[it].data);for(let Tt=0;Tt<vt.length;Tt++){const me=vt[Tt].image[it].image;F?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt+1,0,0,me.width,me.height,It,Nt,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt+1,Ht,me.width,me.height,0,It,Nt,me.data)}}else{F?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,It,Nt,mt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ht,It,Nt,mt[it]);for(let Tt=0;Tt<vt.length;Tt++){const wt=vt[Tt];F?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt+1,0,0,It,Nt,wt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt+1,Ht,It,Nt,wt.image[it])}}}p(v)&&b(i.TEXTURE_CUBE_MAP),at.__version=J.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function bt(R,v,G,X,J,at){const ct=r.convert(G.format,G.colorSpace),j=r.convert(G.type),et=M(G.internalFormat,ct,j,G.normalized,G.colorSpace),ft=n.get(v),Rt=n.get(G);if(Rt.__renderTarget=v,!ft.__hasExternalTextures){const mt=Math.max(1,v.width>>at),ut=Math.max(1,v.height>>at);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,at,et,mt,ut,v.depth,0,ct,j,null):e.texImage2D(J,at,et,mt,ut,0,ct,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),pe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,J,Rt.__webglTexture,0,Qt(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,J,Rt.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(R,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){const X=v.depthTexture,J=X&&X.isDepthTexture?X.type:null,at=T(v.stencilBuffer,J),ct=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(v),at,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(v),at,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,at,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,R)}else{const X=v.textures;for(let J=0;J<X.length;J++){const at=X[J],ct=r.convert(at.format,at.colorSpace),j=r.convert(at.type),et=M(at.internalFormat,ct,j,at.normalized,at.colorSpace);pe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(v),et,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(v),et,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,et,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(R,v,G){const X=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,v.depthTexture);const ft=r.convert(v.depthTexture.format),Rt=r.convert(v.depthTexture.type);let mt;v.depthTexture.format===In?mt=i.DEPTH_COMPONENT24:v.depthTexture.format===oi&&(mt=i.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,mt,v.width,v.height,0,ft,Rt,null)}}else A(v.depthTexture,0);const at=J.__webglTexture,ct=Qt(v),j=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,et=v.depthTexture.format===oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===In)pe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,j,at,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,et,j,at,0);else if(v.depthTexture.format===oi)pe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,j,at,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,et,j,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(R){const v=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=X}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let X=0;X<6;X++)zt(v.__webglFramebuffer[X],R,X);else{const X=R.texture.mipmaps;X&&X.length>0?zt(v.__webglFramebuffer[0],R,0):zt(v.__webglFramebuffer,R,0)}else if(G){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),$t(v.__webglDepthbuffer[X],R,!1);else{const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,at)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),$t(v.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,at)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(R,v,G){const X=n.get(R);v!==void 0&&bt(X.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ot(R)}function Ut(R){const v=R.texture,G=n.get(R),X=n.get(v);R.addEventListener("dispose",x);const J=R.textures,at=R.isWebGLCubeRenderTarget===!0,ct=J.length>1;if(ct||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,a.memory.textures++),at){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let et=0;et<v.mipmaps.length;et++)G.__webglFramebuffer[j][et]=i.createFramebuffer()}else G.__webglFramebuffer[j]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)G.__webglFramebuffer[j]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ct)for(let j=0,et=J.length;j<et;j++){const ft=n.get(J[j]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&pe(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){const et=J[j];G.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[j]);const ft=r.convert(et.format,et.colorSpace),Rt=r.convert(et.type),mt=M(et.internalFormat,ft,Rt,et.normalized,et.colorSpace,R.isXRRenderTarget===!0),ut=Qt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,G.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),$t(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let et=0;et<v.mipmaps.length;et++)bt(G.__webglFramebuffer[j][et],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,et);else bt(G.__webglFramebuffer[j],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(v)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let j=0,et=J.length;j<et;j++){const ft=J[j],Rt=n.get(ft);let mt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,Rt.__webglTexture),Mt(mt,ft),bt(G.__webglFramebuffer,R,ft,i.COLOR_ATTACHMENT0+j,mt,0),p(ft)&&b(mt)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,X.__webglTexture),Mt(j,v),v.mipmaps&&v.mipmaps.length>0)for(let et=0;et<v.mipmaps.length;et++)bt(G.__webglFramebuffer[et],R,v,i.COLOR_ATTACHMENT0,j,et);else bt(G.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,j,0);p(v)&&b(j),e.unbindTexture()}R.depthBuffer&&Ot(R)}function Wt(R){const v=R.textures;for(let G=0,X=v.length;G<X;G++){const J=v[G];if(p(J)){const at=w(R),ct=n.get(J).__webglTexture;e.bindTexture(at,ct),b(at),e.unbindTexture()}}}const jt=[],ae=[];function de(R){if(R.samples>0){if(pe(R)===!1){const v=R.textures,G=R.width,X=R.height;let J=i.COLOR_BUFFER_BIT;const at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(R),j=v.length>1;if(j)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);const et=R.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ft]);const Rt=n.get(v[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,G,X,0,0,G,X,J,i.NEAREST),l===!0&&(jt.length=0,ae.length=0,jt.push(i.COLOR_ATTACHMENT0+ft),R.depthBuffer&&R.resolveDepthBuffer===!1&&(jt.push(at),ae.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ft]);const Rt=n.get(v[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Qt(R){return Math.min(s.maxSamples,R.samples)}function pe(R){const v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(R){const v=a.render.frame;f.get(R)!==v&&(f.set(R,v),R.update())}function ze(R,v){const G=R.colorSpace,X=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==dr&&G!==Vn&&(Zt.getTransfer(G)===ee?(X!==rn||J!==$e)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",G)),v}function te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=$,this.getTextureUnits=Z,this.setTextureUnits=k,this.setTexture2D=A,this.setTexture2DArray=L,this.setTexture3D=U,this.setTextureCube=O,this.rebindTextures=Dt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function gM(i,t){function e(n,s=Vn){let r;const a=Zt.getTransfer(s);if(n===$e)return i.UNSIGNED_BYTE;if(n===To)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ro)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bc)return i.BYTE;if(n===zc)return i.SHORT;if(n===ms)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===xn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===Hc)return i.ALPHA;if(n===Vc)return i.RGB;if(n===rn)return i.RGBA;if(n===In)return i.DEPTH_COMPONENT;if(n===oi)return i.DEPTH_STENCIL;if(n===Co)return i.RED;if(n===Po)return i.RED_INTEGER;if(n===ui)return i.RG;if(n===Io)return i.RG_INTEGER;if(n===Lo)return i.RGBA_INTEGER;if(n===ir||n===sr||n===rr||n===ar)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Da||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===Ba||n===za||n===ka||n===cr||n===Ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Oa)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===za)return r.COMPRESSED_R11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===cr)return r.COMPRESSED_RG11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ha||n===Va||n===Wa||n===Xa||n===$a||n===qa||n===Ya||n===Za||n===Ka||n===Ja||n===ja||n===Qa||n===to||n===eo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ha)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ya)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===to)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===no||n===io||n===so)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===no)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===so)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ro||n===ao||n===hr||n===oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const _M=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new th(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vn({vertexShader:_M,fragmentShader:xM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MM extends mi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,u=null,g=null;const _=typeof XRWebGLBinding<"u",m=new vM,p={},b=e.getContextAttributes();let w=null,M=null;const T=[],y=[],C=new Bt;let x=null;const E=new Xe;E.viewport=new ue;const P=new Xe;P.viewport=new ue;const I=[E,P],N=new Cg;let $=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let rt=T[K];return rt===void 0&&(rt=new qr,T[K]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(K){let rt=T[K];return rt===void 0&&(rt=new qr,T[K]=rt),rt.getGripSpace()},this.getHand=function(K){let rt=T[K];return rt===void 0&&(rt=new qr,T[K]=rt),rt.getHandSpace()};function k(K){const rt=y.indexOf(K.inputSource);if(rt===-1)return;const nt=T[rt];nt!==void 0&&(nt.update(K.inputSource,K.frame,c||a),nt.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",H);for(let K=0;K<T.length;K++){const rt=y[K];rt!==null&&(y[K]=null,T[K].disconnect(rt))}$=null,Z=null,m.reset();for(const K in p)delete p[K];t.setRenderTarget(w),u=null,h=null,d=null,s=null,M=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",q),s.addEventListener("inputsourceschange",H),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,dt=null,Et=null;b.depth&&(Et=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=b.stencil?oi:In,dt=b.stencil?gs:xn);const bt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(bt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new _n(h.textureWidth,h.textureHeight,{format:rn,type:$e,depthTexture:new qi(h.textureWidth,h.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const nt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new _n(u.framebufferWidth,u.framebufferHeight,{format:rn,type:$e,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(K){for(let rt=0;rt<K.removed.length;rt++){const nt=K.removed[rt],dt=y.indexOf(nt);dt>=0&&(y[dt]=null,T[dt].disconnect(nt))}for(let rt=0;rt<K.added.length;rt++){const nt=K.added[rt];let dt=y.indexOf(nt);if(dt===-1){for(let bt=0;bt<T.length;bt++)if(bt>=y.length){y.push(nt),dt=bt;break}else if(y[bt]===null){y[bt]=nt,dt=bt;break}if(dt===-1)break}const Et=T[dt];Et&&Et.connect(nt)}}const A=new B,L=new B;function U(K,rt,nt){A.setFromMatrixPosition(rt.matrixWorld),L.setFromMatrixPosition(nt.matrixWorld);const dt=A.distanceTo(L),Et=rt.projectionMatrix.elements,bt=nt.projectionMatrix.elements,$t=Et[14]/(Et[10]-1),zt=Et[14]/(Et[10]+1),Ot=(Et[9]+1)/Et[5],Dt=(Et[9]-1)/Et[5],Ut=(Et[8]-1)/Et[0],Wt=(bt[8]+1)/bt[0],jt=$t*Ut,ae=$t*Wt,de=dt/(-Ut+Wt),Qt=de*-Ut;if(rt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Qt),K.translateZ(de),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Et[10]===-1)K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const pe=$t+de,D=zt+de,ze=jt-Qt,te=ae+(dt-Qt),R=Ot*zt/D*pe,v=Dt*zt/D*pe;K.projectionMatrix.makePerspective(ze,te,R,v,pe,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function O(K,rt){rt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(rt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let rt=K.near,nt=K.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),N.near=P.near=E.near=rt,N.far=P.far=E.far=nt,($!==N.near||Z!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),$=N.near,Z=N.far),N.layers.mask=K.layers.mask|6,E.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;const dt=K.parent,Et=N.cameras;O(N,dt);for(let bt=0;bt<Et.length;bt++)O(Et[bt],dt);Et.length===2?U(N,E,P):N.projectionMatrix.copy(E.projectionMatrix),st(K,N,dt)};function st(K,rt,nt){nt===null?K.matrix.copy(rt.matrixWorld):(K.matrix.copy(nt.matrixWorld),K.matrix.invert(),K.matrix.multiply(rt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ho*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&u===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(K){return p[K]};let ot=null;function Lt(K,rt){if(f=rt.getViewerPose(c||a),g=rt,f!==null){const nt=f.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let dt=!1;nt.length!==N.cameras.length&&(N.cameras.length=0,dt=!0);for(let zt=0;zt<nt.length;zt++){const Ot=nt[zt];let Dt=null;if(u!==null)Dt=u.getViewport(Ot);else{const Wt=d.getViewSubImage(h,Ot);Dt=Wt.viewport,zt===0&&(t.setRenderTargetTextures(M,Wt.colorTexture,Wt.depthStencilTexture),t.setRenderTarget(M))}let Ut=I[zt];Ut===void 0&&(Ut=new Xe,Ut.layers.enable(zt),Ut.viewport=new ue,I[zt]=Ut),Ut.matrix.fromArray(Ot.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Ot.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),zt===0&&(N.matrix.copy(Ut.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),dt===!0&&N.cameras.push(Ut)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const zt=d.getDepthInformation(nt[0]);zt&&zt.isValid&&zt.texture&&m.init(zt,s.renderState)}if(Et&&Et.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let zt=0;zt<nt.length;zt++){const Ot=nt[zt].camera;if(Ot){let Dt=p[Ot];Dt||(Dt=new th,p[Ot]=Dt);const Ut=d.getCameraImage(Ot);Dt.sourceTexture=Ut}}}}for(let nt=0;nt<T.length;nt++){const dt=y[nt],Et=T[nt];dt!==null&&Et!==void 0&&Et.update(dt,rt,c||a)}ot&&ot(K,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const Mt=new rh;Mt.setAnimationLoop(Lt),this.setAnimationLoop=function(K){ot=K},this.dispose=function(){}}}const bM=new ie,fh=new kt;fh.set(-1,0,0,0,1,0,0,0,1);function SM(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,nh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,w,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&u(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),w=b.envMap,M=b.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(bM.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(fh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yM(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const y=T.program;n.uniformBlockBinding(M,y)}function c(M,T){let y=s[M.id];y===void 0&&(m(M),y=f(M),s[M.id]=y,M.addEventListener("dispose",b));const C=T.program;n.updateUBOMapping(M,C);const x=t.render.frame;r[M.id]!==x&&(h(M),r[M.id]=x)}function f(M){const T=d();M.__bindingPointIndex=T;const y=i.createBuffer(),C=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const T=s[M.id],y=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let x=0,E=y.length;x<E;x++){const P=y[x];if(Array.isArray(P))for(let I=0,N=P.length;I<N;I++)u(P[I],x,I,C);else u(P,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,T,y,C){if(_(M,T,y,C)===!0){const x=M.__offset,E=M.value;if(Array.isArray(E)){let P=0;for(let I=0;I<E.length;I++){const N=E[I],$=p(N);g(N,M.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function g(M,T,y){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,y)}function _(M,T,y,C){const x=M.value,E=T+"_"+y;if(C[E]===void 0)return typeof x=="number"||typeof x=="boolean"?C[E]=x:ArrayBuffer.isView(x)?C[E]=x.slice():C[E]=x.clone(),!0;{const P=C[E];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return C[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(M){const T=M.uniforms;let y=0;const C=16;for(let E=0,P=T.length;E<P;E++){const I=Array.isArray(T[E])?T[E]:[T[E]];for(let N=0,$=I.length;N<$;N++){const Z=I[N],k=Array.isArray(Z.value)?Z.value:[Z.value];for(let q=0,H=k.length;q<H;q++){const A=k[q],L=p(A),U=y%C,O=U%L.boundary,st=U+O;y+=O,st!==0&&C-st<L.storage&&(y+=C-st),Z.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=y,y+=L.storage}}}const x=y%C;return x>0&&(y+=C-x),M.__size=y,M.__cache={},this}function p(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",M),T}function b(M){const T=M.target;T.removeEventListener("dispose",b);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function w(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}const EM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hn=null;function wM(){return hn===null&&(hn=new Jc(EM,16,16,ui,Pn),hn.name="DFG_LUT",hn.minFilter=De,hn.magFilter=De,hn.wrapS=Tn,hn.wrapT=Tn,hn.generateMipmaps=!1,hn.needsUpdate=!0),hn}class AM{constructor(t={}){const{canvas:e=zm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:u=$e}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=u,m=new Set([Lo,Io,Po]),p=new Set([$e,xn,ms,gs,To,Ro]),b=new Uint32Array(4),w=new Int32Array(4),M=new B;let T=null,y=null;const C=[],x=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,N=null,$=null,Z=null,k=null;this._outputColorSpace=We;let q=0,H=0,A=null,L=-1,U=null;const O=new ue,st=new ue;let ot=null;const Lt=new Gt(0);let Mt=0,K=e.width,rt=e.height,nt=1,dt=null,Et=null;const bt=new ue(0,0,K,rt),$t=new ue(0,0,K,rt);let zt=!1;const Ot=new zo;let Dt=!1,Ut=!1;const Wt=new ie,jt=new B,ae=new ue,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function pe(){return A===null?nt:1}let D=n;function ze(S,z){return e.getContext(S,z)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yo}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",an,!1),D===null){const z="webgl2";if(D=ze(z,S),D===null)throw ze(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Yt("WebGLRenderer: "+S.message),S}let te,R,v,G,X,J,at,ct,j,et,ft,Rt,mt,ut,It,Nt,Ht,F,lt,Q,pt,vt,it;function Tt(){te=new w1(D),te.init(),pt=new gM(D,te),R=new _1(D,te,t,pt),v=new pM(D,te),R.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),$=D.createFramebuffer(),Z=D.createFramebuffer(),k=D.createFramebuffer(),G=new R1(D),X=new tM,J=new mM(D,te,v,X,R,pt,G),at=new E1(P),ct=new Lg(D),vt=new m1(D,ct),j=new A1(D,ct,G,vt),et=new P1(D,j,ct,vt,G),F=new C1(D,R,J),It=new x1(X),ft=new Qv(P,at,te,R,vt,It),Rt=new SM(P,X),mt=new nM,ut=new lM(te),Ht=new p1(P,at,v,et,g,l),Nt=new uM(P,et,R),it=new yM(D,G,R,v),lt=new g1(D,te,G),Q=new T1(D,te,G),G.programs=ft.programs,P.capabilities=R,P.extensions=te,P.properties=X,P.renderLists=mt,P.shadowMap=Nt,P.state=v,P.info=G}Tt(),_!==$e&&(E=new L1(_,e.width,e.height,o,s,r));const wt=new MM(P,D);this.xr=wt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(S){S!==void 0&&(nt=S,this.setSize(K,rt,!1))},this.getSize=function(S){return S.set(K,rt)},this.setSize=function(S,z,Y=!0){if(wt.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,rt=z,e.width=Math.floor(S*nt),e.height=Math.floor(z*nt),Y===!0&&(e.style.width=S+"px",e.style.height=z+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(K*nt,rt*nt).floor()},this.setDrawingBufferSize=function(S,z,Y){K=S,rt=z,nt=Y,e.width=Math.floor(S*Y),e.height=Math.floor(z*Y),this.setViewport(0,0,S,z)},this.setEffects=function(S){if(_===$e){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let z=0;z<S.length;z++)if(S[z].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(O)},this.getViewport=function(S){return S.copy(bt)},this.setViewport=function(S,z,Y,V){S.isVector4?bt.set(S.x,S.y,S.z,S.w):bt.set(S,z,Y,V),v.viewport(O.copy(bt).multiplyScalar(nt).round())},this.getScissor=function(S){return S.copy($t)},this.setScissor=function(S,z,Y,V){S.isVector4?$t.set(S.x,S.y,S.z,S.w):$t.set(S,z,Y,V),v.scissor(st.copy($t).multiplyScalar(nt).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(S){v.setScissorTest(zt=S)},this.setOpaqueSort=function(S){dt=S},this.setTransparentSort=function(S){Et=S},this.getClearColor=function(S){return S.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,Y=!0){let V=0;if(S){let W=!1;if(A!==null){const xt=A.texture.format;W=m.has(xt)}if(W){const xt=A.texture.type,yt=p.has(xt),_t=Ht.getClearColor(),At=Ht.getClearAlpha(),Ct=_t.r,Vt=_t.g,qt=_t.b;yt?(b[0]=Ct,b[1]=Vt,b[2]=qt,b[3]=At,D.clearBufferuiv(D.COLOR,0,b)):(w[0]=Ct,w[1]=Vt,w[2]=qt,w[3]=At,D.clearBufferiv(D.COLOR,0,w))}else V|=D.COLOR_BUFFER_BIT}z&&(V|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),N=S},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",an,!1),Ht.dispose(),mt.dispose(),ut.dispose(),X.dispose(),at.dispose(),et.dispose(),vt.dispose(),it.dispose(),ft.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",sl),wt.removeEventListener("sessionend",rl),Jn.stop()};function me(S){S.preventDefault(),pr("WebGLRenderer: Context Lost."),I=!0}function ce(){pr("WebGLRenderer: Context Restored."),I=!1;const S=G.autoReset,z=Nt.enabled,Y=Nt.autoUpdate,V=Nt.needsUpdate,W=Nt.type;Tt(),G.autoReset=S,Nt.enabled=z,Nt.autoUpdate=Y,Nt.needsUpdate=V,Nt.type=W}function an(S){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function on(S){const z=S.target;z.removeEventListener("dispose",on),Vp(z)}function Vp(S){Wp(S),X.remove(S)}function Wp(S){const z=X.get(S).programs;z!==void 0&&(z.forEach(function(Y){ft.releaseProgram(Y)}),S.isShaderMaterial&&ft.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,Y,V,W,xt){z===null&&(z=de);const yt=W.isMesh&&W.matrixWorld.determinantAffine()<0,_t=qp(S,z,Y,V,W);v.setMaterial(V,yt);let At=Y.index,Ct=1;if(V.wireframe===!0){if(At=j.getWireframeAttribute(Y),At===void 0)return;Ct=2}const Vt=Y.drawRange,qt=Y.attributes.position;let Pt=Vt.start*Ct,se=(Vt.start+Vt.count)*Ct;xt!==null&&(Pt=Math.max(Pt,xt.start*Ct),se=Math.min(se,(xt.start+xt.count)*Ct)),At!==null?(Pt=Math.max(Pt,0),se=Math.min(se,At.count)):qt!=null&&(Pt=Math.max(Pt,0),se=Math.min(se,qt.count));const _e=se-Pt;if(_e<0||_e===1/0)return;vt.setup(W,V,_t,Y,At);let ge,oe=lt;if(At!==null&&(ge=ct.get(At),oe=Q,oe.setIndex(ge)),W.isMesh)V.wireframe===!0?(v.setLineWidth(V.wireframeLinewidth*pe()),oe.setMode(D.LINES)):oe.setMode(D.TRIANGLES);else if(W.isLine){let Ce=V.linewidth;Ce===void 0&&(Ce=1),v.setLineWidth(Ce*pe()),W.isLineSegments?oe.setMode(D.LINES):W.isLineLoop?oe.setMode(D.LINE_LOOP):oe.setMode(D.LINE_STRIP)}else W.isPoints?oe.setMode(D.POINTS):W.isSprite&&oe.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(te.get("WEBGL_multi_draw"))oe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ce=W._multiDrawStarts,St=W._multiDrawCounts,Ge=W._multiDrawCount,Jt=At?ct.get(At).bytesPerElement:1,qe=X.get(V).currentProgram.getUniforms();for(let ln=0;ln<Ge;ln++)qe.setValue(D,"_gl_DrawID",ln),oe.render(Ce[ln]/Jt,St[ln])}else if(W.isInstancedMesh)oe.renderInstances(Pt,_e,W.count);else if(Y.isInstancedBufferGeometry){const Ce=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,St=Math.min(Y.instanceCount,Ce);oe.renderInstances(Pt,_e,St)}else oe.render(Pt,_e)};function il(S,z,Y){S.transparent===!0&&S.side===An&&S.forceSinglePass===!1?(S.side=ke,S.needsUpdate=!0,Ts(S,z,Y),S.side=qn,S.needsUpdate=!0,Ts(S,z,Y),S.side=An):Ts(S,z,Y)}this.compile=function(S,z,Y=null){Y===null&&(Y=S),y=ut.get(Y),y.init(z),x.push(y),Y.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),S!==Y&&S.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),y.setupLights();const V=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xt=W.material;if(xt)if(Array.isArray(xt))for(let yt=0;yt<xt.length;yt++){const _t=xt[yt];il(_t,Y,W),V.add(_t)}else il(xt,Y,W),V.add(xt)}),y=x.pop(),V},this.compileAsync=function(S,z,Y=null){const V=this.compile(S,z,Y);return new Promise(W=>{function xt(){if(V.forEach(function(yt){X.get(yt).currentProgram.isReady()&&V.delete(yt)}),V.size===0){W(S);return}setTimeout(xt,10)}te.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Nr=null;function Xp(S){Nr&&Nr(S)}function sl(){Jn.stop()}function rl(){Jn.start()}const Jn=new rh;Jn.setAnimationLoop(Xp),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(S){Nr=S,wt.setAnimationLoop(S),S===null?Jn.stop():Jn.start()},wt.addEventListener("sessionstart",sl),wt.addEventListener("sessionend",rl),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(S,z);const Y=wt.enabled===!0&&wt.isPresenting===!0,V=E!==null&&(A===null||Y)&&E.begin(P,A);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(z),z=wt.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,z,A),y=ut.get(S,x.length),y.init(z),y.state.textureUnits=J.getTextureUnits(),x.push(y),Wt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ot.setFromProjectionMatrix(Wt,mn,z.reversedDepth),Ut=this.localClippingEnabled,Dt=It.init(this.clippingPlanes,Ut),T=mt.get(S,C.length),T.init(),C.push(T),wt.enabled===!0&&wt.isPresenting===!0){const yt=P.xr.getDepthSensingMesh();yt!==null&&Fr(yt,z,-1/0,P.sortObjects)}Fr(S,z,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(dt,Et,z.reversedDepth),Qt=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,Qt&&Ht.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Dt===!0&&It.beginShadows();const W=y.state.shadowsArray;if(Nt.render(W,S,z),Dt===!0&&It.endShadows(),(V&&E.hasRenderPass())===!1){const yt=T.opaque,_t=T.transmissive;if(y.setupLights(),z.isArrayCamera){const At=z.cameras;if(_t.length>0)for(let Ct=0,Vt=At.length;Ct<Vt;Ct++){const qt=At[Ct];ol(yt,_t,S,qt)}Qt&&Ht.render(S);for(let Ct=0,Vt=At.length;Ct<Vt;Ct++){const qt=At[Ct];al(T,S,qt,qt.viewport)}}else _t.length>0&&ol(yt,_t,S,z),Qt&&Ht.render(S),al(T,S,z)}A!==null&&H===0&&(J.updateMultisampleRenderTarget(A),J.updateRenderTargetMipmap(A)),V&&E.end(P),S.isScene===!0&&S.onAfterRender(P,S,z),vt.resetDefaultState(),L=-1,U=null,x.pop(),x.length>0?(y=x[x.length-1],J.setTextureUnits(y.state.textureUnits),Dt===!0&&It.setGlobalState(P.clippingPlanes,y.state.camera)):y=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,N!==null&&N.renderEnd()};function Fr(S,z,Y,V){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLightProbeGrid)y.pushLightProbeGrid(S);else if(S.isLight)y.pushLight(S),S.castShadow&&y.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ot.intersectsSprite(S)){V&&ae.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Wt);const yt=et.update(S),_t=S.material;_t.visible&&T.push(S,yt,_t,Y,ae.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ot.intersectsObject(S))){const yt=et.update(S),_t=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ae.copy(S.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),ae.copy(yt.boundingSphere.center)),ae.applyMatrix4(S.matrixWorld).applyMatrix4(Wt)),Array.isArray(_t)){const At=yt.groups;for(let Ct=0,Vt=At.length;Ct<Vt;Ct++){const qt=At[Ct],Pt=_t[qt.materialIndex];Pt&&Pt.visible&&T.push(S,yt,Pt,Y,ae.z,qt)}}else _t.visible&&T.push(S,yt,_t,Y,ae.z,null)}}const xt=S.children;for(let yt=0,_t=xt.length;yt<_t;yt++)Fr(xt[yt],z,Y,V)}function al(S,z,Y,V){const{opaque:W,transmissive:xt,transparent:yt}=S;y.setupLightsView(Y),Dt===!0&&It.setGlobalState(P.clippingPlanes,Y),V&&v.viewport(O.copy(V)),W.length>0&&As(W,z,Y),xt.length>0&&As(xt,z,Y),yt.length>0&&As(yt,z,Y),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function ol(S,z,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[V.id]===void 0){const Pt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[V.id]=new _n(1,1,{generateMipmaps:!0,type:Pt?Pn:$e,minFilter:ai,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const xt=y.state.transmissionRenderTarget[V.id],yt=V.viewport||O;xt.setSize(yt.z*P.transmissionResolutionScale,yt.w*P.transmissionResolutionScale);const _t=P.getRenderTarget(),At=P.getActiveCubeFace(),Ct=P.getActiveMipmapLevel();P.setRenderTarget(xt),P.getClearColor(Lt),Mt=P.getClearAlpha(),Mt<1&&P.setClearColor(16777215,.5),P.clear(),Qt&&Ht.render(Y);const Vt=P.toneMapping;P.toneMapping=gn;const qt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),y.setupLightsView(V),Dt===!0&&It.setGlobalState(P.clippingPlanes,V),As(S,Y,V),J.updateMultisampleRenderTarget(xt),J.updateRenderTargetMipmap(xt),te.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let se=0,_e=z.length;se<_e;se++){const ge=z[se],{object:oe,geometry:Ce,material:St,group:Ge}=ge;if(St.side===An&&oe.layers.test(V.layers)){const Jt=St.side;St.side=ke,St.needsUpdate=!0,ll(oe,Y,V,Ce,St,Ge),St.side=Jt,St.needsUpdate=!0,Pt=!0}}Pt===!0&&(J.updateMultisampleRenderTarget(xt),J.updateRenderTargetMipmap(xt))}P.setRenderTarget(_t,At,Ct),P.setClearColor(Lt,Mt),qt!==void 0&&(V.viewport=qt),P.toneMapping=Vt}function As(S,z,Y){const V=z.isScene===!0?z.overrideMaterial:null;for(let W=0,xt=S.length;W<xt;W++){const yt=S[W],{object:_t,geometry:At,group:Ct}=yt;let Vt=yt.material;Vt.allowOverride===!0&&V!==null&&(Vt=V),_t.layers.test(Y.layers)&&ll(_t,z,Y,At,Vt,Ct)}}function ll(S,z,Y,V,W,xt){S.onBeforeRender(P,z,Y,V,W,xt),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(P,z,Y,V,S,xt),W.transparent===!0&&W.side===An&&W.forceSinglePass===!1?(W.side=ke,W.needsUpdate=!0,P.renderBufferDirect(Y,z,V,W,S,xt),W.side=qn,W.needsUpdate=!0,P.renderBufferDirect(Y,z,V,W,S,xt),W.side=An):P.renderBufferDirect(Y,z,V,W,S,xt),S.onAfterRender(P,z,Y,V,W,xt)}function Ts(S,z,Y){z.isScene!==!0&&(z=de);const V=X.get(S),W=y.state.lights,xt=y.state.shadowsArray,yt=W.state.version,_t=ft.getParameters(S,W.state,xt,z,Y,y.state.lightProbeGridArray),At=ft.getProgramCacheKey(_t);let Ct=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?z.environment:null,V.fog=z.fog;const Vt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=at.get(S.envMap||V.environment,Vt),V.envMapRotation=V.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Ct===void 0&&(S.addEventListener("dispose",on),Ct=new Map,V.programs=Ct);let qt=Ct.get(At);if(qt!==void 0){if(V.currentProgram===qt&&V.lightsStateVersion===yt)return hl(S,_t),qt}else _t.uniforms=ft.getUniforms(S),N!==null&&S.isNodeMaterial&&N.build(S,Y,_t),S.onBeforeCompile(_t,P),qt=ft.acquireProgram(_t,At),Ct.set(At,qt),V.uniforms=_t.uniforms;const Pt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pt.clippingPlanes=It.uniform),hl(S,_t),V.needsLights=Zp(S),V.lightsStateVersion=yt,V.needsLights&&(Pt.ambientLightColor.value=W.state.ambient,Pt.lightProbe.value=W.state.probe,Pt.directionalLights.value=W.state.directional,Pt.directionalLightShadows.value=W.state.directionalShadow,Pt.spotLights.value=W.state.spot,Pt.spotLightShadows.value=W.state.spotShadow,Pt.rectAreaLights.value=W.state.rectArea,Pt.ltc_1.value=W.state.rectAreaLTC1,Pt.ltc_2.value=W.state.rectAreaLTC2,Pt.pointLights.value=W.state.point,Pt.pointLightShadows.value=W.state.pointShadow,Pt.hemisphereLights.value=W.state.hemi,Pt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pt.spotLightMatrix.value=W.state.spotLightMatrix,Pt.spotLightMap.value=W.state.spotLightMap,Pt.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=y.state.lightProbeGridArray.length>0,V.currentProgram=qt,V.uniformsList=null,qt}function cl(S){if(S.uniformsList===null){const z=S.currentProgram.getUniforms();S.uniformsList=lr.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function hl(S,z){const Y=X.get(S);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function $p(S,z){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(z.matrixWorld);for(let Y=0,V=S.length;Y<V;Y++){const W=S[Y];if(W.texture!==null&&W.boundingBox.containsPoint(M))return W}return null}function qp(S,z,Y,V,W){z.isScene!==!0&&(z=de),J.resetTextureUnits();const xt=z.fog,yt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?z.environment:null,_t=A===null?P.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Zt.workingColorSpace,At=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ct=at.get(V.envMap||yt,At),Vt=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,qt=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pt=!!Y.morphAttributes.position,se=!!Y.morphAttributes.normal,_e=!!Y.morphAttributes.color;let ge=gn;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ge=P.toneMapping);const oe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ce=oe!==void 0?oe.length:0,St=X.get(V),Ge=y.state.lights;if(Dt===!0&&(Ut===!0||S!==U)){const he=S===U&&V.id===L;It.setState(V,S,he)}let Jt=!1;V.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Ge.state.version||St.outputColorSpace!==_t||W.isBatchedMesh&&St.batching===!1||!W.isBatchedMesh&&St.batching===!0||W.isBatchedMesh&&St.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&St.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&St.instancing===!1||!W.isInstancedMesh&&St.instancing===!0||W.isSkinnedMesh&&St.skinning===!1||!W.isSkinnedMesh&&St.skinning===!0||W.isInstancedMesh&&St.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&St.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&St.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&St.instancingMorph===!1&&W.morphTexture!==null||St.envMap!==Ct||V.fog===!0&&St.fog!==xt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==It.numPlanes||St.numIntersection!==It.numIntersection)||St.vertexAlphas!==Vt||St.vertexTangents!==qt||St.morphTargets!==Pt||St.morphNormals!==se||St.morphColors!==_e||St.toneMapping!==ge||St.morphTargetsCount!==Ce||!!St.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(Jt=!0):(Jt=!0,St.__version=V.version);let qe=St.currentProgram;Jt===!0&&(qe=Ts(V,z,W),N&&V.isNodeMaterial&&N.onUpdateProgram(V,qe,St));let ln=!1,Ln=!1,xi=!1;const le=qe.getUniforms(),xe=St.uniforms;if(v.useProgram(qe.program)&&(ln=!0,Ln=!0,xi=!0),V.id!==L&&(L=V.id,Ln=!0),St.needsLights){const he=$p(y.state.lightProbeGridArray,W);St.lightProbeGrid!==he&&(St.lightProbeGrid=he,Ln=!0)}if(ln||U!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),le.setValue(D,"projectionMatrix",S.projectionMatrix),le.setValue(D,"viewMatrix",S.matrixWorldInverse);const Un=le.map.cameraPosition;Un!==void 0&&Un.setValue(D,jt.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&le.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&le.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),U!==S&&(U=S,Ln=!0,xi=!0)}if(St.needsLights&&(Ge.state.directionalShadowMap.length>0&&le.setValue(D,"directionalShadowMap",Ge.state.directionalShadowMap,J),Ge.state.spotShadowMap.length>0&&le.setValue(D,"spotShadowMap",Ge.state.spotShadowMap,J),Ge.state.pointShadowMap.length>0&&le.setValue(D,"pointShadowMap",Ge.state.pointShadowMap,J)),W.isSkinnedMesh){le.setOptional(D,W,"bindMatrix"),le.setOptional(D,W,"bindMatrixInverse");const he=W.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),le.setValue(D,"boneTexture",he.boneTexture,J))}W.isBatchedMesh&&(le.setOptional(D,W,"batchingTexture"),le.setValue(D,"batchingTexture",W._matricesTexture,J),le.setOptional(D,W,"batchingIdTexture"),le.setValue(D,"batchingIdTexture",W._indirectTexture,J),le.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&le.setValue(D,"batchingColorTexture",W._colorsTexture,J));const Dn=Y.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&F.update(W,Y,qe),(Ln||St.receiveShadow!==W.receiveShadow)&&(St.receiveShadow=W.receiveShadow,le.setValue(D,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&z.environment!==null&&(xe.envMapIntensity.value=z.environmentIntensity),xe.dfgLUT!==void 0&&(xe.dfgLUT.value=wM()),Ln){if(le.setValue(D,"toneMappingExposure",P.toneMappingExposure),St.needsLights&&Yp(xe,xi),xt&&V.fog===!0&&Rt.refreshFogUniforms(xe,xt),Rt.refreshMaterialUniforms(xe,V,nt,rt,y.state.transmissionRenderTarget[S.id]),St.needsLights&&St.lightProbeGrid){const he=St.lightProbeGrid;xe.probesSH.value=he.texture,xe.probesMin.value.copy(he.boundingBox.min),xe.probesMax.value.copy(he.boundingBox.max),xe.probesResolution.value.copy(he.resolution)}lr.upload(D,cl(St),xe,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(lr.upload(D,cl(St),xe,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&le.setValue(D,"center",W.center),le.setValue(D,"modelViewMatrix",W.modelViewMatrix),le.setValue(D,"normalMatrix",W.normalMatrix),le.setValue(D,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const he=V.uniformsGroups;for(let Un=0,vi=he.length;Un<vi;Un++){const dl=he[Un];it.update(dl,qe),it.bind(dl,qe)}}return qe}function Yp(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Zp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,z,Y){const V=X.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(S.texture).__webglTexture=z,X.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){const Y=X.get(S);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,Y=0){A=S,q=z,H=Y;let V=null,W=!1,xt=!1;if(S){const _t=X.get(S);if(_t.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(D.FRAMEBUFFER,_t.__webglFramebuffer),O.copy(S.viewport),st.copy(S.scissor),ot=S.scissorTest,v.viewport(O),v.scissor(st),v.setScissorTest(ot),L=-1;return}else if(_t.__webglFramebuffer===void 0)J.setupRenderTarget(S);else if(_t.__hasExternalTextures)J.rebindTextures(S,X.get(S.texture).__webglTexture,X.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Vt=S.depthTexture;if(_t.__boundDepthTexture!==Vt){if(Vt!==null&&X.has(Vt)&&(S.width!==Vt.image.width||S.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(S)}}const At=S.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(xt=!0);const Ct=X.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ct[z])?V=Ct[z][Y]:V=Ct[z],W=!0):S.samples>0&&J.useMultisampledRTT(S)===!1?V=X.get(S).__webglMultisampledFramebuffer:Array.isArray(Ct)?V=Ct[Y]:V=Ct,O.copy(S.viewport),st.copy(S.scissor),ot=S.scissorTest}else O.copy(bt).multiplyScalar(nt).floor(),st.copy($t).multiplyScalar(nt).floor(),ot=zt;if(Y!==0&&(V=$),v.bindFramebuffer(D.FRAMEBUFFER,V)&&v.drawBuffers(S,V),v.viewport(O),v.scissor(st),v.setScissorTest(ot),W){const _t=X.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,_t.__webglTexture,Y)}else if(xt){const _t=z;for(let At=0;At<S.textures.length;At++){const Ct=X.get(S.textures[At]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+At,Ct.__webglTexture,Y,_t)}}else if(S!==null&&Y!==0){const _t=X.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_t.__webglTexture,Y)}L=-1},this.readRenderTargetPixels=function(S,z,Y,V,W,xt,yt,_t=0){if(!(S&&S.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(At=At[yt]),At){v.bindFramebuffer(D.FRAMEBUFFER,At);try{const Ct=S.textures[_t],Vt=Ct.format,qt=Ct.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_t),!R.textureFormatReadable(Vt)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(qt)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-V&&Y>=0&&Y<=S.height-W&&D.readPixels(z,Y,V,W,pt.convert(Vt),pt.convert(qt),xt)}finally{const Ct=A!==null?X.get(A).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(S,z,Y,V,W,xt,yt,_t=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(At=At[yt]),At)if(z>=0&&z<=S.width-V&&Y>=0&&Y<=S.height-W){v.bindFramebuffer(D.FRAMEBUFFER,At);const Ct=S.textures[_t],Vt=Ct.format,qt=Ct.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_t),!R.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.bufferData(D.PIXEL_PACK_BUFFER,xt.byteLength,D.STREAM_READ),D.readPixels(z,Y,V,W,pt.convert(Vt),pt.convert(qt),0);const se=A!==null?X.get(A).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,se);const _e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await km(D,_e,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,xt),D.deleteBuffer(Pt),D.deleteSync(_e),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,Y=0){const V=Math.pow(2,-Y),W=Math.floor(S.image.width*V),xt=Math.floor(S.image.height*V),yt=z!==null?z.x:0,_t=z!==null?z.y:0;J.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,yt,_t,W,xt),v.unbindTexture()},this.copyTextureToTexture=function(S,z,Y=null,V=null,W=0,xt=0){let yt,_t,At,Ct,Vt,qt,Pt,se,_e;const ge=S.isCompressedTexture?S.mipmaps[xt]:S.image;if(Y!==null)yt=Y.max.x-Y.min.x,_t=Y.max.y-Y.min.y,At=Y.isBox3?Y.max.z-Y.min.z:1,Ct=Y.min.x,Vt=Y.min.y,qt=Y.isBox3?Y.min.z:0;else{const xe=Math.pow(2,-W);yt=Math.floor(ge.width*xe),_t=Math.floor(ge.height*xe),S.isDataArrayTexture?At=ge.depth:S.isData3DTexture?At=Math.floor(ge.depth*xe):At=1,Ct=0,Vt=0,qt=0}V!==null?(Pt=V.x,se=V.y,_e=V.z):(Pt=0,se=0,_e=0);const oe=pt.convert(z.format),Ce=pt.convert(z.type);let St;z.isData3DTexture?(J.setTexture3D(z,0),St=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(J.setTexture2DArray(z,0),St=D.TEXTURE_2D_ARRAY):(J.setTexture2D(z,0),St=D.TEXTURE_2D),v.activeTexture(D.TEXTURE0),v.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),v.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),v.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const Ge=v.getParameter(D.UNPACK_ROW_LENGTH),Jt=v.getParameter(D.UNPACK_IMAGE_HEIGHT),qe=v.getParameter(D.UNPACK_SKIP_PIXELS),ln=v.getParameter(D.UNPACK_SKIP_ROWS),Ln=v.getParameter(D.UNPACK_SKIP_IMAGES);v.pixelStorei(D.UNPACK_ROW_LENGTH,ge.width),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge.height),v.pixelStorei(D.UNPACK_SKIP_PIXELS,Ct),v.pixelStorei(D.UNPACK_SKIP_ROWS,Vt),v.pixelStorei(D.UNPACK_SKIP_IMAGES,qt);const xi=S.isDataArrayTexture||S.isData3DTexture,le=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){const xe=X.get(S),Dn=X.get(z),he=X.get(xe.__renderTarget),Un=X.get(Dn.__renderTarget);v.bindFramebuffer(D.READ_FRAMEBUFFER,he.__webglFramebuffer),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let vi=0;vi<At;vi++)xi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,X.get(S).__webglTexture,W,qt+vi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,X.get(z).__webglTexture,xt,_e+vi)),D.blitFramebuffer(Ct,Vt,yt,_t,Pt,se,yt,_t,D.DEPTH_BUFFER_BIT,D.NEAREST);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||X.has(S)){const xe=X.get(S),Dn=X.get(z);v.bindFramebuffer(D.READ_FRAMEBUFFER,Z),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,k);for(let he=0;he<At;he++)xi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xe.__webglTexture,W,qt+he):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xe.__webglTexture,W),le?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dn.__webglTexture,xt,_e+he):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Dn.__webglTexture,xt),W!==0?D.blitFramebuffer(Ct,Vt,yt,_t,Pt,se,yt,_t,D.COLOR_BUFFER_BIT,D.NEAREST):le?D.copyTexSubImage3D(St,xt,Pt,se,_e+he,Ct,Vt,yt,_t):D.copyTexSubImage2D(St,xt,Pt,se,Ct,Vt,yt,_t);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else le?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(St,xt,Pt,se,_e,yt,_t,At,oe,Ce,ge.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(St,xt,Pt,se,_e,yt,_t,At,oe,ge.data):D.texSubImage3D(St,xt,Pt,se,_e,yt,_t,At,oe,Ce,ge):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,xt,Pt,se,yt,_t,oe,Ce,ge.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,xt,Pt,se,ge.width,ge.height,oe,ge.data):D.texSubImage2D(D.TEXTURE_2D,xt,Pt,se,yt,_t,oe,Ce,ge);v.pixelStorei(D.UNPACK_ROW_LENGTH,Ge),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Jt),v.pixelStorei(D.UNPACK_SKIP_PIXELS,qe),v.pixelStorei(D.UNPACK_SKIP_ROWS,ln),v.pixelStorei(D.UNPACK_SKIP_IMAGES,Ln),xt===0&&z.generateMipmaps&&D.generateMipmap(St),v.unbindTexture()},this.initRenderTarget=function(S){X.get(S).__webglFramebuffer===void 0&&J.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?J.setTextureCube(S,0):S.isData3DTexture?J.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?J.setTexture2DArray(S,0):J.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){q=0,H=0,A=null,v.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const uh="0.1.0",ph="goblin",mh="ゴブリン",gh={s:.088,pal:{s:"#6a9a4a",S:"#577f3c",e:"#ff5a5a",k:"#4a3520",b:"#2e2418",p:"#39412e",w:"#7a5a32",W:"#54401f",t:"#e8e0d0",a:"#c23b2e"},layers:[["...........","...........","..kk...kk..","..kk...kk..","...........","..........."],["...........","...........","..pp...pp..","..pp...pp..","...........","..........."],["...........","...........","..pp...pp..","..pp...pp..","...........","..........."],["...........","...........","..ppppppp..","..ppppppp..","...........","..........."],["...........","...........","..bbbbbbb..","..bbbbbbb..","...........","..........."],["...........","..sssssss..","s.sssssss.w","..sssssss..","...........","..........."],["...........","..sssssss..","s.sssssss.w","..sssssss..","...........","..........."],["...........","..sssssss..","ssssssssssw","..sssssss..","...........","..........."],["...........","...........","....sss...w","....sss....","....t.t....","..........."],["...........","...sssss..W",".sssssssssW","...sssss...","....e.e....","..........."],["...........","..aaaaaa..W","..aaaaaaa.W","...aaaaa...","....b.b....","..........."],["...........","...........","....sss....","....SSS....","...........","..........."]]},_h=[],xh="2026-07-03T13:55:06Z",vh="2026-07-03T14:02:24Z",TM={formatVersion:uh,id:ph,name:mh,vox:gh,glow:_h,createdAt:xh,updatedAt:vh},RM=Object.freeze(Object.defineProperty({__proto__:null,createdAt:xh,default:TM,formatVersion:uh,glow:_h,id:ph,name:mh,updatedAt:vh,vox:gh},Symbol.toStringTag,{value:"Module"})),Mh="0.1.0",bh="comduct-models",Sh="2026-07-03T14:02:24Z",yh=["goblin"],CM={formatVersion:Mh,title:bh,updatedAt:Sh,modelOrder:yh},PM=Object.freeze(Object.defineProperty({__proto__:null,default:CM,formatVersion:Mh,modelOrder:yh,title:bh,updatedAt:Sh},Symbol.toStringTag,{value:"Module"})),Eh="0.1.0",wh="battle-axe",Ah="戦斧",Th="weapon",Rh=3,Ch={w:"#7a5a32",i:"#8a93a4",I:"#6a7383",t:"#e9eff8"},Ph=[["..w.."],["..w.."],["..w.."],["..w.."],["tIw.."],["tiw.."],["tIwI."]],Ih=[],Lh={dim:{w:[9,24],h:[12,30]},taper:{tip:[80,200],base:[70,140]}},Dh="2026-07-05T12:00:00Z",Uh="2026-07-05T12:00:00Z",IM={formatVersion:Eh,id:wh,name:Ah,slot:Th,k:Rh,pal:Ch,layers:Ph,glow:Ih,params:Lh,createdAt:Dh,updatedAt:Uh},LM=Object.freeze(Object.defineProperty({__proto__:null,createdAt:Dh,default:IM,formatVersion:Eh,glow:Ih,id:wh,k:Rh,layers:Ph,name:Ah,pal:Ch,params:Lh,slot:Th,updatedAt:Uh},Symbol.toStringTag,{value:"Module"})),Nh="0.1.0",Fh="beast-torso",Oh="獣人の胴",Bh="torso",zh=3,kh={p:"$primary",F:"#52402c",f:"#3a2e1c"},Gh=[[".........",".fff.fff.",".fff.fff.","........."],[".........","..pp.pp..","..pp.pp..","........."],[".........",".ppp.ppp.",".ppp.ppp.","........."],[".........","..FFFFF..","..FFFFF..","........."],[".........",".ppppppp.",".ppppppp.","........."],[".........","ppppppppp","ppppppppp",".ppppppp."],[".........",".FFFFFFF.","..FFFFF..","........."]],Hh=[],Vh={body:[60,220],dim:{w:[15,40],h:[12,36],d:[6,24]},taper:{tip:[70,160],base:[70,150],mid:[70,170]},palette:["primary"]},Wh="2026-07-05T12:00:00Z",Xh="2026-07-05T12:00:00Z",DM={formatVersion:Nh,id:Fh,name:Oh,slot:Bh,k:zh,pal:kh,layers:Gh,glow:Hh,params:Vh,createdAt:Wh,updatedAt:Xh},UM=Object.freeze(Object.defineProperty({__proto__:null,createdAt:Wh,default:DM,formatVersion:Nh,glow:Hh,id:Fh,k:zh,layers:Gh,name:Oh,pal:kh,params:Vh,slot:Bh,updatedAt:Xh},Symbol.toStringTag,{value:"Module"})),$h="0.1.0",qh="cape",Yh="マント",Zh="back",Kh=3,Jh={p:"$primary",d:"#2e2418"},jh=[["pdp.ppp"],["ppdpppp"],["ppppppp"],[".ppppp."],["..ppp.."]],Qh=[],td={dim:{w:[9,27],h:[9,21]},palette:["primary"]},ed="2026-07-05T12:00:00Z",nd="2026-07-05T12:00:00Z",NM={formatVersion:$h,id:qh,name:Yh,slot:Zh,k:Kh,pal:Jh,layers:jh,glow:Qh,params:td,createdAt:ed,updatedAt:nd},FM=Object.freeze(Object.defineProperty({__proto__:null,createdAt:ed,default:NM,formatVersion:$h,glow:Qh,id:qh,k:Kh,layers:jh,name:Yh,pal:Jh,params:td,slot:Zh,updatedAt:nd},Symbol.toStringTag,{value:"Module"})),id="0.1.0",sd="crown",rd="王冠",ad="helm",od=3,ld={g:"#d4af37",G:"#b8952e",j:"$gem"},cd=[[".ggggg.","g.....g","g.....g",".GgGgG."],[".g.g.g.",".......",".......",".g.j.g."]],hd=["$gem"],dd={dim:{w:[12,24],h:[3,12]},palette:["gem"]},fd="2026-07-05T12:00:00Z",ud="2026-07-05T12:00:00Z",OM={formatVersion:id,id:sd,name:rd,slot:ad,k:od,pal:ld,layers:cd,glow:hd,params:dd,createdAt:fd,updatedAt:ud},BM=Object.freeze(Object.defineProperty({__proto__:null,createdAt:fd,default:OM,formatVersion:id,glow:hd,id:sd,k:od,layers:cd,name:rd,pal:ld,params:dd,slot:ad,updatedAt:ud},Symbol.toStringTag,{value:"Module"})),pd="0.1.0",md="dwarf-head",gd="ドワーフの頭",_d="head",xd=3,vd={s:"$skin",S:"#b08858",b:"#8a5a34",B:"#6a4226",e:"#2a2018"},Md=[[".......",".bbbbb.",".bbbbb.",".b.B.b."],[".......",".sssss.","bsesesb","...S..."],[".bbbbb.","bsssssb",".sssss.",".bbbbb."],[".......","..bbb..","..BBB..","......."]],bd=[],Sd={dim:{w:[12,30],h:[9,21],d:[6,18]},palette:["skin"]},yd="2026-07-05T12:00:00Z",Ed="2026-07-05T12:00:00Z",zM={formatVersion:pd,id:md,name:gd,slot:_d,k:xd,pal:vd,layers:Md,glow:bd,params:Sd,createdAt:yd,updatedAt:Ed},kM=Object.freeze(Object.defineProperty({__proto__:null,createdAt:yd,default:zM,formatVersion:pd,glow:bd,id:md,k:xd,layers:Md,name:gd,pal:vd,params:Sd,slot:_d,updatedAt:Ed},Symbol.toStringTag,{value:"Module"})),wd="0.1.0",Ad="elf-head",Td="エルフの頭",Rd="head",Cd=3,Pd={s:"$skin",S:"#c9a06a",h:"#d4af37",H:"#b8952e",e:"#3a5a4a"},Id=[[".......","..sss..","..SsS..","......."],[".......","..sss..","..ese..","......."],[".hhhhh.","sssssss",".sssss.","..hhh.."],[".......","..hhh..","..HHH..","......."]],Ld=[],Dd={dim:{w:[12,27],h:[9,21],d:[6,18]},palette:["skin"]},Ud="2026-07-05T12:00:00Z",Nd="2026-07-05T12:00:00Z",GM={formatVersion:wd,id:Ad,name:Td,slot:Rd,k:Cd,pal:Pd,layers:Id,glow:Ld,params:Dd,createdAt:Ud,updatedAt:Nd},HM=Object.freeze(Object.defineProperty({__proto__:null,createdAt:Ud,default:GM,formatVersion:wd,glow:Ld,id:Ad,k:Cd,layers:Id,name:Td,pal:Pd,params:Dd,slot:Rd,updatedAt:Nd},Symbol.toStringTag,{value:"Module"})),Fd="0.1.0",Od="feather-wings",Bd="白翼",zd="back",kd=3,Gd={b:"#e8ddc4",B:"#c9c2b4"},Hd=[["BB.........BB"],[".BBbbb.bbbBB."],["..bbbb.bbbb.."],["....bb.bb...."]],Vd=[],Wd="wing",Xd={dim:{w:[21,48],h:[9,18]}},$d="2026-07-05T12:00:00Z",qd="2026-07-05T12:00:00Z",VM={formatVersion:Fd,id:Od,name:Bd,slot:zd,k:kd,pal:Gd,layers:Hd,glow:Vd,gaitTag:Wd,params:Xd,createdAt:$d,updatedAt:qd},WM=Object.freeze(Object.defineProperty({__proto__:null,createdAt:$d,default:VM,formatVersion:Fd,gaitTag:Wd,glow:Vd,id:Od,k:kd,layers:Hd,name:Bd,pal:Gd,params:Xd,slot:zd,updatedAt:qd},Symbol.toStringTag,{value:"Module"})),Yd="0.1.0",Zd="full-helm",Kd="重騎士の兜",Jd="helm",jd=3,Qd={i:"#8a93a4",I:"#6a7383",j:"#4e5666"},tf=[[".......",".iiiii.",".iiiii.",".i...i."],[".......",".iiiii.","iI...Ii","......."],[".......","..jjj..","..III..","......."]],ef=[],nf={dim:{w:[12,27],h:[6,15],d:[6,15]}},sf="2026-07-05T12:00:00Z",rf="2026-07-05T12:00:00Z",XM={formatVersion:Yd,id:Zd,name:Kd,slot:Jd,k:jd,pal:Qd,layers:tf,glow:ef,params:nf,createdAt:sf,updatedAt:rf},$M=Object.freeze(Object.defineProperty({__proto__:null,createdAt:sf,default:XM,formatVersion:Yd,glow:ef,id:Zd,k:jd,layers:tf,name:Kd,pal:Qd,params:nf,slot:Jd,updatedAt:rf},Symbol.toStringTag,{value:"Module"})),af="0.1.0",of="gauntlet-arm",lf="籠手の腕",cf="arm",hf=3,df={i:"#8a93a4",I:"#6a7383",p:"$primary"},ff=[["iii","iii"],[".i.",".i."],[".I.",".I."],[".p.",".p."],["iii",".i."]],uf=[],pf="arm",mf={dim:{w:[3,15],h:[9,24],d:[3,9]},taper:{tip:[80,250],base:[60,160],mid:[60,200]},align:"top",palette:["primary"]},gf="2026-07-05T12:00:00Z",_f="2026-07-05T12:00:00Z",qM={formatVersion:af,id:of,name:lf,slot:cf,k:hf,pal:df,layers:ff,glow:uf,gaitTag:pf,params:mf,createdAt:gf,updatedAt:_f},YM=Object.freeze(Object.defineProperty({__proto__:null,createdAt:gf,default:qM,formatVersion:af,gaitTag:pf,glow:uf,id:of,k:hf,layers:ff,name:lf,pal:df,params:mf,slot:cf,updatedAt:_f},Symbol.toStringTag,{value:"Module"})),xf="0.1.0",vf="greatsword",Mf="大剣",bf="weapon",Sf=3,yf={w:"#4a3520",G:"#d4af37",c:"#c2cad6",t:"#e9eff8"},Ef=[[".G."],[".w."],[".w."],["GGG"],["ctc"],["ctc"],["ctc"],["ctc"],[".t."]],wf=[],Af={dim:{w:[3,12],h:[15,33]},taper:{tip:[60,140],base:[80,160]}},Tf="2026-07-05T12:00:00Z",Rf="2026-07-05T12:00:00Z",ZM={formatVersion:xf,id:vf,name:Mf,slot:bf,k:Sf,pal:yf,layers:Ef,glow:wf,params:Af,createdAt:Tf,updatedAt:Rf},KM=Object.freeze(Object.defineProperty({__proto__:null,createdAt:Tf,default:ZM,formatVersion:xf,glow:wf,id:vf,k:Sf,layers:Ef,name:Mf,pal:yf,params:Af,slot:bf,updatedAt:Rf},Symbol.toStringTag,{value:"Module"})),Cf="0.1.0",Pf="human-head",If="人間の頭",Lf="head",Df=3,Uf={s:"$skin",S:"#b08858",h:"#6a4a28",H:"#4e3620",e:"#2a2018"},Nf=[[".......",".sssss.",".SsssS.","......."],[".......",".sssss.",".seses.","......."],[".hhhhh.","hsssssh",".sssss.","..hhh.."],[".......","..hhh..","..HHH..","......."]],Ff=[],Of={dim:{w:[12,30],h:[9,21],d:[6,18]},palette:["skin"]},Bf="2026-07-05T12:00:00Z",zf="2026-07-05T12:00:00Z",JM={formatVersion:Cf,id:Pf,name:If,slot:Lf,k:Df,pal:Uf,layers:Nf,glow:Ff,params:Of,createdAt:Bf,updatedAt:zf},jM=Object.freeze(Object.defineProperty({__proto__:null,createdAt:Bf,default:JM,formatVersion:Cf,glow:Ff,id:Pf,k:Df,layers:Nf,name:If,pal:Uf,params:Of,slot:Lf,updatedAt:zf},Symbol.toStringTag,{value:"Module"})),kf="0.1.0",Gf="leather-torso",Hf="革鎧の胴",Vf="torso",Wf=3,Xf={p:"$primary",l:"#6a5138",L:"#52402c",b:"#3a2e1c",d:"#2e2418"},$f=[[".........","..bb.bb..","..bb.bb..","........."],[".........","..pp.pp..","..pp.pp..","........."],[".........","..pp.pp..","..pp.pp..","........."],[".........","..lLlLl..","..lLLLl..","........."],[".........",".lllllll.",".lLlllLl.","........."],[".........","lllllllll","lllllllll","........."],[".........",".lllllll.",".ldlllld.","........."]],qf=[],Yf={body:[60,180],dim:{w:[15,36],h:[12,36],d:[6,21]},taper:{tip:[70,150],base:[70,150],mid:[70,160]},palette:["primary"]},Zf="2026-07-05T12:00:00Z",Kf="2026-07-05T12:00:00Z",QM={formatVersion:kf,id:Gf,name:Hf,slot:Vf,k:Wf,pal:Xf,layers:$f,glow:qf,params:Yf,createdAt:Zf,updatedAt:Kf},tb=Object.freeze(Object.defineProperty({__proto__:null,createdAt:Zf,default:QM,formatVersion:kf,glow:qf,id:Gf,k:Wf,layers:$f,name:Hf,pal:Xf,params:Yf,slot:Vf,updatedAt:Kf},Symbol.toStringTag,{value:"Module"})),Jf="0.1.0",jf="long-bow",Qf="長弓",tu="weapon",eu=3,nu={w:"#7a5a32",W:"#5a4022",s:"#2a2018"},iu=[["s....","WW..."],["s....",".ww.."],["s....","..w.."],["s....","...W."],["s....","...W."],["s....","..w.."],["s....",".ww.."],["s....","WW..."]],su=[],ru={dim:{h:[15,30]}},au="2026-07-05T12:00:00Z",ou="2026-07-05T12:00:00Z",eb={formatVersion:Jf,id:jf,name:Qf,slot:tu,k:eu,pal:nu,layers:iu,glow:su,params:ru,createdAt:au,updatedAt:ou},nb=Object.freeze(Object.defineProperty({__proto__:null,createdAt:au,default:eb,formatVersion:Jf,glow:su,id:jf,k:eu,layers:iu,name:Qf,pal:nu,params:ru,slot:tu,updatedAt:ou},Symbol.toStringTag,{value:"Module"})),lu="0.1.0",cu="comduct-parts",hu="2026-07-05T05:21:32Z",du=["human-head","dwarf-head","elf-head","orc-head","wolf-head","skull-head","leather-torso","plate-torso","robe-torso","beast-torso","slender-arm","gauntlet-arm","battle-axe","greatsword","war-staff","long-bow","tower-shield","full-helm","crown","cape","feather-wings","quiver"],ib={formatVersion:lu,title:cu,updatedAt:hu,partOrder:du},sb=Object.freeze(Object.defineProperty({__proto__:null,default:ib,formatVersion:lu,partOrder:du,title:cu,updatedAt:hu},Symbol.toStringTag,{value:"Module"})),fu="0.1.0",uu="orc-head",pu="オークの頭",mu="head",gu=3,_u={s:"$skin",S:"#4e6a3a",e:"#ff5a5a",t:"#e8ddc4"},xu=[[".......","sssssss","sssssss",".t...t."],[".......",".sssss.",".seses.",".t...t."],[".......",".sssss.",".SSSSS.","......."],[".......","..SSS..","..SSS..","......."]],vu=["#ff5a5a"],Mu={dim:{w:[15,33],h:[9,21],d:[6,18]},palette:["skin"]},bu="2026-07-05T12:00:00Z",Su="2026-07-05T12:00:00Z",rb={formatVersion:fu,id:uu,name:pu,slot:mu,k:gu,pal:_u,layers:xu,glow:vu,params:Mu,createdAt:bu,updatedAt:Su},ab=Object.freeze(Object.defineProperty({__proto__:null,createdAt:bu,default:rb,formatVersion:fu,glow:vu,id:uu,k:gu,layers:xu,name:pu,pal:_u,params:Mu,slot:mu,updatedAt:Su},Symbol.toStringTag,{value:"Module"})),yu="0.1.0",Eu="plate-torso",wu="板金鎧の胴",Au="torso",Tu=3,Ru={i:"#8a93a4",I:"#6a7383",j:"#4e5666"},Cu=[[".........","..jj.jj..","..ii.ii..","........."],[".........","..iI.Ii..","..ii.ii..","........."],[".........","..iI.Ii..","..ii.ii..","........."],[".........","..IIIII..","..IIIII..","........."],[".........",".iiiiiii.",".iiiiiii.","....i...."],[".........","IiiiiiiiI","IiiiiiiiI","........."],[".........",".IiiiiiI.",".IiiiiiI.","........."]],Pu=[],Iu={body:[60,200],dim:{w:[15,36],h:[12,36],d:[6,21]},taper:{tip:[70,150],base:[70,150],mid:[70,160]}},Lu="2026-07-05T12:00:00Z",Du="2026-07-05T12:00:00Z",ob={formatVersion:yu,id:Eu,name:wu,slot:Au,k:Tu,pal:Ru,layers:Cu,glow:Pu,params:Iu,createdAt:Lu,updatedAt:Du},lb=Object.freeze(Object.defineProperty({__proto__:null,createdAt:Lu,default:ob,formatVersion:yu,glow:Pu,id:Eu,k:Tu,layers:Cu,name:wu,pal:Ru,params:Iu,slot:Au,updatedAt:Du},Symbol.toStringTag,{value:"Module"})),Uu="0.1.0",Nu="quiver",Fu="矢筒",Ou="back",Bu=3,zu={w:"#6a5138",W:"#52402c",f:"#e8ddc4",F:"#8a3a3a"},ku=[["Www","www"],["Www","www"],["Www","www"],["...","fFf"]],Gu=[],Hu="rigid",Vu="2026-07-05T12:00:00Z",Wu="2026-07-05T12:00:00Z",cb={formatVersion:Uu,id:Nu,name:Fu,slot:Ou,k:Bu,pal:zu,layers:ku,glow:Gu,gaitTag:Hu,createdAt:Vu,updatedAt:Wu},hb=Object.freeze(Object.defineProperty({__proto__:null,createdAt:Vu,default:cb,formatVersion:Uu,gaitTag:Hu,glow:Gu,id:Nu,k:Bu,layers:ku,name:Fu,pal:zu,slot:Ou,updatedAt:Wu},Symbol.toStringTag,{value:"Module"})),Xu="0.1.0",$u="robe-torso",qu="ローブの胴",Yu="torso",Zu=3,Ku={p:"$primary",s:"$secondary",o:"#b08858"},Ju=[[".........","ppppppppp","ppppppppp","...o.o..."],[".........","ppppppppp","ppppppppp","........."],[".........",".ppppppp.",".ppppppp.","........."],[".........",".sssssss.",".sssssss.","....s...."],[".........",".ppppppp.",".ppppppp.","........."],[".........","ppppppppp","ppppppppp","........."],[".........",".ppppppp.",".psssssp.","........."]],ju=[],Qu={body:[50,200],dim:{w:[15,36],h:[12,36],d:[6,21]},taper:{tip:[70,160],base:[80,200],mid:[70,160]},palette:["primary","secondary"]},t0="2026-07-05T12:00:00Z",e0="2026-07-05T12:00:00Z",db={formatVersion:Xu,id:$u,name:qu,slot:Yu,k:Zu,pal:Ku,layers:Ju,glow:ju,params:Qu,createdAt:t0,updatedAt:e0},fb=Object.freeze(Object.defineProperty({__proto__:null,createdAt:t0,default:db,formatVersion:Xu,glow:ju,id:$u,k:Zu,layers:Ju,name:qu,pal:Ku,params:Qu,slot:Yu,updatedAt:e0},Symbol.toStringTag,{value:"Module"})),n0="0.1.0",i0="skull-head",s0="骸骨の頭",r0="head",a0=3,o0={b:"#e8ddc4",B:"#c9bc9c",g:"#3aff7a",n:"#2a2420"},l0=[[".......",".BBBBB.",".bbbbb.",".bnbnb."],[".bbbbb.",".bgngb.",".b...b.","......."],[".......","bbbbbbb",".bbbbb.","......."],[".......","..BBB..","..BBB..","......."]],c0=["#3aff7a"],h0={dim:{w:[12,30],h:[9,21],d:[6,18]}},d0="2026-07-05T12:00:00Z",f0="2026-07-05T12:00:00Z",ub={formatVersion:n0,id:i0,name:s0,slot:r0,k:a0,pal:o0,layers:l0,glow:c0,params:h0,createdAt:d0,updatedAt:f0},pb=Object.freeze(Object.defineProperty({__proto__:null,createdAt:d0,default:ub,formatVersion:n0,glow:c0,id:i0,k:a0,layers:l0,name:s0,pal:o0,params:h0,slot:r0,updatedAt:f0},Symbol.toStringTag,{value:"Module"})),u0="0.1.0",p0="slender-arm",m0="素肌の腕",g0="arm",_0=3,x0={s:"$skin",S:"#b08858"},v0=[[".S.",".S."],[".s.",".s."],[".s.",".s."],[".s.",".s."],["sss",".s."]],M0=[],b0="arm",S0={dim:{w:[3,12],h:[9,24],d:[3,9]},taper:{tip:[80,220],base:[60,160],mid:[60,180]},align:"top",palette:["skin"]},y0="2026-07-05T12:00:00Z",E0="2026-07-05T12:00:00Z",mb={formatVersion:u0,id:p0,name:m0,slot:g0,k:_0,pal:x0,layers:v0,glow:M0,gaitTag:b0,params:S0,createdAt:y0,updatedAt:E0},gb=Object.freeze(Object.defineProperty({__proto__:null,createdAt:y0,default:mb,formatVersion:u0,gaitTag:b0,glow:M0,id:p0,k:_0,layers:v0,name:m0,pal:x0,params:S0,slot:g0,updatedAt:E0},Symbol.toStringTag,{value:"Module"})),w0="0.1.0",A0="tower-shield",T0="大盾",R0="shield",C0=3,P0={i:"#6a7383",w:"#7a5a32",b:"#4e5666",r:"#d4af37"},I0=[[".iii.","....."],["iwwwi","..b.."],["iwwwi","..r.."],["iwwwi","..b.."],["iwwwi","..r.."],["iwwwi","..b.."],["iiiii","....."]],L0=[],D0={dim:{w:[9,18],h:[12,27]}},U0="2026-07-05T12:00:00Z",N0="2026-07-05T12:00:00Z",_b={formatVersion:w0,id:A0,name:T0,slot:R0,k:C0,pal:P0,layers:I0,glow:L0,params:D0,createdAt:U0,updatedAt:N0},xb=Object.freeze(Object.defineProperty({__proto__:null,createdAt:U0,default:_b,formatVersion:w0,glow:L0,id:A0,k:C0,layers:I0,name:T0,pal:P0,params:D0,slot:R0,updatedAt:N0},Symbol.toStringTag,{value:"Module"})),F0="0.1.0",O0="war-staff",B0="戦杖",z0="weapon",k0=3,G0={w:"#7a5a32",W:"#5a4022",G:"#d4af37",g:"$gem"},H0=[[".W."],[".w."],[".w."],[".W."],[".w."],[".w."],[".W."],["GgG"],[".g."]],V0=["$gem"],W0={dim:{h:[18,33]},palette:["gem"]},X0="2026-07-05T12:00:00Z",$0="2026-07-05T12:00:00Z",vb={formatVersion:F0,id:O0,name:B0,slot:z0,k:k0,pal:G0,layers:H0,glow:V0,params:W0,createdAt:X0,updatedAt:$0},Mb=Object.freeze(Object.defineProperty({__proto__:null,createdAt:X0,default:vb,formatVersion:F0,glow:V0,id:O0,k:k0,layers:H0,name:B0,pal:G0,params:W0,slot:z0,updatedAt:$0},Symbol.toStringTag,{value:"Module"})),q0="0.1.0",Y0="wolf-head",Z0="狼の頭",K0="head",J0=3,j0={p:"$primary",P:"#5a4a3a",e:"#ffb03a",n:"#2a2420"},Q0=[[".......",".ppppp.","..ppp..","..ppp.."],[".......",".ppppp.",".ppppp.","..pnp.."],[".......",".ppppp.",".pepep.","......."],[".......",".p...p.",".P...P.","......."]],tp=["#ffb03a"],ep={dim:{w:[12,30],h:[9,21],d:[6,21]},palette:["primary"]},np="2026-07-05T12:00:00Z",ip="2026-07-05T12:00:00Z",bb={formatVersion:q0,id:Y0,name:Z0,slot:K0,k:J0,pal:j0,layers:Q0,glow:tp,params:ep,createdAt:np,updatedAt:ip},Sb=Object.freeze(Object.defineProperty({__proto__:null,createdAt:np,default:bb,formatVersion:q0,glow:tp,id:Y0,k:J0,layers:Q0,name:Z0,pal:j0,params:ep,slot:K0,updatedAt:ip},Symbol.toStringTag,{value:"Module"})),ci=i=>typeof i=="string"?i:i.id,bc=i=>i!=null&&typeof i!="string"&&(i.dim||i.taper||i.regions)?i:void 0;function sp(i,t){var s;const e=r=>{if(typeof r=="number")return r;const a=r.startsWith("$")?r.slice(1):r,o=t==null?void 0:t[a];if(o==null)throw new Error(`パーツ ${i.id} の役割色 $${a} が palette に無い（一手D：バインドは割当/種側が持つ）`);return typeof o=="number"?o:parseInt(o.replace("#",""),16)},n={};for(const[r,a]of Object.entries(i.pal))n[r]=e(a);return{pal:n,glow:(i.glow??[]).map(e),fine:(s=i.fine)==null?void 0:s.map(r=>({x:r.x,y:r.y,z:r.z,sx:r.sx,sy:r.sy,sz:r.sz,c:e(r.c)}))}}const xs=new Map;function rp(i){xs.clear();for(const t of i)xs.set(t.id,t);zi.clear()}function vs(i){return xs.get(i)??Vo[i]}function yb(){const i=new Map;for(const t of Object.values(Vo))i.set(t.id,t);for(const t of xs.values())i.set(t.id,t);return[...i.values()]}const xr={humanoid:{id:"humanoid",gait:"small",s:.03,base:"torso",slots:{torso:{cell:[0,0,0]},head:{cell:[0,21,0]},helm:{cell:[0,28,0]},weapon:{cell:[16,6,3]},shield:{cell:[-16,9,3]},back:{cell:[0,12,-8]},armR:{cell:[17,21,0]},armL:{cell:[-17,21,0]}}}},Ze=(i,t,e,n,s)=>({id:i,slot:t,k:3,pal:e,layers:n,glow:s}),Vo={"goblin-head":Ze("goblin-head","head",{s:6986314,S:5734204,e:16734810},[[".......",".sssss.",".sssss.","......."],[".......",".sssss.",".sssss.","..e.e.."],[".......","..sss..","..SSS..","......."]],[16734810]),"goblin-torso":{...Ze("goblin-torso","torso",{s:6986314,p:3752238,b:3023896,k:4863264},[[".........","..kk.kk..","..kk.kk..","........."],[".........","..pp.pp..","..pp.pp..","........."],[".........","..pp.pp..","..pp.pp..","........."],[".........","..bbbbb..","..bbbbb..","........."],[".........",".sssssss.",".sssssss.","........."],[".........","sssssssss","sssssssss","........."],[".........",".sssssss.",".sssssss.","........."]]),params:{body:[50,200],dim:{w:[15,40],h:[12,40],d:[6,24]},taper:{tip:[60,160],base:[60,160],mid:[60,160]}}},club:Ze("club","weapon",{w:8018482,W:6965800},[[".w."],[".w."],[".w."],["WWW"],["WWW"]]),sword:Ze("sword","weapon",{g:4863264,G:13938487,c:12765910,t:15331320},[[".g."],["GGG"],[".c."],[".c."],[".c."],[".c."],[".t."]]),buckler:Ze("buckler","shield",{w:8018482,m:9081764},[["www","..."],["www",".m."],["www","..."]]),"kobold-head":Ze("kobold-head","head",{y:11571296,Y:9072456,e:16734810,n:5915952},[[".......",".yyyyy.",".yyyyy.","......."],[".......",".yyyyy.","yyyyyyy","..nn..."],[".......",".yyyyy.",".eyeye.","......."],[".......","..YYY..","..YYY..","......."]],[16734810]),"imp-head":Ze("imp-head","head",{r:9058874,R:7220782,k:2761760,o:16756794},[[".......",".rrrrr.",".rrrrr.","......."],["k.....k",".rrrrr.",".roror.","......."],[".......","..RRR..","..RRR..","......."]],[16756794]),"grunt-torso":{...Ze("grunt-torso","torso",{p:"$primary",P:"$secondary",b:3023896,k:4863264},[[".........","..kk.kk..","..kk.kk..","........."],[".........","..PP.PP..","..PP.PP..","........."],[".........","..PP.PP..","..PP.PP..","........."],[".........","..bbbbb..","..bbbbb..","........."],[".........",".ppppppp.",".ppppppp.","........."],[".........","ppppppppp","ppppppppp","........."],[".........","ppppppppp","ppppppppp","........."]]),params:{body:[50,200],dim:{w:[15,40],h:[12,40],d:[6,24]},taper:{tip:[60,160],base:[60,160],mid:[60,160]},palette:["primary","secondary"]}},"iron-helm":Ze("iron-helm","helm",{i:9081764,I:6976387},[[".......",".iiiii.",".iiiii.","......."],[".......",".iiiii.","i.i.i.i","......."],[".......","..III..","..III..","......."]]),"horn-helm":Ze("horn-helm","helm",{i:9081764,I:6976387,h:15261124},[[".......",".iiiii.",".iiiii.","......."],[".......","hiiiiih",".iiiii.","......."],[".......","..III..","..III..","......."]]),spear:Ze("spear","weapon",{w:8018482,c:12765910,t:15331320},[[".w."],[".w."],[".w."],[".w."],[".w."],[".w."],[".c."],[".t."]]),"round-shield":Ze("round-shield","shield",{w:8018482,i:9081764,r:13938487},[[".iii.","....."],["iwwwi","....."],["iwwwi","..r.."],["iwwwi","....."],[".iii.","....."]]),"brute-arm":{id:"brute-arm",slot:"arm",k:3,pal:{s:"$primary",n:4863264},layers:[["nnn","nnn"],[".s.",".s."],[".s.",".s."],[".s.",".s."],["sss",".s."]],gaitTag:"arm",params:{dim:{w:[6,18],h:[9,24],d:[3,12]},taper:{tip:[80,250],base:[60,160],mid:[60,200]},align:"top",palette:["primary"]}},"tattered-wings":{id:"tattered-wings",slot:"back",k:3,pal:{m:4860474,b:6965818},layers:[["bb.......bb","..........."],["mmm.....mmm","mm.......mm"],["mmmm...mmmm","mmm.....mmm"],[".mm.....mm.",".m.......m."]],gaitTag:"wing"}},Ms={"part-goblin":{rig:"humanoid",assign:{torso:"goblin-torso",head:"goblin-head",weapon:"club"}},"part-goblin-guard":{rig:"humanoid",assign:{torso:"grunt-torso",head:"goblin-head",helm:"iron-helm",weapon:"sword",shield:"round-shield"},palette:{primary:6986314,secondary:5734204}},"part-kobold":{rig:"humanoid",assign:{torso:"grunt-torso",head:"kobold-head",weapon:"spear"},palette:{primary:11571296,secondary:9072456}},"part-hobgoblin":{rig:"humanoid",assign:{torso:"grunt-torso",head:"goblin-head",helm:"horn-helm",weapon:"club"},palette:{primary:11557434,secondary:9062958}},"part-imp":{rig:"humanoid",assign:{torso:"grunt-torso",head:"imp-head",back:"tattered-wings"},palette:{primary:9058874,secondary:7220782}},"part-troll":{rig:"humanoid",assign:{torso:{id:"grunt-torso",dim:{w:33,h:25}},head:"goblin-head",armR:{id:"brute-arm",dim:{w:12},taper:{tip:170}},armL:{id:"brute-arm",dim:{w:12},taper:{tip:170}},weapon:"club"},palette:{primary:8030794,secondary:6254140},body:135}};function hi(i){const t=i==null?void 0:i.modelRef;return t!=null&&typeof t=="object"&&typeof t.rig=="string"||typeof t=="string"&&!!Ms[t]}function ap(i){var n;const t=i==null?void 0:i.modelRef,e=t!=null&&typeof t=="object"?t.rig:typeof t=="string"?(n=Ms[t])==null?void 0:n.rig:void 0;return e?xr[e]:void 0}function Wo(i){var e;const t=(()=>{if(typeof i!="string"){const s=xr[i.rig];if(!s)throw new Error(`リグ ${i.rig} が辞書に無い（リグ=ルール側＝作者は選ぶだけ・新リグ型は engine 更新）`);return{rig:s,assign:{...i.parts},palette:i.palette,body:i.body}}const n=Ms[i];if(!n)throw new Error(`合成生物 ${i} が台帳に無い`);return{rig:xr[n.rig],assign:{...n.assign},palette:n.palette,body:n.body}})();if(t.body!=null){if(!Number.isInteger(t.body)||t.body<25||t.body>400)throw new Error(`body=${t.body} が整数 25..400 でない（全身%は整数）`);const n=t.rig.base?t.assign[t.rig.base]:void 0,s=n?vs(ci(n)):void 0,r=(e=s==null?void 0:s.params)==null?void 0:e.body;if(r&&(t.body<r[0]||t.body>r[1]))throw new Error(`body=${t.body} が部品 ${s.id} の宣言範囲 [${r}] の外（範囲は部品が宣言＝silhouette の柵）`)}return t}function op(i,t){const e={...i},n=Zi(t==null?void 0:t.weapon);n&&(e.weapon=n.sil==="sword"||n.sil==="greatsword"||n.sil==="dagger"?"sword":n.sil==="halberd"||n.sil==="staff"?"spear":"club");const s=Ki(t==null?void 0:t.armor);return(s==null?void 0:s.tier)==="shield"&&(e.shield="buckler"),e}function lp(i,t){if(i==null||t==null||!Number.isFinite(i)||!Number.isFinite(t)||t<=0)return"full";const e=i/t;return e>2/3?"full":e>1/3?"hurt":"grave"}function cp(i,t){if(t!=="grave")return i;const e={...i};return delete e.weapon,delete e.shield,e}function hp(i){const t=Wo(i.modelRef);return{rig:t.rig,assign:cp(op(t.assign,i.equipment),lp(i.hp,i.hpMax)),palette:t.palette,body:t.body}}const dp=i=>{if(typeof i=="string")return i;let t=i.id;return i.dim&&(t+=`|d${i.dim.w??""}x${i.dim.h??""}x${i.dim.d??""}`),i.taper&&(t+=`|t${i.taper.base??""}:${i.taper.mid??""}:${i.taper.tip??""}`),i.regions&&(t+="|r"+Object.keys(i.regions).sort().map(e=>`${e}=${i.regions[e]}`).join(",")),i.bind&&(t+="|b"+Object.keys(i.bind).sort().map(e=>`${e}=${i.bind[e]}`).join(",")),t};function fp(i,t,e){const n=e?"|"+Object.keys(e).sort().map(s=>`${s}=${e[s]}`).join(","):"";return`p:${i}:`+Object.keys(t).sort().map(s=>`${s}=${dp(t[s])}`).join(",")+n}const wn=(i,t)=>Math.floor(i/t),di=(i,t)=>{const e=i<0?-1:1,n=e*i;return e*wn(2*n+t,2*t)},Ma=(i,t,e,n)=>i+di((t-i)*e,n);function ni(i,t,e,n){if(e!=null){if(!Number.isInteger(e))throw new Error(`パーツ ${i} の ${t}=${e} が整数でない（param は全部 s\\* セル/%の整数）`);if(!n)throw new Error(`パーツ ${i} は ${t} を宣言していない（ノブは部品職人が params で開く）`);if(e<n[0]||e>n[1])throw new Error(`パーツ ${i} の ${t}=${e} が宣言範囲 [${n[0]},${n[1]}] の外（silhouette の柵）`)}}function mo(i){let t=0,e=0;for(const n of i.layers){e=Math.max(e,n.length);for(const s of n)for(let r=0;r<s.length;r++)i.pal[s[r]]!=null&&(t=Math.max(t,r+1))}return{W:t*i.k,H:i.layers.length*i.k,D:e*i.k}}function go(i,t,e,n){const{cells:s,w:r,d:a}=Cr({pal:t,layers:i.layers}),o=i.k>1?Pr(s,i.k):s,l=i.layers.length;return e?Eb(i,o,s,r,a,r*i.k,l*i.k,a*i.k,e,n):{cells:o,auth:s,w:r,d:a,W:r*i.k,H:l*i.k,D:a*i.k}}function Eb(i,t,e,n,s,r,a,o,l,c){var E,P,I,N,$,Z,k,q,H,A,L,U,O,st,ot,Lt,Mt,K,rt,nt;const f=i.params??{};ni(i.id,"dim.w",(E=l.dim)==null?void 0:E.w,(P=f.dim)==null?void 0:P.w),ni(i.id,"dim.h",(I=l.dim)==null?void 0:I.h,(N=f.dim)==null?void 0:N.h),ni(i.id,"dim.d",($=l.dim)==null?void 0:$.d,(Z=f.dim)==null?void 0:Z.d),ni(i.id,"taper.tip",(k=l.taper)==null?void 0:k.tip,(q=f.taper)==null?void 0:q.tip),ni(i.id,"taper.base",(H=l.taper)==null?void 0:H.base,(A=f.taper)==null?void 0:A.base),ni(i.id,"taper.mid",(L=l.taper)==null?void 0:L.mid,(U=f.taper)==null?void 0:U.mid);for(const dt of Object.keys(l.regions??{}))if(ni(i.id,`regions.${dt}`,l.regions[dt],(O=f.regions)==null?void 0:O[dt]),!((st=i.regions)!=null&&st[dt]))throw new Error(`パーツ ${i.id} の領域 ${dt} に幾何宣言（regions.${dt}.y）が無い`);const d=((ot=l.dim)==null?void 0:ot.w)??r,h=((Lt=l.dim)==null?void 0:Lt.h)??a,u=((Mt=l.dim)==null?void 0:Mt.d)??o,g=f.align??"bottom",_=((K=l.taper)==null?void 0:K.base)??100,m=((rt=l.taper)==null?void 0:rt.tip)??100,p=(nt=l.taper)==null?void 0:nt.mid,b=Math.max(1,h-1),w=[];let M=0,T=0;for(let dt=0;dt<h;dt++){const Et=wn(dt*a,h),bt=g==="top"?h-1-dt:dt;let $t=p==null?Ma(_,m,bt,b):2*bt<=b?Ma(_,p,2*bt,b):Ma(p,m,2*bt-b,b);if(l.regions)for(const[Dt,Ut]of Object.entries(l.regions)){const Wt=i.regions[Dt].y;Et>=Wt[0]*i.k&&Et<(Wt[1]+1)*i.k&&($t=di($t*Ut,100))}const zt=Math.max(1,di(d*$t,100)),Ot=Math.max(1,di(u*$t,100));M=Math.max(M,zt),T=Math.max(T,Ot),w.push({srcJ:Et,wj:zt,dj:Ot})}const y=new Map,C=new Map;for(let dt=0;dt<h;dt++){const{srcJ:Et,wj:bt,dj:$t}=w[dt],zt=wn(M-bt,2),Ot=wn(T-$t,2);for(let Dt=0;Dt<bt;Dt++){const Ut=wn(Dt*r,bt);for(let Wt=0;Wt<$t;Wt++){const jt=wn(Wt*o,$t),ae=t.get(Te(Ut,Et,jt));if(ae==null)continue;const de=zt+Dt,Qt=Ot+Wt;if(y.set(Te(de,dt,Qt),ae),c!=null&&c.has(ae)){const pe=wn(Ut,i.k)+","+wn(Et,i.k)+","+wn(jt,i.k)+"|"+ae,D=C.get(pe);D?(D.x0=Math.min(D.x0,de),D.x1=Math.max(D.x1,de),D.y0=Math.min(D.y0,dt),D.y1=Math.max(D.y1,dt),D.z0=Math.min(D.z0,Qt),D.z1=Math.max(D.z1,Qt)):C.set(pe,{x0:de,x1:de,y0:dt,y1:dt,z0:Qt,z1:Qt,c:ae})}}}}const x=[...C.entries()].sort((dt,Et)=>dt[0]<Et[0]?-1:1).map(([,dt])=>dt);return{cells:y,auth:e,w:n,d:s,W:M,H:h,D:T,glowBoxes:x}}const zi=new Map;function wb(i,t,e,n,s){if(!s)return go(i,t,e,n);const r=i.id+"|k"+i.k+"|p"+Object.keys(t).sort().map(o=>o+"="+t[o]).join(",")+"|g"+(n?[...n].sort((o,l)=>o-l).join(","):"")+(e?"|"+dp(e):"");let a=zi.get(r);return a||(zi.size>512&&zi.clear(),a=go(i,t,e,n),zi.set(r,a)),a}function up(i,t,e="bottom"){const n=i.slots[t];if(!n)throw new Error(`リグ ${i.id} にスロット ${t} が無い（リグ=ルール側＝作者は選ぶだけ）`);return{cell:n.cell,align:e==="top"?"top-center":"bottom-center"}}function pp(i,t,e,n){var g;const s=new Map,r=[],a=[],o=[],l=i.base?bc(t[i.base]):void 0;let c=null;if(l!=null&&l.dim&&i.base){const _=e?e[l.id]:vs(l.id);if(!_)throw new Error(`パーツ ${l.id} が棚に無い`);const m=mo(_);c={n:[l.dim.w??m.W,l.dim.h??m.H,l.dim.d??m.D],d:[m.W,m.H,m.D]}}for(const _ of Object.keys(t).sort()){const m=t[_],p=e?e[ci(m)]:vs(ci(m));if(!p)throw new Error(`パーツ ${ci(m)} が棚に無い`);const b=up(i,_,(g=p.params)==null?void 0:g.align);if(!Number.isInteger(p.k)||p.k<1||p.k>4)throw new Error(`パーツ ${p.id} の k=${p.k} が整数 1..4 でない（一手A：格子の橋は整数 upres だけ）`);const w=typeof m!="string"&&m.bind?{...n,...m.bind}:n,M=sp(p,w),T=bc(m),y=wb(p,M.pal,T,T&&M.glow.length?new Set(M.glow):void 0,!e),C=c?[di(b.cell[0]*c.n[0],c.d[0]),di(b.cell[1]*c.n[1],c.d[1]),di(b.cell[2]*c.n[2],c.d[2])]:b.cell,x=C[0]-Math.floor(y.W/2),E=b.align==="top-center"?C[1]-y.H:C[1],P=C[2]-Math.floor(y.D/2);let I=1/0,N=-1/0,$=1/0,Z=-1/0,k=1/0,q=-1/0;for(const[H,A]of y.cells){const[L,U,O]=H.split(",").map(Number),st=L+x,ot=U+E,Lt=O+P;s.set(Te(st,ot,Lt),A),p.gaitTag&&(I=Math.min(I,st),N=Math.max(N,st+1),$=Math.min($,ot),Z=Math.max(Z,ot+1),k=Math.min(k,Lt),q=Math.max(q,Lt+1))}if(p.gaitTag&&I<1/0&&o.push({tag:p.gaitTag,x0:I*i.s,x1:N*i.s,y0:$*i.s,y1:Z*i.s,z0:k*i.s,z1:q*i.s}),M.fine&&M.fine.length){const H=mo(p),A=y.W/H.W,L=y.H/H.H,U=y.D/H.D;for(const O of M.fine){const st=(O.x*p.k*A+x)*i.s,ot=(O.y*p.k*L+E)*i.s,Lt=(O.z*p.k*U+P)*i.s,Mt=O.sx*p.k*A*i.s,K=O.sy*p.k*L*i.s,rt=O.sz*p.k*U*i.s;a.push({x:st,y:ot,z:Lt,sx:Mt,sy:K,sz:rt,c:O.c}),M.glow.includes(O.c)&&r.push({x:st,y:ot,z:Lt,sx:Mt*1.12,sy:K*1.12,sz:rt*1.12,c:O.c})}}if(M.glow.length)if(T)for(const H of y.glowBoxes??[])r.push({x:((H.x0+H.x1+1)/2+x)*i.s,y:((H.y0+H.y1+1)/2+E)*i.s,z:((H.z0+H.z1+1)/2+P)*i.s,sx:i.s*(H.x1-H.x0+1)*1.5,sy:i.s*(H.y1-H.y0+1)*1.5,sz:i.s*(H.z1-H.z0+1)*1.5,c:H.c});else{const H=new Set(M.glow),A=i.s*p.k*1.5;for(const[L,U]of y.auth){if(!H.has(U))continue;const[O,st,ot]=L.split(",").map(Number);r.push({x:((O+.5)*p.k+x)*i.s,y:((st+.5)*p.k+E)*i.s,z:((ot+.5)*p.k+P)*i.s,sx:A,sy:A,sz:A,c:U})}}}const f={pos:[],nrm:[],col:[],idx:[]};ys(f,s,i.s,0,0,0,.055),a.length&&qo(f,a);const d=Ss(f),h=Wn[i.gait]??Wn.biped,u=Ur(d,h);if(o.length){const _=i.s*.01,m=d.getAttribute("position"),p=d.getAttribute("aGait");for(let b=0;b<m.count;b++){const w=m.getX(b),M=m.getY(b),T=m.getZ(b);for(const y of o){if(w<y.x0-_||w>y.x1+_||M<y.y0-_||M>y.y1+_||T<y.z0-_||T>y.z1+_)continue;const C=Sc(y.tag,w,M,y.y0,y.y1,u.H);p.setXYZ(b,C[0],C[1],C[2])}}p.needsUpdate=!0}for(const _ of r){_.gw=ws(_.x,_.y,_.z,u,h);for(const m of o)_.x>=m.x0&&_.x<=m.x1&&_.y>=m.y0&&_.y<=m.y1&&_.z>=m.z0&&_.z<=m.z1&&(_.gw=Sc(m.tag,_.x,_.y,m.y0,m.y1,u.H))}return{geo:d,spots:r}}function Sc(i,t,e,n,s,r){const a=(t>=0?1:-1)*Math.min(1,Math.abs(t)/.06),o=Math.min(1,Math.max(0,e/Math.max(1e-6,r)));return i==="rigid"?[0,0,0]:i==="arm"?[0,-a,o]:i==="leg"?[a*(1-Math.min(1,Math.max(0,(e-n)/Math.max(1e-6,s-n)))),0,o]:i==="wing"?[0,1,o]:[0,0,1.6]}function Ab(i){return i.kind==="hero"||i.kind==="ally"?{key:Jo(i),...Ko(i)}:hi(i)?Rr(i):{key:`m:${i.modelRef}`,...Lr(String(i.modelRef??""))}}function Rr(i){const{rig:t,assign:e,palette:n}=hp(i),s=fp(t.id,e,n);let r=_o.get(s);return r||(r=pp(t,e,void 0,n),_o.set(s,r)),{key:s,...r}}const _o=new Map;function mp(){_o.clear(),zi.clear()}function xo(i){var n;const t=i==null?void 0:i.modelRef,e=t!=null&&typeof t=="object"?t.body:typeof t=="string"?(n=Ms[t])==null?void 0:n.body:void 0;return typeof e=="number"?e:100}function Tb(i){let t=2166136261;const e=s=>{for(let r=0;r<s.length;r++)t^=s[r],t=Math.imul(t,16777619)>>>0};for(const s of["position","normal","color"]){const r=i.getAttribute(s);r&&e(new Uint8Array(r.array.buffer,r.array.byteOffset,r.array.byteLength))}const n=i.getIndex();return n&&e(new Uint8Array(n.array.buffer,n.array.byteOffset,n.array.byteLength)),t.toString(16).padStart(8,"0")}function gp(i,t,e,n){var l;const s=c=>typeof c=="number"?c:(()=>{const f=c.startsWith("$")?c.slice(1):c,d=n==null?void 0:n[f];return d==null?9081764:typeof d=="number"?d:parseInt(d.replace("#",""),16)})(),r={};for(const[c,f]of Object.entries(i.pal))r[c]="#"+s(f).toString(16).padStart(6,"0");const a=new Set(Object.values(r)),o=(l=i.fine)==null?void 0:l.map(c=>({x:c.x,y:c.y,z:c.z,sx:c.sx,sy:c.sy,sz:c.sz,c:"#"+s(c.c).toString(16).padStart(6,"0")}));for(const c of o??[])a.add(c.c);return jp.parse({formatVersion:Qp,id:i.id,name:i.id,vox:{s:t.s*i.k,pal:r,layers:i.layers.map(c=>c.slice())},glow:(i.glow??[]).map(c=>"#"+s(c).toString(16).padStart(6,"0")).filter(c=>a.has(c)),...o&&o.length?{fine:o}:{},createdAt:e,updatedAt:e})}function _p(i,t,e){const n={};for(const[s,r]of Object.entries(i.vox.pal))n[s]=parseInt(r.slice(1),16);return{id:i.id,slot:t,k:e,pal:n,layers:i.vox.layers.map(s=>s.slice()),glow:i.glow.map(s=>parseInt(s.slice(1),16)),...i.fine&&i.fine.length?{fine:i.fine.map(s=>({x:s.x,y:s.y,z:s.z,sx:s.sx,sy:s.sy,sz:s.sz,c:parseInt(s.c.slice(1),16)}))}:{}}}function Rb(i,t){const{rig:e,assign:n,palette:s}=Wo(i);return Object.keys(n).sort().map(r=>{const a=vs(ci(n[r]));if(!a)throw new Error(`パーツ ${ci(n[r])}（slot=${r}）が棚に無い`);return{slot:r,partId:a.id,k:a.k,model:gp(a,e,t,s)}})}function Cb(i,t,e,n){const s=_p(i,t,e);return n&&(s.gaitTag=n),xs.set(s.id,s),mp(),s}if(typeof document<"u")try{const i=Object.assign({"../tenants/masaru/comduct/parts/battle-axe.json":LM,"../tenants/masaru/comduct/parts/beast-torso.json":UM,"../tenants/masaru/comduct/parts/cape.json":FM,"../tenants/masaru/comduct/parts/crown.json":BM,"../tenants/masaru/comduct/parts/dwarf-head.json":kM,"../tenants/masaru/comduct/parts/elf-head.json":HM,"../tenants/masaru/comduct/parts/feather-wings.json":WM,"../tenants/masaru/comduct/parts/full-helm.json":$M,"../tenants/masaru/comduct/parts/gauntlet-arm.json":YM,"../tenants/masaru/comduct/parts/greatsword.json":KM,"../tenants/masaru/comduct/parts/human-head.json":jM,"../tenants/masaru/comduct/parts/leather-torso.json":tb,"../tenants/masaru/comduct/parts/long-bow.json":nb,"../tenants/masaru/comduct/parts/manifest.json":sb,"../tenants/masaru/comduct/parts/orc-head.json":ab,"../tenants/masaru/comduct/parts/plate-torso.json":lb,"../tenants/masaru/comduct/parts/quiver.json":hb,"../tenants/masaru/comduct/parts/robe-torso.json":fb,"../tenants/masaru/comduct/parts/skull-head.json":pb,"../tenants/masaru/comduct/parts/slender-arm.json":gb,"../tenants/masaru/comduct/parts/tower-shield.json":xb,"../tenants/masaru/comduct/parts/war-staff.json":Mb,"../tenants/masaru/comduct/parts/wolf-head.json":Sb}),t=[];for(const e of Object.keys(i).sort())if(!e.endsWith("manifest.json"))try{t.push(tm(em(i[e].default??i[e])))}catch(n){console.warn(`部品化③ truth パーツ ${e} の読込に失敗（このパーツは skip・組込棚が受ける）`,n)}t.length&&rp(t)}catch(i){console.warn("部品化③ truth パーツの読込に失敗（組込棚で継続）",i)}const Jb=Object.freeze(Object.defineProperty({__proto__:null,PART_CREATURES:Ms,PART_RIGS:xr,PART_SHELF:Vo,_clearPartCache:mp,_setPartLib:rp,anchorOf:up,applyPartEdit:Cb,assembleBody:Ab,assembleMonolithic:Lr,assemblePartsBody:pp,assemblePartsFor:Rr,assignKey:fp,assignOf:hp,baseAssign:Wo,equipAssign:op,hashGeo:Tb,hpBand:lp,isPartsActor:hi,modelFromPart:gp,partCellsOnGrid:go,partEditTargets:Rb,partFromModel:_p,partGridDims:mo,partOf:vs,partShelfEntries:yb,partsBodyPct:xo,partsRigOf:ap,resolvePartColors:sp,selId:ci,woundAssign:cp},Symbol.toStringTag,{value:"Module"})),Fe=new ji(1,1,1),Le=new Go(.5),Pb=new B(0,1,0),yc={fire:16747066,ice:10476799,earth:14198858,holy:16771496,poison:9428074},Ec={fire:"#ff8a3a",ice:"#9fdcff",earth:"#d8a84a",holy:"#ffd75e",poison:"#a8e04a"},we=1.15,Me=.5,dn=[[0,1],[0,-1],[1,0],[-1,0]],tt=(i,t)=>{const e=Math.min(255,(i>>16&255)*t)|0,n=Math.min(255,(i>>8&255)*t)|0,s=Math.min(255,(i&255)*t)|0;return e<<16|n<<8|s},Ae=(i,t,e)=>{const n=(i>>16&255)+((t>>16&255)-(i>>16&255))*e|0,s=(i>>8&255)+((t>>8&255)-(i>>8&255))*e|0,r=(i&255)+((t&255)-(i&255))*e|0;return n<<16|s<<8|r},fn={plain:{bg:1053725,fogD:.042,amb:9676232,ambI:.54,sun:16769725,sunI:.96,fill:8229565,fillI:.3,ground:1251619,floorA:4872304,floorB:6445896,floorAcc:5533770,accP:.1,crackP:.35,glowP:0,glowCol:0,wallA:8226715,wallB:9142641,wallAcc:6123860,wallAccP:.07,wallCore:2567739,water:1989278,waterDeep:863058,sparkle:6797288,torchN:19,flame:16753978,flameCore:16769146,heroCol:16761470,heroI:3.2},fire:{bg:1379336,fogD:.05,amb:12617315,ambI:.5,sun:16763030,sunI:.88,fill:10241318,fillI:.32,ground:1445386,floorA:4799540,floorB:6505269,floorAcc:9454886,accP:.13,crackP:.45,glowP:.05,glowCol:16742960,wallA:6177336,wallB:7360572,wallAcc:10242598,wallAccP:.09,wallCore:2364432,water:1989278,waterDeep:863058,sparkle:6797288,torchN:13,flame:16747066,flameCore:16765562,heroCol:16754788,heroI:3.6},ice:{bg:857376,fogD:.046,amb:10271455,ambI:.56,sun:14478591,sunI:.93,fill:5797805,fillI:.32,ground:1054757,floorA:5202813,floorB:6783130,floorAcc:11127772,accP:.14,crackP:.3,glowP:.035,glowCol:10476799,wallA:7241880,wallB:8692410,wallAcc:13822196,wallAccP:.1,wallCore:1845302,water:2779824,waterDeep:1194594,sparkle:11133695,torchN:23,flame:16753978,flameCore:16769146,heroCol:16761470,heroI:3.2},earth:{bg:1183240,fogD:.045,amb:11772548,ambI:.52,sun:16769971,sunI:.9,fill:8219212,fillI:.3,ground:1314826,floorA:5852733,floorB:7233355,floorAcc:10126152,accP:.12,crackP:.5,glowP:0,glowCol:0,wallA:8022610,wallB:9338211,wallAcc:10521676,wallAccP:.09,wallCore:2761240,water:1989278,waterDeep:863058,sparkle:6797288,torchN:17,flame:16753978,flameCore:16769146,heroCol:16761470,heroI:3.2},holy:{bg:1646381,fogD:.034,amb:13225433,ambI:.6,sun:16774106,sunI:.96,fill:10136013,fillI:.3,ground:1975345,floorA:9014165,floorB:10196875,floorAcc:12233068,accP:.07,crackP:.15,glowP:.03,glowCol:16773314,wallA:10068142,wallB:11249818,wallAcc:13022840,wallAccP:.05,wallCore:3291208,band:13022840,water:1989278,waterDeep:863058,sparkle:6797288,torchN:19,flame:16771496,flameCore:16774872,heroCol:16769196,heroI:2.8},town:{bg:1778225,fogD:.027,amb:14273206,ambI:.66,sun:16771524,sunI:1.05,fill:9413576,fillI:.3,ground:1909811,floorA:5593702,floorB:7037004,floorAcc:6057034,accP:.09,crackP:.2,glowP:0,glowCol:0,wallA:9080480,wallB:10260346,wallAcc:6123860,wallAccP:.06,wallCore:2896192,water:1989278,waterDeep:863058,sparkle:6797288,torchN:11,flame:16761194,flameCore:16772536,heroCol:16766880,heroI:2.2},forest:{bg:857104,fogD:.038,amb:10270878,ambI:.56,sun:16772800,sunI:1,fill:7245674,fillI:.3,ground:1120786,floorA:4609082,floorB:5922625,floorAcc:7178830,accP:.16,crackP:.18,glowP:0,glowCol:0,wallA:5077570,wallB:4022582,wallAcc:8018486,wallAccP:.12,wallCore:1714200,water:1989278,waterDeep:863058,sparkle:6797288,torchN:43,flame:16761194,flameCore:16772536,heroCol:16766880,heroI:2.4},interior:{bg:1314828,fogD:.02,amb:14203024,ambI:.6,sun:16768168,sunI:.8,fill:9075302,fillI:.34,ground:1511952,floorA:6968890,floorB:8021576,floorAcc:9071166,accP:.12,crackP:.12,glowP:0,glowCol:0,wallA:10128500,wallB:9075298,wallAcc:6966056,wallAccP:.1,wallCore:2760728,water:1989278,waterDeep:863058,sparkle:6797288,torchN:5,flame:16758874,flameCore:16771504,heroCol:16766880,heroI:1.8}};function xp(i){const t=Ae(i.floorA,i.floorB,.5);return{hemiSky:i.amb,hemiGround:tt(Ae(t,i.flame,.22),.9),hemiI:i.ambI*1.08,sunCol:i.sun,sunI:i.sunI,sunPos:[30,42,24],fillCol:i.fill,fillI:i.fillI,fillPos:[-26,14,-18],actFill:Ae(i.amb,16777215,.45),actFillI:Math.max(.14,.46-i.ambI*.32),heroCol:i.heroCol,heroI:i.heroI}}const Xo={value:new Gt(.13,.15,.18)};function vp(i,t){Xo.value.setHex(i).multiplyScalar(t)}function vo(i={}){const t=new or({vertexColors:!0,...i}),e={value:new ue(0,0,0,0)},n={value:new Bt(0,0)};return t.userData.gaitA=e,t.userData.gaitB=n,t.onBeforeCompile=s=>{s.uniforms.uCdActFill=Xo,s.uniforms.uCdGaitA=e,s.uniforms.uCdGaitB=n,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aGait;
attribute vec2 aMat;
varying vec2 vCdMat;
uniform vec4 uCdGaitA;
uniform vec2 uCdGaitB;`).replace("#include <begin_vertex>",`#include <begin_vertex>
	vCdMat = aMat;
	transformed.z += uCdGaitA.x * aGait.x + uCdGaitA.y * aGait.y;
	transformed.x += uCdGaitA.w * aGait.z;
	transformed.y += uCdGaitA.z * (0.15 + 0.85 * min(abs(aGait.z), 1.0)) + uCdGaitB.x * max(0.0, uCdGaitB.y * sign(aGait.x)) * abs(aGait.x);`),s.fragmentShader=s.fragmentShader.replace("uniform vec3 diffuse;",`uniform vec3 uCdActFill;
varying vec2 vCdMat;
uniform vec3 diffuse;`).replace("#include <lights_fragment_begin>",`#include <lights_fragment_begin>
	reflectedLight.indirectDiffuse += uCdActFill * BRDF_Lambert( diffuseColor.rgb ) * saturate( normal.z );
	reflectedLight.directSpecular += vec3(1.0) * pow(saturate(normal.z), 26.0) * vCdMat.x * 0.5;
	reflectedLight.indirectDiffuse += uCdActFill * BRDF_Lambert( diffuseColor.rgb ) * pow(1.0 - saturate(normal.z), 2.0) * vCdMat.y * 1.6;`)},t.customProgramCacheKey=()=>"cd-actfill-gait-mat",t}const bs=[{n:[1,0,0],q:[[1,-1,-1],[1,1,-1],[1,1,1],[1,-1,1]]},{n:[-1,0,0],q:[[-1,-1,1],[-1,1,1],[-1,1,-1],[-1,-1,-1]]},{n:[0,1,0],q:[[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1]]},{n:[0,-1,0],q:[[-1,-1,1],[-1,-1,-1],[1,-1,-1],[1,-1,1]]},{n:[0,0,1],q:[[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]},{n:[0,0,-1],q:[[1,-1,-1],[-1,-1,-1],[-1,1,-1],[1,1,-1]]}],Wi=new Gt,Ib=0,Mo=1,Mp=2,Lb=3,ki=4,vr=[[0,0],[.85,.3],[.22,.12],[.06,.08],[.42,.45]];function $o(i,t,e,n,s,r,a,o,l,c=0){const f=i.pos.length/3;let d=0;for(const[h,u,g]of t.q){const _=l?l[d++]:1;i.pos.push(e+h*r,n+u*a,s+g*o),i.nrm.push(t.n[0],t.n[1],t.n[2]),i.col.push(Wi.r*_,Wi.g*_,Wi.b*_)}if(i.mat){const h=vr[c]??vr[0];for(let u=0;u<4;u++)i.mat.push(h[0],h[1])}i.idx.push(f,f+1,f+2,f,f+2,f+3)}function Ss(i){const t=new Be;return t.setAttribute("position",new fe(i.pos,3)),t.setAttribute("normal",new fe(i.nrm,3)),t.setAttribute("color",new fe(i.col,3)),i.mat&&i.mat.length&&t.setAttribute("aMat",new fe(i.mat,2)),t.setIndex(i.idx),t}function bp(i,t){if(!t||i.getAttribute("aMat"))return;const e=i.getAttribute("position").count,n=vr[t]??vr[0],s=new Float32Array(e*2);for(let r=0;r<e;r++)s[r*2]=n[0],s[r*2+1]=n[1];i.setAttribute("aMat",new fe(s,2))}const Te=(i,t,e)=>i+","+t+","+e,Db=(i,t,e)=>{let n=i*374761393+t*668265263+e*2147483647>>>0;return n^=n<<13,n^=n>>>17,n^=n<<5,n>>>0},Ub=[.58,.75,.89,1];function ys(i,t,e,n,s,r,a){const o=e/2,l=(c,f,d)=>t.has(Te(c,f,d));for(const[c,f]of t){const[d,h,u]=c.split(",").map(Number),g=f>>>24&7,_=f&16777215;Wi.setHex(a>0?tt(_,1-a+Db(d,h,u)%97/96*2*a):_);const m=(d+.5)*e+n,p=(h+.5)*e+s,b=(u+.5)*e+r;for(const w of bs){const M=w.n[0],T=w.n[1],y=w.n[2];if(l(d+M,h+T,u+y))continue;const C=M!==0?0:T!==0?1:2,x=C===0?[1,2]:C===1?[0,2]:[0,1],E=x[0],P=x[1],I=d+M,N=h+T,$=u+y,Z=w.q.map(k=>{const q=l(I+(E===0?k[0]:0),N+(E===1?k[1]:0),$+(E===2?k[2]:0)),H=l(I+(P===0?k[0]:0),N+(P===1?k[1]:0),$+(P===2?k[2]:0)),A=l(I+(C===0?0:k[0]),N+(C===1?0:k[1]),$+(C===2?0:k[2]));return Ub[q&&H?0:3-((q?1:0)+(H?1:0)+(A?1:0))]});$o(i,w,m,p,b,o,o,o,Z,g)}}}function Sp(i){const t=new Map;for(const[e,n]of i){const[s,r,a]=e.split(",").map(Number);let o=0,l=0,c=0,f=0;for(const d of bs)i.has(Te(s+d.n[0],r+d.n[1],a+d.n[2]))&&(o++,l|=+(d.n[0]!==0),c|=+(d.n[1]!==0),f|=+(d.n[2]!==0));o===3&&l&&c&&f||t.set(e,n)}return t}function Cr(i){const t=new Map;let e=0,n=0;return i.layers.forEach((s,r)=>s.forEach((a,o)=>{n=Math.max(n,s.length);for(let l=0;l<a.length;l++){const c=i.pal[a[l]];c!=null&&(t.set(Te(l,r,o),c),e=Math.max(e,l+1))}})),{cells:t,w:e,d:n}}function Pr(i,t){const e=new Map;for(const[n,s]of i){const[r,a,o]=n.split(",").map(Number);let l=0;for(const c of bs)i.has(Te(r+c.n[0],a+c.n[1],o+c.n[2]))&&l++;for(let c=0;c<t;c++)for(let f=0;f<t;f++)for(let d=0;d<t;d++){if(l>=2){const h=c===0?-1:c===t-1?1:0,u=f===0?-1:f===t-1?1:0,g=d===0?-1:d===t-1?1:0;if(h&&u&&g&&!i.has(Te(r+h,a,o))&&!i.has(Te(r,a+u,o))&&!i.has(Te(r,a,o+g)))continue}e.set(Te(r*t+c,a*t+f,o*t+d),s)}}return e}function yp(i,t=3,e){const{cells:n,w:s,d:r}=Cr(i),a=i.s/t,o=-(s*i.s)/2,l=-(r*i.s)/2,c={pos:[],nrm:[],col:[],idx:[]};return ys(c,Pr(n,t),a,o,0,l,.055),e&&qo(c,e.map(f=>({x:f.x*i.s+o,y:f.y*i.s,z:f.z*i.s+l,sx:f.sx*i.s,sy:f.sy*i.s,sz:f.sz*i.s,c:f.c}))),Ss(c)}function qo(i,t){for(const e of t){Wi.setHex(e.c);for(const n of bs)$o(i,n,e.x,e.y,e.z,e.sx/2,e.sy/2,e.sz/2)}}function Ep(i,t,e=.05,n){const s=new Map,r=[],a=Math.max(t*.9,.037);for(const l of i){const c=n?l.c|(n.get(l.c)??0)<<24:l.c;if(Math.min(l.sx,l.sy,l.sz)<a){r.push(l);continue}const f=Math.max(1,Math.round(l.sx/t)),d=Math.max(1,Math.round(l.sy/t)),h=Math.max(1,Math.round(l.sz/t)),u=Math.round(l.x/t-f/2),g=Math.round(l.y/t-d/2),_=Math.round(l.z/t-h/2);for(let m=0;m<f;m++)for(let p=0;p<d;p++)for(let b=0;b<h;b++)s.set(Te(u+m,g+p,_+b),c)}const o={pos:[],nrm:[],col:[],idx:[]};n&&(o.mat=[]),ys(o,Sp(s),t,0,0,0,e);for(const l of r){Wi.setHex(l.c);for(const c of bs)$o(o,c,l.x,l.y,l.z,l.sx/2,l.sy/2,l.sz/2,void 0,(n==null?void 0:n.get(l.c))??0)}return Ss(o)}class Es{constructor(t,e=.07){ht(this,"cells",new Map);this.s=t,this.jit=e}set(t,e,n,s){this.cells.set(Te(Math.round(t),Math.round(e),Math.round(n)),s)}box(t,e,n,s,r,a,o){for(let l=Math.min(t,e);l<=Math.max(t,e);l++)for(let c=Math.min(n,s);c<=Math.max(n,s);c++)for(let f=Math.min(r,a);f<=Math.max(r,a);f++)this.cells.set(Te(l,c,f),o)}ell(t,e,n,s,r,a,o){for(let l=Math.floor(t-s);l<=Math.ceil(t+s);l++)for(let c=Math.floor(e-r);c<=Math.ceil(e+r);c++)for(let f=Math.floor(n-a);f<=Math.ceil(n+a);f++){const d=(l-t)/s,h=(c-e)/r,u=(f-n)/a;d*d+h*h+u*u<=1&&this.cells.set(Te(l,c,f),o)}}seg(t,e,n,s,r,a,o,l,c){const f=Math.max(1,Math.round(Math.max(Math.abs(s-t),Math.abs(r-e),Math.abs(a-n))));for(let d=0;d<=f;d++){const h=d/f,u=o+(l-o)*h;this.ell(t+(s-t)*h,e+(r-e)*h,n+(a-n)*h,u,u,u,c)}}ring(t,e,n){for(let s=-Math.ceil(e)-1;s<=Math.ceil(e)+1;s++)for(let r=-Math.ceil(e)-1;r<=Math.ceil(e)+1;r++){const a=Math.sqrt(s*s+r*r);Math.abs(a-e)<=.6&&this.cells.set(Te(s,t,r),n)}}}function Nb(){const i=new Es(.05,.06),t=9056806,e=6168344,n=14200952,s=15261124,r=4856340,a=9067066,o=16765514,l=16742960;i.ell(0,13,-3,11,7.5,13,t),i.ell(0,9,4,6.5,5,10,n);for(const[c,f,d]of[[0,6,12],[2,7,12],[-2,6,11],[3,6,10],[-3,7,11],[0,7,13]])i.set(c,f,d,l);for(const c of[-1,1]){i.seg(c*7,10,6,c*8,2,7,3.2,2.6,e),i.ell(c*8,2,8,3,2,3.6,e);for(const f of[-2,0,2])i.set(c*8+f,1,12,s);i.seg(c*8,10,-9,c*9,2,-10,3.4,2.8,e),i.ell(c*9,2,-8,3,2,3.6,e)}i.seg(0,16,6,0,26,13,4.6,3.4,t),i.ell(0,28,15,4.4,3.4,4.6,t),i.ell(0,26.5,19.5,2.8,2,4,t),i.box(-2,2,24,25,17,21,e),i.box(-1,1,24,25,21,21,l);for(const c of[-2,0,2])i.set(c,25,21,s);i.set(-2,28,18,o),i.set(2,28,18,o),i.set(-2,29,18,o),i.set(2,29,18,o);for(const c of[-1,1])i.seg(c*3,30,13,c*6,35,8,1.4,.7,s);for(const c of[-1,1]){i.seg(c*9,18,-4,c*19,30,-10,1.6,1,a);for(let f=0;f<=9;f++){const d=c*(10+f),h=19+f*1.2;for(let u=Math.max(10,h-7+f*.4);u<=h;u++)i.set(d,u,-8-f*.2,r)}}i.seg(0,10,-14,12,4,-19,3,1,t);for(let c=-12;c<=12;c+=2)i.set(0,20+Math.round(Math.cos(c*.2)*1.5),c<6?c:6+Math.round((c-6)*.8),s);for(let c=-10;c<=8;c+=3)i.set(0,21,c,s);return i}function Fb(){const i=new Es(.055,.06),t=10336460,e=7440542,n=14676732,s=11064552,r=6179382,a=9431295,o=15660794;for(const l of[-1,1])i.seg(l*5,14,0,l*5,2,0,3.6,3.2,t),i.box(l*5-3,l*5+3,0,5,-3,3,r);i.box(-8,8,14,18,-4,4,r),i.ell(0,26,0,9,9,6,t),i.box(-5,5,22,30,4,5,s),i.box(-2,2,20,30,5,5,n);for(const l of[-1,1])i.ell(l*10,33,0,4,3.4,4,n),i.seg(l*12,35,0,l*14,40,-2,1.4,.6,n);i.seg(-12,31,0,-13,18,2,2.6,2.2,t),i.ell(-13,15,3,3.2,3,3.2,e),i.seg(12,31,0,13,22,4,2.6,2.2,t),i.ell(13,20,5,3,2.8,3,e),i.seg(13,16,6,13,40,8,2.4,3.4,n),i.ell(13,42,8.5,3.6,3.4,3.6,s);for(const[l,c]of[[-2,40],[2,43],[0,45]])i.set(13+l,c+1,9,o);i.ell(0,37,1,4.2,4.2,4.2,t),i.box(-3,3,30,35,3,5,o),i.box(-2,2,28,30,3,4,o),i.box(-4,4,40,42,-2,3,o),i.set(-2,38,5,a),i.set(2,38,5,a),i.box(-3,3,39,39,4,5,s);for(const[l,c,f]of[[-6,30,-5],[6,31,-5],[0,33,-6]])i.seg(l,c,f,l*1.3,c+6,f-3,1.2,.4,n);return i}function Ob(){const i=new Es(.055,.09),t=9078136,e=6249038,n=6916175,s=14263361,r=16734778;for(const a of[-1,1])i.seg(a*6,12,0,a*6,2,1,4.2,4.6,e);i.box(-9,9,11,15,-4,4,t),i.ell(0,24,-1,11,10,7,t),i.box(-1,1,20,28,5,6,s),i.box(-4,4,24,25,5,6,s);for(const a of[-1,1]){i.ell(a*12,30,0,5,4.4,5,t),i.seg(a*14,28,0,a*15,14,4,3.6,4,e),i.ell(a*15,7,5,5.4,6.5,5.6,e);for(const o of[-3,0,3])i.box(a*15+o-1,a*15+o+1,10,13,9,10,t)}i.box(-3,3,33,38,-2,3,t),i.set(-2,36,4,r),i.set(2,36,4,r),i.box(-4,4,38,39,-3,2,e);for(const[a,o,l]of[[-8,31,2],[9,28,-4],[-11,22,-5],[4,34,-1],[13,12,6]])i.ell(a,o,l,2,1.4,2,n);return i}function Bb(){const i=new Es(.05,.05),t=14276041,e=11052180,n=13938487,s=15921126,r=13617336,a=10479871,o=15331320,l=16771496;for(let c=0;c<=14;c++){const f=8-c*.25;i.ell(0,c,0,f,1.2,f*.8,c%4===0?e:t)}i.box(-6,6,14,16,-4,4,n),i.ell(0,23,0,7,7.5,5,t),i.box(-1,1,18,27,4,5,n),i.box(-4,4,22,23,4,5,n);for(const c of[-1,1])i.ell(c*8,29,0,3.6,3,3.6,n),i.seg(c*9,26,1,c*6,18,6,2.2,1.8,t),i.ell(c*4,17,7,2,2,2,e);i.seg(0,30,7,0,10,8,1.4,.8,o),i.box(-3,3,29,30,7,8,n),i.set(0,32,7,n),i.ell(0,34,0,3.6,4,3.6,t),i.box(-2,2,33,34,3,4,1712176),i.set(-1,34,4,a),i.set(1,34,4,a),i.box(-1,1,38,40,-1,1,n),i.ring(43,5,l);for(const c of[-1,1])for(const[f,d,h]of[[13,26,-5],[9,20,-6]]){i.seg(c*4,d,h,c*(4+f),d+f*.9,h-3,1.4,.7,r);for(let u=1;u<=f;u++){const g=c*(4+u),_=d+u*.9,m=Math.max(4,9-Math.abs(u-f*.6));for(let p=_-m;p<=_;p++)i.set(g,p,h-2-u*.15,s)}}return i}function zb(){const i=new Es(.07,.09),t=5660240,e=3817528,n=13214268,s=16738874,r=14735552;i.box(-19,19,0,4,-16,16,e),i.box(-19,19,4,5,14,16,n),i.box(-19,19,4,5,-16,-14,n);for(const a of[-1,1])i.ell(a*8,8,9,7.5,4,5.5,t),i.ell(a*12,8,5,4,3.4,4,e);i.ell(0,20,0,13,12,9,t),i.ell(0,15,5,8,6,6,e);for(let a=-6;a<=6;a+=2)i.set(a,26-Math.abs(a)*.4,8,n);i.set(0,22,9,n),i.set(0,21,9,n);for(const a of[-1,1])i.ell(a*13,27,0,4.4,3.6,4,t),i.seg(a*14,28,0,a*19,38,2,2.2,1.6,t),i.ell(a*19,40,2,2.6,2.6,2.6,n),i.seg(a*14,25,1,a*21,22,6,2.2,1.6,t),i.ell(a*21,21,7,2.4,2,2.4,e),i.seg(a*13,20,3,a*11,10,10,2.2,1.8,t),i.ell(a*10,9,11,2.6,1.8,3,e);i.ell(0,34,1,6,5.5,5.5,t),i.box(-4,4,30,31,4,6,e);for(const a of[-3,-1,1,3])i.set(a,29,6,r);i.set(-2,35,6,s),i.set(2,35,6,s),i.set(0,38,6,s);for(const a of[-1,1])i.seg(a*5,38,2,a*8,43,-1,1.4,.6,n);for(let a=-4;a<=4;a+=2)i.set(a,40,3,n);return i}const Mr={dragon:Nb,frostgiant:Fb,colossus:Ob,seraph:Bb,idol:zb},br={dragon:[16765514,16742960],frostgiant:[9431295],colossus:[16734778],seraph:[16771496,10479871],idol:[16738874],hydra:[16734810],boss:[16734810],armor:[16734810],ghostknight:[11462399],spirit:[10478591]},Ir={goblin:{s:.088,pal:{s:6986314,S:5734204,e:16734810,k:4863264,b:3023896,p:3752238,w:8018482,W:5521439,t:15261904},layers:[["...........","...........","..kk...kk..","..kk...kk..","...........","..........."],["...........","...........","..pp...pp..","..pp...pp..","...........","..........."],["...........","...........","..pp...pp..","..pp...pp..","...........","..........."],["...........","...........","..ppppppp..","..ppppppp..","...........","..........."],["...........","...........","..bbbbbbb..","..bbbbbbb..","...........","..........."],["...........","..sssssss..","s.sssssss.w","..sssssss..","...........","..........."],["...........","..sssssss..","s.sssssss.w","..sssssss..","...........","..........."],["...........","..sssssss..","ssssssssssw","..sssssss..","...........","..........."],["...........","...........","....sss...w","....sss....","....t.t....","..........."],["...........","...sssss..W",".sssssssssW","...sssss...","....e.e....","..........."],["...........","...sssss..W","..sssssss.W","...sssss...","....b.b....","..........."],["...........","...........","....sss....","....SSS....","...........","..........."]]},golem:{s:.105,pal:{g:9079426,G:6447708,m:6982232,e:16734810,c:3815990},layers:[[".............",".............","..ggg...ggg..","..ggg...ggg..","..ggg...ggg..",".............","............."],[".............",".............","..ggg...ggg..","..ggg...ggg..","..ggg...ggg..",".............","............."],[".............",".............","..GgG...GgG..","..GgG...GgG..","..GgG...GgG..",".............","............."],[".............",".............","..ggg...ggg..","..ggg...ggg..","..ggg...ggg..",".............","............."],[".............",".............","..ggggggggg..","..ggggggggg..","..ggggggggg..",".............","............."],[".............","..ggggggggg..","gg.ggggggg.gg","gg.ggggggg.gg","gg.ggggggg.gg","..gggcccggg..","............."],[".............","..ggggggggg..","gg.ggggggg.gg","gg.gggmggg.gg","gg.ggggggg.gg","..gggcccggg..","............."],[".............","..ggggggggg..","GG.ggggggg.GG","GG.ggggggg.GG","GG.ggggggg.GG",".............","............."],[".............","..ggggggggg..","ggggggggggggg","ggggggggggggg","..ggggggggg..",".............","............."],[".............",".............","....ggggg....","....ggggg....","....ggggg....",".............","............."],[".............",".............","....ggggg....","....ggggg....","....gegeg....",".............","............."],[".............",".............","....ggggg....","....ggggg....",".............",".............","............."],[".............",".............",".............",".....mgm.....",".............",".............","............."]]},djinn:{s:.1,pal:{i:8376552,I:4885176,w:15268095,e:1454666},layers:[["...........","...........","....III....","...........","..........."],["...........","...........","...IIIII...","...........","..........."],["...........","...IIIII...","..IIIIIII..","...IIIII...","..........."],["...........","..iiiiiii..",".iiiiiiiii.","..iiiiiii..","..........."],["...........","..iiiiiii..",".iiiiiiiii.","..iiiiiii..","..........."],["...........","..iiiiiii..","i.iiiiiii.i","..iiiiiii..","..........."],["...........","..iiiiiii..","w.iiiiiii.w","..iiiiiii..","..........."],["...........","..iiiiiii..","iiiiiiiiiii","..iiiiiii..","..........."],["...........","..iiiiiii..",".iiiiiiiii.","..iiiiiii..","..........."],["...........","...........","...iiiii...","...iiiii...","..........."],["...........","...........","...iiiii...","...ieiei...","..........."],["...........","...........","...iiiii...","...iiiii...","..........."],["...........","...........","...w.w.w...","...........","..........."],["...........","...........",".....w.....","...........","..........."]]},ghostknight:{s:.095,pal:{a:10134708,A:7239816,d:1712176,e:11462399,g:14207114,p:9063002},layers:[[".........",".........","..aa.aa..","..aa.aa..","........."],[".........",".........","..Aa.aA..","..Aa.aA..","........."],[".........",".........","..aa.aa..","..aa.aa..","........."],[".........",".........","..aaaaa..","..aaaaa..","........."],[".........",".........","..ggggg..","..ggggg..","........."],[".........","..aaaaa..","A.aaaaa.A","..aaaaa..","........."],[".........","..aaaaa..","a.aaaaa.a","..aaaaa..","........."],[".........","..aaaaa..","aaaaaaaaa","..ggggg..","........."],[".........",".........","...aaa...","...aaa...","........."],[".........","..aaaaa..",".aaaaaaa.","..addda..","........."],[".........","..aaaaa..",".aaaaaaa.","..aedea..","........."],[".........",".........","..aaaaa..","...aaa...","........."],["....p....","....p....","....p....","....p....","........."]]},armor:{s:.09,pal:{a:8883352,A:6186096,r:9067072,d:1316895,e:16734810},layers:[[".........",".........","..aa.aa..","..aa.aa..","........."],[".........",".........","..Ar.aA..","..Aa.aA..","........."],[".........",".........","..aa.aa..","..aa.aa..","........."],[".........",".........","...d.d...","...d.d...","........."],[".........",".........","..aaaaa..","..aaaaa..","........."],[".........","..aaaaa..","..aaaaa.A","..aaaaa..","........."],[".........","..araaa..","A.aaaaa.a","..aaaaa..","........."],[".........","..aaaaa..","aAaaaaaaa","..aaraa..","........."],[".........",".........","...aaa...","...aaa...","........."],[".........","..aaaaa..",".aaaaaaa.","..addda..","........."],[".........","..aaaaa..",".aaaaaaa.","..aedea..","........."],[".........",".........","..aaraa..","...aaa...","........."]]},spirit:{s:.09,pal:{h:5597340,H:8229060,d:1317424,e:10478591,r:4280970,w:13625855},layers:[[".........",".........","....w....",".........","........."],[".........",".........","...rrr...",".........","........."],[".........","...rrr...","..rrrrr..","...rrr...","........."],[".........","..rrrrr..",".rrrrrrr.","..rrrrr..","........."],[".........","..rrrrr..",".rrrrrrr.","..rrrrr..","........."],[".........","..hhhhh..",".hhhhhhh.","..hhhhh..","........."],[".........","..hhhhh..","hhhhhhhhh","..hhhhh..","........."],[".........","..hhhhh..",".hhhhhhh.","..hhhhh..","........."],[".........","..hhhhh..",".hhhhhhh.","..hdddh..","........."],[".........","..hhhhh..",".hhhhhhh.","..hdddh..","...e.e..."],[".........","...hhh...","..hhhhh..","...HhH...","........."],[".........",".........","...hhh...",".........","........."],[".........",".........","....H....",".........","........."]]}},Kn=new Map;function wp(i){Kn.clear();for(const t of i)Kn.set(t.id,t)}function kb(){return[...Kn.values()]}function Ap(i){var t;return((t=Kn.get(i))==null?void 0:t.vox)??Ir[i]}function Tp(i){var t;return((t=Kn.get(i))==null?void 0:t.glow)??br[i]??[]}function Rp(i){var t;return(t=Kn.get(i))==null?void 0:t.fine}function bo(i){if(i.kind!=="monster")return!0;if(hi(i))return!1;const t=pi(i);return Kn.has(t)||!Mr[t]&&!!Ir[t]}function Cp(i,t,e=8,n=5){const s=i.filter(a=>a.d<=n+(t.has(a.id)?1:0));s.sort((a,o)=>a.d-o.d||(a.id<o.id?-1:a.id>o.id?1:0));const r=new Set;for(const a of s.slice(0,e))r.add(a.id);return r}function Pp(i,t,e=!1,n){const s=[],r=e===!0?void 0:n,a=yp(i,e==="hi"?4:e?2:3,r);if(t.length){const o=new Set(t),{cells:l,w:c,d:f}=Cr(i),d=-(c*i.s)/2,h=-(f*i.s)/2;for(const[u,g]of l){if(!o.has(g))continue;const[_,m,p]=u.split(",").map(Number),b=i.s*1.5;s.push({x:(_+.5)*i.s+d,y:(m+.5)*i.s,z:(p+.5)*i.s+h,sx:b,sy:b,sz:b,c:g})}if(r)for(const u of r)o.has(u.c)&&s.push({x:u.x*i.s+d,y:u.y*i.s,z:u.z*i.s+h,sx:u.sx*i.s*1.12,sy:u.sy*i.s*1.12,sz:u.sz*i.s*1.12,c:u.c})}return{geo:a,spots:s}}function Lr(i,t=!1){const e=Ap(i);if(!e)throw new Error(`monolithic モデル ${i} が無い（VoxDef を持つ種だけ＝GB/BoxSpec 種は buildActorBody の既存経路のまま）`);return Pp(e,Tp(i),t,Rp(i))}if(typeof document<"u")try{const i=Object.assign({"../tenants/masaru/comduct/models/goblin.json":RM,"../tenants/masaru/comduct/models/manifest.json":PM}),t=[];for(const e of Object.keys(i).sort())if(!e.endsWith("manifest.json"))try{const n=nm(i[e].default??i[e]);t.push({id:n.id,name:n.name,vox:rm(n),glow:sm(n),fine:im(n)})}catch(n){console.warn(`§18 P4 truth モデル ${e} の読込に失敗（このモデルは skip・コード定義が受ける）`,n)}t.length&&wp(t)}catch(i){console.warn("§18 P4 truth モデルの読込に失敗（コード定義で継続）",i)}function Yo(i){return i.color&&/^#[0-9a-fA-F]{6}$/.test(i.color)?parseInt(i.color.slice(1),16):i.kind==="hero"?16765514:i.kind==="ally"?4638655:14711364}function Zo(i){const t=(i.race||"").toLowerCase();return t.includes("dwarf")||t.includes("ドワーフ")?{hh:.9,ww:1.3,skin:14198904,hair:9067062,beard:10119748,brow:"bushy",noseS:.062,feet:1.15}:t.includes("elf")||t.includes("エルフ")?{hh:1.26,ww:.8,skin:15124384,hair:15261896,ear:!0,brow:"thin",noseS:.038,sideHair:!0}:t.includes("half")||t.includes("ハーフット")?{hh:.78,ww:1.02,skin:14858390,hair:10119738,cheeks:15243904,noseS:.05,feet:1.45,sideHair:!0}:t.includes("gnome")||t.includes("ノーム")?{hh:.84,ww:1.08,skin:14858390,hair:14209216,hat:6982344,noseS:.068,beard:14209216,beardS:.6,cheeks:14721160}:{hh:1.06,ww:1,skin:14922892,hair:6965806,noseS:.045}}function pi(i){const t=i.name||"";return typeof i.modelRef=="string"&&i.modelRef?i.modelRef:t.includes("ヒュドラ")?"hydra":t.includes("ドラゴン")?"dragon":t.includes("フロストジャイアント")?"frostgiant":t.includes("コロッサス")?"colossus":t.includes("だいてんし")?"seraph":t.includes("じゃしんぞう")?"idol":(i.size??1)>1||t.includes("ボス")?"boss":t.includes("ねずみ")?"rat":t.includes("ゴブリン")?"goblin":t.includes("コボルト")?"kobold":t.includes("まどうし")?"mage":t.includes("グール")?"ghoul":t.includes("ゴーレム")?"golem":t.includes("おくり")?"spirit":t.includes("さまよう鎧")?"armor":t.includes("へび")?"snake":t.includes("狼")?"wolf":t.includes("サラマンダー")?"salamander":t.includes("きのこ")?"shroom":t.includes("まじん")?"djinn":t.includes("ゴーストナイト")?"ghostknight":t.includes("術士")?"caster":t.includes("巣")?"nest":t.includes("番人")?"warden":t.includes("番兵")?"sentry":"beast"}function Ip(i){const t=[],e=pi(i),n=16734810,s=(a,o,l,c,f,d,h)=>{t.push({x:a,y:o,z:l,sx:c,sy:f,sz:d,c:h})},r=(a,o,l,c)=>s(a,o,l,c,c,c,n);if(e==="rat"){s(0,.2,0,.42,.24,.5,9076852),s(0,.22,.32,.28,.22,.22,9076852),s(-.1,.36,.34,.07,.1,.04,9076852),s(.1,.36,.34,.07,.1,.04,9076852),r(-.08,.24,.44,.05),r(.08,.24,.44,.05);for(const o of[-.15,.15])for(const l of[-.16,.18])s(o,.07,l,.08,.14,.08,5918532);s(0,.2,-.4,.05,.05,.34,12626064)}else if(e==="goblin"||e==="kobold"){const a=e==="goblin"?6986314:11571296;s(-.1,.16,0,.13,.3,.14,a),s(.1,.16,0,.13,.3,.14,a),s(0,.46,.04,.38,.34,.26,a),s(0,.74,.08,.3,.26,.28,a),s(-.22,.82,.02,.06,.16,.06,a),s(.22,.82,.02,.06,.16,.06,a),s(0,.7,.22,.1,.08,.08,a),r(-.08,.78,.2,.05),r(.08,.78,.2,.05),s(-.26,.48,.06,.09,.24,.12,a),s(.28,.5,.1,.09,.22,.12,a),s(.32,.72,.12,.09,.34,.09,8018482),s(.32,.92,.12,.15,.14,.15,6965800)}else if(e==="mage")s(0,.34,0,.5,.68,.4,4864618),s(0,.3,0,.56,.1,.46,4864618),s(0,.78,0,.3,.26,.3,2761280),s(0,.94,0,.18,.16,.18,4864618),r(-.07,.8,.15,.05),r(.07,.8,.15,.05),s(.3,.6,.1,.05,.8,.05,8018482),s(.3,1.04,.1,.18,.18,.18,16742970);else if(e==="ghoul")s(-.1,.16,0,.12,.3,.13,9083512),s(.1,.16,0,.12,.3,.13,9083512),s(0,.5,.04,.34,.4,.22,9083512),s(0,.82,.06,.26,.24,.26,9083512),r(-.07,.85,.18,.045),r(.07,.85,.18,.045),s(0,.78,.18,.16,.05,.05,2761760),s(-.26,.42,.1,.08,.4,.1,9083512),s(-.26,.2,.16,.1,.08,.06,14737616),s(.26,.42,.1,.08,.4,.1,9083512),s(.26,.2,.16,.1,.08,.06,14737616);else if(e==="golem")s(-.16*1.15,.2*1.15,0,.2*1.15,.4*1.15,.24*1.15,9079426),s(.16*1.15,.2*1.15,0,.2*1.15,.4*1.15,.24*1.15,9079426),s(0,.7*1.15,0,.6*1.15,.5*1.15,.4*1.15,9079426),s(0,.74*1.15,.2*1.15,.22,.2,.04,6184536),s(-.42*1.15,.72*1.15,0,.16*1.15,.5*1.15,.2*1.15,9079426),s(.42*1.15,.72*1.15,0,.16*1.15,.5*1.15,.2*1.15,9079426),s(0,1.02*1.15,0,.26*1.15,.22*1.15,.26*1.15,9079426),r(-.06*1.15,1.04*1.15,.16,.05),r(.06*1.15,1.04*1.15,.16,.05);else if(e==="wolf"){s(0,.34,-.05,.4,.3,.8,9348800),s(0,.46,.42,.28,.24,.26,9348800),s(0,.4,.6,.14,.14,.18,6980256),s(-.05,.32,.66,.03,.06,.03,15263968),s(.05,.32,.66,.03,.06,.03,15263968),s(-.09,.62,.38,.06,.12,.05,9348800),s(.09,.62,.38,.06,.12,.05,9348800),r(-.08,.49,.54,.045),r(.08,.49,.54,.045),s(-.08,.55,.53,.06,.02,.03,6980256),s(.08,.55,.53,.06,.02,.03,6980256);for(const l of[-.14,.14])for(const c of[-.3,.25])s(l,.11,c,.1,.22,.1,6980256);s(0,.44,-.52,.09,.09,.3,9348800)}else if(e==="snake")s(0,.08,0,.6,.16,.6,5937738),s(0,.2,0,.44,.14,.44,8373354),s(.05,.36,.08,.18,.22,.18,8373354),s(.05,.52,.14,.22,.16,.24,8373354),r(-.02,.55,.27,.04),r(.13,.55,.27,.04),s(.05,.48,.3,.04,.03,.1,16734810);else if(e==="salamander"){s(0,.2,0,.44,.24,.8,13658682),s(0,.26,.5,.3,.2,.26,13658682),r(-.09,.32,.62,.045),r(.09,.32,.62,.045);for(const l of[-.16,.16])for(const c of[-.26,.3])s(l,.08,c,.1,.16,.1,11030056);s(0,.36,-.1,.08,.1,.4,16753978),s(0,.24,-.56,.09,.09,.34,11030056)}else if(e==="shroom")s(0,.2,0,.3,.4,.3,13616288),s(0,.48,0,.7,.2,.7,14205018),s(0,.6,0,.44,.12,.44,14205018),s(-.2,.56,.18,.1,.06,.1,15918768),s(.18,.55,-.14,.1,.06,.1,15918768),s(.05,.66,.1,.08,.05,.08,15918768),r(-.08,.32,.16,.045),r(.08,.32,.16,.045);else if(e==="caster"){const a=i.element,o=a==="fire"?9058858:a==="ice"?2771594:a==="holy"?9075782:6969898,l=a==="fire"?16742970:a==="ice"?8376575:a==="holy"?16771496:14200906;s(0,.34,0,.5,.68,.4,o),s(0,.3,0,.56,.1,.46,o),s(0,.78,0,.3,.26,.3,tt(o,.55)),s(0,.94,0,.18,.16,.18,o),r(-.07,.8,.15,.05),r(.07,.8,.15,.05),s(.3,.6,.1,.05,.8,.05,8018482),s(.3,1.04,.1,.18,.18,.18,l)}else if(e==="hydra"){s(0,.6,-.1,1.3,.8,1.1,5929530),s(0,1.05,-.1,.9,.3,.8,3822118);for(const f of[-.5,.5])for(const d of[-.5,.35])s(f,.14,d,.3,.28,.3,3822118);s(0,.5,-.85,.2,.2,.5,5929530),[[-.45,.15],[0,.35],[.45,.15]].forEach(([f,d],h)=>{const u=1.15+(h===1?.25:0);s(f,u-.25,.35+d*.4,.2,.5,.2,5929530),s(f,u+.05,.55+d*.4,.3,.24,.34,5929530),s(f,u-.02,.75+d*.4,.22,.1,.14,3822118),r(f-.08,u+.1,.735+d*.4,.05),r(f+.08,u+.1,.735+d*.4,.05),s(f,u+.2,.5+d*.4,.06,.1,.06,14209200)})}else if(e==="nest")s(0,.18,0,.62,.36,.62,11556938),s(0,.42,0,.4,.24,.4,11556938),s(0,.56,0,.22,.16,.22,3807766),r(-.18,.3,.3,.06),r(.2,.34,.22,.06),r(0,.22,.34,.05);else if(e==="boss"||e==="warden"||e==="sentry"){const a=e==="boss"?1.6:1.25,o=e==="boss"?16734858:e==="warden"?11561688:10133674;s(-.16*a,.2*a,0,.18*a,.4*a,.2*a,o),s(.16*a,.2*a,0,.18*a,.4*a,.2*a,o),s(0,.66*a,0,.5*a,.46*a,.34*a,o),s(0,1*a,0,.3*a,.26*a,.3*a,o),s(-.36*a,.68*a,0,.14*a,.44*a,.18*a,o),s(.36*a,.68*a,0,.14*a,.44*a,.18*a,o),r(-.08*a,1.02*a,.16*a,.06),r(.08*a,1.02*a,.16*a,.06),e==="boss"&&(s(-.15*a,1.2*a,.05,.08,.26,.08,15392976),s(.15*a,1.2*a,.05,.08,.26,.08,15392976)),e==="sentry"&&(s(.42*a,.74*a,.1,.05,.95,.05,9071162),s(.42*a,1.2*a,.1,.05,.2,.13,13028824))}else{const a=Yo(i);s(0,.32,0,.5,.4,.62,a),s(0,.36,.42,.38,.32,.3,a),r(-.1,.42,.56,.06),r(.1,.42,.56,.06);for(const o of[-.18,.18])for(const l of[-.2,.22])s(o,.11,l,.11,.22,.11,2892832);s(0,.36,-.36,.08,.08,.22,a)}return t}const wc=5915174,Ac=4015192,Sr=13938487;function Gb(i){var u,g,_;const t=[],e=Yo(i),n=Zo(i),s=n.hh,r=n.ww,a=Zi((u=i.equipment)==null?void 0:u.weapon),o=Ki((g=i.equipment)==null?void 0:g.armor),l=So((_=i.equipment)==null?void 0:_.accessory),c=o!=null&&(o.tier==="chain"||o.tier==="plate"||o.tier==="dragon"),f=((a==null?void 0:a.sil)==="staff"||(a==null?void 0:a.sil)==="grimoire")&&!c,d=(m,p,b,w,M,T,y)=>{t.push({x:m,y:p,z:b,sx:w,sy:M,sz:T,c:y})},h=(m,p,b,w,M,T,y)=>d(m*r,p*s,b,w*r,M*s,T,y);return{a:i,B:t,body:e,rs:n,HH:s,WW:r,wv:a,av:o,cv:l,heavy:c,robe:f,METAL:(o==null?void 0:o.col)??12765910,METAL2:(o==null?void 0:o.col2)??9081764,raw:d,M:h}}const Lp=["legs","belt","torso","armor","sigil","amulet","sleeves","bracer","hands","head","face","helm","regalia","shield","weapon"];function Dp(i){var l,c,f,d;const t=Zi((l=i.equipment)==null?void 0:l.weapon),e=Ki((c=i.equipment)==null?void 0:c.armor),n=So((f=i.equipment)==null?void 0:f.accessory),s=Zo(i),r=e!=null&&(e.tier==="chain"||e.tier==="plate"||e.tier==="dragon"),a=((t==null?void 0:t.sil)==="staff"||(t==null?void 0:t.sil)==="grimoire")&&!r,o={legs:a?"legs:robe":"legs:plain",belt:"belt:base",torso:"torso:base",sleeves:"sleeves:base",hands:"hands:base",head:"head:base",face:"face:base",helm:(e==null?void 0:e.tier)==="plate"?"helm:plate":(e==null?void 0:e.tier)==="dragon"?"helm:dragon":(e==null?void 0:e.tier)==="chain"?"helm:chain":(e==null?void 0:e.tier)==="leather"&&!s.hat&&!a?"helm:hachigane":s.hat?"helm:hat":a?"helm:hood":"helm:hair"};return e&&(e.tier==="leather"||e.tier==="chain"||e.tier==="plate"||e.tier==="dragon")&&(o.armor="armor:"+e.tier),(((d=i.stats)==null?void 0:d.pie)??0)>=10&&(o.sigil="sigil:cross"),(n==null?void 0:n.kind)==="amulet"&&(o.amulet="amulet:base"),(n==null?void 0:n.kind)==="bracer"&&(o.bracer="bracer:base"),i.kind==="hero"&&(o.regalia="regalia:hero"),(e==null?void 0:e.tier)==="shield"?o.shield="shield:wood":((e==null?void 0:e.tier)==="plate"||(e==null?void 0:e.tier)==="dragon")&&(o.shield="shield:metal"),t&&(o.weapon="weapon:"+t.sil),o}const Tc=i=>{const{raw:t,HH:e,WW:n,wv:s}=i,r=.42*n,a=s.blade,o=s.grip,l=s.glow,c=s.sil==="greatsword"?.13:s.big?.095:.08,f=s.sil==="greatsword"?.7:.62;t(r,.52*e+f/2+.06,.1,c,f,.075,a),t(r,.84*e,.14,.028,f*.72,.02,l??5857903),t(r,.52*e+f+.085,.1,.05,.09,.05,l??15331320),t(r,.52*e,.1,s.sil==="greatsword"?.3:.26,.055,.12,Sr),t(r,.44*e,.1,.055,.13,.055,o),t(r,.36*e,.1,.09,.07,.09,Sr)},Up={"legs:robe":i=>{i.M(0,.3,0,.5,.56,.34,tt(i.body,.88)),i.M(0,.05,0,.58,.12,.42,tt(i.body,.68))},"legs:plain":i=>{const{M:t,rs:e,av:n,METAL2:s}=i;t(-.12,.34,0,.16,.3,.17,Ac),t(.12,.34,0,.16,.3,.17,Ac);const r=e.feet??1,a=n&&(n.tier==="plate"||n.tier==="dragon")?s:r>=1.3?e.skin:wc;t(-.12,.09,.01,.18*r,.18,.22*r,a),t(.12,.09,.01,.18*r,.18,.22*r,a)},"belt:base":i=>{i.M(0,.49,0,.46,.06,.3,i.robe?13214268:wc)},"torso:base":i=>{i.M(0,.7,0,.44,.4,.27,i.body)},"armor:leather":i=>{const{M:t,av:e}=i;t(0,.7,.02,.48,.36,.3,e.col),t(0,.86,0,.5,.06,.29,e.col2),t(-.14,.82,.02,.09,.22,.31,e.col2),t(.14,.82,.02,.09,.22,.31,e.col2)},"armor:chain":i=>{const{M:t,raw:e,av:n,WW:s,HH:r}=i;t(0,.7,.02,.49,.38,.3,n.col);for(const[a,o]of[[-.13,.62],[.01,.66],[.15,.62],[-.06,.75],[.08,.78],[-.15,.8],[.02,.57]])e(a*s,o*r,.165,.035,.035,.02,n.col2);t(0,.5,0,.5,.08,.32,n.col),t(-.3,.87,0,.16,.11,.2,n.col2),t(.3,.87,0,.16,.11,.2,n.col2)},"armor:plate":i=>{const{M:t,METAL:e}=i;t(0,.72,.02,.5,.4,.31,e),t(0,.84,.2,.28,.1,.02,i.body),t(-.32,.86,0,.2,.15,.23,e),t(.32,.86,0,.2,.15,.23,e)},"armor:dragon":i=>{const{M:t,raw:e,av:n,WW:s,HH:r,METAL:a}=i;t(0,.72,.02,.5,.4,.31,n.col);for(const o of[.6,.68,.76,.84])for(const l of[-.15,0,.15])e(l*s,o*r,.175,.09,.05,.02,l===0!=(o===.68||o===.84)?tt(n.col,.78):n.col);t(0,.88,.02,.52,.05,.33,n.col2),t(0,.53,.02,.52,.05,.33,n.col2),t(-.32,.86,0,.2,.15,.23,a),t(.32,.86,0,.2,.15,.23,a)},"sigil:cross":i=>{i.raw(0,.8*i.HH,.19,.05,.16,.028,14927450),i.raw(0,.845*i.HH,.19,.13,.045,.028,14927450)},"amulet:base":i=>{i.raw(0,.75*i.HH,.185,.02,.12,.02,9077362),i.raw(0,.69*i.HH,.19,.07,.07,.03,i.cv.col)},"sleeves:base":i=>{const t=i.heavy?i.METAL2:i.body;i.M(-.31,.72,0,.15,.27,.18,t),i.M(.31,.72,0,.15,.27,.18,t)},"bracer:base":i=>{i.raw(-.31*i.WW,.58*i.HH,.01,.13,.07,.17,i.cv.col)},"hands:base":i=>{const{M:t,rs:e}=i;t(-.31,.52,.01,.11,.2,.15,e.skin),t(.31,.52,.01,.11,.2,.15,e.skin),t(-.31,.41,.03,.12,.1,.14,e.skin),t(.31,.41,.03,.12,.1,.14,e.skin)},"head:base":i=>{i.M(0,.9,0,.14,.06,.14,i.rs.skin),i.M(0,1.02,0,.32,.28,.3,i.rs.skin)},"face:base":i=>{const{M:t,raw:e,rs:n,WW:s,HH:r}=i,a=n.brow==="thin"?.032:.05;e(-.07*s,1.04*r,.16,.048,a,.03,1316895),e(.07*s,1.04*r,.16,.048,a,.03,1316895);const o=n.brow==="bushy"?.085:n.brow==="thin"?.058:.06,l=n.brow==="bushy"?.036:.02;if(e(-.07*s,1.095*r,.158,o,l,.024,n.hair),e(.07*s,1.095*r,.158,o,l,.024,n.hair),e(0,1.015*r,.168,n.noseS??.045,(n.noseS??.045)*.9,.035,tt(n.skin,.86)),e(0,.955*r,.157,.07,.018,.022,10115664),n.cheeks&&(e(-.105*s,.995*r,.152,.05,.04,.024,n.cheeks),e(.105*s,.995*r,.152,.05,.04,.024,n.cheeks)),n.beard){const c=n.beardS??1;t(0,.955-.02*c,.13,.28,.16*c,.1,n.beard),c>=1&&t(0,.86,.13,.1,.1,.07,n.beard)}n.sideHair&&(t(-.17,1,.02,.05,.2,.26,n.hair),t(.17,1,.02,.05,.2,.26,n.hair)),n.ear&&(t(-.2,1.06,0,.05,.14,.05,n.skin),t(.2,1.06,0,.05,.14,.05,n.skin))},"helm:plate":i=>{i.M(0,1.06,0,.36,.26,.34,i.METAL),i.M(0,1,.17,.06,.2,.03,i.METAL2),i.M(0,1.24,0,.07,.14,.36,13781834)},"helm:dragon":i=>{i.M(0,1.06,0,.36,.26,.34,i.av.col),i.M(0,1.21,0,.3,.06,.3,i.av.col2),i.raw(-.17*i.WW,1.26*i.HH,.02,.05,.14,.05,15261124),i.raw(.17*i.WW,1.26*i.HH,.02,.05,.14,.05,15261124)},"helm:chain":i=>{i.M(0,1.12,-.01,.35,.14,.33,i.av.col2),i.M(-.17,1,0,.04,.22,.3,i.av.col2),i.M(.17,1,0,.04,.22,.3,i.av.col2)},"helm:hachigane":i=>{i.M(0,1.16,-.02,.34,.1,.32,i.rs.hair),i.M(0,1.13,.155,.3,.045,.03,i.av.col2)},"helm:hat":i=>{i.M(0,1.16,0,.2,.12,.2,i.rs.hat),i.M(0,1.3,0,.08,.16,.08,i.rs.hat)},"helm:hood":i=>{i.M(0,1.16,-.02,.37,.12,.35,tt(i.body,.78)),i.M(0,1.24,-.1,.18,.1,.2,tt(i.body,.68))},"helm:hair":i=>{i.M(0,1.16,-.02,.34,.1,.32,i.rs.hair)},"regalia:hero":i=>{i.M(0,1.21,0,.36,.06,.34,16769354);for(const t of[[0,.17],[-.13,0],[.13,0]])i.raw(t[0]*i.WW,1.27*i.HH,t[1],.05,.07,.05,16769354);i.M(0,.7,-.17,.42,.56,.04,9052208)},"shield:wood":i=>{const{raw:t,WW:e,HH:n,av:s}=i;t(-.36*e,.68*n,.1,.07,.42,.34,s.col),t(-.36*e,.68*n,.28,.045,.16,.14,s.col2),t(-.36*e,.68*n,.1,.075,.06,.36,s.col2)},"shield:metal":i=>{const{raw:t,WW:e,HH:n}=i;t(-.36*e,.68*n,.1,.07,.4,.32,i.METAL),t(-.36*e,.68*n,.27,.04,.2,.16,i.body)},"weapon:club":i=>{const{raw:t,HH:e,WW:n,wv:s}=i,r=.42*n;t(r,.66*e,.06,.07,.5,.07,s.grip),t(r,.92*e,.06,.11,.16,.11,s.blade)},"weapon:dagger":i=>{const{raw:t,HH:e,WW:n,wv:s}=i,r=.42*n,a=s.blade,o=s.grip,l=s.glow;t(r,.62*e,.08,.05,.3,.05,a),t(r,.78*e,.08,.03,.1,.02,l??15331320),t(r,.46*e,.08,.14,.04,.08,Sr),t(r,.4*e,.08,.05,.1,.05,o)},"weapon:sword":Tc,"weapon:greatsword":Tc,"weapon:axe":i=>{const{raw:t,HH:e,WW:n,wv:s}=i,r=.42*n,a=s.blade,o=s.grip,l=s.glow;t(r,.72*e,.06,.055,.72,.055,o),t(r+.1,1.02*e,.06,.2,.22,.07,a),t(r+.21,1.02*e,.06,.03,.3,.075,l??15331320),t(r,1.14*e,.06,.05,.08,.05,9081764)},"weapon:halberd":i=>{const{raw:t,HH:e,WW:n,wv:s}=i,r=.42*n;t(r,.82*e,.06,.05,1.15,.05,s.grip),t(r+.09,1.18*e,.06,.16,.18,.06,s.blade),t(r,1.42*e,.06,.045,.16,.045,15331320),t(r-.07,1.18*e,.06,.08,.05,.05,9081764)},"weapon:hammer":i=>{const{raw:t,HH:e,WW:n,wv:s}=i,r=.42*n,a=s.glow;t(r,.72*e,.06,.065,.7,.065,s.grip),t(r,1.1*e,.06,.26,.2,.17,s.blade),a!=null&&(t(r+.06,1.1*e,.155,.05,.05,.02,a),t(r-.06,1.1*e,.155,.05,.05,.02,a))},"weapon:staff":i=>{const{raw:t,HH:e,WW:n,wv:s}=i,r=.42*n,a=s.blade,o=s.grip,l=s.glow;t(r,.68*e,.04,.05,.95,.05,o),t(r,.28*e,.04,.07,.05,.07,6967344),t(r,1.2*e,.04,.1,.1,.1,Sr),t(r,1.28*e,.04,.16,.16,.16,a),t(r,1.28*e,.04,.08,.22,.08,l??14218495)},"weapon:grimoire":i=>{const{raw:t,HH:e,WW:n,wv:s}=i;t(-.24*n,.72*e,.17,.2,.26,.07,s.blade),t(-.24*n,.72*e,.21,.16,.2,.02,15129792),t(-.24*n,.72*e,.226,.085,.105,.018,s.glow??13212415)},"weapon:bow":i=>{const{raw:t,HH:e,WW:n,wv:s}=i,r=.42*n,a=s.blade,o=s.grip,l=s.glow,c=l!=null?a:8018474,f=r+.02;for(const[d,h]of[[.36,.05],[.5,.1],[.64,.13],[.78,.13],[.92,.1],[1.06,.05]])t(f,d*e,.06+h,.036,.16*e,.05,c);t(f,.71*e,.19,.05,.13,.06,o),t(f,.71*e,.045,.014,.68*e,.014,14734516),l!=null&&(t(f,.5*e,.17,.05,.05,.036,l),t(f,.92*e,.17,.05,.05,.036,l)),t(-.15*n,.82*e,-.21,.13,.34,.13,6965798),t(-.15*n,1.02*e,-.21,.09,.1,.09,15129e3),t(-.11*n,1.02*e,-.25,.06,.14,.06,13613182)},"weapon:sling":i=>{const{raw:t,HH:e,WW:n,wv:s}=i,r=.42*n;t(r-.02*n,.5*e,.04,.08,.14,.08,s.grip),t(r-.02*n,.58*e,.04,.03,.08,.03,5915174)}};function Np(i){const t=Gb(i),e=Dp(i);for(const n of Lp){const s=e[n];if(!s)continue;const r=Up[s];if(!r)throw new Error(`party パーツ ${s}（slot=${n}）が棚に無い`);r(t)}return t.B}function Fp(i){let t;try{t=i.stats&&i.equipment?Pc(i).maxHp:void 0}catch{t=void 0}return{modelRef:i.modelRef,equipment:i.equipment,hp:i.hp,hpMax:t}}const Hb={snake:ki,salamander:ki,dragon:ki,hydra:ki};function Op(i,t=!1){const e=[],n=s=>{const r=Dr(i),a=Ur(s,r);for(const o of e)o.gw=ws(o.x,o.y,o.z,a,r);return i.kind==="monster"&&bp(s,Hb[pi(i)]??0),{geo:s,spots:e}};if(i.kind==="monster"){if(hi(i)){const c=Rr(Fp(i));return{geo:c.geo,spots:c.spots}}const s=pi(i);if(Kn.has(s)||!Mr[s]&&Ir[s]){const c=Lr(s,t);return e.push(...c.spots),n(c.geo)}const r=br[s]?new Set(br[s]):null,a=Mr[s];if(a){const c=a(),f=Sp(c.cells),d=t===!0?1:2,h=d>1?Pr(f,d):f,u={pos:[],nrm:[],col:[],idx:[]};if(ys(u,h,c.s/d,0,0,0,c.jit),r)for(const[g,_]of f){if(!r.has(_))continue;const[m,p,b]=g.split(",").map(Number),w=c.s*1.5;e.push({x:(m+.5)*c.s,y:(p+.5)*c.s,z:(b+.5)*c.s,sx:w,sy:w,sz:w,c:_})}return n(Ss(u))}const o=Ip(i),l=s==="hydra"||s==="boss"?t===!0?.055:.04:t===!0?.05:.032;if(r)for(const c of o)r.has(c.c)&&e.push({x:c.x,y:c.y,z:c.z,sx:c.sx*1.12,sy:c.sy*1.12,sz:c.sz*1.12,c:c.c});return n(Ep(o,l))}return Ko(i,t)}function Ko(i,t=!1){var d,h,u;const e=[],n=Zi((d=i.equipment)==null?void 0:d.weapon),s=new Set;(n==null?void 0:n.glow)!=null&&s.add(n.glow),(n==null?void 0:n.sil)==="staff"&&s.add(n.blade),(n==null?void 0:n.sil)==="grimoire"&&s.add(n.glow??13212415),(((h=i.stats)==null?void 0:h.pie)??0)>=10&&s.add(14927450);const r=Np(i);if(s.size)for(const g of r)s.has(g.c)&&e.push({x:g.x,y:g.y,z:g.z,sx:g.sx*1.12,sy:g.sy*1.12,sz:g.sz*1.12,c:g.c});const a=new Map;n&&(n.sil==="sword"||n.sil==="greatsword"||n.sil==="axe"||n.sil==="halberd"||n.sil==="dagger"||n.sil==="hammer")&&a.set(n.blade,Mo);const o=Ki((u=i.equipment)==null?void 0:u.armor);if(o){const g=o.tier==="plate"||o.tier==="chain"?Mo:o.tier==="dragon"?ki:Mp;a.set(o.col,g),a.set(o.col2,g)}const l=Ep(r,t==="hi"?.024:t?.045:.03,.05,a.size?a:void 0),c=Dr(i),f=Ur(l,c);for(const g of e)g.gw=ws(g.x,g.y,g.z,f,c);return{geo:l,spots:e}}function Jo(i){var s,r,a,o;const t=Zi((s=i.equipment)==null?void 0:s.weapon),e=Ki((r=i.equipment)==null?void 0:r.armor),n=So((a=i.equipment)==null?void 0:a.accessory);return`f:${i.kind}:${i.race??""}:${t?`${t.sil}.${t.blade}.${t.glow??""}${t.big?"B":""}`:""}:${(e==null?void 0:e.tier)??""}:${n?n.kind+n.col:""}:${i.color??""}:${(((o=i.stats)==null?void 0:o.pie)??0)>=10?1:0}`}function Bp(i,t){let e=0,n=0,s=0;if(i==="melee"){const r=t<.32?t/.32:1-(t-.32)/.68;e=.34*r,n=.3*r,s=Math.sin(t*Math.PI)*.32}else if(i==="shoot"){const r=Math.sin(Math.min(1,t/.5)*Math.PI);e=-.09*r,n=-.13*r}else if(i==="cast"){const r=Math.sin(t*Math.PI);e=-.06*r,n=-.16*r}else if(i==="windup"){const r=Math.sin(t*Math.PI);e=-.16*r,n=-.3*r}else if(i==="exhale"){const r=Math.sin(Math.min(1,t/.4)*Math.PI*.5)*(1-Math.max(0,(t-.55)/.45));e=.15*r,n=.26*r}else i==="heal"&&(n=-.09*Math.sin(t*Math.PI));return{lunge:e,tilt:n,yawOff:s}}function zp(i){const t=1-i,e=t*t;return{kb:.17*e,sxz:1+.07*e,sy:1-.12*e}}function kp(i){const t=Math.max(0,i),e=Math.min(1,t*1.6);return{ang:1.35*e*e,sink:.22*t,opacity:t<.55?1:1-(t-.55)/.45}}const ii={melee:300,shoot:320,cast:420,heal:420,windup:520,exhale:460},Ke=i=>({mode:"biped",dur:175,stride:.1,arm:.055,lift:.05,bounce:.028,sway:.02,breath:.008,turn:110,...i}),Wn={biped:Ke({}),small:Ke({dur:150,stride:.09,arm:.05,bounce:.032,sway:.026}),shamble:Ke({dur:215,stride:.075,arm:.028,lift:.028,bounce:.016,sway:.05,turn:150}),heavy:Ke({dur:235,stride:.09,arm:.04,lift:.04,bounce:.05,sway:.05,breath:.006,turn:170}),giant:Ke({dur:265,stride:.12,arm:.085,lift:.06,bounce:.07,sway:.07,breath:.014,turn:230}),quad:Ke({mode:"quad",dur:150,stride:.09,arm:0,lift:.04,bounce:.02,sway:.014,turn:120}),quadheavy:Ke({mode:"quad",dur:260,stride:.1,arm:0,lift:.05,bounce:.045,sway:.05,breath:.016,turn:240}),serpent:Ke({mode:"serpent",dur:190,stride:0,arm:0,lift:0,bounce:0,sway:.06,breath:0,turn:140}),robe:Ke({mode:"robe",dur:185,stride:.05,arm:0,lift:0,bounce:.022,sway:.022,turn:130}),float:Ke({mode:"float",dur:210,stride:0,arm:0,lift:0,bounce:0,sway:.02,breath:0,turn:150,hover:.05}),stomp:Ke({mode:"stomp",dur:245,stride:0,arm:0,lift:0,bounce:.045,sway:.05,breath:.006,turn:200}),idol:Ke({mode:"stomp",dur:285,stride:0,arm:0,lift:0,bounce:.02,sway:.06,breath:0,turn:260})},Vb={rat:"quad",wolf:"quad",salamander:"quad",beast:"quad",snake:"serpent",hydra:"quadheavy",dragon:"quadheavy",goblin:"small",kobold:"small",ghoul:"shamble",golem:"heavy",armor:"heavy",ghostknight:"heavy",boss:"giant",frostgiant:"giant",colossus:"giant",mage:"robe",caster:"robe",spirit:"float",seraph:"float",djinn:"stomp",shroom:"stomp",nest:"stomp",idol:"idol",warden:"biped",sentry:"biped"};function Dr(i){var s,r;if(i.kind==="monster"){const a=ap(i);return a?Wn[a.gait]??Wn.biped:Wn[Vb[pi(i)]??"biped"]}const t=Zi((s=i.equipment)==null?void 0:s.weapon),e=Ki((r=i.equipment)==null?void 0:r.armor),n=e!=null&&(e.tier==="chain"||e.tier==="plate"||e.tier==="dragon");return((t==null?void 0:t.sil)==="staff"||(t==null?void 0:t.sil)==="grimoire")&&!n?Wn.robe:Wn.biped}function ws(i,t,e,n,s){const r=n.H||1,a=(i>=0?1:-1)*Math.min(1,Math.abs(i)/.06),o=Math.min(1,Math.max(0,t/r));if(s.mode==="float")return[0,0,1];if(s.mode==="serpent"){const d=(e-n.zMin)/Math.max(1e-6,n.zMax-n.zMin);return[0,0,Math.sin(d*Math.PI*2.2)]}if(s.mode==="stomp")return[0,0,o];if(s.mode==="robe"){const d=.2*r;return[t<d?a*(1-t/d)*.6:0,0,o]}if(s.mode==="quad"){const d=.3*r,h=(n.zMin+n.zMax)/2;return[t<d&&Math.abs(i)>.3*n.halfW?a*(e>=h?1:-1)*Math.pow(1-t/d,1.5):0,0,o]}const l=.4*r,c=.72*r,f=.42*n.halfW;return Math.abs(i)>f&&t>.18*r&&t<.95*r?[0,-a*Math.min(1,Math.max(0,(c-t)/Math.max(1e-6,c-l*.6))),o]:t<l?[a*(1-t/l),0,o]:[0,0,o]}function Ur(i,t){i.computeBoundingBox();const e=i.boundingBox,n={H:Math.max(1e-6,e.max.y),halfW:Math.max(1e-6,Math.max(Math.abs(e.min.x),Math.abs(e.max.x))),zMin:e.min.z,zMax:e.max.z},s=i.getAttribute("position"),r=s.count,a=new Float32Array(r*3);for(let o=0;o<r;o++){const l=ws(s.getX(o),s.getY(o),s.getZ(o),n,t);a[o*3]=l[0],a[o*3+1]=l[1],a[o*3+2]=l[2]}return i.setAttribute("aGait",new fe(a,3)),n}function Gp(i,t,e,n=0,s=0){const r=Math.sin(t);return{a:[i.stride*r*e,i.arm*r*e,i.bounce*.5*(1-Math.cos(2*t))*e+n+s,i.sway*r*e],b:[i.lift*e,Math.cos(t)*e]}}const Rc=(i,t)=>{const e=Math.PI*2;let n=(t-i)%e;return n>Math.PI&&(n-=e),n<-Math.PI&&(n+=e),n},Cc=i=>i<=0?0:i>=1?1:i*i*(3-2*i);class Hp{constructor(){ht(this,"m",new Map);ht(this,"gen",0)}reset(){this.m.clear()}beginTurn(){this.gen++}prune(){for(const[t,e]of this.m)this.gen-e.gen>8&&this.m.delete(t)}note(t,e,n,s,r,a,o){let l=this.m.get(t);if(!l){l={tx:e,ty:n,tz:s,fx:e,fy:n,fz:s,t0:a-9999,dur:1,phase0:0,adv:0,ry:r,ryFrom:r,ryT0:a-9999,ryDur:1,walkT:a-9999,noteT:a-9999,gen:this.gen},this.m.set(t,l);return}if(l.gen=this.gen,e!==l.tx||s!==l.tz||n!==l.ty){if(Math.max(Math.abs(e-l.tx),Math.abs(s-l.tz))>1.75)l.fx=e,l.fy=n,l.fz=s,l.t0=a-9999,l.dur=1,l.phase0=0,l.adv=0,l.walkT=a-9999;else{const f=this.sample(t,a),d=Math.max(Math.abs(f.x-e),Math.abs(f.z-s))>1.15;l.fx=d?l.tx:f.x,l.fy=d?l.ty:f.y,l.fz=d?l.tz:f.z,l.phase0=f.phase%(Math.PI*2),l.adv=Math.PI,f.active||(l.walkT=a),l.dur=Math.min(o.dur,Math.max(90,a-l.noteT)),l.t0=a}l.noteT=a}if(Math.abs(Rc(l.ry,r))>1e-6){const c=this.ryAt(l,a);l.ryFrom=c,l.ry=r,l.ryT0=a,l.ryDur=Math.max(1,o.turn)}l.tx=e,l.ty=n,l.tz=s}ryAt(t,e){const n=Cc((e-t.ryT0)/t.ryDur);return t.ryFrom+Rc(t.ryFrom,t.ry)*n}sample(t,e){const n=this.m.get(t);if(!n)return null;const s=Math.min(1,Math.max(0,(e-n.t0)/n.dur)),r=Cc(s),a=s<1,o=n.t0+n.dur,l=Math.min(1,Math.max(0,(e-n.walkT)/80)),c=a?l:Math.max(0,Math.min(l,1-(e-o)/160)),f=e-n.ryT0<n.ryDur;return{x:n.fx+(n.tx-n.fx)*r,y:n.fy+(n.ty-n.fy)*r,z:n.fz+(n.tz-n.fz)*r,ry:f?this.ryAt(n,e):n.ry,phase:n.phase0+n.adv*r,moveK:c,active:a||f||c>.02}}}const Wb=[{id:"floor",name:"床石",hint:"render-voxel.ts floorStones()／ENV[theme].floorA/B/floorAcc/crackP"},{id:"floor-high",name:"高所（段丘＋階段石）",hint:"render-voxel.ts floorStones(by)／stairStep()"},{id:"water",name:"水場",hint:"render-voxel.ts rebuild() water ブロック／ENV.water/waterDeep/sparkle"},{id:"wall",name:"壁",hint:"render-voxel.ts faceBricks()/capStones()／ENV.wallA/B/wallAcc"},{id:"wall-breakable",name:"壊せる壁",hint:"render-voxel.ts rebuild() breakable（系統色 0x9c6b3e）"},{id:"wall-locked",name:"鍵扉",hint:"render-voxel.ts rebuild() locked（系統色 0xd8a838）"},{id:"torch",name:"トーチの壁",hint:"render-voxel.ts rebuild() トーチ／ENV.flame/flameCore/torchN"},{id:"low",name:"胸壁（低い壁）",hint:"render-voxel.ts rebuild() t.low ブロック"},{id:"pillar",name:"柱",hint:"render-voxel.ts rebuild() t.pillar ブロック"},{id:"stairs",name:"降り階段",hint:"render-voxel.ts buildStairs()"},{id:"upstairs",name:"上り階段",hint:"render-voxel.ts rebuild() upstairs（金の段）"},{id:"chest",name:"宝箱",hint:"render-voxel.ts buildChest()"},{id:"chest-open",name:"宝箱（開封）",hint:"render-voxel.ts buildChest(opened=true)"},{id:"shrine-spring",name:"泉",hint:"render-voxel.ts buildShrine('spring')"},{id:"shrine-altar",name:"祭壇",hint:"render-voxel.ts buildShrine('altar')"},{id:"portal-return",name:"帰還装置",hint:"render-voxel.ts rebuild() portal=return ブロック"},{id:"portal-elevator",name:"エレベーター",hint:"render-voxel.ts rebuild() portal=elevator ブロック"},{id:"hazard",name:"危険床（火）",hint:"render-voxel.ts rebuild() t.hazard ブロック（系統色は 2D HAZ_COL と同じ）"},{id:"slip",name:"凍面",hint:"render-voxel.ts rebuild() floorFeat=slip"},{id:"pit",name:"空隙",hint:"render-voxel.ts rebuild() floorFeat=pit"},{id:"item",name:"落とし物",hint:"render-voxel.ts rebuild() t.item（自光 OCT）"},{id:"trap",name:"罠（露見）",hint:"render-voxel.ts rebuild() t.trap"},{id:"town-house-shop",name:"店（街・日よけ）",hint:"render-voxel.ts buildHouse()（fac=shop）／dungeon.ts genTown()（配置）"},{id:"town-house-equip",name:"装備屋（街）",hint:"render-voxel.ts buildHouse()（fac=equip・看板色 FAC_HEX）"},{id:"town-house-craft",name:"工房（街・煙突）",hint:"render-voxel.ts buildHouse()（fac=craft・炉の窓/煙突）"},{id:"town-house-heal",name:"宿（街・2階建て）",hint:"render-voxel.ts buildHouse()（fac=heal・tall）"},{id:"town-house-recruit",name:"酒場（街・出会い）",hint:"render-voxel.ts buildHouse()（fac=recruit）"},{id:"town-fountain",name:"噴水（広場の中心）",hint:"render-voxel.ts buildFountain()／dungeon.ts genTown()（deco=fountain）"},{id:"town-portal",name:"テーマ穴の門（火）",hint:"render-voxel.ts buildPortalGate()／色は dungeon.ts THEME_DEF.col と同系"},{id:"town-brazier",name:"かがり火",hint:"render-voxel.ts buildBrazier()（deco=brazier）"},{id:"town-tree",name:"植栽（庭木）",hint:"render-voxel.ts buildTree()（deco=tree）"},{id:"town-fence",name:"柵",hint:"render-voxel.ts buildFence()（deco=fence・宿場の境）"},{id:"town-road",name:"石畳の道",hint:"render-voxel.ts roadStones()（deco=road）"},{id:"town-counter",name:"受付マス（室内）",hint:"render-voxel.ts buildSample town-counter／dungeon.ts genInterior()（counter prop→facility）"}];class Xb{constructor(t,e){ht(this,"board");ht(this,"onPick");ht(this,"scene",new ng);ht(this,"camera",new Xe(46,1,.1,600));ht(this,"gl");ht(this,"canvas");ht(this,"group",new Je);ht(this,"matCache",new Map);ht(this,"matECache",new Map);ht(this,"voxMat",new or({color:16777215}));ht(this,"voxMatE",new Gn({color:16777215}));ht(this,"haloOn",!0);ht(this,"haloIm",null);ht(this,"haloMat",null);ht(this,"haloGeo",null);ht(this,"haloTexObj",null);ht(this,"uCutY",{value:1e9});ht(this,"voxBuf",[]);ht(this,"voxBufE",[]);ht(this,"env",fn.plain);ht(this,"envKey","");ht(this,"ambL",null);ht(this,"sunL",null);ht(this,"fillL",null);ht(this,"heroL",null);ht(this,"groundM",null);ht(this,"_m4",new ie);ht(this,"_vc",new Gt);ht(this,"raycaster",new Pg);ht(this,"groundPlane",new Hn(new B(0,1,0),0));ht(this,"camTarget",new B);ht(this,"wantTgt",new B);ht(this,"zoom",1);ht(this,"camYaw",Math.PI/2);ht(this,"camPitch",.57);ht(this,"W",56);ht(this,"H",34);ht(this,"inited",!1);ht(this,"raf",0);ht(this,"active",!1);ht(this,"g",null);ht(this,"v",null);ht(this,"fxGroup",new Je);ht(this,"actorGrp",new Map);ht(this,"lastHitSeq",0);ht(this,"anims",[]);ht(this,"flashes",[]);ht(this,"parts",[]);ht(this,"ghosts",[]);ht(this,"nums",[]);ht(this,"numTex",new Map);ht(this,"shakeT0",-1);ht(this,"shakeAmp",0);ht(this,"lastT",0);ht(this,"lastActSeq",0);ht(this,"moveCh",new Hp);ht(this,"gaitMats",new Map);ht(this,"spotRefs",new Map);ht(this,"badgeGrps",new Map);ht(this,"imE",null);ht(this,"lastFloorRef",null);ht(this,"actAnims",[]);ht(this,"projs",[]);ht(this,"charges",[]);ht(this,"impactDelay",new Map);ht(this,"_q1",new Yn);ht(this,"_q2",new Yn);ht(this,"_ax",new B);ht(this,"mobile",!1);ht(this,"resizeFrames",0);ht(this,"_shadow");ht(this,"bodyCache",new Map);ht(this,"glowCache",new Map);ht(this,"hiIds",new Set);this.board=t,this.onPick=e}haloScale(t,e,n){return Math.min(1.25,Math.max(.2,(t+e+n)/3*2.6))}haloMatGet(){if(this.haloMat)return this.haloMat;const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,1,32,32,31);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.35,"rgba(255,255,255,0.32)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),this.haloTexObj=new fa(t);const s=new Gn({map:this.haloTexObj,transparent:!0,depthWrite:!1,blending:ps});return s.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <project_vertex>",`vec4 mvPosition = vec4(0.0, 0.0, 0.0, 1.0);
#ifdef USE_INSTANCING
	mvPosition = modelViewMatrix * (instanceMatrix * mvPosition);
	mvPosition.xy += position.xy * length(vec3(instanceMatrix[0]));
#else
	mvPosition = modelViewMatrix * mvPosition;
	mvPosition.xy += position.xy;
#endif
	gl_Position = projectionMatrix * mvPosition;`)},s.customProgramCacheKey=()=>"cd-halo",this.haloMat=s,s}buildHalo(t){const e=t.length/7;if(!e)return null;this.haloGeo||(this.haloGeo=new li(1,1));const n=new Ol(this.haloGeo,this.haloMatGet(),e);for(let s=0;s<e;s++){const r=s*7,a=this.haloScale(t[r+3],t[r+4],t[r+5]);this._m4.makeScale(a,a,a),this._m4.setPosition(t[r],t[r+1],t[r+2]),n.setMatrixAt(s,this._m4),n.setColorAt(s,this._vc.setHex(t[r+6]&16777215).multiplyScalar(.5))}return n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n.frustumCulled=!1,n.renderOrder=2,this.group.add(n),n}injectCut(t){t.onBeforeCompile=e=>{e.uniforms.uCutY=this.uCutY,e.vertexShader=`varying float vCutWy;
`+e.vertexShader.replace("#include <project_vertex>",`vec4 cwp = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
cwp = instanceMatrix * cwp;
#endif
vCutWy = (modelMatrix * cwp).y;
#include <project_vertex>`),e.fragmentShader=`uniform float uCutY; varying float vCutWy;
`+e.fragmentShader.replace("void main() {",`void main() {
	if (vCutWy > uCutY && mod(gl_FragCoord.x + gl_FragCoord.y, 2.0) < 1.0) discard;`)}}mount(){var t;this.injectCut(this.voxMat),this.injectCut(this.voxMatE),this.scene.background=new Gt(1449e3),this.scene.fog=new Oo(1449e3,.04),this.gl=new AM({antialias:!0}),this.gl.toneMapping=wo,this.gl.toneMappingExposure=1.22,this.gl.setPixelRatio(Math.min(devicePixelRatio,2)),this.canvas=this.gl.domElement,this.canvas.style.display="none",this.canvas.style.position="absolute",this.canvas.style.left="0",this.canvas.style.top="0",this.canvas.style.borderRadius="0",(t=this.board.parentElement)==null||t.insertBefore(this.canvas,this.board.nextSibling),this.scene.add(this.group),this.scene.add(this.fxGroup),window.cdVox=()=>{const e=this.gl.info.render;return{draw:e.calls,tri:e.triangles}},window.cdVoxR=this,this.canvas.addEventListener("click",e=>{const n=this.screenToTile(e.clientX,e.clientY);n&&this.onPick(n)}),this.canvas.addEventListener("wheel",e=>{e.preventDefault(),this.zoom=Math.min(2.4,Math.max(.55,this.zoom+(e.deltaY>0?.1:-.1)))},{passive:!1}),addEventListener("resize",()=>{this.active&&this.resize(this.mobile)}),addEventListener("keydown",e=>{if(!this.active||!e.shiftKey)return;const n=e.key;if(n==="ArrowUp"||n==="w"||n==="ArrowDown"||n==="s"){e.preventDefault();const s=n==="ArrowUp"||n==="w";this.camPitch=Math.min(1.32,Math.max(.4,this.camPitch+(s?.08:-.08)))}}),this.loop()}resize(t){if(!this.gl)return;this.mobile=t;const e=innerWidth,n=innerHeight;this.gl.setSize(e,n),this.canvas.style.width=e+"px",this.canvas.style.height=n+"px",this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}render(t,e){this.g=t,this.v=e,this.rebuild(),this.consumeActs(),this.consumeHits()}screenToTile(t,e){var d,h;if(!this.canvas)return null;const n=this.canvas.getBoundingClientRect(),s=new Bt((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);const r=(d=this.g)==null?void 0:d.actors.find(u=>u.kind==="hero"),a=r?(h=this.g.floor.tiles[r.pos.y])==null?void 0:h[r.pos.x]:null,o=r?(r.z===1&&(a!=null&&a.over)?a.over.height:(a==null?void 0:a.height)??0)*Me:0;this.groundPlane.constant=-o;const l=new B;if(!this.raycaster.ray.intersectPlane(this.groundPlane,l))return null;const c=Math.round(l.x),f=Math.round(l.z);return c<0||f<0||c>=this.W||f>=this.H?null:{x:c,y:f}}dispose(){var t,e,n;this.active=!1,this.raf&&cancelAnimationFrame(this.raf),this.clearFx();for(const s of this.numTex.values())s.tex.dispose();this.numTex.clear(),(t=this.haloTexObj)==null||t.dispose(),this.haloTexObj=null,this.haloMat=null,this.haloIm=null,(e=this.canvas)==null||e.remove(),(n=this.gl)==null||n.dispose()}setActive(t){this.active=t,t&&(this.resizeFrames=8),this.canvas&&(this.canvas.style.display=t?"block":"none"),t||this.clearFx()}shortLerp(t,e,n){const s=Math.PI*2;let r=(e-t)%s;return r>Math.PI&&(r-=s),r<-Math.PI&&(r+=s),t+r*n}loop(){var n,s;if(this.raf=requestAnimationFrame(()=>this.loop()),!this.active||!this.g)return;this.resizeFrames>0&&(this.resizeFrames--,this.resize(this.mobile));const t=this.g.actors.find(r=>r.kind==="hero");if(t){const r=t.facing||{dx:0,dy:1},a=Math.round(Math.atan2(r.dy,r.dx)/(Math.PI/2))*(Math.PI/2);this.camYaw=this.shortLerp(this.camYaw,a+Math.PI,.16);const o=(n=this.g.floor.tiles[t.pos.y])==null?void 0:n[t.pos.x],l=(t.z===1&&(o!=null&&o.over)?o.over.height:(o==null?void 0:o.height)??0)*Me;{let u=1e9;if(t.z!==1)for(const[g,_]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]]){const m=(s=this.g.floor.tiles[t.pos.y+_])==null?void 0:s[t.pos.x+g];if(m!=null&&m.over&&m.over.height*Me>l){u=l+1.45;break}}this.uCutY.value=u}const c=this.moveCh.sample(t.id,performance.now());this.wantTgt.set((c==null?void 0:c.x)??t.pos.x,.4+((c==null?void 0:c.y)??l),(c==null?void 0:c.z)??t.pos.y),this.camTarget.lerp(this.wantTgt,.25);const f=8.1*this.zoom,d=f*Math.cos(this.camPitch),h=f*Math.sin(this.camPitch);if(this.camera.position.set(this.camTarget.x+d*Math.cos(this.camYaw),this.camTarget.y+h,this.camTarget.z+d*Math.sin(this.camYaw)),this.camera.lookAt(this.camTarget),this.heroL){const u=performance.now()*.001;this.heroL.position.set(this.camTarget.x,this.camTarget.y+1.55,this.camTarget.z),this.heroL.intensity=this.env.heroI*(.92+.05*Math.sin(u*9.3)+.04*Math.sin(u*23.7))}}const e=performance.now();if(this.shakeT0>=0){const r=(e-this.shakeT0)/360;if(r>=1)this.shakeT0=-1;else if(r>=0){const a=this.shakeAmp*(1-r);this.camera.position.x+=Math.sin(e*.055)*a,this.camera.position.y+=Math.sin(e*.047+1.7)*a*.6}}this.tickFx(e),this.gl.render(this.scene,this.camera)}mat(t){let e=this.matCache.get(t);return e||(e=new or({color:t}),this.matCache.set(t,e)),e}matE(t){let e=this.matECache.get(t);return e||(e=new Gn({color:t}),this.matECache.set(t,e)),e}contactShadow(){if(!this._shadow){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,2,32,32,31);n.addColorStop(0,"rgba(0,0,0,0.42)"),n.addColorStop(.6,"rgba(0,0,0,0.20)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const s=new fa(t),r=new Gn({map:s,transparent:!0,depthWrite:!1,toneMapped:!1}),a=new li(1,1);a.rotateX(-Math.PI/2),this._shadow={geo:a,mat:r}}return this._shadow}add(t,e,n,s,r,a,o){const l=new ne(Fe,this.mat(o));l.position.set(t,e,n),l.scale.set(s,r,a),this.group.add(l)}addG(t,e,n,s,r,a,o,l){const c=new ne(t,this.mat(l));c.position.set(e,n,s),c.scale.set(r,a,o),this.group.add(c)}addGE(t,e,n,s,r,a,o,l){const c=new ne(t,this.matE(l));c.position.set(e,n,s),c.scale.set(r,a,o),this.group.add(c)}vox(t,e,n,s,r,a,o){this.voxBuf.push(t,e,n,s,r,a,o)}voxE(t,e,n,s,r,a,o){this.voxBufE.push(t,e,n,s,r,a,o)}flushBuf(t,e){const n=t.length/7;if(!n)return null;const s=new Ol(Fe,e,n);for(let r=0;r<n;r++){const a=r*7;this._m4.makeScale(t[a+3],t[a+4],t[a+5]),this._m4.setPosition(t[a],t[a+1],t[a+2]),s.setMatrixAt(r,this._m4),s.setColorAt(r,this._vc.setHex(t[a+6]))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.frustumCulled=!1,this.group.add(s),s}flushVox(){this.flushBuf(this.voxBuf,this.voxMat),this.voxBuf=[];const t=this.voxBufE,e=this.flushBuf(t,this.voxMatE);return this.voxBufE=[],this.haloIm=this.haloOn&&typeof document<"u"?this.buildHalo(t):null,e}stairStep(t,e,n,s,r,a){const o=tt(11581638,(.9+(t*17+e*31)%4*.04)*a),l=r-Me,c=r-Me*.5,f=c-l,d=(l+c)/2,h=.9,u=.5,g=.5+u/2;n!==0?this.vox(t+n*g,d,e,u,f,h,o):this.vox(t,d,e+s*g,h,f,u,o)}faceBricks(t,e,n,s,r,a,o,l,c,f,d,h=0,u=-1){const g=we/c,_=1/f,m=.04;for(let p=0;p<c;p++){const b=p%2?-_/2:0,w=(p+.5)*g+h;for(let M=-1;M<=f;M++){let T=-.5+b+M*_,y=T+_;T=Math.max(T,-.5),y=Math.min(y,.5);const C=y-T;if(C<.06)continue;const x=(T+y)/2,E=t*73+e*131+p*17+M*23>>>0;let P=Ae(r,a,(E>>7)%7/6);p===u?P=Ae(P,o,.85):l>0&&E%97<l*97&&(P=Ae(P,o,.7));const I=(.82+E%6*.056)*(p===0?.82:1),N=.09+(E>>4)%5*.016+(p===u?.03:0),$=C-m,Z=g-m,k=tt(P,I*d);n!==0?this.vox(t+n*.5,w,e+x,N,Z,$,k):this.vox(t+x,w,e+s*.5,$,Z,N,k)}}}capStones(t,e,n,s,r,a=0){const o=1/s,l=.04;for(let c=0;c<s;c++)for(let f=0;f<s;f++){const d=t*53+e*97+c*13+f*29>>>0,h=.88+d%5*.05;this.vox(t-.5+(c+.5)*o,we+.03+a,e-.5+(f+.5)*o,o-l,.1+(d>>3)%3*.025,o-l,tt(n,h*r))}}floorStones(t,e,n,s=0,r=!1){const a=this.env,o=.05;s>0&&this.vox(t,s/2-.05,e,.96,s,.96,tt(2239032,n)),this.vox(t,s-.085,e,.98,.06,.98,tt(1317673,n));let l=t*374761393+e*668265263>>>0||1;const c=()=>(l^=l<<13,l^=l>>>17,l^=l<<5,l>>>=0,l/4294967296),f=2+(c()<.5?1:0),d=[];let h=0;for(let g=0;g<f;g++){const _=.6+c()*.9;d.push(_),h+=_}let u=-.5;for(let g=0;g<f;g++){const _=d[g]/h,m=1+(c()<.5?1:0),p=[];let b=0;for(let M=0;M<m;M++){const T=.6+c()*.9;p.push(T),b+=T}let w=-.5;for(let M=0;M<m;M++){const T=p[M]/b,y=.82+c()*.3,C=.055+c()*.075;let x=Ae(a.floorA,a.floorB,c());c()<a.accP&&(x=Ae(x,a.floorAcc,.7)),r&&(x=Ae(tt(x,.82),1849941,.38)),this.vox(t+w+T/2,s-.06+C/2,e+u+_/2,T-o,C,_-o,tt(x,y*n)),w+=T}u+=_}if(c()<a.crackP){const g=c()<.5,_=-.3+c()*.6,m=.3+c()*.45;this.vox(t+(g?_*.4:_),s+.005,e+(g?_:_*.4),g?m:.035,.11,g?.035:m,tt(790551,n))}a.glowP>0&&c()<a.glowP&&n>=1&&this.voxE(t+(-.3+c()*.6),s+.03,e+(-.3+c()*.6),.055,.045,.055,tt(a.glowCol,.75+c()*.25))}buildOverDeck(t,e,n,s,r,a){var m;const o=s.over,l=o.height*Me,c=o.mat==="wood",f=c?8018484:9081764,d=c?9398846:10134450,h=c?4535074:4870750,u=c?5980967:6581368,g=c?7163952:7831692,_=e*53+n*97>>>0;this.vox(e,l-.16,n,.98,.07,.98,tt(h,r));for(let p=0;p<2;p++)this.vox(e,l-.05,n-.245+p*.49,.96,.09,.44,tt(p?d:f,(.88+(_>>p)%4*.05)*r));for(const[p,b]of dn){const w=(m=t.tiles[n+b])==null?void 0:m[e+p];w!=null&&w.over||(p!==0?(this.vox(e+p*.45,l+.16,n,.07,.32,.96,tt(g,r)),this.vox(e+p*.45,l+.34,n,.09,.05,.99,tt(g,1.15*r))):(this.vox(e,l+.16,n+b*.45,.96,.32,.07,tt(g,r)),this.vox(e,l+.34,n+b*.45,.99,.05,.09,tt(g,1.15*r))))}if((e+n&1)===0&&!s.zstep){const p=l-.16-a;this.vox(e-.38,a+p/2,n-.38,.1,p,.1,tt(u,.92*r)),this.vox(e+.38,a+p/2,n+.38,.1,p,.1,tt(u,.92*r))}if(s.zstep){const p=l-a;for(const w of[-.17,.17])this.vox(e+w,a+p/2,n+.42,.06,p+.1,.06,tt(9071166,r));const b=Math.max(3,Math.round(p/.28));for(let w=1;w<b;w++)this.vox(e,a+p*w/b,n+.42,.36,.05,.05,tt(10517576,r))}}buildChest(t,e,n,s=0){this.add(t,s+.17,e,.52,.3,.42,n?4862496:8014376),this.add(t-.18,s+.17,e,.05,.34,.44,14726460),this.add(t+.18,s+.17,e,.05,.34,.44,14726460),n?(this.add(t,s+.42,e-.2,.54,.06,.16,6174752),this.add(t,s+.2,e,.32,.04,.32,16770976)):(this.add(t,s+.37,e,.54,.12,.44,6174752),this.add(t,s+.37,e,.56,.05,.46,14726460),this.add(t,s+.22,e+.22,.1,.12,.05,14726460))}buildShrine(t,e,n,s=0){n==="spring"?(this.add(t,s+.05,e,.72,.1,.72,5921362),this.add(t,s+.04,e,.5,.08,.5,2779802),this.addGE(Le,t,s+.2,e,.18,.18,.18,10477823)):(this.add(t,s+.16,e,.5,.32,.5,6971992),this.add(t,s+.34,e,.34,.06,.34,4867648),this.addGE(Le,t,s+.5,e,.22,.26,.22,13213951))}buildStairs(t,e,n=0){this.add(t,n-.64,e,.9,.06,.9,329484),this.add(t-.47,n-.3,e,.06,.7,.9,1317410),this.add(t+.47,n-.3,e,.06,.7,.9,1317410),this.add(t,n-.3,e+.47,.9,.7,.06,1317410);const s=5,r=.84/s;for(let a=0;a<s;a++){const o=e-.42+a*r,l=n-.05-a*(.64/s);this.add(t,l,o,.8,.06,r+.04,tt(11450566,a%2?.82:1)),this.add(t,l-.07,o-r/2,.8,.13,.03,2765629)}this.addGE(Fe,t,n+.06,e-.47,.82,.05,.08,8307823)}roadStones(t,e,n){this.vox(t,-.085,e,.98,.06,.98,tt(1776150,n));let s=t*668265263+e*374761393>>>0||1;const r=()=>(s^=s<<13,s^=s>>>17,s^=s<<5,s>>>=0,s/4294967296);for(let a=0;a<2;a++)for(let o=0;o<2;o++){let l=Ae(7236188,8353639,r());r()<.08&&(l=Ae(l,6779727,.6));const c=.05+r()*.035;this.vox(t-.25+o*.5,-.06+c/2,e-.25+a*.5,.44,c,.44,tt(l,(.9+r()*.18)*n))}}townDirt(t,e){this.vox(t,-.07,e,.98,.09,.98,2892826)}buildFence(t,e,n,s,r,a){this.townDirt(t,e);const o=5980967,l=7163952;this.vox(t,.34,e,.14,.68,.14,o),this.vox(t,.71,e,.19,.07,.19,tt(o,1.15));for(const[c,f,d]of[[n,1,0],[s,-1,0],[r,0,-1],[a,0,1]])if(c)for(const h of[.26,.5])f!==0?this.vox(t+f*.28,h,e,.5,.07,.09,tt(l,h>.3?1.06:.94)):this.vox(t,h,e+d*.28,.09,.07,.5,tt(l,h>.3?1.06:.94))}buildTree(t,e){this.townDirt(t,e);const n=t*73+e*131>>>0,s=r=>((n>>r)%5-2)*.04;this.vox(t,.06,e,.32,.1,.32,4010272),this.vox(t,.42,e,.16,.72,.16,6178090),this.vox(t+s(2),.92,e+s(4),.84,.5,.84,tt(3958322,.92+n%5*.05)),this.vox(t+s(6),1.28,e+s(8),.6,.42,.6,tt(4880956,.92+(n>>3)%5*.05)),this.vox(t+s(10),1.56,e+s(12),.34,.3,.34,tt(5737030,.95+(n>>5)%4*.05))}buildBrazier(t,e){this.townDirt(t,e);const n=3683374,s=this.env;for(const[r,a]of[[-.16,-.16],[.16,-.16],[-.16,.16],[.16,.16]])this.vox(t+r,.16,e+a,.07,.32,.07,n);this.vox(t,.38,e,.46,.16,.46,tt(n,1.1)),this.vox(t,.47,e,.52,.05,.52,tt(n,1.3)),this.voxE(t,.51,e,.32,.08,.32,tt(s.flame,.85)),this.voxE(t+.02,.62,e-.02,.18,.18,.18,s.flame),this.voxE(t,.75,e,.1,.12,.1,s.flameCore),this.vox(t,.005,e+0,.9,.02,.9,tt(s.flame,.22))}buildFountain(t,e){const n=this.env,s=7763584;this.vox(t,.05,e,1,.1,1,tt(s,.85));for(const[r,a,o,l]of[[0,-.43,.9,.14],[0,.43,.9,.14],[-.43,0,.14,.9],[.43,0,.14,.9]])this.vox(t+r,.26,e+a,o,.32,l,s);for(const[r,a]of[[-.43,-.43],[.43,-.43],[-.43,.43],[.43,.43]])this.vox(t+r,.3,e+a,.18,.4,.18,tt(s,1.12));this.vox(t,.3,e,.68,.1,.68,n.water),this.voxE(t-.14,.37,e+.1,.34,.02,.14,tt(n.sparkle,.8)),this.voxE(t+.16,.37,e-.14,.22,.02,.12,tt(n.sparkle,.6)),this.vox(t,.62,e,.16,.55,.16,tt(s,1.05)),this.vox(t,.92,e,.46,.08,.46,tt(s,1.18)),this.voxE(t,1.16,e,.09,.42,.09,tt(n.sparkle,.9));for(const[r,a]of[[-.2,.12],[.18,-.16],[.06,.2]])this.voxE(t+r,.66,e+a,.05,.16,.05,tt(n.sparkle,.6))}buildPortalGate(t,e,n,s=!1){const r=n?{fire:14704698,ice:7317759,earth:13148256,holy:16771496}[n]??9425279:16761194;if(!s){this.vox(t,-.2,e,.8,.1,.8,460813);for(const[o,l,c,f]of[[0,-.44,.92,.08],[0,.44,.92,.08],[-.44,0,.08,.92],[.44,0,.08,.92]])this.voxE(t+o,-.02,e+l,c,.05,f,tt(r,.8))}const a=5130840;for(const o of[-.42,.42])this.vox(t,.08,e+o,.28,.16,.28,tt(a,.85)),this.vox(t,.85,e+o,.18,1.4,.18,a),this.vox(t,1.6,e+o,.24,.1,.24,tt(a,1.2)),this.voxE(t,1.28,e+o,.09,.11,.09,r);this.vox(t,1.72,e,.24,.13,1.1,tt(a,1.1)),this.addGE(Le,t,1.92,e,.2,.26,.2,r)}buildHouse(t,e,n,s,r,a){const o={equip:14729312,heal:7268264,shop:14717770,craft:13208146,recruit:8369151},l=t*97+e*61>>>0,c=tt(14272677,.88+l%5*.045),f=4863009,d=tt(9061938,.85+(l>>3)%5*.06),h=t+(n-1)/2,u=e+(s-1)/2,g=n-.16,_=s-.16,m=a?a.y>e+s-1?1:-1:1,p=m>0?e+s-1+.42:e-.42,b=r==="heal",w=b?1.72:1.16,M=.24+w;this.vox(h,.12,u,g,.24,_,7039860),this.vox(h,.24+w/2,u,g-.05,w,_-.05,c);for(const[E,P]of[[t-.5+.14,e-.5+.14],[t+n-1+.5-.14,e-.5+.14],[t-.5+.14,e+s-1+.5-.14],[t+n-1+.5-.14,e+s-1+.5-.14]])this.vox(E,.24+w/2,P,.12,w,.12,f);this.vox(h,M-.05,u,g+.02,.1,_+.02,f),b&&this.vox(h,.24+w*.52,u,g+.01,.09,_+.01,f);const T=_/2+.24,y=4,C=(T-.16)/y,x=.15;for(let E=0;E<y;E++)this.vox(h,M+.04+(E+.5)*x,u,g+.3-E*.02,x,(T-E*C)*2,tt(d,1-E*.05));if(this.vox(h,M+.04+y*x+.05,u,g+.2,.1,.3,tt(d,.72)),a){const E=a.x;this.vox(E,.24,u+m*(_/2-.3),.66,.48,.4,tt(7039860,1.05)),this.vox(E,.72,p+m*.06,.52,1,.1,4862496),this.vox(E,1.28,p+m*.07,.66,.12,.12,f),this.vox(E,.04,p+m*.3,.6,.08,.34,7828586),this.voxE(E-.4,1.36,p+m*.14,.09,.08,.09,this.env.flame),this.vox(E+.42,1.5,p+m*.14,.06,.06,.3,f),this.vox(E+.42,1.26,p+m*.3,.3,.3,.06,o[r]??13421772),this.vox(E+.42,1.26,p+m*.33,.14,.14,.03,tt(o[r]??13421772,.4));for(let P=t;P<t+n;P++)P!==E&&(this.vox(P,.9,p+m*.04,.4,.46,.08,f),this.voxE(P,.9,p+m*.08,.3,.34,.04,r==="craft"?16752725:16767370),b&&(this.vox(P,1.62,p+m*.04,.36,.4,.08,f),this.voxE(P,1.62,p+m*.08,.26,.3,.04,16767370)))}if(r==="craft"){const E=t+n-1+.24,P=e+s-1-.2*m;this.vox(E,M/2+.6,P,.26,M+1.2,.26,5921378),this.vox(E,M+1.26,P,.34,.1,.34,4868690),this.voxE(E,M+1.34,P,.14,.08,.14,16747066)}if(r==="shop"&&a)for(let E=0;E<2;E++)for(let P=0;P<n*2;P++){const I=t-.5+.25+P*.5;I>t+n-1+.4||this.vox(I,1.5-E*.09,p+m*(.2+E*.26),.46,.06,.3,(P+E)%2?13130824:15129796)}}buildTownHouses(t){var n,s;const e=new Set;for(let r=0;r<this.H;r++)for(let a=0;a<this.W;a++){const o=t.tiles[r][a];if(!o.building||e.has(a+","+r))continue;const l=o.building;let c=a,f=a,d=r,h=r;const u=[[a,r]];for(e.add(a+","+r);u.length;){const[_,m]=u.pop();c=Math.min(c,_),f=Math.max(f,_),d=Math.min(d,m),h=Math.max(h,m);for(const[p,b]of dn){const w=_+p,M=m+b,T=(n=t.tiles[M])==null?void 0:n[w],y=w+","+M;T&&T.building===l&&!e.has(y)&&(e.add(y),u.push([w,M]))}}let g=null;for(let _=c;_<=f&&!g;_++)for(const m of[h+1,d-1]){const p=(s=t.tiles[m])==null?void 0:s[_];if(p&&p.facility===l){g={x:_,y:m};break}}this.buildHouse(c,d,f-c+1,h-d+1,l,g)}}meshIn(t,e,n,s,r,a,o,l){const c=new ne(Fe,this.mat(l));c.position.set(e,n,s),c.scale.set(r,a,o),t.add(c)}bodyFor(t,e=!1){e==="hi"&&!bo(t)&&(e=!1);let n;if(t.kind==="monster"){if(hi(t)){const o=Rr(Fp(t)),l=e===!0?o.key+":lo":o.key;return this.bodyCache.has(l)||(this.bodyCache.set(l,o.geo),this.glowCache.set(l,o.spots)),{key:l,geo:this.bodyCache.get(l)}}const a=pi(t);n=`m:${a}${a==="beast"?":"+(t.color??""):""}${a==="caster"?":"+(t.element??""):""}`}else n=Jo(t);const s=e==="hi"?n+":hi":e?n+":lo":n;let r=this.bodyCache.get(s);if(!r){const a=Op(t,e);r=a.geo,this.bodyCache.set(s,r),this.glowCache.set(s,a.spots)}return{key:s,geo:r}}gaitMatFor(t){let e=this.gaitMats.get(t);return e||(e=vo(),this.gaitMats.set(t,e)),e}idHash(t){let e=0;for(let n=0;n<t.length;n++)e=e*31+t.charCodeAt(n)>>>0;return e%997/997*Math.PI*2}placeFigure(t,e,n=0,s=!1){const r=new Je,a=t.facing||{dx:0,dy:1},o=((t.size??1)-1)/2,{key:l,geo:c}=this.bodyFor(t,s),f=Dr(t),d=Math.atan2(a.dx,a.dy),h=performance.now();this.moveCh.note(t.id,t.pos.x+o,n,t.pos.y+o,d,h,f);const u=this.moveCh.sample(t.id,h),g=this.gaitMatFor(t.id),_=t.kind==="monster"&&hi(t)?xo(t)/100:1;{const b=new ne(c,g);_!==1&&b.scale.setScalar(_),r.add(b)}{const b=this.contactShadow(),w=new ne(b.geo,b.mat),M=(t.size??1)*1.02*_;w.scale.set(M,1,M),w.position.y=.03,r.add(w)}const m=this.glowCache.get(l);if(m&&m.length){const b=d,w=Math.cos(b),M=Math.sin(b);this.spotRefs.set(t.id,{start:this.voxBufE.length/7,spots:m,k:_});for(const T of m)this.voxE(t.pos.x+o+(T.x*w+T.z*M)*_,n+T.y*_,t.pos.y+o+(-T.x*M+T.z*w)*_,T.sx*_,T.sy*_,T.sz*_,T.c)}r.rotation.y=u.ry,r.position.set(u.x,u.y,u.z),r.userData={bx:u.x,by:u.y,bz:u.z,ry:u.ry,geo:c,gaitP:f,mat:g,hash:this.idHash(t.id)},this.actorGrp.set(t.id,r),t.dormant&&this.meshIn(r,0,1.25,0,.18,.18,.18,13218815),t.captured&&this.meshIn(r,0,.6,0,.74,.06,.74,13279578),e&&this.meshIn(r,0,1.42,0,.16,.16,.16,10478591);let p=1.64;(t.poison??0)>0&&(this.meshIn(r,0,p,0,.11,.11,.11,8376426),p+=.16),(t.paralyze??0)>0&&(this.meshIn(r,0,p,0,.11,.11,.11,16767050),p+=.16),(t.confused??0)>0&&(this.meshIn(r,0,p,0,.11,.11,.11,16747216),p+=.16),this.group.add(r)}rebuild(){var m,p,b,w,M,T,y,C,x,E,P,I,N,$,Z,k,q,H;const t=this.g,e=this.v;if(!t)return;const n=t.floor,s=n.interior?"interior":n.env&&fn[n.env]?n.env:t.depth===0?"town":t.theme&&fn[t.theme]?t.theme:"plain";if(s!==this.envKey&&(this.envKey=s,this.env=fn[s],this.applyEnv()),this.inited||(this.W=n.w,this.H=n.h,this.setupStage(),this.inited=!0),this.group.traverse(A=>{A.isInstancedMesh&&A.dispose()}),this.scene.remove(this.group),this.group=new Je,this.scene.add(this.group),this.actorGrp.clear(),this.spotRefs.clear(),this.badgeGrps.clear(),this.imE=null,this.haloIm=null,n!==this.lastFloorRef&&(this.lastFloorRef=n,this.moveCh.reset()),this.moveCh.beginTurn(),this.moveCh.prune(),this.gaitMats.size>128)for(const[A,L]of this.gaitMats)t.actors.some(U=>U.id===A)||(L.dispose(),this.gaitMats.delete(A));const r=A=>A.seen,a=A=>A.visible;for(let A=0;A<this.H;A++)for(let L=0;L<this.W;L++){const U=n.tiles[A][L];if(!r(U))continue;const O=(U.height??0)*Me;if(U.kind==="wall"){if(this.envKey==="town"){if(U.deco==="fence"){const Ot=(Dt,Ut)=>{var jt;const Wt=(jt=n.tiles[A+Ut])==null?void 0:jt[L+Dt];return!!Wt&&Wt.kind==="wall"&&(Wt.deco==="fence"||!!Wt.building)};this.buildFence(L,A,Ot(1,0),Ot(-1,0),Ot(0,-1),Ot(0,1))}else U.deco==="tree"?this.buildTree(L,A):U.deco==="brazier"?this.buildBrazier(L,A):U.deco==="fountain"&&this.buildFountain(L,A);continue}const st=a(U),ot=st?1:.5,Lt=this.env,Mt=Ae(Lt.wallA,Lt.wallB,.4);if(U.low){O>0&&this.vox(L,O/2-.05,A,.96,O,.96,tt(2239032,ot)),this.vox(L,O+.24,A,.92,.48,.92,tt(tt(Mt,.88),ot)),this.vox(L,O+.51,A,.99,.08,.99,tt(tt(Mt,1.18),ot));continue}if(U.pillar){this.floorStones(L,A,ot,O),this.vox(L,O+.07,A,.62,.14,.62,tt(tt(Mt,.72),ot)),this.vox(L,O+we*.5+.1,A,.38,we,.38,tt(Mt,ot)),this.vox(L,O+we+.14,A,.58,.12,.58,tt(tt(Mt,1.18),ot));continue}const K=U.breakable?10251070:U.locked?14198840:Lt.wallA,rt=U.breakable?tt(10251070,.8):U.locked?tt(14198840,.85):Lt.wallB,nt=U.breakable||U.locked?K:Lt.wallAcc,dt=U.breakable||U.locked?0:Lt.wallAccP,Et=U.breakable?3811864:U.locked?4864530:Lt.wallCore,bt=U.breakable?6:U.locked?4:5,$t=U.breakable?4:U.locked?2:3,zt=!U.breakable&&!U.locked&&Lt.band!=null?bt-2:-1;this.vox(L,(we+O)/2,A,.96,we+O,.96,tt(Et,ot));for(const[Ot,Dt]of dn){const Ut=(m=n.tiles[A+Dt])==null?void 0:m[L+Ot];Ut&&r(Ut)&&Ut.kind!=="wall"&&this.faceBricks(L,A,Ot,Dt,K,rt,nt,dt,bt,$t,ot,O,zt)}if(this.capStones(L,A,tt(Ae(K,rt,.5),1.1),$t,ot,O),st&&!U.breakable&&!U.locked&&(L*61+A*167>>>0)%Lt.torchN===0)for(const[Ot,Dt]of dn){const Ut=(p=n.tiles[A+Dt])==null?void 0:p[L+Ot];if(Ut&&Ut.kind==="floor"&&r(Ut)){const Wt=L+Ot*.5,jt=A+Dt*.5;this.add(Wt,O+.8,jt,.08,.2,.08,2891800),this.voxE(Wt+Ot*.05,O+.98,jt+Dt*.05,.12,.14,.12,Lt.flame),this.voxE(Wt+Ot*.05,O+1.07,jt+Dt*.05,.07,.09,.07,Lt.flameCore),this.vox(Wt+Ot*.28,O+.02,jt+Dt*.28,.5,.02,.5,tt(Lt.flame,.28));break}}}else if(U.floorFeat==="pit")this.add(L,O-.5,A,.92,.1,.92,329485),this.add(L,O-.18,A,.98,.5,.05,1053725),this.add(L,O-.18,A,.05,.5,.98,1053725);else if(U.floorFeat==="water"){const st=a(U)?1:.5,ot=this.env;this.vox(L,O-.3,A,.99,.08,.99,tt(ot.waterDeep,st)),this.vox(L,O-.16,A,.96,.1,.96,tt(ot.water,st)),a(U)&&((L*31+A*17&1)===0?this.voxE(L-.12,O-.1,A+.1,.42,.02,.2,tt(ot.sparkle,.8)):this.voxE(L+.14,O-.1,A-.12,.3,.02,.16,tt(ot.sparkle,.8)))}else{const st=a(U),ot=st?1:.55,Lt=L===n.stairs.x&&A===n.stairs.y;if(!Lt)if(U.hazard){const Mt={fire:14704698,poison:8373354,ice:7317759,earth:10518608,holy:16771496}[U.hazard.element]??7317759;this.add(L,O-.06,A,.98,.08,.98,tt(Mt,.4*ot)),st?this.voxE(L,O-.015,A,.78,.035,.78,tt(Mt,.92)):this.add(L,O-.015,A,.78,.035,.78,tt(Mt,.5))}else if(U.floorFeat==="slip")this.add(L,O-.05,A,.98,.1,.98,tt(10475775,ot)),st&&(L*13+A*7&3)===0&&this.voxE(L+.1,O+.005,A-.08,.3,.015,.06,14217983);else if(U.floorFeat==="dark")this.add(L,O-.05,A,.98,.1,.98,329226);else if((this.envKey==="town"||this.envKey==="interior")&&U.deco==="road"&&!U.hole)this.roadStones(L,A,ot);else{let Mt=!1;for(const[K,rt]of dn){const nt=(b=n.tiles[A+rt])==null?void 0:b[L+K];if(nt&&nt.floorFeat==="water"){Mt=!0;break}}this.floorStones(L,A,ot,O,Mt)}if(!Lt)for(const[Mt,K]of dn){const rt=(w=n.tiles[A+K])==null?void 0:w[L+Mt];rt&&r(rt)&&rt.kind==="floor"&&(rt.height??0)===(U.height??0)-1&&rt.floorFeat!=="pit"&&rt.floorFeat!=="water"&&this.stairStep(L,A,Mt,K,O,a(U)?1:.55)}if(U.facility){const Mt=U.facility==="equip"?14729312:U.facility==="heal"?7268264:U.facility==="shop"?14717770:U.facility==="craft"?13208146:8369151;this.vox(L,O-.02,A,.76,.05,.76,tt(Mt,.5)),this.voxE(L,O+.015,A,.22,.03,.22,tt(Mt,.95))}if(U.hole&&this.buildPortalGate(L,A,U.hole),U.portal==="return"){const Mt=a(U)?1:.55;this.add(L,O+.04,A,.9,.08,.9,tt(2761784,Mt));for(const[K,rt,nt,dt]of[[-.36,0,.1,.8],[.36,0,.1,.8],[0,-.36,.8,.1],[0,.36,.8,.1]])this.add(L+K,O+.14,A+rt,nt,.12,dt,tt(14270563,Mt));this.addGE(Le,L,O+.52,A,.3,.46,.3,tt(16771496,Mt))}else if(U.portal==="elevator"){const Mt=a(U)?1:.55;this.add(L,O+.06,A,.92,.12,.92,tt(9081764,Mt)),this.add(L-.4,O+.62,A-.4,.1,1.1,.1,tt(6976386,Mt)),this.add(L+.4,O+.62,A+.4,.1,1.1,.1,tt(6976386,Mt)),this.add(L,O+1.16,A,.98,.08,.2,tt(12570850,Mt))}U.chest&&this.buildChest(L,A,U.chest.opened,O),U.shrine&&this.buildShrine(L,A,U.shrine,O),U.item&&this.addGE(Le,L,O+.34,A,.62,.62,.62,11702236),U.trap&&!U.trap.hidden&&this.addG(Le,L,O+.06,A,.7,.18,.7,14830410),U.oneway&&this.addG(Fe,L+U.oneway.dx*.28,O+.16,A+U.oneway.dy*.28,.22,.16,.22,10135224),U.warp&&this.addGE(Le,L,O+.22,A,.5,.5,.5,5817066),U.over&&this.buildOverDeck(n,L,A,U,st?1:.55,O)}}const o=(A,L)=>{var U,O;return(((O=(U=n.tiles[L])==null?void 0:U[A])==null?void 0:O.height)??0)*Me};if(n.interior||this.buildStairs(n.stairs.x,n.stairs.y,o(n.stairs.x,n.stairs.y)),this.envKey==="town"&&(this.buildPortalGate(n.stairs.x,n.stairs.y,null,!0),this.buildTownHouses(n)),n.upstairs&&n.depth>0){const A=n.upstairs,L=(M=n.tiles[A.y])==null?void 0:M[A.x];if(L&&(L.seen||L.visible)){const U=o(A.x,A.y);this.add(A.x,U+.12,A.y,.72,.24,.72,14270563),this.add(A.x,U+.32,A.y,.44,.18,.44,15720608)}}for(const A of n.zones){const L=A.flags.includes("silence")?5222564:A.flags.includes("buff")?7260280:A.flags.includes("debuff")?13785690:10120904;for(let U=A.rect.y;U<A.rect.y+A.rect.h;U++)for(let O=A.rect.x;O<A.rect.x+A.rect.w;O++){const st=(T=n.tiles[U])==null?void 0:T[O];st&&r(st)&&st.kind==="floor"&&this.add(O,o(O,U)+.03,U,.9,.03,.9,L)}}const l=n.front;if(l)for(let A=0;A<this.H;A++)for(let L=0;L<this.W;L++){const U=n.tiles[A][L];if(!r(U))continue;const O=l.axis==="x"?L:A;(l.dir>0?O<l.edge:O>l.edge)&&U.kind==="floor"&&this.add(L,o(L,A)+.05,A,.95,.05,.95,3108816)}const c=(e==null?void 0:e.forecast)??null;if(c){for(const A of c.frontCells)this.add(A.x,o(A.x,A.y)+.06,A.y,.94,.035,.94,8006196);for(const A of c.dispCells)this.voxE(A.x,o(A.x,A.y)+.08,A.y,.66,.04,.66,13778751)}for(const A of n.devices){const L=A.at,U=(y=n.tiles[L.y])==null?void 0:y[L.x];if(A.effect.kind==="dispenser"){U&&r(U)&&this.addG(Fe,L.x,o(L.x,L.y)+.3,L.y,.42,.5,.42,16743002);let O={x:L.x,y:L.y};for(let st=0;st<A.effect.range;st++){O={x:O.x+A.effect.dir.dx,y:O.y+A.effect.dir.dy};const ot=(C=n.tiles[O.y])==null?void 0:C[O.x];if(!ot||!r(ot)||ot.kind==="wall")break;this.add(O.x,o(O.x,O.y)+.04,O.y,.6,.05,.6,13781311)}}else if(A.effect.cells)for(const O of A.effect.cells){const st=(x=n.tiles[O.y])==null?void 0:x[O.x];if(!st||!r(st))continue;const ot=o(O.x,O.y);A.effect.kind==="bridge"?st.floorFeat!=="pit"&&(this.add(O.x,ot+.04,O.y,.84,.08,.98,8015394),this.add(O.x,ot+.09,O.y,.9,.04,.16,6175256),this.add(O.x,ot+.09,O.y-.4,.9,.04,.16,6175256)):st.kind==="floor"?this.add(O.x,ot+.07,O.y,.9,.14,.9,7319146):(this.add(O.x,ot+.62,O.y,.18,1.24,.96,13279578),this.add(O.x,ot+.62,O.y,.96,1.24,.18,13279578))}A.effect.kind!=="dispenser"&&U&&r(U)&&this.addG(Le,L.x,o(L.x,L.y)+.28,L.y,.5,.5,.5,A.on?9425279:13279578)}const f=n.sealRoom;if(f&&f.sealed)for(const A of f.doors){const L=(E=n.tiles[A.y])==null?void 0:E[A.x];if(!L||!r(L))continue;const U=o(A.x,A.y);this.add(A.x,U+.62,A.y,.2,1.24,.96,16734826),this.add(A.x,U+.62,A.y,.96,1.24,.2,16734826)}const d=(e==null?void 0:e.aimPreview)??null;if(d){const A=d.arc?7915775:16765286,L=(d.bh??0)*Me;for(const U of d.tiles)this.add(U.x,Math.max(o(U.x,U.y),L)+.12,U.y,.9,.04,.9,A);for(const U of d.aoeCells)this.add(U.x,o(U.x,U.y)+.14,U.y,.92,.05,.92,16742972);if(d.target){const U=(P=n.tiles[d.target.pos.y])==null?void 0:P[d.target.pos.x],O=d.face===1&&(U!=null&&U.over)?U.over.height*Me:o(d.target.pos.x,d.target.pos.y),st=d.target.friendlyFire?16734810:A;if(this.add(d.target.pos.x,O+.5,d.target.pos.y,1.02,1.02,1.02,st),d.face!=null){const ot=d.face===1?16765286:7915775;this.addGE(Fe,d.target.pos.x,O+1.72,d.target.pos.y,.3,.07,.3,ot),this.addGE(Fe,d.target.pos.x,O+(d.face===1?1.86:1.58),d.target.pos.y,.13,.07,.13,ot)}}if(d.other){const U=(I=n.tiles[d.other.pos.y])==null?void 0:I[d.other.pos.x],O=d.other.z===1&&(U!=null&&U.over)?U.over.height*Me:o(d.other.pos.x,d.other.pos.y);this.add(d.other.pos.x,O+.5,d.other.pos.y,.92,.92,.92,3817552)}}const h=(e==null?void 0:e.reach)??null;if(h){for(const A of h.ok){const L=(N=n.tiles[A.y])==null?void 0:N[A.x];L&&r(L)&&this.add(A.x,o(A.x,A.y)+.02,A.y,.86,.03,.86,2058872)}for(const A of h.ng){const L=($=n.tiles[A.y])==null?void 0:$[A.x];L&&r(L)&&this.add(A.x,o(A.x,A.y)+.02,A.y,.5,.025,.5,6956080)}}const u=(e==null?void 0:e.selected)??null;for(const A of t.actors)A.alive&&A.kind==="monster"&&(A.size??1)>1&&this.bodyFor(A,!1);const g=(Z=t.actors.find(A=>A.kind==="hero"))==null?void 0:Z.pos,_=[];if(g)for(const A of t.actors){if(!A.alive||!bo(A))continue;const L=(k=n.tiles[A.pos.y])==null?void 0:k[A.pos.x];A.faction!=="party"&&!(L&&a(L))||_.push({id:A.id,d:Math.max(Math.abs(A.pos.x-g.x),Math.abs(A.pos.y-g.y))})}this.hiIds=Cp(_,this.hiIds);for(const A of t.actors){if(!A.alive)continue;const L=(q=n.tiles[A.pos.y])==null?void 0:q[A.pos.x];if(A.faction!=="party"&&!(L&&a(L)))continue;const U=(A.z===1&&(L!=null&&L.over)?L.over.height:(L==null?void 0:L.height)??0)*Me,O=g?Math.max(Math.abs(A.pos.x-g.x),Math.abs(A.pos.y-g.y)):0,st=g&&O>11?!0:this.hiIds.has(A.id)?"hi":!1;this.placeFigure(A,A.id===u,U,st);const ot=Pc(A).maxHp,Lt=Math.max(0,Math.min(1,A.hp/ot)),Mt=1.5+((A.size??1)-1)*.75,K=A.kind==="monster",rt=K?!!A.windup||Lt<1&&((A.hitT??0)>0||(A.introT??0)>0):Lt<1,nt=K&&!A.windup&&(A.introT??0)<=0&&(A.hitT??0)<=2;if(rt||A.windup||K&&(A.introT??0)>0){const Et=new Je,bt=this.actorGrp.get(A.id).position;Et.position.set(bt.x,bt.y,bt.z);const $t=(zt,Ot,Dt,Ut,Wt,jt,ae,de=!1)=>{const Qt=new ne(Fe,de?this.matE(ae):this.mat(ae));Qt.position.set(zt,Ot,Dt),Qt.scale.set(Ut,Wt,jt),Et.add(Qt)};rt&&($t(0,Mt,0,.72,nt?.05:.07,nt?.1:.13,2764602),$t(-.36*(1-Lt),Mt,0,Math.max(.02,.72*Lt),nt?.06:.09,nt?.11:.15,K?nt?10111562:16738922:7268264)),A.windup&&$t(0,Mt+.24,0,.18,.3,.18,16730682),A.kind==="monster"&&(A.introT??0)>0&&($t(0,Mt+.86,0,.11,.34,.11,16742986,!0),$t(0,Mt+.56,0,.12,.12,.12,16742986,!0)),this.group.add(Et),this.badgeGrps.set(A.id,Et)}if(A.windup)for(const Et of A.windup.cells){const bt=(H=n.tiles[Et.y])==null?void 0:H[Et.x];bt&&r(bt)&&this.add(Et.x,o(Et.x,Et.y)+.1,Et.y,.9,.06,.9,13778751)}}if(this.envKey==="town"||this.envKey==="interior")for(const A of n.npcs??[])this.placeFigure({id:"npc:"+A.name,kind:"ally",race:A.race,color:A.color,pos:A.pos,facing:A.facing,stats:{pie:0},equipment:{}},!1,0);this.imE=this.flushVox()}buildSample(t,e){const n=this.group,s=this.voxBuf,r=this.voxBufE,a=this.env,o=new Je;this.group=o,this.voxBuf=[],this.voxBufE=[],this.env=e.startsWith("town")?fn.town:fn[t]??fn.plain;const l=this.env,c=u=>{for(let g=0;g<=2;g++)for(let _=0;_<=2;_++)(!u||!u(_,g))&&this.floorStones(_,g,1)},f=(u,g)=>u===1&&g===1,d=(u,g)=>{c(f);const _=u?10251070:g?14198840:l.wallA,m=u?tt(10251070,.8):g?tt(14198840,.85):l.wallB,p=u||g?_:l.wallAcc,b=u||g?0:l.wallAccP,w=u?3811864:g?4864530:l.wallCore,M=u?6:g?4:5,T=u?4:g?2:3,y=!u&&!g&&l.band!=null?M-2:-1;this.vox(1,we/2,1,.96,we,.96,w);for(const[C,x]of dn)this.faceBricks(1,1,C,x,_,m,p,b,M,T,1,0,y);this.capStones(1,1,tt(Ae(_,m,.5),1.1),T,1)},h=Ae(l.wallA,l.wallB,.4);switch(e){case"floor":c();break;case"floor-high":{for(let u=0;u<=2;u++)this.floorStones(0,u,1),this.floorStones(1,u,1),this.floorStones(2,u,1,Me);this.stairStep(2,1,-1,0,Me,1);break}case"water":{for(let u=0;u<=2;u++)for(let g=0;g<=2;g++)f(g,u)||this.floorStones(g,u,1,0,Math.abs(g-1)+Math.abs(u-1)===1);this.vox(1,-.3,1,.99,.08,.99,l.waterDeep),this.vox(1,-.16,1,.96,.1,.96,l.water),this.voxE(1-.12,-.1,1+.1,.42,.02,.2,tt(l.sparkle,.8));break}case"wall":d(!1,!1);break;case"wall-breakable":d(!0,!1);break;case"wall-locked":d(!1,!0);break;case"torch":{d(!1,!1);const u=1,g=1.5;this.add(u,.8,g,.08,.2,.08,2891800),this.voxE(u,.98,g+.05,.12,.14,.12,l.flame),this.voxE(u,1.07,g+.05,.07,.09,.07,l.flameCore),this.vox(u,.02,g+.28,.5,.02,.5,tt(l.flame,.28));break}case"low":{c(f),this.vox(1,.24,1,.92,.48,.92,tt(h,.88)),this.vox(1,.51,1,.99,.08,.99,tt(h,1.18));break}case"pillar":{c(),this.vox(1,.07,1,.62,.14,.62,tt(h,.72)),this.vox(1,we*.5+.1,1,.38,we,.38,h),this.vox(1,we+.14,1,.58,.12,.58,tt(h,1.18));break}case"stairs":c(f),this.buildStairs(1,1);break;case"upstairs":c(),this.add(1,.12,1,.72,.24,.72,14270563),this.add(1,.32,1,.44,.18,.44,15720608);break;case"chest":c(),this.buildChest(1,1,!1);break;case"chest-open":c(),this.buildChest(1,1,!0);break;case"shrine-spring":c(),this.buildShrine(1,1,"spring");break;case"shrine-altar":c(),this.buildShrine(1,1,"altar");break;case"portal-return":{c(),this.add(1,.04,1,.9,.08,.9,2761784);for(const[u,g,_,m]of[[-.36,0,.1,.8],[.36,0,.1,.8],[0,-.36,.8,.1],[0,.36,.8,.1]])this.add(1+u,.14,1+g,_,.12,m,14270563);this.addGE(Le,1,.52,1,.3,.46,.3,16771496);break}case"portal-elevator":{c(),this.add(1,.06,1,.92,.12,.92,9081764),this.add(1-.4,.62,1-.4,.1,1.1,.1,6976386),this.add(1+.4,.62,1+.4,.1,1.1,.1,6976386),this.add(1,1.16,1,.98,.08,.2,12570850);break}case"hazard":{c(f);const u=14704698;this.add(1,-.06,1,.98,.08,.98,tt(u,.4)),this.voxE(1,-.015,1,.78,.035,.78,tt(u,.92));break}case"slip":c(f),this.add(1,-.05,1,.98,.1,.98,10475775),this.voxE(1+.1,.005,1-.08,.3,.015,.06,14217983);break;case"pit":c(f),this.add(1,-.5,1,.92,.1,.92,329485),this.add(1,-.18,1,.98,.5,.05,1053725),this.add(1,-.18,1,.05,.5,.98,1053725);break;case"item":c(),this.addGE(Le,1,.34,1,.62,.62,.62,11702236);break;case"trap":c(),this.addG(Le,1,.06,1,.7,.18,.7,14830410);break;case"town-road":for(let u=0;u<=2;u++)for(let g=0;g<=2;g++)this.roadStones(g,u,1);break;case"town-fence":c(),this.buildFence(0,1,!0,!1,!1,!1),this.buildFence(1,1,!0,!0,!1,!1),this.buildFence(2,1,!1,!0,!1,!1);break;case"town-tree":c(f),this.buildTree(1,1);break;case"town-brazier":c(f),this.buildBrazier(1,1);break;case"town-fountain":c(f),this.buildFountain(1,1);break;case"town-portal":c(),this.buildPortalGate(1,1,"fire");break;case"town-counter":{c(),this.vox(1,-.02,1,.76,.05,.76,tt(14725216,.5)),this.voxE(1,.015,1,.22,.03,.22,tt(14725216,.95)),this.vox(1,.24,.24,.92,.48,.5,6966056),this.vox(1,.53,.24,1.02,.07,.62,9071166);break}default:if(e.startsWith("town-house-")){for(let u=0;u<=2;u++)this.roadStones(u,2,1);this.buildHouse(0,0,3,2,e.slice(11),{x:1,y:2})}break}return this.flushVox(),this.group=n,this.voxBuf=s,this.voxBufE=r,this.env=a,o}buildPrefabPreview(t,e){const n=this.group,s=this.voxBuf,r=this.voxBufE,a=this.env,o=new Je;this.group=o,this.voxBuf=[],this.voxBufE=[],this.env=fn[t]??fn.plain;const l=this.env,c=(h,u)=>{var g;return((g=e.cells[u])==null?void 0:g[h])??null},f=(h,u)=>{var g;return((g=c(h,u))==null?void 0:g.height)??0},d=Ae(l.wallA,l.wallB,.4);for(let h=0;h<e.size.d;h++)for(let u=0;u<e.size.w;u++){const g=e.cells[h][u],_=(g.height??0)*Me;if(g.kind==="wall"){if(g.low){_>0&&this.vox(u,_/2-.05,h,.96,_,.96,2239032),this.vox(u,_+.24,h,.92,.48,.92,tt(d,.88)),this.vox(u,_+.51,h,.99,.08,.99,tt(d,1.18));continue}if(g.pillar){this.floorStones(u,h,1,_),this.vox(u,_+.07,h,.62,.14,.62,tt(tt(d,.72),1)),this.vox(u,_+we*.5+.1,h,.38,we,.38,d),this.vox(u,_+we+.14,h,.58,.12,.58,tt(d,1.18));continue}const m=!!g.breakable,p=m?10251070:l.wallA,b=m?tt(10251070,.8):l.wallB,w=m?p:l.wallAcc,M=m?0:l.wallAccP,T=m?3811864:l.wallCore,y=m?6:5,C=m?4:3,x=!m&&l.band!=null?y-2:-1;this.vox(u,(we+_)/2,h,.96,we+_,.96,T);for(const[E,P]of dn){const I=c(u+E,h+P);(!I||I.kind!=="wall")&&this.faceBricks(u,h,E,P,p,b,w,M,y,C,1,_,x)}this.capStones(u,h,tt(Ae(p,b,.5),1.1),C,1,_)}else if(g.floorFeat==="water")this.vox(u,_-.3,h,.99,.08,.99,l.waterDeep),this.vox(u,_-.16,h,.96,.1,.96,l.water),(u*31+h*17&1)===0&&this.voxE(u-.12,_-.1,h+.1,.42,.02,.2,tt(l.sparkle,.8));else{if(g.hazard){const m={fire:14704698,poison:8373354,ice:7317759,earth:10518608,holy:16771496}[g.hazard.element]??7317759;this.add(u,_-.06,h,.98,.08,.98,tt(m,.4)),this.voxE(u,_-.015,h,.78,.035,.78,tt(m,.92))}else if(g.floorFeat==="slip")this.add(u,_-.05,h,.98,.1,.98,10475775),(u*13+h*7&3)===0&&this.voxE(u+.1,_+.005,h-.08,.3,.015,.06,14217983);else{let m=!1;for(const[p,b]of dn){const w=c(u+p,h+b);if(w&&w.kind==="floor"&&w.floorFeat==="water"){m=!0;break}}this.floorStones(u,h,1,_,m)}for(const[m,p]of dn){const b=c(u+m,h+p);b&&b.kind==="floor"&&f(u+m,h+p)===(g.height??0)-1&&b.floorFeat!=="water"&&this.stairStep(u,h,m,p,_,1)}}}for(const h of e.props??[]){const u=f(h.x,h.y)*Me;h.kind==="chest"||h.kind==="chest-trapped"?this.buildChest(h.x,h.y,!1,u):h.kind==="shrine-spring"?this.buildShrine(h.x,h.y,"spring",u):h.kind==="shrine-altar"?this.buildShrine(h.x,h.y,"altar",u):h.kind==="portal-return"?(this.add(h.x,u+.04,h.y,.9,.08,.9,2761784),this.addGE(Le,h.x,u+.52,h.y,.3,.46,.3,16771496)):h.kind==="portal-elevator"?(this.add(h.x,u+.06,h.y,.92,.12,.92,9081764),this.add(h.x,u+1.16,h.y,.98,.08,.2,12570850)):h.kind==="item"?this.addGE(Le,h.x,u+.34,h.y,.62,.62,.62,11702236):h.kind==="trap"?this.addG(Le,h.x,u+.06,h.y,.7,.18,.7,14830410):h.kind==="counter"&&(this.vox(h.x,u-.02,h.y,.76,.05,.76,tt(14725216,.5)),this.voxE(h.x,u+.015,h.y,.22,.03,.22,tt(14725216,.95)))}for(const h of e.ports??[]){const u=f(h.x,h.y)*Me;this.voxE(h.x,u+.03,h.y,.8,.05,.8,9425279)}return this.flushVox(),this.group=n,this.voxBuf=s,this.voxBufE=r,this.env=a,o}setImpact(t,e,n){const s=t+","+e;this.impactDelay.set(s,Math.max(this.impactDelay.get(s)??0,n))}consumeActs(){var r;this.impactDelay.clear();const t=(r=this.g)==null?void 0:r.acts;if(!t||!t.length)return;const e=this.g.floor,n=performance.now(),s=(a,o)=>{var l,c;return(((c=(l=e.tiles[o])==null?void 0:l[a])==null?void 0:c.height)??0)*Me};for(const a of t){if(a.seq<=this.lastActSeq)continue;this.lastActSeq=a.seq;const o=a.a,l=((o.size??1)-1)/2,c=(o.size??1)-1,f=s(o.pos.x,o.pos.y),d=o.pos.x+l,h=o.pos.y+l;if(a.kind==="melee")this.actAnims.push({id:o.id,kind:"melee",t0:n,dur:ii.melee,dir:a.dir}),a.to&&this.setImpact(a.to.x,a.to.y,95);else if(a.kind==="shoot"&&a.to){this.actAnims.push({id:o.id,kind:"shoot",t0:n,dur:ii.shoot,dir:a.dir});const g=Math.max(1,Math.max(Math.abs(a.to.x-o.pos.x),Math.abs(a.to.y-o.pos.y))),_=g*(a.arc?58:36);this.spawnProj(a.arc?"stone":"arrow",void 0,d,f+.8+c*.5,h,a.to.x,s(a.to.x,a.to.y)+.55,a.to.y,n+140,_,a.arc?.55+g*.09:0),this.setImpact(a.to.x,a.to.y,140+_)}else if(a.kind==="cast"&&a.to){const g=yc[a.element??""]??14202111;this.actAnims.push({id:o.id,kind:"cast",t0:n,dur:ii.cast,dir:a.dir}),this.spawnCharge(d,f+1.3+c*.6,h,g,260);const _=Math.max(1,Math.max(Math.abs(a.to.x-o.pos.x),Math.abs(a.to.y-o.pos.y))),m=_*42;this.spawnProj("bolt",g,d,f+1.1+c*.5,h,a.to.x,s(a.to.x,a.to.y)+.55,a.to.y,n+260,m,a.arc?.6+_*.1:0);const p=260+m,b=a.aoe??0;for(let w=-b;w<=b;w++)for(let M=-b;M<=b;M++)this.setImpact(a.to.x+M,a.to.y+w,p+Math.max(Math.abs(M),Math.abs(w))*30);b>0&&this.spawnBurst(a.to.x,s(a.to.x,a.to.y)+.5,a.to.y,10+b*4,!1,p,[g,16777215,tt(g,.7)])}else if(a.kind==="heal"&&a.to)this.actAnims.push({id:o.id,kind:"heal",t0:n,dur:ii.heal}),this.spawnHeal(a.to.x,s(a.to.x,a.to.y),a.to.y);else if(a.kind==="windup")this.actAnims.push({id:o.id,kind:"windup",t0:n,dur:ii.windup,dir:a.dir});else if(a.kind==="breath"&&a.cells){this.actAnims.push({id:o.id,kind:"exhale",t0:n,dur:ii.exhale,dir:a.dir});const u=yc[a.element??"poison"]??9428074;for(const g of a.cells){const m=80+Math.max(Math.abs(g.x-d),Math.abs(g.y-h))*70;this.spawnBreathPuff(g.x,s(g.x,g.y),g.y,u,n+m),this.setImpact(g.x,g.y,m+60)}}}}spawnProj(t,e,n,s,r,a,o,l,c,f,d){let h;t==="arrow"?(h=new ne(Fe,this.matE(15260864)),h.scale.set(.045,.045,.42)):t==="stone"?(h=new ne(Fe,this.mat(10133674)),h.scale.set(.15,.13,.15)):(h=new ne(Le,this.matE(e??14202111)),h.scale.set(.24,.24,.24)),h.visible=!1,this.fxGroup.add(h),this.projs.push({m:h,kind:t,color:e,x0:n,y0:s,z0:r,x1:a,y1:o,z1:l,t0:c,dur:Math.max(90,f),arcH:d})}spawnCharge(t,e,n,s,r){const a=new Gn({color:s,transparent:!0,opacity:.9,depthWrite:!1,blending:ps}),o=new ne(Le,a);o.position.set(t,e,n),o.scale.setScalar(.02),this.fxGroup.add(o),this.charges.push({m:o,mat:a,t0:performance.now(),dur:r})}spawnHeal(t,e,n){const s=performance.now();for(let r=0;r<10;r++){const a=new ne(Fe,this.matE(r%2?12447944:16771496)),o=.045+Math.random()*.045;a.scale.set(o,o,o),a.visible=!1,a.position.set(t+(Math.random()-.5)*.62,e+.1+Math.random()*.5,n+(Math.random()-.5)*.62),this.fxGroup.add(a),this.parts.push({m:a,vx:(Math.random()-.5)*.15,vy:.65+Math.random()*.5,vz:(Math.random()-.5)*.15,t0:s+r*42,life:640,noG:!0})}}spawnBreathPuff(t,e,n,s,r){for(let a=0;a<5;a++){const o=new ne(Fe,this.matE(a===0?tt(s,1.25):s)),l=.07+Math.random()*.09;o.scale.set(l,l,l),o.visible=!1,o.position.set(t+(Math.random()-.5)*.7,e+.15+Math.random()*.75,n+(Math.random()-.5)*.7),this.fxGroup.add(o),this.parts.push({m:o,vx:(Math.random()-.5)*.9,vy:.35+Math.random()*1,vz:(Math.random()-.5)*.9,t0:r+Math.random()*70,life:360+Math.random()*180,noG:!0})}}consumeHits(){var n,s,r;const t=(n=this.g)==null?void 0:n.hits;if(!t||!t.length)return;const e=this.g.floor;for(const a of t){if(a.seq<=this.lastHitSeq)continue;this.lastHitSeq=a.seq;const o=a.a,l=((o.size??1)-1)/2,c=(((r=(s=e.tiles[o.pos.y])==null?void 0:s[o.pos.x])==null?void 0:r.height)??0)*Me,f=this.moveCh.sample(o.id,performance.now()),d=(f==null?void 0:f.x)??o.pos.x+l,h=(f==null?void 0:f.z)??o.pos.y+l,u=((f==null?void 0:f.y)??c)+.7+((o.size??1)-1)*.5,g=o.faction==="party";if((a.kind??"damage")==="heal"){this.addDmgNum(d,u+.95,h,a,0);continue}const _=this.impactDelay.get(o.pos.x+","+o.pos.y)??(a.dir?95:0);a.died||(this.anims.push({id:o.id,t0:performance.now()+_,dir:a.dir}),this.addFlash(o.id,g,_)),this.spawnBurst(d,u,h,a.died?14+((o.size??1)-1)*8:7,g,_),this.addDmgNum(d,u+.95,h,a,_),a.died&&this.spawnGhost(o,d,c,h,a.dir,_),(a.dmg>=12||a.died&&(o.size??1)>=2)&&(this.shakeT0=performance.now()+_,this.shakeAmp=a.died&&(o.size??1)>=2?.11:.07)}}addFlash(t,e,n=0){this.flashes.push({id:t,party:e,m:null,mat:null,t0:performance.now()+n})}spawnBurst(t,e,n,s,r,a=0,o){const l=o??(r?[16738906,16756890,13778751]:[16766814,16747082,13778751]);for(let c=0;c<s;c++){const f=new ne(Fe,this.matE(l[c%l.length])),d=.045+Math.random()*.05;f.scale.set(d,d,d),f.visible=a<=0,f.position.set(t+(Math.random()-.5)*.34,e+(Math.random()-.5)*.4,n+(Math.random()-.5)*.34),this.fxGroup.add(f);const h=Math.random()*Math.PI*2,u=1.1+Math.random()*2.2;this.parts.push({m:f,vx:Math.cos(h)*u,vy:1.7+Math.random()*2.6,vz:Math.sin(h)*u,t0:performance.now()+a,life:380+Math.random()*260})}}addDmgNum(t,e,n,s,r=0){var w,M;const a=s.kind??"damage",o=a==="heal",l=a==="poison-tick"||a==="hazard-tick",c=o?`+${s.dmg}`:String(s.dmg),f=o?"#6ee7a8":l?Ec[s.element??"poison"]??"#a8e04a":Ec[s.element??""]??"#f2f4f8",d=o?"#0d3a24":l?"#5a2a7a":"#181c26",{tex:h,aspect:u}=this.numTexFor(c,f,d,l),g=new Zc({map:h,transparent:!0,depthTest:!1,depthWrite:!1}),_=new lg(g);_.renderOrder=60,_.visible=r<=0;const m=(l?.3:o?.34+Math.min(.16,s.dmg*.006):.38+Math.min(.3,s.dmg*.012))*(s.big?1.5:1)*(s.died?1.15:1),p=t+(((w=s.dir)==null?void 0:w.dx)??0)*.24+(Math.random()-.5)*.22,b=n+(((M=s.dir)==null?void 0:M.dy)??0)*.24+(Math.random()-.5)*.22;_.position.set(p,e,b),_.scale.set(m*u,m,1),this.fxGroup.add(_),this.nums.push({m:_,mat:g,aspect:u,t0:performance.now()+r,x:p,y:e,z:b,life:o?900:l?750:s.died||s.big?950:800,sc:m,pop:s.big?1.9:o?1.2:1.4,rise:o?.7:.85})}numTexFor(t,e,n,s){const r=`${t}|${e}|${n}|${s?1:0}`,a=this.numTex.get(r);if(a)return a;if(this.numTex.size>96){const m=this.numTex.keys().next().value;this.numTex.get(m).tex.dispose(),this.numTex.delete(m)}const o=52,l=document.createElement("canvas"),c=`900 ${o}px ui-rounded, system-ui, sans-serif`,f=l.getContext("2d");f.font=c;const d=s?o*.46:0;l.width=Math.ceil(f.measureText(t).width+d)+24,l.height=o+28;const h=l.getContext("2d");h.font=c,h.textBaseline="middle",h.textAlign="left",h.lineJoin="round";const u=l.height/2;if(s){const m=o*.15,p=12+m,b=u+o*.08;h.beginPath(),h.arc(p,b,m,0,Math.PI*2),h.moveTo(p,b-m*2.2),h.lineTo(p+m*.85,b-m*.55),h.lineTo(p-m*.85,b-m*.55),h.closePath(),h.lineWidth=5,h.strokeStyle=n,h.stroke(),h.fillStyle=e,h.fill()}h.lineWidth=9,h.strokeStyle=n,h.strokeText(t,12+d,u),h.fillStyle=e,h.fillText(t,12+d,u);const g=new fa(l);g.colorSpace=We;const _={tex:g,aspect:l.width/l.height};return this.numTex.set(r,_),_}spawnGhost(t,e,n,s,r,a=0){const{geo:o}=this.bodyFor(t,!1),l=vo({transparent:!0}),c=new Je,f=new ne(o,l);{const _=t.kind==="monster"&&hi(t)?xo(t)/100:1;_!==1&&f.scale.setScalar(_)}const d=t.facing||{dx:0,dy:1},h=this.moveCh.sample(t.id,performance.now());f.rotation.y=(h==null?void 0:h.ry)??Math.atan2(d.dx,d.dy),c.add(f),c.position.set((h==null?void 0:h.x)??e,(h==null?void 0:h.y)??n,(h==null?void 0:h.z)??s),this.fxGroup.add(c);const u=r&&(r.dx||r.dy)?r:d,g=new B(u.dy,0,-u.dx).normalize();this.ghosts.push({wrap:c,mat:l,t0:performance.now()+a,axis:g,base:(h==null?void 0:h.y)??n,dur:(t.size??1)>=2?900:620})}tickFx(t){var s,r,a,o,l,c;const e=Math.min(.05,(t-(this.lastT||t))/1e3);this.lastT=t;let n=!1;for(const[f,d]of this.actorGrp){const h=d.userData,u=h.gaitP;if(!u)continue;const g=this.moveCh.sample(f,t);if(!g)continue;h.bx=g.x,h.by=g.y,h.bz=g.z,h.ry=g.ry,d.position.set(g.x,g.y,g.z),d.rotation.set(0,g.ry,0);const _=u.hover?u.hover*(.5+.5*Math.sin(t*.0016+h.hash)):0,m=u.breath?u.breath*(.5+.5*Math.sin(t*.0021+h.hash)):0,p=Gp(u,g.phase,g.moveK,_,m);h.mat.userData.gaitA.value.set(p.a[0],p.a[1],p.a[2],p.a[3]),h.mat.userData.gaitB.value.set(p.b[0],p.b[1]);const b=this.badgeGrps.get(f);b&&b.position.set(g.x,g.y,g.z);const w=this.spotRefs.get(f);if(w&&this.imE&&(g.active||u.hover)){const M=Math.cos(g.ry),T=Math.sin(g.ry),y=w.k??1;for(let C=0;C<w.spots.length;C++){const x=w.spots[C],E=x.gw??[0,0,0],P=x.x+p.a[3]*E[2],I=x.y+p.a[2]*(.15+.85*Math.min(Math.abs(E[2]),1))+p.b[0]*Math.max(0,p.b[1]*Math.sign(E[0]))*Math.abs(E[0]),N=x.z+p.a[0]*E[0]+p.a[1]*E[1],$=g.x+(P*M+N*T)*y,Z=g.y+I*y,k=g.z+(-P*T+N*M)*y;if(this._m4.makeScale(x.sx*y,x.sy*y,x.sz*y),this._m4.setPosition($,Z,k),this.imE.setMatrixAt(w.start+C,this._m4),this.haloIm){const q=this.haloScale(x.sx*y,x.sy*y,x.sz*y);this._m4.makeScale(q,q,q),this._m4.setPosition($,Z,k),this.haloIm.setMatrixAt(w.start+C,this._m4)}}n=!0}}n&&(this.imE.instanceMatrix.needsUpdate=!0,this.haloIm&&(this.haloIm.instanceMatrix.needsUpdate=!0));for(let f=this.actAnims.length-1;f>=0;f--){const d=this.actAnims[f],h=this.actorGrp.get(d.id),u=t-d.t0;if(u>d.dur||!h){if(h){const C=h.userData;h.position.set(C.bx,C.by,C.bz),h.rotation.set(0,C.ry??0,0)}this.actAnims.splice(f,1);continue}if(u<0)continue;const g=u/d.dur,_=h.userData,m=d.dir??{dx:0,dy:1},p=Math.max(1,Math.hypot(m.dx,m.dy)),b=m.dx/p,w=m.dy/p,{lunge:M,tilt:T,yawOff:y}=Bp(d.kind,g);h.position.set(_.bx+b*M,_.by,_.bz+w*M),this._ax.set(w,0,-b),this._q1.setFromAxisAngle(this._ax,T),this._q2.setFromAxisAngle(Pb,(_.ry??0)+y),h.quaternion.copy(this._q1).multiply(this._q2)}for(let f=this.anims.length-1;f>=0;f--){const d=this.anims[f],h=this.actorGrp.get(d.id),u=t-d.t0;if(u>300||!h){if(h){const m=h.userData;h.position.set(m.bx,m.by,m.bz),h.scale.set(1,1,1)}this.anims.splice(f,1);continue}if(u<0)continue;const g=zp(u/300),_=h.userData;h.position.set(_.bx+(((s=d.dir)==null?void 0:s.dx)??0)*g.kb,_.by,_.bz+(((r=d.dir)==null?void 0:r.dy)??0)*g.kb),h.scale.set(g.sxz,g.sy,g.sxz)}for(let f=this.projs.length-1;f>=0;f--){const d=this.projs[f],h=t-d.t0;if(h<0){d.m.visible=!1;continue}const u=h/d.dur;if(u>=1){this.fxGroup.remove(d.m),this.projs.splice(f,1);continue}d.m.visible=!0;const g=d.x0+(d.x1-d.x0)*u,_=d.z0+(d.z1-d.z0)*u,m=d.y0+(d.y1-d.y0)*u+d.arcH*4*u*(1-u);if(d.m.position.set(g,m,_),d.kind==="arrow"){const p=Math.min(1,u+.06),b=d.y0+(d.y1-d.y0)*p+d.arcH*4*p*(1-p);d.m.lookAt(d.x0+(d.x1-d.x0)*p,b,d.z0+(d.z1-d.z0)*p)}else d.m.rotation.x+=e*7,d.m.rotation.y+=e*9;if(d.kind==="bolt"&&Math.random()<.65){const p=new ne(Fe,this.matE(d.color??14202111)),b=.045+Math.random()*.04;p.scale.set(b,b,b),p.position.set(g,m,_),this.fxGroup.add(p),this.parts.push({m:p,vx:0,vy:.12,vz:0,t0:t,life:190,noG:!0})}}for(let f=this.charges.length-1;f>=0;f--){const d=this.charges[f],h=(t-d.t0)/d.dur;if(h>=1){this.fxGroup.remove(d.m),d.mat.dispose(),this.charges.splice(f,1);continue}d.m.scale.setScalar(.05+.3*h),d.m.rotation.y+=e*6,d.mat.opacity=.9*(.45+.55*h)}for(let f=this.flashes.length-1;f>=0;f--){const d=this.flashes[f],h=t-d.t0;if(h>210){(o=(a=d.m)==null?void 0:a.parent)==null||o.remove(d.m),(l=d.mat)==null||l.dispose(),this.flashes.splice(f,1);continue}if(!(h<0)){if(!d.m){const u=this.actorGrp.get(d.id),g=(c=u==null?void 0:u.userData)==null?void 0:c.geo;if(!u||!g){this.flashes.splice(f,1);continue}d.mat=new Gn({color:d.party?16734794:16777215,transparent:!0,opacity:.7,depthWrite:!1,blending:ps}),d.m=new ne(g,d.mat),d.m.scale.set(1.02,1.02,1.02),u.add(d.m)}d.mat.opacity=.7*(1-h/210)}}for(let f=this.parts.length-1;f>=0;f--){const d=this.parts[f],h=t-d.t0;if(h>d.life){this.fxGroup.remove(d.m),this.parts.splice(f,1);continue}if(h<0){d.m.visible=!1;continue}d.m.visible=!0,d.noG?(d.m.position.x+=d.vx*e,d.m.position.y+=d.vy*e,d.m.position.z+=d.vz*e):(d.vy-=9.5*e,d.m.position.x+=d.vx*e,d.m.position.y+=d.vy*e,d.m.position.z+=d.vz*e,d.m.position.y<.03&&d.vy<0&&(d.m.position.y=.03,d.vy*=-.35,d.vx*=.7,d.vz*=.7));const u=1-h/d.life;d.m.scale.setScalar(Math.max(.012,.095*u))}for(let f=this.ghosts.length-1;f>=0;f--){const d=this.ghosts[f],h=(t-d.t0)/d.dur;if(h>=1){this.fxGroup.remove(d.wrap),d.mat.dispose(),this.ghosts.splice(f,1);continue}const u=kp(h);d.wrap.quaternion.setFromAxisAngle(d.axis,u.ang),d.wrap.position.y=d.base-u.sink,d.mat.opacity=u.opacity}for(let f=this.nums.length-1;f>=0;f--){const d=this.nums[f],h=t-d.t0;if(h>d.life){this.fxGroup.remove(d.m),d.mat.dispose(),this.nums.splice(f,1);continue}if(h<0){d.m.visible=!1;continue}d.m.visible=!0;const u=h/d.life;d.m.position.set(d.x,d.y+u*d.rise,d.z);const g=Math.min(1,h/160),_=d.pop-(d.pop-1)*g*g*(3-2*g);d.m.scale.set(d.sc*d.aspect*_,d.sc*_,1),d.mat.opacity=u<.55?1:1-(u-.55)/.45}}clearFx(){var t,e,n;for(const s of this.flashes)(e=(t=s.m)==null?void 0:t.parent)==null||e.remove(s.m),(n=s.mat)==null||n.dispose();for(const s of this.parts)this.fxGroup.remove(s.m);for(const s of this.ghosts)this.fxGroup.remove(s.wrap),s.mat.dispose();for(const s of this.nums)this.fxGroup.remove(s.m),s.mat.dispose();for(const s of this.projs)this.fxGroup.remove(s.m);for(const s of this.charges)this.fxGroup.remove(s.m),s.mat.dispose();this.anims.length=0,this.flashes.length=0,this.parts.length=0,this.ghosts.length=0,this.nums.length=0,this.actAnims.length=0,this.projs.length=0,this.charges.length=0,this.impactDelay.clear(),this.shakeT0=-1}setupStage(){this.ambL=new Eg(16777215,2236962,.5),this.scene.add(this.ambL),this.sunL=new ql(16777215,.7),this.scene.add(this.sunL),this.fillL=new ql(10466520,.26),this.scene.add(this.fillL),this.heroL=new Ag(16761470,3.2,14,2),this.scene.add(this.heroL),this.groundM=new ne(new li(this.W+6,this.H+6),new or({color:1778224,fog:!0})),this.groundM.rotation.x=-Math.PI/2,this.groundM.position.set((this.W-1)/2,-.12,(this.H-1)/2),this.scene.add(this.groundM),this.applyEnv()}applyEnv(){var s,r;const t=this.env,e=xp(t);(r=(s=this.scene.background)==null?void 0:s.setHex)==null||r.call(s,t.bg);const n=this.scene.fog;n&&(n.color.setHex(t.bg),n.density=t.fogD),vp(e.actFill,e.actFillI),this.ambL&&(this.ambL.color.setHex(e.hemiSky),this.ambL.groundColor.setHex(e.hemiGround),this.ambL.intensity=e.hemiI,this.sunL.color.setHex(e.sunCol),this.sunL.intensity=e.sunI,this.sunL.position.set(...e.sunPos),this.fillL.color.setHex(e.fillCol),this.fillL.intensity=e.fillI,this.fillL.position.set(...e.fillPos),this.heroL.color.setHex(e.heroCol),this.groundM.material.color.setHex(t.ground))}}const jb=Object.freeze(Object.defineProperty({__proto__:null,ACT_DUR:ii,ACT_FILL:Xo,ENV:fn,FIGURE_PARTS:Up,FIGURE_SLOTS:Lp,GAIT_PROFILES:Wn,GLOW_HEX:br,LARGE_BUILDERS:Mr,MAT_CLOTH:Lb,MAT_LEATHER:Mp,MAT_METAL:Mo,MAT_NONE:Ib,MAT_SCALE:ki,MON_VOX:Ir,MoveChannel:Hp,STEP:Me,TILE_SAMPLES:Wb,VoxelRenderer:Xb,_setModelLib:wp,actPose:Bp,assembleMonolithic:Lr,bakeGaitAttr:Ur,bakeMatUniform:bp,bodyColorOf:Yo,buildActorBody:Op,buildFigureBody:Ko,buildVoxBody:Pp,cellsToGeo:ys,ck:Te,envLightParams:xp,figureAssign:Dp,figureBodyKey:Jo,figureBoxes:Np,gaitPose:Gp,gaitProfileOf:Dr,gaitWeightAt:ws,geomFromVoxDef:yp,ghostPose:kp,hiCapable:bo,hitPose:zp,makeBodyMaterial:vo,modelLibEntries:kb,monTypeOf:pi,monsterBoxes:Ip,pickHiIds:Cp,pushFineBoxes:qo,raceSpecOf:Zo,setActorFill:vp,toGeometry:Ss,upresCells:Pr,voxDefCells:Cr,voxDefOf:Ap,voxFineOf:Rp,voxGlowOf:Tp},Symbol.toStringTag,{value:"Module"}));export{Wb as $,wo as A,ji as B,Gt as C,ql as D,fn as E,Me as F,Je as G,Eg as H,Ol as I,Bt as J,Hn as K,Kb as L,ne as M,An as N,Go as O,Xe as P,li as Q,Pg as R,ng as S,Ir as T,br as U,B as V,AM as W,kb as X,Mr as Y,pi as Z,rp as _,Ag as a,wp as a0,ii as a1,ps as a2,Bp as a3,Yn as a4,Dr as a5,Gp as a6,zp as a7,kp as a8,Jb as a9,jb as aa,eh as b,or as c,Lr as d,Pp as e,Ap as f,Ms as g,Tb as h,xr as i,ci as j,Ab as k,Gn as l,vo as m,ie as n,mp as o,vs as p,yb as q,Xb as r,vp as s,Zb as t,gi as u,Tp as v,Op as w,hi as x,xo as y,xp as z};
