import styled from '@emotion/styled'
import externalLinkIcon from '../assets/external_link_icon.png'

const Container = styled.a`
  display: inline-block;
  height: 48px;
  vertical-align: middle;
  margin-left: 24px;

  :hover, :focus {
    border-bottom: 2px solid #757575;
  }

  @media (max-width: 720px) {
    display: inline-block;
    height: 48px;
    vertical-align: middle;
    margin-left: 0;
  }
`

const NavigationText = styled.span`
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
    <Container href="https://blog.okaryo.io" target="_blank" rel="noopener noreferrer">
      <NavigationText>
        BLOG
        <NavigationIcon src={externalLinkIcon} alt="external link icon" width="24" height="24" loading="lazy"/>
      </NavigationText>
    </Container>
  )
}

export default BlogNavigation
