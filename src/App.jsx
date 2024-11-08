import React from 'react'
import { BrowserRouter } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import AppRouter from './Router/AppRouter'
import { CartProvider } from "./components/Context/CartContext"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <CartProvider> 
        <BrowserRouter basename="/">
          <NavBar />
          <AppRouter />
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
