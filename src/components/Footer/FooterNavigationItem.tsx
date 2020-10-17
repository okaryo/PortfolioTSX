import React from 'react'

type FooterNavigationItemProps = {
  name: string
  link: string
}

const FooterNavigationItem: React.FC<FooterNavigationItemProps> = (props) => {
  const { name, link } = props

  return(
    <li key={name} className="footer_navigationItem">
      <a href={link} className="footer_navigationItem-link" target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </li>
  )
}

export default FooterNavigationItem
