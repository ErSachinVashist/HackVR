import React from "react";
import { Text, View } from "react-360";
import GazeButton from "react-360-gaze-button";
import { connect, onDeviceSelected } from "../utils/store";
import { styles } from "../styleSheet";
import SubCategory from "./SubCategory";
import {
  PHONE_BRAND_LIST,
  PHONE_LIST,
  TAB_BRAND_LIST,
  TAB_LIST,
} from "../utils/DATAS";
import CONSTANTS from "../utils/CONSTANTS";

class CategoryTablet extends React.Component {
  state = {
    selectedBrand: "",
    selectedDevice: "",
    deviceHeading: CONSTANTS.PRODUCT_HEADINGS.DEVICES,
  };
  onBrandGazed = (brand) => {
    return () => {
      this.setState({ selectedBrand: brand.title });
    };
  };
  onExit = () => {
    this.setState({ selectedBrand: "" });
  };

  onDeviceSelected = (device) => {
    return () => {
      onDeviceSelected(device);
      this.setState({
        deviceHeading: CONSTANTS.PRODUCT_HEADINGS.MOVE_CHECKOUT,
      });
    };
  };

  render() {
    if (!this.props.isOpened) return null;
    if (Object.keys(TAB_LIST).includes(this.state.selectedBrand)) {
      return (
        <SubCategory
          {...this.props}
          handleOnClick={this.onDeviceSelected}
          itemList={TAB_LIST[this.state.selectedBrand]}
          heading={this.state.deviceHeading}
          onExit={this.onExit}
          imageWidth='100%'
        />
      );
    } else {
      return (
        <SubCategory
          {...this.props}
          handleOnClick={this.onBrandGazed}
          itemList={TAB_BRAND_LIST}
          heading={CONSTANTS.PRODUCT_HEADINGS.Tablets}
          onExit={this.onExit}
          imageWidth='100%'
        />
      );
    }
  }
}

const CategoryTablets = connect(CategoryTablet);

export default CategoryTablets;
