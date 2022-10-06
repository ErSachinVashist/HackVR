import React from 'react';
import { AppRegistry, Text, View } from "react-360";

import { connect } from "./store";
import { styles } from "./styleSheet";
import MainDoor from "./entities/Enterance";
import MobileDescription from "./entities/Mobiles";
import CategoryMobiles from "./entities/CategoryMobile";
import Plane from "./entities/Plane";
import CategoryTab from "./entities/CategortTablet";

export class reactvr extends React.Component {
  render() {
    if (this.props.isOpened) return null;
    return (
      <View style={styles.mainView}>
        <Text style={styles.greeting}>Scroll to Right {`=>`} </Text>
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
