"use strict";var __decorate=this&&this.__decorate||function(o,e,t,r){var n,p=arguments.length,m=p<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)m=Reflect.decorate(o,e,t,r);else for(var u=o.length-1;0<=u;u--)(n=o[u])&&(m=(p<3?n(m):3<p?n(e,t,m):n(e,t))||m);return 3<p&&m&&Object.defineProperty(e,t,m),m};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),platform_browser_1=require("@angular/platform-browser"),router_1=require("@angular/router"),forms_1=require("@angular/forms"),app_component_1=require("./component/app.component"),home_component_1=require("./component/home.component"),about_component_1=require("./component/about.component"),user_component_1=require("./component/user.component"),routes=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:home_component_1.HomeComponent},{path:"about",component:about_component_1.AboutComponent},{path:"user",component:user_component_1.UserComponent}],AppModule=function(){};AppModule=__decorate([core_1.NgModule({declarations:[app_component_1.AppComponent,home_component_1.HomeComponent,about_component_1.AboutComponent,user_component_1.UserComponent],imports:[platform_browser_1.BrowserModule,forms_1.FormsModule,forms_1.ReactiveFormsModule,router_1.RouterModule.forRoot(routes)],bootstrap:[app_component_1.AppComponent]})],AppModule),exports.AppModule=AppModule;