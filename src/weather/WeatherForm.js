import React, { Component } from 'react'

class WeatherForm extends Component {
  render () {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="city..."/>
        <input type="text" name="country" placeholder="country..."/>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    )
  }
}

export default WeatherForm
