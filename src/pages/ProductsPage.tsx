import React from 'react'
import Header from '../features/Header'
import Products from '../components/Products'
import Footer from '../features/Footer'

const ProductPage = () => {
  return(
    <div>
      <Header activePage={'products'} />
      <Products />
      <Footer />
    </div>
  )
}

export default ProductPage
