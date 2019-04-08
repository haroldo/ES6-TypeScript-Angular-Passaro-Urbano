import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'
import { HttpClient, HttpResponse} from '@angular/common/http';
import { URL_API } from './app.api'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry } from 'rxjs/operators';


@Injectable()
 
export class OfertasService{
    constructor(private http: HttpClient){}
 
    public getOfertas(): Promise<Array<Oferta>>{
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta)
    }   

    public getOfertasPorCategoria(categoria:string ) : Promise<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta)
    }

    public getOfertasPorTipo(tipo:string):Promise<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?categoria=${tipo}`)
         .toPromise()
        .then((resposta: any) => resposta)
    }

    public getOfertasPorId(id:number):Promise<Oferta>{
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta.shift()
            //return resposta[0]
        })
    }

    public getComoUsarOfertaPorId(id:number):Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            //console.log(resposta[0].descricao)
            return resposta[0].descricao
            //return resposta[0]
        })
    }

    public getOndeFicaOfertaPorId(id:number):Promise<string>{
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta:any) => {
            return resposta[0].descricao
        })
    }


    public pesquisaOfertas(termo:string): Observable<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
        .pipe(map((resposta:any)=> resposta),retry(10))
    }


} 
    /*
    public ofertas: Array<Oferta> =  [
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/1/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/2/img1.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/3/img1.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ]*/
    
 

   /* public getOfertas2(): Promise<Oferta[]> {
        
        return new Promise((resolve, reject) => {
            //algum tipo de processamento, que ao finalizar, chama a função resolve ou reject
            let deu_erro =  true
            if(deu_erro){
               setTimeout(()=> resolve(this.ofertas),3000) 
                
            }else{
                reject({codigo_erro: 404, mesagem_erro:'Servidor não encontrado'})
            }
            
        }).then((ofertas: Oferta[]) => {
            console.log('primeiro then')
            return ofertas
            
        }).then((ofertas: Oferta[]) => {
            console.log('segundo then')
            return new Promise((resolve2, reject2) => {
                setTimeout(() => {resolve2( ofertas )} ,3000)

            })
            .then(( ofertas : Oferta[]) => {
                console.log('terceiro then retornado após 3 segundos porque estava aguardando uma promise ser resolvida ')
                return ofertas
            })
        })
       
    }*/


