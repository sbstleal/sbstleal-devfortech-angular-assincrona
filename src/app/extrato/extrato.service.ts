import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment.prod';
import { ITransacao } from './extrato.interface';

@Injectable({
  providedIn: 'root',
})
export class ExtratoService {
  constructor(
    private http: HttpClient
    ) {}

    api_url = environment.fakeapi;

  getTransacoes() {
    return this.http.get<ITransacao[]>(`${this.api_url}/vitorfgsantos/fake-api/transacoes`);
  }
}
