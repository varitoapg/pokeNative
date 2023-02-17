import { createContext } from "react";
import { type PokemonContextStructure } from "./types";

// eslint-disable-next-line @typescript-eslint/naming-convention
const PokemonContext = createContext<PokemonContextStructure>(
  {} as PokemonContextStructure
);

export default PokemonContext;
