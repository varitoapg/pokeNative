import { type PokemonBasicData } from "../../types";
import type PokemonActionType from "./types";

export interface Action {
  type: PokemonActionType;
  payload?: unknown;
}

export interface GetAllPokemonAction extends Action {
  type: PokemonActionType.getAllPokemon;
  payload: PokemonBasicData[];
}
