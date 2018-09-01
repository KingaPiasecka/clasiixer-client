import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {PostAdComponent} from "./post-ad/post-ad.component";
import {AdDetailsComponent} from "./ad-details/ad-details.component";
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "postAd", component: PostAdComponent},
  {path: "adDetails", component: AdDetailsComponent},
  {path: "category", component: CategoryComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
