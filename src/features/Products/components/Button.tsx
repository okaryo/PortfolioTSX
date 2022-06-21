import styled from '@emotion/styled'

import {
  CLOSED_BUTTON_COLOR,
  GITHUB_BUTTON_COLOR,
  PRIMARY_BUTTON_COLOR} from '../constants/Colors'

type ButtonProps = {
  link: string
  type: string
}

const ActionButton = styled.div`
  display: inline-block;
  height: 36px;
  min-width: 64px;
  border-radius: 4px;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  cursor: pointer;

  + div {
    margin-left: 5px;
  }

  &:hover, &:focus {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                0px 1px 10px 0px rgba(0,0,0,.12);
  }

  &:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
                0px 8px 10px 1px rgba(0, 0, 0, 0.14),
                0px 3px 14px 2px rgba(0,0,0,.12);
  }
`

const ButtonLink = styled.a`
  display: inline-block;
  padding: 0 16px;
  width: 100%;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 600;
  border-radius: inherit;
  line-height: 36px;
`

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { link, type } = props
  const DEFAULT_BUTTON_TEXT_COLOR = '#FFFFFF'
  const DEFAULT_BUTTON_COLOR = CLOSED_BUTTON_COLOR
  let buttonColor = DEFAULT_BUTTON_COLOR
  let buttonTextColor = DEFAULT_BUTTON_TEXT_COLOR
  let buttonText
  if (type === 'closed') {
    buttonColor = CLOSED_BUTTON_COLOR
    buttonTextColor = '#231815'
    buttonText = 'Closed'
  } else if (type === 'github') {
    buttonColor = GITHUB_BUTTON_COLOR
    buttonText = 'GitHub'
  } else if (type === 'site') {
    buttonColor = PRIMARY_BUTTON_COLOR
    buttonText = 'Visit Site'
  } else if (type === 'store') {
    buttonColor = PRIMARY_BUTTON_COLOR
    buttonText = 'Visit Store'
  } else {
    buttonColor = PRIMARY_BUTTON_COLOR
    buttonText = 'Visit'
  }

  return(
    <ActionButton style={{ backgroundColor: buttonColor }}>
      <ButtonLink
        href={link}
        target={link && link !== '/' ? "_blank" : ""}
        rel="noopener noreferrer"
        style={{ color: buttonTextColor }}
      >
        {buttonText}
      </ButtonLink>
    </ActionButton>
  )
}

export default Button
