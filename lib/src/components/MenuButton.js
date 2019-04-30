import React from "react";
import { Text } from "react-native";
import colors from "../styles/colors";
import Ripple from "react-native-material-ripple";
import { container, textStyle } from "./styles/MenuButton.style";

const MenuButton = props => {
  const {
    onPress,
    buttonText,
    buttonTextColor,
    buttonFontFamily,
    buttonRippleColor,
    buttonShadowColor,
    buttonBackgroundColor
  } = props;
  return (
    <Ripple
      onPress={onPress}
      rippleContainerBorderRadius={25}
      rippleColor={buttonRippleColor || colors.theme.light.primary}
      style={container(buttonShadowColor, buttonBackgroundColor)}
    >
      <Text style={textStyle(buttonFontFamily, buttonTextColor)}>
        {buttonText}
      </Text>
    </Ripple>
  );
};

export default MenuButton;
