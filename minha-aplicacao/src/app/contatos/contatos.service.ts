import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Contato } from './contatos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  API_URL = environment.API_URL;
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: '..... TOKEN DE AUTENTICAÇÃO ....'
    })
  };
  Contato!: Contato;

  constructor(
    private http: HttpClient,
  ) { }

  // tslint:disable-next-line: typedef
  getContatos() {
    return this.http.get<Contato[]>(this.API_URL + '/contatos');
  }

  // tslint:disable-next-line: typedef
  getContato(id: any) {
    return this.http.get<Contato>(this.API_URL + '/contatos/' + id, this.httpOptions);
  }

  // tslint:disable-next-line: typedef
  createContato(contato: Contato) {
    return this.http.post<Contato[]>(this.API_URL + '/contatos', contato, this.httpOptions);
  }

  // tslint:disable-next-line: typedef
  updateContato(id: string, contato: Contato) {
    return this.http.put<Contato[]>(this.API_URL + '/contatos' + id, contato, this.httpOptions);
  }

  // tslint:disable-next-line: typedef
  deleteContato(id: string) {
    return this.http.delete<Contato>(this.API_URL + '/contatos/' + id, this.httpOptions);
  }
// tslint:disable-next-line: typedef
onSucess(response: Contato){
  this.Contato = response;
}
}
