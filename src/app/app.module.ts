import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DatePipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localeIt from '@angular/common/locales/it';  // Importa la localizzazione italiana
import { registerLocaleData } from '@angular/common';

import { CaroselComponent } from './components/shared/carosel/carosel.component';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeCardComponent } from './components/shared/recipe-card/recipe-card.component';
import { DetailComponent } from './components/recipes/detail/detail.component';

registerLocaleData(localeIt, 'it');

@NgModule({
  declarations: [
    AppComponent,
    CaroselComponent,
    HomeComponent,
    RecipesComponent,
    HeaderComponent,
    RecipeCardComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbCollapseModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'it' },  // Imposta la lingua predefinita su italiano
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
