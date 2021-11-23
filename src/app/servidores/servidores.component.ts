import { Component, OnInit } from '@angular/core';
import { LogService } from '../servicios/log.service';

@Component({
  selector: 'app-servidores',
  templateUrl: './servidores.component.html',
  styleUrls: ['./servidores.component.css']
  //providers: [LogService]
})
export class ServidoresComponent implements OnInit {


  permitirNuevoServidor: boolean;
  estadoServidorNuevo = 'No hay';

  constructor(private logService: LogService) {
    this.permitirNuevoServidor = true;
  }

  ngOnInit(): void {
    this.logService.logToConsole('estoy en lista servidores');
  }

  onCrearServidor(): void{
    this.estadoServidorNuevo = 'Creado un nuevo servidor';
  }
  
  onUnoDelosServidoresCambio(msg : string){
    alert(msg);
  }

}
