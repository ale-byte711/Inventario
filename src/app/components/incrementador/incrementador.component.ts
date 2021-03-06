import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtPorcentaje',{static:true}) txtPorcentaje: ElementRef;

  @Input('nombre') leyenda: String = 'Leyenda';

  @Input() porcentaje: number = 50;


  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.porcentaje);
  }

  onChanges(newValue: number) {

    console.log(newValue);


    if (newValue >= 100) {
      this.porcentaje = 100;
      console.log("Entro aca");
      this.leyenda='Te pasas wey';
    }
    else {
      if (newValue <= 0) {
        this.porcentaje=0;
        console.log("y aca");
      }
      else {
        this.porcentaje = newValue;
      }
    }
    this.txtPorcentaje.nativeElement.value=this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
    this.txtPorcentaje.nativeElement.focus();
  }


  cambiarValor(valor: number) {
    if (this.porcentaje >= 100 && valor > 100) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje);

  }

}
