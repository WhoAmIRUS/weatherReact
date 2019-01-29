/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import PropTypes from "prop-types";
import WeatherOfCity from "./WeatherOfCity/WeatherOfCity";

class CityList extends Component {
  render() {
    const { listCity, deleteCity } = this.props;
    const arr = listCity.map(id => {
      return (
        <li key={id}>
          <WeatherOfCity id={id} deleteCity={deleteCity} />
        </li>
      );
    });
    console.log(arr);
    return <ul>{arr}</ul>;
  }
}

export default CityList;
