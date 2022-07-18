import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import { rejects } from 'assert';
//import { resolve } from 'dns';
import { Usuario } from '../models/usuario';
import { EmpresaRuta } from '../models/empresaRuta';

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
}
