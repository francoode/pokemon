import {Inject, Injectable} from '@angular/core';
import {SyncService} from './sync.service';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {mergeMap} from "rxjs/operators";
import {Pokemon} from "../models/pokemon.model";

@Injectable({
  providedIn: 'root'
})
export class PokemonService extends SyncService {

  protected urlResource = 'pokemon';
  protected pageSize = 25;
  protected pageOffset = 0;

  public pokemons: Array<Pokemon> = [];

  constructor(@Inject(HttpClient) http: HttpClient) {
    super(http);
  }


  public getAll(url?) {
    const endPoint = this.getAllEndPoint(url);
    return this.get(endPoint)
      .pipe(
        mergeMap(data => {
          const results: Array<any> = data.results;
          const obs: Array<Observable<any>> = [];

          results.forEach(e => {
            obs.push(this.get(e.url));
          });

          return forkJoin(obs);
        }),
        mergeMap((data: Array<any>) => {
          const obs: Array<Observable<any>> = [];

          data.forEach((p) => {
            const pokemonModel = Object.assign(new Pokemon(), p);
            this.pokemons.push(pokemonModel);
            obs.push(this.get(p.species.url));
          });

          return forkJoin(obs);
        }),
        mergeMap((data: Array<any>) => {
          data.forEach((sp) => {
            const idx = this.pokemons.findIndex((p) => p.name === sp.name);
            if (idx > -1) {
              this.pokemons[idx].evolvesFrom = sp.evolves_from_species;
            }
          });
          return this.pokemons;
        })
      );
  }


  getAllEndPoint(url): string {
    return (url) ? url : `${environment.url}/${this.urlResource}?offset=${this.pageOffset}&limit=${this.pageSize}`;
  }


}
