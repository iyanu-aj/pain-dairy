import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.white,
    background: colors.white,
    border: colors.white,
    notification: colors.orange,
    card: colors.primary,
    text: colors.white
  },
};
