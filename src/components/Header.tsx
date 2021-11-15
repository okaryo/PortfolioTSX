import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { initialHeaderState } from '../states/InitialHeaderState'
import externalLinkIcon from '../assets/images/external_link_icon.png'

type HeaderProps = {
  activePage: string
}

const Header: React.FC<HeaderProps> = (props) => {
  const { activePage } = props

  const [states, setStates] = useState(initialHeaderState)
  useEffect(() => {
    setStates({
      ...states,
      [activePage]: {
        title: activePage.toUpperCase(),
        to: `/${activePage}`,
        isActive: true
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const NavigationList = Object.values(states).map((value) => {
    const fontColorStyle = value.isActive ? { color: '#231815' } : {}
    const navigationStyle = value.isActive ? { borderBottom: '2px solid #75e900' } : {}

    return(
      <li key={value.title} style={navigationStyle} className="header_navigationList-item">
        <Link style={fontColorStyle} to={value.to} className="header_navigationList-link">
          {value.title}
        </Link>
      </li>
    )
  })

  return(
    <header className="header">
      <div className="header_title">
        <Link to="/" className="header_title-link">OKARYO</Link>
      </div>
      <div className="header_navigation">
        <ul className="header_navigationList">
          {NavigationList}
          <li className="header_navigationList-item">
            <a href="https://blog.okaryo.io" className="header_navigationList-link header_navigationList-linkWithIcon" target="_blank" rel="noopener noreferrer">
              BLOG
              <img src={externalLinkIcon} alt="external link icon" className="header_navigationList-Icon" width="24" height="24" loading="lazy"/>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
