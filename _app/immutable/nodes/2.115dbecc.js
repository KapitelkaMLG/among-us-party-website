import{s as P,f as I,h as G,n as A}from"../chunks/scheduler.5549988b.js";import{S as x,i as M,g as v,m as k,s as S,h as p,j as $,n as w,f as _,c as D,k as d,a as V,x as h,y as J,r as B,u as N,v as T,o as U,d as y,t as E,w as q,l as C,z as F}from"../chunks/index.1f39b9d4.js";function H(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function K(s){let e,n,t,i,u,l,f,m,a,o;return{c(){e=v("button"),n=v("p"),t=k("Click me for hidden image!"),u=S(),l=v("img"),this.h()},l(c){e=p(c,"BUTTON",{class:!0});var r=$(e);n=p(r,"P",{class:!0});var g=$(n);t=w(g,"Click me for hidden image!"),g.forEach(_),u=D(r),l=p(r,"IMG",{class:!0,alt:!0,src:!0}),r.forEach(_),this.h()},h(){d(n,"class",i=I(s[1]?"hidden":"")+" svelte-b5dr6m"),d(l,"class",f=I(s[1]?"":"hidden")+" svelte-b5dr6m"),d(l,"alt","deez nuts"),G(l.src,m=s[0])||d(l,"src",m),d(e,"class","svelte-b5dr6m")},m(c,r){V(c,e,r),h(e,n),h(n,t),h(e,u),h(e,l),a||(o=J(e,"click",s[2]),a=!0)},p(c,[r]){r&2&&i!==(i=I(c[1]?"hidden":"")+" svelte-b5dr6m")&&d(n,"class",i),r&2&&f!==(f=I(c[1]?"":"hidden")+" svelte-b5dr6m")&&d(l,"class",f),r&1&&!G(l.src,m=c[0])&&d(l,"src",m)},i:A,o:A,d(c){c&&_(e),a=!1,o()}}}function L(s,e,n){let{imageSrc:t="images/rickroll.gif"}=e,i=!1;const u=()=>n(1,i=!i);return s.$$set=l=>{"imageSrc"in l&&n(0,t=l.imageSrc)},[t,i,u]}class Q extends x{constructor(e){super(),M(this,e,L,K,P,{imageSrc:0})}}function R(s){let e,n,t,i,u,l,f,m,a,o,c;return u=new Q({}),{c(){e=v("div"),n=v("div"),t=k(s[0]),i=S(),B(u.$$.fragment),l=S(),f=v("div"),m=k("- "),a=v("i"),o=k(s[1]),this.h()},l(r){e=p(r,"DIV",{class:!0});var g=$(e);n=p(g,"DIV",{class:!0});var O=$(n);t=w(O,s[0]),O.forEach(_),i=D(g),N(u.$$.fragment,g),l=D(g),f=p(g,"DIV",{class:!0});var z=$(f);m=w(z,"- "),a=p(z,"I",{});var j=$(a);o=w(j,s[1]),j.forEach(_),z.forEach(_),g.forEach(_),this.h()},h(){d(n,"class","message svelte-1whe7ef"),d(f,"class","author svelte-1whe7ef"),d(e,"class","card svelte-1whe7ef")},m(r,g){V(r,e,g),h(e,n),h(n,t),h(e,i),T(u,e,null),h(e,l),h(e,f),h(f,m),h(f,a),h(a,o),c=!0},p(r,[g]){(!c||g&1)&&U(t,r[0]),(!c||g&2)&&U(o,r[1])},i(r){c||(y(u.$$.fragment,r),c=!0)},o(r){E(u.$$.fragment,r),c=!1},d(r){r&&_(e),q(u)}}}function W(s,e,n){let{message:t="ඞ Placeholder card message ඞ"}=e,{author:i="ඞ"}=e;return s.$$set=u=>{"message"in u&&n(0,t=u.message),"author"in u&&n(1,i=u.author)},[t,i]}class X extends x{constructor(e){super(),M(this,e,W,R,P,{message:0,author:1})}}function b(s,e){return Math.floor(Math.random()*e)+s}function Y(s){let e;return{c(){e=v("div"),this.h()},l(n){e=p(n,"DIV",{class:!0,style:!0});var t=$(e);t.forEach(_),this.h()},h(){d(e,"class","amongus svelte-1aswzdo"),C(e,"--angle",s[1]),C(e,"top",s[2]+"%"),C(e,"left",s[3]+"%"),C(e,"background-image","url('"+s[0]+"')")},m(n,t){V(n,e,t)},p(n,[t]){t&1&&C(e,"background-image","url('"+n[0]+"')")},i:A,o:A,d(n){n&&_(e)}}}function Z(s,e,n){let t=b(0,360),i=b(0,100),u=b(0,100),l=b(0,500),f;return l==69?(console.log("nice"),f="images/rare-shrek.png"):f="images/amongus-"+l%5+".png",[f,t,i,u]}class ee extends x{constructor(e){super(),M(this,e,Z,Y,P,{})}}function te(s,e,n){const t=s.slice();return t[3]=e[n],t}function ne(s,e,n){const t=s.slice();return t[3]=e[n],t}function se(s){let e,n;return e=new ee({}),{c(){B(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,i){T(e,t,i),n=!0},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function le(s){let e,n;return e=new X({}),{c(){B(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,i){T(e,t,i),n=!0},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function ae(s){let e,n,t,i,u=H({length:s[0]}),l=[];for(let a=0;a<u.length;a+=1)l[a]=se(ne(s,u,a));let f=H({length:re}),m=[];for(let a=0;a<f.length;a+=1)m[a]=le(te(s,f,a));return{c(){e=v("main");for(let a=0;a<l.length;a+=1)l[a].c();n=S(),t=v("section");for(let a=0;a<m.length;a+=1)m[a].c();this.h()},l(a){e=p(a,"MAIN",{});var o=$(e);for(let r=0;r<l.length;r+=1)l[r].l(o);n=D(o),t=p(o,"SECTION",{class:!0});var c=$(t);for(let r=0;r<m.length;r+=1)m[r].l(c);c.forEach(_),o.forEach(_),this.h()},h(){d(t,"class","cards svelte-1img7vo")},m(a,o){V(a,e,o);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(e,null);h(e,n),h(e,t);for(let c=0;c<m.length;c+=1)m[c]&&m[c].m(t,null);i=!0},p:A,i(a){if(!i){for(let o=0;o<u.length;o+=1)y(l[o]);for(let o=0;o<f.length;o+=1)y(m[o]);i=!0}},o(a){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)E(l[o]);m=m.filter(Boolean);for(let o=0;o<m.length;o+=1)E(m[o]);i=!1},d(a){a&&_(e),F(l,a),F(m,a)}}}let re=5;function ie(s,e,n){let{minAmongusCount:t=5}=e,{maxAmongusCount:i=10}=e,u=b(t,i);return s.$$set=l=>{"minAmongusCount"in l&&n(1,t=l.minAmongusCount),"maxAmongusCount"in l&&n(2,i=l.maxAmongusCount)},[u,t,i]}class ue extends x{constructor(e){super(),M(this,e,ie,ae,P,{minAmongusCount:1,maxAmongusCount:2})}}export{ue as component};
