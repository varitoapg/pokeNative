import React, { View, Text, Image, StyleSheet } from "react-native";
import { type PokemonBasicData } from "../../stores/types";

interface PokemonCardProps {
  currentPokemon: PokemonBasicData;
}

const PokemonCard = ({
  currentPokemon: { image, name, position },
}: PokemonCardProps) => (
  <View>
    <Image style={styles.tinyLogo} source={{ uri: image }}></Image>
    <Text>{name}</Text>
    <Text>{`# ${position}`}</Text>
  </View>
);

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default PokemonCard;
