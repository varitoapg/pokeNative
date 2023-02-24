import React, { useContext, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import useApi from "../../hooks/useApi/useApi";
import PokemonContext from "../../stores/contexts/pokemonContext/pokemonContext";
import PokemonCard from "../PokemonCard/PokemonCard";

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
  return (
    <View>
      <FlatList
        data={currentPokemon}
        renderItem={({ item }) => <PokemonCard currentPokemon={item} />}
      />
    </View>
  );
};

export default Layout;
