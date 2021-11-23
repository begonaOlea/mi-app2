import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-servidor',
  templateUrl: './edit-servidor.component.html',
  styleUrls: ['./edit-servidor.component.css']
})
export class EditServidorComponent implements OnInit {

   nombreServidor: string

 
  constructor() {
    this.nombreServidor = 'Nuevo';
  }

  ngOnInit(): void {
  }


  

}
