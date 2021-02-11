/* 
//Servicio basico
import { Injectable } from "@angular/core";

@Injectable()
export class ProductoService {
  public nombre_producto = "Mantecada";

  prueba() {
    return this.nombre_producto;
  }
} */

import { Injectable } from "@angular/core";

@Injectable()
export class ProductoService {
  public nombre_producto = "Mantecada";
  //Coleccion en un Array
  public catalogo = [
    "Biciletas",
    "Muñecas",
    "Videjuegos",
    "Funkos",
    "Figuras de Accion"
  ];

  prueba(nombre_producto) {
    return nombre_producto;
  }

  getProducto(): Array<string> {
    return this.catalogo;
  }

  addProducto(nombre_producto: string) {
    this.catalogo.push(nombre_producto);
    return this.catalogo;
  }

  deleteProducto(index: number): Array<string> {
    this.catalogo.splice(index, 1);
    return this.catalogo;
  }
}
