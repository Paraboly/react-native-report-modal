import React, { Component } from "react";
import Divider from "./Divider";
import MyIcon from "react-native-custom-icon";
import styles, { itemTextStyle } from "./styles/MenuOptionSelectable.style";
import { Dimensions, Text, View, TouchableOpacity } from "react-native";

const { width } = Dimensions.get("window");
export default class MenuOptionSelectable extends Component {
  render() {
    const {
      item,
      index,
      length,
      onPress,
      iconConfig,
      dividerWidth,
      optionFontFamily
    } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.iconTextContainer}>
            <MyIcon
              color={item.color}
              config={iconConfig}
              name={item.iconName}
              size={item.iconSize}
            />
            <Text style={itemTextStyle(optionFontFamily, item.color)}>
              {item.text}
            </Text>
          </View>
          {index !== length - 1 && (
            <Divider
              horizontalStyle={styles.dividerStyle}
              dividerWidth={dividerWidth || width * 0.62}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}
