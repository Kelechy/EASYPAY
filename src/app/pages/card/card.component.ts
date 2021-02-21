import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { CardService } from './CardService/card.service';
import * as CardActions from '../../../Actions/card.actions'
import { CardModel } from 'src/model/card.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  form: FormGroup;

  public cardHolder: AbstractControl;
  public ccv: AbstractControl;
  public amount: AbstractControl;
  public expireDate: AbstractControl;
  public cardNumber: AbstractControl;

  payStatus = false;
  result: any;
  cards: Observable<CardModel[]>;

  constructor(private fb: FormBuilder, public _service: CardService, private _store: Store<AppState>) 
  {

    this.form = this.fb.group
    ({
        cardHolder: ['',Validators.compose([Validators.required])],
        ccv: ['', Validators.compose([Validators.required])],
        amount: ['',Validators.compose([Validators.required])],
        expireDate: ['',Validators.compose([Validators.required])],
        cardNumber: ['',Validators.compose([Validators.required])],
    })

    this.cards = _store.select('card')
    
    this.cards.subscribe(result=>{
      this.result = result;
      console.log("RRR", this.result)
    })
  }

  ngOnInit() {
  }

  pay(){
    this.payStatus = true;
    console.log(this.form.value);
    setTimeout(()=>{
      this.payStatus = false;

      // this._service.CreateCard(this.form.value).subscribe(result=>{
      //   this.result = result;
      //   console.log(this.result);
      //})

      this._store.dispatch(new CardActions.AddCard({
        cardNumber: this.form.value.cardNumber,
        ccv: parseInt(this.form.value.ccv),
        expireDate: this.form.value.expireDate,
        amount: parseInt(this.form.value.amount),
        cardHolder: this.form.value.cardHolder
      }))
      this.ngOnInit();
      this.form.reset();
    }, 3000)
    
  }
}
