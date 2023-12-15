import {Select} from './Select';
import React, {useState} from 'react';
import { withConsole } from '@storybook/addon-console';

export default {
  title: 'Select',
  component: Select,
}

export const WithValue = () => {
  const [value, setValue] = useState('2')
  return <>
    <Select
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
    <Select
      value={value}
      items={[
        {title: 'Minsk', value: '1'},
        {title: 'Moscow', value: '2'},
        {title: 'Kiev', value: '3'},
      ]}
      onChange={setValue}/>
  </>
}
