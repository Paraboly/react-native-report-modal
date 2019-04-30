export function verticalStyle(props) {
  const { color, thickness, borderColor, borderRadius, dividerHeight } = props;
  return {
    borderWidth: thickness || 1,
    height: dividerHeight || 125,
    borderRadius: borderRadius || 20,
    color: color || "rgba(174, 184, 222, 0.2)",
    borderColor: borderColor || "rgba(174, 184, 222, 0.2)"
  };
}

export function horizontalStyle(props) {
  const { color, thickness, borderColor, borderRadius, dividerWidth } = props;
  return {
    height: thickness || 1,
    borderWidth: thickness || 1,
    borderRadius: borderRadius || 20,
    borderBottomWidth: thickness || 1,
    width: dividerWidth || width * 0.6,
    color: color || "rgba(174, 184, 222, 0.2)",
    borderColor: borderColor || "rgba(174, 184, 222, 0.2)"
  };
}

export default {
  defaultHorizontalStyle: {
    top: 3,
    left: 8,
    margin: 8
  }
};
