import React from "react";
import { AppRegistry, StyleSheet, Text, View, VrButton } from "react-360";
import MobileDescription from "./entities/Mobiles";
import { connect, setBrand } from "./store";

export default class my_project extends React.Component {
  state = {
    count: 0,
    selectedBrand: "",
  };
  handleDeviceChange = (brand) => {
    setBrand(brand);
  };
  render() {
    console.log(this.props);
    return (
      <View style={styles.mainView}>
        <View style={styles.greetingBox}>
          <VrButton onClick={() => this.handleDeviceChange("apple")}>
            <Text style={styles.greeting}>Apple</Text>
          </VrButton>
        </View>
        <View style={styles.greetingBox}>
          <VrButton onClick={() => this.handleDeviceChange("samsung")}>
            <Text style={styles.greeting}>Samsung</Text>
          </VrButton>
        </View>
        <View style={styles.greetingBox}>
          <VrButton onClick={() => this.handleDeviceChange("honor")}>
            <Text style={styles.greeting}>Honor</Text>
          </VrButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: 1000,
    height: 800,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    // backgroundColor: 'grey'
  },
  greetingBox: {
    width: 150,
    height: 50,
    padding: 10,
    backgroundColor: "white",
    borderWidth: 2,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    fontSize: 30,
    color: "black",
  },
});

// const MainPage = connect(my_project);

// AppRegistry.registerComponent("my_project", () => my_project);
// AppRegistry.registerComponent("Mobiles", () => MobileDescription);
