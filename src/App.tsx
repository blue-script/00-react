import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

// function declaration
function App() {
  // делает что то полезное
  console.log('App rendering')

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  const [switchOn, setSwitchOn] = useState<boolean>(false)

  // обязана вернуть JSX
  return (
    <div className="App">
      Controlled
      <OnOff on={switchOn} onChange={setSwitchOn}/>
      Uncontrolled
      <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

      <Accordion titleValue={'Accordion'}
                 collapsed={accordionCollapsed}
                 onChange={() => {
                   setAccordionCollapsed(!accordionCollapsed)
                 }}/>
      <UncontrolledAccordion titleValue={'UncontrolledAccordion'}/>

      <Rating value={ratingValue}
              onClick={setRatingValue}/>
      <UncontrolledRating/>

      {/*<PageTitle title={"This is APP component"}/>*/}
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log('PageTitle rendering')
  return <h1>{props.title}</h1>
}

export default App;
