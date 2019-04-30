import { Platform } from "react-native";
import colors from "../../styles/colors";

export function container(buttonShadowColor, buttonBackgroundColor) {
  return {
    margin: 8,
    width: 100,
    height: 35,
    bottom: 24,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:
      buttonBackgroundColor || colors.theme.light.primaryBackground,
    ...Platform.select({
      ios: {
        shadowRadius: 5,
        shadowOpacity: 0.4,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: buttonShadowColor || colors.theme.light.primaryDark
      },
      android: {
        elevation: 5
      }
    })
  };
}

export function textStyle(buttonFontFamily, buttonTextColor) {
  return {
    fontSize: 14,
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    color: buttonTextColor || colors.theme.light.primaryDark,
    fontFamily: buttonFontFamily,
    ...Platform.select({
      ios: {
        bottom: 0
      },
      android: {
        bottom: 3
      }
    })
  };
}
