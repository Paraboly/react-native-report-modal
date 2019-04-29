import { Platform } from "react-native";

export default {
  rippleStyles: {
    margin: 8,
    width: 100,
    height: 35,
    bottom: 24,
    borderRadius: 35
  },
  textContainer: {
    top: 10,
    alignSelf: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Metropolis-Medium",
    ...Platform.select({
      ios: {
        bottom: 0
      },
      android: {
        bottom: 3
      }
    })
  }
};
