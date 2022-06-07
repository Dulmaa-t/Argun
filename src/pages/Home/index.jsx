import React from 'react'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default function Index() {

  return (
    <div>
      <div class="preloader" style={{display: none}}>
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
    <Header />
         <Body />
            <Footer />
            <div class="go-top active">
              <i class="fas fa-chevron-up"></i>
              <i class="fas fa-chevron-up"></i>
            </div>

          </div>
          )
}
