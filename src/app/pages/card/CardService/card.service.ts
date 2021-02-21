import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { CardModel } from '../../../../model/card.model'

@Injectable({providedIn:'root'})
export class CardService{ 

    errorContent: any; 
    public baseUrl = environment.url;
    
    constructor(public http: HttpClient) {}

    public handleError(error: any) 
    {
        console.log(error);

        this.errorContent = 'Check your Internet Connection and Try again.';
        if(error.status == 0 ){
            alert(`${this.errorContent}`);
        }
        else if (error.status == 404) {
            alert(`${this.errorContent}`);
        }
        else if (error.status == 400) {
            alert(`${this.errorContent}`);
        }
        else if (error.status == 501) {
            alert("Request failed.Try again");
        }
        else 
        {
            // alert("Proccess error. Try again");
        }
        return Observable.throw( error.message ? error.message : error.name || 'Server error');
    }

    CreateCard(modal: CardModel[]){  
        
        const httpOptions =
        { 
            headers: new HttpHeaders({
            'Content-Type': 'application/json'})
        };
             return this.http.post(`${this.baseUrl}/Card/Create`, modal, httpOptions )
             .pipe(map(res=>{
                 return res;
             }),
             catchError(this.handleError)
          )
    }
}