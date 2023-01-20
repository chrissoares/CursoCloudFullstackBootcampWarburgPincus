import {
  Component,
  Input,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  @Input() name: string = 'Component Name';

  quantidade: number = 0;

  constructor() {
    console.log(`Constructor: ${this.name} ${Date.now()} ${Date.now()}`);
  };

  adicionar(){
    this.quantidade += 1;
    console.log(`Adicionar: ${this.quantidade} ${Date.now()}`)
  }

  decrementar(){
    this.quantidade -= 1;
    console.log(`Decrementar: ${this.quantidade} ${Date.now()}`)
  }

  ngOnInit(): void {
    console.log(`OnInit: ${this.name} ${Date.now()}`)
  };

  ngOnChanges(): void {
    console.log(`OnChange: ${this.name} ${Date.now()}`);
  };

  //checked -> content -> view
  ngDoCheck(): void{
    console.log(`DoCheck: ${this.name} ${Date.now()}`);
  }

  //quando o primeiro conteúdo é iniciado.
  ngAfterContentInit(): void{
    console.log(`AfterContentInit: ${this.name} ${Date.now()}`);
  }

  //Depois da inicialização da view
  ngAfterViewInit(): void{
    console.log(`AfterViewInit: ${this.name} ${Date.now()}`);
  };

  //Após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void{
    console.log(`AfterContentChecked: ${this.name} ${Date.now()}`);
  }

  //Após alguma alteração, verifica a view
  ngAfterViewChecked(): void{
    console.log(`AfterViewChecked: ${this.name} ${Date.now()}`);
  }

  ngOnDestroy(): void{
    console.log(`OnDestroy: ${this.name} ${Date.now()}`);
  }


}
