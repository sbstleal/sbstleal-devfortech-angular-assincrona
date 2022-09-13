import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs';

import { IContatos } from './contatos.interface';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  estaCarregando: boolean;
  erroCarregamento: boolean;

  contatos!: IContatos[];

  constructor(private contatosService: ContatosService) { }

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

  onSucesso(response: IContatos[]) {
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

}
