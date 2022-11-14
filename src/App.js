import React from 'react';
import Heading from './Components/heading.js';
import Para from './Components/para.js';
import List from './Components/list.js';
import * as Cal from './Components/calculator.jsx';
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
    </>
  );
}


export default App;
