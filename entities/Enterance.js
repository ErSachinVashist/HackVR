import React from "react";
import { Environment, staticAssetURL, Text, View, VrButton } from "react-360";
import GazeButton from "react-360-gaze-button";
import { connect, doorOpened } from "../utils/store";
import { styles } from "../styleSheet";
import CONSTANTS from "../utils/CONSTANTS";

class Enterance extends React.Component {
  state = {
    gazed: false,
  };

  setGazed = () => {
    Environment.setBackgroundImage(staticAssetURL(CONSTANTS.IMAGES.STORE_BG));
    this.setState({ gazed: true });
    doorOpened();
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
              {this.state.gazed
                ? "Opened"
                : isGazed
                ? "Opening..."
                : "Welcome to Vodaverse".toUpperCase()}
            </Text>
          )}
        ></GazeButton>
      </View>
    );
  }
}
const MainDoor = connect(Enterance);
export default MainDoor;
