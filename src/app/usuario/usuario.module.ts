import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './usuario.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatSnackBar } from '@angular/material/snack-bar';



@NgModule({
  declarations: [CadastroUsuarioComponent, ListaUsuariosComponent, UsuarioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    AppRoutingModule,
    MatIconModule
  ],
  exports: [
    CadastroUsuarioComponent,
    ListaUsuariosComponent,
    UsuarioComponent
  ],
  providers: [
    MatSnackBar
  ]
})
export class UsuarioModule { }
