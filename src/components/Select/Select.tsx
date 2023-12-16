import React, {KeyboardEvent, useEffect, useReducer, useState} from 'react';
import style from './Select.module.css'
import {OnOff} from '../OnOff/OnOff';

const reducer = (state: any, action: any) => {
  return state
}

type ItemPropsType = {
  title: string
  value: any
}

type SelectPropsType = {
  value?: any
  onChange: (value: any) => void
  items: ItemPropsType[]
}
export const Select: React.FC<SelectPropsType> = (props) => {
  const [active, setActive] = useState(false)
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
  const [a,dispatch] = useReducer(reducer, false)

  let selectedItem = props.items.find(i => i.value === props.value)
  let hoveredItem = props.items.find(i => i.value === hoveredElementValue)
  useEffect(() => {
    setHoveredElementValue(props.value)
  }, [props.value]);

  const toggleItem = () => setActive(!active)
  const onItemClick = (value: any) => {
    props.onChange(value)
    toggleItem()
  }
  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const pretendentElement = e.key === 'ArrowDown'
            ? props.items[i + 1]
            : props.items[i - 1]
          if (pretendentElement) {
            props.onChange(pretendentElement.value)
            return
          }
        }
      }
      if (!selectedItem) {
        props.onChange(props.items[0].value)
      }
    }
    if (e.key === 'Escape' || e.key === 'Enter') setActive(false)
  }
  console.log('press')
  return <>
    <div className={style.select} onKeyUp={onKeyUp} tabIndex={0}>
      <span className={style.main}
            onClick={toggleItem}>{selectedItem?.title}</span>
      {
        active &&
          <div className={style.items}>
            {props.items
              .map(i => <div
                  onMouseEnter={() => setHoveredElementValue(i.value)}
                  className={style.item + ' ' + (hoveredItem === i ? style.selected : '')}
                  key={i.value}
                  onClick={() => onItemClick(i.value)}
                >{i.title}
                </div>
              )
            }
          </div>
      }
    </div>
  </>
}
export const SelectWhithMemo= React.memo(Select)

