import React from 'react'
import FooterNavigationList from './FooterNavigationList'
import { FooterNavigationItems } from '../../constants/FooterNavigationItems'
import '../../stylesheets/Footer.css'

const Footer = () => {
  return(
    <footer className="footer_container">
      <FooterNavigationList navigationItems={FooterNavigationItems} />
      <p className="footer_copyright">Copyright &copy;2020 OKARYO</p>
    </footer>
  )
}

export default Footer
