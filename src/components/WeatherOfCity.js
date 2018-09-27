import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WeatherOfCity extends Component {
  getWeather = () => {
    return <div>Temperature: {this.props.weather.main.temp}</div>;
  };
  handleClick = () => {
    const { deleteCity, weather } = this.props;
    deleteCity(weather.id);
  };
  render() {
    const { weather } = this.props;
    if (!weather || !weather.main) return null;
    console.log('update city');
    return (
      <div>
        {weather.name}
        <button onClick={this.handleClick}>Close</button>
        {this.getWeather()}
      </div>
    );
  }
}

WeatherOfCity.propTypes = {
  weather: PropTypes.object,
  deleteCity: PropTypes.func,
};

export default connect((state, ownProps) => {
  console.log(state.weather);
  return {
    weather: state.weather[ownProps.id],
  };
})(WeatherOfCity);
