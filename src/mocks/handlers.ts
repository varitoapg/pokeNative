import { rest } from "msw";
import { REACT_APP_API_URL } from "@env";
import { listOfTwoPokemon } from "./mockPokemon";

export const handlers = [
  rest.get(`${REACT_APP_API_URL}pokemon`, (req, res, ctx) =>
    res(
      ctx.status(200),

      ctx.json({ results: listOfTwoPokemon })
    )
  ),
];
