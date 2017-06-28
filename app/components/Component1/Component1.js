import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Erik',
      showName: true,
      message: this.props.message
    }
  }
  static defaultProps = {
    message: 'Hi There '
  }
  render() {
    let name = this.state.showName ? this.state.name : 'No name';
    console.log("Hello console!");

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.message}{name}
        </Text>

        <Text style={styles.instructions}>
          I'm Component1!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

AppRegistry.registerComponent('Component1', () => Component1)
