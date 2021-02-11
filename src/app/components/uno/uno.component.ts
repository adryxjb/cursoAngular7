import { Component } from "@angular/core";

@Component({
  selector: "unoComponent",
  templateUrl: "./uno.component.html",
  styleUrls: ["./uno.component.css"]
})
export class UnoComponent {
  public titulo: string;
  public producto: string; //Input
  public datosHijo; //Output

  constructor() {
    this.titulo = "Mis tiendas";
  }

  verDatosDos(event) {
    console.log("Evento en UnoComponent: ", event);
    this.datosHijo = event;
  }
}
