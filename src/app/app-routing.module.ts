import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {Pokemon} from "./models/pokemon.model";
import {PokemonComponent} from "./pokemon/pokemon.component";


const routes: Routes = [
  { path: 'pokemons-list', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: '', redirectTo: 'pokemons-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
