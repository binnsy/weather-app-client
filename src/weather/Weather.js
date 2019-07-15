import React, { Component } from 'react'

class Weather extends Component {
  render () {
    return (
      <div className="weather-info">
        <div className="weather">
          {
            this.props.city && this.props.country &&
            <p className="weather-key">Location:
              <span className="weather-value"> { this.props.city }, { this.props.country } </span>
            </p>
          }
          {
            this.props.temperature &&
            <p className="weather-key">Temperature:
              <span className="weather-value"> { this.props.temperature } degrees </span>
            </p>
          }
          {
            this.props.humidity && <p className="weather-key">Humidity:
              <span className="weather-value"> { this.props.humidity }% </span>
            </p>
          }
          {
            this.props.wind && <p className="weather-key">Wind Speed:
              <span className="weather-value"> { this.props.wind } mph</span>
            </p>
          }
          {
            this.props.description && <p className="weather-key">Description:
              <span className="weather-value"> { this.props.icon } { this.props.description }</span>
            </p>
          }
          {
            this.props.error &&
            <p className="weather-error">{ this.props.error }</p>}
        </div>
      </div>
    )
  }
}
// {
//   this.props.description && <p className="weather-key">Description:
//     <span className="weather-value"> { this.props.description } </span>
//   </p>
// }
export default Weather
