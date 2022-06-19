import Header from '../../features/Header'
import Footer from '../../features/Footer'
import notFoundImage from './assets/not_found.png'
import styled from '@emotion/styled'

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

const NotFoundPage = () => {
  return(
    <div>
      <Header activePage={'products'} />
      <div>
        <div className="headerSpace" />
        <section className="main_body notFound_body">
          <Container>
            <ContentHeader className="notFound_header">Not Found</ContentHeader>
            <img src={notFoundImage} height="240" width="240" alt="Not Found" loading="lazy" />
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default NotFoundPage
