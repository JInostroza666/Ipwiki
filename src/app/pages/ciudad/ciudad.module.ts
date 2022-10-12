import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiudadRoutingModule } from './ciudad-routing.module';
import { CiudadComponent } from './ciudad.component';


@NgModule({
  declarations: [
    CiudadComponent
  ],
  imports: [
    CommonModule,
    CiudadRoutingModule
  ]
})
export class CiudadModule { }
