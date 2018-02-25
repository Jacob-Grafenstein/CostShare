/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import BackButton from './BackButton';
import SessionInfo from './SessionInfo';

export default class ActiveSession extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BackButton
          backButtonText={'< Active Sessions'}
          action={this.props.onBackButtonClick}
        />
        <Text>Im the ActiveSession component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft:10,
    paddingRight:10
  },
});
