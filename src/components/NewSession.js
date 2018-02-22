/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Animated
} from 'react-native';

import { SearchBar } from 'react-native-elements';

export default class NewSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      text:"",
      user:""
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue:1,
        duration:1000,
      }
    ).start();
  }

  componentWillUnmount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue:0,
        duration:1000,
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View style={[styles.mainViewport,{opacity:fadeAnim}]}>
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
            lightTheme={true}
            showLoading={true}
            platform="ios"
            onChangeText={(text) => this.setState({user:text})}
            onClearText={() => this.setState({user:null})}
            placeholder='Search for users...'
            cancelButtonTitle='Cancel'
            inputStyle={styles.searchBar}
          />
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  inputHeader:{
    fontSize:15
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
  searchBar:{
    backgroundColor:'#fff',
    fontSize:13
  }
});
