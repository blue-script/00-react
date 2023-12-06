import React, {useState} from 'react';
import styled from 'styled-components';

type ItemPropsType = {
  title: string
  value: any
}

type SelectPropsType = {
  value: any
  onChange: (value: any) => void
  items: ItemPropsType[]
}
export const Select: React.FC<SelectPropsType> = (props) => {
  const [collapsed, setCollapsed] = useState(true)
  const onClickHandler = () => {
    setCollapsed(!collapsed)
  }
  return <SelectStyled onClick={onClickHandler}>
    <div>{props.value}</div>
    {collapsed && <ListStyled>
      {props.items
        .map(item => {
          const onClickHandler = () => props.onChange(item.title)
          return <li key={item.value} onClick={onClickHandler}>{item.title}</li>
        })}
    </ListStyled>}
  </SelectStyled>
}


const SelectStyled = styled.div`
  width: 100px;
  height: 50px;
  background-color: #1ea7fd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid black;
  border-radius: 5px 5px 0 0;
  &::after {
    position: absolute;
    display: inline-block;
    content: "▼";
    color: antiquewhite;
    right: 5px;
  }
  cursor: pointer;
`

const ListStyled = styled.ul`
  position: absolute;
  margin: 0 auto;
  padding: 5px 0;
  width: 100px;
  list-style: none;
  top: 50px;
  & li {
    padding-left: 5px;
    border-bottom: 1px ridge black;
  }
  & li:hover {
    background-color: bisque;
    cursor: pointer;
  }

  background-color: lightgray;
  color: red;
  border: 1px solid black;
  border-top: none;
  border-radius: 0 0 5px 5px;
`