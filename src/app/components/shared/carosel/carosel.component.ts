import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carosel',
  standalone: true,
  imports:[CommonModule, NgbModule],
  template: `
<ngb-carousel *ngIf="images.length>1;else noslide">
  <ng-template ngbSlide *ngFor="let image of images;let i=index">
    <div class="picsum-img-wrapper">
      <img [src]="percorso+image.id+'.jpg'" alt="image.lable" />
    </div>
    <div class="carousel-caption" >
      <h3>{{image.lable}}</h3>
      <span *ngIf="images.length===image.id">Sei all'ultima foto</span>
    </div>
  </ng-template>
</ngb-carousel>
<ng-template #noslide>
  <div>
   <div class="image-no-carousel" [style]="'background: url(' + percorso + images[0].id + '.jpg); background-repeat: no-repeat; background-position: center; background-size: cover;'">
   </div>
   <div class="carousel-caption-no-carousel">
     <h3>{{images[0].lable}}</h3>
    </div>
  </div>
</ng-template>
`,
  styles: `.carousel-caption{
    h3{
      font-family: "Homemade Apple",cursive;
      font-size: 40px;
      text-shadow: black 2px 3px 3px;
    }
  }
  .carousel-caption-no-carousel {
    position: relative;
      top: -90px;
      color: white;
      text-align: center;
    h3 {
      font-family: "Homemade Apple", cursive;
      font-size: 40px;
      text-shadow: black 2px 3px 3px;
    }
  }
  .image-no-carousel {
    height: 550px;
  }
  `
})
export class CaroselComponent {
  percorso = " ../../../../../../assets/images/carousel-";

  images=[
    {id: 1, lable: "Spaghetti al pomodoro"},
    {id: 2, lable: "Tagliata di manzo"},
    {id: 3, lable: "Tiramisù classico"}
  ]

}
