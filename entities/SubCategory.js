import React from "react";
import { asset, Image, Text, View } from "react-360";
import { connect, showProductList } from "../utils/store";
import { styles } from "../styleSheet";
import GazeButton from "react-360-gaze-button";
import CONSTANTS from "../utils/CONSTANTS";
import {
  PHONE_BRAND_LIST,
  PHONE_LIST,
  SIMO_LIST,
  TAB_BRAND_LIST,
  TAB_LIST,
} from "../utils/DATAS";

const { PHONES, TABS, SIMO, PRODUCT_HEADINGS, GAZING_DELAY } = CONSTANTS;
let hovered = false;
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
              style={hovered ? styles.zoomOnHover : styles.categoryItem}
              key={item.id || index}
            >
              <GazeButton
                duration={GAZING_DELAY}
                onClick={this.props.handleOnClick(item)}
                render={(remainingTime, isGazed) => {
                  if (isGazed) hovered = true;
                  else hovered = false;
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

