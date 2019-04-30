import _ from "lodash";
import React, { Component } from "react";
import axios from "axios";
import colors from "./styles/colors";
import MenuButton from "./components/MenuButton";
import Modal from "@paraboly/react-native-modal-box";
import Geolocation from "react-native-geolocation-service";
import styles, { _modalContainer, titleContainer } from "./ReportModal.style";
import MenuOptionSelectable from "./components/MenuOptionSelectable";
import {
  View,
  Text,
  Alert,
  Easing,
  Platform,
  PermissionsAndroid
} from "react-native";

class ReportModal extends Component {
  constructor(props) {
    super(props);
    this.state = { location: null };
  }

  async componentDidMount() {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted) {
        console.log("You can use the ACCESS_FINE_LOCATION");
        this.fetchLocation();
      } else {
        console.log("ACCESS_FINE_LOCATION permission denied");
      }
    } else {
      // iOS
      this.fetchLocation();
    }
  }

  fetchLocation() {
    Geolocation.getCurrentPosition(
      position => {
        console.log("UserLocation: ", position);
        this.setState({ location: position });
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  onSelect(item) {
    item.selected = !item.selected;
    const color = item.selected ? colors.theme.light.primary : "#b2b6c4";
    item.color = color;
    this.forceUpdate();
  }

  close() {
    this.refs.reportmodal.close();
  }

  // TODO: Make these selected items as exported to let the user more generic one
  // TODO: Create an algorithm to seperate of concern for user position and junction location
  sendFeedback() {
    const { location } = this.state;
    const { menuOptions, reportType, postURI } = this.props.popupMenuData;
    const data = new FormData();
    let selectedData = [];
    if (menuOptions && menuOptions.length > 0) {
      // Add every active item as their titles
      menuOptions.forEach(item => {
        if (item.selected) {
          selectedData.push(item.text);
        }
      });
    }
    if (selectedData.length === 0) {
      // TODO: Make it much more fun information to the user
      Alert.alert("Oops", "Lütfen en az bir sorun seçiniz.");
    } else {
      selectedData = JSON.stringify(selectedData);
      const position = JSON.stringify(location);
      data.append("type", reportType);
      data.append("values", selectedData);
      data.append("userLocation", position);
      axios({
        method: "post",
        url: postURI,
        data,
        config: { headers: { "Content-Type": "multipart/form-data" } }
      })
        .then(() => {
          // TODO: Make it much more fun information to the user
          Alert.alert("Başarılı", "Sorun başarıyla bildirildi, teşekkürler");
          this.close();
        })
        .catch(response => {
          console.log("Feedback Post Error: ", response);
          this.close();
        });
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
    console.log("Item: ", item);
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
            this.onSelect(item);
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
      fontFamily,
      modalWidth,
      titleStyle,
      buttonText,
      buttonStyle,
      modalHeight,
      menuOptions,
      dividerWidth,
      optionFontFamily
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
                color={colors.theme.light.primary}
                onPress={() => {
                  if (onPress) {
                    this.close();
                    onPress();
                  } else {
                    this.sendFeedback();
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
