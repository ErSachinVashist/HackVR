import React from "react";
import { Text, View } from "react-360";
import GazeButton from "react-360-gaze-button";
import { connect } from "../utils/store";
import { styles } from "../styleSheet";

class CategoryMobile extends React.Component {
  handleOnClick = () => {
    console.log("gazed");
  };
  render() {
    if (!this.props.isOpened) return null;
    return (
      <View style={styles.categoryPhoneView}>
        <View style={styles.categoryHeading}>
          <Text style={styles.heading}>Phones</Text>
        </View>
        <View style={styles.categoryList}>
          <View style={styles.categoryItem}>
            <GazeButton
              duration={200}
              onClick={this.handleOnClick}
              render={(remainingTime, isGazed) => (
                <Text style={styles.text}>Apple</Text>
              )}
            />
          </View>
          <View style={styles.categoryItem}>
            <GazeButton
              duration={200}
              onClick={this.handleOnClick}
              render={(remainingTime, isGazed) => (
                <Text style={styles.text}>Samsung</Text>
              )}
            />
          </View>
          <View style={styles.categoryItem}>
            <GazeButton
              duration={200}
              onClick={this.handleOnClick}
              render={(remainingTime, isGazed) => (
                <Text style={styles.text}>Honor</Text>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

const CategoryMobiles = connect(CategoryMobile);

export default CategoryMobiles;
