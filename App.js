import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

import CelebritiesHome from "./Celebrities/CelebritiesHome";

// const RootStack = createStackNavigator(
//   {
//     Home: CelebritiesHome
//     // Home is the key, and CelebritiesHome is the route being imported
//   },
//   {
//     initialRouteName: "Home"
//     // This refers to "CelebritiesHome"
//   }
// );

// const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <View>
        <CelebritiesHome />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
