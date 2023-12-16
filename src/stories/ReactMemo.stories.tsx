import React, {useState} from 'react';

export default {
  title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
  return <div>{props.count}</div>
}
const UsersSecret = (props: { users: any[] }) => {
  console.log('UsersSecret')
  return <div>
    {props.users.map((u,i)=><div key={i}>{u}</div>)}
  </div>
}
const Users = React.memo(UsersSecret)
export const Example1 = () => {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])
  const addUser = ()=>setUsers([...users, 'hero'+new Date().getTime()])
  return <>
    <button onClick={()=>setCounter(counter+1)}>+</button>
    <button onClick={addUser}>Add User</button>
    <NewMessagesCounter count={counter}/>
    <Users users={users}/>
  </>
}