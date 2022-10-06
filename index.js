import React from "react";
import { AppRegistry, Text, View, asset, Image } from "react-360";

import { connect } from "./utils/store";
import { styles } from "./styleSheet";
import MainDoor from "./entities/Enterance";
import MobileDescription from "./entities/Mobiles";
import CategoryMobiles from "./entities/CategoryMobile";
import Plane from "./entities/Plane";
import BannerSurface from "./entities/Banner";
import WatchSurface from "./entities/WatchBanner";
import SubCategories from "./entities/SubCategory";
import CategoryList from "./entities/CategoryList";
import CategorySimo from "./entities/CategorySimo";

export class reactvr extends React.Component {
  render() {
    if (this.props.isOpened) return null;
    return (
      <View style={styles.mainView}>
        <View>
          <Image
            style={{ height: 200, width: 400 }}
            source={asset("banner1.png")}
          />
        </View>
      </View>
    );
  }
}

const MainPage = connect(reactvr);

AppRegistry.registerComponent("reactvr", () => MainPage);
AppRegistry.registerComponent("Mobiles", () => MobileDescription);
AppRegistry.registerComponent("MainDoor", () => MainDoor);
AppRegistry.registerComponent("CategoryMobiles", () => CategoryMobiles);
AppRegistry.registerComponent("SubCategories", () => SubCategories);
AppRegistry.registerComponent("Plane", () => Plane);
AppRegistry.registerComponent("BannerSurface", () => BannerSurface);
AppRegistry.registerComponent("WatchSurface", () => WatchSurface);
AppRegistry.registerComponent("CategoryList", () => CategoryList);
AppRegistry.registerComponent("CategorySimOnly", () => CategorySimo);
