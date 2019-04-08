import { Component, OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'
import { Observable ,interval, Observer, Subscription } from 'rxjs'


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit,OnDestroy {

  private ofertaService: OfertasService
  private route: ActivatedRoute

  public oferta: Oferta

  /*
  private tempoObservableSubscription: Subscription
  private meuObservable: Subscription 
  */
  constructor(ofertaService: OfertasService,route: ActivatedRoute,    
    ) { 
      this.ofertaService = ofertaService
      this.route = route
    }

  ngOnInit() {
    //console.log('id recuperado na rota',this.route.snapshot.params['id'])

    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro.id)
    // })

    
    //console.log(this.ofertaService.getOfertasPorId(this.route.snapshot.params['id']))
    this.ofertaService.getOfertasPorId(this.route.snapshot.params['id'])
    .then((oferta: Oferta) => {
      this.oferta = oferta
    })

    /*
    this.route.params.subscribe(
      (parametro:any) =>{console.log(parametro)},
      (erro:any) =>{console.log(erro)},
      ()=>console.log('Processamento foi classificado como concluido !')
    )
    */

     /*
     interval(500).subscribe((intervalo:number) => {
      console.log(intervalo)
    })
    

    //observable (observável)
    let meuObservableTeste = Observable.create((observer:Observer<number>) =>{
      observer.next(1)
      observer.next(3)
      //observer.error('algum erro foi importado no stream de evento')
      observer.complete()
    })

    //observable (observador)
    meuObservableTeste.subscribe(
      (resultado:any) => console.log(resultado + 10),
      (erro:string) => console.log(erro),
      () => console.log('Stream de eventos foi finalizada')
    )
    */
  }

  ngOnDestroy(){
    /*
    this.meuObservable.unsubscribe()
    this.tempoObservableSubscription.unsubscribe()
    */
  }

}
