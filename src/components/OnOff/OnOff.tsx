import React from 'react';
import Button from './Button';

type OnOffPropsType = {
  isActive: boolean
}

const OnOff: React.FC<OnOffPropsType> = (props) => {
  return (
    <div className={'onOff'}>
      <Button className={`${props.isActive && "bgGreen"}`} title={'ON'}/>
      <Button className={`${!props.isActive && "bgRed"}`} title={'OFF'}/>
      <div className={`circle ${props.isActive ? 'bgGreen' : 'bgRed'}`}></div>
    </div>
  );
};

export default OnOff;