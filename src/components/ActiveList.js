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
      activeSession: []
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerCells}>
          <View style={{flex:3}}>
            <Text>Session Title</Text>
          </View>
          <View style={{flex:2}}>
            <Text>Start Date</Text>
          </View>
          <View style={{flex:2}}>
            <Text>Total</Text>
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
                isLast = { key === customData.activeSessions.length - 1 ? true : false }
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
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10
  },
  headerCells:{
    flexDirection:'row',
    paddingRight:5,
    paddingLeft:5,
  }
});
