import{S as Ce,i as De,s as Se,e as i,t as N,c as u,a as b,h as O,d,b as o,g as J,F as s,H as F,G as z,$ as Ne,k as w,w as Oe,m as B,x as Ve,a0 as Ee,T as A,y as qe,a1 as Me,o as pe,p as Ae,q as de,B as Fe,U as He,O as Re,a2 as We,a3 as Te,n as je,D as Ge,a4 as Ye,a5 as ze,a6 as Je,a7 as Ke,a8 as we,a9 as Be}from"../chunks/vendor-15aad13b.js";import{d as Ie}from"../chunks/firebase-4a996114.js";import{s as Le}from"../chunks/stores-8780ed69.js";function Qe(c){let t,e,r,m;return{c(){t=i("p"),e=N("Complaint Report sent!"),this.h()},l(n){t=u(n,"P",{class:!0});var a=b(t);e=O(a,"Complaint Report sent!"),a.forEach(d),this.h()},h(){o(t,"class","error-alert")},m(n,a){J(n,t,a),s(t,e),m=!0},p:z,i(n){m||(Ke(()=>{r||(r=we(t,Be,{duration:150},!0)),r.run(1)}),m=!0)},o(n){r||(r=we(t,Be,{duration:150},!1)),r.run(0),m=!1},d(n){n&&d(t),n&&r&&r.end()}}}function Xe(c){let t,e;return{c(){t=i("p"),e=N(Ue),this.h()},l(r){t=u(r,"P",{class:!0});var m=b(t);e=O(m,Ue),m.forEach(d),this.h()},h(){o(t,"class","error-alert")},m(r,m){J(r,t,m),s(t,e)},p:z,i:z,o:z,d(r){r&&d(t)}}}function Pe(c){let t,e,r,m;return{c(){t=i("button"),e=N("See all Complaints"),this.h()},l(n){t=u(n,"BUTTON",{class:!0});var a=b(t);e=O(a,"See all Complaints"),a.forEach(d),this.h()},h(){o(t,"class","complaintInfoShowBtn svelte-1tka8fl")},m(n,a){J(n,t,a),s(t,e),r||(m=F(t,"click",c[10]),r=!0)},p:z,d(n){n&&d(t),r=!1,m()}}}function Ze(c){let t,e,r,m,n,a,p,R,I,f,T,V,H,W,k,j,P,q,y,$,g,x,C,G,ee,te,E,se,M,le,ae,re,oe,ne,ie,ue,ce,K,D,L,fe,me;const he=[Xe,Qe],S=[];function _e(l,_){return l[4]?1:-1}~(a=_e(c))&&(p=S[a]=he[a](c));let h=c[3].isadmin&&Pe(c);return D=new Ne({props:{show:c[6]}}),{c(){t=i("body"),e=i("div"),r=i("h1"),m=N("Report a Complaint"),n=w(),p&&p.c(),R=w(),I=i("div"),f=i("form"),T=i("div"),V=i("p"),H=N("Title"),W=w(),k=i("input"),j=w(),P=i("div"),q=i("p"),y=N("What is the license plate number of the vehicle you are reporting?"),$=w(),g=i("input"),x=w(),C=i("div"),G=i("p"),ee=N("State the details of the issue"),te=w(),E=i("input"),se=w(),M=i("button"),le=N("SUBMIT REPORT"),ae=w(),h&&h.c(),re=w(),oe=i("br"),ne=i("br"),ie=i("br"),ue=i("br"),ce=i("br"),K=w(),Oe(D.$$.fragment),this.h()},l(l){t=u(l,"BODY",{class:!0});var _=b(t);e=u(_,"DIV",{class:!0});var v=b(e);r=u(v,"H1",{id:!0,class:!0});var Y=b(r);m=O(Y,"Report a Complaint"),Y.forEach(d),n=B(v),p&&p.l(v),R=B(v),I=u(v,"DIV",{class:!0});var ve=b(I);f=u(ve,"FORM",{id:!0,class:!0});var U=b(f);T=u(U,"DIV",{class:!0});var Q=b(T);V=u(Q,"P",{});var be=b(V);H=O(be,"Title"),be.forEach(d),W=B(Q),k=u(Q,"INPUT",{type:!0,class:!0}),Q.forEach(d),j=B(U),P=u(U,"DIV",{class:!0});var X=b(P);q=u(X,"P",{});var ke=b(q);y=O(ke,"What is the license plate number of the vehicle you are reporting?"),ke.forEach(d),$=B(X),g=u(X,"INPUT",{type:!0,class:!0,maxlength:!0,placeholder:!0}),X.forEach(d),x=B(U),C=u(U,"DIV",{class:!0});var Z=b(C);G=u(Z,"P",{});var ye=b(G);ee=O(ye,"State the details of the issue"),ye.forEach(d),te=B(Z),E=u(Z,"INPUT",{type:!0,id:!0,class:!0,maxlength:!0}),Z.forEach(d),se=B(U),M=u(U,"BUTTON",{class:!0});var ge=b(M);le=O(ge,"SUBMIT REPORT"),ge.forEach(d),ae=B(U),h&&h.l(U),U.forEach(d),ve.forEach(d),re=B(v),oe=u(v,"BR",{}),ne=u(v,"BR",{}),ie=u(v,"BR",{}),ue=u(v,"BR",{}),ce=u(v,"BR",{}),v.forEach(d),_.forEach(d),K=B(l),Ve(D.$$.fragment,l),this.h()},h(){o(r,"id","title"),o(r,"class","svelte-1tka8fl"),o(k,"type","text"),o(k,"class","form-control svelte-1tka8fl"),k.required=!0,o(T,"class","form-group svelte-1tka8fl"),o(g,"type","text"),o(g,"class","form-control svelte-1tka8fl"),o(g,"maxlength","6"),o(g,"placeholder","ABC123"),g.required=!0,o(P,"class","form-group svelte-1tka8fl"),o(E,"type","text"),o(E,"id","detailbox"),o(E,"class","form-control svelte-1tka8fl"),o(E,"maxlength","1000"),E.required=!0,o(C,"class","form-group svelte-1tka8fl"),o(M,"class","svelte-1tka8fl"),o(f,"id","surveyForm"),o(f,"class","mt-4"),Ee(f,"submitted",c[5]),o(I,"class","container svelte-1tka8fl"),o(e,"class","svelte-1tka8fl"),o(t,"class","svelte-1tka8fl")},m(l,_){J(l,t,_),s(t,e),s(e,r),s(r,m),s(e,n),~a&&S[a].m(e,null),s(e,R),s(e,I),s(I,f),s(f,T),s(T,V),s(V,H),s(T,W),s(T,k),A(k,c[0]),s(f,j),s(f,P),s(P,q),s(q,y),s(P,$),s(P,g),A(g,c[1]),s(f,x),s(f,C),s(C,G),s(G,ee),s(C,te),s(C,E),A(E,c[2]),s(f,se),s(f,M),s(M,le),s(f,ae),h&&h.m(f,null),s(e,re),s(e,oe),s(e,ne),s(e,ie),s(e,ue),s(e,ce),J(l,K,_),qe(D,l,_),L=!0,fe||(me=[F(k,"input",c[11]),F(g,"input",c[12]),F(E,"input",c[13]),F(M,"click",c[8]),F(f,"submit",Me(c[9]))],fe=!0)},p(l,[_]){let v=a;a=_e(l),a===v?~a&&S[a].p(l,_):(p&&(je(),pe(S[v],1,1,()=>{S[v]=null}),Ae()),~a?(p=S[a],p?p.p(l,_):(p=S[a]=he[a](l),p.c()),de(p,1),p.m(e,R)):p=null),_&1&&k.value!==l[0]&&A(k,l[0]),_&2&&g.value!==l[1]&&A(g,l[1]),_&4&&E.value!==l[2]&&A(E,l[2]),l[3].isadmin?h?h.p(l,_):(h=Pe(l),h.c(),h.m(f,null)):h&&(h.d(1),h=null),_&32&&Ee(f,"submitted",l[5]);const Y={};_&64&&(Y.show=l[6]),D.$set(Y)},i(l){L||(de(p),de(D.$$.fragment,l),L=!0)},o(l){pe(p),pe(D.$$.fragment,l),L=!1},d(l){l&&d(t),~a&&S[a].d(),h&&h.d(),l&&d(K),Fe(D,l),fe=!1,He(me)}}}const Ue="All the fields are mandatory";function $e(c,t,e){let r,m;Re(c,Le,y=>e(14,r=y));let n,a,p,R={isadmin:!1},I=!1,f=!1;const T=Ge(null);Re(c,T,y=>e(6,m=y));const V=async()=>{await Ye(Te(Je(Ie,"complaints"),r.user.uid),{date:ze.fromDate(new Date),title:n,plateNumReporting:a,reportDetails:p,resolved:!1}),await new Promise(y=>setTimeout(y,2500)),window.location.replace("/")},H=async()=>{e(4,I=!0),e(5,f=!0),currvalue=novalue,setTimeout(function(){e(4,I=!1)},8e3)};We(Te(Ie,"users",r.user.uid)).then(y=>{if(y.exists())return showusertype=y.get("userType"),showusertype;console.log("No such document!")}),W();async function W(){showusertype=="admin"?e(3,R.isadmin=!0,R):e(3,R.isadmin=!1,R),console.log(R.isadmin)}const k=async()=>!0;function j(){n=this.value,e(0,n)}function P(){a=this.value,e(1,a)}function q(){p=this.value,e(2,p)}return[n,a,p,R,I,f,m,T,V,H,k,j,P,q]}class st extends Ce{constructor(t){super();De(this,t,$e,Ze,Se,{})}}export{st as default};