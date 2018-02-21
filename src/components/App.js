/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import ActionBar from './ActionBar';
import Profile from './Profile';
import History from './History';
import Session from './Session';
import AddFriend from './AddFriend'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.setView = this.setView.bind(this);

    this.state = {
      viewId:0
    }
  }

  setViewNewsfeed() {
    console.log(newsfeed);
    this.setState({
      viewId:2,
    });
  }
  setView(viewIdFromChild) {
    //console.log({this.props.viewId});
    this.setState({viewId:viewIdFromChild});
  }

  render() {
    if (this.state.viewId == 0) {
      return(
        <View style={styles.container}>
          <Profile />
          <ActionBar
            action={this.setView.bind(this)}
            activeView={this.state.viewId}
          />
        </View>
      );
    }
    if (this.state.viewId == 1) {
      return(
        <View style={styles.container}>
          <Session />
          <ActionBar
            action={this.setView.bind(this)}
            activeView={this.state.viewId}
          />
        </View>
      );
    }
    if (this.state.viewId == 2) {
      return(
        <View style={styles.container}>
          <AddFriend />
          <ActionBar
            action={this.setView.bind(this)}
            activeView={this.state.viewId}
          />
        </View>
      );
    }
    if (this.state.viewId == 3) {
      return(
        <View style={styles.container}>
          <History />
          <ActionBar
            action={this.setView.bind(this)}
            activeView={this.state.viewId}
          />
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
