import React, { useEffect, useState } from 'react';
import { Modal, Button, AutoComplete } from 'antd';
import data from '../../config/city_id_map.json';

const filterData = (searchText: string) : Array<{value: string}> => {
  return Object.keys(data).filter((dataName) => {
    return dataName.includes(searchText);
  }).map((item) => {
    return { value: item };
  });
}

const SearchDialog : React.FC<{visible: boolean, hideDialog(e ?: any): void, confirmSearchText(searchText: string) : void}> = (props: {visible: boolean, hideDialog: Function, confirmSearchText: Function}) => {
  const [options, setOptions] = useState<Array<{value: string}> >([]);
  const [currentValue, setCurrentValue] = useState<string>('');
  const onSearch = (searchText: string) => {
    setOptions(filterData(searchText));
  }
  const onOk = (e : any) => {
    props.confirmSearchText(currentValue);
  }
  const changeCurrentValue = (value: string) => {
    setCurrentValue(value);
  }
  return (
    <>
      <Modal title="选择城市" visible={props.visible} centered={true} onOk={onOk} onCancel={() => {props.hideDialog();}}>
        <AutoComplete
          options={options}
          onSearch={onSearch}
          onChange={changeCurrentValue}
          style={{ width: 200 }}
          placeholder="请输入选择城市"
        />
      </Modal>
    </>
  )
}

export default SearchDialog;