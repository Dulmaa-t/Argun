import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import News from 'pages/Newsroom';
import Contact from 'pages/Contact';

export default function Index() {

  return (
    <div>
      <div class="preloader" style={{ display: "none" }}>
        <div class="d-table">
          <div class="d-table-cell">
            <div class="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/news/' element={<News></News>} />
          <Route path='/contact/' element={<Contact></Contact>} />
      </Routes>
      <div class="go-top active">
        <i class="fas fa-chevron-up"></i>
        <i class="fas fa-chevron-up"></i>
      </div>
    </div>
  )
}
