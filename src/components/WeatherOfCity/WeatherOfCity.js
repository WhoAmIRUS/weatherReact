import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "../Loader";

class WeatherOfCityUI extends Component {
  getWeather = () => {
    return <div>Temperature: {this.props.weather.main.temp}</div>;
  };

  handleClick = () => {
    const { deleteCity, weather } = this.props;
    deleteCity(weather.id);
  };

  render() {
    const { weather } = this.props;

    //if (!weather || !weather.main) return null;

    console.log("update weather city");

    return (
      <div>
        {weather.name}
        <button onClick={this.handleClick}>Close</button>
        {this.getWeather()}
      </div>
    );
  }
}

WeatherOfCityUI.propTypes = {
  weather: PropTypes.object,
  deleteCity: PropTypes.func
};

class WeatherOfCity extends Component {
  render() {
    console.log(this.props.weather);
    const WeatherOfCityLoader = Loader("weather")(WeatherOfCityUI);
    return <WeatherOfCityLoader {...this.props} />;
  }
}

export default connect((state, ownProps) => {
  return {
    weather: state.weather[ownProps.id]
  };
})(WeatherOfCity);
