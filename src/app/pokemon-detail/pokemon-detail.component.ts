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

  imageObject: Array<object> = [];

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
      console.log(this.pokemon);

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
      this.router.navigate(['pokemons-list']);
    }
  }


  // sprites:
  //   back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
  // back_female: null
  // back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png"
  // back_shiny_female: null
  // front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  // front_female: null
  // front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png"
  // front_shiny_female: null
}
