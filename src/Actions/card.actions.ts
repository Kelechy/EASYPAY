import { Injectable  } from '@angular/core'
import { Action } from '@ngrx/store'
import { CardModel } from '../model/card.model'

export const ADD_CARD = '[CARDMODEL] Add'


export class AddCard implements Action {
    readonly type = ADD_CARD

    constructor(public payload: CardModel) {}
}

export type Actions = AddCard