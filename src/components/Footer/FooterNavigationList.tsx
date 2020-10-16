import React from 'react'
import FooterNavigationItem from './FooterNavigationItem'
import '../../stylesheets/Footer.css'

type FooterNavigationListProps = {
  navigationItems: {
    name: string
    link: string
  }[]
}

const FooterNavigationList: React.FC<FooterNavigationListProps> = (props) => {
  const navigationItems = props.navigationItems

  return(
    <ul className="footer_navigationList">
      {navigationItems.map((item) => <FooterNavigationItem { ...item } />)}
    </ul>
  )
}

export default FooterNavigationList
