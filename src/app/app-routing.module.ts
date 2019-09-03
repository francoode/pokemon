import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {MissingnoGuard} from './guard/missingno.guard';
import {PokemonMissingnoComponent} from './pokemon-detail/pokemon-missingno/pokemon-missingno.component';


const routes: Routes = [
  { path: 'pokemons-list', component: PokemonListComponent },
  { path: 'pokemon/missingno', component: PokemonMissingnoComponent},
  { path: 'pokemon/:name', component: PokemonDetailComponent, canActivate: [MissingnoGuard]},
  { path: '', redirectTo: 'pokemons-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
