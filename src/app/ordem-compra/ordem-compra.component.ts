import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms'
import { CarrinhoService } from '../carrinho.service'
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

private idPedidoCompra:number
private itensCarrinho:ItemCarrinho[] = []

  public formulario:FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'numero':new FormControl(null,[Validators.required,Validators.minLength(1),Validators.maxLength(20)]),
    'complemento':new FormControl(null),
    'formaPagamento':new FormControl(null,[Validators.required])
  })
  constructor(
      private ordemCompraService: OrdemCompraService,
      private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens();
    console.log('Array de  itens -> ', this.itensCarrinho)
  }

  public confirmarCompra(): void {
    console.log(this.formulario)

    console.log(this.formulario.status)
    if(this.formulario.status === 'INVALID'){
      console.log('formulario invalido')
      this.formulario.get('endereco').markAsTouched()
      this.formulario.get('numero').markAsTouched()
      this.formulario.get('complemento').markAsTouched()
      this.formulario.get('formaPagamento').markAsTouched()
    }else{
      console.log('formulario valido')

      let pedido:Pedido = new Pedido(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento)

        console.log(pedido)

        this.ordemCompraService.efetivaCompra(pedido)
        .subscribe((idpedido:number) => {
          this.idPedidoCompra = idpedido
          console.log(this.idPedidoCompra);
        })
    }
  }
}
