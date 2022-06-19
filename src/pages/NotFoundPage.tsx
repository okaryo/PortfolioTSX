import React from 'react'
import Header from '../components/Header'
import NotFound from '../components/NotFound'
import Footer from '../features/Footer'

const NotFoundPage = () => {
  return(
    <div>
      <Header activePage={'products'} />
      <NotFound />
      <Footer />
    </div>
  )
}

export default NotFoundPage
