import React from 'react'
import FooterNavigationList from './FooterNavigationList'
import { FooterNavigationItems } from '../../constants/FooterNavigationItems'

const Footer = () => {
  return(
    <footer className="footer_container">
      <FooterNavigationList navigationItems={FooterNavigationItems} />
      <p className="footer_copyright">Copyright &copy;{new Date().getFullYear()} OKARYO</p>
      <p className="footer_noteAboutGA">This site uses Google Analytics.</p>
    </footer>
  )
}

export default Footer
