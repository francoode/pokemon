import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../models/pokemon.model";

@Component({
  selector: 'app-pokemon-element',
  templateUrl: './pokemon-element.component.html',
  styleUrls: ['./pokemon-element.component.scss']
})
export class PokemonElementComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() {
  }

  ngOnInit() {
  }

  public getTypeClass(pokemon: Pokemon) {
    const types = [];
    pokemon.types.forEach(t => {
      types.push(t.type.name);
    });

    if (types.includes('water')) {
      return 'back-water';
    } else if (types.includes('fire')) {
      return 'back-fire';
    } else if (types.includes('flying')) {
      return 'back-fly';
    } else if (types.includes('grass')) {
      return 'back-grass';
    } else if (types.includes('electric')) {
      return 'back-electric';
    } else if (types.includes('poison')) {
      return 'back-poison';
    } else {
      return 'back-generic';
    }
  }

}
