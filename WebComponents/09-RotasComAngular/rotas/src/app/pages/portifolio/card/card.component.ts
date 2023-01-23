import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
      private activeRoute: ActivatedRoute,
      private navegador:Router
    ) {
    //http://localhost:4200/portfolio/{1}
    //Recupera um parâmetro passado junto da rota.
    console.log(this.activeRoute.params);
    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )

    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void {
    // setInterval(()=>{
    //   this.navegador.navigate(['/']); //Navega para outra rota. Neste caso depois de 5 mil milisegundos.
    // }, 5000)
  }

}
