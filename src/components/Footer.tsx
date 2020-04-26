import React from 'react'
import { Link } from 'react-router-dom'
import { ProductItems, SocialItems } from '../constants/FooterItems'
import '../stylesheets/Footer.css'

interface FooterItemProps {
  footerItems: {
    title: string,
    items: Array<{
      itemName: string,
      itemUrl: string
    }>
  }
}

const Footer = () => {
  const FooterList = (props: FooterItemProps) => {
    const footerList = props.footerItems

    const FooterItems = footerList.items.map((item, index) => {
      return(
        <li key={index} className="portfolio_footer_item">
          <a
            href={item.itemUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.itemName}
          </a>
        </li>
      )
    })

    return(
      <div>
        <div className="portfolio_footer_item_title">{footerList.title}</div>
        <ul>
          {FooterItems}
        </ul>
      </div>
    )
  }

  return(
    <footer className="portfolio_footer_container">
      <div className="portfolio_footer_menus">
        <div>
          <div className="portfolio_footer_item_title">Portfolio</div>
          <ul>
            <li className="portfolio_footer_item">
              <Link to="/products">Products</Link>
            </li>
            <li className="portfolio_footer_item">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="portfolio_footer_item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="portfolio_footer_empty"></div>
        <FooterList
          footerItems={ProductItems}
        />
        <div className="portfolio_footer_empty"></div>
        <FooterList
          footerItems={SocialItems}
        />
      </div>
      <p className="portfolio_footer_copyright">Copyright &copy;2020 OKARYO</p>
    </footer>
  )
}

export default Footer
