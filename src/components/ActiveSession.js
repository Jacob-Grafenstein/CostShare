/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import BackButton from './BackButton';
import SessionInfo from './SessionInfo';

export default class ActiveSession extends Component {
  constructor(props){
    super(props);
    this.state = {
      editTransaction:false
    }
  }

  editSessionDetails() {
    if (this.state.editTransaction) {
      console.log("Saving the Session");
    }
    this.setState({
      editTransaction:!this.state.editTransaction
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menuOptions}>
          <BackButton
            backButtonText={'< Active Sessions'}
            action={this.props.onBackButtonClick}
          />
          <TouchableHighlight
            activeOpacity={1}
            onPress={this.editSessionDetails.bind(this)}
            underlayColor = {'#ddd'}
          >
            {
              this.state.editTransaction ?
              <Text style={styles.menuOption}>Save Changes</Text> :
              <Text style={styles.menuOption}>Edit Session Details</Text>
            }

          </TouchableHighlight>
        </View>
        <SessionInfo
          sessionInfo={this.props.activeSession}
          isEditable={this.state.editTransaction}
        />
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
  menuOptions:{
    flexDirection:'row',
    paddingBottom:20,
    justifyContent:'space-between'
  },
  menuOption:{
    fontSize:11,
  }
});
