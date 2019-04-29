import { Platform } from "react-native";
import colors from "../../styles/colors";

export default {
  buttonStyle: {
    width: 42,
    height: 42,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.theme.light.primaryBackground,
    ...Platform.select({
      ios: {
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowColor: "orange",
        shadowOffset: { width: 2, height: 3 }
      },
      android: {
        elevation: 5
      }
    })
  }
};
