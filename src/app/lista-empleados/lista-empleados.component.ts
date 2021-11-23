import { Component, OnInit } from '@angular/core';
import { Employee } from './domain/employee';
import { LogService } from '../servicios/log.service';
import { EmpleadoService } from '../servicios/empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
  providers: [EmpleadoService]
})
export class ListaEmpleadosComponent implements OnInit {


  employees: Employee[] ;

  estiloTitulo = {'color':'red', 'border-bottom':'1px solid red'};
  tipoAlerta = 'alert-secondary';

  constructor(private logService: LogService,
              private empService: EmpleadoService) {
   }

  ngOnInit(): void {
    this.employees = this.empService.getAllEmpleados();
    this.logService.logToConsole('Se ha creado el componente Lista empeados');
  }

}
