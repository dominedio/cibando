import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    apiBaseUrl = "api/users";
    datiUser = new ReplaySubject();

    constructor(private http: HttpClient){

    }
    saveUser(body: any){
      return this.http.post(`${this.apiBaseUrl}/signup`,body);
    }

    getUser(body: string){
      return this.http.post<User>(`${this.apiBaseUrl}/user`,body)
    }




}
