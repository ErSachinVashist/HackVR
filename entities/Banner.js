import React from "react";
import { Environment, staticAssetURL, Text, View, Image , asset} from "react-360";
//import GazeButton from "react-360-gaze-button";
import { connect, doorOpened } from "../utils/store";
import { styles } from "../styleSheet";

class Banner extends React.Component {
  
    render() {
      if (this.props.isOpened) return null;
    
    return (
      <View style={styles.bannerView}>
        
        <Image
          style={{ height:300, width: "100%" }}
          source={asset("banner1.png")}
        />
        <Image
          style={{ height:300, width: "100%" }}
          source={asset("banner2.png")}
        />
        <Image
          style={{ height:"100%", width: "100%" }}
          source={asset("banner3.png")}
            />
            
         
          
        
          {/* <Text style={styles.openBtn}>Open</Text> */}
      
      </View>
    );
  }
}
const BannerSurface = connect(Banner);
export default BannerSurface;
