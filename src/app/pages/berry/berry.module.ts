import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BerryRoutingModule } from './berry-routing.module';
import { BerryComponent } from './berry.component';


@NgModule({
  declarations: [
    BerryComponent
  ],
  imports: [
    CommonModule,
    BerryRoutingModule
  ]
})
export class BerryModule { }
