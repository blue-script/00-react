import {useRef, useState, KeyboardEvent, LegacyRef, ChangeEvent} from 'react';
import {action} from '@storybook/addon-actions';

export default {
  title: 'input',
}

export const UncontroledInput = () => <input/>
export const TrackValueOfUncontroledInput = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <input onChange={(e) => {
        setValue(e.currentTarget.value)
      }}/> --- {value}
    </>
  )
}
export const GetValueOfUncontroledInputByKeyDown = () => {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (inputRef.current) setValue(inputRef.current.value)
    }
  }
  return (
    <>
      <input ref={inputRef} onKeyDown={onKeyDownHandler}/> --- {value}
    </>
  )
}
export const ControledInputWithFixValue = () => <input value={'hi guys'}/>

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState<string>('')
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)
  return <input value={parentValue} onChange={onChangeHandler}/>
}
export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState<boolean>(false)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)
  return <input type='checkbox' checked={parentValue} onChange={onChangeHandler}/>
}
export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>('2')
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)
  return <select value={parentValue} onChange={onChangeHandler}>
    <option value="">none</option>
    <option value="1">Minsk</option>
    <option value="2">Moscow</option>
    <option value="3">Kiev</option>
  </select>
}