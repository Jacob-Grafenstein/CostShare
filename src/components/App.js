/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import TopBar from './TopBar';
import ActionBar from './ActionBar';
import Profile from './Profile';
import Settings from './Settings';
import Session from './Session';
import AddFriend from './AddFriend';
import NewSession from './NewSession';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.setView = this.setView.bind(this);

    this.state = {
      viewId:0,
      newSession:false
    }
  }

  setViewNewsfeed() {
    console.log(newsfeed);
    this.setState({
      viewId:2,
    });
  }

  newSession(){
    this.setState({
      newSession:!this.state.newSession
    });
    console.log(this.state.newSession);
  }

  setView(viewIdFromChild) {
    //console.log({this.props.viewId});
    this.setState({viewId:viewIdFromChild});
  }

  render() {
    if (this.state.newSession) {
      return(
        <View style={styles.container}>
          <TopBar action={this.newSession.bind(this)}/>
          <NewSession />
          <ActionBar
            action={this.setView.bind(this)}
            activeView={this.state.viewId}
          />
        </View>
      )
    }
    if (this.state.viewId == 0) {
      return(
        <View style={styles.container}>
          <TopBar action={this.newSession.bind(this)}/>
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
          <TopBar action={this.newSession.bind(this)}/>
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
          <Settings />
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
