import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter} from 'react-router-dom'
import RoutesProvider from './context/RoutesProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RoutesProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </RoutesProvider>
)
