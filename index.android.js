/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';

export default class contacts extends Component {
  render() {
    return (
      <View>
        <Component2/>
      </View>
    );
  }
}

AppRegistry.registerComponent('contacts', () => contacts)
