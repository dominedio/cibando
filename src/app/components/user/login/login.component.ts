import { Password } from 'primeng/password';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private router = inject(Router);
  private authService = inject(AuthService)

  email= "";
  password= "";
  user;
  errormessage= "";

  onSubmit(form){
    if (form.email !== '' && form.password !== ''){
      this.authService.login(form.email, form.password).subscribe({
        next: (res) => {
          this.user = res;
          if(res){
            this.authService.saveStorage(res);
            this.router.navigateByUrl('home');
          }else{
            this.errormessage = 'Username/password errati';
          }
        },
        error: (e) => {
          console.log(e);
          this.errormessage = 'Username/password errati';
        }
      })
    }

  }

}
