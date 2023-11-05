import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from './components/OnOff/OnOff';

// function declaration
function App() {
  // делает что то полезное
  console.log("App rendering")
  // обязана вернуть JSX
  return (
      <div>
        <PageTitle title={"This is APP component"}/>

        <Accordion titleValue={"menu"} collapsed={true}/>
        <Accordion titleValue={"menu2"} collapsed={false}/>

        Article 2
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>

        <OnOff isActive={true}/>
        <OnOff isActive={false}/>
      </div>
  );
}

type PageTitlePropsType = {
  title: string
}
function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle rendering")
  return <h1>{props.title}</h1>
}

export default App;
