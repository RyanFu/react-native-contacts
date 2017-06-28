import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity} from 'react-native';


export default class Component2 extends Component {

  onPress() {
    console.log("Area1 Pressed");
  }
  onPress2() {
    console.log("Area2 Pressed");
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeWrapper}>
          <Text style={styles.welcome}>Hello Blead!</Text>
        </View>

        <View style={styles.containerWrap}>
          <TouchableHighlight
            style={styles.v1}
            onPress={this.onPress}
            underlayColor='#2286c3'
          >
            <View>
              <Text>View1</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity
            style={styles.v2}
            onPress={this.onPress2}
          >
            <View>
              <Text>View2</Text>
            </View>
          </TouchableOpacity>


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
    backgroundColor: 'white',
  },
  welcomeWrapper: {
    backgroundColor: '#64b5f6',
    width: '100%'
  },
  welcome: {
    textAlign: 'left',
    fontSize: 20,
    margin: 5,
  },
  instructions: {
    textAlign: 'left',
    color: '#000000',
    marginBottom: 5,
  },
  containerWrap: {
    flexDirection: 'row',
    height:100
  },
  v1: {
    flex: 1,
    backgroundColor:'#9be7ff',
    padding: 10,
    margin: 10
  },
  v2: {
    flex: 1,
    backgroundColor:'#9be7ff',
    padding: 10,
    margin: 10
  },
  v3: {
    flex: 1,
    backgroundColor:'#9be7ff',
    padding: 10,
    margin: 10
  }
});

AppRegistry.registerComponent('Component2', () => Component2)
