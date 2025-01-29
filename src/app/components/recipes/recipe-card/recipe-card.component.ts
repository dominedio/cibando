import { Component, Input , Output , EventEmitter, inject} from '@angular/core';
import { Recipe } from '../../../models/recipes.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RecipeService } from '../../../services/recipe.service';
import { Router } from '@angular/router';

import { ConfirmationService, MessageService } from 'primeng/api';

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
            <a (click)="edit()" class="pi pi-pencil " style="color: darkcyan"></a>
          </div>
          <div class="icon">
            <!-- <a (click)="deleteres()"  class="pi pi-trash" style="color: red"></a> -->
            <p-toast />
            <p-confirmDialog />
            <p-button (click)="confirmDelete($event)" icon="pi pi-trash" severity="danger" [outlined]="true" />
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

  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  private service = inject(RecipeService);
  private domSanitizer = inject(DomSanitizer);
  private router = inject(Router);
  url : string[];

  constructor(){
    this.url = this.router.url.split('/');
      // this.getRecipe;
    }

  edit(){
    localStorage.setItem("page",this.url[4]);
    localStorage.setItem("size",this.url[6]);
    this.router.navigateByUrl(`/ricette/edit/${this.ricetta._id}`);
  }

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

  confirmDelete(event : Event){

          // acceptButtonProps: {
          //     label: 'Delete',
          //     severity: 'danger',
          // },

      this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Vuoi eliminare questa ricetta ?',
        header: 'Conferma di Cancellazione',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
            this.deleteres();
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
  }
}