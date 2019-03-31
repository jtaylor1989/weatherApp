import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components import
import SearchBar from './src/components/SearchBar'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchBar />
        <View style={styles.container}>
          <Text>Weather Data for your city</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
