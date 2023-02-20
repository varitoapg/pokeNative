import useApi from "./useApi";
import { renderHook } from "@testing-library/react-native";
import { mockValueTestWrapper, TestWrapper } from "../../mocks/testWrapper";
import { getAllPokemonActionsCreator } from "../../stores/actions/pokemonActions/pokemonActionsCreator";
import { listOfTwoPokemon } from "../../mocks/mockPokemon";

const { dispatch: pokemonDispatchTest } = mockValueTestWrapper;

describe("Given the useApi custom hook", () => {
  describe("When its funcition, getAllPokemon, its called", () => {
    test("Then pokemonDispatch should be called", async () => {
      const testDispatchAction = getAllPokemonActionsCreator(listOfTwoPokemon);

      const { result } = renderHook(() => useApi(), {
        wrapper: TestWrapper,
      });

      await result.current.getAllPokemon();

      expect(pokemonDispatchTest).toHaveBeenCalledWith(testDispatchAction);
    });
  });
});
