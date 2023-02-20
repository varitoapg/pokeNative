import React from "react";
import PokemonContextProvider from "../../stores/contexts/pokemonContext/pokemonContextProvider";
import Layout from "../Layout/Layout";

const App = (): JSX.Element => (
  <React.StrictMode>
    <PokemonContextProvider>
      <Layout />
    </PokemonContextProvider>
  </React.StrictMode>
);

export default App;
