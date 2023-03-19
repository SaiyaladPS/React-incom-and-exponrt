import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';


// todo   ການສ້າງ Compoment External
// import HelloCompoment from './compoments/Helloempoment';

// todo  ການສ້າງ Compoment
// function HelloCompoment() {
//   return <h1>Compoment function</h1>
// }

// todo ການສ້າງ class Compoment
// class HelloCompoment extends React.Component{
//   render() {
//     return <h1>Compoment class</h1>
//   }
// }




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
