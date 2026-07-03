var _c=Object.defineProperty;var xc=(i,e,t)=>e in i?_c(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ve=(i,e,t)=>xc(i,typeof e!="symbol"?e+"":e,t);import{w as Ma,a as ml,b as gl,d as vc}from"./dungeon-CS4tewjE.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sa="185",Mc=0,so=1,Sc=2,ys=1,Ec=2,ki=3,On=0,It=1,vn=2,Sn=0,Mi=1,Ps=2,ro=3,ao=4,bc=5,Yn=100,yc=101,Tc=102,Ac=103,wc=104,Rc=200,Cc=201,Pc=202,Lc=203,wr=204,Rr=205,Dc=206,Ic=207,Uc=208,Nc=209,Fc=210,Oc=211,Bc=212,zc=213,Gc=214,Cr=0,Pr=1,Lr=2,bi=3,Dr=4,Ir=5,Ur=6,Nr=7,Ea=0,kc=1,Hc=2,hn=0,_l=1,xl=2,vl=3,Ml=4,Sl=5,El=6,bl=7,yl=300,Jn=301,yi=302,qs=303,Ys=304,zs=306,Fr=1e3,Mn=1001,Or=1002,Et=1003,Vc=1004,Qi=1005,wt=1006,Ks=1007,Zn=1008,zt=1009,Tl=1010,Al=1011,Wi=1012,ba=1013,un=1014,Qt=1015,bn=1016,ya=1017,Ta=1018,Xi=1020,wl=35902,Rl=35899,Cl=1021,Pl=1022,jt=1023,yn=1026,$n=1027,Aa=1028,wa=1029,Qn=1030,Ra=1031,Ca=1033,Ts=33776,As=33777,ws=33778,Rs=33779,Br=35840,zr=35841,Gr=35842,kr=35843,Hr=36196,Vr=37492,Wr=37496,Xr=37488,qr=37489,Ls=37490,Yr=37491,Kr=37808,Zr=37809,$r=37810,Jr=37811,Qr=37812,jr=37813,ea=37814,ta=37815,na=37816,ia=37817,sa=37818,ra=37819,aa=37820,oa=37821,la=36492,ca=36494,ha=36495,fa=36283,ua=36284,Ds=36285,da=36286,Wc=3200,pa=0,Xc=1,Nn="",qt="srgb",Is="srgb-linear",Us="linear",Ze="srgb",ii=7680,oo=519,qc=512,Yc=513,Kc=514,Pa=515,Zc=516,$c=517,La=518,Jc=519,lo=35044,co="300 es",cn=2e3,qi=2001;function Qc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jc(){const i=Ns("canvas");return i.style.display="block",i}const ho={};function fo(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ll(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=Ll(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=Ll(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Si(...i){const e=i.join(" ");e in ho||(ho[e]=!0,Le(...i))}function eh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const th={[Cr]:Pr,[Lr]:Ur,[Dr]:Nr,[bi]:Ir,[Pr]:Cr,[Ur]:Lr,[Nr]:Dr,[Ir]:bi};class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zs=Math.PI/180,ma=180/Math.PI;function Yi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function nh(i,e){return(i%e+e)%e}function $s(i,e,t){return(1-t)*i+t*e}function Li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Wa=class Wa{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wa.prototype.isVector2=!0;let Be=Wa;class Bn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],f=n[s+2],p=n[s+3],h=r[a+0],u=r[a+1],m=r[a+2],v=r[a+3];if(p!==v||c!==h||l!==u||f!==m){let g=c*h+l*u+f*m+p*v;g<0&&(h=-h,u=-u,m=-m,v=-v,g=-g);let d=1-o;if(g<.9995){const b=Math.acos(g),w=Math.sin(b);d=Math.sin(d*b)/w,o=Math.sin(o*b)/w,c=c*d+h*o,l=l*d+u*o,f=f*d+m*o,p=p*d+v*o}else{c=c*d+h*o,l=l*d+u*o,f=f*d+m*o,p=p*d+v*o;const b=1/Math.sqrt(c*c+l*l+f*f+p*p);c*=b,l*=b,f*=b,p*=b}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],f=n[s+3],p=r[a],h=r[a+1],u=r[a+2],m=r[a+3];return e[t]=o*m+f*p+c*u-l*h,e[t+1]=c*m+f*h+l*p-o*u,e[t+2]=l*m+f*u+o*h-c*p,e[t+3]=f*m-o*p-c*h-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(s/2),p=o(r/2),h=c(n/2),u=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=h*f*p+l*u*m,this._y=l*u*p-h*f*m,this._z=l*f*m+h*u*p,this._w=l*f*p-h*u*m;break;case"YXZ":this._x=h*f*p+l*u*m,this._y=l*u*p-h*f*m,this._z=l*f*m-h*u*p,this._w=l*f*p+h*u*m;break;case"ZXY":this._x=h*f*p-l*u*m,this._y=l*u*p+h*f*m,this._z=l*f*m+h*u*p,this._w=l*f*p-h*u*m;break;case"ZYX":this._x=h*f*p-l*u*m,this._y=l*u*p+h*f*m,this._z=l*f*m-h*u*p,this._w=l*f*p+h*u*m;break;case"YZX":this._x=h*f*p+l*u*m,this._y=l*u*p+h*f*m,this._z=l*f*m-h*u*p,this._w=l*f*p-h*u*m;break;case"XZY":this._x=h*f*p-l*u*m,this._y=l*u*p-h*f*m,this._z=l*f*m+h*u*p,this._w=l*f*p+h*u*m;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],p=t[10],h=n+o+p;if(h>0){const u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(f-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>p){const u=2*Math.sqrt(1+n-o-p);this._w=(f-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>p){const u=2*Math.sqrt(1+o-n-p);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+f)/u}else{const u=2*Math.sqrt(1+p-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+s*l-r*c,this._y=s*f+a*c+r*o-n*l,this._z=r*f+a*l+n*c-s*o,this._w=a*f-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Xa=class Xa{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),f=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+c*l+a*p-o*f,this.y=n+c*f+o*l-r*p,this.z=s+c*p+r*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Js.copy(this).projectOnVector(e),this.sub(Js)}reflect(e){return this.sub(Js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xa.prototype.isVector3=!0;let O=Xa;const Js=new O,uo=new Bn,qa=class qa{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],p=n[7],h=n[2],u=n[5],m=n[8],v=s[0],g=s[3],d=s[6],b=s[1],w=s[4],E=s[7],P=s[2],A=s[5],L=s[8];return r[0]=a*v+o*b+c*P,r[3]=a*g+o*w+c*A,r[6]=a*d+o*E+c*L,r[1]=l*v+f*b+p*P,r[4]=l*g+f*w+p*A,r[7]=l*d+f*E+p*L,r[2]=h*v+u*b+m*P,r[5]=h*g+u*w+m*A,r[8]=h*d+u*E+m*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*r*f+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],p=f*a-o*l,h=o*c-f*r,u=l*r-a*c,m=t*p+n*h+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=p*v,e[1]=(s*l-f*n)*v,e[2]=(o*n-s*a)*v,e[3]=h*v,e[4]=(f*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=u*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Si("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qs.makeScale(e,t)),this}rotate(e){return Si("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qs.makeRotation(-e)),this}translate(e,t){return Si("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qa.prototype.isMatrix3=!0;let De=qa;const Qs=new De,po=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mo=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ih(){const i={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ze&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?Us:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Si("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Si("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Is]:{primaries:e,whitePoint:n,transfer:Us,toXYZ:po,fromXYZ:mo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:po,fromXYZ:mo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}const Ge=ih();function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ei(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let si;class sh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{si===void 0&&(si=Ns("canvas")),si.width=e.width,si.height=e.height;const s=si.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=En(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(En(t[n]/255)*255):t[n]=En(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rh=0;class Da{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(js(s[a].image)):r.push(js(s[a]))}else r=js(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function js(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let ah=0;const er=new O;class Ct extends jn{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Mn,s=Mn,r=wt,a=Zn,o=jt,c=zt,l=Ct.DEFAULT_ANISOTROPY,f=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Yi(),this.name="",this.source=new Da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(er).x}get height(){return this.source.getSize(er).y}get depth(){return this.source.getSize(er).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fr:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fr:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=yl;Ct.DEFAULT_ANISOTROPY=1;const Ya=class Ya{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],f=c[4],p=c[8],h=c[1],u=c[5],m=c[9],v=c[2],g=c[6],d=c[10];if(Math.abs(f-h)<.01&&Math.abs(p-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+u+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,E=(u+1)/2,P=(d+1)/2,A=(f+h)/4,L=(p+v)/4,x=(m+g)/4;return w>E&&w>P?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=A/n,r=L/n):E>P?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=A/s,r=x/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=L/r,s=x/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-m)*(g-m)+(p-v)*(p-v)+(h-f)*(h-f));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(p-v)/b,this.z=(h-f)/b,this.w=Math.acos((l+u+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ya.prototype.isVector4=!0;let rt=Ya;class oh extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Ct(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Da(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends oh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Dl extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lh extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bs=class Bs{constructor(e,t,n,s,r,a,o,c,l,f,p,h,u,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,f,p,h,u,m,v,g)}set(e,t,n,s,r,a,o,c,l,f,p,h,u,m,v,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=f,d[10]=p,d[14]=h,d[3]=u,d[7]=m,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ri.setFromMatrixColumn(e,0).length(),r=1/ri.setFromMatrixColumn(e,1).length(),a=1/ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const h=a*f,u=a*p,m=o*f,v=o*p;t[0]=c*f,t[4]=-c*p,t[8]=l,t[1]=u+m*l,t[5]=h-v*l,t[9]=-o*c,t[2]=v-h*l,t[6]=m+u*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*f,u=c*p,m=l*f,v=l*p;t[0]=h+v*o,t[4]=m*o-u,t[8]=a*l,t[1]=a*p,t[5]=a*f,t[9]=-o,t[2]=u*o-m,t[6]=v+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*f,u=c*p,m=l*f,v=l*p;t[0]=h-v*o,t[4]=-a*p,t[8]=m+u*o,t[1]=u+m*o,t[5]=a*f,t[9]=v-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*f,u=a*p,m=o*f,v=o*p;t[0]=c*f,t[4]=m*l-u,t[8]=h*l+v,t[1]=c*p,t[5]=v*l+h,t[9]=u*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,u=a*l,m=o*c,v=o*l;t[0]=c*f,t[4]=v-h*p,t[8]=m*p+u,t[1]=p,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=u*p+m,t[10]=h-v*p}else if(e.order==="XZY"){const h=a*c,u=a*l,m=o*c,v=o*l;t[0]=c*f,t[4]=-p,t[8]=l*f,t[1]=h*p+v,t[5]=a*f,t[9]=u*p-m,t[2]=m*p-u,t[6]=o*f,t[10]=v*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ch,e,hh)}lookAt(e,t,n){const s=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Rn.crossVectors(n,Nt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Rn.crossVectors(n,Nt)),Rn.normalize(),ji.crossVectors(Nt,Rn),s[0]=Rn.x,s[4]=ji.x,s[8]=Nt.x,s[1]=Rn.y,s[5]=ji.y,s[9]=Nt.y,s[2]=Rn.z,s[6]=ji.z,s[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],p=n[5],h=n[9],u=n[13],m=n[2],v=n[6],g=n[10],d=n[14],b=n[3],w=n[7],E=n[11],P=n[15],A=s[0],L=s[4],x=s[8],T=s[12],M=s[1],S=s[5],R=s[9],D=s[13],G=s[2],I=s[6],V=s[10],B=s[14],Z=s[3],Q=s[7],ie=s[11],ae=s[15];return r[0]=a*A+o*M+c*G+l*Z,r[4]=a*L+o*S+c*I+l*Q,r[8]=a*x+o*R+c*V+l*ie,r[12]=a*T+o*D+c*B+l*ae,r[1]=f*A+p*M+h*G+u*Z,r[5]=f*L+p*S+h*I+u*Q,r[9]=f*x+p*R+h*V+u*ie,r[13]=f*T+p*D+h*B+u*ae,r[2]=m*A+v*M+g*G+d*Z,r[6]=m*L+v*S+g*I+d*Q,r[10]=m*x+v*R+g*V+d*ie,r[14]=m*T+v*D+g*B+d*ae,r[3]=b*A+w*M+E*G+P*Z,r[7]=b*L+w*S+E*I+P*Q,r[11]=b*x+w*R+E*V+P*ie,r[15]=b*T+w*D+E*B+P*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],p=e[6],h=e[10],u=e[14],m=e[3],v=e[7],g=e[11],d=e[15],b=c*u-l*h,w=o*u-l*p,E=o*h-c*p,P=a*u-l*f,A=a*h-c*f,L=a*p-o*f;return t*(v*b-g*w+d*E)-n*(m*b-g*P+d*A)+s*(m*w-v*P+d*L)-r*(m*E-v*A+g*L)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],f=e[10];return t*(a*f-o*l)-n*(r*f-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],p=e[9],h=e[10],u=e[11],m=e[12],v=e[13],g=e[14],d=e[15],b=t*o-n*a,w=t*c-s*a,E=t*l-r*a,P=n*c-s*o,A=n*l-r*o,L=s*l-r*c,x=f*v-p*m,T=f*g-h*m,M=f*d-u*m,S=p*g-h*v,R=p*d-u*v,D=h*d-u*g,G=b*D-w*R+E*S+P*M-A*T+L*x;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/G;return e[0]=(o*D-c*R+l*S)*I,e[1]=(s*R-n*D-r*S)*I,e[2]=(v*L-g*A+d*P)*I,e[3]=(h*A-p*L-u*P)*I,e[4]=(c*M-a*D-l*T)*I,e[5]=(t*D-s*M+r*T)*I,e[6]=(g*E-m*L-d*w)*I,e[7]=(f*L-h*E+u*w)*I,e[8]=(a*R-o*M+l*x)*I,e[9]=(n*M-t*R-r*x)*I,e[10]=(m*A-v*E+d*b)*I,e[11]=(p*E-f*A-u*b)*I,e[12]=(o*T-a*S-c*x)*I,e[13]=(t*S-n*T+s*x)*I,e[14]=(v*w-m*P-g*b)*I,e[15]=(f*P-p*w+h*b)*I,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,f=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,f*o+n,f*c-s*a,0,l*c-s*o,f*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,f=a+a,p=o+o,h=r*l,u=r*f,m=r*p,v=a*f,g=a*p,d=o*p,b=c*l,w=c*f,E=c*p,P=n.x,A=n.y,L=n.z;return s[0]=(1-(v+d))*P,s[1]=(u+E)*P,s[2]=(m-w)*P,s[3]=0,s[4]=(u-E)*A,s[5]=(1-(h+d))*A,s[6]=(g+b)*A,s[7]=0,s[8]=(m+w)*L,s[9]=(g-b)*L,s[10]=(1-(h+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ri.set(s[0],s[1],s[2]).length();const o=ri.set(s[4],s[5],s[6]).length(),c=ri.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Yt.copy(this);const l=1/a,f=1/o,p=1/c;return Yt.elements[0]*=l,Yt.elements[1]*=l,Yt.elements[2]*=l,Yt.elements[4]*=f,Yt.elements[5]*=f,Yt.elements[6]*=f,Yt.elements[8]*=p,Yt.elements[9]*=p,Yt.elements[10]*=p,t.setFromRotationMatrix(Yt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=cn,c=!1){const l=this.elements,f=2*r/(t-e),p=2*r/(n-s),h=(t+e)/(t-e),u=(n+s)/(n-s);let m,v;if(c)m=r/(a-r),v=a*r/(a-r);else if(o===cn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===qi)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=p,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=cn,c=!1){const l=this.elements,f=2/(t-e),p=2/(n-s),h=-(t+e)/(t-e),u=-(n+s)/(n-s);let m,v;if(c)m=1/(a-r),v=a/(a-r);else if(o===cn)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===qi)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=p,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Bs.prototype.isMatrix4=!0;let Je=Bs;const ri=new O,Yt=new Je,ch=new O(0,0,0),hh=new O(1,1,1),Rn=new O,ji=new O,Nt=new O,go=new Je,_o=new Bn;class zn{constructor(e=0,t=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],f=s[9],p=s[2],h=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,u),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return go.makeRotationFromQuaternion(e),this.setFromRotationMatrix(go,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _o.setFromEuler(this),this.setFromQuaternion(_o,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Ia{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fh=0;const xo=new O,ai=new Bn,pn=new Je,es=new O,Di=new O,uh=new O,dh=new Bn,vo=new O(1,0,0),Mo=new O(0,1,0),So=new O(0,0,1),Eo={type:"added"},ph={type:"removed"},oi={type:"childadded",child:null},tr={type:"childremoved",child:null};class bt extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new O,t=new zn,n=new Bn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new De}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.multiply(ai),this}rotateOnWorldAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.premultiply(ai),this}rotateX(e){return this.rotateOnAxis(vo,e)}rotateY(e){return this.rotateOnAxis(Mo,e)}rotateZ(e){return this.rotateOnAxis(So,e)}translateOnAxis(e,t){return xo.copy(e).applyQuaternion(this.quaternion),this.position.add(xo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vo,e)}translateY(e){return this.translateOnAxis(Mo,e)}translateZ(e){return this.translateOnAxis(So,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?es.copy(e):es.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Di,es,this.up):pn.lookAt(es,Di,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),ai.setFromRotationMatrix(pn),this.quaternion.premultiply(ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eo),oi.child=e,this.dispatchEvent(oi),oi.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ph),tr.child=e,this.dispatchEvent(tr),tr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eo),oi.child=e,this.dispatchEvent(oi),oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,uh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,dh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),p=a(e.shapes),h=a(e.skeletons),u=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}bt.DEFAULT_UP=new O(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class on extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mh={type:"move"};class nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),d=this._getHandJoint(l,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const f=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=f.position.distanceTo(p.position),u=.02,m=.005;l.inputState.pinching&&h>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new on;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},ts={h:0,s:0,l:0};function ir(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ge.workingColorSpace){if(e=nh(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ir(a,r,e+1/3),this.g=ir(a,r,e),this.b=ir(a,r,e-1/3)}return Ge.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=Il[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}copyLinearToSRGB(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Ge.workingToColorSpace(At.copy(this),e),Math.round(ke(At.r*255,0,255))*65536+Math.round(ke(At.g*255,0,255))*256+Math.round(ke(At.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(At.copy(this),t);const n=At.r,s=At.g,r=At.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=f<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=qt){Ge.workingToColorSpace(At.copy(this),e);const t=At.r,n=At.g,s=At.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(ts);const n=$s(Cn.h,ts.h,t),s=$s(Cn.s,ts.s,t),r=$s(Cn.l,ts.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Fe;Fe.NAMES=Il;class Ua{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new Ua(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gh extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Kt=new O,mn=new O,sr=new O,gn=new O,li=new O,ci=new O,bo=new O,rr=new O,ar=new O,or=new O,lr=new rt,cr=new rt,hr=new rt;class Jt{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kt.subVectors(e,t),s.cross(Kt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Kt.subVectors(s,t),mn.subVectors(n,t),sr.subVectors(e,t);const a=Kt.dot(Kt),o=Kt.dot(mn),c=Kt.dot(sr),l=mn.dot(mn),f=mn.dot(sr),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;const h=1/p,u=(l*c-o*f)*h,m=(a*f-o*c)*h;return r.set(1-u-m,m,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gn.x),c.addScaledVector(a,gn.y),c.addScaledVector(o,gn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return lr.setScalar(0),cr.setScalar(0),hr.setScalar(0),lr.fromBufferAttribute(e,t),cr.fromBufferAttribute(e,n),hr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(lr,r.x),a.addScaledVector(cr,r.y),a.addScaledVector(hr,r.z),a}static isFrontFacing(e,t,n,s){return Kt.subVectors(n,t),mn.subVectors(e,t),Kt.cross(mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Kt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;li.subVectors(s,n),ci.subVectors(r,n),rr.subVectors(e,n);const c=li.dot(rr),l=ci.dot(rr);if(c<=0&&l<=0)return t.copy(n);ar.subVectors(e,s);const f=li.dot(ar),p=ci.dot(ar);if(f>=0&&p<=f)return t.copy(s);const h=c*p-f*l;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(li,a);or.subVectors(e,r);const u=li.dot(or),m=ci.dot(or);if(m>=0&&u<=m)return t.copy(r);const v=u*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(ci,o);const g=f*m-u*p;if(g<=0&&p-f>=0&&u-m>=0)return bo.subVectors(r,s),o=(p-f)/(p-f+(u-m)),t.copy(s).addScaledVector(bo,o);const d=1/(g+v+h);return a=v*d,o=h*d,t.copy(n).addScaledVector(li,a).addScaledVector(ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ei{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(r,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ns.copy(n.boundingBox)),ns.applyMatrix4(e.matrixWorld),this.union(ns)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),is.subVectors(this.max,Ii),hi.subVectors(e.a,Ii),fi.subVectors(e.b,Ii),ui.subVectors(e.c,Ii),Pn.subVectors(fi,hi),Ln.subVectors(ui,fi),kn.subVectors(hi,ui);let t=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-kn.z,kn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,kn.z,0,-kn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-kn.y,kn.x,0];return!fr(t,hi,fi,ui,is)||(t=[1,0,0,0,1,0,0,0,1],!fr(t,hi,fi,ui,is))?!1:(ss.crossVectors(Pn,Ln),t=[ss.x,ss.y,ss.z],fr(t,hi,fi,ui,is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _n=[new O,new O,new O,new O,new O,new O,new O,new O],Zt=new O,ns=new ei,hi=new O,fi=new O,ui=new O,Pn=new O,Ln=new O,kn=new O,Ii=new O,is=new O,ss=new O,Hn=new O;function fr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hn.fromArray(i,r);const o=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),c=e.dot(Hn),l=t.dot(Hn),f=n.dot(Hn);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const pt=new O,rs=new Be;let _h=0;class en extends jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_h++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lo,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rs.fromBufferAttribute(this,t),rs.applyMatrix3(e),this.setXY(t,rs.x,rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ul extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nl extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}const xh=new ei,Ui=new O,ur=new O;class wi{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ui.subVectors(e,this.center);const t=Ui.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ui,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ui.copy(e.center).add(ur)),this.expandByPoint(Ui.copy(e.center).sub(ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let vh=0;const Vt=new Je,dr=new bt,di=new O,Ft=new ei,Ni=new ei,Mt=new O;class kt extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qc(e)?Nl:Ul)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return dr.lookAt(e),dr.updateMatrix(),this.applyMatrix4(dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ni.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Ft.min,Ni.min),Ft.expandByPoint(Mt),Mt.addVectors(Ft.max,Ni.max),Ft.expandByPoint(Mt)):(Ft.expandByPoint(Ni.min),Ft.expandByPoint(Ni.max))}Ft.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Mt.fromBufferAttribute(o,l),c&&(di.fromBufferAttribute(e,l),Mt.add(di)),s=Math.max(s,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new O,c[x]=new O;const l=new O,f=new O,p=new O,h=new Be,u=new Be,m=new Be,v=new O,g=new O;function d(x,T,M){l.fromBufferAttribute(n,x),f.fromBufferAttribute(n,T),p.fromBufferAttribute(n,M),h.fromBufferAttribute(r,x),u.fromBufferAttribute(r,T),m.fromBufferAttribute(r,M),f.sub(l),p.sub(l),u.sub(h),m.sub(h);const S=1/(u.x*m.y-m.x*u.y);isFinite(S)&&(v.copy(f).multiplyScalar(m.y).addScaledVector(p,-u.y).multiplyScalar(S),g.copy(p).multiplyScalar(u.x).addScaledVector(f,-m.x).multiplyScalar(S),o[x].add(v),o[T].add(v),o[M].add(v),c[x].add(g),c[T].add(g),c[M].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,T=b.length;x<T;++x){const M=b[x],S=M.start,R=M.count;for(let D=S,G=S+R;D<G;D+=3)d(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const w=new O,E=new O,P=new O,A=new O;function L(x){P.fromBufferAttribute(s,x),A.copy(P);const T=o[x];w.copy(T),w.sub(P.multiplyScalar(P.dot(T))).normalize(),E.crossVectors(A,T);const S=E.dot(c[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,S)}for(let x=0,T=b.length;x<T;++x){const M=b[x],S=M.start,R=M.count;for(let D=S,G=S+R;D<G;D+=3)L(e.getX(D+0)),L(e.getX(D+1)),L(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);const s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,f=new O,p=new O;if(e)for(let h=0,u=e.count;h<u;h+=3){const m=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),f.subVectors(a,r),p.subVectors(s,r),f.cross(p),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(f),c.add(f),l.add(f),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,u=t.count;h<u;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,r),p.subVectors(s,r),f.cross(p),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,p=o.normalized,h=new l.constructor(c.length*f);let u=0,m=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?u=c[v]*o.data.stride+o.offset:u=c[v]*f;for(let d=0;d<f;d++)h[m++]=l[u++]}return new en(h,f,p)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let f=0,p=l.length;f<p;f++){const h=l[f],u=e(h,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let p=0,h=l.length;p<h;p++){const u=l[p];f.push(u.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const f=s[l];this.setAttribute(l,f.clone(t))}const r=e.morphAttributes;for(const l in r){const f=[],p=r[l];for(let h=0,u=p.length;h<u;h++)f.push(p[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Mh=0;class Ri extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Mi,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wr,this.blendDst=Rr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Rr&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xn=new O,pr=new O,as=new O,Dn=new O,mr=new O,os=new O,gr=new O;class Na{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pr.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(pr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(as),o=Dn.dot(this.direction),c=-Dn.dot(as),l=Dn.lengthSq(),f=Math.abs(1-a*a);let p,h,u,m;if(f>0)if(p=a*c-o,h=a*o-c,m=r*f,p>=0)if(h>=-m)if(h<=m){const v=1/f;p*=v,h*=v,u=p*(p+a*h+2*o)+h*(a*p+h+2*c)+l}else h=r,p=Math.max(0,-(a*h+o)),u=-p*p+h*(h+2*c)+l;else h=-r,p=Math.max(0,-(a*h+o)),u=-p*p+h*(h+2*c)+l;else h<=-m?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-c),r),u=-p*p+h*(h+2*c)+l):h<=m?(p=0,h=Math.min(Math.max(-r,-c),r),u=h*(h+2*c)+l):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-c),r),u=-p*p+h*(h+2*c)+l);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),u=-p*p+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(pr).addScaledVector(as,h),u}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),f>=0?(r=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,s,r){mr.subVectors(t,e),os.subVectors(n,e),gr.crossVectors(mr,os);let a=this.direction.dot(gr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);const c=o*this.direction.dot(os.crossVectors(Dn,os));if(c<0)return null;const l=o*this.direction.dot(mr.cross(Dn));if(l<0||c+l>a)return null;const f=-o*Dn.dot(gr);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vi extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yo=new Je,Vn=new Na,ls=new wi,To=new O,cs=new O,hs=new O,fs=new O,_r=new O,us=new O,Ao=new O,ds=new O;class tt extends bt{constructor(e=new kt,t=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){us.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const f=o[c],p=r[c];f!==0&&(_r.fromBufferAttribute(p,e),a?us.addScaledVector(_r,f):us.addScaledVector(_r.sub(t),f))}t.add(us)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(r),Vn.copy(e.ray).recast(e.near),!(ls.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(ls,To)===null||Vn.origin.distanceToSquared(To)>(e.far-e.near)**2))&&(yo.copy(r).invert(),Vn.copy(e.ray).applyMatrix4(yo),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,p=r.attributes.normal,h=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=h.length;m<v;m++){const g=h[m],d=a[g.materialIndex],b=Math.max(g.start,u.start),w=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let E=b,P=w;E<P;E+=3){const A=o.getX(E),L=o.getX(E+1),x=o.getX(E+2);s=ps(this,d,e,n,l,f,p,A,L,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let g=m,d=v;g<d;g+=3){const b=o.getX(g),w=o.getX(g+1),E=o.getX(g+2);s=ps(this,a,e,n,l,f,p,b,w,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=h.length;m<v;m++){const g=h[m],d=a[g.materialIndex],b=Math.max(g.start,u.start),w=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let E=b,P=w;E<P;E+=3){const A=E,L=E+1,x=E+2;s=ps(this,d,e,n,l,f,p,A,L,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let g=m,d=v;g<d;g+=3){const b=g,w=g+1,E=g+2;s=ps(this,a,e,n,l,f,p,b,w,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Sh(i,e,t,n,s,r,a,o){let c;if(e.side===It?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===On,o),c===null)return null;ds.copy(o),ds.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ds);return l<t.near||l>t.far?null:{distance:l,point:ds.clone(),object:i}}function ps(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,cs),i.getVertexPosition(c,hs),i.getVertexPosition(l,fs);const f=Sh(i,e,t,n,cs,hs,fs,Ao);if(f){const p=new O;Jt.getBarycoord(Ao,cs,hs,fs,p),s&&(f.uv=Jt.getInterpolatedAttribute(s,o,c,l,p,new Be)),r&&(f.uv1=Jt.getInterpolatedAttribute(r,o,c,l,p,new Be)),a&&(f.normal=Jt.getInterpolatedAttribute(a,o,c,l,p,new O),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new O,materialIndex:0};Jt.getNormal(cs,hs,fs,h.normal),f.face=h,f.barycoord=p}return f}class Fl extends Ct{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Et,f=Et,p,h){super(null,a,o,c,l,f,s,r,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo extends en{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const pi=new Je,Ro=new Je,ms=[],Co=new ei,Eh=new Je,Fi=new tt,Oi=new wi;class bh extends tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Eh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pi),Co.copy(e.boundingBox).applyMatrix4(pi),this.boundingBox.union(Co)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pi),Oi.copy(e.boundingSphere).applyMatrix4(pi),this.boundingSphere.union(Oi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Fi.geometry=this.geometry,Fi.material=this.material,Fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oi.copy(this.boundingSphere),Oi.applyMatrix4(n),e.ray.intersectsSphere(Oi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pi),Ro.multiplyMatrices(n,pi),Fi.matrixWorld=Ro,Fi.raycast(e,ms);for(let a=0,o=ms.length;a<o;a++){const c=ms[a];c.instanceId=r,c.object=this,t.push(c)}ms.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new wo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fl(new Float32Array(s*this.count),s,this.count,Aa,Qt));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xr=new O,yh=new O,Th=new De;class Un{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=xr.subVectors(n,t).cross(yh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(xr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Th.getNormalMatrix(e),s=this.coplanarPoint(xr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new wi,Ah=new Be(.5,.5),gs=new O;class Fa{constructor(e=new Un,t=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],f=r[4],p=r[5],h=r[6],u=r[7],m=r[8],v=r[9],g=r[10],d=r[11],b=r[12],w=r[13],E=r[14],P=r[15];if(s[0].setComponents(l-a,u-f,d-m,P-b).normalize(),s[1].setComponents(l+a,u+f,d+m,P+b).normalize(),s[2].setComponents(l+o,u+p,d+v,P+w).normalize(),s[3].setComponents(l-o,u-p,d-v,P-w).normalize(),n)s[4].setComponents(c,h,g,E).normalize(),s[5].setComponents(l-c,u-h,d-g,P-E).normalize();else if(s[4].setComponents(l-c,u-h,d-g,P-E).normalize(),t===cn)s[5].setComponents(l+c,u+h,d+g,P+E).normalize();else if(t===qi)s[5].setComponents(c,h,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){Wn.center.set(0,0,0);const t=Ah.distanceTo(e.center);return Wn.radius=.7071067811865476+t,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(gs.x=s.normal.x>0?e.max.x:e.min.x,gs.y=s.normal.y>0?e.max.y:e.min.y,gs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ol extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fs=new O,Os=new O,Po=new Je,Bi=new Na,_s=new wi,vr=new O,Lo=new O;class wh extends bt{constructor(e=new kt,t=new Ol){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Fs.fromBufferAttribute(t,s-1),Os.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Fs.distanceTo(Os);e.setAttribute("lineDistance",new gt(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(s),_s.radius+=r,e.ray.intersectsSphere(_s)===!1)return;Po.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(Po);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){const u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=u,g=m-1;v<g;v+=l){const d=f.getX(v),b=f.getX(v+1),w=xs(this,e,Bi,c,d,b,v);w&&t.push(w)}if(this.isLineLoop){const v=f.getX(m-1),g=f.getX(u),d=xs(this,e,Bi,c,v,g,m-1);d&&t.push(d)}}else{const u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=u,g=m-1;v<g;v+=l){const d=xs(this,e,Bi,c,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){const v=xs(this,e,Bi,c,m-1,u,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xs(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Fs.fromBufferAttribute(o,s),Os.fromBufferAttribute(o,r),t.distanceSqToSegment(Fs,Os,vr,Lo)>n)return;vr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(vr);if(!(l<e.near||l>e.far))return{distance:l,point:Lo.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Do=new O,Io=new O;class Rh extends wh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Do.fromBufferAttribute(t,s),Io.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Do.distanceTo(Io);e.setAttribute("lineDistance",new gt(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bl extends Ct{constructor(e=[],t=Jn,n,s,r,a,o,c,l,f){super(e,t,n,s,r,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ti extends Ct{constructor(e,t,n=un,s,r,a,o=Et,c=Et,l,f=yn,p=1){if(f!==yn&&f!==$n)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,s,r,a,o,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Da(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ch extends Ti{constructor(e,t=un,n=Jn,s,r,a=Et,o=Et,c,l=yn){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,t,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zl extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ci extends kt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],f=[],p=[];let h=0,u=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(p,2));function m(v,g,d,b,w,E,P,A,L,x,T){const M=E/L,S=P/x,R=E/2,D=P/2,G=A/2,I=L+1,V=x+1;let B=0,Z=0;const Q=new O;for(let ie=0;ie<V;ie++){const ae=ie*S-D;for(let xe=0;xe<I;xe++){const He=xe*M-R;Q[v]=He*b,Q[g]=ae*w,Q[d]=G,l.push(Q.x,Q.y,Q.z),Q[v]=0,Q[g]=0,Q[d]=A>0?1:-1,f.push(Q.x,Q.y,Q.z),p.push(xe/L),p.push(1-ie/x),B+=1}}for(let ie=0;ie<x;ie++)for(let ae=0;ae<L;ae++){const xe=h+ae+I*ie,He=h+ae+I*(ie+1),st=h+(ae+1)+I*(ie+1),We=h+(ae+1)+I*ie;c.push(xe,He,We),c.push(He,st,We),Z+=6}o.addGroup(u,Z,T),u+=Z,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Oa extends kt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),f(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const w=new O,E=new O,P=new O;for(let A=0;A<t.length;A+=3)u(t[A+0],w),u(t[A+1],E),u(t[A+2],P),c(w,E,P,b)}function c(b,w,E,P){const A=P+1,L=[];for(let x=0;x<=A;x++){L[x]=[];const T=b.clone().lerp(E,x/A),M=w.clone().lerp(E,x/A),S=A-x;for(let R=0;R<=S;R++)R===0&&x===A?L[x][R]=T:L[x][R]=T.clone().lerp(M,R/S)}for(let x=0;x<A;x++)for(let T=0;T<2*(A-x)-1;T++){const M=Math.floor(T/2);T%2===0?(h(L[x][M+1]),h(L[x+1][M]),h(L[x][M])):(h(L[x][M+1]),h(L[x+1][M+1]),h(L[x+1][M]))}}function l(b){const w=new O;for(let E=0;E<r.length;E+=3)w.x=r[E+0],w.y=r[E+1],w.z=r[E+2],w.normalize().multiplyScalar(b),r[E+0]=w.x,r[E+1]=w.y,r[E+2]=w.z}function f(){const b=new O;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];const E=g(b)/2/Math.PI+.5,P=d(b)/Math.PI+.5;a.push(E,1-P)}m(),p()}function p(){for(let b=0;b<a.length;b+=6){const w=a[b+0],E=a[b+2],P=a[b+4],A=Math.max(w,E,P),L=Math.min(w,E,P);A>.9&&L<.1&&(w<.2&&(a[b+0]+=1),E<.2&&(a[b+2]+=1),P<.2&&(a[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function u(b,w){const E=b*3;w.x=e[E+0],w.y=e[E+1],w.z=e[E+2]}function m(){const b=new O,w=new O,E=new O,P=new O,A=new Be,L=new Be,x=new Be;for(let T=0,M=0;T<r.length;T+=9,M+=6){b.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),E.set(r[T+6],r[T+7],r[T+8]),A.set(a[M+0],a[M+1]),L.set(a[M+2],a[M+3]),x.set(a[M+4],a[M+5]),P.copy(b).add(w).add(E).divideScalar(3);const S=g(P);v(A,M+0,b,S),v(L,M+2,w,S),v(x,M+4,E,S)}}function v(b,w,E,P){P<0&&b.x===1&&(a[w]=b.x-1),E.x===0&&E.z===0&&(a[w]=P/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.vertices,e.indices,e.radius,e.detail)}}class Ba extends Oa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ba(e.radius,e.detail)}}class Ki extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,f=c+1,p=e/o,h=t/c,u=[],m=[],v=[],g=[];for(let d=0;d<f;d++){const b=d*h-a;for(let w=0;w<l;w++){const E=w*p-r;m.push(E,-b,0),v.push(0,0,1),g.push(w/o),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<o;b++){const w=b+l*d,E=b+l*(d+1),P=b+1+l*(d+1),A=b+1+l*d;u.push(w,E,A),u.push(E,P,A)}this.setIndex(u),this.setAttribute("position",new gt(m,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ai(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Uo(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Uo(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Rt(i){const e={};for(let t=0;t<i.length;t++){const n=Ai(i[t]);for(const s in n)e[s]=n[s]}return e}function Uo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ph(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const Lh={clone:Ai,merge:Rt};var Dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dh,this.fragmentShader=Ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=Ph(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new De().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Uh extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vs extends Ri{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Ea,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nh extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fh extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class za extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Mr=new Je,No=new O,Fo=new O;class kl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=zt,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fa,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;No.setFromMatrixPosition(e.matrixWorld),t.position.copy(No),Fo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fo),t.updateMatrixWorld(),Mr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mr,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===qi||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ms=new O,Ss=new Bn,rn=new O;class Hl extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ms,Ss,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ms,Ss,rn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ms,Ss,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ms,Ss,rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const In=new O,Oo=new Be,Bo=new Be;class Bt extends Hl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(In.x,In.y).multiplyScalar(-e/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-e/In.z)}getViewSize(e,t){return this.getViewBounds(e,Oo,Bo),t.subVectors(Bo,Oo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Oh extends kl{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0}}class Bh extends za{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Oh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ga extends Hl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zh extends kl{constructor(){super(new Ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zo extends za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new zh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Gh extends za{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const mi=-90,gi=1;class kh extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bt(mi,gi,e,t);s.layers=this.layers,this.add(s);const r=new Bt(mi,gi,e,t);r.layers=this.layers,this.add(r);const a=new Bt(mi,gi,e,t);a.layers=this.layers,this.add(a);const o=new Bt(mi,gi,e,t);o.layers=this.layers,this.add(o);const c=new Bt(mi,gi,e,t);c.layers=this.layers,this.add(c);const l=new Bt(mi,gi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(p,h,u),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Hh extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Go=new Je;class Vh{constructor(e,t,n=0,s=1/0){this.ray=new Na(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ia,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Go.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Go),this}intersectObject(e,t=!0,n=[]){return ga(e,this,n,t),n.sort(ko),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ga(e[s],this,n,t);return n.sort(ko),n}}function ko(i,e){return i.distance-e.distance}function ga(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ga(r[a],e,t,!0)}}const Ka=class Ka{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ka.prototype.isMatrix2=!0;let Ho=Ka;class j0 extends Rh{constructor(e=10,t=10,n=4473924,s=8947848){n=new Fe(n),s=new Fe(s);const r=t/2,a=e/t,o=e/2,c=[],l=[];for(let h=0,u=0,m=-o;h<=t;h++,m+=a){c.push(-o,0,m,o,0,m),c.push(m,0,-o,m,0,o);const v=h===r?n:s;v.toArray(l,u),u+=3,v.toArray(l,u),u+=3,v.toArray(l,u),u+=3,v.toArray(l,u),u+=3}const f=new kt;f.setAttribute("position",new gt(c,3)),f.setAttribute("color",new gt(l,3));const p=new Ol({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Vo(i,e,t,n){const s=Wh(n);switch(t){case Cl:return i*e;case Aa:return i*e/s.components*s.byteLength;case wa:return i*e/s.components*s.byteLength;case Qn:return i*e*2/s.components*s.byteLength;case Ra:return i*e*2/s.components*s.byteLength;case Pl:return i*e*3/s.components*s.byteLength;case jt:return i*e*4/s.components*s.byteLength;case Ca:return i*e*4/s.components*s.byteLength;case Ts:case As:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ws:case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zr:case kr:return Math.max(i,16)*Math.max(e,8)/4;case Br:case Gr:return Math.max(i,8)*Math.max(e,8)/2;case Hr:case Vr:case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wr:case Ls:case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $r:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ia:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case la:case ca:case ha:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fa:case ua:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ds:case da:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wh(i){switch(i){case zt:case Tl:return{byteLength:1,components:1};case Wi:case Al:case bn:return{byteLength:2,components:1};case ya:case Ta:return{byteLength:2,components:4};case un:case ba:case Qt:return{byteLength:4,components:1};case wl:case Rl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vl(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xh(i){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,p=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,f),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const f=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,f);else{p.sort((u,m)=>u.start-m.start);let h=0;for(let u=1;u<p.length;u++){const m=p[h],v=p[u];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,p[h]=v)}p.length=h+1;for(let u=0,m=p.length;u<m;u++){const v=p[u];i.bufferSubData(l,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yh=`#ifdef USE_ALPHAHASH
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
#endif`,Kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$h=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qh=`#ifdef USE_AOMAP
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
#endif`,jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ef=`#ifdef USE_BATCHING
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
#endif`,tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,af=`#ifdef USE_IRIDESCENCE
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
#endif`,of=`#ifdef USE_BUMPMAP
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gf=`#define PI 3.141592653589793
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
} // validated`,_f=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xf=`vec3 transformedNormal = objectNormal;
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
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,If=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uf=`#ifdef USE_GRADIENTMAP
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
}`,Nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wf=`PhysicalMaterial material;
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
#endif`,Xf=`uniform sampler2D dfgLUT;
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
}`,qf=`
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iu=`#if defined( USE_POINTS_UV )
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
#endif`,su=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ru=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,au=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ou=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cu=`#ifdef USE_MORPHTARGETS
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
#endif`,hu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gu=`#ifdef USE_NORMALMAP
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
#endif`,_u=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Su=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Au=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ru=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Du=`float getShadowMask() {
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
}`,Iu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uu=`#ifdef USE_SKINNING
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
#endif`,Nu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fu=`#ifdef USE_SKINNING
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
#endif`,Ou=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ku=`#ifdef USE_TRANSMISSION
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
#endif`,Hu=`#ifdef USE_TRANSMISSION
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
#endif`,Vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ku=`uniform sampler2D t2D;
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
}`,Zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$u=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ju=`#include <common>
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
}`,ed=`#if DEPTH_PACKING == 3200
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
}`,td=`#define DISTANCE
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
}`,nd=`#define DISTANCE
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
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`uniform float scale;
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
}`,ad=`uniform vec3 diffuse;
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
}`,od=`#include <common>
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
}`,ld=`uniform vec3 diffuse;
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
}`,cd=`#define LAMBERT
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
}`,hd=`#define LAMBERT
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
}`,fd=`#define MATCAP
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
}`,ud=`#define MATCAP
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
}`,dd=`#define NORMAL
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
}`,pd=`#define NORMAL
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
}`,md=`#define PHONG
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
}`,gd=`#define PHONG
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
}`,_d=`#define STANDARD
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
}`,xd=`#define STANDARD
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
}`,vd=`#define TOON
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
}`,Md=`#define TOON
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
}`,Sd=`uniform float size;
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
}`,Ed=`uniform vec3 diffuse;
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
}`,bd=`#include <common>
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
}`,yd=`uniform vec3 color;
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
}`,Td=`uniform float rotation;
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
}`,Ad=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:qh,alphahash_pars_fragment:Yh,alphamap_fragment:Kh,alphamap_pars_fragment:Zh,alphatest_fragment:$h,alphatest_pars_fragment:Jh,aomap_fragment:Qh,aomap_pars_fragment:jh,batching_pars_vertex:ef,batching_vertex:tf,begin_vertex:nf,beginnormal_vertex:sf,bsdfs:rf,iridescence_fragment:af,bumpmap_pars_fragment:of,clipping_planes_fragment:lf,clipping_planes_pars_fragment:cf,clipping_planes_pars_vertex:hf,clipping_planes_vertex:ff,color_fragment:uf,color_pars_fragment:df,color_pars_vertex:pf,color_vertex:mf,common:gf,cube_uv_reflection_fragment:_f,defaultnormal_vertex:xf,displacementmap_pars_vertex:vf,displacementmap_vertex:Mf,emissivemap_fragment:Sf,emissivemap_pars_fragment:Ef,colorspace_fragment:bf,colorspace_pars_fragment:yf,envmap_fragment:Tf,envmap_common_pars_fragment:Af,envmap_pars_fragment:wf,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:zf,envmap_vertex:Cf,fog_vertex:Pf,fog_pars_vertex:Lf,fog_fragment:Df,fog_pars_fragment:If,gradientmap_pars_fragment:Uf,lightmap_pars_fragment:Nf,lights_lambert_fragment:Ff,lights_lambert_pars_fragment:Of,lights_pars_begin:Bf,lights_toon_fragment:Gf,lights_toon_pars_fragment:kf,lights_phong_fragment:Hf,lights_phong_pars_fragment:Vf,lights_physical_fragment:Wf,lights_physical_pars_fragment:Xf,lights_fragment_begin:qf,lights_fragment_maps:Yf,lights_fragment_end:Kf,lightprobes_pars_fragment:Zf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:Qf,logdepthbuf_vertex:jf,map_fragment:eu,map_pars_fragment:tu,map_particle_fragment:nu,map_particle_pars_fragment:iu,metalnessmap_fragment:su,metalnessmap_pars_fragment:ru,morphinstance_vertex:au,morphcolor_vertex:ou,morphnormal_vertex:lu,morphtarget_pars_vertex:cu,morphtarget_vertex:hu,normal_fragment_begin:fu,normal_fragment_maps:uu,normal_pars_fragment:du,normal_pars_vertex:pu,normal_vertex:mu,normalmap_pars_fragment:gu,clearcoat_normal_fragment_begin:_u,clearcoat_normal_fragment_maps:xu,clearcoat_pars_fragment:vu,iridescence_pars_fragment:Mu,opaque_fragment:Su,packing:Eu,premultiplied_alpha_fragment:bu,project_vertex:yu,dithering_fragment:Tu,dithering_pars_fragment:Au,roughnessmap_fragment:wu,roughnessmap_pars_fragment:Ru,shadowmap_pars_fragment:Cu,shadowmap_pars_vertex:Pu,shadowmap_vertex:Lu,shadowmask_pars_fragment:Du,skinbase_vertex:Iu,skinning_pars_vertex:Uu,skinning_vertex:Nu,skinnormal_vertex:Fu,specularmap_fragment:Ou,specularmap_pars_fragment:Bu,tonemapping_fragment:zu,tonemapping_pars_fragment:Gu,transmission_fragment:ku,transmission_pars_fragment:Hu,uv_pars_fragment:Vu,uv_pars_vertex:Wu,uv_vertex:Xu,worldpos_vertex:qu,background_vert:Yu,background_frag:Ku,backgroundCube_vert:Zu,backgroundCube_frag:$u,cube_vert:Ju,cube_frag:Qu,depth_vert:ju,depth_frag:ed,distance_vert:td,distance_frag:nd,equirect_vert:id,equirect_frag:sd,linedashed_vert:rd,linedashed_frag:ad,meshbasic_vert:od,meshbasic_frag:ld,meshlambert_vert:cd,meshlambert_frag:hd,meshmatcap_vert:fd,meshmatcap_frag:ud,meshnormal_vert:dd,meshnormal_frag:pd,meshphong_vert:md,meshphong_frag:gd,meshphysical_vert:_d,meshphysical_frag:xd,meshtoon_vert:vd,meshtoon_frag:Md,points_vert:Sd,points_frag:Ed,shadow_vert:bd,shadow_frag:yd,sprite_vert:Td,sprite_frag:Ad},ue={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},ln={basic:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Rt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Rt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Rt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Rt([ue.points,ue.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Rt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Rt([ue.common,ue.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Rt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Rt([ue.sprite,ue.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:Rt([ue.common,ue.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:Rt([ue.lights,ue.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};ln.physical={uniforms:Rt([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Es={r:0,b:0,g:0},wd=new Je,Wl=new De;Wl.set(-1,0,0,0,1,0,0,0,1);function Rd(i,e,t,n,s,r){const a=new Fe(0);let o=s===!0?0:1,c,l,f=null,p=0,h=null;function u(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){const E=b.backgroundBlurriness>0;w=e.get(w,E)}return w}function m(b){let w=!1;const E=u(b);E===null?g(a,o):E&&E.isColor&&(g(E,1),w=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(b,w){const E=u(w);E&&(E.isCubeTexture||E.mapping===zs)?(l===void 0&&(l=new tt(new Ci(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Ai(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(P,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(wd.makeRotationFromEuler(w.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Wl),l.material.toneMapped=Ge.getTransfer(E.colorSpace)!==Ze,(f!==E||p!==E.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=E,p=E.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new tt(new Ki(2,2),new dn({name:"BackgroundMaterial",uniforms:Ai(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(E.colorSpace)!==Ze,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||p!==E.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,p=E.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,w){b.getRGB(Es,Gl(i)),t.buffers.color.setClear(Es.r,Es.g,Es.b,w,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:m,addToRenderList:v,dispose:d}}function Cd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(S,R,D,G,I){let V=!1;const B=p(S,G,D,R);r!==B&&(r=B,l(r.object)),V=u(S,G,D,I),V&&m(S,G,D,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,E(S,R,D,G),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function f(S){return i.deleteVertexArray(S)}function p(S,R,D,G){const I=G.wireframe===!0;let V=n[R.id];V===void 0&&(V={},n[R.id]=V);const B=S.isInstancedMesh===!0?S.id:0;let Z=V[B];Z===void 0&&(Z={},V[B]=Z);let Q=Z[D.id];Q===void 0&&(Q={},Z[D.id]=Q);let ie=Q[I];return ie===void 0&&(ie=h(c()),Q[I]=ie),ie}function h(S){const R=[],D=[],G=[];for(let I=0;I<t;I++)R[I]=0,D[I]=0,G[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:G,object:S,attributes:{},index:null}}function u(S,R,D,G){const I=r.attributes,V=R.attributes;let B=0;const Z=D.getAttributes();for(const Q in Z)if(Z[Q].location>=0){const ae=I[Q];let xe=V[Q];if(xe===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor)),ae===void 0||ae.attribute!==xe||xe&&ae.data!==xe.data)return!0;B++}return r.attributesNum!==B||r.index!==G}function m(S,R,D,G){const I={},V=R.attributes;let B=0;const Z=D.getAttributes();for(const Q in Z)if(Z[Q].location>=0){let ae=V[Q];ae===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor));const xe={};xe.attribute=ae,ae&&ae.data&&(xe.data=ae.data),I[Q]=xe,B++}r.attributes=I,r.attributesNum=B,r.index=G}function v(){const S=r.newAttributes;for(let R=0,D=S.length;R<D;R++)S[R]=0}function g(S){d(S,0)}function d(S,R){const D=r.newAttributes,G=r.enabledAttributes,I=r.attributeDivisors;D[S]=1,G[S]===0&&(i.enableVertexAttribArray(S),G[S]=1),I[S]!==R&&(i.vertexAttribDivisor(S,R),I[S]=R)}function b(){const S=r.newAttributes,R=r.enabledAttributes;for(let D=0,G=R.length;D<G;D++)R[D]!==S[D]&&(i.disableVertexAttribArray(D),R[D]=0)}function w(S,R,D,G,I,V,B){B===!0?i.vertexAttribIPointer(S,R,D,I,V):i.vertexAttribPointer(S,R,D,G,I,V)}function E(S,R,D,G){v();const I=G.attributes,V=D.getAttributes(),B=R.defaultAttributeValues;for(const Z in V){const Q=V[Z];if(Q.location>=0){let ie=I[Z];if(ie===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){const ae=ie.normalized,xe=ie.itemSize,He=e.get(ie);if(He===void 0)continue;const st=He.buffer,We=He.type,q=He.bytesPerElement,ne=We===i.INT||We===i.UNSIGNED_INT||ie.gpuType===ba;if(ie.isInterleavedBufferAttribute){const ee=ie.data,Te=ee.stride,Re=ie.offset;if(ee.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Q.locationSize;Ce++)d(Q.location+Ce,ee.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ce=0;Ce<Q.locationSize;Ce++)g(Q.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Ce=0;Ce<Q.locationSize;Ce++)w(Q.location+Ce,xe/Q.locationSize,We,ae,Te*q,(Re+xe/Q.locationSize*Ce)*q,ne)}else{if(ie.isInstancedBufferAttribute){for(let ee=0;ee<Q.locationSize;ee++)d(Q.location+ee,ie.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ee=0;ee<Q.locationSize;ee++)g(Q.location+ee);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ee=0;ee<Q.locationSize;ee++)w(Q.location+ee,xe/Q.locationSize,We,ae,xe*q,xe/Q.locationSize*ee*q,ne)}}else if(B!==void 0){const ae=B[Z];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(Q.location,ae);break;case 3:i.vertexAttrib3fv(Q.location,ae);break;case 4:i.vertexAttrib4fv(Q.location,ae);break;default:i.vertexAttrib1fv(Q.location,ae)}}}}b()}function P(){T();for(const S in n){const R=n[S];for(const D in R){const G=R[D];for(const I in G){const V=G[I];for(const B in V)f(V[B].object),delete V[B];delete G[I]}}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const D in R){const G=R[D];for(const I in G){const V=G[I];for(const B in V)f(V[B].object),delete V[B];delete G[I]}}delete n[S.id]}function L(S){for(const R in n){const D=n[R];for(const G in D){const I=D[G];if(I[S.id]===void 0)continue;const V=I[S.id];for(const B in V)f(V[B].object),delete V[B];delete I[S.id]}}}function x(S){for(const R in n){const D=n[R],G=S.isInstancedMesh===!0?S.id:0,I=D[G];if(I!==void 0){for(const V in I){const B=I[V];for(const Z in B)f(B[Z].object),delete B[Z];delete I[V]}delete D[G],Object.keys(D).length===0&&delete n[R]}}}function T(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function Pd(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,f){f!==0&&(i.drawArraysInstanced(n,c,l,f),t.update(l,n,f))}function o(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,f);let h=0;for(let u=0;u<f;u++)h+=l[u];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ld(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==jt&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const x=L===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==zt&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Qt&&!x)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(Le("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:E,maxSamples:P,samples:A}}function Dd(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Un,o=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const u=p.length!==0||h||n!==0||s;return s=h,n=p.length,u},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){t=f(p,h,0)},this.setState=function(p,h,u){const m=p.clippingPlanes,v=p.clipIntersection,g=p.clipShadows,d=i.get(p);if(!s||m===null||m.length===0||r&&!g)r?f(null):l();else{const b=r?0:n,w=b*4;let E=d.clippingState||null;c.value=E,E=f(m,h,w,u);for(let P=0;P!==w;++P)E[P]=t[P];d.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,h,u,m){const v=p!==null?p.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const d=u+v*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<d)&&(g=new Float32Array(d));for(let w=0,E=u;w!==v;++w,E+=4)a.copy(p[w]).applyMatrix4(b,o),a.normal.toArray(g,E),g[E+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const Fn=4,Wo=[.125,.215,.35,.446,.526,.582],Kn=20,Id=256,zi=new Ga,Xo=new Fe;let Sr=null,Er=0,br=0,yr=!1;const Ud=new O;class qo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Ud}=r;Sr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sr,Er,br),this._renderer.xr.enabled=yr,e.scissorTest=!1,_i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jn||e.mapping===yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:bn,format:jt,colorSpace:Is,depthBuffer:!1},s=Yo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yo(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Nd(r)),this._blurMaterial=Od(r,e,t),this._ggxMaterial=Fd(r,e,t)}return s}_compileMaterial(e){const t=new tt(new kt,e);this._renderer.compile(t,zi)}_sceneToCubeUV(e,t,n,s,r){const c=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,u=p.toneMapping;p.getClearColor(Xo),p.toneMapping=hn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tt(new Ci,new vi({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let d=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,d=!0):(g.color.copy(Xo),d=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[w],r.y,r.z)):E===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[w]));const P=this._cubeSize;_i(s,E*P,w>2?P:0,P,P),p.setRenderTarget(s),d&&p.render(v,c),p.render(e,c)}p.toneMapping=u,p.autoClear=h,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Jn||e.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ko());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;_i(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,zi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-f*f),h=0+l*1.25,u=p*h,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-Fn?n-m+Fn:0),d=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=m-t,_i(r,g,d,3*v,2*v),s.setRenderTarget(r),s.render(o,zi),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,_i(e,g,d,3*v,2*v),s.setRenderTarget(e),s.render(o,zi)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");const f=3,p=this._lodMeshes[s];p.material=l;const h=l.uniforms,u=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Kn-1),v=r/m,g=isFinite(r)?1+Math.floor(f*v):Kn;g>Kn&&Le(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Kn}`);const d=[];let b=0;for(let L=0;L<Kn;++L){const x=L/v,T=Math.exp(-x*x/2);d.push(T),L===0?b+=T:L<g&&(b+=2*T)}for(let L=0;L<d.length;L++)d[L]=d[L]/b;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=m,h.mipInt.value=w-n;const E=this._sizeLods[s],P=3*E*(s>w-Fn?s-w+Fn:0),A=4*(this._cubeSize-E);_i(t,P,A,3*E,2*E),c.setRenderTarget(t),c.render(p,zi)}}function Nd(i){const e=[],t=[],n=[];let s=i;const r=i-Fn+1+Wo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Fn?c=Wo[a-i+Fn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),f=-l,p=1+l,h=[f,f,p,f,p,p,f,f,p,p,f,p],u=6,m=6,v=3,g=2,d=1,b=new Float32Array(v*m*u),w=new Float32Array(g*m*u),E=new Float32Array(d*m*u);for(let A=0;A<u;A++){const L=A%3*2/3-1,x=A>2?0:-1,T=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];b.set(T,v*m*A),w.set(h,g*m*A);const M=[A,A,A,A,A,A];E.set(M,d*m*A)}const P=new kt;P.setAttribute("position",new en(b,v)),P.setAttribute("uv",new en(w,g)),P.setAttribute("faceIndex",new en(E,d)),n.push(new tt(P,null)),s>Fn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Yo(i,e,t){const n=new fn(i,e,t);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _i(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Fd(i,e,t){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Id,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Od(i,e,t){const n=new Float32Array(Kn),s=new O(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Ko(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Zo(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Gs(){return`

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
	`}class Xl extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Bl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ci(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:Sn});r.uniforms.tEquirect.value=t;const a=new tt(s,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=wt),new kh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Bd(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,u=!1){return h==null?null:u?a(h):r(h)}function r(h){if(h&&h.isTexture){const u=h.mapping;if(u===qs||u===Ys)if(e.has(h)){const m=e.get(h).texture;return o(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const v=new Xl(m.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const u=h.mapping,m=u===qs||u===Ys,v=u===Jn||u===yi;if(m||v){let g=t.get(h);const d=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new qo(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const b=h.image;return m&&b&&b.height>0||v&&b&&c(b)?(n===null&&(n=new qo(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",f),g.texture):null}}}return h}function o(h,u){return u===qs?h.mapping=Jn:u===Ys&&(h.mapping=yi),h}function c(h){let u=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&u++;return u===m}function l(h){const u=h.target;u.removeEventListener("dispose",l);const m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function f(h){const u=h.target;u.removeEventListener("dispose",f);const m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function zd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Si("WebGLRenderer: "+n+" extension not supported."),s}}}function Gd(i,e,t,n){const s={},r=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete s[h.id];const u=r.get(h);u&&(e.remove(u),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(p){const h=p.attributes;for(const u in h)e.update(h[u],i.ARRAY_BUFFER)}function l(p){const h=[],u=p.index,m=p.attributes.position;let v=0;if(m===void 0)return;if(u!==null){const b=u.array;v=u.version;for(let w=0,E=b.length;w<E;w+=3){const P=b[w+0],A=b[w+1],L=b[w+2];h.push(P,A,A,L,L,P)}}else{const b=m.array;v=m.version;for(let w=0,E=b.length/3-1;w<E;w+=3){const P=w+0,A=w+1,L=w+2;h.push(P,A,A,L,L,P)}}const g=new(m.count>=65535?Nl:Ul)(h,1);g.version=v;const d=r.get(p);d&&e.remove(d),r.set(p,g)}function f(p){const h=r.get(p);if(h){const u=p.index;u!==null&&h.version<u.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:c,getWireframeAttribute:f}}function kd(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,h){i.drawElements(n,h,r,p*a),t.update(h,n,1)}function l(p,h,u){u!==0&&(i.drawElementsInstanced(n,h,r,p*a,u),t.update(h,n,u))}function f(p,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,u);let v=0;for(let g=0;g<u;g++)v+=h[g];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function Hd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Vd(i,e,t){const n=new WeakMap,s=new rt;function r(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==p){let T=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let w=0;u===!0&&(w=1),m===!0&&(w=2),v===!0&&(w=3);let E=o.attributes.position.count*w,P=1;E>e.maxTextureSize&&(P=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*P*4*p),L=new Dl(A,E,P,p);L.type=Qt,L.needsUpdate=!0;const x=w*4;for(let M=0;M<p;M++){const S=g[M],R=d[M],D=b[M],G=E*P*4*M;for(let I=0;I<S.count;I++){const V=I*x;u===!0&&(s.fromBufferAttribute(S,I),A[G+V+0]=s.x,A[G+V+1]=s.y,A[G+V+2]=s.z,A[G+V+3]=0),m===!0&&(s.fromBufferAttribute(R,I),A[G+V+4]=s.x,A[G+V+5]=s.y,A[G+V+6]=s.z,A[G+V+7]=0),v===!0&&(s.fromBufferAttribute(D,I),A[G+V+8]=s.x,A[G+V+9]=s.y,A[G+V+10]=s.z,A[G+V+11]=D.itemSize===4?s.w:1)}}h={count:p,texture:L,size:new Be(E,P)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let u=0;for(let v=0;v<l.length;v++)u+=l[v];const m=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Wd(i,e,t,n,s){let r=new WeakMap;function a(l){const f=s.render.frame,p=l.geometry,h=e.get(l,p);if(r.get(h)!==f&&(e.update(h),r.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==f&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==f&&(u.update(),r.set(u,f))}return h}function o(){r=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const Xd={[_l]:"LINEAR_TONE_MAPPING",[xl]:"REINHARD_TONE_MAPPING",[vl]:"CINEON_TONE_MAPPING",[Ml]:"ACES_FILMIC_TONE_MAPPING",[El]:"AGX_TONE_MAPPING",[bl]:"NEUTRAL_TONE_MAPPING",[Sl]:"CUSTOM_TONE_MAPPING"};function qd(i,e,t,n,s,r){const a=new fn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Ti(e,t):void 0}),o=new fn(e,t,{type:bn,depthBuffer:!1,stencilBuffer:!1}),c=new kt;c.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new gt([0,2,0,0,2,0],2));const l=new Uh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new tt(c,l),p=new Ga(-1,1,1,-1,0,1);let h=null,u=null,m=!1,v,g=null,d=[],b=!1;this.setSize=function(w,E){a.setSize(w,E),o.setSize(w,E);for(let P=0;P<d.length;P++){const A=d[P];A.setSize&&A.setSize(w,E)}},this.setEffects=function(w){d=w,b=d.length>0&&d[0].isRenderPass===!0;const E=a.width,P=a.height;for(let A=0;A<d.length;A++){const L=d[A];L.setSize&&L.setSize(E,P)}},this.begin=function(w,E){if(m||w.toneMapping===hn&&d.length===0)return!1;if(g=E,E!==null){const P=E.width,A=E.height;(a.width!==P||a.height!==A)&&this.setSize(P,A)}return b===!1&&w.setRenderTarget(a),v=w.toneMapping,w.toneMapping=hn,!0},this.hasRenderPass=function(){return b},this.end=function(w,E){w.toneMapping=v,m=!0;let P=a,A=o;for(let L=0;L<d.length;L++){const x=d[L];if(x.enabled!==!1&&(x.render(w,A,P,E),x.needsSwap!==!1)){const T=P;P=A,A=T}}if(h!==w.outputColorSpace||u!==w.toneMapping){h=w.outputColorSpace,u=w.toneMapping,l.defines={},Ge.getTransfer(h)===Ze&&(l.defines.SRGB_TRANSFER="");const L=Xd[u];L&&(l.defines[L]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=P.texture,w.setRenderTarget(g),w.render(f,p),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const ql=new Ct,_a=new Ti(1,1),Yl=new Dl,Kl=new lh,Zl=new Bl,$o=[],Jo=[],Qo=new Float32Array(16),jo=new Float32Array(9),el=new Float32Array(4);function Pi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=$o[s];if(r===void 0&&(r=new Float32Array(s),$o[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ks(i,e){let t=Jo[e];t===void 0&&(t=new Int32Array(e),Jo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Yd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function Zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function $d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function Jd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;el.set(n),i.uniformMatrix2fv(this.addr,!1,el),xt(t,n)}}function Qd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;jo.set(n),i.uniformMatrix3fv(this.addr,!1,jo),xt(t,n)}}function jd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;Qo.set(n),i.uniformMatrix4fv(this.addr,!1,Qo),xt(t,n)}}function ep(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function sp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function lp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_a.compareFunction=t.isReversedDepthBuffer()?La:Pa,r=_a):r=ql,t.setTexture2D(e||r,s)}function cp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Kl,s)}function hp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Zl,s)}function fp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yl,s)}function up(i){switch(i){case 5126:return Yd;case 35664:return Kd;case 35665:return Zd;case 35666:return $d;case 35674:return Jd;case 35675:return Qd;case 35676:return jd;case 5124:case 35670:return ep;case 35667:case 35671:return tp;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return sp;case 36294:return rp;case 36295:return ap;case 36296:return op;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return fp}}function dp(i,e){i.uniform1fv(this.addr,e)}function pp(i,e){const t=Pi(e,this.size,2);i.uniform2fv(this.addr,t)}function mp(i,e){const t=Pi(e,this.size,3);i.uniform3fv(this.addr,t)}function gp(i,e){const t=Pi(e,this.size,4);i.uniform4fv(this.addr,t)}function _p(i,e){const t=Pi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xp(i,e){const t=Pi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vp(i,e){const t=Pi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mp(i,e){i.uniform1iv(this.addr,e)}function Sp(i,e){i.uniform2iv(this.addr,e)}function Ep(i,e){i.uniform3iv(this.addr,e)}function bp(i,e){i.uniform4iv(this.addr,e)}function yp(i,e){i.uniform1uiv(this.addr,e)}function Tp(i,e){i.uniform2uiv(this.addr,e)}function Ap(i,e){i.uniform3uiv(this.addr,e)}function wp(i,e){i.uniform4uiv(this.addr,e)}function Rp(i,e,t){const n=this.cache,s=e.length,r=ks(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=_a:a=ql;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Cp(i,e,t){const n=this.cache,s=e.length,r=ks(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Kl,r[a])}function Pp(i,e,t){const n=this.cache,s=e.length,r=ks(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Zl,r[a])}function Lp(i,e,t){const n=this.cache,s=e.length,r=ks(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Yl,r[a])}function Dp(i){switch(i){case 5126:return dp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return xp;case 35676:return vp;case 5124:case 35670:return Mp;case 35667:case 35671:return Sp;case 35668:case 35672:return Ep;case 35669:case 35673:return bp;case 5125:return yp;case 36294:return Tp;case 36295:return Ap;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Lp}}class Ip{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=up(t.type)}}class Up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dp(t.type)}}class Np{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Tr=/(\w+)(\])?(\[|\.)?/g;function tl(i,e){i.seq.push(e),i.map[e.id]=e}function Fp(i,e,t){const n=i.name,s=n.length;for(Tr.lastIndex=0;;){const r=Tr.exec(n),a=Tr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){tl(t,l===void 0?new Ip(o,i,e):new Up(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Np(o),tl(t,p)),t=p}}}class Cs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Fp(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function nl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Op=37297;let Bp=0;function zp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const il=new De;function Gp(i){Ge._getMatrix(il,Ge.workingColorSpace,i);const e=`mat3( ${il.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case Us:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+zp(i.getShaderSource(e),o)}else return r}function kp(i,e){const t=Gp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Hp={[_l]:"Linear",[xl]:"Reinhard",[vl]:"Cineon",[Ml]:"ACESFilmic",[El]:"AgX",[bl]:"Neutral",[Sl]:"Custom"};function Vp(i,e){const t=Hp[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bs=new O;function Wp(){Ge.getLuminanceCoefficients(bs);const i=bs.x.toFixed(4),e=bs.y.toFixed(4),t=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function qp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Hi(i){return i!==""}function rl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function al(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function xa(i){return i.replace(Kp,$p)}const Zp=new Map;function $p(i,e){let t=Ne[e];if(t===void 0){const n=Zp.get(e);if(n!==void 0)t=Ne[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xa(t)}const Jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(i){return i.replace(Jp,Qp)}function Qp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ll(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const jp={[ys]:"SHADOWMAP_TYPE_PCF",[ki]:"SHADOWMAP_TYPE_VSM"};function e0(i){return jp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const t0={[Jn]:"ENVMAP_TYPE_CUBE",[yi]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE_UV"};function n0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":t0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const i0={[yi]:"ENVMAP_MODE_REFRACTION"};function s0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":i0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const r0={[Ea]:"ENVMAP_BLENDING_MULTIPLY",[kc]:"ENVMAP_BLENDING_MIX",[Hc]:"ENVMAP_BLENDING_ADD"};function a0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":r0[i.combine]||"ENVMAP_BLENDING_NONE"}function o0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function l0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=e0(t),l=n0(t),f=s0(t),p=a0(t),h=o0(t),u=Xp(t),m=qp(r),v=s.createProgram();let g,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Hi).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Hi).join(`
`),d.length>0&&(d+=`
`)):(g=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),d=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==hn?Vp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,kp("linearToOutputTexel",t.outputColorSpace),Wp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hi).join(`
`)),a=xa(a),a=rl(a,t),a=al(a,t),o=xa(o),o=rl(o,t),o=al(o,t),a=ol(a),o=ol(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===co?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=b+g+a,E=b+d+o,P=nl(s,s.VERTEX_SHADER,w),A=nl(s,s.FRAGMENT_SHADER,E);s.attachShader(v,P),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(S){if(i.debug.checkShaderErrors){const R=s.getProgramInfoLog(v)||"",D=s.getShaderInfoLog(P)||"",G=s.getShaderInfoLog(A)||"",I=R.trim(),V=D.trim(),B=G.trim();let Z=!0,Q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,A);else{const ie=sl(s,P,"vertex"),ae=sl(s,A,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+I+`
`+ie+`
`+ae)}else I!==""?Le("WebGLProgram: Program Info Log:",I):(V===""||B==="")&&(Q=!1);Q&&(S.diagnostics={runnable:Z,programLog:I,vertexShader:{log:V,prefix:g},fragmentShader:{log:B,prefix:d}})}s.deleteShader(P),s.deleteShader(A),x=new Cs(s,v),T=Yp(s,v)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Op)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=A,this}let c0=0;class h0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new f0(e),t.set(e,n)),n}}class f0{constructor(e){this.id=c0++,this.code=e,this.usedTimes=0}}function u0(i){return i===Qn||i===Ls||i===Ds}function d0(i,e,t,n,s,r){const a=new Ia,o=new h0,c=new Set,l=[],f=new Map,p=n.logarithmicDepthBuffer;let h=n.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,T,M,S,R,D){const G=S.fog,I=R.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?S.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||V,B),Q=Z&&Z.mapping===zs?Z.image.height:null,ie=u[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Le("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ae=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,xe=ae!==void 0?ae.length:0;let He=0;I.morphAttributes.position!==void 0&&(He=1),I.morphAttributes.normal!==void 0&&(He=2),I.morphAttributes.color!==void 0&&(He=3);let st,We,q,ne;if(ie){const Me=ln[ie];st=Me.vertexShader,We=Me.fragmentShader}else{st=x.vertexShader,We=x.fragmentShader;const Me=o.getVertexShaderStage(x),ot=o.getFragmentShaderStage(x);o.update(x,Me,ot),q=Me.id,ne=ot.id}const ee=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Re=R.isInstancedMesh===!0,Ce=R.isBatchedMesh===!0,ct=!!x.map,ze=!!x.matcap,Qe=!!Z,Ye=!!x.aoMap,Xe=!!x.lightMap,ut=!!x.bumpMap&&x.wireframe===!1,mt=!!x.normalMap,vt=!!x.displacementMap,St=!!x.emissiveMap,at=!!x.metalnessMap,dt=!!x.roughnessMap,N=x.anisotropy>0,Pt=x.clearcoat>0,Ke=x.dispersion>0,C=x.iridescence>0,_=x.sheen>0,z=x.transmission>0,W=N&&!!x.anisotropyMap,Y=Pt&&!!x.clearcoatMap,se=Pt&&!!x.clearcoatNormalMap,oe=Pt&&!!x.clearcoatRoughnessMap,K=C&&!!x.iridescenceMap,J=C&&!!x.iridescenceThicknessMap,le=_&&!!x.sheenColorMap,be=_&&!!x.sheenRoughnessMap,fe=!!x.specularMap,ce=!!x.specularColorMap,we=!!x.specularIntensityMap,Pe=z&&!!x.transmissionMap,Ie=z&&!!x.thicknessMap,U=!!x.gradientMap,re=!!x.alphaMap,$=x.alphaTest>0,he=!!x.alphaHash,me=!!x.extensions;let j=hn;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(j=i.toneMapping);const Ee={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:st,fragmentShader:We,defines:x.defines,customVertexShaderID:q,customFragmentShaderID:ne,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ce,batchingColor:Ce&&R._colorsTexture!==null,instancing:Re,instancingColor:Re&&R.instanceColor!==null,instancingMorph:Re&&R.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ct,matcap:ze,envMap:Qe,envMapMode:Qe&&Z.mapping,envMapCubeUVHeight:Q,aoMap:Ye,lightMap:Xe,bumpMap:ut,normalMap:mt,displacementMap:vt,emissiveMap:St,normalMapObjectSpace:mt&&x.normalMapType===Xc,normalMapTangentSpace:mt&&x.normalMapType===pa,packedNormalMap:mt&&x.normalMapType===pa&&u0(x.normalMap.format),metalnessMap:at,roughnessMap:dt,anisotropy:N,anisotropyMap:W,clearcoat:Pt,clearcoatMap:Y,clearcoatNormalMap:se,clearcoatRoughnessMap:oe,dispersion:Ke,iridescence:C,iridescenceMap:K,iridescenceThicknessMap:J,sheen:_,sheenColorMap:le,sheenRoughnessMap:be,specularMap:fe,specularColorMap:ce,specularIntensityMap:we,transmission:z,transmissionMap:Pe,thicknessMap:Ie,gradientMap:U,opaque:x.transparent===!1&&x.blending===Mi&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:$,alphaHash:he,combine:x.combine,mapUv:ct&&m(x.map.channel),aoMapUv:Ye&&m(x.aoMap.channel),lightMapUv:Xe&&m(x.lightMap.channel),bumpMapUv:ut&&m(x.bumpMap.channel),normalMapUv:mt&&m(x.normalMap.channel),displacementMapUv:vt&&m(x.displacementMap.channel),emissiveMapUv:St&&m(x.emissiveMap.channel),metalnessMapUv:at&&m(x.metalnessMap.channel),roughnessMapUv:dt&&m(x.roughnessMap.channel),anisotropyMapUv:W&&m(x.anisotropyMap.channel),clearcoatMapUv:Y&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(x.sheenRoughnessMap.channel),specularMapUv:fe&&m(x.specularMap.channel),specularColorMapUv:ce&&m(x.specularColorMap.channel),specularIntensityMapUv:we&&m(x.specularIntensityMap.channel),transmissionMapUv:Pe&&m(x.transmissionMap.channel),thicknessMapUv:Ie&&m(x.thicknessMap.channel),alphaMapUv:re&&m(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(mt||N),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!I.attributes.uv&&(ct||re),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&mt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Te,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:He,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&M.length>0,shadowMapType:i.shadowMap.type,toneMapping:j,decodeVideoTexture:ct&&x.map.isVideoTexture===!0&&Ge.getTransfer(x.map.colorSpace)===Ze,decodeVideoTextureEmissive:St&&x.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(x.emissiveMap.colorSpace)===Ze,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===vn,flipSided:x.side===It,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:me&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&x.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function g(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const M in x.defines)T.push(M),T.push(x.defines[M]);return x.isRawShaderMaterial===!1&&(d(T,x),b(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function d(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){const T=u[x.type];let M;if(T){const S=ln[T];M=Lh.clone(S.uniforms)}else M=x.uniforms;return M}function E(x,T){let M=f.get(T);return M!==void 0?++M.usedTimes:(M=new l0(i,T,x,s),l.push(M),f.set(T,M)),M}function P(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),f.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function L(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:w,acquireProgram:E,releaseProgram:P,releaseShaderCache:A,programs:l,dispose:L}}function p0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function m0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function cl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function o(h,u,m,v,g,d){let b=i[e];return b===void 0?(b={id:h.id,object:h,geometry:u,material:m,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:d},i[e]=b):(b.id=h.id,b.object=h,b.geometry=u,b.material=m,b.materialVariant=a(h),b.groupOrder=v,b.renderOrder=h.renderOrder,b.z=g,b.group=d),e++,b}function c(h,u,m,v,g,d){const b=o(h,u,m,v,g,d);m.transmission>0?n.push(b):m.transparent===!0?s.push(b):t.push(b)}function l(h,u,m,v,g,d){const b=o(h,u,m,v,g,d);m.transmission>0?n.unshift(b):m.transparent===!0?s.unshift(b):t.unshift(b)}function f(h,u,m){t.length>1&&t.sort(h||m0),n.length>1&&n.sort(u||cl),s.length>1&&s.sort(u||cl),m&&(t.reverse(),n.reverse(),s.reverse())}function p(){for(let h=e,u=i.length;h<u;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:f}}function g0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new hl,i.set(n,[a])):s>=r.length?(a=new hl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function _0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Fe};break;case"SpotLight":t={position:new O,direction:new O,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function x0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let v0=0;function M0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function S0(i){const e=new _0,t=x0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);const s=new O,r=new Je,a=new Je;function o(l){let f=0,p=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let u=0,m=0,v=0,g=0,d=0,b=0,w=0,E=0,P=0,A=0,L=0;l.sort(M0);for(let T=0,M=l.length;T<M;T++){const S=l[T],R=S.color,D=S.intensity,G=S.distance;let I=null;if(S.shadow&&S.shadow.map&&(S.shadow.map.texture.format===Qn?I=S.shadow.map.texture:I=S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)f+=R.r*D,p+=R.g*D,h+=R.b*D;else if(S.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(S.sh.coefficients[V],D);L++}else if(S.isDirectionalLight){const V=e.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const B=S.shadow,Z=t.get(S);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,n.directionalShadow[u]=Z,n.directionalShadowMap[u]=I,n.directionalShadowMatrix[u]=S.shadow.matrix,b++}n.directional[u]=V,u++}else if(S.isSpotLight){const V=e.get(S);V.position.setFromMatrixPosition(S.matrixWorld),V.color.copy(R).multiplyScalar(D),V.distance=G,V.coneCos=Math.cos(S.angle),V.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),V.decay=S.decay,n.spot[v]=V;const B=S.shadow;if(S.map&&(n.spotLightMap[P]=S.map,P++,B.updateMatrices(S),S.castShadow&&A++),n.spotLightMatrix[v]=B.matrix,S.castShadow){const Z=t.get(S);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=I,E++}v++}else if(S.isRectAreaLight){const V=e.get(S);V.color.copy(R).multiplyScalar(D),V.halfWidth.set(S.width*.5,0,0),V.halfHeight.set(0,S.height*.5,0),n.rectArea[g]=V,g++}else if(S.isPointLight){const V=e.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),V.distance=S.distance,V.decay=S.decay,S.castShadow){const B=S.shadow,Z=t.get(S);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,n.pointShadow[m]=Z,n.pointShadowMap[m]=I,n.pointShadowMatrix[m]=S.shadow.matrix,w++}n.point[m]=V,m++}else if(S.isHemisphereLight){const V=e.get(S);V.skyColor.copy(S.color).multiplyScalar(D),V.groundColor.copy(S.groundColor).multiplyScalar(D),n.hemi[d]=V,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==u||x.pointLength!==m||x.spotLength!==v||x.rectAreaLength!==g||x.hemiLength!==d||x.numDirectionalShadows!==b||x.numPointShadows!==w||x.numSpotShadows!==E||x.numSpotMaps!==P||x.numLightProbes!==L)&&(n.directional.length=u,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=E+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,x.directionalLength=u,x.pointLength=m,x.spotLength=v,x.rectAreaLength=g,x.hemiLength=d,x.numDirectionalShadows=b,x.numPointShadows=w,x.numSpotShadows=E,x.numSpotMaps=P,x.numLightProbes=L,n.version=v0++)}function c(l,f){let p=0,h=0,u=0,m=0,v=0;const g=f.matrixWorldInverse;for(let d=0,b=l.length;d<b;d++){const w=l[d];if(w.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(w.isSpotLight){const E=n.spot[u];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),u++}else if(w.isRectAreaLight){const E=n.rectArea[m];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(w.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),m++}else if(w.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(g),h++}else if(w.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(g),v++}}}return{setup:o,setupView:c,state:n}}function fl(i){const e=new S0(i),t=[],n=[],s=[];function r(h){p.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function f(h){e.setupView(t,h)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function E0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new fl(i),e.set(s,[o])):r>=a.length?(o=new fl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y0=`uniform sampler2D shadow_pass;
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
}`,T0=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],A0=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],ul=new Je,Gi=new O,Ar=new O;function w0(i,e,t){let n=new Fa;const s=new Be,r=new Be,a=new rt,o=new Nh,c=new Fh,l={},f=t.maxTextureSize,p={[On]:It,[It]:On,[vn]:vn},h=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:b0,fragmentShader:y0}),u=h.clone();u.defines.HORIZONTAL_PASS=1;const m=new kt;m.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new tt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ys;let d=this.type;this.render=function(A,L,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Ec&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ys);const T=i.getRenderTarget(),M=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),R=i.state;R.setBlending(Sn),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const D=d!==this.type;D&&L.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(I=>I.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,I=A.length;G<I;G++){const V=A[G],B=V.shadow;if(B===void 0){Le("WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const Z=B.getFrameExtents();s.multiply(Z),r.copy(B.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/Z.x),s.x=r.x*Z.x,B.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/Z.y),s.y=r.y*Z.y,B.mapSize.y=r.y));const Q=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Q,B.map===null||D===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ki){if(V.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new fn(s.x,s.y,{format:Qn,type:bn,minFilter:wt,magFilter:wt,generateMipmaps:!1}),B.map.texture.name=V.name+".shadowMap",B.map.depthTexture=new Ti(s.x,s.y,Qt),B.map.depthTexture.name=V.name+".shadowMapDepth",B.map.depthTexture.format=yn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Et,B.map.depthTexture.magFilter=Et}else V.isPointLight?(B.map=new Xl(s.x),B.map.depthTexture=new Ch(s.x,un)):(B.map=new fn(s.x,s.y),B.map.depthTexture=new Ti(s.x,s.y,un)),B.map.depthTexture.name=V.name+".shadowMap",B.map.depthTexture.format=yn,this.type===ys?(B.map.depthTexture.compareFunction=Q?La:Pa,B.map.depthTexture.minFilter=wt,B.map.depthTexture.magFilter=wt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Et,B.map.depthTexture.magFilter=Et);B.camera.updateProjectionMatrix()}const ie=B.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<ie;ae++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(B.map),i.clear());const xe=B.getViewport(ae);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),R.viewport(a)}if(V.isPointLight){const xe=B.camera,He=B.matrix,st=V.distance||xe.far;st!==xe.far&&(xe.far=st,xe.updateProjectionMatrix()),Gi.setFromMatrixPosition(V.matrixWorld),xe.position.copy(Gi),Ar.copy(xe.position),Ar.add(T0[ae]),xe.up.copy(A0[ae]),xe.lookAt(Ar),xe.updateMatrixWorld(),He.makeTranslation(-Gi.x,-Gi.y,-Gi.z),ul.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),B._frustum.setFromProjectionMatrix(ul,xe.coordinateSystem,xe.reversedDepth)}else B.updateMatrices(V);n=B.getFrustum(),E(L,x,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===ki&&b(B,x),B.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(T,M,S)};function b(A,L){const x=e.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new fn(s.x,s.y,{format:Qn,type:bn})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(L,null,x,h,v,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(L,null,x,u,v,null)}function w(A,L,x,T){let M=null;const S=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)M=S;else if(M=x.isPointLight===!0?c:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const R=M.uuid,D=L.uuid;let G=l[R];G===void 0&&(G={},l[R]=G);let I=G[D];I===void 0&&(I=M.clone(),G[D]=I,L.addEventListener("dispose",P)),M=I}if(M.visible=L.visible,M.wireframe=L.wireframe,T===ki?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:p[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,x.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const R=i.properties.get(M);R.light=x}return M}function E(A,L,x,T,M){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ki)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const D=e.update(A),G=A.material;if(Array.isArray(G)){const I=D.groups;for(let V=0,B=I.length;V<B;V++){const Z=I[V],Q=G[Z.materialIndex];if(Q&&Q.visible){const ie=w(A,Q,T,M);A.onBeforeShadow(i,A,L,x,D,ie,Z),i.renderBufferDirect(x,null,D,ie,A,Z),A.onAfterShadow(i,A,L,x,D,ie,Z)}}}else if(G.visible){const I=w(A,G,T,M);A.onBeforeShadow(i,A,L,x,D,I,null),i.renderBufferDirect(x,null,D,I,A,null),A.onAfterShadow(i,A,L,x,D,I,null)}}const R=A.children;for(let D=0,G=R.length;D<G;D++)E(R[D],L,x,T,M)}function P(A){A.target.removeEventListener("dispose",P);for(const x in l){const T=l[x],M=A.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}function R0(i,e){function t(){let U=!1;const re=new rt;let $=null;const he=new rt(0,0,0,0);return{setMask:function(me){$!==me&&!U&&(i.colorMask(me,me,me,me),$=me)},setLocked:function(me){U=me},setClear:function(me,j,Ee,Me,ot){ot===!0&&(me*=Me,j*=Me,Ee*=Me),re.set(me,j,Ee,Me),he.equals(re)===!1&&(i.clearColor(me,j,Ee,Me),he.copy(re))},reset:function(){U=!1,$=null,he.set(-1,0,0,0)}}}function n(){let U=!1,re=!1,$=null,he=null,me=null;return{setReversed:function(j){if(re!==j){const Ee=e.get("EXT_clip_control");j?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),re=j;const Me=me;me=null,this.setClear(Me)}},getReversed:function(){return re},setTest:function(j){j?ee(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(j){$!==j&&!U&&(i.depthMask(j),$=j)},setFunc:function(j){if(re&&(j=th[j]),he!==j){switch(j){case Cr:i.depthFunc(i.NEVER);break;case Pr:i.depthFunc(i.ALWAYS);break;case Lr:i.depthFunc(i.LESS);break;case bi:i.depthFunc(i.LEQUAL);break;case Dr:i.depthFunc(i.EQUAL);break;case Ir:i.depthFunc(i.GEQUAL);break;case Ur:i.depthFunc(i.GREATER);break;case Nr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=j}},setLocked:function(j){U=j},setClear:function(j){me!==j&&(me=j,re&&(j=1-j),i.clearDepth(j))},reset:function(){U=!1,$=null,he=null,me=null,re=!1}}}function s(){let U=!1,re=null,$=null,he=null,me=null,j=null,Ee=null,Me=null,ot=null;return{setTest:function(nt){U||(nt?ee(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(nt){re!==nt&&!U&&(i.stencilMask(nt),re=nt)},setFunc:function(nt,tn,nn){($!==nt||he!==tn||me!==nn)&&(i.stencilFunc(nt,tn,nn),$=nt,he=tn,me=nn)},setOp:function(nt,tn,nn){(j!==nt||Ee!==tn||Me!==nn)&&(i.stencilOp(nt,tn,nn),j=nt,Ee=tn,Me=nn)},setLocked:function(nt){U=nt},setClear:function(nt){ot!==nt&&(i.clearStencil(nt),ot=nt)},reset:function(){U=!1,re=null,$=null,he=null,me=null,j=null,Ee=null,Me=null,ot=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let f={},p={},h={},u=new WeakMap,m=[],v=null,g=!1,d=null,b=null,w=null,E=null,P=null,A=null,L=null,x=new Fe(0,0,0),T=0,M=!1,S=null,R=null,D=null,G=null,I=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),B=Z>=1):Q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),B=Z>=2);let ie=null,ae={};const xe=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),st=new rt().fromArray(xe),We=new rt().fromArray(He);function q(U,re,$,he){const me=new Uint8Array(4),j=i.createTexture();i.bindTexture(U,j),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<$;Ee++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(re+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return j}const ne={};ne[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(bi),ut(!1),mt(so),ee(i.CULL_FACE),Ye(Sn);function ee(U){f[U]!==!0&&(i.enable(U),f[U]=!0)}function Te(U){f[U]!==!1&&(i.disable(U),f[U]=!1)}function Re(U,re){return h[U]!==re?(i.bindFramebuffer(U,re),h[U]=re,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=re),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Ce(U,re){let $=m,he=!1;if(U){$=u.get(re),$===void 0&&($=[],u.set(re,$));const me=U.textures;if($.length!==me.length||$[0]!==i.COLOR_ATTACHMENT0){for(let j=0,Ee=me.length;j<Ee;j++)$[j]=i.COLOR_ATTACHMENT0+j;$.length=me.length,he=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,he=!0);he&&i.drawBuffers($)}function ct(U){return v!==U?(i.useProgram(U),v=U,!0):!1}const ze={[Yn]:i.FUNC_ADD,[yc]:i.FUNC_SUBTRACT,[Tc]:i.FUNC_REVERSE_SUBTRACT};ze[Ac]=i.MIN,ze[wc]=i.MAX;const Qe={[Rc]:i.ZERO,[Cc]:i.ONE,[Pc]:i.SRC_COLOR,[wr]:i.SRC_ALPHA,[Fc]:i.SRC_ALPHA_SATURATE,[Uc]:i.DST_COLOR,[Dc]:i.DST_ALPHA,[Lc]:i.ONE_MINUS_SRC_COLOR,[Rr]:i.ONE_MINUS_SRC_ALPHA,[Nc]:i.ONE_MINUS_DST_COLOR,[Ic]:i.ONE_MINUS_DST_ALPHA,[Oc]:i.CONSTANT_COLOR,[Bc]:i.ONE_MINUS_CONSTANT_COLOR,[zc]:i.CONSTANT_ALPHA,[Gc]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(U,re,$,he,me,j,Ee,Me,ot,nt){if(U===Sn){g===!0&&(Te(i.BLEND),g=!1);return}if(g===!1&&(ee(i.BLEND),g=!0),U!==bc){if(U!==d||nt!==M){if((b!==Yn||P!==Yn)&&(i.blendEquation(i.FUNC_ADD),b=Yn,P=Yn),nt)switch(U){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ps:i.blendFunc(i.ONE,i.ONE);break;case ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ao:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",U);break}else switch(U){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ro:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ao:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",U);break}w=null,E=null,A=null,L=null,x.set(0,0,0),T=0,d=U,M=nt}return}me=me||re,j=j||$,Ee=Ee||he,(re!==b||me!==P)&&(i.blendEquationSeparate(ze[re],ze[me]),b=re,P=me),($!==w||he!==E||j!==A||Ee!==L)&&(i.blendFuncSeparate(Qe[$],Qe[he],Qe[j],Qe[Ee]),w=$,E=he,A=j,L=Ee),(Me.equals(x)===!1||ot!==T)&&(i.blendColor(Me.r,Me.g,Me.b,ot),x.copy(Me),T=ot),d=U,M=!1}function Xe(U,re){U.side===vn?Te(i.CULL_FACE):ee(i.CULL_FACE);let $=U.side===It;re&&($=!$),ut($),U.blending===Mi&&U.transparent===!1?Ye(Sn):Ye(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const he=U.stencilWrite;o.setTest(he),he&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),St(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function mt(U){U!==Mc?(ee(i.CULL_FACE),U!==R&&(U===so?i.cullFace(i.BACK):U===Sc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),R=U}function vt(U){U!==D&&(B&&i.lineWidth(U),D=U)}function St(U,re,$){U?(ee(i.POLYGON_OFFSET_FILL),(G!==re||I!==$)&&(G=re,I=$,a.getReversed()&&(re=-re),i.polygonOffset(re,$))):Te(i.POLYGON_OFFSET_FILL)}function at(U){U?ee(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function dt(U){U===void 0&&(U=i.TEXTURE0+V-1),ie!==U&&(i.activeTexture(U),ie=U)}function N(U,re,$){$===void 0&&(ie===null?$=i.TEXTURE0+V-1:$=ie);let he=ae[$];he===void 0&&(he={type:void 0,texture:void 0},ae[$]=he),(he.type!==U||he.texture!==re)&&(ie!==$&&(i.activeTexture($),ie=$),i.bindTexture(U,re||ne[U]),he.type=U,he.texture=re)}function Pt(){const U=ae[ie];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ke(){try{i.compressedTexImage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function _(){try{i.texSubImage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function z(){try{i.texSubImage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function se(){try{i.texStorage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function oe(){try{i.texStorage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function K(){try{i.texImage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function J(){try{i.texImage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function le(U){return p[U]!==void 0?p[U]:i.getParameter(U)}function be(U,re){p[U]!==re&&(i.pixelStorei(U,re),p[U]=re)}function fe(U){st.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),st.copy(U))}function ce(U){We.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),We.copy(U))}function we(U,re){let $=l.get(re);$===void 0&&($=new WeakMap,l.set(re,$));let he=$.get(U);he===void 0&&(he=i.getUniformBlockIndex(re,U.name),$.set(U,he))}function Pe(U,re){const he=l.get(re).get(U);c.get(re)!==he&&(i.uniformBlockBinding(re,he,U.__bindingPointIndex),c.set(re,he))}function Ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},p={},ie=null,ae={},h={},u=new WeakMap,m=[],v=null,g=!1,d=null,b=null,w=null,E=null,P=null,A=null,L=null,x=new Fe(0,0,0),T=0,M=!1,S=null,R=null,D=null,G=null,I=null,st.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:Te,bindFramebuffer:Re,drawBuffers:Ce,useProgram:ct,setBlending:Ye,setMaterial:Xe,setFlipSided:ut,setCullFace:mt,setLineWidth:vt,setPolygonOffset:St,setScissorTest:at,activeTexture:dt,bindTexture:N,unbindTexture:Pt,compressedTexImage2D:Ke,compressedTexImage3D:C,texImage2D:K,texImage3D:J,pixelStorei:be,getParameter:le,updateUBOMapping:we,uniformBlockBinding:Pe,texStorage2D:se,texStorage3D:oe,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:Y,scissor:fe,viewport:ce,reset:Ie}}function C0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,f=new WeakMap,p=new Set;let h;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,_){return m?new OffscreenCanvas(C,_):Ns("canvas")}function g(C,_,z){let W=1;const Y=Ke(C);if((Y.width>z||Y.height>z)&&(W=z/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const se=Math.floor(W*Y.width),oe=Math.floor(W*Y.height);h===void 0&&(h=v(se,oe));const K=_?v(se,oe):h;return K.width=se,K.height=oe,K.getContext("2d").drawImage(C,0,0,se,oe),Le("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+se+"x"+oe+")."),K}else return"data"in C&&Le("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function d(C){return C.generateMipmaps}function b(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,_,z,W,Y,se=!1){if(C!==null){if(i[C]!==void 0)return i[C];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe;W&&(oe=e.get("EXT_texture_norm16"),oe||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8),z===i.UNSIGNED_SHORT&&oe&&(K=oe.R16_EXT),z===i.SHORT&&oe&&(K=oe.R16_SNORM_EXT)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),_===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8),z===i.UNSIGNED_SHORT&&oe&&(K=oe.RG16_EXT),z===i.SHORT&&oe&&(K=oe.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_SHORT&&oe&&(K=oe.RGB16_EXT),z===i.SHORT&&oe&&(K=oe.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){const J=se?Us:Ge.getTransfer(Y);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=J===Ze?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&oe&&(K=oe.RGBA16_EXT),z===i.SHORT&&oe&&(K=oe.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function P(C,_){let z;return C?_===null||_===un||_===Xi?z=i.DEPTH24_STENCIL8:_===Qt?z=i.DEPTH32F_STENCIL8:_===Wi&&(z=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===un||_===Xi?z=i.DEPTH_COMPONENT24:_===Qt?z=i.DEPTH_COMPONENT32F:_===Wi&&(z=i.DEPTH_COMPONENT16),z}function A(C,_){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==Et&&C.minFilter!==wt?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function L(C){const _=C.target;_.removeEventListener("dispose",L),T(_),_.isVideoTexture&&f.delete(_),_.isHTMLTexture&&p.delete(_)}function x(C){const _=C.target;_.removeEventListener("dispose",x),S(_)}function T(C){const _=n.get(C);if(_.__webglInit===void 0)return;const z=C.source,W=u.get(z);if(W){const Y=W[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&M(C),Object.keys(W).length===0&&u.delete(z)}n.remove(C)}function M(C){const _=n.get(C);i.deleteTexture(_.__webglTexture);const z=C.source,W=u.get(z);delete W[_.__cacheKey],a.memory.textures--}function S(C){const _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let Y=0;Y<_.__webglFramebuffer[W].length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[W][Y]);else i.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)i.deleteFramebuffer(_.__webglFramebuffer[W]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=C.textures;for(let W=0,Y=z.length;W<Y;W++){const se=n.get(z[W]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(z[W])}n.remove(C)}let R=0;function D(){R=0}function G(){return R}function I(C){R=C}function V(){const C=R;return C>=s.maxTextures&&Le("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),R+=1,C}function B(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function Z(C,_){const z=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const W=C.image;if(W===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(z,C,_);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function Q(C,_){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Te(z,C,_);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function ie(C,_){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Te(z,C,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function ae(C,_){const z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Re(z,C,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}const xe={[Fr]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[Or]:i.MIRRORED_REPEAT},He={[Et]:i.NEAREST,[Vc]:i.NEAREST_MIPMAP_NEAREST,[Qi]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[Ks]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},st={[qc]:i.NEVER,[Jc]:i.ALWAYS,[Yc]:i.LESS,[Pa]:i.LEQUAL,[Kc]:i.EQUAL,[La]:i.GEQUAL,[Zc]:i.GREATER,[$c]:i.NOTEQUAL};function We(C,_){if(_.type===Qt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===wt||_.magFilter===Ks||_.magFilter===Qi||_.magFilter===Zn||_.minFilter===wt||_.minFilter===Ks||_.minFilter===Qi||_.minFilter===Zn)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,xe[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,xe[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,xe[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,He[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,He[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,st[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Et||_.minFilter!==Qi&&_.minFilter!==Zn||_.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function q(C,_){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",L));const W=_.source;let Y=u.get(W);Y===void 0&&(Y={},u.set(W,Y));const se=B(_);if(se!==C.__cacheKey){Y[se]===void 0&&(Y[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Y[se].usedTimes++;const oe=Y[C.__cacheKey];oe!==void 0&&(Y[C.__cacheKey].usedTimes--,oe.usedTimes===0&&M(_)),C.__cacheKey=se,C.__webglTexture=Y[se].texture}return z}function ne(C,_,z){return Math.floor(Math.floor(C/z)/_)}function ee(C,_,z,W){const se=C.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,W,_.data);else{se.sort((be,fe)=>be.start-fe.start);let oe=0;for(let be=1;be<se.length;be++){const fe=se[oe],ce=se[be],we=fe.start+fe.count,Pe=ne(ce.start,_.width,4),Ie=ne(fe.start,_.width,4);ce.start<=we+1&&Pe===Ie&&ne(ce.start+ce.count-1,_.width,4)===Pe?fe.count=Math.max(fe.count,ce.start+ce.count-fe.start):(++oe,se[oe]=ce)}se.length=oe+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let be=0,fe=se.length;be<fe;be++){const ce=se[be],we=Math.floor(ce.start/4),Pe=Math.ceil(ce.count/4),Ie=we%_.width,U=Math.floor(we/_.width),re=Pe,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ie,U,re,$,z,W,_.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function Te(C,_,z){let W=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=i.TEXTURE_3D);const Y=q(C,_),se=_.source;t.bindTexture(W,C.__webglTexture,i.TEXTURE0+z);const oe=n.get(se);if(se.version!==oe.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const $=Ge.getPrimaries(Ge.workingColorSpace),he=_.colorSpace===Nn?null:Ge.getPrimaries(_.colorSpace),me=_.colorSpace===Nn||$===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let J=g(_.image,!1,s.maxTextureSize);J=Pt(_,J);const le=r.convert(_.format,_.colorSpace),be=r.convert(_.type);let fe=E(_.internalFormat,le,be,_.normalized,_.colorSpace,_.isVideoTexture);We(W,_);let ce;const we=_.mipmaps,Pe=_.isVideoTexture!==!0,Ie=oe.__version===void 0||Y===!0,U=se.dataReady,re=A(_,J);if(_.isDepthTexture)fe=P(_.format===$n,_.type),Ie&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,fe,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,fe,J.width,J.height,0,le,be,null));else if(_.isDataTexture)if(we.length>0){Pe&&Ie&&t.texStorage2D(i.TEXTURE_2D,re,fe,we[0].width,we[0].height);for(let $=0,he=we.length;$<he;$++)ce=we[$],Pe?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ce.width,ce.height,le,be,ce.data):t.texImage2D(i.TEXTURE_2D,$,fe,ce.width,ce.height,0,le,be,ce.data);_.generateMipmaps=!1}else Pe?(Ie&&t.texStorage2D(i.TEXTURE_2D,re,fe,J.width,J.height),U&&ee(_,J,le,be)):t.texImage2D(i.TEXTURE_2D,0,fe,J.width,J.height,0,le,be,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Pe&&Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,fe,we[0].width,we[0].height,J.depth);for(let $=0,he=we.length;$<he;$++)if(ce=we[$],_.format!==jt)if(le!==null)if(Pe){if(U)if(_.layerUpdates.size>0){const me=Vo(ce.width,ce.height,_.format,_.type);for(const j of _.layerUpdates){const Ee=ce.data.subarray(j*me/ce.data.BYTES_PER_ELEMENT,(j+1)*me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,j,ce.width,ce.height,1,le,Ee)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ce.width,ce.height,J.depth,le,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,fe,ce.width,ce.height,J.depth,0,ce.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ce.width,ce.height,J.depth,le,be,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,fe,ce.width,ce.height,J.depth,0,le,be,ce.data)}else{Pe&&Ie&&t.texStorage2D(i.TEXTURE_2D,re,fe,we[0].width,we[0].height);for(let $=0,he=we.length;$<he;$++)ce=we[$],_.format!==jt?le!==null?Pe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,$,fe,ce.width,ce.height,0,ce.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ce.width,ce.height,le,be,ce.data):t.texImage2D(i.TEXTURE_2D,$,fe,ce.width,ce.height,0,le,be,ce.data)}else if(_.isDataArrayTexture)if(Pe){if(Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,fe,J.width,J.height,J.depth),U)if(_.layerUpdates.size>0){const $=Vo(J.width,J.height,_.format,_.type);for(const he of _.layerUpdates){const me=J.data.subarray(he*$/J.data.BYTES_PER_ELEMENT,(he+1)*$/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,J.width,J.height,1,le,be,me)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,le,be,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,J.width,J.height,J.depth,0,le,be,J.data);else if(_.isData3DTexture)Pe?(Ie&&t.texStorage3D(i.TEXTURE_3D,re,fe,J.width,J.height,J.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,le,be,J.data)):t.texImage3D(i.TEXTURE_3D,0,fe,J.width,J.height,J.depth,0,le,be,J.data);else if(_.isFramebufferTexture){if(Ie)if(Pe)t.texStorage2D(i.TEXTURE_2D,re,fe,J.width,J.height);else{let $=J.width,he=J.height;for(let me=0;me<re;me++)t.texImage2D(i.TEXTURE_2D,me,fe,$,he,0,le,be,null),$>>=1,he>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),J.parentNode!==$){$.appendChild(J),p.add(_),$.onpaint=he=>{const me=he.changedElements;for(const j of p)me.includes(j.image)&&(j.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const me=i.RGBA,j=i.RGBA,Ee=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,j,Ee,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(we.length>0){if(Pe&&Ie){const $=Ke(we[0]);t.texStorage2D(i.TEXTURE_2D,re,fe,$.width,$.height)}for(let $=0,he=we.length;$<he;$++)ce=we[$],Pe?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,le,be,ce):t.texImage2D(i.TEXTURE_2D,$,fe,le,be,ce);_.generateMipmaps=!1}else if(Pe){if(Ie){const $=Ke(J);t.texStorage2D(i.TEXTURE_2D,re,fe,$.width,$.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,be,J)}else t.texImage2D(i.TEXTURE_2D,0,fe,le,be,J);d(_)&&b(W),oe.__version=se.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Re(C,_,z){if(_.image.length!==6)return;const W=q(C,_),Y=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);const se=n.get(Y);if(Y.version!==se.__version||W===!0){t.activeTexture(i.TEXTURE0+z);const oe=Ge.getPrimaries(Ge.workingColorSpace),K=_.colorSpace===Nn?null:Ge.getPrimaries(_.colorSpace),J=_.colorSpace===Nn||oe===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const le=_.isCompressedTexture||_.image[0].isCompressedTexture,be=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let j=0;j<6;j++)!le&&!be?fe[j]=g(_.image[j],!0,s.maxCubemapSize):fe[j]=be?_.image[j].image:_.image[j],fe[j]=Pt(_,fe[j]);const ce=fe[0],we=r.convert(_.format,_.colorSpace),Pe=r.convert(_.type),Ie=E(_.internalFormat,we,Pe,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,re=se.__version===void 0||W===!0,$=Y.dataReady;let he=A(_,ce);We(i.TEXTURE_CUBE_MAP,_);let me;if(le){U&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ie,ce.width,ce.height);for(let j=0;j<6;j++){me=fe[j].mipmaps;for(let Ee=0;Ee<me.length;Ee++){const Me=me[Ee];_.format!==jt?we!==null?U?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ee,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ee,Ie,Me.width,Me.height,0,Me.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ee,0,0,Me.width,Me.height,we,Pe,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ee,Ie,Me.width,Me.height,0,we,Pe,Me.data)}}}else{if(me=_.mipmaps,U&&re){me.length>0&&he++;const j=Ke(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ie,j.width,j.height)}for(let j=0;j<6;j++)if(be){U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,fe[j].width,fe[j].height,we,Pe,fe[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ie,fe[j].width,fe[j].height,0,we,Pe,fe[j].data);for(let Ee=0;Ee<me.length;Ee++){const ot=me[Ee].image[j].image;U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ee+1,0,0,ot.width,ot.height,we,Pe,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ee+1,Ie,ot.width,ot.height,0,we,Pe,ot.data)}}else{U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,Pe,fe[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ie,we,Pe,fe[j]);for(let Ee=0;Ee<me.length;Ee++){const Me=me[Ee];U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ee+1,0,0,we,Pe,Me.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ee+1,Ie,we,Pe,Me.image[j])}}}d(_)&&b(i.TEXTURE_CUBE_MAP),se.__version=Y.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Ce(C,_,z,W,Y,se){const oe=r.convert(z.format,z.colorSpace),K=r.convert(z.type),J=E(z.internalFormat,oe,K,z.normalized,z.colorSpace),le=n.get(_),be=n.get(z);if(be.__renderTarget=_,!le.__hasExternalTextures){const fe=Math.max(1,_.width>>se),ce=Math.max(1,_.height>>se);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,se,J,fe,ce,_.depth,0,oe,K,null):t.texImage2D(Y,se,J,fe,ce,0,oe,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),dt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Y,be.__webglTexture,0,at(_)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Y,be.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(C,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){const W=_.depthTexture,Y=W&&W.isDepthTexture?W.type:null,se=P(_.stencilBuffer,Y),oe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(_),se,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(_),se,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,se,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,C)}else{const W=_.textures;for(let Y=0;Y<W.length;Y++){const se=W[Y],oe=r.convert(se.format,se.colorSpace),K=r.convert(se.type),J=E(se.internalFormat,oe,K,se.normalized,se.colorSpace);dt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(_),J,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(_),J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(C,_,z){const W=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=n.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",L)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),We(i.TEXTURE_CUBE_MAP,_.depthTexture);const le=r.convert(_.depthTexture.format),be=r.convert(_.depthTexture.type);let fe;_.depthTexture.format===yn?fe=i.DEPTH_COMPONENT24:_.depthTexture.format===$n&&(fe=i.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,fe,_.width,_.height,0,le,be,null)}}else Z(_.depthTexture,0);const se=Y.__webglTexture,oe=at(_),K=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,J=_.depthTexture.format===$n?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===yn)dt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,K,se,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,J,K,se,0);else if(_.depthTexture.format===$n)dt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,K,se,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,J,K,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(C){const _=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const W=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=W}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)ze(_.__webglFramebuffer[W],C,W);else{const W=C.texture.mipmaps;W&&W.length>0?ze(_.__webglFramebuffer[0],C,0):ze(_.__webglFramebuffer,C,0)}else if(z){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=i.createRenderbuffer(),ct(_.__webglDepthbuffer[W],C,!1);else{const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,se)}}else{const W=C.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ct(_.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(C,_,z){const W=n.get(C);_!==void 0&&Ce(W.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Qe(C)}function Xe(C){const _=C.texture,z=n.get(C),W=n.get(_);C.addEventListener("dispose",x);const Y=C.textures,se=C.isWebGLCubeRenderTarget===!0,oe=Y.length>1;if(oe||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=_.version,a.memory.textures++),se){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let J=0;J<_.mipmaps.length;J++)z.__webglFramebuffer[K][J]=i.createFramebuffer()}else z.__webglFramebuffer[K]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)z.__webglFramebuffer[K]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(oe)for(let K=0,J=Y.length;K<J;K++){const le=n.get(Y[K]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&dt(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){const J=Y[K];z.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[K]);const le=r.convert(J.format,J.colorSpace),be=r.convert(J.type),fe=E(J.internalFormat,le,be,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),ce=at(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,fe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,z.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),We(i.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Ce(z.__webglFramebuffer[K][J],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else Ce(z.__webglFramebuffer[K],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);d(_)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let K=0,J=Y.length;K<J;K++){const le=Y[K],be=n.get(le);let fe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,be.__webglTexture),We(fe,le),Ce(z.__webglFramebuffer,C,le,i.COLOR_ATTACHMENT0+K,fe,0),d(le)&&b(fe)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,W.__webglTexture),We(K,_),_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Ce(z.__webglFramebuffer[J],C,_,i.COLOR_ATTACHMENT0,K,J);else Ce(z.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,K,0);d(_)&&b(K),t.unbindTexture()}C.depthBuffer&&Qe(C)}function ut(C){const _=C.textures;for(let z=0,W=_.length;z<W;z++){const Y=_[z];if(d(Y)){const se=w(C),oe=n.get(Y).__webglTexture;t.bindTexture(se,oe),b(se),t.unbindTexture()}}}const mt=[],vt=[];function St(C){if(C.samples>0){if(dt(C)===!1){const _=C.textures,z=C.width,W=C.height;let Y=i.COLOR_BUFFER_BIT;const se=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(C),K=_.length>1;if(K)for(let le=0;le<_.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const J=C.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<_.length;le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const be=n.get(_[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,z,W,0,0,z,W,Y,i.NEAREST),c===!0&&(mt.length=0,vt.length=0,mt.push(i.COLOR_ATTACHMENT0+le),C.depthBuffer&&C.resolveDepthBuffer===!1&&(mt.push(se),vt.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let le=0;le<_.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const be=n.get(_[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function at(C){return Math.min(s.maxSamples,C.samples)}function dt(C){const _=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(C){const _=a.render.frame;f.get(C)!==_&&(f.set(C,_),C.update())}function Pt(C,_){const z=C.colorSpace,W=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Is&&z!==Nn&&(Ge.getTransfer(z)===Ze?(W!==jt||Y!==zt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",z)),_}function Ke(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=D,this.getTextureUnits=G,this.setTextureUnits=I,this.setTexture2D=Z,this.setTexture2DArray=Q,this.setTexture3D=ie,this.setTextureCube=ae,this.rebindTextures=Ye,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function P0(i,e){function t(n,s=Nn){let r;const a=Ge.getTransfer(s);if(n===zt)return i.UNSIGNED_BYTE;if(n===ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ta)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tl)return i.BYTE;if(n===Al)return i.SHORT;if(n===Wi)return i.UNSIGNED_SHORT;if(n===ba)return i.INT;if(n===un)return i.UNSIGNED_INT;if(n===Qt)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===Cl)return i.ALPHA;if(n===Pl)return i.RGB;if(n===jt)return i.RGBA;if(n===yn)return i.DEPTH_COMPONENT;if(n===$n)return i.DEPTH_STENCIL;if(n===Aa)return i.RED;if(n===wa)return i.RED_INTEGER;if(n===Qn)return i.RG;if(n===Ra)return i.RG_INTEGER;if(n===Ca)return i.RGBA_INTEGER;if(n===Ts||n===As||n===ws||n===Rs)if(a===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ts)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ts)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Br||n===zr||n===Gr||n===kr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hr||n===Vr||n===Wr||n===Xr||n===qr||n===Ls||n===Yr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hr||n===Vr)return a===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xr)return r.COMPRESSED_R11_EAC;if(n===qr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ls)return r.COMPRESSED_RG11_EAC;if(n===Yr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kr||n===Zr||n===$r||n===Jr||n===Qr||n===jr||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$r)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ea)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===la||n===ca||n===ha)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===la)return a===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fa||n===ua||n===Ds||n===da)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ds)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const L0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D0=`
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

}`;class I0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new zl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new dn({vertexShader:L0,fragmentShader:D0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U0 extends jn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,f=null,p=null,h=null,u=null,m=null;const v=typeof XRWebGLBinding<"u",g=new I0,d={},b=t.getContextAttributes();let w=null,E=null;const P=[],A=[],L=new Be;let x=null;const T=new Bt;T.viewport=new rt;const M=new Bt;M.viewport=new rt;const S=[T,M],R=new Hh;let D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=P[q];return ne===void 0&&(ne=new nr,P[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=P[q];return ne===void 0&&(ne=new nr,P[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=P[q];return ne===void 0&&(ne=new nr,P[q]=ne),ne.getHandSpace()};function I(q){const ne=A.indexOf(q.inputSource);if(ne===-1)return;const ee=P[ne];ee!==void 0&&(ee.update(q.inputSource,q.frame,l||a),ee.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",B);for(let q=0;q<P.length;q++){const ne=A[q];ne!==null&&(A[q]=null,P[q].disconnect(ne))}D=null,G=null,g.reset();for(const q in d)delete d[q];e.setRenderTarget(w),u=null,h=null,p=null,s=null,E=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",V),s.addEventListener("inputsourceschange",B),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Te=null,Re=null;b.depth&&(Re=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=b.stencil?$n:yn,Te=b.stencil?Xi:un);const Ce={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(Ce),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new fn(h.textureWidth,h.textureHeight,{format:jt,type:zt,depthTexture:new Ti(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ee={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),E=new fn(u.framebufferWidth,u.framebufferHeight,{format:jt,type:zt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(q){for(let ne=0;ne<q.removed.length;ne++){const ee=q.removed[ne],Te=A.indexOf(ee);Te>=0&&(A[Te]=null,P[Te].disconnect(ee))}for(let ne=0;ne<q.added.length;ne++){const ee=q.added[ne];let Te=A.indexOf(ee);if(Te===-1){for(let Ce=0;Ce<P.length;Ce++)if(Ce>=A.length){A.push(ee),Te=Ce;break}else if(A[Ce]===null){A[Ce]=ee,Te=Ce;break}if(Te===-1)break}const Re=P[Te];Re&&Re.connect(ee)}}const Z=new O,Q=new O;function ie(q,ne,ee){Z.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(ee.matrixWorld);const Te=Z.distanceTo(Q),Re=ne.projectionMatrix.elements,Ce=ee.projectionMatrix.elements,ct=Re[14]/(Re[10]-1),ze=Re[14]/(Re[10]+1),Qe=(Re[9]+1)/Re[5],Ye=(Re[9]-1)/Re[5],Xe=(Re[8]-1)/Re[0],ut=(Ce[8]+1)/Ce[0],mt=ct*Xe,vt=ct*ut,St=Te/(-Xe+ut),at=St*-Xe;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(at),q.translateZ(St),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Re[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const dt=ct+St,N=ze+St,Pt=mt-at,Ke=vt+(Te-at),C=Qe*ze/N*dt,_=Ye*ze/N*dt;q.projectionMatrix.makePerspective(Pt,Ke,C,_,dt,N),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ae(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ne=q.near,ee=q.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(ee=g.depthFar)),R.near=M.near=T.near=ne,R.far=M.far=T.far=ee,(D!==R.near||G!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),D=R.near,G=R.far),R.layers.mask=q.layers.mask|6,T.layers.mask=R.layers.mask&-5,M.layers.mask=R.layers.mask&-3;const Te=q.parent,Re=R.cameras;ae(R,Te);for(let Ce=0;Ce<Re.length;Ce++)ae(Re[Ce],Te);Re.length===2?ie(R,T,M):R.projectionMatrix.copy(T.projectionMatrix),xe(q,R,Te)};function xe(q,ne,ee){ee===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(ee.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ma*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&u===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(R)},this.getCameraTexture=function(q){return d[q]};let He=null;function st(q,ne){if(f=ne.getViewerPose(l||a),m=ne,f!==null){const ee=f.views;u!==null&&(e.setRenderTargetFramebuffer(E,u.framebuffer),e.setRenderTarget(E));let Te=!1;ee.length!==R.cameras.length&&(R.cameras.length=0,Te=!0);for(let ze=0;ze<ee.length;ze++){const Qe=ee[ze];let Ye=null;if(u!==null)Ye=u.getViewport(Qe);else{const ut=p.getViewSubImage(h,Qe);Ye=ut.viewport,ze===0&&(e.setRenderTargetTextures(E,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(E))}let Xe=S[ze];Xe===void 0&&(Xe=new Bt,Xe.layers.enable(ze),Xe.viewport=new rt,S[ze]=Xe),Xe.matrix.fromArray(Qe.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Qe.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ze===0&&(R.matrix.copy(Xe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Te===!0&&R.cameras.push(Xe)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){p=n.getBinding();const ze=p.getDepthInformation(ee[0]);ze&&ze.isValid&&ze.texture&&g.init(ze,s.renderState)}if(Re&&Re.includes("camera-access")&&v){e.state.unbindTexture(),p=n.getBinding();for(let ze=0;ze<ee.length;ze++){const Qe=ee[ze].camera;if(Qe){let Ye=d[Qe];Ye||(Ye=new zl,d[Qe]=Ye);const Xe=p.getCameraImage(Qe);Ye.sourceTexture=Xe}}}}for(let ee=0;ee<P.length;ee++){const Te=A[ee],Re=P[ee];Te!==null&&Re!==void 0&&Re.update(Te,ne,l||a)}He&&He(q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}const We=new Vl;We.setAnimationLoop(st),this.setAnimationLoop=function(q){He=q},this.dispose=function(){}}}const N0=new Je,$l=new De;$l.set(-1,0,0,0,1,0,0,0,1);function F0(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Gl(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,b,w,E){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(g,d):d.isMeshLambertMaterial?(r(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(g,d),p(g,d)):d.isMeshPhongMaterial?(r(g,d),f(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(g,d),h(g,d),d.isMeshPhysicalMaterial&&u(g,d,E)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),v(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?c(g,d,b,w):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===It&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===It&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const b=e.get(d),w=b.envMap,E=b.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(N0.makeRotationFromEuler(E)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply($l),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,b,w){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*b,g.scale.value=w*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function u(g,d,b){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===It&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){const b=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function O0(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,P){const A=P.program;n.uniformBlockBinding(E,A)}function l(E,P){let A=s[E.id];A===void 0&&(g(E),A=f(E),s[E.id]=A,E.addEventListener("dispose",b));const L=P.program;n.updateUBOMapping(E,L);const x=e.render.frame;r[E.id]!==x&&(h(E),r[E.id]=x)}function f(E){const P=p();E.__bindingPointIndex=P;const A=i.createBuffer(),L=E.__size,x=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,L,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,A),A}function p(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const P=s[E.id],A=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let x=0,T=A.length;x<T;x++){const M=A[x];if(Array.isArray(M))for(let S=0,R=M.length;S<R;S++)u(M[S],x,S,L);else u(M,x,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(E,P,A,L){if(v(E,P,A,L)===!0){const x=E.__offset,T=E.value;if(Array.isArray(T)){let M=0;for(let S=0;S<T.length;S++){const R=T[S],D=d(R);m(R,E.__data,M),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(M+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,E.__data)}}function m(E,P,A){typeof E=="number"||typeof E=="boolean"?P[0]=E:E.isMatrix3?(P[0]=E.elements[0],P[1]=E.elements[1],P[2]=E.elements[2],P[3]=0,P[4]=E.elements[3],P[5]=E.elements[4],P[6]=E.elements[5],P[7]=0,P[8]=E.elements[6],P[9]=E.elements[7],P[10]=E.elements[8],P[11]=0):ArrayBuffer.isView(E)?P.set(new E.constructor(E.buffer,E.byteOffset,P.length)):E.toArray(P,A)}function v(E,P,A,L){const x=E.value,T=P+"_"+A;if(L[T]===void 0)return typeof x=="number"||typeof x=="boolean"?L[T]=x:ArrayBuffer.isView(x)?L[T]=x.slice():L[T]=x.clone(),!0;{const M=L[T];if(typeof x=="number"||typeof x=="boolean"){if(M!==x)return L[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(M.equals(x)===!1)return M.copy(x),!0}}return!1}function g(E){const P=E.uniforms;let A=0;const L=16;for(let T=0,M=P.length;T<M;T++){const S=Array.isArray(P[T])?P[T]:[P[T]];for(let R=0,D=S.length;R<D;R++){const G=S[R],I=Array.isArray(G.value)?G.value:[G.value];for(let V=0,B=I.length;V<B;V++){const Z=I[V],Q=d(Z),ie=A%L,ae=ie%Q.boundary,xe=ie+ae;A+=ae,xe!==0&&L-xe<Q.storage&&(A+=L-xe),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=A,A+=Q.storage}}}const x=A%L;return x>0&&(A+=L-x),E.__size=A,E.__cache={},this}function d(E){const P={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(P.boundary=4,P.storage=4):E.isVector2?(P.boundary=8,P.storage=8):E.isVector3||E.isColor?(P.boundary=16,P.storage=12):E.isVector4?(P.boundary=16,P.storage=16):E.isMatrix3?(P.boundary=48,P.storage=48):E.isMatrix4?(P.boundary=64,P.storage=64):E.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(P.boundary=16,P.storage=E.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",E),P}function b(E){const P=E.target;P.removeEventListener("dispose",b);const A=a.indexOf(P.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[P.id]),delete s[P.id],delete r[P.id]}function w(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:w}}const B0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let an=null;function z0(){return an===null&&(an=new Fl(B0,16,16,Qn,bn),an.name="DFG_LUT",an.minFilter=wt,an.magFilter=wt,an.wrapS=Mn,an.wrapT=Mn,an.generateMipmaps=!1,an.needsUpdate=!0),an}class G0{constructor(e={}){const{canvas:t=jc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:u=zt}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=u,g=new Set([Ca,Ra,wa]),d=new Set([zt,un,Wi,Xi,ya,Ta]),b=new Uint32Array(4),w=new Int32Array(4),E=new O;let P=null,A=null;const L=[],x=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let S=!1,R=null,D=null,G=null,I=null;this._outputColorSpace=qt;let V=0,B=0,Z=null,Q=-1,ie=null;const ae=new rt,xe=new rt;let He=null;const st=new Fe(0);let We=0,q=t.width,ne=t.height,ee=1,Te=null,Re=null;const Ce=new rt(0,0,q,ne),ct=new rt(0,0,q,ne);let ze=!1;const Qe=new Fa;let Ye=!1,Xe=!1;const ut=new Je,mt=new O,vt=new rt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function dt(){return Z===null?ee:1}let N=n;function Pt(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sa}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",tn,!1),N===null){const F="webgl2";if(N=Pt(F,y),N===null)throw Pt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw Ve("WebGLRenderer: "+y.message),y}let Ke,C,_,z,W,Y,se,oe,K,J,le,be,fe,ce,we,Pe,Ie,U,re,$,he,me,j;function Ee(){Ke=new zd(N),Ke.init(),he=new P0(N,Ke),C=new Ld(N,Ke,e,he),_=new R0(N,Ke),C.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),D=N.createFramebuffer(),G=N.createFramebuffer(),I=N.createFramebuffer(),z=new Hd(N),W=new p0,Y=new C0(N,Ke,_,W,C,he,z),se=new Bd(M),oe=new Xh(N),me=new Cd(N,oe),K=new Gd(N,oe,z,me),J=new Wd(N,K,oe,me,z),U=new Vd(N,C,Y),we=new Dd(W),le=new d0(M,se,Ke,C,me,we),be=new F0(M,W),fe=new g0,ce=new E0(Ke),Ie=new Rd(M,se,_,J,m,c),Pe=new w0(M,J,C),j=new O0(N,z,C,_),re=new Pd(N,Ke,z),$=new kd(N,Ke,z),z.programs=le.programs,M.capabilities=C,M.extensions=Ke,M.properties=W,M.renderLists=fe,M.shadowMap=Pe,M.state=_,M.info=z}Ee(),v!==zt&&(T=new qd(v,t.width,t.height,o,s,r));const Me=new U0(M,N);this.xr=Me,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=Ke.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ke.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(y){y!==void 0&&(ee=y,this.setSize(q,ne,!1))},this.getSize=function(y){return y.set(q,ne)},this.setSize=function(y,F,X=!0){if(Me.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,ne=F,t.width=Math.floor(y*ee),t.height=Math.floor(F*ee),X===!0&&(t.style.width=y+"px",t.style.height=F+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(q*ee,ne*ee).floor()},this.setDrawingBufferSize=function(y,F,X){q=y,ne=F,ee=X,t.width=Math.floor(y*X),t.height=Math.floor(F*X),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(v===zt){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ae)},this.getViewport=function(y){return y.copy(Ce)},this.setViewport=function(y,F,X,k){y.isVector4?Ce.set(y.x,y.y,y.z,y.w):Ce.set(y,F,X,k),_.viewport(ae.copy(Ce).multiplyScalar(ee).round())},this.getScissor=function(y){return y.copy(ct)},this.setScissor=function(y,F,X,k){y.isVector4?ct.set(y.x,y.y,y.z,y.w):ct.set(y,F,X,k),_.scissor(xe.copy(ct).multiplyScalar(ee).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(y){_.setScissorTest(ze=y)},this.setOpaqueSort=function(y){Te=y},this.setTransparentSort=function(y){Re=y},this.getClearColor=function(y){return y.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,X=!0){let k=0;if(y){let H=!1;if(Z!==null){const pe=Z.texture.format;H=g.has(pe)}if(H){const pe=Z.texture.type,_e=d.has(pe),de=Ie.getClearColor(),Se=Ie.getClearAlpha(),ye=de.r,Ue=de.g,Oe=de.b;_e?(b[0]=ye,b[1]=Ue,b[2]=Oe,b[3]=Se,N.clearBufferuiv(N.COLOR,0,b)):(w[0]=ye,w[1]=Ue,w[2]=Oe,w[3]=Se,N.clearBufferiv(N.COLOR,0,w))}else k|=N.COLOR_BUFFER_BIT}F&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),R=y},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",tn,!1),Ie.dispose(),fe.dispose(),ce.dispose(),W.dispose(),se.dispose(),J.dispose(),me.dispose(),j.dispose(),le.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",$a),Me.removeEventListener("sessionend",Ja),Gn.stop()};function ot(y){y.preventDefault(),fo("WebGLRenderer: Context Lost."),S=!0}function nt(){fo("WebGLRenderer: Context Restored."),S=!1;const y=z.autoReset,F=Pe.enabled,X=Pe.autoUpdate,k=Pe.needsUpdate,H=Pe.type;Ee(),z.autoReset=y,Pe.enabled=F,Pe.autoUpdate=X,Pe.needsUpdate=k,Pe.type=H}function tn(y){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function nn(y){const F=y.target;F.removeEventListener("dispose",nn),hc(F)}function hc(y){fc(y),W.remove(y)}function fc(y){const F=W.get(y).programs;F!==void 0&&(F.forEach(function(X){le.releaseProgram(X)}),y.isShaderMaterial&&le.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,X,k,H,pe){F===null&&(F=St);const _e=H.isMesh&&H.matrixWorld.determinantAffine()<0,de=pc(y,F,X,k,H);_.setMaterial(k,_e);let Se=X.index,ye=1;if(k.wireframe===!0){if(Se=K.getWireframeAttribute(X),Se===void 0)return;ye=2}const Ue=X.drawRange,Oe=X.attributes.position;let Ae=Ue.start*ye,$e=(Ue.start+Ue.count)*ye;pe!==null&&(Ae=Math.max(Ae,pe.start*ye),$e=Math.min($e,(pe.start+pe.count)*ye)),Se!==null?(Ae=Math.max(Ae,0),$e=Math.min($e,Se.count)):Oe!=null&&(Ae=Math.max(Ae,0),$e=Math.min($e,Oe.count));const ht=$e-Ae;if(ht<0||ht===1/0)return;me.setup(H,k,de,X,Se);let lt,je=re;if(Se!==null&&(lt=oe.get(Se),je=$,je.setIndex(lt)),H.isMesh)k.wireframe===!0?(_.setLineWidth(k.wireframeLinewidth*dt()),je.setMode(N.LINES)):je.setMode(N.TRIANGLES);else if(H.isLine){let yt=k.linewidth;yt===void 0&&(yt=1),_.setLineWidth(yt*dt()),H.isLineSegments?je.setMode(N.LINES):H.isLineLoop?je.setMode(N.LINE_LOOP):je.setMode(N.LINE_STRIP)}else H.isPoints?je.setMode(N.POINTS):H.isSprite&&je.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))je.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const yt=H._multiDrawStarts,ge=H._multiDrawCounts,Ut=H._multiDrawCount,qe=Se?oe.get(Se).bytesPerElement:1,Ht=W.get(k).currentProgram.getUniforms();for(let sn=0;sn<Ut;sn++)Ht.setValue(N,"_gl_DrawID",sn),je.render(yt[sn]/qe,ge[sn])}else if(H.isInstancedMesh)je.renderInstances(Ae,ht,H.count);else if(X.isInstancedBufferGeometry){const yt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ge=Math.min(X.instanceCount,yt);je.renderInstances(Ae,ht,ge)}else je.render(Ae,ht)};function Za(y,F,X){y.transparent===!0&&y.side===vn&&y.forceSinglePass===!1?(y.side=It,y.needsUpdate=!0,Ji(y,F,X),y.side=On,y.needsUpdate=!0,Ji(y,F,X),y.side=vn):Ji(y,F,X)}this.compile=function(y,F,X=null){X===null&&(X=y),A=ce.get(X),A.init(F),x.push(A),X.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),y!==X&&y.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),A.setupLights();const k=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const pe=H.material;if(pe)if(Array.isArray(pe))for(let _e=0;_e<pe.length;_e++){const de=pe[_e];Za(de,X,H),k.add(de)}else Za(pe,X,H),k.add(pe)}),A=x.pop(),k},this.compileAsync=function(y,F,X=null){const k=this.compile(y,F,X);return new Promise(H=>{function pe(){if(k.forEach(function(_e){W.get(_e).currentProgram.isReady()&&k.delete(_e)}),k.size===0){H(y);return}setTimeout(pe,10)}Ke.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Ws=null;function uc(y){Ws&&Ws(y)}function $a(){Gn.stop()}function Ja(){Gn.start()}const Gn=new Vl;Gn.setAnimationLoop(uc),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(y){Ws=y,Me.setAnimationLoop(y),y===null?Gn.stop():Gn.start()},Me.addEventListener("sessionstart",$a),Me.addEventListener("sessionend",Ja),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;R!==null&&R.renderStart(y,F);const X=Me.enabled===!0&&Me.isPresenting===!0,k=T!==null&&(Z===null||X)&&T.begin(M,Z);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(F),F=Me.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,F,Z),A=ce.get(y,x.length),A.init(F),A.state.textureUnits=Y.getTextureUnits(),x.push(A),ut.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Qe.setFromProjectionMatrix(ut,cn,F.reversedDepth),Xe=this.localClippingEnabled,Ye=we.init(this.clippingPlanes,Xe),P=fe.get(y,L.length),P.init(),L.push(P),Me.enabled===!0&&Me.isPresenting===!0){const _e=M.xr.getDepthSensingMesh();_e!==null&&Xs(_e,F,-1/0,M.sortObjects)}Xs(y,F,0,M.sortObjects),P.finish(),M.sortObjects===!0&&P.sort(Te,Re,F.reversedDepth),at=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,at&&Ie.addToRenderList(P,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&we.beginShadows();const H=A.state.shadowsArray;if(Pe.render(H,y,F),Ye===!0&&we.endShadows(),(k&&T.hasRenderPass())===!1){const _e=P.opaque,de=P.transmissive;if(A.setupLights(),F.isArrayCamera){const Se=F.cameras;if(de.length>0)for(let ye=0,Ue=Se.length;ye<Ue;ye++){const Oe=Se[ye];ja(_e,de,y,Oe)}at&&Ie.render(y);for(let ye=0,Ue=Se.length;ye<Ue;ye++){const Oe=Se[ye];Qa(P,y,Oe,Oe.viewport)}}else de.length>0&&ja(_e,de,y,F),at&&Ie.render(y),Qa(P,y,F)}Z!==null&&B===0&&(Y.updateMultisampleRenderTarget(Z),Y.updateRenderTargetMipmap(Z)),k&&T.end(M),y.isScene===!0&&y.onAfterRender(M,y,F),me.resetDefaultState(),Q=-1,ie=null,x.pop(),x.length>0?(A=x[x.length-1],Y.setTextureUnits(A.state.textureUnits),Ye===!0&&we.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,L.pop(),L.length>0?P=L[L.length-1]:P=null,R!==null&&R.renderEnd()};function Xs(y,F,X,k){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLightProbeGrid)A.pushLightProbeGrid(y);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Qe.intersectsSprite(y)){k&&vt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ut);const _e=J.update(y),de=y.material;de.visible&&P.push(y,_e,de,X,vt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Qe.intersectsObject(y))){const _e=J.update(y),de=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),vt.copy(y.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),vt.copy(_e.boundingSphere.center)),vt.applyMatrix4(y.matrixWorld).applyMatrix4(ut)),Array.isArray(de)){const Se=_e.groups;for(let ye=0,Ue=Se.length;ye<Ue;ye++){const Oe=Se[ye],Ae=de[Oe.materialIndex];Ae&&Ae.visible&&P.push(y,_e,Ae,X,vt.z,Oe)}}else de.visible&&P.push(y,_e,de,X,vt.z,null)}}const pe=y.children;for(let _e=0,de=pe.length;_e<de;_e++)Xs(pe[_e],F,X,k)}function Qa(y,F,X,k){const{opaque:H,transmissive:pe,transparent:_e}=y;A.setupLightsView(X),Ye===!0&&we.setGlobalState(M.clippingPlanes,X),k&&_.viewport(ae.copy(k)),H.length>0&&$i(H,F,X),pe.length>0&&$i(pe,F,X),_e.length>0&&$i(_e,F,X),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ja(y,F,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){const Ae=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new fn(1,1,{generateMipmaps:!0,type:Ae?bn:zt,minFilter:Zn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const pe=A.state.transmissionRenderTarget[k.id],_e=k.viewport||ae;pe.setSize(_e.z*M.transmissionResolutionScale,_e.w*M.transmissionResolutionScale);const de=M.getRenderTarget(),Se=M.getActiveCubeFace(),ye=M.getActiveMipmapLevel();M.setRenderTarget(pe),M.getClearColor(st),We=M.getClearAlpha(),We<1&&M.setClearColor(16777215,.5),M.clear(),at&&Ie.render(X);const Ue=M.toneMapping;M.toneMapping=hn;const Oe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),Ye===!0&&we.setGlobalState(M.clippingPlanes,k),$i(y,X,k),Y.updateMultisampleRenderTarget(pe),Y.updateRenderTargetMipmap(pe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let $e=0,ht=F.length;$e<ht;$e++){const lt=F[$e],{object:je,geometry:yt,material:ge,group:Ut}=lt;if(ge.side===vn&&je.layers.test(k.layers)){const qe=ge.side;ge.side=It,ge.needsUpdate=!0,eo(je,X,k,yt,ge,Ut),ge.side=qe,ge.needsUpdate=!0,Ae=!0}}Ae===!0&&(Y.updateMultisampleRenderTarget(pe),Y.updateRenderTargetMipmap(pe))}M.setRenderTarget(de,Se,ye),M.setClearColor(st,We),Oe!==void 0&&(k.viewport=Oe),M.toneMapping=Ue}function $i(y,F,X){const k=F.isScene===!0?F.overrideMaterial:null;for(let H=0,pe=y.length;H<pe;H++){const _e=y[H],{object:de,geometry:Se,group:ye}=_e;let Ue=_e.material;Ue.allowOverride===!0&&k!==null&&(Ue=k),de.layers.test(X.layers)&&eo(de,F,X,Se,Ue,ye)}}function eo(y,F,X,k,H,pe){y.onBeforeRender(M,F,X,k,H,pe),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(M,F,X,k,y,pe),H.transparent===!0&&H.side===vn&&H.forceSinglePass===!1?(H.side=It,H.needsUpdate=!0,M.renderBufferDirect(X,F,k,H,y,pe),H.side=On,H.needsUpdate=!0,M.renderBufferDirect(X,F,k,H,y,pe),H.side=vn):M.renderBufferDirect(X,F,k,H,y,pe),y.onAfterRender(M,F,X,k,H,pe)}function Ji(y,F,X){F.isScene!==!0&&(F=St);const k=W.get(y),H=A.state.lights,pe=A.state.shadowsArray,_e=H.state.version,de=le.getParameters(y,H.state,pe,F,X,A.state.lightProbeGridArray),Se=le.getProgramCacheKey(de);let ye=k.programs;k.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;const Ue=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;k.envMap=se.get(y.envMap||k.environment,Ue),k.envMapRotation=k.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,ye===void 0&&(y.addEventListener("dispose",nn),ye=new Map,k.programs=ye);let Oe=ye.get(Se);if(Oe!==void 0){if(k.currentProgram===Oe&&k.lightsStateVersion===_e)return no(y,de),Oe}else de.uniforms=le.getUniforms(y),R!==null&&y.isNodeMaterial&&R.build(y,X,de),y.onBeforeCompile(de,M),Oe=le.acquireProgram(de,Se),ye.set(Se,Oe),k.uniforms=de.uniforms;const Ae=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ae.clippingPlanes=we.uniform),no(y,de),k.needsLights=gc(y),k.lightsStateVersion=_e,k.needsLights&&(Ae.ambientLightColor.value=H.state.ambient,Ae.lightProbe.value=H.state.probe,Ae.directionalLights.value=H.state.directional,Ae.directionalLightShadows.value=H.state.directionalShadow,Ae.spotLights.value=H.state.spot,Ae.spotLightShadows.value=H.state.spotShadow,Ae.rectAreaLights.value=H.state.rectArea,Ae.ltc_1.value=H.state.rectAreaLTC1,Ae.ltc_2.value=H.state.rectAreaLTC2,Ae.pointLights.value=H.state.point,Ae.pointLightShadows.value=H.state.pointShadow,Ae.hemisphereLights.value=H.state.hemi,Ae.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ae.spotLightMatrix.value=H.state.spotLightMatrix,Ae.spotLightMap.value=H.state.spotLightMap,Ae.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=A.state.lightProbeGridArray.length>0,k.currentProgram=Oe,k.uniformsList=null,Oe}function to(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Cs.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function no(y,F){const X=W.get(y);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function dc(y,F){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;E.setFromMatrixPosition(F.matrixWorld);for(let X=0,k=y.length;X<k;X++){const H=y[X];if(H.texture!==null&&H.boundingBox.containsPoint(E))return H}return null}function pc(y,F,X,k,H){F.isScene!==!0&&(F=St),Y.resetTextureUnits();const pe=F.fog,_e=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,de=Z===null?M.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ge.workingColorSpace,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,ye=se.get(k.envMap||_e,Se),Ue=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Oe=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ae=!!X.morphAttributes.position,$e=!!X.morphAttributes.normal,ht=!!X.morphAttributes.color;let lt=hn;k.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(lt=M.toneMapping);const je=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,yt=je!==void 0?je.length:0,ge=W.get(k),Ut=A.state.lights;if(Ye===!0&&(Xe===!0||y!==ie)){const it=y===ie&&k.id===Q;we.setState(k,y,it)}let qe=!1;k.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Ut.state.version||ge.outputColorSpace!==de||H.isBatchedMesh&&ge.batching===!1||!H.isBatchedMesh&&ge.batching===!0||H.isBatchedMesh&&ge.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ge.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ge.instancing===!1||!H.isInstancedMesh&&ge.instancing===!0||H.isSkinnedMesh&&ge.skinning===!1||!H.isSkinnedMesh&&ge.skinning===!0||H.isInstancedMesh&&ge.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ge.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ge.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ge.instancingMorph===!1&&H.morphTexture!==null||ge.envMap!==ye||k.fog===!0&&ge.fog!==pe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==we.numPlanes||ge.numIntersection!==we.numIntersection)||ge.vertexAlphas!==Ue||ge.vertexTangents!==Oe||ge.morphTargets!==Ae||ge.morphNormals!==$e||ge.morphColors!==ht||ge.toneMapping!==lt||ge.morphTargetsCount!==yt||!!ge.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,ge.__version=k.version);let Ht=ge.currentProgram;qe===!0&&(Ht=Ji(k,F,H),R&&k.isNodeMaterial&&R.onUpdateProgram(k,Ht,ge));let sn=!1,Tn=!1,ti=!1;const et=Ht.getUniforms(),ft=ge.uniforms;if(_.useProgram(Ht.program)&&(sn=!0,Tn=!0,ti=!0),k.id!==Q&&(Q=k.id,Tn=!0),ge.needsLights){const it=dc(A.state.lightProbeGridArray,H);ge.lightProbeGrid!==it&&(ge.lightProbeGrid=it,Tn=!0)}if(sn||ie!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),et.setValue(N,"projectionMatrix",y.projectionMatrix),et.setValue(N,"viewMatrix",y.matrixWorldInverse);const wn=et.map.cameraPosition;wn!==void 0&&wn.setValue(N,mt.setFromMatrixPosition(y.matrixWorld)),C.logarithmicDepthBuffer&&et.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&et.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),ie!==y&&(ie=y,Tn=!0,ti=!0)}if(ge.needsLights&&(Ut.state.directionalShadowMap.length>0&&et.setValue(N,"directionalShadowMap",Ut.state.directionalShadowMap,Y),Ut.state.spotShadowMap.length>0&&et.setValue(N,"spotShadowMap",Ut.state.spotShadowMap,Y),Ut.state.pointShadowMap.length>0&&et.setValue(N,"pointShadowMap",Ut.state.pointShadowMap,Y)),H.isSkinnedMesh){et.setOptional(N,H,"bindMatrix"),et.setOptional(N,H,"bindMatrixInverse");const it=H.skeleton;it&&(it.boneTexture===null&&it.computeBoneTexture(),et.setValue(N,"boneTexture",it.boneTexture,Y))}H.isBatchedMesh&&(et.setOptional(N,H,"batchingTexture"),et.setValue(N,"batchingTexture",H._matricesTexture,Y),et.setOptional(N,H,"batchingIdTexture"),et.setValue(N,"batchingIdTexture",H._indirectTexture,Y),et.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&et.setValue(N,"batchingColorTexture",H._colorsTexture,Y));const An=X.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&U.update(H,X,Ht),(Tn||ge.receiveShadow!==H.receiveShadow)&&(ge.receiveShadow=H.receiveShadow,et.setValue(N,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(ft.envMapIntensity.value=F.environmentIntensity),ft.dfgLUT!==void 0&&(ft.dfgLUT.value=z0()),Tn){if(et.setValue(N,"toneMappingExposure",M.toneMappingExposure),ge.needsLights&&mc(ft,ti),pe&&k.fog===!0&&be.refreshFogUniforms(ft,pe),be.refreshMaterialUniforms(ft,k,ee,ne,A.state.transmissionRenderTarget[y.id]),ge.needsLights&&ge.lightProbeGrid){const it=ge.lightProbeGrid;ft.probesSH.value=it.texture,ft.probesMin.value.copy(it.boundingBox.min),ft.probesMax.value.copy(it.boundingBox.max),ft.probesResolution.value.copy(it.resolution)}Cs.upload(N,to(ge),ft,Y)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Cs.upload(N,to(ge),ft,Y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&et.setValue(N,"center",H.center),et.setValue(N,"modelViewMatrix",H.modelViewMatrix),et.setValue(N,"normalMatrix",H.normalMatrix),et.setValue(N,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){const it=k.uniformsGroups;for(let wn=0,ni=it.length;wn<ni;wn++){const io=it[wn];j.update(io,Ht),j.bind(io,Ht)}}return Ht}function mc(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function gc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(y,F,X){const k=W.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),W.get(y.texture).__webglTexture=F,W.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const X=W.get(y);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,X=0){Z=y,V=F,B=X;let k=null,H=!1,pe=!1;if(y){const de=W.get(y);if(de.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,de.__webglFramebuffer),ae.copy(y.viewport),xe.copy(y.scissor),He=y.scissorTest,_.viewport(ae),_.scissor(xe),_.setScissorTest(He),Q=-1;return}else if(de.__webglFramebuffer===void 0)Y.setupRenderTarget(y);else if(de.__hasExternalTextures)Y.rebindTextures(y,W.get(y.texture).__webglTexture,W.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ue=y.depthTexture;if(de.__boundDepthTexture!==Ue){if(Ue!==null&&W.has(Ue)&&(y.width!==Ue.image.width||y.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(y)}}const Se=y.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(pe=!0);const ye=W.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ye[F])?k=ye[F][X]:k=ye[F],H=!0):y.samples>0&&Y.useMultisampledRTT(y)===!1?k=W.get(y).__webglMultisampledFramebuffer:Array.isArray(ye)?k=ye[X]:k=ye,ae.copy(y.viewport),xe.copy(y.scissor),He=y.scissorTest}else ae.copy(Ce).multiplyScalar(ee).floor(),xe.copy(ct).multiplyScalar(ee).floor(),He=ze;if(X!==0&&(k=D),_.bindFramebuffer(N.FRAMEBUFFER,k)&&_.drawBuffers(y,k),_.viewport(ae),_.scissor(xe),_.setScissorTest(He),H){const de=W.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,de.__webglTexture,X)}else if(pe){const de=F;for(let Se=0;Se<y.textures.length;Se++){const ye=W.get(y.textures[Se]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Se,ye.__webglTexture,X,de)}}else if(y!==null&&X!==0){const de=W.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,de.__webglTexture,X)}Q=-1},this.readRenderTargetPixels=function(y,F,X,k,H,pe,_e,de=0){if(!(y&&y.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){_.bindFramebuffer(N.FRAMEBUFFER,Se);try{const ye=y.textures[de],Ue=ye.format,Oe=ye.type;if(y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+de),!C.textureFormatReadable(Ue)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Oe)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-k&&X>=0&&X<=y.height-H&&N.readPixels(F,X,k,H,he.convert(Ue),he.convert(Oe),pe)}finally{const ye=Z!==null?W.get(Z).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(y,F,X,k,H,pe,_e,de=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se)if(F>=0&&F<=y.width-k&&X>=0&&X<=y.height-H){_.bindFramebuffer(N.FRAMEBUFFER,Se);const ye=y.textures[de],Ue=ye.format,Oe=ye.type;if(y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+de),!C.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.bufferData(N.PIXEL_PACK_BUFFER,pe.byteLength,N.STREAM_READ),N.readPixels(F,X,k,H,he.convert(Ue),he.convert(Oe),0);const $e=Z!==null?W.get(Z).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,$e);const ht=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await eh(N,ht,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pe),N.deleteBuffer(Ae),N.deleteSync(ht),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,X=0){const k=Math.pow(2,-X),H=Math.floor(y.image.width*k),pe=Math.floor(y.image.height*k),_e=F!==null?F.x:0,de=F!==null?F.y:0;Y.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,_e,de,H,pe),_.unbindTexture()},this.copyTextureToTexture=function(y,F,X=null,k=null,H=0,pe=0){let _e,de,Se,ye,Ue,Oe,Ae,$e,ht;const lt=y.isCompressedTexture?y.mipmaps[pe]:y.image;if(X!==null)_e=X.max.x-X.min.x,de=X.max.y-X.min.y,Se=X.isBox3?X.max.z-X.min.z:1,ye=X.min.x,Ue=X.min.y,Oe=X.isBox3?X.min.z:0;else{const ft=Math.pow(2,-H);_e=Math.floor(lt.width*ft),de=Math.floor(lt.height*ft),y.isDataArrayTexture?Se=lt.depth:y.isData3DTexture?Se=Math.floor(lt.depth*ft):Se=1,ye=0,Ue=0,Oe=0}k!==null?(Ae=k.x,$e=k.y,ht=k.z):(Ae=0,$e=0,ht=0);const je=he.convert(F.format),yt=he.convert(F.type);let ge;F.isData3DTexture?(Y.setTexture3D(F,0),ge=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Y.setTexture2DArray(F,0),ge=N.TEXTURE_2D_ARRAY):(Y.setTexture2D(F,0),ge=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const Ut=_.getParameter(N.UNPACK_ROW_LENGTH),qe=_.getParameter(N.UNPACK_IMAGE_HEIGHT),Ht=_.getParameter(N.UNPACK_SKIP_PIXELS),sn=_.getParameter(N.UNPACK_SKIP_ROWS),Tn=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,lt.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,ye),_.pixelStorei(N.UNPACK_SKIP_ROWS,Ue),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Oe);const ti=y.isDataArrayTexture||y.isData3DTexture,et=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const ft=W.get(y),An=W.get(F),it=W.get(ft.__renderTarget),wn=W.get(An.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,it.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let ni=0;ni<Se;ni++)ti&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(y).__webglTexture,H,Oe+ni),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(F).__webglTexture,pe,ht+ni)),N.blitFramebuffer(ye,Ue,_e,de,Ae,$e,_e,de,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||W.has(y)){const ft=W.get(y),An=W.get(F);_.bindFramebuffer(N.READ_FRAMEBUFFER,G),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,I);for(let it=0;it<Se;it++)ti?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ft.__webglTexture,H,Oe+it):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ft.__webglTexture,H),et?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,An.__webglTexture,pe,ht+it):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,An.__webglTexture,pe),H!==0?N.blitFramebuffer(ye,Ue,_e,de,Ae,$e,_e,de,N.COLOR_BUFFER_BIT,N.NEAREST):et?N.copyTexSubImage3D(ge,pe,Ae,$e,ht+it,ye,Ue,_e,de):N.copyTexSubImage2D(ge,pe,Ae,$e,ye,Ue,_e,de);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else et?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(ge,pe,Ae,$e,ht,_e,de,Se,je,yt,lt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(ge,pe,Ae,$e,ht,_e,de,Se,je,lt.data):N.texSubImage3D(ge,pe,Ae,$e,ht,_e,de,Se,je,yt,lt):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,pe,Ae,$e,_e,de,je,yt,lt.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,pe,Ae,$e,lt.width,lt.height,je,lt.data):N.texSubImage2D(N.TEXTURE_2D,pe,Ae,$e,_e,de,je,yt,lt);_.pixelStorei(N.UNPACK_ROW_LENGTH,Ut),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,qe),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Ht),_.pixelStorei(N.UNPACK_SKIP_ROWS,sn),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Tn),pe===0&&F.generateMipmaps&&N.generateMipmap(ge),_.unbindTexture()},this.initRenderTarget=function(y){W.get(y).__webglFramebuffer===void 0&&Y.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Y.setTextureCube(y,0):y.isData3DTexture?Y.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Y.setTexture2DArray(y,0):Y.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){V=0,B=0,Z=null,_.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}const Dt=new Ci(1,1,1),Ot=new Ba(.5),k0=new O(0,1,0),dl={fire:16747066,ice:10476799,earth:14198858,holy:16771496,poison:9428074},Wt=1.15,$t=.5,xi=[[0,1],[0,-1],[1,0],[-1,0]],te=(i,e)=>{const t=Math.min(255,(i>>16&255)*e)|0,n=Math.min(255,(i>>8&255)*e)|0,s=Math.min(255,(i&255)*e)|0;return t<<16|n<<8|s},Xt=(i,e,t)=>{const n=(i>>16&255)+((e>>16&255)-(i>>16&255))*t|0,s=(i>>8&255)+((e>>8&255)-(i>>8&255))*t|0,r=(i&255)+((e&255)-(i&255))*t|0;return n<<16|s<<8|r},Xn={plain:{bg:1053725,fogD:.042,amb:9676232,ambI:.5,sun:16769725,sunI:.88,fill:8229565,fillI:.26,ground:1251619,floorA:4279651,floorB:5525055,floorAcc:4808767,accP:.1,crackP:.35,glowP:0,glowCol:0,wallA:8226715,wallB:9142641,wallAcc:6123860,wallAccP:.07,wallCore:2567739,water:1989278,waterDeep:863058,sparkle:6797288,torchN:19,flame:16753978,flameCore:16769146,heroCol:16761470,heroI:3.2},fire:{bg:1379336,fogD:.05,amb:12617315,ambI:.44,sun:16763030,sunI:.78,fill:10241318,fillI:.3,ground:1445386,floorA:4010540,floorB:5519146,floorAcc:8272416,accP:.13,crackP:.45,glowP:.05,glowCol:16742960,wallA:6177336,wallB:7360572,wallAcc:10242598,wallAccP:.09,wallCore:2364432,water:1989278,waterDeep:863058,sparkle:6797288,torchN:13,flame:16747066,flameCore:16765562,heroCol:16754788,heroI:3.6},ice:{bg:857376,fogD:.046,amb:10271455,ambI:.52,sun:14478591,sunI:.85,fill:5797805,fillI:.3,ground:1054757,floorA:4610158,floorB:6124166,floorAcc:11127772,accP:.14,crackP:.3,glowP:.035,glowCol:10476799,wallA:7241880,wallB:8692410,wallAcc:13822196,wallAccP:.1,wallCore:1845302,water:2779824,waterDeep:1194594,sparkle:11133695,torchN:23,flame:16753978,flameCore:16769146,heroCol:16761470,heroI:3.2},earth:{bg:1183240,fogD:.045,amb:11772548,ambI:.46,sun:16769971,sunI:.82,fill:8219212,fillI:.26,ground:1314826,floorA:4997684,floorB:6246720,floorAcc:9073728,accP:.12,crackP:.5,glowP:0,glowCol:0,wallA:8022610,wallB:9338211,wallAcc:10521676,wallAccP:.09,wallCore:2761240,water:1989278,waterDeep:863058,sparkle:6797288,torchN:17,flame:16753978,flameCore:16769146,heroCol:16761470,heroI:3.2},holy:{bg:1646381,fogD:.034,amb:13225433,ambI:.58,sun:16774106,sunI:.92,fill:10136013,fillI:.3,ground:1975345,floorA:9014165,floorB:10196875,floorAcc:12233068,accP:.07,crackP:.15,glowP:.03,glowCol:16773314,wallA:10068142,wallB:11249818,wallAcc:13022840,wallAccP:.05,wallCore:3291208,band:13022840,water:1989278,waterDeep:863058,sparkle:6797288,torchN:19,flame:16771496,flameCore:16774872,heroCol:16769196,heroI:2.8},town:{bg:1778225,fogD:.027,amb:14273206,ambI:.66,sun:16771524,sunI:1.05,fill:9413576,fillI:.3,ground:1909811,floorA:5593702,floorB:7037004,floorAcc:6057034,accP:.09,crackP:.2,glowP:0,glowCol:0,wallA:9080480,wallB:10260346,wallAcc:6123860,wallAccP:.06,wallCore:2896192,water:1989278,waterDeep:863058,sparkle:6797288,torchN:11,flame:16761194,flameCore:16772536,heroCol:16766880,heroI:2.2}},Hs=[{n:[1,0,0],q:[[1,-1,-1],[1,1,-1],[1,1,1],[1,-1,1]]},{n:[-1,0,0],q:[[-1,-1,1],[-1,1,1],[-1,1,-1],[-1,-1,-1]]},{n:[0,1,0],q:[[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1]]},{n:[0,-1,0],q:[[-1,-1,1],[-1,-1,-1],[1,-1,-1],[1,-1,1]]},{n:[0,0,1],q:[[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]},{n:[0,0,-1],q:[[1,-1,-1],[-1,-1,-1],[-1,1,-1],[1,1,-1]]}],Vi=new Fe;function Jl(i,e,t,n,s,r,a,o){const c=i.pos.length/3;for(const[l,f,p]of e.q)i.pos.push(t+l*r,n+f*a,s+p*o),i.nrm.push(e.n[0],e.n[1],e.n[2]),i.col.push(Vi.r,Vi.g,Vi.b);i.idx.push(c,c+1,c+2,c,c+2,c+3)}function ka(i){const e=new kt;return e.setAttribute("position",new gt(i.pos,3)),e.setAttribute("normal",new gt(i.nrm,3)),e.setAttribute("color",new gt(i.col,3)),e.setIndex(i.idx),e}const Gt=(i,e,t)=>i+","+e+","+t,H0=(i,e,t)=>{let n=i*374761393+e*668265263+t*2147483647>>>0;return n^=n<<13,n^=n>>>17,n^=n<<5,n>>>0};function Ha(i,e,t,n,s,r,a){const o=t/2;for(const[c,l]of e){const[f,p,h]=c.split(",").map(Number);Vi.setHex(a>0?te(l,1-a+H0(f,p,h)%97/96*2*a):l);const u=(f+.5)*t+n,m=(p+.5)*t+s,v=(h+.5)*t+r;for(const g of Hs)e.has(Gt(f+g.n[0],p+g.n[1],h+g.n[2]))||Jl(i,g,u,m,v,o,o,o)}}function Ql(i){const e=new Map;for(const[t,n]of i){const[s,r,a]=t.split(",").map(Number);let o=0,c=0,l=0,f=0;for(const p of Hs)i.has(Gt(s+p.n[0],r+p.n[1],a+p.n[2]))&&(o++,c|=+(p.n[0]!==0),l|=+(p.n[1]!==0),f|=+(p.n[2]!==0));o===3&&c&&l&&f||e.set(t,n)}return e}function jl(i){const e=new Map;let t=0,n=0;return i.layers.forEach((s,r)=>s.forEach((a,o)=>{n=Math.max(n,s.length);for(let c=0;c<a.length;c++){const l=i.pal[a[c]];l!=null&&(e.set(Gt(c,r,o),l),t=Math.max(t,c+1))}})),{cells:e,w:t,d:n}}function ec(i,e){const t=new Map;for(const[n,s]of i){const[r,a,o]=n.split(",").map(Number);let c=0;for(const l of Hs)i.has(Gt(r+l.n[0],a+l.n[1],o+l.n[2]))&&c++;for(let l=0;l<e;l++)for(let f=0;f<e;f++)for(let p=0;p<e;p++){if(c>=2){const h=l===0?-1:l===e-1?1:0,u=f===0?-1:f===e-1?1:0,m=p===0?-1:p===e-1?1:0;if(h&&u&&m&&!i.has(Gt(r+h,a,o))&&!i.has(Gt(r,a+u,o))&&!i.has(Gt(r,a,o+m)))continue}t.set(Gt(r*e+l,a*e+f,o*e+p),s)}}return t}function V0(i,e=3){const{cells:t,w:n,d:s}=jl(i),r=i.s/e,a={pos:[],nrm:[],col:[],idx:[]};return Ha(a,ec(t,e),r,-(n*i.s)/2,0,-(s*i.s)/2,.055),ka(a)}function pl(i,e,t=.05){const n=new Map,s=[],r=Math.max(e*.9,.037);for(const o of i){if(Math.min(o.sx,o.sy,o.sz)<r){s.push(o);continue}const c=Math.max(1,Math.round(o.sx/e)),l=Math.max(1,Math.round(o.sy/e)),f=Math.max(1,Math.round(o.sz/e)),p=Math.round(o.x/e-c/2),h=Math.round(o.y/e-l/2),u=Math.round(o.z/e-f/2);for(let m=0;m<c;m++)for(let v=0;v<l;v++)for(let g=0;g<f;g++)n.set(Gt(p+m,h+v,u+g),o.c)}const a={pos:[],nrm:[],col:[],idx:[]};Ha(a,Ql(n),e,0,0,0,t);for(const o of s){Vi.setHex(o.c);for(const c of Hs)Jl(a,c,o.x,o.y,o.z,o.sx/2,o.sy/2,o.sz/2)}return ka(a)}class Zi{constructor(e,t=.07){ve(this,"cells",new Map);this.s=e,this.jit=t}set(e,t,n,s){this.cells.set(Gt(Math.round(e),Math.round(t),Math.round(n)),s)}box(e,t,n,s,r,a,o){for(let c=Math.min(e,t);c<=Math.max(e,t);c++)for(let l=Math.min(n,s);l<=Math.max(n,s);l++)for(let f=Math.min(r,a);f<=Math.max(r,a);f++)this.cells.set(Gt(c,l,f),o)}ell(e,t,n,s,r,a,o){for(let c=Math.floor(e-s);c<=Math.ceil(e+s);c++)for(let l=Math.floor(t-r);l<=Math.ceil(t+r);l++)for(let f=Math.floor(n-a);f<=Math.ceil(n+a);f++){const p=(c-e)/s,h=(l-t)/r,u=(f-n)/a;p*p+h*h+u*u<=1&&this.cells.set(Gt(c,l,f),o)}}seg(e,t,n,s,r,a,o,c,l){const f=Math.max(1,Math.round(Math.max(Math.abs(s-e),Math.abs(r-t),Math.abs(a-n))));for(let p=0;p<=f;p++){const h=p/f,u=o+(c-o)*h;this.ell(e+(s-e)*h,t+(r-t)*h,n+(a-n)*h,u,u,u,l)}}ring(e,t,n){for(let s=-Math.ceil(t)-1;s<=Math.ceil(t)+1;s++)for(let r=-Math.ceil(t)-1;r<=Math.ceil(t)+1;r++){const a=Math.sqrt(s*s+r*r);Math.abs(a-t)<=.6&&this.cells.set(Gt(s,e,r),n)}}}function W0(){const i=new Zi(.05,.06),e=9056806,t=6168344,n=14200952,s=15261124,r=4856340,a=9067066,o=16765514,c=16742960;i.ell(0,13,-3,11,7.5,13,e),i.ell(0,9,4,6.5,5,10,n);for(const[l,f,p]of[[0,6,12],[2,7,12],[-2,6,11],[3,6,10],[-3,7,11],[0,7,13]])i.set(l,f,p,c);for(const l of[-1,1]){i.seg(l*7,10,6,l*8,2,7,3.2,2.6,t),i.ell(l*8,2,8,3,2,3.6,t);for(const f of[-2,0,2])i.set(l*8+f,1,12,s);i.seg(l*8,10,-9,l*9,2,-10,3.4,2.8,t),i.ell(l*9,2,-8,3,2,3.6,t)}i.seg(0,16,6,0,26,13,4.6,3.4,e),i.ell(0,28,15,4.4,3.4,4.6,e),i.ell(0,26.5,19.5,2.8,2,4,e),i.box(-2,2,24,25,17,21,t),i.box(-1,1,24,25,21,21,c);for(const l of[-2,0,2])i.set(l,25,21,s);i.set(-2,28,18,o),i.set(2,28,18,o),i.set(-2,29,18,o),i.set(2,29,18,o);for(const l of[-1,1])i.seg(l*3,30,13,l*6,35,8,1.4,.7,s);for(const l of[-1,1]){i.seg(l*9,18,-4,l*19,30,-10,1.6,1,a);for(let f=0;f<=9;f++){const p=l*(10+f),h=19+f*1.2;for(let u=Math.max(10,h-7+f*.4);u<=h;u++)i.set(p,u,-8-f*.2,r)}}i.seg(0,10,-14,12,4,-19,3,1,e);for(let l=-12;l<=12;l+=2)i.set(0,20+Math.round(Math.cos(l*.2)*1.5),l<6?l:6+Math.round((l-6)*.8),s);for(let l=-10;l<=8;l+=3)i.set(0,21,l,s);return i}function X0(){const i=new Zi(.055,.06),e=10336460,t=7440542,n=14676732,s=11064552,r=6179382,a=9431295,o=15660794;for(const c of[-1,1])i.seg(c*5,14,0,c*5,2,0,3.6,3.2,e),i.box(c*5-3,c*5+3,0,5,-3,3,r);i.box(-8,8,14,18,-4,4,r),i.ell(0,26,0,9,9,6,e),i.box(-5,5,22,30,4,5,s),i.box(-2,2,20,30,5,5,n);for(const c of[-1,1])i.ell(c*10,33,0,4,3.4,4,n),i.seg(c*12,35,0,c*14,40,-2,1.4,.6,n);i.seg(-12,31,0,-13,18,2,2.6,2.2,e),i.ell(-13,15,3,3.2,3,3.2,t),i.seg(12,31,0,13,22,4,2.6,2.2,e),i.ell(13,20,5,3,2.8,3,t),i.seg(13,16,6,13,40,8,2.4,3.4,n),i.ell(13,42,8.5,3.6,3.4,3.6,s);for(const[c,l]of[[-2,40],[2,43],[0,45]])i.set(13+c,l+1,9,o);i.ell(0,37,1,4.2,4.2,4.2,e),i.box(-3,3,30,35,3,5,o),i.box(-2,2,28,30,3,4,o),i.box(-4,4,40,42,-2,3,o),i.set(-2,38,5,a),i.set(2,38,5,a),i.box(-3,3,39,39,4,5,s);for(const[c,l,f]of[[-6,30,-5],[6,31,-5],[0,33,-6]])i.seg(c,l,f,c*1.3,l+6,f-3,1.2,.4,n);return i}function q0(){const i=new Zi(.055,.09),e=9078136,t=6249038,n=6916175,s=14263361,r=16734778;for(const a of[-1,1])i.seg(a*6,12,0,a*6,2,1,4.2,4.6,t);i.box(-9,9,11,15,-4,4,e),i.ell(0,24,-1,11,10,7,e),i.box(-1,1,20,28,5,6,s),i.box(-4,4,24,25,5,6,s);for(const a of[-1,1]){i.ell(a*12,30,0,5,4.4,5,e),i.seg(a*14,28,0,a*15,14,4,3.6,4,t),i.ell(a*15,7,5,5.4,6.5,5.6,t);for(const o of[-3,0,3])i.box(a*15+o-1,a*15+o+1,10,13,9,10,e)}i.box(-3,3,33,38,-2,3,e),i.set(-2,36,4,r),i.set(2,36,4,r),i.box(-4,4,38,39,-3,2,t);for(const[a,o,c]of[[-8,31,2],[9,28,-4],[-11,22,-5],[4,34,-1],[13,12,6]])i.ell(a,o,c,2,1.4,2,n);return i}function Y0(){const i=new Zi(.05,.05),e=14276041,t=11052180,n=13938487,s=15921126,r=13617336,a=10479871,o=15331320,c=16771496;for(let l=0;l<=14;l++){const f=8-l*.25;i.ell(0,l,0,f,1.2,f*.8,l%4===0?t:e)}i.box(-6,6,14,16,-4,4,n),i.ell(0,23,0,7,7.5,5,e),i.box(-1,1,18,27,4,5,n),i.box(-4,4,22,23,4,5,n);for(const l of[-1,1])i.ell(l*8,29,0,3.6,3,3.6,n),i.seg(l*9,26,1,l*6,18,6,2.2,1.8,e),i.ell(l*4,17,7,2,2,2,t);i.seg(0,30,7,0,10,8,1.4,.8,o),i.box(-3,3,29,30,7,8,n),i.set(0,32,7,n),i.ell(0,34,0,3.6,4,3.6,e),i.box(-2,2,33,34,3,4,1712176),i.set(-1,34,4,a),i.set(1,34,4,a),i.box(-1,1,38,40,-1,1,n),i.ring(43,5,c);for(const l of[-1,1])for(const[f,p,h]of[[13,26,-5],[9,20,-6]]){i.seg(l*4,p,h,l*(4+f),p+f*.9,h-3,1.4,.7,r);for(let u=1;u<=f;u++){const m=l*(4+u),v=p+u*.9,g=Math.max(4,9-Math.abs(u-f*.6));for(let d=v-g;d<=v;d++)i.set(m,d,h-2-u*.15,s)}}return i}function K0(){const i=new Zi(.07,.09),e=5660240,t=3817528,n=13214268,s=16738874,r=14735552;i.box(-19,19,0,4,-16,16,t),i.box(-19,19,4,5,14,16,n),i.box(-19,19,4,5,-16,-14,n);for(const a of[-1,1])i.ell(a*8,8,9,7.5,4,5.5,e),i.ell(a*12,8,5,4,3.4,4,t);i.ell(0,20,0,13,12,9,e),i.ell(0,15,5,8,6,6,t);for(let a=-6;a<=6;a+=2)i.set(a,26-Math.abs(a)*.4,8,n);i.set(0,22,9,n),i.set(0,21,9,n);for(const a of[-1,1])i.ell(a*13,27,0,4.4,3.6,4,e),i.seg(a*14,28,0,a*19,38,2,2.2,1.6,e),i.ell(a*19,40,2,2.6,2.6,2.6,n),i.seg(a*14,25,1,a*21,22,6,2.2,1.6,e),i.ell(a*21,21,7,2.4,2,2.4,t),i.seg(a*13,20,3,a*11,10,10,2.2,1.8,e),i.ell(a*10,9,11,2.6,1.8,3,t);i.ell(0,34,1,6,5.5,5.5,e),i.box(-4,4,30,31,4,6,t);for(const a of[-3,-1,1,3])i.set(a,29,6,r);i.set(-2,35,6,s),i.set(2,35,6,s),i.set(0,38,6,s);for(const a of[-1,1])i.seg(a*5,38,2,a*8,43,-1,1.4,.6,n);for(let a=-4;a<=4;a+=2)i.set(a,40,3,n);return i}const tc={dragon:W0,frostgiant:X0,colossus:q0,seraph:Y0,idol:K0},va={dragon:[16765514,16742960],frostgiant:[9431295],colossus:[16734778],seraph:[16771496,10479871],idol:[16738874],hydra:[16734810],boss:[16734810],armor:[16734810],ghostknight:[11462399],spirit:[10478591]},nc={goblin:{s:.088,pal:{s:6986314,S:5734204,e:16734810,k:4863264,b:3023896,p:3752238,w:8018482,W:5521439,t:15261904},layers:[["...........","...........","..kk...kk..","..kk...kk..","...........","..........."],["...........","...........","..pp...pp..","..pp...pp..","...........","..........."],["...........","...........","..pp...pp..","..pp...pp..","...........","..........."],["...........","...........","..ppppppp..","..ppppppp..","...........","..........."],["...........","...........","..bbbbbbb..","..bbbbbbb..","...........","..........."],["...........","..sssssss..","s.sssssss.w","..sssssss..","...........","..........."],["...........","..sssssss..","s.sssssss.w","..sssssss..","...........","..........."],["...........","..sssssss..","ssssssssssw","..sssssss..","...........","..........."],["...........","...........","....sss...w","....sss....","....t.t....","..........."],["...........","...sssss..W",".sssssssssW","...sssss...","....e.e....","..........."],["...........","...sssss..W","..sssssss.W","...sssss...","....b.b....","..........."],["...........","...........","....sss....","....SSS....","...........","..........."]]},golem:{s:.105,pal:{g:9079426,G:6447708,m:6982232,e:16734810,c:3815990},layers:[[".............",".............","..ggg...ggg..","..ggg...ggg..","..ggg...ggg..",".............","............."],[".............",".............","..ggg...ggg..","..ggg...ggg..","..ggg...ggg..",".............","............."],[".............",".............","..GgG...GgG..","..GgG...GgG..","..GgG...GgG..",".............","............."],[".............",".............","..ggg...ggg..","..ggg...ggg..","..ggg...ggg..",".............","............."],[".............",".............","..ggggggggg..","..ggggggggg..","..ggggggggg..",".............","............."],[".............","..ggggggggg..","gg.ggggggg.gg","gg.ggggggg.gg","gg.ggggggg.gg","..gggcccggg..","............."],[".............","..ggggggggg..","gg.ggggggg.gg","gg.gggmggg.gg","gg.ggggggg.gg","..gggcccggg..","............."],[".............","..ggggggggg..","GG.ggggggg.GG","GG.ggggggg.GG","GG.ggggggg.GG",".............","............."],[".............","..ggggggggg..","ggggggggggggg","ggggggggggggg","..ggggggggg..",".............","............."],[".............",".............","....ggggg....","....ggggg....","....ggggg....",".............","............."],[".............",".............","....ggggg....","....ggggg....","....gegeg....",".............","............."],[".............",".............","....ggggg....","....ggggg....",".............",".............","............."],[".............",".............",".............",".....mgm.....",".............",".............","............."]]},djinn:{s:.1,pal:{i:8376552,I:4885176,w:15268095,e:1454666},layers:[["...........","...........","....III....","...........","..........."],["...........","...........","...IIIII...","...........","..........."],["...........","...IIIII...","..IIIIIII..","...IIIII...","..........."],["...........","..iiiiiii..",".iiiiiiiii.","..iiiiiii..","..........."],["...........","..iiiiiii..",".iiiiiiiii.","..iiiiiii..","..........."],["...........","..iiiiiii..","i.iiiiiii.i","..iiiiiii..","..........."],["...........","..iiiiiii..","w.iiiiiii.w","..iiiiiii..","..........."],["...........","..iiiiiii..","iiiiiiiiiii","..iiiiiii..","..........."],["...........","..iiiiiii..",".iiiiiiiii.","..iiiiiii..","..........."],["...........","...........","...iiiii...","...iiiii...","..........."],["...........","...........","...iiiii...","...ieiei...","..........."],["...........","...........","...iiiii...","...iiiii...","..........."],["...........","...........","...w.w.w...","...........","..........."],["...........","...........",".....w.....","...........","..........."]]},ghostknight:{s:.095,pal:{a:10134708,A:7239816,d:1712176,e:11462399,g:14207114,p:9063002},layers:[[".........",".........","..aa.aa..","..aa.aa..","........."],[".........",".........","..Aa.aA..","..Aa.aA..","........."],[".........",".........","..aa.aa..","..aa.aa..","........."],[".........",".........","..aaaaa..","..aaaaa..","........."],[".........",".........","..ggggg..","..ggggg..","........."],[".........","..aaaaa..","A.aaaaa.A","..aaaaa..","........."],[".........","..aaaaa..","a.aaaaa.a","..aaaaa..","........."],[".........","..aaaaa..","aaaaaaaaa","..ggggg..","........."],[".........",".........","...aaa...","...aaa...","........."],[".........","..aaaaa..",".aaaaaaa.","..addda..","........."],[".........","..aaaaa..",".aaaaaaa.","..aedea..","........."],[".........",".........","..aaaaa..","...aaa...","........."],["....p....","....p....","....p....","....p....","........."]]},armor:{s:.09,pal:{a:8883352,A:6186096,r:9067072,d:1316895,e:16734810},layers:[[".........",".........","..aa.aa..","..aa.aa..","........."],[".........",".........","..Ar.aA..","..Aa.aA..","........."],[".........",".........","..aa.aa..","..aa.aa..","........."],[".........",".........","...d.d...","...d.d...","........."],[".........",".........","..aaaaa..","..aaaaa..","........."],[".........","..aaaaa..","..aaaaa.A","..aaaaa..","........."],[".........","..araaa..","A.aaaaa.a","..aaaaa..","........."],[".........","..aaaaa..","aAaaaaaaa","..aaraa..","........."],[".........",".........","...aaa...","...aaa...","........."],[".........","..aaaaa..",".aaaaaaa.","..addda..","........."],[".........","..aaaaa..",".aaaaaaa.","..aedea..","........."],[".........",".........","..aaraa..","...aaa...","........."]]},spirit:{s:.09,pal:{h:5597340,H:8229060,d:1317424,e:10478591,r:4280970,w:13625855},layers:[[".........",".........","....w....",".........","........."],[".........",".........","...rrr...",".........","........."],[".........","...rrr...","..rrrrr..","...rrr...","........."],[".........","..rrrrr..",".rrrrrrr.","..rrrrr..","........."],[".........","..rrrrr..",".rrrrrrr.","..rrrrr..","........."],[".........","..hhhhh..",".hhhhhhh.","..hhhhh..","........."],[".........","..hhhhh..","hhhhhhhhh","..hhhhh..","........."],[".........","..hhhhh..",".hhhhhhh.","..hhhhh..","........."],[".........","..hhhhh..",".hhhhhhh.","..hdddh..","........."],[".........","..hhhhh..",".hhhhhhh.","..hdddh..","...e.e..."],[".........","...hhh...","..hhhhh..","...HhH...","........."],[".........",".........","...hhh...",".........","........."],[".........",".........","....H....",".........","........."]]}};function Va(i){return i.color&&/^#[0-9a-fA-F]{6}$/.test(i.color)?parseInt(i.color.slice(1),16):i.kind==="hero"?16765514:i.kind==="ally"?4638655:14711364}function ic(i){const e=(i.race||"").toLowerCase();return e.includes("dwarf")||e.includes("ドワーフ")?{hh:.9,ww:1.3,skin:14198904,hair:9067062,beard:10119748,brow:"bushy",noseS:.062,feet:1.15}:e.includes("elf")||e.includes("エルフ")?{hh:1.26,ww:.8,skin:15124384,hair:15261896,ear:!0,brow:"thin",noseS:.038,sideHair:!0}:e.includes("half")||e.includes("ハーフット")?{hh:.78,ww:1.02,skin:14858390,hair:10119738,cheeks:15243904,noseS:.05,feet:1.45,sideHair:!0}:e.includes("gnome")||e.includes("ノーム")?{hh:.84,ww:1.08,skin:14858390,hair:14209216,hat:6982344,noseS:.068,beard:14209216,beardS:.6,cheeks:14721160}:{hh:1.06,ww:1,skin:14922892,hair:6965806,noseS:.045}}function Vs(i){const e=i.name||"";return e.includes("ヒュドラ")?"hydra":e.includes("ドラゴン")?"dragon":e.includes("フロストジャイアント")?"frostgiant":e.includes("コロッサス")?"colossus":e.includes("だいてんし")?"seraph":e.includes("じゃしんぞう")?"idol":(i.size??1)>1||e.includes("ボス")?"boss":e.includes("ねずみ")?"rat":e.includes("ゴブリン")?"goblin":e.includes("コボルト")?"kobold":e.includes("まどうし")?"mage":e.includes("グール")?"ghoul":e.includes("ゴーレム")?"golem":e.includes("おくり")?"spirit":e.includes("さまよう鎧")?"armor":e.includes("へび")?"snake":e.includes("狼")?"wolf":e.includes("サラマンダー")?"salamander":e.includes("きのこ")?"shroom":e.includes("まじん")?"djinn":e.includes("ゴーストナイト")?"ghostknight":e.includes("術士")?"caster":e.includes("巣")?"nest":e.includes("番人")?"warden":e.includes("番兵")?"sentry":"beast"}function sc(i){const e=[],t=Vs(i),n=16734810,s=(a,o,c,l,f,p,h)=>{e.push({x:a,y:o,z:c,sx:l,sy:f,sz:p,c:h})},r=(a,o,c,l)=>s(a,o,c,l,l,l,n);if(t==="rat"){s(0,.2,0,.42,.24,.5,9076852),s(0,.22,.32,.28,.22,.22,9076852),s(-.1,.36,.34,.07,.1,.04,9076852),s(.1,.36,.34,.07,.1,.04,9076852),r(-.08,.24,.44,.05),r(.08,.24,.44,.05);for(const o of[-.15,.15])for(const c of[-.16,.18])s(o,.07,c,.08,.14,.08,5918532);s(0,.2,-.4,.05,.05,.34,12626064)}else if(t==="goblin"||t==="kobold"){const a=t==="goblin"?6986314:11571296;s(-.1,.16,0,.13,.3,.14,a),s(.1,.16,0,.13,.3,.14,a),s(0,.46,.04,.38,.34,.26,a),s(0,.74,.08,.3,.26,.28,a),s(-.22,.82,.02,.06,.16,.06,a),s(.22,.82,.02,.06,.16,.06,a),s(0,.7,.22,.1,.08,.08,a),r(-.08,.78,.2,.05),r(.08,.78,.2,.05),s(-.26,.48,.06,.09,.24,.12,a),s(.28,.5,.1,.09,.22,.12,a),s(.32,.72,.12,.09,.34,.09,8018482),s(.32,.92,.12,.15,.14,.15,6965800)}else if(t==="mage")s(0,.34,0,.5,.68,.4,4864618),s(0,.3,0,.56,.1,.46,4864618),s(0,.78,0,.3,.26,.3,2761280),s(0,.94,0,.18,.16,.18,4864618),r(-.07,.8,.15,.05),r(.07,.8,.15,.05),s(.3,.6,.1,.05,.8,.05,8018482),s(.3,1.04,.1,.18,.18,.18,16742970);else if(t==="ghoul")s(-.1,.16,0,.12,.3,.13,9083512),s(.1,.16,0,.12,.3,.13,9083512),s(0,.5,.04,.34,.4,.22,9083512),s(0,.82,.06,.26,.24,.26,9083512),r(-.07,.85,.18,.045),r(.07,.85,.18,.045),s(0,.78,.18,.16,.05,.05,2761760),s(-.26,.42,.1,.08,.4,.1,9083512),s(-.26,.2,.16,.1,.08,.06,14737616),s(.26,.42,.1,.08,.4,.1,9083512),s(.26,.2,.16,.1,.08,.06,14737616);else if(t==="golem")s(-.16*1.15,.2*1.15,0,.2*1.15,.4*1.15,.24*1.15,9079426),s(.16*1.15,.2*1.15,0,.2*1.15,.4*1.15,.24*1.15,9079426),s(0,.7*1.15,0,.6*1.15,.5*1.15,.4*1.15,9079426),s(0,.74*1.15,.2*1.15,.22,.2,.04,6184536),s(-.42*1.15,.72*1.15,0,.16*1.15,.5*1.15,.2*1.15,9079426),s(.42*1.15,.72*1.15,0,.16*1.15,.5*1.15,.2*1.15,9079426),s(0,1.02*1.15,0,.26*1.15,.22*1.15,.26*1.15,9079426),r(-.06*1.15,1.04*1.15,.16,.05),r(.06*1.15,1.04*1.15,.16,.05);else if(t==="wolf"){s(0,.34,-.05,.4,.3,.8,9348800),s(0,.46,.42,.28,.24,.26,9348800),s(0,.4,.6,.14,.14,.18,6980256),s(-.05,.32,.66,.03,.06,.03,15263968),s(.05,.32,.66,.03,.06,.03,15263968),s(-.09,.62,.38,.06,.12,.05,9348800),s(.09,.62,.38,.06,.12,.05,9348800),r(-.08,.49,.54,.045),r(.08,.49,.54,.045),s(-.08,.55,.53,.06,.02,.03,6980256),s(.08,.55,.53,.06,.02,.03,6980256);for(const c of[-.14,.14])for(const l of[-.3,.25])s(c,.11,l,.1,.22,.1,6980256);s(0,.44,-.52,.09,.09,.3,9348800)}else if(t==="snake")s(0,.08,0,.6,.16,.6,5937738),s(0,.2,0,.44,.14,.44,8373354),s(.05,.36,.08,.18,.22,.18,8373354),s(.05,.52,.14,.22,.16,.24,8373354),r(-.02,.55,.27,.04),r(.13,.55,.27,.04),s(.05,.48,.3,.04,.03,.1,16734810);else if(t==="salamander"){s(0,.2,0,.44,.24,.8,13658682),s(0,.26,.5,.3,.2,.26,13658682),r(-.09,.32,.62,.045),r(.09,.32,.62,.045);for(const c of[-.16,.16])for(const l of[-.26,.3])s(c,.08,l,.1,.16,.1,11030056);s(0,.36,-.1,.08,.1,.4,16753978),s(0,.24,-.56,.09,.09,.34,11030056)}else if(t==="shroom")s(0,.2,0,.3,.4,.3,13616288),s(0,.48,0,.7,.2,.7,14205018),s(0,.6,0,.44,.12,.44,14205018),s(-.2,.56,.18,.1,.06,.1,15918768),s(.18,.55,-.14,.1,.06,.1,15918768),s(.05,.66,.1,.08,.05,.08,15918768),r(-.08,.32,.16,.045),r(.08,.32,.16,.045);else if(t==="caster"){const a=i.element,o=a==="fire"?9058858:a==="ice"?2771594:a==="holy"?9075782:6969898,c=a==="fire"?16742970:a==="ice"?8376575:a==="holy"?16771496:14200906;s(0,.34,0,.5,.68,.4,o),s(0,.3,0,.56,.1,.46,o),s(0,.78,0,.3,.26,.3,te(o,.55)),s(0,.94,0,.18,.16,.18,o),r(-.07,.8,.15,.05),r(.07,.8,.15,.05),s(.3,.6,.1,.05,.8,.05,8018482),s(.3,1.04,.1,.18,.18,.18,c)}else if(t==="hydra"){s(0,.6,-.1,1.3,.8,1.1,5929530),s(0,1.05,-.1,.9,.3,.8,3822118);for(const f of[-.5,.5])for(const p of[-.5,.35])s(f,.14,p,.3,.28,.3,3822118);s(0,.5,-.85,.2,.2,.5,5929530),[[-.45,.15],[0,.35],[.45,.15]].forEach(([f,p],h)=>{const u=1.15+(h===1?.25:0);s(f,u-.25,.35+p*.4,.2,.5,.2,5929530),s(f,u+.05,.55+p*.4,.3,.24,.34,5929530),s(f,u-.02,.75+p*.4,.22,.1,.14,3822118),r(f-.08,u+.1,.68+p*.4,.05),r(f+.08,u+.1,.68+p*.4,.05),s(f,u+.2,.5+p*.4,.06,.1,.06,14209200)})}else if(t==="nest")s(0,.18,0,.62,.36,.62,11556938),s(0,.42,0,.4,.24,.4,11556938),s(0,.56,0,.22,.16,.22,3807766),r(-.18,.3,.3,.06),r(.2,.34,.22,.06),r(0,.22,.34,.05);else if(t==="boss"||t==="warden"||t==="sentry"){const a=t==="boss"?1.6:1.25,o=t==="boss"?16734858:t==="warden"?11561688:10133674;s(-.16*a,.2*a,0,.18*a,.4*a,.2*a,o),s(.16*a,.2*a,0,.18*a,.4*a,.2*a,o),s(0,.66*a,0,.5*a,.46*a,.34*a,o),s(0,1*a,0,.3*a,.26*a,.3*a,o),s(-.36*a,.68*a,0,.14*a,.44*a,.18*a,o),s(.36*a,.68*a,0,.14*a,.44*a,.18*a,o),r(-.08*a,1.02*a,.16*a,.06),r(.08*a,1.02*a,.16*a,.06),t==="boss"&&(s(-.15*a,1.2*a,.05,.08,.26,.08,15392976),s(.15*a,1.2*a,.05,.08,.26,.08,15392976)),t==="sentry"&&(s(.42*a,.74*a,.1,.05,.95,.05,9071162),s(.42*a,1.2*a,.1,.05,.2,.13,13028824))}else{const a=Va(i);s(0,.32,0,.5,.4,.62,a),s(0,.36,.42,.38,.32,.3,a),r(-.1,.42,.56,.06),r(.1,.42,.56,.06);for(const o of[-.18,.18])for(const c of[-.2,.22])s(o,.11,c,.11,.22,.11,2892832);s(0,.36,-.36,.08,.08,.22,a)}return e}function rc(i){var L,x,T,M;const e=[],t=Va(i),n=ic(i),s=n.hh,r=n.ww,a=Ma((L=i.equipment)==null?void 0:L.weapon),o=ml((x=i.equipment)==null?void 0:x.armor),c=gl((T=i.equipment)==null?void 0:T.accessory),l=5915174,f=3422796,p=13938487,h=(o==null?void 0:o.col)??12765910,u=(o==null?void 0:o.col2)??9081764,m=o!=null&&(o.tier==="chain"||o.tier==="plate"||o.tier==="dragon"),v=((a==null?void 0:a.sil)==="staff"||(a==null?void 0:a.sil)==="grimoire")&&!m,g=(((M=i.stats)==null?void 0:M.pie)??0)>=10,d=(S,R,D,G,I,V,B)=>{e.push({x:S,y:R,z:D,sx:G,sy:I,sz:V,c:B})},b=(S,R,D,G,I,V,B)=>d(S*r,R*s,D,G*r,I*s,V,B);if(v)b(0,.3,0,.5,.56,.34,te(t,.88)),b(0,.05,0,.58,.12,.42,te(t,.68));else{b(-.12,.34,0,.16,.3,.17,f),b(.12,.34,0,.16,.3,.17,f);const S=n.feet??1,R=o&&(o.tier==="plate"||o.tier==="dragon")?u:S>=1.3?n.skin:l;b(-.12,.09,.01,.18*S,.18,.22*S,R),b(.12,.09,.01,.18*S,.18,.22*S,R)}if(b(0,.49,0,.46,.06,.3,v?13214268:l),b(0,.7,0,.44,.4,.27,t),(o==null?void 0:o.tier)==="leather")b(0,.7,.02,.48,.36,.3,o.col),b(0,.86,0,.5,.06,.29,o.col2),b(-.14,.82,.02,.09,.22,.31,o.col2),b(.14,.82,.02,.09,.22,.31,o.col2);else if((o==null?void 0:o.tier)==="chain"){b(0,.7,.02,.49,.38,.3,o.col);for(const[S,R]of[[-.13,.62],[.01,.66],[.15,.62],[-.06,.75],[.08,.78],[-.15,.8],[.02,.57]])d(S*r,R*s,.165,.035,.035,.02,o.col2);b(0,.5,0,.5,.08,.32,o.col)}else if((o==null?void 0:o.tier)==="plate")b(0,.72,.02,.5,.4,.31,h),b(0,.84,.2,.28,.1,.02,t);else if((o==null?void 0:o.tier)==="dragon"){b(0,.72,.02,.5,.4,.31,o.col);for(const S of[.6,.68,.76,.84])for(const R of[-.15,0,.15])d(R*r,S*s,.175,.09,.05,.02,R===0!=(S===.68||S===.84)?te(o.col,.78):o.col);b(0,.88,.02,.52,.05,.33,o.col2),b(0,.53,.02,.52,.05,.33,o.col2)}(o==null?void 0:o.tier)==="plate"||(o==null?void 0:o.tier)==="dragon"?(b(-.32,.86,0,.2,.15,.23,h),b(.32,.86,0,.2,.15,.23,h)):(o==null?void 0:o.tier)==="chain"&&(b(-.3,.87,0,.16,.11,.2,o.col2),b(.3,.87,0,.16,.11,.2,o.col2)),g&&(d(0,.8*s,.16,.045,.13,.025,14927450),d(0,.84*s,.16,.11,.04,.025,14927450)),(c==null?void 0:c.kind)==="amulet"&&(d(0,.75*s,.168,.02,.12,.02,9077362),d(0,.69*s,.172,.07,.07,.03,c.col));const w=m?u:t;b(-.31,.72,0,.15,.27,.18,w),b(.31,.72,0,.15,.27,.18,w),(c==null?void 0:c.kind)==="bracer"&&d(-.31*r,.58*s,.01,.13,.07,.17,c.col),b(-.31,.52,.01,.11,.2,.15,n.skin),b(.31,.52,.01,.11,.2,.15,n.skin),b(-.31,.41,.03,.12,.1,.14,n.skin),b(.31,.41,.03,.12,.1,.14,n.skin),b(0,.9,0,.14,.06,.14,n.skin),b(0,1.02,0,.32,.28,.3,n.skin);const E=n.brow==="thin"?.032:.05;d(-.07*r,1.04*s,.16,.048,E,.03,1316895),d(.07*r,1.04*s,.16,.048,E,.03,1316895);const P=n.brow==="bushy"?.085:n.brow==="thin"?.058:.06,A=n.brow==="bushy"?.036:.02;if(d(-.07*r,1.095*s,.158,P,A,.024,n.hair),d(.07*r,1.095*s,.158,P,A,.024,n.hair),d(0,1.015*s,.168,n.noseS??.045,(n.noseS??.045)*.9,.035,te(n.skin,.86)),d(0,.955*s,.157,.07,.018,.022,10115664),n.cheeks&&(d(-.105*r,.995*s,.152,.05,.04,.024,n.cheeks),d(.105*r,.995*s,.152,.05,.04,.024,n.cheeks)),n.beard){const S=n.beardS??1;b(0,.955-.02*S,.13,.28,.16*S,.1,n.beard),S>=1&&b(0,.86,.13,.1,.1,.07,n.beard)}if(n.sideHair&&(b(-.17,1,.02,.05,.2,.26,n.hair),b(.17,1,.02,.05,.2,.26,n.hair)),n.ear&&(b(-.2,1.06,0,.05,.14,.05,n.skin),b(.2,1.06,0,.05,.14,.05,n.skin)),(o==null?void 0:o.tier)==="plate"?(b(0,1.06,0,.36,.26,.34,h),b(0,1,.17,.06,.2,.03,u),b(0,1.24,0,.07,.14,.36,13781834)):(o==null?void 0:o.tier)==="dragon"?(b(0,1.06,0,.36,.26,.34,o.col),b(0,1.21,0,.3,.06,.3,o.col2),d(-.17*r,1.26*s,.02,.05,.14,.05,15261124),d(.17*r,1.26*s,.02,.05,.14,.05,15261124)):(o==null?void 0:o.tier)==="chain"?(b(0,1.12,-.01,.35,.14,.33,o.col2),b(-.17,1,0,.04,.22,.3,o.col2),b(.17,1,0,.04,.22,.3,o.col2)):(o==null?void 0:o.tier)==="leather"&&!n.hat&&!v?(b(0,1.16,-.02,.34,.1,.32,n.hair),b(0,1.13,.155,.3,.045,.03,o.col2)):n.hat?(b(0,1.16,0,.2,.12,.2,n.hat),b(0,1.3,0,.08,.16,.08,n.hat)):v?(b(0,1.16,-.02,.37,.12,.35,te(t,.78)),b(0,1.24,-.1,.18,.1,.2,te(t,.68))):b(0,1.16,-.02,.34,.1,.32,n.hair),i.kind==="hero"){b(0,1.21,0,.36,.06,.34,16769354);for(const S of[[0,.17],[-.13,0],[.13,0]])d(S[0]*r,1.27*s,S[1],.05,.07,.05,16769354)}if(i.kind==="hero"&&b(0,.7,-.17,.42,.56,.04,9052208),(o==null?void 0:o.tier)==="shield"?(d(-.36*r,.68*s,.1,.07,.42,.34,o.col),d(-.36*r,.68*s,.28,.045,.16,.14,o.col2),d(-.36*r,.68*s,.1,.075,.06,.36,o.col2)):((o==null?void 0:o.tier)==="plate"||(o==null?void 0:o.tier)==="dragon")&&(d(-.36*r,.68*s,.1,.07,.4,.32,h),d(-.36*r,.68*s,.27,.04,.2,.16,t)),a){const S=.37*r,R=a.blade,D=a.grip,G=a.glow;if(a.sil==="club")d(S,.66*s,.06,.07,.5,.07,D),d(S,.92*s,.06,.11,.16,.11,R);else if(a.sil==="dagger")d(S,.62*s,.08,.05,.3,.05,R),d(S,.78*s,.08,.03,.1,.02,G??15331320),d(S,.46*s,.08,.14,.04,.08,p),d(S,.4*s,.08,.05,.1,.05,D);else if(a.sil==="sword"||a.sil==="greatsword"){const I=a.sil==="greatsword"?.13:a.big?.095:.075,V=a.sil==="greatsword"?.7:.62;d(S,.52*s+V/2+.06,.06,I,V,.075,R),d(S,.84*s,.1,.028,V*.72,.02,G??15331320),d(S,(.52+V)*s+.1,.06,.05,.09,.05,G??15331320),d(S,.52*s,.06,a.sil==="greatsword"?.28:.24,.05,.11,p),d(S,.44*s,.06,.055,.13,.055,D),d(S,.36*s,.06,.09,.07,.09,p)}else if(a.sil==="axe")d(S,.72*s,.06,.055,.72,.055,D),d(S+.1,1.02*s,.06,.2,.22,.07,R),d(S+.21,1.02*s,.06,.03,.3,.075,G??15331320),d(S,1.14*s,.06,.05,.08,.05,9081764);else if(a.sil==="halberd")d(S,.82*s,.06,.05,1.15,.05,D),d(S+.09,1.18*s,.06,.16,.18,.06,R),d(S,1.42*s,.06,.045,.16,.045,15331320),d(S-.07,1.18*s,.06,.08,.05,.05,9081764);else if(a.sil==="hammer")d(S,.72*s,.06,.065,.7,.065,D),d(S,1.1*s,.06,.26,.2,.17,R),G!=null&&(d(S+.06,1.1*s,.155,.05,.05,.02,G),d(S-.06,1.1*s,.155,.05,.05,.02,G));else if(a.sil==="staff")d(S,.68*s,.04,.05,.95,.05,D),d(S,.28*s,.04,.07,.05,.07,6967344),d(S,1.2*s,.04,.1,.1,.1,p),d(S,1.28*s,.04,.16,.16,.16,R),d(S,1.28*s,.04,.08,.22,.08,G??14218495);else if(a.sil==="grimoire")d(-.24*r,.72*s,.17,.2,.26,.07,R),d(-.24*r,.72*s,.21,.16,.2,.02,15129792),d(-.24*r,.72*s,.145,.09,.11,.025,G??p);else if(a.sil==="bow"){const I=G!=null?R:8018474;d(S,.7*s,.06,.05,.66,.06,I),d(S,1*s,.12,.04,.14,.1,I),d(S,.4*s,.12,.04,.14,.1,I),d(S-.02*r,.7*s,.06,.012,.6,.012,14734516),d(-.15*r,.82*s,-.21,.13,.34,.13,6965798),d(-.15*r,1.02*s,-.21,.09,.1,.09,15129e3),d(-.11*r,1.02*s,-.25,.06,.14,.06,13613182)}else a.sil==="sling"&&(d(S-.02*r,.5*s,.04,.08,.14,.08,D),d(S-.02*r,.58*s,.04,.03,.08,.03,5915174))}return e}function ac(i,e=!1){var a;const t=[];if(i.kind==="monster"){const o=Vs(i),c=va[o]?new Set(va[o]):null,l=tc[o];if(l){const u=l(),m=Ql(u.cells),v=e?1:2,g=v>1?ec(m,v):m,d={pos:[],nrm:[],col:[],idx:[]};if(Ha(d,g,u.s/v,0,0,0,u.jit),c)for(const[b,w]of m){if(!c.has(w))continue;const[E,P,A]=b.split(",").map(Number),L=u.s*1.5;t.push({x:(E+.5)*u.s,y:(P+.5)*u.s,z:(A+.5)*u.s,sx:L,sy:L,sz:L,c:w})}return{geo:ka(d),spots:t}}const f=nc[o];if(f){const u=V0(f,e?2:3);if(c){const{cells:m,w:v,d:g}=jl(f);for(const[d,b]of m){if(!c.has(b))continue;const[w,E,P]=d.split(",").map(Number),A=f.s*1.5;t.push({x:(w+.5)*f.s-v*f.s/2,y:(E+.5)*f.s,z:(P+.5)*f.s-g*f.s/2,sx:A,sy:A,sz:A,c:b})}}return{geo:u,spots:t}}const p=sc(i),h=o==="hydra"||o==="boss"?e?.055:.04:e?.05:.032;if(c)for(const u of p)c.has(u.c)&&t.push({x:u.x,y:u.y,z:u.z,sx:u.sx*1.12,sy:u.sy*1.12,sz:u.sz*1.12,c:u.c});return{geo:pl(p,h),spots:t}}const n=Ma((a=i.equipment)==null?void 0:a.weapon),s=new Set;(n==null?void 0:n.glow)!=null&&s.add(n.glow),n&&(n.sil==="staff"||n.sil==="grimoire")&&s.add(n.blade);const r=rc(i);if(s.size)for(const o of r)s.has(o.c)&&t.push({x:o.x,y:o.y,z:o.z,sx:o.sx*1.12,sy:o.sy*1.12,sz:o.sz*1.12,c:o.c});return{geo:pl(r,e?.045:.03),spots:t}}function oc(i,e){let t=0,n=0,s=0;if(i==="melee"){const r=e<.32?e/.32:1-(e-.32)/.68;t=.34*r,n=.3*r,s=Math.sin(e*Math.PI)*.32}else if(i==="shoot"){const r=Math.sin(Math.min(1,e/.5)*Math.PI);t=-.09*r,n=-.13*r}else if(i==="cast"){const r=Math.sin(e*Math.PI);t=-.06*r,n=-.16*r}else if(i==="windup"){const r=Math.sin(e*Math.PI);t=-.16*r,n=-.3*r}else if(i==="exhale"){const r=Math.sin(Math.min(1,e/.4)*Math.PI*.5)*(1-Math.max(0,(e-.55)/.45));t=.15*r,n=.26*r}else i==="heal"&&(n=-.09*Math.sin(e*Math.PI));return{lunge:t,tilt:n,yawOff:s}}function lc(i){const e=1-i,t=e*e;return{kb:.17*t,sxz:1+.07*t,sy:1-.12*t}}function cc(i){const e=Math.max(0,i),t=Math.min(1,e*1.6);return{ang:1.35*t*t,sink:.22*e,opacity:e<.55?1:1-(e-.55)/.45}}const qn={melee:300,shoot:320,cast:420,heal:420,windup:520,exhale:460},Z0=[{id:"floor",name:"床石",hint:"render-voxel.ts floorStones()／ENV[theme].floorA/B/floorAcc/crackP"},{id:"floor-high",name:"高所（段丘＋階段石）",hint:"render-voxel.ts floorStones(by)／stairStep()"},{id:"water",name:"水場",hint:"render-voxel.ts rebuild() water ブロック／ENV.water/waterDeep/sparkle"},{id:"wall",name:"壁",hint:"render-voxel.ts faceBricks()/capStones()／ENV.wallA/B/wallAcc"},{id:"wall-breakable",name:"壊せる壁",hint:"render-voxel.ts rebuild() breakable（系統色 0x9c6b3e）"},{id:"wall-locked",name:"鍵扉",hint:"render-voxel.ts rebuild() locked（系統色 0xd8a838）"},{id:"torch",name:"トーチの壁",hint:"render-voxel.ts rebuild() トーチ／ENV.flame/flameCore/torchN"},{id:"low",name:"胸壁（低い壁）",hint:"render-voxel.ts rebuild() t.low ブロック"},{id:"pillar",name:"柱",hint:"render-voxel.ts rebuild() t.pillar ブロック"},{id:"stairs",name:"降り階段",hint:"render-voxel.ts buildStairs()"},{id:"upstairs",name:"上り階段",hint:"render-voxel.ts rebuild() upstairs（金の段）"},{id:"chest",name:"宝箱",hint:"render-voxel.ts buildChest()"},{id:"chest-open",name:"宝箱（開封）",hint:"render-voxel.ts buildChest(opened=true)"},{id:"shrine-spring",name:"泉",hint:"render-voxel.ts buildShrine('spring')"},{id:"shrine-altar",name:"祭壇",hint:"render-voxel.ts buildShrine('altar')"},{id:"portal-return",name:"帰還装置",hint:"render-voxel.ts rebuild() portal=return ブロック"},{id:"portal-elevator",name:"エレベーター",hint:"render-voxel.ts rebuild() portal=elevator ブロック"},{id:"hazard",name:"危険床（火）",hint:"render-voxel.ts rebuild() t.hazard ブロック（系統色は 2D HAZ_COL と同じ）"},{id:"slip",name:"凍面",hint:"render-voxel.ts rebuild() floorFeat=slip"},{id:"pit",name:"空隙",hint:"render-voxel.ts rebuild() floorFeat=pit"},{id:"item",name:"落とし物",hint:"render-voxel.ts rebuild() t.item（自光 OCT）"},{id:"trap",name:"罠（露見）",hint:"render-voxel.ts rebuild() t.trap"},{id:"town-house-shop",name:"店（街・日よけ）",hint:"render-voxel.ts buildHouse()（fac=shop）／dungeon.ts genTown()（配置）"},{id:"town-house-equip",name:"装備屋（街）",hint:"render-voxel.ts buildHouse()（fac=equip・看板色 FAC_HEX）"},{id:"town-house-craft",name:"工房（街・煙突）",hint:"render-voxel.ts buildHouse()（fac=craft・炉の窓/煙突）"},{id:"town-house-heal",name:"宿（街・2階建て）",hint:"render-voxel.ts buildHouse()（fac=heal・tall）"},{id:"town-house-recruit",name:"酒場（街・出会い）",hint:"render-voxel.ts buildHouse()（fac=recruit）"},{id:"town-fountain",name:"噴水（広場の中心）",hint:"render-voxel.ts buildFountain()／dungeon.ts genTown()（deco=fountain）"},{id:"town-portal",name:"テーマ穴の門（火）",hint:"render-voxel.ts buildPortalGate()／色は dungeon.ts THEME_DEF.col と同系"},{id:"town-brazier",name:"かがり火",hint:"render-voxel.ts buildBrazier()（deco=brazier）"},{id:"town-tree",name:"植栽（庭木）",hint:"render-voxel.ts buildTree()（deco=tree）"},{id:"town-fence",name:"柵",hint:"render-voxel.ts buildFence()（deco=fence・宿場の境）"},{id:"town-road",name:"石畳の道",hint:"render-voxel.ts roadStones()（deco=road）"}];class $0{constructor(e,t){ve(this,"board");ve(this,"onPick");ve(this,"scene",new gh);ve(this,"camera",new Bt(46,1,.1,600));ve(this,"gl");ve(this,"canvas");ve(this,"group",new on);ve(this,"matCache",new Map);ve(this,"matECache",new Map);ve(this,"voxMat",new vs({color:16777215}));ve(this,"voxMatE",new vi({color:16777215}));ve(this,"voxBuf",[]);ve(this,"voxBufE",[]);ve(this,"env",Xn.plain);ve(this,"envKey","");ve(this,"ambL",null);ve(this,"sunL",null);ve(this,"fillL",null);ve(this,"heroL",null);ve(this,"groundM",null);ve(this,"_m4",new Je);ve(this,"_vc",new Fe);ve(this,"raycaster",new Vh);ve(this,"groundPlane",new Un(new O(0,1,0),0));ve(this,"camTarget",new O);ve(this,"wantTgt",new O);ve(this,"zoom",1);ve(this,"camYaw",Math.PI/2);ve(this,"camPitch",.57);ve(this,"W",56);ve(this,"H",34);ve(this,"inited",!1);ve(this,"raf",0);ve(this,"active",!1);ve(this,"g",null);ve(this,"v",null);ve(this,"fxGroup",new on);ve(this,"actorGrp",new Map);ve(this,"lastHitSeq",0);ve(this,"anims",[]);ve(this,"flashes",[]);ve(this,"parts",[]);ve(this,"ghosts",[]);ve(this,"nums",[]);ve(this,"dmgLayer",null);ve(this,"shakeT0",-1);ve(this,"shakeAmp",0);ve(this,"lastT",0);ve(this,"_v3",new O);ve(this,"lastActSeq",0);ve(this,"actAnims",[]);ve(this,"projs",[]);ve(this,"charges",[]);ve(this,"impactDelay",new Map);ve(this,"_q1",new Bn);ve(this,"_q2",new Bn);ve(this,"_ax",new O);ve(this,"mobile",!1);ve(this,"resizeFrames",0);ve(this,"bodyCache",new Map);ve(this,"glowCache",new Map);ve(this,"bodyMat",new vs({vertexColors:!0}));this.board=e,this.onPick=t}mount(){var e;this.scene.background=new Fe(1449e3),this.scene.fog=new Ua(1449e3,.04),this.gl=new G0({antialias:!0}),this.gl.setPixelRatio(Math.min(devicePixelRatio,2)),this.canvas=this.gl.domElement,this.canvas.style.display="none",this.canvas.style.position="absolute",this.canvas.style.left="0",this.canvas.style.top="0",this.canvas.style.borderRadius="0",(e=this.board.parentElement)==null||e.insertBefore(this.canvas,this.board.nextSibling),this.scene.add(this.group),this.scene.add(this.fxGroup),this.dmgLayer=document.createElement("div"),this.dmgLayer.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:30;overflow:hidden;",document.body.appendChild(this.dmgLayer),window.cdVox=()=>{const t=this.gl.info.render;return{draw:t.calls,tri:t.triangles}},window.cdVoxR=this,this.canvas.addEventListener("click",t=>{const n=this.screenToTile(t.clientX,t.clientY);n&&this.onPick(n)}),this.canvas.addEventListener("wheel",t=>{t.preventDefault(),this.zoom=Math.min(2.4,Math.max(.55,this.zoom+(t.deltaY>0?.1:-.1)))},{passive:!1}),addEventListener("resize",()=>{this.active&&this.resize(this.mobile)}),addEventListener("keydown",t=>{if(!this.active||!t.shiftKey)return;const n=t.key;if(n==="ArrowUp"||n==="w"||n==="ArrowDown"||n==="s"){t.preventDefault();const s=n==="ArrowUp"||n==="w";this.camPitch=Math.min(1.32,Math.max(.4,this.camPitch+(s?.08:-.08)))}}),this.loop()}resize(e){if(!this.gl)return;this.mobile=e;const t=innerWidth,n=innerHeight;this.gl.setSize(t,n),this.canvas.style.width=t+"px",this.canvas.style.height=n+"px",this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}render(e,t){this.g=e,this.v=t,this.rebuild(),this.consumeActs(),this.consumeHits()}screenToTile(e,t){var f,p,h;if(!this.canvas)return null;const n=this.canvas.getBoundingClientRect(),s=new Be((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);const r=(f=this.g)==null?void 0:f.actors.find(u=>u.kind==="hero"),a=r?(((h=(p=this.g.floor.tiles[r.pos.y])==null?void 0:p[r.pos.x])==null?void 0:h.height)??0)*$t:0;this.groundPlane.constant=-a;const o=new O;if(!this.raycaster.ray.intersectPlane(this.groundPlane,o))return null;const c=Math.round(o.x),l=Math.round(o.z);return c<0||l<0||c>=this.W||l>=this.H?null:{x:c,y:l}}dispose(){var e,t,n;this.active=!1,this.raf&&cancelAnimationFrame(this.raf),this.clearFx(),(e=this.dmgLayer)==null||e.remove(),(t=this.canvas)==null||t.remove(),(n=this.gl)==null||n.dispose()}setActive(e){this.active=e,e&&(this.resizeFrames=8),this.canvas&&(this.canvas.style.display=e?"block":"none"),e||this.clearFx()}shortLerp(e,t,n){const s=Math.PI*2;let r=(t-e)%s;return r>Math.PI&&(r-=s),r<-Math.PI&&(r+=s),e+r*n}loop(){var n,s;if(this.raf=requestAnimationFrame(()=>this.loop()),!this.active||!this.g)return;this.resizeFrames>0&&(this.resizeFrames--,this.resize(this.mobile));const e=this.g.actors.find(r=>r.kind==="hero");if(e){const r=e.facing||{dx:0,dy:1},a=Math.round(Math.atan2(r.dy,r.dx)/(Math.PI/2))*(Math.PI/2);this.camYaw=this.shortLerp(this.camYaw,a+Math.PI,.16);const o=(((s=(n=this.g.floor.tiles[e.pos.y])==null?void 0:n[e.pos.x])==null?void 0:s.height)??0)*$t;this.wantTgt.set(e.pos.x,.4+o,e.pos.y),this.camTarget.lerp(this.wantTgt,.25);const c=8.1*this.zoom,l=c*Math.cos(this.camPitch),f=c*Math.sin(this.camPitch);if(this.camera.position.set(this.camTarget.x+l*Math.cos(this.camYaw),this.camTarget.y+f,this.camTarget.z+l*Math.sin(this.camYaw)),this.camera.lookAt(this.camTarget),this.heroL){const p=performance.now()*.001;this.heroL.position.set(this.camTarget.x,this.camTarget.y+2.1,this.camTarget.z),this.heroL.intensity=this.env.heroI*(.92+.05*Math.sin(p*9.3)+.04*Math.sin(p*23.7))}}const t=performance.now();if(this.shakeT0>=0){const r=(t-this.shakeT0)/360;if(r>=1)this.shakeT0=-1;else if(r>=0){const a=this.shakeAmp*(1-r);this.camera.position.x+=Math.sin(t*.055)*a,this.camera.position.y+=Math.sin(t*.047+1.7)*a*.6}}this.tickFx(t),this.gl.render(this.scene,this.camera)}mat(e){let t=this.matCache.get(e);return t||(t=new vs({color:e}),this.matCache.set(e,t)),t}matE(e){let t=this.matECache.get(e);return t||(t=new vi({color:e}),this.matECache.set(e,t)),t}add(e,t,n,s,r,a,o){const c=new tt(Dt,this.mat(o));c.position.set(e,t,n),c.scale.set(s,r,a),this.group.add(c)}addG(e,t,n,s,r,a,o,c){const l=new tt(e,this.mat(c));l.position.set(t,n,s),l.scale.set(r,a,o),this.group.add(l)}addGE(e,t,n,s,r,a,o,c){const l=new tt(e,this.matE(c));l.position.set(t,n,s),l.scale.set(r,a,o),this.group.add(l)}vox(e,t,n,s,r,a,o){this.voxBuf.push(e,t,n,s,r,a,o)}voxE(e,t,n,s,r,a,o){this.voxBufE.push(e,t,n,s,r,a,o)}flushBuf(e,t){const n=e.length/7;if(!n)return;const s=new bh(Dt,t,n);for(let r=0;r<n;r++){const a=r*7;this._m4.makeScale(e[a+3],e[a+4],e[a+5]),this._m4.setPosition(e[a],e[a+1],e[a+2]),s.setMatrixAt(r,this._m4),s.setColorAt(r,this._vc.setHex(e[a+6]))}s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.frustumCulled=!1,this.group.add(s)}flushVox(){this.flushBuf(this.voxBuf,this.voxMat),this.voxBuf=[],this.flushBuf(this.voxBufE,this.voxMatE),this.voxBufE=[]}stairStep(e,t,n,s,r,a){const o=te(11581638,(.9+(e*17+t*31)%4*.04)*a),c=r-$t,l=r-$t*.5,f=l-c,p=(c+l)/2,h=.9,u=.5,m=.5+u/2;n!==0?this.vox(e+n*m,p,t,u,f,h,o):this.vox(e,p,t+s*m,h,f,u,o)}faceBricks(e,t,n,s,r,a,o,c,l,f,p,h=0,u=-1){const m=Wt/l,v=1/f,g=.04;for(let d=0;d<l;d++){const b=d%2?-v/2:0,w=(d+.5)*m+h;for(let E=-1;E<=f;E++){let P=-.5+b+E*v,A=P+v;P=Math.max(P,-.5),A=Math.min(A,.5);const L=A-P;if(L<.06)continue;const x=(P+A)/2,T=e*73+t*131+d*17+E*23>>>0;let M=Xt(r,a,(T>>7)%7/6);d===u?M=Xt(M,o,.85):c>0&&T%97<c*97&&(M=Xt(M,o,.7));const S=(.82+T%6*.056)*(d===0?.82:1),R=.09+(T>>4)%5*.016+(d===u?.03:0),D=L-g,G=m-g,I=te(M,S*p);n!==0?this.vox(e+n*.5,w,t+x,R,G,D,I):this.vox(e+x,w,t+s*.5,D,G,R,I)}}}capStones(e,t,n,s,r,a=0){const o=1/s,c=.04;for(let l=0;l<s;l++)for(let f=0;f<s;f++){const p=e*53+t*97+l*13+f*29>>>0,h=.88+p%5*.05;this.vox(e-.5+(l+.5)*o,Wt+.03+a,t-.5+(f+.5)*o,o-c,.1+(p>>3)%3*.025,o-c,te(n,h*r))}}floorStones(e,t,n,s=0,r=!1){const a=this.env,o=.05;s>0&&this.vox(e,s/2-.05,t,.96,s,.96,te(2239032,n)),this.vox(e,s-.085,t,.98,.06,.98,te(1317673,n));let c=e*374761393+t*668265263>>>0||1;const l=()=>(c^=c<<13,c^=c>>>17,c^=c<<5,c>>>=0,c/4294967296),f=2+(l()<.5?1:0),p=[];let h=0;for(let m=0;m<f;m++){const v=.6+l()*.9;p.push(v),h+=v}let u=-.5;for(let m=0;m<f;m++){const v=p[m]/h,g=1+(l()<.5?1:0),d=[];let b=0;for(let E=0;E<g;E++){const P=.6+l()*.9;d.push(P),b+=P}let w=-.5;for(let E=0;E<g;E++){const P=d[E]/b,A=.82+l()*.3,L=.055+l()*.075;let x=Xt(a.floorA,a.floorB,l());l()<a.accP&&(x=Xt(x,a.floorAcc,.7)),r&&(x=Xt(te(x,.82),1849941,.38)),this.vox(e+w+P/2,s-.06+L/2,t+u+v/2,P-o,L,v-o,te(x,A*n)),w+=P}u+=v}if(l()<a.crackP){const m=l()<.5,v=-.3+l()*.6,g=.3+l()*.45;this.vox(e+(m?v*.4:v),s+.005,t+(m?v:v*.4),m?g:.035,.11,m?.035:g,te(790551,n))}a.glowP>0&&l()<a.glowP&&n>=1&&this.voxE(e+(-.3+l()*.6),s+.03,t+(-.3+l()*.6),.055,.045,.055,te(a.glowCol,.75+l()*.25))}buildChest(e,t,n,s=0){this.add(e,s+.17,t,.52,.3,.42,n?4862496:8014376),this.add(e-.18,s+.17,t,.05,.34,.44,14726460),this.add(e+.18,s+.17,t,.05,.34,.44,14726460),n?(this.add(e,s+.42,t-.2,.54,.06,.16,6174752),this.add(e,s+.2,t,.32,.04,.32,16770976)):(this.add(e,s+.37,t,.54,.12,.44,6174752),this.add(e,s+.37,t,.56,.05,.46,14726460),this.add(e,s+.22,t+.22,.1,.12,.05,14726460))}buildShrine(e,t,n,s=0){n==="spring"?(this.add(e,s+.05,t,.72,.1,.72,5921362),this.add(e,s+.04,t,.5,.08,.5,2779802),this.addGE(Ot,e,s+.2,t,.18,.18,.18,10477823)):(this.add(e,s+.16,t,.5,.32,.5,6971992),this.add(e,s+.34,t,.34,.06,.34,4867648),this.addGE(Ot,e,s+.5,t,.22,.26,.22,13213951))}buildStairs(e,t,n=0){this.add(e,n-.64,t,.9,.06,.9,329484),this.add(e-.47,n-.3,t,.06,.7,.9,1317410),this.add(e+.47,n-.3,t,.06,.7,.9,1317410),this.add(e,n-.3,t+.47,.9,.7,.06,1317410);const s=5,r=.84/s;for(let a=0;a<s;a++){const o=t-.42+a*r,c=n-.05-a*(.64/s);this.add(e,c,o,.8,.06,r+.04,te(11450566,a%2?.82:1)),this.add(e,c-.07,o-r/2,.8,.13,.03,2765629)}this.addGE(Dt,e,n+.06,t-.47,.82,.05,.08,8307823)}roadStones(e,t,n){this.vox(e,-.085,t,.98,.06,.98,te(1776150,n));let s=e*668265263+t*374761393>>>0||1;const r=()=>(s^=s<<13,s^=s>>>17,s^=s<<5,s>>>=0,s/4294967296);for(let a=0;a<2;a++)for(let o=0;o<2;o++){let c=Xt(7236188,8353639,r());r()<.08&&(c=Xt(c,6779727,.6));const l=.05+r()*.035;this.vox(e-.25+o*.5,-.06+l/2,t-.25+a*.5,.44,l,.44,te(c,(.9+r()*.18)*n))}}townDirt(e,t){this.vox(e,-.07,t,.98,.09,.98,2892826)}buildFence(e,t,n,s,r,a){this.townDirt(e,t);const o=5980967,c=7163952;this.vox(e,.34,t,.14,.68,.14,o),this.vox(e,.71,t,.19,.07,.19,te(o,1.15));for(const[l,f,p]of[[n,1,0],[s,-1,0],[r,0,-1],[a,0,1]])if(l)for(const h of[.26,.5])f!==0?this.vox(e+f*.28,h,t,.5,.07,.09,te(c,h>.3?1.06:.94)):this.vox(e,h,t+p*.28,.09,.07,.5,te(c,h>.3?1.06:.94))}buildTree(e,t){this.townDirt(e,t);const n=e*73+t*131>>>0,s=r=>((n>>r)%5-2)*.04;this.vox(e,.06,t,.32,.1,.32,4010272),this.vox(e,.42,t,.16,.72,.16,6178090),this.vox(e+s(2),.92,t+s(4),.84,.5,.84,te(3958322,.92+n%5*.05)),this.vox(e+s(6),1.28,t+s(8),.6,.42,.6,te(4880956,.92+(n>>3)%5*.05)),this.vox(e+s(10),1.56,t+s(12),.34,.3,.34,te(5737030,.95+(n>>5)%4*.05))}buildBrazier(e,t){this.townDirt(e,t);const n=3683374,s=this.env;for(const[r,a]of[[-.16,-.16],[.16,-.16],[-.16,.16],[.16,.16]])this.vox(e+r,.16,t+a,.07,.32,.07,n);this.vox(e,.38,t,.46,.16,.46,te(n,1.1)),this.vox(e,.47,t,.52,.05,.52,te(n,1.3)),this.voxE(e,.51,t,.32,.08,.32,te(s.flame,.85)),this.voxE(e+.02,.62,t-.02,.18,.18,.18,s.flame),this.voxE(e,.75,t,.1,.12,.1,s.flameCore),this.vox(e,.005,t+0,.9,.02,.9,te(s.flame,.22))}buildFountain(e,t){const n=this.env,s=7763584;this.vox(e,.05,t,1,.1,1,te(s,.85));for(const[r,a,o,c]of[[0,-.43,.9,.14],[0,.43,.9,.14],[-.43,0,.14,.9],[.43,0,.14,.9]])this.vox(e+r,.26,t+a,o,.32,c,s);for(const[r,a]of[[-.43,-.43],[.43,-.43],[-.43,.43],[.43,.43]])this.vox(e+r,.3,t+a,.18,.4,.18,te(s,1.12));this.vox(e,.3,t,.68,.1,.68,n.water),this.voxE(e-.14,.37,t+.1,.34,.02,.14,te(n.sparkle,.8)),this.voxE(e+.16,.37,t-.14,.22,.02,.12,te(n.sparkle,.6)),this.vox(e,.62,t,.16,.55,.16,te(s,1.05)),this.vox(e,.92,t,.46,.08,.46,te(s,1.18)),this.voxE(e,1.16,t,.09,.42,.09,te(n.sparkle,.9));for(const[r,a]of[[-.2,.12],[.18,-.16],[.06,.2]])this.voxE(e+r,.66,t+a,.05,.16,.05,te(n.sparkle,.6))}buildPortalGate(e,t,n,s=!1){const r=n?{fire:14704698,ice:7317759,earth:13148256,holy:16771496}[n]??9425279:16761194;if(!s){this.vox(e,-.2,t,.8,.1,.8,460813);for(const[o,c,l,f]of[[0,-.44,.92,.08],[0,.44,.92,.08],[-.44,0,.08,.92],[.44,0,.08,.92]])this.voxE(e+o,-.02,t+c,l,.05,f,te(r,.8))}const a=5130840;for(const o of[-.42,.42])this.vox(e,.08,t+o,.28,.16,.28,te(a,.85)),this.vox(e,.85,t+o,.18,1.4,.18,a),this.vox(e,1.6,t+o,.24,.1,.24,te(a,1.2)),this.voxE(e,1.28,t+o,.09,.11,.09,r);this.vox(e,1.72,t,.24,.13,1.1,te(a,1.1)),this.addGE(Ot,e,1.92,t,.2,.26,.2,r)}buildHouse(e,t,n,s,r,a){const o={equip:14729312,heal:7268264,shop:14717770,craft:13208146,recruit:8369151},c=e*97+t*61>>>0,l=te(14272677,.88+c%5*.045),f=4863009,p=te(9061938,.85+(c>>3)%5*.06),h=e+(n-1)/2,u=t+(s-1)/2,m=n-.16,v=s-.16,g=a?a.y>t+s-1?1:-1:1,d=g>0?t+s-1+.42:t-.42,b=r==="heal",w=b?1.72:1.16,E=.24+w;this.vox(h,.12,u,m,.24,v,7039860),this.vox(h,.24+w/2,u,m-.05,w,v-.05,l);for(const[T,M]of[[e-.5+.14,t-.5+.14],[e+n-1+.5-.14,t-.5+.14],[e-.5+.14,t+s-1+.5-.14],[e+n-1+.5-.14,t+s-1+.5-.14]])this.vox(T,.24+w/2,M,.12,w,.12,f);this.vox(h,E-.05,u,m+.02,.1,v+.02,f),b&&this.vox(h,.24+w*.52,u,m+.01,.09,v+.01,f);const P=v/2+.24,A=4,L=(P-.16)/A,x=.15;for(let T=0;T<A;T++)this.vox(h,E+.04+(T+.5)*x,u,m+.3-T*.02,x,(P-T*L)*2,te(p,1-T*.05));if(this.vox(h,E+.04+A*x+.05,u,m+.2,.1,.3,te(p,.72)),a){const T=a.x;this.vox(T,.24,u+g*(v/2-.3),.66,.48,.4,te(7039860,1.05)),this.vox(T,.72,d+g*.06,.52,1,.1,4862496),this.vox(T,1.28,d+g*.07,.66,.12,.12,f),this.vox(T,.04,d+g*.3,.6,.08,.34,7828586),this.voxE(T-.4,1.36,d+g*.14,.09,.08,.09,this.env.flame),this.vox(T+.42,1.5,d+g*.14,.06,.06,.3,f),this.vox(T+.42,1.26,d+g*.3,.3,.3,.06,o[r]??13421772),this.vox(T+.42,1.26,d+g*.33,.14,.14,.03,te(o[r]??13421772,.4));for(let M=e;M<e+n;M++)M!==T&&(this.vox(M,.9,d+g*.04,.4,.46,.08,f),this.voxE(M,.9,d+g*.08,.3,.34,.04,r==="craft"?16752725:16767370),b&&(this.vox(M,1.62,d+g*.04,.36,.4,.08,f),this.voxE(M,1.62,d+g*.08,.26,.3,.04,16767370)))}if(r==="craft"){const T=e+n-1+.24,M=t+s-1-.2*g;this.vox(T,E/2+.6,M,.26,E+1.2,.26,5921378),this.vox(T,E+1.26,M,.34,.1,.34,4868690),this.voxE(T,E+1.34,M,.14,.08,.14,16747066)}if(r==="shop"&&a)for(let T=0;T<2;T++)for(let M=0;M<n*2;M++){const S=e-.5+.25+M*.5;S>e+n-1+.4||this.vox(S,1.5-T*.09,d+g*(.2+T*.26),.46,.06,.3,(M+T)%2?13130824:15129796)}}buildTownHouses(e){var n,s;const t=new Set;for(let r=0;r<this.H;r++)for(let a=0;a<this.W;a++){const o=e.tiles[r][a];if(!o.building||t.has(a+","+r))continue;const c=o.building;let l=a,f=a,p=r,h=r;const u=[[a,r]];for(t.add(a+","+r);u.length;){const[v,g]=u.pop();l=Math.min(l,v),f=Math.max(f,v),p=Math.min(p,g),h=Math.max(h,g);for(const[d,b]of xi){const w=v+d,E=g+b,P=(n=e.tiles[E])==null?void 0:n[w],A=w+","+E;P&&P.building===c&&!t.has(A)&&(t.add(A),u.push([w,E]))}}let m=null;for(let v=l;v<=f&&!m;v++)for(const g of[h+1,p-1]){const d=(s=e.tiles[g])==null?void 0:s[v];if(d&&d.facility===c){m={x:v,y:g};break}}this.buildHouse(l,p,f-l+1,h-p+1,c,m)}}meshIn(e,t,n,s,r,a,o,c){const l=new tt(Dt,this.mat(c));l.position.set(t,n,s),l.scale.set(r,a,o),e.add(l)}bodyFor(e,t=!1){var a,o,c,l;let n;if(e.kind==="monster"){const f=Vs(e);n=`m:${f}${f==="beast"?":"+(e.color??""):""}${f==="caster"?":"+(e.element??""):""}`}else{const f=Ma((a=e.equipment)==null?void 0:a.weapon),p=ml((o=e.equipment)==null?void 0:o.armor),h=gl((c=e.equipment)==null?void 0:c.accessory);n=`f:${e.kind}:${e.race??""}:${f?`${f.sil}.${f.blade}.${f.glow??""}${f.big?"B":""}`:""}:${(p==null?void 0:p.tier)??""}:${h?h.kind+h.col:""}:${e.color??""}:${(((l=e.stats)==null?void 0:l.pie)??0)>=10?1:0}`}const s=t?n+":lo":n;let r=this.bodyCache.get(s);if(!r){const f=ac(e,t);r=f.geo,this.bodyCache.set(s,r),this.glowCache.set(s,f.spots)}return{key:s,geo:r}}placeFigure(e,t,n=0,s=!1){const r=new on,a=e.facing||{dx:0,dy:1},o=((e.size??1)-1)/2,{key:c,geo:l}=this.bodyFor(e,s);r.add(new tt(l,this.bodyMat));const f=this.glowCache.get(c);if(f&&f.length){const h=Math.atan2(a.dx,a.dy),u=Math.cos(h),m=Math.sin(h);for(const v of f)this.voxE(e.pos.x+o+v.x*u+v.z*m,n+v.y,e.pos.y+o-v.x*m+v.z*u,v.sx,v.sy,v.sz,v.c)}r.rotation.y=Math.atan2(a.dx,a.dy),r.position.set(e.pos.x+o,n,e.pos.y+o),r.userData={bx:e.pos.x+o,by:n,bz:e.pos.y+o,ry:r.rotation.y,geo:l},this.actorGrp.set(e.id,r),e.dormant&&this.meshIn(r,0,1.25,0,.18,.18,.18,13218815),e.captured&&this.meshIn(r,0,.6,0,.74,.06,.74,13279578),t&&this.meshIn(r,0,1.42,0,.16,.16,.16,10478591);let p=1.64;(e.poison??0)>0&&(this.meshIn(r,0,p,0,.11,.11,.11,8376426),p+=.16),(e.paralyze??0)>0&&(this.meshIn(r,0,p,0,.11,.11,.11,16767050),p+=.16),(e.confused??0)>0&&(this.meshIn(r,0,p,0,.11,.11,.11,16747216),p+=.16),this.group.add(r)}rebuild(){var u,m,v,g,d,b,w,E,P,A,L,x,T;const e=this.g,t=this.v;if(!e)return;const n=e.floor,s=e.depth===0?"town":e.theme&&Xn[e.theme]?e.theme:"plain";s!==this.envKey&&(this.envKey=s,this.env=Xn[s],this.applyEnv()),this.inited||(this.W=n.w,this.H=n.h,this.setupStage(),this.inited=!0),this.group.traverse(M=>{M.isInstancedMesh&&M.dispose()}),this.scene.remove(this.group),this.group=new on,this.scene.add(this.group),this.actorGrp.clear();const r=M=>M.seen,a=M=>M.visible;for(let M=0;M<this.H;M++)for(let S=0;S<this.W;S++){const R=n.tiles[M][S];if(!r(R))continue;const D=(R.height??0)*$t;if(R.kind==="wall"){if(this.envKey==="town"){if(R.deco==="fence"){const q=(ne,ee)=>{var Re;const Te=(Re=n.tiles[M+ee])==null?void 0:Re[S+ne];return!!Te&&Te.kind==="wall"&&(Te.deco==="fence"||!!Te.building)};this.buildFence(S,M,q(1,0),q(-1,0),q(0,-1),q(0,1))}else R.deco==="tree"?this.buildTree(S,M):R.deco==="brazier"?this.buildBrazier(S,M):R.deco==="fountain"&&this.buildFountain(S,M);continue}const G=a(R),I=G?1:.5,V=this.env,B=Xt(V.wallA,V.wallB,.4);if(R.low){D>0&&this.vox(S,D/2-.05,M,.96,D,.96,te(2239032,I)),this.vox(S,D+.24,M,.92,.48,.92,te(te(B,.88),I)),this.vox(S,D+.51,M,.99,.08,.99,te(te(B,1.18),I));continue}if(R.pillar){this.floorStones(S,M,I,D),this.vox(S,D+.07,M,.62,.14,.62,te(te(B,.72),I)),this.vox(S,D+Wt*.5+.1,M,.38,Wt,.38,te(B,I)),this.vox(S,D+Wt+.14,M,.58,.12,.58,te(te(B,1.18),I));continue}const Z=R.breakable?10251070:R.locked?14198840:V.wallA,Q=R.breakable?te(10251070,.8):R.locked?te(14198840,.85):V.wallB,ie=R.breakable||R.locked?Z:V.wallAcc,ae=R.breakable||R.locked?0:V.wallAccP,xe=R.breakable?3811864:R.locked?4864530:V.wallCore,He=R.breakable?6:R.locked?4:5,st=R.breakable?4:R.locked?2:3,We=!R.breakable&&!R.locked&&V.band!=null?He-2:-1;this.vox(S,(Wt+D)/2,M,.96,Wt+D,.96,te(xe,I));for(const[q,ne]of xi){const ee=(u=n.tiles[M+ne])==null?void 0:u[S+q];ee&&r(ee)&&ee.kind!=="wall"&&this.faceBricks(S,M,q,ne,Z,Q,ie,ae,He,st,I,D,We)}if(this.capStones(S,M,te(Xt(Z,Q,.5),1.1),st,I,D),G&&!R.breakable&&!R.locked&&(S*61+M*167>>>0)%V.torchN===0)for(const[q,ne]of xi){const ee=(m=n.tiles[M+ne])==null?void 0:m[S+q];if(ee&&ee.kind==="floor"&&r(ee)){const Te=S+q*.5,Re=M+ne*.5;this.add(Te,D+.8,Re,.08,.2,.08,2891800),this.voxE(Te+q*.05,D+.98,Re+ne*.05,.12,.14,.12,V.flame),this.voxE(Te+q*.05,D+1.07,Re+ne*.05,.07,.09,.07,V.flameCore),this.vox(Te+q*.28,D+.02,Re+ne*.28,.5,.02,.5,te(V.flame,.28));break}}}else if(R.floorFeat==="pit")this.add(S,D-.5,M,.92,.1,.92,329485),this.add(S,D-.18,M,.98,.5,.05,1053725),this.add(S,D-.18,M,.05,.5,.98,1053725);else if(R.floorFeat==="water"){const G=a(R)?1:.5,I=this.env;this.vox(S,D-.3,M,.99,.08,.99,te(I.waterDeep,G)),this.vox(S,D-.16,M,.96,.1,.96,te(I.water,G)),a(R)&&((S*31+M*17&1)===0?this.voxE(S-.12,D-.1,M+.1,.42,.02,.2,te(I.sparkle,.8)):this.voxE(S+.14,D-.1,M-.12,.3,.02,.16,te(I.sparkle,.8)))}else{const G=a(R),I=G?1:.55,V=S===n.stairs.x&&M===n.stairs.y;if(!V)if(R.hazard){const B={fire:14704698,poison:8373354,ice:7317759,earth:10518608,holy:16771496}[R.hazard.element]??7317759;this.add(S,D-.06,M,.98,.08,.98,te(B,.4*I)),G?this.voxE(S,D-.015,M,.78,.035,.78,te(B,.92)):this.add(S,D-.015,M,.78,.035,.78,te(B,.5))}else if(R.floorFeat==="slip")this.add(S,D-.05,M,.98,.1,.98,te(10475775,I)),G&&(S*13+M*7&3)===0&&this.voxE(S+.1,D+.005,M-.08,.3,.015,.06,14217983);else if(R.floorFeat==="dark")this.add(S,D-.05,M,.98,.1,.98,329226);else if(this.envKey==="town"&&R.deco==="road"&&!R.hole)this.roadStones(S,M,I);else{let B=!1;for(const[Z,Q]of xi){const ie=(v=n.tiles[M+Q])==null?void 0:v[S+Z];if(ie&&ie.floorFeat==="water"){B=!0;break}}this.floorStones(S,M,I,D,B)}if(!V)for(const[B,Z]of xi){const Q=(g=n.tiles[M+Z])==null?void 0:g[S+B];Q&&r(Q)&&Q.kind==="floor"&&(Q.height??0)===(R.height??0)-1&&Q.floorFeat!=="pit"&&Q.floorFeat!=="water"&&this.stairStep(S,M,B,Z,D,a(R)?1:.55)}if(R.facility){const B=R.facility==="equip"?14729312:R.facility==="heal"?7268264:R.facility==="shop"?14717770:R.facility==="craft"?13208146:8369151;this.vox(S,D-.02,M,.76,.05,.76,te(B,.5)),this.voxE(S,D+.015,M,.22,.03,.22,te(B,.95))}if(R.hole&&this.buildPortalGate(S,M,R.hole),R.portal==="return"){const B=a(R)?1:.55;this.add(S,D+.04,M,.9,.08,.9,te(2761784,B));for(const[Z,Q,ie,ae]of[[-.36,0,.1,.8],[.36,0,.1,.8],[0,-.36,.8,.1],[0,.36,.8,.1]])this.add(S+Z,D+.14,M+Q,ie,.12,ae,te(14270563,B));this.addGE(Ot,S,D+.52,M,.3,.46,.3,te(16771496,B))}else if(R.portal==="elevator"){const B=a(R)?1:.55;this.add(S,D+.06,M,.92,.12,.92,te(9081764,B)),this.add(S-.4,D+.62,M-.4,.1,1.1,.1,te(6976386,B)),this.add(S+.4,D+.62,M+.4,.1,1.1,.1,te(6976386,B)),this.add(S,D+1.16,M,.98,.08,.2,te(12570850,B))}R.chest&&this.buildChest(S,M,R.chest.opened,D),R.shrine&&this.buildShrine(S,M,R.shrine,D),R.item&&this.addGE(Ot,S,D+.34,M,.62,.62,.62,11702236),R.trap&&!R.trap.hidden&&this.addG(Ot,S,D+.06,M,.7,.18,.7,14830410),R.oneway&&this.addG(Dt,S+R.oneway.dx*.28,D+.16,M+R.oneway.dy*.28,.22,.16,.22,10135224),R.warp&&this.addGE(Ot,S,D+.22,M,.5,.5,.5,5817066)}}const o=(M,S)=>{var R,D;return(((D=(R=n.tiles[S])==null?void 0:R[M])==null?void 0:D.height)??0)*$t};if(this.buildStairs(n.stairs.x,n.stairs.y,o(n.stairs.x,n.stairs.y)),this.envKey==="town"&&(this.buildPortalGate(n.stairs.x,n.stairs.y,null,!0),this.buildTownHouses(n)),n.upstairs&&n.depth>0){const M=n.upstairs,S=(d=n.tiles[M.y])==null?void 0:d[M.x];if(S&&(S.seen||S.visible)){const R=o(M.x,M.y);this.add(M.x,R+.12,M.y,.72,.24,.72,14270563),this.add(M.x,R+.32,M.y,.44,.18,.44,15720608)}}for(const M of n.zones){const S=M.flags.includes("silence")?5222564:M.flags.includes("buff")?7260280:M.flags.includes("debuff")?13785690:10120904;for(let R=M.rect.y;R<M.rect.y+M.rect.h;R++)for(let D=M.rect.x;D<M.rect.x+M.rect.w;D++){const G=(b=n.tiles[R])==null?void 0:b[D];G&&r(G)&&G.kind==="floor"&&this.add(D,o(D,R)+.03,R,.9,.03,.9,S)}}const c=n.front;if(c)for(let M=0;M<this.H;M++)for(let S=0;S<this.W;S++){const R=n.tiles[M][S];if(!r(R))continue;const D=c.axis==="x"?S:M;(c.dir>0?D<c.edge:D>c.edge)&&R.kind==="floor"&&this.add(S,o(S,M)+.05,M,.95,.05,.95,3108816)}for(const M of n.devices){const S=M.at,R=(w=n.tiles[S.y])==null?void 0:w[S.x];if(M.effect.kind==="dispenser"){R&&r(R)&&this.addG(Dt,S.x,o(S.x,S.y)+.3,S.y,.42,.5,.42,16743002);let D={x:S.x,y:S.y};for(let G=0;G<M.effect.range;G++){D={x:D.x+M.effect.dir.dx,y:D.y+M.effect.dir.dy};const I=(E=n.tiles[D.y])==null?void 0:E[D.x];if(!I||!r(I)||I.kind==="wall")break;this.add(D.x,o(D.x,D.y)+.04,D.y,.6,.05,.6,13781311)}}else if(M.effect.cells)for(const D of M.effect.cells){const G=(P=n.tiles[D.y])==null?void 0:P[D.x];if(!G||!r(G))continue;const I=o(D.x,D.y);M.effect.kind==="bridge"?G.floorFeat!=="pit"&&(this.add(D.x,I+.04,D.y,.84,.08,.98,8015394),this.add(D.x,I+.09,D.y,.9,.04,.16,6175256),this.add(D.x,I+.09,D.y-.4,.9,.04,.16,6175256)):G.kind==="floor"?this.add(D.x,I+.07,D.y,.9,.14,.9,7319146):(this.add(D.x,I+.62,D.y,.18,1.24,.96,13279578),this.add(D.x,I+.62,D.y,.96,1.24,.18,13279578))}M.effect.kind!=="dispenser"&&R&&r(R)&&this.addG(Ot,S.x,o(S.x,S.y)+.28,S.y,.5,.5,.5,M.on?9425279:13279578)}const l=n.sealRoom;if(l&&l.sealed)for(const M of l.doors){const S=(A=n.tiles[M.y])==null?void 0:A[M.x];if(!S||!r(S))continue;const R=o(M.x,M.y);this.add(M.x,R+.62,M.y,.2,1.24,.96,16734826),this.add(M.x,R+.62,M.y,.96,1.24,.2,16734826)}const f=(t==null?void 0:t.aimPreview)??null;if(f){const M=f.arc?7915775:16765286;for(const S of f.tiles)this.add(S.x,o(S.x,S.y)+.12,S.y,.9,.04,.9,M);for(const S of f.aoeCells)this.add(S.x,o(S.x,S.y)+.14,S.y,.92,.05,.92,16742972);if(f.target){const S=f.target.friendlyFire?16734810:M;this.add(f.target.pos.x,o(f.target.pos.x,f.target.pos.y)+.5,f.target.pos.y,1.02,1.02,1.02,S)}}const p=(t==null?void 0:t.selected)??null;for(const M of e.actors)M.alive&&M.kind==="monster"&&(M.size??1)>1&&this.bodyFor(M,!1);const h=(L=e.actors.find(M=>M.kind==="hero"))==null?void 0:L.pos;for(const M of e.actors){if(!M.alive)continue;const S=(x=n.tiles[M.pos.y])==null?void 0:x[M.pos.x];if(M.faction!=="party"&&!(S&&a(S)))continue;const R=((S==null?void 0:S.height)??0)*$t,D=h?Math.max(Math.abs(M.pos.x-h.x),Math.abs(M.pos.y-h.y))>11:!1;this.placeFigure(M,M.id===p,R,D);const G=vc(M).maxHp,I=Math.max(0,Math.min(1,M.hp/G)),V=((M.size??1)-1)/2,B=M.pos.x+V,Z=M.pos.y+V,Q=R+1.5+((M.size??1)-1)*.75;if(I<1&&(this.add(B,Q,Z,.72,.07,.13,2764602),this.add(B-.36*(1-I),Q,Z,Math.max(.02,.72*I),.09,.15,M.kind==="monster"?16738922:7268264)),M.windup){this.add(B,Q+.24,Z,.18,.3,.18,16730682);for(const ie of M.windup.cells){const ae=(T=n.tiles[ie.y])==null?void 0:T[ie.x];ae&&r(ae)&&this.add(ie.x,o(ie.x,ie.y)+.1,ie.y,.9,.06,.9,13778751)}}M.kind==="monster"&&(M.introT??0)>0&&(this.addGE(Dt,B,Q+.86,Z,.11,.34,.11,16742986),this.addGE(Dt,B,Q+.56,Z,.12,.12,.12,16742986))}if(this.envKey==="town")for(const M of n.npcs??[])this.placeFigure({id:"npc:"+M.name,kind:"ally",race:M.race,color:M.color,pos:M.pos,facing:M.facing,stats:{pie:0},equipment:{}},!1,0);this.flushVox()}buildSample(e,t){const n=this.group,s=this.voxBuf,r=this.voxBufE,a=this.env,o=new on;this.group=o,this.voxBuf=[],this.voxBufE=[],this.env=t.startsWith("town")?Xn.town:Xn[e]??Xn.plain;const c=this.env,l=u=>{for(let m=0;m<=2;m++)for(let v=0;v<=2;v++)(!u||!u(v,m))&&this.floorStones(v,m,1)},f=(u,m)=>u===1&&m===1,p=(u,m)=>{l(f);const v=u?10251070:m?14198840:c.wallA,g=u?te(10251070,.8):m?te(14198840,.85):c.wallB,d=u||m?v:c.wallAcc,b=u||m?0:c.wallAccP,w=u?3811864:m?4864530:c.wallCore,E=u?6:m?4:5,P=u?4:m?2:3,A=!u&&!m&&c.band!=null?E-2:-1;this.vox(1,Wt/2,1,.96,Wt,.96,w);for(const[L,x]of xi)this.faceBricks(1,1,L,x,v,g,d,b,E,P,1,0,A);this.capStones(1,1,te(Xt(v,g,.5),1.1),P,1)},h=Xt(c.wallA,c.wallB,.4);switch(t){case"floor":l();break;case"floor-high":{for(let u=0;u<=2;u++)this.floorStones(0,u,1),this.floorStones(1,u,1),this.floorStones(2,u,1,$t);this.stairStep(2,1,-1,0,$t,1);break}case"water":{for(let u=0;u<=2;u++)for(let m=0;m<=2;m++)f(m,u)||this.floorStones(m,u,1,0,Math.abs(m-1)+Math.abs(u-1)===1);this.vox(1,-.3,1,.99,.08,.99,c.waterDeep),this.vox(1,-.16,1,.96,.1,.96,c.water),this.voxE(1-.12,-.1,1+.1,.42,.02,.2,te(c.sparkle,.8));break}case"wall":p(!1,!1);break;case"wall-breakable":p(!0,!1);break;case"wall-locked":p(!1,!0);break;case"torch":{p(!1,!1);const u=1,m=1.5;this.add(u,.8,m,.08,.2,.08,2891800),this.voxE(u,.98,m+.05,.12,.14,.12,c.flame),this.voxE(u,1.07,m+.05,.07,.09,.07,c.flameCore),this.vox(u,.02,m+.28,.5,.02,.5,te(c.flame,.28));break}case"low":{l(f),this.vox(1,.24,1,.92,.48,.92,te(h,.88)),this.vox(1,.51,1,.99,.08,.99,te(h,1.18));break}case"pillar":{l(),this.vox(1,.07,1,.62,.14,.62,te(h,.72)),this.vox(1,Wt*.5+.1,1,.38,Wt,.38,h),this.vox(1,Wt+.14,1,.58,.12,.58,te(h,1.18));break}case"stairs":l(f),this.buildStairs(1,1);break;case"upstairs":l(),this.add(1,.12,1,.72,.24,.72,14270563),this.add(1,.32,1,.44,.18,.44,15720608);break;case"chest":l(),this.buildChest(1,1,!1);break;case"chest-open":l(),this.buildChest(1,1,!0);break;case"shrine-spring":l(),this.buildShrine(1,1,"spring");break;case"shrine-altar":l(),this.buildShrine(1,1,"altar");break;case"portal-return":{l(),this.add(1,.04,1,.9,.08,.9,2761784);for(const[u,m,v,g]of[[-.36,0,.1,.8],[.36,0,.1,.8],[0,-.36,.8,.1],[0,.36,.8,.1]])this.add(1+u,.14,1+m,v,.12,g,14270563);this.addGE(Ot,1,.52,1,.3,.46,.3,16771496);break}case"portal-elevator":{l(),this.add(1,.06,1,.92,.12,.92,9081764),this.add(1-.4,.62,1-.4,.1,1.1,.1,6976386),this.add(1+.4,.62,1+.4,.1,1.1,.1,6976386),this.add(1,1.16,1,.98,.08,.2,12570850);break}case"hazard":{l(f);const u=14704698;this.add(1,-.06,1,.98,.08,.98,te(u,.4)),this.voxE(1,-.015,1,.78,.035,.78,te(u,.92));break}case"slip":l(f),this.add(1,-.05,1,.98,.1,.98,10475775),this.voxE(1+.1,.005,1-.08,.3,.015,.06,14217983);break;case"pit":l(f),this.add(1,-.5,1,.92,.1,.92,329485),this.add(1,-.18,1,.98,.5,.05,1053725),this.add(1,-.18,1,.05,.5,.98,1053725);break;case"item":l(),this.addGE(Ot,1,.34,1,.62,.62,.62,11702236);break;case"trap":l(),this.addG(Ot,1,.06,1,.7,.18,.7,14830410);break;case"town-road":for(let u=0;u<=2;u++)for(let m=0;m<=2;m++)this.roadStones(m,u,1);break;case"town-fence":l(),this.buildFence(0,1,!0,!1,!1,!1),this.buildFence(1,1,!0,!0,!1,!1),this.buildFence(2,1,!1,!0,!1,!1);break;case"town-tree":l(f),this.buildTree(1,1);break;case"town-brazier":l(f),this.buildBrazier(1,1);break;case"town-fountain":l(f),this.buildFountain(1,1);break;case"town-portal":l(),this.buildPortalGate(1,1,"fire");break;default:if(t.startsWith("town-house-")){for(let u=0;u<=2;u++)this.roadStones(u,2,1);this.buildHouse(0,0,3,2,t.slice(11),{x:1,y:2})}break}return this.flushVox(),this.group=n,this.voxBuf=s,this.voxBufE=r,this.env=a,o}setImpact(e,t,n){const s=e+","+t;this.impactDelay.set(s,Math.max(this.impactDelay.get(s)??0,n))}consumeActs(){var r;this.impactDelay.clear();const e=(r=this.g)==null?void 0:r.acts;if(!e||!e.length)return;const t=this.g.floor,n=performance.now(),s=(a,o)=>{var c,l;return(((l=(c=t.tiles[o])==null?void 0:c[a])==null?void 0:l.height)??0)*$t};for(const a of e){if(a.seq<=this.lastActSeq)continue;this.lastActSeq=a.seq;const o=a.a,c=((o.size??1)-1)/2,l=(o.size??1)-1,f=s(o.pos.x,o.pos.y),p=o.pos.x+c,h=o.pos.y+c;if(a.kind==="melee")this.actAnims.push({id:o.id,kind:"melee",t0:n,dur:qn.melee,dir:a.dir}),a.to&&this.setImpact(a.to.x,a.to.y,95);else if(a.kind==="shoot"&&a.to){this.actAnims.push({id:o.id,kind:"shoot",t0:n,dur:qn.shoot,dir:a.dir});const m=Math.max(1,Math.max(Math.abs(a.to.x-o.pos.x),Math.abs(a.to.y-o.pos.y))),v=m*(a.arc?58:36);this.spawnProj(a.arc?"stone":"arrow",void 0,p,f+.8+l*.5,h,a.to.x,s(a.to.x,a.to.y)+.55,a.to.y,n+140,v,a.arc?.55+m*.09:0),this.setImpact(a.to.x,a.to.y,140+v)}else if(a.kind==="cast"&&a.to){const m=dl[a.element??""]??14202111;this.actAnims.push({id:o.id,kind:"cast",t0:n,dur:qn.cast,dir:a.dir}),this.spawnCharge(p,f+1.3+l*.6,h,m,260);const v=Math.max(1,Math.max(Math.abs(a.to.x-o.pos.x),Math.abs(a.to.y-o.pos.y))),g=v*42;this.spawnProj("bolt",m,p,f+1.1+l*.5,h,a.to.x,s(a.to.x,a.to.y)+.55,a.to.y,n+260,g,a.arc?.6+v*.1:0);const d=260+g,b=a.aoe??0;for(let w=-b;w<=b;w++)for(let E=-b;E<=b;E++)this.setImpact(a.to.x+E,a.to.y+w,d+Math.max(Math.abs(E),Math.abs(w))*30);b>0&&this.spawnBurst(a.to.x,s(a.to.x,a.to.y)+.5,a.to.y,10+b*4,!1,d,[m,16777215,te(m,.7)])}else if(a.kind==="heal"&&a.to)this.actAnims.push({id:o.id,kind:"heal",t0:n,dur:qn.heal}),this.spawnHeal(a.to.x,s(a.to.x,a.to.y),a.to.y);else if(a.kind==="windup")this.actAnims.push({id:o.id,kind:"windup",t0:n,dur:qn.windup,dir:a.dir});else if(a.kind==="breath"&&a.cells){this.actAnims.push({id:o.id,kind:"exhale",t0:n,dur:qn.exhale,dir:a.dir});const u=dl[a.element??"poison"]??9428074;for(const m of a.cells){const g=80+Math.max(Math.abs(m.x-p),Math.abs(m.y-h))*70;this.spawnBreathPuff(m.x,s(m.x,m.y),m.y,u,n+g),this.setImpact(m.x,m.y,g+60)}}}}spawnProj(e,t,n,s,r,a,o,c,l,f,p){let h;e==="arrow"?(h=new tt(Dt,this.matE(15260864)),h.scale.set(.045,.045,.42)):e==="stone"?(h=new tt(Dt,this.mat(10133674)),h.scale.set(.15,.13,.15)):(h=new tt(Ot,this.matE(t??14202111)),h.scale.set(.24,.24,.24)),h.visible=!1,this.fxGroup.add(h),this.projs.push({m:h,kind:e,color:t,x0:n,y0:s,z0:r,x1:a,y1:o,z1:c,t0:l,dur:Math.max(90,f),arcH:p})}spawnCharge(e,t,n,s,r){const a=new vi({color:s,transparent:!0,opacity:.9,depthWrite:!1,blending:Ps}),o=new tt(Ot,a);o.position.set(e,t,n),o.scale.setScalar(.02),this.fxGroup.add(o),this.charges.push({m:o,mat:a,t0:performance.now(),dur:r})}spawnHeal(e,t,n){const s=performance.now();for(let r=0;r<10;r++){const a=new tt(Dt,this.matE(r%2?12447944:16771496)),o=.045+Math.random()*.045;a.scale.set(o,o,o),a.visible=!1,a.position.set(e+(Math.random()-.5)*.62,t+.1+Math.random()*.5,n+(Math.random()-.5)*.62),this.fxGroup.add(a),this.parts.push({m:a,vx:(Math.random()-.5)*.15,vy:.65+Math.random()*.5,vz:(Math.random()-.5)*.15,t0:s+r*42,life:640,noG:!0})}}spawnBreathPuff(e,t,n,s,r){for(let a=0;a<5;a++){const o=new tt(Dt,this.matE(a===0?te(s,1.25):s)),c=.07+Math.random()*.09;o.scale.set(c,c,c),o.visible=!1,o.position.set(e+(Math.random()-.5)*.7,t+.15+Math.random()*.75,n+(Math.random()-.5)*.7),this.fxGroup.add(o),this.parts.push({m:o,vx:(Math.random()-.5)*.9,vy:.35+Math.random()*1,vz:(Math.random()-.5)*.9,t0:r+Math.random()*70,life:360+Math.random()*180,noG:!0})}}consumeHits(){var n,s,r;const e=(n=this.g)==null?void 0:n.hits;if(!e||!e.length)return;const t=this.g.floor;for(const a of e){if(a.seq<=this.lastHitSeq)continue;this.lastHitSeq=a.seq;const o=a.a,c=((o.size??1)-1)/2,l=(((r=(s=t.tiles[o.pos.y])==null?void 0:s[o.pos.x])==null?void 0:r.height)??0)*$t,f=o.pos.x+c,p=o.pos.y+c,h=l+.7+((o.size??1)-1)*.5,u=o.faction==="party",m=this.impactDelay.get(o.pos.x+","+o.pos.y)??(a.dir?95:0);a.died||(this.anims.push({id:o.id,t0:performance.now()+m,dir:a.dir}),this.addFlash(o.id,u,m)),this.spawnBurst(f,h,p,a.died?14+((o.size??1)-1)*8:7,u,m),this.addDmgNum(f,h+.55,p,a.dmg,u,a.died,m),a.died&&this.spawnGhost(o,f,l,p,a.dir,m),(a.dmg>=12||a.died&&(o.size??1)>=2)&&(this.shakeT0=performance.now()+m,this.shakeAmp=a.died&&(o.size??1)>=2?.11:.07)}}addFlash(e,t,n=0){this.flashes.push({id:e,party:t,m:null,mat:null,t0:performance.now()+n})}spawnBurst(e,t,n,s,r,a=0,o){const c=o??(r?[16738906,16756890,13778751]:[16766814,16747082,13778751]);for(let l=0;l<s;l++){const f=new tt(Dt,this.matE(c[l%c.length])),p=.045+Math.random()*.05;f.scale.set(p,p,p),f.visible=a<=0,f.position.set(e+(Math.random()-.5)*.34,t+(Math.random()-.5)*.4,n+(Math.random()-.5)*.34),this.fxGroup.add(f);const h=Math.random()*Math.PI*2,u=1.1+Math.random()*2.2;this.parts.push({m:f,vx:Math.cos(h)*u,vy:1.7+Math.random()*2.6,vz:Math.sin(h)*u,t0:performance.now()+a,life:380+Math.random()*260})}}addDmgNum(e,t,n,s,r,a,o=0){if(!this.dmgLayer)return;const c=document.createElement("div");c.textContent=String(s);const l=Math.min(38,(a?20:15)+s*.7);c.style.cssText=`position:absolute;transform:translate(-50%,-50%);font:800 ${l.toFixed(0)}px ui-rounded,system-ui,sans-serif;color:${r?"#ff7a6a":a?"#ffe9a8":"#ffd75e"};text-shadow:0 2px 4px rgba(0,0,0,.85),0 0 10px rgba(0,0,0,.5);white-space:nowrap;opacity:${o>0?0:1};`,this.dmgLayer.appendChild(c),this.nums.push({el:c,t0:performance.now()+o,wx:e,wy:t,wz:n,life:a?950:800})}spawnGhost(e,t,n,s,r,a=0){const{geo:o}=this.bodyFor(e,!1),c=this.bodyMat.clone();c.transparent=!0;const l=new on,f=new tt(o,c),p=e.facing||{dx:0,dy:1};f.rotation.y=Math.atan2(p.dx,p.dy),l.add(f),l.position.set(t,n,s),this.fxGroup.add(l);const h=r&&(r.dx||r.dy)?r:p,u=new O(h.dy,0,-h.dx).normalize();this.ghosts.push({wrap:l,mat:c,t0:performance.now()+a,axis:u,base:n,dur:(e.size??1)>=2?900:620})}tickFx(e){var s,r,a,o,c,l,f;const t=Math.min(.05,(e-(this.lastT||e))/1e3);this.lastT=e;for(let p=this.actAnims.length-1;p>=0;p--){const h=this.actAnims[p],u=this.actorGrp.get(h.id),m=e-h.t0;if(m>h.dur||!u){if(u){const x=u.userData;u.position.set(x.bx,x.by,x.bz),u.rotation.set(0,x.ry??0,0)}this.actAnims.splice(p,1);continue}if(m<0)continue;const v=m/h.dur,g=u.userData,d=h.dir??{dx:0,dy:1},b=Math.max(1,Math.hypot(d.dx,d.dy)),w=d.dx/b,E=d.dy/b,{lunge:P,tilt:A,yawOff:L}=oc(h.kind,v);u.position.set(g.bx+w*P,g.by,g.bz+E*P),this._ax.set(E,0,-w),this._q1.setFromAxisAngle(this._ax,A),this._q2.setFromAxisAngle(k0,(g.ry??0)+L),u.quaternion.copy(this._q1).multiply(this._q2)}for(let p=this.anims.length-1;p>=0;p--){const h=this.anims[p],u=this.actorGrp.get(h.id),m=e-h.t0;if(m>300||!u){if(u){const d=u.userData;u.position.set(d.bx,d.by,d.bz),u.scale.set(1,1,1)}this.anims.splice(p,1);continue}if(m<0)continue;const v=lc(m/300),g=u.userData;u.position.set(g.bx+(((s=h.dir)==null?void 0:s.dx)??0)*v.kb,g.by,g.bz+(((r=h.dir)==null?void 0:r.dy)??0)*v.kb),u.scale.set(v.sxz,v.sy,v.sxz)}for(let p=this.projs.length-1;p>=0;p--){const h=this.projs[p],u=e-h.t0;if(u<0){h.m.visible=!1;continue}const m=u/h.dur;if(m>=1){this.fxGroup.remove(h.m),this.projs.splice(p,1);continue}h.m.visible=!0;const v=h.x0+(h.x1-h.x0)*m,g=h.z0+(h.z1-h.z0)*m,d=h.y0+(h.y1-h.y0)*m+h.arcH*4*m*(1-m);if(h.m.position.set(v,d,g),h.kind==="arrow"){const b=Math.min(1,m+.06),w=h.y0+(h.y1-h.y0)*b+h.arcH*4*b*(1-b);h.m.lookAt(h.x0+(h.x1-h.x0)*b,w,h.z0+(h.z1-h.z0)*b)}else h.m.rotation.x+=t*7,h.m.rotation.y+=t*9;if(h.kind==="bolt"&&Math.random()<.65){const b=new tt(Dt,this.matE(h.color??14202111)),w=.045+Math.random()*.04;b.scale.set(w,w,w),b.position.set(v,d,g),this.fxGroup.add(b),this.parts.push({m:b,vx:0,vy:.12,vz:0,t0:e,life:190,noG:!0})}}for(let p=this.charges.length-1;p>=0;p--){const h=this.charges[p],u=(e-h.t0)/h.dur;if(u>=1){this.fxGroup.remove(h.m),h.mat.dispose(),this.charges.splice(p,1);continue}h.m.scale.setScalar(.05+.3*u),h.m.rotation.y+=t*6,h.mat.opacity=.9*(.45+.55*u)}for(let p=this.flashes.length-1;p>=0;p--){const h=this.flashes[p],u=e-h.t0;if(u>210){(o=(a=h.m)==null?void 0:a.parent)==null||o.remove(h.m),(c=h.mat)==null||c.dispose(),this.flashes.splice(p,1);continue}if(!(u<0)){if(!h.m){const m=this.actorGrp.get(h.id),v=(l=m==null?void 0:m.userData)==null?void 0:l.geo;if(!m||!v){this.flashes.splice(p,1);continue}h.mat=new vi({color:h.party?16734794:16777215,transparent:!0,opacity:.7,depthWrite:!1,blending:Ps}),h.m=new tt(v,h.mat),h.m.scale.set(1.02,1.02,1.02),m.add(h.m)}h.mat.opacity=.7*(1-u/210)}}for(let p=this.parts.length-1;p>=0;p--){const h=this.parts[p],u=e-h.t0;if(u>h.life){this.fxGroup.remove(h.m),this.parts.splice(p,1);continue}if(u<0){h.m.visible=!1;continue}h.m.visible=!0,h.noG?(h.m.position.x+=h.vx*t,h.m.position.y+=h.vy*t,h.m.position.z+=h.vz*t):(h.vy-=9.5*t,h.m.position.x+=h.vx*t,h.m.position.y+=h.vy*t,h.m.position.z+=h.vz*t,h.m.position.y<.03&&h.vy<0&&(h.m.position.y=.03,h.vy*=-.35,h.vx*=.7,h.vz*=.7));const m=1-u/h.life;h.m.scale.setScalar(Math.max(.012,.095*m))}for(let p=this.ghosts.length-1;p>=0;p--){const h=this.ghosts[p],u=(e-h.t0)/h.dur;if(u>=1){this.fxGroup.remove(h.wrap),h.mat.dispose(),this.ghosts.splice(p,1);continue}const m=cc(u);h.wrap.quaternion.setFromAxisAngle(h.axis,m.ang),h.wrap.position.y=h.base-m.sink,h.mat.opacity=m.opacity}const n=this.nums.length?(f=this.canvas)==null?void 0:f.getBoundingClientRect():null;for(let p=this.nums.length-1;p>=0;p--){const h=this.nums[p],u=e-h.t0;if(u>h.life||!n){h.el.remove(),this.nums.splice(p,1);continue}if(u<0){h.el.style.opacity="0";continue}const m=u/h.life;this._v3.set(h.wx,h.wy+m*.85,h.wz).project(this.camera),h.el.style.left=((this._v3.x*.5+.5)*n.width+n.left).toFixed(1)+"px",h.el.style.top=((-this._v3.y*.5+.5)*n.height+n.top).toFixed(1)+"px";const v=u<130?1.35-.35*(u/130):1;h.el.style.transform=`translate(-50%,-50%) scale(${v.toFixed(3)})`,h.el.style.opacity=String(m<.5?1:1-(m-.5)/.5)}}clearFx(){var e,t,n;for(const s of this.flashes)(t=(e=s.m)==null?void 0:e.parent)==null||t.remove(s.m),(n=s.mat)==null||n.dispose();for(const s of this.parts)this.fxGroup.remove(s.m);for(const s of this.ghosts)this.fxGroup.remove(s.wrap),s.mat.dispose();for(const s of this.nums)s.el.remove();for(const s of this.projs)this.fxGroup.remove(s.m);for(const s of this.charges)this.fxGroup.remove(s.m),s.mat.dispose();this.anims.length=0,this.flashes.length=0,this.parts.length=0,this.ghosts.length=0,this.nums.length=0,this.actAnims.length=0,this.projs.length=0,this.charges.length=0,this.impactDelay.clear(),this.shakeT0=-1}setupStage(){this.ambL=new Gh(16777215,.36),this.scene.add(this.ambL),this.sunL=new zo(16777215,.7),this.sunL.position.set(this.W*.2,55,this.H*.05),this.scene.add(this.sunL),this.fillL=new zo(10466520,.26),this.fillL.position.set(this.W*.9,22,this.H*1.05),this.scene.add(this.fillL),this.heroL=new Bh(16761470,3.2,13,2),this.scene.add(this.heroL),this.groundM=new tt(new Ki(this.W+6,this.H+6),new vs({color:1778224,fog:!0})),this.groundM.rotation.x=-Math.PI/2,this.groundM.position.set((this.W-1)/2,-.12,(this.H-1)/2),this.scene.add(this.groundM),this.applyEnv()}applyEnv(){var n,s;const e=this.env;(s=(n=this.scene.background)==null?void 0:n.setHex)==null||s.call(n,e.bg);const t=this.scene.fog;t&&(t.color.setHex(e.bg),t.density=e.fogD),this.ambL&&(this.ambL.color.setHex(e.amb),this.ambL.intensity=e.ambI,this.sunL.color.setHex(e.sun),this.sunL.intensity=e.sunI,this.fillL.color.setHex(e.fill),this.fillL.intensity=e.fillI,this.heroL.color.setHex(e.heroCol),this.groundM.material.color.setHex(e.ground))}}const em=Object.freeze(Object.defineProperty({__proto__:null,ACT_DUR:qn,ENV:Xn,GLOW_HEX:va,LARGE_BUILDERS:tc,MON_VOX:nc,TILE_SAMPLES:Z0,VoxelRenderer:$0,actPose:oc,bodyColorOf:Va,buildActorBody:ac,figureBoxes:rc,ghostPose:cc,hitPose:lc,monTypeOf:Vs,monsterBoxes:sc,raceSpecOf:ic},Symbol.toStringTag,{value:"Module"}));export{Gh as A,Ci as B,Fe as C,zo as D,Xn as E,on as G,tc as L,tt as M,Ba as O,Bt as P,Bn as Q,gh as S,Z0 as T,$0 as V,G0 as W,j0 as a,ac as b,vs as c,vi as d,va as e,nc as f,qn as g,ei as h,Ps as i,O as j,cc as k,oc as l,Vs as m,lc as n,em as r};
