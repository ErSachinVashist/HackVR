import React from 'react';
import {
    Text, 
    View,
    SafeAreaView
} from 'react-native';

import { styles } from "../styleSheet";

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
    activeIndex: 0,
        photos: [
            {
            uri: './static_assets/banner1.png',
            title: 'Self Portrait',
            },
            {
                uri: './static_assets/banner2.png',
                title: 'Self Portrait',
            },
            {
                uri: './static_assets/banner3.png',
                title: 'Self Portrait',
            }
        ],
        images: [
            './static_assets/banner2.png',
            './static_assets/banner2.png',
            './static_assets/banner2.png',
        ]
    }
  }
    
    render() {
      if (this.props.isOpened) return null;
      return (
        <View style={styles.bannerView}>
              
        </View>
      );
  }
}