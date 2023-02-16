export interface PokemonBasicData {
  name: string;
  position: number;
  image: string;
}

export interface CurrentPokemonState {
  currentPokemon: PokemonBasicData[];
}
