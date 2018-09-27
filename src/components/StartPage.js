import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadWeather } from '../AC';
import CityList from './CityList';

class StartPage extends Component {
  state = {
    listCity: [],
  };
  getWeather = () => {
    const { listCity } = this.state;
    return <CityList listCity={listCity} deleteCity={this.deleteCity} />;
  };
  loadWeather = (e) => {
    e.preventDefault();
    const { loadWeather, weather } = this.props;
    const { listCity } = this.state;
    const cityName = e.target.cityName.value;
    if (!weather[cityName]) {
      console.log('download weather');
      loadWeather(cityName);
    }
    if (listCity.indexOf(cityName) === -1){
      this.setState({
        listCity: listCity.concat(cityName),
      });
    }
  };
  deleteCity = (id) => {
    const { listCity } = this.state;
    const { weather } = this.props;
    console.log('del');
    this.setState({
      listCity: listCity.filter(cityName => weather[cityName].id !== id),
    });
  };
  render() {
    console.log('update', this.state.listCity);
    return (
      <div>
        <form onSubmit={this.loadWeather}>
          City
          <input name="cityName" />
          <button>get weather</button>
        </form>
        {this.getWeather()}
      </div>
    );
  }
}

StartPage.propTypes = {
  loadWeather: PropTypes.func,
};

export default connect((state) => {
  return {
    weather: state.weather,
  };
}, { loadWeather })(StartPage);
