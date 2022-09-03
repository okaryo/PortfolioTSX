import styled from '@emotion/styled'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material'

type GitHubButtonProps = {
  link: string
}

const StyledButton = styled(Button)`
  border-color: #24292e;
  color: #24292e;

  &:hover, &:focus {
    border-color: #24292e;
    background-color: #f2f2f2;
    color: #24292e;
  }

  &:active {
    border-color: #24292e;
    color: #24292e;
  }
`

const GitHubButton = (props: GitHubButtonProps) => {
  const { link } = props

  return (
    <a
      href={link}
      target={'_blank'}
      rel="noopener noreferrer"
    >
      <StyledButton
        style={{ textTransform: 'none', fontFamily: 'inherit' }}
        variant='outlined'
        startIcon={
          <GitHubIcon />
        }
      >
        GitHub
      </StyledButton>
    </a>
  )
}

export default GitHubButton
