import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { PagesComponent } from './pages.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule { }
