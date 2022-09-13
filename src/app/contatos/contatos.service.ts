import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { IContatos } from './contatos.interface';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  constructor(
    private http: HttpClient
  ) { }

  api_url = environment.fakeapi;

  getContatos() {
    //Simular error
    /*const error = throwError('Erro genérico');
    return timer(3000)
      .pipe(
        mergeMap(() => error)
      )*/
    return this.http.get<IContatos[]>(`${this.api_url}/vitorfgsantos/fake-api/contatos`);
  }
}
