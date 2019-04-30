import React from "react";
import { View } from "react-native";
import styles, { verticalStyle, horizontalStyle } from "./styles/Divider.style";

const Divider = props => {
  function renderVertical() {
    return <View style={verticalStyle(props)} />;
  }

  function renderHorizontal() {
    return (
      <View
        style={[
          horizontalStyle(props),
          horizontalStyle || styles.defaultHorizontalStyle
        ]}
      />
    );
  }

  switch (props.type) {
    case "vertical":
      return renderVertical();
    case "horizontal":
      return renderHorizontal();
    default:
      return renderHorizontal();
  }
};

export default Divider;
