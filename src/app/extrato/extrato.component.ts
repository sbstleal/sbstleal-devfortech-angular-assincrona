import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs';

import { ITransacao } from './extrato.interface';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  estaCarregando: boolean;
  erroCarregamento: boolean;

  transacoes!: ITransacao[];
  pagina: number = 1;

  constructor(private extratoService: ExtratoService) {}

  ngOnInit() {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.estaCarregando = true;
    this.erroCarregamento = false;

    this.extratoService.getTransacoes(this.pagina)
    .pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      (response) => this.onSucesso(response),
      (error) => this.onError(error)
    );
  }

  onSucesso(response: ITransacao[]) {
    {
      this.transacoes = response;
    }
  }

  onError(error: any) {
    {
      this.erroCarregamento = true;
      console.error(error);
    }
  }

  paginaAnterior() {
    this.pagina = this.pagina - 1;
    this.carregarExtrato();
  }

  proximaPagina() {
    this.pagina = this.pagina + 1;
    this.carregarExtrato();
  }
}
