import React, { useEffect, useState } from 'react';

import {Row, Col, Card} from 'antd';
import axios from 'axios';
import WeatherForecastCard from '../../component/weather_forecast_card/weather_forecast_card';

const WeatherForecast: React.FC<any> = (props: any) => {
  const [weatherState, setWeatherState] = useState<any>([]);
  console.log(props);
  useEffect(() => {
    axios.get(`/api/weather/city${props.location.pathname}`)
    .then(res => {
      setWeatherState(res.data.data.forecast);
    });
  }, []);
  return (
    
    <div>
      <Row gutter={[0, 32]}>
        {
          weatherState.map((item: any, idx: number) => {
            return (
              <Col span={6} key={idx}>
                <WeatherForecastCard weather={item}></WeatherForecastCard>
              </Col>
            )
          })
        }
      </Row>

    </div>
  )
}

export default WeatherForecast;