import{a as te,b as ie}from"./chunk-DQKGJLGU.js";import{a as w}from"./chunk-WQD344Y3.js";import"./chunk-JP7PQH6C.js";import{a as ae}from"./chunk-4L4X4CI5.js";import{a as $,b as ee}from"./chunk-EXIAEB3D.js";import{a as oe}from"./chunk-QLC2P3T7.js";import{a as Z}from"./chunk-R3WXCHBW.js";import{d as z,e as N}from"./chunk-AMLDRP72.js";import{g as ne,h as re}from"./chunk-OB3R7MWA.js";import"./chunk-HOV5GI77.js";import{a as W,b as X}from"./chunk-WDTQ3V22.js";import"./chunk-NKLDHVJZ.js";import{c as q,d as x,f as D,g as L,h as A,i as C,k as G,l as H,m as J,o as K,p as Q}from"./chunk-ANFO4BS3.js";import{r as Y}from"./chunk-DZMPUI2A.js";import"./chunk-PYFSW4WH.js";import{E as b,J as T,V as E,W as j,m as R,q as F,s as k}from"./chunk-NBA27GJI.js";import{Cb as _,Fb as g,Gb as m,Jb as S,Ob as y,Pb as f,Qa as M,Qb as U,Ua as a,Va as v,Wb as V,cb as I,ia as c,ib as h,ja as d,lc as B,pb as o,wb as i,xb as n,ya as O,yb as s}from"./chunk-S34SW62A.js";function pe(r,p){if(r&1){let e=_();i(0,"div",27),g("click",function(){c(e),m();let l=y(23);return d(l.click())}),s(1,"i",28),n()}if(r&2){let e=m();o("hidden",e.isPfpImgUploading)}}function se(r,p){if(r&1){let e=_();i(0,"div",34),g("click",function(){c(e);let l=m(2);return d(l.removePfpImage())}),s(1,"i",35),n()}if(r&2){let e=m(2);o("hidden",e.isPfpImgUploading)}}function me(r,p){if(r&1){let e=_();i(0,"div",29)(1,"span",30),f(2,"Uploading..."),n(),s(3,"p-skeleton",31),i(4,"img",32),g("load",function(){c(e);let l=m();return d(l.loadPfpImage())}),n(),h(5,se,2,1,"div",33),n()}if(r&2){let e=m();o("hidden",!e.isPfpImgUploading),a(),o("hidden",!e.isPfpImgUploading),a(2),o("hidden",!e.isPfpImgUploading),a(),o("src",e.previewPfp,M)("hidden",e.isPfpImgUploading),a(),o("ngIf",e.previewPfp)}}function ce(r,p){if(r&1){let e=_();i(0,"div",27),g("click",function(){c(e),m();let l=y(25);return d(l.click())}),s(1,"i",28),n()}if(r&2){let e=m();o("hidden",e.isBgImgUploading)}}function de(r,p){if(r&1){let e=_();i(0,"div",34),g("click",function(){c(e);let l=m(2);return d(l.removeBgImage())}),s(1,"i",35),n()}if(r&2){let e=m(2);o("hidden",e.isBgImgUploading)}}function ge(r,p){if(r&1){let e=_();i(0,"div",29)(1,"span",30),f(2,"Uploading..."),n(),s(3,"p-skeleton",31),i(4,"img",36),g("load",function(){c(e);let l=m();return d(l.loadBgImage())}),n(),h(5,de,2,1,"div",33),n()}if(r&2){let e=m();o("hidden",!e.isBgImgUploading),a(),o("hidden",!e.isBgImgUploading),a(2),o("hidden",!e.isBgImgUploading),a(),o("src",e.previewBg,M)("hidden",e.isBgImgUploading),a(),o("ngIf",e.previewBg)}}function fe(r,p){if(r&1&&(i(0,"div",37),s(1,"img",38),i(2,"span",39),f(3),n()()),r&2){let e=p.$implicit;a(),S("alt",e.country),o("src","https://flagcdn.com/"+e.code+".svg",M),a(2),U(e.country)}}var le=class r{constructor(p,e,t,l,P,u){this.platformId=p;this._merchantService=e;this._imagesService=t;this._cdr=l;this._messageService=P;this._authService=u;this.isBrowser=k(this.platformId)}isBrowser;registerForm=new A({pfp_img:new C("",x.required),bg_img:new C("",x.required),commercial_number:new C("",x.required),national_number:new C("",x.required),country:new C([],x.required)});selectedPfp=null;previewPfp;pfpImg;selectedBg=null;previewBg;bgImg;countries=[];selectedCountry;errorMessage=null;isPfpImgUploading=!1;isBgImgUploading=!1;isRegistering=!1;ngOnInit(){this.isBrowser&&(this.countries=oe)}onPfpImgUpload(p){let e=p.target.files[0];e&&(this.isPfpImgUploading=!0,this._imagesService.uploadImage(e).then(t=>{this.previewPfp=t,this.registerForm.get("pfp_img")?.setValue(t),this._messageService.add({severity:"success",summary:"Image Uploaded",detail:"Profile image uploaded successfully"})},t=>{this.isPfpImgUploading=!1,this._messageService.add({severity:"error",summary:"Upload Failed",detail:"Failed to upload profile image"})}))}onBgImgUpload(p){let e=p.target.files[0];e&&(this.isBgImgUploading=!0,this._imagesService.uploadImage(e).then(t=>{this.previewBg=t,this.registerForm.get("bg_img")?.setValue(t),this._messageService.add({severity:"success",summary:"Image Uploaded",detail:"Background image uploaded successfully"})},t=>{this.isBgImgUploading=!1,this._messageService.add({severity:"error",summary:"Upload Failed",detail:"Failed to upload background image"})}))}loadPfpImage(){this.isPfpImgUploading=!1}removePfpImage(){this.previewPfp=null,this.registerForm.get("pfpImg")?.setValue(""),this._cdr.detectChanges()}loadBgImage(){this.isBgImgUploading=!1}removeBgImage(){this.previewBg=null,this.registerForm.get("BgImg")?.setValue(""),this._cdr.detectChanges()}onCountryChange(p){this.selectedCountry=p.value,console.log(this.selectedCountry),this.registerForm.get("country")?.setValue(this.selectedCountry)}isFormValid(){return this.registerForm.invalid}onSubmit(){this.isRegistering=!0,console.log(this.registerForm.value),this._authService.onMerchantRegister(this.registerForm.value).subscribe({next:()=>{this.isRegistering=!1},error:()=>{this.isRegistering=!1}})}static \u0275fac=function(e){return new(e||r)(v(O),v(Z),v(ae),v(B),v(b),v(w))};static \u0275cmp=I({type:r,selectors:[["app-merchant-profile-register"]],features:[V([b,w])],decls:46,vars:11,consts:[["pfpInput",""],["bgInput",""],[1,"container","flex","justify-content-center","align-items-center"],[1,"form-v6-content"],[1,"form-left","relative"],["src","/assets/images/merchantRegg.png","alt","form"],[1,"title"],[1,"form-detail",3,"ngSubmit","formGroup"],[1,"field","mb-5","pfpImage"],[1,"profileFrame","flex","justify-content-center","align-items-center","gap-3","square"],[1,"profile-container"],["class","dotted square",3,"hidden","click",4,"ngIf"],["class","dotted square relative",3,"hidden",4,"ngIf"],["type","file","accept","image/*",2,"display","none",3,"change"],[1,"inputs","flex","flex-column","gap-2"],[1,"field","flex","flex-column","gap-2"],["for","country"],["formControlName","country","placeholder","Select a country",3,"onChange","options","optionLabel","filter"],["pTemplate","item"],[1,"form-wrapper"],["id","commercial_number","type","text","pInputText","","formControlName","commercial_number"],["for","commercial_number"],["id","national_number","type","text","pInputText","","formControlName","national_number"],["for","national_number"],[1,"footer","mt-3"],[1,"btn","flex","justify-content-end"],["type","submit",3,"disabled","label","loading"],[1,"dotted","square",3,"click","hidden"],[1,"pi","pi-camera","camera"],[1,"dotted","square","relative",3,"hidden"],[1,"uploading-text",3,"hidden"],["width","9rem","height","9rem","shape","square",3,"hidden"],[1,"h-full","w-full","border-square","bg-cover",2,"object-fit","cover",3,"load","src","hidden"],["class","delete-btn",3,"hidden","click",4,"ngIf"],[1,"delete-btn",3,"click","hidden"],[1,"pi","pi-times","text-white"],[1,"h-full","w-full","square","bg-cover",2,"object-fit","cover",3,"load","src","hidden"],[1,"country-item"],[1,"country-flag","w-1","h-1","mr-4",3,"src","alt"],[1,"country-name"]],template:function(e,t){if(e&1){let l=_();i(0,"div",2)(1,"div",3)(2,"div",4),s(3,"img",5),i(4,"div",6)(5,"span"),f(6,"Merchant profile registeration"),n()()(),i(7,"form",7),g("ngSubmit",function(){return c(l),d(t.onSubmit())}),i(8,"div",8)(9,"fieldset",9)(10,"legend"),f(11,"Upload section"),n(),i(12,"div",10)(13,"label"),f(14,"Profile image"),n(),h(15,pe,2,1,"div",11)(16,me,6,6,"div",12),n(),i(17,"div",10)(18,"label"),f(19,"Background image"),n(),h(20,ce,2,1,"div",11)(21,ge,6,6,"div",12),n()(),i(22,"input",13,0),g("change",function(u){return c(l),t.onPfpImgUpload(u),d(u.stopPropagation())}),n(),i(24,"input",13,1),g("change",function(u){return c(l),t.onBgImgUpload(u),d(u.stopPropagation())}),n()(),i(26,"div",14)(27,"div",15)(28,"label",16),f(29,"Country of Origin"),n(),i(30,"p-dropdown",17),g("onChange",function(u){return c(l),d(t.onCountryChange(u))}),h(31,fe,4,3,"ng-template",18),n()(),i(32,"div",19)(33,"p-floatLabel"),s(34,"input",20),i(35,"label",21),f(36,"Commercial number"),n()()(),i(37,"div",19)(38,"p-floatLabel"),s(39,"input",22),i(40,"label",23),f(41,"National number"),n()()()(),i(42,"div",24)(43,"div",25),s(44,"p-button",26),n()()()(),s(45,"p-toast"),n()}e&2&&(a(7),o("formGroup",t.registerForm),a(8),o("ngIf",!t.previewPfp&&!t.isPfpImgUploading),a(),o("ngIf",t.isPfpImgUploading||t.previewPfp),a(4),o("ngIf",!t.previewBg&&!t.isBgImgUploading),a(),o("ngIf",t.isBgImgUploading||t.previewBg),a(9),o("options",t.countries)("optionLabel","country")("filter",!0),a(14),o("disabled",t.isFormValid())("label",t.isRegistering?"Registering...":"Create account")("loading",t.isRegistering))},dependencies:[F,R,K,G,q,D,L,Q,H,J,j,E,T,X,W,re,ne,ie,te,N,z,ee,$],styles:[".container[_ngcontent-%COMP%]{height:81vh}.form-v6-content[_ngcontent-%COMP%]{width:968px;border-radius:8px;-o-border-radius:8px;-ms-border-radius:8px;-moz-border-radius:8px;-webkit-border-radius:8px;margin:180px 0;font-family:Nunito,sans-serif;color:#fff;font-weight:700;position:relative;display:flex;border:2px solid var(--surface-900)}.form-v6-content[_ngcontent-%COMP%]   .form-left[_ngcontent-%COMP%]{margin-bottom:-6px;padding-right:60px}.form-v6-content[_ngcontent-%COMP%]   .form-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-top-left-radius:8px;border-bottom-left-radius:8px;height:99%;width:100%;margin-right:5px;object-fit:cover}.form-v6-content[_ngcontent-%COMP%]   .form-detail[_ngcontent-%COMP%]{padding:30px 40px;position:relative;width:100%}.form-v6-content[_ngcontent-%COMP%]   .form-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--surface-600);font-size:35px;text-align:center;position:relative;padding:6px 0 0;margin-bottom:47px}.form-v6-content[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{width:100%}.form-v6-content[_ngcontent-%COMP%]   .form-detail[_ngcontent-%COMP%]   .form-row-last[_ngcontent-%COMP%]{text-align:center}.form-v6-content[_ngcontent-%COMP%]   .form-detail[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]{margin-bottom:35px}input[_ngcontent-%COMP%]{width:100%}.form-v6-content[_ngcontent-%COMP%]   .form-detail[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%]{background:#fe892a;border-radius:6px;-o-border-radius:6px;-ms-border-radius:6px;-moz-border-radius:6px;-webkit-border-radius:6px;width:160px;box-shadow:0 3px 10px #00000026;-o-box-shadow:0px 3px 10px 0px rgba(0,0,0,.15);-ms-box-shadow:0px 3px 10px 0px rgba(0,0,0,.15);-moz-box-shadow:0px 3px 10px 0px rgba(0,0,0,.15);-webkit-box-shadow:0px 3px 10px 0px rgba(0,0,0,.15);border:none;margin:11px 0 50px;cursor:pointer;font-family:Nunito,sans-serif;color:#fff;font-weight:700;font-size:18px}.form-v6-content[_ngcontent-%COMP%]   .form-detail[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%]:hover{background:#e37b27}.form-v6-content[_ngcontent-%COMP%]   .form-detail[_ngcontent-%COMP%]   .form-row-last[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:13px}input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#666;font-size:16px}input[_ngcontent-%COMP%]::-moz-placeholder{color:#666;font-size:16px}input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#666;font-size:16px}input[_ngcontent-%COMP%]:-moz-placeholder{color:#666;font-size:16px}@media screen and (max-width: 991px){.form-v6-content[_ngcontent-%COMP%]{margin:180px 20px;flex-direction:column;-o-flex-direction:column;-ms-flex-direction:column;-moz-flex-direction:column;-webkit-flex-direction:column}.form-v6-content[_ngcontent-%COMP%]   .form-left[_ngcontent-%COMP%]{width:100%}.form-v6-content[_ngcontent-%COMP%]   .form-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-bottom-left-radius:0;border-top-right-radius:8px}.form-v6-content[_ngcontent-%COMP%]   .form-detail[_ngcontent-%COMP%]{padding:30px 20px;width:auto}.form-v6-content[_ngcontent-%COMP%]   .form-detail[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:96%}.form-v6-content[_ngcontent-%COMP%]   .form-detail[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%]{margin-bottom:80px}}@media screen and (max-width: 767px){.form-v6-content[_ngcontent-%COMP%]   .form-detail[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:94%}}@media screen and (max-width: 575px){.form-v6-content[_ngcontent-%COMP%]   .form-detail[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:89%}}.form-wrapper[_ngcontent-%COMP%]{margin-bottom:17px}.image-preview[_ngcontent-%COMP%]{position:relative;border-radius:8px;overflow:hidden;max-height:300px;box-shadow:0 2px 8px #0000001a}.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:100%;height:100%}.image-preview[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;opacity:.8;transition:opacity .2s}.image-preview[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:hover{opacity:1}.profileFrame[_ngcontent-%COMP%]{height:270px;width:100%;border:2px solid var(--surface-200)}.dotted[_ngcontent-%COMP%]{height:150px;width:150px;display:flex;justify-content:center;align-items:center;border:dashed var(--primary-color);cursor:pointer;transition:.2s ease-in-out}.dotted[_ngcontent-%COMP%]:hover{border-color:var(--surface-400)}.dotted[_ngcontent-%COMP%]:hover   .camera[_ngcontent-%COMP%]{color:var(--surface-400)}.circle[_ngcontent-%COMP%]{border-radius:50%}.square[_ngcontent-%COMP%]{border-radius:7px}.camera[_ngcontent-%COMP%]{color:var(--primary-color);font-size:3rem;transition:.2s ease-in-out}legend[_ngcontent-%COMP%]{color:var(--surface-600)}p-dropdown[_ngcontent-%COMP%],   .p-dropdown{width:100%!important}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;justify-content:center;align-items:center}.uploading-text[_ngcontent-%COMP%]{position:absolute;color:var(--surface-300)}.delete-btn[_ngcontent-%COMP%]{background:var(--red);border-radius:50%;padding:5px;position:absolute;top:4px;right:4px;display:flex;justify-content:center;align-items:center;transition:.2s ease;cursor:pointer}.delete-btn[_ngcontent-%COMP%]:hover{background-color:#ff5e5e}.title[_ngcontent-%COMP%]{position:absolute;top:11px;left:89px;background:var(--surface-card);padding:10px;border-radius:20px;font-size:20px;border:2px solid var(--surface-border);color:var(--primary-color)}"],data:{animation:[Y]}})};export{le as MerchantProfileRegisterComponent};
