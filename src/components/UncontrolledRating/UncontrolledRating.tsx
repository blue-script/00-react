import React, {useState} from 'react';
import {OnOff} from '../OnOff/OnOff';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type UncontrolledRatingType = {
  defaultValue?: RatingValueType
  onChange: (value: RatingValueType)=>void
}

export function UncontrolledRating(props: UncontrolledRatingType) {
  console.log('Rating rendering')

  let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);

  return (
    <div>
      <StarWhithMemo selected={value > 0} setValue={() => {
        setValue(1);
        props.onChange(1)
      }}/>

      <StarWhithMemo selected={value > 1} setValue={() => {
        setValue(2)
        props.onChange(2)
      }}/>

      <StarWhithMemo selected={value > 2} setValue={() => {
        setValue(3)
        props.onChange(3)
      }}/>

      <StarWhithMemo selected={value > 3} setValue={() => {
        setValue(4)
        props.onChange(4)
      }}/>

      <StarWhithMemo selected={value > 4} setValue={() => {
        setValue(5)
        props.onChange(5)
      }}/>
    </div>
  )
}
export const UncontrolledRatingWhithMemo= React.memo(UncontrolledRating)

type StarPropsType = {
  selected: boolean
  setValue: () => void
}

function Star(props: StarPropsType) {
  console.log('Star rendering')

  return <span onClick={() => {
    props.setValue()
  }}>
   {props.selected ? <b>star </b> : 'star '}
  </span>
}
export const StarWhithMemo= React.memo(Star)