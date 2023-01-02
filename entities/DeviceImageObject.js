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

class DeviceImageObject extends React.Component {
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
         <Entity 
                source={{
                    obj: asset('iPhoneX.obj')
                }}
                
                style={{transform:[
                    {scaleX: 0.09 },
                    { scaleY: 0.05 },
                    { scaleZ: 0.05 },
                    

                ]}}
                />
        </View>
    );
  }
}

const DeviceImageEntity = connect(DeviceImageObject);

export default DeviceImageEntity;
