import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-binding',
  templateUrl: './exercicio-binding.component.html',
  styleUrls: ['./exercicio-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  valorCampo ='';

  @Input() palavra!: string;
  @Input() color!: string; 

  @Output() clicado = new EventEmitter();
 
  
  onClickBotaoEmissor($event: any) {
  console.log('Aqui devem ser emitidas informações para o componente pai');
  this.clicado.emit();

  }

  onClick($event: any){
    console.log('clicou!', $event)
  }

  passouMouse() {
    console.log('Alguem passou o mouse');
  }

 digitouAlgo($event: any) {
    this.valorCampo = $event.target.value;
  }
  

  acessibilityText = "Um texto acessível";
  isDisabled=true;
  initialValue = 'Valor inicial';
  imageURL = 'https://i.pinimg.com/originals/7f/2c/35/7f2c359c5dfcc05d5814ec4e601318d4.jpg';
  constructor() { 
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  ngOnInit(): void {
  }

}