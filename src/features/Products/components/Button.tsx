import ClosedButton from './button/ClosedButton'
import GitHubButton from './button/GitHubButton'
import PrimaryButton from './button/PrimaryButton'

type ButtonProps = {
  link: string
  type: string
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { link, type } = props

  let button
  if (type === 'closed') {
    button = <ClosedButton />
  } else if (type === 'github') {
    button = <GitHubButton link={link} />
  } else if (type === 'site') {
    button = <PrimaryButton link={link} text='Visit Site' />
  } else if (type === 'store') {
    button = <PrimaryButton link={link} text='Visit Store' />
  } else {
    button = <PrimaryButton link={link} text='Visit' />
  }

  return button

}

export default Button
