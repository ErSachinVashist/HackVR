import React from "react";
import {
  AppRegistry,
  StyleSheet,
  asset,
  VrButton,
  Text,
  View,
} from "react-360";
import Entity from "Entity";
import { styles } from "../styleSheet";

export default class Plane extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.text}>Black Plane here</Text>
        <Entity
          source={{
            obj: asset("Plane.obj"),
            mtl: asset("Plane.mtl"),
          }}
          style={{
            transform: [{ scaleX: 0.05 }, { scaleY: 0.05 }, { scaleZ: 0.05 }],
          }}
        />
      </View>
    );
  }
}
