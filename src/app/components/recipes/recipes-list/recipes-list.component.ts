import { Component, inject } from '@angular/core';
import { RecipeService } from './../../../services/recipe.service';
import { Recipe } from '../../../models/recipes.model';
import { first, map, Observable, take } from 'rxjs';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-recipes-list',
  standalone: false,

  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})
export class RecipesListComponent {

  private recipeService = inject(RecipeService);

  ricette: Recipe[] = [];
  titoloRicevuto: any;

  first: number = 0;
  rows: number = 10;
  page = 1;
  size = 4;

  recipes$ = this.recipeService.getRecipe().pipe(  //il dolaro è una covenzione per capire che è una chiamata gestita con pipe async
    map(response => response.filter(ricetteFiltrate => ricetteFiltrate.difficulty< 6)),
    map(res => this.totaleRicette = res)
  )
  totaleRicette : Recipe[] = [];

  constructor(){
      // this.getRecipe;
    }

    getRecipe(){
      this.recipeService.getRecipe().pipe(first()).subscribe({
        next:(res) => {
          this.ricette = res;
        },
        error: (e) => console.log(e)
      })
    }

    riceviTitolo(event: any){
      this.titoloRicevuto = event;
    }

    onPageChange(event) {
        event.page = event.page+1;
        this.page = event.page;
        this.size = event.rows;

    }

}
