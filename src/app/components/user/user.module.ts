import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { UserRoutingModule } from "./user-routing.module";
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';



import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user.component';



@NgModule({
  declarations:[
    LoginComponent,
    ProfileComponent,
    RegistrationComponent,
    UserComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    CheckboxModule,
    UserRoutingModule,
    FloatLabelModule,
    ButtonModule
  ]
})

export class UserModule{ }