import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { ListaUsuariosComponent } from './usuario/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/cadastro', pathMatch: 'full'},
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'lista', component: ListaUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
