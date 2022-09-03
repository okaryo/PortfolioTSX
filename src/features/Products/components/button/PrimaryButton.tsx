import styled from '@emotion/styled'
import { Button } from '@mui/material'

type PrimaryButtonProps = {
  link: string
  text: string
}

const StyledButton = styled(Button)`
  background-color: #61d800;
  color: #fff;
  box-shadow: 0 0 0 0;

  &:hover, &:focus {
    background-color: #61d800;
  }

  &:active {
    background-color: #61d800;
  }
`

const PrimaryButton = (props: PrimaryButtonProps) => {
  const { link, text } = props

  return (
    <a
      href={link}
      target={'_blank'}
      rel="noopener noreferrer"
    >
      <StyledButton
        style={{ textTransform: 'none', fontFamily: 'inherit' }}
        variant='contained'
      >
        {text}
      </StyledButton>
    </a>
  )
}

export default PrimaryButton
