import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, StateMachineProvider } from 'little-state-machine'
import App from './App'
import './global.css'

createStore({
  data: {}
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StateMachineProvider>
      <App />
    </StateMachineProvider>
  </React.StrictMode>
)
