import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// eslint-disable-next-line react-refresh/only-export-components
Const Data = [];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={Data} />
  </React.StrictMode>,
)
