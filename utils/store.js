import React from "react";

const State = {
  phoneBrand: "",
  isOpened: false,
  gazedProduct: "",
  showList: false,
};

const callbacks = [];

function updateComponent() {
  callbacks.forEach((cb) => cb());
}

export function setBrand(brand) {
  State.phoneBrand = brand;
  updateComponent();
}
export function doorOpened() {
  State.isOpened = true;
  State.showList = true;
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

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      phoneBrand: State.phoneBrand,
      isOpened: State.isOpened,
      gazedProduct: State.gazedProduct,
      showList: State.showList,
    };
    componentDidMount() {
      console.log("showList", State.showList);
      callbacks.push(() =>
        this.setState({
          phoneBrand: State.phoneBrand,
          isOpened: State.isOpened,
          gazedProduct: State.gazedProduct,
          showList: State.showList,
        })
      );
    }
    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };
}
