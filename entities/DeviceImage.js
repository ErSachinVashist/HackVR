import React from "react";
import { Animated, asset, Image, View, Text } from "react-360";
import GazeButton from "react-360-gaze-button";
import { styles } from "../styleSheet";
import {
  connect,
  onDeviceBuyed,
  shouldShowDeviceDetails,
} from "../utils/store";
import Entity from "Entity";
import AmbientLight from "AmbientLight";
import PointLight from "PointLight";
import Easing from "Easing";

const AnimatedEntity = Animated.createAnimatedComponent(Entity);
const LOW_JUMP_VALUE = 1.5;
const TOP_JUMP_VALUE = 1.75;

class DeviceImage extends React.Component {
  rotation = new Animated.ValueXY({ x: 0, y: 0 });
  jumpValue = new Animated.Value(LOW_JUMP_VALUE);

  spin() {
    this.rotation.y.setValue(0);
    Animated.timing(this.rotation.y, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
      delay: 1000,
      easing: Easing.linear,
    }).start(() => this.spin());
  }

  componentDidUpdate() {
    console.log("=componentDidUpdate deviceImage");
  }

  componentDidMount() {
    console.log("=componentDidMount deviceImage");
    this.spin();
  }

  render() {
    if (!this.props.selectedDevice && this.props.showCart) return null;
    const { selectedDevice } = this.props;
    console.log("==", `${selectedDevice.imgObj}`);
    console.log(selectedDevice);

    const rotatey = this.rotation.y.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });

    const rotatex = this.rotation.x.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });

    return (
      <View>
        <View>
          <AmbientLight intensity={1.0} color={"#fff"} />
          <PointLight
            intensity={1}
            style={{ transform: [{ translate: [0, 1, 5] }] }}
          />
          <AnimatedEntity
            source={{
              obj: asset("iphonex_new.obj"),
              mtl: asset("iphonex_new.mtl"),
            }}
            style={{
              transform: [
                { translateY: 1.5 },
                { scale: 0.001 },
                { rotateY: rotatey },
                { rotateX: rotatex },
              ],
            }}
          />
        </View>
      </View>
    );
  }
}

const DetailImage  = connect(DeviceImage);

export default DetailImage;
