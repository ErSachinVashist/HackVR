import React from "react";
import { asset, Image, Text, View } from "react-360";
import { styles } from "../styleSheet";
import GazeButton from "react-360-gaze-button";
import CONSTANTS from "../utils/CONSTANTS";

const { GAZING_DELAY } = CONSTANTS;
export default class SubCategory extends React.Component {
  render() {
    return (
      <View style={styles.categoryMainView} onExit={this.props.onExit}>
        <View style={styles.categoryHeading}>
          <Text style={styles.heading}>{this.props.heading}</Text>
        </View>
        <View style={styles.categoryList}>
          {this.props.itemList.map((item, index) => (
            <View
              style={styles.categoryItem}
              key={item.id || index}
            >
              <GazeButton
                duration={GAZING_DELAY}
                onClick={this.props.handleOnClick(item)}
                render={() => {
                  return (
                    <View>
                      {item.img && (
                        <Image
                          style={{ height: 300, width: this.props.imageWidth }}
                          source={asset(item.img)}
                        />
                      )}
                      <Text style={styles.buttonText}>{item.title}</Text>
                    </View>
                  );
                }}
              />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

