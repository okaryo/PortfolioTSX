import React from 'react'
import '../stylesheets/Contact.css'


const Contact = () => {
  const placeholder = "Please contact me on Twitter if you need me."

  return(
    <div>
      <div className="headerSpace" />
      <div className="main_body contact_body">
        <h3 className="contact_mainHeader">Feel free to contact me!</h3>
        <label className="contact_inputLabel" htmlFor="email">E-mail</label>
        <input id="email" className="contact_inputArea" type="text" placeholder={placeholder} />
        <label className="contact_inputLabel" htmlFor="subject">Subject</label>
        <input id="subject" className="contact_inputArea" type="text" placeholder={placeholder} />
        <label className="contact_inputLabel" htmlFor="message">Message</label>
        <textarea id="message" className="contact_inputArea" rows={10} placeholder={placeholder}></textarea>
        <button className="contact_button">
          <a
            className="contact_button-text"
            href="https://twitter.com/okaryo_tr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Twitter
          </a>
        </button>
      </div>
    </div>
  )
}

export default Contact
