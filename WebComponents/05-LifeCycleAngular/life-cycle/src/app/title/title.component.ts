import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome: string = 'Christiano';
  constructor() {
    console.log(`Constructor: ${this.nome}`);
   }

  ngOnInit(): void {
    console.log(`OnInit: ${this.nome} - Aqui nasceu um Title Component`)
    this.nome = `ola ${this.nome}`
  }

  ngOnChanges(): void {
    console.log(`OnChange: ${this.nome}`);
  }

}
