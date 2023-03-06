import React, { Text, View, StyleSheet } from "react-native";
import colours from "../../styles/colours.style";
import fonts from "../../styles/font.style";

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.title}>PokeNative</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
  },

  title: {
    fontSize: fonts.sizes.display,
    color: colours.primary.base,
    textAlign: "center",
  },
});

export default Header;
