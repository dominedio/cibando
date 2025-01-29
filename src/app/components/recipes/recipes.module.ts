import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RecipesRoutingModule } from "./recipes-routing.module";

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { PaginatorModule } from 'primeng/paginator';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'primeng/rating';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';


import { DatePipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localeIt from '@angular/common/locales/it';  // Importa la localizzazione italiana
import { registerLocaleData } from '@angular/common';

import { ConfirmationService, MessageService } from 'primeng/api';



import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipesComponent } from './recipes.component';
import { DetailComponent } from './detail/detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SearchListComponent } from "./search-list/search-list.component";

registerLocaleData(localeIt, 'it');

@NgModule({
  declarations:[
    NewRecipeComponent,
    RecipesListComponent,
    RecipesComponent,
    DetailComponent,
    RecipeCardComponent,
    SearchListComponent
  ],
  imports:[
    ToastModule,
    ConfirmDialogModule,
    RecipesRoutingModule,
    NgbModule,
    CommonModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    EditorModule,
    PaginatorModule,
    NgbCollapseModule,
    RatingModule,
  ],
  exports:[// i componenti che sono condivisi
    RecipeCardComponent
  ],
  providers:[
    { provide: LOCALE_ID, useValue: 'it' },  // Imposta la lingua predefinita su italiano
    DatePipe,
    ConfirmationService,
    MessageService
  ]
})

export class RecipesModule{ }