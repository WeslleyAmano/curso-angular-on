import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {

  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;
  Referencia = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';

deveExibir = false;

listaFrutas = [
  'maçã',
  'laranja',
  'mamão',
  'uva',
];

trocarCond(){
  this.deveExibir = !this.deveExibir;
}

carrosLista = [{
placa: 'JND-7427',
cor: 'Preto '
}, {
  placa: 'ABD-7237',
  cor: 'Vermelho '
  
}, {
    placa: 'CCU-7427',
    cor: 'Amarelo '
    
}, {
  placa: 'KLB-7427',
  cor: 'Preto '
  
 }, {
    placa: 'AND-7427',
    cor: 'Azul '
    
},]

soma(num1: number, num2: number){
return num1 + num2;
}
}
