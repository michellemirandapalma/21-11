import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DoscamposComponent } from './doscampos/doscampos.component';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent
  },
  {
    path: '',
    component: DoscamposComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
