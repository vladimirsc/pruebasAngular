import { lsEjercicio } from './coleccionEjercicios';
import { Ejericio } from './../Ejercicio';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  /*
ejercicio: Ejericio = {
   id: 1,
   nombre: 'Flexiones'
 };*/
 lsEjercicios = lsEjercicio;
 seleccionEjercicio: Ejericio;
  constructor() { }

  ngOnInit(): void {
  }

  obtenerEjercicio(recibirEjercicio: Ejericio): void{
     console.log('Entro en evento clik ' + recibirEjercicio.nombre );
     this.seleccionEjercicio = recibirEjercicio;
  }

}
