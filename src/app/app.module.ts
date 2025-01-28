import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DividerModule } from 'primeng/divider';

import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';

import { MessageService } from 'primeng/api';


import { RecipesModule } from './components/recipes/recipes.module';
import { HeaderModule } from './components/header/header.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RippleModule,
    ToastModule,
    EditorModule,
    InputTextModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    DividerModule,
    RecipesModule,
    HeaderModule
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
