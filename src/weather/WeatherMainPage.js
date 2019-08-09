import React, { Component } from 'react'
import WeatherForm from './WeatherForm'
// import ForecastForm from './ForecastForm'
import Weather from './Weather'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faSnowflake,
  faBolt,
  faCloud,
  faCloudShowersHeavy,
  faCloudSun,
  faSun,
  faCloudRain,
  faSmog,
  faWind
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  // fab,
  faSnowflake,
  faBolt,
  faCloud,
  faCloudShowersHeavy,
  faCloudSun,
  faSun,
  faCloudRain,
  faSmog,
  faWind
)

const API_KEY = 'ef5d8a48d78cc02d83d6e57cef47e43c'

class WeatherMainPage extends Component {
    state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      wind: undefined,
      description: undefined,
      icon: undefined,
      error: undefined
    }
    // depricated...
    // constructor (props) {
    //   super(props)
    //   this.state = {
    //
    //   }
    // }

    // getForecast = async (e) => {
    //   e.preventDefault()
    //   const city = e.target.elements.city.value
    //   const country = e.target.elements.country.value
    //   // const apiCall = await fetch(`https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid=${API_KEY}`)
    //   const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&appid=${API_KEY}`)
    //   const data = await apiCall.json()
    //   console.log('data forecast', data)
    //   if (city && country) {
    //     console.log(data, 'hi')
    //   }
    // }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_KEY}`)
    const data = await apiCall.json()
    if (data.message === 'city not found') {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        icon: undefined,
        error: 'Please enter valid city and country.'
      })
      // console.log('error')
    } else if (city && country) {
      console.log(data)
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        icon: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        icon: undefined,
        error: 'Please enter valid city and country.'
      })
    }
  }
  Capitalize (str) {
    if (str === undefined) {
    } else {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }

  FontAwesome (str) {
    // console.log(str)
    // str = str.charAt(0).toUpperCase() + str.slice(1)
    console.log(str)
    //   // for (const key in response.data.workout) {
    if (str === 'scattered clouds' || str === 'few clouds') {
      return <FontAwesomeIcon icon={faCloudSun} size="2x" />
    //     // return <i className="far fa-clock">Run</i>
    } else if (str === 'light rain' || str === 'rain') {
      return <FontAwesomeIcon icon={faCloudRain} size="2x" />
    } else if (str === 'clear sky') {
      return <FontAwesomeIcon icon={faSun} size="2x" />
    } else if (str === 'mist') {
      return <FontAwesomeIcon icon={faSmog} size="2x" />
    } else if (str === 'broken clouds') {
      return <FontAwesomeIcon icon={faCloudSun} size="2x" />
    } else if (str === 'heavy intensity rain') {
      return <FontAwesomeIcon icon={faCloudRain} size="2x" />
    } else if (str === 'thunderstorm') {
      return <FontAwesomeIcon icon={faBolt} size="2x" />
    } else if (str === 'snow') {
      return <FontAwesomeIcon icon={faSnowflake} size="2x" />
    }
    // else {
    //   return <FontAwesomeIcon icon={faCloudShowersHeavy} size="2x" />
    // }
  }

  render () {
    return (
      <div className="form-container">
        <div className="content">
          <WeatherForm className="form" getWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            wind={this.state.wind}
            city={this.state.city}
            country={this.state.country}
            description={this.Capitalize(this.state.description)}
            icon={this.FontAwesome(this.state.description)}
            error={this.state.error}
          />
        </div>
      </div>
    )
  }
}

// <ForecastForm className="form" getForecast={this.getForecast} />
// <div>
//   <div className="wrapper">
//     <div className="main">
//       <div className="container">
//         <div className="row">
//           <div className="col-xs-5 title-container">
//             HI
//           </div>
//           <div className="col-xs-7 form-container">
//             <Form getWeather={this.getWeather} />
//             <Weather
//               temperature={this.state.temperature}
//               humidity={this.state.humidity}
//               city={this.state.city}
//               country={this.state.country}
//               description={this.state.description}
//               error={this.state.error}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
export default WeatherMainPage
