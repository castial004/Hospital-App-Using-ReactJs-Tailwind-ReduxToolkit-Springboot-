import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import Store from "./store/Store.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
