import { Component, OnInit, OnDestroy } from '@angular/core';
import { Producto } from './modelo/producto';
import { ProductosService } from './servicios/productos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit, OnDestroy {

   productos: Producto[];
   suscritor: Subscription;

  constructor(private service: ProductosService) { }

  ngOnInit(): void {
      this.loadProductos();
  }

   private loadProductos(): void{
       this.suscritor = this.service.getProductos().subscribe(
         (datos) => {
            console.log(JSON.stringify(datos));
            this.productos = datos;
         }
       );
   }

  ngOnDestroy(): void {
    this.suscritor.unsubscribe();

  }
}
