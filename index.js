import React from "react";
import { AppRegistry, Text, View, asset, Image } from "react-360";

import { connect } from "./utils/store";
import { styles } from "./styleSheet";
import MainDoor from "./entities/Enterance";
import MobileDescription from "./entities/Mobiles";
import CategoryMobiles from "./entities/CategoryMobile";
import Plane from "./entities/Plane";
import BannerSurface from "./entities/Banner";
import SubCategories from "./entities/SubCategory";
import CategoryList from "./entities/CategoryList";
import CategorySimo from "./entities/CategorySimo";
import LogoBanner from "./entities/Logo";
import CategoryTablets from "./entities/CategoryTablet";
import DeviceList from "./entities/DeviceDetails";
import ExitStore from "./entities/Exit";

export class reactvr extends React.Component {
  render() {
    if (this.props.isOpened) return null;
    return <View style={styles.mainView}></View>;
  }
}

const MainPage = connect(reactvr);

AppRegistry.registerComponent("reactvr", () => MainPage);
AppRegistry.registerComponent("DeviceSection", () => DeviceList);
AppRegistry.registerComponent("MainDoor", () => MainDoor);
AppRegistry.registerComponent("CategoryMobiles", () => CategoryMobiles);
AppRegistry.registerComponent("CategoryTablets", () => CategoryTablets);
AppRegistry.registerComponent("SubCategories", () => SubCategories);
AppRegistry.registerComponent("Plane", () => Plane);
AppRegistry.registerComponent("BannerSurface", () => BannerSurface);
AppRegistry.registerComponent("CategoryList", () => CategoryList);
AppRegistry.registerComponent("CategorySimOnly", () => CategorySimo);
AppRegistry.registerComponent("LogoBanner", () => LogoBanner);
AppRegistry.registerComponent("ExitStore", () => ExitStore);

