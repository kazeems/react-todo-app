import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// eslint-disable-next-line react-refresh/only-export-components
Const Data = [
  { Id: "Todo-0", Name: "Eat", Completed: True },
  { Id: "Todo-1", Name: "Sleep", Completed: False },
  { Id: "Todo-2", Name: "Repeat", Completed: False },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={Data} />
  </React.StrictMode>,
)
