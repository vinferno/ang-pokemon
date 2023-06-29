import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  listPokemon$ = this.store.pokemon$;

  constructor(
    private pokemonService: PokemonService,
    private store: StoreService
  ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon();
  }
  next() {
    this.pokemonService.getNextPokemonList();
  }
  back() {
    this.pokemonService.getLastPokemonList();
  }

}
