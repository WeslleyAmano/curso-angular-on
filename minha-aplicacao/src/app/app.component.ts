import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  palavra = "Qualquer coisa";
  title = "seja bem-vinde! :)";
  corFavorita = "Verde";
  valorContador = 10;

  eventoRecebido($event: any) {
    console.log('App Component: Evento recebido', $event); 

  }
  onValorAtualizado(novoValor: any){
    this.valorContador = novoValor;
    console.log('onValorAtualizado', novoValor)
  }

  constructor(){}
}
