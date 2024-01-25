import {FC} from "react";
import {ClockViewPropsType} from "./Clock";

const get2DigitsString = (n: number): string => n < 10 ? '0' + n.toString() : n.toString()

export const DigitalClockView: FC<ClockViewPropsType> = ({date}) => {
  return <>
    <span>{get2DigitsString(date.getHours())}</span>
    :
    <span>{get2DigitsString(date.getMinutes())}</span>
    :
    <span>{get2DigitsString(date.getSeconds())}</span>
  </>
}