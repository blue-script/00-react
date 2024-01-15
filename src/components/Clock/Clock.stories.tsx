import {Accordion} from '../Accordion/Accordion';
import {Clock} from './Clock';

export default {
  title: 'Clock',
  component: Clock
}

export const BaseExample = () => {
  return <Clock mode={'digite'}/>
}

export const HomeworkExample = () => {
  return <Clock mode={'analog'}/>
}