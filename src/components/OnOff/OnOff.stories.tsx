import {OnOff, OnOffWhithMemo} from './OnOff';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
  component: OnOff,
}

const callback = action('on or off clicked')
export const OnMode = () => <OnOffWhithMemo on={true} onChange={callback}/>
export const OffMode = () => <OnOffWhithMemo on={false} onChange={callback}/>
export const SwitchOnOff = () => {
  const [value, setValue] = useState<boolean>(true)
  return <OnOffWhithMemo on={value} onChange={setValue}/>
}