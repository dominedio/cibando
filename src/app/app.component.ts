import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cibando';
  percorso = "../assets/images/carousel-";

  images=[
    {id: 1, lable: "Spaghetti al pomodoro"},
    {id: 2, lable: "Tagliata di manzo"},
    {id: 3, lable: "Tiramisù classico"}
  ]
}
