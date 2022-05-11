import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';
import { ExtratoComponent } from "./extrato/extrato.component";
import { NovaTransferenciaComponent } from "./nova-transferencia/nova-transferencia.component";

  // criando uma lista de rotas para passar a lista para o fourRoot
  export const routes: Routes = [
    {path:'', redirectTo: 'extrato', pathMatch: 'full'},
    {path: 'extrato', component: ExtratoComponent},
    {path: 'nova-transferencia' , component: NovaTransferenciaComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot = utilizando rotas no módulo principal da aplicação
  exports: [RouterModule]
})
export class AppRoutingModule {

}
