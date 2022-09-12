import { Component, OnInit } from '@angular/core';

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

  constructor(private extratoService: ExtratoService) {}

  ngOnInit(): void {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.estaCarregando = true;
    this.erroCarregamento = false;
    this.extratoService.getTransacoes().subscribe(
      (response) => this.onSucesso(response),
      (error) => this.onError(error)
    );
  }

  onSucesso(response: ITransacao[]) {
    {
      this.estaCarregando = false;
      this.transacoes = response;
    }
  }

  onError(error: any) {
    {
      this.erroCarregamento = true;
      this.estaCarregando = false;
      console.error(error);
    }
  }
}
