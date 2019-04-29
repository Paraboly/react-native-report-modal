import { Dimensions, Platform } from "react-native";
import colors from "./styles/colors";

const { width, height } = Dimensions.get("window");

export function _modalContainer(modalWidth, modalHeight) {
  return {
    height: modalHeight || 350,
    width: modalWidth || width * 0.75,
    ...Platform.select({
      ios: {
        bottom: height * 0.45
      },
      android: {
        bottom: height * 0.5
      }
    })
  };
}
export default {
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.theme.light.primaryBackground
  },
  modalShadowStyle: {
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: colors.theme.light.shadowColor
  },
  container: {
    borderRadius: 18,
    backgroundColor: "transparent"
  },
  containerGlue: { flexDirection: "column" },
  titleContainer: {
    margin: 16
  },
  textStyle: {
    fontSize: 20,
    fontFamily: "Metropolis-Medium",
    color: colors.theme.light.primaryDark
  },
  menuOptionsContainer: {
    flex: 1,
    flexDirection: "column"
  },
  buttonStyle: {
    flexDirection: "row",
    alignSelf: "flex-end"
  },
  menuOptionsPadding: { padding: 8 }
};
