import {useEffect, useState} from 'react';
import s from './Clock.module.css'

type PropsType = {
  mode: 'analog' | 'digite'
}

const get2DigitsString = (n: number): string => n < 10 ? '0' + n.toString() : n.toString()


export const Clock: React.FC<PropsType> = (props) => {
  console.log('TICK')
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, []);

  return (
    props.mode === 'digite'
      ? <div>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
      </div>
      : <div className={s.clock}>
        <span className={s.hourhand}></span>
        <span className={s.minutehand}></span>
        <span className={s.secondhand}></span>
      </div>
  )
}