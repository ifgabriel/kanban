import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import makeServer from './mocks'

const root = createRoot(document.getElementById('root')!)

makeServer()

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
