import React, {useMemo, useState} from 'react';
import {SelectWhithMemo} from '../components/Select/Select';

export default {
  title: 'useMemo',
}

export const DifficultCountingExample = () => {
  const [a, setA] = useState(5)
  const [b, setB] = useState(5)

  let resultA = 1
  let resultB = 1

  resultA = useMemo(() => {
    let tempResultA = 1
    for (let i = 2; i <= a; i++) {
      let fake = 0
      while (fake < 10000000) {
        fake++
        const fakeValue = Math.random()
      }
      tempResultA = tempResultA * i
    }
    return tempResultA
  }, [a])


  for (let i = 2; i <= b; i++) {
    resultB = resultB * i
  }

  return <>
    <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
    <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
    <hr/>
    <div>Result for a: {resultA}</div>
    <div>Result for b: {resultB}</div>
  </>
}

const UsersSecret = (props: { users: any[] }) => {
  console.log('UsersSecret')
  return <div>
    {props.users.map((u, i) => <div key={i}>{u}</div>)}
  </div>
}
const Users = React.memo(UsersSecret)
export const HelpsToReactMemo = () => {
  console.log('HelpsToReactMemo')
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

  const newArray = useMemo(() => {
    return users.filter(u => u.toLowerCase().indexOf('a') > -1)
  }, [users])

  const addUser = ()=>setUsers([...users, 'Sveta' + new Date().getTime()])

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    {counter}
    <button onClick={() => addUser()}>add user</button>
    <Users users={newArray}/>
  </>
}

export const HelpsSelectExample = () => {
  const [value1, setValue1] = useState('2')
  const [value2, setValue2] = useState('2')
  const [value3, setValue3] = useState('2')
  const [cities, setCities] = useState(
    [
      {title: 'Minsk', value: '1', countryId: '1', countPeople: 400000},
      {title: 'Moscow', value: '2', countryId: '2', countPeople: 11000000},
      {title: 'Kiev', value: '3', countryId: '3', countPeople: 10000050},
    ]
  )
  const [counter, setCounter] = useState(0)

  const haveM = useMemo(()=>{
    console.log('haveM')
    return cities.filter(c=> c.title.toLowerCase().indexOf('m'))
  }, [cities])
  const oneCountry = useMemo(()=>{
    console.log('oneCountry')
    return cities.filter(c=> c.countryId === '1')
  }, [cities])
  const manyPeople = useMemo(()=>{
    console.log('manyPeople')
    return cities.filter(c=> c.countPeople > 1000000)
  }, [cities])

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    {counter}
    // have 'm'
    <SelectWhithMemo
      items={haveM}
      value={value1}
      onChange={setValue1}/>
    // have one country
    <SelectWhithMemo
      items={oneCountry}
      value={value2}
      onChange={setValue2}/>
    // have people more then 1 000 000
    <SelectWhithMemo
      items={manyPeople}
      value={value3}
      onChange={setValue3}/>
  </>
}


