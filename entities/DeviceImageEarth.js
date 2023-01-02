import React from "react";
import { Animated, asset, Image, View, Text } from "react-360";
import GazeButton from "react-360-gaze-button";
import { styles } from "../styleSheet";
import { connect, onDeviceBuyed } from "../utils/store";
import Entity from "Entity";
import AmbientLight from "AmbientLight";
import PointLight from "PointLight";
import Easing from "Easing";

const AnimatedEntity = Animated.createAnimatedComponent(Entity);
const LOW_JUMP_VALUE = 1.5;
const TOP_JUMP_VALUE = 1.75;

class DeviceImageEarth extends React.Component {
  rotation = new Animated.Value(0);
  jumpValue = new Animated.Value(LOW_JUMP_VALUE);

  handleOnClick = () => {
    onDeviceBuyed();
  };

  spin() {
    this.rotation.setValue(0);
    Animated.timing(this.rotation, {
      toValue: 360,
      duration: 4000,
      easing: Easing.linear,
    }).start(() => this.spin());
  }

  jump(value) {
    let currentVal = value === TOP_JUMP_VALUE ? LOW_JUMP_VALUE : TOP_JUMP_VALUE;
    Animated.timing(this.jumpValue, {
      toValue: currentVal,
      duration: 500,
    }).start(() => this.jump(currentVal));
  }

  componentDidMount() {
    this.spin();
    this.jump(LOW_JUMP_VALUE);
  }

  render() {
    if (!this.props.selectedDevice) return null;
    const { selectedDevice } = this.props;
    console.log(`${selectedDevice.imgObj}`);
    console.log(selectedDevice);
    return (
      <View>
        <View>
          <AmbientLight intensity={1.0} color={"#fff"} />
          <PointLight
            intensity={1}
            style={{ transform: [{ translate: [0, 1, 5] }] }}
          />
          <AnimatedEntity
            source={{ obj: asset('iphonex_new.obj'), mtl: asset('iphonex_new.mtl') }}
            style={{
              transform: [
                { translateY: 1.5 },
                { scale: 0.001 },
              ],
            }}
          />
        </View>
      </View>
    );
  }
}

const DeviceImageEarthRotate = connect(DeviceImageEarth);

export default DeviceImageEarthRotate;
