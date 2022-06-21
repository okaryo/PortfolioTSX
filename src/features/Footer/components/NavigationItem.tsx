import styled from '@emotion/styled'
import React from 'react'

type NavigationItemProps = {
  name: string
  link: string
}

const ListItem = styled.li`
  margin-top: 8px;
  + li {
    margin-left: 16px;
  }
`

const ListLink = styled.a`
  font-size: 16px;
  color: #3c3c3c;
  :hover {
    color: #61d800;
  }
`

const NavigationItem: React.FC<NavigationItemProps> = (props) => {
  const { name, link } = props

  return(
    <ListItem>
      <ListLink href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </ListLink>
    </ListItem>
  )
}

export default NavigationItem
