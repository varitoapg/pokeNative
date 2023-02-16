import {
  type GetAllPokemonAction,
  type Action,
} from "../../actions/pokemonActions/actions";
import PokemonActionType from "../../actions/pokemonActions/types";
import { type CurrentPokemonState } from "../../types";

const pokemonReducer = (
  currentPokemonState: CurrentPokemonState,
  action: Action
): CurrentPokemonState => {
  let newPokemonState: CurrentPokemonState;

  if (action.type === PokemonActionType.getAllPokemon) {
    newPokemonState = {
      ...currentPokemonState,
      currentPokemon: (action as GetAllPokemonAction).payload,
    };
  } else {
    newPokemonState = { ...currentPokemonState };
  }

  return newPokemonState;
};

export default pokemonReducer;
