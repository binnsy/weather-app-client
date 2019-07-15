import React, { Component } from 'react'

class ForecastForm extends Component {
  render () {
    return (
      <form onSubmit={this.props.getForecast}>
        <input type="text" name="city" placeholder="city..."/>
        <input type="text" name="country" placeholder="country..."/>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    )
  }
}

export default ForecastForm
