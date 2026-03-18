import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import BlitzAIPage from './pages/BlitzAIPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BlitzAIPage />
    </BrowserRouter>
  </React.StrictMode>
)
