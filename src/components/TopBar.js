/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import { Icon } from 'react-native-elements';

export default class TopBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPressed:false
    }
  }



  _onHideUnderlay(){
    /*console.log("HI");*/
    this.setState({
      isPressed:true,
    })
  //  console.log(this.state.isPressed);
  }
  _onShowUnderlay(){
    /*console.log("Your Mom")*/
    this.setState({
      isPressed:false
    })
    //console.log(this.state.isPressed);
  }

  render() {
    return (
      <View style={styles.topBar}>
        <TouchableHighlight
          style={[styles.button]}
          underlayColor = {'#444'}
          onPress = {this.props.action.bind(this)}
          onHideUnderlay={this._onHideUnderlay.bind(this)}
          onShowUnderlay={this._onShowUnderlay.bind(this)}
        >
          <View style={styles.addNew}>
            <Icon
              name='ios-add'
              type='ionicon'
              color={this.state.iconColor}
              iconStyle={styles.ne}
            />
            <Text style={[styles.buttonText]}>New Session</Text>
          </View>
        </TouchableHighlight>
        <View style={[styles.centerPiece]}>
          <Text style={[styles.buttonText]}>Split!</Text>
        </View>
        <View style={[styles.shittyLogo]}>
          <Text style={[styles.buttonText]}>Sessions</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button:{
    flex:1
  },
  topBar: {
    flexDirection:'row-reverse',
    backgroundColor:'#00aced',
    alignItems:'center',
  },
  addNew:{
    flexDirection:'row',
  },
  centerPiece:{
    flex:2,
    alignSelf:'center'
  },
  shittyLogo:{
    flex:1
  },
  buttonText:{
    alignSelf:'center'
  },
  newIcon:{
    alignSelf:'center'
  }
});
