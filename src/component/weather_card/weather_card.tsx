import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'antd';

import './weather_card.css';


const WeatherCard : React.FC<{cityID: string}> = (props: {cityID: string}) => {
  const [weatherState, setWeatherState] = useState<any>(undefined);
  const [todayWeather, setTodayWeather] = useState<any>({});
  useEffect(() => {
    axios.get(`/api/weather/city/${props.cityID}`)
    .then(res => {
      console.log(res);
      setWeatherState(res);
      setTodayWeather(res.data.data.forecast[0]);
    });
  }, [props.cityID]);
  return (
    <Card title={weatherState?.data.cityInfo.city} extra={<a href="#">查看未来详情</a>} style={{ width: 250 }} hoverable={true}>
      <div className="displaySpaceBetween">
        <div>{todayWeather?.ymd}</div>
        <div>{todayWeather?.week}</div>
      </div>
      <div className="displaySpaceBetween">
        <div>{todayWeather?.high}</div>
        <div>{todayWeather?.low}</div>
      </div>
      <div className="displaySpaceBetween">
        <div>日出：{todayWeather?.sunrise}</div>
        <div>日落：{todayWeather?.sunset}</div>
      </div>
      <div className="displaySpaceBetween">
        <div>风向：{todayWeather?.fx}</div>
        <div>风力：{todayWeather?.fl}</div>
      </div>
    </Card>
  );

}

export default WeatherCard;