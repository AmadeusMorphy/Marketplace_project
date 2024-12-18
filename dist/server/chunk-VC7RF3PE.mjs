import './polyfills.server.mjs';
import{d as me,l as ge,w as Te,z as we}from"./chunk-NONDWBOB.mjs";import{A as oe,G as ie,I as ae,J as $,M as D,P as R,R as N,S as m,V as ce,Y as le,Z as de,c as V,ga as he,hb as pe,i as re,ia as ue,ib as ye,j as _,n as k,pa as G,sa as W,u as te,ua as fe,w as se}from"./chunk-26VAK23Y.mjs";import{a as J,d as ne,i as C}from"./chunk-AFOT676I.mjs";var L=class{},j=class{},E=class r{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(n=>{let t=n.indexOf(":");if(t>0){let s=n.slice(0,t),i=n.slice(t+1).trim();this.addHeaderEntry(s,i)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((n,t)=>{this.addHeaderEntry(t,n)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([n,t])=>{this.setHeaderEntries(n,t)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let n=this.headers.get(e.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,n){return this.clone({name:e,value:n,op:"a"})}set(e,n){return this.clone({name:e,value:n,op:"s"})}delete(e,n){return this.clone({name:e,value:n,op:"d"})}maybeSetNormalizedName(e,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,e)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(n=>{this.headers.set(n,e.headers.get(n)),this.normalizedNames.set(n,e.normalizedNames.get(n))})}clone(e){let n=new r;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([e]),n}applyUpdate(e){let n=e.name.toLowerCase();switch(e.op){case"a":case"s":let t=e.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(e.name,n);let s=(e.op==="a"?this.headers.get(n):void 0)||[];s.push(...t),this.headers.set(n,s);break;case"d":let i=e.value;if(!i)this.headers.delete(n),this.normalizedNames.delete(n);else{let o=this.headers.get(n);if(!o)return;o=o.filter(c=>i.indexOf(c)===-1),o.length===0?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,o)}break}}addHeaderEntry(e,n){let t=e.toLowerCase();this.maybeSetNormalizedName(e,t),this.headers.has(t)?this.headers.get(t).push(n):this.headers.set(t,[n])}setHeaderEntries(e,n){let t=(Array.isArray(n)?n:[n]).map(i=>i.toString()),s=e.toLowerCase();this.headers.set(s,t),this.maybeSetNormalizedName(e,s)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>e(this.normalizedNames.get(n),this.headers.get(n)))}};var q=class{encodeKey(e){return Ee(e)}encodeValue(e){return Ee(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function ze(r,e){let n=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(s=>{let i=s.indexOf("="),[o,c]=i==-1?[e.decodeKey(s),""]:[e.decodeKey(s.slice(0,i)),e.decodeValue(s.slice(i+1))],a=n.get(o)||[];a.push(c),n.set(o,a)}),n}var Se=/%(\d[a-f0-9])/gi,Xe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ee(r){return encodeURIComponent(r).replace(Se,(e,n)=>Xe[n]??e)}function B(r){return`${r}`}var O=class r{map;encoder;updates=null;cloneFrom=null;constructor(e={}){if(this.encoder=e.encoder||new q,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=ze(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(n=>{let t=e.fromObject[n],s=Array.isArray(t)?t.map(B):[B(t)];this.map.set(n,s)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let n=this.map.get(e);return n?n[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,n){return this.clone({param:e,value:n,op:"a"})}appendAll(e){let n=[];return Object.keys(e).forEach(t=>{let s=e[t];Array.isArray(s)?s.forEach(i=>{n.push({param:t,value:i,op:"a"})}):n.push({param:t,value:s,op:"a"})}),this.clone(n)}set(e,n){return this.clone({param:e,value:n,op:"s"})}delete(e,n){return this.clone({param:e,value:n,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let n=this.encoder.encodeKey(e);return this.map.get(e).map(t=>n+"="+this.encoder.encodeValue(t)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let n=new r({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(e),n}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let n=(e.op==="a"?this.map.get(e.param):void 0)||[];n.push(B(e.value)),this.map.set(e.param,n);break;case"d":if(e.value!==void 0){let t=this.map.get(e.param)||[],s=t.indexOf(B(e.value));s!==-1&&t.splice(s,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var Y=class{map=new Map;set(e,n){return this.map.set(e,n),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Je(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ve(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function be(r){return typeof Blob<"u"&&r instanceof Blob}function Re(r){return typeof FormData<"u"&&r instanceof FormData}function Ce(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}var F=class r{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(e,n,t,s){this.url=n,this.method=e.toUpperCase();let i;if(Je(this.method)||s?(this.body=t!==void 0?t:null,i=s):i=t,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new E,this.context??=new Y,!this.params)this.params=new O,this.urlWithParams=n;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=n;else{let c=n.indexOf("?"),a=c===-1?"?":c<n.length-1?"&":"";this.urlWithParams=n+a+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ve(this.body)||be(this.body)||Re(this.body)||Ce(this.body)?this.body:this.body instanceof O?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Re(this.body)?null:be(this.body)?this.body.type||null:ve(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof O?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let n=e.method||this.method,t=e.url||this.url,s=e.responseType||this.responseType,i=e.transferCache??this.transferCache,o=e.body!==void 0?e.body:this.body,c=e.withCredentials??this.withCredentials,a=e.reportProgress??this.reportProgress,f=e.headers||this.headers,p=e.params||this.params,y=e.context??this.context;return e.setHeaders!==void 0&&(f=Object.keys(e.setHeaders).reduce((T,h)=>T.set(h,e.setHeaders[h]),f)),e.setParams&&(p=Object.keys(e.setParams).reduce((T,h)=>T.set(h,e.setParams[h]),p)),new r(n,t,o,{params:p,headers:f,context:y,reportProgress:a,responseType:s,withCredentials:c,transferCache:i})}},I=function(r){return r[r.Sent=0]="Sent",r[r.UploadProgress=1]="UploadProgress",r[r.ResponseHeader=2]="ResponseHeader",r[r.DownloadProgress=3]="DownloadProgress",r[r.Response=4]="Response",r[r.User=5]="User",r}(I||{}),U=class{headers;status;statusText;url;ok;type;constructor(e,n=200,t="OK"){this.headers=e.headers||new E,this.status=e.status!==void 0?e.status:n,this.statusText=e.statusText||t,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},S=class r extends U{constructor(e={}){super(e)}type=I.ResponseHeader;clone(e={}){return new r({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},M=class r extends U{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=I.Response;clone(e={}){return new r({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},A=class extends U{name="HttpErrorResponse";message;error;ok=!1;constructor(e){super(e,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},Le=200,Ve=204;function K(r,e){return{body:e,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials,transferCache:r.transferCache}}var $e=(()=>{class r{handler;constructor(n){this.handler=n}request(n,t,s={}){let i;if(n instanceof F)i=n;else{let a;s.headers instanceof E?a=s.headers:a=new E(s.headers);let f;s.params&&(s.params instanceof O?f=s.params:f=new O({fromObject:s.params})),i=new F(n,t,s.body!==void 0?s.body:null,{headers:a,context:s.context,params:f,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let o=_(i).pipe(se(a=>this.handler.handle(a)));if(n instanceof F||s.observe==="events")return o;let c=o.pipe(te(a=>a instanceof M));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return c.pipe(k(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return c.pipe(k(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return c.pipe(k(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return c.pipe(k(a=>a.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(n,t={}){return this.request("DELETE",n,t)}get(n,t={}){return this.request("GET",n,t)}head(n,t={}){return this.request("HEAD",n,t)}jsonp(n,t){return this.request("JSONP",n,{params:new O().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,t={}){return this.request("OPTIONS",n,t)}patch(n,t,s={}){return this.request("PATCH",n,K(s,t))}post(n,t,s={}){return this.request("POST",n,K(s,t))}put(n,t,s={}){return this.request("PUT",n,K(s,t))}static \u0275fac=function(t){return new(t||r)(N(L))};static \u0275prov=D({token:r,factory:r.\u0275fac})}return r})(),Ge=/^\)\]\}',?\n/,We="X-Request-URL";function Pe(r){if(r.url)return r.url;let e=We.toLocaleLowerCase();return r.headers.get(e)}var Z=(()=>{class r{fetchImpl=m(Q,{optional:!0})?.fetch??((...n)=>globalThis.fetch(...n));ngZone=m(ue);handle(n){return new V(t=>{let s=new AbortController;return this.doRequest(n,s.signal,t).then(H,i=>t.error(new A({error:i}))),()=>s.abort()})}doRequest(n,t,s){return C(this,null,function*(){let i=this.createRequestInit(n),o;try{let h=this.ngZone.runOutsideAngular(()=>this.fetchImpl(n.urlWithParams,J({signal:t},i)));Ke(h),s.next({type:I.Sent}),o=yield h}catch(h){s.error(new A({error:h,status:h.status??0,statusText:h.statusText,url:n.urlWithParams,headers:h.headers}));return}let c=new E(o.headers),a=o.statusText,f=Pe(o)??n.urlWithParams,p=o.status,y=null;if(n.reportProgress&&s.next(new S({headers:c,status:p,statusText:a,url:f})),o.body){let h=o.headers.get("content-length"),g=[],l=o.body.getReader(),d=0,w,P,u=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>C(this,null,function*(){for(;;){let{done:b,value:x}=yield l.read();if(b)break;if(g.push(x),d+=x.length,n.reportProgress){P=n.responseType==="text"?(P??"")+(w??=new TextDecoder).decode(x,{stream:!0}):void 0;let ee=()=>s.next({type:I.DownloadProgress,total:h?+h:void 0,loaded:d,partialText:P});u?u.run(ee):ee()}}}));let v=this.concatChunks(g,d);try{let b=o.headers.get("Content-Type")??"";y=this.parseBody(n,v,b)}catch(b){s.error(new A({error:b,headers:new E(o.headers),status:o.status,statusText:o.statusText,url:Pe(o)??n.urlWithParams}));return}}p===0&&(p=y?Le:0),p>=200&&p<300?(s.next(new M({body:y,headers:c,status:p,statusText:a,url:f})),s.complete()):s.error(new A({error:y,headers:c,status:p,statusText:a,url:f}))})}parseBody(n,t,s){switch(n.responseType){case"json":let i=new TextDecoder().decode(t).replace(Ge,"");return i===""?null:JSON.parse(i);case"text":return new TextDecoder().decode(t);case"blob":return new Blob([t],{type:s});case"arraybuffer":return t.buffer}}createRequestInit(n){let t={},s=n.withCredentials?"include":void 0;if(n.headers.forEach((i,o)=>t[i]=o.join(",")),n.headers.has("Accept")||(t.Accept="application/json, text/plain, */*"),!n.headers.has("Content-Type")){let i=n.detectContentTypeHeader();i!==null&&(t["Content-Type"]=i)}return{body:n.serializeBody(),method:n.method,headers:t,credentials:s}}concatChunks(n,t){let s=new Uint8Array(t),i=0;for(let o of n)s.set(o,i),i+=o.length;return s}static \u0275fac=function(t){return new(t||r)};static \u0275prov=D({token:r,factory:r.\u0275fac})}return r})(),Q=class{};function H(){}function Ke(r){r.then(H,H)}function qe(r,e){return e(r)}function Ye(r,e,n){return(t,s)=>de(n,()=>e(t,i=>r(i,s)))}var je=new R(""),Ue=new R(""),Ze=new R("",{providedIn:"root",factory:()=>!0});var Ne=(()=>{class r extends L{backend;injector;chain=null;pendingTasks=m(he);contributeToStability=m(Ze);constructor(n,t){super(),this.backend=n,this.injector=t}handle(n){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(je),...this.injector.get(Ue,[])]));this.chain=t.reduceRight((s,i)=>Ye(s,i,this.injector),qe)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(n,s=>this.backend.handle(s)).pipe(oe(()=>this.pendingTasks.remove(t)))}else return this.chain(n,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||r)(N(j),N(le))};static \u0275prov=D({token:r,factory:r.\u0275fac})}return r})();var Qe=/^\)\]\}',?\n/;function He(r){return"responseURL"in r&&r.responseURL?r.responseURL:/^X-Request-URL:/m.test(r.getAllResponseHeaders())?r.getResponseHeader("X-Request-URL"):null}var Ae=(()=>{class r{xhrFactory;constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new $(-2800,!1);let t=this.xhrFactory;return(t.\u0275loadImpl?re(t.\u0275loadImpl()):_(null)).pipe(ie(()=>new V(i=>{let o=t.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((l,d)=>o.setRequestHeader(l,d.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){let l=n.detectContentTypeHeader();l!==null&&o.setRequestHeader("Content-Type",l)}if(n.responseType){let l=n.responseType.toLowerCase();o.responseType=l!=="json"?l:"text"}let c=n.serializeBody(),a=null,f=()=>{if(a!==null)return a;let l=o.statusText||"OK",d=new E(o.getAllResponseHeaders()),w=He(o)||n.url;return a=new S({headers:d,status:o.status,statusText:l,url:w}),a},p=()=>{let{headers:l,status:d,statusText:w,url:P}=f(),u=null;d!==Ve&&(u=typeof o.response>"u"?o.responseText:o.response),d===0&&(d=u?Le:0);let v=d>=200&&d<300;if(n.responseType==="json"&&typeof u=="string"){let b=u;u=u.replace(Qe,"");try{u=u!==""?JSON.parse(u):null}catch(x){u=b,v&&(v=!1,u={error:x,text:u})}}v?(i.next(new M({body:u,headers:l,status:d,statusText:w,url:P||void 0})),i.complete()):i.error(new A({error:u,headers:l,status:d,statusText:w,url:P||void 0}))},y=l=>{let{url:d}=f(),w=new A({error:l,status:o.status||0,statusText:o.statusText||"Unknown Error",url:d||void 0});i.error(w)},T=!1,h=l=>{T||(i.next(f()),T=!0);let d={type:I.DownloadProgress,loaded:l.loaded};l.lengthComputable&&(d.total=l.total),n.responseType==="text"&&o.responseText&&(d.partialText=o.responseText),i.next(d)},g=l=>{let d={type:I.UploadProgress,loaded:l.loaded};l.lengthComputable&&(d.total=l.total),i.next(d)};return o.addEventListener("load",p),o.addEventListener("error",y),o.addEventListener("timeout",y),o.addEventListener("abort",y),n.reportProgress&&(o.addEventListener("progress",h),c!==null&&o.upload&&o.upload.addEventListener("progress",g)),o.send(c),i.next({type:I.Sent}),()=>{o.removeEventListener("error",y),o.removeEventListener("abort",y),o.removeEventListener("load",p),o.removeEventListener("timeout",y),n.reportProgress&&(o.removeEventListener("progress",h),c!==null&&o.upload&&o.upload.removeEventListener("progress",g)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(t){return new(t||r)(N(we))};static \u0275prov=D({token:r,factory:r.\u0275fac})}return r})(),_e=new R(""),en="XSRF-TOKEN",nn=new R("",{providedIn:"root",factory:()=>en}),rn="X-XSRF-TOKEN",tn=new R("",{providedIn:"root",factory:()=>rn}),X=class{},sn=(()=>{class r{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(n,t,s){this.doc=n,this.platform=t,this.cookieName=s}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=ge(n,this.cookieName),this.lastCookieString=n),this.lastToken}static \u0275fac=function(t){return new(t||r)(N(me),N(G),N(nn))};static \u0275prov=D({token:r,factory:r.\u0275fac})}return r})();function on(r,e){let n=r.url.toLowerCase();if(!m(_e)||r.method==="GET"||r.method==="HEAD"||n.startsWith("http://")||n.startsWith("https://"))return e(r);let t=m(X).getToken(),s=m(tn);return t!=null&&!r.headers.has(s)&&(r=r.clone({headers:r.headers.set(s,t)})),e(r)}var Be=function(r){return r[r.Interceptors=0]="Interceptors",r[r.LegacyInterceptors=1]="LegacyInterceptors",r[r.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",r[r.NoXsrfProtection=3]="NoXsrfProtection",r[r.JsonpSupport=4]="JsonpSupport",r[r.RequestsMadeViaParent=5]="RequestsMadeViaParent",r[r.Fetch=6]="Fetch",r}(Be||{});function an(r,e){return{\u0275kind:r,\u0275providers:e}}function xn(...r){let e=[$e,Ae,Ne,{provide:L,useExisting:Ne},{provide:j,useFactory:()=>m(Z,{optional:!0})??m(Ae)},{provide:je,useValue:on,multi:!0},{provide:_e,useValue:!0},{provide:X,useClass:sn}];for(let n of r)e.push(...n.\u0275providers);return ce(e)}function kn(){return an(Be.Fetch,[Z,{provide:j,useExisting:Z}])}var cn=new R(""),Oe="b",Ie="h",Me="s",De="st",xe="u",ke="rt",z=new R(""),ln=["GET","HEAD"];function dn(r,e){let h=m(z),{isCacheActive:n}=h,t=ne(h,["isCacheActive"]),{transferCache:s,method:i}=r;if(!n||s===!1||i==="POST"&&!t.includePostRequests&&!s||i!=="POST"&&!ln.includes(i)||!t.includeRequestsWithAuthHeaders&&hn(r)||t.filter?.(r)===!1)return e(r);let o=m(W),c=m(cn,{optional:!0}),a=Te(m(G));if(c&&!a)throw new $(2803,!1);let f=a&&c?yn(r.url,c):r.url,p=fn(r,f),y=o.get(p,null),T=t.includeHeaders;if(typeof s=="object"&&s.includeHeaders&&(T=s.includeHeaders),y){let{[Oe]:g,[ke]:l,[Ie]:d,[Me]:w,[De]:P,[xe]:u}=y,v=g;switch(l){case"arraybuffer":v=new TextEncoder().encode(g).buffer;break;case"blob":v=new Blob([g]);break}let b=new E(d);return _(new M({body:v,headers:b,status:w,statusText:P,url:u}))}return e(r).pipe(ae(g=>{g instanceof M&&a&&o.set(p,{[Oe]:g.body,[Ie]:un(g.headers,T),[Me]:g.status,[De]:g.statusText,[xe]:f,[ke]:r.responseType})}))}function hn(r){return r.headers.has("authorization")||r.headers.has("proxy-authorization")}function un(r,e){if(!e)return{};let n={};for(let t of e){let s=r.getAll(t);s!==null&&(n[t]=s)}return n}function Fe(r){return[...r.keys()].sort().map(e=>`${e}=${r.getAll(e)}`).join("&")}function fn(r,e){let{params:n,method:t,responseType:s}=r,i=Fe(n),o=r.serializeBody();o instanceof URLSearchParams?o=Fe(o):typeof o!="string"&&(o="");let c=[t,s,e,o,i].join("|"),a=pn(c);return a}function pn(r){let e=0;for(let n of r)e=Math.imul(31,e)+n.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function Fn(r){return[{provide:z,useFactory:()=>(fe("NgHttpTransferCache"),J({isCacheActive:!0},r))},{provide:Ue,useValue:dn,multi:!0,deps:[W,z]},{provide:pe,multi:!0,useFactory:()=>{let e=m(ye),n=m(z);return()=>{e.whenStable().then(()=>{n.isCacheActive=!1})}}}]}function yn(r,e){let n=new URL(r,"resolve://").origin,t=e[n];return t?r.replace(n,t):r}export{E as a,$e as b,Ue as c,xn as d,kn as e,Fn as f};
