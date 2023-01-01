import React from "react";
import { Text, View } from "react-360";
import GazeButton from "react-360-gaze-button";
import {
  connect,
  onDeviceSelected,
  shouldShowDeviceList,
} from "../utils/store";
import { styles } from "../styleSheet";
import SubCategory from "./SubCategory";
import { PHONE_BRAND_LIST, PHONE_LIST } from "../utils/DATAS";
import CONSTANTS from "../utils/CONSTANTS";

class CategoryMobile extends React.Component {
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
    if (this.state.selectedBrand) {
      this.setState({ selectedBrand: "" });
    }
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
    if (!shouldShowDeviceList()) return null;
    if (Object.keys(PHONE_LIST).includes(this.state.selectedBrand)) {
      return (
        <SubCategory
          {...this.props}
          handleOnClick={this.onDeviceSelected}
          itemList={PHONE_LIST[this.state.selectedBrand]}
          heading={this.state.deviceHeading}
          onExit={this.onExit}
          imageWidth='80%'
        />
      );
    } else {
      return (
        <SubCategory
          {...this.props}
          handleOnClick={this.onBrandGazed}
          itemList={PHONE_BRAND_LIST}
          heading={CONSTANTS.PRODUCT_HEADINGS.Phones}
          onExit={this.onExit}
          imageWidth='80%'
        />
      );
    }
  }
}

const CategoryMobiles = connect(CategoryMobile);

export default CategoryMobiles;
