import { Injectable  } from '@angular/core'
import { Action } from '@ngrx/store'
import { CardModel } from '../model/card.model'
import * as CardActions from './../Actions/card.actions'

const initialState: CardModel = 
{
    cardHolder: '',
    expireDate: null,
    cardNumber: '',
    ccv: null,
    amount: null,
}

export function reducer(state: CardModel[]= [initialState], action: CardActions.Actions)
{
    switch(action.type) {
        case CardActions.ADD_CARD: 
        return [...state,action.payload]
        default: return state;
    }
}