import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const Container = styled.h1`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  height: 48px;
  font-weight: normal;

  @media (max-width: 720px) {
    justify-content: center;
  }
`

const TitleLink = styled(Link)`
  font-size: 24px;
`

const Title = () => {
  return(
    <Container>
      <TitleLink to="/" className="header_title-link">OKARYO</TitleLink>
    </Container>
  )
}

export default Title
