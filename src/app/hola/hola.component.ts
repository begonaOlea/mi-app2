import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.css']
})
export class HolaComponent implements OnInit {

  nombre: string;
  hoy: Date  = new Date();
  show: boolean = true;

  person = {
    name: 'chris',
    age: 38,
    address: {
      street: 'Oxford Street',
      city: 'London'
    }
  }


  constructor() {
    this.nombre = 'Begoña';
  }

  ngOnInit(): void {
  }

  public mostarOcultar(): void{
    this.show = !this.show;
    console.log('pulso aqui');
  }


}
