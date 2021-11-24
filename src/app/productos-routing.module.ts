import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { EditProductoComponent } from './lista-productos/edit-producto/edit-producto.component';
import { HomeComponent } from './home/home.component';
import { ItemProductoComponent } from './lista-productos/item-producto/item-producto.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'productos/:id', component: ItemProductoComponent },
  { path: 'productos/nuevo', component: EditProductoComponent },
  { path: 'productos/editar/:id', component: EditProductoComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
