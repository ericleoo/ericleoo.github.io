import{S,i as q,s as z,k as d,q as C,a as B,l as v,m as g,r as F,h as _,c as G,n as m,b as x,C as p,B as y,D as H,E as L,w as M,x as P,y as j,F as J,G as K,H as O,f as D,t as I,z as Q}from"../../chunks/index-3e2bf343.js";import{s as w,p as N}from"../../chunks/site-config-566325af.js";function V(u,t,l){const s=u.slice();return s[0]=t[l].title,s[1]=t[l].path,s}function A(u){let t,l=u[0]+"",s;return{c(){t=d("a"),s=C(l),this.h()},l(n){t=v(n,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var f=g(t);s=F(f,l),f.forEach(_),this.h()},h(){m(t,"sveltekit:prefetch",""),m(t,"href",u[1]),m(t,"class","rounded-btn btn btn-ghost btn-sm")},m(n,f){x(n,t,f),p(t,s)},p:y,d(n){n&&_(t)}}}function R(u){let t,l,s,n,f,a,e,c=N,i=[];for(let o=0;o<c.length;o+=1)i[o]=A(V(u,c,o));return{c(){t=d("div"),l=d("div"),s=d("span"),n=C(w),f=B(),a=d("div"),e=d("div");for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){t=v(o,"DIV",{class:!0});var h=g(t);l=v(h,"DIV",{class:!0});var r=g(l);s=v(r,"SPAN",{class:!0});var $=g(s);n=F($,w),$.forEach(_),r.forEach(_),f=G(h),a=v(h,"DIV",{class:!0});var E=g(a);e=v(E,"DIV",{class:!0});var k=g(e);for(let b=0;b<i.length;b+=1)i[b].l(k);k.forEach(_),E.forEach(_),h.forEach(_),this.h()},h(){m(s,"class","font-bold text-lg"),m(l,"class","mx-2 px-2 navbar-start"),m(e,"class","flex items-stretch"),m(a,"class","mx-2 px-2 hidden navbar-center lg:flex"),m(t,"class","bg-neutral shadow-lg text-neutral-content mb-16 top-0 z-10 navbar sticky")},m(o,h){x(o,t,h),p(t,l),p(l,s),p(s,n),p(t,f),p(t,a),p(a,e);for(let r=0;r<i.length;r+=1)i[r].m(e,null)},p(o,[h]){if(h&0){c=N;let r;for(r=0;r<c.length;r+=1){const $=V(o,c,r);i[r]?i[r].p($,h):(i[r]=A($),i[r].c(),i[r].m(e,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=c.length}},i:y,o:y,d(o){o&&_(t),H(i,o)}}}class T extends S{constructor(t){super(),q(this,t,null,R,z,{})}}function U(u){let t,l,s,n;t=new T({});const f=u[1].default,a=L(f,u,u[0],null);return{c(){M(t.$$.fragment),l=B(),s=d("main"),a&&a.c(),this.h()},l(e){P(t.$$.fragment,e),l=G(e),s=v(e,"MAIN",{class:!0});var c=g(s);a&&a.l(c),c.forEach(_),this.h()},h(){m(s,"class","mx-auto max-w-[90ch] px-4 relative sm:px-6 lg:px-8 break-normal")},m(e,c){j(t,e,c),x(e,l,c),x(e,s,c),a&&a.m(s,null),n=!0},p(e,[c]){a&&a.p&&(!n||c&1)&&J(a,f,e,e[0],n?O(f,e[0],c,null):K(e[0]),null)},i(e){n||(D(t.$$.fragment,e),D(a,e),n=!0)},o(e){I(t.$$.fragment,e),I(a,e),n=!1},d(e){Q(t,e),e&&_(l),e&&_(s),a&&a.d(e)}}}function W(u,t,l){let{$$slots:s={},$$scope:n}=t;return u.$$set=f=>{"$$scope"in f&&l(0,n=f.$$scope)},[n,s]}class Z extends S{constructor(t){super(),q(this,t,W,U,z,{})}}export{Z as default};