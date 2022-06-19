import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { initialHeaderState } from '../../../states/InitialHeaderState'
import styled from '@emotion/styled'
import PageNavigation from './PageNavigation'
import BlogNavigation from './BlogNavigation'

type NavigationsProps = {
  activePage: string
}

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

const Navigations = (props: NavigationsProps) => {
  const { activePage } = props

  const [states, setStates] = useState(initialHeaderState)
  useEffect(() => {
    setStates({
      ...states,
      [activePage]: {
        title: activePage.toUpperCase(),
        to: `/${activePage}`,
        isActive: true
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const NavigationList = Object.values(states).map((value) => {
    return (
      <PageNavigation
        key={value.title}
        isActive={value.isActive}
        title={value.title}
        link={value.to}
      />
    )
  })

  return(
    <Container>
      <NavigationContainer>
        {NavigationList}
        <BlogNavigation />
      </NavigationContainer>
    </Container>
  )
}

export default Navigations
