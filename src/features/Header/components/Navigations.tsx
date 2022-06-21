import styled from '@emotion/styled'

import BlogNavigation from './BlogNavigation'
import PageNavigation from './PageNavigation'

const Container = styled.nav`
  flex: 1 0 auto;
  margin-left: 48px;

  @media (max-width: 720px) {
    margin-left: 0;
    border-top: 1px solid #F7F7F7;
    border-bottom: 1px solid #F6F6F6;
  }
`

const NavigationContainer = styled.ul`
  display: inline-block;

  @media (max-width: 720px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`

const Navigations = () => {
  const navigations = [
    {
      'title': 'PRODUCTS',
      'link': '/products'
    },
    {
      'title': 'PROFILE',
      'link': '/profile'
    },
    {
      'title': 'CONTACT',
      'link': '/contact'
    }
  ]
  const Navigations = Object.values(navigations).map((value) => {
    return (
      <PageNavigation
        key={value.title}
        title={value.title}
        link={value.link}
      />
    )
  })

  return(
    <Container>
      <NavigationContainer>
        {Navigations}
        <BlogNavigation />
      </NavigationContainer>
    </Container>
  )
}

export default Navigations
