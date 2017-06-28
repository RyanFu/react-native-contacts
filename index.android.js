import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';
import Component3 from './app/components/Component3/Component3';

export default class contacts extends Component {
  render() {
    return (
      <View>
        <Component3/>
      </View>
    );
  }
}

AppRegistry.registerComponent('contacts', () => contacts)
