import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { adminGuard } from '../../logged-in.guard';

import { RecipesComponent } from './recipes.component';
import { DetailComponent } from './detail/detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';


const routes: Routes = [
  {path: '',component: RecipesComponent,children:[
      {path: 'dettaglio/:title/:_id',component: DetailComponent},
      {path: 'list',component: RecipesListComponent,pathMatch: 'full'},
      {path: 'newrecipe', component: NewRecipeComponent, canActivate: [adminGuard]},
      {path: '', component: RecipesListComponent, pathMatch: 'full'}
  ]},
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class RecipesRoutingModule { }