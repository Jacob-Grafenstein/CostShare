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
import BackButton from './BackButton';

var customData = require('../lib/ActiveSessions.json');

export default class Session extends Component {
  constructor(props){
    super(props);
    this.state = {
      showActiveList:true,
      showPastList:false,
      hideMenuOptions:false
    }
  }

  toggleMenuOptions(){
    console.log("Toggle Options");
    this.setState({
      hideMenuOptions:!this.state.hideMenuOptions
    });
    console.log("hideMenuOptions=" + this.state.hideMenuOptions);
  }

  _showActiveSessions(){
    this.setState({
      showActiveList:true,
      showPastList:false,
      hideMenuOptions:false,
    });
    console.log("showActiveList=" + this.state.showActiveList);
    console.log("hideMenuOptions=" + this.state.hideMenuOptions);
  }

  _showPastSessions(){
    this.setState({
      showActiveList:false,
      showPastList:true,
      hideMenuOptions:false,
    });
    console.log("showActiveList=" + this.state.showActiveList);
  }

  _onHideUnderlay() {

  }

  _onShowUnderlay() {

  }

  render() {
    // let {showActiveList} = this.state.showActiveList;
    // let {showPastList} = this.state.showPastList;
    return (
      <View style={styles.container}>
        { this.state.hideMenuOptions ?
          <View></View>
          :
          <View style={styles.options}>
            <TouchableHighlight
              activeOpacity={1}
              style={[styles.optionLink]}
              underlayColor = {'#fff'}
              onPress={this._showActiveSessions.bind(this)}
              onHideUnderlay={this._onHideUnderlay.bind(this,1)}
              onShowUnderlay={this._onShowUnderlay.bind(this,1)}
            >
              <Text style={[styles.optionText, this.state.showActiveList ? styles.activeOption : {}]}>Active Sessions</Text>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={1}
              style={[styles.optionLink]}
              underlayColor = {'#fff'}
              onPress={this._showPastSessions.bind(this)}
              onHideUnderlay={this._onHideUnderlay.bind(this,1)}
              onShowUnderlay={this._onShowUnderlay.bind(this,1)}
            >
              <Text style={[styles.optionText,  this.state.showPastList ? styles.activeOption : {}]}>Past Sessions</Text>
            </TouchableHighlight>
          </View>
        }
        { this.state.showActiveList ?
          <ActiveList
            onInfoClick={this.toggleMenuOptions.bind(this)}
            showActiveList = {this.state.showActiveList}
          />
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

  },
  activeOption:{
    color:'#00aced',
    textDecorationLine:'underline',
    fontWeight:'bold',
  }
});
