import { Component, Input } from '@angular/core';
import { Recipe } from '../../../models/recipes.model';

@Component({
  selector: 'app-recipe-card',
  standalone: false,

  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input() ricette: Recipe[]=[]
}
