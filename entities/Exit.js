import React from "react";
import { Environment, staticAssetURL, Text, View } from "react-360";
import GazeButton from "react-360-gaze-button";
import { styles } from "../styleSheet";
import CONSTANTS from "../utils/CONSTANTS";
import { connect, exitStore } from "../utils/store";

class Exit extends React.Component {
  setGazed = () => {
    Environment.setBackgroundImage(
      staticAssetURL(CONSTANTS.IMAGES.ENTRANCE_BG)
    );
    exitStore();
  };
  render() {
    if (!this.props.isOpened) return null;
    return (
      <View style={styles.exitMainView}>
        <GazeButton
          duration={1000}
          onClick={this.setGazed}
          render={(remainingTime, isGazed) => (
            <Text style={styles.exitBtn}>
              {isGazed ? "Thanks for your Visit" : "Exit Store"}
            </Text>
          )}
        ></GazeButton>
      </View>
    );
  }
}
const ExitStore = connect(Exit);

export default ExitStore;
