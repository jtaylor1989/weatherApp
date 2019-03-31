import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from "react-native"

const WeatherCity = (props) => (
  <View style={styles.container}>
    <Text>
      {props.forecastCity.map(day => day.weather_state_name)}
    </Text>
  </View>
)
export default WeatherCity

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

// Data to show 
// "applicable_date": [], // Date
// "the_temp": [], // Current temp: C
// "max_temp": [],
// "min_temp": [], // Round
// "weather_state_name": "", // Show Icon if possible
// "wind_speed": [],
// "air_pressure": [], // Pressure: mBar
// "humidity": [], // %
// "visibility": [], // Km round this