import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

type PageNavigationProps = {
  title: string,
  link: string,
}

const Container = styled(NavLink)`
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
    <Container to={props.link}>
      <NavigationLinkText>{props.title}</NavigationLinkText>
    </Container>
  )
}

export default PageNavigation
