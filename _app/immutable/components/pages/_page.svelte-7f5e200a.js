import{S as G,i as L,s as M,k as p,q as w,a as I,l as v,m as g,r as y,h,c as C,n as $,b as D,D as d,u as q,B as H,w as R,x as j,y as F,f as k,d as K,t as x,z as J,G as N,e as B,g as O}from"../../chunks/index-87cc245d.js";import{H as Q}from"../../chunks/head-df07598c.js";function U(i){let e,r,t,s,c=i[0].title+"",m,_,u,o,b=new Date(i[0].date).toDateString()+"",a,n;return{c(){e=p("article"),r=p("a"),t=p("div"),s=p("h2"),m=w(c),_=I(),u=p("div"),o=p("time"),a=w(b),this.h()},l(l){e=v(l,"ARTICLE",{class:!0});var f=g(e);r=v(f,"A",{"sveltekit:prefetch":!0,href:!0});var S=g(r);t=v(S,"DIV",{});var E=g(t);s=v(E,"H2",{class:!0});var A=g(s);m=y(A,c),A.forEach(h),_=C(E),u=v(E,"DIV",{class:!0});var P=g(u);o=v(P,"TIME",{});var V=g(o);a=y(V,b),V.forEach(h),P.forEach(h),E.forEach(h),S.forEach(h),f.forEach(h),this.h()},h(){$(s,"class","font-black mt-5 mb-1 text-3xl"),$(u,"class","font-bold text-accent text-sm mb-4 uppercase"),$(r,"sveltekit:prefetch",""),$(r,"href",n=`/posts/${i[0].slug}`),$(e,"class","border border-primary bg-base-100 shadow-xl mb-10 p-5 transition card hover:text-accent-focus first:pt-0")},m(l,f){D(l,e,f),d(e,r),d(r,t),d(t,s),d(s,m),d(t,_),d(t,u),d(u,o),d(o,a)},p(l,[f]){f&1&&c!==(c=l[0].title+"")&&q(m,c),f&1&&b!==(b=new Date(l[0].date).toDateString()+"")&&q(a,b),f&1&&n!==(n=`/posts/${l[0].slug}`)&&$(r,"href",n)},i:H,o:H,d(l){l&&h(e)}}}function W(i,e,r){let{post:t}=e;return i.$$set=s=>{"post"in s&&r(0,t=s.post)},[t]}class X extends G{constructor(e){super(),L(this,e,W,U,M,{post:0})}}function T(i,e,r){const t=i.slice();return t[2]=e[r],t}function Y(i){let e,r;return e=new X({props:{post:i[2]}}),{c(){R(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){F(e,t,s),r=!0},p:H,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){x(e.$$.fragment,t),r=!1},d(t){J(e,t)}}}function z(i){let e,r,t=i[2].published&&Y(i);return{c(){t&&t.c(),e=B()},l(s){t&&t.l(s),e=B()},m(s,c){t&&t.m(s,c),D(s,e,c),r=!0},p(s,c){s[2].published&&t.p(s,c)},i(s){r||(k(t),r=!0)},o(s){x(t),r=!1},d(s){t&&t.d(s),s&&h(e)}}}function Z(i){let e,r,t,s,c,m,_;e=new Q({props:{title:"All the Posts"}});let u=i[0],o=[];for(let a=0;a<u.length;a+=1)o[a]=z(T(i,u,a));const b=a=>x(o[a],1,1,()=>{o[a]=null});return{c(){R(e.$$.fragment),r=I(),t=p("div"),s=p("h1"),c=w("Check out the posts!"),m=I();for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){j(e.$$.fragment,a),r=C(a),t=v(a,"DIV",{class:!0});var n=g(t);s=v(n,"H1",{class:!0});var l=g(s);c=y(l,"Check out the posts!"),l.forEach(h),m=C(n);for(let f=0;f<o.length;f+=1)o[f].l(n);n.forEach(h),this.h()},h(){$(s,"class","font-bold mb-5 text-5xl"),$(t,"class","flex flex-col flex-grow")},m(a,n){F(e,a,n),D(a,r,n),D(a,t,n),d(t,s),d(s,c),d(t,m);for(let l=0;l<o.length;l+=1)o[l].m(t,null);_=!0},p(a,[n]){if(n&1){u=a[0];let l;for(l=0;l<u.length;l+=1){const f=T(a,u,l);o[l]?(o[l].p(f,n),k(o[l],1)):(o[l]=z(f),o[l].c(),k(o[l],1),o[l].m(t,null))}for(O(),l=u.length;l<o.length;l+=1)b(l);K()}},i(a){if(!_){k(e.$$.fragment,a);for(let n=0;n<u.length;n+=1)k(o[n]);_=!0}},o(a){x(e.$$.fragment,a),o=o.filter(Boolean);for(let n=0;n<o.length;n+=1)x(o[n]);_=!1},d(a){J(e,a),a&&h(r),a&&h(t),N(o,a)}}}function tt(i,e,r){let{data:t}=e,{posts:s}=t;return i.$$set=c=>{"data"in c&&r(1,t=c.data)},[s,t]}class st extends G{constructor(e){super(),L(this,e,tt,Z,M,{data:1})}}export{st as default};