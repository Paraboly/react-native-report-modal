import React, { Component } from "react";
import ReportModal from "./lib/src/ReportModal";
import IcomoonConfig from "./assets/selection.json";
import { View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

export default class App extends Component {
  menuOptions = [
    {
      id: 0,
      iconSize: 40,
      isSelect: false,
      color: "#b2b6c4",
      text: "Işık Hatası",
      iconName: "feedback_junction_alt1"
    },
    {
      id: 1,
      iconSize: 40,
      isSelect: false,
      color: "#b2b6c4",
      text: "Trafik Kazası",
      iconName: "feedback_accident_alt1"
    },
    {
      id: 2,
      iconSize: 40,
      isSelect: false,
      color: "#b2b6c4",
      text: "Kavşak Arızası",
      iconName: "feedback_light_alt1"
    },
    {
      id: 3,
      iconSize: 40,
      isSelect: false,
      color: "#b2b6c4",
      text: "Yaya Butonu Arızası",
      iconName: "feedback_pedestrian_alt1"
    }
  ];

  onPress(selectedItems) {
    console.log(selectedItems);
  }

  render() {
    return (
      <View style={styles.container}>
        <FastImage
          resizeMode="contain"
          style={{ top: "20%", width: 300, height: 100 }}
          source={require("./assets/parabol_logo.png")}
        />
        <ReportModal
          title="Sorun Bildiriniz"
          buttonText="Gönder"
          iconConfig={IcomoonConfig}
          menuOptions={this.menuOptions}
          onPress={selectedItems => {
            this.onPress(selectedItems);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
