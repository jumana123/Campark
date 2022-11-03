var ig=Object.defineProperty,sg=Object.defineProperties;var rg=Object.getOwnPropertyDescriptors;var Dl=Object.getOwnPropertySymbols;var og=Object.prototype.hasOwnProperty,ag=Object.prototype.propertyIsEnumerable;var Rl=(t,e,n)=>e in t?ig(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,rn=(t,e)=>{for(var n in e||(e={}))og.call(e,n)&&Rl(t,n,e[n]);if(Dl)for(var n of Dl(e))ag.call(e,n)&&Rl(t,n,e[n]);return t},Ll=(t,e)=>sg(t,rg(e));function _e(){}const Eu=t=>t;function wr(t,e){for(const n in e)t[n]=e[n];return t}function bu(t){return t()}function Pl(){return Object.create(null)}function at(t){t.forEach(bu)}function Vn(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ks;function AI(t,e){return ks||(ks=document.createElement("a")),ks.href=e,t===ks.href}function lg(t){return Object.keys(t).length===0}function cg(t,...e){if(t==null)return _e;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function NI(t,e,n){t.$$.on_destroy.push(cg(e,n))}function aa(t,e,n,i){if(t){const s=Tu(t,e,n,i);return t[0](s)}}function Tu(t,e,n,i){return t[1]&&i?wr(n.ctx.slice(),t[1](i(e))):n.ctx}function la(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|s[a];return r}return e.dirty|s}return e.dirty}function ca(t,e,n,i,s,r){if(s){const o=Tu(e,n,i,r);t.p(o,s)}}function ua(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ft(t){return t==null?"":t}const Su=typeof window!="undefined";let ug=Su?()=>window.performance.now():()=>Date.now(),ha=Su?t=>requestAnimationFrame(t):_e;const xn=new Set;function ku(t){xn.forEach(e=>{e.c(t)||(xn.delete(e),e.f())}),xn.size!==0&&ha(ku)}function hg(t){let e;return xn.size===0&&ha(ku),{promise:new Promise(n=>{xn.add(e={c:t,f:n})}),abort(){xn.delete(e)}}}let Ir=!1;function fg(){Ir=!0}function dg(){Ir=!1}function gg(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function mg(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const h=e[c];h.claim_order!==void 0&&l.push(h)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,h=(s>0&&e[n[s]].claim_order<=c?s+1:gg(1,s,f=>e[n[f]].claim_order,c))-1;i[l]=n[h]+1;const u=h+1;n[u]=l,s=Math.max(u,s)}const r=[],o=[];let a=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);a>=l;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);r.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<r.length&&o[l].claim_order>=r[c].claim_order;)c++;const h=c<r.length?r[c]:null;t.insertBefore(o[l],h)}}function Cu(t,e){t.appendChild(e)}function Au(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pg(t){const e=ie("style");return yg(Au(t),e),e.sheet}function yg(t,e){Cu(t.head||t,e)}function ne(t,e){if(Ir){for(mg(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function _g(t,e,n){t.insertBefore(e,n||null)}function X(t,e,n){Ir&&!n?ne(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function fa(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ie(t){return document.createElement(t)}function At(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Kt(t){return document.createTextNode(t)}function Re(){return Kt(" ")}function de(){return Kt("")}function oe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function vg(t){return function(e){return e.preventDefault(),t.call(this,e)}}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ml(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:w(t,i,e[i])}function Ao(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:w(t,e,n)}function OI(t){return t===""?null:+t}function $(t){return Array.from(t.childNodes)}function Nu(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Ou(t,e,n,i,s=!1){Nu(t);const r=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,s||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function Du(t,e,n,i){return Ou(t,s=>s.nodeName===e,s=>{const r=[];for(let o=0;o<s.attributes.length;o++){const a=s.attributes[o];n[a.name]||r.push(a.name)}r.forEach(o=>s.removeAttribute(o))},()=>i(e))}function ae(t,e,n){return Du(t,e,n,ie)}function Gt(t,e,n){return Du(t,e,n,At)}function Gn(t,e){return Ou(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Kt(e),!0)}function Le(t){return Gn(t," ")}function Ul(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function wg(t){const e=Ul(t,"HTML_TAG_START",0),n=Ul(t,"HTML_TAG_END",e);if(e===n)return new No;Nu(t);const i=t.splice(e,n-e+1);C(i[0]),C(i[i.length-1]);const s=i.slice(1,i.length-1);for(const r of s)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new No(s)}function Gs(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Vl(t,e){t.value=e==null?"":e}function Pn(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function DI(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function RI(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let Cs;function Ig(){if(Cs===void 0){Cs=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{Cs=!0}}return Cs}function Eg(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=ie("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Ig();let r;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=oe(window,"message",o=>{o.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{r=oe(i.contentWindow,"resize",e)}),Cu(t,i),()=>{(s||r&&i.contentWindow)&&r(),C(i)}}function me(t,e,n){t.classList[n?"add":"remove"](e)}function Ru(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function LI(t,e=document.body){return Array.from(e.querySelectorAll(t))}class bg{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=ie(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)_g(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(C)}}class No extends bg{constructor(e){super();this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)X(this.t,this.n[n],e)}}const zs=new Map;let Js=0;function Tg(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Sg(t,e){const n={stylesheet:pg(e),rules:{}};return zs.set(t,n),n}function Fl(t,e,n,i,s,r,o,a=0){const l=16.666/i;let c=`{
`;for(let O=0;O<=1;O+=l){const F=e+(n-e)*r(O);c+=O*100+`%{${o(F,1-F)}}
`}const h=c+`100% {${o(n,1-n)}}
}`,u=`__svelte_${Tg(h)}_${a}`,f=Au(t),{stylesheet:g,rules:m}=zs.get(f)||Sg(f,t);m[u]||(m[u]=!0,g.insertRule(`@keyframes ${u} ${h}`,g.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${u} ${i}ms linear ${s}ms 1 both`,Js+=1,u}function kg(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),Js-=s,Js||Cg())}function Cg(){ha(()=>{Js||(zs.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),zs.clear())})}let Pi;function Ai(t){Pi=t}function bn(){if(!Pi)throw new Error("Function called outside component initialization");return Pi}function Lu(t){bn().$$.before_update.push(t)}function Er(t){bn().$$.on_mount.push(t)}function PI(t){bn().$$.after_update.push(t)}function Pu(t){bn().$$.on_destroy.push(t)}function Yi(){const t=bn();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=Ru(e,n);i.slice().forEach(r=>{r.call(t,s)})}}}function Ag(t,e){bn().$$.context.set(t,e)}function MI(t){return bn().$$.context.get(t)}const bi=[],rt=[],Ms=[],Oo=[],Mu=Promise.resolve();let Do=!1;function Uu(){Do||(Do=!0,Mu.then(Vu))}function Us(){return Uu(),Mu}function hn(t){Ms.push(t)}function Ng(t){Oo.push(t)}const ao=new Set;let As=0;function Vu(){const t=Pi;do{for(;As<bi.length;){const e=bi[As];As++,Ai(e),Og(e.$$)}for(Ai(null),bi.length=0,As=0;rt.length;)rt.pop()();for(let e=0;e<Ms.length;e+=1){const n=Ms[e];ao.has(n)||(ao.add(n),n())}Ms.length=0}while(bi.length);for(;Oo.length;)Oo.pop()();Do=!1,ao.clear(),Ai(t)}function Og(t){if(t.fragment!==null){t.update(),at(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(hn)}}let Ii;function Dg(){return Ii||(Ii=Promise.resolve(),Ii.then(()=>{Ii=null})),Ii}function lo(t,e,n){t.dispatchEvent(Ru(`${e?"intro":"outro"}${n}`))}const Vs=new Set;let Et;function pe(){Et={r:0,c:[],p:Et}}function ye(){Et.r||at(Et.c),Et=Et.p}function P(t,e){t&&t.i&&(Vs.delete(t),t.i(e))}function x(t,e,n,i){if(t&&t.o){if(Vs.has(t))return;Vs.add(t),Et.c.push(()=>{Vs.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Rg={duration:0};function Ns(t,e,n,i){let s=e(t,n),r=i?0:1,o=null,a=null,l=null;function c(){l&&kg(t,l)}function h(f,g){const m=f.b-r;return g*=Math.abs(m),{a:r,b:f.b,d:m,duration:g,start:f.start,end:f.start+g,group:f.group}}function u(f){const{delay:g=0,duration:m=300,easing:_=Eu,tick:O=_e,css:F}=s||Rg,N={start:ug()+g,b:f};f||(N.group=Et,Et.r+=1),o||a?a=N:(F&&(c(),l=Fl(t,r,f,m,g,_,F)),f&&O(0,1),o=h(N,m),hn(()=>lo(t,f,"start")),hg(A=>{if(a&&A>a.start&&(o=h(a,m),a=null,lo(t,o.b,"start"),F&&(c(),l=Fl(t,r,o.b,o.duration,0,_,s.css))),o){if(A>=o.end)O(r=o.b,1-r),lo(t,o.b,"end"),a||(o.b?c():--o.group.r||at(o.group.c)),o=null;else if(A>=o.start){const p=A-o.start;r=o.a+o.d*_(p/o.duration),O(r,1-r)}}return!!(o||a)}))}return{run(f){Vn(s)?Dg().then(()=>{s=s(),u(f)}):u(f)},end(){c(),o=a=null}}}const Lg=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Pg(t,e){x(t,1,1,()=>{e.delete(t.key)})}function Mg(t,e,n,i,s,r,o,a,l,c,h,u){let f=t.length,g=r.length,m=f;const _={};for(;m--;)_[t[m].key]=m;const O=[],F=new Map,N=new Map;for(m=g;m--;){const v=u(s,r,m),J=n(v);let M=o.get(J);M?i&&M.p(v,e):(M=c(J,v),M.c()),F.set(J,O[m]=M),J in _&&N.set(J,Math.abs(m-_[J]))}const A=new Set,p=new Set;function k(v){P(v,1),v.m(a,h),o.set(v.key,v),h=v.first,g--}for(;f&&g;){const v=O[g-1],J=t[f-1],M=v.key,q=J.key;v===J?(h=v.first,f--,g--):F.has(q)?!o.has(M)||A.has(M)?k(v):p.has(q)?f--:N.get(M)>N.get(q)?(p.add(M),k(v)):(A.add(q),f--):(l(J,o),f--)}for(;f--;){const v=t[f];F.has(v.key)||l(v,o)}for(;g;)k(O[g-1]);return O}function da(t,e){const n={},i={},s={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(n[l]=a[l],s[l]=1);t[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in n||(n[o]=void 0);return n}function Fu(t){return typeof t=="object"&&t!==null?t:{}}function Bl(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function be(t){t&&t.c()}function yt(t,e){t&&t.l(e)}function ve(t,e,n,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=t.$$;s&&s.m(e,n),i||hn(()=>{const l=r.map(bu).filter(Vn);o?o.push(...l):at(l),t.$$.on_mount=[]}),a.forEach(hn)}function we(t,e){const n=t.$$;n.fragment!==null&&(at(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ug(t,e){t.$$.dirty[0]===-1&&(bi.push(t),Uu(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Rt(t,e,n,i,s,r,o,a=[-1]){const l=Pi;Ai(t);const c=t.$$={fragment:null,ctx:null,props:r,update:_e,not_equal:s,bound:Pl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Pl(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(u,f,...g)=>{const m=g.length?g[0]:f;return c.ctx&&s(c.ctx[u],c.ctx[u]=m)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](m),h&&Ug(t,u)),f}):[],c.update(),h=!0,at(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){fg();const u=$(e.target);c.fragment&&c.fragment.l(u),u.forEach(C)}else c.fragment&&c.fragment.c();e.intro&&P(t.$$.fragment),ve(t,e.target,e.anchor,e.customElement),dg(),Vu()}Ai(l)}class Lt{$destroy(){we(this,1),this.$destroy=_e}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!lg(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Mn=[];function UI(t,e=_e){let n;const i=new Set;function s(a){if(pt(t,a)&&(t=a,n)){const l=!Mn.length;for(const c of i)c[1](),Mn.push(c,t);if(l){for(let c=0;c<Mn.length;c+=2)Mn[c][0](Mn[c+1]);Mn.length=0}}}function r(a){s(a(t))}function o(a,l=_e){const c=[a,l];return i.add(c),i.size===1&&(n=e(s)||_e),a(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:s,update:r,subscribe:o}}const Vg=t=>({loading:t&1,success:t&8,error:t&2,notSupported:t&16,coords:t&4}),jl=t=>({loading:t[0],success:t[3],error:t[1],notSupported:t[4],coords:t[2]});function Fg(t){let e;const n=t[14].default,i=aa(n,t,t[13],jl);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,[r]){i&&i.p&&(!e||r&8223)&&ca(i,n,s,s[13],e?la(n,s[13],r,Vg):ua(s[13]),jl)},i(s){e||(P(i,s),e=!0)},o(s){x(i,s),e=!1},d(s){i&&i.d(s)}}}function Bg(t,e,n){let{$$slots:i={},$$scope:s}=e,{coords:r=[-1,-1]}=e,{position:o={}}=e,{options:a={}}=e,{getPosition:l=!1}=e,{watch:c=!1}=e,{loading:h=!1}=e,{success:u=!1}=e,{error:f=!1}=e,{notSupported:g=!1}=e;async function m(v){if(n(4,g=!1),n(0,h=!0),n(1,f=!1),!("geolocation"in navigator))n(4,g=!0);else return N&&await O(N),n(12,N=navigator.geolocation.watchPosition(p,k,v)),N}async function _(v){n(4,g=!1),n(0,h=!0),n(1,f=!1),"geolocation"in navigator?navigator.geolocation.getCurrentPosition(p,k,v):n(4,g=!0)}async function O(v){"geolocation"in navigator?(navigator.geolocation.clearWatch(v),v=void 0):n(4,g=!0)}const F=Yi();let N,A;function p(v){n(2,r=[v.coords.longitude,v.coords.latitude]),n(5,o={coords:{accuracy:v.coords.accuracy,altitude:v.coords.altitude,altitudeAccuracy:v.coords.altitudeAccuracy,heading:v.coords.heading,latitude:v.coords.latitude,longitude:v.coords.longitude,speed:v.coords.speed},timestamp:v.timestamp}),(!A||A.coords.latitude!==v.coords.latitude||A.coords.longitude!==v.coords.longitude)&&(A=v,F("position",o)),n(0,h=!1)}function k(v){F("error",v),n(1,f=v),n(0,h=!1)}return Pu(()=>{N&&O(N)}),t.$$set=v=>{"coords"in v&&n(2,r=v.coords),"position"in v&&n(5,o=v.position),"options"in v&&n(6,a=v.options),"getPosition"in v&&n(7,l=v.getPosition),"watch"in v&&n(8,c=v.watch),"loading"in v&&n(0,h=v.loading),"success"in v&&n(3,u=v.success),"error"in v&&n(1,f=v.error),"notSupported"in v&&n(4,g=v.notSupported),"$$scope"in v&&n(13,s=v.$$scope)},t.$$.update=()=>{t.$$.dirty&448&&typeof window!="undefined"&&l&&c&&m(a),t.$$.dirty&448&&typeof window!="undefined"&&l&&!c&&_(a),t.$$.dirty&131&&n(3,u=l&&!h&&!f),t.$$.dirty&4480&&(!l||!c)&&N&&O(N)},[h,f,r,u,g,o,a,l,c,m,_,O,N,s,i]}class VI extends Lt{constructor(e){super();Rt(this,e,Bg,Fg,pt,{coords:2,position:5,options:6,getPosition:7,watch:8,loading:0,success:3,error:1,notSupported:4,watchPosition:9,getGeolocationPosition:10,clearWatcher:11})}get watchPosition(){return this.$$.ctx[9]}get getGeolocationPosition(){return this.$$.ctx[10]}get clearWatcher(){return this.$$.ctx[11]}}function jg(t,e){const n=t.getBoundingClientRect(),i=e.getBoundingClientRect(),s={};return s.top=n.top<0,s.left=n.left<0,s.bottom=n.bottom+i.height>(window.innerHeight||document.documentElement.clientHeight),s.right=n.right>(window.innerWidth||document.documentElement.clientWidth),s.any=s.top||s.left||s.bottom||s.right,s}function xg(t){let e,n=t[0](t[1],t[2])+"",i;return{c(){e=ie("div"),this.h()},l(s){e=ae(s,"DIV",{class:!0});var r=$(e);r.forEach(C),this.h()},h(){w(e,"class",i="item "+t[3]+" svelte-3e0qet")},m(s,r){X(s,e,r),e.innerHTML=n},p(s,[r]){r&7&&n!==(n=s[0](s[1],s[2])+"")&&(e.innerHTML=n),r&8&&i!==(i="item "+s[3]+" svelte-3e0qet")&&w(e,"class",i)},i:_e,o:_e,d(s){s&&C(e)}}}function qg(t,e,n){let{isActive:i=!1}=e,{isFirst:s=!1}=e,{isHover:r=!1}=e,{isSelectable:o=!1}=e,{getOptionLabel:a=void 0}=e,{item:l=void 0}=e,{filterText:c=""}=e,h="";return t.$$set=u=>{"isActive"in u&&n(4,i=u.isActive),"isFirst"in u&&n(5,s=u.isFirst),"isHover"in u&&n(6,r=u.isHover),"isSelectable"in u&&n(7,o=u.isSelectable),"getOptionLabel"in u&&n(0,a=u.getOptionLabel),"item"in u&&n(1,l=u.item),"filterText"in u&&n(2,c=u.filterText)},t.$$.update=()=>{if(t.$$.dirty&242){const u=[];i&&u.push("active"),s&&u.push("first"),r&&u.push("hover"),l.isGroupHeader&&u.push("groupHeader"),l.isGroupItem&&u.push("groupItem"),o||u.push("notSelectable"),n(3,h=u.join(" "))}},[a,l,c,h,i,s,r,o]}class Bu extends Lt{constructor(e){super();Rt(this,e,qg,xg,pt,{isActive:4,isFirst:5,isHover:6,isSelectable:7,getOptionLabel:0,item:1,filterText:2})}}function xl(t,e,n){const i=t.slice();return i[41]=e[n],i[42]=n,i}function Hg(t){let e,n,i=t[1],s=[];for(let a=0;a<i.length;a+=1)s[a]=Wl(xl(t,i,a));const r=a=>x(s[a],1,1,()=>{s[a]=null});let o=null;return i.length||(o=ql(t)),{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=de(),o&&o.c()},l(a){for(let l=0;l<s.length;l+=1)s[l].l(a);e=de(),o&&o.l(a)},m(a,l){for(let c=0;c<s.length;c+=1)s[c].m(a,l);X(a,e,l),o&&o.m(a,l),n=!0},p(a,l){if(l[0]&114390){i=a[1];let c;for(c=0;c<i.length;c+=1){const h=xl(a,i,c);s[c]?(s[c].p(h,l),P(s[c],1)):(s[c]=Wl(h),s[c].c(),P(s[c],1),s[c].m(e.parentNode,e))}for(pe(),c=i.length;c<s.length;c+=1)r(c);ye(),!i.length&&o?o.p(a,l):i.length?o&&(o.d(1),o=null):(o=ql(a),o.c(),o.m(e.parentNode,e))}},i(a){if(!n){for(let l=0;l<i.length;l+=1)P(s[l]);n=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)x(s[l]);n=!1},d(a){fa(s,a),a&&C(e),o&&o.d(a)}}}function Wg(t){let e,n,i;var s=t[3];function r(o){return{props:{items:o[1],itemHeight:o[8],$$slots:{default:[zg,({item:a,i:l})=>({41:a,42:l}),({item:a,i:l})=>[0,(a?1024:0)|(l?2048:0)]]},$$scope:{ctx:o}}}}return s&&(e=new s(r(t))),{c(){e&&be(e.$$.fragment),n=de()},l(o){e&&yt(e.$$.fragment,o),n=de()},m(o,a){e&&ve(e,o,a),X(o,n,a),i=!0},p(o,a){const l={};if(a[0]&2&&(l.items=o[1]),a[0]&256&&(l.itemHeight=o[8]),a[0]&9814|a[1]&11264&&(l.$$scope={dirty:a,ctx:o}),s!==(s=o[3])){if(e){pe();const c=e;x(c.$$.fragment,1,0,()=>{we(c,1)}),ye()}s?(e=new s(r(o)),be(e.$$.fragment),P(e.$$.fragment,1),ve(e,n.parentNode,n)):e=null}else s&&e.$set(l)},i(o){i||(e&&P(e.$$.fragment,o),i=!0)},o(o){e&&x(e.$$.fragment,o),i=!1},d(o){o&&C(n),e&&we(e,o)}}}function ql(t){let e,n=!t[11]&&Hl(t);return{c(){n&&n.c(),e=de()},l(i){n&&n.l(i),e=de()},m(i,s){n&&n.m(i,s),X(i,e,s)},p(i,s){i[11]?n&&(n.d(1),n=null):n?n.p(i,s):(n=Hl(i),n.c(),n.m(e.parentNode,e))},d(i){n&&n.d(i),i&&C(e)}}}function Hl(t){let e,n;return{c(){e=ie("div"),n=Kt(t[12]),this.h()},l(i){e=ae(i,"DIV",{class:!0});var s=$(e);n=Gn(s,t[12]),s.forEach(C),this.h()},h(){w(e,"class","empty svelte-1uyqfml")},m(i,s){X(i,e,s),ne(e,n)},p(i,s){s[0]&4096&&Gs(n,i[12])},d(i){i&&C(e)}}}function Kg(t){let e,n,i,s,r,o;var a=t[4];function l(f){return{props:{item:f[41],filterText:f[13],getOptionLabel:f[6],isFirst:Ro(f[42]),isActive:Xs(f[41],f[9],f[10]),isHover:Ys(f[2],f[41],f[42],f[1]),isSelectable:fn(f[41])}}}a&&(n=new a(l(t)));function c(){return t[29](t[42])}function h(){return t[30](t[42])}function u(...f){return t[31](t[41],t[42],...f)}return{c(){e=ie("div"),n&&be(n.$$.fragment),i=Re(),this.h()},l(f){e=ae(f,"DIV",{class:!0,tabindex:!0});var g=$(e);n&&yt(n.$$.fragment,g),i=Le(g),g.forEach(C),this.h()},h(){w(e,"class","listItem"),w(e,"tabindex","-1")},m(f,g){X(f,e,g),n&&ve(n,e,null),ne(e,i),s=!0,r||(o=[oe(e,"mouseover",c),oe(e,"focus",h),oe(e,"click",u)],r=!0)},p(f,g){t=f;const m={};if(g[0]&2&&(m.item=t[41]),g[0]&8192&&(m.filterText=t[13]),g[0]&64&&(m.getOptionLabel=t[6]),g[0]&1538&&(m.isActive=Xs(t[41],t[9],t[10])),g[0]&6&&(m.isHover=Ys(t[2],t[41],t[42],t[1])),g[0]&2&&(m.isSelectable=fn(t[41])),a!==(a=t[4])){if(n){pe();const _=n;x(_.$$.fragment,1,0,()=>{we(_,1)}),ye()}a?(n=new a(l(t)),be(n.$$.fragment),P(n.$$.fragment,1),ve(n,e,i)):n=null}else a&&n.$set(m)},i(f){s||(n&&P(n.$$.fragment,f),s=!0)},o(f){n&&x(n.$$.fragment,f),s=!1},d(f){f&&C(e),n&&we(n),r=!1,at(o)}}}function Gg(t){let e,n=t[7](t[41])+"",i;return{c(){e=ie("div"),i=Kt(n),this.h()},l(s){e=ae(s,"DIV",{class:!0});var r=$(e);i=Gn(r,n),r.forEach(C),this.h()},h(){w(e,"class","listGroupTitle svelte-1uyqfml")},m(s,r){X(s,e,r),ne(e,i)},p(s,r){r[0]&130&&n!==(n=s[7](s[41])+"")&&Gs(i,n)},i:_e,o:_e,d(s){s&&C(e)}}}function Wl(t){let e,n,i,s;const r=[Gg,Kg],o=[];function a(l,c){return l[41].isGroupHeader&&!l[41].isSelectable?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),i=de()},l(l){n.l(l),i=de()},m(l,c){o[e].m(l,c),X(l,i,c),s=!0},p(l,c){let h=e;e=a(l),e===h?o[e].p(l,c):(pe(),x(o[h],1,1,()=>{o[h]=null}),ye(),n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),P(n,1),n.m(i.parentNode,i))},i(l){s||(P(n),s=!0)},o(l){x(n),s=!1},d(l){o[e].d(l),l&&C(i)}}}function zg(t){let e,n,i,s,r;var o=t[4];function a(u){return{props:{item:u[41],filterText:u[13],getOptionLabel:u[6],isFirst:Ro(u[42]),isActive:Xs(u[41],u[9],u[10]),isHover:Ys(u[2],u[41],u[42],u[1]),isSelectable:fn(u[41])}}}o&&(n=new o(a(t)));function l(){return t[26](t[42])}function c(){return t[27](t[42])}function h(...u){return t[28](t[41],t[42],...u)}return{c(){e=ie("div"),n&&be(n.$$.fragment),this.h()},l(u){e=ae(u,"DIV",{class:!0});var f=$(e);n&&yt(n.$$.fragment,f),f.forEach(C),this.h()},h(){w(e,"class","listItem")},m(u,f){X(u,e,f),n&&ve(n,e,null),i=!0,s||(r=[oe(e,"mouseover",l),oe(e,"focus",c),oe(e,"click",h)],s=!0)},p(u,f){t=u;const g={};if(f[1]&1024&&(g.item=t[41]),f[0]&8192&&(g.filterText=t[13]),f[0]&64&&(g.getOptionLabel=t[6]),f[1]&2048&&(g.isFirst=Ro(t[42])),f[0]&1536|f[1]&1024&&(g.isActive=Xs(t[41],t[9],t[10])),f[0]&6|f[1]&3072&&(g.isHover=Ys(t[2],t[41],t[42],t[1])),f[1]&1024&&(g.isSelectable=fn(t[41])),o!==(o=t[4])){if(n){pe();const m=n;x(m.$$.fragment,1,0,()=>{we(m,1)}),ye()}o?(n=new o(a(t)),be(n.$$.fragment),P(n.$$.fragment,1),ve(n,e,null)):n=null}else o&&n.$set(g)},i(u){i||(n&&P(n.$$.fragment,u),i=!0)},o(u){n&&x(n.$$.fragment,u),i=!1},d(u){u&&C(e),n&&we(n),s=!1,at(r)}}}function Jg(t){let e,n,i,s,r,o;const a=[Wg,Hg],l=[];function c(h,u){return h[5]?0:1}return n=c(t),i=l[n]=a[n](t),{c(){e=ie("div"),i.c(),this.h()},l(h){e=ae(h,"DIV",{class:!0,style:!0});var u=$(e);i.l(u),u.forEach(C),this.h()},h(){w(e,"class","listContainer svelte-1uyqfml"),w(e,"style",t[14]),me(e,"virtualList",t[5])},m(h,u){X(h,e,u),l[n].m(e,null),t[32](e),s=!0,r||(o=[oe(window,"keydown",t[17]),oe(window,"resize",t[18])],r=!0)},p(h,u){let f=n;n=c(h),n===f?l[n].p(h,u):(pe(),x(l[f],1,1,()=>{l[f]=null}),ye(),i=l[n],i?i.p(h,u):(i=l[n]=a[n](h),i.c()),P(i,1),i.m(e,null)),(!s||u[0]&16384)&&w(e,"style",h[14]),u[0]&32&&me(e,"virtualList",h[5])},i(h){s||(P(i),s=!0)},o(h){x(i),s=!1},d(h){h&&C(e),l[n].d(),t[32](null),r=!1,at(o)}}}function Xs(t,e,n){return e&&e[n]===t[n]}function Ro(t){return t===0}function Ys(t,e,n,i){return fn(e)&&(t===n||i.length===1)}function fn(t){return t.isGroupHeader&&t.isSelectable||t.selectable||!t.hasOwnProperty("selectable")}function Xg(t,e,n){const i=Yi();let{container:s=void 0}=e,{VirtualList:r=null}=e,{Item:o=Bu}=e,{isVirtualList:a=!1}=e,{items:l=[]}=e,{labelIdentifier:c="label"}=e,{getOptionLabel:h=(E,K)=>{if(E)return E.isCreator?`Create "${K}"`:E[c]}}=e,{getGroupHeaderLabel:u=null}=e,{itemHeight:f=40}=e,{hoverItemIndex:g=0}=e,{value:m=void 0}=e,{optionIdentifier:_="value"}=e,{hideEmptyState:O=!1}=e,{noOptionsMessage:F="No options"}=e,{isMulti:N=!1}=e,{activeItemIndex:A=0}=e,{filterText:p=""}=e,{parent:k=null}=e,{listPlacement:v=null}=e,{listAutoWidth:J=null}=e,{listOffset:M=5}=e,q=0,R=!1,ee;Er(()=>{if(l.length>0&&!N&&m){const E=l.findIndex(K=>K[_]===m[_]);E&&n(2,g=E)}De("active"),s.addEventListener("scroll",()=>{clearTimeout(q),q=setTimeout(()=>{R=!1},100)},!1)}),Lu(()=>{l||n(1,l=[]),l!==ee&&l.length>0&&n(2,g=0),ee=l});function H(E){E.isCreator||i("itemSelected",E)}function Y(E){R||n(2,g=E)}function Q(E){const{item:K,i:je,event:Mt}=E;if(Mt.stopPropagation(),m&&!N&&m[_]===K[_])return I();K.isCreator?i("itemCreated",p):fn(K)&&(n(19,A=je),n(2,g=je),H(K))}function I(){i("closeList")}async function T(E){if(a)return;let K=!0;for(;K;)E>0&&g===l.length-1?n(2,g=0):E<0&&g===0?n(2,g=l.length-1):n(2,g=g+E),K=!fn(l[g]);await Us(),De("hover")}function ge(E){switch(E.key){case"Escape":E.preventDefault(),I();break;case"ArrowDown":E.preventDefault(),l.length&&T(1);break;case"ArrowUp":E.preventDefault(),l.length&&T(-1);break;case"Enter":if(E.preventDefault(),l.length===0)break;const K=l[g];if(m&&!N&&m[_]===K[_]){I();break}K.isCreator?i("itemCreated",p):(n(19,A=g),H(l[g]));break;case"Tab":if(E.preventDefault(),l.length===0||m&&m[_]===l[g][_])return I();n(19,A=g),H(l[g]);break}}function De(E){if(a||!s)return;let K;const je=s.querySelector(`.listItem .${E}`);je&&(K=s.getBoundingClientRect().bottom-je.getBoundingClientRect().bottom),n(0,s.scrollTop-=K,s)}let Ye;function Qe(){const{height:E,width:K}=k.getBoundingClientRect();n(14,Ye=""),n(14,Ye+=`min-width:${K}px;width:${J?"auto":"100%"};`),v==="top"||v==="auto"&&jg(k,s).bottom?n(14,Ye+=`bottom:${E+M}px;`):n(14,Ye+=`top:${E+M}px;`)}const vt=E=>Y(E),lt=E=>Y(E),On=(E,K,je)=>Q({item:E,i:K,event:je}),wt=E=>Y(E),$t=E=>Y(E),Pt=(E,K,je)=>Q({item:E,i:K,event:je});function ct(E){rt[E?"unshift":"push"](()=>{s=E,n(0,s)})}return t.$$set=E=>{"container"in E&&n(0,s=E.container),"VirtualList"in E&&n(3,r=E.VirtualList),"Item"in E&&n(4,o=E.Item),"isVirtualList"in E&&n(5,a=E.isVirtualList),"items"in E&&n(1,l=E.items),"labelIdentifier"in E&&n(20,c=E.labelIdentifier),"getOptionLabel"in E&&n(6,h=E.getOptionLabel),"getGroupHeaderLabel"in E&&n(7,u=E.getGroupHeaderLabel),"itemHeight"in E&&n(8,f=E.itemHeight),"hoverItemIndex"in E&&n(2,g=E.hoverItemIndex),"value"in E&&n(9,m=E.value),"optionIdentifier"in E&&n(10,_=E.optionIdentifier),"hideEmptyState"in E&&n(11,O=E.hideEmptyState),"noOptionsMessage"in E&&n(12,F=E.noOptionsMessage),"isMulti"in E&&n(21,N=E.isMulti),"activeItemIndex"in E&&n(19,A=E.activeItemIndex),"filterText"in E&&n(13,p=E.filterText),"parent"in E&&n(22,k=E.parent),"listPlacement"in E&&n(23,v=E.listPlacement),"listAutoWidth"in E&&n(24,J=E.listAutoWidth),"listOffset"in E&&n(25,M=E.listOffset)},t.$$.update=()=>{t.$$.dirty[0]&4194305&&k&&s&&Qe()},[s,l,g,r,o,a,h,u,f,m,_,O,F,p,Ye,Y,Q,ge,Qe,A,c,N,k,v,J,M,vt,lt,On,wt,$t,Pt,ct]}class Yg extends Lt{constructor(e){super();Rt(this,e,Xg,Jg,pt,{container:0,VirtualList:3,Item:4,isVirtualList:5,items:1,labelIdentifier:20,getOptionLabel:6,getGroupHeaderLabel:7,itemHeight:8,hoverItemIndex:2,value:9,optionIdentifier:10,hideEmptyState:11,noOptionsMessage:12,isMulti:21,activeItemIndex:19,filterText:13,parent:22,listPlacement:23,listAutoWidth:24,listOffset:25},null,[-1,-1])}}function Qg(t){let e,n=t[0](t[1])+"";return{c(){e=ie("div"),this.h()},l(i){e=ae(i,"DIV",{class:!0});var s=$(e);s.forEach(C),this.h()},h(){w(e,"class","selection svelte-pu1q1n")},m(i,s){X(i,e,s),e.innerHTML=n},p(i,[s]){s&3&&n!==(n=i[0](i[1])+"")&&(e.innerHTML=n)},i:_e,o:_e,d(i){i&&C(e)}}}function Zg(t,e,n){let{getSelectionLabel:i=void 0}=e,{item:s=void 0}=e;return t.$$set=r=>{"getSelectionLabel"in r&&n(0,i=r.getSelectionLabel),"item"in r&&n(1,s=r.item)},[i,s]}class $g extends Lt{constructor(e){super();Rt(this,e,Zg,Qg,pt,{getSelectionLabel:0,item:1})}}function Kl(t,e,n){const i=t.slice();return i[9]=e[n],i[11]=n,i}function Gl(t){let e,n,i,s,r;function o(...a){return t[6](t[11],...a)}return{c(){e=ie("div"),n=At("svg"),i=At("path"),this.h()},l(a){e=ae(a,"DIV",{class:!0});var l=$(e);n=Gt(l,"svg",{width:!0,height:!0,viewBox:!0,focusable:!0,"aria-hidden":!0,role:!0,class:!0});var c=$(n);i=Gt(c,"path",{d:!0}),$(i).forEach(C),c.forEach(C),l.forEach(C),this.h()},h(){w(i,"d","M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"),w(n,"width","100%"),w(n,"height","100%"),w(n,"viewBox","-2 -2 50 50"),w(n,"focusable","false"),w(n,"aria-hidden","true"),w(n,"role","presentation"),w(n,"class","svelte-liu9pa"),w(e,"class","multiSelectItem_clear svelte-liu9pa")},m(a,l){X(a,e,l),ne(e,n),ne(n,i),s||(r=oe(e,"click",o),s=!0)},p(a,l){t=a},d(a){a&&C(e),s=!1,r()}}}function zl(t){let e,n,i=t[4](t[9])+"",s,r,o,a,l,c=!t[2]&&!t[3]&&Gl(t);function h(...u){return t[7](t[11],...u)}return{c(){e=ie("div"),n=ie("div"),s=Re(),c&&c.c(),r=Re(),this.h()},l(u){e=ae(u,"DIV",{class:!0});var f=$(e);n=ae(f,"DIV",{class:!0});var g=$(n);g.forEach(C),s=Le(f),c&&c.l(f),r=Le(f),f.forEach(C),this.h()},h(){w(n,"class","multiSelectItem_label svelte-liu9pa"),w(e,"class",o="multiSelectItem "+(t[1]===t[11]?"active":"")+" "+(t[2]?"disabled":"")+" svelte-liu9pa")},m(u,f){X(u,e,f),ne(e,n),n.innerHTML=i,ne(e,s),c&&c.m(e,null),ne(e,r),a||(l=oe(e,"click",h),a=!0)},p(u,f){t=u,f&17&&i!==(i=t[4](t[9])+"")&&(n.innerHTML=i),!t[2]&&!t[3]?c?c.p(t,f):(c=Gl(t),c.c(),c.m(e,r)):c&&(c.d(1),c=null),f&6&&o!==(o="multiSelectItem "+(t[1]===t[11]?"active":"")+" "+(t[2]?"disabled":"")+" svelte-liu9pa")&&w(e,"class",o)},d(u){u&&C(e),c&&c.d(),a=!1,l()}}}function em(t){let e,n=t[0],i=[];for(let s=0;s<n.length;s+=1)i[s]=zl(Kl(t,n,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=de()},l(s){for(let r=0;r<i.length;r+=1)i[r].l(s);e=de()},m(s,r){for(let o=0;o<i.length;o+=1)i[o].m(s,r);X(s,e,r)},p(s,[r]){if(r&63){n=s[0];let o;for(o=0;o<n.length;o+=1){const a=Kl(s,n,o);i[o]?i[o].p(a,r):(i[o]=zl(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},i:_e,o:_e,d(s){fa(i,s),s&&C(e)}}}function tm(t,e,n){const i=Yi();let{value:s=[]}=e,{activeValue:r=void 0}=e,{isDisabled:o=!1}=e,{multiFullItemClearable:a=!1}=e,{getSelectionLabel:l=void 0}=e;function c(f,g){g.stopPropagation(),i("multiItemClear",{i:f})}const h=(f,g)=>c(f,g),u=(f,g)=>a?c(f,g):{};return t.$$set=f=>{"value"in f&&n(0,s=f.value),"activeValue"in f&&n(1,r=f.activeValue),"isDisabled"in f&&n(2,o=f.isDisabled),"multiFullItemClearable"in f&&n(3,a=f.multiFullItemClearable),"getSelectionLabel"in f&&n(4,l=f.getSelectionLabel)},[s,r,o,a,l,c,h,u]}class nm extends Lt{constructor(e){super();Rt(this,e,tm,em,pt,{value:0,activeValue:1,isDisabled:2,multiFullItemClearable:3,getSelectionLabel:4})}}function Jl(t,e,n){const i=t.slice();return i[23]=e[n],i}const im=t=>({item:t&32,i:t&32,hoverItemIndex:t&2}),Xl=t=>({item:t[23].data,i:t[23].index,hoverItemIndex:t[1]});function sm(t){let e;return{c(){e=Kt("Missing template")},l(n){e=Gn(n,"Missing template")},m(n,i){X(n,e,i)},d(n){n&&C(e)}}}function Yl(t,e){let n,i,s;const r=e[15].default,o=aa(r,e,e[14],Xl),a=o||sm();return{key:t,first:null,c(){n=ie("svelte-virtual-list-row"),a&&a.c(),i=Re(),this.h()},l(l){n=ae(l,"SVELTE-VIRTUAL-LIST-ROW",{class:!0});var c=$(n);a&&a.l(c),i=Le(c),c.forEach(C),this.h()},h(){Ao(n,"class","svelte-g2cagw"),this.first=n},m(l,c){X(l,n,c),a&&a.m(n,null),ne(n,i),s=!0},p(l,c){e=l,o&&o.p&&(!s||c&16418)&&ca(o,r,e,e[14],s?la(r,e[14],c,im):ua(e[14]),Xl)},i(l){s||(P(a,l),s=!0)},o(l){x(a,l),s=!1},d(l){l&&C(n),a&&a.d(l)}}}function rm(t){let e,n,i=[],s=new Map,r,o,a,l,c=t[5];const h=u=>u[23].index;for(let u=0;u<c.length;u+=1){let f=Jl(t,c,u),g=h(f);s.set(g,i[u]=Yl(g,f))}return{c(){e=ie("svelte-virtual-list-viewport"),n=ie("svelte-virtual-list-contents");for(let u=0;u<i.length;u+=1)i[u].c();this.h()},l(u){e=ae(u,"SVELTE-VIRTUAL-LIST-VIEWPORT",{style:!0,class:!0});var f=$(e);n=ae(f,"SVELTE-VIRTUAL-LIST-CONTENTS",{style:!0,class:!0});var g=$(n);for(let m=0;m<i.length;m+=1)i[m].l(g);g.forEach(C),f.forEach(C),this.h()},h(){Pn(n,"padding-top",t[6]+"px"),Pn(n,"padding-bottom",t[7]+"px"),Ao(n,"class","svelte-g2cagw"),Pn(e,"height",t[0]),Ao(e,"class","svelte-g2cagw"),hn(()=>t[18].call(e))},m(u,f){X(u,e,f),ne(e,n);for(let g=0;g<i.length;g+=1)i[g].m(n,null);t[16](n),t[17](e),r=Eg(e,t[18].bind(e)),o=!0,a||(l=oe(e,"scroll",t[8]),a=!0)},p(u,[f]){f&16418&&(c=u[5],pe(),i=Mg(i,f,h,1,u,c,s,n,Pg,Yl,null,Jl),ye()),(!o||f&64)&&Pn(n,"padding-top",u[6]+"px"),(!o||f&128)&&Pn(n,"padding-bottom",u[7]+"px"),(!o||f&1)&&Pn(e,"height",u[0])},i(u){if(!o){for(let f=0;f<c.length;f+=1)P(i[f]);o=!0}},o(u){for(let f=0;f<i.length;f+=1)x(i[f]);o=!1},d(u){u&&C(e);for(let f=0;f<i.length;f+=1)i[f].d();t[16](null),t[17](null),r(),a=!1,l()}}}function om(t,e,n){let{$$slots:i={},$$scope:s}=e,{items:r=void 0}=e,{height:o="100%"}=e,{itemHeight:a=40}=e,{hoverItemIndex:l=0}=e,{start:c=0}=e,{end:h=0}=e,u=[],f,g,m,_=0,O,F,N=0,A=0,p;async function k(R,ee,H){const{scrollTop:Y}=g;await Us();let Q=N-Y,I=c;for(;Q<ee&&I<R.length;){let ge=f[I-c];ge||(n(10,h=I+1),await Us(),ge=f[I-c]),Q+=u[I]=H||ge.offsetHeight,I+=1}n(10,h=I);const T=R.length-h;p=(N+Q)/h,n(7,A=T*p),u.length=R.length,g&&n(3,g.scrollTop=0,g)}async function v(){const{scrollTop:R}=g,ee=c;for(let I=0;I<f.length;I+=1)u[c+I]=a||f[I].offsetHeight;let H=0,Y=0;for(;H<r.length;){const I=u[H]||p;if(Y+I>R){n(9,c=H),n(6,N=Y);break}Y+=I,H+=1}for(;H<r.length&&(Y+=u[H]||p,H+=1,!(Y>R+_)););n(10,h=H);const Q=r.length-h;for(p=Y/h;H<r.length;)u[H++]=p;if(n(7,A=Q*p),c<ee){await Us();let I=0,T=0;for(let De=c;De<ee;De+=1)f[De-c]&&(I+=u[De],T+=a||f[De-c].offsetHeight);const ge=T-I;g.scrollTo(0,R+ge)}}Er(()=>{f=m.getElementsByTagName("svelte-virtual-list-row"),n(13,F=!0)});function J(R){rt[R?"unshift":"push"](()=>{m=R,n(4,m)})}function M(R){rt[R?"unshift":"push"](()=>{g=R,n(3,g)})}function q(){_=this.offsetHeight,n(2,_)}return t.$$set=R=>{"items"in R&&n(11,r=R.items),"height"in R&&n(0,o=R.height),"itemHeight"in R&&n(12,a=R.itemHeight),"hoverItemIndex"in R&&n(1,l=R.hoverItemIndex),"start"in R&&n(9,c=R.start),"end"in R&&n(10,h=R.end),"$$scope"in R&&n(14,s=R.$$scope)},t.$$.update=()=>{t.$$.dirty&3584&&n(5,O=r.slice(c,h).map((R,ee)=>({index:ee+c,data:R}))),t.$$.dirty&14340&&F&&k(r,_,a)},[o,l,_,g,m,O,N,A,v,c,h,r,a,F,s,i,J,M,q]}class am extends Lt{constructor(e){super();Rt(this,e,om,rm,pt,{items:11,height:0,itemHeight:12,hoverItemIndex:1,start:9,end:10})}}function lm(t){let e,n;return{c(){e=At("svg"),n=At("path"),this.h()},l(i){e=Gt(i,"svg",{width:!0,height:!0,viewBox:!0,focusable:!0,"aria-hidden":!0,role:!0});var s=$(e);n=Gt(s,"path",{fill:!0,d:!0}),$(n).forEach(C),s.forEach(C),this.h()},h(){w(n,"fill","currentColor"),w(n,"d",`M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z`),w(e,"width","100%"),w(e,"height","100%"),w(e,"viewBox","-2 -2 50 50"),w(e,"focusable","false"),w(e,"aria-hidden","true"),w(e,"role","presentation")},m(i,s){X(i,e,s),ne(e,n)},p:_e,i:_e,o:_e,d(i){i&&C(e)}}}class cm extends Lt{constructor(e){super();Rt(this,e,null,lm,pt,{})}}function um(t,e,n){let i;return function(){let r=this,o=arguments,a=function(){i=null,n||t.apply(r,o)},l=n&&!i;clearTimeout(i),i=setTimeout(a,e),l&&t.apply(r,o)}}function Ql(t,e,n){const i=t.slice();return i[103]=e[n],i}function Zl(t){let e,n,i,s,r;return{c(){e=ie("span"),n=Kt(t[33]),i=Re(),s=ie("span"),r=Kt(t[32]),this.h()},l(o){e=ae(o,"SPAN",{id:!0});var a=$(e);n=Gn(a,t[33]),a.forEach(C),i=Le(o),s=ae(o,"SPAN",{id:!0});var l=$(s);r=Gn(l,t[32]),l.forEach(C),this.h()},h(){w(e,"id","aria-selection"),w(s,"id","aria-context")},m(o,a){X(o,e,a),ne(e,n),X(o,i,a),X(o,s,a),ne(s,r)},p(o,a){a[1]&4&&Gs(n,o[33]),a[1]&2&&Gs(r,o[32])},d(o){o&&C(e),o&&C(i),o&&C(s)}}}function $l(t){let e,n,i;const s=[t[18]];var r=t[17];function o(a){let l={};for(let c=0;c<s.length;c+=1)l=wr(l,s[c]);return{props:l}}return r&&(e=new r(o())),{c(){e&&be(e.$$.fragment),n=de()},l(a){e&&yt(e.$$.fragment,a),n=de()},m(a,l){e&&ve(e,a,l),X(a,n,l),i=!0},p(a,l){const c=l[0]&262144?da(s,[Fu(a[18])]):{};if(r!==(r=a[17])){if(e){pe();const h=e;x(h.$$.fragment,1,0,()=>{we(h,1)}),ye()}r?(e=new r(o()),be(e.$$.fragment),P(e.$$.fragment,1),ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){i||(e&&P(e.$$.fragment,a),i=!0)},o(a){e&&x(e.$$.fragment,a),i=!1},d(a){a&&C(n),e&&we(e,a)}}}function ec(t){let e,n,i;var s=t[26];function r(o){return{props:{value:o[2],getSelectionLabel:o[12],activeValue:o[30],isDisabled:o[9],multiFullItemClearable:o[8]}}}return s&&(e=new s(r(t)),e.$on("multiItemClear",t[38]),e.$on("focus",t[40])),{c(){e&&be(e.$$.fragment),n=de()},l(o){e&&yt(e.$$.fragment,o),n=de()},m(o,a){e&&ve(e,o,a),X(o,n,a),i=!0},p(o,a){const l={};if(a[0]&4&&(l.value=o[2]),a[0]&4096&&(l.getSelectionLabel=o[12]),a[0]&1073741824&&(l.activeValue=o[30]),a[0]&512&&(l.isDisabled=o[9]),a[0]&256&&(l.multiFullItemClearable=o[8]),s!==(s=o[26])){if(e){pe();const c=e;x(c.$$.fragment,1,0,()=>{we(c,1)}),ye()}s?(e=new s(r(o)),e.$on("multiItemClear",o[38]),e.$on("focus",o[40]),be(e.$$.fragment),P(e.$$.fragment,1),ve(e,n.parentNode,n)):e=null}else s&&e.$set(l)},i(o){i||(e&&P(e.$$.fragment,o),i=!0)},o(o){e&&x(e.$$.fragment,o),i=!1},d(o){o&&C(n),e&&we(e,o)}}}function tc(t){let e,n,i,s,r;var o=t[25];function a(l){return{props:{item:l[2],getSelectionLabel:l[12]}}}return o&&(n=new o(a(t))),{c(){e=ie("div"),n&&be(n.$$.fragment),this.h()},l(l){e=ae(l,"DIV",{class:!0});var c=$(e);n&&yt(n.$$.fragment,c),c.forEach(C),this.h()},h(){w(e,"class","selectedItem svelte-17l1npl")},m(l,c){X(l,e,c),n&&ve(n,e,null),i=!0,s||(r=oe(e,"focus",t[40]),s=!0)},p(l,c){const h={};if(c[0]&4&&(h.item=l[2]),c[0]&4096&&(h.getSelectionLabel=l[12]),o!==(o=l[25])){if(n){pe();const u=n;x(u.$$.fragment,1,0,()=>{we(u,1)}),ye()}o?(n=new o(a(l)),be(n.$$.fragment),P(n.$$.fragment,1),ve(n,e,null)):n=null}else o&&n.$set(h)},i(l){i||(n&&P(n.$$.fragment,l),i=!0)},o(l){n&&x(n.$$.fragment,l),i=!1},d(l){l&&C(e),n&&we(n),s=!1,r()}}}function nc(t){let e,n,i,s,r;var o=t[23];function a(l){return{}}return o&&(n=new o(a())),{c(){e=ie("div"),n&&be(n.$$.fragment),this.h()},l(l){e=ae(l,"DIV",{class:!0,"aria-hidden":!0});var c=$(e);n&&yt(n.$$.fragment,c),c.forEach(C),this.h()},h(){w(e,"class","clearSelect svelte-17l1npl"),w(e,"aria-hidden","true")},m(l,c){X(l,e,c),n&&ve(n,e,null),i=!0,s||(r=oe(e,"click",vg(t[27])),s=!0)},p(l,c){if(o!==(o=l[23])){if(n){pe();const h=n;x(h.$$.fragment,1,0,()=>{we(h,1)}),ye()}o?(n=new o(a()),be(n.$$.fragment),P(n.$$.fragment,1),ve(n,e,null)):n=null}},i(l){i||(n&&P(n.$$.fragment,l),i=!0)},o(l){n&&x(n.$$.fragment,l),i=!1},d(l){l&&C(e),n&&we(n),s=!1,r()}}}function ic(t){let e;function n(r,o){return r[22]?fm:hm}let i=n(t),s=i(t);return{c(){e=ie("div"),s.c(),this.h()},l(r){e=ae(r,"DIV",{class:!0,"aria-hidden":!0});var o=$(e);s.l(o),o.forEach(C),this.h()},h(){w(e,"class","indicator svelte-17l1npl"),w(e,"aria-hidden","true")},m(r,o){X(r,e,o),s.m(e,null)},p(r,o){i===(i=n(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(e,null)))},d(r){r&&C(e),s.d()}}}function hm(t){let e,n;return{c(){e=At("svg"),n=At("path"),this.h()},l(i){e=Gt(i,"svg",{width:!0,height:!0,viewBox:!0,focusable:!0,"aria-hidden":!0,class:!0});var s=$(e);n=Gt(s,"path",{d:!0}),$(n).forEach(C),s.forEach(C),this.h()},h(){w(n,"d",`M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z`),w(e,"width","100%"),w(e,"height","100%"),w(e,"viewBox","0 0 20 20"),w(e,"focusable","false"),w(e,"aria-hidden","true"),w(e,"class","svelte-17l1npl")},m(i,s){X(i,e,s),ne(e,n)},p:_e,d(i){i&&C(e)}}}function fm(t){let e,n;return{c(){e=new No,n=de(),this.h()},l(i){e=wg(i),n=de(),this.h()},h(){e.a=n},m(i,s){e.m(t[22],i,s),X(i,n,s)},p(i,s){s[0]&4194304&&e.p(i[22])},d(i){i&&C(n),i&&e.d()}}}function sc(t){let e,n,i;return{c(){e=ie("div"),n=At("svg"),i=At("circle"),this.h()},l(s){e=ae(s,"DIV",{class:!0});var r=$(e);n=Gt(r,"svg",{class:!0,viewBox:!0});var o=$(n);i=Gt(o,"circle",{class:!0,cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-miterlimit":!0}),$(i).forEach(C),o.forEach(C),r.forEach(C),this.h()},h(){w(i,"class","spinner_path svelte-17l1npl"),w(i,"cx","50"),w(i,"cy","50"),w(i,"r","20"),w(i,"fill","none"),w(i,"stroke","currentColor"),w(i,"stroke-width","5"),w(i,"stroke-miterlimit","10"),w(n,"class","spinner_icon svelte-17l1npl"),w(n,"viewBox","25 25 50 50"),w(e,"class","spinner svelte-17l1npl")},m(s,r){X(s,e,r),ne(e,n),ne(n,i)},d(s){s&&C(e)}}}function rc(t){let e,n,i,s;const r=[t[34]];function o(c){t[84](c)}var a=t[24];function l(c){let h={};for(let u=0;u<r.length;u+=1)h=wr(h,r[u]);return c[28]!==void 0&&(h.hoverItemIndex=c[28]),{props:h}}return a&&(e=new a(l(t)),rt.push(()=>Bl(e,"hoverItemIndex",o)),e.$on("itemSelected",t[43]),e.$on("itemCreated",t[44]),e.$on("closeList",t[45])),{c(){e&&be(e.$$.fragment),i=de()},l(c){e&&yt(e.$$.fragment,c),i=de()},m(c,h){e&&ve(e,c,h),X(c,i,h),s=!0},p(c,h){const u=h[1]&8?da(r,[Fu(c[34])]):{};if(!n&&h[0]&268435456&&(n=!0,u.hoverItemIndex=c[28],Ng(()=>n=!1)),a!==(a=c[24])){if(e){pe();const f=e;x(f.$$.fragment,1,0,()=>{we(f,1)}),ye()}a?(e=new a(l(c)),rt.push(()=>Bl(e,"hoverItemIndex",o)),e.$on("itemSelected",c[43]),e.$on("itemCreated",c[44]),e.$on("closeList",c[45]),be(e.$$.fragment),P(e.$$.fragment,1),ve(e,i.parentNode,i)):e=null}else a&&e.$set(u)},i(c){s||(e&&P(e.$$.fragment,c),s=!0)},o(c){e&&x(e.$$.fragment,c),s=!1},d(c){c&&C(i),e&&we(e,c)}}}function oc(t){let e,n,i;return{c(){e=ie("input"),this.h()},l(s){e=ae(s,"INPUT",{name:!0,type:!0,class:!0}),this.h()},h(){w(e,"name",n=t[16].name),w(e,"type","hidden"),e.value=i=t[2]?t[12](t[2]):null,w(e,"class","svelte-17l1npl")},m(s,r){X(s,e,r)},p(s,r){r[0]&65536&&n!==(n=s[16].name)&&w(e,"name",n),r[0]&4100&&i!==(i=s[2]?s[12](s[2]):null)&&(e.value=i)},d(s){s&&C(e)}}}function ac(t){let e,n=t[2],i=[];for(let s=0;s<n.length;s+=1)i[s]=lc(Ql(t,n,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=de()},l(s){for(let r=0;r<i.length;r+=1)i[r].l(s);e=de()},m(s,r){for(let o=0;o<i.length;o+=1)i[o].m(s,r);X(s,e,r)},p(s,r){if(r[0]&69636){n=s[2];let o;for(o=0;o<n.length;o+=1){const a=Ql(s,n,o);i[o]?i[o].p(a,r):(i[o]=lc(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},d(s){fa(i,s),s&&C(e)}}}function lc(t){let e,n,i;return{c(){e=ie("input"),this.h()},l(s){e=ae(s,"INPUT",{name:!0,type:!0,class:!0}),this.h()},h(){w(e,"name",n=t[16].name),w(e,"type","hidden"),e.value=i=t[103]?t[12](t[103]):null,w(e,"class","svelte-17l1npl")},m(s,r){X(s,e,r)},p(s,r){r[0]&65536&&n!==(n=s[16].name)&&w(e,"name",n),r[0]&4100&&i!==(i=s[103]?s[12](s[103]):null)&&(e.value=i)},d(s){s&&C(e)}}}function dm(t){let e,n,i,s,r,o,a,l,c,h,u,f,g,m,_,O,F,N,A=t[1]&&Zl(t),p=t[17]&&$l(t),k=t[35]&&ec(t),v=[{readOnly:a=!t[13]},t[31],{placeholder:t[36]},{style:t[14]},{disabled:t[9]}],J={};for(let I=0;I<v.length;I+=1)J=wr(J,v[I]);let M=!t[7]&&t[29]&&tc(t),q=t[37]&&nc(t),R=!t[37]&&(t[20]||t[19]&&!t[2]||!t[13]&&!t[9]&&!t[4]&&(t[29]&&!t[15]||!t[29]))&&ic(t),ee=t[4]&&sc(),H=t[5]&&rc(t),Y=(!t[7]||t[7]&&!t[35])&&oc(t),Q=t[7]&&t[35]&&ac(t);return{c(){e=ie("div"),n=ie("span"),A&&A.c(),i=Re(),p&&p.c(),s=Re(),k&&k.c(),r=Re(),o=ie("input"),l=Re(),M&&M.c(),c=Re(),q&&q.c(),h=Re(),R&&R.c(),u=Re(),ee&&ee.c(),f=Re(),H&&H.c(),g=Re(),Y&&Y.c(),m=Re(),Q&&Q.c(),this.h()},l(I){e=ae(I,"DIV",{class:!0,style:!0});var T=$(e);n=ae(T,"SPAN",{"aria-live":!0,"aria-atomic":!0,"aria-relevant":!0,class:!0});var ge=$(n);A&&A.l(ge),ge.forEach(C),i=Le(T),p&&p.l(T),s=Le(T),k&&k.l(T),r=Le(T),o=ae(T,"INPUT",{placeholder:!0,style:!0}),l=Le(T),M&&M.l(T),c=Le(T),q&&q.l(T),h=Le(T),R&&R.l(T),u=Le(T),ee&&ee.l(T),f=Le(T),H&&H.l(T),g=Le(T),Y&&Y.l(T),m=Le(T),Q&&Q.l(T),T.forEach(C),this.h()},h(){w(n,"aria-live","polite"),w(n,"aria-atomic","false"),w(n,"aria-relevant","additions text"),w(n,"class","a11yText svelte-17l1npl"),Ml(o,J),me(o,"svelte-17l1npl",!0),w(e,"class",_="selectContainer "+t[21]+" svelte-17l1npl"),w(e,"style",t[11]),me(e,"hasError",t[10]),me(e,"multiSelect",t[7]),me(e,"disabled",t[9]),me(e,"focused",t[1])},m(I,T){X(I,e,T),ne(e,n),A&&A.m(n,null),ne(e,i),p&&p.m(e,null),ne(e,s),k&&k.m(e,null),ne(e,r),ne(e,o),o.autofocus&&o.focus(),t[82](o),Vl(o,t[3]),ne(e,l),M&&M.m(e,null),ne(e,c),q&&q.m(e,null),ne(e,h),R&&R.m(e,null),ne(e,u),ee&&ee.m(e,null),ne(e,f),H&&H.m(e,null),ne(e,g),Y&&Y.m(e,null),ne(e,m),Q&&Q.m(e,null),t[85](e),O=!0,F||(N=[oe(window,"click",t[41]),oe(window,"focusin",t[41]),oe(window,"keydown",t[39]),oe(o,"focus",t[40]),oe(o,"input",t[83]),oe(e,"click",t[42])],F=!0)},p(I,T){I[1]?A?A.p(I,T):(A=Zl(I),A.c(),A.m(n,null)):A&&(A.d(1),A=null),I[17]?p?(p.p(I,T),T[0]&131072&&P(p,1)):(p=$l(I),p.c(),P(p,1),p.m(e,s)):p&&(pe(),x(p,1,1,()=>{p=null}),ye()),I[35]?k?(k.p(I,T),T[1]&16&&P(k,1)):(k=ec(I),k.c(),P(k,1),k.m(e,r)):k&&(pe(),x(k,1,1,()=>{k=null}),ye()),Ml(o,J=da(v,[(!O||T[0]&8192&&a!==(a=!I[13]))&&{readOnly:a},T[1]&1&&I[31],(!O||T[1]&32)&&{placeholder:I[36]},(!O||T[0]&16384)&&{style:I[14]},(!O||T[0]&512)&&{disabled:I[9]}])),T[0]&8&&o.value!==I[3]&&Vl(o,I[3]),me(o,"svelte-17l1npl",!0),!I[7]&&I[29]?M?(M.p(I,T),T[0]&536871040&&P(M,1)):(M=tc(I),M.c(),P(M,1),M.m(e,c)):M&&(pe(),x(M,1,1,()=>{M=null}),ye()),I[37]?q?(q.p(I,T),T[1]&64&&P(q,1)):(q=nc(I),q.c(),P(q,1),q.m(e,h)):q&&(pe(),x(q,1,1,()=>{q=null}),ye()),!I[37]&&(I[20]||I[19]&&!I[2]||!I[13]&&!I[9]&&!I[4]&&(I[29]&&!I[15]||!I[29]))?R?R.p(I,T):(R=ic(I),R.c(),R.m(e,u)):R&&(R.d(1),R=null),I[4]?ee||(ee=sc(),ee.c(),ee.m(e,f)):ee&&(ee.d(1),ee=null),I[5]?H?(H.p(I,T),T[0]&32&&P(H,1)):(H=rc(I),H.c(),P(H,1),H.m(e,g)):H&&(pe(),x(H,1,1,()=>{H=null}),ye()),!I[7]||I[7]&&!I[35]?Y?Y.p(I,T):(Y=oc(I),Y.c(),Y.m(e,m)):Y&&(Y.d(1),Y=null),I[7]&&I[35]?Q?Q.p(I,T):(Q=ac(I),Q.c(),Q.m(e,null)):Q&&(Q.d(1),Q=null),(!O||T[0]&2097152&&_!==(_="selectContainer "+I[21]+" svelte-17l1npl"))&&w(e,"class",_),(!O||T[0]&2048)&&w(e,"style",I[11]),T[0]&2098176&&me(e,"hasError",I[10]),T[0]&2097280&&me(e,"multiSelect",I[7]),T[0]&2097664&&me(e,"disabled",I[9]),T[0]&2097154&&me(e,"focused",I[1])},i(I){O||(P(p),P(k),P(M),P(q),P(H),O=!0)},o(I){x(p),x(k),x(M),x(q),x(H),O=!1},d(I){I&&C(e),A&&A.d(),p&&p.d(),k&&k.d(),t[82](null),M&&M.d(),q&&q.d(),R&&R.d(),ee&&ee.d(),H&&H.d(),Y&&Y.d(),Q&&Q.d(),t[85](null),F=!1,at(N)}}}function cc(t){return t.map((e,n)=>({index:n,value:e,label:`${e}`}))}function gm(t,e,n){let i,s,r,o,a,l,c,h;const u=Yi();let{id:f=null}=e,{container:g=void 0}=e,{input:m=void 0}=e,{isMulti:_=!1}=e,{multiFullItemClearable:O=!1}=e,{isDisabled:F=!1}=e,{isCreatable:N=!1}=e,{isFocused:A=!1}=e,{value:p=null}=e,{filterText:k=""}=e,{placeholder:v="Select..."}=e,{placeholderAlwaysShow:J=!1}=e,{items:M=null}=e,{itemFilter:q=(d,V,le)=>`${d}`.toLowerCase().includes(V.toLowerCase())}=e,{groupBy:R=void 0}=e,{groupFilter:ee=d=>d}=e,{isGroupHeaderSelectable:H=!1}=e,{getGroupHeaderLabel:Y=d=>d[Q]||d.id}=e,{labelIdentifier:Q="label"}=e,{getOptionLabel:I=(d,V)=>d.isCreator?`Create "${V}"`:d[Q]}=e,{optionIdentifier:T="value"}=e,{loadOptions:ge=void 0}=e,{hasError:De=!1}=e,{containerStyles:Ye=""}=e,{getSelectionLabel:Qe=d=>d?d[Q]:null}=e,{createGroupHeaderItem:vt=d=>({value:d,label:d})}=e,{createItem:lt=d=>({value:d,label:d})}=e;const On=()=>i;let{isSearchable:wt=!0}=e,{inputStyles:$t=""}=e,{isClearable:Pt=!0}=e,{isWaiting:ct=!1}=e,{listPlacement:E="auto"}=e,{listOpen:K=!1}=e,{isVirtualList:je=!1}=e,{loadOptionsInterval:Mt=300}=e,{noOptionsMessage:Dn="No options"}=e,{hideEmptyState:gi=!1}=e,{inputAttributes:ut={}}=e,{listAutoWidth:Rn=!0}=e,{itemHeight:mi=40}=e,{Icon:en=void 0}=e,{iconProps:pi={}}=e,{showChevron:tn=!1}=e,{showIndicator:yi=!1}=e,{containerClasses:nn=""}=e,{indicatorSvg:_i=void 0}=e,{listOffset:ht=5}=e,{ClearIcon:ws=cm}=e,{Item:vi=Bu}=e,{List:Is=Yg}=e,{Selection:Es=$g}=e,{MultiSelection:bs=nm}=e,{VirtualList:Ut=am}=e;function no(d){if(d.loadOptions&&d.filterText.length>0)return;if(!d.items)return[];d.items&&d.items.length>0&&typeof d.items[0]!="object"&&(d.items=cc(d.items));let V=d.items.filter(le=>{let st=q(I(le,d.filterText),d.filterText,le);return st&&d.isMulti&&d.value&&Array.isArray(d.value)&&(st=!d.value.some(sn=>sn[d.optionIdentifier]===le[d.optionIdentifier])),st});return d.groupBy&&(V=Vd(V)),d.isCreatable&&(V=Ts(V,d.filterText)),V}function Ts(d,V){if(V.length===0)return d;const le=lt(V);return d[0]&&V===d[0][Q]?d:(le.isCreator=!0,[...d,le])}let{selectedValue:wi=null}=e,y,it,Ze,Se,$e,Ss;const Pd=um(async()=>{n(4,ct=!0);let d=await ge(k).catch(V=>{console.warn("svelte-select loadOptions error :>> ",V),u("error",{type:"loadOptions",details:V})});d&&!d.cancelled&&(d?(d&&d.length>0&&typeof d[0]!="object"&&(d=cc(d)),n(81,i=[...d]),u("loaded",{items:i})):n(81,i=[]),N&&n(81,i=Ts(i,k)),n(4,ct=!1),n(1,A=!0),n(5,K=!0))},Mt);function Md(){typeof p=="string"?n(2,p={[T]:p,label:p}):_&&Array.isArray(p)&&p.length>0&&n(2,p=p.map(d=>typeof d=="string"?{value:d,label:d}:d))}let Ln;function Ud(){n(31,Ln=Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},ut)),f&&n(31,Ln.id=f,Ln),wt||n(31,Ln.readonly=!0,Ln)}function Vd(d){const V=[],le={};d.forEach(sn=>{const It=R(sn);V.includes(It)||(V.push(It),le[It]=[],It&&le[It].push(Object.assign(vt(It,sn),{id:It,isGroupHeader:!0,isSelectable:H}))),le[It].push(Object.assign({isGroupItem:!!It},sn))});const st=[];return ee(V).forEach(sn=>{st.push(...le[sn])}),st}function Fd(){if(_){JSON.stringify(p)!==JSON.stringify(it)&&Al()&&u("select",p);return}(!it||JSON.stringify(p[T])!==JSON.stringify(it[T]))&&u("select",p)}function Bd(){A||K?io():m&&m.blur()}function jd(){p&&(Array.isArray(p)?n(2,p=[...p]):n(2,p=[p]))}function xd(){p&&n(2,p=null)}function qd(){k.length!==0&&(n(1,A=!0),n(5,K=!0),ge?Pd():(n(5,K=!0),_&&n(30,y=void 0)))}Lu(async()=>{n(77,it=p),n(78,Ze=k),n(79,Se=A),n(80,$e=_)});function Al(){let d=!0;if(p){const V=[],le=[];p.forEach(st=>{V.includes(st[T])?d=!1:(V.push(st[T]),le.push(st))}),d||n(2,p=le)}return d}function Nl(d){let V=d?d[T]:p[T];return M.find(le=>le[T]===V)}function Hd(d){!d||d.length===0||d.some(V=>typeof V!="object")||!p||(_?p.some(V=>!V||!V[T]):!p[T])||(Array.isArray(p)?n(2,p=p.map(V=>Nl(V)||V)):n(2,p=Nl()||p))}function Ol(d){const{detail:V}=d,le=p[V?V.i:p.length-1];p.length===1?n(2,p=void 0):n(2,p=p.filter(st=>st!==le)),u("clear",le)}function Wd(d){if(!!A)switch(d.key){case"ArrowDown":d.preventDefault(),n(5,K=!0),n(30,y=void 0);break;case"ArrowUp":d.preventDefault(),n(5,K=!0),n(30,y=void 0);break;case"Tab":K||n(1,A=!1);break;case"Backspace":if(!_||k.length>0)return;if(_&&p&&p.length>0){if(Ol(y!==void 0?y:p.length-1),y===0||y===void 0)break;n(30,y=p.length>y?y-1:void 0)}break;case"ArrowLeft":if(!_||k.length>0)return;y===void 0?n(30,y=p.length-1):p.length>y&&y!==0&&n(30,y-=1);break;case"ArrowRight":if(!_||k.length>0||y===void 0)return;y===p.length-1?n(30,y=void 0):y<p.length-1&&n(30,y+=1);break}}function io(){n(1,A=!0),m&&m.focus()}function Kd(d){if(!g)return;const V=d.path&&d.path.length>0?d.path[0]:d.target;g.contains(V)||g.contains(d.relatedTarget)||(n(1,A=!1),n(5,K=!1),n(30,y=void 0),m&&m.blur())}function Gd(){F||(n(1,A=!0),n(5,K=!K))}function zd(){n(2,p=void 0),n(5,K=!1),u("clear",p),io()}Er(()=>{A&&m&&m.focus()});function Jd(d){const{detail:V}=d;if(V){n(3,k="");const le=Object.assign({},V);(!le.isGroupHeader||le.isSelectable)&&(_?n(2,p=p?p.concat([le]):[le]):n(2,p=le),n(2,p),setTimeout(()=>{n(5,K=!1),n(30,y=void 0)}))}}function Xd(d){const{detail:V}=d;_?(n(2,p=p||[]),n(2,p=[...p,lt(V)])):n(2,p=lt(V)),u("itemCreated",V),n(3,k=""),n(5,K=!1),n(30,y=void 0)}function Yd(){n(3,k=""),n(5,K=!1)}let{ariaValues:so=d=>`Option ${d}, selected.`}=e,{ariaListOpen:ro=(d,V)=>`You are currently focused on option ${d}. There are ${V} results available.`}=e,{ariaFocused:oo=()=>"Select is focused, type to refine list, press down to open the menu."}=e;function Qd(){let d;return _&&p.length>0?d=p.map(V=>Qe(V)).join(", "):d=Qe(p),so(d)}function Zd(){if(!A||!i||i.length===0)return"";let d=i[Ss];if(K&&d){let V=Qe(d),le=i?i.length:0;return ro(V,le)}else return oo()}function $d(d){rt[d?"unshift":"push"](()=>{m=d,n(6,m)})}function eg(){k=this.value,n(3,k)}function tg(d){Ss=d,n(28,Ss)}function ng(d){rt[d?"unshift":"push"](()=>{g=d,n(0,g)})}return t.$$set=d=>{"id"in d&&n(46,f=d.id),"container"in d&&n(0,g=d.container),"input"in d&&n(6,m=d.input),"isMulti"in d&&n(7,_=d.isMulti),"multiFullItemClearable"in d&&n(8,O=d.multiFullItemClearable),"isDisabled"in d&&n(9,F=d.isDisabled),"isCreatable"in d&&n(47,N=d.isCreatable),"isFocused"in d&&n(1,A=d.isFocused),"value"in d&&n(2,p=d.value),"filterText"in d&&n(3,k=d.filterText),"placeholder"in d&&n(48,v=d.placeholder),"placeholderAlwaysShow"in d&&n(49,J=d.placeholderAlwaysShow),"items"in d&&n(50,M=d.items),"itemFilter"in d&&n(51,q=d.itemFilter),"groupBy"in d&&n(52,R=d.groupBy),"groupFilter"in d&&n(53,ee=d.groupFilter),"isGroupHeaderSelectable"in d&&n(54,H=d.isGroupHeaderSelectable),"getGroupHeaderLabel"in d&&n(55,Y=d.getGroupHeaderLabel),"labelIdentifier"in d&&n(56,Q=d.labelIdentifier),"getOptionLabel"in d&&n(57,I=d.getOptionLabel),"optionIdentifier"in d&&n(58,T=d.optionIdentifier),"loadOptions"in d&&n(59,ge=d.loadOptions),"hasError"in d&&n(10,De=d.hasError),"containerStyles"in d&&n(11,Ye=d.containerStyles),"getSelectionLabel"in d&&n(12,Qe=d.getSelectionLabel),"createGroupHeaderItem"in d&&n(60,vt=d.createGroupHeaderItem),"createItem"in d&&n(61,lt=d.createItem),"isSearchable"in d&&n(13,wt=d.isSearchable),"inputStyles"in d&&n(14,$t=d.inputStyles),"isClearable"in d&&n(15,Pt=d.isClearable),"isWaiting"in d&&n(4,ct=d.isWaiting),"listPlacement"in d&&n(63,E=d.listPlacement),"listOpen"in d&&n(5,K=d.listOpen),"isVirtualList"in d&&n(64,je=d.isVirtualList),"loadOptionsInterval"in d&&n(65,Mt=d.loadOptionsInterval),"noOptionsMessage"in d&&n(66,Dn=d.noOptionsMessage),"hideEmptyState"in d&&n(67,gi=d.hideEmptyState),"inputAttributes"in d&&n(16,ut=d.inputAttributes),"listAutoWidth"in d&&n(68,Rn=d.listAutoWidth),"itemHeight"in d&&n(69,mi=d.itemHeight),"Icon"in d&&n(17,en=d.Icon),"iconProps"in d&&n(18,pi=d.iconProps),"showChevron"in d&&n(19,tn=d.showChevron),"showIndicator"in d&&n(20,yi=d.showIndicator),"containerClasses"in d&&n(21,nn=d.containerClasses),"indicatorSvg"in d&&n(22,_i=d.indicatorSvg),"listOffset"in d&&n(70,ht=d.listOffset),"ClearIcon"in d&&n(23,ws=d.ClearIcon),"Item"in d&&n(71,vi=d.Item),"List"in d&&n(24,Is=d.List),"Selection"in d&&n(25,Es=d.Selection),"MultiSelection"in d&&n(26,bs=d.MultiSelection),"VirtualList"in d&&n(72,Ut=d.VirtualList),"selectedValue"in d&&n(73,wi=d.selectedValue),"ariaValues"in d&&n(74,so=d.ariaValues),"ariaListOpen"in d&&n(75,ro=d.ariaListOpen),"ariaFocused"in d&&n(76,oo=d.ariaFocused)},t.$$.update=()=>{t.$$.dirty[0]&140|t.$$.dirty[1]&405340160&&n(81,i=no({loadOptions:ge,filterText:k,items:M,value:p,isMulti:_,optionIdentifier:T,groupBy:R,isCreatable:N})),t.$$.dirty[2]&2048&&wi&&console.warn("selectedValue is no longer used. Please use value instead."),t.$$.dirty[1]&524288&&Hd(M),t.$$.dirty[0]&4&&p&&Md(),t.$$.dirty[0]&73728&&(ut||!wt)&&Ud(),t.$$.dirty[0]&128|t.$$.dirty[2]&262144&&(_&&jd(),$e&&!_&&xd()),t.$$.dirty[0]&132&&_&&p&&p.length>1&&Al(),t.$$.dirty[0]&4&&p&&Fd(),t.$$.dirty[0]&132|t.$$.dirty[2]&32768&&!p&&_&&it&&u("select",p),t.$$.dirty[0]&2|t.$$.dirty[2]&131072&&A!==Se&&Bd(),t.$$.dirty[0]&8|t.$$.dirty[2]&65536&&k!==Ze&&qd(),t.$$.dirty[0]&12&&n(29,s=p&&k.length===0),t.$$.dirty[0]&536904208&&n(37,r=s&&Pt&&!F&&!ct),t.$$.dirty[0]&132|t.$$.dirty[1]&393216&&n(36,o=J&&_?v:p?"":v),t.$$.dirty[0]&132&&n(35,a=_&&p&&p.length>0),t.$$.dirty[0]&141|t.$$.dirty[1]&218103808|t.$$.dirty[2]&526326&&n(34,l={Item:vi,filterText:k,optionIdentifier:T,noOptionsMessage:Dn,hideEmptyState:gi,isVirtualList:je,VirtualList:Ut,value:p,isMulti:_,getGroupHeaderLabel:Y,items:i,itemHeight:mi,getOptionLabel:I,listPlacement:E,parent:g,listAutoWidth:Rn,listOffset:ht}),t.$$.dirty[0]&132&&n(33,c=p?Qd():""),t.$$.dirty[0]&268435490|t.$$.dirty[2]&524288&&n(32,h=Zd())},[g,A,p,k,ct,K,m,_,O,F,De,Ye,Qe,wt,$t,Pt,ut,en,pi,tn,yi,nn,_i,ws,Is,Es,bs,zd,Ss,s,y,Ln,h,c,l,a,o,r,Ol,Wd,io,Kd,Gd,Jd,Xd,Yd,f,N,v,J,M,q,R,ee,H,Y,Q,I,T,ge,vt,lt,On,E,je,Mt,Dn,gi,Rn,mi,ht,vi,Ut,wi,so,ro,oo,it,Ze,Se,$e,i,$d,eg,tg,ng]}class FI extends Lt{constructor(e){super();Rt(this,e,gm,dm,pt,{id:46,container:0,input:6,isMulti:7,multiFullItemClearable:8,isDisabled:9,isCreatable:47,isFocused:1,value:2,filterText:3,placeholder:48,placeholderAlwaysShow:49,items:50,itemFilter:51,groupBy:52,groupFilter:53,isGroupHeaderSelectable:54,getGroupHeaderLabel:55,labelIdentifier:56,getOptionLabel:57,optionIdentifier:58,loadOptions:59,hasError:10,containerStyles:11,getSelectionLabel:12,createGroupHeaderItem:60,createItem:61,getFilteredItems:62,isSearchable:13,inputStyles:14,isClearable:15,isWaiting:4,listPlacement:63,listOpen:5,isVirtualList:64,loadOptionsInterval:65,noOptionsMessage:66,hideEmptyState:67,inputAttributes:16,listAutoWidth:68,itemHeight:69,Icon:17,iconProps:18,showChevron:19,showIndicator:20,containerClasses:21,indicatorSvg:22,listOffset:70,ClearIcon:23,Item:71,List:24,Selection:25,MultiSelection:26,VirtualList:72,selectedValue:73,handleClear:27,ariaValues:74,ariaListOpen:75,ariaFocused:76},null,[-1,-1,-1,-1])}get getFilteredItems(){return this.$$.ctx[62]}get handleClear(){return this.$$.ctx[27]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},mm=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},xu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),i.push(n[h],n[u],n[f],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ju(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw Error();const f=r<<2|a>>4;if(i.push(f),c!==64){const g=a<<4&240|c>>2;if(i.push(g),u!==64){const m=c<<6&192|u;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},qu=function(t){const e=ju(t);return xu.encodeByteArray(e,!0)},pm=function(t){try{return xu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Wu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ku(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _m(){return Ce().indexOf("Electron/")>=0}function Gu(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vm(){return Ce().indexOf("MSAppHost/")>=0}function wm(){return typeof indexedDB=="object"}function Im(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="FirebaseError";class Tn extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=Em,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qi.prototype.create)}}class Qi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?bm(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Tn(s,a,i)}}function bm(t,e){return t.replace(Tm,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Tm=/\{\$([^}]+)}/g;function Sm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qs(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(uc(r)&&uc(o)){if(!Qs(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function uc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Si(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function km(t,e){const n=new Cm(t,e);return n.subscribe.bind(n)}class Cm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Am(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=co),s.error===void 0&&(s.error=co),s.complete===void 0&&(s.complete=co);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Am(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function co(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ym;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dm(e))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=on){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=on){return this.instances.has(e)}getOptions(e=on){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Om(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=on){return this.component?this.component.multipleInstances?e:on:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Om(t){return t===on?void 0:t}function Dm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Lm={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Pm=se.INFO,Mm={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Um=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Mm[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ga{constructor(e){this.name=e,this._logLevel=Pm,this._logHandler=Um,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}function Vm(t){return Array.prototype.slice.call(t)}function zu(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function ma(t,e,n){var i,s=new Promise(function(r,o){i=t[e].apply(t,n),zu(i).then(r,o)});return s.request=i,s}function Fm(t,e,n){var i=ma(t,e,n);return i.then(function(s){if(!!s)return new Mi(s,i.request)})}function ii(t,e,n){n.forEach(function(i){Object.defineProperty(t.prototype,i,{get:function(){return this[e][i]},set:function(s){this[e][i]=s}})})}function pa(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return ma(this[e],s,arguments)})})}function br(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return this[e][s].apply(this[e],arguments)})})}function Ju(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return Fm(this[e],s,arguments)})})}function Sn(t){this._index=t}ii(Sn,"_index",["name","keyPath","multiEntry","unique"]);pa(Sn,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);Ju(Sn,"_index",IDBIndex,["openCursor","openKeyCursor"]);function Mi(t,e){this._cursor=t,this._request=e}ii(Mi,"_cursor",["direction","key","primaryKey","value"]);pa(Mi,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(Mi.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),zu(e._request).then(function(i){if(!!i)return new Mi(i,e._request)})})})});function _t(t){this._store=t}_t.prototype.createIndex=function(){return new Sn(this._store.createIndex.apply(this._store,arguments))};_t.prototype.index=function(){return new Sn(this._store.index.apply(this._store,arguments))};ii(_t,"_store",["name","keyPath","indexNames","autoIncrement"]);pa(_t,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);Ju(_t,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);br(_t,"_store",IDBObjectStore,["deleteIndex"]);function $i(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}$i.prototype.objectStore=function(){return new _t(this._tx.objectStore.apply(this._tx,arguments))};ii($i,"_tx",["objectStoreNames","mode"]);br($i,"_tx",IDBTransaction,["abort"]);function Tr(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new $i(n)}Tr.prototype.createObjectStore=function(){return new _t(this._db.createObjectStore.apply(this._db,arguments))};ii(Tr,"_db",["name","version","objectStoreNames"]);br(Tr,"_db",IDBDatabase,["deleteObjectStore","close"]);function Sr(t){this._db=t}Sr.prototype.transaction=function(){return new $i(this._db.transaction.apply(this._db,arguments))};ii(Sr,"_db",["name","version","objectStoreNames"]);br(Sr,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[_t,Sn].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=Vm(arguments),i=n[n.length-1],s=this._store||this._index,r=s[t].apply(s,n.slice(0,-1));r.onsuccess=function(){i(r.result)}})})});[Sn,_t].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var i=this,s=[];return new Promise(function(r){i.iterateCursor(e,function(o){if(!o){r(s);return}if(s.push(o.value),n!==void 0&&s.length==n){r(s);return}o.continue()})})})});function Bm(t,e,n){var i=ma(indexedDB,"open",[t,e]),s=i.request;return s&&(s.onupgradeneeded=function(r){n&&n(new Tr(s.result,r.oldVersion,s.transaction))}),i.then(function(r){return new Sr(r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xm(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function xm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lo="@firebase/app",hc="0.7.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new ga("@firebase/app"),qm="@firebase/app-compat",Hm="@firebase/analytics-compat",Wm="@firebase/analytics",Km="@firebase/app-check-compat",Gm="@firebase/app-check",zm="@firebase/auth",Jm="@firebase/auth-compat",Xm="@firebase/database",Ym="@firebase/database-compat",Qm="@firebase/functions",Zm="@firebase/functions-compat",$m="@firebase/installations",ep="@firebase/installations-compat",tp="@firebase/messaging",np="@firebase/messaging-compat",ip="@firebase/performance",sp="@firebase/performance-compat",rp="@firebase/remote-config",op="@firebase/remote-config-compat",ap="@firebase/storage",lp="@firebase/storage-compat",cp="@firebase/firestore",up="@firebase/firestore-compat",hp="firebase",fp="9.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="[DEFAULT]",dp={[Lo]:"fire-core",[qm]:"fire-core-compat",[Wm]:"fire-analytics",[Hm]:"fire-analytics-compat",[Gm]:"fire-app-check",[Km]:"fire-app-check-compat",[zm]:"fire-auth",[Jm]:"fire-auth-compat",[Xm]:"fire-rtdb",[Ym]:"fire-rtdb-compat",[Qm]:"fire-fn",[Zm]:"fire-fn-compat",[$m]:"fire-iid",[ep]:"fire-iid-compat",[tp]:"fire-fcm",[np]:"fire-fcm-compat",[ip]:"fire-perf",[sp]:"fire-perf-compat",[rp]:"fire-rc",[op]:"fire-rc-compat",[ap]:"fire-gcs",[lp]:"fire-gcs-compat",[cp]:"fire-fst",[up]:"fire-fst-compat","fire-js":"fire-js",[hp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Map,Po=new Map;function gp(t,e){try{t.container.addComponent(e)}catch(n){ya.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zn(t){const e=t.name;if(Po.has(e))return ya.debug(`There were multiple attempts to register component ${e}.`),!1;Po.set(e,t);for(const n of Zs.values())gp(n,t);return!0}function _a(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},zt=new Qi("app","Firebase",mp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=fp;function BI(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Xu,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});const s=Zs.get(i);if(s){if(Qs(t,s.options)&&Qs(n,s.config))return s;throw zt.create("duplicate-app",{appName:i})}const r=new Rm(i);for(const a of Po.values())r.addComponent(a);const o=new pp(t,n,r);return Zs.set(i,o),o}function Yu(t=Xu){const e=Zs.get(t);if(!e)throw zt.create("no-app",{appName:t});return e}function qt(t,e,n){var i;let s=(i=dp[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ya.warn(a.join(" "));return}zn(new dn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="firebase-heartbeat-database",_p=1,gn="firebase-heartbeat-store";let uo=null;function va(){return uo||(uo=Bm(yp,_p,t=>{switch(t.oldVersion){case 0:t.createObjectStore(gn)}}).catch(t=>{throw zt.create("storage-open",{originalErrorMessage:t.message})})),uo}async function vp(t){try{return(await va()).transaction(gn).objectStore(gn).get(wa(t))}catch(e){throw zt.create("storage-get",{originalErrorMessage:e.message})}}async function ho(t,e){try{const i=(await va()).transaction(gn,"readwrite");return await i.objectStore(gn).put(e,wa(t)),i.complete}catch(n){throw zt.create("storage-set",{originalErrorMessage:n.message})}}async function wp(t){try{const n=(await va()).transaction(gn,"readwrite");return await n.objectStore(gn).delete(wa(t)),n.complete}catch(e){throw zt.create("storage-delete",{originalErrorMessage:e.message})}}function wa(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=1024,Ep=30*24*60*60*1e3;class bp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kp(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(s=>s.date===i))return this._heartbeatsCache.push({date:i,userAgent:n}),this._heartbeatsCache=this._heartbeatsCache.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Ep}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:n}=Sp(this._heartbeatsCache),i=qu(JSON.stringify({version:2,heartbeats:e}));return n.length>0?(this._heartbeatsCache=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),i}}function Tp(){return new Date().toISOString().substring(0,10)}function Sp(t,e=Ip){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.userAgent===s.userAgent);if(r){if(r.dates.push(s.date),fc(n)>e){r.dates.pop();break}}else if(n.push({userAgent:s.userAgent,dates:[s.date]}),fc(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class kp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wm()?Im().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vp(this.app);return(n==null?void 0:n.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return ho(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return ho(this.app,{heartbeats:[...i,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return ho(this.app,{heartbeats:i.filter(s=>!e.includes(s))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return wp(this.app)}}function fc(t){return qu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){zn(new dn("platform-logger",e=>new jm(e),"PRIVATE")),zn(new dn("heartbeat",e=>new bp(e),"PRIVATE")),qt(Lo,hc,t),qt(Lo,hc,"esm2017"),qt("fire-js","")}Cp("");var Ap="firebase",Np="9.6.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(Ap,Np,"app");var Op=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},D,Ia=Ia||{},W=Op||self;function $s(){}function Mo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ts(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Dp(t){return Object.prototype.hasOwnProperty.call(t,fo)&&t[fo]||(t[fo]=++Rp)}var fo="closure_uid_"+(1e9*Math.random()>>>0),Rp=0;function Lp(t,e,n){return t.call.apply(t.bind,arguments)}function Pp(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Me(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Me=Lp:Me=Pp,Me.apply(null,arguments)}function Os(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Qt(){this.s=this.s,this.o=this.o}var Mp=0,Up={};Qt.prototype.s=!1;Qt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Mp!=0)){var t=Dp(this);delete Up[t]}};Qt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Zu=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function Vp(t){e:{var e=Ay;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function dc(t){return Array.prototype.concat.apply([],arguments)}function Ea(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function er(t){return/^[\s\xa0]*$/.test(t)}var gc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function He(t,e){return t.indexOf(e)!=-1}function go(t,e){return t<e?-1:t>e?1:0}var We;e:{var mc=W.navigator;if(mc){var pc=mc.userAgent;if(pc){We=pc;break e}}We=""}function ba(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function $u(t){const e={};for(const n in t)e[n]=t[n];return e}var yc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eh(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<yc.length;r++)n=yc[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ta(t){return Ta[" "](t),t}Ta[" "]=$s;function Fp(t){var e=xp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Bp=He(We,"Opera"),Jn=He(We,"Trident")||He(We,"MSIE"),th=He(We,"Edge"),Uo=th||Jn,nh=He(We,"Gecko")&&!(He(We.toLowerCase(),"webkit")&&!He(We,"Edge"))&&!(He(We,"Trident")||He(We,"MSIE"))&&!He(We,"Edge"),jp=He(We.toLowerCase(),"webkit")&&!He(We,"Edge");function ih(){var t=W.document;return t?t.documentMode:void 0}var tr;e:{var mo="",po=function(){var t=We;if(nh)return/rv:([^\);]+)(\)|;)/.exec(t);if(th)return/Edge\/([\d\.]+)/.exec(t);if(Jn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(jp)return/WebKit\/(\S+)/.exec(t);if(Bp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(po&&(mo=po?po[1]:""),Jn){var yo=ih();if(yo!=null&&yo>parseFloat(mo)){tr=String(yo);break e}}tr=mo}var xp={};function qp(){return Fp(function(){let t=0;const e=gc(String(tr)).split("."),n=gc("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=go(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||go(s[2].length==0,r[2].length==0)||go(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var Vo;if(W.document&&Jn){var _c=ih();Vo=_c||parseInt(tr,10)||void 0}else Vo=void 0;var Hp=Vo,Wp=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",$s,e),W.removeEventListener("test",$s,e)}catch{}return t}();function qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};function Ui(t,e){if(qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nh){e:{try{Ta(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Kp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ui.Z.h.call(this)}}Be(Ui,qe);var Kp={2:"touch",3:"pen",4:"mouse"};Ui.prototype.h=function(){Ui.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ns="closure_listenable_"+(1e6*Math.random()|0),Gp=0;function zp(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++Gp,this.ca=this.fa=!1}function kr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Cr(t){this.src=t,this.g={},this.h=0}Cr.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Bo(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new zp(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};function Fo(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Qu(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(kr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Bo(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}var Sa="closure_lm_"+(1e6*Math.random()|0),_o={};function sh(t,e,n,i,s){if(i&&i.once)return oh(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)sh(t,e[r],n,i,s);return null}return n=Aa(n),t&&t[ns]?t.N(e,n,ts(i)?!!i.capture:!!i,s):rh(t,e,n,!1,i,s)}function rh(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=ts(s)?!!s.capture:!!s,a=Ca(t);if(a||(t[Sa]=a=new Cr(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=Jp(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Wp||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(lh(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Jp(){function t(n){return e.call(t.src,t.listener,n)}var e=Xp;return t}function oh(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)oh(t,e[r],n,i,s);return null}return n=Aa(n),t&&t[ns]?t.O(e,n,ts(i)?!!i.capture:!!i,s):rh(t,e,n,!0,i,s)}function ah(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)ah(t,e[r],n,i,s);else i=ts(i)?!!i.capture:!!i,n=Aa(n),t&&t[ns]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Bo(r,n,i,s),-1<n&&(kr(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ca(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Bo(e,n,i,s)),(n=-1<t?e[t]:null)&&ka(n))}function ka(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ns])Fo(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(lh(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Ca(e))?(Fo(n,t),n.h==0&&(n.src=null,e[Sa]=null)):kr(t)}}}function lh(t){return t in _o?_o[t]:_o[t]="on"+t}function Xp(t,e){if(t.ca)t=!0;else{e=new Ui(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&ka(t),t=n.call(i,e)}return t}function Ca(t){return t=t[Sa],t instanceof Cr?t:null}var vo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Aa(t){return typeof t=="function"?t:(t[vo]||(t[vo]=function(e){return t.handleEvent(e)}),t[vo])}function Ne(){Qt.call(this),this.i=new Cr(this),this.P=this,this.I=null}Be(Ne,Qt);Ne.prototype[ns]=!0;Ne.prototype.removeEventListener=function(t,e,n,i){ah(this,t,e,n,i)};function Ue(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new qe(e,t);else if(e instanceof qe)e.target=e.target||t;else{var s=e;e=new qe(i,t),eh(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Ds(o,i,!0,e)&&s}if(o=e.g=t,s=Ds(o,i,!0,e)&&s,s=Ds(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Ds(o,i,!1,e)&&s}Ne.prototype.M=function(){if(Ne.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)kr(n[i]);delete t.g[e],t.h--}}this.I=null};Ne.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ne.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Ds(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Fo(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Na=W.JSON.stringify;function Yp(){var t=uh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Qp{constructor(){this.h=this.g=null}add(e,n){const i=ch.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var ch=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Zp,t=>t.reset());class Zp{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $p(t){W.setTimeout(()=>{throw t},0)}function Oa(t,e){jo||ey(),xo||(jo(),xo=!0),uh.add(t,e)}var jo;function ey(){var t=W.Promise.resolve(void 0);jo=function(){t.then(ty)}}var xo=!1,uh=new Qp;function ty(){for(var t;t=Yp();){try{t.h.call(t.g)}catch(n){$p(n)}var e=ch;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xo=!1}function Ar(t,e){Ne.call(this),this.h=t||1,this.g=e||W,this.j=Me(this.kb,this),this.l=Date.now()}Be(Ar,Ne);D=Ar.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ue(this,"tick"),this.da&&(Da(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Da(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){Ar.Z.M.call(this),Da(this),delete this.g};function Ra(t,e,n){if(typeof t=="function")n&&(t=Me(t,n));else if(t&&typeof t.handleEvent=="function")t=Me(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function hh(t){t.g=Ra(()=>{t.g=null,t.i&&(t.i=!1,hh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ny extends Qt{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:hh(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vi(t){Qt.call(this),this.h=t,this.g={}}Be(Vi,Qt);var vc=[];function fh(t,e,n,i){Array.isArray(n)||(n&&(vc[0]=n.toString()),n=vc);for(var s=0;s<n.length;s++){var r=sh(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function dh(t){ba(t.g,function(e,n){this.g.hasOwnProperty(n)&&ka(e)},t),t.g={}}Vi.prototype.M=function(){Vi.Z.M.call(this),dh(this)};Vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Nr(){this.g=!0}Nr.prototype.Aa=function(){this.g=!1};function iy(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&u[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function sy(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Fn(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+oy(t,n)+(i?" "+i:"")})}function ry(t,e){t.info(function(){return"TIMEOUT: "+e})}Nr.prototype.info=function(){};function oy(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Na(n)}catch{return e}}var kn={},wc=null;function Or(){return wc=wc||new Ne}kn.Ma="serverreachability";function gh(t){qe.call(this,kn.Ma,t)}Be(gh,qe);function Fi(t){const e=Or();Ue(e,new gh(e,t))}kn.STAT_EVENT="statevent";function mh(t,e){qe.call(this,kn.STAT_EVENT,t),this.stat=e}Be(mh,qe);function Ke(t){const e=Or();Ue(e,new mh(e,t))}kn.Na="timingevent";function ph(t,e){qe.call(this,kn.Na,t),this.size=e}Be(ph,qe);function is(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Dr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},yh={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function La(){}La.prototype.h=null;function Ic(t){return t.h||(t.h=t.i())}function _h(){}var ss={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Pa(){qe.call(this,"d")}Be(Pa,qe);function Ma(){qe.call(this,"c")}Be(Ma,qe);var qo;function Rr(){}Be(Rr,La);Rr.prototype.g=function(){return new XMLHttpRequest};Rr.prototype.i=function(){return{}};qo=new Rr;function rs(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Vi(this),this.P=ay,t=Uo?125:void 0,this.W=new Ar(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new vh}function vh(){this.i=null,this.g="",this.h=!1}var ay=45e3,Ho={},nr={};D=rs.prototype;D.setTimeout=function(t){this.P=t};function Wo(t,e,n){t.K=1,t.v=Pr(Nt(e)),t.s=n,t.U=!0,wh(t,null)}function wh(t,e){t.F=Date.now(),os(t),t.A=Nt(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Ch(n.h,"t",i),t.C=0,n=t.l.H,t.h=new vh,t.g=zh(t.l,n?e:null,!t.s),0<t.O&&(t.L=new ny(Me(t.Ia,t,t.g),t.O)),fh(t.V,t.g,"readystatechange",t.gb),e=t.H?$u(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Fi(1),iy(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&bt(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const h=bt(this.g);var e=this.g.Da();const u=this.g.ba();if(!(3>h)&&(h!=3||Uo||this.g&&(this.h.h||this.g.ga()||Sc(this.g)))){this.I||h!=4||e==7||(e==8||0>=u?Fi(3):Fi(2)),Lr(this);var n=this.g.ba();this.N=n;t:if(Ih(this)){var i=Sc(this.g);t="";var s=i.length,r=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){an(this),Ni(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,sy(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!er(a)){var c=a;break t}}c=null}if(n=c)Fn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ko(this,n);else{this.i=!1,this.o=3,Ke(12),an(this),Ni(this);break e}}this.U?(Eh(this,h,o),Uo&&this.i&&h==3&&(fh(this.V,this.W,"tick",this.fb),this.W.start())):(Fn(this.j,this.m,o,null),Ko(this,o)),h==4&&an(this),this.i&&!this.I&&(h==4?Hh(this.l,this):(this.i=!1,os(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ke(12)):(this.o=0,Ke(13)),an(this),Ni(this)}}}catch{}finally{}};function Ih(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Eh(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=ly(t,n),s==nr){e==4&&(t.o=4,Ke(14),i=!1),Fn(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ho){t.o=4,Ke(15),Fn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Fn(t.j,t.m,s,null),Ko(t,s);Ih(t)&&s!=nr&&s!=Ho&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ke(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Wa(e),e.L=!0,Ke(11))):(Fn(t.j,t.m,n,"[Invalid Chunked Response]"),an(t),Ni(t))}D.fb=function(){if(this.g){var t=bt(this.g),e=this.g.ga();this.C<e.length&&(Lr(this),Eh(this,t,e),this.i&&t!=4&&os(this))}};function ly(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?nr:(n=Number(e.substring(n,i)),isNaN(n)?Ho:(i+=1,i+n>e.length?nr:(e=e.substr(i,n),t.C=i+n,e)))}D.cancel=function(){this.I=!0,an(this)};function os(t){t.Y=Date.now()+t.P,bh(t,t.P)}function bh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=is(Me(t.eb,t),e)}function Lr(t){t.B&&(W.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ry(this.j,this.A),this.K!=2&&(Fi(3),Ke(17)),an(this),this.o=2,Ni(this)):bh(this,this.Y-t)};function Ni(t){t.l.G==0||t.I||Hh(t.l,t)}function an(t){Lr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Da(t.W),dh(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ko(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Go(n.i,t))){if(n.I=t.N,!t.J&&Go(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)or(n),Vr(n);else break e;Ha(n),Ke(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=is(Me(n.ab,n),6e3));if(1>=Oh(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ln(n,11)}else if((t.J||n.g==t)&&or(n),!er(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const h=c[3];h!=null&&(n.ma=h,n.h.info("VER="+n.ma));const u=c[4];u!=null&&(n.za=u,n.h.info("SVER="+n.za));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=i.i;!r.g&&(He(m,"spdy")||He(m,"quic")||He(m,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Fa(r,r.h),r.h=null))}if(i.D){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(i.sa=_,he(i.F,i.D,_))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Gh(i,i.H?i.la:null,i.W),o.J){Dh(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(Lr(a),os(a)),i.g=o}else xh(i);0<n.l.length&&Fr(n)}else c[0]!="stop"&&c[0]!="close"||ln(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ln(n,7):qa(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}Fi(4)}catch{}}function cy(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Mo(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Ua(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Mo(t)||typeof t=="string")Zu(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Mo(t)||typeof t=="string"){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=cy(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function si(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof si)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}D=si.prototype;D.R=function(){Va(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return Va(this),this.g.concat()};function Va(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];mn(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)i=t.g[e],mn(s,i)||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}D.get=function(t,e){return mn(this.h,t)?this.h[t]:e};D.set=function(t,e){mn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};function mn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Th=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function uy(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function pn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof pn){this.g=e!==void 0?e:t.g,ir(this,t.j),this.s=t.s,sr(this,t.i),rr(this,t.m),this.l=t.l,e=t.h;var n=new Bi;n.i=e.i,e.g&&(n.g=new si(e.g),n.h=e.h),Ec(this,n),this.o=t.o}else t&&(n=String(t).match(Th))?(this.g=!!e,ir(this,n[1]||"",!0),this.s=Oi(n[2]||""),sr(this,n[3]||"",!0),rr(this,n[4]),this.l=Oi(n[5]||"",!0),Ec(this,n[6]||"",!0),this.o=Oi(n[7]||"")):(this.g=!!e,this.h=new Bi(null,this.g))}pn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ki(e,bc,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ki(e,bc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ki(n,n.charAt(0)=="/"?my:gy,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ki(n,yy)),t.join("")};function Nt(t){return new pn(t)}function ir(t,e,n){t.j=n?Oi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sr(t,e,n){t.i=n?Oi(e,!0):e}function rr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ec(t,e,n){e instanceof Bi?(t.h=e,_y(t.h,t.g)):(n||(e=ki(e,py)),t.h=new Bi(e,t.g))}function he(t,e,n){t.h.set(e,n)}function Pr(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function hy(t){return t instanceof pn?Nt(t):new pn(t,void 0)}function fy(t,e,n,i){var s=new pn(null,void 0);return t&&ir(s,t),e&&sr(s,e),n&&rr(s,n),i&&(s.l=i),s}function Oi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ki(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,dy),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function dy(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var bc=/[#\/\?@]/g,gy=/[#\?:]/g,my=/[#\?]/g,py=/[#\?@]/g,yy=/#/g;function Bi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Zt(t){t.g||(t.g=new si,t.h=0,t.i&&uy(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Bi.prototype;D.add=function(t,e){Zt(this),this.i=null,t=ri(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Sh(t,e){Zt(t),e=ri(t,e),mn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,mn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Va(t)))}function kh(t,e){return Zt(t),e=ri(t,e),mn(t.g.h,e)}D.forEach=function(t,e){Zt(this),this.g.forEach(function(n,i){Zu(n,function(s){t.call(e,s,i,this)},this)},this)};D.T=function(){Zt(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n};D.R=function(t){Zt(this);var e=[];if(typeof t=="string")kh(this,t)&&(e=dc(e,this.g.get(ri(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=dc(e,t[n])}return e};D.set=function(t,e){return Zt(this),this.i=null,t=ri(this,t),kh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Ch(t,e,n){Sh(t,e),0<n.length&&(t.i=null,t.g.set(ri(t,e),Ea(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;i[r]!==""&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function ri(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _y(t,e){e&&!t.j&&(Zt(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Sh(this,i),Ch(this,s,n))},t)),t.j=e}var vy=class{constructor(t,e){this.h=t,this.g=e}};function Ah(t){this.l=t||wy,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ea&&W.g.Ea()&&W.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wy=10;function Nh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Oh(t){return t.h?1:t.g?t.g.size:0}function Go(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Fa(t,e){t.g?t.g.add(e):t.h=e}function Dh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ah.prototype.cancel=function(){if(this.i=Rh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Rh(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ea(t.i)}function Ba(){}Ba.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};Ba.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function Iy(){this.g=new Ba}function Ey(t,e,n){const i=n||"";try{Ua(t,function(s,r){let o=s;ts(s)&&(o=Na(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function by(t,e){const n=new Nr;if(W.Image){const i=new Image;i.onload=Os(Rs,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Os(Rs,n,i,"TestLoadImage: error",!1,e),i.onabort=Os(Rs,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Os(Rs,n,i,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Rs(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function as(t){this.l=t.$b||null,this.j=t.ib||!1}Be(as,La);as.prototype.g=function(){return new Mr(this.l,this.j)};as.prototype.i=function(t){return function(){return t}}({});function Mr(t,e){Ne.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ja,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(Mr,Ne);var ja=0;D=Mr.prototype;D.open=function(t,e){if(this.readyState!=ja)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ji(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||W).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ls(this)),this.readyState=ja};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ji(this)),this.g&&(this.readyState=3,ji(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof W.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Lh(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Lh(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ls(this):ji(this),this.readyState==3&&Lh(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,ls(this))};D.Ta=function(t){this.g&&(this.response=t,ls(this))};D.ha=function(){this.g&&ls(this)};function ls(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ji(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ji(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Ty=W.JSON.parse;function Te(t){Ne.call(this),this.headers=new si,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ph,this.K=this.L=!1}Be(Te,Ne);var Ph="",Sy=/^https?$/i,ky=["POST","PUT"];D=Te.prototype;D.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():qo.g(),this.C=this.u?Ic(this.u):Ic(qo),this.g.onreadystatechange=Me(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Tc(this,r);return}t=n||"";const s=new si(this.headers);i&&Ua(i,function(r,o){s.set(o,r)}),i=Vp(s.T()),n=W.FormData&&t instanceof W.FormData,!(0<=Qu(ky,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vh(this),0<this.B&&((this.K=Cy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Me(this.pa,this)):this.A=Ra(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Tc(this,r)}};function Cy(t){return Jn&&qp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Ay(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof Ia!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ue(this,"timeout"),this.abort(8))};function Tc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Mh(t),Ur(t)}function Mh(t){t.D||(t.D=!0,Ue(t,"complete"),Ue(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ue(this,"complete"),Ue(this,"abort"),Ur(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ur(this,!0)),Te.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?Uh(this):this.cb())};D.cb=function(){Uh(this)};function Uh(t){if(t.h&&typeof Ia!="undefined"&&(!t.C[1]||bt(t)!=4||t.ba()!=2)){if(t.v&&bt(t)==4)Ra(t.Fa,0,t);else if(Ue(t,"readystatechange"),bt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(Th)[1]||null;if(!s&&W.self&&W.self.location){var r=W.self.location.protocol;s=r.substr(0,r.length-1)}i=!Sy.test(s?s.toLowerCase():"")}n=i}if(n)Ue(t,"complete"),Ue(t,"success");else{t.m=6;try{var o=2<bt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Mh(t)}}finally{Ur(t)}}}}function Ur(t,e){if(t.g){Vh(t);const n=t.g,i=t.C[0]?$s:null;t.g=null,t.C=null,e||Ue(t,"ready");try{n.onreadystatechange=i}catch{}}}function Vh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function bt(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ty(e)}};function Sc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ph:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ny(t){let e="";return ba(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function xa(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Ny(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function Ei(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Fh(t){this.za=0,this.l=[],this.h=new Nr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ei("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ei("baseRetryDelayMs",5e3,t),this.$a=Ei("retryDelaySeedMs",1e4,t),this.Ya=Ei("forwardChannelMaxRetries",2,t),this.ra=Ei("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ah(t&&t.concurrentRequestLimit),this.Ca=new Iy,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=Fh.prototype;D.ma=8;D.G=1;function qa(t){if(Bh(t),t.G==3){var e=t.V++,n=Nt(t.F);he(n,"SID",t.J),he(n,"RID",e),he(n,"TYPE","terminate"),cs(t,n),e=new rs(t,t.h,e,void 0),e.K=2,e.v=Pr(Nt(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=zh(e.l,null),e.g.ea(e.v)),e.F=Date.now(),os(e)}Kh(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Vr(t){t.g&&(Wa(t),t.g.cancel(),t.g=null)}function Bh(t){Vr(t),t.u&&(W.clearTimeout(t.u),t.u=null),or(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function wo(t,e){t.l.push(new vy(t.Za++,e)),t.G==3&&Fr(t)}function Fr(t){Nh(t.i)||t.m||(t.m=!0,Oa(t.Ha,t),t.C=0)}function Oy(t,e){return Oh(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=is(Me(t.Ha,t,e),Wh(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new rs(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=$u(r),eh(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=jh(this,s,e),n=Nt(this.F),he(n,"RID",t),he(n,"CVER",22),this.D&&he(n,"X-HTTP-Session-Id",this.D),cs(this,n),this.o&&r&&xa(n,this.o,r),Fa(this.i,s),this.Ra&&he(n,"TYPE","init"),this.ja?(he(n,"$req",e),he(n,"SID","null"),s.$=!0,Wo(s,n,null)):Wo(s,n,e),this.G=2}}else this.G==3&&(t?kc(this,t):this.l.length==0||Nh(this.i)||kc(this))};function kc(t,e){var n;e?n=e.m:n=t.V++;const i=Nt(t.F);he(i,"SID",t.J),he(i,"RID",n),he(i,"AID",t.U),cs(t,i),t.o&&t.s&&xa(i,t.o,t.s),n=new rs(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=jh(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Fa(t.i,n),Wo(n,i,e)}function cs(t,e){t.j&&Ua({},function(n,i){he(e,i,n)})}function jh(t,e,n){n=Math.min(t.l.length,n);var i=t.j?Me(t.j.Oa,t.j,t):null;e:{var s=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const h=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{Ey(h,o,"req"+c+"_")}catch{i&&i(h)}}if(a){i=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function xh(t){t.g||t.u||(t.Y=1,Oa(t.Ga,t),t.A=0)}function Ha(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=is(Me(t.Ga,t),Wh(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,qh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=is(Me(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ke(10),Vr(this),qh(this))};function Wa(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function qh(t){t.g=new rs(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Nt(t.oa);he(e,"RID","rpc"),he(e,"SID",t.J),he(e,"CI",t.N?"0":"1"),he(e,"AID",t.U),cs(t,e),he(e,"TYPE","xmlhttp"),t.o&&t.s&&xa(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Pr(Nt(e)),n.s=null,n.U=!0,wh(n,t)}D.ab=function(){this.v!=null&&(this.v=null,Vr(this),Ha(this),Ke(19))};function or(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function Hh(t,e){var n=null;if(t.g==e){or(t),Wa(t),t.g=null;var i=2}else if(Go(t.i,e))n=e.D,Dh(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=Or(),Ue(i,new ph(i,n,e,s)),Fr(t)}else xh(t);else if(s=e.o,s==3||s==0&&0<t.I||!(i==1&&Oy(t,e)||i==2&&Ha(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ln(t,5);break;case 4:ln(t,10);break;case 3:ln(t,6);break;default:ln(t,2)}}}function Wh(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ln(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=Me(t.jb,t);n||(n=new pn("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||ir(n,"https"),Pr(n)),by(n.toString(),i)}else Ke(2);t.G=0,t.j&&t.j.va(e),Kh(t),Bh(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ke(2)):(this.h.info("Failed to ping google.com"),Ke(1))};function Kh(t){t.G=0,t.I=-1,t.j&&((Rh(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Ea(t.l),t.l.length=0),t.j.ua())}function Gh(t,e,n){let i=hy(n);if(i.i!="")e&&sr(i,e+"."+i.i),rr(i,i.m);else{const s=W.location;i=fy(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&ba(t.aa,function(s,r){he(i,r,s)}),e=t.D,n=t.sa,e&&n&&he(i,e,n),he(i,"VER",t.ma),cs(t,i),i}function zh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Te(new as({ib:!0})):new Te(t.qa),e.L=t.H,e}function Jh(){}D=Jh.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function ar(){if(Jn&&!(10<=Number(Hp)))throw Error("Environmental error: no available transport.")}ar.prototype.g=function(t,e){return new nt(t,e)};function nt(t,e){Ne.call(this),this.g=new Fh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!er(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!er(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new oi(this)}Be(nt,Ne);nt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Oa(Me(t.hb,t,e))),Ke(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Gh(t,null,t.W),Fr(t)};nt.prototype.close=function(){qa(this.g)};nt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,wo(this.g,e)}else this.v?(e={},e.__data__=Na(t),wo(this.g,e)):wo(this.g,t)};nt.prototype.M=function(){this.g.j=null,delete this.j,qa(this.g),delete this.g,nt.Z.M.call(this)};function Xh(t){Pa.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(Xh,Pa);function Yh(){Ma.call(this),this.status=1}Be(Yh,Ma);function oi(t){this.g=t}Be(oi,Jh);oi.prototype.xa=function(){Ue(this.g,"a")};oi.prototype.wa=function(t){Ue(this.g,new Xh(t))};oi.prototype.va=function(t){Ue(this.g,new Yh(t))};oi.prototype.ua=function(){Ue(this.g,"b")};ar.prototype.createWebChannel=ar.prototype.g;nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;Dr.NO_ERROR=0;Dr.TIMEOUT=8;Dr.HTTP_ERROR=6;yh.COMPLETE="complete";_h.EventType=ss;ss.OPEN="a";ss.CLOSE="b";ss.ERROR="c";ss.MESSAGE="d";Ne.prototype.listen=Ne.prototype.N;Te.prototype.listenOnce=Te.prototype.O;Te.prototype.getLastError=Te.prototype.La;Te.prototype.getLastErrorCode=Te.prototype.Da;Te.prototype.getStatus=Te.prototype.ba;Te.prototype.getResponseJson=Te.prototype.Qa;Te.prototype.getResponseText=Te.prototype.ga;Te.prototype.send=Te.prototype.ea;var Dy=function(){return new ar},Ry=function(){return Or()},Io=Dr,Ly=yh,Py=kn,Cc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},My=as,Ls=_h,Uy=Te;const Ac="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai="9.6.7";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new ga("@firebase/firestore");function Nc(){return yn.logLevel}function L(t,...e){if(yn.logLevel<=se.DEBUG){const n=e.map(Ka);yn.debug(`Firestore (${ai}): ${t}`,...n)}}function Jt(t,...e){if(yn.logLevel<=se.ERROR){const n=e.map(Ka);yn.error(`Firestore (${ai}): ${t}`,...n)}}function Oc(t,...e){if(yn.logLevel<=se.WARN){const n=e.map(Ka);yn.warn(`Firestore (${ai}): ${t}`,...n)}}function Ka(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${ai}) INTERNAL ASSERTION FAILED: `+t;throw Jt(e),new Error(e)}function ce(t,e){t||G()}function z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class By{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new kt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new kt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new kt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ce(typeof i.accessToken=="string"),new Vy(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Ge(e)}}class jy{constructor(e,n,i){this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class xy{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new jy(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hy{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const i=r=>{r.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?s(r):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.p=n.token,new qy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.I(i),this.T=i=>n.writeSequenceNumber(i))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ga.A=-1;class Qh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Wy(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function re(t,e){return t<e?-1:t>e?1:0}function Xn(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new tt(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new tt(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n,i){n===void 0?n=0:n>e.length&&G(),i===void 0?i=e.length-n:i>e.length-n&&G(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return xi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xi?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends xi{construct(e,n,i){return new fe(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new U(b.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const Ky=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends xi{construct(e,n,i){return new ze(e,n,i)}static isValidIdentifier(e){return Ky.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new U(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new U(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.fields=e,e.sort(ze.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xn(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Fe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const Gy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(t){if(ce(!!t),typeof t=="string"){let e=0;const n=Gy.exec(t);if(ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ee(t.seconds),nanos:Ee(t.nanos)}}function Ee(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yn(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ef(t){const e=t.mapValue.fields.__previous_value__;return $h(e)?ef(e):e}function Hi(t){const e=Xt(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Qn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){return t==null}function lr(t){return t===0&&1/t==-1/0}function Jy(t){return typeof t=="number"&&Number.isInteger(t)&&!lr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(fe.fromString(e))}static fromName(e){return new j(fe.fromString(e).popFirst(5))}static empty(){return new j(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new fe(e.slice()))}}function _n(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$h(t)?4:10:G()}function mt(t,e){if(t===e)return!0;const n=_n(t);if(n!==_n(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hi(t).isEqual(Hi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Xt(i.timestampValue),o=Xt(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Yn(i.bytesValue).isEqual(Yn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ee(i.geoPointValue.latitude)===Ee(s.geoPointValue.latitude)&&Ee(i.geoPointValue.longitude)===Ee(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ee(i.integerValue)===Ee(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=Ee(i.doubleValue),o=Ee(s.doubleValue);return r===o?lr(r)===lr(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Xn(t.arrayValue.values||[],e.arrayValue.values||[],mt);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Dc(r)!==Dc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!mt(r[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Wi(t,e){return(t.values||[]).find(n=>mt(n,e))!==void 0}function Zn(t,e){if(t===e)return 0;const n=_n(t),i=_n(e);if(n!==i)return re(n,i);switch(n){case 0:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=Ee(s.integerValue||s.doubleValue),a=Ee(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Rc(t.timestampValue,e.timestampValue);case 4:return Rc(Hi(t),Hi(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Yn(s),a=Yn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=re(o[l],a[l]);if(c!==0)return c}return re(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=re(Ee(s.latitude),Ee(r.latitude));return o!==0?o:re(Ee(s.longitude),Ee(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Zn(o[l],a[l]);if(c)return c}return re(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const u=re(a[h],c[h]);if(u!==0)return u;const f=Zn(o[a[h]],l[c[h]]);if(f!==0)return f}return re(a.length,c.length)}(t.mapValue,e.mapValue);default:throw G()}}function Rc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Xt(t),i=Xt(e),s=re(n.seconds,i.seconds);return s!==0?s:re(n.nanos,i.nanos)}function qn(t){return zo(t)}function zo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Xt(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Yn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=zo(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${zo(i.fields[a])}`;return r+"}"}(t.mapValue):G();var e,n}function Jo(t){return!!t&&"integerValue"in t}function za(t){return!!t&&"arrayValue"in t}function Lc(t){return!!t&&"nullValue"in t}function Pc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fs(t){return!!t&&"mapValue"in t}function Di(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cn(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Di(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Di(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.value=e}static empty(){return new et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Fs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Di(n)}setAll(e){let n=ze.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Di(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Fs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Fs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Cn(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new et(Di(this.value))}}function tf(t){const e=[];return Cn(t.fields,(n,i)=>{const s=new ze([n]);if(Fs(i)){const r=tf(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new qi(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n,i,s,r,o){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.data=r,this.documentState=o}static newInvalidDocument(e){return new xe(e,0,Z.min(),Z.min(),et.empty(),0)}static newFoundDocument(e,n,i){return new xe(e,1,n,Z.min(),i,0)}static newNoDocument(e,n){return new xe(e,2,n,Z.min(),et.empty(),0)}static newUnknownDocument(e,n){return new xe(e,3,n,Z.min(),et.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function Mc(t,e=null,n=[],i=[],s=null,r=null,o=null){return new Xy(t,e,n,i,s,r,o)}function Ja(t){const e=z(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>{return(s=i).field.canonicalString()+s.op.toString()+qn(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),li(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>qn(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>qn(i)).join(",")),e.P=n}return e.P}function Yy(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${qn(i.value)}`;var i}).join(", ")}]`),li(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>qn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>qn(n)).join(",")),`Target(${e})`}function Xa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!s_(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!mt(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vc(t.startAt,e.startAt)&&Vc(t.endAt,e.endAt)}function Xo(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Je extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.v(e,n,i):new Qy(e,n,i):n==="array-contains"?new e_(e,i):n==="in"?new t_(e,i):n==="not-in"?new n_(e,i):n==="array-contains-any"?new i_(e,i):new Je(e,n,i)}static v(e,n,i){return n==="in"?new Zy(e,i):new $y(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.V(Zn(n,this.value)):n!==null&&_n(this.value)===_n(n)&&this.V(Zn(n,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Qy extends Je{constructor(e,n,i){super(e,n,i),this.key=j.fromName(i.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.V(n)}}class Zy extends Je{constructor(e,n){super(e,"in",n),this.keys=nf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $y extends Je{constructor(e,n){super(e,"not-in",n),this.keys=nf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>j.fromName(i.referenceValue))}class e_ extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return za(n)&&Wi(n.arrayValue,this.value)}}class t_ extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wi(this.value.arrayValue,n)}}class n_ extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Wi(this.value.arrayValue,n)}}class i_ extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!za(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Wi(this.value.arrayValue,i))}}class cr{constructor(e,n){this.position=e,this.inclusive=n}}class Ri{constructor(e,n="asc"){this.field=e,this.dir=n}}function s_(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Uc(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=j.comparator(j.fromName(o.referenceValue),n.key):i=Zn(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Vc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function r_(t,e,n,i,s,r,o,a){return new Br(t,e,n,i,s,r,o,a)}function Ya(t){return new Br(t)}function Bs(t){return!li(t.limit)&&t.limitType==="F"}function ur(t){return!li(t.limit)&&t.limitType==="L"}function o_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function a_(t){for(const e of t.filters)if(e.S())return e.field;return null}function l_(t){return t.collectionGroup!==null}function Ki(t){const e=z(t);if(e.D===null){e.D=[];const n=a_(e),i=o_(e);if(n!==null&&i===null)n.isKeyField()||e.D.push(new Ri(n)),e.D.push(new Ri(ze.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.D.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Ri(ze.keyField(),r))}}}return e.D}function vn(t){const e=z(t);if(!e.C)if(e.limitType==="F")e.C=Mc(e.path,e.collectionGroup,Ki(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Ki(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Ri(r.field,o))}const i=e.endAt?new cr(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new cr(e.startAt.position,!e.startAt.inclusive):null;e.C=Mc(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.C}function c_(t,e,n){return new Br(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jr(t,e){return Xa(vn(t),vn(e))&&t.limitType===e.limitType}function sf(t){return`${Ja(vn(t))}|lt:${t.limitType}`}function Yo(t){return`Query(target=${Yy(vn(t))}; limitType=${t.limitType})`}function Qa(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):j.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=Uc(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,Ki(n),i)||n.endAt&&!function(s,r,o){const a=Uc(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,Ki(n),i))}(t,e)}function rf(t){return(e,n)=>{let i=!1;for(const s of Ki(t)){const r=u_(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function u_(t,e,n){const i=t.field.isKeyField()?j.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Zn(a,l):G()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lr(e)?"-0":e}}function af(t){return{integerValue:""+t}}function h_(t,e){return Jy(e)?af(e):of(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this._=void 0}}function f_(t,e,n){return t instanceof hr?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof Gi?cf(t,e):t instanceof zi?uf(t,e):function(i,s){const r=lf(i,s),o=Fc(r)+Fc(i.k);return Jo(r)&&Jo(i.k)?af(o):of(i.O,o)}(t,e)}function d_(t,e,n){return t instanceof Gi?cf(t,e):t instanceof zi?uf(t,e):n}function lf(t,e){return t instanceof fr?Jo(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class hr extends xr{}class Gi extends xr{constructor(e){super(),this.elements=e}}function cf(t,e){const n=hf(e);for(const i of t.elements)n.some(s=>mt(s,i))||n.push(i);return{arrayValue:{values:n}}}class zi extends xr{constructor(e){super(),this.elements=e}}function uf(t,e){let n=hf(e);for(const i of t.elements)n=n.filter(s=>!mt(s,i));return{arrayValue:{values:n}}}class fr extends xr{constructor(e,n){super(),this.O=e,this.k=n}}function Fc(t){return Ee(t.integerValue||t.doubleValue)}function hf(t){return za(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function g_(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Gi&&i instanceof Gi||n instanceof zi&&i instanceof zi?Xn(n.elements,i.elements,mt):n instanceof fr&&i instanceof fr?mt(n.k,i.k):n instanceof hr&&i instanceof hr}(t.transform,e.transform)}class m_{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function js(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qr{}function p_(t,e,n){t instanceof Hr?function(i,s,r){const o=i.value.clone(),a=xc(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ci?function(i,s,r){if(!js(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=xc(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(ff(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Qo(t,e,n){t instanceof Hr?function(i,s,r){if(!js(i.precondition,s))return;const o=i.value.clone(),a=qc(i.fieldTransforms,r,s);o.setAll(a),s.convertToFoundDocument(jc(s),o).setHasLocalMutations()}(t,e,n):t instanceof ci?function(i,s,r){if(!js(i.precondition,s))return;const o=qc(i.fieldTransforms,r,s),a=s.data;a.setAll(ff(i)),a.setAll(o),s.convertToFoundDocument(jc(s),a).setHasLocalMutations()}(t,e,n):function(i,s){js(i.precondition,s)&&s.convertToNoDocument(Z.min())}(t,e)}function y_(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=lf(i.transform,s||null);r!=null&&(n==null&&(n=et.empty()),n.set(i.field,r))}return n||null}function Bc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Xn(n,i,(s,r)=>g_(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function jc(t){return t.isFoundDocument()?t.version:Z.min()}class Hr extends qr{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}}class ci extends qr{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}}function ff(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function xc(t,e,n){const i=new Map;ce(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,d_(o,a,n[s]))}return i}function qc(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,f_(r,o,e))}return i}class df extends qr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class __ extends qr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,te;function w_(t){switch(t){default:return G();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function gf(t){if(t===void 0)return Jt("GRPC error has no .code"),b.UNKNOWN;switch(t){case Ie.OK:return b.OK;case Ie.CANCELLED:return b.CANCELLED;case Ie.UNKNOWN:return b.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return b.INTERNAL;case Ie.UNAVAILABLE:return b.UNAVAILABLE;case Ie.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Ie.NOT_FOUND:return b.NOT_FOUND;case Ie.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Ie.ABORTED:return b.ABORTED;case Ie.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Ie.DATA_LOSS:return b.DATA_LOSS;default:return G()}}(te=Ie||(Ie={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||Pe.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ps(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ps(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ps(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ps(this.root,e,this.comparator,!0)}}class Ps{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:Pe.RED,this.left=s!=null?s:Pe.EMPTY,this.right=r!=null?r:Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Pe(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Pe.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Pe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hc(this.data.getIterator())}getIteratorFrom(e){return new Hc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class Hc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=new Oe(j.comparator);function wn(){return I_}const E_=new Oe(j.comparator);function Zo(){return E_}const b_=new Oe(j.comparator),T_=new Ve(j.comparator);function ue(...t){let e=T_;for(const n of t)e=e.add(n);return e}const S_=new Ve(re);function mf(){return S_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,us.createSynthesizedTargetChangeForCurrentChange(e,n)),new Wr(Z.min(),i,mf(),wn(),ue())}}class us{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new us(Fe.EMPTY_BYTE_STRING,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,i,s){this.M=e,this.removedTargetIds=n,this.key=i,this.$=s}}class pf{constructor(e,n){this.targetId=e,this.F=n}}class yf{constructor(e,n,i=Fe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Wc{constructor(){this.B=0,this.L=Gc(),this.U=Fe.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=ue(),n=ue(),i=ue();return this.L.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:G()}}),new us(this.U,this.q,e,n,i)}J(){this.K=!1,this.L=Gc()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class k_{constructor(e){this.nt=e,this.st=new Map,this.it=wn(),this.rt=Kc(),this.ot=new Ve(re)}ct(e){for(const n of e.M)e.$&&e.$.isFoundDocument()?this.ut(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ht(e){this.forEachTarget(e,n=>{const i=this.lt(n);switch(e.state){case 0:this.ft(n)&&i.W(e.resumeToken);break;case 1:i.tt(),i.G||i.J(),i.W(e.resumeToken);break;case 2:i.tt(),i.G||this.removeTarget(n);break;case 3:this.ft(n)&&(i.et(),i.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),i.W(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((i,s)=>{this.ft(s)&&n(s)})}_t(e){const n=e.targetId,i=e.F.count,s=this.wt(n);if(s){const r=s.target;if(Xo(r))if(i===0){const o=new j(r.path);this.at(n,o,xe.newNoDocument(o,Z.min()))}else ce(i===1);else this.gt(n)!==i&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&Xo(a.target)){const l=new j(a.target.path);this.it.get(l)!==null||this.It(o,l)||this.at(o,l,xe.newNoDocument(l,e))}r.j&&(n.set(o,r.H()),r.J())}});let i=ue();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.wt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))}),this.it.forEach((r,o)=>o.setReadTime(e));const s=new Wr(e,n,this.ot,this.it,i);return this.it=wn(),this.rt=Kc(),this.ot=new Ve(re),s}ut(e,n){if(!this.ft(e))return;const i=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,i),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Et(n.key).add(e))}at(e,n,i){if(!this.ft(e))return;const s=this.lt(e);this.It(e,n)?s.Y(n,1):s.X(n),this.rt=this.rt.insert(n,this.Et(n).delete(e)),i&&(this.it=this.it.insert(n,i))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Wc,this.st.set(e,n)),n}Et(e){let n=this.rt.get(e);return n||(n=new Ve(re),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new Wc),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Kc(){return new Oe(j.comparator)}function Gc(){return new Oe(j.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),A_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class N_{constructor(e,n){this.databaseId=e,this.N=n}}function dr(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _f(t,e){return t.N?e.toBase64():e.toUint8Array()}function O_(t,e){return dr(t,e.toTimestamp())}function Ct(t){return ce(!!t),Z.fromTimestamp(function(e){const n=Xt(e);return new tt(n.seconds,n.nanos)}(t))}function Za(t,e){return function(n){return new fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function vf(t){const e=fe.fromString(t);return ce(Ef(e)),e}function $o(t,e){return Za(t.databaseId,e.path)}function Eo(t,e){const n=vf(e);if(n.get(1)!==t.databaseId.projectId)throw new U(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(wf(n))}function ea(t,e){return Za(t.databaseId,e)}function D_(t){const e=vf(t);return e.length===4?fe.emptyPath():wf(e)}function ta(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wf(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zc(t,e,n){return{name:$o(t,e),fields:n.value.mapValue.fields}}function R_(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.N?(ce(c===void 0||typeof c=="string"),Fe.fromBase64String(c||"")):(ce(c===void 0||c instanceof Uint8Array),Fe.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?b.UNKNOWN:gf(l.code);return new U(c,l.message||"")}(o);n=new yf(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Eo(t,i.document.name),r=Ct(i.document.updateTime),o=new et({mapValue:{fields:i.document.fields}}),a=xe.newFoundDocument(s,r,o),l=i.targetIds||[],c=i.removedTargetIds||[];n=new xs(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Eo(t,i.document),r=i.readTime?Ct(i.readTime):Z.min(),o=xe.newNoDocument(s,r),a=i.removedTargetIds||[];n=new xs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Eo(t,i.document),r=i.removedTargetIds||[];n=new xs([],r,s,null)}else{if(!("filter"in e))return G();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new v_(s),o=i.targetId;n=new pf(o,r)}}return n}function L_(t,e){let n;if(e instanceof Hr)n={update:zc(t,e.key,e.value)};else if(e instanceof df)n={delete:$o(t,e.key)};else if(e instanceof ci)n={update:zc(t,e.key,e.data),updateMask:H_(e.fieldMask)};else{if(!(e instanceof __))return G();n={verify:$o(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof hr)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Gi)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof zi)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof fr)return{fieldPath:r.field.canonicalString(),increment:o.k};throw G()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:O_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function P_(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?Ct(i.updateTime):Ct(s);return r.isEqual(Z.min())&&(r=Ct(s)),new m_(r,i.transformResults||[])}(n,e))):[]}function M_(t,e){return{documents:[ea(t,e.path)]}}function U_(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=ea(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ea(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length===0)return;const c=l.map(h=>function(u){if(u.op==="=="){if(Pc(u.value))return{unaryFilter:{field:Un(u.field),op:"IS_NAN"}};if(Lc(u.value))return{unaryFilter:{field:Un(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Pc(u.value))return{unaryFilter:{field:Un(u.field),op:"IS_NOT_NAN"}};if(Lc(u.value))return{unaryFilter:{field:Un(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Un(u.field),op:j_(u.op),value:u.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Un(h.field),direction:B_(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.N||li(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function V_(t){let e=D_(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){ce(i===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=If(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(u){return new Ri(Bn(u.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(u.direction))}(h)));let a=null;n.limit&&(a=function(h){let u;return u=typeof h=="object"?h.value:h,li(u)?null:u}(n.limit));let l=null;n.startAt&&(l=function(h){const u=!!h.before,f=h.values||[];return new cr(f,u)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const u=!h.before,f=h.values||[];return new cr(f,u)}(n.endAt)),r_(e,s,o,r,a,"F",l,c)}function F_(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function If(t){return t?t.unaryFilter!==void 0?[q_(t)]:t.fieldFilter!==void 0?[x_(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>If(e)).reduce((e,n)=>e.concat(n)):G():[]}function B_(t){return C_[t]}function j_(t){return A_[t]}function Un(t){return{fieldPath:t.canonicalString()}}function Bn(t){return ze.fromServerFormat(t.fieldPath)}function x_(t){return Je.create(Bn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function q_(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Bn(t.unaryFilter.field);return Je.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Bn(t.unaryFilter.field);return Je.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bn(t.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Bn(t.unaryFilter.field);return Je.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function H_(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ef(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class K_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,i)=>{n(e)})}static reject(e){return new S((n,i)=>{i(e)})}static waitFor(e){return new S((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=S.resolve(!1);for(const i of e)n=n.next(s=>s?S.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}}function hs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&p_(r,e,i[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Qo(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Qo(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const i=e.get(n.key),s=i;this.applyToLocalView(s),i.isValidDocument()||s.convertToNoDocument(Z.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&Xn(this.mutations,e.mutations,(n,i)=>Bc(n,i))&&Xn(this.baseMutations,e.baseMutations,(n,i)=>Bc(n,i))}}class $a{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){ce(e.mutations.length===i.length);let s=b_;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new $a(e,n,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n,i,s,r=Z.min(),o=Z.min(),a=Fe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.Ht=e}}function X_(t){const e=V_({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?c_(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.xe=new Q_}addToCollectionParentIndex(e,n){return this.xe.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.xe.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n,i){return S.resolve(ue())}getFieldIndex(e,n){return S.resolve(null)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}updateCollectionGroup(e,n,i){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class Q_{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Ve(fe.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ve(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new $n(0)}static Je(){return new $n(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==W_)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s!==void 0){for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n])}else this.inner[i]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),!0;return!1}forEach(e){Cn(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Zh(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(){this.changes=new ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?S.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n,i){this.qn=e,this.gs=n,this.indexManager=i}ys(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,n).next(i=>this.ps(e,n,i))}ps(e,n,i){return this.qn.getEntry(e,n).next(s=>{for(const r of i)r.applyToLocalView(s);return s})}Is(e,n){e.forEach((i,s)=>{for(const r of n)r.applyToLocalView(s)})}Es(e,n){return this.qn.getEntries(e,n).next(i=>this.Ts(e,i).next(()=>i))}Ts(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(i=>this.Is(n,i))}As(e,n,i){return function(s){return j.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Rs(e,n.path):l_(n)?this.Ps(e,n,i):this.bs(e,n,i)}Rs(e,n){return this.ys(e,new j(n)).next(i=>{let s=Zo();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}Ps(e,n,i){const s=n.collectionGroup;let r=Zo();return this.indexManager.getCollectionParents(e,s).next(o=>S.forEach(o,a=>{const l=function(c,h){return new Br(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.bs(e,l,i).next(c=>{c.forEach((h,u)=>{r=r.insert(h,u)})})}).next(()=>r))}bs(e,n,i){let s;return this.qn.getAll(e,n.path,i).next(r=>(s=r,this.gs.getAllMutationBatchesAffectingQuery(e,n))).next(r=>{for(const o of r)for(const a of o.mutations){const l=a.key;let c=s.get(l);c==null&&(c=xe.newInvalidDocument(l),s=s.insert(l,c)),Qo(a,c,o.localWriteTime),c.isFoundDocument()||(s=s.remove(l))}}).next(()=>(s.forEach((r,o)=>{Qa(n,o)||(s=s.remove(r))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.vs=i,this.Vs=s}static Ss(e,n){let i=ue(),s=ue();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new el(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{Ds(e){this.Cs=e}As(e,n,i,s){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(Z.min())?this.Ns(e,n):this.Cs.Es(e,s).next(r=>{const o=this.xs(n,r);return(Bs(n)||ur(n))&&this.ks(n.limitType,o,s,i)?this.Ns(e,n):(Nc()<=se.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yo(n)),this.Cs.As(e,n,i).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}xs(e,n){let i=new Ve(rf(e));return n.forEach((s,r)=>{Qa(e,r)&&(i=i.add(r))}),i}ks(e,n,i,s){if(i.size!==n.size)return!0;const r=e==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ns(e,n){return Nc()<=se.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Yo(n)),this.Cs.As(e,n,Z.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n,i,s){this.persistence=e,this.Os=n,this.O=s,this.Ms=new Oe(re),this.$s=new ds(r=>Ja(r),Xa),this.Fs=Z.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(i)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new $_(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function nv(t,e,n,i){return new tv(t,e,n,i)}async function bf(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.gs.getAllMutationBatches(i).next(r=>(s=r,n.Ls(e),n.gs.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=ue();for(const c of s){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.Us.Es(i,l).next(c=>({qs:c,removedBatchIds:o,addedBatchIds:a}))})})}function iv(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const h=l.batch,u=h.keys();let f=S.resolve();return u.forEach(g=>{f=f.next(()=>c.getEntry(a,g)).next(m=>{const _=l.docVersions.get(g);ce(_!==null),m.version.compareTo(_)<0&&(h.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),c.addEntry(m)))})}),f.next(()=>o.gs.removeMutationBatch(a,h))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.gs.performConsistencyCheck(i)).next(()=>n.Us.Es(i,s))})}function Tf(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Un.getLastRemoteSnapshotVersion(n))}function sv(t,e){const n=z(t),i=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.Ms;const a=[];e.targetChanges.forEach((c,h)=>{const u=s.get(h);if(!u)return;a.push(n.Un.removeMatchingKeys(r,c.removedDocuments,h).next(()=>n.Un.addMatchingKeys(r,c.addedDocuments,h)));let f=u.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Fe.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,i)),s=s.insert(h,f),function(g,m,_){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(u,f,c)&&a.push(n.Un.updateTargetData(r,f))});let l=wn();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(rv(r,o,e.documentUpdates).next(c=>{l=c})),!i.isEqual(Z.min())){const c=n.Un.getLastRemoteSnapshotVersion(r).next(h=>n.Un.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(c)}return S.waitFor(a).next(()=>o.apply(r)).next(()=>n.Us.Ts(r,l)).next(()=>l)}).then(r=>(n.Ms=s,r))}function rv(t,e,n){let i=ue();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let r=wn();return n.forEach((o,a)=>{const l=s.get(o);a.isNoDocument()&&a.version.isEqual(Z.min())?(e.removeEntry(o,a.readTime),r=r.insert(o,a)):!l.isValidDocument()||a.version.compareTo(l.version)>0||a.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(a),r=r.insert(o,a)):L("LocalStore","Ignoring outdated watch update for ",o,". Current version:",l.version," Watch version:",a.version)}),r})}function ov(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(i,e)))}function av(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Un.getTargetData(i,e).next(r=>r?(s=r,S.resolve(s)):n.Un.allocateTargetId(i).next(o=>(s=new cn(e,o,0,i.currentSequenceNumber),n.Un.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Ms.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(i.targetId,i),n.$s.set(e,i.targetId)),i})}async function na(t,e,n){const i=z(t),s=i.Ms.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!hs(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ms=i.Ms.remove(e),i.$s.delete(s.target)}function Jc(t,e,n){const i=z(t);let s=Z.min(),r=ue();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const h=z(a),u=h.$s.get(c);return u!==void 0?S.resolve(h.Ms.get(u)):h.Un.getTargetData(l,c)}(i,o,vn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Un.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Os.As(o,e,n?s:Z.min(),n?r:ue())).next(a=>({documents:a,Ks:r})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,n){return S.resolve(this.Ws.get(n))}saveBundleMetadata(e,n){var i;return this.Ws.set(n.id,{id:(i=n).id,version:i.version,createTime:Ct(i.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.zs.get(n))}saveNamedQuery(e,n){return this.zs.set(n.name,function(i){return{name:i.name,query:X_(i.bundledQuery),readTime:Ct(i.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.overlays=new Oe(j.comparator),this.Hs=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}saveOverlays(e,n,i){return i.forEach(s=>{this.Yt(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.Hs.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.Hs.delete(i)),S.resolve()}getOverlaysForCollection(e,n,i){const s=new Map,r=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Oe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let h=r.get(c.largestBatchId);h===null&&(h=new Map,r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=new Map,l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(h,c)),!(a.size>=s)););return S.resolve(a)}Yt(e,n,i){if(i===null)return;const s=this.overlays.get(i.key);s!==null&&this.Hs.get(s.largestBatchId).delete(i.key),this.overlays=this.overlays.insert(i.key,new z_(n,i));let r=this.Hs.get(n);r===void 0&&(r=new Set,this.Hs.set(n,r)),r.add(i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.Js=new Ve(ke.Ys),this.Xs=new Ve(ke.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,n){const i=new ke(e,n);this.Js=this.Js.add(i),this.Xs=this.Xs.add(i)}ti(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.ei(new ke(e,n))}ni(e,n){e.forEach(i=>this.removeReference(i,n))}si(e){const n=new j(new fe([])),i=new ke(n,e),s=new ke(n,e+1),r=[];return this.Xs.forEachInRange([i,s],o=>{this.ei(o),r.push(o.key)}),r}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const n=new j(new fe([])),i=new ke(n,e),s=new ke(n,e+1);let r=ue();return this.Xs.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ke(e,0),i=this.Js.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class ke{constructor(e,n){this.key=e,this.oi=n}static Ys(e,n){return j.comparator(e.key,n.key)||re(e.oi,n.oi)}static Zs(e,n){return re(e.oi,n.oi)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.gs=[],this.ci=1,this.ui=new Ve(ke.Ys)}checkEmpty(e){return S.resolve(this.gs.length===0)}addMutationBatch(e,n,i,s){const r=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new G_(r,n,i,s);this.gs.push(o);for(const a of s)this.ui=this.ui.add(new ke(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ai(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.hi(i),r=s<0?0:s;return S.resolve(this.gs.length>r?this.gs[r]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(e){return S.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new ke(n,0),s=new ke(n,Number.POSITIVE_INFINITY),r=[];return this.ui.forEachInRange([i,s],o=>{const a=this.ai(o.oi);r.push(a)}),S.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Ve(re);return n.forEach(s=>{const r=new ke(s,0),o=new ke(s,Number.POSITIVE_INFINITY);this.ui.forEachInRange([r,o],a=>{i=i.add(a.oi)})}),S.resolve(this.li(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;j.isDocumentKey(r)||(r=r.child(""));const o=new ke(new j(r),0);let a=new Ve(re);return this.ui.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.oi)),!0)},o),S.resolve(this.li(a))}li(e){const n=[];return e.forEach(i=>{const s=this.ai(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ce(this.fi(n.batchId,"removed")===0),this.gs.shift();let i=this.ui;return S.forEach(n.mutations,s=>{const r=new ke(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ui=i})}Qe(e){}containsKey(e,n){const i=new ke(n,0),s=this.ui.firstAfterOrEqual(i);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.gs.length,S.resolve()}fi(e,n){return this.hi(e)}hi(e){return this.gs.length===0?0:e-this.gs[0].batchId}ai(e){const n=this.hi(e);return n<0||n>=this.gs.length?null:this.gs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this.di=e,this.docs=new Oe(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.di(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return S.resolve(i?i.document.mutableCopy():xe.newInvalidDocument(n))}getEntries(e,n){let i=wn();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():xe.newInvalidDocument(s))}),S.resolve(i)}getAll(e,n,i){let s=wn();const r=new j(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||l.readTime.compareTo(i)<=0||(s=s.insert(l.key,l.mutableCopy()))}return S.resolve(s)}_i(e,n){return S.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new fv(this)}getSize(e){return S.resolve(this.size)}}class fv extends Z_{constructor(e){super(),this.Tn=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Tn.addEntry(e,s)):this.Tn.removeEntry(i)}),S.waitFor(n)}getFromCache(e,n){return this.Tn.getEntry(e,n)}getAllFromCache(e,n){return this.Tn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e){this.persistence=e,this.wi=new ds(n=>Ja(n),Xa),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.mi=0,this.gi=new tl,this.targetCount=0,this.yi=$n.He()}forEachTarget(e,n){return this.wi.forEach((i,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.mi&&(this.mi=n),S.resolve()}Ze(e){this.wi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.yi=new $n(n),this.highestTargetId=n),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,n){return this.Ze(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Ze(n),S.resolve()}removeTargetData(e,n){return this.wi.delete(n.target),this.gi.si(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.wi.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(r).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const i=this.wi.get(n)||null;return S.resolve(i)}addMatchingKeys(e,n,i){return this.gi.ti(n,i),S.resolve()}removeMatchingKeys(e,n,i){this.gi.ni(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.gi.si(n),S.resolve()}getMatchingKeysForTargetId(e,n){const i=this.gi.ri(n);return S.resolve(i)}containsKey(e,n){return S.resolve(this.gi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n){this.pi={},this.overlays={},this.Nn=new Ga(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new dv(this),this.indexManager=new Y_,this.qn=function(i){return new hv(i)}(i=>this.referenceDelegate.Ii(i)),this.O=new J_(n),this.Kn=new lv(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cv,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.pi[e.toKey()];return i||(i=new uv(n,this.referenceDelegate),this.pi[e.toKey()]=i),i}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,n,i){L("MemoryPersistence","Starting transaction:",e);const s=new mv(this.Nn.next());return this.referenceDelegate.Ei(),i(s).next(r=>this.referenceDelegate.Ti(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ai(e,n){return S.or(Object.values(this.pi).map(i=>()=>i.containsKey(e,n)))}}class mv extends K_{constructor(e){super(),this.currentSequenceNumber=e}}class nl{constructor(e){this.persistence=e,this.Ri=new tl,this.Pi=null}static bi(e){return new nl(e)}get vi(){if(this.Pi)return this.Pi;throw G()}addReference(e,n,i){return this.Ri.addReference(i,n),this.vi.delete(i.toString()),S.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.vi.add(i.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.vi.add(n.toString()),S.resolve()}removeTarget(e,n){this.Ri.si(n.targetId).forEach(s=>this.vi.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.vi.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Ei(){this.Pi=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.vi,i=>{const s=j.fromPath(i);return this.Vi(e,s).next(r=>{r||n.removeEntry(s,Z.min())})}).next(()=>(this.Pi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Vi(e,n).next(i=>{i?this.vi.delete(n.toString()):this.vi.add(n.toString())})}Ii(e){return 0}Vi(e,n){return S.or([()=>S.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Xc{constructor(){this.activeTargetIds=mf()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pv{constructor(){this._r=new Xc,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,n,i){this.wr[e]=n}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new Xc,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{mr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.kr=n+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,n,i,s,r){const o=this.$r(e,n);L("RestConnection","Sending: ",o,i);const a={};return this.Fr(a,s,r),this.Br(e,o,a,i).then(l=>(L("RestConnection","Received: ",l),l),l=>{throw Oc("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",i),l})}Lr(e,n,i,s,r){return this.Mr(e,n,i,s,r)}Fr(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+ai,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}$r(e,n){const i=_v[e];return`${this.kr}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,n,i,s){return new Promise((r,o)=>{const a=new Uy;a.listenOnce(Ly.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Io.NO_ERROR:const c=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Io.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new U(b.DEADLINE_EXCEEDED,"Request time out"));break;case Io.HTTP_ERROR:const h=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const u=a.getResponseJson().error;if(u&&u.status&&u.message){const f=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(m)>=0?m:b.UNKNOWN}(u.status);o(new U(f,u.message))}else o(new U(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(b.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(n,"POST",l,i,15)})}Ur(e,n,i){const s=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Dy(),o=Ry(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new My({})),this.Fr(a.initMessageHeaders,n,i),Hu()||Ku()||_m()||Gu()||vm()||Wu()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=s.join("");L("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let h=!1,u=!1;const f=new vv({Ar:m=>{u?L("Connection","Not sending because WebChannel is closed:",m):(h||(L("Connection","Opening WebChannel transport."),c.open(),h=!0),L("Connection","WebChannel sending:",m),c.send(m))},Rr:()=>c.close()}),g=(m,_,O)=>{m.listen(_,F=>{try{O(F)}catch(N){setTimeout(()=>{throw N},0)}})};return g(c,Ls.EventType.OPEN,()=>{u||L("Connection","WebChannel transport opened.")}),g(c,Ls.EventType.CLOSE,()=>{u||(u=!0,L("Connection","WebChannel transport closed"),f.Cr())}),g(c,Ls.EventType.ERROR,m=>{u||(u=!0,Oc("Connection","WebChannel transport errored:",m),f.Cr(new U(b.UNAVAILABLE,"The operation could not be completed")))}),g(c,Ls.EventType.MESSAGE,m=>{var _;if(!u){const O=m.data[0];ce(!!O);const F=O,N=F.error||((_=F[0])===null||_===void 0?void 0:_.error);if(N){L("Connection","WebChannel received error:",N);const A=N.status;let p=function(v){const J=Ie[v];if(J!==void 0)return gf(J)}(A),k=N.message;p===void 0&&(p=b.INTERNAL,k="Unknown error status: "+A+" with message "+N.message),u=!0,f.Cr(new U(p,k)),c.close()}else L("Connection","WebChannel received:",O),f.Nr(O)}}),g(o,Py.STAT_EVENT,m=>{m.stat===Cc.PROXY?L("Connection","Detected buffering proxy"):m.stat===Cc.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Dr()},0),f}}function bo(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t){return new N_(t,!0)}class Sf{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Sn=e,this.timerId=n,this.qr=i,this.Kr=s,this.Gr=r,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const n=Math.floor(this.jr+this.Jr()),i=Math.max(0,Date.now()-this.Wr),s=Math.max(0,n-i);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.jr} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,s,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n,i,s,r,o,a,l){this.Sn=e,this.Xr=i,this.Zr=s,this.eo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new Sf(e,n)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,n){this._o(),this.wo(),this.ro.cancel(),this.no++,e!==4?this.ro.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Jt(n.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(n)}mo(){}auth(){this.state=1;const e=this.yo(this.no),n=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.no===n&&this.po(i,s)},i=>{e(()=>{const s=new U(b.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Io(s)})})}po(e,n){const i=this.yo(this.no);this.stream=this.Eo(e,n),this.stream.Pr(()=>{i(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(s=>{i(()=>this.Io(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return n=>{this.Sn.enqueueAndForget(()=>this.no===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Iv extends kf{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.O=r}Eo(e,n){return this.eo.Ur("Listen",e,n)}onMessage(e){this.ro.reset();const n=R_(this.O,e),i=function(s){if(!("targetChange"in s))return Z.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?Z.min():r.readTime?Ct(r.readTime):Z.min()}(e);return this.listener.To(n,i)}Ao(e){const n={};n.database=ta(this.O),n.addTarget=function(s,r){let o;const a=r.target;return o=Xo(a)?{documents:M_(s,a)}:{query:U_(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=_f(s,r.resumeToken):r.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=dr(s,r.snapshotVersion.toTimestamp())),o}(this.O,e);const i=F_(this.O,e);i&&(n.labels=i),this.fo(n)}Ro(e){const n={};n.database=ta(this.O),n.removeTarget=e,this.fo(n)}}class Ev extends kf{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.O=r,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,n){return this.eo.Ur("Write",e,n)}onMessage(e){if(ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const n=P_(e.writeResults,e.commitTime),i=Ct(e.commitTime);return this.listener.Vo(i,n)}return ce(!e.writeResults||e.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const e={};e.database=ta(this.O),this.fo(e)}vo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>L_(this.O,i))};this.fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.eo=i,this.O=s,this.Co=!1}No(){if(this.Co)throw new U(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,n,i){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.eo.Mr(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(b.UNKNOWN,s.toString())})}Lr(e,n,i){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.eo.Lr(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(b.UNKNOWN,s.toString())})}terminate(){this.Co=!0}}class Tv{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,e==="Online"&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(Jt(n),this.Oo=!1):L("OnlineStateTracker",n)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=r,this.jo.mr(o=>{i.enqueueAndForget(async()=>{An(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=z(a);l.Ko.add(4),await gs(l),l.Qo.set("Unknown"),l.Ko.delete(4),await Gr(l)}(this))})}),this.Qo=new Tv(i,s)}}async function Gr(t){if(An(t))for(const e of t.Go)await e(!0)}async function gs(t){for(const e of t.Go)await e(!1)}function Cf(t,e){const n=z(t);n.qo.has(e.targetId)||(n.qo.set(e.targetId,e),rl(n)?sl(n):ui(n).co()&&il(n,e))}function Af(t,e){const n=z(t),i=ui(n);n.qo.delete(e),i.co()&&Nf(n,e),n.qo.size===0&&(i.co()?i.ho():An(n)&&n.Qo.set("Unknown"))}function il(t,e){t.Wo.Z(e.targetId),ui(t).Ao(e)}function Nf(t,e){t.Wo.Z(e),ui(t).Ro(e)}function sl(t){t.Wo=new k_({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),ui(t).start(),t.Qo.Mo()}function rl(t){return An(t)&&!ui(t).oo()&&t.qo.size>0}function An(t){return z(t).Ko.size===0}function Of(t){t.Wo=void 0}async function kv(t){t.qo.forEach((e,n)=>{il(t,e)})}async function Cv(t,e){Of(t),rl(t)?(t.Qo.Bo(e),sl(t)):t.Qo.set("Unknown")}async function Av(t,e,n){if(t.Qo.set("Online"),e instanceof yf&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.qo.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.qo.delete(o),i.Wo.removeTarget(o))}(t,e)}catch(i){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await gr(t,i)}else if(e instanceof xs?t.Wo.ct(e):e instanceof pf?t.Wo._t(e):t.Wo.ht(e),!n.isEqual(Z.min()))try{const i=await Tf(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.Wo.yt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.qo.get(l);c&&s.qo.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.qo.get(a);if(!l)return;s.qo.set(a,l.withResumeToken(Fe.EMPTY_BYTE_STRING,l.snapshotVersion)),Nf(s,a);const c=new cn(l.target,a,1,l.sequenceNumber);il(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){L("RemoteStore","Failed to raise snapshot:",i),await gr(t,i)}}async function gr(t,e,n){if(!hs(e))throw e;t.Ko.add(1),await gs(t),t.Qo.set("Offline"),n||(n=()=>Tf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await Gr(t)})}function Df(t,e){return e().catch(n=>gr(t,n,e))}async function zr(t){const e=z(t),n=Yt(e);let i=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;Nv(e);)try{const s=await ov(e.localStore,i);if(s===null){e.Uo.length===0&&n.ho();break}i=s.batchId,Ov(e,s)}catch(s){await gr(e,s)}Rf(e)&&Lf(e)}function Nv(t){return An(t)&&t.Uo.length<10}function Ov(t,e){t.Uo.push(e);const n=Yt(t);n.co()&&n.bo&&n.vo(e.mutations)}function Rf(t){return An(t)&&!Yt(t).oo()&&t.Uo.length>0}function Lf(t){Yt(t).start()}async function Dv(t){Yt(t).Do()}async function Rv(t){const e=Yt(t);for(const n of t.Uo)e.vo(n.mutations)}async function Lv(t,e,n){const i=t.Uo.shift(),s=$a.from(i,e,n);await Df(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await zr(t)}async function Pv(t,e){e&&Yt(t).bo&&await async function(n,i){if(s=i.code,w_(s)&&s!==b.ABORTED){const r=n.Uo.shift();Yt(n).ao(),await Df(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await zr(n)}var s}(t,e),Rf(t)&&Lf(t)}async function Qc(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const i=An(n);n.Ko.add(3),await gs(n),i&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await Gr(n)}async function Mv(t,e){const n=z(t);e?(n.Ko.delete(2),await Gr(n)):e||(n.Ko.add(2),await gs(n),n.Qo.set("Unknown"))}function ui(t){return t.zo||(t.zo=function(e,n,i){const s=z(e);return s.No(),new Iv(n,s.eo,s.authCredentials,s.appCheckCredentials,s.O,i)}(t.datastore,t.asyncQueue,{Pr:kv.bind(null,t),vr:Cv.bind(null,t),To:Av.bind(null,t)}),t.Go.push(async e=>{e?(t.zo.ao(),rl(t)?sl(t):t.Qo.set("Unknown")):(await t.zo.stop(),Of(t))})),t.zo}function Yt(t){return t.Ho||(t.Ho=function(e,n,i){const s=z(e);return s.No(),new Ev(n,s.eo,s.authCredentials,s.appCheckCredentials,s.O,i)}(t.datastore,t.asyncQueue,{Pr:Dv.bind(null,t),vr:Pv.bind(null,t),So:Rv.bind(null,t),Vo:Lv.bind(null,t)}),t.Go.push(async e=>{e?(t.Ho.ao(),await zr(t)):(await t.Ho.stop(),t.Uo.length>0&&(L("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))})),t.Ho}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new ol(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function al(t,e){if(Jt("AsyncQueue",`${e}: ${t}`),hs(t))return new U(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.comparator=e?(n,i)=>e(n,i)||j.comparator(n.key,i.key):(n,i)=>j.comparator(n.key,i.key),this.keyedMap=Zo(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new Hn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Hn;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.Jo=new Oe(j.comparator)}track(e){const n=e.doc.key,i=this.Jo.get(n);i?e.type!==0&&i.type===3?this.Jo=this.Jo.insert(n,e):e.type===3&&i.type!==1?this.Jo=this.Jo.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Jo=this.Jo.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Jo=this.Jo.remove(n):e.type===1&&i.type===2?this.Jo=this.Jo.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):G():this.Jo=this.Jo.insert(n,e)}Yo(){const e=[];return this.Jo.inorderTraversal((n,i)=>{e.push(i)}),e}}class ei{constructor(e,n,i,s,r,o,a,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,i,s){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new ei(e,n,Hn.emptySet(n),r,i,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(){this.Xo=void 0,this.listeners=[]}}class Vv{constructor(){this.queries=new ds(e=>sf(e),jr),this.onlineState="Unknown",this.Zo=new Set}}async function Pf(t,e){const n=z(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new Uv),s)try{r.Xo=await n.onListen(i)}catch(o){const a=al(o,`Initialization of query '${Yo(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.tc(n.onlineState),r.Xo&&e.ec(r.Xo)&&ll(n)}async function Mf(t,e){const n=z(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function Fv(t,e){const n=z(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.ec(s)&&(i=!0);o.Xo=s}}i&&ll(n)}function Bv(t,e,n){const i=z(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function ll(t){t.Zo.forEach(e=>{e.next()})}class Uf{constructor(e,n,i){this.query=e,this.nc=n,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=i||{}}ec(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new ei(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.sc?this.rc(e)&&(this.nc.next(e),n=!0):this.oc(e,this.onlineState)&&(this.cc(e),n=!0),this.ic=e,n}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let n=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),n=!0),n}oc(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.uc||!i)&&(!e.docs.isEmpty()||n==="Offline")}rc(e){if(e.docChanges.length>0)return!0;const n=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}cc(e){e=ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e){this.key=e}}class Ff{constructor(e){this.key=e}}class jv{constructor(e,n){this.query=e,this.dc=n,this._c=null,this.current=!1,this.wc=ue(),this.mutatedKeys=ue(),this.mc=rf(e),this.gc=new Hn(this.mc)}get yc(){return this.dc}Ic(e,n){const i=n?n.Ec:new Zc,s=n?n.gc:this.gc;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=Bs(this.query)&&s.size===this.query.limit?s.last():null,c=ur(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,u)=>{const f=s.get(h),g=Qa(this.query,u)?u:null,m=!!f&&this.mutatedKeys.has(f.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let O=!1;f&&g?f.data.isEqual(g.data)?m!==_&&(i.track({type:3,doc:g}),O=!0):this.Tc(f,g)||(i.track({type:2,doc:g}),O=!0,(l&&this.mc(g,l)>0||c&&this.mc(g,c)<0)&&(a=!0)):!f&&g?(i.track({type:0,doc:g}),O=!0):f&&!g&&(i.track({type:1,doc:f}),O=!0,(l||c)&&(a=!0)),O&&(g?(o=o.add(g),r=_?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),Bs(this.query)||ur(this.query))for(;o.size>this.query.limit;){const h=Bs(this.query)?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),i.track({type:1,doc:h})}return{gc:o,Ec:i,ks:a,mutatedKeys:r}}Tc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const r=e.Ec.Yo();r.sort((c,h)=>function(u,f){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(u)-g(f)}(c.type,h.type)||this.mc(c.doc,h.doc)),this.Ac(i);const o=n?this.Rc():[],a=this.wc.size===0&&this.current?1:0,l=a!==this._c;return this._c=a,r.length!==0||l?{snapshot:new ei(this.query,e.gc,s,r,e.mutatedKeys,a===0,l,!1),Pc:o}:{Pc:o}}tc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Zc,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach(n=>this.dc=this.dc.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.dc=this.dc.delete(n)),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=ue(),this.gc.forEach(i=>{this.bc(i.key)&&(this.wc=this.wc.add(i.key))});const n=[];return e.forEach(i=>{this.wc.has(i)||n.push(new Ff(i))}),this.wc.forEach(i=>{e.has(i)||n.push(new Vf(i))}),n}vc(e){this.dc=e.Ks,this.wc=ue();const n=this.Ic(e.documents);return this.applyChanges(n,!0)}Vc(){return ei.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,this._c===0)}}class xv{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class qv{constructor(e){this.key=e,this.Sc=!1}}class Hv{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new ds(a=>sf(a),jr),this.Nc=new Map,this.xc=new Set,this.kc=new Oe(j.comparator),this.Oc=new Map,this.Mc=new tl,this.$c={},this.Fc=new Map,this.Bc=$n.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function Wv(t,e){const n=ew(t);let i,s;const r=n.Cc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Vc();else{const o=await av(n.localStore,vn(e));n.isPrimaryClient&&Cf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await Kv(n,e,i,a==="current")}return s}async function Kv(t,e,n,i){t.Uc=(h,u,f)=>async function(g,m,_,O){let F=m.view.Ic(_);F.ks&&(F=await Jc(g.localStore,m.query,!1).then(({documents:p})=>m.view.Ic(p,F)));const N=O&&O.targetChanges.get(m.targetId),A=m.view.applyChanges(F,g.isPrimaryClient,N);return eu(g,m.targetId,A.Pc),A.snapshot}(t,h,u,f);const s=await Jc(t.localStore,e,!0),r=new jv(e,s.Ks),o=r.Ic(s.documents),a=us.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),l=r.applyChanges(o,t.isPrimaryClient,a);eu(t,n,l.Pc);const c=new xv(e,n,r);return t.Cc.set(e,c),t.Nc.has(n)?t.Nc.get(n).push(e):t.Nc.set(n,[e]),l.snapshot}async function Gv(t,e){const n=z(t),i=n.Cc.get(e),s=n.Nc.get(i.targetId);if(s.length>1)return n.Nc.set(i.targetId,s.filter(r=>!jr(r,e))),void n.Cc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await na(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Af(n.remoteStore,i.targetId),ia(n,i.targetId)}).catch(fs)):(ia(n,i.targetId),await na(n.localStore,i.targetId,!0))}async function zv(t,e,n){const i=tw(t);try{const s=await function(r,o){const a=z(r),l=tt.now(),c=o.reduce((u,f)=>u.add(f.key),ue());let h;return a.persistence.runTransaction("Locally write mutations","readwrite",u=>a.Us.Es(u,c).next(f=>{h=f;const g=[];for(const m of o){const _=y_(m,h.get(m.key));_!=null&&g.push(new ci(m.key,_,tf(_.value.mapValue),Ht.exists(!0)))}return a.gs.addMutationBatch(u,l,g,o)})).then(u=>(u.applyToLocalDocumentSet(h),{batchId:u.batchId,changes:h}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.$c[r.currentUser.toKey()];l||(l=new Oe(re)),l=l.insert(o,a),r.$c[r.currentUser.toKey()]=l}(i,s.batchId,n),await ms(i,s.changes),await zr(i.remoteStore)}catch(s){const r=al(s,"Failed to persist write");n.reject(r)}}async function Bf(t,e){const n=z(t);try{const i=await sv(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.Oc.get(r);o&&(ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Sc=!0:s.modifiedDocuments.size>0?ce(o.Sc):s.removedDocuments.size>0&&(ce(o.Sc),o.Sc=!1))}),await ms(n,i,e)}catch(i){await fs(i)}}function $c(t,e,n){const i=z(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Cc.forEach((r,o)=>{const a=o.view.tc(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=z(r);a.onlineState=o;let l=!1;a.queries.forEach((c,h)=>{for(const u of h.listeners)u.tc(o)&&(l=!0)}),l&&ll(a)}(i.eventManager,e),s.length&&i.Dc.To(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Jv(t,e,n){const i=z(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Oc.get(e),r=s&&s.key;if(r){let o=new Oe(j.comparator);o=o.insert(r,xe.newNoDocument(r,Z.min()));const a=ue().add(r),l=new Wr(Z.min(),new Map,new Ve(re),o,a);await Bf(i,l),i.kc=i.kc.remove(r),i.Oc.delete(e),cl(i)}else await na(i.localStore,e,!1).then(()=>ia(i,e,n)).catch(fs)}async function Xv(t,e){const n=z(t),i=e.batch.batchId;try{const s=await iv(n.localStore,e);xf(n,i,null),jf(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ms(n,s)}catch(s){await fs(s)}}async function Yv(t,e,n){const i=z(t);try{const s=await function(r,o){const a=z(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.gs.lookupMutationBatch(l,o).next(h=>(ce(h!==null),c=h.keys(),a.gs.removeMutationBatch(l,h))).next(()=>a.gs.performConsistencyCheck(l)).next(()=>a.Us.Es(l,c))})}(i.localStore,e);xf(i,e,n),jf(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ms(i,s)}catch(s){await fs(s)}}function jf(t,e){(t.Fc.get(e)||[]).forEach(n=>{n.resolve()}),t.Fc.delete(e)}function xf(t,e,n){const i=z(t);let s=i.$c[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.$c[i.currentUser.toKey()]=s}}function ia(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Nc.get(e))t.Cc.delete(i),n&&t.Dc.qc(i,n);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach(i=>{t.Mc.containsKey(i)||qf(t,i)})}function qf(t,e){t.xc.delete(e.path.canonicalString());const n=t.kc.get(e);n!==null&&(Af(t.remoteStore,n),t.kc=t.kc.remove(e),t.Oc.delete(n),cl(t))}function eu(t,e,n){for(const i of n)i instanceof Vf?(t.Mc.addReference(i.key,e),Qv(t,i)):i instanceof Ff?(L("SyncEngine","Document no longer in limbo: "+i.key),t.Mc.removeReference(i.key,e),t.Mc.containsKey(i.key)||qf(t,i.key)):G()}function Qv(t,e){const n=e.key,i=n.path.canonicalString();t.kc.get(n)||t.xc.has(i)||(L("SyncEngine","New document in limbo: "+n),t.xc.add(i),cl(t))}function cl(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const n=new j(fe.fromString(e)),i=t.Bc.next();t.Oc.set(i,new qv(n)),t.kc=t.kc.insert(n,i),Cf(t.remoteStore,new cn(vn(Ya(n.path)),i,2,Ga.A))}}async function ms(t,e,n){const i=z(t),s=[],r=[],o=[];i.Cc.isEmpty()||(i.Cc.forEach((a,l)=>{o.push(i.Uc(l,e,n).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),s.push(c);const h=el.Ss(l.targetId,c);r.push(h)}}))}),await Promise.all(o),i.Dc.To(s),await async function(a,l){const c=z(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(l,u=>S.forEach(u.vs,f=>c.persistence.referenceDelegate.addReference(h,u.targetId,f)).next(()=>S.forEach(u.Vs,f=>c.persistence.referenceDelegate.removeReference(h,u.targetId,f)))))}catch(h){if(!hs(h))throw h;L("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const u=h.targetId;if(!h.fromCache){const f=c.Ms.get(u),g=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(g);c.Ms=c.Ms.insert(u,m)}}}(i.localStore,r))}async function Zv(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const i=await bf(n.localStore,e);n.currentUser=e,function(s,r){s.Fc.forEach(o=>{o.forEach(a=>{a.reject(new U(b.CANCELLED,r))})}),s.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ms(n,i.qs)}}function $v(t,e){const n=z(t),i=n.Oc.get(e);if(i&&i.Sc)return ue().add(i.key);{let s=ue();const r=n.Nc.get(e);if(!r)return s;for(const o of r){const a=n.Cc.get(o);s=s.unionWith(a.view.yc)}return s}}function ew(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$v.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jv.bind(null,e),e.Dc.To=Fv.bind(null,e.eventManager),e.Dc.qc=Bv.bind(null,e.eventManager),e}function tw(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Xv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yv.bind(null,e),e}class nw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=Kr(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return nv(this.persistence,new ev,e.initialUser,this.O)}jc(e){return new gv(nl.bi,this.O)}Gc(e){return new pv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class iw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>$c(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zv.bind(null,this.syncEngine),await Mv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Vv}createDatastore(e){const n=Kr(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new wv(s));var s;return function(r,o,a,l){return new bv(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>$c(this.syncEngine,a,0),o=Yc.Vt()?new Yc:new yv,new Sv(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,c){const h=new Hv(i,s,r,o,a,l);return c&&(h.Lc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=z(e);L("RemoteStore","RemoteStore shutting down."),n.Ko.add(5),await gs(n),n.jo.shutdown(),n.Qo.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Ge.UNAUTHENTICATED,this.clientId=Qh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{L("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(L("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=al(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function rw(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await bf(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ow(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aw(t);L("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>Qc(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Qc(e.remoteStore,r)),t.onlineComponents=e}async function aw(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await rw(t,new nw)),t.offlineComponents}async function Wf(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await ow(t,new iw)),t.onlineComponents}function lw(t){return Wf(t).then(e=>e.syncEngine)}async function Kf(t){const e=await Wf(t),n=e.eventManager;return n.onListen=Wv.bind(null,e.syncEngine),n.onUnlisten=Gv.bind(null,e.syncEngine),n}function cw(t,e,n={}){const i=new kt;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new Hf({next:u=>{r.enqueueAndForget(()=>Mf(s,h));const f=u.docs.has(o);!f&&u.fromCache?l.reject(new U(b.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&u.fromCache&&a&&a.source==="server"?l.reject(new U(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(u)},error:u=>l.reject(u)}),h=new Uf(Ya(o.path),c,{includeMetadataChanges:!0,uc:!0});return Pf(s,h)}(await Kf(t),t.asyncQueue,e,n,i)),i.promise}function uw(t,e,n={}){const i=new kt;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new Hf({next:u=>{r.enqueueAndForget(()=>Mf(s,h)),u.fromCache&&a.source==="server"?l.reject(new U(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(u)},error:u=>l.reject(u)}),h=new Uf(o,c,{includeMetadataChanges:!0,uc:!0});return Pf(s,h)}(await Kf(t),t.asyncQueue,e,n,i)),i.promise}const tu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t,e,n){if(!n)throw new U(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hw(t,e,n,i){if(e===!0&&i===!0)throw new U(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nu(t){if(!j.isDocumentKey(t))throw new U(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function iu(t){if(j.isDocumentKey(t))throw new U(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ul(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Ot(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ul(t);throw new U(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,hw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new su({}),this._settingsFrozen=!1,e instanceof Qn?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new U(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qn(s.options.projectId)}(e))}get app(){if(!this._app)throw new U(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new su(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Fy;switch(n.type){case"gapi":const i=n.client;return ce(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new xy(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new U(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=tu.get(e);n&&(L("ComponentProvider","Removing Datastore"),tu.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xe(this.firestore,e,this._key)}}class Jr{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Jr(this.firestore,e,this._query)}}class Wt extends Jr{constructor(e,n,i){super(e,n,Ya(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xe(this.firestore,null,new j(e))}withConverter(e){return new Wt(this.firestore,e,this._path)}}function jI(t,e,...n){if(t=Ae(t),Gf("collection","path",e),t instanceof hl){const i=fe.fromString(e,...n);return iu(i),new Wt(t,null,i)}{if(!(t instanceof Xe||t instanceof Wt))throw new U(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(fe.fromString(e,...n));return iu(i),new Wt(t.firestore,null,i)}}function xI(t,e,...n){if(t=Ae(t),arguments.length===1&&(e=Qh.R()),Gf("doc","path",e),t instanceof hl){const i=fe.fromString(e,...n);return nu(i),new Xe(t,null,new j(i))}{if(!(t instanceof Xe||t instanceof Wt))throw new U(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(fe.fromString(e,...n));return nu(i),new Xe(t.firestore,t instanceof Wt?t.converter:null,new j(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new Sf(this,"async_queue_retry"),this.yu=()=>{const n=bo();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ro.Yr()};const e=bo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const n=bo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const n=new kt;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!hs(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const n=this.hu.then(()=>(this.wu=!0,e().catch(i=>{this._u=i,this.wu=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Jt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.wu=!1,i))));return this.hu=n,n}enqueueAfterDelay(e,n,i){this.pu(),this.gu.indexOf(e)>-1&&(n=0);const s=ol.createAndSchedule(this,e,n,i,r=>this.Tu(r));return this.du.push(s),s}pu(){this._u&&G()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class hi extends hl{constructor(e,n,i){super(e,n,i),this.type="firestore",this._queue=new fw,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||zf(this),this._firestoreClient.terminate()}}function qI(t=Yu()){return _a(t,"firestore").getImmediate()}function fl(t){return t._firestoreClient||zf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zf(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new zy(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new sw(t._authCredentials,t._appCheckCredentials,t._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ti(Fe.fromBase64String(e))}catch(n){throw new U(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ti(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=/^__.*__$/;class gw{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new ci(e,this.data,this.fieldMask,n,this.fieldTransforms):new Hr(e,this.data,n,this.fieldTransforms)}}class Jf{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new ci(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Xf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class ml{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.O=i,this.ignoreUndefinedProperties=s,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new ml(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:i,Cu:!1});return s.Nu(e),s}xu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:i,Cu:!1});return s.vu(),s}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return mr(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(e.length===0)throw this.Ou("Document fields must not be empty");if(Xf(this.Vu)&&dw.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class mw{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.O=i||Kr(e)}Fu(e,n,i,s=!1){return new ml({Vu:e,methodName:n,$u:i,path:ze.emptyPath(),Cu:!1,Mu:s},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function Yf(t){const e=t._freezeSettings(),n=Kr(t._databaseId);return new mw(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pw(t,e,n,i,s,r={}){const o=t.Fu(r.merge||r.mergeFields?2:0,e,n,s);pl("Data must be an object, but it was:",o,i);const a=Qf(i,o);let l,c;if(r.merge)l=new qi(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const u of r.mergeFields){const f=sa(e,u,n);if(!o.contains(f))throw new U(b.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);$f(h,f)||h.push(f)}l=new qi(h),c=o.fieldTransforms.filter(u=>l.covers(u.field))}else l=null,c=o.fieldTransforms;return new gw(new et(a),l,c)}class Yr extends dl{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Ou(`${this._methodName}() can only appear at the top level of your update data`):e.Ou(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yr}}function yw(t,e,n,i){const s=t.Fu(1,e,n);pl("Data must be an object, but it was:",s,i);const r=[],o=et.empty();Cn(i,(l,c)=>{const h=yl(e,l,n);c=Ae(c);const u=s.xu(h);if(c instanceof Yr)r.push(h);else{const f=Qr(c,u);f!=null&&(r.push(h),o.set(h,f))}});const a=new qi(r);return new Jf(o,a,s.fieldTransforms)}function _w(t,e,n,i,s,r){const o=t.Fu(1,e,n),a=[sa(e,i,n)],l=[s];if(r.length%2!=0)throw new U(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(sa(e,r[f])),l.push(r[f+1]);const c=[],h=et.empty();for(let f=a.length-1;f>=0;--f)if(!$f(c,a[f])){const g=a[f];let m=l[f];m=Ae(m);const _=o.xu(g);if(m instanceof Yr)c.push(g);else{const O=Qr(m,_);O!=null&&(c.push(g),h.set(g,O))}}const u=new qi(c);return new Jf(h,u,o.fieldTransforms)}function Qr(t,e){if(Zf(t=Ae(t)))return pl("Unsupported field value:",e,t),Qf(t,e);if(t instanceof dl)return function(n,i){if(!Xf(i.Vu))throw i.Ou(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Ou(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&e.Vu!==4)throw e.Ou("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=Qr(o,i.ku(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=Ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return h_(i.O,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=tt.fromDate(n);return{timestampValue:dr(i.O,s)}}if(n instanceof tt){const s=new tt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:dr(i.O,s)}}if(n instanceof gl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ti)return{bytesValue:_f(i.O,n._byteString)};if(n instanceof Xe){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.Ou(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Za(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Ou(`Unsupported field value: ${ul(n)}`)}(t,e)}function Qf(t,e){const n={};return Zh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cn(t,(i,s)=>{const r=Qr(s,e.Du(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function Zf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof gl||t instanceof ti||t instanceof Xe||t instanceof dl)}function pl(t,e,n){if(!Zf(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=ul(n);throw i==="an object"?e.Ou(t+" a custom object"):e.Ou(t+" "+i)}}function sa(t,e,n){if((e=Ae(e))instanceof Xr)return e._internalPath;if(typeof e=="string")return yl(t,e);throw mr("Field path arguments must be of type string or ",t,!1,void 0,n)}const vw=new RegExp("[~\\*/\\[\\]]");function yl(t,e,n){if(e.search(vw)>=0)throw mr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xr(...e.split("."))._internalPath}catch{throw mr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mr(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new U(b.INVALID_ARGUMENT,a+t+l)}function $f(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ww(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(td("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ww extends ed{data(){return super.data()}}function td(t,e){return typeof e=="string"?yl(t,e):e instanceof Xr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nd extends ed{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(td("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class qs extends nd{data(e={}){return super.data(e)}}class Iw{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ci(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new qs(this._firestore,this._userDataWriter,i.key,i,new Ci(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new qs(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ci(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:r++}))}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new qs(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ci(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Ew(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ew(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(t){if(ur(t)&&t.explicitOrderBy.length===0)throw new U(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{convertValue(e,n="none"){switch(_n(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const i={};return Cn(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new gl(Ee(e.latitude),Ee(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=ef(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Hi(e));default:return null}}convertTimestamp(e){const n=Xt(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=fe.fromString(e);ce(Ef(i));const s=new Qn(i.get(1),i.get(3)),r=new j(i.popFirst(5));return s.isEqual(n)||Jt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t){t=Ot(t,Xe);const e=Ot(t.firestore,hi);return cw(fl(e),t._key).then(n=>kw(e,t,n))}class id extends Tw{constructor(e){super(),this.firestore=e}convertBytes(e){return new ti(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xe(this.firestore,null,n)}}function WI(t){t=Ot(t,Jr);const e=Ot(t.firestore,hi),n=fl(e),i=new id(e);return bw(t._query),uw(n,t._query).then(s=>new Iw(e,i,t,s))}function KI(t,e,n){t=Ot(t,Xe);const i=Ot(t.firestore,hi),s=Sw(t.converter,e,n);return _l(i,[pw(Yf(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ht.none())])}function GI(t,e,n,...i){t=Ot(t,Xe);const s=Ot(t.firestore,hi),r=Yf(s);let o;return o=typeof(e=Ae(e))=="string"||e instanceof Xr?_w(r,"updateDoc",t._key,e,n,i):yw(r,"updateDoc",t._key,e),_l(s,[o.toMutation(t._key,Ht.exists(!0))])}function zI(t){return _l(Ot(t.firestore,hi),[new df(t._key,Ht.none())])}function _l(t,e){return function(n,i){const s=new kt;return n.asyncQueue.enqueueAndForget(async()=>zv(await lw(n),i,s)),s.promise}(fl(t),e)}function kw(t,e,n){const i=n.docs.get(e._key),s=new id(t);return new nd(t,s,e._key,i,new Ci(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ai=n})(es),zn(new dn("firestore",(n,{options:i})=>{const s=n.getProvider("app").getImmediate(),r=new hi(s,new By(n.getProvider("auth-internal")),new Hy(n.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC")),qt(Ac,"3.4.5",t),qt(Ac,"3.4.5","esm2017")})();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function vl(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function sd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cw=sd,rd=new Qi("auth","Firebase",sd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=new ga("@firebase/auth");function Hs(t,...e){ru.logLevel<=se.ERROR&&ru.error(`Auth (${es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,...e){throw wl(t,...e)}function dt(t,...e){return wl(t,...e)}function Aw(t,e,n){const i=Object.assign(Object.assign({},Cw()),{[e]:n});return new Qi("auth","Firebase",i).create(e,{appName:t.name})}function wl(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return rd.create(t,...e)}function B(t,e,...n){if(!t)throw wl(e,...n)}function Tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hs(e),new Error(e)}function Dt(t,e){t||Tt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=new Map;function St(t){Dt(t instanceof Function,"Expected a class definition");let e=ou.get(t);return e?(Dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ou.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t,e){const n=_a(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Qs(r,e!=null?e:{}))return s;ot(s,"already-initialized")}return n.initialize({options:e})}function Ow(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(St);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dw(){return au()==="http:"||au()==="https:"}function au(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dw()||Wu()||"connection"in navigator)?navigator.onLine:!0}function Lw(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dt(n>e,"Short delay should be less than long delay!"),this.isMobile=Hu()||Ku()}get(){return Rw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t,e){Dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=new ps(3e4,6e4);function fi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nn(t,e,n,i,s={}){return ad(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Zi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),od.fetch()(ld(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function ad(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Pw),e);try{const s=new Uw(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw To(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw To(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw To(t,"email-already-in-use",o);const h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Aw(t,h,c);ot(t,h)}}catch(s){if(s instanceof Tn)throw s;ot(t,"network-request-failed")}}async function ys(t,e,n,i,s={}){const r=await Nn(t,e,n,i,s);return"mfaPendingCredential"in r&&ot(t,"multi-factor-auth-required",{_serverResponse:r}),r}function ld(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Il(t.config,s):`${t.config.apiScheme}://${s}`}class Uw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(dt(this.auth,"network-request-failed")),Mw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function To(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=dt(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vw(t,e){return Nn(t,"POST","/v1/accounts:delete",e)}async function Fw(t,e){return Nn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t,e=!1){return Ae(t).getIdToken(e)}async function Bw(t,e=!1){const n=Ae(t),i=await n.getIdToken(e),s=El(i);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Li(So(s.auth_time)),issuedAtTime:Li(So(s.iat)),expirationTime:Li(So(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function So(t){return Number(t)*1e3}function El(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Hs("JWT malformed, contained fewer than 3 sections"),null;try{const s=pm(n);return s?JSON.parse(s):(Hs("Failed to decode base64 JWT payload"),null)}catch(s){return Hs("Caught error parsing JWT payload as JSON",s),null}}function jw(t){const e=El(t);return B(e,"internal-error"),B(typeof e.exp!="undefined","internal-error"),B(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Tn&&xw(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function xw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Li(this.lastLoginAt),this.creationTime=Li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t){var e;const n=t.auth,i=await t.getIdToken(),s=await ni(t,Fw(n,{idToken:i}));B(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?Kw(r.providerUserInfo):[],a=Ww(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a==null?void 0:a.length),h=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new cd(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function Hw(t){const e=Ae(t);await pr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ww(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Kw(t){return t.map(e=>{var{providerId:n}=e,i=vl(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(t,e){const n=await ad(t,{},async()=>{const i=Zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=ld(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",od.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken!="undefined","internal-error"),B(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):jw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Gw(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Ji;return i&&(B(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(B(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ji,this.toJSON())}_performRefresh(){return Tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){B(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class un{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=vl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new cd(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ni(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Bw(this,e)}reload(){return Hw(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await pr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ni(this,Vw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,h;const u=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,F=(c=n.createdAt)!==null&&c!==void 0?c:void 0,N=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:A,emailVerified:p,isAnonymous:k,providerData:v,stsTokenManager:J}=n;B(A&&J,e,"internal-error");const M=Ji.fromJSON(this.name,J);B(typeof A=="string",e,"internal-error"),Vt(u,e.name),Vt(f,e.name),B(typeof p=="boolean",e,"internal-error"),B(typeof k=="boolean",e,"internal-error"),Vt(g,e.name),Vt(m,e.name),Vt(_,e.name),Vt(O,e.name),Vt(F,e.name),Vt(N,e.name);const q=new un({uid:A,auth:e,email:f,emailVerified:p,displayName:u,isAnonymous:k,photoURL:m,phoneNumber:g,tenantId:_,stsTokenManager:M,createdAt:F,lastLoginAt:N});return v&&Array.isArray(v)&&(q.providerData=v.map(R=>Object.assign({},R))),O&&(q._redirectEventId=O),q}static async _fromIdTokenResponse(e,n,i=!1){const s=new Ji;s.updateFromServerResponse(n);const r=new un({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await pr(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ud.type="NONE";const lu=ud;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t,e,n){return`firebase:${t}:${e}:${n}`}class Wn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ws(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ws("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Wn(St(lu),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||St(lu);const o=Ws(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const u=un._fromJSON(e,h);c!==r&&(a=u),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Wn(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Wn(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(md(e))return"Blackberry";if(pd(e))return"Webos";if(bl(e))return"Safari";if((e.includes("chrome/")||fd(e))&&!e.includes("edge/"))return"Chrome";if(gd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function hd(t=Ce()){return/firefox\//i.test(t)}function bl(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fd(t=Ce()){return/crios\//i.test(t)}function dd(t=Ce()){return/iemobile/i.test(t)}function gd(t=Ce()){return/android/i.test(t)}function md(t=Ce()){return/blackberry/i.test(t)}function pd(t=Ce()){return/webos/i.test(t)}function Zr(t=Ce()){return/iphone|ipad|ipod/i.test(t)}function zw(t=Ce()){var e;return Zr(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function Jw(){return Gu()&&document.documentMode===10}function yd(t=Ce()){return Zr(t)||gd(t)||pd(t)||md(t)||/windows phone/i.test(t)||dd(t)}function Xw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t,e=[]){let n;switch(t){case"Browser":n=cu(Ce());break;case"Worker":n=`${cu(Ce())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uu(this),this.idTokenSubscription=new uu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=St(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Wn.create(this,e),!this._deleted)){if((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===r)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ae(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&St(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Wn.create(this,[St(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_d(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function $r(t){return Ae(t)}class uu{constructor(e){this.auth=e,this.observer=null,this.addObserver=km(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tt("not implemented")}_getIdTokenResponse(e){return Tt("not implemented")}_linkToIdToken(e,n){return Tt("not implemented")}_getReauthenticationResolver(e){return Tt("not implemented")}}async function Qw(t,e){return Nn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(t,e){return ys(t,"POST","/v1/accounts:signInWithPassword",fi(t,e))}async function vd(t,e){return Nn(t,"POST","/v1/accounts:sendOobCode",fi(t,e))}async function $w(t,e){return vd(t,e)}async function e0(t,e){return vd(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(t,e){return ys(t,"POST","/v1/accounts:signInWithEmailLink",fi(t,e))}async function n0(t,e){return ys(t,"POST","/v1/accounts:signInWithEmailLink",fi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends Tl{constructor(e,n,i,s=null){super("password",i);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Xi(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Xi(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Zw(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return t0(e,{email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Qw(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return n0(e,{idToken:n,email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(t,e){return ys(t,"POST","/v1/accounts:signInWithIdp",fi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="http://localhost";class In extends Tl{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new In(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=vl(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new In(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Kn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kn(e,n)}buildRequest(){const e={requestUri:i0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function r0(t){const e=Ti(Si(t)).link,n=e?Ti(Si(e)).deep_link_id:null,i=Ti(Si(t)).deep_link_id;return(i?Ti(Si(i)).link:null)||i||n||e||t}class Sl{constructor(e){var n,i,s,r,o,a;const l=Ti(Si(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(i=l.oobCode)!==null&&i!==void 0?i:null,u=s0((s=l.mode)!==null&&s!==void 0?s:null);B(c&&h&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=r0(e);try{return new Sl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.providerId=di.PROVIDER_ID}static credential(e,n){return Xi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Sl.parseLink(n);return B(i,"argument-error"),Xi._fromEmailAndCode(e,i.code,i.tenantId)}}di.PROVIDER_ID="password";di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends wd{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends _s{constructor(){super("facebook.com")}static credential(e){return In._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends _s{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return In._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Bt.credential(n,i)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends _s{constructor(){super("github.com")}static credential(e){return In._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends _s{constructor(){super("twitter.com")}static credential(e,n){return In._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return xt.credential(n,i)}catch{return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com";xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(t,e){return ys(t,"POST","/v1/accounts:signUp",fi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await un._fromIdTokenResponse(e,i,s),o=hu(i);return new En({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=hu(i);return new En({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function hu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Tn{constructor(e,n,i,s){var r;super(n.code,n.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,yr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new yr(e,n,i,s)}}function Id(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?yr._fromErrorAndOperation(t,r,e,i):r})}async function a0(t,e,n=!1){const i=await ni(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return En._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await ni(t,Id(i,s,e,t),n);B(r.idToken,i,"internal-error");const o=El(r.idToken);B(o,i,"internal-error");const{sub:a}=o;return B(t.uid===a,i,"user-mismatch"),En._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ot(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ed(t,e,n=!1){const i="signIn",s=await Id(t,i,e),r=await En._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function c0(t,e){return Ed($r(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t,e,n){var i;B(((i=n.url)===null||i===void 0?void 0:i.length)>0,t,"invalid-continue-uri"),B(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(B(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(B(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(t,e,n){const i=Ae(t),s={requestType:"PASSWORD_RESET",email:e};n&&bd(i,s,n),await e0(i,s)}async function YI(t,e,n){const i=$r(t),s=await o0(i,{returnSecureToken:!0,email:e,password:n}),r=await En._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function QI(t,e,n){return c0(Ae(t),di.credential(e,n))}async function ZI(t,e){const n=Ae(t),i=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};e&&bd(n.auth,s,e);const{email:r}=await $w(n.auth,s);r!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(t,e){return Nn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Ae(t),r={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ni(i,u0(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t,e){return Ae(t).setPersistence(e)}const _r="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_r,"1"),this.storage.removeItem(_r),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(){const t=Ce();return bl(t)||Zr(t)}const f0=1e3,d0=10;class Sd extends Td{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=h0()&&Xw(),this.fallbackToPolling=yd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Jw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,d0):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},f0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sd.type="LOCAL";const g0=Sd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends Td{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kd.type="SESSION";const Cd=kd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new eo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await m0(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=kl("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(u){const f=u;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return window}function y0(t){gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(){return typeof gt().WorkerGlobalScope!="undefined"&&typeof gt().importScripts=="function"}async function _0(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function w0(){return Ad()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="firebaseLocalStorageDb",I0=1,vr="firebaseLocalStorage",Od="fbase_key";class vs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function to(t,e){return t.transaction([vr],e?"readwrite":"readonly").objectStore(vr)}function E0(){const t=indexedDB.deleteDatabase(Nd);return new vs(t).toPromise()}function oa(){const t=indexedDB.open(Nd,I0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(vr,{keyPath:Od})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(vr)?e(i):(i.close(),await E0(),e(await oa()))})})}async function fu(t,e,n){const i=to(t,!0).put({[Od]:e,value:n});return new vs(i).toPromise()}async function b0(t,e){const n=to(t,!1).get(e),i=await new vs(n).toPromise();return i===void 0?null:i.value}function du(t,e){const n=to(t,!0).delete(e);return new vs(n).toPromise()}const T0=800,S0=3;class Dd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>S0)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ad()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eo._getInstance(w0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _0(),!this.activeServiceWorker)return;this.sender=new p0(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oa();return await fu(e,_r,"1"),await du(e,_r),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>fu(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>b0(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>du(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=to(s,!1).getAll();return new vs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),T0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dd.type="LOCAL";const k0=Dd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function A0(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=dt("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",C0().appendChild(i)})}function N0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ps(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t,e){return e?St(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends Tl{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Kn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function D0(t){return Ed(t.auth,new Cl(t),t.bypassAuthState)}function R0(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),l0(n,new Cl(t),t.bypassAuthState)}async function L0(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),a0(n,new Cl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return D0;case"linkViaPopup":case"linkViaRedirect":return L0;case"reauthViaPopup":case"reauthViaRedirect":return R0;default:ot(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=new ps(2e3,1e4);class jn extends Rd{constructor(e,n,i,s,r){super(e,n,s,r);this.provider=i,this.authWindow=null,this.pollId=null,jn.currentPopupAction&&jn.currentPopupAction.cancel(),jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=kl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,P0.get())};e()}}jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="pendingRedirect",ko=new Map;class U0 extends Rd{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=ko.get(this.auth._key());if(!e){try{const i=await V0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ko.set(this.auth._key(),e)}return this.bypassAuthState||ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function V0(t,e){const n=B0(e),i=F0(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function F0(t){return St(t._redirectPersistence)}function B0(t){return Ws(M0,t.config.apiKey,t.name)}async function j0(t,e,n=!1){const i=$r(t),s=O0(i,e),o=await new U0(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=10*60*1e3;class q0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Ld(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=x0&&this.cachedEventUids.clear(),this.cachedEventUids.has(gu(e))}saveEventToCache(e){this.cachedEventUids.add(gu(e)),this.lastProcessedEventTime=Date.now()}}function gu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ld({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ld(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W0(t,e={}){return Nn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,G0=/^https?/;async function z0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await W0(t);for(const n of e)try{if(J0(n))return}catch{}ot(t,"unauthorized-domain")}function J0(t){const e=ra(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!G0.test(n))return!1;if(K0.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=new ps(3e4,6e4);function mu(){const t=gt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Y0(t){return new Promise((e,n)=>{var i,s,r;function o(){mu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mu(),n(dt(t,"network-request-failed"))},timeout:X0.get()})}if((s=(i=gt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((r=gt().gapi)===null||r===void 0?void 0:r.load)o();else{const a=N0("iframefcb");return gt()[a]=()=>{gapi.load?o():n(dt(t,"network-request-failed"))},A0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ks=null,e})}let Ks=null;function Q0(t){return Ks=Ks||Y0(t),Ks}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=new ps(5e3,15e3),$0="__/auth/iframe",eI="emulator/auth/iframe",tI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iI(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Il(e,eI):`https://${t.config.authDomain}/${$0}`,i={apiKey:e.apiKey,appName:t.name,v:es},s=nI.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Zi(i).slice(1)}`}async function sI(t){const e=await Q0(t),n=gt().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:iI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tI,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=dt(t,"network-request-failed"),a=gt().setTimeout(()=>{r(o)},Z0.get());function l(){gt().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oI=500,aI=600,lI="_blank",cI="http://localhost";class pu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uI(t,e,n,i=oI,s=aI){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},rI),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Ce().toLowerCase();n&&(a=fd(c)?lI:n),hd(c)&&(e=e||cI,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(zw(c)&&a!=="_self")return hI(e||"",a),new pu(null);const u=window.open(e||"",a,h);B(u,t,"popup-blocked");try{u.focus()}catch{}return new pu(u)}function hI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="__/auth/handler",dI="emulator/auth/handler";function yu(t,e,n,i,s,r){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:es,eventId:s};if(e instanceof wd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof _s){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${gI(t)}?${Zi(a).slice(1)}`}function gI({config:t}){return t.emulator?Il(t,dI):`https://${t.authDomain}/${fI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co="webStorageSupport";class mI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cd,this._completeRedirectFn=j0}async _openPopup(e,n,i,s){var r;Dt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=yu(e,n,i,ra(),s);return uI(e,o,kl())}async _openRedirect(e,n,i,s){return await this._originValidation(e),y0(yu(e,n,i,ra(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Dt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await sI(e),i=new q0(e);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Co,{type:Co},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Co];o!==void 0&&n(!!o),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=z0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yd()||bl()||Zr()}}const pI=mI;var _u="@firebase/auth",vu="0.19.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vI(t){zn(new dn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(o=>{B(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),B(!(r==null?void 0:r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_d(t)},l=new Yw(o,a);return Ow(l,n),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),zn(new dn("auth-internal",e=>{const n=$r(e.getProvider("auth").getImmediate());return(i=>new yI(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(_u,vu,_I(t)),qt(_u,vu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t=Yu()){const e=_a(t,"auth");return e.isInitialized()?e.getImmediate():Nw(t,{popupRedirectResolver:pI,persistence:[k0,g0,Cd]})}vI("Browser");function wI(t,{delay:e=0,duration:n=400,easing:i=Eu}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:r=>`opacity: ${r*s}`}}const{window:II}=Lg;function wu(t){let e,n,i,s,r,o,a,l,c,h,u,f,g,m,_,O,F,N=t[1].closeButton&&Iu(t);var A=t[2];function p(k){return{}}return A&&(o=new A(p())),{c(){e=ie("div"),n=ie("div"),i=ie("div"),N&&N.c(),s=Re(),r=ie("div"),o&&be(o.$$.fragment),this.h()},l(k){e=ae(k,"DIV",{class:!0,style:!0});var v=$(e);n=ae(v,"DIV",{class:!0,style:!0});var J=$(n);i=ae(J,"DIV",{class:!0,role:!0,"aria-modal":!0,"aria-label":!0,"aria-labelledby":!0,style:!0});var M=$(i);N&&N.l(M),s=Le(M),r=ae(M,"DIV",{class:!0,style:!0});var q=$(r);o&&yt(o.$$.fragment,q),q.forEach(C),M.forEach(C),J.forEach(C),v.forEach(C),this.h()},h(){w(r,"class",a=ft(t[1].classContent)+" svelte-g4wg3a"),w(r,"style",t[9]),me(r,"content",!t[0]),w(i,"class",l=ft(t[1].classWindow)+" svelte-g4wg3a"),w(i,"role","dialog"),w(i,"aria-modal","true"),w(i,"aria-label",c=t[1].ariaLabelledBy?null:t[1].ariaLabel||null),w(i,"aria-labelledby",h=t[1].ariaLabelledBy||null),w(i,"style",t[8]),me(i,"window",!t[0]),w(n,"class",f=ft(t[1].classWindowWrap)+" svelte-g4wg3a"),w(n,"style",t[7]),me(n,"wrap",!t[0]),w(e,"class",g=ft(t[1].classBg)+" svelte-g4wg3a"),w(e,"style",t[6]),me(e,"bg",!t[0])},m(k,v){X(k,e,v),ne(e,n),ne(n,i),N&&N.m(i,null),ne(i,s),ne(i,r),o&&ve(o,r,null),t[48](i),t[49](n),t[50](e),_=!0,O||(F=[oe(i,"introstart",function(){Vn(t[13])&&t[13].apply(this,arguments)}),oe(i,"outrostart",function(){Vn(t[14])&&t[14].apply(this,arguments)}),oe(i,"introend",function(){Vn(t[15])&&t[15].apply(this,arguments)}),oe(i,"outroend",function(){Vn(t[16])&&t[16].apply(this,arguments)}),oe(e,"mousedown",t[20]),oe(e,"mouseup",t[21])],O=!0)},p(k,v){if(t=k,t[1].closeButton?N?(N.p(t,v),v[0]&2&&P(N,1)):(N=Iu(t),N.c(),P(N,1),N.m(i,s)):N&&(pe(),x(N,1,1,()=>{N=null}),ye()),A!==(A=t[2])){if(o){pe();const J=o;x(J.$$.fragment,1,0,()=>{we(J,1)}),ye()}A?(o=new A(p()),be(o.$$.fragment),P(o.$$.fragment,1),ve(o,r,null)):o=null}(!_||v[0]&2&&a!==(a=ft(t[1].classContent)+" svelte-g4wg3a"))&&w(r,"class",a),(!_||v[0]&512)&&w(r,"style",t[9]),v[0]&3&&me(r,"content",!t[0]),(!_||v[0]&2&&l!==(l=ft(t[1].classWindow)+" svelte-g4wg3a"))&&w(i,"class",l),(!_||v[0]&2&&c!==(c=t[1].ariaLabelledBy?null:t[1].ariaLabel||null))&&w(i,"aria-label",c),(!_||v[0]&2&&h!==(h=t[1].ariaLabelledBy||null))&&w(i,"aria-labelledby",h),(!_||v[0]&256)&&w(i,"style",t[8]),v[0]&3&&me(i,"window",!t[0]),(!_||v[0]&2&&f!==(f=ft(t[1].classWindowWrap)+" svelte-g4wg3a"))&&w(n,"class",f),(!_||v[0]&128)&&w(n,"style",t[7]),v[0]&3&&me(n,"wrap",!t[0]),(!_||v[0]&2&&g!==(g=ft(t[1].classBg)+" svelte-g4wg3a"))&&w(e,"class",g),(!_||v[0]&64)&&w(e,"style",t[6]),v[0]&3&&me(e,"bg",!t[0])},i(k){_||(P(N),o&&P(o.$$.fragment,k),hn(()=>{u||(u=Ns(i,t[12],t[1].transitionWindowProps,!0)),u.run(1)}),hn(()=>{m||(m=Ns(e,t[11],t[1].transitionBgProps,!0)),m.run(1)}),_=!0)},o(k){x(N),o&&x(o.$$.fragment,k),u||(u=Ns(i,t[12],t[1].transitionWindowProps,!1)),u.run(0),m||(m=Ns(e,t[11],t[1].transitionBgProps,!1)),m.run(0),_=!1},d(k){k&&C(e),N&&N.d(),o&&we(o),t[48](null),k&&u&&u.end(),t[49](null),t[50](null),k&&m&&m.end(),O=!1,at(F)}}}function Iu(t){let e,n,i,s,r;const o=[bI,EI],a=[];function l(c,h){return h[0]&2&&(e=null),e==null&&(e=!!c[17](c[1].closeButton)),e?0:1}return n=l(t,[-1,-1,-1]),i=a[n]=o[n](t),{c(){i.c(),s=de()},l(c){i.l(c),s=de()},m(c,h){a[n].m(c,h),X(c,s,h),r=!0},p(c,h){let u=n;n=l(c,h),n===u?a[n].p(c,h):(pe(),x(a[u],1,1,()=>{a[u]=null}),ye(),i=a[n],i?i.p(c,h):(i=a[n]=o[n](c),i.c()),P(i,1),i.m(s.parentNode,s))},i(c){r||(P(i),r=!0)},o(c){x(i),r=!1},d(c){a[n].d(c),c&&C(s)}}}function EI(t){let e,n,i,s;return{c(){e=ie("button"),this.h()},l(r){e=ae(r,"BUTTON",{class:!0,"aria-label":!0,style:!0}),$(e).forEach(C),this.h()},h(){w(e,"class",n=ft(t[1].classCloseButton)+" svelte-g4wg3a"),w(e,"aria-label","Close modal"),w(e,"style",t[10]),me(e,"close",!t[0])},m(r,o){X(r,e,o),i||(s=oe(e,"click",t[18]),i=!0)},p(r,o){o[0]&2&&n!==(n=ft(r[1].classCloseButton)+" svelte-g4wg3a")&&w(e,"class",n),o[0]&1024&&w(e,"style",r[10]),o[0]&3&&me(e,"close",!r[0])},i:_e,o:_e,d(r){r&&C(e),i=!1,s()}}}function bI(t){let e,n,i;var s=t[1].closeButton;function r(o){return{props:{onClose:o[18]}}}return s&&(e=new s(r(t))),{c(){e&&be(e.$$.fragment),n=de()},l(o){e&&yt(e.$$.fragment,o),n=de()},m(o,a){e&&ve(e,o,a),X(o,n,a),i=!0},p(o,a){if(s!==(s=o[1].closeButton)){if(e){pe();const l=e;x(l.$$.fragment,1,0,()=>{we(l,1)}),ye()}s?(e=new s(r(o)),be(e.$$.fragment),P(e.$$.fragment,1),ve(e,n.parentNode,n)):e=null}},i(o){i||(e&&P(e.$$.fragment,o),i=!0)},o(o){e&&x(e.$$.fragment,o),i=!1},d(o){o&&C(n),e&&we(e,o)}}}function TI(t){let e,n,i,s,r=t[2]&&wu(t);const o=t[47].default,a=aa(o,t,t[46],null);return{c(){r&&r.c(),e=Re(),a&&a.c()},l(l){r&&r.l(l),e=Le(l),a&&a.l(l)},m(l,c){r&&r.m(l,c),X(l,e,c),a&&a.m(l,c),n=!0,i||(s=oe(II,"keydown",t[19]),i=!0)},p(l,c){l[2]?r?(r.p(l,c),c[0]&4&&P(r,1)):(r=wu(l),r.c(),P(r,1),r.m(e.parentNode,e)):r&&(pe(),x(r,1,1,()=>{r=null}),ye()),a&&a.p&&(!n||c[1]&32768)&&ca(a,o,l,l[46],n?la(o,l[46],c,null):ua(l[46]),null)},i(l){n||(P(r),P(a,l),n=!0)},o(l){x(r),x(a,l),n=!1},d(l){r&&r.d(l),l&&C(e),a&&a.d(l),i=!1,s()}}}function SI(t,e={}){return function(i){return new t(Ll(rn({},i),{props:rn(rn({},e),i.props)}))}}function kI(t,e,n){let{$$slots:i={},$$scope:s}=e;const r=Yi(),o=Ag;let{show:a=null}=e,{key:l="simple-modal"}=e,{ariaLabel:c=null}=e,{ariaLabelledBy:h=null}=e,{closeButton:u=!0}=e,{closeOnEsc:f=!0}=e,{closeOnOuterClick:g=!0}=e,{styleBg:m={}}=e,{styleWindowWrap:_={}}=e,{styleWindow:O={}}=e,{styleContent:F={}}=e,{styleCloseButton:N={}}=e,{classBg:A=null}=e,{classWindowWrap:p=null}=e,{classWindow:k=null}=e,{classContent:v=null}=e,{classCloseButton:J=null}=e,{unstyled:M=!1}=e,{setContext:q=o}=e,{transitionBg:R=wI}=e,{transitionBgProps:ee={duration:250}}=e,{transitionWindow:H=R}=e,{transitionWindowProps:Y=ee}=e,{disableFocusTrap:Q=!1}=e;const I={ariaLabel:c,ariaLabelledBy:h,closeButton:u,closeOnEsc:f,closeOnOuterClick:g,styleBg:m,styleWindowWrap:_,styleWindow:O,styleContent:F,styleCloseButton:N,classBg:A,classWindowWrap:p,classWindow:k,classContent:v,classCloseButton:J,transitionBg:R,transitionBgProps:ee,transitionWindow:H,transitionWindowProps:Y,disableFocusTrap:Q,unstyled:M};let T=rn({},I),ge=null,De,Ye,Qe,vt,lt,On,wt,$t,Pt,ct,E,K,je,Mt,Dn;const gi=y=>y.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase(),ut=y=>y?Object.keys(y).reduce((it,Ze)=>`${it}; ${gi(Ze)}: ${y[Ze]}`,""):"",Rn=y=>!!(y&&y.constructor&&y.call&&y.apply),mi=()=>{n(6,lt=ut(Object.assign({},{width:window.innerWidth,height:window.innerHeight},T.styleBg))),n(7,On=ut(T.styleWindowWrap)),n(8,wt=ut(T.styleWindow)),n(9,$t=ut(T.styleContent)),n(10,Pt=ut(T.styleCloseButton)),n(11,ct=T.transitionBg),n(12,E=T.transitionWindow)},en=()=>{};let pi=en,tn=en,yi=en,nn=en;const _i=(y,it={},Ze={},Se={})=>{n(2,ge=SI(y,it)),n(1,T=rn(rn({},I),Ze)),mi(),Es(),n(13,pi=$e=>{Se.onOpen&&Se.onOpen($e),r("open"),r("opening")}),n(14,tn=$e=>{Se.onClose&&Se.onClose($e),r("close"),r("closing")}),n(15,yi=$e=>{Se.onOpened&&Se.onOpened($e),r("opened")}),n(16,nn=$e=>{Se.onClosed&&Se.onClosed($e),r("closed")})},ht=(y={})=>{!ge||(n(14,tn=y.onClose||tn),n(16,nn=y.onClosed||nn),n(2,ge=null),bs())},ws=y=>{if(T.closeOnEsc&&ge&&y.key==="Escape"&&(y.preventDefault(),ht()),ge&&y.key==="Tab"&&!T.disableFocusTrap){const it=Qe.querySelectorAll("*"),Ze=Array.from(it).filter($e=>$e.tabIndex>=0);let Se=Ze.indexOf(document.activeElement);Se===-1&&y.shiftKey&&(Se=0),Se+=Ze.length+(y.shiftKey?-1:1),Se%=Ze.length,Ze[Se].focus(),y.preventDefault()}},vi=y=>{T.closeOnOuterClick&&(y.target===De||y.target===Ye)&&(Dn=y.target)},Is=y=>{T.closeOnOuterClick&&y.target===Dn&&(y.preventDefault(),ht())},Es=()=>{vt=window.scrollY,K=document.body.style.position,je=document.body.style.overflow,Mt=document.body.style.width,document.body.style.position="fixed",document.body.style.top=`-${vt}px`,document.body.style.overflow="hidden",document.body.style.width="100%"},bs=()=>{document.body.style.position=K||"",document.body.style.top="",document.body.style.overflow=je||"",document.body.style.width=Mt||"",window.scrollTo(0,vt)};q(l,{open:_i,close:ht});let Ut=!1;Pu(()=>{Ut&&ht()}),Er(()=>{n(45,Ut=!0)});function no(y){rt[y?"unshift":"push"](()=>{Qe=y,n(5,Qe)})}function Ts(y){rt[y?"unshift":"push"](()=>{Ye=y,n(4,Ye)})}function wi(y){rt[y?"unshift":"push"](()=>{De=y,n(3,De)})}return t.$$set=y=>{"show"in y&&n(22,a=y.show),"key"in y&&n(23,l=y.key),"ariaLabel"in y&&n(24,c=y.ariaLabel),"ariaLabelledBy"in y&&n(25,h=y.ariaLabelledBy),"closeButton"in y&&n(26,u=y.closeButton),"closeOnEsc"in y&&n(27,f=y.closeOnEsc),"closeOnOuterClick"in y&&n(28,g=y.closeOnOuterClick),"styleBg"in y&&n(29,m=y.styleBg),"styleWindowWrap"in y&&n(30,_=y.styleWindowWrap),"styleWindow"in y&&n(31,O=y.styleWindow),"styleContent"in y&&n(32,F=y.styleContent),"styleCloseButton"in y&&n(33,N=y.styleCloseButton),"classBg"in y&&n(34,A=y.classBg),"classWindowWrap"in y&&n(35,p=y.classWindowWrap),"classWindow"in y&&n(36,k=y.classWindow),"classContent"in y&&n(37,v=y.classContent),"classCloseButton"in y&&n(38,J=y.classCloseButton),"unstyled"in y&&n(0,M=y.unstyled),"setContext"in y&&n(39,q=y.setContext),"transitionBg"in y&&n(40,R=y.transitionBg),"transitionBgProps"in y&&n(41,ee=y.transitionBgProps),"transitionWindow"in y&&n(42,H=y.transitionWindow),"transitionWindowProps"in y&&n(43,Y=y.transitionWindowProps),"disableFocusTrap"in y&&n(44,Q=y.disableFocusTrap),"$$scope"in y&&n(46,s=y.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&4194304|t.$$.dirty[1]&16384&&Ut&&(Rn(a)?_i(a):ht())},[M,T,ge,De,Ye,Qe,lt,On,wt,$t,Pt,ct,E,pi,tn,yi,nn,Rn,ht,ws,vi,Is,a,l,c,h,u,f,g,m,_,O,F,N,A,p,k,v,J,q,R,ee,H,Y,Q,Ut,s,i,no,Ts,wi]}class n1 extends Lt{constructor(e){super();Rt(this,e,kI,TI,pt,{show:22,key:23,ariaLabel:24,ariaLabelledBy:25,closeButton:26,closeOnEsc:27,closeOnOuterClick:28,styleBg:29,styleWindowWrap:30,styleWindow:31,styleContent:32,styleCloseButton:33,classBg:34,classWindowWrap:35,classWindow:36,classContent:37,classCloseButton:38,unstyled:0,setContext:39,transitionBg:40,transitionBgProps:41,transitionWindow:42,transitionWindowProps:43,disableFocusTrap:44},null,[-1,-1,-1])}}export{n1 as $,Fu as A,we as B,wr as C,UI as D,Us as E,ne as F,_e as G,oe as H,fa as I,aa as J,LI as K,ca as L,ua as M,la as N,NI as O,MI as P,VI as Q,FI as R,Lt as S,Vl as T,at as U,XI as V,BI as W,t1 as X,qI as Y,e1 as Z,lu as _,$ as a,me as a0,vg as a1,KI as a2,tt as a3,xI as a4,jI as a5,hn as a6,Ns as a7,wI as a8,Yi as a9,Vn as aa,HI as ab,GI as ac,SI as ad,rt as ae,DI as af,OI as ag,YI as ah,$I as ai,ZI as aj,JI as ak,RI as al,QI as am,WI as an,AI as ao,zI as ap,w as b,ae as c,C as d,ie as e,Pn as f,X as g,Gn as h,Rt as i,Gs as j,Re as k,de as l,Le as m,pe as n,x as o,ye as p,P as q,Ag as r,pt as s,Kt as t,PI as u,Er as v,be as w,yt as x,ve as y,da as z};
