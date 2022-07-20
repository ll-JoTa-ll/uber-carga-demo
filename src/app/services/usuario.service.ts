import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import { rejects } from 'assert';
//import { resolve } from 'dns';
import { Usuario } from '../models/usuario';
import { EmpresaRuta } from '../models/empresaRuta';
import { EmpresaRutaTransportistaProceso } from '../models/empresaRutaTransportistaProceso';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private angularFirestore: AngularFirestore) {}

  getUsuarios() {
    return this.angularFirestore.collection('usuario').snapshotChanges();
  }

  getUsuarioById(id) {
    return this.angularFirestore.collection('usuario').doc(id).valueChanges();
  }

  createUsuario(usuario: Usuario) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('usuario')
        .add(usuario)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  ////////////////////////
  ////////////////////////
  ////////////////////////
  ////////////////////////
  ////////////////////////
  ////////////////////////

  createEmpresaRuta(empresaRuta: EmpresaRuta) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('empresaRuta')
        .add(empresaRuta)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  getEmpresaRutaById(id) {
    return this.angularFirestore
      .collection('empresaRuta')
      .doc(id)
      .valueChanges();
  }

  getEmpresaRutas() {
    return this.angularFirestore.collection('empresaRuta').snapshotChanges();
  }

  updateEmpresaRuta(empresaRuta: EmpresaRuta, id) {
    return this.angularFirestore
      .collection('empresaRuta')
      .doc(id)
      .update(empresaRuta);
  }

  deleteEmpresaRuta(id) {
    return this.angularFirestore.collection('empresaRuta').doc(id).delete();
  }

  ////////////////////////
  ////////////////////////
  ////////////////////////
  ////////////////////////
  ////////////////////////
  ////////////////////////

  getEmpresaRutaTransportistaProceso() {
    return this.angularFirestore
      .collection('empresaRutaTransportistaProceso')
      .snapshotChanges();
  }

  createEmpresaRutaProceso(data: EmpresaRutaTransportistaProceso) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('empresaRutaTransportistaProceso')
        .add(data)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
}
