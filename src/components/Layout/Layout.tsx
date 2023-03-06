import React, { useContext, useEffect } from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import useApi from "../../hooks/useApi/useApi";
import PokemonContext from "../../stores/contexts/pokemonContext/pokemonContext";
import androidSafeArea from "../../styles/paddings.style";
import Header from "../Header/Header";
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
    <SafeAreaView style={androidSafeArea}>
      <Header />
      <View>
        <FlatList
          data={currentPokemon}
          renderItem={({ item }) => <PokemonCard currentPokemon={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Layout;
