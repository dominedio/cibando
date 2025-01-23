import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Recipe } from '../../models/recipes.model';

@Component({
  selector: 'app-new-recipe',
  standalone: false,

  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.scss'
})
export class NewRecipeComponent {

  recipe : Recipe | undefined;

  form = new FormGroup({
    title: new FormControl("",Validators.required),
    description: new FormControl("",Validators.required),
    image: new FormControl("",Validators.required),
    difficulty: new FormControl(1,Validators.required)
  })

  onSubmit(){
    console.log(this.form.value);
    this.recipe = {
      title: this.form.value.title,
      description: this.form.value.description,
      image: this.form.value.image,
      difficulty: this.form.value.difficulty,
      published: true
    }

    console.log(this.recipe);
  }
}
