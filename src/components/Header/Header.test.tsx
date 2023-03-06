import React from "@testing-library/react";
import { screen, render } from "@testing-library/react-native";
import { TestWrapper } from "../../mocks/testWrapper";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When its rendered", () => {
    test("Then it should show a title with 'Pokenative'", () => {
      const headerTitle = /pokenative:/i;

      render(<Header />, {
        wrapper: TestWrapper,
      });

      const expectedTitle = screen.queryByText(headerTitle) as HTMLElement;

      expect(expectedTitle).toBeDefined();
    });
  });
});
