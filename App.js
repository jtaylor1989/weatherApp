import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Components import
import SearchBar from './src/components/SearchBar'

export default class App extends React.Component {
  state = {
    // temperature: undefined,
    cityLocation: undefined,
    city: undefined,
    // humidity: undefined,
    // description: undefined,
    // error: undefined
  }

  componentDidMount = () => {
    // this.getWeatherData()
  }

  // Get city name from user input
  onChangeText = (input) => {
    const city = this.cityNameFormatted(input)
    this.setState({ city: city })
    console.log(city)
  }

  // Format city name for API query. Example: New York ===> new+york
  cityNameFormatted = (input) => {
    // Replace space with + for cities with two words
    const queryCity = input.split(' ').join('+')
    // Return city name all lowercase
    return queryCity.toLowerCase()
  }

  // Get the city coordinates from the user search
  getCityCoordinates = async () => {
    const city = await fetch(`https://www.metaweather.com/api/location/search/?query=${this.state.city}`)
    const jsonCity = await city.json()
    const woeid = await jsonCity[0]['woeid']
    this.setState({ cityLocation: woeid })
  }

  // Get the city weahter forcast for the next five days
  getWeatherData = async () => {
    await this.getCityCoordinates()
    const cityWeather = await fetch(`https://www.metaweather.com/api/location/${this.state.cityLocation}/`)
    const jsonData = await cityWeather.json()
    console.log(jsonData)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* Users can search a city */}
        <SearchBar
          showCityWeather={this.getWeatherData}
          city={this.onChangeText}
        />
        {/* Users can get weather data for that city */}
        <View style={styles.container}>
          <Text>Weather Data for your city</Text>
        </View>
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
