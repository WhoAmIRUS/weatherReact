import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StartPage from './StartPage';
import WeatherOfCity from './WeatherOfCity/WeatherOfCity';

class App extends React.Component {
  getWeather = ({ match }) => {
    const { cityName } = match.params;
    return <WeatherOfCity cityName={cityName} />;
  };
  render() {
    return (
      <Switch>
        <StartPage />
      </Switch>
    );
  }
}

export default App;
