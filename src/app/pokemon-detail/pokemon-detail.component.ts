import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonService} from "../services/pokemon.service";
import {Pokemon} from "../models/pokemon.model";
import {ErrorService} from "../services/error.service";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon;

  imageObject: Array<object> = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: PokemonService,
              private errorService: ErrorService) {
  }

  ngOnInit() {
    this.setPokemon();
  }

  setPokemon() {
    const name = this.route.snapshot.paramMap.get('name');
    const indx = this.service.pokemons.findIndex(e => {
      return e.name === name;
    });

    if (indx > -1) {
      this.pokemon = this.service.pokemons[indx];

      Object.keys(this.pokemon.sprites).forEach(key => {
        if (this.pokemon.sprites[key]) {
          this.imageObject.push({
            image: this.pokemon.sprites[key],
            thumbImage: this.pokemon.sprites[key],
            alt: key,
            title: key
          });
        }
      });
    } else {
      this.errorService.sendError('No se encontró pokemon');
      this.router.navigate(['pokemons-list']);
    }
  }
}
