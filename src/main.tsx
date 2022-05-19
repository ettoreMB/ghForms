import React from 'react'
import ReactDOM from 'react-dom/client'
import { StateMachineProvider } from 'little-state-machine'
import App from './App'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StateMachineProvider>
      <App />
    </StateMachineProvider>
  </React.StrictMode>
)
