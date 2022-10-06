import React from "react";
import { asset, Image, Text, View } from "react-360";
import { styles } from "../styleSheet";
import { connect, productGazed } from "../utils/store";
import GazeButton from "react-360-gaze-button";
import { PRODUCT_LIST } from "../utils/DATAS";

class Category extends React.Component {
  onGazed = (product) => {
    return () => {
      productGazed(product);
    };
  };

  render() {
    if (!this.props.isOpened) return null;
    return (
      <View style={styles.categoryMainView} onExit={this.onSurfaceExit}>
        <View style={styles.categoryHeading}>
          {this.props.showList && <Text style={styles.heading}>Products</Text>}
        </View>
        {this.props.showList ? (
          <View style={styles.categoryList}>
            {PRODUCT_LIST.map((product, index) => (
              <View key={index} style={styles.categoryItem}>
                <GazeButton
                  duration={200}
                  onClick={this.onGazed(product)}
                  render={(remainingTime, isGazed) => {
                    return <Text style={styles.text}>{product}</Text>;
                  }}
                />
              </View>
            ))}
          </View>
        ) : (
          <View>
            <Text
              style={styles.heading}
            >{`Move to ${this.props.gazedProduct} Section`}</Text>
            <Image
              style={{ height: 100, width: 300 }}
              source={asset("left_arrow.png")}
            />
          </View>
        )}
      </View>
    );
  }
}

const CategoryList = connect(Category);

export default CategoryList;
