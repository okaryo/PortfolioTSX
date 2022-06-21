import { css } from '@emotion/react'
import styled from '@emotion/styled'
import axios from 'axios'
import React, { useState } from 'react'

import PageContainer from '../../components/PageContainer'

const Body = styled.div`
  margin: 0 auto;
  max-width: 700px;
`

const PageHeader = styled.h3`
  font-size: 20px;
`

const FormLabel = styled.label`
  display: inline-block;
  margin: 20px 0 4px;
  font-size: 18px;
`

const InputFieldStyle = css`
  width: 100%;
  border: 1px solid #d8dadf;
  padding: 10px;
  color: #57575f;
  font-size: 16px;
  letter-spacing: 2px;
  border-radius: 2px;
`

const InputField = styled.input`${InputFieldStyle}`

const TextAreaField = styled.textarea`${InputFieldStyle}`

const FormError = styled.p`
  font-size: 16px;
  color: #ff0000;
`

const SubmitButton = styled.button`
  margin-top: 16px;
  height: 36px;
  width: 100%;
  border-radius: 4px;
  border: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #61d800;
  outline: none;
  cursor: pointer;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  padding: 0 16px;

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

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [requestErrorText, setRequestErrorText] = useState('')
  const [nameErrorText, setNameErrorText] = useState('')
  const [emailErrorText, setEmailErrorText] = useState('')
  const [contentErrorText, setContentErrorText] = useState('')
  const [alreadySent, setAlreadySent] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value)
        break
      case 'email':
        setEmail(event.target.value)
        break
      case 'content':
        setContent(event.target.value)
        break
      default:
        console.error('not found')
    }
  }

  const handleSubmit = (_: React.FormEvent<HTMLButtonElement>) => {
    if (isValidateInputValues()) return

    const webHookUrl = import.meta.env.VITE_SLACK_WEBHOOK_URL
    const data = {
      'channel': 'idea',
      'text': `
name: ${name},
email: ${email},
content: ${content}`
    }
    axios.post(
      webHookUrl,
      JSON.stringify(data),
    )
    .then(_ => {
        setRequestErrorText('')
        setNameErrorText('')
        setEmailErrorText('')
        setContentErrorText('')
        setAlreadySent(true)
      }
    ).catch(_ => {
      setRequestErrorText('Error Occurred!')
    })
  }

  const isValidateInputValues = () => {
    let isError = false
    if (!isValidateNameValue()) isError = true
    if (!isValidateEmailValue()) isError = true
    if (!isValidateContentValue()) isError = true
    return isError
  }

  const isValidateNameValue = () => {
    if (name.length === 0) {
      setNameErrorText('enter your name')
      return false
    } else if (name.length > 255) {
      setNameErrorText('must be 255 characters or less')
      return false
    }
    return true
  }

  const isValidateEmailValue = () => {
    const EMAIL_FORMAT = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/

    if (email.length === 0) {
      setEmailErrorText('enter your email')
      return false
    } else if (email.length > 255) {
      setEmailErrorText('must be 255 characters or less')
      return false
    } else if (!email.match(EMAIL_FORMAT)) {
      setEmailErrorText('invalid email format')
      return false
    }
    return true
  }

  const isValidateContentValue = () => {
    if (content.length === 0) {
      setContentErrorText('enter content body')
      return false
    } else if (content.length > 1000) {
      setContentErrorText('must be 1000 characters or less')
      return false
    }
    return true
  }

  return(
    <PageContainer>
      <Body>
        <PageHeader>Feel free to contact me!</PageHeader>
        <FormError>{requestErrorText}</FormError>

        <FormLabel htmlFor='name'>Name</FormLabel>
        <InputField id='name' name='name' type="text" value={name} onChange={handleChange} />
        <FormError>{nameErrorText}</FormError>

        <FormLabel htmlFor="email">E-mail</FormLabel>
        <InputField id="email" name="email" type="text" value={email} onChange={handleChange} />
        <FormError>{emailErrorText}</FormError>

        <FormLabel htmlFor="content">Content</FormLabel>
        <TextAreaField id="content" name="content" rows={10} value={content} onChange={handleChange} ></TextAreaField>
        <FormError>{contentErrorText}</FormError>

        <SubmitButton type="submit" onClick={handleSubmit} disabled={alreadySent} >
          {alreadySent ? 'Successfully Sent': 'Send'}
        </SubmitButton>
      </Body>
    </PageContainer>
  )
}

export default Contact
