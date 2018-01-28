/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class NewsFeed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Im the NewsFeed component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
