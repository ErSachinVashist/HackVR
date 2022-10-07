import React from "react";
import { Environment, staticAssetURL, Text, View, Image , asset} from "react-360";
//import GazeButton from "react-360-gaze-button";
import { connect, doorOpened } from "../utils/store";
import { styles } from "../styleSheet";

class Logo extends React.Component {
  
    render() {
      if (!this.props.isOpened) return null;
    
    return (
      <View style={styles.logoView}>
        
        <Image
          style={{ height:600, width: "100%" }}
          source={asset("logo.png")}
        />
        
         
          
        
          {/* <Text style={styles.openBtn}>Open</Text> */}
      
      </View>
    );
  }
}
const LogoBanner = connect(Logo);
export default LogoBanner;
