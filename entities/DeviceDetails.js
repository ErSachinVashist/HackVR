import React from "react";
import {
  asset,
  Image,
  View,
  Text,
  Environment,
  staticAssetURL,
} from "react-360";
import GazeButton from "react-360-gaze-button";
import { styles } from "../styleSheet";
import {
  connect,
  onDeviceBuyed,
  addToCart,
  isItemsInCart,
  shouldShowDeviceDetails,
  showCart,
  isAddedToCart,
} from "../utils/store";

class DeviceDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      buyed: false,
    };
  }
  handleAddToCart = () => {
    addToCart(this.props.selectedDevice);
  };

  componentDidUpdate(prevProps) {
    if(prevProps.selectedDevice.id !== this.props.selectedDevice.id) {
      this.setState({buyed: false})
    }
  }

  handleBuy= ()=>{
    console.log('buy')
    this.setState({ buyed: true });
  }

  handleGoToCart = () => {
    showCart();
    Environment.setBackgroundImage(
      staticAssetURL(CONSTANTS.IMAGES.CHECKOUT_BG)
    );
  };

  render() {
    if (!shouldShowDeviceDetails()) return null;
    const { selectedDevice } = this.props;
    return (
      <View style={styles.categoryMobView}>
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
            {this.state.buyed ? (
              <Text style={styles.thankText}>
                Thanks for your Purchase. Visit us Again!
              </Text>
            ) : (
              <View style={styles.buy_cart_btn_view}>
                <GazeButton
                  disabled={isAddedToCart(selectedDevice.id)}
                  style={{ width: "auto", marginHorizontal: 10 }}
                  duration={1000}
                  onClick={this.handleAddToCart}
                  render={(remainingTime, isGazed) => {
                    return (
                      <Text
                        style={
                          isAddedToCart(selectedDevice.id)
                            ? styles.buttonMobDisabled
                            : styles.buttonMob
                        }
                      >
                        {isAddedToCart(selectedDevice.id)
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </Text>
                    );
                  }}
                />
                <GazeButton
                  style={{ width: "auto", marginHorizontal: 10 }}
                  duration={1000}
                  onClick={this.handleBuy}
                  render={(remainingTime, isGazed) => {
                    return <Text style={styles.buyBtn}>Buy Now </Text>;
                  }}
                />
              </View>
            )}
            {isItemsInCart() && (
              <GazeButton
                style={{ width: "50" }}
                duration={1000}
                onClick={this.handleGoToCart}
                render={(remainingTime, isGazed) => {
                  return <Text style={styles.goToCartLink}>GO TO CART</Text>;
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