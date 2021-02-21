import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './pages/card/card.component';
import { PagesComponent } from './pages/pages.component';

export const routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full'},
  { path: 'pages',component: PagesComponent },
  { path: 'card',component: CardComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
