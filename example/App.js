import React, { Component } from "react";
import ReportModal from "./lib/src/ReportModal";
import IcomoonConfig from "./assets/selection.json";
import {
  Text,
  View,
  Platform,
  StyleSheet,
  PermissionsAndroid
} from "react-native";
import Geolocation from "react-native-geolocation-service";

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

  onPress(selectedItems) {
    console.log(selectedItems);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <ReportModal
          buttonText="Report"
          title="Report Problem"
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
