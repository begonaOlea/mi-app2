import { Injectable, EventEmitter } from '@angular/core';
import { Employee } from '../lista-empleados/domain/employee';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  cambioNombre = new EventEmitter<string>();

  private employees: Employee[] = [
  {'id':1, 'firstName': 'John', 'lastName': 'Doe', 'email': 'j.doe@gmail.com', 'selected': true },
  { 'id': 2, 'firstName': 'Bob', 'lastName': 'Sullivan', 'email': 'b.sullivan@gmail.com','selected': false  },
  { 'id': 3, 'firstName': 'Mark', 'lastName': 'O Really', 'email': 'm.oreally@gmail.com', 'selected': false },
  { 'id': 4, 'firstName': 'Mary', 'lastName': 'Zamora', 'email': 'm.zamora@gmail.com', 'selected': true }
 ];
  constructor(private logService: LogService) { }

  public getAllEmpleados(): Employee[]{
    this.logService.logToConsole('entrego lista empleados');
    return this.employees
  }

  public updateNombre(id: number, newName: string){
    id = id - 1;
    this.employees[id].firstName = newName;
    console.log('... cambiando nombre id ' + id);
    this.cambioNombre.emit('cambió el nombre del empleado ' + id);
  }

}
