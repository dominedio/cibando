import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { loggedInGuard } from './logged-in.guard';

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'home',component: HomeComponent},

  {path: 'registration', component: RegistrationComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent,canActivate: [loggedInGuard]},
  {path: 'ricette', loadChildren: () => import("./components/recipes/recipes.module").then(module => module.RecipesModule)},
  {path: '**',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
