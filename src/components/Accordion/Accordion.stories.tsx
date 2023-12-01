import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {Accordion} from './Accordion';
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
export const CollapsedAccordion = () => {
  return <Accordion titleValue={'Collapsed Accordion'}
                    collapsed={true}
                    onChange={onChangeHandler}/>
}

export const OpenedAccordion = () => {
  return <Accordion titleValue={'Opened Accordion'}
                    collapsed={false}
                    onChange={onChangeHandler}/>
}

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState(false)
  return  <Accordion titleValue={'Accordion'}
                     collapsed={collapsed}
                     onChange={() => {
                       setCollapsed(!collapsed)
                     }}/>
}