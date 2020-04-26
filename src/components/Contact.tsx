import React from 'react'
import '../stylesheets/Contact.css'


const Contact = () => {

  return(
    <div className="portfolio_contact_container">
      <h3>Feel free to contact me!</h3>
      <p>E-mail</p>
      <input type="text" value={"Please contact me on Twitter if you need me."} />
      <p>Subject</p>
      <input type="text" value={"Please contact me on Twitter if you need me."} />
      <p>Message</p>
      <textarea rows={10}>Please contact me on Twitter if you need me.</textarea>
      <div className="portfolio_contact_button">
        <button>
          <a
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
