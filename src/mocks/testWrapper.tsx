import React from "react";
import PokemonContext from "../stores/contexts/pokemonContext/pokemonContext";
import { type PokemonContextStructure } from "../stores/contexts/pokemonContext/types";
import { listOfTwoPokemon } from "./mockPokemon";

interface TestWrapperProps {
  children: JSX.Element | JSX.Element[];
}

export const mockValueTestWrapper: PokemonContextStructure = {
  currentPokemonState: {
    currentPokemon: listOfTwoPokemon,
  },
  dispatch: jest.fn(),
};

export const TestWrapper = ({ children }: TestWrapperProps): JSX.Element => (
  <PokemonContext.Provider value={mockValueTestWrapper}>
    {children}
  </PokemonContext.Provider>
);
