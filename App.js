import React from 'react'
import { StyleSheet, Alert, View } from 'react-native'

// Local imports
import SearchBar from './src/components/SearchBar'
import WeatherCity from './src/components/WeatherCity'

export default class App extends React.Component {
  // Load the initial state of the App
  state = {
    city: undefined,
    cityLocation: undefined,
    weatherResults: []
  }

  // Get the city weahter forcast for the next five days
  getWeatherData = async () => {
    try {
      await this.getCityCoordinates()
      const cityWeather = await fetch(`https://www.metaweather.com/api/location/${this.state.cityLocation}/`)
      // convert response to JSON data
      const jsonData = await cityWeather.json()
      // Get forecast weather for five days
      const forcastDays = await jsonData["consolidated_weather"]
      this.setState({ weatherResults: forcastDays })
    } catch {
      Alert.alert('Make sure to type a proper city name!')
    }
  }

  // Get the city coordinates from the user search
  getCityCoordinates = async () => {
    const city = await fetch(`https://www.metaweather.com/api/location/search/?query=${this.state.city}`)
    const jsonCity = await city.json()
    const woeid = await jsonCity[0]['woeid']
    this.setState({ cityLocation: woeid })
  }

  // Get city name from user input
  onChangeText = (input) => {
    const city = this.cityNameFormatted(input)
    this.setState({ city: city })
  }

  // Format city name for API query. Example: New York ===> new+york
  cityNameFormatted = (input) => {
    // Replace space with + for cities with two words
    const queryCity = input.split(' ').join('+')
    // Return city name all lowercase
    return queryCity.toLowerCase()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* Users can search a city */}
        <SearchBar
          showCityWeather={this.getWeatherData}
          city={this.onChangeText}
        />
        <WeatherCity
          style={styles.container}
          forecastCity={this.state.weatherResults}
          city={this.state.city} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
