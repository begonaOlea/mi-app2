import { Injectable, EventEmitter } from '@angular/core';
import { Employee } from '../lista-empleados/domain/employee';
import { LogService } from './log.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  cambioNombre = new EventEmitter<string>();
  nuevosEmpleadosObservable: Observable<Employee>;

  private employees: Employee[] = [
  {'id':1, 'firstName': 'John', 'lastName': 'Doe', 'email': 'j.doe@gmail.com', 'selected': true },
  { 'id': 2, 'firstName': 'Bob', 'lastName': 'Sullivan', 'email': 'b.sullivan@gmail.com','selected': false  },
  { 'id': 3, 'firstName': 'Mark', 'lastName': 'O Really', 'email': 'm.oreally@gmail.com', 'selected': false },
  { 'id': 4, 'firstName': 'Mary', 'lastName': 'Zamora', 'email': 'm.zamora@gmail.com', 'selected': true }
 ];
  constructor(private logService: LogService) { 
      console.log('.......instanciando servicio EmpleadoService');
       //crear un observable que emite 3 nuevos employees
      this.nuevosEmpleadosObservable =  Observable.create( (observer) => {
          let contador = 5;
          setInterval( () => {
            const e = {id: contador,
                      firstName: 'empleado' + contador,
                       lastName: ' ',
                       email: '',
                       selected: false };
            console.info(JSON.stringify(e));
            observer.next(e);
            contador ++;
            if (contador === 10){
              observer.complete();
            }
          }, 2000);
     } );

  }

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
