import React from 'react';
import { AppRegistry, Text, View , asset , Image} from "react-360";

import { connect } from "./store";
import { styles } from "./styleSheet";
import MainDoor from "./entities/Enterance";
import MobileDescription from "./entities/Mobiles";
import CategoryMobiles from "./entities/CategoryMobile";
import Plane from "./entities/Plane";
import CategoryTab from "./entities/CategortTablet";
import BannerSurface from './entities/Banner';
import WatchSurface from './entities/WatchBanner';

export class reactvr extends React.Component {
  render() {
    if (this.props.isOpened) return null;
    return (
      <View style={styles.mainView}>
        
        <View>
          <Image style={{ height: 200, width: 400 }} source={asset('banner1.png')} />
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
AppRegistry.registerComponent("CategoryTab", () => CategoryTab);
AppRegistry.registerComponent("Plane", () => Plane);
AppRegistry.registerComponent("BannerSurface", () => BannerSurface);
AppRegistry.registerComponent("WatchSurface", () => WatchSurface);
