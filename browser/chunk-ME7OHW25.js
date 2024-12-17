import{a as L,b as B}from"./chunk-DQKGJLGU.js";import{a as G}from"./chunk-WQD344Y3.js";import{b as P}from"./chunk-JP7PQH6C.js";import{a as q}from"./chunk-ST7ZK63N.js";import"./chunk-R3WXCHBW.js";import{d as k,e as O}from"./chunk-AMLDRP72.js";import{a as D,b as j}from"./chunk-WDTQ3V22.js";import"./chunk-NKLDHVJZ.js";import{c as S,d as m,f as F,g as R,h as V,i as d,k as I,l as N,m as T,o as E,p as A}from"./chunk-ANFO4BS3.js";import{r as z}from"./chunk-DZMPUI2A.js";import"./chunk-PYFSW4WH.js";import{E as f,V as y,W as M,m as _,q as v}from"./chunk-NBA27GJI.js";import{Fb as u,Pb as p,Ua as s,Va as c,Wb as C,cb as h,ib as w,lc as x,pb as l,wb as t,xb as i,yb as n}from"./chunk-S34SW62A.js";function Z(g,a){g&1&&n(0,"small",19)}var X=class g{constructor(a,r,e,o){this._messageService=a;this._authService=r;this._router=e;this._cdr=o;this.registerForm=new V({fullName:new d("",m.required),email:new d("",[m.required,m.email]),userType:new d("customer"),password:new d("",[m.required,this.passwordComplexityValidator()]),confirmPassword:new d("",[m.required,this.passwordMatchValidator()])}),this.registerForm.get("password")?.valueChanges.subscribe(()=>{this.registerForm.get("confirmPassword")?.updateValueAndValidity()})}registerForm;showPassword=!1;showConfirmPassword=!1;isRegistering=!1;ngOnInit(){}passwordComplexityValidator(){return a=>{let r=a.value,e=r&&r.length>=6,o=/\d/.test(r),b=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(r);return e&&o&&b?null:{passwordComplexity:{lengthValid:e,numberValid:o,specialCharValid:b}}}}passwordMatchValidator(){return a=>{let r=this.registerForm?.get("password")?.value,e=a.value;return r===e?null:{passwordMismatch:!0}}}togglePasswordVisibility(){this.showPassword=!this.showPassword}toggleConfirmPasswordVisibility(){this.showConfirmPassword=!this.showConfirmPassword}isFormValid(){return this.registerForm.invalid}onSubmit(){this.isRegistering=!0,this._authService.onRegister(this.registerForm.value).subscribe(()=>{this.registerForm.reset(),this.isRegistering=!1,this._messageService.add({severity:"success",summary:"Success",detail:"Registered successfully!"}),setTimeout(()=>{this._router.navigate(["/login"])},1300)},()=>{this.isRegistering=!1,this._messageService.add({severity:"error",summary:"Error",detail:"Something wrong happened!"})})}static \u0275fac=function(r){return new(r||g)(c(f),c(G),c(P),c(x))};static \u0275cmp=h({type:g,selectors:[["app-register"]],features:[C([f])],decls:34,vars:7,consts:[[1,"wrapper"],[1,"inner"],[1,"flex","flex-column","gap-3",2,"margin-bottom","4rem",3,"ngSubmit","formGroup"],[1,"form-wrapper"],["id","fullName","type","text","pInputText","","formControlName","fullName"],["for","fullName"],["id","email","type","email","pInputText","","formControlName","email"],["for","email"],[1,"form-wrapper","relative"],["id","password","pInputText","","formControlName","password",1,"pr-8",3,"type"],["for","password"],[1,"eyeBtn","cursor-pointer",3,"click"],[1,"pi","pi-eye"],["class","p-error",4,"ngIf"],["id","confirmPassword","pInputText","","formControlName","confirmPassword",1,"pr-8",3,"type"],["for","confirmPassword"],[1,"footer"],[1,"btn"],["type","submit",3,"disabled","label","loading"],[1,"p-error"]],template:function(r,e){if(r&1&&(t(0,"div",0)(1,"div",1)(2,"form",2),u("ngSubmit",function(){return e.onSubmit()}),t(3,"h3"),p(4,"Registration Form"),i(),t(5,"div",3)(6,"p-floatLabel"),n(7,"input",4),t(8,"label",5),p(9,"Full name"),i()()(),t(10,"div",3)(11,"p-floatLabel"),n(12,"input",6),t(13,"label",7),p(14,"Email"),i()()(),t(15,"div",8)(16,"p-floatLabel"),n(17,"input",9),t(18,"label",10),p(19,"Password"),i()(),t(20,"div",11),u("click",function(){return e.togglePasswordVisibility()}),n(21,"i",12),i(),w(22,Z,1,0,"small",13),i(),t(23,"div",8)(24,"p-floatLabel"),n(25,"input",14),t(26,"label",15),p(27,"Confirm password"),i()(),t(28,"div",11),u("click",function(){return e.toggleConfirmPasswordVisibility()}),n(29,"i",12),i()(),t(30,"div",16)(31,"div",17),n(32,"p-button",18),i()()()()(),n(33,"p-toast")),r&2){let o;s(2),l("formGroup",e.registerForm),s(15),l("type",e.showPassword?"text":"password"),s(5),l("ngIf",((o=e.registerForm.get("password"))==null?null:o.hasError("passwordComplexity"))&&((o=e.registerForm.get("password"))==null?null:o.touched)),s(3),l("type",e.showConfirmPassword?"text":"password"),s(7),l("disabled",e.isFormValid())("label",e.isRegistering?"Registering...":"Create account")("loading",e.isRegistering)}},dependencies:[v,_,E,I,S,F,R,A,N,T,j,D,M,y,B,L,q,O,k],styles:['img[_ngcontent-%COMP%]{max-width:100%}ul[_ngcontent-%COMP%]{padding-left:0;margin-bottom:0}a[_ngcontent-%COMP%]:hover{text-decoration:none}[_ngcontent-%COMP%]:focus{outline:none}.wrapper[_ngcontent-%COMP%]{min-height:80vh;background-size:cover;background-repeat:no-repeat;display:flex;align-items:center}.inner[_ngcontent-%COMP%]{min-width:850px;margin:auto;padding-top:68px;padding-bottom:9px;border:2px solid transparent;border-radius:14px;background-clip:padding-box,border-box;background-image:url(/assets/images/registration-form-2.jpg),linear-gradient(to right,#00f,purple);background-origin:border-box;background-composite:source-over;background-repeat:no-repeat}form[_ngcontent-%COMP%]{width:50%;padding-left:45px}.form-group[_ngcontent-%COMP%]{display:flex}.form-group[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]{width:50%}.form-group[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]:first-child{margin-right:20px}.form-wrapper[_ngcontent-%COMP%]{margin-bottom:17px}.form-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:9px;display:block}.form-control[_ngcontent-%COMP%]{border:1px solid #ccc;display:block;width:100%;height:40px;padding:0 20px;border-radius:20px;background:none}.form-control[_ngcontent-%COMP%]:focus{border:1px solid #ae3c33}select[_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;cursor:pointer;padding-left:20px}select[_ngcontent-%COMP%]   option[value=""][disabled][_ngcontent-%COMP%]{display:none}button[_ngcontent-%COMP%]{border:none;width:152px;height:40px;margin:29px auto auto;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;background:#ae3c33;font-size:13px;color:#fff;text-transform:uppercase;border-radius:20px;overflow:hidden;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px #0000;position:relative;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.5s;transition-duration:.5s}button[_ngcontent-%COMP%]:before{content:"";position:absolute;z-index:-1;inset:0;background:#f11a09;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 50%;transform-origin:0 50%;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}button[_ngcontent-%COMP%]:hover:before{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transition-timing-function:cubic-bezier(.52,1.64,.37,.66);transition-timing-function:cubic-bezier(.52,1.64,.37,.66)}.checkbox[_ngcontent-%COMP%]{position:relative}.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding-left:22px;cursor:pointer}.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;opacity:0;cursor:pointer}.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after{display:block}.checkmark[_ngcontent-%COMP%]{position:absolute;top:50%;left:0;transform:translateY(-50%);height:12px;width:13px;border-radius:2px;background-color:#ebebeb;border:1px solid #ccc;color:#000;font-size:10px;font-weight:bolder}.checkmark[_ngcontent-%COMP%]:after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:none;content:"\\f26b"}@media (max-width: 991px){.inner[_ngcontent-%COMP%]{min-width:768px}}@media (max-width: 767px){.inner[_ngcontent-%COMP%]{min-width:auto;background:none;padding-top:0;padding-bottom:0}form[_ngcontent-%COMP%]{width:100%;padding-right:15px;padding-left:15px}}.p-inputtext[_ngcontent-%COMP%]{width:100%!important}.eyeBtn[_ngcontent-%COMP%]{position:absolute;top:10px;right:4%;width:17px;background-color:#e9e9e9;height:17px;display:flex;justify-content:center;align-items:center;padding:13px;border-radius:15px;color:#616161;transition:.3s ease}.eyeBtn[_ngcontent-%COMP%]:hover{background-color:#c7c7c7}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}60%{opacity:0}to{opacity:1}}'],data:{animation:[z]}})};export{X as RegisterComponent};
