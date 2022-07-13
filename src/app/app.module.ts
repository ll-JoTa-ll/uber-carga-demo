import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TransportistaComponent } from './components/transportista/transportista.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { IngresarDatosTransComponent } from './components/empresa/ingresar-datos-trans/ingresar-datos-trans.component';
import { ConfirmarRutaComponent } from './components/empresa/confirmar-ruta/confirmar-ruta.component';
import { SolicitudRegistradaComponent } from './components/empresa/solicitud-registrada/solicitud-registrada.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TransportistaComponent,
    EmpresaComponent,
    IngresarDatosTransComponent,
    ConfirmarRutaComponent,
    SolicitudRegistradaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    TabsModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
