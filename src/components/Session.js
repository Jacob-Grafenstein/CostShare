/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import { Icon } from 'react-native-elements';

export default class Session extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPressed:false
    }

  }
  _onHideUnderlay(){
    console.log("HI");
    this.setState({
      isPressed:true
    })
  }
  _onShowUnderlay(){
    console.log("Your Mom")
    this.setState({
      isPressed:false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableHighlight
            activeOpacity={1}
            style={styles.button}
            underlayColor = {'#444'}
            onHideUnderlay={this._onHideUnderlay.bind(this,0)}
            onShowUnderlay={this._onShowUnderlay.bind(this,0)}
          >
            <View style={styles.addNew}>
              <Icon
                name='ios-add'
                type='ionicon'
                color='#00aced'
                style={styles.newIcon}
              />
              <Text style={[styles.buttonText, this.state.isPressed ? styles.buttonTextPress : {}]}>New Session</Text>
            </View>
          </TouchableHighlight>
          <View style={[styles.shittyLogo]}>
            <Text style={[styles.buttonText]}>Sessions</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10,
  },
  topBar:{
    flexDirection:'row-reverse',
    height:50
    // flex:1,
  },
  button:{
    flex:1,
    height:10,
    alignItems:'flex-end',
  },
  addNew:{
    flexDirection:'row',
    backgroundColor:'#ddd',
  },
  shittyLogo:{
    height:10,

  },
  buttonText:{
    color:'#444',
    fontSize:13,
    paddingBottom:2,
    paddingLeft:3,
  }
});
