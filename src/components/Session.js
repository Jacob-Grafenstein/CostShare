/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput
} from 'react-native';

import { Icon } from 'react-native-elements';

import TopBar from './TopBar';

export default class Session extends Component {
  constructor(props){
    super(props);
    this.state = {
      newSession:false,
      text:""
    }
  }

  newSession(){
    this.setState({
      newSession:!this.state.isPressed
    });
    console.log(this.state.newSession);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.options}>
          <Text style={styles.optionText}>Active Sessions</Text>
          <Text style={styles.optionText}>Past Sessions</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:10
  },
  options:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  optionText:{
    fontSize:10
  }
});
