import React from "react";

const defaultState = {
  isOpened: false,
  gazedProduct: "",
  showList: false,
  selectedDevice: "",
  buyed: false,
  showCart: false,
  cart: [],
};
let State = { ...defaultState };

const callbacks = [];

function updateComponent() {
  callbacks.forEach((cb) => cb());
}

export function doorOpened() {
  State.isOpened = true;
  State.showList = true;
  updateComponent();
}

export function exitStore() {
  State = { ...defaultState };
  updateComponent();
}

export function productGazed(product) {
  State.gazedProduct = product;
  State.showList = false;
  updateComponent();
}

export function showProductList() {
  State.showList = true;
  updateComponent();
}

export function onDeviceSelected(device) {
  State.selectedDevice = device;
  State.buyed = false;
  updateComponent();
}

export function onDeviceBuyed() {
  State.buyed = true;
  updateComponent();
}

export function addToCart(item) {
  State.cart.push(item);
  updateComponent();
}

export function removeFromCart(itemId) {
  const updatedCart = State.cart.filter((item) => item.id !== itemId);
  State.cart = updatedCart;
  updateComponent();
}

export function isAddedToCart(itemId) {
  const filteredCart = State.cart.filter((device) => device.id === itemId);
  return filteredCart.length > 0;
}

export function emptyCart() {
  console.log("=empty cart");
  State.cart = [];
  updateComponent();
}

export function isItemsInCart() {
  return State.cart.length > 0;
}

export function showCart() {
  State.showCart = true;
  updateComponent();
}

export function hideCart() {
  State.showCart = false;
  updateComponent();
}

export function shouldShowDeviceDetails() {
  return State.selectedDevice && !State.showCart;
}

export function shouldShowDeviceList() {
  return State.isOpened && !State.showCart;
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      phoneBrand: State.phoneBrand,
      isOpened: State.isOpened,
      gazedProduct: State.gazedProduct,
      showList: State.showList,
      selectedDevice: State.selectedDevice,
      buyed: State.buyed,
      cart: State.cart,
      showCart: State.showCart,
    };
    componentDidMount() {
      callbacks.push(() =>
        this.setState({
          isOpened: State.isOpened,
          gazedProduct: State.gazedProduct,
          showList: State.showList,
          selectedDevice: State.selectedDevice,
          buyed: State.buyed,
          cart: State.cart,
          showCart: State.showCart,
        })
      );
    }
    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };
}
