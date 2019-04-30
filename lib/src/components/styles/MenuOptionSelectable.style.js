export function itemTextStyle(optionFontFamily, optionColor) {
  return {
    left: 16,
    fontSize: 15,
    color: optionColor,
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: optionFontFamily
  };
}

export default {
  container: {
    flexDirection: "column"
  },
  iconTextContainer: {
    left: 0,
    flexDirection: "row"
  },

  dividerStyle: {
    top: 8
  }
};
