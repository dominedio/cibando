import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../models/recipes.model';

@Component({
  selector: 'app-detail',
  standalone: false,

  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit{

  private recipeService = inject(RecipeService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router)

  ricetta: Recipe | undefined;

  percorsoStelline= "../../../../assets/images/difficolta-"

  ngOnInit(): void {
    this.onGetDetail();
  }

  onGetDetail(){
    const id = this.activatedRoute.snapshot.paramMap.get('_id');
    if(id){
    this.recipeService.getDetail(id).subscribe({
      next: res =>{
        this.ricetta = res;
      },
      error: e => console.log(e)
    })
  }
}

  onGetDetail2(){
    this.activatedRoute.params.subscribe((urlParams) => {
      const id = urlParams['_id'];
      const idNumerico = Number(id);
      if (id){
        this.recipeService.getDetail(id).subscribe(res => this.ricetta = res);
      }
    })
  }

}
