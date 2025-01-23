import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { loggedInGuard, adminGuard } from './logged-in.guard';

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'home',component: HomeComponent},
  {path: 'ricette',component: RecipesComponent,children:[
    {path: 'dettaglio/:title/:_id',component: DetailComponent},
    {path: '',component: RecipesListComponent,pathMatch: 'full'},
  ]},
  {path: 'registration', component: RegistrationComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: 'newrecipe', component: NewRecipeComponent, canActivate: [adminGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent,canActivate: [loggedInGuard]},

  {path: '**',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
