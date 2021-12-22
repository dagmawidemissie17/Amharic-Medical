import React from "react";
import { Styles } from "./HomeStyleSheet";
import { View, Text } from "react-native";
const HomeScreen = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <View>
        <Text style={Styles.title}>Home View</Text>
      </View>
      <View style={Styles.separator} />

      <View>
        <Text style={Styles.title}>
          Welcome to Amharic Medical App!
        </Text>
      </View>
      <View style={Styles.separator} />
    </View>
  );
};
export default HomeScreen;
