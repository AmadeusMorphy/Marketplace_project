import{f as t}from"./chunk-AMLDRP72.js";import{a as o,b as p}from"./chunk-PYFSW4WH.js";import{s as h,t as c}from"./chunk-NBA27GJI.js";import{V as n,_ as a,s as r,ya as l}from"./chunk-S34SW62A.js";var d=class i{constructor(e,s){this.platformId=e;this._httpClient=s;this.isBrowser=h(this.platformId),this.isServer=c(this.platformId)}isBrowser;isServer;getHeaders(){if(this.isBrowser){let e=localStorage.getItem("token");return new o({"Content-Type":"application/json",Authorization:`Bearer ${e}`})}return new o({"Content-Type":"application/json"})}getMerchantProfile(){if(this.isBrowser){let e=localStorage.getItem("userId");return this._httpClient.get(`${t.server}merchants/profile?id=${e}`,{headers:this.getHeaders()})}return r(null)}getMerchantUser(){let e=localStorage.getItem("userId");return this._httpClient.get(`${t.server}users/profile?id=${e}`,{headers:this.getHeaders()})}createMerchantStore(e){return this.isBrowser?this._httpClient.post(`${t.server}stores`,e,{headers:this.getHeaders()}):r(null)}getMerchantStores(){if(this.isBrowser){let e=localStorage.getItem("userId");return this._httpClient.get(`${t.server}stores/merchant?id=${e}`,{headers:this.getHeaders()})}return r(null)}getMerchantProducts(){if(this.isBrowser){let e=localStorage.getItem("userId");return this._httpClient.get(`${t.server}products/merchant?merchant_id=${e}`,{headers:this.getHeaders()})}return r(null)}addProduct(e){return this.isBrowser?this._httpClient.post(`${t.server}products`,e,{headers:this.getHeaders()}):r(null)}updateStore(e){if(this.isBrowser){let s=localStorage.getItem("storeId");return this._httpClient.put(`${t.server}stores?id=${s}`,e,{headers:this.getHeaders()})}return r(null)}static \u0275fac=function(s){return new(s||i)(a(l),a(p))};static \u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"})};export{d as a};
