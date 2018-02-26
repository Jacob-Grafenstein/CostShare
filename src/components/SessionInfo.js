/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { compareSessionDetails } from '../helpers/globalFunctions.js';

export default class SessionInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEdited: false,
      sessionDetails:this.props.sessionInfo
    }
  }

  saveSessionDetails(){
    var isEqual = compareSessionDetails(this.state.sessionDetails, this.props.sessionInfo);
    if (isEqual) {
      console.log("Needs saving");
      return;
    }
    console.log("Doesn't need saving");
  }

  render() {
    if (this.props.isEditable) {
      return(
        <View>
          <Text>Hi Mom</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Session Title</Text>
        </View>
        <View style={styles.sessionInfo}>
          <Text style={styles.sessionInfoText}>{this.props.sessionInfo.title}</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Description</Text>
        </View>
        <View style={styles.sessionInfo}>
          <Text style={styles.sessionInfoText}>{this.props.sessionInfo.description}</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Start Date</Text>
        </View>
        <View style={styles.sessionInfo}>
          <Text style={styles.sessionInfoText}>{this.props.sessionInfo.startDate}</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Users</Text>
        </View>
        <View style={styles.sessionInfo}>
          <Text style={styles.sessionInfoText}>{this.props.sessionInfo.users}</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Total</Text>
        </View>
        <View style={styles.sessionInfo}>
          <Text style={styles.sessionInfoText}>${this.props.sessionInfo.total}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  header:{
    paddingBottom:5,
  },
  sessionInfo:{
    paddingBottom:8,
  },
  headerText:{
    fontSize:12,
    fontWeight:'bold',
  },
  sessionInfoText:{
    fontSize:11,
  },

});
