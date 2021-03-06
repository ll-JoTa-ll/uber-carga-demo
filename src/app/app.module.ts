import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from 'src/environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TransportistaComponent } from './components/transportista/transportista.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { IngresarDatosTransComponent } from './components/empresa/ingresar-datos-trans/ingresar-datos-trans.component';
import { ConfirmarRutaComponent } from './components/empresa/confirmar-ruta/confirmar-ruta.component';
import { SolicitudRegistradaComponent } from './components/empresa/solicitud-registrada/solicitud-registrada.component';
import { MisViajesComponent } from './components/empresa/mis-viajes/mis-viajes.component';
import { MetricasComponent } from './components/empresa/metricas/metricas.component';
import { RutasOfertasComponent } from './components/transportista/rutas-ofertas/rutas-ofertas.component';
import { AceptarOfertaComponent } from './components/transportista/aceptar-oferta/aceptar-oferta.component';
import { ElegirTransportistaComponent } from './components/empresa/elegir-transportista/elegir-transportista.component';
import { EncontramosTrasportesComponent } from './components/empresa/encontramos-trasportes/encontramos-trasportes.component';
import { ElegisteTransporteComponent } from './components/empresa/elegiste-transporte/elegiste-transporte.component';
import { EstableceTurnoComponent } from './components/empresa/establece-turno/establece-turno.component';
import { SolicitudCargaComponent } from './components/empresa/solicitud-carga/solicitud-carga.component';
import { ServicioFinalizadoComponent } from './components/empresa/servicio-finalizado/servicio-finalizado.component';
import { CargueAgendadoComponent } from './components/transportista/cargue-agendado/cargue-agendado.component';
import { CargueNroCargaComponent } from './components/transportista/cargue-nro-carga/cargue-nro-carga.component';
import { CargueFinalizadoComponent } from './components/transportista/cargue-finalizado/cargue-finalizado.component';
import { CarguePagoRecibidoComponent } from './components/transportista/cargue-pago-recibido/cargue-pago-recibido.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PersonaNaturalComponent } from './components/registro/persona-natural/persona-natural.component';
import { EmpresaRegComponent } from './components/registro/empresa-reg/empresa-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TransportistaComponent,
    EmpresaComponent,
    IngresarDatosTransComponent,
    ConfirmarRutaComponent,
    SolicitudRegistradaComponent,
    MisViajesComponent,
    MetricasComponent,
    RutasOfertasComponent,
    AceptarOfertaComponent,
    ElegirTransportistaComponent,
    EncontramosTrasportesComponent,
    ElegisteTransporteComponent,
    EstableceTurnoComponent,
    SolicitudCargaComponent,
    ServicioFinalizadoComponent,
    CargueAgendadoComponent,
    CargueNroCargaComponent,
    CargueFinalizadoComponent,
    CarguePagoRecibidoComponent,
    RegistroComponent,
    PersonaNaturalComponent,
    EmpresaRegComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TabsModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxSpinnerModule,
    BsDatepickerModule.forRoot(),
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
