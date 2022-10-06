import React from "react";
import { Text, View } from "react-360";
import GazeButton from "react-360-gaze-button";
import { connect } from "../store";
import { styles } from "../styleSheet";

class CategoryMobile extends React.Component {
  render() {
    if (!this.props.isOpened) return null;
    return (
      <View style={styles.categoryMainView}>
        <GazeButton
          duration={200}
          onClick={this.setGazed}
          render={(remainingTime, isGazed) => (
            <Text style={styles.text}>Phones</Text>
          )}
        />
      </View>
    );
  }
}

const CategoryMobiles = connect(CategoryMobile);

export default CategoryMobiles;
