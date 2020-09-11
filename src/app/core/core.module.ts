import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
