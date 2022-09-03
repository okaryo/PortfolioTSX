import { Button } from '@mui/material'

const ClosedButton = () => {
  return (
    <Button
      style={{ textTransform: 'none', fontFamily: 'inherit' }}
      variant='contained'
      disabled
    >
      Closed
    </Button>
  )
}

export default ClosedButton
