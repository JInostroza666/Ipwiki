import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunaRoutingModule } from './comuna-routing.module';
import { ComunaComponent } from './comuna.component';


@NgModule({
  declarations: [
    ComunaComponent
  ],
  imports: [
    CommonModule,
    ComunaRoutingModule
  ]
})
export class ComunaModule { }
