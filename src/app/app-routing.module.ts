import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmarRutaComponent } from './components/empresa/confirmar-ruta/confirmar-ruta.component';
import { ElegirTransportistaComponent } from './components/empresa/elegir-transportista/elegir-transportista.component';
import { ElegisteTransporteComponent } from './components/empresa/elegiste-transporte/elegiste-transporte.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { EncontramosTrasportesComponent } from './components/empresa/encontramos-trasportes/encontramos-trasportes.component';
import { EstableceTurnoComponent } from './components/empresa/establece-turno/establece-turno.component';
import { IngresarDatosTransComponent } from './components/empresa/ingresar-datos-trans/ingresar-datos-trans.component';
import { MetricasComponent } from './components/empresa/metricas/metricas.component';
import { MisViajesComponent } from './components/empresa/mis-viajes/mis-viajes.component';
import { ServicioFinalizadoComponent } from './components/empresa/servicio-finalizado/servicio-finalizado.component';
import { SolicitudCargaComponent } from './components/empresa/solicitud-carga/solicitud-carga.component';
import { SolicitudRegistradaComponent } from './components/empresa/solicitud-registrada/solicitud-registrada.component';
import { LoginComponent } from './components/login/login.component';
import { AceptarOfertaComponent } from './components/transportista/aceptar-oferta/aceptar-oferta.component';
import { CargueAgendadoComponent } from './components/transportista/cargue-agendado/cargue-agendado.component';
import { CargueFinalizadoComponent } from './components/transportista/cargue-finalizado/cargue-finalizado.component';
import { CargueNroCargaComponent } from './components/transportista/cargue-nro-carga/cargue-nro-carga.component';
import { CarguePagoRecibidoComponent } from './components/transportista/cargue-pago-recibido/cargue-pago-recibido.component';
import { RutasOfertasComponent } from './components/transportista/rutas-ofertas/rutas-ofertas.component';
import { TransportistaComponent } from './components/transportista/transportista.component';

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
  {
    path: 'empresa/elegir',
    component: ElegirTransportistaComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'empresa/transportistas-lista',
    component: EncontramosTrasportesComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'empresa/elegiste-transporte',
    component: ElegisteTransporteComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'empresa/establece-turno',
    component: EstableceTurnoComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'empresa/solicitud-carga',
    component: SolicitudCargaComponent,
    runGuardsAndResolvers: 'always',
  },

  {
    path: 'empresa/servicio-fin',
    component: ServicioFinalizadoComponent,
    runGuardsAndResolvers: 'always',
  },

  {
    path: 'transporte',
    component: TransportistaComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'transporte/ofertas',
    component: RutasOfertasComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'transporte/oferta-enviada',
    component: AceptarOfertaComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'transporte/cargue-agendado',
    component: CargueAgendadoComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'transporte/cargue-nro-carga',
    component: CargueNroCargaComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'transporte/cargue-finalizado',
    component: CargueFinalizadoComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'transporte/cargue-pago-recibido',
    component: CarguePagoRecibidoComponent,
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
