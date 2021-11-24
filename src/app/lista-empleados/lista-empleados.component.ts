import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from './domain/employee';
import { LogService } from '../servicios/log.service';
import { EmpleadoService } from '../servicios/empleado.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
  //providers: [EmpleadoService]
})
export class ListaEmpleadosComponent implements OnInit, OnDestroy {

  employees: Employee[] ;

  estiloTitulo = {'color': 'red', 'border-bottom': '1px solid red'};
  tipoAlerta = 'alert-secondary';
  suscripcion: Subscription;

  constructor(private logService: LogService,
              private empService: EmpleadoService) {
      //voy a suscribirme al evento emite 
      this.empService.cambioNombre.subscribe(
        (msg: string) => {
          this.logService.logToConsole(msg);
          this.employees = empService.getAllEmpleados();
        }
      );

      this.suscripcion = this.empService.nuevosEmpleadosObservable.subscribe(
          (emp: Employee) =>
          {
            this.logService.logToConsole('llego un empleado');
            this.employees.push(emp);
          }
      );
    }

  ngOnDestroy(): void {
      this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {
    this.employees = this.empService.getAllEmpleados();
    this.logService.logToConsole('Se ha creado el componente Lista empleados');
  }

}
