import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Recipe } from '../../../models/recipes.model';
import { Router } from '@angular/router';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-new-recipe',
  standalone: false,

  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.scss'
})
export class NewRecipeComponent {

  recipe : Recipe | undefined;
  editMode = false;


  form = new FormGroup({
    title: new FormControl("",Validators.required),
    description: new FormControl("",Validators.required),
    image: new FormControl("",Validators.required),
    difficulty: new FormControl(1,Validators.required)
  })

  constructor(private route : Router, private service : RecipeService){
    const url = this.route.url.split('/');
    if(url[2]==='edit'){
      this.editMode = true;
      this.service.getDetail(url[3]).subscribe({
        next : (res) => {
          this.recipe = res
          this.form.setValue({
            title: this.recipe.title,
            description: this.recipe.description,
            image: this.recipe.image,
            difficulty: this.recipe.difficulty
          });
        }
      })

    }else {this.editMode = false;}
    console.log(url)
  }

  onSubmit(){
    const url = this.route.url.split('/');
    console.log(this.form.value);
    this.recipe = {
      title: this.form.value.title,
      description: this.form.value.description,
      image: this.form.value.image,
      difficulty: this.form.value.difficulty,
      published: true
    }
    console.log(this.recipe);

    if (url[2]==='edit'){

    }else{
      this.service.postRecipe(this.recipe,url[3]);
    }
  }
}
