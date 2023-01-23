import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  {
    path: '',
    component:TitleComponent,
    pathMatch: 'full', //Utilizamos na página principal para evitar confusão quando o site cresce.
  },
  {
    path: 'portfolio',
    component: CardComponent,
    children: [
      {
        path: ':id', //Rota recebe um parâmetro chamado id.
        component: CardComponent,
        pathMatch: 'prefix',
      },
      {
        path: ':id/:token', //Rota recebe um parâmetro chamado token dentro de id.
        component: CardComponent,
        pathMatch: 'prefix',
      }

    ],
    pathMatch: 'prefix',
  },
  {
    path:'**',
    redirectTo: '' //redireciona para outra rota, no caso, a principal.
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
