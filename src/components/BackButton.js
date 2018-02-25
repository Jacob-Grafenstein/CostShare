import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class BackButton extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          activeOpacity={1}
          style={[styles.backButtonHighlight]}
          underlayColor = {'#ddd'}
          onPress={this.props.action.bind(this)}
        >
          <Text style={styles.backButtonText} >{this.props.backButtonText}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButtonText:{
    fontSize:11
  }
});
