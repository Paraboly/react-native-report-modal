import React, { Component } from "react";
import { Dimensions, View } from "react-native";

const { width } = Dimensions.get("window");

export default class Divider extends Component {
  renderVertical() {
    const { color, style, thickness, borderRadius, dividerWidth } = this.props;
    return (
      <View
        style={[
          {
            borderWidth: thickness || 1,
            borderRadius: borderRadius || 20,
            width: dividerWidth || width * 0.6,
            borderColor: color || "rgba(174, 184, 222, 0.2)",
            color: color || "rgba(174, 184, 222, 0.2)"
          },
          style
        ]}
      />
    );
  }

  renderHorizontal() {
    const { color, style, thickness, borderRadius, dividerWidth } = this.props;
    return (
      <View
        style={[
          {
            height: thickness || 1,
            width: dividerWidth || width * 0.6,
            borderBottomWidth: thickness || 1,
            borderWidth: thickness || 1,
            borderColor: color || "rgba(174, 184, 222, 0.2)",
            color: color || "rgba(174, 184, 222, 0.2)",
            borderRadius: borderRadius || 20
          },
          style || {
            margin: 8,
            top: 3,
            left: 8
          }
        ]}
      />
    );
  }

  render() {
    const { vertical } = this.props;
    if (vertical) {
      return this.renderVertical();
    }
    return this.renderHorizontal();
  }
}
