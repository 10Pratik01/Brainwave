import { StrictMode } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import { BrowserRouter, Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,

  
)
