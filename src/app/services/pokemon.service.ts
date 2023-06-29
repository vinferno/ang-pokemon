import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  offset = 60;
  limit = 20;
  constructor(
    private api: ApiService,
    private store: StoreService

  ) { }

  getPokemon() {
    return this.api.get(`pokemon?offset=${this.offset}&limit=${this.limit}`).subscribe((data:any) => this.store.setPokemon(data.results));
  }

  getNextPokemonList(){
    this.offset += this.limit;
    return this.getPokemon();
  }
  getLastPokemonList(){
    this.offset -= this.limit;
    return this.getPokemon();
  }
}
