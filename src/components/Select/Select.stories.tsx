import {Select} from './Select';
import React, {useState} from 'react';

export default {
  title: 'SelectState',
  component: Select,
}

export const SelectDemo = () => {
  const onChangeHandler = (value: any) => {
  }
  const [collapsed, setCollapsed] = useState('none')
  const items = [
    {title: 'al', value: '1'},
    {title: '2', value: '1'},
    {title: '3', value: '1'},
    {title: '4', value: '1'}
  ]
  return <>
    <Select value={collapsed}
            items={items}
            onChange={setCollapsed}/>
  </>
}