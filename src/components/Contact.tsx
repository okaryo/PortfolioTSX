import React, { useState } from 'react'
import axios from 'axios'

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
    <div>
      <div className="headerSpace" />
      <div className="main_body contact_body">
        <h3 className="contact_mainHeader">Feel free to contact me!</h3>
        <p className="contact_error">{requestErrorText}</p>

        <label className="contact_inputLabel" htmlFor="name">Name</label>
        <input id="name" name="name" className="contact_inputArea" type="text" value={name} onChange={handleChange} />
        <p className="contact_error">{nameErrorText}</p>

        <label className="contact_inputLabel" htmlFor="email">E-mail</label>
        <input id="email" name="email" className="contact_inputArea" type="text" value={email} onChange={handleChange} />
        <p className="contact_error">{emailErrorText}</p>

        <label className="contact_inputLabel" htmlFor="content">Content</label>
        <textarea id="content" name="content" className="contact_inputArea" rows={10} value={content} onChange={handleChange} ></textarea>
        <p className="contact_error">{contentErrorText}</p>

        <button className="contact_button" type="submit" onClick={handleSubmit} disabled={alreadySent} >
          {alreadySent ? 'Successfully Sent': 'Send'}
        </button>
      </div>
    </div>
  )
}

export default Contact
