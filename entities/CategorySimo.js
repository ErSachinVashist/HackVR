import React from "react";
import { Text, View } from "react-360";
import { connect } from "../utils/store";
import { styles } from "../styleSheet";

class CategorySimOnly extends React.Component {
  render() {
    if (!this.props.isOpened) return null;
    return (
      <View style={styles.mainView}>
        <Text style={styles.heading}>Sim Only</Text>
      </View>
    );
  }
}

const CategorySimo = connect(CategorySimOnly);

export default CategorySimo;
