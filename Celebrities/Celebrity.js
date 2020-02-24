import React from "react";
import { View, Text, Image, Button } from "react-native";

const Celebrity = props => {
  return (
    <View style={{ marginTop: 100 }}>
      <Text>{props.celeb.name}</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: props.celeb.pictureUrl }}
      />
      <Button title="Go back" onPress={() => props.goBack()} />
    </View>
  );
};

export default Celebrity;
