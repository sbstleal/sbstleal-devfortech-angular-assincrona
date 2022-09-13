import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs';

import { IContato } from '../contatos.interface';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss']
})
export class DetalhesContatoComponent implements OnInit {

  contato: IContato;
  estaCarregando: boolean;
  erroCarregamento: boolean;

  constructor(
    private route: ActivatedRoute,
    private contatosService: ContatosService,
    private router: Router
  ) { }

  ngOnInit() {
    const idContato: string | any = this.route.snapshot.paramMap.get('id');
    this.carregarContato(idContato);
  }

  carregarContato(id: string) {
    this.estaCarregando = true;
    this.erroCarregamento = false;

    this.contatosService.getContato(id)
    .pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      response => this.onSucesso(response),
      error => this.onError(error)
    )
  }

  onSucesso(response: IContato) {
    {
      this.contato = response;
      console.log(this.contato);
    }
  }

  onError(error: any) {
    {
      this.erroCarregamento = true;
      console.error(error);
    }
  }

  voltar() {
    this.router.navigate([`contatos`]);
  }

}
