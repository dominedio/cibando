import { Component, Input , Output , EventEmitter, inject} from '@angular/core';
import { Recipe } from '../../../models/recipes.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe-card',
  standalone: false,

  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input() ricetta: Recipe | undefined;
  @Input() page = "";

  @Output() messaggio = new EventEmitter();

  private domSanitizer = inject(DomSanitizer)

  inviaTitolo(titolo: string){
    this.messaggio.emit(titolo)
  }

  // getSanitizeHTML(descrizione: string): SafeHtml{
  //   const tagliaDescrizione = this.accorciaDescrizione(descrizione);
  //   const sanificaDescrizione = this.domSanitizer.bypassSecurityTrustHtml(tagliaDescrizione);
  //   return sanificaDescrizione;
  // }

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
