import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: Usuario[] = [];

  constructor() {
   }

  adicionaUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  retornaUsuarios(): Observable<Usuario[]>{
    return of(this.usuarios);
  }
}
