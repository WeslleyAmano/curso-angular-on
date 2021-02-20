import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss']
})
export class ExercicioPipesComponent {

  filme = {
    titulo: 'Harry Potter - A pedra filosofal',
    estrelas: 4.4333,
    precoAluguel: 15.45,
    dataLancamento: new Date(2019, 11, 30),

  };

  compras = [{
    produto: 'lampadas',
    valor: 299.90,
    quantidade: 2,
    peso: 0,
    data: new Date(2020, 1, 1, 15, 3),

  }, {
    produto: 'farinha',
    valor: 450.90,
    quantidade: 2,
    peso: 29.3333,
    data: new Date(2020, 1, 10, 19, 2),
  }]

}
