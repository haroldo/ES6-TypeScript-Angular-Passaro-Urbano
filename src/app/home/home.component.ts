import { Component, OnInit } from '@angular/core';
import{ OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ] /* permite que esse serviço esteja disponivel para o componente e para os componentes filhos desse componente  */
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    //this.ofertas =  this.ofertasService.getOfertas()
    //console.log(this.ofertas)

    this.ofertasService.getOfertas()
     .then(( ofertas: Oferta[] ) => {
          this.ofertas = ofertas
     })
     .catch((param: any) => {
       //console.log(param)
      })
  }

}
