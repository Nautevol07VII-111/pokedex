import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import './fanta.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Nile</h1>
    <App />
  </StrictMode>,
)
