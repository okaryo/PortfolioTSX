import notFoundImage from './assets/not_found.png'
import styled from '@emotion/styled'
import PageContainer from '../../components/PageContainer'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 80px 60px;
`

const ContentHeader = styled.h2`
  margin-bottom: 16px;
  font-size: 48px;
`

const NotFound = () => {
  return(
    <PageContainer>
      <Container>
        <ContentHeader className="notFound_header">Not Found</ContentHeader>
        <img src={notFoundImage} height="240" width="240" alt="Not Found" loading="lazy" />
      </Container>
    </PageContainer>
  )
}

export default NotFound
