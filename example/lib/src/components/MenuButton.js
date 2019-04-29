import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import Ripple from "react-native-material-ripple";
// Styles
import colors from "../styles/colors";
import styles from "./styles/MenuButton.style";

export default class MenuButton extends Component {
  render() {
    const { color, text, onPress } = this.props;
    return (
      <Ripple
        rippleColor={color || colors.theme.light.primary}
        rippleContainerBorderRadius={25}
        style={[
          styles.rippleStyles,
          {
            backgroundColor: colors.theme.light.primaryBackground,
            ...Platform.select({
              ios: {
                shadowRadius: 5,
                shadowOpacity: 0.4,
                shadowOffset: { width: 2, height: 2 },
                shadowColor: color || colors.theme.light.primary
              },
              android: {
                elevation: 5
              }
            })
          }
        ]}
        onPress={onPress}
      >
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.textStyle,
              { color: color || colors.theme.light.primary }
            ]}
          >
            {text}
          </Text>
        </View>
      </Ripple>
    );
  }
}
