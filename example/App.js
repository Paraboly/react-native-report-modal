import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ReportModal from "./lib/src/ReportModal";
import IcomoonConfig from "./assets/selection.json";

export default class App extends Component {
  menuOptions = [
    {
      iconSize: 40,
      selected: false,
      color: "#b2b6c4",
      text: "Işık Hatası",
      iconName: "feedback_junction_alt1"
    },
    {
      iconSize: 40,
      selected: false,
      color: "#b2b6c4",
      text: "Trafik Kazası",
      iconName: "feedback_accident_alt1"
    },
    {
      iconSize: 40,
      selected: false,
      color: "#b2b6c4",
      text: "Kavşak Arızası",
      iconName: "feedback_light_alt1"
    },
    {
      iconSize: 40,
      selected: false,
      color: "#b2b6c4",
      text: "Yaya Butonu Arızası",
      iconName: "feedback_pedestrian_alt1"
    }
  ];

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <ReportModal
          title="ReportModal Title"
          buttonText="Report"
          iconConfig={IcomoonConfig}
          menuOptions={this.menuOptions}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    margin: 10,
    fontSize: 20,
    textAlign: "center"
  },
  instructions: {
    marginBottom: 5,
    color: "#333333",
    textAlign: "center"
  }
});
