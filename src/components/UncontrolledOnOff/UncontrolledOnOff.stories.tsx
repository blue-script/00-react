import {UncontrolledOnOff} from './UncontrolledOnOff';
import React, {useState} from 'react';

export default {
  component: UncontrolledOnOff
}

export const OnOffDemo = () => {
  const [value, setValue] = useState<boolean>(false)

  return <><UncontrolledOnOff onChange={setValue}/>{value.toString()}</>
}
