import React from "react";
import s from "../styles/main.styles";

import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { buttons } from "../components/Buttons";
import calculator from "../utils/calculator";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentValue: "0" };
  }

  handleTap = (type, value) => {
    console.log(this.state);
    this.setState((newStates) => calculator(type, value, newStates));
  };

  renderItem = ({ item }) => {
    let buttonStyles;
    let textStyle;
    switch (item.theme) {
      case "accent":
        buttonStyles = s.buttonAccent;
        textStyle = s.text;
        break;
      case "secondary":
        buttonStyles = s.buttonSecondary;
        textStyle = s.textSecondary;
        break;
      default:
        buttonStyles = s.main;
        textStyle = s.text;
    }

    return (
      <TouchableOpacity
        style={(item.num === 0? s.buttonDouble : buttonStyles)}
        onPress={() =>
          this.handleTap(item.title, item.operator ? item.operator : item.num)
        }
      >
        <Text style={textStyle}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={s.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={s.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          <FlatList
            data={buttons}
            renderItem={this.renderItem}
            numColumns={4}
            keyExtractor={(item) => item.text}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default MainScreen;
