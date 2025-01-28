import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations:[
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    RouterLink
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }