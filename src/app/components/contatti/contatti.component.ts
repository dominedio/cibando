import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  imports: [FormsModule,ReactiveFormsModule],
  template: `<div class="cornice">
  <div class="subCornice">
    <h1>Richiedi informazioni</h1>
    <form [formGroup]="form" (ngSubmit)="onSubmit()" >
      <div>
      <input type="text" id="nome" class="form-nome" formControlName="nome">
      <label for="nome">Nome</label>
      </div>
      <input type="email" id="email" class="form-email" formControlName="email">
      <label for="email">Email</label>
      <input type="text" id="ogetto" class="form-ogetto" formControlName="ogetto">
      <label for="ogetto">Ogetto</label>
      <input type="text" id="messaggio" class="messaggio" formControlName="messaggio">
      <label for="messaggio"></label>
      <button [disabled]="!form.valid" type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg">invia</button>
    </form>
  </div>
</div>`,
  styles: `.cornice {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 600px;
  padding: 70px;

}
.subCornice[_ngcontent-ng-c586939424] {
  background-color: lightblue;
  height: 100%;
  display: grid;
  padding: 20px;
  border: 1px solid blue;
  border-radius: 10px;
}
`
})
export class ContattiComponent {

  form = new FormGroup({
    nome: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    ogetto: new FormControl('',Validators.required),
    messaggio: new FormControl('',Validators.required)
  })

  onSubmit(){
    console.log(this.form.value);
  }

  validButton(){
    if(this.form.valid){
      return false;
    }else return true;
  }

}
