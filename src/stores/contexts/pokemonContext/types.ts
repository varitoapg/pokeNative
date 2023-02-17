import { type Dispatch } from "react";
import { type Action } from "../../actions/pokemonActions/actions";
import { type CurrentPokemonState } from "../../types";

export interface PokemonContextStructure {
  currentPokemonState: CurrentPokemonState;
  dispatch: Dispatch<Action>;
}
