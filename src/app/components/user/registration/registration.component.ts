import { UserService } from './../../../services/user.service';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  standalone: false,

  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  valid = false;
  private router = inject(Router);
  private userService = inject(UserService);
  regex = "^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,16}$";

  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,16}$/)]),
    ripetiPassword: new FormControl('',[Validators.required]),
    accettazione: new FormControl(false,[Validators.requiredTrue]),
  })

  onSubmit(){
    console.log(this.form.value);
    const dati = {nome : this.form.controls.name.value, email : this.form.controls.email.value};
    this.userService.datiUser.next(dati);
    this.userService.saveUser(this.form.value).subscribe({
      next : (res) => {console.log("tutto appostp")
        this.router.navigateByUrl('home')
      },
      error : (e)  => console.log(e)
    })

  }

  equal(){
    if(this.form.get('password')===this.form.get('ripetiPassword')){
      this.valid = true;
    }else this.valid = false;
  }

  validButton(){
    if (this.form.valid && this.valid){
      true;
    }else false;
  }

}
