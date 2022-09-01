// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function e(r){return r===n||r===t}var u=Math.floor;function i(r){return u(r)===r}function o(r){return i(r/2)}function f(r){return o(r>0?r-1:r+1)}var a=Math.sqrt;function c(r){return Math.abs(r)}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var l=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var p="function"==typeof Symbol?Symbol.toStringTag:"";var A=y&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,i;if(null==r)return l.call(r);t=r[p],i=p,n=null!=(u=r)&&v.call(u,i);try{r[p]=void 0}catch(n){return l.call(r)}return e=l.call(r),n?r[p]=t:delete r[p],e}:function(r){return l.call(r)},w="function"==typeof Uint32Array;var b="function"==typeof Uint32Array?Uint32Array:null;var U,h="function"==typeof Uint32Array?Uint32Array:void 0;U=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(w&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var m=U,I="function"==typeof Float64Array;var N="function"==typeof Float64Array?Float64Array:null;var s,d="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N([1,3.14,-3.14,NaN]),t=n,r=(I&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var F=s,S="function"==typeof Uint8Array;var g="function"==typeof Uint8Array?Uint8Array:null;var H,O="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var r,n,t;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,256,257]),t=n,r=(S&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var E=H,j="function"==typeof Uint16Array;var T="function"==typeof Uint16Array?Uint16Array:null;var G,L="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,65536,65537]),t=n,r=(j&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M,W={uint16:G,uint8:E};(M=new W.uint16(1))[0]=4660;var P,V,Y=52===new W.uint8(M.buffer)[0];!0===Y?(P=1,V=0):(P=0,V=1);var _={HIGH:P,LOW:V},q=new F(1),x=new m(q.buffer),k=_.HIGH,z=_.LOW;function B(r,n){return q[0]=n,r[0]=x[k],r[1]=x[z],r}function C(r,n){return 1===arguments.length?B([0,0],r):B(r,n)}var D=!0===Y?0:1,J=new F(1),K=new m(J.buffer);function Q(r,n){return J[0]=r,K[D]=n>>>0,J[0]}function R(r){return 0|r}var X,Z,$=!0===Y?1:0,rr=new F(1),nr=new m(rr.buffer);function tr(r){return rr[0]=r,nr[$]}!0===Y?(X=1,Z=0):(X=0,Z=1);var er={HIGH:X,LOW:Z},ur=new F(1),ir=new m(ur.buffer),or=er.HIGH,fr=er.LOW;function ar(r,n){return ir[or]=r,ir[fr]=n,ur[0]}var cr=[0,0];function yr(r,n){var t,e;return C(cr,r),t=cr[0],t&=2147483647,e=tr(n),ar(t|=e&=2147483648,cr[1])}var lr=!0===Y?1:0,vr=new F(1),pr=new m(vr.buffer);function Ar(r,n){return vr[0]=r,pr[lr]=n>>>0,vr[0]}var wr=[1,1.5],br=[0,.5849624872207642],Ur=[0,1.350039202129749e-8];function hr(n,t){return r(t)||e(t)?(n[0]=t,n[1]=0,n):0!==t&&c(t)<22250738585072014e-324?(n[0]=4503599627370496*t,n[1]=-52,n):(n[0]=t,n[1]=0,n)}var mr=[0,0],Ir=[0,0];function Nr(u,i){var o,f;return 0===i||0===u||r(u)||e(u)?u:(function(r,n){1===arguments.length?hr([0,0],r):hr(r,n)}(mr,u),i+=mr[1],i+=function(r){var n=tr(r);return(n=(2146435072&n)>>>20)-1023|0}(u=mr[0]),i<-1074?yr(0,u):i>1023?u<0?t:n:(i<=-1023?(i+=52,f=2220446049250313e-31):f=1,C(Ir,u),o=Ir[0],o&=2148532223,f*ar(o|=i+1023<<20,Ir[1])))}var sr=1e300,dr=1e-300,Fr=[0,0],Sr=[0,0];function gr(u,o){var y,l,v,p,A,w,b,U,h,m,I,N,s,d;if(r(u)||r(o))return NaN;if(C(Fr,o),A=Fr[0],0===Fr[1]){if(0===o)return 1;if(1===o)return u;if(-1===o)return 1/u;if(.5===o)return a(u);if(-.5===o)return 1/a(u);if(2===o)return u*u;if(3===o)return u*u*u;if(4===o)return(u*=u)*u;if(e(o))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:c(r)<1==(t===n)?0:n}(u,o)}if(C(Fr,u),p=Fr[0],0===Fr[1]){if(0===p)return function(r,e){return e===t?n:e===n?0:e>0?f(e)?r:0:f(e)?yr(n,r):n}(u,o);if(1===u)return 1;if(-1===u&&f(o))return-1;if(e(u))return u===t?gr(-0,-o):o<0?0:n}if(u<0&&!1===i(o))return(u-u)/(u-u);if(v=c(u),y=2147483647&p|0,l=2147483647&A|0,b=A>>>31|0,w=(w=p>>>31|0)&&f(o)?-1:1,l>1105199104){if(l>1139802112)return function(r,n){return(2147483647&tr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(u,o);if(y<1072693247)return 1===b?w*sr*sr:w*dr*dr;if(y>1072693248)return 0===b?w*sr*sr:w*dr*dr;I=function(r,n){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Q(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r}(Sr,v)}else I=function(r,n,t){var e,u,i,o,f,a,c,y,l,v,p,A,w,b,U,h,m,I,N,s,d;return I=0,t<1048576&&(I-=53,t=tr(n*=9007199254740992)),I+=(t>>20)-1023|0,t=1072693248|(N=1048575&t|0),N<=235662?s=0:N<767610?s=1:(s=0,I+=1,t-=1048576),o=Q(u=(h=(n=Ar(n,t))-(c=wr[s]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=Ar(0,e+=s<<18),U=(i=u*u)*i*(0===(d=i)?.5999999999999946:.5999999999999946+d*(.4285714285785502+d*(.33333332981837743+d*(.272728123808534+d*(.23066074577556175+.20697501780033842*d))))),a=Q(a=3+(i=o*o)+(U+=(f=m*(h-o*a-o*(n-(a-c))))*(o+u)),0),w=(p=-7.028461650952758e-9*(l=Q(l=(h=o*a)+(m=f*a+(U-(a-3-i))*u),0))+.9617966939259756*(m-(l-h))+Ur[s])-((A=Q(A=(v=.9617967009544373*l)+p+(y=br[s])+(b=I),0))-b-y-v),r[0]=A,r[1]=w,r}(Sr,v,y);if(m=(o-(U=Q(o,0)))*I[0]+o*I[1],h=U*I[0],C(Fr,N=m+h),s=R(Fr[0]),d=R(Fr[1]),s>=1083179008){if(0!=(s-1083179008|d))return w*sr*sr;if(m+8008566259537294e-32>N-h)return w*sr*sr}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|d))return w*dr*dr;if(m<=N-h)return w*dr*dr}return N=function(r,n,t){var e,u,i,o,f,a,c,y,l,v,p;return v=((l=2147483647&r|0)>>20)-1023|0,y=0,l>1071644672&&(e=((y=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&y)>>20)-1023|0)))>>>0,y=(1048575&y|1048576)>>20-v>>>0,r<0&&(y=-y),n-=i=Ar(0,e)),r=R(r=tr(c=1-((c=(o=.6931471824645996*(i=Q(i=t+n,0)))+(f=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=f-(c-o))+c*a)-c))),(r+=y<<20>>>0)>>20<=0?Nr(c,y):Ar(c,r)}(s,h,m),w*N}var Hr=Math.ceil,Or=1e308;function Er(t,u){var i,o;return r(t)||r(u)||e(u)?NaN:e(t)||0===t||u<-324||c(t)>9007199254740992&&u<=0?t:u>308?t<=0?-0:n:u<-308?(i=gr(10,-(u+308)),e(o=t*Or*i)?t:Hr(o)/Or/i):e(o=t*(i=gr(10,-u)))?t:Hr(o)/i}function jr(r,n,t,e){return r[0]=Er(n,e),r[1]=Er(t,e),r}function Tr(r,n,t,e){return 3===arguments.length?jr([0,0],r,n,t):jr(r,n,t,e)}export{Tr as default};
//# sourceMappingURL=mod.js.map
