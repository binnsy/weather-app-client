import React, { Component } from 'react'
import Form from './Form'
import Weather from './Weather'

const API_KEY = 'ef5d8a48d78cc02d83d6e57cef47e43c'

class WeatherMainPage extends Component {
    state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
  // depricated...
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //
  //   }
  // }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_KEY}`)
    const data = await apiCall.json()
    if (city && country) {
      console.log(data)
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter valid city and country.'
      })
    }
  }
  render () {
    return (
      <div>
      Hi!
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default WeatherMainPage
