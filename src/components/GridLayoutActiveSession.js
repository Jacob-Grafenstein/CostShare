/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import { Icon } from 'react-native-elements';

export default class GridLayoutActiveSession extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    let isLast = this.props.isLast;
    return (
      <View style={[styles.gridRow, isLast ? {borderBottomWidth:0} : {}]}>
        <View style={[styles.sessionTitle, styles.gridItem]}>
          <Text style={styles.gridText}>{this.props.title}</Text>
        </View>
        <View style={[styles.sessionStartDate, styles.gridItem]}>
          <Text style={styles.gridText}>{this.props.startDate}</Text>
        </View>
        <View style={[styles.sessionTotal, styles.gridItem]}>
          <Text style={styles.gridText}>${this.props.total}</Text>
        </View>
        <View style={[styles.sessionInfo, styles.gridItem]}>
          <TouchableHighlight
            activeOpacity={1}
            style={[styles.optionLink]}
            underlayColor = {'#ddd'}
            onPress={this.props.onClick.bind(this, this.props.infoKey)}
          >
            <Icon
              name='ios-information-circle-outline'
              type='ionicon'
              color='#000'
            />
          </TouchableHighlight>
        </View>
        {/*<Text>{this.props.endDate}</Text>
        {
          this.props.users.map((user) => (
            <View>
              <Text>{user}</Text>
            </View>
          ))
        }
        <Text>{this.props.description}</Text>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridRow:{
    flexDirection:'row',
    height:40,
    backgroundColor:'#eee',
    paddingLeft:5,
    borderBottomColor:'#ddd',
    borderBottomWidth:1,
  },
  gridItem:{
    justifyContent:'center',
  },
  sessionTitle:{
    flex:3,
    borderRightWidth:1,
    borderRightColor:'#ddd',
  },
  sessionStartDate:{
    flex:2,
    paddingLeft:5,
    borderRightWidth:1,
    borderRightColor:'#ddd',
  },
  sessionTotal:{
    flex:2,
    paddingLeft:5,
    borderRightWidth:1,
    borderRightColor:'#ddd',
  },
  sessionInfo:{
    flex:1,
    justifyContent:'center'
  },
  gridText:{
    fontSize:12
  }
});
