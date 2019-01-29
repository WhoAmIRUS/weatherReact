import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadWeather, deleteCityRedux } from '../AC';
import CityList from './CityList';

class StartPage extends Component {
  state = {
    listCity: [],
  };

  componentWillReceiveProps(nextProps) {
    const { weather, deleteCityRedux } = nextProps;
    const { listCity } = this.state;
    Object.entries(weather).forEach(([key, value]) => {
      if (value.state === 'fail') {
        this.setState({
          listCity: listCity.filter((city) => {
            return city !== key;
          }),
        });
        deleteCityRedux(key);
      }
    });
  }

  getWeather = () => {
    const { listCity } = this.state;
    return <CityList listCity={listCity} deleteCity={this.deleteCity} />;
  };
  // static cityGet(cityName) {
  //   return new Promise ((resolve, reject) => {
  //     try {
  //       loadWeather(cityName);
  //     }
  //   })
  // }

  loadWeather = (e) => {
    e.preventDefault();
    const { loadWeather, weather } = this.props;
    const { listCity } = this.state;
    const cityName = e.target.cityName.value;
    if (!weather[cityName]) {
      console.log('download weather');
      loadWeather(cityName);
    }
    if (listCity.indexOf(cityName) === -1) { // выведена ли температура этого города уже на страницу
      this.setState({
        listCity: listCity.concat(cityName), // идет обовление страницы
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
    console.log('update start page');
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
  deleteCityRedux: PropTypes.func,
  weather: PropTypes.object,
};

export default connect((state) => {
  return {
    weather: state.weather,
  };
}, { loadWeather, deleteCityRedux })(StartPage);
