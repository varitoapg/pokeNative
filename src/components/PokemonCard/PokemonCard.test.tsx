import React from "@testing-library/react";
import { screen, render } from "@testing-library/react-native";
import { listOfTwoPokemon } from "../../mocks/mockPokemon";
import { TestWrapper } from "../../mocks/testWrapper";
import PokemonCard from "./PokemonCard";

describe("Given the PokemonCard component", () => {
  describe("When its rendered with basic information of a Pokemon (name, image and position)", () => {
    test("Then it should show two titles with name and pokemon's position and its image", () => {
      const pokemonName = listOfTwoPokemon[0].name;
      const imageLabelText = `${pokemonName} image`;
      const pokemonPosition = `# ${listOfTwoPokemon[0].position}`;

      render(<PokemonCard currentPokemon={listOfTwoPokemon[0]} />, {
        wrapper: TestWrapper,
      });

      const expectedTitle = screen.queryByText(pokemonName) as HTMLElement;
      const expectedPosition = screen.queryByText(
        pokemonPosition
      ) as HTMLElement;
      const expectedImage = screen.queryByLabelText(
        imageLabelText
      ) as HTMLImageElement;

      expect(expectedTitle).toBeDefined();
      expect(expectedPosition).toBeDefined();
      expect(expectedImage).toBeDefined();
    });
  });
});
