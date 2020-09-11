import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  links = 
  [
    {
    path: 'cadastro',
    nome: 'Cadastrar Usuário'
    },
    {
    path: 'lista',
    nome: 'Listar Usuários'
    }
  ];
  activeLink = this.links[0].path;

  constructor() { }

  ngOnInit(): void {
  }

}
