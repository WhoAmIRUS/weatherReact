import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WeatherOfCity from './WeatherOfCity';

class CityList extends Component {
  render() {
    const { listCity } = this.props;
    return (
      <ul>
        {listCity.map((id) => {
          return <li key={id}><WeatherOfCity id={id} deleteCity={this.props.deleteCity} /></li>;
        })}
      </ul>
    );
  }
}

CityList.propTypes = {
  weather: PropTypes.object,
};

export default CityList;
