import { AuthService } from './../../services/auth.service';
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isGioele = true;
  user: User;
  searchValue = signal('');

  constructor(
    private router : Router,
    public authservice : AuthService,
    private recipeService : RecipeService
  ){}

  ngDoCheck(): void{
    this.user= this.authservice.pullStorage();
    // if(JSON.parse(localStorage.getItem('user'))!==null) {
    //   this.user = JSON.parse(localStorage.getItem('user'));
    // }
  }

  searching(){
    this.recipeService.updateRecipe(this.searchValue());
    this.router.navigateByUrl('/ricette/search');
  }

  logout(){
    this.authservice.logout();
    this.router.navigateByUrl('/login');
  }

  isAdmin():boolean{
    return this.authservice.isAdmin();
  }
}


