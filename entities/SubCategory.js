import React from "react";
import { Text, View } from "react-360";
import { connect, showProductList } from "../utils/store";
import { styles } from "../styleSheet";
import GazeButton from "react-360-gaze-button";
import CONSTANTS from "../utils/CONSTANTS";
import { PHONE_LIST, SIMO_LIST, TAB_LIST } from "../utils/DATAS";

class SubCategory extends React.Component {
  handleOnClick = () => {
    console.log("gazed");
  };
  get getSubCategoryList() {
    const { PHONES, TABS, SIMO } = CONSTANTS;
    switch (this.props.gazedProduct) {
      case PHONES:
        return PHONE_LIST;
      case TABS:
        return TAB_LIST;
      case SIMO:
        return SIMO_LIST;
    }
  }
  render() {
    if (!this.props.gazedProduct) return null;
    return (
      <View style={styles.categoryTabView} onEnter={showProductList}>
        <View style={styles.categoryHeading}>
          <Text style={styles.heading}>{this.props.gazedProduct}</Text>
        </View>
        <View style={styles.categoryList}>
          {this.getSubCategoryList.map((subCat, index) => (
            <View style={styles.categoryItem} key={index}>
              <GazeButton
                duration={200}
                onClick={this.handleOnClick}
                render={(remainingTime, isGazed) => (
                  <Text style={styles.text}>{subCat}</Text>
                )}
              />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const SubCategories = connect(SubCategory);

export default SubCategories;
