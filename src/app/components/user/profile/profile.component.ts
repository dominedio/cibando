import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { filter, first, map } from 'rxjs';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-profile',
  standalone: false,

  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  user : User;
  email;

  constructor(private userService : UserService){
    if(JSON.parse(localStorage.getItem('user'))!==null) {
      this.email = JSON.parse(localStorage.getItem('user')).email;
    if (this.email!==null){
      this.userService.getUser(this.email).pipe(
      first(),
    ).subscribe({
      next:(res)=> {
        this.user= res;
      },
      error: (e)=> console.log(e)
    })}
  }

}
}
