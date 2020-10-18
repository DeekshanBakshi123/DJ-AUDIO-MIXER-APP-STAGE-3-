import * as React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';

export default class AppHeader extends React.Component{

render(){
return(
<View style={styles.textContainer}>
<Text style={styles.text}> DJ WhiteHat


</Text>
  <Image
        style={styles.logo}
        source={require('../assets/Headphone.png')}
      />
      <Image
        style={styles.logo1}
        source={require('../assets/Headphone1.png')}
      />
</View>



)
}


}
const styles=StyleSheet.create({

 
textContainer:{

backgroundColor:'blue',
},
text:{
color:'white',
marginTop:0,
fontSize:22,
fontWieght:'bold',
textAlign:'center',
padding:20,
},
 logo:{
width:30,
height:20,
left:220,
top:-42,
  },
  logo1:{
width:30,
height:20,
left:66,
top:-62,
  }


});











