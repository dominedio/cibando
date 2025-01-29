import { Recipe } from './../models/recipes.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiBaseUrl = "api/recipes";
  // private _recipe: BehaviorSubject<Recipe[]> = new BehaviorSubject(null);
  private _search: BehaviorSubject<string> = new BehaviorSubject(null);


  // recipes$ = this._recipe.asObservable();
  search$ = this._search.asObservable();


  constructor(private http: HttpClient){

  }

  // updateRecipe(recipe: Recipe[]) {
  //   this._recipe.next(recipe);
  // }

  updateRecipe(search: string) {
    this._search.next(search);
  }

  searchRecipe(search: string): Observable<any>{
    return this.http.get<any>(`${this.apiBaseUrl}/cerca/${search}`);
  }

  postRecipe(recipe: Recipe): Observable<any>{
    return this.http.post<any>(`${this.apiBaseUrl}/`,recipe);
  }

  putRecipe(recipe: Recipe, id: string): Observable<any>{
    return this.http.put<any>(`${this.apiBaseUrl}/${id}`,recipe);
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
