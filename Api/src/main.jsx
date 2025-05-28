import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // {/* </StrictMode> */} // In development mode, when React Strict Mode is enabled, useEffect is mounted and unmounted twice
)
