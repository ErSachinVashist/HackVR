import React from "react";
import { asset, Image, View, Text } from "react-360";
import GazeButton from "react-360-gaze-button";
import { styles } from "../styleSheet";
import CONSTANTS from "../utils/CONSTANTS";
import { connect } from "../utils/store";

class DeviceDetails extends React.Component {
  state = {
    buyed: false,
  };
  handleOnClick = () => {
    console.log("Buy now clicked");
    this.setState({ buyed: true });
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
          <View
            style={{
              width: "auto",
              height: 50,
            }}
          >
            {this.state.buyed ? (
              <Text style={{ fontSize: 20, color: "red", fontWeight: "bold" }}>
                Thanks for your Purchase. Visit us Again!
              </Text>
            ) : (
              <GazeButton
                duration={1000}
                onClick={this.handleOnClick}
                render={(remainingTime, isGazed) => {
                  console.log(isGazed);
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
