import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelo/producto';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css']
})
export class ItemProductoComponent implements OnInit {

  producto: Producto;

  constructor(private route: ActivatedRoute,
              private service: ProductosService) { }

  ngOnInit(): void {
    //leer id
    const id = this.route.snapshot.params.id;
    console.log('id es ' + id);
    this.service.getProducto(id).subscribe(
      (dato: Producto) => {
        this.producto = dato;
      }
    );
  }

}
