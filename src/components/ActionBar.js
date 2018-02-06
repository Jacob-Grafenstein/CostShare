/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import { Icon } from 'react-native-elements';

import PropTypes from 'prop-types';

export default class ActionBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      pressZeroStatus:false,
      pressOneStatus:false,
      pressTwoStatus:false,
      pressThreeStatus:false
    };
    // this.action = this.props.action;
  }

  _onShowUnderlay(buttonId){
    switch(buttonId) {
      case 0:
        this.setState({pressZeroStatus:true});
        //console.log("Zero");
        break;
      case 1:
        this.setState({pressOneStatus:true});
        //console.log("One");
        break;
      case 2:
        this.setState({pressTwoStatus:true});
        //console.log("Two");
        break;
      case 3:
        this.setState({pressThreeStatus:true});
        //console.log("Three");
        break;
    }
  }

  _onHideUnderlay(buttonId){
    switch(buttonId) {
      case 0:
        this.setState({pressZeroStatus:false});
        //console.log("Zero");
        break;
      case 1:
        this.setState({pressOneStatus:false});
        //console.log("One");
        break;
      case 2:
        this.setState({pressTwoStatus:false});
        //console.log("Two");
        break;
      case 3:
        this.setState({pressThreeStatus:false});
        //console.log("Three");
        break;
    }
  }

  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.menu}>
          <TouchableHighlight
            activeOpacity={1}
            onPress={this.props.action.bind(this,0)}
            style={[styles.button]}
            underlayColor = {'#444'}
            onHideUnderlay={this._onHideUnderlay.bind(this,0)}
            onShowUnderlay={this._onShowUnderlay.bind(this,0)}
          >
            <View>
              <Icon
                name='ios-home-outline'
                type='ionicon'
                color='#00aced'
              />
              <Text style={[styles.buttonText, this.state.pressZeroStatus ? styles.buttonTextPress : {}]}>Newsfeed</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            style={[styles.button]}
            underlayColor = {'#444'}
            onPress={this.props.action.bind(this,1)}
            onHideUnderlay={this._onHideUnderlay.bind(this,1)}
            onShowUnderlay={this._onShowUnderlay.bind(this,1)}
          >
            <View>
              <Icon
                name='ios-add-circle-outline'
                type='ionicon'
                color='#00aced'
              />
            <Text style={[styles.buttonText, this.state.pressOneStatus ? styles.buttonTextPress : {}]}>Sessions</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            onPress={this.props.action.bind(this,2)}
            style={[styles.button]}
            underlayColor = {'#444'}
            onHideUnderlay={this._onHideUnderlay.bind(this,2)}
            onShowUnderlay={this._onShowUnderlay.bind(this,2)}
          >
            <View>
              <Icon
                name='ios-contacts-outline'
                type='ionicon'
                color='#00aced'
              />
            <Text style={[styles.buttonText,this.state.pressTwoStatus ? styles.buttonTextPress : {}]}>Friends</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            onPress={this.props.action.bind(this,3)}
            style={[styles.button]}
            underlayColor = {'#444'}
            onHideUnderlay={this._onHideUnderlay.bind(this,3)}
            onShowUnderlay={this._onShowUnderlay.bind(this,3)}
          >
            <View>
              <Icon
                name='ios-albums-outline'
                type='ionicon'
                color='#00aced'
              />
            <Text style={[styles.buttonText, this.state.pressThreeStatus ? styles.buttonTextPress : {}]}>History</Text>
            </View>
          </TouchableHighlight>
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
  },
  buttonPress:{
    backgroundColor:'#444'
  },
  buttonText:{
    fontSize:10,
    color:'#000'
  },
  buttonTextPress:{
    color:'#fff'
  }
});
