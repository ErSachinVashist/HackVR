import React from "react";

const State = {
  phoneBrand: "",
  isOpened: false,
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
  updateComponent();
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      phoneBrand: State.phoneBrand,
      isOpened: State.isOpened,
    };
    componentDidMount() {
      callbacks.push(() =>
        this.setState({
          phoneBrand: State.phoneBrand,
          isOpened: State.isOpened,
        })
      );
    }
    render() {
      return (
        <Component
          {...this.props}
          phoneBrand={this.state.phoneBrand}
          isOpened={this.state.isOpened}
        />
      );
    }
  };
}
