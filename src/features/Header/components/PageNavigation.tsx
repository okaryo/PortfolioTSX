import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { NavLinkProps } from 'react-router-dom'

type PageNavigationProps = {
  isActive: boolean,
  title: string,
  link: string,
}

type NavigationProps = {
  active: boolean
}

const Container = styled(NavLink)`
  display: inline-block;
  height: 48px;
  vertical-align: middle;

  &.active {
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
  color: ${(props: NavigationProps) => props.active ? '#231815' : '#757575'};
  font-size: 18px;
  height: 48px;
  line-height: 48px;

  :hover, :focus {
    color: #231815;
  }
`

const PageNavigation = (props: PageNavigationProps) => {
  return(
    <Container to={props.link}>
      <NavigationLinkText active={props.isActive}>{props.title}</NavigationLinkText>
    </Container>
  )
}

export default PageNavigation
