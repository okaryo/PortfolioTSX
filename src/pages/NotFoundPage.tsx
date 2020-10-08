import React from 'react'

import Header from '../components/Header'
import Products from '../components/Products'
import Footer from '../components/Footer'

const NotFoundPage = () => {
  return(
    <div>
      <Header activePage={'products'} />
      <Products />
      <Footer />
    </div>
  )
}

export default NotFoundPage
