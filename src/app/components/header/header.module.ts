import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Button } from "primeng/button";

@NgModule({
  declarations:[
    HeaderComponent,
  ],
  imports: [
    InputTextModule,
    CommonModule,
    NgbCollapseModule,
    RouterLink,
    FormsModule,
    FloatLabelModule,
    Button
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }