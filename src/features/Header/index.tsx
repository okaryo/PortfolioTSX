import styled from '@emotion/styled'

import Navigation from './components/Navigations'
import Title from './components/Title'

const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  height: 48px;
  width: 100%;
  padding: 0 24px;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14);
  z-index: 5;

  @media (max-width: 720px) {
    display: block;
    height: 96px;
    padding: 0;
    box-shadow: 0 0 0px;
  }
`

const Header = () => {
  return(
    <Container>
      <Title />
      <Navigation />
    </Container>
  )
}

export default Header
