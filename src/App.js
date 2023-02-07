// import Cards from './Components/Card.js';
import React from 'react';
// import Heading from './Components/heading.js';
// import Para from './Components/para.js';
// import List from './Components/list.js';
// import * as Cal from './Components/calculator.jsx';
import Time from './CTime.js'
// import './App.css';
// import './index.js';
// import Product from './Project1/laptop.js';
import Parent from './Project2/parent.js';
import Employees from './Project2/employees.js';
import Card from './Project2/card';
import PropType from './practice/proptype';
const App = () => {
  return (
    <>
      <PropType />
      <Time />
      <Parent />
      <Employees />
      <Card />
      {/* <Product />
      <Time />
      <Heading />
      <Para />
      <List />
      <li>{Cal.Addition(2, 4)}</li>
      <li>{Cal.Multiplication(2, 4)}</li>
      <li>{Cal.Division(2, 4)}</li> */}
    </>
  );
}


export default App;
