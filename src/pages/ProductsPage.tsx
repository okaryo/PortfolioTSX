import React from 'react'
import Header from '../components/Header'
import Products from '../components/Products'
import Footer from '../components/Footer/Footer'

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
