import React, { useReducer } from "react";
import pokemonReducer from "../../reducers/pokemonReducer/pokemonReducer";
import { type CurrentPokemonState } from "../../types";
import PokemonContext from "./pokemonContext";

interface PokemonContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PokemonContextProvider = ({
  children,
}: PokemonContextProviderProps): JSX.Element => {
  const [currentPokemonState, dispatch] = useReducer(pokemonReducer, {
    currentPokemon: [],
  } as CurrentPokemonState);

  return (
    <PokemonContext.Provider value={{ currentPokemonState, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
