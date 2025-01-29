import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContattiComponent } from './components/contatti/contatti.component';

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'home',loadComponent: () => HomeComponent},
  {path: 'contatti', loadComponent: () => ContattiComponent},
  {path: 'user', loadChildren: () => import("./components/user/user.module").then(module => module.UserModule)},
  {path: 'ricette', loadChildren: () => import("./components/recipes/recipes.module").then(module => module.RecipesModule)},
  //{path: '**',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
