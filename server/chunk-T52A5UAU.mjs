import './polyfills.server.mjs';
import{j as m}from"./chunk-EUEWGLEL.mjs";import{K as g,s as f}from"./chunk-A7KVYSNF.mjs";import{Ab as p,N as d,Oa as n,Ya as s,Za as a,ic as u,la as r,mb as c}from"./chunk-OFODF4HH.mjs";var y=(()=>{class e{el;ngModel;cd;config;variant="outlined";filled;constructor(o,t,i,l){this.el=o,this.ngModel=t,this.cd=i,this.config=l}ngAfterViewInit(){this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(t){return new(t||e)(n(r),n(m,8),n(u),n(g))};static \u0275dir=a({type:e,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(t,i){t&1&&p("input",function(v){return i.onInput(v)}),t&2&&c("p-filled",i.filled)("p-variant-filled",i.variant==="filled"||i.config.inputStyle()==="filled")},inputs:{variant:"variant"},standalone:!1})}return e})(),j=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=s({type:e});static \u0275inj=d({imports:[f]})}return e})();export{y as a,j as b};
