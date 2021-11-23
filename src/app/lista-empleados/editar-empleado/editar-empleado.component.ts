import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  nuevoNombre: string;
  id: number;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
  }

  onCambiar(): void{
    this.empleadoService.updateNombre(this.id, this.nuevoNombre);
  }

}
