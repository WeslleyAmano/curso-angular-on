import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contato } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss']
})
export class DetalhesContatoComponent implements OnInit {

  contato!: Contato;
  estaCarregando!: boolean;
  erroNoCarregamento!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contatosService: ContatosService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.carregarContato();
  }

  // tslint:disable-next-line: typedef
  carregarContato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    const idContato = this.route.snapshot.paramMap.get('id');
    this.contatosService.getContato(idContato)
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error),
      );
  }

  // tslint:disable-next-line: typedef
  onSuccess(response: Contato) {
    this.contato = response;
    console.log(this.contato);
  }

  // tslint:disable-next-line: typedef
  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  // tslint:disable-next-line: typedef
  voltar() {
    this.router.navigate([`contatos`]);
  }

}