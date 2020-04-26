import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/Header.css'

interface NavigationStyle {
  navigationStyle: {
    products:boolean,
    profile: boolean,
    contact: boolean
  }
}

const Header = (props: NavigationStyle) => {
  const navigationStyle = props.navigationStyle

  const activeNavigationStyle = {
    borderBottom: '2px solid #75e900'
  }
  const activeNavigationFontStyle = {
    color: '#231815'
  }

  let productsList
  let profileList
  let contactList
  if (navigationStyle.products) {
    productsList = (
      <li style={activeNavigationStyle}>
        <Link style={activeNavigationFontStyle} to="/products">PRODUCTS</Link>
      </li>
    )
    profileList = <li><Link to="/profile">PROFILE</Link></li>
    contactList = <li><Link to="/contact">CONTACT</Link></li>
  } else if (navigationStyle.profile) {
    productsList = <li><Link to="/products">PRODUCTS</Link></li>
    profileList = (
      <li style={activeNavigationStyle}>
        <Link style={activeNavigationFontStyle} to="/profile">PROFILE</Link>
      </li>
    )
    contactList = <li><Link to="/contact">CONTACT</Link></li>
  } else if (navigationStyle.contact) {
    productsList = <li><Link to="/products">PRODUCTS</Link></li>
    profileList = <li><Link to="/profile">PROFILE</Link></li>
    contactList = (
      <li style={activeNavigationStyle}>
        <Link style={activeNavigationFontStyle} to="/contact">CONTACT</Link>
      </li>
    )
  }

  return(
    <header className="portfolio_header">
      <div className="portfolio_title">
        <Link to="/">OKARYO</Link>
      </div>
      <div className="portfolio_navigation_block">
        <ul>
          {productsList}
          {profileList}
          {contactList}
        </ul>
      </div>
    </header>
  )
}

export default Header
