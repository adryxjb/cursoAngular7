import { Component, OnInit } from "@angular/core";
import { ProductoService } from "../services/producto.service";

@Component({
  selector: "homeComponent",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [ProductoService]
})
export class HomeComponent implements OnInit {
  public titulo: string;
  public catalogo: Array<string>;
  public producto: string;

  constructor(private _productoService: ProductoService) {
    this.titulo = "Home";
  }

  ngOnInit() {
    //bloque de instrucciones
    // console.log("Entro a ngOnInit");
    this.titulo = "Jugueteria";
    //obtener valor desde el servicio
    console.log(this._productoService.prueba("Pelotas"));
    this.catalogo = this._productoService.getProducto();
    console.log(this.catalogo);
  }

  guardarProducto() {
    this._productoService.addProducto(this.producto);
    this.producto = null;
  }

  borrarProducto(index: number) {
    //alert(index);
    this._productoService.deleteProducto(index);
  }
}
