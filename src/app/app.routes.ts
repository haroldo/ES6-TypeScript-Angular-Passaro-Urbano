import { Router } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { DiversaoComponent } from './diversao/diversao.component'
import { OfertaComponent } from './oferta/oferta.component'

export const ROUTES = [
    { path:'', component: HomeComponent},
    { path:'restaurantes', component: RestaurantesComponent },
    { path:'diversao', component: DiversaoComponent },
    { path:'oferta', component: OfertaComponent }
]