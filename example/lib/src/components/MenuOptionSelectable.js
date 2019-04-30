import React, { Component } from "react";
import { Dimensions, Text, View, TouchableOpacity } from "react-native";
import MyIcon from "react-native-custom-icon";
import Divider from "./Divider";

const { width } = Dimensions.get("window");

const styles = {
  container: {
    flexDirection: "column"
  },
  iconTextContainer: {
    left: 0,
    flexDirection: "row"
  },
  itemTextStyle: {
    left: 16,
    fontSize: 15,
    alignSelf: "center",
    justifyContent: "center"
    // fontFamily: "Metropolis-Medium"
  },
  dividerStyle: {
    top: 8
  }
};

export default class MenuOptionSelectable extends Component {
  render() {
    const { item, index, length, onPress, iconConfig } = this.props;
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
            <Text style={[styles.itemTextStyle, { color: item.color }]}>
              {item.text}
            </Text>
          </View>
          {index !== length - 1 && (
            <Divider style={styles.dividerStyle} dividerWidth={width * 0.62} />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}
