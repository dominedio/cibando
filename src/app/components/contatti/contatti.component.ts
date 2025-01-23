import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  standalone: false,

  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.scss'
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
