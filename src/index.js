import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// TODO: Ensure this is read from a server
const DATA = [
  { id: "todo-0", name: "Sleep", completed: true },
  { id: "todo-1", name: "Wake up", completed: false },
  { id: "todo-2", name: "Be Awesome", completed: false },
  { id: "todo-3", name: "Repeat", completed:false}
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
