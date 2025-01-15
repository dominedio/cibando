import { Component } from '@angular/core';
import { RecipeService } from './../../../services/recipe.service';
import { Recipe } from '../../../models/recipes.model';

@Component({
  selector: 'app-recipes-list',
  standalone: false,

  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})
export class RecipesListComponent {

  ricette: Recipe[] = [];
  titoloRicevuto: any;

  constructor(private recipeService: RecipeService){
      this.recipeService.getRecipe().subscribe({
        next:(res) => {
          this.ricette = res;
        },
        error: (e) => console.log(e)
      })
    }

    riceviTitolo(event: any){
      this.titoloRicevuto = event;
    }

}
