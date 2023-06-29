import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerryComponent } from './berry.component';

const routes: Routes = [
  {path: '', component: BerryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BerryRoutingModule { }
