import { Component } from '@angular/core';

@Component({
  selector: 'app-carosel',
  standalone: false,

  templateUrl: './carosel.component.html',
  styleUrl: './carosel.component.scss'
})
export class CaroselComponent {
  percorso = " ../../../../../../assets/images/carousel-";

  images=[
    {id: 1, lable: "Spaghetti al pomodoro"},
    {id: 2, lable: "Tagliata di manzo"},
    {id: 3, lable: "Tiramisù classico"}
  ]

}
