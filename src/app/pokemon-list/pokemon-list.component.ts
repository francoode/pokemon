import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../services/pokemon.service';
import {Pokemon} from '../models/pokemon.model';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  public filterPokemons: Pokemon[] = [];

  public search = new FormControl();


  constructor(
    private service: PokemonService
  ) {
    this.service.getAll().subscribe(
      (p) => {
        this.pokemons.push(p);
        this.filterPokemons.push(p);
      },
      (e) => console.log(e),
      () => console.log('complete'));

  }

  ngOnInit() {
    this.createFilter();
  }

  createFilter() {
    this.search.valueChanges
      .pipe(
        debounceTime(150)
      )
      .subscribe(value => {
        if (value) {
          this.filterPokemons = this.pokemons.filter( (p: Pokemon) => {
            return p.name.includes(value);
          });
        } else {
          this.filterPokemons = this.pokemons;
        }
      });
  }
}
