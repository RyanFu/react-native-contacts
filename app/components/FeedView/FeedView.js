import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, TouchableHighlight, Image } from 'react-native';
import jsUcfirst from '../../helpers/jsUcfirst';

export default class FeedView extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds,
    }
  }
  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers(){
    fetch('https://randomuser.me/api/?results=50&inc=name,email,phone,picture&noinf')
    .then((res) => res.json())
    .then((res) => {
      // sorting by first name
      res.results.sort(function (a, b) {
        return a.name.first.localeCompare(b.name.first);
      });
      this.setState({
        userDataSource: this.state.userDataSource.cloneWithRows(res.results)
      });
    })
    .catch((err) => console.log(err));
  }
  onPress(user){
    this.props.navigation.navigate('Details', { ...user });
  };

  renederRow(user, sectionId, rowId, highlightRow){
    let fullName = jsUcfirst(user.name.first) + ' ' + jsUcfirst(user.name.last);
    return(
      <TouchableHighlight onPress={() => this.onPress(user)}>
        <View style={styles.row}>
          <Image
            style={styles.photo}
            source={{uri: user.picture.medium}}
          />
          <View style={styles.column}>
            <Text style={styles.rowText}>{fullName}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render(){
    return (
      <ListView
        dataSource={this.state.userDataSource}
        renderRow={this.renederRow.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#f4f4f4',
    padding: 10,
    paddingLeft:20,
    backgroundColor: '#f4f4f4',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft:20,
  },
  rowText: {
    color: 'black',
    fontSize: 20,
  },
  photo: {
    borderRadius: 50,
    width: 50,
    height: 50,
  }
});

AppRegistry.registerComponent('FeedView', () => FeedView)
