import { RecipeService } from './../../services/recipe.service';
import { Component } from '@angular/core';
import { Recipe } from '../../models/recipes.model';

@Component({
  selector: 'app-recipes',
  standalone: false,

  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {
  ricette: Recipe[] = [];

  constructor(private recipeService: RecipeService){
    this.recipeService.getRecipe().subscribe({
      next:(res) => {
        this.ricette = res;
      },
      error: (e) => console.log(e)
    })
  }

}
