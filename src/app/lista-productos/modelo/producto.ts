export interface Producto {
    idProducto: string;
    nombre: string;
    precioUnitario: number;
    descripcion: string;
    fabricante: string;
    categoria: string;
    unidadesEnStock: number;
    unidadesEnPedido: number;
	condiciones: string;
	disponible: boolean;
}
