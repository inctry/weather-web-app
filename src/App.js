import Weather from './page/weather/weather.tsx';
import WeatherForecast from './page/weather_forecast/weather_forecast';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import data from './config/city_id_map.json';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Weather}></Route>
        {
          Object.keys(data).map((name) => {
            return (
              <Route path={`/${data[name]}`} component={WeatherForecast}></Route>
            )
          })
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
