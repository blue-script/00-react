import React from 'react';

type ItemType = {
  title: string
  value: any
}

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
  items: ItemType[]
  onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendering')

  return <div>
    <AccordionTitleWhithMemo
      title={props.titleValue}
      onChange={props.onChange}/>
    {!props.collapsed && <AccordionBodyTitleWhithMemo items={props.items} onClick={props.onClick}/>}
  </div>
}

export const AccordionWhithMemo= React.memo(Accordion)

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle rendering')
  return <h3 onClick={(event => props.onChange())}>{props.title}</h3>
}
export const AccordionTitleWhithMemo= React.memo(AccordionTitle)

type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  console.log('AccordionBody rendering')

  return <ul>
    {props.items.map((item, index) => {
      return (
        <li key={index}
            onClick={() => {
              props.onClick(item.value)
            }}
        >{item.title}</li>
      )
    })}
  </ul>
}
export const AccordionBodyTitleWhithMemo= React.memo(AccordionBody)
