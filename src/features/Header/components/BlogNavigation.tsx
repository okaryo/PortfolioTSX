import styled from '@emotion/styled'
import externalLinkIcon from '../../../assets/images/external_link_icon.png'

const Container = styled.li`
  display: inline-block;
  height: 48px;
  vertical-align: middle;

  :hover, :focus {
    border-bottom: 2px solid #757575;
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

const NavigationLink = styled.a`
  display: flex;
  height: 48px;
  align-items: center;
  font-size: 18px;
  color: #757575;

  :hover, :focus {
    color: #231815;
  }
`

const NavigationIcon = styled.img`
  opacity: 0.6;
`

const BlogNavigation = () => {
  return(
    <Container>
      <NavigationLink href="https://blog.okaryo.io" target="_blank" rel="noopener noreferrer">
          BLOG
          <NavigationIcon src={externalLinkIcon} alt="external link icon" width="24" height="24" loading="lazy"/>
      </NavigationLink>
    </Container>
  )
}

export default BlogNavigation
