/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
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
    this.setState({
      isPressed:true
    })
  }
  _onShowUnderlay(){
    this.setState({
      isPressed:false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text>Sessions</Text>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.button]}
            underlayColor = {'#444'}
            onHideUnderlay={this._onHideUnderlay.bind(this,0)}
            onShowUnderlay={this._onShowUnderlay.bind(this,0)}
          >
            <View style={styles.addNew}>
              <Icon
                name='ios-add'
                type='ionicon'
                color='#00aced'
                style={styles.buttonText}
              />
              <Text style={[styles.buttonText, this.state.isPressed ? styles.buttonTextPress : {}]}>Newsfeed</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Sessions</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar:{
    flexDirection:'row'
  },
  button:{
    flex:1,
    //flexDirection:'row'
  },
  addNew:{
    flexDirection:'row',
    //justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    flex:1,
    color:'#444',
    fontSize:10
  }
});
