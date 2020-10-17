import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { initialHeaderState } from '../states/InitialHeaderState'

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
      <li key={value.title} style={navigationStyle}>
        <Link style={fontColorStyle} to={value.to}>{value.title}</Link>
      </li>
    )
  })

  return(
    <header className="portfolio_header">
      <div className="portfolio_title">
        <Link to="/">OKARYO</Link>
      </div>
      <div className="portfolio_navigation_block">
        <ul>
          {NavigationList}
        </ul>
      </div>
    </header>
  )
}

export default Header
