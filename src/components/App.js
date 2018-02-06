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
          <Newsfeed />
          <ActionBar action={this.setView.bind(this)}/>
        </View>
      );
    }
    if (this.state.viewId == 1) {
      return(
        <View style={styles.container}>
          <Session />
          <ActionBar action={this.setView.bind(this)}/>
        </View>
      );
    }
    if (this.state.viewId == 2) {
      return(
        <View style={styles.container}>
          <AddFriend />
          <ActionBar action={this.setView.bind(this)} />
        </View>
      );
    }
    if (this.state.viewId == 3) {
      return(
        <View style={styles.container}>
          <History />
          <ActionBar action={this.setView.bind(this)} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:25
  },
});
