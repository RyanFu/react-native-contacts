import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';
import Component3 from './app/components/Component3/Component3';
import Component4 from './app/components/Component4/Component4';

import FeedView from './app/components/FeedView/FeedView';
import Details from './app/components/Details/Details';

export default class contacts extends Component {
  render() {
    return (
      <ModalStack/>
    );
  }
}



const ModalStack = StackNavigator({
  Home: {
    screen: FeedView,
    navigationOptions: {
      title: 'CONTACTS',
      }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: 'DETAILS',
    }
  },
});

AppRegistry.registerComponent('contacts', () => contacts)
