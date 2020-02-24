import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import celebritiesJSON from "../celebrities.json";
import Celebrity from "./Celebrity";

class CelebritiesHome extends Component {
  state = {
    celeb: false
  };

  goBack = () => {
    this.setState({ celeb: false });
  };

  render() {
    const renderAllCelebrities = celebritiesJSON.slice(0, 5).map(ele => {
      return (
        <TouchableOpacity
          onPress={() => {
            this.setState({ celeb: ele });
          }}
          key={ele.id}
        >
          <View>
            <Text>{ele.name}</Text>
            <Image
              style={{ height: 50, width: 50 }}
              source={{ uri: ele.pictureUrl }}
            />
          </View>
        </TouchableOpacity>
      );
    });

    const showAllNames = celebritiesJSON.map((ele, index) => {
      return (
        <TouchableOpacity onPress={() => this.setState({ celeb: ele })}>
          <Text key={ele.id}>{ele.name}</Text>
        </TouchableOpacity>
      );
    });

    if (this.state.celeb) {
      return <Celebrity goBack={this.goBack} celeb={this.state.celeb} />;
    }

    return (
      <View style={{ flex: 1, flexDirection: "row", marginTop: 100 }}>
        <Text>CelebritiesHome</Text>
        <View style={{ height: 500 }}>
          <ScrollView>
            <View>{showAllNames}</View>
          </ScrollView>
        </View>

        <View>{renderAllCelebrities}</View>
      </View>
    );
  }
}

export default CelebritiesHome;
