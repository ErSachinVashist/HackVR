import React from "react";
import { Animated, asset, Image, View, Text } from "react-360";
import GazeButton from "react-360-gaze-button";
import { styles } from "../styleSheet";
import { connect, shouldShowDeviceDetails } from "../utils/store";
import Entity from "Entity";
import AmbientLight from "AmbientLight";
import PointLight from "PointLight";
import Easing from "Easing";

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class DeviceImagePhone extends React.Component {
  rotation = new Animated.Value(0);

  spin() {
    this.rotation.setValue(0);
    Animated.timing(this.rotation, {
      toValue: 360,
      duration: 4000,
      easing: Easing.linear,
    }).start(() => this.spin());
  }

  componentDidMount() {
    this.spin();
  }

  render() {
    if (!shouldShowDeviceDetails()) return null;
    const {
      selectedDevice: {
        imgObj: { path, translateY, translateX, scale },
      },
    } = this.props;
    return (
      <View style={{ backgroundColor: "white" }}>
        <View>
          <AmbientLight intensity={1.0} color={"#fff"} />
          <PointLight
            intensity={1}
            style={{ transform: [{ translate: [0, 1, 5] }] }}
          />
          <AnimatedEntity
            source={{ gltf2: asset(path) }}
            style={{
              backgroundColor: "white",
              transform: [
                { translateY },
                { translateX },
                { scale },
                { rotateY: this.rotation },
              ],
            }}
          />
        </View>
      </View>
    );
  }
}

const DeviceImagePhoneRotate = connect(DeviceImagePhone);

export default DeviceImagePhoneRotate;
