/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import ActionBar from './ActionBar';
import Newsfeed from './Newsfeed';
import History from './History';
import Session from './Session';
import AddFriend from './AddFriend'

export default class App extends Component {
  state = {
    viewId:0,
  }

  setView = (viewIdFromChild) => {
    console.log(viewId);
    this.setState({viewId:viewIdFromChild});
  }

  render() {
    if (this.state.viewId == 0) {
      return(
        <View style={styles.container}>
          <Newsfeed />
          <ActionBar onPress={this.setView} currentViewId={this.state.viewId}/>
        </View>
      );
    }
    if (this.state.viewId == 1) {
      return(
        <View style={styles.container}>
          <Session />
          <ActionBar onPress={() => setView(this.state.viewId)}/>
        </View>
      );
    }
    if (this.state.viewId == 2) {
      return(
        <View style={styles.container}>
          <AddFriend />
          <ActionBar />
        </View>
      );
    }
    if (this.state.viewId == 3) {
      return(
        <View style={styles.container}>
          <History />
          <ActionBar />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
