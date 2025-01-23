import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl='api/users'

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  saveStorage(res){
    const user : User = {
      id: res.id,
      name: res.name,
      email: res.email,
      Password: res.password,
      role: res.role
    }

    localStorage.setItem('user',JSON.stringify(user))
  }

  pullStorage(): User{
    if(JSON.parse(localStorage.getItem('user'))!==null) {
      return JSON.parse(localStorage.getItem('user'));
    }else return null;
  }

  login(email: string, password: string){
    const user = { email: email, password: password};
    return this.http.post(`${this.apiBaseUrl}/login`,user);
  }

  islogged(): boolean {
    return JSON.parse(localStorage.getItem('user'));
  }

  logout(){
    localStorage.removeItem('user');
  }

  isAdmin(): boolean{
    const user: User= this.pullStorage();
    if (user!==null){
      if (user.role==="admin"){
        return true;
      }else {
        return false;
      }
    }else{
      return false;
    }}
}
