import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let hours = new Date(2022, 10, 13, 5).getHours();
let greeting = '';
let cssStyle = {
  color: "Green"
};

if (hours >= 1 && hours <= 12) {
  greeting += "Good Morning";
  cssStyle.color = "Green";
}
else if (hours > 12 && hours < 16) {
  greeting += "Good AfterNoon";
  cssStyle.color = "yellow";
}
else if (hours > 16 && hours < 8) {
  greeting += "Good Evening";
  cssStyle.color = "Brown";
}
else {
  greeting += "Good Night";
  cssStyle.color = "Black";
}
const el = <div><h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1></div>
ReactDOM.render(el, document.getElementById('root'));



