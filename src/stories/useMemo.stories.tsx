import React, {useMemo, useState} from 'react';

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


