import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../modelo/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private urlBase = 'http://localhost:8080/tienda-online/rest/productos';

  constructor(private http:HttpClient) { }

   //lista de todos los productos
   //GET ALL
  public getProductos(): Observable<Producto[]>{
       return this.http.get<Producto[]>(this.urlBase);
  }

    //GET  by Id
  public getProducto(id: string): Observable<Producto>{
     const url = `${this.urlBase}/${id}`;
     return this.http.get<Producto>(url);
  }
   
  //nuevo
   //POST
  public createProduct(producto: Producto): Observable<Producto> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const obs = this.http.post<Producto>(this.urlBase, producto, httpOptions);

    return obs;
  }

  //UPDATE
  public updateProducto(producto: Producto): Observable<Producto>{
     const url = `${this.urlBase}/${producto.idProducto}`;
     const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
     };
    const obs = this.http.put<Producto>(url, producto, httpOptions);
    return obs;
  }

   //DELETE
  public deleteProducto(id: string): Observable<string>{
    const url = `${this.urlBase}/${id}`;
    const obs = this.http.delete<string>(url);
    return obs;
  }

}
