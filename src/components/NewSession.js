/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

import { SearchBar } from 'react-native-elements';

export default class NewSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:"",
      user:""
    }
  }

  render() {
    return (
      <View style={styles.mainViewport}>
        <Text style={styles.inputHeader}>Enter Session Title</Text>
        <TextInput
          multiline = {false}
          onChangeText={(text) => this.setState({text})}
          placeholder={"Add a session title..."}
          editable = {true}
          maxLength = {40}
          value = {this.state.text}
          style = {styles.textInput}
        />
        <View style={styles.addUsers}>
          <Text style={styles.inputHeader}>Add Users</Text>
          <SearchBar
            round
            onChangeText={(text) => this.setState({user})}
            onClearText={() => this.setState({user:null})}
            placeholder='Type Here...'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputHeader:{
    fontSize:13
  },
  textInput:{
    // flex:1,
    borderColor:'#ddd',
    borderRadius:5,
    borderWidth:1,
    padding:1,
    height:20
  },
  mainViewport:{
    flex: 1,
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10
  },
  addUsers:{
    paddingTop:10
  },
});
