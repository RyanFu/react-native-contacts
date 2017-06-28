import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView } from 'react-native';

const users = [
  {name: 'John Doe'},
  {name: 'Ivan Ivanov'},
  {name: 'Sam Doe'},
  {name: 'Cale White'},
  {name: 'John Black'},
]

export default class Component4 extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds.cloneWithRows(users),
    }
  }
  renederRow(user, sectionId, rowId, highlightRow){
    return(
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}</Text>
      </View>
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
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 3
  }
});

AppRegistry.registerComponent('Component4', () => Component4)
