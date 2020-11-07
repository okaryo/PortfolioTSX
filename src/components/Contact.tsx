import React, { useState } from 'react'
import firebase from 'firebase'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
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
    const confirmSubmit = window.confirm('Send an email. Is this content correct?')
    if (confirmSubmit) {
      const sendMail = firebase.functions().httpsCallable('sendMail')
      const data = {
        name: name,
        email: email,
        content: content
      }
      sendMail(data)
      setAlreadySent(true)
    }
  }

  return(
    <div>
      <div className="headerSpace" />
      <div className="main_body contact_body">
        <h3 className="contact_mainHeader">Feel free to contact me!</h3>

        <label className="contact_inputLabel" htmlFor="name">Name</label>
        <input id="name" name="name" className="contact_inputArea" type="text" value={name} onChange={handleChange} />

        <label className="contact_inputLabel" htmlFor="email">E-mail</label>
        <input id="email" name="email" className="contact_inputArea" type="text" value={email} onChange={handleChange} />

        <label className="contact_inputLabel" htmlFor="content">Content</label>
        <textarea id="content" name="content" className="contact_inputArea" rows={10} value={content} onChange={handleChange} ></textarea>

        <button className="contact_button" type="submit" onClick={handleSubmit} disabled={alreadySent} >
          {alreadySent ? 'Successfully Sent': 'Send'}
        </button>
      </div>
    </div>
  )
}

export default Contact
