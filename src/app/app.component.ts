import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  pp = 'uma word.';
  fcor = 'Blue chanel';
  tituloBind = 'New title';

  contInicial = 10;

  eventoRecebido($event: any) {
    console.log('App Component: Evento Recebido', $event);
  }

  onValorAtualizadoNoContador(novoValor : any) {
    console.log('App Component: valor atualizado', novoValor);
  }

  constructor() {}
}
