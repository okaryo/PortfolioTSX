import React from 'react'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer/Footer'

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
