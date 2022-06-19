import React from 'react'
import FooterNavigationItem from './NavigationItem'
import styled from '@emotion/styled'

type NavigationListProps = {
  navigationItems: {
    name: string
    link: string
  }[]
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const NavigationList: React.FC<NavigationListProps> = (props) => {
  const navigationItems = props.navigationItems

  return(
    <List>
      {navigationItems.map((item) => <FooterNavigationItem key={item.name} { ...item } />)}
    </List>
  )
}

export default NavigationList
