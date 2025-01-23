import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isGioele = true;
  user: User;

  constructor(
    private router : Router,
    public authservice : AuthService
  ){}

  ngDoCheck(): void{
    this.user= this.authservice.pullStorage();
    // if(JSON.parse(localStorage.getItem('user'))!==null) {
    //   this.user = JSON.parse(localStorage.getItem('user'));
    // }
  }

  logout(){
    this.authservice.logout();
    this.router.navigateByUrl('/login');
  }

  isAdmin():boolean{
    return this.authservice.isAdmin();
  }
}


