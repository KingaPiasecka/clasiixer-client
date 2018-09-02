import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {PostAdComponent} from "./post-ad/post-ad.component";
import {CategoryComponent} from "./category/category.component";
import {FaqComponent} from "./faq/faq.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {MyAdsComponent} from "./my-ads/my-ads.component";

const routes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "postAd", component: PostAdComponent},
  {path: "category", component: CategoryComponent},
  {path: "faq", component: FaqComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "myAds", component: MyAdsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
