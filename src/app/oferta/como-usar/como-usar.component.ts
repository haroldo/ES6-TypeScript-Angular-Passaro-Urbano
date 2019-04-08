import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../../ofertas.service'

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})

export class ComoUsarComponent implements OnInit {

  public descricao:string 

  constructor(
    private route: ActivatedRoute,
    private ofertaService:OfertasService
    ) { }


  ngOnInit() {
    console.log('Id rota pai',this.route.parent.snapshot.params['id'])
    this.ofertaService.getComoUsarOfertaPorId(this.route.parent.snapshot.params['id'])
    .then((descricao:string) =>{
      this.descricao = descricao
    })
  }

}
