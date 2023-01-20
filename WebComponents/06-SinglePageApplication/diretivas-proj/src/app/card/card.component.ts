import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  isShowMsg: boolean = false;

  produtos: string[] = []
  menuType: string = ""

  constructor() {
    this.produtos = [
      "Mouse",
      "Teclado",
      "Placa de vídeo",
      "Processador",
    ]
  }

  ngOnInit(): void {
  }

  ShowMsg(){
    this.isShowMsg = !this.isShowMsg;
  }

  adicionar():void {
    this.produtos.push("Novo Produto");
  }

  remover(index: number):void {
    this.produtos.splice(index, 1);
  }

}
