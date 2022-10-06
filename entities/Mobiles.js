import propTypes from "prop-types";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-360";
import { connect } from "../store";

class Mobiles extends React.Component {
  render() {
    if (!this.props.phoneBrand) return null;
    return (
      <View>
        <View
          style={{
            width: 400,
            height: 400,
            backgroundColor: "#b3ffff",
          }}
        >
          <Text style={styles.brandText}>{this.props.phoneBrand}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  brandText: {
    fontSize: 30,
    color: "black",
  },
});

const MobileDescription = connect(Mobiles);

export default MobileDescription;
