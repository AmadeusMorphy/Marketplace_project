import './polyfills.server.mjs';
import{m,p as u,s as f}from"./chunk-NONDWBOB.mjs";import{N as a,Xa as r,Ya as l,jb as d,kb as p,ob as h,tb as c}from"./chunk-26VAK23Y.mjs";import{a as i,b as o}from"./chunk-AFOT676I.mjs";var C=(()=>{class e{styleClass;style;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";containerClass(){return{"p-skeleton p-component":!0,"p-skeleton-circle":this.shape==="circle","p-skeleton-none":this.animation==="none"}}get containerStyle(){return this.size?o(i({},this.style),{width:this.size,height:this.size,borderRadius:this.borderRadius}):i({width:this.width,height:this.height,borderRadius:this.borderRadius},this.style)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["p-skeleton"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},standalone:!1,decls:1,vars:7,consts:[[3,"ngClass","ngStyle"]],template:function(t,n){t&1&&c(0,"div",0),t&2&&(h(n.styleClass),p("ngClass",n.containerClass())("ngStyle",n.containerStyle),d("data-pc-name","skeleton")("aria-hidden",!0)("data-pc-section","root"))},dependencies:[m,u],styles:[`@layer primeng{.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:"";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}
`],encapsulation:2,changeDetection:0})}return e})(),v=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=l({type:e});static \u0275inj=a({imports:[f]})}return e})();export{C as a,v as b};
