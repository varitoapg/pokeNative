import React, { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { type PokemonBasicData } from "../../stores/types";
import fonts from "../../styles/font.style";
import colours from "../../styles/colours.style";

interface PokemonCardProps {
  currentPokemon: PokemonBasicData;
}

const PokemonCard = ({
  currentPokemon: { image, name, position },
}: PokemonCardProps) => (
  <View style={styles.pokemonContainer}>
    <LinearGradient
      colors={["red", " rgba(255, 255, 255, 1)"]}
      style={styles.gradientContainer}
    >
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{`# ${position}`}</Text>
      <Image style={styles.tinyLogo} source={{ uri: image }}></Image>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  pokemonContainer: {
    margin: 10,
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  gradientContainer: {
    margin: 10,
    borderWidth: 2,
    padding: 10,
    alignItems: "center",
    minWidth: 300,
    maxWidth: 360,
    borderRadius: 20,
    borderColor: colours.whites.darkest,
  },
  tinyLogo: {
    width: 150,
    aspectRatio: 1,
  },

  title: {
    textTransform: "capitalize",
    fontSize: fonts.sizes.display,
    color: colours.whites.base,
    fontWeight: "800",
  },
});

export default PokemonCard;
