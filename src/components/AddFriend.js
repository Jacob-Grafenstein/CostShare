/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class AddFriend extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Im the AddFriend component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
