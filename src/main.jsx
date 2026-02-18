import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import { RedirectAuthContainer,Home, Signup, Login, Store ,App} from './index'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route  index element={
                <Home />
            } />
            <Route path="/login" element={
              <RedirectAuthContainer  authentication={false}>
               <Login/>
              </RedirectAuthContainer>
            } />
            <Route path="/signup" element={
              <RedirectAuthContainer authentication={false}>
               <Signup/>
              </RedirectAuthContainer>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
