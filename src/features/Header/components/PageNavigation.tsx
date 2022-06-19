import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

type PageNavigationProps = {
  isActive: boolean,
  title: string,
  link: string,
}

type NavigationProps = {
  active: boolean
}

const Container = styled.li`
  display: inline-block;
  height: 48px;
  vertical-align: middle;
  border-bottom: ${(props: NavigationProps) => props.active ? '2px solid #75e900' : null};

  :hover, :focus {
    border-bottom: ${(props: NavigationProps) => props.active ? '2px solid #75e900' : '2px solid #757575'};
  }

  + li {
    margin-left: 24px;
  }

  @media (max-width: 720px) {
    display: inline-block;
    height: 48px;
    vertical-align: middle;

    + li {
      margin-left: 0;
    }
  }
`

const NavigationLink = styled(Link)`
  display: block;
  height: 48px;
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
    <Container active={props.isActive}>
      <NavigationLink  to={props.link}>
        <NavigationLinkText active={props.isActive}>{props.title}</NavigationLinkText>
      </NavigationLink>
    </Container>
  )
}

export default PageNavigation
