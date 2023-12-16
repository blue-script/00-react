import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {Accordion, AccordionWhithMemo} from './Accordion';
import React, {useState} from 'react';

// const meta: Meta<typeof Accordion> = {
//   component: Accordion,
// };

// export default meta;

export default {
  component: Accordion
}


// type Story = StoryObj<typeof Accordion>
// export const FirstStory: Story = {
//   args: {
//     titleValue: 'Accordion',
//     collapsed: false,
//   }
// }


const onChangeHandler = action('onChange')
const onClickHandler = action('click on item')
export const CollapsedAccordion = () => {
  return <AccordionWhithMemo titleValue={'Collapsed Accordion'}
                    collapsed={true}
                    onChange={onChangeHandler}
                    items={[]}
                    onClick={onClickHandler}
  />
}

export const OpenedAccordion = () => {
  return <AccordionWhithMemo titleValue={'Opened Accordion'}
                    collapsed={false}
                    onChange={onChangeHandler}
                    items={[{title: 'Dimych', value: '1'}, {title: 'Anna', value: '2'}, {title: 'Valera', value: '3'}]}
                    onClick={onClickHandler}
  />
}

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState(false)
  return  <AccordionWhithMemo titleValue={'Accordion'}
                     collapsed={collapsed}
                     onChange={() => {
                       setCollapsed(!collapsed)
                     }}
                     items={[{title: 'Dimych', value: '1'}, {title: 'Anna', value: '2'}, {title: 'Valera', value: '3'}]}
                     onClick={value => alert(`user with ID ${value} should be happy`)}
  />
}