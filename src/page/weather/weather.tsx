import React, { useEffect, useState } from 'react';
import WeatherCard from '../../component/weather_card/weather_card';
import SearchDialog from '../../component/search_dialog/search_dialog';
import {Row, Col, Card} from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import data from '../../config/city_id_map.json';

import Cookie from 'js-cookie';

const Weather: React.FC<{}> = (props: {}) => {
  const [list, setList] = useState<Array<string>>([]);
  const [visibleDialog, setVisibleDialog] = useState<boolean>(false);

  const hideDialog = (e?: any) => {
    setVisibleDialog(false);
  }
  const confirmSearchText = (searchText: string) : void => {
    hideDialog();
    setList([...list, (data as any)[searchText]]);
  }

  useEffect(() => {
    const weatherList: undefined | Array<string> = Cookie.getJSON('weatherList');
    console.log(weatherList);
    if(weatherList && weatherList.length !== 0) {
      setList(weatherList);
    }
  }, []);
  useEffect(() => {
    Cookie.set('weatherList', JSON.stringify(list));

    // window.addEventListener('beforeunload', saveListOnCookie);
  }, [list]);
  return (
    <div>
      <Row gutter={[0, 32]}>
        {
          list.map((cityID, idx) => {
            return (
              <Col span={6} key={idx}><WeatherCard cityID={cityID}/></Col>
            );
          })
        }
        <Card style={{ width: 250 }} hoverable={true} onClick={() => setVisibleDialog(true) as any}>
          <PlusSquareOutlined />
        </Card>
      </Row>
      <SearchDialog visible={visibleDialog} 
        hideDialog={hideDialog} 
        confirmSearchText={confirmSearchText}/>

      
    </div>
  )
}

export default Weather;