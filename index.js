// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Number.POSITIVE_INFINITY,t=Number,n=t.NEGATIVE_INFINITY;function i(r){return r===e||r===n}var a=Math.floor;function o(r){return a(r)===r}function u(r){return o(r/2)}function c(r){return u(r>0?r-1:r+1)}var f=Math.sqrt;function s(r){return Math.abs(r)}var l="function"==typeof Object.defineProperty?Object.defineProperty:null,p=Object.defineProperty;function y(r){return"number"==typeof r}function g(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function d(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+g(i):g(i)+r,n&&(r="-"+r)),r}var h=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!y(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=d(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=d(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===v.call(r.specifier)?v.call(t):h.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var b=Math.abs,m=String.prototype.toLowerCase,E=String.prototype.toUpperCase,A=String.prototype.replace,_=/e\+(\d)$/,S=/e-(\d)$/,T=/^(\d+)$/,U=/^(\d+)e/,I=/\.0$/,j=/\.0*e/,x=/(\..*[^0])0*e/;function k(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":b(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=A.call(t,x,"$1e"),t=A.call(t,j,"e"),t=A.call(t,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=A.call(t,_,"e+0$1"),t=A.call(t,S,"e-0$1"),r.alternate&&(t=A.call(t,T,"$1."),t=A.call(t,U,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===E.call(r.specifier)?E.call(t):m.call(t)}function F(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var N=String.fromCharCode,O=Array.isArray;function V(r){return r!=r}function L(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function P(r){var e,t,n,i,a,o,u,c,f,s,l,p,y;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if("string"==typeof(n=r[c]))o+=n;else{if(e=void 0!==n.precision,!(n=L(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,V(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,V(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!V(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=V(a)?String(n.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=k(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,l=n.width,p=n.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+F(y):F(y)+s)),o+=n.arg||"",u+=1}return o}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function G(r){var e,t,n,i;for(t=[],i=0,n=$.exec(r);n;)(e=r.slice(i,$.lastIndex-n[0].length)).length&&t.push(e),t.push(C(n)),i=$.lastIndex,n=$.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function R(r){var e,t;if("string"!=typeof r)throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[G(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return P.apply(null,e)}var H=Object.prototype,W=H.toString,M=H.__defineGetter__,Z=H.__defineSetter__,Y=H.__lookupGetter__,B=H.__lookupSetter__,X=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?p:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===W.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===W.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Y.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=H,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&M&&M.call(r,e,t.get),o&&Z&&Z.call(r,e,t.set),r};function q(r,e,t){X(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return z&&"symbol"==typeof Symbol.toStringTag}var D,K=Object.prototype.toString,Q=Object.prototype.hasOwnProperty,rr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof rr?rr.toStringTag:"",tr=J()?function(r){var e,t,n,i,a;if(null==r)return K.call(r);t=r[er],a=er,e=null!=(i=r)&&Q.call(i,a);try{r[er]=void 0}catch(e){return K.call(r)}return n=K.call(r),e?r[er]=t:delete r[er],n}:function(r){return K.call(r)},nr="function"==typeof Uint32Array,ir="function"==typeof Uint32Array?Uint32Array:null,ar="function"==typeof Uint32Array?Uint32Array:void 0;D=function(){var r,e,t;if("function"!=typeof ir)return!1;try{e=new ir(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(nr&&t instanceof Uint32Array||"[object Uint32Array]"===tr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or,ur=D,cr="function"==typeof Float64Array,fr="function"==typeof Float64Array?Float64Array:null,sr="function"==typeof Float64Array?Float64Array:void 0;or=function(){var r,e,t;if("function"!=typeof fr)return!1;try{e=new fr([1,3.14,-3.14,NaN]),t=e,r=(cr&&t instanceof Float64Array||"[object Float64Array]"===tr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr=or,yr="function"==typeof Uint8Array,gr="function"==typeof Uint8Array?Uint8Array:null,dr="function"==typeof Uint8Array?Uint8Array:void 0;lr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,256,257]),t=e,r=(yr&&t instanceof Uint8Array||"[object Uint8Array]"===tr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr,vr=lr,wr="function"==typeof Uint16Array,br="function"==typeof Uint16Array?Uint16Array:null,mr="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br(e=[1,3.14,-3.14,65536,65537]),t=e,r=(wr&&t instanceof Uint16Array||"[object Uint16Array]"===tr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Er,Ar={uint16:hr,uint8:vr};(Er=new Ar.uint16(1))[0]=4660;var _r,Sr,Tr=52===new Ar.uint8(Er.buffer)[0];!0===Tr?(_r=1,Sr=0):(_r=0,Sr=1);var Ur={HIGH:_r,LOW:Sr},Ir=new pr(1),jr=new ur(Ir.buffer),xr=Ur.HIGH,kr=Ur.LOW;function Fr(r,e,t,n){return Ir[0]=r,e[n]=jr[xr],e[n+t]=jr[kr],e}function Nr(r){return Fr(r,[0,0],1,0)}q(Nr,"assign",Fr);var Or=!0===Tr?0:1,Vr=new pr(1),Lr=new ur(Vr.buffer);function Pr(r,e){return Vr[0]=r,Lr[Or]=e>>>0,Vr[0]}function $r(r){return 0|r}var Cr,Gr,Rr=2147483647,Hr=2147483648,Wr=!0===Tr?1:0,Mr=new pr(1),Zr=new ur(Mr.buffer);function Yr(r){return Mr[0]=r,Zr[Wr]}!0===Tr?(Cr=1,Gr=0):(Cr=0,Gr=1);var Br={HIGH:Cr,LOW:Gr},Xr=new pr(1),qr=new ur(Xr.buffer),zr=Br.HIGH,Jr=Br.LOW;function Dr(r,e){return qr[zr]=r,qr[Jr]=e,Xr[0]}var Kr=[0,0];function Qr(r,e){var t,n;return Nr.assign(r,Kr,1,0),t=Kr[0],t&=Rr,n=Yr(e),Dr(t|=n&=Hr,Kr[1])}var re=1072693247,ee=1e300,te=1e-300,ne=!0===Tr?1:0,ie=new pr(1),ae=new ur(ie.buffer);function oe(r,e){return ie[0]=r,ae[ne]=e>>>0,ie[0]}var ue=1023,ce=1048575,fe=1048576,se=1072693248,le=536870912,pe=524288,ye=20,ge=9007199254740992,de=.9617966939259756,he=.9617967009544373,ve=-7.028461650952758e-9,we=[1,1.5],be=[0,.5849624872207642],me=[0,1.350039202129749e-8],Ee=1.4426950408889634,Ae=1.4426950216293335,_e=1.9259629911266175e-8,Se=1023,Te=-1023,Ue=-1074,Ie=22250738585072014e-324,je=4503599627370496;function xe(e,t,n,a){return r(e)||i(e)?(t[a]=e,t[a+n]=0,t):0!==e&&s(e)<Ie?(t[a]=e*je,t[a+n]=-52,t):(t[a]=e,t[a+n]=0,t)}q((function(r){return xe(r,[0,0],1,0)}),"assign",xe);var ke=2146435072,Fe=2220446049250313e-31,Ne=2148532223,Oe=[0,0],Ve=[0,0];function Le(t,a){var o,u;return 0===a||0===t||r(t)||i(t)?t:(xe(t,Oe,1,0),t=Oe[0],a+=Oe[1],a+=function(r){var e=Yr(r);return(e=(e&ke)>>>20)-ue|0}(t),a<Ue?Qr(0,t):a>Se?t<0?n:e:(a<=Te?(a+=52,u=Fe):u=1,Nr.assign(t,Ve,1,0),o=Ve[0],o&=Ne,u*Dr(o|=a+ue<<20,Ve[1])))}var Pe=.6931471805599453,$e=1048575,Ce=1048576,Ge=1071644672,Re=20,He=.6931471824645996,We=-1.904654299957768e-9,Me=1072693247,Ze=1105199104,Ye=1139802112,Be=1083179008,Xe=1072693248,qe=1083231232,ze=3230714880,Je=31,De=1e300,Ke=1e-300,Qe=8008566259537294e-32,rt=[0,0],et=[0,0];function tt(t,a){var u,l,p,y,g,d,h,v,w,b,m,E,A,_;if(r(t)||r(a))return NaN;if(Nr.assign(a,rt,1,0),g=rt[0],0===rt[1]){if(0===a)return 1;if(1===a)return t;if(-1===a)return 1/t;if(.5===a)return f(t);if(-.5===a)return 1/f(t);if(2===a)return t*t;if(3===a)return t*t*t;if(4===a)return(t*=t)*t;if(i(a))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:s(r)<1==(t===e)?0:e}(t,a)}if(Nr.assign(t,rt,1,0),y=rt[0],0===rt[1]){if(0===y)return function(r,t){return t===n?e:t===e?0:t>0?c(t)?r:0:c(t)?Qr(e,r):e}(t,a);if(1===t)return 1;if(-1===t&&c(a))return-1;if(i(t))return t===n?tt(-0,-a):a<0?0:e}if(t<0&&!1===o(a))return(t-t)/(t-t);if(p=s(t),u=y&Rr|0,l=g&Rr|0,h=g>>>Je|0,d=(d=y>>>Je|0)&&c(a)?-1:1,l>Ze){if(l>Ye)return function(r,e){return(Yr(r)&Rr)<=re?e<0?ee*ee:te*te:e>0?ee*ee:te*te}(t,a);if(u<Me)return 1===h?d*De*De:d*Ke*Ke;if(u>Xe)return 0===h?d*De*De:d*Ke*Ke;m=function(r,e){var t,n,i,a,o,u,c;return a=(i=e-1)*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333)),t=(u=i*_e-a*Ee)-((n=Pr(n=(o=Ae*i)+u,0))-o),r[0]=n,r[1]=t,r}(et,p)}else m=function(r,e,t){var n,i,a,o,u,c,f,s,l,p,y,g,d,h,v,w,b,m,E,A,_;return m=0,t<fe&&(m-=53,t=Yr(e*=ge)),m+=(t>>ye)-ue|0,t=(E=t&ce|0)|se|0,E<=235662?A=0:E<767610?A=1:(A=0,m+=1,t-=fe),o=Pr(i=(w=(e=oe(e,t))-(f=we[A]))*(b=1/(e+f)),0),n=(t>>1|le)+pe,c=oe(0,n+=A<<18),v=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=Pr(c=3+(a=o*o)+(v+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),l=Pr(l=(w=o*c)+(b=u*c+(v-(c-3-a))*i),0),p=he*l,d=(y=ve*l+(b-(l-w))*de+me[A])-((g=Pr(g=p+y+(s=be[A])+(h=m),0))-h-s-p),r[0]=g,r[1]=d,r}(et,p,u);if(E=(b=(a-(v=Pr(a,0)))*m[0]+a*m[1])+(w=v*m[0]),Nr.assign(E,rt,1,0),A=$r(rt[0]),_=$r(rt[1]),A>=Be){if(0!=(A-Be|_))return d*De*De;if(b+Qe>E-w)return d*De*De}else if((A&Rr)>=qe){if(0!=(A-ze|_))return d*Ke*Ke;if(b<=E-w)return d*Ke*Ke}return E=function(r,e,t){var n,i,a,o,u,c,f,s,l,p;return l=((s=r&Rr|0)>>Re)-ue|0,f=0,s>Ge&&(i=oe(0,((f=r+(Ce>>l+1)>>>0)&~($e>>(l=((f&Rr)>>Re)-ue|0)))>>>0),f=(f&$e|Ce)>>Re-l>>>0,r<0&&(f=-f),e-=i),r=$r(r=Yr(c=1-((c=(a=(i=Pr(i=t+e,0))*He)+(o=(t-(i-e))*Pe+i*We))*(n=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<Re>>>0)>>Re<=0?Le(c,f):oe(c,r)}(A,w,b),d*E}var nt=Math.ceil,it=308,at=-308,ot=-324,ut=9007199254740992,ct=1e308;function ft(t,n){var a,o;return r(t)||r(n)||i(n)?NaN:i(t)||0===t||n<ot||s(t)>ut&&n<=0?t:n>it?t<=0?-0:e:n<at?(a=tt(10,-(n+it)),i(o=t*ct*a)?t:nt(o)/ct/a):i(o=t*(a=tt(10,-n)))?t:nt(o)/a}function st(r){return"number"==typeof r}var lt=t.prototype.toString,pt=J();function yt(r){return"object"==typeof r&&(r instanceof t||(pt?function(r){try{return lt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===tr(r)))}function gt(r){return st(r)||yt(r)}function dt(r,e){if(!(this instanceof dt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!st(r))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",r));if(!st(e))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return X(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),X(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}return q(gt,"isPrimitive",st),q(gt,"isObject",yt),q(dt,"BYTES_PER_ELEMENT",8),q(dt.prototype,"BYTES_PER_ELEMENT",8),q(dt.prototype,"byteLength",16),q(dt.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),q(dt.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r})),function(r,e){return new dt(ft(function(r){return r.re}(r),e),ft(function(r){return r.im}(r),e))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).cceiln=e();
//# sourceMappingURL=index.js.map
