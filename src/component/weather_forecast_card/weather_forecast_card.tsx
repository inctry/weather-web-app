import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherForecastCard: React.FC<{weather: any}> = (props: {weather: any}) => {
  return (
    <Card title={props.weather?.week} style={{ width: 250 }} hoverable={true}>
      <div className="displaySpaceBetween">
        <div>{props.weather?.ymd}</div>
        <div>{props.weather?.week}</div>
      </div>
      <div className="displaySpaceBetween">
        <div>{props.weather?.high}</div>
        <div>{props.weather?.low}</div>
      </div>
      <div className="displaySpaceBetween">
        <div>日出：{props.weather?.sunrise}</div>
        <div>日落：{props.weather?.sunset}</div>
      </div>
      <div className="displaySpaceBetween">
        <div>风向：{props.weather?.fx}</div>
        <div>风力：{props.weather?.fl}</div>
      </div>
    </Card>
  )
}

export default WeatherForecastCard;