/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import GridLayoutActiveSession from './GridLayoutActiveSession';

var customData = require('../lib/ActiveSessions.json');

export default class ActiveList extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeSession: null
    }
    this.viewSessionInfo = this.viewSessionInfo.bind(this);
  }

  viewSessionInfo(infoKey){
    this.setState({
      activeSession:infoKey
    });
    console.log(this.state.activeSession);
    this.props.onInfoClick();
  }

  render() {
    var session = customData.activeSessions.find((session) => (
      session.key === this.state.activeSession
    ));
    if (this.state.activeSession != null) {
      return(
        <View>
          <Text>Hello</Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.headerCells}>
          <View style={[{flex:3}, styles.headerCell]}>
            <Text style={styles.headerText}>Session Title</Text>
          </View>
          <View style={[{flex:2}, styles.headerCell]}>
            <Text style={styles.headerText}>Start Date</Text>
          </View>
          <View style={[{flex:2}, styles.headerCell]}>
            <Text style={styles.headerText}>Total</Text>
          </View>
          <View style={{flex:1}}>
          </View>
        </View>
        <ScrollView>
          {
            customData.activeSessions.map((item, key) => (
              <GridLayoutActiveSession
                title = {item.title}
                startDate = {item.startDate}
                endDate = {item.endDate}
                users = {item.users}
                description = {item.description}
                total = {item.total}
                infoKey = {item.key}
                key = {key}
                isLast = { key === customData.activeSessions.length - 1 ? true : false }
                onClick = {this.viewSessionInfo.bind(this)}
              />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    paddingLeft:10,
    paddingRight:10
  },
  headerCells:{
    flexDirection:'row',
    backgroundColor:'#ccc',
    height:20,
    alignItems:'center'
  },
  headerCell:{
    paddingLeft:5,
  },
  headerText:{
    fontSize:13,
    fontWeight:'bold'
  }
});
