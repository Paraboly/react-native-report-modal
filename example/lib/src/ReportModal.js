import _ from "lodash";
import React, { Component } from "react";
import colors from "./styles/colors";
import MenuButton from "./components/MenuButton";
import { View, Text, Easing } from "react-native";
import Modal from "@paraboly/react-native-modal-box";
import MenuOptionSelectable from "./components/MenuOptionSelectable";
import styles, { _modalContainer, titleContainer } from "./ReportModal.style";

class ReportModal extends Component {
  constructor(props) {
    super(props);
    this.state = { location: null, selectedItems: [] };
  }

  close() {
    this.refs.reportmodal.close();
  }

  onSelect(item, index) {
    item.isSelect = !item.isSelect;
    const color = item.isSelect ? colors.theme.light.primary : "#b2b6c4";
    item.color = color;

    const indexOf = this.state.selectedItems.findIndex(
      item => item.id === index
    );

    if (indexOf === -1) {
      this.setState(
        state => {
          const selectedItems = [...state.selectedItems, item];

          return {
            selectedItems
          };
        },
        () => {
          this.forceUpdate();
        }
      );
    } else {
      this.setState(
        state => {
          const selectedItems = state.selectedItems.filter(
            item => item.id !== indexOf
          );

          console.log("REMOVE ITEM: ", selectedItems);
          return {
            selectedItems
          };
        },
        () => {
          this.forceUpdate();
        }
      );
    }
  }

  renderMenuOptions(
    item,
    index,
    length,
    iconConfig,
    dividerWidth,
    optionFontFamily
  ) {
    return (
      <View key={index} style={styles.menuOptionsPadding}>
        <MenuOptionSelectable
          item={item}
          index={index}
          length={length}
          iconConfig={iconConfig}
          dividerWidth={dividerWidth}
          optionFontFamily={optionFontFamily}
          onPress={() => {
            this.onSelect(item, index);
          }}
        />
      </View>
    );
  }

  render() {
    const {
      title,
      refName,
      onPress,
      iconConfig,
      modalWidth,
      titleStyle,
      buttonText,
      buttonStyle,
      modalHeight,
      menuOptions,
      dividerWidth,
      buttonTextColor,
      buttonFontFamily,
      optionFontFamily,
      buttonRippleColor,
      buttonShadowColor,
      buttonBackgroundColor
    } = this.props;

    return (
      <Modal
        backdrop
        isOpen={true}
        easing={Easing.elastic(0.5)}
        ref={refName || "reportmodal"}
        style={[
          styles.modalContainer,
          styles.modalShadowStyle,
          _modalContainer(modalWidth, modalHeight)
        ]}
      >
        <View style={styles.container}>
          <View style={styles.containerGlue}>
            <View style={titleStyle || titleContainer(modalWidth)}>
              <Text style={styles.textStyle}>
                {title || "Sorununuzu Bildirin"}
              </Text>
            </View>
            <View style={styles.menuOptionsContainer}>
              {menuOptions &&
                menuOptions.map((item, index) =>
                  this.renderMenuOptions(
                    item,
                    index,
                    menuOptions.length,
                    iconConfig,
                    dividerWidth,
                    optionFontFamily
                  )
                )}
            </View>
            <View style={buttonStyle || styles.buttonStyle}>
              <MenuButton
                buttonText={buttonText}
                buttonTextColor={buttonTextColor}
                buttonFontFamily={buttonFontFamily}
                buttonRippleColor={buttonRippleColor}
                buttonShadowColor={buttonShadowColor}
                buttonTextColor={colors.theme.light.primary}
                buttonBackgroundColor={buttonBackgroundColor}
                buttonShadowColor={colors.theme.light.primary}
                onPress={() => {
                  if (onPress) {
                    this.close();
                    onPress(this.state.selectedItems);
                  }
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default ReportModal;
