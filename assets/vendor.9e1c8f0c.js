var t="http://www.w3.org/1999/xhtml",n={svg:"http://www.w3.org/2000/svg",xhtml:t,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function e(t){var e=t+="",i=e.indexOf(":");return i>=0&&"xmlns"!==(e=t.slice(0,i))&&(t=t.slice(i+1)),n.hasOwnProperty(e)?{space:n[e],local:t}:t}function i(n){return function(){var e=this.ownerDocument,i=this.namespaceURI;return i===t&&e.documentElement.namespaceURI===t?e.createElement(n):e.createElementNS(i,n)}}function r(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function o(t){var n=e(t);return(n.local?r:i)(n)}function u(){}function s(t){return null==t?u:function(){return this.querySelector(t)}}function h(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function c(){return[]}function a(t){return function(n){return n.matches(t)}}var l=Array.prototype.find;function f(){return this.firstElementChild}var _=Array.prototype.filter;function p(){return this.children}function y(t){return new Array(t.length)}function v(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function d(t){return function(){return t}}function m(t,n,e,i,r,o){for(var u,s=0,h=n.length,c=o.length;s<c;++s)(u=n[s])?(u.__data__=o[s],i[s]=u):e[s]=new v(t,o[s]);for(;s<h;++s)(u=n[s])&&(r[s]=u)}function g(t,n,e,i,r,o,u){var s,h,c,a=new Map,l=n.length,f=o.length,_=new Array(l);for(s=0;s<l;++s)(h=n[s])&&(_[s]=c=u.call(h,h.__data__,s,n)+"",a.has(c)?r[s]=h:a.set(c,h));for(s=0;s<f;++s)c=u.call(t,o[s],s,o)+"",(h=a.get(c))?(i[s]=h,h.__data__=o[s],a.delete(c)):e[s]=new v(t,o[s]);for(s=0;s<l;++s)(h=n[s])&&a.get(_[s])===h&&(r[s]=h)}function w(t){return t.__data__}function x(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function A(t){return function(){this.removeAttribute(t)}}function b(t){return function(){this.removeAttributeNS(t.space,t.local)}}function S(t,n){return function(){this.setAttribute(t,n)}}function E(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function M(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function N(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function T(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function C(t){return function(){this.style.removeProperty(t)}}function L(t,n,e){return function(){this.style.setProperty(t,n,e)}}function q(t,n,e){return function(){var i=n.apply(this,arguments);null==i?this.style.removeProperty(t):this.style.setProperty(t,i,e)}}function P(t,n){return t.style.getPropertyValue(n)||T(t).getComputedStyle(t,null).getPropertyValue(n)}function B(t){return function(){delete this[t]}}function D(t,n){return function(){this[t]=n}}function j(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function I(t){return t.trim().split(/^|\s+/)}function k(t){return t.classList||new O(t)}function O(t){this._node=t,this._names=I(t.getAttribute("class")||"")}function H(t,n){for(var e=k(t),i=-1,r=n.length;++i<r;)e.add(n[i])}function R(t,n){for(var e=k(t),i=-1,r=n.length;++i<r;)e.remove(n[i])}function U(t){return function(){H(this,t)}}function V(t){return function(){R(this,t)}}function z(t,n){return function(){(n.apply(this,arguments)?H:R)(this,t)}}function F(){this.textContent=""}function Z(t){return function(){this.textContent=t}}function Q(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function X(){this.innerHTML=""}function G(t){return function(){this.innerHTML=t}}function J(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function K(){this.nextSibling&&this.parentNode.appendChild(this)}function W(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Y(){return null}function $(){var t=this.parentNode;t&&t.removeChild(this)}function tt(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function nt(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function et(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}function it(t){return function(){var n=this.__on;if(n){for(var e,i=0,r=-1,o=n.length;i<o;++i)e=n[i],t.type&&e.type!==t.type||e.name!==t.name?n[++r]=e:this.removeEventListener(e.type,e.listener,e.options);++r?n.length=r:delete this.__on}}}function rt(t,n,e){return function(){var i,r=this.__on,o=function(t){return function(n){t.call(this,n,this.__data__)}}(n);if(r)for(var u=0,s=r.length;u<s;++u)if((i=r[u]).type===t.type&&i.name===t.name)return this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=e),void(i.value=n);this.addEventListener(t.type,o,e),i={type:t.type,name:t.name,value:n,listener:o,options:e},r?r.push(i):this.__on=[i]}}function ot(t,n,e){var i=T(t),r=i.CustomEvent;"function"==typeof r?r=new r(n,e):(r=i.document.createEvent("Event"),e?(r.initEvent(n,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(n,!1,!1)),t.dispatchEvent(r)}function ut(t,n){return function(){return ot(this,t,n)}}function st(t,n){return function(){return ot(this,t,n.apply(this,arguments))}}v.prototype={constructor:v,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},O.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var ht=[null];function ct(t,n){this._groups=t,this._parents=n}function at(t){return"string"==typeof t?new ct([[document.querySelector(t)]],[document.documentElement]):new ct([[t]],ht)}ct.prototype={constructor:ct,select:function(t){"function"!=typeof t&&(t=s(t));for(var n=this._groups,e=n.length,i=new Array(e),r=0;r<e;++r)for(var o,u,h=n[r],c=h.length,a=i[r]=new Array(c),l=0;l<c;++l)(o=h[l])&&(u=t.call(o,o.__data__,l,h))&&("__data__"in o&&(u.__data__=o.__data__),a[l]=u);return new ct(i,this._parents)},selectAll:function(t){var n;"function"==typeof t?t=function(t){return function(){var n=t.apply(this,arguments);return null==n?[]:h(n)}}(t):t=null==(n=t)?c:function(){return this.querySelectorAll(n)};for(var e=this._groups,i=e.length,r=[],o=[],u=0;u<i;++u)for(var s,a=e[u],l=a.length,f=0;f<l;++f)(s=a[f])&&(r.push(t.call(s,s.__data__,f,a)),o.push(s));return new ct(r,o)},selectChild:function(t){return this.select(null==t?f:function(t){return function(){return l.call(this.children,t)}}("function"==typeof t?t:a(t)))},selectChildren:function(t){return this.selectAll(null==t?p:function(t){return function(){return _.call(this.children,t)}}("function"==typeof t?t:a(t)))},filter:function(t){var n;"function"!=typeof t&&(n=t,t=function(){return this.matches(n)});for(var e=this._groups,i=e.length,r=new Array(i),o=0;o<i;++o)for(var u,s=e[o],h=s.length,c=r[o]=[],a=0;a<h;++a)(u=s[a])&&t.call(u,u.__data__,a,s)&&c.push(u);return new ct(r,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,w);var e=n?g:m,i=this._parents,r=this._groups;"function"!=typeof t&&(t=d(t));for(var o=r.length,u=new Array(o),s=new Array(o),c=new Array(o),a=0;a<o;++a){var l=i[a],f=r[a],_=f.length,p=h(t.call(l,l&&l.__data__,a,i)),y=p.length,v=s[a]=new Array(y),x=u[a]=new Array(y),A=c[a]=new Array(_);e(l,f,v,x,A,p,n);for(var b,S,E=0,M=0;E<y;++E)if(b=v[E]){for(E>=M&&(M=E+1);!(S=x[M])&&++M<y;);b._next=S||null}}return(u=new ct(u,i))._enter=s,u._exit=c,u},enter:function(){return new ct(this._enter||this._groups.map(y),this._parents)},exit:function(){return new ct(this._exit||this._groups.map(y),this._parents)},join:function(t,n,e){var i=this.enter(),r=this,o=this.exit();return i="function"==typeof t?t(i):i.append(t+""),null!=n&&(r=n(r)),null==e?o.remove():e(o),i&&r?i.merge(r).order():r},merge:function(t){if(!(t instanceof ct))throw new Error("invalid merge");for(var n=this._groups,e=t._groups,i=n.length,r=e.length,o=Math.min(i,r),u=new Array(i),s=0;s<o;++s)for(var h,c=n[s],a=e[s],l=c.length,f=u[s]=new Array(l),_=0;_<l;++_)(h=c[_]||a[_])&&(f[_]=h);for(;s<i;++s)u[s]=n[s];return new ct(u,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var i,r=t[n],o=r.length-1,u=r[o];--o>=0;)(i=r[o])&&(u&&4^i.compareDocumentPosition(u)&&u.parentNode.insertBefore(i,u),u=i);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=x);for(var e=this._groups,i=e.length,r=new Array(i),o=0;o<i;++o){for(var u,s=e[o],h=s.length,c=r[o]=new Array(h),a=0;a<h;++a)(u=s[a])&&(c[a]=u);c.sort(n)}return new ct(r,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var i=t[n],r=0,o=i.length;r<o;++r){var u=i[r];if(u)return u}return null},size:function(){let t=0;for(const n of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,i=n.length;e<i;++e)for(var r,o=n[e],u=0,s=o.length;u<s;++u)(r=o[u])&&t.call(r,r.__data__,u,o);return this},attr:function(t,n){var i=e(t);if(arguments.length<2){var r=this.node();return i.local?r.getAttributeNS(i.space,i.local):r.getAttribute(i)}return this.each((null==n?i.local?b:A:"function"==typeof n?i.local?N:M:i.local?E:S)(i,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?C:"function"==typeof n?q:L)(t,n,null==e?"":e)):P(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?B:"function"==typeof n?j:D)(t,n)):this.node()[t]},classed:function(t,n){var e=I(t+"");if(arguments.length<2){for(var i=k(this.node()),r=-1,o=e.length;++r<o;)if(!i.contains(e[r]))return!1;return!0}return this.each(("function"==typeof n?z:n?U:V)(e,n))},text:function(t){return arguments.length?this.each(null==t?F:("function"==typeof t?Q:Z)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?X:("function"==typeof t?J:G)(t)):this.node().innerHTML},raise:function(){return this.each(K)},lower:function(){return this.each(W)},append:function(t){var n="function"==typeof t?t:o(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:o(t),i=null==n?Y:"function"==typeof n?n:s(n);return this.select((function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)}))},remove:function(){return this.each($)},clone:function(t){return this.select(t?nt:tt)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var i,r,o=et(t+""),u=o.length;if(!(arguments.length<2)){for(s=n?rt:it,i=0;i<u;++i)this.each(s(o[i],n,e));return this}var s=this.node().__on;if(s)for(var h,c=0,a=s.length;c<a;++c)for(i=0,h=s[c];i<u;++i)if((r=o[i]).type===h.type&&r.name===h.name)return h.value},dispatch:function(t,n){return this.each(("function"==typeof n?st:ut)(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var i,r=t[n],o=0,u=r.length;o<u;++o)(i=r[o])&&(yield i)}};const lt=Math.PI,ft=2*lt,_t=ft-1e-6;function pt(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function yt(){return new pt}function vt(t){return function(){return t}}function dt(t){this._context=t}function mt(t){return new dt(t)}function gt(t){return t[0]}function wt(t){return t[1]}function xt(t,n){var e=vt(!0),i=null,r=mt,o=null;function u(u){var s,h,c,a,l=(a=u,u="object"==typeof a&&"length"in a?a:Array.from(a)).length,f=!1;for(null==i&&(o=r(c=yt())),s=0;s<=l;++s)!(s<l&&e(h=u[s],s,u))===f&&((f=!f)?o.lineStart():o.lineEnd()),f&&o.point(+t(h,s,u),+n(h,s,u));if(c)return o=null,c+""||null}return t="function"==typeof t?t:void 0===t?gt:vt(t),n="function"==typeof n?n:void 0===n?wt:vt(n),u.x=function(n){return arguments.length?(t="function"==typeof n?n:vt(+n),u):t},u.y=function(t){return arguments.length?(n="function"==typeof t?t:vt(+t),u):n},u.defined=function(t){return arguments.length?(e="function"==typeof t?t:vt(!!t),u):e},u.curve=function(t){return arguments.length?(r=t,null!=i&&(o=r(i)),u):r},u.context=function(t){return arguments.length?(null==t?i=o=null:o=r(i=t),u):i},u}function At(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function bt(t){this._context=t}function St(t){return new bt(t)}pt.prototype=yt.prototype={constructor:pt,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,i){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+i)},bezierCurveTo:function(t,n,e,i,r,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +i+","+(this._x1=+r)+","+(this._y1=+o)},arcTo:function(t,n,e,i,r){t=+t,n=+n,e=+e,i=+i,r=+r;var o=this._x1,u=this._y1,s=e-t,h=i-n,c=o-t,a=u-n,l=c*c+a*a;if(r<0)throw new Error("negative radius: "+r);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(a*s-h*c)>1e-6&&r){var f=e-o,_=i-u,p=s*s+h*h,y=f*f+_*_,v=Math.sqrt(p),d=Math.sqrt(l),m=r*Math.tan((lt-Math.acos((p+l-y)/(2*v*d)))/2),g=m/d,w=m/v;Math.abs(g-1)>1e-6&&(this._+="L"+(t+g*c)+","+(n+g*a)),this._+="A"+r+","+r+",0,0,"+ +(a*f>c*_)+","+(this._x1=t+w*s)+","+(this._y1=n+w*h)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,i,r,o){t=+t,n=+n,o=!!o;var u=(e=+e)*Math.cos(i),s=e*Math.sin(i),h=t+u,c=n+s,a=1^o,l=o?i-r:r-i;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+h+","+c:(Math.abs(this._x1-h)>1e-6||Math.abs(this._y1-c)>1e-6)&&(this._+="L"+h+","+c),e&&(l<0&&(l=l%ft+ft),l>_t?this._+="A"+e+","+e+",0,1,"+a+","+(t-u)+","+(n-s)+"A"+e+","+e+",0,1,"+a+","+(this._x1=h)+","+(this._y1=c):l>1e-6&&(this._+="A"+e+","+e+",0,"+ +(l>=lt)+","+a+","+(this._x1=t+e*Math.cos(r))+","+(this._y1=n+e*Math.sin(r))))},rect:function(t,n,e,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +i+"h"+-e+"Z"},toString:function(){return this._}},dt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}},bt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:At(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:At(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var Et,Mt,Nt=0,Tt=0,Ct=0,Lt=0,qt=0,Pt=0,Bt="object"==typeof performance&&performance.now?performance:Date,Dt="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function jt(){return qt||(Dt(It),qt=Bt.now()+Pt)}function It(){qt=0}function kt(){this._call=this._time=this._next=null}function Ot(t,n,e){var i=new kt;return i.restart(t,n,e),i}function Ht(){qt=(Lt=Bt.now())+Pt,Nt=Tt=0;try{!function(){jt(),++Nt;for(var t,n=Et;n;)(t=qt-n._time)>=0&&n._call.call(null,t),n=n._next;--Nt}()}finally{Nt=0,function(){var t,n,e=Et,i=1/0;for(;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Et=n);Mt=t,Ut(i)}(),qt=0}}function Rt(){var t=Bt.now(),n=t-Lt;n>1e3&&(Pt-=n,Lt=t)}function Ut(t){Nt||(Tt&&(Tt=clearTimeout(Tt)),t-qt>24?(t<1/0&&(Tt=setTimeout(Ht,t-Bt.now()-Pt)),Ct&&(Ct=clearInterval(Ct))):(Ct||(Lt=Bt.now(),Ct=setInterval(Rt,1e3)),Nt=1,Dt(Ht)))}kt.prototype=Ot.prototype={constructor:kt,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?jt():+e)+(null==n?0:+n),this._next||Mt===this||(Mt?Mt._next=this:Et=this,Mt=this),this._call=t,this._time=e,Ut()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ut())}};export{St as c,xt as l,at as s,Ot as t};