import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar componentes
import { HomeComponent } from "./components/home/home.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { DepartamentosComponent } from "./components/departamentos/departamentos.component";

//Definit las rutas
const appRoutes: Routes = [
  //cuando la ruta esta vacia
  { path: "", component: HomeComponent },
  //cuando se pone el nombe el nombre del componente en la ruta
  { path: "departamentos", component: DepartamentosComponent },
  { path: "productos", component: ProductosComponent },
  { path: "contacto", component: ContactoComponent },
  //cuando se pone un componente que no existe
  { path: "**", component: HomeComponent }
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
