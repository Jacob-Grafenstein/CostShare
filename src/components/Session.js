/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput
} from 'react-native';

import { Icon } from 'react-native-elements';

import TopBar from './TopBar';

export default class Session extends Component {
  constructor(props){
    super(props);
    this.state = {
      newSession:false,
      text:""
    }
  }

  newSession(){
    this.setState({
      newSession:!this.state.isPressed
    });
    console.log(this.state.newSession);
  }

  render() {
    if (this.state.newSession) {
      return (
        <View style={styles.container}>
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
          </View>
          <View style={styles.addUsers}>
            <Text style={styles.inputHeader}>Add Users</Text>

          </View>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <TopBar action={this.newSession.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:25
  },
  topBar:{
    flexDirection:'row-reverse',
    height:50,
    backgroundColor:'#00aced'
  },
  iconPress:{

  },
  button:{
    flex:1,
    width:'25%',
    alignItems:'flex-end',
    justifyContent:'center'
  },
  addNew:{
    flexDirection:'row',
    //backgroundColor:'#ddd',
  },
  shittyLogo:{
    width:'25%'
  },
  centerPiece:{
    width:'50%',
  },
  buttonText:{
    color:'#444',
    fontSize:13,
    //textAlign:'center',
    //paddingBottom:2,
    //paddingLeft:3,
  },
  buttonTextPress:{
    color:'#fff'
  },
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
    paddingLeft:10,
    paddingRight:10
  }
});
