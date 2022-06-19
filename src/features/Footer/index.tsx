import React from 'react'
import NavigationList from './components/NavigationList'
import { NavigationItems } from './constants/NavigationItems'
import styled from '@emotion/styled'

const Container = styled.footer`
  padding: 20px;
  border-top: 1px solid #e8eaed;
`

const CopyRight = styled.p`
  margin-top: 30px;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
`

const GANote = styled.p`
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
`

const Footer = () => {
  return(
    <Container>
      <NavigationList navigationItems={NavigationItems} />
      <CopyRight>Copyright &copy;{new Date().getFullYear()} OKARYO</CopyRight>
      <GANote>This site uses Google Analytics.</GANote>
    </Container>
  )
}

export default Footer
