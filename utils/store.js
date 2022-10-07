import React from "react";

const defaultState = {
  isOpened: false,
  gazedProduct: "",
  showList: false,
  selectedDevice: "",
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
  updateComponent();
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      phoneBrand: State.phoneBrand,
      isOpened: State.isOpened,
      gazedProduct: State.gazedProduct,
      showList: State.showList,
      selectedDevice: State.selectedDevice,
    };
    componentDidMount() {
      console.log("ComponentDidmount");
      callbacks.push(() =>
        this.setState({
          isOpened: State.isOpened,
          gazedProduct: State.gazedProduct,
          showList: State.showList,
          selectedDevice: State.selectedDevice,
        })
      );
    }
    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };
}
