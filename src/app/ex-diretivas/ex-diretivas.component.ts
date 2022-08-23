import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './memes-diretivas';

@Component({
  selector: 'app-ex-diretivas',
  templateUrl: './ex-diretivas.component.html',
  styleUrls: ['./ex-diretivas.component.scss']
})
export class ExDiretivasComponent {

  listaDeCarros = [
    'corsa',
    'onix',
    'hb20',
    'fusca',
    'fox'
   ];

  exb: boolean = false;

  deveExibir() {
    this.exb = !this.exb;
  }

  sub(n1: number, n2: number) {
    return n1 - n2;
  }

  MEMES_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;

  link: string = 'https://raw.githubusercontent.com/vitorfgsantos/curso-angular-diretivas/master/images';
}
