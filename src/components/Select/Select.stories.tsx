import {Select, SelectWhithMemo} from './Select';
import React, {useState} from 'react';

export default {
  title: 'Select',
  component: Select,
}

export const WithValue = () => {
  const [value, setValue] = useState('2')
  return <>
    <SelectWhithMemo
      value={value}
      items={[
        {title: 'Minsk', value: '1'},
        {title: 'Moscow', value: '2'},
        {title: 'Kiev', value: '3'},
      ]}
      onChange={setValue}/>
  </>
}

export const WithoutValue = () => {
  const [value, setValue] = useState(null)
  return <>
    <SelectWhithMemo
      value={value}
      items={[
        {title: 'Minsk', value: '1'},
        {title: 'Moscow', value: '2'},
        {title: 'Kiev', value: '3'},
      ]}
      onChange={setValue}/>
  </>
}
