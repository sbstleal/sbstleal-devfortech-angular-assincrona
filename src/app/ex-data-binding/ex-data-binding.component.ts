import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ex-data-binding',
  templateUrl: './ex-data-binding.component.html',
  styleUrls: ['./ex-data-binding.component.scss']
})
export class ExDataBindingComponent implements OnInit {

@Input() palavra: string | undefined;
@Input() color: string | undefined;
@Output() clicarOk = new EventEmitter();

imageUrl = 'https://static9.depositphotos.com/1594920/1089/i/600/depositphotos_10890313-stock-photo-english-bulldog-11-months-old.jpg';

valorInc = 'Valor Inicial 5';

valorInput = '';

valorContador = 100;

clicou($event: any) {
  console.log('clicou', $event);
}

digitouAlgo($event: any) {
  this.valorInput = $event.target.value;
  console.log($event)
}

passouMouse() {
  console.log('Passou por aqui.');
}

onClickBtnEmissor($event: any) {
  console.log('Emitir emissões para o componente pai');
  this.clicarOk.emit($event);
}

onValorAtualizadoNoContador(novoValor : any) {
  this.valorContador = novoValor;
  console.log('App Component: valor atualizado', novoValor);
}

  constructor() { }

  ngOnInit(): void {
  }

}
