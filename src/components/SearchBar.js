import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Item, Input, Button, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

class SearchBar extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.headerStyle} >
          <Text style={{ fontSize: 28 }}>Weather</Text>
        </Header>
        <Item full style={{ marginBottom: 15 }}>
          <Ionicons name="ios-search" style={styles.iconStyle} />
          <Input placeholder="Enter city name" />
          <Ionicons name="md-rainy" style={styles.iconStyle} />
        </Item>
        <Button full primary>
          <Text>Search</Text>
        </Button>
      </Container>
    );
  }
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  headerStyle: {
    backgroundColor: '#fff',
    borderBottomColor: '#fff',
  },
  iconStyle: {
    fontSize: 26,
    padding: 5
  }
});