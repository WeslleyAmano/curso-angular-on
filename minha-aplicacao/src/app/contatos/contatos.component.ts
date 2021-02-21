import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Contato } from './contatos.interfaces';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos!: Contato[];
  estaCarregando!: boolean;
  erroNoCarregamento!: boolean;

  constructor(
    private contatosService: ContatosService,
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.carregarContatos();
  }

  // tslint:disable-next-line: typedef
  carregarContatos() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.contatosService.getContatos()
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      );
  }

  // tslint:disable-next-line: typedef
  onSuccess(response: Contato[]) {
    this.contatos = response;
  }

  // tslint:disable-next-line: typedef
  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

}
