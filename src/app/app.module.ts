import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ItemProductoComponent } from './lista-productos/item-producto/item-producto.component';
import { EditProductoComponent } from './lista-productos/edit-producto/edit-producto.component';
import { ProductosService } from './lista-productos/servicios/productos.service';
import { ProductosRoutingModule } from './productos-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    ItemProductoComponent,
    EditProductoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductosRoutingModule,
    HttpClientModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
