import React from 'react'
import Header from '../features/Header'
import Contact from '../components/Contact'
import Footer from '../features/Footer'

const ContactPage = () => {
  return(
    <div>
      <Header activePage={'contact'} />
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactPage
