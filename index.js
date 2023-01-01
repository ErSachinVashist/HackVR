import React from "react";
import { AppRegistry, View } from "react-360";

import { connect } from "./utils/store";
import { styles } from "./styleSheet";
import MainDoor from "./entities/Enterance";
import CategoryMobiles from "./entities/CategoryMobile";
import BannerSurface from "./entities/Banner";
import SubCategories from "./entities/SubCategory";
import LogoBanner from "./entities/Logo";
import CategoryTablets from "./entities/CategoryTablet";
import DeviceList from "./entities/DeviceDetails";
import DeviceImagePhoneRotate from "./entities/DeviceImagePhone";
import ExitStore from "./entities/Exit";
import CheckoutPage from "./entities/Checkout";

export class reactvr extends React.Component {
  render() {
    if (this.props.isOpened) return null;
    return <View style={styles.mainView}></View>;
  }
}

const MainPage = connect(reactvr);

AppRegistry.registerComponent("reactvr", () => MainPage);
AppRegistry.registerComponent("DeviceImagePhone", () => DeviceImagePhoneRotate);
AppRegistry.registerComponent("DeviceSection", () => DeviceList);
AppRegistry.registerComponent("MainDoor", () => MainDoor);
AppRegistry.registerComponent("CategoryMobiles", () => CategoryMobiles);
AppRegistry.registerComponent("CategoryTablets", () => CategoryTablets);
AppRegistry.registerComponent("SubCategories", () => SubCategories);
AppRegistry.registerComponent("BannerSurface", () => BannerSurface);
AppRegistry.registerComponent("LogoBanner", () => LogoBanner);
AppRegistry.registerComponent("ExitStore", () => ExitStore);
AppRegistry.registerComponent("CheckoutPage", () => CheckoutPage);
