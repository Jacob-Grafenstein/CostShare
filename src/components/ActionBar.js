/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import PropTypes from 'prop-types';

export default class ActionBar extends Component {

  constructor(props){
    super(props);
    // this.onPress = this.handlePress.bind(this);
    // this.action = this.props.action;
  }

  state = {
    currentViewId:this.props.currentViewId
  }

  // static propTypes = {
  //   handlePress: PropTypes.func.isRequired,
  // }

  handlePress = (viewId) => {
    // console.log(viewId)
    this.props.onPress(viewId)
  }

  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.button} onPress={() => this.handlePress(0)}>
            <Text>
              News
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.handlePress(1)}>
            <Text>
              New Session
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.handlePress(2)}>
            <Text>
              Add Friend
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.handlePress(3)}>
            <Text>
              History
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    display:'flex',
    flex:1
  },
  menu: {
    height:100,
    flex:1,
    justifyContent:"space-between",
     flexDirection:'row',
     alignItems:'flex-end',
    // alignSelf:"flex-end",
    // justifyContent:"space-between"
  },
  button:{
    flexDirection:'row',
    flex:1,
    justifyContent:"center",
    backgroundColor:'#ddd',
    paddingTop:20,
    paddingBottom:20
  }
});
