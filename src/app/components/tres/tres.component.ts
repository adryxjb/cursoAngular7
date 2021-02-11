import { Component } from "@angular/core";
import { Producto } from "./producto";

@Component({
  selector: "tresComponent",
  templateUrl: "./tres.component.html",
  styleUrls: ["./tres.component.css"]
})
export class TresComponent {
  public titulo: string;
  public producto: Producto;
  public productos: Array<Producto>;

  constructor() {
    this.titulo = "Tienda";
    this.producto = new Producto("Lavadora", "LG", 8000, true);
    this.productos = [
      new Producto("Licuadora", "Oster", 800, true),
      new Producto("Sandwichera", "Oster", 500, true),
      new Producto("Pantalla", "Samsung", 8000, false),
      new Producto("Cafetera", "Mr.Coffee", 3000, true),
      new Producto("Batidora", "Osterizer", 6000, false)
    ];
  }
}
