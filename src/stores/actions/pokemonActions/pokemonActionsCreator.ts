import { type PokemonBasicData } from "../../types";
import { type GetAllPokemonAction } from "./actions";
import PokemonActionType from "./types";

export const getAllPokemonActionsCreator = (
  pokemon: PokemonBasicData[]
): GetAllPokemonAction => ({
  type: PokemonActionType.getAllPokemon,
  payload: pokemon,
});
