import {UncontrolledOnOff} from './UncontrolledOnOff';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
  component: UncontrolledOnOff
}

const callback = action('onChange')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode= () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>
export const BugMode= () => <div>soon</div>