import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmarRutaComponent } from './components/empresa/confirmar-ruta/confirmar-ruta.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { IngresarDatosTransComponent } from './components/empresa/ingresar-datos-trans/ingresar-datos-trans.component';
import { MetricasComponent } from './components/empresa/metricas/metricas.component';
import { MisViajesComponent } from './components/empresa/mis-viajes/mis-viajes.component';
import { SolicitudRegistradaComponent } from './components/empresa/solicitud-registrada/solicitud-registrada.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, runGuardsAndResolvers: 'always' },
  {
    path: 'empresa',
    component: EmpresaComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'empresa/ingresar-ruta',
    component: IngresarDatosTransComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'empresa/confirmar-ruta',
    component: ConfirmarRutaComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'empresa/ruta-registrada',
    component: SolicitudRegistradaComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'empresa/mis-viajes',
    component: MisViajesComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'empresa/metricas',
    component: MetricasComponent,
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
