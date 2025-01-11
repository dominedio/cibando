import { Injectable } from '@angular/core';
import { RECIPES } from '../mocks/ricipes.mock';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipes.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipe():Observable<Recipe[]>{
    return of (RECIPES)
  }

  getDetail(id:number):Observable<Recipe | undefined>{
    const recipe = RECIPES.find(ricetta=> ricetta._id === id);
    return of(recipe);

  }
}
