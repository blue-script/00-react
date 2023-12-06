import {useRef, useState, KeyboardEvent, LegacyRef} from 'react';

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
