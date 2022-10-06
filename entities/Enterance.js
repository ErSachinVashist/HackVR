import React from "react";
import { Environment, staticAssetURL, Text, View, VrButton } from "react-360";
import GazeButton from "react-360-gaze-button";
import { connect, doorOpened } from "../store";
import { styles } from "../styleSheet";

class Enterance extends React.Component {
  state = {
    gazed: false,
  };

  setGazed = () => {
    this.setState({ gazed: true });
    doorOpened();
    Environment.setBackgroundImage(staticAssetURL("appleoffice.jpeg"));
  };
  render() {
    if (this.props.isOpened) return null;
    return (
      <View style={styles.openBtn_mainView}>
        <GazeButton
          duration={1000}
          onClick={this.setGazed}
          render={(remainingTime, isGazed) => (
            <Text style={styles.openBtn}>
              {this.state.gazed ? "Opened" : isGazed ? "Opening" : "Open"}
            </Text>
          )}
        >
          {/* <Text style={styles.openBtn}>Open</Text> */}
        </GazeButton>
      </View>
    );
  }
}
const MainDoor = connect(Enterance);
export default MainDoor;