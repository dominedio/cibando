import { Recipe } from './../models/recipes.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiBaseUrl = "api/recipes";

  constructor(private http: HttpClient){

   }

  postRecipe(recipe: Recipe): Observable<any>{
    return this.http.post<any>(`${this.apiBaseUrl}/`,recipe)
  }

  getRecipe():Observable<Recipe[]>{
    //return of (RECIPES)
    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`)
  }

  getDetail(id:string):Observable<Recipe | undefined>{
    // const recipe = RECIPES.find(ricetta=> ricetta._id === id);
    // return of(recipe);
    return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`)
  }

  delateRecipe(id:string): Observable<any>{
    return this.http.delete<any>(`${this.apiBaseUrl}/${id}`)
  }
}
