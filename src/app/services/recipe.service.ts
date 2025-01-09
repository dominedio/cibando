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
}
