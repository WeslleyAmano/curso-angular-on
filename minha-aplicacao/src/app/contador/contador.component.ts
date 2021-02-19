import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  @Input() valor = 0;
  @Output() valorMudou = new EventEmitter();  
  
  decrementar(){
    this.valor = this.valor - 1;
    this.valorMudou.emit(this.valor);
  }
  incrementar(){
    this.valor = this.valor + 1;
    this.valorMudou.emit(this.valor);
  }
  
  
  
  
  constructor() { }


  ngOnInit(): void {
  }

}