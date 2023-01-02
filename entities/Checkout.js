import React from "react";
import {
  View,
  Text,
  Image,
  asset,
  Environment,
  staticAssetURL,
} from "react-360";
import GazeButton from "react-360-gaze-button";
import { styles } from "../styleSheet";
import { connect, hideCart, emptyCart } from "../utils/store";
import CONSTANTS from "../utils/CONSTANTS";

const { GAZING_DELAY } = CONSTANTS;
class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      buyed: false,
    };
  }

  componentDidUpdate() {
    if (this.props.cart.length > 0 && this.state.buyed) {
      this.setState({ buyed: false });
    }
  }
  get getTotalPrice() {
    if (!this.props.cart.length) return 0;
    return this.props.cart.reduce((acc, curr) => {
      const priceSplit = curr.price.split("£");
      const price = parseFloat(priceSplit[1]);
      acc += price;
      return acc;
    }, 0.0);
  }

  handleBuy = () => {
    this.setState({ buyed: true });
    emptyCart();
  };

  handleBackToStore() {
    hideCart();
    Environment.setBackgroundImage(staticAssetURL(CONSTANTS.IMAGES.STORE_BG));
  }

  render() {
    if (!this.props.showCart) return null;
    return (
      <View>
        <View style={styles.checkoutView}>
          <View style={styles.flexColumn}>
            {this.props.cart.length
              ? this.props.cart.map((item) => (
                  <View style={styles.checkoutItems} key={item.id}>
                    {console.log("=view displayed")}
                    <Image
                      style={styles.checkoutItemImage}
                      source={asset(item.img)}
                    />
                    <View style={styles.flexColumn}>
                      <Text style={styles.checkoutItemText}>{item.title}</Text>
                      <Text style={styles.checkoutItemPrice}>{item.price}</Text>
                      {/* remove button */}
                    </View>
                  </View>
                ))
              : null}
          </View>
          <View style={styles.checkoutCart}>
            <Image
              source={asset("checkout_basket.jpeg")}
              style={[styles.checkoutItemImage, { alignSelf: "center" }]}
            />

            {this.state.buyed ? (
              <Text style={[styles.thankText, { backgroundColor: "white" }]}>
                Thanks for your Purchase. Visit us Again!
              </Text>
            ) : (
              <React.Fragment>
                <Text style={{ margin: 5, color: "black" }}>
                  {console.log("cart length", this.props.cart.length)}
                  Total Items: {this.props.cart.length}
                </Text>
                <Text style={{ margin: 5, color: "red" }}>
                  Total Price: £{this.getTotalPrice.toFixed(2)}
                </Text>
              </React.Fragment>
            )}
          </View>
        </View>
        {!this.state.buyed && (
          <GazeButton
            style={{ width: "auto", margin: 10 }}
            duration={GAZING_DELAY}
            onClick={this.handleBuy}
            render={(remainingTime, isGazed) => {
              return <Text style={styles.cartBuyBtn}>Buy Now </Text>;
            }}
          />
        )}
        <GazeButton
          style={{ width: "auto", margin: 10 }}
          duration={GAZING_DELAY}
          onClick={this.handleBackToStore}
          render={(remainingTime, isGazed) => {
            return <Text style={styles.cartBackBtn}>Continue Shopping</Text>;
          }}
        />
      </View>
    );
  }
}

const CheckoutPage = connect(Checkout);

export default CheckoutPage;
