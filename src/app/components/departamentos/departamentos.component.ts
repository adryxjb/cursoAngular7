import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "departamentosComponent",
  templateUrl: "./departamentos.component.html"
})
export class DepartamentosComponent implements OnInit {
  public titulo: string;

  constructor(private _http: HttpClient) {
    this.titulo = "Departamentos";
    this._http.get("https://jsonplaceholder.typicode.com/users").subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("Peticion finalizada");
      }
    );
  }

  ngOnInit() {}
}
