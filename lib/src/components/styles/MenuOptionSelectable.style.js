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
    paddingBottom: 8,
    flexDirection: "row"
  },
  dividerStyle: {
    marginTop: 0
  }
};
