export interface PokemonBasicData {
  name: string;
  position: string;
  image: string;
}

export interface CurrentPokemonState {
  currentPokemon: PokemonBasicData[];
}
