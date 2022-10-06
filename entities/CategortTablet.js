import React from "react";
import { Text, View } from "react-360";
import { connect } from "../store";
import { styles } from "../styleSheet";

class CategoryTablet extends React.Component {
  render() {
    if (!this.props.isOpened) return null;
    return (
      <View style={styles.categoryMainView}>
        <Text style={styles.text}>Tablets</Text>
      </View>
    );
  }
}

const CategoryTab = connect(CategoryTablet);

export default CategoryTab;
