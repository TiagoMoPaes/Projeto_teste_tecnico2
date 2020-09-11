import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

import { Escolaridade } from '../shared/escolaridade';
import { EscolaridadeEnum } from '../shared/escolaridade.enum';
import { UsuarioService } from '../shared/usuario.service';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  nivelEscolaridade: Escolaridade[] = [
    {value: EscolaridadeEnum.infantil, viewValue: 'Infantil'},
    {value: EscolaridadeEnum.fundamental, viewValue: 'Fundamental'},
    {value: EscolaridadeEnum.medio, viewValue: 'Médio'},
    {value: EscolaridadeEnum.superior, viewValue: 'Superior'}
  ];
  formularioUsuario: FormGroup;

  constructor(private usuarioService: UsuarioService, private _snackBar: MatSnackBar){}

  ngOnInit(){
    this.formularioUsuario = new FormGroup({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))]),
      dataNascimento: new FormControl('', Validators.required),
      escolaridade: new FormControl('', Validators.required)
    });
  }

  cadastraUsuario() {
    let usuario: Usuario = {
      id: Math.floor(Math.random() * 200) + 1,
      nome: this.formularioUsuario.controls['nome'].value,
      sobrenome: this.formularioUsuario.controls['sobrenome'].value,
      email: this.formularioUsuario.controls['email'].value,
      dataNascimento: new Date(),
      escolaridade: this.formularioUsuario.controls['escolaridade'].value
    };
    this.usuarioService.adicionaUsuario(usuario);
    this.abreSnackBar('Usuário cadastrado com sucesso !', 'OK');
  }

  abreSnackBar(mensagem: string, acao: string) {
    this._snackBar.open(mensagem, acao, {
      duration: 2000
    },
    );
  }
}
