import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs';

import { IContato } from './contatos.interface';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  estaCarregando: boolean;
  erroCarregamento: boolean;

  contatos!: IContato[];

  constructor(
    private contatosService: ContatosService,
    private router: Router
    ) { }

  ngOnInit() {
    this.carregarContatos();
  }

  carregarContatos() {
    this.estaCarregando = true;
    this.erroCarregamento = false;

    this.contatosService.getContatos()
    .pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      (response) => this.onSucesso(response),
      (error) => this.onError(error)
    );
  }

  onSucesso(response: IContato[]) {
    {
      this.contatos = response;
    }
  }

  onError(error: any) {
    {
      this.erroCarregamento = true;
      console.error(error);
    }
  }

  irParaDetalhes(idContato: number) {
    this.router.navigate([`contatos/${idContato}`])
  }

}
