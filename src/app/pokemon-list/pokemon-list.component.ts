import {Component, OnInit} from '@angular/core';
import {SyncService} from '../services/sync.service';
import {PokemonService} from '../services/pokemon.service';
import {Pokemon} from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons: Pokemon[] = [];

  constructor(
    private service: PokemonService
  ) {

    this.service.getAll().subscribe((p) => {
      this.pokemons.push(p);
    });

  }

  ngOnInit() {
  }

}
