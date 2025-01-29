import { Component, inject, signal, effect } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../models/recipes.model';
import { first, map, Observable, take } from 'rxjs';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-search-list',
  standalone: false,

  template: `
  <hr>
  <h1>Ecco le ricette corrispondenti alla ricerca: {{search()}}</h1>
  <div id="container-cards">
    <div class="container-card" >
      @for (ricetta of ricette(); track $index) {
        <app-recipe-card [ricetta]="ricetta" (messaggio)="riceviTitolo($event)"></app-recipe-card>
      }@empty {
        <h1>Non è stata trovata nessuna ricetta per la tua ricerca</h1>
      }
    </div>
  </div>
  <hr>
  `,
  styles: `

  `
})
export class SearchListComponent {

  private recipeService = inject(RecipeService);

  ricette = signal<Recipe[]>([]);
  titoloRicevuto: any;
  search = signal('');

  constructor(){
      // this.getRecipe;
      this.recipeService.search$.subscribe({
        next:(res) => {
          this.search.update(val => res);
        },
        error: (e) => console.log(e)
      })

      effect(()=>{
            this.recipeService.searchRecipe(this.search()).subscribe({
              next:(res) => {
                this.ricette.set(res);
              },
              error: (e) => console.log(e)
            })
          })

    }



    riceviTitolo(event: any){
      this.titoloRicevuto = event;
    }

}
