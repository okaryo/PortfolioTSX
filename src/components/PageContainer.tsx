import { ReactNode } from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  margin-top: 48px;
  padding: 30px 24px 30px;
  min-height: calc(100vh - 178px);

  @media (max-width: 720px) {
    margin-top: 96px;
    padding: 20px 16px 30px;
    min-height: calc(100vh - 254px);
  }
`

const PageContainer = ({children}: {children: ReactNode}) => {
  return <Container>{children}</Container>
}

export default PageContainer
