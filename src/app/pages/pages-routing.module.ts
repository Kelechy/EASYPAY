import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { PagesComponent } from './pages.component';

export const routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'card', pathMatch: 'full'},
            { path: 'card', component: CardComponent},
        ]
    }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
