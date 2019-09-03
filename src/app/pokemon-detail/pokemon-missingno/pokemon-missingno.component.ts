import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-missingno',
  templateUrl: './pokemon-missingno.component.html',
  styleUrls: ['./pokemon-missingno.component.scss']
})
export class PokemonMissingnoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['pokemons-list']);
    }, 5000);
  }

}
