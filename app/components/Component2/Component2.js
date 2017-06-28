import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';


export default class Component2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>Hello Blead!</Text>
        </View>

        <View style={styles.containerWrap}>
          <View style={styles.v1}>
            <Text>View1</Text>
          </View>
          <View style={styles.v2}>
            <Text>View2</Text>
          </View>
          <View style={styles.v3}>
            <Text>View3</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    color: 'red'
  },
  containerWrap: {
    flexDirection: 'row',
    height:100
  },
  v1: {
    flex: 1,
    backgroundColor:'red',
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor:'green',
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor:'white',
    padding: 10
  }
});

AppRegistry.registerComponent('Component2', () => Component2)
