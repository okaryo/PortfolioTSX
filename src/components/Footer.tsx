import React from 'react'
import { FooterItems } from '../constants/FooterItems'
import '../stylesheets/Footer.css'

type FooterItemsProps = {
  footerItems: {
    name: string
    link: string
  }[]
}

const Footer = () => {
  const FooterList: React.FC<FooterItemsProps> = (props) => {
    const footerItems = props.footerItems

    return(
      <ul className="portfolio_footer_list">
        {footerItems.map((item) =>
          <li key={item.name} className="portfolio_footer_item">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          </li>
        )}
      </ul>
    )
  }

  return(
    <footer className="portfolio_footer_container">
      <FooterList footerItems={FooterItems} />
      <p className="portfolio_footer_copyright">Copyright &copy;2020 OKARYO</p>
    </footer>
  )
}

export default Footer
