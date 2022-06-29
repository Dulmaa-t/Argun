import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Home'

export default function index() {
  return (
    <>
      <ToastContainer />
      <main className="main-root">
        <Home></Home>
      </main>
    </>
  )
}
