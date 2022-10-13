import React from "react";
import { asset, Image, View, Text } from "react-360";
import GazeButton from "react-360-gaze-button";
import { styles } from "../styleSheet";
import { connect, onDeviceBuyed } from "../utils/store";

class DeviceDetails extends React.Component {
  handleOnClick = () => {
    onDeviceBuyed();
  };

  render() {
    if (!this.props.selectedDevice) return null;
    const { selectedDevice } = this.props;
    return (
      <View style={styles.categoryMobView}>
        <Image style={styles.imageStyle} source={asset(selectedDevice.img)} />
        <View style={styles.subView}>
          <View>
            <Text style={styles.heading}>{selectedDevice.title}</Text>
            <Text style={styles.exText}>{selectedDevice.erText}</Text>
            <Text style={styles.exText}>{selectedDevice.erText1}</Text>
            <Text style={styles.desText}>{selectedDevice.specs}</Text>
            <Text style={styles.desText}>{selectedDevice.proc}</Text>
            <Text style={styles.desText}>{selectedDevice.disp}</Text>
            <Text style={styles.priceDesign}>{selectedDevice.price} </Text>
          </View>
          <View style={styles.buyView}>
            {this.props.buyed ? (
              <Text style={styles.thankText}>
                Thanks for your Purchase. Visit us Again!
              </Text>
            ) : (
              <GazeButton
                duration={1000}
                onClick={this.handleOnClick}
                render={(remainingTime, isGazed) => {
                  return <Text style={styles.buttonMob}>Buy Now</Text>;
                }}
              />
            )}
          </View>
        </View>
      </View>
    );
  }
}

const DeviceList = connect(DeviceDetails);

export default DeviceList;
