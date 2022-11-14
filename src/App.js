import React from 'react';
import Heading from './Components/heading.js';
import Para from './Components/para.js';
import List from './Components/list.js';
import * as Cal from './Components/calculator.jsx';
import Cards from './Components/Card.js';
import './App.css';
import './index.js';

const App = () => {
  return (
    <>
      <Heading />
      <Para />
      <List />
      <li>{Cal.Addition(2, 4)}</li>
      <li>{Cal.Multiplication(2, 4)}</li>
      <li>{Cal.Division(2, 4)}</li>
      <h1 className="headingStyle">List of Top 5 Netflix Series</h1>
      <Cards
        imagesrc={Sdata[0].img.scr}
      />
    </>
  );
}


export default App;
