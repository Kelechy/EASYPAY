import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { CardModel } from 'src/model/card.model';
import { AppState } from '../app.state';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  
  cards: Observable<CardModel[]>;
  result: any;
  constructor(public _router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
  }

  payment()
  {
    this._router.navigate(['/card'])
    }

}
