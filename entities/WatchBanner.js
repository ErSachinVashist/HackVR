import React from "react";
import { Environment, staticAssetURL, Text, View, Image , asset} from "react-360";
//import GazeButton from "react-360-gaze-button";
import { connect, doorOpened } from "../store";
import { styles } from "../styleSheet";

class WatchBanner extends React.Component {
  
  render() {
      if (this.props.isOpened) return null;
    return (
      <View style={styles.bannerView}>
        
            <Image style={{ height: 300, width: 500 }} source={asset('banner3.png')} />
          
        
          {/* <Text style={styles.openBtn}>Open</Text> */}
      
      </View>
    );
  }
}
const WatchSurface = connect(WatchBanner);
export default WatchSurface;
