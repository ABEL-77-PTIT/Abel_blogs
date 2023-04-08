import React from 'react'
import ReactDOM from 'react-dom/client'
import AppStore from './AppStore'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppStore />
  </React.StrictMode>,
)
