import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-pipes',
  templateUrl: './ex-pipes.component.html',
  styleUrls: ['./ex-pipes.component.scss'],
})
export class ExPipesComponent {
  constructor(
  ) { }

  filme = {
    titulo: 'Senhor dos Anéis',
    avaliacao: 4.55545,
    preco: 35.9,
    dataDeLancamento: new Date(2010, 7, 24),
  };

  compras = [
    {
      produto: 'lâmpadas',
      valor: 299.29,
      quantidade: 2,
      peso: 0,
      data: new Date(2020, 1, 1, 15, 20),
    },
    {
      produto: 'farinha',
      valor: 450.29,
      peso: 29.33333,
      quantidade: 2,
      data: new Date(2020, 1, 10, 19, 30),
    },
  ];
}
