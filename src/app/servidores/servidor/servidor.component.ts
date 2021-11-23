import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LogService } from 'src/app/servicios/log.service';

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.css']
})
export class ServidorComponent implements OnInit {

  @Input() servidorId: number;
  servidorEstado: string;
  @Output() cambioEstado: EventEmitter<string>
                        = new EventEmitter<string>();

  constructor(private logService: LogService) {
    this.servidorId = 1;
    this.servidorEstado = 'activo';
  }

  ngOnInit(): void {
    this.logService.logToConsole('Estoy se servidor (hijo de servidores)');
  }

  onModificoEstadoServidor(): void {
    if (this.servidorEstado === 'activo'){
      this.servidorEstado = 'no activo';
    }else{
      this.servidorEstado = 'activo';
    }
    console.log('cambio estado a ' + this.servidorEstado);
    this.cambioEstado.emit('Servidor ' + this.servidorId + ' cambió de estado');
  }


}
