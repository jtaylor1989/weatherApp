import React from 'react'
import { Alert, View, Keyboard } from 'react-native'

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

  // Get the city weather forcast for the next five days using an external API
  getWeatherData = async () => {
    try {
      await this.getCityCoordinates()
      // Fetch weather data based on City name
      const cityWeather = await fetch(`https://www.metaweather.com/api/location/${this.state.cityLocation}/`)
      // Convert the response to JSON data
      const jsonData = await cityWeather.json()
      // Extract the forecast for the next five days
      const forcastDays = await jsonData["consolidated_weather"]
      // Dismiss Keyboard when submitting search result
      Keyboard.dismiss()
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

  // Get city name from user input to query data
  onChangeText = (input) => {
    const city = this.cityNameFormatted(input)
    this.setState({ city: city })
  }

  // Format city name for the API query. Example: New York ===> new+york
  cityNameFormatted = (input) => {
    // Replace space with + for cities with two words
    const queryCity = input.split(' ').join('+')
    // Return city name all lowercase
    return queryCity.toLowerCase()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* Component to allow users searching a city */}
        <SearchBar
          showCityWeather={this.getWeatherData}
          city={this.onChangeText}
        />
        {/* Component to output weather data */}
        <WeatherCity
          forecastCity={this.state.weatherResults}
          city={this.state.city} />
      </View>
    )
  }
}
