import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Usuario } from '../shared/usuario';
import { UsuarioService } from '../shared/usuario.service';
import { EscolaridadeEnum } from '../shared/escolaridade.enum';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'sobrenome', 'email', 'dataNascimento', 'escolaridade', 'editar', 'excluir'];
  usuarios: Usuario[];
  dataSource: MatTableDataSource<Usuario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private usuarioService: UsuarioService) {
  }
  
  ngOnInit() {
    this.usuarioService.retornaUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
      this.dataSource = new MatTableDataSource(usuarios);
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  escolaridadeEnumParaString(escolaridadeEnum: EscolaridadeEnum): string {
    return EscolaridadeEnum[escolaridadeEnum].toString();
  }

}
