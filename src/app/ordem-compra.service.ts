import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pedido } from './shared/pedido.model'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { URL_API } from './app.api'

@Injectable()
export class OrdemCompraService{

    constructor(private http: HttpClient) { }

    public efetivaCompra(pedido: Pedido):Observable<number>{

        let options = {
            headers:  new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
         }

         /**/
        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            options
        ).pipe(map((response: Response) => {
            var result = response;
            console.log('AQUI -> ' + result["id"])
            return result["id"];
           }));


        console.log(pedido)
    } 
}