import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorComponent } from './author/author.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NovelComponent } from './novel/novel.component';
import { ThrillerComponent } from './thriller/thriller.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'author',component:AuthorComponent},
  {path:'novel',component:NovelComponent},
  {path:'thriller',component:ThrillerComponent},
  {path:'login',component:LoginComponent},
  
  
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
