import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { loggedInGuard } from "../../logged-in.guard";

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from "./user.component";

const routes: Routes = [
  {path: '',component: UserComponent, children:[
    {path: 'registration', component: RegistrationComponent},
    {path: 'profile', component: ProfileComponent,canActivate: [loggedInGuard]},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'login' , pathMatch: 'full'}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }