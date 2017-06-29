import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import jsUcfirst from '../../helpers/jsUcfirst';


export default class Details extends Component {
  constructor(props){
    super(props);
    let fullName = jsUcfirst(this.props.navigation.state.params.name.first) + ' ' + jsUcfirst(this.props.navigation.state.params.name.last);
    this.state = {
      name: fullName,
      email: this.props.navigation.state.params.email,
      phone: this.props.navigation.state.params.phone,
      photo: this.props.navigation.state.params.picture.large,
    }
  }
  render(){

    return (
      <View style={styles.photoContainer}>
        <Image
          style={styles.photo}
          source={{uri: this.state.photo}}
        />
        <View style={styles.details}>
          <Text style={styles.rowText}>{this.state.name}</Text>
          <Text style={styles.email}>{this.state.email}</Text>
          <Text style={styles.phone}>{this.state.phone}</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  photoContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#f4f4f4',
  },
  details: {
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#f4f4f4',
  },
  rowText: {
    color: 'black',
    fontSize: 30,
    textAlign: 'left',
  },
  email: {
    textAlign: 'left',
  },
  phone: {
    fontSize: 20,
    marginTop: 5,
  },
  photo: {
    flexDirection: 'row',
    padding: 0,
    width: "100%",
    height: 170,
  }
});
AppRegistry.registerComponent('Details', () => Details)
