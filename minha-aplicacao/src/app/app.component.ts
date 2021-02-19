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

  eventoRecebido($event: any) {
    console.log('App Component: Evento recebido', $event); 

  }
  onValorAtualizado(novoValor: any){
    console.log('onValorAtualizado', novoValor)
  }

  constructor(){}
}
