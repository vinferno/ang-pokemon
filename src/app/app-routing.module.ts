import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TocComponent } from './pages/toc/toc.component';

const routes: Routes = [
  {path: 'pokemon', loadChildren: () => import('./pages/pokemon/pokemon.module').then(m => m.PokemonModule)},
  { path: 'berry', loadChildren: () => import('./pages/berry/berry.module').then(m => m.BerryModule) },
  { path: 'toc', component: TocComponent  },
  {path: '', component: LoginComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
