import { listOfTwoPokemon } from "../../../mocks/mockPokemon";
import { type Action } from "../../actions/pokemonActions/actions";
import { getAllPokemonActionsCreator } from "../../actions/pokemonActions/pokemonActionsCreator";
import PokemonActionType from "../../actions/pokemonActions/types";
import { type CurrentPokemonState } from "../../types";
import pokemonReducer from "./pokemonReducer";

describe("Given a function pokemonReducer", () => {
  describe("When it receives a list of pokemons", () => {
    const pokemon = listOfTwoPokemon;
    const currentPokemonState: CurrentPokemonState = {
      currentPokemon: [pokemon[0]],
    };

    describe("And a getAllPokemon as action", () => {
      test("Then it should return the same list of pokemon", () => {
        const getAllPokemonActionTest = getAllPokemonActionsCreator(pokemon);
        const newListOfPokemon = pokemonReducer(
          currentPokemonState,
          getAllPokemonActionTest
        );

        const expectedPokemonState: CurrentPokemonState = {
          currentPokemon: pokemon,
        };

        expect(newListOfPokemon).toStrictEqual(expectedPokemonState);
      });
    });

    describe("And it receives no action", () => {
      test("Then it should return the current  list of pokemon", () => {
        const action: Action = {
          type: PokemonActionType.unknownAction,
        };
        const listOfPokemon = pokemonReducer(currentPokemonState, action);

        expect(listOfPokemon).toStrictEqual(currentPokemonState);
      });
    });
  });
});
