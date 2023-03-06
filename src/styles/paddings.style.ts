import { Platform } from "react-native";

export const androidSafeArea = {
  flex: 1,
  paddingTop: Platform.OS === "android" ? 25 : 0,
};
