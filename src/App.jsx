import React from 'react'
import { BrowserRouter } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import AppRouter from './Router/AppRouter'
import { CartProvider } from "./components/Context/CartContext"

const App = () => {
  return (
    <>
      <CartProvider> 
        <BrowserRouter>
          <NavBar />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
