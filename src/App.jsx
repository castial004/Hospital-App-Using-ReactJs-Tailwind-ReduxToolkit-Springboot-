import React from 'react'
import {Header,Footer} from './index'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
        <Header/>
        <main className=''>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default App
