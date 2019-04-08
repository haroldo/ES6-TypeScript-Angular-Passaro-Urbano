import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { from } from 'rxjs';
import { ProvidersFeature } from '@angular/core/src/render3';
import { Oferta } from '../shared/oferta.model'
import { Observable } from 'rxjs'


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  constructor(private ofertaService:OfertasService) { }

  ngOnInit() {
    
  }
/*
  public pesquisa(event:Event):void{
    console.log((<HTMLInputElement>event.target).value)
  }
*/
  
  public pesquisa(termoBusca:string):void{
    this.ofertas = this.ofertaService.pesquisaOfertas(termoBusca)
    console.log(this.ofertas)
    this.ofertas.subscribe(
      (ofertas:Oferta[]) => console.log(ofertas),
      (erro:any) => console.log('Erro status: ', erro.status),
      () => console.log('Fluxo de evento completo!')
    )
  }
}
