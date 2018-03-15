import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import { Icon } from 'react-native-elements';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          {/*<Image
            style={styles.backgroundPicture}
            source={require('../lib/Pictures/Jake_profile_pic.jpg')}
            blurRadius={20}
            resizeMode='contain'
          />*/}
        </View>
        <View style={styles.pictureContainer}>
          <Image
            style={styles.profilePicture}
            source={require('../lib/Pictures/Jake_profile_pic.jpg')}
          />
        <Text
          style={[styles.profileName]}
          shadowColor='#000'
          shadowRadius={100}
        >Jacob Grafenstein</Text>
        </View>
        <View style={styles.informationContainer}>
          <View style={styles.phoneNumberContainer}>
            <Icon
              name='ios-call-outline'
              type='ionicon'
            />
          <Text>(651) 200-7671</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pictureContainer:{
    alignItems:'center',
    marginTop:20,
    // position:'absolute',
    width:'100%',
  },
  profilePicture:{
    width:150,
    height:150,
    borderRadius:75,
  },
  profileName:{
    marginTop:15,
    color:"#fff",
    fontSize:20
  },
  container: {

  },
  backgroundContainer:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    position:'absolute',
    backgroundColor:'#aaa',
  },
  backgroundPicture:{
    // position:'absolute',
    width:undefined,
    height:undefined,
    flex:1,
  },
  phoneNumberContainer:{
    flexDirection:'row'
  },
});
