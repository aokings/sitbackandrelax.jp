var of=Object.defineProperty;var lf=(i,e,t)=>e in i?of(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var xe=(i,e,t)=>lf(i,typeof e!="symbol"?e+"":e,t);import{a as cf,c as hf,w as qi,f as ms,V as ff,h as uf,p as df,g as pf,v as mf,d as Sc,i as mo}from"./voxmodel-CmItTEBR.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const go="185",gf=0,il=1,_f=2,Qs=1,xf=2,ls=3,qn=0,zt=1,Tn=2,Rn=0,Fi=1,rr=2,sl=3,rl=4,vf=5,ni=100,Mf=101,Sf=102,bf=103,yf=104,Ef=200,wf=201,Tf=202,Af=203,ga=204,_a=205,Rf=206,Cf=207,Pf=208,If=209,Df=210,Lf=211,Uf=212,Nf=213,Ff=214,xa=0,va=1,Ma=2,ki=3,Sa=4,ba=5,ya=6,Ea=7,_o=0,Of=1,Bf=2,mn=0,bc=1,yc=2,Ec=3,xo=4,wc=5,Tc=6,Ac=7,Rc=300,ci=301,Gi=302,Lr=303,Ur=304,Mr=306,wa=1e3,An=1001,Ta=1002,Rt=1003,zf=1004,Es=1005,Lt=1006,Nr=1007,ri=1008,qt=1009,Cc=1010,Pc=1011,fs=1012,vo=1013,_n=1014,sn=1015,Pn=1016,Mo=1017,So=1018,us=1020,Ic=35902,Dc=35899,Lc=1021,Uc=1022,rn=1023,In=1026,ai=1027,bo=1028,yo=1029,hi=1030,Eo=1031,wo=1033,js=33776,er=33777,tr=33778,nr=33779,Aa=35840,Ra=35841,Ca=35842,Pa=35843,Ia=36196,Da=37492,La=37496,Ua=37488,Na=37489,ar=37490,Fa=37491,Oa=37808,Ba=37809,za=37810,ka=37811,Ga=37812,Ha=37813,Va=37814,Wa=37815,Xa=37816,qa=37817,Ya=37818,$a=37819,Ka=37820,Za=37821,Ja=36492,Qa=36494,ja=36495,eo=36283,to=36284,or=36285,no=36286,kf=3200,io=0,Gf=1,Hn="",Wt="srgb",lr="srgb-linear",cr="linear",Qe="srgb",gi=7680,al=519,Hf=512,Vf=513,Wf=514,To=515,Xf=516,qf=517,Ao=518,Yf=519,so=35044,ol="300 es",pn=2e3,ds=2001;function $f(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kf(){const i=hr("canvas");return i.style.display="block",i}const ll={};function fr(...i){const e="THREE."+i.shift();console.log(e,...i)}function Nc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=Nc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=Nc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Oi(...i){const e=i.join(" ");e in ll||(ll[e]=!0,Ie(...i))}function Zf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Jf={[xa]:va,[Ma]:ya,[Sa]:Ea,[ki]:ba,[va]:xa,[ya]:Ma,[Ea]:Sa,[ba]:ki};class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fr=Math.PI/180,ro=180/Math.PI;function Xn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Qf(i,e){return(i%e+e)%e}function Or(i,e,t){return(1-t)*i+t*e}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function st(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Vo=class Vo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vo.prototype.isVector2=!0;let Le=Vo;class Yn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],m=r[a+2],_=r[a+3];if(f!==_||l!==h||c!==d||u!==m){let g=l*h+c*d+u*m+f*_;g<0&&(h=-h,d=-d,m=-m,_=-_,g=-g);let p=1-o;if(g<.9995){const y=Math.acos(g),T=Math.sin(y);p=Math.sin(p*y)/T,o=Math.sin(o*y)/T,l=l*p+h*o,c=c*p+d*o,u=u*p+m*o,f=f*p+_*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+m*o,f=f*p+_*o;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+u*f+l*d-c*h,e[t+1]=l*m+u*h+c*f-o*d,e[t+2]=c*m+u*d+o*h-l*f,e[t+3]=u*m-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wo=class Wo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Br.copy(this).projectOnVector(e),this.sub(Br)}reflect(e){return this.sub(Br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wo.prototype.isVector3=!0;let F=Wo;const Br=new F,cl=new Yn,Xo=class Xo{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],_=s[0],g=s[3],p=s[6],y=s[1],T=s[4],S=s[7],R=s[2],A=s[5],I=s[8];return r[0]=a*_+o*y+l*R,r[3]=a*g+o*T+l*A,r[6]=a*p+o*S+l*I,r[1]=c*_+u*y+f*R,r[4]=c*g+u*T+f*A,r[7]=c*p+u*S+f*I,r[2]=h*_+d*y+m*R,r[5]=h*g+d*T+m*A,r[8]=h*p+d*S+m*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,m=t*f+n*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=f*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zr.makeScale(e,t)),this}rotate(e){return Oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zr.makeRotation(-e)),this}translate(e,t){return Oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xo.prototype.isMatrix3=!0;let Ue=Xo;const zr=new Ue,hl=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fl=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jf(){const i={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hn?cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[lr]:{primaries:e,whitePoint:n,transfer:cr,toXYZ:hl,fromXYZ:fl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:hl,fromXYZ:fl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}const Xe=jf();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _i;class eu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_i===void 0&&(_i=hr("canvas")),_i.width=e.width,_i.height=e.height;const s=_i.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=_i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cn(t[n]/255)*255):t[n]=Cn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tu=0;class Ro{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(kr(s[a].image)):r.push(kr(s[a]))}else r=kr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let nu=0;const Gr=new F;class Ut extends fi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=An,s=An,r=Lt,a=ri,o=rn,l=qt,c=Ut.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Xn(),this.name="",this.source=new Ro(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gr).x}get height(){return this.source.getSize(Gr).y}get depth(){return this.source.getSize(Gr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wa:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wa:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Rc;Ut.DEFAULT_ANISOTROPY=1;const qo=class qo{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,S=(d+1)/2,R=(p+1)/2,A=(u+h)/4,I=(f+_)/4,x=(m+g)/4;return T>S&&T>R?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=A/n,r=I/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=x/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=I/r,s=x/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qo.prototype.isVector4=!0;let ht=qo;class iu extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Ut(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ro(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends iu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fc extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class su extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vr=class vr{constructor(e,t,n,s,r,a,o,l,c,u,f,h,d,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,d,m,_,g)}set(e,t,n,s,r,a,o,l,c,u,f,h,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/xi.setFromMatrixColumn(e,0).length(),r=1/xi.setFromMatrixColumn(e,1).length(),a=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,m=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,m=c*u,_=c*f;t[0]=h+_*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,m=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,m=o*u,_=o*f;t[0]=l*u,t[4]=m*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=m*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+m,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ru,e,au)}lookAt(e,t,n){const s=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Nn.crossVectors(n,Gt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Nn.crossVectors(n,Gt)),Nn.normalize(),ws.crossVectors(Gt,Nn),s[0]=Nn.x,s[4]=ws.x,s[8]=Gt.x,s[1]=Nn.y,s[5]=ws.y,s[9]=Gt.y,s[2]=Nn.z,s[6]=ws.z,s[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],y=n[3],T=n[7],S=n[11],R=n[15],A=s[0],I=s[4],x=s[8],w=s[12],M=s[1],E=s[5],C=s[9],D=s[13],G=s[2],L=s[6],z=s[10],B=s[14],Y=s[3],Z=s[7],se=s[11],ne=s[15];return r[0]=a*A+o*M+l*G+c*Y,r[4]=a*I+o*E+l*L+c*Z,r[8]=a*x+o*C+l*z+c*se,r[12]=a*w+o*D+l*B+c*ne,r[1]=u*A+f*M+h*G+d*Y,r[5]=u*I+f*E+h*L+d*Z,r[9]=u*x+f*C+h*z+d*se,r[13]=u*w+f*D+h*B+d*ne,r[2]=m*A+_*M+g*G+p*Y,r[6]=m*I+_*E+g*L+p*Z,r[10]=m*x+_*C+g*z+p*se,r[14]=m*w+_*D+g*B+p*ne,r[3]=y*A+T*M+S*G+R*Y,r[7]=y*I+T*E+S*L+R*Z,r[11]=y*x+T*C+S*z+R*se,r[15]=y*w+T*D+S*B+R*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15],y=l*d-c*h,T=o*d-c*f,S=o*h-l*f,R=a*d-c*u,A=a*h-l*u,I=a*f-o*u;return t*(_*y-g*T+p*S)-n*(m*y-g*R+p*A)+s*(m*T-_*R+p*I)-r*(m*S-_*A+g*I)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],y=t*o-n*a,T=t*l-s*a,S=t*c-r*a,R=n*l-s*o,A=n*c-r*o,I=s*c-r*l,x=u*_-f*m,w=u*g-h*m,M=u*p-d*m,E=f*g-h*_,C=f*p-d*_,D=h*p-d*g,G=y*D-T*C+S*E+R*M-A*w+I*x;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/G;return e[0]=(o*D-l*C+c*E)*L,e[1]=(s*C-n*D-r*E)*L,e[2]=(_*I-g*A+p*R)*L,e[3]=(h*A-f*I-d*R)*L,e[4]=(l*M-a*D-c*w)*L,e[5]=(t*D-s*M+r*w)*L,e[6]=(g*S-m*I-p*T)*L,e[7]=(u*I-h*S+d*T)*L,e[8]=(a*C-o*M+c*x)*L,e[9]=(n*M-t*C-r*x)*L,e[10]=(m*A-_*S+p*y)*L,e[11]=(f*S-u*A-d*y)*L,e[12]=(o*w-a*E-l*x)*L,e[13]=(t*E-n*w+s*x)*L,e[14]=(_*T-m*R-g*y)*L,e[15]=(u*R-f*T+h*y)*L,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,m=r*f,_=a*u,g=a*f,p=o*f,y=l*c,T=l*u,S=l*f,R=n.x,A=n.y,I=n.z;return s[0]=(1-(_+p))*R,s[1]=(d+S)*R,s[2]=(m-T)*R,s[3]=0,s[4]=(d-S)*A,s[5]=(1-(h+p))*A,s[6]=(g+y)*A,s[7]=0,s[8]=(m+T)*I,s[9]=(g-y)*I,s[10]=(1-(h+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=xi.set(s[0],s[1],s[2]).length();const o=xi.set(s[4],s[5],s[6]).length(),l=xi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),en.copy(this);const c=1/a,u=1/o,f=1/l;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,t.setFromRotationMatrix(en),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=pn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===pn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ds)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=pn,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s);let m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===pn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===ds)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};vr.prototype.isMatrix4=!0;let et=vr;const xi=new F,en=new et,ru=new F(0,0,0),au=new F(1,1,1),Nn=new F,ws=new F,Gt=new F,ul=new et,dl=new Yn;class $n{constructor(e=0,t=0,n=0,s=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dl.setFromEuler(this),this.setFromQuaternion(dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Co{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ou=0;const pl=new F,vi=new Yn,vn=new et,Ts=new F,Zi=new F,lu=new F,cu=new Yn,ml=new F(1,0,0),gl=new F(0,1,0),_l=new F(0,0,1),xl={type:"added"},hu={type:"removed"},Mi={type:"childadded",child:null},Hr={type:"childremoved",child:null};class Mt extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new F,t=new $n,n=new Yn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Ue}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(ml,e)}rotateY(e){return this.rotateOnAxis(gl,e)}rotateZ(e){return this.rotateOnAxis(_l,e)}translateOnAxis(e,t){return pl.copy(e).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ml,e)}translateY(e){return this.translateOnAxis(gl,e)}translateZ(e){return this.translateOnAxis(_l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ts.copy(e):Ts.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Zi,Ts,this.up):vn.lookAt(Ts,Zi,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),vi.setFromRotationMatrix(vn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xl),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hu),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xl),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Mt.DEFAULT_UP=new F(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jt extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fu={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},As={h:0,s:0,l:0};function Wr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=Qf(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wr(a,r,e+1/3),this.g=Wr(a,r,e),this.b=Wr(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=Oc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Xe.workingToColorSpace(It.copy(this),e),Math.round(qe(It.r*255,0,255))*65536+Math.round(qe(It.g*255,0,255))*256+Math.round(qe(It.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(It.copy(this),t);const n=It.r,s=It.g,r=It.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Wt){Xe.workingToColorSpace(It.copy(this),e);const t=It.r,n=It.g,s=It.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(As);const n=Or(Fn.h,As.h,t),s=Or(Fn.s,As.s,t),r=Or(Fn.l,As.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ne;Ne.NAMES=Oc;class Po{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new Po(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uu extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const tn=new F,Mn=new F,Xr=new F,Sn=new F,Si=new F,bi=new F,vl=new F,qr=new F,Yr=new F,$r=new F,Kr=new ht,Zr=new ht,Jr=new ht;class Qt{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){tn.subVectors(s,t),Mn.subVectors(n,t),Xr.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(Mn),l=tn.dot(Xr),c=Mn.dot(Mn),u=Mn.dot(Xr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,m=(a*u-o*l)*h;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(o,Sn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Kr.setScalar(0),Zr.setScalar(0),Jr.setScalar(0),Kr.fromBufferAttribute(e,t),Zr.fromBufferAttribute(e,n),Jr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Kr,r.x),a.addScaledVector(Zr,r.y),a.addScaledVector(Jr,r.z),a}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),Mn.subVectors(e,t),tn.cross(Mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),tn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Si.subVectors(s,n),bi.subVectors(r,n),qr.subVectors(e,n);const l=Si.dot(qr),c=bi.dot(qr);if(l<=0&&c<=0)return t.copy(n);Yr.subVectors(e,s);const u=Si.dot(Yr),f=bi.dot(Yr);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Si,a);$r.subVectors(e,r);const d=Si.dot($r),m=bi.dot($r);if(m>=0&&d<=m)return t.copy(r);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(bi,o);const g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return vl.subVectors(r,s),o=(f-u)/(f-u+(d-m)),t.copy(s).addScaledVector(vl,o);const p=1/(g+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(Si,a).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ui{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(e.matrixWorld),this.union(Rs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Cs.subVectors(this.max,Ji),yi.subVectors(e.a,Ji),Ei.subVectors(e.b,Ji),wi.subVectors(e.c,Ji),On.subVectors(Ei,yi),Bn.subVectors(wi,Ei),Zn.subVectors(yi,wi);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-Zn.z,Zn.y,On.z,0,-On.x,Bn.z,0,-Bn.x,Zn.z,0,-Zn.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-Zn.y,Zn.x,0];return!Qr(t,yi,Ei,wi,Cs)||(t=[1,0,0,0,1,0,0,0,1],!Qr(t,yi,Ei,wi,Cs))?!1:(Ps.crossVectors(On,Bn),t=[Ps.x,Ps.y,Ps.z],Qr(t,yi,Ei,wi,Cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bn=[new F,new F,new F,new F,new F,new F,new F,new F],nn=new F,Rs=new ui,yi=new F,Ei=new F,wi=new F,On=new F,Bn=new F,Zn=new F,Ji=new F,Cs=new F,Ps=new F,Jn=new F;function Qr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Jn.fromArray(i,r);const o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),u=n.dot(Jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const vt=new F,Is=new Le;let du=0;class jt extends fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:du++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=so,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Is.fromBufferAttribute(this,t),Is.applyMatrix3(e),this.setXY(t,Is.x,Is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==so&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Bc extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zc extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const pu=new ui,Qi=new F,jr=new F;class Yi{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(jr)),this.expandByPoint(Qi.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mu=0;const $t=new et,ea=new Mt,Ti=new F,Ht=new ui,ji=new ui,yt=new F;class Ot extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($f(e)?zc:Bc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return ea.lookAt(e),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Ht.min,ji.min),Ht.expandByPoint(yt),yt.addVectors(Ht.max,ji.max),Ht.expandByPoint(yt)):(Ht.expandByPoint(ji.min),Ht.expandByPoint(ji.max))}Ht.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),l&&(Ti.fromBufferAttribute(e,c),yt.add(Ti)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new F,l[x]=new F;const c=new F,u=new F,f=new F,h=new Le,d=new Le,m=new Le,_=new F,g=new F;function p(x,w,M){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,M),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,M),u.sub(c),f.sub(c),d.sub(h),m.sub(h);const E=1/(d.x*m.y-m.x*d.y);isFinite(E)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(E),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(E),o[x].add(_),o[w].add(_),o[M].add(_),l[x].add(g),l[w].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,w=y.length;x<w;++x){const M=y[x],E=M.start,C=M.count;for(let D=E,G=E+C;D<G;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const T=new F,S=new F,R=new F,A=new F;function I(x){R.fromBufferAttribute(s,x),A.copy(R);const w=o[x];T.copy(w),T.sub(R.multiplyScalar(R.dot(w))).normalize(),S.crossVectors(A,w);const E=S.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,E)}for(let x=0,w=y.length;x<w;++x){const M=y[x],E=M.start,C=M.count;for(let D=E,G=E+C;D<G;D+=3)I(e.getX(D+0)),I(e.getX(D+1)),I(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[m++]=c[d++]}return new jt(h,u,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=so,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new F;class ur{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){fr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ur(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){fr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let _u=0;class di extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=Fi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kc extends di{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ai;const es=new F,Ri=new F,Ci=new F,Pi=new Le,ts=new Le,Gc=new et,Ds=new F,ns=new F,Ls=new F,Ml=new Le,ta=new Le,Sl=new Le;class xu extends Mt{constructor(e=new kc){if(super(),this.isSprite=!0,this.type="Sprite",Ai===void 0){Ai=new Ot;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gu(t,5);Ai.setIndex([0,1,2,0,2,3]),Ai.setAttribute("position",new ur(n,3,0,!1)),Ai.setAttribute("uv",new ur(n,2,3,!1))}this.geometry=Ai,this.material=e,this.center=new Le(.5,.5),this.count=1}raycast(e,t){e.camera===null&&We('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ri.setFromMatrixScale(this.matrixWorld),Gc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ci.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ri.multiplyScalar(-Ci.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Us(Ds.set(-.5,-.5,0),Ci,a,Ri,s,r),Us(ns.set(.5,-.5,0),Ci,a,Ri,s,r),Us(Ls.set(.5,.5,0),Ci,a,Ri,s,r),Ml.set(0,0),ta.set(1,0),Sl.set(1,1);let o=e.ray.intersectTriangle(Ds,ns,Ls,!1,es);if(o===null&&(Us(ns.set(-.5,.5,0),Ci,a,Ri,s,r),ta.set(0,1),o=e.ray.intersectTriangle(Ds,Ls,ns,!1,es),o===null))return;const l=e.ray.origin.distanceTo(es);l<e.near||l>e.far||t.push({distance:l,point:es.clone(),uv:Qt.getInterpolation(es,Ds,ns,Ls,Ml,ta,Sl,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Us(i,e,t,n,s,r){Pi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ts.x=r*Pi.x-s*Pi.y,ts.y=s*Pi.x+r*Pi.y):ts.copy(Pi),i.copy(e),i.x+=ts.x,i.y+=ts.y,i.applyMatrix4(Gc)}const yn=new F,na=new F,Ns=new F,zn=new F,ia=new F,Fs=new F,sa=new F;class Io{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){na.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(na);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ns),o=zn.dot(this.direction),l=-zn.dot(Ns),c=zn.lengthSq(),u=Math.abs(1-a*a);let f,h,d,m;if(u>0)if(f=a*l-o,h=a*o-l,m=r*u,f>=0)if(h>=-m)if(h<=m){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(na).addScaledVector(Ns,h),d}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,s,r){ia.subVectors(t,e),Fs.subVectors(n,e),sa.crossVectors(ia,Fs);let a=this.direction.dot(sa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);const l=o*this.direction.dot(Fs.crossVectors(zn,Fs));if(l<0)return null;const c=o*this.direction.dot(ia.cross(zn));if(c<0||l+c>a)return null;const u=-o*zn.dot(sa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ii extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bl=new et,Qn=new Io,Os=new Yi,yl=new F,Bs=new F,zs=new F,ks=new F,ra=new F,Gs=new F,El=new F,Hs=new F;class je extends Mt{constructor(e=new Ot,t=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Gs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(ra.fromBufferAttribute(f,e),a?Gs.addScaledVector(ra,u):Gs.addScaledVector(ra.sub(t),u))}t.add(Gs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),Qn.copy(e.ray).recast(e.near),!(Os.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Os,yl)===null||Qn.origin.distanceToSquared(yl)>(e.far-e.near)**2))&&(bl.copy(r).invert(),Qn.copy(e.ray).applyMatrix4(bl),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=a[g.materialIndex],y=Math.max(g.start,d.start),T=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let S=y,R=T;S<R;S+=3){const A=o.getX(S),I=o.getX(S+1),x=o.getX(S+2);s=Vs(this,p,e,n,c,u,f,A,I,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const y=o.getX(g),T=o.getX(g+1),S=o.getX(g+2);s=Vs(this,a,e,n,c,u,f,y,T,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=a[g.materialIndex],y=Math.max(g.start,d.start),T=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let S=y,R=T;S<R;S+=3){const A=S,I=S+1,x=S+2;s=Vs(this,p,e,n,c,u,f,A,I,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const y=g,T=g+1,S=g+2;s=Vs(this,a,e,n,c,u,f,y,T,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function vu(i,e,t,n,s,r,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===qn,o),l===null)return null;Hs.copy(o),Hs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Hs);return c<t.near||c>t.far?null:{distance:c,point:Hs.clone(),object:i}}function Vs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Bs),i.getVertexPosition(l,zs),i.getVertexPosition(c,ks);const u=vu(i,e,t,n,Bs,zs,ks,El);if(u){const f=new F;Qt.getBarycoord(El,Bs,zs,ks,f),s&&(u.uv=Qt.getInterpolatedAttribute(s,o,l,c,f,new Le)),r&&(u.uv1=Qt.getInterpolatedAttribute(r,o,l,c,f,new Le)),a&&(u.normal=Qt.getInterpolatedAttribute(a,o,l,c,f,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};Qt.getNormal(Bs,zs,ks,h.normal),u.face=h,u.barycoord=f}return u}class Hc extends Ut{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Rt,u=Rt,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wl extends jt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ii=new et,Tl=new et,Ws=[],Al=new ui,Mu=new et,is=new je,ss=new Yi;class Su extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ii),Al.copy(e.boundingBox).applyMatrix4(Ii),this.boundingBox.union(Al)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ii),ss.copy(e.boundingSphere).applyMatrix4(Ii),this.boundingSphere.union(ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ss.copy(this.boundingSphere),ss.applyMatrix4(n),e.ray.intersectsSphere(ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ii),Tl.multiplyMatrices(n,Ii),is.matrixWorld=Tl,is.raycast(e,Ws);for(let a=0,o=Ws.length;a<o;a++){const l=Ws[a];l.instanceId=r,l.object=this,t.push(l)}Ws.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new wl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hc(new Float32Array(s*this.count),s,this.count,bo,sn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const aa=new F,bu=new F,yu=new Ue;class Gn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=aa.subVectors(n,t).cross(bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(aa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yu.getNormalMatrix(e),s=this.coplanarPoint(aa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new Yi,Eu=new Le(.5,.5),Xs=new F;class Do{constructor(e=new Gn,t=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],y=r[12],T=r[13],S=r[14],R=r[15];if(s[0].setComponents(c-a,d-u,p-m,R-y).normalize(),s[1].setComponents(c+a,d+u,p+m,R+y).normalize(),s[2].setComponents(c+o,d+f,p+_,R+T).normalize(),s[3].setComponents(c-o,d-f,p-_,R-T).normalize(),n)s[4].setComponents(l,h,g,S).normalize(),s[5].setComponents(c-l,d-h,p-g,R-S).normalize();else if(s[4].setComponents(c-l,d-h,p-g,R-S).normalize(),t===pn)s[5].setComponents(c+l,d+h,p+g,R+S).normalize();else if(t===ds)s[5].setComponents(l,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(e){jn.center.set(0,0,0);const t=Eu.distanceTo(e.center);return jn.radius=.7071067811865476+t,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Xs.x=s.normal.x>0?e.max.x:e.min.x,Xs.y=s.normal.y>0?e.max.y:e.min.y,Xs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vc extends di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dr=new F,pr=new F,Rl=new et,rs=new Io,qs=new Yi,oa=new F,Cl=new F;class wu extends Mt{constructor(e=new Ot,t=new Vc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)dr.fromBufferAttribute(t,s-1),pr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=dr.distanceTo(pr);e.setAttribute("lineDistance",new dt(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(s),qs.radius+=r,e.ray.intersectsSphere(qs)===!1)return;Rl.copy(s).invert(),rs.copy(e.ray).applyMatrix4(Rl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=c){const p=u.getX(_),y=u.getX(_+1),T=Ys(this,e,rs,l,p,y,_);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(d),p=Ys(this,e,rs,l,_,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=c){const p=Ys(this,e,rs,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Ys(this,e,rs,l,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ys(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(dr.fromBufferAttribute(o,s),pr.fromBufferAttribute(o,r),t.distanceSqToSegment(dr,pr,oa,Cl)>n)return;oa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(oa);if(!(c<e.near||c>e.far))return{distance:c,point:Cl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Pl=new F,Il=new F;class Tu extends wu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Pl.fromBufferAttribute(t,s),Il.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pl.distanceTo(Il);e.setAttribute("lineDistance",new dt(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wc extends Ut{constructor(e=[],t=ci,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dl extends Ut{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hi extends Ut{constructor(e,t,n=_n,s,r,a,o=Rt,l=Rt,c,u=In,f=1){if(u!==In&&u!==ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ro(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Au extends Hi{constructor(e,t=_n,n=ci,s,r,a=Rt,o=Rt,l,c=In){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xc extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(f,2));function m(_,g,p,y,T,S,R,A,I,x,w){const M=S/I,E=R/x,C=S/2,D=R/2,G=A/2,L=I+1,z=x+1;let B=0,Y=0;const Z=new F;for(let se=0;se<z;se++){const ne=se*E-D;for(let oe=0;oe<L;oe++){const De=oe*M-C;Z[_]=De*y,Z[g]=ne*T,Z[p]=G,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[g]=0,Z[p]=A>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(oe/I),f.push(1-se/x),B+=1}}for(let se=0;se<x;se++)for(let ne=0;ne<I;ne++){const oe=h+ne+L*se,De=h+ne+L*(se+1),Ze=h+(ne+1)+L*(se+1),Ge=h+(ne+1)+L*se;l.push(oe,De,Ge),l.push(De,Ze,Ge),Y+=6}o.addGroup(d,Y,w),d+=Y,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qc extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let m=0;const _=[],g=n/2;let p=0;y(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2));function y(){const S=new F,R=new F;let A=0;const I=(t-e)/n;for(let x=0;x<=r;x++){const w=[],M=x/r,E=M*(t-e)+e;for(let C=0;C<=s;C++){const D=C/s,G=D*l+o,L=Math.sin(G),z=Math.cos(G);R.x=E*L,R.y=-M*n+g,R.z=E*z,f.push(R.x,R.y,R.z),S.set(L,I,z).normalize(),h.push(S.x,S.y,S.z),d.push(D,1-M),w.push(m++)}_.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){const M=_[w][x],E=_[w+1][x],C=_[w+1][x+1],D=_[w][x+1];(e>0||w!==0)&&(u.push(M,E,D),A+=3),(t>0||w!==r-1)&&(u.push(E,C,D),A+=3)}c.addGroup(p,A,0),p+=A}function T(S){const R=m,A=new Le,I=new F;let x=0;const w=S===!0?e:t,M=S===!0?1:-1;for(let C=1;C<=s;C++)f.push(0,g*M,0),h.push(0,M,0),d.push(.5,.5),m++;const E=m;for(let C=0;C<=s;C++){const G=C/s*l+o,L=Math.cos(G),z=Math.sin(G);I.x=w*z,I.y=g*M,I.z=w*L,f.push(I.x,I.y,I.z),h.push(0,M,0),A.x=L*.5+.5,A.y=z*.5*M+.5,d.push(A.x,A.y),m++}for(let C=0;C<s;C++){const D=R+C,G=E+C;S===!0?u.push(G,G+1,D):u.push(G+1,G,D),x+=3}c.addGroup(p,x,S===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lo extends Ot{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const T=new F,S=new F,R=new F;for(let A=0;A<t.length;A+=3)d(t[A+0],T),d(t[A+1],S),d(t[A+2],R),l(T,S,R,y)}function l(y,T,S,R){const A=R+1,I=[];for(let x=0;x<=A;x++){I[x]=[];const w=y.clone().lerp(S,x/A),M=T.clone().lerp(S,x/A),E=A-x;for(let C=0;C<=E;C++)C===0&&x===A?I[x][C]=w:I[x][C]=w.clone().lerp(M,C/E)}for(let x=0;x<A;x++)for(let w=0;w<2*(A-x)-1;w++){const M=Math.floor(w/2);w%2===0?(h(I[x][M+1]),h(I[x+1][M]),h(I[x][M])):(h(I[x][M+1]),h(I[x+1][M+1]),h(I[x+1][M]))}}function c(y){const T=new F;for(let S=0;S<r.length;S+=3)T.x=r[S+0],T.y=r[S+1],T.z=r[S+2],T.normalize().multiplyScalar(y),r[S+0]=T.x,r[S+1]=T.y,r[S+2]=T.z}function u(){const y=new F;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];const S=g(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;a.push(S,1-R)}m(),f()}function f(){for(let y=0;y<a.length;y+=6){const T=a[y+0],S=a[y+2],R=a[y+4],A=Math.max(T,S,R),I=Math.min(T,S,R);A>.9&&I<.1&&(T<.2&&(a[y+0]+=1),S<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function d(y,T){const S=y*3;T.x=e[S+0],T.y=e[S+1],T.z=e[S+2]}function m(){const y=new F,T=new F,S=new F,R=new F,A=new Le,I=new Le,x=new Le;for(let w=0,M=0;w<r.length;w+=9,M+=6){y.set(r[w+0],r[w+1],r[w+2]),T.set(r[w+3],r[w+4],r[w+5]),S.set(r[w+6],r[w+7],r[w+8]),A.set(a[M+0],a[M+1]),I.set(a[M+2],a[M+3]),x.set(a[M+4],a[M+5]),R.copy(y).add(T).add(S).divideScalar(3);const E=g(R);_(A,M+0,y,E),_(I,M+2,T,E),_(x,M+4,S,E)}}function _(y,T,S,R){R<0&&y.x===1&&(a[T]=y.x-1),S.x===0&&S.z===0&&(a[T]=R/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.vertices,e.indices,e.radius,e.detail)}}class Uo extends Lo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Uo(e.radius,e.detail)}}class Vi extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const y=p*h-a;for(let T=0;T<c;T++){const S=T*f-r;m.push(S,-y,0),_.push(0,0,1),g.push(T/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const T=y+c*p,S=y+c*(p+1),R=y+1+c*(p+1),A=y+1+c*p;d.push(T,S,A),d.push(S,R,A)}this.setIndex(d),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.widthSegments,e.heightSegments)}}function Wi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Ll(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ll(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=Wi(i[t]);for(const s in n)e[s]=n[s]}return e}function Ll(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ru(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Cu={clone:Wi,merge:Ft};var Pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pu,this.fragmentShader=Iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=Ru(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new Le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Du extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ir extends di{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=_o,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lu extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uu extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sr extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Nu extends Sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const la=new et,Ul=new F,Nl=new F;class $c{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ul.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ul),Nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nl),t.updateMatrixWorld(),la.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ds||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(la)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $s=new F,Ks=new Yn,cn=new F;class Kc extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($s,Ks,cn),cn.x===1&&cn.y===1&&cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($s,Ks,cn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose($s,Ks,cn),cn.x===1&&cn.y===1&&cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($s,Ks,cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const kn=new F,Fl=new Le,Ol=new Le;class Xt extends Kc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kn.x,kn.y).multiplyScalar(-e/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-e/kn.z)}getViewSize(e,t){return this.getViewBounds(e,Fl,Ol),t.subVectors(Ol,Fl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Fu extends $c{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}}class Ou extends Sr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class No extends Kc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bu extends $c{constructor(){super(new No(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bl extends Sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Bu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class c_ extends Sr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Di=-90,Li=1;class zu extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xt(Di,Li,e,t);s.layers=this.layers,this.add(s);const r=new Xt(Di,Li,e,t);r.layers=this.layers,this.add(r);const a=new Xt(Di,Li,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Di,Li,e,t);o.layers=this.layers,this.add(o);const l=new Xt(Di,Li,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Di,Li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ku extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zl=new et;class Gu{constructor(e,t,n=0,s=1/0){this.ray=new Io(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zl),this}intersectObject(e,t=!0,n=[]){return ao(e,this,n,t),n.sort(kl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ao(e[s],this,n,t);return n.sort(kl),n}}function kl(i,e){return i.distance-e.distance}function ao(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ao(r[a],e,t,!0)}}const Yo=class Yo{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Yo.prototype.isMatrix2=!0;let Gl=Yo;class h_ extends Tu{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ne(n),s=new Ne(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,d=0,m=-o;h<=t;h++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const _=h===r?n:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new Ot;u.setAttribute("position",new dt(l,3)),u.setAttribute("color",new dt(c,3));const f=new Vc({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Hl(i,e,t,n){const s=Hu(n);switch(t){case Lc:return i*e;case bo:return i*e/s.components*s.byteLength;case yo:return i*e/s.components*s.byteLength;case hi:return i*e*2/s.components*s.byteLength;case Eo:return i*e*2/s.components*s.byteLength;case Uc:return i*e*3/s.components*s.byteLength;case rn:return i*e*4/s.components*s.byteLength;case wo:return i*e*4/s.components*s.byteLength;case js:case er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tr:case nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:case Pa:return Math.max(i,16)*Math.max(e,8)/4;case Aa:case Ca:return Math.max(i,8)*Math.max(e,8)/2;case Ia:case Da:case Ua:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case La:case ar:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ja:case Qa:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*16;case eo:case to:return Math.ceil(i/4)*Math.ceil(e/4)*8;case or:case no:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hu(i){switch(i){case qt:case Cc:return{byteLength:1,components:1};case fs:case Pc:case Pn:return{byteLength:2,components:1};case Mo:case So:return{byteLength:2,components:4};case _n:case vo:case sn:return{byteLength:4,components:1};case Ic:case Dc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vu(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xu=`#ifdef USE_ALPHAHASH
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
#endif`,qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$u=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zu=`#ifdef USE_AOMAP
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
#endif`,Ju=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qu=`#ifdef USE_BATCHING
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
#endif`,ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,id=`#ifdef USE_IRIDESCENCE
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
#endif`,sd=`#ifdef USE_BUMPMAP
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
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ud=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dd=`#define PI 3.141592653589793
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
} // validated`,pd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,md=`vec3 transformedNormal = objectNormal;
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
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Md="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bd=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
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
#endif`,wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Id=`#ifdef USE_GRADIENTMAP
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
}`,Dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gd=`PhysicalMaterial material;
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
#endif`,Hd=`uniform sampler2D dfgLUT;
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
}`,Vd=`
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
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qd=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Yd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$d=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e0=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
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
#endif`,o0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,d0=`#ifdef USE_NORMALMAP
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
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C0=`float getShadowMask() {
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
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,D0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,U0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,Q0=`#define DISTANCE
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
}`,j0=`#define DISTANCE
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`uniform float scale;
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
}`,ip=`uniform vec3 diffuse;
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
}`,sp=`#include <common>
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
}`,rp=`uniform vec3 diffuse;
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
}`,ap=`#define LAMBERT
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
}`,op=`#define LAMBERT
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
}`,lp=`#define MATCAP
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
}`,cp=`#define MATCAP
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
}`,hp=`#define NORMAL
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
}`,fp=`#define NORMAL
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
}`,up=`#define PHONG
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
}`,dp=`#define PHONG
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
}`,pp=`#define STANDARD
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
}`,mp=`#define STANDARD
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
}`,gp=`#define TOON
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
}`,_p=`#define TOON
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
}`,xp=`uniform float size;
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
}`,vp=`uniform vec3 diffuse;
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
}`,Mp=`#include <common>
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
}`,Sp=`uniform vec3 color;
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
}`,bp=`uniform float rotation;
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
}`,yp=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Wu,alphahash_pars_fragment:Xu,alphamap_fragment:qu,alphamap_pars_fragment:Yu,alphatest_fragment:$u,alphatest_pars_fragment:Ku,aomap_fragment:Zu,aomap_pars_fragment:Ju,batching_pars_vertex:Qu,batching_vertex:ju,begin_vertex:ed,beginnormal_vertex:td,bsdfs:nd,iridescence_fragment:id,bumpmap_pars_fragment:sd,clipping_planes_fragment:rd,clipping_planes_pars_fragment:ad,clipping_planes_pars_vertex:od,clipping_planes_vertex:ld,color_fragment:cd,color_pars_fragment:hd,color_pars_vertex:fd,color_vertex:ud,common:dd,cube_uv_reflection_fragment:pd,defaultnormal_vertex:md,displacementmap_pars_vertex:gd,displacementmap_vertex:_d,emissivemap_fragment:xd,emissivemap_pars_fragment:vd,colorspace_fragment:Md,colorspace_pars_fragment:Sd,envmap_fragment:bd,envmap_common_pars_fragment:yd,envmap_pars_fragment:Ed,envmap_pars_vertex:wd,envmap_physical_pars_fragment:Fd,envmap_vertex:Td,fog_vertex:Ad,fog_pars_vertex:Rd,fog_fragment:Cd,fog_pars_fragment:Pd,gradientmap_pars_fragment:Id,lightmap_pars_fragment:Dd,lights_lambert_fragment:Ld,lights_lambert_pars_fragment:Ud,lights_pars_begin:Nd,lights_toon_fragment:Od,lights_toon_pars_fragment:Bd,lights_phong_fragment:zd,lights_phong_pars_fragment:kd,lights_physical_fragment:Gd,lights_physical_pars_fragment:Hd,lights_fragment_begin:Vd,lights_fragment_maps:Wd,lights_fragment_end:Xd,lightprobes_pars_fragment:qd,logdepthbuf_fragment:Yd,logdepthbuf_pars_fragment:$d,logdepthbuf_pars_vertex:Kd,logdepthbuf_vertex:Zd,map_fragment:Jd,map_pars_fragment:Qd,map_particle_fragment:jd,map_particle_pars_fragment:e0,metalnessmap_fragment:t0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:a0,morphtarget_vertex:o0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:h0,normal_pars_vertex:f0,normal_vertex:u0,normalmap_pars_fragment:d0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:_0,opaque_fragment:x0,packing:v0,premultiplied_alpha_fragment:M0,project_vertex:S0,dithering_fragment:b0,dithering_pars_fragment:y0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:w0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:A0,shadowmap_vertex:R0,shadowmask_pars_fragment:C0,skinbase_vertex:P0,skinning_pars_vertex:I0,skinning_vertex:D0,skinnormal_vertex:L0,specularmap_fragment:U0,specularmap_pars_fragment:N0,tonemapping_fragment:F0,tonemapping_pars_fragment:O0,transmission_fragment:B0,transmission_pars_fragment:z0,uv_pars_fragment:k0,uv_pars_vertex:G0,uv_vertex:H0,worldpos_vertex:V0,background_vert:W0,background_frag:X0,backgroundCube_vert:q0,backgroundCube_frag:Y0,cube_vert:$0,cube_frag:K0,depth_vert:Z0,depth_frag:J0,distance_vert:Q0,distance_frag:j0,equirect_vert:ep,equirect_frag:tp,linedashed_vert:np,linedashed_frag:ip,meshbasic_vert:sp,meshbasic_frag:rp,meshlambert_vert:ap,meshlambert_frag:op,meshmatcap_vert:lp,meshmatcap_frag:cp,meshnormal_vert:hp,meshnormal_frag:fp,meshphong_vert:up,meshphong_frag:dp,meshphysical_vert:pp,meshphysical_frag:mp,meshtoon_vert:gp,meshtoon_frag:_p,points_vert:xp,points_frag:vp,shadow_vert:Mp,shadow_frag:Sp,sprite_vert:bp,sprite_frag:yp},pe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},un={basic:{uniforms:Ft([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ft([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ft([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ft([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ft([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ft([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ft([pe.points,pe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ft([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ft([pe.common,pe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ft([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ft([pe.sprite,pe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Ft([pe.common,pe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Ft([pe.lights,pe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};un.physical={uniforms:Ft([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Zs={r:0,b:0,g:0},Ep=new et,Jc=new Ue;Jc.set(-1,0,0,0,1,0,0,0,1);function wp(i,e,t,n,s,r){const a=new Ne(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const S=y.backgroundBlurriness>0;T=e.get(T,S)}return T}function m(y){let T=!1;const S=d(y);S===null?g(a,o):S&&S.isColor&&(g(S,1),T=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,T){const S=d(T);S&&(S.isCubeTexture||S.mapping===Mr)?(c===void 0&&(c=new je(new $i(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Wi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jc),c.material.toneMapped=Xe.getTransfer(S.colorSpace)!==Qe,(u!==S||f!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new je(new Vi(2,2),new xn({name:"BackgroundMaterial",uniforms:Wi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(S.colorSpace)!==Qe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,T){y.getRGB(Zs,Yc(i)),t.buffers.color.setClear(Zs.r,Zs.g,Zs.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:m,addToRenderList:_,dispose:p}}function Tp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(E,C,D,G,L){let z=!1;const B=f(E,G,D,C);r!==B&&(r=B,c(r.object)),z=d(E,G,D,L),z&&m(E,G,D,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,S(E,C,D,G),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function f(E,C,D,G){const L=G.wireframe===!0;let z=n[C.id];z===void 0&&(z={},n[C.id]=z);const B=E.isInstancedMesh===!0?E.id:0;let Y=z[B];Y===void 0&&(Y={},z[B]=Y);let Z=Y[D.id];Z===void 0&&(Z={},Y[D.id]=Z);let se=Z[L];return se===void 0&&(se=h(l()),Z[L]=se),se}function h(E){const C=[],D=[],G=[];for(let L=0;L<t;L++)C[L]=0,D[L]=0,G[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:G,object:E,attributes:{},index:null}}function d(E,C,D,G){const L=r.attributes,z=C.attributes;let B=0;const Y=D.getAttributes();for(const Z in Y)if(Y[Z].location>=0){const ne=L[Z];let oe=z[Z];if(oe===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),ne===void 0||ne.attribute!==oe||oe&&ne.data!==oe.data)return!0;B++}return r.attributesNum!==B||r.index!==G}function m(E,C,D,G){const L={},z=C.attributes;let B=0;const Y=D.getAttributes();for(const Z in Y)if(Y[Z].location>=0){let ne=z[Z];ne===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(ne=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(ne=E.instanceColor));const oe={};oe.attribute=ne,ne&&ne.data&&(oe.data=ne.data),L[Z]=oe,B++}r.attributes=L,r.attributesNum=B,r.index=G}function _(){const E=r.newAttributes;for(let C=0,D=E.length;C<D;C++)E[C]=0}function g(E){p(E,0)}function p(E,C){const D=r.newAttributes,G=r.enabledAttributes,L=r.attributeDivisors;D[E]=1,G[E]===0&&(i.enableVertexAttribArray(E),G[E]=1),L[E]!==C&&(i.vertexAttribDivisor(E,C),L[E]=C)}function y(){const E=r.newAttributes,C=r.enabledAttributes;for(let D=0,G=C.length;D<G;D++)C[D]!==E[D]&&(i.disableVertexAttribArray(D),C[D]=0)}function T(E,C,D,G,L,z,B){B===!0?i.vertexAttribIPointer(E,C,D,L,z):i.vertexAttribPointer(E,C,D,G,L,z)}function S(E,C,D,G){_();const L=G.attributes,z=D.getAttributes(),B=C.defaultAttributeValues;for(const Y in z){const Z=z[Y];if(Z.location>=0){let se=L[Y];if(se===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(se=E.instanceColor)),se!==void 0){const ne=se.normalized,oe=se.itemSize,De=e.get(se);if(De===void 0)continue;const Ze=De.buffer,Ge=De.type,q=De.bytesPerElement,ie=Ge===i.INT||Ge===i.UNSIGNED_INT||se.gpuType===vo;if(se.isInterleavedBufferAttribute){const ee=se.data,ae=ee.stride,Se=se.offset;if(ee.isInstancedInterleavedBuffer){for(let be=0;be<Z.locationSize;be++)p(Z.location+be,ee.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let be=0;be<Z.locationSize;be++)g(Z.location+be);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let be=0;be<Z.locationSize;be++)T(Z.location+be,oe/Z.locationSize,Ge,ne,ae*q,(Se+oe/Z.locationSize*be)*q,ie)}else{if(se.isInstancedBufferAttribute){for(let ee=0;ee<Z.locationSize;ee++)p(Z.location+ee,se.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ee=0;ee<Z.locationSize;ee++)g(Z.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let ee=0;ee<Z.locationSize;ee++)T(Z.location+ee,oe/Z.locationSize,Ge,ne,oe*q,oe/Z.locationSize*ee*q,ie)}}else if(B!==void 0){const ne=B[Y];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(Z.location,ne);break;case 3:i.vertexAttrib3fv(Z.location,ne);break;case 4:i.vertexAttrib4fv(Z.location,ne);break;default:i.vertexAttrib1fv(Z.location,ne)}}}}y()}function R(){w();for(const E in n){const C=n[E];for(const D in C){const G=C[D];for(const L in G){const z=G[L];for(const B in z)u(z[B].object),delete z[B];delete G[L]}}delete n[E]}}function A(E){if(n[E.id]===void 0)return;const C=n[E.id];for(const D in C){const G=C[D];for(const L in G){const z=G[L];for(const B in z)u(z[B].object),delete z[B];delete G[L]}}delete n[E.id]}function I(E){for(const C in n){const D=n[C];for(const G in D){const L=D[G];if(L[E.id]===void 0)continue;const z=L[E.id];for(const B in z)u(z[B].object),delete z[B];delete L[E.id]}}}function x(E){for(const C in n){const D=n[C],G=E.isInstancedMesh===!0?E.id:0,L=D[G];if(L!==void 0){for(const z in L){const B=L[z];for(const Y in B)u(B[Y].object),delete B[Y];delete L[z]}delete D[G],Object.keys(D).length===0&&delete n[C]}}}function w(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function Ap(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Rp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==rn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const x=I===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==qt&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==sn&&!x)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:S,maxSamples:R,samples:A}}function Cp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Gn,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{const y=r?0:n,T=y*4;let S=p.clippingState||null;l.value=S,S=u(m,h,T,d);for(let R=0;R!==T;++R)S[R]=t[R];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,S=d;T!==_;++T,S+=4)a.copy(f[T]).applyMatrix4(y,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const Wn=4,Vl=[.125,.215,.35,.446,.526,.582],si=20,Pp=256,as=new No,Wl=new Ne;let ca=null,ha=0,fa=0,ua=!1;const Ip=new F;class Xl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Ip}=r;ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ca,ha,fa),this._renderer.xr.enabled=ua,e.scissorTest=!1,Ui(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Pn,format:rn,colorSpace:lr,depthBuffer:!1},s=ql(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Dp(r)),this._blurMaterial=Up(r,e,t),this._ggxMaterial=Lp(r,e,t)}return s}_compileMaterial(e){const t=new je(new Ot,e);this._renderer.compile(t,as)}_sceneToCubeUV(e,t,n,s,r){const l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Wl),f.toneMapping=mn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new je(new $i,new ii({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(Wl),p=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):S===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const R=this._cubeSize;Ui(s,S*R,T>2?R:0,R,R),f.setRenderTarget(s),p&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ci||e.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ui(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,as)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-Wn?n-m+Wn:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Ui(r,g,p,3*_,2*_),s.setRenderTarget(r),s.render(o,as),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Ui(e,g,p,3*_,2*_),s.setRenderTarget(e),s.render(o,as)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*si-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):si;g>si&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${si}`);const p=[];let y=0;for(let I=0;I<si;++I){const x=I/_,w=Math.exp(-x*x/2);p.push(w),I===0?y+=w:I<g&&(y+=2*w)}for(let I=0;I<p.length;I++)p[I]=p[I]/y;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:T}=this;h.dTheta.value=m,h.mipInt.value=T-n;const S=this._sizeLods[s],R=3*S*(s>T-Wn?s-T+Wn:0),A=4*(this._cubeSize-S);Ui(t,R,A,3*S,2*S),l.setRenderTarget(t),l.render(f,as)}}function Dp(i){const e=[],t=[],n=[];let s=i;const r=i-Wn+1+Vl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Wn?l=Vl[a-i+Wn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,_=3,g=2,p=1,y=new Float32Array(_*m*d),T=new Float32Array(g*m*d),S=new Float32Array(p*m*d);for(let A=0;A<d;A++){const I=A%3*2/3-1,x=A>2?0:-1,w=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];y.set(w,_*m*A),T.set(h,g*m*A);const M=[A,A,A,A,A,A];S.set(M,p*m*A)}const R=new Ot;R.setAttribute("position",new jt(y,_)),R.setAttribute("uv",new jt(T,g)),R.setAttribute("faceIndex",new jt(S,p)),n.push(new je(R,null)),s>Wn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ql(i,e,t){const n=new gn(i,e,t);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ui(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Lp(i,e,t){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:br(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Up(i,e,t){const n=new Float32Array(si),s=new F(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:br(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Yl(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:br(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function $l(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function br(){return`

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
	`}class Qc extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $i(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Rn});r.uniforms.tEquirect.value=t;const a=new je(s,r),o=t.minFilter;return t.minFilter===ri&&(t.minFilter=Lt),new zu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Np(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Lr||d===Ur)if(e.has(h)){const m=e.get(h).texture;return o(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const _=new Qc(m.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,m=d===Lr||d===Ur,_=d===ci||d===Gi;if(m||_){let g=t.get(h);const p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Xl(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return m&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Xl(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,d){return d===Lr?h.mapping=ci:d===Ur&&(h.mapping=Gi),h}function l(h){let d=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&d++;return d===m}function c(h){const d=h.target;d.removeEventListener("dispose",c);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Fp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Oi("WebGLRenderer: "+n+" extension not supported."),s}}}function Op(i,e,t,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,m=f.attributes.position;let _=0;if(m===void 0)return;if(d!==null){const y=d.array;_=d.version;for(let T=0,S=y.length;T<S;T+=3){const R=y[T+0],A=y[T+1],I=y[T+2];h.push(R,A,A,I,I,R)}}else{const y=m.array;_=m.version;for(let T=0,S=y.length/3-1;T<S;T+=3){const R=T+0,A=T+1,I=T+2;h.push(R,A,A,I,I,R)}}const g=new(m.count>=65535?zc:Bc)(h,1);g.version=_;const p=r.get(f);p&&e.remove(p),r.set(f,g)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Bp(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function zp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function kp(i,e,t){const n=new WeakMap,s=new ht;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let w=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;d===!0&&(T=1),m===!0&&(T=2),_===!0&&(T=3);let S=o.attributes.position.count*T,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*R*4*f),I=new Fc(A,S,R,f);I.type=sn,I.needsUpdate=!0;const x=T*4;for(let M=0;M<f;M++){const E=g[M],C=p[M],D=y[M],G=S*R*4*M;for(let L=0;L<E.count;L++){const z=L*x;d===!0&&(s.fromBufferAttribute(E,L),A[G+z+0]=s.x,A[G+z+1]=s.y,A[G+z+2]=s.z,A[G+z+3]=0),m===!0&&(s.fromBufferAttribute(C,L),A[G+z+4]=s.x,A[G+z+5]=s.y,A[G+z+6]=s.z,A[G+z+7]=0),_===!0&&(s.fromBufferAttribute(D,L),A[G+z+8]=s.x,A[G+z+9]=s.y,A[G+z+10]=s.z,A[G+z+11]=D.itemSize===4?s.w:1)}}h={count:f,texture:I,size:new Le(S,R)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Gp(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Hp={[bc]:"LINEAR_TONE_MAPPING",[yc]:"REINHARD_TONE_MAPPING",[Ec]:"CINEON_TONE_MAPPING",[xo]:"ACES_FILMIC_TONE_MAPPING",[Tc]:"AGX_TONE_MAPPING",[Ac]:"NEUTRAL_TONE_MAPPING",[wc]:"CUSTOM_TONE_MAPPING"};function Vp(i,e,t,n,s,r){const a=new gn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Hi(e,t):void 0}),o=new gn(e,t,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),l=new Ot;l.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new dt([0,2,0,0,2,0],2));const c=new Du({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new je(l,c),f=new No(-1,1,1,-1,0,1);let h=null,d=null,m=!1,_,g=null,p=[],y=!1;this.setSize=function(T,S){a.setSize(T,S),o.setSize(T,S);for(let R=0;R<p.length;R++){const A=p[R];A.setSize&&A.setSize(T,S)}},this.setEffects=function(T){p=T,y=p.length>0&&p[0].isRenderPass===!0;const S=a.width,R=a.height;for(let A=0;A<p.length;A++){const I=p[A];I.setSize&&I.setSize(S,R)}},this.begin=function(T,S){if(m||T.toneMapping===mn&&p.length===0)return!1;if(g=S,S!==null){const R=S.width,A=S.height;(a.width!==R||a.height!==A)&&this.setSize(R,A)}return y===!1&&T.setRenderTarget(a),_=T.toneMapping,T.toneMapping=mn,!0},this.hasRenderPass=function(){return y},this.end=function(T,S){T.toneMapping=_,m=!0;let R=a,A=o;for(let I=0;I<p.length;I++){const x=p[I];if(x.enabled!==!1&&(x.render(T,A,R,S),x.needsSwap!==!1)){const w=R;R=A,A=w}}if(h!==T.outputColorSpace||d!==T.toneMapping){h=T.outputColorSpace,d=T.toneMapping,c.defines={},Xe.getTransfer(h)===Qe&&(c.defines.SRGB_TRANSFER="");const I=Hp[d];I&&(c.defines[I]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=R.texture,T.setRenderTarget(g),T.render(u,f),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const jc=new Ut,oo=new Hi(1,1),eh=new Fc,th=new su,nh=new Wc,Kl=[],Zl=[],Jl=new Float32Array(16),Ql=new Float32Array(9),jl=new Float32Array(4);function Ki(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Kl[s];if(r===void 0&&(r=new Float32Array(s),Kl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yr(i,e){let t=Zl[e];t===void 0&&(t=new Int32Array(e),Zl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function $p(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;jl.set(n),i.uniformMatrix2fv(this.addr,!1,jl),bt(t,n)}}function Kp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;Ql.set(n),i.uniformMatrix3fv(this.addr,!1,Ql),bt(t,n)}}function Zp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;Jl.set(n),i.uniformMatrix4fv(this.addr,!1,Jl),bt(t,n)}}function Jp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function rm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(oo.compareFunction=t.isReversedDepthBuffer()?Ao:To,r=oo):r=jc,t.setTexture2D(e||r,s)}function am(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||th,s)}function om(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||nh,s)}function lm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||eh,s)}function cm(i){switch(i){case 5126:return Wp;case 35664:return Xp;case 35665:return qp;case 35666:return Yp;case 35674:return $p;case 35675:return Kp;case 35676:return Zp;case 5124:case 35670:return Jp;case 35667:case 35671:return Qp;case 35668:case 35672:return jp;case 35669:case 35673:return em;case 5125:return tm;case 36294:return nm;case 36295:return im;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return lm}}function hm(i,e){i.uniform1fv(this.addr,e)}function fm(i,e){const t=Ki(e,this.size,2);i.uniform2fv(this.addr,t)}function um(i,e){const t=Ki(e,this.size,3);i.uniform3fv(this.addr,t)}function dm(i,e){const t=Ki(e,this.size,4);i.uniform4fv(this.addr,t)}function pm(i,e){const t=Ki(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mm(i,e){const t=Ki(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gm(i,e){const t=Ki(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _m(i,e){i.uniform1iv(this.addr,e)}function xm(i,e){i.uniform2iv(this.addr,e)}function vm(i,e){i.uniform3iv(this.addr,e)}function Mm(i,e){i.uniform4iv(this.addr,e)}function Sm(i,e){i.uniform1uiv(this.addr,e)}function bm(i,e){i.uniform2uiv(this.addr,e)}function ym(i,e){i.uniform3uiv(this.addr,e)}function Em(i,e){i.uniform4uiv(this.addr,e)}function wm(i,e,t){const n=this.cache,s=e.length,r=yr(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=oo:a=jc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Tm(i,e,t){const n=this.cache,s=e.length,r=yr(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||th,r[a])}function Am(i,e,t){const n=this.cache,s=e.length,r=yr(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||nh,r[a])}function Rm(i,e,t){const n=this.cache,s=e.length,r=yr(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||eh,r[a])}function Cm(i){switch(i){case 5126:return hm;case 35664:return fm;case 35665:return um;case 35666:return dm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return _m;case 35667:case 35671:return xm;case 35668:case 35672:return vm;case 35669:case 35673:return Mm;case 5125:return Sm;case 36294:return bm;case 36295:return ym;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Rm}}class Pm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cm(t.type)}}class Im{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cm(t.type)}}class Dm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function ec(i,e){i.seq.push(e),i.map[e.id]=e}function Lm(i,e,t){const n=i.name,s=n.length;for(da.lastIndex=0;;){const r=da.exec(n),a=da.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ec(t,c===void 0?new Pm(o,i,e):new Im(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Dm(o),ec(t,f)),t=f}}}class sr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Lm(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function tc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Um=37297;let Nm=0;function Fm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const nc=new Ue;function Om(i){Xe._getMatrix(nc,Xe.workingColorSpace,i);const e=`mat3( ${nc.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case cr:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ic(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Fm(i.getShaderSource(e),o)}else return r}function Bm(i,e){const t=Om(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zm={[bc]:"Linear",[yc]:"Reinhard",[Ec]:"Cineon",[xo]:"ACESFilmic",[Tc]:"AgX",[Ac]:"Neutral",[wc]:"Custom"};function km(i,e){const t=zm[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Js=new F;function Gm(){Xe.getLuminanceCoefficients(Js);const i=Js.x.toFixed(4),e=Js.y.toFixed(4),t=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function Vm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function cs(i){return i!==""}function sc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(i){return i.replace(Xm,Ym)}const qm=new Map;function Ym(i,e){let t=ze[e];if(t===void 0){const n=qm.get(e);if(n!==void 0)t=ze[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return lo(t)}const $m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(i){return i.replace($m,Km)}function Km(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function oc(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Zm={[Qs]:"SHADOWMAP_TYPE_PCF",[ls]:"SHADOWMAP_TYPE_VSM"};function Jm(i){return Zm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qm={[ci]:"ENVMAP_TYPE_CUBE",[Gi]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE_UV"};function jm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Qm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const eg={[Gi]:"ENVMAP_MODE_REFRACTION"};function tg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":eg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ng={[_o]:"ENVMAP_BLENDING_MULTIPLY",[Of]:"ENVMAP_BLENDING_MIX",[Bf]:"ENVMAP_BLENDING_ADD"};function ig(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ng[i.combine]||"ENVMAP_BLENDING_NONE"}function sg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Jm(t),c=jm(t),u=tg(t),f=ig(t),h=sg(t),d=Hm(t),m=Vm(r),_=s.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(cs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(cs).join(`
`),p.length>0&&(p+=`
`)):(g=[oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),p=[oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?ze.tonemapping_pars_fragment:"",t.toneMapping!==mn?km("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Bm("linearToOutputTexel",t.outputColorSpace),Gm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cs).join(`
`)),a=lo(a),a=sc(a,t),a=rc(a,t),o=lo(o),o=sc(o,t),o=rc(o,t),a=ac(a),o=ac(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=y+g+a,S=y+p+o,R=tc(s,s.VERTEX_SHADER,T),A=tc(s,s.FRAGMENT_SHADER,S);s.attachShader(_,R),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(E){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(_)||"",D=s.getShaderInfoLog(R)||"",G=s.getShaderInfoLog(A)||"",L=C.trim(),z=D.trim(),B=G.trim();let Y=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,A);else{const se=ic(s,R,"vertex"),ne=ic(s,A,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+se+`
`+ne)}else L!==""?Ie("WebGLProgram: Program Info Log:",L):(z===""||B==="")&&(Z=!1);Z&&(E.diagnostics={runnable:Y,programLog:L,vertexShader:{log:z,prefix:g},fragmentShader:{log:B,prefix:p}})}s.deleteShader(R),s.deleteShader(A),x=new sr(s,_),w=Wm(s,_)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Um)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let ag=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lg(e),t.set(e,n)),n}}class lg{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}}function cg(i){return i===hi||i===ar||i===or}function hg(i,e,t,n,s,r){const a=new Co,o=new og,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,w,M,E,C,D){const G=E.fog,L=C.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?E.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||z,B),Z=Y&&Y.mapping===Mr?Y.image.height:null,se=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ne=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,oe=ne!==void 0?ne.length:0;let De=0;L.morphAttributes.position!==void 0&&(De=1),L.morphAttributes.normal!==void 0&&(De=2),L.morphAttributes.color!==void 0&&(De=3);let Ze,Ge,q,ie;if(se){const ye=un[se];Ze=ye.vertexShader,Ge=ye.fragmentShader}else{Ze=x.vertexShader,Ge=x.fragmentShader;const ye=o.getVertexShaderStage(x),mt=o.getFragmentShaderStage(x);o.update(x,ye,mt),q=ye.id,ie=mt.id}const ee=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),Se=C.isInstancedMesh===!0,be=C.isBatchedMesh===!0,Ye=!!x.map,Be=!!x.matcap,Ke=!!Y,He=!!x.aoMap,Ve=!!x.lightMap,tt=!!x.bumpMap&&x.wireframe===!1,pt=!!x.normalMap,ct=!!x.displacementMap,ft=!!x.emissiveMap,nt=!!x.metalnessMap,ut=!!x.roughnessMap,U=x.anisotropy>0,Bt=x.clearcoat>0,Je=x.dispersion>0,P=x.iridescence>0,v=x.sheen>0,k=x.transmission>0,W=U&&!!x.anisotropyMap,$=Bt&&!!x.clearcoatMap,re=Bt&&!!x.clearcoatNormalMap,ce=Bt&&!!x.clearcoatRoughnessMap,K=P&&!!x.iridescenceMap,j=P&&!!x.iridescenceThicknessMap,he=v&&!!x.sheenColorMap,Te=v&&!!x.sheenRoughnessMap,de=!!x.specularMap,fe=!!x.specularColorMap,Ce=!!x.specularIntensityMap,Pe=k&&!!x.transmissionMap,Fe=k&&!!x.thicknessMap,N=!!x.gradientMap,le=!!x.alphaMap,J=x.alphaTest>0,ue=!!x.alphaHash,_e=!!x.extensions;let te=mn;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(te=i.toneMapping);const we={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:Ze,fragmentShader:Ge,defines:x.defines,customVertexShaderID:q,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:be,batchingColor:be&&C._colorsTexture!==null,instancing:Se,instancingColor:Se&&C.instanceColor!==null,instancingMorph:Se&&C.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ye,matcap:Be,envMap:Ke,envMapMode:Ke&&Y.mapping,envMapCubeUVHeight:Z,aoMap:He,lightMap:Ve,bumpMap:tt,normalMap:pt,displacementMap:ct,emissiveMap:ft,normalMapObjectSpace:pt&&x.normalMapType===Gf,normalMapTangentSpace:pt&&x.normalMapType===io,packedNormalMap:pt&&x.normalMapType===io&&cg(x.normalMap.format),metalnessMap:nt,roughnessMap:ut,anisotropy:U,anisotropyMap:W,clearcoat:Bt,clearcoatMap:$,clearcoatNormalMap:re,clearcoatRoughnessMap:ce,dispersion:Je,iridescence:P,iridescenceMap:K,iridescenceThicknessMap:j,sheen:v,sheenColorMap:he,sheenRoughnessMap:Te,specularMap:de,specularColorMap:fe,specularIntensityMap:Ce,transmission:k,transmissionMap:Pe,thicknessMap:Fe,gradientMap:N,opaque:x.transparent===!1&&x.blending===Fi&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:J,alphaHash:ue,combine:x.combine,mapUv:Ye&&m(x.map.channel),aoMapUv:He&&m(x.aoMap.channel),lightMapUv:Ve&&m(x.lightMap.channel),bumpMapUv:tt&&m(x.bumpMap.channel),normalMapUv:pt&&m(x.normalMap.channel),displacementMapUv:ct&&m(x.displacementMap.channel),emissiveMapUv:ft&&m(x.emissiveMap.channel),metalnessMapUv:nt&&m(x.metalnessMap.channel),roughnessMapUv:ut&&m(x.roughnessMap.channel),anisotropyMapUv:W&&m(x.anisotropyMap.channel),clearcoatMapUv:$&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:j&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(x.sheenRoughnessMap.channel),specularMapUv:de&&m(x.specularMap.channel),specularColorMapUv:fe&&m(x.specularColorMap.channel),specularIntensityMapUv:Ce&&m(x.specularIntensityMap.channel),transmissionMapUv:Pe&&m(x.transmissionMap.channel),thicknessMapUv:Fe&&m(x.thicknessMap.channel),alphaMapUv:le&&m(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(pt||U),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!L.attributes.uv&&(Ye||le),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ae,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:De,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&M.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,decodeVideoTexture:Ye&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===Qe,decodeVideoTextureEmissive:ft&&x.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(x.emissiveMap.colorSpace)===Qe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Tn,flipSided:x.side===zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_e&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&x.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function g(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const M in x.defines)w.push(M),w.push(x.defines[M]);return x.isRawShaderMaterial===!1&&(p(w,x),y(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function T(x){const w=d[x.type];let M;if(w){const E=un[w];M=Cu.clone(E.uniforms)}else M=x.uniforms;return M}function S(x,w){let M=u.get(w);return M!==void 0?++M.usedTimes:(M=new rg(i,w,x,s),c.push(M),u.set(w,M)),M}function R(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function I(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:T,acquireProgram:S,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:I}}function fg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ug(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function lc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,m,_,g,p){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:d,material:m,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},i[e]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=m,y.materialVariant=a(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=g,y.group=p),e++,y}function l(h,d,m,_,g,p){const y=o(h,d,m,_,g,p);m.transmission>0?n.push(y):m.transparent===!0?s.push(y):t.push(y)}function c(h,d,m,_,g,p){const y=o(h,d,m,_,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,d,m){t.length>1&&t.sort(h||ug),n.length>1&&n.sort(d||lc),s.length>1&&s.sort(d||lc),m&&(t.reverse(),n.reverse(),s.reverse())}function f(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function dg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new cc,i.set(n,[a])):s>=r.length?(a=new cc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function pg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ne};break;case"SpotLight":t={position:new F,direction:new F,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function mg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gg=0;function _g(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xg(i){const e=new pg,t=mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new et,a=new et;function o(c){let u=0,f=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,y=0,T=0,S=0,R=0,A=0,I=0;c.sort(_g);for(let w=0,M=c.length;w<M;w++){const E=c[w],C=E.color,D=E.intensity,G=E.distance;let L=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===hi?L=E.shadow.map.texture:L=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)u+=C.r*D,f+=C.g*D,h+=C.b*D;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],D);I++}else if(E.isDirectionalLight){const z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const B=E.shadow,Y=t.get(E);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=L,n.directionalShadowMatrix[d]=E.shadow.matrix,y++}n.directional[d]=z,d++}else if(E.isSpotLight){const z=e.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(C).multiplyScalar(D),z.distance=G,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[_]=z;const B=E.shadow;if(E.map&&(n.spotLightMap[R]=E.map,R++,B.updateMatrices(E),E.castShadow&&A++),n.spotLightMatrix[_]=B.matrix,E.castShadow){const Y=t.get(E);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=L,S++}_++}else if(E.isRectAreaLight){const z=e.get(E);z.color.copy(C).multiplyScalar(D),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[g]=z,g++}else if(E.isPointLight){const z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){const B=E.shadow,Y=t.get(E);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,Y.shadowCameraNear=B.camera.near,Y.shadowCameraFar=B.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=L,n.pointShadowMatrix[m]=E.shadow.matrix,T++}n.point[m]=z,m++}else if(E.isHemisphereLight){const z=e.get(E);z.skyColor.copy(E.color).multiplyScalar(D),z.groundColor.copy(E.groundColor).multiplyScalar(D),n.hemi[p]=z,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==d||x.pointLength!==m||x.spotLength!==_||x.rectAreaLength!==g||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==T||x.numSpotShadows!==S||x.numSpotMaps!==R||x.numLightProbes!==I)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,x.directionalLength=d,x.pointLength=m,x.spotLength=_,x.rectAreaLength=g,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=T,x.numSpotShadows=S,x.numSpotMaps=R,x.numLightProbes=I,n.version=gg++)}function l(c,u){let f=0,h=0,d=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const T=c[p];if(T.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(T.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(T.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(g),a.identity(),r.copy(T.matrixWorld),r.premultiply(g),a.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(T.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(g),h++}else if(T.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function hc(i){const e=new xg(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function vg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new hc(i),e.set(s,[o])):r>=a.length?(o=new hc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
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
}`,bg=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],yg=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],fc=new et,os=new F,pa=new F;function Eg(i,e,t){let n=new Do;const s=new Le,r=new Le,a=new ht,o=new Lu,l=new Uu,c={},u=t.maxTextureSize,f={[qn]:zt,[zt]:qn,[Tn]:Tn},h=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Mg,fragmentShader:Sg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ot;m.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new je(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qs;let p=this.type;this.render=function(A,I,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===xf&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qs);const w=i.getRenderTarget(),M=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Rn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const D=p!==this.type;D&&I.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(L=>L.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,L=A.length;G<L;G++){const z=A[G],B=z.shadow;if(B===void 0){Ie("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const Y=B.getFrameExtents();s.multiply(Y),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,B.mapSize.y=r.y));const Z=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Z,B.map===null||D===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ls){if(z.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new gn(s.x,s.y,{format:hi,type:Pn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new Hi(s.x,s.y,sn),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=In,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rt,B.map.depthTexture.magFilter=Rt}else z.isPointLight?(B.map=new Qc(s.x),B.map.depthTexture=new Au(s.x,_n)):(B.map=new gn(s.x,s.y),B.map.depthTexture=new Hi(s.x,s.y,_n)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=In,this.type===Qs?(B.map.depthTexture.compareFunction=Z?Ao:To,B.map.depthTexture.minFilter=Lt,B.map.depthTexture.magFilter=Lt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rt,B.map.depthTexture.magFilter=Rt);B.camera.updateProjectionMatrix()}const se=B.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<se;ne++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(B.map),i.clear());const oe=B.getViewport(ne);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),C.viewport(a)}if(z.isPointLight){const oe=B.camera,De=B.matrix,Ze=z.distance||oe.far;Ze!==oe.far&&(oe.far=Ze,oe.updateProjectionMatrix()),os.setFromMatrixPosition(z.matrixWorld),oe.position.copy(os),pa.copy(oe.position),pa.add(bg[ne]),oe.up.copy(yg[ne]),oe.lookAt(pa),oe.updateMatrixWorld(),De.makeTranslation(-os.x,-os.y,-os.z),fc.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),B._frustum.setFromProjectionMatrix(fc,oe.coordinateSystem,oe.reversedDepth)}else B.updateMatrices(z);n=B.getFrustum(),S(I,x,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===ls&&y(B,x),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,M,E)};function y(A,I){const x=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new gn(s.x,s.y,{format:hi,type:Pn})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,x,h,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,x,d,_,null)}function T(A,I,x,w){let M=null;const E=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)M=E;else if(M=x.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const C=M.uuid,D=I.uuid;let G=c[C];G===void 0&&(G={},c[C]=G);let L=G[D];L===void 0&&(L=M.clone(),G[D]=L,I.addEventListener("dispose",R)),M=L}if(M.visible=I.visible,M.wireframe=I.wireframe,w===ls?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:f[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,x.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const C=i.properties.get(M);C.light=x}return M}function S(A,I,x,w,M){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ls)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const D=e.update(A),G=A.material;if(Array.isArray(G)){const L=D.groups;for(let z=0,B=L.length;z<B;z++){const Y=L[z],Z=G[Y.materialIndex];if(Z&&Z.visible){const se=T(A,Z,w,M);A.onBeforeShadow(i,A,I,x,D,se,Y),i.renderBufferDirect(x,null,D,se,A,Y),A.onAfterShadow(i,A,I,x,D,se,Y)}}}else if(G.visible){const L=T(A,G,w,M);A.onBeforeShadow(i,A,I,x,D,L,null),i.renderBufferDirect(x,null,D,L,A,null),A.onAfterShadow(i,A,I,x,D,L,null)}}const C=A.children;for(let D=0,G=C.length;D<G;D++)S(C[D],I,x,w,M)}function R(A){A.target.removeEventListener("dispose",R);for(const x in c){const w=c[x],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function wg(i,e){function t(){let N=!1;const le=new ht;let J=null;const ue=new ht(0,0,0,0);return{setMask:function(_e){J!==_e&&!N&&(i.colorMask(_e,_e,_e,_e),J=_e)},setLocked:function(_e){N=_e},setClear:function(_e,te,we,ye,mt){mt===!0&&(_e*=ye,te*=ye,we*=ye),le.set(_e,te,we,ye),ue.equals(le)===!1&&(i.clearColor(_e,te,we,ye),ue.copy(le))},reset:function(){N=!1,J=null,ue.set(-1,0,0,0)}}}function n(){let N=!1,le=!1,J=null,ue=null,_e=null;return{setReversed:function(te){if(le!==te){const we=e.get("EXT_clip_control");te?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),le=te;const ye=_e;_e=null,this.setClear(ye)}},getReversed:function(){return le},setTest:function(te){te?ee(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(te){J!==te&&!N&&(i.depthMask(te),J=te)},setFunc:function(te){if(le&&(te=Jf[te]),ue!==te){switch(te){case xa:i.depthFunc(i.NEVER);break;case va:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case Sa:i.depthFunc(i.EQUAL);break;case ba:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case Ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=te}},setLocked:function(te){N=te},setClear:function(te){_e!==te&&(_e=te,le&&(te=1-te),i.clearDepth(te))},reset:function(){N=!1,J=null,ue=null,_e=null,le=!1}}}function s(){let N=!1,le=null,J=null,ue=null,_e=null,te=null,we=null,ye=null,mt=null;return{setTest:function(ot){N||(ot?ee(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(ot){le!==ot&&!N&&(i.stencilMask(ot),le=ot)},setFunc:function(ot,an,on){(J!==ot||ue!==an||_e!==on)&&(i.stencilFunc(ot,an,on),J=ot,ue=an,_e=on)},setOp:function(ot,an,on){(te!==ot||we!==an||ye!==on)&&(i.stencilOp(ot,an,on),te=ot,we=an,ye=on)},setLocked:function(ot){N=ot},setClear:function(ot){mt!==ot&&(i.clearStencil(ot),mt=ot)},reset:function(){N=!1,le=null,J=null,ue=null,_e=null,te=null,we=null,ye=null,mt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,m=[],_=null,g=!1,p=null,y=null,T=null,S=null,R=null,A=null,I=null,x=new Ne(0,0,0),w=0,M=!1,E=null,C=null,D=null,G=null,L=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),B=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),B=Y>=2);let se=null,ne={};const oe=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),Ze=new ht().fromArray(oe),Ge=new ht().fromArray(De);function q(N,le,J,ue){const _e=new Uint8Array(4),te=i.createTexture();i.bindTexture(N,te),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<J;we++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(le+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return te}const ie={};ie[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(ki),tt(!1),pt(il),ee(i.CULL_FACE),He(Rn);function ee(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function ae(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Se(N,le){return h[N]!==le?(i.bindFramebuffer(N,le),h[N]=le,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function be(N,le){let J=m,ue=!1;if(N){J=d.get(le),J===void 0&&(J=[],d.set(le,J));const _e=N.textures;if(J.length!==_e.length||J[0]!==i.COLOR_ATTACHMENT0){for(let te=0,we=_e.length;te<we;te++)J[te]=i.COLOR_ATTACHMENT0+te;J.length=_e.length,ue=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ue=!0);ue&&i.drawBuffers(J)}function Ye(N){return _!==N?(i.useProgram(N),_=N,!0):!1}const Be={[ni]:i.FUNC_ADD,[Mf]:i.FUNC_SUBTRACT,[Sf]:i.FUNC_REVERSE_SUBTRACT};Be[bf]=i.MIN,Be[yf]=i.MAX;const Ke={[Ef]:i.ZERO,[wf]:i.ONE,[Tf]:i.SRC_COLOR,[ga]:i.SRC_ALPHA,[Df]:i.SRC_ALPHA_SATURATE,[Pf]:i.DST_COLOR,[Rf]:i.DST_ALPHA,[Af]:i.ONE_MINUS_SRC_COLOR,[_a]:i.ONE_MINUS_SRC_ALPHA,[If]:i.ONE_MINUS_DST_COLOR,[Cf]:i.ONE_MINUS_DST_ALPHA,[Lf]:i.CONSTANT_COLOR,[Uf]:i.ONE_MINUS_CONSTANT_COLOR,[Nf]:i.CONSTANT_ALPHA,[Ff]:i.ONE_MINUS_CONSTANT_ALPHA};function He(N,le,J,ue,_e,te,we,ye,mt,ot){if(N===Rn){g===!0&&(ae(i.BLEND),g=!1);return}if(g===!1&&(ee(i.BLEND),g=!0),N!==vf){if(N!==p||ot!==M){if((y!==ni||R!==ni)&&(i.blendEquation(i.FUNC_ADD),y=ni,R=ni),ot)switch(N){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rr:i.blendFunc(i.ONE,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",N);break}else switch(N){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sl:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rl:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",N);break}T=null,S=null,A=null,I=null,x.set(0,0,0),w=0,p=N,M=ot}return}_e=_e||le,te=te||J,we=we||ue,(le!==y||_e!==R)&&(i.blendEquationSeparate(Be[le],Be[_e]),y=le,R=_e),(J!==T||ue!==S||te!==A||we!==I)&&(i.blendFuncSeparate(Ke[J],Ke[ue],Ke[te],Ke[we]),T=J,S=ue,A=te,I=we),(ye.equals(x)===!1||mt!==w)&&(i.blendColor(ye.r,ye.g,ye.b,mt),x.copy(ye),w=mt),p=N,M=!1}function Ve(N,le){N.side===Tn?ae(i.CULL_FACE):ee(i.CULL_FACE);let J=N.side===zt;le&&(J=!J),tt(J),N.blending===Fi&&N.transparent===!1?He(Rn):He(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ue=N.stencilWrite;o.setTest(ue),ue&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ft(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(N){E!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),E=N)}function pt(N){N!==gf?(ee(i.CULL_FACE),N!==C&&(N===il?i.cullFace(i.BACK):N===_f?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),C=N}function ct(N){N!==D&&(B&&i.lineWidth(N),D=N)}function ft(N,le,J){N?(ee(i.POLYGON_OFFSET_FILL),(G!==le||L!==J)&&(G=le,L=J,a.getReversed()&&(le=-le),i.polygonOffset(le,J))):ae(i.POLYGON_OFFSET_FILL)}function nt(N){N?ee(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function ut(N){N===void 0&&(N=i.TEXTURE0+z-1),se!==N&&(i.activeTexture(N),se=N)}function U(N,le,J){J===void 0&&(se===null?J=i.TEXTURE0+z-1:J=se);let ue=ne[J];ue===void 0&&(ue={type:void 0,texture:void 0},ne[J]=ue),(ue.type!==N||ue.texture!==le)&&(se!==J&&(i.activeTexture(J),se=J),i.bindTexture(N,le||ie[N]),ue.type=N,ue.texture=le)}function Bt(){const N=ne[se];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Je(){try{i.compressedTexImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function v(){try{i.texSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function k(){try{i.texSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function re(){try{i.texStorage2D(...arguments)}catch(N){We("WebGLState:",N)}}function ce(){try{i.texStorage3D(...arguments)}catch(N){We("WebGLState:",N)}}function K(){try{i.texImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function j(){try{i.texImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function he(N){return f[N]!==void 0?f[N]:i.getParameter(N)}function Te(N,le){f[N]!==le&&(i.pixelStorei(N,le),f[N]=le)}function de(N){Ze.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ze.copy(N))}function fe(N){Ge.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ge.copy(N))}function Ce(N,le){let J=c.get(le);J===void 0&&(J=new WeakMap,c.set(le,J));let ue=J.get(N);ue===void 0&&(ue=i.getUniformBlockIndex(le,N.name),J.set(N,ue))}function Pe(N,le){const ue=c.get(le).get(N);l.get(le)!==ue&&(i.uniformBlockBinding(le,ue,N.__bindingPointIndex),l.set(le,ue))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},se=null,ne={},h={},d=new WeakMap,m=[],_=null,g=!1,p=null,y=null,T=null,S=null,R=null,A=null,I=null,x=new Ne(0,0,0),w=0,M=!1,E=null,C=null,D=null,G=null,L=null,Ze.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:ae,bindFramebuffer:Se,drawBuffers:be,useProgram:Ye,setBlending:He,setMaterial:Ve,setFlipSided:tt,setCullFace:pt,setLineWidth:ct,setPolygonOffset:ft,setScissorTest:nt,activeTexture:ut,bindTexture:U,unbindTexture:Bt,compressedTexImage2D:Je,compressedTexImage3D:P,texImage2D:K,texImage3D:j,pixelStorei:Te,getParameter:he,updateUBOMapping:Ce,uniformBlockBinding:Pe,texStorage2D:re,texStorage3D:ce,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:de,viewport:fe,reset:Fe}}function Tg(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,v){return m?new OffscreenCanvas(P,v):hr("canvas")}function g(P,v,k){let W=1;const $=Je(P);if(($.width>k||$.height>k)&&(W=k/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const re=Math.floor(W*$.width),ce=Math.floor(W*$.height);h===void 0&&(h=_(re,ce));const K=v?_(re,ce):h;return K.width=re,K.height=ce,K.getContext("2d").drawImage(P,0,0,re,ce),Ie("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+re+"x"+ce+")."),K}else return"data"in P&&Ie("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function p(P){return P.generateMipmaps}function y(P){i.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(P,v,k,W,$,re=!1){if(P!==null){if(i[P]!==void 0)return i[P];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce;W&&(ce=e.get("EXT_texture_norm16"),ce||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===i.RED&&(k===i.FLOAT&&(K=i.R32F),k===i.HALF_FLOAT&&(K=i.R16F),k===i.UNSIGNED_BYTE&&(K=i.R8),k===i.UNSIGNED_SHORT&&ce&&(K=ce.R16_EXT),k===i.SHORT&&ce&&(K=ce.R16_SNORM_EXT)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.R8UI),k===i.UNSIGNED_SHORT&&(K=i.R16UI),k===i.UNSIGNED_INT&&(K=i.R32UI),k===i.BYTE&&(K=i.R8I),k===i.SHORT&&(K=i.R16I),k===i.INT&&(K=i.R32I)),v===i.RG&&(k===i.FLOAT&&(K=i.RG32F),k===i.HALF_FLOAT&&(K=i.RG16F),k===i.UNSIGNED_BYTE&&(K=i.RG8),k===i.UNSIGNED_SHORT&&ce&&(K=ce.RG16_EXT),k===i.SHORT&&ce&&(K=ce.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RG8UI),k===i.UNSIGNED_SHORT&&(K=i.RG16UI),k===i.UNSIGNED_INT&&(K=i.RG32UI),k===i.BYTE&&(K=i.RG8I),k===i.SHORT&&(K=i.RG16I),k===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGB8UI),k===i.UNSIGNED_SHORT&&(K=i.RGB16UI),k===i.UNSIGNED_INT&&(K=i.RGB32UI),k===i.BYTE&&(K=i.RGB8I),k===i.SHORT&&(K=i.RGB16I),k===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),k===i.UNSIGNED_INT&&(K=i.RGBA32UI),k===i.BYTE&&(K=i.RGBA8I),k===i.SHORT&&(K=i.RGBA16I),k===i.INT&&(K=i.RGBA32I)),v===i.RGB&&(k===i.UNSIGNED_SHORT&&ce&&(K=ce.RGB16_EXT),k===i.SHORT&&ce&&(K=ce.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),v===i.RGBA){const j=re?cr:Xe.getTransfer($);k===i.FLOAT&&(K=i.RGBA32F),k===i.HALF_FLOAT&&(K=i.RGBA16F),k===i.UNSIGNED_BYTE&&(K=j===Qe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ce&&(K=ce.RGBA16_EXT),k===i.SHORT&&ce&&(K=ce.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function R(P,v){let k;return P?v===null||v===_n||v===us?k=i.DEPTH24_STENCIL8:v===sn?k=i.DEPTH32F_STENCIL8:v===fs&&(k=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===_n||v===us?k=i.DEPTH_COMPONENT24:v===sn?k=i.DEPTH_COMPONENT32F:v===fs&&(k=i.DEPTH_COMPONENT16),k}function A(P,v){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Rt&&P.minFilter!==Lt?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function I(P){const v=P.target;v.removeEventListener("dispose",I),w(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function x(P){const v=P.target;v.removeEventListener("dispose",x),E(v)}function w(P){const v=n.get(P);if(v.__webglInit===void 0)return;const k=P.source,W=d.get(k);if(W){const $=W[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(P),Object.keys(W).length===0&&d.delete(k)}n.remove(P)}function M(P){const v=n.get(P);i.deleteTexture(v.__webglTexture);const k=P.source,W=d.get(k);delete W[v.__cacheKey],a.memory.textures--}function E(P){const v=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let $=0;$<v.__webglFramebuffer[W].length;$++)i.deleteFramebuffer(v.__webglFramebuffer[W][$]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=P.textures;for(let W=0,$=k.length;W<$;W++){const re=n.get(k[W]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(k[W])}n.remove(P)}let C=0;function D(){C=0}function G(){return C}function L(P){C=P}function z(){const P=C;return P>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function B(P){const v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function Y(P,v){const k=n.get(P);if(P.isVideoTexture&&U(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const W=P.image;if(W===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(k,P,v);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function Z(P,v){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){ae(k,P,v);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function se(P,v){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){ae(k,P,v);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function ne(P,v){const k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){Se(k,P,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const oe={[wa]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},De={[Rt]:i.NEAREST,[zf]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[Nr]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},Ze={[Hf]:i.NEVER,[Yf]:i.ALWAYS,[Vf]:i.LESS,[To]:i.LEQUAL,[Wf]:i.EQUAL,[Ao]:i.GEQUAL,[Xf]:i.GREATER,[qf]:i.NOTEQUAL};function Ge(P,v){if(v.type===sn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Lt||v.magFilter===Nr||v.magFilter===Es||v.magFilter===ri||v.minFilter===Lt||v.minFilter===Nr||v.minFilter===Es||v.minFilter===ri)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,oe[v.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,oe[v.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,oe[v.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,De[v.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,De[v.minFilter]),v.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ze[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Rt||v.minFilter!==Es&&v.minFilter!==ri||v.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function q(P,v){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",I));const W=v.source;let $=d.get(W);$===void 0&&($={},d.set(W,$));const re=B(v);if(re!==P.__cacheKey){$[re]===void 0&&($[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[re].usedTimes++;const ce=$[P.__cacheKey];ce!==void 0&&($[P.__cacheKey].usedTimes--,ce.usedTimes===0&&M(v)),P.__cacheKey=re,P.__webglTexture=$[re].texture}return k}function ie(P,v,k){return Math.floor(Math.floor(P/k)/v)}function ee(P,v,k,W){const re=P.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,k,W,v.data);else{re.sort((Te,de)=>Te.start-de.start);let ce=0;for(let Te=1;Te<re.length;Te++){const de=re[ce],fe=re[Te],Ce=de.start+de.count,Pe=ie(fe.start,v.width,4),Fe=ie(de.start,v.width,4);fe.start<=Ce+1&&Pe===Fe&&ie(fe.start+fe.count-1,v.width,4)===Pe?de.count=Math.max(de.count,fe.start+fe.count-de.start):(++ce,re[ce]=fe)}re.length=ce+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Te=0,de=re.length;Te<de;Te++){const fe=re[Te],Ce=Math.floor(fe.start/4),Pe=Math.ceil(fe.count/4),Fe=Ce%v.width,N=Math.floor(Ce/v.width),le=Pe,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Fe,N,le,J,k,W,v.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function ae(P,v,k){let W=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=i.TEXTURE_3D);const $=q(P,v),re=v.source;t.bindTexture(W,P.__webglTexture,i.TEXTURE0+k);const ce=n.get(re);if(re.version!==ce.__version||$===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const J=Xe.getPrimaries(Xe.workingColorSpace),ue=v.colorSpace===Hn?null:Xe.getPrimaries(v.colorSpace),_e=v.colorSpace===Hn||J===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let j=g(v.image,!1,s.maxTextureSize);j=Bt(v,j);const he=r.convert(v.format,v.colorSpace),Te=r.convert(v.type);let de=S(v.internalFormat,he,Te,v.normalized,v.colorSpace,v.isVideoTexture);Ge(W,v);let fe;const Ce=v.mipmaps,Pe=v.isVideoTexture!==!0,Fe=ce.__version===void 0||$===!0,N=re.dataReady,le=A(v,j);if(v.isDepthTexture)de=R(v.format===ai,v.type),Fe&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,de,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,de,j.width,j.height,0,he,Te,null));else if(v.isDataTexture)if(Ce.length>0){Pe&&Fe&&t.texStorage2D(i.TEXTURE_2D,le,de,Ce[0].width,Ce[0].height);for(let J=0,ue=Ce.length;J<ue;J++)fe=Ce[J],Pe?N&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,fe.width,fe.height,he,Te,fe.data):t.texImage2D(i.TEXTURE_2D,J,de,fe.width,fe.height,0,he,Te,fe.data);v.generateMipmaps=!1}else Pe?(Fe&&t.texStorage2D(i.TEXTURE_2D,le,de,j.width,j.height),N&&ee(v,j,he,Te)):t.texImage2D(i.TEXTURE_2D,0,de,j.width,j.height,0,he,Te,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,de,Ce[0].width,Ce[0].height,j.depth);for(let J=0,ue=Ce.length;J<ue;J++)if(fe=Ce[J],v.format!==rn)if(he!==null)if(Pe){if(N)if(v.layerUpdates.size>0){const _e=Hl(fe.width,fe.height,v.format,v.type);for(const te of v.layerUpdates){const we=fe.data.subarray(te*_e/fe.data.BYTES_PER_ELEMENT,(te+1)*_e/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,te,fe.width,fe.height,1,he,we)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,j.depth,he,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,de,fe.width,fe.height,j.depth,0,fe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,j.depth,he,Te,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,de,fe.width,fe.height,j.depth,0,he,Te,fe.data)}else{Pe&&Fe&&t.texStorage2D(i.TEXTURE_2D,le,de,Ce[0].width,Ce[0].height);for(let J=0,ue=Ce.length;J<ue;J++)fe=Ce[J],v.format!==rn?he!==null?Pe?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,J,de,fe.width,fe.height,0,fe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?N&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,fe.width,fe.height,he,Te,fe.data):t.texImage2D(i.TEXTURE_2D,J,de,fe.width,fe.height,0,he,Te,fe.data)}else if(v.isDataArrayTexture)if(Pe){if(Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,de,j.width,j.height,j.depth),N)if(v.layerUpdates.size>0){const J=Hl(j.width,j.height,v.format,v.type);for(const ue of v.layerUpdates){const _e=j.data.subarray(ue*J/j.data.BYTES_PER_ELEMENT,(ue+1)*J/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,j.width,j.height,1,he,Te,_e)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,he,Te,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,j.width,j.height,j.depth,0,he,Te,j.data);else if(v.isData3DTexture)Pe?(Fe&&t.texStorage3D(i.TEXTURE_3D,le,de,j.width,j.height,j.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,he,Te,j.data)):t.texImage3D(i.TEXTURE_3D,0,de,j.width,j.height,j.depth,0,he,Te,j.data);else if(v.isFramebufferTexture){if(Fe)if(Pe)t.texStorage2D(i.TEXTURE_2D,le,de,j.width,j.height);else{let J=j.width,ue=j.height;for(let _e=0;_e<le;_e++)t.texImage2D(i.TEXTURE_2D,_e,de,J,ue,0,he,Te,null),J>>=1,ue>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),j.parentNode!==J){J.appendChild(j),f.add(v),J.onpaint=ue=>{const _e=ue.changedElements;for(const te of f)_e.includes(te.image)&&(te.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{const _e=i.RGBA,te=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_e,te,we,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Pe&&Fe){const J=Je(Ce[0]);t.texStorage2D(i.TEXTURE_2D,le,de,J.width,J.height)}for(let J=0,ue=Ce.length;J<ue;J++)fe=Ce[J],Pe?N&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,he,Te,fe):t.texImage2D(i.TEXTURE_2D,J,de,he,Te,fe);v.generateMipmaps=!1}else if(Pe){if(Fe){const J=Je(j);t.texStorage2D(i.TEXTURE_2D,le,de,J.width,J.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Te,j)}else t.texImage2D(i.TEXTURE_2D,0,de,he,Te,j);p(v)&&y(W),ce.__version=re.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Se(P,v,k){if(v.image.length!==6)return;const W=q(P,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+k);const re=n.get($);if($.version!==re.__version||W===!0){t.activeTexture(i.TEXTURE0+k);const ce=Xe.getPrimaries(Xe.workingColorSpace),K=v.colorSpace===Hn?null:Xe.getPrimaries(v.colorSpace),j=v.colorSpace===Hn||ce===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const he=v.isCompressedTexture||v.image[0].isCompressedTexture,Te=v.image[0]&&v.image[0].isDataTexture,de=[];for(let te=0;te<6;te++)!he&&!Te?de[te]=g(v.image[te],!0,s.maxCubemapSize):de[te]=Te?v.image[te].image:v.image[te],de[te]=Bt(v,de[te]);const fe=de[0],Ce=r.convert(v.format,v.colorSpace),Pe=r.convert(v.type),Fe=S(v.internalFormat,Ce,Pe,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,le=re.__version===void 0||W===!0,J=$.dataReady;let ue=A(v,fe);Ge(i.TEXTURE_CUBE_MAP,v);let _e;if(he){N&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Fe,fe.width,fe.height);for(let te=0;te<6;te++){_e=de[te].mipmaps;for(let we=0;we<_e.length;we++){const ye=_e[we];v.format!==rn?Ce!==null?N?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,ye.width,ye.height,Ce,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Fe,ye.width,ye.height,0,ye.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,ye.width,ye.height,Ce,Pe,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Fe,ye.width,ye.height,0,Ce,Pe,ye.data)}}}else{if(_e=v.mipmaps,N&&le){_e.length>0&&ue++;const te=Je(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Fe,te.width,te.height)}for(let te=0;te<6;te++)if(Te){N?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,de[te].width,de[te].height,Ce,Pe,de[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Fe,de[te].width,de[te].height,0,Ce,Pe,de[te].data);for(let we=0;we<_e.length;we++){const mt=_e[we].image[te].image;N?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,mt.width,mt.height,Ce,Pe,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Fe,mt.width,mt.height,0,Ce,Pe,mt.data)}}else{N?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ce,Pe,de[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Fe,Ce,Pe,de[te]);for(let we=0;we<_e.length;we++){const ye=_e[we];N?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Ce,Pe,ye.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Fe,Ce,Pe,ye.image[te])}}}p(v)&&y(i.TEXTURE_CUBE_MAP),re.__version=$.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function be(P,v,k,W,$,re){const ce=r.convert(k.format,k.colorSpace),K=r.convert(k.type),j=S(k.internalFormat,ce,K,k.normalized,k.colorSpace),he=n.get(v),Te=n.get(k);if(Te.__renderTarget=v,!he.__hasExternalTextures){const de=Math.max(1,v.width>>re),fe=Math.max(1,v.height>>re);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,re,j,de,fe,v.depth,0,ce,K,null):t.texImage2D($,re,j,de,fe,0,ce,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ut(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,$,Te.__webglTexture,0,nt(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,$,Te.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(P,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,P),v.depthBuffer){const W=v.depthTexture,$=W&&W.isDepthTexture?W.type:null,re=R(v.stencilBuffer,$),ce=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(v),re,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(v),re,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,re,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,P)}else{const W=v.textures;for(let $=0;$<W.length;$++){const re=W[$],ce=r.convert(re.format,re.colorSpace),K=r.convert(re.type),j=S(re.internalFormat,ce,K,re.normalized,re.colorSpace);ut(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(v),j,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(v),j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(P,v,k){const W=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",I)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,v.depthTexture);const he=r.convert(v.depthTexture.format),Te=r.convert(v.depthTexture.type);let de;v.depthTexture.format===In?de=i.DEPTH_COMPONENT24:v.depthTexture.format===ai&&(de=i.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,de,v.width,v.height,0,he,Te,null)}}else Y(v.depthTexture,0);const re=$.__webglTexture,ce=nt(v),K=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,j=v.depthTexture.format===ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===In)ut(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,re,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,re,0);else if(v.depthTexture.format===ai)ut(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,re,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(P){const v=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){const W=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=W}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Be(v.__webglFramebuffer[W],P,W);else{const W=P.texture.mipmaps;W&&W.length>0?Be(v.__webglFramebuffer[0],P,0):Be(v.__webglFramebuffer,P,0)}else if(k){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=i.createRenderbuffer(),Ye(v.__webglDepthbuffer[W],P,!1);else{const $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,re)}}else{const W=P.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ye(v.__webglDepthbuffer,P,!1);else{const $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(P,v,k){const W=n.get(P);v!==void 0&&be(W.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ke(P)}function Ve(P){const v=P.texture,k=n.get(P),W=n.get(v);P.addEventListener("dispose",x);const $=P.textures,re=P.isWebGLCubeRenderTarget===!0,ce=$.length>1;if(ce||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=v.version,a.memory.textures++),re){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let j=0;j<v.mipmaps.length;j++)k.__webglFramebuffer[K][j]=i.createFramebuffer()}else k.__webglFramebuffer[K]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)k.__webglFramebuffer[K]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ce)for(let K=0,j=$.length;K<j;K++){const he=n.get($[K]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&ut(P)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){const j=$[K];k.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[K]);const he=r.convert(j.format,j.colorSpace),Te=r.convert(j.type),de=S(j.internalFormat,he,Te,j.normalized,j.colorSpace,P.isXRRenderTarget===!0),fe=nt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,de,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,k.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)be(k.__webglFramebuffer[K][j],P,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else be(k.__webglFramebuffer[K],P,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(v)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let K=0,j=$.length;K<j;K++){const he=$[K],Te=n.get(he);let de=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Te.__webglTexture),Ge(de,he),be(k.__webglFramebuffer,P,he,i.COLOR_ATTACHMENT0+K,de,0),p(he)&&y(de)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(K=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,W.__webglTexture),Ge(K,v),v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)be(k.__webglFramebuffer[j],P,v,i.COLOR_ATTACHMENT0,K,j);else be(k.__webglFramebuffer,P,v,i.COLOR_ATTACHMENT0,K,0);p(v)&&y(K),t.unbindTexture()}P.depthBuffer&&Ke(P)}function tt(P){const v=P.textures;for(let k=0,W=v.length;k<W;k++){const $=v[k];if(p($)){const re=T(P),ce=n.get($).__webglTexture;t.bindTexture(re,ce),y(re),t.unbindTexture()}}}const pt=[],ct=[];function ft(P){if(P.samples>0){if(ut(P)===!1){const v=P.textures,k=P.width,W=P.height;let $=i.COLOR_BUFFER_BIT;const re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(P),K=v.length>1;if(K)for(let he=0;he<v.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const j=P.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<v.length;he++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Te=n.get(v[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,k,W,0,0,k,W,$,i.NEAREST),l===!0&&(pt.length=0,ct.length=0,pt.push(i.COLOR_ATTACHMENT0+he),P.depthBuffer&&P.resolveDepthBuffer===!1&&(pt.push(re),ct.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let he=0;he<v.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Te=n.get(v[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const v=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function nt(P){return Math.min(s.maxSamples,P.samples)}function ut(P){const v=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(P){const v=a.render.frame;u.get(P)!==v&&(u.set(P,v),P.update())}function Bt(P,v){const k=P.colorSpace,W=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==lr&&k!==Hn&&(Xe.getTransfer(k)===Qe?(W!==rn||$!==qt)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",k)),v}function Je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=D,this.getTextureUnits=G,this.setTextureUnits=L,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=se,this.setTextureCube=ne,this.rebindTextures=He,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ag(i,e){function t(n,s=Hn){let r;const a=Xe.getTransfer(s);if(n===qt)return i.UNSIGNED_BYTE;if(n===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===So)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ic)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cc)return i.BYTE;if(n===Pc)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===vo)return i.INT;if(n===_n)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===Lc)return i.ALPHA;if(n===Uc)return i.RGB;if(n===rn)return i.RGBA;if(n===In)return i.DEPTH_COMPONENT;if(n===ai)return i.DEPTH_STENCIL;if(n===bo)return i.RED;if(n===yo)return i.RED_INTEGER;if(n===hi)return i.RG;if(n===Eo)return i.RG_INTEGER;if(n===wo)return i.RGBA_INTEGER;if(n===js||n===er||n===tr||n===nr)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===Da||n===La||n===Ua||n===Na||n===ar||n===Fa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ia||n===Da)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===La)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ua)return r.COMPRESSED_R11_EAC;if(n===Na)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ar)return r.COMPRESSED_RG11_EAC;if(n===Fa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oa||n===Ba||n===za||n===ka||n===Ga||n===Ha||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Ka||n===Za)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ba)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===za)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ya)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ja||n===Qa||n===ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ja)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eo||n===to||n===or||n===no)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
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

}`;class Pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Xc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xn({vertexShader:Rg,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ig extends fi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",g=new Pg,p={},y=t.getContextAttributes();let T=null,S=null;const R=[],A=[],I=new Le;let x=null;const w=new Xt;w.viewport=new ht;const M=new Xt;M.viewport=new ht;const E=[w,M],C=new ku;let D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=R[q];return ie===void 0&&(ie=new Vr,R[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=R[q];return ie===void 0&&(ie=new Vr,R[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=R[q];return ie===void 0&&(ie=new Vr,R[q]=ie),ie.getHandSpace()};function L(q){const ie=A.indexOf(q.inputSource);if(ie===-1)return;const ee=R[ie];ee!==void 0&&(ee.update(q.inputSource,q.frame,c||a),ee.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",B);for(let q=0;q<R.length;q++){const ie=A[q];ie!==null&&(A[q]=null,R[q].disconnect(ie))}D=null,G=null,g.reset();for(const q in p)delete p[q];e.setRenderTarget(T),d=null,h=null,f=null,s=null,S=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",z),s.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,ae=null,Se=null;y.depth&&(Se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=y.stencil?ai:In,ae=y.stencil?us:_n);const be={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(be),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new gn(h.textureWidth,h.textureHeight,{format:rn,type:qt,depthTexture:new Hi(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new gn(d.framebufferWidth,d.framebufferHeight,{format:rn,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(q){for(let ie=0;ie<q.removed.length;ie++){const ee=q.removed[ie],ae=A.indexOf(ee);ae>=0&&(A[ae]=null,R[ae].disconnect(ee))}for(let ie=0;ie<q.added.length;ie++){const ee=q.added[ie];let ae=A.indexOf(ee);if(ae===-1){for(let be=0;be<R.length;be++)if(be>=A.length){A.push(ee),ae=be;break}else if(A[be]===null){A[be]=ee,ae=be;break}if(ae===-1)break}const Se=R[ae];Se&&Se.connect(ee)}}const Y=new F,Z=new F;function se(q,ie,ee){Y.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(ee.matrixWorld);const ae=Y.distanceTo(Z),Se=ie.projectionMatrix.elements,be=ee.projectionMatrix.elements,Ye=Se[14]/(Se[10]-1),Be=Se[14]/(Se[10]+1),Ke=(Se[9]+1)/Se[5],He=(Se[9]-1)/Se[5],Ve=(Se[8]-1)/Se[0],tt=(be[8]+1)/be[0],pt=Ye*Ve,ct=Ye*tt,ft=ae/(-Ve+tt),nt=ft*-Ve;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(nt),q.translateZ(ft),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ut=Ye+ft,U=Be+ft,Bt=pt-nt,Je=ct+(ae-nt),P=Ke*Be/U*ut,v=He*Be/U*ut;q.projectionMatrix.makePerspective(Bt,Je,P,v,ut,U),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ne(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ie=q.near,ee=q.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ee=g.depthFar)),C.near=M.near=w.near=ie,C.far=M.far=w.far=ee,(D!==C.near||G!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),D=C.near,G=C.far),C.layers.mask=q.layers.mask|6,w.layers.mask=C.layers.mask&-5,M.layers.mask=C.layers.mask&-3;const ae=q.parent,Se=C.cameras;ne(C,ae);for(let be=0;be<Se.length;be++)ne(Se[be],ae);Se.length===2?se(C,w,M):C.projectionMatrix.copy(w.projectionMatrix),oe(q,C,ae)};function oe(q,ie,ee){ee===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(ee.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ro*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(q){return p[q]};let De=null;function Ze(q,ie){if(u=ie.getViewerPose(c||a),m=ie,u!==null){const ee=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let ae=!1;ee.length!==C.cameras.length&&(C.cameras.length=0,ae=!0);for(let Be=0;Be<ee.length;Be++){const Ke=ee[Be];let He=null;if(d!==null)He=d.getViewport(Ke);else{const tt=f.getViewSubImage(h,Ke);He=tt.viewport,Be===0&&(e.setRenderTargetTextures(S,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(S))}let Ve=E[Be];Ve===void 0&&(Ve=new Xt,Ve.layers.enable(Be),Ve.viewport=new ht,E[Be]=Ve),Ve.matrix.fromArray(Ke.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ke.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(He.x,He.y,He.width,He.height),Be===0&&(C.matrix.copy(Ve.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ae===!0&&C.cameras.push(Ve)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const Be=f.getDepthInformation(ee[0]);Be&&Be.isValid&&Be.texture&&g.init(Be,s.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Be=0;Be<ee.length;Be++){const Ke=ee[Be].camera;if(Ke){let He=p[Ke];He||(He=new Xc,p[Ke]=He);const Ve=f.getCameraImage(Ke);He.sourceTexture=Ve}}}}for(let ee=0;ee<R.length;ee++){const ae=A[ee],Se=R[ee];ae!==null&&Se!==void 0&&Se.update(ae,ie,c||a)}De&&De(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),m=null}const Ge=new Zc;Ge.setAnimationLoop(Ze),this.setAnimationLoop=function(q){De=q},this.dispose=function(){}}}const Dg=new et,ih=new Ue;ih.set(-1,0,0,0,1,0,0,0,1);function Lg(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Yc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,T,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===zt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===zt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),T=y.envMap,S=y.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ih),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=T*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ug(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,R){const A=R.program;n.uniformBlockBinding(S,A)}function c(S,R){let A=s[S.id];A===void 0&&(g(S),A=u(S),s[S.id]=A,S.addEventListener("dispose",y));const I=R.program;n.updateUBOMapping(S,I);const x=e.render.frame;r[S.id]!==x&&(h(S),r[S.id]=x)}function u(S){const R=f();S.__bindingPointIndex=R;const A=i.createBuffer(),I=S.__size,x=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,I,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,A),A}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const R=s[S.id],A=S.uniforms,I=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let x=0,w=A.length;x<w;x++){const M=A[x];if(Array.isArray(M))for(let E=0,C=M.length;E<C;E++)d(M[E],x,E,I);else d(M,x,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,R,A,I){if(_(S,R,A,I)===!0){const x=S.__offset,w=S.value;if(Array.isArray(w)){let M=0;for(let E=0;E<w.length;E++){const C=w[E],D=p(C);m(C,S.__data,M),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(M+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,S.__data)}}function m(S,R,A){typeof S=="number"||typeof S=="boolean"?R[0]=S:S.isMatrix3?(R[0]=S.elements[0],R[1]=S.elements[1],R[2]=S.elements[2],R[3]=0,R[4]=S.elements[3],R[5]=S.elements[4],R[6]=S.elements[5],R[7]=0,R[8]=S.elements[6],R[9]=S.elements[7],R[10]=S.elements[8],R[11]=0):ArrayBuffer.isView(S)?R.set(new S.constructor(S.buffer,S.byteOffset,R.length)):S.toArray(R,A)}function _(S,R,A,I){const x=S.value,w=R+"_"+A;if(I[w]===void 0)return typeof x=="number"||typeof x=="boolean"?I[w]=x:ArrayBuffer.isView(x)?I[w]=x.slice():I[w]=x.clone(),!0;{const M=I[w];if(typeof x=="number"||typeof x=="boolean"){if(M!==x)return I[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(M.equals(x)===!1)return M.copy(x),!0}}return!1}function g(S){const R=S.uniforms;let A=0;const I=16;for(let w=0,M=R.length;w<M;w++){const E=Array.isArray(R[w])?R[w]:[R[w]];for(let C=0,D=E.length;C<D;C++){const G=E[C],L=Array.isArray(G.value)?G.value:[G.value];for(let z=0,B=L.length;z<B;z++){const Y=L[z],Z=p(Y),se=A%I,ne=se%Z.boundary,oe=se+ne;A+=ne,oe!==0&&I-oe<Z.storage&&(A+=I-oe),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=A,A+=Z.storage}}}const x=A%I;return x>0&&(A+=I-x),S.__size=A,S.__cache={},this}function p(S){const R={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(R.boundary=4,R.storage=4):S.isVector2?(R.boundary=8,R.storage=8):S.isVector3||S.isColor?(R.boundary=16,R.storage=12):S.isVector4?(R.boundary=16,R.storage=16):S.isMatrix3?(R.boundary=48,R.storage=48):S.isMatrix4?(R.boundary=64,R.storage=64):S.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(R.boundary=16,R.storage=S.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",S),R}function y(S){const R=S.target;R.removeEventListener("dispose",y);const A=a.indexOf(R.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function T(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}const Ng=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hn=null;function Fg(){return hn===null&&(hn=new Hc(Ng,16,16,hi,Pn),hn.name="DFG_LUT",hn.minFilter=Lt,hn.magFilter=Lt,hn.wrapS=An,hn.wrapT=An,hn.generateMipmaps=!1,hn.needsUpdate=!0),hn}class Og{constructor(e={}){const{canvas:t=Kf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=qt}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=d,g=new Set([wo,Eo,yo]),p=new Set([qt,_n,fs,us,Mo,So]),y=new Uint32Array(4),T=new Int32Array(4),S=new F;let R=null,A=null;const I=[],x=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let E=!1,C=null,D=null,G=null,L=null;this._outputColorSpace=Wt;let z=0,B=0,Y=null,Z=-1,se=null;const ne=new ht,oe=new ht;let De=null;const Ze=new Ne(0);let Ge=0,q=t.width,ie=t.height,ee=1,ae=null,Se=null;const be=new ht(0,0,q,ie),Ye=new ht(0,0,q,ie);let Be=!1;const Ke=new Do;let He=!1,Ve=!1;const tt=new et,pt=new F,ct=new ht,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function ut(){return Y===null?ee:1}let U=n;function Bt(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${go}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",an,!1),U===null){const O="webgl2";if(U=Bt(O,b),U===null)throw Bt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw We("WebGLRenderer: "+b.message),b}let Je,P,v,k,W,$,re,ce,K,j,he,Te,de,fe,Ce,Pe,Fe,N,le,J,ue,_e,te;function we(){Je=new Fp(U),Je.init(),ue=new Ag(U,Je),P=new Rp(U,Je,e,ue),v=new wg(U,Je),P.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),D=U.createFramebuffer(),G=U.createFramebuffer(),L=U.createFramebuffer(),k=new zp(U),W=new fg,$=new Tg(U,Je,v,W,P,ue,k),re=new Np(M),ce=new Vu(U),_e=new Tp(U,ce),K=new Op(U,ce,k,_e),j=new Gp(U,K,ce,_e,k),N=new kp(U,P,$),Ce=new Cp(W),he=new hg(M,re,Je,P,_e,Ce),Te=new Lg(M,W),de=new dg,fe=new vg(Je),Fe=new wp(M,re,v,j,m,l),Pe=new Eg(M,j,P),te=new Ug(U,k,P,v),le=new Ap(U,Je,k),J=new Bp(U,Je,k),k.programs=he.programs,M.capabilities=P,M.extensions=Je,M.properties=W,M.renderLists=de,M.shadowMap=Pe,M.state=v,M.info=k}we(),_!==qt&&(w=new Vp(_,t.width,t.height,o,s,r));const ye=new Ig(M,U);this.xr=ye,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Je.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Je.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(q,ie,!1))},this.getSize=function(b){return b.set(q,ie)},this.setSize=function(b,O,X=!0){if(ye.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,ie=O,t.width=Math.floor(b*ee),t.height=Math.floor(O*ee),X===!0&&(t.style.width=b+"px",t.style.height=O+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(q*ee,ie*ee).floor()},this.setDrawingBufferSize=function(b,O,X){q=b,ie=O,ee=X,t.width=Math.floor(b*X),t.height=Math.floor(O*X),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(_===qt){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ne)},this.getViewport=function(b){return b.copy(be)},this.setViewport=function(b,O,X,H){b.isVector4?be.set(b.x,b.y,b.z,b.w):be.set(b,O,X,H),v.viewport(ne.copy(be).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(Ye)},this.setScissor=function(b,O,X,H){b.isVector4?Ye.set(b.x,b.y,b.z,b.w):Ye.set(b,O,X,H),v.scissor(oe.copy(Ye).multiplyScalar(ee).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(b){v.setScissorTest(Be=b)},this.setOpaqueSort=function(b){ae=b},this.setTransparentSort=function(b){Se=b},this.getClearColor=function(b){return b.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,X=!0){let H=0;if(b){let V=!1;if(Y!==null){const ge=Y.texture.format;V=g.has(ge)}if(V){const ge=Y.texture.type,Me=p.has(ge),me=Fe.getClearColor(),Ee=Fe.getClearAlpha(),Ae=me.r,Oe=me.g,ke=me.b;Me?(y[0]=Ae,y[1]=Oe,y[2]=ke,y[3]=Ee,U.clearBufferuiv(U.COLOR,0,y)):(T[0]=Ae,T[1]=Oe,T[2]=ke,T[3]=Ee,U.clearBufferiv(U.COLOR,0,T))}else H|=U.COLOR_BUFFER_BIT}O&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),C=b},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",an,!1),Fe.dispose(),de.dispose(),fe.dispose(),W.dispose(),re.dispose(),j.dispose(),_e.dispose(),te.dispose(),he.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Ko),ye.removeEventListener("sessionend",Zo),Kn.stop()};function mt(b){b.preventDefault(),fr("WebGLRenderer: Context Lost."),E=!0}function ot(){fr("WebGLRenderer: Context Restored."),E=!1;const b=k.autoReset,O=Pe.enabled,X=Pe.autoUpdate,H=Pe.needsUpdate,V=Pe.type;we(),k.autoReset=b,Pe.enabled=O,Pe.autoUpdate=X,Pe.needsUpdate=H,Pe.type=V}function an(b){We("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function on(b){const O=b.target;O.removeEventListener("dispose",on),jh(O)}function jh(b){ef(b),W.remove(b)}function ef(b){const O=W.get(b).programs;O!==void 0&&(O.forEach(function(X){he.releaseProgram(X)}),b.isShaderMaterial&&he.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,X,H,V,ge){O===null&&(O=ft);const Me=V.isMesh&&V.matrixWorld.determinantAffine()<0,me=sf(b,O,X,H,V);v.setMaterial(H,Me);let Ee=X.index,Ae=1;if(H.wireframe===!0){if(Ee=K.getWireframeAttribute(X),Ee===void 0)return;Ae=2}const Oe=X.drawRange,ke=X.attributes.position;let Re=Oe.start*Ae,it=(Oe.start+Oe.count)*Ae;ge!==null&&(Re=Math.max(Re,ge.start*Ae),it=Math.min(it,(ge.start+ge.count)*Ae)),Ee!==null?(Re=Math.max(Re,0),it=Math.min(it,Ee.count)):ke!=null&&(Re=Math.max(Re,0),it=Math.min(it,ke.count));const _t=it-Re;if(_t<0||_t===1/0)return;_e.setup(V,H,me,X,Ee);let gt,rt=le;if(Ee!==null&&(gt=ce.get(Ee),rt=J,rt.setIndex(gt)),V.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*ut()),rt.setMode(U.LINES)):rt.setMode(U.TRIANGLES);else if(V.isLine){let Ct=H.linewidth;Ct===void 0&&(Ct=1),v.setLineWidth(Ct*ut()),V.isLineSegments?rt.setMode(U.LINES):V.isLineLoop?rt.setMode(U.LINE_LOOP):rt.setMode(U.LINE_STRIP)}else V.isPoints?rt.setMode(U.POINTS):V.isSprite&&rt.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))rt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ct=V._multiDrawStarts,ve=V._multiDrawCounts,kt=V._multiDrawCount,$e=Ee?ce.get(Ee).bytesPerElement:1,Yt=W.get(H).currentProgram.getUniforms();for(let ln=0;ln<kt;ln++)Yt.setValue(U,"_gl_DrawID",ln),rt.render(Ct[ln]/$e,ve[ln])}else if(V.isInstancedMesh)rt.renderInstances(Re,_t,V.count);else if(X.isInstancedBufferGeometry){const Ct=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ve=Math.min(X.instanceCount,Ct);rt.renderInstances(Re,_t,ve)}else rt.render(Re,_t)};function $o(b,O,X){b.transparent===!0&&b.side===Tn&&b.forceSinglePass===!1?(b.side=zt,b.needsUpdate=!0,ys(b,O,X),b.side=qn,b.needsUpdate=!0,ys(b,O,X),b.side=Tn):ys(b,O,X)}this.compile=function(b,O,X=null){X===null&&(X=b),A=fe.get(X),A.init(O),x.push(A),X.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),b!==X&&b.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();const H=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ge=V.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){const me=ge[Me];$o(me,X,V),H.add(me)}else $o(ge,X,V),H.add(ge)}),A=x.pop(),H},this.compileAsync=function(b,O,X=null){const H=this.compile(b,O,X);return new Promise(V=>{function ge(){if(H.forEach(function(Me){W.get(Me).currentProgram.isReady()&&H.delete(Me)}),H.size===0){V(b);return}setTimeout(ge,10)}Je.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Ir=null;function tf(b){Ir&&Ir(b)}function Ko(){Kn.stop()}function Zo(){Kn.start()}const Kn=new Zc;Kn.setAnimationLoop(tf),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(b){Ir=b,ye.setAnimationLoop(b),b===null?Kn.stop():Kn.start()},ye.addEventListener("sessionstart",Ko),ye.addEventListener("sessionend",Zo),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;C!==null&&C.renderStart(b,O);const X=ye.enabled===!0&&ye.isPresenting===!0,H=w!==null&&(Y===null||X)&&w.begin(M,Y);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(O),O=ye.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,O,Y),A=fe.get(b,x.length),A.init(O),A.state.textureUnits=$.getTextureUnits(),x.push(A),tt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ke.setFromProjectionMatrix(tt,pn,O.reversedDepth),Ve=this.localClippingEnabled,He=Ce.init(this.clippingPlanes,Ve),R=de.get(b,I.length),R.init(),I.push(R),ye.enabled===!0&&ye.isPresenting===!0){const Me=M.xr.getDepthSensingMesh();Me!==null&&Dr(Me,O,-1/0,M.sortObjects)}Dr(b,O,0,M.sortObjects),R.finish(),M.sortObjects===!0&&R.sort(ae,Se,O.reversedDepth),nt=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,nt&&Fe.addToRenderList(R,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&Ce.beginShadows();const V=A.state.shadowsArray;if(Pe.render(V,b,O),He===!0&&Ce.endShadows(),(H&&w.hasRenderPass())===!1){const Me=R.opaque,me=R.transmissive;if(A.setupLights(),O.isArrayCamera){const Ee=O.cameras;if(me.length>0)for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const ke=Ee[Ae];Qo(Me,me,b,ke)}nt&&Fe.render(b);for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const ke=Ee[Ae];Jo(R,b,ke,ke.viewport)}}else me.length>0&&Qo(Me,me,b,O),nt&&Fe.render(b),Jo(R,b,O)}Y!==null&&B===0&&($.updateMultisampleRenderTarget(Y),$.updateRenderTargetMipmap(Y)),H&&w.end(M),b.isScene===!0&&b.onAfterRender(M,b,O),_e.resetDefaultState(),Z=-1,se=null,x.pop(),x.length>0?(A=x[x.length-1],$.setTextureUnits(A.state.textureUnits),He===!0&&Ce.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,I.pop(),I.length>0?R=I[I.length-1]:R=null,C!==null&&C.renderEnd()};function Dr(b,O,X,H){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ke.intersectsSprite(b)){H&&ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(tt);const Me=j.update(b),me=b.material;me.visible&&R.push(b,Me,me,X,ct.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ke.intersectsObject(b))){const Me=j.update(b),me=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ct.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ct.copy(Me.boundingSphere.center)),ct.applyMatrix4(b.matrixWorld).applyMatrix4(tt)),Array.isArray(me)){const Ee=Me.groups;for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const ke=Ee[Ae],Re=me[ke.materialIndex];Re&&Re.visible&&R.push(b,Me,Re,X,ct.z,ke)}}else me.visible&&R.push(b,Me,me,X,ct.z,null)}}const ge=b.children;for(let Me=0,me=ge.length;Me<me;Me++)Dr(ge[Me],O,X,H)}function Jo(b,O,X,H){const{opaque:V,transmissive:ge,transparent:Me}=b;A.setupLightsView(X),He===!0&&Ce.setGlobalState(M.clippingPlanes,X),H&&v.viewport(ne.copy(H)),V.length>0&&bs(V,O,X),ge.length>0&&bs(ge,O,X),Me.length>0&&bs(Me,O,X),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Qo(b,O,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const Re=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new gn(1,1,{generateMipmaps:!0,type:Re?Pn:qt,minFilter:ri,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const ge=A.state.transmissionRenderTarget[H.id],Me=H.viewport||ne;ge.setSize(Me.z*M.transmissionResolutionScale,Me.w*M.transmissionResolutionScale);const me=M.getRenderTarget(),Ee=M.getActiveCubeFace(),Ae=M.getActiveMipmapLevel();M.setRenderTarget(ge),M.getClearColor(Ze),Ge=M.getClearAlpha(),Ge<1&&M.setClearColor(16777215,.5),M.clear(),nt&&Fe.render(X);const Oe=M.toneMapping;M.toneMapping=mn;const ke=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),He===!0&&Ce.setGlobalState(M.clippingPlanes,H),bs(b,X,H),$.updateMultisampleRenderTarget(ge),$.updateRenderTargetMipmap(ge),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let it=0,_t=O.length;it<_t;it++){const gt=O[it],{object:rt,geometry:Ct,material:ve,group:kt}=gt;if(ve.side===Tn&&rt.layers.test(H.layers)){const $e=ve.side;ve.side=zt,ve.needsUpdate=!0,jo(rt,X,H,Ct,ve,kt),ve.side=$e,ve.needsUpdate=!0,Re=!0}}Re===!0&&($.updateMultisampleRenderTarget(ge),$.updateRenderTargetMipmap(ge))}M.setRenderTarget(me,Ee,Ae),M.setClearColor(Ze,Ge),ke!==void 0&&(H.viewport=ke),M.toneMapping=Oe}function bs(b,O,X){const H=O.isScene===!0?O.overrideMaterial:null;for(let V=0,ge=b.length;V<ge;V++){const Me=b[V],{object:me,geometry:Ee,group:Ae}=Me;let Oe=Me.material;Oe.allowOverride===!0&&H!==null&&(Oe=H),me.layers.test(X.layers)&&jo(me,O,X,Ee,Oe,Ae)}}function jo(b,O,X,H,V,ge){b.onBeforeRender(M,O,X,H,V,ge),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(M,O,X,H,b,ge),V.transparent===!0&&V.side===Tn&&V.forceSinglePass===!1?(V.side=zt,V.needsUpdate=!0,M.renderBufferDirect(X,O,H,V,b,ge),V.side=qn,V.needsUpdate=!0,M.renderBufferDirect(X,O,H,V,b,ge),V.side=Tn):M.renderBufferDirect(X,O,H,V,b,ge),b.onAfterRender(M,O,X,H,V,ge)}function ys(b,O,X){O.isScene!==!0&&(O=ft);const H=W.get(b),V=A.state.lights,ge=A.state.shadowsArray,Me=V.state.version,me=he.getParameters(b,V.state,ge,O,X,A.state.lightProbeGridArray),Ee=he.getProgramCacheKey(me);let Ae=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const Oe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=re.get(b.envMap||H.environment,Oe),H.envMapRotation=H.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Ae===void 0&&(b.addEventListener("dispose",on),Ae=new Map,H.programs=Ae);let ke=Ae.get(Ee);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===Me)return tl(b,me),ke}else me.uniforms=he.getUniforms(b),C!==null&&b.isNodeMaterial&&C.build(b,X,me),b.onBeforeCompile(me,M),ke=he.acquireProgram(me,Ee),Ae.set(Ee,ke),H.uniforms=me.uniforms;const Re=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=Ce.uniform),tl(b,me),H.needsLights=af(b),H.lightsStateVersion=Me,H.needsLights&&(Re.ambientLightColor.value=V.state.ambient,Re.lightProbe.value=V.state.probe,Re.directionalLights.value=V.state.directional,Re.directionalLightShadows.value=V.state.directionalShadow,Re.spotLights.value=V.state.spot,Re.spotLightShadows.value=V.state.spotShadow,Re.rectAreaLights.value=V.state.rectArea,Re.ltc_1.value=V.state.rectAreaLTC1,Re.ltc_2.value=V.state.rectAreaLTC2,Re.pointLights.value=V.state.point,Re.pointLightShadows.value=V.state.pointShadow,Re.hemisphereLights.value=V.state.hemi,Re.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Re.spotLightMatrix.value=V.state.spotLightMatrix,Re.spotLightMap.value=V.state.spotLightMap,Re.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=A.state.lightProbeGridArray.length>0,H.currentProgram=ke,H.uniformsList=null,ke}function el(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=sr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function tl(b,O){const X=W.get(b);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function nf(b,O){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let X=0,H=b.length;X<H;X++){const V=b[X];if(V.texture!==null&&V.boundingBox.containsPoint(S))return V}return null}function sf(b,O,X,H,V){O.isScene!==!0&&(O=ft),$.resetTextureUnits();const ge=O.fog,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,me=Y===null?M.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Xe.workingColorSpace,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ae=re.get(H.envMap||Me,Ee),Oe=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!X.morphAttributes.position,it=!!X.morphAttributes.normal,_t=!!X.morphAttributes.color;let gt=mn;H.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(gt=M.toneMapping);const rt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ct=rt!==void 0?rt.length:0,ve=W.get(H),kt=A.state.lights;if(He===!0&&(Ve===!0||b!==se)){const lt=b===se&&H.id===Z;Ce.setState(H,b,lt)}let $e=!1;H.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==kt.state.version||ve.outputColorSpace!==me||V.isBatchedMesh&&ve.batching===!1||!V.isBatchedMesh&&ve.batching===!0||V.isBatchedMesh&&ve.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&ve.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&ve.instancing===!1||!V.isInstancedMesh&&ve.instancing===!0||V.isSkinnedMesh&&ve.skinning===!1||!V.isSkinnedMesh&&ve.skinning===!0||V.isInstancedMesh&&ve.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ve.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ve.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ve.instancingMorph===!1&&V.morphTexture!==null||ve.envMap!==Ae||H.fog===!0&&ve.fog!==ge||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Ce.numPlanes||ve.numIntersection!==Ce.numIntersection)||ve.vertexAlphas!==Oe||ve.vertexTangents!==ke||ve.morphTargets!==Re||ve.morphNormals!==it||ve.morphColors!==_t||ve.toneMapping!==gt||ve.morphTargetsCount!==Ct||!!ve.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,ve.__version=H.version);let Yt=ve.currentProgram;$e===!0&&(Yt=ys(H,O,V),C&&H.isNodeMaterial&&C.onUpdateProgram(H,Yt,ve));let ln=!1,Dn=!1,pi=!1;const at=Yt.getUniforms(),xt=ve.uniforms;if(v.useProgram(Yt.program)&&(ln=!0,Dn=!0,pi=!0),H.id!==Z&&(Z=H.id,Dn=!0),ve.needsLights){const lt=nf(A.state.lightProbeGridArray,V);ve.lightProbeGrid!==lt&&(ve.lightProbeGrid=lt,Dn=!0)}if(ln||se!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),at.setValue(U,"projectionMatrix",b.projectionMatrix),at.setValue(U,"viewMatrix",b.matrixWorldInverse);const Un=at.map.cameraPosition;Un!==void 0&&Un.setValue(U,pt.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&at.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&at.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),se!==b&&(se=b,Dn=!0,pi=!0)}if(ve.needsLights&&(kt.state.directionalShadowMap.length>0&&at.setValue(U,"directionalShadowMap",kt.state.directionalShadowMap,$),kt.state.spotShadowMap.length>0&&at.setValue(U,"spotShadowMap",kt.state.spotShadowMap,$),kt.state.pointShadowMap.length>0&&at.setValue(U,"pointShadowMap",kt.state.pointShadowMap,$)),V.isSkinnedMesh){at.setOptional(U,V,"bindMatrix"),at.setOptional(U,V,"bindMatrixInverse");const lt=V.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),at.setValue(U,"boneTexture",lt.boneTexture,$))}V.isBatchedMesh&&(at.setOptional(U,V,"batchingTexture"),at.setValue(U,"batchingTexture",V._matricesTexture,$),at.setOptional(U,V,"batchingIdTexture"),at.setValue(U,"batchingIdTexture",V._indirectTexture,$),at.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&at.setValue(U,"batchingColorTexture",V._colorsTexture,$));const Ln=X.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&N.update(V,X,Yt),(Dn||ve.receiveShadow!==V.receiveShadow)&&(ve.receiveShadow=V.receiveShadow,at.setValue(U,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(xt.envMapIntensity.value=O.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=Fg()),Dn){if(at.setValue(U,"toneMappingExposure",M.toneMappingExposure),ve.needsLights&&rf(xt,pi),ge&&H.fog===!0&&Te.refreshFogUniforms(xt,ge),Te.refreshMaterialUniforms(xt,H,ee,ie,A.state.transmissionRenderTarget[b.id]),ve.needsLights&&ve.lightProbeGrid){const lt=ve.lightProbeGrid;xt.probesSH.value=lt.texture,xt.probesMin.value.copy(lt.boundingBox.min),xt.probesMax.value.copy(lt.boundingBox.max),xt.probesResolution.value.copy(lt.resolution)}sr.upload(U,el(ve),xt,$)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(sr.upload(U,el(ve),xt,$),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&at.setValue(U,"center",V.center),at.setValue(U,"modelViewMatrix",V.modelViewMatrix),at.setValue(U,"normalMatrix",V.normalMatrix),at.setValue(U,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const lt=H.uniformsGroups;for(let Un=0,mi=lt.length;Un<mi;Un++){const nl=lt[Un];te.update(nl,Yt),te.bind(nl,Yt)}}return Yt}function rf(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function af(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(b,O,X){const H=W.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=O,W.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const X=W.get(b);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,X=0){Y=b,z=O,B=X;let H=null,V=!1,ge=!1;if(b){const me=W.get(b);if(me.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,me.__webglFramebuffer),ne.copy(b.viewport),oe.copy(b.scissor),De=b.scissorTest,v.viewport(ne),v.scissor(oe),v.setScissorTest(De),Z=-1;return}else if(me.__webglFramebuffer===void 0)$.setupRenderTarget(b);else if(me.__hasExternalTextures)$.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Oe=b.depthTexture;if(me.__boundDepthTexture!==Oe){if(Oe!==null&&W.has(Oe)&&(b.width!==Oe.image.width||b.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(b)}}const Ee=b.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);const Ae=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ae[O])?H=Ae[O][X]:H=Ae[O],V=!0):b.samples>0&&$.useMultisampledRTT(b)===!1?H=W.get(b).__webglMultisampledFramebuffer:Array.isArray(Ae)?H=Ae[X]:H=Ae,ne.copy(b.viewport),oe.copy(b.scissor),De=b.scissorTest}else ne.copy(be).multiplyScalar(ee).floor(),oe.copy(Ye).multiplyScalar(ee).floor(),De=Be;if(X!==0&&(H=D),v.bindFramebuffer(U.FRAMEBUFFER,H)&&v.drawBuffers(b,H),v.viewport(ne),v.scissor(oe),v.setScissorTest(De),V){const me=W.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,me.__webglTexture,X)}else if(ge){const me=O;for(let Ee=0;Ee<b.textures.length;Ee++){const Ae=W.get(b.textures[Ee]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,X,me)}}else if(b!==null&&X!==0){const me=W.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,me.__webglTexture,X)}Z=-1},this.readRenderTargetPixels=function(b,O,X,H,V,ge,Me,me=0){if(!(b&&b.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){v.bindFramebuffer(U.FRAMEBUFFER,Ee);try{const Ae=b.textures[me],Oe=Ae.format,ke=Ae.type;if(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+me),!P.textureFormatReadable(Oe)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(ke)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-H&&X>=0&&X<=b.height-V&&U.readPixels(O,X,H,V,ue.convert(Oe),ue.convert(ke),ge)}finally{const Ae=Y!==null?W.get(Y).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(b,O,X,H,V,ge,Me,me=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee)if(O>=0&&O<=b.width-H&&X>=0&&X<=b.height-V){v.bindFramebuffer(U.FRAMEBUFFER,Ee);const Ae=b.textures[me],Oe=Ae.format,ke=Ae.type;if(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+me),!P.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Re),U.bufferData(U.PIXEL_PACK_BUFFER,ge.byteLength,U.STREAM_READ),U.readPixels(O,X,H,V,ue.convert(Oe),ue.convert(ke),0);const it=Y!==null?W.get(Y).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,it);const _t=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Zf(U,_t,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Re),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ge),U.deleteBuffer(Re),U.deleteSync(_t),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,X=0){const H=Math.pow(2,-X),V=Math.floor(b.image.width*H),ge=Math.floor(b.image.height*H),Me=O!==null?O.x:0,me=O!==null?O.y:0;$.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Me,me,V,ge),v.unbindTexture()},this.copyTextureToTexture=function(b,O,X=null,H=null,V=0,ge=0){let Me,me,Ee,Ae,Oe,ke,Re,it,_t;const gt=b.isCompressedTexture?b.mipmaps[ge]:b.image;if(X!==null)Me=X.max.x-X.min.x,me=X.max.y-X.min.y,Ee=X.isBox3?X.max.z-X.min.z:1,Ae=X.min.x,Oe=X.min.y,ke=X.isBox3?X.min.z:0;else{const xt=Math.pow(2,-V);Me=Math.floor(gt.width*xt),me=Math.floor(gt.height*xt),b.isDataArrayTexture?Ee=gt.depth:b.isData3DTexture?Ee=Math.floor(gt.depth*xt):Ee=1,Ae=0,Oe=0,ke=0}H!==null?(Re=H.x,it=H.y,_t=H.z):(Re=0,it=0,_t=0);const rt=ue.convert(O.format),Ct=ue.convert(O.type);let ve;O.isData3DTexture?($.setTexture3D(O,0),ve=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?($.setTexture2DArray(O,0),ve=U.TEXTURE_2D_ARRAY):($.setTexture2D(O,0),ve=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const kt=v.getParameter(U.UNPACK_ROW_LENGTH),$e=v.getParameter(U.UNPACK_IMAGE_HEIGHT),Yt=v.getParameter(U.UNPACK_SKIP_PIXELS),ln=v.getParameter(U.UNPACK_SKIP_ROWS),Dn=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,gt.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Ae),v.pixelStorei(U.UNPACK_SKIP_ROWS,Oe),v.pixelStorei(U.UNPACK_SKIP_IMAGES,ke);const pi=b.isDataArrayTexture||b.isData3DTexture,at=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const xt=W.get(b),Ln=W.get(O),lt=W.get(xt.__renderTarget),Un=W.get(Ln.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,lt.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let mi=0;mi<Ee;mi++)pi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(b).__webglTexture,V,ke+mi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(O).__webglTexture,ge,_t+mi)),U.blitFramebuffer(Ae,Oe,Me,me,Re,it,Me,me,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||W.has(b)){const xt=W.get(b),Ln=W.get(O);v.bindFramebuffer(U.READ_FRAMEBUFFER,G),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,L);for(let lt=0;lt<Ee;lt++)pi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.__webglTexture,V,ke+lt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xt.__webglTexture,V),at?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ln.__webglTexture,ge,_t+lt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ln.__webglTexture,ge),V!==0?U.blitFramebuffer(Ae,Oe,Me,me,Re,it,Me,me,U.COLOR_BUFFER_BIT,U.NEAREST):at?U.copyTexSubImage3D(ve,ge,Re,it,_t+lt,Ae,Oe,Me,me):U.copyTexSubImage2D(ve,ge,Re,it,Ae,Oe,Me,me);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else at?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(ve,ge,Re,it,_t,Me,me,Ee,rt,Ct,gt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(ve,ge,Re,it,_t,Me,me,Ee,rt,gt.data):U.texSubImage3D(ve,ge,Re,it,_t,Me,me,Ee,rt,Ct,gt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ge,Re,it,Me,me,rt,Ct,gt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ge,Re,it,gt.width,gt.height,rt,gt.data):U.texSubImage2D(U.TEXTURE_2D,ge,Re,it,Me,me,rt,Ct,gt);v.pixelStorei(U.UNPACK_ROW_LENGTH,kt),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,$e),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Yt),v.pixelStorei(U.UNPACK_SKIP_ROWS,ln),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Dn),ge===0&&O.generateMipmaps&&U.generateMipmap(ve),v.unbindTexture()},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&$.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$.setTextureCube(b,0):b.isData3DTexture?$.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$.setTexture2DArray(b,0):$.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){z=0,B=0,Y=null,v.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const sh="0.1.0",rh="goblin",ah="ゴブリン",oh={s:.088,pal:{s:"#6a9a4a",S:"#577f3c",e:"#ff5a5a",k:"#4a3520",b:"#2e2418",p:"#39412e",w:"#7a5a32",W:"#54401f",t:"#e8e0d0",a:"#c23b2e"},layers:[["...........","...........","..kk...kk..","..kk...kk..","...........","..........."],["...........","...........","..pp...pp..","..pp...pp..","...........","..........."],["...........","...........","..pp...pp..","..pp...pp..","...........","..........."],["...........","...........","..ppppppp..","..ppppppp..","...........","..........."],["...........","...........","..bbbbbbb..","..bbbbbbb..","...........","..........."],["...........","..sssssss..","s.sssssss.w","..sssssss..","...........","..........."],["...........","..sssssss..","s.sssssss.w","..sssssss..","...........","..........."],["...........","..sssssss..","ssssssssssw","..sssssss..","...........","..........."],["...........","...........","....sss...w","....sss....","....t.t....","..........."],["...........","...sssss..W",".sssssssssW","...sssss...","....e.e....","..........."],["...........","..aaaaaa..W","..aaaaaaa.W","...aaaaa...","....b.b....","..........."],["...........","...........","....sss....","....SSS....","...........","..........."]]},lh=[],ch="2026-07-03T13:55:06Z",hh="2026-07-03T14:02:24Z",Bg={formatVersion:sh,id:rh,name:ah,vox:oh,glow:lh,createdAt:ch,updatedAt:hh},zg=Object.freeze(Object.defineProperty({__proto__:null,createdAt:ch,default:Bg,formatVersion:sh,glow:lh,id:rh,name:ah,updatedAt:hh,vox:oh},Symbol.toStringTag,{value:"Module"})),fh="0.1.0",uh="comduct-models",dh="2026-07-03T14:02:24Z",ph=["goblin"],kg={formatVersion:fh,title:uh,updatedAt:dh,modelOrder:ph},Gg=Object.freeze(Object.defineProperty({__proto__:null,default:kg,formatVersion:fh,modelOrder:ph,title:uh,updatedAt:dh},Symbol.toStringTag,{value:"Module"})),oi=i=>typeof i=="string"?i:i.id,uc=i=>i!=null&&typeof i!="string"&&(i.dim||i.taper||i.regions)?i:void 0;function mh(i,e){const t=s=>{if(typeof s=="number")return s;const r=s.startsWith("$")?s.slice(1):s,a=e==null?void 0:e[r];if(a==null)throw new Error(`パーツ ${i.id} の役割色 $${r} が palette に無い（一手D：バインドは割当/種側が持つ）`);return typeof a=="number"?a:parseInt(a.replace("#",""),16)},n={};for(const[s,r]of Object.entries(i.pal))n[s]=t(r);return{pal:n,glow:(i.glow??[]).map(t)}}const mr=new Map;function gh(i){mr.clear();for(const e of i)mr.set(e.id,e);Ni.clear()}function ps(i){return mr.get(i)??_h[i]}const gr={humanoid:{id:"humanoid",gait:"small",s:.03,base:"torso",slots:{torso:{cell:[0,0,0]},head:{cell:[0,21,0]},helm:{cell:[0,28,0]},weapon:{cell:[16,6,3]},shield:{cell:[-16,9,3]},back:{cell:[0,12,-8]},armR:{cell:[17,21,0]},armL:{cell:[-17,21,0]}}}},Kt=(i,e,t,n,s)=>({id:i,slot:e,k:3,pal:t,layers:n,glow:s}),_h={"goblin-head":Kt("goblin-head","head",{s:6986314,S:5734204,e:16734810},[[".......",".sssss.",".sssss.","......."],[".......",".sssss.",".sssss.","..e.e.."],[".......","..sss..","..SSS..","......."]],[16734810]),"goblin-torso":{...Kt("goblin-torso","torso",{s:6986314,p:3752238,b:3023896,k:4863264},[[".........","..kk.kk..","..kk.kk..","........."],[".........","..pp.pp..","..pp.pp..","........."],[".........","..pp.pp..","..pp.pp..","........."],[".........","..bbbbb..","..bbbbb..","........."],[".........",".sssssss.",".sssssss.","........."],[".........","sssssssss","sssssssss","........."],[".........",".sssssss.",".sssssss.","........."]]),params:{body:[50,200],dim:{w:[15,40],h:[12,40],d:[6,24]},taper:{tip:[60,160],base:[60,160],mid:[60,160]}}},club:Kt("club","weapon",{w:8018482,W:6965800},[[".w."],[".w."],[".w."],["WWW"],["WWW"]]),sword:Kt("sword","weapon",{g:4863264,G:13938487,c:12765910,t:15331320},[[".g."],["GGG"],[".c."],[".c."],[".c."],[".c."],[".t."]]),buckler:Kt("buckler","shield",{w:8018482,m:9081764},[["www","..."],["www",".m."],["www","..."]]),"kobold-head":Kt("kobold-head","head",{y:11571296,Y:9072456,e:16734810,n:5915952},[[".......",".yyyyy.",".yyyyy.","......."],[".......",".yyyyy.","yyyyyyy","..nn..."],[".......",".yyyyy.",".eyeye.","......."],[".......","..YYY..","..YYY..","......."]],[16734810]),"imp-head":Kt("imp-head","head",{r:9058874,R:7220782,k:2761760,o:16756794},[[".......",".rrrrr.",".rrrrr.","......."],["k.....k",".rrrrr.",".roror.","......."],[".......","..RRR..","..RRR..","......."]],[16756794]),"grunt-torso":{...Kt("grunt-torso","torso",{p:"$primary",P:"$secondary",b:3023896,k:4863264},[[".........","..kk.kk..","..kk.kk..","........."],[".........","..PP.PP..","..PP.PP..","........."],[".........","..PP.PP..","..PP.PP..","........."],[".........","..bbbbb..","..bbbbb..","........."],[".........",".ppppppp.",".ppppppp.","........."],[".........","ppppppppp","ppppppppp","........."],[".........","ppppppppp","ppppppppp","........."]]),params:{body:[50,200],dim:{w:[15,40],h:[12,40],d:[6,24]},taper:{tip:[60,160],base:[60,160],mid:[60,160]},palette:["primary","secondary"]}},"iron-helm":Kt("iron-helm","helm",{i:9081764,I:6976387},[[".......",".iiiii.",".iiiii.","......."],[".......",".iiiii.","i.i.i.i","......."],[".......","..III..","..III..","......."]]),"horn-helm":Kt("horn-helm","helm",{i:9081764,I:6976387,h:15261124},[[".......",".iiiii.",".iiiii.","......."],[".......","hiiiiih",".iiiii.","......."],[".......","..III..","..III..","......."]]),spear:Kt("spear","weapon",{w:8018482,c:12765910,t:15331320},[[".w."],[".w."],[".w."],[".w."],[".w."],[".w."],[".c."],[".t."]]),"round-shield":Kt("round-shield","shield",{w:8018482,i:9081764,r:13938487},[[".iii.","....."],["iwwwi","....."],["iwwwi","..r.."],["iwwwi","....."],[".iii.","....."]]),"brute-arm":{id:"brute-arm",slot:"arm",k:3,pal:{s:"$primary",n:4863264},layers:[["nnn","nnn"],[".s.",".s."],[".s.",".s."],[".s.",".s."],["sss",".s."]],gaitTag:"arm",params:{dim:{w:[6,18],h:[9,24],d:[3,12]},taper:{tip:[80,250],base:[60,160],mid:[60,200]},align:"top",palette:["primary"]}},"tattered-wings":{id:"tattered-wings",slot:"back",k:3,pal:{m:4860474,b:6965818},layers:[["bb.......bb","..........."],["mmm.....mmm","mm.......mm"],["mmmm...mmmm","mmm.....mmm"],[".mm.....mm.",".m.......m."]],gaitTag:"wing"}},gs={"part-goblin":{rig:"humanoid",assign:{torso:"goblin-torso",head:"goblin-head",weapon:"club"}},"part-goblin-guard":{rig:"humanoid",assign:{torso:"grunt-torso",head:"goblin-head",helm:"iron-helm",weapon:"sword",shield:"round-shield"},palette:{primary:6986314,secondary:5734204}},"part-kobold":{rig:"humanoid",assign:{torso:"grunt-torso",head:"kobold-head",weapon:"spear"},palette:{primary:11571296,secondary:9072456}},"part-hobgoblin":{rig:"humanoid",assign:{torso:"grunt-torso",head:"goblin-head",helm:"horn-helm",weapon:"club"},palette:{primary:11557434,secondary:9062958}},"part-imp":{rig:"humanoid",assign:{torso:"grunt-torso",head:"imp-head",back:"tattered-wings"},palette:{primary:9058874,secondary:7220782}},"part-troll":{rig:"humanoid",assign:{torso:{id:"grunt-torso",dim:{w:33,h:25}},head:"goblin-head",armR:{id:"brute-arm",dim:{w:12},taper:{tip:170}},armL:{id:"brute-arm",dim:{w:12},taper:{tip:170}},weapon:"club"},palette:{primary:8030794,secondary:6254140},body:135}};function zi(i){const e=i==null?void 0:i.modelRef;return e!=null&&typeof e=="object"&&typeof e.rig=="string"||typeof e=="string"&&!!gs[e]}function xh(i){var n;const e=i==null?void 0:i.modelRef,t=e!=null&&typeof e=="object"?e.rig:typeof e=="string"?(n=gs[e])==null?void 0:n.rig:void 0;return t?gr[t]:void 0}function Fo(i){var t;const e=(()=>{if(typeof i!="string"){const s=gr[i.rig];if(!s)throw new Error(`リグ ${i.rig} が辞書に無い（リグ=ルール側＝作者は選ぶだけ・新リグ型は engine 更新）`);return{rig:s,assign:{...i.parts},palette:i.palette,body:i.body}}const n=gs[i];if(!n)throw new Error(`合成生物 ${i} が台帳に無い`);return{rig:gr[n.rig],assign:{...n.assign},palette:n.palette,body:n.body}})();if(e.body!=null){if(!Number.isInteger(e.body)||e.body<25||e.body>400)throw new Error(`body=${e.body} が整数 25..400 でない（全身%は整数）`);const n=e.rig.base?e.assign[e.rig.base]:void 0,s=n?ps(oi(n)):void 0,r=(t=s==null?void 0:s.params)==null?void 0:t.body;if(r&&(e.body<r[0]||e.body>r[1]))throw new Error(`body=${e.body} が部品 ${s.id} の宣言範囲 [${r}] の外（範囲は部品が宣言＝silhouette の柵）`)}return e}function vh(i,e){const t={...i},n=qi(e==null?void 0:e.weapon);n&&(t.weapon=n.sil==="sword"||n.sil==="greatsword"||n.sil==="dagger"?"sword":n.sil==="halberd"||n.sil==="staff"?"spear":"club");const s=ms(e==null?void 0:e.armor);return(s==null?void 0:s.tier)==="shield"&&(t.shield="buckler"),t}function Mh(i,e){if(i==null||e==null||!Number.isFinite(i)||!Number.isFinite(e)||e<=0)return"full";const t=i/e;return t>2/3?"full":t>1/3?"hurt":"grave"}function Sh(i,e){if(e!=="grave")return i;const t={...i};return delete t.weapon,delete t.shield,t}function bh(i){const e=Fo(i.modelRef);return{rig:e.rig,assign:Sh(vh(e.assign,i.equipment),Mh(i.hp,i.hpMax)),palette:e.palette,body:e.body}}const yh=i=>{if(typeof i=="string")return i;let e=i.id;return i.dim&&(e+=`|d${i.dim.w??""}x${i.dim.h??""}x${i.dim.d??""}`),i.taper&&(e+=`|t${i.taper.base??""}:${i.taper.mid??""}:${i.taper.tip??""}`),i.regions&&(e+="|r"+Object.keys(i.regions).sort().map(t=>`${t}=${i.regions[t]}`).join(",")),i.bind&&(e+="|b"+Object.keys(i.bind).sort().map(t=>`${t}=${i.bind[t]}`).join(",")),e};function Eh(i,e,t){const n=t?"|"+Object.keys(t).sort().map(s=>`${s}=${t[s]}`).join(","):"";return`p:${i}:`+Object.keys(e).sort().map(s=>`${s}=${yh(e[s])}`).join(",")+n}const En=(i,e)=>Math.floor(i/e),li=(i,e)=>{const t=i<0?-1:1,n=t*i;return t*En(2*n+e,2*e)},ma=(i,e,t,n)=>i+li((e-i)*t,n);function ei(i,e,t,n){if(t!=null){if(!Number.isInteger(t))throw new Error(`パーツ ${i} の ${e}=${t} が整数でない（param は全部 s\\* セル/%の整数）`);if(!n)throw new Error(`パーツ ${i} は ${e} を宣言していない（ノブは部品職人が params で開く）`);if(t<n[0]||t>n[1])throw new Error(`パーツ ${i} の ${e}=${t} が宣言範囲 [${n[0]},${n[1]}] の外（silhouette の柵）`)}}function wh(i){let e=0,t=0;for(const n of i.layers){t=Math.max(t,n.length);for(const s of n)for(let r=0;r<s.length;r++)i.pal[s[r]]!=null&&(e=Math.max(e,r+1))}return{W:e*i.k,H:i.layers.length*i.k,D:t*i.k}}function co(i,e,t,n){const{cells:s,w:r,d:a}=Tr({pal:e,layers:i.layers}),o=i.k>1?Ar(s,i.k):s,l=i.layers.length;return t?Hg(i,o,s,r,a,r*i.k,l*i.k,a*i.k,t,n):{cells:o,auth:s,w:r,d:a,W:r*i.k,H:l*i.k,D:a*i.k}}function Hg(i,e,t,n,s,r,a,o,l,c){var w,M,E,C,D,G,L,z,B,Y,Z,se,ne,oe,De,Ze,Ge,q,ie,ee;const u=i.params??{};ei(i.id,"dim.w",(w=l.dim)==null?void 0:w.w,(M=u.dim)==null?void 0:M.w),ei(i.id,"dim.h",(E=l.dim)==null?void 0:E.h,(C=u.dim)==null?void 0:C.h),ei(i.id,"dim.d",(D=l.dim)==null?void 0:D.d,(G=u.dim)==null?void 0:G.d),ei(i.id,"taper.tip",(L=l.taper)==null?void 0:L.tip,(z=u.taper)==null?void 0:z.tip),ei(i.id,"taper.base",(B=l.taper)==null?void 0:B.base,(Y=u.taper)==null?void 0:Y.base),ei(i.id,"taper.mid",(Z=l.taper)==null?void 0:Z.mid,(se=u.taper)==null?void 0:se.mid);for(const ae of Object.keys(l.regions??{}))if(ei(i.id,`regions.${ae}`,l.regions[ae],(ne=u.regions)==null?void 0:ne[ae]),!((oe=i.regions)!=null&&oe[ae]))throw new Error(`パーツ ${i.id} の領域 ${ae} に幾何宣言（regions.${ae}.y）が無い`);const f=((De=l.dim)==null?void 0:De.w)??r,h=((Ze=l.dim)==null?void 0:Ze.h)??a,d=((Ge=l.dim)==null?void 0:Ge.d)??o,m=u.align??"bottom",_=((q=l.taper)==null?void 0:q.base)??100,g=((ie=l.taper)==null?void 0:ie.tip)??100,p=(ee=l.taper)==null?void 0:ee.mid,y=Math.max(1,h-1),T=[];let S=0,R=0;for(let ae=0;ae<h;ae++){const Se=En(ae*a,h),be=m==="top"?h-1-ae:ae;let Ye=p==null?ma(_,g,be,y):2*be<=y?ma(_,p,2*be,y):ma(p,g,2*be-y,y);if(l.regions)for(const[He,Ve]of Object.entries(l.regions)){const tt=i.regions[He].y;Se>=tt[0]*i.k&&Se<(tt[1]+1)*i.k&&(Ye=li(Ye*Ve,100))}const Be=Math.max(1,li(f*Ye,100)),Ke=Math.max(1,li(d*Ye,100));S=Math.max(S,Be),R=Math.max(R,Ke),T.push({srcJ:Se,wj:Be,dj:Ke})}const A=new Map,I=new Map;for(let ae=0;ae<h;ae++){const{srcJ:Se,wj:be,dj:Ye}=T[ae],Be=En(S-be,2),Ke=En(R-Ye,2);for(let He=0;He<be;He++){const Ve=En(He*r,be);for(let tt=0;tt<Ye;tt++){const pt=En(tt*o,Ye),ct=e.get(At(Ve,Se,pt));if(ct==null)continue;const ft=Be+He,nt=Ke+tt;if(A.set(At(ft,ae,nt),ct),c!=null&&c.has(ct)){const ut=En(Ve,i.k)+","+En(Se,i.k)+","+En(pt,i.k)+"|"+ct,U=I.get(ut);U?(U.x0=Math.min(U.x0,ft),U.x1=Math.max(U.x1,ft),U.y0=Math.min(U.y0,ae),U.y1=Math.max(U.y1,ae),U.z0=Math.min(U.z0,nt),U.z1=Math.max(U.z1,nt)):I.set(ut,{x0:ft,x1:ft,y0:ae,y1:ae,z0:nt,z1:nt,c:ct})}}}}const x=[...I.entries()].sort((ae,Se)=>ae[0]<Se[0]?-1:1).map(([,ae])=>ae);return{cells:A,auth:t,w:n,d:s,W:S,H:h,D:R,glowBoxes:x}}const Ni=new Map;function Vg(i,e,t,n,s){if(!s)return co(i,e,t,n);const r=i.id+"|k"+i.k+"|p"+Object.keys(e).sort().map(o=>o+"="+e[o]).join(",")+"|g"+(n?[...n].sort((o,l)=>o-l).join(","):"")+(t?"|"+yh(t):"");let a=Ni.get(r);return a||(Ni.size>512&&Ni.clear(),a=co(i,e,t,n),Ni.set(r,a)),a}function Th(i,e,t="bottom"){const n=i.slots[e];if(!n)throw new Error(`リグ ${i.id} にスロット ${e} が無い（リグ=ルール側＝作者は選ぶだけ）`);return{cell:n.cell,align:t==="top"?"top-center":"bottom-center"}}function Ah(i,e,t,n){var d;const s=new Map,r=[],a=[],o=i.base?uc(e[i.base]):void 0;let l=null;if(o!=null&&o.dim&&i.base){const m=t?t[o.id]:ps(o.id);if(!m)throw new Error(`パーツ ${o.id} が棚に無い`);const _=wh(m);l={n:[o.dim.w??_.W,o.dim.h??_.H,o.dim.d??_.D],d:[_.W,_.H,_.D]}}for(const m of Object.keys(e).sort()){const _=e[m],g=t?t[oi(_)]:ps(oi(_));if(!g)throw new Error(`パーツ ${oi(_)} が棚に無い`);const p=Th(i,m,(d=g.params)==null?void 0:d.align);if(!Number.isInteger(g.k)||g.k<1||g.k>4)throw new Error(`パーツ ${g.id} の k=${g.k} が整数 1..4 でない（一手A：格子の橋は整数 upres だけ）`);const y=typeof _!="string"&&_.bind?{...n,..._.bind}:n,T=mh(g,y),S=uc(_),R=Vg(g,T.pal,S,S&&T.glow.length?new Set(T.glow):void 0,!t),A=l?[li(p.cell[0]*l.n[0],l.d[0]),li(p.cell[1]*l.n[1],l.d[1]),li(p.cell[2]*l.n[2],l.d[2])]:p.cell,I=A[0]-Math.floor(R.W/2),x=p.align==="top-center"?A[1]-R.H:A[1],w=A[2]-Math.floor(R.D/2);let M=1/0,E=-1/0,C=1/0,D=-1/0,G=1/0,L=-1/0;for(const[z,B]of R.cells){const[Y,Z,se]=z.split(",").map(Number),ne=Y+I,oe=Z+x,De=se+w;s.set(At(ne,oe,De),B),g.gaitTag&&(M=Math.min(M,ne),E=Math.max(E,ne+1),C=Math.min(C,oe),D=Math.max(D,oe+1),G=Math.min(G,De),L=Math.max(L,De+1))}if(g.gaitTag&&M<1/0&&a.push({tag:g.gaitTag,x0:M*i.s,x1:E*i.s,y0:C*i.s,y1:D*i.s,z0:G*i.s,z1:L*i.s}),T.glow.length)if(S)for(const z of R.glowBoxes??[])r.push({x:((z.x0+z.x1+1)/2+I)*i.s,y:((z.y0+z.y1+1)/2+x)*i.s,z:((z.z0+z.z1+1)/2+w)*i.s,sx:i.s*(z.x1-z.x0+1)*1.5,sy:i.s*(z.y1-z.y0+1)*1.5,sz:i.s*(z.z1-z.z0+1)*1.5,c:z.c});else{const z=new Set(T.glow),B=i.s*g.k*1.5;for(const[Y,Z]of R.auth){if(!z.has(Z))continue;const[se,ne,oe]=Y.split(",").map(Number);r.push({x:((se+.5)*g.k+I)*i.s,y:((ne+.5)*g.k+x)*i.s,z:((oe+.5)*g.k+w)*i.s,sx:B,sy:B,sz:B,c:Z})}}}const c={pos:[],nrm:[],col:[],idx:[]};xs(c,s,i.s,0,0,0,.055);const u=_s(c),f=Vn[i.gait]??Vn.biped,h=Pr(u,f);if(a.length){const m=i.s*.01,_=u.getAttribute("position"),g=u.getAttribute("aGait");for(let p=0;p<_.count;p++){const y=_.getX(p),T=_.getY(p),S=_.getZ(p);for(const R of a){if(y<R.x0-m||y>R.x1+m||T<R.y0-m||T>R.y1+m||S<R.z0-m||S>R.z1+m)continue;const A=dc(R.tag,y,T,R.y0,R.y1,h.H);g.setXYZ(p,A[0],A[1],A[2])}}g.needsUpdate=!0}for(const m of r){m.gw=Ss(m.x,m.y,m.z,h,f);for(const _ of a)m.x>=_.x0&&m.x<=_.x1&&m.y>=_.y0&&m.y<=_.y1&&m.z>=_.z0&&m.z<=_.z1&&(m.gw=dc(_.tag,m.x,m.y,_.y0,_.y1,h.H))}return{geo:u,spots:r}}function dc(i,e,t,n,s,r){const a=(e>=0?1:-1)*Math.min(1,Math.abs(e)/.06),o=Math.min(1,Math.max(0,t/Math.max(1e-6,r)));return i==="rigid"?[0,0,0]:i==="arm"?[0,-a,o]:i==="leg"?[a*(1-Math.min(1,Math.max(0,(t-n)/Math.max(1e-6,s-n)))),0,o]:i==="wing"?[0,1,o]:[0,0,1.6]}function Wg(i){return i.kind==="hero"||i.kind==="ally"?{key:Ho(i),...Go(i)}:zi(i)?Er(i):{key:`m:${i.modelRef}`,...Rr(String(i.modelRef??""))}}function Er(i){const{rig:e,assign:t,palette:n}=bh(i),s=Eh(e.id,t,n);let r=ho.get(s);return r||(r=Ah(e,t,void 0,n),ho.set(s,r)),{key:s,...r}}const ho=new Map;function Rh(){ho.clear(),Ni.clear()}function fo(i){var n;const e=i==null?void 0:i.modelRef,t=e!=null&&typeof e=="object"?e.body:typeof e=="string"?(n=gs[e])==null?void 0:n.body:void 0;return typeof t=="number"?t:100}function Xg(i){let e=2166136261;const t=s=>{for(let r=0;r<s.length;r++)e^=s[r],e=Math.imul(e,16777619)>>>0};for(const s of["position","normal","color"]){const r=i.getAttribute(s);r&&t(new Uint8Array(r.array.buffer,r.array.byteOffset,r.array.byteLength))}const n=i.getIndex();return n&&t(new Uint8Array(n.array.buffer,n.array.byteOffset,n.array.byteLength)),e.toString(16).padStart(8,"0")}function Ch(i,e,t,n){const s=o=>typeof o=="number"?o:(()=>{const l=o.startsWith("$")?o.slice(1):o,c=n==null?void 0:n[l];return c==null?9081764:typeof c=="number"?c:parseInt(c.replace("#",""),16)})(),r={};for(const[o,l]of Object.entries(i.pal))r[o]="#"+s(l).toString(16).padStart(6,"0");const a=new Set(Object.values(r));return ff.parse({formatVersion:uf,id:i.id,name:i.id,vox:{s:e.s*i.k,pal:r,layers:i.layers.map(o=>o.slice())},glow:(i.glow??[]).map(o=>"#"+s(o).toString(16).padStart(6,"0")).filter(o=>a.has(o)),createdAt:t,updatedAt:t})}function Ph(i,e,t){const n={};for(const[s,r]of Object.entries(i.vox.pal))n[s]=parseInt(r.slice(1),16);return{id:i.id,slot:e,k:t,pal:n,layers:i.vox.layers.map(s=>s.slice()),glow:i.glow.map(s=>parseInt(s.slice(1),16))}}function qg(i,e){const{rig:t,assign:n,palette:s}=Fo(i);return Object.keys(n).sort().map(r=>{const a=ps(oi(n[r]));if(!a)throw new Error(`パーツ ${oi(n[r])}（slot=${r}）が棚に無い`);return{slot:r,partId:a.id,k:a.k,model:Ch(a,t,e,s)}})}function Yg(i,e,t,n){const s=Ph(i,e,t);return n&&(s.gaitTag=n),mr.set(s.id,s),Rh(),s}if(typeof document<"u")try{const i=Object.assign({}),e=[];for(const t of Object.keys(i).sort())if(!t.endsWith("manifest.json"))try{e.push(cf(hf(i[t].default??i[t])))}catch(n){console.warn(`部品化③ truth パーツ ${t} の読込に失敗（このパーツは skip・組込棚が受ける）`,n)}e.length&&gh(e)}catch(i){console.warn("部品化③ truth パーツの読込に失敗（組込棚で継続）",i)}const f_=Object.freeze(Object.defineProperty({__proto__:null,PART_CREATURES:gs,PART_RIGS:gr,PART_SHELF:_h,_clearPartCache:Rh,_setPartLib:gh,anchorOf:Th,applyPartEdit:Yg,assembleBody:Wg,assembleMonolithic:Rr,assemblePartsBody:Ah,assemblePartsFor:Er,assignKey:Eh,assignOf:bh,baseAssign:Fo,equipAssign:vh,hashGeo:Xg,hpBand:Mh,isPartsActor:zi,modelFromPart:Ch,partCellsOnGrid:co,partEditTargets:qg,partFromModel:Ph,partGridDims:wh,partOf:ps,partsBodyPct:fo,partsRigOf:xh,resolvePartColors:mh,selId:oi,woundAssign:Sh},Symbol.toStringTag,{value:"Module"})),Vt=new $i(1,1,1),Dt=new Uo(.5),$g=new F(0,1,0),pc={fire:16747066,ice:10476799,earth:14198858,holy:16771496,poison:9428074},mc={fire:"#ff8a3a",ice:"#9fdcff",earth:"#d8a84a",holy:"#ffd75e",poison:"#a8e04a"},Et=1.15,wt=.5,fn=[[0,1],[0,-1],[1,0],[-1,0]],Q=(i,e)=>{const t=Math.min(255,(i>>16&255)*e)|0,n=Math.min(255,(i>>8&255)*e)|0,s=Math.min(255,(i&255)*e)|0;return t<<16|n<<8|s},Tt=(i,e,t)=>{const n=(i>>16&255)+((e>>16&255)-(i>>16&255))*t|0,s=(i>>8&255)+((e>>8&255)-(i>>8&255))*t|0,r=(i&255)+((e&255)-(i&255))*t|0;return n<<16|s<<8|r},wn={plain:{bg:1053725,fogD:.042,amb:9676232,ambI:.54,sun:16769725,sunI:.96,fill:8229565,fillI:.3,ground:1251619,floorA:4872304,floorB:6445896,floorAcc:5533770,accP:.1,crackP:.35,glowP:0,glowCol:0,wallA:8226715,wallB:9142641,wallAcc:6123860,wallAccP:.07,wallCore:2567739,water:1989278,waterDeep:863058,sparkle:6797288,torchN:19,flame:16753978,flameCore:16769146,heroCol:16761470,heroI:3.2},fire:{bg:1379336,fogD:.05,amb:12617315,ambI:.5,sun:16763030,sunI:.88,fill:10241318,fillI:.32,ground:1445386,floorA:4799540,floorB:6505269,floorAcc:9454886,accP:.13,crackP:.45,glowP:.05,glowCol:16742960,wallA:6177336,wallB:7360572,wallAcc:10242598,wallAccP:.09,wallCore:2364432,water:1989278,waterDeep:863058,sparkle:6797288,torchN:13,flame:16747066,flameCore:16765562,heroCol:16754788,heroI:3.6},ice:{bg:857376,fogD:.046,amb:10271455,ambI:.56,sun:14478591,sunI:.93,fill:5797805,fillI:.32,ground:1054757,floorA:5202813,floorB:6783130,floorAcc:11127772,accP:.14,crackP:.3,glowP:.035,glowCol:10476799,wallA:7241880,wallB:8692410,wallAcc:13822196,wallAccP:.1,wallCore:1845302,water:2779824,waterDeep:1194594,sparkle:11133695,torchN:23,flame:16753978,flameCore:16769146,heroCol:16761470,heroI:3.2},earth:{bg:1183240,fogD:.045,amb:11772548,ambI:.52,sun:16769971,sunI:.9,fill:8219212,fillI:.3,ground:1314826,floorA:5852733,floorB:7233355,floorAcc:10126152,accP:.12,crackP:.5,glowP:0,glowCol:0,wallA:8022610,wallB:9338211,wallAcc:10521676,wallAccP:.09,wallCore:2761240,water:1989278,waterDeep:863058,sparkle:6797288,torchN:17,flame:16753978,flameCore:16769146,heroCol:16761470,heroI:3.2},holy:{bg:1646381,fogD:.034,amb:13225433,ambI:.6,sun:16774106,sunI:.96,fill:10136013,fillI:.3,ground:1975345,floorA:9014165,floorB:10196875,floorAcc:12233068,accP:.07,crackP:.15,glowP:.03,glowCol:16773314,wallA:10068142,wallB:11249818,wallAcc:13022840,wallAccP:.05,wallCore:3291208,band:13022840,water:1989278,waterDeep:863058,sparkle:6797288,torchN:19,flame:16771496,flameCore:16774872,heroCol:16769196,heroI:2.8},town:{bg:1778225,fogD:.027,amb:14273206,ambI:.66,sun:16771524,sunI:1.05,fill:9413576,fillI:.3,ground:1909811,floorA:5593702,floorB:7037004,floorAcc:6057034,accP:.09,crackP:.2,glowP:0,glowCol:0,wallA:9080480,wallB:10260346,wallAcc:6123860,wallAccP:.06,wallCore:2896192,water:1989278,waterDeep:863058,sparkle:6797288,torchN:11,flame:16761194,flameCore:16772536,heroCol:16766880,heroI:2.2},interior:{bg:1314828,fogD:.02,amb:14203024,ambI:.6,sun:16768168,sunI:.8,fill:9075302,fillI:.34,ground:1511952,floorA:6968890,floorB:8021576,floorAcc:9071166,accP:.12,crackP:.12,glowP:0,glowCol:0,wallA:10128500,wallB:9075298,wallAcc:6966056,wallAccP:.1,wallCore:2760728,water:1989278,waterDeep:863058,sparkle:6797288,torchN:5,flame:16758874,flameCore:16771504,heroCol:16766880,heroI:1.8}};function Ih(i){const e=Tt(i.floorA,i.floorB,.5);return{hemiSky:i.amb,hemiGround:Q(Tt(e,i.flame,.22),.9),hemiI:i.ambI*1.08,sunCol:i.sun,sunI:i.sunI,sunPos:[30,42,24],fillCol:i.fill,fillI:i.fillI,fillPos:[-26,14,-18],actFill:Tt(i.amb,16777215,.45),actFillI:Math.max(.14,.46-i.ambI*.32),heroCol:i.heroCol,heroI:i.heroI}}const Oo={value:new Ne(.13,.15,.18)};function Dh(i,e){Oo.value.setHex(i).multiplyScalar(e)}function uo(i={}){const e=new ir({vertexColors:!0,...i}),t={value:new ht(0,0,0,0)},n={value:new Le(0,0)};return e.userData.gaitA=t,e.userData.gaitB=n,e.onBeforeCompile=s=>{s.uniforms.uCdActFill=Oo,s.uniforms.uCdGaitA=t,s.uniforms.uCdGaitB=n,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aGait;
uniform vec4 uCdGaitA;
uniform vec2 uCdGaitB;`).replace("#include <begin_vertex>",`#include <begin_vertex>
	transformed.z += uCdGaitA.x * aGait.x + uCdGaitA.y * aGait.y;
	transformed.x += uCdGaitA.w * aGait.z;
	transformed.y += uCdGaitA.z * (0.15 + 0.85 * min(abs(aGait.z), 1.0)) + uCdGaitB.x * max(0.0, uCdGaitB.y * sign(aGait.x)) * abs(aGait.x);`),s.fragmentShader=s.fragmentShader.replace("uniform vec3 diffuse;",`uniform vec3 uCdActFill;
uniform vec3 diffuse;`).replace("#include <lights_fragment_begin>",`#include <lights_fragment_begin>
	reflectedLight.indirectDiffuse += uCdActFill * BRDF_Lambert( diffuseColor.rgb ) * saturate( normal.z );`)},e.customProgramCacheKey=()=>"cd-actfill-gait",e}const wr=[{n:[1,0,0],q:[[1,-1,-1],[1,1,-1],[1,1,1],[1,-1,1]]},{n:[-1,0,0],q:[[-1,-1,1],[-1,1,1],[-1,1,-1],[-1,-1,-1]]},{n:[0,1,0],q:[[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1]]},{n:[0,-1,0],q:[[-1,-1,1],[-1,-1,-1],[1,-1,-1],[1,-1,1]]},{n:[0,0,1],q:[[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]},{n:[0,0,-1],q:[[1,-1,-1],[-1,-1,-1],[-1,1,-1],[1,1,-1]]}],hs=new Ne;function Lh(i,e,t,n,s,r,a,o,l){const c=i.pos.length/3;let u=0;for(const[f,h,d]of e.q){const m=l?l[u++]:1;i.pos.push(t+f*r,n+h*a,s+d*o),i.nrm.push(e.n[0],e.n[1],e.n[2]),i.col.push(hs.r*m,hs.g*m,hs.b*m)}i.idx.push(c,c+1,c+2,c,c+2,c+3)}function _s(i){const e=new Ot;return e.setAttribute("position",new dt(i.pos,3)),e.setAttribute("normal",new dt(i.nrm,3)),e.setAttribute("color",new dt(i.col,3)),e.setIndex(i.idx),e}const At=(i,e,t)=>i+","+e+","+t,Kg=(i,e,t)=>{let n=i*374761393+e*668265263+t*2147483647>>>0;return n^=n<<13,n^=n>>>17,n^=n<<5,n>>>0},Zg=[.58,.75,.89,1];function xs(i,e,t,n,s,r,a){const o=t/2,l=(c,u,f)=>e.has(At(c,u,f));for(const[c,u]of e){const[f,h,d]=c.split(",").map(Number);hs.setHex(a>0?Q(u,1-a+Kg(f,h,d)%97/96*2*a):u);const m=(f+.5)*t+n,_=(h+.5)*t+s,g=(d+.5)*t+r;for(const p of wr){const y=p.n[0],T=p.n[1],S=p.n[2];if(l(f+y,h+T,d+S))continue;const R=y!==0?0:T!==0?1:2,A=R===0?[1,2]:R===1?[0,2]:[0,1],I=A[0],x=A[1],w=f+y,M=h+T,E=d+S,C=p.q.map(D=>{const G=l(w+(I===0?D[0]:0),M+(I===1?D[1]:0),E+(I===2?D[2]:0)),L=l(w+(x===0?D[0]:0),M+(x===1?D[1]:0),E+(x===2?D[2]:0)),z=l(w+(R===0?0:D[0]),M+(R===1?0:D[1]),E+(R===2?0:D[2]));return Zg[G&&L?0:3-((G?1:0)+(L?1:0)+(z?1:0))]});Lh(i,p,m,_,g,o,o,o,C)}}}function Uh(i){const e=new Map;for(const[t,n]of i){const[s,r,a]=t.split(",").map(Number);let o=0,l=0,c=0,u=0;for(const f of wr)i.has(At(s+f.n[0],r+f.n[1],a+f.n[2]))&&(o++,l|=+(f.n[0]!==0),c|=+(f.n[1]!==0),u|=+(f.n[2]!==0));o===3&&l&&c&&u||e.set(t,n)}return e}function Tr(i){const e=new Map;let t=0,n=0;return i.layers.forEach((s,r)=>s.forEach((a,o)=>{n=Math.max(n,s.length);for(let l=0;l<a.length;l++){const c=i.pal[a[l]];c!=null&&(e.set(At(l,r,o),c),t=Math.max(t,l+1))}})),{cells:e,w:t,d:n}}function Ar(i,e){const t=new Map;for(const[n,s]of i){const[r,a,o]=n.split(",").map(Number);let l=0;for(const c of wr)i.has(At(r+c.n[0],a+c.n[1],o+c.n[2]))&&l++;for(let c=0;c<e;c++)for(let u=0;u<e;u++)for(let f=0;f<e;f++){if(l>=2){const h=c===0?-1:c===e-1?1:0,d=u===0?-1:u===e-1?1:0,m=f===0?-1:f===e-1?1:0;if(h&&d&&m&&!i.has(At(r+h,a,o))&&!i.has(At(r,a+d,o))&&!i.has(At(r,a,o+m)))continue}t.set(At(r*e+c,a*e+u,o*e+f),s)}}return t}function Nh(i,e=3){const{cells:t,w:n,d:s}=Tr(i),r=i.s/e,a={pos:[],nrm:[],col:[],idx:[]};return xs(a,Ar(t,e),r,-(n*i.s)/2,0,-(s*i.s)/2,.055),_s(a)}function Fh(i,e,t=.05){const n=new Map,s=[],r=Math.max(e*.9,.037);for(const o of i){if(Math.min(o.sx,o.sy,o.sz)<r){s.push(o);continue}const l=Math.max(1,Math.round(o.sx/e)),c=Math.max(1,Math.round(o.sy/e)),u=Math.max(1,Math.round(o.sz/e)),f=Math.round(o.x/e-l/2),h=Math.round(o.y/e-c/2),d=Math.round(o.z/e-u/2);for(let m=0;m<l;m++)for(let _=0;_<c;_++)for(let g=0;g<u;g++)n.set(At(f+m,h+_,d+g),o.c)}const a={pos:[],nrm:[],col:[],idx:[]};xs(a,Uh(n),e,0,0,0,t);for(const o of s){hs.setHex(o.c);for(const l of wr)Lh(a,l,o.x,o.y,o.z,o.sx/2,o.sy/2,o.sz/2)}return _s(a)}class vs{constructor(e,t=.07){xe(this,"cells",new Map);this.s=e,this.jit=t}set(e,t,n,s){this.cells.set(At(Math.round(e),Math.round(t),Math.round(n)),s)}box(e,t,n,s,r,a,o){for(let l=Math.min(e,t);l<=Math.max(e,t);l++)for(let c=Math.min(n,s);c<=Math.max(n,s);c++)for(let u=Math.min(r,a);u<=Math.max(r,a);u++)this.cells.set(At(l,c,u),o)}ell(e,t,n,s,r,a,o){for(let l=Math.floor(e-s);l<=Math.ceil(e+s);l++)for(let c=Math.floor(t-r);c<=Math.ceil(t+r);c++)for(let u=Math.floor(n-a);u<=Math.ceil(n+a);u++){const f=(l-e)/s,h=(c-t)/r,d=(u-n)/a;f*f+h*h+d*d<=1&&this.cells.set(At(l,c,u),o)}}seg(e,t,n,s,r,a,o,l,c){const u=Math.max(1,Math.round(Math.max(Math.abs(s-e),Math.abs(r-t),Math.abs(a-n))));for(let f=0;f<=u;f++){const h=f/u,d=o+(l-o)*h;this.ell(e+(s-e)*h,t+(r-t)*h,n+(a-n)*h,d,d,d,c)}}ring(e,t,n){for(let s=-Math.ceil(t)-1;s<=Math.ceil(t)+1;s++)for(let r=-Math.ceil(t)-1;r<=Math.ceil(t)+1;r++){const a=Math.sqrt(s*s+r*r);Math.abs(a-t)<=.6&&this.cells.set(At(s,e,r),n)}}}function Jg(){const i=new vs(.05,.06),e=9056806,t=6168344,n=14200952,s=15261124,r=4856340,a=9067066,o=16765514,l=16742960;i.ell(0,13,-3,11,7.5,13,e),i.ell(0,9,4,6.5,5,10,n);for(const[c,u,f]of[[0,6,12],[2,7,12],[-2,6,11],[3,6,10],[-3,7,11],[0,7,13]])i.set(c,u,f,l);for(const c of[-1,1]){i.seg(c*7,10,6,c*8,2,7,3.2,2.6,t),i.ell(c*8,2,8,3,2,3.6,t);for(const u of[-2,0,2])i.set(c*8+u,1,12,s);i.seg(c*8,10,-9,c*9,2,-10,3.4,2.8,t),i.ell(c*9,2,-8,3,2,3.6,t)}i.seg(0,16,6,0,26,13,4.6,3.4,e),i.ell(0,28,15,4.4,3.4,4.6,e),i.ell(0,26.5,19.5,2.8,2,4,e),i.box(-2,2,24,25,17,21,t),i.box(-1,1,24,25,21,21,l);for(const c of[-2,0,2])i.set(c,25,21,s);i.set(-2,28,18,o),i.set(2,28,18,o),i.set(-2,29,18,o),i.set(2,29,18,o);for(const c of[-1,1])i.seg(c*3,30,13,c*6,35,8,1.4,.7,s);for(const c of[-1,1]){i.seg(c*9,18,-4,c*19,30,-10,1.6,1,a);for(let u=0;u<=9;u++){const f=c*(10+u),h=19+u*1.2;for(let d=Math.max(10,h-7+u*.4);d<=h;d++)i.set(f,d,-8-u*.2,r)}}i.seg(0,10,-14,12,4,-19,3,1,e);for(let c=-12;c<=12;c+=2)i.set(0,20+Math.round(Math.cos(c*.2)*1.5),c<6?c:6+Math.round((c-6)*.8),s);for(let c=-10;c<=8;c+=3)i.set(0,21,c,s);return i}function Qg(){const i=new vs(.055,.06),e=10336460,t=7440542,n=14676732,s=11064552,r=6179382,a=9431295,o=15660794;for(const l of[-1,1])i.seg(l*5,14,0,l*5,2,0,3.6,3.2,e),i.box(l*5-3,l*5+3,0,5,-3,3,r);i.box(-8,8,14,18,-4,4,r),i.ell(0,26,0,9,9,6,e),i.box(-5,5,22,30,4,5,s),i.box(-2,2,20,30,5,5,n);for(const l of[-1,1])i.ell(l*10,33,0,4,3.4,4,n),i.seg(l*12,35,0,l*14,40,-2,1.4,.6,n);i.seg(-12,31,0,-13,18,2,2.6,2.2,e),i.ell(-13,15,3,3.2,3,3.2,t),i.seg(12,31,0,13,22,4,2.6,2.2,e),i.ell(13,20,5,3,2.8,3,t),i.seg(13,16,6,13,40,8,2.4,3.4,n),i.ell(13,42,8.5,3.6,3.4,3.6,s);for(const[l,c]of[[-2,40],[2,43],[0,45]])i.set(13+l,c+1,9,o);i.ell(0,37,1,4.2,4.2,4.2,e),i.box(-3,3,30,35,3,5,o),i.box(-2,2,28,30,3,4,o),i.box(-4,4,40,42,-2,3,o),i.set(-2,38,5,a),i.set(2,38,5,a),i.box(-3,3,39,39,4,5,s);for(const[l,c,u]of[[-6,30,-5],[6,31,-5],[0,33,-6]])i.seg(l,c,u,l*1.3,c+6,u-3,1.2,.4,n);return i}function jg(){const i=new vs(.055,.09),e=9078136,t=6249038,n=6916175,s=14263361,r=16734778;for(const a of[-1,1])i.seg(a*6,12,0,a*6,2,1,4.2,4.6,t);i.box(-9,9,11,15,-4,4,e),i.ell(0,24,-1,11,10,7,e),i.box(-1,1,20,28,5,6,s),i.box(-4,4,24,25,5,6,s);for(const a of[-1,1]){i.ell(a*12,30,0,5,4.4,5,e),i.seg(a*14,28,0,a*15,14,4,3.6,4,t),i.ell(a*15,7,5,5.4,6.5,5.6,t);for(const o of[-3,0,3])i.box(a*15+o-1,a*15+o+1,10,13,9,10,e)}i.box(-3,3,33,38,-2,3,e),i.set(-2,36,4,r),i.set(2,36,4,r),i.box(-4,4,38,39,-3,2,t);for(const[a,o,l]of[[-8,31,2],[9,28,-4],[-11,22,-5],[4,34,-1],[13,12,6]])i.ell(a,o,l,2,1.4,2,n);return i}function e_(){const i=new vs(.05,.05),e=14276041,t=11052180,n=13938487,s=15921126,r=13617336,a=10479871,o=15331320,l=16771496;for(let c=0;c<=14;c++){const u=8-c*.25;i.ell(0,c,0,u,1.2,u*.8,c%4===0?t:e)}i.box(-6,6,14,16,-4,4,n),i.ell(0,23,0,7,7.5,5,e),i.box(-1,1,18,27,4,5,n),i.box(-4,4,22,23,4,5,n);for(const c of[-1,1])i.ell(c*8,29,0,3.6,3,3.6,n),i.seg(c*9,26,1,c*6,18,6,2.2,1.8,e),i.ell(c*4,17,7,2,2,2,t);i.seg(0,30,7,0,10,8,1.4,.8,o),i.box(-3,3,29,30,7,8,n),i.set(0,32,7,n),i.ell(0,34,0,3.6,4,3.6,e),i.box(-2,2,33,34,3,4,1712176),i.set(-1,34,4,a),i.set(1,34,4,a),i.box(-1,1,38,40,-1,1,n),i.ring(43,5,l);for(const c of[-1,1])for(const[u,f,h]of[[13,26,-5],[9,20,-6]]){i.seg(c*4,f,h,c*(4+u),f+u*.9,h-3,1.4,.7,r);for(let d=1;d<=u;d++){const m=c*(4+d),_=f+d*.9,g=Math.max(4,9-Math.abs(d-u*.6));for(let p=_-g;p<=_;p++)i.set(m,p,h-2-d*.15,s)}}return i}function t_(){const i=new vs(.07,.09),e=5660240,t=3817528,n=13214268,s=16738874,r=14735552;i.box(-19,19,0,4,-16,16,t),i.box(-19,19,4,5,14,16,n),i.box(-19,19,4,5,-16,-14,n);for(const a of[-1,1])i.ell(a*8,8,9,7.5,4,5.5,e),i.ell(a*12,8,5,4,3.4,4,t);i.ell(0,20,0,13,12,9,e),i.ell(0,15,5,8,6,6,t);for(let a=-6;a<=6;a+=2)i.set(a,26-Math.abs(a)*.4,8,n);i.set(0,22,9,n),i.set(0,21,9,n);for(const a of[-1,1])i.ell(a*13,27,0,4.4,3.6,4,e),i.seg(a*14,28,0,a*19,38,2,2.2,1.6,e),i.ell(a*19,40,2,2.6,2.6,2.6,n),i.seg(a*14,25,1,a*21,22,6,2.2,1.6,e),i.ell(a*21,21,7,2.4,2,2.4,t),i.seg(a*13,20,3,a*11,10,10,2.2,1.8,e),i.ell(a*10,9,11,2.6,1.8,3,t);i.ell(0,34,1,6,5.5,5.5,e),i.box(-4,4,30,31,4,6,t);for(const a of[-3,-1,1,3])i.set(a,29,6,r);i.set(-2,35,6,s),i.set(2,35,6,s),i.set(0,38,6,s);for(const a of[-1,1])i.seg(a*5,38,2,a*8,43,-1,1.4,.6,n);for(let a=-4;a<=4;a+=2)i.set(a,40,3,n);return i}const po={dragon:Jg,frostgiant:Qg,colossus:jg,seraph:e_,idol:t_},_r={dragon:[16765514,16742960],frostgiant:[9431295],colossus:[16734778],seraph:[16771496,10479871],idol:[16738874],hydra:[16734810],boss:[16734810],armor:[16734810],ghostknight:[11462399],spirit:[10478591]},Bo={goblin:{s:.088,pal:{s:6986314,S:5734204,e:16734810,k:4863264,b:3023896,p:3752238,w:8018482,W:5521439,t:15261904},layers:[["...........","...........","..kk...kk..","..kk...kk..","...........","..........."],["...........","...........","..pp...pp..","..pp...pp..","...........","..........."],["...........","...........","..pp...pp..","..pp...pp..","...........","..........."],["...........","...........","..ppppppp..","..ppppppp..","...........","..........."],["...........","...........","..bbbbbbb..","..bbbbbbb..","...........","..........."],["...........","..sssssss..","s.sssssss.w","..sssssss..","...........","..........."],["...........","..sssssss..","s.sssssss.w","..sssssss..","...........","..........."],["...........","..sssssss..","ssssssssssw","..sssssss..","...........","..........."],["...........","...........","....sss...w","....sss....","....t.t....","..........."],["...........","...sssss..W",".sssssssssW","...sssss...","....e.e....","..........."],["...........","...sssss..W","..sssssss.W","...sssss...","....b.b....","..........."],["...........","...........","....sss....","....SSS....","...........","..........."]]},golem:{s:.105,pal:{g:9079426,G:6447708,m:6982232,e:16734810,c:3815990},layers:[[".............",".............","..ggg...ggg..","..ggg...ggg..","..ggg...ggg..",".............","............."],[".............",".............","..ggg...ggg..","..ggg...ggg..","..ggg...ggg..",".............","............."],[".............",".............","..GgG...GgG..","..GgG...GgG..","..GgG...GgG..",".............","............."],[".............",".............","..ggg...ggg..","..ggg...ggg..","..ggg...ggg..",".............","............."],[".............",".............","..ggggggggg..","..ggggggggg..","..ggggggggg..",".............","............."],[".............","..ggggggggg..","gg.ggggggg.gg","gg.ggggggg.gg","gg.ggggggg.gg","..gggcccggg..","............."],[".............","..ggggggggg..","gg.ggggggg.gg","gg.gggmggg.gg","gg.ggggggg.gg","..gggcccggg..","............."],[".............","..ggggggggg..","GG.ggggggg.GG","GG.ggggggg.GG","GG.ggggggg.GG",".............","............."],[".............","..ggggggggg..","ggggggggggggg","ggggggggggggg","..ggggggggg..",".............","............."],[".............",".............","....ggggg....","....ggggg....","....ggggg....",".............","............."],[".............",".............","....ggggg....","....ggggg....","....gegeg....",".............","............."],[".............",".............","....ggggg....","....ggggg....",".............",".............","............."],[".............",".............",".............",".....mgm.....",".............",".............","............."]]},djinn:{s:.1,pal:{i:8376552,I:4885176,w:15268095,e:1454666},layers:[["...........","...........","....III....","...........","..........."],["...........","...........","...IIIII...","...........","..........."],["...........","...IIIII...","..IIIIIII..","...IIIII...","..........."],["...........","..iiiiiii..",".iiiiiiiii.","..iiiiiii..","..........."],["...........","..iiiiiii..",".iiiiiiiii.","..iiiiiii..","..........."],["...........","..iiiiiii..","i.iiiiiii.i","..iiiiiii..","..........."],["...........","..iiiiiii..","w.iiiiiii.w","..iiiiiii..","..........."],["...........","..iiiiiii..","iiiiiiiiiii","..iiiiiii..","..........."],["...........","..iiiiiii..",".iiiiiiiii.","..iiiiiii..","..........."],["...........","...........","...iiiii...","...iiiii...","..........."],["...........","...........","...iiiii...","...ieiei...","..........."],["...........","...........","...iiiii...","...iiiii...","..........."],["...........","...........","...w.w.w...","...........","..........."],["...........","...........",".....w.....","...........","..........."]]},ghostknight:{s:.095,pal:{a:10134708,A:7239816,d:1712176,e:11462399,g:14207114,p:9063002},layers:[[".........",".........","..aa.aa..","..aa.aa..","........."],[".........",".........","..Aa.aA..","..Aa.aA..","........."],[".........",".........","..aa.aa..","..aa.aa..","........."],[".........",".........","..aaaaa..","..aaaaa..","........."],[".........",".........","..ggggg..","..ggggg..","........."],[".........","..aaaaa..","A.aaaaa.A","..aaaaa..","........."],[".........","..aaaaa..","a.aaaaa.a","..aaaaa..","........."],[".........","..aaaaa..","aaaaaaaaa","..ggggg..","........."],[".........",".........","...aaa...","...aaa...","........."],[".........","..aaaaa..",".aaaaaaa.","..addda..","........."],[".........","..aaaaa..",".aaaaaaa.","..aedea..","........."],[".........",".........","..aaaaa..","...aaa...","........."],["....p....","....p....","....p....","....p....","........."]]},armor:{s:.09,pal:{a:8883352,A:6186096,r:9067072,d:1316895,e:16734810},layers:[[".........",".........","..aa.aa..","..aa.aa..","........."],[".........",".........","..Ar.aA..","..Aa.aA..","........."],[".........",".........","..aa.aa..","..aa.aa..","........."],[".........",".........","...d.d...","...d.d...","........."],[".........",".........","..aaaaa..","..aaaaa..","........."],[".........","..aaaaa..","..aaaaa.A","..aaaaa..","........."],[".........","..araaa..","A.aaaaa.a","..aaaaa..","........."],[".........","..aaaaa..","aAaaaaaaa","..aaraa..","........."],[".........",".........","...aaa...","...aaa...","........."],[".........","..aaaaa..",".aaaaaaa.","..addda..","........."],[".........","..aaaaa..",".aaaaaaa.","..aedea..","........."],[".........",".........","..aaraa..","...aaa...","........."]]},spirit:{s:.09,pal:{h:5597340,H:8229060,d:1317424,e:10478591,r:4280970,w:13625855},layers:[[".........",".........","....w....",".........","........."],[".........",".........","...rrr...",".........","........."],[".........","...rrr...","..rrrrr..","...rrr...","........."],[".........","..rrrrr..",".rrrrrrr.","..rrrrr..","........."],[".........","..rrrrr..",".rrrrrrr.","..rrrrr..","........."],[".........","..hhhhh..",".hhhhhhh.","..hhhhh..","........."],[".........","..hhhhh..","hhhhhhhhh","..hhhhh..","........."],[".........","..hhhhh..",".hhhhhhh.","..hhhhh..","........."],[".........","..hhhhh..",".hhhhhhh.","..hdddh..","........."],[".........","..hhhhh..",".hhhhhhh.","..hdddh..","...e.e..."],[".........","...hhh...","..hhhhh..","...HhH...","........."],[".........",".........","...hhh...",".........","........."],[".........",".........","....H....",".........","........."]]}},Xi=new Map;function Oh(i){Xi.clear();for(const e of i)Xi.set(e.id,e)}function n_(){return[...Xi.values()]}function Bh(i){var e;return((e=Xi.get(i))==null?void 0:e.vox)??Bo[i]}function zh(i){var e;return((e=Xi.get(i))==null?void 0:e.glow)??_r[i]??[]}function kh(i,e,t=!1){const n=[],s=Nh(i,t?2:3);if(e.length){const r=new Set(e),{cells:a,w:o,d:l}=Tr(i);for(const[c,u]of a){if(!r.has(u))continue;const[f,h,d]=c.split(",").map(Number),m=i.s*1.5;n.push({x:(f+.5)*i.s-o*i.s/2,y:(h+.5)*i.s,z:(d+.5)*i.s-l*i.s/2,sx:m,sy:m,sz:m,c:u})}}return{geo:s,spots:n}}function Rr(i,e=!1){const t=Bh(i);if(!t)throw new Error(`monolithic モデル ${i} が無い（VoxDef を持つ種だけ＝GB/BoxSpec 種は buildActorBody の既存経路のまま）`);return kh(t,zh(i),e)}if(typeof document<"u")try{const i=Object.assign({"../tenants/masaru/comduct/models/goblin.json":zg,"../tenants/masaru/comduct/models/manifest.json":Gg}),e=[];for(const t of Object.keys(i).sort())if(!t.endsWith("manifest.json"))try{const n=df(i[t].default??i[t]);e.push({id:n.id,name:n.name,vox:mf(n),glow:pf(n)})}catch(n){console.warn(`§18 P4 truth モデル ${t} の読込に失敗（このモデルは skip・コード定義が受ける）`,n)}e.length&&Oh(e)}catch(i){console.warn("§18 P4 truth モデルの読込に失敗（コード定義で継続）",i)}function zo(i){return i.color&&/^#[0-9a-fA-F]{6}$/.test(i.color)?parseInt(i.color.slice(1),16):i.kind==="hero"?16765514:i.kind==="ally"?4638655:14711364}function ko(i){const e=(i.race||"").toLowerCase();return e.includes("dwarf")||e.includes("ドワーフ")?{hh:.9,ww:1.3,skin:14198904,hair:9067062,beard:10119748,brow:"bushy",noseS:.062,feet:1.15}:e.includes("elf")||e.includes("エルフ")?{hh:1.26,ww:.8,skin:15124384,hair:15261896,ear:!0,brow:"thin",noseS:.038,sideHair:!0}:e.includes("half")||e.includes("ハーフット")?{hh:.78,ww:1.02,skin:14858390,hair:10119738,cheeks:15243904,noseS:.05,feet:1.45,sideHair:!0}:e.includes("gnome")||e.includes("ノーム")?{hh:.84,ww:1.08,skin:14858390,hair:14209216,hat:6982344,noseS:.068,beard:14209216,beardS:.6,cheeks:14721160}:{hh:1.06,ww:1,skin:14922892,hair:6965806,noseS:.045}}function Ms(i){const e=i.name||"";return typeof i.modelRef=="string"&&i.modelRef?i.modelRef:e.includes("ヒュドラ")?"hydra":e.includes("ドラゴン")?"dragon":e.includes("フロストジャイアント")?"frostgiant":e.includes("コロッサス")?"colossus":e.includes("だいてんし")?"seraph":e.includes("じゃしんぞう")?"idol":(i.size??1)>1||e.includes("ボス")?"boss":e.includes("ねずみ")?"rat":e.includes("ゴブリン")?"goblin":e.includes("コボルト")?"kobold":e.includes("まどうし")?"mage":e.includes("グール")?"ghoul":e.includes("ゴーレム")?"golem":e.includes("おくり")?"spirit":e.includes("さまよう鎧")?"armor":e.includes("へび")?"snake":e.includes("狼")?"wolf":e.includes("サラマンダー")?"salamander":e.includes("きのこ")?"shroom":e.includes("まじん")?"djinn":e.includes("ゴーストナイト")?"ghostknight":e.includes("術士")?"caster":e.includes("巣")?"nest":e.includes("番人")?"warden":e.includes("番兵")?"sentry":"beast"}function Gh(i){const e=[],t=Ms(i),n=16734810,s=(a,o,l,c,u,f,h)=>{e.push({x:a,y:o,z:l,sx:c,sy:u,sz:f,c:h})},r=(a,o,l,c)=>s(a,o,l,c,c,c,n);if(t==="rat"){s(0,.2,0,.42,.24,.5,9076852),s(0,.22,.32,.28,.22,.22,9076852),s(-.1,.36,.34,.07,.1,.04,9076852),s(.1,.36,.34,.07,.1,.04,9076852),r(-.08,.24,.44,.05),r(.08,.24,.44,.05);for(const o of[-.15,.15])for(const l of[-.16,.18])s(o,.07,l,.08,.14,.08,5918532);s(0,.2,-.4,.05,.05,.34,12626064)}else if(t==="goblin"||t==="kobold"){const a=t==="goblin"?6986314:11571296;s(-.1,.16,0,.13,.3,.14,a),s(.1,.16,0,.13,.3,.14,a),s(0,.46,.04,.38,.34,.26,a),s(0,.74,.08,.3,.26,.28,a),s(-.22,.82,.02,.06,.16,.06,a),s(.22,.82,.02,.06,.16,.06,a),s(0,.7,.22,.1,.08,.08,a),r(-.08,.78,.2,.05),r(.08,.78,.2,.05),s(-.26,.48,.06,.09,.24,.12,a),s(.28,.5,.1,.09,.22,.12,a),s(.32,.72,.12,.09,.34,.09,8018482),s(.32,.92,.12,.15,.14,.15,6965800)}else if(t==="mage")s(0,.34,0,.5,.68,.4,4864618),s(0,.3,0,.56,.1,.46,4864618),s(0,.78,0,.3,.26,.3,2761280),s(0,.94,0,.18,.16,.18,4864618),r(-.07,.8,.15,.05),r(.07,.8,.15,.05),s(.3,.6,.1,.05,.8,.05,8018482),s(.3,1.04,.1,.18,.18,.18,16742970);else if(t==="ghoul")s(-.1,.16,0,.12,.3,.13,9083512),s(.1,.16,0,.12,.3,.13,9083512),s(0,.5,.04,.34,.4,.22,9083512),s(0,.82,.06,.26,.24,.26,9083512),r(-.07,.85,.18,.045),r(.07,.85,.18,.045),s(0,.78,.18,.16,.05,.05,2761760),s(-.26,.42,.1,.08,.4,.1,9083512),s(-.26,.2,.16,.1,.08,.06,14737616),s(.26,.42,.1,.08,.4,.1,9083512),s(.26,.2,.16,.1,.08,.06,14737616);else if(t==="golem")s(-.16*1.15,.2*1.15,0,.2*1.15,.4*1.15,.24*1.15,9079426),s(.16*1.15,.2*1.15,0,.2*1.15,.4*1.15,.24*1.15,9079426),s(0,.7*1.15,0,.6*1.15,.5*1.15,.4*1.15,9079426),s(0,.74*1.15,.2*1.15,.22,.2,.04,6184536),s(-.42*1.15,.72*1.15,0,.16*1.15,.5*1.15,.2*1.15,9079426),s(.42*1.15,.72*1.15,0,.16*1.15,.5*1.15,.2*1.15,9079426),s(0,1.02*1.15,0,.26*1.15,.22*1.15,.26*1.15,9079426),r(-.06*1.15,1.04*1.15,.16,.05),r(.06*1.15,1.04*1.15,.16,.05);else if(t==="wolf"){s(0,.34,-.05,.4,.3,.8,9348800),s(0,.46,.42,.28,.24,.26,9348800),s(0,.4,.6,.14,.14,.18,6980256),s(-.05,.32,.66,.03,.06,.03,15263968),s(.05,.32,.66,.03,.06,.03,15263968),s(-.09,.62,.38,.06,.12,.05,9348800),s(.09,.62,.38,.06,.12,.05,9348800),r(-.08,.49,.54,.045),r(.08,.49,.54,.045),s(-.08,.55,.53,.06,.02,.03,6980256),s(.08,.55,.53,.06,.02,.03,6980256);for(const l of[-.14,.14])for(const c of[-.3,.25])s(l,.11,c,.1,.22,.1,6980256);s(0,.44,-.52,.09,.09,.3,9348800)}else if(t==="snake")s(0,.08,0,.6,.16,.6,5937738),s(0,.2,0,.44,.14,.44,8373354),s(.05,.36,.08,.18,.22,.18,8373354),s(.05,.52,.14,.22,.16,.24,8373354),r(-.02,.55,.27,.04),r(.13,.55,.27,.04),s(.05,.48,.3,.04,.03,.1,16734810);else if(t==="salamander"){s(0,.2,0,.44,.24,.8,13658682),s(0,.26,.5,.3,.2,.26,13658682),r(-.09,.32,.62,.045),r(.09,.32,.62,.045);for(const l of[-.16,.16])for(const c of[-.26,.3])s(l,.08,c,.1,.16,.1,11030056);s(0,.36,-.1,.08,.1,.4,16753978),s(0,.24,-.56,.09,.09,.34,11030056)}else if(t==="shroom")s(0,.2,0,.3,.4,.3,13616288),s(0,.48,0,.7,.2,.7,14205018),s(0,.6,0,.44,.12,.44,14205018),s(-.2,.56,.18,.1,.06,.1,15918768),s(.18,.55,-.14,.1,.06,.1,15918768),s(.05,.66,.1,.08,.05,.08,15918768),r(-.08,.32,.16,.045),r(.08,.32,.16,.045);else if(t==="caster"){const a=i.element,o=a==="fire"?9058858:a==="ice"?2771594:a==="holy"?9075782:6969898,l=a==="fire"?16742970:a==="ice"?8376575:a==="holy"?16771496:14200906;s(0,.34,0,.5,.68,.4,o),s(0,.3,0,.56,.1,.46,o),s(0,.78,0,.3,.26,.3,Q(o,.55)),s(0,.94,0,.18,.16,.18,o),r(-.07,.8,.15,.05),r(.07,.8,.15,.05),s(.3,.6,.1,.05,.8,.05,8018482),s(.3,1.04,.1,.18,.18,.18,l)}else if(t==="hydra"){s(0,.6,-.1,1.3,.8,1.1,5929530),s(0,1.05,-.1,.9,.3,.8,3822118);for(const u of[-.5,.5])for(const f of[-.5,.35])s(u,.14,f,.3,.28,.3,3822118);s(0,.5,-.85,.2,.2,.5,5929530),[[-.45,.15],[0,.35],[.45,.15]].forEach(([u,f],h)=>{const d=1.15+(h===1?.25:0);s(u,d-.25,.35+f*.4,.2,.5,.2,5929530),s(u,d+.05,.55+f*.4,.3,.24,.34,5929530),s(u,d-.02,.75+f*.4,.22,.1,.14,3822118),r(u-.08,d+.1,.735+f*.4,.05),r(u+.08,d+.1,.735+f*.4,.05),s(u,d+.2,.5+f*.4,.06,.1,.06,14209200)})}else if(t==="nest")s(0,.18,0,.62,.36,.62,11556938),s(0,.42,0,.4,.24,.4,11556938),s(0,.56,0,.22,.16,.22,3807766),r(-.18,.3,.3,.06),r(.2,.34,.22,.06),r(0,.22,.34,.05);else if(t==="boss"||t==="warden"||t==="sentry"){const a=t==="boss"?1.6:1.25,o=t==="boss"?16734858:t==="warden"?11561688:10133674;s(-.16*a,.2*a,0,.18*a,.4*a,.2*a,o),s(.16*a,.2*a,0,.18*a,.4*a,.2*a,o),s(0,.66*a,0,.5*a,.46*a,.34*a,o),s(0,1*a,0,.3*a,.26*a,.3*a,o),s(-.36*a,.68*a,0,.14*a,.44*a,.18*a,o),s(.36*a,.68*a,0,.14*a,.44*a,.18*a,o),r(-.08*a,1.02*a,.16*a,.06),r(.08*a,1.02*a,.16*a,.06),t==="boss"&&(s(-.15*a,1.2*a,.05,.08,.26,.08,15392976),s(.15*a,1.2*a,.05,.08,.26,.08,15392976)),t==="sentry"&&(s(.42*a,.74*a,.1,.05,.95,.05,9071162),s(.42*a,1.2*a,.1,.05,.2,.13,13028824))}else{const a=zo(i);s(0,.32,0,.5,.4,.62,a),s(0,.36,.42,.38,.32,.3,a),r(-.1,.42,.56,.06),r(.1,.42,.56,.06);for(const o of[-.18,.18])for(const l of[-.2,.22])s(o,.11,l,.11,.22,.11,2892832);s(0,.36,-.36,.08,.08,.22,a)}return e}const gc=5915174,_c=4015192,xr=13938487;function i_(i){var d,m,_;const e=[],t=zo(i),n=ko(i),s=n.hh,r=n.ww,a=qi((d=i.equipment)==null?void 0:d.weapon),o=ms((m=i.equipment)==null?void 0:m.armor),l=mo((_=i.equipment)==null?void 0:_.accessory),c=o!=null&&(o.tier==="chain"||o.tier==="plate"||o.tier==="dragon"),u=((a==null?void 0:a.sil)==="staff"||(a==null?void 0:a.sil)==="grimoire")&&!c,f=(g,p,y,T,S,R,A)=>{e.push({x:g,y:p,z:y,sx:T,sy:S,sz:R,c:A})},h=(g,p,y,T,S,R,A)=>f(g*r,p*s,y,T*r,S*s,R,A);return{a:i,B:e,body:t,rs:n,HH:s,WW:r,wv:a,av:o,cv:l,heavy:c,robe:u,METAL:(o==null?void 0:o.col)??12765910,METAL2:(o==null?void 0:o.col2)??9081764,raw:f,M:h}}const Hh=["legs","belt","torso","armor","sigil","amulet","sleeves","bracer","hands","head","face","helm","regalia","shield","weapon"];function Vh(i){var l,c,u,f;const e=qi((l=i.equipment)==null?void 0:l.weapon),t=ms((c=i.equipment)==null?void 0:c.armor),n=mo((u=i.equipment)==null?void 0:u.accessory),s=ko(i),r=t!=null&&(t.tier==="chain"||t.tier==="plate"||t.tier==="dragon"),a=((e==null?void 0:e.sil)==="staff"||(e==null?void 0:e.sil)==="grimoire")&&!r,o={legs:a?"legs:robe":"legs:plain",belt:"belt:base",torso:"torso:base",sleeves:"sleeves:base",hands:"hands:base",head:"head:base",face:"face:base",helm:(t==null?void 0:t.tier)==="plate"?"helm:plate":(t==null?void 0:t.tier)==="dragon"?"helm:dragon":(t==null?void 0:t.tier)==="chain"?"helm:chain":(t==null?void 0:t.tier)==="leather"&&!s.hat&&!a?"helm:hachigane":s.hat?"helm:hat":a?"helm:hood":"helm:hair"};return t&&(t.tier==="leather"||t.tier==="chain"||t.tier==="plate"||t.tier==="dragon")&&(o.armor="armor:"+t.tier),(((f=i.stats)==null?void 0:f.pie)??0)>=10&&(o.sigil="sigil:cross"),(n==null?void 0:n.kind)==="amulet"&&(o.amulet="amulet:base"),(n==null?void 0:n.kind)==="bracer"&&(o.bracer="bracer:base"),i.kind==="hero"&&(o.regalia="regalia:hero"),(t==null?void 0:t.tier)==="shield"?o.shield="shield:wood":((t==null?void 0:t.tier)==="plate"||(t==null?void 0:t.tier)==="dragon")&&(o.shield="shield:metal"),e&&(o.weapon="weapon:"+e.sil),o}const xc=i=>{const{raw:e,HH:t,WW:n,wv:s}=i,r=.42*n,a=s.blade,o=s.grip,l=s.glow,c=s.sil==="greatsword"?.13:s.big?.095:.08,u=s.sil==="greatsword"?.7:.62;e(r,.52*t+u/2+.06,.1,c,u,.075,a),e(r,.84*t,.14,.028,u*.72,.02,l??5857903),e(r,.52*t+u+.085,.1,.05,.09,.05,l??15331320),e(r,.52*t,.1,s.sil==="greatsword"?.3:.26,.055,.12,xr),e(r,.44*t,.1,.055,.13,.055,o),e(r,.36*t,.1,.09,.07,.09,xr)},Wh={"legs:robe":i=>{i.M(0,.3,0,.5,.56,.34,Q(i.body,.88)),i.M(0,.05,0,.58,.12,.42,Q(i.body,.68))},"legs:plain":i=>{const{M:e,rs:t,av:n,METAL2:s}=i;e(-.12,.34,0,.16,.3,.17,_c),e(.12,.34,0,.16,.3,.17,_c);const r=t.feet??1,a=n&&(n.tier==="plate"||n.tier==="dragon")?s:r>=1.3?t.skin:gc;e(-.12,.09,.01,.18*r,.18,.22*r,a),e(.12,.09,.01,.18*r,.18,.22*r,a)},"belt:base":i=>{i.M(0,.49,0,.46,.06,.3,i.robe?13214268:gc)},"torso:base":i=>{i.M(0,.7,0,.44,.4,.27,i.body)},"armor:leather":i=>{const{M:e,av:t}=i;e(0,.7,.02,.48,.36,.3,t.col),e(0,.86,0,.5,.06,.29,t.col2),e(-.14,.82,.02,.09,.22,.31,t.col2),e(.14,.82,.02,.09,.22,.31,t.col2)},"armor:chain":i=>{const{M:e,raw:t,av:n,WW:s,HH:r}=i;e(0,.7,.02,.49,.38,.3,n.col);for(const[a,o]of[[-.13,.62],[.01,.66],[.15,.62],[-.06,.75],[.08,.78],[-.15,.8],[.02,.57]])t(a*s,o*r,.165,.035,.035,.02,n.col2);e(0,.5,0,.5,.08,.32,n.col),e(-.3,.87,0,.16,.11,.2,n.col2),e(.3,.87,0,.16,.11,.2,n.col2)},"armor:plate":i=>{const{M:e,METAL:t}=i;e(0,.72,.02,.5,.4,.31,t),e(0,.84,.2,.28,.1,.02,i.body),e(-.32,.86,0,.2,.15,.23,t),e(.32,.86,0,.2,.15,.23,t)},"armor:dragon":i=>{const{M:e,raw:t,av:n,WW:s,HH:r,METAL:a}=i;e(0,.72,.02,.5,.4,.31,n.col);for(const o of[.6,.68,.76,.84])for(const l of[-.15,0,.15])t(l*s,o*r,.175,.09,.05,.02,l===0!=(o===.68||o===.84)?Q(n.col,.78):n.col);e(0,.88,.02,.52,.05,.33,n.col2),e(0,.53,.02,.52,.05,.33,n.col2),e(-.32,.86,0,.2,.15,.23,a),e(.32,.86,0,.2,.15,.23,a)},"sigil:cross":i=>{i.raw(0,.8*i.HH,.19,.05,.16,.028,14927450),i.raw(0,.845*i.HH,.19,.13,.045,.028,14927450)},"amulet:base":i=>{i.raw(0,.75*i.HH,.185,.02,.12,.02,9077362),i.raw(0,.69*i.HH,.19,.07,.07,.03,i.cv.col)},"sleeves:base":i=>{const e=i.heavy?i.METAL2:i.body;i.M(-.31,.72,0,.15,.27,.18,e),i.M(.31,.72,0,.15,.27,.18,e)},"bracer:base":i=>{i.raw(-.31*i.WW,.58*i.HH,.01,.13,.07,.17,i.cv.col)},"hands:base":i=>{const{M:e,rs:t}=i;e(-.31,.52,.01,.11,.2,.15,t.skin),e(.31,.52,.01,.11,.2,.15,t.skin),e(-.31,.41,.03,.12,.1,.14,t.skin),e(.31,.41,.03,.12,.1,.14,t.skin)},"head:base":i=>{i.M(0,.9,0,.14,.06,.14,i.rs.skin),i.M(0,1.02,0,.32,.28,.3,i.rs.skin)},"face:base":i=>{const{M:e,raw:t,rs:n,WW:s,HH:r}=i,a=n.brow==="thin"?.032:.05;t(-.07*s,1.04*r,.16,.048,a,.03,1316895),t(.07*s,1.04*r,.16,.048,a,.03,1316895);const o=n.brow==="bushy"?.085:n.brow==="thin"?.058:.06,l=n.brow==="bushy"?.036:.02;if(t(-.07*s,1.095*r,.158,o,l,.024,n.hair),t(.07*s,1.095*r,.158,o,l,.024,n.hair),t(0,1.015*r,.168,n.noseS??.045,(n.noseS??.045)*.9,.035,Q(n.skin,.86)),t(0,.955*r,.157,.07,.018,.022,10115664),n.cheeks&&(t(-.105*s,.995*r,.152,.05,.04,.024,n.cheeks),t(.105*s,.995*r,.152,.05,.04,.024,n.cheeks)),n.beard){const c=n.beardS??1;e(0,.955-.02*c,.13,.28,.16*c,.1,n.beard),c>=1&&e(0,.86,.13,.1,.1,.07,n.beard)}n.sideHair&&(e(-.17,1,.02,.05,.2,.26,n.hair),e(.17,1,.02,.05,.2,.26,n.hair)),n.ear&&(e(-.2,1.06,0,.05,.14,.05,n.skin),e(.2,1.06,0,.05,.14,.05,n.skin))},"helm:plate":i=>{i.M(0,1.06,0,.36,.26,.34,i.METAL),i.M(0,1,.17,.06,.2,.03,i.METAL2),i.M(0,1.24,0,.07,.14,.36,13781834)},"helm:dragon":i=>{i.M(0,1.06,0,.36,.26,.34,i.av.col),i.M(0,1.21,0,.3,.06,.3,i.av.col2),i.raw(-.17*i.WW,1.26*i.HH,.02,.05,.14,.05,15261124),i.raw(.17*i.WW,1.26*i.HH,.02,.05,.14,.05,15261124)},"helm:chain":i=>{i.M(0,1.12,-.01,.35,.14,.33,i.av.col2),i.M(-.17,1,0,.04,.22,.3,i.av.col2),i.M(.17,1,0,.04,.22,.3,i.av.col2)},"helm:hachigane":i=>{i.M(0,1.16,-.02,.34,.1,.32,i.rs.hair),i.M(0,1.13,.155,.3,.045,.03,i.av.col2)},"helm:hat":i=>{i.M(0,1.16,0,.2,.12,.2,i.rs.hat),i.M(0,1.3,0,.08,.16,.08,i.rs.hat)},"helm:hood":i=>{i.M(0,1.16,-.02,.37,.12,.35,Q(i.body,.78)),i.M(0,1.24,-.1,.18,.1,.2,Q(i.body,.68))},"helm:hair":i=>{i.M(0,1.16,-.02,.34,.1,.32,i.rs.hair)},"regalia:hero":i=>{i.M(0,1.21,0,.36,.06,.34,16769354);for(const e of[[0,.17],[-.13,0],[.13,0]])i.raw(e[0]*i.WW,1.27*i.HH,e[1],.05,.07,.05,16769354);i.M(0,.7,-.17,.42,.56,.04,9052208)},"shield:wood":i=>{const{raw:e,WW:t,HH:n,av:s}=i;e(-.36*t,.68*n,.1,.07,.42,.34,s.col),e(-.36*t,.68*n,.28,.045,.16,.14,s.col2),e(-.36*t,.68*n,.1,.075,.06,.36,s.col2)},"shield:metal":i=>{const{raw:e,WW:t,HH:n}=i;e(-.36*t,.68*n,.1,.07,.4,.32,i.METAL),e(-.36*t,.68*n,.27,.04,.2,.16,i.body)},"weapon:club":i=>{const{raw:e,HH:t,WW:n,wv:s}=i,r=.42*n;e(r,.66*t,.06,.07,.5,.07,s.grip),e(r,.92*t,.06,.11,.16,.11,s.blade)},"weapon:dagger":i=>{const{raw:e,HH:t,WW:n,wv:s}=i,r=.42*n,a=s.blade,o=s.grip,l=s.glow;e(r,.62*t,.08,.05,.3,.05,a),e(r,.78*t,.08,.03,.1,.02,l??15331320),e(r,.46*t,.08,.14,.04,.08,xr),e(r,.4*t,.08,.05,.1,.05,o)},"weapon:sword":xc,"weapon:greatsword":xc,"weapon:axe":i=>{const{raw:e,HH:t,WW:n,wv:s}=i,r=.42*n,a=s.blade,o=s.grip,l=s.glow;e(r,.72*t,.06,.055,.72,.055,o),e(r+.1,1.02*t,.06,.2,.22,.07,a),e(r+.21,1.02*t,.06,.03,.3,.075,l??15331320),e(r,1.14*t,.06,.05,.08,.05,9081764)},"weapon:halberd":i=>{const{raw:e,HH:t,WW:n,wv:s}=i,r=.42*n;e(r,.82*t,.06,.05,1.15,.05,s.grip),e(r+.09,1.18*t,.06,.16,.18,.06,s.blade),e(r,1.42*t,.06,.045,.16,.045,15331320),e(r-.07,1.18*t,.06,.08,.05,.05,9081764)},"weapon:hammer":i=>{const{raw:e,HH:t,WW:n,wv:s}=i,r=.42*n,a=s.glow;e(r,.72*t,.06,.065,.7,.065,s.grip),e(r,1.1*t,.06,.26,.2,.17,s.blade),a!=null&&(e(r+.06,1.1*t,.155,.05,.05,.02,a),e(r-.06,1.1*t,.155,.05,.05,.02,a))},"weapon:staff":i=>{const{raw:e,HH:t,WW:n,wv:s}=i,r=.42*n,a=s.blade,o=s.grip,l=s.glow;e(r,.68*t,.04,.05,.95,.05,o),e(r,.28*t,.04,.07,.05,.07,6967344),e(r,1.2*t,.04,.1,.1,.1,xr),e(r,1.28*t,.04,.16,.16,.16,a),e(r,1.28*t,.04,.08,.22,.08,l??14218495)},"weapon:grimoire":i=>{const{raw:e,HH:t,WW:n,wv:s}=i;e(-.24*n,.72*t,.17,.2,.26,.07,s.blade),e(-.24*n,.72*t,.21,.16,.2,.02,15129792),e(-.24*n,.72*t,.226,.085,.105,.018,s.glow??13212415)},"weapon:bow":i=>{const{raw:e,HH:t,WW:n,wv:s}=i,r=.42*n,a=s.blade,o=s.grip,l=s.glow,c=l!=null?a:8018474,u=r+.02;for(const[f,h]of[[.36,.05],[.5,.1],[.64,.13],[.78,.13],[.92,.1],[1.06,.05]])e(u,f*t,.06+h,.036,.16*t,.05,c);e(u,.71*t,.19,.05,.13,.06,o),e(u,.71*t,.045,.014,.68*t,.014,14734516),l!=null&&(e(u,.5*t,.17,.05,.05,.036,l),e(u,.92*t,.17,.05,.05,.036,l)),e(-.15*n,.82*t,-.21,.13,.34,.13,6965798),e(-.15*n,1.02*t,-.21,.09,.1,.09,15129e3),e(-.11*n,1.02*t,-.25,.06,.14,.06,13613182)},"weapon:sling":i=>{const{raw:e,HH:t,WW:n,wv:s}=i,r=.42*n;e(r-.02*n,.5*t,.04,.08,.14,.08,s.grip),e(r-.02*n,.58*t,.04,.03,.08,.03,5915174)}};function Xh(i){const e=i_(i),t=Vh(i);for(const n of Hh){const s=t[n];if(!s)continue;const r=Wh[s];if(!r)throw new Error(`party パーツ ${s}（slot=${n}）が棚に無い`);r(e)}return e.B}function qh(i){let e;try{e=i.stats&&i.equipment?Sc(i).maxHp:void 0}catch{e=void 0}return{modelRef:i.modelRef,equipment:i.equipment,hp:i.hp,hpMax:e}}function Yh(i,e=!1){const t=[],n=s=>{const r=Cr(i),a=Pr(s,r);for(const o of t)o.gw=Ss(o.x,o.y,o.z,a,r);return{geo:s,spots:t}};if(i.kind==="monster"){if(zi(i)){const c=Er(qh(i));return{geo:c.geo,spots:c.spots}}const s=Ms(i);if(Xi.has(s)||!po[s]&&Bo[s]){const c=Rr(s,e);return t.push(...c.spots),n(c.geo)}const r=_r[s]?new Set(_r[s]):null,a=po[s];if(a){const c=a(),u=Uh(c.cells),f=e?1:2,h=f>1?Ar(u,f):u,d={pos:[],nrm:[],col:[],idx:[]};if(xs(d,h,c.s/f,0,0,0,c.jit),r)for(const[m,_]of u){if(!r.has(_))continue;const[g,p,y]=m.split(",").map(Number),T=c.s*1.5;t.push({x:(g+.5)*c.s,y:(p+.5)*c.s,z:(y+.5)*c.s,sx:T,sy:T,sz:T,c:_})}return n(_s(d))}const o=Gh(i),l=s==="hydra"||s==="boss"?e?.055:.04:e?.05:.032;if(r)for(const c of o)r.has(c.c)&&t.push({x:c.x,y:c.y,z:c.z,sx:c.sx*1.12,sy:c.sy*1.12,sz:c.sz*1.12,c:c.c});return n(Fh(o,l))}return Go(i,e)}function Go(i,e=!1){var c,u;const t=[],n=qi((c=i.equipment)==null?void 0:c.weapon),s=new Set;(n==null?void 0:n.glow)!=null&&s.add(n.glow),(n==null?void 0:n.sil)==="staff"&&s.add(n.blade),(n==null?void 0:n.sil)==="grimoire"&&s.add(n.glow??13212415),(((u=i.stats)==null?void 0:u.pie)??0)>=10&&s.add(14927450);const r=Xh(i);if(s.size)for(const f of r)s.has(f.c)&&t.push({x:f.x,y:f.y,z:f.z,sx:f.sx*1.12,sy:f.sy*1.12,sz:f.sz*1.12,c:f.c});const a=Fh(r,e?.045:.03),o=Cr(i),l=Pr(a,o);for(const f of t)f.gw=Ss(f.x,f.y,f.z,l,o);return{geo:a,spots:t}}function Ho(i){var s,r,a,o;const e=qi((s=i.equipment)==null?void 0:s.weapon),t=ms((r=i.equipment)==null?void 0:r.armor),n=mo((a=i.equipment)==null?void 0:a.accessory);return`f:${i.kind}:${i.race??""}:${e?`${e.sil}.${e.blade}.${e.glow??""}${e.big?"B":""}`:""}:${(t==null?void 0:t.tier)??""}:${n?n.kind+n.col:""}:${i.color??""}:${(((o=i.stats)==null?void 0:o.pie)??0)>=10?1:0}`}function $h(i,e){let t=0,n=0,s=0;if(i==="melee"){const r=e<.32?e/.32:1-(e-.32)/.68;t=.34*r,n=.3*r,s=Math.sin(e*Math.PI)*.32}else if(i==="shoot"){const r=Math.sin(Math.min(1,e/.5)*Math.PI);t=-.09*r,n=-.13*r}else if(i==="cast"){const r=Math.sin(e*Math.PI);t=-.06*r,n=-.16*r}else if(i==="windup"){const r=Math.sin(e*Math.PI);t=-.16*r,n=-.3*r}else if(i==="exhale"){const r=Math.sin(Math.min(1,e/.4)*Math.PI*.5)*(1-Math.max(0,(e-.55)/.45));t=.15*r,n=.26*r}else i==="heal"&&(n=-.09*Math.sin(e*Math.PI));return{lunge:t,tilt:n,yawOff:s}}function Kh(i){const e=1-i,t=e*e;return{kb:.17*t,sxz:1+.07*t,sy:1-.12*t}}function Zh(i){const e=Math.max(0,i),t=Math.min(1,e*1.6);return{ang:1.35*t*t,sink:.22*e,opacity:e<.55?1:1-(e-.55)/.45}}const ti={melee:300,shoot:320,cast:420,heal:420,windup:520,exhale:460},Zt=i=>({mode:"biped",dur:175,stride:.1,arm:.055,lift:.05,bounce:.028,sway:.02,breath:.008,turn:110,...i}),Vn={biped:Zt({}),small:Zt({dur:150,stride:.09,arm:.05,bounce:.032,sway:.026}),shamble:Zt({dur:215,stride:.075,arm:.028,lift:.028,bounce:.016,sway:.05,turn:150}),heavy:Zt({dur:235,stride:.09,arm:.04,lift:.04,bounce:.05,sway:.05,breath:.006,turn:170}),giant:Zt({dur:265,stride:.12,arm:.085,lift:.06,bounce:.07,sway:.07,breath:.014,turn:230}),quad:Zt({mode:"quad",dur:150,stride:.09,arm:0,lift:.04,bounce:.02,sway:.014,turn:120}),quadheavy:Zt({mode:"quad",dur:260,stride:.1,arm:0,lift:.05,bounce:.045,sway:.05,breath:.016,turn:240}),serpent:Zt({mode:"serpent",dur:190,stride:0,arm:0,lift:0,bounce:0,sway:.06,breath:0,turn:140}),robe:Zt({mode:"robe",dur:185,stride:.05,arm:0,lift:0,bounce:.022,sway:.022,turn:130}),float:Zt({mode:"float",dur:210,stride:0,arm:0,lift:0,bounce:0,sway:.02,breath:0,turn:150,hover:.05}),stomp:Zt({mode:"stomp",dur:245,stride:0,arm:0,lift:0,bounce:.045,sway:.05,breath:.006,turn:200}),idol:Zt({mode:"stomp",dur:285,stride:0,arm:0,lift:0,bounce:.02,sway:.06,breath:0,turn:260})},s_={rat:"quad",wolf:"quad",salamander:"quad",beast:"quad",snake:"serpent",hydra:"quadheavy",dragon:"quadheavy",goblin:"small",kobold:"small",ghoul:"shamble",golem:"heavy",armor:"heavy",ghostknight:"heavy",boss:"giant",frostgiant:"giant",colossus:"giant",mage:"robe",caster:"robe",spirit:"float",seraph:"float",djinn:"stomp",shroom:"stomp",nest:"stomp",idol:"idol",warden:"biped",sentry:"biped"};function Cr(i){var s,r;if(i.kind==="monster"){const a=xh(i);return a?Vn[a.gait]??Vn.biped:Vn[s_[Ms(i)]??"biped"]}const e=qi((s=i.equipment)==null?void 0:s.weapon),t=ms((r=i.equipment)==null?void 0:r.armor),n=t!=null&&(t.tier==="chain"||t.tier==="plate"||t.tier==="dragon");return((e==null?void 0:e.sil)==="staff"||(e==null?void 0:e.sil)==="grimoire")&&!n?Vn.robe:Vn.biped}function Ss(i,e,t,n,s){const r=n.H||1,a=(i>=0?1:-1)*Math.min(1,Math.abs(i)/.06),o=Math.min(1,Math.max(0,e/r));if(s.mode==="float")return[0,0,1];if(s.mode==="serpent"){const f=(t-n.zMin)/Math.max(1e-6,n.zMax-n.zMin);return[0,0,Math.sin(f*Math.PI*2.2)]}if(s.mode==="stomp")return[0,0,o];if(s.mode==="robe"){const f=.2*r;return[e<f?a*(1-e/f)*.6:0,0,o]}if(s.mode==="quad"){const f=.3*r,h=(n.zMin+n.zMax)/2;return[e<f&&Math.abs(i)>.3*n.halfW?a*(t>=h?1:-1)*Math.pow(1-e/f,1.5):0,0,o]}const l=.4*r,c=.72*r,u=.42*n.halfW;return Math.abs(i)>u&&e>.18*r&&e<.95*r?[0,-a*Math.min(1,Math.max(0,(c-e)/Math.max(1e-6,c-l*.6))),o]:e<l?[a*(1-e/l),0,o]:[0,0,o]}function Pr(i,e){i.computeBoundingBox();const t=i.boundingBox,n={H:Math.max(1e-6,t.max.y),halfW:Math.max(1e-6,Math.max(Math.abs(t.min.x),Math.abs(t.max.x))),zMin:t.min.z,zMax:t.max.z},s=i.getAttribute("position"),r=s.count,a=new Float32Array(r*3);for(let o=0;o<r;o++){const l=Ss(s.getX(o),s.getY(o),s.getZ(o),n,e);a[o*3]=l[0],a[o*3+1]=l[1],a[o*3+2]=l[2]}return i.setAttribute("aGait",new dt(a,3)),n}function Jh(i,e,t,n=0,s=0){const r=Math.sin(e);return{a:[i.stride*r*t,i.arm*r*t,i.bounce*.5*(1-Math.cos(2*e))*t+n+s,i.sway*r*t],b:[i.lift*t,Math.cos(e)*t]}}const vc=(i,e)=>{const t=Math.PI*2;let n=(e-i)%t;return n>Math.PI&&(n-=t),n<-Math.PI&&(n+=t),n},Mc=i=>i<=0?0:i>=1?1:i*i*(3-2*i);class Qh{constructor(){xe(this,"m",new Map);xe(this,"gen",0)}reset(){this.m.clear()}beginTurn(){this.gen++}prune(){for(const[e,t]of this.m)this.gen-t.gen>8&&this.m.delete(e)}note(e,t,n,s,r,a,o){let l=this.m.get(e);if(!l){l={tx:t,ty:n,tz:s,fx:t,fy:n,fz:s,t0:a-9999,dur:1,phase0:0,adv:0,ry:r,ryFrom:r,ryT0:a-9999,ryDur:1,walkT:a-9999,noteT:a-9999,gen:this.gen},this.m.set(e,l);return}if(l.gen=this.gen,t!==l.tx||s!==l.tz||n!==l.ty){if(Math.max(Math.abs(t-l.tx),Math.abs(s-l.tz))>1.75)l.fx=t,l.fy=n,l.fz=s,l.t0=a-9999,l.dur=1,l.phase0=0,l.adv=0,l.walkT=a-9999;else{const u=this.sample(e,a),f=Math.max(Math.abs(u.x-t),Math.abs(u.z-s))>1.15;l.fx=f?l.tx:u.x,l.fy=f?l.ty:u.y,l.fz=f?l.tz:u.z,l.phase0=u.phase%(Math.PI*2),l.adv=Math.PI,u.active||(l.walkT=a),l.dur=Math.min(o.dur,Math.max(90,a-l.noteT)),l.t0=a}l.noteT=a}if(Math.abs(vc(l.ry,r))>1e-6){const c=this.ryAt(l,a);l.ryFrom=c,l.ry=r,l.ryT0=a,l.ryDur=Math.max(1,o.turn)}l.tx=t,l.ty=n,l.tz=s}ryAt(e,t){const n=Mc((t-e.ryT0)/e.ryDur);return e.ryFrom+vc(e.ryFrom,e.ry)*n}sample(e,t){const n=this.m.get(e);if(!n)return null;const s=Math.min(1,Math.max(0,(t-n.t0)/n.dur)),r=Mc(s),a=s<1,o=n.t0+n.dur,l=Math.min(1,Math.max(0,(t-n.walkT)/80)),c=a?l:Math.max(0,Math.min(l,1-(t-o)/160)),u=t-n.ryT0<n.ryDur;return{x:n.fx+(n.tx-n.fx)*r,y:n.fy+(n.ty-n.fy)*r,z:n.fz+(n.tz-n.fz)*r,ry:u?this.ryAt(n,t):n.ry,phase:n.phase0+n.adv*r,moveK:c,active:a||u||c>.02}}}const r_=[{id:"floor",name:"床石",hint:"render-voxel.ts floorStones()／ENV[theme].floorA/B/floorAcc/crackP"},{id:"floor-high",name:"高所（段丘＋階段石）",hint:"render-voxel.ts floorStones(by)／stairStep()"},{id:"water",name:"水場",hint:"render-voxel.ts rebuild() water ブロック／ENV.water/waterDeep/sparkle"},{id:"wall",name:"壁",hint:"render-voxel.ts faceBricks()/capStones()／ENV.wallA/B/wallAcc"},{id:"wall-breakable",name:"壊せる壁",hint:"render-voxel.ts rebuild() breakable（系統色 0x9c6b3e）"},{id:"wall-locked",name:"鍵扉",hint:"render-voxel.ts rebuild() locked（系統色 0xd8a838）"},{id:"torch",name:"トーチの壁",hint:"render-voxel.ts rebuild() トーチ／ENV.flame/flameCore/torchN"},{id:"low",name:"胸壁（低い壁）",hint:"render-voxel.ts rebuild() t.low ブロック"},{id:"pillar",name:"柱",hint:"render-voxel.ts rebuild() t.pillar ブロック"},{id:"stairs",name:"降り階段",hint:"render-voxel.ts buildStairs()"},{id:"upstairs",name:"上り階段",hint:"render-voxel.ts rebuild() upstairs（金の段）"},{id:"chest",name:"宝箱",hint:"render-voxel.ts buildChest()"},{id:"chest-open",name:"宝箱（開封）",hint:"render-voxel.ts buildChest(opened=true)"},{id:"shrine-spring",name:"泉",hint:"render-voxel.ts buildShrine('spring')"},{id:"shrine-altar",name:"祭壇",hint:"render-voxel.ts buildShrine('altar')"},{id:"portal-return",name:"帰還装置",hint:"render-voxel.ts rebuild() portal=return ブロック"},{id:"portal-elevator",name:"エレベーター",hint:"render-voxel.ts rebuild() portal=elevator ブロック"},{id:"hazard",name:"危険床（火）",hint:"render-voxel.ts rebuild() t.hazard ブロック（系統色は 2D HAZ_COL と同じ）"},{id:"slip",name:"凍面",hint:"render-voxel.ts rebuild() floorFeat=slip"},{id:"pit",name:"空隙",hint:"render-voxel.ts rebuild() floorFeat=pit"},{id:"item",name:"落とし物",hint:"render-voxel.ts rebuild() t.item（自光 OCT）"},{id:"trap",name:"罠（露見）",hint:"render-voxel.ts rebuild() t.trap"},{id:"town-house-shop",name:"店（街・日よけ）",hint:"render-voxel.ts buildHouse()（fac=shop）／dungeon.ts genTown()（配置）"},{id:"town-house-equip",name:"装備屋（街）",hint:"render-voxel.ts buildHouse()（fac=equip・看板色 FAC_HEX）"},{id:"town-house-craft",name:"工房（街・煙突）",hint:"render-voxel.ts buildHouse()（fac=craft・炉の窓/煙突）"},{id:"town-house-heal",name:"宿（街・2階建て）",hint:"render-voxel.ts buildHouse()（fac=heal・tall）"},{id:"town-house-recruit",name:"酒場（街・出会い）",hint:"render-voxel.ts buildHouse()（fac=recruit）"},{id:"town-fountain",name:"噴水（広場の中心）",hint:"render-voxel.ts buildFountain()／dungeon.ts genTown()（deco=fountain）"},{id:"town-portal",name:"テーマ穴の門（火）",hint:"render-voxel.ts buildPortalGate()／色は dungeon.ts THEME_DEF.col と同系"},{id:"town-brazier",name:"かがり火",hint:"render-voxel.ts buildBrazier()（deco=brazier）"},{id:"town-tree",name:"植栽（庭木）",hint:"render-voxel.ts buildTree()（deco=tree）"},{id:"town-fence",name:"柵",hint:"render-voxel.ts buildFence()（deco=fence・宿場の境）"},{id:"town-road",name:"石畳の道",hint:"render-voxel.ts roadStones()（deco=road）"},{id:"town-counter",name:"受付マス（室内）",hint:"render-voxel.ts buildSample town-counter／dungeon.ts genInterior()（counter prop→facility）"}];class a_{constructor(e,t){xe(this,"board");xe(this,"onPick");xe(this,"scene",new uu);xe(this,"camera",new Xt(46,1,.1,600));xe(this,"gl");xe(this,"canvas");xe(this,"group",new Jt);xe(this,"matCache",new Map);xe(this,"matECache",new Map);xe(this,"voxMat",new ir({color:16777215}));xe(this,"voxMatE",new ii({color:16777215}));xe(this,"uCutY",{value:1e9});xe(this,"voxBuf",[]);xe(this,"voxBufE",[]);xe(this,"env",wn.plain);xe(this,"envKey","");xe(this,"ambL",null);xe(this,"sunL",null);xe(this,"fillL",null);xe(this,"heroL",null);xe(this,"groundM",null);xe(this,"_m4",new et);xe(this,"_vc",new Ne);xe(this,"raycaster",new Gu);xe(this,"groundPlane",new Gn(new F(0,1,0),0));xe(this,"camTarget",new F);xe(this,"wantTgt",new F);xe(this,"zoom",1);xe(this,"camYaw",Math.PI/2);xe(this,"camPitch",.57);xe(this,"W",56);xe(this,"H",34);xe(this,"inited",!1);xe(this,"raf",0);xe(this,"active",!1);xe(this,"g",null);xe(this,"v",null);xe(this,"fxGroup",new Jt);xe(this,"actorGrp",new Map);xe(this,"lastHitSeq",0);xe(this,"anims",[]);xe(this,"flashes",[]);xe(this,"parts",[]);xe(this,"ghosts",[]);xe(this,"nums",[]);xe(this,"numTex",new Map);xe(this,"shakeT0",-1);xe(this,"shakeAmp",0);xe(this,"lastT",0);xe(this,"lastActSeq",0);xe(this,"moveCh",new Qh);xe(this,"gaitMats",new Map);xe(this,"spotRefs",new Map);xe(this,"badgeGrps",new Map);xe(this,"imE",null);xe(this,"lastFloorRef",null);xe(this,"actAnims",[]);xe(this,"projs",[]);xe(this,"charges",[]);xe(this,"impactDelay",new Map);xe(this,"_q1",new Yn);xe(this,"_q2",new Yn);xe(this,"_ax",new F);xe(this,"mobile",!1);xe(this,"resizeFrames",0);xe(this,"_shadow");xe(this,"bodyCache",new Map);xe(this,"glowCache",new Map);this.board=e,this.onPick=t}injectCut(e){e.onBeforeCompile=t=>{t.uniforms.uCutY=this.uCutY,t.vertexShader=`varying float vCutWy;
`+t.vertexShader.replace("#include <project_vertex>",`vec4 cwp = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
cwp = instanceMatrix * cwp;
#endif
vCutWy = (modelMatrix * cwp).y;
#include <project_vertex>`),t.fragmentShader=`uniform float uCutY; varying float vCutWy;
`+t.fragmentShader.replace("void main() {",`void main() {
	if (vCutWy > uCutY && mod(gl_FragCoord.x + gl_FragCoord.y, 2.0) < 1.0) discard;`)}}mount(){var e;this.injectCut(this.voxMat),this.injectCut(this.voxMatE),this.scene.background=new Ne(1449e3),this.scene.fog=new Po(1449e3,.04),this.gl=new Og({antialias:!0}),this.gl.toneMapping=xo,this.gl.toneMappingExposure=1.22,this.gl.setPixelRatio(Math.min(devicePixelRatio,2)),this.canvas=this.gl.domElement,this.canvas.style.display="none",this.canvas.style.position="absolute",this.canvas.style.left="0",this.canvas.style.top="0",this.canvas.style.borderRadius="0",(e=this.board.parentElement)==null||e.insertBefore(this.canvas,this.board.nextSibling),this.scene.add(this.group),this.scene.add(this.fxGroup),window.cdVox=()=>{const t=this.gl.info.render;return{draw:t.calls,tri:t.triangles}},window.cdVoxR=this,this.canvas.addEventListener("click",t=>{const n=this.screenToTile(t.clientX,t.clientY);n&&this.onPick(n)}),this.canvas.addEventListener("wheel",t=>{t.preventDefault(),this.zoom=Math.min(2.4,Math.max(.55,this.zoom+(t.deltaY>0?.1:-.1)))},{passive:!1}),addEventListener("resize",()=>{this.active&&this.resize(this.mobile)}),addEventListener("keydown",t=>{if(!this.active||!t.shiftKey)return;const n=t.key;if(n==="ArrowUp"||n==="w"||n==="ArrowDown"||n==="s"){t.preventDefault();const s=n==="ArrowUp"||n==="w";this.camPitch=Math.min(1.32,Math.max(.4,this.camPitch+(s?.08:-.08)))}}),this.loop()}resize(e){if(!this.gl)return;this.mobile=e;const t=innerWidth,n=innerHeight;this.gl.setSize(t,n),this.canvas.style.width=t+"px",this.canvas.style.height=n+"px",this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}render(e,t){this.g=e,this.v=t,this.rebuild(),this.consumeActs(),this.consumeHits()}screenToTile(e,t){var f,h;if(!this.canvas)return null;const n=this.canvas.getBoundingClientRect(),s=new Le((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);const r=(f=this.g)==null?void 0:f.actors.find(d=>d.kind==="hero"),a=r?(h=this.g.floor.tiles[r.pos.y])==null?void 0:h[r.pos.x]:null,o=r?(r.z===1&&(a!=null&&a.over)?a.over.height:(a==null?void 0:a.height)??0)*wt:0;this.groundPlane.constant=-o;const l=new F;if(!this.raycaster.ray.intersectPlane(this.groundPlane,l))return null;const c=Math.round(l.x),u=Math.round(l.z);return c<0||u<0||c>=this.W||u>=this.H?null:{x:c,y:u}}dispose(){var e,t;this.active=!1,this.raf&&cancelAnimationFrame(this.raf),this.clearFx();for(const n of this.numTex.values())n.tex.dispose();this.numTex.clear(),(e=this.canvas)==null||e.remove(),(t=this.gl)==null||t.dispose()}setActive(e){this.active=e,e&&(this.resizeFrames=8),this.canvas&&(this.canvas.style.display=e?"block":"none"),e||this.clearFx()}shortLerp(e,t,n){const s=Math.PI*2;let r=(t-e)%s;return r>Math.PI&&(r-=s),r<-Math.PI&&(r+=s),e+r*n}loop(){var n,s;if(this.raf=requestAnimationFrame(()=>this.loop()),!this.active||!this.g)return;this.resizeFrames>0&&(this.resizeFrames--,this.resize(this.mobile));const e=this.g.actors.find(r=>r.kind==="hero");if(e){const r=e.facing||{dx:0,dy:1},a=Math.round(Math.atan2(r.dy,r.dx)/(Math.PI/2))*(Math.PI/2);this.camYaw=this.shortLerp(this.camYaw,a+Math.PI,.16);const o=(n=this.g.floor.tiles[e.pos.y])==null?void 0:n[e.pos.x],l=(e.z===1&&(o!=null&&o.over)?o.over.height:(o==null?void 0:o.height)??0)*wt;{let d=1e9;if(e.z!==1)for(const[m,_]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]]){const g=(s=this.g.floor.tiles[e.pos.y+_])==null?void 0:s[e.pos.x+m];if(g!=null&&g.over&&g.over.height*wt>l){d=l+1.45;break}}this.uCutY.value=d}const c=this.moveCh.sample(e.id,performance.now());this.wantTgt.set((c==null?void 0:c.x)??e.pos.x,.4+((c==null?void 0:c.y)??l),(c==null?void 0:c.z)??e.pos.y),this.camTarget.lerp(this.wantTgt,.25);const u=8.1*this.zoom,f=u*Math.cos(this.camPitch),h=u*Math.sin(this.camPitch);if(this.camera.position.set(this.camTarget.x+f*Math.cos(this.camYaw),this.camTarget.y+h,this.camTarget.z+f*Math.sin(this.camYaw)),this.camera.lookAt(this.camTarget),this.heroL){const d=performance.now()*.001;this.heroL.position.set(this.camTarget.x,this.camTarget.y+1.55,this.camTarget.z),this.heroL.intensity=this.env.heroI*(.92+.05*Math.sin(d*9.3)+.04*Math.sin(d*23.7))}}const t=performance.now();if(this.shakeT0>=0){const r=(t-this.shakeT0)/360;if(r>=1)this.shakeT0=-1;else if(r>=0){const a=this.shakeAmp*(1-r);this.camera.position.x+=Math.sin(t*.055)*a,this.camera.position.y+=Math.sin(t*.047+1.7)*a*.6}}this.tickFx(t),this.gl.render(this.scene,this.camera)}mat(e){let t=this.matCache.get(e);return t||(t=new ir({color:e}),this.matCache.set(e,t)),t}matE(e){let t=this.matECache.get(e);return t||(t=new ii({color:e}),this.matECache.set(e,t)),t}contactShadow(){if(!this._shadow){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,2,32,32,31);n.addColorStop(0,"rgba(0,0,0,0.42)"),n.addColorStop(.6,"rgba(0,0,0,0.20)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const s=new Dl(e),r=new ii({map:s,transparent:!0,depthWrite:!1,toneMapped:!1}),a=new Vi(1,1);a.rotateX(-Math.PI/2),this._shadow={geo:a,mat:r}}return this._shadow}add(e,t,n,s,r,a,o){const l=new je(Vt,this.mat(o));l.position.set(e,t,n),l.scale.set(s,r,a),this.group.add(l)}addG(e,t,n,s,r,a,o,l){const c=new je(e,this.mat(l));c.position.set(t,n,s),c.scale.set(r,a,o),this.group.add(c)}addGE(e,t,n,s,r,a,o,l){const c=new je(e,this.matE(l));c.position.set(t,n,s),c.scale.set(r,a,o),this.group.add(c)}vox(e,t,n,s,r,a,o){this.voxBuf.push(e,t,n,s,r,a,o)}voxE(e,t,n,s,r,a,o){this.voxBufE.push(e,t,n,s,r,a,o)}flushBuf(e,t){const n=e.length/7;if(!n)return null;const s=new Su(Vt,t,n);for(let r=0;r<n;r++){const a=r*7;this._m4.makeScale(e[a+3],e[a+4],e[a+5]),this._m4.setPosition(e[a],e[a+1],e[a+2]),s.setMatrixAt(r,this._m4),s.setColorAt(r,this._vc.setHex(e[a+6]))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.frustumCulled=!1,this.group.add(s),s}flushVox(){this.flushBuf(this.voxBuf,this.voxMat),this.voxBuf=[];const e=this.flushBuf(this.voxBufE,this.voxMatE);return this.voxBufE=[],e}stairStep(e,t,n,s,r,a){const o=Q(11581638,(.9+(e*17+t*31)%4*.04)*a),l=r-wt,c=r-wt*.5,u=c-l,f=(l+c)/2,h=.9,d=.5,m=.5+d/2;n!==0?this.vox(e+n*m,f,t,d,u,h,o):this.vox(e,f,t+s*m,h,u,d,o)}faceBricks(e,t,n,s,r,a,o,l,c,u,f,h=0,d=-1){const m=Et/c,_=1/u,g=.04;for(let p=0;p<c;p++){const y=p%2?-_/2:0,T=(p+.5)*m+h;for(let S=-1;S<=u;S++){let R=-.5+y+S*_,A=R+_;R=Math.max(R,-.5),A=Math.min(A,.5);const I=A-R;if(I<.06)continue;const x=(R+A)/2,w=e*73+t*131+p*17+S*23>>>0;let M=Tt(r,a,(w>>7)%7/6);p===d?M=Tt(M,o,.85):l>0&&w%97<l*97&&(M=Tt(M,o,.7));const E=(.82+w%6*.056)*(p===0?.82:1),C=.09+(w>>4)%5*.016+(p===d?.03:0),D=I-g,G=m-g,L=Q(M,E*f);n!==0?this.vox(e+n*.5,T,t+x,C,G,D,L):this.vox(e+x,T,t+s*.5,D,G,C,L)}}}capStones(e,t,n,s,r,a=0){const o=1/s,l=.04;for(let c=0;c<s;c++)for(let u=0;u<s;u++){const f=e*53+t*97+c*13+u*29>>>0,h=.88+f%5*.05;this.vox(e-.5+(c+.5)*o,Et+.03+a,t-.5+(u+.5)*o,o-l,.1+(f>>3)%3*.025,o-l,Q(n,h*r))}}floorStones(e,t,n,s=0,r=!1){const a=this.env,o=.05;s>0&&this.vox(e,s/2-.05,t,.96,s,.96,Q(2239032,n)),this.vox(e,s-.085,t,.98,.06,.98,Q(1317673,n));let l=e*374761393+t*668265263>>>0||1;const c=()=>(l^=l<<13,l^=l>>>17,l^=l<<5,l>>>=0,l/4294967296),u=2+(c()<.5?1:0),f=[];let h=0;for(let m=0;m<u;m++){const _=.6+c()*.9;f.push(_),h+=_}let d=-.5;for(let m=0;m<u;m++){const _=f[m]/h,g=1+(c()<.5?1:0),p=[];let y=0;for(let S=0;S<g;S++){const R=.6+c()*.9;p.push(R),y+=R}let T=-.5;for(let S=0;S<g;S++){const R=p[S]/y,A=.82+c()*.3,I=.055+c()*.075;let x=Tt(a.floorA,a.floorB,c());c()<a.accP&&(x=Tt(x,a.floorAcc,.7)),r&&(x=Tt(Q(x,.82),1849941,.38)),this.vox(e+T+R/2,s-.06+I/2,t+d+_/2,R-o,I,_-o,Q(x,A*n)),T+=R}d+=_}if(c()<a.crackP){const m=c()<.5,_=-.3+c()*.6,g=.3+c()*.45;this.vox(e+(m?_*.4:_),s+.005,t+(m?_:_*.4),m?g:.035,.11,m?.035:g,Q(790551,n))}a.glowP>0&&c()<a.glowP&&n>=1&&this.voxE(e+(-.3+c()*.6),s+.03,t+(-.3+c()*.6),.055,.045,.055,Q(a.glowCol,.75+c()*.25))}buildOverDeck(e,t,n,s,r,a){var g;const o=s.over,l=o.height*wt,c=o.mat==="wood",u=c?8018484:9081764,f=c?9398846:10134450,h=c?4535074:4870750,d=c?5980967:6581368,m=c?7163952:7831692,_=t*53+n*97>>>0;this.vox(t,l-.16,n,.98,.07,.98,Q(h,r));for(let p=0;p<2;p++)this.vox(t,l-.05,n-.245+p*.49,.96,.09,.44,Q(p?f:u,(.88+(_>>p)%4*.05)*r));for(const[p,y]of fn){const T=(g=e.tiles[n+y])==null?void 0:g[t+p];T!=null&&T.over||(p!==0?(this.vox(t+p*.45,l+.16,n,.07,.32,.96,Q(m,r)),this.vox(t+p*.45,l+.34,n,.09,.05,.99,Q(m,1.15*r))):(this.vox(t,l+.16,n+y*.45,.96,.32,.07,Q(m,r)),this.vox(t,l+.34,n+y*.45,.99,.05,.09,Q(m,1.15*r))))}if((t+n&1)===0&&!s.zstep){const p=l-.16-a;this.vox(t-.38,a+p/2,n-.38,.1,p,.1,Q(d,.92*r)),this.vox(t+.38,a+p/2,n+.38,.1,p,.1,Q(d,.92*r))}if(s.zstep){const p=l-a;for(const T of[-.17,.17])this.vox(t+T,a+p/2,n+.42,.06,p+.1,.06,Q(9071166,r));const y=Math.max(3,Math.round(p/.28));for(let T=1;T<y;T++)this.vox(t,a+p*T/y,n+.42,.36,.05,.05,Q(10517576,r))}}buildChest(e,t,n,s=0){this.add(e,s+.17,t,.52,.3,.42,n?4862496:8014376),this.add(e-.18,s+.17,t,.05,.34,.44,14726460),this.add(e+.18,s+.17,t,.05,.34,.44,14726460),n?(this.add(e,s+.42,t-.2,.54,.06,.16,6174752),this.add(e,s+.2,t,.32,.04,.32,16770976)):(this.add(e,s+.37,t,.54,.12,.44,6174752),this.add(e,s+.37,t,.56,.05,.46,14726460),this.add(e,s+.22,t+.22,.1,.12,.05,14726460))}buildShrine(e,t,n,s=0){n==="spring"?(this.add(e,s+.05,t,.72,.1,.72,5921362),this.add(e,s+.04,t,.5,.08,.5,2779802),this.addGE(Dt,e,s+.2,t,.18,.18,.18,10477823)):(this.add(e,s+.16,t,.5,.32,.5,6971992),this.add(e,s+.34,t,.34,.06,.34,4867648),this.addGE(Dt,e,s+.5,t,.22,.26,.22,13213951))}buildStairs(e,t,n=0){this.add(e,n-.64,t,.9,.06,.9,329484),this.add(e-.47,n-.3,t,.06,.7,.9,1317410),this.add(e+.47,n-.3,t,.06,.7,.9,1317410),this.add(e,n-.3,t+.47,.9,.7,.06,1317410);const s=5,r=.84/s;for(let a=0;a<s;a++){const o=t-.42+a*r,l=n-.05-a*(.64/s);this.add(e,l,o,.8,.06,r+.04,Q(11450566,a%2?.82:1)),this.add(e,l-.07,o-r/2,.8,.13,.03,2765629)}this.addGE(Vt,e,n+.06,t-.47,.82,.05,.08,8307823)}roadStones(e,t,n){this.vox(e,-.085,t,.98,.06,.98,Q(1776150,n));let s=e*668265263+t*374761393>>>0||1;const r=()=>(s^=s<<13,s^=s>>>17,s^=s<<5,s>>>=0,s/4294967296);for(let a=0;a<2;a++)for(let o=0;o<2;o++){let l=Tt(7236188,8353639,r());r()<.08&&(l=Tt(l,6779727,.6));const c=.05+r()*.035;this.vox(e-.25+o*.5,-.06+c/2,t-.25+a*.5,.44,c,.44,Q(l,(.9+r()*.18)*n))}}townDirt(e,t){this.vox(e,-.07,t,.98,.09,.98,2892826)}buildFence(e,t,n,s,r,a){this.townDirt(e,t);const o=5980967,l=7163952;this.vox(e,.34,t,.14,.68,.14,o),this.vox(e,.71,t,.19,.07,.19,Q(o,1.15));for(const[c,u,f]of[[n,1,0],[s,-1,0],[r,0,-1],[a,0,1]])if(c)for(const h of[.26,.5])u!==0?this.vox(e+u*.28,h,t,.5,.07,.09,Q(l,h>.3?1.06:.94)):this.vox(e,h,t+f*.28,.09,.07,.5,Q(l,h>.3?1.06:.94))}buildTree(e,t){this.townDirt(e,t);const n=e*73+t*131>>>0,s=r=>((n>>r)%5-2)*.04;this.vox(e,.06,t,.32,.1,.32,4010272),this.vox(e,.42,t,.16,.72,.16,6178090),this.vox(e+s(2),.92,t+s(4),.84,.5,.84,Q(3958322,.92+n%5*.05)),this.vox(e+s(6),1.28,t+s(8),.6,.42,.6,Q(4880956,.92+(n>>3)%5*.05)),this.vox(e+s(10),1.56,t+s(12),.34,.3,.34,Q(5737030,.95+(n>>5)%4*.05))}buildBrazier(e,t){this.townDirt(e,t);const n=3683374,s=this.env;for(const[r,a]of[[-.16,-.16],[.16,-.16],[-.16,.16],[.16,.16]])this.vox(e+r,.16,t+a,.07,.32,.07,n);this.vox(e,.38,t,.46,.16,.46,Q(n,1.1)),this.vox(e,.47,t,.52,.05,.52,Q(n,1.3)),this.voxE(e,.51,t,.32,.08,.32,Q(s.flame,.85)),this.voxE(e+.02,.62,t-.02,.18,.18,.18,s.flame),this.voxE(e,.75,t,.1,.12,.1,s.flameCore),this.vox(e,.005,t+0,.9,.02,.9,Q(s.flame,.22))}buildFountain(e,t){const n=this.env,s=7763584;this.vox(e,.05,t,1,.1,1,Q(s,.85));for(const[r,a,o,l]of[[0,-.43,.9,.14],[0,.43,.9,.14],[-.43,0,.14,.9],[.43,0,.14,.9]])this.vox(e+r,.26,t+a,o,.32,l,s);for(const[r,a]of[[-.43,-.43],[.43,-.43],[-.43,.43],[.43,.43]])this.vox(e+r,.3,t+a,.18,.4,.18,Q(s,1.12));this.vox(e,.3,t,.68,.1,.68,n.water),this.voxE(e-.14,.37,t+.1,.34,.02,.14,Q(n.sparkle,.8)),this.voxE(e+.16,.37,t-.14,.22,.02,.12,Q(n.sparkle,.6)),this.vox(e,.62,t,.16,.55,.16,Q(s,1.05)),this.vox(e,.92,t,.46,.08,.46,Q(s,1.18)),this.voxE(e,1.16,t,.09,.42,.09,Q(n.sparkle,.9));for(const[r,a]of[[-.2,.12],[.18,-.16],[.06,.2]])this.voxE(e+r,.66,t+a,.05,.16,.05,Q(n.sparkle,.6))}buildPortalGate(e,t,n,s=!1){const r=n?{fire:14704698,ice:7317759,earth:13148256,holy:16771496}[n]??9425279:16761194;if(!s){this.vox(e,-.2,t,.8,.1,.8,460813);for(const[o,l,c,u]of[[0,-.44,.92,.08],[0,.44,.92,.08],[-.44,0,.08,.92],[.44,0,.08,.92]])this.voxE(e+o,-.02,t+l,c,.05,u,Q(r,.8))}const a=5130840;for(const o of[-.42,.42])this.vox(e,.08,t+o,.28,.16,.28,Q(a,.85)),this.vox(e,.85,t+o,.18,1.4,.18,a),this.vox(e,1.6,t+o,.24,.1,.24,Q(a,1.2)),this.voxE(e,1.28,t+o,.09,.11,.09,r);this.vox(e,1.72,t,.24,.13,1.1,Q(a,1.1)),this.addGE(Dt,e,1.92,t,.2,.26,.2,r)}buildHouse(e,t,n,s,r,a){const o={equip:14729312,heal:7268264,shop:14717770,craft:13208146,recruit:8369151},l=e*97+t*61>>>0,c=Q(14272677,.88+l%5*.045),u=4863009,f=Q(9061938,.85+(l>>3)%5*.06),h=e+(n-1)/2,d=t+(s-1)/2,m=n-.16,_=s-.16,g=a?a.y>t+s-1?1:-1:1,p=g>0?t+s-1+.42:t-.42,y=r==="heal",T=y?1.72:1.16,S=.24+T;this.vox(h,.12,d,m,.24,_,7039860),this.vox(h,.24+T/2,d,m-.05,T,_-.05,c);for(const[w,M]of[[e-.5+.14,t-.5+.14],[e+n-1+.5-.14,t-.5+.14],[e-.5+.14,t+s-1+.5-.14],[e+n-1+.5-.14,t+s-1+.5-.14]])this.vox(w,.24+T/2,M,.12,T,.12,u);this.vox(h,S-.05,d,m+.02,.1,_+.02,u),y&&this.vox(h,.24+T*.52,d,m+.01,.09,_+.01,u);const R=_/2+.24,A=4,I=(R-.16)/A,x=.15;for(let w=0;w<A;w++)this.vox(h,S+.04+(w+.5)*x,d,m+.3-w*.02,x,(R-w*I)*2,Q(f,1-w*.05));if(this.vox(h,S+.04+A*x+.05,d,m+.2,.1,.3,Q(f,.72)),a){const w=a.x;this.vox(w,.24,d+g*(_/2-.3),.66,.48,.4,Q(7039860,1.05)),this.vox(w,.72,p+g*.06,.52,1,.1,4862496),this.vox(w,1.28,p+g*.07,.66,.12,.12,u),this.vox(w,.04,p+g*.3,.6,.08,.34,7828586),this.voxE(w-.4,1.36,p+g*.14,.09,.08,.09,this.env.flame),this.vox(w+.42,1.5,p+g*.14,.06,.06,.3,u),this.vox(w+.42,1.26,p+g*.3,.3,.3,.06,o[r]??13421772),this.vox(w+.42,1.26,p+g*.33,.14,.14,.03,Q(o[r]??13421772,.4));for(let M=e;M<e+n;M++)M!==w&&(this.vox(M,.9,p+g*.04,.4,.46,.08,u),this.voxE(M,.9,p+g*.08,.3,.34,.04,r==="craft"?16752725:16767370),y&&(this.vox(M,1.62,p+g*.04,.36,.4,.08,u),this.voxE(M,1.62,p+g*.08,.26,.3,.04,16767370)))}if(r==="craft"){const w=e+n-1+.24,M=t+s-1-.2*g;this.vox(w,S/2+.6,M,.26,S+1.2,.26,5921378),this.vox(w,S+1.26,M,.34,.1,.34,4868690),this.voxE(w,S+1.34,M,.14,.08,.14,16747066)}if(r==="shop"&&a)for(let w=0;w<2;w++)for(let M=0;M<n*2;M++){const E=e-.5+.25+M*.5;E>e+n-1+.4||this.vox(E,1.5-w*.09,p+g*(.2+w*.26),.46,.06,.3,(M+w)%2?13130824:15129796)}}buildTownHouses(e){var n,s;const t=new Set;for(let r=0;r<this.H;r++)for(let a=0;a<this.W;a++){const o=e.tiles[r][a];if(!o.building||t.has(a+","+r))continue;const l=o.building;let c=a,u=a,f=r,h=r;const d=[[a,r]];for(t.add(a+","+r);d.length;){const[_,g]=d.pop();c=Math.min(c,_),u=Math.max(u,_),f=Math.min(f,g),h=Math.max(h,g);for(const[p,y]of fn){const T=_+p,S=g+y,R=(n=e.tiles[S])==null?void 0:n[T],A=T+","+S;R&&R.building===l&&!t.has(A)&&(t.add(A),d.push([T,S]))}}let m=null;for(let _=c;_<=u&&!m;_++)for(const g of[h+1,f-1]){const p=(s=e.tiles[g])==null?void 0:s[_];if(p&&p.facility===l){m={x:_,y:g};break}}this.buildHouse(c,f,u-c+1,h-f+1,l,m)}}meshIn(e,t,n,s,r,a,o,l){const c=new je(Vt,this.mat(l));c.position.set(t,n,s),c.scale.set(r,a,o),e.add(c)}bodyFor(e,t=!1){let n;if(e.kind==="monster"){if(zi(e)){const o=Er(qh(e)),l=t?o.key+":lo":o.key;return this.bodyCache.has(l)||(this.bodyCache.set(l,o.geo),this.glowCache.set(l,o.spots)),{key:l,geo:this.bodyCache.get(l)}}const a=Ms(e);n=`m:${a}${a==="beast"?":"+(e.color??""):""}${a==="caster"?":"+(e.element??""):""}`}else n=Ho(e);const s=t?n+":lo":n;let r=this.bodyCache.get(s);if(!r){const a=Yh(e,t);r=a.geo,this.bodyCache.set(s,r),this.glowCache.set(s,a.spots)}return{key:s,geo:r}}gaitMatFor(e){let t=this.gaitMats.get(e);return t||(t=uo(),this.gaitMats.set(e,t)),t}idHash(e){let t=0;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)>>>0;return t%997/997*Math.PI*2}placeFigure(e,t,n=0,s=!1){const r=new Jt,a=e.facing||{dx:0,dy:1},o=((e.size??1)-1)/2,{key:l,geo:c}=this.bodyFor(e,s),u=Cr(e),f=Math.atan2(a.dx,a.dy),h=performance.now();this.moveCh.note(e.id,e.pos.x+o,n,e.pos.y+o,f,h,u);const d=this.moveCh.sample(e.id,h),m=this.gaitMatFor(e.id),_=e.kind==="monster"&&zi(e)?fo(e)/100:1;{const y=new je(c,m);_!==1&&y.scale.setScalar(_),r.add(y)}{const y=this.contactShadow(),T=new je(y.geo,y.mat),S=(e.size??1)*1.02*_;T.scale.set(S,1,S),T.position.y=.03,r.add(T)}const g=this.glowCache.get(l);if(g&&g.length){const y=f,T=Math.cos(y),S=Math.sin(y);this.spotRefs.set(e.id,{start:this.voxBufE.length/7,spots:g,k:_});for(const R of g)this.voxE(e.pos.x+o+(R.x*T+R.z*S)*_,n+R.y*_,e.pos.y+o+(-R.x*S+R.z*T)*_,R.sx*_,R.sy*_,R.sz*_,R.c)}r.rotation.y=d.ry,r.position.set(d.x,d.y,d.z),r.userData={bx:d.x,by:d.y,bz:d.z,ry:d.ry,geo:c,gaitP:u,mat:m,hash:this.idHash(e.id)},this.actorGrp.set(e.id,r),e.dormant&&this.meshIn(r,0,1.25,0,.18,.18,.18,13218815),e.captured&&this.meshIn(r,0,.6,0,.74,.06,.74,13279578),t&&this.meshIn(r,0,1.42,0,.16,.16,.16,10478591);let p=1.64;(e.poison??0)>0&&(this.meshIn(r,0,p,0,.11,.11,.11,8376426),p+=.16),(e.paralyze??0)>0&&(this.meshIn(r,0,p,0,.11,.11,.11,16767050),p+=.16),(e.confused??0)>0&&(this.meshIn(r,0,p,0,.11,.11,.11,16747216),p+=.16),this.group.add(r)}rebuild(){var d,m,_,g,p,y,T,S,R,A,I,x,w;const e=this.g,t=this.v;if(!e)return;const n=e.floor,s=e.depth===0?n.interior?"interior":"town":e.theme&&wn[e.theme]?e.theme:"plain";if(s!==this.envKey&&(this.envKey=s,this.env=wn[s],this.applyEnv()),this.inited||(this.W=n.w,this.H=n.h,this.setupStage(),this.inited=!0),this.group.traverse(M=>{M.isInstancedMesh&&M.dispose()}),this.scene.remove(this.group),this.group=new Jt,this.scene.add(this.group),this.actorGrp.clear(),this.spotRefs.clear(),this.badgeGrps.clear(),this.imE=null,n!==this.lastFloorRef&&(this.lastFloorRef=n,this.moveCh.reset()),this.moveCh.beginTurn(),this.moveCh.prune(),this.gaitMats.size>128)for(const[M,E]of this.gaitMats)e.actors.some(C=>C.id===M)||(E.dispose(),this.gaitMats.delete(M));const r=M=>M.seen,a=M=>M.visible;for(let M=0;M<this.H;M++)for(let E=0;E<this.W;E++){const C=n.tiles[M][E];if(!r(C))continue;const D=(C.height??0)*wt;if(C.kind==="wall"){if(this.envKey==="town"){if(C.deco==="fence"){const q=(ie,ee)=>{var Se;const ae=(Se=n.tiles[M+ee])==null?void 0:Se[E+ie];return!!ae&&ae.kind==="wall"&&(ae.deco==="fence"||!!ae.building)};this.buildFence(E,M,q(1,0),q(-1,0),q(0,-1),q(0,1))}else C.deco==="tree"?this.buildTree(E,M):C.deco==="brazier"?this.buildBrazier(E,M):C.deco==="fountain"&&this.buildFountain(E,M);continue}const G=a(C),L=G?1:.5,z=this.env,B=Tt(z.wallA,z.wallB,.4);if(C.low){D>0&&this.vox(E,D/2-.05,M,.96,D,.96,Q(2239032,L)),this.vox(E,D+.24,M,.92,.48,.92,Q(Q(B,.88),L)),this.vox(E,D+.51,M,.99,.08,.99,Q(Q(B,1.18),L));continue}if(C.pillar){this.floorStones(E,M,L,D),this.vox(E,D+.07,M,.62,.14,.62,Q(Q(B,.72),L)),this.vox(E,D+Et*.5+.1,M,.38,Et,.38,Q(B,L)),this.vox(E,D+Et+.14,M,.58,.12,.58,Q(Q(B,1.18),L));continue}const Y=C.breakable?10251070:C.locked?14198840:z.wallA,Z=C.breakable?Q(10251070,.8):C.locked?Q(14198840,.85):z.wallB,se=C.breakable||C.locked?Y:z.wallAcc,ne=C.breakable||C.locked?0:z.wallAccP,oe=C.breakable?3811864:C.locked?4864530:z.wallCore,De=C.breakable?6:C.locked?4:5,Ze=C.breakable?4:C.locked?2:3,Ge=!C.breakable&&!C.locked&&z.band!=null?De-2:-1;this.vox(E,(Et+D)/2,M,.96,Et+D,.96,Q(oe,L));for(const[q,ie]of fn){const ee=(d=n.tiles[M+ie])==null?void 0:d[E+q];ee&&r(ee)&&ee.kind!=="wall"&&this.faceBricks(E,M,q,ie,Y,Z,se,ne,De,Ze,L,D,Ge)}if(this.capStones(E,M,Q(Tt(Y,Z,.5),1.1),Ze,L,D),G&&!C.breakable&&!C.locked&&(E*61+M*167>>>0)%z.torchN===0)for(const[q,ie]of fn){const ee=(m=n.tiles[M+ie])==null?void 0:m[E+q];if(ee&&ee.kind==="floor"&&r(ee)){const ae=E+q*.5,Se=M+ie*.5;this.add(ae,D+.8,Se,.08,.2,.08,2891800),this.voxE(ae+q*.05,D+.98,Se+ie*.05,.12,.14,.12,z.flame),this.voxE(ae+q*.05,D+1.07,Se+ie*.05,.07,.09,.07,z.flameCore),this.vox(ae+q*.28,D+.02,Se+ie*.28,.5,.02,.5,Q(z.flame,.28));break}}}else if(C.floorFeat==="pit")this.add(E,D-.5,M,.92,.1,.92,329485),this.add(E,D-.18,M,.98,.5,.05,1053725),this.add(E,D-.18,M,.05,.5,.98,1053725);else if(C.floorFeat==="water"){const G=a(C)?1:.5,L=this.env;this.vox(E,D-.3,M,.99,.08,.99,Q(L.waterDeep,G)),this.vox(E,D-.16,M,.96,.1,.96,Q(L.water,G)),a(C)&&((E*31+M*17&1)===0?this.voxE(E-.12,D-.1,M+.1,.42,.02,.2,Q(L.sparkle,.8)):this.voxE(E+.14,D-.1,M-.12,.3,.02,.16,Q(L.sparkle,.8)))}else{const G=a(C),L=G?1:.55,z=E===n.stairs.x&&M===n.stairs.y;if(!z)if(C.hazard){const B={fire:14704698,poison:8373354,ice:7317759,earth:10518608,holy:16771496}[C.hazard.element]??7317759;this.add(E,D-.06,M,.98,.08,.98,Q(B,.4*L)),G?this.voxE(E,D-.015,M,.78,.035,.78,Q(B,.92)):this.add(E,D-.015,M,.78,.035,.78,Q(B,.5))}else if(C.floorFeat==="slip")this.add(E,D-.05,M,.98,.1,.98,Q(10475775,L)),G&&(E*13+M*7&3)===0&&this.voxE(E+.1,D+.005,M-.08,.3,.015,.06,14217983);else if(C.floorFeat==="dark")this.add(E,D-.05,M,.98,.1,.98,329226);else if((this.envKey==="town"||this.envKey==="interior")&&C.deco==="road"&&!C.hole)this.roadStones(E,M,L);else{let B=!1;for(const[Y,Z]of fn){const se=(_=n.tiles[M+Z])==null?void 0:_[E+Y];if(se&&se.floorFeat==="water"){B=!0;break}}this.floorStones(E,M,L,D,B)}if(!z)for(const[B,Y]of fn){const Z=(g=n.tiles[M+Y])==null?void 0:g[E+B];Z&&r(Z)&&Z.kind==="floor"&&(Z.height??0)===(C.height??0)-1&&Z.floorFeat!=="pit"&&Z.floorFeat!=="water"&&this.stairStep(E,M,B,Y,D,a(C)?1:.55)}if(C.facility){const B=C.facility==="equip"?14729312:C.facility==="heal"?7268264:C.facility==="shop"?14717770:C.facility==="craft"?13208146:8369151;this.vox(E,D-.02,M,.76,.05,.76,Q(B,.5)),this.voxE(E,D+.015,M,.22,.03,.22,Q(B,.95))}if(C.hole&&this.buildPortalGate(E,M,C.hole),C.portal==="return"){const B=a(C)?1:.55;this.add(E,D+.04,M,.9,.08,.9,Q(2761784,B));for(const[Y,Z,se,ne]of[[-.36,0,.1,.8],[.36,0,.1,.8],[0,-.36,.8,.1],[0,.36,.8,.1]])this.add(E+Y,D+.14,M+Z,se,.12,ne,Q(14270563,B));this.addGE(Dt,E,D+.52,M,.3,.46,.3,Q(16771496,B))}else if(C.portal==="elevator"){const B=a(C)?1:.55;this.add(E,D+.06,M,.92,.12,.92,Q(9081764,B)),this.add(E-.4,D+.62,M-.4,.1,1.1,.1,Q(6976386,B)),this.add(E+.4,D+.62,M+.4,.1,1.1,.1,Q(6976386,B)),this.add(E,D+1.16,M,.98,.08,.2,Q(12570850,B))}C.chest&&this.buildChest(E,M,C.chest.opened,D),C.shrine&&this.buildShrine(E,M,C.shrine,D),C.item&&this.addGE(Dt,E,D+.34,M,.62,.62,.62,11702236),C.trap&&!C.trap.hidden&&this.addG(Dt,E,D+.06,M,.7,.18,.7,14830410),C.oneway&&this.addG(Vt,E+C.oneway.dx*.28,D+.16,M+C.oneway.dy*.28,.22,.16,.22,10135224),C.warp&&this.addGE(Dt,E,D+.22,M,.5,.5,.5,5817066),C.over&&this.buildOverDeck(n,E,M,C,G?1:.55,D)}}const o=(M,E)=>{var C,D;return(((D=(C=n.tiles[E])==null?void 0:C[M])==null?void 0:D.height)??0)*wt};if(n.interior||this.buildStairs(n.stairs.x,n.stairs.y,o(n.stairs.x,n.stairs.y)),this.envKey==="town"&&(this.buildPortalGate(n.stairs.x,n.stairs.y,null,!0),this.buildTownHouses(n)),n.upstairs&&n.depth>0){const M=n.upstairs,E=(p=n.tiles[M.y])==null?void 0:p[M.x];if(E&&(E.seen||E.visible)){const C=o(M.x,M.y);this.add(M.x,C+.12,M.y,.72,.24,.72,14270563),this.add(M.x,C+.32,M.y,.44,.18,.44,15720608)}}for(const M of n.zones){const E=M.flags.includes("silence")?5222564:M.flags.includes("buff")?7260280:M.flags.includes("debuff")?13785690:10120904;for(let C=M.rect.y;C<M.rect.y+M.rect.h;C++)for(let D=M.rect.x;D<M.rect.x+M.rect.w;D++){const G=(y=n.tiles[C])==null?void 0:y[D];G&&r(G)&&G.kind==="floor"&&this.add(D,o(D,C)+.03,C,.9,.03,.9,E)}}const l=n.front;if(l)for(let M=0;M<this.H;M++)for(let E=0;E<this.W;E++){const C=n.tiles[M][E];if(!r(C))continue;const D=l.axis==="x"?E:M;(l.dir>0?D<l.edge:D>l.edge)&&C.kind==="floor"&&this.add(E,o(E,M)+.05,M,.95,.05,.95,3108816)}for(const M of n.devices){const E=M.at,C=(T=n.tiles[E.y])==null?void 0:T[E.x];if(M.effect.kind==="dispenser"){C&&r(C)&&this.addG(Vt,E.x,o(E.x,E.y)+.3,E.y,.42,.5,.42,16743002);let D={x:E.x,y:E.y};for(let G=0;G<M.effect.range;G++){D={x:D.x+M.effect.dir.dx,y:D.y+M.effect.dir.dy};const L=(S=n.tiles[D.y])==null?void 0:S[D.x];if(!L||!r(L)||L.kind==="wall")break;this.add(D.x,o(D.x,D.y)+.04,D.y,.6,.05,.6,13781311)}}else if(M.effect.cells)for(const D of M.effect.cells){const G=(R=n.tiles[D.y])==null?void 0:R[D.x];if(!G||!r(G))continue;const L=o(D.x,D.y);M.effect.kind==="bridge"?G.floorFeat!=="pit"&&(this.add(D.x,L+.04,D.y,.84,.08,.98,8015394),this.add(D.x,L+.09,D.y,.9,.04,.16,6175256),this.add(D.x,L+.09,D.y-.4,.9,.04,.16,6175256)):G.kind==="floor"?this.add(D.x,L+.07,D.y,.9,.14,.9,7319146):(this.add(D.x,L+.62,D.y,.18,1.24,.96,13279578),this.add(D.x,L+.62,D.y,.96,1.24,.18,13279578))}M.effect.kind!=="dispenser"&&C&&r(C)&&this.addG(Dt,E.x,o(E.x,E.y)+.28,E.y,.5,.5,.5,M.on?9425279:13279578)}const c=n.sealRoom;if(c&&c.sealed)for(const M of c.doors){const E=(A=n.tiles[M.y])==null?void 0:A[M.x];if(!E||!r(E))continue;const C=o(M.x,M.y);this.add(M.x,C+.62,M.y,.2,1.24,.96,16734826),this.add(M.x,C+.62,M.y,.96,1.24,.2,16734826)}const u=(t==null?void 0:t.aimPreview)??null;if(u){const M=u.arc?7915775:16765286;for(const E of u.tiles)this.add(E.x,o(E.x,E.y)+.12,E.y,.9,.04,.9,M);for(const E of u.aoeCells)this.add(E.x,o(E.x,E.y)+.14,E.y,.92,.05,.92,16742972);if(u.target){const E=u.target.friendlyFire?16734810:M;this.add(u.target.pos.x,o(u.target.pos.x,u.target.pos.y)+.5,u.target.pos.y,1.02,1.02,1.02,E)}}const f=(t==null?void 0:t.selected)??null;for(const M of e.actors)M.alive&&M.kind==="monster"&&(M.size??1)>1&&this.bodyFor(M,!1);const h=(I=e.actors.find(M=>M.kind==="hero"))==null?void 0:I.pos;for(const M of e.actors){if(!M.alive)continue;const E=(x=n.tiles[M.pos.y])==null?void 0:x[M.pos.x];if(M.faction!=="party"&&!(E&&a(E)))continue;const C=(M.z===1&&(E!=null&&E.over)?E.over.height:(E==null?void 0:E.height)??0)*wt,D=h?Math.max(Math.abs(M.pos.x-h.x),Math.abs(M.pos.y-h.y))>11:!1;this.placeFigure(M,M.id===f,C,D);const G=Sc(M).maxHp,L=Math.max(0,Math.min(1,M.hp/G)),z=1.5+((M.size??1)-1)*.75,B=M.kind==="monster",Y=B?!!M.windup||L<1&&((M.hitT??0)>0||(M.introT??0)>0):L<1,Z=B&&!M.windup&&(M.introT??0)<=0&&(M.hitT??0)<=2;if(Y||M.windup||B&&(M.introT??0)>0){const ne=new Jt,oe=this.actorGrp.get(M.id).position;ne.position.set(oe.x,oe.y,oe.z);const De=(Ze,Ge,q,ie,ee,ae,Se,be=!1)=>{const Ye=new je(Vt,be?this.matE(Se):this.mat(Se));Ye.position.set(Ze,Ge,q),Ye.scale.set(ie,ee,ae),ne.add(Ye)};Y&&(De(0,z,0,.72,Z?.05:.07,Z?.1:.13,2764602),De(-.36*(1-L),z,0,Math.max(.02,.72*L),Z?.06:.09,Z?.11:.15,B?Z?10111562:16738922:7268264)),M.windup&&De(0,z+.24,0,.18,.3,.18,16730682),M.kind==="monster"&&(M.introT??0)>0&&(De(0,z+.86,0,.11,.34,.11,16742986,!0),De(0,z+.56,0,.12,.12,.12,16742986,!0)),this.group.add(ne),this.badgeGrps.set(M.id,ne)}if(M.windup)for(const ne of M.windup.cells){const oe=(w=n.tiles[ne.y])==null?void 0:w[ne.x];oe&&r(oe)&&this.add(ne.x,o(ne.x,ne.y)+.1,ne.y,.9,.06,.9,13778751)}}if(this.envKey==="town"||this.envKey==="interior")for(const M of n.npcs??[])this.placeFigure({id:"npc:"+M.name,kind:"ally",race:M.race,color:M.color,pos:M.pos,facing:M.facing,stats:{pie:0},equipment:{}},!1,0);this.imE=this.flushVox()}buildSample(e,t){const n=this.group,s=this.voxBuf,r=this.voxBufE,a=this.env,o=new Jt;this.group=o,this.voxBuf=[],this.voxBufE=[],this.env=t.startsWith("town")?wn.town:wn[e]??wn.plain;const l=this.env,c=d=>{for(let m=0;m<=2;m++)for(let _=0;_<=2;_++)(!d||!d(_,m))&&this.floorStones(_,m,1)},u=(d,m)=>d===1&&m===1,f=(d,m)=>{c(u);const _=d?10251070:m?14198840:l.wallA,g=d?Q(10251070,.8):m?Q(14198840,.85):l.wallB,p=d||m?_:l.wallAcc,y=d||m?0:l.wallAccP,T=d?3811864:m?4864530:l.wallCore,S=d?6:m?4:5,R=d?4:m?2:3,A=!d&&!m&&l.band!=null?S-2:-1;this.vox(1,Et/2,1,.96,Et,.96,T);for(const[I,x]of fn)this.faceBricks(1,1,I,x,_,g,p,y,S,R,1,0,A);this.capStones(1,1,Q(Tt(_,g,.5),1.1),R,1)},h=Tt(l.wallA,l.wallB,.4);switch(t){case"floor":c();break;case"floor-high":{for(let d=0;d<=2;d++)this.floorStones(0,d,1),this.floorStones(1,d,1),this.floorStones(2,d,1,wt);this.stairStep(2,1,-1,0,wt,1);break}case"water":{for(let d=0;d<=2;d++)for(let m=0;m<=2;m++)u(m,d)||this.floorStones(m,d,1,0,Math.abs(m-1)+Math.abs(d-1)===1);this.vox(1,-.3,1,.99,.08,.99,l.waterDeep),this.vox(1,-.16,1,.96,.1,.96,l.water),this.voxE(1-.12,-.1,1+.1,.42,.02,.2,Q(l.sparkle,.8));break}case"wall":f(!1,!1);break;case"wall-breakable":f(!0,!1);break;case"wall-locked":f(!1,!0);break;case"torch":{f(!1,!1);const d=1,m=1.5;this.add(d,.8,m,.08,.2,.08,2891800),this.voxE(d,.98,m+.05,.12,.14,.12,l.flame),this.voxE(d,1.07,m+.05,.07,.09,.07,l.flameCore),this.vox(d,.02,m+.28,.5,.02,.5,Q(l.flame,.28));break}case"low":{c(u),this.vox(1,.24,1,.92,.48,.92,Q(h,.88)),this.vox(1,.51,1,.99,.08,.99,Q(h,1.18));break}case"pillar":{c(),this.vox(1,.07,1,.62,.14,.62,Q(h,.72)),this.vox(1,Et*.5+.1,1,.38,Et,.38,h),this.vox(1,Et+.14,1,.58,.12,.58,Q(h,1.18));break}case"stairs":c(u),this.buildStairs(1,1);break;case"upstairs":c(),this.add(1,.12,1,.72,.24,.72,14270563),this.add(1,.32,1,.44,.18,.44,15720608);break;case"chest":c(),this.buildChest(1,1,!1);break;case"chest-open":c(),this.buildChest(1,1,!0);break;case"shrine-spring":c(),this.buildShrine(1,1,"spring");break;case"shrine-altar":c(),this.buildShrine(1,1,"altar");break;case"portal-return":{c(),this.add(1,.04,1,.9,.08,.9,2761784);for(const[d,m,_,g]of[[-.36,0,.1,.8],[.36,0,.1,.8],[0,-.36,.8,.1],[0,.36,.8,.1]])this.add(1+d,.14,1+m,_,.12,g,14270563);this.addGE(Dt,1,.52,1,.3,.46,.3,16771496);break}case"portal-elevator":{c(),this.add(1,.06,1,.92,.12,.92,9081764),this.add(1-.4,.62,1-.4,.1,1.1,.1,6976386),this.add(1+.4,.62,1+.4,.1,1.1,.1,6976386),this.add(1,1.16,1,.98,.08,.2,12570850);break}case"hazard":{c(u);const d=14704698;this.add(1,-.06,1,.98,.08,.98,Q(d,.4)),this.voxE(1,-.015,1,.78,.035,.78,Q(d,.92));break}case"slip":c(u),this.add(1,-.05,1,.98,.1,.98,10475775),this.voxE(1+.1,.005,1-.08,.3,.015,.06,14217983);break;case"pit":c(u),this.add(1,-.5,1,.92,.1,.92,329485),this.add(1,-.18,1,.98,.5,.05,1053725),this.add(1,-.18,1,.05,.5,.98,1053725);break;case"item":c(),this.addGE(Dt,1,.34,1,.62,.62,.62,11702236);break;case"trap":c(),this.addG(Dt,1,.06,1,.7,.18,.7,14830410);break;case"town-road":for(let d=0;d<=2;d++)for(let m=0;m<=2;m++)this.roadStones(m,d,1);break;case"town-fence":c(),this.buildFence(0,1,!0,!1,!1,!1),this.buildFence(1,1,!0,!0,!1,!1),this.buildFence(2,1,!1,!0,!1,!1);break;case"town-tree":c(u),this.buildTree(1,1);break;case"town-brazier":c(u),this.buildBrazier(1,1);break;case"town-fountain":c(u),this.buildFountain(1,1);break;case"town-portal":c(),this.buildPortalGate(1,1,"fire");break;case"town-counter":{c(),this.vox(1,-.02,1,.76,.05,.76,Q(14725216,.5)),this.voxE(1,.015,1,.22,.03,.22,Q(14725216,.95)),this.vox(1,.24,.24,.92,.48,.5,6966056),this.vox(1,.53,.24,1.02,.07,.62,9071166);break}default:if(t.startsWith("town-house-")){for(let d=0;d<=2;d++)this.roadStones(d,2,1);this.buildHouse(0,0,3,2,t.slice(11),{x:1,y:2})}break}return this.flushVox(),this.group=n,this.voxBuf=s,this.voxBufE=r,this.env=a,o}buildPrefabPreview(e,t){const n=this.group,s=this.voxBuf,r=this.voxBufE,a=this.env,o=new Jt;this.group=o,this.voxBuf=[],this.voxBufE=[],this.env=wn[e]??wn.plain;const l=this.env,c=(h,d)=>{var m;return((m=t.cells[d])==null?void 0:m[h])??null},u=(h,d)=>{var m;return((m=c(h,d))==null?void 0:m.height)??0},f=Tt(l.wallA,l.wallB,.4);for(let h=0;h<t.size.d;h++)for(let d=0;d<t.size.w;d++){const m=t.cells[h][d],_=(m.height??0)*wt;if(m.kind==="wall"){if(m.low){_>0&&this.vox(d,_/2-.05,h,.96,_,.96,2239032),this.vox(d,_+.24,h,.92,.48,.92,Q(f,.88)),this.vox(d,_+.51,h,.99,.08,.99,Q(f,1.18));continue}if(m.pillar){this.floorStones(d,h,1,_),this.vox(d,_+.07,h,.62,.14,.62,Q(Q(f,.72),1)),this.vox(d,_+Et*.5+.1,h,.38,Et,.38,f),this.vox(d,_+Et+.14,h,.58,.12,.58,Q(f,1.18));continue}const g=!!m.breakable,p=g?10251070:l.wallA,y=g?Q(10251070,.8):l.wallB,T=g?p:l.wallAcc,S=g?0:l.wallAccP,R=g?3811864:l.wallCore,A=g?6:5,I=g?4:3,x=!g&&l.band!=null?A-2:-1;this.vox(d,(Et+_)/2,h,.96,Et+_,.96,R);for(const[w,M]of fn){const E=c(d+w,h+M);(!E||E.kind!=="wall")&&this.faceBricks(d,h,w,M,p,y,T,S,A,I,1,_,x)}this.capStones(d,h,Q(Tt(p,y,.5),1.1),I,1,_)}else if(m.floorFeat==="water")this.vox(d,_-.3,h,.99,.08,.99,l.waterDeep),this.vox(d,_-.16,h,.96,.1,.96,l.water),(d*31+h*17&1)===0&&this.voxE(d-.12,_-.1,h+.1,.42,.02,.2,Q(l.sparkle,.8));else{if(m.hazard){const g={fire:14704698,poison:8373354,ice:7317759,earth:10518608,holy:16771496}[m.hazard.element]??7317759;this.add(d,_-.06,h,.98,.08,.98,Q(g,.4)),this.voxE(d,_-.015,h,.78,.035,.78,Q(g,.92))}else if(m.floorFeat==="slip")this.add(d,_-.05,h,.98,.1,.98,10475775),(d*13+h*7&3)===0&&this.voxE(d+.1,_+.005,h-.08,.3,.015,.06,14217983);else{let g=!1;for(const[p,y]of fn){const T=c(d+p,h+y);if(T&&T.kind==="floor"&&T.floorFeat==="water"){g=!0;break}}this.floorStones(d,h,1,_,g)}for(const[g,p]of fn){const y=c(d+g,h+p);y&&y.kind==="floor"&&u(d+g,h+p)===(m.height??0)-1&&y.floorFeat!=="water"&&this.stairStep(d,h,g,p,_,1)}}}for(const h of t.props??[]){const d=u(h.x,h.y)*wt;h.kind==="chest"||h.kind==="chest-trapped"?this.buildChest(h.x,h.y,!1,d):h.kind==="shrine-spring"?this.buildShrine(h.x,h.y,"spring",d):h.kind==="shrine-altar"?this.buildShrine(h.x,h.y,"altar",d):h.kind==="portal-return"?(this.add(h.x,d+.04,h.y,.9,.08,.9,2761784),this.addGE(Dt,h.x,d+.52,h.y,.3,.46,.3,16771496)):h.kind==="portal-elevator"?(this.add(h.x,d+.06,h.y,.92,.12,.92,9081764),this.add(h.x,d+1.16,h.y,.98,.08,.2,12570850)):h.kind==="item"?this.addGE(Dt,h.x,d+.34,h.y,.62,.62,.62,11702236):h.kind==="trap"?this.addG(Dt,h.x,d+.06,h.y,.7,.18,.7,14830410):h.kind==="counter"&&(this.vox(h.x,d-.02,h.y,.76,.05,.76,Q(14725216,.5)),this.voxE(h.x,d+.015,h.y,.22,.03,.22,Q(14725216,.95)))}for(const h of t.ports??[]){const d=u(h.x,h.y)*wt;this.voxE(h.x,d+.03,h.y,.8,.05,.8,9425279)}return this.flushVox(),this.group=n,this.voxBuf=s,this.voxBufE=r,this.env=a,o}setImpact(e,t,n){const s=e+","+t;this.impactDelay.set(s,Math.max(this.impactDelay.get(s)??0,n))}consumeActs(){var r;this.impactDelay.clear();const e=(r=this.g)==null?void 0:r.acts;if(!e||!e.length)return;const t=this.g.floor,n=performance.now(),s=(a,o)=>{var l,c;return(((c=(l=t.tiles[o])==null?void 0:l[a])==null?void 0:c.height)??0)*wt};for(const a of e){if(a.seq<=this.lastActSeq)continue;this.lastActSeq=a.seq;const o=a.a,l=((o.size??1)-1)/2,c=(o.size??1)-1,u=s(o.pos.x,o.pos.y),f=o.pos.x+l,h=o.pos.y+l;if(a.kind==="melee")this.actAnims.push({id:o.id,kind:"melee",t0:n,dur:ti.melee,dir:a.dir}),a.to&&this.setImpact(a.to.x,a.to.y,95);else if(a.kind==="shoot"&&a.to){this.actAnims.push({id:o.id,kind:"shoot",t0:n,dur:ti.shoot,dir:a.dir});const m=Math.max(1,Math.max(Math.abs(a.to.x-o.pos.x),Math.abs(a.to.y-o.pos.y))),_=m*(a.arc?58:36);this.spawnProj(a.arc?"stone":"arrow",void 0,f,u+.8+c*.5,h,a.to.x,s(a.to.x,a.to.y)+.55,a.to.y,n+140,_,a.arc?.55+m*.09:0),this.setImpact(a.to.x,a.to.y,140+_)}else if(a.kind==="cast"&&a.to){const m=pc[a.element??""]??14202111;this.actAnims.push({id:o.id,kind:"cast",t0:n,dur:ti.cast,dir:a.dir}),this.spawnCharge(f,u+1.3+c*.6,h,m,260);const _=Math.max(1,Math.max(Math.abs(a.to.x-o.pos.x),Math.abs(a.to.y-o.pos.y))),g=_*42;this.spawnProj("bolt",m,f,u+1.1+c*.5,h,a.to.x,s(a.to.x,a.to.y)+.55,a.to.y,n+260,g,a.arc?.6+_*.1:0);const p=260+g,y=a.aoe??0;for(let T=-y;T<=y;T++)for(let S=-y;S<=y;S++)this.setImpact(a.to.x+S,a.to.y+T,p+Math.max(Math.abs(S),Math.abs(T))*30);y>0&&this.spawnBurst(a.to.x,s(a.to.x,a.to.y)+.5,a.to.y,10+y*4,!1,p,[m,16777215,Q(m,.7)])}else if(a.kind==="heal"&&a.to)this.actAnims.push({id:o.id,kind:"heal",t0:n,dur:ti.heal}),this.spawnHeal(a.to.x,s(a.to.x,a.to.y),a.to.y);else if(a.kind==="windup")this.actAnims.push({id:o.id,kind:"windup",t0:n,dur:ti.windup,dir:a.dir});else if(a.kind==="breath"&&a.cells){this.actAnims.push({id:o.id,kind:"exhale",t0:n,dur:ti.exhale,dir:a.dir});const d=pc[a.element??"poison"]??9428074;for(const m of a.cells){const g=80+Math.max(Math.abs(m.x-f),Math.abs(m.y-h))*70;this.spawnBreathPuff(m.x,s(m.x,m.y),m.y,d,n+g),this.setImpact(m.x,m.y,g+60)}}}}spawnProj(e,t,n,s,r,a,o,l,c,u,f){let h;e==="arrow"?(h=new je(Vt,this.matE(15260864)),h.scale.set(.045,.045,.42)):e==="stone"?(h=new je(Vt,this.mat(10133674)),h.scale.set(.15,.13,.15)):(h=new je(Dt,this.matE(t??14202111)),h.scale.set(.24,.24,.24)),h.visible=!1,this.fxGroup.add(h),this.projs.push({m:h,kind:e,color:t,x0:n,y0:s,z0:r,x1:a,y1:o,z1:l,t0:c,dur:Math.max(90,u),arcH:f})}spawnCharge(e,t,n,s,r){const a=new ii({color:s,transparent:!0,opacity:.9,depthWrite:!1,blending:rr}),o=new je(Dt,a);o.position.set(e,t,n),o.scale.setScalar(.02),this.fxGroup.add(o),this.charges.push({m:o,mat:a,t0:performance.now(),dur:r})}spawnHeal(e,t,n){const s=performance.now();for(let r=0;r<10;r++){const a=new je(Vt,this.matE(r%2?12447944:16771496)),o=.045+Math.random()*.045;a.scale.set(o,o,o),a.visible=!1,a.position.set(e+(Math.random()-.5)*.62,t+.1+Math.random()*.5,n+(Math.random()-.5)*.62),this.fxGroup.add(a),this.parts.push({m:a,vx:(Math.random()-.5)*.15,vy:.65+Math.random()*.5,vz:(Math.random()-.5)*.15,t0:s+r*42,life:640,noG:!0})}}spawnBreathPuff(e,t,n,s,r){for(let a=0;a<5;a++){const o=new je(Vt,this.matE(a===0?Q(s,1.25):s)),l=.07+Math.random()*.09;o.scale.set(l,l,l),o.visible=!1,o.position.set(e+(Math.random()-.5)*.7,t+.15+Math.random()*.75,n+(Math.random()-.5)*.7),this.fxGroup.add(o),this.parts.push({m:o,vx:(Math.random()-.5)*.9,vy:.35+Math.random()*1,vz:(Math.random()-.5)*.9,t0:r+Math.random()*70,life:360+Math.random()*180,noG:!0})}}consumeHits(){var n,s,r;const e=(n=this.g)==null?void 0:n.hits;if(!e||!e.length)return;const t=this.g.floor;for(const a of e){if(a.seq<=this.lastHitSeq)continue;this.lastHitSeq=a.seq;const o=a.a,l=((o.size??1)-1)/2,c=(((r=(s=t.tiles[o.pos.y])==null?void 0:s[o.pos.x])==null?void 0:r.height)??0)*wt,u=this.moveCh.sample(o.id,performance.now()),f=(u==null?void 0:u.x)??o.pos.x+l,h=(u==null?void 0:u.z)??o.pos.y+l,d=((u==null?void 0:u.y)??c)+.7+((o.size??1)-1)*.5,m=o.faction==="party";if((a.kind??"damage")==="heal"){this.addDmgNum(f,d+.95,h,a,0);continue}const _=this.impactDelay.get(o.pos.x+","+o.pos.y)??(a.dir?95:0);a.died||(this.anims.push({id:o.id,t0:performance.now()+_,dir:a.dir}),this.addFlash(o.id,m,_)),this.spawnBurst(f,d,h,a.died?14+((o.size??1)-1)*8:7,m,_),this.addDmgNum(f,d+.95,h,a,_),a.died&&this.spawnGhost(o,f,c,h,a.dir,_),(a.dmg>=12||a.died&&(o.size??1)>=2)&&(this.shakeT0=performance.now()+_,this.shakeAmp=a.died&&(o.size??1)>=2?.11:.07)}}addFlash(e,t,n=0){this.flashes.push({id:e,party:t,m:null,mat:null,t0:performance.now()+n})}spawnBurst(e,t,n,s,r,a=0,o){const l=o??(r?[16738906,16756890,13778751]:[16766814,16747082,13778751]);for(let c=0;c<s;c++){const u=new je(Vt,this.matE(l[c%l.length])),f=.045+Math.random()*.05;u.scale.set(f,f,f),u.visible=a<=0,u.position.set(e+(Math.random()-.5)*.34,t+(Math.random()-.5)*.4,n+(Math.random()-.5)*.34),this.fxGroup.add(u);const h=Math.random()*Math.PI*2,d=1.1+Math.random()*2.2;this.parts.push({m:u,vx:Math.cos(h)*d,vy:1.7+Math.random()*2.6,vz:Math.sin(h)*d,t0:performance.now()+a,life:380+Math.random()*260})}}addDmgNum(e,t,n,s,r=0){var T,S;const a=s.kind??"damage",o=a==="heal",l=a==="poison-tick"||a==="hazard-tick",c=o?`+${s.dmg}`:String(s.dmg),u=o?"#6ee7a8":l?mc[s.element??"poison"]??"#a8e04a":mc[s.element??""]??"#f2f4f8",f=o?"#0d3a24":l?"#5a2a7a":"#181c26",{tex:h,aspect:d}=this.numTexFor(c,u,f,l),m=new kc({map:h,transparent:!0,depthTest:!1,depthWrite:!1}),_=new xu(m);_.renderOrder=60,_.visible=r<=0;const g=(l?.3:o?.34+Math.min(.16,s.dmg*.006):.38+Math.min(.3,s.dmg*.012))*(s.big?1.5:1)*(s.died?1.15:1),p=e+(((T=s.dir)==null?void 0:T.dx)??0)*.24+(Math.random()-.5)*.22,y=n+(((S=s.dir)==null?void 0:S.dy)??0)*.24+(Math.random()-.5)*.22;_.position.set(p,t,y),_.scale.set(g*d,g,1),this.fxGroup.add(_),this.nums.push({m:_,mat:m,aspect:d,t0:performance.now()+r,x:p,y:t,z:y,life:o?900:l?750:s.died||s.big?950:800,sc:g,pop:s.big?1.9:o?1.2:1.4,rise:o?.7:.85})}numTexFor(e,t,n,s){const r=`${e}|${t}|${n}|${s?1:0}`,a=this.numTex.get(r);if(a)return a;if(this.numTex.size>96){const g=this.numTex.keys().next().value;this.numTex.get(g).tex.dispose(),this.numTex.delete(g)}const o=52,l=document.createElement("canvas"),c=`900 ${o}px ui-rounded, system-ui, sans-serif`,u=l.getContext("2d");u.font=c;const f=s?o*.46:0;l.width=Math.ceil(u.measureText(e).width+f)+24,l.height=o+28;const h=l.getContext("2d");h.font=c,h.textBaseline="middle",h.textAlign="left",h.lineJoin="round";const d=l.height/2;if(s){const g=o*.15,p=12+g,y=d+o*.08;h.beginPath(),h.arc(p,y,g,0,Math.PI*2),h.moveTo(p,y-g*2.2),h.lineTo(p+g*.85,y-g*.55),h.lineTo(p-g*.85,y-g*.55),h.closePath(),h.lineWidth=5,h.strokeStyle=n,h.stroke(),h.fillStyle=t,h.fill()}h.lineWidth=9,h.strokeStyle=n,h.strokeText(e,12+f,d),h.fillStyle=t,h.fillText(e,12+f,d);const m=new Dl(l);m.colorSpace=Wt;const _={tex:m,aspect:l.width/l.height};return this.numTex.set(r,_),_}spawnGhost(e,t,n,s,r,a=0){const{geo:o}=this.bodyFor(e,!1),l=uo({transparent:!0}),c=new Jt,u=new je(o,l);{const _=e.kind==="monster"&&zi(e)?fo(e)/100:1;_!==1&&u.scale.setScalar(_)}const f=e.facing||{dx:0,dy:1},h=this.moveCh.sample(e.id,performance.now());u.rotation.y=(h==null?void 0:h.ry)??Math.atan2(f.dx,f.dy),c.add(u),c.position.set((h==null?void 0:h.x)??t,(h==null?void 0:h.y)??n,(h==null?void 0:h.z)??s),this.fxGroup.add(c);const d=r&&(r.dx||r.dy)?r:f,m=new F(d.dy,0,-d.dx).normalize();this.ghosts.push({wrap:c,mat:l,t0:performance.now()+a,axis:m,base:(h==null?void 0:h.y)??n,dur:(e.size??1)>=2?900:620})}tickFx(e){var s,r,a,o,l,c;const t=Math.min(.05,(e-(this.lastT||e))/1e3);this.lastT=e;let n=!1;for(const[u,f]of this.actorGrp){const h=f.userData,d=h.gaitP;if(!d)continue;const m=this.moveCh.sample(u,e);if(!m)continue;h.bx=m.x,h.by=m.y,h.bz=m.z,h.ry=m.ry,f.position.set(m.x,m.y,m.z),f.rotation.set(0,m.ry,0);const _=d.hover?d.hover*(.5+.5*Math.sin(e*.0016+h.hash)):0,g=d.breath?d.breath*(.5+.5*Math.sin(e*.0021+h.hash)):0,p=Jh(d,m.phase,m.moveK,_,g);h.mat.userData.gaitA.value.set(p.a[0],p.a[1],p.a[2],p.a[3]),h.mat.userData.gaitB.value.set(p.b[0],p.b[1]);const y=this.badgeGrps.get(u);y&&y.position.set(m.x,m.y,m.z);const T=this.spotRefs.get(u);if(T&&this.imE&&(m.active||d.hover)){const S=Math.cos(m.ry),R=Math.sin(m.ry),A=T.k??1;for(let I=0;I<T.spots.length;I++){const x=T.spots[I],w=x.gw??[0,0,0],M=x.x+p.a[3]*w[2],E=x.y+p.a[2]*(.15+.85*Math.min(Math.abs(w[2]),1))+p.b[0]*Math.max(0,p.b[1]*Math.sign(w[0]))*Math.abs(w[0]),C=x.z+p.a[0]*w[0]+p.a[1]*w[1];this._m4.makeScale(x.sx*A,x.sy*A,x.sz*A),this._m4.setPosition(m.x+(M*S+C*R)*A,m.y+E*A,m.z+(-M*R+C*S)*A),this.imE.setMatrixAt(T.start+I,this._m4)}n=!0}}n&&(this.imE.instanceMatrix.needsUpdate=!0);for(let u=this.actAnims.length-1;u>=0;u--){const f=this.actAnims[u],h=this.actorGrp.get(f.id),d=e-f.t0;if(d>f.dur||!h){if(h){const I=h.userData;h.position.set(I.bx,I.by,I.bz),h.rotation.set(0,I.ry??0,0)}this.actAnims.splice(u,1);continue}if(d<0)continue;const m=d/f.dur,_=h.userData,g=f.dir??{dx:0,dy:1},p=Math.max(1,Math.hypot(g.dx,g.dy)),y=g.dx/p,T=g.dy/p,{lunge:S,tilt:R,yawOff:A}=$h(f.kind,m);h.position.set(_.bx+y*S,_.by,_.bz+T*S),this._ax.set(T,0,-y),this._q1.setFromAxisAngle(this._ax,R),this._q2.setFromAxisAngle($g,(_.ry??0)+A),h.quaternion.copy(this._q1).multiply(this._q2)}for(let u=this.anims.length-1;u>=0;u--){const f=this.anims[u],h=this.actorGrp.get(f.id),d=e-f.t0;if(d>300||!h){if(h){const g=h.userData;h.position.set(g.bx,g.by,g.bz),h.scale.set(1,1,1)}this.anims.splice(u,1);continue}if(d<0)continue;const m=Kh(d/300),_=h.userData;h.position.set(_.bx+(((s=f.dir)==null?void 0:s.dx)??0)*m.kb,_.by,_.bz+(((r=f.dir)==null?void 0:r.dy)??0)*m.kb),h.scale.set(m.sxz,m.sy,m.sxz)}for(let u=this.projs.length-1;u>=0;u--){const f=this.projs[u],h=e-f.t0;if(h<0){f.m.visible=!1;continue}const d=h/f.dur;if(d>=1){this.fxGroup.remove(f.m),this.projs.splice(u,1);continue}f.m.visible=!0;const m=f.x0+(f.x1-f.x0)*d,_=f.z0+(f.z1-f.z0)*d,g=f.y0+(f.y1-f.y0)*d+f.arcH*4*d*(1-d);if(f.m.position.set(m,g,_),f.kind==="arrow"){const p=Math.min(1,d+.06),y=f.y0+(f.y1-f.y0)*p+f.arcH*4*p*(1-p);f.m.lookAt(f.x0+(f.x1-f.x0)*p,y,f.z0+(f.z1-f.z0)*p)}else f.m.rotation.x+=t*7,f.m.rotation.y+=t*9;if(f.kind==="bolt"&&Math.random()<.65){const p=new je(Vt,this.matE(f.color??14202111)),y=.045+Math.random()*.04;p.scale.set(y,y,y),p.position.set(m,g,_),this.fxGroup.add(p),this.parts.push({m:p,vx:0,vy:.12,vz:0,t0:e,life:190,noG:!0})}}for(let u=this.charges.length-1;u>=0;u--){const f=this.charges[u],h=(e-f.t0)/f.dur;if(h>=1){this.fxGroup.remove(f.m),f.mat.dispose(),this.charges.splice(u,1);continue}f.m.scale.setScalar(.05+.3*h),f.m.rotation.y+=t*6,f.mat.opacity=.9*(.45+.55*h)}for(let u=this.flashes.length-1;u>=0;u--){const f=this.flashes[u],h=e-f.t0;if(h>210){(o=(a=f.m)==null?void 0:a.parent)==null||o.remove(f.m),(l=f.mat)==null||l.dispose(),this.flashes.splice(u,1);continue}if(!(h<0)){if(!f.m){const d=this.actorGrp.get(f.id),m=(c=d==null?void 0:d.userData)==null?void 0:c.geo;if(!d||!m){this.flashes.splice(u,1);continue}f.mat=new ii({color:f.party?16734794:16777215,transparent:!0,opacity:.7,depthWrite:!1,blending:rr}),f.m=new je(m,f.mat),f.m.scale.set(1.02,1.02,1.02),d.add(f.m)}f.mat.opacity=.7*(1-h/210)}}for(let u=this.parts.length-1;u>=0;u--){const f=this.parts[u],h=e-f.t0;if(h>f.life){this.fxGroup.remove(f.m),this.parts.splice(u,1);continue}if(h<0){f.m.visible=!1;continue}f.m.visible=!0,f.noG?(f.m.position.x+=f.vx*t,f.m.position.y+=f.vy*t,f.m.position.z+=f.vz*t):(f.vy-=9.5*t,f.m.position.x+=f.vx*t,f.m.position.y+=f.vy*t,f.m.position.z+=f.vz*t,f.m.position.y<.03&&f.vy<0&&(f.m.position.y=.03,f.vy*=-.35,f.vx*=.7,f.vz*=.7));const d=1-h/f.life;f.m.scale.setScalar(Math.max(.012,.095*d))}for(let u=this.ghosts.length-1;u>=0;u--){const f=this.ghosts[u],h=(e-f.t0)/f.dur;if(h>=1){this.fxGroup.remove(f.wrap),f.mat.dispose(),this.ghosts.splice(u,1);continue}const d=Zh(h);f.wrap.quaternion.setFromAxisAngle(f.axis,d.ang),f.wrap.position.y=f.base-d.sink,f.mat.opacity=d.opacity}for(let u=this.nums.length-1;u>=0;u--){const f=this.nums[u],h=e-f.t0;if(h>f.life){this.fxGroup.remove(f.m),f.mat.dispose(),this.nums.splice(u,1);continue}if(h<0){f.m.visible=!1;continue}f.m.visible=!0;const d=h/f.life;f.m.position.set(f.x,f.y+d*f.rise,f.z);const m=Math.min(1,h/160),_=f.pop-(f.pop-1)*m*m*(3-2*m);f.m.scale.set(f.sc*f.aspect*_,f.sc*_,1),f.mat.opacity=d<.55?1:1-(d-.55)/.45}}clearFx(){var e,t,n;for(const s of this.flashes)(t=(e=s.m)==null?void 0:e.parent)==null||t.remove(s.m),(n=s.mat)==null||n.dispose();for(const s of this.parts)this.fxGroup.remove(s.m);for(const s of this.ghosts)this.fxGroup.remove(s.wrap),s.mat.dispose();for(const s of this.nums)this.fxGroup.remove(s.m),s.mat.dispose();for(const s of this.projs)this.fxGroup.remove(s.m);for(const s of this.charges)this.fxGroup.remove(s.m),s.mat.dispose();this.anims.length=0,this.flashes.length=0,this.parts.length=0,this.ghosts.length=0,this.nums.length=0,this.actAnims.length=0,this.projs.length=0,this.charges.length=0,this.impactDelay.clear(),this.shakeT0=-1}setupStage(){this.ambL=new Nu(16777215,2236962,.5),this.scene.add(this.ambL),this.sunL=new Bl(16777215,.7),this.scene.add(this.sunL),this.fillL=new Bl(10466520,.26),this.scene.add(this.fillL),this.heroL=new Ou(16761470,3.2,14,2),this.scene.add(this.heroL),this.groundM=new je(new Vi(this.W+6,this.H+6),new ir({color:1778224,fog:!0})),this.groundM.rotation.x=-Math.PI/2,this.groundM.position.set((this.W-1)/2,-.12,(this.H-1)/2),this.scene.add(this.groundM),this.applyEnv()}applyEnv(){var s,r;const e=this.env,t=Ih(e);(r=(s=this.scene.background)==null?void 0:s.setHex)==null||r.call(s,e.bg);const n=this.scene.fog;n&&(n.color.setHex(e.bg),n.density=e.fogD),Dh(t.actFill,t.actFillI),this.ambL&&(this.ambL.color.setHex(t.hemiSky),this.ambL.groundColor.setHex(t.hemiGround),this.ambL.intensity=t.hemiI,this.sunL.color.setHex(t.sunCol),this.sunL.intensity=t.sunI,this.sunL.position.set(...t.sunPos),this.fillL.color.setHex(t.fillCol),this.fillL.intensity=t.fillI,this.fillL.position.set(...t.fillPos),this.heroL.color.setHex(t.heroCol),this.groundM.material.color.setHex(e.ground))}}const u_=Object.freeze(Object.defineProperty({__proto__:null,ACT_DUR:ti,ACT_FILL:Oo,ENV:wn,FIGURE_PARTS:Wh,FIGURE_SLOTS:Hh,GAIT_PROFILES:Vn,GLOW_HEX:_r,LARGE_BUILDERS:po,MON_VOX:Bo,MoveChannel:Qh,STEP:wt,TILE_SAMPLES:r_,VoxelRenderer:a_,_setModelLib:Oh,actPose:$h,assembleMonolithic:Rr,bakeGaitAttr:Pr,bodyColorOf:zo,buildActorBody:Yh,buildFigureBody:Go,buildVoxBody:kh,cellsToGeo:xs,ck:At,envLightParams:Ih,figureAssign:Vh,figureBodyKey:Ho,figureBoxes:Xh,gaitPose:Jh,gaitProfileOf:Cr,gaitWeightAt:Ss,geomFromVoxDef:Nh,ghostPose:Zh,hitPose:Kh,makeBodyMaterial:uo,modelLibEntries:n_,monTypeOf:Ms,monsterBoxes:Gh,raceSpecOf:ko,setActorFill:Dh,toGeometry:_s,upresCells:Ar,voxDefCells:Tr,voxDefOf:Bh,voxGlowOf:zh},Symbol.toStringTag,{value:"Module"}));export{gr as $,c_ as A,$i as B,Ne as C,Bl as D,wn as E,Gn as F,Jt as G,Nu as H,qc as I,ir as J,Rr as K,po as L,je as M,Xg as N,Uo as O,Xt as P,Yn as Q,Gu as R,uu as S,r_ as T,kh as U,a_ as V,Og as W,zh as X,Bh as Y,gs as Z,Oh as _,xo as a,ps as a0,oi as a1,Wg as a2,Su as a3,et as a4,Tn as a5,Vi as a6,f_ as a7,u_ as a8,Ou as b,h_ as c,gh as d,ti as e,ui as f,ii as g,rr as h,Ih as i,F as j,Yh as k,zi as l,uo as m,Ms as n,n_ as o,fo as p,_r as q,Bo as r,Dh as s,Zh as t,$h as u,Cr as v,Jh as w,Kh as x,wt as y,Le as z};
