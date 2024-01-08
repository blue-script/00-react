import React, {useState} from 'react';

export default {
  title: 'UseState demo'
}

function generateData() {
  console.log('generateData')
  return 1
}

export const Example1 = () => {
  console.log('example1')
  const [counter, setCounter] = useState<number>(generateData)

  return <>
    <button onClick={()=>setCounter(state => state + 1)}>+</button>
    {counter}
  </>
}