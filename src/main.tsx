import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, StateMachineProvider, useStateMachine, GlobalState } from 'little-state-machine'
import App from './App'
import './global.css'

createStore(
  {
    data: {}
  },
  {
    storageType: localStorage,
  }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StateMachineProvider>
      <App />
    </StateMachineProvider>
  </React.StrictMode>
)
