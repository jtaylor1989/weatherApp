import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native"

import { Card } from 'native-base'
import moment from 'moment'


// // Takes a given date and ouptu the coresponding day
// const getDayOfMonth = (date) => {
//   newDate = date.split('-').reverse().join('-')
//   return (moment(newDate).format('dddd'))
// }

const WeatherCity = (props) => (
  <View style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={styles.container}>
      {
        props.forecastCity.map((day, index) => (
          <Card key={index} style={styles.cardStyle}>
            <Text style={styles.textStyle}>
              Date: {day.applicable_date}
            </Text>
            <Text style={styles.textStyle}>
              Forecast: {day.weather_state_name}
            </Text>
            <Text style={styles.textStyle}>
              Temperature: {Math.round(day.the_temp)} °C
            </Text>
            <Text style={styles.textStyle}>
              Max: {Math.round(day.max_temp)} °C
            </Text>
            <Text style={styles.textStyle}>
              Min: {Math.round(day.min_temp)} °C
            </Text>
            <Text style={styles.textStyle}>
              Humidity: {day.humidity} %
            </Text>
            <Text style={styles.textStyle}>
              Wind speed: {Math.round(day.wind_speed)} Km/h
            </Text>
            <Text style={styles.textStyle}>
              Visibility: {Math.round(day.visibility)} Km
            </Text>
            <Text style={styles.textStyle}>
              Pressure: {Math.round(day.air_pressure)} mBar
            </Text>
          </Card>
        ))
      }
    </ScrollView>
  </View>
)

export default WeatherCity

// Get the width of the device
let width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20,
    padding: 5
  },
  cardStyle: {
    backgroundColor: '#69FB',
    padding: 10,
    width: width,
    marginBottom: 20
  },
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