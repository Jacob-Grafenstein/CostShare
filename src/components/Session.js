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
import ActiveList from './ActiveList';
import PastList from './PastList';

var customData = require('../lib/ActiveSessions.json');

export default class Session extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive:true,
      hideOptions:false
    }
  }

  toggleOptions(){
    console.log("Toggle Options");
    this.setState({
      hideOptions:!this.state.hideOptions
    });
    console.log("hideOptions=" + this.state.hideOpions);
  }

  _showActiveSessions(){
    this.setState({
      isActive:true
    });
    console.log("isActive=" + this.state.isActive);
  }

  _showPastSessions(){
    this.setState({
      isActive:false
    });
    console.log("isActive=" + this.state.isActive);
  }

  _onHideUnderlay() {

  }

  _onShowUnderlay() {

  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.hideOpions ? <View></View> :
          <View style={styles.options}>
            <TouchableHighlight
              activeOpacity={1}
              style={[styles.optionLink]}
              underlayColor = {'#ddd'}
              onPress={this._showActiveSessions.bind(this)}
              onHideUnderlay={this._onHideUnderlay.bind(this,1)}
              onShowUnderlay={this._onShowUnderlay.bind(this,1)}
            >
              <Text style={styles.optionText}>Active Sessions</Text>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={1}
              style={[styles.optionLink]}
              underlayColor = {'#ddd'}
              onPress={this._showPastSessions.bind(this)}
              onHideUnderlay={this._onHideUnderlay.bind(this,1)}
              onShowUnderlay={this._onShowUnderlay.bind(this,1)}
            >
              <Text style={styles.optionText}>Past Sessions</Text>
            </TouchableHighlight>
          </View>
        }
        { this.state.isActive ?
          <ActiveList onInfoClick={this.toggleOptions.bind(this)} />
          :
          <PastList />
        }
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
  },
  optionLink:{

  }
});
