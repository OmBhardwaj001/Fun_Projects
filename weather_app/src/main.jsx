import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { WeatherProvider } from './context/Weather.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <WeatherProvider>
   <App />
  </WeatherProvider>
  </StrictMode>,
)
