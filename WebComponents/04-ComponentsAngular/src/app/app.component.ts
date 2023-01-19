import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  title = 'Teste';
  button1Label: string = 'CARRINHO';
  button2Label: string = 'ADD FAVORITOS';
}
