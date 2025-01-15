import { UserService } from './../../services/user.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipes.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild('modaleRegistrazione') modale: ElementRef;


  evideziato= false;

  ricette: Recipe[] = [];
  datiRegistrazione = {};
  idModale = '';
  nomeModale = '';

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private modalService: NgbModal
  ){
      this.recipeService.getRecipe().subscribe({
        next:(res) => {
          this.ricette = res.sort((a,b)=>b._id-a._id).slice(0,4);
        },
        error: (e) => console.log(e)
      });

      this.userService.datiUser.subscribe(res => {
        console.log(res);
        this.datiRegistrazione = res;
      })

    }

  onEvidenziazione(){
    this.evideziato= !this.evideziato
  }

  ngAfterViewInit(): void {
    this.userService.datiUser.subscribe( res => {
      console.log(res);
      this.datiRegistrazione = res;
      if res!== null
      this.openModal(this.modalRegistrazione)
    })
  }

  openModal(content: any, id?: string, nome?: string, cognome?: string ){
    this.idModale = id;
    this.nomeModale = nome;
    this.modalService.open(content,{centered: true, size: 'lg'}).result
    .then(
    (res) => {
      console.log(('azione da eseguire'+ res));
      this.userService.datiUser.next(null);
    }).catch((error) => console.log('nessuna azione da eseguire'));
  }

}
