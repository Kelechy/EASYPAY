import { from } from "rxjs";
import { CardModel } from './../model/card.model'

export interface AppState {
    readonly card: CardModel[];
}