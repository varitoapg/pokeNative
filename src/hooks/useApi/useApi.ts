import { useCallback, useContext } from "react";
import axios from "axios";
import { REACT_APP_API_URL, FIRST_GENERATION } from "@env";
import PokemonContext from "../../stores/contexts/pokemonContext/pokemonContext";
import { type PokemonResponse } from "./types";
import { type PokemonBasicData } from "../../stores/types";
import { getAllPokemonActionsCreator } from "../../stores/actions/pokemonActions/pokemonActionsCreator";

const useApi = () => {
  const { dispatch: pokemonDispatch } = useContext(PokemonContext);

  const baseUrl = REACT_APP_API_URL;
  const firstGenerationLimit = Number(FIRST_GENERATION);

  const getAllPokemon = useCallback(async () => {
    const response = await axios.get<PokemonResponse>(
      `${baseUrl}pokemon?limit=${firstGenerationLimit}&offset=0`
    );

    const { results } = response.data;

    const pokemonBasicInformation: PokemonBasicData[] = [];
    results.forEach((pokemon, index) => {
      pokemonBasicInformation.push({
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(
          index + 1
        ).toString()}.png`,
        name: pokemon.name,
        position: (index + 1).toString(),
      });
    });

    pokemonDispatch(getAllPokemonActionsCreator(pokemonBasicInformation));
  }, [pokemonDispatch, baseUrl, firstGenerationLimit]);

  return { getAllPokemon };
};

export default useApi;
