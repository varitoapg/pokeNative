import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import useApi from "../../hooks/useApi";
import PokemonContext from "../../stores/contexts/pokemonContext/pokemonContext";

const Layout = (): JSX.Element => {
  const { getAllPokemon } = useApi();

  const {
    currentPokemonState: { currentPokemon },
  } = useContext(PokemonContext);

  useEffect(() => {
    (async () => {
      await getAllPokemon();
    })();
  }, [getAllPokemon]);
  return <View>{<Text>{currentPokemon[141]?.name}</Text>}</View>;
};

export default Layout;
