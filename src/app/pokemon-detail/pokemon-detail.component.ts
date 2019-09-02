import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonService} from "../services/pokemon.service";
import {Pokemon} from "../models/pokemon.model";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: PokemonService) {
  }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    const indx = this.service.pokemons.findIndex(e => {
      return e.name === name;
    });

    if (indx > -1) {
      this.pokemon = this.service.pokemons[indx];
    } else {
      this.router.navigate(['pokemons-list']);
    }
  }

}
