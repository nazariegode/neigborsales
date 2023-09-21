import React from 'react'
import { BrowserRouter } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import AppRouter from './Router/AppRouter'

const App = () => {

  return (
      <BrowserRouter>
        <>

            <NavBar/>
            <AppRouter/> 
            <Footer/>
        </>
      </BrowserRouter>
  )
}

export default App 