import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layout/Layout'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
   <Layout/>
 <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
