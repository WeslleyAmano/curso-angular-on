import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  estaCarregando!: boolean;
  erroCarregamento!: boolean;
  pagina = 1;
  transacoes!: Transacao[];
  constructor(
    private extratoService: ExtratoService
  ) { }

// tslint:disable-next-line: typedef
ngOnInit() {
this.loadExtrato();
}

// tslint:disable-next-line: typedef
loadExtrato(){
  this.estaCarregando = true;
  this.extratoService.getTransacoes(this.pagina)
    .pipe(
      finalize(() => this.estaCarregando = false),
      take(1)
    )
    .subscribe(response => this.onSucess(response),
    error => this.onError(error));
}

// tslint:disable-next-line: typedef
onSucess(response: Transacao[]){
       this.transacoes = response;
    }
// tslint:disable-next-line: typedef
onError(error: any){
    this.erroCarregamento = true;

}

// tslint:disable-next-line: typedef
paginaAnterior(){
this.pagina = this.pagina - 1;
this.loadExtrato();
}

// tslint:disable-next-line: typedef
proximaPagina(){
  this.pagina = this.pagina + 1;
  this.loadExtrato();
  }
}
