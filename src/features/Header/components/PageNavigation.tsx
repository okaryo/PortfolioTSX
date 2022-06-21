import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

type PageNavigationProps = {
  title: string,
  link: string,
}

type NavLinkProps = {
  to: string,
  className?: string,
  children: ReactNode
}

const NavLinkContainer = (props: NavLinkProps) =>  {
  const { to, className, children } = props
  const shouldActivateProductsTab = useLocation().pathname === '/' && to === '/products'

  return (
    <NavLink
      className={({isActive}) =>
        [className, isActive || shouldActivateProductsTab ? 'active' : ''].join(' ')
      }
      to={to}
    >
      {children}
    </NavLink>
  )
}

const StyledNavLinkContainer = styled(NavLinkContainer)`
  display: inline-block;
  height: 48px;
  vertical-align: middle;
  color: #757575;

  &.active {
    color: #231815;
    border-bottom: 2px solid #75e900;
  }

  :hover, :focus {
    border-bottom: 2px solid #757575;
  }

  &.active:hover, :focus {
    border-bottom: 2px solid #75e900;
  }

  + a {
    margin-left: 24px;
  }

  @media (max-width: 720px) {
    display: inline-block;
    height: 48px;
    vertical-align: middle;

    + a {
      margin-left: 0;
    }
  }
`

const NavigationLinkText = styled.span`
  display: block;
  font-size: 18px;
  height: 48px;
  line-height: 48px;
  color: inherit;

  :hover, :focus {
    color: #231815;
  }
`

const PageNavigation = (props: PageNavigationProps) => {
  return(
    <StyledNavLinkContainer to={props.link}>
      <NavigationLinkText>{props.title}</NavigationLinkText>
    </StyledNavLinkContainer>
  )
}

export default PageNavigation
