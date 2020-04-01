import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { from, Subject } from 'rxjs';
import { ProvidersFeature } from '@angular/core/src/render3';
import { Oferta } from '../shared/oferta.model'
import { Observable,of, } from 'rxjs'
import { switchMap,debounceTime,distinctUntilChanged} from 'rxjs/operators'
import { catchError } from 'rxjs/operators'



@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  //public ofertas2: Oferta[]

  private subjectPesquisa: Subject<String> = new Subject<string>()

  constructor(private ofertaService:OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa //retorno Ofertas
    .pipe(debounceTime(1000),
    distinctUntilChanged(),
    switchMap((termo:string) => {
      console.log('requisição Http para API: ',termo)
      if (termo.trim() === '')
      {
        //retornar um observable de array de ofertas vazio 
        return  of<Oferta[]>([]);
      }
        return this.ofertaService.pesquisaOfertas(termo)
    }),
    catchError((erro:any) => {
      console.log(erro)
      return of<Oferta[]>([])
    })
    
    );

    /*this.ofertas.subscribe((ofertas:Oferta[]) => {
      console.log(ofertas)
     this.ofertas2 = ofertas    
    })
    */
    
  }
/*
  public pesquisa(event:Event):void{
    console.log((<HTMLInputElement>event.target).value)
  }
*/
  
  public pesquisa(termoBusca:string):void{
   
   /* this.ofertas = this.ofertaService.pesquisaOfertas(termoBusca)
    console.log(this.ofertas)
    this.ofertas.subscribe(
      (ofertas:Oferta[]) => console.log(ofertas),
      (erro:any) => console.log('Erro status: ', erro.status),
      () => console.log('Fluxo de evento completo!')
    )*/

console.log('keyup caracter: ',termoBusca)
    this.subjectPesquisa.next(termoBusca)
  }


}
