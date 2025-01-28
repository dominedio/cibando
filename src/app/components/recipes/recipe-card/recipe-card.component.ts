import { Component, Input , Output , EventEmitter, inject} from '@angular/core';
import { Recipe } from '../../../models/recipes.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RecipeService } from '../../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  standalone: false,

  template: `
  <div class="container-card">
  <div class="card" style="width: 18rem;">
    <div class="card-image" [ngStyle]="{'background-image':'url('+ ricetta.image +')'}"
      (click)="inviaTitolo(ricetta.title)"></div>
    <div class="card-body">
      <h5 class="card-title">{{ricetta.title}}</h5>
      <!-- <p class="card-text">{{ricetta.description | slice: 0:250}}...</p> -->
      <!-- <p class="card-text" [innerHTML]="ricetta.description | slice: 0:250">...</p> -->
      <p class="card-text" [innerHTML]="accorciaDescrizione(ricetta.description) ">...</p>
      <div class="button-link">
        <a *ngIf="page !== 'home'" class="btn btn-primary"
          [routerLink]="['dettaglio',ricetta.title , ricetta._id]">Visualizza</a>
        <a *ngIf="page === 'home'" class="btn btn-primary"
          [routerLink]="['/ricette/dettaglio',ricetta.title , ricetta._id]">Dettaglio</a>
        @if (true) {
          <div class="icon">
            <a [routerLink]="['/ricette/edit', ricetta._id]" class="pi pi-pencil " style="color: darkcyan"></a>
          </div>
          <div class="icon">
            <a (click)="deleteres()"  class="pi pi-trash" style="color: red"></a>
          </div>
        }
      </div>

    </div>
  </div>
</div>
`,
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input() ricetta: Recipe | undefined;
  @Input() page = "";

  @Output() messaggio = new EventEmitter();

  private service = inject(RecipeService);
  private domSanitizer = inject(DomSanitizer);
  private router = inject(Router);

  inviaTitolo(titolo: string){
    this.messaggio.emit(titolo);
  }

  // getSanitizeHTML(descrizione: string): SafeHtml{
  //   const tagliaDescrizione = this.accorciaDescrizione(descrizione);
  //   const sanificaDescrizione = this.domSanitizer.bypassSecurityTrustHtml(tagliaDescrizione);
  //   return sanificaDescrizione;
  // }

  deleteres(){
    this.service.delateRecipe(this.ricetta._id).subscribe({
      next: (res) => {console.log("tutto appost")
        this.router.navigateByUrl('home')
      },
      error : (e) => console.log(e)
    });
  }


  accorciaDescrizione(descrizione: string): string{
    const lunghezzaDescrizione = 200;
    if(descrizione.length <= lunghezzaDescrizione){
      return descrizione.slice(0, lunghezzaDescrizione);
    }else {
      const ultimaPosizioneSpazio = descrizione.lastIndexOf(' ', lunghezzaDescrizione);
      return descrizione.slice(0,ultimaPosizioneSpazio);
    }
  }

}
