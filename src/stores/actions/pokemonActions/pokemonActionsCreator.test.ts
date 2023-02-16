import { type PokemonBasicData } from "../../types";
import { getAllPokemonActionsCreator } from "./pokemonActionsCreator";
import PokemonActionType from "./types";

describe("Given a pokemonActionsCreator action", () => {
  describe("When its invoked getAllPokemonActionCreator with 2 pokemon basic data ", () => {
    test("Then it should return an action with 'type' with getAllPokemon and a payload with the same 2 pokemon basi data", () => {
      const pokemonEntryData: PokemonBasicData[] = [
        {
          image: "",
          name: "Articuno",
          position: 144,
        },
        {
          image: "",
          name: "Zapdos",
          position: 145,
        },
      ];

      const actionCreatorResult = getAllPokemonActionsCreator(pokemonEntryData);

      expect(actionCreatorResult).toHaveProperty(
        "type",
        PokemonActionType.getAllPokemon
      );
      expect(actionCreatorResult).toHaveProperty("payload", pokemonEntryData);
    });
  });
});
