import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HolaComponent } from './hola/hola.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { MiPipePipe } from './mi-pipe.pipe';
import { ServidoresComponent } from './servidores/servidores.component';
import { ServidorComponent } from './servidores/servidor/servidor.component';
import { EditServidorComponent } from './servidores/edit-servidor/edit-servidor.component';
import { LogService } from './servicios/log.service';

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    ListaEmpleadosComponent,
    MiPipePipe,
    ServidoresComponent,
    ServidorComponent,
    EditServidorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }